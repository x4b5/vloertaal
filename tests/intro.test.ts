import { describe, expect, it } from 'vitest';
import { INTRO_QUESTIONS, WHY } from '../src/content/intro';
import { introPage } from '../src/lib/introPage';

describe('intro (vloertaal.nl/intro)', () => {
  it('asks three questions, at most three choices each', () => {
    expect(INTRO_QUESTIONS).toHaveLength(3);
    for (const q of INTRO_QUESTIONS) {
      expect(q.options.length).toBeGreaterThanOrEqual(2);
      expect(q.options.length).toBeLessThanOrEqual(3);
      expect(q.answer.length).toBeGreaterThan(0);
    }
  });

  it('gives every fact one right choice and a source', () => {
    const facts = INTRO_QUESTIONS.filter((q) => q.source);
    expect(facts.length).toBeGreaterThanOrEqual(2);
    for (const q of facts) {
      expect(q.options.filter((o) => o.right)).toHaveLength(1);
      expect(q.source?.url).toMatch(/^https:\/\//);
    }
  });

  it('keeps the opinion question without a right or wrong', () => {
    const open = INTRO_QUESTIONS.filter((q) => !q.source);
    expect(open).toHaveLength(1);
    expect(open[0].options.some((o) => o.right)).toBe(false);
  });

  it('calls Vloertaal an addition, not a replacement', () => {
    expect(WHY.join(' ')).toMatch(/aanvulling/);
  });

  it('makes a Dutch page with every question, answer and source, escaped', () => {
    const html = introPage([{ ...INTRO_QUESTIONS[0], ask: 'Vraag <b> & "meer"' }, ...INTRO_QUESTIONS.slice(1)]);
    expect(html).toContain('<html lang="nl">');
    expect(html).toContain('Vraag &lt;b&gt; &amp; &quot;meer&quot;');
    for (const q of INTRO_QUESTIONS.slice(1)) expect(html).toContain(q.answer.replace(/&/g, '&amp;'));
    for (const q of INTRO_QUESTIONS) if (q.source) expect(html).toContain(q.source.url);
  });

  it('leads to the app and to the mail address', () => {
    const html = introPage(INTRO_QUESTIONS);
    expect(html).toContain('href="/"');
    expect(html).toContain('mailto:hoi@vloertaal.nl');
    expect(html).toContain('<link rel="canonical" href="https://vloertaal.nl/intro/" />');
    expect(html).toContain('property="og:title"');
  });

  it('loads nothing from elsewhere and sends nothing anywhere', () => {
    const html = introPage(INTRO_QUESTIONS);
    expect(html).not.toMatch(/<script[^>]+src=/i);
    expect(html).not.toMatch(/fetch\(|sendBeacon|XMLHttpRequest/);
  });
});
