import { aboutSection, CONTACT_EMAIL, PRO_TITLE } from './about';

/**
 * "Voor begeleiders en werkgevers": the page for professionals (language coaches, NT2 teachers,
 * taalhuizen, employers, agencies, mbo schools), in Dutch only. One source for both places it
 * shows, so they cannot drift apart:
 *  - in the app, from the button at the bottom of Over (src/components/Coaches.tsx);
 *  - on the site, vloertaal.nl/voor-begeleiders (src/lib/coachPage.ts, made at build time).
 * The learner's own About (src/content/about.ts aboutSections) keeps only what a learner needs.
 *
 * Texts are plain: the app shows at most three things to tap (here: the mail address; the topic
 * list is the named list exception), so a link is a website extra (`site`): on vloertaal.nl that
 * piece of text becomes a link, in the app it stays text.
 */
export interface ProLine {
  /** The start of the line, in bold. */
  lead: string;
  text: string;
}

export interface ProSection {
  id: string;
  emoji: string;
  title: string;
  /** Paragraphs. */
  body: string[];
  /** Lines with a bold start, after the paragraphs. */
  lines?: ProLine[];
  /** On the website, the first occurrence of `text` (in the body or the lines) links to `href`. */
  site?: { text: string; href: string }[];
  /**
   * What the page itself adds after the texts: the facts with their sources (src/content/facts.ts
   * COACH_FACTS), a link per topic (the app: share it; the site: open it), or the table of "Wat kun
   * je nu?" (src/content/kunJeNu.ts: topic, sentences, what they fit).
   */
  extra?: 'facts' | 'topics' | 'kunjenu';
}

export { PRO_TITLE };

/** Under the title: what Vloertaal is, for someone who does not know it yet. */
export const PRO_LEAD = 'Voor taalcoaches, NT2-docenten, taalhuizen, werkgevers, uitzendbureaus en scholen. Vloertaal is een gratis web-app waarmee nieuwkomers en arbeidsmigranten Nederlands oefenen voor hun werk: korte lessen met woorden, zinnen en gesprekjes van de werkvloer, met uitleg in dertien talen. Geen account, geen reclame, en het werkt op elke telefoon. Een aanvulling op een taalcursus of taalcoach, geen vervanging.';

const mission = aboutSection('a.mission');
const beta = aboutSection('a.beta');
const who = aboutSection('a.who');

/**
 * The Werkregels lessons made for the Entree course (docs/entree-aanvulling.md), by their titles in
 * the app (tests/proPages.test.ts checks that each is a Werkregels unit).
 */
export const ENTREE_UNITS = ['Stage lopen', 'Rekenen op je werk', 'Je werk goed afronden', 'Werken in de winkel', 'Digitaal op je werk', 'Meedoen in Nederland', 'Duurzaam werken'] as const;

export const proSections: ProSection[] = [
  {
    id: 'p.mission', emoji: mission.emoji, title: mission.nl.title,
    body: [mission.nl.body],
  },
  {
    id: 'p.beta', emoji: beta.emoji, title: 'Een testversie: wie test er?',
    body: [
      beta.nl.body,
      'We testen in kleine groepen: leerlingen oefenen een week op hun eigen telefoon, met hun eigen begeleider erbij. Alle lessen staan open voor iedereen. Je hebt geen code of account nodig.',
    ],
    lines: [
      { lead: 'Fout gezien in een les?', text: 'Tik bovenaan op het vlaggetje Melden. Dan opent een mail aan ons, met de plek in de app er al in: de les, de stap en de hulptaal. Schrijf erbij wat je zag. Een schermafbeelding helpt. Leerlingen kunnen dit ook zelf.' },
    ],
  },
  {
    id: 'p.who', emoji: who.emoji, title: who.nl.title,
    body: ['Vloertaal heeft twee lespaden. De leerling kiest er een bij de eerste keer, met de taal.'],
    lines: [
      { lead: 'Taal.', text: `${who.nl.body} Zonder hulptaal is de uitleg in eenvoudig Engels.` },
      { lead: 'Werkregels.', text: `${who.nlRules!.body} Alles in eenvoudig Nederlands, en de telefoon leest voor. Kies bij de taal “Nederlands”.` },
    ],
    site: [{ text: 'Werkregels.', href: '/werkregels/' }],
  },
  {
    id: 'p.voices', emoji: '🔊', title: 'De stemmen en de bronnen',
    body: [
      'Elk personage heeft een eigen Nederlandse stem: Bram praat met de stem van Thijmen, Henk met Daniel, Amina met Ariël en Jada met Noa. Deze stemmen zijn opgenomen met ElevenLabs. Heeft een zin nog geen opname? Dan hoor je de stem van je eigen telefoon of computer.',
      'De tips over regels en rechten zijn geschreven met de informatie van de overheid en officiële instanties, zoals de Rijksoverheid, UWV, de Nederlandse Arbeidsinspectie, de Belastingdienst en het Juridisch Loket. De teksten zijn bijgewerkt in oktober 2026. Het blijft algemene informatie, geen juridisch advies. De bronnen van de cijfers staan hieronder bij de feiten.',
    ],
  },
  {
    id: 'p.privacy', emoji: '🔒', title: 'Privacy: geen account, weinig tellen',
    body: [
      'Een leerling heeft geen account nodig: geen naam, geen e-mailadres, geen wachtwoord. Wat een leerling leert, staat alleen op de eigen telefoon of computer. Wij kunnen dat niet zien, en jij als begeleider ook niet: je ziet alleen wat de leerling zelf laat zien. Wil je weten hoe het gaat? Vraag de leerling om de begeleiderskaart te laten zien (Instellingen › Taal en ik › “Laat zien hoe het gaat”). Die kaart maakt de telefoon zelf, als plaatje. De leerling kiest of hij die laat zien, bewaart of stuurt. De certificaten laten zien welke onderwerpen af zijn.',
      'De toets “Wat ken je al?” werkt net zo. De uitslag en de opname van de stem van de leerling (om later “Jij toen” en “Jij nu” te horen) blijven alleen op het toestel. Wij krijgen die niet. Kijk samen met de leerling naar het uitslagscherm. Met “Voortgang wissen” is alles weg, ook de opnames.',
      'Wat telt de app? Alleen hoe vaak een les begint, stopt of af is: welke les, in welk kwart iemand stopte, en ongeveer hoeveel minuten een les duurde. En hoe vaak de toets “Wat ken je al?” begint en af is (instap of eind), zonder de uitslag. Dat gaat zonder cookies, met GoatCounter. Er gaat niets mee over de leerling: geen hulptaal, geen sector, geen naam en geen nummer.',
      'De leerling kan het tellen uitzetten bij Instellingen (“Anoniem meetellen”). Vraagt de browser om niet gevolgd te worden (Do Not Track of Global Privacy Control)? Dan telt de app niets. Melden opent een gewone mail: er gaat pas iets naar ons als de leerling die zelf verstuurt.',
    ],
  },
  {
    id: 'p.facts', emoji: '📊', title: 'Waarom Nederlands leren? De feiten',
    body: [],
    extra: 'facts',
  },
  {
    id: 'p.group', emoji: '👥', title: 'Zo zet je het in, ook met een groep',
    body: [],
    lines: [
      { lead: 'Op de eigen telefoon.', text: 'Stuur de link in de taal van je leerling, bijvoorbeeld vloertaal.nl/pl voor Poolse collega’s: de app vraagt dan meteen ‘Polski?’. De leerling kiest zelf een sector. Geen account, geen app-winkel.' },
      { lead: 'Elke dag een paar minuten.', text: 'Korte lessen werken beter dan af en toe lang. “Herhaal vandaag” brengt de woorden terug die nog lastig zijn.' },
      { lead: 'Met een groep.', text: 'Bij een taalcafé of in de klas: samen één les doen, daarna gaat ieder zelf verder. Per onderwerp is er een certificaat en een spiekkaartje met de belangrijkste zinnen.' },
      { lead: 'Op de werkvloer.', text: 'Nieuwe collega’s leren de woorden van hun eigen werk: de veiligheidsinstructie, beschermingsmiddelen en de toolbox, het rooster en het loonstrookje. Zo kun je een instructie of een eerste werkdag voorbereiden. Vloertaal vervangt geen veiligheidsinstructie of VCA-cursus: het helpt om die beter te begrijpen.' },
      { lead: 'Naar één onderwerp.', text: 'Elk onderwerp heeft een eigen link. Met de link opent Vloertaal meteen bij dat onderwerp, ook bij de eerste les. Een nieuwe gebruiker kiest eerst nog een taal. Handig na een les over het loonstrookje of veiligheid. Hieronder staat elk onderwerp, per thema.' },
    ],
    site: [{ text: 'vloertaal.nl/pl', href: '/pl/' }],
    extra: 'topics',
  },
  {
    // A sober example for a group (docs/weekplan.md), after the topic links it points to.
    id: 'p.weekplan', emoji: '🗓️', title: 'Een voorbeeld: vier weken met een groep',
    body: ['Een voorbeeld, geen voorschrift: pas het aan je groep aan. Reken op ongeveer drie keer tien minuten oefenen per week, op de eigen telefoon. Vloertaal is daarbij een aanvulling op je les of begeleiding.'],
    lines: [
      { lead: 'Week 1.', text: 'Samen beginnen. Ieder kiest een taal en doet de toets “Wat ken je al?” (ongeveer 10 minuten, zonder cijfer). Daarna de eerste les van thema 1, Starten.' },
      { lead: 'Week 2 en 3.', text: 'Zelf oefenen, ongeveer drie keer tien minuten per week. Past een onderwerp bij het werk? Stuur de link van dat onderwerp (de links staan hierboven, bij “Zo zet je het in”).' },
      { lead: 'Elke week.', text: 'Kijk één keer samen naar de begeleiderskaart (Instellingen › Taal en ik › “Laat zien hoe het gaat”). De leerling laat de kaart zelf zien. Praat over wat lukte en wat lastig was. De kaart geeft geen cijfer en geen niveau.' },
      { lead: 'Week 4.', text: 'De eindtoets. De app biedt die zelf aan na 4 weken of na 3 onderwerpen; hij staat ook bij Instellingen › Lessen › “Wat ken je al?”. Kijk daarna samen naar “Jij toen” en “Jij nu”.' },
      { lead: 'Werkregels.', text: 'Voor wie al Nederlands spreekt: hetzelfde ritme, zonder toets. De begeleiderskaart werkt ook daar.' },
    ],
    site: [{ text: 'Werkregels.', href: '/werkregels/' }],
  },
  {
    // "Wat kun je nu?" (src/content/kunJeNu.ts, werkplan stap 2.6): the table follows (extra).
    id: 'p.kunjenu', emoji: '✅', title: 'Wat kun je nu? Zinnen per onderwerp',
    body: [
      'Bij elk onderwerp staan 2 of 3 korte zinnen over wat de leerling na de lessen kan, zoals “Ik kan zeggen dat ik ziek ben.” Ze staan op het certificaat-scherm, en als ze passen ook op het certificaat zelf. De begeleiderskaart laat zien hoeveel zinnen het zijn.',
      'Bij elke zin staat waar hij bij past: een niveau en een vaardigheid. Bij Taal is dat A1 of A2 van het ERK, bij Werkregels 1F. Dat helpt om de app in je les in te passen. Het is geen officieel niveau en geen toets. Een NT2-docent kijkt de zinnen nog na.',
    ],
    extra: 'kunjenu',
  },
  {
    id: 'p.entree', emoji: '🎓', title: 'Entree en mbo',
    body: [
      'Vloertaal past naast de Entree-opleiding (mbo niveau 1) en andere mbo-opleidingen, als korte, vaste oefening: als voorbereiding op de stage (bpv), bij loopbaan en burgerschap, of als huiswerk van tien minuten. Het vervangt geen les. Elke les van Werkregels eindigt met een regel om in de klas te bespreken.',
      `Voor studenten die al Nederlands spreken, heeft Werkregels lessen speciaal voor Entree: ${ENTREE_UNITS.slice(0, -1).join(', ')} en ${ENTREE_UNITS.at(-1)}. Bij Taal staan onder meer “In de winkel” en “Rekenen: tijd, geld, maten”.`,
    ],
    site: [{ text: 'Werkregels', href: '/werkregels/' }],
  },
  {
    // Last, like the learner's About: the address is the page's mail link (one tap).
    id: 'p.contact', emoji: '✉️', title: 'Meedoen of meedenken?',
    body: [`Wil je Vloertaal gebruiken met een groep, meedoen aan de test, of heb je een vraag of een fout gevonden? Mail naar ${CONTACT_EMAIL}.`],
  },
];
