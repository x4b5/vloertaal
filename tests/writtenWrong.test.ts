import { describe, expect, it } from 'vitest';
import { teachingLessons } from '../src/content/curriculum';
import { addDays, addLessonWords, applyReview, MADE_FROM_BOX, type Cards } from '../src/lib/spaced';
import { mean, oldestFirst, simulate, strongWords } from './reviewSim';

/**
 * A dictation written wrong costs one box, not the whole way back (the owner's request, 4 November
 * 2026): from MADE_FROM_BOX on a word that was wrong only in writing (every other question on it
 * right; LessonPlayer's LessonResult.written) goes one box down and comes back tomorrow
 * (lib/spaced.ts wrongCard). A wrong recognition question still sends it to box 1.
 */

const TODAY = '2026-11-04';
const [a, b, c, d] = teachingLessons[3].words.map((w) => w.id);
const tomorrow = addDays(TODAY, 1);

describe('wrong in writing: one box down', () => {
  it('moves a word of box 3 or higher one box down, back tomorrow', () => {
    const cards: Cards = { [a]: { box: 3, due: TODAY }, [b]: { box: 5, due: TODAY }, [c]: { box: 6, due: TODAY } };
    const next = applyReview(cards, { [a]: false, [b]: false, [c]: false }, TODAY, [], undefined, [a, b, c]);
    expect(next[a]).toEqual({ box: 2, due: tomorrow });
    expect(next[b]).toEqual({ box: 4, due: tomorrow });
    expect(next[c]).toEqual({ box: 5, due: tomorrow });
    expect(MADE_FROM_BOX).toBe(3);
  });

  it('still sends a word to box 1 below box 3, after a wrong recognition question, and without the list', () => {
    const cards: Cards = { [a]: { box: 2, due: TODAY }, [b]: { box: 5, due: TODAY }, [c]: { box: 4, due: TODAY } };
    // a: box 2 (below MADE_FROM_BOX); b: wrong in another question (not in `written`); c: no list (as before).
    expect(applyReview(cards, { [a]: false }, TODAY, [], undefined, [a])[a]).toEqual({ box: 1, due: tomorrow });
    expect(applyReview(cards, { [b]: false }, TODAY, [], undefined, [])[b]).toEqual({ box: 1, due: tomorrow });
    expect(applyReview(cards, { [c]: false }, TODAY)[c]).toEqual({ box: 1, due: tomorrow });
    // A word not due yet (a top-up) that was wrong only in writing: one box down too.
    expect(applyReview({ [d]: { box: 4, due: addDays(TODAY, 3) } }, { [d]: false }, TODAY, [], undefined, [d])[d]).toEqual({ box: 3, due: tomorrow });
  });

  it('leaves a right answer as it was, also when its id is in the list', () => {
    const cards: Cards = { [a]: { box: 3, due: TODAY } };
    expect(applyReview(cards, { [a]: true }, TODAY, [a], undefined, [a])).toEqual(applyReview(cards, { [a]: true }, TODAY, [a]));
  });

  it('does the same after a lesson done again (addLessonWords)', () => {
    const words = teachingLessons[3].words;
    const cards: Cards = { [a]: { box: 4, due: addDays(TODAY, 5) }, [b]: { box: 4, due: addDays(TODAY, 5) } };
    const next = addLessonWords(cards, words, { [a]: false, [b]: false }, TODAY, [a]);
    expect(next[a]).toEqual({ box: 3, due: tomorrow });
    expect(next[b]).toEqual({ box: 1, due: tomorrow });
    // A new word still starts in box 1.
    expect(next[c]).toEqual({ box: 1, due: tomorrow });
  });
});

/**
 * The week plan over 8 weeks (tests/reviewSim.ts), the oldest due first in both, so only this
 * rule differs. Measured on 4 November 2026: a word of box 3 or higher went back to box 1 15 times
 * (15 of 15 mistakes on such a word); with this rule 2 times of 17 (the rest one box down), and
 * 23.3 words instead of 22.7 are in box 4 or higher after 8 weeks.
 */
describe('in the week plan (simulation with the app\'s own functions)', () => {
  const seeds = [12345, 1, 2];
  const before = seeds.map((seed) => simulate({ seed, pick: oldestFirst, written: false }));
  const now = seeds.map((seed) => simulate({ seed, pick: oldestFirst, written: true }));

  it('sends far fewer strong words back to box 1, and keeps more in box 4 or higher', () => {
    const toBox1 = (runs: typeof now) => mean(runs.map((r) => r.strongToBox1));
    const strongWrong = (runs: typeof now) => mean(runs.map((r) => r.strongWrong));
    expect(toBox1(before)).toBe(strongWrong(before));
    expect(toBox1(before)).toBeGreaterThan(10);
    expect(toBox1(now)).toBeLessThan(0.25 * strongWrong(now));
    expect(mean(now.map((r) => strongWords(r.cards)))).toBeGreaterThan(mean(before.map((r) => strongWords(r.cards))));
  });
});
