import { dayKey } from './progress';

/**
 * Anonymous usage counting, without tracking. A few events (the app opened today, a lesson
 * started, stopped or finished, a review or a unit finished) are counted on GoatCounter
 * (cookieless): one request per event, plus one per aggregate dimension (the help language, the
 * sector, and for a lesson which lesson and, when it is stopped, in which quarter). Every
 * dimension is its own count, never combined with another, so nothing singles anyone out. No
 * cookies, no ids of people, no names, nothing stored about the learner on our side.
 *
 * Started, stopped and finished per lesson show where learners give up (docs/pilot.md). A finished
 * lesson also says roughly how long it took (a band of minutes, never a time of day), and every
 * event which version it came from (the sneak preview without a code, or the full version), so
 * the owner sees how many only look and how many ask for a code ('unlock').
 *
 * Nothing is sent:
 * - in development and tests (only a production build on vloertaal.nl counts, not a preview);
 * - when the learner switched "Anoniem meetellen" off in Settings;
 * - when the browser asks not to be tracked (Do Not Track).
 */

/** The owner's GoatCounter site; its root is also the dashboard. */
export const COUNTER: string = (import.meta.env.VITE_COUNTER_URL as string | undefined) || 'https://vloertaal.goatcounter.com';

export type CountEvent = 'open' | 'lesson-start' | 'lesson-quit' | 'lesson-done' | 'review-done' | 'unit-done' | 'unlock';

/** The only dimensions ever sent, each counted on its own: never a time, a person or anything else that could single someone out. */
export interface CountDims {
  /** Help-language code; null/undefined = English only. */
  lang?: string | null;
  /** Sector id, 'none', or undefined when not chosen yet. */
  sector?: string | null;
  /** The lesson (content, not a person): with lesson-start, lesson-quit and lesson-done. */
  lesson?: string;
  /** lesson-quit: how far the lesson got, 1–4 (the quarter it was stopped in, see quarterOf). */
  quarter?: number;
  /** The version in use: 'sample' (the sneak preview, no code), 'preview', 'full'; null = no access yet. With 'unlock': the version before the code. */
  access?: string | null;
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
const OPEN_KEY = 'vloertaal:count-open';

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

/** A dimension value as a short, safe path segment. */
const seg = (v: string) => v.toLowerCase().replace(/[^a-z0-9-]/g, '').slice(0, 24) || 'x';

/** A lesson id as a path segment: "l.cv" → "l-cv", "r.l.loon.1" → "r-l-loon-1". */
const lessonSeg = (id: string) => id.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || 'x';

/**
 * The paths one event is counted under: the event, and the event per language, per sector and
 * per version; with a lesson also per lesson (and per quarter or band of minutes: overall and in
 * that lesson).
 */
export function countPaths(event: CountEvent, dims: CountDims = {}): string[] {
  const paths = [
    `/e/${event}`,
    `/e/${event}/lang-${seg(dims.lang || 'en')}`,
    `/e/${event}/sector-${seg(dims.sector || 'unknown')}`,
  ];
  if (dims.access !== undefined) paths.push(`/e/${event}/access-${seg(dims.access || 'none')}`);
  const q = dims.quarter ? `q${Math.min(4, Math.max(1, Math.round(dims.quarter)))}` : '';
  if (q) paths.push(`/e/${event}/${q}`);
  const t = dims.minutes !== undefined && Number.isFinite(dims.minutes) ? minutesBand(dims.minutes) : '';
  if (t) paths.push(`/e/${event}/${t}`);
  if (dims.lesson) {
    const l = `/e/${event}/lesson/${lessonSeg(dims.lesson)}`;
    paths.push(l, ...(q ? [`${l}/${q}`] : []), ...(t ? [`${l}/${t}`] : []));
  }
  return paths;
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

/** Counts one event (and its language and sector variants). A no-op unless mayCount(). */
export function count(event: CountEvent, dims: CountDims = {}): boolean {
  if (!mayCount()) return false;
  const base = COUNTER.replace(/\/+$/, '');
  for (const p of countPaths(event, dims)) {
    send(`${base}/count?p=${encodeURIComponent(p)}&e=true&t=${encodeURIComponent(event)}`);
  }
  return true;
}

/** "open": at most once per local day per device (the day is kept in localStorage). */
export function countOpen(dims: CountDims = {}, now = new Date()): boolean {
  if (!mayCount()) return false;
  const today = dayKey(now);
  try {
    const s = storage();
    if (!s || s.getItem(OPEN_KEY) === today) return false;
    s.setItem(OPEN_KEY, today);
  } catch {
    // Without storage we can't tell a second open from the first: don't count it at all.
    return false;
  }
  return count('open', dims);
}
