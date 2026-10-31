import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { setCountEnv, setCounting } from '../src/lib/count';
import { cleanMessage, errorCode, errorPath, fileOf, reportError, resetErrors } from '../src/lib/errors';

const store = new Map<string, string>();
const ls = {
  getItem: (k: string) => store.get(k) ?? null,
  setItem: (k: string, v: string) => void store.set(k, v),
  removeItem: (k: string) => void store.delete(k),
};
const fetchMock = vi.fn((_url: string) => Promise.resolve(new Response()));
const PROD = { prod: true, host: 'vloertaal.nl', dnt: false };
const sent = () => fetchMock.mock.calls.map(([url]) => decodeURIComponent(String(url)));

beforeEach(() => {
  store.clear();
  fetchMock.mockClear();
  resetErrors();
  (globalThis as { localStorage?: unknown }).localStorage = ls;
  vi.stubGlobal('fetch', fetchMock);
  setCountEnv(PROD);
});
afterEach(() => {
  setCountEnv(null);
  vi.unstubAllGlobals();
});

const crash = (message: string, file = 'Route-a1B2c3') => {
  const e = new TypeError(message);
  e.stack = `TypeError: ${message}\n    at x (https://vloertaal.nl/assets/${file}.js:1:2345)`;
  return e;
};

describe('counting errors without anything about the learner', () => {
  it('keeps no quoted text, addresses, long numbers or other scripts in the title', () => {
    expect(cleanMessage("Cannot read properties of undefined (reading 'mijn antwoord')")).toBe('Cannot read properties of undefined (reading …)');
    expect(cleanMessage('Failed at https://vloertaal.nl/?unit=pay&x=1 for 0612345678')).toBe('Failed at … for #');
    expect(cleanMessage('خطأ في الدرس Error')).toBe('Error');
    expect(cleanMessage('a\nsecond line with secrets')).toBe('a');
    expect(cleanMessage('x'.repeat(200)).length).toBe(80);
  });

  it('names the file without the build hash, and gives the same error the same code', () => {
    expect(fileOf('at y (https://vloertaal.nl/assets/LessonPlayer-Xy12_ab.js:3:4)')).toBe('LessonPlayer');
    expect(errorCode('a')).toMatch(/^[0-9a-f]{8}$/);
    expect(errorPath('scherm', crash('boom'))).toEqual(errorPath('scherm', crash('boom', 'Route-ZZZ999')));
    expect(errorPath('scherm', crash('boom'))!.path).toMatch(/^\/e\/fout\/scherm\/[0-9a-f]{8}$/);
    expect(errorPath('scherm', crash('boom'))!.title).toBe('Route: TypeError: boom');
  });

  it('counts on the lessons counter, once per error and at most 3 per visit', () => {
    expect(reportError('script', crash('one'))).toBe(true);
    expect(reportError('script', crash('one'))).toBe(false);
    reportError('script', crash('two'));
    reportError('belofte', crash('three'));
    expect(reportError('script', crash('four'))).toBe(false);
    expect(sent()).toHaveLength(3);
    for (const url of sent()) {
      expect(url).toMatch(/^https:\/\/vloertaal\.goatcounter\.com\/count\?p=\/e\/fout\/(script|belofte)\/[0-9a-f]{8}&e=true&t=/);
    }
  });

  it('sends nothing when counting is off, outside vloertaal.nl, or with Do Not Track', () => {
    setCounting(false);
    expect(reportError('scherm', crash('a'))).toBe(false);
    setCounting(true);
    setCountEnv({ ...PROD, host: 'localhost' });
    expect(reportError('scherm', crash('b'))).toBe(false);
    setCountEnv({ ...PROD, dnt: true });
    expect(reportError('scherm', crash('c'))).toBe(false);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('ignores noise that is not Vloertaal (extensions, resize loops, cross-origin scripts)', () => {
    expect(errorPath('script', 'ResizeObserver loop completed with undelivered notifications.')).toBeNull();
    expect(errorPath('script', 'Script error.')).toBeNull();
    const ext = new Error('x');
    ext.stack = 'Error: x\n at chrome-extension://abc/content.js:1:1';
    expect(errorPath('script', ext)).toBeNull();
  });
});
