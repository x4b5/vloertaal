import { describe, expect, it } from 'vitest';
import { addPoints, comboOf, DAY_GOAL, SFEER, sfeerOf, withSfeer, dayPoints, finishPlayLesson, levelOf, levelShare, PERFECT_BONUS, playAskDue, playOn, pointsFor, TOOLS, toolsFor, withCalm, withPlay } from '../src/lib/play';

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

/** More game (the owner, 23 November 2026): levels, today's goal, the toolbox, a perfect lesson. */
describe('the game mode: more game', () => {
  it('levels by all points: Starter 0, Leerling 150 ... Expert 2200, then an Expert star every 1000', () => {
    expect(levelOf(0)).toMatchObject({ n: 1, stars: 0, from: 0, to: 150 });
    expect(levelOf(149).n).toBe(1);
    expect(levelOf(150)).toMatchObject({ n: 2, from: 150, to: 400 });
    expect(levelOf(2200)).toMatchObject({ n: 6, stars: 1, from: 2200, to: 3200 });
    expect(levelOf(3300)).toMatchObject({ n: 7, stars: 2, from: 3200, to: 4200 });
    expect(levelShare(275)).toBeCloseTo(0.5);
  });

  it('a finished lesson: a bonus without mistakes, today\'s points, the next tool, a new level', () => {
    const { next, outcome } = finishPlayLesson({ playPoints: 100, playDay: { day: '2026-11-23', points: 60 } }, 70, true, '2026-11-23');
    expect(outcome).toMatchObject({ points: 120, perfect: true, all: 220, dayGoal: true, tool: TOOLS[0] });
    expect(outcome.levelUp?.n).toBe(2);
    expect(next).toEqual({ playPoints: 220, playDay: { day: '2026-11-23', points: 180 }, playLessons: 1 });
    // Another day: today's points start again; the goal is reached once a day.
    const later = finishPlayLesson(next, 30, false, '2026-11-24');
    expect(later.outcome).toMatchObject({ points: 30, perfect: false, dayGoal: false, tool: TOOLS[1] });
    expect(later.outcome.levelUp).toBeUndefined();
    expect(dayPoints(later.next, '2026-11-24')).toBe(30);
    expect(finishPlayLesson({ playDay: { day: '2026-11-24', points: 120 } }, 40, false, '2026-11-24').outcome.dayGoal).toBe(false);
  });

  it('the toolbox fills one tool a lesson and stops when it is full; every tool is a drawn word', () => {
    expect(toolsFor(0)).toEqual([]);
    expect(toolsFor(3)).toEqual(TOOLS.slice(0, 3));
    expect(toolsFor(99)).toHaveLength(TOOLS.length);
    expect(new Set(TOOLS).size).toBe(TOOLS.length);
    expect(finishPlayLesson({ playLessons: TOOLS.length }, 10, false, '2026-11-23').outcome.tool).toBeUndefined();
    expect(DAY_GOAL).toBe(100);
    expect(PERFECT_BONUS).toBe(50);
  });
});

/** "Sfeer" (the owner, 23 November 2026): Kalm, Standaard, Spel as one setting over calm and play. */
describe('Sfeer: one setting for calm and game', () => {
  it('reads the mood from what was saved, so old progress keeps its choice', () => {
    expect(sfeerOf({})).toBe('standard');
    expect(sfeerOf({ calm: 'auto' })).toBe('standard');
    expect(sfeerOf({ calm: 'on' })).toBe('calm');
    expect(sfeerOf({ play: true, calm: 'off' })).toBe('game');
    expect(sfeerOf({ play: true, calm: 'on' })).toBe('calm');
  });

  it('writes calm and play together; each choice reads back as itself', () => {
    for (const s of SFEER) expect(sfeerOf(withSfeer({ play: true, calm: 'on' }, s))).toBe(s);
    expect(withSfeer({ play: true, calm: 'off' }, 'calm')).toEqual({ calm: 'on', playAsked: true });
    expect(withSfeer({ calm: 'on' }, 'standard')).toEqual({ calm: 'auto', playAsked: true });
    expect(withSfeer({}, 'game')).toEqual({ play: true, calm: 'off', playAsked: true });
  });
});
