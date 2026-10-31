import { beTip } from '../helpers';
import type { BeTaal } from '../types';

/**
 * The Belgian version of "Gezondheid" (u.health), a B unit (docs/taal-belgie.md):
 *  - l.doctor: de huisartsenpost → de huisartsenwachtpost, and 1733 for the doctor on duty;
 *  - l.insurance (C in the inventory, written as B: its words, sentences and chat): the
 *    zorgverzekering, het eigen risico and de zorgtoeslag → het ziekenfonds, het remgeld and de
 *    verhoogde tegemoetkoming.
 * l.body and l.healthy are the same in both countries. Translations: src/i18n/be/units/health.ts.
 *
 * Sources: the official sites (riziv.fgov.be, inami.fgov.be, socialsecurity.be) were not opened in
 * this session (31 October 2026): the notes cite search results of that day. Not yet checked by an
 * expert.
 */

/** The Belgian closing line of a tip (src/lib/tipText.ts BE_ADVICE_LINE, written out: no import cycle). */
const BE_ADVICE = 'General information. For your situation: ask your employer, the union or the justitiehuis (free legal advice).';

// ⚖️ check: Outside office hours (evening, night, weekend) you call 1733 for the doctor on duty; the
// call centre sends you to the huisartsenwachtpost or a doctor ⚖️ (FOD Volksgezondheid, 1733;
// rolled out per region: some wachtposten have their own number, e.g. Druivenstreek since July
// 2026, VRT NWS 4 July 2026; search results of 31 October 2026).
// ⚖️ check: Every worker in Belgium must join a ziekenfonds (mutualiteit) or the Hulpkas (HZIV) for
// the compulsory health insurance ⚖️ (wet 14 juli 1994; inami.fgov.be "aansluiten bij een
// ziekenfonds"; socialsecurity.be "aansluiten bij een ziekenfonds"; search results, not opened).
// ⚖️ check: The ziekenfonds pays back part of the costs; the part you pay yourself is the remgeld;
// with verhoogde tegemoetkoming you pay less ⚖️ (riziv.fgov.be "remgeld", "verhoogde
// tegemoetkoming"; Werkregels geld.ts; search results, not opened).
const lines: BeTaal['lines'] = {
  // l.doctor
  'w.huisartsenpost': { nl: 'de huisartsenwachtpost', en: 'the GP service for evening, night and weekend', picture: 'same' },
  'c.doctor.q': { nl: 'Huisartsenwachtpost, wat kan ik voor u doen?', en: 'GP service, what can I do for you?' },
  // l.insurance
  'w.premie': { nl: 'de bijdrage', en: 'the member fee (what you pay the ziekenfonds)', emoji: '🪙', picture: false },
  'w.eigenrisico': { nl: 'het remgeld', en: 'the own share (the part of the cost you pay yourself)', emoji: '🧮', picture: false },
  'w.zorgtoeslag': { nl: 'de verhoogde tegemoetkoming', en: 'the extra help with health costs (for a low income)', emoji: '🤲', picture: false },
  'w.verzekeraar': { nl: 'het ziekenfonds', en: 'the health fund (mutualiteit)', emoji: '☂️', picture: false },
  's.insurance.1': { nl: 'Ik ben lid van een ziekenfonds.', en: 'I am a member of a health fund.' },
  's.insurance.2': { nl: 'Wordt dit terugbetaald?', en: 'Is this paid back (covered)?' },
  's.insurance.3': { nl: 'Ik vraag de verhoogde tegemoetkoming aan.', en: 'I apply for the extra help with health costs.' },
  'c.insurance.q': { nl: 'Bij welk ziekenfonds ben je?', en: 'Which health fund are you with?' },
  'c.insurance.a': { nl: 'Dat weet ik niet. Ik kijk het na.', en: 'I do not know. I will check it.' },
};

const tips = [
  // ⚖️ check: You choose a family doctor (huisarts) yourself; ask if they take new patients ⚖️
  // (free choice of doctor; riziv.fgov.be "globaal medisch dossier"; search result).
  // ⚖️ check: 1733 = the number for the doctor on duty outside office hours; 112 = emergencies ⚖️
  // (FOD Volksgezondheid; 112.be; search results of 31 October 2026).
  {
    ...beTip({
      slug: 'doctor',
      lessonId: 'l.doctor',
      emoji: '🧑‍⚕️',
      title: 'Doctor or 112?',
      body: 'Choose a family doctor (huisarts) near your home. Do you need a doctor in the evening, at night or in the weekend? Call 1733: they send you to the doctor on duty (huisartsenwachtpost). Call 112 only in an emergency: danger to life, fire, or a crime happening now. You get medicines at the pharmacy (apotheek).',
      phrase: ['Neemt u nog nieuwe patiënten aan?', 'Do you still take new patients?'],
      situation: 'It is Saturday night. Your child has a high fever, but is awake and breathing normally. What do you do?',
      options: ['Call 1733.', 'Call 112.', 'Wait until Monday and do nothing.'],
      why: '1733 helps you find a doctor outside office hours. 112 is for emergencies: danger to life, fire, or a crime happening now.',
    }),
    lead: [0, 1, 2, 3],
  },
  // ⚖️ check: Join a ziekenfonds or the Hulpkas (HZIV) when you start working; without it you pay
  // the full cost yourself ⚖️ (inami.fgov.be "aansluiten bij een ziekenfonds"; wikifin.be "de
  // verplichte ziekteverzekering"; search results, not opened).
  // ⚖️ check: The remgeld, and less with verhoogde tegemoetkoming (low income) ⚖️ (riziv.fgov.be).
  // ⚖️ check: After the guaranteed wage, the ziekenfonds pays a benefit when you are sick for longer
  // ⚖️ (riziv.fgov.be; Werkregels ziek.ts).
  {
    ...beTip({
      slug: 'insurance',
      lessonId: 'l.insurance',
      emoji: '☂️',
      title: 'Your ziekenfonds',
      body: `In Belgium you must join a health fund: a ziekenfonds (mutualiteit), or the Hulpkas (HZIV). Do it when you start working. The ziekenfonds pays back a part of the costs of the doctor, the hospital and medicines. The part you pay yourself is the remgeld. With a low income you may get verhoogde tegemoetkoming: then you pay less. Are you sick for a long time? Then the ziekenfonds also pays you a benefit. ${BE_ADVICE}`,
      phrase: ['Ik wil lid worden van een ziekenfonds. Kunt u mij helpen?', 'I want to join a health fund. Can you help me?'],
      situation: 'You started working here two weeks ago and you have no ziekenfonds yet. What do you do?',
      options: [
        'Join a ziekenfonds quickly.',
        'Wait: your insurance from home is enough.',
        'Use the insurance card of a friend.',
      ],
      why: 'Without a ziekenfonds, you pay the doctor and the hospital yourself. Joining quickly protects you. Your employer or interim office can help you.',
    }),
  },
];

export const be: BeTaal = { nl: 'u.health', lines, tips };
