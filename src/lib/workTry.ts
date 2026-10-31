import { tipForLesson } from '../content/culture';

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
  } catch {
    // Private mode: remembered for this visit only.
  }
  return line;
}
