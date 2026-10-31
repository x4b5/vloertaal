import { beTip } from '../helpers';
import type { BeTaal } from '../types';

/**
 * The Belgian version of "Wonen en papieren" (u.papers), a B unit (docs/taal-belgie.md):
 *  - l.bsn (C items, written as B lines): het BSN → het rijksregisternummer, het identiteitsbewijs →
 *    de verblijfskaart (the same card drawing), de zorgverzekering → het ziekenfonds, DigiD → itsme
 *    or the eID; the tip: the gemeente, the eID or verblijfskaart, the rijksregisternummer or
 *    bisnummer, moving within 8 working days, the ziekenfonds;
 *  - l.housing: de borg → de huurwaarborg, inhouden → afhouden (Flemish for pay deductions); the
 *    tip: the Flemish rules on the huurwaarborg, the CAW and the justitiehuis.
 * The facts are those of the Belgian work rules (src/content/regels/be/units/start.ts, geld.ts,
 * meedoen.ts), so that both tracks say the same. Translations: src/i18n/be/units/papers.ts.
 * No expert has checked the ⚖️ notes yet.
 */

// ⚖️ check: Your rijksregisternummer is on your identity card (eID) or residence card
// (verblijfskaart); the employer needs it for the social security ⚖️ (socialsecurity.be;
// ksz-bcss.fgov.be; ibz.rrn.fgov.be; src/content/regels/be/units/start.ts).
// ⚖️ check: Foreigners who live in Belgium get a verblijfskaart from the gemeente ⚖️ (dofi.ibz.be
// "verblijfskaarten"; vlaanderen.be "Belgische identiteitsdocumenten"; search result of 31 October 2026).
// ⚖️ check: You log in to the government with itsme or with your eID, a card reader and your pin ⚖️
// (CSAM; fin.belgium.be "aanmelden MyMinfin"; src/content/regels/be/units/digitaal.ts).
// ⚖️ check: Health care is insured through a ziekenfonds (mutualiteit), which you join yourself ⚖️
// (riziv.fgov.be; wet 14 juli 1994; src/content/regels/be/units/geld.ts).
// ⚖️ check: In Flanders the deposit is called "de huurwaarborg" (Vlaams Woninghuurdecreet 9 november
// 2018, art. 37 and following); "afhouden" is the Flemish word for a pay deduction
// (docs/werkregels-belgie.md, hoofdstuk 4).
// No recording yet for these lines: the phone reads them until the next recording round.
const lines: BeTaal['lines'] = {
  'w.bsn': { nl: 'het rijksregisternummer', en: 'the national register number (your number in Belgium)', picture: false },
  'w.identiteitsbewijs': { nl: 'de verblijfskaart', en: 'the residence card (for people who are not Belgian)', picture: 'same' },
  'w.zorgverzekering': { nl: 'het ziekenfonds', en: 'the health insurance fund (the mutualiteit)', picture: false },
  's.bsn.3': { nl: 'Ik log in met itsme of met mijn eID.', en: 'I log in with itsme or with my eID.' },
  'c.bsn.q': { nl: 'Mag ik je verblijfskaart zien?', en: 'May I see your residence card?' },
  'c.bsn.a': { nl: 'Ja, hier. Mijn rijksregisternummer staat erop.', en: 'Yes, here. My national register number is on it.' },
  'w.borg': { nl: 'de huurwaarborg', en: 'the rental deposit', picture: false },
  'w.inhouden': { nl: 'afhouden', en: 'to take off (from your pay)', picture: false },
  's.housing.2': { nl: 'Krijg ik de huurwaarborg terug?', en: 'Do I get the rental deposit back?' },
  'c.housing.q': { nl: 'De huur houden we af van je loon.', en: 'We take the rent off your pay.' },
};

const tips = [
  // ⚖️ check: When you come to live in Belgium, you register at the gemeente of your address; the
  // gemeente gives the identity card (Belgians) or the residence card (others) ⚖️ (vlaanderen.be
  // "Belgische identiteitsdocumenten"; dofi.ibz.be; src/content/taalBe/units/society.ts).
  // ⚖️ check: Your rijksregisternummer is on that card; someone who is not in the register gets a
  // bisnummer, which the employer can ask for ⚖️ (ksz-bcss.fgov.be "bisnummer"; vlaanderen.be
  // "BIS-nummer aanmaken"; start.ts).
  // ⚖️ check: Never hand your identity card or passport itself to your employer ⚖️ (vlaanderen.be;
  // ibz.rrn.fgov.be; Myria, signals of human trafficking; start.ts: whether a copy is allowed is to
  // be checked, GDPR; for a foreign worker the employer keeps a copy of the residence permit, wet 30
  // april 1999).
  // ⚖️ check: Moving: tell the gemeente of your new address within 8 working days ⚖️ (vlaanderen.be
  // "Aangifte van adreswijziging"; KB 16 juli 1992; geld.ts).
  // ⚖️ check: Your itsme or eID codes are only for you; someone who helps you uses a proxy
  // (volmacht) with his own login ⚖️ (fin.belgium.be "fiscale handelingen delegeren"; digitaal.ts).
  // ⚖️ check: You must be insured for health care through a ziekenfonds (mutualiteit) or the
  // Hulpkas (HZIV); you choose and join it yourself ⚖️ (riziv.fgov.be "verplichte
  // ziekteverzekering"; wet 14 juli 1994; hziv.fgov.be; search result of 31 October 2026).
  beTip({
    slug: 'bsn',
    lessonId: 'l.bsn',
    emoji: '🔢',
    title: 'Your rijksregisternummer: keep it safe',
    body:
      'You come to live in Belgium? Then you register at the gemeente of your address. You get a card: an identity card (eID) for Belgians, a residence card (verblijfskaart) for others. ' +
      'On it is your rijksregisternummer (national register number). Not in the register yet? Then you get a bisnummer. You need that number to work: your employer asks for it. Never give your card itself to your employer. ' +
      'Moving? Tell the gemeente within 8 working days. You log in to the government with itsme or your eID: never give your codes to someone else. Join a ziekenfonds (health insurance fund) quickly. ' +
      'General information. For your situation: ask your employer, the union or the justitiehuis (free legal advice).',
    phrase: ['Waarom heeft u mijn rijksregisternummer nodig?', 'Why do you need my national register number?'],
    situation: 'Someone you do not know offers you a job on WhatsApp. He asks for a photo of your residence card and your itsme code. What do you do?',
    options: [
      'Never give your itsme code. Check who he is first.',
      'Send everything quickly, so you get the job.',
      'Send only the card photo, not your itsme code.',
    ],
    why: 'With your itsme or a copy of your card, other people can use your name, for example for loans or benefits. A real employer needs your rijksregisternummer, but never your itsme code.',
  }),
  // ⚖️ check: Housing from the employer: the rental contract is separate from the work contract; it
  // says how long you may still stay ⚖️ (Vlaams Woninghuurdecreet 9 november 2018; geld.ts: still
  // to be checked for rooms that belong to the job).
  // ⚖️ check: The employer may only take off from the pay what the law allows ⚖️ (Loonbeschermingswet
  // 12 april 1965, art. 23; loon.ts).
  // ⚖️ check: In Flanders a money deposit (huurwaarborg) is at most 3 months of rent, on a blocked
  // account in the tenant's name; back at the end, minus real damage ⚖️ (Vlaams Woninghuurdecreet,
  // art. 37; vlaanderen.be presentation "Het nieuwe Vlaamse Woninghuurdecreet"; belfius.be and
  // test-aankoop.be "huurwaarborg", search result of 31 October 2026: the date of art. 38 to check).
  // ⚖️ check: Register your address at the gemeente ⚖️ (vlaanderen.be "Aangifte van adreswijziging").
  // ⚖️ check: Help with housing problems: the CAW helps for free; a free first legal advice at the
  // justitiehuis ⚖️ (caw.be; vlaanderen.be/justitiehuizen; geld.ts).
  beTip({
    slug: 'housing',
    lessonId: 'l.housing',
    emoji: '🔑',
    title: 'Housing from your employer',
    body:
      'Does your employer or interim office (interimkantoor) arrange your housing? Then the rental contract must be separate from your work contract. Ask for a written rental contract and proof of what you pay. ' +
      'Your employer may only take money off your pay when the law allows it: check it on your loonbrief. ' +
      'In Flanders a deposit (huurwaarborg) is at most 3 months of rent, on a blocked bank account in your name. You get it back when you leave, minus real damage. Register your address at the gemeente. ' +
      'Unsafe housing, threats or unfair costs? The CAW helps for free. Your job ends? Ask for advice before you leave your home. ' +
      'General information. For your situation: ask the union, the justitiehuis (free legal advice) or Payoke.',
    phrase: ['Mag ik een bewijs dat ik betaald heb?', 'May I have proof that I paid?'],
    situation: 'Your job ends. The interim office says: "You must leave the house tomorrow." What do you do?',
    options: [
      'Ask the justitiehuis or the union for advice first.',
      'Leave right away and forget about your deposit.',
      'Stay, and stop answering the interim office.',
    ],
    why: 'Your rental contract has its own rules, separate from your job. It says how long you may still stay. Free advice helps you know your rights, also about your deposit.',
  }),
];

export const be: BeTaal = { nl: 'u.papers', lines, tips };
