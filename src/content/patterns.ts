/**
 * "Zet het vooraan" (stap 3, a pattern of the language): a sentence of the course with a word of
 * time or place, built again with that word first. Dutch then puts the verb second and the
 * subject after it: "Ik verstuur de mail morgen." becomes "Morgen verstuur ik de mail."
 * (inversion, a known stumbling block for many first languages).
 *
 * Only sentences the course already has (a lesson's sentence or a chat line): the same words in
 * another order mean the same, so the translation of `id` stays right and nothing new needs to
 * be translated. Every line here is checked against the course (tests/niveauStap3.test.ts): the
 * same words as its source, the front words first, then the source's verb, then its subject.
 *
 * `front`: the words put first, as they stand in the source (written small). `nl`: the sentence
 * with them in front. `alt`: other right orders of it (Sentence.alt), if any.
 */
export interface FrontLine {
  id: string;
  front: string;
  nl: string;
  alt?: string[];
}

export const FRONT_LINES: readonly FrontLine[] = [
  { id: 's.keeplearning.1', front: 'elke dag', nl: 'Elke dag oefen ik tien minuten.' },
  { id: 's.sick.1', front: 'vandaag', nl: 'Vandaag ben ik ziek.' },
  { id: 's.clock.1', front: 'om zes uur', nl: 'Om zes uur klok ik in.' },
  { id: 's.smoking.3', front: 'in de pauze', nl: 'In de pauze rook ik alleen buiten.' },
  { id: 'c.health.q', front: 'nu', nl: 'Nu moet je pauze nemen.' },
  { id: 's.email.3', front: 'morgen', nl: 'Morgen verstuur ik de mail.' },
  { id: 's.texting.3', front: 'elke dag', nl: 'Elke dag kijk ik in de app.' },
  { id: 's.healthy.1', front: 'vandaag', nl: 'Vandaag ben ik erg moe.' },
  { id: 's.insurance.1', front: 'elke maand', nl: 'Elke maand betaal ik premie.' },
  { id: 's.budget.2', front: 'elke maand', nl: 'Elke maand spaar ik een beetje.' },
  { id: 'be.s.transit.1', front: 'in de bus', nl: 'In de bus betaal ik met mijn bankkaart.' },
  { id: 's.site.3', front: 'eerst', nl: 'Eerst doe ik een LMRA.' },
  { id: 's.hours.1', front: 'om half acht', nl: 'Om half acht begin ik.' },
  { id: 's.hours.2', front: 'vandaag', nl: 'Vandaag werk ik acht uur.' },
  { id: 's.harvest.1', front: 'in de kas', nl: 'In de kas werk ik.' },
  { id: 's.workorder.1', front: 'eerst', nl: 'Eerst lees ik de werkbon.' },
];

const byId = new Map(FRONT_LINES.map((f) => [f.id, f]));

/** The fronted form of a course line (by its id), if it has one. */
export function frontLine(id: string): FrontLine | undefined {
  return byId.get(id);
}
