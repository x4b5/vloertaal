import type { ToetsPart, ToetsVersion } from '../content/toets';

/**
 * What the progress keeps of "Wat ken je al?" (src/content/toets.ts): per moment the day, the
 * version and the number right per part. Only on this phone, like the rest of the progress.
 *
 * `v` is the version of this shape. A save from before the test has no `toets` and works as
 * before; a `toets` this app cannot read (another `v`, broken values) is left out (readToets).
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
}

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

function readRun(raw: unknown): ToetsRun | undefined {
  if (!raw || typeof raw !== 'object') return undefined;
  const r = raw as Record<string, unknown>;
  if (!isDay(r.day) || (r.version !== 'A' && r.version !== 'B')) return undefined;
  const of = readScore(r.of);
  const right = of && readScore(r.right, of);
  return of && right ? { day: r.day, version: r.version, right, of } : undefined;
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
