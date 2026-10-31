import { learnerCountry, setLearnerCountry } from './country';
import { beRulesOn } from './regels/be/live';
import type { Unit } from './types';

/**
 * The work-rules course as the app plays it: empty until src/i18n/packs/nl.ts (loaded with the
 * track's Dutch screens) registers it. Kept apart from src/content/courses.ts so that
 * src/content/curriculum.ts can look a rules lesson up without an import cycle.
 *
 * Two courses, one per country (docs/werkregels-belgie.md): the Dutch one ('nl') and the Belgian
 * one ('be', Vlaanderen: its own units with ids "r.be.…", and the Dutch unit where there is no
 * Belgian one yet). Which one plays follows `progress.country` (App.tsx calls setRulesCountry on
 * every render): 'be' plays the Belgian course when it is registered and switched on
 * (src/content/regels/be/live.ts), anything else the Dutch one.
 */
let rules: Unit[] = [];
let rulesBe: Unit[] | null = null;

/** Puts the course(s) in place. Without a Belgian course, a learner in Belgium plays the Dutch one. */
export function setRulesUnits(units: Unit[], be: Unit[] | null = null): void {
  rules = units;
  rulesBe = be;
}

/** The country the learner works in (progress.country; undefined = 'nl'). */
export function setRulesCountry(c: 'nl' | 'be' | undefined): void {
  // One country for both tracks (src/content/country.ts): the language track's Belgian version follows it too.
  setLearnerCountry(c);
}

/** The country whose course plays now: 'be' only with a Belgian course registered. */
export function rulesCountry(): 'nl' | 'be' {
  return learnerCountry() === 'be' && rulesBe && beRulesOn() ? 'be' : 'nl';
}

/** The course of the learner's country (see rulesCountry). */
export function rulesCourseUnits(): Unit[] {
  return rulesCountry() === 'be' ? rulesBe! : rules;
}

/**
 * Every rules unit of both countries, each once (a Dutch unit the Belgian course falls back on is
 * in both). For what must not depend on the country chosen now: a backup keeps the lessons of the
 * other country too (src/lib/progress.ts knownLessonId).
 */
export function allCountriesRulesUnits(): Unit[] {
  const seen = new Set<string>();
  return [...rules, ...(rulesBe ?? [])].filter((u) => !seen.has(u.id) && (seen.add(u.id), true));
}
