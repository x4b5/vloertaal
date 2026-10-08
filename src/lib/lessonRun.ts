/**
 * The answer moment inside a lesson: the run of right answers (graded exercises only), how the
 * character reacts to it, when the "3 OP RIJ" stamp shows, the chime's pitch, and the parts of
 * the progress bar. Pure functions, so the rules are tested (tests/lessonRun.test.ts).
 */

/** The run after an answer: one more when right, back to 0 (silently) on a miss. */
export function nextRun(run: number, correct: boolean): number {
  return correct ? run + 1 : 0;
}

/** Misses in a row: the head-scratch plays only on the first one. */
export function nextMisses(misses: number, correct: boolean): number {
  return correct ? 0 : misses + 1;
}

/**
 * How a character reacts to a right answer, by the run it extends:
 * 1–2 a pleased nod with a thumb up, 3–4 a happy jump, 5+ the jump plus a second fist pump.
 */
export type Cheer = 'pleased' | 'happy' | 'big';

export function cheerFor(run: number): Cheer {
  if (run >= 5) return 'big';
  if (run >= 3) return 'happy';
  return 'pleased';
}

/** Runs that earn the kraft "n OP RIJ" stamp (and the sweep over the progress bar). */
export const RUN_STAMPS = [3, 5, 8] as const;

export function runStampFor(run: number): number | null {
  return (RUN_STAMPS as readonly number[]).includes(run) ? run : null;
}

/** The chime goes up a whole tone for each answer in the run after the first, at most 3 steps. */
export function chimeStep(run: number): number {
  return Math.max(0, Math.min(3, run - 1));
}

/** Frequency multiplier for a number of whole tones (2 semitones each). */
export function wholeTones(steps: number): number {
  return Math.pow(2, (2 * steps) / 12);
}

export interface BarParts {
  /** Fraction of the bar filled in ink (exercises done). */
  done: number;
  /** Slot of the current exercise (yellow, under the ink fill once answered); null when finished. */
  now: number | null;
  /** Number of equal slots: the planned exercises plus the mistakes that come back. */
  slots: number;
  /** Fraction at the end of the bar for the mistakes that come back (kraft). */
  tail: number;
}

/**
 * The single progress bar: `index` is the exercise on screen, `checked` whether it has been
 * answered, `planned` the exercises planned at the start, `total` the queue with retries.
 */
export function barParts(index: number, checked: boolean, planned: number, total: number): BarParts {
  const slots = Math.max(1, total);
  const doneCount = Math.min(slots, index + (checked ? 1 : 0));
  return {
    done: doneCount / slots,
    now: index >= slots ? null : index,
    slots,
    tail: Math.max(0, total - planned) / slots,
  };
}
