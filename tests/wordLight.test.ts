import { describe, expect, it } from 'vitest';
import { guessMs, tilesMatchLine, wordAt, wordsOf, wordTimes } from '../src/lib/wordLight';

/*
 * Word by word light (the owner's request, 17 November 2026): while a Dutch line is said, the word
 * being said lights up, so a learner can say it along. This is the arithmetic only: given a text and
 * how long it sounds, when does each word start and end? It knows no card and no screen, so every
 * place that shows a Dutch line can use it (src/lib/wordLight.ts).
 */

const SENTENCE = 'Staat de proeftijd in mijn contract?';

describe('wordTimes: when each word is said', () => {
  it('splits a line into its words and keeps the punctuation on the word', () => {
    const words = wordTimes(SENTENCE, 3000).map((w) => w.text);
    expect(words).toEqual(['Staat', 'de', 'proeftijd', 'in', 'mijn', 'contract?']);
  });

  it('starts at 0, ends at the total, and the words follow each other without a gap', () => {
    const times = wordTimes(SENTENCE, 3000);
    expect(times[0].start).toBe(0);
    expect(times[times.length - 1].end).toBeCloseTo(3000, 5);
    times.slice(1).forEach((w, i) => expect(w.start).toBeCloseTo(times[i].end, 5));
  });

  it('gives a longer word more time than a short one', () => {
    const times = wordTimes(SENTENCE, 3000);
    const length = (text: string) => {
      const w = times.find((t) => t.text === text)!;
      return w.end - w.start;
    };
    expect(length('proeftijd')).toBeGreaterThan(length('de'));
    expect(length('contract?')).toBeGreaterThan(length('in'));
  });

  it('keeps a word lit a little longer before a comma or a full stop (the voice pauses)', () => {
    const withComma = wordTimes('Ja, graag', 2000)[0];
    const without = wordTimes('Ja graag', 2000)[0];
    expect(withComma.end - withComma.start).toBeGreaterThan(without.end - without.start);
  });

  it('is slower when the sound is longer: the same shares, stretched over the longer time', () => {
    const fast = wordTimes(SENTENCE, 2000);
    const slow = wordTimes(SENTENCE, 4000);
    fast.forEach((w, i) => {
      expect(slow[i].start).toBeCloseTo(w.start * 2, 5);
      expect(slow[i].end).toBeCloseTo(w.end * 2, 5);
    });
  });

  it('counts a Dutch word by its sounds, not its letters (ij, oe, aa are one beat each)', () => {
    const [kort, lang] = wordTimes('mijn proeftijd', 2000);
    // "mijn" is one beat, "proeftijd" two: the long word gets about twice the time.
    expect((lang.end - lang.start) / (kort.end - kort.start)).toBeCloseTo(2, 1);
  });

  it('gives nothing for an empty line, and never a word of zero length', () => {
    expect(wordTimes('', 3000)).toEqual([]);
    expect(wordTimes('   ', 3000)).toEqual([]);
    wordTimes('Ja.', 0.0001).forEach((w) => expect(w.end).toBeGreaterThanOrEqual(w.start));
  });

  it('copes with one word, with extra spaces and with a number', () => {
    expect(wordTimes('Hallo', 800)).toEqual([{ text: 'Hallo', start: 0, end: 800 }]);
    expect(wordTimes('  Ik   werk  op 3 mei ', 2000).map((w) => w.text)).toEqual(['Ik', 'werk', 'op', '3', 'mei']);
  });
});

describe('wordAt: which word is lit at a moment', () => {
  const times = wordTimes(SENTENCE, 3000);

  it('is the word whose time it is', () => {
    expect(wordAt(times, 0)).toBe(0);
    expect(wordAt(times, times[2].start + 1)).toBe(2);
    expect(wordAt(times, times[5].end - 1)).toBe(5);
  });

  it('lights no word before the start or after the end', () => {
    expect(wordAt(times, -1)).toBe(-1);
    expect(wordAt(times, 3000)).toBe(-1);
    expect(wordAt(times, 99999)).toBe(-1);
  });

  it('lights no word when there are none', () => {
    expect(wordAt([], 10)).toBe(-1);
  });
});

describe('wordsOf: the words of a line, as they are lit', () => {
  it('is the same split wordTimes uses', () => {
    expect(wordsOf(SENTENCE)).toEqual(wordTimes(SENTENCE, 1000).map((w) => w.text));
    expect(wordsOf('  Ik   werk ')).toEqual(['Ik', 'werk']);
    expect(wordsOf('')).toEqual([]);
  });
});

describe('guessMs: how long a line sounds when nothing reports it (the phone voice)', () => {
  it('is longer for a longer line, and nothing for an empty one', () => {
    expect(guessMs('Ja', false)).toBeGreaterThan(0);
    expect(guessMs(SENTENCE, false)).toBeGreaterThan(guessMs('Ja', false));
    expect(guessMs('', false)).toBe(0);
  });

  it('is longer on the turtle than at the normal pace', () => {
    expect(guessMs(SENTENCE, true)).toBeGreaterThan(guessMs(SENTENCE, false));
  });

  it('is about what a person needs: a sentence of six words takes a few seconds, not a few hundredths', () => {
    const ms = guessMs(SENTENCE, false);
    expect(ms).toBeGreaterThan(1500);
    expect(ms).toBeLessThan(5000);
  });
});

describe('tilesMatchLine: do the tiles of a built sentence follow the line that is said', () => {
  const tiles = ['Hoeveel', 'uur', 'werk', 'ik', 'per', 'week'];

  it('is true when the tiles are the words of the line, punctuation aside', () => {
    expect(tilesMatchLine(tiles, 'Hoeveel uur werk ik per week?')).toBe(true);
  });

  it('is false for another order of the same words (the line said is not the one built)', () => {
    expect(tilesMatchLine(tiles, 'Per week werk ik hoeveel uur?')).toBe(false);
  });

  it('is false for another number of words, and for nothing at all', () => {
    expect(tilesMatchLine(tiles, 'Hoeveel uur werk ik?')).toBe(false);
    expect(tilesMatchLine([], '')).toBe(false);
  });

  it('is false when a lone dash or sign would make the counts differ (the tile and the light would drift apart)', () => {
    expect(tilesMatchLine(['Ik', 'werk', 'hier'], 'Ik werk - hier')).toBe(false);
  });
});
