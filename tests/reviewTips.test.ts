import { describe, expect, it } from 'vitest';
import { tipForLesson } from '../src/content/culture';
import { units } from '../src/content/curriculum';
import { isMixLesson, mixLessonFor } from '../src/content/review';
import { buildLesson, isShortPhrase } from '../src/lib/exercises';

/**
 * A tip is read once, in its lesson. Its situation question comes back in the unit's mixed
 * review (another lesson's tip each day), and its "Zeg het zo" phrase is built there when it is
 * short. The mixed review's own words turn from day to day too (src/content/review.ts).
 */
const everything = Object.fromEntries(units.flatMap((u) => u.lessons.filter((l) => !isMixLesson(l)).map((l) => [l.id, true])));
const withTips = units.filter((u) => u.lessons.filter((l) => tipForLesson(l.id)).length >= 2);

describe('the tips come back in the mixed review', () => {
  it('every unit with tips asks one tip situation, without the tip card', () => {
    for (const u of units.filter((x) => x.lessons.some((l) => tipForLesson(l.id)))) {
      const list = buildLesson(mixLessonFor(u, units, everything, 20000), { review: false, seed: 1 });
      expect(list.filter((e) => e.kind === 'situation'), u.id).toHaveLength(1);
      expect(list.some((e) => e.kind === 'tip'), u.id).toBe(false);
    }
  });

  it('another lesson\'s tip on the next day', () => {
    expect(withTips.length).toBeGreaterThan(5);
    for (const u of withTips) {
      const tipOn = (day: number) => {
        const s = buildLesson(mixLessonFor(u, units, everything, day), { review: false, seed: 1 }).find((e) => e.kind === 'situation');
        return s && 'tip' in s ? s.tip.id : undefined;
      };
      const seen = new Set(Array.from({ length: u.lessons.length }, (_, i) => tipOn(20000 + i)));
      expect(seen.size, u.id).toBeGreaterThanOrEqual(2);
    }
  });

  it('builds the tip phrase when it is one short sentence, and still two builds in all', () => {
    let phrases = 0;
    for (const u of withTips) {
      for (let day = 20000; day < 20000 + u.lessons.length; day++) {
        const lesson = mixLessonFor(u, units, everything, day);
        const list = buildLesson(lesson, { review: false, seed: 1 });
        const s = list.find((e) => e.kind === 'situation');
        const tip = s && 'tip' in s ? s.tip : undefined;
        const builds = list.filter((e) => e.kind === 'build').map((e) => ('sentence' in e ? e.sentence.nl : ''));
        expect(builds.length, u.id).toBeLessThanOrEqual(2);
        if (tip && isShortPhrase(tip.phrase.nl) && !lesson.sentences.some((x) => x.nl === tip.phrase.nl)) {
          expect(builds, `${u.id} ${day}`).toContain(tip.phrase.nl);
          phrases++;
        }
      }
    }
    expect(phrases).toBeGreaterThan(10);
  });
});

describe("the mixed review's words turn from day to day", () => {
  it('another day brings other words of the unit (6 words, no repeats)', () => {
    let changed = 0;
    for (const u of units) {
      const a = mixLessonFor(u, units, everything, 20000).words.map((w) => w.id);
      const b = mixLessonFor(u, units, everything, 20001).words.map((w) => w.id);
      expect(new Set(b).size, u.id).toBe(b.length);
      expect(b.length, u.id).toBe(a.length);
      if (a.join() !== b.join()) changed++;
    }
    expect(changed).toBeGreaterThan(units.length / 2);
  });

  it('the same day gives the same lesson object', () => {
    const u = units[3];
    expect(mixLessonFor(u, units, everything, 20000)).toBe(mixLessonFor(u, units, everything, 20000));
  });
});

describe('isShortPhrase', () => {
  it('one sentence of at most 8 words', () => {
    expect(isShortPhrase('Kunt u dat herhalen?')).toBe(true);
    expect(isShortPhrase('Sorry. Kunt u dat herhalen?')).toBe(false);
    expect(isShortPhrase('een twee drie vier vijf zes zeven acht negen')).toBe(false);
  });
});
