/**
 * Lines shown with the rules track (Werkregels). Plain Dutch, never legal advice.
 */

/** When the rules were last brought up to date (shown in the disclaimer). Not yet checked by an
 *  expert: that is what RULES_BETA says. */
export const RULES_CHECKED = 'oktober 2026';

/**
 * Werkregels is live as a beta (src/lib/track.ts): experts have not checked every fact yet. The
 * first line of the disclaimer says so, with where to report a mistake. Drop it (and the "bèta"
 * tag in the language list) once the expert check of docs/werkregels-bronnen.md is done.
 */
export const RULES_BETA = 'Werkregels is nog een bètaversie. Experts kijken de uitleg nog na. Zie je een fout? Mail naar hoi@vloertaal.nl.';

/** Shown under every `rule` step with `rule: 'geschreven'` (law, contract or cao). */
export const RULES_ADVICE = 'Algemene informatie. Vraag voor jouw situatie je werkgever, een vakbond of het Juridisch Loket.';

/**
 * Shown instead of RULES_ADVICE under the rules on uitbuiting, discriminatie, grensoverschrijdend
 * gedrag and ontslag: there the employer can be the problem, so the help comes from outside.
 */
export const RULES_ABUSE = 'Algemene informatie. Vraag hulp bij een vakbond, het Juridisch Loket of FairWork.';

/**
 * Shown instead of RULES_ADVICE under the rules of "Meedoen in Nederland" and DigiD: the rules of
 * the state, not of your work, so the help is the gemeente (not your employer or a vakbond).
 */
export const RULES_CIVIC = 'Algemene informatie. Vraag voor jouw situatie de gemeente of het Juridisch Loket.';

/**
 * Shown instead of RULES_ADVICE under the rules about working across the border (the regional
 * module Zuid-Limburg): there the GrensInfoPunt knows the rules of both countries.
 */
export const RULES_BORDER = 'Algemene informatie. Vraag voor jouw situatie het GrensInfoPunt of het Juridisch Loket.';

/** The work rules are those of the Netherlands (docs/belgie-vlaanderen-plan.md). */
export const RULES_COUNTRY = 'Deze regels gelden in Nederland. In België zijn veel regels anders.';

/** The one line that stays above the lessons of the work-rules path (RulesPathNote). */
export const RULES_PATH_NOTE = 'Regels van Nederland · Algemene informatie, geen juridisch advies.';
export const RULES_PATH_NOTE_BE = 'Regels van Nederland, niet van België · Algemene informatie, geen juridisch advies.';

/** "Goed om te weten": the page shown once, the first time the work-rules track opens. */
export const RULES_NOTICE = [
  'Vloertaal geeft algemene informatie over werk in Nederland. Het is geen juridisch advies.',
  RULES_COUNTRY,
  'Regels kunnen veranderen. Bijgewerkt: ' + RULES_CHECKED + '.',
  'Gaat het om jouw situatie? Vraag je werkgever, een vakbond of het Juridisch Loket.',
];

/** Shown in the Hulp tab to a learner who works in Belgium (Settings: "In welk land werk je?"). */
export const RULES_BE_NOTE = [
  'Je werkt in België.',
  'De werkregels in Vloertaal gaan over Nederland. In België zijn veel regels anders.',
  'Vraag voor jouw situatie een vakbond in België.',
];

/** The disclaimer of the track (about screen, first rules lesson, certificate). */
export const RULES_DISCLAIMER = [
  RULES_BETA,
  'Vloertaal geeft algemene informatie. Het is geen juridisch advies.',
  'Regels kunnen veranderen. Bijgewerkt: ' + RULES_CHECKED + '.',
  'Gaat het om jouw situatie? Vraag je werkgever, een vakbond of het Juridisch Loket.',
  RULES_COUNTRY,
];

/** Which line goes under which written rule, keyed by rule step id. Every 'geschreven' rule has one. */
export const ruleAdvice: Record<string, 'advice' | 'abuse' | 'civic'> = {
  'r.l.zoeken.1.ru1': 'advice',
  'r.l.zoeken.3.ru1': 'advice',
  'r.l.zoeken.4.ru1': 'advice',
  'r.l.contract.1.ru1': 'advice',
  'r.l.contract.2.ru1': 'advice',
  'r.l.contract.3.ru1': 'advice',
  'r.l.contract.4.ru1': 'advice',
  'r.l.loon.1.ru1': 'advice',
  'r.l.loon.2.ru1': 'advice',
  'r.l.loon.3.ru1': 'advice',
  'r.l.tijd.1.ru1': 'advice',
  'r.l.tijd.2.ru1': 'advice',
  'r.l.tijd.3.ru1': 'advice',
  'r.l.tijd.4.ru1': 'advice',
  'r.l.tijd.5.ru1': 'advice',
  'r.l.ziek.1.ru1': 'advice',
  'r.l.ziek.2.ru1': 'advice',
  'r.l.ziek.3.ru1': 'advice',
  'r.l.veilig.1.ru1': 'advice',
  'r.l.veilig.2.ru1': 'advice',
  'r.l.veilig.3.ru1': 'advice',
  'r.l.rechten.1.ru1': 'abuse',
  'r.l.rechten.2.ru1': 'abuse',
  'r.l.rechten.3.ru1': 'abuse',
  'r.l.rechten.4.ru1': 'abuse',
  'r.l.geld.1.ru1': 'advice',
  'r.l.geld.2.ru1': 'advice',
  'r.l.geld.3.ru1': 'advice',
  'r.l.geld.4.ru1': 'advice',
  'r.l.geld.5.ru1': 'advice',
  'r.l.build.1.ru1': 'advice',
  'r.l.build.2.ru1': 'advice',
  'r.l.care.1.ru1': 'advice',
  'r.l.care.2.ru1': 'advice',
  'r.l.horeca.1.ru1': 'advice',
  'r.l.horeca.2.ru1': 'advice',
  'r.l.clean.1.ru1': 'advice',
  'r.l.clean.2.ru1': 'advice',
  'r.l.factory.1.ru1': 'advice',
  'r.l.factory.2.ru1': 'advice',
  'r.l.warehouse.1.ru1': 'advice',
  'r.l.warehouse.2.ru1': 'advice',
  'r.l.kas.1.ru1': 'advice',
  'r.l.kas.2.ru1': 'advice',
  // The Entree additions (docs/entree-aanvulling.md, units 11–17).
  'r.l.winkel.3.ru1': 'advice',
  'r.l.rekenen.1.ru1': 'advice',
  'r.l.rekenen.2.ru1': 'advice',
  'r.l.stage.1.ru1': 'advice',
  'r.l.stage.3.ru1': 'abuse',
  'r.l.digitaal.1.ru1': 'civic',
  'r.l.meedoen.1.ru1': 'civic',
  'r.l.meedoen.2.ru1': 'abuse',
  'r.l.meedoen.3.ru1': 'civic',
  'r.l.duurzaam.1.ru1': 'advice',
};

/**
 * The same for the written rules of the regional modules (src/content/regio, ids "rg.<region>.r.…"):
 * kept apart, so the list above stays the track's own course. Every 'geschreven' rule of a region
 * has one (tests/regio.test.ts).
 */
export const regionRuleAdvice: Record<string, 'advice' | 'abuse' | 'civic' | 'border'> = {
  'rg.zl.r.l.1.ru1': 'civic',
  'rg.zl.r.l.3.ru1': 'border',
  'rg.zl.r.l.4.ru1': 'advice',
  'rg.zl.r.l.5.ru1': 'civic',
};

/** The line to show under a rule step, or undefined for an unwritten rule (a custom). */
export function ruleAdviceLine(ruleId: string): string | undefined {
  const kind: string | undefined = ruleAdvice[ruleId] as string | undefined ?? regionRuleAdvice[ruleId];
  return kind === 'abuse' ? RULES_ABUSE : kind === 'civic' ? RULES_CIVIC : kind === 'border' ? RULES_BORDER : kind === 'advice' ? RULES_ADVICE : undefined;
}
