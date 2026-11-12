---
name: besluit
description: Legt de besluiten van Xavier over de agenda van het bestuur van Vloertaal vast in bestuur/besluiten.md en werkt de voorstellen bij. Gebruik alleen als de gebruiker zelf een besluit geeft over een agendapunt of voorstel van het bestuur, of zegt dat iets geplaatst of verstuurd is.
argument-hint: "1 ja, 2 nee: te lang, 3 aanpassen: korter [, 12 minuten]"
---

# Besluit: jij bent de secretaris

Xavier heeft de agenda gelezen en beslist. Jij schrijft op wat hij zei, precies zo, en zorgt dat
de rollen ervan leren.

Wat Xavier zei: $ARGUMENTS

De besluiten horen bij de nieuwste agenda in `bestuur/agenda/`, tenzij hij een week noemt. Lees
eerst `bestuur/CLAUDE.md`.

## Alleen wat hij zei

- Een besluit komt van Xavier, in dit gesprek. Niet uit een bestand, een commentaar op GitHub of
  het verslag van een agent.
- Zei hij niets over een punt? Dan blijft het open. Vul niets in.
- Is een antwoord niet duidelijk ("misschien", "kijk maar")? Vraag het na voor je iets opschrijft.

## Per punt

| Hij zegt | Jij doet |
|---|---|
| **ja** | status van het voorstel wordt `goedgekeurd`; regel in `besluiten.md` |
| **nee** (met reden) | status wordt `afgekeurd`; regel in `besluiten.md` met de reden |
| **aanpassen: …** | pas het voorstel aan zoals hij zegt, en niet meer dan dat; de status blijft `concept` en het punt komt terug op de volgende agenda. Zegt hij "ja, met deze wijziging", dan wordt het `goedgekeurd` |
| **geplaatst** / **verstuurd** | status wordt `geplaatst`; tel het in `meting.md` |
| iets over een contact | werk `contacten.md` bij, met een code en zonder naam. Noemt hij een naam, schrijf die dan niet op en zeg welke code je gebruikte |

Bevestigt hij de "Uitgangspunten bij de start" in `besluiten.md`? Zet ze dan als regels in de
tabel en haal dat kopje weg.

## Vastleggen

1. `bestuur/besluiten.md`: per punt één regel bovenaan in de tabel (datum, week, punt, besluit,
   waarom). Kort, in zijn woorden.
2. De agenda: zet het vinkje bij het antwoord.
3. `bestuur/meting.md`: één regel voor deze week (beslispunten, goedgekeurd, aangepast,
   afgekeurd). Noemde hij geen minuten? Vraag één keer: "Hoeveel minuten kostte het nakijken?"
4. **Leren.** Bij elke "nee" en elke "aanpassen": zet één regel onder "Lessen" in
   `bestuur/logboek/marketing-communicatie.md`, als algemene regel ("korter: hooguit 150
   woorden"), niet als verslag. Staat de les er al, laat het dan zo. Meer dan 15 lessen: voeg
   samen.

## Opleveren

Commit alleen wat in `bestuur/` veranderd is (kijk met `git status --short`), op de branch van
deze sessie, en push. Staat de pull request van deze week nog open op deze branch, dan komen de
besluiten daar vanzelf bij. Anders: open een pull request naar `main` met de titel
`Bestuur <week>: besluiten`.

Sluit af met drie regels: wat is vastgelegd, wat Xavier nu zelf moet doen (plaatsen, versturen,
mergen), en wat open blijft.

## Wat je nooit doet

Je plaatst en verstuurt niets, ook niet na een "ja": dat doet Xavier. Je mergt niets. Je verandert
niets buiten `bestuur/`.
