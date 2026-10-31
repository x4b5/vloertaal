import { rulesUnits, sectorRulesUnits } from '../content/regels';
import { beRulesUnits, beSectorRulesUnits } from '../content/regels/be';
import { RULES_DISCLAIMER, RULES_DISCLAIMER_BE } from '../content/regels/disclaimer';
import type { RuleUnit } from '../content/regels/types';
import { linkRows } from './linkRows';
import { BELGIUM_PATH, RULES_PATH } from './paths';
import { APP_DATA, breadcrumbs, esc, plainPage, SITE } from './plainPage';

/**
 * A page per work-rules topic (docs/seo-plan.md, "Werkregels per onderwerp"): people search for
 * one question ("ziek melden uitzendbureau", "loonstrook uitleg", "opzegtermijn België"), not for
 * the whole track. Made at build time from the lessons themselves: the rule cards, "Waar of niet
 * waar?" with its why, and "Onthoud". The Netherlands at /werkregels/<onderwerp>/, Belgium
 * (Flanders) at /belgie/werkregels/<onderwerp>/ for every topic written for Belgium.
 */

/** "Loon en loonstrook" → "loon-en-loonstrook" (as src/lib/topicPages.ts slugOf; a copy, so the
 *  page files do not import each other in a circle). */
const slugOf = (title: string): string =>
  title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export interface RulesTopicPage {
  unit: RuleUnit;
  country: 'nl' | 'be';
  path: string;
}

const beWritten = [...beRulesUnits, ...beSectorRulesUnits].filter((u) => u.id.startsWith('r.be.'));

export const RULES_TOPIC_PAGES: readonly RulesTopicPage[] = [
  ...[...rulesUnits, ...sectorRulesUnits].map((unit) => ({ unit, country: 'nl' as const, path: `${RULES_PATH}${slugOf(unit.title)}/` })),
  ...beWritten.map((unit) => ({ unit, country: 'be' as const, path: `${BELGIUM_PATH}werkregels/${slugOf(unit.title)}/` })),
];

/** The page of a rules unit, or undefined (a Dutch unit in the Belgian course has the Dutch page). */
export const rulesTopicPath = (unitId: string): string | undefined => RULES_TOPIC_PAGES.find((p) => p.unit.id === unitId)?.path;

const COUNTRY = { nl: 'Nederland', be: 'België' } as const;

export function rulesTopicPage(page: RulesTopicPage): string {
  const { unit, country } = page;
  const where = COUNTRY[country];
  const lessons = unit.lessons;
  const title = `${unit.title}: de regels in ${where} | Vloertaal`;
  const goals = lessons.map((l) => l.title).join(', ');
  const description = `${unit.title} in ${where}, in gewoon Nederlands: ${goals}. Gratis, zonder account.`.slice(0, 158);
  const siblings = RULES_TOPIC_PAGES.filter((p) => p.country === country && p.unit.id !== unit.id);
  const disclaimer = (country === 'be' ? RULES_DISCLAIMER_BE : RULES_DISCLAIMER).join(' ');
  const index = country === 'be' ? BELGIUM_PATH : RULES_PATH;
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      name: `${unit.title} (${where})`,
      url: `${SITE}${page.path}`,
      description,
      inLanguage: country === 'be' ? 'nl-BE' : 'nl',
      learningResourceType: 'lesson',
      educationalLevel: 'A2',
      teaches: lessons.map((l) => l.goal),
      spatialCoverage: { '@type': 'Country', name: where },
      audience: { '@type': 'EducationalAudience', educationalRole: 'student' },
      isAccessibleForFree: true,
      isPartOf: APP_DATA,
    },
    breadcrumbs(
      ...(country === 'be' ? [{ name: 'België', path: BELGIUM_PATH }] : []),
      { name: 'Werkregels', path: country === 'be' ? `${BELGIUM_PATH}#rules` : RULES_PATH },
      { name: unit.title, path: page.path },
    ),
  ];
  const lessonHtml = lessons.map((l, i) => {
    const rules = l.steps.flatMap((s) => (s.kind === 'rule' && !s.dialect ? [s] : []));
    const facts = l.steps.flatMap((s) => (s.kind === 'truefalse' ? [s] : []));
    return `<section aria-labelledby="l${i}"><h2 id="l${i}">${esc(l.title)}</h2>
<p class="lead">${esc(l.goal)}</p>
${rules.map((r) => `<h3>${esc(r.title)}</h3>${r.body.map((b) => `<p>${esc(b)}</p>`).join('')}`).join('\n')}
${facts.length ? `<h3>Waar of niet waar?</h3><ul class="lines">${facts.map((f) => `<li><strong>${esc(f.statement)}</strong> ${f.answer ? 'Waar.' : 'Niet waar.'} ${esc(f.why)}</li>`).join('')}</ul>` : ''}
<p class="remember">Onthoud: ${esc(l.remember)}</p></section>`;
  }).join('\n');
  return plainPage(
    { path: page.path, lang: country === 'be' ? 'nl-BE' : 'nl', title, description, ogLocale: country === 'be' ? 'nl_BE' : 'nl_NL', data },
    `<h1>${esc(unit.title)}</h1>
<p class="lead">Zo gaat het in ${where}, in gewoon Nederlands. Dit onderwerp heeft ${lessons.length} korte lessen in Vloertaal Werkregels: een verhaal, de regel, en dan kies je zelf wat je doet.</p>
<a class="cta" href="/?unit=${encodeURIComponent(unit.id)}">Oefen dit in Vloertaal →</a>
${lessonHtml}
<section aria-labelledby="note"><h2 id="note">Goed om te weten</h2><p>${esc(disclaimer)}</p></section>
<section aria-labelledby="more"><h2 id="more">Andere onderwerpen</h2>
<ul class="lines">${siblings.map((p) => `<li><a href="${p.path}">${esc(p.unit.title)}</a></li>`).join('')}</ul>
<p><a href="${index}">Alle werkregels${country === 'be' ? ' in België' : ''}</a></p></section>
<a class="cta" href="/?unit=${encodeURIComponent(unit.id)}">Oefen dit in Vloertaal →</a>
<footer>${linkRows()}</footer>`,
  );
}
