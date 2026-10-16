import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { Milestone } from '../src/components/Milestone';
import { Coaches } from '../src/components/Coaches';
import { COACH_FACTS, MILESTONE_FACTS } from '../src/content/facts';
import { getHelpLanguage, ui } from '../src/i18n/all';
import { uiEn } from '../src/i18n/types';
import { STREAK_TIERS } from '../src/lib/progress';

const html = (streak: number, code?: 'pl' | 'nl') =>
  renderToStaticMarkup(createElement(Milestone, { streak, lang: code ? getHelpLanguage(code) : undefined, onDone: () => {}, keep: false }));

describe('"Waarom Nederlands leren?" (src/content/facts.ts)', () => {
  it('has one fact for each streak milestone, in English, Dutch and every help language', () => {
    expect(Object.keys(MILESTONE_FACTS).map(Number)).toEqual([...STREAK_TIERS]);
    for (const key of ['factTitle', ...Object.values(MILESTONE_FACTS)] as const) expect(uiEn[key], key).toBeTruthy();
  });

  it('shows the fact on a milestone only: text, nothing to tap, never in the work-rules track', () => {
    const seven = html(7, 'pl');
    expect(seven).toContain('milestone-fact');
    expect(seven).toContain('Wist je dat?');
    expect(seven).toContain(ui('fact7', getHelpLanguage('pl')).help!);
    expect(seven.match(/<aside class="milestone-fact"[\s\S]*?<\/aside>/)![0]).not.toMatch(/<(button|a)\b/);
    expect(html(7)).toContain(uiEn.fact7);
    expect(html(5, 'pl')).not.toContain('milestone-fact');
    expect(html(7, 'nl')).not.toContain('milestone-fact');
  });

  it('gives coaches the facts with their sources, as plain text', () => {
    const m = renderToStaticMarkup(createElement(Coaches, { onBack: () => {} }));
    const block = m.match(/<section class="coach-facts"[\s\S]*?<\/section>/)![0];
    expect(block).not.toMatch(/<(button|a)\b/);
    for (const f of COACH_FACTS) {
      expect(f.source.trim()).toBeTruthy();
      expect(block).toContain(`Bron: ${f.source}`);
    }
    // The numbers the app shows come from these sources.
    expect(COACH_FACTS.map((f) => f.text).join(' ')).toContain('69 procent');
    expect(uiEn.fact7).toContain('69 out of 100');
    expect(uiEn.fact3).toContain('3 million');
  });
});
