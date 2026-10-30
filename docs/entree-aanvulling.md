# Werkregels: aanvulling voor de Entree-opleiding

*Concept, 15 oktober 2026. Nieuwe lessen voor de gaten uit [`entree-dekking.md`](entree-dekking.md).
Zelfde vorm en schrijfregels als [`werkregels-curriculum.md`](werkregels-curriculum.md). Nog niet
gebouwd in `src/`. Elk getal, elke termijn en elke regel uit wet of afspraak heeft een ⚖️: die moet
een deskundige nakijken. De bronnen en de twijfels staan aan het eind.*

---

## 1. Ontwerpnotitie

### Waarom deze aanvulling

Vloertaal dekt de werknemerskant van Entree goed: veiligheid, contract, loon, ziek zijn,
samenwerken en solliciteren. Er missen vooral: rekenen, het afronden en afmelden van werk, de stage
(bpv), digitale vaardigheden, democratie en rechtsstaat, duurzaam werken en het profiel
verkoop/retail. Deze aanvulling geeft:

- **7 nieuwe units (11 tot en met 17) met 19 lessen**, helemaal uitgeschreven (deel 3; les 15.3 kwam er later bij);
- **5 korte sectorschetsen** met titels en leerdoelen (deel 4);
- **3 voorstellen voor het spoor Taal** (deel 5).

### Voor wie

Dezelfde groep als het lespad Werkregels: Nederlandstaligen die weinig lezen en schrijven. Nu ook
expliciet: studenten van de Entree-opleiding (mbo niveau 1), vaak 16 tot 23 jaar, en volwassenen in
een Entree-traject.

### Vorm en schrijfregels

Alles uit deel 1 van `werkregels-curriculum.md` geldt ook hier:

- les van 5 tot 8 minuten: scène, 2 of 3 vragen, "Zo zeg je het", "Onthoud", "Wie kan je helpen";
- taalniveau 1F, zinnen van hooguit ongeveer 12 woorden, altijd "je";
- namen wisselen: Sanne, Mohammed, Kevin, Fatima, Dewi, Piotr, Esra, Jayden. Leidinggevenden en
  begeleiders: Linda, Mark, Henk;
- per vraag één goed antwoord, de foute antwoorden zijn geloofwaardig;
- de ⚖️ is alleen voor de redactie, niet tonen en niet voorlezen; *Redactie:*-regels komen niet in de app;
- bedragen die vaak veranderen noemen we niet. Rekenvoorbeelden gebruiken ronde, verzonnen bedragen.
  Die heten in de tekst altijd "in dit voorbeeld".

**Telling in deze aanvulling.** Goed antwoord bij "wat doe je?" en sommen: A 14, B 14, C 14. Bij
"waar of niet waar": 10 waar, 10 niet waar. (Met les 15.3 en de drie vragen van 30 oktober 2026 erbij:
de pauze in les 12.1, ziek en 70 procent in les 12.2, en terugzeggen in les 13.1.)

**Unit 16 (Meedoen in Nederland)** is feitelijk en neutraal. Geen partijen, geen politici, geen
meningen over beleid. Bij stemrecht zeggen we altijd: het hangt af van de verkiezing en je
nationaliteit. Vraag het de gemeente.

### Nieuw staptype: het kaartje (`card`)

Units 11, 12 en 13 hebben een vraag over een **getekend kaartje** nodig: een rooster, een
kassabon, een pakbon, een etiket of een werkbon. Bij een som rekent de leerling iets uit en kiest
uit 3 antwoorden. Het lijkt op de bestaande stap `payslip` (de getekende loonstrook).

```ts
/** A drawn card (roster, receipt, packing slip, label, work order) with a question about it. */
type CardType = 'rooster' | 'kassabon' | 'pakbon' | 'etiket' | 'werkbon';

| {
    kind: 'card';
    id: string;
    card: { type: CardType; title: string; rows: { label: string; value: string }[] };
    question: string;
    /** 3 options, one best. For a sum: each wrong option is a typical mistake. */
    options: RuleOption[];
    why: string;
    /** For a sum: the steps, shown after the answer ("Van 7.30 tot 16.00 uur is 8,5 uur."). */
    sum?: string[];
  }
```

Regels voor een som:

- Hooguit 2 rekenstappen. Ronde getallen. Je hoeft geen rekenmachine te gebruiken, maar het mag.
  Op het werk is dat ook normaal.
- Elk fout antwoord is een fout die mensen echt maken: de pauze vergeten, optellen in plaats van
  keer, een euro te veel. De feedback noemt die fout, zonder schuld: *"Je bent de pauze vergeten."*
- Na het antwoord staan de stappen van de som, in woorden en cijfers.
- **De stem.** Tijden schrijven we als "7.30 uur", bedragen als "6,60 euro". Check dat de stem dit
  goed voorleest: "half acht" of "zeven uur dertig", en "zes euro zestig". Rekentekens (×, −) lezen
  we voor als "keer" en "min". Zet in de voorleestekst het woord, niet het teken.
- Later kan de loonstrook (`payslip`) één soort kaartje worden.

### Andere technische punten

- **Ids:** `r.winkel`, `r.rekenen`, `r.afronden`, `r.stage`, `r.digitaal`, `r.meedoen`,
  `r.duurzaam`. Lessen `r.l.winkel.1` enzovoort. Alleen kleine letters, zodat de link
  `?unit=r.winkel` werkt.
- **Unit 11** is eigenlijk een sectorunit. Hij kan ook bij de sectorlessen, met een nieuwe sector
  `retail` in `src/content/sectors.ts`. Dan krijgt hij lesnummers W.1 tot W.3.
- **"Wie kan je helpen"** heeft nieuwe plekken nodig in `AskWho`: `school` (stagebegeleider of
  bpv-begeleider), `bibliotheek`, `meldpunt` (discriminatie.nl) en `ict` (de ICT-afdeling).
- **Sectorverschillen.** Unit 13 en 17 zien er per sector anders uit. In de sectorlessen kan een
  extra vraag komen, zoals in deel 5 van het lespad.

---

## 2. De aanvulling in één oogopslag

| Unit | Titel | Lessen | Past bij Entree |
|---|---|---|---|
| 11 | Werken in de winkel | 11.1 Vakken vullen en voorraad · 11.2 De klant helpen en doorverwijzen · 11.3 Kassa, wisselgeld en een klacht | profiel verkoop/retail; klantcontact |
| 12 | Rekenen op je werk | 12.1 Uren en je rooster narekenen · 12.2 Geld en loon per uur · 12.3 Maten, gewichten en tellen | rekenen (mbo-rekenniveau 1) |
| 13 | Je werk goed afronden | 13.1 Een werkbon lezen en voorbereiden · 13.2 Opruimen, laten controleren en afmelden | basisdeel B1-K1, W1 en W3 |
| 14 | Stage lopen | 14.1 Je stageovereenkomst (POK) en wie wie is · 14.2 Feedback en beoordeling · 14.3 Als het niet goed gaat | bpv; loopbaan |
| 15 | Digitaal op je werk | 15.1 DigiD en inloggen · 15.2 Veilig wachtwoord en phishing · 15.3 AI op je werk | digitale vaardigheden |
| 16 | Meedoen in Nederland | 16.1 Hoe Nederland bestuurd wordt, en stemmen · 16.2 Grondrechten en gelijke behandeling · 16.3 Recht en plicht: politie, rechter, bezwaar | burgerschap, politiek-juridisch |
| 17 | Duurzaam werken | 17.1 Afval scheiden op je werk · 17.2 Zuinig met materiaal en energie | burgerschap; werkhouding |

**7 units, 19 lessen.** Samen met het lespad (36 lessen) en de sectorlessen (12 lessen) worden dat
67 Werkregels-lessen. (Les 15.3 "AI op je werk" kwam er op 19 oktober 2026 bij.)

---

## 3. De lessen

## Unit 11 · Werken in de winkel

*In deze unit: vakken vullen en de datum checken, klanten helpen en doorverwijzen, de kassa, ID
vragen en een klacht.*

### Les 11.1 · Vakken vullen en voorraad

**Leerdoel:** je vult vakken op de goede manier, je let op de datum, en je houdt de paden vrij.

**Scène** · *Beeld: Kevin in een supermarkt bij het schap met melk. Naast hem een rolcontainer.*

> Kevin werkt sinds kort in een supermarkt. Hij vult het schap met melk. Vooraan staat nog oude
> melk. De nieuwe melk heeft een latere datum. Kevin wil snel klaar zijn.

**Vraag 1 · Wat is het beste?** Waar zet Kevin de nieuwe melk?

- **A.** Vooraan. Dan ziet het schap er vers uit.
  → *Dat is logisch. Maar dan blijft de oude melk staan.*
- **B.** Achteraan. De oude melk blijft vooraan staan.
  → *Goed. Zo gaat de oude melk het eerst weg.*
- **C.** Ergens waar plek is. Klanten kiezen zelf wel.
  → *Dan raakt de oude melk over de datum.*

**Goed antwoord: B.**
**Waarom:** Oud naar voren, nieuw naar achteren. Zo verkoop je eerst wat het eerst over de datum
gaat. Dan hoeft er minder weg. Kijk bij het vullen altijd even naar de datum.

**Vraag 2 · Waar of niet waar?** "Na de THT-datum mag een winkel een product nooit meer verkopen."

**Antwoord: niet waar.**
**Waarom:** THT betekent "ten minste houdbaar tot". Daarna is een product vaak nog goed ⚖️. TGT
betekent "te gebruiken tot". Na die datum mag een winkel het niet meer verkopen ⚖️. Elke winkel heeft
eigen regels voor THT. Vraag hoe het bij jou gaat.

*Redactie: THT-producten mogen na de datum verkocht worden, op verantwoordelijkheid van de verkoper.
Voor sommige gekoelde producten gelden andere regels ⚖️ (NVWA). Daarom: "vraag hoe het bij jou gaat".*

**Vraag 3 · Wat is het beste?** Kevin zet drie rolcontainers in het pad. Een klant met een rollator wil erlangs. Wat kan Kevin het beste doen?

- **A.** Hij zegt sorry en schuift de containers aan de kant.
  → *Goed. Het pad moet vrij zijn voor klanten.*
- **B.** Hij vraagt de klant om even om te lopen.
  → *Dat is logisch. Maar het pad is er voor de klant.*
- **C.** Hij werkt snel door. Over 5 minuten is hij klaar.
  → *Dan moet de klant wachten. En iemand kan vallen.*

**Goed antwoord: A.**
**Waarom:** Houd de paden vrij. Dat is veiliger voor klanten en collega's. Nooduitgangen moeten altijd
vrij zijn ⚖️. Zet lege dozen en folie meteen weg.

**Zo zeg je het:** "Sorry, ik zet het even aan de kant."

**Onthoud:** Oud naar voren, nieuw naar achteren. Houd de paden vrij.

**Wie kan je helpen:** je leidinggevende of teamleider · een ervaren collega.

---

### Les 11.2 · De klant helpen en doorverwijzen

**Leerdoel:** je helpt een klant vriendelijk. Je zegt het eerlijk als je iets niet weet.

**Scène** · *Beeld: Fatima in een bouwmarkt, met een doos lampen. Een klant wijst naar het schap.*

> Fatima werkt in een bouwmarkt. Ze vult een schap met lampen. Een klant komt naar haar toe. "Welke
> lamp past in mijn keuken?" Fatima weet het niet.

**Vraag 1 · Wat is het beste?** Fatima weet het antwoord niet. Wat kan Fatima het beste doen?

- **A.** Ze kiest een lamp die er goed uitziet.
  → *Dan krijgt de klant misschien de verkeerde lamp.*
- **B.** Ze zegt: "Dat weet ik niet," en werkt door.
  → *Eerlijk. Maar de klant heeft nog geen hulp.*
- **C.** Ze zegt: "Dat weet ik niet. Ik haal een collega."
  → *Goed. Eerlijk, en de klant krijgt toch hulp.*

**Goed antwoord: C.**
**Waarom:** Niet alles weten is normaal. Raden is niet slim: de klant komt dan terug. Zeg het eerlijk.
Breng de klant naar iemand die het wel weet. Dat heet doorverwijzen.

**Vraag 2 · Wat is het beste?** Fatima is druk bezig. Een klant zegt: "Mag ik u iets vragen?" Wat kan Fatima het beste doen?

- **A.** Ze stopt even, kijkt de klant aan en luistert.
  → *Goed. In een winkel gaat de klant voor.*
- **B.** Ze zegt "moment" en maakt eerst haar doos leeg.
  → *Dat is logisch. Maar dan moet de klant lang wachten.*
- **C.** Ze wijst naar de servicebalie, zonder iets te zeggen.
  → *Dat kan onvriendelijk lijken.*

**Goed antwoord: A.**
**Waarom:** In een winkel gaat de klant voor. Stop even met je werk. Kijk de klant aan en groet.
Tegen klanten zeg je meestal "u".

**Vraag 3 · Waar of niet waar?** "Vraagt een klant of er noten in een product zitten? Dan zeg je wat je denkt."

**Antwoord: niet waar.**
**Waarom:** Bij een allergie kan een fout gevaarlijk zijn. Raad dus nooit. Lees samen met de klant het
etiket. Allergenen staan daar extra duidelijk, bijvoorbeeld vet gedrukt ⚖️. Weet je het nog niet zeker? Vraag het na.

**Zo zeg je het:** "Dat weet ik niet zeker. Ik vraag het even aan mijn collega."

**Onthoud:** Weet je het niet? Zeg het eerlijk, en haal iemand die het weet.

---

### Les 11.3 · Kassa, wisselgeld en een klacht

**Leerdoel:** je vraagt een ID bij alcohol en tabak, je telt wisselgeld goed, en je blijft rustig bij een klacht.

**Scène** · *Beeld: Jayden achter de kassa. Een jongen legt een krat bier op de band.*

> Jayden zit voor het eerst alleen achter de kassa. Een jongen legt een krat bier op de band. Hij
> ziet er jong uit. Achter hem staat een lange rij. De jongen zegt: "Ik ben 18, hoor."

**Vraag 1 · Wat is het beste?** Jayden weet niet zeker hoe oud de jongen is. Wat kan Jayden het beste doen?

- **A.** Hij vraagt rustig: "Mag ik je ID zien?"
  → *Goed. Zonder bewijs van 18 jaar geen alcohol.*
- **B.** Hij gelooft de jongen. De rij is al lang.
  → *Dat snap ik. Maar hij moet de leeftijd echt zien.*
- **C.** Hij zegt dat hij geen bier verkoopt aan jongeren.
  → *Misschien is hij wel 18. Jayden kan beter eerst zijn ID vragen.*

**Goed antwoord: A.**
**Waarom:** Alcohol en tabak verkoop je alleen aan mensen vanaf 18 jaar ⚖️. Weet je het niet zeker? Dan moet je
een ID zien ⚖️. Lijkt iemand jonger dan 25? Dan vragen veel winkels een ID ⚖️. Geen ID? Dan geen
alcohol.

*Redactie: de grens van 18 staat in de wet (Alcoholwet, Tabaks- en rookwarenwet). "Jonger dan 25"
is een afspraak van winkels, geen wet ⚖️.*

**Vraag 2 · Reken het uit.** *Kaartje (kassabon):* Totaal: 13,40 euro · Betaald: 20 euro. Hoeveel wisselgeld geeft Jayden?

- **A.** 7,60 euro
  → *Bijna. Je telde 1 euro te veel.*
- **B.** 6,40 euro
  → *Kijk nog een keer naar de centen.*
- **C.** 6,60 euro
  → *Goed. Dat klopt.*

**Goed antwoord: C.**
**Som:** Van 13,40 naar 14 euro is 60 cent. Van 14 naar 20 euro is 6 euro. Samen is dat 6,60 euro.
**Waarom:** De kassa rekent het vaak voor je uit. Tel het toch na als je het geld geeft. Tel hardop
terug, dan ziet de klant het ook. Kom je aan het eind geld tekort? Zeg het meteen tegen je
leidinggevende. Je baas mag het niet zomaar van je loon afhalen ⚖️.

**Vraag 3 · Wat is het beste?** Een klant is boos. "Dit brood is gisteren gekocht. Nu zit er al schimmel op!" Hij praat hard.

- **A.** Je zegt dat jij het brood niet gebakken hebt.
  → *Dat klopt. Maar de klant wordt er niet rustiger van.*
- **B.** Je luistert, zegt sorry en vraagt naar de bon.
  → *Goed. Zo help je de klant verder.*
- **C.** Je geeft hem meteen geld terug uit de kassa.
  → *Goed bedoeld. Maar vraag eerst wat je mag doen.*

**Goed antwoord: B.**
**Waarom:** Een klacht gaat niet over jou. Blijf rustig en luister. Zeg sorry voor het probleem. Weet
je niet wat je mag doen? Roep je leidinggevende. Wordt een klant agressief? Haal meteen hulp.

**Zo zeg je het:** "Vervelend voor u. Heeft u de bon nog? Ik haal even mijn leidinggevende."

**Onthoud:** Twijfel je over de leeftijd bij alcohol of tabak? Vraag altijd een ID.

**Wie kan je helpen:** je leidinggevende · bij agressie of diefstal: je leidinggevende of de
beveiliging, en bij gevaar 112. Ren nooit zelf achter een dief aan.

---

## Unit 12 · Rekenen op je werk

*In deze unit: je uren en je rooster narekenen, je loon per uur en procenten, maten, gewichten en
slim tellen. De meeste vragen zijn sommen met een kaartje (zie de ontwerpnotitie).*

### Les 12.1 · Uren en je rooster narekenen

**Leerdoel:** je rekent uit hoeveel uur je werkt, met de pauze eraf, en je checkt je rooster.

**Scène** · *Beeld: Dewi kijkt naar haar rooster in een app op haar telefoon.*

> Dewi werkt in een verzorgingshuis. Ze heeft een contract voor 24 uur per week. In de app staat
> haar nieuwe rooster. Ze wil weten of het klopt.

**Vraag 1 · Reken het uit.** *Kaartje (rooster):* Maandag · 7.30 tot 16.00 uur · pauze 30 minuten, niet betaald. Hoeveel uur werkt Dewi op maandag?

- **A.** 8,5 uur
  → *Je bent de pauze vergeten. Die gaat eraf.*
- **B.** 8 uur
  → *Goed. Dat klopt.*
- **C.** 9 uur
  → *Tel nog een keer, van 7.30 tot 16.00 uur.*

**Goed antwoord: B.**
**Som:** Van 7.30 tot 16.00 uur is 8,5 uur. Min een half uur pauze. Dat is 8 uur.
**Waarom:** Werktijd is: eindtijd min begintijd, min de pauze. Een pauze is vaak niet betaald. Soms
wel, bijvoorbeeld als je moet blijven voor cliënten ⚖️. Kijk in je contract of cao.

**Vraag 2 · Reken het uit.** *Kaartje (weekrooster):* maandag 8 uur · woensdag 6 uur · vrijdag 6 uur · zaterdag 6 uur · contract: 24 uur. Klopt het rooster?

- **A.** Ja, dat is precies 24 uur.
  → *Tel nog een keer: 8 + 6 + 6 + 6.*
- **B.** Nee, het is 2 uur te weinig.
  → *Andersom. Het is meer dan 24 uur.*
- **C.** Nee, het is 2 uur te veel.
  → *Goed. Dat klopt.*

**Goed antwoord: C.**
**Som:** 8 + 6 + 6 + 6 = 26 uur. Dat is 2 uur meer dan 24.
**Waarom:** Tel de uren van alle dagen op. Klopt het niet met je contract? Vraag het na. Werk je toch
meer? Schrijf die uren op, met de datum.

**Vraag 3 · Waar of niet waar?** "7,5 uur is hetzelfde als 7 uur en 30 minuten."

**Antwoord: waar.**
**Waarom:** Een half uur is 30 minuten. Dus 0,5 uur is 30 minuten. Een kwartier is 15 minuten: dat is
0,25 uur. Op een loonstrook staan uren vaak zo, met een komma.

**Vraag 4 · Reken het uit.** *Kaartje (rooster):* Zaterdag · 8.00 tot 14.00 uur · pauze 0 minuten. Dewi werkt zaterdag 6 uur. Er staat geen pauze op haar rooster. Klopt dat?

- **A.** Ja. 6 uur is kort genoeg zonder pauze.
  → *Toch niet. De grens is 5,5 uur.*
- **B.** Nee. Bij meer dan 5,5 uur werk hoort pauze.
  → *Goed. Dat klopt.*
- **C.** Ja. Pauze hoort pas bij 8 uur werk.
  → *Nee. De grens is lager: 5,5 uur.*

**Goed antwoord: B.**
**Som:** Van 8.00 tot 14.00 uur is 6 uur. 6 uur is meer dan 5,5 uur. Dan hoort er minstens 30 minuten pauze bij.
**Waarom:** Werk je meer dan 5,5 uur ⚖️? Dan krijg je minstens 30 minuten ⚖️ pauze. Dat mag ook 2 keer
15 minuten ⚖️. Staat er geen pauze op je rooster? Vraag het na bij je leidinggevende of de planner.
(Toegevoegd 30 oktober 2026: de regel van les 5.2, als som.)

**Zo zeg je het:** "Op mijn rooster staan 26 uur. Mijn contract is 24 uur. Klopt dat?"

**Onthoud:** Je werktijd is: eindtijd min begintijd, min je pauze.

**Wie kan je helpen:** je leidinggevende of de planner · de loonadministratie.

---

### Les 12.2 · Geld en loon per uur

**Leerdoel:** je rekent ongeveer uit wat je per week verdient. Je rekent met procenten en je telt wisselgeld.

**Scène** · *Beeld: Mohammed met de rekenmachine op zijn telefoon. Naast hem een schriftje met uren.*

> Mohammed werkt in een magazijn. Deze week werkte hij 20 uur. In dit voorbeeld krijgt hij 15 euro
> bruto per uur. Hij wil weten wat hij deze week verdient.

*Redactie: 15 euro is een rekenvoorbeeld, niet het minimumloon. Noem het minimumloon niet. ⚖️*

**Vraag 1 · Reken het uit.** *Kaartje:* 20 uur gewerkt · 15 euro bruto per uur. Hoeveel verdient Mohammed bruto?

- **A.** 300 euro
  → *Goed. Dat klopt.*
- **B.** 35 euro
  → *Je telde op. Hier moet je keer doen.*
- **C.** 200 euro
  → *Kijk nog een keer: 20 keer 15.*

**Goed antwoord: A.**
**Som:** 20 × 15 = 300 euro. (10 × 15 = 150, en dat 2 keer.)
**Waarom:** Uren keer uurloon is je bruto loon. Netto krijg je minder. Dat komt vooral door de
loonheffing (zie les 4.1). Hoeveel het minimumloon is, staat op rijksoverheid.nl.

**Vraag 2 · Reken het uit.** In dit voorbeeld verdient Esra 1.000 euro bruto. Ze krijgt 8 procent vakantiegeld. Hoeveel is dat?

- **A.** 8 euro
  → *Te weinig. 8 procent is 8 van elke 100 euro.*
- **B.** 800 euro
  → *Te veel. Dat zou bijna al haar loon zijn.*
- **C.** 80 euro
  → *Goed. Dat klopt.*

**Goed antwoord: C.**
**Som:** 1.000 euro is 10 keer 100 euro. Van elke 100 euro is 8 euro vakantiegeld. 10 × 8 = 80 euro.
**Waarom:** Procent betekent: van elke 100. Vakantiegeld is minstens 8 procent van je bruto loon ⚖️.
Zo kun je checken of het klopt.

**Vraag 3 · Waar of niet waar?** "Een klant betaalt 5 euro voor 3,20 euro. Dan geef je 1,80 euro terug."

**Antwoord: waar.**
**Waarom:** Van 3,20 naar 4 euro is 80 cent. Van 4 naar 5 euro is 1 euro. Samen is dat 1,80 euro. Zo
tel je terug vanaf het bedrag. Dat is makkelijker dan aftrekken.

**Vraag 4 · Reken het uit.** *Kaartje (loonstrook, in dit voorbeeld):* Loon per dag: 100 euro bruto · Ziek: 3 dagen · Doorbetaald: 70 procent. In dit voorbeeld is Mohammed 3 dagen ziek. Hij krijgt 70 procent van zijn loon. Hoeveel krijgt hij voor die dagen?

- **A.** 300 euro
  → *Dat is zijn hele loon. Hij krijgt hier 70 procent.*
- **B.** 70 euro
  → *Dat is voor 1 dag. Hij was 3 dagen ziek.*
- **C.** 210 euro
  → *Goed. Dat klopt.*

**Goed antwoord: C.**
**Som:** 3 × 100 = 300 euro. Van elke 100 euro krijgt hij 70 euro. 3 × 70 = 210 euro.
**Waarom:** Ben je ziek? Dan betaalt je werkgever minstens 70 procent ⚖️ van je loon door. In het eerste
jaar krijg je minstens het minimumloon ⚖️. Een cao geeft vaak meer. Soms zijn de eerste dagen
wachtdagen, zonder loon ⚖️. Kijk in je contract of cao. (Toegevoegd 30 oktober 2026: de regel van les
6.2, als som.)

*Redactie: een rekenvoorbeeld zonder wachtdag; 100 euro per dag is verzonnen.*

**Zo zeg je het:** "Ik heb 20 uur gewerkt. Dan krijg ik 300 euro bruto, toch?"

**Onthoud:** Uren keer uurloon is je bruto loon. Reken het na.

**Wie kan je helpen:** de loonadministratie · rijksoverheid.nl (minimumloon).

---

### Les 12.3 · Maten, gewichten en tellen

**Leerdoel:** je rekent met kilo, gram, liter en milliliter. Je telt voorraad slim.

**Scène** · *Beeld: Piotr bij een pallet met dozen in lagen. Op een klembord: de pakbon.*

> Piotr werkt in een magazijn. Er komt een pallet binnen. Op de pakbon staat: 40 dozen. Piotr
> moet checken of het klopt. Hij ziet 5 lagen. In elke laag staan 8 dozen.

**Vraag 1 · Reken het uit.** *Kaartje (pakbon):* 40 dozen · op de pallet: 5 lagen van 8 dozen. Hoeveel dozen staan er op de pallet?

- **A.** 13 dozen
  → *Je telde op. Hier moet je keer doen.*
- **B.** 40 dozen
  → *Goed. Het klopt met de pakbon.*
- **C.** 45 dozen
  → *Tel nog een keer: 5 keer 8.*

**Goed antwoord: B.**
**Som:** 5 × 8 = 40 dozen.
**Waarom:** Tel niet elke doos los. Tel één laag, en doe dat keer het aantal lagen. Klopt het niet met
de pakbon? Meld het meteen, vóór je tekent voor ontvangst.

**Vraag 2 · Reken het uit.** *Kaartje (etiket):* "Gebruik 20 ml per liter water." Esra vult een emmer met 5 liter water. Hoeveel middel doet ze erin?

- **A.** 100 ml
  → *Goed. Dat klopt.*
- **B.** 25 ml
  → *Je telde op. Hier moet je keer doen.*
- **C.** 20 ml
  → *Dat is voor 1 liter. De emmer is 5 liter.*

**Goed antwoord: A.**
**Som:** 20 ml voor elke liter. 5 × 20 = 100 ml.
**Waarom:** Meet het af met een maatbeker. Gok niet. Meer middel maakt niet schoner. Het is wel slecht
voor je huid en voor het milieu.

**Vraag 3 · Waar of niet waar?** "Een doos van 12 kilo is lichter dan een doos van 12.000 gram."

**Antwoord: niet waar.**
**Waarom:** Ze zijn even zwaar. 1 kilo is 1000 gram, dus 12 kilo is 12.000 gram. Goed om te weten: 1
liter is 1000 milliliter (ml). En 1 meter is 100 centimeter.

**Zo zeg je het:** "Op de pakbon staan 40 dozen. Ik tel er 38. Wil je meekijken?"

**Onthoud:** Tel slim: één laag, keer het aantal lagen. Meet af, en gok niet.

---

## Unit 13 · Je werk goed afronden

*In deze unit: een werkbon lezen, je werk voorbereiden, opruimen, laten controleren en afmelden.*

*Redactie: dit zijn de stappen uit het basisdeel van Entree: voorbereiden (B1-K1-W1), uitvoeren
(W2) en afmelden (W3) ⚖️. Uitvoeren zit al in units 7 en 8. Noem "Entree" en de codes niet in de app.*

### Les 13.1 · Een werkbon lezen en voorbereiden

**Leerdoel:** je leest een werkbon, je vraagt wat je niet snapt, en je legt je spullen klaar.

**Scène** · *Beeld: Mohammed bij een busje van een onderhoudsbedrijf, met een werkbon in zijn hand.*

> Mohammed werkt bij een onderhoudsbedrijf. Hij krijgt een werkbon van Henk. Een werkbon is een
> briefje met je opdracht. Mohammed moet eerst nog spullen pakken.

**Vraag 1 · Lees het kaartje.** *Kaartje (werkbon):* Adres: Lindelaan 12, flat 3 · Opdracht: 3 kranen vervangen, type B · Materiaal: 3 kranen type B, 3 rubbers, kit · Klant: mevrouw De Vries, thuis tot 12.00 uur. Wat neemt Mohammed mee?

- **A.** 3 kranen type B, 3 rubbers en kit.
  → *Goed. Dat staat bij materiaal.*
- **B.** 1 kraan. De rest ligt er vast al.
  → *Op de werkbon staan 3 kranen. Neem alles mee.*
- **C.** Alleen zijn gereedschap. Kranen koopt hij onderweg.
  → *Dan kost het extra tijd. En misschien klopt het type niet.*

**Goed antwoord: A.**
**Waarom:** Op een werkbon staat wat je moet doen, waar, en met welk materiaal. Lees hem helemaal, vóór
je weggaat. Kijk ook naar de tijd: de klant is maar tot 12.00 uur thuis.

**Vraag 2 · Wat is het beste?** Mohammed weet niet wat "type B" is. Wat kan Mohammed het beste doen?

- **A.** Hij neemt de kraan die er het meest op lijkt.
  → *Dan klopt het misschien niet. Dan moet hij terug.*
- **B.** Hij vraagt het aan Henk, vóór hij vertrekt.
  → *Goed. Dan weet hij het zeker.*
- **C.** Hij gaat eerst naar de klant, en kijkt daar.
  → *Dan gaat hij misschien twee keer heen en weer.*

**Goed antwoord: B.**
**Waarom:** Vraag het vóór je begint. Een vraag aan het begin is normaal. Een fout aan het eind kost veel
meer tijd. Voor jou, en voor de klant.

**Vraag 3 · Waar of niet waar?** "Een goede voorbereiding is: je werk in stappen verdelen, en dan pas beginnen."

**Antwoord: waar.**
**Waarom:** Bedenk eerst: wat doe ik eerst, en wat daarna? Leg je spullen klaar. Check ook je
beschermende spullen. Weet je hoeveel tijd je hebt? Dan kun je beginnen.

**Vraag 4 · Wat zeg je terug?** Henk legt uit wat type B is: "Type B is de kraan met de blauwe stip. Neem er 3 mee." Wat zegt Mohammed terug?

- **A.** "Dus 3 kranen met een blauwe stip. Klopt dat?"
  → *Goed. Zo hoort Henk of Mohammed het goed begrepen heeft.*
- **B.** "Oké, dat snap ik. Ik ga meteen de kranen halen."
  → *Vriendelijk. Maar Henk weet nu niet wat Mohammed begrepen heeft.*
- **C.** "Ja, ja. Ik ga al."
  → *Dan weet niemand of hij het echt snapt.*

**Goed antwoord: A.**
**Waarom:** Zeg in je eigen woorden terug wat je gaat doen. Zo hoor je allebei of het klopt. Dat kost
een paar seconden. En het voorkomt fouten. (Toegevoegd 30 oktober 2026: terugzeggen, zoals in les 2.3.)

**Zo zeg je het:** "Ik heb de werkbon gelezen. Wat bedoel je met type B?"

**Onthoud:** Eerst lezen, vragen en klaarleggen. Dan pas beginnen.

---

### Les 13.2 · Opruimen, laten controleren en afmelden

**Leerdoel:** je ruimt je werkplek op, je laat je werk nakijken, en je zegt wat klaar is en wat niet.

**Scène** · *Beeld: Sanne in een gang van een kantoor, met een schoonmaakkar. Op een klembord een lijst met vinkjes.*

> Sanne werkt in een schoonmaakploeg op een kantoor. Haar dienst is bijna klaar. Ze heeft alle
> kamers gedaan, behalve kamer 4. Die zat op slot. Linda is haar leidinggevende.

**Vraag 1 · Wat is het beste?** Wat doet Sanne met kamer 4?

- **A.** Ze zet een vinkje. Morgen doet ze hem wel.
  → *Dan klopt de lijst niet. Niemand weet het dan.*
- **B.** Ze zegt niets. Het was niet haar schuld.
  → *Klopt. Maar Linda moet het wel weten.*
- **C.** Ze zegt tegen Linda: "Kamer 4 zat op slot."
  → *Goed. Dan kan Linda het regelen.*

**Goed antwoord: C.**
**Waarom:** Afmelden is: zeggen wat klaar is, en wat niet. Ook als het niet jouw schuld is. Zeg ook
wat je zag. Een vinkje bij iets wat niet klaar is, geeft later problemen.

**Vraag 2 · Wat is het beste?** Sanne is klaar. Haar kar staat nog in de gang. Wat kan Sanne het beste doen?

- **A.** Ze laat de kar staan. Morgen komt ze toch weer.
  → *Dan staat hij in de weg. Iemand kan erover vallen.*
- **B.** Ze ruimt de kar op en zet de schoonmaakspullen weg.
  → *Goed. Zo kan de volgende meteen beginnen.*
- **C.** Ze vraagt een collega om de kar op te ruimen.
  → *Dat is haar werk. Haar collega heeft eigen werk.*

**Goed antwoord: B.**
**Waarom:** Ruim je werkplek op vóór je weggaat. Zet je spullen en gereedschap terug op hun plek. Dan kan
de volgende meteen beginnen. En niemand valt erover.

**Vraag 3 · Waar of niet waar?** "Kijkt je leidinggevende je werk na? Dan vertrouwt ze je niet."

**Antwoord: niet waar.**
**Waarom:** Controleren hoort bij goed werk. Ook collega's die het werk al lang doen, laten hun werk nakijken. Zo vind je
fouten vóór de klant ze ziet. Je mag het ook zelf vragen: "Wil je even kijken?"

**Zo zeg je het:** "Ik ben klaar. Kamer 4 zat op slot. Wil je even kijken?"

**Onthoud:** Klaar? Ruim op en laat het nakijken. Zeg wat klaar is en wat niet.

---

## Unit 14 · Stage lopen

*In deze unit: de praktijkovereenkomst (POK), wie je begeleidt, feedback, je beoordeling, en wat je
doet als het niet goed gaat. In het mbo heet stage ook bpv: beroepspraktijkvorming.*

### Les 14.1 · Je stageovereenkomst (POK) en wie wie is

**Leerdoel:** je weet wat de POK is, wie je begeleidt, en wat je regelt vóór je begint.

**Scène** · *Beeld: Jayden bij de balie van zijn school, met een formulier in zijn hand.*

> Jayden zit op het mbo. Hij gaat 2 dagen per week stage lopen in een supermarkt. Op school krijgt
> hij een formulier: de praktijkovereenkomst. Iedereen noemt het de POK.

**Vraag 1 · Waar of niet waar?** "De POK teken je pas als je stage al bezig is."

**Antwoord: niet waar.**
**Waarom:** De POK is een afspraak tussen 3 partijen ⚖️. Dat zijn jij, je school en het bedrijf. Alle
drie tekenen vóór de stage begint ⚖️. Er staat in wanneer je stage loopt, en wie je begeleidt.

**Vraag 2 · Wat is het beste?** Op de eerste dag ontmoet Jayden Linda. Zij is zijn praktijkopleider. Wat doet een praktijkopleider?

- **A.** Ze begeleidt je op het werk, en leert je het vak.
  → *Goed. Met vragen ga je in het bedrijf eerst naar haar.*
- **B.** Ze is je docent, en ze geeft je cijfers op school.
  → *Nee. Ze werkt in het bedrijf, niet op school.*
- **C.** Ze regelt je loon en je arbeidscontract.
  → *Nee. Op stage heb je meestal geen arbeidscontract.*

**Goed antwoord: A.**
**Waarom:** De praktijkopleider werkt in het bedrijf. Zij leert je het werk en geeft je feedback. Op
school heb je ook iemand: de stagebegeleider of bpv-begeleider. Die komt vaak een keer langs ⚖️.

**Vraag 3 · Wat is het beste?** Het bedrijf zegt: "Dat papiertje van school komt later wel. Begin maandag maar." Wat kan Jayden het beste doen?

- **A.** Hij begint maandag. Het papier komt later wel.
  → *Dat is logisch. Maar dan telt zijn stage misschien niet mee.*
- **B.** Hij vraagt eerst aan school of de POK klaar is.
  → *Goed. Dan weet hij zeker dat alles klopt.*
- **C.** Hij zoekt meteen een ander stagebedrijf.
  → *Dat hoeft niet. Eerst even vragen.*

**Goed antwoord: B.**
**Waarom:** Zonder POK telt je stage misschien niet mee voor je diploma ⚖️. Het bedrijf moet ook erkend
zijn als leerbedrijf ⚖️. Dat check je op stagemarkt.nl. Je school helpt je daarbij.

**Zo zeg je het:** "Is mijn POK al getekend? Dan kan ik beginnen."

**Onthoud:** Eerst de POK tekenen. Dan pas beginnen met je stage.

**Wie kan je helpen:** je stagebegeleider of bpv-begeleider van school · je praktijkopleider ·
stagemarkt.nl (van SBB).

---

### Les 14.2 · Feedback en beoordeling

**Leerdoel:** je vraagt om feedback, je doet er iets mee, en je weet wat je doet met je beoordeling.

**Scène** · *Beeld: Fatima en Mark aan een tafel in de kantine van een hotel. Op tafel een formulier.*

> Fatima loopt stage in een hotel. Ze werkt bij de schoonmaak en het linnen. Na 6 weken heeft ze een
> gesprek met Mark, haar praktijkopleider. Hij zegt: "Je werkt netjes. Maar je vraagt te weinig."

**Vraag 1 · Wat is het beste?** Fatima vindt dat niet leuk om te horen. Wat kan Fatima het beste doen?

- **A.** Ze zegt: "Dat klopt niet. Ik weet alles al."
  → *Dat snap ik. Maar zo leert ze er niets van.*
- **B.** Ze knikt, en ze zegt verder niets.
  → *Dan weet ze nog niet wat ze anders kan doen.*
- **C.** Ze vraagt: "Wanneer had ik iets moeten vragen?"
  → *Goed. Met een voorbeeld weet ze wat beter kan.*

**Goed antwoord: C.**
**Waarom:** Feedback gaat over je werk, niet over jou. Vraag om een voorbeeld. Dan weet je wat je
anders kunt doen. Zo leer je het meest op je stage.

**Vraag 2 · Waar of niet waar?** "Je mag zelf om feedback vragen, ook zonder gesprek."

**Antwoord: waar.**
**Waarom:** Vragen om feedback laat zien dat je wilt leren. Vraag het na een klus: "Wat ging goed? Wat
kan beter?" Schrijf het op, bijvoorbeeld in je logboek of portfolio.

**Vraag 3 · Wat is het beste?** Aan het eind krijgt Fatima een beoordeling. Ze is het er niet mee eens. Wat kan Fatima het beste doen?

- **A.** Ze bespreekt het met Mark, en met haar begeleider van school.
  → *Goed. Zo kan ze uitleggen waarom.*
- **B.** Ze tekent het formulier niet, en ze stopt met haar stage.
  → *Dat snap ik. Maar dan mist ze misschien haar diploma.*
- **C.** Ze zet een bericht over het hotel op social media.
  → *Dat maakt het vaak erger. Praat er eerst over.*

**Goed antwoord: A.**
**Waarom:** Het oneens zijn mag. Zeg rustig waarom, met voorbeelden. Bespreek het ook met je school.
De school beslist over je examen. Het bedrijf geeft zijn oordeel ⚖️.

**Zo zeg je het:** "Wat ging goed? En wat kan ik beter doen?"

**Onthoud:** Vraag zelf om feedback. Vraag om een voorbeeld.

**Wie kan je helpen:** je praktijkopleider · je stagebegeleider of bpv-begeleider van school.

---

### Les 14.3 · Als het niet goed gaat

**Leerdoel:** je weet wat je doet als je ziek bent of weinig leert. Ook als ze je slecht behandelen.

**Scène** · *Beeld: Kevin alleen in een hoek van een magazijn, bij een berg lege dozen. Hij kijkt op de klok.*

> Kevin loopt stage in een magazijn. Hij zou het vak leren. Maar hij maakt elke dag alleen dozen
> plat. Niemand legt iets uit. Hij werkt ook vaak langer dan afgesproken.

**Vraag 1 · Wat is het beste?** Wat doet Kevin?

- **A.** Hij blijft gewoon gaan. Over 2 maanden is het klaar.
  → *Dat is logisch. Maar dan leert hij weinig.*
- **B.** Hij stopt met de stage, zonder iets te zeggen.
  → *Niet doen. Dan heeft hij misschien een probleem met school.*
- **C.** Hij praat met zijn praktijkopleider, en ook met school.
  → *Goed. Zo kan er iets veranderen.*

**Goed antwoord: C.**
**Waarom:** Een stage is om te leren. Je bent geen goedkope werknemer ⚖️. Ook op stage gelden de regels
voor werktijden en pauze ⚖️. Leer je weinig? Zeg het eerst tegen je praktijkopleider. Helpt dat niet?
Ga naar je begeleider van school. Stop nooit zomaar.

**Vraag 2 · Waar of niet waar?** "Ben je ziek op stage? Dan meld je je alleen ziek bij school."

**Antwoord: niet waar.**
**Waarom:** Meld je ziek bij het bedrijf, vóór je begint. Meld het ook bij school ⚖️. Hoe het moet,
staat vaak in je POK of de stagegids. Weer beter? Meld dat ook bij allebei.

**Vraag 3 · Wat is het beste?** Een collega maakt grappen over Kevins afkomst. Andere stagiairs krijgen beter werk. Wat kan Kevin het beste doen?

- **A.** Hij meldt het bij school. Daar is een meldpunt.
  → *Goed. School moet hem dan helpen.*
- **B.** Hij lacht mee. Hij wil geen gedoe op zijn stage.
  → *Dat snap ik. Maar het mag niet, en hij hoeft het niet te accepteren.*
- **C.** Hij zoekt zelf een nieuwe stage, zonder iets te zeggen.
  → *Dan gaat het bij de volgende stagiair misschien ook zo.*

**Goed antwoord: A.**
**Waarom:** Discriminatie op stage is verboden ⚖️. Elke mbo-school moet een meldpunt hebben ⚖️. Je kunt
ook naar de vertrouwenspersoon van school. Of naar discriminatie.nl. SBB kan het bedrijf erop
aanspreken ⚖️.

**Zo zeg je het:** "Ik leer hier weinig. Kunnen we er samen met school over praten?"

**Onthoud:** Gaat het niet goed op stage? Praat erover: eerst op je werk, dan met school.

**Wie kan je helpen:** je stagebegeleider of bpv-begeleider · de vertrouwenspersoon van school · het
meldpunt van je school of van SBB ⚖️ · discriminatie.nl · JOB, de organisatie voor mbo-studenten ⚖️ ·
bij te lange werktijden: de Nederlandse Arbeidsinspectie.

---

## Unit 15 · Digitaal op je werk

*In deze unit: DigiD, inloggen en uitloggen, een sterk wachtwoord, nepberichten (phishing), en AI op je werk.*

### Les 15.1 · DigiD en inloggen

**Leerdoel:** je weet wat DigiD is, je houdt het voor jezelf, en je logt uit op een gedeelde computer.

**Scène** · *Beeld: Piotr aan de keukentafel, met een brief en zijn telefoon.*

> Piotr moet zijn belastingaangifte doen. Daarvoor heeft hij DigiD nodig. DigiD is je digitale
> sleutel voor de overheid. Zijn uitzendbureau zegt: "Geef ons je DigiD. Dan doen wij het."

**Vraag 1 · Wat is het beste?** Wat doet Piotr?

- **A.** Hij geeft zijn DigiD. Het bureau bedoelt het goed.
  → *Dat snap ik. Maar dan kunnen zij alles met zijn gegevens.*
- **B.** Hij zegt nee, en hij vraagt hulp in de bibliotheek.
  → *Goed. Daar helpen ze gratis, en veilig.*
- **C.** Hij geeft alleen zijn wachtwoord, niet zijn naam.
  → *Met zijn wachtwoord kunnen ze ook alles.*

**Goed antwoord: B.**
**Waarom:** Je DigiD is alleen van jou. Je geeft hem nooit aan iemand anders. Ook niet aan je
werkgever of uitzendbureau. Wil iemand je helpen? Dat kan veilig met DigiD Machtigen ⚖️.

**Vraag 2 · Waar of niet waar?** "Vraag je DigiD aan? Dan krijg je een code per post."

**Antwoord: waar.**
**Waarom:** Je vraagt DigiD aan op digid.nl. Je hebt een BSN nodig, en een adres in Nederland ⚖️. Je
krijgt een brief met een code ⚖️. Daarmee zet je DigiD aan. Doe dat snel: de code werkt maar kort ⚖️.
Met de DigiD app log je daarna makkelijk in.

**Vraag 3 · Wat is het beste?** Op het werk staat één computer voor iedereen. Sanne heeft haar uren ingevuld. Wat kan Sanne het beste doen?

- **A.** Ze laat het scherm aan. Haar collega begint zo.
  → *Dan kan een ander in haar account.*
- **B.** Ze zet de computer uit met de knop.
  → *Dan is ze misschien niet goed uitgelogd.*
- **C.** Ze logt uit, en dan gaat ze weg.
  → *Goed. Zo blijft haar account van haar.*

**Goed antwoord: C.**
**Waarom:** Op een gedeelde computer log je altijd uit. Anders kan een ander in jouw account. Bijvoorbeeld
in je rooster of je loonstrook. Zet ook je telefoon op slot.

**Zo zeg je het:** "Mijn DigiD geef ik niet. Kunt u mij op een andere manier helpen?"

**Onthoud:** Je DigiD is alleen van jou. Geef hem aan niemand.

**Wie kan je helpen:** de bibliotheek (Informatiepunt Digitale Overheid) · de helpdesk van DigiD ⚖️ ·
de gemeente.

---

### Les 15.2 · Veilig wachtwoord en phishing

**Leerdoel:** je maakt een sterk wachtwoord, je herkent een nepbericht, en je meldt het als je toch klikte.

**Scène** · *Beeld: Esra kijkt geschrokken naar haar telefoon. Op het scherm een mail met een rode knop.*

> Esra krijgt een mail. Die lijkt van haar werk te komen. "Je loonstrook staat klaar. Log binnen 1
> uur in. Anders krijg je geen loon." Onder de mail staat een knop.

**Vraag 1 · Wat is het beste?** Esra schrikt van de mail. Wat kan Esra het beste doen?

- **A.** Ze klikt snel op de knop. Ze wil haar loon niet kwijt.
  → *Dat snap ik. Maar zo stelen oplichters haar wachtwoord.*
- **B.** Ze stuurt de mail door naar haar collega's.
  → *Dan klikken zij er misschien op.*
- **C.** Ze klikt niet. Ze opent zelf de app van haar werk.
  → *Goed. Daar ziet ze of de loonstrook er echt is.*

**Goed antwoord: C.**
**Waarom:** Haast, dreigen en een knop: zo herken je phishing. Phishing is een nepbericht om je gegevens
te stelen. Klik niet. Ga zelf naar de echte app of website. Meld de mail bij je werk.

**Vraag 2 · Waar of niet waar?** "Een kort wachtwoord met je naam en je geboortejaar is veilig genoeg."

**Antwoord: niet waar.**
**Waarom:** Je naam en geboortejaar zijn makkelijk te raden. Een lang wachtwoord is veel sterker.
Bijvoorbeeld vier gewone woorden achter elkaar. Dat onthoud je ook makkelijk. Gebruik niet overal
hetzelfde wachtwoord.

**Vraag 3 · Wat is het beste?** Kevin heeft toch op een nep-link geklikt. Hij vulde zijn wachtwoord in. Wat kan Kevin het beste doen?

- **A.** Hij zegt niets. Misschien gebeurt er niets.
  → *Ik snap het. Maar dan kan een oplichter verder.*
- **B.** Hij verandert meteen zijn wachtwoord, en meldt het op zijn werk.
  → *Goed. Hoe sneller, hoe beter.*
- **C.** Hij gooit de mail weg. Dan is het probleem weg.
  → *De mail is weg. Maar oplichters hebben zijn wachtwoord nu.*

**Goed antwoord: B.**
**Waarom:** Snel zijn helpt. Verander je wachtwoord meteen. Meld het bij je leidinggevende of de ICT-afdeling. Gaat het om je bank? Bel dan meteen je bank. Dit gebeurt bij veel mensen. Schaam je niet.

**Zo zeg je het:** "Ik heb op een rare link geklikt. Wat moet ik doen?"

**Onthoud:** Haast en een knop? Niet klikken. Ga zelf naar de echte app.

**Wie kan je helpen:** je leidinggevende of de ICT-afdeling · je bank · fraudehelpdesk.nl ·
veiliginternetten.nl.

---

### Les 15.3 · AI op je werk

**Leerdoel:** je gebruikt AI slim en veilig, en belangrijke dingen check je bij een mens.

**Scène** · *Beeld: Malik kijkt naar zijn telefoon. Op het scherm een chatbot met een lang antwoord.*

> Malik krijgt een brief van zijn werk. Hij begrijpt de brief niet goed. Hij vraagt het aan een
> chatbot. Dat is een app met AI. De chatbot zegt: "Je krijgt dit jaar geen vakantiegeld."

**Regel (ongeschreven) · AI helpt, maar maakt fouten. Check belangrijke dingen bij een mens.**
AI kan vertalen, een brief uitleggen of een bericht schrijven. Maar AI maakt fouten. En het klinkt
toch heel zeker. Gaat het om je contract, loon, veiligheid of medicijnen? Vraag het een mens. Zet
geen BSN, wachtwoord of namen van klanten in een chatbot.

**Vraag 1 · Wat is het beste?** Wat doet Malik?

- **A.** Hij gaat met de brief naar HR, en vraagt hoe het zit.
  → *Goed. Een mens van zijn werk weet hoe het echt zit.*
- **B.** Hij gelooft de chatbot. Die weet het vast.
  → *Dat is logisch. Maar AI kan het mis hebben, ook als het zeker klinkt.*
- **C.** Hij belt boos naar zijn werk. Hij wil zijn geld.
  → *Eerst checken. Het antwoord van de chatbot kan fout zijn.*

**Goed antwoord: A.**
**Waarom:** AI kan een brief goed uitleggen. Maar AI maakt ook fouten, en klinkt toch zeker. Gaat het
om je contract of je loon? Check het bij een mens. Bijvoorbeeld bij HR of je leidinggevende.

**Vraag 2 · Waar of niet waar?** "Je mag namen en adressen van klanten in een chatbot zetten. Dan werk
je sneller."

**Antwoord: niet waar.**
**Waarom:** Het bedrijf achter de chatbot kan bewaren wat je erin zet. Zet er dus geen persoonsgegevens in. Geen BSN, wachtwoord of bankgegevens. En geen namen of foto's van klanten, patiënten of collega's. Ook geen papieren van je werk. Vraag eerst naar de regels voor AI op je werk.

**Vraag 3 · Wat is het beste?** Ewa krijgt een spraakbericht van een nieuw nummer. Het klinkt als haar
leidinggevende: "Ik heb snel je inlogcode nodig. Stuur hem nu, het is dringend."

- **A.** Ze stuurt de code. Het is haar baas.
  → *Dat snap ik. Maar met AI kan iemand een stem nadoen.*
- **B.** Ze belt zelf terug, op het nummer dat ze kent.
  → *Goed. Zo weet ze zeker wie het is.*
- **C.** Ze vraagt in een bericht: "Ben jij het echt?"
  → *Een oplichter zegt gewoon ja.*

**Goed antwoord: B.**
**Waarom:** Met AI kunnen oplichters een stem of een filmpje nadoen. Haast, geld of een code, en een
nieuw nummer? Dat is een alarm. Stuur niets. Bel zelf terug op het nummer dat je kent.

**Vraag 4 · Waar of niet waar?** "Een computer beslist dat je minder uren krijgt. Je mag vragen dat een
mens ernaar kijkt."

**Antwoord: waar.**
**Waarom:** Beslist een computer alleen over iets belangrijks voor jou? Bijvoorbeeld minder uren of
ontslag? Dan mag je om uitleg vragen ⚖️. En je mag vragen dat een mens ernaar kijkt ⚖️. Dat staat in de
privacywet (AVG).

**Vraag 5 · Wat is het beste?** Op je werk komt een nieuwe camera met AI. Die "leest" aan je gezicht of je
moe of boos bent.

- **A.** Prima. Dan weet de baas hoe ik me voel.
  → *Dit mag juist niet op het werk.*
- **B.** Ik kijk de hele dag vrolijk. Dan is er niets aan de hand.
  → *Het probleem blijft. En dat is vermoeiend.*
- **C.** Ik vraag het de ondernemingsraad of de vakbond. Dit mag niet zomaar.
  → *Goed. Zij kunnen er iets aan doen.*

**Goed antwoord: C.**
**Waarom:** Een computer mag op het werk niet je gevoelens lezen. Dat staat in de Europese AI-wet ⚖️.
Alleen voor je gezondheid of je veiligheid mag het wel. Heeft je bedrijf een ondernemingsraad? Dan
moet die instemmen met systemen die personeel volgen ⚖️.

**Vraag 6 · Wie vraag je het?** Je wilt AI gebruiken voor je werk. Je weet niet of het mag.
Goed antwoord: je leidinggevende. *Veel bedrijven hebben regels voor AI. Vraag je leidinggevende wat
mag. Soms weet de ICT-afdeling het ook.*

**Zo zeg je het:** "Mag ik hier AI voor gebruiken?"

**Onthoud:** AI helpt, maar maakt fouten. Check belangrijke dingen bij een mens.

**Wie kan je helpen:** je leidinggevende (de regels voor AI op je werk) · de ICT-afdeling · de
ondernemingsraad of de vakbond · het Juridisch Loket.

*Redactie:* geen jaartallen in de app (vaste schrijfregel). De datum van het verbod op
emotieherkenning (2 februari 2025) staat alleen hier en in `docs/juridische-check.md`. Les 15.3 telt
mee in de tally van de Entree-aanvulling: A, B en C zijn elk 1 keer het goede antwoord, en de
waar/niet-waar-vragen zijn 1 keer waar en 1 keer niet waar.

---

## Unit 16 · Meedoen in Nederland

*In deze unit: wie Nederland bestuurt, wie mag stemmen, grondrechten, en de rechtsstaat: politie,
rechter en bezwaar. Feitelijk en neutraal.*

*Redactie: noem geen partijen, politici of meningen over beleid. Bij elke vraag over stemrecht: het
hangt af van de verkiezing en de nationaliteit. Laat deze unit extra nakijken. ⚖️*

### Les 16.1 · Hoe Nederland bestuurd wordt, en stemmen

**Leerdoel:** je weet wat de gemeenteraad en de Tweede Kamer doen, en wie voor welke verkiezing mag stemmen.

**Scène** · *Beeld: Esra en Piotr lopen langs een school. Op de deur hangt een bord: "Stembureau".*

> Esra en Piotr werken samen in een fabriek. Esra heeft de Nederlandse nationaliteit. Piotr komt uit
> Polen. Hij woont al 3 jaar in Nederland. Binnenkort zijn er verkiezingen voor de gemeenteraad.

**Vraag 1 · Waar of niet waar?** "Piotr mag ook stemmen voor de gemeenteraad."

**Antwoord: waar.**
**Waarom:** Voor de gemeenteraad mogen meer mensen stemmen dan alleen Nederlanders ⚖️. Mensen uit een
ander EU-land mogen stemmen als ze hier wonen ⚖️. Polen hoort bij de EU. Mensen van buiten de EU mogen
stemmen na 5 jaar in Nederland. Ze moeten al die tijd een verblijfsvergunning hebben ⚖️. Je moet wel 18 jaar of ouder zijn ⚖️.

*Redactie: voorwaarden voor niet-EU-burgers: 5 jaar onafgebroken legaal verblijf, op de peildatum
van de verkiezing ⚖️ (Kieswet; rijksoverheid.nl, "Wie mag stemmen bij de gemeenteraadsverkiezingen").*

**Vraag 2 · Wat is het beste?** Piotr wil weten waarvoor hij stemt. Wat doet de gemeenteraad?

- **A.** De gemeenteraad maakt de wetten voor heel Nederland.
  → *Nee. Dat doen de Tweede Kamer en de regering samen.*
- **B.** De gemeenteraad beslist over je eigen stad of dorp.
  → *Goed. Bijvoorbeeld over wegen, afval en sport.*
- **C.** De gemeenteraad kiest de koning.
  → *Nee. Niemand kiest de koning.*

**Goed antwoord: B.**
**Waarom:** De gemeenteraad beslist over je stad of dorp. De burgemeester en de wethouders voeren het
uit. De Tweede Kamer maakt wetten voor heel Nederland, samen met de regering. De Tweede Kamer heeft
150 leden ⚖️.

**Vraag 3 · Waar of niet waar?** "Iedereen die in Nederland werkt, mag stemmen voor de Tweede Kamer."

**Antwoord: niet waar.**
**Waarom:** Voor de Tweede Kamer moet je de Nederlandse nationaliteit hebben ⚖️. En je moet 18 jaar of
ouder zijn ⚖️. Stemmen is niet verplicht. Stemmen is geheim: niemand mag meekijken.

**Zo zeg je het:** "Mag ik stemmen? En waar vind ik mijn stempas?"

**Onthoud:** Of je mag stemmen, hangt af van de verkiezing en je nationaliteit. Vraag het de gemeente.

**Wie kan je helpen:** de gemeente · rijksoverheid.nl (verkiezingen) · ProDemos, voor neutrale
uitleg over politiek ⚖️.

---

### Les 16.2 · Grondrechten en gelijke behandeling

**Leerdoel:** je kent een paar grondrechten, en je weet dat ze voor iedereen gelden, ook buiten je werk.

**Scène** · *Beeld: Dewi in de pauze in een kantine. Op tafel een krant. Twee collega's praten.*

> In de pauze praten de collega's van Dewi over het nieuws. Kevin zegt: "In Nederland mag je alles
> zeggen." Mohammed zegt: "Niet alles. Je mag niemand bedreigen." Dewi weet niet wie gelijk heeft.

**Vraag 1 · Wat is het beste?** Wie heeft gelijk?

- **A.** Kevin. Je mag hier echt alles zeggen.
  → *Bijna. Je mag veel zeggen, maar niet alles.*
- **B.** Mohammed. Je mag veel zeggen, maar er zijn grenzen.
  → *Goed. Bedreigen en discrimineren mag niet.*
- **C.** Niemand. Over het nieuws praat je niet op je werk.
  → *Dat mag wel. Doe het met respect.*

**Goed antwoord: B.**
**Waarom:** In Nederland heb je vrijheid van meningsuiting ⚖️. Je mag zeggen wat je denkt, ook over de
regering. Maar bedreigen en discrimineren mag niet. Dat is strafbaar ⚖️. Op je werk kan je baas ook regels hebben. Bijvoorbeeld over hoe je met elkaar praat.

**Vraag 2 · Waar of niet waar?** "In de Grondwet staat dat iedereen gelijk behandeld moet worden."

**Antwoord: waar.**
**Waarom:** Dat staat in artikel 1 van de Grondwet ⚖️. De Grondwet is de belangrijkste wet van
Nederland. Discriminatie om je geloof, afkomst, geslacht of iets anders mag niet ⚖️. Ook vrijheid van
geloof is een grondrecht ⚖️.

**Vraag 3 · Wat is het beste?** Fatima belt over een kamer. De verhuurder hoort haar naam. "Hij is al weg." Een dag later staat de kamer weer online. Wat kan Fatima het beste doen?

- **A.** Ze laat het gaan. Zo gaat het nou eenmaal.
  → *Ik snap het, maar het mag niet.*
- **B.** Ze stuurt de verhuurder een boos bericht.
  → *Dat snap ik. Maar zo verandert er niets.*
- **C.** Ze schrijft op wat er gebeurde, en meldt het.
  → *Goed. Bij een meldpunt helpen ze haar gratis.*

**Goed antwoord: C.**
**Waarom:** Discriminatie is ook verboden bij wonen ⚖️. Schrijf op wat er gebeurde, met de datum. Maak
een screenshot van de advertentie. Meld het bij discriminatie.nl. Daar helpen ze je gratis.

**Zo zeg je het:** "Ik wil discriminatie melden. Wat moet ik doen?"

**Onthoud:** Iedereen heeft dezelfde rechten. Discriminatie mag niet, ook niet buiten je werk.

**Wie kan je helpen:** discriminatie.nl · het College voor de Rechten van de Mens · het Juridisch
Loket · bij bedreiging: de politie.

---

### Les 16.3 · Recht en plicht: politie, rechter, bezwaar

**Leerdoel:** je weet wat de politie en de rechter doen, en een paar rechten en plichten die je hebt.

**Scène** · *Beeld: Jayden op een perron. Twee agenten in uniform spreken hem aan.*

> Jayden wacht op de trein. Twee agenten spreken hem aan. "Mogen we je ID zien?" Jayden heeft niets
> fout gedaan. Hij vindt het vervelend.

**Vraag 1 · Wat is het beste?** Wat doet Jayden?

- **A.** Hij laat rustig zijn ID zien.
  → *Goed. Dat moet als de politie erom vraagt.*
- **B.** Hij zegt: "Ik heb niets gedaan," en loopt weg.
  → *Dat is logisch. Maar dan kan hij een boete krijgen.*
- **C.** Hij zegt dat zijn ID thuis ligt. Dat is niet waar.
  → *Niet doen. Dan maakt hij het moeilijker voor zichzelf.*

**Goed antwoord: A.**
**Waarom:** Vraagt de politie om je ID? Vanaf 14 jaar moet je het laten zien ⚖️. Dat heet de
identificatieplicht. Geen ID bij je? Dan kun je een boete krijgen ⚖️. Vond je het niet eerlijk? Je
kunt later een klacht indienen bij de politie ⚖️.

**Vraag 2 · Waar of niet waar?** "In Nederland moet ook de regering zich aan de wet houden."

**Antwoord: waar.**
**Waarom:** Nederland is een rechtsstaat. De regels gelden voor iedereen: voor jou, voor bedrijven en
voor de regering. De politie zorgt voor veiligheid. Een rechter beslist bij een ruzie of een misdrijf.
De rechter is onafhankelijk. De regering mag de rechter niet vertellen wat hij beslist.

**Vraag 3 · Wat is het beste?** Esra krijgt een brief van de gemeente met een boete. Ze vindt dat de boete niet klopt. Wat kan Esra het beste doen?

- **A.** Ze betaalt niet, en ze gooit de brief weg.
  → *Niet doen. Dan wordt de boete vaak hoger.*
- **B.** Ze belt 112 om te klagen.
  → *112 is alleen voor spoed. Dit is geen spoed.*
- **C.** Ze maakt bezwaar, vóór de datum in de brief.
  → *Goed. Zo kijkt iemand er opnieuw naar.*

**Goed antwoord: C.**
**Waarom:** Vind je een boete of besluit niet eerlijk? Dan mag je bezwaar maken ⚖️. Hoe dat moet, staat
in de brief. Let goed op de datum ⚖️. Niet betalen maakt de boete vaak hoger ⚖️. Het Juridisch Loket
geeft gratis advies.

**Zo zeg je het:** "Ik ben het niet eens met deze boete. Hoe maak ik bezwaar?"

**Onthoud:** De wet geldt voor iedereen. Oneens met een besluit? Maak op tijd bezwaar.

**Wie kan je helpen:** het Juridisch Loket · de politie: 112 bij spoed, 0900-8844 zonder spoed ⚖️ ·
een advocaat (soms betaalt de overheid mee ⚖️).

---

## Unit 17 · Duurzaam werken

*In deze unit: afval scheiden op je werk, gevaarlijk afval, en zuinig zijn met materiaal, water en
energie.*

### Les 17.1 · Afval scheiden op je werk

**Leerdoel:** je scheidt afval zoals het op je werk hoort, en gevaarlijk afval gooi je nooit bij het gewone afval.

**Scène** · *Beeld: Mohammed in de achterruimte van een bakkerij, bij vier afvalbakken met verschillende kleuren.*

> Mohammed werkt in een bakkerij. Na het werk heeft hij veel afval. Karton, oud brood en lege
> flessen van schoonmaakmiddel. Er staan vier bakken. Hij heeft haast.

**Vraag 1 · Wat is het beste?** Waar laat Mohammed het karton?

- **A.** Plat gemaakt in de bak voor papier en karton.
  → *Goed. Plat past er veel meer in.*
- **B.** In de bak voor restafval. Dat is het snelst.
  → *Dat is snel, ja. Maar karton hoort apart.*
- **C.** Naast de bakken. Iemand anders ruimt het wel op.
  → *Dan ligt het in de weg. En het is zijn afval.*

**Goed antwoord: A.**
**Waarom:** Bedrijven moeten afval scheiden ⚖️. Welke bakken er zijn, verschilt per bedrijf ⚖️. Weet je
het niet? Kijk op de sticker van de bak, of vraag het.

**Vraag 2 · Waar of niet waar?** "Een lege batterij mag je bij het gewone afval gooien."

**Antwoord: niet waar.**
**Waarom:** Batterijen, lampen en resten van chemische middelen zijn gevaarlijk afval ⚖️. Die moeten
altijd apart ⚖️. Giet ook nooit resten van middelen door de gootsteen. Vraag waar het gevaarlijke
afval heen moet.

**Vraag 3 · Wat is het beste?** Een collega zegt: "Scheiden heeft geen zin. Het gaat toch allemaal op één hoop." Wat kan Mohammed het beste doen?

- **A.** Hij gooit vanaf nu ook alles in één bak.
  → *Ik snap het. Maar op je werk volg je de regels.*
- **B.** Hij praat er lang met de collega over.
  → *Dat mag. Maar het lost de vraag niet op.*
- **C.** Hij blijft scheiden, en hij vraagt het aan Henk.
  → *Goed. Henk weet hoe ze het afval ophalen.*

**Goed antwoord: C.**
**Waarom:** Gescheiden afval wordt meestal ook apart opgehaald ⚖️. Van oud papier maken ze weer nieuw
papier. Weet je het niet zeker? Vraag het je leidinggevende. De regels op je werk volg je, ook als een collega het
anders doet.

**Zo zeg je het:** "In welke bak moet dit?"

**Onthoud:** Scheid je afval. Gevaarlijk afval nooit bij het gewone afval.

---

### Les 17.2 · Zuinig met materiaal en energie

**Leerdoel:** je gebruikt niet meer materiaal en energie dan nodig, en je meldt verspilling of een lek.

**Scène** · *Beeld: Dewi in een lege kleedkamer van een sportschool. Alle lampen zijn aan. Een kraan druppelt.*

> Dewi maakt 's avonds schoon in een sportschool. Iedereen is weg. Alle lampen zijn nog aan. In de
> kleedkamer druppelt een kraan.

**Vraag 1 · Wat is het beste?** Wat doet Dewi?

- **A.** Ze doet uit wat uit mag, en ze meldt de kraan.
  → *Goed. Zo bespaart ze energie en water.*
- **B.** Ze laat alles zo. Het is niet haar gebouw.
  → *Dat is logisch. Maar een lek kost veel water.*
- **C.** Ze probeert de kraan zelf te maken.
  → *Goed bedoeld. Maar dat is niet haar werk.*

**Goed antwoord: A.**
**Waarom:** Doe lampen en apparaten uit als dat mag. Vraag wat aan moet blijven, zoals de
noodverlichting. Meld een lek meteen. Zelf repareren doe je alleen als dat jouw werk is.

**Vraag 2 · Waar of niet waar?** "Een koelcel of vriezer houd je niet langer open dan nodig."

**Antwoord: waar.**
**Waarom:** Een open deur kost veel energie. Het eten wordt ook minder goed koud. Pak wat je nodig
hebt, en doe de deur dicht. Sluit een deur niet goed? Meld het.

**Vraag 3 · Wat is het beste?** Piotr werkt in de bouw. Er liggen veel stukken hout over. Hij heeft een stuk van 60 centimeter nodig. Wat kan Piotr het beste doen?

- **A.** Hij zaagt een stuk van een nieuwe plank. Dat gaat sneller.
  → *Dat gaat sneller, ja. Maar dan blijven de restjes liggen.*
- **B.** Hij kijkt eerst of er een restje is dat past.
  → *Goed. Dat scheelt geld en afval.*
- **C.** Hij neemt de restjes mee naar huis.
  → *Dat moet hij eerst vragen. Het hout is van het bedrijf.*

**Goed antwoord: B.**
**Waarom:** Zuinig werken scheelt geld en afval. Meet eerst, dan zaag je. Gebruik restjes als het kan.
Iets mee naar huis nemen? Vraag het altijd eerst. Het materiaal is van het bedrijf.

**Zo zeg je het:** "Mogen deze lampen uit? En de kraan lekt. Wie kan dat maken?"

**Onthoud:** Uit als het mag, dicht als het kan. Meld een lek meteen.

---

## 4. Schetsen voor extra sectorunits (2 lessen elk)

*Alleen titels en leerdoelen, behalve tuinbouw en kas (gebouwd, hieronder uitgewerkt). Uitwerken in
dezelfde vorm als de sectorlessen in deel 6 van het lespad. Ze passen bij Entree-profielen die nu niet gedekt zijn ⚖️. Lesletters zijn een voorstel.*

### Sector tuinbouw en kas · Werken in de tuinbouw (`r.kas`) · gebouwd

*Gebouwd op 30 oktober 2026, uitgewerkt uit de schets "groen" (G.1). Een van de grootste sectoren
voor arbeidsmigranten (Westland, oogsten, sorteren en inpakken). In de app: de sector "Tuinbouw",
bij "Waar werk je?" onder "Iets anders" (met "Weet ik nog niet") (`src/content/sectors.ts`). De Werkregels staan in
`src/content/regels/units/sector.ts`, het Taal-onderwerp "In de kas" (`u.kas`) in
`src/content/work.ts`. Focus: Veilig werken en Loon (Werkregels), Veiligheid en Loon (Taal).*

*De rest van de schets "groen" (werken met dieren, machines zoals een bosmaaier, teken) is nog
niet gebouwd. Zie onderaan.*

---

### Les T.1 · Veilig in kas en veld

**Leerdoel:** je beschermt je tegen hitte en spuitmiddelen. Je tilt en bukt zo dat je lichaam gezond blijft.

**Scène** · *Beeld: Piotr in een warme kas tussen hoge tomatenplanten. Hij veegt het zweet van zijn gezicht.*

> Piotr werkt in een kas in het Westland. Hij plukt tomaten. Buiten is het 30 graden. In de kas is
> het nog warmer. Hij wil zijn rij snel afmaken. Zijn fles water is al leeg.

**De regel (geschreven):** Drink op tijd. Een bespoten kas ga je pas in als het mag.
Je werkgever moet je beschermen tegen hitte ⚖️. Drink vaak water, ook als je nog geen dorst hebt.
Spuitmiddelen zijn middelen tegen beestjes en ziektes op de planten. Een kas die net bespoten is,
ga je pas in als het mag ⚖️. Spuiten mag je alleen met een opleiding en een bewijs daarvan ⚖️.

**Vraag 1 · Wat is het beste?** Piotr wordt duizelig. Zijn rij is nog niet af. Wat kan Piotr het beste doen?

- **A.** Hij maakt eerst zijn rij helemaal af. Daarna gaat hij drinken.
  → *Dat is logisch. Maar duizelig zijn is een waarschuwing.*
- **B.** Hij stopt, drinkt water en zegt het tegen zijn leidinggevende.
  → *Goed. Zo wordt het niet erger.*
- **C.** Hij gaat even op de grond zitten, tussen de planten.
  → *Even zitten helpt. Maar in de kas blijft het heet.*

**Goed antwoord: B.**
**Waarom:** Hitte kan je snel ziek maken. Duizelig, misselijk of hoofdpijn? Stop, drink water en ga
naar een koele plek. Zeg het meteen tegen iemand. Je werkgever moet zorgen voor water, pauzes en een
koele plek ⚖️.

**Vraag 2 · Waar of niet waar?** "Ruik je niets? Dan kun je een bespoten kas veilig in."

**Antwoord: niet waar.**
**Waarom:** Veel spuitmiddelen ruik je niet. Na het spuiten geldt een wachttijd ⚖️. Pas daarna mag
je weer naar binnen. Vaak hangt er een bordje op de deur. Je leidinggevende weet wanneer het weer mag.

**Vraag 3 · Wat is het beste?** Piotr tilt de hele dag kratten. Ze staan op de grond. Wat kan Piotr het beste doen?

- **A.** Hij tilt ze snel met een ruk. Dan is hij eerder klaar.
  → *Een ruk is zwaar voor zijn rug. Zo kan hij zich bezeren.*
- **B.** Hij stapelt de kratten zo hoog als hij kan.
  → *Een hoge stapel is zwaar en kan omvallen.*
- **C.** Hij buigt zijn knieën en houdt de krat dicht bij zich.
  → *Goed. Zo spaart hij zijn rug.*

**Goed antwoord: C.**
**Waarom:** Til met gebogen knieën en een rechte rug. Houd de krat dicht bij je lichaam. Draai niet
met je rug terwijl je tilt. Veel bukken of tillen? Vraag om een kar, of wissel af met ander werk. Je
werkgever moet zorgen dat het werk niet te zwaar is ⚖️.

**Vraag 4 · Wie vraag je het?** Je moet werken in een kas die vanochtend bespoten is. Er hangt een
bordje op de deur. Wie vraag je het eerst? *Collega · **leidinggevende** · huisarts.*
**Waarom:** Je leidinggevende weet wanneer de wachttijd voorbij is. Krijg je geen duidelijk antwoord?
Dan kun je de Nederlandse Arbeidsinspectie bellen.

**Zo zeg je het:** "Er hangt een bordje op de deur. Mag ik al naar binnen?"

**Onthoud:** Drink op tijd. Een bespoten kas ga je pas in als het mag.

**Wie kan je helpen:** je leidinggevende of voorman · de bedrijfsarts · de Nederlandse Arbeidsinspectie.

---

### Les T.2 · Tempo en stukloon

**Leerdoel:** je weet dat het minimumloon per uur ook geldt bij stukloon. Je schrijft je uren op.

**Scène** · *Beeld: Esra bij een sorteerband met paprika's. Naast haar staan volle kratten.*

> Esra werkt via een uitzendbureau in een kas. Ze krijgt geld per krat. Dat heet stukloon. De eerste
> weken werkt ze nog niet zo snel. Op haar loonstrook staat weinig loon. Ze woont in een huis van het
> uitzendbureau.

**De regel (geschreven):** Ook bij stukloon krijg je minstens het minimumloon per uur.
Stukloon betekent: je krijgt geld per krat, per rij of per kilo. Ook dan krijg je minstens het
minimumloon voor elk uur dat je werkt ⚖️. Schrijf elke dag je uren en je kratten op. Je werkgever mag
niet zomaar geld van je loon afhalen ⚖️.

**Vraag 1 · Wat is het beste?** Esra werkt 38 uur per week. Haar loon is veel lager dan het
minimumloon voor 38 uur. Wat kan Esra het beste doen?

- **A.** Ze laat haar eigen lijst met uren zien, en vraagt om uitleg.
  → *Goed. Met haar lijst laat ze zien wat ze heeft gedaan.*
- **B.** Ze zegt niets. Bij stukloon is weinig loon in het begin normaal.
  → *Dat snap ik. Maar ook bij stukloon geldt het minimumloon per uur.*
- **C.** Ze gaat sneller werken en slaat haar pauzes over.
  → *Ik snap het. Maar pauzes heeft ze nodig, en haar loon moet nu al kloppen.*

**Goed antwoord: A.**
**Waarom:** Ook bij stukloon moet je minstens het minimumloon per uur krijgen ⚖️. Hoeveel dat is,
staat op rijksoverheid.nl. Klopt je loon niet? Vraag om uitleg. Krijg je geen goed antwoord? Vraag
hulp bij de vakbond of het Juridisch Loket.

**Vraag 2 · Waar of niet waar?** "Bij stukloon is het niet nodig om je uren op te schrijven."

**Antwoord: niet waar.**
**Waarom:** Schrijf altijd je uren op. Wanneer begin je, hoe lang is je pauze, wanneer stop je?
Schrijf ook je kratten of rijen op. Dan kun je je loonstrook controleren.

**Vraag 3 · Wat is het beste?** Esra woont in een huis van het uitzendbureau. Elke week gaat er veel
geld van haar loon af. Ze weet niet waarvoor. Wat kan Esra het beste doen?

- **A.** Ze zegt niets. Anders raakt ze misschien haar kamer kwijt.
  → *Dat snap ik. Maar ze mag altijd vragen waar het geld voor is.*
- **B.** Ze vraagt het uitzendbureau wat er van haar loon af gaat.
  → *Goed. Zo weet ze waar ze voor betaalt.*
- **C.** Ze stopt meteen met werken en zoekt een ander huis.
  → *Dat is een grote stap. Eerst vragen is beter.*

**Goed antwoord: B.**
**Waarom:** Op je loonstrook staat wat er van je loon af gaat, en waarvoor ⚖️. Voor een huis via je
werk mag maar een deel van je loon eraf ⚖️. Begrijp je het niet? Vraag het na. Kijk ook in je cao.

**Vraag 4 · Wie vraag je het?** Je loon is lager dan het minimumloon. Je uitzendbureau doet er niets
aan. Wie kan dit controleren? *Huisarts · gemeente · **Nederlandse Arbeidsinspectie**.*
**Waarom:** De Nederlandse Arbeidsinspectie controleert het minimumloon. Je kunt daar een melding
doen. Ook de vakbond en het Juridisch Loket helpen je.

**Zo zeg je het:** "Ik heb mijn uren en kratten opgeschreven. Klopt mijn loon?"

**Onthoud:** Ook bij stukloon krijg je minstens het minimumloon per uur.

**Wie kan je helpen:** je uitzendbureau of werkgever · de vakbond · het Juridisch Loket · de
Nederlandse Arbeidsinspectie.

---

### Taal · In de kas (`u.kas`)

*Twee lessen, net als de andere sectoronderwerpen. Elke les: 6 woorden, 3 zinnen, 1 gesprekje en 1
tip. De vertalingen staan voorlopig in het Engels (TODO vertalen). Nieuwe woorden en zinnen hebben
nog een ElevenLabs-opname nodig.*

- **Oogsten en sorteren** (`l.harvest`) · *de kas, het gewas, de rij, oogsten, sorteren, de krat* ·
  "Ik werk in de kas." "In welke rij begin ik?" "De krat is vol." · Gesprekje: "Hoeveel rijen heb je
  gedaan?" "Vier. Nog twee te gaan." · Tip **Tempo en stukloon**: ook bij stukloon minstens het
  minimumloon per uur ⚖️, schrijf je uren en kratten op, en vergelijk ze met je loonstrook.
- **Veilig in de kas** (`l.greensafe`) · *de spuitmiddelen, bespoten, de plukkar, bukken, drinken,
  de hitte* · "Is deze kas bespoten?" "Ik ga even water drinken." "Waar staat de plukkar?" ·
  Gesprekje: "Mag ik in kas drie werken?" "Nee, nog niet. Die is net bespoten." · Tip **Hitte en
  spuitmiddelen**: drink vaak, ook zonder dorst; een net bespoten kas ga je pas in als je
  leidinggevende zegt dat het weer veilig is ⚖️.

---

### Nog een schets: werken met planten en dieren (`r.groen`)

- **Les G.1 · Veilig buiten werken** (rest van de schets). Leerdoel: je beschermt je tegen zon, kou
  en teken. Je gebruikt een machine (zoals een bosmaaier of heggenschaar) alleen met uitleg. Je draagt
  bescherming voor ogen en oren. *Hitte en spuitmiddelen staan nu in les T.1.*
- **Les G.2 · Werken met dieren.**
  Leerdoel: je wast je handen na contact met dieren. Je meldt een ziek of gewond dier meteen. Je
  weet waarom je rustig en voorzichtig met dieren omgaat.

### Sector mobiliteit · In de werkplaats (`r.werkplaats`) · gebouwd

*Gebouwd op 30 oktober 2026 als "Werken in de garage", uitgewerkt in
[`werkregels-curriculum.md`](werkregels-curriculum.md), deel 7. Nog niet in de sectorkeuze (zie daar).*

- **Les M.1 · Veilig in de werkplaats.**
  Leerdoel: je gaat nooit onder een auto die niet goed vaststaat. Je ruimt gemorste olie meteen
  op. Oude olie en accu's zijn gevaarlijk afval ⚖️ (link met unit 17).
- **Les M.2 · De werkorder en de klant.**
  Leerdoel: je leest een werkorder (link met unit 13). Je doet geen extra werk zonder akkoord van
  de klant ⚖️. Een proefrit maak je alleen met toestemming en een rijbewijs.

### Sector techniek · Metaal, elektro en installatie (`r.techniek`) · gebouwd

*Gebouwd op 30 oktober 2026 als "Werken in de techniek", uitgewerkt in
[`werkregels-curriculum.md`](werkregels-curriculum.md), deel 7. De lessen heten daar TE.1 en TE.2
(T is al van de kas). Nog niet in de sectorkeuze.*

- **Les T.1 · Gereedschap, vonken en lawaai.**
  Leerdoel: je draagt oog- en gehoorbescherming bij slijpen en boren. Je ruimt spanen en draadjes
  op. Bij heet werk weet je wat er moet gebeuren tegen brand ⚖️.
- **Les T.2 · Stroom: nooit zomaar.**
  Leerdoel: je werkt nooit aan iets onder spanning. Een bevoegde collega maakt het eerst
  spanningsloos ⚖️. Je meldt een kapotte kabel of stekker meteen.

### Sector facilitair · Receptie en facilitaire dienst (`r.receptie`)

- **Les F.1 · Aan de balie.**
  Leerdoel: je ontvangt bezoekers vriendelijk, met "u". Je meldt een bezoeker aan, en je neemt de
  telefoon goed op. Je schrijft een boodschap op: wie, wat, en welk nummer.
- **Les F.2 · Veilig en vertrouwelijk.**
  Leerdoel: je laat niemand zonder pas binnen. Je gaat zorgvuldig om met sleutels, passen en
  gegevens van bezoekers ⚖️. Je weet wat jij doet bij een ontruiming.

### Sector ICT · De servicedesk (`r.ict`)

*Geen Entree-profiel gevonden ⚖️. Wel nuttig als opstap naar niveau 2.*

- **Les I.1 · Een melding aannemen.**
  Leerdoel: je luistert, stelt korte vragen ("Wat ziet u op het scherm?") en zegt terug wat je
  hoorde. Je schrijft de melding op, en je geeft hem door als je het niet kunt oplossen.
- **Les I.2 · Privacy en wachtwoorden van anderen.**
  Leerdoel: je vraagt nooit om iemands wachtwoord. Je checkt wie iemand is, vóór je helpt. Je kijkt
  niet in mail of bestanden van anderen ⚖️ (link met unit 15).

---

## 5. Voorstel voor het spoor Taal

*Het spoor Taal is de taalcursus voor nieuwkomers. Elke les heeft 6 woorden, 3 zinnen en 1
gesprekje, met de Engelse uitleg. Hieronder 3 units in de vorm van `src/content/work.ts` (de
helpers `unit` en `lesson`). Volgorde van belang: eerst "In de winkel" (het profiel retail
ontbreekt helemaal), dan "Rekenen: tijd, geld, maten", dan "Online op je werk".*

**Wat er nog nodig is voor elke unit:**

- **Opnames.** Per les 6 woorden, 3 zinnen en 2 gesprekregels: 11 opnames. Per unit 22, plus de
  zin uit de tip. Check bij "Rekenen" extra goed hoe de stem tijden en bedragen zegt.
- **9 vertalingen** van alle woorden, zinnen, gesprekregels, titels en tips: Arabisch, Bulgaars,
  Dari, Farsi, Pools, Roemeens, Tigrinya, Turks en Oekraïens (`src/i18n/work/<taal>.ts`). Met een
  controle door een moedertaalspreker, zoals in `docs/vertaalcontrole.md`.
- **Een tip "Zo werkt het hier"** per les (`c.<les>`): titel, 2 of 3 zinnen, een situatie met 3
  opties en een waarom. Voorstellen staan onder elke unit.
- **Tekeningen** voor de woorden met een plaatje, en een icoon voor de unit (`unitIcons.ts`).
- De ids hieronder botsen niet met bestaande ids (nagekeken op 15 oktober 2026). De
  herhaalles ("Mixed review") komt er vanzelf bij.

### Unit Taal-A · In de winkel

```ts
unit('shop', 'In the shop', 'In de winkel', '🛒', '#2a9d8f', [
  lesson(
    'shelves',
    'Shelves and stock',
    [
      ['schap', 'het schap', 'the shelf', '🗄️'],
      ['vakkenvullen', 'vakken vullen', 'to stock shelves', '📦'],
      ['voorraad', 'de voorraad', 'the stock', '🏬'],
      ['houdbaarheidsdatum', 'de houdbaarheidsdatum', 'the best-before date', '📅', false],
      ['prijskaartje', 'het prijskaartje', 'the price tag', '🏷️'],
      ['achteraan', 'achteraan', 'at the back', '⬅️', false],
    ],
    [
      ['Oud naar voren, nieuw naar achteren.', 'Old to the front, new to the back.'],
      ['Dit product is over de datum.', 'This product is past its date.'],
      ['Waar staat de voorraad?', 'Where is the stock?'],
    ],
    [['Waar vind ik de rijst?', 'Where can I find the rice?'], ['In gang 4. Ik loop even mee.', 'In aisle 4. I will walk with you.']],
  ),
  lesson(
    'checkout',
    'At the checkout',
    [
      ['klant', 'de klant', 'the customer', '🧑'],
      ['kassa', 'de kassa', 'the checkout', '🛒'],
      ['wisselgeld', 'het wisselgeld', 'the change', '🪙'],
      ['bonnetje', 'het bonnetje', 'the receipt', '🧾'],
      ['pinnen', 'pinnen', 'to pay by card', '💳'],
      ['contant', 'contant', 'in cash', '💶', false],
    ],
    [
      ['Wilt u pinnen of contant betalen?', 'Would you like to pay by card or in cash?'],
      ['Hier is uw wisselgeld.', 'Here is your change.'],
      ['Mag ik uw ID zien?', 'May I see your ID?'],
    ],
    [['Kan ik hier pinnen?', 'Can I pay by card here?'], ['Ja, dat kan. Houd uw pas hier.', 'Yes, you can. Hold your card here.']],
  ),
]),
```

**Tips (voorstel):** `c.shelves` *"Old to the front"*: kijk naar de datum, oud naar voren, houd
de paden vrij (bron: Werkregels 11.1). `c.checkout` *"ID for alcohol and tobacco"*: onder de 18
geen alcohol of tabak ⚖️, bij twijfel een ID vragen, veel winkels vragen het tot 25 ⚖️ (bron:
Werkregels 11.3). Slotregel: `HOUSE_LINE`.

### Unit Taal-B · Rekenen: tijd, geld, maten

```ts
unit('numbers', 'Time, money and measures', 'Rekenen: tijd, geld, maten', '🔢', '#6d597a', [
  lesson(
    'hours',
    'Hours and times',
    [
      ['uur', 'het uur', 'the hour', '🕐', false],
      ['minuut', 'de minuut', 'the minute', '⏱️', false],
      ['kwartier', 'het kwartier', 'a quarter of an hour', '🕒', false],
      ['halfuur', 'een half uur', 'half an hour', '🕧', false],
      ['optellen', 'optellen', 'to add up', '➕', false],
      ['aftrekken', 'aftrekken', 'to subtract', '➖', false],
    ],
    [
      ['Ik begin om half acht.', 'I start at half past seven.'],
      ['Ik werk vandaag acht uur.', 'I work eight hours today.'],
      ['De pauze duurt een half uur.', 'The break lasts half an hour.'],
    ],
    [['Hoe laat ben je klaar?', 'What time do you finish?'], ['Om kwart over vier.', 'At a quarter past four.']],
  ),
  lesson(
    'measures',
    'Money and measures',
    [
      ['euro', 'de euro', 'the euro', '💶'],
      ['cent', 'de cent', 'the cent', '🪙'],
      ['kilo', 'de kilo', 'the kilo', '⚖️'],
      ['liter', 'de liter', 'the litre', '🧴'],
      ['meter', 'de meter', 'the metre', '📏'],
      ['tellen', 'tellen', 'to count', '🔢', false],
    ],
    [
      ['Het kost zes euro vijftig.', 'It costs six euros fifty.'],
      ['Deze doos weegt tien kilo.', 'This box weighs ten kilos.'],
      ['Ik heb veertig dozen geteld.', 'I counted forty boxes.'],
    ],
    [['Hoeveel dozen zijn het?', 'How many boxes are there?'], ['Ik tel er veertig.', 'I count forty.']],
  ),
]),
```

*Redactie: "half acht" is 7.30 uur, niet 8.30 uur. Voor veel nieuwkomers is dat verwarrend. Zet
het in de tip. Getallen in de zinnen voluit ("zes euro vijftig"), zodat de stem en het blokjes
bouwen hetzelfde zijn.*

**Tips (voorstel):** `c.hours` *"Half acht is 7.30"*: in het Nederlands tel je naar het volgende
uur: half acht is 7.30 uur; reken je uren na, min de pauze (bron: Werkregels 12.1). `c.measures`
*"Count smart, measure, don't guess"*: tel een laag keer het aantal lagen; meet schoonmaakmiddel
af (bron: Werkregels 12.3). Slotregel: geen (`''`), of `HOUSE_LINE` bij de tip over middelen.

### Unit Taal-C · Online op je werk (als er ruimte is)

```ts
unit('online', 'Online at work', 'Online op je werk', '💻', '#3d5a80', [
  lesson(
    'login',
    'Logging in',
    [
      ['inloggen', 'inloggen', 'to log in', '🔐', false],
      ['uitloggen', 'uitloggen', 'to log out', '🚪', false],
      ['wachtwoord', 'het wachtwoord', 'the password', '🔑'],
      ['account', 'het account', 'the account', '👤', false],
      ['scherm', 'het scherm', 'the screen', '🖥️'],
      ['vergrendelen', 'vergrendelen', 'to lock (a screen or phone)', '🔒'],
    ],
    [
      ['Ik ben mijn wachtwoord vergeten.', 'I forgot my password.'],
      ['Ik log altijd uit.', 'I always log out.'],
      ['Mijn DigiD geef ik aan niemand.', 'I give my DigiD to no one.'],
    ],
    [['Kun je inloggen?', 'Can you log in?'], ['Nee, mijn wachtwoord werkt niet.', 'No, my password does not work.']],
  ),
  lesson(
    'phish',
    'Fake e-mails',
    [
      ['afzender', 'de afzender', 'the sender', '📧'],
      ['klikken', 'klikken', 'to click', '🖱️'],
      ['bijlage', 'de bijlage', 'the attachment', '📎'],
      ['verdacht', 'verdacht', 'suspicious', '🤨', false],
      ['ictafdeling', 'de ICT-afdeling', 'the IT department', '🧑‍💻'],
      ['wijzigen', 'wijzigen', 'to change', '✏️', false],
    ],
    [
      ['Deze mail is verdacht.', 'This e-mail is suspicious.'],
      ['Ik open de bijlage niet.', 'I do not open the attachment.'],
      ['Ik wijzig mijn wachtwoord meteen.', 'I am changing my password right away.'],
    ],
    [['Heb je op de link geklikt?', 'Did you click on the link?'], ['Ja. Ik bel de ICT-afdeling.', 'Yes. I am calling the IT department.']],
  ),
]),
```

*Redactie: deze unit overlapt met "Geld en post › Watch out for scams" (`l.scams`) en met de tip
over DigiD (`c.bsn`). Kies daarom de werkkant: inloggen, uitloggen, de ICT-afdeling.*

**Tips (voorstel):** `c.login` *"Your login is yours"*: geef je DigiD of wachtwoord aan niemand,
ook niet aan je werkgever; log uit op een gedeelde computer (bron: Werkregels 15.1). `c.phish`
*"Haste and a button? Don't click"*: ga zelf naar de echte app; klikte je toch, verander je
wachtwoord en meld het (bron: Werkregels 15.2). Slotregel: `ADVICE_LINE` of `HOUSE_LINE`.

---

## 6. Bronnen voor de deskundige

*Nagekeken in oktober 2026 met webzoekopdrachten. Het direct openen van s-bb.nl, rijksoverheid.nl en
andere sites lukte niet vanuit de werkomgeving. Alles hieronder moet een deskundige nalopen in de bron
zelf.*

| Unit | Bron | Waarvoor |
|---|---|---|
| alle | SBB, kwalificatiedossier Entree, crebo 23301 (kwalificaties.s-bb.nl) | werkprocessen B1-K1-W1 tot en met W3, profielen |
| 11 | NVWA en Voedingscentrum | THT en TGT, verkopen na de datum |
| 11 | Alcoholwet, Tabaks- en rookwarenwet (wetten.overheid.nl); NIX18 en Trimbos (FAQ voor verkopers) | leeftijdsgrens 18, ID bij twijfel, de afspraak "tot 25" |
| 11, 12 | Wet minimumloon en minimumvakantiebijslag (WML) | vakantiegeld 8 procent, inhoudingen op loon (kassatekort) |
| 11 | EU-verordening 1169/2011 (voedselinformatie) | allergenen extra duidelijk op het etiket |
| 11 | Arbobesluit | vrije vluchtwegen en nooduitgangen |
| 12 | Arbeidstijdenwet; cao | pauze betaald of niet |
| 13 | SBB, basisdeel Entree | voorbereiden, uitvoeren, afmelden |
| 14 | MBO Raad, servicedocument praktijkovereenkomst 2025-2026 (mboraad.nl); SBB (s-bb.nl, stagemarkt.nl) | POK met 3 partijen, tekenen vóór de start, erkend leerbedrijf, meldpunt stagediscriminatie |
| 14 | Stagepact mbo (OCW) | meldpunt op elke mbo-school, contactmomenten |
| 14 | Arbeidstijdenwet, Arbowet | regels voor stagiairs, ook voor jongeren |
| 14 | JOB-mbo (job-site.nl) | hulp voor mbo-studenten |
| 15 | Logius (digid.nl, machtigen.digid.nl) | aanvragen, activeringscode per post, machtigen |
| 15 | Bibliotheken, Informatiepunt Digitale Overheid | gratis hulp |
| 15 | Fraudehelpdesk, Veilig Internetten (veiliginternetten.nl) | phishing, wachtwoorden |
| 15 | AVG (Verordening (EU) 2016/679), art. 22 en art. 13–15 | geen besluit alleen door een computer; uitleg vragen en een mens laten kijken (15.3) |
| 15 | AI-verordening (Verordening (EU) 2024/1689), art. 4, art. 5 lid 1 sub f en art. 113 | emotieherkenning op het werk verboden sinds 2 februari 2025, behalve om medische redenen of voor de veiligheid; AI-geletterdheid (15.3) |
| 15 | Wet op de ondernemingsraden (WOR), art. 27 lid 1 sub l | instemming van de OR bij systemen die aanwezigheid, gedrag of prestaties volgen (15.3) |
| 15 | Autoriteit Persoonsgegevens (autoriteitpersoonsgegevens.nl), over datalekken door AI-chatbots (augustus 2024) | geen persoonsgegevens in een chatbot (15.3) |
| 16 | Kieswet; rijksoverheid.nl "Wie mag stemmen bij de gemeenteraadsverkiezingen" | stemrecht EU-burgers en niet-EU-burgers |
| 16 | Grondwet (artikel 1, 6, 7) | gelijke behandeling, vrijheid van geloof en meningsuiting |
| 16 | Wetboek van Strafrecht | bedreiging, discriminatie, haat zaaien |
| 16 | Wet op de identificatieplicht; rijksoverheid.nl "Wat is de identificatieplicht?" | ID tonen vanaf 14 jaar |
| 16 | Algemene wet bestuursrecht | bezwaar maken, termijn |
| 16 | ProDemos; politie.nl; Raad voor Rechtsbijstand | neutrale uitleg, 0900-8844, gesubsidieerde advocaat |
| 17 | Landelijk Afvalbeheerplan (LAP3), Activiteitenbesluit, gemeentelijke regels; Afvalwijzer voor bedrijven | afval scheiden door bedrijven, gevaarlijk afval |

**Nagekeken via zoekresultaten (oktober 2026):**

- B1-K1 heeft drie werkprocessen: voorbereiden, uitvoeren, afmelden. W1 gaat onder meer over nagaan of
  je alles begrijpt, en het werk in stappen verdelen.
- Gemeenteraad: EU-burgers die hier wonen mogen stemmen. Niet-EU-burgers na 5 jaar legaal verblijf,
  met een verblijfsvergunning, 18 jaar of ouder.
- Alcohol en tabak: 18 jaar is de wet. "Tot 25 vragen we ID" is een afspraak van winkels.
- POK: 3 partijen; alle 3 tekenen vóór de bpv begint; het leerbedrijf moet erkend zijn door SBB.
- Stagepact: elke mbo-opleiding moet een laagdrempelig meldpunt hebben. SBB kan de erkenning intrekken.
- Identificatieplicht: vanaf 14 jaar. Het is een toonplicht, geen draagplicht.
- DigiD: BSN, adres in Nederland en een mobiele telefoon nodig. De activeringscode komt per brief.
- THT-producten mogen na de datum verkocht worden; TGT-producten niet.

---

## 7. Twijfels: hier zijn we niet zeker van

1. **Burgerschap verandert.** Volgens een vakblad (Profiel, 2026) worden de vier dimensies vier thema's.
   Er komt een examen vanaf studiejaar 2027-2028. Is de wet al aangenomen? Welke thema's precies?
2. **Entree-profielen.** Is de lijst in crebo 23301 nog actueel? Bestaat "assistent procestechniek"
   nog? Is er echt geen ICT-profiel? Valt receptie of facilitair onder "dienstverlening (en zorg)"?
3. **Rekenen in Entree.** Telt rekenen mee voor het diploma, of alleen deelname? Is het
   "mbo-rekenniveau 1" of 1F? Wat geldt voor cohort 2026-2027?
4. **Stemrecht (16.1).** De precieze voorwaarden voor niet-EU-burgers: "onafgebroken" verblijf, en welke
   verblijfsvergunningen tellen. En de waterschappen: mogen daar ook niet-Nederlanders stemmen? (Staat
   bewust niet in de les.)
5. **Beoordeling op stage (14.2).** Wie beslist er precies? De school is verantwoordelijk voor het
   examen; het bedrijf geeft een oordeel. Klopt "de school beslist" voor alle scholen?
6. **Ziek op stage (14.3).** Moet je je altijd bij het bedrijf én bij school melden? Of hangt dat af
   van de POK?
7. **Meldpunten (14.3).** Heeft SBB een eigen meldpunt stagediscriminatie dat studenten zelf kunnen
   gebruiken? Heeft JOB een meldpunt? Hoe heten ze nu?
8. **Kassatekort (11.3).** Mag een werkgever een kassatekort nooit van het loon halen, of alleen niet
   zonder schriftelijke afspraak? (Zie ook les 4.2.)
9. **Pauze betaald (12.1).** Het voorbeeld "soms betaald, als je moet blijven voor cliënten" komt uit de
   praktijk. Klopt het als voorbeeld?
10. **Bedrijfsafval (17.1).** "Bedrijven moeten afval scheiden": voor alle bedrijven, of pas vanaf een
    bepaalde hoeveelheid? De bronnen spreken elkaar tegen.
11. **Grondwet (16.2).** Klopt "vrijheid van geloof" als artikel 6, en meningsuiting (artikel 7) als
    korte uitleg op 1F? Is "discrimineren is strafbaar" te kort door de bocht? Strafbaar is vooral
    opzettelijk beledigen, haat zaaien en discriminatie in je beroep.
12. **Bezwaar (16.3).** Bij een boete van de gemeente (bijvoorbeeld parkeren) gaat het soms om de
    gemeente en soms om het CJIB. Is "bezwaar maken, kijk in de brief" goed genoeg?
13. **Identificatieplicht (16.3).** Kun je echt "een klacht indienen bij de politie" na een controle? Dat
    kan bij de politie zelf (klachtenprocedure), maar check de woorden.
14. **0900-8844** en het telefoonnummer van de DigiD-helpdesk: actueel?
15. **Tweede Kamer: 150 leden.** Klopt dat nog, en willen we dat getal in de les?
16. **Activeringscode DigiD.** Hoe lang is de code geldig? Een gids zegt 21 dagen. Daarom staat er
    alleen: "de code werkt maar kort".
17. **Een mens laten kijken (15.3).** AVG art. 22 lid 1 verbiedt een besluit met grote gevolgen dat
    alleen door een computer is genomen; lid 3 geeft (bij de uitzonderingen) recht op menselijke
    tussenkomst. Is "je mag vragen dat een mens ernaar kijkt" in beide gevallen goed genoeg? En is
    "minder uren" een goed voorbeeld van een besluit met "aanmerkelijke" gevolgen?
18. **Emotieherkenning (15.3).** Art. 5 lid 1 sub f AI-verordening: geldt het verbod ook voor een
    camera die alleen "moe" herkent (vermoeidheid) bij chauffeurs? Dat valt mogelijk onder de
    uitzondering voor veiligheid. Daarom zegt de les: "Alleen voor je gezondheid of je veiligheid mag
    het wel."
19. **AI-geletterdheid (art. 4).** Staat bewust niet in de les (te abstract voor de leerling). Wel in
    de bronnen, voor de deskundige.
