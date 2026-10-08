import { describe, expect, it } from 'vitest';
import { allLessons, teachingLessons, units } from '../src/content/curriculum';
import { tokenize } from '../src/lib/answers';
import * as exercisesModule from '../src/lib/exercises';
import { createRng } from '../src/lib/random';
import { AUDIO_ONLY_KINDS, buildLesson, isNextInCourse, isUnlocked, needsAudio, wordsBefore } from '../src/lib/exercises';

describe('lesson builder', () => {
  for (const lesson of allLessons) {
    it(`builds a valid lesson for ${lesson.id}`, () => {
      for (const review of [false, true]) {
        const exercises = buildLesson(lesson, { review, seed: 42 });
        expect(exercises.length).toBeGreaterThan(8);
        expect(exercises.some((e) => e.kind === 'intro')).toBe(!review && !lesson.id.endsWith('.mix'));
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

  it('opens every unit at its first lesson, and the lessons inside a unit in order', () => {
    for (const unit of units) {
      const [first, second, third] = unit.lessons;
      expect(isUnlocked(first.id, {}), unit.id).toBe(true);
      if (second) {
        expect(isUnlocked(second.id, {}), unit.id).toBe(false);
        expect(isUnlocked(second.id, { [first.id]: {} }), unit.id).toBe(true);
      }
      if (third) expect(isUnlocked(third.id, { [first.id]: {} }), unit.id).toBe(false);
    }
  });

  it('highlights only the next lesson of the course', () => {
    const [first, second, third] = allLessons;
    expect(isNextInCourse(first.id, {})).toBe(true);
    expect(isNextInCourse(second.id, {})).toBe(false);
    expect(isNextInCourse(second.id, { [first.id]: {} })).toBe(true);
    expect(isNextInCourse(first.id, { [first.id]: {} })).toBe(false);
    expect(isNextInCourse(third.id, { [first.id]: {} })).toBe(false);
  });
});

describe('mixed review lessons', () => {
  it('never present their words as new', () => {
    for (const lesson of allLessons.filter((l) => l.id.endsWith('.mix'))) {
      const ex = buildLesson(lesson, { review: false, seed: 3 });
      expect(ex.some((e) => e.kind === 'intro'), lesson.id).toBe(false);
      const asked = new Set(ex.filter((e) => e.kind === 'meaning').map((e) => (e as { word: { id: string } }).word.id));
      for (const w of lesson.words) expect(asked.has(w.id), `${lesson.id} ${w.id}`).toBe(true);
    }
  });
});

describe('wrong options come from words already met', () => {
  it('a quiz right after new words only offers words introduced so far or in earlier lessons', () => {
    for (const lesson of teachingLessons) {
      const before = new Set(wordsBefore(lesson).map((w) => w.id));
      for (const seed of [1, 7, 42, 2026]) {
        const exercises = buildLesson(lesson, { review: false, seed });
        const introduced = new Set<string>();
        for (const ex of exercises) {
          if (ex.kind === 'intro') introduced.add(ex.word.id);
          if (ex.kind !== 'meaning') continue;
          for (const o of ex.options) {
            expect(introduced.has(o.id) || before.has(o.id), `${lesson.id} seed ${seed}: ${o.nl} before it was introduced`).toBe(true);
          }
        }
      }
    }
  });

  it('lesson 1.1 never shows "tot morgen" before it was introduced', () => {
    const hello = teachingLessons[0];
    expect(hello.id).toBe('l.hello');
    for (let seed = 0; seed < 200; seed++) {
      const exercises = buildLesson(hello, { review: false, seed });
      const at = exercises.findIndex((e) => e.kind === 'intro' && e.word.id === 'w.totmorgen');
      for (const ex of exercises.slice(0, at)) {
        if (ex.kind === 'meaning') expect(ex.options.map((o) => o.id)).not.toContain('w.totmorgen');
      }
    }
  });

  it('later choices prefer the lesson and earlier lessons over words still to come', () => {
    for (const lesson of teachingLessons.slice(1)) {
      const known = new Set([...lesson.words, ...wordsBefore(lesson)].map((w) => w.id));
      for (const ex of buildLesson(lesson, { review: true, seed: 3 })) {
        if (ex.kind === 'meaning' || ex.kind === 'listen') for (const o of ex.options) expect(known.has(o.id), `${lesson.id}: ${o.nl}`).toBe(true);
      }
    }
  });
});

describe('the character of a tip matches the text', () => {
  it('a situation about a woman shows a woman, one about a man shows a man', async () => {
    const { cultureTips, tipGender } = await import('../src/content/culture');
    const { tipCast } = await import('../src/components/Characters');
    const women = new Set(['amina', 'jada']);
    expect(tipGender(cultureTips.find((t) => t.id === 'c.je')!)).toBe('f');
    for (const t of cultureTips) {
      const g = tipGender(t);
      const who = tipCast(t);
      expect(who, t.id).not.toBe('amina');
      if (g === 'f') expect(women.has(who), `${t.id}: ${who}`).toBe(true);
      if (g === 'm') expect(women.has(who), `${t.id}: ${who}`).toBe(false);
      if (/\b(she|her)\b/i.test(t.situation.en)) expect(g, t.id).toBe('f');
      if (/\b(he|him|his)\b/i.test(t.situation.en) && !/\b(she|her)\b/i.test(t.situation.en)) expect(g, t.id).toBe('m');
    }
  });
});

describe('chat replies and sentence tiles are taught and never confusable', () => {
  const { chatOptions, buildTiles, nearMiss } = exercisesModule;
  const first = (s: string) => tokenize(s)[0]?.toLowerCase();

  it('a wrong reply never starts with the right reply’s first word, and comes from taught lessons when there are enough', () => {
    for (const [i, lesson] of teachingLessons.entries()) {
      const taught = new Set(
        teachingLessons.slice(0, i + 1).flatMap((l) => (l.dialogues ?? []).map((d) => d.reply.id)),
      );
      for (const d of lesson.dialogues ?? []) {
        for (let seed = 1; seed <= 12; seed++) {
          const opts = chatOptions(d, createRng(seed), 3, lesson);
          expect(opts.filter((o) => o.id === d.reply.id)).toHaveLength(1);
          const wrong = opts.filter((o) => o.id !== d.reply.id);
          expect(wrong).toHaveLength(2);
          for (const w of wrong) expect(first(w.nl), `${lesson.id}: ${w.nl}`).not.toBe(first(d.reply.nl));
          expect(first(wrong[0].nl)).not.toBe(first(wrong[1].nl));
          // Enough taught replies with another first word: all wrong ones are taught.
          const pool = [...taught].filter((id) => id !== d.reply.id);
          if (pool.length >= 8) for (const w of wrong) expect(taught.has(w.id), `${lesson.id}: ${w.nl}`).toBe(true);
        }
      }
    }
  });

  it('spots near-misses and never offers them as extra tiles', () => {
    expect(nearMiss('dragen', 'draag')).toBe(true);
    expect(nearMiss('morgen', 'goedemorgen')).toBe(true);
    expect(nearMiss('ik', 'is')).toBe(false);
    expect(nearMiss('de', 'deur')).toBe(false);
    for (const lesson of teachingLessons) {
      for (const s of lesson.sentences) {
        const real = tokenize(s.nl);
        const tiles = buildTiles(s, lesson, createRng(5));
        const extra = tiles.filter((t) => !real.some((r) => r.toLowerCase() === t.toLowerCase()));
        for (const t of extra) expect(real.some((r) => nearMiss(t, r)), `${s.nl}: ${t}`).toBe(false);
      }
    }
  });
});
