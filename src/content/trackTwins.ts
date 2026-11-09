import { trackOfId, type Track } from '../lib/track';
import { nlId } from './regels/be/ids';
import { taalNlId } from './taalBe/ids';

/**
 * A topic and its twin in the other track: the language course's topic and the work-rules topic
 * about the same thing (Loon and "Loon en loonstrook"). A coach link names one topic, but the
 * coach does not always know which track a learner follows: with this table a link to "Loon"
 * opens the learner's own Loon, in either track (review, 9 November 2026; until then a link to the
 * other track's topic left the learner on the home without a word).
 *
 * By the Dutch ids (a Belgian unit counts as its Dutch twin). Every language topic appears at most
 * once; a rules topic may have several language twins, and the FIRST one is the one a rules link
 * opens in the language course. A topic without a fitting twin is left out: its link keeps the
 * learner on the home, as before (tests/trackTwins.test.ts).
 */
export const TRACK_TWINS: readonly (readonly [taal: string, regels: string])[] = [
  ['u.firstday', 'r.start'],
  ['u.safety', 'r.veilig'],
  ['u.emergency', 'r.veilig'],
  ['u.apply', 'r.zoeken'],
  ['u.contract', 'r.contract'],
  ['u.stage', 'r.stage'],
  ['u.grow', 'r.loopbaan'],
  ['u.pay', 'r.loon'],
  ['u.numbers', 'r.rekenen'],
  ['u.time', 'r.tijd'],
  ['u.leave', 'r.tijd'],
  ['u.sick', 'r.ziek'],
  ['u.finish', 'r.afronden'],
  ['u.online', 'r.digitaal'],
  ['u.ai', 'r.digitaal'],
  ['u.contact', 'r.schrijven'],
  ['u.teamwork', 'r.samen'],
  ['u.communicate', 'r.samen'],
  ['u.feedback', 'r.samen'],
  ['u.social', 'r.samen'],
  ['u.rights', 'r.rechten'],
  ['u.exploit', 'r.rechten'],
  ['u.money', 'r.geld'],
  ['u.lost', 'r.geld'],
  ['u.society', 'r.meedoen'],
  // The sectors' own topics.
  ['u.warehouse', 'r.warehouse'],
  ['u.delivery', 'r.warehouse'],
  ['u.build', 'r.build'],
  ['u.factory', 'r.factory'],
  ['u.care', 'r.care'],
  ['u.horeca', 'r.horeca'],
  ['u.clean', 'r.clean'],
  ['u.kas', 'r.kas'],
  ['u.tech', 'r.techniek'],
  ['u.garage', 'r.werkplaats'],
  ['u.shop', 'r.winkel'],
];

/**
 * The topic a link should open in `track`: the topic itself when it is of that track, else its
 * twin there (by its Dutch id; the learner's country is applied after, src/content/courses.ts
 * rulesTwinHere), or undefined when it has none.
 */
export function trackTwin(unitId: string, track: Track): string | undefined {
  if (trackOfId(unitId) === track) return unitId;
  if (track === 'regels') {
    const id = taalNlId(unitId);
    return TRACK_TWINS.find(([taal]) => taal === id)?.[1];
  }
  const id = nlId(unitId);
  return TRACK_TWINS.find(([, regels]) => regels === id)?.[0];
}
