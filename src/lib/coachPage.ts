import { aboutSections } from '../content/about';
import { COACH_FACTS } from '../content/facts';
import { THEMES } from '../content/themes';
import { languageNav } from './langPages';
import { APP_DATA, breadcrumbs, esc, plainPage, SITE } from './plainPage';
import { appLink, COACH_PATH } from './paths';
import { sectorNav } from './sectorPages';
import { TOPIC_LINKS } from './topicPages';

/**
 * vloertaal.nl/voor-begeleiders: for language coaches, teachers, employers and organisations
 * who search in Dutch (docs/seo-plan.md, step 5). How to use Vloertaal with a group, a direct link
 * to every topic (?unit=…, src/lib/unitLink.ts), and the facts with their sources (the same as
 * the app's own "Voor begeleiders" page). Made at build time from src/content.
 */

const about = (id: string) => aboutSections.find((s) => s.id === id)!.nl;


export function coachPage(): string {
  const title = 'Gratis NT2-oefenapp voor werk | Vloertaal voor begeleiders';
  const description = 'Zet Vloertaal in bij je taalcafé, NT2-les of op de werkvloer: gratis, zonder account, met uitleg in dertien talen en een directe link naar elk onderwerp.';
  const themes = THEMES.map((t) => ({ t, list: TOPIC_LINKS.filter((p) => p.theme.id === t.id) })).filter((g) => g.list.length > 0);
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Vloertaal voor begeleiders',
      url: `${SITE}${COACH_PATH}`,
      description,
      inLanguage: 'nl',
      audience: { '@type': 'EducationalAudience', educationalRole: 'teacher' },
      about: APP_DATA,
    },
    breadcrumbs({ name: 'Voor begeleiders', path: COACH_PATH }),
  ];
  return plainPage(
    { path: COACH_PATH, lang: 'nl', title, description, ogLocale: 'nl_NL', data },
    `<h1>Vloertaal voor begeleiders</h1>
<p class="lead">Voor taalcoaches, NT2-docenten, taalhuizen, werkgevers en uitzendbureaus. Vloertaal is een gratis web-app waarmee nieuwkomers en arbeidsmigranten Nederlands oefenen voor hun werk: korte lessen met woorden, zinnen en gesprekjes van de werkvloer, met uitleg in dertien talen. Geen account, geen reclame, en het werkt op elke telefoon. Een aanvulling op een taalcursus of taalcoach, geen vervanging.</p>
<a class="cta" href="/">Open Vloertaal →</a>
<section aria-labelledby="how"><h2 id="how">Zo zet je het in</h2>
<ul class="lines">
<li><strong>Op de eigen telefoon.</strong> Stuur de link in de taal van je leerling, bijvoorbeeld <a href="/pl/">vloertaal.nl/pl</a> voor Poolse collega’s: de app vraagt dan meteen ‘Polski?’. De leerling kiest zelf een sector. Geen account, geen app-winkel.</li>
<li><strong>Elke dag een paar minuten.</strong> Korte lessen werken beter dan af en toe lang. “Herhaal vandaag” brengt de woorden terug die nog lastig zijn.</li>
<li><strong>Naar één onderwerp.</strong> Elk onderwerp heeft een eigen link die het in de app opent (hieronder: “open”). Handig na een les over het loonstrookje of veiligheid.</li>
<li><strong>Bij een taalcafé of in de klas.</strong> Samen één les doen, daarna zelf verder. Een certificaat per onderwerp en een spiekkaartje met de belangrijkste zinnen.</li>
<li><strong>Wie al Nederlands spreekt</strong> kiest “Nederlands”: dan leert die de regels op het werk (<a href="/werkregels/">Werkregels</a>).</li>
</ul></section>
<section aria-labelledby="employers"><h2 id="employers">Voor werkgevers en uitzendbureaus</h2>
<p>Nieuwe collega’s die weinig Nederlands spreken, leren met Vloertaal de woorden van hun eigen werk: de veiligheidsinstructie, beschermingsmiddelen en de toolbox, het rooster en het loonstrookje. Per sector staan de woorden en zinnen op een eigen pagina, met vertaling:</p>
${sectorNav(undefined, 'Woorden per sector')}
<p>Zo kun je een instructie of een eerste werkdag voorbereiden. Vloertaal vervangt geen veiligheidsinstructie of VCA-cursus: het helpt om die beter te begrijpen.</p></section>
<section aria-labelledby="topics"><h2 id="topics">Een link naar elk onderwerp</h2>
${themes
  .map(({ t, list }) => `<h3>${esc(t.titleNl)}</h3><ul class="lines">${list.map((p) => `<li><a href="${p.path}">${esc(p.unit.titleNl)}</a> · <a href="${appLink(p.unit.id)}" rel="nofollow">open</a></li>`).join('')}</ul>`)
  .join('\n')}</section>
<section aria-labelledby="facts"><h2 id="facts">Waarom Nederlands leren helpt</h2>
${COACH_FACTS.map((f) => `<p>${esc(f.text)}</p><p><small>Bron: ${esc(f.source)}</small></p>`).join('\n')}</section>
<section aria-labelledby="free"><h2 id="free">${esc(about('a.mission').title)}</h2><p>${esc(about('a.mission').body)}</p></section>
<section aria-labelledby="privacy"><h2 id="privacy">${esc(about('a.free').title)}</h2><p>${esc(about('a.free').body)}</p></section>
<section aria-labelledby="beta"><h2 id="beta">${esc(about('a.beta').title)}</h2><p>${esc(about('a.beta').body)}</p></section>
<section aria-labelledby="contact"><h2 id="contact">Meedoen of meedenken?</h2><p>Wil je Vloertaal gebruiken met een groep, of heb je een vraag of een fout gevonden? Mail naar <a href="mailto:hoi@vloertaal.nl">hoi@vloertaal.nl</a>.</p></section>
<footer>
<h2>Per sector</h2>
${sectorNav()}
<h2>In de eigen taal van je leerlingen</h2>
${languageNav()}
<p><a href="/intro/">Waarom Vloertaal?</a> · <a href="/nieuw/">Wat is er nieuw?</a></p>
</footer>`,
  );
}
