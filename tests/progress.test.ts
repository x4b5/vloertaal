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

  it('is light for new learners and moves the old automatic default to light', async () => {
    (globalThis as { localStorage?: unknown }).localStorage = ls;
    const { loadProgress } = await import('../src/lib/progress');
    store.clear();
    expect(loadProgress().theme).toBe('light');
    store.set('vloertaal:v1', JSON.stringify({ onboarded: true, theme: 'auto' }));
    expect(loadProgress().theme).toBe('light');
    store.set('vloertaal:v1', JSON.stringify({ onboarded: true, theme: 'dark' }));
    expect(loadProgress().theme).toBe('dark');
    store.set('vloertaal:v1', JSON.stringify({ onboarded: true, theme: 'auto', themeVersion: 2 }));
    expect(loadProgress().theme).toBe('auto');
  });
});
