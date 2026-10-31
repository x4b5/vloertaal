import { aboutSection } from '../content/about';
import { beRulesUnits, beSectorRulesUnits } from '../content/regels/be';
import { RULES_DISCLAIMER_BE } from '../content/regels/disclaimer';
import { LAST_UPDATE } from '../content/updates';
import { LANG_PAGES } from './langPages';
import { linkRows } from './linkRows';
import { BELGIUM_PATH, COACH_PATH, RULES_PATH, TOPICS_PATH } from './paths';
import { APP_DATA, breadcrumbs, esc, plainPage, SITE } from './plainPage';
import { SECTOR_PAGES } from './sectorPages';
import { TOPIC_PAGES } from './topicPages';

/**
 * Being found by place and by AI search (docs/seo-plan.md, "GEO"):
 *  - where the app is for: the Netherlands and Belgium (Flanders), in the structured data
 *    (`AREA_SERVED`) and on a page of its own, /belgie/;
 *  - plain questions and answers (`FAQ`), on the start page and as FAQPage data: what people ask
 *    a search engine or an AI assistant, answered in a sentence that can be quoted on its own;
 *  - /llms.txt: what Vloertaal is and where its pages are, in one plain text file for AI assistants.
 * Only facts that are in the app already, and modest: no "best", no promises.
 */

export { AREA_SERVED } from './plainPage';

export const HELP_LANGS = 'Arabisch, Tigrinya, Perzisch, Dari, Oekraïens, Turks, Pools, Roemeens, Bulgaars, Spaans, Portugees, Frans en Duits';

export interface Faq { q: string; a: string }

/** The questions people ask about Vloertaal, each answer readable on its own. */
export const FAQ: readonly Faq[] = [
  { q: 'Is Vloertaal gratis?', a: 'Ja. Vloertaal is gratis: geen abonnement, geen reclame, en we verkopen geen gegevens.' },
  { q: 'Heb ik een account nodig?', a: 'Nee. Wat je leert, staat alleen op je eigen telefoon of computer. Je opent Vloertaal in de browser en kunt het op je beginscherm zetten.' },
  { q: 'In welke talen krijg ik uitleg?', a: `Vloertaal legt het Nederlands uit in 13 talen: ${HELP_LANGS}. Of in eenvoudig Engels.` },
  { q: 'Werkt Vloertaal ook in België?', a: 'Ja, voor Vlaanderen. Kies bij de start “België”. Dan leer je Vlaamse woorden, zoals loonbrief en interimkantoor, en in Werkregels de regels van België. De Belgische lessen zijn nieuw en nog niet nagekeken door een expert.' },
  { q: 'Wat is Werkregels?', a: 'Werkregels is voor wie al Nederlands spreekt. Je leert hoe werken in Nederland of België gaat: je loon, je contract, ziek zijn, veilig werken en je rechten. Het is algemene informatie, geen juridisch advies.' },
  { q: 'Vervangt Vloertaal een taalcursus?', a: 'Nee. Vloertaal is een extra: korte lessen van een paar minuten per dag. Een taalcursus of een taalcoach blijft nodig.' },
  { q: 'Klopt alles in Vloertaal?', a: 'Vloertaal is nog een testversie. Nog niet alles is nagekeken door een expert of een moedertaalspreker. Zie je een fout? Mail naar hoi@vloertaal.nl.' },
];

/** The questions as structured data (schema.org FAQPage). */
export function faqData(faq: readonly Faq[] = FAQ): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

/** The questions as plain HTML: a heading per question. */
export function faqHtml(faq: readonly Faq[] = FAQ, level = 2): string {
  const h = `h${level}`;
  const sub = `h${level + 1}`;
  return `<section aria-labelledby="faq"><${h} id="faq">Veelgestelde vragen</${h}>
${faq.map((f) => `<${sub}>${esc(f.q)}</${sub}><p>${esc(f.a)}</p>`).join('\n')}
</section>`;
}

/** For the start page's head (vite.config.ts): the questions as data, next to the app's own. */
export function faqScript(): string {
  return `<script type="application/ld+json">${JSON.stringify(faqData()).replace(/</g, '\\u003c')}</script>`;
}

/** A selection of docs/werkregels-belgie.md, "Woorden: Nederland → Vlaanderen". */
export const FLEMISH_WORDS: readonly [nl: string, be: string][] = [
  ['loonstrook', 'loonbrief'],
  ['uitzendbureau', 'interimkantoor'],
  ['rooster', 'uurrooster'],
  ['zorgverzekeraar', 'ziekenfonds (mutualiteit)'],
  ['bedrijfsarts', 'arbeidsarts'],
  ['dertiende maand', 'eindejaarspremie'],
  ['ontslagbrief, WW-papieren', 'C4'],
  ['UWV, WW', 'RVA, werkloosheidsuitkering'],
  ['werk.nl', 'VDAB'],
  ['bijstand', 'leefloon, OCMW'],
  ['BSN', 'rijksregisternummer'],
  ['DigiD', 'itsme, eID'],
  ['Juridisch Loket', 'justitiehuis'],
  ['FNV, CNV', 'ABVV, ACV, ACLVB'],
];

const BE_FAQ: readonly Faq[] = [
  { q: 'Is er een Belgische versie van Vloertaal?', a: 'Ja. Kies bij de start, of later bij Instellingen, “België”. De taallessen gebruiken dan Vlaamse woorden en Belgische instanties, en Werkregels geeft de regels van België.' },
  { q: 'Leer ik Vlaams of Nederlands?', a: 'Je leert Nederlands, de taal van Nederland en Vlaanderen. Waar het woord in Vlaanderen anders is, leer je het Vlaamse woord: loonbrief, interimkantoor, ziekenfonds.' },
  FAQ[0],
  FAQ[2],
];

/** /belgie/: Vloertaal for work in Flanders, in Dutch. */
export function belgiumPage(): string {
  const units = [...beRulesUnits, ...beSectorRulesUnits].filter((u) => u.id.startsWith('r.be.'));
  const title = 'Nederlands leren voor je werk in België (Vlaanderen) | Vloertaal';
  const description = 'Gratis Nederlands leren voor je werk in Vlaanderen, met Vlaamse woorden en uitleg in je eigen taal. Ook de regels op het werk in België. Geen account.';
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Vloertaal in België',
      url: `${SITE}${BELGIUM_PATH}`,
      description,
      inLanguage: 'nl-BE',
      about: APP_DATA,
      spatialCoverage: { '@type': 'Place', name: 'Vlaanderen, België' },
    },
    breadcrumbs({ name: 'België', path: BELGIUM_PATH }),
    faqData(BE_FAQ),
  ];
  return plainPage(
    { path: BELGIUM_PATH, lang: 'nl-BE', title, description, ogLocale: 'nl_BE', data },
    `<h1>Nederlands leren voor je werk in België</h1>
<p class="lead">Vloertaal is een gratis app om Nederlands te leren voor je werk. Werk je in Vlaanderen? Kies dan bij de start “België”. Dan leer je de woorden die ze in Vlaanderen gebruiken, met uitleg in je eigen taal (${HELP_LANGS}), of in eenvoudig Engels.</p>
<a class="cta" href="/">Open Vloertaal en kies “België” →</a>
<section aria-labelledby="words"><h2 id="words">Vlaamse woorden op het werk</h2>
<p>Een paar woorden die in Vlaanderen anders zijn dan in Nederland:</p>
<table><thead><tr><th>Nederland</th><th>Vlaanderen</th></tr></thead><tbody>
${FLEMISH_WORDS.map(([nl, be]) => `<tr><td>${esc(nl)}</td><td><strong>${esc(be)}</strong></td></tr>`).join('\n')}
</tbody></table></section>
${units.length ? `<section aria-labelledby="rules"><h2 id="rules">Werkregels in België</h2>
<p>Spreek je al Nederlands? Kies dan in de app “Nederlands” en “België”. Dan leer je hoe werken in België gaat, in ${units.length} onderwerpen:</p>
<ul class="lines">${units.map((u) => `<li><strong>${esc(u.title)}</strong> – ${esc(u.lessons.map((l) => l.title).join(', '))}</li>`).join('')}</ul></section>` : ''}
<section aria-labelledby="note"><h2 id="note">Goed om te weten</h2><p>${esc(RULES_DISCLAIMER_BE.join(' '))}</p></section>
${faqHtml(BE_FAQ)}
<a class="cta" href="/">Open Vloertaal en kies “België” →</a>
<footer>
${linkRows()}
<p>Vloertaal is gratis, zonder account en zonder reclame, en nog in de testfase. Vraag of fout? Mail naar <a href="mailto:hoi@vloertaal.nl">hoi@vloertaal.nl</a>.</p>
</footer>`,
  );
}

/**
 * /llms.txt (llmstxt.org): for AI assistants that read the site, what Vloertaal is in a few plain
 * lines and a list of its pages. Made at build time from the same lists as the sitemap.
 */
export function llmsTxt(): string {
  const about = (id: string) => aboutSection(id).nl.body;
  const link = (path: string, name: string, note?: string) => `- [${name}](${SITE}${path})${note ? `: ${note}` : ''}`;
  return `# Vloertaal

> Vloertaal is een gratis web-app om Nederlands te leren voor je werk, in Nederland en in België (Vlaanderen), met uitleg in 13 hulptalen of in eenvoudig Engels. Geen account, geen reclame. Het is nog een testversie.

In English: Vloertaal is a free web app to learn Dutch for work in the Netherlands and Belgium (Flanders), with help in 13 languages or plain English. No account, no ads. It is still a test version.

${about('a.what')}

${about('a.who')}

Er zijn twee sporen:
- Taal: Nederlands leren met hulp in je eigen taal. Korte lessen met woorden, zinnen en gesprekjes van de werkvloer.
- Werkregels: voor wie al Nederlands spreekt. Loon, contract, ziek zijn, veilig werken en je rechten, met een versie voor Nederland en een voor België. Algemene informatie, geen juridisch advies.

Bijgewerkt: ${LAST_UPDATE}. Contact: hoi@vloertaal.nl.

## Vragen en antwoorden

${FAQ.map((f) => `- ${f.q} ${f.a}`).join('\n')}

## Pagina's

${link('/', 'Vloertaal', 'de app')}
${link(BELGIUM_PATH, 'Werken in België (Vlaanderen)')}
${link(RULES_PATH, 'Werkregels', 'de regels op het werk')}
${link(COACH_PATH, 'Voor begeleiders en werkgevers')}
${link(TOPICS_PATH, 'Alle onderwerpen')}
${link('/intro/', 'Waarom Vloertaal?')}
${link('/nieuw/', 'Wat is er nieuw?', 'het logboek')}

## Sectoren

${SECTOR_PAGES.map((p) => link(p.path, p.name)).join('\n')}

## In je eigen taal

${LANG_PAGES.map((p) => link(p.path, p.nativeName)).join('\n')}

## Onderwerpen

${TOPIC_PAGES.map((t) => link(t.path, t.heading)).join('\n')}
`;
}
