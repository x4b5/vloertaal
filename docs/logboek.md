# Logboek: "Wat is er nieuw?", meldingen en "Komt eraan"

Alles staat in één bestand: [`src/content/updates.ts`](../src/content/updates.ts). Dit document is
voor de eigenaar en voor de agent die **elke maand** controleert of er nieuwe regels of wetten zijn.

| Lijst | Voor wie | Waar te zien |
|---|---|---|
| `UPDATES` | leerlingen, begeleiders, partners | in de app: Over › Wat is er nieuw?; en vloertaal.nl/nieuw |
| `UPDATES[…].notice` | de leerling, **één keer** | een kaart bovenaan het lespad: "Er is iets veranderd" |
| `UPCOMING` | iedereen | "Binnenkort" bovenaan "Wat is er nieuw?" |
| `UPCOMING_LAW` | de maandcheck en de eigenaar | nergens in de app; alleen in de code en de tests |

## 1. Een update toevoegen

Zet een nieuwe update **bovenaan** `UPDATES`: de dag waarop het in de app staat (`YYYY-MM-DD`) en
een paar korte regels. Eén regel = één verandering die een leerling of begeleider merkt.

Een pull request die iets verandert in `src/content/**` of `src/i18n/**`, maar niet in
`src/content/updates.ts`, krijgt in GitHub een **waarschuwing** (`.github/workflows/logboek.yml`).
De PR faalt daar niet op. Hoort er geen regel bij (een tikfout, een comment, een test)? Geef de PR
het label `geen-logboek`, of zet `[geen logboek]` in de titel.

## 2. Een melding voor de leerling (`notice`)

Raakt een verandering de leerling **direct**, dan krijgt de update een `notice`. De leerling ziet
die één keer als hij of zij de app opent: een rustige kaart bovenaan het lespad, geen pop-up, met
[Lees meer] (opent "Wat is er nieuw?") en [Oké].

### Wanneer wel

Alleen bij een verandering in:

- **rechten**: contract, proeftijd, ontslag, verlof, uitzendwerk, discriminatie;
- **loon**: minimumloon, vakantiegeld, toeslagen, wat er op de loonstrook staat;
- **ziekte**: ziek melden, loon bij ziekte, wachtdag, ziekenfonds;
- **uitkering**: WW, bijstand, werkloosheid, RVA;
- **veiligheid**: een regel of een nummer bij gevaar, beschermende kleding.

### Wanneer niet

Al het andere: nieuwe lessen, woorden, plaatjes, vertalingen, knoppen, een verbeterde fout, een
nieuwe sector. Dat staat alleen in de regels van de update. **Twijfel je? Dan geen melding.**
Hoogstens één melding per update: elke melding onderbreekt de leerling.

### Zo voeg je hem toe

```ts
{
  date: '2027-01-01',
  items: ['Het minimumloon is omhoog gegaan. …'],
  notice: {
    id: 'minimumloon-2027-01',   // kort, uniek, nooit opnieuw gebruiken
    country: 'nl',               // 'nl' | 'be' | 'both'
    track: 'both',               // 'taal' | 'regels' | 'both'
    nl: 'Het minimumloon is omhoog gegaan. Kijk op je loonstrook of je genoeg krijgt.',
    en: 'The minimum wage has gone up. Check your payslip to see if you get enough.',
  },
},
```

- `nl`: Nederlands op **A2**, hoogstens **2 zinnen** en 25 woorden. Zeg wat er verandert en wat de
  leerling kan doen. Schrijf geen "vanaf vandaag": de kaart kan ook een week later in beeld komen.
- `en`: hetzelfde in eenvoudig Engels. Dat is de basis voor de vertalingen.
- Vertaal `en` in de **13 hulptalen**, in `src/i18n/notices/<taal>.ts` onder `gloss`, met de
  sleutel `notice.<id>`, en `// nieuw, nalezen` erachter:

  ```ts
  gloss: {
    'notice.minimumloon-2027-01': 'Płaca minimalna wzrosła. …', // nieuw, nalezen
  },
  ```

  In het Arabisch en Tigrinya: met `{ m, f, x }` als de zin de leerling aanspreekt. Bij
  `track: 'regels'` hoeft er niets vertaald te worden (Werkregels is alleen Nederlands).
- Controleer: `npx vitest run tests/notice.test.ts` (velden, lengte, vertalingen in 13 talen).

### Wie ziet hem

- Alleen wie in dat **land** werkt (`progress.country`; geen keuze telt als Nederland) en in dat
  **spoor** zit (Taal of Werkregels).
- Alleen wie de app al gebruikte **vóór** de dag van de update (`progress.firstDay`). Een nieuwe
  leerling ziet dus geen oude meldingen: de lessen zijn dan al bijgewerkt.
- **Eén keer**: de ids die de leerling zag, staan alleen op de telefoon (`progress.noticesSeen`),
  niet in de back-up.
- **Eén tegelijk**, de nieuwste. Met [Oké] of [Lees meer] gaan ook de oudere die nog wachtten weg;
  die staan in "Wat is er nieuw?".
- Staat ook "Wat ken je al?" klaar, dan komt de melding eerst.

Een melding weghalen hoeft niet. Voorbeeld om te bekijken (niet in de app):
`/?shot=melding&lang=pl` (`src/dev/MeldingShot.tsx`, voorbeeld in `src/dev/noticeExample.ts`). De
max-3-telling: `node scripts/max3/count.cjs --matrix 'melding:*'`.

## 3. Wetten die later ingaan (`UPCOMING_LAW`)

Een wet die is aangenomen maar later ingaat, zet je in `UPCOMING_LAW`: de wet, het land, de
ingangsdatum(s) en wat er dan verandert, wat er in de app moet veranderen, en welke ids en bestanden
het raakt. Zet bij de teksten zelf een comment met de naam van de wet (zoals `⚖️ check` met
"flexwerkers"), zodat je ze terugvindt.

Elke maand:

1. Kijk of er nieuwe wetten of regels zijn (NL en BE) en zet ze in `UPCOMING_LAW`.
2. Is een ingangsdatum voorbij? `tests/upcomingLaw.test.ts` geeft dan een waarschuwing
   (`console.warn`, de test faalt niet). Pas de teksten aan (de `ids` in de `files`), maak een
   update, met een melding als het de leerling direct raakt (zie hierboven), en haal daarna de
   datum of het hele item weg.
