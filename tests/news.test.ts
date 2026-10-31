import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { beforeAll, describe, expect, it } from 'vitest';
import { News, NEWS_FIRST } from '../src/components/News';
import { About } from '../src/components/Screens';
import { LAST_UPDATE, UPCOMING, UPDATES, updateDate, dateLocale } from '../src/content/updates';
import { updatesPage } from '../src/lib/updatesPage';
import { getHelpLanguage, helpLanguageSources, registerPack } from '../src/i18n/all';
import nlPack from '../src/i18n/packs/nl';
import { uiNl } from '../src/i18n/nl';

/** "Wat is er nieuw?": the list of changes (src/content/updates.ts) in the app, from the bottom of Over. */
beforeAll(() => registerPack(nlPack));

const unescape = (html: string) => html.replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&amp;/g, '&');
const textOf = (html: string) => unescape(html.replace(/<[^>]+>/g, ''));
const news = (code?: string, all = false) => unescape(renderToStaticMarkup(createElement(News, { lang: code ? getHelpLanguage(code, 'f') : undefined, onBack: () => {}, all })));
const about = (code?: string) => unescape(renderToStaticMarkup(createElement(About, { lang: code ? getHelpLanguage(code, 'f') : undefined, onCoaches: code === 'nl' ? undefined : () => {}, onNews: () => {} })));

describe('Wat is er nieuw?', () => {
  it('says what is new on Over itself', () => {
    expect(UPDATES[0].items.some((i) => i.includes('Waarom Vloertaal?') && i.includes('Wat is er nieuw?'))).toBe(true);
  });

  it('is a row at the bottom of Over, with the newest date, in a list of one kind of row', () => {
    const pl = about('pl');
    const row = pl.match(/<button [^>]*news-link"[\s\S]*?<\/button>/)![0];
    expect(row).toContain('Co nowego?');
    expect(row).toContain(`lang="pl"`);
    expect(row).toContain(updateDate(LAST_UPDATE, 'pl'));
    expect(pl).toMatch(/<ul class="about-links"><li><button [^>]*coach-link"[\s\S]*<\/li><li><button [^>]*news-link"/);
    // The plain "Laatst bijgewerkt" line is gone (the row has the date).
    expect(pl).not.toContain('about-updated');
    // Still one mail link and one NL toggle outside the list.
    expect(pl.match(/href="mailto:/g)).toHaveLength(1);
    expect(pl.match(/class="about-nl"/g)).toHaveLength(1);
    // The work-rules track: the row alone, in Dutch.
    const nl = about('nl');
    expect(nl).toContain('Wat is er nieuw?');
    expect(nl).toContain(updateDate(LAST_UPDATE, 'nl-NL'));
    expect(nl).not.toContain('coach-link');
    // Without onNews (as before): the date as plain text.
    const plain = renderToStaticMarkup(createElement(About, { lang: getHelpLanguage('pl', 'f') }));
    expect(plain).toContain('about-updated');
    expect(plain).not.toContain('news-link');
  });

  it('shows the last dates newest first, each a heading in the page’s language with its points in Dutch', () => {
    const pl = news('pl');
    expect(pl.match(/<h1[\s>]/g)).toHaveLength(1);
    expect(pl).toContain('<h1 tabindex="-1">');
    expect(pl).toContain('class="icon-btn chrome-back"');
    const days = [...pl.matchAll(/<time dateTime="([\d-]+)"/gi)].map((m) => m[1]);
    expect(days).toEqual(UPDATES.slice(0, NEWS_FIRST).map((u) => u.date));
    expect(NEWS_FIRST).toBe(3);
    for (const u of UPDATES.slice(0, NEWS_FIRST)) {
      expect(pl).toContain(updateDate(u.date, 'pl'));
      for (const i of u.items) expect(textOf(pl)).toContain(i);
    }
    // One list per date, and one for "Binnenkort".
    expect(pl.match(/<ul class="news-items" lang="nl" dir="ltr">/g)).toHaveLength(NEWS_FIRST + 1);
    expect(pl).toMatch(/<h2 id="news-[\d-]+" lang="pl">/);
    // One button for the rest; the line that it is in Dutch, in Polish (and English small).
    expect(pl.match(/class="btn news-more"/g)).toHaveLength(1);
    expect(textOf(pl)).toContain('Więcej');
    expect(textOf(pl)).toContain('Zmiany są opisane po niderlandzku.');
  });

  it('shows every date after "Meer", with nothing more to tap', () => {
    const all = news('pl', true);
    expect([...all.matchAll(/<time dateTime="([\d-]+)"/gi)].map((m) => m[1])).toEqual(UPDATES.map((u) => u.date));
    expect(all).not.toContain('news-more');
    expect(all).not.toContain('<a ');
  });

  it('reads right to left in Arabic, the Dutch points left to right', () => {
    const ar = news('ar');
    expect(ar).toContain('<div class="screen news" dir="rtl">');
    expect(ar).toMatch(/<h2 id="news-[\d-]+" lang="ar">/);
    expect(ar).toContain('<ul class="news-items" lang="nl" dir="ltr">');
    expect(textOf(ar)).toContain(updateDate(UPDATES[0].date, 'ar'));
  });

  it('is all Dutch in the work-rules track, without the line that it is in Dutch', () => {
    const nl = news('nl');
    expect(textOf(nl)).toContain('Wat is er nieuw?');
    expect(textOf(nl)).toContain(updateDate(UPDATES[0].date, 'nl-NL'));
    expect(textOf(nl)).not.toContain(uiNl.newsInDutch as string);
    expect(textOf(nl)).not.toContain('What’s new?');
    expect(textOf(nl)).toContain('Meer');
  });

  it('starts with "Binnenkort": what is coming, in Dutch, one line in the help language; left out when empty', () => {
    const pl = news('pl');
    const soon = pl.match(/<section class="news-day news-soon"[\s\S]*?<\/section>/)![0];
    expect(pl.indexOf('news-soon')).toBeLessThan(pl.indexOf('<time'));
    expect(soon).toContain('<h2 id="news-soon" lang="nl" dir="ltr">Binnenkort</h2>');
    expect(textOf(soon)).toContain('Nad tym teraz pracujemy.');
    expect(soon).toContain('<ul class="news-items" lang="nl" dir="ltr">');
    for (const i of UPCOMING) expect(textOf(soon)).toContain(i);
    // No dates and no promise in what is coming.
    for (const i of UPCOMING) expect(i, i).not.toMatch(/\d{4}|januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december|beloof/i);
    // The work-rules track: the line in Dutch.
    expect(textOf(news('nl'))).toContain('Hieraan werken we nu.');
    // Nothing coming: no heading, no line, the dates first.
    const empty = unescape(renderToStaticMarkup(createElement(News, { lang: getHelpLanguage('pl', 'f'), onBack: () => {}, upcoming: [] })));
    expect(empty).not.toContain('Binnenkort');
    expect(empty).not.toContain('news-soon');
    expect(textOf(empty)).not.toContain('Nad tym teraz pracujemy.');
  });

  it('shows "Binnenkort" first on vloertaal.nl/nieuw too, and leaves it out when empty', () => {
    const page = updatesPage(UPDATES, UPCOMING);
    expect(page.indexOf('Binnenkort')).toBeGreaterThan(-1);
    expect(page.indexOf("Binnenkort")).toBeLessThan(page.indexOf(`<section><h2><time datetime="${UPDATES[0].date}">`));
    expect(page).toContain('Hieraan werken we nu.');
    for (const i of UPCOMING) expect(page).toContain(i);
    expect(updatesPage(UPDATES, [])).not.toContain('Binnenkort');
  });

  it('has its title and lines in every help language, and a date locale for each', () => {
    for (const src of helpLanguageSources) {
      expect(src.ui.whatsNew, src.code).toBeTruthy();
      expect(src.ui.newsInDutch, src.code).toBeTruthy();
      expect(src.ui.upcomingNow, src.code).toBeTruthy();
    }
    expect(dateLocale('prs')).toBe('fa-AF');
    expect(dateLocale(undefined)).toBe('en-GB');
    expect(dateLocale('nl')).toBe('nl-NL');
  });
});
