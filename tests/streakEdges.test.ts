import { describe, expect, it } from 'vitest';
import { completeLesson, emptyProgress, mergeBackup, practisedAt, settleStreak, workWeek, type Progress } from '../src/lib/progress';

/** Noon of a day in October 2026 (local time). */
const oct = (d: number, h = 12, m = 0) => new Date(2026, 9, d, h, m);
const run = (from: number, to: number) => Array.from({ length: to - from + 1 }, (_, i) => `2026-10-${String(from + i).padStart(2, '0')}`);

describe('streak edges', () => {
  it('a lesson started before midnight counts for the day it started', () => {
    expect(practisedAt(oct(27, 23, 58), oct(28, 0, 3))).toEqual(oct(27, 23, 58));
    expect(practisedAt(oct(28, 9), oct(28, 9, 10))).toEqual(oct(28, 9, 10));
    // Yesterday already counted: this lesson counts for today.
    expect(practisedAt(oct(27, 23, 58), oct(28, 0, 3), '2026-10-27')).toEqual(oct(28, 0, 3));
    // Monday practised, Tuesday's lesson from 23:58 to 00:03: the streak goes on.
    const mon: Progress = { ...emptyProgress, streak: 4, lastDay: '2026-10-26', days: run(23, 26) };
    const p = completeLesson(mon, 'l.hello', 1, false, practisedAt(oct(27, 23, 58), oct(28, 0, 3)));
    expect(p.streak).toBe(5);
    expect(p.lastDay).toBe('2026-10-27');
  });

  it('merging a backup carries the old phone\'s streak on when the days join up', () => {
    const oldPhone: Partial<Progress> = { streak: 20, lastDay: '2026-10-27', days: run(8, 27), completed: {} };
    const newPhone: Progress = { ...emptyProgress, streak: 1, lastDay: '2026-10-28', days: ['2026-10-28'] };
    expect(mergeBackup(newPhone, oldPhone).streak).toBe(21);
    // A gap between them: the later side's own streak.
    const gap: Progress = { ...newPhone, lastDay: '2026-10-29', days: ['2026-10-29'] };
    expect(mergeBackup(gap, oldPhone).streak).toBe(1);
  });

  it('merging the same backup back in does not hand out a used free day again', () => {
    const backup: Partial<Progress> = { streak: 3, lastDay: '2026-10-22', freezes: 1, days: run(20, 22), completed: {} };
    const now: Progress = { ...emptyProgress, streak: 3, lastDay: '2026-10-23', freezes: 0, rest: ['2026-10-23'], days: run(20, 22) };
    const merged = mergeBackup(now, backup);
    expect(merged.freezes).toBe(0);
    expect(settleStreak(merged, oct(25)).progress.streak).toBe(0);
  });

  it('the week row never ticks a day still to come (the clock moved back)', () => {
    const p: Progress = { ...emptyProgress, streak: 3, lastDay: '2026-10-29', days: run(27, 29) };
    const week = workWeek(p, oct(28));
    expect(week.find((d) => d.key === '2026-10-29')?.state).toBe('open');
    expect(week.find((d) => d.key === '2026-10-27')?.state).toBe('done');
  });
});

describe('replacing with a backup', () => {
  it('asks again whenever something here would be lost, not only with fewer lessons', async () => {
    const { replaceLoses } = await import('../src/lib/progress');
    const here: Progress = { ...emptyProgress, completed: { 'l.hello': { best: 1, times: 1 } }, streak: 5, bestStreak: 5, lastDay: '2026-10-28' };
    // As many lessons, but another one: l.hello would be gone.
    expect(replaceLoses(here, { completed: { 'l.people': { best: 1, times: 1 } }, streak: 5, bestStreak: 5 })).toBe(true);
    // The same lesson, a lower record.
    expect(replaceLoses(here, { completed: { 'l.hello': { best: 1, times: 1 } }, streak: 1, bestStreak: 2 })).toBe(true);
    // Everything here is in the file: replacing loses nothing.
    expect(replaceLoses(here, { completed: { 'l.hello': { best: 1, times: 1 }, 'l.people': { best: 1, times: 1 } }, streak: 6, bestStreak: 6 })).toBe(false);
  });
});
