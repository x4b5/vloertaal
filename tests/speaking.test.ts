import { describe, expect, it } from 'vitest';
import { allLessons, findLesson } from '../src/content/curriculum';
import { tokenize } from '../src/lib/answers';
import { buildLesson, isGraded, needsAudio, type Exercise } from '../src/lib/exercises';
import { kindsOf, makeSave, restoreSave } from '../src/lib/resume';
import { isWord, shortSentence, speakPlacement, withSpeaking } from '../src/lib/speaking';

/** The ids an exercise is about, as speakPlacement sees them. */
function about(ex: Exercise): string[] {
  if ('word' in ex) return [ex.word.id];
  if (ex.kind === 'build') return [ex.sentence.id];
  if (ex.kind === 'match') return ex.words.map((w) => w.id);
  return [];
}

describe('speaking practice placement', () => {
  for (const lesson of allLessons) {
    it(`${lesson.id}: one "say it" near the end, on something already taught`, () => {
      for (const review of [false, true]) {
        for (const seed of [1, 42, 999]) {
          const without = buildLesson(lesson, { review, seed });
          const list = buildLesson(lesson, { review, seed, speak: true });
          const speaks = list.filter((e) => e.kind === 'speak');
          expect(speaks).toHaveLength(1);
          const at = list.findIndex((e) => e.kind === 'speak');
          const ex = list[at] as Extract<Exercise, { kind: 'speak' }>;

          // Adding it changes nothing else: the other exercises are the same, in the same order.
          expect(list.filter((e) => e.kind !== 'speak')).toEqual(without);
          // Near the end (before the closing listening and typing), never first.
          expect(at).toBe(list.length - 3);
          expect(at).toBeGreaterThan(0);
          // Never the lesson's first word.
          expect(ex.item.id).not.toBe(lesson.words[0].id);
          // Short: a word, or a sentence of at most 5 words.
          if (!isWord(ex.item)) expect(tokenize(ex.item.nl).length).toBeLessThanOrEqual(5);
          // Already taught before it, and not the item of its neighbours.
          expect(list.slice(0, at).some((e) => about(e).includes(ex.item.id))).toBe(true);
          expect(about(list[at - 1])).not.toContain(ex.item.id);
          expect(about(list[at + 1])).not.toContain(ex.item.id);
        }
      }
    });
  }

  it('prefers a short sentence the lesson built', () => {
    const lesson = findLesson('l.gear')!.lesson;
    const list = buildLesson(lesson, { review: false, seed: 3, speak: true });
    const ex = list.find((e) => e.kind === 'speak') as Extract<Exercise, { kind: 'speak' }>;
    expect(isWord(ex.item)).toBe(false);
    expect(lesson.sentences.filter(shortSentence).map((s) => s.id)).toContain(ex.item.id);
  });

  it('falls back to a word (never the first) when no short sentence fits', () => {
    const lesson = { ...findLesson('l.gear')!.lesson, sentences: [] };
    const list = buildLesson(lesson, { review: false, seed: 5, speak: true });
    const ex = list.find((e) => e.kind === 'speak') as Extract<Exercise, { kind: 'speak' }>;
    expect(isWord(ex.item)).toBe(true);
    expect(ex.item.id).not.toBe(lesson.words[0].id);
  });

  it('is left out without sound, when switched off, and when nothing fits', () => {
    const lesson = findLesson('l.gear')!.lesson;
    expect(buildLesson(lesson, { review: false, seed: 1, speak: true, quiet: true }).some((e) => e.kind === 'speak')).toBe(false);
    expect(buildLesson(lesson, { review: false, seed: 1 }).some((e) => e.kind === 'speak')).toBe(false);
    expect(buildLesson(lesson, { review: false, seed: 1, speak: false }).some((e) => e.kind === 'speak')).toBe(false);
    // Too short a list, or only the first word taught: no placement.
    expect(speakPlacement([{ kind: 'intro' }, { kind: 'listen' }], lesson)).toBeNull();
    const first = lesson.words[0];
    const onlyFirst = [{ kind: 'intro', word: first }, { kind: 'meaning', word: first }, { kind: 'listen', word: first }, { kind: 'type', word: first }];
    expect(speakPlacement(onlyFirst, { ...lesson, sentences: [] })).toBeNull();
    expect(withSpeaking(onlyFirst, { ...lesson, sentences: [] }, () => ({ kind: 'speak' }))).toBe(onlyFirst);
  });

  it('is the same for the same seed, so a saved lesson resumes', () => {
    const lesson = findLesson('l.people')!.lesson;
    const a = buildLesson(lesson, { review: false, seed: 77, speak: true });
    const b = buildLesson(lesson, { review: false, seed: 77, speak: true });
    expect(b).toEqual(a);
    const save = makeSave({ lessonId: lesson.id, review: false, quiet: false, seed: 77, initial: a, queue: a, index: 4, right: 1, total: 2, words: {}, run: 1, misses: 0, now: 0 })!;
    expect(save.kinds).toBe(kindsOf(a));
    expect(restoreSave(save, b)).not.toBeNull();
    // A save made without speaking does not fit the list with it: the lesson starts fresh.
    const plain = buildLesson(lesson, { review: false, seed: 77 });
    const old = makeSave({ lessonId: lesson.id, review: false, quiet: false, seed: 77, initial: plain, queue: plain, index: 4, right: 1, total: 2, words: {}, run: 1, misses: 0, now: 0 })!;
    expect(restoreSave(old, a)).toBeNull();
  });

  it('never counts as a mistake and needs no "listen" skip', () => {
    const lesson = findLesson('l.gear')!.lesson;
    const ex = buildLesson(lesson, { review: false, seed: 1, speak: true }).find((e) => e.kind === 'speak')!;
    expect(isGraded(ex)).toBe(false);
    expect(needsAudio(ex)).toBe(false);
  });
});
