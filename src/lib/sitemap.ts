import { LAST_UPDATE } from '../content/updates';
import { LANG_PAGES } from './langPages';
import { COACH_PATH } from './coachPage';
import { RULES_PATH, SECTOR_PAGES } from './sectorPages';

/**
 * vloertaal.nl/sitemap.xml, made at build time: every page a search engine should read. The app
 * itself is one address (/); the plain pages beside it are made by vite.config.ts.
 */
export const PAGES: readonly string[] = ['/', '/intro/', '/nieuw/', ...LANG_PAGES.map((p) => p.path), ...SECTOR_PAGES.map((p) => p.path), RULES_PATH, COACH_PATH];

/**
 * When a page last changed, where that is known for sure (/nieuw: its newest entry). Left out
 * elsewhere: a date that changes with every build teaches search engines to ignore it.
 */
const LASTMOD: Record<string, string> = { '/nieuw/': LAST_UPDATE };

export function sitemap(pages: readonly string[] = PAGES): string {
  const urls = pages
    .map((p) => `  <url><loc>https://vloertaal.nl${p}</loc>${LASTMOD[p] ? `<lastmod>${LASTMOD[p]}</lastmod>` : ''}</url>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}
