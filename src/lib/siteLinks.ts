import { COACH_PATH } from './coachPage';
import { LANG_PAGES } from './langPages';
import { esc } from './plainPage';
import { RULES_PATH, SECTOR_PAGES } from './sectorPages';

/**
 * Below the start page's splash, in the HTML itself (vite.config.ts): one line on what Vloertaal
 * is, and links to the plain pages (each language, each sector, Werkregels, for coaches), so a
 * search engine finds them from the start page without running the app. Below the fold of the
 * splash (it fills the screen); the app removes it when it draws (src/main.tsx).
 */
export function siteLinks(): string {
  const a = (href: string, text: string, lang = 'nl', dir = 'ltr') => `<a href="${href}" lang="${lang}" dir="${dir}">${esc(text)}</a>`;
  return `<footer id="site-links" class="site-links" lang="nl">
<p>Vloertaal: gratis Nederlands leren voor je werk, met uitleg in je eigen taal. Geen account, geen reclame.</p>
<nav aria-label="Talen">${LANG_PAGES.map((p) => a(p.path, p.nativeName, p.tag, p.dir)).join(' · ')}</nav>
<nav aria-label="Sectoren">${[...SECTOR_PAGES.map((p) => a(p.path, p.name)), a(RULES_PATH, 'Werkregels'), a(COACH_PATH, 'Voor begeleiders'), a('/intro/', 'Waarom Vloertaal?'), a('/nieuw/', 'Wat is er nieuw?')].join(' · ')}</nav>
</footer>`;
}
