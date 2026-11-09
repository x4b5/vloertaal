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

## Nog te doen

- **Fase 1: hulptaal los van inhoud.** De hulptaal wordt een gewone instelling, met "geen". Het
  lespad leest de soort les uit de onderwerpen. Regellessen speelbaar met elke hulptaal (eerst in het
  Nederlands, met stem), één herhaling voor woorden en regels, de brug van 80% wordt geleidelijk.
  Opgeslagen `helpLang: 'nl'` wordt "geen hulptaal". Het spoor zit op ongeveer 150 plekken in 40
  bestanden (`trackOf`, `isRules`, `dutchUi`, `=== 'regels'`).
- **De kaart toont wat telt**: gezegd op het werk (Gelukt), nog lastig, en een korte check per
  onderwerp over rechten, ook in Werkregels.
- **Fase 2, na de juridische controle**: regelkaart en Onthoud-zin in de hulptalen, eerst Pools,
  Roemeens en Bulgaars, te beginnen bij de lessen voor wie uit een ander land komt.
- **Eerst testen**: de start met vijf Nederlandstalige Entree-studenten en vijf taalleerders.
