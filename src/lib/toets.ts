import { allDialogues, allLessons, allReplies, allWords, beOnlyTaalLessons } from '../content/curriculum';
import { taalBeActive } from '../content/taalBe';
import { taalBeId } from '../content/taalBe/ids';
import { TOETS_FORM, TOETS_PARTS, TOETS_SPEAK, TOETS_VERSIONS, type ToetsItem, type ToetsPart, type ToetsVersion } from '../content/toets';
import type { ChatLine, Dialogue, Lesson, Sentence, Word } from '../content/types';
import { earnedCertificates } from './certificate';
import { buildTiles } from './exercises';
import { dayKey, daysBetween, type Progress } from './progress';
import { createRng, shuffle } from './random';
import { learnsDutch } from './learner';
import { trackOfId } from './track';
import type { HelpLanguage } from '../i18n/types';
import { typeAsPick, wantsWriting, writingInput } from './writing';
import { TOETS_STATE_VERSION, type ToetsDurf, type ToetsRun, type ToetsScore, type ToetsState } from './toetsState';

/**
 * "Wat ken je al?" (src/content/toets.ts): when it is offered, its questions, what is kept, and how
 * the result is read (docs/toets.md).
 *
 *  - The start (instap, version A): offered on the home of the language track once the first lesson
 *    (1.1) is done, to a learner who has finished fewer than INSTAP_UNTIL_LESSONS lessons; never
 *    required. The very first home shows the first lesson, not a test; after it, the test is a
 *    line under the next lesson (never in its place). "Later" passes it over (it does not come
 *    back by itself; Settings has it always), and so does going on past INSTAP_UNTIL_LESSONS
 *    lessons without it (toetsAfterLesson).
 *  - The end (eind, version B): offered once the start was done or passed over, after END_DAYS days
 *    or END_UNITS more finished topics, whichever comes first. "Later" waits LATER_DAYS days.
 */
export type ToetsMoment = 'instap' | 'eind';

/** The start is offered once this many lessons are done (the first lesson first, then the test) ... */
export const INSTAP_FROM_LESSONS = 1;
/** ... and while fewer lessons than this are done (a learner who is just starting). */
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
  if (!learnsDutch(p)) return null;
  const t = p.toets;
  if (!t?.instap && !t?.skipped) {
    const n = taalLessons(p.completed);
    return n >= INSTAP_FROM_LESSONS && n < INSTAP_UNTIL_LESSONS ? 'instap' : null;
  }
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

/**
 * The test was done: its run is kept (a second end replaces the first), with the answers to
 * "Durf je dit?" (`durf`: on this phone only, like the score; never counted).
 */
export function recordToets(p: Progress, moment: ToetsMoment, tally: ToetsTally, today: Date, unitsDone = taalUnitsDone(p, today), durf?: ToetsDurf): Progress {
  const day = dayKey(today);
  const t: ToetsState = p.toets ?? { v: TOETS_STATE_VERSION };
  const run: ToetsRun = { day, version: versionOf(moment), right: tally.right, of: tally.of, form: TOETS_FORM, mc: tally.mc, wrong: tally.wrong, idk: tally.idk };
  if (durf && Object.keys(durf).length) run.durf = durf;
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

/**
 * A finished lesson took the start past its last day on offer (INSTAP_UNTIL_LESSONS lessons) and
 * the test was neither done nor put off: it was passed over, as with "Later", so the end still
 * comes after END_DAYS days or END_UNITS topics. Since 4 November 2026 the home offers the test
 * as a line under the next lesson (src/components/Toets.tsx ToetsHomeLine), not as a card in its
 * place that had to be answered first, so many learners go on with their lessons instead; without
 * this they would never be offered the end. `after`: the progress with the lesson in it.
 */
export function toetsAfterLesson(before: Progress, after: Progress, today: Date): Progress {
  if (toetsOffer(before, today) !== 'instap' || toetsOffer(after, today) === 'instap') return after;
  if (after.toets?.instap || after.toets?.skipped) return after;
  return toetsLater(after, 'instap', today);
}

/* ---- The questions ---- */

export type ToetsQuestion =
  | { part: 'listen'; kind: 'choice'; sentence: Sentence; options: Sentence[] }
  | { part: 'words'; kind: 'choice'; word: Word; options: Word[] }
  | { part: 'sentences'; kind: 'choice'; dialogue: Dialogue; options: ChatLine[] }
  /** Build the sentence word by word: by ear in Luisteren (heard, not shown), from its meaning in Zinnen. */
  | { part: 'listen' | 'sentences'; kind: 'build'; sentence: Sentence; tiles: string[]; audio: boolean }
  /** Hear the word and write it (or pick it, written, as in the lessons: lib/writing.ts typeAsPick). */
  | { part: 'words'; kind: 'dictate'; word: Word; options: Word[] };

const allSentences = (): Sentence[] => allLessons.flatMap((l) => l.sentences);

/**
 * The test in Belgium (docs/taal-belgie.md): an item said otherwise there plays in its Belgian
 * version ("de loonbrief", "de arbeidsarts": its "be." line), so the test asks what the lessons
 * taught. The items stay the same (their ids: the two moments compare). Elsewhere: as it is.
 */
export function inCountry<T extends { id: string }>(x: T): T {
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

/** The lesson that teaches a sentence: the extra words to build it with come from there, as in the lesson. */
const lessonOf = (id: string): Lesson | undefined => allLessons.find((l) => l.sentences.some((s) => s.id === id));

function question(item: ToetsItem, rng: () => number): ToetsQuestion {
  const need = <T,>(x: T | undefined, id: string): T => { if (!x) throw new Error(`toets: ${id} is not in the course`); return x; };
  const sentence = (id: string) => inCountry(need(allSentences().find((s) => s.id === id), id));
  const word = (id: string) => inCountry(need(allWords.find((w) => w.id === id), id));
  const options = <T,>(find: (id: string) => T) => shuffle([item.answer, ...item.others].map(find), rng);
  if (item.kind === 'build') {
    const s = sentence(item.answer);
    const part = item.part === 'listen' ? 'listen' : 'sentences';
    return { part, kind: 'build', sentence: s, tiles: buildTiles(s, need(lessonOf(item.answer), item.answer), rng), audio: part === 'listen' };
  }
  if (item.kind === 'dictate') return { part: 'words', kind: 'dictate', word: word(item.answer), options: options(word) };
  if (item.part === 'listen') return { part: 'listen', kind: 'choice', sentence: sentence(item.answer), options: options(sentence) };
  if (item.part === 'words') return { part: 'words', kind: 'choice', word: word(item.answer), options: options(word) };
  const dialogue = inCountryChat(need(allDialogues.find((d) => d.prompt.id === item.answer), item.answer));
  const others = item.others.map((id) => inCountry(need(allReplies.find((r) => r.id === id), id)));
  return { part: 'sentences', kind: 'choice', dialogue, options: shuffle([dialogue.reply, ...others], rng) };
}

/** The questions of a version, in its order; the options shuffled (seeded). */
export function toetsQuestions(version: ToetsVersion, seed = 1): ToetsQuestion[] {
  const rng = createRng(seed);
  return TOETS_VERSIONS[version].map((item) => question(item, rng));
}

/** The id of the right answer (a build: the sentence; a dictation: the word). */
export function rightId(q: ToetsQuestion): string {
  if (q.kind === 'build') return q.sentence.id;
  if (q.part === 'words') return q.word.id;
  return q.part === 'listen' ? q.sentence.id : q.dialogue.reply.id;
}

/** The sentence to say at the end (the same at both moments). */
export function speakSentence(): Sentence {
  const s = allSentences().find((x) => x.id === TOETS_SPEAK);
  if (!s) throw new Error(`toets: ${TOETS_SPEAK} is not in the course`);
  return s;
}

/* ---- The score ---- */

/** One answer: right, wrong, or "Ik weet het niet". `pick`: it was a pick of three (a guess can be right). */
export interface ToetsAnswer { result: 'right' | 'wrong' | 'idk'; pick: boolean }

/** What a run counts, per part. */
export interface ToetsTally { right: ToetsScore; of: ToetsScore; mc: ToetsScore; wrong: ToetsScore; idk: ToetsScore }


/** The counts per part. `answers[i]`: question i (none: counted as "Ik weet het niet"). */
export function scoreOf(questions: readonly ToetsQuestion[], answers: readonly (ToetsAnswer | undefined)[]): ToetsTally {
  const zero = (): ToetsScore => ({ listen: 0, words: 0, sentences: 0 });
  const t: ToetsTally = { right: zero(), of: zero(), mc: zero(), wrong: zero(), idk: zero() };
  questions.forEach((q, i) => {
    const a = answers[i] ?? { result: 'idk', pick: q.kind === 'choice' };
    t.of[q.part] += 1;
    if (a.pick) t.mc[q.part] += 1;
    if (a.result === 'right') t.right[q.part] += 1;
    else if (a.result === 'idk') t.idk[q.part] += 1;
    else if (a.pick) t.wrong[q.part] += 1;
  });
  return t;
}


/* ---- Answering ---- */

/** How a question is answered here: a pick of three, or made by the learner (and with the keyboard: Verder). */
export function answerMode(q: ToetsQuestion, lang?: HelpLanguage, writing = wantsWriting()): { pick: boolean; keys: boolean } {
  if (q.kind === 'choice') return { pick: true, keys: false };
  if (q.kind === 'build') return { pick: false, keys: false };
  const pick = typeAsPick({ options: q.options }, lang, writing);
  return { pick, keys: !pick && writingInput(lang) === 'keys' };
}

/**
 * The result of one answer. A pick: the option tapped. Writing: as the lesson grades it (one stray
 * wrong letter forgiven, one typo forgiven). Building: at most one place with a wrong tap (stricter
 * than the lesson's two wrong taps, so a sentence built by guessing is rarely right:
 * tests/toets.test.ts works it out).
 */
export function resultOf(q: ToetsQuestion, a: { correct: boolean; given?: string[]; missed?: string[] }, pick: boolean): ToetsAnswer['result'] {
  if (pick) return a.given?.[0] === rightId(q) ? 'right' : 'wrong';
  if (q.kind === 'build') return (a.missed?.length ?? 0) <= 1 ? 'right' : 'wrong';
  return a.correct ? 'right' : 'wrong';
}

export { durfThenNow, growthOf, knownExact, knownOf, MIN_MORE, TOETS_OPTIONS, type ToetsDurf, type ToetsGrowth } from './toetsState';
export { TOETS_PARTS, type ToetsPart };
