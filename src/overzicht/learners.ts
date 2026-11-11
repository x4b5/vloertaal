import { type Learner, learnerOf } from '../lib/learner';

/**
 * "Wie krijgt wat" (docs/overzicht.md): the passport (src/lib/learner.ts) asked for each kind of
 * learner, so the table is what the app itself answers, not a description of it.
 */
export const LEARNER_KINDS: { naam: string; kiest: string; me: Learner }[] = [
  { naam: 'Taal', kiest: 'een hulptaal (of alleen Engels)', me: learnerOf({ helpLang: 'pl' }, false) },
  { naam: 'Werkregels', kiest: '"Ik spreek al Nederlands"', me: learnerOf({ helpLang: 'nl' }, false) },
  { naam: 'Taal met "Eén app" aan', kiest: 'een hulptaal, op een telefoon met ?nieuw=1', me: learnerOf({ helpLang: 'pl' }, true) },
];

const yes = (b: boolean) => (b ? 'ja' : 'nee');

/** A row per answer of the passport: every key of Learner has one, or this does not compile. */
export const LEARNER_ROWS: { [K in keyof Learner]: { vraag: string; antwoord: (v: Learner[K]) => string } } = {
  track: { vraag: 'Welke cursus (lespad, onderwerpen, voortgang)', antwoord: (v) => ({ taal: 'Taal', regels: 'Werkregels' })[v] },
  learnsDutch: { vraag: 'Leert Nederlands: woorden, zinnen, gesprekjes, met spreken, tempo en "Oefen samen"', antwoord: yes },
  learnsRules: { vraag: 'De cursus is de werkregels: verhalen, regelkaarten, "wat doe je?"', antwoord: yes },
  readsDutch: { vraag: 'Leest de app alleen in het Nederlands', antwoord: yes },
  rulesBeside: { vraag: '"Zo werkt het hier" bij de Taal-onderwerpen: de lessen van Werkregels erbij', antwoord: yes },
  review: { vraag: 'Wat "Herhaal vandaag" terugbrengt', antwoord: (v) => ({ words: 'woorden', rules: 'regelvragen', both: 'woorden en regelvragen' })[v] },
  help: { vraag: 'Het tabblad Hulp', antwoord: (v) => ({ phrases: 'noodzinnen en tips', whoToCall: '"Wie bel je?" en de regelkaarten' })[v] },
};
