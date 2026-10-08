import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { count, countOpen, countPaths, mayCount, setCountEnv, setCounting } from '../src/lib/count';

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

  it('only ever uses language and sector as dimensions', () => {
    expect(countPaths('unit-done', {})).toEqual(['/e/unit-done', '/e/unit-done/lang-en', '/e/unit-done/sector-unknown']);
    expect(countPaths('open', { lang: 'x/../?a=1', sector: 'care' })[1]).toBe('/e/open/lang-xa1');
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
