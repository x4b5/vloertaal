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
 * The reaction tier of a right answer, by the run it extends: 1–2 'pump', 3–4 'happy', 5+
 * 'big'. With the calm style every tier looks (almost) the same: a nod and a smile; the run
 * itself is shown by the run label.
 */
export type Cheer = 'pump' | 'happy' | 'big';

export function cheerFor(run: number): Cheer {
  if (run >= 5) return 'big';
  if (run >= 3) return 'happy';
  return 'pump';
}

/** Runs that earn the kraft "n OP RIJ" stamp (and the sweep over the progress bar). */
export const RUN_STAMPS = [3, 5, 8] as const;

export function runStampFor(run: number): number | null {
  return (RUN_STAMPS as readonly number[]).includes(run) ? run : null;
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
