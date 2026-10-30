import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  align, installLocal, judge, listenOn, localRecognition, localStatus, normWord, resetListenForTest, setListenOn,
  startListening, verdictOf, type LocalStatus,
} from '../src/lib/listen';
import { settingsRows } from '../src/lib/settingsMenu';
import fs from 'fs';

/**
 * "Laat de telefoon luisteren (proef)" (src/lib/listen.ts). The hard rule: no audio leaves the
 * phone, so recognition never starts (no start()) unless the browser confirms Dutch on the device.
 */

interface Fake {
  starts: number;
  made: number;
  availableCalls: unknown[];
  installCalls: unknown[];
  status: unknown;
  /** What the phone "hears" when stop() is called. */
  heard: string[];
  error?: string;
  /** The processLocally attribute does not take (an implementation without it). */
  dropsLocal?: boolean;
}

function fakeApi(f: Fake, { withStatics = true, onPrototype = true } = {}) {
  class FakeRecognition {
    lang = '';
    continuous = true;
    interimResults = true;
    maxAlternatives = 1;
    onresult: ((e: unknown) => void) | null = null;
    onerror: ((e: unknown) => void) | null = null;
    onend: (() => void) | null = null;
    private local = false;
    constructor() { f.made++; }
    start() { f.starts++; }
    stop() {
      if (f.error) this.onerror?.({ error: f.error });
      else {
        const alts = Object.assign(f.heard.map((transcript) => ({ transcript })), { isFinal: true });
        this.onresult?.({ results: [alts] });
      }
      this.onend?.();
    }
    abort() { this.onend?.(); }
  }
  if (onPrototype) {
    Object.defineProperty(FakeRecognition.prototype, 'processLocally', {
      get(this: { local: boolean }) { return this.local; },
      set(this: { local: boolean }, v: boolean) { if (!f.dropsLocal) this.local = v; },
      configurable: true,
    });
  }
  if (withStatics) {
    Object.assign(FakeRecognition, {
      available: (o: unknown) => { f.availableCalls.push(o); return Promise.resolve(f.status); },
      install: (o: unknown) => { f.installCalls.push(o); f.status = 'available'; return Promise.resolve(true); },
    });
  }
  return FakeRecognition;
}

const fresh = (status: unknown): Fake => ({ starts: 0, made: 0, availableCalls: [], installCalls: [], status, heard: [] });

function install(C: unknown) {
  const store = new Map<string, string>();
  vi.stubGlobal('window', { SpeechRecognition: C });
  vi.stubGlobal('localStorage', {
    getItem: (k: string) => store.get(k) ?? null,
    setItem: (k: string, v: string) => { store.set(k, v); },
    removeItem: (k: string) => { store.delete(k); },
  });
}

beforeEach(() => resetListenForTest());
afterEach(() => vi.unstubAllGlobals());

describe('on the device or not at all', () => {
  it('asks for Dutch with processLocally: true', async () => {
    const f = fresh('available');
    install(fakeApi(f));
    expect(await localStatus()).toBe('available');
    expect(f.availableCalls).toEqual([{ langs: ['nl-NL'], processLocally: true }]);
  });

  for (const status of ['downloadable', 'downloading', 'unavailable', 'nonsense', undefined] as const) {
    it(`never starts when the browser says ${String(status)}`, async () => {
      const f = fresh(status);
      install(fakeApi(f));
      expect(await startListening()).toBeNull();
      expect(f.starts).toBe(0);
      expect(f.made).toBe(0);
    });
  }

  it('never starts when available() fails', async () => {
    const f = fresh('available');
    const C = fakeApi(f) as unknown as { available: () => Promise<unknown> };
    C.available = () => Promise.reject(new Error('no'));
    install(C);
    expect(await localStatus()).toBe('unavailable');
    expect(await startListening()).toBeNull();
    expect(f.starts).toBe(0);
  });

  it('there is no fallback: the plain (server) API without available() is not used', async () => {
    const f = fresh('available');
    install(fakeApi(f, { withStatics: false }));
    expect(localRecognition()).toBeNull();
    expect(await localStatus()).toBe('unavailable');
    expect(await startListening()).toBeNull();
    expect(f.starts).toBe(0);
  });

  it('not without a processLocally attribute, and not when it does not take', async () => {
    const a = fresh('available');
    install(fakeApi(a, { onPrototype: false }));
    expect(await startListening()).toBeNull();
    expect(a.starts).toBe(0);

    resetListenForTest();
    const b = { ...fresh('available'), dropsLocal: true };
    install(fakeApi(b));
    expect(await startListening()).toBeNull();
    expect(b.starts).toBe(0);
  });

  it('no API at all (Safari, Firefox, an old phone): unavailable', async () => {
    install(undefined);
    expect(await localStatus()).toBe('unavailable');
    expect(await startListening()).toBeNull();
  });

  it('asks again right before it starts (a cached "available" is not enough)', async () => {
    const f = fresh('available');
    install(fakeApi(f));
    expect(await localStatus()).toBe('available');
    f.status = 'downloadable';
    expect(await startListening()).toBeNull();
    expect(f.starts).toBe(0);
  });

  it('starts once, on the device, when Dutch is confirmed', async () => {
    const f = { ...fresh('available'), heard: ['ik draag handschoenen'] };
    install(fakeApi(f));
    const l = await startListening();
    expect(l).not.toBeNull();
    expect(f.starts).toBe(1);
    l!.stop();
    expect(await l!.result).toEqual({ alternatives: ['ik draag handschoenen'] });
  });

  it('downloads only through installLocal (a tap), with processLocally: true', async () => {
    const f = fresh('downloadable');
    install(fakeApi(f));
    expect(await localStatus()).toBe('downloadable');
    expect(f.installCalls).toEqual([]);
    expect(await installLocal()).toBe(true);
    expect(f.installCalls).toEqual([{ langs: ['nl-NL'], processLocally: true }]);
    expect(await localStatus()).toBe('available');
  });
});

describe('the switch', () => {
  it('is off by default and keeps the learner’s choice', () => {
    install(undefined);
    expect(listenOn()).toBe(false);
    setListenOn(true);
    expect(listenOn()).toBe(true);
    setListenOn(false);
    expect(listenOn()).toBe(false);
  });
});

describe('was it understood? (alignment, three outcomes, never a score)', () => {
  const T = 'Ik draag mijn handschoenen.';

  it('the same words: understood (case, punctuation, accents do not matter)', () => {
    expect(judge(T, ['ik draag mijn handschoenen'])).toEqual({ kind: 'ok' });
    expect(judge('Dank je wel!', ['Dank je wel'])).toEqual({ kind: 'ok' });
    expect(judge('Eén moment.', ['een moment'])).toEqual({ kind: 'ok' });
  });

  it('spellings that sound the same: understood (ij/ei, ou/au, d/dt, g/ch)', () => {
    expect(judge('Hij wordt ziek.', ['hij word ziek'])).toEqual({ kind: 'ok' });
    expect(judge('Ik blijf thuis.', ['ik bleif thuis'])).toEqual({ kind: 'ok' });
    expect(judge('Goed zo.', ['goet zo'])).toEqual({ kind: 'ok' });
  });

  it('articles: missing, swapped or short (\'t, \'n) do not count', () => {
    expect(judge('Pak de doos.', ['pak doos'])).toEqual({ kind: 'ok' });
    expect(judge('Pak de doos.', ['pak het doos'])).toEqual({ kind: 'ok' });
    expect(judge('Het is koud.', ["'t is koud"])).toEqual({ kind: 'ok' });
    expect(judge('Ik heb een vraag.', ["ik heb 'n vraag"])).toEqual({ kind: 'ok' });
  });

  it('numbers as digits or words; a compound in two parts', () => {
    expect(judge('Ik begin om zeven uur.', ['ik begin om 7 uur'])).toEqual({ kind: 'ok' });
    expect(judge('Mijn veiligheidsschoenen.', ['mijn veiligheids schoenen'])).toEqual({ kind: 'ok' });
  });

  it('one word close (man / maan): almost, with that word as written', () => {
    expect(judge('De maan is mooi.', ['de man is mooi'])).toEqual({ kind: 'almost', word: 'maan' });
    expect(judge('maan', ['man'])).toEqual({ kind: 'almost', word: 'maan' });
  });

  it('one word not heard in a sentence: almost, with that word', () => {
    expect(judge(T, ['ik draag mijn'])).toEqual({ kind: 'almost', word: 'handschoenen' });
    expect(judge(T, ['ik draag mijn schoenen'])).toEqual({ kind: 'almost', word: 'handschoenen' });
  });

  it('extra words heard do not hurt', () => {
    expect(judge(T, ['eh ik draag nu mijn handschoenen ja'])).toEqual({ kind: 'ok' });
  });

  it('too far off, a single word missed, or nothing: not understood yet', () => {
    expect(judge(T, ['de bus komt laat'])).toEqual({ kind: 'notyet' });
    expect(judge('handschoenen', ['koffie'])).toEqual({ kind: 'notyet' });
    expect(judge(T, [''])).toEqual({ kind: 'notyet' });
    expect(judge(T, [])).toEqual({ kind: 'notyet' });
  });

  it('takes the best of the phone’s guesses', () => {
    expect(judge('De maan is mooi.', ['de man is mooi', 'de maan is mooi'])).toEqual({ kind: 'ok' });
    expect(judge(T, ['de bus', 'ik draag mijn'])).toEqual({ kind: 'almost', word: 'handschoenen' });
  });

  it('word marks line up with the target', () => {
    expect(align(['ik', 'draag', 'mijn', 'handschoenen'], ['ik', 'mijn', 'handschoen'])).toEqual(['ok', 'miss', 'ok', 'near']);
    expect(align(['de', 'doos'], ['doos'])).toEqual(['ok', 'ok']);
  });

  it('normalises short forms and small numbers', () => {
    expect(normWord("'t")).toBe('het');
    expect(normWord('’n')).toBe('een');
    expect(normWord('7')).toBe('zeven');
    expect(normWord('Één,')).toBe('een');
  });

  it('an API error: no verdict (plain record and compare); no speech: not understood yet', () => {
    expect(verdictOf(T, { alternatives: [], error: 'network' })).toBeNull();
    expect(verdictOf(T, { alternatives: [], error: 'language-not-supported' })).toBeNull();
    expect(verdictOf(T, { alternatives: [], error: 'no-speech' })).toEqual({ kind: 'notyet' });
    expect(verdictOf(T, { alternatives: ['ik draag mijn handschoenen'] })).toEqual({ kind: 'ok' });
  });

  it('the outcomes are words only: no number, no "wrong"', () => {
    const v: LocalStatus = 'available';
    expect(v).toBe('available');
    for (const heard of ['', 'ik', 'ik draag', 'ik draag mijn', 'ik draag mijn handschoenen']) {
      const r = judge(T, [heard]);
      expect(['ok', 'almost', 'notyet']).toContain(r.kind);
      expect(Object.values(r).some((x) => typeof x === 'number')).toBe(false);
    }
  });
});

describe('only in the Dutch course, and only on a phone that can', () => {
  it('the Settings row is there only with on-device Dutch (or its download), never in Werkregels', () => {
    const ctx = { helpLang: true, gender: false, preview: false, install: false, offline: true };
    expect(settingsRows('lessons', ctx)).not.toContain('listen');
    expect(settingsRows('lessons', { ...ctx, listen: true })).toEqual(['sound', 'voice', 'tempo', 'faster', 'speaking', 'listen', 'writing', 'text', 'theme', 'toets']);
    expect(settingsRows('lessons', { ...ctx, listen: true, rules: true })).not.toContain('listen');
  });

  it('the lesson passes the switch only outside Werkregels; the toets stays record and compare', () => {
    expect(fs.readFileSync('src/components/LessonPlayer.tsx', 'utf8')).toMatch(/listen=\{!dutchUi\(lang\) && listenOn\(\)\}/);
    expect(fs.readFileSync('src/components/Toets.tsx', 'utf8')).not.toMatch(/listen=/);
  });
});
