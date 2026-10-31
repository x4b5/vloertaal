import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { belgiumPage, FAQ, faqData, faqScript, FLEMISH_WORDS, llmsTxt } from '../src/lib/geoPages';
import { BELGIUM_PATH } from '../src/lib/paths';
import { APP_DATA } from '../src/lib/plainPage';
import { siteLinks } from '../src/lib/siteLinks';
import { PAGES, sitemap } from '../src/lib/sitemap';

const ldJson = (html: string) => [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
const flat = (data: unknown[]): Record<string, unknown>[] => data.flatMap((d) => (Array.isArray(d) ? flat(d) : [d as Record<string, unknown>]));

describe('where Vloertaal is for', () => {
  it('names the Netherlands and Belgium in the structured data', () => {
    const codes = (APP_DATA.areaServed as { identifier: string }[]).map((c) => c.identifier);
    expect(codes).toEqual(['NL', 'BE']);
    const index = readFileSync('index.html', 'utf8');
    const app = ldJson(index)[0]['@graph'].find((d: { '@type': string }) => d['@type'] === 'WebApplication');
    expect(app.areaServed.map((c: { identifier: string }) => c.identifier)).toEqual(['NL', 'BE']);
    expect(index).toContain('og:locale:alternate" content="nl_BE"');
  });

  it('has a Belgian page in the sitemap and the link rows', () => {
    expect(PAGES).toContain(BELGIUM_PATH);
    expect(sitemap()).toContain(`https://vloertaal.nl${BELGIUM_PATH}`);
    expect(siteLinks()).toContain(`href="${BELGIUM_PATH}"`);
  });
});

describe('/belgie/', () => {
  const html = belgiumPage();
  it('is Flemish Dutch, with a title and description of search length', () => {
    expect(html).toMatch(/<html lang="nl-BE"/);
    const title = html.match(/<title>([^<]*)<\/title>/)![1];
    const desc = html.match(/<meta name="description" content="([^"]*)"/)![1];
    expect(title).toMatch(/België/);
    expect(desc.length).toBeLessThanOrEqual(160);
  });

  it('shows the Flemish words and the Belgian work rules', () => {
    for (const [, be] of FLEMISH_WORDS) expect(html).toContain(be); 
    expect(html).toContain('Werkregels in België');
  });

  it('says the Belgian lessons are not checked by an expert yet, and never that experts check them', () => {
    expect(html).toContain('nog niet nagekeken door een expert');
    expect(html).not.toMatch(/experts kijken/i);
  });

  it('has valid structured data with its questions', () => {
    const types = flat(ldJson(html)).map((d) => d['@type']);
    expect(types).toEqual(expect.arrayContaining(['WebPage', 'BreadcrumbList', 'FAQPage']));
  });
});

describe('questions and answers', () => {
  it('are modest: no best, no only, no promises', () => {
    for (const f of FAQ) expect(`${f.q} ${f.a}`).not.toMatch(/\b(beste|enige|uniek|garantie|altijd)\b/i);
  });

  it('are on the start page, as text and as FAQPage data', () => {
    expect(siteLinks()).toContain(FAQ[0].q);
    const data = JSON.parse(faqScript().replace(/^<script[^>]*>|<\/script>$/g, ''));
    expect(data).toEqual(faqData());
    expect(data.mainEntity).toHaveLength(FAQ.length);
  });
});

describe('/llms.txt', () => {
  const txt = llmsTxt();
  it('starts with the name and a one-line summary', () => {
    expect(txt.startsWith('# Vloertaal\n\n> ')).toBe(true);
  });

  it('links every page of the sitemap', () => {
    for (const p of PAGES) {
      if (p === '/intro/' || p === '/nieuw/' || p === '/') expect(txt).toContain(`https://vloertaal.nl${p})`);
      else expect(txt).toContain(`(https://vloertaal.nl${p})`);
    }
  });
});
