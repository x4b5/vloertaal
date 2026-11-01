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
  - de andere antwoorden worden zachter zodra je kiest.
- **Minder herhaling:**
  - geen label boven de oefening;
  - geen "Goed zo!" bij een goed antwoord, ook niet in Werkregels;
  - goed antwoord met een uitleg (een situatie): alleen de uitleg, want het antwoord staat al groen in de lijst.
  - een goed gebouwde zin: geen vinkje bij de zin, want de feedback eronder heeft er al een;
  - een gebouwde zin: geen melding "Verkeerd getikt: 1" met de doorgestreepte woorden (de fout telt nog wel mee voor de uitslag en de herhaling);
  - de knop Verder toont zijn woord alleen tot je hem één keer gebruikt hebt; daarna alleen de pijl (`src/lib/goKnown.ts`). Een schermlezer hoort het woord altijd. "Controleer" (bij typen) houdt zijn woord.
- **Bovenbalk en onderbalk:**
  - geen logo in de bovenbalk;
  - de onderbalk toont alleen iconen, en alleen het tabblad waar je bent heeft zijn woord eronder (in de hulptaal, in Werkregels in het Nederlands);
  - een schermlezer hoort bij elk tabblad nog steeds de naam.

- **Fase 2 (info-knop en startpagina):**
  - Een ⓘ met een duidelijk label (`src/components/InfoMore.tsx`). Dicht is het één rustige regel; je opent het op dezelfde plek.
  - Achter de ⓘ staan:
    - de juridische regel onder tips ("Over deze tips");
    - de regel boven Werkregels ("Over deze regels");
    - de uitleg bij instellingen ("Meer uitleg");
    - bij Over alles na het eerste stuk ("Lees meer over Vloertaal").
  - **Uitzondering:** op een instellingenpagina met al 3 keuzes (stem, schrijven) blijft de uitleg zichtbaar, vanwege de max-3-regel.
  - Waarschuwingen (zoals bij "Voortgang wissen") en meldingen over wat er net gebeurde blijven altijd zichtbaar.
  - De reeks en de woorden bovenin zijn kleiner en rustiger.

- **Fase 3 ("Rustig scherm", Instellingen › Lessen; `src/lib/calm.ts`):**
  - Drie keuzes:
    - **Zoals je telefoon:** de standaard. Staat de telefoon op "minder beweging", dan gaat het aan.
    - **Aan.**
    - **Uit.**
  - Aan betekent:
    - niets beweegt (`data-calm` op `<html>` zet alle animaties uit, en `stillMotion()` geldt voor beweging uit code);
    - geen feestje voor je reeks na een les;
    - geen reeks en woorden op de startpagina; de lege balk bovenin klapt in.
  - Op de pagina staat een klein voorbeeld van de startpagina dat meteen verandert. Je blijft op de pagina na het kiezen.

- **Lettergrootte in oefeningen:** drie vaste maten en een kleine (`--fs-word` 28 px, `--fs-question` 22 px, `--fs-answer` 18 px, `--fs-small` 16 px), in rem zodat "Tekstgrootte" ze meeschaalt. Arabisch, Farsi, Dari en Tigrinya: antwoorden 2 px groter.
- **Uitleg in Werkregels (keuze B):**
  - Een goed antwoord geeft geen eigen reactie ("Goed. Zo weet …") meer, alleen de uitleg.
  - De uitleg is de kern in één of twee zinnen (`why`). Voorzichtige woorden ("meestal", "in de meeste bedrijven") blijven in beeld.
  - Waar het staat en uitzonderingen staan achter een ⓘ "Meer uitleg" (`whyMore`).
  - Gedaan voor "Ziek zijn": van gemiddeld 30 naar 15 woorden in beeld. De andere onderwerpen volgen na akkoord.

## Hoe we meten

- **Voor en na:** schermafbeeldingen van dezelfde schermen.
- **Kleine test met 5 leerlingen:** de tijd tot de eerste tik, fouten, en "hoe druk voelde het" op een schaal van 1 tot 5.
- **Anoniem meetellen:** hoe vaak een les halverwege stopt, voor en na.
