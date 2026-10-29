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

Voorlopig alleen **Werkregels**: `src/content/regels/units/*.ts`. Dat spoor is alleen Nederlands
en heeft geen opgenomen stemmen, dus een zin aanpassen raakt niets anders.

**Niet** het taalspoor (`src/content/curriculum.ts`, `src/content/work.ts`, `src/i18n/`): daar hangt
aan elke zin een vertaling in tien hulptalen en vaak een opname. Een zin daar aanpassen is een
eigen besluit.

## Werkwijze per ronde

1. Eén bestand in `src/content/regels/units/` per ronde, één pull request per bestand.
2. Loop elke tekst langs de regels hierboven: `title`, `goal`, `remember`, scène, `situation`,
   `quote`, `options`, `feedback`, `body`, `why`.
3. Verander alleen wat een regel overtreedt. Een zin die al goed is, blijft staan.
4. Twijfel je of een nieuwe zin hetzelfde betekent? Verander hem niet, maar zet hem als vraag in
   de pull request.
5. Draai `npx tsc -b` en `npx vitest run`. Alles moet slagen. Pas geen test aan om hem te laten
   slagen, behalve als die test letterlijk een tekst controleert die je hebt veranderd.
6. In de pull request: een tabel **oud → nieuw → welke regel**, en apart de twijfelgevallen.
   Nooit zelf samenvoegen.
