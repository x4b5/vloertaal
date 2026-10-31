import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { TipCard } from '../src/components/Exercises';
import { tipForLesson } from '../src/content/culture';
import { findLesson } from '../src/content/curriculum';
import { getHelpLanguage } from '../src/i18n/all';
import { buildLesson } from '../src/lib/exercises';

/** "Zo werkt het hier" in two pages (owner's choice, 31 October 2026): the tip, then "Zeg het zo". */
const pl = getHelpLanguage('pl');
const tip = tipForLesson('l.phone') ?? tipForLesson('l.speakup')!;
const render = (part?: 'read' | 'say') =>
  renderToStaticMarkup(createElement(TipCard, { ex: { kind: 'tip', tip, ...(part ? { part } : {}) }, lang: pl, onAnswer: () => {}, locked: false } as never));

describe('the tip in a lesson: two pages', () => {
  it('comes as two steps in a row: first read, then say', () => {
    const lesson = findLesson('l.speakup')!.lesson;
    const ex = buildLesson(lesson, { review: false, seed: 1 });
    const i = ex.findIndex((e) => e.kind === 'tip');
    expect(i).toBeGreaterThanOrEqual(0);
    expect(ex[i]).toMatchObject({ kind: 'tip', part: 'read' });
    expect(ex[i + 1]).toMatchObject({ kind: 'tip', part: 'say' });
    expect(ex[i + 2].kind).toBe('situation');
  });

  it('page 1 has the first sentences of the tip (no "…") and no phrase; page 2 only the phrase, with its speaker', () => {
    const read = render('read');
    expect(read).toContain('tip-body');
    expect(read).not.toContain('tip-say');
    expect(read).not.toContain('…');
    const say = render('say');
    expect(say).toContain('tip-say');
    expect(say).not.toContain('tip-body');
    expect(say).not.toContain('tips-note');
    expect(say).toContain(tip.phrase.nl.split(' ')[0]);
  });

  it('a lesson saved before the split (no part) still shows both on one page', () => {
    const both = render();
    expect(both).toContain('tip-body');
    expect(both).toContain('tip-say');
  });
});
