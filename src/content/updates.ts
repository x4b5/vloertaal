/**
 * What changed in Vloertaal, newest first, in plain Dutch for coaches, teachers and partners.
 * Shown in two places from this one list: the date of the newest entry at the bottom of "Over"
 * ("Laatst bijgewerkt"), and the page vloertaal.nl/nieuw (made at build time, vite.config.ts).
 *
 * Adding an update: put a new entry at the top, with the date it goes live (YYYY-MM-DD) and a
 * few short lines. One line = one change a user or coach would notice.
 */
export interface Update {
  /** YYYY-MM-DD, the day it went live. */
  date: string;
  items: string[];
}

export const UPDATES: Update[] = [
  {
    date: '2026-10-18',
    items: [
      'Nieuwe les bij Eerste werkdag: De eerste dag: je weg vinden. Met woorden als de ingang, de receptie, de kantine en de buddy.',
      'Nieuwe les bij Veiligheid: Dit heb ik nog niet geleerd. Met woorden als nog niet, mogen, proberen en voordoen.',
      'Tip over berichten en het rooster: een dienst ruilen mag pas als je leidinggevende of de planner het goed vindt.',
      'Tip over beschermende kleding: vraag om je eigen maat. Wat niet past, beschermt niet goed.',
      'Herhaal vandaag: de zinnen wisselen weer elke dag, zodat er meer verschillende zinnen terugkomen.',
      'Zinnen bouwen: soms zijn twee volgordes goed. "Wie is vandaag mijn buddy?" en "Wie is mijn buddy vandaag?" tellen nu allebei.',
      'Heeft een nieuw woord nog geen opname en je telefoon geen Nederlandse stem? Dan slaat de les die luisteroefening over, in plaats van een stille knop.',
      'Voortgang terugzetten: heeft het bestand minder lessen dan je telefoon, dan vraagt de app het nog een keer, met beide aantallen. Samenvoegen is de eerste keuze; een bestand zonder lessen kun je alleen samenvoegen.',
      'Bij "Bewaar je voortgang" staat nu: nieuwe telefoon? Je code heb je daar ook nodig. Een te groot bestand krijgt een eigen melding, en er staat "1 les" in plaats van "1 lessen".',
      'Herinnering: een andere tijd kiezen verandert de herinnering in je agenda, er komt geen tweede bij. En je kunt de herinnering nu ook stoppen.',
      'Lessen op deze telefoon: na "Aan" zie je welk onderwerp wordt opgeslagen, hoe ver het is, en of er te weinig ruimte is.',
      'Voortgang wissen: "Annuleren" staat nu bovenaan. Je taal, je code en je instellingen blijven; de app begint niet opnieuw bij de taalkeuze.',
      'Schrijven: in het Arabisch, Tigrinya, Perzisch, Dari, Oekraïens en Bulgaars staat nu uitgelegd wat de drie keuzes betekenen.',
      'In het Arabisch, Perzisch en Dari staat de punt of het vraagteken van een Nederlandse zin weer aan het eind.',
      'Een certificaat dat je al had, blijft staan als er een nieuwe les bij dat onderwerp komt.',
      'Na een update laadt de app zelf opnieuw als iets niet meer laadt, in plaats van een leeg scherm. Oude bestanden worden opgeruimd, zodat de app op je telefoon niet steeds groter wordt.',
      'Certificaat: een lange naam past nu op het certificaat, en "Bewaar of deel" bewaart het plaatje als delen niet lukt.',
      'Een les op slot in de proefversie opent met één tik de uitleg over de volledige versie. Een les die op de vorige les wacht, heeft een zandloper.',
      'Klanken: na een fout antwoord zie je nog wat je koos.',
    ],
  },
  {
    date: '2026-10-17',
    items: [
      'Een onderwerp wordt nu ook afgemaakt (met certificaat) als je elke dag eerst "Herhaal vandaag" doet.',
      'Na het eerste onderwerp voor jouw werk komen de woorden van je eigen sector eerder, bijvoorbeeld in de zorg.',
      'Bram zegt pas "tot morgen" na een les, niet al na de herhaling. Na een vrije dag zegt hij dat je reeks doorgaat.',
      'In de week bovenaan staat elke dag anders, ook in het Turks, Pools, Oekraïens, Bulgaars en Roemeens.',
      'Het vinkje in plaatjes (bij "ja", "klaar") is blauw, zodat het niet lijkt op "goed antwoord".',
      'De herinnering in je agenda staat er nu ook in je eigen taal.',
      'Een les op slot opent nu met één tik de uitleg over de volledige versie.',
      'Werkregels: het certificaat zegt "Onderwerp" in plaats van "Unit", en "Bram vertelt" staat er weer helemaal.',
      'Taal: "ziekmelden" en "betermelden" staan nu goed gespeld, als één woord.',
      'Nog geen code? Bij "Volledige versie" staat nu waar je er een vraagt: bij je docent of coach, of via hoi@vloertaal.nl.',
      'De app telt nu ook, zonder naam, ongeveer hoe lang een les duurt. Zo zien we welke les te lang is.',
      'Nieuwe les bij Veiligheid: Een ongeluk melden. Met woorden als gewond, de EHBO-doos en de BHV’er.',
      'Nieuwe les bij Werk en contract: Werken via een uitzendbureau. Met woorden als de uitzendkracht, de intercedent en het urenbriefje.',
      'Nieuwe les bij Samenwerken: Opdrachten van je leidinggevende. Met woorden als de taak, eerst, daarna en bijna.',
      'Alle gratis lessen gedaan? Dan staat op het beginscherm een grote gele kaart naar de volledige versie. De code is gratis, en de mail om er een te vragen is al geschreven.',
      'Bram zegt niet meer "tot morgen" als er nog woorden te herhalen zijn.',
      'Zin bouwen: elk fout stukje staat er na de zin nog één keer, niet bij elke tik opnieuw.',
      'Werkregels: meer uitleg over uitzendwerk, oproepwerk, je contract en vakantie aanvragen.',
    ],
  },
  {
    date: '2026-10-16',
    items: [
      'Nieuw: Werkregels, voor wie al Nederlands spreekt. Over de geschreven en ongeschreven regels op het werk. Het is nog een bètaversie: experts kijken de uitleg nog na.',
      'De onderwerpen staan nu in 8 thema\'s, zoals "Starten", "Je baan" en "Je rechten". Zo zie je beter waar je bent.',
      'Nieuw onderwerp: In de winkel (vakken vullen, de kassa, wisselgeld, ID vragen).',
      'Nieuw onderwerp: Rekenen (uren en tijden, geld, kilo en meter).',
      'Nieuw onderwerp: Uitdrukkingen en gezegden, zoals "een eitje" en "aan de bel trekken". Je ziet wat de woorden letterlijk zeggen en wat ze betekenen.',
      'Daarna kom je in latere lessen een uitdrukking tegen die bij het onderwerp past, zoals "De klant is koning".',
      'Bij Alle onderwerpen kies je nu zelf: op thema of op volgorde.',
      'Nieuw onderwerp: Klanken. Hoor en zeg het verschil tussen woorden die bijna hetzelfde klinken, zoals man en maan, pak en bak.',
      'Bij 3, 7, 14 en 30 dagen op rij: een kort "Wist je dat?", bijvoorbeeld hoeveel mensen met goed Nederlands werk hebben.',
      'Voor begeleiders: de feiten over waarom Nederlands leren helpt, met de bronnen erbij.',
      'Vloertaal is nog een testversie: dat staat nu naast de naam ("bèta") en bij Over.',
      'Zonder code kun je nu de eerste les van elk thema doen (de sneak preview). Met een code gaat alles open.',
      'Voor testers: een vlaggetje in elke les. Een tik opent een mail met de plek al ingevuld.',
      'Het vlaggetje Melden staat nu standaard aan in elke les: iedereen kan laten weten wat er niet klopt. Uitzetten kan onderaan bij Over.',
      'Bij Over, "Vraag of fout?", staat nu ook dat je in een les op het vlaggetje Melden kunt tikken.',
      'De app telt nu ook, zonder naam, welke lessen beginnen en waar iemand stopt. Zo zien we welke les te lang of te moeilijk is.',
      'Staat de app op je beginscherm? Dan haalt hij zelf de nieuwe versie op als je hem weer opent. Bij Over staat welke versie je hebt.',
      'Bij Hulp: wie je kunt bellen over je werk (112, het Juridisch Loket, de Arbeidsinspectie en FairWork).',
      'In Werkregels staat bij elke les wat je daarna weet.',
      'Uitleg verbeterd over ziek zijn als uitzendkracht, over je vakantiedagen, de WW, een tijdelijk contract en zwart werk.',
      'Bij een fout antwoord staat "Straks weer": de vraag komt aan het eind van de les terug. Bij zin bouwen tellen twee per ongeluk getikte stukjes niet als fout.',
      'Na een antwoord zie je de hele uitleg, ook op een kleine telefoon.',
      'Na een les passen de cijfers weer in hun kaartje, ook op een iPhone ("12/13").',
      'Lange woorden in een titel breken nu netjes af.',
      'Klokjes bij "uur", "kwartier" en "half uur". Euro\'s in plaats van dollars, en een gewicht bij "kilo".',
      'Een vinkje bij een thema als het helemaal af is. Geen verspringende nummers meer.',
      'Grotere letters op de nieuwe schermen. Lange woorden breken tussen de woorddelen.',
      'Tijden en datums staan in het Arabisch, Perzisch en Dari de goede kant op.',
      'Vertalingen verbeterd, onder andere in het Arabisch, Bulgaars en Tigrinya.',
      'De app opent sneller: sommige schermen laden pas als je ze nodig hebt.',
    ],
  },
  {
    date: '2026-10-15',
    items: [
      'De pilot is gestart: Vloertaal staat online op vloertaal.nl.',
      'Bram stelt zich voor: "Hallo, ik ben Bram."',
      'Nieuw bij Over: onze missie, wie Bram is, je privacy, "Goed om te weten" en een contactadres (hoi@vloertaal.nl).',
      'Over Vloertaal kun je nu ook in het Nederlands lezen, met de knop NL.',
      'Uitleg over 112 verbeterd: ook bij brand of een misdrijf dat nu gebeurt.',
      'Tips over uitbuiting verwijzen naar de vakbond, het Juridisch Loket of FairWork.',
      'Betere Nederlandse zinnen: "Het heeft spoed." en "Wilt u even tegen mijn telefoon praten?"',
      'De stem zegt "app" nu goed (als "ep").',
      'De knop met de schildpad (langzaam voorlezen) is groter.',
      'Vlaggen bij de talen, alleen waar dat niet gevoelig is.',
      'Bram zwaait nu goed, met zijn handpalm naar voren.',
      'Alle vertalingen in 9 talen gecontroleerd met een blinde terugvertaling. Zo\'n 90 fouten in de betekenis en 560 kleinere punten zijn verbeterd.',
      'Nieuw logo: Bram met de V op zijn helm. Bram zegt rustig één zin op het beginscherm en na een les.',
      'Echte meervouden in het Pools, Oekraïens, Roemeens, Arabisch en Bulgaars.',
      'Latere lessen worden stap voor stap moeilijker. "Herhaal vandaag" wisselt meer af.',
    ],
  },
];

/** The date of the newest update. */
export const LAST_UPDATE = UPDATES[0].date;

/** "15 oktober 2026" in a language (Dutch by default). */
export function updateDate(day: string, locale = 'nl-NL'): string {
  const [y, m, d] = day.split('-').map(Number);
  try {
    return new Date(y, m - 1, d).toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
  } catch {
    return new Date(y, m - 1, d).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });
  }
}
