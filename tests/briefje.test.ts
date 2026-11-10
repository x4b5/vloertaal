import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { proSections } from '../src/content/pro';
import { helpLanguageSources } from '../src/i18n/all';
import { uiNl } from '../src/i18n/nl';
import { allForms, uiEn } from '../src/i18n/types';
import { BRIEFJE_NL, briefjeFiles, briefjeIndexPage, briefjeNlPage, briefjePage, briefjePath, qrAddress, shownAddress } from '../src/lib/briefjePage';
import { rulesPage } from '../src/lib/sectorPages';
import { coachPage } from '../src/lib/coachPage';
import { LANG_PAGES } from '../src/lib/langPages';
import { packText } from '../src/lib/pageTexts';
import { qrCode } from '../src/lib/qr';
import { sitemap } from '../src/lib/sitemap';

/**
 * vloertaal.nl/briefje: the printed note for day 1 (src/lib/briefjePage.ts), one A4 page per
 * language: what Vloertaal is in the help language and in Dutch, the address, and a QR code to it.
 */
const unescape = (s: string) => s.replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');

/** The modules of the page's QR code, back from its SVG path (four modules of quiet zone). */
function svgModules(html: string): boolean[][] {
  const svg = html.match(/<svg [^>]*viewBox="0 0 (\d+) \1"[\s\S]*?<\/svg>/);
  expect(svg).not.toBeNull();
  const n = Number(svg![1]) - 8;
  const m = Array.from({ length: n }, () => new Array<boolean>(n).fill(false));
  for (const [, x, y, w] of svg![0].matchAll(/M(\d+) (\d+)h(\d+)v1h-\3z/g)) for (let k = 0; k < Number(w); k++) m[Number(y) - 4][Number(x) - 4 + k] = true;
  return m;
}

describe('the note, one page per language', () => {
  it('there is a page for every help language and English, and an index', () => {
    const files = briefjeFiles().map((f) => f.fileName);
    expect(files).toEqual(['briefje/index.html', ...LANG_PAGES.map((p) => `briefje/${p.code}/index.html`), 'briefje/nl/index.html']);
    expect(files).toHaveLength(17);
    expect(readFileSync('vite.config.ts', 'utf8')).toContain('for (const f of briefjeFiles()) this.emitFile({ type: \'asset\', ...f });');
  });

  for (const page of LANG_PAGES) {
    it(`${page.code}: in the help language and in Dutch, the address, and a QR code to it`, () => {
      const html = briefjePage(page.code);
      const text = unescape(html);
      // The page's language and direction; the Dutch half says it is Dutch.
      expect(html).toContain(`<html lang="${page.tag}" dir="${page.dir}">`);
      expect(html).toContain(`<article class="briefje" dir="${page.dir}">`);
      expect(html).toContain('<div class="nl" lang="nl" dir="ltr">');
      // What Vloertaal is (two lines), and "Open on your phone", in both languages.
      const help = (key: 'briefjeWhat' | 'briefjeHow' | 'briefjeOpen') => (page.code === 'en' ? uiEn[key] : packText(page.code).ui(key));
      for (const key of ['briefjeWhat', 'briefjeHow', 'briefjeOpen'] as const) {
        expect(text, key).toContain(help(key));
        expect(text, `nl ${key}`).toContain(uiNl[key] as string);
      }
      expect(html).toContain(`<h1>${help('briefjeWhat').replace(/&/g, '&amp;')}</h1>`);
      // The address as printed, and as a link on screen.
      expect(shownAddress(page)).toBe(`vloertaal.nl/${page.code}`);
      expect(html).toContain(`<p class="adres" lang="nl" dir="ltr"><a href="/${page.code}/">vloertaal.nl/${page.code}</a></p>`);
      // The QR code holds exactly that address, with https, and is drawn as it was made.
      expect(qrAddress(page)).toBe(`https://vloertaal.nl/${page.code}/`);
      expect(svgModules(html)).toEqual(qrCode(`https://vloertaal.nl/${page.code}/`, 'Q').modules);
      expect(html).toContain(`aria-label="QR-code: vloertaal.nl/${page.code}"`);
    });
  }

  it('nl: a note in plain Dutch for who speaks Dutch already, to vloertaal.nl/werkregels (review, 9 November 2026)', () => {
    const html = briefjeNlPage();
    const text = unescape(html);
    expect(html).toContain('<html lang="nl" dir="ltr">');
    for (const line of Object.values(BRIEFJE_NL)) expect(text).toContain(line);
    expect(html).toContain('<p class="adres"><a href="/werkregels/">vloertaal.nl/werkregels</a></p>');
    expect(svgModules(html)).toEqual(qrCode('https://vloertaal.nl/werkregels/', 'Q').modules);
    // The index lists it, and points to it for who speaks Dutch already.
    expect(briefjeIndexPage()).toContain('href="/briefje/nl/"');
    // The page it points to opens the app with "Ik spreek al Nederlands" on top.
    expect(rulesPage()).toContain('<a class="cta" href="/?taal=nl">');
  });

  it('the QR codes read back to their address (tests/qr.test.ts reads every module; here: black on white, big enough)', () => {
    const html = briefjePage('pl');
    expect(html).toContain('fill="#fff"');
    expect(html).toContain('<path fill="#000"');
    // Printed: 66 mm wide (29 + 8 modules: about 1.8 mm a module), the address in 38 pt, and the two together.
    expect(html).toContain('.briefje .qr { width: 66mm; }');
    expect(html).toContain('.briefje .open .adres { font-size: 38pt;');
    expect(html).toContain('.briefje .open { margin-top: 5mm; padding-top: 5mm; break-inside: avoid; }');
    expect(html).toContain('@page { size: A4 portrait;');
    // On paper only the note: not the coach's bar or the footer.
    expect(html).toMatch(/@media print \{[\s\S]*\.stripe, \.scherm, footer \{ display: none; \}/);
  });

  it('is a plain page: one h1, a main, a title and a description of its own, not for search results', () => {
    const pages = [briefjeIndexPage(), ...LANG_PAGES.map((p) => briefjePage(p.code))];
    for (const html of pages) {
      expect(html.match(/<h1[\s>]/g)).toHaveLength(1);
      expect(html).toContain('<main>');
      expect(html).toContain('<meta name="robots" content="noindex" />');
      expect(html).not.toContain('rel="canonical"');
      expect(html).toMatch(/body \{[^}]*overflow-wrap: anywhere/);
      for (const img of html.match(/<img [^>]*>/g) ?? []) expect(img).toMatch(/ alt="/);
    }
    const titles = pages.map((h) => h.match(/<title>([^<]*)/)![1]);
    const descriptions = pages.map((h) => h.match(/<meta name="description" content="([^"]*)"/)![1]);
    expect(new Set(titles).size).toBe(pages.length);
    expect(new Set(descriptions).size).toBe(pages.length);
    expect(sitemap()).not.toContain('/briefje/');
  });

  it('the index lists every language, in its own script and in Dutch', () => {
    const html = briefjeIndexPage();
    expect(html).toContain('<html lang="nl" dir="ltr">');
    expect(html).toContain('<h1>Een briefje voor dag 1</h1>');
    for (const p of LANG_PAGES) expect(html).toContain(`<a href="${briefjePath(p.code)}"><span lang="${p.tag}" dir="${p.dir}">`);
    expect(html).toContain('<span lang="ti" dir="ltr">ትግርኛ</span> · Tigrinya');
    expect(html).toContain('<a href="/werkregels/">vloertaal.nl/werkregels</a>');
  });

  it('the texts are translated in every help language, marked for review, and short', () => {
    for (const src of helpLanguageSources) {
      for (const key of ['briefjeWhat', 'briefjeHow', 'briefjeOpen'] as const) {
        const forms = allForms(src.ui[key]);
        expect(forms.length, `${src.code} ${key}`).toBeGreaterThan(0);
        for (const f of forms) expect(f.length, `${src.code} ${key}`).toBeLessThanOrEqual(110);
      }
      const file = readFileSync(`src/i18n/${src.code}.ts`, 'utf8');
      for (const key of ['briefjeWhat', 'briefjeHow', 'briefjeOpen']) expect(file).toMatch(new RegExp(`^    ${key}: .*// nieuw, nalezen$`, 'm'));
    }
    // A note is for anyone: Arabic and Tigrinya use their neutral form ("x") for "Open on your phone".
    expect(packText('ar').ui('briefjeOpen')).toBe('يُرجى فتح الرابط على الهاتف:');
    expect(packText('ti').ui('briefjeOpen')).toBe('ኣብ ተሌፎንኩም ክፈቱ:');
  });

  it('is linked from /voor-begeleiders/ (and named in the app’s page), and in docs/pilot.md', () => {
    const group = proSections.find((s) => s.id === 'p.group')!;
    expect(group.lines!.find((l) => l.lead === 'Een briefje voor dag 1.')!.text).toContain('vloertaal.nl/briefje');
    expect(coachPage()).toContain('<a href="/briefje/">vloertaal.nl/briefje</a>');
    expect(readFileSync('docs/pilot.md', 'utf8')).toContain('vloertaal.nl/briefje');
  });
});
