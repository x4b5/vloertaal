import { beTip } from '../helpers';
import type { BeTaal } from '../types';

/**
 * The Belgian version of "Tijd en rooster" (u.time), a B unit (docs/taal-belgie.md). The words are
 * the same; only the tip of l.sick differs: you warn your employer at once, and you often need a
 * doctor's note (ziektebriefje), sometimes from the first day (the arbeidsreglement says it).
 * l.shift and its tip are the same in both countries. Translations: src/i18n/be/units/time.ts.
 * The facts are those of Werkregels ziek.ts (Belgium).
 */

const BE_ADVICE = 'General information. For your situation: ask your employer, the union or the justitiehuis (free legal advice).';

const tips = [
  // ⚖️ check: The worker warns the employer at once when sick ⚖️ (Arbeidsovereenkomstenwet 3 juli
  // 1978, art. 31 §2; Werkregels ziek.ts).
  // ⚖️ check: A doctor's note (ziektebriefje) is needed when the employer asks for it or the
  // arbeidsreglement or a cao says so, sometimes from the first day; a few times a year 1 day can
  // be without a note (the rules changed on 1 January 2026) ⚖️ (art. 31 §2; securex.be "ziektebriefje
  // strengere regels vanaf 2026"; Werkregels ziek.ts; no number in the text for that reason).
  // ⚖️ check: The note for the employer says no illness; you do not have to say what you have ⚖️
  // (art. 31 §2 and §3; beroepsgeheim, Strafwetboek art. 458).
  // ⚖️ check: Through an interim office: tell the interim office too ⚖️ (Federgon; Werkregels ziek.ts).
  {
    ...beTip({
      slug: 'sick',
      lessonId: 'l.sick',
      emoji: '📞',
      title: 'How to call in sick',
      body: `Call your supervisor yourself, before your shift starts, unless your company has another rule. Working through an interim office? Tell the interim office too. You do not have to say what illness you have. You often need a doctor’s note (ziektebriefje), sometimes from the first day: the work rules (arbeidsreglement) say when. ${BE_ADVICE}`,
      phrase: ['Ik ben ziek. Ik kan vandaag niet komen werken.', 'I am sick. I cannot come to work today.'],
      situation: 'You wake up with a fever. Your shift starts at 7:00. What do you do?',
      options: [
        'Call your supervisor before 7:00.',
        'Ask a colleague to tell the boss later.',
        'Stay home and call tomorrow.',
      ],
      why: 'Calling in sick yourself and on time is the rule in most workplaces. Your employer may ask how long it will take, but not what illness it is. Ask if you need a doctor’s note.',
    }),
  },
];

export const be: BeTaal = { nl: 'u.time', tips };
