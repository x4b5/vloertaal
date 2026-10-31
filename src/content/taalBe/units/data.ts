import { beTip } from '../helpers';
import type { BeTaal } from '../types';

/**
 * The Belgian version of "Getallen en gegevens" (u.data), a B unit (docs/taal-belgie.md). Only
 * l.details differs: the sentence "Dit formulier is voor de Belastingdienst." → FOD Financiën; the
 * tip: the rijksregisternummer (or bisnummer) instead of the BSN, the loonbrief instead of the
 * payslip, the interim office. l.dates is the same in both countries. The facts are those of the
 * Belgian work rules (src/content/regels/be/units/start.ts). Translations:
 * src/i18n/be/units/data.ts. No expert has checked the ⚖️ notes yet.
 */

// ⚖️ check: The federal tax office is FOD Financiën ⚖️ (fin.belgium.be; docs/werkregels-belgie.md,
// hoofdstuk 4). No recording yet for this line: the phone reads it until the next recording round.
const lines: BeTaal['lines'] = {
  's.details.3': { nl: 'Dit formulier is voor FOD Financiën.', en: 'This form is for the tax office.' },
};

const tips = [
  // ⚖️ check: At the start of a job the employer needs your rijksregisternummer (INSZ, for the social
  // security), or a bisnummer if you are not in the register; it reports you to the RSZ before you
  // start (Dimona) ⚖️ (socialsecurity.be; ksz-bcss.fgov.be "bisnummer"; start.ts).
  // ⚖️ check: A wrong name or number can give problems with your pay, tax and social security ⚖️
  // (socialsecurity.be, Dimona; general advice, no rule).
  beTip({
    slug: 'details',
    lessonId: 'l.details',
    emoji: '🔠',
    title: 'Your details: give them right',
    body: 'At the start of a job, you give your details: your name, address, phone number, date of birth and rijksregisternummer (or bisnummer). Spell your name slowly, letter by letter. Then check your name on your contract and your loonbrief. A mistake in your name or number can give problems with your pay or tax. New address or phone number? Tell your employer.',
    phrase: ['Ik spel het even: A, L, I.', 'Let me spell it: A, L, I.'],
    situation: 'On the phone, the interim office (interimkantoor) writes down your last name. You hear that they write it wrong. What do you do?',
    options: [
      'Spell your name slowly and ask them to read it back.',
      'Say nothing: a small mistake in your name does not matter.',
      'Hang up, and hope they find the mistake later.',
    ],
    why: 'Your name must be the same on your contract, your loonbrief and your identity card or residence card. Then your pay and your tax go right. Spelling and reading back is a quick check.',
  }),
];

export const be: BeTaal = { nl: 'u.data', lines, tips };
