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

### Toegankelijkheid (axe-core en toetsenbord in de gebouwde app)

- Eén `<main>` op elk scherm (de app tekent in `<main id="root">`).
- Een h1 op de home.
- Na een schermwissel gaat de focus naar de kop van het nieuwe scherm.
- Het pauzescherm houdt de toetsenbordfocus vast en geeft die bij sluiten terug aan ✕.
- Het label boven het spiekkaartje heeft genoeg contrast.

### Tests erbij

- `tests/lessonRender.test.ts`: elke oefening van elke les tekent, in het Pools, Arabisch,
  Tigrinya en alleen-Engels, en Werkregels in het Nederlands (meer dan 5.000 schermen).
- `tests/screensRender.test.ts`: Instellingen (elke pagina), Over, Hulp, noodzinnen, alle tips en
  de uitslag, in alle negen talen, ook in de vrouwelijke vormen.

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
beide (29 oktober, 00:50) gaat zonder conflict: de wijzigingen staan bewust op andere regels. Samen
slagen alle 1179 tests en de build. In de browser toont `/?taal=pl` "Polski?", is er
één `<main>`, en verdwijnen de SEO-links zodra de app tekent. De volgorde van mergen maakt niet uit.

## Bewust níét gedaan (graag een besluit)

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
5. **Een ander lidwoord telt als "bijna goed"** ("het tafel" voor "de tafel"). Bedoeld voor een
   *vergeten* lidwoord; een *verkeerd* lidwoord gaat er nu ook door, en het woord gaat in de
   herhaling omhoog. Zo wordt de/het nooit als fout geoefend. Strenger maken is een keuze over
   de lesaanpak; daarom niet zelf gedaan.
6. **Herhaling aanvullen** met woorden die nog niet aan de beurt waren: goed beantwoord gaan ze
   een vak omhoog, gerekend vanaf vandaag (een woord uit vak 5 komt dan pas over 30 dagen terug).
   Kan door alleen de datum te verschuiven en het vak te laten. Ontwerpkeuze, niet aangepast.
7. **Tigrinya: vier paren met dezelfde vertaling** (gevaar/ongeluk ሓደጋ, beschadigd/gewond ዝተጎድአ,
   hygiëne/kwaliteit ጽሬት, persoonlijk/privé ውልቃዊ). In een meerkeuzevraag staan ze dan als twee
   gelijke antwoorden naast elkaar. Voor de vertaalcontrole: nieuwe vertalingen niet zelf gemaakt.
8. **Twee vrije dagen dekken geen weekend**: wie er twee heeft en zaterdag en zondag overslaat,
   verliest de reeks (een vrije dag dekt alleen precies één gemiste dag). Voor mensen die werken is
   een vrij weekend normaal. Bewust zo? Anders: één vrije dag per gemiste dag.
9. **Back-up en de twee routes**: het bestand bewaart niet bij welke route de herhaaldag hoort,
   en niet de geparkeerde plek van de andere route. Samenvoegen kan "Herhaal vandaag" van de ene
   route als klaar tellen voor de andere. Ook wordt het `version`-nummer van het bestand niet
   gecontroleerd. Klein, maar het bestandsformaat aanpassen wilde ik niet zonder overleg.
10. **Een onderwerp dat na een update een les extra krijgt**: het certificaat blijft (bewust),
    maar het knopje "Certificaat" op de onderwerppagina verdwijnt, en het certificaat telt de
    nieuwe les mee ("4 lessen" waar er 3 gedaan zijn). Kiezen wat de bedoeling is.
11. **Afhankelijkheden**: geen kwetsbaarheden (`npm audit`). Er zijn alleen patch-updates (react 19.3.1,
   vite 8.3.5, vitest 5.0.5). Die heb ik niet zelf doorgevoerd.
