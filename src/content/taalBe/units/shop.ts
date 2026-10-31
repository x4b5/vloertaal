import { beTip } from '../helpers';
import type { BeTaal } from '../types';

/**
 * The Belgian version of "In de winkel" (u.shop), a B unit (docs/taal-belgie.md). Only l.checkout
 * differs: "pinnen" → "met de kaart betalen", "het bonnetje" → "het kasticket" (the same drawings),
 * and the tip: beer and wine from 16, strong drinks and tobacco from 18 (Dutch: everything from
 * 18). l.shelves is the same in both countries. Translations: src/i18n/be/units/shop.ts.
 * The facts are those of Werkregels winkel.ts (Belgium).
 */

const HOUSE = 'Rules differ per company: ask your supervisor what the rules are where you work.';

// ⚖️ check: In Flanders you say "met de kaart betalen" (or "met Bancontact betalen"), not "pinnen";
// the receipt is "het kasticket" ⚖️ (Van Dale, Belgisch-Nederlands; docs/werkregels-belgie.md,
// woordenlijst; nakijken).
const lines: BeTaal['lines'] = {
  'w.pinnen': { nl: 'met de kaart betalen', en: 'to pay by card', picture: 'same' },
  'w.bonnetje': { nl: 'het kasticket', en: 'the receipt', picture: 'same' },
  's.checkout.1': { nl: 'Betaalt u met de kaart of contant?', en: 'Do you pay by card or in cash?' },
  'c.checkout.q': { nl: 'Kan ik hier met de kaart betalen?', en: 'Can I pay by card here?' },
};

const tips = [
  // ⚖️ check: Beer and wine from 16; strong drinks (spirits) and tobacco from 18 ⚖️ (wet 24 januari
  // 1977, art. 6 and 6bis, changed by wet 10 december 2009; tobacco 18 since 2019; Werkregels
  // winkel.ts; stad.gent "schenken en verkopen van alcohol aan jongeren").
  // ⚖️ check: The seller may ask for proof of age, like the identity card; for tobacco an ID for
  // whoever looks younger than 25 ⚖️ (wet 24 januari 1977; tabakswet 2024; Werkregels winkel.ts).
  // ⚖️ check: Selling to someone too young: the shop can get a fine ⚖️ (wet 24 januari 1977,
  // sancties; FOD Volksgezondheid controle; Werkregels winkel.ts).
  {
    ...beTip({
      slug: 'checkout',
      lessonId: 'l.checkout',
      emoji: '🪪',
      title: 'ID for alcohol and tobacco',
      body: `You may not sell beer or wine to anyone under 16, and no strong drinks or tobacco to anyone under 18: this is the law. Not sure how old a customer is? Ask for their ID (identiteitskaart). For tobacco, ask for ID from everyone who looks younger than 25. No ID, or too young? Then you do not sell it, and you stay polite. ${HOUSE}`,
      phrase: ['Zonder ID mag ik dit niet verkopen.', 'Without ID I may not sell this.'],
      situation: 'A young man wants to buy beer. He looks about 14. He says he is 16, but he has no ID with him. What do you do?',
      options: [
        'Say you cannot sell it without ID.',
        'Sell it, because he says he is 16.',
        'Sell it, but only one can.',
      ],
      why: 'Without ID you cannot know his age. Selling beer to someone under 16 is against the law, and the shop can get a fine.',
    }),
  },
];

/** "Wat kun je nu?" in Belgium: the line that says "pinnen" in the Netherlands (same id, same translation). */
const kun: BeTaal['kun'] = {
  'kjn.u.shop.1': 'Ik kan vragen of een klant met de kaart wil betalen.',
};

export const be: BeTaal = { nl: 'u.shop', lines, tips, kun };
