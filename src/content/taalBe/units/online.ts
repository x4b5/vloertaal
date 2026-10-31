import { beTip } from '../helpers';
import type { BeTaal } from '../types';

/**
 * The Belgian version of "Online op je werk" (u.online): the example B unit of docs/taal-belgie.md.
 * Only what differs: one sentence of l.login ("Mijn DigiD …" → itsme) and the tip of l.login. The
 * rest of the unit (l.phish, the words, the chat) is the same in both countries and keeps its ids.
 * Translations: src/i18n/be/units/online.ts (the Dutch ones with DigiD → itsme).
 */

// ⚖️ check: In Belgium you log in to the government (MyMinfin, the mutualiteit, Mijn Burgerprofiel)
// with itsme or with your eID and a card reader; your itsme code is only for you ⚖️ (itsme.be
// gebruiksvoorwaarden; vlaanderen.be "Aanmelden bij de overheid", search result of 31 October 2026).
const lines: BeTaal['lines'] = {
  's.login.3': { nl: 'Mijn itsme-code geef ik aan niemand.', en: 'I give my itsme code to no one.' },
};

const tips = [
  // ⚖️ check: Your itsme (and its code) is only for you: do not give it to anyone, also not to your
  // employer ⚖️ (itsme.be gebruiksvoorwaarden; someone may help you, you log in yourself).
  // ⚖️ check: With itsme, someone can see and change your tax (MyMinfin), benefits and health
  // papers ⚖️ (itsme.be "Waar kan ik itsme gebruiken?"; not opened, search result of 31 October 2026).
  {
    ...beTip({
      slug: 'login',
      lessonId: 'l.login',
      emoji: '🔐',
      title: 'Your login is yours',
      body: 'Your password and your itsme are only for you. Do not give them to anyone, also not to your employer or a colleague. On a shared computer, always log out when you are done. Going away for a moment? Lock your screen. Forgot your password? Ask the IT department (ICT-afdeling) for a new one. Computer rules differ per company: ask the IT department what the rules are where you work.',
      phrase: ['Ik ga even weg. Ik vergrendel mijn scherm.', 'I am going away for a moment. I am locking my screen.'],
      situation: 'Your supervisor asks for your itsme code and password, to arrange your papers quickly. What do you do?',
      options: [
        'Say no, and log in yourself while they help.',
        'Give it this one time, because it is your boss.',
        'Write it on a paper, so they can use it later.',
      ],
      why: 'With your itsme, someone can see and change your tax, benefits and health papers. It is only for you. You can log in yourself and let someone help you.',
    }),
  },
];

export const be: BeTaal = { nl: 'u.online', lines, tips };
