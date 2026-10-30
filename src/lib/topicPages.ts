import { units } from '../content/curriculum';
import { unitSector } from '../content/sectors';
import { THEME_UNITS, THEMES, type Theme } from '../content/themes';
import type { Unit } from '../content/types';
import { APP_DATA, breadcrumbs, esc, plainPage, SITE } from './plainPage';
import { linkRows } from './linkRows';
import { appLink, TOPICS_PATH } from './paths';
import { SECTOR_PAGES } from './sectorPages';
import { unitItems, unitSections } from './unitContent';

/**
 * A page per topic of the Dutch course (vloertaal.nl/onderwerpen/loon …) and the list of all of
 * them (/onderwerpen): its words with translations, its sentences and chats, made at build time
 * from src/content. For whoever searches for the Dutch words of one subject ("loonstrook
 * woorden"); the button opens that topic in the app (?unit=…, src/lib/unitLink.ts). Not a page
 * per lesson (docs/seo-plan.md: too many for too little). A sector's own topic has no page here:
 * its sector page (/bouw …) shows the same words, so the lists link there.
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

/**
 * The page's heading: what someone searching would type, not only the unit's short name. At most
 * 49 characters, so "<heading> | Vloertaal" fits a search result. A topic without one here gets
 * its unit's name (tests/seo.test.ts asks for one for every topic).
 */
export const HEADINGS: Readonly<Record<string, string>> = {
  'u.firstday': 'Je eerste werkdag: Nederlandse woorden en zinnen',
  'u.help': 'Hulp vragen op je werk in het Nederlands',
  'u.tools': 'Vertaalapp en andere slimme hulp bij Nederlands',
  'u.safety': 'Veiligheid op het werk: woorden en zinnen',
  'u.data': 'Je naam spellen, getallen en de datum',
  'u.time': 'Je dienst, pauze en rooster in het Nederlands',
  'u.sounds': 'Nederlandse uitspraak oefenen: de klanken',
  'u.teamwork': 'Samenwerken en afspraken maken in het Nederlands',
  'u.apply': 'Solliciteren in het Nederlands: cv en gesprek',
  'u.contract': 'Werk zoeken en je contract: Nederlandse woorden',
  'u.papers': 'BSN, wonen en papieren: Nederlandse woorden',
  'u.pay': 'Loon en loonstrook: Nederlandse woorden',
  'u.house': 'Huisregels op het werk: telefoon, roken, op tijd',
  'u.social': 'Omgaan met collega’s: praatjes, fouten, respect',
  'u.sayings': 'Nederlandse uitdrukkingen voor op het werk',
  'u.rights': 'Je rechten en de Arbowet in het Nederlands',
  'u.leave': 'Vakantie, verlof en ziekmelden in het Nederlands',
  'u.exploit': 'Uitbuiting op het werk herkennen',
  'u.contact': 'Bellen en appen met je werk in het Nederlands',
  'u.grow': 'Certificaten en diploma’s: verder in je werk',
  'u.health': 'Huisarts, 112 en zorgverzekering: woorden',
  'u.money': 'Brieven, Belastingdienst en oplichting: woorden',
  'u.travel': 'Naar je werk: fiets, bus en trein',
  'u.lost': 'Werk kwijt: WW, UWV en nieuw werk zoeken',
  'u.shop': 'Werken in de winkel: vakken vullen en kassa',
  'u.numbers': 'Rekenen op je werk: tijd, geld en maten',
  'u.ai': 'Slimme apps en AI: wat kan wel en wat niet?',
};

const COUNT = ['geen', 'één', 'twee', 'drie', 'vier', 'vijf', 'zes', 'zeven', 'acht'];

export interface TopicPage {
  unit: Unit;
  theme: Theme;
  path: string;
  heading: string;
}

/** A theme's topics as the lists link them: a topic page, or a sector's own topic's sector page. */
export interface TopicLink {
  unit: Unit;
  theme: Theme;
  path: string;
}

/** Every topic of the Dutch course in a theme, in the themes' order (the region's units are left out). */
export const TOPIC_LINKS: readonly TopicLink[] = THEMES.flatMap((theme) =>
  THEME_UNITS[theme.id].taal
    .map((id) => units.find((u) => u.id === id))
    .filter((u) => u !== undefined)
    .map((unit) => {
      const sector = unitSector(unit.id);
      const path = sector ? SECTOR_PAGES.find((p) => p.id === sector)!.path : `${TOPICS_PATH}${slugOf(unit.titleNl)}/`;
      return { unit, theme, path };
    }),
);

/** The topics with a page of their own (not a sector's own topic). */
export const TOPIC_PAGES: readonly TopicPage[] = TOPIC_LINKS.filter((t) => t.path.startsWith(TOPICS_PATH)).map((t) => ({
  ...t,
  heading: HEADINGS[t.unit.id] ?? t.unit.titleNl,
}));

function footer(): string {
  return `<footer>
<p><a href="${TOPICS_PATH}">Alle onderwerpen</a></p>
${linkRows()}
<p>Vloertaal is gratis, zonder account en zonder reclame, en nog in de testfase. Vraag of fout? Mail naar <a href="mailto:hoi@vloertaal.nl">hoi@vloertaal.nl</a>.</p>
</footer>`;
}

/** The search line: the heading, the topic's first words, the languages; shorter when it does not fit. */
function describeTopic(heading: string, unit: Unit): string {
  const first = unitItems([unit]).words.slice(0, 3).map((w) => w.nl);
  const words = `${first.slice(0, -1).join(', ')} en ${first.at(-1)}`;
  const long = `${heading}, zoals ${words}. Met vertaling in het Pools, Roemeens, Oekraïens en Arabisch. Gratis oefenen, zonder account.`;
  if (long.length <= 160) return long;
  const short = `${heading}, zoals ${words}. Met vertaling in je eigen taal. Gratis, zonder account.`;
  return short.length <= 160 ? short : `${heading}. Met vertaling in je eigen taal. Gratis, zonder account.`;
}

export function topicPage(page: TopicPage): string {
  const { unit, theme, heading } = page;
  const title = `${heading} | Vloertaal`;
  const description = describeTopic(heading, unit);
  const siblings = TOPIC_LINKS.filter((t) => t.theme.id === theme.id && t.unit.id !== unit.id);
  const lessons = unit.lessons.length;
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      name: heading,
      url: `${SITE}${page.path}`,
      description,
      inLanguage: 'nl',
      learningResourceType: 'lesson',
      teaches: `Nederlands op het werk: ${unit.titleNl}`,
      audience: { '@type': 'EducationalAudience', educationalRole: 'student' },
      isAccessibleForFree: true,
      isPartOf: APP_DATA,
    },
    breadcrumbs({ name: 'Onderwerpen', path: TOPICS_PATH }, { name: unit.titleNl, path: page.path }),
  ];
  return plainPage(
    { path: page.path, lang: 'nl', title, description, ogLocale: 'nl_NL', data },
    `<h1>${esc(heading)}</h1>
<p class="lead">Dit is het onderwerp ‘${esc(unit.titleNl)}’ van Vloertaal, de gratis app om Nederlands te leren voor je werk. Het hoort bij het thema <a href="${TOPICS_PATH}#${theme.id.slice(6)}">‘${esc(theme.titleNl)}’</a> en heeft ${COUNT[lessons] ?? lessons} korte lessen. Je luistert, tikt het goede antwoord aan, maakt zinnen en oefent korte gesprekjes, met uitleg in je eigen taal.</p>
<a class="cta" href="${appLink(unit.id)}">Oefen in Vloertaal →</a>
${unitSections([unit])}
${siblings.length ? `<section aria-labelledby="more"><h2 id="more">Andere onderwerpen in ‘${esc(theme.titleNl)}’</h2>
<ul class="lines">${siblings.map((t) => `<li><a href="${t.path}">${esc(t.unit.titleNl)}</a></li>`).join('')}</ul></section>` : ''}
<a class="cta" href="${appLink(unit.id)}">Oefen in Vloertaal →</a>
${footer()}`,
  );
}

/** /onderwerpen: every topic, by theme. */
export function topicsIndexPage(): string {
  const title = 'Alle onderwerpen: Nederlands voor je werk | Vloertaal';
  const description = `${TOPIC_LINKS.length} onderwerpen om gratis Nederlands te leren voor je werk: van je eerste werkdag en veiligheid tot je loonstrook, je rechten en je sector.`;
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Alle onderwerpen',
      url: `${SITE}${TOPICS_PATH}`,
      description,
      inLanguage: 'nl',
      about: APP_DATA,
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: TOPIC_LINKS.map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t.unit.titleNl, url: `${SITE}${t.path}` })),
      },
    },
    breadcrumbs({ name: 'Onderwerpen', path: TOPICS_PATH }),
  ];
  const groups = THEMES.map((theme) => ({ theme, list: TOPIC_LINKS.filter((t) => t.theme.id === theme.id) })).filter((g) => g.list.length);
  return plainPage(
    { path: TOPICS_PATH, lang: 'nl', title, description, ogLocale: 'nl_NL', data },
    `<h1>Alle onderwerpen</h1>
<p class="lead">Vloertaal heeft ${TOPIC_LINKS.length} onderwerpen in ${groups.length} thema’s. Elk onderwerp heeft korte lessen met woorden, zinnen en gesprekjes, met uitleg in je eigen taal. Gratis, zonder account.</p>
<a class="cta" href="/">Open Vloertaal →</a>
${groups
  .map(({ theme, list }) => `<section aria-labelledby="${theme.id.slice(6)}"><h2 id="${theme.id.slice(6)}">${esc(theme.titleNl)}</h2>
<ul class="lines">${list.map((t) => `<li><a href="${t.path}">${esc(t.unit.titleNl)}</a></li>`).join('')}</ul></section>`)
  .join('\n')}
${footer()}`,
  );
}
