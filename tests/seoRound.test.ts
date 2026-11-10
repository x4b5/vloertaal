import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { cultureTips } from '../src/content/culture';
import { LAW_CHECKED } from '../src/content/lawChecked';
import { llmsTxt } from '../src/lib/geoPages';
import { LANG_PAGES, langPage } from '../src/lib/langPages';
import { APP_DATA, ORG_DATA, SAME_AS } from '../src/lib/plainPage';
import { RULES_TOPIC_PAGES, rulesTopicPage } from '../src/lib/rulesPages';
import { sitemap } from '../src/lib/sitemap';
import { PAGE_TIPS, pageTip, TIP_PAGES, tipPage, tipPath, tipsIndexPage, tipsIndexPath, tipSlug, WAITS_FOR_LAW_CHECK } from '../src/lib/tipPages';
import { rightsTipCountry } from '../src/lib/tipText';
// @ts-expect-error: a plain .mjs script without types
import { changedPaths, findKey, messages, pagesOf, pathOf, sitemapPaths } from '../scripts/indexnow.mjs';

/* The SEO/GEO round of 10 November 2026 (docs/seo-plan.md): steps 2 to 5. */

const jsonLd = (html: string): Record<string, unknown>[] =>
  [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap((m) => {
    const d = JSON.parse(m[1]);
    return Array.isArray(d) ? d : [d];
  });

describe('step 2: the workplace tips as pages in every language, without the tips about rights', () => {
  it('leaves out every tip about rights, and the few with a rule of law', () => {
    expect(PAGE_TIPS.length).toBeGreaterThan(60);
    for (const t of PAGE_TIPS) {
      expect(rightsTipCountry(t), t.id).toBeNull();
      expect(t.body, t.id).not.toMatch(/Juridisch Loket|FairWork|union|vakbond/i);
    }
    for (const id of WAITS_FOR_LAW_CHECK) {
      expect(cultureTips.some((t) => t.id === id), id).toBe(true);
      expect(PAGE_TIPS.some((t) => t.id === id), id).toBe(false);
    }
    expect(cultureTips.filter((t) => rightsTipCountry(t) !== null).every((t) => !pageTip(t))).toBe(true);
    expect(PAGE_TIPS.every((t) => !t.id.startsWith('be.'))).toBe(true);
  });

  it('has one address per tip and language, in the sitemap, the lists linked from each language page', () => {
    const slugs = PAGE_TIPS.map(tipSlug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const s of slugs) expect(s).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    expect(TIP_PAGES.length).toBe(PAGE_TIPS.length * LANG_PAGES.length);
    const map = sitemap();
    for (const t of TIP_PAGES) expect(map).toContain(`<loc>https://vloertaal.nl${t.path}</loc>`);
    for (const p of LANG_PAGES) {
      expect(map).toContain(`<loc>https://vloertaal.nl${tipsIndexPath(p.code)}</loc>`);
      expect(langPage(p.code)).toContain(`href="${tipsIndexPath(p.code)}"`);
      const list = tipsIndexPage(p.code);
      for (const t of PAGE_TIPS) expect(list).toContain(`href="${tipPath(p.code, t)}"`);
      expect(llmsTxt()).toContain(`(https://vloertaal.nl${tipsIndexPath(p.code)})`);
    }
  });

  it('shows the tip in the page\'s language: the text, the Dutch sentence, the situation with the best answer and why', () => {
    const t = PAGE_TIPS.find((x) => x.id === 'c.names')!;
    const pl = tipPage('pl', t);
    expect(pl).toContain('<html lang="pl" dir="ltr">');
    expect(pl).toContain(`<span lang="nl" dir="ltr">${t.phrase.nl}</span>`);
    expect(pl).toContain('Co robisz?');
    expect(pl).toMatch(/href="\/\?taal=pl&amp;unit=[a-z]+"/);
    expect(pl).not.toContain(t.body); // not English
    const ar = tipPage('ar', t);
    expect(ar).toContain('<html lang="ar" dir="rtl">');
    const en = tipPage('en', t);
    expect(en).toContain(t.body);
    expect(en).toContain(t.why.en);
    expect(en).toContain(t.options.find((o) => o.best)!.en);
  });

  it('links the versions of a tip to each other, with English as the default', () => {
    const t = PAGE_TIPS[0];
    const html = tipPage('uk', t);
    for (const p of LANG_PAGES) expect(html).toContain(`hreflang="${p.tag}" href="https://vloertaal.nl${tipPath(p.code, t)}"`);
    expect(html).toContain(`hreflang="x-default" href="https://vloertaal.nl${tipPath('en', t)}"`);
    expect(html).toContain(`<link rel="canonical" href="https://vloertaal.nl${tipPath('uk', t)}" />`);
  });

  it('says that the translation is not checked yet and that it is not legal advice', () => {
    const html = tipPage('ro', PAGE_TIPS[0]);
    const types = jsonLd(html).map((d) => d['@type']);
    expect(types).toEqual(['WebPage', 'BreadcrumbList']);
    expect(tipPage('en', PAGE_TIPS[0])).toContain('General information, not legal advice.');
  });
});

describe('step 3: questions and answers and the date on the work-rules pages', () => {
  it('gives every topic with "Waar of niet waar?" a FAQPage with the same statements, and the date of the law check', () => {
    let withFaq = 0;
    for (const p of RULES_TOPIC_PAGES) {
      const html = rulesTopicPage(p);
      const data = jsonLd(html);
      const lesson = data.find((d) => d['@type'] === 'LearningResource')!;
      expect(lesson.dateModified).toBe(LAW_CHECKED);
      expect(html).toContain(`<time datetime="${LAW_CHECKED}">`);
      const facts = p.unit.lessons.flatMap((l) => l.steps.flatMap((s) => (s.kind === 'truefalse' ? [s] : [])));
      const faq = data.find((d) => d['@type'] === 'FAQPage') as { mainEntity: { name: string; acceptedAnswer: { text: string } }[] } | undefined;
      if (facts.length === 0) {
        expect(faq).toBeUndefined();
        continue;
      }
      withFaq++;
      expect(faq!.mainEntity.length).toBe(facts.length);
      for (const [i, f] of facts.entries()) {
        expect(faq!.mainEntity[i].name).toBe(`Waar of niet waar: ${f.statement}`);
        expect(faq!.mainEntity[i].acceptedAnswer.text).toBe(`${f.answer ? 'Waar.' : 'Niet waar.'} ${f.why}`);
      }
    }
    expect(withFaq).toBeGreaterThan(RULES_TOPIC_PAGES.length / 2);
  });
});

describe('step 4: who is behind Vloertaal', () => {
  it('is on the start page and every language page in full, and named on every plain page (through the app)', () => {
    expect(APP_DATA.publisher['@id']).toBe(ORG_DATA['@id']);
    for (const p of LANG_PAGES) expect(jsonLd(langPage(p.code)).find((d) => d['@type'] === 'Organization'), p.code).toMatchObject(JSON.parse(JSON.stringify(ORG_DATA)));
    expect(ORG_DATA.founder).toEqual({ '@type': 'Person', name: 'Xavier', jobTitle: 'Arbeidsbemiddelaar' });
    expect(ORG_DATA.email).toBe('hoi@vloertaal.nl');
    const index = readFileSync('index.html', 'utf8');
    const graph = JSON.parse(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/.exec(index)![1])['@graph'] as Record<string, unknown>[];
    const org = graph.find((d) => d['@type'] === 'Organization')!;
    expect(org).toEqual(JSON.parse(JSON.stringify(ORG_DATA)));
  });

  it('names only full https addresses as profiles elsewhere', () => {
    for (const u of SAME_AS) expect(u).toMatch(/^https:\/\/[^\s]+$/);
    expect('sameAs' in ORG_DATA).toBe(SAME_AS.length > 0);
  });
});

describe('step 5: IndexNow', () => {
  it('has exactly one key file, whose content is its name', () => {
    const key = findKey('public');
    expect(key).toMatch(/^[0-9a-f]{32}$/);
    expect(readFileSync(`public/${key}.txt`, 'utf8')).toBe(key);
  });

  it('sends only the sitemap\'s new and changed pages, in messages IndexNow takes', () => {
    expect(pathOf('index.html')).toBe('/');
    expect(pathOf('pl/tip/x/index.html')).toBe('/pl/tip/x/');
    expect(pathOf('assets/a.js')).toBeNull();
    expect(sitemapPaths(sitemap()).length).toBeGreaterThan(1000);
    const root = mkdtempSync(join(tmpdir(), 'vloertaal-indexnow-'));
    try {
      const write = (dist: string, file: string, html: string) => {
        mkdirSync(join(root, dist, file, '..'), { recursive: true });
        writeFileSync(join(root, dist, file), html);
      };
      write('before', 'index.html', 'a');
      write('before', 'bouw/index.html', 'b');
      write('before', 'zorg/index.html', 'c');
      write('after', 'index.html', 'a');
      write('after', 'bouw/index.html', 'b2');
      write('after', 'zorg/index.html', 'c');
      write('after', 'pl/tip/x/index.html', 'new');
      write('after', 'meekijken/index.html', 'not in the sitemap');
      const paths = changedPaths(pagesOf(join(root, 'before')), pagesOf(join(root, 'after')), ['/', '/bouw/', '/zorg/', '/pl/tip/x/']);
      expect(paths).toEqual(['/bouw/', '/pl/tip/x/']);
      // Nothing built before (a failed build): every page counts as new.
      expect(changedPaths(pagesOf(join(root, 'none')), pagesOf(join(root, 'after')), ['/', '/bouw/'])).toEqual(['/', '/bouw/']);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
    const [m] = messages(['/', '/bouw/'], 'k'.repeat(32));
    expect(m).toEqual({ host: 'vloertaal.nl', key: 'k'.repeat(32), keyLocation: `https://vloertaal.nl/${'k'.repeat(32)}.txt`, urlList: ['https://vloertaal.nl/', 'https://vloertaal.nl/bouw/'] });
    expect(messages(Array.from({ length: 10_001 }, (_, i) => `/${i}/`), 'k').length).toBe(2);
  });

  it('runs after every push to main, with the build before and after', () => {
    const wf = readFileSync('.github/workflows/indexnow.yml', 'utf8');
    expect(wf).toMatch(/push:\s*\n\s*branches: \[main\]/);
    expect(wf).toContain('fetch-depth: 2');
    expect(wf).toContain('node scripts/indexnow.mjs ../dist-before dist --wait');
  });
});
