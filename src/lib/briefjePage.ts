import { uiNl } from '../i18n/nl';
import { uiEn } from '../i18n/types';
import { LANG_PAGES, type LangPage, type PageCode } from './langPages';
import { packText } from './pageTexts';
import { BRIEFJE_PATH, COACH_PATH, PRIVACY_PATH, RULES_PATH } from './paths';
import { esc, plainPage, SITE } from './plainPage';
import { qrSvg } from './qr';

/**
 * vloertaal.nl/briefje: the note for day 1 (docs/pilot.md), ready to print, one A4 page per
 * language (the owner's request, 4 November 2026). Until then the coach made it. In the help
 * language and in Dutch, in big letters: what Vloertaal is in two lines, "Open op je telefoon:"
 * with vloertaal.nl/<language>, and a QR code to that address (src/lib/qr.ts, made here at build
 * time: no library, no request). /briefje/ itself lists the languages, for the coach.
 * The texts are UI keys (briefjeWhat, briefjeHow, briefjeOpen in src/i18n), so the volunteers'
 * review list has them; the app does not show them. Not for search results (noindex, not in the
 * sitemap): /voor-begeleiders links here. Made by vite.config.ts; tests/briefje.test.ts.
 */

/** The Dutch names of the languages, for the coach's list (the pages say each in its own script too). */
const DUTCH_NAME: Record<PageCode, string> = {
  ar: 'Arabisch', ti: 'Tigrinya', fa: 'Perzisch (Farsi)', prs: 'Dari', uk: 'Oekraïens', tr: 'Turks', pl: 'Pools',
  ro: 'Roemeens', bg: 'Bulgaars', es: 'Spaans', pt: 'Portugees', fr: 'Frans', de: 'Duits', en: 'Engels',
};

/** The keys of the note, in order. */
type NoteKey = 'briefjeWhat' | 'briefjeHow' | 'briefjeOpen';

/** A note text in the help language: the default form (a note is for anyone: no gender chosen). */
function helpText(code: PageCode, key: NoteKey): string {
  return code === 'en' ? uiEn[key] : packText(code).ui(key);
}
/** Its Dutch half (plain strings in src/i18n/nl.ts). */
const dutch = (key: NoteKey) => uiNl[key] as string;

/** The page of the note for a language, and where it points: the language's own page (src/lib/langPages.ts). */
export function briefjePath(code: PageCode): string {
  return `${BRIEFJE_PATH}${code}/`;
}
/** What the note says to open, as it is printed: "vloertaal.nl/pl". */
export const shownAddress = (page: LangPage) => `vloertaal.nl${page.path.replace(/\/$/, '')}`;
/** What the QR code holds: the full address, so every phone's camera takes it for a link. */
export const qrAddress = (page: LangPage) => `${SITE}${page.path}`;

const PAGE_STYLE = `
  @page { size: A4 portrait; margin: 14mm; }
  .briefje { background: #fff; color: #111; border: 2px solid var(--line); border-radius: 12px; padding: 24px 20px; margin: 0 0 16px; font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Noto Sans', 'Noto Sans Ethiopic', Ebrima, Nyala, 'Noto Naskh Arabic', Tahoma, sans-serif; }
  .briefje h1 { font-size: 2rem; line-height: 1.25; margin: 0 0 10px; }
  .briefje p { margin: 0 0 10px; }
  .briefje .hoe { font-size: 1.4rem; line-height: 1.35; }
  .briefje .nl { border-top: 2px solid #ccc; margin: 18px 0 0; padding: 14px 0 0; }
  .briefje .nl p { font-size: 1.3rem; line-height: 1.35; }
  .briefje .nl .wat { font-weight: 700; font-size: 1.5rem; }
  .briefje .open { text-align: center; border-top: 2px solid #ccc; margin: 18px 0 0; padding: 16px 0 0; }
  .briefje .open p { font-size: 1.35rem; margin: 0 0 4px; }
  .briefje .open .adres { font-size: 2rem; font-size: min(2.6rem, calc((100vw - 76px) / 6.6)); font-weight: 800; letter-spacing: 0.01em; margin: 10px 0 14px; }
  .briefje .open .adres a { color: inherit; text-decoration: none; }
  .briefje .qr { width: 280px; max-width: 100%; margin: 0 auto; }
  /* Ethiopic script looks smaller than Latin at the same size. */
  .briefje h1:lang(ti) { font-size: 2.3rem; }
  .briefje .hoe:lang(ti), .briefje .open p:lang(ti) { font-size: 1.6rem; }
  .briefje .qr svg { display: block; width: 100%; height: auto; }
  .scherm { margin: 0 0 16px; }
  .scherm button { font: inherit; font-weight: 700; padding: 10px 14px; border-radius: 10px; border: 2px solid #1e2226; background: var(--yellow); color: #1e2226; cursor: pointer; }
  .scherm button:focus-visible { outline: 3px solid var(--ink); outline-offset: 2px; }
  ul.talen { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 8px; }
  ul.talen a { display: block; padding: 10px 12px; border: 2px solid var(--line); border-radius: 10px; color: inherit; text-decoration: none; background: var(--card); }
  ul.talen a:focus-visible { outline: 3px solid var(--yellow); outline-offset: 1px; }
  @media print {
    body { background: #fff; color: #000; font-size: 12pt; }
    main { max-width: none; padding: 0; }
    .stripe, .scherm, footer { display: none; }
    header { margin: 0 0 5mm; }
    .briefje { border: 0; padding: 0; margin: 0; }
    .briefje h1 { font-size: 26pt; margin-bottom: 3mm; }
    .briefje .hoe { font-size: 19pt; }
    .briefje .nl { margin-top: 5mm; padding-top: 5mm; }
    .briefje .nl p { font-size: 17pt; }
    .briefje .nl .wat { font-size: 19pt; }
    /* The address and its code stay together on the page. */
    .briefje .open { margin-top: 5mm; padding-top: 5mm; break-inside: avoid; }
    .briefje .open p { font-size: 17pt; }
    .briefje .open .adres { font-size: 38pt; margin: 3mm 0 5mm; }
    .briefje .qr { width: 66mm; }
    .briefje h1:lang(ti) { font-size: 29pt; }
    .briefje .hoe:lang(ti), .briefje .open p:lang(ti) { font-size: 21pt; }
  }
`;

/** The note in one language. */
export function briefjePage(code: PageCode): string {
  const page = LANG_PAGES.find((p) => p.code === code);
  if (!page) throw new Error(`briefje: no language page for ${code}`);
  const t = (key: NoteKey) => esc(helpText(code, key));
  const nl = (key: NoteKey) => esc(dutch(key));
  const address = shownAddress(page);
  const body = `<div class="scherm" lang="nl" dir="ltr">
<p><strong>Voor begeleiders:</strong> print dit briefje op A4 (staand) en geef het aan je leerling. Test de QR-code eerst met je eigen telefoon.</p>
<p><button type="button" onclick="window.print()">Print dit briefje</button> · <a href="${BRIEFJE_PATH}">Andere taal</a></p>
</div>
<article class="briefje" dir="${page.dir}">
<h1>${t('briefjeWhat')}</h1>
<p class="hoe">${t('briefjeHow')}</p>
<div class="nl" lang="nl" dir="ltr">
<p class="wat">${nl('briefjeWhat')}</p>
<p>${nl('briefjeHow')}</p>
</div>
<div class="open">
<p>${t('briefjeOpen')}</p>
<p lang="nl" dir="ltr">${nl('briefjeOpen')}</p>
<p class="adres" lang="nl" dir="ltr"><a href="${page.path}">${esc(address)}</a></p>
<div class="qr">${qrSvg(qrAddress(page), `QR-code: ${address}`)}</div>
</div>
</article>
<footer lang="nl" dir="ltr"><p><a href="${BRIEFJE_PATH}">Alle talen</a> · <a href="${COACH_PATH}">Voor begeleiders en werkgevers</a> · <a href="${PRIVACY_PATH}">Privacy</a></p></footer>
<style>${PAGE_STYLE}</style>`;
  return plainPage(
    {
      path: briefjePath(code), lang: page.tag, dir: page.dir, ogLocale: page.ogLocale, noindex: true,
      title: `Briefje: ${page.nativeName} | Vloertaal`,
      description: `${helpText(code, 'briefjeWhat')} ${address}`,
    },
    body,
  );
}

/** /briefje/: what the note is, and a link per language. */
export function briefjeIndexPage(): string {
  const items = LANG_PAGES.map((p) => `<li><a href="${briefjePath(p.code)}"><span lang="${p.tag}" dir="${p.dir}">${esc(p.nativeName)}</span> · ${esc(DUTCH_NAME[p.code])}</a></li>`).join('\n');
  const body = `<h1>Een briefje voor dag 1</h1>
<p class="lead">Print het briefje in de taal van je leerling, op A4. Daarop staat in die taal en in het Nederlands wat Vloertaal is, de link en een QR-code, in grote letters. De leerling houdt het briefje: zo vindt hij of zij de app later terug, ook op een andere telefoon.</p>
<section aria-labelledby="talen"><h2 id="talen">Kies de taal</h2>
<ul class="talen">
${items}
</ul></section>
<section aria-labelledby="zo"><h2 id="zo">Zo gebruik je het</h2>
<ul class="lines">
<li>Open het briefje en kies Printen (Ctrl+P, of in het menu van je browser): A4, staand.</li>
<li>Test de QR-code eerst met je eigen telefoon. Hij opent de pagina van Vloertaal in die taal, met de knop om te beginnen.</li>
<li>Spreekt je leerling al Nederlands? Geef dan de link <a href="${RULES_PATH}">vloertaal.nl/werkregels</a>.</li>
</ul></section>
<footer><p><a href="${COACH_PATH}">Voor begeleiders en werkgevers</a> · <a href="${PRIVACY_PATH}">Privacy</a></p></footer>
<style>${PAGE_STYLE}</style>`;
  return plainPage(
    {
      path: BRIEFJE_PATH, lang: 'nl', ogLocale: 'nl_NL', noindex: true,
      title: 'Briefje voor dag 1 | Vloertaal',
      description: 'Een A4-briefje in de taal van je leerling: wat Vloertaal is, de link en een QR-code. Om te printen en mee te geven.',
    },
    body,
  );
}

/** Every page of the note, as the files the build writes (vite.config.ts). */
export function briefjeFiles(): { fileName: string; source: string }[] {
  return [
    { fileName: `${BRIEFJE_PATH.slice(1)}index.html`, source: briefjeIndexPage() },
    ...LANG_PAGES.map((p) => ({ fileName: `${briefjePath(p.code).slice(1)}index.html`, source: briefjePage(p.code) })),
  ];
}
