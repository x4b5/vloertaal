/**
 * Lines shown with the rules track (Werkregels). Plain Dutch, never legal advice.
 */

/** When the rules were last checked (shown in the disclaimer). */
export const RULES_CHECKED = 'oktober 2026';

/** Shown under every `rule` step with `rule: 'geschreven'` (law, contract or cao). */
export const RULES_ADVICE = 'Algemene informatie. Vraag voor jouw situatie je werkgever, een vakbond of het Juridisch Loket.';

/**
 * Shown instead of RULES_ADVICE under the rules on uitbuiting, discriminatie, grensoverschrijdend
 * gedrag and ontslag: there the employer can be the problem, so the help comes from outside.
 */
export const RULES_ABUSE = 'Algemene informatie. Vraag hulp bij een vakbond, het Juridisch Loket of FairWork.';

/** The disclaimer of the track (about screen, first rules lesson, certificate). */
export const RULES_DISCLAIMER = [
  'Vloertaal geeft algemene informatie. Het is geen juridisch advies.',
  'Regels kunnen veranderen. Gecontroleerd: ' + RULES_CHECKED + '.',
  'Gaat het om jouw situatie? Vraag je werkgever, een vakbond of het Juridisch Loket.',
];

/** Which line goes under which written rule, keyed by rule step id. Every 'geschreven' rule has one. */
export const ruleAdvice: Record<string, 'advice' | 'abuse'> = {
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
};

/** The line to show under a rule step, or undefined for an unwritten rule (a custom). */
export function ruleAdviceLine(ruleId: string): string | undefined {
  const kind = ruleAdvice[ruleId];
  return kind === 'abuse' ? RULES_ABUSE : kind === 'advice' ? RULES_ADVICE : undefined;
}
