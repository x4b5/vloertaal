import { cultureTips, type CultureTip } from '../content/culture';
import { units } from '../content/curriculum';
import { uiEn } from '../i18n/types';
import { describe, firstSentence, LANG_PAGES, languageNav, type LangPage, type PageCode } from './langPages';
import { packText } from './pageTexts';
import { APP_DATA, breadcrumbs, esc, plainPage, SITE } from './plainPage';
import { rightsTipCountry } from './tipText';

/**
 * "Zo werkt het hier" as web pages, in every help language (docs/seo-plan.md, step 2 of the
 * SEO/GEO round, 10 November 2026): /pl/tip/first-names-and-a-handshake/ … and a list per language
 * at /pl/tip/. For whoever searches in their own language for how work goes here ("jak się
 * zachować pierwszy dzień pracy Holandia"). The texts are the app's own translations, so a page
 * says nothing the app does not.
 *
 * Not yet the tips about rights: a tip that ends with the legal closing line (rightsTipCountry,
 * src/lib/tipText.ts) waits for the expert check of docs/werkregels-bronnen.md, and so do the few
 * below that state a rule of law without that line. Once the check is done, drop the filter.
 */
export const WAITS_FOR_LAW_CHECK: readonly string[] = [
  'c.police', // your rights with the police, a lawyer
  'c.council', // who may vote
  'c.aihelp', // ends with the Juridisch Loket
  'c.hours', // whether a break is paid
  'c.bike', // what is forbidden on a bike
  'c.checkout', // the legal age for alcohol and tobacco
  'c.placement', // the placement contract
];

/** A tip that gets a page now: no rights, no rule of law (see above). */
export const pageTip = (t: CultureTip): boolean => rightsTipCountry(t) === null && !WAITS_FOR_LAW_CHECK.includes(t.id);

/** "First names and a handshake" → "first-names-and-a-handshake"; the same in every language, so the versions of a tip are easy to pair. */
export const tipSlug = (t: CultureTip): string =>
  t.title.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[’'"]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const PAGE_TIPS: readonly CultureTip[] = cultureTips.filter(pageTip);

export const tipsIndexPath = (code: PageCode): string => `/${code}/tip/`;
export const tipPath = (code: PageCode, t: CultureTip): string => `${tipsIndexPath(code)}${tipSlug(t)}/`;

/** Every tip page (language × tip), for the build and the sitemap. */
export const TIP_PAGES: readonly { code: PageCode; tip: CultureTip; path: string }[] = LANG_PAGES.flatMap((p) =>
  PAGE_TIPS.map((tip) => ({ code: p.code, tip, path: tipPath(p.code, tip) })),
);

interface TipTexts {
  ui: (key: keyof typeof uiEn) => string;
  /** A tip text by id; English is the tip itself. Throws when a help language misses it. */
  text: (id: string, en: string) => string;
}

function texts(code: PageCode): TipTexts {
  if (code === 'en') return { ui: (key) => uiEn[key] as string, text: (_id, en) => en };
  const p = packText(code);
  return {
    ui: (key) => p.ui(key),
    text: (id) => {
      const t = p.gloss(id);
      if (t === undefined) throw new Error(`tipPages: ${code} has no text for ${id}`);
      return t;
    },
  };
}

const page = (code: PageCode): LangPage => LANG_PAGES.find((p) => p.code === code)!;

/** The tip's lesson's unit, for the button ("?unit=" opens the path there, src/lib/unitLink.ts). */
function appLink(code: PageCode, t: CultureTip): string {
  const unit = units.find((u) => u.lessons.some((l) => l.id === t.lessonId));
  const params = new URLSearchParams();
  if (code !== 'en') params.set('taal', code);
  if (unit) params.set('unit', unit.id.slice(2));
  const q = params.toString();
  return `/${q ? `?${q}` : ''}`;
}

/** The same tip in the other languages (hreflang). No Dutch version: x-default is the English one. */
function tipAlternates(t: CultureTip | undefined): string {
  const href = (code: PageCode) => `${SITE}${t ? tipPath(code, t) : tipsIndexPath(code)}`;
  return [
    ...LANG_PAGES.map((p) => `<link rel="alternate" hreflang="${p.tag}" href="${href(p.code)}" />`),
    `<link rel="alternate" hreflang="x-default" href="${href('en')}" />`,
  ].join('\n');
}

const nl = (s: string) => `<span lang="nl" dir="ltr">${esc(s)}</span>`;

/** The small print under every tip page: the translation is not checked yet, and what the tips are (not legal advice). */
const note = (x: TipTexts, code: PageCode) => `<p class="signed">${esc(x.ui('tipsNote'))}${code === 'en' ? '' : ` ${esc(x.ui('beta'))}.`}</p>`;

export function tipPage(code: PageCode, t: CultureTip): string {
  const p = page(code);
  const x = texts(code);
  const title = x.text(t.id, t.title);
  const body = x.text(`${t.id}.b`, t.body);
  const situation = x.text(t.situation.id, t.situation.en);
  const options = t.options.map((o) => ({ ...o, text: x.text(o.id, o.en) }));
  const best = options.find((o) => o.best)!;
  const why = x.text(t.why.id, t.why.en);
  const ask = x.ui(t.situation.ask === 'whatsay' ? 'whatDoYouSay' : t.situation.ask === 'which' ? 'whatIsRight' : 'whatDoYouDo');
  const arrow = p.dir === 'rtl' ? '←' : '→';
  const path = tipPath(code, t);
  const description = describe(body, 158);
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      url: `${SITE}${path}`,
      description,
      inLanguage: p.tag,
      isPartOf: { '@type': 'WebSite', '@id': `${SITE}/#website`, name: 'Vloertaal', url: `${SITE}/` },
      about: APP_DATA,
    },
    breadcrumbs({ name: p.nativeName, path: p.path }, { name: x.ui('cultureTips'), path: tipsIndexPath(code) }, { name: title, path }),
  ];
  return plainPage(
    { path, lang: p.tag, dir: p.dir, title: `${title} – ${x.ui('cultureTips')} | Vloertaal`, description, ogLocale: p.ogLocale, ogAlt: `Vloertaal – ${title}`, links: tipAlternates(t), data },
    `<p><a href="${tipsIndexPath(code)}">${esc(x.ui('cultureTips'))}</a></p>
<h1>${t.emoji} ${esc(title)}</h1>
<section><p>${esc(body)}</p></section>
<section aria-labelledby="say"><h2 id="say">${esc(x.ui('sayThis'))}</h2><p><strong>${nl(t.phrase.nl)}</strong></p>${code === 'en' ? `<p>${esc(t.phrase.en)}</p>` : `<p>${esc(x.text(t.phrase.id, t.phrase.en))}</p>`}</section>
<section aria-labelledby="ask"><h2 id="ask">${esc(ask)}</h2><p>${esc(situation)}</p>
<ul class="lines">${options.map((o) => `<li>${esc(o.text)}</li>`).join('')}</ul>
<h3>${esc(x.ui('bestAnswer'))}</h3><p><strong>${esc(best.text)}</strong></p><p>${esc(why)}</p></section>
<a class="cta" href="${esc(appLink(code, t))}">${esc(x.ui('start'))} ${arrow}</a>
${note(x, code)}
<footer>
${languageNav(code)}
<p><a href="mailto:hoi@vloertaal.nl" dir="ltr">hoi@vloertaal.nl</a></p>
</footer>`,
  );
}

/** /pl/tip/: all tips with a page, in course order. */
export function tipsIndexPage(code: PageCode): string {
  const p = page(code);
  const x = texts(code);
  const path = tipsIndexPath(code);
  const heading = x.ui('cultureTips');
  const description = describe(`${firstSentence(x.ui('cultureTipsHint'))} ${x.ui('tipsNote')}`, 158);
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: heading,
      url: `${SITE}${path}`,
      description,
      inLanguage: p.tag,
      isPartOf: { '@type': 'WebSite', '@id': `${SITE}/#website`, name: 'Vloertaal', url: `${SITE}/` },
      about: APP_DATA,
    },
    breadcrumbs({ name: p.nativeName, path: p.path }, { name: heading, path }),
  ];
  const arrow = p.dir === 'rtl' ? '←' : '→';
  return plainPage(
    { path, lang: p.tag, dir: p.dir, title: `${heading} | Vloertaal`, description, ogLocale: p.ogLocale, ogAlt: `Vloertaal – ${heading}`, links: tipAlternates(undefined), data },
    `<h1>${esc(heading)}</h1>
<p class="lead">${esc(description)}</p>
<section><ul class="lines">${PAGE_TIPS.map((t) => `<li><a href="${tipPath(code, t)}">${t.emoji} ${esc(x.text(t.id, t.title))}</a></li>`).join('')}</ul></section>
<a class="cta" href="${code === 'en' ? '/' : `/?taal=${code}`}">${esc(x.ui('start'))} ${arrow}</a>
${note(x, code)}
<footer>
${languageNav(code)}
<p><a href="mailto:hoi@vloertaal.nl" dir="ltr">hoi@vloertaal.nl</a></p>
</footer>`,
  );
}
