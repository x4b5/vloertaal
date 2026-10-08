import { teamworkUnit } from './culture';
import { toolsUnit, workUnits } from './work';
import { addMixLessons, isMixLesson, mixLessonFor } from './review';
import type { ChatLine, Dialogue, Lesson, Sentence, Unit, Word } from './types';

/**
 * The course: Dutch for the work floor, explained in English.
 * Every id here is also a translation key in src/i18n/<lang>.ts.
 */
export const units: Unit[] = [
  {
    id: 'u.firstday',
    title: 'First day at work',
    titleNl: 'Eerste werkdag',
    emoji: '👋',
    color: '#ff7a00',
    lessons: [
      {
        id: 'l.hello',
        title: 'Say hello',
        words: [
          { id: 'w.hallo', nl: 'hallo', en: 'hello', emoji: '👋' },
          { id: 'w.goedemorgen', nl: 'goedemorgen', en: 'good morning', emoji: '🌅' },
          { id: 'w.dankjewel', nl: 'dank je wel', en: 'thank you', emoji: '🙏' },
          { id: 'w.ja', nl: 'ja', en: 'yes', emoji: '✅' },
          { id: 'w.nee', nl: 'nee', en: 'no', emoji: '❌' },
          { id: 'w.totmorgen', nl: 'tot morgen', en: 'see you tomorrow', emoji: '👋📅' },
        ],
        sentences: [
          { id: 's.hello.1', nl: 'Hallo, ik ben nieuw.', en: 'Hello, I am new.' },
          { id: 's.hello.2', nl: 'Goedemorgen, ik ben Ali.', en: 'Good morning, I am Ali.' },
          { id: 's.hello.3', nl: 'Dank je wel, tot morgen!', en: 'Thank you, see you tomorrow!' },
        ],
        dialogues: [
          {
            prompt: { id: 'c.hello.q', nl: 'Fijne avond!', en: 'Have a nice evening!' },
            reply: { id: 'c.hello.a', nl: 'Tot morgen!', en: 'See you tomorrow!' },
          },
        ],
      },
      {
        id: 'l.people',
        title: 'People at work',
        words: [
          { id: 'w.collega', nl: 'de collega', en: 'the colleague', emoji: '🧑‍🤝‍🧑' },
          { id: 'w.baas', nl: 'de baas', en: 'the boss', emoji: '👔' },
          { id: 'w.leidinggevende', nl: 'de leidinggevende', en: 'the supervisor', emoji: '📋' },
          { id: 'w.werk', nl: 'het werk', en: 'the work', emoji: '🛠️' },
          { id: 'w.naam', nl: 'de naam', en: 'the name', emoji: '🪪' },
          { id: 'w.nieuw', nl: 'nieuw', en: 'new', emoji: '🆕' },
        ],
        sentences: [
          { id: 's.people.1', nl: 'Mijn naam is Sara.', en: 'My name is Sara.' },
          { id: 's.people.2', nl: 'Wie is de baas?', en: 'Who is the boss?' },
          { id: 's.people.3', nl: 'Ik ben een nieuwe collega.', en: 'I am a new colleague.' },
        ],
        dialogues: [
          {
            prompt: { id: 'c.people.q', nl: 'Hoe heet je?', en: 'What is your name?' },
            reply: { id: 'c.people.a', nl: 'Ik heet Sara.', en: 'My name is Sara.' },
          },
        ],
      },
    ],
  },
  {
    id: 'u.help',
    title: 'Asking for help',
    titleNl: 'Hulp vragen',
    emoji: '🙋',
    color: '#c8955b',
    lessons: [
      {
        id: 'l.understand',
        title: 'I don’t understand',
        words: [
          { id: 'w.begrijpniet', nl: 'ik begrijp het niet', en: 'I don’t understand', emoji: '🤷' },
          { id: 'w.nogeenkeer', nl: 'nog een keer', en: 'one more time', emoji: '🔁' },
          { id: 'w.langzaam', nl: 'langzaam', en: 'slowly', emoji: '🐢' },
          { id: 'w.helpen', nl: 'helpen', en: 'to help', emoji: '🤝' },
          { id: 'w.waar', nl: 'waar', en: 'where', emoji: '📍' },
          { id: 'w.wc', nl: 'de wc', en: 'the toilet', emoji: '🚻' },
        ],
        sentences: [
          { id: 's.understand.1', nl: 'Kunt u dat herhalen?', en: 'Can you repeat that?' },
          { id: 's.understand.2', nl: 'Wilt u langzaam praten?', en: 'Could you speak slowly?' },
          { id: 's.understand.3', nl: 'Waar is de wc?', en: 'Where is the toilet?' },
        ],
        dialogues: [
          {
            prompt: { id: 'c.understand.q', nl: 'Begrijp je het?', en: 'Do you understand?' },
            reply: { id: 'c.understand.a', nl: 'Nee, nog een keer graag.', en: 'No, one more time please.' },
          },
        ],
      },
    ],
  },
  // Smart tools (translation apps, captions, keep learning): unit 03, right after "Asking for help".
  toolsUnit,
  {
    id: 'u.safety',
    title: 'Safety first',
    titleNl: 'Veiligheid',
    emoji: '🦺',
    color: '#ffc414',
    lessons: [
      {
        id: 'l.gear',
        title: 'Protective gear',
        words: [
          { id: 'w.helm', nl: 'de helm', en: 'the helmet', emoji: '⛑️' },
          { id: 'w.handschoenen', nl: 'de handschoenen', en: 'the gloves', emoji: '🧤' },
          { id: 'w.veiligheidsschoenen', nl: 'de veiligheidsschoenen', en: 'the safety shoes', emoji: '🥾' },
          { id: 'w.hesje', nl: 'het hesje', en: 'the safety vest', emoji: '🦺' },
          { id: 'w.bril', nl: 'de veiligheidsbril', en: 'the safety glasses', emoji: '🥽' },
          { id: 'w.dragen', nl: 'dragen', en: 'to wear', emoji: '👕' },
        ],
        sentences: [
          { id: 's.gear.1', nl: 'Draag altijd je helm.', en: 'Always wear your helmet.' },
          { id: 's.gear.2', nl: 'Waar zijn de handschoenen?', en: 'Where are the gloves?' },
          { id: 's.gear.3', nl: 'Ik draag mijn hesje.', en: 'I am wearing my safety vest.' },
        ],
        dialogues: [
          {
            prompt: { id: 'c.gear.q', nl: 'Heb je je helm?', en: 'Do you have your helmet?' },
            reply: { id: 'c.gear.a', nl: 'Ja, ik draag hem.', en: 'Yes, I am wearing it.' },
          },
        ],
      },
      {
        id: 'l.danger',
        title: 'Danger!',
        words: [
          { id: 'w.pasop', nl: 'pas op', en: 'watch out', emoji: '⚠️' },
          { id: 'w.stop', nl: 'stop', en: 'stop', emoji: '🛑' },
          { id: 'w.help', nl: 'help', en: 'help', emoji: '🆘' },
          { id: 'w.brand', nl: 'de brand', en: 'the fire', emoji: '🔥' },
          { id: 'w.nooduitgang', nl: 'de nooduitgang', en: 'the emergency exit', emoji: '🚪' },
          { id: 'w.ongeluk', nl: 'het ongeluk', en: 'the accident', emoji: '🚑' },
        ],
        sentences: [
          { id: 's.danger.1', nl: 'Pas op, de vloer is nat!', en: 'Watch out, the floor is wet!' },
          { id: 's.danger.2', nl: 'Waar is de nooduitgang?', en: 'Where is the emergency exit?' },
          { id: 's.danger.3', nl: 'Er is een ongeluk!', en: 'There is an accident!' },
        ],
        dialogues: [
          {
            prompt: { id: 'c.danger.q', nl: 'Is er een ongeluk?', en: 'Is there an accident?' },
            reply: { id: 'c.danger.a', nl: 'Ja, bel 112!', en: 'Yes, call 112!' },
          },
        ],
      },
    ],
  },
  {
    id: 'u.warehouse',
    title: 'In the warehouse',
    titleNl: 'In het magazijn',
    emoji: '📦',
    color: '#7e5428',
    lessons: [
      {
        id: 'l.things',
        title: 'Warehouse things',
        words: [
          { id: 'w.doos', nl: 'de doos', en: 'the box', emoji: '📦' },
          { id: 'w.pallet', nl: 'de pallet', en: 'the pallet', emoji: '🪵' },
          { id: 'w.heftruck', nl: 'de heftruck', en: 'the forklift', emoji: '🚜' },
          { id: 'w.kar', nl: 'de kar', en: 'the cart', emoji: '🛒' },
          { id: 'w.stelling', nl: 'de stelling', en: 'the shelving rack', emoji: '🗄️' },
          { id: 'w.scanner', nl: 'de scanner', en: 'the scanner', emoji: '📟' },
        ],
        sentences: [
          { id: 's.things.1', nl: 'Zet de doos op de pallet.', en: 'Put the box on the pallet.' },
          { id: 's.things.2', nl: 'Waar is de scanner?', en: 'Where is the scanner?' },
          { id: 's.things.3', nl: 'De heftruck komt eraan.', en: 'The forklift is coming.' },
        ],
        dialogues: [
          {
            prompt: { id: 'c.things.q', nl: 'Waar moet de doos heen?', en: 'Where does the box go?' },
            reply: { id: 'c.things.a', nl: 'Op de pallet.', en: 'On the pallet.' },
          },
        ],
      },
      {
        id: 'l.directions',
        title: 'Directions and actions',
        words: [
          { id: 'w.links', nl: 'links', en: 'left', emoji: '⬅️' },
          { id: 'w.rechts', nl: 'rechts', en: 'right', emoji: '➡️' },
          { id: 'w.boven', nl: 'boven', en: 'at the top', emoji: '⬆️' },
          { id: 'w.beneden', nl: 'beneden', en: 'at the bottom', emoji: '⬇️' },
          { id: 'w.tillen', nl: 'tillen', en: 'to lift', emoji: '🏋️' },
          { id: 'w.pakken', nl: 'pakken', en: 'to take', emoji: '✋' },
        ],
        sentences: [
          { id: 's.directions.1', nl: 'De doos staat links.', en: 'The box is on the left.' },
          { id: 's.directions.2', nl: 'Til met je benen.', en: 'Lift with your legs.' },
          { id: 's.directions.3', nl: 'Ga naar rechts.', en: 'Go to the right.' },
        ],
        dialogues: [
          {
            prompt: { id: 'c.directions.q', nl: 'Links of rechts?', en: 'Left or right?' },
            reply: { id: 'c.directions.a', nl: 'Rechts, bij de stelling.', en: 'Right, by the rack.' },
          },
        ],
      },
    ],
  },
  {
    id: 'u.time',
    title: 'Time and schedule',
    titleNl: 'Tijd en rooster',
    emoji: '⏰',
    color: '#c2412d',
    lessons: [
      {
        id: 'l.shift',
        title: 'My shift',
        words: [
          { id: 'w.dienst', nl: 'de dienst', en: 'the shift', emoji: '🗓️' },
          { id: 'w.pauze', nl: 'de pauze', en: 'the break', emoji: '☕' },
          { id: 'w.beginnen', nl: 'beginnen', en: 'to start', emoji: '▶️' },
          { id: 'w.klaar', nl: 'klaar', en: 'finished', emoji: '🏁' },
          { id: 'w.telaat', nl: 'te laat', en: 'too late', emoji: '⏳' },
          { id: 'w.morgen', nl: 'morgen', en: 'tomorrow', emoji: '📅' },
        ],
        sentences: [
          { id: 's.shift.1', nl: 'Mijn dienst begint om zeven uur.', en: 'My shift starts at seven o’clock.' },
          { id: 's.shift.2', nl: 'Wanneer is de pauze?', en: 'When is the break?' },
          { id: 's.shift.3', nl: 'Sorry, ik ben te laat.', en: 'Sorry, I am too late.' },
        ],
        dialogues: [
          {
            prompt: { id: 'c.shift.q', nl: 'Wil je koffie of thee?', en: 'Do you want coffee or tea?' },
            reply: { id: 'c.shift.a', nl: 'Thee, graag.', en: 'Tea, please.' },
          },
        ],
      },
      {
        id: 'l.sick',
        title: 'Calling in sick',
        words: [
          { id: 'w.ziek', nl: 'ziek', en: 'sick', emoji: '🤒' },
          { id: 'w.bellen', nl: 'bellen', en: 'to call (phone)', emoji: '📞' },
          { id: 'w.dokter', nl: 'de dokter', en: 'the doctor', emoji: '🩺' },
          { id: 'w.pijn', nl: 'de pijn', en: 'the pain', emoji: '🤕' },
          { id: 'w.vandaag', nl: 'vandaag', en: 'today', emoji: '📆' },
          { id: 'w.beter', nl: 'beter', en: 'better', emoji: '💪' },
        ],
        sentences: [
          { id: 's.sick.1', nl: 'Ik ben vandaag ziek.', en: 'I am sick today.' },
          { id: 's.sick.2', nl: 'Ik heb pijn in mijn rug.', en: 'I have pain in my back.' },
          { id: 's.sick.3', nl: 'Ik bel de dokter.', en: 'I am calling the doctor.' },
        ],
        dialogues: [
          {
            prompt: { id: 'c.sick.q', nl: 'Ben je ziek?', en: 'Are you sick?' },
            reply: { id: 'c.sick.a', nl: 'Ja, ik blijf vandaag thuis.', en: 'Yes, I am staying home today.' },
          },
        ],
      },
    ],
  },
  teamworkUnit,
  ...workUnits,
];

/** Emergency lines that are only in the phrasebook, not practised in a lesson. */
export const phrasebookExtras: Sentence[] = [
  { id: 'p.call112', nl: 'Bel 112!', en: 'Call 112!' },
  { id: 'p.hurt', nl: 'Ik ben gewond.', en: 'I am hurt.' },
];

/** Ids of the phrases shown on the always-available "Emergency phrases" page. */
export const phrasebookIds = [
  'w.help',
  'w.pasop',
  's.danger.3',
  'p.call112',
  'p.hurt',
  's.danger.2',
  'w.begrijpniet',
  's.understand.1',
  's.understand.2',
  's.sick.1',
  's.understand.3',
];

// Every unit ends with a "Mixed review" lesson of earlier items (src/content/review.ts).
addMixLessons(units);

export const allLessons: Lesson[] = units.flatMap((u) => u.lessons);
/** The lessons that teach new items; mixed reviews only repeat them. */
export const teachingLessons: Lesson[] = allLessons.filter((l) => !isMixLesson(l));
export const allWords: Word[] = teachingLessons.flatMap((l) => l.words);
export const allDialogues: Dialogue[] = teachingLessons.flatMap((l) => l.dialogues ?? []);
/** Every learner reply; wrong options in a chat exercise come from here. */
export const allReplies: ChatLine[] = allDialogues.map((d) => d.reply);

/**
 * Words learned: every distinct word of the lessons the learner has finished (each finished
 * lesson showed and practised all its words). Counted from progress, so nothing new is stored.
 */
export function learnedWords(completed: Record<string, unknown>): Set<string> {
  return new Set(allLessons.filter((l) => completed[l.id]).flatMap((l) => l.words.map((w) => w.id)));
}

export function findLesson(id: string): { unit: Unit; lesson: Lesson } | undefined {
  for (const unit of units) {
    const lesson = unit.lessons.find((l) => l.id === id);
    if (lesson) return { unit, lesson };
  }
  return undefined;
}

/**
 * A lesson as the learner plays it: a mixed review only brings items of lessons they finished
 * (see mixLessonFor); every other lesson is as written.
 */
export function playLesson(id: string, completed: Record<string, unknown>): { unit: Unit; lesson: Lesson } | undefined {
  const found = findLesson(id);
  if (!found || !isMixLesson(found.lesson)) return found;
  return { unit: found.unit, lesson: mixLessonFor(found.unit, units, completed) };
}

/** Look up any word or sentence by id (used by the phrasebook). */
export function findItem(id: string): { id: string; nl: string; en: string; emoji?: string } | undefined {
  for (const lesson of allLessons) {
    const item = lesson.words.find((w) => w.id === id) ?? lesson.sentences.find((s) => s.id === id);
    if (item) return item;
  }
  return phrasebookExtras.find((p) => p.id === id);
}
