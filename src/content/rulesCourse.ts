import type { Unit } from './types';

/**
 * The work-rules course as the app plays it: empty until src/i18n/packs/nl.ts (loaded with the
 * track's Dutch screens) registers it. Kept apart from src/content/courses.ts so that
 * src/content/curriculum.ts can look a rules lesson up without an import cycle.
 */
let rules: Unit[] = [];

export function setRulesUnits(units: Unit[]): void {
  rules = units;
}

export function rulesCourseUnits(): Unit[] {
  return rules;
}
