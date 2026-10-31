// Nog geen scherm; wacht op opnames (docs/geluidsscenes.md)
//
// Werkvloer-luisteren (fase 2, stap 2.3): per sector drie korte geluidsscènes. Een collega of
// leidinggevende geeft een instructie op normaal tempo, met omgevingsgeluid erachter; soms zegt
// de leerling ("ik") kort iets terug. Daarna 1 of 2 vragen over de kern: wat moet je doen, hoe
// laat, welk nummer.
//
// Dit bestand wordt nog nergens in de app geïmporteerd: alleen tests/geluidsscenes.test.ts en
// scripts/scene-lines.ts (npm run scenes:lines) lezen het. Het scherm komt pas als de opnames er zijn.
//
// Stemmen: dezelfde personages en stemmen als in de lessen (src/lib/voices.ts):
// bram → Thijmen, henk → Daniel, amina → Ariël, jada → Noa. "ik" is de leerling: die beurt wordt
// in twee stemmen opgenomen (Thijmen en Ariël, net als learnerVoice), dus in een scène met "ik"
// spreken alleen Henk en Jada. Zo hoort de leerling nooit zijn eigen stem als collega.
//
// ⚖️: `recht: true` zet de ⚖️-markering. De scène noemt een veiligheidsregel of een rechtenfeit;
// die zin blijft bij een herschrijving inhoudelijk precies hetzelfde (docs/taal-a2.md).
import type { SectorId } from './sectors';

/** Wie spreekt: een personage, of "ik" (de leerling). */
export type Spreker = 'bram' | 'henk' | 'amina' | 'jada' | 'ik';

export interface Beurt {
  wie: Spreker;
  /** Gesproken Nederlands, zoals het in de opname klinkt (en later op het scherm staat). */
  nl: string;
}

export interface SceneOptie {
  nl: string;
  goed?: true;
}

export interface SceneVraag {
  vraag: string;
  /** Precies 3 opties; precies 1 is goed. */
  opties: [SceneOptie, SceneOptie, SceneOptie];
  /** Eén zin na het antwoord. `en` is de bron voor de vertaling in de hulptalen (later). */
  uitleg: { nl: string; en: string };
}

export interface Geluidsscene {
  id: string;
  sector: SectorId;
  titel: string;
  /** Na dit onderwerp (unit-id in src/content/curriculum.ts) past de scène: de woorden zijn dan bekend. */
  naUnit: string;
  beurten: Beurt[];
  /** Voor de geluidsmaker. Altijd zachter dan de stem: zacht ≈ -24 dB, midden ≈ -18 dB. */
  geluid: { nl: string; niveau: 'zacht' | 'midden' };
  vragen: SceneVraag[];
  /** ⚖️ de scène noemt een veiligheidsregel of rechtenfeit. */
  recht?: true;
}

export const geluidsscenes: Geluidsscene[] = [
  // ---------------------------------------------------------------- Bouw
  {
    id: 'g.bouw.steiger',
    sector: 'construction',
    titel: 'Op de steiger',
    naUnit: 'u.build',
    recht: true, // ⚖️ op hoogte draag je valbeveiliging
    beurten: [
      { wie: 'henk', nl: 'Goedemorgen. Jij gaat vandaag mee de steiger op, hè.' },
      { wie: 'henk', nl: 'Eerst je valbeveiliging. Zonder ga je niet naar boven.' },
      { wie: 'ik', nl: 'Oké. Waar ligt die?' },
      { wie: 'henk', nl: 'In de bus, achterin. Om half acht beginnen we.' },
    ],
    geluid: { nl: 'Bouwplaats buiten: wind, in de verte een boor en een hamer, af en toe een kraan die piept.', niveau: 'midden' },
    vragen: [
      {
        // Not "Wat doe je eerst?": first you get the gear from the bus (controle-inhoud G3).
        vraag: 'Wat moet je doen voor je naar boven gaat?',
        opties: [
          { nl: 'De ladder bij de steiger zetten.' },
          { nl: 'Je valbeveiliging dragen.', goed: true },
          { nl: 'Je hamer uit de bus pakken.' },
        ],
        uitleg: {
          // Not "altijd": with a full railing (collective protection) a harness is not always needed (Arbobesluit art. 3.16).
          nl: 'Henk zegt: zonder valbeveiliging ga je niet naar boven.',
          en: 'Henk says: without fall protection you do not go up.',
        },
      },
      {
        vraag: 'Hoe laat beginnen jullie?',
        opties: [
          { nl: 'Om half acht.', goed: true },
          { nl: 'Om zeven uur.' },
          { nl: 'Om half negen.' },
        ],
        uitleg: { nl: 'Henk zegt: om half acht beginnen we.', en: 'Henk says: we start at half past seven.' },
      },
    ],
  },
  {
    id: 'g.bouw.beton',
    sector: 'construction',
    titel: 'Het beton is nat',
    naUnit: 'u.build',
    beurten: [
      { wie: 'bram', nl: 'Hé, loop daar even niet. Het beton is nog nat.' },
      { wie: 'jada', nl: 'Oké. Hoe lang nog?' },
      { wie: 'bram', nl: 'Tot morgen. Morgen om zeven uur kun je erop.' },
      { wie: 'bram', nl: 'Pak jij de boor even? Die ligt links bij de ladder.' },
    ],
    geluid: { nl: 'Bouwplaats: een betonmolen draait ver weg, vogels, een radio heel zacht.', niveau: 'zacht' },
    vragen: [
      {
        vraag: 'Waar ligt de boor?',
        opties: [
          { nl: 'Rechts bij de steiger.' },
          { nl: 'In de bus, achterin.' },
          { nl: 'Links bij de ladder.', goed: true },
        ],
        uitleg: { nl: 'Bram zegt: de boor ligt links bij de ladder.', en: 'Bram says: the drill is on the left, by the ladder.' },
      },
      {
        vraag: 'Wanneer kun je op het beton lopen?',
        opties: [
          { nl: 'Vandaag om vier uur.' },
          { nl: 'Morgen om zeven uur.', goed: true },
          { nl: 'Over een half uur.' },
        ],
        uitleg: { nl: 'Het beton is pas morgen om zeven uur droog.', en: 'The concrete is only dry tomorrow at seven.' },
      },
    ],
  },
  {
    id: 'g.bouw.last',
    sector: 'construction',
    titel: 'Last boven je hoofd',
    naUnit: 'u.build',
    recht: true, // ⚖️ je staat niet onder een last van de kraan
    beurten: [
      { wie: 'henk', nl: 'Stop! Pas op, de kraan komt met een last.' },
      { wie: 'henk', nl: 'Ga even bij de bus staan. Tien meter weg.' },
      { wie: 'ik', nl: 'Oké. Hoe lang duurt het?' },
      { wie: 'henk', nl: 'Vijf minuten. Ik roep je wel.' },
    ],
    geluid: { nl: 'Bouwplaats: een kraan zoemt en piept, een ketting rammelt, wind.', niveau: 'midden' },
    vragen: [
      {
        vraag: 'Wat moet je doen?',
        opties: [
          { nl: 'De kraan even helpen.' },
          { nl: 'Naar het dak gaan.' },
          { nl: 'Wachten bij de bus.', goed: true },
        ],
        uitleg: {
          nl: 'Je loopt of staat niet onder een last van de kraan.',
          en: 'You do not walk or stand under a load from the crane.',
        },
      },
      {
        vraag: 'Hoe lang moet je wachten?',
        opties: [
          { nl: 'Tien minuten.' },
          { nl: 'Vijf minuten.', goed: true },
          { nl: 'Een half uur.' },
        ],
        uitleg: { nl: 'Henk zegt: vijf minuten, en tien meter weg.', en: 'Henk says: five minutes, and ten metres away.' },
      },
    ],
  },

  // ---------------------------------------------------------------- Techniek
  {
    id: 'g.techniek.slijpen',
    sector: 'technical',
    titel: 'Slijpen in de werkplaats',
    naUnit: 'u.tech',
    recht: true, // ⚖️ bij slijpen: bril en gehoorbescherming
    beurten: [
      { wie: 'henk', nl: 'Ga jij zo even slijpen? Die tien stukken hier.' },
      { wie: 'henk', nl: 'Draag je bril en je gehoorbescherming. Er komen veel vonken.' },
      { wie: 'ik', nl: 'Oké. Waar ligt het gereedschap?' },
      { wie: 'henk', nl: 'Rechts, in de grote kast.' },
    ],
    geluid: { nl: 'Metaalwerkplaats: een slijpmachine ver weg, vonken sissen, een compressor slaat aan.', niveau: 'midden' },
    vragen: [
      {
        vraag: 'Wat draag je bij het slijpen?',
        opties: [
          { nl: 'Handschoenen en een hesje.' },
          { nl: 'Een helm en een hesje.' },
          { nl: 'Bril en gehoorbescherming.', goed: true },
        ],
        uitleg: {
          nl: 'De bril is voor je ogen, de gehoorbescherming voor je oren.',
          en: 'The glasses are for your eyes, the ear protection for your ears.',
        },
      },
      {
        vraag: 'Hoeveel stukken moet je slijpen?',
        opties: [
          { nl: 'Twee.' },
          { nl: 'Twaalf.' },
          { nl: 'Tien.', goed: true },
        ],
        uitleg: { nl: 'Henk zegt: die tien stukken hier.', en: 'Henk says: those ten pieces here.' },
      },
    ],
  },
  {
    id: 'g.techniek.stroom',
    sector: 'technical',
    titel: 'Staat er stroom op?',
    naUnit: 'u.tech',
    recht: true, // ⚖️ eerst spanningsloos, dan pas werken
    beurten: [
      { wie: 'jada', nl: 'Kun je die lamp in gang twee even vervangen?' },
      { wie: 'ik', nl: 'Staat er nog stroom op?' },
      { wie: 'jada', nl: 'Ja. Wacht even op de elektricien. Hij komt om tien uur.' },
      { wie: 'jada', nl: 'Eerst moet het spanningsloos zijn.' },
    ],
    geluid: { nl: 'Gebouw binnen: lampen zoemen zacht, ver weg een boor, voetstappen in een gang.', niveau: 'zacht' },
    vragen: [
      {
        vraag: 'Wat doe je nu?',
        opties: [
          { nl: 'Je wacht op de elektricien.', goed: true },
          { nl: 'Je vervangt de lamp meteen.' },
          { nl: 'Je pakt een nieuwe kabel.' },
        ],
        uitleg: {
          nl: 'Je werkt pas aan een lamp als de stroom eraf is.',
          en: 'You only work on a lamp when the power is off.',
        },
      },
      {
        vraag: 'Hoe laat komt de elektricien?',
        opties: [
          { nl: 'Om twee uur.' },
          { nl: 'Om tien uur.', goed: true },
          { nl: 'Om twaalf uur.' },
        ],
        uitleg: { nl: 'Jada zegt: hij komt om tien uur.', en: 'Jada says: he comes at ten.' },
      },
    ],
  },
  {
    id: 'g.techniek.werkbon',
    sector: 'technical',
    titel: 'Klopt de werkbon?',
    naUnit: 'u.finish',
    beurten: [
      { wie: 'henk', nl: 'Klopt het aantal op de werkbon?' },
      { wie: 'ik', nl: 'Nee. Ik heb acht kabels, geen twaalf.' },
      { wie: 'henk', nl: 'Oké, schrijf acht op. Ik bestel er vier bij.' },
      { wie: 'henk', nl: 'En zet je handtekening onderaan.' },
    ],
    geluid: { nl: 'Werkplaats: een radio zacht, iemand legt gereedschap neer, een ventilator.', niveau: 'zacht' },
    vragen: [
      {
        vraag: 'Hoeveel kabels heb je?',
        opties: [
          { nl: 'Twaalf.' },
          { nl: 'Acht.', goed: true },
          { nl: 'Vier.' },
        ],
        uitleg: { nl: 'Er staan er twaalf op de werkbon, maar je hebt er acht.', en: 'The work order says twelve, but you have eight.' },
      },
      {
        vraag: 'Wat moet je nog doen?',
        opties: [
          { nl: 'Vier kabels bestellen.' },
          { nl: 'De werkbon opnieuw lezen.' },
          { nl: 'Je handtekening zetten.', goed: true },
        ],
        uitleg: { nl: 'Henk bestelt de kabels; jij zet je handtekening.', en: 'Henk orders the cables; you sign.' },
      },
    ],
  },

  // ---------------------------------------------------------------- Garage
  {
    id: 'g.garage.band',
    sector: 'garage',
    titel: 'Een lekke band',
    naUnit: 'u.garage',
    beurten: [
      { wie: 'henk', nl: 'Die blauwe auto op de hefbrug, die band is lek.' },
      { wie: 'henk', nl: 'Wissel jij hem even? De banden liggen achterin.' },
      { wie: 'ik', nl: 'Oké. Hoeveel banden?' },
      { wie: 'henk', nl: 'Eén. De klant komt om vier uur.' },
    ],
    geluid: { nl: 'Garage: een luchtsleutel ratelt kort, een compressor, een radio zacht.', niveau: 'midden' },
    vragen: [
      {
        vraag: 'Wat moet je doen?',
        opties: [
          { nl: 'De olie wisselen.' },
          { nl: 'Een band wisselen.', goed: true },
          { nl: 'Een proefrit maken.' },
        ],
        uitleg: { nl: 'De band van de blauwe auto is lek.', en: 'The tyre of the blue car is flat.' },
      },
      {
        vraag: 'Hoe laat komt de klant?',
        opties: [
          { nl: 'Om vier uur.', goed: true },
          { nl: 'Om één uur.' },
          { nl: 'Om vijf uur.' },
        ],
        uitleg: { nl: 'Henk zegt: de klant komt om vier uur.', en: 'Henk says: the customer comes at four.' },
      },
    ],
  },
  {
    id: 'g.garage.klant',
    sector: 'garage',
    titel: 'Eerst moet de klant akkoord zijn',
    naUnit: 'u.garage',
    beurten: [
      { wie: 'jada', nl: 'De remmen van deze auto zijn ook slecht.' },
      { wie: 'ik', nl: 'Doe ik die meteen?' },
      { wie: 'jada', nl: 'Nee, de klant moet eerst akkoord zijn met de kosten.' },
      { wie: 'jada', nl: 'Het is driehonderd euro. Vraag het even aan de chef. Hij belt de klant.' },
    ],
    geluid: { nl: 'Garage: een auto rijdt langzaam binnen, gereedschap op een kar, een deur.', niveau: 'zacht' },
    vragen: [
      {
        vraag: 'Waarom wacht je?',
        opties: [
          { nl: 'De monteur is nog in de pauze.' },
          { nl: 'Het onderdeel is er nog niet.' },
          { nl: 'De klant moet eerst akkoord zijn.', goed: true },
        ],
        uitleg: {
          nl: 'Extra werk doe je pas als de klant akkoord is.',
          en: 'You only do extra work when the customer agrees.',
        },
      },
      {
        vraag: 'Wat kosten de remmen?',
        opties: [
          { nl: 'Tweehonderd euro.' },
          { nl: 'Dertig euro.' },
          { nl: 'Driehonderd euro.', goed: true },
        ],
        uitleg: { nl: 'Jada zegt: het is driehonderd euro.', en: 'Jada says: it is three hundred euros.' },
      },
    ],
  },
  {
    id: 'g.garage.proefrit',
    sector: 'garage',
    titel: 'De proefrit',
    naUnit: 'u.garage',
    recht: true, // ⚖️ een proefrit (op de weg) alleen met rijbewijs
    beurten: [
      { wie: 'henk', nl: 'Ik ben klaar met de accu. Maak jij even een proefrit?' },
      { wie: 'ik', nl: 'Ik heb nog geen rijbewijs.' },
      { wie: 'henk', nl: 'O, oké. Dan doe ik het.' },
      { wie: 'henk', nl: 'Pak jij de olie voor auto drie?' },
    ],
    geluid: { nl: 'Garage: een motor loopt stationair, een hefbrug zoemt, verderop een luchtsleutel.', niveau: 'midden' },
    vragen: [
      {
        vraag: 'Wie maakt de proefrit?',
        opties: [
          { nl: 'Jij maakt hem.' },
          { nl: 'De klant maakt hem.' },
          { nl: 'Henk maakt hem.', goed: true },
        ],
        uitleg: {
          nl: 'Een proefrit op de weg maak je alleen met een rijbewijs.',
          en: 'You only take a test drive on the road with a driving licence.',
        },
      },
      {
        vraag: 'Voor welke auto is de olie?',
        opties: [
          { nl: 'Auto drie.', goed: true },
          { nl: 'Auto twee.' },
          { nl: 'Auto tien.' },
        ],
        uitleg: { nl: 'Henk zegt: de olie voor auto drie.', en: 'Henk says: the oil for car three.' },
      },
    ],
  },

  // ---------------------------------------------------------------- Productie
  {
    id: 'g.productie.storing',
    sector: 'production',
    titel: 'Storing aan de band',
    naUnit: 'u.factory',
    recht: true, // ⚖️ een storing los je niet zelf op: dat doet de monteur
    beurten: [
      { wie: 'henk', nl: 'De band staat stil. Er is een storing bij machine vier.' },
      { wie: 'henk', nl: 'Niet zelf repareren, hè. Ik bel de monteur.' },
      { wie: 'ik', nl: 'Oké. Wat doe ik nu?' },
      { wie: 'henk', nl: 'Pak even de producten in. Over twintig minuten draait hij weer.' },
    ],
    geluid: { nl: 'Fabriekshal: machines draaien gelijkmatig, een alarm piept kort, een lopende band ratelt.', niveau: 'midden' },
    vragen: [
      {
        vraag: 'Wat doe je nu?',
        opties: [
          { nl: 'De machine repareren.' },
          { nl: 'Producten inpakken.', goed: true },
          { nl: 'De monteur bellen.' },
        ],
        uitleg: {
          nl: 'Een storing repareer je niet zelf: dat doet de monteur.',
          en: 'You do not repair a breakdown yourself: the mechanic does that.',
        },
      },
      {
        vraag: 'Bij welke machine is de storing?',
        opties: [
          { nl: 'Bij machine twee.' },
          { nl: 'Bij machine tien.' },
          { nl: 'Bij machine vier.', goed: true },
        ],
        uitleg: { nl: 'Henk zegt: een storing bij machine vier.', en: 'Henk says: a breakdown at machine four.' },
      },
    ],
  },
  {
    id: 'g.productie.etiket',
    sector: 'production',
    titel: 'Het etiket klopt niet',
    naUnit: 'u.factory',
    beurten: [
      { wie: 'jada', nl: 'Kijk even. Dit etiket zit scheef.' },
      { wie: 'bram', nl: 'Ja, en de doos is beschadigd.' },
      { wie: 'jada', nl: 'Leg hem maar apart. Die keuren we af.' },
      { wie: 'bram', nl: 'Oké. Dat is de derde vandaag, hè.' },
      { wie: 'jada', nl: 'Ja. Ik zet het op de lijst.' },
    ],
    geluid: { nl: 'Productiehal: een lopende band, een machine sist zacht, stemmen ver weg.', niveau: 'zacht' },
    vragen: [
      {
        vraag: 'Wat doen ze met de doos?',
        opties: [
          { nl: 'Ze leggen hem apart.', goed: true },
          { nl: 'Ze sturen hem naar de klant.' },
          { nl: 'Ze pakken hem opnieuw in.' },
        ],
        uitleg: { nl: 'Een beschadigd product leg je apart en keur je af.', en: 'You put a damaged product aside and reject it.' },
      },
      {
        vraag: 'Hoeveel slechte dozen zijn er vandaag?',
        opties: [
          { nl: 'Twee.' },
          { nl: 'Drie.', goed: true },
          { nl: 'Vier.' },
        ],
        uitleg: { nl: 'Bram zegt: dat is de derde vandaag.', en: 'Bram says: that is the third one today.' },
      },
    ],
  },
  {
    id: 'g.productie.dienst',
    sector: 'production',
    titel: 'Je dienst aan band twee',
    naUnit: 'u.numbers',
    beurten: [
      { wie: 'henk', nl: 'Goedemiddag. Jij staat vandaag aan band twee.' },
      { wie: 'henk', nl: 'De pauze is om kwart over zes. Die duurt een half uur.' },
      { wie: 'ik', nl: 'Oké. En hoe laat ben ik klaar?' },
      { wie: 'henk', nl: 'Om tien uur. Dan meld je je af bij mij.' },
    ],
    geluid: { nl: 'Fabriekshal: machines draaien, af en toe sist een pers.', niveau: 'midden' },
    vragen: [
      {
        vraag: 'Hoe laat is de pauze?',
        opties: [
          { nl: 'Om kwart voor zes.' },
          { nl: 'Om half zeven.' },
          { nl: 'Om kwart over zes.', goed: true },
        ],
        uitleg: { nl: 'Henk zegt: de pauze is om kwart over zes.', en: 'Henk says: the break is at quarter past six.' },
      },
      {
        vraag: 'Wat doe je om tien uur?',
        opties: [
          { nl: 'Je meldt je af bij Henk.', goed: true },
          { nl: 'Je gaat naar band twee.' },
          { nl: 'Je begint met je pauze.' },
        ],
        uitleg: { nl: 'Om tien uur ben je klaar en meld je je af.', en: 'At ten you are done and you sign off.' },
      },
    ],
  },

  // ---------------------------------------------------------------- Logistiek
  {
    id: 'g.logistiek.heftruck',
    sector: 'logistics',
    titel: 'De heftruck komt eraan',
    naUnit: 'u.warehouse',
    recht: true, // ⚖️ wacht als de heftruck rijdt; til met je benen
    beurten: [
      { wie: 'jada', nl: 'Pas op, de heftruck komt eraan. Even stoppen.' },
      { wie: 'jada', nl: 'Oké, loop maar. Pallet twaalf moet naar rechts, bij de stelling.' },
      { wie: 'ik', nl: 'Rechts? Bij stelling vier?' },
      { wie: 'jada', nl: 'Ja. En til met je benen.' },
    ],
    geluid: { nl: 'Magazijn: een heftruck piept achteruit, ver weg pallets die neergezet worden, een scanner piept.', niveau: 'midden' },
    vragen: [
      {
        vraag: 'Waar moet pallet twaalf heen?',
        opties: [
          { nl: 'Naar links, bij de deur.' },
          { nl: 'Naar rechts, bij de stelling.', goed: true },
          { nl: 'Naar boven, bij de scanner.' },
        ],
        uitleg: { nl: 'Jada zegt: naar rechts, bij stelling vier.', en: 'Jada says: to the right, by rack four.' },
      },
      {
        vraag: 'Wat doe je als de heftruck komt?',
        opties: [
          { nl: 'Je loopt snel door.' },
          { nl: 'Je roept naar hem.' },
          { nl: 'Je stopt even.', goed: true },
        ],
        uitleg: {
          nl: 'Je wacht tot de heftruck weg is; dan loop je verder.',
          en: 'You wait until the forklift has gone; then you walk on.',
        },
      },
    ],
  },
  {
    id: 'g.logistiek.scanner',
    sector: 'logistics',
    titel: 'Waar is de scanner?',
    naUnit: 'u.warehouse',
    beurten: [
      { wie: 'bram', nl: 'Hé Jada, waar is de scanner? Ik heb hem nodig.' },
      { wie: 'jada', nl: 'Die ligt op de kar, bij gang drie.' },
      { wie: 'bram', nl: 'Oké. Hoeveel dozen moeten er nog weg?' },
      { wie: 'jada', nl: 'Nog veertig. De vrachtwagen komt om twee uur.' },
    ],
    geluid: { nl: 'Magazijn: een roldeur gaat open, een kar rolt voorbij, scanners piepen zacht.', niveau: 'zacht' },
    vragen: [
      {
        vraag: 'Waar ligt de scanner?',
        opties: [
          { nl: 'Op de pallet, bij gang twee.' },
          { nl: 'Op de kar, bij gang drie.', goed: true },
          { nl: 'In de stelling, boven.' },
        ],
        uitleg: { nl: 'Jada zegt: op de kar, bij gang drie.', en: 'Jada says: on the trolley, by aisle three.' },
      },
      {
        vraag: 'Hoe laat komt de vrachtwagen?',
        opties: [
          { nl: 'Om twaalf uur.' },
          { nl: 'Om drie uur.' },
          { nl: 'Om twee uur.', goed: true },
        ],
        uitleg: { nl: 'Jada zegt: de vrachtwagen komt om twee uur.', en: 'Jada says: the lorry comes at two.' },
      },
    ],
  },
  {
    id: 'g.logistiek.extra',
    sector: 'logistics',
    titel: 'Een extra dienst',
    naUnit: 'u.warehouse',
    beurten: [
      { wie: 'henk', nl: 'Hé, kun je zaterdag een extra dienst draaien?' },
      { wie: 'ik', nl: 'Hoe laat?' },
      { wie: 'henk', nl: 'Van zes tot twee. Het is erg druk, hè.' },
      { wie: 'ik', nl: 'Oké, dat is goed.' },
      { wie: 'henk', nl: 'Top. Ik zet het in de app.' },
    ],
    geluid: { nl: 'Magazijn: heftrucks ver weg, een kar rolt voorbij.', niveau: 'zacht' },
    vragen: [
      {
        vraag: 'Wanneer is de extra dienst?',
        opties: [
          { nl: 'Zaterdag van zes tot twee.', goed: true },
          { nl: 'Zondag van zes tot twee.' },
          { nl: 'Zaterdag van twee tot zes.' },
        ],
        uitleg: { nl: 'Henk zegt: zaterdag, van zes tot twee.', en: 'Henk says: Saturday, from six to two.' },
      },
      {
        vraag: 'Waar staat de dienst straks?',
        opties: [
          { nl: 'Op de werkbon.' },
          { nl: 'In de app.', goed: true },
          { nl: 'In de mail.' },
        ],
        uitleg: { nl: 'Henk zet de extra dienst in de app.', en: 'Henk puts the extra shift in the app.' },
      },
    ],
  },

  // ---------------------------------------------------------------- Tuinbouw
  {
    id: 'g.tuinbouw.bespoten',
    sector: 'horticulture',
    titel: 'Kas drie is bespoten',
    naUnit: 'u.kas',
    recht: true, // ⚖️ niet werken in een kas die net bespoten is
    beurten: [
      { wie: 'henk', nl: 'Niet in kas drie, hè. Die is net bespoten.' },
      { wie: 'ik', nl: 'Oké. Wanneer mag ik erin?' },
      { wie: 'henk', nl: 'Morgen pas. Vandaag werk je in kas vijf.' },
      { wie: 'henk', nl: 'Begin maar bij rij acht.' },
    ],
    geluid: { nl: 'Kas: ventilatoren zoemen, water druppelt, ver weg rolt een plukkar.', niveau: 'zacht' },
    vragen: [
      {
        vraag: 'Waar werk je vandaag?',
        opties: [
          { nl: 'In kas drie.' },
          { nl: 'In kas acht.' },
          { nl: 'In kas vijf.', goed: true },
        ],
        uitleg: { nl: 'Kas drie is bespoten, dus je werkt in kas vijf.', en: 'Greenhouse three has been sprayed, so you work in greenhouse five.' },
      },
      {
        vraag: 'Waarom mag je niet in kas drie?',
        opties: [
          { nl: 'Hij is net bespoten.', goed: true },
          { nl: 'Hij is te warm.' },
          { nl: 'Er is geen werk.' },
        ],
        uitleg: {
          nl: 'In een kas die net bespoten is, mag je nog niet werken.',
          en: 'You may not work yet in a greenhouse that has just been sprayed.',
        },
      },
    ],
  },
  {
    id: 'g.tuinbouw.oogst',
    sector: 'horticulture',
    titel: 'Hoeveel rijen?',
    naUnit: 'u.kas',
    beurten: [
      { wie: 'amina', nl: 'Hoeveel rijen heb je gedaan, Bram?' },
      { wie: 'bram', nl: 'Vier. Nog twee te gaan.' },
      { wie: 'amina', nl: 'Goed. Je krat is vol. Zet hem bij de plukkar.' },
      { wie: 'bram', nl: 'Oké. Om half tien is de pauze, toch?' },
      { wie: 'amina', nl: 'Ja, een kwartier.' },
    ],
    geluid: { nl: 'Kas: ventilatoren, plastic kratten die op elkaar gezet worden, een radio heel zacht.', niveau: 'zacht' },
    vragen: [
      {
        vraag: 'Hoeveel rijen moet Bram nog doen?',
        opties: [
          { nl: 'Vier.' },
          { nl: 'Twee.', goed: true },
          { nl: 'Zes.' },
        ],
        uitleg: { nl: 'Bram heeft er vier gedaan; er zijn er nog twee.', en: 'Bram has done four; two are left.' },
      },
      {
        vraag: 'Hoe lang duurt de pauze?',
        opties: [
          { nl: 'Een half uur.' },
          { nl: 'Tien minuten.' },
          { nl: 'Een kwartier.', goed: true },
        ],
        uitleg: { nl: 'Amina zegt: een kwartier, dat is vijftien minuten.', en: 'Amina says: a quarter of an hour, that is fifteen minutes.' },
      },
    ],
  },
  {
    id: 'g.tuinbouw.hitte',
    sector: 'horticulture',
    titel: 'Warm in de kas',
    naUnit: 'u.kas',
    recht: true, // ⚖️ bij hitte: genoeg drinken en even naar buiten
    beurten: [
      { wie: 'henk', nl: 'Het is vandaag dertig graden in de kas.' },
      { wie: 'henk', nl: 'Drink elk uur water. Ook als je geen dorst hebt.' },
      { wie: 'ik', nl: 'Oké. Mag ik ook even naar buiten?' },
      { wie: 'henk', nl: 'Ja, om elf uur. Tien minuten.' },
    ],
    geluid: { nl: 'Kas: ventilatoren zoemen, sproeiers sissen kort, vogels buiten.', niveau: 'midden' },
    vragen: [
      {
        vraag: 'Wat moet je elk uur doen?',
        opties: [
          { nl: 'Naar buiten gaan.' },
          { nl: 'Water drinken.', goed: true },
          { nl: 'Een krat halen.' },
        ],
        uitleg: {
          nl: 'Bij hitte drink je elk uur water, ook zonder dorst.',
          en: 'In the heat you drink water every hour, even without thirst.',
        },
      },
      {
        vraag: 'Hoe laat mag je naar buiten?',
        opties: [
          { nl: 'Om elf uur.', goed: true },
          { nl: 'Om tien uur.' },
          { nl: 'Om twaalf uur.' },
        ],
        uitleg: { nl: 'Henk zegt: om elf uur, tien minuten.', en: 'Henk says: at eleven, for ten minutes.' },
      },
    ],
  },

  // ---------------------------------------------------------------- Zorg
  {
    id: 'g.zorg.gevallen',
    sector: 'care',
    titel: 'Mevrouw is gevallen',
    naUnit: 'u.care',
    recht: true, // ⚖️ til een cliënt die gevallen is niet zelf op; haal de verpleegkundige
    beurten: [
      { wie: 'jada', nl: 'Mevrouw in kamer twaalf is gevallen.' },
      { wie: 'ik', nl: 'O nee. Is ze gewond?' },
      { wie: 'jada', nl: 'Ik weet het niet. Til haar niet op, hè.' },
      { wie: 'jada', nl: 'Ik haal de verpleegkundige. Blijf jij even bij haar?' },
    ],
    geluid: { nl: 'Zorginstelling: een gang, ergens een tv, een rolstoel rijdt voorbij, een bel van een cliënt.', niveau: 'zacht' },
    vragen: [
      {
        vraag: 'Wat doe jij?',
        opties: [
          { nl: 'Je tilt mevrouw op.' },
          { nl: 'Je blijft bij mevrouw.', goed: true },
          { nl: 'Je belt de dokter.' },
        ],
        uitleg: {
          nl: 'Is een cliënt gevallen, dan til je haar niet op.',
          en: 'If a client has fallen, you do not lift her up.',
        },
      },
      {
        vraag: 'In welke kamer is mevrouw?',
        opties: [
          { nl: 'In kamer elf.' },
          { nl: 'In kamer twintig.' },
          { nl: 'In kamer twaalf.', goed: true },
        ],
        uitleg: { nl: 'Jada zegt: kamer twaalf.', en: 'Jada says: room twelve.' },
      },
    ],
  },
  {
    id: 'g.zorg.pillen',
    sector: 'care',
    titel: 'De pillen',
    naUnit: 'u.care',
    recht: true, // ⚖️ pillen geven alleen als het jouw taak is
    beurten: [
      { wie: 'jada', nl: 'Het is negen uur. Tijd voor de pillen.' },
      { wie: 'jada', nl: 'Kun je meneer in kamer vier zijn pillen geven?' },
      { wie: 'ik', nl: 'Nee, dat mag ik niet. Ik haal de verpleegkundige.' },
      { wie: 'jada', nl: 'O ja, goed. Ze is in kamer zeven.' },
    ],
    geluid: { nl: 'Zorg: een gang, een deur gaat zacht dicht, een karretje met bekers rammelt.', niveau: 'zacht' },
    vragen: [
      {
        vraag: 'Waarom geef je de pillen niet?',
        opties: [
          { nl: 'Meneer slaapt nog.' },
          { nl: 'Dat mag je niet doen.', goed: true },
          { nl: 'De pillen zijn op.' },
        ],
        uitleg: {
          nl: 'Pillen geven mag je alleen als dat jouw taak is.',
          en: 'You may only give pills when that is your task.',
        },
      },
      {
        vraag: 'Waar is de verpleegkundige?',
        opties: [
          { nl: 'In kamer zeven.', goed: true },
          { nl: 'In kamer vier.' },
          { nl: 'In de keuken.' },
        ],
        uitleg: { nl: 'Jada zegt: ze is in kamer zeven.', en: 'Jada says: she is in room seven.' },
      },
    ],
  },
  {
    id: 'g.zorg.ochtend',
    sector: 'care',
    titel: 'De ochtend',
    naUnit: 'u.care',
    beurten: [
      { wie: 'jada', nl: 'Goedemorgen. Jij helpt vandaag in kamer drie en vijf.' },
      { wie: 'jada', nl: 'Eerst wassen en aankleden. Om half negen is het eten.' },
      { wie: 'ik', nl: 'Oké. Meneer in kamer vijf heeft een rolstoel, hè?' },
      { wie: 'jada', nl: 'Ja. Bel mij als je hulp nodig hebt.' },
    ],
    geluid: { nl: 'Zorg, vroeg in de ochtend: een kraan loopt, zacht gepraat op de gang.', niveau: 'zacht' },
    vragen: [
      {
        vraag: 'Hoe laat is het eten?',
        opties: [
          { nl: 'Om acht uur.' },
          { nl: 'Om half negen.', goed: true },
          { nl: 'Om half tien.' },
        ],
        uitleg: { nl: 'Jada zegt: om half negen is het eten.', en: 'Jada says: breakfast is at half past eight.' },
      },
      {
        vraag: 'Wat doe je eerst?',
        opties: [
          { nl: 'Wassen en aankleden.', goed: true },
          { nl: 'Het eten brengen.' },
          { nl: 'De rolstoel halen.' },
        ],
        uitleg: { nl: 'Eerst wassen en aankleden, daarna het eten.', en: 'First washing and dressing, then breakfast.' },
      },
    ],
  },

  // ---------------------------------------------------------------- Horeca
  {
    id: 'g.horeca.allergie',
    sector: 'hospitality',
    titel: 'Een allergie',
    naUnit: 'u.horeca',
    recht: true, // ⚖️ bij een allergie vraag je het na (allergenen), je gokt niet
    beurten: [
      { wie: 'jada', nl: 'Tafel zes. Een gast heeft een allergie voor noten.' },
      { wie: 'ik', nl: 'Oké. Zitten er noten in de soep?' },
      { wie: 'jada', nl: 'Ik weet het niet. Vraag het even aan de chef.' },
      { wie: 'jada', nl: 'En schrijf het op de bestelling.' },
    ],
    geluid: { nl: 'Restaurantkeuken: pannen, de afzuiging zoemt, borden worden neergezet.', niveau: 'midden' },
    vragen: [
      {
        vraag: 'Waar heeft de gast een allergie voor?',
        opties: [
          { nl: 'Voor vlees.' },
          { nl: 'Voor noten.', goed: true },
          { nl: 'Voor melk.' },
        ],
        uitleg: { nl: 'De gast aan tafel zes heeft een allergie voor noten.', en: 'The guest at table six is allergic to nuts.' },
      },
      {
        vraag: 'Aan wie vraag je het?',
        opties: [
          { nl: 'De gast.' },
          { nl: 'De baas.' },
          { nl: 'De chef.', goed: true },
        ],
        uitleg: {
          nl: 'Bij een allergie vraag je het altijd aan de chef.',
          en: 'With an allergy you always ask the chef.',
        },
      },
    ],
  },
  {
    id: 'g.horeca.koelcel',
    sector: 'hospitality',
    titel: 'In de koelcel',
    naUnit: 'u.horeca',
    recht: true, // ⚖️ hygiëne: de datum op wat in de koelcel gaat
    beurten: [
      { wie: 'henk', nl: 'Zet het vlees even in de koelcel.' },
      { wie: 'ik', nl: 'Oké. Op welke plank?' },
      { wie: 'henk', nl: 'Onderaan. En schrijf de datum erop.' },
      { wie: 'henk', nl: 'Daarna snijd je de uien. Om vijf uur komen de eerste gasten.' },
    ],
    geluid: { nl: 'Keuken: de koelcel zoemt, een mes op een plank, de afzuiging.', niveau: 'zacht' },
    vragen: [
      {
        vraag: 'Wat schrijf je op het vlees?',
        opties: [
          { nl: 'De datum.', goed: true },
          { nl: 'De prijs.' },
          { nl: 'Je naam.' },
        ],
        uitleg: {
          nl: 'Op eten in de koelcel staat altijd de datum.',
          en: 'Food in the cold room always has the date on it.',
        },
      },
      {
        vraag: 'Hoe laat komen de eerste gasten?',
        opties: [
          { nl: 'Om vier uur.' },
          { nl: 'Om vijf uur.', goed: true },
          { nl: 'Om zes uur.' },
        ],
        uitleg: { nl: 'Henk zegt: om vijf uur komen de eerste gasten.', en: 'Henk says: the first guests come at five.' },
      },
    ],
  },
  {
    id: 'g.horeca.rekening',
    sector: 'hospitality',
    titel: 'De rekening',
    naUnit: 'u.horeca',
    beurten: [
      { wie: 'bram', nl: 'Jada, tafel acht wil de rekening.' },
      { wie: 'jada', nl: 'Oké, ik kom eraan. Ruim jij tafel twee even af?' },
      { wie: 'bram', nl: 'Ja. De fooi gaat in de pot, hè?' },
      { wie: 'jada', nl: 'Ja, achter de bar. Die delen we op vrijdag.' },
    ],
    geluid: { nl: 'Restaurant: gasten praten zacht, bestek tikt op borden, een koffiemachine.', niveau: 'midden' },
    vragen: [
      {
        vraag: 'Wie wil de rekening?',
        opties: [
          { nl: 'Tafel twee.' },
          { nl: 'Tafel tien.' },
          { nl: 'Tafel acht.', goed: true },
        ],
        uitleg: { nl: 'Tafel acht wil de rekening; tafel twee ruimt Bram af.', en: 'Table eight wants the bill; Bram clears table two.' },
      },
      {
        vraag: 'Waar gaat de fooi heen?',
        opties: [
          { nl: 'In de pot achter de bar.', goed: true },
          { nl: 'In de kassa bij de deur.' },
          { nl: 'In de zak van Bram.' },
        ],
        uitleg: { nl: 'De fooi gaat in de pot; op vrijdag delen ze hem.', en: 'The tips go in the jar; they share them on Friday.' },
      },
    ],
  },

  // ---------------------------------------------------------------- Schoonmaak
  {
    id: 'g.schoonmaak.glad',
    sector: 'cleaning',
    titel: 'De vloer is glad',
    naUnit: 'u.clean',
    recht: true, // ⚖️ natte vloer: zet het bordje neer
    beurten: [
      { wie: 'jada', nl: 'Ben je klaar met de gang? Zet het bordje neer.' },
      { wie: 'jada', nl: 'De vloer is nog glad. Een half uur ongeveer.' },
      { wie: 'ik', nl: 'Oké. Waar staat het bordje?' },
      { wie: 'jada', nl: 'Bij de emmers, in kast twee.' },
    ],
    geluid: { nl: 'Kantoorgang: een stofzuiger in een andere kamer, een deur, ver weg een lift.', niveau: 'zacht' },
    vragen: [
      {
        vraag: 'Wat doe je eerst?',
        opties: [
          { nl: 'Je leegt de prullenbak.' },
          { nl: 'Je haalt een nieuwe emmer.' },
          { nl: 'Je zet het bordje neer.', goed: true },
        ],
        uitleg: {
          nl: 'Bij een natte vloer zet je het bordje neer.',
          en: 'With a wet floor you put the sign down.',
        },
      },
      {
        vraag: 'Waar staat het bordje?',
        opties: [
          { nl: 'In kast twee.', goed: true },
          { nl: 'In kast drie.' },
          { nl: 'Op de wc.' },
        ],
        uitleg: { nl: 'Jada zegt: bij de emmers, in kast twee.', en: 'Jada says: by the buckets, in cupboard two.' },
      },
    ],
  },
  {
    id: 'g.schoonmaak.mengen',
    sector: 'cleaning',
    titel: 'Niet mengen',
    naUnit: 'u.clean',
    recht: true, // ⚖️ schoonmaakmiddelen nooit mengen
    beurten: [
      { wie: 'henk', nl: 'Gebruik voor de wc’s alleen het blauwe middel.' },
      { wie: 'henk', nl: 'Meng het nooit met een ander middel. Dan krijg je damp.' },
      { wie: 'ik', nl: 'Oké. Hoeveel doe ik in de emmer?' },
      { wie: 'henk', nl: 'Een half kopje op tien liter water.' },
    ],
    geluid: { nl: 'Toiletruimte: een kraan loopt, een emmer vult zich, galm van tegels.', niveau: 'zacht' },
    vragen: [
      {
        vraag: 'Welk middel gebruik je voor de wc’s?',
        opties: [
          { nl: 'Het groene middel.' },
          { nl: 'Het blauwe middel.', goed: true },
          { nl: 'Twee middelen samen.' },
        ],
        uitleg: { nl: 'Henk zegt: alleen het blauwe middel.', en: 'Henk says: only the blue product.' },
      },
      {
        vraag: 'Waarom meng je de middelen niet?',
        opties: [
          { nl: 'Dan is het te duur.' },
          { nl: 'Dan ruikt het niet.' },
          { nl: 'Dan krijg je damp.', goed: true },
        ],
        uitleg: {
          nl: 'Schoonmaakmiddelen mengen kan gevaarlijke damp geven.',
          en: 'Mixing cleaning products can give off dangerous fumes.',
        },
      },
    ],
  },
  {
    id: 'g.schoonmaak.klaar',
    sector: 'cleaning',
    titel: 'Bijna klaar',
    naUnit: 'u.finish',
    beurten: [
      { wie: 'jada', nl: 'Ben je klaar met de wc’s?' },
      { wie: 'ik', nl: 'Bijna, nog twee.' },
      { wie: 'jada', nl: 'Oké. Daarna stofzuigen in kamer tien en elf.' },
      { wie: 'jada', nl: 'Om negen uur gaat alles op slot. Meld je dan even af.' },
    ],
    geluid: { nl: 'Kantoor in de avond: stil, de airco zoemt, een stofzuiger ver weg.', niveau: 'zacht' },
    vragen: [
      {
        vraag: 'Hoeveel wc’s moet je nog doen?',
        opties: [
          { nl: 'Twee.', goed: true },
          { nl: 'Tien.' },
          { nl: 'Elf.' },
        ],
        uitleg: { nl: 'Je zegt: bijna, nog twee.', en: 'You say: almost, two more.' },
      },
      {
        vraag: 'Wat gebeurt er om negen uur?',
        opties: [
          { nl: 'De pauze begint.' },
          { nl: 'Alles gaat op slot.', goed: true },
          { nl: 'Je begint in kamer tien.' },
        ],
        uitleg: { nl: 'Om negen uur gaat alles op slot; dan meld je je af.', en: 'At nine everything is locked; then you sign off.' },
      },
    ],
  },

  // ---------------------------------------------------------------- Winkel
  {
    id: 'g.winkel.datum',
    sector: 'retail',
    titel: 'Over de datum',
    naUnit: 'u.shop',
    recht: true, // ⚖️ een product over de datum (te gebruiken tot) haal je uit het schap
    beurten: [
      { wie: 'henk', nl: 'Kijk even naar de producten in gang drie.' },
      { wie: 'henk', nl: 'Is een product over de datum? Dan haal je het weg.' },
      { wie: 'ik', nl: 'Oké. Waar laat ik die producten?' },
      { wie: 'henk', nl: 'In de bak achterin. Niet terug in het schap.' },
    ],
    geluid: { nl: 'Supermarkt: koelvakken zoemen, een winkelwagen rolt voorbij, mensen praten zacht.', niveau: 'zacht' },
    vragen: [
      {
        vraag: 'Wat doe je met een product over de datum?',
        opties: [
          { nl: 'Je zet het achteraan in het schap.' },
          { nl: 'Je doet het in de bak achterin.', goed: true },
          { nl: 'Je zet het bij de kassa.' },
        ],
        uitleg: { nl: 'Een product over de datum haal je uit het schap.', en: 'You take a product past its date off the shelf.' },
      },
      {
        vraag: 'In welke gang zijn de producten?',
        opties: [
          { nl: 'In gang drie.', goed: true },
          { nl: 'In gang twee.' },
          { nl: 'In gang tien.' },
        ],
        uitleg: { nl: 'Henk zegt: de producten in gang drie.', en: 'Henk says: the products in aisle three.' },
      },
    ],
  },
  {
    id: 'g.winkel.klant',
    sector: 'retail',
    titel: 'Een klant wil rijst',
    naUnit: 'u.shop',
    beurten: [
      { wie: 'jada', nl: 'Die klant wil rijst. Weet jij waar die ligt?' },
      { wie: 'ik', nl: 'Nee, dat weet ik niet zeker.' },
      { wie: 'jada', nl: 'In gang vier, onderaan.' },
      { wie: 'jada', nl: 'Loop even met de klant mee. Dat vinden klanten fijn.' },
    ],
    geluid: { nl: 'Supermarkt: een scanner piept bij de kassa, een winkelwagen, mensen praten zacht.', niveau: 'zacht' },
    vragen: [
      {
        vraag: 'Waar ligt de rijst?',
        opties: [
          { nl: 'In gang vijf, achteraan.' },
          { nl: 'Bij de kassa, achterin.' },
          { nl: 'In gang vier, onderaan.', goed: true },
        ],
        uitleg: { nl: 'Jada zegt: in gang vier, onderaan.', en: 'Jada says: in aisle four, at the bottom.' },
      },
      {
        vraag: 'Wat doe je met de klant?',
        opties: [
          { nl: 'Je loopt met de klant mee.', goed: true },
          { nl: 'Je zegt: in gang vier.' },
          { nl: 'Je belt de chef even.' },
        ],
        uitleg: { nl: 'Jada zegt: loop even met de klant mee.', en: 'Jada says: walk along with the customer.' },
      },
    ],
  },
  {
    id: 'g.winkel.kassa',
    sector: 'retail',
    titel: 'Op de kassa',
    naUnit: 'u.shop',
    recht: true, // ⚖️ alcohol alleen aan mensen van 18 jaar of ouder (Alcoholwet)
    beurten: [
      { wie: 'henk', nl: 'Jij zit vandaag op kassa twee, tot drie uur.' },
      { wie: 'henk', nl: 'Wil iemand alcohol? Vraag dan even om een ID.' },
      { wie: 'henk', nl: 'Onder de achttien mag dat niet.' },
      { wie: 'ik', nl: 'Oké. En mijn pauze?' },
      { wie: 'henk', nl: 'Om half één. Dan zit Jada op jouw kassa.' },
    ],
    geluid: { nl: 'Supermarkt bij de kassa: scanners piepen, een lade met geld gaat open, een kar.', niveau: 'midden' },
    vragen: [
      {
        vraag: 'Wat doe je als iemand alcohol wil?',
        opties: [
          { nl: 'Je zegt: dat kan niet.' },
          { nl: 'Je vraagt om een ID.', goed: true },
          { nl: 'Je belt eerst de chef.' },
        ],
        uitleg: { nl: 'Henk zegt: onder de achttien mag dat niet.', en: 'Henk says: under eighteen that is not allowed.' },
      },
      {
        vraag: 'Hoe laat is je pauze?',
        opties: [
          { nl: 'Om half twee.' },
          { nl: 'Om drie uur.' },
          { nl: 'Om half één.', goed: true },
        ],
        uitleg: { nl: 'Henk zegt: je pauze is om half één.', en: 'Henk says: your break is at half past twelve.' },
      },
    ],
  },
];
