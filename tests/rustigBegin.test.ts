import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { beforeEach, describe, expect, it } from 'vitest';
import { KeepFlow } from '../src/components/Keep';
import { Onboarding, Result } from '../src/components/Screens';
import { ToetsOffer } from '../src/components/Toets';
import { getHelpLanguage } from '../src/i18n/all';
import { languageMeta } from '../src/i18n/meta';
import { setRulesTrack } from '../src/lib/track';

/** A calmer start (31 October 2026): the guess page's back arrow, the test's button, the first
 *  lesson's result and the reminder that does not claim more than the app knows. */
const noop = () => {};
const html = (el: Parameters<typeof renderToStaticMarkup>[0]) => renderToStaticMarkup(el);
const pl = getHelpLanguage('pl');

beforeEach(() => {
  const store = new Map<string, string>();
  (globalThis as { localStorage?: unknown }).localStorage = { getItem: (k: string) => store.get(k) ?? null, setItem: (k: string, v: string) => void store.set(k, v), removeItem: (k: string) => void store.delete(k) };
});

describe('the guess page ("Polski?")', () => {
  it('has the back arrow in its own head, at the start of the guessed language (right to left in Arabic)', () => {
    setRulesTrack(true);
    try {
      const ar = html(createElement(Onboarding, { onDone: noop, guess: 'ar', startAtRoute: false }));
      expect(ar).toMatch(/<div class="screen onboarding max3-page lang-guess"><div class="screen-head chrome-head" dir="rtl"><button[^>]*class="icon-btn chrome-back"/);
      const plHtml = html(createElement(Onboarding, { onDone: noop, guess: 'pl', startAtRoute: false }));
      expect(plHtml).toMatch(/<div class="screen-head chrome-head"><button[^>]*class="icon-btn chrome-back"/);
    } finally {
      setRulesTrack(null);
    }
  });
});

describe('the test on the home', () => {
  it('says what it does: "Doe de toets" with the help language, not "Doen"', () => {
    const out = html(createElement(ToetsOffer, { moment: 'instap', lang: pl, onDo: noop, onLater: noop }));
    expect(out).toContain('Doe de toets');
    expect(out).toContain(pl!.ui.toetsStart as string);
    expect(out).not.toContain('>Doen<');
  });
});

describe('the route page asks a question', () => {
  it('in Arabic and Tigrinya too', () => {
    for (const code of ['ar', 'ti'] as const) {
      const m = languageMeta.find((l) => l.code === code)!;
      expect(m.ui.routeTitle, code).toMatch(/[?؟]$/);
      expect(getHelpLanguage(code)!.ui.routeTitle, code).toBe(m.ui.routeTitle);
    }
  });
});

describe('the first lesson\'s result', () => {
  const next = { en: 'People at work', lang: pl, id: 'l.people' };
  it('leaves out the next lesson\'s line while the row to the emergency phrases shows (room above Verder)', () => {
    const first = html(createElement(Result, { right: 4, total: 13, newWords: 6, words: 6, lang: pl, onDone: noop, next, onPhrases: noop }));
    expect(first).toContain('result-phrases');
    expect(first).not.toContain('result-next');
    const later = html(createElement(Result, { right: 4, total: 13, newWords: 6, words: 12, lang: pl, onDone: noop, next }));
    expect(later).toContain('result-next');
  });
});

describe('the reminder after the first day', () => {
  it('shows the time with a calendar and an honest question, not "✓ 18:00"', () => {
    const out = html(createElement(KeepFlow, { lang: pl, onDone: noop, start: { step: 'added', added: '18:00' } }));
    expect(out).toContain('18:00');
    expect(out).toContain('keep3-asked');
    expect(out).toContain('Toegevoegd? Dan zie je hem in je agenda.');
    expect(out).toContain(pl!.ui.remindAddedAsk as string);
    // No tick next to the time: the app cannot know the learner saved it.
    expect(out).not.toMatch(/keep3-added-big[^>]*><svg[^>]*class="icon"/);
  });
});
