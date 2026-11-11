import { mainLessons } from '../content/sectors';
import type { Progress } from './progress';
import { learnsDutch } from './learner';
import { rulesTrackOn } from './track';

/**
 * "Van Taal naar Werkregels" (stap 3): once most of the language course is done, the home offers
 * the work-rules track once, calmly: "Je kent nu veel Nederlands. Wil je ook de werkregels leren?"
 * [Ja, laat zien] opens Settings › "Wat wil je leren?" (the learner switches there, as always);
 * [Later] puts it away. Either way it never comes back (Progress.bridgeSeen, on this phone only).
 */

/** The share of the learner's own course (their lessons along the path) done before the offer. */
export const BRIDGE_SHARE = 0.8;

/** Is the offer due on the home? Only in the language track, with Werkregels on, not seen before. */
export function bridgeDue(p: Progress): boolean {
  if (!rulesTrackOn() || !learnsDutch(p) || p.bridgeSeen) return false;
  const lessons = mainLessons(p.sector, 'taal');
  if (!lessons.length) return false;
  const done = lessons.filter((l) => p.completed[l.id]).length;
  return done >= Math.ceil(lessons.length * BRIDGE_SHARE);
}

/** The offer was answered (either button): it does not come back. */
export function seeBridge(p: Progress): Progress {
  return { ...p, bridgeSeen: true };
}
