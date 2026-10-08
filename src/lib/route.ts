import { units } from '../content/curriculum';
import { coursePlan, type SectorChoice } from '../content/sectors';
import type { Lesson, Unit } from '../content/types';
import { type Access, unitAllowed } from './access';
import { unitDone } from './certificate';

/**
 * The home screen ("Route"), one block at a time: the learner works in ONE unit (the current
 * block). A brand-new learner gets the first unit of their course, no choice yet. When a block is
 * finished, the home offers a choice of the next 3 unfinished units in course order (the first is
 * the recommended one). Finished units sit on a small "Gedaan" shelf; the full list of units is a
 * separate screen ("Alle onderwerpen").
 */

/** How many blocks the learner chooses from. */
export const CHOICES = 3;

type Completed = Record<string, unknown>;

export interface RouteInput {
  sector?: SectorChoice;
  completed: Completed;
  /** The block the learner chose (or was sent to by a coach link); see Progress.currentUnit. */
  currentUnit?: string;
}

/** Every unit in the order the learner meets them: their course, then the other sectors' units. */
export function routeOrder(sector: SectorChoice | undefined): Unit[] {
  const { main, other } = coursePlan(sector);
  return [...main, ...other];
}

const findUnit = (id: string | undefined) => (id ? units.find((u) => u.id === id) : undefined);
const started = (unit: Unit, completed: Completed) => unit.lessons.some((l) => completed[l.id]);

/**
 * The block the learner works in, or null when they should choose the next one.
 *  - A chosen block (currentUnit) stays the current block until it is finished.
 *  - Nothing chosen yet (older saves): the first block that is started but not finished.
 *  - A brand-new learner (nothing done anywhere): the first unit of their course.
 *  - Otherwise (the last block is finished): null, so the home shows the 3 choices.
 */
export function currentBlock({ sector, completed, currentUnit }: RouteInput): Unit | null {
  const chosen = findUnit(currentUnit);
  if (chosen) return unitDone(chosen, completed) ? null : chosen;
  const order = routeOrder(sector);
  const busy = order.find((u) => started(u, completed) && !unitDone(u, completed));
  if (busy) return busy;
  if (!units.some((u) => started(u, completed))) return order[0] ?? null;
  return null;
}

/**
 * The next blocks to choose from: the first `n` unfinished units of the learner's course, in
 * course order (the first one is the recommended one). When the course has fewer left, the other
 * sectors' units fill up. `include` (the unfinished current block, when the learner asks to choose
 * another topic) is always one of them: it takes the last place when it is not in the list yet.
 */
export function nextChoices(sector: SectorChoice | undefined, completed: Completed, include?: string, n = CHOICES): Unit[] {
  const open = routeOrder(sector).filter((u) => !unitDone(u, completed));
  const list = open.slice(0, n);
  const extra = findUnit(include);
  if (extra && !unitDone(extra, completed) && !list.some((u) => u.id === extra.id)) {
    if (list.length >= n) list.pop();
    list.push(extra);
  }
  return list;
}

/** The finished units, in the order the learner meets them (for the "Gedaan" shelf). */
export function doneBlocks(sector: SectorChoice | undefined, completed: Completed): Unit[] {
  return routeOrder(sector).filter((u) => unitDone(u, completed));
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
export function routeNextLesson(input: RouteInput, access: Access = 'full'): Lesson | undefined {
  const block = currentBlock(input);
  if (!block || !unitAllowed(block.id, access)) return undefined;
  return blockNext(block, input.completed);
}

/**
 * The current block after a lesson was finished: the lesson's unit becomes the current block while
 * it is unfinished (a lesson started from "Alle onderwerpen" moves the learner there). A finished
 * unit leaves the choice as it was: the block just finished resolves to "choose the next one", and
 * practising a lesson of an older finished unit does not move the learner out of their block.
 */
export function blockAfterLesson(currentUnit: string | undefined, lessonId: string, completed: Completed): string | undefined {
  const unit = units.find((u) => u.lessons.some((l) => l.id === lessonId));
  if (!unit) return currentUnit;
  return unitDone(unit, completed) ? currentUnit : unit.id;
}
