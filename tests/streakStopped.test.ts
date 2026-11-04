import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { StreakStopped } from '../src/components/Milestone';
import { completeLesson, emptyProgress, settleStreak, stoppedToTell, type Progress } from '../src/lib/progress';

/**
 * "Je reeks is gestopt" (StreakStopped, src/components/Milestone.tsx; src/lib/progress.ts
 * stoppedToTell) fits the week plan of 3 times a week (the owner's request, 4 November 2026): the
 * streak still stops as before, but the screen only comes after a real break.
 */

// November 2026: the 2nd is a Monday.
const day = (d: number) => new Date(2026, 10, d, 12);
const MON = 2;

/**
 * Opening the app as App.tsx does on each of these days: is there something to tell (the screen)
 * and did the streak stop (settleStreak, unchanged); then one lesson that day.
 */
function simulate(days: number[], p: Progress = emptyProgress) {
  const opens: { day: number; told?: number; broken?: number }[] = [];
  for (const d of days) {
    const told = stoppedToTell(p, day(d));
    const { progress, broken } = settleStreak(p, day(d));
    opens.push({ day: d, told, broken });
    p = completeLesson(progress, `l.${d}`, 1, false, day(d));
  }
  return { opens, progress: p };
}

/** Monday, Wednesday and Friday for four weeks: 12 opens. */
const monWedFri = [0, 7, 14, 21].flatMap((w) => [MON + w, MON + 2 + w, MON + 4 + w]);
/** Monday to Friday for four weeks: 20 opens. */
const monToFri = [0, 7, 14, 21].flatMap((w) => [0, 1, 2, 3, 4].map((d) => MON + w + d));

describe('"Je reeks is gestopt" fits 3 times a week', () => {
  it('Monday, Wednesday, Friday: never the screen, while the streak itself still stops as before', () => {
    const { opens } = simulate(monWedFri);
    expect(opens).toHaveLength(12);
    expect(opens.filter((o) => o.told !== undefined)).toEqual([]);
    // The count did not change: the streak still stops at 11 of the 12 opens (a streak of 1).
    expect(opens.filter((o) => o.broken !== undefined).map((o) => o.broken)).toEqual(Array(11).fill(1));
  });

  it('Monday to Friday: no "gestopt bij 5" on Monday', () => {
    const { opens } = simulate(monToFri);
    expect(opens).toHaveLength(20);
    expect(opens.filter((o) => o.told !== undefined)).toEqual([]);
    // The weekend still stops the streak (one free day for two days off): every Monday but the first.
    expect(opens.filter((o) => o.broken !== undefined).map((o) => [o.day, o.broken])).toEqual([[MON + 7, 5], [MON + 14, 5], [MON + 21, 5]]);
  });

  it('a real break of a week: the screen, once, with the streak that stopped', () => {
    // Monday to Friday, then the whole next week off; back on the Monday after.
    const { progress } = simulate([0, 1, 2, 3, 4].map((d) => MON + d));
    const back = day(MON + 14);
    expect(stoppedToTell(progress, back)).toBe(5);
    // Once: after settling there is nothing more to tell.
    expect(stoppedToTell(settleStreak(progress, back).progress, back)).toBeUndefined();
    // Also when the learner is back after a week on a Friday (the last practised day 7 days ago).
    expect(stoppedToTell(progress, day(MON + 11))).toBe(5);
  });

  it('no screen for a streak of 1 or 2 days, even after a long break', () => {
    expect(stoppedToTell(simulate([MON]).progress, day(MON + 20))).toBeUndefined();
    expect(stoppedToTell(simulate([MON, MON + 1]).progress, day(MON + 20))).toBeUndefined();
    expect(stoppedToTell(simulate([MON, MON + 1, MON + 2], { ...emptyProgress, bestStreak: 9 }).progress, day(MON + 20))).toBe(3);
  });

  it('counts the practised days of saves from before `days` too (the streak counted back)', () => {
    // A streak of 4 up to Friday, nothing kept but the streak: back on Wednesday, four of the last 7 days practised.
    const old: Progress = { ...emptyProgress, streak: 4, lastDay: '2026-11-06' };
    expect(stoppedToTell(old, day(11))).toBeUndefined();
    expect(stoppedToTell(old, day(16))).toBe(4);
  });

  it('nothing to tell when nothing stopped', () => {
    expect(stoppedToTell(emptyProgress, day(MON))).toBeUndefined();
    const p = simulate([MON, MON + 1, MON + 2]).progress;
    expect(stoppedToTell(p, day(MON + 3))).toBeUndefined();
  });
});

describe('the screen itself', () => {
  it('Bram waves with an open hand, no thumb up (rude in some countries: 30 October 2026)', () => {
    const html = renderToStaticMarkup(createElement(StreakStopped, { streak: 12, best: 21, onDone: () => {} }));
    expect(html).toContain('ch-act-wave');
    // The thumb-up hand of Characters.tsx (Hand, kind 'thumb'): the raised thumb.
    expect(html).not.toContain('y="-10.4"');
  });
});
