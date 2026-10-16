import { dayKey } from './progress';

/**
 * Anonymous usage counting, without tracking. A few events (the app opened today, a lesson
 * started, stopped or finished, a review or a unit finished) are counted on GoatCounter
 * (cookieless): one request per event, plus one per aggregate dimension (the help language, the
 * sector, and for a lesson which lesson and, when it is stopped, in which quarter). Every
 * dimension is its own count, never combined with another, so nothing singles anyone out. No
 * cookies, no ids of people, no names, nothing stored about the learner on our side.
 *
 * Started, stopped and finished per lesson show where learners give up (docs/pilot.md).
 *
 * Nothing is sent:
 * - in development and tests (only a production build on a real host counts);
 * - when the learner switched "Anoniem meetellen" off in Settings;
 * - when the browser asks not to be tracked (Do Not Track).
 */

/** The owner's GoatCounter site; its root is also the dashboard. */
export const COUNTER: string = (import.meta.env.VITE_COUNTER_URL as string | undefined) || 'https://vloertaal.goatcounter.com';

export type CountEvent = 'open' | 'lesson-start' | 'lesson-quit' | 'lesson-done' | 'review-done' | 'unit-done';

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
}

/** The quarter (1–4) of a lesson a learner stopped in: at step `step` (0-based) of `steps`. */
export function quarterOf(step: number, steps: number): number {
  if (steps <= 0) return 1;
  return Math.min(4, Math.max(1, Math.floor((step / steps) * 4) + 1));
}

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
  dnt: typeof navigator !== 'undefined' && (navigator.doNotTrack === '1' || (globalThis as { doNotTrack?: string }).doNotTrack === '1'),
});

let envOverride: Partial<Env> | null = null;
/** Tests only: pretend to be a production build on a host, with or without Do Not Track. */
export function setCountEnv(env: Partial<Env> | null): void {
  envOverride = env;
}
const env = (): Env => ({ ...realEnv(), ...envOverride });

const LOCAL = /^(localhost|127\.\d+\.\d+\.\d+|\[?::1\]?|0\.0\.0\.0|.*\.local)$/;

function storage(): Storage | null {
  try {
    return typeof localStorage === 'undefined' ? null : localStorage;
  } catch {
    return null;
  }
}

/** "Anoniem meetellen": on unless the learner switched it off on this device. */
export function countingOn(): boolean {
  try {
    return storage()?.getItem(OFF_KEY) !== '1';
  } catch {
    return true;
  }
}

export function setCounting(on: boolean): void {
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
  return e.prod && Boolean(e.host) && !LOCAL.test(e.host) && !e.dnt && countingOn();
}

/** A dimension value as a short, safe path segment. */
const seg = (v: string) => v.toLowerCase().replace(/[^a-z0-9-]/g, '').slice(0, 24) || 'x';

/** A lesson id as a path segment: "l.cv" → "l-cv", "r.l.loon.1" → "r-l-loon-1". */
const lessonSeg = (id: string) => id.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || 'x';

/**
 * The paths one event is counted under: the event, and the event per language and per sector;
 * with a lesson also per lesson (and per quarter: overall and in that lesson).
 */
export function countPaths(event: CountEvent, dims: CountDims = {}): string[] {
  const paths = [
    `/e/${event}`,
    `/e/${event}/lang-${seg(dims.lang || 'en')}`,
    `/e/${event}/sector-${seg(dims.sector || 'unknown')}`,
  ];
  const q = dims.quarter ? `q${Math.min(4, Math.max(1, Math.round(dims.quarter)))}` : '';
  if (q) paths.push(`/e/${event}/${q}`);
  if (dims.lesson) paths.push(`/e/${event}/lesson/${lessonSeg(dims.lesson)}`, ...(q ? [`/e/${event}/lesson/${lessonSeg(dims.lesson)}/${q}`] : []));
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
