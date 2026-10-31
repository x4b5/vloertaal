import { aboutSection } from '../content/about';
import { faqHtml } from './geoPages';
import { linkRows } from './linkRows';
import { esc, plainPage } from './plainPage';

/**
 * Below the start page's splash, in the HTML itself (vite.config.ts): a heading and a few lines on
 * what Vloertaal is (the About page's Dutch), and links to the plain pages, so a search engine
 * finds them from the start page without running the app. Then the questions and answers
 * (src/lib/geoPages.ts FAQ), also as data in the head. Below the fold of the splash (it fills
 * the screen); the app removes it when it draws (src/main.tsx).
 */
export function siteLinks(): string {
  const about = (id: string) => esc(aboutSection(id).nl.body);
  return `<section id="site-links" class="site-links" lang="nl" aria-labelledby="site-links-title">
<h1 id="site-links-title">Vloertaal: gratis Nederlands leren voor je werk</h1>
<p>${about('a.what')}</p>
<p>${about('a.who')} Spreek je al Nederlands? Dan leer je met Werkregels de regels op het werk: loon, contract, ziek zijn en je rechten.</p>
<p>${about('a.mission')}</p>
${linkRows()}
${faqHtml()}
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
