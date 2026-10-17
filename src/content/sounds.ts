import type { ChatLine, Dialogue, Lesson, Unit, Word } from './types';

/**
 * Klanken: Dutch sounds that many learners mix up, practised with word pairs that differ in one
 * sound only (minimal pairs): man – maan, muur – moer, pak – bak. Every word has a picture, so the
 * difference is heard, seen and said:
 *  - "What do you hear?" and the picture choice always offer the word's partner (`pair`, see
 *    src/lib/exercises.ts options), so the learner has to hear the difference;
 *  - writing what you hear and "record and compare" (src/lib/speaking.ts) do the rest.
 *
 * In the path after "Tijd en rooster" (Safety and the learner's own sector stay early); on All
 * topics under the theme Starten: pronunciation is basic.
 * Every id is also a translation key in src/i18n/sounds/<lang>.ts.
 */

const line = (id: string, nl: string, en: string): ChatLine => ({ id, nl, en });
const chat = (prompt: ChatLine, reply: ChatLine): Dialogue => ({ prompt, reply });

/** One pair: [slug, Dutch, English, emoji] for each of the two words. */
type PairRow = [[slug: string, nl: string, en: string, emoji: string], [slug: string, nl: string, en: string, emoji: string]];
type Pair = [nl: string, en: string];

const wordId = (slug: string) => `w.kl.${slug}`;

const lesson = (slug: string, title: string, pairs: PairRow[], sentences: Pair[], [q, a]: [Pair, Pair]): Lesson => ({
  id: `l.${slug}`,
  title,
  // Each word knows its partner: the other word of its pair.
  words: pairs.flatMap(([a, b]): Word[] => [
    { id: wordId(a[0]), nl: a[1], en: a[2], emoji: a[3], pair: wordId(b[0]) },
    { id: wordId(b[0]), nl: b[1], en: b[2], emoji: b[3], pair: wordId(a[0]) },
  ]),
  sentences: sentences.map(([nl, en], i) => ({ id: `s.${slug}.${i + 1}`, nl, en })),
  dialogues: [chat(line(`c.${slug}.q`, ...q), line(`c.${slug}.a`, ...a))],
});

/** The unit's three lessons (the course adds its "Mixed review" to the unit itself, src/content/review.ts). */
export const soundLessons: Lesson[] = [
  lesson(
    'shortlong',
    // man/maan and zak/zaak differ in length; ui/ei is another vowel (critic: not "short or long").
    'a or aa, ui or ei',
    [
      [['man', 'de man', 'the man', '🧔'], ['maan', 'de maan', 'the moon', '🌙']],
      [['zak', 'de zak', 'the bag', '🛍️'], ['zaak', 'de zaak', 'the shop', '🏬']],
      [['ui', 'de ui', 'the onion', '🧅'], ['ei', 'het ei', 'the egg', '🥚']],
    ],
    [
      ['De man kijkt naar de maan.', 'The man looks at the moon.'],
      ['Doe de uien in de zak.', 'Put the onions in the bag.'],
      ['De zaak is om negen uur open.', 'The shop opens at nine o\'clock.'],
    ],
    [['Wil je een ei?', 'Would you like an egg?'], ['Nee, dank je. Ik heb al gegeten.', 'No, thank you. I have already eaten.']],
  ),
  lesson(
    'roundsounds',
    'uu, oe and eu',
    [
      [['muur', 'de muur', 'the wall', '🧱'], ['moer', 'de moer', 'the nut (for a bolt)', '🔩']],
      [['buur', 'de buur', 'the neighbour', '🏡'], ['boer', 'de boer', 'the farmer', '🧑‍🌾']],
      [['deur', 'de deur', 'the door', '🚪'], ['duur', 'duur', 'expensive', '💸']],
    ],
    [
      ['Draai de moer goed vast.', 'Tighten the nut well.'],
      ['Doe de deur dicht, alsjeblieft.', 'Close the door, please.'],
      ['Die jas is te duur.', 'That coat is too expensive.'],
    ],
    [['Is de deur open?', 'Is the door open?'], ['Nee, hij is dicht.', 'No, it is closed.']],
  ),
  lesson(
    'pbgk',
    'p or b, g or k',
    [
      [['pak', 'het pak', 'the suit', '🤵'], ['bak', 'de bak', 'the crate, the bin', '🧺']],
      [['goud', 'het goud', 'the gold', '🥇'], ['koud', 'koud', 'cold', '🥶']],
      [['hoed', 'de hoed', 'the hat', '🎩'], ['goed', 'goed', 'good', '👍']],
    ],
    [
      ['Gooi het afval in de bak.', 'Throw the rubbish in the bin.'],
      ['Het is koud in de hal.', 'It is cold in the hall.'],
      ['Je doet het goed!', 'You are doing it well!'],
    ],
    [['Hoe gaat het?', 'How are you?'], ['Goed, maar ik heb het koud.', 'Good, but I am cold.']],
  ),
];

export const soundsUnit: Unit = {
  id: 'u.sounds',
  title: 'Dutch sounds',
  titleNl: 'Klanken',
  emoji: '👂',
  color: '#3d7ea6',
  lessons: [...soundLessons],
};
