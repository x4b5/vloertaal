# Nakijken door vrijwilligers

*31 oktober 2026.* De vertalingen en de feiten in Vloertaal zijn met AI gemaakt en nagelezen
([`vertaalcontrole.md`](vertaalcontrole.md), [`werkregels-belgie.md`](werkregels-belgie.md),
[`taal-belgie.md`](taal-belgie.md)). Een mens moet ze nog nakijken:

- **moedertaalsprekers** voor de 13 hulptalen;
- **juristen of vakbondsmensen** voor de feiten over werk in Nederland en in België (de
  `// ⚖️ check:`-noten).

Zij lezen geen code. Daarom gaat het zo: **eruit → invullen → erin**. Een lijst eruit
(`review:export`), de vrijwilliger vult in Excel of Google Sheets drie lege kolommen in, en het
bestand komt terug in de app (`review:import`). De code staat in `scripts/review/`, de tests in
`tests/reviewPakket.test.ts`.

---

## 1. De bestanden maken

```sh
npm run review:export                 # alleen wat nog geen mens heeft nagekeken
npm run review:export -- --alles      # ook de teksten zonder markering
npm run review:export -- --taal pl,ro # alleen deze talen
```

Alles komt in `review/` (staat in `.gitignore`). Per vrijwilliger één map, die je zo kunt zippen
of mailen:

| Map | Inhoud | Voor wie |
|---|---|---|
| `review/vertaling-pl/` | `vertaling-pl.csv` + `LEESMIJ.txt` | een moedertaalspreker Pools (zo ook ar, ti, fa, prs, uk, tr, ro, bg, es, pt, fr, de) |
| `review/feiten-NL/` | `feiten-NL.csv` + `LEESMIJ.txt` | een jurist of vakbondsmens voor Nederland |
| `review/feiten-BE/` | `feiten-BE.csv` + `LEESMIJ.txt` | een jurist of vakbondsmens voor België (Vlaanderen) |

Waarom `review/` en niet de scratchpad: de eigenaar maakt de lijsten zelf, op de eigen
computer, en ingevulde bestanden kunnen namen of mailadressen van vrijwilligers bevatten. Die
horen niet in git. Een nieuwe export overschrijft de oude lijsten; zet ingevulde bestanden dus in
een eigen map, bijvoorbeeld `review/terug/`.

**Het bestandsformaat.** UTF-8 met een BOM, een puntkomma tussen de kolommen, elke cel tussen
aanhalingstekens. Excel met Nederlandse of Belgische instellingen opent dat met een dubbelklik
meteen in kolommen, ook met Arabische, Tigrinya of Poolse letters. Google Sheets (Bestand ›
Importeren) vindt de puntkomma zelf. Excel met Engelse instellingen: Gegevens › Uit tekst/CSV,
scheidingsteken puntkomma. Terug mag alles: met of zonder BOM, met puntkomma, komma of tab. Alleen
UTF-8 is verplicht (Excel: "Opslaan als" › "CSV UTF-8"); een ander bestand weigert de import met
uitleg.

### De vertaallijst

Kolommen: `id`, `waar` ("Taal › Veiligheid › tip, keuze 1 (de goede)", "Scherm › beta",
"Over › Waarom Vloertaal? › tekst"), `land` (NL, BE of beide), `nederlands`, `engels`, `vorm`,
`vertaling`, `status`, en drie lege: `goed?`, `beter zo`, `opmerking`.

- Een tekst met gendervormen heeft een rij per vorm: `vorm` is `m`, `f` of `x`. Een meervoud heeft
  `one`, `few`, `many`, `other` (en zo nodig `few.m` …). Leeg = één vorm.
- `status` komt uit de comment in `src/i18n`: `nieuw, nalezen` (ook "nieuw (30 okt 2026),
  nalezen"), `nagelezen AI` ("nagelezen AI 31 okt", "nagelezen (2e lezing)"), of `ongemarkeerd`.
  Een deel "x: nieuw, nalezen" geldt alleen voor de x-vorm. Een kopregel boven een blok
  ("// Entree in the Taal track …: nieuw, nalezen.") geldt tot de eerstvolgende lege regel.
- Zonder `--alles` alleen `nieuw, nalezen` en `nagelezen AI`. Wat een mens al nakeek
  (`// nagekeken: …`) komt nooit meer terug.
- Volgorde: eerst rechten en veiligheid (de thema's Veilig werken en Je rechten, elke tip met de
  slotzin "General information …", de noodzinnen en de slotzinnen), dan de lessen en tips in de
  volgorde van de cursus, dan de schermteksten, dan de rest (Over, thema's, "Wat kun je nu?", de
  regio).
- Een tekst met een vaste slotzin (`end("…", base, 'advice')` in `src/i18n/be/units/*.ts`) staat er
  zonder die slotzin in; `waar` zegt het erbij. De slotzin zelf is een eigen rij
  (`be.closing.*`).

### De feitenlijst

Kolommen: `nr`, `prioriteit`, `land`, `spoor` (Taal, Werkregels, help, disclaimer), `onderwerp`,
`bewering` (de noot), `tekst in de app` (de zin die het best bij de noot past, als die er is),
`bron` (wat in de noot tussen haakjes staat na een ⚖️, of de laatste haakjes die op een bron
lijken), `twijfel van de maker`, `bestand:regel`, en drie lege: `klopt?`, `correctie`,
`bron expert`.

- Elke `// ⚖️ check:`-noot in `src` is één rij, ook een noot over meer regels. NL of BE volgt uit
  het pad (`/be/`, `taalBe/`); in de gedeelde bestanden (`help.ts`, `askWho.ts`, `disclaimer.ts`)
  uit het blok (`HELP_ROWS_BE`) of uit Belgische woorden in de noot.
- Bovenaan staan de punten van de lijsten "Voor de expert" uit de inhoudsrapporten, met
  `prioriteit` en de twijfel van de maker. Ze staan in `scripts/review/prioriteit.json`, elk met
  de id's in de app waar ze over gaan. De punten X1–X9 van het Nederlandse Taal-rapport hadden
  geen id: die zijn met de hand gekoppeld (X1 → c.contract, c.agency, c.illness; X6 → de
  geluidsscène `g.bouw.steiger` …). Het rapport noemde `r.be.l.rechten.5`; die les bestaat niet,
  het feit staat in `r.be.l.rechten.4`. Komt er een nieuw rapport, zet de punten er dan bij (met
  `parseExpertTables` in `scripts/review/feiten.ts`). De export meldt een punt dat aan geen plek
  te koppelen is.
- "tekst in de app" is een gok op woorden en getallen. Leeg betekent: niet gevonden, niet "staat
  er niet".

## 2. Wie krijgt wat

- Per hulptaal één moedertaalspreker: de map `review/vertaling-<taal>/`. Het liefst iemand die ook
  Nederlands of Engels leest, en de taal van de werkvloer kent. Prioriteit: Tigrinya, dan Dari
  ([`vertaalcontrole.md`](vertaalcontrole.md)).
- Per land één jurist of iemand van een vakbond: `review/feiten-NL/` of `review/feiten-BE/`.
  Werkregels voor België staat nog uit, Taal voor België staat aan als bèta: allebei wachten ze
  op deze lijst ([`werkregels-belgie.md`](werkregels-belgie.md), [`taal-belgie.md`](taal-belgie.md)).
- Twee mensen voor dezelfde taal mag: geef ze elk een deel (de rijen staan op belang, dus de
  eerste helft is het belangrijkst), of laat de tweede de eerste nakijken.

## 3. Een ingevuld bestand verwerken

Zet het bestand in `review/terug/` en draai eerst een droogloop:

```sh
npm run review:import -- review/terug/vertaling-pl.csv --check
npm run review:import -- review/terug/vertaling-pl.csv
npx vitest run tests/i18n.test.ts
```

Het script ziet zelf of het een vertaal- of een feitenlijst is, en welke taal (aan de kolom
`vertaling`; anders `--taal pl`). `--datum 2026-11-03` zet een andere datum in de markering.

**Een vertaallijst.**

| In het bestand | Wat er gebeurt |
|---|---|
| `goed?` = ja | de tekst blijft; de markering wordt `// nagekeken: pl 2026-11-03` |
| `beter zo` gevuld (`goed?` leeg, ja of nee) | de tekst wordt `beter zo`, met dezelfde markering |
| `goed?` = nee, `beter zo` leeg | de tekst blijft staan, en komt in de lijst "nog open" |
| alles leeg | niets |
| `opmerking` | in het verslag, bij "Opmerkingen" |

- De status-delen van de comment gaan weg ("nieuw, nalezen", "x: nieuw, nalezen", "nagelezen AI
  31 okt"); andere notities blijven ("= c.insurance.o2"). Alleen een gekeurde x-vorm (met
  alleen "x: nieuw, nalezen") krijgt `// x: nagekeken: …`.
- Een tekst met vormen is pas nagekeken als alle vormen met een markering goedgekeurd zijn. Anders
  verandert alleen wat verbeterd is, en staat hij in het verslag bij "deels nagekeken".
- Het verslag komt in `review/vertaling-terug-<taal>.md`: veranderd, nog open, deels, opmerkingen,
  fouten.

**Veiligheid.** Alleen de waarde tussen de aanhalingstekens en de comment van die regel
veranderen; daarna leest het script het bestand opnieuw en controleert dat verder alles gelijk
is. Een rij wordt geweigerd als:

- het id niet bestaat, of de vorm niet;
- `beter zo` andere plekhouders heeft (`{n}`, `{word}`) dan de vertaling, of een enter;
- de tekst in de app veranderd is sinds de export (dan klopt het oordeel niet meer);
- `goed?` geen ja of nee is (ook yes, ok, ✓ en nee, no, ✗ gaan);
- de rij twee keer in het bestand staat.

Staat er één fout in het bestand, dan schrijft het script **niets** en noemt het elke fout met
het rijnummer. Verbeter het bestand, of verwerk de goede rijen toch met `--toch`.

**Een feitenlijst.** Er verandert **niets** in de app: een feit veranderen blijft mensenwerk. Het
script schrijft `review/feiten-terug-<land>.md`: wat niet klopt (met de correctie, de bron van de
expert en `bestand:regel`), wat zonder ja of nee een opmerking heeft, en wat klopt. Daarmee
verwerk je het zelf, of geef je het aan Claude: "verwerk review/feiten-terug-BE.md; pas de tekst
en de ⚖️-noot aan, en zet bij de noot: nagekeken door … op …".

## 4. Tekst voor de mail aan vrijwilligers

> **Onderwerp:** Wil je helpen met Vloertaal?
>
> Hoi,
>
> Ik ben Xavier. Ik maak Vloertaal: een gratis app waarmee nieuwkomers Nederlands leren voor hun
> werk, in Nederland en in België. Er is geen reclame en niemand verdient eraan.
>
> De uitleg in de app staat ook in [het Pools]. Die vertaling is gemaakt met hulp van AI. Een
> mens met [Pools] als moedertaal heeft er nog niet naar gekeken. Daar zoek ik hulp bij.
> (Voor een jurist of iemand van een vakbond: de feiten over werk in [België], zoals loon, contract
> en ziek zijn, zijn met hulp van AI opgezocht. Een deskundige heeft ze nog niet nagekeken.)
>
> In de bijlage zit een lijst die je in Excel of Google Sheets opent, en een korte uitleg. Je vult
> alleen in of een tekst goed is, en zo niet, wat beter is. Je hoeft niet alles te doen: bovenaan
> staan de belangrijkste teksten, over veiligheid en rechten. Elke rij helpt.
>
> Heb je geen tijd of zin? Dan is dat helemaal goed. Ken je iemand anders? Dan hoor ik dat graag.
>
> Je kunt het bestand terugsturen naar hoi@vloertaal.nl. Daar kun je ook je vragen kwijt.
>
> Dank je wel,
> Xavier

Bij de feitenlijst: vertel er eerlijk bij dat de app algemene informatie geeft, geen juridisch
advies, en dat een eenvoudige zin goed is zolang hij niemand op het verkeerde been zet. Vraag of
de vrijwilliger met naam genoemd wil worden; zet dat er pas bij als hij ja zegt.
