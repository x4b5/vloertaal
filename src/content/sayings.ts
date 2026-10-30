import type { CultureTip } from './culture';
import type { ChatLine, Dialogue, Lesson, Unit } from './types';

/**
 * Uitdrukkingen en gezegden: Dutch sayings, proverbs and expressions you hear at work. The words
 * say one thing and mean another ("een eitje": a little egg, meaning "very easy"), so each one is
 * taught with both: the picture and the "literally" line show what the words say, the gloss what
 * they mean. The goal is to recognise them, not to use them.
 *
 *  - The unit "Uitdrukkingen en gezegden" (sayingsUnit): two lessons of six sayings, as words of a
 *    normal lesson, after "Omgang met collega's" (src/content/work.ts).
 *  - After that unit, one saying in each of a dozen later lessons, where it fits the topic
 *    (lessonSayings): a card "Zo zeggen ze het" and a question "What does she mean?", only for a
 *    learner who has done the unit's first lesson (src/lib/exercises.ts buildLesson, `sayings`).
 *
 * Every id is also a translation key in src/i18n/sayings/<lang>.ts.
 */

/** A saying in a lesson of another topic: shown after the unit (lessonSayings). */
export interface LessonSaying {
  /** "zg.<slug>". Its texts: `${id}.lit` (literally), `${id}.m` (what it means), `${id}.s`
   *  (the situation), `${id}.o1`–`.o3` (the options, the first is the best) and `${id}.w` (why). */
  id: string;
  lessonId: string;
  /** The picture of what the words say (the literal meaning), as on a word card. */
  emoji: string;
  /** The saying as a colleague says it, read aloud in their voice. */
  nl: string;
  /** What the words say, word for word (English, plain). */
  literal: string;
  /** What it means (English, plain). */
  meaning: string;
  /** "Your supervisor says: "…" What does she mean?": the saying quoted as it is. */
  situation: string;
  options: [best: string, worse: string, worse2: string];
  why: string;
}

const line = (id: string, nl: string, en: string): ChatLine => ({ id, nl, en });
const chat = (prompt: ChatLine, reply: ChatLine): Dialogue => ({ prompt, reply });

/** One saying taught as a word: [id, Dutch, what it means, picture of what it says, literally]. */
type SayingRow = [id: string, nl: string, means: string, emoji: string, literal: string];
type Pair = [nl: string, en: string];

const lesson = (slug: string, title: string, words: SayingRow[], sentences: Pair[], [q, a]: [Pair, Pair]): Lesson => ({
  id: `l.${slug}`,
  title,
  words: words.map(([id, nl, en, emoji, literal]) => ({ id: `w.${id}`, nl, en, emoji, literal })),
  sentences: sentences.map(([nl, en], i) => ({ id: `s.${slug}.${i + 1}`, nl, en })),
  dialogues: [chat(line(`c.${slug}.q`, ...q), line(`c.${slug}.a`, ...a))],
});

/** The unit's two lessons (the course adds its "Mixed review" to the unit itself, src/content/review.ts). */
export const sayingLessons: Lesson[] = [
  lesson(
    'easy',
    'When work goes well',
    [
      ['eitje', 'een eitje', 'very easy', '🥚', 'a little egg'],
      ['alseentrein', 'als een trein', 'very well, without problems', '🚂', 'like a train'],
      ['mouwen', 'de handen uit de mouwen', 'to start working hard', '💪', 'the hands out of the sleeves'],
      ['handje', 'een handje helpen', 'to help a bit', '🤚', 'to help with a little hand'],
      ['knie', 'onder de knie hebben', 'to know how to do it well', '🦵', 'to have it under the knee'],
      ['bakker', 'voor de bakker', 'done, sorted', '🥖', 'for the baker'],
    ],
    [
      ['Dat klusje is een eitje.', 'That little job is very easy.'],
      ['Het werk loopt als een trein.', 'The work is going very well.'],
      ['Kom, we steken de handen uit de mouwen.', 'Come on, let us get to work.'],
    ],
    [['Kun je even een handje helpen?', 'Can you help for a moment?'], ['Ja hoor, ik kom eraan.', 'Yes, sure, I am coming.']],
  ),
  lesson(
    'plain',
    'Saying how it is',
    [
      ['aandebel', 'aan de bel trekken', 'to warn others that something is wrong', '🔔', 'to pull the bell'],
      ['tandvlees', 'op je tandvlees lopen', 'to be very tired', '🦷', 'to walk on your gums'],
      ['deur', 'met de deur in huis vallen', 'to say it straight away, without a long start', '🚪', 'to fall into the house with the door'],
      ['blad', 'geen blad voor de mond nemen', 'to say honestly what you think', '🍃', 'to put no leaf in front of your mouth'],
      ['pijpenstelen', 'het regent pijpenstelen', 'it is raining very hard', '🌧️', 'it is raining pipe stems'],
      ['hart', 'een hart onder de riem', 'kind words that give courage', '❤️', 'a heart under the belt'],
    ],
    [
      ['Trek aan de bel als het niet veilig is.', 'Speak up when it is not safe.'],
      ['Ik loop echt op mijn tandvlees.', 'I am really very tired.'],
      ['Ik val maar met de deur in huis.', 'I will get straight to the point.'],
    ],
    [['Het regent pijpenstelen!', 'It is raining very hard!'], ['Dan neem ik vandaag de bus.', 'Then I will take the bus today.']],
  ),
];

export const sayingsUnit: Unit = {
  id: 'u.sayings',
  title: 'Sayings and expressions',
  titleNl: 'Uitdrukkingen en gezegden',
  emoji: '💬',
  color: '#b5651d',
  lessons: [...sayingLessons],
};

/** The "Zo werkt het hier" tips of the unit's lessons (one per lesson, as everywhere). */
export const sayingsTips: CultureTip[] = [
  {
    id: 'c.easy',
    lessonId: 'l.easy',
    emoji: '💬',
    title: 'Sayings: the words mean something else',
    body: 'Dutch people often use sayings, also at work. The words say one thing, but they mean something else. "Een eitje" is a little egg, but it means: very easy. You do not need to use sayings yourself. You do not understand a saying? Then just ask what it means.',
    phrase: { id: 'c.easy.p', nl: 'Wat bedoel je daarmee?', en: 'What do you mean by that?' },
    situation: { id: 'c.easy.s', en: 'Your colleague looks at the new task and says: "Dat is een eitje!" What does he mean?', nl: 'Dat is een eitje!', ask: 'which' },
    options: [
      { id: 'c.easy.o1', en: 'The task is very easy.', best: true },
      { id: 'c.easy.o2', en: 'He wants to eat an egg.', best: false },
      { id: 'c.easy.o3', en: 'The task is very difficult.', best: false },
    ],
    why: { id: 'c.easy.w', en: '"Een eitje" means: very easy. Your colleague thinks the task will go quickly.' },
  },
  {
    id: 'c.plain',
    lessonId: 'l.plain',
    emoji: '🗣️',
    title: 'Saying it straight',
    body: 'Dutch colleagues often say directly what they think. Sometimes they start with a saying: "Ik neem geen blad voor de mond." That means: I will say honestly what I think. It is not meant to be rude. You may also say honestly what you think, in a calm way.',
    phrase: { id: 'c.plain.p', nl: 'Mag ik eerlijk zeggen wat ik denk?', en: 'May I say honestly what I think?' },
    situation: { id: 'c.plain.s', en: 'Your supervisor says: "Ik neem geen blad voor de mond." What does she mean?', nl: 'Ik neem geen blad voor de mond.', ask: 'which' },
    options: [
      { id: 'c.plain.o1', en: 'She will say honestly what she thinks.', best: true },
      { id: 'c.plain.o2', en: 'She does not want to talk.', best: false },
      { id: 'c.plain.o3', en: 'She is eating a leaf.', best: false },
    ],
    why: { id: 'c.plain.w', en: '"Geen blad voor de mond nemen" means: saying honestly and directly what you think. Many Dutch people find that normal at work.' },
  },
];

/** After the unit: one saying in a later lesson where it fits the topic. */
export const lessonSayings: LessonSaying[] = [
  {
    id: 'zg.zeil',
    lessonId: 'l.health',
    emoji: '👁️⛵',
    nl: 'Hou je een oogje in het zeil?',
    literal: 'Will you keep a little eye on the sail?',
    meaning: 'Will you watch that everything goes well and safely?',
    situation: 'Your supervisor has to leave for a moment. She says: "Hou je een oogje in het zeil?" What does she mean?',
    options: ['Keep watch while she is away.', 'Go and look at a boat.', 'Close your eyes for a moment.'],
    why: '"Een oogje in het zeil houden" means: paying attention that everything goes well. Not sure what to watch? Ask her before she goes.',
  },
  {
    id: 'zg.lekker',
    lessonId: 'l.illness',
    emoji: '🤒',
    nl: 'Ik voel me niet lekker.',
    literal: 'I do not feel tasty.',
    meaning: 'I feel a bit ill.',
    situation: 'A colleague calls you in the morning: "Ik voel me niet lekker." What does he mean?',
    options: ['He feels ill.', 'He did not like his breakfast.', 'He is very happy.'],
    why: '"Lekker" is also about food, but "niet lekker" here means: a bit ill. You can say it yourself when you call in sick.',
  },
  {
    id: 'zg.batterij',
    lessonId: 'l.leave',
    emoji: '🔋',
    nl: 'Ik ga even mijn batterij opladen.',
    literal: 'I am going to charge my battery.',
    meaning: 'I am going to rest, so I have energy again.',
    situation: 'Before her days off your colleague says: "Ik ga even mijn batterij opladen." What does she mean?',
    options: ['She is going to rest.', 'Her phone is empty.', 'She is going to work extra hours.'],
    why: 'In this saying people are like phones: after rest you have energy again. Days off are for that.',
  },
  {
    id: 'zg.pluis',
    lessonId: 'l.warning',
    emoji: '🧶',
    nl: 'Er is iets niet pluis.',
    literal: 'Something is not fluffy.',
    meaning: 'Something is wrong, or not to be trusted.',
    situation: 'You tell a friend about a job: no contract, pay in cash, and you must give your passport. Your friend says: "Er is iets niet pluis." What does he mean?',
    options: ['Something about this job is wrong.', 'The job is soft and nice.', 'You must buy new clothes.'],
    why: '"Niet pluis" means: not right, not to be trusted. No contract and giving away your passport are warning signs.',
  },
  {
    id: 'zg.oefening',
    lessonId: 'l.diploma',
    emoji: '🎨',
    nl: 'Oefening baart kunst.',
    literal: 'Practice gives birth to art.',
    meaning: 'If you practise a lot, you get good at it.',
    situation: 'You find the course hard. Your teacher says: "Oefening baart kunst." What does she mean?',
    options: ['Keep practising, then you will get good at it.', 'You must go to an art lesson.', 'Stop, it is too hard for you.'],
    why: 'This is a proverb: with practice you get better. It is true for learning Dutch too.',
  },
  {
    id: 'zg.zwartwit',
    lessonId: 'l.letters',
    emoji: '📄',
    nl: 'Zorg dat je het zwart op wit hebt.',
    literal: 'Make sure you have it black on white.',
    meaning: 'Make sure you have it on paper, in writing.',
    situation: 'Your boss promises you more pay. Your colleague says: "Zorg dat je het zwart op wit hebt." What does she mean?',
    options: ['Ask for the promise in writing.', 'Ask for black and white paper.', 'Do not ask anything.'],
    why: 'Something in writing is proof. For pay, hours and your contract, ask for it "zwart op wit".',
  },
  {
    id: 'zg.temooi',
    lessonId: 'l.scams',
    emoji: '🎁',
    nl: 'Dat is te mooi om waar te zijn.',
    literal: 'That is too beautiful to be true.',
    meaning: 'It sounds so good that it is probably not true.',
    situation: 'You get a message: "You won 1,000 euros! Send your bank details." Your neighbour says: "Dat is te mooi om waar te zijn." What does she mean?',
    options: ['It is probably a trick.', 'You are lucky: send them quickly.', 'The message is very pretty.'],
    why: 'Offers that sound too good are often scams. Never send your bank details.',
  },
  {
    id: 'zg.haast',
    lessonId: 'l.bike',
    emoji: '🐢',
    nl: 'Haastige spoed is zelden goed.',
    literal: 'Hasty speed is rarely good.',
    meaning: 'When you rush, things often go wrong.',
    situation: 'You are late and you want to cycle through a red light. Your colleague says: "Haastige spoed is zelden goed." What does he mean?',
    options: ['Do not rush: it is not safe.', 'Cycle faster.', 'Take the train next time.'],
    why: 'This proverb means: rushing often goes wrong. Better a few minutes late than an accident.',
  },
  {
    id: 'zg.waagt',
    lessonId: 'l.newjob',
    emoji: '🎯',
    nl: 'Wie niet waagt, die niet wint.',
    literal: 'Who does not dare, does not win.',
    meaning: 'You have to try, or you can never succeed.',
    situation: 'You see a job, but you think your Dutch is not good enough. Your coach says: "Wie niet waagt, die niet wint." What does she mean?',
    options: ['Just apply: you can only get it if you try.', 'Do not apply for this job.', 'You must play a game to win.'],
    why: 'This proverb tells you to try. Applying costs little, and you learn something from every try.',
  },
  {
    id: 'zg.koning',
    lessonId: 'l.checkout',
    emoji: '👑',
    nl: 'De klant is koning.',
    literal: 'The customer is king.',
    meaning: 'The customer is very important: help them well and in a friendly way.',
    situation: 'A customer is a bit unfriendly. Your supervisor says: "De klant is koning." What does he mean?',
    options: ['Stay friendly and help the customer well.', 'The customer is a real king.', 'Ask the customer to leave.'],
    why: 'In a shop the customer comes first, so you stay polite. Is a customer rude or threatening? Then get your supervisor.',
  },
  {
    id: 'zg.tijdgeld',
    lessonId: 'l.hours',
    emoji: '⏰',
    nl: 'Tijd is geld.',
    literal: 'Time is money.',
    meaning: 'Time is valuable: do not waste it.',
    situation: 'Your boss wants the truck loaded quickly. He says: "Tijd is geld." What does he mean?',
    options: ['Work quickly, do not waste time.', 'You get money for coming late.', 'The clock is very expensive.'],
    why: 'This saying means that time is valuable. It is never a reason for unsafe work or hours without pay.',
  },
  {
    id: 'zg.eindjes',
    lessonId: 'l.measures',
    emoji: '🧵',
    nl: 'Het is moeilijk om de eindjes aan elkaar te knopen.',
    literal: 'It is hard to tie the little ends together.',
    meaning: 'It is hard to pay for everything with the money you have.',
    situation: 'A colleague says: "Het is moeilijk om de eindjes aan elkaar te knopen." What does she mean?',
    options: ['She has too little money for everything.', 'She cannot tie her shoes.', 'She is learning to sew.'],
    why: 'Many people know this. Money problems? Ask for help early, for example at your municipality (gemeente).',
  },
];

/** The saying of a lesson, if it has one. */
export function sayingForLesson(lessonId: string): LessonSaying | undefined {
  return lessonSayings.find((s) => s.lessonId === lessonId);
}

/** The lesson after which the sayings show up in other lessons: the unit's first lesson. */
export const SAYINGS_FROM = sayingLessons[0].id;

/**
 * A lesson saying as a "Zo werkt het hier" situation, so the question after its card is the same
 * "What does she mean?" exercise (components/Exercises.tsx SituationExercise): the same cast, the
 * saying said by the character, three options and a why.
 */
export function sayingQuestion(s: LessonSaying): CultureTip {
  return {
    id: s.id,
    lessonId: s.lessonId,
    emoji: s.emoji,
    title: s.nl,
    body: s.meaning,
    phrase: { id: `${s.id}.m`, nl: s.nl, en: s.meaning },
    situation: { id: `${s.id}.s`, en: s.situation, nl: s.nl, ask: 'which' },
    options: s.options.map((en, i) => ({ id: `${s.id}.o${i + 1}`, en, best: i === 0 })),
    why: { id: `${s.id}.w`, en: s.why },
  };
}

/**
 * Every id of this file that needs a help-language translation, besides those counted with the
 * course (the unit's lesson items) and with the work tips (sayingsTips, in workIds).
 */
export const sayingsIds: string[] = [
  ...sayingLessons.flatMap((l) => l.words.map((w) => `${w.id}.lit`)),
  ...lessonSayings.flatMap((s) => [`${s.id}.lit`, `${s.id}.m`, `${s.id}.s`, `${s.id}.o1`, `${s.id}.o2`, `${s.id}.o3`, `${s.id}.w`]),
];
