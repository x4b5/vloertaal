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

/**
 * An answer built step by step (a sentence word by word, a word letter by letter) is graded by
 * the wrong taps on the way. A sentence: any wrong tap is a mistake. A spelled word
 * (`typoAllowed`): one wrong letter is accepted with a spelling note, like one typo when typing;
 * more is a mistake.
 */
export function stepGrade(wrongTaps: number, typoAllowed = false): { correct: boolean; almost: boolean } {
  if (wrongTaps <= 0) return { correct: true, almost: false };
  if (typoAllowed && wrongTaps === 1) return { correct: true, almost: true };
  return { correct: false, almost: false };
}

/** Guided matching: which word is on, which meanings are matched, how many wrong taps. */
export interface MatchState {
  step: number;
  done: string[];
  wrong: number;
}

export const matchStart: MatchState = { step: 0, done: [], wrong: 0 };

/**
 * A tap on a meaning card in a guided match (`words` in the order they come on). The meaning of
 * the word that is on makes the pair and the next word comes on; another meaning is a wrong tap
 * and the word stays; a meaning already matched is not a choice any more (nothing happens).
 */
export function matchTap(words: readonly { id: string }[], state: MatchState, id: string): { state: MatchState; hit: boolean; finished: boolean } {
  const finished = state.done.length >= words.length;
  if (finished || state.done.includes(id)) return { state, hit: false, finished };
  if (words[state.step]?.id === id) {
    const done = [...state.done, id];
    return { state: { ...state, step: state.step + 1, done }, hit: true, finished: done.length >= words.length };
  }
  return { state: { ...state, wrong: state.wrong + 1 }, hit: false, finished: false };
}
