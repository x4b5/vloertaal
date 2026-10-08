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

/**
 * Today's review as a lesson: the words, plus two sentences and one chat from the lessons those
 * words come from, so they come back in use. All items exist already (their sound too).
 */
export function dailyLesson(ids: string[]): Lesson {
  const words = ids.map((id) => wordById.get(id)).filter((w): w is Word => Boolean(w));
  const from = teachingLessons.filter((l) => l.words.some((w) => ids.includes(w.id)));
  const sentences: Sentence[] = [];
  for (const l of from) {
    const s = l.sentences[0];
    if (s && sentences.length < 2 && !sentences.some((x) => x.nl === s.nl)) sentences.push(s);
  }
  const dialogues: Dialogue[] = from.flatMap((l) => l.dialogues ?? []).slice(0, 1);
  return { id: DAILY_ID, title: 'Review today', words, sentences, dialogues, repeat: true };
}
