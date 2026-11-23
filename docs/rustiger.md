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

- **Kleuren met karakter (4 november 2026):** elke kleur uit Instellingen › Weergave heeft een eigen "doe dit"-kleur (regel 1 blijft: één kleur voor "doe dit", blauw voor "luister", groen en rood voor de uitslag).
  - **Zand:** warm oker met bruin erop, kraft voor wat klaar is in de lesbalk. De rustigste, zonder extra teken.
  - **Haven:** boei-geel met petrol, zeeblauwe luidsprekers, petrol in de lesbalk; een dun golfje boven de onderbalk.
  - **Werkjas:** fel oranje met marineblauw, blauwe luidsprekers als een overall, marine in de lesbalk. (De twee reflecterende strepen op de hoofdknop zijn op 4 november weer weggehaald: ze leidden af.)
  - **Donker:** signaalgeel; een zachte gloed om de hoofdknop en de les van nu.
  - De tekens staan alleen op de rand van een scherm: nooit achter tekst of een oefening, niets om op te tikken, niets beweegt.

## Hoe we meten

- **Voor en na:** schermafbeeldingen van dezelfde schermen.
- **Kleine test met 5 leerlingen:** de tijd tot de eerste tik, fouten, en "hoe druk voelde het" op een schaal van 1 tot 5.
- **Anoniem meetellen:** hoe vaak een les halverwege stopt, voor en na.

## Spelmodus: de andere kant (22 november 2026)

De eigenaar koos voor een spelmodus als tegenhanger van "Rustig scherm", voor leerders die graag met
spelelementen oefenen (`src/lib/play.ts`). De lessen blijven hetzelfde; alleen de beleving verandert:

- **Punten**: 10 voor elk goed antwoord, ×2 vanaf 3 op rij en ×3 vanaf 5 op rij. "Bijna goed" telt de
  helft. Een fout breekt alleen de reeks: er gaan geen punten af. De teller staat bovenin de les; de
  winst zweeft er even boven.
- **Geluid**: een helderder geluidje dat bij elk goed antwoord op rij een toon hoger klinkt, een korte
  fanfare bij 3, 5 en 8 op rij en aan het eind van de les. "Zonder geluid" zet ze uit.
- **Beweging**: verende knoppen, de teller springt, confetti op de uitslag (één keer, ongeveer 2 s).
- **De uitslag** toont de punten van de les en al je punten.

Regels:

- Uit, tenzij de leerder het kiest: bij Instellingen › Lessen › Spelmodus, of op de kaart "Hoe wil je
  oefenen?" die na de eerste les één keer op het beginscherm komt (Met spel / Rustig).
- Nooit samen met Rustig scherm: de spelmodus aanzetten zet Rustig scherm uit, en Rustig scherm aan
  zet de spelmodus uit. Wie Rustig scherm al aan had, krijgt de vraag niet.
- "Minder beweging" op de telefoon stopt alle beweging, ook in de spelmodus; de punten en geluiden
  blijven dan. Niets flitst of knippert, en niets herhaalt zich.

### Meer spel (23 november 2026)

De eigenaar vroeg om "nog iets meer gamification" in de spelmodus:

- **Niveaus** op al je punten: Starter (0), Leerling (150), Collega (400), Vakkracht (800), Ervaren
  (1400), Expert (2200); daarna elke 1000 punten een Expert-ster erbij. Het beginscherm toont je
  niveau en een balk naar het volgende.
- **Doel van vandaag**: 100 punten op een dag, met een groene balk op het beginscherm.
- **Geen fouten**: een les zonder fout geeft 50 punten extra.
- **Mijn gereedschapskist** (Instellingen › Taal en ik): elke les die je met spel afmaakt, legt een
  gereedschap in je kist, 30 in totaal, in een vaste volgorde. Het zijn woorden die al een tekening
  en een vertaling hebben (de hamer, de rolmaat, de waterpas ...), dus de kist leert ook woorden.
- **De uitslag** toont tot vier momenten: geen fouten (+50), een nieuw niveau, het doel van vandaag
  gehaald, en het nieuwe gereedschap met zijn tekening. Bij een nieuw niveau of het dagdoel klinkt na
  de gewone fanfare een tweede, hogere.

Niets om op te tikken erbij: de balken en de momenten zijn alleen om te kijken (max. 3 per scherm).

### Sfeer en juice (23 november 2026)

**Sfeer** is nu één instelling (Instellingen › Lessen › Sfeer) met drie keuzes, in plaats van "Rustig
scherm" en "Spelmodus" apart (`sfeerOf`, `withSfeer` in `src/lib/play.ts`):

- **Kalm**: wat "Rustig scherm: aan" was. Niets beweegt, geen feestjes.
- **Standaard**: de app zoals hij is; staat de telefoon op "minder beweging", dan beweegt er ook niets.
- **Spel**: de spelmodus.

De opgeslagen velden blijven `calm` en `play`, dus oude voortgang leest gewoon door. De kaart na de
eerste les heeft nu "Met spel" en "Standaard".

**Juice** in Spel (de eigenaar: "meer game feel, meer juice, squash and stretch"):

- Een goed antwoord deint als pudding (squash and stretch). Een fout antwoord wiebelt.
- Het stempel slaat neer en veert terug. "Verder" stuitert erin.
- De teller wordt geplet en rekt uit; "+10" rekt mee omhoog. Acht sterretjes schieten uit de teller.
- De voortgangsbalk schiet iets door en veert terug.
- Tegels van een zin landen met een plof. Een ingedrukte knop wordt plat en veert terug.
- Op de uitslag vallen de titel en de kaarten naar binnen en landen. De punten slaan neer en de
  momenten springen op.
- De telefoon trilt kort bij een goed antwoord, iets langer bij 3, 5 en 8 op rij, en dubbel bij een
  fout (waar de telefoon dat kan).

Alles speelt één keer, en alles staat stil bij Kalm en bij "minder beweging" op de telefoon.

