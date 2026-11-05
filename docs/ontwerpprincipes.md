# Ontwerpprincipes van Vloertaal

Vloertaal is voor mensen die werken en Nederlands leren, en voor wie wil weten hoe werken in Nederland en België gaat. Ze hebben weinig tijd en een telefoon,
soms een oude. Voor sommigen is lezen moeilijk, of Nederlands hun derde of vierde taal. Elk
principe hieronder volgt uit die mensen. De pagina "Ontwerpprincipes Vloertaal" (artifact) laat
dezelfde principes in beeld zien.

## 1. Taal én werk: Vloertaal is een gespreksstarter

- Elke les koppelt Nederlands aan een situatie op het werk: de eerste dag, je loon, ziek melden,
  veiligheid, een collega iets vragen.
- **Geschreven en ongeschreven regels.** De app laat het verschil zien: "Wet of afspraak"
  (wet, cao, contract) en "Zo gaat het meestal" (je of u, een hand geven, vragen durven stellen).
- **Om over te praten.** De tips en regels zijn bedoeld om te bespreken:
  - met een collega ("Oefen samen");
  - met een docent, coach of werkgever (de voortgangskaart, de pagina voor begeleiders);
  - op de werkvloer zelf ("Probeer het vandaag op je werk", dan "Gelukt?").
- Voor wie al Nederlands spreekt is er Werkregels: dezelfde onderwerpen, alleen de regels.
- Het blijft algemene informatie. Voor je eigen situatie verwijst de app naar wie kan helpen.

## 2. Rust: één ding tegelijk

- **Hooguit 3 dingen om op te tikken per scherm.** Lijsten met één soort rij zijn de
  uitzondering. Controle: `scripts/max3/count.cjs`.
- **Op de begintab is de gele kaart de volgende stap.** De toets en "Gelukt?" staan als kleine
  regel onder de les, en alleen als er nog plek is binnen de 3.
- **Wat aandacht vraagt, laat de rest zachter worden.** Laat het ene niet harder worden. Kies je
  een antwoord, dan stappen de andere antwoorden terug.
- **Zeg iets één keer.** Geen label dat de vraag herhaalt, geen "Goed zo!" naast een groen vinkje.
  Zie `docs/rustiger.md`.

## 3. Verander het in het voorbeeld zelf

- Wat je aanpast, pas je aan op de plek waar je het ziet. Je ziet het effect meteen.
  Voorbeeld: de naam op het certificaat en op de kaart "Laat zien hoe het gaat". Tik op het
  potlood en typ op het certificaat of de kaart zelf; die volgt elke letter. Ook de eerste
  keer: er komt geen apart scherm meer dat eerst om je naam vraagt.
- Waar dat niet kan, toont de instelling meteen het effect. Een andere tekstgrootte of het
  donkere thema zie je direct, en een stem hoor je meteen.
- Bekend als *direct manipulation* (Shneiderman, 1983) en als "laat de status van het systeem
  zien" (Nielsen, heuristiek 1).

## 4. Elke kleur heeft één taak

- **Geel** betekent "doe dit": Verder, de volgende les.
- **Blauw** betekent "luister".
- **Groen** betekent "goed", altijd met een vinkje. **Rood** betekent "nog niet", altijd met een kruis.
- **De rest** is warm zand en papier.
- **Randen:** de rand is zacht (`--edge`). De inktrand (`--edge-strong`) is alleen voor wat gekozen is,
  wat aan staat of wat focus heeft.
- **Contrast:** gecontroleerd in `tests/a11yScan.test.ts`.

## 5. Leren zoals het geheugen werkt

Gebaseerd op wat onderzoek zegt over onthouden.

- **Zelf ophalen, niet herlezen.** Elke oefening laat je het antwoord zelf ophalen
  (*retrieval practice*; Roediger & Karpicke, 2006).
- **Gespreid herhalen.** "Herhaal vandaag" gebruikt een kaartenbak: een woord komt terug na 1,
  2, 4, 7, 14 en 30 dagen. Fout betekent morgen weer (`src/lib/spaced.ts`; spacing, Cepeda e.a.
  2006).
- **Eerst herhalen, dan iets nieuws.** Wachten er na de herhaling nog meer dan 15 woorden, dan is
  "Extra ronde" de eerste keuze en de nieuwe les de tweede. De les gaat niet op slot
  (`src/lib/pace.ts`, `REVIEW_FIRST_ABOVE`).
- **Van herkennen naar zelf maken.** Eerst kies je, dan bouw je, typ je en zeg je het zelf.
  Later zet je een woord vooraan en bouw je de hele zin.
- **Door elkaar.** Een les "Alles door elkaar" mengt eerdere onderwerpen. De winst daarvan zit
  vooral in spreiden en zelf ophalen; afwisselen (*interleaving*) helpt vooral bij dingen die op
  elkaar lijken, zoals klankparen. Bij losse woordenlijsten werkte blokken in onderzoek zelfs beter
  (Brunmair & Richter 2019).
- **Veel stemmen.** Losse woorden in de vragen zegt elke keer een andere collega, en elke dag komt
  één klankpaar terug op gehoor (man of maan?), in een andere stem: zo train je je oor
  (Barcroft & Sommers 2005; HVPT).
- **Durven vragen.** Eén op de drie dagen zegt een collega in "Herhaal vandaag" een zin die je
  kent op echte snelheid, zonder tekst: "Snap je het?". "Ja, oké." gaat meteen naar de betekenis;
  "Kunt u dat herhalen?" laat de zin eerst langzaam terugkomen. Vragen kost nooit punten
  (`src/lib/spaced.ts`, `snapLines`).
- **Laten merken dat het blijft.** Na de herhaling: "Woorden van 2 weken of langer geleden: je
  wist er nog 9 van de 10." Zelf merken dat iets lukt geeft het meeste zelfvertrouwen.
- **Eén keer voordoen.** Bij een nieuwe soort oefening wijst een hand één keer aan waar je tikt.
- **Beeld, geluid en tekst samen.** Elk woord heeft een tekening, een stem en de geschreven
  vorm (*dual coding*; Paivio).
- **Meteen feedback, en fouten komen terug** in dezelfde les, tot je het weet.
- **Naar het werk.** Een zin om vandaag op je werk te proberen, als als-dan-plan ("Als: …
  Zeg dan: …"), en de dag erna de vraag of het gelukt is (bij "Nog niet" nog één keer).
  Als-dan-plannen helpen om een voornemen echt uit te voeren (Gollwitzer & Sheeran 2006).
- **Eerlijk meten.** De toets "Wat ken je al?" haalt gokken uit de score en laat groei zien.

## 6. Spel als steun, niet als doel

Spelelementen helpen vooral om vol te houden. Dat ze het leren zelf verbeteren, is niet
aangetoond. Daarom steunen ze de gewoonte, en nooit ten koste van rust of eerlijkheid.

- **Een reeks met vrije dagen.** Na elke 7 geoefende dagen krijg je een vrije dag. Een gemiste
  dag is geen ramp.
- **Rustige mijlpalen** (3, 7, 14 en 30 dagen), met een "Wist je dat?".
- **Beloning is echte vaardigheid.** Een certificaat per onderwerp, met "Ik kan …"-zinnen. De
  app houdt punten bij, maar laat ze niet zien.
- **Nooit:** ranglijsten, hartjes of levens die op kunnen, punten die je kwijtraakt,
  meldingen die aandringen. Een herinnering zet je alleen zelf in je agenda.
- Gebaseerd op de zelfdeterminatietheorie (Deci & Ryan): zelf kiezen, merken dat je het kunt,
  en het samen doen.

## 7. Fouten mogen

- Een fout geeft geen straf. Je ziet het goede antwoord, en het woord komt later terug.
- Kleur is nooit het enige teken: groen heeft een vinkje, rood een kruis.
- "Ik weet het niet" is een eerlijk antwoord. Gokken telt niet mee in de toets.

## 8. Nederlands is het doel, de eigen taal de brug

- Nederlands staat voorop. De hulptaal staat erbij, als steun.
- Een Nederlandse zin is kort en komt van de werkvloer.
- Van rechts naar links (Arabisch, Farsi, Dari) werkt overal.
- Wie al Nederlands spreekt, kiest Werkregels: alles in het Nederlands.

## 9. Horen bij alles

- Bij elk Nederlands woord en elke zin staat een luidspreker.
- Opnames zijn AI-stemmen, en zo noemen we ze ook. We zeggen nooit "echte stemmen".
- Het uitspreken mag anders zijn dan het schrijven, als de stem anders verkeerd klinkt (`src/lib/sayAs.ts`).
- Spreken mag zonder microfoon: je kunt het altijd hardop zeggen en doorgaan.

## 10. Eigen tekeningen, geen emoji

- Alleen eigen SVG-tekeningen, in één stijl: plat, zonder lijnen eromheen, licht van linksboven.
  Zie `docs/tekenstijl.md`.
- Mensen zijn altijd de vaste personages: Bram, Amina, Henk en Jada.
- Een tekening moet te herkennen zijn op 48 px.

## 11. Bescheiden en eerlijk

- Geen superlatieven. Nooit "de beste", "de enige" of "uniek".
- Wat niet is nagekeken, zegt dat: "nog niet nagekeken door een expert". Nooit "experts kijken na".
- Regels en tips zijn algemene informatie, geen juridisch advies, en dat staat erbij.
- Nieuwe vertalingen zijn gemarkeerd om na te lezen (`// nieuw, nalezen`).

## 12. Privacy als standaard

- Geen account en geen cookies. Wat je leert, blijft op je telefoon.
- We tellen alleen anoniem, en dat kun je uitzetten. Bij "Do Not Track" telt de app niets.
- Elke nieuwe telling komt in de privacyverklaring (`src/lib/privacyPage.ts`, `docs/privacy.md`).

## 13. Voor iedereen, op je eigen tempo

- **Contrast:** tekst minstens 4,5:1, randen van knoppen minstens 3:1.
- **Tikken:** tikvlakken minstens 44 px.
- **Schermlezer:** alles werkt ermee.
- **Instellingen van de telefoon:** licht en donker, grote tekst en minder beweging volgen de telefoon.
- **Kort en offline:** de app werkt offline. Een les duurt een paar minuten, en je kunt altijd stoppen en later verder.
- **De reeks** is een steun, geen druk.
- **Rustig scherm:** wie wil, zet beweging, het feestje en de reeks uit (Instellingen › Lessen).
  Staat de telefoon op "minder beweging", dan gebeurt dat vanzelf.
