import { beTip } from '../helpers';
import type { BeTaal } from '../types';

/**
 * The Belgian version of "Huisregels" (u.house), a B unit (docs/taal-belgie.md). The words are the
 * same; only the tip of l.smoking differs: another law ("Since 2022 …" is Dutch). In Belgium
 * smoking at work is forbidden since 2006, and an employer may still have a smoking room under
 * strict conditions. The other lessons are the same in both countries. Translations:
 * src/i18n/be/units/house.ts.
 *
 * (Renting a house in Flanders, the huurwaarborg and Wonen in Vlaanderen are in u.papers, l.housing:
 * agent B.)
 */

/** The closing line of the house-rules tips (src/content/work.ts HOUSE_LINE, written out). */
const HOUSE = 'Rules differ per company: ask your supervisor what the rules are where you work.';

const tips = [
  // ⚖️ check: Every worker has the right to a workplace without tobacco smoke; smoking at work is
  // forbidden ⚖️ (wet 22 december 2009, art. 3 and 4; KB 19 januari 2005, in force since 1 January
  // 2006; werk.belgie.be "bescherming tegen tabaksrook op het werk"; search result of 31 October
  // 2026, not opened).
  // ⚖️ check: The only exception: a smoking room, under strict conditions, after advice of the
  // Comité PB ⚖️ (wet 22 december 2009, art. 4 §2; werk.belgie.be; the Hoge Raad advised to stop
  // smoking rooms, advies 279: nakijken of dat al wet is).
  // ⚖️ check: E-cigarettes fall under the same ban at work ⚖️ (KB 28 oktober 2015 over e-sigaretten;
  // forumforthefuture.be "vapen op het werk"; search result; nakijken).
  {
    ...beTip({
      slug: 'smoking',
      lessonId: 'l.smoking',
      emoji: '🚭',
      title: 'Smoking only outside',
      body: `In Belgium, smoking inside a workplace is forbidden by law. This is also true for e-cigarettes (vapes). Some companies have a special smoking room: only there may you smoke inside. Or smoke outside, at the place your employer allows, and usually only in your break. Extra smoke breaks are not a right: agree on them with your supervisor. Never smoke near things that burn easily, like fuel or boxes in a warehouse. ${HOUSE}`,
      phrase: ['Mag ik in mijn pauze buiten roken?', 'May I smoke outside in my break?'],
      situation: 'It is cold and raining. A colleague says: "Just smoke in the storage room, nobody sees it." What do you do?',
      options: [
        'Say no, and smoke outside at the smoking area in your break.',
        'Smoke quickly in the storage room, just this once.',
        'Use your vape inside instead, because that is allowed.',
      ],
      why: 'Smoking inside is against the law and can start a fire. A vape inside is not allowed either. Following the rule keeps everyone safe.',
    }),
    lead: [0, 2, 3],
  },
];

export const be: BeTaal = { nl: 'u.house', tips };
