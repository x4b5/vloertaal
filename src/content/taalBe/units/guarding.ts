import type { BeTaal } from '../types';

/**
 * The Belgian version of "Ronde en toegang" (u.guarding), a B unit since 23 November 2026 (the VOG round): only
 * the fourth sentence s.access.4 differs, because Belgium has no VOG. Everything else is the same in
 * both countries (./inventory.ts). Translations: src/i18n/be/units/guarding.ts (they follow, with the
 * Dutch sentence: src/content/translationPending.ts).
 */

// ⚖️ check: In Belgium a guard (bewakingsagent) works with an identificatiekaart from the FOD
// Binnenlandse Zaken, after a security screening; there is no beveiligerspas ⚖️ (wet van 2 oktober
// 2017 tot regeling van de private en bijzondere veiligheid; vigilis.be; the same as
// r.be.l.beveiliging.1 in src/content/regels/be/units/sector-beveiliging.ts).
const lines: BeTaal['lines'] = {
  's.access.4': { nl: 'Ik krijg mijn identificatiekaart na de screening.', en: 'I get my identification card (for security work) after the screening.' },
};

export const be: BeTaal = { nl: 'u.guarding', lines };
