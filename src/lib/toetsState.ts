import { TOETS_DURF, TOETS_PARTS, type DurfAnswer, type DurfId, type ToetsPart, type ToetsVersion } from '../content/toets';

/**
 * What the progress keeps of "Wat ken je al?" (src/content/toets.ts): per moment the day, the
 * version and the number right per part. Only on this phone, like the rest of the progress.
 *
 * `v` is the version of this shape. A save from before the test has no `toets` and works as
 * before; a `toets` this app cannot read (another `v`, broken values) is left out (readToets).
 *
 * Form 2 of the test (November 2026, src/content/toets.ts TOETS_FORM) keeps a little more per run:
 * `form`, `mc`, `wrong` and `idk`. They are optional and added to the same shape (still `v: 1`),
 * so nothing has to be moved: a run of form 1 (18 picks, no "Ik weet het niet") has none of them
 * and is read as `mc = of`, `wrong = of - right`, `idk = 0` (runTally), and an older app that
 * reads a run of form 2 keeps its day, version, right and of (it skips what it does not know).
 *
 * "Durf je dit?" (5 November 2026, src/content/toets.ts TOETS_DURF) adds `durf` to a run in the
 * same way: optional, still `v: 1`. A run without it (before then) has no answers; an older app
 * leaves it out.
 */
export const TOETS_STATE_VERSION = 1;

export type ToetsScore = Record<ToetsPart, number>;

export interface ToetsRun {
  /** Local date (YYYY-MM-DD) it was done. */
  day: string;
  version: ToetsVersion;
  /** Right per part. */
  right: ToetsScore;
  /** Questions per part. */
  of: ToetsScore;
  /** The form of the test (TOETS_FORM); none: form 1. */
  form?: number;
  /** Form 2: questions per part that were a pick of three (a guess can be right). */
  mc?: ToetsScore;
  /** Form 2: wrong picks per part (picks only; a wrong built sentence or word is not here). */
  wrong?: ToetsScore;
  /** Form 2: "Ik weet het niet" per part. */
  idk?: ToetsScore;
  /** "Durf je dit?": the learner's answers (0 "Nog niet", 1 "Een beetje", 2 "Ja"). Not in the score, never counted. */
  durf?: ToetsDurf;
}

/** The answers to "Durf je dit?", by question (src/content/toets.ts TOETS_DURF). */
export type ToetsDurf = Partial<Record<DurfId, DurfAnswer>>;

export interface ToetsState {
  v: typeof TOETS_STATE_VERSION;
  /** The start (version A), done. */
  instap?: ToetsRun;
  /** The start was passed over ("Later" on its card): the day. It does not come back by itself. */
  skipped?: string;
  /** The end (version B), done. */
  eind?: ToetsRun;
  /** The day the 4 weeks count from: the start done or passed over. */
  start?: string;
  /** Topics of the language track finished on that day: the end comes after 3 more. */
  unitsAt?: number;
  /** "Later" on the end's card: not offered again before this day. */
  later?: string;
}

const isDay = (v: unknown): v is string => typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v);
const isCount = (v: unknown, max = 50): v is number => typeof v === 'number' && Number.isInteger(v) && v >= 0 && v <= max;

function readScore(raw: unknown, max?: ToetsScore): ToetsScore | null {
  if (!raw || typeof raw !== 'object') return null;
  const r = raw as Record<string, unknown>;
  const ok = (k: ToetsPart) => isCount(r[k], max ? max[k] : 50);
  return ok('listen') && ok('words') && ok('sentences') ? { listen: r.listen as number, words: r.words as number, sentences: r.sentences as number } : null;
}

/** The answers to "Durf je dit?" that can be read (a known question, 0, 1 or 2); none: undefined. */
export function readDurf(raw: unknown): ToetsDurf | undefined {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return undefined;
  const r = raw as Record<string, unknown>;
  const out: ToetsDurf = {};
  for (const { id } of TOETS_DURF) {
    const v = r[id];
    if (v === 0 || v === 1 || v === 2) out[id] = v;
  }
  return Object.keys(out).length ? out : undefined;
}

function readRun(raw: unknown): ToetsRun | undefined {
  if (!raw || typeof raw !== 'object') return undefined;
  const r = raw as Record<string, unknown>;
  if (!isDay(r.day) || (r.version !== 'A' && r.version !== 'B')) return undefined;
  const of = readScore(r.of);
  const right = of && readScore(r.right, of);
  if (!of || !right) return undefined;
  const run: ToetsRun = { day: r.day, version: r.version, right, of };
  // Form 2's counts: all of them, and adding up (right + wrong + idk never more than asked, the
  // wrong picks never more than the picks), or none (the run is then read as form 1).
  const mc = readScore(r.mc, of);
  const wrong = mc && readScore(r.wrong, mc);
  const idk = readScore(r.idk, of);
  const adds = mc && wrong && idk && (['listen', 'words', 'sentences'] as const).every((k) => right[k] + wrong[k] + idk[k] <= of[k]);
  if (isCount(r.form, 99) && r.form >= 2 && adds) Object.assign(run, { form: r.form, mc, wrong, idk });
  const durf = readDurf(r.durf);
  if (durf) run.durf = durf;
  return run;
}

/** The counts of a run, also for a run of form 1 (every question a pick, every miss a wrong pick). */
export function runTally(run: ToetsRun): { right: ToetsScore; of: ToetsScore; mc: ToetsScore; wrong: ToetsScore; idk: ToetsScore } {
  if (run.mc && run.wrong && run.idk) return { right: run.right, of: run.of, mc: run.mc, wrong: run.wrong, idk: run.idk };
  const each = (f: (k: ToetsPart) => number): ToetsScore => ({ listen: f('listen'), words: f('words'), sentences: f('sentences') });
  return { right: run.right, of: run.of, mc: run.of, wrong: each((k) => run.of[k] - run.right[k]), idk: each(() => 0) };
}

/** The test's place in a save, as far as it can be read; undefined when there is none (or it is unknown). */
export function readToets(raw: unknown): ToetsState | undefined {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return undefined;
  const r = raw as Record<string, unknown>;
  if (r.v !== TOETS_STATE_VERSION) return undefined;
  const out: ToetsState = { v: TOETS_STATE_VERSION };
  const instap = readRun(r.instap);
  const eind = readRun(r.eind);
  if (instap) out.instap = instap;
  if (eind) out.eind = eind;
  if (isDay(r.skipped)) out.skipped = r.skipped;
  if (isDay(r.start)) out.start = r.start;
  if (isCount(r.unitsAt, 1000)) out.unitsAt = r.unitsAt;
  if (isDay(r.later)) out.later = r.later;
  return out;
}

/** Two saves of the test together (a backup added to this phone): each moment's later run. */
export function mergeToets(a?: ToetsState, b?: ToetsState): ToetsState | undefined {
  if (!a || !b) return a ?? b;
  const later = (x?: ToetsRun, y?: ToetsRun) => (!x ? y : !y ? x : y.day > x.day ? y : x);
  const instap = later(a.instap, b.instap);
  const out: ToetsState = { ...a, v: TOETS_STATE_VERSION };
  out.instap = instap;
  out.eind = later(a.eind, b.eind);
  if (!out.start) out.start = b.start;
  if (out.unitsAt === undefined) out.unitsAt = b.unitsAt;
  if (instap) delete out.skipped;
  else out.skipped = a.skipped ?? b.skipped;
  return out;
}

/* ---- Reading a run: the guessing taken out, and then against now (docs/toets.md) ---- */

/** How many options a pick has: a guess is right one time in this many. */
export const TOETS_OPTIONS = 3;

/**
 * What the learner knows of a part, with the guessing taken out: the right answers minus half the
 * wrong picks (with three options a guess is wrong two times in three, so for every two wrong
 * picks one right pick was a lucky guess, on average). Never below 0. "Ik weet het niet" and a
 * wrong built sentence or written word take nothing off. The same for a run of form 1 (every miss
 * there was a wrong pick). Exact (it can end in .5); knownOf rounds it down for the screen.
 */
export function knownExact(run: ToetsRun, part: ToetsPart): number {
  const t = runTally(run);
  return Math.max(0, t.right[part] - t.wrong[part] / (TOETS_OPTIONS - 1));
}

/** knownExact in whole questions (rounded down): what the bars and the coach card show. */
export const knownOf = (run: ToetsRun, part: ToetsPart): number => Math.floor(knownExact(run, part));

/** Growth needs at least this many questions more (of the run now). */
export const MIN_MORE = 2;
export type ToetsGrowth = 'up' | 'same' | 'down';

/**
 * Then and now, honestly: 'up' only when the difference is bigger than guessing can give.
 *  - The share known (knownExact / questions) is at least MIN_MORE questions higher, and
 *  - more than twice the spread that the guesses of both runs can cause. A guess, corrected, adds
 *    +1 (one time in three) or -1/2 (two times in three): its variance is 1/2. A run with W wrong
 *    picks guessed about 1.5·W times, so its guesses spread about 0.75·W (in questions; divided
 *    by the questions squared for the share). W + 1, not W: a few lucky guesses can leave W small
 *    by chance (tests/toets.test.ts: without the 1, a learner who learned nothing got "Meer dan
 *    toen" 6 times in 100 in a part; with it, fewer than 5).
 * 'down' when lower by as much; else 'same' ("ongeveer gelijk"). Over one part, or over the whole
 * test (`part` left out). docs/toets.md explains it for coaches.
 */
export function growthOf(before: ToetsRun, now: ToetsRun, part?: ToetsPart): ToetsGrowth {
  const parts = part ? [part] : TOETS_PARTS;
  const total = (run: ToetsRun, f: (t: ReturnType<typeof runTally>, k: ToetsPart) => number) => {
    const t = runTally(run);
    return parts.reduce((n, k) => n + f(t, k), 0);
  };
  const of1 = total(before, (t, k) => t.of[k]);
  const of2 = total(now, (t, k) => t.of[k]);
  if (!of1 || !of2) return 'same';
  const share1 = parts.reduce((n, k) => n + knownExact(before, k), 0) / of1;
  const share2 = parts.reduce((n, k) => n + knownExact(now, k), 0) / of2;
  const guessed = (run: ToetsRun) => 0.75 * (total(run, (t, k) => t.wrong[k]) + 1);
  const spread = guessed(before) / (of1 * of1) + guessed(now) / (of2 * of2);
  const d = share2 - share1;
  const big = Math.abs(d) * of2 >= MIN_MORE - 1e-9 && Math.abs(d) > 2 * Math.sqrt(spread);
  return !big ? 'same' : d > 0 ? 'up' : 'down';
}

/* ---- "Durf je dit?": then and now ---- */

/**
 * "Durf je dit?" then against now: per question that has an answer in both runs, the two answers
 * (in the order of TOETS_DURF). Empty when the start has none (done before 5 November 2026, or
 * passed over): the end then shows nothing of it (docs/toets.md, "Durf je dit?").
 */
export function durfThenNow(before?: ToetsRun, now?: ToetsRun): { id: DurfId; then: DurfAnswer; now: DurfAnswer }[] {
  const a = before?.durf;
  const b = now?.durf;
  if (!a || !b) return [];
  return TOETS_DURF.flatMap(({ id }) => (a[id] !== undefined && b[id] !== undefined ? [{ id, then: a[id]!, now: b[id]! }] : []));
}
