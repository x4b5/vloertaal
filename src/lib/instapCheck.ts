import { courseUnits } from '../content/courses';
import { isMixLesson } from '../content/review';
import { THEMES, themeOf, themeUnitIds, type ThemeId } from '../content/themes';
import type { Lesson, Unit } from '../content/types';
import { hasCheck, isCheckRecord } from './certificate';
import { buildTiles, chatOptions, dutchExercise, options, type Exercise } from './exercises';
import { dayKey, type LessonRecord, type Progress } from './progress';
import { createRng, shuffle } from './random';
import { trackOf } from './track';

export { hasCheck, lessonViaCheck } from './certificate';

/**
 * "Ik ken dit al: korte check" (werkplan Fase 2, stap 2.2): a learner whose start test ("Wat ken
 * je al?", src/lib/toets.ts) shows they know the basics can tick off the first topics of the path
 * with a short check of 5 questions, instead of doing every lesson. Only in the language track.
 *
 *  - Who: the start test done, with at least CHECK_TOETS_MIN of 6 right in Woorden and in
 *    Luisteren. No start test: no check (and no button).
 *  - Which topics: those of CHECK_THEMES (Starten), the first topics of the path.
 *  - The check: 5 questions (CHECK_KINDS), with the lesson player and a fixed list of kinds.
 *    Passed with at least CHECK_PASS right the first time.
 *  - Ticking off is always the learner's choice: a passed check asks "Afvinken?" first.
 *  - Kept: each lesson of the topic not done yet gets a record with `check` (the day), so the
 *    topic counts as done everywhere (route, suggestions, the coach card) and unitDone works as
 *    before. But there is no certificate (src/lib/certificate.ts unitEarned): the topic page and
 *    the coach card say "via check". A lesson done for real later gets a normal record; once no
 *    lesson of the topic is "via check" any more, the certificate comes.
 *  - The first lesson of each theme is never ticked off by a check: it stays open.
 *  - Back: "Toch de lessen doen" takes the check records away again.
 */

/** The themes whose topics a check can tick off. */
export const CHECK_THEMES: readonly ThemeId[] = ['theme.start'];
/** The start test: at least this many right in Woorden and in Luisteren (of 6 each). */
export const CHECK_TOETS_MIN = 5;
/** The check's questions, in this order. */
export const CHECK_KINDS = ['meaning', 'dutch', 'listen', 'build', 'chat'] as const;
export const CHECK_SIZE = CHECK_KINDS.length;
/** Passed with at least this many right the first time (of 5). */
export const CHECK_PASS = 4;

type Completed = Record<string, LessonRecord | unknown>;


/** The start test is high enough for the check (Woorden and Luisteren). */
export function checkLevel(p: Pick<Progress, 'toets'>): boolean {
  const run = p.toets?.instap;
  return Boolean(run && run.right.words >= CHECK_TOETS_MIN && run.right.listen >= CHECK_TOETS_MIN);
}

/** The first lesson of a theme (its first topic in course order): a check never ticks it off. */
export function themeFirstLessonId(theme: ThemeId): string | undefined {
  const ids = new Set(themeUnitIds(theme, 'taal'));
  return courseUnits('taal').find((u) => ids.has(u.id))?.lessons[0]?.id;
}

/** The first lesson of every theme of the language track. */
const firstLessons = (): Set<string> => new Set(THEMES.map((t) => themeFirstLessonId(t.id)).filter((x): x is string => Boolean(x)));

/** A topic a check can be about: one of CHECK_THEMES, in the language course. */
export function checkTopic(unit: Unit): boolean {
  const theme = themeOf(unit.id)?.id;
  return Boolean(theme && CHECK_THEMES.includes(theme)) && courseUnits('taal').some((u) => u.id === unit.id);
}

/** The lessons of the topic a passed check ticks off: those not done yet, never a theme's first lesson. */
export function checkLessons(unit: Unit, completed: Completed): Lesson[] {
  const first = firstLessons();
  return unit.lessons.filter((l) => !completed[l.id] && !first.has(l.id));
}

/** The topic page offers the check: the language track, a high enough start test, a topic of
 *  CHECK_THEMES with lessons left that a check can tick off, and no check in it yet. */
export function checkOffered(p: Progress, unit: Unit): boolean {
  return trackOf(p) === 'taal' && checkLevel(p) && checkTopic(unit) && !hasCheck(unit, p.completed) && checkLessons(unit, p.completed).length > 0;
}

/** The check passed: at least CHECK_PASS right the first time. */
export const checkPassed = (right: number): boolean => right >= CHECK_PASS;

/**
 * The learner chose "Afvinken" after a passed check: every lesson of the topic that a check may
 * tick off gets a check record (the day). Lessons done before keep their own record.
 */
export function recordCheck<P extends Progress>(p: P, unit: Unit, today: Date): P {
  const day = dayKey(today);
  const add = checkLessons(unit, p.completed);
  if (!add.length) return p;
  const completed = { ...p.completed };
  for (const l of add) completed[l.id] = { best: 0, times: 0, check: day };
  return { ...p, completed };
}

/** "Toch de lessen doen": the topic's check records go; lessons done for real stay. */
export function undoCheck<P extends Progress>(p: P, unit: Unit): P {
  if (!hasCheck(unit, p.completed)) return p;
  const completed = { ...p.completed };
  for (const l of unit.lessons) if (isCheckRecord(completed[l.id])) delete completed[l.id];
  return { ...p, completed };
}

/** The day of the topic's check (the latest), when there is one. */
export function checkDay(unit: Unit, completed: Completed): string | undefined {
  const days = unit.lessons.map((l) => completed[l.id]).filter(isCheckRecord).map((r) => (r as LessonRecord).check as string);
  return days.sort().pop();
}

/**
 * The 5 questions of the check (CHECK_KINDS), from the topic's teaching lessons (those the check
 * would tick off first): the meaning of a word, the Dutch word, a word heard (without sound: its
 * meaning, another word), a sentence to build, and a chat. Seeded.
 */
export function checkExercises(unit: Unit, seed: number, quiet = false): Exercise[] {
  const rng = createRng(seed >>> 0);
  const teaching = unit.lessons.filter((l) => !isMixLesson(l));
  const first = firstLessons();
  const pool = teaching.filter((l) => !first.has(l.id));
  const from = pool.length ? pool : teaching;
  const words = shuffle(from.flatMap((l) => l.words.map((word) => ({ word, lesson: l }))), rng);
  // Three different words (by their Dutch), so no question gives another one away.
  const picked: typeof words = [];
  for (const w of words) if (!picked.some((x) => x.word.nl === w.word.nl)) picked.push(w);
  const [a, b, c] = picked;
  const sentences = shuffle(from.flatMap((l) => l.sentences.map((sentence) => ({ sentence, lesson: l }))), rng)
    // A short sentence: the check is short too.
    .sort((x, y) => x.sentence.nl.split(' ').length - y.sentence.nl.split(' ').length);
  const s = sentences[0];
  const chats = shuffle(from.flatMap((l) => (l.dialogues ?? []).map((dialogue) => ({ dialogue, lesson: l }))), rng);
  const d = chats[0];
  if (!a || !b || !c || !s || !d) throw new Error(`check: ${unit.id} has too little to ask`);
  return [
    { kind: 'meaning', word: a.word, options: options(a.word, a.lesson, rng) },
    dutchExercise(b.word, b.lesson, rng),
    quiet ? { kind: 'meaning', word: c.word, options: options(c.word, c.lesson, rng) } : { kind: 'listen', word: c.word, options: options(c.word, c.lesson, rng) },
    { kind: 'build', sentence: s.sentence, tiles: buildTiles(s.sentence, s.lesson, rng) },
    { kind: 'chat', dialogue: d.dialogue, options: chatOptions(d.dialogue, rng, 3, d.lesson) },
  ];
}

/**
 * The lesson the player shows the check in: the topic's id and title (the player's heading names
 * the topic) and all its words, sentences and chats (for a mistake that comes back).
 */
export function checkLesson(unit: Unit): Lesson {
  const teaching = unit.lessons.filter((l) => !isMixLesson(l));
  return {
    id: unit.id,
    title: unit.title,
    words: teaching.flatMap((l) => l.words),
    sentences: teaching.flatMap((l) => l.sentences),
    dialogues: teaching.flatMap((l) => l.dialogues ?? []),
  };
}
