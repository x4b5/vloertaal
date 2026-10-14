import { allWords, findItem } from '../content/curriculum';
import { isMixLesson } from '../content/review';
import type { Unit, Word } from '../content/types';
import { sentencePicture } from './exercises';
import { hasPicture } from './wordPicture';

/**
 * The pocket card ("spiekkaartje"): the five most useful phrases of a unit on one screen, to
 * keep in the phone's gallery or on paper. Sentences come first (a whole sentence is what you
 * say on the floor), then words; short ones and ones with a picture before the rest, and the
 * lessons take turns, so the card covers the whole unit.
 */
export interface PocketPhrase {
  id: string;
  nl: string;
  en: string;
  /** The word whose picture goes with it (the word itself, or the pictured word in a sentence). */
  picture?: Pick<Word, 'id' | 'emoji'>;
}

export const POCKET_SIZE = 5;
/** Longer than this does not fit one or two lines of the card. */
const MAX_LEN = 34;

/** Hand-picked where the automatic pick would miss the line you need most. */
export const pocketPicks: Record<string, string[]> = {
  'u.help': ['w.begrijpniet', 's.understand.1', 's.understand.2', 's.understand.3', 'w.helpen'],
  'u.safety': ['s.danger.3', 's.danger.2', 's.gear.1', 's.danger.1', 'w.stop'],
};

function pictureFor(item: { id: string; nl: string; en: string }, unitWords: Word[]): PocketPhrase['picture'] {
  const word = unitWords.find((w) => w.id === item.id) ?? allWords.find((w) => w.id === item.id);
  if (word) return hasPicture(word) ? word : undefined;
  return sentencePicture(item, unitWords) ?? sentencePicture(item);
}

/** Takes items from each list in turn (the first of each list first). */
function roundRobin<T>(lists: T[][]): T[] {
  const out: T[] = [];
  for (let i = 0; lists.some((l) => i < l.length); i++) for (const l of lists) if (i < l.length) out.push(l[i]);
  return out;
}

export function pocketPhrases(unit: Unit, n = POCKET_SIZE): PocketPhrase[] {
  const lessons = unit.lessons.filter((l) => !isMixLesson(l));
  const unitWords = lessons.flatMap((l) => l.words);
  const out: PocketPhrase[] = [];
  const seen = new Set<string>();
  const push = (item: { id: string; nl: string; en: string }) => {
    const key = item.nl.trim().toLowerCase();
    if (out.length >= n || seen.has(key)) return;
    seen.add(key);
    out.push({ id: item.id, nl: item.nl, en: item.en, picture: pictureFor(item, unitWords) });
  };
  for (const id of pocketPicks[unit.id] ?? []) {
    const item = findItem(id);
    if (item) push(item);
  }
  const sentences = roundRobin(lessons.map((l) => l.sentences));
  const words = roundRobin(lessons.map((l) => l.words));
  const short = <T extends { nl: string }>(x: T) => x.nl.length <= MAX_LEN;
  // Sentences that fit and have a picture, then sentences that fit, then the words with a
  // picture, then anything left (a unit of long sentences still fills its card).
  const order = [
    ...sentences.filter((s) => short(s) && pictureFor(s, unitWords)),
    ...sentences.filter(short),
    ...words.filter((w) => short(w) && hasPicture(w)),
    ...words.filter(short),
    ...sentences,
    ...words,
  ];
  for (const item of order) push(item);
  return out;
}
