# Nachtronde 28–29 oktober 2026

*Een nacht refactoren en verbeteren (branch `refactor/nacht`, PR #91). Het SEO-werk van dezelfde
avond staat apart in PR #90 en `docs/seo-plan.md`.*

## Werkwijze

```
  onafhankelijke review ──► bevinding ──► nadoen (test of browser) ──► fix ──► opnieuw nadoen
        (alleen lezen)                     │ niet na te doen? weg              │
                                           ▼                                   ▼
                                     niet gerepareerd                tests + build + push
```

Elke bevinding is eerst nagedaan: met een test die faalde, of in de gebouwde app met Playwright
(echte klikken, echte bestanden). Wat niet na te doen was, is niet aangepast.

Zo zijn deze delen bekeken, elk door een eigen reviewer: offline en geluid, antwoorden nakijken en
herhaling, Werkregels, back-up en reeks, Hulp/regio/begeleiders/certificaten, de oefenschermen,
herinnering/installeren/updates, Instellingen, home en uitslag, en de vertaalmachinerie. Daarna
hebben twee aparte reviews alleen naar de wijzigingen van deze nacht gekeken, op zoek naar wat die
zelf kapotmaakten; wat ze vonden is ook gerepareerd (zie de tabel).

## Wat er veranderd is

### Bugs

| Wat ging er mis | Wie merkte het | Nu |
|---|---|---|
| Na de eerste fout in een les werd de plek niet meer bewaard: "Verder" begon weer bij die fout | iedereen die een les onderbreekt | de plek blijft bewaard, ook met fouten in de rij |
| Zonder spraakmotor (de browser in WhatsApp/Facebook op Android) werden alle luister- en typoefeningen overgeslagen | wie de link in WhatsApp opent | de opnames spelen gewoon; alleen "Zonder geluid" slaat ze over |
| Terug in de eerste start bracht de codepagina terug ("code geaccepteerd") | nieuwe leerlingen | Terug → taal → sector, zonder codepagina |
| Een taal waarvan het bestand laat kwam, won van een latere keuze, en ging twee pagina's terug | trage verbinding | de laatst getikte taal wint |
| Een antwoord in Instellingen kon na Terug nog een pagina extra teruggaan | iedereen | de wachttijd vervalt bij een andere pagina |
| De reeks viel naar 1 als de laatste oefendag "later" was dan vandaag (buitenland, klok) | reizigers | de reeks blijft |
| Na een andere stem bleven de oude opnames in de offline-opslag | wie lessen bewaart | ze worden opgeruimd |
| "Lessen bewaren" aangezet zonder internet: er werd niets bewaard, ook niet later | wie offline instelt | het bewaren start als internet terugkomt |
| Het regiobestand (Zuid-Limburg) dat niet laadde, werd niet opnieuw geprobeerd | Zuid-Limburg | opnieuw als internet terugkomt |
| Een back-upbestand dat niet te lezen is: geen melding | wie herstelt | "geen Vloertaal-bestand" |
| Enter deed niets in de type-oefening | toetsenbord | Enter controleert |
| Het bewaarde spiekkaartje sneed lange titels af ("…de ongeschreven" zonder "regels") | Werkregels, lange vertalingen | titel en regel eronder lopen door |
| Annuleren van het deelscherm bij "Voor begeleiders" opende een kopieervenster | coaches | annuleren doet niets |
| Enter ingedrukt houden sloeg het reeksscherm over | toetsenbord | herhaalde toetsen tellen niet |
| De lettertegels leerden "de esigaret" (zonder streepje) | Tigrinya, Arabisch, Perzisch, Dari, Oekraïens, Bulgaars | woorden met een streepje of cijfer worden geluisterd, niet gespeld |
| Certificaat als download bewaard: geen melding | computer, Firefox op Android | "De afbeelding is bewaard" |
| "€ 112" zou als "één één twee euro" klinken | (nog geen les) | een bedrag blijft een bedrag |
| Lukte het stylesheet niet bij de start, dan bleef het startscherm voor altijd staan | slechte verbinding | "Opnieuw" (ook vanzelf als internet terug is) |
| Bleef het taalbestand hangen (geen antwoord), dan bleef het startscherm zonder knop staan | slechte verbinding | na 15 s "Opnieuw"; komt het bestand toch, dan gaat de app verder (en laadt later niet vanzelf opnieuw) |
| De luidsprekerknop liet de schermlezer "Vrouw of man?" met een Arabische (Poolse …) stem lezen | blinde en slechtziende leerlingen | het Nederlandse deel heeft `lang="nl"` |
| Kaarten die naar een volgende pagina gaan heetten "keuzerondje" | schermlezer | gewone knoppen; echte keuzes kregen pijltjestoetsen |
| Eén ontbrekend bestand bij "Lessen bewaren": het onderwerp bleef op "bewaren …" staan tot herladen, en kon niet opnieuw | wie lessen bewaart | de andere downloads stoppen, "mislukt", en opnieuw proberen kan |
| Een verbinding die wel verbindt maar blijft hangen (bus, kas): leeg scherm, stille luidsprekers, ook als alles op de telefoon stond | slecht bereik | na 4 s antwoordt de kopie op de telefoon; de vaste app-bestanden komen meteen van de telefoon |
| Een lange tekst (regel, uitleg) las verder na het verlaten van het scherm | Werkregels | hij stopt met het scherm |
| Na stoppen bleef de mond van een figuur nog tot 8 s bewegen, ook tijdens het opnemen | iedereen | stoppen is ook stoppen voor de figuur |
| Tijdens het opnemen kon je op de luidspreker tikken: het voorbeeld kwam in je eigen opname | spreekoefening | de luidspreker is weg tijdens het opnemen (de plek blijft) |
| "Voortgang wissen" in rood met te weinig contrast | slechtziend | donkerder rood |
| In de type-oefening telde het andere woord van een klankpaar als "bijna goed" ("de man" voor "de maan", "koud" voor "goud") | Klanken-lessen | het andere woord is fout; een echte tikfout blijft "bijna" |
| iOS kon een getypt woord "verbeteren" | iPhone | autocorrectie uit in het invoerveld |
| Wie wisselde tussen Nederlands (Werkregels) en een andere taal, verloor het gekozen onderwerp; "Herhaal vandaag" van de ene route stond als klaar in de andere | wie beide routes doet | elke route houdt zijn eigen onderwerp, herhaaldag en eenmalige wegwijzer |
| Een begeleiderslink naar een onderwerp van de andere route (of een onbekend onderwerp) verving het gekozen onderwerp | coaches | zo'n link wordt genegeerd; het eigen onderwerp blijft |
| De schermlezer zei "Spiekkaartje · Spiekkaartje" | Werkregels, schermlezer | één keer |
| Een les begonnen om 23:58 en klaar om 00:03 telde voor de volgende dag: de dag ervoor gold als gemist (vrije dag weg of reeks gestopt) | avondleerders | de les telt voor de dag waarop hij begon |
| Een back-up samenvoegen op een nieuwe telefoon gaf de reeks van één kant (20 dagen → 1) | wie van telefoon wisselt | de reeksen lopen door als de dagen aansluiten |
| Dezelfde back-up opnieuw samenvoegen gaf een gebruikte vrije dag terug (eindeloos herhaalbaar) | iedereen met een back-up | de vrije dagen komen van de kant met de laatste oefendag |
| Na een klok die terugging, stond in de weekrij een dag die nog moest komen als gedaan | reizigers | alleen dagen tot vandaag |
| De app 's nachts open laten (op de achtergrond): de vlam en reeks bleven op gisteren, en "je reeks is gestopt" kwam nooit | iedereen | bijgewerkt zodra de app weer in beeld komt (niet midden in een les) |
| Met een regio: certificaat en spiekkaartje gaven een ander onderwerpnummer dan het pad (24 tegen 25) | Zuid-Limburg (zodra regio's live gaan) | hetzelfde nummer als op het pad |
| De Sociale kaart zonder het regiobestand: een leeg scherm zonder balk | Zuid-Limburg, slechte verbinding | het Hulp-tabblad |
| Dubbeltik op "Verder" sloeg de volgende kaart over (een nieuw woord werd nooit getoond) | iedereen met haast | de tweede tik telt niet |
| Dubbeltik op het goede woordtegeltje: de tweede tik viel op het volgende rijtje en telde als fout | zinnen bouwen, letters | een tik in het eerste moment na een nieuw rijtje telt niet |
| Twee keer op hetzelfde foute kaartje of tegeltje telde als twee fouten (en werd zo "Niet helemaal") | koppelen, zinnen, letters | dezelfde fout telt één keer |
| Na een goed tegeltje of paar was de toetsenbordfocus weg; koppelen zei niets tegen de schermlezer | toetsenbord, schermlezer | de focus gaat naar het volgende tegeltje; goed/fout wordt voorgelezen |
| Spreken: de microfoon kon starten terwijl de app op de achtergrond stond, en de opname speelde daar af | spreekoefening | niet op de achtergrond |
| Spreken: na een mislukte microfoon bleef "Verder" staan tijdens de nieuwe poging | spreekoefening | weg tot de poging klaar is; de focus gaat naar de volgende knop |
| Een fout gekoppeld rijtje als allerlaatste oefening kwam niet terug | dagelijkse herhaling | komt terug, zoals elders |
| Een nieuwe versie kon herladen terwijl de herinnering-vraag na de les open stond (de agenda stuurt je weg en terug) | wie een herinnering zet | niet op dat scherm |
| Op een trage verbinding kon het herladen naar een nieuwe versie de oude versie terugkrijgen, en dat elke 5 minuten herhalen (door de 4-secondenregel van vannacht) | slechte verbinding | eerst wachten tot de nieuwe versie geïnstalleerd is; hooguit één keer per versie |
| Donker thema op een lichte telefoon: bij het starten eerst licht, dan donker (en grote letters sprongen pas later groot) | wie donker of grote letters kiest | thema, balkkleur en lettergrootte staan er vóór het eerste beeld |
| Instellingen: een taal tikken, Terug, en het trage taalbestand zette alsnog de taal om en ging een pagina te ver terug | trage verbinding | na Terug doet het late bestand niets meer |
| Stem-pagina: "deze telefoon heeft geen Nederlandse stem" zolang de opgenomen stemmen nog laadden | trage verbinding | niets tot ze er zijn |
| Met geblokkeerde opslag (privé-modus, sommige apps) bleven Spreken, Schrijven en "Lessen bewaren" niet eens dit bezoek staan | privé-modus | ze blijven voor dit bezoek, zoals "Ook Engels tonen" |
| "Voortgang wissen" liet de naam op de certificaten staan | gedeelde telefoon | ook de naam gaat weg (wordt opnieuw gevraagd) |
| Een oude les opnieuw oefenen (via "Ander onderwerp") trok de home weg van het onderwerp waar je mee bezig was | wie herhaalt | het onderwerp blijft staan |
| "Alle onderwerpen": na Terug van een onderwerp weer bovenaan de lange lijst | wie andere sectoren bekijkt | terug op dezelfde plek |
| Dubbeltik op "Verder" na een les kon twee schermen teruggaan (of de app uit) | iedereen met haast | de tweede tik doet niets |
| Het "zonder geluid"-icoon had een naam die de vertaling twee keer zei | schermlezer | één keer |
| Dari stond als `lang="prs"`, een code die telefoonstemmen niet kennen | Dari, schermlezer | `fa-AF`, zoals al voor de datums |
| Alleen-Engels: de Engelse tekst stond als Nederlands gemarkeerd (Nederlandse stem leest Engels) | alleen-Engels, schermlezer | `lang="en"` |

### Verlenging (29 oktober, 04:20–06:20)

Na het mergen van #90 en #91 nog twee uur, met dezelfde werkwijze. Bekeken: de eerste start,
de schermen naast de lessen (tips, noodzinnen, Over, onderwerpen), "Herhaal vandaag", wat de app
verstuurt (privacy), beweging en timers, de Werkregels-oefeningen, en de 48 SEO-pagina's (axe en
alle 1668 interne links). Tot slot een review van alleen deze wijzigingen; wat die vond, is
gerepareerd (onder meer een focusring rond de eerste vraag). Daarna in de gebouwde app: hele
lessen in drie talen, de eerste start in drie talen, offline, een hangende verbinding, en een
les hervatten na herladen.

| Wat ging er mis | Wie merkte het | Nu |
|---|---|---|
| Eerste start: een dubbeltik beantwoordde ook de volgende vraag (Engels: de sectorgroep én de sector zonder die te zien; Pools: "Kobieta" én een sectorgroep) | nieuwe leerlingen | een tik in het eerste moment na nieuwe kaarten telt niet |
| Eerste start: bij elke nieuwe vraag ging de schermlezerfocus naar het logo, niet naar de vraag; binnen een pagina ("Andere taal", sectorgroep → sectoren) ging de focus helemaal weg | schermlezer | de focus gaat naar de vraag |
| De talenlijst stond als Nederlands (of, na Terug, als Arabisch …) gemarkeerd; Dari in de lijst als `prs` | schermlezer | de lijst is Engels, elke taalnaam heeft zijn eigen code, Dari `fa-AF` |
| Twee keer snel op een tabblad onderin (vanaf een onderwerp) kwam op de home uit, en Terug ging daarna de app uit | iedereen met haast | het laatst getikte tabblad, en Terug werkt gewoon |
| De noodzinnen op het Hulp-tabblad bleven offline stil als ze nooit eerder waren afgespeeld (ze stonden niet bij de bewaarde lessen) | offline, de belangrijkste zinnen | ze worden één keer stil opgehaald zodra de app online is, en gaan mee met elk bewaard onderwerp |
| De SEO-pagina's: twee menu's met dezelfde naam op /voor-begeleiders/, en de stemknoppen van /stemmen/ buiten elk oriëntatiepunt | schermlezer | axe over alle 48 pagina's, licht en donker: geen meldingen meer |
| "Herhaal vandaag" begonnen om 23:58 en na middernacht klaar: de herhaling van vandaag stond als gedaan, de woorden die vandaag aan de beurt waren schoven een dag op | avondleerders | de herhaling telt voor de dag waarvoor ze begon; die van vandaag staat nog open |
| De kaart "Herhaal vandaag" zei 2 woorden, de herhaling vroeg er 4 (aangevuld) | iedereen met weinig herhaalwoorden | hetzelfde getal |
| Luisteroefeningen die in de herhaling werden overgeslagen (geluid uit), telden op de uitslag toch als herhaald | zonder geluid | alleen wat gevraagd is, telt |
| "Minder beweging" (telefooninstelling): het scrollen naar een taal in Instellingen bewoog toch; de schaduw onder de kop in een les (die niet beweegt) viel weg | wie last heeft van beweging | geen beweging, schaduw blijft |
| Werkregels: een verhaal kon opnieuw beginnen in een andere stem (als de opgenomen stemmen binnenkwamen) | trage verbinding | één keer voorgelezen |
| Werkregels: de oplichtende rij op een kaart of loonstrook was alleen te zien, niet te horen; de loonstrook had geen luidspreker (en ging niet mee offline) | schermlezer, wie liever luistert | "hier gaat het om" voor de schermlezer; de loonstrook heeft een luidspreker en gaat mee |
| "Meetellen" uitgezet in privé-modus (geblokkeerde opslag) telde stil door; "Global Privacy Control" werd niet gezien | privacy | uit is uit, ook dan; GPC telt als "niet meetellen" |
| Back-up "Vervangen": vroeg alleen opnieuw bij een bestand met mínder lessen; een bestand met evenveel (andere) lessen of een lager record wiste lessen, reeks en record in één tik | wie een back-up terugzet | het vraagt opnieuw zodra er iets verloren gaat (een les, certificaat of record) |
| Back-up terugzetten: de focus verdween na het kiezen van een bestand en na het antwoord; de melding werd vaak niet voorgelezen; bestanden uit WhatsApp of Drive (als .txt) waren soms niet te kiezen | schermlezer, telefoon | de vraag krijgt de focus en geeft die terug; de melding wordt voorgelezen; ook .txt kan |

### Toegankelijkheid (axe-core en toetsenbord in de gebouwde app)

- Eén `<main>` op elk scherm (de app tekent in `<main id="root">`).
- Een h1 op de home, en in de les (de naam van de les, voor de schermlezer).
- Na een schermwissel gaat de focus naar de kop van het nieuwe scherm.
- Het pauzescherm houdt de toetsenbordfocus vast en geeft die bij sluiten terug aan ✕.
- Het label boven het spiekkaartje heeft genoeg contrast.

### Tests erbij

- `tests/lessonRender.test.ts`: elke oefening van elke les tekent, in het Pools, Arabisch,
  Tigrinya en alleen-Engels, en Werkregels in het Nederlands (meer dan 5.000 schermen).
- `tests/screensRender.test.ts`: Instellingen (elke pagina), Over, Hulp, noodzinnen, alle tips en
  de uitslag, in alle negen talen, ook in de vrouwelijke vormen.
- `tests/swStall.test.ts`: de service worker in een zandbak: een hangende verbinding, de eigen
  bestanden van de build, de updatecontrole.
- `tests/offlineFill.test.ts`, `tests/trackPlace.test.ts`, `tests/streakEdges.test.ts`: bewaren
  voor offline, elke route zijn eigen plek, de reeks rond middernacht en bij samenvoegen.
- In de gebouwde app (niet in de repo): een hele les in het Pools, Arabisch, Tigrinya en
  Oekraïens; de eerste start in drie talen; axe over elke oefening in drie talen, licht en donker;
  geen horizontaal scrollen op 320 px.

### Opruimen en snelheid

- **CSS**: 165 selectors van klassen die nergens meer voorkomen, weggehaald met een CSS-parser.
  Gecontroleerd door alle schermen in drie talen door te klikken: geen van de 719 klassen die de app
  echt toont, is geraakt. Een tweede ronde nam de klassen die alleen dynamisch *leken* (zoals
  `` `offline-${status}` ``) per mogelijke waarde door. De stylesheet ging van 203 naar 187 kB.
- **Dode code**:
  - het oude noodzinnen-scherm over de les, met zijn stijlen;
  - vier iconen;
  - acht functies en constanten die niets meer gebruikt.
- **Certificaat**: het scherm en de tekenfunctie laden pas als je ze ziet. Het hoofdbestand ging
  van 739 naar 721 kB.
- **Starttijd voor wie terugkomt**: het eigen taalbestand en de plaatjes worden nu tegelijk met
  het hoofdbestand opgevraagd (een paar regels in `index.html`, door de build geschreven). Op een
  gesimuleerde trage 4G-telefoon staat de home er na 3,3 s in plaats van 4,0 s.
- **Dubbele code**: certificaat en spiekkaartje delen nu één `roundRect` en één "delen of bewaren"
  (`src/lib/canvasShare.ts`). Volgens jscpd is dat de enige doublure buiten de tekeningen.

## Samen met PR #90 (SEO)

De twee PR's raken allebei `index.html`, `vite.config.ts` en `public/sw.js`. Een proefmerge van
beide (29 oktober, 04:00) gaat zonder conflict: de wijzigingen staan bewust op andere regels.
Samen slagen alle tests en de build. In de browser toont `/?taal=pl` "Polski?", is er
één `<main>`, en verdwijnen de SEO-links zodra de app tekent. De volgorde van mergen maakt niet uit.

## Bewust níét gedaan (graag een besluit)

0. **Privacy van het anoniem meetellen (belangrijk).** *Besloten 29 oktober: minder, en aan. Gedaan: één verzoek per gebeurtenis, alleen de les, het kwart en de minutenband; geen hulptaal, sector, versie, openen of code meer (zie `docs/pilot.md`). Zo klopt de privacytekst zoals hij is.* Een review van alles wat de app verstuurt:
   - Wat goed is: geen verzoeken naar derden behalve de teller; uit is echt uit (ook "Do Not
     Track", en sinds vannacht ook "Global Privacy Control" en een uitgezette schakelaar bij
     geblokkeerde opslag); "Melden" opent je eigen mail met precies wat je ziet.
   - Wat niet goed is: één gebeurtenis gaat als tot 8 losse verzoeken tegelijk naar
     vloertaal.goatcounter.com (hulptaal, sector, versie, les, kwart, minuten). GoatCounter slaat
     elk verzoek op met IP-locatie, browser en tijd op de seconde, en kan ze per bezoek samenvoegen.
     Voor een kleine taalgroep in één plaats ("Tigrinya, zorg, Heerlen, 14:03") kan dat één
     persoon aanwijzen. De hulptaal zegt bij deze groep vaak de nationaliteit.
   - De privacytekst ("telt alleen hoe vaak lessen gedaan worden … niemand volgt je") zegt minder
     dan er gebeurt: ook dagelijks openen, hulptaal, sector, waar iemand stopt, regiolessen.
     Meetellen staat standaard aan en begint vóór iemand het weet.
   - Mogelijke keuzes: één verzoek per gebeurtenis zonder hulptaal; zelf tellen (eigen server,
     geen IP); standaard uit of een vraag in de eerste start; de tekst eerlijk maken (en laten
     vertalen). Niet zelf veranderd: dit is een keuze over beleid en vraagt nieuwe vertalingen.

1. **`aria-label` met "·"** (bijvoorbeeld "Route · Lekcje"). axe meldt dat de zichtbare tekst
   ("Route Lekcje") niet letterlijk in de naam staat, en dat helpt spraakbesturing niet. Het
   patroon zit overal en is bewust gekozen (een pauze voor de schermlezer). Daarom niet zelf
   veranderd. Kan met een komma of een spatie, als je dat wilt.
2. **Laadtijd van de voorpagina** (Lighthouse-LCP ±4 s bij gesimuleerd 4G). Bijna alles is wachten
   op het hoofdbestand (±220 kB gzip). Alleen de lesspeler lui laden scheelt maar 10 kB, met
   risico op een wachtscherm bij de eerste les; daarom teruggedraaid. Echte winst vraagt een
   grotere opsplitsing (de inhoud per thema, de oefeningen per soort). Dat is een eigen project.
3. **"Opnieuw proberen" op het foutscherm** heeft een Engelse naam voor de schermlezer. Het
   scherm komt vóór het taalbestand, dus er is nog geen vertaling. Er moet een korte vertaling bij
   in `src/i18n/meta.ts` (via de vertaalcontrole).
4. **Sectorpagina na Terug en dan Vooruit** kan op stap 2 openen. Dat kan alleen met een
   Vooruit-knop (een computer), en het gevolg is klein. Niet aangepast.
5. *Besloten en gedaan (29 oktober): een verkeerd lidwoord is fout; een vergeten lidwoord blijft "bijna goed".* **Een ander lidwoord telt als "bijna goed"** ("het tafel" voor "de tafel"). Bedoeld voor een
   *vergeten* lidwoord; een *verkeerd* lidwoord gaat er nu ook door, en het woord gaat in de
   herhaling omhoog. Zo wordt de/het nooit als fout geoefend. Strenger maken is een keuze over
   de lesaanpak; daarom niet zelf gedaan.
6. *Besloten en gedaan (29 oktober): een woord dat nog niet aan de beurt was houdt bij goed zijn vak; de datum schuift een dag op.* **Herhaling aanvullen** met woorden die nog niet aan de beurt waren: goed beantwoord gaan ze
   een vak omhoog, gerekend vanaf vandaag (een woord uit vak 5 komt dan pas over 30 dagen terug).
   Kan door alleen de datum te verschuiven en het vak te laten. Ontwerpkeuze, niet aangepast.
7. **Tigrinya: vier paren met dezelfde vertaling** (gevaar/ongeluk ሓደጋ, beschadigd/gewond ዝተጎድአ,
   hygiëne/kwaliteit ጽሬት, persoonlijk/privé ውልቃዊ). In een meerkeuzevraag staan ze dan als twee
   gelijke antwoorden naast elkaar. Voor de vertaalcontrole: nieuwe vertalingen niet zelf gemaakt.
8. *Besloten en gedaan (29 oktober): elke gemiste dag kost één vrije dag; met twee is een weekend vrij gedekt.* **Twee vrije dagen dekken geen weekend**: wie er twee heeft en zaterdag en zondag overslaat,
   verliest de reeks (een vrije dag dekt alleen precies één gemiste dag). Voor mensen die werken is
   een vrij weekend normaal. Bewust zo? Anders: één vrije dag per gemiste dag.
9. **Back-up en de twee routes**: het bestand bewaart niet bij welke route de herhaaldag hoort,
   en niet de geparkeerde plek van de andere route. Samenvoegen kan "Herhaal vandaag" van de ene
   route als klaar tellen voor de andere. Ook wordt het `version`-nummer van het bestand niet
   gecontroleerd. Klein, maar het bestandsformaat aanpassen wilde ik niet zonder overleg.
10. *Besloten en gedaan (29 oktober): het knopje "Certificaat" blijft, en het certificaat telt alleen de gedane lessen (en hun woorden).* **Een onderwerp dat na een update een les extra krijgt**: het certificaat blijft (bewust),
    maar het knopje "Certificaat" op de onderwerppagina verdwijnt, en het certificaat telt de
    nieuwe les mee ("4 lessen" waar er 3 gedaan zijn). Kiezen wat de bedoeling is.
11. **De dagelijkse herinnering op Android**: het agendabestand (.ics) belandt in Downloads, en
    Google Agenda op Android kan zo'n bestand niet openen; toch zegt de app "toegevoegd", en in
    Instellingen kan dezelfde tijd niet opnieuw. Delen via het deelmenu helpt niet (Chrome deelt
    geen .ics). Een oplossing is een link naar Google Agenda ("nieuwe gebeurtenis, elke dag"),
    maar dat is een externe dienst: graag een besluit. Ook: "Stop de herinnering" stuurt een
    annulering als bestand, wat agenda's waarschijnlijk niet als annulering lezen; en op iOS
    buiten Safari (in-app-browser) wijzen de installatiestappen naar een knop die er niet is.
12. **Een oude opgeslagen telefoonstem** (bijvoorbeeld "Google Nederlands", van vóór de
    keuze vrouw/man/automatisch): die leerlingen horen altijd de telefoonstem, en Instellingen
    toont geen keuze. Omzetten naar "automatisch" zou de opnames geven; dat verandert wat ze
    horen, dus niet zelf gedaan.
13. **Na een les uit een afgerond onderwerp** noemt de uitslag als "volgende" een les van het
    huidige onderwerp, terwijl Verder teruggaat naar het afgeronde onderwerp; en het "net
    gedaan"-sprongetje op de home kan later bij een ander onderwerp komen. Klein; de juiste
    tekst hangt af van wat je daar wilt laten zien.
14. **Perzisch en Dari: de datum "laatst bijgewerkt"** staat in de Perzische kalender met
    Perzische cijfers (۲۳ مهر ۱۴۰۵), naast "15 October 2026"; elders staan cijfers als 1, 2, 3.
    Misschien bewust; graag even kijken. En: Nederlandse woorden in een schermlezerlabel
    (bijvoorbeeld "Aanbevolen · …") worden met de stem van de hulptaal gelezen; dat vraagt een
    andere opbouw van die labels.
15. *Besloten en gedaan (29 oktober): als de herhaling klaar is en er nog woorden wachten, staat er een kleine kaart met "Extra ronde" op de home.* **"Extra ronde" bij "Herhaal vandaag"** kan nooit getikt worden: de kaart staat alleen op de
    home zolang er woorden aan de beurt zijn (het ontwerp "hooguit 3 tikken"), en de knop zit in de
    kaart als de herhaling klaar is. Zo wachten de woorden boven de 10 tot morgen. Kaart (klein)
    terug als klaar, of de knop weghalen: graag een besluit.
16. **De figuren ademen en knipperen eindeloos** op de home en in de les, zolang het scherm aan
    staat (ook als de telefoon blijft liggen). Klein, maar het kost doorlopend rekenwerk en dus
    batterij. Bijvoorbeeld na een paar keer ademen stoppen en alleen knipperen? Ontwerpkeuze.
17. **Back-up**: er is geen herinnering om een back-up te maken (alleen de herinnering om te
    oefenen); op een iPhone (app op het beginscherm) is "Download" onbetrouwbaar en zonder
    melding; en samenvoegen met hetzelfde bestand zegt opnieuw "je voortgang is terug" (een
    "niets nieuws"-melding vraagt een nieuwe vertaling).
18. **Afhankelijkheden**: geen kwetsbaarheden (`npm audit`). Er zijn alleen patch-updates (react 19.3.1,
   vite 8.3.5, vitest 5.0.5). Die heb ik niet zelf doorgevoerd.
