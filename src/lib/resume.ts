/**
 * Resume an interrupted lesson. A lesson is built from a seed (buildLesson), so the save keeps
 * the seed instead of the exercises: the same seed rebuilds the same list, and the mistakes that
 * come back are kept as indexes into that list. One save per lesson, in localStorage on this
 * device only; a save older than two days is dropped.
 */

const KEY = 'vloertaal:resume';
/** A save older than this is not offered any more (and is removed). */
export const RESUME_MAX_AGE = 2 * 24 * 60 * 60 * 1000;

export interface LessonSave {
  lessonId: string;
  review: boolean;
  /** "Without sound" when the lesson started: it decides which exercises were built. */
  quiet: boolean;
  seed: number;
  /** Exercises in the list built from the seed, and their kinds: a changed lesson is not resumed. */
  planned: number;
  kinds: string;
  /** The exercise to go on with (the next one after the last answer). */
  index: number;
  /** Mistakes queued to come back, as indexes into the built list. */
  repeats: number[];
  /** Graded exercises answered right the first time, and graded so far. */
  right: number;
  total: number;
  /** Per word asked on its own: right every first time so far? */
  words: Record<string, boolean>;
  /** Right answers in a row, and misses in a row. */
  run: number;
  misses: number;
  /** When it was saved (ms since 1970). */
  savedAt: number;
}

type Saves = Record<string, LessonSave>;

function storage(): Storage | null {
  try {
    return typeof localStorage === 'undefined' ? null : localStorage;
  } catch {
    return null;
  }
}

const isNum = (n: unknown): n is number => typeof n === 'number' && Number.isFinite(n);

/** A save as read back from storage, or null when it is not a usable save. */
export function parseSave(v: unknown): LessonSave | null {
  if (!v || typeof v !== 'object') return null;
  const s = v as Partial<LessonSave>;
  if (typeof s.lessonId !== 'string' || typeof s.review !== 'boolean' || typeof s.kinds !== 'string') return null;
  if (![s.seed, s.planned, s.index, s.right, s.total, s.run, s.misses, s.savedAt].every(isNum)) return null;
  if (!Array.isArray(s.repeats) || !s.repeats.every((i) => isNum(i) && i >= 0 && i < s.planned!)) return null;
  if (s.index! < 0 || s.index! >= s.planned! + s.repeats.length) return null;
  if (s.right! > s.total! || s.total! > s.planned!) return null;
  const words = s.words && typeof s.words === 'object' ? s.words : {};
  return { ...(s as LessonSave), quiet: Boolean(s.quiet), words };
}

/** Is the save still offered at `now`? */
export function fresh(save: LessonSave, now: number): boolean {
  return now - save.savedAt >= 0 && now - save.savedAt < RESUME_MAX_AGE;
}

function readAll(): Saves {
  const s = storage();
  if (!s) return {};
  try {
    const raw = JSON.parse(s.getItem(KEY) ?? '{}') as unknown;
    return raw && typeof raw === 'object' ? (raw as Saves) : {};
  } catch {
    return {};
  }
}

function writeAll(saves: Saves): void {
  const s = storage();
  if (!s) return;
  try {
    if (Object.keys(saves).length) s.setItem(KEY, JSON.stringify(saves));
    else s.removeItem(KEY);
  } catch { /* storage full or blocked: the lesson just isn't resumable */ }
}

/** Every usable save that is still fresh; stale or broken ones are removed from storage. */
export function loadSaves(now = Date.now()): Saves {
  const all = readAll();
  const out: Saves = {};
  for (const [id, v] of Object.entries(all)) {
    const save = parseSave(v);
    if (save && save.lessonId === id && fresh(save, now)) out[id] = save;
  }
  if (Object.keys(out).length !== Object.keys(all).length) writeAll(out);
  return out;
}

/** The fresh save of one lesson, if any. */
export function loadSave(lessonId: string, now = Date.now()): LessonSave | null {
  return loadSaves(now)[lessonId] ?? null;
}

export function writeSave(save: LessonSave): void {
  writeAll({ ...loadSaves(save.savedAt), [save.lessonId]: save });
}

/** Clear a lesson's save (finished, or "Opnieuw beginnen"); without an id, every save (reset). */
export function clearSave(lessonId?: string): void {
  if (!lessonId) return writeAll({});
  const all = loadSaves();
  if (!(lessonId in all)) return;
  delete all[lessonId];
  writeAll(all);
}

/** "12/18" on the path: exercises done, out of all (the mistakes that come back included). */
export function resumeCount(save: LessonSave): { done: number; of: number } {
  return { done: save.index, of: save.planned + save.repeats.length };
}

/** The fingerprint of a built list: its kinds in order. */
export function kindsOf(list: readonly { kind: string }[]): string {
  return list.map((e) => e.kind[0] + e.kind[1]).join('');
}

/**
 * A save for the lesson state: `queue` is the built list plus the queued mistakes (the same
 * objects), `index` the exercise to go on with. Null when there is nothing to save yet.
 */
export function makeSave<T extends { kind: string }>(args: {
  lessonId: string; review: boolean; quiet: boolean; seed: number;
  initial: readonly T[]; queue: readonly T[]; index: number;
  right: number; total: number; words: Record<string, boolean>; run: number; misses: number; now: number;
}): LessonSave | null {
  const { initial, queue, index } = args;
  if (index <= 0 || index >= queue.length) return null;
  const repeats = queue.slice(initial.length).map((e) => initial.indexOf(e));
  if (repeats.some((i) => i < 0)) return null;
  return {
    lessonId: args.lessonId, review: args.review, quiet: args.quiet, seed: args.seed,
    planned: initial.length, kinds: kindsOf(initial), index, repeats,
    right: args.right, total: args.total, words: { ...args.words }, run: args.run, misses: args.misses,
    savedAt: args.now,
  };
}

/**
 * The lesson state from a save and the list rebuilt from its seed; null when the rebuilt list
 * does not match (the lesson changed in an update), so the lesson starts fresh.
 */
export function restoreSave<T extends { kind: string }>(save: LessonSave, initial: readonly T[]): { queue: T[]; index: number } | null {
  if (initial.length !== save.planned || kindsOf(initial) !== save.kinds) return null;
  const queue = [...initial, ...save.repeats.map((i) => initial[i])];
  if (save.index >= queue.length) return null;
  return { queue, index: save.index };
}
