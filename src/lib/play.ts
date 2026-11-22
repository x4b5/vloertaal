import type { Progress } from './progress';
import { calmOn } from './calm';

/**
 * "Spelmodus" (the owner's choice, 22 November 2026): the other side of "Rustig scherm", for
 * learners who like to practise with game elements. The lessons stay the same; what changes is
 * how an answer feels:
 *  - points for every right answer, more in a run (combo), and a counter at the top of the lesson;
 *  - brighter sounds: a chime that rises with the run, a short fanfare at 3, 5 and 8 in a row and
 *    at the end of the lesson;
 *  - more movement: the points fly up, buttons spring, confetti on the result.
 * A mistake only ends the run: no points are taken away (a mistake stays safe).
 *
 * Off unless the learner chooses it (Settings › Lessen, or the card on the home after the first
 * lesson). It never wins over calm: with "Rustig scherm" on (also "auto" on a phone that asks for
 * less motion) the game mode is off; the phone's "less motion" stops all its movement (styles.css)
 * and "Zonder geluid" all its sounds (src/lib/audio.ts). Nothing flashes.
 * Set as data-play on <html>, as data-calm (src/lib/calm.ts).
 */

/** The game mode is on: chosen, and the calm screen is not on. */
export function playOn(p: Pick<Progress, 'play' | 'calm'>): boolean {
  return p.play === true && !calmOn(p.calm);
}

export function applyPlay(on: boolean): void {
  if (typeof document === 'undefined') return;
  if (on) document.documentElement.dataset.play = '1';
  else delete document.documentElement.dataset.play;
}

/** The game mode is on now (for the lesson's sounds and counter). */
export function playing(): boolean {
  return typeof document !== 'undefined' && document.documentElement.dataset.play === '1';
}

/** Points for one right answer. */
export const POINTS = 10;

/** The combo multiplier for a right answer that makes the run `run`: ×1, from 3 in a row ×2, from 5 ×3. */
export function comboOf(run: number): 1 | 2 | 3 {
  return run >= 5 ? 3 : run >= 3 ? 2 : 1;
}

/** Points for an answer: right ones by the run they make (an "almost" counts half); a wrong one 0. */
export function pointsFor(run: number, correct: boolean, almost = false): number {
  if (!correct) return 0;
  const p = POINTS * comboOf(run);
  return almost ? p / 2 : p;
}

/** The learner's choice in Settings: on or off. Choosing it switches "Rustig scherm" off when it was on. */
export function withPlay<P extends Pick<Progress, 'play' | 'calm' | 'playAsked'>>(p: P, on: boolean): P {
  const { play: _old, ...rest } = p;
  // (Also "auto": on a phone that asks for less motion the calm screen would keep it off. The
  // phone's own "less motion" still stops all movement; the sounds and points stay.)
  return { ...rest, ...(on ? { play: true, calm: 'off' as const } : {}), playAsked: true } as P;
}

/** "Rustig scherm: aan" switches the game mode off (they are two sides of one choice). */
export function withCalm<P extends Pick<Progress, 'play' | 'calm'>>(p: P, calm: NonNullable<Progress['calm']>): P {
  const { play, ...rest } = p;
  return { ...rest, calm, ...(play && calm !== 'on' ? { play } : {}) } as P;
}

/** After how many finished lessons the home asks once: "Hoe wil je oefenen? Rustig of met spel". */
export const PLAY_ASK_AFTER = 1;

/** The card on the home: once, after the first lesson; not for who already chose (Settings). */
export function playAskDue(p: Pick<Progress, 'playAsked' | 'calm'>, lessonsDone: number): boolean {
  // Who chose "Rustig scherm: aan" already said how: not asked.
  return !p.playAsked && p.calm !== 'on' && lessonsDone >= PLAY_ASK_AFTER;
}

/** The points of a finished lesson added to the learner's total (shown on the result). */
export function addPoints<P extends Pick<Progress, 'playPoints'>>(p: P, points: number): P {
  return points > 0 ? { ...p, playPoints: (p.playPoints ?? 0) + points } : p;
}
