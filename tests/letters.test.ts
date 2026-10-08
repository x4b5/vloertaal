import { describe, expect, it } from 'vitest';
import { allWords } from '../src/content/curriculum';
import { checkTyped } from '../src/lib/answers';
import { letterTiles, NON_LATIN_HELP } from '../src/lib/letters';
import { createRng } from '../src/lib/random';

describe('letter tiles for "type what you hear"', () => {
  it('spell every word exactly, with 2 or 3 extra letters that are not in it', () => {
    for (const w of allWords) {
      const tiles = letterTiles(w.nl, createRng(w.id.length));
      const real = tiles.filter((t) => t.kind !== 'extra');
      const extra = tiles.filter((t) => t.kind === 'extra');
      expect(extra.length, w.nl).toBeGreaterThanOrEqual(2);
      expect(extra.length, w.nl).toBeLessThanOrEqual(3);
      for (const t of extra) expect(w.nl.toLowerCase(), w.nl).not.toContain(t.text);
      // The real tiles hold exactly the word's letters and spaces; spelled out, it grades correct.
      const letters = real.map((t) => t.text).join('');
      expect([...letters].sort().join(''), w.nl).toBe([...w.nl.toLowerCase().replace(/[^\p{L}\s]/gu, '').replace(/\s+/g, ' ').trim()].sort().join(''));
      expect(checkTyped(w.nl.toLowerCase(), w.nl), w.nl).toBe('correct');
    }
  });

  it('an article is one tile, a space between words is its own tile', () => {
    const tiles = letterTiles('de veiligheidsschoenen', createRng(1));
    expect(tiles.filter((t) => t.kind === 'article').map((t) => t.text)).toEqual(['de ']);
    expect(tiles.some((t) => t.kind === 'space')).toBe(false);
    const two = letterTiles('tot morgen', createRng(2));
    expect(two.filter((t) => t.kind === 'space')).toHaveLength(1);
    expect(two.some((t) => t.kind === 'article')).toBe(false);
  });

  it('is the default for help languages in another script only', () => {
    for (const code of ['ti', 'ar', 'fa', 'prs', 'uk', 'bg']) expect(NON_LATIN_HELP.has(code)).toBe(true);
    for (const code of ['tr', 'pl', 'ro']) expect(NON_LATIN_HELP.has(code)).toBe(false);
  });
});
