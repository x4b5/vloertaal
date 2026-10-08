import { describe, expect, it } from 'vitest';
import { allLessons, allWords, findLesson } from '../src/content/curriculum';
import { buildLesson, dutchExercise, type Exercise } from '../src/lib/exercises';
import { createRng } from '../src/lib/random';
import { hasPicture, lookKey } from '../src/lib/wordPicture';

const SEEDS = [1, 2, 3, 7, 42, 99, 2026, 31337];
const runs = (fn: (exercises: Exercise[], label: string) => void) => {
  for (const lesson of allLessons) {
    for (const review of [false, true]) {
      for (const quiet of [false, true]) {
        for (const seed of SEEDS) fn(buildLesson(lesson, { review, seed, quiet }), `${lesson.id} review=${review} quiet=${quiet} seed=${seed}`);
      }
    }
  }
};

describe('abstract words (no picture)', () => {
  it('are flagged in the content', () => {
    const abstract = allWords.filter((w) => !hasPicture(w)).map((w) => w.id);
    expect(abstract).toContain('w.recht');
    expect(abstract).toContain('w.premie');
    expect(abstract).toContain('w.eerlijk');
    expect(abstract.length).toBe(98);
    // Every word still has its emoji (data compatibility).
    for (const w of allWords) expect(w.emoji, w.id).toBeTruthy();
  });

  it('no picture choice ever targets or offers an abstract word', () => {
    runs((exercises, label) => {
      for (const ex of exercises) {
        if (ex.kind !== 'dutch' || ex.textOnly) continue;
        expect(hasPicture(ex.word), label).toBe(true);
        for (const o of ex.options) expect(hasPicture(o), `${label}: ${o.id}`).toBe(true);
      }
    });
  });

  it('never shows two options with the same or a look-alike picture', () => {
    runs((exercises, label) => {
      for (const ex of exercises) {
        if (ex.kind !== 'dutch' || ex.textOnly) continue;
        expect(new Set(ex.options.map((o) => o.emoji)).size, label).toBe(ex.options.length);
        expect(new Set(ex.options.map(lookKey)).size, label).toBe(ex.options.length);
        expect(new Set(ex.options.map((o) => o.id)).size, label).toBe(ex.options.length);
      }
    });
  });

  it('always has the right answer among the options, once', () => {
    runs((exercises, label) => {
      for (const ex of exercises) {
        if (ex.kind === 'meaning' || ex.kind === 'dutch' || ex.kind === 'listen') {
          expect(ex.options.filter((o) => o.id === ex.word.id), label).toHaveLength(1);
          expect(new Set(ex.options.map((o) => o.nl)).size, label).toBe(ex.options.length);
          expect(new Set(ex.options.map((o) => o.en)).size, label).toBe(ex.options.length);
        }
      }
    });
  });

  it('uses a picture word as the target whenever the lesson has one', () => {
    for (const lesson of allLessons) {
      if (!lesson.words.some(hasPicture)) continue;
      for (const seed of SEEDS) {
        const ex = buildLesson(lesson, { review: false, seed }).find((e) => e.kind === 'dutch');
        expect(ex && hasPicture(ex.word), `${lesson.id} seed ${seed}`).toBe(true);
      }
    }
  });

  it('falls back to text cards for an abstract word or a lesson without pictures', () => {
    const { lesson: rights } = findLesson('l.rights')!;
    expect(rights.words.every((w) => !hasPicture(w))).toBe(true);
    for (const seed of SEEDS) {
      for (const quiet of [false, true]) {
        const dutch = buildLesson(rights, { review: false, seed, quiet }).filter((e) => e.kind === 'dutch');
        expect(dutch.length).toBeGreaterThan(0);
        for (const ex of dutch) expect(ex.kind === 'dutch' && ex.textOnly).toBe(true);
      }
    }
    const abstract = rights.words[0];
    const ex = dutchExercise(abstract, rights, createRng(5));
    expect(ex.textOnly).toBe(true);
    expect(ex.options.map((o) => o.id)).toContain(abstract.id);
    expect(ex.options).toHaveLength(4);
  });

  it('keeps match pairs and quiet replacements on the same words', () => {
    for (const lesson of allLessons) {
      for (const seed of [1, 42]) {
        const loud = buildLesson(lesson, { review: false, seed });
        const quiet = buildLesson(lesson, { review: false, seed, quiet: true });
        expect(quiet).toHaveLength(loud.length);
        // The listening tasks became reading ones on the same words.
        const listened = loud.filter((e) => e.kind === 'listen' || e.kind === 'type').map((e) => (e as { word: { id: string } }).word.id);
        const quietWords = quiet.filter((e) => 'word' in e).map((e) => (e as { word: { id: string } }).word.id);
        for (const id of listened) expect(quietWords, `${lesson.id} ${id}`).toContain(id);
      }
    }
  });
});

describe('unit icons', () => {
  it('every unit has a drawn icon next to its title', async () => {
    const { units } = await import('../src/content/curriculum');
    const { unitIcons } = await import('../src/content/unitIcons');
    const { pictures, iconPictures } = await import('../src/pictures');
    for (const u of units) {
      const id = unitIcons[u.id];
      expect(id, u.id).toBeTruthy();
      expect(Boolean(pictures[id] ?? iconPictures[id]), `${u.id}: ${id}`).toBe(true);
    }
    // One picture per unit, so the path never shows the same icon twice.
    expect(new Set(Object.values(unitIcons)).size).toBe(Object.keys(unitIcons).length);
  });
});
