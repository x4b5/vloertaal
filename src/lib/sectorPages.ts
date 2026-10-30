import { units } from '../content/curriculum';
import { RULES_DISCLAIMER } from '../content/regels/disclaimer';
import { rulesUnits, sectorRulesUnits } from '../content/regels';
import type { RuleUnit } from '../content/regels/types';
import { type SectorId, sectorGroups, sectors } from '../content/sectors';
import type { Unit } from '../content/types';
import { languageNav } from './langPages';
import { appLink, COACH_PATH, RULES_PATH } from './paths';
import { APP_DATA, breadcrumbs, esc, plainPage, SITE } from './plainPage';
import { unitSections } from './unitContent';

/**
 * The Dutch pages per sector (vloertaal.nl/bouw, /logistiek …) and for the work-rules track
 * (/werkregels), for coaches, employers and learners who search in Dutch (docs/seo-plan.md,
 * step 4). Made at build time from the lessons themselves (src/content), so they grow with the app.
 */

export interface SectorPage {
  id: SectorId;
  /** The path on vloertaal.nl. */
  path: string;
  /** The page's name ("Bouw"), how a sentence says it ("de bouw"), and a shorter one for the title. */
  name: string;
  phrase: string;
  short: string;
}

export const SECTOR_PAGES: readonly SectorPage[] = [
  { id: 'logistics', path: '/logistiek/', name: 'Logistiek', phrase: 'het magazijn en de logistiek', short: 'de logistiek' },
  { id: 'construction', path: '/bouw/', name: 'Bouw', phrase: 'de bouw', short: 'de bouw' },
  { id: 'production', path: '/productie/', name: 'Productie', phrase: 'de productie en de fabriek', short: 'de productie' },
  { id: 'care', path: '/zorg/', name: 'Zorg', phrase: 'de zorg', short: 'de zorg' },
  { id: 'hospitality', path: '/horeca/', name: 'Horeca', phrase: 'de horeca', short: 'de horeca' },
  { id: 'cleaning', path: '/schoonmaak/', name: 'Schoonmaak', phrase: 'de schoonmaak', short: 'de schoonmaak' },
  { id: 'horticulture', path: '/tuinbouw/', name: 'Tuinbouw', phrase: 'de tuinbouw en de kas', short: 'de tuinbouw' },
];

const unit = (id: string): Unit => {
  const u = units.find((x) => x.id === id);
  if (!u) throw new Error(`sectorPages: no unit ${id}`);
  return u;
};
const rulesUnit = (id: string): RuleUnit => {
  const u = [...rulesUnits, ...sectorRulesUnits].find((x) => x.id === id);
  if (!u) throw new Error(`sectorPages: no rules unit ${id}`);
  return u;
};

const HELP_LANGS = 'Arabisch, Tigrinya, Perzisch, Dari, Oekraïens, Turks, Pools, Roemeens, Bulgaars, Spaans, Portugees, Frans en Duits';

/** The other sector pages and /werkregels: one tap to the neighbour pages. */
export function sectorNav(current?: string, label = "Sectorpagina's"): string {
  const items = [...SECTOR_PAGES.map((p) => ({ path: p.path, name: p.name })), { path: RULES_PATH, name: 'Werkregels' }];
  // (Its own name: a page with the link rows too has a "Sectoren" nav already; `label` for a
  // page that lists the sectors twice.)
  return `<nav aria-label="${esc(label)}"><ul>${items
    .map((p) => `<li><a href="${p.path}"${p.path === current ? ' aria-current="page"' : ''}>${esc(p.name)}</a></li>`)
    .join('')}</ul></nav>`;
}

function footer(current: string): string {
  return `<footer>
<h2>Andere sectoren</h2>
${sectorNav(current)}
<h2>In je eigen taal</h2>
${languageNav()}
<p>Vloertaal is gratis, zonder account en zonder reclame, en nog in de testfase. Vraag of fout? Mail naar <a href="mailto:hoi@vloertaal.nl">hoi@vloertaal.nl</a>.</p>
<p><a href="/intro/">Waarom Vloertaal?</a> · <a href="/nieuw/">Wat is er nieuw?</a></p>
</footer>`;
}

/** One sector's page: its words, sentences and chats, the units that come early, and its work rules. */
export function sectorPage(id: SectorId): string {
  const page = SECTOR_PAGES.find((p) => p.id === id)!;
  const sector = sectors.find((s) => s.id === id)!;
  const own = sector.units.map(unit);
  const focus = sector.focus.map((f) => unit(f).titleNl);
  const group = sectorGroups.find((g) => g.sectors.includes(id))!;
  const names = own.map((u) => `‘${esc(u.titleNl)}’`).join(' en ');
  const rules = sector.rules.units.map(rulesUnit).flatMap((u) => u.lessons);
  const title = `Nederlands leren voor ${page.short} – gratis | Vloertaal`;
  const description = `Gratis Nederlands leren voor ${page.phrase}: woorden, zinnen en gesprekjes van de werkvloer, met uitleg in je eigen taal. Geen account nodig.`;
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: `Nederlands leren voor ${page.phrase}`,
      url: `${SITE}${page.path}`,
      description,
      inLanguage: 'nl',
      about: APP_DATA,
    },
    breadcrumbs({ name: page.name, path: page.path }),
  ];
  return plainPage(
    { path: page.path, lang: 'nl', title, description, ogLocale: 'nl_NL', data },
    `<h1>Nederlands leren voor ${esc(page.phrase)}</h1>
<p class="lead">Vloertaal is een gratis app om Nederlands te leren voor je werk. Voor ${esc(page.phrase)} is er een apart onderwerp, ${names}, met de woorden en zinnen die je daar elke dag hoort. Met uitleg in je eigen taal (${HELP_LANGS}), of in eenvoudig Engels.</p>
<a class="cta" href="${appLink(own[0].id)}">Oefen ${names} in Vloertaal →</a>
${unitSections(own)}
<section aria-labelledby="path"><h2 id="path">Wat komt er eerst?</h2>
<p>Kies je in de app bij de vraag waar je werkt voor ‘${esc(group.nl)}’ en dan ‘${esc(page.name)}’? Dan staat ${names} al vroeg in je lespad, meteen na de eerste basisonderwerpen. Ook ${esc(focus.map((f) => `‘${f}’`).join(' en '))} komen eerder aan de beurt. Alle andere onderwerpen blijven open: je kiest zelf.</p>
<p>Leidinggevende of werkgever in ${esc(page.short)}? Stuur je nieuwe collega’s de link naar deze pagina, of naar de pagina in hun eigen taal (hieronder). Meer tips staan bij <a href="${COACH_PATH}">Voor begeleiders en werkgevers</a>.</p></section>
${rules.length ? `<section aria-labelledby="rules"><h2 id="rules">Werkregels voor ${esc(page.phrase)}</h2>
<p>Spreek je al Nederlands? Kies dan in de app “Nederlands”. Dan leer je de regels op het werk, ook voor ${esc(page.phrase)}:</p>
${rules.map((l) => `<h3>${esc(l.title)}</h3><p>${esc(l.goal)}</p><p class="remember">Onthoud: ${esc(l.remember)}</p>`).join('\n')}
<p><a href="${RULES_PATH}">Alle werkregels</a></p></section>` : ''}
<a class="cta" href="${appLink(own[0].id)}">Oefen ${names} in Vloertaal →</a>
${footer(page.path)}`,
  );
}

/** /werkregels: the work-rules track for who speaks Dutch already, every unit and its lessons. */
export function rulesPage(): string {
  const all = [...rulesUnits, ...sectorRulesUnits];
  const lessons = all.reduce((n, u) => n + u.lessons.length, 0);
  const title = 'Werkregels: loon, contract en je rechten | Vloertaal';
  const description = 'Gratis en in gewoon Nederlands: de regels op het werk in Nederland. Je loonstrook, je contract, ziek zijn, veilig werken en waar je hulp vindt.';
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Werkregels',
      url: `${SITE}${RULES_PATH}`,
      description,
      inLanguage: 'nl',
      about: APP_DATA,
    },
    breadcrumbs({ name: 'Werkregels', path: RULES_PATH }),
  ];
  return plainPage(
    { path: RULES_PATH, lang: 'nl', title, description, ogLocale: 'nl_NL', data },
    `<h1>Werkregels: hoe werken in Nederland gaat</h1>
<p class="lead">Vloertaal Werkregels is voor wie al Nederlands spreekt en in Nederland werkt of werk zoekt. Je leert de regels van de wet en je contract, en de regels die nergens staan maar die iedereen kent. In korte lessen: een verhaal, de regel, en dan kies je zelf wat je doet. ${all.length} onderwerpen, ${lessons} lessen. Gratis, zonder account.</p>
<a class="cta" href="/">Open Vloertaal en kies “Nederlands” →</a>
${all
  .map(
    (u, i) => `<section aria-labelledby="u${i}"><h2 id="u${i}">${esc(u.title)}</h2>
<ul class="lines">${u.lessons.map((l) => `<li><strong>${esc(l.title)}</strong> – ${esc(l.goal)}</li>`).join('')}</ul>
<p class="remember">Onthoud: ${esc(u.lessons[0].remember)}</p></section>`,
  )
  .join('\n')}
<section aria-labelledby="note"><h2 id="note">Goed om te weten</h2><p>${esc(RULES_DISCLAIMER.join(' '))}</p></section>
<a class="cta" href="/">Open Vloertaal en kies “Nederlands” →</a>
${footer(RULES_PATH)}`,
  );
}
