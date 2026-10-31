import { beTip } from '../helpers';
import type { BeTaal } from '../types';

/**
 * The Belgian version of "In de kas" (u.kas), a B unit (docs/taal-belgie.md). The words are the
 * same; only the tip of l.harvest differs: the minimum wage per hour is the barema of paritair
 * comité 145 (tuinbouw), many greenhouse workers are seasonal workers (gelegenheidsarbeiders, per
 * day), and "rijksoverheid.nl" and the payslip become the loonbrief. l.greensafe differs only in
 * its closing line (swapped by itself). Translations: src/i18n/be/units/kas.ts.
 * The facts are those of Werkregels sector-kas.ts (Belgium).
 */

const BE_ABUSE = 'General information. For your situation: ask the union, the justitiehuis (free legal advice) or Payoke.';

const tips = [
  // ⚖️ check: Horticulture (greenhouses) falls under paritair comité 145, which sets the minimum
  // wages (barema's) ⚖️ (werk.belgie.be, PC 145; Werkregels sector-kas.ts).
  // ⚖️ check: Also with piece rate you must get at least the barema of your paritair comité for
  // every hour ⚖️ (cao's PC 145; Loonbeschermingswet 12 april 1965; Werkregels sector-kas.ts —
  // nakijken hoe PC 145 stukloon regelt).
  // ⚖️ check: A gelegenheidsarbeider (seasonal worker) in horticulture works per day, for a limited
  // number of days a year, with a Dimona for every day ⚖️ (securex.be "gelegenheidsarbeider in de
  // tuinbouwsector"; socialsecurity.be; Werkregels sector-kas.ts; no number in the text).
  {
    ...beTip({
      slug: 'harvest',
      lessonId: 'l.harvest',
      emoji: '⏱️',
      title: 'Tempo and piece rate',
      body: `In a greenhouse you often work at a set pace (tempo). Some employers pay per crate, per row or per kilo: piece rate (stukloon). Even with piece rate, you must earn at least the minimum wage of your sector for every hour: for greenhouses that is paritair comité 145. Many people work there as seasonal workers (gelegenheidsarbeiders): per day, for a limited number of days a year. Write down your hours and your crates every day, and compare them with your loonbrief. Working fast is good, but working safely comes first. ${BE_ABUSE}`,
      phrase: ['Hoeveel kratten heb ik vandaag gedaan?', 'How many crates did I do today?'],
      situation: 'You are paid per crate. At the end of the week, your pay is much lower than the minimum wage for the hours you worked. What do you do?',
      options: [
        'Show your employer your own list of hours and crates.',
        'Say nothing and work faster next week, so you earn more.',
        'Accept it: with piece rate, a low pay is normal.',
      ],
      why: 'With piece rate you must still get at least the minimum wage for every hour you worked. Your own list of hours and crates helps you show what you did. If it is not fixed, ask for help.',
    }),
    lead: [1, 2, 4],
  },
];

export const be: BeTaal = { nl: 'u.kas', tips };
