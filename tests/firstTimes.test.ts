import { beforeEach, describe, expect, it } from 'vitest';
import { firstTimes, timesShown } from '../src/lib/firstTimes';

/** A hint only the first few times on this phone (the owner's choice, 2 November 2026). */
describe('firstTimes', () => {
  beforeEach(() => { try { localStorage.clear(); } catch { /* no storage in this test run */ } });
  it('is true the first n times, then false, per hint', () => {
    const seen = [1, 2, 3, 4].map(() => firstTimes('stamp-later-test', 3));
    expect(seen).toEqual([true, true, true, false]);
    expect(timesShown('stamp-later-test')).toBe(3);
    expect(firstTimes('another-hint-test', 1)).toBe(true);
    expect(firstTimes('another-hint-test', 1)).toBe(false);
  });
});
