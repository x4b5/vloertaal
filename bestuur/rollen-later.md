# Rollen voor later

Deze rollen bestaan nog niet. Een rol komt er pas bij als:

1. Xavier die taak **nu zelf doet**, en
2. hij **elke week terugkomt**, en
3. de rollen die er al zijn een paar weken voorspelbaar goed werken (`meting.md`).

Een rol erbij is een besluit van Xavier, en staat dan in `besluiten.md`.

## Kwaliteit

**Doet:** controleert lessen op consistentie, taalniveau en of de teksten over arbeidsrecht
kloppen met de bronnen. Voor vertalingen is het alleen een eerste filter.

**Is er al, zonder agent:** `npm run taal` (taalniveau, `docs/taal-a2.md`), de tests op
volledigheid van vertalingen, `docs/juridische-check.md`, `docs/vertaalcontrole.md` en de lijsten
voor nakijkers (`npm run review:export`, `docs/nakijken.md`).

**Grens:** deze rol vervangt geen moedertaalspreker en geen jurist. Wat hij goedkeurt, is nog
steeds "niet nagekeken". Hij schrijft bevindingen, hij verandert geen lessen.

**Nodig om te starten:** niets extra's. Alleen lezen in `src/content/` en `src/i18n/`.

## Groei en data

**Doet:** leest de tellingen, vat samen, en laat zien bij welke lessen mensen stoppen.

**Is er al:** de app telt met GoatCounter, zonder cookies en zonder iets over de leerling
(`docs/privacy.md`): les gestart, gestopt (in welk kwart), afgerond, de oefendagen 1, 2, 7, 14 en
28, en het gezichtje bij "Wat vind je van Vloertaal?". De weekregel met zes getallen staat in
`docs/pilot.md`.

**Grens:** alleen aantallen. Vrije feedbackteksten komen niet in deze repo.

**Nodig om te starten:** een manier om de getallen van GoatCounter te lezen (een export, of de
getallen die Xavier zelf plakt). Dat is een besluit.

## Communicatie: de inbox

**Doet:** sorteert de mail aan hoi@vloertaal.nl en schrijft conceptantwoorden.

**Waarom nog niet:** mails bevatten namen en verhalen van mensen, en deze repo is openbaar. Een
agent die de inbox leest, mag daar niets van in de repo schrijven, ook niet in een logboek.

**Nodig om te starten:** een plek die niet openbaar is. Bijvoorbeeld: conceptantwoorden blijven
als concept in de mailbox zelf staan, en in de repo komt alleen een aantal ("3 mails van docenten,
2 concepten klaar"). Of een aparte, besloten repo voor het bestuur. Dat is een besluit.
