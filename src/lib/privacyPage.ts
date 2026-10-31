import { linkRows } from './linkRows';
import { PRIVACY_PATH } from './paths';
import { breadcrumbs, esc, plainPage, SITE } from './plainPage';

/**
 * vloertaal.nl/privacy: the privacy statement, in plain Dutch (A2 where it can). It says exactly
 * what the code does, so change it with the code: src/lib/count.ts (the lessons counter),
 * src/lib/errors.ts (errors), src/lib/listen.ts (speech on the device), src/lib/report.ts (Melden
 * by e-mail), src/lib/reminder.ts (the calendar). docs/privacy.md lists those places.
 */

/** When this text last changed. A change also goes in the logbook (src/content/updates.ts). */
export const PRIVACY_DATE = '2026-10-31';

export interface PrivacySection { id: string; title: string; paras: string[] }

export const PRIVACY: readonly PrivacySection[] = [
  {
    id: 'kort',
    title: 'In het kort',
    paras: [
      'Je hebt geen account nodig. We vragen geen naam, geen e-mailadres en geen telefoonnummer.',
      'Wat je leert, staat alleen op je eigen telefoon of computer. Wij kunnen het niet zien.',
      'Vloertaal gebruikt geen cookies, geen reclame en geen sociale media. We verkopen geen gegevens.',
      'De app telt zonder naam hoe vaak lessen gedaan worden, en of de app ergens een fout geeft. Dat kun je uitzetten.',
    ],
  },
  {
    id: 'toestel',
    title: 'Wat er op je telefoon of computer staat',
    paras: [
      'Je voortgang en je keuzes: je hulptaal, je land, waar je werkt, je lessen, je certificaten en je instellingen. Ook de uitslag van de toets “Wat ken je al?” en de opnames van je stem bij die toets. Dit staat in het geheugen van je browser, niet bij ons.',
      'Alles weg? Kies bij Instellingen “Voortgang wissen”. Of wis de gegevens van de website in je browser.',
      'Maak je een back-up? Dan maakt je telefoon een bestand. Jij bepaalt waar dat bestand blijft.',
    ],
  },
  {
    id: 'tellen',
    title: 'Wat we tellen: anoniem meetellen',
    paras: [
      'Staat “Anoniem meetellen” aan? Dan stuurt de app een korte telling naar GoatCounter, een teller zonder cookies. Zo zien we welke lessen goed gaan en waar mensen stoppen.',
      'Per telling gaat alleen dit mee: wat er gebeurt (een les begint, stopt of is af; de toets begint of is af), welke les, in welk kwart je stopte, en ongeveer hoeveel minuten een les duurde. Niet de uitslag van de toets.',
      'De app telt ook of mensen terugkomen. Dat gebeurt één keer per telefoon: op je 1e, 2e, 7e, 14e en 28e dag met een les. Alleen dat getal gaat mee, geen datum. Je telefoon onthoudt welke dagen al geteld zijn.',
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
      'Bij de toets “Wat ken je al?” bewaart je telefoon je opnames, zodat je later “Jij toen” en “Jij nu” kunt horen. Ze blijven op je telefoon of computer. Met “Voortgang wissen” zijn ze weg.',
      '“Laat de telefoon luisteren (proef)” staat standaard uit. Zet je het aan? Dan gebruikt de app het alleen als je telefoon het Nederlands zelf kan herkennen, zonder internet. Er gaat geen geluid en geen tekst naar ons of naar anderen.',
    ],
  },
  {
    id: 'delen',
    title: 'Wat je zelf deelt',
    paras: [
      'De kaart bij “Laat zien hoe het gaat” maakt je telefoon zelf. Jij kiest of je die laat zien, bewaart of stuurt.',
      '“Melden” en “Vraag of fout?” openen je eigen e-mail. Er gaat pas iets naar ons als jij de mail verstuurt. We gebruiken je mail alleen om te antwoorden en de app te verbeteren. Wil je dat we je mail wissen? Vraag het ons.',
      'Een herinnering in je agenda: kies je Google Agenda? Dan open je hun website, met de tekst van de herinnering. Kies je een agendabestand? Dan blijft het op je telefoon.',
      'In de Hulp-tab staan links naar andere organisaties. Op hun websites gelden hun eigen regels.',
    ],
  },
  {
    id: 'website',
    title: 'Waar de website staat',
    paras: [
      'De website staat bij Vercel (in de Verenigde Staten). Hun servers zien, zoals bij elke website, je IP-adres om de pagina’s te sturen. Lettertypen, plaatjes en geluiden komen allemaal van vloertaal.nl zelf, niet van Google of andere partijen.',
      'We willen Vloertaal later bij een Europese aanbieder zetten. Als dat gebeurt, staat het hier en in het logboek.',
    ],
  },
  {
    id: 'rechten',
    title: 'Je rechten',
    paras: [
      'Over jou hebben we niets, behalve een mail die je ons zelf stuurt. Wil je weten wat we hebben, of wil je dat we het wissen? Mail naar hoi@vloertaal.nl.',
      'Heb je een klacht over privacy? Mail ons eerst. Je mag ook een klacht indienen bij de Autoriteit Persoonsgegevens (Nederland) of de Gegevensbeschermingsautoriteit (België).',
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
