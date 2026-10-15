import { allWords, findItem } from '../content/curriculum';
import { isMixLesson } from '../content/review';
import { tipForLesson } from '../content/culture';
import type { Unit, Word } from '../content/types';
import { sentencePicture } from './exercises';
import { hasPicture } from './wordPicture';

/**
 * The pocket card ("spiekkaartje"): the five most useful phrases of a unit on one screen, to
 * keep in the phone's gallery or on paper. Sentences come first (a whole sentence is what you
 * say on the floor), then words; short ones and ones with a picture before the rest, and the
 * lessons take turns, so the card covers the whole unit. Each lesson's "Zeg het zo" line (its
 * tip's phrase, the one action line it teaches, recorded too) comes first, after hand picks.
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
  // Whole lines you say, not the bare verb "helpen": the chat's reply fills the fifth place.
  'u.help': ['w.begrijpniet', 's.understand.1', 's.understand.2', 's.understand.3', 'c.understand.a'],
  'u.safety': ['s.danger.3', 's.danger.2', 's.gear.1', 's.danger.1', 'w.stop'],
  // G4 b3: the action lines of the rights units first (what to say, not what a word means).
  'u.contract': ['c.findwork.p', 'c.contract.p', 's.findwork.3', 's.contract.1', 's.contract.2'],
  'u.rights': ['c.rights.p', 'c.rights.a', 'c.health.p', 's.health.3', 's.health.1'],
  'u.exploit': ['c.warning.p', 'c.gethelp.p', 's.gethelp.1', 's.gethelp.2', 's.warning.1'],
  'u.health': ['s.doctor.1', 'c.doctor.p', 's.doctor.3', 's.doctor.2', 's.insurance.2'],
};

/** A tip's phrase longer than this does not fit the card (two lines at most). */
const TIP_MAX_LEN = 40;

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
  // A pick may also be a line of the unit's chats (what you answer a colleague).
  const chatLines = lessons.flatMap((l) => (l.dialogues ?? []).flatMap((d) => [d.prompt, d.reply]));
  // The lessons' "Zeg het zo" lines (culture tips), in lesson order.
  const tipLines = lessons.flatMap((l) => tipForLesson(l.id)?.phrase ?? []);
  for (const id of pocketPicks[unit.id] ?? []) {
    const item = findItem(id) ?? chatLines.find((c) => c.id === id) ?? tipLines.find((c) => c.id === id);
    if (item) push(item);
  }
  for (const t of tipLines) if (t.nl.length <= TIP_MAX_LEN) push(t);
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
