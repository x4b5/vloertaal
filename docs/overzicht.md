# Overzicht van de app

> Dit document maakt de app zelf: `npm run overzicht`. Verander het niet met de hand.
> De bron staat in `src/overzicht/`. Komt er een scherm, een schakelaar of een opslagsleutel bij
> zonder regel hier, dan falen de tests.

Vijf lijsten, in gewone taal:

1. [Wat staat aan en uit](#1-wat-staat-aan-en-uit): 6 schakelaars
2. [Wie krijgt wat](#2-wie-krijgt-wat): 3 soorten leerlingen
3. [Wat de app uit zichzelf laat zien](#3-wat-de-app-uit-zichzelf-laat-zien): 18 momenten
4. [Alle schermen](#4-alle-schermen): 33 schermen
5. [Wat de telefoon onthoudt](#5-wat-de-telefoon-onthoudt): 47 plekken

## 1. Wat staat aan en uit

| Schakelaar | Nu | Wat dat betekent | Proberen op één telefoon | Waar |
| --- | --- | --- | --- | --- |
| Alles open voor iedereen | **aan** | Geen codepagina. Elke telefoon heeft de volledige versie. | kan niet | `src/lib/access.ts (OPEN_TO_ALL)` |
| Spoor Werkregels | **aan** | Wie "Nederlands" kiest, krijgt de Werkregels. | kan niet | `src/lib/track.ts (RULES_TRACK)` |
| Eén app | **uit** | Taal en Werkregels zijn twee aparte sporen. | vloertaal.nl/?nieuw=1 (uit met ?nieuw=0) | `src/lib/oneApp.ts (ONE_APP_LIVE)` |
| België: spoor Taal | **aan** | Wie België kiest, krijgt Vlaamse woorden en tips. | kan niet | `src/content/taalBe/live.ts (BE_TAAL_LIVE)` |
| België: spoor Werkregels | **aan** | Wie België kiest, krijgt de Belgische regels. | kan niet | `src/content/regels/be/live.ts (BE_RULES_LIVE)` |
| Regio Zuid-Limburg | **uit** | De regio is niet te kiezen. Wacht op controle (docs/regio-controle.md). | kan niet | `src/content/regio/index.ts (REGIONS_LIVE)` |

Omzetten: verander `true` of `false` in het bestand uit de laatste kolom, en zet een regel in het logboek (`src/content/updates.ts`).

### Wat een adres kan doen

| Adres op vloertaal.nl | Wat het doet |
| --- | --- |
| `?test` | Zet de knop Melden aan op deze telefoon. Uit met ?test=0. |
| `?nieuw=1` | Zet "Eén app" aan op deze telefoon. Uit met ?nieuw=0. |
| `?taal=nl` | Zet "Ik spreek al Nederlands" bovenaan de lijst met talen. |
| `?unit=pay` | Opent het lespad bij één onderwerp (een link van de begeleider). |
| `#begeleiders` | Opent de pagina voor begeleiders. |
| `#beheer` | Opent de beheerpagina (met wachtwoord). |

## 2. Wie krijgt wat

De hulptaal bepaalt de cursus. Deze tabel is het antwoord van de app zelf: één functie (`learnerOf` in `src/lib/learner.ts`) zegt per leerling wat die krijgt.

|  | **Taal** | **Werkregels** | **Taal met "Eén app" aan** |
| --- | --- | --- | --- |
| Kiest bij de start | een hulptaal (of alleen Engels) | "Ik spreek al Nederlands" | een hulptaal, op een telefoon met ?nieuw=1 |
| Welke cursus (lespad, onderwerpen, voortgang) | Taal | Werkregels | Taal |
| Leert Nederlands: woorden, zinnen, gesprekjes, met spreken, tempo en "Oefen samen" | ja | nee | ja |
| De cursus is de werkregels: verhalen, regelkaarten, "wat doe je?" | nee | ja | nee |
| Leest de app alleen in het Nederlands | nee | ja | nee |
| "Zo werkt het hier" bij de Taal-onderwerpen: de lessen van Werkregels erbij | nee | nee | ja |
| Wat "Herhaal vandaag" terugbrengt | woorden | regelvragen | woorden en regelvragen |
| Het tabblad Hulp | noodzinnen en tips | "Wie bel je?" en de regelkaarten | noodzinnen en tips |

Nog niet alle schermen vragen het aan deze functie: `src/App.tsx` wel, de andere bestanden volgen stap voor stap. Tot dan leiden die het zelf af uit de hulptaal, met dezelfde uitkomst.

## 3. Wat de app uit zichzelf laat zien

Alles wat de leerling niet zelf opzoekt: een kaart, een vraag, een aanbod. Per plek staat wat voorgaat.

### Bij het openen van de app

In plaats van Route, één keer.

|  | Wat de leerling leest | Wanneer | Hoe vaak | In de code |
| --- | --- | --- | --- | --- |
| 1 | **Je reeks is gestopt** | Na een echte pauze: de reeks was 3 dagen of langer, en de leerling oefende op minder dan 3 van de laatste 7 dagen. | Eén keer per gestopte reeks. | `stoppedToTell, src/lib/progress.ts` |

### Op Route: een kaart in plaats van de volgende les

Eén kaart tegelijk. De bovenste in deze lijst gaat voor.

|  | Wat de leerling leest | Wanneer | Hoe vaak | In de code |
| --- | --- | --- | --- | --- |
| 1 | **Er is iets veranderd** | Een verandering in rechten, loon, ziekte, uitkering of veiligheid die na de eerste dag van de leerling in het logboek kwam. | Eén keer per melding (in de voortgang). | `noticeFor, src/lib/notice.ts` |
| 2 | **Wil je ook de werkregels leren?** | Alleen in Taal, als 80% van het eigen lespad af is. | Eén keer (in de voortgang). | `bridgeDue, src/lib/bridge.ts` |
| 3 | **Bewaar je voortgang** | Alleen op een telefoon die de voortgang kan kwijtraken, na 3 lessen. Daarna pas weer na 30 lessen. | Losse sleutel vloertaal:backup-nudge. | `nudgeDue, src/lib/backupNudge.ts` |
| 4 | **Waarom leer jij Nederlands?** | Na 3 lessen, tot de leerling antwoordt of het wegzet. | Eén keer (in de voortgang). | `reasonDue, src/lib/reason.ts` |

### Op Route: een regel onder de volgende les

Alleen zolang er plek is: hooguit drie dingen om op te tikken.

|  | Wat de leerling leest | Wanneer | Hoe vaak | In de code |
| --- | --- | --- | --- | --- |
| 1 | **Gelukt?** | De dag na "Probeer het vandaag op je werk". Na "Nog niet" de dag erna nog één keer. | Losse sleutel vloertaal:work-try-ask. | `geluktDue, src/lib/workTry.ts` |
| 2 | **Wat ken je al?** | De eerste toets: vanaf 1 les tot en met 3 lessen. De tweede: na 28 dagen of 3 onderwerpen. | In de voortgang. | `toetsOffer, src/lib/toets.ts` |

### Op de uitslag na een les

Hooguit één vraag per scherm: van de vragen gaat de bovenste voor. De rijen eronder zijn geen vragen; bij elke rij staat voor welke vraag ze plaatsmaakt.

|  | Wat de leerling leest | Wanneer | Hoe vaak | In de code |
| --- | --- | --- | --- | --- |
| 1 | **Naar de noodzinnen** | Op de uitslag van de eerste les. | Eén keer (in de voortgang). | `phrases, src/App.tsx` |
| 2 | **Wil je sneller?** | Alleen in Taal, na 3 lessen achter elkaar zonder fout. | Eén keer (in de voortgang). | `paceAfterLesson, src/lib/pace.ts` |
| 3 | **Wat vind je van Vloertaal?** | Na de 3e en 15e les, met drie gezichtjes. | Losse sleutel vloertaal:gevoel. | `feelDue, src/lib/feel.ts` |
| 4 | **Oefen samen** | Alleen in Taal, na een les met gesprekjes. Maakt plaats voor "Naar de noodzinnen" en "Wat vind je van Vloertaal?". | Elke keer. | `hasSamen, src/lib/samen.ts` |
| 5 | **Probeer het vandaag op je werk** | Na een les die de leerling voor het eerst doet. Maakt plaats voor "Wil je sneller?" en "Wat vind je van Vloertaal?". | Hooguit één keer per dag (losse sleutel vloertaal:work-try). | `workTryFor, src/lib/workTry.ts` |

### Na de uitslag

Achter elkaar, in deze volgorde. Daarna terug naar Route.

|  | Wat de leerling leest | Wanneer | Hoe vaak | In de code |
| --- | --- | --- | --- | --- |
| 1 | **Certificaat behaald** | De les maakte een onderwerp af. Daarna het certificaat of het spiekkaartje; bij het eerste certificaat in Taal "Voor je collega". | Eén keer per onderwerp (in de voortgang). | `afterLessonSteps, src/lib/afterLesson.ts` |
| 2 | **Dagen op rij** | Na de eerste les van de dag, als de reeks omhoog ging. Bij 3, 7, 14 en 30 dagen met een "Wist je dat?". Niet met "Rustig scherm". | Elke dag hooguit één keer. | `afterLessonSteps, src/lib/afterLesson.ts` |
| 3 | **Zo blijf je oefenen** | Het aanbod van een herinnering en de app op het beginscherm. | Eén keer (losse sleutel vloertaal.keepOffered). | `keepOffered, src/lib/keepOffered.ts` |

### In een les of op een onderwerp

Kleine hulp, op het moment zelf.

|  | Wat de leerling leest | Wanneer | Hoe vaak | In de code |
| --- | --- | --- | --- | --- |
| 1 | **Zeg het samen** | Voor het opnemen: bij de eerste spreekoefening ooit, of als de leerling 2 spreekoefeningen achter elkaar oversloeg. | In de voortgang. | `chorusDue, src/lib/chorus.ts` |
| 2 | **Het handje doet het voor** | De eerste keer bij zin bouwen, paren verbinden en typen. | Eén keer per soort oefening (losse sleutel vloertaal:shown-how). | `src/components/ShowHow.tsx` |
| 3 | **Ik ken dit al: korte check** | Op de pagina van een onderwerp: alleen in Taal, bij een deel van de thema's, na een goede eerste toets, als er nog lessen open zijn. | Eén check per onderwerp (in de voortgang). | `checkOffered, src/lib/instapCheck.ts` |

Wat voorgaat staat op twee plekken in de code, en de app leest ze zelf: `src/lib/momentOrder.ts` (de kaarten op Route, en de vragen en rijen op de uitslag) en `src/lib/afterLesson.ts` (na de uitslag). Deze lijst volgt die volgorde vanzelf.

Niet in deze lijst, want altijd aanwezig: de zin van Bram, de herhaling van vandaag, en in Werkregels de regel "Over deze regels".

## 4. Alle schermen

### De vier tabbladen onderaan

- Route: het lespad met de volgende les.
- Hulp: noodzinnen, tips, klanken, en "Voor je begeleider".
- Instellingen.
- Over: wie erachter zit, privacy, wat is er nieuw.

### De start, één vraag per pagina

1. Kies je taal (of "Ik spreek al Nederlands").
2. Man of vrouw: alleen in talen waar de aanspreekvorm verschilt.
3. De code. Staat uit zolang alles open is voor iedereen.
4. In welke sector werk je (of wil je werken)?
5. In welk land werk je: Nederland of België?
6. Klaar: de app opent het lespad.

### Leren

| Scherm | Wat er staat | Hoe je er komt |
| --- | --- | --- |
| **Route (thuis)** | De volgende les, de herhaling van vandaag, en hooguit één kaart of regel met een aanbod. | De app opent hier. |
| **Alle onderwerpen** | Elk onderwerp, op thema of op volgorde. | De link onderaan Route. |
| **Een onderwerp** | De lessen van één onderwerp. | Alle onderwerpen, of een link van de begeleider. |
| **Een les** | De oefeningen van één les, of de herhaling van vandaag. | Route of een onderwerp. |
| **Ik ken dit al: korte check** | Vijf vragen over een onderwerp. | De pagina van een onderwerp. |
| **Uitslag van de korte check** | Genoeg goed: de lessen van het onderwerp zijn afgevinkt. | Na de korte check. |
| **Luister op de werkvloer** | Een geluidsscène om naar te luisteren. | De pagina van een onderwerp. |
| **Gelukt?** | Heb je de zin van gisteren op je werk gezegd? | De regel onder de volgende les op Route. |
| **Gelukt!** | Bram zegt hoeveel zinnen je al op je werk hebt gezegd. | Na "Ja, gelukt". |

### Na de les

| Scherm | Wat er staat | Hoe je er komt |
| --- | --- | --- |
| **Uitslag** | Hoeveel goed, nieuwe woorden, de volgende les, en hooguit één vraag of aanbod. | Na elke les. |
| **Oefen samen** | De gesprekjes van de les, met z'n tweeën op één telefoon. | De uitslag. |
| **Certificaat behaald** | Het onderwerp is af. | Na de uitslag van de laatste les van een onderwerp. |
| **Certificaat** | Het certificaat van één onderwerp, om te laten zien of te delen. | Certificaat behaald, of Instellingen. |
| **Spiekkaartje** | De vijf handigste zinnen van een onderwerp. | Certificaat behaald. |
| **Voor je collega** | Een kaart om aan een collega te laten zien. | Het eerste certificaat, of Hulp. |
| **Dagen op rij** | De reeks ging omhoog. Bij 3, 7, 14 en 30 dagen met een "Wist je dat?". | Na de eerste les van de dag. |
| **Zo blijf je oefenen** | Het aanbod van een herinnering en de app op het beginscherm. | Eén keer, na een les. |

### Hulp

| Scherm | Wat er staat | Hoe je er komt |
| --- | --- | --- |
| **Hulp** | Het begin van het tabblad Hulp. In Werkregels: "Wie bel je?". | Het tabblad Hulp. |
| **Noodzinnen** | Zinnen voor als het misgaat. | Hulp, of de uitslag van de eerste les. |
| **Werkvloer-tips** | Hoe het hier gaat op het werk, en je rechten. | Hulp. |
| **Hoe zeg je het?** | Alle klankkaarten. | Hulp. |
| **Eén klank** | Eén klankkaart, met de mond. | Hoe zeg je het? |
| **Sociale kaart** | Instanties in de regio. Alleen met een regio gekozen. | Hulp. |

### Toets

| Scherm | Wat er staat | Hoe je er komt |
| --- | --- | --- |
| **Wat ken je al? (het aanbod)** | Doe de toets, of later. | De regel onder de volgende les op Route. |
| **Wat ken je al? (de toets)** | Ongeveer tien minuten. | Het aanbod, of Instellingen. |
| **Uitslag van de toets** | Drie balken, voor en na. | Na de toets. |
| **De toets in Instellingen** | De uitslagen terugzien, of de toets doen. | Instellingen. |

### Instellingen en over

| Scherm | Wat er staat | Hoe je er komt |
| --- | --- | --- |
| **Instellingen** | Het menu en alle pagina's eronder: taal, sector, geluid, tekst, voortgang bewaren. | Het tabblad Instellingen. |
| **Over** | Wie erachter zit, privacy, contact, de versie. | Het tabblad Over. |
| **Wat is er nieuw?** | Het logboek van veranderingen. | Onderaan Over. |

### Voor begeleiders

| Scherm | Wat er staat | Hoe je er komt |
| --- | --- | --- |
| **Laat zien hoe het gaat** | De begeleiderskaart: onderwerpen af, dagen geoefend, de toets. | Hulp of Instellingen. |
| **Voor begeleiders** | Een link per onderwerp om te sturen, en de demo. | Over, of vloertaal.nl/#begeleiders. |
| **Beheer** | Voor de eigenaar, met wachtwoord: het tegoed voor de stemmen, en elke les bekijken. | vloertaal.nl/#beheer. |

## 5. Wat de telefoon onthoudt

Alles blijft op de telefoon. Er gaat niets naar een server.

**In de reservekopie zit alleen de voortgang** (`vloertaal:v1`). De andere 46 plekken gaan niet mee naar een nieuwe telefoon.

### De voortgang (1)

| Wat de telefoon onthoudt | Hoe lang | Sleutel | Waar |
| --- | --- | --- | --- |
| Alles van de leerling in één bestand: hulptaal, sector, land, lessen die af zijn, woorden om te herhalen, dagen op rij, certificaten, de toets, en de meeste instellingen (kleur, lettergrootte, stem, tempo, rustig scherm). | blijft staan | `vloertaal:v1` | `src/lib/progress.ts` |

### Keuzes van de leerling (13)

| Wat de telefoon onthoudt | Hoe lang | Sleutel | Waar |
| --- | --- | --- | --- |
| De naam op het certificaat. | blijft staan | `vloertaal:cert-name` | `src/lib/certificate.ts` |
| Spreken oefenen aan of uit. | blijft staan | `vloertaal:speaking` | `src/lib/speaking.ts` |
| "Laat de telefoon luisteren (proef)" aan of uit. | blijft staan | `vloertaal:listen` | `src/lib/listen.ts` |
| "Ik wil ook leren schrijven" aan of uit. | blijft staan | `vloertaal:learn-writing` | `src/lib/writing.ts` |
| Schrijven met lettertegels of met het toetsenbord. | blijft staan | `vloertaal:writing-input` | `src/lib/writing.ts` |
| Ook Engels laten zien naast de hulptaal. | blijft staan | `vloertaal:show-english` | `src/lib/english.ts` |
| Alle onderwerpen: op thema of op volgorde. | blijft staan | `vloertaal:topicsOrder` | `src/lib/topicsOrder.ts` |
| De pagina Over in eenvoudig Nederlands lezen. | blijft staan | `vloertaal:aboutNl` | `src/lib/aboutDutch.ts` |
| Oefen samen: de vertaling onder elke zin aan of uit. | blijft staan | `vloertaal:samen-help` | `src/components/Samen.tsx` |
| Het tijdstip van de herinnering in de agenda. | blijft staan | `vloertaal:reminder-time` | `src/lib/reminder.ts` |
| "Lessen op deze telefoon" aan of uit. | blijft staan | `vloertaal:offline-auto` | `src/lib/offline.ts` |
| De anonieme telling uitgezet. | blijft staan | `vloertaal:count-off` | `src/lib/count.ts` |
| Het niveau van de ingevulde code (volledig, proef of sneak preview). | blijft staan | `vloertaal.access` | `src/lib/access.ts` |

### Al gezien of al gevraagd (12)

| Wat de telefoon onthoudt | Hoe lang | Sleutel | Waar |
| --- | --- | --- | --- |
| De dag waarop Bram voor het laatst groette. | blijft staan | `vloertaal:greeted` | `src/lib/greeting.ts` |
| Bij welke lessen "Wat vind je van Vloertaal?" al is gevraagd. | blijft staan | `vloertaal:gevoel` | `src/lib/feel.ts` |
| Het aanbod van de herinnering en het beginscherm is getoond. | blijft staan | `vloertaal.keepOffered` | `src/lib/keepOffered.ts` |
| Wanneer "Bewaar je voortgang" is getoond, en of het is weggetikt. | blijft staan | `vloertaal:backup-nudge` | `src/lib/backupNudge.ts` |
| De dag waarop "Probeer het vandaag op je werk" voor het laatst stond. | blijft staan | `vloertaal:work-try` | `src/lib/workTry.ts` |
| De zin waar "Gelukt?" nog naar vraagt, en van welke dag. | blijft staan | `vloertaal:work-try-ask` | `src/lib/workTry.ts` |
| Hoe vaak elke tip al is getoond (een tip staat er alleen de eerste paar keer). | blijft staan | `vloertaal:first-times` | `src/lib/firstTimes.ts` |
| Bij welke oefeningen het handje al heeft voorgedaan hoe het moet. | blijft staan | `vloertaal:shown-how` | `src/components/ShowHow.tsx` |
| De knop "Verder" is al een keer gebruikt (daarna staat er alleen een pijl). | blijft staan | `vloertaal:go-known` | `src/lib/goKnown.ts` |
| De regel "deze telefoon heeft geen Nederlandse stem" is getoond. | blijft staan | `vloertaal:no-voice-noted` | `src/components/RulesHelp.tsx` |
| De uitleg bij de knop Melden is getoond. | blijft staan | `vloertaal:report-hint` | `src/lib/report.ts` |
| Wanneer de browser voor het laatst is gevraagd de voortgang te bewaren. | blijft staan | `vloertaal:persist-asked` | `src/lib/install.ts` |

### Techniek (11)

| Wat de telefoon onthoudt | Hoe lang | Sleutel | Waar |
| --- | --- | --- | --- |
| Een les die halverwege is gestopt, om verder te gaan (hooguit twee dagen). | blijft staan | `vloertaal:resume` | `src/lib/resume.ts` |
| Het onderwerp uit een link van de begeleider, tot het lespad het heeft getoond. | blijft staan | `vloertaal.linkedUnit` | `src/lib/unitLink.ts` |
| De lijst van onderwerpen die op de telefoon staan. | blijft staan | `vloertaal:offline` | `src/lib/offline.ts` |
| Het antwoord van de browser op de vraag om de voortgang te bewaren. | blijft staan | `vloertaal:persist` | `src/lib/install.ts` |
| Het nummer van de afspraak in de agenda. | blijft staan | `vloertaal:reminder-uid` | `src/lib/reminder.ts` |
| De versie van de afspraak in de agenda. | blijft staan | `vloertaal:reminder-seq` | `src/lib/reminder.ts` |
| Voor welke nieuwe versie de app al opnieuw is geladen. | tot het tabblad sluit | `vloertaal:update-for` | `src/lib/appUpdate.ts` |
| Wanneer de app voor het laatst opnieuw is geladen na een fout bij het laden. | tot het tabblad sluit | `vloertaal:update-reload` | `src/lib/appUpdate.ts` |
| De lessen en opnames die op de telefoon staan. | blijft staan (bestanden) | `vloertaal-offline-v1` | `src/lib/offline.ts` |
| De zin die de leerling insprak bij de toets, toen en nu. | blijft staan (opnames) | `vloertaal-toets` | `src/lib/toetsVoice.ts` |
| De eerste opname van een zin, voor "Toen en nu". | blijft staan (opnames) | `vloertaal-stem` | `src/lib/firstVoice.ts` |

### Anonieme telling (2)

| Wat de telefoon onthoudt | Hoe lang | Sleutel | Waar |
| --- | --- | --- | --- |
| Welke oefendagen (1, 2, 7, 14, 28) al zijn geteld. | blijft staan | `vloertaal:count-dagen` | `src/lib/count.ts` |
| Of "voor het eerst geopend" en "start af" al zijn geteld. | blijft staan | `vloertaal:count-eerste` | `src/lib/count.ts` |

### Voor testers en begeleiders (8)

| Wat de telefoon onthoudt | Hoe lang | Sleutel | Waar |
| --- | --- | --- | --- |
| De knop Melden aan (met ?test). | blijft staan | `vloertaal:tester` | `src/lib/report.ts` |
| "Eén app" aan op deze telefoon (met ?nieuw=1). | blijft staan | `vloertaal:nieuw` | `src/lib/oneApp.ts` |
| De beheerpagina is geopend met het wachtwoord. | blijft staan | `vloertaal:admin` | `src/lib/adminLock.ts` |
| België aan tijdens het ontwikkelen (met ?be=1). | tot het tabblad sluit | `vloertaal:be` | `src/content/regels/be/live.ts` |
| Werkregels aan tijdens het ontwikkelen (met ?rules=1). | tot het tabblad sluit | `vloertaal:rules` | `src/lib/track.ts` |
| De demo voor begeleiders staat aan. | blijft staan | `vloertaal-demo:on` | `src/lib/demo.ts` |
| De eigen voortgang van de begeleider, weggezet tijdens de demo. | blijft staan | `vloertaal-demo:own` | `src/lib/demo.ts` |
| De demo is net gestopt. | tot het tabblad sluit | `vloertaal-demo:stopped` | `src/lib/demo.ts` |
