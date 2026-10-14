import { allDialogues, allLessons, allReplies, allWords, teachingLessons, units } from '../content/curriculum';
import { isMixLesson } from '../content/review';
import { mainLessons, type SectorChoice } from '../content/sectors';
import { type CultureTip, tipForLesson } from '../content/culture';
import type { ChatLine, Dialogue, Lesson, Sentence, Word } from '../content/types';
import { tokenize } from './answers';
import { type Access, lessonAllowed } from './access';
import { createRng, sample, shuffle } from './random';
import { hasPicture, lookKey } from './wordPicture';
import { type SpeakItem, withSpeaking } from './speaking';

export type Exercise =
  | { kind: 'intro'; word: Word }
  | { kind: 'meaning'; word: Word; options: Word[] }
  /** Pick the Dutch word for a meaning; from picture cards, or text cards when `textOnly`. */
  | { kind: 'dutch'; word: Word; options: Word[]; textOnly?: boolean }
  | { kind: 'listen'; word: Word; options: Word[] }
  | { kind: 'match'; words: Word[] }
  /** `salt` (a retry) changes the words offered step by step (buildSteps). */
  | { kind: 'build'; sentence: Sentence; tiles: string[]; salt?: number }
  /** Type what you hear. `options` (the word and two others): for a learner who reads only a
   *  non-Latin script, the same exercise becomes "hear and pick the written word" (see
   *  lib/writing.ts); without them it is always typed. */
  | { kind: 'type'; word: Word; options?: Word[] }
  | { kind: 'chat'; dialogue: Dialogue; options: ChatLine[] }
  /** "How it works here": a workplace-culture card (not graded). */
  | { kind: 'tip'; tip: CultureTip }
  /** "What do you do?": the tip's situation with shuffled options. */
  | { kind: 'situation'; tip: CultureTip; options: CultureTip['options'] }
  /** "Say it": hear the Dutch, record yourself, compare, rate yourself. Never graded (lib/speaking.ts). */
  | { kind: 'speak'; item: SpeakItem };

/**
 * Exercises that can only be answered by hearing: the word is not on screen. They are left out
 * in "Without sound" (and skipped when the learner can't listen right now).
 */
export const AUDIO_ONLY_KINDS: readonly Exercise['kind'][] = ['listen', 'type'];

export function needsAudio(ex: Exercise): boolean {
  return AUDIO_ONLY_KINDS.includes(ex.kind);
}

/** Intros, tips and speaking practice are not graded; every other exercise is. */
export function isGraded(ex: Exercise): boolean {
  return ex.kind !== 'intro' && ex.kind !== 'tip' && ex.kind !== 'speak';
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

/**
 * Words the learner met before this lesson: those of the lessons before it in the course
 * (empty for the first lesson, and for lessons outside the course such as today's review).
 */
export function wordsBefore(lesson: Lesson): Word[] {
  const at = teachingLessons.findIndex((l) => l.id === lesson.id);
  return at > 0 ? teachingLessons.slice(0, at).flatMap((l) => l.words) : [];
}

/**
 * The target and n − 1 wrong options. Wrong options come from words the learner has already
 * met: the lesson's own words (`known`, by default all of them), then earlier lessons. Only
 * when those run out does a word from elsewhere in the course fill in, so an option is never a
 * word that is still to come when a known one can take its place.
 */
function options(word: Word, lesson: Lesson, rng: () => number, n = 3, known: readonly Word[] = lesson.words): Word[] {
  const before = wordsBefore(lesson);
  const met = distractors(word, [known, before], n - 1, rng);
  // The very first quiz of the course knows only two words: a choice of two is fair.
  if (met.length === n - 1 || (met.length >= 1 && !before.length)) return shuffle([word, ...met], rng);
  const rest = [lesson.words, allWords].map((pool) => pool.filter((w) => !met.some((m) => clashes(w, m, false))));
  return shuffle([word, ...met, ...distractors(word, rest, n - 1 - met.length, rng)], rng);
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
export function dutchExercise(word: Word, lesson: Lesson, rng: () => number, n = 3, textOnly = false): Extract<Exercise, { kind: 'dutch' }> {
  if (hasPicture(word) && !textOnly) {
    // Known words first: the lesson's, then the unit's earlier lessons', then the rest of the unit.
    const unit = unitWords(lesson);
    const before = new Set(wordsBefore(lesson).map((w) => w.id));
    const others = distractors(word, [lesson.words, unit.filter((w) => before.has(w.id)), unit], n - 1, rng, true);
    if (others.length === n - 1) return { kind: 'dutch', word, options: shuffle([word, ...others], rng) };
  }
  return { kind: 'dutch', word, options: options(word, lesson, rng, n), textOnly: true };
}

/** The first word of a line, lower case ("Tot morgen!" → "tot"). */
const firstWord = (s: string) => tokenize(s)[0]?.toLowerCase() ?? '';

/**
 * Replies the learner has been taught by the time of `lesson`: the dialogues of the lessons up
 * to it in the course (for a mixed review, those before it). Outside the course (today's review),
 * up to the lesson the dialogue comes from.
 */
function taughtReplies(dialogue: Dialogue, lesson?: Lesson): ChatLine[] {
  let at = lesson ? allLessons.findIndex((l) => l.id === lesson.id) : -1;
  if (at < 0) at = allLessons.findIndex((l) => l.dialogues?.some((d) => d.reply.id === dialogue.reply.id));
  if (at < 0) return [];
  const upTo = new Set(allLessons.slice(0, at + 1).map((l) => l.id));
  return teachingLessons.filter((l) => upTo.has(l.id)).flatMap((l) => (l.dialogues ?? []).map((d) => d.reply));
}

/**
 * Reply options for a chat: the right reply plus wrong ones that are taught and not confusable.
 * Wrong replies come from the same or earlier lessons first (the rest of the course only when
 * those run out); none starts with the same word as the right reply ("Tot morgen!" next to "Tot
 * straks!"), none answers a question that opens the same way, and no two wrong replies start
 * with the same word either.
 */
export function chatOptions(dialogue: Dialogue, rng: () => number, n = 3, lesson?: Lesson): ChatLine[] {
  const { reply } = dialogue;
  const first = firstWord(reply.nl);
  // A reply to a question that starts the same way ("Kun je zaterdag …?") could be right here too.
  const opening = (s: string) => tokenize(s).slice(0, 2).join(' ').toLowerCase();
  const asked = opening(dialogue.prompt.nl);
  const promptOf = (r: ChatLine) => allDialogues.find((d) => d.reply.id === r.id)?.prompt.nl ?? '';
  const clear = (r: ChatLine) => r.id !== reply.id && r.nl !== reply.nl && firstWord(r.nl) !== first && opening(promptOf(r)) !== asked;
  const picked: ChatLine[] = [];
  const pools = [taughtReplies(dialogue, lesson).filter(clear), allReplies.filter(clear), allReplies.filter((r) => r.id !== reply.id && r.nl !== reply.nl)];
  for (const pool of pools) {
    for (const r of shuffle(pool, rng)) {
      if (picked.length >= n - 1) break;
      if (picked.some((p) => p.nl === r.nl || firstWord(p.nl) === firstWord(r.nl))) continue;
      picked.push(r);
    }
  }
  return shuffle([reply, ...picked], rng);
}

/**
 * One letter apart in a way that is easy to mix up: one vowel swapped for another ("je" / "ja",
 * "dat" / "dit") or one letter added or left out ("u" / "uw"). A different consonant ("ik" /
 * "is") reads as a different word and is fine.
 */
function oneLetterApart(a: string, b: string): boolean {
  if (Math.abs(a.length - b.length) > 1) return false;
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i++;
  if (i === a.length && i === b.length) return false;
  if (a.length === b.length) return /[aeiouy]/.test(a[i]) && /[aeiouy]/.test(b[i]) && a.slice(i + 1) === b.slice(i + 1);
  return a.length < b.length ? a.slice(i) === b.slice(i + 1) : a.slice(i + 1) === b.slice(i);
}

/**
 * A wrong tile that looks or sounds like a word of the sentence: the same stem or a part of it
 * ("draag" / "dragen", "morgen" / "goedemorgen"), or one letter apart ("je" / "ja"). Those are
 * never offered as extras.
 */
export function nearMiss(tile: string, word: string): boolean {
  const a = tile.toLowerCase();
  const b = word.toLowerCase();
  if (a === b) return true;
  if (oneLetterApart(a, b)) return true;
  if (Math.min(a.length, b.length) >= 3 && (a.includes(b) || b.includes(a))) return true;
  // Same stem: a shared start of 3 letters or more once doubled vowels and -en/-e/-t are gone.
  const stem = (s: string) => s.replace(/(aa|ee|oo|uu)/g, (m) => m[0]).replace(/(en|e|t)$/, '');
  const sa = stem(a);
  const sb = stem(b);
  let k = 0;
  while (k < sa.length && k < sb.length && sa[k] === sb[k]) k++;
  return k >= 3 && k >= Math.min(sa.length, sb.length) - 1;
}

/** Word tiles for a sentence: the real words plus a few plausible extras (never near-misses). */
export function buildTiles(sentence: Sentence, lesson: Lesson, rng: () => number): string[] {
  const real = tokenize(sentence.nl);
  const realSet = new Set(real.map((t) => t.toLowerCase()));
  const pool = [
    ...lesson.sentences.filter((s) => s.id !== sentence.id).flatMap((s) => tokenize(s.nl)),
    ...lesson.words.flatMap((w) => tokenize(w.nl)),
  ].filter((t) => !realSet.has(t.toLowerCase()) && !real.some((r) => nearMiss(t, r)));
  const unique = [...new Map(pool.map((t) => [t.toLowerCase(), t])).values()];
  const extra = sample(unique, Math.min(3, Math.max(2, Math.ceil(real.length / 2))), rng);
  return shuffle([...real, ...extra], rng);
}

/** A small, stable number for a text (seeds the word-by-word choices of a sentence). */
function hashText(text: string): number {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) h = Math.imul(h ^ text.charCodeAt(i), 16777619);
  return h >>> 0;
}

let names: Set<string> | null = null;
/**
 * Proper names in the course ("Ali", "Mark"): words written with a capital in the middle of a
 * sentence (not after a full stop). A name offered as a wrong word keeps its capital.
 */
export function courseNames(): Set<string> {
  if (names) return names;
  names = new Set();
  const texts = [
    ...allLessons.flatMap((l) => [...l.sentences.map((s) => s.nl), ...l.words.map((w) => w.nl)]),
    ...allDialogues.flatMap((d) => [d.prompt.nl, d.reply.nl]),
    ...allReplies.map((r) => r.nl),
  ];
  for (const text of texts) {
    const raw = text.split(/\s+/);
    raw.forEach((r, i) => {
      if (i === 0 || /[.!?…:]["”’]?$/.test(raw[i - 1])) return;
      const w = r.replace(/[^\p{L}\p{N}'-]/gu, '');
      if (/^\p{Lu}\p{Ll}/u.test(w)) names!.add(w);
    });
  }
  return names;
}

/** Cards on a guided match board. */
export const MATCH_PAIRS = 3;
/**
 * Words asked on a guided match board: one fewer than the cards, so one meaning card is never
 * used and the last word is never a forced tap on the only card left.
 */
export const MATCH_ASKED = 2;

/**
 * Build word by word: for each place in the sentence, the right word and (at most) two wrong
 * ones, shuffled. A word that comes later in the same sentence is the first choice for a wrong
 * one (so the learner must know the order, not just spot the one word of the sentence); the
 * other wrong one is an extra tile (buildTiles: plausible words of the lesson), rotated from step
 * to step so the wrong words keep changing. Near the end, with no later words left, both are
 * extras. None of them is the right word or one letter or a stem apart from it ("je" / "ja"),
 * and the two wrong ones never look alike either. At the start of the sentence every option
 * starts with a capital, so the capital gives nothing away; further on the extras are lower case
 * (names keep their capital). Pure and seeded by the sentence (and `salt`, which a retry
 * changes), so the same sentence always offers the same words.
 */
export function buildSteps(nl: string, tiles: readonly string[], n = 3, salt = 0): string[][] {
  const real = tokenize(nl);
  const left = real.map((w) => w.toLowerCase());
  const extras = [...new Map(tiles.filter((t) => {
    const k = left.indexOf(t.toLowerCase());
    if (k < 0) return true;
    left.splice(k, 1);
    return false;
  }).map((t) => [t.toLowerCase(), t])).values()];
  const rng = createRng((hashText(nl) ^ Math.imul(salt, 0x9e3779b1)) >>> 0);
  // Where the extras' rotation starts (seeded): step i offers extras[off + i], then the next.
  const order = shuffle(extras, rng);
  const off = Math.floor(rng() * Math.max(1, order.length));
  const cap = (w: string) => w.charAt(0).toUpperCase() + w.slice(1);
  // Further on the extras are lower case, except a name ("Ali" never becomes "ali").
  const lower = (w: string) => (courseNames().has(w) ? w : w.toLowerCase());
  return real.map((word, i) => {
    const later = shuffle(real.slice(i + 1).filter((w) => w.toLowerCase() !== word.toLowerCase()), rng).map((w) => (i === 0 ? cap(w) : w));
    const rotated = order.map((_, k) => order[(off + i + k) % order.length]).map((w) => (i === 0 ? cap(w) : lower(w)));
    const picked: string[] = [];
    const take = (pool: readonly string[], max: number) => {
      for (const w of pool) {
        if (picked.length >= max) break;
        if (nearMiss(w, word) || picked.some((p) => p.toLowerCase() === w.toLowerCase() || nearMiss(w, p))) continue;
        picked.push(w);
      }
    };
    // One later word first, then a rotating extra, then whatever is left of both.
    take(later, Math.min(1, n - 1));
    take(rotated, n - 1);
    take(later, n - 1);
    return shuffle([word, ...picked], rng);
  });
}

/** The exercise kinds a review rotates through, per word (see reviewKind). */
export const REVIEW_KINDS = ['meaning', 'listen', 'dutch', 'type'] as const;
export type ReviewKind = (typeof REVIEW_KINDS)[number];

/**
 * The kind of question for the i-th word of a review. Words rotate through: what does it mean,
 * what do you hear, which one is it (help language → Dutch) and write what you hear (or hear and
 * pick the written word). A word in box 2 or higher (it was right before) only gets the harder
 * directions: help language → Dutch, listening and writing. Without sound, listening becomes
 * help language → Dutch and writing becomes "what does it mean" (help language → Dutch from box
 * 2 on), so nothing needs to be heard.
 */
export function reviewKind(i: number, box = 1, quiet = false, offset = 0): ReviewKind {
  const kinds: readonly ReviewKind[] = box >= 2 ? ['dutch', 'listen', 'type'] : REVIEW_KINDS;
  const kind = kinds[(offset + i) % kinds.length];
  if (!quiet) return kind;
  return kind === 'listen' || (kind === 'type' && box >= 2) ? 'dutch' : kind === 'type' ? 'meaning' : kind;
}

function reviewExercise(kind: ReviewKind, word: Word, lesson: Lesson, rng: () => number): Exercise {
  if (kind === 'dutch') return dutchExercise(word, lesson, rng, 3, true);
  return { kind, word, options: options(word, lesson, rng) };
}

/** Same ids in the same order? */
const sameOrder = (a: readonly { id: string }[], b: readonly { id: string }[]) => a.length === b.length && a.every((x, i) => x.id === b[i].id);

/**
 * The options in another order: never the order they had, and the answer (`answerId`) on another
 * place when it can be. Seeded.
 */
function reorder<T extends { id: string }>(items: readonly T[], rng: () => number, answerId?: string): T[] {
  if (items.length < 2) return [...items];
  const at = (xs: readonly T[]) => xs.findIndex((x) => x.id === answerId);
  let best: T[] = [...items.slice(1), items[0]];
  for (let k = 0; k < 8; k++) {
    const out = shuffle(items, rng);
    if (sameOrder(out, items)) continue;
    best = out;
    if (answerId === undefined || at(out) !== at(items)) return out;
  }
  // A rotation always moves every option (and so the answer) one place on.
  return answerId !== undefined && at(best) === at(items) ? [...items.slice(1), items[0]] : best;
}

/**
 * A mistake that comes back at the end of the lesson, in a new form: its options in another
 * order (the answer on another place), and for "What does it mean?" other wrong options where the
 * lesson has them. A sentence offers other words step by step, a match board asks its words in
 * another order (another card stays unused). Pure and seeded.
 */
export function forRetry(ex: Exercise, lesson: Lesson, seed: number): Exercise {
  const rng = createRng((seed ^ 0x7e7a1) >>> 0);
  switch (ex.kind) {
    case 'meaning': {
      const old = new Set(ex.options.map((o) => o.id));
      for (let k = 0; k < 6; k++) {
        const fresh = options(ex.word, lesson, rng);
        if (!fresh.some((o) => !old.has(o.id))) continue;
        // The answer moves too (its old place would be a hint).
        const was = ex.options.findIndex((o) => o.id === ex.word.id);
        return { ...ex, options: fresh.findIndex((o) => o.id === ex.word.id) === was ? reorder(fresh, rng, ex.word.id) : fresh };
      }
      return { ...ex, options: reorder(ex.options, rng, ex.word.id) };
    }
    case 'dutch':
    case 'listen':
      return { ...ex, options: reorder(ex.options, rng, ex.word.id) };
    case 'type':
      return ex.options ? { ...ex, options: reorder(ex.options, rng, ex.word.id) } : ex;
    case 'chat':
      return { ...ex, options: reorder(ex.options, rng, ex.dialogue.reply.id) };
    case 'situation':
      return { ...ex, options: reorder(ex.options, rng, ex.tip.options.find((o) => o.best)?.id) };
    case 'build':
      return { ...ex, salt: (ex.salt ?? 0) + 1 };
    case 'match':
      return { ...ex, words: reorder(ex.words, rng, ex.words[0]?.id) };
    default:
      return ex;
  }
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
export function buildLesson(lesson: Lesson, opts: { review: boolean; seed?: number; quiet?: boolean; speak?: boolean }): Exercise[] {
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
        // Only words introduced so far (and earlier lessons') are wrong options here.
        out.push({ kind: 'meaning', word: target, options: options(target, lesson, rng, 3, words.slice(0, i + 1)) });
      }
    });
  } else {
    if (mix) {
      // A mixed review (and today's review) rotates the kind of question per word, so it is not
      // the same recognition question every time; words that were right before get the harder
      // directions (reviewKind).
      const offset = Math.floor(rng() * REVIEW_KINDS.length);
      shuffle(words, rng).forEach((word, i) => {
        out.push(reviewExercise(reviewKind(i, lesson.boxes?.[word.id] ?? 1, opts.quiet, offset), word, lesson, rng));
      });
    } else {
      for (const word of sample(words, 3, rng)) {
        out.push({ kind: 'meaning', word, options: options(word, lesson, rng) });
      }
    }
  }

  // Language first, then one workplace custom, right after the new words.
  const tip = tipForLesson(lesson.id);
  if (tip) {
    if (!opts.review) out.push({ kind: 'tip', tip });
    out.push({ kind: 'situation', tip, options: shuffle(tip.options, rng) });
  }

  // Guided matching: three cards, two Dutch words asked one at a time (components/Exercises.tsx).
  out.push({ kind: 'match', words: sample(words, Math.min(MATCH_PAIRS, words.length), rng) });

  const [l1, l2, d1, t1] = shuffle(words, rng);
  // Without sound the first listening task shows the Dutch word (pick its meaning) and the
  // second one the meaning (pick the Dutch word from picture or text cards).
  out.push({ kind: opts.quiet ? 'meaning' : 'listen', word: l1, options: options(l1, lesson, rng) });
  // The picture choice asks for a word that has a picture (text cards if the lesson has none).
  const pictured = words.filter(hasPicture);
  const target = hasPicture(d1) || !pictured.length ? d1 : pictured[Math.floor(rng() * pictured.length)];
  // At most three answers on a screen (the "at most 3" rule).
  out.push(dutchExercise(target, lesson, rng, 3));

  for (const sentence of lesson.sentences) {
    out.push({ kind: 'build', sentence, tiles: buildTiles(sentence, lesson, rng) });
  }

  // Complete the conversation: use the words in a real exchange with a colleague.
  for (const dialogue of lesson.dialogues ?? []) {
    out.push({ kind: 'chat', dialogue, options: chatOptions(dialogue, rng, 3, lesson) });
  }

  out.push(opts.quiet ? dutchExercise(l2, lesson, rng, 3) : { kind: 'listen', word: l2, options: options(l2, lesson, rng) });
  // Typing what you hear has no reading twin; read the word and pick its meaning instead.
  // The written-word options for "hear and pick" come from their own generator, so the rest of
  // the lesson (and a saved place in it) stays the same as before they existed.
  const pickRng = createRng(((opts.seed ?? 0) ^ 0x5eed) >>> 0);
  out.push(opts.quiet ? { kind: 'meaning', word: t1, options: options(t1, lesson, rng) } : { kind: 'type', word: t1, options: options(t1, lesson, pickRng) });
  // Speaking practice (Settings, on by default; never "Without sound"): one "say it" near the
  // end, placed after the rest is built so the other exercises stay the same with or without it.
  if (opts.speak && !opts.quiet) return withSpeaking<Exercise>(out, lesson, (item) => ({ kind: 'speak', item }), opts.seed ?? 0);
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
 * The lesson words behind some words of a sentence ("helm" → "de helm"): every word whose Dutch,
 * without its article, contains one of them (case does not matter). Articles alone match nothing.
 */
export function wordsInSentence(tokens: readonly string[], words: readonly Word[]): Word[] {
  const wanted = new Set(tokens.map((t) => t.toLowerCase()).filter((t) => !ARTICLES.has(t)));
  return words.filter((w) => tokenize(w.nl).some((t) => wanted.has(t.toLowerCase()) && !ARTICLES.has(t.toLowerCase())));
}

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
