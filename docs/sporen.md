# Taal en Werkregels: van twee sporen naar één app

De kritische review van 9 november 2026 staat in de pagina "Kritische review Vloertaal" (artifact).
Hier staat wat daaruit gedaan is, en wat nog komt.

## Het probleem in één zin

De keuze van de hulptaal beslist nu ook welke lessen je krijgt (`src/lib/track.ts`: hulptaal `nl`
is Werkregels). Daardoor kan een kandidaat niet taal én werk leren, staan de lessen voor
arbeidsmigranten (A1, U2, wonen via het bureau) alleen in het Nederlands, en moet een begeleider per
kandidaat weten welk spoor die volgt.

## Gedaan: fase 0 (9 november 2026, zonder het model te veranderen)

- **"Ik spreek al Nederlands" bovenaan** op een telefoon die Nederlands voorop zet
  (`src/lib/langGuess.ts` `dutchFirst`): meteen de talenlijst, met die kaart bovenaan in plaats van
  onderaan. Eerst was dit de vraag "Spreek je Nederlands?", maar die kan juist wie geen Nederlands
  leest niet lezen (de eigenaar, 9 november). Elke taal staat in het eigen schrift: zo vindt
  iedereen de eigen taal. `vloertaal.nl/?taal=nl` zet de kaart ook bovenaan.
- **"Naar Werkregels?"**: wie vanuit Taal wisselt, ziet eerst wat er verandert (Instellingen, pagina
  `switch`): alles Nederlands, hulptaal uit, regels herhalen in plaats van woorden, voortgang blijft.
- **Werkregels met een sector** begint bij "Je eerste dag"; "Werk zoeken" komt na "Samenwerken"
  (`src/content/sectors.ts` `rulesPlan`). "Weet ik nog niet" blijft beginnen bij "Werk zoeken".
- **Onderwerplinks werken in beide sporen** (`src/content/trackTwins.ts`): `?unit=pay` opent bij
  een Werkregels-leerling "Loon en loonstrook", `?unit=r.loon` bij een Taal-leerling "Loon".
- **Voor de begeleider**: "In drie stappen" bovenaan de begeleiderspagina (app en site, `COACH_STEPS`
  in `src/content/pro.ts`); de oproep om mee te kijken staat bij "Meedoen of meedenken?". Op Hulp
  staat "Voor je begeleider" (de kaart in één tik). Er is een briefje in het Nederlands
  (`/briefje/nl/`, naar `/werkregels/`).
- **Kleine dingen**: de Werkregels-kaart onder de talen heeft een contract in plaats van de
  Nederlandse vlag; de landvraag in Taal zegt "de woorden en tips van dat land".

## Gebouwd: fase 1 en 2, achter de schakelaar "Eén app" (10 november 2026)

Alles hieronder staat **uit** op vloertaal.nl (`ONE_APP_LIVE = false` in `src/lib/oneApp.ts`), omdat
de pilot loopt en de vertaalde regels nog niet juridisch zijn nagekeken. Aanzetten voor één telefoon:
open `vloertaal.nl/?nieuw=1` (blijft bewaard op die telefoon); uitzetten met `?nieuw=0`. Voor
iedereen aanzetten: zet `ONE_APP_LIVE` op `true`, en zet dan een regel in het logboek
(`src/content/updates.ts`), bijvoorbeeld de tekst onderaan deze pagina.

**Fase 1: hulptaal los van inhoud**
- **Zo werkt het hier bij elk Taal-onderwerp** (`Route.tsx` `RulesTwinLessons`): onder de taallessen
  staan de lessen van het tweeling-onderwerp uit Werkregels (`src/content/trackTwins.ts`), in
  eenvoudig Nederlands met stem. Een Taal-leerling speelt ze zonder van spoor te wisselen; het eigen
  lespad schuift niet mee. Het Nederlandse pakket (met de regellessen) laadt dan op de achtergrond.
- **Eén herhaling** (`src/lib/oneReview.ts`): "Herhaal vandaag" brengt na de woorden ook hooguit 3
  regelvragen terug van de regellessen die de leerling deed.
- **Hulptaal is één rij** in Instellingen › Taal en ik, ook in Werkregels; de vraag "Wat wil je
  leren?" is weg. De laatste keuze van de lijst is "Geen: ik spreek Nederlands" (intern nog steeds
  `helpLang: 'nl'`, dus geen omzetting van opgeslagen voortgang nodig). Vanuit Taal komt eerst
  "Naar Werkregels?" met wat er verandert.
- **Het aanbod bij 80%** leidt naar een onderwerp met Zo werkt het hier, niet naar een wissel.
- **De begeleiderskaart** toont ook: gezegd op het werk (Gelukt), nog lastig (woorden die na een
  herhaling nog in het eerste vak zitten, `hardWords` in `src/lib/kaart.ts`) en het aantal lessen
  Zo werkt het hier. De leerling ziet de kaart nog steeds eerst zelf.

**Fase 2: de regels in de eigen taal**
- De titel van elke regelkaart en elke Onthoud-zin van de Nederlandse cursus (90 zinnen) in het
  **Pools, Roemeens en Bulgaars** (`src/i18n/regelHulp/`), onder het Nederlands. Met AI vertaald en
  met een terugvertaling gecontroleerd; **nog niet** door een moedertaalspreker of jurist.
- Opgezocht via de Nederlandse zin: verandert die, dan valt de vertaling weg tot hij opnieuw is
  vertaald (`tests/oneApp.test.ts` zegt welke).
- Punten om na te kijken die de vertalers zelf noemden: "Haast en een knop?" (onduidelijk zonder
  context), "Uit als het mag, dicht als het kan", "WW meenemen?" (naar een ander land),
  "cliënt" in de zorg, "zorg" in het cv (mantelzorg of betaalde zorg), "ontslag" (ook zelf
  opzeggen), "Op het werk zeg je meestal "je"".

**Logboekregel voor als het aangaat** (concept): "Bij elk onderwerp staat nu ook *Zo werkt het hier*:
de regels van het werk, in eenvoudig Nederlands, met voorlezen. In het Pools, Roemeens en Bulgaars
staat de kern ook in je eigen taal. Je hulptaal kies je bij Instellingen › Taal en ik; wie al
Nederlands spreekt, kiest daar *Geen*."

## Nog te doen

- **Voor het aanzetten**: de test met vijf Nederlandstalige Entree-studenten en vijf taalleerders,
  met `?nieuw=1`; de juridische check van de regels (`docs/juridische-check.md`); de vertalingen
  laten nalezen door moedertaalsprekers.
- **Meer talen** voor fase 2 (Arabisch, Oekraïens, Turks, Tigrinya …) en de Belgische cursus
  (`r.be.*`), die nog geen vertaalde regels heeft.
- **De korte check per onderwerp over rechten** op de kaart (de vijf vragen van "Ik ken dit al"
  bestaan al; nog niet voor Werkregels).
- **Opruimen na het aanzetten**: het spoor zit nog op ongeveer 150 plekken in de code (`trackOf`,
  `isRules`, `dutchUi`, `=== 'regels'`); met de schakelaar aan blijft dat werken, maar één model is
  eenvoudiger te onderhouden.
