import { describe, expect, it } from 'vitest';
import { cultureTips, TIP_TERMS } from '../src/content/culture';
import { sentences } from '../src/lib/dutch';
import { helpLanguages } from '../src/i18n/all';
import { gloss } from '../src/i18n';

/** Whole word, any case (as withTerms in src/components/Bi.tsx matches it). */
const has = (text: string, term: string) =>
  new RegExp(`(?:^|[^\\p{L}\\p{N}])${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\p{L}\\p{N}])`, 'iu').test(text);

/** The English sentences on the tip's page. */
const shown = (id: string) => {
  const t = cultureTips.find((x) => x.id === id)!;
  const parts = sentences(t.body);
  return (t.lead ?? [0, 1, 2]).map((i) => parts[i] ?? '').join(' ');
};

describe('the Dutch key terms of a tip, in bold (8 November 2026)', () => {
  it('at most two per tip, each for a tip that exists', () => {
    for (const [id, terms] of Object.entries(TIP_TERMS)) {
      expect(cultureTips.some((t) => t.id === id), id).toBe(true);
      expect(terms.length, id).toBeLessThanOrEqual(2);
    }
  });
  it('each term is in the English text of the page', () => {
    for (const [id, terms] of Object.entries(TIP_TERMS)) for (const term of terms) expect(has(shown(id), term), `${id}: ${term}`).toBe(true);
  });
  it('each term stays Dutch in (almost) every help language', () => {
    let miss = 0, all = 0;
    for (const [id, terms] of Object.entries(TIP_TERMS)) {
      const t = cultureTips.find((x) => x.id === id)!;
      for (const lang of helpLanguages) for (const term of terms) {
        all++;
        if (!has(gloss(`${id}.b`, t.body, lang).help ?? '', term)) miss++;
      }
    }
    expect(miss / all).toBeLessThanOrEqual(0.1);
  });
});
