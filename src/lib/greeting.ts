/**
 * Bram's one line on the home screen: a calm word from the mascot that fits the day. No guilt, no
 * nagging, no server: it only reads the progress on this phone.
 *
 * Which line (the first that fits):
 *  1. today is done (a lesson or the review)           "Done for today. See you tomorrow."
 *  2. the first visit today, after missed days         "Welcome back. Let's go on."
 *  3. the first visit today, with a streak of 2+       "Day N in a row."
 *  4. the first visit today                            "Good to see you."
 *  5. later visits: words to repeat today              "N words to repeat today."
 *  6. later visits: a streak of 2+                     "Day N in a row."
 *  7. otherwise                                        "Good to see you."
 */
import { daysBetween, dayKey, doneToday, currentStreak, type Progress } from './progress';
import type { UiKey } from '../i18n/types';

export type GreetingKind = 'hello' | 'back' | 'due' | 'streak' | 'done';

export interface GreetingInput {
  /** A lesson or today's review is finished today. */
  done: boolean;
  /** The learner practised before, but not yesterday or today (one or more whole days missed). */
  missed: boolean;
  /** The home is shown for the first time today on this phone. */
  first: boolean;
  /** Words in today's review that are still to do. */
  due: number;
  /** The day streak as the top bar shows it. */
  streak: number;
}

export interface Greeting {
  kind: GreetingKind;
  /** The number in the line (words to repeat, or the day of the streak). */
  n?: number;
}

/** The streak line starts on day 2 (day 1 is just "good to see you"). */
const STREAK_FROM = 2;

export function greetingFor(s: GreetingInput): Greeting {
  if (s.done) return { kind: 'done' };
  if (s.first) {
    if (s.missed) return { kind: 'back' };
    if (s.streak >= STREAK_FROM) return { kind: 'streak', n: s.streak };
    return { kind: 'hello' };
  }
  if (s.due > 0) return { kind: 'due', n: s.due };
  if (s.streak >= STREAK_FROM) return { kind: 'streak', n: s.streak };
  return { kind: 'hello' };
}

/** The inputs from the saved progress (already settled for today: see settleStreak). */
export function greetingInput(p: Progress, today: Date, due: number, first: boolean): GreetingInput {
  const key = dayKey(today);
  return {
    done: doneToday(p, today),
    missed: Boolean(p.lastDay && daysBetween(p.lastDay, key) >= 2),
    first,
    due,
    streak: currentStreak(p, today),
  };
}

const GREETED_KEY = 'vloertaal:greeted';

/** Was the home already shown today on this phone? (Private mode: every visit counts as the first.) */
export function greetedToday(today: Date): boolean {
  try { return localStorage.getItem(GREETED_KEY) === dayKey(today); } catch { return false; }
}

/** Remember that the home was shown today, so the next visit gets the line for the day's state. */
export function rememberGreeted(today: Date): void {
  try { localStorage.setItem(GREETED_KEY, dayKey(today)); } catch { /* private mode: not remembered */ }
}

/**
 * Bram's line on the result screen, as calm as the home line: after a review, "repeating helps";
 * after a lesson, "you know these words" with no mistakes, "step by step" with most right, and
 * with many mistakes only that practising was good and the hard words come back (they do: the
 * review brings them). Never a score judgement.
 */
export function resultLineFor(kind: 'lesson' | 'daily' | 'review', right: number, total: number): UiKey {
  if (kind !== 'lesson') return 'bramReview';
  if (total > 0 && right === total) return 'bramPerfect';
  if (total === 0 || right / total >= 0.6) return 'bramGood';
  return 'bramHard';
}
