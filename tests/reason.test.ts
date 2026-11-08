import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { ReasonCard } from '../src/components/ReasonCard';
import { getHelpLanguage } from '../src/i18n/all';
import { ui } from '../src/i18n';
import { MAX_REASONS, REASON_AFTER, REASONS, reasonDue, withReasons } from '../src/lib/reason';
import { emptyProgress, progressFrom } from '../src/lib/progress';

/**
 * "Waarom leer jij Nederlands?" (src/lib/reason.ts; the owner's request, 8 November 2026): the
 * learner's own reason, in the spirit of motivational interviewing, asked once after a few lessons.
 */

const pl = getHelpLanguage('pl', 'f');

describe('when the reason card comes', () => {
  it(`comes after ${REASON_AFTER} lessons, not before`, () => {
    expect(reasonDue(emptyProgress, REASON_AFTER - 1)).toBe(false);
    expect(reasonDue(emptyProgress, REASON_AFTER)).toBe(true);
  });

  it('never comes back once answered or put off', () => {
    expect(reasonDue(withReasons(emptyProgress, ['kids']), 10)).toBe(false);
    expect(reasonDue(withReasons(emptyProgress, []), 10)).toBe(false);
  });
});

describe('the chosen reasons', () => {
  it(`keeps at most ${MAX_REASONS}, each once, known ones only`, () => {
    const p = withReasons(emptyProgress, ['kids', 'kids', 'nonsense' as never, 'work', 'home']);
    expect(p.reasons).toEqual(['kids', 'work']);
    expect(p.reasonAsked).toBe(true);
  });

  it('leaves no empty list behind ("Later")', () => {
    expect('reasons' in withReasons(emptyProgress, [])).toBe(false);
  });

  it('survives a reload, and drops what it cannot read', () => {
    const back = progressFrom({ ...emptyProgress, reasons: ['work', 'x', 'work', 'home', 'kids'], reasonAsked: true });
    expect(back.reasons).toEqual(['work', 'home']);
    expect(back.reasonAsked).toBe(true);
  });
});

describe('the reason card', () => {
  const html = renderToStaticMarkup(createElement(ReasonCard, { lang: pl, onDone: () => {} }));

  it('offers every reason as a toggle, in Dutch and in the help language', () => {
    for (const r of REASONS) {
      expect(html).toContain(`data-reason="${r.id}"`);
      expect(html).toContain(r.nl);
      expect(html).toContain(ui(r.key, pl).help!);
    }
    expect(html.match(/aria-pressed="false"/g)?.length).toBe(REASONS.length);
  });

  it('asks the question and has "Later"', () => {
    expect(html).toContain('Waarom leer jij Nederlands?');
    expect(html).toContain('Later');
  });
});
