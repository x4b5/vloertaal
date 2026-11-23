import type { BeTaal } from '../types';

/**
 * The Belgian version of "Verzorgen en thuiszorg" (u.carework), a B unit since 23 November 2026 (the VOG round): only
 * the fourth sentence s.homecare.4 differs, because Belgium has no VOG. Everything else is the same in
 * both countries (./inventory.ts). Translations: src/i18n/be/units/carework.ts (they follow, with the
 * Dutch sentence: src/content/translationPending.ts).
 */

// ⚖️ check: In care work in Flanders the employer almost always asks for an uittreksel uit het
// strafregister (no VOG in Belgium) ⚖️ (Wetboek van strafvordering art. 595 and 596: the extract
// from the criminal record, model 1, and model 2 for work with minors; justitie.belgium.be; "bijna
// altijd" because no law asks it for every care job: check).
const lines: BeTaal['lines'] = {
  's.homecare.4': { nl: 'In de zorg vragen ze bijna altijd een uittreksel uit het strafregister.', en: 'In care work they almost always ask for an extract from the criminal record.' },
};

export const be: BeTaal = { nl: 'u.carework', lines };
