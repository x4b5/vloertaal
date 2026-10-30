import { CONTACT_EMAIL } from '../content/about';
import { COACH_FACTS } from '../content/facts';
import { PRO_LEAD, proSections, type ProSection } from '../content/pro';
import { THEMES } from '../content/themes';
import { languageNav } from './langPages';
import { APP_DATA, breadcrumbs, esc, plainPage, SITE } from './plainPage';
import { appLink, COACH_PATH } from './paths';
import { sectorNav } from './sectorPages';
import { TOPIC_LINKS } from './topicPages';

/**
 * vloertaal.nl/voor-begeleiders: for language coaches, teachers, employers and organisations
 * who search in Dutch (docs/seo-plan.md, step 5). The same sections as the app's own page "Voor
 * begeleiders en werkgevers" (src/content/pro.ts, shown by src/components/Coaches.tsx), so the two
 * cannot drift apart. The site adds links where the app has text (at most three things to tap
 * there): a section's `site` links, the sector pages after "Zo zet je het in", and a direct link
 * to every topic (?unit=…, src/lib/unitLink.ts) where the app shares one. Made at build time.
 */

/** A text, escaped, with the contact address as a mail link. */
const text = (t: string) => esc(t).split(esc(CONTACT_EMAIL)).join(`<a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`);

/** The topics of the Dutch course by theme, each with its page and the link that opens it in the app. */
function topicLinks(): string {
  const themes = THEMES.map((t) => ({ t, list: TOPIC_LINKS.filter((p) => p.theme.id === t.id) })).filter((g) => g.list.length > 0);
  return themes
    .map(({ t, list }) => `<h3>${esc(t.titleNl)}</h3><ul class="lines">${list.map((p) => `<li><a href="${p.path}">${esc(p.unit.titleNl)}</a> · <a href="${appLink(p.unit.id)}" rel="nofollow" aria-label="Open ${esc(p.unit.titleNl)} in Vloertaal">open</a></li>`).join('')}</ul>`)
    .join('\n');
}

function section(s: ProSection): string {
  const id = s.id.slice(2);
  let inner = [
    ...s.body.map((p) => `<p>${text(p)}</p>`),
    s.lines ? `<ul class="lines">${s.lines.map((l) => `<li><strong>${esc(l.lead)}</strong> ${text(l.text)}</li>`).join('')}</ul>` : '',
  ].join('\n');
  // The website's links: the first time the text is there (in a paragraph or a line).
  for (const link of s.site ?? []) {
    const at = esc(link.text);
    if (!inner.includes(at)) throw new Error(`coachPage: ${s.id} has no "${link.text}" to link`);
    inner = inner.replace(at, `<a href="${link.href}">${at}</a>`);
  }
  const extra = s.extra === 'facts'
    ? COACH_FACTS.map((f) => `<p>${esc(f.text)}</p><p><small>Bron: ${esc(f.source)}</small></p>`).join('\n')
    : s.extra === 'topics'
      ? `${sectorNav(undefined, 'Woorden per sector')}\n${topicLinks()}`
      : '';
  return `<section aria-labelledby="${id}"><h2 id="${id}">${esc(s.title)}</h2>
${[inner, extra].filter(Boolean).join('\n')}</section>`;
}

export function coachPage(): string {
  const title = 'Gratis NT2-oefenapp voor werk | Vloertaal voor begeleiders';
  const description = 'Zet Vloertaal in bij je taalcafé, NT2-les of op de werkvloer: gratis, zonder account, met uitleg in dertien talen en een directe link naar elk onderwerp.';
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Vloertaal voor begeleiders en werkgevers',
      url: `${SITE}${COACH_PATH}`,
      description,
      inLanguage: 'nl',
      audience: { '@type': 'EducationalAudience', educationalRole: 'teacher' },
      about: APP_DATA,
    },
    breadcrumbs({ name: 'Voor begeleiders en werkgevers', path: COACH_PATH }),
  ];
  return plainPage(
    { path: COACH_PATH, lang: 'nl', title, description, ogLocale: 'nl_NL', data },
    `<h1>Vloertaal voor begeleiders en werkgevers</h1>
<p class="lead">${esc(PRO_LEAD)}</p>
<a class="cta" href="/">Open Vloertaal →</a>
${proSections.map(section).join('\n')}
<footer>
<h2>Per sector</h2>
${sectorNav()}
<h2>In de eigen taal van je leerlingen</h2>
${languageNav()}
<p><a href="/intro/">Waarom Vloertaal?</a> · <a href="/nieuw/">Wat is er nieuw?</a></p>
</footer>`,
  );
}
