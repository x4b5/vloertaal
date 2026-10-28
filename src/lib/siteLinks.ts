import { aboutSections } from '../content/about';
import { COACH_PATH } from './coachPage';
import { LANG_PAGES } from './langPages';
import { esc, plainPage } from './plainPage';
import { RULES_PATH, SECTOR_PAGES } from './sectorPages';

const a = (href: string, text: string, lang = 'nl', dir = 'ltr') => `<a href="${href}" lang="${lang}" dir="${dir}">${esc(text)}</a>`;

/** Two plain rows of links: every language page, then the Dutch pages. Also on /intro, /nieuw and the 404 page. */
export function linkRows(): string {
  return `<nav aria-label="Talen">${LANG_PAGES.map((p) => a(p.path, p.nativeName, p.tag, p.dir)).join(' · ')}</nav>
<nav aria-label="Sectoren">${[...SECTOR_PAGES.map((p) => a(p.path, p.name)), a(RULES_PATH, 'Werkregels'), a(COACH_PATH, 'Voor begeleiders'), a('/intro/', 'Waarom Vloertaal?'), a('/nieuw/', 'Wat is er nieuw?')].join(' · ')}</nav>`;
}

/**
 * Below the start page's splash, in the HTML itself (vite.config.ts): a heading and a few lines on
 * what Vloertaal is (the About page's Dutch), and links to the plain pages, so a search engine
 * finds them from the start page without running the app. Below the fold of the splash (it fills
 * the screen); the app removes it when it draws (src/main.tsx).
 */
export function siteLinks(): string {
  const about = (id: string) => esc(aboutSections.find((s) => s.id === id)!.nl.body);
  return `<section id="site-links" class="site-links" lang="nl">
<h1>Vloertaal: gratis Nederlands leren voor je werk</h1>
<p>${about('a.what')}</p>
<p>${about('a.who')} Spreek je al Nederlands? Dan leer je met Werkregels de regels op het werk: loon, contract, ziek zijn en je rechten.</p>
<p>${about('a.mission')}</p>
${linkRows()}
</section>`;
}

/** The page for an address that does not exist (Vercel serves dist/404.html with status 404). */
export function notFoundPage(): string {
  return plainPage(
    { path: '/404.html', lang: 'nl', title: 'Deze pagina bestaat niet | Vloertaal', description: 'Deze pagina bestaat niet (meer). Ga naar Vloertaal: gratis Nederlands leren voor je werk.', ogLocale: 'nl_NL', noindex: true },
    `<h1>Deze pagina bestaat niet</h1>
<p class="lead">Misschien is het adres veranderd. Vloertaal is gratis Nederlands leren voor je werk, met uitleg in je eigen taal.</p>
<a class="cta" href="/">Open Vloertaal →</a>
<footer>${linkRows()}</footer>`,
  );
}
