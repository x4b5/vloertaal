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

/**
 * The game mode is on whenever the calm screen is not (the owner, 23 November 2026: "Spel" is the
 * standard, "Standaard" is gone; the juice only plays when a button is tapped). Kalm, or a phone
 * that asks for less motion while nothing is chosen ("auto"), turns it off.
 */
export function playOn(p: Pick<Progress, 'calm'>): boolean {
  return !calmOn(p.calm);
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

/** The points of a finished lesson added to the learner's total (shown on the result). */
export function addPoints<P extends Pick<Progress, 'playPoints'>>(p: P, points: number): P {
  return points > 0 ? { ...p, playPoints: (p.playPoints ?? 0) + points } : p;
}

/* ---- More game (the owner: "nog iets meer gamification", 23 November 2026) ---- */

/** A lesson without a mistake in the game mode: a bonus on top of its points. */
export const PERFECT_BONUS = 50;

/** The day's goal: this many points in one day (the bar on the home fills to it). */
export const DAY_GOAL = 100;

/**
 * The levels, by all points earned: a working life from starter to expert. Past the last one,
 * every LEVEL_AFTER points is one more "Expert" star (Expert 2, 3 ...).
 */
export const LEVELS = [
  { at: 0, nl: 'Starter', key: 'playLevel1' },
  { at: 150, nl: 'Leerling', key: 'playLevel2' },
  { at: 400, nl: 'Collega', key: 'playLevel3' },
  { at: 800, nl: 'Vakkracht', key: 'playLevel4' },
  { at: 1400, nl: 'Ervaren', key: 'playLevel5' },
  { at: 2200, nl: 'Expert', key: 'playLevel6' },
] as const;
export const LEVEL_AFTER = 1000;

export interface Level {
  /** 1-based number of the level (past the last named one it keeps counting). */
  n: number;
  /** The named level (the last one for every Expert star). */
  name: (typeof LEVELS)[number];
  /** Expert stars past the last named level: 0 before it, 1 at it, 2 after LEVEL_AFTER more ... */
  stars: number;
  /** Points of this level's start and of the next one. */
  from: number;
  to: number;
}

export function levelOf(points: number): Level {
  const last = LEVELS[LEVELS.length - 1];
  if (points >= last.at) {
    const extra = Math.floor((points - last.at) / LEVEL_AFTER);
    const from = last.at + extra * LEVEL_AFTER;
    return { n: LEVELS.length + extra, name: last, stars: extra + 1, from, to: from + LEVEL_AFTER };
  }
  const i = LEVELS.findIndex((l, k) => points >= l.at && points < LEVELS[k + 1].at);
  return { n: i + 1, name: LEVELS[i], stars: 0, from: LEVELS[i].at, to: LEVELS[i + 1].at };
}

/** How far into the level, 0..1. */
export const levelShare = (points: number): number => {
  const l = levelOf(points);
  return Math.min(1, (points - l.from) / (l.to - l.from));
};

/** Today's points (a day of another date counts as 0). */
export function dayPoints(p: Pick<Progress, 'playDay'>, today: string): number {
  return p.playDay?.day === today ? p.playDay.points : 0;
}

/**
 * The toolbox: every lesson finished in the game mode puts the next tool in it, in this order
 * (word pictures that are already drawn and translated: the name is the word's own gloss).
 */
export const TOOLS = [
  'w.hamer', 'w.rolmaat', 'w.waterpas', 'w.schroevendraaier', 'w.handschaaf', 'w.handzaag', 'w.accuboor', 'w.duimstok',
  'w.troffel', 'w.kwast', 'w.houtbeitel', 'w.afbreekmes', 'w.nijptang', 'w.waterpomptang', 'w.steeksleutel',
  'w.momentsleutel', 'w.ijzerzaag', 'w.lijmkam', 'w.schuifmaat', 'w.spanningzoeker', 'w.striptang', 'w.bankschroef',
  'w.gieter', 'w.tomatenschaar', 'w.krik', 'w.bandenspanningsmeter', 'w.trechter', 'w.takel', 'w.steekwagen', 'w.heftruck',
] as const;

/** The tools in the box after `lessons` lessons finished in the game mode. */
export const toolsFor = (lessons: number): readonly string[] => TOOLS.slice(0, Math.min(lessons, TOOLS.length));

/** What a finished lesson in the game mode brings: the moments its result shows. */
export interface PlayOutcome {
  /** The lesson's points, the perfect bonus included. */
  points: number;
  perfect: boolean;
  /** A new level was reached (its level), or none. */
  levelUp?: Level;
  /** The day's goal was reached with this lesson. */
  dayGoal: boolean;
  /** The tool this lesson put in the box, or none (the box is full). */
  tool?: string;
  /** All points now. */
  all: number;
}

/** A lesson finished in the game mode: its points (with the bonus), the day, the box; and what to show. */
export function finishPlayLesson<P extends Pick<Progress, 'playPoints' | 'playDay' | 'playLessons'>>(
  p: P, lessonPoints: number, perfect: boolean, today: string,
): { next: P; outcome: PlayOutcome } {
  const points = lessonPoints + (perfect ? PERFECT_BONUS : 0);
  const before = p.playPoints ?? 0;
  const all = before + points;
  const dayBefore = dayPoints(p, today);
  const lessons = (p.playLessons ?? 0) + 1;
  const tool = lessons <= TOOLS.length ? TOOLS[lessons - 1] : undefined;
  const lb = levelOf(before);
  const la = levelOf(all);
  return {
    next: { ...p, playPoints: all, playDay: { day: today, points: dayBefore + points }, playLessons: lessons },
    outcome: { points, perfect, all, dayGoal: dayBefore < DAY_GOAL && dayBefore + points >= DAY_GOAL, tool, ...(la.n > lb.n ? { levelUp: la } : {}) },
  };
}

/* ---- "Sfeer" (the owner, 23 November 2026): Kalm or Spel, one setting ---- */

/** The two moods: Spel (the standard: points, sounds, the juice on a tap) and Kalm ("Rustig scherm"). */
export type Sfeer = 'game' | 'calm';
export const SFEER: Sfeer[] = ['game', 'calm'];

/** The learner's mood: Kalm when the calm screen is on (chosen, or the phone asks for less motion), else Spel. */
export function sfeerOf(p: Pick<Progress, 'calm'>): Sfeer {
  return calmOn(p.calm) ? 'calm' : 'game';
}

/** The progress with a mood chosen: Kalm = the calm screen on; Spel = off (also on a phone that asks for less
 *  motion: the choice is the learner's; that phone's setting still stops all movement). */
export function withSfeer<P extends Pick<Progress, 'calm'>>(p: P, s: Sfeer): P {
  return { ...p, calm: s === 'calm' ? 'on' : 'off' };
}
