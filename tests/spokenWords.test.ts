import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { SpokenWords } from '../src/components/SpokenWords';

/*
 * A Dutch line written word by word, so the word being said can light up (the owner's request,
 * 17 November 2026; src/components/SpokenWords.tsx). At rest nothing is lit and the line reads
 * exactly as before: same words, same spaces, one soft break for a long word (breakable).
 */

const SENTENCE = 'Staat de proeftijd in mijn contract?';
const SHY = '­';

const markup = (text: string) => renderToStaticMarkup(createElement(SpokenWords, { text }));
/** What a reader would read: the tags off, the soft hyphens off. */
const plain = (html: string) => html.replace(/<[^>]*>/g, '').replaceAll(SHY, '');

describe('SpokenWords at rest', () => {
  it('reads exactly like the line (same words, same spaces)', () => {
    expect(plain(markup(SENTENCE))).toBe(SENTENCE);
    expect(plain(markup('  Ik   werk '))).toBe('Ik werk');
  });

  it('has every word as its own piece and lights none', () => {
    const html = markup(SENTENCE);
    expect(html.match(/class="spoken-word"/g)).toHaveLength(6);
    expect(html).not.toContain('spoken-lit');
  });

  it('keeps punctuation on its word', () => {
    expect(markup(SENTENCE)).toContain('>contract?</span>');
  });

  it('gives nothing for an empty line', () => {
    expect(plain(markup(''))).toBe('');
  });
});
