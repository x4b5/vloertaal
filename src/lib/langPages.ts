import { aboutSections } from '../content/about';
import { APP_DATA, esc, plainPage, SITE } from './plainPage';
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
    url: `${SITE}${page.path}`,
    description,
    inLanguage: page.tag,
    isPartOf: { '@type': 'WebSite', name: 'Vloertaal', url: `${SITE}/` },
    about: APP_DATA,
  };
  return plainPage(
    { path: page.path, lang: page.tag, dir: page.dir, title, description, ogLocale: page.ogLocale, links: hreflangLinks(), data },
    `<h1>${esc(t.tagline)}</h1>
<a class="cta" href="${app}">${esc(t.start)} ${arrow}</a>
${sections}
<a class="cta" href="${app}">${esc(t.start)} ${arrow}</a>
<footer>
${languageNav(code)}
<p><a href="mailto:hoi@vloertaal.nl" dir="ltr">hoi@vloertaal.nl</a></p>
</footer>`,
  );
}
