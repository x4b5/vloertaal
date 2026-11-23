import { workUnits } from './work';

/**
 * Lessons whose help-language translations follow in a later round. While a lesson is listed, the
 * app shows its English with the Dutch (gloss() has no help text for it), its tip gets no page of
 * its own on the site (src/lib/tipPages.ts), and the translation tests leave its ids out. Remove a
 * lesson here once its translations are in. Empty from 21 November 2026 (the fifteen lessons of 20 and 21 November were translated) until
 * the sixteen lessons of Groen and Facilitair and the thirty-two of Beveiliging, Voedingsindustrie,
 * Afval en recycling and Kinderopvang (23 November 2026; translated the same day), and the twenty
 * lessons of the second units of Schoonmaak, Horeca, Zorg and Winkel and "Werken via een uitzendbureau"
 * (23 November 2026; translated the same day). Again from the twenty-six lessons of the basis units at four
 * lessons (23 November 2026, below).
 */
export const TRANSLATION_PENDING_LESSONS: readonly string[] = [
  // The basis units at four lessons (23 November 2026): two new lessons each in Tijd en rooster, Als
  // het misgaat (both in curriculum.ts), Solliciteren, Wonen en papieren, Loon, Verlof, Ziekte,
  // Uitbuiting herkennen, Naar je werk, Je werk afronden, Stage lopen, Meedoen in Nederland and Online
  // op je werk (work.ts basisFour). Translations to follow.
  'roster', 'breaks', 'wound', 'callhelp',
  'vacancy', 'result', 'residence', 'newhome', 'payparts', 'latepay', 'holiday', 'special',
  'unwell', 'injury', 'debt', 'inspection', 'carpool', 'train', 'checklist', 'leavesite',
  'stagedays', 'stageend', 'neighbours', 'join', 'workphotos', 'device',
];

/**
 * The words of the pending lessons of curriculum.ts ("Tijd en rooster", "Als het misgaat"): the
 * words of work.ts are found by their lesson below, but this file cannot load curriculum.ts (it loads
 * this one), so they are listed here.
 */
const PENDING_CURRICULUM_WORDS: readonly string[] = [
  'w.weekrooster', 'w.roosterapp', 'w.beschikbaar', 'w.wijziging', 'w.invallen', 'w.vrijedag',
  'w.lunchpauze', 'w.rusttijd', 'w.werkdag', 'w.urenlijst', 'w.eerderweg', 'w.achterelkaar',
  'w.wond', 'w.verband', 'w.koelen', 'w.snee', 'w.flauwvallen', 'w.oogdouche',
  'w.hulpdiensten', 'w.straatnaam', 'w.huisnummer', 'w.aanspreekbaar', 'w.opwachten', 'w.aandelijn',
];

/** Units whose title waits for its translations too. */
const PENDING_UNITS: readonly string[] = [];

const pendingIds = new Set<string>([...PENDING_UNITS, ...PENDING_CURRICULUM_WORDS]);
for (const l of workUnits.flatMap((u) => u.lessons)) {
  if (!TRANSLATION_PENDING_LESSONS.includes(l.id.slice(2))) continue;
  pendingIds.add(l.id);
  for (const w of l.words) pendingIds.add(w.id);
}

/** Lesson ids ("l.paint"), and the ids of their sentences, chats and tip ("s.paint.1", "c.paint.q", "c.paint.b"). */
const OWN_ID = TRANSLATION_PENDING_LESSONS.length ? new RegExp(`^[lsc]\\.(${TRANSLATION_PENDING_LESSONS.join('|')})(\\.|$)`) : null;

/** Is the translation of this content id (a unit, lesson, word, sentence, chat line, tip text, or a
 *  "Kun je nu" line of a pending unit: "kjn.u.ruwbouw.1") still to come? The Belgian twin of a pending
 *  id ("be.l.neighbours", "be.c.join.b": src/content/taalBe) waits with it. */
export const translationPending = (id: string): boolean => {
  const nl = id.startsWith('be.') ? id.slice(3) : id;
  return pendingIds.has(nl) || (OWN_ID?.test(nl) ?? false) || PENDING_UNITS.some((u) => nl.startsWith(`kjn.${u}.`));
};
