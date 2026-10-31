import { beTip } from '../helpers';
import type { BeTaal } from '../types';

/**
 * The Belgian version of "Samenwerken" (u.teamwork), a B unit (docs/taal-belgie.md). The words are
 * the same; two tips speak of the Netherlands:
 *  - l.speakup: "Dutch colleagues prefer to hear it directly": in Flanders people often say it more
 *    carefully, at a quiet moment;
 *  - l.task: "In the Netherlands a supervisor …": the same advice, without the country.
 * l.agree is the same in both countries. Translations: src/i18n/be/units/teamwork.ts.
 * Not yet checked by an expert.
 */

const tips = [
  // ⚖️ check: In Flanders people often say what bothers them carefully and at a quiet moment, more
  // than in the Netherlands; saying it calmly is respected ⚖️ (a habit, no rule; Werkregels
  // samen.ts; nakijken door een Vlaamse NT2-docent).
  {
    ...beTip({
      slug: 'speakup',
      lessonId: 'l.speakup',
      emoji: '🗣️',
      title: 'Say what bothers you',
      body: 'Here it is normal and respected to say calmly when something bothers you. Talk to the person first, at a quiet moment. Use "ik" sentences: "Ik vind het niet fijn dat ...". If it does not help, talk to your supervisor.',
      phrase: ['Ik zit ergens mee. Kunnen we even praten?', 'Something is bothering me. Can we talk for a moment?'],
      situation: 'A colleague always leaves the heavy work for you. It bothers you. What do you do?',
      options: [
        'Tell the colleague what bothers you.',
        'Keep quiet and get more and more angry.',
        'Complain about him to all other colleagues.',
      ],
      why: 'In Flanders people often say it carefully, at a quiet moment, but they do say it. Saying it early and calmly keeps the relationship good.',
    }),
  },
  // ⚖️ check: A supervisor often gives a task in a few words and expects you to say when it is done;
  // asking again is normal ⚖️ (a habit, the same in Flanders; Werkregels samen.ts).
  {
    ...beTip({
      slug: 'task',
      lessonId: 'l.task',
      emoji: '✅',
      title: 'Say when it is done, ask when it is not clear',
      body: 'A supervisor often gives a task in a few words, and expects you to say when it is done. Saying "ja" when you did not understand often leads to mistakes. Asking again, or asking to be shown, is normal here and not rude.',
      phrase: ['Klaar! Wat moet ik nu doen?', 'Done! What must I do now?'],
      situation: 'Your supervisor explains a task very fast. You understood only half. What do you do?',
      options: [
        'Ask to see it one more time.',
        'Start with the half you understood.',
        'Wait until a colleague does it.',
      ],
      why: 'Asking again is normal and takes a minute. Fixing a mistake takes much longer. Most supervisors would rather show it twice.',
    }),
  },
];

export const be: BeTaal = { nl: 'u.teamwork', tips };
