import { aboutSections } from '../content/about';
import type { CultureTranslation } from '../i18n/culture/types';
import { languageMeta } from '../i18n/meta';
import { forGender, isPlural, type HelpLanguageSource, type LangCode, type UiText, uiEn } from '../i18n/types';
import ar from '../i18n/ar';
import bg from '../i18n/bg';
import fa from '../i18n/fa';
import pl from '../i18n/pl';
import prs from '../i18n/prs';
import ro from '../i18n/ro';
import ti from '../i18n/ti';
import tr from '../i18n/tr';
import uk from '../i18n/uk';
import arAbout from '../i18n/about/ar';
import bgAbout from '../i18n/about/bg';
import faAbout from '../i18n/about/fa';
import plAbout from '../i18n/about/pl';
import prsAbout from '../i18n/about/prs';
import roAbout from '../i18n/about/ro';
import tiAbout from '../i18n/about/ti';
import trAbout from '../i18n/about/tr';
import ukAbout from '../i18n/about/uk';

/**
 * The pages vloertaal.nl/pl, /ar, /uk … and /en: what Vloertaal is, in that language, for whoever
 * searches in their own language (docs/seo-plan.md, step 3). Plain HTML made at build time, like
 * /intro and /nieuw: no app code, no tracking. The texts are the app's own (the About page and the
 * tagline of each help language), so a page says nothing the app does not, and a correction there
 * corrects the page too. The button opens the app with that language already asked ("Polski?").
 */

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const PACKS: Record<LangCode, { ui: HelpLanguageSource['ui']; about: CultureTranslation }> = {
  ar: { ui: ar.ui, about: arAbout },
  ti: { ui: ti.ui, about: tiAbout },
  fa: { ui: fa.ui, about: faAbout },
  prs: { ui: prs.ui, about: prsAbout },
  uk: { ui: uk.ui, about: ukAbout },
  tr: { ui: tr.ui, about: trAbout },
  pl: { ui: pl.ui, about: plAbout },
  ro: { ui: ro.ui, about: roAbout },
  bg: { ui: bg.ui, about: bgAbout },
};

/** The sections a newcomer needs to decide: what, how, for whom, free, privacy, and that it is a beta. */
const SECTIONS = ['a.what', 'a.how', 'a.who', 'a.mission', 'a.free', 'a.beta'] as const;

export type PageCode = LangCode | 'en';

export interface LangPage {
  code: PageCode;
  /** The path on vloertaal.nl, also the hreflang value's page. */
  path: string;
  /** For `<html lang>` and hreflang: ISO 639-1 where it exists (Dari has none: Persian of Afghanistan). */
  tag: string;
  dir: 'ltr' | 'rtl';
  nativeName: string;
  ogLocale: string;
}

const TAGS: Record<PageCode, { tag: string; og: string }> = {
  ar: { tag: 'ar', og: 'ar_AR' },
  ti: { tag: 'ti', og: 'ti_ER' },
  fa: { tag: 'fa', og: 'fa_IR' },
  prs: { tag: 'fa-AF', og: 'fa_AF' },
  uk: { tag: 'uk', og: 'uk_UA' },
  tr: { tag: 'tr', og: 'tr_TR' },
  pl: { tag: 'pl', og: 'pl_PL' },
  ro: { tag: 'ro', og: 'ro_RO' },
  bg: { tag: 'bg', og: 'bg_BG' },
  en: { tag: 'en', og: 'en_GB' },
};

export const LANG_PAGES: readonly LangPage[] = [
  ...languageMeta.map((l) => ({ code: l.code, path: `/${l.code}/`, tag: TAGS[l.code].tag, dir: l.dir, nativeName: l.nativeName, ogLocale: TAGS[l.code].og })),
  { code: 'en', path: '/en/', tag: 'en', dir: 'ltr', nativeName: 'English', ogLocale: 'en_GB' },
];

const SITE = 'https://vloertaal.nl';

/** Every language's link to its page, and the Dutch start page as the default (hreflang). */
export function hreflangLinks(): string {
  return [
    `<link rel="alternate" hreflang="nl" href="${SITE}/" />`,
    ...LANG_PAGES.map((p) => `<link rel="alternate" hreflang="${p.tag}" href="${SITE}${p.path}" />`),
    `<link rel="alternate" hreflang="x-default" href="${SITE}/" />`,
  ].join('\n');
}

/** A page's texts: the help language's, or the app's own English. */
function texts(code: PageCode): { tagline: string; start: string; title: (id: string) => string; body: (id: string) => string } {
  if (code === 'en') {
    const find = (id: string) => aboutSections.find((s) => s.id === id)!;
    return { tagline: uiEn.appTagline, start: uiEn.start, title: (id) => find(id).title, body: (id) => find(id).body };
  }
  const p = PACKS[code];
  // The default form (no gender chosen), as the app shows it before the learner picks one.
  const one = (t: UiText | undefined, id: string) => {
    if (t === undefined || isPlural(t)) throw new Error(`langPages: ${code} has no plain text for ${id}`);
    return forGender(t);
  };
  return {
    tagline: one(p.ui.appTagline, 'appTagline'),
    start: one(p.ui.start, 'start'),
    title: (id) => one(p.about.gloss[id], id),
    body: (id) => one(p.about.gloss[`${id}.b`], `${id}.b`),
  };
}

/** The search result's line: the first sentences of "What is Vloertaal?" that fit in 160 characters. */
export function describe(body: string, max = 160): string {
  const sentences = body.match(/[^.!?。؟።]+[.!?。؟።]+\s*/g) ?? [body];
  let out = '';
  for (const s of sentences) {
    if ((out + s).trim().length > max) break;
    out += s;
  }
  out = out.trim();
  return out || `${body.slice(0, max - 1).trimEnd()}…`;
}

const STYLE = `
  :root { color-scheme: light dark; --bg: #e7e3dc; --card: #fffdf8; --ink: #1e2226; --ink2: #4a4f55; --yellow: #ffc414; --line: #d6cfc3; }
  @media (prefers-color-scheme: dark) { :root { --bg: #16191c; --card: #1f2327; --ink: #eceae6; --ink2: #b6b2ab; --line: #343a40; } }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--bg); color: var(--ink); font: 19px/1.55 system-ui, -apple-system, 'Segoe UI', Roboto, 'Noto Sans', 'Noto Sans Ethiopic', 'Noto Naskh Arabic', sans-serif; }
  main { max-width: 640px; margin: 0 auto; padding: 24px 16px 48px; }
  header { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
  header img { width: 48px; height: 48px; border-radius: 22%; }
  header a { color: inherit; text-decoration: none; font-weight: 700; font-size: 1.6rem; }
  h1 { font-size: 1.7rem; line-height: 1.25; margin: 0 0 12px; }
  h2 { font-size: 1.2rem; margin: 0 0 8px; }
  section { background: var(--card); border: 2px solid var(--line); border-radius: 12px; padding: 16px 20px; margin: 0 0 16px; }
  section p { margin: 0; }
  .cta { display: block; margin: 20px 0 24px; padding: 16px; border-radius: 10px; background: var(--yellow); color: #1e2226; border: 2px solid #1e2226; font-weight: 700; font-size: 1.2rem; text-align: center; text-decoration: none; }
  nav ul { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 8px; }
  nav a { display: inline-block; padding: 8px 12px; border: 2px solid var(--line); border-radius: 999px; color: inherit; text-decoration: none; background: var(--card); }
  nav a[aria-current] { border-color: var(--ink); font-weight: 700; }
  footer { color: var(--ink2); font-size: 0.95rem; margin-top: 24px; }
  footer a { color: inherit; }
  .stripe { height: 12px; background: repeating-linear-gradient(-45deg, var(--yellow) 0 16px, #1e2226 16px 32px); }
`;

/** The list of all language pages (and the Dutch start page), on every page: one tap to your own. */
export function languageNav(current?: PageCode): string {
  const items = [
    `<li><a href="/" lang="nl" hreflang="nl">Nederlands</a></li>`,
    ...LANG_PAGES.map(
      (p) => `<li><a href="${p.path}" lang="${p.tag}" hreflang="${p.tag}" dir="${p.dir}"${p.code === current ? ' aria-current="page"' : ''}>${esc(p.nativeName)}</a></li>`,
    ),
  ];
  return `<nav aria-label="Vloertaal"><ul>${items.join('')}</ul></nav>`;
}

/** The page for one language. */
export function langPage(code: PageCode): string {
  const page = LANG_PAGES.find((p) => p.code === code)!;
  const t = texts(code);
  const url = `${SITE}${page.path}`;
  const title = `Vloertaal – ${t.tagline}`;
  const description = describe(t.body('a.what'));
  const sections = SECTIONS.map(
    (id, i) => `<section aria-labelledby="s${i}"><h2 id="s${i}">${esc(t.title(id))}</h2><p>${esc(t.body(id))}</p></section>`,
  ).join('\n');
  // The help languages' own button opens the guess page with this language ("Polski?"); English
  // has no guess, so the app's own list of languages shows.
  const app = code === 'en' ? '/' : `/?taal=${code}`;
  const arrow = page.dir === 'rtl' ? '←' : '→';
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    url,
    description,
    inLanguage: page.tag,
    isPartOf: { '@type': 'WebSite', name: 'Vloertaal', url: `${SITE}/` },
    about: {
      '@type': 'WebApplication',
      name: 'Vloertaal',
      url: `${SITE}/`,
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Web',
      isAccessibleForFree: true,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    },
  };
  return `<!doctype html>
<html lang="${page.tag}" dir="${page.dir}">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}" />
<link rel="canonical" href="${url}" />
${hreflangLinks()}
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Vloertaal" />
<meta property="og:locale" content="${page.ogLocale}" />
<meta property="og:title" content="${esc(title)}" />
<meta property="og:description" content="${esc(description)}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="${SITE}/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="theme-color" content="#e7e3dc" />
<link rel="icon" href="/icon.svg?v=4" type="image/svg+xml" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png?v=4" />
<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>
<style>${STYLE}</style>
</head>
<body>
<div class="stripe" aria-hidden="true"></div>
<main>
<header><img src="/icon-192.png?v=4" alt="" width="48" height="48" /><a href="/" lang="nl" dir="ltr">vloertaal.</a></header>
<h1>${esc(t.tagline)}</h1>
<a class="cta" href="${app}">${esc(t.start)} ${arrow}</a>
${sections}
<a class="cta" href="${app}">${esc(t.start)} ${arrow}</a>
<footer>
${languageNav(code)}
<p><a href="mailto:hoi@vloertaal.nl" dir="ltr">hoi@vloertaal.nl</a></p>
</footer>
</main>
</body>
</html>
`;
}
