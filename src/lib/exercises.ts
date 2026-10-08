import { allReplies, allWords, units } from '../content/curriculum';
import { isMixLesson } from '../content/review';
import { mainLessons, type SectorChoice } from '../content/sectors';
import { type CultureTip, tipForLesson } from '../content/culture';
import type { ChatLine, Dialogue, Lesson, Sentence, Word } from '../content/types';
import { tokenize } from './answers';
import { type Access, lessonAllowed } from './access';
import { createRng, sample, shuffle } from './random';
import { hasPicture, lookKey } from './wordPicture';

export type Exercise =
  | { kind: 'intro'; word: Word }
  | { kind: 'meaning'; word: Word; options: Word[] }
  /** Pick the Dutch word for a meaning; from picture cards, or text cards when `textOnly`. */
  | { kind: 'dutch'; word: Word; options: Word[]; textOnly?: boolean }
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

/** Same answer, or the same (or a near-identical) picture: never two of these in one choice. */
function clashes(a: Word, b: Word, pictured: boolean): boolean {
  return a.id === b.id || a.nl === b.nl || a.en === b.en || a.emoji === b.emoji || (pictured && lookKey(a) === lookKey(b));
}

/**
 * Up to n wrong options for `word`, from the first pool first. Each one differs from the word and
 * from every other option. `pictured`: only words with a picture, and no look-alike pictures.
 */
function distractors(word: Word, pools: readonly (readonly Word[])[], n: number, rng: () => number, pictured = false): Word[] {
  const picked: Word[] = [];
  for (const pool of pools) {
    if (picked.length >= n) break;
    for (const w of shuffle(pool, rng)) {
      if (picked.length >= n) break;
      if (pictured && !hasPicture(w)) continue;
      if (clashes(w, word, pictured) || picked.some((p) => clashes(w, p, pictured))) continue;
      picked.push(w);
    }
  }
  return picked;
}

function options(word: Word, lesson: Lesson, rng: () => number, n = 3): Word[] {
  return shuffle([word, ...distractors(word, [lesson.words, allWords], n - 1, rng)], rng);
}

/** The words of the lesson's unit: the fallback pool for picture choices (related words). */
function unitWords(lesson: Lesson): Word[] {
  return units.find((u) => u.lessons.some((l) => l.id === lesson.id))?.lessons.flatMap((l) => l.words) ?? [];
}

/**
 * "Which one is …?": pick the Dutch word. With picture cards when the word has a picture and the
 * lesson and its unit have enough other picture words (no abstract word, no look-alikes); else
 * as text cards (Dutch words only), with the same prompt.
 */
export function dutchExercise(word: Word, lesson: Lesson, rng: () => number, n = 4): Extract<Exercise, { kind: 'dutch' }> {
  if (hasPicture(word)) {
    const others = distractors(word, [lesson.words, unitWords(lesson)], n - 1, rng, true);
    if (others.length === n - 1) return { kind: 'dutch', word, options: shuffle([word, ...others], rng) };
  }
  return { kind: 'dutch', word, options: options(word, lesson, rng, n), textOnly: true };
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
 * Mixed review (last lesson of a unit): the words are not new, so no intros either; each word
 * gets a "What does this mean?" instead.
 * quiet ("Without sound"): every listening exercise becomes a reading one on the same word, so
 * the lesson keeps its length and nothing needs to be heard.
 */
export function buildLesson(lesson: Lesson, opts: { review: boolean; seed?: number; quiet?: boolean }): Exercise[] {
  const rng = createRng(opts.seed ?? Date.now());
  const words = lesson.words;
  const out: Exercise[] = [];

  const mix = isMixLesson(lesson) || Boolean(lesson.repeat);
  if (!opts.review && !mix) {
    words.forEach((word, i) => {
      out.push({ kind: 'intro', word });
      // After every second new word, quiz one of the two just learned.
      if (i % 2 === 1) {
        const target = words[i - Math.floor(rng() * 2)];
        out.push({ kind: 'meaning', word: target, options: options(target, lesson, rng) });
      }
    });
  } else {
    for (const word of mix ? shuffle(words, rng) : sample(words, 3, rng)) {
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
  // second one the meaning (pick the Dutch word from picture or text cards).
  out.push({ kind: opts.quiet ? 'meaning' : 'listen', word: l1, options: options(l1, lesson, rng) });
  // The picture choice asks for a word that has a picture (text cards if the lesson has none).
  const pictured = words.filter(hasPicture);
  const target = hasPicture(d1) || !pictured.length ? d1 : pictured[Math.floor(rng() * pictured.length)];
  out.push(dutchExercise(target, lesson, rng, 4));

  for (const sentence of lesson.sentences) {
    out.push({ kind: 'build', sentence, tiles: buildTiles(sentence, lesson, rng) });
  }

  // Complete the conversation: use the words in a real exchange with a colleague.
  for (const dialogue of lesson.dialogues ?? []) {
    out.push({ kind: 'chat', dialogue, options: chatOptions(dialogue, rng) });
  }

  out.push(opts.quiet ? dutchExercise(l2, lesson, rng, 3) : { kind: 'listen', word: l2, options: options(l2, lesson, rng) });
  // Typing what you hear has no reading twin; read the word and pick its meaning instead.
  out.push(opts.quiet ? { kind: 'meaning', word: t1, options: options(t1, lesson, rng) } : { kind: 'type', word: t1 });
  return out;
}

/**
 * A lesson is open when it is the first of its unit or the previous lesson of the unit is done.
 * The course order (basis units plus the learner's sector, see coursePlan) is the advice the
 * path highlights with isNextInCourse; it no longer blocks a unit.
 */
export function isUnlocked(lessonId: string, completed: Record<string, unknown>, access: Access = 'full'): boolean {
  // The access level wins over progress: a preview never opens a later unit.
  if (!lessonAllowed(lessonId, access)) return false;
  // Every unit can be entered at its first lesson (a coach can send a learner to one topic);
  // inside a unit the lessons open in order.
  const unit = units.find((u) => u.lessons.some((l) => l.id === lessonId));
  if (!unit) return false;
  const i = unit.lessons.findIndex((l) => l.id === lessonId);
  return i === 0 || Boolean(completed[unit.lessons[i - 1].id]);
}

/** The next lesson along the learner's own course (basis units plus their sector), the one the path highlights. */
export function isNextInCourse(lessonId: string, completed: Record<string, unknown>, access: Access = 'full', sector?: SectorChoice): boolean {
  if (!lessonAllowed(lessonId, access) || completed[lessonId]) return false;
  const order = mainLessons(sector);
  const index = order.findIndex((l) => l.id === lessonId);
  if (index < 0) return false;
  return index === 0 || Boolean(completed[order[index - 1].id]);
}

const ARTICLES = new Set(['de', 'het', 'een']);

/**
 * A picture for a sentence: the pictured word (from the whole course) whose Dutch, without its
 * article, appears in the sentence. The longest match wins ("de veiligheidsschoenen" over "de
 * schoen"). Undefined when the sentence has no pictured word.
 */
export function sentencePicture(sentence: Sentence, words: readonly Word[] = allWords): Word | undefined {
  const tokens = tokenize(sentence.nl).map((t) => t.toLowerCase());
  const has = (part: string[]) =>
    part.length > 0 && tokens.some((_, i) => part.every((p, j) => tokens[i + j] === p));
  let best: Word | undefined;
  let bestLen = 0;
  for (const w of words) {
    if (!hasPicture(w)) continue;
    const part = tokenize(w.nl).map((t) => t.toLowerCase()).filter((t) => !ARTICLES.has(t));
    const len = part.join(' ').length;
    if (len >= 3 && len > bestLen && has(part)) { best = w; bestLen = len; }
  }
  return best;
}
