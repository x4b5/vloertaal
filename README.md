# 👷 Vloertaal

**Nederlands voor op de werkvloer — geleerd via Engels, met hulp in je eigen taal.**

Vloertaal is een gratis webapp, in de stijl van Duolingo, voor mensen die in Nederland (gaan) werken:
toegankelijk, zonder account en zonder verdienmodel. Je leert Nederlands voor op het werk, met
uitleg in je eigen *hulptaal*. Zonder hulptaal is Engels de brugtaal.

| Hulptaal | Voor wie |
|---|---|
| العربية Arabisch (Modern Standaard) | Syrië, Irak, Marokko — MSA zodat iedereen het begrijpt |
| ትግርኛ Tigrinya | Eritrea — vrijwel geen lesmateriaal beschikbaar |
| فارسی Perzisch | Iran |
| دری Dari | Afghanistan — eigen variant, niet Iraans Perzisch |
| Українська Oekraïens | ontheemden met tijdelijke bescherming |
| Türkçe Turks | bestaande gemeenschap en nieuwe instroom |
| Polski Pools, Română Roemeens, Български Bulgaars | arbeidsmigranten |
| English only | iedereen met een andere taal |

![Vloertaal: taalkeuze, lespad, oefeningen](docs/screens-1.png)
![Vloertaal: les afgerond, noodzinnen](docs/screens-2.png)

## Wat zit erin

- **Lespad** met 27 units en 86 lessen (354 woorden, 258 zinnen): eerste werkdag, veiligheid,
  rooster en ziekmelden, loon, contract, rechten, gezondheid, en een eigen unit per sector
  (Logistiek, Bouw, Productie, Zorg, Horeca, Schoonmaak).
- **Oefeningen**: nieuw woord met plaatje en uitspraak, betekenis kiezen, Nederlands woord kiezen,
  luisteren, paren verbinden, zin bouwen (later ook op het gehoor), typen, gesprekken en spreken.
  Latere units worden stap voor stap moeilijker.
- **Herhaal vandaag**: elke dag een korte herhaling van de zwakste woorden, zinnen en gesprekken.
- **Werkvloer-tips** (59): hoe het hier gaat op het werk, en je rechten, met een verwijzing naar
  vakbond, Juridisch Loket of FairWork bij uitbuiting.
- **Bram**, de mascotte met de V op zijn helm: zegt rustig één zin, zonder schuldgevoel en zonder
  meldingen.
- **Hulp in je eigen taal**, met mannelijke en vrouwelijke vormen en echte meervouden. Engels
  verdwijnt zodra je een hulptaal kiest.
- **Toegankelijk**:
  - hooguit 3 dingen om op te tikken per scherm;
  - één vraag per onboardingpagina;
  - alles kan worden voorgelezen;
  - werkt rechts-naar-links, in Tigrinya-schrift, met grote letters en zonder geluid.
- **Echte stemmen** (ElevenLabs, betaald plan); zonder opname leest de telefoonstem voor.
- **Privacy**:
  - geen account en geen cookies;
  - voortgang alleen op het toestel;
  - alleen een anonieme telling (GoatCounter, respecteert Do Not Track, uit te zetten);
  - de microfoon slaat niets op.
- **Offline**: met "Lessen bewaren" staat alles op de telefoon (PWA).
- **Toegang**: een code van docent, coach of werkgever. Er is een proefles zonder code.
  `#begeleiders` heeft links per onderwerp voor coaches.

## Starten

```bash
npm install
npm run dev      # ontwikkelserver op http://localhost:5173
npm test         # unit tests (logica + volledigheid van alle vertalingen)
npm run build    # productiebuild in dist/
```

## Publiceren

De app staat op **Vercel** (straks op `vloertaal.nl`). Elke merge naar `main` wordt vanzelf
gepubliceerd, en elke pull request krijgt een voorbeeldversie. GitHub Actions draait alleen de
tests (`.github/workflows/deploy.yml`). Nieuwe Nederlandse zinnen neem je op met **Actions →
Record ElevenLabs voices**. Zie [`docs/livegang.md`](docs/livegang.md) voor het domein en de
checklist.

## Structuur

```
src/content/        lessen (curriculum.ts), werkvloer-tips (culture.ts, work.ts), sectoren, Over
src/i18n/           per hulptaal: UI-teksten (<taal>.ts) en vertalingen per onderdeel (learn/, culture/, work/, about/)
src/lib/            oefeningen, herhalen, voortgang, audio, telling, toegang
src/components/     schermen en oefeningen
scripts/            opnamelijst, iconen, max-3-telscript
tests/              vitest: logica, volledigheid en vorm van alle vertalingen
```

**Les toevoegen:** voeg een `Lesson` toe in `curriculum.ts` en vul in elke hulptaal de nieuwe id's aan.
`npm test` faalt zolang er in een taal iets ontbreekt.

## ⚠️ Vertalingen en werkvloer-tips: nakijken vóór gebruik

Alle hulptaal-teksten zijn met AI geschreven en daarna met een blinde terugvertaling gecontroleerd.
Ze staan nog op `reviewed: false` (in de app zichtbaar als **beta**). Laat ze nakijken door
moedertaalsprekers. De open vragen staan in [`docs/vertaalcontrole.md`](docs/vertaalcontrole.md) en de
xlsx. Laat de werkvloer-tips nakijken door een deskundige: [`docs/juridische-check.md`](docs/juridische-check.md).
