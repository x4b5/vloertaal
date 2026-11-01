import { tipForLesson } from '../content/culture';
import { countRaw } from './count';

/**
 * "Probeer het vandaag op je werk" (components/WorkTry.tsx): at the end of a lesson of the
 * language course, one sentence of that lesson to say at work today. Not after every lesson:
 * only a lesson's first time (not a review), only a lesson with a workplace tip of its own (its
 * "Zeg het zo" sentence is made for the work floor), and at most once a day (the first such
 * lesson of the day). Plain text with a speaker on the result: nothing more to tap.
 */
export interface WorkTryLine {
  id: string;
  nl: string;
  en: string;
}

/** A sentence short enough to keep in mind for the day (one or two short sentences). */
export const WORK_TRY_MAX_WORDS = 12;

/** The lesson's sentence to try at work: the "Zeg het zo" phrase of its own tip, when short enough. */
export function workTryLine(lessonId: string): WorkTryLine | undefined {
  const phrase = tipForLesson(lessonId)?.phrase;
  if (!phrase || phrase.nl.trim().split(/\s+/).length > WORK_TRY_MAX_WORDS) return undefined;
  return { id: phrase.id, nl: phrase.nl, en: phrase.en };
}

/** The day the card last showed, on this device only (a lost value only shows it once more). */
const KEY = 'vloertaal:work-try';
let dayMemory: string | null = null;

function shownOn(): string | null {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return dayMemory;
  }
}

/**
 * The card for a finished lesson, or undefined. `first`: the lesson's first time (no review).
 * Showing it marks the day (`today`, YYYY-MM-DD), so the next lesson today has none.
 */
export function workTryFor(lessonId: string, first: boolean, today: string): WorkTryLine | undefined {
  if (!first || shownOn() === today) return undefined;
  const line = workTryLine(lessonId);
  if (!line) return undefined;
  dayMemory = today;
  try {
    localStorage.setItem(KEY, today);
    localStorage.setItem(ASK_KEY, JSON.stringify({ lesson: lessonId, day: today }));
  } catch {
    // Private mode: remembered for this visit only (and no "Gelukt?" on a later day).
  }
  return line;
}

/**
 * "Gelukt?" (components/GeluktCard.tsx): on a later day, the home asks once whether the sentence
 * of the card was said at work. Two answers, "Ja, gelukt" and "Nog niet"; either one closes it.
 * Only the lesson and the day of the card are kept, on this device. The answer is counted
 * anonymously ("/e/gelukt/ja", "/e/gelukt/nog-niet", src/lib/count.ts), with nothing else.
 */
const ASK_KEY = 'vloertaal:work-try-ask';

export type GeluktAnswer = 'ja' | 'nog-niet';

/** The sentence to ask about today, or undefined: a card shown on an earlier day, not yet answered. */
export function geluktDue(today: string): WorkTryLine | undefined {
  let asked: { lesson?: unknown; day?: unknown } | null = null;
  try {
    asked = JSON.parse(localStorage.getItem(ASK_KEY) ?? 'null');
  } catch {
    return undefined;
  }
  if (!asked || typeof asked.lesson !== 'string' || typeof asked.day !== 'string' || asked.day >= today) return undefined;
  return workTryLine(asked.lesson);
}

/** The answer: counted (when counting is on) and the question closed for good. */
export function answerGelukt(answer: GeluktAnswer): void {
  try {
    localStorage.removeItem(ASK_KEY);
  } catch {
    // Nothing kept: nothing to close.
  }
  countRaw(`/e/gelukt/${answer}`, 'gelukt');
}
