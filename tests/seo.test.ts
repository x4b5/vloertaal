import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

// What search engines read before any script runs (docs/seo-plan.md, step 2).
const page = readFileSync('index.html', 'utf8');
const sitemap = readFileSync('public/sitemap.xml', 'utf8');

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
    for (const url of ['https://vloertaal.nl/', 'https://vloertaal.nl/intro/', 'https://vloertaal.nl/nieuw/']) {
      expect(sitemap).toContain(`<loc>${url}</loc>`);
    }
  });
});
