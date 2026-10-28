import { units } from '../content/curriculum';
import { RULES_DISCLAIMER } from '../content/regels/disclaimer';
import { rulesUnits, sectorRulesUnits } from '../content/regels';
import type { RuleUnit } from '../content/regels/types';
import { type SectorId, sectors } from '../content/sectors';
import type { Unit } from '../content/types';
import { languageNav } from './langPages';
import { APP_DATA, breadcrumbs, esc, plainPage, SITE } from './plainPage';

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
];

export const RULES_PATH = '/werkregels/';

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

const HELP_LANGS = 'Arabisch, Tigrinya, Perzisch, Dari, Oekraïens, Turks, Pools, Roemeens en Bulgaars';

/** The other sector pages and /werkregels: one tap to the neighbour pages. */
export function sectorNav(current?: string): string {
  const items = [...SECTOR_PAGES.map((p) => ({ path: p.path, name: p.name })), { path: RULES_PATH, name: 'Werkregels' }];
  return `<nav aria-label="Sectoren"><ul>${items
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
  const lessons = own.flatMap((u) => u.lessons);
  // Once each: the unit's mixed review lesson asks the same words and sentences again.
  const once = <T,>(list: T[], key: (t: T) => string) => [...new Map(list.map((t) => [key(t), t])).values()];
  const words = once(lessons.flatMap((l) => l.words), (w) => w.nl);
  const sentences = once(lessons.flatMap((l) => l.sentences), (x) => x.nl);
  const chats = once(lessons.flatMap((l) => l.dialogues ?? []), (c) => c.prompt.nl);
  const focus = sector.focus.map((f) => unit(f).titleNl);
  const rules = sector.rules.units.map(rulesUnit).flatMap((u) => u.lessons);
  const title = `Nederlands voor ${page.short} – gratis | Vloertaal`;
  const description = `Gratis Nederlands leren voor ${page.phrase}: woorden, zinnen en gesprekjes van de werkvloer, met uitleg in je eigen taal. Geen account nodig.`;
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      url: `${SITE}${page.path}`,
      description,
      inLanguage: 'nl',
      about: APP_DATA,
    },
    breadcrumbs({ name: page.name, path: page.path }),
  ];
  return plainPage(
    { path: page.path, lang: 'nl', title, description, ogLocale: 'nl_NL', data },
    `<h1>Nederlands voor ${esc(page.phrase)}</h1>
<p class="lead">Vloertaal is een gratis app om Nederlands te leren voor je werk. Voor ${esc(page.phrase)} is er een eigen onderwerp: <strong>${esc(own.map((u) => u.titleNl).join(', '))}</strong>. Je leert de woorden en zinnen die je daar elke dag hoort, met uitleg in je eigen taal: ${HELP_LANGS}. Of in eenvoudig Engels.</p>
<a class="cta" href="/">Open Vloertaal →</a>
<section aria-labelledby="words"><h2 id="words">${words.length} woorden die je leert</h2>
<ul class="words">${words.map((w) => `<li>${esc(w.nl)}</li>`).join('')}</ul></section>
<section aria-labelledby="sentences"><h2 id="sentences">Zinnen die je oefent</h2>
<ul class="lines">${sentences.map((s) => `<li>${esc(s.nl)}</li>`).join('')}</ul>
${chats.length ? `<h3>Korte gesprekjes met collega’s</h3>
<ul class="lines">${chats.map((c) => `<li>${esc(c.prompt.nl)} — ${esc(c.reply.nl)}</li>`).join('')}</ul>` : ''}</section>
<section aria-labelledby="path"><h2 id="path">Wat komt er eerst?</h2>
<p>Kies je in de app de sector ${esc(page.name)}? Dan komen na de basis eerst deze onderwerpen: ${esc(focus.join(' en '))}, en dan ${esc(own.map((u) => u.titleNl).join(', '))}. De andere onderwerpen blijven open: je kiest zelf.</p></section>
${rules.length ? `<section aria-labelledby="rules"><h2 id="rules">Werkregels voor ${esc(page.phrase)}</h2>
<p>Spreek je al Nederlands? Kies dan in de app “Nederlands”. Dan leer je de regels op het werk, ook voor ${esc(page.phrase)}:</p>
${rules.map((l) => `<h3>${esc(l.title)}</h3><p>${esc(l.goal)}</p><p class="remember">Onthoud: ${esc(l.remember)}</p>`).join('\n')}
<p><a href="${RULES_PATH}">Alle werkregels</a></p></section>` : ''}
<a class="cta" href="/">Open Vloertaal →</a>
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
      name: title,
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
<ul class="lines">${u.lessons.map((l) => `<li><strong>${esc(l.title)}</strong>: ${esc(l.goal)}</li>`).join('')}</ul>
<p class="remember">Onthoud: ${esc(u.lessons[0].remember)}</p></section>`,
  )
  .join('\n')}
<section aria-labelledby="note"><h2 id="note">Goed om te weten</h2><p>${esc(RULES_DISCLAIMER.join(' '))}</p></section>
<a class="cta" href="/">Open Vloertaal en kies “Nederlands” →</a>
${footer(RULES_PATH)}`,
  );
}
