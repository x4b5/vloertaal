# De toets "Wat ken je al?": hoe hij werkt en wat hij zegt

Voor begeleiders en voor een eventuele evaluatiepartner. **De toets is nog niet nagekeken door
een NT2-docent of een toetsdeskundige.** Lees de uitslag als een aanwijzing, niet als een niveau.

De code staat in `src/content/toets.ts` (de vragen), `src/lib/toets.ts` en `src/lib/toetsState.ts`
(de score) en `src/components/Toets.tsx` (de schermen). De tests staan in `tests/toets.test.ts`.

## In het kort

- Alleen in het spoor **Taal**. Twee momenten: de **instap** (versie A, na de eerste les) en het
  **eind** (versie B, na 28 dagen of na 3 afgeronde onderwerpen). Beide kunnen ook via
  Instellingen › Lessen › Wat ken je al?
- Ongeveer **10 minuten**: **21 vragen** in drie onderdelen, en aan het eind één zin hardop
  zeggen ("Kunt u dat herhalen?"). Dat spreken telt niet mee: de leerling (en de begeleider) hoort
  "Jij toen" en "Jij nu" naast elkaar.
- **Geen cijfer**, geen "geslaagd" of "gezakt", geen ERK-niveau. De uitslag is per onderdeel een
  balk: hoeveel van de 7 vragen de leerling weet, met het gokken eruit gehaald.
- Alles blijft op de telefoon. De app telt alleen dat een toets begon en klaar is (A of B), nooit
  de score.

## De vragen (vorm 2, sinds november 2026)

Per onderdeel 7 vragen: 5 keer kiezen uit 3, en 2 keer maakt de leerling zelf iets.

| Onderdeel | Kiezen uit 3 (5 vragen) | Zelf maken (2 vragen) |
|---|---|---|
| Luisteren | Een zin klinkt (niet te zien). Wat betekent hij? | Een zin klinkt. Bouw hem woord voor woord. |
| Woorden | Een plaatje en de betekenis. Welk Nederlands woord? | Een woord klinkt. Schrijf het. |
| Zinnen | Een collega zegt iets. Wat zeg je terug? | De betekenis staat er. Bouw de Nederlandse zin. |

- **Bouwen** werkt zoals in de les: voor elke plek 3 woorden. Een fout woord schudt en de zin
  wacht. Goed is: hoogstens op één plek fout getikt.
- **Schrijven** werkt zoals in de les, met hetzelfde terugvallen:
  - met het toetsenbord of met lettertegels (zoals de leerling bij Instellingen heeft gekozen);
  - leest de leerling een ander schrift (Arabisch, Tigrinya, Cyrillisch) en koos die niet voor
    "Ik wil ook leren schrijven"? Dan hoort de leerling het woord en kiest het uit 3 geschreven
    woorden. Die vraag telt dan als een keuze uit 3.
  - Anders dan in de les: de eerste onderwerpen krijgen in de toets géén "hoor en kies" in plaats
    van schrijven. Zo krijgt dezelfde leerling bij de instap en het eind dezelfde soort vraag.
- **"Ik weet het niet"** staat onder elke vraag, als kleine link (net als "Ik kan nu niet
  luisteren" in de les). Het is een eerlijk antwoord: het telt niet als fout. De zin bij de eerste
  vraag zegt het ook: "Weet je het niet? Tik dan op 'Ik weet het niet'. Dat is goed."
- Tijdens de toets ziet de leerling niet wat goed of fout is (alleen bij bouwen en schrijven
  schudt een fout woord of een foute letter, zoals in de les).
- Alle woorden en zinnen komen uit de lessen, met een vertaling in alle 13 hulptalen en een
  opname in elke stem. Er zijn dus geen nieuwe zinnen; zie "Wat hij niet zegt".

## Gokken

Bij kiezen uit 3 is een gok één keer op de drie goed. In de oude toets (18 keer kiezen) haalde
iemand die niets wist zo gemiddeld 6 van de 18 (33%).

Nu:

- **Zelf maken** is bijna niet te gokken. Willekeurig tikken geeft een goede zin bij 2 tot 5 op de
  100 keer, een goed geschreven woord (met lettertegels) bij 1 tot 3 op de 100 keer. De test
  rekent dat per vraag uit.
- **"Ik weet het niet"** maakt gokken onnodig.
- **De uitslag haalt het gokken eruit.** Per onderdeel: *goed min de helft van de foute keuzes*,
  nooit lager dan 0. Waarom de helft: wie gokt, kiest twee keer op de drie fout. Voor elke twee
  foute keuzes was er gemiddeld één goede keuze geluk. "Ik weet het niet" en een fout gebouwde
  zin of fout geschreven woord tellen hier niet mee. Het scherm rondt naar beneden af.
- Iemand die alles gokt, krijgt zo gemiddeld ongeveer 5 van de 21 goed (24%), en na de correctie
  bijna 0.

Voorbeeld: Luisteren 5 goed, 2 fout gekozen, 0 keer "Ik weet het niet" → 5 − 1 = **4 van de 7**.
Met 5 goed en 2 keer "Ik weet het niet" → **5 van de 7**.

## Toen en nu: "Meer dan toen" of "Ongeveer gelijk"

Na het eind staat per onderdeel "Jij toen" en "Jij nu", met daaronder één van deze zinnen, en
onder de drie onderdelen samen nog één zin:

- **"Meer dan toen"** alleen als het verschil groter is dan wat gokken kan geven. Dat betekent:
  - minstens **2 vragen meer** (van 7, of van 21 voor alles samen), en
  - meer dan **twee keer de spreiding** die het gokken van beide keren kan geven. Die spreiding
    rekent de app uit met het aantal foute keuzes: veel foute keuzes betekent veel gokken, en dan
    moet het verschil groter zijn.
- **"Ongeveer gelijk"** in alle andere gevallen.
- Is het nu duidelijk minder dan toen, dan staat er geen zin; de balken laten het zien. De toets
  zegt nooit "minder".

Wat dat in de praktijk betekent (7 vragen per onderdeel):

- Een leerling die eerlijk "Ik weet het niet" zegt: **3 vragen meer** in een onderdeel is "Meer dan
  toen". Over de hele toets is 3 van de 21 meer al genoeg.
- Een leerling die veel gokt, moet een groter verschil halen: soms 5 vragen meer, of meer.
- De test laat een leerling die niets bijleerde 1000 keer twee keer de toets doen (alleen het
  gokken verschilt): "Meer dan toen" komt minder dan 5 keer op de 100 voor. Een leerling die van
  2 naar 5 van de 7 per onderdeel gaat, krijgt bij "alles samen" meer dan 9 op de 10 keer "Meer
  dan toen" (en bijna altijd als de leerling eerlijk "Ik weet het niet" zegt).

## A en B zijn even moeilijk

Vraag 1 van A en vraag 1 van B zijn een paar, vraag 2 ook, enzovoort: hetzelfde onderdeel en
hetzelfde soort vraag. A en B hebben geen enkele vraag of fout antwoord gemeen, dus bij het eind
ziet de leerling niets terug van de instap.

Het niveau hangt niet meer aan het onderwerp (vroeger: "A2 = Loon of Verlof"). De test
(`tests/toets.test.ts`, "A and B are as hard as each other") vergelijkt de versies op de taal zelf:

| | A | B | Grens in de test |
|---|---|---|---|
| Woorden in alle vragen | 101 | 100 | hoogstens 10% verschil |
| Letters | 391 | 422 | hoogstens 10% verschil |
| Letters per woord | 3,9 | 4,2 | hoogstens 10% verschil |
| Gemiddeld onderwerp in het lespad (0 = eerste) | 3,7 | 3,5 | hoogstens 1,5 verschil |
| Vragen ("?") bij luisteren en bouwen | 3 | 3 | gelijk |
| Vragen ("?") van de collega in een gesprek | 5 | 4 | hoogstens 1 verschil |

Per paar: een gebouwde zin heeft evenveel woorden, een geschreven woord evenveel letters, een
gehoorde zin hoogstens 2 woorden verschil. B heeft iets langere woorden (bijvoorbeeld
"kleedkamer", "instructie"). Dat is klein, maar het is er.

## Oude uitslagen (vorm 1)

Wie de toets vóór november 2026 deed, heeft een uitslag van vorm 1 op de telefoon: 18 keer kiezen,
6 per onderdeel, zonder "Ik weet het niet".

- Die uitslag blijft werken. Er hoeft niets omgezet te worden: de app leest hem als "alle 18
  vragen waren keuzes, elke fout was een foute keuze" en haalt het gokken er op dezelfde manier
  uit. Daarom kan een oude uitslag nu lager staan dan toen (bijvoorbeeld 2 van 6 goed is wat
  gokken geeft, en staat nu als 0 van 6).
- Toen en nu worden vergeleken als deel van het totaal, dus 6 vragen (oud) naast 7 (nieuw) gaat
  goed. Die vergelijking is wel minder precies dan A en B van dezelfde vorm.
- De korte check van Starten ("Ik ken dit al") werkt voor een oude uitslag zoals altijd (5 van de 6
  goed bij Woorden en Luisteren). Bij vorm 2 is het hetzelfde deel, met het gokken eruit: 6 van
  de 7.
- Een oudere versie van de app die een nieuwe uitslag leest (bijvoorbeeld een kopie van de
  voortgang op een andere telefoon), ziet de dag, de versie en het aantal goed per onderdeel.

## Wat de toets wel zegt

- Of de leerling woorden en zinnen **uit de cursus** herkent en kan maken: luisteren, woorden en
  korte zinnen van de werkvloer.
- Of dat na 4 weken (of 3 onderwerpen) **duidelijk meer** is dan bij de start. "Meer dan toen"
  betekent: dit verschil komt bijna nooit door gokken alleen.
- Hoe de leerling klinkt, toen en nu (de opname, zonder score).

## Wat de toets niet zegt

- **Geen niveau.** Geen A1, A2 of 1F. De toets is niet geijkt en niet nagekeken door een
  NT2-docent.
- **Niet of de leerling nieuwe zinnen begrijpt.** Alle vragen zijn zinnen en woorden uit de lessen.
  De toets meet dus vooral wat de cursus aanbiedt. Wie veel oefent, herkent ook de toetszinnen
  beter.
- **Geen spreken en geen gesprek.** De opname van toen en nu telt niet mee.
- **Niet hoe het op de werkvloer gaat.** Vraag dat de leerling en de collega's.
- **"Ongeveer gelijk" is geen "niets geleerd".** Met 7 vragen per onderdeel ziet de toets alleen
  grote stappen. Een kleinere groei kan er wel zijn.
- **Andere oorzaken** dan gokken (een slechte dag, lawaai, een andere telefoon, een andere
  instelling voor schrijven) rekent de toets niet uit. Daarom ook de ondergrens van 2 vragen.

## Wat er daarna kan komen

- Per onderdeel 1 of 2 vragen met **nieuwe combinaties** van woorden die de leerling al kent (niet
  letterlijk uit de cursus). Dat vraagt nieuwe zinnen, vertalingen in 13 talen en opnames.
- **Spreken meten** in de pilot: de begeleider luistert naar "Jij toen / Jij nu" en scoort 3 punten
  (verstaanbaar? volledig? vloeiend?).
- De begeleiderskaart kan ook "Meer dan toen" of "Ongeveer gelijk" laten zien.
- Laat een NT2-docent of toetsdeskundige de paren A/B nakijken, en meet in de pilot hoe lang de
  toets echt duurt.
