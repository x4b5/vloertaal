import { describe, expect, it } from 'vitest';
import { cultureTips } from '../src/content/culture';

/**
 * "Zo werkt het hier": the best answer may not stand out by its length. A learner who always
 * picks the longest option should not get (almost) every tip right without reading.
 */
const MAX_RATIO = 1.3;

/** Tips allowed a longer best answer, with the reason. */
const LONGER_BEST_OK: Record<string, string> = {
  // A sayings tip (src/content/sayings.ts, its own translation files): the answer says what the
  // saying means, and the wrong options are very short. Left for a sayings round.
  'c.plain': 'saying; meaning of "geen blad voor de mond nemen"',
};

describe('the best answer of a tip is not much longer than the wrong ones', () => {
  it(`is at most ${MAX_RATIO} times the longest wrong option`, () => {
    const tooLong: string[] = [];
    for (const t of cultureTips) {
      if (LONGER_BEST_OK[t.id]) continue;
      const best = t.options.find((o) => o.best)!;
      const longestWrong = Math.max(...t.options.filter((o) => !o.best).map((o) => o.en.length));
      if (best.en.length > longestWrong * MAX_RATIO)
        tooLong.push(`${t.id}: ${best.en.length} > ${MAX_RATIO} × ${longestWrong} ("${best.en}")`);
    }
    expect(tooLong).toEqual([]);
  });

  it('lists only exceptions that are still needed', () => {
    for (const id of Object.keys(LONGER_BEST_OK)) {
      const t = cultureTips.find((x) => x.id === id);
      expect(t, id).toBeDefined();
      const best = t!.options.find((o) => o.best)!;
      const longestWrong = Math.max(...t!.options.filter((o) => !o.best).map((o) => o.en.length));
      expect(best.en.length, id).toBeGreaterThan(longestWrong * MAX_RATIO);
    }
  });
});

/**
 * The 17 tips of the Entree lessons (30 October 2026): the best answer is the longest (or as long
 * as the longest) in at most a third of them, so "pick the longest" does not work there either.
 */
const ENTREE_TIPS = [
  'workorder', 'handover', 'workshop', 'power', 'garage', 'carjob', 'placement', 'review', 'mychoice',
  'nextstep', 'email', 'budget', 'healthy', 'council', 'police', 'login', 'phish',
].map((slug) => `c.${slug}`);

describe('the Entree tips do not give the answer away by its length', () => {
  it('has the best answer as the longest option in at most a third of them', () => {
    const tips = ENTREE_TIPS.map((id) => cultureTips.find((t) => t.id === id));
    expect(tips.filter((t) => !t)).toEqual([]);
    const longest = tips.filter((t) => {
      const best = t!.options.find((o) => o.best)!.en.length;
      return t!.options.every((o) => o.best || o.en.length <= best);
    });
    expect(longest.length, longest.map((t) => t!.id).join(', ')).toBeLessThanOrEqual(Math.floor(ENTREE_TIPS.length / 3));
  });
});
