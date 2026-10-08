import { describe, expect, it } from 'vitest';
import { allLessons } from '../src/content/curriculum';
import { tokenize } from '../src/lib/answers';
import { AUDIO_ONLY_KINDS, buildLesson, isUnlocked, needsAudio } from '../src/lib/exercises';

describe('lesson builder', () => {
  for (const lesson of allLessons) {
    it(`builds a valid lesson for ${lesson.id}`, () => {
      for (const review of [false, true]) {
        const exercises = buildLesson(lesson, { review, seed: 42 });
        expect(exercises.length).toBeGreaterThan(8);
        expect(exercises.some((e) => e.kind === 'intro')).toBe(!review);
        expect(exercises.filter((e) => e.kind === 'chat')).toHaveLength(lesson.dialogues?.length ?? 0);

        for (const ex of exercises) {
          if (ex.kind === 'meaning' || ex.kind === 'dutch' || ex.kind === 'listen') {
            // The right answer is among the options, and options are unambiguous.
            expect(ex.options.map((o) => o.id)).toContain(ex.word.id);
            expect(new Set(ex.options.map((o) => o.en)).size).toBe(ex.options.length);
            expect(new Set(ex.options.map((o) => o.nl)).size).toBe(ex.options.length);
          }
          if (ex.kind === 'chat') {
            // The right reply is there once, and every wrong reply is a real, different reply.
            const ids = ex.options.map((o) => o.id);
            expect(ids.filter((id) => id === ex.dialogue.reply.id)).toHaveLength(1);
            expect(new Set(ex.options.map((o) => o.nl)).size).toBe(ex.options.length);
            expect(ex.options.length).toBeGreaterThanOrEqual(2);
            expect(ex.options.length).toBeLessThanOrEqual(3);
          }
          if (ex.kind === 'build') {
            // All words of the sentence are available as tiles.
            const tiles = [...ex.tiles];
            for (const t of tokenize(ex.sentence.nl)) {
              const i = tiles.indexOf(t);
              expect(i).toBeGreaterThanOrEqual(0);
              tiles.splice(i, 1);
            }
            expect(tiles.length).toBeGreaterThan(0);
          }
        }
      }
    });
  }

  it('builds lessons without listening exercises when sound is off', () => {
    for (const lesson of allLessons) {
      for (const review of [false, true]) {
        for (const seed of [1, 7, 42, 2026]) {
          const loud = buildLesson(lesson, { review, seed });
          const quiet = buildLesson(lesson, { review, seed, quiet: true });
          expect(quiet.filter(needsAudio), `${lesson.id} seed ${seed}`).toEqual([]);
          expect(quiet.some((e) => AUDIO_ONLY_KINDS.includes(e.kind))).toBe(false);
          // Every listening exercise became a reading one: same length, same words practised.
          expect(quiet).toHaveLength(loud.length);
          expect(loud.some(needsAudio)).toBe(true);
          for (const ex of quiet) {
            if (ex.kind === 'meaning' || ex.kind === 'dutch') expect(ex.options.map((o) => o.id)).toContain(ex.word.id);
          }
        }
      }
    }
    // Sound on stays exactly as before.
    expect(buildLesson(allLessons[0], { review: false, seed: 7, quiet: false })).toEqual(buildLesson(allLessons[0], { review: false, seed: 7 }));
  });

  it('is reproducible with a seed', () => {
    const a = buildLesson(allLessons[0], { review: false, seed: 7 });
    const b = buildLesson(allLessons[0], { review: false, seed: 7 });
    expect(a).toEqual(b);
  });

  it('unlocks lessons in order', () => {
    const [first, second, third] = allLessons;
    expect(isUnlocked(first.id, {})).toBe(true);
    expect(isUnlocked(second.id, {})).toBe(false);
    expect(isUnlocked(second.id, { [first.id]: {} })).toBe(true);
    expect(isUnlocked(third.id, { [first.id]: {} })).toBe(false);
  });
});
