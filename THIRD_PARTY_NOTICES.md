# Onderdelen van anderen

Vloertaal gebruikt een paar onderdelen die niet van ons zijn. Hieronder staat wat het is, van wie
het is en onder welke licentie we het mogen gebruiken. De code, de lessen, de tekeningen, het logo
en de teksten van Vloertaal zelf vallen hier niet onder.

## Lettertypes (SIL Open Font License 1.1)

| Lettertype | Waarvoor | Van wie |
|---|---|---|
| Lexend | lopende tekst en de cijfers in de stencilkoppen | The Lexend Project Authors ([googlefonts/lexend](https://github.com/googlefonts/lexend)), via `@fontsource-variable/lexend` |
| Big Shoulders Stencil Display | de stencilkoppen | The Big Shoulders Project Authors ([xotypeco/big_shoulders](https://github.com/xotypeco/big_shoulders)), via `@fontsource/big-shoulders-stencil-display` |

De lettertypes komen uit de npm-pakketten van Fontsource en komen bij het bouwen in `/assets/` van
de site. Een emoji-lettertype is er niet meer: sinds 31 oktober 2026 tekent de app alles zelf (SVG).
De OFL staat gebruik, ook commercieel, toe. Je mag de lettertypes alleen niet los verkopen.

## Software (MIT)

| Pakket | Van wie |
|---|---|
| React, React DOM (met scheduler) | Meta Platforms, Inc. and affiliates |
| Vite (bouwen, plus een klein stukje laadcode in de site) | VoidZero Inc. and Vite contributors |
| Rolldown (bouwen, plus kleine hulpfuncties die de code samenvoegen) | VoidZero Inc. & Contributors |

In de site zelf komen alleen React, React DOM, scheduler en die kleine stukjes van Vite en
Rolldown terecht. De rest (Vitest, TypeScript) wordt alleen gebruikt om te bouwen en te testen.

**De QR-codes** op de briefjes (`/briefje/`, sinds 4 november 2026) maakt Vloertaal zelf bij het
bouwen, met `src/lib/qr.ts`, zonder pakket van anderen. In de site komt alleen de code als plaatje
(SVG), niet de software. De stappen in `qr.ts` volgen de QR Code generator library van Project
Nayuki (MIT): de copyright- en licentietekst staat daarom bovenaan dat bestand. "QR Code" is een
geregistreerd merk van DENSO WAVE INCORPORATED.

## De licentieteksten in de site

De volledige teksten gaan met elke build mee: [`public/licenses.txt`](public/licenses.txt) (op de
site: `/licenses.txt`). Het bestand neemt de licentiebestanden uit `node_modules` letterlijk over:
de MIT-licentie van React (ook React DOM en scheduler), Vite en Rolldown, en de OFL van beide
lettertypes. Na een update van een van die pakketten: `node scripts/licenses.mjs`
(`tests/licenses.test.ts` controleert dat het bestand bij `node_modules` past).

Let op: het OFL-bestand van `@fontsource/big-shoulders-stencil-display` noemt als eerste regel
"Google Inc.", niet de makers van het lettertype. Dat staat er zoals Fontsource het levert; de
makers staan in de tabel hierboven.

## Stemmen (ElevenLabs)

De Nederlandse opnames in `public/audio-el/` zijn gemaakt met [ElevenLabs](https://elevenlabs.io).
Welke rechten we daarop hebben, hangt af van het abonnement waarmee ze zijn gemaakt:

- met een **betaald** abonnement krijg je een commerciële licentie op de opnames;
- met een **gratis** account mag je de opnames niet commercieel gebruiken, en moet je ElevenLabs
  vermelden.

De opnames zijn gemaakt met een **betaald** abonnement, met commercieel gebruik: zo staat het in
[`docs/livegang.md`](docs/livegang.md) en bij elke stem in `public/audio-el/voices.json`
(`"license": "ElevenLabs (paid plan, commercial use)"`). Op de pagina Over Vloertaal en bij de
begeleiders staat dat de stemmen met ElevenLabs zijn gemaakt.

Zinnen zonder opname leest de telefoon of computer van de leerling zelf voor. Dat geluid wordt niet
door ons gemaakt of verspreid.

## Wetten en regels

De Werkregels volgen Nederlandse wetten en regels. Wetteksten zijn vrij van auteursrecht
(Auteurswet, artikel 11). We schrijven de regels in eigen, eenvoudige woorden en nemen geen teksten
over van andere sites.
