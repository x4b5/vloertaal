# Werkregels voor België (Vlaanderen)

*30 oktober 2026. De basis staat (branch `be/basis`): het mechanisme, de tests en één volledige
voorbeeld-unit (`loon`). De andere units schrijven de content-agents, elk in eigen bestanden.
Achtergrond en het oordeel per les: [`belgie-vlaanderen-plan.md`](belgie-vlaanderen-plan.md).*

**Stand van nu (31 oktober 2026): het Belgische spoor staat live, als bèta** (`BE_RULES_LIVE =
true` in `src/content/regels/be/live.ts`, de keuze van de eigenaar). Een leerling in België krijgt
dus de Belgische lessen. Een deskundige heeft de ⚖️-feiten nog **niet** nagekeken: daarom staat de
bètaregel bovenaan (`RULES_BETA`) en zegt "Goed om te weten" dat de lessen nog niet zijn nagekeken.
Dat nakijken loopt nu ([`nakijken.md`](nakijken.md)), met voorrang voor ontslag, ziek, loon en
uitbuiting. Zet `BE_RULES_LIVE = false` als je het spoor weer uit wilt: dan ziet een leerling in
België het Nederlandse spoor, met de Belgische hulp. Tests gebruiken `setBeRules(true)`; in
ontwikkeling zet `?be=1` het aan.

---

## 1. Het mechanisme

### De id's

Een Belgische unit, les of stap heeft het id van de Nederlandse tweeling, met `r.be.` in plaats
van `r.` (`src/content/regels/be/ids.ts`):

| | Nederland | België |
|---|---|---|
| unit | `r.loon` | `r.be.loon` |
| les | `r.l.loon.2` | `r.be.l.loon.2` |
| stap | `r.l.loon.2.ps1` | `r.be.l.loon.2.ps1` |

Waarom een prefix, en waarom zo:

- Het id begint nog steeds met `r.`. Alles wat het spoor herkent aan `r.` (`trackOfId`, links,
  offline, de kaart) blijft werken.
- Het id botst nooit met het Nederlandse. Voortgang (`completed`), certificaten (`certs`),
  Herhaal vandaag (`cards`), zegHet en de adviesregel houden de twee landen dus vanzelf apart.
- `nlId()` en `beId()` zetten een id in één stap om. Wat per Nederlandse unit is vastgelegd
  (thema's, sectoren, regio-plek, coachlinks, "Wat kun je nu?"), vindt zo ook de Belgische unit.
  Die plekken gebruiken `nlId(u.id)`: `themes.ts`, `sectors.ts`, `route.ts`, `access.ts`,
  `regio/index.ts`.

### Keuze op land

- `src/content/rulesCourse.ts` houdt twee cursussen: de Nederlandse en de Belgische.
  `registerRulesCourse(nl, be)` zet ze klaar (`src/i18n/packs/nl.ts`).
- `App.tsx` roept bij elke render `setRulesCountry(progress.country)` aan. Daarna geeft
  `courseUnits('regels')` de cursus van het land: `'be'` geeft de Belgische cursus (als die aan
  staat), `'nl'` of geen land geeft de Nederlandse.
- Alles wat `courseUnits('regels')` leest, volgt dus het land: de route, de thema's, "Kies een
  onderwerp", de certificaten, Herhaal vandaag, het spiekkaartje (`pocket.ts`), de kaart voor de
  begeleider (`kaart.ts`) en offline.
- Het certificaat en de kaart zeggen "Werken in België" bij een Belgische unit.
- De Hulp-tab, "Goed om te weten" en de regel boven het lespad krijgen hun Belgische versie
  (`RULES_NOTICE_BE`, `RULES_DISCLAIMER_BE`, `RULES_PATH_NOTE_BE_PART` en `RULES_PATH_NOTE_BE_OWN`).
- Een coachlink `?unit=r.loon` landt bij een leerling in België op `r.be.loon`, en omgekeerd
  (`rulesTwinHere`).

### Voortgang bij een wissel van land

**Aparte voortgang per land.** Een Belgische les heeft een eigen id, dus wat je in Nederland
deed, telt niet voor België, en omgekeerd. Niets gaat verloren. Wissel je terug, dan staat je oude
voortgang er nog: lessen, certificaten en Herhaal vandaag. Een back-up bewaart de lessen van
beide landen (`knownLessonId` → `isRulesLessonAnyCountry`).

Dat is eerlijk: een certificaat "Loon en loonbrief" zegt dat je de Belgische regels kent. De
Nederlandse les leert andere regels.

Eén gevolg: een Nederlandse les die de Belgische cursus leende (zie hierna) heeft het
Nederlandse id. Komt later de Belgische versie, dan begint de leerling daar opnieuw.

### Een unit die nog niet in het Belgisch bestaat

In de Belgische cursus staat dan de Nederlandse unit, met de Nederlandse id's, op dezelfde plek.
Elke les krijgt bovenaan de regel **"Deze les gaat nog over Nederland."**
(`RULES_NL_LESSON_NOTE`, via `lesson.rule.note`). Die staat in de route onder het leerdoel en in
de les op de eerste stap. De regel boven het lespad zegt dan ook: "sommige lessen nog van
Nederland".

### Sectorunits en de regio

- **Sectorunits** krijgen elk een eigen Belgisch bestand: `be/units/sector-<naam>.ts`, zoals
  `sector-build.ts` (`r.be.build`). Ze komen op de plek van hun Nederlandse tweeling, dus na
  "Veilig werken".
- **Zuid-Limburg** blijft Nederlands. Het is een regio in Nederland (wonen of werken bij de grens,
  vanuit Nederland gezien). De regio-unit komt na `r.geld`, of na `r.be.geld` in de Belgische
  cursus. Een Belgische regio (bijvoorbeeld Limburg in België) is later een eigen regio in
  `src/content/regio`.

### Gedeelde tabellen

Een content-agent schrijft **alleen in zijn eigen unitbestanden**. Alles wat per unit nodig is,
staat in dat ene bestand (het type `BeUnit` in `src/content/regels/be/types.ts`):

| Veld | Wat | Waar het heen gaat |
|---|---|---|
| `unit` | de unit zelf, zelfde vorm als een Nederlandse | de Belgische cursus |
| `zegHet` | twee foute zinnen per "Zo zeg je het" | `addZegHetBe` → `modelQuestion` |
| `advice` | de adviesregel per geschreven regel | `addRuleAdviceBe` → `ruleAdviceLine` |
| `kun` | "Wat kun je nu?" (2 of 3 zinnen, `1F`) | `addKunBe` → `kunJeNu`. Zonder `kun` gelden de Nederlandse zinnen |

`be/index.ts` importeert alle bestanden al en geeft de tabellen door. Een agent hoeft daar niets
te veranderen. Alleen zijn eigen regels in `BE_TODO` haalt hij weg.

De gedeelde tabellen met Belgische inhoud zijn al klaar:

- **askWho** (`askWho.ts`): de Belgische plekken `rva`, `hvw`, `ziekenfonds`, `vdab`,
  `interimkantoor`, `socsec` (sociaal secretariaat), `ocmw`, `justitiehuis`, `arbeidsarts` en
  `tsw` (Toezicht op de Sociale Wetten). `vakbond`, `hr`, `collega`, `leidinggevende`,
  `huisarts`, `politie`, `vertrouwenspersoon`, `school` enzovoort mag je ook gebruiken. In een
  Belgische stap tonen een paar daarvan een Belgische naam (`ASK_WHO_BE`): `hr` = "HR of de
  personeelsdienst", `gemeente` = "je adres en je papieren", `meldpunt` = "Unia",
  `bibliotheek` = "hulp met computer en itsme", `praktijkopleider` = "Je mentor".
  **Niet gebruiken** in België (test): `uwv`, `juridischloket`, `uitzendbureau`,
  `arbeidsinspectie`, `bedrijfsarts`, `woningcorporatie`.
  Mis je een plek, zoals Unia apart of de preventieadviseur? Vraag het aan de basis. Voeg hem
  niet zelf toe: dan veranderen vier agents één bestand.
- **disclaimer.ts**: `RULES_ADVICE_BE` ('advice'), `RULES_ABUSE_BE` ('abuse': discriminatie,
  grensoverschrijdend gedrag, uitbuiting, ontslag), `RULES_CIVIC_BE` ('civic': regels van de
  staat). Er is geen 'border' in België.
- **help.ts**: `HELP_ROWS_BE` bestond al (de Hulp-tab).
- **payslip**: de kaart heet in een Belgische stap vanzelf "Loonbrief". Er zijn velden `rsz`,
  `voorheffing` en `maaltijdcheques` bij gekomen.

### Clips

De zinnen van Werkregels hebben **geen opgenomen clips**: de telefoon leest ze voor
(`scripts/list-clips.ts` neemt alleen het spoor Taal op). Er hoeft dus niets in
`PENDING_RECORDING`. Let wel op bij "Zo zeg je het": een zin die bijna gelijk is aan een clip,
moet precies zo gespeld zijn (`tests/rulesContent.test.ts`, "model sentences and recorded clips").

---

## 2. Werkwijze voor een content-agent

Per unit:

1. **Lees** de Nederlandse unit (`src/content/regels/units/<naam>.ts`), het oordeel per les in
   `belgie-vlaanderen-plan.md` (hoofdstuk 1), en het voorbeeld `src/content/regels/be/units/loon.ts`.
2. **Schrijf** `src/content/regels/be/units/<naam>.ts` (een sector: `sector-<naam>.ts`). Vervang
   `export const be: BeUnit | undefined = undefined;` door een `BeUnit`:
   - id's met `r.be.` (zie boven); dezelfde lessen in dezelfde volgorde; een les erbij mag aan
     het eind, minder lessen mag niet;
   - elke les: scene → één regel → minstens 2 vragen → "Zo zeg je het" (zoals in Nederland);
   - `remember` is gelijk aan de titel van de regel;
   - `help` en de beste `who` van een "Wie vraag je het?" komen uit Belgische plekken;
   - `zegHet` voor elke model-stap, `advice` voor elke geschreven regel, en zo nodig `kun`;
   - een `key: true`-regel per unit als de Nederlandse er een heeft (het spiekkaartje).
3. **⚖️ bij elk feit.** Zet `// ⚖️ check: <feit> (<bron>)` direct boven de stap. Bij een getal
   of bedrag: "bijgewerkt oktober 2026" erbij. Elk getal uit een regel of een `why` moet in een
   ⚖️-noot staan (test). Een loonbrief of kaartje met rekenwerk is een voorbeeld: noteer de som
   in een `// Redactie:`-noot. Kun je een site niet openen? Schrijf dat in de noot, met de datum.
   Twijfel je? Laat het getal weg en zeg het verschil in woorden.
4. **Haal je unit uit `BE_TODO`** (`src/content/regels/be/index.ts`), alleen in je eigen blok.
5. **Draai:**
   ```sh
   npm run taal -- be/          # A2-controle van de Belgische units (0 meldingen is het doel)
   npx tsc -b
   npx vitest run tests/rulesBe.test.ts
   npx vitest run --exclude '.claude/**' --exclude 'node_modules/**'
   ```
6. **Commit** per unit. Niet pushen. `updates.ts` nog niet aanraken.

De huisregels uit de brief gelden: A2 (zinnen van hoogstens 12 woorden, geen lijdende vorm,
moeilijke woorden uitleggen, geloofwaardige foute opties), een bescheiden toon, geen juridisch
advies. Geen euroteken en geen jaartal in de tekst (wel in de ⚖️-noot). Namen uit de bestaande
lessen (Fatima, Piotr, Nadia, Malik …), nooit "Ali".

`tests/rulesBe.test.ts` controleert: de vorm, de id's, de Belgische plekken, geen Nederlandse
woorden (loonstrook, uitzendbureau, UWV, DigiD, cao …), zegHet, advice, de ⚖️-noten, de
loonbrief-som, `BE_TODO`, en de keuze per land in de route, op het certificaat en in Herhaal
vandaag.

Over "cao": dat woord bestaat ook in België. De test weert het, omdat leerlingen in Vlaanderen
meestal over "de afspraken van je sector" of "je paritair comité" horen. Is "cao" echt nodig? Leg
het dan uit, en vraag de basis om de test aan te passen.

---

## 3. Alle units: de grote verschillen

Op hoofdlijnen. Details en bronnen per les: `belgie-vlaanderen-plan.md`, hoofdstuk 1 en 5.
Elk punt is nog ⚖️: de bronnen zijn vooral zoekresultaten. werk.belgie.be en hetacv.be waren in
deze sessies niet te openen.

| Unit | Nederland | België (Vlaanderen) | Bronnen |
|---|---|---|---|
| zoeken | werk.nl, uitzendbureau, Juridisch Loket | VDAB, interimkantoor (geen kosten voor de werkzoekende), Unia bij discriminatie, cao nr. 38 | vdab.be, unia.be, werk.belgie.be |
| start | BSN, "je" tegen de baas | rijksregisternummer, eID, vaker "u" | ibz.rrn.fgov.be, vlaanderen.be |
| afronden | | geldt ook | |
| contract | BW, proeftijd, ketenregeling, oproepcontract, zzp | Arbeidsovereenkomstenwet 1978, geen proeftijd (eenheidsstatuut), interim met dagcontracten, variabel uurrooster, zelfstandige (KBO), duaal leren | werk.belgie.be, federgon.be |
| stage | POK, SBB, bpv-begeleider | stageovereenkomst, overeenkomst alternerende opleiding, mentor, CLB | vlaanderen.be/duaal-leren, syntra.be |
| **loon** ✅ | loonstrook, loonheffing, 8% vakantiegeld | loonbrief, RSZ 13,07% en bedrijfsvoorheffing, paritair comité en barema, maaltijdcheques, vakantiegeld via werkgever (bediende) of vakantiekas (arbeider), eindejaarspremie, overuren +50/100% | securex.be, hetacv.be, partena-professional.be, socialsecurity.be |
| rekenen | som met 8% vakantiegeld | andere som (bijvoorbeeld overloon), uurrooster | werk.belgie.be |
| tijd | Arbeidstijdenwet, 12 uur, pauze na 5,5 uur | Arbeidswet 1971, 8 uur/38 uur, pauze na 6 uur (15 min), klein verlet, verlof om dwingende redenen, tijdskrediet | werk.belgie.be, rva.be |
| winkel | alcohol en tabak vanaf 18 | bier en wijn vanaf 16, sterke drank en tabak vanaf 18 | health.belgium.be |
| ziek | 2 jaar 70%, bedrijfsarts | gewaarborgd loon, daarna het ziekenfonds, doktersattest, arbeidsarts, controlearts | riziv.fgov.be, werk.belgie.be |
| veilig | Arbowet, Arbeidsinspectie | Welzijnswet en codex, Toezicht op het Welzijn op het Werk, arbeidsongevallenverzekeraar, preventieadviseur | werk.belgie.be, fedris.be |
| samen | direct zeggen is normaal | Vlamingen zijn vaak minder direct (gewoonte, laten nakijken) | Vlaamse NT2-docent |
| rechten | College voor de Rechten van de Mens, FairWork, ontslag via UWV | Unia, Vlaams Mensenrechteninstituut, Payoke/PAG-ASA/Sürya, opzegtermijn of opzegvergoeding, cao nr. 109, C4 | unia.be, werk.belgie.be |
| geld | WW, UWV, bijstand, toeslagen, Belastingdienst | VDAB, uitkering via vakbond of HVW, RVA, C4, leefloon via OCMW, Groeipakket, MyMinfin, eBox, CAW | rva.be, hvw.fgov.be, mi-is.be, groeipakket.be, financien.belgium.be |
| digitaal | DigiD | itsme, eID met kaartlezer | itsme.be, vlaanderen.be |
| meedoen | Tweede Kamer, gemeente | federale staat, Vlaams Parlement, opkomstplicht (federaal), Grondwet art. 10 en 11, GAS-boete | belgium.be, vlaanderen.be |
| duurzaam | | geldt ook (VLAREMA) | ovam.be |
| schrijven | | geldt grotendeels; Vlaamse aanspreking en groet nakijken | Vlaamse NT2-docent |
| loopbaan | Entree, niveau 2, bbl | Vlaams onderwijs: duaal leren, volwassenenonderwijs, VDAB-opleiding, erkenning diploma (NARIC-Vlaanderen) | vlaanderen.be, vdab.be, naricvlaanderen.be |
| sector-build | VCA, valbeveiliging 2,5 m | VCA ook, valbeveiliging vaak vanaf 2 m | werk.belgie.be |
| sector-care | | geldt grotendeels; arbeidsarts | |
| sector-horeca | hygiënecode, NVWA | autocontrolegids, FAVV, PC 302, geregistreerde kassa | favv.be |
| sector-clean | | geldt ook; inspectie en arts anders | |
| sector-factory | 14 uur rust na nacht | meestal 11 uur rust, nacht- en ploegenpremie via PC | werk.belgie.be |
| sector-warehouse | | geldt ook; labels anders | |
| sector-kas | stukloon, cao Glastuinbouw | seizoensarbeid, PC 145 (tuinbouw), gelegenheidsarbeid | werk.belgie.be |
| sector-techniek | NEN 3140 | AREI (elektrische installaties), BA4/BA5 | economie.fgov.be |
| sector-werkplaats | | geldt grotendeels; PC 112 (garage) | werk.belgie.be |

---

## 4. Woorden: Nederland → Vlaanderen

Gebruik het Vlaamse woord in de Belgische units. Een woord dat een A2-leerling niet kent, leg je
de eerste keer uit in de les.

| Nederland | Vlaanderen |
|---|---|
| loonstrook | loonbrief (of loonafrekening) |
| jaaropgave | loonfiche |
| loonheffing | bedrijfsvoorheffing |
| premies (werknemer) | RSZ (sociale zekerheid) |
| inhouding | afhouding |
| bruto loon, netto loon | brutoloon, nettoloon |
| cao | afspraken van je sector, paritair comité (pc) |
| loonschaal | barema |
| vakantiegeld (8%) | vakantiegeld: enkel en dubbel (bediende) of via de vakantiekas (arbeider) |
| dertiende maand | eindejaarspremie |
| overwerk | overuren, overloon, inhaalrust |
| uitzendbureau | interimkantoor |
| uitzendkracht | interimkracht, uitzendkracht |
| rooster | uurrooster |
| proeftijd | (bestaat niet meer) |
| opzegtermijn | opzegtermijn, opzegvergoeding |
| ontslagbrief, WW-papieren | C4 |
| WW, UWV | werkloosheidsuitkering, RVA, uitbetaling via vakbond of HVW |
| werk.nl, UWV werkbedrijf | VDAB |
| bijstand, gemeente | leefloon, OCMW |
| zorgverzekeraar | ziekenfonds (mutualiteit) |
| bedrijfsarts | arbeidsarts |
| ziekmelding | ziekmelding, doktersattest (ziektebriefje) |
| Arbeidsinspectie | Toezicht op de Sociale Wetten, Toezicht op het Welzijn op het Werk |
| loonadministratie | personeelsdienst, sociaal secretariaat |
| Juridisch Loket | justitiehuis (juridische eerstelijnsbijstand) |
| FNV, CNV | ABVV, ACV, ACLVB |
| BSN | rijksregisternummer |
| DigiD | itsme, eID |
| Belastingdienst | FOD Financiën, MyMinfin |
| zzp'er | zelfstandige |
| bbl, leerwerkbaan | duaal leren |
| POK | stageovereenkomst |
| praktijkopleider | mentor |
| mbo | secundair onderwijs, volwassenenonderwijs |
| toeslagen | Groeipakket, huurpremie |
| pinnen | betalen met je kaart (Bancontact) |

---

## 5. Verdeling over de content-agents

Vier agents, elk een eigen blok in `BE_TODO` en eigen bestanden (ongeveer even veel regels):

| Agent | Units | Bestanden |
|---|---|---|
| A · werk vinden en contract | zoeken, start, afronden, contract, stage, loopbaan | `be/units/{zoeken,start,afronden,contract,stage,loopbaan}.ts` |
| B · tijd en geld | rekenen, tijd, winkel, geld | `be/units/{rekenen,tijd,winkel,geld}.ts` |
| C · ziek, veilig, rechten | ziek, veilig, rechten, samen, sector warehouse, factory, care | `be/units/{ziek,veilig,rechten,samen}.ts`, `be/units/sector-{warehouse,factory,care}.ts` |
| D · digitaal, burger, sectoren | digitaal, meedoen, duurzaam, schrijven, sector build, horeca, clean, kas, techniek, werkplaats | `be/units/{digitaal,meedoen,duurzaam,schrijven}.ts`, `be/units/sector-{build,horeca,clean,kas,techniek,werkplaats}.ts` |

Het plan was: `BE_TODO` is leeg, de deskundige kijkt de ⚖️ na, en dan pas `BE_RULES_LIVE = true`.
Het is anders gegaan: `BE_TODO` is leeg en het spoor staat sinds 31 oktober 2026 live als bèta,
**vóór** het nakijken (de keuze van de eigenaar, met een regel in `updates.ts`). Nog te doen: de
deskundige kijkt de ⚖️ na (daarna gaat de bètaregel weg), en de Belgische kant van de
websitepagina's (`/werkregels`, de professionalspagina). Die statische pagina's gaan nu nog alleen
over Nederland.
