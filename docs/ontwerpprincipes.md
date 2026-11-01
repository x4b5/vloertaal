# Ontwerpprincipes van Vloertaal

Vloertaal is voor mensen die werken en Nederlands leren. Ze hebben weinig tijd en een telefoon,
soms een oude. Voor sommigen is lezen moeilijk, of Nederlands hun derde of vierde taal. Elk
principe hieronder volgt uit die mensen. De pagina "Ontwerpprincipes Vloertaal" (artifact) laat
dezelfde principes in beeld zien.

## 1. Rust: één ding tegelijk

- **Hooguit 3 dingen om op te tikken per scherm.** Lijsten met één soort rij zijn de
  uitzondering. Controle: `scripts/max3/count.cjs`.
- **Wat aandacht vraagt, laat de rest zachter worden.** Laat het ene niet harder worden. Kies je
  een antwoord, dan stappen de andere antwoorden terug.
- **Zeg iets één keer.** Geen label dat de vraag herhaalt, geen "Goed zo!" naast een groen vinkje.
  Zie `docs/rustiger.md`.

## 2. Elke kleur heeft één taak

- **Geel** betekent "doe dit": Verder, de volgende les.
- **Blauw** betekent "luister".
- **Groen** betekent "goed", altijd met een vinkje. **Rood** betekent "nog niet", altijd met een kruis.
- **De rest** is warm zand en papier.
- **Randen:** de rand is zacht (`--edge`). De inktrand (`--edge-strong`) is alleen voor wat gekozen is,
  wat aan staat of wat focus heeft.
- **Contrast:** gecontroleerd in `tests/a11yScan.test.ts`.

## 3. Nederlands is het doel, de eigen taal de brug

- Nederlands staat voorop. De hulptaal staat erbij, als steun.
- Een Nederlandse zin is kort en komt van de werkvloer.
- Van rechts naar links (Arabisch, Farsi, Dari) werkt overal.
- Wie al Nederlands spreekt, kiest Werkregels: alles in het Nederlands.

## 4. Horen bij alles

- Bij elk Nederlands woord en elke zin staat een luidspreker.
- Opnames zijn AI-stemmen, en zo noemen we ze ook. We zeggen nooit "echte stemmen".
- Het uitspreken mag anders zijn dan het schrijven, als de stem anders verkeerd klinkt (`src/lib/sayAs.ts`).
- Spreken mag zonder microfoon: je kunt het altijd hardop zeggen en doorgaan.

## 5. Eigen tekeningen, geen emoji

- Alleen eigen SVG-tekeningen, in één stijl: plat, zonder lijnen eromheen, licht van linksboven.
  Zie `docs/tekenstijl.md`.
- Mensen zijn altijd de vaste personages: Bram, Amina, Henk en Jada.
- Een tekening moet te herkennen zijn op 48 px.

## 6. Fouten mogen

- Een fout geeft geen straf. Je ziet het goede antwoord, en het woord komt later terug.
- Kleur is nooit het enige teken: groen heeft een vinkje, rood een kruis.
- "Ik weet het niet" is een eerlijk antwoord. Gokken telt niet mee in de toets.

## 7. Bescheiden en eerlijk

- Geen superlatieven. Nooit "de beste", "de enige" of "uniek".
- Wat niet is nagekeken, zegt dat: "nog niet nagekeken door een expert". Nooit "experts kijken na".
- Regels en tips zijn algemene informatie, geen juridisch advies, en dat staat erbij.
- Nieuwe vertalingen zijn gemarkeerd om na te lezen (`// nieuw, nalezen`).

## 8. Privacy als standaard

- Geen account en geen cookies. Wat je leert, blijft op je telefoon.
- We tellen alleen anoniem, en dat kun je uitzetten. Bij "Do Not Track" telt de app niets.
- Elke nieuwe telling komt in de privacyverklaring (`src/lib/privacyPage.ts`, `docs/privacy.md`).

## 9. Voor iedereen, op je eigen tempo

- **Contrast:** tekst minstens 4,5:1, randen van knoppen minstens 3:1.
- **Tikken:** tikvlakken minstens 44 px.
- **Schermlezer:** alles werkt ermee.
- **Instellingen van de telefoon:** licht en donker, grote tekst en minder beweging volgen de telefoon.
- **Kort en offline:** de app werkt offline. Een les duurt een paar minuten, en je kunt altijd stoppen en later verder.
- **De reeks** is een steun, geen druk.
