import type { View } from '../App';
import type { Tab } from '../components/Screens';
import type { OnbStep } from '../lib/onboarding';

/**
 * Every screen of the app in plain Dutch (docs/overzicht.md, "Alle schermen"). The three records
 * are keyed by the app's own types, so a new screen without a line here does not compile
 * (`npm run typecheck`).
 */
export interface ScreenLine {
  /** What the learner would call it. */
  naam: string;
  wat: string;
  /** How the learner gets there. */
  via: string;
}

export type Group = 'leren' | 'na de les' | 'hulp' | 'toets' | 'instellingen en over' | 'voor begeleiders';

export const TABS: Record<Tab, string> = {
  route: 'Route: het lespad met de volgende les.',
  words: 'Hulp: noodzinnen, tips, klanken, en "Voor je begeleider".',
  me: 'Instellingen.',
  about: 'Over: wie erachter zit, privacy, wat is er nieuw.',
};

/** The first run, one question a page, in this order (src/lib/onboarding.ts). */
export const START_STEPS: Record<OnbStep, string> = {
  language: 'Kies je taal (of "Ik spreek al Nederlands").',
  gender: 'Man of vrouw: alleen in talen waar de aanspreekvorm verschilt.',
  gate: 'De code. Staat uit zolang alles open is voor iedereen.',
  sector: 'In welke sector werk je (of wil je werken)?',
  country: 'In welk land werk je: Nederland of België?',
  done: 'Klaar: de app opent het lespad.',
};

export const SCREENS: Record<View['name'], ScreenLine & { groep: Group }> = {
  home: { groep: 'leren', naam: 'Route (thuis)', wat: 'De volgende les, de herhaling van vandaag, en hooguit één kaart of regel met een aanbod.', via: 'De app opent hier.' },
  all: { groep: 'leren', naam: 'Alle onderwerpen', wat: 'Elk onderwerp, op thema of op volgorde.', via: 'De link onderaan Route.' },
  topic: { groep: 'leren', naam: 'Een onderwerp', wat: 'De lessen van één onderwerp.', via: 'Alle onderwerpen, of een link van de begeleider.' },
  lesson: { groep: 'leren', naam: 'Een les', wat: 'De oefeningen van één les, of de herhaling van vandaag.', via: 'Route of een onderwerp.' },
  check: { groep: 'leren', naam: 'Ik ken dit al: korte check', wat: 'Vijf vragen over een onderwerp.', via: 'De pagina van een onderwerp.' },
  'check-result': { groep: 'leren', naam: 'Uitslag van de korte check', wat: 'Genoeg goed: de lessen van het onderwerp zijn afgevinkt.', via: 'Na de korte check.' },
  scene: { groep: 'leren', naam: 'Luister op de werkvloer', wat: 'Een geluidsscène om naar te luisteren.', via: 'De pagina van een onderwerp.' },

  result: { groep: 'na de les', naam: 'Uitslag', wat: 'Hoeveel goed, nieuwe woorden, de volgende les, en hooguit één vraag of aanbod.', via: 'Na elke les.' },
  samen: { groep: 'na de les', naam: 'Oefen samen', wat: 'De gesprekjes van de les, met z\'n tweeën op één telefoon.', via: 'De uitslag.' },
  'cert-earned': { groep: 'na de les', naam: 'Certificaat behaald', wat: 'Het onderwerp is af.', via: 'Na de uitslag van de laatste les van een onderwerp.' },
  certificate: { groep: 'na de les', naam: 'Certificaat', wat: 'Het certificaat van één onderwerp, om te laten zien of te delen.', via: 'Certificaat behaald, of Instellingen.' },
  pocket: { groep: 'na de les', naam: 'Spiekkaartje', wat: 'De vijf handigste zinnen van een onderwerp.', via: 'Certificaat behaald.' },
  colleague: { groep: 'na de les', naam: 'Voor je collega', wat: 'Een kaart om aan een collega te laten zien.', via: 'Het eerste certificaat, of Hulp.' },
  streak: { groep: 'na de les', naam: 'Dagen op rij', wat: 'De reeks ging omhoog. Bij 3, 7, 14 en 30 dagen met een "Wist je dat?".', via: 'Na de eerste les van de dag.' },
  keep: { groep: 'na de les', naam: 'Zo blijf je oefenen', wat: 'Het aanbod van een herinnering en de app op het beginscherm.', via: 'Eén keer, na een les.' },

  words: { groep: 'hulp', naam: 'Hulp', wat: 'Het begin van het tabblad Hulp. In Werkregels: "Wie bel je?".', via: 'Het tabblad Hulp.' },
  phrasebook: { groep: 'hulp', naam: 'Noodzinnen', wat: 'Zinnen voor als het misgaat.', via: 'Hulp, of de uitslag van de eerste les.' },
  tips: { groep: 'hulp', naam: 'Werkvloer-tips', wat: 'Hoe het hier gaat op het werk, en je rechten.', via: 'Hulp.' },
  klanken: { groep: 'hulp', naam: 'Hoe zeg je het?', wat: 'Alle klankkaarten.', via: 'Hulp.' },
  klank: { groep: 'hulp', naam: 'Eén klank', wat: 'Eén klankkaart, met de mond.', via: 'Hoe zeg je het?' },
  socialmap: { groep: 'hulp', naam: 'Sociale kaart', wat: 'Instanties in de regio. Alleen met een regio gekozen.', via: 'Hulp.' },
  gelukt: { groep: 'leren', naam: 'Gelukt?', wat: 'Heb je de zin van gisteren op je werk gezegd?', via: 'De regel onder de volgende les op Route.' },
  'gelukt-done': { groep: 'leren', naam: 'Gelukt!', wat: 'Bram zegt hoeveel zinnen je al op je werk hebt gezegd.', via: 'Na "Ja, gelukt".' },

  'toets-offer': { groep: 'toets', naam: 'Wat ken je al? (het aanbod)', wat: 'Doe de toets, of later.', via: 'De regel onder de volgende les op Route.' },
  toets: { groep: 'toets', naam: 'Wat ken je al? (de toets)', wat: 'Ongeveer tien minuten.', via: 'Het aanbod, of Instellingen.' },
  'toets-result': { groep: 'toets', naam: 'Uitslag van de toets', wat: 'Drie balken, voor en na.', via: 'Na de toets.' },
  'toets-page': { groep: 'toets', naam: 'De toets in Instellingen', wat: 'De uitslagen terugzien, of de toets doen.', via: 'Instellingen.' },

  settings: { groep: 'instellingen en over', naam: 'Instellingen', wat: 'Het menu en alle pagina\'s eronder: taal, sector, geluid, tekst, voortgang bewaren.', via: 'Het tabblad Instellingen.' },
  about: { groep: 'instellingen en over', naam: 'Over', wat: 'Wie erachter zit, privacy, contact, de versie.', via: 'Het tabblad Over.' },
  news: { groep: 'instellingen en over', naam: 'Wat is er nieuw?', wat: 'Het logboek van veranderingen.', via: 'Onderaan Over.' },

  kaart: { groep: 'voor begeleiders', naam: 'Laat zien hoe het gaat', wat: 'De begeleiderskaart: onderwerpen af, dagen geoefend, de toets.', via: 'Hulp of Instellingen.' },
  coaches: { groep: 'voor begeleiders', naam: 'Voor begeleiders', wat: 'Een link per onderwerp om te sturen, en de demo.', via: 'Over, of vloertaal.nl/#begeleiders.' },
  admin: { groep: 'voor begeleiders', naam: 'Beheer', wat: 'Voor de eigenaar, met wachtwoord: het tegoed voor de stemmen, en elke les bekijken.', via: 'vloertaal.nl/#beheer.' },
};

export const GROUPS: Group[] = ['leren', 'na de les', 'hulp', 'toets', 'instellingen en over', 'voor begeleiders'];
