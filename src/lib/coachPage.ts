import { KEYS } from './storageKeys';
import { CONTACT_EMAIL } from '../content/about';
import { COUNTER_SITE, VIA } from './countSite';
import { COACH_FACTS } from '../content/facts';
import { COACH_PITCH, COACH_STEPS, COACH_STEPS_TITLE, COACH_WHY, coachShareLinks, PRO_LEAD, proLayout, proSections, type ProBlock, type ProSection } from '../content/pro';
import { THEMES } from '../content/themes';
import { KUN_REGELS, KUN_TAAL, niveauLabel, type KunOnderwerp } from '../content/kunJeNu';
import { languageNav } from './langPages';
import { APP_DATA, breadcrumbs, esc, plainPage, SITE } from './plainPage';
import { appLink, ASK_PATH, COACH_PATH, GROEP_PATH } from './paths';
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

/** "Wat kun je nu?": a table per track (topic | sentences | fits). */
function kunTables(): string {
  const table = (naam: string, lijst: KunOnderwerp[]) => `<h3>${esc(naam)}</h3>
<table><thead><tr><th scope="col">Onderwerp</th><th scope="col">Zinnen</th><th scope="col">Past bij</th></tr></thead><tbody>${lijst
    .flatMap((o) => o.zinnen.map((z, i) => `<tr>${i === 0 ? `<th scope="row" rowspan="${o.zinnen.length}">${esc(o.titel)}</th>` : ''}<td>${esc(z.nl)}</td><td>${esc(`${niveauLabel(z)} · ${z.vaardigheid}`)}</td></tr>`))
    .join('')}</tbody></table>`;
  return [table('Taal', KUN_TAAL), table('Werkregels', KUN_REGELS)].join('\n');
}

function section(s: ProSection): string {
  const id = s.id.slice(2);
  let inner = [
    ...(s.lead ? [`<p>${text(s.lead)}</p>`] : []),
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
      : s.extra === 'kunjenu'
        ? kunTables()
        : '';
  return `<section aria-labelledby="${id}"><h2 id="${id}">${esc(s.title)}</h2>
${[inner, extra].filter(Boolean).join('\n')}</section>`;
}

/** "In drie stappen" (src/content/pro.ts COACH_STEPS), first on the page, with the two addresses as links. */
function stepsSection(): string {
  const linked = (t: string) => text(t)
    .replace('vloertaal.nl/pl', '<a href="/pl/">vloertaal.nl/pl</a>')
    .replace('vloertaal.nl/briefje', '<a href="/briefje/">vloertaal.nl/briefje</a>');
  return `<section aria-labelledby="steps"><h2 id="steps">${esc(COACH_STEPS_TITLE)}</h2>
<ol class="lines">${COACH_STEPS.map((st) => `<li><strong>${esc(st.lead)}</strong> ${linked(st.text)}</li>`).join('')}</ol></section>`;
}

/** An open section, or a drawer (closed at first) with its sections inside (src/content/pro.ts proLayout). */
function block(b: ProBlock): string {
  if (b.kind === 'open') return section(b.section);
  return `<details class="drawer"><summary>${esc(b.title)}</summary>
${b.sections.map(section).join('\n')}
</details>`;
}

/** "Stuur door aan een collega": WhatsApp or mail, the message ready (src/content/pro.ts COACH_SHARE). */
function shareLine(): string {
  const { whatsapp, mail } = coachShareLinks();
  return `<p class="share"><strong>Stuur door aan een collega:</strong> <a href="${esc(whatsapp)}" data-deel="whatsapp">WhatsApp</a> · <a href="${esc(mail)}" data-deel="mail">Mail</a></p>`;
}

/**
 * The page's only counting, under the app's rules (src/lib/count.ts): an arrival through a shared
 * link ("?via=begeleider") and a tap on WhatsApp or Mail above. Only on vloertaal.nl, not with
 * "Anoniem meetellen" off on this phone or when the browser asks not to be tracked; only where,
 * never who (the owner's request, 9 November 2026: does sending it on work?).
 */
function shareCounting(): string {
  const via = JSON.stringify(VIA);
  return `<script>(function(){try{if(!/^(www\\.)?vloertaal\\.nl$/.test(location.hostname)||navigator.doNotTrack==='1'||navigator.globalPrivacyControl===true||localStorage.getItem('${KEYS.countOff}')==='1')return}catch(e){return}
function c(p,t){try{fetch('${COUNTER_SITE}/count?p='+encodeURIComponent(p)+'&e=true&t='+t,{mode:'no-cors',keepalive:true,credentials:'omit',cache:'no-store',referrerPolicy:'no-referrer'}).catch(function(){})}catch(e){}}
var v=new URLSearchParams(location.search).get('via');if(${via}.indexOf(v)>-1)c('/e/via/'+v,'via');
document.querySelectorAll('a[data-deel]').forEach(function(a){a.addEventListener('click',function(){c('/e/deel/website-'+a.getAttribute('data-deel'),'deel')})})})()</script>`;
}

export function coachPage(): string {
  const title = 'Vloertaal voor jobcoaches: de werkvloer in eigen taal';
  const description = `${COACH_PITCH} ${COACH_WHY}`;
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
<p class="lead"><strong>${esc(COACH_PITCH)}</strong> ${esc(COACH_WHY)}</p>
<a class="cta" href="/">Open Vloertaal →</a>
${stepsSection()}
${shareLine()}
${proLayout().map(block).join('\n')}
<footer>
<h2>Per sector</h2>
${sectorNav()}
<h2>In de eigen taal van je leerlingen</h2>
${languageNav()}
<p><a href="${GROEP_PATH}">Groepsoverzicht (zonder namen)</a> · <a href="/intro/">Waarom Vloertaal?</a> · <a href="/nieuw/">Wat is er nieuw?</a></p>
</footer>
${shareCounting()}`,
  );
}

/** The blocks of the short page, by id, in the order of the professionals page. */
export const ASK_SECTION_IDS = ['p.what', 'p.story'] as const;

/**
 * vloertaal.nl/meekijken: the short page a poster's QR code points to. Only the question (the
 * lead), what Vloertaal is and why, from the same texts as /voor-begeleiders, so the two cannot
 * drift apart; a link leads to the full page. Not for search results (noindex, not in the
 * sitemap): /voor-begeleiders is the page that should be found.
 */
export function askPage(): string {
  const sections = proSections.filter((s) => (ASK_SECTION_IDS as readonly string[]).includes(s.id));
  return plainPage(
    {
      path: ASK_PATH, lang: 'nl', ogLocale: 'nl_NL', noindex: true,
      title: 'Zou je willen meekijken? | Vloertaal',
      description: 'Vloertaal is een gratis oefenapp voor het werk, nog in ontwikkeling. Zou je willen meekijken?',
    },
    `<h1>Zou je willen meekijken?</h1>
<p class="lead">${text(PRO_LEAD)}</p>
<a class="cta" href="/">Open Vloertaal →</a>
${sections.map(section).join('\n')}
<footer>
<p><a href="${COACH_PATH}">Meer voor begeleiders: zo zet je het in, privacy en alle onderwerpen →</a></p>
</footer>`,
  );
}
