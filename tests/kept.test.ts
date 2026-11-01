import { describe, expect, it } from 'vitest';
import { keptCount, KEPT_FROM_BOX, showKept, type Cards } from '../src/lib/spaced';

// "Van je woorden van 2 weken of langer geleden wist je er nog 9 van de 10" (voorstel 5).
describe('keptCount', () => {
  const due = '2026-11-01';
  const cards: Cards = {
    'w.a': { box: KEPT_FROM_BOX, due },
    'w.b': { box: 6, due },
    'w.c': { box: KEPT_FROM_BOX - 1, due },
    'w.d': { box: 5, due },
  };

  it('counts only words from two weeks ago or longer (box 5 and 6), and how many were right', () => {
    expect(keptCount(cards, { 'w.a': true, 'w.b': false, 'w.c': true, 'w.d': true })).toEqual({ right: 2, of: 3 });
  });

  it('leaves out new words and sentence cards', () => {
    expect(keptCount(cards, { 'w.new': true, 's.x': true })).toEqual({ right: 0, of: 0 });
  });

  it('shows it for a few old words, at least half right', () => {
    expect(showKept({ right: 2, of: 3 })).toBe(true);
    expect(showKept({ right: 1, of: 3 })).toBe(false);
    expect(showKept({ right: 2, of: 2 })).toBe(false);
    expect(showKept(undefined)).toBe(false);
  });
});
