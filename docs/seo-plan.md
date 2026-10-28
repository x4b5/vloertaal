# SEO-plan Vloertaal

*Opgesteld 28 oktober 2026. Doel: dat leerlingen, begeleiders, werkgevers en organisaties Vloertaal
vinden via Google, in het Nederlands én in de negen hulptalen.*

## Waar we staan

```
Google kijkt naar vloertaal.nl
        │
        ▼
  1 pagina  ──►  titel: "Vloertaal"            te kaal
                 taal:  lang="en"              klopt niet, de site is Nederlands
                 beschrijving: Engels          Nederlandse zoekers zien Engels
                 tekst: pas na JavaScript      Google leest het traag of niet
                 109 lessen, 8 thema's    ──►  geen eigen adres, dus onvindbaar
```

Al goed: `robots.txt`, `sitemap.xml` (één adres), canonical, deelplaatje (`og-image.png`), https,
www → kaal domein. En er is al een patroon voor losse HTML-pagina's die bij de build ontstaan
(`src/lib/introPage.ts`): dat gebruiken we voor de nieuwe pagina's.

## ⚠️ Eerst beslissen: het slot

Wie via Google binnenkomt, belandt nu op de codepagina. Zonder code is er een proefversie: de
eerste les van elk thema. Een zoeker die een slot ziet, klikt weg, en Google merkt dat.

```
Google ──► landingspagina ──► app ──► 🔒 code?  ──► weg
                                  └──► ?intro  ──► proefversie  ✓
```

**Voorstel:** alle nieuwe pagina's linken naar `vloertaal.nl/?intro` (proefversie zonder
codepagina), en we zeggen er eerlijk bij dat het een bètaversie is. De vraag wanneer het slot er
helemaal af gaat staat los van dit plan, maar SEO levert pas echt op als het slot weg is.

## Voor wie, en waarop ze zoeken

| Wie | Zoekt in | Voorbeelden van zoekvragen |
|---|---|---|
| Leerling | eigen taal | *nauka niderlandzkiego do pracy* (pl), *تعلم الهولندية للعمل* (ar), *вивчити нідерландську для роботи* (uk) |
| Begeleider | Nederlands | *gratis app Nederlands leren werk*, *NT2 werkvloer oefenen*, *taalcoach materiaal laaggeletterd* |
| Werkgever | Nederlands | *Nederlands voor arbeidsmigranten*, *taal op de bouwplaats*, *veiligheidsinstructie Pools personeel* |
| Organisatie | Nederlands | *taalapp statushouders werk*, *gratis taalmateriaal inburgering werk* |

Dit zijn startpunten, geen gemeten zoekvolumes. Search Console laat na een paar weken zien waar we
echt op gevonden worden; daarop sturen we bij.

## De stappen

Elke stap is los af te ronden en op te leveren.

### Stap 1 — Search Console en Bing (Xavier, ±15 min)

- Domein toevoegen in Google Search Console, verifiëren met een TXT-record bij Mijndomein.
- Zelfde voor Bing Webmaster Tools (importeren uit Search Console kan). Bing voedt ook de zoek-
  functie van een aantal AI-assistenten.
- Sitemap indienen.
- **Klaar als:** beide tonen "geverifieerd" en de sitemap is gelezen.

### Stap 2 — De basis van de voorpagina (klein, één commit)

- `lang="nl"` in `index.html`.
- Titel: *Vloertaal – gratis Nederlands leren voor je werk*.
- Beschrijving in het Nederlands, ±150 tekens, met "gratis", "werk" en "eigen taal".
- Korte leesbare tekst in de HTML zelf (zonder JavaScript): wat het is, voor wie, welke talen.
- Gestructureerde gegevens (JSON-LD, een stukje code dat Google vertelt "dit is een gratis
  leerapp"): `WebApplication` met `isAccessibleForFree`, `inLanguage`, `audience`.
- **Klaar als:** de Rich Results Test van Google de gegevens foutloos leest, en `curl` op de
  voorpagina de leesbare tekst toont.

### Stap 3 — Een pagina per hulptaal (de grootste winst)

Tien pagina's, elk volledig in die taal: `/pl`, `/ro`, `/bg`, `/uk`, `/tr`, `/ar`, `/fa`, `/prs`,
`/ti`, `/en`.

- Gemaakt bij de build, zoals de intropagina: gewone HTML, direct leesbaar voor Google.
- Inhoud: wat Vloertaal is, de thema's, een paar voorbeeldwoorden uit de echte lessen, een knop
  die de app opent mét die hulptaal al gekozen.
- `hreflang`-verwijzingen (een label dat Google zegt "deze pagina bestaat ook in het Pools") tussen
  alle taalpagina's en de voorpagina.
- Rechts-naar-links voor Arabisch, Perzisch en Dari.
- Teksten via de bestaande vertaalcontrole (`docs/vertaalcontrole.md`) langs moedertaalsprekers,
  vóór ze live gaan. Een fout in een zoekresultaat valt meer op dan een fout in les 30.
- **Klaar als:** elke pagina in Search Console als "geïndexeerd" staat.

### Stap 4 — Pagina's per sector en voor Werkregels (Nederlands)

`/bouw`, `/logistiek`, `/productie`, `/zorg`, `/horeca`, `/schoonmaak`, `/werkregels`.

- Voor begeleiders en werkgevers: welke situaties de lessen dekken, voorbeeldwoorden en -zinnen uit
  de sector, in welke hulptalen.
- Zelfde bouwwijze als stap 3, inhoud uit `src/content`, zodat de pagina's meegroeien met de app.
- **Klaar als:** geïndexeerd, en in de sitemap.

### Stap 5 — Een pagina voor begeleiders en organisaties

`/voor-begeleiders`: hoe zet je Vloertaal in bij een taalcafé, op een ROC of bij een werkgever.
Gratis, geen account, geen reclame, privacy. Wat de pilot leerde (uit `docs/pilot.md`). Contact
via hoi@vloertaal.nl.

### Stap 6 — Verwijzingen van buitenaf (Xavier, doorlopend)

Links van betrouwbare sites wegen voor Google het zwaarst, en daar brengen ze ook direct de juiste
mensen mee. Kandidaten: taalhuizen en bibliotheken, VluchtelingenWerk, Stichting Lezen & Schrijven,
gemeenten (te beginnen met Maastricht), ROC's, uitzendbureaus met arbeidsmigranten. Eén lijst
bijhouden: wie gevraagd, wanneer, antwoord.

### Stap 7 — Meten en bijsturen (na 4–6 weken)

- Search Console: welke zoekvragen, welke pagina's, welke talen.
- GoatCounter: welke landingspagina's leiden tot een geopende les.
- Bijsturen: teksten van pagina's die wel vertoond maar niet geklikt worden.

## Wat we níét doen

- Geen extra tracking of cookies: GoatCounter blijft de enige teller.
- Geen pagina per les (109 stuks). Te veel onderhoud voor weinig extra; kan later.
- Geen geautomatiseerde vertalingen live zonder controle door een moedertaalspreker.

## Volgorde in één beeld

```
okt/nov ─ 1 Search Console ─ 2 basis ─┬─ 3 taalpagina's (vertaalcontrole loopt mee)
                                      └─ 4 sectorpagina's ─ 5 begeleiders
                                              │
doorlopend ── 6 links van buitenaf ───────────┤
                                              ▼
± half dec ───────────────────────── 7 meten en bijsturen
```
