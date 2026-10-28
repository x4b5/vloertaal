import { describe, expect, it } from 'vitest';
import { completeLesson, currentStreak, emptyProgress, streakWentUp } from '../src/lib/progress';

const day = (d: number) => new Date(2026, 9, d, 12);

describe('progress', () => {
  it('awards XP, with a bonus for a perfect lesson', () => {
    const p = completeLesson(emptyProgress, 'l.hello', 1, false, day(1));
    expect(p.xp).toBe(15);
    expect(p.completed['l.hello']).toEqual({ best: 1, times: 1 });
    const q = completeLesson(p, 'l.hello', 0.5, true, day(1));
    expect(q.xp).toBe(20);
    expect(q.completed['l.hello']).toEqual({ best: 1, times: 2 });
  });

  it('counts a streak of consecutive days', () => {
    let p = completeLesson(emptyProgress, 'a', 1, false, day(1));
    p = completeLesson(p, 'b', 1, false, day(1));
    expect(p.streak).toBe(1);
    p = completeLesson(p, 'c', 1, false, day(2));
    expect(p.streak).toBe(2);
    expect(currentStreak(p, day(3))).toBe(2);
    expect(currentStreak(p, day(4))).toBe(0);
    p = completeLesson(p, 'd', 1, false, day(5));
    expect(p.streak).toBe(1);
  });

  it('shows the streak milestone only for the first lesson of a day', () => {
    const a = completeLesson(emptyProgress, 'a', 1, false, day(1));
    expect(streakWentUp(emptyProgress, a)).toBe(true);
    const b = completeLesson(a, 'b', 1, false, day(1));
    expect(streakWentUp(a, b)).toBe(false);
    const c = completeLesson(b, 'c', 1, false, day(2));
    expect(streakWentUp(b, c)).toBe(true);
    expect(c.streak).toBe(2);
  });
});

describe('theme default', () => {
  const store = new Map<string, string>();
  const ls = { getItem: (k: string) => store.get(k) ?? null, setItem: (k: string, v: string) => void store.set(k, v) };

  it('follows the phone for new learners, keeps saved choices, and moves the old automatic default to light', async () => {
    (globalThis as { localStorage?: unknown }).localStorage = ls;
    const { loadProgress } = await import('../src/lib/progress');
    store.clear();
    expect(loadProgress().theme).toBe('auto');
    store.set('vloertaal:v1', JSON.stringify({ onboarded: true, theme: 'light', themeVersion: 2 }));
    expect(loadProgress().theme).toBe('light');
    store.set('vloertaal:v1', JSON.stringify({ onboarded: true, themeVersion: 2 }));
    expect(loadProgress().theme).toBe('light');
    store.set('vloertaal:v1', JSON.stringify({ onboarded: true, theme: 'auto' }));
    expect(loadProgress().theme).toBe('light');
    store.set('vloertaal:v1', JSON.stringify({ onboarded: true, theme: 'dark' }));
    expect(loadProgress().theme).toBe('dark');
    store.set('vloertaal:v1', JSON.stringify({ onboarded: true, theme: 'auto', themeVersion: 2 }));
    expect(loadProgress().theme).toBe('auto');
  });

  it('keeps "Without sound" across reloads; older saves have sound on', async () => {
    (globalThis as { localStorage?: unknown }).localStorage = ls;
    const { loadProgress, saveProgress } = await import('../src/lib/progress');
    store.clear();
    expect(loadProgress().quiet).toBeFalsy();
    store.set('vloertaal:v1', JSON.stringify({ onboarded: true, theme: 'light', themeVersion: 2, xp: 30 }));
    expect(loadProgress().quiet).toBeFalsy();
    saveProgress({ ...loadProgress(), quiet: true });
    expect(loadProgress().quiet).toBe(true);
    expect(loadProgress().xp).toBe(30);
  });

  it('keeps the gender choice on the device; older saves have none, unknown values are dropped', async () => {
    (globalThis as { localStorage?: unknown }).localStorage = ls;
    const { loadProgress, saveProgress } = await import('../src/lib/progress');
    store.clear();
    expect(loadProgress().gender).toBeUndefined();
    store.set('vloertaal:v1', JSON.stringify({ onboarded: true, helpLang: 'pl', themeVersion: 2 }));
    expect(loadProgress().gender).toBeUndefined();
    saveProgress({ ...loadProgress(), gender: 'f' });
    expect(loadProgress().gender).toBe('f');
    store.set('vloertaal:v1', JSON.stringify({ onboarded: true, helpLang: 'pl', themeVersion: 2, gender: 'w' }));
    expect(loadProgress().gender).toBeUndefined();
  });
});

describe('a last practised day later than today', () => {
  // Practised just after midnight abroad (ahead of Dutch time), then again at home the evening
  // before by Dutch time; or a phone clock set wrong. The streak must not drop to 1.
  it('keeps the streak and the last day, and counts today as practised', () => {
    const p = { ...emptyProgress, streak: 20, lastDay: '2026-10-29', days: ['2026-10-29'] };
    const q = completeLesson(p, 'l.hello', 1, false, new Date(2026, 9, 28, 23));
    expect(q.streak).toBe(20);
    expect(q.lastDay).toBe('2026-10-29');
    expect(q.days).toEqual(['2026-10-28', '2026-10-29']);
  });
});
