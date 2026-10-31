import { beTip } from '../helpers';
import type { BeTaal } from '../types';

/**
 * The Belgian version of "Uitdrukkingen en gezegden" (u.sayings), a B unit (docs/taal-belgie.md).
 * The sayings are the same; only the tip of l.plain differs: "Dutch colleagues often say directly
 * what they think" → Flemish colleagues are often less direct, so "Ik neem geen blad voor de mond"
 * warns you that a direct opinion comes. l.easy is the same in both countries. Translations:
 * src/i18n/be/units/sayings.ts. Not yet checked by an expert.
 */

const tips = [
  // ⚖️ check: Flemish people are often less direct than Dutch people; "geen blad voor de mond nemen"
  // is known and used in Flanders too ⚖️ (a habit, no rule; Van Dale "blad"; Werkregels samen.ts;
  // nakijken door een Vlaamse NT2-docent).
  {
    ...beTip({
      slug: 'plain',
      lessonId: 'l.plain',
      emoji: '🗣️',
      title: 'Saying it straight',
      body: 'Flemish colleagues often say carefully what they think. Sometimes they start with a saying: "Ik neem geen blad voor de mond." That means: I will say honestly what I think. Then a direct opinion comes, but it is not meant to be rude. You may also say honestly what you think, in a calm way.',
      phrase: ['Mag ik eerlijk zeggen wat ik denk?', 'May I say honestly what I think?'],
      situation: 'Your supervisor says: "Ik neem geen blad voor de mond." What does she mean?',
      ask: 'which',
      nl: 'Ik neem geen blad voor de mond.',
      options: [
        'She will say honestly what she thinks.',
        'She does not want to talk about it.',
        'She is eating a leaf.',
      ],
      why: '"Geen blad voor de mond nemen" means: saying honestly and directly what you think. Someone who says it warns you: now comes a direct opinion.',
    }),
  },
];

export const be: BeTaal = { nl: 'u.sayings', tips };
