import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { BootFailed, Crashed } from '../src/components/Splash';
import { emptyProgress } from '../src/lib/progress';
// Every help language's texts, as on a phone where the start got that far.
import '../src/i18n/all';

function Broken(): never {
  throw new Error('broken screen');
}

describe('a drawing error', () => {
  it('after the learner used the app: the splash with "Try again", not a blank screen', () => {
    // Server rendering has no error boundaries: draw the fallback state directly.
    const guard = new Crashed({ children: createElement(Broken) });
    guard.state = { failed: true, atStart: false };
    const html = renderToStaticMarkup(guard.render() as React.ReactElement);
    expect(html).toContain('boot-retry');
    // Dutch first, with the help language (English before one is chosen).
    expect(html).toContain('aria-label="Opnieuw proberen · Try again"');
  });

  it('at the start (nothing tapped yet): the screen that says so, not "Is er internet?" and its "Try again" (4 November 2026)', () => {
    // Its "Try again" only led back to the same error.
    expect(Crashed.getDerivedStateFromError()).toEqual({ failed: true, atStart: true });
    const guard = new Crashed({ children: createElement(Broken) });
    guard.state = Crashed.getDerivedStateFromError();
    const html = renderToStaticMarkup(guard.render() as React.ReactElement);
    expect(html).toContain('Vloertaal kan niet starten.');
    expect(html).not.toContain('Niet geladen');
    expect(html).not.toContain('boot-retry');
  });

  it('draws the app as it is while nothing breaks', () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(renderToStaticMarkup(createElement(Crashed, null, createElement('p', null, 'ok')))).toBe('<p>ok</p>');
  });
});

describe('"Vloertaal kan niet starten": two ways out', () => {
  const store = new Map<string, string>();
  const g = globalThis as { localStorage?: unknown };
  let before: unknown;
  beforeEach(() => {
    before = g.localStorage;
    store.clear();
    g.localStorage = { getItem: (k: string) => store.get(k) ?? null, setItem: (k: string, v: string) => void store.set(k, v), removeItem: (k: string) => void store.delete(k) };
  });
  afterEach(() => { g.localStorage = before; });
  const buttons = (html: string) => html.match(/<button/g)?.length ?? 0;

  it('"Bewaar je voortgang" and "Opnieuw beginnen", with pictures, in the saved help language', () => {
    // A broken save (it stopped the start until 4 November 2026), in Arabic, as a woman.
    store.set('vloertaal:v1', JSON.stringify({ ...emptyProgress, onboarded: true, helpLang: 'ar', gender: 'f', completed: null }));
    const html = renderToStaticMarkup(createElement(BootFailed));
    expect(html).toContain('Vloertaal kan niet starten.');
    expect(html).toContain('تعذّر تشغيل Vloertaal.');
    expect(html).toContain('dir="rtl"');
    expect(html).toContain('Bewaar je voortgang');
    expect(html).toContain('احفظي تقدمك');
    expect(html).toContain('Opnieuw beginnen');
    expect(html).toContain('ابدئي من جديد');
    // Two things to tap (the house rule is at most three), each with its picture.
    expect(buttons(html)).toBe(2);
    expect(html.match(/<button[^>]*>\s*<svg/g)).toHaveLength(2);
    expect(html).not.toContain('Is er internet');
  });

  it('English before a help language is known; with nothing saved only "Opnieuw beginnen"', () => {
    store.set('vloertaal:v1', '{kapot');
    const broken = renderToStaticMarkup(createElement(BootFailed));
    expect(broken).toContain('Vloertaal can’t start.');
    expect(broken).toContain('Keep your progress');
    expect(buttons(broken)).toBe(2);
    store.clear();
    const none = renderToStaticMarkup(createElement(BootFailed));
    expect(none).toContain('Opnieuw beginnen');
    expect(none).not.toContain('Bewaar je voortgang');
    expect(buttons(none)).toBe(1);
  });

  it('the work-rules track reads it in Dutch only', () => {
    store.set('vloertaal:v1', JSON.stringify({ ...emptyProgress, onboarded: true, helpLang: 'nl', lastDay: 20261103 }));
    const html = renderToStaticMarkup(createElement(BootFailed));
    expect(html.match(/Vloertaal kan niet starten/g)).toHaveLength(1);
    expect(html).not.toContain('lang="en"');
  });
});
