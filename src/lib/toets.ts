import { allDialogues, allLessons, allReplies, allWords, beOnlyTaalLessons } from '../content/curriculum';
import { taalBeActive } from '../content/taalBe';
import { taalBeId } from '../content/taalBe/ids';
import { TOETS_PARTS, TOETS_SPEAK, TOETS_VERSIONS, type ToetsItem, type ToetsPart, type ToetsVersion } from '../content/toets';
import type { ChatLine, Dialogue, Sentence, Word } from '../content/types';
import { earnedCertificates } from './certificate';
import { dayKey, daysBetween, type Progress } from './progress';
import { createRng, shuffle } from './random';
import { trackOf, trackOfId } from './track';
import { TOETS_STATE_VERSION, type ToetsRun, type ToetsScore, type ToetsState } from './toetsState';

/**
 * "Wat ken je al?" (src/content/toets.ts): when it is offered, its questions, and what is kept.
 *
 *  - The start (instap, version A): offered on the home of the language track to a learner who has
 *    finished fewer than INSTAP_UNTIL_LESSONS lessons; never required. "Later" passes it over (it
 *    does not come back by itself; Settings has it always).
 *  - The end (eind, version B): offered once the start was done or passed over, after END_DAYS days
 *    or END_UNITS more finished topics, whichever comes first. "Later" waits LATER_DAYS days.
 */
export type ToetsMoment = 'instap' | 'eind';

/** The start is offered while fewer lessons than this are done (a learner who is just starting). */
export const INSTAP_UNTIL_LESSONS = 3;
/** The end: this many days after the start ... */
export const END_DAYS = 28;
/** ... or this many finished topics after it, whichever comes first. */
export const END_UNITS = 3;
/** "Later" on the end's card: offered again after this many days. */
export const LATER_DAYS = 7;

export const versionOf = (m: ToetsMoment): ToetsVersion => (m === 'instap' ? 'A' : 'B');

/** Lessons of the language track the learner finished. */
function taalLessons(completed: Record<string, unknown>): number {
  return Object.keys(completed).filter((id) => trackOfId(id) === 'taal').length;
}

/** Finished topics of the language track (their certificates). */
export function taalUnitsDone(p: Progress, now = new Date()): number {
  return earnedCertificates(p, now, 'taal').length;
}

function addDays(day: string, n: number): string {
  const [y, m, d] = day.split('-').map(Number);
  return dayKey(new Date(y, m - 1, d + n));
}

/** Which moment the home offers today (null: none). */
export function toetsOffer(p: Progress, today: Date, unitsDone = taalUnitsDone(p, today)): ToetsMoment | null {
  if (trackOf(p) !== 'taal') return null;
  const t = p.toets;
  if (!t?.instap && !t?.skipped) return taalLessons(p.completed) < INSTAP_UNTIL_LESSONS ? 'instap' : null;
  if (t.eind) return null;
  const key = dayKey(today);
  if (t.later && t.later > key) return null;
  const start = t.start ?? t.instap?.day ?? t.skipped;
  const days = start ? daysBetween(start, key) : 0;
  return days >= END_DAYS || unitsDone - (t.unitsAt ?? 0) >= END_UNITS ? 'eind' : null;
}

/** The moment Settings starts: the end once the start was done (or the end is due), else the start. */
export function settingsMoment(p: Progress, today: Date, unitsDone = taalUnitsDone(p, today)): ToetsMoment {
  if (p.toets?.instap || p.toets?.eind) return 'eind';
  return p.toets?.skipped && toetsOffer(p, today, unitsDone) === 'eind' ? 'eind' : 'instap';
}

/** The test was done: its run is kept (a second end replaces the first). */
export function recordToets(p: Progress, moment: ToetsMoment, right: ToetsScore, of: ToetsScore, today: Date, unitsDone = taalUnitsDone(p, today)): Progress {
  const day = dayKey(today);
  const t: ToetsState = p.toets ?? { v: TOETS_STATE_VERSION };
  const run: ToetsRun = { day, version: versionOf(moment), right, of };
  if (moment === 'instap') {
    const { skipped: _, ...rest } = t;
    return { ...p, toets: { ...rest, v: TOETS_STATE_VERSION, instap: run, start: day, unitsAt: unitsDone } };
  }
  const { later: _, ...rest } = t;
  return { ...p, toets: { ...rest, v: TOETS_STATE_VERSION, eind: run, start: t.start ?? day, unitsAt: t.unitsAt ?? unitsDone } };
}

/** "Later" on the card: the start is passed over; the end waits a week. */
export function toetsLater(p: Progress, moment: ToetsMoment, today: Date, unitsDone = taalUnitsDone(p, today)): Progress {
  const day = dayKey(today);
  const t: ToetsState = p.toets ?? { v: TOETS_STATE_VERSION };
  if (moment === 'instap') return { ...p, toets: { ...t, v: TOETS_STATE_VERSION, skipped: day, start: t.start ?? day, unitsAt: t.unitsAt ?? unitsDone } };
  return { ...p, toets: { ...t, v: TOETS_STATE_VERSION, later: addDays(day, LATER_DAYS) } };
}

/* ---- The questions ---- */

export type ToetsQuestion =
  | { part: 'listen'; sentence: Sentence; options: Sentence[] }
  | { part: 'words'; word: Word; options: Word[] }
  | { part: 'sentences'; dialogue: Dialogue; options: ChatLine[] };

const allSentences = (): Sentence[] => allLessons.flatMap((l) => l.sentences);

/**
 * The test in Belgium (docs/taal-belgie.md): an item said otherwise there plays in its Belgian
 * version ("de loonbrief", "de arbeidsarts": its "be." line), so the test asks what the lessons
 * taught. The items stay the same (their ids: the two moments compare). Elsewhere: as it is.
 */
function inCountry<T extends { id: string }>(x: T): T {
  if (!taalBeActive()) return x;
  const id = taalBeId(x.id);
  for (const l of beOnlyTaalLessons()) {
    const hit = [...l.words, ...l.sentences, ...(l.dialogues ?? []).flatMap((d) => [d.prompt, d.reply])].find((y) => y.id === id);
    if (hit) return { ...x, ...hit } as T;
  }
  return x;
}
const inCountryChat = (d: Dialogue): Dialogue => ({ prompt: inCountry(d.prompt), reply: inCountry(d.reply) });

/** A sentence, word or chat line of the course by id (undefined: not in the course). */
export function toetsLine(id: string): { id: string; nl: string; en: string } | undefined {
  return allSentences().find((s) => s.id === id) ?? allWords.find((w) => w.id === id) ?? allReplies.find((r) => r.id === id)
    ?? allDialogues.find((d) => d.prompt.id === id)?.prompt;
}

function question(item: ToetsItem, rng: () => number): ToetsQuestion {
  const need = <T,>(x: T | undefined, id: string): T => { if (!x) throw new Error(`toets: ${id} is not in the course`); return x; };
  if (item.part === 'listen') {
    const find = (id: string) => inCountry(need(allSentences().find((s) => s.id === id), id));
    return { part: 'listen', sentence: find(item.answer), options: shuffle([item.answer, ...item.others].map(find), rng) };
  }
  if (item.part === 'words') {
    const find = (id: string) => inCountry(need(allWords.find((w) => w.id === id), id));
    return { part: 'words', word: find(item.answer), options: shuffle([item.answer, ...item.others].map(find), rng) };
  }
  const dialogue = inCountryChat(need(allDialogues.find((d) => d.prompt.id === item.answer), item.answer));
  const others = item.others.map((id) => inCountry(need(allReplies.find((r) => r.id === id), id)));
  return { part: 'sentences', dialogue, options: shuffle([dialogue.reply, ...others], rng) };
}

/** The questions of a version, in its order; the options shuffled (seeded). */
export function toetsQuestions(version: ToetsVersion, seed = 1): ToetsQuestion[] {
  const rng = createRng(seed);
  return TOETS_VERSIONS[version].map((item) => question(item, rng));
}

/** The id of the right option. */
export function rightId(q: ToetsQuestion): string {
  return q.part === 'listen' ? q.sentence.id : q.part === 'words' ? q.word.id : q.dialogue.reply.id;
}

/** The sentence to say at the end (the same at both moments). */
export function speakSentence(): Sentence {
  const s = allSentences().find((x) => x.id === TOETS_SPEAK);
  if (!s) throw new Error(`toets: ${TOETS_SPEAK} is not in the course`);
  return s;
}

/** Right answers per part, out of how many. `answers[i]`: question i answered right. */
export function scoreOf(questions: readonly ToetsQuestion[], answers: readonly boolean[]): { right: ToetsScore; of: ToetsScore } {
  const zero = (): ToetsScore => ({ listen: 0, words: 0, sentences: 0 });
  const right = zero();
  const of = zero();
  questions.forEach((q, i) => {
    of[q.part] += 1;
    if (answers[i]) right[q.part] += 1;
  });
  return { right, of };
}

export { TOETS_PARTS, type ToetsPart };
