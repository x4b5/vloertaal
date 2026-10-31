import type { Word } from '../content/types';

/**
 * A word that is fair to type from hearing: at most TYPE_MAX_LETTERS letters (the article not
 * counted), no capitals ("BSN", "DigiD", a name), and no hyphen or digit ("e-sigaret"): the
 * letter tiles (lib/letters.ts) spell letters only, so they would teach "esigaret". Other words
 * are heard and picked instead. On its own here, so lib/spaced.ts can use it too.
 */
export const TYPE_MAX_LETTERS = 12;
export function typable(word: Word): boolean {
  const bare = word.nl.trim().replace(/^(de|het|een)\s+/i, '');
  return !/\p{Lu}/u.test(word.nl) && !/[-\d]/.test(word.nl) && bare.replace(/[^\p{L}]/gu, '').length <= TYPE_MAX_LETTERS;
}
