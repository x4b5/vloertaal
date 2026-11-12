# Het bestuur van Vloertaal

Een klein ondersteunend apparaat van AI-agenten. Zie het als een ministerie: de agenten zijn de
ambtenaren die voorbereiden, schrijven en signaleren. Xavier is de minister die tekent.
Verantwoordelijkheid gaat niet naar een agent.

De regels voor de agenten staan in [`CLAUDE.md`](CLAUDE.md) (de statuten).

## Hoe een week loopt

```
  geplande taak                                              XAVIER, ongeveer 15 minuten
  (1 x per week)                                                        ▲
        │                                                               │ één agenda,
        ▼                                                               │ hooguit 5 beslispunten
  ┌────────────┐  opdracht   ┌──────────────────────────┐          ┌────┴───────┐
  │ SECRETARIS │────────────►│ MARKETING EN COMMUNICATIE│          │ SECRETARIS │
  │ /weekcyclus│             │ schrijft alleen concepten│─────────►│ controleert│
  └────────────┘             └──────────────────────────┘ concepten└────────────┘
        ▲
        │ leest                                              XAVIER: /besluit 1 ja, 2 nee: …
  ┌─────┴──────────────────────────────────────────┐                    │
  │ GEHEUGEN  besluiten · voorstellen · logboeken  │◄───────────────────┘
  └────────────────────────────────────────────────┘      besluiten gaan terug het geheugen in

  Naar buiten gaat alleen wat Xavier zelf plaatst of verstuurt.
```

## Wat jij doet (Xavier)

1. **Lees de agenda** van de week: `agenda/2026-W47.md`, of de pull request "Bestuur 2026-W47".
2. **Beslis** in het gesprek met Claude:
   `/besluit 1 ja, 2 nee: te stellig, 3 aanpassen: korter, 12 minuten`
3. **Plaats of verstuur zelf** wat je goedkeurde. Zeg daarna `/besluit 1 geplaatst`.
4. **Merge** de pull request. Dan staat het geheugen in `main`, voor de volgende week.

Iets meegeven voor de week? `/weekcyclus een taalhuis wil testen, schrijf een mail`.

## De rollen

| Rol | Wat | Waar | Mag |
|---|---|---|---|
| **Secretaris** | zet de week in gang, controleert, schrijft de agenda, legt besluiten vast | `.claude/skills/weekcyclus/` en `.claude/skills/besluit/` | lezen, en schrijven in `bestuur/` |
| **Marketing en communicatie** | LinkedIn-concepten, mailconcepten, presentaties, de contentkalender | `.claude/agents/marketing-communicatie.md` | lezen, en schrijven in `voorstellen/` en het eigen logboek |

### De sloten

| Slot | Houdt tegen | Werkt waar |
|---|---|---|
| **Gereedschap.** De rol marketing en communicatie heeft alleen lezen en schrijven: geen mail, geen internet, geen opdrachten. | plaatsen en versturen | overal (getest op 12 november 2026) |
| **De secretaris** kijkt voor het opleveren of er alleen in `bestuur/` iets veranderd is, en zet de rest terug. | schrijven in de app | overal |
| **De pull request.** Een pull request met een titel die begint met "Bestuur " wordt rood als hij iets buiten `bestuur/` verandert (`.github/workflows/bestuur.yml`). | dat een wijziging in de app ongezien live gaat | op GitHub |
| **Jij.** Er gaat niets naar `main` zonder dat jij mergt. | al het andere | altijd |
| **Het schrijfslot** (`.claude/hooks/alleen-voorstellen.mjs`) weigert elke schrijfactie van de rol buiten `voorstellen/` en het eigen logboek. | schrijven buiten het eigen gebied | alleen op een computer waar deze map als vertrouwd staat. In een cloudsessie slaat Claude Code dit slot over (getest op 12 november 2026). Reken er dus niet op. |

Kwaliteit, groei en data, en de inbox komen later: [`rollen-later.md`](rollen-later.md).

## Het geheugen

| Bestand | Wat |
|---|---|
| [`besluiten.md`](besluiten.md) | wat jij besloot, en waarom |
| [`agenda/`](agenda/) | één agenda per week |
| [`voorstellen/`](voorstellen/) | concepten, elk met een status |
| [`logboek/`](logboek/) | per rol: wat er gedaan is, en de lessen uit jouw besluiten |
| [`contacten.md`](contacten.md) | wie benaderd is, met een code in plaats van een naam |
| [`meting.md`](meting.md) | kost dit tijd of bespaart het tijd? |

## Deze repo is openbaar

Iedereen kan meelezen, ook in de geschiedenis. Daarom: geen namen, geen mailadressen, geen tekst
uit mails of feedback. Wie achter een code in `contacten.md` zit, houd je zelf bij, buiten de
repo. En daarom leest nog geen agent de inbox.

## De geplande taak

De weekcyclus draait vanzelf als er in Claude Code (claude.ai/code) een geplande taak voor deze
repo staat, eens per week, met deze opdracht:

> Draai de weekcyclus van het bestuur van Vloertaal: volg `.claude/skills/weekcyclus/SKILL.md`.

De taak begint elke week met een verse kopie van `main`. Wat niet gemerged is, weet hij niet.
Zonder geplande taak werkt het ook: typ `/weekcyclus` in een sessie.

## Na vier weken

`meting.md` laat zien of dit tijd bespaart, of dat het werk alleen verschuift naar nakijken. Bij
de vierde agenda staat de vraag: doorgaan, stoppen, of een rol erbij.
