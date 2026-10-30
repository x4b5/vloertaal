import { aboutSections } from '../content/about';
import { units } from '../content/curriculum';
import { THEME_UNITS, THEMES } from '../content/themes';
import { APP_DATA, esc, plainPage, SITE } from './plainPage';
import { languageMeta } from '../i18n/meta';
import { uiNl } from '../i18n/nl';
import { type LangCode, uiEn } from '../i18n/types';
import { packText } from './pageTexts';

/**
 * The pages vloertaal.nl/pl, /ar, /uk … and /en: what Vloertaal is, in that language, for whoever
 * searches in their own language (docs/seo-plan.md, step 3). Plain HTML made at build time, like
 * /intro and /nieuw: no app code, no tracking. The texts are the app's own (the About page and the
 * tagline of each help language), so a page says nothing the app does not, and a correction there
 * corrects the page too. The button opens the app with that language already asked ("Polski?").
 */

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
  es: { tag: 'es', og: 'es_ES' },
  pt: { tag: 'pt', og: 'pt_PT' },
  fr: { tag: 'fr', og: 'fr_FR' },
  de: { tag: 'de', og: 'de_DE' },
  en: { tag: 'en', og: 'en_GB' },
};

export const LANG_PAGES: readonly LangPage[] = [
  ...languageMeta.map((l) => ({ code: l.code, path: `/${l.code}/`, tag: TAGS[l.code].tag, dir: l.dir, nativeName: l.nativeName, ogLocale: TAGS[l.code].og })),
  { code: 'en', path: '/en/', tag: 'en', dir: 'ltr', nativeName: 'English', ogLocale: 'en_GB' },
];

/** Every language's link to its page, and the Dutch start page as the default (hreflang). */
export function hreflangLinks(): string {
  return [
    `<link rel="alternate" hreflang="nl" href="${SITE}/" />`,
    ...LANG_PAGES.map((p) => `<link rel="alternate" hreflang="${p.tag}" href="${SITE}${p.path}" />`),
    `<link rel="alternate" hreflang="x-default" href="${SITE}/" />`,
  ].join('\n');
}

/** A page's texts: the help language's, or the app's own English. */
function texts(code: PageCode): { tagline: string; start: string; topics: string; title: (id: string) => string; body: (id: string) => string; gloss: (id: string) => string | undefined } {
  if (code === 'en') {
    const find = (id: string) => aboutSections.find((s) => s.id === id)!;
    const words = new Map(units.flatMap((u) => u.lessons.flatMap((l) => l.words)).map((w) => [w.id, w.en]));
    const theme = (id: string) => THEMES.find((t) => t.id === id)?.title;
    return { tagline: uiEn.appTagline, start: uiEn.start, topics: uiEn.allTopics, title: (id) => find(id).title, body: (id) => find(id).body, gloss: (id) => theme(id) ?? words.get(id) };
  }
  const p = packText(code);
  const one = (id: string) => {
    const t = p.gloss(id);
    if (t === undefined) throw new Error(`langPages: ${code} has no text for ${id}`);
    return t;
  };
  return { tagline: p.ui('appTagline'), start: p.ui('start'), topics: p.ui('allTopics'), title: one, body: (id) => one(`${id}.b`), gloss: p.gloss };
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

/** The language list's name for a screen reader, in the page's language ("Kies je taal" on the Dutch pages). */
function navLabel(current?: PageCode): string {
  if (current === undefined) return uiNl.chooseLanguage as string;
  return current === 'en' ? uiEn.chooseLanguage : packText(current).ui('chooseLanguage');
}

/** The list of all language pages (and the Dutch start page), on every page: one tap to your own. */
export function languageNav(current?: PageCode): string {
  const items = [
    `<li><a href="/" lang="nl" hreflang="nl" dir="ltr">Nederlands</a></li>`,
    ...LANG_PAGES.map(
      (p) => `<li><a href="${p.path}" lang="${p.tag}" hreflang="${p.tag}" dir="${p.dir}"${p.code === current ? ' aria-current="page"' : ''}>${esc(p.nativeName)}</a></li>`,
    ),
  ];
  return `<nav aria-label="${esc(navLabel(current))}"><ul>${items.join('')}</ul></nav>`;
}

/**
 * The themes of the course in this language, each with a few words of its first lessons: Dutch
 * beside the translation, as the app teaches them.
 */
function topicsSection(t: ReturnType<typeof texts>, dir: 'ltr' | 'rtl'): string {
  const rows = THEMES.map((th) => {
    const words = THEME_UNITS[th.id].taal
      .map((id) => units.find((u) => u.id === id))
      .filter((u) => u !== undefined)
      .flatMap((u) => u.lessons[0].words.filter((w) => w.picture !== false).slice(0, 2))
      .filter((w) => t.gloss(w.id))
      .slice(0, 4);
    const name = t.gloss(th.id);
    if (!name || words.length === 0) return '';
    return `<h3>${esc(name)}</h3><ul class="lines">${words
      .map((w) => `<li><span lang="nl" dir="ltr">${esc(w.nl)}</span> — ${esc(t.gloss(w.id)!)}</li>`)
      .join('')}</ul>`;
  }).join('');
  return `<section aria-labelledby="topics" dir="${dir}"><h2 id="topics">${esc(t.topics)}</h2>${rows}</section>`;
}

/** The page for one language. */
export function langPage(code: PageCode): string {
  const page = LANG_PAGES.find((p) => p.code === code)!;
  const t = texts(code);
  // Persian and Dari share a script and much of the words: the name tells the two pages apart.
  const title = `${t.tagline}${code === 'fa' || code === 'prs' ? ` (${page.nativeName})` : ''} – Vloertaal`;
  // What it is, then (when it fits) that it is free and in your own language: the mission's first sentence.
  const description = describe(`${describe(t.body('a.what'), 160)} ${t.body('a.mission')}`);
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
    name: t.tagline,
    url: `${SITE}${page.path}`,
    description,
    inLanguage: page.tag,
    isPartOf: { '@type': 'WebSite', name: 'Vloertaal', url: `${SITE}/` },
    about: APP_DATA,
  };
  return plainPage(
    { path: page.path, lang: page.tag, dir: page.dir, title, description, ogLocale: page.ogLocale, ogAlt: `Vloertaal – ${t.tagline}`, links: hreflangLinks(), data },
    `<h1>${esc(t.tagline)}</h1>
<a class="cta" href="${app}">${esc(t.start)} ${arrow}</a>
${sections}
${topicsSection(t, page.dir)}
<a class="cta" href="${app}">${esc(t.start)} ${arrow}</a>
<footer>
${languageNav(code)}
<p><a href="mailto:hoi@vloertaal.nl" dir="ltr">hoi@vloertaal.nl</a></p>
</footer>`,
  );
}
