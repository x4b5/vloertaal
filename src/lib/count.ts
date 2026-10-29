/**
 * Anonymous usage counting, without tracking: what the privacy text says (Settings, About) and
 * nothing more — how often lessons are done, and about how long they take. Counted on GoatCounter
 * (cookieless): **one request per event**, whose path names only content: the event, the lesson,
 * and for a stopped lesson the quarter it was stopped in, for a finished one a band of minutes.
 * Nothing about the learner goes along: no help language, no sector, no version, no id, no name.
 * (GoatCounter itself sees the request's IP address and browser, as every web server does; with
 * only content in the path, a count cannot say who it was.)
 *
 * Started, stopped and finished per lesson show where learners give up (docs/pilot.md).
 *
 * Nothing is sent:
 * - in development and tests (only a production build on vloertaal.nl counts, not a preview);
 * - when the learner switched "Anoniem meetellen" off in Settings;
 * - when the browser asks not to be tracked (Do Not Track, Global Privacy Control).
 */

/** The owner's GoatCounter site; its root is also the dashboard. */
export const COUNTER: string = (import.meta.env.VITE_COUNTER_URL as string | undefined) || 'https://vloertaal.goatcounter.com';

export type CountEvent = 'lesson-start' | 'lesson-quit' | 'lesson-done' | 'review-done' | 'unit-done';

/** What a count may say: only about the content, never about the learner. */
export interface CountDims {
  /** The lesson (content, not a person): with lesson-start, lesson-quit and lesson-done. */
  lesson?: string;
  /** lesson-quit: how far the lesson got, 1–4 (the quarter it was stopped in, see quarterOf). */
  quarter?: number;
  /** lesson-done, review-done: minutes the lesson was on screen, counted as a band (see minutesBand). */
  minutes?: number;
}

/** How long a lesson took, as a band: "t0-2", "t2-5", "t5-10" or "t10plus" (minutes). */
export function minutesBand(minutes: number): string {
  if (minutes < 2) return 't0-2';
  if (minutes < 5) return 't2-5';
  if (minutes < 10) return 't5-10';
  return 't10plus';
}

/** The quarter (1–4) of a lesson a learner stopped in: at step `step` (0-based) of `steps`. */
export function quarterOf(step: number, steps: number): number {
  if (steps <= 0) return 1;
  return Math.min(4, Math.max(1, Math.floor((step / steps) * 4) + 1));
}

/** The time a lesson is on screen: ms counted so far, and since when it runs (null while paused). */
export interface LessonClock { ms: number; since: number | null }
export const startClock = (now = Date.now()): LessonClock => ({ ms: 0, since: now });
export const pauseClock = (c: LessonClock, now = Date.now()): LessonClock => (c.since === null ? c : { ms: c.ms + Math.max(0, now - c.since), since: null });
export const resumeClock = (c: LessonClock, now = Date.now()): LessonClock => (c.since === null ? { ms: c.ms, since: now } : c);
/** Minutes on screen up to now. */
export const clockMinutes = (c: LessonClock, now = Date.now()): number => pauseClock(c, now).ms / 60000;

const OFF_KEY = 'vloertaal:count-off';

interface Env {
  prod: boolean;
  host: string;
  dnt: boolean;
}

const realEnv = (): Env => ({
  prod: Boolean(import.meta.env.PROD),
  host: typeof location === 'undefined' ? '' : location.hostname,
  // Do Not Track, and its successor Global Privacy Control: both mean "don't count me".
  dnt: typeof navigator !== 'undefined' && (navigator.doNotTrack === '1' || (globalThis as { doNotTrack?: string }).doNotTrack === '1'
    || (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true),
});

let envOverride: Partial<Env> | null = null;
/** Tests only: pretend to be a production build on a host, with or without Do Not Track. */
export function setCountEnv(env: Partial<Env> | null): void {
  envOverride = env;
}
const env = (): Env => ({ ...realEnv(), ...envOverride });

/** The only hosts that count: the live site. Previews (*.vercel.app), localhost and copies never do. */
const LIVE = /^(www\.)?vloertaal\.nl$/;

function storage(): Storage | null {
  try {
    return typeof localStorage === 'undefined' ? null : localStorage;
  } catch {
    return null;
  }
}

/** The switch while storage is blocked: switched off holds for this visit (nothing is sent). */
let offMemory = false;

/** "Anoniem meetellen": on unless the learner switched it off on this device. */
export function countingOn(): boolean {
  if (offMemory) return false;
  try {
    return storage()?.getItem(OFF_KEY) !== '1';
  } catch {
    return true;
  }
}

export function setCounting(on: boolean): void {
  offMemory = !on;
  try {
    if (on) storage()?.removeItem(OFF_KEY);
    else storage()?.setItem(OFF_KEY, '1');
  } catch {
    // Blocked storage: nothing to remember (and nothing is kept either way).
  }
}

/** True when an event may be sent from here, now. */
export function mayCount(): boolean {
  const e = env();
  return e.prod && LIVE.test(e.host) && !e.dnt && countingOn();
}

/** A lesson id as a path segment: "l.cv" → "l-cv", "r.l.loon.1" → "r-l-loon-1". */
const lessonSeg = (id: string) => id.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || 'x';

/**
 * The one path an event is counted under: the event, then the lesson, then the quarter it was
 * stopped in or the band of minutes it took ("/e/lesson-quit/l-cv/q2", "/e/review-done/t2-5").
 */
export function countPath(event: CountEvent, dims: CountDims = {}): string {
  const q = dims.quarter ? `q${Math.min(4, Math.max(1, Math.round(dims.quarter)))}` : '';
  const t = dims.minutes !== undefined && Number.isFinite(dims.minutes) ? minutesBand(dims.minutes) : '';
  return ['/e', event, dims.lesson ? lessonSeg(dims.lesson) : '', q, t].filter(Boolean).join('/');
}

function send(url: string): void {
  try {
    if (typeof fetch === 'function') {
      fetch(url, { method: 'GET', mode: 'no-cors', keepalive: true, credentials: 'omit', cache: 'no-store', referrerPolicy: 'no-referrer' }).catch(() => {});
    } else if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      navigator.sendBeacon(url);
    }
  } catch {
    // Counting never gets in the way of learning.
  }
}

/** Counts one event (one request). A no-op unless mayCount(). */
export function count(event: CountEvent, dims: CountDims = {}): boolean {
  if (!mayCount()) return false;
  const base = COUNTER.replace(/\/+$/, '');
  send(`${base}/count?p=${encodeURIComponent(countPath(event, dims))}&e=true&t=${encodeURIComponent(event)}`);
  return true;
}
