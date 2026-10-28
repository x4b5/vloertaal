import { units } from '../content/curriculum';
import { THEME_UNITS, THEMES, type Theme } from '../content/themes';
import type { Unit } from '../content/types';
import { APP_DATA, breadcrumbs, esc, plainPage, SITE } from './plainPage';
import { linkRows } from './linkRows';
import { TOPICS_PATH } from './paths';
import { unitItems, unitSections } from './unitContent';

/**
 * A page per topic of the Dutch course (vloertaal.nl/onderwerpen/loon …) and the list of all of
 * them (/onderwerpen): its words with translations, its sentences and chats, made at build time
 * from src/content. For whoever searches for the Dutch words of one subject ("loonstrook
 * woorden"); the button opens that topic in the app (?unit=…, src/lib/unitLink.ts). Not a page
 * per lesson (docs/seo-plan.md: too many for too little).
 */

/** "Rekenen: tijd, geld, maten" → "rekenen-tijd-geld-maten". */
export function slugOf(titleNl: string): string {
  return titleNl
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export interface TopicPage {
  unit: Unit;
  theme: Theme;
  path: string;
}

/** Every topic of the Dutch course in a theme, in the themes' order (the region's units are left out). */
export const TOPIC_PAGES: readonly TopicPage[] = THEMES.flatMap((theme) =>
  THEME_UNITS[theme.id].taal
    .map((id) => units.find((u) => u.id === id))
    .filter((u) => u !== undefined)
    .map((unit) => ({ unit, theme, path: `${TOPICS_PATH}${slugOf(unit.titleNl)}/` })),
);

/** The app's link to a topic (src/lib/unitLink.ts): "?unit=pay" for u.pay. */
export const appLink = (unitId: string) => `/?unit=${encodeURIComponent(unitId.slice(2))}`;

function footer(): string {
  return `<footer>
<p><a href="${TOPICS_PATH}">Alle onderwerpen</a></p>
${linkRows()}
<p>Vloertaal is gratis, zonder account en zonder reclame, en nog in de testfase. Vraag of fout? Mail naar <a href="mailto:hoi@vloertaal.nl">hoi@vloertaal.nl</a>.</p>
</footer>`;
}

export function topicPage(page: TopicPage): string {
  const { unit, theme } = page;
  const { words, sentences } = unitItems([unit]);
  const long = `${unit.titleNl} – Nederlands voor je werk | Vloertaal`;
  const title = long.length <= 60 ? long : `${unit.titleNl} | Vloertaal`;
  const description = `${unit.titleNl}: ${words.length} Nederlandse woorden en ${sentences.length} zinnen voor je werk, met uitleg in je eigen taal. Gratis oefenen, zonder account.`;
  const siblings = TOPIC_PAGES.filter((t) => t.theme.id === theme.id && t.unit.id !== unit.id);
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      name: unit.titleNl,
      url: `${SITE}${page.path}`,
      description,
      inLanguage: 'nl',
      learningResourceType: 'lesson',
      teaches: `Nederlands op het werk: ${unit.titleNl}`,
      isAccessibleForFree: true,
      isPartOf: APP_DATA,
    },
    breadcrumbs({ name: 'Onderwerpen', path: TOPICS_PATH }, { name: unit.titleNl, path: page.path }),
  ];
  return plainPage(
    { path: page.path, lang: 'nl', title, description, ogLocale: 'nl_NL', data },
    `<h1>${esc(unit.titleNl)}</h1>
<p class="lead">Een onderwerp van Vloertaal, de gratis app om Nederlands te leren voor je werk. Thema: <a href="${TOPICS_PATH}#${theme.id.slice(6)}">${esc(theme.titleNl)}</a>. ${unit.lessons.length} korte lessen: je luistert, je tikt, je maakt zinnen en je oefent gesprekjes, met uitleg in je eigen taal.</p>
<a class="cta" href="${appLink(unit.id)}">Oefen in Vloertaal →</a>
${unitSections([unit])}
${siblings.length ? `<section aria-labelledby="more"><h2 id="more">Meer over ${esc(theme.titleNl.toLowerCase())}</h2>
<ul class="lines">${siblings.map((t) => `<li><a href="${t.path}">${esc(t.unit.titleNl)}</a></li>`).join('')}</ul></section>` : ''}
<a class="cta" href="${appLink(unit.id)}">Oefen in Vloertaal →</a>
${footer()}`,
  );
}

/** /onderwerpen: every topic, by theme. */
export function topicsIndexPage(): string {
  const title = 'Alle onderwerpen: Nederlands voor je werk | Vloertaal';
  const description = `${TOPIC_PAGES.length} onderwerpen om gratis Nederlands te leren voor je werk: van je eerste werkdag en veiligheid tot je loonstrook, je rechten en je sector.`;
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: title,
      url: `${SITE}${TOPICS_PATH}`,
      description,
      inLanguage: 'nl',
      about: APP_DATA,
    },
    breadcrumbs({ name: 'Onderwerpen', path: TOPICS_PATH }),
  ];
  const groups = THEMES.map((theme) => ({ theme, list: TOPIC_PAGES.filter((t) => t.theme.id === theme.id) })).filter((g) => g.list.length);
  return plainPage(
    { path: TOPICS_PATH, lang: 'nl', title, description, ogLocale: 'nl_NL', data },
    `<h1>Alle onderwerpen</h1>
<p class="lead">Vloertaal heeft ${TOPIC_PAGES.length} onderwerpen in ${groups.length} thema’s. Elk onderwerp heeft korte lessen met woorden, zinnen en gesprekjes, met uitleg in je eigen taal. Gratis, zonder account.</p>
<a class="cta" href="/">Open Vloertaal →</a>
${groups
  .map(({ theme, list }) => `<section aria-labelledby="${theme.id.slice(6)}"><h2 id="${theme.id.slice(6)}">${esc(theme.titleNl)}</h2>
<ul class="lines">${list.map((t) => `<li><a href="${t.path}">${esc(t.unit.titleNl)}</a></li>`).join('')}</ul></section>`)
  .join('\n')}
${footer()}`,
  );
}
