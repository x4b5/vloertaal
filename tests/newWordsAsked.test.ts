import { afterAll, beforeAll, describe, expect, it } from 'vitest';
// The region's own lessons too (in the app loaded only for a learner of the region).
import './regionLoaded';
import { allRegionUnits, setRegionsOn } from '../src/content/regio';
import { allCountriesTaalUnits } from '../src/content/curriculum';
import { isMixLesson } from '../src/content/review';
import { sectors, type SectorChoice } from '../src/content/sectors';
import type { Lesson } from '../src/content/types';
import { buildLesson, isGraded, matchAsked, PROGRESSION, unitIndexOf, type Exercise } from '../src/lib/exercises';

/**
 * Every new word gets at least one question that counts in its own lesson (the owner's request,
 * 4 November 2026). Before, one question came per two new words and the later word questions
 * took their word at random: 19% of the new words had none. Now the match board and the later
 * questions take the words not asked yet first (src/lib/exercises.ts slotWords), and the lesson
 * keeps its length.
 */

beforeAll(() => setRegionsOn(true));
afterAll(() => setRegionsOn(null));

/** The words a question that counts asks: its word, or the words a match board asks. */
function asked(ex: Exercise): string[] {
  if (!isGraded(ex)) return [];
  if (ex.kind === 'meaning' || ex.kind === 'dutch' || ex.kind === 'listen' || ex.kind === 'type') return [ex.word.id];
  if (ex.kind === 'match') return matchAsked(ex.words).map((w) => w.id);
  return [];
}

/** Every lesson with new words, in both countries' courses and the region (no mixed reviews). */
const lessons = (): Lesson[] => [...allCountriesTaalUnits(), ...allRegionUnits('taal')].flatMap((u) => u.lessons).filter((l) => !isMixLesson(l) && l.words.length > 0);

const SEEDS = [1, 2, 3, 5, 8, 13, 21, 34];

/** The new words of a lesson's first time without a question that counts. */
function unasked(lesson: Lesson, opts: Parameters<typeof buildLesson>[1]): string[] {
  const ex = buildLesson(lesson, opts);
  const got = new Set(ex.flatMap(asked));
  return lesson.words.filter((w) => !got.has(w.id)).map((w) => `${lesson.id} seed ${opts.seed}: ${w.nl}`);
}

describe('every new word gets a question in its own lesson', () => {
  const variants: [string, Partial<Parameters<typeof buildLesson>[1]>][] = [
    ['as it plays', { speak: true, recorded: () => true, sayings: true }],
    ['without speaking', {}],
    ['without sound', { quiet: true }],
    ['without sound, another script', { quiet: true, nonLatin: true }],
    ['the shorter lesson after many mistakes', { easy: true, speak: true, recorded: () => true }],
  ];
  for (const [name, opts] of variants) {
    it(name, () => {
      const all = lessons();
      expect(all.length).toBeGreaterThan(150);
      const missing = all.flatMap((l) => SEEDS.flatMap((seed) => unasked(l, { review: false, seed, ...opts })));
      expect(missing).toEqual([]);
    }, 60_000);
  }

  it('on every sector\'s path too (the later units have other questions)', () => {
    const paths: SectorChoice[] = sectors.map((s) => s.id);
    const all = lessons();
    // The path decides how far along a lesson is: some lessons are past "Zet het vooraan" on one path only.
    expect(all.some((l) => paths.some((s) => unitIndexOf(l, s) >= PROGRESSION.front))).toBe(true);
    const missing = paths.flatMap((sector) => all.flatMap((l) => [1, 4].flatMap((seed) => unasked(l, { review: false, seed, sector, speak: true, recorded: () => true }))));
    expect(missing).toEqual([]);
  }, 60_000);

  it('is the same lesson for the same seed', () => {
    for (const l of lessons().slice(0, 40)) expect(buildLesson(l, { review: false, seed: 7 })).toEqual(buildLesson(l, { review: false, seed: 7 }));
  });
});
