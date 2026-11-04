import { readFileSync } from 'node:fs';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { countFirstOpen, countStartDone, FIRST_STEPS, setCountEnv, setCounting } from '../src/lib/count';
import { PRIVACY } from '../src/lib/privacyPage';
import { proSections } from '../src/content/pro';

/**
 * The start, before lesson 1 (src/lib/count.ts countFirstOpen and countStartDone, 4 November 2026):
 * once per device, with nothing about the learner, under the same rules as every other count.
 */
const store = new Map<string, string>();
const ls = {
  getItem: (k: string) => store.get(k) ?? null,
  setItem: (k: string, v: string) => void store.set(k, v),
  removeItem: (k: string) => void store.delete(k),
};
const fetchMock = vi.fn(() => Promise.resolve(new Response()));
const PROD = { prod: true, host: 'vloertaal.nl', dnt: false };
const urls = () => fetchMock.mock.calls.map((c) => String((c as unknown[])[0]));
const paths = () => urls().map((u) => decodeURIComponent(u.split('p=')[1].split('&')[0]));
const blocked = { getItem: () => { throw new Error('blocked'); }, setItem: () => { throw new Error('blocked'); }, removeItem: () => { throw new Error('blocked'); } };

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

describe('the start, counted once per device', () => {
  it('a new device counts its first open and the end of the start, each once, with only that', () => {
    setCountEnv(PROD);
    expect(countFirstOpen(true)).toBe(true);
    // Opened again (a reload, the next day), and the start done twice (after "Voortgang wissen" the colour is asked again).
    expect(countFirstOpen(true)).toBe(false);
    expect(countFirstOpen(false)).toBe(false);
    expect(countStartDone()).toBe(true);
    expect(countStartDone()).toBe(false);
    expect(paths()).toEqual(['/e/eerste/geopend', '/e/eerste/start-af']);
    // Nothing else in the request: no language, sector, country, colour, date or id.
    expect(urls()).toEqual([
      'https://vloertaal.goatcounter.com/count?p=%2Fe%2Feerste%2Fgeopend&e=true&t=eerste',
      'https://vloertaal.goatcounter.com/count?p=%2Fe%2Feerste%2Fstart-af&e=true&t=eerste',
    ]);
    const init = (fetchMock.mock.calls[0] as unknown[])[1] as RequestInit;
    expect(init).toMatchObject({ mode: 'no-cors', credentials: 'omit' });
    expect(store.get('vloertaal:count-eerste')).toBe('geopend,start-af');
  });

  it('a reload in the middle of the start keeps its "start-af" to come', () => {
    setCountEnv(PROD);
    countFirstOpen(true);
    // The language is chosen (onboarded), then the page reloads before the colour.
    expect(countFirstOpen(false)).toBe(false);
    expect(countStartDone()).toBe(true);
    expect(paths()).toEqual(['/e/eerste/geopend', '/e/eerste/start-af']);
  });

  it('a device from before this count is never counted as new', () => {
    setCountEnv(PROD);
    expect(countFirstOpen(false)).toBe(false);
    expect(store.get('vloertaal:count-eerste')).toBe('geopend,start-af');
    // Its colour asked again after "Voortgang wissen", or the home of a learner who began long ago.
    expect(countStartDone()).toBe(false);
    expect(countFirstOpen(true)).toBe(false);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('sends nothing outside vloertaal.nl, with Do Not Track, or switched off, and never sends those steps later', () => {
    for (const env of [{ ...PROD, host: 'vloertaal.vercel.app' }, { ...PROD, dnt: true }, { ...PROD, prod: false }]) {
      store.clear();
      setCountEnv(env);
      expect(countFirstOpen(true)).toBe(false);
      expect(countStartDone()).toBe(false);
    }
    store.clear();
    setCountEnv(PROD);
    setCounting(false);
    expect(countFirstOpen(true)).toBe(false);
    expect(fetchMock).not.toHaveBeenCalled();
    // Switched on again: the first open is past, it is not sent now; the end of the start still is.
    setCounting(true);
    expect(countFirstOpen(true)).toBe(false);
    expect(countStartDone()).toBe(true);
    expect(paths()).toEqual(['/e/eerste/start-af']);
  });

  it('sends nothing when the phone blocks storage (it could not remember, so it might count twice)', () => {
    (globalThis as { localStorage?: unknown }).localStorage = blocked;
    setCountEnv(PROD);
    expect(countFirstOpen(true)).toBe(false);
    expect(countFirstOpen(false)).toBe(false);
    expect(countStartDone()).toBe(false);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('the app counts the first open when it opens, and the end of the start on Continue after the colour', () => {
    expect([...FIRST_STEPS]).toEqual(['geopend', 'start-af']);
    const app = readFileSync('src/App.tsx', 'utf8');
    // New: no help language chosen yet. Not on the coaches' page or the owner's (#begeleiders, #beheer).
    expect(app).toContain('if (!coachesRequested() && !adminRequested()) countFirstOpen(!start.progress.onboarded);');
    const colour = app.split('\n').find((l) => l.includes("if (step === 'colour') return <ColourScreen"))!;
    expect(colour).toMatch(/onDone=\{\(\) => \{ setProgress\(\(p\) => \(\{ \.\.\.p, colourAsked: true \}\)\); countStartDone\(\); \}\}/);
    expect(app.match(/countStartDone\(\)/g)).toHaveLength(1);
  });

  it('is what the privacy statement and the professionals’ page say', () => {
    const counting = PRIVACY.find((s) => s.id === 'tellen')!.paras.join(' ');
    for (const fact of ['één keer per telefoon', 'voor het eerst opent', 'tot en met de kleur', 'Niet wat je koos', 'voordat je het tellen kunt uitzetten']) {
      expect(counting, fact).toContain(fact);
    }
    expect(PRIVACY.find((s) => s.id === 'kort')!.paras.join(' ')).toContain('hoeveel mensen beginnen');
    const pro = proSections.find((s) => s.id === 'p.privacy')!.body.join(' ');
    for (const fact of ['voor het eerst openen', 'de vragen van de start', 'één keer', '“ja” of “nog niet”']) expect(pro, fact).toContain(fact);
    const doc = readFileSync('docs/privacy.md', 'utf8');
    for (const fact of ['countFirstOpen', 'countStartDone', '/e/eerste/geopend', '/e/eerste/start-af', 'vloertaal:count-eerste']) expect(doc, fact).toContain(fact);
  });

  it('the week line in docs/pilot.md: six numbers, each with its path in GoatCounter', () => {
    const pilot = readFileSync('docs/pilot.md', 'utf8');
    const week = pilot.slice(pilot.indexOf('### De weekregel'));
    for (const path of ['/e/eerste/geopend', '/e/eerste/start-af', '/e/dag/1', '/e/dag/2', '/e/dag/7', '/e/dag/28']) {
      expect(week, path).toContain(`\`${path}\``);
    }
    expect(week).toContain('| Week | Geopend | Start af | Dag 1 | Dag 2 | Dag 7 | Dag 28 |');
    // The old line "the app no longer counts opening it" now says what it counts instead.
    expect(pilot).toContain('één keer per toestel en zonder iets erbij');
  });
});
