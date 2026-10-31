import { LAW_CHECKED } from '../updates';
import { isBeId } from './be/ids';

/**
 * Lines shown with the rules track (Werkregels). Plain Dutch, never legal advice.
 * The Belgian course (docs/werkregels-belgie.md) has its own lines: the `_BE` ones below.
 */

const MONTHS = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
/** "2026-10-31" → "oktober 2026". */
export const monthYear = (day: string): string => `${MONTHS[Number(day.slice(5, 7)) - 1]} ${day.slice(0, 4)}`;

/** When the rules were last brought up to date (shown in the disclaimer): the month of the last
 *  monthly law check (LAW_CHECKED in src/content/updates.ts, set by whoever does that check; see
 *  docs/logboek.md). Not yet checked by an expert: that is what RULES_BETA says. */
export const RULES_CHECKED = monthYear(LAW_CHECKED);

/**
 * Werkregels is live as a beta (src/lib/track.ts): experts have not checked every fact yet. The
 * first line of the disclaimer says so, with where to report a mistake. Drop it (and the "bèta"
 * tag in the language list) once the expert check of docs/werkregels-bronnen.md is done.
 */
export const RULES_BETA = 'Werkregels is nog een bètaversie. De uitleg is nog niet nagekeken door een expert. Zie je een fout? Mail naar hoi@vloertaal.nl.';

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
  'r.l.veilig.4.ru1': 'advice',
  'r.l.veilig.5.ru1': 'advice',
  'r.l.rechten.1.ru1': 'abuse',
  'r.l.rechten.2.ru1': 'abuse',
  'r.l.rechten.3.ru1': 'abuse',
  'r.l.rechten.4.ru1': 'abuse',
  'r.l.geld.1.ru1': 'advice',
  'r.l.geld.2.ru1': 'advice',
  'r.l.geld.3.ru1': 'advice',
  'r.l.geld.4.ru1': 'advice',
  'r.l.geld.5.ru1': 'advice',
  'r.l.geld.6.ru1': 'advice',
  'r.l.geld.7.ru1': 'advice',
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
  'r.l.techniek.1.ru1': 'advice',
  'r.l.techniek.2.ru1': 'advice',
  'r.l.werkplaats.1.ru1': 'advice',
  'r.l.werkplaats.2.ru1': 'advice',
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
  // The second Entree round (docs/werkregels-curriculum.md, deel 7). The rules of r.schrijven,
  // r.l.loopbaan.1 and .3 and r.l.meedoen.4 are unwritten (how it usually goes): no line.
  'r.l.loopbaan.2.ru1': 'advice',
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

// ---- Belgium (Vlaanderen): the same lines, with the Belgian places to ask. ----

// ⚖️ check: juridische eerstelijnsbijstand is gratis voor iedereen (o.a. in het justitiehuis); vakbonden helpen hun leden (justitie.belgium.be)
/** Under a written rule of a Belgian unit (RULES_ADVICE). */
export const RULES_ADVICE_BE = 'Algemene informatie. Vraag voor jouw situatie je werkgever, een vakbond of het justitiehuis.';
// ⚖️ check: bij uitbuiting en mensenhandel helpen de erkende centra Payoke, PAG-ASA en Sürya, via één meldpunt: 078 055 800 (FOD Justitie en de centra, sinds 2023; stopmensenhandel.be; news.belgium.be en werk.belgie.be "Werelddag tegen mensenhandel" 2023 en 2024; zoekresultaten 31 okt 2026). Unia gaat over discriminatie, niet over uitbuiting (audit-inhoud 6): Unia blijft erin voor de regels over discriminatie (unia.be; HELP_ROWS_BE h.be.unia).
/** Under the Belgian rules on uitbuiting, discriminatie, grensoverschrijdend gedrag and ontslag (RULES_ABUSE).
 *  One line for all of them: the place for uitbuiting first, then Unia for discriminatie. */
export const RULES_ABUSE_BE = 'Algemene informatie. Vraag hulp bij een vakbond of het justitiehuis. Uitbuiting? Bel Payoke, PAG-ASA of Sürya: 078 055 800. Discriminatie? Unia.';
// ⚖️ check: de gemeente (adres, papieren) en het OCMW (leefloon, schulden) helpen bij de regels van de staat
/** Under the Belgian rules of the state, not of your work (RULES_CIVIC). */
export const RULES_CIVIC_BE = 'Algemene informatie. Vraag voor jouw situatie de gemeente, het OCMW of het justitiehuis.';

/** The work rules of the Belgian course are those of Belgium, mostly as in Vlaanderen. */
export const RULES_COUNTRY_BE = 'Deze regels gelden in België. In Nederland zijn veel regels anders.';

/** The one line above the lessons of the Belgian path (RulesPathNote, with the Belgian course on). */
export const RULES_PATH_NOTE_BE_OWN = 'Regels van België · Algemene informatie, geen juridisch advies.';
/** The same while some lessons are still the Dutch ones (BE_TODO in src/content/regels/be). */
export const RULES_PATH_NOTE_BE_PART = 'Regels van België, sommige lessen nog van Nederland · Algemene informatie, geen juridisch advies.';

/** At the top of a Dutch lesson in the Belgian course (one not written for Belgium yet). */
export const RULES_NL_LESSON_NOTE = 'Deze les gaat nog over Nederland.';

/** "Goed om te weten" for a learner in Belgium, with the Belgian course on (RULES_NOTICE). */
export const RULES_NOTICE_BE = [
  'Vloertaal geeft algemene informatie over werk in België. Het is geen juridisch advies.',
  'De Belgische lessen zijn nieuw en nog niet nagekeken door een expert. Zie je een fout? Mail naar hoi@vloertaal.nl.',
  RULES_COUNTRY_BE,
  'Regels kunnen veranderen. Bijgewerkt: ' + RULES_CHECKED + '.',
  'Gaat het om jouw situatie? Vraag je werkgever, een vakbond of het justitiehuis.',
];

/** The disclaimer of the Belgian course (RULES_DISCLAIMER). */
export const RULES_DISCLAIMER_BE = [
  RULES_BETA,
  'Vloertaal geeft algemene informatie. Het is geen juridisch advies.',
  'Regels kunnen veranderen. Bijgewerkt: ' + RULES_CHECKED + '.',
  'Gaat het om jouw situatie? Vraag je werkgever, een vakbond of het justitiehuis.',
  RULES_COUNTRY_BE,
];

/** The kind of line under a written rule. */
export type RuleAdviceKind = 'advice' | 'abuse' | 'civic';

/**
 * The lines of the Belgian units, by rule step id ("r.be.l.loon.1.ru1"). Each Belgian unit file
 * brings its own (`advice` in src/content/regels/be/units/<name>.ts); src/content/regels/be/index.ts
 * puts them here when the Belgian course loads.
 */
const ruleAdviceBe: Record<string, RuleAdviceKind> = {};
export function addRuleAdviceBe(lines: Record<string, RuleAdviceKind>): void {
  Object.assign(ruleAdviceBe, lines);
}
/** The Belgian lines registered so far (tests). */
export const ruleAdviceBeAll = (): Readonly<Record<string, RuleAdviceKind>> => ruleAdviceBe;

/** The line to show under a rule step, or undefined for an unwritten rule (a custom). */
export function ruleAdviceLine(ruleId: string): string | undefined {
  if (isBeId(ruleId)) {
    const be = ruleAdviceBe[ruleId];
    return be === 'abuse' ? RULES_ABUSE_BE : be === 'civic' ? RULES_CIVIC_BE : be === 'advice' ? RULES_ADVICE_BE : undefined;
  }
  const kind: string | undefined = ruleAdvice[ruleId] as string | undefined ?? regionRuleAdvice[ruleId];
  return kind === 'abuse' ? RULES_ABUSE : kind === 'civic' ? RULES_CIVIC : kind === 'border' ? RULES_BORDER : kind === 'advice' ? RULES_ADVICE : undefined;
}
