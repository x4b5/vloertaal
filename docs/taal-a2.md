# Meetlat: teksten op A2-niveau

*Opgesteld 29 oktober 2026, naar aanleiding van feedback van een NT2-docent. Bouwt voort op de
schrijfregels in [`werkregels-curriculum.md`](werkregels-curriculum.md#schrijfregels-checklist-voor-redactie).
Concept: de docent kijkt deze meetlat nog na.*

Vloertaal gaat uit van A2. Op dat niveau moet een tekst te volgen zijn zonder woordenboek. Deze
meetlat zegt wanneer een zin goed genoeg is, en wanneer hij korter of eenvoudiger moet.

## De regels

1. **Korte zinnen.** Hooguit ongeveer 12 woorden per zin. Eén idee per zin. Twee ideeën? Twee zinnen.
2. **Gewone woorden.** Geen woorden boven A2 als er een gewoon alternatief is. Liever een paar
   woorden meer dan één moeilijk woord.

   | Niet | Wel |
   |---|---|
   | Kevin twijfelt. | Kevin weet niet wat hij moet doen. |
   | Echt werk kost jou nooit geld. | Voor echt werk hoef jij zelf niet te betalen. |
   | eventueel, indien, mits | misschien, als, alleen als |
   | echter, desondanks | maar |
   | betreffende, inzake | over |

3. **Een vakwoord mag, met uitleg.** Hoort een woord bij het onderwerp (cao, loonstrook,
   proeftijd), dan blijft het staan. De eerste keer in een les staat er één korte uitlegzin bij.
4. **Zeg wat er gebeurt, niet wat er niet gebeurt.** Een zin met "nooit" of "geen" plus een
   abstract woord wordt een gewone zin over wat iemand doet (zie het voorbeeld hierboven).
5. **Eén persoon per vraag.** Het verhaal gaat over de leerling ("je")? Dan gaan de vraag en de
   antwoorden ook over "je". Gaat het verhaal over Kevin? Dan: "Wat kan Kevin het beste doen?" en
   antwoorden met "hij". De uitleg (waarom) blijft "je": dat is de regel voor de lezer zelf.
   `tests/rulesPerson.test.ts` controleert dit.
6. **Bedrijvende vorm.** "De baas betaalt je loon", niet "Je loon wordt betaald".
7. **Woorden die de stem slecht uitspreekt, vermijden.** Bijvoorbeeld "appje" klinkt als
   "eepeetje". Is er een gewoon alternatief ("bericht"), gebruik dat.

## Wat niet verandert

- **De feiten.** Een regel, bedrag, termijn of telefoonnummer blijft precies zoals hij is.
  Alles met ⚖️ blijft ongewijzigd, ook de opmerkingen in de code.
- **De vorm van een vraag.** Hetzelfde goede antwoord, op dezelfde plek (A, B of C). De foute
  antwoorden blijven geloofwaardig en ongeveer even lang als het goede.
- **De ids, de volgorde en de opbouw** van lessen en stappen.
- **De toon.** Rustig en volwassen, niet kinderachtig, niet belerend.

## Waar het geldt

In de hele app, overal waar de leerling Nederlands leest of hoort. In deze volgorde:

1. **Werkregels**: `src/content/regels/units/*.ts`. Alleen Nederlands, alle teksten.
2. **Regio**: `src/content/regio/*.ts`. De Nederlandse teksten.
3. **Taalspoor**: `src/content/curriculum.ts`, `src/content/work.ts`, `src/content/culture.ts`.
   Hier gelden drie extra regels:
   - **De woorden die je leert, blijven staan** (ids die beginnen met `w.`). Die woorden zijn de
     lesstof zelf. Ook uitdrukkingen (`src/content/sayings.ts`) blijven staan.
   - **Alleen het Nederlands verandert.** Het Engels (`en`) en de vertalingen in `src/i18n/` blijven
     zoals ze zijn. Past de Engelse betekenis niet meer bij de nieuwe Nederlandse zin? Dan is het
     een twijfelgeval: niet veranderen.
   - **Een lijst van veranderde ids** in de pull request. Die zinnen worden later opnieuw opgenomen,
     in één keer met de nieuwe stemmen. Tot dan spreekt de telefoonstem ze uit.
4. **De Nederlandse schermteksten**: `src/i18n/nl.ts`.

## Werkwijze per ronde

1. Eén bestand per ronde, één pull request per bestand. Een groot bestand (meer dan ±500 regels) mag in delen.
2. Loop elke tekst langs de regels hierboven: `title`, `goal`, `remember`, scène, `situation`,
   `quote`, `options`, `feedback`, `body`, `why`.
3. Verander alleen wat een regel overtreedt. Een zin die al goed is, blijft staan.
4. Twijfel je of een nieuwe zin hetzelfde betekent? Verander hem niet, maar zet hem als vraag in
   de pull request.
5. Draai `npx tsc -b` en `npx vitest run`. Alles moet slagen. Pas geen test aan om hem te laten
   slagen, behalve als die test letterlijk een tekst controleert die je hebt veranderd.
6. In de pull request: een tabel **oud → nieuw → welke regel**, en apart de twijfelgevallen.
   Nooit zelf samenvoegen.
