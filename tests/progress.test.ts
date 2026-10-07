import { describe, expect, it } from 'vitest';
import { completeLesson, currentStreak, emptyProgress } from '../src/lib/progress';

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
});
