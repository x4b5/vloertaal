import { BE_RULES_LIVE } from '../content/regels/be/live';
import { REGIONS_LIVE } from '../content/regio';
import { BE_TAAL_LIVE } from '../content/taalBe/live';
import { OPEN_TO_ALL } from '../lib/access';
import { ONE_APP_LIVE } from '../lib/oneApp';
import { RULES_TRACK } from '../lib/track';

/**
 * The big switches of the app, with their value from the code itself (docs/overzicht.md,
 * "Wat staat aan en uit"). A switch that flips shows up in the document at the next
 * `npm run overzicht`; tests/overzicht.test.ts fails until then.
 */
export interface Switch {
  naam: string;
  on: boolean;
  aan: string;
  uit: string;
  /** How one phone can try it, if it can. */
  proef?: string;
  file: string;
}

export const SWITCHES: Switch[] = [
  { naam: 'Alles open voor iedereen', on: OPEN_TO_ALL, file: 'src/lib/access.ts (OPEN_TO_ALL)', aan: 'Geen codepagina. Elke telefoon heeft de volledige versie.', uit: 'Zonder code alleen de sneak preview. De codes en niveaus werken weer.' },
  { naam: 'Spoor Werkregels', on: RULES_TRACK, file: 'src/lib/track.ts (RULES_TRACK)', aan: 'Wie "Nederlands" kiest, krijgt de Werkregels.', uit: 'Alleen het spoor Taal.' },
  { naam: 'Eén app', on: ONE_APP_LIVE, file: 'src/lib/oneApp.ts (ONE_APP_LIVE)', aan: 'Bij elk Taal-onderwerp staat ook "Zo werkt het hier", en de hulptaal is één rij in Instellingen.', uit: 'Taal en Werkregels zijn twee aparte sporen.', proef: 'vloertaal.nl/?nieuw=1 (uit met ?nieuw=0)' },
  { naam: 'België: spoor Taal', on: BE_TAAL_LIVE, file: 'src/content/taalBe/live.ts (BE_TAAL_LIVE)', aan: 'Wie België kiest, krijgt Vlaamse woorden en tips.', uit: 'Iedereen krijgt de Nederlandse woorden.' },
  { naam: 'België: spoor Werkregels', on: BE_RULES_LIVE, file: 'src/content/regels/be/live.ts (BE_RULES_LIVE)', aan: 'Wie België kiest, krijgt de Belgische regels.', uit: 'Iedereen krijgt de Nederlandse regels.' },
  { naam: 'Regio Zuid-Limburg', on: REGIONS_LIVE, file: 'src/content/regio/index.ts (REGIONS_LIVE)', aan: 'In Instellingen is de regio te kiezen, met de sociale kaart.', uit: 'De regio is niet te kiezen. Wacht op controle (docs/regio-controle.md).' },
];

/** What an address can switch on or open, on vloertaal.nl. */
export const ADDRESSES: { adres: string; wat: string }[] = [
  { adres: '?test', wat: 'Zet de knop Melden aan op deze telefoon. Uit met ?test=0.' },
  { adres: '?nieuw=1', wat: 'Zet "Eén app" aan op deze telefoon. Uit met ?nieuw=0.' },
  { adres: '?taal=nl', wat: 'Zet "Ik spreek al Nederlands" bovenaan de lijst met talen.' },
  { adres: '?unit=pay', wat: 'Opent het lespad bij één onderwerp (een link van de begeleider).' },
  { adres: '#begeleiders', wat: 'Opent de pagina voor begeleiders.' },
  { adres: '#beheer', wat: 'Opent de beheerpagina (met wachtwoord).' },
];
