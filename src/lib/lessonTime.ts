import type { Lesson } from '../content/types';
import { buildLesson, type Exercise } from './exercises';

/**
 * "Hoe lang duurt de volgende les?" (the owner's request, 5 November 2026): beside the next lesson
 * on a lesson's result, "± 3 min", so the next time looks small ("a reason to come back", with no
 * pressure). An estimate from the steps the lesson is built of (buildLesson), not a promise and
 * not a timer: nothing counts down, nothing is measured against it.
 *
 * Seconds per step, for a learner who reads little and listens to everything (the work-rules
 * track reads every story aloud). A Werkregels lesson comes out at about 5 minutes, as
 * docs/entree-dekking.md says ("5 tot 8 minuten"); a lesson of the language course (about 22
 * steps) at about 6. The anonymous count of a finished lesson keeps a band of minutes
 * (src/lib/count.ts minutesBand): the owner can set these numbers by it later.
 */
const SECONDS: Record<Exercise['kind'], number> = {
  // The language course.
  intro: 12,
  meaning: 12,
  dutch: 12,
  listen: 12,
  type: 20,
  match: 25,
  build: 30,
  chat: 15,
  tip: 45,
  saying: 30,
  situation: 25,
  speak: 25,
  klank: 30,
  // The work-rules track: read aloud.
  scene: 75,
  rule: 60,
  truefalse: 25,
  whatdo: 40,
  whoask: 35,
  model: 35,
  card: 45,
  payslip: 60,
};

/** Never less than this many minutes: "± 1 min" would promise too much. */
export const LESSON_MINUTES_MIN = 2;

/** A step's seconds: a tip in two pages is the reading page and a short "Zeg het zo" page. */
function seconds(ex: Exercise): number {
  if (ex.kind === 'tip' && ex.part) return ex.part === 'read' ? 35 : 15;
  return SECONDS[ex.kind];
}

/** About how many minutes these steps take: whole minutes, at least LESSON_MINUTES_MIN. */
export function stepsMinutes(steps: readonly Exercise[]): number {
  const total = steps.reduce((s, ex) => s + seconds(ex), 0);
  return Math.max(LESSON_MINUTES_MIN, Math.round(total / 60));
}

/**
 * About how many minutes a lesson's first time takes, built as the lesson player would build it
 * (sound off, the sector, the pace). `speak`: speaking practice is on (Settings): "Wat zeg je?"
 * then counts too, as if its lines were recorded.
 */
export function lessonMinutes(lesson: Lesson, opts: { quiet?: boolean; speak?: boolean; sector?: Parameters<typeof buildLesson>[1]['sector']; fast?: boolean; easy?: boolean } = {}): number {
  const { speak, ...rest } = opts;
  return stepsMinutes(buildLesson(lesson, { review: false, seed: 1, ...rest, speak, recorded: speak ? () => true : undefined }));
}
