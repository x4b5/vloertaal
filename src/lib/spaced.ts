import { allWords, teachingLessons } from '../content/curriculum';
import type { Dialogue, Lesson, Sentence, Word } from '../content/types';
import { dayKey } from './progress';

/**
 * "Herhaal vandaag": spaced repetition with a card box (Leitner). Every word the learner met
 * gets a card in box 1. Right in a review moves it one box up and it comes back later
 * (1, 2, 4, 7, 14, 30 days); wrong sends it back to box 1, so it comes back tomorrow.
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

const wordById = new Map(allWords.map((w) => [w.id, w]));

/** After a lesson: new words get a card (back tomorrow); a word answered wrong goes back to box 1. */
export function addLessonWords(cards: Cards, words: Word[], results: Record<string, boolean>, today: string): Cards {
  const next = { ...cards };
  for (const w of words) {
    if (!next[w.id] || results[w.id] === false) next[w.id] = { box: 1, due: addDays(today, 1) };
  }
  return next;
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

/** The ids of the words due today (oldest first, then the lowest box). */
export function dueIds(cards: Cards, today: string): string[] {
  return Object.entries(cards)
    .filter(([id, c]) => c.due <= today && wordById.has(id))
    .sort(([, a], [, b]) => (a.due < b.due ? -1 : a.due > b.due ? 1 : a.box - b.box))
    .map(([id]) => id);
}

/** The words for today's review: up to DAILY_MAX due words, topped up with the next ones to come. */
export function dailyWordIds(cards: Cards, today: string): string[] {
  const due = dueIds(cards, today).slice(0, DAILY_MAX);
  if (!due.length || due.length >= DAILY_MIN) return due;
  const soon = Object.entries(cards)
    .filter(([id, c]) => c.due > today && wordById.has(id))
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
  const words = ids.map((id) => wordById.get(id)).filter((w): w is Word => Boolean(w));
  const boxes = Object.fromEntries(words.map((w) => [w.id, cards[w.id]?.box ?? 1]));
  const idSet = new Set(ids);
  const n = day ? dayNumber(day) : 0;
  const from = teachingLessons
    .map((l, at) => ({ l, at, box: Math.min(...l.words.filter((w) => idSet.has(w.id)).map((w) => boxes[w.id] ?? 1)) }))
    .filter(({ box }) => Number.isFinite(box))
    .sort((a, b) => a.box - b.box || b.at - a.at);
  // Rotate every second day (a card comes back after 1, 2, 4, 7, 14 … days; turning each day
  // brought the same sentence back on many of those days, every second day spreads them). A
  // lesson's place in the course shifts its turn, so lessons reviewed together differ.
  const turn = Math.floor(n / 2);
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
  const chatFrom = weakest.length ? weakest[n % weakest.length] : undefined;
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

export function dailyCard(cards: Cards, today: string, reviewDay?: string): DailyCard | null {
  const ids = Object.keys(cards).filter((id) => wordById.has(id));
  if (!ids.length) return null;
  const dueNow = dueIds(cards, today).length;
  const tomorrow = Math.min(dueIds(cards, addDays(today, 1)).length, DAILY_MAX);
  if (reviewDay === today) return { state: 'done', due: 0, tomorrow, extra: dueNow };
  if (dueNow > 0) return { state: 'due', due: Math.min(dueNow, DAILY_MAX), tomorrow, extra: 0 };
  return { state: reviewDay ? 'done' : 'first', due: 0, tomorrow, extra: 0 };
}

/** "N woorden sterker": how many words moved up a box in a review. */
export function strongerCount(before: Cards, after: Cards): number {
  return Object.entries(after).filter(([id, c]) => c.box > (before[id]?.box ?? 0) && before[id] !== undefined).length;
}
