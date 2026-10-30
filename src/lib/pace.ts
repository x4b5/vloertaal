import type { Cards } from './spaced';
import type { Tempo } from './tempo';
import { isTempo } from './tempo';

/**
 * Lessons that follow the learner's level (spoor Taal, docs: werkplan 2.2). Only on this phone.
 *
 *  - "Wil je sneller?": after FLAWLESS_RUN lessons in a row without a mistake, the result screen
 *    asks it once (Ja / Nee). Ja: new lessons have less introduction (one check after the new
 *    words instead of one after every two, see buildLesson `fast`) and the Dutch plays at the
 *    tempo "Normaal". Settings (Lessen › Sneller leren) turns it off again, and the tempo goes
 *    back to what it was.
 *  - Many mistakes (EASE_BELOW right the first time, in a lesson with at least EASE_MIN graded
 *    questions): the next lesson is shorter (buildLesson `easy`: one sentence fewer to build, no
 *    extra listening question or saying at the end, all the introduction) and the words and
 *    sentences that went wrong come back in today's review already. Said in one plain line,
 *    without a word about mistakes.
 *
 * Why below 60% of at least 6: a lesson asks about 12 to 18 graded questions; under 60% means 5 or
 * more wrong the first time, more than a slip or two, and the mistakes already came back once at
 * the end of the lesson. A lesson with fewer than 6 graded questions (a short rule-free review) is
 * too small to tell.
 *
 * Only lessons of the language track count (the work-rules track has its own lessons, no
 * introduction cards and no tempo), and not today's review (its words are old ones).
 */
export const FLAWLESS_RUN = 3;
export const EASE_BELOW = 0.6;
export const EASE_MIN = 6;

export interface PaceState {
  /** Lessons in a row without a mistake (reset by any lesson with one). */
  run?: number;
  /** "Wil je sneller?" was asked (the day): it does not come back by itself. */
  asked?: string;
  /** Ja: less introduction and the tempo "Normaal". */
  faster?: boolean;
  /** The tempo before Ja, to go back to when "sneller" is turned off. */
  tempoBefore?: Tempo;
  /** The next lesson is a shorter one (after many mistakes). */
  ease?: boolean;
}

const isDay = (v: unknown): v is string => typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v);

/** The pace in a save, as far as it can be read (older saves have none: undefined). */
export function readPace(raw: unknown): PaceState | undefined {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return undefined;
  const r = raw as Record<string, unknown>;
  const out: PaceState = {};
  if (typeof r.run === 'number' && Number.isInteger(r.run) && r.run >= 0 && r.run < 1000) out.run = r.run;
  if (isDay(r.asked)) out.asked = r.asked;
  if (r.faster === true) out.faster = true;
  if (isTempo(r.tempoBefore)) out.tempoBefore = r.tempoBefore;
  if (r.ease === true) out.ease = true;
  return out;
}

/** What the next lesson is built with (buildLesson): `easy` wins, it keeps all the introduction. */
export function lessonPace(p: { pace?: PaceState }): { fast: boolean; easy: boolean } {
  const easy = Boolean(p.pace?.ease);
  return { easy, fast: !easy && Boolean(p.pace?.faster) };
}

/** A finished lesson of the language track (not today's review): the pace after it. */
export function paceAfterLesson(pace: PaceState | undefined, right: number, total: number, day: string): { pace: PaceState; ask: boolean; easier: boolean } {
  const before = pace ?? {};
  const flawless = total > 0 && right === total;
  const easier = total >= EASE_MIN && right / total < EASE_BELOW;
  const run = flawless ? (before.run ?? 0) + 1 : 0;
  const ask = flawless && run >= FLAWLESS_RUN && !before.asked && !before.faster && !easier;
  const next: PaceState = { ...before, run };
  // The shorter lesson was this one: the next is a normal one again (unless this one went the same way).
  if (easier) next.ease = true;
  else delete next.ease;
  if (ask) next.asked = day;
  return { pace: next, ask, easier };
}

/** "Wil je sneller?" answered, or "Sneller leren" in Settings: on (Ja) or off (Nee). */
export function setFaster<P extends { pace?: PaceState; tempo?: Tempo }>(p: P, on: boolean, day?: string): P {
  const pace: PaceState = { ...(p.pace ?? {}) };
  if (day && !pace.asked) pace.asked = day;
  if (on) {
    if (pace.faster) return { ...p, pace };
    return { ...p, tempo: 'normal', pace: { ...pace, faster: true, tempoBefore: p.tempo ?? 'calm' } };
  }
  const { faster: _, tempoBefore, ...rest } = pace;
  // Back to the tempo from before (only when "sneller" had set it).
  return pace.faster ? { ...p, tempo: tempoBefore ?? 'calm', pace: rest } : { ...p, pace: rest };
}

/** "Sneller leren" is on. */
export const fasterOn = (p: { pace?: PaceState }): boolean => Boolean(p.pace?.faster);

/**
 * Extra review after many mistakes: the cards answered wrong in the lesson are due today, so
 * today's review (or its extra round) brings them back. Only cards that are in the box.
 */
export function reviewSoon(cards: Cards, results: Record<string, boolean>, today: string): Cards {
  const wrong = Object.keys(results).filter((id) => results[id] === false && cards[id]);
  if (!wrong.length) return cards;
  const next = { ...cards };
  for (const id of wrong) next[id] = { box: 1, due: today };
  return next;
}
