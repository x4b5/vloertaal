import type { BeTaal } from '../types';

/**
 * The Belgian version of "Ouders, veiligheid en de groep" (u.daycare), a B unit since 23 November 2026 (the VOG round): only
 * the fourth sentence s.grouprules.4 differs, because Belgium has no VOG. Everything else is the same in
 * both countries (./inventory.ts). Translations: src/i18n/be/units/daycare.ts (they follow, with the
 * Dutch sentence: src/content/translationPending.ts).
 */

// ⚖️ check: In child care in Flanders you need an uittreksel uit het strafregister for work with
// minors (model 2) before you start; there is no VOG and no personenregister ⚖️ (Wetboek van
// strafvordering art. 596, tweede lid; besluit van de Vlaamse Regering van 22 november 2013
// (kinderopvang van baby's en peuters); opgroeien.be; the same as r.be.l.kinderopvang.1 in
// src/content/regels/be/units/sector-kinderopvang.ts).
const lines: BeTaal['lines'] = {
  's.grouprules.4': { nl: 'Ik heb een uittreksel uit het strafregister voor werk met kinderen.', en: 'I have an extract from the criminal record for work with children.' },
};

export const be: BeTaal = { nl: 'u.daycare', lines };
