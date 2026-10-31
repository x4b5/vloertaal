import type { AskWho, RuleStep } from './regels/types';

/** A single Dutch word or short fixed phrase, taught with a picture (drawing or emoji) unless abstract. */
export interface Word {
  /** Stable id, also used as the key for help-language translations. */
  id: string;
  nl: string;
  en: string;
  emoji: string;
  /**
   * `false` for an abstract word (a right, a rule, a time, a feeling) that no picture can show
   * without misleading. It is taught with the word, its sound and the gloss only: no picture in
   * the intro, the match cards or the path, and never in a "Which one is …?" picture choice.
   * The emoji stays for data compatibility but is not shown.
   */
  picture?: false;
  /**
   * What the picture looks like, when the emoji can't tell (src/lib/wordPicture.ts lookKey): a
   * family and a variant, "kalender/maandag". Words with different variants may stand side by side
   * in a picture choice; a variant never stands next to the plain family ("kalender": 📆 📅 🗓️).
   */
  look?: string;
  /**
   * A saying (src/content/sayings.ts): what its words say, word for word, in plain English
   * ("een eitje": "a little egg"); `en` is what it means ("very easy"). The word card shows it
   * under the picture, which also shows what the words say. Its help-language text: `${id}.lit`.
   */
  literal?: string;
  /**
   * A word of a sound pair (src/content/sounds.ts: "man" – "maan"): the id of the other word. A
   * choice about this word always offers its partner, so the learner has to hear the difference.
   */
  pair?: string;
}

/** A full sentence, practised by building it from word tiles. */
export interface Sentence {
  id: string;
  nl: string;
  en: string;
  /**
   * Other right word orders of the same words ("Wie is vandaag mijn buddy?" for "Wie is mijn
   * buddy vandaag?"): building any of them is right too (lib/answers.ts sentenceOrders). Only
   * the same tiles in another order; the recording, the meaning and the feedback stay `nl`'s.
   */
  alt?: string[];
}

/** One spoken line in a workplace chat; the id is also its translation key. */
export interface ChatLine {
  id: string;
  nl: string;
  en: string;
}

/** A tiny two-line workplace dialogue: a colleague says something, the learner answers. */
export interface Dialogue {
  prompt: ChatLine;
  reply: ChatLine;
}

export interface Lesson {
  id: string;
  /** English title; translated via the help-language file under the same id. */
  title: string;
  words: Word[];
  sentences: Sentence[];
  /** Short chats for the "Complete the conversation" exercise. */
  dialogues?: Dialogue[];
  /** A review of words met before (today's review): no intro cards, every word is asked. */
  repeat?: true;
  /** Today's review: the card box of each word (lib/spaced.ts); box 2 and up get harder questions. */
  boxes?: Record<string, number>;
  /** Today's review: the first this many sentences are sentence cards (lib/spaced.ts), all built. */
  cardSentences?: number;
  /** Today's review: a spoken-sentence card, said again in its "Zeg het" (lib/spaced.ts). */
  say?: Sentence;
  /**
   * A review (today's review, a unit's mixed review): the lessons whose "Zo werkt het hier" tip
   * can come back, in order of preference; the first one with a tip gives the situation question
   * (lib/exercises.ts). The order turns from day to day, so another tip comes back each time.
   */
  tipFrom?: string[];
  /**
   * The work-rules track (src/content/regels): the lesson's steps. Such a lesson has no words and
   * no sentences (`words: []`, `sentences: []`); see isPlayable in src/content/courses.ts.
   */
  steps?: RuleStep[];
  /** The work-rules track: what the lesson is for, its "Onthoud" line and who can help. */
  rule?: {
    goal: string; remember: string; help?: AskWho[]; icon?: string;
    /** A line at the top of the lesson: a Dutch lesson in the Belgian course, where the Belgian
     *  one is not written yet ("Deze les gaat nog over Nederland.", src/content/regels/be). */
    note?: string;
  };
}

export interface Unit {
  id: string;
  title: string;
  /** Dutch name of the unit, shown next to the English title. */
  titleNl: string;
  emoji: string;
  /** Accent colour for the unit's path nodes. */
  color: string;
  lessons: Lesson[];
}
