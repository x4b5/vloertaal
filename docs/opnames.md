# Opnames maken (ElevenLabs)

Voor de eigenaar. Zo neem je de Nederlandse zinnen en woorden op die nog geen mp3 hebben.
Het gaat om het spoor Taal. Werkregels gebruikt de stem van de telefoon en valt hierbuiten.

De opnames staan in `public/audio-el/<stem>/<id>.mp3` (stemmen: thijmen, daniel, ariel, noa).
De lijst van alle zinnen staat in `public/audio/clips.json`. Dat bestand maak je met `npm run clips`;
daar is geen sleutel voor nodig.

## 1. Kijk wat er ontbreekt (zonder sleutel)

```sh
npm run voices:missing
```

Je ziet per stem hoeveel zinnen, woorden en losse tegels nog geen mp3 hebben (*missing*), en
welke mp3's een oude tekst hebben (*outdated*). Daaronder staat de lijst. Alleen de tellingen:
`node scripts/voices/missing.mjs --counts`. Eén stem: `--voice thijmen`.

## 2. Zet de sleutel

**In GitHub (aangeraden).** *Settings → Secrets and variables → Actions → New repository secret*.
Naam: `ELEVENLABS_API_KEY`. Waarde: je sleutel uit ElevenLabs (*Profile → API keys*).
Dit hoeft maar één keer.

**Op je eigen computer.** In de terminal, in de map van Vloertaal:

```sh
export ELEVENLABS_API_KEY=jouw-sleutel
```

Zet de sleutel nooit in een bestand in git.

## 3. Neem op

**In GitHub.** *Actions → Record ElevenLabs voices → Run workflow*. Kies een branch (niet `main`,
zie stap 5). Draai in deze volgorde:

1. `check`: toont alleen wat het kost (credits). Er wordt niets opgenomen.
2. `sample`: een paar korte testzinnen per stem. Luister ze na.
3. `all`: alles wat ontbreekt of oud is. In porties van 150; na elke portie een commit.

`max_credits` stopt de run voordat hij meer uitgeeft. Met `voices` neem je één stem op.

**Op je eigen computer.** In deze volgorde:

```sh
npm run clips
node scripts/voices/elevenlabs.mjs check
node scripts/voices/elevenlabs.mjs sample
node scripts/voices/elevenlabs.mjs all
```

`MAX_CREDITS=8000` (standaard 12000) en `VOICES=thijmen` werken hier ook. Commit daarna
`public/audio-el/` (de mp3's en `voices.json`).

## 4. Controleer dat het gelukt is

```sh
npm run voices:missing
```

Bij elke stem staat nu `0` bij *missing* en bij *outdated*, en onderaan
"Every clip is recorded in every voice." Luister in de app een paar nieuwe zinnen na
(Instellingen › Lessen › Stem, en een nieuwe les).

## 5. Maak `PENDING_RECORDING` kleiner

In `tests/g4b3Clips.test.ts` staat `PENDING_RECORDING`: zinnen die nog geen opname hebben. Tot
de opname er is leest de telefoon ze voor. Na een opname-run:

```sh
npx vitest run tests/g4b3Clips.test.ts
```

De test *"PENDING_RECORDING: names lines that are recorded now"* geeft een **waarschuwing** met de
zinnen die nu een opname hebben. Hij faalt niet, dus een nieuwe opname houdt de publicatie nooit
tegen. Haal die regels weg uit `PENDING_RECORDING` (en een kopje dat leeg wordt) wanneer het
uitkomt. Zo wordt de lijst kleiner.

`tests/offline.test.ts` en `tests/learnerVoice.test.ts` hebben een eigen, kleinere
`PENDING_RECORDING`. Haal daar dezelfde zinnen weg.

Een nieuwe zin zonder opname? Zet hem in `PENDING_RECORDING`, anders faalt de eerste test van
`tests/g4b3Clips.test.ts`.
