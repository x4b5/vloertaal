import { describe, expect, it } from 'vitest';
import { teachingLessons } from '../src/content/curriculum';
import { buildLesson } from '../src/lib/exercises';
import { completeDaily, emptyProgress } from '../src/lib/progress';
import { DAILY_MAX, addDays, addLessonWords, applyReview, dailyLesson, dailyWordIds, dueIds, seedCards } from '../src/lib/spaced';

const TODAY = '2026-10-08';
const first = teachingLessons[0];

describe('Herhaal vandaag (spaced repetition)', () => {
  it('counts days across months', () => {
    expect(addDays('2026-10-31', 1)).toBe('2026-11-01');
    expect(addDays('2026-12-30', 7)).toBe('2027-01-06');
  });

  it('gives new words a card that comes back tomorrow, and resets a word answered wrong', () => {
    const cards = addLessonWords({}, first.words, {}, TODAY);
    for (const w of first.words) expect(cards[w.id]).toEqual({ box: 1, due: '2026-10-09' });
    const later = { ...cards, [first.words[0].id]: { box: 4, due: '2026-10-20' } };
    const again = addLessonWords(later, first.words, { [first.words[0].id]: false, [first.words[1].id]: true }, TODAY);
    expect(again[first.words[0].id]).toEqual({ box: 1, due: '2026-10-09' });
    // A word already in the box keeps its place when it was right (or not asked).
    expect(again[first.words[1].id]).toEqual(cards[first.words[1].id]);
  });

  it('moves a card up a box when right (longer wait) and back to box 1 when wrong', () => {
    const a = first.words[0].id;
    const b = first.words[1].id;
    let cards = { [a]: { box: 1, due: TODAY }, [b]: { box: 3, due: TODAY } };
    cards = applyReview(cards, { [a]: true, [b]: false }, TODAY);
    expect(cards[a]).toEqual({ box: 2, due: addDays(TODAY, 2) });
    expect(cards[b]).toEqual({ box: 1, due: addDays(TODAY, 1) });
    cards = applyReview({ [a]: { box: 6, due: TODAY } }, { [a]: true }, TODAY);
    expect(cards[a]).toEqual({ box: 6, due: addDays(TODAY, 30) });
  });

  it('asks at most a few minutes of words a day, oldest first, topped up when only a few are due', () => {
    const words = teachingLessons.slice(0, 5).flatMap((l) => l.words);
    const cards = Object.fromEntries(words.map((w, i) => [w.id, { box: 1, due: addDays(TODAY, i < 15 ? -1 - (i % 3) : 3) }]));
    expect(dueIds(cards, TODAY)).toHaveLength(15);
    expect(dailyWordIds(cards, TODAY)).toHaveLength(DAILY_MAX);
    const few = { [words[0].id]: { box: 1, due: TODAY }, [words[1].id]: { box: 2, due: addDays(TODAY, 1) }, [words[2].id]: { box: 2, due: addDays(TODAY, 2) }, [words[3].id]: { box: 2, due: addDays(TODAY, 5) } };
    expect(dailyWordIds(few, TODAY)).toEqual([words[0].id, words[1].id, words[2].id, words[3].id]);
    expect(dailyWordIds({ [words[0].id]: { box: 1, due: addDays(TODAY, 1) } }, TODAY)).toEqual([]);
  });

  it('builds a review that asks every word and never shows it as new', () => {
    const ids = teachingLessons.slice(3, 6).flatMap((l) => l.words.slice(0, 3)).map((w) => w.id);
    const lesson = dailyLesson(ids);
    expect(lesson.words.map((w) => w.id)).toEqual(ids);
    for (const quiet of [false, true]) {
      const ex = buildLesson(lesson, { review: true, seed: 5, quiet });
      expect(ex.some((e) => e.kind === 'intro')).toBe(false);
      const asked = new Set(ex.filter((e) => e.kind === 'meaning').map((e) => (e as { word: { id: string } }).word.id));
      for (const id of ids) expect(asked.has(id)).toBe(true);
    }
  });

  it('seeds cards for learners from before, spread over the coming days', () => {
    const done = Object.fromEntries(teachingLessons.slice(0, 6).map((l) => [l.id, { best: 1, times: 1 }]));
    const cards = seedCards(done, TODAY);
    expect(dueIds(cards, TODAY).length).toBeLessThanOrEqual(DAILY_MAX);
    expect(Object.keys(cards).length).toBeGreaterThan(DAILY_MAX);
  });

  it('counts for the day streak without adding a lesson', () => {
    const p = completeDaily({ ...emptyProgress, streak: 3, lastDay: '2026-10-07' }, 1, new Date(2026, 9, 8));
    expect(p.streak).toBe(4);
    expect(p.lastDay).toBe(TODAY);
    expect(p.completed).toEqual({});
  });
});
