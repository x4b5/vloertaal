import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { askedHelpLang } from '../src/lib/langGuess';
import { describe as describeLine, hreflangLinks, LANG_PAGES, langPage } from '../src/lib/langPages';
import { RULES_PATH, rulesPage, SECTOR_PAGES, sectorPage } from '../src/lib/sectorPages';
import { COACH_PATH, coachPage } from '../src/lib/coachPage';
import { siteLinks } from '../src/lib/siteLinks';
import { unitFromSearch } from '../src/lib/unitLink';
import { sitemap } from '../src/lib/sitemap';

// What search engines read before any script runs (docs/seo-plan.md, step 2).
const page = readFileSync('index.html', 'utf8');

const meta = (name: string) => page.match(new RegExp(`<meta name="${name}" content="([^"]*)"`))?.[1] ?? '';

describe('start page for search engines', () => {
  it('is Dutch', () => {
    expect(page).toMatch(/<html lang="nl">/);
  });

  it('has a title that says what it is', () => {
    const title = page.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
    expect(title).toContain('Vloertaal');
    expect(title).toMatch(/gratis/i);
    expect(title).toMatch(/Nederlands/);
    expect(title.length).toBeLessThanOrEqual(60);
  });

  it('has a Dutch description of search-result length', () => {
    const d = meta('description');
    expect(d).toMatch(/Nederlands/);
    expect(d).toMatch(/gratis/i);
    expect(d.length).toBeGreaterThanOrEqual(70);
    expect(d.length).toBeLessThanOrEqual(160);
  });

  it('describes itself as a free web app in structured data', () => {
    const json = page.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
    expect(json).toBeDefined();
    const data = JSON.parse(json!);
    expect(data['@type']).toBe('WebApplication');
    expect(data.url).toBe('https://vloertaal.nl/');
    expect(data.isAccessibleForFree).toBe(true);
    expect(data.offers.price).toBe('0');
  });
});

describe('sitemap', () => {
  it('lists the readable pages', () => {
    const xml = sitemap();
    for (const path of ['/', '/intro/', '/nieuw/', '/pl/', '/ar/', '/prs/', '/en/']) {
      expect(xml).toContain(`<loc>https://vloertaal.nl${path}</loc>`);
    }
  });

  it('is not also a static file that could drift from the built one', () => {
    expect(() => readFileSync('public/sitemap.xml', 'utf8')).toThrow();
  });
});

describe('a page per help language (docs/seo-plan.md, step 3)', () => {
  it('has the nine help languages and English', () => {
    expect(LANG_PAGES.map((p) => p.code).sort()).toEqual(['ar', 'bg', 'en', 'fa', 'pl', 'prs', 'ro', 'ti', 'tr', 'uk']);
  });

  for (const p of LANG_PAGES) {
    describe(p.code, () => {
      const html = langPage(p.code);
      const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';

      it('is in its own language and direction, with its own address', () => {
        expect(html).toContain(`<html lang="${p.tag}" dir="${p.dir}">`);
        expect(html).toContain(`<link rel="canonical" href="https://vloertaal.nl${p.path}" />`);
      });

      it('names every other language page, and the Dutch start page as default', () => {
        expect(html).toContain(hreflangLinks());
        expect(html).toContain('hreflang="x-default" href="https://vloertaal.nl/"');
      });

      it('has a title with the name and a description of search-result length', () => {
        expect(html).toMatch(/<title>Vloertaal – [^<]+<\/title>/);
        expect([...desc].length).toBeGreaterThanOrEqual(50);
        expect([...desc].length).toBeLessThanOrEqual(160);
      });

      it('opens the app with its language asked', () => {
        expect(html).toContain(p.code === 'en' ? 'class="cta" href="/"' : `class="cta" href="/?taal=${p.code}"`);
      });

      it('has readable structured data', () => {
        const json = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
        const data = JSON.parse(json!);
        expect(data.inLanguage).toBe(p.tag);
        expect(data.about.isAccessibleForFree).toBe(true);
      });
    });
  }

  it('cuts the search line at a sentence', () => {
    expect(describeLine('One. Two. ' + 'x'.repeat(200) + '.')).toBe('One. Two.');
    expect(describeLine('y'.repeat(300)).length).toBe(160);
  });

  it('the app takes the asked language as its first guess', () => {
    expect(askedHelpLang('?taal=pl')).toBe('pl');
    expect(askedHelpLang('?taal=PRS')).toBe('prs');
    expect(askedHelpLang('?taal=xx')).toBeNull();
    expect(askedHelpLang('?taal=en')).toBeNull();
    expect(askedHelpLang('')).toBeNull();
  });
});

describe('a page per sector and for Werkregels (docs/seo-plan.md, step 4)', () => {
  const pages = [...SECTOR_PAGES.map((p) => ({ path: p.path, html: sectorPage(p.id) })), { path: RULES_PATH, html: rulesPage() }];

  for (const { path, html } of pages) {
    describe(path, () => {
      const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
      const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';

      it('is Dutch, with its own address, a short title and a search-length description', () => {
        expect(html).toContain('<html lang="nl" dir="ltr">');
        expect(html).toContain(`<link rel="canonical" href="https://vloertaal.nl${path}" />`);
        expect(title).toContain('Vloertaal');
        expect(title.length).toBeLessThanOrEqual(60);
        expect(desc.length).toBeGreaterThanOrEqual(70);
        expect(desc.length).toBeLessThanOrEqual(160);
      });

      it('has one h1, a way into the app, and links to the other pages', () => {
        expect(html.match(/<h1>/g)).toHaveLength(1);
        expect(html).toContain('class="cta" href="/"');
        for (const other of SECTOR_PAGES) expect(html).toContain(`href="${other.path}"`);
        expect(html).toContain('href="/pl/"');
      });

      it('has structured data with breadcrumbs', () => {
        const json = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
        const data = JSON.parse(json!);
        expect(data[1]['@type']).toBe('BreadcrumbList');
        expect(data[1].itemListElement.at(-1).item).toBe(`https://vloertaal.nl${path}`);
      });
    });
  }

  it('shows each word of a sector once', () => {
    const words = [...sectorPage('construction').matchAll(/<ul class="words">(.*?)<\/ul>/g)][0][1].split('<li>');
    expect(new Set(words).size).toBe(words.length);
  });

  it('are in the sitemap', () => {
    for (const { path } of pages) expect(sitemap()).toContain(`<loc>https://vloertaal.nl${path}</loc>`);
  });
});

describe('the page for coaches (docs/seo-plan.md, step 5)', () => {
  const html = coachPage();

  it('is Dutch, with a short title, its own address and a search-length description', () => {
    const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
    const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
    expect(html).toContain(`<link rel="canonical" href="https://vloertaal.nl${COACH_PATH}" />`);
    expect(title.length).toBeLessThanOrEqual(60);
    expect(desc.length).toBeLessThanOrEqual(160);
    expect(sitemap()).toContain(`<loc>https://vloertaal.nl${COACH_PATH}</loc>`);
  });

  it('links every topic in a way the app opens', () => {
    const links = [...html.matchAll(/href="\/\?unit=([^"]+)"/g)].map((m) => m[1]);
    expect(links.length).toBeGreaterThan(25);
    for (const slug of links) expect(unitFromSearch(`?unit=${slug}`), slug).not.toBeNull();
  });
});

describe('links from the start page, before any script', () => {
  const links = siteLinks();

  it('reach every plain page', () => {
    for (const path of sitemap().match(/<loc>[^<]+<\/loc>/g)!.map((l) => l.slice(5 + 'https://vloertaal.nl'.length, -6))) {
      if (path === '/') continue;
      expect(links).toContain(`href="${path}"`);
    }
  });

  it('are removed when the app draws', () => {
    expect(readFileSync('src/main.tsx', 'utf8')).toContain("getElementById('site-links')?.remove()");
  });
});
