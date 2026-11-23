import { workUnits } from './work';

/**
 * Lessons whose help-language translations follow in a later round. While a lesson is listed, the
 * app shows its English with the Dutch (gloss() has no help text for it), its tip gets no page of
 * its own on the site (src/lib/tipPages.ts), and the translation tests leave its ids out. Remove a
 * lesson here once its translations are in. Empty from 21 November 2026 (the fifteen lessons of 20 and 21 November were translated) until
 * the sixteen lessons of Groen and Facilitair and the thirty-two of Beveiliging, Voedingsindustrie,
 * Afval en recycling and Kinderopvang (23 November 2026).
 */
export const TRANSLATION_PENDING_LESSONS: readonly string[] = [
  // The new sectors Groen and Facilitair (23 November 2026): their four units, translations to follow.
  'mowing', 'pruning', 'hedge', 'chainsaw', 'weeding', 'planting', 'roadside', 'litter',
  'reception', 'visitors', 'mailroom', 'meetingroom', 'faults', 'repairs', 'moving', 'closing',
  // Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang (23 November 2026): their
  // eight units, translations to follow.
  'patrol', 'access', 'cameras', 'report', 'evacuation', 'firstaid', 'shoplifting', 'aggression',
  'hygienelock', 'allergens', 'coldroom', 'foreignbody', 'cutting', 'labels', 'linecleaning', 'haccp',
  'binlorry', 'reversing', 'wastesorting', 'wastesafety', 'yard', 'hazardous', 'baler', 'shovel',
  'nappies', 'mealtime', 'naptime', 'playtime', 'pickup', 'childsafety', 'sickchild', 'grouprules',
];

/** Units whose title waits for its translations too. */
const PENDING_UNITS: readonly string[] = [
  'u.mowing', 'u.planting', 'u.frontdesk', 'u.maintenance',
  'u.guarding', 'u.incidents', 'u.foodhygiene', 'u.foodline', 'u.collection', 'u.recycling', 'u.toddlers', 'u.daycare',
];

const pendingIds = new Set<string>(PENDING_UNITS);
for (const l of workUnits.flatMap((u) => u.lessons)) {
  if (!TRANSLATION_PENDING_LESSONS.includes(l.id.slice(2))) continue;
  pendingIds.add(l.id);
  for (const w of l.words) pendingIds.add(w.id);
}

/** Lesson ids ("l.paint"), and the ids of their sentences, chats and tip ("s.paint.1", "c.paint.q", "c.paint.b"). */
const OWN_ID = TRANSLATION_PENDING_LESSONS.length ? new RegExp(`^[lsc]\\.(${TRANSLATION_PENDING_LESSONS.join('|')})(\\.|$)`) : null;

/** Is the translation of this content id (a unit, lesson, word, sentence, chat line, tip text, or a
 *  "Kun je nu" line of a pending unit: "kjn.u.ruwbouw.1") still to come? */
export const translationPending = (id: string): boolean =>
  pendingIds.has(id) || (OWN_ID?.test(id) ?? false) || PENDING_UNITS.some((u) => id.startsWith(`kjn.${u}.`));
