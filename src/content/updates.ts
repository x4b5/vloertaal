import { registerUpdates } from './updatesLive';

/**
 * What changed in Vloertaal, newest first, in plain Dutch for coaches, teachers and partners.
 * Shown in two places from this one list: in the app, "Wat is er nieuw?" at the bottom of "Over"
 * (with the date of the newest entry) opens the whole list (src/components/News.tsx), and the page
 * vloertaal.nl/nieuw (made at build time, vite.config.ts).
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
    date: '2026-11-14',
    items: [
      'Elke sector heeft nu vier lessen in Taal: er zijn 17 lessen bij. Bouw: meten, en een opgeruimde bouwplaats. Productie: je dienst overdragen. Zorg: zeggen wat je ziet, en iemand helpen opstaan. Horeca: de afwas, en korte woorden als het druk is. Schoonmaak: je ronde, en kleuren en doeken. Winkel: een klant helpen, en lastige momenten. Tuinbouw: de plant verzorgen, en buiten werken. Techniek: de tekening en de maat, en lassen. Garage: onderdelen van de auto, en veilig met benzine en elektrische auto’s.',
      'Nieuw onderwerp in Taal, direct na Hulp vragen: Instructies. Vier lessen met de gewone doe-woorden van het werk: zetten, leggen, brengen en vasthouden; aanzetten, opendoen, dichtdoen en stoppen; duwen, trekken, vullen en leegmaken; nu, dan, altijd en genoeg. Met vier tips: zeg dat je het vast hebt, stop is stop, zeg het als je klaar bent, en vraag wat eerst moet.',
      'Hulp vragen heeft nu vier lessen in plaats van één: hoe moet dit, mag ik iets vragen, en waar is het. Met drie nieuwe tips van "Zo werkt het hier": laat een collega even kijken, het goede moment om iets te vragen, en de weg vragen.',
      'Ook Logistiek heeft nu vier lessen per onderwerp. In het magazijn: bestellingen verzamelen, en laden en lossen. Vervoer en bezorging: de bus nakijken, en vertraging onderweg.',
      'Bij elke nieuwe les hoort een tip van "Zo werkt het hier", in alle hulptalen. De vertalingen zijn nog niet nagekeken door een moedertaalspreker. De stemmen volgen: tot dan leest de stem van je telefoon de nieuwe zinnen voor.',
    ],
  },
  {
    date: '2026-11-10',
    items: [
      'Na je 3e en je 15e les vraagt de app één keer: "Wat vind je van Vloertaal?", in je eigen taal, met drie gezichtjes. Eén tik is genoeg, en overslaan kan altijd met Verder. We tellen alleen welk gezichtje, zonder naam. Zo zien we of de app je helpt.',
      'De tips van "Zo werkt het hier" staan nu ook op de website, in elke taal: één pagina per tip, en een lijst per taal (bijvoorbeeld vloertaal.nl/pl/tip). Zo vindt iemand ze ook via Google of Bing in de eigen taal. De tips over rechten komen later, als een expert ze heeft nagekeken.',
      'Uit een ander land? Bij drie tips staat nu wat je moet weten als je uit een ander land komt, in je eigen taal: ziek en naar je eigen land (vraag het eerst), je WW meenemen naar een ander EU-land (formulier U2), en gedetacheerd werken (de A1-verklaring). Je vindt ze in de lessen over ziek zijn, werk kwijt en werken via een uitzendbureau, en bij Hulp › Zo werkt het hier. Nog niet nagekeken door een expert.',
      'Het woord "app" klonk niet goed, alleen en in zinnen als "Ik kijk elke dag in de app.". De stem krijgt het nu als "epp" en in het Nederlands. Tot de nieuwe opnames er zijn, leest de stem van je telefoon die zinnen voor.',
    ],
  },
  {
    date: '2026-11-09',
    items: [
      'Staat je telefoon op Nederlands? Dan zie je bij de start meteen alle talen, met "Ik spreek al Nederlands" (Werkregels) bovenaan. Wie een andere taal spreekt, vindt de eigen taal in de lijst, in het eigen schrift.',
      'Van Nederlands leren naar Werkregels wisselen? Dan zie je eerst wat er verandert: alles wordt Nederlands, je hulptaal gaat uit, en je herhaalt regels in plaats van woorden. Je voortgang blijft bewaard, en terug wisselen kan altijd. Tik op "Ja, naar Werkregels" of op Annuleren.',
      'Werkregels: zei je bij de start waar je werkt? Dan begin je nu bij "Je eerste dag", niet bij "Werk zoeken". "Werk zoeken" komt later in je lespad. Koos je "Weet ik nog niet", dan blijft het zoals het was.',
      'Nieuw bij Hulp: "Voor je begeleider". Eén tik, en je ziet de kaart die je aan je docent, coach of baas kunt laten zien. Jij kiest wat je laat zien.',
      'Voor begeleiders: een link naar een onderwerp werkt nu voor iedereen. Stuur je de link van Loon naar iemand die Werkregels volgt, dan opent "Loon en loonstrook", en andersom. Eerder gebeurde er dan niets.',
      'Voor begeleiders: de pagina voor begeleiders begint nu met "In drie stappen": stuur de link of print het briefje, doe samen de eerste les, en kijk elke week samen naar de kaart. En er is een briefje in het Nederlands, voor wie al Nederlands spreekt (vloertaal.nl/briefje/nl).',
      'De kaart "Ik spreek al Nederlands" onder de talen heeft geen Nederlandse vlag meer: het is geen taal, maar Werkregels. En bij "In welk land werk je?" staat in Taal nu dat je de woorden en tips van dat land krijgt.',
    ],
  },
  {
    date: '2026-11-08',
    items: [
      'Bram moedigt vaker aan. Wie twee keer achter elkaar "Zeg het" overslaat, ziet Bram nu bij elke spreekopdracht, met steeds een andere zin: "Fouten horen bij leren. Niet begrepen? Zeg het nog een keer.", "Spannend? Dat hoort erbij. Zeg het toch." of "Je hoeft het niet perfect te zeggen. Probeer het gewoon." Spreek je weer in, dan stopt het. De oude zin "Nederlanders begrijpen je ook met fouten" is weg: dat klopt niet altijd.',
    ],
  },
  {
    date: '2026-11-05',
    items: [
      'Hoe zeg je het? in een les over klanken: de knop om verder te gaan komt pas als je de klank of het woord hebt beluisterd. Eerst luisteren, dan door. Staat het geluid uit, dan kun je meteen verder.',
      'Nieuwe hulptaal: Somalisch (Soomaali). Alle lessen, tips en schermen hebben nu ook een Somalische uitleg. De vertaling is nog niet nagekeken door een moedertaalspreker. Wie Somalisch spreekt en wil meelezen: graag!',
      'Hoe zeg je het? De mond beweegt nu ook op een laptop of telefoon die om minder beweging vraagt (bij Windows: animatie-effecten uit). Alleen als je zelf "Rustig scherm: aan" kiest, staat hij stil. En "cao" klinkt nu als "cee-aa-oo".',
      'De browser vertaalt de app niet meer automatisch. Chrome maakte van "Hij belt het" soms "Hij riem het" (het las "belt" als Engels), en dan klopte de stem niet meer met de tekst. De uitleg in je eigen taal geeft de app zelf.',
      'Nieuw onderwerp: Vervoer en bezorging (bij Logistiek). Pakketten bezorgen, de scanner, "klant niet thuis", een kapot pakket melden met een foto. En veilig en eerlijk onderweg: de steekwagen bij zware pakketten, je pauze, en wie je tijden en je route bepaalt.',
      'Nieuwe les bij In de productie: Werken met voedsel. Sieraden af, de snijhandschoen, de vriescel, allergenen, en een wondje aan je hand melden.',
      'Nieuwe les bij Gezondheid: Je goed voelen op het werk. Slecht slapen door ploegendienst, "het is te veel", heimwee, en met wie je kunt praten: je leidinggevende, de vertrouwenspersoon, de bedrijfsarts, de huisarts of 113.',
      'Nieuw onderwerp bij Samenwerken: Goed communiceren. Zeggen wat er mis is (wat, waar, wat je nodig hebt), goed luisteren en terugvragen ("Dus eerst de dozen tellen?", "Was dat een grapje?"), rustig blijven, bereikbaar zijn (opnemen, of dezelfde dag terugbellen), en de les Praat er op tijd over: niet weken met een probleem rondlopen, maar vragen "Heb je even tijd? Ik zit ergens mee."',
      'Nieuw onderwerp bij Samenwerken: Feedback en overleg. Wat feedback is (over je werk, niet over jou), feedback krijgen ("Kun je een voorbeeld geven?"), feedback geven (eerst iets goeds, dan rustig wat beter kan) en iets zeggen in het werkoverleg.',
      'Werkregels: les 8.1 oefent nu ook feedback goed ontvangen, en er is een nieuwe les 8.5: Feedback geven en rustig blijven.',
      'Communicatie: onder een les die praten met anderen oefent, staat nu "Communicatie", zoals bij Hulp vragen en Omgang met collega’s. (In een onderwerp waarin elke les over praten gaat, zoals Samenwerken, staat het er niet bij elke les.) Voor begeleiders staan die lessen op een rij, met een tip: wordt iemand stiller, of zegt die plots "ik stop"? Vraag "Hoe gaat het echt?" en maak tijd.',
      'Nieuwe les bij Samenwerken: Een nieuwe collega helpen. Welkom zeggen, iets voordoen, laten nadoen, en "Laat eens zien" in plaats van "Snap je het?".',
      'Verlof en ziekte zijn nu twee onderwerpen: Verlof (vrije dagen, kinderen en werk) en Ziekte (ziek thuis, en de nieuwe les Weer aan het werk na ziekte: rustig opbouwen, en zeggen wat je wel en nog niet kunt). Wat je al deed, blijft staan.',
      'Zeg het hardop: na het woord op de woordkaart staat nu "Zeg het hardop." Wie het woord zelf zegt, onthoudt het beter. Zonder geluid staat er "Zeg het zachtjes, of in je hoofd." Er wordt niets opgenomen. Dit staat nu ook bij "Zeg het zo" in een tip en bij "Zo zeg je het" in Werkregels.',
      'Bewegende plaatjes: nu bewegen 40 woorden even als je ze leert, zoals vallen, bukken, inklokken, ruilen, sorteren, uitzetten, mengen, eerst, daarna, voordoen en tellen. Tik op de speaker en je ziet het opnieuw. Bij "Rustig scherm" of "minder beweging" staat alles stil. Tillen en bukken laten de veilige manier zien: door je knieën, met een rechte rug.',
      'Toen en nu: de eerste keer dat je een zin inspreekt, bewaart je telefoon die opname. Spreek je dezelfde zin een week later of nog later weer in, dan hoor je ze naast elkaar: eerst toen, dan nu. Zo hoor je zelf dat je beter wordt.',
      'Zeg het samen: wie niet graag hardop praat, kan eerst samen met de stem meepraten. Er wordt dan niets opgenomen. Daarna probeer je het alleen. Bram zegt één keer: "Fouten mogen. Nederlanders begrijpen je ook met fouten."',
      'Snap je het? Af en toe zegt een collega in "Herhaal vandaag" een zin op gewone snelheid. Snap je hem niet? Zeg dan "Kunt u dat herhalen?". Dat kost nooit punten. Zo oefen je om eerlijk te vragen, in plaats van te knikken.',
      'Gelukt op het werk: zeg je een zin echt op je werk en tik je "Ja, gelukt"? Dan komt hij in je eigen lijst, bij Instellingen › Taal en ik. Bram telt mee: "Al 4 zinnen gelukt op het werk."',
      'Bij de volgende les staat nu hoe lang hij ongeveer duurt, bijvoorbeeld "± 6 min".',
      'Wat ken je al? De toets begint nu met vijf vragen over wat je durft, zoals om hulp vragen of zeggen dat je iets niet begrijpt. Er is geen goed of fout. Aan het eind zie je wat je toen durfde en wat nu.',
      'Voor begeleiders: knikken is niet altijd begrijpen. Vraag "Wat ga je nu doen?" in plaats van "Snap je het?".',
      'Privacy: de uitleg zegt nu ook wat er nieuw op je telefoon staat: de eerste opname van een zin (Toen en nu), je zinnen bij "Gelukt op het werk" en je antwoorden op "Durf je dit?". Niets daarvan gaat naar ons, en "Voortgang wissen" haalt het weg.',
    ],
  },
  {
    date: '2026-11-04',
    items: [
      'Kort en duidelijk: een nieuwe les bij Samenwerken. In veel talen vertel je eerst het hele verhaal. Op het werk hier zeg je eerst het belangrijkste, dan de reden, dan een vraag. Met een tip, ook voor een sollicitatiegesprek. Bij Werkregels staat een nieuwe vraag in de les over het sollicitatiegesprek: "Vertel eens iets over jezelf."',
      'Hoe zeg je het? Bij Hulp staat nu voor 15 klanken een getekende mond: aa, ee, ie, oo en uu, de korte a, e, i, o en u ernaast (zoals bij man en maan), en oe, eu, ui, ij/ei en ou/au. Tik op een klank en de mond laat zien hoe je hem maakt, met een korte uitleg in je eigen taal en een woord om na te zeggen. Bij dat woord zegt de mond het hele woord mee (m – uu – r), en de letters lichten op. Naast de mond zie je hem ook van opzij, doorgesneden: zo zie je wat je tong doet. Met de schuif onder de mond ga je zelf door het woord, klank voor klank. Met de schuif bij de schildpad zet je het geluid en de mond langzamer, tot een kwart van de snelheid. De lessen van Klanken beginnen met de kaarten van hun klanken.',
      'Elke kleur heeft nu een eigen karakter. Zand is warm oker, als een werkplaats. Haven is petrol met het geel van een boei, en een golfje boven de balk onderaan. Werkjas is marineblauw met fel oranje. Donker is de nachtdienst: het signaalgeel geeft een beetje licht. Groen blijft goed en rood blijft fout, in elke kleur.',
      'Spreken: na het inspreken staat er nu ook een knop "Luister naar jezelf". Zo hoor je je eigen poging zo vaak als je wilt, en vergelijk je die met het voorbeeld.',
      'Sneller: na een nieuwe versie opent de app meteen van je telefoon, ook met slecht bereik. De nieuwe versie komt op de achtergrond binnen. En een nieuwe versie kost minder data.',
      'Offline: het onderwerp waar je mee bezig bent, staat nu vanzelf op je telefoon, met geluid (niet als je data sparen aan hebt). Het geluid van een les wordt vooraf opgehaald. Is er geen internet en werkt het geluid niet, dan zegt de app dat, en slaat hij oefeningen over waarbij je moet luisteren.',
      'Rechten: is de uitleg over regels en rechten ouder dan 3 maanden, dan staat erbij van welke maand hij is en waar je de laatste regels vindt. Bij de tips over rechten staat dat een expert ze nog niet heeft nagekeken. Bij elk 0800-nummer staat nu ook de website: met een buitenlandse simkaart werkt een 0800-nummer vaak niet.',
      'Voor begeleiders: een briefje voor dag 1, per taal op een A4, met de link en een QR-code (vloertaal.nl/briefje). Op de pagina voor begeleiders staat hoe Vloertaal past naast Oefenen.nl, NedBox, een taalbuddy, een Taalhuis of een NT2-les. En de app telt nu ook, zonder naam, hoe vaak hij voor het eerst wordt geopend en hoe vaak de start lukt.',
      'Eerst herhalen: staan er na "Herhaal vandaag" nog veel woorden klaar, dan is "Extra ronde" de eerste keuze. De nieuwe les staat eronder en blijft open. Zo onthoud je meer.',
      'Na de eerste les zie je meteen de volgende les. "Wat ken je al?" en "Gelukt?" staan als een kleine regel onder de les, niet meer in plaats van de les. Je reeks en de herinnering staan samen op één scherm.',
      'In de les: "Wat zeg je?" komt nu na het gesprekje dat het antwoord leert. De zin voor "Probeer het vandaag" zeg je eerst zelf. Een fout dictee kost één vakje, niet alles. Bij een foute keuze zie je wat je koos. En de herhaling neemt eerst de woorden die nog moeilijk zijn.',
      'Voorlezen: bij "Wat doe je?" heeft elk antwoord en de uitleg nu een knop om het in je eigen taal te horen. In Werkregels heeft elk tekstblok een voorleesknop.',
      'Twee nieuwe lessen: "Getallen" (13 of 30, 47 of 74, en hoe je vijfentwintig zegt), vooraan bij Starten, en "Brandalarm en ontruimen" bij Veiligheid (het alarm, de vluchtroute, de verzamelplaats).',
      'De herinnering stelt niet meer voor om in de pauze te oefenen. Een pauze is om te rusten. Je kiest voor het werk, na het werk, of een eigen tijd.',
      'Zo werkt het hier: is de uitleg kort, dan staat hij nu in grotere letters. De app gebruikt de ruimte tot de knop Verder. Een lange uitleg houdt de gewone grootte.',
      'Fout antwoord? Bovenaan staat nu ook in je eigen taal "Het goede antwoord is:". Eerst stond er alleen "Goed antwoord", en dat leek op goed.',
      '"Probeer het vandaag" geeft nooit meer een zin met een naam erin, zoals "ik ben Ali". Je krijgt een zin die je zelf kunt zeggen. En elk nieuw woord krijgt in zijn eigen les minstens één vraag.',
      'Je reeks: oefen je 3 keer per week, of neem je een weekend vrij? Dan zie je niet meer "Je reeks is gestopt". Dat scherm komt alleen na een echte pauze, en Bram zwaait dan.',
      'In Pauze is "Zonder geluid" nu één knop die aan of uit staat, met een vinkje als het geluid uit is.',
      'Start de app niet meer, bijvoorbeeld door een fout in wat op je telefoon is bewaard? Dan zie je wat je kunt doen: je voortgang bewaren of opnieuw beginnen. Eerst bleef het beginscherm staan.',
      'Privacy: de uitleg zegt nu precies wat "Voortgang wissen" weghaalt en wat blijft staan, en waarom de app mag tellen. Op de begeleiderskaart staat: je mag ook nee zeggen. Begeleiders lezen dat laten zien vrijwillig is.',
      'In de les over grenzen zeg je nu "Blijf van me af." in plaats van "Raak me niet aan, alstublieft.": een grens zeg je stevig.',
    ],
  },
  {
    date: '2026-11-03',
    items: [
      'Meer kleur: Zand, Haven en Werkjas hebben nu echt een eigen achtergrond (zand, zachte zeegroen, licht werkjas-blauw), en bij Donker zijn de kaarten iets lichter. De kaarten en knoppen springen er zo meer uit, en je ziet beter welke kleur je hebt. Alle tekst blijft even goed leesbaar.',
    ],
  },
  {
    date: '2026-11-02',
    items: [
      'Bij de start kies je nu ook je kleur: Zand, Haven, Werkjas of Donker. Tik op een kleur en de app krijgt die kleur meteen, terwijl je op de pagina blijft. Zo zie je eerst hoe het eruitziet. Goed zo? Tik op Verder. Wisselen kan later bij Instellingen › Weergave.',
      'Bij Instellingen › Weergave blijf je na een keuze op de pagina. Zo zie je de kleuren meteen en kun je direct een andere proberen. Met de pijl terug ga je verder.',
      'Wat doe je? Je leest eerst de situatie en tikt dan op "Toon de antwoorden"; dan pas zie je de drie antwoorden. Zo denk je eerst zelf na, en staat niet alles tegelijk op het scherm. Elf lange situaties zijn ook korter geschreven, met dezelfde inhoud.',
      'Instellingen › Lessen › Tempo heeft nu drie keuzes: Rustig, Normaal en Sneller leren (normaal tempo en minder uitleg in nieuwe lessen). De aparte rij "Sneller leren" is weg.',
      'Nog rustiger: "Tik om te horen" staat alleen nog boven de woorden van de eerste lessen, en de stempel "Straks weer" zie je de eerste drie keer. Na een les staat er geen stempel "Klaar" meer naast "Les klaar!". Bij een gesprekje heeft jouw ballon een eigen kleur. Bij Over staan de AI-stemmen op één regel. "Wat is er nieuw?" toont de nieuwste punten; de hele lijst staat op vloertaal.nl/nieuw.',
      'Spreken gaat nu ook zoals in WhatsApp: hou de microfoon ingedrukt, praat, en laat los. Kort tikken kan ook nog: dan stopt de opname vanzelf als je klaar bent. En onderaan staat onder elk icoon weer zijn naam, zodat je ziet wat waar is.',
      'Minder dubbel op het scherm. Kies je bij een situatie of een gezegde het verkeerde antwoord? Dan staat alleen nog de uitleg eronder; het goede antwoord is al groen. Een goed gebouwde zin krijgt geen extra kaart meer, en bij "Welk plaatje is het?" staat het woord met zijn betekenis niet nog eens onder de plaatjes. Na een foutloze les staat er "11/11" en "Zonder fouten", zonder stempel. De reeks noemt het aantal dagen één keer. Bij Hulp staat een nummer als 112 niet meer twee keer op een kaart. En in de herhaalronde staat bovenaan één regel.',
      'Moeilijke woorden zoals de huur, de borg, bruto en netto, de boete en het verlof hebben nu een geheugenplaatje: een eenvoudige tekening waar je het woord aan ophangt, naast de vertaling. Die tekening zie je als het woord nieuw is, niet in de oefeningen, zodat hij je niet op het verkeerde been zet.',
      'Bij de start kies je eerst de taal waarin je hulp krijgt. De talen staan onder elkaar in een vak, als een menu. Rechts in het vak zie je altijd een schuifbalk: daaraan zie je dat er meer talen zijn en waar je bent. Schuif met je vinger door de lijst, sleep de balk, of tik op het pijltje onder aan het vak. Spreek je al Nederlands? Kies dan "Ik spreek al Nederlands" (Werkregels), onder het vak. De aparte vraag "Wat wil je leren?" is weg bij de start; wisselen kan nog bij Instellingen › Taal en ik.',
      'Staat je taal er niet bij? Tik onder de talen op "Is your language missing?" en typ je taal. Je mailapp opent met een korte mail aan hoi@vloertaal.nl. Er gaat pas iets naar ons als jij de mail verstuurt.',
      'Hoort een vraag bij de pagina ervoor, zoals een tip, een gezegde of in Werkregels een verhaal of een regel? Dan staat er boven de vraag een pijl terug. Lees het nog eens, en tik op Verder: je bent weer bij de vraag. Dat telt niet mee voor je score.',
      'De app staat nu altijd eerst in de lichte weergave, ook als je telefoon op donker staat. Liever donker? Kies het bij Instellingen.',
      'Een kleine tikfout bij typen: je ziet nu "Bijna goed!", met een golflijn onder de fout in je eigen antwoord. De goede spelling staat er één keer. In de herhaling blijft zo\'n woord in zijn vak.',
      'Gesprekje: is je antwoord goed, dan staat het niet nog eens in een kaart eronder. Bij een gesprekje andersom staat jouw antwoord als spreekballon in het gesprek.',
      'Vloertaal staat nu in Europa: bij statichost.eu (Zweden), niet meer in de Verenigde Staten. Wat dat voor je privacy betekent, staat op vloertaal.nl/privacy.',
    ],
  },
  {
    date: '2026-11-01',
    items: [
      'Na het antwoord is het scherm rustiger: de vraag gaat naar de achtergrond, en bij een goed antwoord staat het antwoord er niet nog eens onder als er niets bij te vertellen is. Een luidspreker die je mag gebruiken staat nu altijd rechts. De knop Doorgaan is na de eerste keer alleen een pijl.',
      'Woorden hoor je nu van verschillende collega\'s, niet alleen van Bram. En in "Herhaal vandaag" komt elke dag één klankpaar terug (man of maan?): je hoort het woord en kiest het plaatje.',
      'Na de herhaling zie je wat is blijven hangen: "Woorden van 2 weken of langer geleden: je wist er nog 9 van de 10."',
      'De eerste keer dat je een zin bouwt, paren koppelt of met letters typt, wijst een hand één keer aan waar je tikt.',
      '"Probeer het vandaag op je werk" zegt nu ook wanneer: "Als: … Zeg dan: …". Dat komt nu ook na een les van Werkregels. Zeg je de dag erna "Nog niet", dan vraagt de app het nog één keer.',
      'Nieuw onder Hulp: "Voor je collega". Een kaart voor een Nederlandse collega die met je wil oefenen: praat rustig, doe het voor, blijf Nederlands praten. Je kunt hem laten zien of sturen.',
      'Typen: de en het verwisseld telt nu als bijna goed. Je ziet het goede lidwoord, maar het woord gaat niet terug naar het begin van de herhaling.',
      'Bij "Zet het vooraan" staat het werkwoord in een kader, met de uitleg "Het werkwoord staat op plek 2." Bij spreken zeg je de zin bij "Zeg het nog eens" uit je hoofd.',
      'Op de kaart "Laat zien hoe het gaat" staan onderwerpen over je rechten niet meer bij naam, maar als "een onderwerp over je rechten". Je kiest zelf of de naam erop mag.',
      'Werkregels: de uitleg na een vraag is korter. Meer uitleg staat achter een ⓘ. Bij een tip in de les staat achter de ⓘ ook wie je om hulp kunt vragen.',
      'Bij de start staat nu dat Vloertaal ook uitlegt hoe werk hier gaat: je contract, je loon, ziek melden. De voortgangsbalk is rustiger, en de tekst van een tip is groter op een telefoon.',
      'Nieuw bij Instellingen › Lessen: Rustig scherm. Aan: niets beweegt, geen feestje voor je reeks na een les, en je reeks en woorden staan niet op de startpagina. Staat je telefoon op "minder beweging"? Dan staat het vanzelf aan.',
      'De app is rustiger: warmere kleuren, zachtere randen, en minder tegelijk op het scherm. De onderbalk toont iconen. Extra uitleg staat achter een ⓘ: tik erop om hem te lezen. Je naam op een certificaat of op je kaart pas je nu aan op het certificaat of de kaart zelf: tik op het potlood.',
      'Mag de app je microfoon niet gebruiken? Dan zie je bij het spreken de knop "Zet de microfoon aan", met de stappen voor jouw telefoon. Staat de microfoon weer aan, dan gaat de oefening meteen verder.',
      'Kreeg je na een les een zin om op je werk te proberen? Dan vraagt de app de dag erna één keer: "Heb je dit op je werk gezegd?" Tik op "Ja, gelukt" of "Nog niet". Alleen dat antwoord wordt geteld, zonder naam (uit te zetten bij "Anoniem meetellen").',
    ],
  },
  {
    date: '2026-10-31',
    items: [
      'Een tip in de les staat nu op twee pagina\'s: eerst "Zo werkt het hier", dan "Zeg het zo" met de zin om te oefenen. Zo staat er minder op één scherm.',
      'Nieuw bij "Waar werk je?": Winkel. Werk je in een winkel of supermarkt? Kies dan "Winkel en horeca" en dan "Winkel". Dan komt het onderwerp In de winkel vroeg in je lespad, in Taal en in Werkregels. Horeca staat nu ook bij "Winkel en horeca". Je keuze van eerder blijft staan.',
      'Nieuw: een privacyverklaring op vloertaal.nl/privacy. Daar staat precies wat de app wel en niet doet. Ook nieuw: geeft de app een fout? Dan telt hij dat, zonder iets over jou (onder "Anoniem meetellen", dus ook uit te zetten). Zo kunnen we fouten sneller vinden.',
      'Hulp: tekeningen in plaats van emoji bij de tips en bij "Wie kan helpen?", en een voorleesknop in je eigen taal bij de uitleg en de tips (als je telefoon een stem voor je taal heeft). Bij Over › Jouw privacy staat nu een link naar de hele privacyverklaring.',
      'Overal eigen tekeningen, geen emoji meer: bij de tips, de thema\'s, de regels in Werkregels, Hulp en Over. Ruim 50 nieuwe tekeningen, in dezelfde stijl als de rest.',
      'Nieuw bij de start: "Wat wil je leren?" Kies "Nederlands leren" (met hulp in je eigen taal) of "Ik spreek al Nederlands" (Werkregels: hoe werken in Nederland en België gaat). Werkregels staat dus niet meer tussen de hulptalen. Later wisselen kan bij Instellingen › Taal en ik.',
      'Nieuw bij Alle onderwerpen: een zoekbalk. Typ een woord, in het Nederlands of in je eigen taal, en je ziet de onderwerpen waar het in staat. Bijvoorbeeld "ziek" of "helm".',
      'Nieuw bij Over: Waarom Vloertaal? En "Wat is er nieuw?": hier zie je wat er in de app veranderd is.',
      'Werk je in België (Vlaanderen)? Kies dan bij de start, of later bij Instellingen, "België". In het spoor Werkregels krijg je dan de regels van België: alle onderwerpen, met Vlaamse woorden (loonbrief, interimkantoor, ziekenfonds, RVA). Dit is nieuw: de Belgische lessen zijn nog niet nagekeken door een expert. Zie je een fout? Mail naar hoi@vloertaal.nl.',
      'Hulp: nieuwe nummers bij "Wie bel je?". In Nederland 113 (als je aan zelfdoding denkt), Veilig Thuis, het Centrum Seksueel Geweld en het nummer van FairWork. In België 1813 en het meldpunt mensenhandel (Payoke, PAG-ASA en Sürya).',
      'Deel je een certificaat, spiekkaartje of je kaart? Dan staat onderaan het adres van de app, bijvoorbeeld vloertaal.nl/pl. Er gaat ook een korte tekst mee met de link, in je eigen taal. En de app telt nu ook of mensen terugkomen: één keer op je 1e, 2e, 7e, 14e en 28e dag met een les. Zonder naam, en uit te zetten bij "Anoniem meetellen".',
      'Rustiger begin: je start meteen met les 1. De toets "Wat ken je al?" komt pas na de eerste les. De knop Melden staat in de les niet meer aan. Wil je hem toch? Zet hem aan onderaan bij Over.',
      'Taal: bij "Maak het gesprek af" zie je vanaf het vijfde onderwerp de vertaling pas na je antwoord. In de eerste onderwerpen staat hij er meteen bij. In de eerste onderwerpen hoef je niet te typen: je hoort een woord en kiest het. En na een les staat soms een zin om vandaag op je werk te proberen.',
      'De app start sneller, en een woord dat je al hoorde speelt meteen. Kan je telefoon je voortgang niet bewaren? Dan zie je dat nu, met een tip.',
      'Werkregels: 4 nieuwe lessen voor wie uit een ander land komt, voor Nederland en België. Ziek en naar je eigen land, je WW of uitkering meenemen (formulier U2), gedetacheerd zijn (A1, in België ook Limosa), en wonen, vervoer en boetes via het bureau. Nog niet nagekeken door een expert.',
      'Bewaar je voortgang: kan je telefoon je voortgang wissen? Dan vraagt de app na 3 lessen één keer of je een kopie wilt maken. Bij Instellingen › Bewaar je voortgang stuur je het bestand nu ook naar jezelf, bijvoorbeeld in WhatsApp of een e-mail.',
      'Bij de start kun je meer horen in je eigen taal: de vraag "Wat wil je leren?", de twee keuzes, "Polski?" en de uitleg bij de vragen daarna. Tik op de knop met de wereldbol. Die staat er als je telefoon een stem voor je taal heeft. De keuzes bij "Wat wil je leren?" zijn ook korter.',
      'Taal: nieuw in de les is "Wat zeg je?". Vlak voor "Maak het gesprek af" hoor je de collega. Dan zeg je zelf het antwoord, en daarna hoor je het voorbeeld. Daarvoor gaat er meestal een andere oefening uit de les.',
      'Op je kaart bij "Laat zien hoe het gaat" staat nu onderaan een korte code, bijvoorbeeld VT1 O3 D12. Daarin staan dezelfde getallen als op de kaart, zonder naam. Je begeleider kan die code overnemen voor een overzicht van de groep.',
      'Taal: de toets "Wat ken je al?" is anders. Nu 21 vragen. Soms bouw je een zin of schrijf je een woord. Weet je het niet? Tik op "Ik weet het niet". Dat is goed. Na 4 weken staat er alleen "Meer dan toen" als het echt meer is. Anders staat er "Ongeveer gelijk". Je uitslag van eerder blijft staan.',
      'Taal: in de tweede helft van je lespad is er "Zet het woord vooraan". Van "Ik verstuur de mail morgen." maak je "Morgen verstuur ik de mail." Later maak je een zin met alle woorden tegelijk. Heb je bijna alles gedaan? Dan vraagt de app één keer of je ook de werkregels wilt leren.',
    ],
  },
  {
    date: '2026-10-30',
    items: [
      'Nieuw bij Instellingen › Taal en ik: "Laat zien hoe het gaat". De telefoon maakt een kaart voor je begeleider: welke onderwerpen af zijn, op hoeveel dagen je oefende in de laatste 4 weken, je laatste les en (in het spoor Taal) de toets "Wat ken je al?". Jij laat de kaart zelf zien, of je bewaart of deelt hem als plaatje. Er gaat niets naar ons.',
      'Nieuw bij Instellingen › Lessen: Tempo. "Rustig" (zoals tot nu toe) of "Normaal": dan hoor je het Nederlands op het tempo van collega’s. In de latere thema’s van het spoor Taal (Samenwerken, Je rechten, Leven in Nederland, Jouw sector) hoor je een zin de tweede keer in een les op normaal tempo. De knop "Langzaam" blijft. Werkregels blijft zoals het was.',
      'Nieuw in het spoor Taal: de toets "Wat ken je al?" (ongeveer 10 minuten, luisteren, woorden en zinnen). Na de start en na 4 weken (of 3 onderwerpen), met een andere versie. De uitslag toont wat je erbij hebt geleerd, en je eigen stem van toen en nu. Geen cijfer, en alles blijft op je telefoon.',
      'Nieuw bij "Waar werk je?": eerst kies je het soort werk in een korte lijst (Bouw en techniek, Maken en verplaatsen, Zorg en service of Weet ik nog niet), daarna je sector. Twee nieuwe sectoren: Techniek en Garage, bij Bouw en techniek. Tuinbouw staat nu bij Maken en verplaatsen. Je keuze van eerder blijft staan. Ook bij Instellingen.',
      'Werkregels: 14 nieuwe lessen voor Entree. Twee nieuwe onderwerpen: Schrijven op je werk (een bericht of mail aan je werk, een korte sollicitatiemail) en Jouw weg (wat kan ik en wat wil ik, na Entree: niveau 2 of werk, terugkijken en je portfolio).',
      'Werkregels: nieuwe lessen bij Veilig en gezond werken (fit voor je werk: slapen, eten, bewegen; alcohol, drugs en je werk), bij Uitkering, werk en geld (je geld per maand en sparen; kopen, abonnementen en ruilen) en bij Meedoen in Nederland (nieuws, nepnieuws en een mening).',
      'Werkregels: twee nieuwe sectoronderwerpen, Werken in de techniek (gereedschap, vonken en lawaai; stroom) en Werken in de garage (veilig in de werkplaats; de werkorder en de klant). Je kiest ze bij "Waar werk je?": Bouw en techniek, en dan Techniek of Garage.',
      'Voor de Entree-opleiding, in het spoor Taal: zes nieuwe onderwerpen aan het eind van het lespad. Je werk afronden (de werkbon lezen, opruimen en afmelden), In de werkplaats (gereedschap, lawaai en stroom), In de garage (banden en olie, en de klant beslist), Stage lopen (de POK en feedback vragen), Meedoen in Nederland (stemmen, de politie en bezwaar maken) en Online op je werk (inloggen en nepmails).',
      'Nieuwe lessen in bestaande onderwerpen: Waar ben ik goed in? en Na Entree (Diploma’s en verder komen), Een mail aan je werk (Bellen en appen met je werk), Je geld per maand (Geld en post) en Fit voor je werk (Gezondheid).',
      'Alle nieuwe lessen hebben een tip "Zo werkt het hier" en een vertaling in de 13 hulptalen. De vertalingen zijn nog niet nagekeken door een moedertaalspreker. De opnames volgen; tot dan leest de stem van je telefoon voor.',
      'Nieuw onderwerp bij Starten: Getallen en gegevens. Twee lessen: je gegevens (je naam spellen, je telefoonnummer, het formulier) en dagen en datums (volgende week, tot en met). Het komt vóór Tijd en rooster.',
      'Nieuwe les bij Gezondheid: Lichaam en klachten. Met het hoofd, de rug, de hand en het oog, en de tip: zeg wat er gebeurde en waar het pijn doet.',
      'Nieuwe les bij Verlof en ziekte: Kinderen en werk. Een ziek kind ophalen, calamiteitenverlof, zwanger zijn en de kinderopvang.',
      'Nieuwe les bij Werk kwijt: Je werk stopt. Je eindafrekening, je vakantiegeld en vrije dagen, en wat er nog meer stopt: het huis en de zorgverzekering via het bureau.',
      'Nieuwe les bij Werk en contract: Papieren, inburgering en je werk. Mag ik hier werken, werknemer of zzp’er, en taalles naast je rooster.',
      'In deze nieuwe lessen komen woorden als de opzegtermijn, het calamiteitenverlof, het Juridisch Loket en de Belastingdienst terug in zinnen. De vertalingen en opnames volgen.',
      'Vier nieuwe hulptalen: Spaans, Portugees, Frans en Duits. Alle uitleg, woorden, zinnen en tips staan nu ook in die talen.',
      'Een telefoon in het Spaans, Portugees, Frans of Duits kiest die taal bij de eerste start zelf voor (je kunt altijd een andere kiezen).',
      'Nieuwe sector: Tuinbouw. Bij "Waar werk je?" kies je "Maken en verplaatsen" en dan "Tuinbouw". Nieuw onderwerp In de kas, met twee lessen: oogsten en sorteren, en veilig in de kas. Met woorden als de krat, het gewas, de plukkar en de spuitmiddelen. Werkregels: Veilig in kas en veld, en Tempo en stukloon.',
      'Werkregels: twee nieuwe lessen, Kinderen en zorg (zwanger, verlof, een ziek kind, kinderopvangtoeslag) en Je werk stopt: regel dit (laatste loon, huis, zorgverzekering, adres). En 15 nieuwe vragen in andere lessen, onder meer over bezwaar maken, de BHV\'er, pensioen, inburgering, de vakbond en of je hier mag werken.',
      'Nieuw bij Instellingen: in welk land werk je? Kies je België (Vlaanderen)? Dan staat in Werkregels dat de regels over Nederland gaan, en bij Hulp staat waar je in België hulp vindt.',
      'Werkregels: de eerste keer zie je eerst "Goed om te weten": de regels zijn algemene informatie over werk in Nederland, geen juridisch advies. Boven de lessen staat dat ook in één korte regel.',
      'Een proef bij Instellingen › Lessen: "Laat de telefoon luisteren (proef)". Alleen op een telefoon die Nederlands zelf kan herkennen, zonder internet. Na het spreken zegt de telefoon: Verstaan, Bijna (welk woord nog eens) of Nog niet verstaan. Geen cijfer, en "Toch verder" kan altijd. Het staat uit tot je het aanzet. Er gaat niets naar ons.',
      'Nieuw bij elk certificaat: "Wat kun je nu?". Twee of drie korte zinnen over wat je na het onderwerp kunt, zoals "Ik kan zeggen dat ik ziek ben." Met het niveau waar de zin bij past (A1, A2 of 1F). Dat is een richtlijn, geen officieel niveau. Op de kaart voor je begeleider staat hoeveel zinnen het zijn.',
      'Nieuw in het spoor Taal: "Oefen samen". Na een les met een gesprekje kun je op het eindscherm samen oefenen, met twee mensen op één telefoon. De een leest de collega, de ander antwoordt, en daarna wissel je van rol. Met "Hoor het" en de vertaling (die kan uit). Geen internet nodig, er wordt niets opgenomen en er is geen score.',
      '33 woorden hadden nog een emoji. Ze hebben nu een eigen tekening, zoals de voornaam, zwanger, de sleutel, de plukkar en bukken.',
      '32 woorden uit de nieuwe Entree-onderwerpen hadden nog een emoji. Ze hebben nu een eigen tekening, zoals de werkbon, de gehoorbescherming, de accu, het rijbewijs, de agent en de bijlage.',
      'Tien woorden die nog geen plaatje hadden, hebben nu een eigen tekening: het hoofd, de rug en de buik, slijpen, de kabel, de stroom, de hefbrug, lek, kapot en de rechter.',
      'Tien tijdwoorden hebben nu een plaatje, allemaal met dezelfde weekstrip (maandag eerst, het weekend in een andere kleur): de week, het weekend, maandag, zaterdag, elke dag, tot en met, volgende week, vorige week, overmorgen en de maand. Bij "Welk plaatje is het?" kunnen twee dagen nu naast elkaar staan.',
      'Alle tekeningen nagekeken. Geen duim omhoog meer (dat gebaar is in sommige landen onbeleefd): ja, goed en het compliment hebben een nieuwe tekening. Ook nieuw en duidelijker: kapot, de rij en zwanger. In de donkere stand vallen de oplichter, zoeken, sparen, de rechter en de ICT-afdeling niet meer weg. Het onderwerp "Meedoen in Nederland" heeft nu een stembus als plaatje.',
      'Het hoofd, de rug en de buik hebben nu elk een eigen tekening: iemand die laat zien waar het pijn doet (van voren, van achteren, met de hand op het voorhoofd). Inklokken en uitklokken, de machine en de storing, afkeuren en de rechter zijn duidelijker getekend: geen duim omlaag en geen hamer meer (die gebruikt een Nederlandse rechter niet). Nieuwe plaatjes bij de onderwerpen Samenwerken en Stage lopen.',
      'Nieuw in het spoor Taal: "Ik ken dit al: korte check". Had je bij de toets "Wat ken je al?" minstens 5 van de 6 goed bij Woorden en bij Luisteren? Dan kun je de onderwerpen van Starten afvinken met een korte check van 5 vragen (4 goed is genoeg). Jij kiest zelf of je afvinkt. Een onderwerp via de check telt als af, maar geeft nog geen certificaat; op de begeleiderskaart staat "via check". De eerste les van Starten blijft altijd open, en met "Toch de lessen doen" ga je terug.',
      'Bij "Wil je sneller?" met grote tekst op een kleine telefoon: de uitslag blijft nu in beeld boven de vraag, en Ja en Nee zie je zonder te scrollen.',
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
      'Nieuw: Werkregels, voor wie al Nederlands spreekt. Over de geschreven en ongeschreven regels op het werk. Het is nog een bètaversie: de uitleg is nog niet nagekeken door experts.',
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
      'Spoor Taal: "Herhaal vandaag" brengt nu ook zinnen terug die je in een les bouwde, en de zin die je zei, op dezelfde dagen als woorden (hoogstens 2 zinnen en 1 zin om te zeggen per dag). Na 3 lessen zonder fout vraagt Vloertaal één keer: "Wil je sneller?" Ja geeft minder uitleg in nieuwe lessen en het Nederlands op normaal tempo; terugzetten kan bij Instellingen › Lessen › Sneller leren. Na een les met veel fouten is de volgende les wat korter, en komen die woorden dezelfde dag terug.',
    ],
  },
];

/**
 * "Binnenkort", at the top of "Wat is er nieuw?" (the app and vloertaal.nl/nieuw): wat eraan komt;
 * zonder datum en zonder belofte; haal een punt weg zodra het in UPDATES staat. Plain Dutch, one
 * short line per point. Empty: the heading is left out.
 */
export const UPCOMING: string[] = [
  'AI-stemmen (ElevenLabs) voor de nieuwe lessen en zinnen. Tot dan leest de stem van je telefoon voor.',
  // The Belgian lessons are online since 31 October 2026 (a beta, BE_TAAL_LIVE); what is still to come there:
  'Vlaamse stemmen voor de Belgische lessen.',
  'Luisteren zoals op de werkvloer: korte gesprekjes met geluid van het werk.',
  'Experts en moedertaalsprekers gaan de lessen en vertalingen nakijken. We zoeken hen nog.',
];

/** The date of the newest update. */
export const LAST_UPDATE = UPDATES[0].date;

// The dates (also used without the logbook: src/content/updateDate.ts).
export { dateLocale, updateDate } from './updateDate';

// The app loads this file when it needs it (src/content/updatesLive.ts): here it puts itself in place.
registerUpdates({ updates: UPDATES, upcoming: UPCOMING });

/* ------------------------------------------------------------------ a notice for the learner */

/**
 * Een melding ("Er is iets veranderd"): een update die de leerling direct raakt, krijgt één korte
 * zin. Die zin ziet de leerling ÉÉN KEER, als rustige kaart bovenaan het lespad
 * (src/components/NoticeCard.tsx; wie hem ziet: src/lib/notice.ts). Alleen wie in dat land werkt
 * en in dat spoor zit, en alleen wie de app al gebruikte vóór de dag van de update.
 *
 * WANNEER WEL (de maandelijkse check volgt dit): een verandering die de leerling direct raakt in
 *  - rechten (contract, ontslag, verlof, proeftijd, uitzendwerk, discriminatie);
 *  - loon (minimumloon, vakantiegeld, toeslagen, wat er op de loonstrook staat);
 *  - ziekte (ziek melden, loon bij ziekte, wachtdag, ziekenfonds);
 *  - uitkering (WW, bijstand, werkloosheid, RVA);
 *  - veiligheid (een regel of een nummer bij gevaar, beschermende kleding).
 * WANNEER NIET: al het andere. Nieuwe lessen, woorden, plaatjes, vertalingen, knoppen, een fout
 * die is verbeterd, een nieuwe sector: dat staat alleen in de items, zonder melding.
 * Twijfel je? Dan geen melding. Hoogstens één melding per update: elke melding onderbreekt.
 *
 * EEN MELDING TOEVOEGEN (docs/logboek.md zegt hetzelfde, met een voorbeeld):
 *  1. Zet een update bovenaan UPDATES: de dag waarop het in de app staat, en de items.
 *  2. Geef die update een `notice`:
 *     - `id`: kort, uniek, nooit opnieuw gebruikt (bijv. 'minimumloon-2027-01'). De telefoon
 *       onthoudt welke ids de leerling zag (Progress.noticesSeen).
 *     - `country`: 'nl', 'be' of 'both' (Progress.country; geen keuze telt als 'nl').
 *     - `track`: 'taal', 'regels' of 'both'.
 *     - `nl`: Nederlands op A2, hoogstens 2 zinnen en 25 woorden: wat verandert er, en wat kan de
 *       leerling doen? Geen "vanaf vandaag": de kaart kan ook later in beeld komen.
 *     - `en`: hetzelfde in eenvoudig Engels (de basis voor de vertalingen).
 *  3. Vertaal `en` in de 13 hulptalen: src/i18n/notices/<taal>.ts, onder `gloss`, met de sleutel
 *     `notice.<id>` (noticeGlossId in src/lib/notice.ts), met `// nieuw, nalezen` erachter. Bij
 *     `track: 'regels'` hoeft dat niet (Werkregels is alleen Nederlands).
 *  4. Draai `npx vitest run tests/notice.test.ts`: die controleert de velden, de lengte en de
 *     vertalingen.
 * Een melding weghalen hoeft niet: de kaart komt alleen bij wie hem nog niet zag.
 */
export type NoticeCountry = 'nl' | 'be' | 'both';
export type NoticeTrack = 'taal' | 'regels' | 'both';

export interface Notice {
  /** Unique, never reused; translated as `notice.<id>` (src/i18n/notices/<lang>.ts). */
  id: string;
  /** Where the learner works (Progress.country; not chosen = 'nl'). */
  country: NoticeCountry;
  /** The learner's track (src/lib/track.ts). */
  track: NoticeTrack;
  /** Plain Dutch (A2), at most 2 sentences. */
  nl: string;
  /** The same in plain English: the base for the translations. */
  en: string;
}

// An update's `notice` (interface merging: the Update at the top of this file gets the field,
// so the list keeps its place at the top).
export interface Update {
  /** Optional: one short line the learner sees once (see Notice above). */
  notice?: Notice;
}

/* ------------------------------------------------------------------ laws that take effect later */

/**
 * "Komt eraan": wetten (en grote regels) die zijn aangenomen maar later ingaan. NIET voor
 * leerlingen en nergens in de app: een lijst voor de maandelijkse check en de eigenaar. Is een
 * datum voorbij, pas dan de teksten aan (en maak een update, met een melding als het de leerling
 * direct raakt), en haal daarna die datum of het hele item weg. tests/upcomingLaw.test.ts
 * waarschuwt (console.warn, de test faalt niet) zolang een voorbije datum hier nog staat.
 */
export interface UpcomingLaw {
  /** The law's name. */
  law: string;
  country: 'nl' | 'be';
  /** When (parts of) it take effect (YYYY-MM-DD), and what changes that day. */
  dates: { date: string; what: string }[];
  /** What must change in the app (plain Dutch, for the editor). */
  change: string;
  /** The ids it touches (tips, lessons), each in one of `files`. */
  ids: string[];
  files: string[];
  /** Where it comes from. */
  source: string;
}

export const UPCOMING_LAW: UpcomingLaw[] = [
  {
    law: 'Wet meer zekerheid flexwerkers',
    country: 'nl',
    dates: [
      { date: '2027-01-01', what: 'Gelijkwaardige beloning voor uitzendkrachten (WAADI): dezelfde arbeidsvoorwaarden als de vaste mensen.' },
      { date: '2028-01-01', what: 'Geen nulurencontract en min-max meer, maar een bandbreedtecontract (vaste minimum- en maximumuren). Ketenregeling: langere tussenpoos. Uitzendwerk: kortere fase A.' },
    ],
    change: 'Taal: de tips over proeftijd en oproepwerk (c.contract), uitzendwerk (c.agency) en ziek zijn als uitzendkracht (c.illness) herschrijven, met hun situaties en de vertalingen; de ⚖️-comments met "flexwerkers" daarboven bijwerken. Werkregels (contract.ts): de ketenregeling (r.l.contract.2) en oproepwerk en uitzendloon (r.l.contract.3); de comments "Redactie" daar weghalen. Daarna een update met een melding (loon en rechten, NL, beide sporen).',
    ids: ['c.contract', 'c.agency', 'c.illness', 'r.l.contract.2', 'r.l.contract.3'],
    files: ['src/content/work.ts', 'src/content/workTips.ts', 'src/content/regels/units/contract.ts'],
    source: 'Stb. 2026, 205; inwerkingtredingsbesluit Stb. 2026, 206 (docs/werkregels-bronnen.md). De datums komen uit secundaire bronnen: check het Staatsblad.',
  },
  {
    // ⚖️ check: Wtta gaat in op 1-1-2027; aanvragen bij de NAU tot 1-7-2027; vanaf 1-1-2028 handhaaft de Arbeidsinspectie en krijgen uitleners zonder toelating en hun inleners een boete (rijksoverheid.nl "aanpak misstanden bij uitzendbureaus en andere uitleners"; kvk.nl "Wtta: strengere regels voor uitzendbureaus"; Eerste Kamer akkoord in nov 2025 (salarisvanmorgen.nl); gezocht 31 okt 2026)
    law: 'Wtta (Wet toelating terbeschikkingstelling arbeidskrachten)',
    country: 'nl',
    dates: [
      { date: '2027-01-01', what: 'De wet gaat in: een uitzendbureau of andere uitlener heeft een toelating nodig (aanvragen bij de Normeringsautoriteit Uitleenmarkt, NAU, gepland tot 1 juli 2027).' },
      { date: '2028-01-01', what: 'Gepland: de Arbeidsinspectie handhaaft. Een bureau zonder toelating krijgt een boete, en het bedrijf dat mensen van zo\'n bureau laat werken (de inlener) ook.' },
    ],
    change: 'Taal: de tip over uitzendwerk (c.agency) noemt dat een bureau een toelating moet hebben, en hoe je dat checkt (het register van de NAU). Werkregels (contract.ts): de les over oproepwerk en uitzendloon (r.l.contract.3); de comment "Redactie" met "Wtta" daar bijwerken en weghalen. Daarna een update. Nog niet zeker: de precieze datums van de aanvraag (een internetconsultatie van 8 okt 2026 wijzigt de eisen).',
    ids: ['c.agency', 'r.l.contract.3'],
    files: ['src/content/work.ts', 'src/content/workTips.ts', 'src/content/regels/units/contract.ts'],
    source: 'rijksoverheid.nl (aanpak misstanden bij uitzendbureaus; nieuws 8 okt 2026 "internetconsultatie wijziging eisen wanneer bedrijven personeel mogen uitlenen"), kvk.nl (Wtta). Gezocht 31 okt 2026, de pagina\'s zelf niet geopend: check het Staatsblad.',
  },
  {
    // ⚖️ check: werkgever mag geen huur meer inhouden op het minimumloon, gepland per 1-7-2028, samen met de Wet passende huur; tot dan hooguit 25% (rijksoverheid.nl nieuws 10 sept 2026 "Werkgever mag geen huur meer inhouden op minimumloon arbeidsmigrant"; Kamerbrief SZW 10 sept 2026, nr. 2026-0000293074; gezocht 31 okt 2026)
    law: 'Afschaffen inhouding voor huisvesting op het minimumloon',
    country: 'nl',
    dates: [
      { date: '2028-07-01', what: 'Gepland, nog niet zeker: de werkgever of het bureau mag de huur niet meer van het minimumloon afhalen. Tot dan mag dat nog, met grenzen (hooguit 25 procent).' },
    ],
    change: 'Taal: de tip over wonen via het bureau (c.housing). Werkregels: de vragen over huur van je loon (r.l.loon.2.wd2 in loon.ts, r.l.kas.2.wd2 in sector.ts). Eerst een plan: het is nog een wetsvoorstel, gekoppeld aan de Wet passende huur; de datum kan schuiven. Daarna een update met een melding (loon, NL).',
    ids: ['c.housing', 'r.l.loon.2.wd2', 'r.l.kas.2.wd2'],
    files: ['src/content/work.ts', 'src/content/workTips.ts', 'src/content/regels/units/loon.ts', 'src/content/regels/units/sector.ts'],
    source: 'rijksoverheid.nl nieuws 10 sept 2026; Kamerbrief SZW 10 sept 2026 (nr. 2026-0000293074). Eerder plan (2025): later afschaffen; 30 okt 2025 bleef de regeling nog bestaan (rijksoverheid.nl). Gezocht 31 okt 2026, niet in het Staatsblad.',
  },
  {
    // ⚖️ check: werkloosheid beperkt in de tijd, in golven; de laatste groep (eerste periode, minstens 5 jaar gewerkt) verliest het recht op 1-7-2027; nieuwe regels volledig voor werkloosheid vanaf 1-3-2026 (onem.be "Hervorming van de werkloosheidsverzekering"; inami.fgov.be "beperking van werkloosheid in de tijd"; Grondwettelijk Hof 10 sept 2026; gezocht 31 okt 2026, onem.be zelf niet geopend)
    law: 'Hervorming werkloosheid: beperkt in de tijd (België)',
    country: 'be',
    dates: [
      { date: '2027-07-01', what: 'Gepland: de laatste groep (in de eerste periode, met minstens 5 jaar werk) verliest het recht op een werkloosheidsuitkering. Daarna geldt voor iedereen de nieuwe duur (meestal hooguit 2 jaar).' },
    ],
    change: 'Werkregels BE (be/units/geld.ts): de les over je werk kwijt (r.be.l.geld.1), vooral de vraag "voor altijd" (r.be.l.geld.1.tf1) en de comment "Redactie". Nakijken: de les zegt "sinds 1 januari 2026", de RVA noemt 1 maart 2026 voor nieuwe dossiers. Nog niet zeker wat de uitspraak van het Grondwettelijk Hof (10 sept 2026) verandert.',
    ids: ['r.be.l.geld.1', 'r.be.l.geld.1.tf1'],
    files: ['src/content/regels/be/units/geld.ts'],
    source: 'onem.be (hervorming van de werkloosheidsverzekering, verwittigingsbrieven), inami.fgov.be. Gezocht 31 okt 2026, de pagina\'s zelf niet geopend: check het Belgisch Staatsblad (programmawet, BS 29 juli 2025).',
  },
  {
    // ⚖️ check: algemene plicht om de echte werktijd te registreren, gepland per 1-1-2027, overgang tot ongeveer 1-4-2027; nog een voorontwerp (minister Clarinval), advies NAR 30 sept 2026 (securex.be "tijdsregistratie vanaf 2027: waar staan we vandaag"; partena-professional.be "arbeidstijdregistratie vanaf 1 januari 2027"; gezocht 31 okt 2026, secundaire bronnen)
    law: 'Registratie van de werktijd (België)',
    country: 'be',
    dates: [
      { date: '2027-01-01', what: 'Gepland, nog niet zeker: elke werkgever moet de uren die je echt werkt bijhouden, met een betrouwbaar systeem (geen prikklok verplicht). Wie nog geen systeem heeft, krijgt misschien tot april 2027.' },
    ],
    change: 'Werkregels BE (be/units/tijd.ts): de lessen over je werktijden (r.be.l.tijd.1) en overuren (r.be.l.tijd.3): erbij dat je baas je uren moet bijhouden, en dat je ze zelf ook noteert. Pas als de wet in het Belgisch Staatsblad staat.',
    ids: ['r.be.l.tijd.1', 'r.be.l.tijd.3'],
    files: ['src/content/regels/be/units/tijd.ts'],
    source: 'securex.be en partena-professional.be (2026), een voorontwerp van wet en een advies van de NAR (30 sept 2026). Secundaire bronnen, nog geen wet: check het Belgisch Staatsblad.',
  },
];

/**
 * The day the monthly law check (docs/logboek.md, "Elke maand") was last really done (YYYY-MM-DD).
 * Whoever does that check (now the owner) sets it, and only after a real check. The learner sees
 * its month as "Bijgewerkt: …" (RULES_CHECKED in src/content/regels/disclaimer.ts).
 * tests/upcomingLaw.test.ts warns when it is older than 45 days.
 */
export { LAW_CHECKED } from './lawChecked';
