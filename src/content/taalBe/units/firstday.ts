import { beTip } from '../helpers';
import type { BeTaal } from '../types';

/**
 * The Belgian version of "Eerste werkdag" (u.firstday), a B unit (docs/taal-belgie.md):
 *  - l.hello: its words are the same; its tip "Je of u?" is Flemish: at work people say "u" more
 *    often than in the Netherlands, certainly at first, to the boss, a customer or an older person;
 *    colleagues often say "je", and in speech you also hear "ge" and "gij". With this tip the
 *    lesson no longer needs the line "Dit gaat over Nederland" (src/content/taalBe/index.ts
 *    lessonNlOnly: its unit has a Belgian file now);
 *  - l.arrive: de kantine is often "de refter" in Flanders (the same drawing).
 * l.people is the same in both countries. Translations: src/i18n/be/units/firstday.ts.
 * Not yet checked by an expert (a Flemish NT2 teacher should look at the habit of "u").
 */

// ⚖️ check: In Flanders the canteen at work is often called "de refter" ⚖️ (Van Dale "refter",
// Belgisch-Nederlands; taaltelefoon.be; docs/werkregels-belgie.md, woordenlijst).
const lines: BeTaal['lines'] = {
  'w.kantine': { nl: 'de refter', en: 'the canteen (refter)', picture: 'same' },
};

const tips = [
  // ⚖️ check: In Flanders people say "u" more often than in the Netherlands: certainly at first, to
  // the boss, a customer or an older person; between colleagues often "je", in speech also "ge" ⚖️
  // (a habit, no rule; Werkregels start.ts and schrijven.ts; taaltelefoon.be "u en jij"; nakijken
  // door een Vlaamse NT2-docent).
  {
    ...beTip({
      slug: 'je',
      lessonId: 'l.hello',
      emoji: '👋',
      title: '"Je" or "u"?',
      body: 'In Flanders many people say "u" at work, certainly at first: to the boss, a customer or an older person. Colleagues often say "je" to each other, and in speech you also hear "ge". If you are not sure, start with "u" and listen to what others do.',
      phrase: ['Mag ik jij zeggen?', 'May I say "je" to you?'],
      situation: 'Your new supervisor says: "Zeg maar je, hoor!" What does she mean?',
      ask: 'which',
      nl: 'Zeg maar je, hoor!',
      options: [
        'She wants you to say "je" to her.',
        'She asks you to say something.',
        'She wants you to speak more politely.',
      ],
      why: '"Zeg maar je" is friendly: she wants less distance. In Flanders many people start with "u", so wait until someone says this.',
    }),
  },
];

export const be: BeTaal = { nl: 'u.firstday', lines, tips };
