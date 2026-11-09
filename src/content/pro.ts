import { COMMUNICATION } from './communication';
import { aboutSection, CONTACT_EMAIL, PRO_TITLE, STORY_DATE } from './about';
import { updateDate } from './updateDate';

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
  /** A paragraph before the others, as plain text (no mail link of its own): the owner's request. */
  lead?: string;
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
  /** The drawer the section folds into (PRO_DRAWERS); none = always open. */
  drawer?: ProDrawerId;
}

export type ProDrawerId = 'use' | 'background' | 'privacy';

/**
 * The page was twelve open sections, about twenty phone screens (the owner, 9 November 2026: "heel
 * veel tekst"). What Vloertaal is and how to reach us stay open; the rest folds into these three
 * drawers, in this order. Three of one kind: the list exception of "at most three things to tap".
 */
export const PRO_DRAWERS: { id: ProDrawerId; emoji: string; title: string }[] = [
  { id: 'use', emoji: '👥', title: 'Zo zet je het in' },
  { id: 'background', emoji: '👋', title: 'Achtergrond' },
  { id: 'privacy', emoji: '🔒', title: 'Privacy en testen' },
];

export type ProBlock =
  | { kind: 'open'; section: ProSection }
  | { kind: 'drawer'; id: ProDrawerId; emoji: string; title: string; sections: ProSection[] };

/** The page in order: the first open section, the drawers, then the other open sections. */
export function proLayout(sections: ProSection[] = proSections): ProBlock[] {
  const open = sections.filter((s) => !s.drawer);
  const drawers: ProBlock[] = PRO_DRAWERS
    .map((d) => ({ kind: 'drawer' as const, ...d, sections: sections.filter((s) => s.drawer === d.id) }))
    .filter((d) => d.sections.length > 0);
  return [
    ...open.slice(0, 1).map((section) => ({ kind: 'open' as const, section })),
    ...drawers,
    ...open.slice(1).map((section) => ({ kind: 'open' as const, section })),
  ];
}

export { PRO_TITLE };

/**
 * Under the title, before anything else: what Vloertaal is, in one sentence a job coach can repeat
 * after hearing it once (positioning of 8 November 2026: for whoever keeps a placement going, not a
 * language app). "Kandidaten" is the coaches' and recruiters' own word; "werkvloer" covers both the
 * language and the unwritten rules. The second sentence is for whoever asks why.
 */
/**
 * "In drie stappen": right under the pitch, before the demo and everything else, so a coach who
 * wants to start reads how first (review, 9 November 2026: the page opened with a request to review
 * the app, and "Zo zet je het in" was folded away). The same on the site and in the app.
 */
export const COACH_STEPS_TITLE = 'In drie stappen';
export const COACH_STEPS: { lead: string; text: string }[] = [
  { lead: 'Stuur de link, of print het briefje.', text: 'Stuur de link in de taal van je kandidaat, bijvoorbeeld vloertaal.nl/pl. Of print op vloertaal.nl/briefje een A4 met een QR-code. Spreekt je kandidaat al Nederlands? Dan is er een briefje in het Nederlands.' },
  { lead: 'Doe samen de eerste les.', text: 'Een paar minuten, op de eigen telefoon. Daarna oefent je kandidaat zelf, een paar minuten per dag.' },
  { lead: 'Kijk elke week samen naar de kaart.', text: 'Je kandidaat tikt op Hulp en dan op “Voor je begeleider”, en kiest zelf wat je ziet. Praat over wat lukte en wat lastig was. Past een onderwerp bij het werk? Stuur de link van dat onderwerp (bij “Zo zet je het in”). Die werkt in Taal en in Werkregels.' },
];

export const COACH_PITCH = 'Een gratis app die kandidaten de werkvloer uitlegt, in hun eigen taal.';
export const COACH_WHY = 'Zodat een plaatsing niet stukloopt op een instructie of een ongeschreven regel.';

/**
 * "Stuur door aan een collega" (the owner's request, 9 November 2026: more exposure, through the
 * coaches first, as one coach reaches many candidates). From one coach to another, so in their
 * words, not the owner's; the link is the professionals' page (src/lib/paths.ts COACH_PATH).
 */
export const COACH_SHARE = {
  title: 'Vloertaal',
  text: `Misschien iets voor jouw kandidaten: Vloertaal. ${COACH_PITCH}`,
  // "via=begeleider": an arrival through this link is counted (src/lib/count.ts countArrival).
  url: 'https://vloertaal.nl/voor-begeleiders/?via=begeleider',
} as const;

/** The same message as a WhatsApp and a mail link (the website has no share sheet of its own). */
export function coachShareLinks(): { whatsapp: string; mail: string } {
  const message = `${COACH_SHARE.text} ${COACH_SHARE.url}`;
  return {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(message)}`,
    mail: `mailto:?subject=${encodeURIComponent(COACH_SHARE.title)}&body=${encodeURIComponent(message)}`,
  };
}

/**
 * After the pitch: the question, so whoever arrives (for example from a poster) sees at once
 * what we ask. Modest, as a question; what Vloertaal is follows in 'p.what', the reason in 'p.story'.
 */
export const PRO_LEAD = 'Hoi, ik ben Xavier. Ik ben op dit moment bezig met het bouwen van Vloertaal, een oefenapp voor Nederlands op het werk. Graag zou ik daar de blik van professionals op willen: taalprofessionals, en experts op het gebied van de arbeidsmarkt en wet- en regelgeving. Zou je de app eens willen bekijken en laten weten wat beter kan, inhoudelijk of didactisch? En als het past: zou je deelnemers ermee willen laten oefenen? De app is grotendeels met behulp van AI gebouwd en nog niet door vakmensen nagekeken. Juist daarom is elke opmerking waardevol. Reageren kan via hoi@vloertaal.nl of via het vlaggetje Melden in een les.';

/** 'p.what': what Vloertaal is, for someone who does not know it yet (it was the lead). */
const WHAT = 'Vloertaal is een gratis web-app waarmee andertaligen en laaggeletterden oefenen voor hun werk. De lessen zijn kort en draaien om woorden, zinnen en gesprekjes uit de praktijk van de werkvloer, met uitleg in veertien hulptalen of in eenvoudig Nederlands dat de telefoon voorleest. Het gaat daarbij niet alleen om taal, maar ook om de geschreven en ongeschreven regels van het werk: van contract, loonstrook en ziekmelden tot de omgangsvormen op de werkvloer. Een account is niet nodig, en de app werkt op elke telefoon.';

/** 'p.what', second paragraph: modest about its place, and that nobody earns from it. */
const WHAT_PLACE = 'Vloertaal is nadrukkelijk bedoeld als aanvulling op een taalcursus of taalcoach, niet als vervanging. Er wordt niets aan verdiend: geen reclame, geen abonnement, en er worden geen gegevens verkocht.';

/**
 * 'p.what', third paragraph: where Vloertaal fits beside what coaches already use (the owner's
 * request, 4 November 2026). Facts only, no judgement of the others, and names without links: their
 * addresses were not checked from here.
 */
export const WHAT_BESIDE = 'Vloertaal past naast wat er al is, zoals Oefenen.nl, NedBox (in Vlaanderen), een taalbuddy (bijvoorbeeld via Taal Doet Meer of Het Begint met Taal), een Taalhuis of een NT2-les. Vloertaal is een oefenmaatje voor de werkvloer: kort oefenen op de eigen telefoon, met de woorden en zinnen van het werk. Het is geen vervanging van les. Informatie over werken in Nederland in meer talen staat op Work in NL, van het ministerie van Sociale Zaken en Werkgelegenheid.';

/**
 * 'p.story': the reason, written for professionals (the learner's About keeps its own plain text,
 * 'a.story'). No second "Hoi, ik ben Xavier": the lead already says it. The owner's own words
 * (8 November 2026), the frustration named so a job coach recognises it.
 */
export const PRO_STORY = 'In mijn werk begeleid ik kandidaten naar en op het werk. Helaas loopt een plaatsing wel eens stuk. En taal is hierin vaak een grote factor. Iemand begrijpt een instructie niet goed, of durft niet te vragen wat iets betekent. En om eerlijk te zijn: dat kan me frustreren. “Wat als we meer hadden ingezet op taal en dan specifiek gericht op werk?” Vloertaal is een poging om dat iets makkelijker te maken: de taal van het werk oefenen, op de eigen telefoon, naast wat er al is. Ik bouw de app in mijn vrije tijd. De app zou ik graag samen verder ontwikkelen: met professionals, werkgevers en uiteraard de doelgroep zelf.';

/** 'p.story', second paragraph: the costs, and the question about a subsidy or fund. */
export const PRO_COSTS = 'De kosten zijn op dit moment nog beperkt. Als ze hoger worden, is een subsidie of fonds waarschijnlijk nodig, en daar zou ik graag hulp bij hebben. Ken je iemand die me daarbij zou kunnen helpen? Dan hoor ik dat graag.';

const mission = aboutSection('a.mission');
const story = aboutSection('a.story');
const beta = aboutSection('a.beta');
const who = aboutSection('a.who');

/**
 * The Werkregels lessons made for the Entree course (docs/entree-aanvulling.md), by their titles in
 * the app (tests/proPages.test.ts checks that each is a Werkregels unit).
 */
export const ENTREE_UNITS = ['Stage lopen', 'Rekenen op je werk', 'Je werk goed afronden', 'Werken in de winkel', 'Digitaal op je werk', 'Meedoen in Nederland', 'Duurzaam werken'] as const;

export const proSections: ProSection[] = [
  {
    // What it is and the mission in one block, before the reason (the story).
    id: 'p.what', emoji: mission.emoji, title: 'Wat is Vloertaal?',
    body: [WHAT, WHAT_PLACE, WHAT_BESIDE],
  },
  {
    // The owner's reason, for professionals, signed and dated as on Over; it leads into the test version.
    drawer: 'background', id: 'p.story', emoji: story.emoji, title: story.nl.title,
    body: [PRO_STORY, PRO_COSTS, `${story.signed} · ${updateDate(STORY_DATE)}`],
  },
  {
    drawer: 'privacy', id: 'p.beta', emoji: beta.emoji, title: 'Een testversie: wie test er?',
    body: [
      beta.nl.body,
      'We testen in kleine groepen: leerlingen oefenen een week op hun eigen telefoon, met hun eigen begeleider erbij. Alle lessen staan open voor iedereen. Je hebt geen code of account nodig.',
    ],
    lines: [
      { lead: 'Fout gezien in een les?', text: 'Zet eerst de knop Melden aan: open vloertaal.nl/?test, of tik onderaan bij Over op de regel over Melden. Tik dan in de les bovenaan op het vlaggetje Melden. Dan opent een mail aan ons, met de plek in de app er al in: de les, de stap en de hulptaal. Schrijf erbij wat je zag. Een schermafbeelding helpt.' },
    ],
  },
  {
    drawer: 'background', id: 'p.who', emoji: who.emoji, title: who.nl.title,
    body: ['Vloertaal heeft twee lespaden. De leerling kiest er een bij de eerste keer, met de taal.'],
    lines: [
      { lead: 'Taal.', text: `${who.nl.body} Zonder hulptaal is de uitleg in eenvoudig Engels.` },
      { lead: 'Werkregels.', text: `${who.nlRules!.body} Alles in eenvoudig Nederlands, en de telefoon leest voor. Kies bij de start “Ik spreek al Nederlands”.` },
    ],
    site: [{ text: 'Werkregels.', href: '/werkregels/' }],
  },
  {
    drawer: 'background', id: 'p.voices', emoji: '🔊', title: 'De stemmen en de bronnen',
    body: [
      'Elk personage heeft een eigen Nederlandse stem: Bram praat met de stem van Thijmen, Henk met Daniel, Amina met Ariël en Jada met Noa. Deze stemmen zijn gemaakt met AI (ElevenLabs). Heeft een zin nog geen opname? Dan hoor je de stem van je eigen telefoon of computer.',
      'De tips over regels en rechten zijn geschreven met de informatie van de overheid en officiële instanties, zoals de Rijksoverheid, UWV, de Nederlandse Arbeidsinspectie, de Belastingdienst en het Juridisch Loket. De teksten zijn bijgewerkt in oktober 2026. Het blijft algemene informatie, geen juridisch advies. De bronnen van de cijfers staan hieronder bij de feiten.',
    ],
  },
  {
    drawer: 'privacy', id: 'p.privacy', emoji: '🔒', title: 'Privacy: geen account, weinig tellen',
    body: [
      'Een leerling heeft geen account nodig: geen naam, geen e-mailadres, geen wachtwoord. Wat een leerling leert, staat alleen op de eigen telefoon of computer. Wij kunnen dat niet zien, en jij als begeleider ook niet: je ziet alleen wat de leerling zelf laat zien. Wil je weten hoe het gaat? Vraag of de leerling de begeleiderskaart wil laten zien (Instellingen › Taal en ik › “Laat zien hoe het gaat”). Die kaart maakt de telefoon zelf, als plaatje. De leerling kiest zelf: laten zien, bewaren of sturen. De certificaten laten zien welke onderwerpen af zijn.',
      // The rules for whoever asks to see the card, above all an employer (the owner's request,
      // 4 November 2026); the same three in GROEP_SAFE (src/lib/groepPage.ts).
      'Drie spelregels bij de kaart. Laten zien is vrijwillig: de leerling mag nee zeggen. Maak het geen verplichting, en gebruik de kaart niet voor een beoordeling, een contract of het loon. Houd je bij wie welk nummer is, bijvoorbeeld voor vloertaal.nl/groep? Dan verwerk je persoonsgegevens, en gelden daarvoor de regels van de privacywet (AVG).',
      'De toets “Wat ken je al?” werkt net zo. De uitslag, de antwoorden op “Durf je dit?” (vijf vragen over wat de leerling durft) en de opname van de stem van de leerling (om later “Jij toen” en “Jij nu” te horen) blijven alleen op het toestel. Wij krijgen die niet. Zo ook bij “Zeg het” in de lessen: de eerste opname van een zin blijft op het toestel, zodat de leerling die later bij “Toen en nu” naast een nieuwe hoort (hooguit 40 zinnen). Kijk samen met de leerling naar het uitslagscherm. Met “Voortgang wissen” zijn de lessen, de uitslag, de antwoorden en de opnames weg. De hulptaal, het land, de sector en de instellingen blijven staan. Echt alles wissen: wis in de browser de sitegegevens van vloertaal.nl, en verwijder de app als die op het beginscherm staat.',
      'Spreken met “Laat de telefoon luisteren (proef)”: dit staat standaard uit, en de leerling kan het alleen aanzetten op een telefoon die Nederlands zelf kan herkennen, zonder internet. De app gebruikt de herkenning alleen als de browser bevestigt dat die op het toestel gebeurt (processLocally). Kan dat niet, dan is de proef er niet. Er gaat geen geluid en geen tekst naar ons of naar anderen. De telefoon zegt alleen of hij de zin verstond, nooit een cijfer of “fout”.',
      // All that src/lib/count.ts sends, as /privacy says it: since 4 November 2026 also the start
      // (once per phone) and the answer to "Gelukt?" (src/lib/workTry.ts), which this "Alleen" left out.
      'Wat telt de app? Alleen hoe vaak een les begint, stopt of af is: welke les, in welk kwart iemand stopte, en ongeveer hoeveel minuten een les duurde. Hoeveel telefoons de app voor het eerst openen en de vragen van de start afmaken (tot en met het land): elke telefoon telt dat één keer, zonder wat de leerling koos. Of leerlingen terugkomen: elke telefoon telt één keer de 1e, 2e, 7e, 14e en 28e dag waarop de leerling een les deed, alleen met dat getal, zonder datum of nummer. En hoe vaak de toets “Wat ken je al?” begint en af is (instap of eind), zonder de uitslag. Het antwoord op “Heb je dit op je werk gezegd?”: alleen “ja” of “nog niet”. Of Vloertaal wordt doorgestuurd: alleen dát het gebeurt en vanaf welke plek (deze pagina, na de demo, de collegakaart), en één keer als iemand zo’n gedeelde link opent; niet naar wie. Dat gaat zonder cookies, met GoatCounter. En of de app ergens een fout geeft: de soort fout, een korte code en een opgeschoonde foutmelding uit de code, nooit wat de leerling typte (hooguit drie per bezoek). Er gaat niets mee over de leerling: geen hulptaal, geen sector, geen naam en geen nummer.',
      'De leerling kan het tellen uitzetten bij Instellingen (“Anoniem meetellen”). Vraagt de browser om niet gevolgd te worden (Do Not Track of Global Privacy Control)? Dan telt de app niets. Melden opent een gewone mail: er gaat pas iets naar ons als de leerling die zelf verstuurt. Alles op een rij: vloertaal.nl/privacy.',
    ],
  },
  {
    drawer: 'background', id: 'p.facts', emoji: '📊', title: 'Waarom Nederlands leren? De feiten',
    body: [],
    extra: 'facts',
  },
  {
    drawer: 'use', id: 'p.group', emoji: '👥', title: 'Zo zet je het in, ook met een groep',
    body: [],
    lines: [
      { lead: 'Op de eigen telefoon.', text: 'Stuur de link in de taal van je leerling, bijvoorbeeld vloertaal.nl/pl voor Poolse collega’s: de app vraagt dan meteen ‘Polski?’. De leerling kiest zelf een sector. Geen account, geen app-winkel.' },
      // The printed note per language (src/lib/briefjePage.ts), 4 November 2026.
      { lead: 'Een briefje voor dag 1.', text: 'Print op vloertaal.nl/briefje een A4-briefje in de taal van je leerling. Daarop staat in die taal en in het Nederlands wat Vloertaal is, met de link en een QR-code. De leerling houdt het briefje.' },
      { lead: 'Elke dag een paar minuten.', text: 'Korte lessen werken beter dan af en toe lang. “Herhaal vandaag” brengt de woorden terug die nog lastig zijn.' },
      { lead: 'Met een groep.', text: 'Bij een taalcafé of in de klas: samen één les doen, daarna gaat ieder zelf verder. Per onderwerp is er een certificaat en een spiekkaartje met de belangrijkste zinnen.' },
      { lead: 'Oefen samen.', text: 'Na een les met een gesprekje staat op het eindscherm “Oefen samen”. Twee mensen gebruiken dan één telefoon. De een leest de collega uit het gesprekje, de ander antwoordt. Daarna wisselen ze van rol. De zin staat groot in beeld, met de vertaling eronder (die kan uit). Er is geen internet nodig, er wordt niets opgenomen en er is geen score. Het past bij een taalcafé of een klas: leerlingen oefenen in tweetallen, of met een vrijwilliger of docent. Het is een keuze, nooit verplicht.' },
      // "Kort en duidelijk" (l.clear and the job-interview question in Werkregels), 4 November 2026.
      { lead: 'Kort en duidelijk.', text: 'Praat iemand veel en snel? In veel talen vertel je eerst het hele verhaal, en pas aan het eind de kern. De les “Kort en duidelijk” (bij Samenwerken) oefent de Nederlandse volgorde: eerst het belangrijkste, dan de reden, dan een vraag. Helpt het niet? Zeg rustig: “Stop even. Wat is het belangrijkste?” Geef daarna de tijd.' },
      // Nodding without understanding (the owner's request, 5 November 2026; the review's "Snap je het?").
      { lead: 'Knikken is niet altijd begrijpen.', text: 'Wie zich schaamt, zegt vaak “ja” of knikt, ook als hij het niet verstond. Vraag daarom niet “Snap je het?”, maar “Wat ga je nu doen?” of “Laat eens zien”. Zeg erbij dat vragen goed is. In Vloertaal oefent “Herhaal vandaag” af en toe precies dat: eerlijk zeggen “Sorry, kunt u dat herhalen?”. Werkt een leerling zelf een nieuwe collega in? De les “Een nieuwe collega helpen” (bij Samenwerken) oefent het andersom: voordoen in stappen, laten nadoen en “Laat eens zien”.' },
      // Walking around with a problem, then stopping at once or getting angry (the owner's request, 5 November 2026; l.talkintime).
      { lead: 'Op tijd praten.', text: 'Wordt iemand stiller, of zegt die plots “ik stop”? Vraag “Hoe gaat het echt?” en maak tijd. Zoek samen een oplossing, zoals een andere dienst of een andere taak. De les “Praat er op tijd over” (bij Goed communiceren) oefent het vanaf de kant van de leerling: “Ik zit ergens mee. Heb je even tijd?”' },
      { lead: 'Op de werkvloer.', text: 'Nieuwe collega’s leren de woorden van hun eigen werk: de veiligheidsinstructie, beschermingsmiddelen en de toolbox, het rooster en het loonstrookje. Zo kun je een instructie of een eerste werkdag voorbereiden. Vloertaal vervangt geen veiligheidsinstructie of VCA-cursus: het helpt om die beter te begrijpen.' },
      { lead: 'Naar één onderwerp.', text: 'Elk onderwerp heeft een eigen link. Met de link opent Vloertaal meteen bij dat onderwerp, ook bij de eerste les. Een nieuwe gebruiker kiest eerst nog een taal. De link werkt voor iedereen: wie Werkregels volgt, komt bij hetzelfde onderwerp in Werkregels. Handig na een les over het loonstrookje of veiligheid. Hieronder staat elk onderwerp, per thema.' },
    ],
    site: [{ text: 'vloertaal.nl/pl', href: '/pl/' }, { text: 'vloertaal.nl/briefje', href: '/briefje/' }],
    extra: 'topics',
  },
  {
    // "Communicatie" (the owner's request, 5 November 2026): the lessons that train talking with
    // others, across the topics (src/content/communication.ts; the app marks them on the topic page).
    drawer: 'use', id: 'p.comm', emoji: '💬', title: 'Communicatie: de lessen op een rij',
    body: ['Praten met collega’s en je leidinggevende zit in veel onderwerpen. Deze lessen oefenen het: uitleggen wat er is, luisteren en terugvragen, rustig blijven, op tijd iets zeggen, feedback geven en krijgen. In de app staat bij elk van deze lessen “Communicatie”.'],
    lines: COMMUNICATION.map((t) => ({ lead: `${t.titleNl}.`, text: t.lessons.map(([, nl]) => nl).join(', ') + '.' })),
  },
  {
    // A sober example for a group (docs/weekplan.md), after the topic links it points to.
    drawer: 'use', id: 'p.weekplan', emoji: '🗓️', title: 'Een voorbeeld: vier weken met een groep',
    body: ['Een voorbeeld, geen voorschrift: pas het aan je groep aan. Reken op ongeveer drie keer tien minuten oefenen per week, op de eigen telefoon. Vloertaal is daarbij een aanvulling op je les of begeleiding.'],
    lines: [
      // The test comes after the first lesson (src/lib/toets.ts INSTAP_FROM_LESSONS), 4 November 2026.
      { lead: 'Week 1.', text: 'Samen beginnen. Ieder kiest een taal en doet de eerste les van thema 1, Starten. Daarna biedt de app de toets “Wat ken je al?” aan (ongeveer 10 minuten, zonder cijfer).' },
      { lead: 'Week 2 en 3.', text: 'Zelf oefenen, ongeveer drie keer tien minuten per week. Past een onderwerp bij het werk? Stuur de link van dat onderwerp (de links staan hierboven, bij “Zo zet je het in”).' },
      { lead: 'Elke week.', text: 'Kijk één keer samen naar de begeleiderskaart (Hulp › “Voor je begeleider”). De leerling laat de kaart zelf zien. Praat over wat lukte en wat lastig was. De kaart geeft geen cijfer en geen niveau.' },
      { lead: 'Week 4.', text: 'De eindtoets. De app biedt die zelf aan na 4 weken of na 3 onderwerpen; hij staat ook bij Instellingen › Lessen › “Wat ken je al?”. Kijk daarna samen naar “Jij toen” en “Jij nu”.' },
      { lead: 'Werkregels.', text: 'Voor wie al Nederlands spreekt: hetzelfde ritme, zonder toets. De begeleiderskaart werkt ook daar.' },
      { lead: 'Voor de hele groep.', text: 'Neem de getallen van de kaarten over op vloertaal.nl/groep: onderwerpen af, dagen geoefend en de toets. Onderaan elke kaart staat een korte code met die getallen, die je kunt plakken. De pagina maakt de totalen van de groep, zoals het gemiddelde en hoeveel deelnemers terugkwamen. Zonder namen, en er gaat niets naar een server. Handig voor een verslag aan een gemeente of fonds.' },
    ],
    site: [{ text: 'Werkregels.', href: '/werkregels/' }, { text: 'vloertaal.nl/groep', href: '/groep/' }],
  },
  {
    // "Wat kun je nu?" (src/content/kunJeNu.ts, werkplan stap 2.6): the table follows (extra).
    drawer: 'use', id: 'p.kunjenu', emoji: '✅', title: 'Wat kun je nu? Zinnen per onderwerp',
    body: [
      'Bij elk onderwerp staan 2 of 3 korte zinnen over wat de leerling na de lessen kan, zoals “Ik kan zeggen dat ik ziek ben.” Ze staan op het certificaat-scherm, en als ze passen ook op het certificaat zelf. De begeleiderskaart laat zien hoeveel zinnen het zijn.',
      'Bij elke zin staat waar hij bij past: een niveau en een vaardigheid. Bij Taal is dat A1 of “op weg naar A2” van het ERK, bij Werkregels 1F. De Taal-route gaat van A0 naar A1, op weg naar A2. Wie hem afmaakt, heeft dus nog geen A2. Dat helpt om de app in je les in te passen. Het is geen officieel niveau en geen toets. De zinnen zijn nog niet nagekeken door een NT2-docent.',
    ],
    extra: 'kunjenu',
  },
  {
    drawer: 'use', id: 'p.entree', emoji: '🎓', title: 'Entree en mbo',
    body: [
      'Vloertaal past naast de Entree-opleiding (mbo niveau 1) en andere mbo-opleidingen, als korte, vaste oefening: als voorbereiding op de stage (bpv), bij loopbaan en burgerschap, of als huiswerk van tien minuten. Het vervangt geen les. Elke les van Werkregels eindigt met een regel om in de klas te bespreken.',
      `Voor studenten die al Nederlands spreken, heeft Werkregels lessen speciaal voor Entree: ${ENTREE_UNITS.slice(0, -1).join(', ')} en ${ENTREE_UNITS.at(-1)}. Bij Taal staan onder meer “In de winkel” en “Rekenen: tijd, geld, maten”.`,
    ],
    site: [{ text: 'Werkregels', href: '/werkregels/' }],
  },
  {
    // Last, like the learner's About: the address is the page's mail link (one tap).
    id: 'p.contact', emoji: '✉️', title: 'Meedoen of meedenken?',
    // The owner's request to look along (PRO_LEAD), here at the end since 9 November 2026: a coach
    // who wants to start reads the three steps first. Without its own mail link (one is enough).
    lead: PRO_LEAD,
    body: [`Zou je Vloertaal willen gebruiken met een groep, of wil je meekijken? Of heb je een vraag of een fout gevonden? Mail dan naar ${CONTACT_EMAIL}.`],
  },
];
