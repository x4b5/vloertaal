import { beTip } from '../helpers';
import type { BeTaal } from '../types';

/**
 * The Belgian version of "In het magazijn" (u.warehouse), a B unit (docs/taal-belgie.md). The words
 * are the same; only the tip of l.things differs: Flemish colleagues often say things less directly
 * than Dutch ones ("Zou je ...?", "Misschien kun je ..."), and that is often still a clear request.
 * l.directions is the same in both countries. Translations: src/i18n/be/units/warehouse.ts.
 * Not yet checked by an expert.
 */

const tips = [
  // ⚖️ check: Flemish colleagues often put a request or a correction more carefully than Dutch
  // colleagues, with a question or "misschien"; it is often still a clear request ⚖️ (a habit, no
  // rule; Werkregels samen.ts; intercultural guides of the Agentschap Integratie en Inburgering;
  // nakijken door een Vlaamse NT2-docent).
  {
    ...beTip({
      slug: 'direct',
      lessonId: 'l.things',
      emoji: '💬',
      title: 'Careful words, a clear message',
      body: 'Flemish colleagues often say things carefully, like "Zou je die doos daar willen zetten?" That is often still a clear request: do it. Some colleagues are very direct, like "Dat is fout". They usually do not mean it rudely. You may also say what you think, as long as you stay friendly.',
      phrase: ['Oké, hoe moet het dan?', 'Okay, how should it be done then?'],
      situation: 'A colleague says: "Nee, dat is fout. Die doos moet daar." What do you do?',
      nl: 'Nee, dat is fout. Die doos moet daar.',
      options: [
        'Move the box and ask how to do it.',
        'Say sorry many times: your colleague is angry.',
        'Say nothing and leave the box where it is.',
      ],
      why: 'Direct feedback is about the work, not about you. Asking "hoe moet het dan?" shows you want to learn.',
    }),
  },
];

export const be: BeTaal = { nl: 'u.warehouse', tips };
