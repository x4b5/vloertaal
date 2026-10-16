import type { HelpLanguage, UiCode } from '../i18n/types';

/**
 * Two tracks in one app, chosen with the help language:
 *  - 'taal': learn Dutch for the work floor, through English, with help in one of nine languages
 *    (helpLang 'ar' … 'bg', or null for English only).
 *  - 'regels': "Nederlands – ik spreek al Nederlands". For learners who already speak Dutch: the
 *    written and unwritten rules of Dutch work life, everything in plain Dutch (helpLang 'nl').
 *
 * The track is never stored on its own: it follows from `helpLang`, so the two can't disagree.
 */
export type Track = 'taal' | 'regels';

/**
 * The work-rules track is behind this flag. On since 16 October 2026 as a beta: experts still
 * check the facts (docs/werkregels-bronnen.md), and the track says so (RULES_BETA, the "bèta"
 * tag beside "Nederlands" in the language list). Tests turn it on or off with setRulesTrack.
 */
export const RULES_TRACK: boolean = true;

let forced: boolean | null = null;

/** Turns the track on or off for tests and screenshots (null: back to RULES_TRACK). */
export function setRulesTrack(on: boolean | null): void {
  forced = on;
}

/** Development only: `?rules=1` once in the address keeps the track on in this tab. */
function devFlag(): boolean {
  if (!import.meta.env?.DEV || typeof location === 'undefined') return false;
  try {
    if (new URLSearchParams(location.search).get('rules') === '1') sessionStorage.setItem('vloertaal:rules', '1');
    return sessionStorage.getItem('vloertaal:rules') === '1';
  } catch {
    return new URLSearchParams(location.search).get('rules') === '1';
  }
}

/** Is the work-rules track offered (the language list's "Nederlands" option, the 'nl' pack)? */
export function rulesTrackOn(): boolean {
  return forced ?? (RULES_TRACK || devFlag());
}

/** The learner reads the app in Dutch and follows the work-rules track. */
export const isRules = (p: { helpLang?: UiCode | null }): boolean => p.helpLang === 'nl';

/** The track a learner follows (from their help language). */
export const trackOf = (p: { helpLang?: UiCode | null }): Track => (isRules(p) ? 'regels' : 'taal');

/** The track of a help-language code ('nl' is the rules track; null is English only). */
export const trackOfLang = (code: UiCode | null | undefined): Track => (code === 'nl' ? 'regels' : 'taal');

/**
 * The track a unit or lesson id belongs to: rules ids start with "r." ("r.pay", "r.l.pay.2"),
 * the language course's with "u." and "l.". Ids never clash, so a lookup by id needs no track.
 * A region's ids start with "rg.<region>." (src/content/regio): its work-rules unit and everything
 * in it with "rg.<region>.r" ("rg.zl.r", "rg.zl.r.l.1", "rg.zl.r.l.1.sc1"), the rest is its
 * language unit ("rg.zl.u", "rg.zl.l.1", "rg.zl.w.grens").
 */
export const trackOfId = (id: string): Track => (id.startsWith('r.') || /^rg\.[a-z]+\.r(\.|$)/.test(id) ? 'regels' : 'taal');

/**
 * The screen is in Dutch only: no English and no second line under a Dutch label. A hard-coded
 * Dutch label next to its help line (the bottom bar, a settings row) then shows one line only.
 */
export const dutchUi = (lang?: Pick<HelpLanguage, 'code'> | null): boolean => lang?.code === 'nl';
