/** A single Dutch word or short fixed phrase, taught with a picture (emoji). */
export interface Word {
  /** Stable id, also used as the key for help-language translations. */
  id: string;
  nl: string;
  en: string;
  emoji: string;
}

/** A full sentence, practised by building it from word tiles. */
export interface Sentence {
  id: string;
  nl: string;
  en: string;
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
