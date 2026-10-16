import { describe, expect, it } from 'vitest';
import { allLessons, units } from '../src/content/curriculum';
import { lessonSayings, sayingForLesson, sayingQuestion, SAYINGS_FROM, sayingLessons, sayingsTips } from '../src/content/sayings';
import { tipForLesson } from '../src/content/culture';
import { themeOf } from '../src/content/themes';
import { buildLesson, isGraded } from '../src/lib/exercises';
import { routeOrder } from '../src/lib/route';

const lessonsById = new Map(allLessons.map((l) => [l.id, l]));

describe('Uitdrukkingen en gezegden (src/content/sayings.ts)', () => {
  it('is a unit of the theme Samenwerken, right after "Omgang met collega\'s"', () => {
    expect(units.map((u) => u.id)).toContain('u.sayings');
    expect(themeOf('u.sayings')?.id).toBe('theme.together');
    const order = routeOrder(undefined).map((u) => u.id);
    expect(order[order.indexOf('u.social') + 1]).toBe('u.sayings');
    expect(SAYINGS_FROM).toBe(sayingLessons[0].id);
  });

  it('teaches every saying with what its words say and what it means', () => {
    for (const l of sayingLessons) {
      expect(l.words).toHaveLength(6);
      for (const w of l.words) {
        expect(w.literal?.trim(), w.id).toBeTruthy();
        expect(w.literal, w.id).not.toBe(w.en);
      }
      expect(tipForLesson(l.id), l.id).toBeDefined();
    }
    expect(sayingsTips.map((t) => t.lessonId)).toEqual(sayingLessons.map((l) => l.id));
  });

  it('puts each later saying in an existing lesson that comes after the unit, one per lesson', () => {
    expect(new Set(lessonSayings.map((s) => s.lessonId)).size).toBe(lessonSayings.length);
    expect(new Set(lessonSayings.map((s) => s.id)).size).toBe(lessonSayings.length);
    for (const s of lessonSayings) {
      expect(lessonsById.has(s.lessonId), s.id).toBe(true);
      expect(s.id).toMatch(/^zg\.[a-z]+$/);
    }
    // After the unit on every learner's path (with each sector, its own unit moves forward).
    for (const sector of [undefined, 'none', 'logistics', 'construction', 'production', 'care', 'hospitality', 'cleaning'] as const) {
      const order = routeOrder(sector).flatMap((u) => u.lessons.map((l) => l.id));
      const from = order.indexOf(SAYINGS_FROM);
      expect(from, String(sector)).toBeGreaterThan(0);
      for (const s of lessonSayings) expect(order.indexOf(s.lessonId), `${sector} ${s.id}`).toBeGreaterThan(from);
    }
  });

  it('quotes the saying as it is said in its question, with three options and the best first', () => {
    for (const s of lessonSayings) {
      expect(s.situation, s.id).toContain(`"${s.nl}"`);
      const q = sayingQuestion(s);
      expect(q.options.map((o) => o.best)).toEqual([true, false, false]);
      expect(q.situation.ask).toBe('which');
      expect(q.situation.nl).toBe(s.nl);
    }
  });

  it('shows a lesson\'s saying near the end, only after the unit and not in a review', () => {
    for (const s of lessonSayings) {
      const lesson = lessonsById.get(s.lessonId)!;
      const without = buildLesson(lesson, { review: false, seed: 4 });
      const withIt = buildLesson(lesson, { review: false, seed: 4, sayings: true });
      expect(without.some((e) => e.kind === 'saying'), s.id).toBe(false);
      // The card, then "What does she mean?" about the same saying.
      const at = withIt.findIndex((e) => e.kind === 'saying');
      expect(at, s.id).toBeGreaterThan(0);
      const next = withIt[at + 1];
      expect(next.kind === 'situation' && next.tip.id === s.id, s.id).toBe(true);
      expect(isGraded(withIt[at])).toBe(false);
      // Every other exercise stays the same with or without it.
      expect(withIt.filter((e) => !(e.kind === 'saying' || (e.kind === 'situation' && e.tip.id === s.id)))).toEqual(without);
      expect(buildLesson(lesson, { review: true, seed: 4, sayings: true }).some((e) => e.kind === 'saying'), s.id).toBe(false);
    }
    // A lesson without a saying of its own: nothing changes.
    const hello = lessonsById.get('l.hello')!;
    expect(sayingForLesson('l.hello')).toBeUndefined();
    expect(buildLesson(hello, { review: false, seed: 4, sayings: true })).toEqual(buildLesson(hello, { review: false, seed: 4 }));
  });
});
