import { dayKey } from './progress';

/**
 * Anonymous usage counting, without tracking. A few events (the app opened today, a lesson,
 * a review or a unit finished) are counted on GoatCounter (cookieless): one request per event,
 * plus one per aggregate dimension (the help language and the sector). No cookies, no ids,
 * no names, no lesson ids, nothing stored about the learner on our side.
 *
 * Nothing is sent:
 * - in development and tests (only a production build on a real host counts);
 * - when the learner switched "Anoniem meetellen" off in Settings;
 * - when the browser asks not to be tracked (Do Not Track).
 */

/** The owner's GoatCounter site; its root is also the dashboard. */
export const COUNTER: string = (import.meta.env.VITE_COUNTER_URL as string | undefined) || 'https://vloertaal.goatcounter.com';

export type CountEvent = 'open' | 'lesson-done' | 'review-done' | 'unit-done';

/** The only dimensions ever sent: never a lesson id, a time or anything else that could single someone out. */
export interface CountDims {
  /** Help-language code; null/undefined = English only. */
  lang?: string | null;
  /** Sector id, 'none', or undefined when not chosen yet. */
  sector?: string | null;
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
  dnt: typeof navigator !== 'undefined' && (navigator.doNotTrack === '1' || (window as { doNotTrack?: string }).doNotTrack === '1'),
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

/** The paths one event is counted under: the event, and the event per language and per sector. */
export function countPaths(event: CountEvent, dims: CountDims = {}): string[] {
  return [
    `/e/${event}`,
    `/e/${event}/lang-${seg(dims.lang || 'en')}`,
    `/e/${event}/sector-${seg(dims.sector || 'unknown')}`,
  ];
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
