import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { aboutSections } from '../src/content/about';
import { About } from '../src/components/Screens';
import { getHelpLanguage } from '../src/i18n/all';
import { aboutDutchRemembered, rememberAboutDutch } from '../src/lib/aboutDutch';

const unescape = (html: string) => html.replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&amp;/g, '&');
/** The text of the page without its tags (the contact address in a body is a link). */
const textOf = (html: string) => html.replace(/<[^>]+>/g, '');

describe('About in Dutch (the "NL" toggle)', () => {
  it('every section has a plain Dutch title and body', () => {
    for (const s of aboutSections) {
      expect(s.nl.title.trim(), s.id).not.toBe('');
      expect(s.nl.body.trim(), s.id).not.toBe('');
      expect(s.nl.body, s.id).not.toBe(s.body);
    }
    // The mission comes right after "What is Vloertaal?", then Bram.
    expect(aboutSections.slice(0, 3).map((s) => s.id)).toEqual(['a.what', 'a.mission', 'a.bram']);
  });

  it('the privacy section keeps the privacy points and leaves "free" to the mission', () => {
    const free = aboutSections.find((s) => s.id === 'a.free')!;
    const mission = aboutSections.find((s) => s.id === 'a.mission')!;
    expect(free.body).toMatch(/account/);
    expect(free.body).toMatch(/only on this phone/);
    expect(free.body).toMatch(/Settings/);
    expect(free.body).not.toMatch(/free/i);
    expect(mission.body).toMatch(/free/);
    expect(mission.body).toMatch(/no ads, no subscription/);
  });

  it('ends with the disclaimer (general information, checked date, where to ask), then the voices and the contact', () => {
    const ids = aboutSections.map((s) => s.id);
    expect(ids.slice(-3)).toEqual(['a.disclaimer', 'a.voices', 'a.contact']);
    const d = aboutSections.find((s) => s.id === 'a.disclaimer')!;
    expect(d.emoji).toBe('⚖️');
    expect(d.body).toMatch(/general information, not legal advice/);
    expect(d.body).toMatch(/October 2026/);
    expect(d.nl.body).toMatch(/oktober 2026/);
    for (const code of ['ar', 'ti', 'fa', 'prs', 'uk', 'tr', 'pl', 'ro', 'bg']) {
      for (const g of ['m', 'f'] as const) {
        const body = getHelpLanguage(code, g).gloss['a.disclaimer.b'];
        const text = typeof body === 'string' ? body : body?.[g];
        expect(text, `${code} ${g}`).toContain('Juridisch Loket');
        expect(text, `${code} ${g}`).toMatch(/2026|۲۰۲۶/);
      }
    }
  });

  it('switches every section between the help language and Dutch (lang nl, left to right)', () => {
    const ar = getHelpLanguage('ar', 'f');
    const off = unescape(renderToStaticMarkup(createElement(About, { lang: ar, dutch: false })));
    const on = unescape(renderToStaticMarkup(createElement(About, { lang: ar, dutch: true })));
    expect(off).toContain('aria-pressed="false"');
    expect(on).toContain('aria-pressed="true"');
    // One toggle, labelled NL, with its meaning in the help language for screen readers.
    expect(on.match(/class="about-nl"/g)).toHaveLength(1);
    expect(on).toContain('aria-label="NL · عرض بالهولندية"');
    for (const s of aboutSections) {
      expect(on, s.id).toContain(s.nl.title);
      expect(textOf(on), s.id).toContain(s.nl.body);
      expect(textOf(off), s.id).not.toContain(s.nl.body);
    }
    expect(off).toContain('مهمتنا');
    expect(on).not.toContain('مهمتنا');
    expect(on.match(/<section class="about-section about-nl-on" lang="nl" dir="ltr">/g)).toHaveLength(aboutSections.length);
    expect(off).not.toContain('about-nl-on');
  });

  it('is remembered on this phone, and never throws without storage', () => {
    const g = globalThis as { localStorage?: unknown };
    const before = g.localStorage;
    const store = new Map<string, string>();
    g.localStorage = {
      getItem: (k: string) => store.get(k) ?? null,
      setItem: (k: string, v: string) => void store.set(k, v),
      removeItem: (k: string) => void store.delete(k),
    };
    try {
      expect(aboutDutchRemembered()).toBe(false);
      rememberAboutDutch(true);
      expect(aboutDutchRemembered()).toBe(true);
      expect(renderToStaticMarkup(createElement(About, { lang: getHelpLanguage('pl', 'f') }))).toContain('aria-pressed="true"');
      rememberAboutDutch(false);
      expect(aboutDutchRemembered()).toBe(false);
    } finally {
      g.localStorage = before;
    }
    expect(aboutDutchRemembered()).toBe(false);
    expect(() => rememberAboutDutch(true)).not.toThrow();
  });
});
