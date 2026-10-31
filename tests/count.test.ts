import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { clockMinutes, count, countDayMilestones, countPath, DAY_MILESTONES, mayCount, minutesBand, pauseClock, quarterOf, resumeClock, setCountEnv, setCounting, startClock } from '../src/lib/count';
import { completeLesson, emptyProgress, type Progress } from '../src/lib/progress';
import { PRIVACY } from '../src/lib/privacyPage';

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
    expect(count('lesson-done', { lesson: 'l.cv' })).toBe(false);
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

  it('sends one request per event, without cookies', () => {
    setCountEnv(PROD);
    expect(count('lesson-done', { lesson: 'l.cv', minutes: 3 })).toBe(true);
    const urls = fetchMock.mock.calls.map((c) => String((c as unknown[])[0]));
    expect(urls).toEqual(['https://vloertaal.goatcounter.com/count?p=%2Fe%2Flesson-done%2Fl-cv%2Ft2-5&e=true&t=lesson-done']);
    const init = (fetchMock.mock.calls[0] as unknown[])[1] as RequestInit;
    expect(init).toMatchObject({ mode: 'no-cors', keepalive: true, credentials: 'omit' });
  });

  it('says only what the privacy text says: which lesson, where it stopped, about how long — nothing about the learner', () => {
    expect(countPath('lesson-start', { lesson: 'l.cv' })).toBe('/e/lesson-start/l-cv');
    expect(countPath('lesson-quit', { lesson: 'r.l.loon.1', quarter: 2 })).toBe('/e/lesson-quit/r-l-loon-1/q2');
    expect(countPath('lesson-quit', { lesson: '../x?y', quarter: 9 })).toBe('/e/lesson-quit/x-y/q4');
    expect(countPath('lesson-done', { lesson: 'l.cv', minutes: 3.4 })).toBe('/e/lesson-done/l-cv/t2-5');
    expect(countPath('review-done', { minutes: 12 })).toBe('/e/review-done/t10plus');
    expect(countPath('review-done', { minutes: Number.NaN })).toBe('/e/review-done');
    expect(countPath('unit-done')).toBe('/e/unit-done');
    // No help language, sector or version can be passed at all (CountDims has no such fields).
    const dims: Record<string, unknown> = { lang: 'ti', sector: 'care', access: 'full', lesson: 'l.cv' };
    expect(countPath('lesson-start', dims as never)).toBe('/e/lesson-start/l-cv');
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

  it('sends nothing with Global Privacy Control on (as with Do Not Track)', () => {
    vi.stubGlobal('navigator', { globalPrivacyControl: true });
    setCountEnv({ prod: true, host: 'vloertaal.nl' });
    expect(mayCount()).toBe(false);
    vi.unstubAllGlobals();
    vi.stubGlobal('fetch', fetchMock);
  });

  it('switched off holds for the visit when the phone blocks storage', () => {
    (globalThis as { localStorage?: unknown }).localStorage = { getItem: () => { throw new Error('blocked'); }, setItem: () => { throw new Error('blocked'); }, removeItem: () => { throw new Error('blocked'); } };
    setCountEnv(PROD);
    setCounting(false);
    expect(mayCount()).toBe(false);
    setCounting(true);
    expect(mayCount()).toBe(true);
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
    expect(fetchMock).not.toHaveBeenCalled();
  });
});

describe('days with a lesson (do learners come back?)', () => {
  const paths = () => fetchMock.mock.calls.map((c) => decodeURIComponent(String((c as unknown[])[0]).split('p=')[1].split('&')[0]));

  it('counts the 1st, 2nd, 7th, 14th and 28th day once each, with only the number', () => {
    setCountEnv(PROD);
    expect(countDayMilestones(1)).toEqual([1]);
    expect(countDayMilestones(1)).toEqual([]); // a second lesson on the same day
    expect(countDayMilestones(2)).toEqual([2]);
    for (let d = 3; d <= 6; d++) expect(countDayMilestones(d)).toEqual([]);
    expect(countDayMilestones(7)).toEqual([7]);
    expect(countDayMilestones(14)).toEqual([14]);
    expect(countDayMilestones(28)).toEqual([28]);
    expect(countDayMilestones(28)).toEqual([]);
    expect(paths()).toEqual(['/e/dag/1', '/e/dag/2', '/e/dag/7', '/e/dag/14', '/e/dag/28']);
    // Nothing about the learner or the lesson: no id, no date, no language.
    const url = String((fetchMock.mock.calls[0] as unknown[])[0]);
    expect(url).toBe('https://vloertaal.goatcounter.com/count?p=%2Fe%2Fdag%2F1&e=true&t=dag');
  });

  it('counts the days the progress already has (a learner on day 9 sends 1, 2 and 7 at once)', () => {
    setCountEnv(PROD);
    expect(countDayMilestones(9)).toEqual([1, 2, 7]);
    expect(countDayMilestones(10)).toEqual([]);
    expect(store.get('vloertaal:count-dagen')).toBe('1,2,7');
  });

  it('sends nothing with counting switched off, Do Not Track or off vloertaal.nl, and never sends those days later', () => {
    setCountEnv(PROD);
    setCounting(false);
    expect(countDayMilestones(2)).toEqual([]);
    setCountEnv({ ...PROD, dnt: true });
    setCounting(true);
    expect(countDayMilestones(7)).toEqual([]);
    setCountEnv({ ...PROD, host: 'vloertaal.vercel.app' });
    expect(countDayMilestones(8)).toEqual([]);
    expect(fetchMock).not.toHaveBeenCalled();
    // Switched on again on vloertaal.nl: only a new milestone counts, not the past ones.
    setCountEnv(PROD);
    expect(countDayMilestones(8)).toEqual([]);
    expect(countDayMilestones(14)).toEqual([14]);
    expect(paths()).toEqual(['/e/dag/14']);
  });

  it('sends nothing when the phone blocks storage (it could not remember, so it might count twice)', () => {
    (globalThis as { localStorage?: unknown }).localStorage = { getItem: () => { throw new Error('blocked'); }, setItem: () => { throw new Error('blocked'); }, removeItem: () => { throw new Error('blocked'); } };
    setCountEnv(PROD);
    expect(countDayMilestones(1)).toEqual([]);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('takes its number from the progress: different days with a lesson, not calendar days', () => {
    setCountEnv(PROD);
    let p: Progress = emptyProgress;
    // Two lessons on 1 October, none for a week, then one on 9 October: two days.
    p = completeLesson(p, 'l.cv', 1, false, new Date(2026, 9, 1, 10));
    p = completeLesson(p, 'l.cv', 1, false, new Date(2026, 9, 1, 18));
    expect(countDayMilestones(p.days?.length ?? 0)).toEqual([1]);
    p = completeLesson(p, 'l.cv', 1, false, new Date(2026, 9, 9, 10));
    expect(p.days).toHaveLength(2);
    expect(countDayMilestones(p.days?.length ?? 0)).toEqual([2]);
  });

  it('the milestones are what the privacy text says', () => {
    expect([...DAY_MILESTONES]).toEqual([1, 2, 7, 14, 28]);
    const privacy = PRIVACY.flatMap((s) => s.paras).join(' ');
    expect(privacy).toContain('1e, 2e, 7e, 14e en 28e dag');
  });
});
