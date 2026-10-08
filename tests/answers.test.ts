import { describe, expect, it } from 'vitest';
import { checkTiles, checkTyped, normalize, tileDiff, tokenize } from '../src/lib/answers';

describe('answers', () => {
  it('normalizes case, accents and punctuation', () => {
    expect(normalize('  Pas op, de vloer is NAT! ')).toBe('pas op de vloer is nat');
    expect(normalize('Één')).toBe('een');
  });

  it('accepts exact typed answers', () => {
    expect(checkTyped('de helm', 'de helm')).toBe('correct');
    expect(checkTyped('De Helm.', 'de helm')).toBe('correct');
  });

  it('is forgiving about articles and one typo', () => {
    expect(checkTyped('helm', 'de helm')).toBe('almost');
    expect(checkTyped('de handschonen', 'de handschoenen')).toBe('almost');
  });

  it('rejects wrong or empty answers', () => {
    expect(checkTyped('', 'de helm')).toBe('wrong');
    expect(checkTyped('de doos', 'de helm')).toBe('wrong');
    // No typo tolerance on very short words.
    expect(checkTyped('na', 'ja')).toBe('wrong');
  });

  it('tokenizes sentences into tiles and checks order', () => {
    expect(tokenize('Hallo, ik ben nieuw.')).toEqual(['Hallo', 'ik', 'ben', 'nieuw']);
    expect(checkTiles(['Hallo', 'ik', 'ben', 'nieuw'], 'Hallo, ik ben nieuw.')).toBe(true);
    expect(checkTiles(['ik', 'Hallo', 'ben', 'nieuw'], 'Hallo, ik ben nieuw.')).toBe(false);
  });

  it('marks the words of the right sentence that were out of place or missing', () => {
    const marks = (given: string[]) => tileDiff(given, 'Draag altijd je helm.').map((t) => (t.ok ? t.word : `[${t.word}]`)).join(' ');
    expect(marks(['je', 'Draag'])).toBe('[Draag] [altijd] [je] [helm]');
    expect(marks(['draag', 'altijd', 'helm', 'je'])).toBe('Draag altijd [je] [helm]');
    expect(marks(['Draag', 'altijd', 'je', 'helm'])).toBe('Draag altijd je helm');
  });
});
