import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { beforeAll, describe, expect, it } from 'vitest';
import { About } from '../src/components/Screens';
import { aboutRules, aboutSection, aboutSections, STORY_DATE } from '../src/content/about';
import { PRO_STORY, proSections } from '../src/content/pro';
import { updateDate } from '../src/content/updates';
import { getHelpLanguage, helpLanguageSources, registerPack } from '../src/i18n/all';
import nlPack from '../src/i18n/packs/nl';
import { forGender } from '../src/i18n/types';
import { langPage, SECTIONS } from '../src/lib/langPages';

/**
 * "Waarom Vloertaal?" ('a.story'): the owner's story in the "I", signed and dated, then the "we"
 * ('a.beta', the test version), right after it everywhere both show.
 */
beforeAll(() => registerPack(nlPack));

const textOf = (html: string) => html.replace(/<[^>]+>/g, '').replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&');
const about = (code?: string, dutch = false) => renderToStaticMarkup(createElement(About, { lang: code ? getHelpLanguage(code, 'f') : undefined, dutch }));

describe('the owner’s story', () => {
  const story = aboutSection('a.story');

  it('is in the I, by Xavier, ends on the bridge to the "we", in both tracks', () => {
    expect(story.emoji).toBe('👋');
    expect(story.title).toBe('Why Vloertaal?');
    expect(story.nl.title).toBe('Waarom Vloertaal?');
    expect(story.signed).toBe('Xavier');
    expect(story.nl.body).toMatch(/^Hoi, ik ben Xavier\. Ik werk als arbeidsbemiddelaar\./);
    expect(story.nl.body).toMatch(/Maar deze app kan en wil ik niet alleen bouwen\.$/);
    expect(story.body).toMatch(/But I cannot and do not want to build this app alone\.$/);
    expect(aboutRules.find((s) => s.id === 'a.story')!.body).toBe(story.nl.body);
    expect(aboutSection('a.beta').nl.body).toMatch(/^Nu maken we Vloertaal samen verder\./);
    expect(aboutSection('a.beta').body).toMatch(/^Now we are building Vloertaal further, together\./);
  });

  it('has a valid date (zet de datum mee als je de tekst verandert)', () => {
    expect(STORY_DATE).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    const [y, m, d] = STORY_DATE.split('-').map(Number);
    const date = new Date(Date.UTC(y, m - 1, d));
    expect(date.toISOString().slice(0, 10)).toBe(STORY_DATE);
    // Not before the app.
    expect(y).toBeGreaterThanOrEqual(2026);
  });

  it('is followed by the "we" (the test version) wherever it shows', () => {
    const next = (ids: readonly string[], a: string, b: string) => ids.indexOf(b) - ids.indexOf(a);
    expect(next(aboutSections.map((s) => s.id), 'a.story', 'a.beta')).toBe(1);
    expect(next(aboutRules.map((s) => s.id), 'a.story', 'a.beta')).toBe(1);
    expect(next(proSections.map((s) => s.id), 'p.story', 'p.beta')).toBe(1);
    expect(next(SECTIONS, 'a.story', 'a.beta')).toBe(1);
  });

  it('is translated in every help language, plain (the I is Xavier), with the name untranslated', () => {
    for (const src of helpLanguageSources) {
      const title = src.gloss['a.story'];
      const body = src.gloss['a.story.b'];
      expect(typeof title, src.code).toBe('string');
      expect(typeof body, src.code).toBe('string');
      expect(title, src.code).toContain('Vloertaal');
      expect(body, src.code).toContain('Xavier');
      expect(body, src.code).toContain('Vloertaal');
      // The "we" in every form (Arabic and Tigrinya by gender, Tigrinya with its x form).
      const beta = src.gloss['a.beta.b']!;
      for (const g of ['m', 'f', 'x'] as const) expect(forGender(beta, g), `${src.code} ${g}`).toContain('Vloertaal');
    }
    const ti = helpLanguageSources.find((s) => s.code === 'ti')!.gloss['a.beta.b'];
    expect(typeof ti === 'object' && ti.x, 'ti x form').toBeTruthy();
  });

  it('is signed under the text, the date in the page’s language', () => {
    const pl = about('pl');
    expect(pl).toContain('class="about-signed muted small" lang="pl"');
    expect(textOf(pl)).toContain(`Xavier · ${updateDate(STORY_DATE, 'pl')}`);
    const ar = about('ar');
    expect(ar).toMatch(/class="about-signed muted small" lang="ar" dir="rtl"/);
    expect(textOf(ar)).toContain(updateDate(STORY_DATE, 'ar'));
    // In Dutch (the NL toggle) and in English (no help language).
    expect(textOf(about('pl', true))).toContain('Xavier · 31 oktober 2026');
    expect(textOf(about())).toContain('Xavier · 31 October 2026');
    // The work-rules track.
    expect(textOf(about('nl'))).toContain('Xavier · 31 oktober 2026');
    // The name stays Latin, left to right, also on an Arabic page.
    expect(ar).toContain('<span lang="nl" dir="ltr">Xavier</span>');
  });

  it('is on the language pages and the professionals page, signed and dated', () => {
    const pl = langPage('pl');
    expect(pl).toContain(getHelpLanguage('pl', 'f').gloss['a.story.b'] as string);
    expect(pl).toContain(`<time datetime="${STORY_DATE}">${updateDate(STORY_DATE, 'pl')}</time>`);
    expect(pl.indexOf('a.story') === -1).toBe(true);
    expect(pl.indexOf(getHelpLanguage('pl', 'f').gloss['a.story.b'] as string)).toBeLessThan(pl.indexOf(getHelpLanguage('pl', 'f').gloss['a.beta.b'] as string));
    expect(langPage('en')).toContain('31 October 2026');
    const p = proSections.find((s) => s.id === 'p.story')!;
    expect(p.body).toEqual([PRO_STORY, 'Xavier · 31 oktober 2026']);
  });
});
