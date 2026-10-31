import { LANG_PAGES } from './langPages';
import { BELGIUM_PATH, COACH_PATH, PRIVACY_PATH, RULES_PATH, TOPICS_PATH } from './paths';
import { esc } from './plainPage';
import { SECTOR_PAGES } from './sectorPages';

const a = (href: string, text: string, lang = 'nl', dir = 'ltr') => `<a href="${href}" lang="${lang}" dir="${dir}">${esc(text)}</a>`;

/** Two plain rows of links: every language page, then the Dutch pages. On the start page, /intro, /nieuw, the topics and the 404 page. */
export function linkRows(): string {
  return `<nav aria-label="Talen">${LANG_PAGES.map((p) => a(p.path, p.nativeName, p.tag, p.dir)).join(' · ')}</nav>
<nav aria-label="Sectoren">${[...SECTOR_PAGES.map((p) => a(p.path, p.name)), a(RULES_PATH, 'Werkregels'), a(BELGIUM_PATH, 'Werken in België'), a(TOPICS_PATH, 'Alle onderwerpen'), a(COACH_PATH, 'Voor begeleiders en werkgevers'), a('/intro/', 'Waarom Vloertaal?'), a('/nieuw/', 'Wat is er nieuw?'), a(PRIVACY_PATH, 'Privacy')].join(' · ')}</nav>`;
}
