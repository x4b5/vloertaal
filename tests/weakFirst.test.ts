import { describe, expect, it } from 'vitest';
import { teachingLessons } from '../src/content/curriculum';
import { addDays, DAILY_MAX, dailyCard, dailyWordIds, dueIds, WEAK_PLACES, type Cards } from '../src/lib/spaced';
import { mean, median, oldestFirst, simulate, strongWords } from './reviewSim';

/**
 * "Herhaal vandaag" reaches the weak words in time (the owner's request, 4 November 2026): at
 * least half of its DAILY_MAX places go to cards in box 1 and 2 when there are, box 1 first and
 * the most recently due first (lib/spaced.ts dailyWordIds). Oldest first alone put a new word and
 * a word answered wrong behind the whole backlog.
 */

const TODAY = '2026-11-04';
const words = teachingLessons.slice(0, 6).flatMap((l) => l.words).map((w) => w.id);

describe('today\'s review: half of the places for the weak words', () => {
  it('takes the new and the wrong words of yesterday before a backlog of strong ones', () => {
    // 20 strong words overdue for a week, 3 new words (due today, the day after their lesson).
    const strong = words.slice(0, 20);
    const fresh = words.slice(20, 23);
    const cards: Cards = {
      ...Object.fromEntries(strong.map((id, i) => [id, { box: 3 + (i % 3), due: addDays(TODAY, -7 - (i % 4)) }])),
      ...Object.fromEntries(fresh.map((id) => [id, { box: 1, due: TODAY }])),
    };
    const picked = dailyWordIds(cards, TODAY);
    expect(picked).toHaveLength(DAILY_MAX);
    expect(picked).toEqual(expect.arrayContaining(fresh));
    // Before, the 10 oldest: none of the new words.
    expect(oldestFirst(cards, TODAY).some((id) => fresh.includes(id))).toBe(false);
    // The rest are the oldest due, in the order of dueIds.
    const due = dueIds(cards, TODAY);
    expect(picked).toEqual(due.filter((id) => picked.includes(id)));
    expect(picked.filter((id) => !fresh.includes(id))).toEqual(due.filter((id) => !fresh.includes(id)).slice(0, DAILY_MAX - fresh.length));
  });

  it('gives at least half of the places to weak words when more are due, box 1 first, the most recent first', () => {
    // 12 weak words (8 in box 2, 4 in box 1), due on different days, and 12 strong ones, all older.
    const weak2 = words.slice(0, 8);
    const weak1 = words.slice(8, 12);
    const strong = words.slice(12, 24);
    const cards: Cards = {
      ...Object.fromEntries(strong.map((id, i) => [id, { box: 4, due: addDays(TODAY, -20 - i) }])),
      ...Object.fromEntries(weak2.map((id, i) => [id, { box: 2, due: addDays(TODAY, -i) }])),
      ...Object.fromEntries(weak1.map((id, i) => [id, { box: 1, due: addDays(TODAY, -2 * i) }])),
    };
    const picked = dailyWordIds(cards, TODAY);
    expect(picked).toHaveLength(DAILY_MAX);
    const weakPicked = picked.filter((id) => cards[id].box <= 2);
    expect(weakPicked.length).toBeGreaterThanOrEqual(WEAK_PLACES);
    // All four of box 1, then the most recently due of box 2 (due today).
    expect(weakPicked).toEqual(expect.arrayContaining([...weak1, weak2[0]]));
    // The other half: the oldest strong words.
    expect(picked.filter((id) => cards[id].box === 4)).toEqual(strong.slice().reverse().slice(0, DAILY_MAX - WEAK_PLACES));
  });

  it('is as before with no weak words, with no backlog, and the home card counts the same words', () => {
    const strong: Cards = Object.fromEntries(words.slice(0, 15).map((id, i) => [id, { box: 3, due: addDays(TODAY, -i) }]));
    expect(dailyWordIds(strong, TODAY)).toEqual(oldestFirst(strong, TODAY));
    const few: Cards = Object.fromEntries(words.slice(0, 8).map((id, i) => [id, { box: 1 + (i % 5), due: addDays(TODAY, -i) }]));
    expect(dailyWordIds(few, TODAY)).toEqual(oldestFirst(few, TODAY));
    // A short review is topped up as before (the next words to come).
    const two: Cards = { [words[0]]: { box: 1, due: TODAY }, [words[1]]: { box: 4, due: TODAY }, [words[2]]: { box: 2, due: addDays(TODAY, 1) }, [words[3]]: { box: 3, due: addDays(TODAY, 3) } };
    expect(dailyWordIds(two, TODAY)).toEqual(oldestFirst(two, TODAY));
    const mixed: Cards = { ...strong, ...Object.fromEntries(words.slice(20, 26).map((id) => [id, { box: 1, due: TODAY }])) };
    expect(dailyCard(mixed, TODAY)?.due).toBe(dailyWordIds(mixed, TODAY).length);
  });
});

/**
 * The week plan over 8 weeks (tests/reviewSim.ts: 3 sessions a week, every 4th a mixed review,
 * 90% right when recognising and 70% when writing), with the app's own functions, three seeds.
 * "before": the oldest due first, and a wrong dictation back to box 1; "now": half of the places
 * for the weak words, and a word wrong only in writing one box down (tests/writtenWrong.test.ts).
 * Measured on 4 November 2026 (medians in days; words in box 4 or higher, of about 108):
 *
 *                                    new word back  wrong word back  box 4+
 *   before                                 7              7           22.7
 *   only the weak half                     3              2           17.7
 *   now (also: wrong in writing)           3              2           18.3
 *   with "eerst herhalen" (> 15 due; 60 words learned instead of 108):
 *     before                               2              2           36.3
 *     now                                  2              2           40.3
 *
 * So the weak words come back within days. The price: with far more due than 10 a session, the
 * strong words wait longer and fewer reach box 4. With fewer due (a second review round instead
 * of a new lesson when more than 15 are due), there is no price: more reach box 4 than before.
 */
describe('the week plan over 8 weeks (simulation with the app\'s own functions)', () => {
  const seeds = [12345, 1, 2];
  const run = (o: Parameters<typeof simulate>[0]) => seeds.map((seed) => simulate({ seed, ...o }));
  const now = run({});
  const before = run({ pick: oldestFirst, written: false });
  const firstNow = run({ reviewFirst: 15 });
  const firstBefore = run({ reviewFirst: 15, pick: oldestFirst, written: false });
  const backNew = (runs: ReturnType<typeof run>) => median(runs.flatMap((r) => r.firstBack));
  const backWrong = (runs: ReturnType<typeof run>) => median(runs.flatMap((r) => r.wrongBack));
  const box4 = (runs: ReturnType<typeof run>) => Math.round(mean(runs.map((r) => strongWords(r.cards))) * 10) / 10;

  it('brings a new word and a word answered wrong back within a few days, not after a week', () => {
    expect(backNew(before)).toBeGreaterThanOrEqual(6);
    expect(backNew(now)).toBeLessThanOrEqual(3);
    expect(backWrong(before)).toBeGreaterThanOrEqual(6);
    expect(backWrong(now)).toBeLessThanOrEqual(3);
    // With fewer due both come back soon; the new pick is no slower.
    expect(backNew(firstNow)).toBeLessThanOrEqual(backNew(firstBefore));
    expect(backWrong(firstNow)).toBeLessThanOrEqual(backWrong(firstBefore));
  });

  it('costs some words in box 4 when far more is due than fits, none with fewer due', () => {
    const table = { before: box4(before), now: box4(now), firstBefore: box4(firstBefore), firstNow: box4(firstNow) };
    // The numbers in the comment above (a change in the lessons or the review moves them a little).
    expect(table.now).toBeLessThan(table.before);
    expect(table.now).toBeGreaterThanOrEqual(0.7 * table.before);
    expect(table.firstNow).toBeGreaterThanOrEqual(table.firstBefore);
  });

  it('gives the weak words at least half of the places whenever there are enough of them', () => {
    const shares = now.flatMap((r) => r.weakShare);
    expect(shares.length).toBeGreaterThan(20);
    for (const share of shares) expect(share).toBeGreaterThanOrEqual(0.5);
  });
});
