import { nlId } from '../content/regels/be/ids';
import { courseUnits, findCourseUnit, unitOfLesson } from '../content/courses';
import { isMixLesson } from '../content/review';
import { coursePlan, sectorFirstFocus, sectorOwnUnit, sectorPriority, type SectorChoice } from '../content/sectors';
import type { UiCode } from '../i18n/types';
import { trackOf, type Track } from './track';
import type { Lesson, Unit } from '../content/types';
import { type Access, lessonAllowed, loadAccess, unitAllowed } from './access';
import { unitDone } from './certificate';
import { dayKey } from './progress';
import { regionUnits } from '../content/regio';

/**
 * The home screen ("Route"), one block at a time: the learner works in ONE unit (the current
 * block). A brand-new learner gets the first unit of their course, no choice yet. When a block is
 * finished, the home offers a choice of the next 3 unfinished units in course order (the first is
 * the recommended one). Finished units sit on a small "Gedaan" shelf; the full list of units is a
 * separate screen ("Alle onderwerpen").
 */

/** How many blocks the learner chooses from. */
export const CHOICES = 3;
/** On the home, a finished block offers 2 suggestions; "Other topic" (All topics) is the third choice. */
export const HOME_SUGGESTIONS = 2;

type Completed = Record<string, unknown>;

export interface RouteInput {
  sector?: SectorChoice;
  completed: Completed;
  /** The block the learner chose (or was sent to by a coach link); see Progress.currentUnit. */
  currentUnit?: string;
  /** A block picked when only its mixed review was left: never skipped (Progress.pickedUnit). */
  pickedUnit?: string;
  /** Local date of the last finished "Herhaal vandaag" (Progress.reviewDay). */
  reviewDay?: string;
  /** The help language: 'nl' is the work-rules track (src/lib/track.ts). Passing the progress gives both. */
  helpLang?: UiCode | null;
  /** The track; default: the one of helpLang (the Dutch course without one). */
  track?: Track;
  /** "Waar woon je?" (Progress.region): a region adds its unit to the path (src/content/regio). */
  region?: string;
}

/** The track of a route input: given, else the one of its help language. */
const trackIn = (input: RouteInput): Track => input.track ?? trackOf(input);

/** Every unit in the order the learner meets them: their course, then the other sectors' units.
 *  With a region (src/content/regio), its unit is in the learner's own course. */
export function routeOrder(sector: SectorChoice | undefined, track: Track = 'taal', region?: string): Unit[] {
  const { main, other } = coursePlan(sector, track, region);
  return [...main, ...other];
}

/** A unit of this track's course (a current block saved in the other track does not count), or of
 *  the learner's region (a region unit after the region was switched off does not count either). */
const findUnit = (id: string | undefined, track: Track, region?: string) =>
  (id ? [...courseUnits(track), ...regionUnits(region, track)].find((u) => u.id === id) : undefined);
const started = (unit: Unit, completed: Completed) => unit.lessons.some((l) => completed[l.id]);

/**
 * The block the learner works in, or null when they should choose the next one.
 *  - A chosen block (currentUnit) stays the current block until it is finished.
 *  - Nothing chosen yet (older saves): the first block that is started but not finished.
 *  - A brand-new learner (nothing done anywhere): the first unit of their course.
 *  - Otherwise (the last block is finished): null, so the home shows the 3 choices.
 */
function blockAsSaved(input: RouteInput): Unit | null {
  const { sector, completed, currentUnit, region } = input;
  const track = trackIn(input);
  const chosen = findUnit(currentUnit, track, region);
  if (chosen) return unitDone(chosen, completed) ? null : chosen;
  const order = routeOrder(sector, track, region);
  const busy = order.find((u) => started(u, completed) && !unitDone(u, completed));
  if (busy) return busy;
  if (!courseUnits(track).some((u) => started(u, completed))) return order[0] ?? null;
  return null;
}

/** All the unit's new lessons are done: only its mixed review is left. */
export function onlyMixLeft(unit: Unit, completed: Completed): boolean {
  const next = blockNext(unit, completed);
  return Boolean(next && isMixLesson(next));
}

/**
 * The block the learner works in (see blockAsSaved), or null when they should choose the next
 * one. One exception, so that no day is only review: when today's "Herhaal vandaag" is done and
 * only the block's mixed review is left, the home goes on to the next block with a new lesson
 * (the recommended one). The mixed review stays on the topic page, and the block comes back
 * among the choices later. But only one topic waits like that: with another one waiting already,
 * the mixed review is played (else no topic is ever finished). A block the learner picked when
 * only its mixed review was left (pickBlock) is never skipped.
 */
export function currentBlock(input: RouteInput, today: Date = new Date(), access?: Access): Unit | null {
  const block = blockAsSaved(input);
  if (!block) return block;
  const may = access ?? loadAccess() ?? 'full';
  // The sneak preview opens a topic at its first lesson only: after it the home goes on to the next
  // topic that is open (or, when none is left, stays here and offers the full version).
  const gated = unitAllowed(block.id, may) && !blockPlayable(block, input.completed, may);
  const track = trackIn(input);
  // At most one topic waits for its mixed review: when another one already does, this block's
  // mixed review is played now, so topics get finished (and their certificate earned) also by a
  // learner who does "Herhaal vandaag" every day.
  const parked = [...courseUnits(track), ...regionUnits(input.region, track)].some((u) => u.id !== block.id && started(u, input.completed) && onlyMixLeft(u, input.completed));
  const mixOnly = !parked && input.pickedUnit !== block.id && input.reviewDay === dayKey(today) && onlyMixLeft(block, input.completed);
  if (!gated && !mixOnly) return block;
  const next = nextChoices(input.sector, input.completed, undefined, courseUnits(track).length + 1, track, input.region)
    .find((u) => u.id !== block.id && (gated || !onlyMixLeft(u, input.completed)) && blockPlayable(u, input.completed, may));
  return next ?? block;
}

/**
 * The learner picks a block (a suggestion on the home, or a coach link): it becomes the current
 * block. A block picked when only its mixed review is left is marked, so the home shows that
 * review and does not go on past it.
 */
export function pickBlock(unitId: string, completed: Completed): { currentUnit: string; pickedUnit?: string } {
  const unit = findCourseUnit(unitId);
  return { currentUnit: unitId, pickedUnit: unit && onlyMixLeft(unit, completed) ? unitId : undefined };
}

/**
 * The next blocks to choose from: `n` unfinished units of the learner's course, the recommended
 * one first (the sector's first focus unit, else the next one in course order; always one with a
 * new lesson when there is one), then the sector's weighted units (see below). When the course has fewer left, the other
 * sectors' units fill up. `include` (the unfinished current block, when the learner asks to choose
 * another topic) is always one of them: it takes the last place when it is not in the list yet.
 */
export function nextChoices(sector: SectorChoice | undefined, completed: Completed, include?: string, n = CHOICES, track: Track = 'taal', region?: string): Unit[] {
  const open = routeOrder(sector, track, region).filter((u) => !unitDone(u, completed));
  // Weighted by the sector: the sector's first focus unit is recommended first (Safety for
  // warehouse, building and factory work, so it comes in week 1), then the next unit in course
  // order, the sector's own unit and the other basis units that matter most in that work; then
  // the course order. So a cleaner, a carer and a warehouse worker get different choices.
  // (A Belgian rules unit counts as its Dutch twin: the sectors name the Dutch ids.)
  const weighted = sectorPriority(sector, track).map((id) => open.find((u) => nlId(u.id) === id)).filter((u): u is Unit => Boolean(u));
  // Recommended first: the sector's first focus unit (Safety in week 1 for warehouse, building and
  // factory work), and once that is done the sector's own unit (the words of that work: a carer
  // gets the care words in week 1, not only after the basis units).
  const firsts = [sectorFirstFocus(sector, track), sectorOwnUnit(sector, track)].filter(Boolean);
  // A focus unit with only its mixed review left gives way to the next one here (it still comes
  // after the lead, below), so the sector's own unit is not skipped while that review waits.
  const first = firsts.map((id) => open.find((u) => nlId(u.id) === id)).filter((u): u is Unit => Boolean(u) && !onlyMixLeft(u!, completed)).slice(0, 1);
  // The recommended (first) choice brings new lessons: a unit with only its mixed review left
  // still comes, but after it.
  const fresh = open.find((u) => !onlyMixLeft(u, completed));
  const lead = [...first, ...open.slice(0, 1)].filter((u) => !onlyMixLeft(u, completed));
  const list = [...new Set([...lead, ...(fresh ? [fresh] : []), ...weighted, ...open])].slice(0, n);
  const extra = findUnit(include, track, region);
  if (extra && !unitDone(extra, completed) && !list.some((u) => u.id === extra.id)) {
    if (list.length >= n) list.pop();
    list.push(extra);
  }
  return list;
}

/** The finished units, in the order the learner meets them (for the "Gedaan" shelf). */
export function doneBlocks(sector: SectorChoice | undefined, completed: Completed, track: Track = 'taal', region?: string): Unit[] {
  return routeOrder(sector, track, region).filter((u) => unitDone(u, completed));
}

/** The next lesson to play in a block: its first lesson not done yet (lessons open in order). */
export function blockNext(unit: Unit, completed: Completed): Lesson | undefined {
  return unit.lessons.find((l) => !completed[l.id]);
}

/** Lessons done in a block, for "2 / 4". */
export function blockDoneCount(unit: Unit, completed: Completed): number {
  return unit.lessons.filter((l) => completed[l.id]).length;
}

/**
 * The lesson the home's big yellow card starts: the next lesson of the current block, when the
 * learner may play it (a preview never plays a later unit). Undefined when a choice comes first.
 */
export function routeNextLesson(input: RouteInput, access: Access = 'full', today: Date = new Date()): Lesson | undefined {
  const block = currentBlock(input, today, access);
  if (!block || !blockPlayable(block, input.completed, access)) return undefined;
  return blockNext(block, input.completed);
}

/**
 * Can the learner go on in this block: its next lesson is open with their access. In the sneak
 * preview a topic is open at its first lesson only, so after that lesson the rest waits for the
 * full version (the home then shows "Volledige versie" instead of a Start).
 */
export function blockPlayable(unit: Unit, completed: Completed, access: Access = 'full'): boolean {
  if (!unitAllowed(unit.id, access)) return false;
  const next = blockNext(unit, completed);
  return !next || lessonAllowed(next.id, access);
}

/**
 * The current block after a lesson was finished: the lesson's unit becomes the current block while
 * it is unfinished (a lesson started from "Alle onderwerpen" moves the learner there). A finished
 * unit leaves the choice as it was: the block just finished resolves to "choose the next one", and
 * practising a lesson of an older finished unit does not move the learner out of their block.
 */
export function blockAfterLesson(currentUnit: string | undefined, lessonId: string, completed: Completed): string | undefined {
  const unit = unitOfLesson(lessonId);
  if (!unit) return currentUnit;
  return unitDone(unit, completed) ? currentUnit : unit.id;
}

/**
 * The home after a finished block: the 2 suggested next blocks (the recommended one first). The
 * third choice on that screen is "Other topic", which opens All topics.
 */
export function homeSuggestions(sector: SectorChoice | undefined, completed: Completed, track: Track = 'taal', region?: string): Unit[] {
  return nextChoices(sector, completed, undefined, HOME_SUGGESTIONS, track, region);
}

/**
 * How a lesson shows on the home: only the block's next lesson can be tapped (Start, or Continue
 * when it was stopped halfway); done lessons are a calm tick (practising again lives in "Herhaal
 * vandaag" and All topics) and later ones wait. A preview block outside the first unit shows
 * every lesson as waiting.
 */
export type HomeLessonState = 'now' | 'done' | 'later';
export function homeLessonState(unit: Unit, lessonId: string, completed: Completed, access: Access = 'full'): HomeLessonState {
  if (completed[lessonId]) return 'done';
  if (!unitAllowed(unit.id, access) || !lessonAllowed(lessonId, access)) return 'later';
  return blockNext(unit, completed)?.id === lessonId ? 'now' : 'later';
}
