import { beforeEach, describe, expect, it } from 'vitest';
import { findLesson } from '../src/content/curriculum';
import { buildLesson } from '../src/lib/exercises';
import {
  RESUME_MAX_AGE, clearSave, fresh, loadSave, loadSaves, makeSave, parseSave, restoreSave, resumeCount, writeSave,
  type LessonSave,
} from '../src/lib/resume';

const store = new Map<string, string>();
beforeEach(() => {
  store.clear();
  (globalThis as { localStorage?: unknown }).localStorage = {
    getItem: (k: string) => store.get(k) ?? null,
    setItem: (k: string, v: string) => void store.set(k, v),
    removeItem: (k: string) => void store.delete(k),
  };
});

const lesson = findLesson('l.gear')!.lesson;
const NOW = new Date(2026, 9, 8, 12).getTime();
const HOUR = 60 * 60 * 1000;

/** A run of the lesson stopped at exercise 6, with two mistakes queued to come back. */
function midLesson(seed = 42) {
  const initial = buildLesson(lesson, { review: false, seed });
  const queue = [...initial, initial[3], initial[5]];
  const save = makeSave({
    lessonId: lesson.id, review: false, quiet: false, seed, initial, queue, index: 6,
    right: 2, total: 4, words: { [lesson.words[0].id]: false }, run: 1, misses: 0, now: NOW,
  })!;
  return { initial, queue, save };
}

describe('resume an interrupted lesson', () => {
  it('saves the seed and the queued mistakes as indexes, and rebuilds the same lesson', () => {
    const { queue, save } = midLesson();
    expect(save.repeats).toEqual([3, 5]);
    expect(save.planned).toBe(queue.length - 2);
    // Through storage (JSON) and back.
    writeSave(save);
    const back = loadSave(lesson.id, NOW + HOUR)!;
    expect(back).toEqual(save);
    const rebuilt = buildLesson(lesson, { review: back.review, seed: back.seed, quiet: back.quiet });
    const restored = restoreSave(back, rebuilt)!;
    expect(restored.index).toBe(6);
    expect(restored.queue).toEqual(queue);
    // The queued mistakes are the same objects as in the list, as the player queues them.
    expect(restored.queue[restored.queue.length - 1]).toBe(rebuilt[5]);
    expect(back.right).toBe(2);
    expect(back.total).toBe(4);
    expect(back.run).toBe(1);
    expect(back.words).toEqual({ [lesson.words[0].id]: false });
    expect(resumeCount(back)).toEqual({ done: 6, of: queue.length });
  });

  it('has nothing to save before the first answer, or past the end', () => {
    const initial = buildLesson(lesson, { review: false, seed: 1 });
    const args = { lessonId: lesson.id, review: false, quiet: false, seed: 1, initial, queue: initial, right: 0, total: 0, words: {}, run: 0, misses: 0, now: NOW };
    expect(makeSave({ ...args, index: 0 })).toBeNull();
    expect(makeSave({ ...args, index: initial.length })).toBeNull();
  });

  it('does not resume a lesson that changed since (other exercises from the seed)', () => {
    const { save } = midLesson();
    expect(restoreSave(save, buildLesson(lesson, { review: false, seed: 42 }).slice(1))).toBeNull();
    expect(restoreSave({ ...save, kinds: save.kinds.replace(/^../, 'zz') }, buildLesson(lesson, { review: false, seed: 42 }))).toBeNull();
  });

  it('offers a save for two days, then drops it', () => {
    const { save } = midLesson();
    writeSave(save);
    expect(fresh(save, NOW + RESUME_MAX_AGE - 1)).toBe(true);
    expect(loadSave(lesson.id, NOW + 47 * HOUR)).not.toBeNull();
    expect(loadSave(lesson.id, NOW + RESUME_MAX_AGE)).toBeNull();
    // The stale save is removed from storage.
    expect(store.size).toBe(0);
    // A save from the future (clock changed) is not trusted either.
    expect(fresh(save, NOW - HOUR)).toBe(false);
  });

  it('keeps one save per lesson; finishing or restarting clears only that one', () => {
    const { save } = midLesson();
    writeSave(save);
    writeSave({ ...save, lessonId: 'l.hello' });
    expect(Object.keys(loadSaves(NOW))).toEqual([lesson.id, 'l.hello']);
    clearSave(lesson.id);
    expect(Object.keys(loadSaves(NOW))).toEqual(['l.hello']);
    clearSave();
    expect(loadSaves(NOW)).toEqual({});
    expect(store.size).toBe(0);
  });

  it('ignores broken saves', () => {
    const { save } = midLesson();
    expect(parseSave(null)).toBeNull();
    expect(parseSave({ ...save, seed: 'x' })).toBeNull();
    expect(parseSave({ ...save, repeats: [save.planned] })).toBeNull();
    expect(parseSave({ ...save, index: save.planned + save.repeats.length })).toBeNull();
    expect(parseSave({ ...save, right: 5, total: 4 })).toBeNull();
    const old = { ...save } as Partial<LessonSave>;
    delete old.quiet;
    expect(parseSave(old)?.quiet).toBe(false);
    store.set('vloertaal:resume', '{not json');
    expect(loadSaves(NOW)).toEqual({});
    store.set('vloertaal:resume', JSON.stringify({ [lesson.id]: { ...save, lessonId: 'l.other' } }));
    expect(loadSaves(NOW)).toEqual({});
  });
});
