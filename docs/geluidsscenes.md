# Geluidsscènes: opnameplan (Werkvloer-luisteren)

*Fase 2, stap 2.3. Opgesteld 30 oktober 2026. Voor de eigenaar.*

Een leerling hoort op de werkvloer geen nette lesstem. Een collega praat op gewoon tempo, er rijdt
een heftruck, er draait een machine. In deze stap komen per sector **drie korte geluidsscènes**:
een instructie of een kort gesprek, met omgevingsgeluid erachter. Daarna 1 of 2 vragen over de kern
(wat moet je doen, hoe laat, welk nummer) en één zin uitleg.

- **De teksten** staan in [`src/content/geluidsscenes.ts`](../src/content/geluidsscenes.ts). Ze
  worden nog nergens in de app getoond: het scherm komt pas als de opnames er zijn.
- **De controle** staat in [`tests/geluidsscenes.test.ts`](../tests/geluidsscenes.test.ts): 3 scènes
  per sector, 3 tot 6 beurten, 25 tot 60 woorden, zinnen van hoogstens 12 woorden, de A2-regels
  van [`taal-a2.md`](taal-a2.md), alleen woorden uit de cursus (of een korte lijst gewone woorden),
  3 opties met 1 goed antwoord, en antwoorden die niet door hun lengte of plek verraden worden.
  "Hè" staat in hoogstens een derde van de scènes, zodat het geen tic wordt.
- **De zinnen voor de opname** maak je met `npm run scenes:lines` (zie hieronder).

## Sprekers en stemmen

Dezelfde personages en stemmen als in de lessen (`src/lib/voices.ts`):

| Personage | Rol in de scènes | Stem (ElevenLabs) |
|---|---|---|
| Henk | leidinggevende, ploegleider | Daniel |
| Jada | collega, soms leidinggevende | Noa |
| Bram | collega | Thijmen |
| Amina | collega (kas) | Ariël |
| Leerling ("ik") | zegt soms kort iets terug | Thijmen **én** Ariël |

De leerling praat in de app met de stem van Bram (man) of Amina (vrouw of niets gekozen). Daarom
wordt een beurt van de leerling in beide stemmen opgenomen, en spreken in een scène met de
leerling alleen Henk en Jada. Zo hoort niemand zijn eigen stem als collega. Een scène met de
leerling krijgt dus twee mixen (`.thijmen.mp3` en `.ariel.mp3`); een scène zonder leerling één.

## Overzicht

"Na" is het onderwerp (unit) waarna de scène past: het sectoronderwerp, of een onderwerp uit de
tweede helft van het pad. De woorden zijn dan bekend. "Woorden" telt alleen de gesproken tekst.

| # | Id | Sector | Titel | Na | Sprekers | Woorden | Geluid | ⚖️ |
|---|---|---|---|---|---|---|---|---|
| 1 | `g.bouw.steiger` | Bouw | Op de steiger | `u.build` | Henk, leerling | 31 | midden | ⚖️ |
| 2 | `g.bouw.beton` | Bouw | Het beton is nat | `u.build` | Bram, Jada | 34 | zacht |  |
| 3 | `g.bouw.last` | Bouw | Last boven je hoofd | `u.build` | Henk, leerling | 29 | midden | ⚖️ |
| 4 | `g.techniek.slijpen` | Techniek | Slijpen in de werkplaats | `u.tech` | Henk, leerling | 29 | midden | ⚖️ |
| 5 | `g.techniek.stroom` | Techniek | Staat er stroom op? | `u.tech` | Jada, leerling | 30 | zacht | ⚖️ |
| 6 | `g.techniek.werkbon` | Techniek | Klopt de werkbon? | `u.finish` | Henk, leerling | 27 | zacht |  |
| 7 | `g.garage.band` | Garage | Een lekke band | `u.garage` | Henk, leerling | 28 | midden |  |
| 8 | `g.garage.klant` | Garage | Eerst moet de klant akkoord zijn | `u.garage` | Jada, leerling | 36 | zacht |  |
| 9 | `g.garage.proefrit` | Garage | De proefrit | `u.garage` | Henk, leerling | 29 | midden | ⚖️ |
| 10 | `g.productie.storing` | Productie | Storing aan de band | `u.factory` | Henk, leerling | 35 | midden | ⚖️ |
| 11 | `g.productie.etiket` | Productie | Het etiket klopt niet | `u.factory` | Jada, Bram | 34 | zacht |  |
| 12 | `g.productie.dienst` | Productie | Je dienst aan band twee | `u.numbers` | Henk, leerling | 36 | midden |  |
| 13 | `g.logistiek.heftruck` | Logistiek | De heftruck komt eraan | `u.warehouse` | Jada, leerling | 29 | midden | ⚖️ |
| 14 | `g.logistiek.scanner` | Logistiek | Waar is de scanner? | `u.warehouse` | Bram, Jada | 33 | zacht |  |
| 15 | `g.logistiek.extra` | Logistiek | Een extra dienst | `u.warehouse` | Henk, leerling | 30 | zacht |  |
| 16 | `g.tuinbouw.bespoten` | Tuinbouw | Kas drie is bespoten | `u.kas` | Henk, leerling | 27 | zacht | ⚖️ |
| 17 | `g.tuinbouw.oogst` | Tuinbouw | Hoeveel rijen? | `u.kas` | Amina, Bram | 32 | zacht |  |
| 18 | `g.tuinbouw.hitte` | Tuinbouw | Warm in de kas | `u.kas` | Henk, leerling | 31 | midden | ⚖️ |
| 19 | `g.zorg.gevallen` | Zorg | Mevrouw is gevallen | `u.care` | Jada, leerling | 29 | zacht | ⚖️ |
| 20 | `g.zorg.pillen` | Zorg | De pillen | `u.care` | Jada, leerling | 34 | zacht | ⚖️ |
| 21 | `g.zorg.ochtend` | Zorg | De ochtend | `u.care` | Jada, leerling | 36 | zacht |  |
| 22 | `g.horeca.allergie` | Horeca | Een allergie | `u.horeca` | Jada, leerling | 32 | midden | ⚖️ |
| 23 | `g.horeca.koelcel` | Horeca | In de koelcel | `u.horeca` | Henk, leerling | 29 | zacht | ⚖️ |
| 24 | `g.horeca.rekening` | Horeca | De rekening | `u.horeca` | Bram, Jada | 33 | midden |  |
| 25 | `g.schoonmaak.glad` | Schoonmaak | De vloer is glad | `u.clean` | Jada, leerling | 30 | zacht | ⚖️ |
| 26 | `g.schoonmaak.mengen` | Schoonmaak | Niet mengen | `u.clean` | Henk, leerling | 33 | zacht | ⚖️ |
| 27 | `g.schoonmaak.klaar` | Schoonmaak | Bijna klaar | `u.finish` | Jada, leerling | 29 | zacht |  |
| 28 | `g.winkel.datum` | Winkel | Over de datum | `u.shop` | Henk, leerling | 34 | zacht | ⚖️ |
| 29 | `g.winkel.klant` | Winkel | Een klant wil rijst | `u.shop` | Jada, leerling | 29 | zacht |  |
| 30 | `g.winkel.kassa` | Winkel | Op de kassa | `u.shop` | Henk, leerling | 37 | midden | ⚖️ |

## De scènes

### Bouw

#### 1. Op de steiger ⚖️ · `g.bouw.steiger`

Na `u.build`. Geluid (midden, -18 dB): Bouwplaats buiten: wind, in de verte een boor en een hamer, af en toe een kraan die piept.

| Clip | Stem | Tekst |
|---|---|---|
| `g.bouw.steiger.1` | Henk (Daniel) | Goedemorgen. Jij gaat vandaag mee de steiger op, hè. |
| `g.bouw.steiger.2` | Henk (Daniel) | Eerst je valbeveiliging. Zonder ga je niet naar boven. |
| `g.bouw.steiger.3` | Leerling (Thijmen én Ariël) | Oké. Waar ligt die? |
| `g.bouw.steiger.4` | Henk (Daniel) | In de bus, achterin. Om half acht beginnen we. |

- **Wat moet je doen voor je naar boven gaat?** De ladder bij de steiger zetten. · **Je valbeveiliging dragen.** ✔ · Je hamer uit de bus pakken.  
  Uitleg: Henk zegt: zonder valbeveiliging ga je niet naar boven. *(Henk says: without fall protection you do not go up.)*
- **Hoe laat beginnen jullie?** **Om half acht.** ✔ · Om zeven uur. · Om half negen.  
  Uitleg: Henk zegt: om half acht beginnen we. *(Henk says: we start at half past seven.)*

#### 2. Het beton is nat · `g.bouw.beton`

Na `u.build`. Geluid (zacht, -24 dB): Bouwplaats: een betonmolen draait ver weg, vogels, een radio heel zacht.

| Clip | Stem | Tekst |
|---|---|---|
| `g.bouw.beton.1` | Bram (Thijmen) | Hé, loop daar even niet. Het beton is nog nat. |
| `g.bouw.beton.2` | Jada (Noa) | Oké. Hoe lang nog? |
| `g.bouw.beton.3` | Bram (Thijmen) | Tot morgen. Morgen om zeven uur kun je erop. |
| `g.bouw.beton.4` | Bram (Thijmen) | Pak jij de boor even? Die ligt links bij de ladder. |

- **Waar ligt de boor?** Rechts bij de steiger. · In de bus, achterin. · **Links bij de ladder.** ✔  
  Uitleg: Bram zegt: de boor ligt links bij de ladder. *(Bram says: the drill is on the left, by the ladder.)*
- **Wanneer kun je op het beton lopen?** Vandaag om vier uur. · **Morgen om zeven uur.** ✔ · Over een half uur.  
  Uitleg: Het beton is pas morgen om zeven uur droog. *(The concrete is only dry tomorrow at seven.)*

#### 3. Last boven je hoofd ⚖️ · `g.bouw.last`

Na `u.build`. Geluid (midden, -18 dB): Bouwplaats: een kraan zoemt en piept, een ketting rammelt, wind.

| Clip | Stem | Tekst |
|---|---|---|
| `g.bouw.last.1` | Henk (Daniel) | Stop! Pas op, de kraan komt met een last. |
| `g.bouw.last.2` | Henk (Daniel) | Ga even bij de bus staan. Tien meter weg. |
| `g.bouw.last.3` | Leerling (Thijmen én Ariël) | Oké. Hoe lang duurt het? |
| `g.bouw.last.4` | Henk (Daniel) | Vijf minuten. Ik roep je wel. |

- **Wat moet je doen?** De kraan even helpen. · Naar het dak gaan. · **Wachten bij de bus.** ✔  
  Uitleg: Je loopt of staat niet onder een last van de kraan. *(You do not walk or stand under a load from the crane.)*
- **Hoe lang moet je wachten?** Tien minuten. · **Vijf minuten.** ✔ · Een half uur.  
  Uitleg: Henk zegt: vijf minuten, en tien meter weg. *(Henk says: five minutes, and ten metres away.)*

### Techniek

#### 4. Slijpen in de werkplaats ⚖️ · `g.techniek.slijpen`

Na `u.tech`. Geluid (midden, -18 dB): Metaalwerkplaats: een slijpmachine ver weg, vonken sissen, een compressor slaat aan.

| Clip | Stem | Tekst |
|---|---|---|
| `g.techniek.slijpen.1` | Henk (Daniel) | Ga jij zo even slijpen? Die tien stukken hier. |
| `g.techniek.slijpen.2` | Henk (Daniel) | Draag je bril en je gehoorbescherming. Er komen veel vonken. |
| `g.techniek.slijpen.3` | Leerling (Thijmen én Ariël) | Oké. Waar ligt het gereedschap? |
| `g.techniek.slijpen.4` | Henk (Daniel) | Rechts, in de grote kast. |

- **Wat draag je bij het slijpen?** Handschoenen en een hesje. · Een helm en een hesje. · **Bril en gehoorbescherming.** ✔  
  Uitleg: De bril is voor je ogen, de gehoorbescherming voor je oren. *(The glasses are for your eyes, the ear protection for your ears.)*
- **Hoeveel stukken moet je slijpen?** Twee. · Twaalf. · **Tien.** ✔  
  Uitleg: Henk zegt: die tien stukken hier. *(Henk says: those ten pieces here.)*

#### 5. Staat er stroom op? ⚖️ · `g.techniek.stroom`

Na `u.tech`. Geluid (zacht, -24 dB): Gebouw binnen: lampen zoemen zacht, ver weg een boor, voetstappen in een gang.

| Clip | Stem | Tekst |
|---|---|---|
| `g.techniek.stroom.1` | Jada (Noa) | Kun je die lamp in gang twee even vervangen? |
| `g.techniek.stroom.2` | Leerling (Thijmen én Ariël) | Staat er nog stroom op? |
| `g.techniek.stroom.3` | Jada (Noa) | Ja. Wacht even op de elektricien. Hij komt om tien uur. |
| `g.techniek.stroom.4` | Jada (Noa) | Eerst moet het spanningsloos zijn. |

- **Wat doe je nu?** **Je wacht op de elektricien.** ✔ · Je vervangt de lamp meteen. · Je pakt een nieuwe kabel.  
  Uitleg: Je werkt pas aan een lamp als de stroom eraf is. *(You only work on a lamp when the power is off.)*
- **Hoe laat komt de elektricien?** Om twee uur. · **Om tien uur.** ✔ · Om twaalf uur.  
  Uitleg: Jada zegt: hij komt om tien uur. *(Jada says: he comes at ten.)*

#### 6. Klopt de werkbon? · `g.techniek.werkbon`

Na `u.finish`. Geluid (zacht, -24 dB): Werkplaats: een radio zacht, iemand legt gereedschap neer, een ventilator.

| Clip | Stem | Tekst |
|---|---|---|
| `g.techniek.werkbon.1` | Henk (Daniel) | Klopt het aantal op de werkbon? |
| `g.techniek.werkbon.2` | Leerling (Thijmen én Ariël) | Nee. Ik heb acht kabels, geen twaalf. |
| `g.techniek.werkbon.3` | Henk (Daniel) | Oké, schrijf acht op. Ik bestel er vier bij. |
| `g.techniek.werkbon.4` | Henk (Daniel) | En zet je handtekening onderaan. |

- **Hoeveel kabels heb je?** Twaalf. · **Acht.** ✔ · Vier.  
  Uitleg: Er staan er twaalf op de werkbon, maar je hebt er acht. *(The work order says twelve, but you have eight.)*
- **Wat moet je nog doen?** Vier kabels bestellen. · De werkbon opnieuw lezen. · **Je handtekening zetten.** ✔  
  Uitleg: Henk bestelt de kabels; jij zet je handtekening. *(Henk orders the cables; you sign.)*

### Garage

#### 7. Een lekke band · `g.garage.band`

Na `u.garage`. Geluid (midden, -18 dB): Garage: een luchtsleutel ratelt kort, een compressor, een radio zacht.

| Clip | Stem | Tekst |
|---|---|---|
| `g.garage.band.1` | Henk (Daniel) | Die blauwe auto op de hefbrug, die band is lek. |
| `g.garage.band.2` | Henk (Daniel) | Wissel jij hem even? De banden liggen achterin. |
| `g.garage.band.3` | Leerling (Thijmen én Ariël) | Oké. Hoeveel banden? |
| `g.garage.band.4` | Henk (Daniel) | Eén. De klant komt om vier uur. |

- **Wat moet je doen?** De olie wisselen. · **Een band wisselen.** ✔ · Een proefrit maken.  
  Uitleg: De band van de blauwe auto is lek. *(The tyre of the blue car is flat.)*
- **Hoe laat komt de klant?** **Om vier uur.** ✔ · Om één uur. · Om vijf uur.  
  Uitleg: Henk zegt: de klant komt om vier uur. *(Henk says: the customer comes at four.)*

#### 8. Eerst moet de klant akkoord zijn · `g.garage.klant`

Na `u.garage`. Geluid (zacht, -24 dB): Garage: een auto rijdt langzaam binnen, gereedschap op een kar, een deur.

| Clip | Stem | Tekst |
|---|---|---|
| `g.garage.klant.1` | Jada (Noa) | De remmen van deze auto zijn ook slecht. |
| `g.garage.klant.2` | Leerling (Thijmen én Ariël) | Doe ik die meteen? |
| `g.garage.klant.3` | Jada (Noa) | Nee, de klant moet eerst akkoord zijn met de kosten. |
| `g.garage.klant.4` | Jada (Noa) | Het is driehonderd euro. Vraag het even aan de chef. Hij belt de klant. |

- **Waarom wacht je?** De monteur is nog in de pauze. · Het onderdeel is er nog niet. · **De klant moet eerst akkoord zijn.** ✔  
  Uitleg: Extra werk doe je pas als de klant akkoord is. *(You only do extra work when the customer agrees.)*
- **Wat kosten de remmen?** Tweehonderd euro. · Dertig euro. · **Driehonderd euro.** ✔  
  Uitleg: Jada zegt: het is driehonderd euro. *(Jada says: it is three hundred euros.)*

#### 9. De proefrit ⚖️ · `g.garage.proefrit`

Na `u.garage`. Geluid (midden, -18 dB): Garage: een motor loopt stationair, een hefbrug zoemt, verderop een luchtsleutel.

| Clip | Stem | Tekst |
|---|---|---|
| `g.garage.proefrit.1` | Henk (Daniel) | Ik ben klaar met de accu. Maak jij even een proefrit? |
| `g.garage.proefrit.2` | Leerling (Thijmen én Ariël) | Ik heb nog geen rijbewijs. |
| `g.garage.proefrit.3` | Henk (Daniel) | O, oké. Dan doe ik het. |
| `g.garage.proefrit.4` | Henk (Daniel) | Pak jij de olie voor auto drie? |

- **Wie maakt de proefrit?** Jij maakt hem. · De klant maakt hem. · **Henk maakt hem.** ✔  
  Uitleg: Een proefrit op de weg maak je alleen met een rijbewijs. *(You only take a test drive on the road with a driving licence.)*
- **Voor welke auto is de olie?** **Auto drie.** ✔ · Auto twee. · Auto tien.  
  Uitleg: Henk zegt: de olie voor auto drie. *(Henk says: the oil for car three.)*

### Productie

#### 10. Storing aan de band ⚖️ · `g.productie.storing`

Na `u.factory`. Geluid (midden, -18 dB): Fabriekshal: machines draaien gelijkmatig, een alarm piept kort, een lopende band ratelt.

| Clip | Stem | Tekst |
|---|---|---|
| `g.productie.storing.1` | Henk (Daniel) | De band staat stil. Er is een storing bij machine vier. |
| `g.productie.storing.2` | Henk (Daniel) | Niet zelf repareren, hè. Ik bel de monteur. |
| `g.productie.storing.3` | Leerling (Thijmen én Ariël) | Oké. Wat doe ik nu? |
| `g.productie.storing.4` | Henk (Daniel) | Pak even de producten in. Over twintig minuten draait hij weer. |

- **Wat doe je nu?** De machine repareren. · **Producten inpakken.** ✔ · De monteur bellen.  
  Uitleg: Een storing repareer je niet zelf: dat doet de monteur. *(You do not repair a breakdown yourself: the mechanic does that.)*
- **Bij welke machine is de storing?** Bij machine twee. · Bij machine tien. · **Bij machine vier.** ✔  
  Uitleg: Henk zegt: een storing bij machine vier. *(Henk says: a breakdown at machine four.)*

#### 11. Het etiket klopt niet · `g.productie.etiket`

Na `u.factory`. Geluid (zacht, -24 dB): Productiehal: een lopende band, een machine sist zacht, stemmen ver weg.

| Clip | Stem | Tekst |
|---|---|---|
| `g.productie.etiket.1` | Jada (Noa) | Kijk even. Dit etiket zit scheef. |
| `g.productie.etiket.2` | Bram (Thijmen) | Ja, en de doos is beschadigd. |
| `g.productie.etiket.3` | Jada (Noa) | Leg hem maar apart. Die keuren we af. |
| `g.productie.etiket.4` | Bram (Thijmen) | Oké. Dat is de derde vandaag, hè. |
| `g.productie.etiket.5` | Jada (Noa) | Ja. Ik zet het op de lijst. |

- **Wat doen ze met de doos?** **Ze leggen hem apart.** ✔ · Ze sturen hem naar de klant. · Ze pakken hem opnieuw in.  
  Uitleg: Een beschadigd product leg je apart en keur je af. *(You put a damaged product aside and reject it.)*
- **Hoeveel slechte dozen zijn er vandaag?** Twee. · **Drie.** ✔ · Vier.  
  Uitleg: Bram zegt: dat is de derde vandaag. *(Bram says: that is the third one today.)*

#### 12. Je dienst aan band twee · `g.productie.dienst`

Na `u.numbers`. Geluid (midden, -18 dB): Fabriekshal: machines draaien, af en toe sist een pers.

| Clip | Stem | Tekst |
|---|---|---|
| `g.productie.dienst.1` | Henk (Daniel) | Goedemiddag. Jij staat vandaag aan band twee. |
| `g.productie.dienst.2` | Henk (Daniel) | De pauze is om kwart over zes. Die duurt een half uur. |
| `g.productie.dienst.3` | Leerling (Thijmen én Ariël) | Oké. En hoe laat ben ik klaar? |
| `g.productie.dienst.4` | Henk (Daniel) | Om tien uur. Dan meld je je af bij mij. |

- **Hoe laat is de pauze?** Om kwart voor zes. · Om half zeven. · **Om kwart over zes.** ✔  
  Uitleg: Henk zegt: de pauze is om kwart over zes. *(Henk says: the break is at quarter past six.)*
- **Wat doe je om tien uur?** **Je meldt je af bij Henk.** ✔ · Je gaat naar band twee. · Je begint met je pauze.  
  Uitleg: Om tien uur ben je klaar en meld je je af. *(At ten you are done and you sign off.)*

### Logistiek

#### 13. De heftruck komt eraan ⚖️ · `g.logistiek.heftruck`

Na `u.warehouse`. Geluid (midden, -18 dB): Magazijn: een heftruck piept achteruit, ver weg pallets die neergezet worden, een scanner piept.

| Clip | Stem | Tekst |
|---|---|---|
| `g.logistiek.heftruck.1` | Jada (Noa) | Pas op, de heftruck komt eraan. Even stoppen. |
| `g.logistiek.heftruck.2` | Jada (Noa) | Oké, loop maar. Pallet twaalf moet naar rechts, bij de stelling. |
| `g.logistiek.heftruck.3` | Leerling (Thijmen én Ariël) | Rechts? Bij stelling vier? |
| `g.logistiek.heftruck.4` | Jada (Noa) | Ja. En til met je benen. |

- **Waar moet pallet twaalf heen?** Naar links, bij de deur. · **Naar rechts, bij de stelling.** ✔ · Naar boven, bij de scanner.  
  Uitleg: Jada zegt: naar rechts, bij stelling vier. *(Jada says: to the right, by rack four.)*
- **Wat doe je als de heftruck komt?** Je loopt snel door. · Je roept naar hem. · **Je stopt even.** ✔  
  Uitleg: Je wacht tot de heftruck weg is; dan loop je verder. *(You wait until the forklift has gone; then you walk on.)*

#### 14. Waar is de scanner? · `g.logistiek.scanner`

Na `u.warehouse`. Geluid (zacht, -24 dB): Magazijn: een roldeur gaat open, een kar rolt voorbij, scanners piepen zacht.

| Clip | Stem | Tekst |
|---|---|---|
| `g.logistiek.scanner.1` | Bram (Thijmen) | Hé Jada, waar is de scanner? Ik heb hem nodig. |
| `g.logistiek.scanner.2` | Jada (Noa) | Die ligt op de kar, bij gang drie. |
| `g.logistiek.scanner.3` | Bram (Thijmen) | Oké. Hoeveel dozen moeten er nog weg? |
| `g.logistiek.scanner.4` | Jada (Noa) | Nog veertig. De vrachtwagen komt om twee uur. |

- **Waar ligt de scanner?** Op de pallet, bij gang twee. · **Op de kar, bij gang drie.** ✔ · In de stelling, boven.  
  Uitleg: Jada zegt: op de kar, bij gang drie. *(Jada says: on the trolley, by aisle three.)*
- **Hoe laat komt de vrachtwagen?** Om twaalf uur. · Om drie uur. · **Om twee uur.** ✔  
  Uitleg: Jada zegt: de vrachtwagen komt om twee uur. *(Jada says: the lorry comes at two.)*

#### 15. Een extra dienst · `g.logistiek.extra`

Na `u.warehouse`. Geluid (zacht, -24 dB): Magazijn: heftrucks ver weg, een kar rolt voorbij.

| Clip | Stem | Tekst |
|---|---|---|
| `g.logistiek.extra.1` | Henk (Daniel) | Hé, kun je zaterdag een extra dienst draaien? |
| `g.logistiek.extra.2` | Leerling (Thijmen én Ariël) | Hoe laat? |
| `g.logistiek.extra.3` | Henk (Daniel) | Van zes tot twee. Het is erg druk, hè. |
| `g.logistiek.extra.4` | Leerling (Thijmen én Ariël) | Oké, dat is goed. |
| `g.logistiek.extra.5` | Henk (Daniel) | Top. Ik zet het in de app. |

- **Wanneer is de extra dienst?** **Zaterdag van zes tot twee.** ✔ · Zondag van zes tot twee. · Zaterdag van twee tot zes.  
  Uitleg: Henk zegt: zaterdag, van zes tot twee. *(Henk says: Saturday, from six to two.)*
- **Waar staat de dienst straks?** Op de werkbon. · **In de app.** ✔ · In de mail.  
  Uitleg: Henk zet de extra dienst in de app. *(Henk puts the extra shift in the app.)*

### Tuinbouw

#### 16. Kas drie is bespoten ⚖️ · `g.tuinbouw.bespoten`

Na `u.kas`. Geluid (zacht, -24 dB): Kas: ventilatoren zoemen, water druppelt, ver weg rolt een plukkar.

| Clip | Stem | Tekst |
|---|---|---|
| `g.tuinbouw.bespoten.1` | Henk (Daniel) | Niet in kas drie, hè. Die is net bespoten. |
| `g.tuinbouw.bespoten.2` | Leerling (Thijmen én Ariël) | Oké. Wanneer mag ik erin? |
| `g.tuinbouw.bespoten.3` | Henk (Daniel) | Morgen pas. Vandaag werk je in kas vijf. |
| `g.tuinbouw.bespoten.4` | Henk (Daniel) | Begin maar bij rij acht. |

- **Waar werk je vandaag?** In kas drie. · In kas acht. · **In kas vijf.** ✔  
  Uitleg: Kas drie is bespoten, dus je werkt in kas vijf. *(Greenhouse three has been sprayed, so you work in greenhouse five.)*
- **Waarom mag je niet in kas drie?** **Hij is net bespoten.** ✔ · Hij is te warm. · Er is geen werk.  
  Uitleg: In een kas die net bespoten is, mag je nog niet werken. *(You may not work yet in a greenhouse that has just been sprayed.)*

#### 17. Hoeveel rijen? · `g.tuinbouw.oogst`

Na `u.kas`. Geluid (zacht, -24 dB): Kas: ventilatoren, plastic kratten die op elkaar gezet worden, een radio heel zacht.

| Clip | Stem | Tekst |
|---|---|---|
| `g.tuinbouw.oogst.1` | Amina (Ariël) | Hoeveel rijen heb je gedaan, Bram? |
| `g.tuinbouw.oogst.2` | Bram (Thijmen) | Vier. Nog twee te gaan. |
| `g.tuinbouw.oogst.3` | Amina (Ariël) | Goed. Je krat is vol. Zet hem bij de plukkar. |
| `g.tuinbouw.oogst.4` | Bram (Thijmen) | Oké. Om half tien is de pauze, toch? |
| `g.tuinbouw.oogst.5` | Amina (Ariël) | Ja, een kwartier. |

- **Hoeveel rijen moet Bram nog doen?** Vier. · **Twee.** ✔ · Zes.  
  Uitleg: Bram heeft er vier gedaan; er zijn er nog twee. *(Bram has done four; two are left.)*
- **Hoe lang duurt de pauze?** Een half uur. · Tien minuten. · **Een kwartier.** ✔  
  Uitleg: Amina zegt: een kwartier, dat is vijftien minuten. *(Amina says: a quarter of an hour, that is fifteen minutes.)*

#### 18. Warm in de kas ⚖️ · `g.tuinbouw.hitte`

Na `u.kas`. Geluid (midden, -18 dB): Kas: ventilatoren zoemen, sproeiers sissen kort, vogels buiten.

| Clip | Stem | Tekst |
|---|---|---|
| `g.tuinbouw.hitte.1` | Henk (Daniel) | Het is vandaag dertig graden in de kas. |
| `g.tuinbouw.hitte.2` | Henk (Daniel) | Drink elk uur water. Ook als je geen dorst hebt. |
| `g.tuinbouw.hitte.3` | Leerling (Thijmen én Ariël) | Oké. Mag ik ook even naar buiten? |
| `g.tuinbouw.hitte.4` | Henk (Daniel) | Ja, om elf uur. Tien minuten. |

- **Wat moet je elk uur doen?** Naar buiten gaan. · **Water drinken.** ✔ · Een krat halen.  
  Uitleg: Bij hitte drink je elk uur water, ook zonder dorst. *(In the heat you drink water every hour, even without thirst.)*
- **Hoe laat mag je naar buiten?** **Om elf uur.** ✔ · Om tien uur. · Om twaalf uur.  
  Uitleg: Henk zegt: om elf uur, tien minuten. *(Henk says: at eleven, for ten minutes.)*

### Zorg

#### 19. Mevrouw is gevallen ⚖️ · `g.zorg.gevallen`

Na `u.care`. Geluid (zacht, -24 dB): Zorginstelling: een gang, ergens een tv, een rolstoel rijdt voorbij, een bel van een cliënt.

| Clip | Stem | Tekst |
|---|---|---|
| `g.zorg.gevallen.1` | Jada (Noa) | Mevrouw in kamer twaalf is gevallen. |
| `g.zorg.gevallen.2` | Leerling (Thijmen én Ariël) | O nee. Is ze gewond? |
| `g.zorg.gevallen.3` | Jada (Noa) | Ik weet het niet. Til haar niet op, hè. |
| `g.zorg.gevallen.4` | Jada (Noa) | Ik haal de verpleegkundige. Blijf jij even bij haar? |

- **Wat doe jij?** Je tilt mevrouw op. · **Je blijft bij mevrouw.** ✔ · Je belt de dokter.  
  Uitleg: Is een cliënt gevallen, dan til je haar niet op. *(If a client has fallen, you do not lift her up.)*
- **In welke kamer is mevrouw?** In kamer elf. · In kamer twintig. · **In kamer twaalf.** ✔  
  Uitleg: Jada zegt: kamer twaalf. *(Jada says: room twelve.)*

#### 20. De pillen ⚖️ · `g.zorg.pillen`

Na `u.care`. Geluid (zacht, -24 dB): Zorg: een gang, een deur gaat zacht dicht, een karretje met bekers rammelt.

| Clip | Stem | Tekst |
|---|---|---|
| `g.zorg.pillen.1` | Jada (Noa) | Het is negen uur. Tijd voor de pillen. |
| `g.zorg.pillen.2` | Jada (Noa) | Kun je meneer in kamer vier zijn pillen geven? |
| `g.zorg.pillen.3` | Leerling (Thijmen én Ariël) | Nee, dat mag ik niet. Ik haal de verpleegkundige. |
| `g.zorg.pillen.4` | Jada (Noa) | O ja, goed. Ze is in kamer zeven. |

- **Waarom geef je de pillen niet?** Meneer slaapt nog. · **Dat mag je niet doen.** ✔ · De pillen zijn op.  
  Uitleg: Pillen geven mag je alleen als dat jouw taak is. *(You may only give pills when that is your task.)*
- **Waar is de verpleegkundige?** **In kamer zeven.** ✔ · In kamer vier. · In de keuken.  
  Uitleg: Jada zegt: ze is in kamer zeven. *(Jada says: she is in room seven.)*

#### 21. De ochtend · `g.zorg.ochtend`

Na `u.care`. Geluid (zacht, -24 dB): Zorg, vroeg in de ochtend: een kraan loopt, zacht gepraat op de gang.

| Clip | Stem | Tekst |
|---|---|---|
| `g.zorg.ochtend.1` | Jada (Noa) | Goedemorgen. Jij helpt vandaag in kamer drie en vijf. |
| `g.zorg.ochtend.2` | Jada (Noa) | Eerst wassen en aankleden. Om half negen is het eten. |
| `g.zorg.ochtend.3` | Leerling (Thijmen én Ariël) | Oké. Meneer in kamer vijf heeft een rolstoel, hè? |
| `g.zorg.ochtend.4` | Jada (Noa) | Ja. Bel mij als je hulp nodig hebt. |

- **Hoe laat is het eten?** Om acht uur. · **Om half negen.** ✔ · Om half tien.  
  Uitleg: Jada zegt: om half negen is het eten. *(Jada says: breakfast is at half past eight.)*
- **Wat doe je eerst?** **Wassen en aankleden.** ✔ · Het eten brengen. · De rolstoel halen.  
  Uitleg: Eerst wassen en aankleden, daarna het eten. *(First washing and dressing, then breakfast.)*

### Horeca

#### 22. Een allergie ⚖️ · `g.horeca.allergie`

Na `u.horeca`. Geluid (midden, -18 dB): Restaurantkeuken: pannen, de afzuiging zoemt, borden worden neergezet.

| Clip | Stem | Tekst |
|---|---|---|
| `g.horeca.allergie.1` | Jada (Noa) | Tafel zes. Een gast heeft een allergie voor noten. |
| `g.horeca.allergie.2` | Leerling (Thijmen én Ariël) | Oké. Zitten er noten in de soep? |
| `g.horeca.allergie.3` | Jada (Noa) | Ik weet het niet. Vraag het even aan de chef. |
| `g.horeca.allergie.4` | Jada (Noa) | En schrijf het op de bestelling. |

- **Waar heeft de gast een allergie voor?** Voor vlees. · **Voor noten.** ✔ · Voor melk.  
  Uitleg: De gast aan tafel zes heeft een allergie voor noten. *(The guest at table six is allergic to nuts.)*
- **Aan wie vraag je het?** De gast. · De baas. · **De chef.** ✔  
  Uitleg: Bij een allergie vraag je het altijd aan de chef. *(With an allergy you always ask the chef.)*

#### 23. In de koelcel ⚖️ · `g.horeca.koelcel`

Na `u.horeca`. Geluid (zacht, -24 dB): Keuken: de koelcel zoemt, een mes op een plank, de afzuiging.

| Clip | Stem | Tekst |
|---|---|---|
| `g.horeca.koelcel.1` | Henk (Daniel) | Zet het vlees even in de koelcel. |
| `g.horeca.koelcel.2` | Leerling (Thijmen én Ariël) | Oké. Op welke plank? |
| `g.horeca.koelcel.3` | Henk (Daniel) | Onderaan. En schrijf de datum erop. |
| `g.horeca.koelcel.4` | Henk (Daniel) | Daarna snijd je de uien. Om vijf uur komen de eerste gasten. |

- **Wat schrijf je op het vlees?** **De datum.** ✔ · De prijs. · Je naam.  
  Uitleg: Op eten in de koelcel staat altijd de datum. *(Food in the cold room always has the date on it.)*
- **Hoe laat komen de eerste gasten?** Om vier uur. · **Om vijf uur.** ✔ · Om zes uur.  
  Uitleg: Henk zegt: om vijf uur komen de eerste gasten. *(Henk says: the first guests come at five.)*

#### 24. De rekening · `g.horeca.rekening`

Na `u.horeca`. Geluid (midden, -18 dB): Restaurant: gasten praten zacht, bestek tikt op borden, een koffiemachine.

| Clip | Stem | Tekst |
|---|---|---|
| `g.horeca.rekening.1` | Bram (Thijmen) | Jada, tafel acht wil de rekening. |
| `g.horeca.rekening.2` | Jada (Noa) | Oké, ik kom eraan. Ruim jij tafel twee even af? |
| `g.horeca.rekening.3` | Bram (Thijmen) | Ja. De fooi gaat in de pot, hè? |
| `g.horeca.rekening.4` | Jada (Noa) | Ja, achter de bar. Die delen we op vrijdag. |

- **Wie wil de rekening?** Tafel twee. · Tafel tien. · **Tafel acht.** ✔  
  Uitleg: Tafel acht wil de rekening; tafel twee ruimt Bram af. *(Table eight wants the bill; Bram clears table two.)*
- **Waar gaat de fooi heen?** **In de pot achter de bar.** ✔ · In de kassa bij de deur. · In de zak van Bram.  
  Uitleg: De fooi gaat in de pot; op vrijdag delen ze hem. *(The tips go in the jar; they share them on Friday.)*

### Schoonmaak

#### 25. De vloer is glad ⚖️ · `g.schoonmaak.glad`

Na `u.clean`. Geluid (zacht, -24 dB): Kantoorgang: een stofzuiger in een andere kamer, een deur, ver weg een lift.

| Clip | Stem | Tekst |
|---|---|---|
| `g.schoonmaak.glad.1` | Jada (Noa) | Ben je klaar met de gang? Zet het bordje neer. |
| `g.schoonmaak.glad.2` | Jada (Noa) | De vloer is nog glad. Een half uur ongeveer. |
| `g.schoonmaak.glad.3` | Leerling (Thijmen én Ariël) | Oké. Waar staat het bordje? |
| `g.schoonmaak.glad.4` | Jada (Noa) | Bij de emmers, in kast twee. |

- **Wat doe je eerst?** Je leegt de prullenbak. · Je haalt een nieuwe emmer. · **Je zet het bordje neer.** ✔  
  Uitleg: Bij een natte vloer zet je het bordje neer. *(With a wet floor you put the sign down.)*
- **Waar staat het bordje?** **In kast twee.** ✔ · In kast drie. · Op de wc.  
  Uitleg: Jada zegt: bij de emmers, in kast twee. *(Jada says: by the buckets, in cupboard two.)*

#### 26. Niet mengen ⚖️ · `g.schoonmaak.mengen`

Na `u.clean`. Geluid (zacht, -24 dB): Toiletruimte: een kraan loopt, een emmer vult zich, galm van tegels.

| Clip | Stem | Tekst |
|---|---|---|
| `g.schoonmaak.mengen.1` | Henk (Daniel) | Gebruik voor de wc’s alleen het blauwe middel. |
| `g.schoonmaak.mengen.2` | Henk (Daniel) | Meng het nooit met een ander middel. Dan krijg je damp. |
| `g.schoonmaak.mengen.3` | Leerling (Thijmen én Ariël) | Oké. Hoeveel doe ik in de emmer? |
| `g.schoonmaak.mengen.4` | Henk (Daniel) | Een half kopje op tien liter water. |

- **Welk middel gebruik je voor de wc’s?** Het groene middel. · **Het blauwe middel.** ✔ · Twee middelen samen.  
  Uitleg: Henk zegt: alleen het blauwe middel. *(Henk says: only the blue product.)*
- **Waarom meng je de middelen niet?** Dan is het te duur. · Dan ruikt het niet. · **Dan krijg je damp.** ✔  
  Uitleg: Schoonmaakmiddelen mengen kan gevaarlijke damp geven. *(Mixing cleaning products can give off dangerous fumes.)*

#### 27. Bijna klaar · `g.schoonmaak.klaar`

Na `u.finish`. Geluid (zacht, -24 dB): Kantoor in de avond: stil, de airco zoemt, een stofzuiger ver weg.

| Clip | Stem | Tekst |
|---|---|---|
| `g.schoonmaak.klaar.1` | Jada (Noa) | Ben je klaar met de wc’s? |
| `g.schoonmaak.klaar.2` | Leerling (Thijmen én Ariël) | Bijna, nog twee. |
| `g.schoonmaak.klaar.3` | Jada (Noa) | Oké. Daarna stofzuigen in kamer tien en elf. |
| `g.schoonmaak.klaar.4` | Jada (Noa) | Om negen uur gaat alles op slot. Meld je dan even af. |

- **Hoeveel wc’s moet je nog doen?** **Twee.** ✔ · Tien. · Elf.  
  Uitleg: Je zegt: bijna, nog twee. *(You say: almost, two more.)*
- **Wat gebeurt er om negen uur?** De pauze begint. · **Alles gaat op slot.** ✔ · Je begint in kamer tien.  
  Uitleg: Om negen uur gaat alles op slot; dan meld je je af. *(At nine everything is locked; then you sign off.)*

### Winkel

#### 28. Over de datum ⚖️ · `g.winkel.datum`

Na `u.shop`. Geluid (zacht, -24 dB): Supermarkt: koelvakken zoemen, een winkelwagen rolt voorbij, mensen praten zacht.

| Clip | Stem | Tekst |
|---|---|---|
| `g.winkel.datum.1` | Henk (Daniel) | Kijk even naar de producten in gang drie. |
| `g.winkel.datum.2` | Henk (Daniel) | Is een product over de datum? Dan haal je het weg. |
| `g.winkel.datum.3` | Leerling (Thijmen én Ariël) | Oké. Waar laat ik die producten? |
| `g.winkel.datum.4` | Henk (Daniel) | In de bak achterin. Niet terug in het schap. |

- **Wat doe je met een product over de datum?** Je zet het achteraan in het schap. · **Je doet het in de bak achterin.** ✔ · Je zet het bij de kassa.  
  Uitleg: Een product over de datum haal je uit het schap. *(You take a product past its date off the shelf.)*
- **In welke gang zijn de producten?** **In gang drie.** ✔ · In gang twee. · In gang tien.  
  Uitleg: Henk zegt: de producten in gang drie. *(Henk says: the products in aisle three.)*

#### 29. Een klant wil rijst · `g.winkel.klant`

Na `u.shop`. Geluid (zacht, -24 dB): Supermarkt: een scanner piept bij de kassa, een winkelwagen, mensen praten zacht.

| Clip | Stem | Tekst |
|---|---|---|
| `g.winkel.klant.1` | Jada (Noa) | Die klant wil rijst. Weet jij waar die ligt? |
| `g.winkel.klant.2` | Leerling (Thijmen én Ariël) | Nee, dat weet ik niet zeker. |
| `g.winkel.klant.3` | Jada (Noa) | In gang vier, onderaan. |
| `g.winkel.klant.4` | Jada (Noa) | Loop even met de klant mee. Dat vinden klanten fijn. |

- **Waar ligt de rijst?** In gang vijf, achteraan. · Bij de kassa, achterin. · **In gang vier, onderaan.** ✔  
  Uitleg: Jada zegt: in gang vier, onderaan. *(Jada says: in aisle four, at the bottom.)*
- **Wat doe je met de klant?** **Je loopt met de klant mee.** ✔ · Je zegt: in gang vier. · Je belt de chef even.  
  Uitleg: Jada zegt: loop even met de klant mee. *(Jada says: walk along with the customer.)*

#### 30. Op de kassa ⚖️ · `g.winkel.kassa`

Na `u.shop`. Geluid (midden, -18 dB): Supermarkt bij de kassa: scanners piepen, een lade met geld gaat open, een kar.

| Clip | Stem | Tekst |
|---|---|---|
| `g.winkel.kassa.1` | Henk (Daniel) | Jij zit vandaag op kassa twee, tot drie uur. |
| `g.winkel.kassa.2` | Henk (Daniel) | Wil iemand alcohol? Vraag dan even om een ID. |
| `g.winkel.kassa.3` | Henk (Daniel) | Onder de achttien mag dat niet. |
| `g.winkel.kassa.4` | Leerling (Thijmen én Ariël) | Oké. En mijn pauze? |
| `g.winkel.kassa.5` | Henk (Daniel) | Om half één. Dan zit Jada op jouw kassa. |

- **Wat doe je als iemand alcohol wil?** Je zegt: dat kan niet. · **Je vraagt om een ID.** ✔ · Je belt eerst de chef.  
  Uitleg: Henk zegt: onder de achttien mag dat niet. *(Henk says: under eighteen that is not allowed.)*
- **Hoe laat is je pauze?** Om half twee. · Om drie uur. · **Om half één.** ✔  
  Uitleg: Henk zegt: je pauze is om half één. *(Henk says: your break is at half past twelve.)*

## Zo maak je het met ElevenLabs

### 1. De stemmen (het bestaande opnamescript)

`scripts/voices/elevenlabs.mjs` leest `public/audio/clips.json` en neemt elke clip op die nog geen
mp3 heeft. Een clip met `"voices": [...]` wordt alleen in die stemmen opgenomen. Dat gebruiken de
scènes: elke beurt is één clip (`g.bouw.steiger.1`, `.2`, ...) in de stem van zijn spreker.

```sh
npm run clips                         # de gewone lijst (geen sleutel nodig)
npm run scenes:lines -- --merge       # zet de 111 scène-clips achter in clips.json
export ELEVENLABS_API_KEY=jouw-sleutel
node scripts/voices/elevenlabs.mjs check   # wat het kost; er wordt niets opgenomen
node scripts/voices/elevenlabs.mjs all     # neemt op wat ontbreekt
```

- `npm run scenes:lines` zonder `--merge` schrijft alleen `public/audio/scene-lines.json` (zelfde
  formaat) en telt de tekens per stem. Zo kun je eerst kijken.
- Ontbreken er ook nog gewone clips? Dan neemt `all` die ook op. Wil je alleen de scènes, draai
  dan eerst de gewone opnames, of beperk de run met `VOICES=daniel` en `MAX_CREDITS`.
- De GitHub-workflow (*Record ElevenLabs voices*) draait `--merge` niet. Neem de scènes daarom op je
  eigen computer op, of voeg die stap later aan de workflow toe.
- De mp3's komen in `public/audio-el/<stem>/g.*.mp3`, en de teksten in `public/audio-el/voices.json`,
  net als de andere clips. Luister ze na: het tempo moet gewoon zijn, niet langzaam.
- Het script geeft elke zin als context "Dit is een les Nederlands." mee. Klinkt een scène te
  netjes, dan kun je bij de scène-clips later een andere context kiezen (bijvoorbeeld de beurt
  ervoor). Dat is een kleine aanpassing in `elevenlabs.mjs`; die is nu niet gedaan.

### 2. Het omgevingsgeluid (ElevenLabs Sound Effects)

Per scène één geluid van 10 tot 15 seconden dat je kunt herhalen (loop). Gebruik de beschrijving
uit de tabel hierboven, in het Engels werkt het meestal beter. Zet er "no speech, no voices,
background ambience, seamless loop" bij, zodat er geen stemmen in het geluid zitten.

In de website: *Sound Effects*, beschrijving plakken, duur 15 s, *Loop* aan. Of met de API:

```sh
curl -s https://api.elevenlabs.io/v1/sound-generation \
  -H "xi-api-key: $ELEVENLABS_API_KEY" -H "content-type: application/json" \
  -d '{"text":"warehouse ambience: forklift beeping while reversing, pallets set down far away, a scanner beeps. No speech, no voices. Seamless loop.","duration_seconds":15,"loop":true}' \
  -o public/audio-scenes/geluid/g.logistiek.heftruck.mp3
```

Veel scènes kunnen hetzelfde geluid delen (de drie garagescènes, de drie kasscènes). Kopieer het
bestand dan onder de andere scène-ids. Dat scheelt credits.

### 3. Mixen met ffmpeg

De stem op 0 dB, het geluid eronder: **midden ≈ -18 dB**, **zacht ≈ -24 dB**. Het geluid is nooit
harder dan de stem: een beginner moet elk woord kunnen verstaan. Tussen de beurten 0,5 s stilte,
1,5 s geluid voor en na, in- en uitfaden, en daarna even luid als de andere clips (-16 LUFS).

Voor één scène met drie beurten (de bestanden in deze volgorde):

```sh
ffmpeg -y -i beurt1.mp3 -i beurt2.mp3 -i beurt3.mp3 -stream_loop -1 -i geluid.mp3 \
  -filter_complex "[0:a]apad=pad_dur=0.5[a0];[1:a]apad=pad_dur=0.5[a1];[2:a]anull[a2];\
[a0][a1][a2]concat=n=3:v=0:a=1,adelay=1500:all=1,apad=pad_dur=1.5[v];\
[3:a]volume=-18dB,afade=t=in:d=1[bg];\
[v][bg]amix=inputs=2:duration=first:normalize=0,areverse,afade=t=in:d=1,areverse,loudnorm=I=-16:TP=-1.5[out]" \
  -map "[out]" -ac 1 -ar 44100 -b:a 64k scene.mp3
```

(`-stream_loop -1` herhaalt het geluid; `amix ... duration=first` stopt als de stem klaar is;
`areverse,afade,areverse` is de uitfade. Nodig: ffmpeg 4.4 of nieuwer.) Getest met ffmpeg 6.1.

Alle 30 scènes in één keer, met de goede bestanden en het goede niveau per scène:

```sh
npm run scenes:lines -- --mix         # schrijft public/audio/scene-mix.sh
bash public/audio/scene-mix.sh        # maakt public/audio-scenes/<id>[.thijmen|.ariel].mp3
```

## Wat het kost

| Onderdeel | Hoeveel | Credits (ongeveer) |
|---|---|---|
| Stemmen, één opname van elke zin | 124 clips, 5.526 tekens (Daniel 1.971, Noa 1.622, Thijmen 1.127, Ariël 806) | **5.500** |
| Stemmen, met een tweede poging voor zinnen die niet goed klinken | | 7.000 tot 10.000 |
| Omgevingsgeluid, één loop per plek (± 12 plekken × 15 s) | | 5.000 tot 8.000 |
| Omgevingsgeluid, een eigen loop per scène (30 × 15 s) | | 12.000 tot 16.000 |

De stem kost 1 credit per teken (`eleven_multilingual_v2`; `npm run scenes:lines` telt het precies).
Sound Effects rekent per gegenereerde seconde; de prijs verandert soms, dus kijk hem na op de
prijspagina van ElevenLabs voordat je begint. Reken samen op **10.000 tot 15.000 credits** als je
geluiden deelt. Dat past in één maand van het Starter- of Creator-plan, naast de gewone opnames.

## Alternatief: opnemen met echte collega's

Echte stemmen en echt geluid klinken het meest als de werkvloer. Dat kan bij een partnerbedrijf
(bijvoorbeeld een bedrijf uit de pilot, zie [`pilot.md`](pilot.md)):

- **Toestemming.** Vraag vooraf schriftelijk toestemming van het bedrijf en van iedereen die praat.
  Leg uit waarvoor de opname is (een leerapp, openbaar te horen) en dat ze altijd mogen stoppen.
- **Zonder namen.** Geen echte namen, bedrijfsnamen of klantgegevens in de opname. De collega's
  lezen de tekst uit dit plan voor; in de app heten ze gewoon Henk, Jada, Bram of Amina.
- **Geen herkenbare dingen.** Let op omroepberichten, radio met reclame of muziek (auteursrecht)
  en namen op de achtergrond.
- **Zo neem je op.** Een telefoon of kleine recorder op 30 tot 50 cm van de mond. Neem de stem en
  het geluid apart op (eerst de zinnen in een rustige hoek, dan 30 s geluid op de werkplek), dan kun
  je ze met het ffmpeg-commando hierboven mengen en blijft de stem goed te verstaan.
- **Wat het kost.** Geen credits, wel een ochtend tijd en een afspraak met het bedrijf. Een
  gemengde aanpak kan ook: echte geluiden van de werkplek, stemmen van ElevenLabs.

## Keuzes voor de eigenaar

1. **ElevenLabs of echte collega's** (of gemengd: echt geluid, ElevenLabs-stemmen).
2. **Eén geluid per plek of per scène.** Delen is goedkoper en klinkt vaak net zo goed.
3. **De leerling in twee stemmen**, of de leerling-beurten weglaten in de mix (dan horen ze alleen
   de collega, en volstaat één mix per scène).
4. **Waar de scène komt.** Nu: na het genoemde onderwerp. Het scherm (stap 2.3, later) kan de
   scène als extra oefening na dat onderwerp tonen, of in de herhaling.
5. **De ⚖️-scènes** noemen een veiligheidsregel of rechtenfeit (valbeveiliging, last van de kraan,
   spanningsloos werken, rijbewijs, storing aan een machine, heftruck, bespoten kas, hitte, gevallen cliënt, pillen,
   allergie, datum in de koelcel, natte vloer, middelen mengen, vlees over de datum, alcohol onder de 18). Laat ze nalezen zoals de andere
   ⚖️-teksten.
