# Het spoor Taal voor België (Vlaanderen)

*31 oktober 2026. De basis staat (branch `be-taal/basis`): het mechanisme, de tests, een
C-voorbeeld (`u.society`, "Meedoen in België") en een B-voorbeeld (`u.online`, DigiD → itsme). De
andere units schrijven de inhoudsagents, elk in eigen bestanden. Zie ook
[`werkregels-belgie.md`](werkregels-belgie.md): Werkregels doet hetzelfde voor het spoor Werkregels.*

De Belgische versie staat **aan** (`BE_TAAL_LIVE = true` in `src/content/taalBe/live.ts`), als
bèta: een leerling in België ziet bij de tips en op "Over" de regel **"De Belgische lessen zijn
nieuw en nog niet nagekeken door een expert."** (ui `beTaalBeta`, 13 talen). Elk feit in een
Belgisch bestand staat met `// ⚖️ check:` en een bron in de code. `?be=1` zet in ontwikkeling de
Belgische versies van beide sporen aan; tests gebruiken `setBeTaal(true)`.

---

## 1. Het mechanisme

### Het land

`progress.country` ('nl' of 'be') staat in één module: `src/content/country.ts`. `App.tsx` zet
het bij elke render (`setRulesCountry`, dat nu `setLearnerCountry` aanroept). Werkregels en Taal
lezen hetzelfde land. `taalBeActive()` = in België én de schakelaar aan.

### De id's

Een Belgisch item heeft het id van zijn Nederlandse tweeling met **`be.`** ervoor
(`src/content/taalBe/ids.ts`):

| | Nederland | België |
|---|---|---|
| unit | `u.society` | `be.u.society` |
| les | `l.council` | `be.l.council` |
| woord, zin, gesprek | `w.stemmen`, `s.council.1`, `c.council.q` | `be.w.stemmen`, `be.s.council.1`, `be.c.council.q` |
| tip (en .b, .p, .s, .o1–3, .w) | `c.council` | `be.c.council` |
| herhaalles | `l.society.mix` | `be.l.society.mix` |

Daardoor raken voortgang (`completed`), certificaten (`certs`), Herhaal vandaag (`cards`),
opnames, vertalingen, de check en de kaart niet in de war: een Belgisch item is een ander item.
`nlId()` (Werkregels) haalt nu ook `be.` weg, dus thema's, sectoren, de route en coachlinks
vinden de Nederlandse tweeling van beide sporen op dezelfde manier. `r.be.` (Werkregels) en `be.`
(Taal) botsen nooit.

### Drie soorten verschil, drie patronen

1. **C: een unit helemaal nieuw** (`unit` in het bestand). Dezelfde lessen in dezelfde volgorde,
   alles met `be.`-ids, zonder herhaalles (de cursus maakt die). Helpers: `beLesson`, `beUnit`,
   `beTip` in `src/content/taalBe/helpers.ts`. Voorbeeld: `units/society.ts`.
2. **B: alleen de regels die anders zijn** (`lines`). Per Nederlands id van een woord, zin of
   gesprekregel: de Vlaamse tekst (`nl`), het Engels (`en`), zo nodig `emoji`, `alt` of
   `picture: 'same'` (zelfde ding, ander woord: de refter = de kantine, zelfde tekening). In de
   Belgische cursus speelt die regel met id `be.<id>`; de les en de unit houden hun Nederlandse
   id. Plus een Belgische **tip** (`tips`, id `be.c.<slug>`, `lessonId` = de Nederlandse les).
   Voorbeeld: `units/online.ts`.

   Waarom zo: dit is het kleinste patroon dat eerlijk werkt. De les telt in beide landen (ze leert
   op één woord na hetzelfde), maar het veranderde woord is een ander item: een eigen kaart in
   Herhaal vandaag, een eigen vertaling (`be.<id>`), een eigen opname. Een "override" van alleen de
   tekst met hetzelfde id zou de vertaling en de opname van het Nederlandse woord laten zien.
   Een tip wordt altijd als geheel vervangen (alle sleutels `be.`): titel en tekst hangen aan het
   tip-id, en een halve vertaling zou niet kloppen.
3. **De slotregel** (vanzelf). 31 tips eindigen met "General information. For your situation: ask
   your employer, the union or the Juridisch Loket." of "… the Juridisch Loket or FairWork." In
   de Belgische cursus wordt alleen die zin vervangen door de Belgische (justitiehuis, Payoke),
   in het Engels en in de hulptaal (`src/lib/tipText.ts`, de Nederlandse en Belgische regel per
   taal in `src/i18n/be/base.ts`). Een tip waarvan dat het enige verschil is, is **A**. Een test
   controleert dat elke vertaling de bekende slotregel heeft.

### De cursus per land

- `beTaalCourse(units)` (`src/content/taalBe/index.ts`) bouwt de Belgische cursus uit de
  Nederlandse: een C-unit op de plaats van zijn tweeling, B-regels in hun les, elke andere unit
  **hetzelfde object**. Een veranderde unit krijgt opnieuw een herhaalles.
- `taalCourseUnits()` (curriculum.ts) geeft de cursus van het land; `courseUnits('taal')` volgt.
  Zo volgen de route (`coursePlan`), "Alle onderwerpen", de thema's, de certificaten, de
  begeleiderskaart en de check vanzelf.
- Opzoeken op id (`findLesson`, `findCourseUnit`, `unitOfLesson`) kijkt in beide landen: een
  back-up houdt Belgische lessen, en een Belgische les blijft vindbaar na een wissel van land.
- **Tips**: `tipForLesson` geeft in België eerst de Belgische tip; `taalTips()` (de pagina "Zo
  werkt het hier") zet de Belgische tip op de plaats van de Nederlandse.
- **Herhaal vandaag** (`src/lib/spaced.ts`): de woordenindex kent de Belgische woorden; in
  België komen alleen de woorden van de Belgische cursus (en de regio's) terug, in Nederland geen
  `be.`-woorden. Zinnen bij een Belgisch woord komen uit de Belgische les.
- **De toets** (`src/lib/toets.ts` `inCountry`): een item dat in België anders gezegd wordt,
  speelt zijn Belgische regel (de items en hun ids blijven gelijk, dus de twee momenten zijn te
  vergelijken). Nu nog niet van toepassing: `c.payslip.q`, `w.bedrijfsarts` en `w.kantine` zitten
  in units die nog moeten (u.pay, u.leave, u.firstday).
- **"Wat kun je nu?"**: een Belgische Taal-unit krijgt de zinnen van zijn tweeling.
- **Plaatjes**: `WordPicture` zoekt via `pictureIdOf` (alleen bij `picture: 'same'`).
- **Opnames**: de app zoekt een opname op tekst. `scripts/list-clips.ts` neemt de Belgische
  regels op in `clips.json` (een regel met dezelfde tekst als een Nederlandse niet nog eens).
  Tot de opnameronde leest de telefoon ze voor.

### "Dit gaat over Nederland. In België is het anders."

ui `beNlOnly` (13 talen, Engels, en Nederlands in `nl.ts`), getoond door `BeNote`
(`src/components/BeNote.tsx`): een rustige regel, nooit een knop (Max-3 verandert niet).

- **Les**: onder de titel op het lespad (thuis en op de onderwerppagina) en bovenaan de eerste
  stap van de les, als de items of de tip van die les B of C zijn (`lessonNlOnly`).
- **Tip**: op de tipkaart in de les en op de pagina "Zo werkt het hier" (`tipNlOnly`).
- **Unit**: onder de titel als de hele unit over Nederland gaat (C: `unitNlOnly`).
- **Thema**: met de schakelaar uit heet het thema "Life in the Netherlands" en staat de regel
  eronder. Met de schakelaar aan heet het **"Leven in België"** / "Life in Belgium" (gloss
  `be.theme.life`, 13 talen); Werkregels houdt zijn eigen naam.

De regel hangt alleen af van het land en de inventaris: hij werkt ook met de schakelaar uit. Met
de schakelaar aan verdwijnt hij bij een unit zodra haar Belgische bestand geschreven is.

### De schakelaar uit

Dan verandert er in België niets aan de cursus, de tips, de toets en Herhaal vandaag; alleen de
markeerregel verschijnt (en het thema houdt zijn naam, met de regel). Twee bewuste
uitzonderingen volgen alleen het land, net als bij Werkregels: de **Hulp-tab** (Belgische rijen:
112, justitiehuis, Toezicht op de Sociale Wetten, Payoke/PAG-ASA/Sürya, vakbond; `workContacts`
in Screens.tsx, `helpRowsFor`). De **slotregel** volgt wel de schakelaar: die hoort bij de cursus.

### Vertalingen

- `src/i18n/be/base.ts`: de gedeelde teksten per taal (ui-sleutels `beNlOnly`, `beTaalBeta`,
  `who…Be`; gloss `be.theme.life` en de slotregels).
- `src/i18n/be/units/<slug>.ts`: één bestand per B/C-unit, met per taal een eigen export
  (`export const de: Gloss = { 'be.c.council': … }`). Zo neemt elk taalpakket alleen zijn eigen
  taal mee.
- `src/i18n/be/<taal>.ts` voegt ze samen (al klaar, niet aanraken); `LanguagePack.be`.
- `tests/i18n.test.ts` eist elke `be.`-sleutel in alle 13 talen (`beTaalIds()`), en geen losse.

---

## 2. Werkwijze per unit (voor een inhoudsagent)

1. **Lees** de Nederlandse unit (curriculum.ts of work.ts), haar tips (culture.ts of work.ts), de
   regel van de unit in `src/content/taalBe/inventory.ts` en in de inventaris (hieronder), en de
   voorbeelden `units/society.ts` (C) en `units/online.ts` (B).
2. **Schrijf** `src/content/taalBe/units/<slug>.ts`: vervang `export const be: BeTaal | undefined
   = undefined;` door een `BeTaal`:
   - **B**: `lines` voor elke B-les (minstens één regel per les met items B), en een tip voor
     elke les met tip B of C. Een C-les in een B-unit (bijvoorbeeld l.contract) schrijf je als B:
     vervang de woorden, zinnen en het gesprekje die niet kloppen (alle zes woorden mag).
   - **C**: een hele `unit` (zie het C-voorbeeld).
   - Vlaamse woorden (tabel in werkregels-belgie.md, hoofdstuk 4), A2, geen euroteken, geen jaartal.
   - De beste optie van een tip is hoogstens 1,3 keer zo lang als de langste foute.
3. **⚖️ bij elk feit**, direct boven de tip of de les, met een bron (werk.belgie.be, rva.be,
   vlaanderen.be, VDAB, RIZIV, de ziekenfondsen, FOD Financiën, Federgon, de vakbonden). Elk getal
   uit een tip moet in een ⚖️-noot staan (test). Kun je een site niet openen? Zeg dat, met de datum.
4. **Vertaal** in `src/i18n/be/units/<slug>.ts`: elke `be.`-sleutel in 13 talen, met `// nieuw,
   nalezen`; in talen met geslacht een `{ m, f, x }` waar het nodig is, of een vorm zonder geslacht.
   Een Nederlandse vertaling kan het begin zijn (zo is online.ts gemaakt: DigiD → itsme).
5. **Haal je unit uit `BE_TAAL_TODO`**, alleen in je eigen blok.
6. **Draai**:
   ```sh
   npx tsc -b
   npx vitest run tests/taalBe.test.ts tests/i18n.test.ts
   npx vitest run --exclude '.claude/**' --exclude 'node_modules/**'
   ```
7. **Commit** per unit. Niet pushen. `updates.ts` nog niet.

Open punt voor agent B: "Wat kun je nu?" van u.pay zegt "loonstrook". Voeg dan een Belgische zin toe
zoals Werkregels (`kun` en `addKunBe`) of vraag de basis om het veld `kun` in `BeTaal`.

---

## 3. De inventaris in het kort

Volledig: `src/content/taalBe/inventory.ts` (en het overzicht met per les een reden, de woorden
met plaatje of opname en de opnames die nodig zijn: `be-taal-inventaris.md` uit de basis-sessie).

| | A | B | C |
|---|---|---|---|
| Units (40) | 13 | 26 | 1 |
| Lessen, items (102) | 69 | 22 | 11 |
| Tips (99) | 54 | 26 | 19 |

*Bijgewerkt 31 oktober 2026 (inhoudsronde 2), geteld uit `inventory.ts`: de tips van l.review (de mentor),
l.respect en l.boundaries (de preventieadviseur psychosociale aspecten) zijn nu B, en u.social is een
B-unit. Vier A-tips zeggen nu "here" in plaats van "Dutch" (c.ask, c.cv, c.interview, c.easy), zodat
ze in beide landen kloppen.*

- A-units: Hulp vragen, Klanken, Solliciteren, Bellen en appen, Op de bouw,
  In de productie, In de zorg, In de horeca, Schoonmaken, Rekenen, Je werk afronden, In de
  werkplaats, In de garage.
- C-unit: Meedoen in Nederland → **Meedoen in België** (af).
- **Rechten**: van de 33 rechten-tips verschillen er 24 per land (9 B, 15 C); 18 lessen hebben
  rechten-woorden of -zinnen die in België anders zijn (5 C, 13 B).
- **Toets**: 3 items (loonstrook, bedrijfsarts, kantine). **Wat kun je nu?**: 3 zinnen (loonstrook → loonbrief, pinnen → met de kaart betalen, beter
  melden → zeggen dat ik weer kan werken).
- **Begeleiders**: de pagina "Voor begeleiders en werkgevers" en de begeleiderskaart tonen in België de
  Belgische titels ("Meedoen in België") en zinnen (`kunOnderwerpenNu`, tests/coachesBe.test.ts).

---

## 4. Verdeling over de inhoudsagents

Vier agents, elk een blok in `BE_TAAL_TODO` en eigen bestanden
(`src/content/taalBe/units/<slug>.ts` en `src/i18n/be/units/<slug>.ts`). Het gewicht telt een
B-les 1, een C-les 3, een B-tip 1, een C-tip 2.

| Agent | Units | Werk | Gewicht |
|---|---|---|---|
| A · werk en contract | contract, stage, grow | items 4 B + 3 C, tips 2 B + 5 C (proeftijd, interim, zelfstandige, inburgering, stageovereenkomst, duaal leren, NARIC) | 25 |
| B · loon, papieren en geld | pay, papers, money, data, ai | items 4 B + 2 C, tips 3 B + 5 C (loonbrief, RSZ, vakantiegeld, rijksregisternummer, itsme, ziekenfonds, MyMinfin, Groeipakket) + de zin van "Wat kun je nu?" | 23 |
| C · rechten, ziek en werk kwijt | rights, leave, lost, exploit | items 7 B + 2 C, tips 4 B + 5 C (Welzijnswet, Arbeidswet, opzeg, C4, RVA, VDAB, gewaarborgd loon, arbeidsarts, TSW, Payoke) | 27 |
| D · gezondheid, reizen, de eerste dagen | health, travel, firstday, tools, safety, warehouse, time, teamwork, house, sayings, shop, kas | items 5 B + 2 C, tips 12 B + 2 C (ziekenfonds, 1733, De Lijn en NMBS, refter, Huis van het Nederlands, EHBO, "u", Vlaamse directheid, alcohol vanaf 16, PC 145) | 27 |

Agent B en C delen woorden (loonbrief, ziekenfonds): gebruik de tabel in werkregels-belgie.md,
hoofdstuk 4, dan schrijven ze het hetzelfde. Als alles af is: `BE_TAAL_TODO` is leeg, een
expert kijkt de ⚖️ na, en dan pas gaat de bètaregel weg en komt er een regel in `updates.ts`.
