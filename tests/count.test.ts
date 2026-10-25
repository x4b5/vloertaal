import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { clockMinutes, count, countOpen, countPaths, mayCount, minutesBand, pauseClock, quarterOf, resumeClock, setCountEnv, setCounting, startClock } from '../src/lib/count';

const store = new Map<string, string>();
const ls = {
  getItem: (k: string) => store.get(k) ?? null,
  setItem: (k: string, v: string) => void store.set(k, v),
  removeItem: (k: string) => void store.delete(k),
};
const fetchMock = vi.fn(() => Promise.resolve(new Response()));
const PROD = { prod: true, host: 'vloertaal.nl', dnt: false };

beforeEach(() => {
  store.clear();
  fetchMock.mockClear();
  (globalThis as { localStorage?: unknown }).localStorage = ls;
  vi.stubGlobal('fetch', fetchMock);
});
afterEach(() => {
  setCountEnv(null);
  vi.unstubAllGlobals();
});

describe('anonymous counting', () => {
  it('sends nothing outside a production build (dev, tests, localhost)', () => {
    expect(mayCount()).toBe(false);
    expect(count('lesson-done', { lang: 'ti', sector: 'care' })).toBe(false);
    setCountEnv({ ...PROD, host: 'localhost' });
    expect(count('lesson-done')).toBe(false);
    setCountEnv({ ...PROD, prod: false });
    expect(count('lesson-done')).toBe(false);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('only counts on vloertaal.nl itself, never on preview or other hosts', () => {
    for (const host of ['vloertaal-git-feat-x-x4b5.vercel.app', 'vloertaal.vercel.app', 'example.org', 'vloertaal.nl.evil.com']) {
      setCountEnv({ ...PROD, host });
      expect(mayCount()).toBe(false);
    }
    expect(fetchMock).not.toHaveBeenCalled();
    for (const host of ['vloertaal.nl', 'www.vloertaal.nl']) {
      setCountEnv({ ...PROD, host });
      expect(mayCount()).toBe(true);
    }
  });

  it('sends the event plus its language and sector variant, without cookies', () => {
    setCountEnv(PROD);
    expect(count('lesson-done', { lang: 'ti', sector: 'construction' })).toBe(true);
    const urls = fetchMock.mock.calls.map((c) => String((c as unknown[])[0]));
    expect(urls).toHaveLength(3);
    expect(urls[0]).toBe('https://vloertaal.goatcounter.com/count?p=%2Fe%2Flesson-done&e=true&t=lesson-done');
    expect(urls[1]).toContain('p=%2Fe%2Flesson-done%2Flang-ti&');
    expect(urls[2]).toContain('p=%2Fe%2Flesson-done%2Fsector-construction&');
    const init = (fetchMock.mock.calls[0] as unknown[])[1] as RequestInit;
    expect(init).toMatchObject({ mode: 'no-cors', keepalive: true, credentials: 'omit' });
  });

  it('only ever uses language and sector as dimensions (and the version), and for a lesson which one and where it stopped', () => {
    expect(countPaths('unit-done', {})).toEqual(['/e/unit-done', '/e/unit-done/lang-en', '/e/unit-done/sector-unknown']);
    expect(countPaths('open', { lang: 'x/../?a=1', sector: 'care' })[1]).toBe('/e/open/lang-xa1');
    expect(countPaths('lesson-start', { lang: 'pl', lesson: 'l.cv' })).toEqual([
      '/e/lesson-start', '/e/lesson-start/lang-pl', '/e/lesson-start/sector-unknown', '/e/lesson-start/lesson/l-cv',
    ]);
    // Each dimension on its own path: a lesson is never combined with a language or a sector.
    expect(countPaths('lesson-quit', { lang: 'ti', sector: 'care', lesson: 'r.l.loon.1', quarter: 2 })).toEqual([
      '/e/lesson-quit', '/e/lesson-quit/lang-ti', '/e/lesson-quit/sector-care', '/e/lesson-quit/q2',
      '/e/lesson-quit/lesson/r-l-loon-1', '/e/lesson-quit/lesson/r-l-loon-1/q2',
    ]);
    expect(countPaths('lesson-quit', { lesson: '../x?y', quarter: 9 }).slice(-2)).toEqual(['/e/lesson-quit/lesson/x-y', '/e/lesson-quit/lesson/x-y/q4']);
  });

  it('the version (sneak preview or full) and how long a finished lesson took, each on its own path too', () => {
    expect(countPaths('open', { lang: 'pl', sector: 'care', access: 'sample' })).toEqual([
      '/e/open', '/e/open/lang-pl', '/e/open/sector-care', '/e/open/access-sample',
    ]);
    // A code for the full version, after the sneak preview (or on the code page: no access yet).
    expect(countPaths('unlock', { lang: 'ar', access: 'sample' }).at(-1)).toBe('/e/unlock/access-sample');
    expect(countPaths('unlock', { access: null }).at(-1)).toBe('/e/unlock/access-none');
    expect(countPaths('lesson-done', { lang: 'uk', lesson: 'l.cv', access: 'full', minutes: 3.4 })).toEqual([
      '/e/lesson-done', '/e/lesson-done/lang-uk', '/e/lesson-done/sector-unknown', '/e/lesson-done/access-full',
      '/e/lesson-done/t2-5', '/e/lesson-done/lesson/l-cv', '/e/lesson-done/lesson/l-cv/t2-5',
    ]);
    expect(countPaths('review-done', { minutes: Number.NaN })).toEqual(['/e/review-done', '/e/review-done/lang-en', '/e/review-done/sector-unknown']);
  });

  it('bands of minutes, and the clock leaves out the time the app is out of view', () => {
    expect([0, 1.9, 2, 4.99, 5, 9.9, 10, 95].map(minutesBand)).toEqual(['t0-2', 't0-2', 't2-5', 't2-5', 't5-10', 't5-10', 't10plus', 't10plus']);
    const min = 60000;
    let c = startClock(0);
    c = pauseClock(c, 3 * min); // 3 minutes, then the phone in the pocket
    c = resumeClock(c, 60 * min); // back an hour later
    expect(clockMinutes(c, 61 * min)).toBe(4);
    // Pausing twice or resuming twice changes nothing.
    expect(pauseClock(pauseClock(c, 61 * min), 70 * min).ms).toBe(4 * min);
    expect(resumeClock(c, 65 * min)).toBe(c);
  });

  it('the quarter a lesson was stopped in', () => {
    expect(quarterOf(0, 12)).toBe(1);
    expect(quarterOf(2, 12)).toBe(1);
    expect(quarterOf(3, 12)).toBe(2);
    expect(quarterOf(6, 12)).toBe(3);
    expect(quarterOf(11, 12)).toBe(4);
    expect(quarterOf(20, 12)).toBe(4);
    expect(quarterOf(0, 0)).toBe(1);
  });

  it('counts the work-rules track under its own language, lang-nl (no new dimension)', () => {
    expect(countPaths('lesson-done', { lang: 'nl', sector: 'care' })).toEqual(['/e/lesson-done', '/e/lesson-done/lang-nl', '/e/lesson-done/sector-care']);
    setCountEnv(PROD);
    expect(countOpen({ lang: 'nl', sector: 'construction' })).toBe(true);
    const urls = fetchMock.mock.calls.map((c) => String((c as unknown[])[0]));
    expect(urls.some((u) => u.includes('p=%2Fe%2Fopen%2Flang-nl&'))).toBe(true);
  });

  it('sends nothing when switched off in Settings, and again when switched on', () => {
    setCountEnv(PROD);
    setCounting(false);
    expect(count('review-done')).toBe(false);
    expect(fetchMock).not.toHaveBeenCalled();
    setCounting(true);
    expect(count('review-done')).toBe(true);
  });

  it('respects Do Not Track', () => {
    setCountEnv({ ...PROD, dnt: true });
    expect(count('unit-done')).toBe(false);
    expect(countOpen({}, new Date(2026, 9, 8))).toBe(false);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('counts "open" at most once per local day per device', () => {
    setCountEnv(PROD);
    expect(countOpen({ lang: 'ar' }, new Date(2026, 9, 8, 7))).toBe(true);
    expect(countOpen({ lang: 'ar' }, new Date(2026, 9, 8, 23))).toBe(false);
    expect(fetchMock).toHaveBeenCalledTimes(3);
    expect(countOpen({ lang: 'ar' }, new Date(2026, 9, 9, 6))).toBe(true);
    expect(fetchMock).toHaveBeenCalledTimes(6);
  });

  it('does not count "open" when it is switched off (and does not use up the day)', () => {
    setCountEnv(PROD);
    setCounting(false);
    expect(countOpen({}, new Date(2026, 9, 8))).toBe(false);
    setCounting(true);
    expect(countOpen({}, new Date(2026, 9, 8))).toBe(true);
  });
});
