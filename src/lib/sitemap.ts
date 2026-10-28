import { LANG_PAGES } from './langPages';

/**
 * vloertaal.nl/sitemap.xml, made at build time: every page a search engine should read. The app
 * itself is one address (/); the plain pages beside it are made by vite.config.ts.
 */
export const PAGES: readonly string[] = ['/', '/intro/', '/nieuw/', ...LANG_PAGES.map((p) => p.path)];

export function sitemap(pages: readonly string[] = PAGES): string {
  const urls = pages.map((p) => `  <url><loc>https://vloertaal.nl${p}</loc></url>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}
