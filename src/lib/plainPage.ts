/**
 * The shell of the plain pages made at build time for search engines (the language pages, the
 * sector pages, /werkregels): one look, one head. No app code, no tracking, no requests beyond the
 * icon. The /intro and /nieuw pages have their own (older) copy of the same look.
 */

export const SITE = 'https://vloertaal.nl';

export const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const STYLE = `
  :root { color-scheme: light dark; --bg: #e7e3dc; --card: #fffdf8; --ink: #1e2226; --ink2: #4a4f55; --yellow: #ffc414; --line: #d6cfc3; }
  @media (prefers-color-scheme: dark) { :root { --bg: #16191c; --card: #1f2327; --ink: #eceae6; --ink2: #b6b2ab; --line: #343a40; } }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--bg); color: var(--ink); font: 19px/1.55 system-ui, -apple-system, 'Segoe UI', Roboto, 'Noto Sans', 'Noto Sans Ethiopic', 'Noto Naskh Arabic', sans-serif; overflow-wrap: anywhere; }
  main { max-width: 640px; margin: 0 auto; padding: 24px 16px 48px; }
  header { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
  header img { width: 48px; height: 48px; border-radius: 22%; }
  header a { color: inherit; text-decoration: none; font-weight: 700; font-size: 1.6rem; }
  h1 { font-size: 1.7rem; line-height: 1.25; margin: 0 0 12px; }
  h2 { font-size: 1.2rem; margin: 0 0 8px; }
  h3 { font-size: 1.05rem; margin: 12px 0 4px; }
  section { background: var(--card); border: 2px solid var(--line); border-radius: 12px; padding: 16px 20px; margin: 0 0 16px; }
  section p { margin: 0 0 8px; }
  section p:last-child { margin-bottom: 0; }
  .lead { margin: 0 0 8px; }
  ul.words { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 6px; }
  ul.words li { padding: 4px 10px; border: 1px solid var(--line); border-radius: 8px; }
  ul.lines { margin: 0; padding-inline-start: 1.2em; }
  ul.lines li { margin: 4px 0; }
  .remember { font-weight: 600; }
  .cta { display: block; margin: 20px 0 24px; padding: 16px; border-radius: 10px; background: var(--yellow); color: #1e2226; border: 2px solid #1e2226; font-weight: 700; font-size: 1.2rem; text-align: center; text-decoration: none; }
  nav { margin: 0 0 16px; }
  nav ul { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 8px; }
  nav a { display: inline-block; padding: 8px 12px; border: 2px solid var(--line); border-radius: 999px; color: inherit; text-decoration: none; background: var(--card); }
  nav a[aria-current] { border-color: var(--ink); font-weight: 700; }
  footer { color: var(--ink2); font-size: 0.95rem; margin-top: 24px; }
  footer a { color: inherit; }
  .stripe { height: 12px; background: repeating-linear-gradient(-45deg, var(--yellow) 0 16px, #1e2226 16px 32px); }
`;

export interface PageHead {
  /** The path on vloertaal.nl, e.g. "/bouw/". */
  path: string;
  /** The `<html lang>` value. */
  lang: string;
  dir?: 'ltr' | 'rtl';
  title: string;
  description: string;
  ogLocale: string;
  /** The share image's text in the page's language (default: the Dutch one). */
  ogAlt?: string;
  /** More `<link>`s (hreflang). */
  links?: string;
  /** Structured data (JSON-LD), one object or a list. */
  data?: object | object[];
  /** Not for search results (the 404 page): no canonical, no structured data, robots noindex. */
  noindex?: true;
}

/** The whole page: head, the hazard stripe, the logo, then `body` inside <main>. */
export function plainPage(head: PageHead, body: string): string {
  const url = `${SITE}${head.path}`;
  const data = head.data ? `<script type="application/ld+json">${JSON.stringify(head.data).replace(/</g, '\\u003c')}</script>\n` : '';
  return `<!doctype html>
<html lang="${head.lang}" dir="${head.dir ?? 'ltr'}">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${esc(head.title)}</title>
<meta name="description" content="${esc(head.description)}" />
${head.noindex ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${url}" />`}
${head.links ? `${head.links}\n` : ''}<meta property="og:type" content="website" />
<meta property="og:site_name" content="Vloertaal" />
<meta property="og:locale" content="${head.ogLocale}" />
<meta property="og:title" content="${esc(head.title)}" />
<meta property="og:description" content="${esc(head.description)}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="${SITE}/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="${esc(head.ogAlt ?? 'Vloertaal: Bram met gele helm, Nederlands voor op de werkvloer')}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="theme-color" content="#e7e3dc" />
<link rel="icon" href="/favicon.ico?v=4" sizes="48x48" />
<link rel="icon" href="/icon.svg?v=4" type="image/svg+xml" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png?v=4" />
${data}<style>${STYLE}</style>
</head>
<body>
<div class="stripe" aria-hidden="true"></div>
<main>
<header><img src="/icon.svg?v=4" alt="" width="48" height="48" /><a href="/" lang="nl" dir="ltr">vloertaal.</a></header>
${body}
</main>
</body>
</html>
`;
}

/** What every page is about: the free web app (structured data). */
export const APP_DATA = {
  '@type': 'WebApplication',
  '@id': `${SITE}/#app`,
  name: 'Vloertaal',
  url: `${SITE}/`,
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

/** "Vloertaal › Bouw" for search results (structured data). */
export function breadcrumbs(...trail: { name: string; path: string }[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Vloertaal', path: '/' }, ...trail].map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: `${SITE}${t.path}`,
    })),
  };
}
