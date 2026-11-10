import { readFileSync } from 'node:fs';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { setCountEnv, setCounting } from '../src/lib/count';
import { countFeel, FACES, FEEL_AT, feelDue, feelPath, markFeelAsked } from '../src/lib/feel';
import { PRIVACY } from '../src/lib/privacyPage';
import { languageMeta } from '../src/i18n/meta';
import { uiEn } from '../src/i18n/types';

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
  setCounting(true);
  vi.unstubAllGlobals();
});

describe('"Wat vind je van Vloertaal?" (src/lib/feel.ts)', () => {
  it('asks after the 3rd and the 15th finished lesson, once each', () => {
    expect(FEEL_AT).toEqual([3, 15]);
    expect(feelDue(2, true)).toBeUndefined();
    expect(feelDue(3, true)).toBe(3);
    markFeelAsked(3);
    expect(feelDue(3, true)).toBeUndefined();
    expect(feelDue(14, true)).toBeUndefined();
    expect(feelDue(15, true)).toBe(15);
    markFeelAsked(15);
    expect(feelDue(40, true)).toBeUndefined();
  });

  it('asks a learner past both moments once, not twice', () => {
    expect(feelDue(20, true)).toBe(15);
    markFeelAsked(15);
    expect(feelDue(21, true)).toBeUndefined();
    expect(store.get('vloertaal:gevoel')).toBe('3,15');
  });

  it('asks nothing where the answer could not be counted, or the phone cannot remember it asked', () => {
    expect(feelDue(3)).toBeUndefined(); // tests: not the live site
    setCountEnv(PROD);
    expect(feelDue(3)).toBe(3);
    setCounting(false);
    expect(feelDue(3)).toBeUndefined();
    setCounting(true);
    setCountEnv({ ...PROD, dnt: true });
    expect(feelDue(3)).toBeUndefined();
    (globalThis as { localStorage?: unknown }).localStorage = undefined;
    expect(feelDue(3, true)).toBeUndefined();
  });

  it('counts only the face and the moment', () => {
    expect(feelPath(3, 'blij')).toBe('/e/gevoel/na-3/blij');
    expect(FACES).toEqual(['niet-blij', 'gewoon', 'blij']);
    expect(countFeel(15, 'gewoon')).toBe(false);
    expect(fetchMock).not.toHaveBeenCalled();
    setCountEnv(PROD);
    expect(countFeel(15, 'gewoon')).toBe(true);
    const url = String((fetchMock.mock.calls[0] as unknown[])[0]);
    expect(decodeURIComponent(url)).toContain('p=/e/gevoel/na-15/gewoon');
  });

  it('is in the privacy text, and in every help language', () => {
    expect(JSON.stringify(PRIVACY)).toContain('drie gezichtjes');
    for (const key of ['feelAsk', 'feelGood', 'feelOk', 'feelBad', 'feelThanks'] as const) {
      expect(uiEn[key]).toBeTruthy();
      expect(readFileSync('src/i18n/nl.ts', 'utf8')).toContain(`${key}:`);
      for (const l of languageMeta) expect(readFileSync(`src/i18n/${l.code}.ts`, 'utf8'), `${l.code} ${key}`).toContain(`${key}:`);
    }
  });
});
