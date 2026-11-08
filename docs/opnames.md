# Opnames maken (ElevenLabs)

Voor de eigenaar. Zo neem je de Nederlandse zinnen en woorden op die nog geen mp3 hebben.
Het gaat om het spoor Taal. Werkregels gebruikt de stem van de telefoon en valt hierbuiten.

De opnames staan in `public/audio-el/<stem>/<id>.mp3` (stemmen: thijmen, daniel, ariel, noa;
de Vlaamse: philip, hans, evie, sare). De lijst van alle zinnen staat in `public/audio/clips.json`.
Dat bestand maak je met `npm run clips`; daar is geen sleutel voor nodig.

## Stand van de stemmen (bijgewerkt 8 november 2026)

Sinds 8 november 2026 spreken de personages met nieuwe stemmen op model **Eleven v4**
(`take` 3 in `scripts/voices/elevenlabs.json`). Een clip die nog met de oude stem of het oude
model is opgenomen, telt in `missing.mjs` als *outdated*; een clip die nooit is opgenomen als
*missing*. Beide samen is wat nog moet.

| Personage | Nederland (sleutel → stem) | België (sleutel → stem) |
|---|---|---|
| Bram | `thijmen` → Thijmen | `philip` → Philip |
| Henk | `daniel` → Simon | `hans` → Hans |
| Amina | `ariel` → Sandrine | `evie` → Evie |
| Jada | `noa` → Iris | `sare` → Sare |

De sleutels van de Nederlandse stemmen bleven gelijk; alleen de stem erachter veranderde.

**Nederlandse stemmen**

| Groep | Wat | Stand |
|---|---|---|
| `w.` | woorden | ✅ v4 (PR #324) |
| `t.` | losse tegels | ✅ v4 (PR #324) |
| `rg.` `zg.` `d.` `x.` `p.` | regiowoorden, gezegdes, gesprekjes, Bram, "Bel 112!" | ✅ v4 (PR #328) |
| `s.` | zinnen | ⏳ nog oude stem, deels nooit opgenomen |
| `c.` | chats | ⏳ nog oude stem |
| `be.` | Belgische route | blijft zo: krijgt de Vlaamse stemmen |

**Vlaamse stemmen** (alleen voor wie in België werkt; zie `src/lib/voices.ts`). Wat een Vlaamse
stem nog niet heeft, speelt de Nederlandse stem van hetzelfde personage.

| Groep | Wat | Stand |
|---|---|---|
| `be.w.` | Belgische woorden | ✅ alle vier (PR #330) |
| `be.s.` | Belgische zinnen | ✅ Philip, Hans, Evie · ⏳ Sare 21 van 38 (tegoed op, 8 nov) |
| `be.c.` | Belgische chats | ⏳ |
| alle andere | woorden, tegels, zinnen | ⏳ ronde 2, ±38.000 tekens per stem |

**Zo meet je de stand opnieuw** (zonder sleutel):

```sh
node scripts/voices/missing.mjs --counts                   # de vier Nederlandse stemmen
node scripts/voices/missing.mjs --counts --voice philip    # één Vlaamse stem
```

**Let op bij het opnemen.**
- Een Vlaamse stem neemt alleen op als je hem noemt: `voices` = `philip,hans,evie,sare`. Een run
  voor "alle stemmen" slaat ze over, zodat hij nooit per ongeluk dubbel kost.
- `check` schat de kosten op het aantal letters. Werkelijk betaalden we op 8 november ±48% van
  de schatting (Nederlands) en ±33% (Vlaamse woorden). Kijk na elke portie naar het tegoed.
- Het tegoed dat `check` direct na een run toont, loopt achter: op 8 november stond er na een
  run nog 1.679, terwijl er werkelijk bijna niets meer over was. Houd ruim marge aan.
- Stopt een run halverwege (tegoed op), dan staan de al betaalde opnames in de bijlage van die
  run (*Artifacts → elevenlabs-all*): haal ze terug met `gh run download <id> --name elevenlabs-all`
  en zet de mp3's en `voices.json` terug in `public/audio-el/`.

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

`max_credits` stopt de run voordat hij meer uitgeeft. Met `voices` neem je één stem op. Met
`clips` neem je alleen de clips op waarvan de id past bij een patroon, bijvoorbeeld `\.front$`.

**Op je eigen computer.** In deze volgorde:

```sh
npm run clips
node scripts/voices/elevenlabs.mjs check
node scripts/voices/elevenlabs.mjs sample
node scripts/voices/elevenlabs.mjs all
```

`MAX_CREDITS=8000` (standaard 12000) en `VOICES=thijmen` werken hier ook. Commit daarna
`public/audio-el/` (de mp3's en `voices.json`).

(De app downloadt `voices.json` zelf niet meer: de build maakt er een korte kopie van, met een
hash in de naam, `assets/voices-*.json`; zie `src/lib/voicesIndex.ts`. Jij commit gewoon
`voices.json`.)

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

---

# Opnames in de hulptaal (de eerste schermen)

De eerste schermen hebben een luisterknop in de hulptaal (de wereldbol met een tekstballon):
de route ("Wat wil je leren?"), de taalraad ("Polski?") en de vragen en uitleg bij
"Vrouw of man?", "Waar werk je?" en "In welk land werk je?".

De knop speelt eerst een **opname** af. Is er geen opname, dan leest **de stem van de telefoon**
het voor. Heeft de telefoon geen stem voor die taal (Tigrinya bijna altijd, Perzisch en Dari soms),
dan is er **geen knop**. Een opname is er pas als de eigenaar hem maakt. Zonder opnames werkt
alles zoals vroeger.

- De lijst: `public/audio-help/clips.json` (per taal 12 tot 19 korte zinnen, ongeveer 5.800 tekens).
  Maken: `npm run help:clips` (geen sleutel nodig). De teksten komen uit `scripts/help-clips-list.ts`.
- De opnames: `public/audio-help/<taal>/<naam>.mp3`, bijvoorbeeld `public/audio-help/ar/routeTitle.mp3`.
- Wat er is opgenomen: `public/audio-help/manifest.json` (per taal: naam → de tekst die de opname zegt).
  De app zoekt een opname op **tekst**. Verandert een tekst, dan gebruikt de app de oude opname niet
  meer, tot hij opnieuw is opgenomen.
- Een naam als `chooseSector.f` is de vorm voor een vrouw, `.m` voor een man; zonder punt is het
  de vorm voordat de leerling "Vrouw of man?" heeft gekozen.

## Welke taal met welk model

| Taal | Hoe | Model |
|---|---|---|
| ar, uk, tr, pl, ro, bg, es, pt, fr, de | ElevenLabs | `eleven_multilingual_v2` (29 talen; deze 10 staan erin) |
| fa (Perzisch) | ElevenLabs | `eleven_v3` (Perzisch staat alleen in v3, niet in v2) |
| prs (Dari) | ElevenLabs, **eerst laten naluisteren** | `eleven_v3`, als Perzisch: geen model noemt Dari |
| ti (Tigrinya) | **een moedertaalspreker** met de telefoon | geen: Tigrinya staat in geen enkel model |

Gevonden op 31 oktober 2026 (zoeken op het web; de site van ElevenLabs zelf was vanaf hier niet
bereikbaar). `check` hieronder vraagt het ook aan ElevenLabs zelf, per model ("knows it: yes/NO").
Eleven v4 (september 2026) heeft volgens het nieuws 90+ talen, maar er is nog geen lijst. Staat
Tigrinya er later in, zet dan in `scripts/voices/elevenlabs-help.json` bij `ti` een `model` in plaats
van `"human": true`.

**Stem.** Standaard spreekt Ariël (de Nederlandse stem van de lessen) ook de hulptalen. Beter klinkt
een stem die de taal als moedertaal heeft: kies er een in de *Voice Library* van ElevenLabs en zet
het id bij die taal in `scripts/voices/elevenlabs-help.json` (`"ar": { "model": "…", "voiceId": "…" }`).

## Opnemen met ElevenLabs

```sh
export ELEVENLABS_API_KEY=jouw-sleutel
npm run help:clips
node scripts/voices/elevenlabs-help.mjs check     # kost niets: per taal wat er ontbreekt en de prijs
node scripts/voices/elevenlabs-help.mjs sample    # 1 zin per taal ("Wat wil je leren?"): luister na
node scripts/voices/elevenlabs-help.mjs all       # alles wat ontbreekt of oud is (niet Tigrinya)
npm run help:missing                              # controle: per taal "missing 0 · outdated 0"
```

Eén of een paar talen: `LANGS=ar,fa node scripts/voices/elevenlabs-help.mjs all`.
`MAX_CREDITS=3000` (standaard 8000) stopt de run voordat hij meer uitgeeft.
Commit daarna `public/audio-help/` (de mp3's en `manifest.json`).

**Credits (schatting).** Ongeveer 1 credit per teken (`eleven_multilingual_v2` en `eleven_v3`):

- `sample`: ongeveer **260** credits (12 zinnen);
- `all`, de 12 talen zonder Tigrinya: ongeveer **5.250** credits;
- later een tekst veranderd: alleen die zin, een paar tientallen credits.

Luister vooral **Dari** en **Perzisch** na, liefst met iemand die de taal spreekt. Klinkt het Dari
Iraans, gooi de mp3's van `prs` weg en laat ze inspreken zoals Tigrinya hieronder.

## Tigrinya (en eventueel Dari): een moedertaalspreker neemt op

Vraag een moedertaalspreker uit de pilot (iemand die goed leest). Het kost ongeveer 20 minuten.

1. Maak de lijst: `node scripts/voices/help-manifest.mjs list ti`. Je ziet per regel de bestandsnaam,
   het scherm en de zin. Stuur die lijst (of de tabel hieronder) naar de spreker.
2. De spreker neemt **elke zin apart** op met de telefoon (de app *Dictafoon* of *Spraakrecorder*):
   - in een stille kamer, de telefoon op 20 cm;
   - rustig en duidelijk, zoals je het tegen een nieuwe collega zegt;
   - precies de zin van de lijst, niets ervoor of erna;
   - de bestandsnaam van de lijst, bijvoorbeeld `routeTitle`.
3. Zet de bestanden om naar mp3 en zet ze in `public/audio-help/ti/`:

   ```sh
   for f in *.m4a; do ffmpeg -i "$f" -ac 1 -ar 44100 -b:a 64k -af silenceremove=1:0:-45dB,areverse,silenceremove=1:0:-45dB,areverse "public/audio-help/ti/${f%.m4a}.mp3"; done
   ```

   (Stilte aan het begin en eind gaat eraf. Werkt de spreker met een ander formaat, vervang `.m4a`.)
4. Luister ze na en zet ze in de lijst van de app:

   ```sh
   node scripts/voices/help-manifest.mjs add ti
   ```

   Je ziet hoeveel er zijn gevonden en welke nog ontbreken. Commit `public/audio-help/`.

De zinnen in het Tigrinya (31 oktober 2026; `list ti` geeft altijd de actuele lijst):

| Bestand | Scherm | Zin |
|---|---|---|
| `routeTitle.mp3` | route | እንታይ ክትመሃሩ ትደልዩ? |
| `routeLearn.mp3` | route | ንስራሕ ሆላንድኛ ምምሃር |
| `routeRules.mp3` | route | ሆላንድኛ እዛረብ እየ፡ ሕግታት ስራሕ |
| `langAsk.mp3` | raad | ትግርኛ? |
| `langGuessYes.mp3` | raad | እወ |
| `langGuessOther.mp3` | raad | ካልእ ቋንቋ |
| `genderTitle.mp3` | vrouw-man | ሰበይቲ ወይስ ሰብኣይ? |
| `genderHint.mp3` | vrouw-man | ቋንቋኹም ብቕኑዕ መንገዲ ምእንቲ ክዛረበኩም። |
| `chooseSector.mp3` | werk | ኣበይ ኢኹም ትሰርሑ? |
| `chooseSector.f.mp3` | werk | ኣበይ ኢኺ ትሰርሒ? |
| `chooseSector.m.mp3` | werk | ኣበይ ኢኻ ትሰርሕ? |
| `sectorHint.mp3` | werk | ትምህርትታት ናይ ስራሕካ ኣቐዲሞም ይመጹ። ደሓር ኣብ ምድላዋት ክትቅይሮ ትኽእል ኢኻ። |
| `sectorHint.f.mp3` | werk | ትምህርትታት ናይ ስራሕኪ ኣቐዲሞም ይመጹ። ደሓር ኣብ ምድላዋት ክትቅይርዮ ትኽእሊ ኢኺ። |
| `countryTitle.mp3` | land | ኣብ ኣየናይ ሃገር ኢኹም ትሰርሑ? |
| `countryTitle.f.mp3` | land | ኣብ ኣየናይ ሃገር ኢኺ ትሰርሒ? |
| `countryTitle.m.mp3` | land | ኣብ ኣየናይ ሃገር ኢኻ ትሰርሕ? |
| `countryHint.mp3` | land | እትሰርሑሉ ሃገር ምረጹ። ሕግታት ስራሕ ናይታ ሃገር ክትረኽቡ ኢኹም። እዚ ኣብ ተሌፎንኩም ይጸንሕ። ናብ ዝኾነ ቦታ ኣይንሰዶን ኢና። |
| `countryHint.f.mp3` | land | እትሰርሕሉ ሃገር ምረጺ። ሕግታት ስራሕ ናይታ ሃገር ክትረኽቢ ኢኺ። እዚ ኣብ ተሌፎንኪ ይጸንሕ። ናብ ዝኾነ ቦታ ኣይንሰዶን ኢና። |
| `countryHint.m.mp3` | land | እትሰርሓሉ ሃገር ምረጽ። ሕግታት ስራሕ ናይታ ሃገር ክትረክብ ኢኻ። እዚ ኣብ ተሌፎንካ ይጸንሕ። ናብ ዝኾነ ቦታ ኣይንሰዶን ኢና። |

Tip: de spreker kan meteen meelezen. Klopt een zin niet, of klinkt hij vreemd? Noteer het.
Dan passen we eerst de tekst aan (in `src/i18n/ti.ts`) en neemt de spreker daarna op.

Eén zin vergeten? Dat geeft niets. Die zin leest dan niemand voor (de app laat de knop weg), de rest werkt.
## 6. "Wat zeg je?" in de les

Na een gesprek in de les komt nu "Wat zeg je?": de leerling hoort de collega en zegt zelf het
antwoord dat het gesprek net heeft geleerd. Dat gebruikt de opnames die er al zijn (de zin van de
collega en het antwoord, `c.*.q` en `c.*.a` in `voices.json`). Er is niets nieuws op te nemen.

Een gesprek zonder opname krijgt "Wat zeg je?" nog niet (nu 77 van de 102 gesprekken wel). Neem je de
ontbrekende zinnen op (stap 1 tot en met 4), dan komt "Wat zeg je?" er vanzelf bij. Er hoeft dan
niets aan de code te veranderen.

Aan het eind van een les komt ook "Wat zeg je?" op de zin van "Probeer het vandaag": de leerling
krijgt het moment van de kaart als vraag en zegt de zin. Dat kan alleen als die zin is opgenomen in de
stem van de leerling (Thijmen en Ariel). Nu hebben 73 van de 96 zinnen een opname. Zonder opname blijft
daar het gewone "Zeg het". Nog op te nemen (4 november 2026): `c.dates.p`, `c.permit.p`,
`c.kids.p`, `c.mychoice.p`, `c.nextstep.p`, `c.body.p`, `c.healthy.p`, `c.budget.p`,
`c.jobends.p`, `c.harvest.p`, `c.greensafe.p`, `c.workorder.p`, `c.handover.p`, `c.workshop.p`,
`c.power.p`, `c.garage.p`, `c.carjob.p`, `c.placement.p`, `c.review.p`, `c.council.p`,
`c.police.p`, `c.login.p`, `c.phish.p`.

## 7. De geluidsscènes ("Luister op de werkvloer")

De 30 geluidsscènes (`src/content/geluidsscenes.ts`) zijn een collega op gewoon tempo, met lawaai
van de werkvloer erachter. In de app staan ze pas als de mix er is. Alle stappen en keuzes staan in
[`geluidsscenes.md`](geluidsscenes.md#stap-voor-stap-van-opname-tot-de-app). Kort:

```sh
npm run clips
npm run scenes:lines -- --merge             # 124 scène-clips achter in public/audio/clips.json
export ELEVENLABS_API_KEY=jouw-sleutel
node scripts/voices/elevenlabs.mjs check    # alleen de prijs
node scripts/voices/elevenlabs.mjs all      # de stemmen
# het omgevingsgeluid: per scène public/audio-scenes/geluid/<scène-id>.mp3 (Sound Effects, 15 s, loop)
npm run scenes:lines -- --mix               # het mixscript
bash public/audio/scene-mix.sh              # 55 mixen en public/audio-scenes/scenes.json
npx vitest run tests/scenes.test.ts tests/geluidsscenes.test.ts
```

- **Credits.** De stemmen: ongeveer 5.500 (5.526 tekens, één opname van elke zin; met een tweede
  poging voor een paar zinnen 7.000 tot 10.000). Het omgevingsgeluid: 5.000 tot 8.000 als scènes
  een geluid delen, 12.000 tot 16.000 met een eigen geluid per scène. Samen meestal **10.000 tot
  15.000**. Kijk de prijs van Sound Effects na op de prijspagina van ElevenLabs; die verandert soms.
- **Mee in de commit:** `public/audio-el/<stem>/g.*.mp3` met `public/audio-el/voices.json`,
  `public/audio-scenes/*.mp3` en `public/audio-scenes/scenes.json`.
- **Niet mee:** `public/audio/` en `public/audio-scenes/geluid/` (beide staan in `.gitignore`).
- **Alleen wat er is.** De app toont alleen de scènes die in `scenes.json` staan. Haal je een mix weg,
  draai dan `npm run scenes:lines -- --manifest` opnieuw.

## 8. "Zet het woord vooraan" (stap 3)

In de tweede helft van het lespad maakt de leerling een zin opnieuw, met het woord van tijd of
plaats vooraan: "Ik verstuur de mail morgen." wordt "Morgen verstuur ik de mail." Dat zijn 16
korte zinnen (`src/content/patterns.ts`, ongeveer 450 tekens per stem, dus ongeveer 1.800
tekens voor de vier stemmen). Ze staan met `npm run clips` in `public/audio/clips.json`, met een
id die eindigt op `.front`. Neem ze op zoals in stap 1 tot en met 4, met `clips` = `\.front$`. Tot dan leest de stem van de
telefoon de nieuwe zin voor; de oude zin en de losse woorden hebben al een opname.

## 9. "Hoe zeg je het?": de losse klanken

De klankkaarten (`src/content/klankMond.ts`; in Hulp en aan het begin van de lessen van Klanken)
hebben een knop die de klank laat horen. Is de klank los opgenomen, dan hoor je die; anders hoor je
het voorbeeldwoord (maan, nee, fiets, …). Alle voorbeeldwoorden hebben al een opname in de vier
stemmen. Er is dus niets verplicht op te nemen; de kaarten werken nu al.

Los opgenomen zijn al (4 november 2026): **u** (de uu), **ui** en **ei** (de ij).

Nog los op te nemen, als je dat wilt. De tekst moet precies zo in `voices.json` komen te staan;
de kaart vindt de opname dan zelf (Bram, de stem Thijmen, is genoeg; de app zoekt bij een andere
mannenstem verder):

| klank | tekst van de opname | nu te horen |
| --- | --- | --- |
| aa | `aa` | maan |
| ee | `ee` | nee |
| ie | `ie` | fiets |
| oo | `oo` | doos |
| oe | `oe` | moer |
| eu | `eu` | keuken |
| ou / au | `ou` | koud |

Zeven heel korte teksten: een paar credits per stem. Let op: een computerstem leest twee letters
los soms als namen van letters ("o-e" in plaats van oe) of als een afkorting. Luister elke opname
na voordat je hem in `voices.json` zet. Klinkt hij niet goed, laat hem dan weg: het woord werkt ook.
Deze teksten staan niet in `public/audio/clips.json` (`npm run clips`), zodat een gewone opnamerun
ze niet vanzelf meeneemt. Neem ze apart op (in de app van ElevenLabs, of met een eigen regel in
`clips.json`) en zet ze daarna met de juiste tekst in `voices.json`.

De korte klinkers **a, e, i, o, u** kun je niet als losse letter opnemen: "a" alleen klinkt als de
naam van de letter, en dat is de aa. Die kaarten laten daarom altijd het woord horen (man, helm,
links, stop, bus). Wil je ze toch los, dan kan alleen een mens ze goed inspreken (kort, zonder
letternaam). Ook dan geldt: de tekst van de opname moet dezelfde zijn als in `klankMond.ts`
(`sound`), en daar moet die tekst er dan bij.
