import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { countArrival, countShare, setCountEnv, setCounting } from '../src/lib/count';
import { COACH_SHARE, proSections } from '../src/content/pro';
import { colleagueCardText } from '../src/components/ColleagueCard';
import { coachPage } from '../src/lib/coachPage';
import { PRIVACY } from '../src/lib/privacyPage';

/**
 * Does sending it on work? (The owner's request, 9 November 2026.) Two counts, with only where:
 * a tap on a share button ("/e/deel/…") and an arrival through a shared link ("/e/via/…"), under
 * the same rules as every other count, and not in a coach's demonstration.
 */
const store = new Map<string, string>();
const ls = {
  getItem: (k: string) => store.get(k) ?? null,
  setItem: (k: string, v: string) => void store.set(k, v),
  removeItem: (k: string) => void store.delete(k),
};
const fetchMock = vi.fn(() => Promise.resolve(new Response()));
const PROD = { prod: true, host: 'vloertaal.nl', dnt: false };
const paths = () => fetchMock.mock.calls.map((c) => decodeURIComponent(String((c as unknown[])[0]).split('p=')[1].split('&')[0]));

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

describe('counting sending it on (src/lib/count.ts)', () => {
  it('counts a tap on a share button with only where it was', () => {
    setCountEnv(PROD);
    expect(countShare('begeleider')).toBe(true);
    expect(countShare('na-demo')).toBe(true);
    expect(countShare('collegakaart')).toBe(true);
    expect(paths()).toEqual(['/e/deel/begeleider', '/e/deel/na-demo', '/e/deel/collegakaart']);
  });

  it('counts an arrival through a shared link, only for the links we made', () => {
    setCountEnv(PROD);
    expect(countArrival('?via=begeleider')).toBe(true);
    expect(countArrival('?via=collega&x=1')).toBe(true);
    expect(countArrival('?via=iets-anders')).toBe(false);
    expect(countArrival('')).toBe(false);
    expect(paths()).toEqual(['/e/via/begeleider', '/e/via/collega']);
  });

  it('sends nothing when counting is off, outside vloertaal.nl, or in a demo', () => {
    setCountEnv(PROD);
    setCounting(false);
    expect(countShare('begeleider')).toBe(false);
    setCounting(true);
    setCountEnv({ ...PROD, dnt: true });
    expect(countArrival('?via=collega')).toBe(false);
    setCountEnv({ ...PROD, host: 'preview.vloertaal.nl' });
    expect(countShare('begeleider')).toBe(false);
    setCountEnv(PROD);
    store.set('vloertaal-demo:on', '1');
    expect(countShare('begeleider')).toBe(false);
    expect(countArrival('?via=collega')).toBe(false);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('the shared links carry where they came from', () => {
    expect(COACH_SHARE.url).toBe('https://vloertaal.nl/voor-begeleiders/?via=begeleider');
    expect(colleagueCardText()).toContain('https://vloertaal.nl/?via=collega');
  });

  it('vloertaal.nl/voor-begeleiders counts the same, under the same rules', () => {
    const page = coachPage();
    expect(page).toContain('/e/via/');
    expect(page).toContain('data-deel="whatsapp"');
    expect(page).toContain('data-deel="mail"');
    // The same switches as the app: Anoniem meetellen, Do Not Track, only on vloertaal.nl.
    expect(page).toContain('vloertaal:count-off');
    expect(page).toContain('doNotTrack');
    expect(page).toContain('globalPrivacyControl');
  });

  it('the privacy texts say so', () => {
    const counting = PRIVACY.find((s) => s.id === 'tellen')!.paras.join(' ');
    expect(counting).toContain('doorgestuurd');
    expect(proSections.find((s) => s.id === 'p.privacy')!.body.join(' ')).toContain('doorgestuurd');
  });
});
