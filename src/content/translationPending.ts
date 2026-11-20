import { workUnits } from './work';

/**
 * Lessons whose help-language translations follow in a later round (20 November 2026): l.paint
 * and l.prep (u.afbouw), the six lessons of u.ruwbouw, and l.shapes, l.angles and l.size
 * (u.numbers). Until then the app shows their English with the Dutch (gloss() has no help text
 * for them), their tips get no page of their own on the site (src/lib/tipPages.ts), and the
 * translation tests leave their ids out. Remove a lesson here once its translations are in.
 */
export const TRANSLATION_PENDING_LESSONS: readonly string[] = [
  'paint', 'prep',
  'brick', 'wall', 'wood', 'square', 'screw', 'fix',
  'shapes', 'angles', 'size',
];

/** Units whose title waits for its translations too. */
const PENDING_UNITS: readonly string[] = ['u.ruwbouw'];

const pendingIds = new Set<string>(PENDING_UNITS);
for (const l of workUnits.flatMap((u) => u.lessons)) {
  if (!TRANSLATION_PENDING_LESSONS.includes(l.id.slice(2))) continue;
  pendingIds.add(l.id);
  for (const w of l.words) pendingIds.add(w.id);
}

/** Lesson ids ("l.paint"), and the ids of their sentences, chats and tip ("s.paint.1", "c.paint.q", "c.paint.b"). */
const OWN_ID = new RegExp(`^[lsc]\\.(${TRANSLATION_PENDING_LESSONS.join('|')})(\\.|$)`);

/** Is the translation of this content id (a unit, lesson, word, sentence, chat line, tip text, or a
 *  "Kun je nu" line of a pending unit: "kjn.u.ruwbouw.1") still to come? */
export const translationPending = (id: string): boolean =>
  pendingIds.has(id) || OWN_ID.test(id) || PENDING_UNITS.some((u) => id.startsWith(`kjn.${u}.`));
