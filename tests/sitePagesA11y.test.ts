import { describe, expect, it } from 'vitest';
import { INTRO_QUESTIONS } from '../src/content/intro';
import { UPCOMING, UPDATES } from '../src/content/updates';
import { coachPage } from '../src/lib/coachPage';
import { introPage } from '../src/lib/introPage';
import { LANG_PAGES, langPage, languageNav } from '../src/lib/langPages';
import { rulesPage, SECTOR_PAGES, sectorPage } from '../src/lib/sectorPages';
import { notFoundPage, siteLinks } from '../src/lib/siteLinks';
import { TOPIC_PAGES, topicPage, topicsIndexPage } from '../src/lib/topicPages';
import { updatesPage } from '../src/lib/updatesPage';

/**
 * Accessibility of the plain pages made at build time (vite.config.ts): what a screen reader, a
 * phone with large text and a zoomed browser need from the HTML itself (WCAG 2.2 AA).
 */
const PAGES: { name: string; html: string }[] = [
  ...LANG_PAGES.map((p) => ({ name: p.path, html: langPage(p.code) })),
  ...SECTOR_PAGES.map((p) => ({ name: p.path, html: sectorPage(p.id) })),
  { name: '/werkregels/', html: rulesPage() },
  { name: '/voor-begeleiders/', html: coachPage() },
  ...TOPIC_PAGES.map((t) => ({ name: t.path, html: topicPage(t) })),
  { name: '/onderwerpen/', html: topicsIndexPage() },
  { name: '/404.html', html: notFoundPage() },
  { name: '/intro/', html: introPage(INTRO_QUESTIONS) },
  { name: '/nieuw/', html: updatesPage(UPDATES, UPCOMING) },
];

describe.each(PAGES)('plain page $name', ({ name, html }) => {
  it('says its language on <html>, and its direction for a right-to-left one', () => {
    const tag = html.match(/<html lang="([^"]+)"(?: dir="(ltr|rtl)")?>/);
    expect(tag).not.toBeNull();
    const page = LANG_PAGES.find((p) => p.path === name);
    expect(tag![1]).toBe(page?.tag ?? 'nl');
    if (page?.dir === 'rtl') expect(tag![2]).toBe('rtl');
  });

  it('has exactly one h1 and skips no heading level', () => {
    const levels = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
    expect(levels.filter((l) => l === 1)).toHaveLength(1);
    expect(levels[0]).toBe(1);
    for (let i = 1; i < levels.length; i++) expect(levels[i]).toBeLessThanOrEqual(levels[i - 1] + 1);
  });

  it('has a main landmark, a title and a description, and lets the reader zoom', () => {
    expect(html).toContain('<main>');
    expect(html).toMatch(/<title>[^<]+<\/title>/);
    expect(html).toMatch(/<meta name="description" content="[^"]+"/);
    const viewport = html.match(/<meta name="viewport" content="([^"]*)"/)?.[1] ?? '';
    expect(viewport).not.toMatch(/user-scalable|maximum-scale/);
  });

  it('breaks a long word at large text instead of scrolling sideways', () => {
    expect(html).toMatch(/body \{[^}]*overflow-wrap: anywhere/);
  });

  it('gives every picture an alt text (empty for decoration)', () => {
    for (const img of html.match(/<img [^>]*>/g) ?? []) expect(img).toMatch(/ alt="/);
  });
});

describe('plain pages, together', () => {
  it('have a title and a description of their own', () => {
    const titles = PAGES.map((p) => p.html.match(/<title>([^<]*)/)![1]);
    const descriptions = PAGES.map((p) => p.html.match(/<meta name="description" content="([^"]*)"/)![1]);
    expect(new Set(titles).size).toBe(PAGES.length);
    expect(new Set(descriptions).size).toBe(PAGES.length);
  });
});

describe('links and navigation', () => {
  it('names the language list in the page language, with the Dutch link set left to right', () => {
    expect(languageNav()).toContain('<nav aria-label="Kies je taal">');
    expect(languageNav('en')).toContain('<nav aria-label="Choose your language">');
    for (const p of LANG_PAGES) {
      const nav = languageNav(p.code);
      expect(nav).not.toContain('aria-label="Vloertaal"');
      expect(nav).toContain('<a href="/" lang="nl" hreflang="nl" dir="ltr">Nederlands</a>');
    }
  });

  it('says which topic each "open" link on the coach page opens', () => {
    const opens = coachPage().match(/<a [^>]*>open<\/a>/g) ?? [];
    expect(opens.length).toBeGreaterThan(5);
    const names = opens.map((a) => a.match(/aria-label="([^"]+)"/)?.[1]);
    for (const n of names) expect(n).toMatch(/^Open .+ in Vloertaal$/);
    expect(new Set(names).size).toBe(names.length);
  });

  it('makes the start page\'s links (outside the app\'s <main>) a named region', () => {
    const html = siteLinks();
    const id = html.match(/<section [^>]*aria-labelledby="([^"]+)"/)?.[1];
    expect(id).toBeTruthy();
    expect(html).toContain(`<h1 id="${id}">`);
  });
});

describe('intro questions', () => {
  const html = introPage(INTRO_QUESTIONS);
  it('moves focus to the answer once a choice is made (the chosen button is then disabled)', () => {
    expect(html).toContain('<div class="answer" tabindex="-1">');
    expect(html).toMatch(/ans\.focus\(\)/);
  });

  it('marks the right and the wrong choice with a sign, not only a colour', () => {
    expect(html).toMatch(/\.opt\.right::after \{ content: ' ✓'; \}/);
    expect(html).toMatch(/\.opt\.wrong::after \{ content: ' ✗'; \}/);
  });
});
