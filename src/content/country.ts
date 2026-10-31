/**
 * The country the learner works in (progress.country, chosen in Settings): 'nl' or 'be'. Both
 * tracks follow it: the work rules (src/content/rulesCourse.ts) and the language track's Belgian
 * version (src/content/taalBe). App.tsx sets it on every render (setRulesCountry). Kept free of
 * imports, so every content file can read it without an import cycle.
 */
let country: 'nl' | 'be' = 'nl';

/** The learner's country (undefined, or anything else, is 'nl'). */
export function setLearnerCountry(c: 'nl' | 'be' | undefined): void {
  country = c === 'be' ? 'be' : 'nl';
}

/** The country the learner chose ('nl' when none). */
export function learnerCountry(): 'nl' | 'be' {
  return country;
}
