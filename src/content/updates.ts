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
    date: '2026-10-30',
    items: [
      'Nieuw bij Instellingen › Taal en ik: "Laat zien hoe het gaat". De telefoon maakt een kaart voor je begeleider: welke onderwerpen af zijn, op hoeveel dagen je oefende in de laatste 4 weken, je laatste les en (in het spoor Taal) de toets "Wat ken je al?". Jij laat de kaart zelf zien, of je bewaart of deelt hem als plaatje. Er gaat niets naar ons.',
      'Nieuw bij Instellingen › Lessen: Tempo. "Rustig" (zoals tot nu toe) of "Normaal": dan hoor je het Nederlands op het tempo van collega’s. In de latere thema’s van het spoor Taal (Samenwerken, Je rechten, Leven in Nederland, Jouw sector) hoor je een zin de tweede keer in een les op normaal tempo. De knop "Langzaam" blijft. Werkregels blijft zoals het was.',
      'Nieuw in het spoor Taal: de toets "Wat ken je al?" (ongeveer 10 minuten, luisteren, woorden en zinnen). Na de start en na 4 weken (of 3 onderwerpen), met een andere versie. De uitslag toont wat je erbij hebt geleerd, en je eigen stem van toen en nu. Geen cijfer, en alles blijft op je telefoon.',
      'Werkregels: 14 nieuwe lessen voor Entree. Twee nieuwe onderwerpen: Schrijven op je werk (een bericht of mail aan je werk, een korte sollicitatiemail) en Jouw weg (wat kan ik en wat wil ik, na Entree: niveau 2 of werk, terugkijken en je portfolio).',
      'Werkregels: nieuwe lessen bij Veilig en gezond werken (fit voor je werk: slapen, eten, bewegen; alcohol, drugs en je werk), bij Uitkering, werk en geld (je geld per maand en sparen; kopen, abonnementen en ruilen) en bij Meedoen in Nederland (nieuws, nepnieuws en een mening).',
      'Werkregels: twee nieuwe sectoronderwerpen, Werken in de techniek (gereedschap, vonken en lawaai; stroom) en Werken in de garage (veilig in de werkplaats; de werkorder en de klant). Je kiest ze nog niet bij "Waar werk je?": je vindt ze in het hele lespad, of onder "Andere sectoren".',
      'Voor de Entree-opleiding, in het spoor Taal: zes nieuwe onderwerpen aan het eind van het lespad. Je werk afronden (de werkbon lezen, opruimen en afmelden), In de werkplaats (gereedschap, lawaai en stroom), In de garage (banden en olie, en de klant beslist), Stage lopen (de POK en feedback vragen), Meedoen in Nederland (stemmen, de politie en bezwaar maken) en Online op je werk (inloggen en nepmails).',
      'Nieuwe lessen in bestaande onderwerpen: Waar ben ik goed in? en Na Entree (Diploma’s en verder komen), Een mail aan je werk (Bellen en appen met je werk), Je geld per maand (Geld en post) en Fit voor je werk (Gezondheid).',
      'Alle nieuwe lessen hebben een tip "Zo werkt het hier" en een vertaling in de 13 hulptalen. Een moedertaalspreker kijkt de vertalingen nog na. De opnames volgen; tot dan leest de stem van je telefoon voor.',
      'Nieuw onderwerp bij Starten: Getallen en gegevens. Twee lessen: je gegevens (je naam spellen, je telefoonnummer, het formulier) en dagen en datums (volgende week, tot en met). Het komt vóór Tijd en rooster.',
      'Nieuwe les bij Gezondheid: Lichaam en klachten. Met het hoofd, de rug, de hand en het oog, en de tip: zeg wat er gebeurde en waar het pijn doet.',
      'Nieuwe les bij Verlof en ziekte: Kinderen en werk. Een ziek kind ophalen, calamiteitenverlof, zwanger zijn en de kinderopvang.',
      'Nieuwe les bij Werk kwijt: Je werk stopt. Je eindafrekening, je vakantiegeld en vrije dagen, en wat er nog meer stopt: het huis en de zorgverzekering via het bureau.',
      'Nieuwe les bij Werk en contract: Papieren, inburgering en je werk. Mag ik hier werken, werknemer of zzp’er, en taalles naast je rooster.',
      'In deze nieuwe lessen komen woorden als de opzegtermijn, het calamiteitenverlof, het Juridisch Loket en de Belastingdienst terug in zinnen. De vertalingen en opnames volgen.',
      'Vier nieuwe hulptalen: Spaans, Portugees, Frans en Duits. Alle uitleg, woorden, zinnen en tips staan nu ook in die talen.',
      'Een telefoon in het Spaans, Portugees, Frans of Duits kiest die taal bij de eerste start zelf voor (je kunt altijd een andere kiezen).',
      'Nieuwe sector: Tuinbouw. Bij "Waar werk je?" kies je "Iets anders" en dan "Tuinbouw". Nieuw onderwerp In de kas, met twee lessen: oogsten en sorteren, en veilig in de kas. Met woorden als de krat, het gewas, de plukkar en de spuitmiddelen. Werkregels: Veilig in kas en veld, en Tempo en stukloon.',
      'Werkregels: twee nieuwe lessen, Kinderen en zorg (zwanger, verlof, een ziek kind, kinderopvangtoeslag) en Je werk stopt: regel dit (laatste loon, huis, zorgverzekering, adres). En 15 nieuwe vragen in andere lessen, onder meer over bezwaar maken, de BHV\'er, pensioen, inburgering, de vakbond en of je hier mag werken.',
      'Nieuw bij Instellingen: in welk land werk je? Kies je België (Vlaanderen)? Dan staat in Werkregels dat de regels over Nederland gaan, en bij Hulp staat waar je in België hulp vindt.',
      'Werkregels: de eerste keer zie je eerst "Goed om te weten": de regels zijn algemene informatie over werk in Nederland, geen juridisch advies. Boven de lessen staat dat ook in één korte regel.',
    ],
  },
  {
    date: '2026-10-28',
    items: [
      'Vloertaal staat nu open voor iedereen: alle lessen zijn open, je hebt geen code meer nodig.',
    ],
  },
  {
    date: '2026-10-19',
    items: [
      'Nieuw onderwerp bij Je baan: Slimme apps en AI. Vier lessen: AI als hulp, wat je niet deelt, nep of echt, en als een app beslist. Met woorden als de chatbot, het wachtwoord, de stem en het besluit.',
      'Werkregels: nieuwe les AI op je werk. AI maakt fouten, wat zet je niet in een chatbot, neppe stemmen, en wat als een computer over jou beslist.',
      'Rustiger beginscherm: wat dubbel stond is weg. Bram herhaalt niet meer wat de kaart Herhaal vandaag al zegt.',
      '30 woorden hadden nog een emoji. Ze hebben nu een eigen tekening, zoals de ingang, de EHBO-doos, het bonnetje en de meter.',
    ],
  },
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
