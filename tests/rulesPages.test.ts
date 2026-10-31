import { describe, expect, it } from 'vitest';
import { belgiumPage, llmsTxt } from '../src/lib/geoPages';
import { RULES_TOPIC_PAGES, rulesTopicPage } from '../src/lib/rulesPages';
import { rulesPage } from '../src/lib/sectorPages';
import { sitemap } from '../src/lib/sitemap';

const nl = RULES_TOPIC_PAGES.filter((p) => p.country === 'nl');
const be = RULES_TOPIC_PAGES.filter((p) => p.country === 'be');

describe('a page per work-rules topic', () => {
  it('has one address per topic, in the sitemap and in llms.txt', () => {
    const paths = RULES_TOPIC_PAGES.map((p) => p.path);
    expect(new Set(paths).size).toBe(paths.length);
    expect(nl.length).toBeGreaterThan(20);
    expect(be.length).toBeGreaterThan(20);
    for (const p of RULES_TOPIC_PAGES) {
      expect(p.path).toMatch(/^\/(belgie\/)?werkregels\/[a-z0-9-]+\/$/);
      expect(sitemap()).toContain(`https://vloertaal.nl${p.path}</loc>`);
      expect(llmsTxt()).toContain(`(https://vloertaal.nl${p.path})`);
    }
  });

  it('is linked from /werkregels (NL) and /belgie (BE)', () => {
    const rules = rulesPage();
    for (const p of nl) expect(rules, p.path).toContain(`href="${p.path}"`);
    const bel = belgiumPage();
    for (const p of be) expect(bel, p.path).toContain(`href="${p.path}"`);
  });

  it('shows the lessons\' rules, "Waar of niet waar?" and "Onthoud", with the right disclaimer and language', () => {
    for (const p of RULES_TOPIC_PAGES) {
      const html = rulesTopicPage(p);
      expect(html).toContain(`<h1>`);
      expect(html).toContain('Onthoud:');
      expect(html).toContain('"@type":"LearningResource"');
      expect(html).toMatch(p.country === 'be' ? /<html lang="nl-BE"/ : /<html lang="nl"/);
      expect(html).toContain(p.country === 'be' ? 'Deze regels gelden in België' : 'Deze regels gelden in Nederland');
      expect(html).toContain(`href="/?unit=${encodeURIComponent(p.unit.id)}"`);
      expect(html).not.toMatch(/experts kijken|de beste/i);
      const desc = html.match(/<meta name="description" content="([^"]*)"/)![1];
      expect(desc.length, p.path).toBeLessThanOrEqual(160);
    }
  });
});
