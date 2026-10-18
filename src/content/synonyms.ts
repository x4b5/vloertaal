/**
 * Near-synonyms: words a learner could fairly pick for each other ("Which one is 'the boss'?"
 * with "de leidinggevende" next to "de baas"), or whose help-language meaning comes out the same
 * ("free" for gratis and vrij). They are never offered as wrong options for each other: not in a
 * choice (lib/exercises.ts options, distractors) and not as a wrong word when building a sentence
 * (buildSteps). Written as the Dutch of the words (with their article), one group per line.
 */
export const NEAR_SYNONYMS: readonly (readonly string[])[] = [
  ['hallo', 'goedemorgen'],
  ['tot morgen', 'morgen'],
  ['de baas', 'de leidinggevende', 'de werkgever'],
  ['het werk', 'de baan', 'de functie', 'de vacature'],
  ['helpen', 'help', 'de hulp'],
  ['spreken', 'praten'],
  ['de vertaling', 'vertalen', 'de vertaalapp'],
  ['het plaatje', 'de foto'],
  ['de pauze', 'de rust'],
  ['het gevaar', 'het risico', 'gevaarlijk'],
  ['laten zien', 'voordoen'],
  ['de collega', 'de buddy'],
  ['zoeken', 'vinden'],
  ['bellen', 'terugbellen', 'het telefoontje'],
  ['de dokter', 'de huisarts', 'de bedrijfsarts'],
  ['ziek', 'de ziekte', 'ziekmelden'],
  ['melden', 'ziekmelden', 'betermelden'],
  ['het loon', 'het salaris', 'het uurloon'],
  ['de overuren', 'overwerken'],
  ['de vakantiedagen', 'het verlof', 'vrij'],
  ['gratis', 'vrij'],
  ['de uren', 'de werktijden', 'de werktijd', 'het rooster'],
  ['de opleiding', 'de training', 'de cursus'],
  ['het certificaat', 'het diploma', 'het heftruckcertificaat'],
  ['het pasje', 'de bankpas'],
  ['het bericht', 'de sms', 'appen'],
  ['de brief', 'de post', 'het briefje'],
  ['kijken', 'controleren'],
  ['de uitkering', 'de WW'],
  ['werkloos', 'de werkzoekende'],
  ['wassen', 'handen wassen'],
];

const ARTICLES = /^(de|het|een)\s+/i;
const key = (nl: string) => nl.trim().toLowerCase().replace(ARTICLES, '');

/** For each word (Dutch without article, lower case): the other words of its groups. */
const near = new Map<string, Set<string>>();
for (const group of NEAR_SYNONYMS) {
  for (const a of group) {
    for (const b of group) {
      if (a === b) continue;
      const set = near.get(key(a)) ?? new Set<string>();
      set.add(key(b));
      near.set(key(a), set);
    }
  }
}

/**
 * Are these two Dutch words or tiles near-synonyms? Articles and capitals do not matter
 * ("de baas" and "Leidinggevende" are).
 */
export function nearSynonyms(a: string, b: string): boolean {
  return near.get(key(a))?.has(key(b)) ?? false;
}
