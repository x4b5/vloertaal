# Vloertaal rustiger

Doel: minder tegelijk op het scherm, zodat de aandacht naar het leren gaat. Het onderzoek en het
hele plan staan in de pagina "Vloertaal rustiger" (artifact, 1 november 2026). Hier staan de
regels die we in de code aanhouden, en wat er al gedaan is.

## Regels

1. **Elke kleur heeft één taak.** Geel betekent "doe dit": de knop Verder, de volgende les, wat je
   gekozen hebt. Blauw betekent "luister". Groen en rood geven de uitslag. De rest is warm en
   neutraal: zand, papier en warm donkerbruin.
2. **Wat aandacht vraagt, laat de rest zachter worden.** Wil iets opvallen, maak dan de rest
   zachter in plaats van het ene harder. Voorbeeld: kies je een antwoord, dan krijgen de andere
   antwoorden een lichtere rand en tekst. Na Check vervagen ze zoals eerder (`.faded`).
3. **Randen zijn zacht, behalve wat gekozen of aan is.** `--edge` is een zachte warme rand
   (3,2:1 op de achtergrond). `--edge-strong` (inkt) is voor wat gekozen is, wat focus heeft of
   wat aan staat. De gele knoppen houden hun donkere rand.
4. **Geen dubbele signalen.** Een nummer voor een antwoord staat alleen op een scherm met
   toetsenbord. Een luidspreker bij een antwoord is een icoon zonder vak.
5. **Een info-knop alleen voor bijzaken.** De opdracht, de vertaling en de feedback staan altijd
   in beeld.

## Gedaan

- **Fase 1 (kleuren en randen):**
  - warmer palet;
  - zachte randen;
  - gekozen of aan: sterke rand;
  - geen nummers op touchscreens;
  - lichtere luidsprekers bij antwoorden;
  - rustiger label boven de oefening;
  - de andere antwoorden worden zachter zodra je kiest.
- **Minder herhaling:**
  - geen label boven de oefening;
  - geen "Goed zo!" bij een goed antwoord.
- **Bovenbalk en onderbalk:**
  - geen logo in de bovenbalk;
  - de onderbalk toont alleen iconen, en alleen het tabblad waar je bent heeft zijn woord eronder (in de hulptaal, in Werkregels in het Nederlands);
  - een schermlezer hoort bij elk tabblad nog steeds de naam.

## Volgende stappen (met de keuzes van de eigenaar)

- **Fase 2:**
  - één label boven de oefening;
  - rustiger startpagina: de ballon van Bram alleen de eerste dagen, de reeks en de woorden klein in één regel;
  - een info-knop voor de juridische regel onder tips, uitleg in Instellingen en de lange tekst bij Over.
- **Fase 3:** "Rustig scherm" bij Instellingen › Les: geen animaties, geen feestje, geen reeks op de
  startpagina. Staat de telefoon op "minder beweging", dan gaat het vanzelf aan.

## Hoe we meten

- **Voor en na:** schermafbeeldingen van dezelfde schermen.
- **Kleine test met 5 leerlingen:** de tijd tot de eerste tik, fouten, en "hoe druk voelde het" op een schaal van 1 tot 5.
- **Anoniem meetellen:** hoe vaak een les halverwege stopt, voor en na.
