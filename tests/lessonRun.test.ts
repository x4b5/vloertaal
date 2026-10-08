import { describe, expect, it } from 'vitest';
import { barParts, cheerFor, chimeStep, nextMisses, nextRun, runStampFor, wholeTones } from '../src/lib/lessonRun';

describe('run of right answers in a lesson', () => {
  it('counts up on a right answer and resets silently on a miss', () => {
    let run = 0;
    for (const ok of [true, true, true]) run = nextRun(run, ok);
    expect(run).toBe(3);
    expect(nextRun(run, false)).toBe(0);
  });

  it('counts misses in a row, so the head-scratch plays only on the first', () => {
    expect(nextMisses(0, false)).toBe(1);
    expect(nextMisses(1, false)).toBe(2);
    expect(nextMisses(2, true)).toBe(0);
  });

  it('reacts in tiers: pleased for 1–2, happy for 3–4, a second pump from 5', () => {
    expect([1, 2, 3, 4, 5, 9].map(cheerFor)).toEqual(['pleased', 'pleased', 'happy', 'happy', 'big', 'big']);
  });

  it('stamps runs of 3, 5 and 8 only', () => {
    expect([1, 2, 3, 4, 5, 6, 7, 8, 9].map(runStampFor)).toEqual([null, null, 3, null, 5, null, null, 8, null]);
  });

  it('raises the chime a whole tone per step, at most 3 steps', () => {
    expect([0, 1, 2, 3, 4, 10].map(chimeStep)).toEqual([0, 0, 1, 2, 3, 3]);
    expect(wholeTones(0)).toBe(1);
    expect(wholeTones(6)).toBeCloseTo(2);
  });
});

describe('lesson progress bar', () => {
  it('fills done exercises in ink and marks the current one', () => {
    expect(barParts(0, false, 10, 10)).toEqual({ done: 0, now: 0, slots: 10, tail: 0 });
    expect(barParts(3, false, 10, 10)).toEqual({ done: 0.3, now: 3, slots: 10, tail: 0 });
  });

  it('counts the current exercise as done once checked', () => {
    expect(barParts(3, true, 10, 10)).toMatchObject({ done: 0.4, now: null });
  });

  it('gives mistakes that come back a kraft tail at the end', () => {
    const p = barParts(9, true, 10, 12);
    expect(p.slots).toBe(12);
    expect(p.tail).toBeCloseTo(2 / 12);
    expect(p.done).toBeCloseTo(10 / 12);
  });

  it('never overfills', () => {
    expect(barParts(12, true, 10, 12).done).toBe(1);
  });
});
