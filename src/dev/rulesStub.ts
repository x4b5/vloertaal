import type { RuleUnit } from '../content/regels/types';

/**
 * A tiny, fixed stand-in for the work-rules course, for tests and screenshots only (never in the
 * app): registerRulesCourse(toCourseUnits(RULES_STUB)). The real units (src/content/regels/units)
 * keep changing while they are written; these four do not, so the path, the sector slot (r.build
 * right after r.veilig) and the preview (r.start) can be checked exactly.
 */
export const RULES_STUB: RuleUnit[] = [
  {
    id: 'r.start',
    title: 'Je eerste werkdag',
    emoji: '👋',
    color: '#ff7a00',
    lessons: [
      {
        id: 'r.l.start.1',
        title: 'Op tijd, en alles bij je',
        goal: 'Je weet wat je meeneemt op je eerste dag.',
        remember: 'Neem je ID-bewijs mee. Wees op tijd.',
        steps: [
          { kind: 'scene', id: 'r.start.1.scene', who: 'bram', picture: 'Bram staat bij de ingang.', lines: ['Het is je eerste werkdag.', 'Bram wacht bij de ingang.'] },
          { kind: 'rule', id: 'r.start.1.rule', emoji: '🪪', title: 'Neem je ID-bewijs mee', body: ['Je werkgever moet je ID-bewijs zien.', 'Dat is de wet.'], rule: 'geschreven', key: true },
          { kind: 'truefalse', id: 'r.start.1.tf', statement: 'Je werkgever mag je ID-bewijs bekijken.', answer: true, why: 'Dat moet zelfs. Hij mag het niet houden.' },
        ],
      },
      {
        id: 'r.l.start.2',
        title: 'Wie is wie',
        goal: 'Je weet wie je leidinggevende is.',
        remember: 'Vraag wie je leidinggevende is.',
        steps: [
          { kind: 'whoask', id: 'r.start.2.who', question: 'Je weet niet waar je moet beginnen. Wie vraag je het?', options: [
            { id: 'a', who: 'leidinggevende', best: true, feedback: 'Ja. Die verdeelt het werk.' },
            { id: 'b', who: 'vakbond', best: false, feedback: 'Die helpt bij een conflict.' },
          ], why: 'Je leidinggevende vertelt wat je doet.' },
        ],
      },
    ],
  },
  {
    id: 'r.veilig',
    title: 'Veilig werken',
    emoji: '🦺',
    color: '#ffc414',
    lessons: [
      {
        id: 'r.l.veilig.1',
        title: 'Beschermende kleding',
        goal: 'Je weet wie je kleding betaalt.',
        remember: 'Je werkgever betaalt je beschermende kleding.',
        steps: [
          { kind: 'rule', id: 'r.veilig.1.rule', emoji: '🦺', title: 'Je werkgever betaalt', body: ['Beschermende kleding krijg je van je werkgever.', 'Je betaalt daar niet voor.'], rule: 'geschreven', key: true },
        ],
      },
    ],
  },
  {
    id: 'r.build',
    title: 'Werken in de bouw',
    emoji: '🏗️',
    color: '#7e5428',
    lessons: [
      {
        id: 'r.l.build.1',
        title: 'De toolboxmeeting',
        goal: 'Je weet waarom je naar de toolbox gaat.',
        remember: 'Ga naar de toolboxmeeting.',
        steps: [
          { kind: 'model', id: 'r.build.1.model', context: 'Je snapt een uitleg niet.', nl: 'Kun je dat nog een keer uitleggen?' },
        ],
      },
    ],
  },
  {
    id: 'r.loon',
    title: 'Je loon',
    emoji: '💶',
    color: '#137a55',
    lessons: [
      {
        id: 'r.l.loon.1',
        title: 'Je loonstrook lezen',
        goal: 'Je vindt je uren op je loonstrook.',
        remember: 'Kijk elke maand of je uren kloppen.',
        steps: [
          { kind: 'truefalse', id: 'r.loon.1.tf', statement: 'Op je loonstrook staan je uren.', answer: true, why: 'Kijk of ze kloppen.' },
        ],
      },
    ],
  },
];
