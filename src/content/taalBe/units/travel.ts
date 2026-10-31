import { beTip } from '../helpers';
import type { BeTaal } from '../types';

/**
 * The Belgian version of "Naar je werk" (u.travel), a B unit (docs/taal-belgie.md). l.bike is the
 * same in both countries. l.transit (C in the inventory) is written as B: inchecken, uitchecken and
 * OVpay do not exist in Flanders. There you buy a ticket or a subscription (abonnement) for De Lijn
 * (bus and tram) or the NMBS (train), and the employer pays a part of the train subscription (de
 * woon-werkvergoeding). "de bankpas" is "de bankkaart" in Flanders. Translations:
 * src/i18n/be/units/travel.ts.
 *
 * Sources: delijn.be, belgiantrain.be and werk.belgie.be were not opened in this session (31 October
 * 2026): the notes cite search results of that day. Not yet checked by an expert.
 */

const BE_ADVICE = 'General information. For your situation: ask your employer, the union or the justitiehuis (free legal advice).';

// ⚖️ check: On the bus and tram of De Lijn you cannot pay cash: buy a ticket before you get on (app,
// sms, shop) or pay with your bank card or phone at the machine in the vehicle ⚖️ (De Lijn, no cash
// on board since 1 July 2020, VRT NWS 24 December 2019; contactless payment, telecompaper; search
// results of 31 October 2026; delijn.be not opened).
// ⚖️ check: A subscription (abonnement) is cheaper for daily travel ⚖️ (delijn.be, belgiantrain.be
// "abonnementen"; not opened).
// ⚖️ check: Woon-werkvergoeding: the employer pays a part of the train subscription ⚖️ (cao nr.
// 19/9 of the NAR, changed by cao nr. 19/11 from 1 June 2024; werk.belgie.be "tussenkomst van de
// werkgever in de verplaatsingskosten woon-werkverkeer"; search result).
const lines: BeTaal['lines'] = {
  'w.inchecken': { nl: 'het ticket', en: 'the ticket', emoji: '🎫' },
  'w.uitchecken': { nl: 'het abonnement', en: 'the subscription (season ticket)', emoji: '🗓️' },
  'w.bankpas': { nl: 'de bankkaart', en: 'the bank card', picture: 'same' },
  'w.reiskosten': { nl: 'de woon-werkvergoeding', en: 'the money for your travel to work (from your employer)', picture: false },
  's.transit.1': { nl: 'Ik betaal in de bus met mijn bankkaart.', en: 'I pay on the bus with my bank card.' },
  's.transit.2': { nl: 'Ik heb een abonnement voor de trein.', en: 'I have a train subscription.' },
  'c.transit.a': { nl: 'Nee, met de bus van De Lijn. Die stopt aan de deur.', en: 'No, by De Lijn bus. It stops at the door.' },
};

const tips = [
  // ⚖️ check: De Lijn (bus and tram) and NMBS (train); no cash on the bus of De Lijn ⚖️ (see above).
  // ⚖️ check: For the train the employer must pay a part of the subscription; more can be in a cao
  // of the sector or the company ⚖️ (cao nr. 19/9 and 19/11, NAR; securex.be "de trein"; search
  // results). For bus, tram and bike the rules depend on the sector (paritair comité) ⚖️ (cao nr.
  // 19/9 for other public transport; cao nr. 164 for the bike; nakijken per sector).
  {
    ...beTip({
      slug: 'transit',
      lessonId: 'l.transit',
      emoji: '🎫',
      title: 'Bus, train and travel costs',
      body: `In Flanders you take the bus or tram of De Lijn, and the train of the NMBS. On the bus you cannot pay with cash: buy a ticket in the app, or pay with your bank card in the bus. Do you travel to work every day? Then a subscription (abonnement) is often cheaper. Do you go to work by train? Then your employer pays a part of your train subscription. For the bus, the tram or the bike, it depends on your sector: ask about it. ${BE_ADVICE}`,
      phrase: ['Krijg ik een vergoeding voor mijn reiskosten?', 'Do I get money for my travel costs?'],
      situation: 'You go to work by train every day. A colleague gets money for his train subscription, you do not. What do you do?',
      options: [
        'Ask your employer about the money for the train.',
        'Say nothing, because it is probably not for you.',
        'Wait: only workers with a long contract get it.',
      ],
      why: 'For the train, the employer must pay a part of your subscription. For other ways to travel, it depends on your sector. Asking about it is normal.',
    }),
    // The situation is about money for the train: the sentences on De Lijn and the NMBS, the train.
    lead: [0, 4, 5, 6],
  },
];

export const be: BeTaal = { nl: 'u.travel', lines, tips };
