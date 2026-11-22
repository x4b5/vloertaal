import { describe, expect, it } from 'vitest';
import { addPoints, comboOf, playAskDue, playOn, pointsFor, withCalm, withPlay } from '../src/lib/play';

/** "Spelmodus" (src/lib/play.ts): the owner's choice of 22 November 2026. */
describe('the game mode', () => {
  it('is off unless chosen, and never with "Rustig scherm" on', () => {
    expect(playOn({})).toBe(false);
    expect(playOn({ play: true, calm: 'off' })).toBe(true);
    expect(playOn({ play: true, calm: 'on' })).toBe(false);
  });

  it('choosing it switches the calm screen off (also "auto"); "Rustig scherm: aan" switches it off', () => {
    expect(withPlay({ calm: 'on' }, true)).toEqual({ play: true, calm: 'off', playAsked: true });
    expect(withPlay({}, true)).toEqual({ play: true, calm: 'off', playAsked: true });
    expect(withPlay({ play: true, calm: 'off' }, false)).toEqual({ calm: 'off', playAsked: true });
    expect(withCalm({ play: true, calm: 'off' }, 'on')).toEqual({ calm: 'on' });
    expect(withCalm({ play: true, calm: 'off' }, 'auto')).toEqual({ play: true, calm: 'auto' });
  });

  it('points: 10 a right answer, ×2 from 3 in a row, ×3 from 5; "almost" half; a mistake takes nothing', () => {
    expect([1, 2, 3, 4, 5, 9].map(comboOf)).toEqual([1, 1, 2, 2, 3, 3]);
    expect(pointsFor(1, true)).toBe(10);
    expect(pointsFor(3, true)).toBe(20);
    expect(pointsFor(6, true)).toBe(30);
    expect(pointsFor(3, true, true)).toBe(10);
    expect(pointsFor(0, false)).toBe(0);
    expect(addPoints({ playPoints: 40 }, 25)).toEqual({ playPoints: 65 });
    expect(addPoints({}, 0)).toEqual({});
  });

  it('the home asks once, after the first lesson, and not who chose already', () => {
    expect(playAskDue({}, 0)).toBe(false);
    expect(playAskDue({}, 1)).toBe(true);
    expect(playAskDue({ playAsked: true }, 5)).toBe(false);
    expect(playAskDue({ calm: 'on' }, 5)).toBe(false);
  });
});
