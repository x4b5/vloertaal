import { linkRows } from './linkRows';
import { PRIVACY_PATH } from './paths';
import { breadcrumbs, esc, plainPage, SITE } from './plainPage';

/**
 * vloertaal.nl/privacy: the privacy statement, in plain Dutch (A2 where it can). It says exactly
 * what the code does, so change it with the code: src/lib/count.ts (the lessons counter),
 * src/lib/errors.ts (errors), src/lib/listen.ts (speech on the device), src/lib/report.ts (Melden
 * by e-mail), src/lib/reminder.ts (the calendar). docs/privacy.md lists those places.
 * What "Voortgang wissen" keeps is the reset in src/App.tsx (onReset): change both together.
 */

/** When this text last changed. A change also goes in the logbook (src/content/updates.ts). */
export const PRIVACY_DATE = '2026-11-05';

export interface PrivacySection { id: string; title: string; paras: string[] }

export const PRIVACY: readonly PrivacySection[] = [
  {
    id: 'kort',
    title: 'In het kort',
    paras: [
      'Je hebt geen account nodig. We vragen geen naam, geen e-mailadres en geen telefoonnummer.',
      'Wat je leert, staat alleen op je eigen telefoon of computer. Wij kunnen het niet zien.',
      'Vloertaal gebruikt geen cookies, geen reclame en geen sociale media. We verkopen geen gegevens.',
      'De app telt zonder naam hoeveel mensen beginnen, hoe vaak lessen gedaan worden, en of de app ergens een fout geeft. Dat kun je uitzetten.',
    ],
  },
  {
    id: 'toestel',
    title: 'Wat er op je telefoon of computer staat',
    paras: [
      'Je voortgang en je keuzes: je hulptaal, je land, waar je werkt, je lessen, je certificaten en je instellingen. Ook de uitslag van de toets “Wat ken je al?”, de opnames van je stem bij die toets, en de eerste opname van elke zin die je bij “Zeg het” zei. Dit staat in het geheugen van je browser, niet bij ons.',
      // What the reset keeps (src/App.tsx onReset), said plainly: "Alles weg?" promised more than it
      // does (the owner's request, 4 November 2026). Everything goes only with the browser's own wipe.
      'Kies je bij Instellingen “Voortgang wissen”? Dan zijn je lessen, je certificaten, de naam op je certificaten, de uitslag en de opnames van de toets, en de opnames van “Toen en nu” weg.',
      'Een paar dingen blijven staan, zodat je meteen opnieuw kunt beginnen: je hulptaal, je land, waar je werkt, je regio, je keuze bij “Vrouw of man?”, de dag waarop je begon en je instellingen.',
      'Wil je dat echt alles weg is? Wis dan in je browser de gegevens van de website vloertaal.nl (de sitegegevens). Staat Vloertaal als app op je telefoon? Verwijder de app dan ook.',
      'Maak je een back-up? Dan maakt je telefoon een bestand. Jij bepaalt waar dat bestand blijft.',
    ],
  },
  {
    id: 'tellen',
    title: 'Wat we tellen: anoniem meetellen',
    paras: [
      'Staat “Anoniem meetellen” aan? Dan stuurt de app een korte telling naar GoatCounter, een teller zonder cookies. Zo zien we welke lessen goed gaan en waar mensen stoppen.',
      'Per telling gaat alleen dit mee: wat er gebeurt (een les begint, stopt of is af; de toets begint of is af), welke les, in welk kwart je stopte, en ongeveer hoeveel minuten een les duurde. Niet de uitslag van de toets.',
      // The start, before lesson 1 (src/lib/count.ts countFirstOpen, countStartDone), the owner's
      // request, 4 November 2026. It comes before the switch can be found: say so, and what does stop it.
      'Bij de start telt de app twee dingen, één keer per telefoon: dat de app voor het eerst opent, en dat je klaar bent met de vragen van de start (tot en met de kleur). Alleen dat het gebeurde. Niet wat je koos: geen taal, geen werk, geen land, geen kleur.',
      'Het eerste openen telt de app meteen, dus voordat je het tellen kunt uitzetten. Wil je dat niet? Vraag je browser dan om niet gevolgd te worden (zie hieronder). Je telefoon onthoudt wat al geteld is.',
      'De app telt ook of mensen terugkomen. Dat gebeurt één keer per telefoon: op je 1e, 2e, 7e, 14e en 28e dag met een les. Alleen dat getal gaat mee, geen datum. Je telefoon onthoudt welke dagen al geteld zijn.',
      'Vraagt de app “Heb je dit op je werk gezegd?”? Dan telt hij alleen je antwoord: “ja” of “nog niet”. Niet welke zin, niet wie.',
      'Geeft de app een fout? Dan telt hij ook dat: de soort fout, een korte code en een korte, opgeschoonde foutmelding uit de code. Geen tekst die jij hebt getypt, niet waar je was in de app. Hooguit drie fouten per bezoek.',
      'Er gaat nooit iets mee over jou: geen naam, geen hulptaal, geen land, geen sector, geen nummer en geen antwoorden. GoatCounter ziet bij elke telling je IP-adres en je browser, zoals elke website. Wij zien alleen de aantallen.',
      'Uitzetten kan bij Instellingen › “Anoniem meetellen”. Vraagt je browser om niet gevolgd te worden (Do Not Track of Global Privacy Control)? Dan telt de app niets.',
    ],
  },
  {
    id: 'spraak',
    title: 'Je stem',
    paras: [
      'Bij “Zeg het” neem je jezelf op. Die opname gaat nergens heen, en is weg als de oefening klaar is.',
      // "Toen en nu" (src/lib/firstVoice.ts), the owner's request, 5 November 2026.
      'Eén opname blijft wel: de eerste keer dat je een zin zegt. Die blijft op je telefoon of computer, zodat je later kunt vergelijken. Zeg je dezelfde zin een week later of nog later weer? Dan hoor je bij “Toen en nu” eerst je eerste keer, en dan nu. We sturen die opname nooit naar ons of naar anderen. We bewaren hooguit 40 zinnen. Met “Voortgang wissen” zijn ze weg.',
      // "Zeg het samen" (src/lib/chorus.ts), the owner's request, 5 November 2026: only a count and a yes.
      'Bij “Zeg het samen” zeg je de zin tegelijk met de stem. Dan neemt de app niets op. Je telefoon onthoudt alleen hoe vaak je na elkaar het inspreken overslaat (een getal), en of je de eerste spreekoefening al hebt gehad. Zo komt “Zeg het samen” als je het inspreken overslaat. Dit blijft op je telefoon of computer. Met “Voortgang wissen” is het weg.',
      'Bij de toets “Wat ken je al?” bewaart je telefoon je opnames, zodat je later “Jij toen” en “Jij nu” kunt horen. Ze blijven op je telefoon of computer. Met “Voortgang wissen” zijn ze weg.',
      '“Laat de telefoon luisteren (proef)” staat standaard uit. Zet je het aan? Dan gebruikt de app het alleen als je telefoon het Nederlands zelf kan herkennen, zonder internet. Er gaat geen geluid en geen tekst naar ons of naar anderen.',
    ],
  },
  {
    id: 'delen',
    title: 'Wat je zelf deelt',
    paras: [
      'De kaart bij “Laat zien hoe het gaat” maakt je telefoon zelf. Jij kiest of je die laat zien, bewaart of stuurt. Onderaan staat een korte code met dezelfde getallen, zonder naam. Je begeleider kan die overnemen op vloertaal.nl/groep. Die pagina rekent alleen op de computer of telefoon van je begeleider en stuurt niets naar ons.',
      '“Melden”, “Vraag of fout?” en “Is your language missing?” openen je eigen e-mail. Er gaat pas iets naar ons als jij de mail verstuurt. We gebruiken je mail alleen om te antwoorden en de app te verbeteren. Wil je dat we je mail wissen? Vraag het ons.',
      'Een herinnering in je agenda: kies je Google Agenda? Dan open je hun website, met de tekst van de herinnering. Kies je een agendabestand? Dan blijft het op je telefoon.',
      'In de Hulp-tab staan links naar andere organisaties. Op hun websites gelden hun eigen regels.',
    ],
  },
  {
    id: 'website',
    title: 'Waar de website staat',
    paras: [
      'De website vloertaal.nl staat bij statichost.eu, een bedrijf uit Stockholm (Zweden). Hun servers staan in Duitsland en Slovenië, dus alles blijft in de Europese Unie. Hun servers zien, zoals bij elke website, je IP-adres om de pagina’s te sturen. statichost bewaart het niet. Lettertypen, plaatjes en geluiden komen allemaal van vloertaal.nl zelf, niet van Google of andere partijen.',
      // The old address still works (docs/livegang.md): honest about who sees a visit there
      // (the owner's request, 4 November 2026). src/lib/count.ts counts on vloertaal.nl only.
      'Tot 2 november 2026 stond Vloertaal bij Vercel, een bedrijf uit de Verenigde Staten. Het oude adres vloertaal.vercel.app werkt nog. Open je Vloertaal via dat adres? Dan komen de pagina’s van Vercel, en ziet Vercel je IP-adres. Daar telt de app niets.',
      'Gebruik daarom vloertaal.nl. Je voortgang gaat niet vanzelf mee naar het nieuwe adres. Kies op het oude adres bij Instellingen “Bewaar je voortgang” › “Opslaan”. Kies daarna op vloertaal.nl “Terugzetten”.',
    ],
  },
  {
    // Why we may (AVG article 13: the legal ground), the owner's request, 4 November 2026.
    id: 'waarom',
    title: 'Waarom we dit mogen',
    paras: [
      'Het tellen zonder naam doen we omdat we de app beter willen maken: we zien welke lessen goed werken en waar het misgaat. In de wet heet dat een gerechtvaardigd belang. Het tellen gaat zonder naam, en je kunt het altijd uitzetten.',
      'Stuur je ons een mail? Dan gebruiken we die omdat jij ons zelf iets vraagt of meldt: om je te antwoorden en om de app te verbeteren.',
    ],
  },
  {
    id: 'rechten',
    title: 'Je rechten',
    paras: [
      'Over jou hebben we niets, behalve een mail die je ons zelf stuurt. Wil je weten wat we hebben? Wil je iets laten verbeteren of wissen? Mail naar hoi@vloertaal.nl.',
      'Wil je niet dat de app telt? Dan mag je daar bezwaar tegen maken. Het snelst gaat het zo: zet bij Instellingen “Anoniem meetellen” uit. Dan stopt het tellen meteen. Je mag ons ook mailen.',
      'Heb je een klacht over privacy? Mail ons eerst. Je hebt ook het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens (Nederland) of de Gegevensbeschermingsautoriteit (België).',
    ],
  },
];

/** "31 oktober 2026" */
export function dutchDate(iso: string): string {
  const months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${months[m - 1]} ${y}`;
}

export function privacyPage(): string {
  const title = 'Privacy | Vloertaal';
  const description = 'Vloertaal werkt zonder account en zonder cookies. Wat je leert, blijft op je telefoon. Wat de app wel en niet telt, en wat je rechten zijn.';
  const data = [
    { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Privacy', url: `${SITE}${PRIVACY_PATH}`, description, inLanguage: 'nl', dateModified: PRIVACY_DATE },
    breadcrumbs({ name: 'Privacy', path: PRIVACY_PATH }),
  ];
  return plainPage(
    { path: PRIVACY_PATH, lang: 'nl', title, description, ogLocale: 'nl_NL', data },
    `<h1>Privacy</h1>
<p class="lead">Vloertaal is gemaakt om Nederlands te leren, niet om jou te volgen. Hier staat precies wat de app doet.</p>
${PRIVACY.map((s) => `<section aria-labelledby="${s.id}"><h2 id="${s.id}">${esc(s.title)}</h2>
${s.paras.map((p) => `<p>${esc(p)}</p>`).join('\n')}</section>`).join('\n')}
<p class="signed">Bijgewerkt op ${dutchDate(PRIVACY_DATE)}. Verandert er iets, dan staat het hier en bij <a href="/nieuw/">Wat is er nieuw?</a>. Vragen: <a href="mailto:hoi@vloertaal.nl">hoi@vloertaal.nl</a>.</p>
<footer>${linkRows()}</footer>`,
  );
}
