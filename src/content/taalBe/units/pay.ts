import { beTip } from '../helpers';
import type { BeTaal } from '../types';

/**
 * The Belgian version of "Loon" (u.pay), a B unit (docs/taal-belgie.md):
 *  - l.payslip: de loonstrook → de loonbrief (also in the sentence and the chat; the chat's
 *    question is an item of the test, c.payslip.q); the tip: brutoloon, RSZ, bedrijfsvoorheffing,
 *    nettoloon, the paritair comité and maaltijdcheques;
 *  - l.extra: de toeslag → de premie, het minimumloon → het barema (of the paritair comité); the
 *    tip: vakantiegeld (bediende: from the employer, enkel and dubbel; arbeider: from the
 *    vakantiekas or the RJV), the eindejaarspremie and overuren.
 * The facts are those of the Belgian work rules (src/content/regels/be/units/loon.ts), so that both
 * tracks say the same. "Wat kun je nu?" says "loonbrief" in Belgium (`kun`, src/content/kunJeNu.ts).
 * Translations: src/i18n/be/units/pay.ts. No expert has checked the ⚖️ notes yet.
 */

// ⚖️ check: In Flanders the payslip is called "de loonbrief" (or loonafrekening); the employer gives
// one with every final pay settlement ⚖️ (Loonbeschermingswet 12 april 1965, art. 15; hetacv.be "je
// loonbrief"; docs/werkregels-belgie.md, hoofdstuk 4; src/content/regels/be/units/loon.ts).
// ⚖️ check: Extra pay for night work is usually a premie (nachtpremie), set by the paritair comité
// or the company; the minimum pay is the barema of the paritair comité ⚖️ (werk.belgie.be,
// "Minimumlonen" and "Paritaire comités"; loon.ts).
// The lines below have no recording yet: the phone reads them until the next recording round
// (docs/taal-belgie.md "Opnames"; scripts/list-clips.ts lists them in clips.json).
const lines: BeTaal['lines'] = {
  'w.loonstrook': { nl: 'de loonbrief', en: 'the payslip', picture: 'same' },
  's.payslip.2': { nl: 'Mijn loonbrief klopt niet.', en: 'My payslip is not right.' },
  'c.payslip.q': { nl: 'Heb je je loonbrief gekregen?', en: 'Did you get your payslip?' },
  'w.toeslag': { nl: 'de premie', en: 'the bonus, the extra pay (for example for night work)', picture: false },
  'w.minimumloon': { nl: 'het barema', en: 'the minimum pay scale (of your sector)', emoji: '📏', picture: false },
  's.extra.1': { nl: 'Krijg ik een premie voor nachtwerk?', en: 'Do I get a bonus for night work?' },
};

/** "Wat kun je nu?" in Belgium: the line that says "loonstrook" in the Netherlands (same id, same translation). */
const kun: BeTaal['kun'] = {
  'kjn.u.pay.1': 'Ik kan zeggen dat mijn loonbrief niet klopt.',
};

const tips = [
  // ⚖️ check: nettoloon = brutoloon minus the RSZ (the worker's social security contribution) minus
  // the bedrijfsvoorheffing ⚖️ (securex.be "hoe wordt het nettoloon berekend"; loon.ts).
  // ⚖️ check: The worker's RSZ contribution is 13,07% of the gross pay (for an arbeider: of 108%
  // of the gross pay; the tip says "of your gross pay", simplified) ⚖️ (securex.be "loonkosten
  // eerste aanwerving"; hetacv.be "je loonbrief"; bijgewerkt oktober 2026).
  // ⚖️ check: The bedrijfsvoorheffing is an advance on your income tax, on the pay minus RSZ ⚖️
  // (FOD Financiën; bnpparibasfortis.be "loonfiche"; loon.ts).
  // ⚖️ check: Every employer falls under a paritair comité; its agreements set minimum pay
  // (barema's); its number is usually on the loonbrief ⚖️ (werk.belgie.be "Paritaire comités";
  // hetacv.be "je loonbrief").
  // ⚖️ check: Maaltijdcheques: per day you really work; the worker pays a small part himself, which
  // goes off the net pay ⚖️ (KB maaltijdcheques; partena-professional.be; loon.ts; the amount is
  // left out on purpose).
  // ⚖️ check: A loonbrief that is not right: ask the employer or the personnel department; the union
  // helps its members ⚖️ (hetacv.be; abvv.be; loon.ts).
  beTip({
    slug: 'payslip',
    lessonId: 'l.payslip',
    emoji: '🧾',
    title: 'Check your loonbrief',
    body:
      'Brutoloon is your pay before anything goes off. Nettoloon is what you get in your bank account. Two things go off in between: the RSZ (social security, 13.07% of your gross pay) and the bedrijfsvoorheffing (an advance on your tax). ' +
      'Your employer must give you a payslip (loonbrief). On it you often see the number of your paritair comité: the agreements of your sector, also about minimum pay. Do you get meal vouchers (maaltijdcheques)? You pay a small part of them yourself. ' +
      'Check the hours and the pay on every loonbrief, and write down the hours you work. ' +
      'General information. For your situation: ask your employer, the union or the justitiehuis (free legal advice).',
    phrase: ['Ik heb meer uren gewerkt. Kunt u het nakijken?', 'I worked more hours. Can you check it?'],
    situation: 'Your loonbrief shows fewer hours than you worked. What do you do?',
    options: [
      'Show your notes and ask your employer to check it.',
      'Say nothing, because you do not want problems.',
      'Wait one month: it will be right on the next loonbrief.',
    ],
    why: 'Mistakes on a loonbrief happen. Asking about it is normal and it is your right. Your own notes of dates and hours help a lot. Still not right? The union can help.',
  }),
  // ⚖️ check: A bediende gets the holiday pay from the employer: the normal pay during the holiday
  // (enkel vakantiegeld) and once a year the dubbel vakantiegeld ⚖️ (securex.be "vakantiegeld van
  // de bedienden"; hetacv.be "jaarlijks verlof"; loon.ts).
  // ⚖️ check: An arbeider gets the holiday pay from the RJV (Rijksdienst voor Jaarlijkse Vakantie)
  // or a vakantiekas, from May, not from the employer ⚖️ (securex.be "vakantiegeld van de
  // arbeiders"; socialsecurity.be; loon.ts: "vanaf 2 mei").
  // ⚖️ check: The holiday pay depends on the work in the year before (vakantiedienstjaar) ⚖️
  // (vlaanderen.be "vakantie en vakantiegeld"; loon.ts).
  // ⚖️ check: The eindejaarspremie is not in the law, but in an agreement of the paritair comité,
  // the company or the contract ⚖️ (hetacv.be; securex.be; loon.ts).
  // ⚖️ check: Your pay may not be lower than the barema of your paritair comité ⚖️ (werk.belgie.be
  // "Minimumlonen"; loon.ts).
  // ⚖️ check: Overtime: at least 50% extra (100% on Sundays and public holidays), and usually also
  // time off later (inhaalrust) ⚖️ (Arbeidswet 16 maart 1971, art. 26bis and 29; loon.ts).
  beTip({
    slug: 'extra',
    lessonId: 'l.extra',
    emoji: '🏖️',
    title: 'Holiday pay and end-of-year bonus',
    body:
      'You get holiday pay (vakantiegeld). It depends on the work you did the year before. ' +
      'Are you a bediende (often office or shop work)? Then your employer pays it: your normal pay during your holiday, and once a year extra money (dubbel vakantiegeld). ' +
      'Are you an arbeider (often work with your hands)? Then a holiday fund (vakantiekas or RJV) pays it, from May. ' +
      'Many sectors also give an end-of-year bonus (eindejaarspremie). Your pay may never be lower than the minimum of your paritair comité (barema). Overtime gives at least 50% extra, and often time off later. ' +
      'General information. For your situation: ask your employer, the union or the justitiehuis (free legal advice).',
    phrase: ['Wanneer krijg ik mijn vakantiegeld?', 'When do I get my holiday pay?'],
    situation: 'You are an arbeider in a factory. A colleague says: "In May you get extra money, but not from the boss." What is it?',
    ask: 'which',
    options: [
      'Holiday pay, from the holiday fund (vakantiekas).',
      'A present from the union, for its members.',
      'A 13th month from the boss, for everyone.',
    ],
    why: 'For an arbeider, the holiday fund pays the holiday pay, not the boss. It is your right, not a gift: you build it up with your work. The end-of-year bonus depends on your sector.',
  }),
];

export const be: BeTaal = { nl: 'u.pay', lines, tips, kun };
