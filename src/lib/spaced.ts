import { allWords, teachingLessons } from '../content/curriculum';
import { courseUnits } from '../content/courses';
import { allRegionUnits, regionTaalLessons } from '../content/regio';
import type { RuleStep } from '../content/regels/types';
import type { Dialogue, Lesson, Sentence, Unit, Word } from '../content/types';
import { dayKey } from './progress';
import type { Track } from './track';

/**
 * "Herhaal vandaag": spaced repetition with a card box (Leitner). Every word the learner met
 * (in the work-rules track: every question of a finished lesson, by its step id) gets a card in
 * box 1. Right in a review moves it one box up and it comes back later (1, 2, 4, 7, 14, 30
 * days); wrong sends it back to box 1, so it comes back tomorrow.
 */
export interface Card {
  /** 1–6 */
  box: number;
  /** Local date (YYYY-MM-DD) from which the word is due again. */
  due: string;
}
export type Cards = Record<string, Card>;

/** Days until the next review, per box. */
export const INTERVALS = [1, 2, 4, 7, 14, 30] as const;
export const MAX_BOX = INTERVALS.length;
/** At most this many words per daily review, so it stays a few minutes. */
export const DAILY_MAX = 10;
/** A review needs a few words for its exercises (match board, choices); topped up with the next due. */
const DAILY_MIN = 4;
export const DAILY_ID = 'l.today';

export function addDays(day: string, n: number): string {
  const [y, m, d] = day.split('-').map(Number);
  return dayKey(new Date(y, m - 1, d + n));
}

// With the words of the regions' lessons (src/content/regio): they come back like any other word.
// A region's file loads late (only for a learner of that region): rebuilt when one comes in.
let wordIndex: { regions: number; byId: Map<string, Word> } | null = null;
function wordById(): Map<string, Word> {
  const regionLessons = regionTaalLessons();
  if (wordIndex?.regions !== regionLessons.length) {
    wordIndex = { regions: regionLessons.length, byId: new Map([...allWords, ...regionLessons.flatMap((l) => l.words)].map((w) => [w.id, w])) };
  }
  return wordIndex.byId;
}

/**
 * After a lesson: new items get a card (back tomorrow); an item answered wrong goes back to box 1.
 * The items are word ids (the language course) or the ids of a rules lesson's questions.
 */
export function addLessonItems(cards: Cards, ids: readonly string[], results: Record<string, boolean>, today: string): Cards {
  const next = { ...cards };
  for (const id of ids) {
    if (!next[id] || results[id] === false) next[id] = { box: 1, due: addDays(today, 1) };
  }
  return next;
}

/** After a lesson of the language course: its words (addLessonItems by word id). */
export function addLessonWords(cards: Cards, words: Word[], results: Record<string, boolean>, today: string): Cards {
  return addLessonItems(cards, words.map((w) => w.id), results, today);
}

/** After a daily review: right moves a card up a box, wrong sends it back to box 1. */
export function applyReview(cards: Cards, results: Record<string, boolean>, today: string): Cards {
  const next = { ...cards };
  for (const [id, right] of Object.entries(results)) {
    const card = next[id] ?? { box: 1, due: today };
    const box = right ? Math.min(card.box + 1, MAX_BOX) : 1;
    next[id] = { box, due: addDays(today, right ? INTERVALS[box - 1] : 1) };
  }
  return next;
}

/**
 * Cards for learners from before this feature: the words of their finished lessons, spread over
 * the next days so the first reviews are not one big pile.
 */
export function seedCards(completed: Record<string, unknown>, today: string): Cards {
  const cards: Cards = {};
  let i = 0;
  for (const l of teachingLessons.filter((l) => completed[l.id])) {
    for (const w of l.words) {
      if (cards[w.id]) continue;
      cards[w.id] = { box: 1, due: addDays(today, Math.floor(i / DAILY_MAX)) };
      i++;
    }
  }
  return cards;
}

/** The ids of the words (or, in the work-rules track, the questions) due today (oldest first, then the lowest box). */
export function dueIds(cards: Cards, today: string, track: Track = 'taal'): string[] {
  const known = knownIn(track);
  return Object.entries(cards)
    .filter(([id, c]) => c.due <= today && known(id))
    .sort(([, a], [, b]) => (a.due < b.due ? -1 : a.due > b.due ? 1 : a.box - b.box))
    .map(([id]) => id);
}

/** The words for today's review: up to DAILY_MAX due words, topped up with the next ones to come. */
export function dailyWordIds(cards: Cards, today: string): string[] {
  const due = dueIds(cards, today).slice(0, DAILY_MAX);
  if (!due.length || due.length >= DAILY_MIN) return due;
  const words = wordById();
  const soon = Object.entries(cards)
    .filter(([id, c]) => c.due > today && words.has(id))
    .sort(([, a], [, b]) => (a.due < b.due ? -1 : a.due > b.due ? 1 : a.box - b.box))
    .map(([id]) => id);
  return [...due, ...soon].slice(0, DAILY_MIN);
}

/** A day as a whole number (days since 1 Jan 1970), for a rotation that changes every day. */
export function dayNumber(day: string): number {
  const [y, m, d] = day.split('-').map(Number);
  return Math.round(Date.UTC(y, (m || 1) - 1, d || 1) / 86400000);
}

/**
 * Today's review as a lesson: the words, plus two sentences and one chat from the lessons those
 * words come from, so they come back in use. All items exist already (their sound too). The
 * cards' boxes go along: a word that was right before gets a harder question (exercises.ts).
 *
 * The source lessons go weakest first (the lowest card box among today's words), then the most
 * recent one. Each lesson offers another of its sentences (and chats) from day to day, so over
 * the weeks every sentence of a lesson comes back, not only its first one. The chat comes from
 * the weakest (or most recent) lesson. Deterministic: the same words, cards and day give the same
 * review. `day`: today (YYYY-MM-DD); without it the first sentence of each lesson.
 */
export function dailyLesson(ids: string[], cards: Cards = {}, day?: string): Lesson {
  const words = ids.map((id) => wordById().get(id)).filter((w): w is Word => Boolean(w));
  const boxes = Object.fromEntries(words.map((w) => [w.id, cards[w.id]?.box ?? 1]));
  const idSet = new Set(ids);
  const n = day ? dayNumber(day) : 0;
  const from = teachingLessons
    .map((l, at) => ({ l, at, box: Math.min(...l.words.filter((w) => idSet.has(w.id)).map((w) => boxes[w.id] ?? 1)) }))
    .filter(({ box }) => Number.isFinite(box))
    .sort((a, b) => a.box - b.box || b.at - a.at);
  // Four turns every three days. Half a turn a day (as before) locked on parity: on the 2-4-7-14
  // schedule a lesson first reviewed on an even day is 0, 1, 3, 6 turns on, so with 3 sentences
  // it never shows its third (one lesson more, l.agency, moved many lessons onto even days: 47% of
  // the sentences came back in 6 weeks). A whole turn a day brings the same sentence back after
  // any multiple of 3 days (3 = 1 + 2, 6 = 2 + 4, and the 24 days a lesson often waits for its
  // next turn as a source). 4/3 a day turns 3 days into 4 and 24 into 32: another sentence.
  // Over 108 simulated learners 64% came back on average (half a turn 58%, a whole turn 60%).
  // A lesson's place in the course shifts its turn, so lessons reviewed together differ.
  const turn = Math.floor((4 * n) / 3);
  const pick = <T>(xs: readonly T[], at: number, k = 0): T | undefined => (xs.length ? xs[(turn + at + k) % xs.length] : undefined);
  const sentences: Sentence[] = [];
  for (const { l, at } of from) {
    if (sentences.length >= 2) break;
    const s = pick(l.sentences, at);
    if (s && !sentences.some((x) => x.nl === s.nl)) sentences.push(s);
  }
  // Only one source lesson: its second sentence comes along as the other one.
  if (sentences.length < 2 && from.length) {
    const { l, at } = from[0];
    const s = pick(l.sentences, at, 1);
    if (s && !sentences.some((x) => x.nl === s.nl)) sentences.push(s);
  }
  // The chat: from a lesson with the weakest words (the most recent of them, on the next day the
  // one before it, and so on), so it is not always the same lesson's chat.
  const chatty = from.filter(({ l }) => l.dialogues?.length);
  const weakest = chatty.filter(({ box }) => box === chatty[0]?.box);
  // The day number alone keeps its parity when a card comes back 2, 4 or 14 days later, so of two
  // equally weak lessons the same one always gave the chat (one lesson more in Safety, l.accident,
  // left about 1 in 8 chats out for 12 weeks). Adding half the day number breaks that lock; the
  // lesson still turns every one or two days.
  const chatFrom = weakest.length ? weakest[(n + Math.floor(n / 2)) % weakest.length] : undefined;
  const chat = chatFrom ? pick(chatFrom.l.dialogues!, chatFrom.at) : undefined;
  const dialogues: Dialogue[] = chat ? [chat] : [];
  return { id: DAILY_ID, title: 'Review today', words, sentences, dialogues, repeat: true, boxes };
}

/**
 * The "Herhaal vandaag" card on the path, which stays put all day:
 * - 'due': words are waiting (tap to review);
 * - 'done': today's review is finished, or nothing is due today (the "GEDAAN" stamp);
 * - 'first': lessons are done but no review yet, the first words come back tomorrow.
 * null: no words met yet, so no card.
 * One review per day: after it, leftover due words roll over to tomorrow (an "extra ronde" stays
 * possible); `tomorrow` is how many words come back then, `extra` how many are still due now.
 */
export interface DailyCard {
  state: 'due' | 'done' | 'first';
  /** Words in today's review (due state). */
  due: number;
  tomorrow: number;
  extra: number;
}

export function dailyCard(cards: Cards, today: string, reviewDay?: string, track: Track = 'taal'): DailyCard | null {
  const known = knownIn(track);
  const max = track === 'regels' ? RULE_DAILY_MAX : DAILY_MAX;
  const ids = Object.keys(cards).filter(known);
  if (!ids.length) return null;
  const dueNow = dueIds(cards, today, track).length;
  const tomorrow = Math.min(dueIds(cards, addDays(today, 1), track).length, max);
  if (reviewDay === today) return { state: 'done', due: 0, tomorrow, extra: dueNow };
  if (dueNow > 0) return { state: 'due', due: Math.min(dueNow, max), tomorrow, extra: 0 };
  return { state: reviewDay ? 'done' : 'first', due: 0, tomorrow, extra: 0 };
}

/** "N woorden sterker": how many words moved up a box in a review. */
export function strongerCount(before: Cards, after: Cards): number {
  return Object.entries(after).filter(([id, c]) => c.box > (before[id]?.box ?? 0) && before[id] !== undefined).length;
}

/* ---- The work-rules track: "Herhaal vandaag" asks questions of finished lessons again. ---- */

/** At most this many questions in a daily review of the work-rules track. */
export const RULE_DAILY_MAX = 6;

/** The rules questions (graded steps): true/false, what do you do, who do you ask, the payslip, the card. */
export type GradedRuleStep = Extract<RuleStep, { kind: 'truefalse' | 'whatdo' | 'whoask' | 'payslip' | 'card' }>;
const GRADED = new Set<RuleStep['kind']>(['truefalse', 'whatdo', 'whoask', 'payslip', 'card']);
export const isGradedStep = (s: RuleStep): s is GradedRuleStep => GRADED.has(s.kind);

/** The questions of a rules lesson: the cards it adds to the box (a language lesson has none). */
export function gradedStepIds(lesson: Lesson): string[] {
  return (lesson.steps ?? []).filter(isGradedStep).map((s) => s.id);
}

/** Every question of the rules course by id (the course registers late: rebuilt when it changes). */
let stepIndex: { from: Unit[]; regions: number; byId: Map<string, GradedRuleStep> } | null = null;
function ruleStepById(): Map<string, GradedRuleStep> {
  const from = courseUnits('regels');
  // The regions' rules units (src/content/regio) register late too, with the region's own file.
  const regions = allRegionUnits('regels');
  if (stepIndex?.from !== from || stepIndex.regions !== regions.length) {
    const byId = new Map<string, GradedRuleStep>();
    for (const u of [...from, ...regions]) for (const l of u.lessons) for (const s of l.steps ?? []) if (isGradedStep(s)) byId.set(s.id, s);
    stepIndex = { from, regions: regions.length, byId };
  }
  return stepIndex.byId;
}

/** Is this card one of the track's own (a word, or a rules question)? The two tracks share one box. */
function knownIn(track: Track): (id: string) => boolean {
  if (track === 'taal') {
    const words = wordById();
    return (id) => words.has(id);
  }
  const byId = ruleStepById();
  return (id) => byId.has(id);
}

/**
 * The questions for today's review in the work-rules track: up to RULE_DAILY_MAX due ones, oldest
 * first, then the lowest box (the same box logic as words). Nothing is topped up: a question
 * that is not due yet waits for its day (a rules question stands on its own, unlike a word that
 * needs others for a match board).
 */
export function dailyRuleIds(cards: Cards, today: string): string[] {
  return dueIds(cards, today, 'regels').slice(0, RULE_DAILY_MAX);
}

/**
 * Today's review in the work-rules track, as a lesson: only questions (no story, no rule card,
 * no model sentence), at most RULE_DAILY_MAX, in the order given. Unknown ids are left out.
 */
export function dailyRuleLesson(ids: readonly string[]): Lesson {
  const byId = ruleStepById();
  const steps = [...new Set(ids)].map((id) => byId.get(id)).filter((s): s is GradedRuleStep => Boolean(s)).slice(0, RULE_DAILY_MAX);
  return { id: DAILY_ID, title: 'Herhaal vandaag', words: [], sentences: [], steps, repeat: true };
}
