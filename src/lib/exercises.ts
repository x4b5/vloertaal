import { allReplies, allWords, units } from '../content/curriculum';
import { isOtherSector, mainLessons, type SectorChoice } from '../content/sectors';
import { type CultureTip, tipForLesson } from '../content/culture';
import type { ChatLine, Dialogue, Lesson, Sentence, Word } from '../content/types';
import { tokenize } from './answers';
import { type Access, lessonAllowed } from './access';
import { createRng, sample, shuffle } from './random';

export type Exercise =
  | { kind: 'intro'; word: Word }
  | { kind: 'meaning'; word: Word; options: Word[] }
  | { kind: 'dutch'; word: Word; options: Word[] }
  | { kind: 'listen'; word: Word; options: Word[] }
  | { kind: 'match'; words: Word[] }
  | { kind: 'build'; sentence: Sentence; tiles: string[] }
  | { kind: 'type'; word: Word }
  | { kind: 'chat'; dialogue: Dialogue; options: ChatLine[] }
  /** "How it works here": a workplace-culture card (not graded). */
  | { kind: 'tip'; tip: CultureTip }
  /** "What do you do?": the tip's situation with shuffled options. */
  | { kind: 'situation'; tip: CultureTip; options: CultureTip['options'] };

/**
 * Exercises that can only be answered by hearing: the word is not on screen. They are left out
 * in "Without sound" (and skipped when the learner can't listen right now).
 */
export const AUDIO_ONLY_KINDS: readonly Exercise['kind'][] = ['listen', 'type'];

export function needsAudio(ex: Exercise): boolean {
  return AUDIO_ONLY_KINDS.includes(ex.kind);
}

/** Intros only teach; every other exercise is graded. */
export function isGraded(ex: Exercise): boolean {
  return ex.kind !== 'intro' && ex.kind !== 'tip';
}

function distractors(word: Word, lesson: Lesson, n: number, rng: () => number): Word[] {
  const clash = (w: Word) => w.id === word.id || w.nl === word.nl || w.en === word.en || w.emoji === word.emoji;
  const local = lesson.words.filter((w) => !clash(w));
  const picked = sample(local, n, rng);
  if (picked.length < n) {
    const ids = new Set(picked.map((w) => w.id));
    const rest = allWords.filter((w) => !clash(w) && !ids.has(w.id));
    picked.push(...sample(rest, n - picked.length, rng));
  }
  return picked;
}

function options(word: Word, lesson: Lesson, rng: () => number, n = 3): Word[] {
  return shuffle([word, ...distractors(word, lesson, n - 1, rng)], rng);
}

/** Reply options for a chat: the right reply plus replies from other dialogues. */
export function chatOptions(dialogue: Dialogue, rng: () => number, n = 3): ChatLine[] {
  const { reply } = dialogue;
  const others = allReplies.filter((r) => r.id !== reply.id && r.nl !== reply.nl);
  return shuffle([reply, ...sample(others, n - 1, rng)], rng);
}

/** Word tiles for a sentence: the real words plus a few plausible extras. */
export function buildTiles(sentence: Sentence, lesson: Lesson, rng: () => number): string[] {
  const real = tokenize(sentence.nl);
  const realSet = new Set(real.map((t) => t.toLowerCase()));
  const pool = [
    ...lesson.sentences.filter((s) => s.id !== sentence.id).flatMap((s) => tokenize(s.nl)),
    ...lesson.words.flatMap((w) => tokenize(w.nl)),
  ].filter((t) => !realSet.has(t.toLowerCase()));
  const unique = [...new Map(pool.map((t) => [t.toLowerCase(), t])).values()];
  const extra = sample(unique, Math.min(3, Math.max(2, Math.ceil(real.length / 2))), rng);
  return shuffle([...real, ...extra], rng);
}

/**
 * Builds the exercise queue for a lesson.
 * First time: introduce each word, check it right away, then mix and apply.
 * Review: skip the intros and practise everything.
 * quiet ("Without sound"): every listening exercise becomes a reading one on the same word, so
 * the lesson keeps its length and nothing needs to be heard.
 */
export function buildLesson(lesson: Lesson, opts: { review: boolean; seed?: number; quiet?: boolean }): Exercise[] {
  const rng = createRng(opts.seed ?? Date.now());
  const words = lesson.words;
  const out: Exercise[] = [];

  if (!opts.review) {
    words.forEach((word, i) => {
      out.push({ kind: 'intro', word });
      // After every second new word, quiz one of the two just learned.
      if (i % 2 === 1) {
        const target = words[i - Math.floor(rng() * 2)];
        out.push({ kind: 'meaning', word: target, options: options(target, lesson, rng) });
      }
    });
  } else {
    for (const word of sample(words, 3, rng)) {
      out.push({ kind: 'meaning', word, options: options(word, lesson, rng) });
    }
  }

  // Language first, then one workplace custom, right after the new words.
  const tip = tipForLesson(lesson.id);
  if (tip) {
    if (!opts.review) out.push({ kind: 'tip', tip });
    out.push({ kind: 'situation', tip, options: shuffle(tip.options, rng) });
  }

  out.push({ kind: 'match', words: sample(words, Math.min(5, words.length), rng) });

  const [l1, l2, d1, t1] = shuffle(words, rng);
  // Without sound the first listening task shows the Dutch word (pick its meaning) and the
  // second one the meaning (pick the Dutch word from picture cards); same options either way.
  out.push({ kind: opts.quiet ? 'meaning' : 'listen', word: l1, options: options(l1, lesson, rng) });
  out.push({ kind: 'dutch', word: d1, options: options(d1, lesson, rng, 4) });

  for (const sentence of lesson.sentences) {
    out.push({ kind: 'build', sentence, tiles: buildTiles(sentence, lesson, rng) });
  }

  // Complete the conversation: use the words in a real exchange with a colleague.
  for (const dialogue of lesson.dialogues ?? []) {
    out.push({ kind: 'chat', dialogue, options: chatOptions(dialogue, rng) });
  }

  out.push({ kind: opts.quiet ? 'dutch' : 'listen', word: l2, options: options(l2, lesson, rng) });
  // Typing what you hear has no reading twin; read the word and pick its meaning instead.
  out.push(opts.quiet ? { kind: 'meaning', word: t1, options: options(t1, lesson, rng) } : { kind: 'type', word: t1 });
  return out;
}

/**
 * Lessons unlock in order: a lesson is open when the previous one is done. The order is the
 * learner's own path (basis units plus their sector, see coursePlan); another sector's unit
 * never blocks it. Those units (under "Andere sectoren") are open from the start, with their
 * lessons in order within the unit.
 */
export function isUnlocked(
  lessonId: string,
  completed: Record<string, unknown>,
  access: Access = 'full',
  sector?: SectorChoice,
): boolean {
  // The access level wins over progress: a preview never opens a later unit.
  if (!lessonAllowed(lessonId, access)) return false;
  const unit = units.find((u) => u.lessons.some((l) => l.id === lessonId));
  if (unit && isOtherSector(unit.id, sector)) {
    const i = unit.lessons.findIndex((l) => l.id === lessonId);
    return i === 0 || Boolean(completed[unit.lessons[i - 1].id]);
  }
  const order = mainLessons(sector);
  const index = order.findIndex((l) => l.id === lessonId);
  if (index <= 0) return index === 0;
  return Boolean(completed[order[index - 1].id]);
}
