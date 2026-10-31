import { beTip } from '../helpers';
import type { BeTaal } from '../types';

/**
 * The Belgian version of "Veiligheid" (u.safety), a B unit (docs/taal-belgie.md). Only l.accident
 * differs: de BHV'er → de EHBO'er (the first-aider the employer names); the employer reports an
 * accident to its arbeidsongevallenverzekeraar, and a serious one to Toezicht op het Welzijn op het
 * Werk (not the Nederlandse Arbeidsinspectie); the preventieadviseur helps the employer with
 * safety. The other lessons are the same in both countries. Translations:
 * src/i18n/be/units/safety.ts.
 */

const BE_ADVICE = 'General information. For your situation: ask your employer, the union or the justitiehuis (free legal advice).';

// ⚖️ check: Every employer arranges first aid and names first-aiders (EHBO'ers) ⚖️ (codex over het
// welzijn op het werk, boek I titel 5, eerste hulp; Werkregels veilig.ts).
const lines: BeTaal['lines'] = {
  'w.bhver': { nl: 'de EHBO’er', en: 'the company first-aider', picture: 'same' },
};

const tips = [
  // ⚖️ check: The worker tells the employer about every accident; the employer reports it to its
  // arbeidsongevallenverzekeraar (within 8 calendar days), which pays the costs of care ⚖️
  // (Arbeidsongevallenwet 10 april 1971, art. 49 and 62; fedris.be; Werkregels veilig.ts).
  // ⚖️ check: A serious accident: the employer reports it at once to Toezicht op het Welzijn op het
  // Werk ⚖️ (codex boek I titel 6; werk.belgie.be "ernstige ongevallen"; Werkregels veilig.ts).
  // ⚖️ check: Through an interim office: tell the interim office too; the preventieadviseur helps
  // the employer with safety ⚖️ (Welzijnswet art. 33; Werkregels veilig.ts). 112 for emergencies ⚖️
  // (112.be).
  // ⚖️ check: Your employer may not punish you for reporting an accident ⚖️ (Welzijnswet; codex
  // boek I titel 2, art. I.2-23 to I.2-26; Werkregels veilig.ts; nakijken).
  {
    ...beTip({
      slug: 'accident',
      lessonId: 'l.accident',
      emoji: '🩹',
      title: 'Report every accident',
      body: `Tell your supervisor or the EHBO’er (the company first-aider) about every accident, also a small one. Working through an interim office? Tell the interim office too. In an emergency, call 112 first. Your employer reports the accident to its insurance for work accidents (arbeidsongevallenverzekeraar): it pays the costs of care. A serious accident is also reported to Toezicht op het Welzijn op het Werk. ${BE_ADVICE}`,
      phrase: ['Mijn collega is gewond. Waar is de EHBO’er?', 'My colleague is hurt. Where is the first-aider?'],
      situation: 'You hurt your back while lifting. You are afraid to lose your job. What do you do?',
      options: [
        'Report it to your supervisor the same day.',
        'Say nothing, so you do not lose your job.',
        'Wait and see if the pain goes away by itself.',
      ],
      why: 'Report it the same day, also if it seems small: the pain can get worse later. Your employer is not allowed to punish you for reporting it. Work through an interim office? Tell the interim office too.',
    }),
    lead: [0, 1, 2, 3],
  },
];

export const be: BeTaal = { nl: 'u.safety', lines, tips };
