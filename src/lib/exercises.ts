import { allCountriesTaalUnits, allDialogues, allLessons, allReplies, allWords, teachingLessons } from '../content/curriculum';
import { isMixLesson } from '../content/review';
import { coursePlan, mainLessons, type SectorChoice } from '../content/sectors';
import { courseUnits, unitOfLesson } from '../content/courses';
import { trackOfId, type Track } from './track';
import { type CultureTip, tipForLesson } from '../content/culture';
import { modelQuestion } from '../content/regels/zegHet';
import type { ChatLine, Dialogue, Lesson, Sentence, Word } from '../content/types';
import type { RuleStep } from '../content/regels/types';
import { tokenize } from './answers';
import { type Access, lessonAllowed } from './access';
import { createRng, sample, shuffle } from './random';
import { hasPicture, looksAlike, samePicture } from './wordPicture';
import { type SpeakItem, withSpeaking } from './speaking';
import { nearSynonyms } from '../content/synonyms';
import { DAILY_ID, MADE_FROM_BOX } from './spaced';
import { typable } from './typable';
import { regionTaalLessons } from '../content/regio';
import { type LessonSaying, sayingForLesson, sayingQuestion } from '../content/sayings';

export type Exercise =
  | { kind: 'intro'; word: Word }
  | { kind: 'meaning'; word: Word; options: Word[] }
  /** Pick the Dutch word for a meaning; from picture cards, or text cards when `textOnly`. */
  | { kind: 'dutch'; word: Word; options: Word[]; textOnly?: boolean }
  | { kind: 'listen'; word: Word; options: Word[] }
  | { kind: 'match'; words: Word[] }
  /** `salt` (a retry) changes the words offered step by step (buildSteps). `audio`: listen and
   *  build (later units): the meaning is hidden until the end, the sentence is heard instead. */
  | { kind: 'build'; sentence: Sentence; tiles: string[]; salt?: number; audio?: true }
  /** Type what you hear. `options` (the word and two others): for a learner who reads only a
   *  non-Latin script, the same exercise becomes "hear and pick the written word" (see
   *  lib/writing.ts); without them it is always typed. `pick` (the first units, PROGRESSION.type):
   *  "hear and pick the written word" for every learner, not only for another script. */
  | { kind: 'type'; word: Word; options?: Word[]; pick?: true }
  /** `reverse` (later units): the reply is given and the learner picks the colleague's question;
   *  `options` are then questions. */
  | { kind: 'chat'; dialogue: Dialogue; options: ChatLine[]; reverse?: true }
  /** "How it works here": a workplace-culture card (not graded). */
  | { kind: 'tip'; tip: CultureTip }
  /** A saying in a lesson of another topic (src/content/sayings.ts): "Zo zeggen ze het". Not graded;
   *  a "What does she mean?" situation (sayingQuestion) follows it. */
  | { kind: 'saying'; saying: LessonSaying }
  /** "What do you do?": the tip's situation with shuffled options. */
  | { kind: 'situation'; tip: CultureTip; options: CultureTip['options'] }
  /** "Say it": hear the Dutch, record yourself, compare, rate yourself. Never graded (lib/speaking.ts). */
  | { kind: 'speak'; item: SpeakItem }
  /** The work-rules track (src/content/regels): one step of a rules lesson (buildRuleLesson). */
  | RuleExercise;

/** The kinds of step of a rules lesson (src/content/regels/types.ts). */
export type RuleKind = RuleStep['kind'];
export const RULE_KINDS: readonly RuleKind[] = ['scene', 'rule', 'truefalse', 'whatdo', 'whoask', 'model', 'payslip', 'card'];

/** A rules step as an exercise: the step itself (its options in the lesson's own order). */
export type RuleExercise = { [K in RuleKind]: { kind: K; step: Extract<RuleStep, { kind: K }> } }[RuleKind];

/** Is this exercise a step of a rules lesson? */
export function isRuleExercise(ex: Exercise): ex is RuleExercise {
  return (RULE_KINDS as readonly string[]).includes(ex.kind);
}

/** Rule steps that are a question (one best answer): the rest (story, rule card, "Zo zeg je
 *  het") only goes on. */
export const GRADED_RULE_KINDS: readonly RuleKind[] = ['truefalse', 'whatdo', 'whoask', 'payslip', 'card'];

/**
 * Exercises that can only be answered by hearing: the word is not on screen. They are left out
 * in "Without sound" (and skipped when the learner can't listen right now).
 */
export const AUDIO_ONLY_KINDS: readonly Exercise['kind'][] = ['listen', 'type'];

export function needsAudio(ex: Exercise): boolean {
  return AUDIO_ONLY_KINDS.includes(ex.kind);
}

/**
 * The Dutch this exercise can only be done by hearing: the word of a listening or writing
 * exercise, the sentence of one built by ear. undefined for any other exercise.
 */
export function heardText(ex: Exercise): string | undefined {
  if (ex.kind === 'listen' || ex.kind === 'type') return ex.word.nl;
  if (ex.kind === 'build' && ex.audio) return ex.sentence.nl;
  return undefined;
}

/**
 * Nothing on this phone can say what the exercise needs heard: no recording of the line (a new
 * one, still to be recorded) and no Dutch phone voice (`canSay`, lib/audio.ts). A listening or
 * writing exercise is then left out (counted as skipped, as without sound) and a sentence built
 * by ear becomes the usual one, instead of a guess at a silent speaker.
 */
export function unheard(ex: Exercise, canSay: (text: string) => boolean): boolean {
  const text = heardText(ex);
  return text !== undefined && !canSay(text);
}

/**
 * Which options of a "what does it mean" show their small picture: those with one, but none at
 * all when the answer has no picture (the one row without a picture would give it away).
 */
export function choicePictures(answer: Word, options: readonly Word[]): boolean[] {
  return options.map((o) => hasPicture(answer) && hasPicture(o));
}

/** Intros, tips, sayings and speaking practice are not graded; every other exercise is. In a rules
 *  lesson: true/false, what do you do, who do you ask, the payslip and the card are; a story, a rule card
 *  and a model sentence just go on. */
export function isGraded(ex: Exercise): boolean {
  if (isRuleExercise(ex)) return GRADED_RULE_KINDS.includes(ex.kind);
  return ex.kind !== 'intro' && ex.kind !== 'tip' && ex.kind !== 'saying' && ex.kind !== 'speak';
}

/** Same answer, near-synonyms (content/synonyms.ts), or the same (or a near-identical) picture:
 *  never two of these in one choice. */
function clashes(a: Word, b: Word, pictured: boolean): boolean {
  return a.id === b.id || a.nl === b.nl || a.en === b.en || samePicture(a, b) || nearSynonyms(a.nl, b.nl) || (pictured && looksAlike(a, b));
}

/** Words for one match board: no two that clash (near-synonyms, same meaning or picture), so
 *  every card has exactly one right partner. */
function matchWords(words: readonly Word[], n: number, rng: () => number): Word[] {
  const picked: Word[] = [];
  for (const w of shuffle(words, rng)) {
    if (picked.length >= n) break;
    if (!picked.some((p) => clashes(p, w, false))) picked.push(w);
  }
  return picked;
}

/**
 * Up to n wrong options for `word`, from the first pool first. Each one differs from the word and
 * from every other option. `pictured`: only words with a picture, and no look-alike pictures.
 */
function distractors(word: Word, pools: readonly (readonly Word[])[], n: number, rng: () => number, pictured = false, avoid?: ReadonlySet<string>): Word[] {
  const picked: Word[] = [];
  for (const pool of pools) {
    if (picked.length >= n) break;
    for (const w of shuffle(pool, rng)) {
      if (picked.length >= n) break;
      if (pictured && !hasPicture(w)) continue;
      if (avoid?.has(w.id)) continue;
      if (clashes(w, word, pictured) || picked.some((p) => clashes(w, p, pictured))) continue;
      picked.push(w);
    }
  }
  return picked;
}

/**
 * Words the learner met before this lesson: those of the lessons before it in the course
 * (empty for the first lesson, and for lessons outside the course such as today's review).
 */
export function wordsBefore(lesson: Lesson): Word[] {
  const at = teachingLessons.findIndex((l) => l.id === lesson.id);
  return at > 0 ? teachingLessons.slice(0, at).flatMap((l) => l.words) : [];
}

/**
 * The words still to come after this lesson, one pool per lesson, the nearest lesson first: the
 * fill-in when the words met run out (at the start of the course). Outside the course (a mixed
 * review, today's review): every word of the course, as one pool.
 */
function laterWords(lesson: Lesson): Word[][] {
  const at = teachingLessons.findIndex((l) => l.id === lesson.id);
  return at >= 0 ? teachingLessons.slice(at + 1).map((l) => l.words) : [allWords];
}

/**
 * The target and n − 1 wrong options. Wrong options come from words the learner has already
 * met: the lesson's own words (`known`, by default all of them), then earlier lessons. Only
 * when those run out does a word from elsewhere in the course fill in: the lesson's other words,
 * then the words of the next lessons, the nearest first. So an option is never a word that is
 * still to come when a known one can take its place, and never one from far ahead.
 */
export function options(word: Word, lesson: Lesson, rng: () => number, n = 3, known: readonly Word[] = lesson.words, avoid?: ReadonlySet<string>): Word[] {
  // A word of a sound pair ("maan"): its partner ("man") is always one of the options.
  const partner = pairPartner(word, lesson, avoid);
  if (partner && n >= 2) {
    const rest = options(word, lesson, rng, n - 1, known, new Set([...(avoid ?? []), partner.id]));
    return shuffle([...rest, partner], rng);
  }
  const before = wordsBefore(lesson);
  const met = distractors(word, [known, before], n - 1, rng, false, avoid);
  // The very first quiz of the course knows only two words: a choice of two is fair.
  if (met.length === n - 1 || (met.length >= 1 && !before.length)) return shuffle([word, ...met], rng);
  const rest = [lesson.words, ...laterWords(lesson)].map((pool) => pool.filter((w) => !met.some((m) => clashes(w, m, false))));
  return shuffle([word, ...met, ...distractors(word, rest, n - 1 - met.length, rng, false, avoid)], rng);
}

/** The other word of a sound pair (Word.pair), when the lesson or the course has it and it may be offered. */
function pairPartner(word: Word, lesson: Lesson, avoid?: ReadonlySet<string>): Word | undefined {
  if (!word.pair || avoid?.has(word.pair)) return undefined;
  return lesson.words.find((w) => w.id === word.pair) ?? allWords.find((w) => w.id === word.pair);
}

/**
 * What a typed answer must not be taken for (lib/answers.ts checkTyped): the other words on offer
 * and the other word of its sound pair, which may be only a letter away ("man" for "maan").
 */
export function typedLookalikes(ex: { word: Word; options?: readonly Word[] }): string[] {
  const partner = ex.word.pair ? allWords.find((w) => w.id === ex.word.pair) : undefined;
  return [...(ex.options ?? []), ...(partner ? [partner] : [])].filter((w) => w.id !== ex.word.id && w.nl !== ex.word.nl).map((w) => w.nl);
}

/** The words of the lesson's unit: the fallback pool for picture choices (related words). */
function unitWords(lesson: Lesson): Word[] {
  // Either country's course (a Belgian lesson, src/content/taalBe).
  return allCountriesTaalUnits().find((u) => u.lessons.some((l) => l.id === lesson.id))?.lessons.flatMap((l) => l.words) ?? [];
}

/**
 * "Which one is …?": pick the Dutch word. With picture cards when the word has a picture and
 * there are enough other picture words (no abstract word, no look-alikes); else as text cards
 * (Dutch words only), with the same prompt. The other pictures are words the learner has met:
 * the lesson's, its unit's earlier lessons' (related words), then any earlier lesson's. Only at
 * the start of the course, where those run out, a word of the unit's next lessons fills in, the
 * nearest lesson first.
 */
export function dutchExercise(word: Word, lesson: Lesson, rng: () => number, n = 3, textOnly = false, avoid?: ReadonlySet<string>): Extract<Exercise, { kind: 'dutch' }> {
  if (hasPicture(word) && !textOnly) {
    // Known words first: the lesson's, the unit's earlier lessons', then the earlier lessons' of
    // the course; then the unit's later lessons, the nearest first (l.payslip showed "het
    // vakantiegeld" of the next lesson while earlier picture words were there).
    // A word of a sound pair shows its partner's picture too (the moon beside the man).
    const unit = new Set(unitWords(lesson).map((w) => w.id));
    const before = wordsBefore(lesson);
    const partner = pairPartner(word, lesson, avoid);
    const paired = partner && hasPicture(partner) ? [partner] : [];
    const skip = paired.length ? new Set([...(avoid ?? []), partner!.id]) : avoid;
    const later = laterWords(lesson).map((pool) => pool.filter((w) => unit.has(w.id)));
    const others = distractors(word, [lesson.words, before.filter((w) => unit.has(w.id)), before, ...later], n - 1 - paired.length, rng, true, skip);
    if (others.length === n - 1 - paired.length) return { kind: 'dutch', word, options: shuffle([word, ...paired, ...others], rng) };
  }
  return { kind: 'dutch', word, options: options(word, lesson, rng, n, lesson.words, avoid), textOnly: true };
}

/** The first word of a line, lower case ("Tot morgen!" → "tot"). */
const firstWords = new Map<string, string>();
const firstWord = (s: string) => {
  // Cached: the chat options compare the first words of every line of the course, many times.
  let w = firstWords.get(s);
  if (w === undefined) { w = tokenize(s)[0]?.toLowerCase() ?? ''; firstWords.set(s, w); }
  return w;
};

/**
 * Replies the learner has been taught by the time of `lesson`: the dialogues of the lessons up
 * to it in the course (for a mixed review, those before it). Outside the course (today's review),
 * up to the lesson the dialogue comes from.
 */
function taughtReplies(dialogue: Dialogue, lesson?: Lesson): ChatLine[] {
  const at = chatLessonAt(dialogue, lesson);
  if (at < 0) return [];
  const upTo = new Set(allLessons.slice(0, at + 1).map((l) => l.id));
  return teachingLessons.filter((l) => upTo.has(l.id)).flatMap((l) => (l.dialogues ?? []).map((d) => d.reply));
}

/** Where a chat sits in the course: `lesson` when it is a course lesson, else the lesson the
 *  dialogue comes from (today's review). -1 when neither. */
function chatLessonAt(dialogue: Dialogue, lesson?: Lesson): number {
  const at = lesson ? allLessons.findIndex((l) => l.id === lesson.id) : -1;
  return at >= 0 ? at : allLessons.findIndex((l) => l.dialogues?.some((d) => d.reply.id === dialogue.reply.id));
}

/**
 * Every reply of the course, best fill-in first: the nearest lessons to `at` (earlier before
 * later at the same distance), a much longer or shorter line counting as a few lessons further
 * away. So a fill-in is from about the same level and about as long as the right reply.
 */
function nearReplies(at: number, reply: ChatLine): ChatLine[] {
  const from = Math.max(0, at);
  const lessons = allLessons.map((l, i) => ({ l, i })).filter(({ l }) => !isMixLesson(l));
  // Distance in teaching lessons (a mixed review in between does not count).
  const pos = Math.max(0, lessons.findIndex(({ i }) => i >= from));
  const scored = lessons.flatMap(({ l }, k) => (l.dialogues ?? []).map((d) => {
    const steps = k <= pos ? pos - k : k - pos + 0.5;
    const off = Math.abs(d.reply.nl.length - reply.nl.length) - Math.max(8, Math.round(reply.nl.length * 0.6));
    return { r: d.reply, score: steps + Math.max(0, off) / 2 };
  }));
  return scored.sort((a, b) => a.score - b.score).map(({ r }) => r);
}

/** Plain text for comparing meanings ("See you tomorrow!" = "see you tomorrow"). */
const plains = new Map<string, string>();
const plain = (s: string) => {
  let p = plains.get(s);
  if (p === undefined) { p = s.toLowerCase().replace(/[^\p{L}\p{N} ]+/gu, '').replace(/\s+/g, ' ').trim(); plains.set(s, p); }
  return p;
};

/** About as long as the right reply (a much longer line stands out, and reads above the level). */
export function similarLength(a: string, b: string): boolean {
  return Math.abs(a.length - b.length) <= Math.max(8, Math.round(b.length * 0.6));
}

/**
 * Replies that answer almost any line a newcomer does not understand yet: asking to translate it,
 * to be shown first, or to ask someone else. Offered as a wrong reply they could be right too
 * ("Goedemorgen, waar komt u voor?" – "Wacht even, ik vertaal het."), so they are only ever the
 * right reply of their own chat (chatOptions).
 */
export const ANY_LINE_REPLIES: ReadonlySet<string> = new Set(['c.translate.a', 'c.notyet.a', 'c.kitchen.a']);

/**
 * Reply options for a chat: the right reply plus wrong ones that are taught and not confusable.
 * Wrong replies come from what the learner has seen: the same or earlier lessons (a reply about
 * as long as the right one first, similarLength). Only when those run out (the first lessons of
 * the course) a reply still to come fills in: the nearest lessons first, a much longer or shorter
 * line counting as a few lessons further away (nearReplies). None starts with the same word as
 * the right reply ("Tot morgen!" next to "Tot straks!"), means the same (same meaning, or
 * near-synonyms), answers a question that opens the same way, or would answer any line
 * (ANY_LINE_REPLIES); and no two wrong replies start with the same word either. `avoid`: replies
 * to leave out where others can take their place (a retry).
 */
export function chatOptions(dialogue: Dialogue, rng: () => number, n = 3, lesson?: Lesson, avoid?: ReadonlySet<string>): ChatLine[] {
  const { reply } = dialogue;
  const first = firstWord(reply.nl);
  // A reply to a question that starts the same way ("Kun je zaterdag …?") could be right here too.
  const opening = (s: string) => tokenize(s).slice(0, 2).join(' ').toLowerCase();
  const asked = opening(dialogue.prompt.nl);
  const promptOf = (r: ChatLine) => allDialogues.find((d) => d.reply.id === r.id)?.prompt.nl ?? '';
  const other = (r: ChatLine) => r.id !== reply.id && r.nl !== reply.nl;
  const fair = (r: ChatLine) => other(r) && !ANY_LINE_REPLIES.has(r.id);
  const clear = (r: ChatLine) =>
    fair(r) && firstWord(r.nl) !== first && opening(promptOf(r)) !== asked && plain(r.en) !== plain(reply.en) && !nearSynonyms(r.nl, reply.nl) && !avoid?.has(r.id);
  const short = (r: ChatLine) => similarLength(r.nl, reply.nl);
  const at = chatLessonAt(dialogue, lesson);
  const taught = taughtReplies(dialogue, lesson).filter(clear);
  const seen = new Set(taught.map((r) => r.id));
  const picked: ChatLine[] = [];
  const pools: ChatLine[][] = [
    shuffle(taught.filter(short), rng),
    shuffle(taught, rng),
    // Still to come, the best fill-in first (nearReplies is in that order).
    nearReplies(at, reply).filter((r) => !seen.has(r.id) && clear(r)),
    allReplies.filter((r) => fair(r) && !avoid?.has(r.id)),
    allReplies.filter(other),
  ];
  for (const pool of pools) {
    for (const r of pool) {
      if (picked.length >= n - 1) break;
      if (picked.some((p) => p.id === r.id || p.nl === r.nl || firstWord(p.nl) === firstWord(r.nl) || plain(p.en) === plain(r.en))) continue;
      picked.push(r);
    }
  }
  return shuffle([reply, ...picked], rng);
}

/**
 * Question options for a reversed chat (the reply is given, pick the colleague's line): the
 * right question plus wrong ones the learner has met (the same or earlier lessons, then the
 * nearest). A wrong question never means the same, never starts with the same word, and its own
 * reply starts another way than the given one (a "Ja, …" reply could answer any yes/no question
 * whose reply is "Ja" too), so only one question fits. Seeded.
 */
export function chatPromptOptions(dialogue: Dialogue, rng: () => number, n = 3, lesson?: Lesson, avoid?: ReadonlySet<string>): ChatLine[] {
  const { prompt, reply } = dialogue;
  const at = chatLessonAt(dialogue, lesson);
  const upTo = new Set(allLessons.slice(0, Math.max(0, at) + 1).map((l) => l.id));
  const taught = new Set(teachingLessons.filter((l) => upTo.has(l.id)).flatMap((l) => l.dialogues ?? []));
  const first = firstWord(prompt.nl);
  const answered = firstWord(reply.nl);
  const meaning = plain(prompt.en);
  // One pass over the course's chats (the cheap checks first; near-synonyms last).
  const fitting = allDialogues.filter((d) =>
    d.prompt.id !== prompt.id && d.prompt.nl !== prompt.nl && !avoid?.has(d.prompt.id) && firstWord(d.prompt.nl) !== first
    && firstWord(d.reply.nl) !== answered && plain(d.prompt.en) !== meaning && !nearSynonyms(d.prompt.nl, prompt.nl));
  const known = fitting.filter((d) => taught.has(d));
  const pools: Dialogue[][] = [
    shuffle(known.filter((d) => similarLength(d.prompt.nl, prompt.nl)), rng),
    shuffle(known, rng),
    fitting,
    allDialogues.filter((d) => d.prompt.id !== prompt.id && d.prompt.nl !== prompt.nl),
  ];
  const picked: ChatLine[] = [];
  for (const pool of pools) {
    for (const d of pool) {
      if (picked.length >= n - 1) break;
      if (picked.some((p) => p.id === d.prompt.id || p.nl === d.prompt.nl || firstWord(p.nl) === firstWord(d.prompt.nl) || plain(p.en) === plain(d.prompt.en))) continue;
      picked.push(d.prompt);
    }
  }
  return shuffle([prompt, ...picked], rng);
}

/**
 * One letter apart in a way that is easy to mix up: one vowel swapped for another ("je" / "ja",
 * "dat" / "dit") or one letter added or left out ("u" / "uw"). A different consonant ("ik" /
 * "is") reads as a different word and is fine.
 */
function oneLetterApart(a: string, b: string): boolean {
  if (Math.abs(a.length - b.length) > 1) return false;
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i++;
  if (i === a.length && i === b.length) return false;
  if (a.length === b.length) return /[aeiouy]/.test(a[i]) && /[aeiouy]/.test(b[i]) && a.slice(i + 1) === b.slice(i + 1);
  return a.length < b.length ? a.slice(i) === b.slice(i + 1) : a.slice(i + 1) === b.slice(i);
}

/**
 * A wrong tile that looks or sounds like a word of the sentence: the same stem or a part of it
 * ("draag" / "dragen", "morgen" / "goedemorgen"), or one letter apart ("je" / "ja"). Those are
 * never offered as extras.
 */
export function nearMiss(tile: string, word: string): boolean {
  const a = tile.toLowerCase();
  const b = word.toLowerCase();
  if (a === b) return true;
  if (oneLetterApart(a, b)) return true;
  if (Math.min(a.length, b.length) >= 3 && (a.includes(b) || b.includes(a))) return true;
  // Same stem: a shared start of 3 letters or more once doubled vowels and -en/-e/-t are gone.
  const stem = (s: string) => s.replace(/(aa|ee|oo|uu)/g, (m) => m[0]).replace(/(en|e|t)$/, '');
  const sa = stem(a);
  const sb = stem(b);
  let k = 0;
  while (k < sa.length && k < sb.length && sa[k] === sb[k]) k++;
  return k >= 3 && k >= Math.min(sa.length, sb.length) - 1;
}

/** Word tiles for a sentence: the real words plus a few plausible extras (never near-misses). */
export function buildTiles(sentence: Sentence, lesson: Lesson, rng: () => number): string[] {
  const real = tokenize(sentence.nl);
  const realSet = new Set(real.map((t) => t.toLowerCase()));
  const pool = [
    ...lesson.sentences.filter((s) => s.id !== sentence.id).flatMap((s) => tokenize(s.nl)),
    ...lesson.words.flatMap((w) => tokenize(w.nl)),
  ].filter((t) => !realSet.has(t.toLowerCase()) && !real.some((r) => nearMiss(t, r)));
  const unique = [...new Map(pool.map((t) => [t.toLowerCase(), t])).values()];
  const extra = sample(unique, Math.min(3, Math.max(2, Math.ceil(real.length / 2))), rng);
  return shuffle([...real, ...extra], rng);
}

/** A small, stable number for a text (seeds the word-by-word choices of a sentence). */
function hashText(text: string): number {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) h = Math.imul(h ^ text.charCodeAt(i), 16777619);
  return h >>> 0;
}

let names: Set<string> | null = null;
/** How many regional lessons `names` was made with: a region loaded later adds its names. */
let namesWith = 0;
/**
 * Proper names in the course ("Ali", "Mark", and a region's "Duitsland"): words written with a
 * capital in the middle of a sentence (not after a full stop). A name offered as a wrong word
 * keeps its capital, and a name is never written small as the first tile.
 */
export function courseNames(): Set<string> {
  const region = regionTaalLessons();
  if (names && namesWith === region.length) return names;
  names = new Set();
  namesWith = region.length;
  const texts = [
    ...[...allLessons, ...region].flatMap((l) => [...l.sentences.map((s) => s.nl), ...l.words.map((w) => w.nl)]),
    ...allDialogues.flatMap((d) => [d.prompt.nl, d.reply.nl]),
    ...allReplies.map((r) => r.nl),
  ];
  for (const text of texts) {
    const raw = text.split(/\s+/);
    raw.forEach((r, i) => {
      if (i === 0 || /[.!?…:]["”’]?$/.test(raw[i - 1])) return;
      const w = r.replace(/[^\p{L}\p{N}'-]/gu, '');
      if (/^\p{Lu}\p{Ll}/u.test(w)) names!.add(w);
    });
  }
  return names;
}

/** Cards on a guided match board. */
export const MATCH_PAIRS = 3;
/**
 * Words asked on a guided match board: one fewer than the cards, so one meaning card is never
 * used and the last word is never a forced tap on the only card left.
 */
export const MATCH_ASKED = 2;

/**
 * Build word by word: for each place in the sentence, the right word and (at most) two wrong
 * ones, shuffled. A word that comes later in the same sentence is the first choice for a wrong
 * one (so the learner must know the order, not just spot the one word of the sentence); the
 * other wrong one is an extra tile (buildTiles: plausible words of the lesson), rotated from step
 * to step so the wrong words keep changing. Near the end, with no later words left, both are
 * extras. None of them is the right word or one letter or a stem apart from it ("je" / "ja"),
 * and the two wrong ones never look alike either. At the start of the sentence every option
 * starts with a capital, so the capital gives nothing away (the screen writes them all small:
 * tileLabel); further on the extras are lower case (names and abbreviations keep their capitals). Pure and seeded by the sentence (and `salt`, which a retry
 * changes), so the same sentence always offers the same words.
 */
export function buildSteps(nl: string, tiles: readonly string[], n = 3, salt = 0): string[][] {
  const real = tokenize(nl);
  const left = real.map((w) => w.toLowerCase());
  const extras = [...new Map(tiles.filter((t) => {
    const k = left.indexOf(t.toLowerCase());
    if (k < 0) return true;
    left.splice(k, 1);
    return false;
  }).map((t) => [t.toLowerCase(), t])).values()];
  const rng = createRng((hashText(nl) ^ Math.imul(salt, 0x9e3779b1)) >>> 0);
  // Where the extras' rotation starts (seeded): step i offers extras[off + i], then the next.
  const order = shuffle(extras, rng);
  const off = Math.floor(rng() * Math.max(1, order.length));
  const cap = (w: string) => w.charAt(0).toUpperCase() + w.slice(1);
  // Further on the extras are lower case, except a name ("Ali" never becomes "ali").
  const lower = (w: string) => (courseNames().has(w) || /^\p{Lu}{2,}/u.test(w) ? w : w.toLowerCase());
  return real.map((word, i) => {
    const later = shuffle(real.slice(i + 1).filter((w) => w.toLowerCase() !== word.toLowerCase()), rng).map((w) => (i === 0 ? cap(w) : w));
    const rotated = order.map((_, k) => order[(off + i + k) % order.length]).map((w) => (i === 0 ? cap(w) : lower(w)));
    const picked: string[] = [];
    const take = (pool: readonly string[], max: number) => {
      for (const w of pool) {
        if (picked.length >= max) break;
        // Never a near-synonym of the right word either ("baas" for "leidinggevende").
        if (nearMiss(w, word) || nearSynonyms(w, word) || picked.some((p) => p.toLowerCase() === w.toLowerCase() || nearMiss(w, p))) continue;
        picked.push(w);
      }
    };
    // One later word first, then a rotating extra, then whatever is left of both.
    take(later, Math.min(1, n - 1));
    take(rotated, n - 1);
    take(later, n - 1);
    return shuffle([word, ...picked], rng);
  });
}

/**
 * How a word option of a built sentence is written on its tile. At the first place every option
 * comes with a capital (buildSteps), so no capital gives the answer away; on screen they are all
 * written small instead ("zet", "de", "vakken", not "Zet", "De", "Vakken"), and only the word
 * placed first in the sentence gets its capital (the answer line shows the sentence's own words).
 * A name or an abbreviation keeps its capitals ("Ali", "BSN"); when the sentence itself starts
 * with one, the first options stay as they are (all with a capital), so the capital still
 * gives nothing away.
 */
export function tileLabel(tile: string, step: number, sentenceNl: string): string {
  if (step > 0) return tile;
  const first = tokenize(sentenceNl)[0] ?? '';
  if (!plainCapital(first)) return tile;
  return plainCapital(tile) ? tile.charAt(0).toLowerCase() + tile.slice(1) : tile;
}

/** A word written with only its first letter as a capital, and not a name of the course ("Zet", "Ik", not "Ali" or "BSN"). */
const plainCapital = (w: string) => /^\p{Lu}[\p{Ll}'’-]*$/u.test(w) && !courseNames().has(w);

/** The exercise kinds a review rotates through, per word (see reviewKind). */
export const REVIEW_KINDS = ['meaning', 'listen', 'dutch', 'type'] as const;
export type ReviewKind = (typeof REVIEW_KINDS)[number];

/**
 * The kind of question for the i-th word of a review. Words rotate through: what does it mean,
 * what do you hear, which one is it (help language → Dutch) and write what you hear (or hear and
 * pick the written word). A word in box 2 or higher (it was right before) only gets the harder
 * directions: help language → Dutch, listening and writing. Without sound, listening becomes
 * help language → Dutch and writing becomes "what does it mean" (help language → Dutch from box
 * 2 on), so nothing needs to be heard.
 */
export function reviewKind(i: number, box = 1, quiet = false, offset = 0): ReviewKind {
  const kinds: readonly ReviewKind[] = box >= 2 ? ['dutch', 'listen', 'type'] : REVIEW_KINDS;
  const kind = kinds[(offset + i) % kinds.length];
  if (!quiet) return kind;
  return kind === 'listen' || (kind === 'type' && box >= 2) ? 'dutch' : kind === 'type' ? 'meaning' : kind;
}

/** At most this share of a review's graded items is one kind of question (planReviewKinds). */
export const REVIEW_KIND_SHARE = 0.3;
/** Sentences to build in a mixed review (its chats stay, today's review has one of each). */
export const MIX_MAX_BUILDS = 2;

/** A "Zeg het zo" phrase short enough to build from tiles in a review: one sentence, at most 8 words. */
export function isShortPhrase(nl: string): boolean {
  return !/[.!?]\s+\S/.test(nl.trim()) && nl.trim().split(/\s+/).length <= 8;
}

/**
 * The kinds of question for the words of a review (mixed review, today's review), as even as can
 * be: each word gets the least used of its own directions (reviewKind: box 2 and up only the
 * harder ones, without sound nothing to hear), ties going to its place in the rotation. `taken`:
 * questions of the review already fixed (after the words), `cap`: at most this many of one kind
 * where the words' directions leave a choice. Pure and deterministic.
 */
export function planReviewKinds(boxes: readonly number[], opts: { quiet?: boolean; offset?: number; cap?: number; taken?: Partial<Record<ReviewKind, number>>; noType?: readonly boolean[] } = {}): ReviewKind[] {
  const count: Record<ReviewKind, number> = { meaning: 0, listen: 0, dutch: 0, type: 0, ...opts.taken };
  const cap = opts.cap ?? Infinity;
  return boxes.map((box, i) => {
    const all = [...new Set([0, 1, 2, 3].map((k) => reviewKind(i + k, box, opts.quiet, opts.offset)))];
    // A word not fair to type (typable) gets one of its other directions.
    const own = opts.noType?.[i] && all.some((k) => k !== 'type') ? all.filter((k) => k !== 'type') : all;
    // From box MADE_FROM_BOX on a card moves up only after an answer the learner makes
    // (lib/spaced.ts applyReview): such a word is written when it can be, under the cap.
    if (box >= MADE_FROM_BOX && own.includes('type') && count.type < cap) {
      count.type++;
      return 'type';
    }
    // Under the cap first, then the least used; the rotation breaks ties.
    const pick = own.reduce((best, k) => {
      const score = (x: ReviewKind) => (count[x] >= cap ? 1000 : 0) + count[x];
      return score(k) < score(best) ? k : best;
    });
    count[pick]++;
    return pick;
  });
}

/**
 * "Which one is …?" in a review. A learner who reads Latin letters gets text cards (the meaning
 * shown, pick the Dutch word: the harder direction). A learner who reads only another script
 * (`nonLatin`, lib/writing.ts) can't pick between Latin-only cards, so gets picture cards when
 * the word has a picture; otherwise text cards that each have their own speaker (the component
 * adds them, as in "hear and pick"), and without sound (`quiet`), where a speaker can't help,
 * "what does it mean" (the Dutch word shown, meanings in the help language).
 */
function readableDutch(word: Word, lesson: Lesson, rng: () => number, nonLatin: boolean, quiet: boolean, textOnly: boolean): Exercise {
  if (!nonLatin) return dutchExercise(word, lesson, rng, 3, textOnly);
  const ex = dutchExercise(word, lesson, rng, 3);
  if (!ex.textOnly || !quiet) return ex;
  return { kind: 'meaning', word, options: options(word, lesson, rng) };
}

// A word fair to type from hearing (lib/typable.ts; today's review uses it too, lib/spaced.ts).
export { TYPE_MAX_LETTERS, typable } from './typable';

function reviewExercise(kind: ReviewKind, word: Word, lesson: Lesson, rng: () => number, nonLatin = false, quiet = false): Exercise {
  // A long word or one with capitals is not typed: heard and picked instead.
  if (kind === 'type' && !typable(word)) kind = 'listen';
  if (kind === 'dutch') return readableDutch(word, lesson, rng, nonLatin, quiet, true);
  return { kind, word, options: options(word, lesson, rng) };
}

/** Same ids in the same order? */
const sameOrder = (a: readonly { id: string }[], b: readonly { id: string }[]) => a.length === b.length && a.every((x, i) => x.id === b[i].id);

/**
 * The options in another order: never the order they had, and the answer (`answerId`) on another
 * place when it can be. Seeded.
 */
function reorder<T extends { id: string }>(items: readonly T[], rng: () => number, answerId?: string): T[] {
  if (items.length < 2) return [...items];
  const at = (xs: readonly T[]) => xs.findIndex((x) => x.id === answerId);
  let best: T[] = [...items.slice(1), items[0]];
  for (let k = 0; k < 8; k++) {
    const out = shuffle(items, rng);
    if (sameOrder(out, items)) continue;
    best = out;
    if (answerId === undefined || at(out) !== at(items)) return out;
  }
  // A rotation always moves every option (and so the answer) one place on.
  return answerId !== undefined && at(best) === at(items) ? [...items.slice(1), items[0]] : best;
}

/**
 * Options with at least one wrong option the learner has not seen in this question (`old`), made
 * by `make` (a few seeded tries), and the answer on another place than before. When the lesson
 * has no other wrong options, the old ones in another order.
 */
function freshOptions<T extends { id: string }>(old: readonly T[], answerId: string, make: (avoid: ReadonlySet<string>) => T[], rng: () => number): T[] {
  const seen = new Set(old.map((o) => o.id));
  const wrong = old.filter((o) => o.id !== answerId);
  for (let k = 0; k < 8; k++) {
    // Leave out one of the old wrong options (another one on each try), so a new one comes in
    // where the lesson has one; the last tries may use them all again.
    const avoid = new Set(k < 6 && wrong.length ? [wrong[k % wrong.length].id] : []);
    const fresh = make(avoid);
    if (!fresh.some((o) => o.id === answerId) || !fresh.some((o) => !seen.has(o.id))) continue;
    // The answer moves too (its old place would be a hint).
    const was = old.findIndex((o) => o.id === answerId);
    return fresh.findIndex((o) => o.id === answerId) === was ? reorder(fresh, rng, answerId) : fresh;
  }
  return reorder(old, rng, answerId);
}

/**
 * A mistake that comes back at the end of the lesson, in a new form, so it can't be solved from
 * memory of the first try: other wrong options where the lesson has them (a choice of words,
 * pictures or chat replies), always in another order with the answer on another place. A
 * sentence offers other words step by step, a match board asks its words in another order
 * (another card stays unused). A situation keeps its three options (each tip has only those; an
 * option from another tip would be off-topic and give the answer away), in another order. Pure
 * and seeded.
 */
export function forRetry(ex: Exercise, lesson: Lesson, seed: number): Exercise {
  const rng = createRng((seed ^ 0x7e7a1) >>> 0);
  const n = (xs: readonly unknown[]) => Math.max(2, xs.length);
  switch (ex.kind) {
    case 'meaning':
    case 'listen':
      return { ...ex, options: freshOptions(ex.options, ex.word.id, (avoid) => options(ex.word, lesson, rng, n(ex.options), lesson.words, avoid), rng) };
    case 'dutch': {
      // Picture cards stay picture cards (pictured wrong options), text cards stay text cards.
      const make = (avoid: ReadonlySet<string>) => {
        const next = dutchExercise(ex.word, lesson, rng, n(ex.options), ex.textOnly, avoid);
        return Boolean(next.textOnly) === Boolean(ex.textOnly) ? next.options : [];
      };
      return { ...ex, options: freshOptions(ex.options, ex.word.id, make, rng) };
    }
    case 'type':
      return ex.options ? { ...ex, options: freshOptions(ex.options, ex.word.id, (avoid) => options(ex.word, lesson, rng, n(ex.options!), lesson.words, avoid), rng) } : ex;
    case 'chat':
      return ex.reverse
        ? { ...ex, options: freshOptions(ex.options, ex.dialogue.prompt.id, (avoid) => chatPromptOptions(ex.dialogue, rng, n(ex.options), lesson, avoid), rng) }
        : { ...ex, options: freshOptions(ex.options, ex.dialogue.reply.id, (avoid) => chatOptions(ex.dialogue, rng, n(ex.options), lesson, avoid), rng) };
    case 'situation':
      return { ...ex, options: reorder(ex.options, rng, ex.tip.options.find((o) => o.best)?.id) };
    case 'build':
      return { ...ex, salt: (ex.salt ?? 0) + 1 };
    case 'match':
      return { ...ex, words: reorder(ex.words, rng, ex.words[0]?.id) };
    // A rules question keeps its own options (another step's would be off-topic), in another
    // order with the best one on another place. True/false stays Waar, Niet waar.
    case 'whatdo':
      return { ...ex, step: { ...ex.step, options: reorder(ex.step.options, rng, ex.step.options.find((o) => o.best)?.id) } };
    case 'whoask':
      return { ...ex, step: { ...ex.step, options: reorder(ex.step.options, rng, ex.step.options.find((o) => o.best)?.id) } };
    case 'payslip':
      return { ...ex, step: { ...ex.step, options: reorder(ex.step.options, rng, ex.step.options.find((o) => o.best)?.id) } };
    case 'card':
      return { ...ex, step: { ...ex.step, options: reorder(ex.step.options, rng, ex.step.options.find((o) => o.best)?.id) } };
    default:
      return ex;
  }
}

/**
 * A rules lesson (lesson.steps): its steps in order, each as an exercise, with the options of
 * every question shuffled by the seed (the same seed, the same lesson, so a saved run resumes).
 * True/false keeps Waar before Niet waar. A review leaves out the story and the rule card (as a
 * language review leaves out the intros and the tip): the questions and the model sentences stay.
 */
export function buildRuleLesson(lesson: Lesson, opts: { seed?: number; review?: boolean } = {}): Exercise[] {
  const rng = createRng(opts.seed ?? Date.now());
  const out: Exercise[] = [];
  for (const step of lesson.steps ?? []) {
    if (opts.review && (step.kind === 'scene' || step.kind === 'rule')) continue;
    // A lesson played again asks its model sentence: "Wat zeg je?" (content/regels/zegHet.ts).
    const asked = opts.review && step.kind === 'model' ? modelQuestion(step) : undefined;
    if (asked) { out.push({ kind: 'whatdo', step: { ...asked, options: shuffle(asked.options, rng) } }); continue; }
    switch (step.kind) {
      case 'whatdo': out.push({ kind: 'whatdo', step: { ...step, options: shuffle(step.options, rng) } }); break;
      case 'whoask': out.push({ kind: 'whoask', step: { ...step, options: shuffle(step.options, rng) } }); break;
      case 'payslip': out.push({ kind: 'payslip', step: { ...step, options: shuffle(step.options, rng) } }); break;
      case 'card': out.push({ kind: 'card', step: { ...step, options: shuffle(step.options, rng) } }); break;
      default: out.push({ kind: step.kind, step } as RuleExercise);
    }
  }
  return out;
}

/**
 * Progression through the course (G4 b3): later units are not the same template again. From
 * these units on (0-based place on the learner's own path, as Route and the certificates number it):
 * - `pickDutch`: the last quiz after the new words asks the other way round: the meaning shown,
 *   pick the Dutch word (text cards; each with a speaker for a learner who reads another script);
 * - `audioBuild`: one sentence is built by ear: the meaning is hidden until the end and the
 *   sentence is played (never without sound; the tiles keep their own speakers);
 * - `reverseChat`: one chat is the other way round: the reply is given and the learner picks the
 *   colleague's question: in a unit's later lessons the chat of the lesson before it, in the
 *   unit's mixed review its last chat;
 * - `type`: "type what you hear" is written (keyboard or letter tiles, Settings). In the units
 *   before it (their lessons and mixed reviews) it is "hear and pick the written word" for every
 *   learner: no writing in the first topics (many learners read little).
 */
export const PROGRESSION = { pickDutch: 4, type: 4, audioBuild: 7, reverseChat: 10 } as const;

/** The 0-based place of the lesson's unit on the learner's path (-1 outside it, e.g. today's review). */
export function unitIndexOf(lesson: Lesson, sector?: SectorChoice, track: Track = trackOfId(lesson.id)): number {
  const { main, other } = coursePlan(sector, track);
  const at = [...main, ...other].findIndex((u) => u.lessons.some((l) => l.id === lesson.id));
  return at >= 0 ? at : courseUnits(track).findIndex((u) => u.lessons.some((l) => l.id === lesson.id));
}

/** The dialogue for a reversed chat in a lesson: the one of the lesson before it in its unit
 *  (met a lesson ago, so it comes back the other way round). None in a unit's first lesson: its
 *  own chat the other way round right after it would give the answer away. */
function reverseDialogue(lesson: Lesson): Dialogue | undefined {
  const unit = allCountriesTaalUnits().find((u) => u.lessons.some((l) => l.id === lesson.id));
  const i = unit ? unit.lessons.findIndex((l) => l.id === lesson.id) : -1;
  const before = i > 0 ? unit!.lessons[i - 1] : undefined;
  return before && !isMixLesson(before) ? before.dialogues?.[0] : undefined;
}

/**
 * Builds the exercise queue for a lesson.
 * First time: introduce each word, check it right away, then mix and apply.
 * Review: skip the intros and practise everything.
 * Mixed review (last lesson of a unit): the words are not new, so no intros either; each word
 * gets a "What does this mean?" instead.
 * quiet ("Without sound"): every listening exercise becomes a reading one on the same word, so
 * the lesson keeps its length and nothing needs to be heard.
 */
/**
 * `sayings`: the learner has done the first lesson of "Uitdrukkingen en gezegden" (SAYINGS_FROM),
 * so a lesson with a saying of its own (src/content/sayings.ts) shows it near the end.
 */
/**
 * `fast` ("Wil je sneller?" Ja, src/lib/pace.ts): less introduction. Every new word keeps its card
 * (no word of a lesson was met before: word ids and their Dutch never repeat over the course),
 * but there is one check after all of them instead of one after every two.
 * `easy` (after many mistakes, src/lib/pace.ts): a shorter lesson, with all its introduction: one
 * sentence fewer to build (none by ear), and no extra question at the end (no saying, no second
 * listening question or reversed chat). Neither changes a review.
 */
export function buildLesson(lesson: Lesson, opts: { review: boolean; seed?: number; quiet?: boolean; speak?: boolean; nonLatin?: boolean; sector?: SectorChoice; sayings?: boolean; fast?: boolean; easy?: boolean }): Exercise[] {
  // The work-rules track: a lesson of steps (nothing in it needs to be heard, so "Without
  // sound" and speaking practice change nothing).
  if (lesson.steps?.length) return buildRuleLesson(lesson, { seed: opts.seed, review: opts.review });
  const rng = createRng(opts.seed ?? Date.now());
  const words = lesson.words;
  const out: Exercise[] = [];

  const mix = isMixLesson(lesson) || Boolean(lesson.repeat);
  const daily = lesson.id === DAILY_ID;
  // A lesson's own tip, or in a review the tip of a lesson it reviews (lesson.tipFrom): that one
  // comes back as its situation question only (the tip card was read in its lesson).
  const ownTip = tipForLesson(lesson.id);
  const tip = ownTip ?? lesson.tipFrom?.map((id) => tipForLesson(id)).find(Boolean);
  // Sentences to build: one in today's review, two in a mixed review (else 3 builds and 2 chats
  // made a third of it), all of them in a lesson. In a mixed review the "Zeg het zo" phrase of
  // the tip that comes back is the second one, when it is one short sentence.
  const phrase = mix && !daily && tip && !ownTip && isShortPhrase(tip.phrase.nl) ? tip.phrase : undefined;
  // Today's review builds its sentence cards (lib/spaced.ts, at most 2), or else one sentence.
  const sentences = daily
    ? lesson.sentences.slice(0, Math.max(1, lesson.cardSentences ?? 0))
    : mix
      ? phrase && !lesson.sentences.some((s) => s.nl === phrase.nl)
        ? [...lesson.sentences.slice(0, MIX_MAX_BUILDS - 1), { id: phrase.id, nl: phrase.nl, en: phrase.en }]
        : lesson.sentences.slice(0, MIX_MAX_BUILDS)
      : opts.easy && !opts.review && lesson.sentences.length > 1 ? lesson.sentences.slice(0, -1) : lesson.sentences;
  const easy = Boolean(opts.easy) && !opts.review && !mix;
  const fast = Boolean(opts.fast) && !easy;
  const dialogues = daily ? (lesson.dialogues ?? []).slice(0, 1) : lesson.dialogues ?? [];
  // Progression (PROGRESSION): only in the course's own lessons (and a reversed chat in a unit's
  // mixed review), not in today's review.
  const unitAt = mix ? -1 : unitIndexOf(lesson, opts.sector);
  const mixTurn = mix && !daily && !lesson.repeat && dialogues.length > 1 && unitIndexOf(lesson, opts.sector) >= PROGRESSION.reverseChat;
  const later = (from: number) => unitAt >= from;
  // The first units: no writing (PROGRESSION.type), in a lesson and in its unit's mixed review.
  const ownUnit = daily ? -1 : mix ? unitIndexOf(lesson, opts.sector) : unitAt;
  const noWriting = ownUnit >= 0 && ownUnit < PROGRESSION.type;
  const unwritten = (xs: Exercise[]): Exercise[] => (noWriting ? xs.map((e) => (e.kind === 'type' && (e.options?.length ?? 0) > 1 ? { ...e, pick: true } : e)) : xs);
  /** The word asked "the other way round" after the new words (pick the Dutch), if any. */
  let pickedDutch: string | undefined;
  if (!opts.review && !mix) {
    const before = wordsBefore(lesson);
    // A quiz put off by one word: its words had no fair wrong option yet (see below).
    let putOff = false;
    words.forEach((word, i) => {
      out.push({ kind: 'intro', word });
      // After every second new word, quiz one of the two just learned ("sneller": once, at the end).
      if (fast ? i === words.length - 1 : i % 2 === 1 || putOff) {
        const target = words[i - Math.floor(rng() * 2)];
        const known = words.slice(0, i + 1);
        // No word met so far can be a wrong option (the only other one is a near-synonym, as
        // "hallo" and "goedemorgen" at the very start): the quiz waits for the next word.
        if (!putOff && !before.length && !known.some((w) => !clashes(w, target, false))) { putOff = true; return; }
        putOff = false;
        // Only words introduced so far (and earlier lessons') are wrong options here.
        const opts3 = options(target, lesson, rng, 3, known);
        // Later units: the last quiz (every word met by then) shows the meaning and asks for the
        // Dutch word. Without sound a learner who reads another script can't hear the cards: the
        // usual "what does it mean" then.
        if (later(PROGRESSION.pickDutch) && i === words.length - 1 && !(opts.nonLatin && opts.quiet)) {
          pickedDutch = target.id;
          out.push({ kind: 'dutch', word: target, options: opts3, textOnly: true });
        } else {
          out.push({ kind: 'meaning', word: target, options: opts3 });
        }
      }
    });
  } else {
    if (mix) {
      // A mixed review (and today's review) rotates the kind of question per word, so it is not
      // the same recognition question every time; words that were right before get the harder
      // directions (reviewKind).
      const offset = Math.floor(rng() * REVIEW_KINDS.length);
      const order = shuffle(words, rng);
      // The questions after the words (not in today's review): two listening, one "which one
      // is", one writing; without sound their reading twins.
      const taken: Partial<Record<ReviewKind, number>> = daily ? {} : opts.quiet ? { meaning: 2, dutch: 2 } : { listen: 2, dutch: 1, type: 1 };
      const graded = order.length + Object.values(taken).reduce((a, b) => a + (b ?? 0), 0) + 1 + (tip ? 1 : 0) + sentences.length + dialogues.length;
      // No kind more than about 30% of the graded items (4 of 13 picture cards was too many).
      const cap = Math.max(2, Math.floor(graded * REVIEW_KIND_SHARE));
      const kinds = planReviewKinds(order.map((w) => lesson.boxes?.[w.id] ?? 1), { quiet: opts.quiet, offset, cap, taken, noType: order.map((w) => !typable(w)) });
      order.forEach((word, i) => {
        out.push(reviewExercise(kinds[i], word, lesson, rng, opts.nonLatin, opts.quiet));
      });
    } else {
      for (const word of sample(words, 3, rng)) {
        out.push({ kind: 'meaning', word, options: options(word, lesson, rng) });
      }
    }
  }

  // Language first, then one workplace custom, right after the new words.
  if (tip) {
    if (!opts.review && ownTip) out.push({ kind: 'tip', tip });
    out.push({ kind: 'situation', tip, options: shuffle(tip.options, rng) });
  }

  // Guided matching: three cards, two Dutch words asked one at a time (components/Exercises.tsx).
  out.push({ kind: 'match', words: matchWords(words, Math.min(MATCH_PAIRS, words.length), rng) });

  // Today's review stays short (about a dozen items): every word once in a rotating kind of
  // question (above), one tip situation, the match board, one sentence to build and one chat. Its words already
  // rotate through listening, picture and writing questions, so the extra ones are left out.
  if (daily) {
    for (const sentence of sentences) out.push({ kind: 'build', sentence, tiles: buildTiles(sentence, lesson, rng) });
    for (const dialogue of dialogues) {
      out.push({ kind: 'chat', dialogue, options: chatOptions(dialogue, rng, 3, lesson) });
    }
    // A spoken-sentence card (lesson.say) is said again; else a sentence or word as usual.
    if (opts.speak && !opts.quiet) return withSpeaking<Exercise>(out, lesson, (item) => ({ kind: 'speak', item }), opts.seed ?? 0, lesson.say);
    return out;
  }

  const shuffled = shuffle(words, rng);
  const [l1, l2, d1raw, t1raw, spare] = shuffled;
  // The word to type: one of at most 12 letters without capitals where the lesson has one
  // (preferably not a word already asked by ear above).
  const t1 = typable(t1raw) ? t1raw : shuffled.slice(4).find(typable) ?? shuffled.find((w) => typable(w) && w !== l1 && w !== l2) ?? shuffled.find(typable) ?? t1raw;
  // Not the word just asked the other way round (pick the Dutch) again.
  const d1 = d1raw.id === pickedDutch && spare ? spare : d1raw;
  // Without sound the first listening task shows the Dutch word (pick its meaning) and the
  // second one the meaning (pick the Dutch word from picture or text cards).
  out.push({ kind: opts.quiet ? 'meaning' : 'listen', word: l1, options: options(l1, lesson, rng) });
  // The picture choice asks for a word that has a picture (text cards if the lesson has none).
  const pictured = words.filter(hasPicture);
  const target = hasPicture(d1) || !pictured.length ? d1 : pictured[Math.floor(rng() * pictured.length)];
  // At most three answers on a screen (the "at most 3" rule).
  out.push(readableDutch(target, lesson, rng, Boolean(opts.nonLatin), Boolean(opts.quiet), false));

  sentences.forEach((sentence, k) => {
    const build: Exercise = { kind: 'build', sentence, tiles: buildTiles(sentence, lesson, rng) };
    // Later units: the last sentence is built by ear (never without sound).
    if (later(PROGRESSION.audioBuild) && !opts.quiet && !easy && k === sentences.length - 1 && sentences.length > 1) build.audio = true;
    out.push(build);
  });

  // Complete the conversation: use the words in a real exchange with a colleague. In a later
  // unit's mixed review the last chat goes the other way round (pick the question).
  dialogues.forEach((dialogue, k) => {
    if (mixTurn && k === dialogues.length - 1) out.push({ kind: 'chat', dialogue, options: chatPromptOptions(dialogue, rng, 3, lesson), reverse: true });
    else out.push({ kind: 'chat', dialogue, options: chatOptions(dialogue, rng, 3, lesson) });
  });

  // A saying that fits this lesson's topic, after the sayings unit: its card, then "What does she
  // mean?". Only in the lesson itself (not when it is repeated as a review), and from its own
  // generator, so every other exercise stays the same with or without it.
  const saying = opts.sayings && !opts.review && !easy ? sayingForLesson(lesson.id) : undefined;
  if (saying) {
    const question = sayingQuestion(saying);
    const sayRng = createRng(((opts.seed ?? 0) ^ 0x5a1d) >>> 0);
    out.push({ kind: 'saying', saying }, { kind: 'situation', tip: question, options: shuffle(question.options, sayRng) });
  }

  // Later units: the other way round, near the end (in the place of the second listening
  // question; the sentence built by ear is listening practice too): the reply is given, pick
  // the question.
  const turned = later(PROGRESSION.reverseChat) ? reverseDialogue(lesson) : undefined;
  if (easy) { /* a shorter lesson: no second listening question here */ }
  else if (turned) out.push({ kind: 'chat', dialogue: turned, options: chatPromptOptions(turned, rng, 3, lesson), reverse: true });
  else out.push(opts.quiet ? readableDutch(l2, lesson, rng, Boolean(opts.nonLatin), true, false) : { kind: 'listen', word: l2, options: options(l2, lesson, rng) });
  // Typing what you hear has no reading twin; read the word and pick its meaning instead.
  // The written-word options for "hear and pick" come from their own generator, so the rest of
  // the lesson (and a saved place in it) stays the same as before they existed.
  const pickRng = createRng(((opts.seed ?? 0) ^ 0x5eed) >>> 0);
  // A lesson with nothing short enough to type (only long sayings): heard and picked instead.
  out.push(opts.quiet ? { kind: 'meaning', word: t1, options: options(t1, lesson, rng) }
    : typable(t1) ? { kind: 'type', word: t1, options: options(t1, lesson, pickRng) }
    : { kind: 'listen', word: t1, options: options(t1, lesson, pickRng) });
  // Speaking practice (Settings, on by default; never "Without sound"): one "say it" near the
  // end, placed after the rest is built so the other exercises stay the same with or without it.
  if (opts.speak && !opts.quiet) return unwritten(withSpeaking<Exercise>(out, lesson, (item) => ({ kind: 'speak', item }), opts.seed ?? 0));
  return unwritten(out);
}

/**
 * A lesson is open when it is the first of its unit or the previous lesson of the unit is done.
 * The course order (basis units plus the learner's sector, see coursePlan) is the advice the
 * path highlights with isNextInCourse; it no longer blocks a unit.
 */
export function isUnlocked(lessonId: string, completed: Record<string, unknown>, access: Access = 'full'): boolean {
  // The access level wins over progress: a preview never opens a later unit.
  if (!lessonAllowed(lessonId, access)) return false;
  // Every unit can be entered at its first lesson (a coach can send a learner to one topic);
  // inside a unit the lessons open in order. (Either course: lesson ids never clash.)
  const unit = unitOfLesson(lessonId);
  if (!unit) return false;
  const i = unit.lessons.findIndex((l) => l.id === lessonId);
  return i === 0 || Boolean(completed[unit.lessons[i - 1].id]);
}

/** The next lesson along the learner's own course (basis units plus their sector), the one the path highlights. */
export function isNextInCourse(lessonId: string, completed: Record<string, unknown>, access: Access = 'full', sector?: SectorChoice, track: Track = 'taal'): boolean {
  if (!lessonAllowed(lessonId, access) || completed[lessonId]) return false;
  const order = mainLessons(sector, track);
  const index = order.findIndex((l) => l.id === lessonId);
  if (index < 0) return false;
  return index === 0 || Boolean(completed[order[index - 1].id]);
}

const ARTICLES = new Set(['de', 'het', 'een']);

/**
 * The lesson words behind some words of a sentence ("helm" → "de helm"): every word whose Dutch,
 * without its article, contains one of them (case does not matter). Articles alone match nothing.
 */
export function wordsInSentence(tokens: readonly string[], words: readonly Word[]): Word[] {
  const wanted = new Set(tokens.map((t) => t.toLowerCase()).filter((t) => !ARTICLES.has(t)));
  return words.filter((w) => tokenize(w.nl).some((t) => wanted.has(t.toLowerCase()) && !ARTICLES.has(t.toLowerCase())));
}

/**
 * A picture for a sentence: the pictured word (from the whole course) whose Dutch, without its
 * article, appears in the sentence. The longest match wins ("de veiligheidsschoenen" over "de
 * schoen"). Undefined when the sentence has no pictured word.
 */
export function sentencePicture(sentence: Sentence, words: readonly Word[] = allWords): Word | undefined {
  const tokens = tokenize(sentence.nl).map((t) => t.toLowerCase());
  const has = (part: string[]) =>
    part.length > 0 && tokens.some((_, i) => part.every((p, j) => tokens[i + j] === p));
  let best: Word | undefined;
  let bestLen = 0;
  for (const w of words) {
    if (!hasPicture(w)) continue;
    const part = tokenize(w.nl).map((t) => t.toLowerCase()).filter((t) => !ARTICLES.has(t));
    const len = part.join(' ').length;
    if (len >= 3 && len > bestLen && has(part)) { best = w; bestLen = len; }
  }
  return best;
}
