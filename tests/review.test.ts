import { describe, expect, it } from 'vitest';
import { playLesson, units } from '../src/content/curriculum';
import { isMixLesson, mixLessonFor } from '../src/content/review';
import type { Lesson, Unit } from '../src/content/types';

const teaching = (u: Unit) => u.lessons.filter((l) => !isMixLesson(l));
const items = (l: Lesson) => [
  ...l.words.map((w) => w.id),
  ...l.sentences.map((s) => s.id),
  ...(l.dialogues ?? []).map((d) => d.reply.nl),
];
const mixOf = (u: Unit) => u.lessons.find(isMixLesson)!;

describe('mixed review only brings items the learner has met', () => {
  it('with only this unit played, it uses only this unit\'s items', () => {
    for (const unit of units) {
      const done = Object.fromEntries(teaching(unit).map((l) => [l.id, { best: 1, times: 1 }]));
      const own = new Set(teaching(unit).flatMap(items));
      const mix = playLesson(mixOf(unit).id, done)!.lesson;
      for (const id of items(mix)) expect(own.has(id), `${unit.id} ${id}`).toBe(true);
      expect(mix.words.length, unit.id).toBeGreaterThanOrEqual(4);
      // The written (static) review is the same own-only lesson.
      expect(items(mixOf(unit)).every((id) => own.has(id)), unit.id).toBe(true);
    }
  });

  it('the first unit\'s review does not bring later units\' words (e.g. "ik begrijp het niet")', () => {
    const first = units[0];
    const done = Object.fromEntries(teaching(first).map((l) => [l.id, { best: 1, times: 1 }]));
    const mix = playLesson(mixOf(first).id, done)!.lesson;
    expect(mix.words.some((w) => /begrijp/i.test(w.nl))).toBe(false);
    expect(mix.sentences.some((s) => /herhalen/i.test(s.nl))).toBe(false);
  });

  it('with every lesson finished, it only uses items of finished lessons and mixes in related units', () => {
    const done = Object.fromEntries(units.flatMap(teaching).map((l) => [l.id, { best: 1, times: 1 }]));
    const met = new Set(units.flatMap(teaching).flatMap(items));
    let mixedIn = 0;
    for (const unit of units) {
      const mix = mixLessonFor(unit, units, done);
      const own = new Set(teaching(unit).flatMap(items));
      for (const id of items(mix)) expect(met.has(id), `${unit.id} ${id}`).toBe(true);
      if (items(mix).some((id) => !own.has(id))) mixedIn++;
      expect(mix.words.length, unit.id).toBe(6);
    }
    expect(mixedIn).toBeGreaterThan(units.length / 2);
  });

  it('a related unit only counts with the lessons the learner finished', () => {
    const unit = units[0];
    const lessonsOf = new Map(units.map((u) => [u.id, teaching(u)]));
    const done: Record<string, unknown> = Object.fromEntries(teaching(unit).map((l) => [l.id, {}]));
    // One lesson of every other unit: nothing from their unplayed lessons may appear.
    for (const u of units.slice(1)) done[lessonsOf.get(u.id)![0].id] = {};
    const allowed = new Set(units.flatMap(teaching).filter((l) => done[l.id]).flatMap(items));
    const mix = mixLessonFor(unit, units, done);
    for (const id of items(mix)) expect(allowed.has(id), id).toBe(true);
  });

  it('is deterministic and stable while nothing changes', () => {
    const unit = units[3];
    const done = Object.fromEntries(units.slice(0, 4).flatMap(teaching).map((l) => [l.id, {}]));
    expect(mixLessonFor(unit, units, done)).toBe(mixLessonFor(unit, units, { ...done }));
  });
});
