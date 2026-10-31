import { beTip } from '../helpers';
import type { BeTaal } from '../types';

/**
 * The Belgian version of "Slimme hulpmiddelen" (u.tools), a B unit (docs/taal-belgie.md). Only
 * l.keeplearning differs: the Taalhuis of the Dutch libraries → "de praattafel" (a group where you
 * practise speaking, in many Flemish libraries); a Dutch course through the Agentschap Integratie
 * en Inburgering (in Brussels: the Huis van het Nederlands); NOS Jeugdjournaal → Karrewiet (VRT).
 * l.translate and l.understood are the same in both countries. Translations:
 * src/i18n/be/units/tools.ts.
 *
 * Note: outside Brussels the Huizen van het Nederlands are now part of the Agentschap Integratie en
 * Inburgering; only Brussels keeps the name (search results of 31 October 2026, see below).
 */

// ⚖️ check: Many Flemish libraries and organisations have a praattafel (conversation group) to
// practise Dutch ⚖️ (integratie-inburgering.be "oefenkansen Nederlands"; bibliotheek websites;
// not opened, search result of 31 October 2026; nakijken of "praattafel" het gangbare woord is).
const lines: BeTaal['lines'] = {
  'w.taalhuis': { nl: 'de praattafel', en: 'the praattafel (a group where you practise speaking Dutch)', emoji: '🗨️', picture: false },
};

const tips = [
  // ⚖️ check: The Agentschap Integratie en Inburgering helps you find a Dutch course (intake); in
  // Brussels the Huis van het Nederlands Brussel ⚖️ (integratie-inburgering.be; vdab.be "Nederlands
  // leren als anderstalige"; vlaanderen.be "finding the right Dutch course"; search results of 31
  // October 2026, not opened).
  // ⚖️ check: Karrewiet = the daily news for children of the VRT ⚖️ (vrt.be/karrewiet).
  {
    ...beTip({
      slug: 'keeplearning',
      lessonId: 'l.keeplearning',
      emoji: '📚',
      title: 'Keep learning, a little every day',
      body: 'A few minutes every day helps more than one long hour a week. Save new words from work in a notes app on your phone. Listen to easy Dutch, for example Karrewiet (news for children, VRT) or a podcast in slow Dutch. The Agentschap Integratie en Inburgering helps you find a Dutch course, and many libraries have a praattafel: a group where you practise speaking. Colleagues often switch to English to help you. Ask them kindly to speak Dutch with you: most people like to help.',
      phrase: ['Praat maar Nederlands met mij, dan leer ik het sneller.', 'Just speak Dutch with me, then I learn it faster.'],
      situation: 'Your colleagues always switch to English when they talk to you. You want to learn Dutch. What do you do?',
      options: [
        'Thank them, and ask them to speak Dutch with you.',
        'Say nothing. Dutch will come by itself.',
        'Answer in English too, because that is more polite.',
      ],
      why: 'Colleagues often switch to English to be kind. When you ask for Dutch, most of them are happy to help. Speaking a little every day at work is one of the fastest ways to learn.',
    }),
    lead: [0, 4, 5],
  },
];

export const be: BeTaal = { nl: 'u.tools', lines, tips };
