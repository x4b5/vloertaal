# Werkregels: lespad voor starters op de Nederlandse arbeidsmarkt

*Concept, 15 oktober 2026. Inhoud voor een nieuw lespad in Vloertaal. Nog niet gebouwd in `src/`.
Elk getal en elke termijn heeft een ⚖️: die moet een deskundige nakijken. De bronnen staan in
[`werkregels-bronnen.md`](werkregels-bronnen.md).*

---

## 1. Ontwerpnotitie

### Voor wie

Nederlandstalige volwassenen die weinig lezen en schrijven, en die (weer) gaan werken:

- jongeren die een eerste baan of stage zoeken (vmbo, mbo, praktijkonderwijs, vroege schoolverlaters);
- mensen die weer gaan werken na zorg voor kinderen of familie, of na een uitkering;
- nieuwkomers die al Nederlands spreken, maar de regels nog niet kennen;
- iedereen die begint.

Het lespad leert **geen Nederlands**. Het leert de **geschreven regels** (wet, contract, cao, loon,
belasting, ziekte, veiligheid, uitkering, discriminatie) en de **ongeschreven regels** (op tijd
komen, ziek melden per telefoon, direct zijn, koffie en verjaardagen, vragen stellen, feedback,
"afspraak is afspraak", de groepsapp, het oneens zijn, kleding, telefoon, persoonlijke ruimte).

### Leerdoelen

Na het lespad kan de leerling:

1. echte vacatures herkennen, en weet: voor werk betaal je nooit;
2. een contract eerst lezen of laten lezen, en weet wat proeftijd, tijdelijk, vast, oproep, uitzend, stage en zzp betekenen;
3. een loonstrook globaal checken: uren, bruto en netto, vakantiegeld;
4. zich goed ziek melden, beter melden, vrij vragen en nee zeggen tegen extra werk;
5. de basisregels noemen voor werktijden, pauze en veiligheid, en durft te stoppen bij gevaar;
6. omgaan met de ongeschreven regels: op tijd, direct, afspraak is afspraak, vragen stellen, het oneens zijn;
7. discriminatie, grensoverschrijdend gedrag en uitbuiting herkennen, en weet waar hulp is;
8. weet wat werk betekent voor uitkering, toeslagen en belasting, en vraagt vroeg hulp bij schulden.

### Vorm van een les (5–8 minuten)

| Stap | Wat | Tijd |
|---|---|---|
| 1. **Scène** | Een kort verhaal van 3–5 zinnen, met een plaatje. De telefoon leest het voor. | ± 1 min |
| 2. **Vragen** | 2–3 vragen. Soort A: **"Wat doe je?"** met 3 antwoorden, feedback per antwoord en een **waarom**. Soort B: **"Waar of niet waar?"** met een **waarom**. | 2–4 min |
| 3. **Zo zeg je het** | Eén voorbeeldzin om te zeggen in deze situatie. De leerling hoort hem en kan hem nazeggen of bewaren. | ± 1 min |
| 4. **Onthoud** | Eén regel voor de **zakkaart**. Die blijft bewaard in de app. | ± 30 s |
| 5. **Wie kan je helpen** | Alleen waar het past: de juiste plek voor hulp. | ± 30 s |

**Feedback bij "waar of niet waar".** Goed gekozen: *"Goed gezien."* Fout gekozen: *"Toch niet."*
Daarna komt altijd het waarom. Nooit "Fout!" in het rood, nooit een strafpunt.

**Feedback bij "wat doe je?".** Elk antwoord heeft een eigen zin feedback. De goede: *"Goed."* plus
de reden. De andere: rustig zeggen wat er mis kan gaan, zonder schuld ("Dit kan problemen geven",
"Begrijpelijk, maar ...").

### Schrijfregels (checklist voor redactie)

- Taalniveau 1F (ongeveer A2). Zinnen van hooguit ongeveer 12 woorden. Eén idee per zin.
- Gewone woorden. Eén vakwoord per keer, met één korte uitlegzin erbij ("Een cao is een afspraak over loon en regels voor jouw soort werk.").
- Altijd "je". Zo min mogelijk lijdende vorm.
- Namen wisselen: Sanne, Mohammed, Kevin, Fatima, Dewi, Piotr, Esra, Jayden. Leidinggevenden: Linda, Mark, Henk. De leerling is "je", nooit standaard één naam.
- Rustig en volwassen. Niet kinderachtig, niet belerend, geen schuld.
- Per vraag precies één goed antwoord. De foute antwoorden zijn geloofwaardig en ongeveer even lang. Het goede antwoord staat wisselend op plek A, B of C (telling: A 21, B 20, C 23). Bij "waar of niet waar" is het ongeveer half om half (21 waar, 23 niet waar).
- **⚖️ is een markering voor de redactie.** Niet tonen en niet voorlezen in de app.
- Bedragen die vaak veranderen (minimumloon, beslagvrije voet, eigen risico) noemen we niet. We zeggen: "kijk op rijksoverheid.nl".
- Getallen als cijfers ("30 minuten"). Procent voluit ("8 procent"): dat leest de stem beter voor.
- Regels hangen vaak af van contract, cao of leeftijd. Dat zeggen we dan gewoon: "Kijk in je cao."
- *Redactie:*-regels in een les zijn alleen voor de makers. Ze komen niet in de app.

### Verhouding tot de bestaande inhoud

- Het lespad gebruikt de feiten uit de 59 tips in `src/content/culture.ts` en `src/content/work.ts` (bijvoorbeeld `c.contract`, `c.payslip`, `c.health`, `c.illness`, `c.rights`, `c.warning`, `c.ww`) en de twijfels uit `docs/juridische-check.md`. Het gaat dieper: meer regels, meer situaties, en eigen units voor geld, uitkering en soorten werk.
- De lessen in `curriculum.ts` zijn taallessen (woorden, zinnen, gesprekjes). Dit lespad heeft een andere vorm. Er is een nieuw lestype nodig met de stappen `scene`, `choice`, `truefalse`, `phrase`, `remember` en `help`. Voorstel voor ids: `wr.u1`, `wr.l1.1`, `wr.l1.1.q1`, enzovoort.
- De wetten veranderen in 2027 en 2028 (oproepcontracten, uitzendwerk, WW). Zie het blok "Wat gaat er veranderen" in het bronnenbestand. Lessen met zo'n regel hebben een *Redactie:*-regel.

---

## 2. Het lespad in één oogopslag

| Unit | Titel | Lessen |
|---|---|---|
| 1 | Werk zoeken en solliciteren | 1.1 Waar vind je werk? · 1.2 Je cv: kort en eerlijk · 1.3 Het sollicitatiegesprek · 1.4 Proefdag en het aanbod |
| 2 | Je eerste dag | 2.1 Op tijd en goed voorbereid · 2.2 Kennismaken · 2.3 Vragen stellen en terugzeggen |
| 3 | Contract en soorten werk | 3.1 Je contract: wat staat erin? · 3.2 Proeftijd, tijdelijk en vast · 3.3 Oproepwerk en uitzendwerk · 3.4 Stage, leerwerkbaan en zzp |
| 4 | Loon en loonstrook | 4.1 Bruto en netto · 4.2 Je loonstrook checken · 4.3 Vakantiegeld, toeslag en overwerk |
| 5 | Werktijden, pauze en vrij | 5.1 Je rooster en je werktijden · 5.2 Pauze · 5.3 Overwerk en nee zeggen · 5.4 Vrij vragen en verlof |
| 6 | Ziek zijn | 6.1 Je ziek melden · 6.2 Je rechten als je ziek bent · 6.3 Langer ziek en weer beter |
| 7 | Veilig en gezond werken | 7.1 Beschermende spullen en uitleg · 7.2 Onveilig? Zeg het en stop · 7.3 Een ongeluk, of te veel stress |
| 8 | Samenwerken: de ongeschreven regels | 8.1 Direct zeggen en feedback · 8.2 Het oneens zijn · 8.3 Afspraak is afspraak · 8.4 Koffie, verjaardagen en je telefoon |
| 9 | Problemen en je rechten | 9.1 Discriminatie · 9.2 Grensoverschrijdend gedrag · 9.3 Uitbuiting en oplichting · 9.4 Ontslag en het einde van je baan |
| 10 | Uitkering, werk en geld | 10.1 Werk kwijt: WW · 10.2 Van uitkering naar werk · 10.3 Belasting terug en je post · 10.4 Schulden: vroeg hulp vragen |

**10 units, 36 lessen.** Unit 3 is ook de unit voor herintreders en starters: stage, proeftijd,
uitzendwerk en zzp. Volgorde: zoeken → beginnen → afspraken → geld → tijd → ziekte → veiligheid →
samenwerken → problemen → uitkering. Units 8 en 9 kunnen ook eerder; ze bouwen niet op elkaar.

---

## 3. De lessen

## Unit 1 · Werk zoeken en solliciteren

*In deze unit: waar je echt werk vindt, een eerlijk cv, het gesprek, en wat je vraagt vóór je tekent.*

### Les 1.1 · Waar vind je werk?

**Leerdoel:** je weet waar je echte vacatures vindt, en je herkent nepwerk.

**Scène** · *Beeld: Kevin (19) op de bank met zijn telefoon. Op het scherm een appje vol geld-emoji's.*

> Kevin zoekt zijn eerste baan. Hij kijkt op werk.nl en bij een uitzendbureau. Dan krijgt hij een
> appje van een onbekend nummer. "Verdien 250 euro per dag. Je werkt vanuit huis." Kevin twijfelt.

**Vraag 1 · Wat doe je?** Kevin weet niet of het appje echt is. Wat doe je?

- **A.** Je antwoordt meteen. Zo'n kans krijg je niet vaak.
  → *Begrijpelijk, maar pas op. Dit lijkt op oplichting.*
- **B.** Je zoekt het bedrijf zelf op en belt het.
  → *Goed. Zo check je of het bedrijf echt bestaat.*
- **C.** Je stuurt je gegevens, dan kunnen ze je betalen.
  → *Niet doen. Met je gegevens kunnen ze je oplichten.*

**Goed antwoord: B.**
**Waarom:** Veel geld voor makkelijk werk is vaak nep. Oplichters zoeken mensen via WhatsApp,
TikTok of Telegram. Een echt bedrijf kun je opzoeken en bellen.

**Vraag 2 · Waar of niet waar?** "Een uitzendbureau mag jou geld vragen om werk te vinden."

**Antwoord: niet waar.**
**Waarom:** Een uitzendbureau mag jou geen geld vragen voor werk. Het bedrijf waar je werkt, betaalt
het bureau. Moet je toch betalen? Dat is een slecht teken.

**Vraag 3 · Wat doe je?** Fatima wil weer werken. Ze zorgde 6 jaar voor haar kinderen. Hoe begint ze?

- **A.** Ze wacht tot de gemeente haar een baan aanbiedt.
  → *Dat kan lang duren. Zelf zoeken werkt sneller.*
- **B.** Ze zoekt alleen naar precies haar oude functie.
  → *Dat mag, maar dan mist ze veel banen.*
- **C.** Ze vertelt vrienden en buren dat ze werk zoekt.
  → *Goed. Veel banen vind je via mensen die je kent.*

**Goed antwoord: C.**
**Waarom:** De mensen die je kent, heten je netwerk. Via hen hoor je vaak over werk. Kijk ook op
werk.nl en vraag de gemeente om hulp bij zoeken.

**Zo zeg je het:** "Hallo, ik zag uw vacature. Is die nog open?"

**Onthoud:** Echt werk kost jou nooit geld.

**Wie kan je helpen:** werk.nl (van UWV) · de gemeente: vraag naar het Werkplein of het
Jongerenloket · uitzendbureaus · twijfel je over een vacature? Kijk op fraudehelpdesk.nl.

---

### Les 1.2 · Je cv: kort en eerlijk

**Leerdoel:** je maakt een kort, eerlijk cv, en je weet dat zorg en vrijwilligerswerk ook tellen.

**Scène** · *Beeld: Esra (38) aan de keukentafel met een laptop en een kop thee.*

> Esra zorgde 8 jaar voor haar zieke moeder. Nu wil ze weer werken. Ze schrijft haar cv. Een cv is
> een lijstje van je werk, je school en wat je kunt. Esra denkt: "Wat zet ik bij die 8 jaar?"

**Vraag 1 · Wat doe je?** Wat schrijft Esra bij die 8 jaar?

- **A.** Niets. Ze laat die jaren gewoon weg.
  → *Een gat in je cv valt op. Werkgevers vragen er dan toch naar.*
- **B.** Ze schrijft dat ze toen in een winkel werkte.
  → *Niet doen. Een werkgever kan dat nagaan.*
- **C.** Ze schrijft: "Mantelzorg voor mijn moeder."
  → *Goed. Zorg is ook ervaring.*

**Goed antwoord: C.**
**Waarom:** Zorgen voor iemand uit je familie heet mantelzorg. Je leert er veel van. Bijvoorbeeld
plannen, regelen en rustig blijven. Schrijf dat er gewoon bij.

**Vraag 2 · Waar of niet waar?** "Een foto op je cv mag, maar hoeft niet."

**Antwoord: waar.**
**Waarom:** Een foto mag, maar hoeft niet. Je hoeft ook je geloof niet te noemen. Een cv is kort:
1 of 2 bladzijden.

**Vraag 3 · Wat doe je?** Jayden heeft geen diploma. Hij werkte wel 2 jaar in een supermarkt.

- **A.** Hij schrijft de supermarkt op, en wat hij daar deed.
  → *Goed. Werkervaring telt, ook zonder diploma.*
- **B.** Hij schrijft op dat hij bijna een diploma heeft.
  → *Dat klopt niet. Eerlijk zijn werkt beter.*
- **C.** Hij solliciteert niet, want hij heeft geen diploma.
  → *Jammer. Voor veel banen is ervaring genoeg.*

**Goed antwoord: A.**
**Waarom:** Schrijf op wat je deed. Bijvoorbeeld vakken vullen, de kassa en klanten helpen. Dat
laat zien wat je kunt.

**Zo zeg je het:** "Wil je mijn cv lezen? Klopt alles?"

**Onthoud:** Een cv is kort en eerlijk. Ook zorg en vrijwilligerswerk tellen.

**Wie kan je helpen:** de bibliotheek · werk.nl (voorbeelden van een cv) · je school of
loopbaanbegeleider · de gemeente.

---

### Les 1.3 · Het sollicitatiegesprek

**Leerdoel:** je weet wat je in een gesprek kunt vragen, en welke vragen je niet hoeft te beantwoorden.

**Scène** · *Beeld: Mohammed in een klein kantoor van een bakkerij. Tegenover hem zit Linda met een map.*

> Mohammed heeft een sollicitatiegesprek bij een bakkerij. Hij is er 10 minuten te vroeg. De
> eigenaar, Linda, stelt veel vragen. Dan vraagt ze: "Ben je getrouwd? Wil je kinderen?"

**Vraag 1 · Wat doe je?** Mohammed wil daar niets over zeggen. Wat doe je?

- **A.** Je zegt rustig: "Daar praat ik liever niet over."
  → *Goed. Je blijft beleefd en je hoeft niets te vertellen.*
- **B.** Je geeft toch antwoord, anders krijg je de baan niet.
  → *Begrijpelijk. Maar je hoeft dit niet te vertellen.*
- **C.** Je zegt dat ze dit niet mag vragen, en je gaat weg.
  → *Je hebt gelijk, maar weggaan sluit de deur.*

**Goed antwoord: A.**
**Waarom:** Een werkgever mag niet vragen naar zwangerschap, kinderwens, geloof of gezondheid. Je
hoeft daar geen antwoord op te geven. Je kunt het later melden als discriminatie.

**Vraag 2 · Wat doe je?** Aan het eind vraagt Linda: "Heb jij nog vragen?"

- **A.** "Nee, dank u. Ik wil u niet lastigvallen."
  → *Beleefd bedoeld. Maar hier kan het lijken alsof je niet wilt.*
- **B.** "Ja. Wat zijn de werktijden, en wat verdien ik?"
  → *Goed. Vragen stellen laat zien dat je de baan wilt.*
- **C.** "Nee, dat hoor ik wel als ik begin."
  → *Dan weet je te weinig als je moet tekenen.*

**Goed antwoord: B.**
**Waarom:** Hier is het normaal om zelf vragen te stellen. Vraag naar de uren, het loon en het werk.
Je mag ook vragen wanneer je iets hoort.

**Vraag 3 · Waar of niet waar?** "Kom je 5 minuten te laat? Dan hoef je niets te zeggen."

**Antwoord: niet waar.**
**Waarom:** Op tijd komen is hier heel belangrijk. Te laat? Bel of app vóór de afspraak. Zeg sorry
als je binnenkomt.

**Zo zeg je het:** "Daar praat ik liever niet over. Wilt u meer weten over mijn werk?"

**Onthoud:** Vragen over kinderen, geloof of gezondheid hoef je niet te beantwoorden.

**Wie kan je helpen:** discriminatie.nl (een meldpunt in je eigen regio) · het College voor de
Rechten van de Mens.

---

### Les 1.4 · Proefdag en het aanbod

**Leerdoel:** je weet wat een proefdag is, en je stelt de goede vragen vóór je tekent.

**Scène** · *Beeld: Piotr in werkkleding in een magazijn. Een man met een klembord steekt zijn duim op.*

> Piotr mag een proefdag doen in een magazijn. Hij werkt de hele dag mee. Hij pakt dozen in, net als
> de anderen. Aan het eind zegt de baas: "Je mag beginnen! Teken je vandaag?"

**Vraag 1 · Waar of niet waar?** "Een proefdag is altijd onbetaald."

**Antwoord: niet waar.**
**Waarom:** Kijk je een paar uur mee? Dan krijg je vaak geen loon. Werk je echt mee, net als de
anderen? Dan heb je vaak wel recht op loon ⚖️. Vraag dit vóór de proefdag.

*Redactie: er is geen wettelijke regel voor proefdagen. Het hangt af van arbeid, gezag en loon. ⚖️*

**Vraag 2 · Wat doe je?** De baas wil dat Piotr meteen tekent.

- **A.** Hij tekent meteen. Anders krijgt een ander de baan.
  → *Begrijpelijk. Maar dan weet hij niet wat hij tekent.*
- **B.** Hij vraagt of hij het contract mee naar huis mag nemen.
  → *Goed. Thuis kan hij rustig lezen en vragen stellen.*
- **C.** Hij leest alleen het loon en tekent dan.
  → *Het loon is belangrijk. Maar er staat nog veel meer in.*

**Goed antwoord: B.**
**Waarom:** Je mag een contract eerst lezen. Je mag iemand vragen om mee te lezen. Een goede
werkgever geeft je die tijd.

**Vraag 3 · Wat doe je?** Welke vraag stelt Piotr vóór hij tekent?

- **A.** "Hoe heet de directeur van het hele bedrijf?"
  → *Mag je vragen. Maar het zegt niets over jouw rechten.*
- **B.** "Mag ik in de pauze mijn eigen muziek luisteren?"
  → *Kan later ook. Eerst de belangrijke dingen.*
- **C.** "Welke cao hoort bij dit werk?"
  → *Goed. In de cao staan veel regels over jouw loon.*

**Goed antwoord: C.**
**Waarom:** Een cao is een afspraak over loon en regels voor jouw soort werk. Vakbonden en
werkgevers maken die samen. Er staan bijvoorbeeld toeslagen en vrije dagen in.

**Zo zeg je het:** "Mag ik het contract mee naar huis nemen? Dan lees ik het rustig."

**Onthoud:** Eerst lezen, dan tekenen.

**Wie kan je helpen:** het Juridisch Loket (gratis, 0800-8020 ⚖️) · een vakbond, zoals FNV of CNV ·
iemand die je vertrouwt.

---

## Unit 2 · Je eerste dag

*In deze unit: op tijd komen, wat je meeneemt, kennismaken, en vragen stellen.*

### Les 2.1 · Op tijd en goed voorbereid

**Leerdoel:** je weet wat je meeneemt, wat "op tijd" hier betekent, en wat je doet als je te laat bent.

**Scène** · *Beeld: Dewi bij de voordeur. In haar hand: een tas, haar ID-kaart en een broodtrommel.*

> Dewi begint morgen in een verzorgingshuis. Haar dienst begint om 7 uur. Ze zet twee wekkers. Ze
> wil om kwart voor 7 binnen zijn. Wat neemt ze mee?

**Vraag 1 · Wat doe je?** Wat neemt Dewi mee op haar eerste dag?

- **A.** Haar ID-kaart en haar bankrekeningnummer.
  → *Goed. Die heeft je werkgever nodig.*
- **B.** Haar paspoort, om bij de baas achter te laten.
  → *Niet doen. Je paspoort houd je altijd zelf.*
- **C.** Alleen haar telefoon. De rest staat online.
  → *Je werkgever moet je ID echt zien.*

**Goed antwoord: A.**
**Waarom:** Je werkgever moet je ID-kaart of paspoort zien en een kopie maken. Hij heeft ook je BSN
nodig. Je BSN is je burgerservicenummer. Het staat op je ID-kaart. Je ID geef je nooit af.

**Vraag 2 · Wat doe je?** De bus heeft vertraging. Dewi is 15 minuten te laat.

- **A.** Ze legt het uit als ze binnen is.
  → *Dan weet het team te laat dat ze later komt.*
- **B.** Ze rent extra hard en zegt er niets over.
  → *Haasten is niet nodig. Even laten weten wel.*
- **C.** Ze belt of appt haar leidinggevende meteen.
  → *Goed. Dan kan het team plannen.*

**Goed antwoord: C.**
**Waarom:** Laat het weten vóór je dienst begint. Dan kan het team plannen. Te laat zonder bericht
vinden mensen hier veel erger dan de vertraging zelf.

**Vraag 3 · Waar of niet waar?** "Op je werk mag je altijd dragen wat je wilt."

**Antwoord: niet waar.**
**Waarom:** Veel werk heeft regels voor kleding. Vaak is dat voor veiligheid of hygiëne. Een regel
moet wel een goede reden hebben ⚖️. Vraag op je eerste dag naar de regels.

**Zo zeg je het:** "Goedemorgen, ik ben Dewi. Ik begin vandaag. Bij wie meld ik me?"

**Onthoud:** Te laat? Bel of app vóór je dienst begint.

---

### Les 2.2 · Kennismaken

**Leerdoel:** je weet hoe je je voorstelt, wanneer je "je" zegt, en dat je zelf kiest over aanraken.

**Scène** · *Beeld: Jayden in de keuken van een restaurant. Chef Sanne steekt haar hand uit.*

> Jayden begint in de keuken van een restaurant. De chef heet Sanne. Ze zegt: "Hoi, ik ben Sanne.
> Zeg maar je, hoor." Jayden weet niet goed wat hij moet doen.

**Vraag 1 · Wat doe je?** Wat bedoelt Sanne met "Zeg maar je"?

- **A.** Ze vindt dat Jayden te zacht praat.
  → *Nee. Het gaat niet over hard of zacht praten.*
- **B.** Ze wil dat hij haar "chef" noemt.
  → *Nee. Ze noemt juist haar voornaam.*
- **C.** Ze wil dat hij "je" zegt, en niet "u".
  → *Goed. Ze wil minder afstand.*

**Goed antwoord: C.**
**Waarom:** Op het werk zeggen de meeste mensen "je". Ook tegen de baas. Twijfel je? Begin met "u".
Luister wat anderen doen. Tegen klanten en cliënten zeg je vaak wel "u".

**Vraag 2 · Wat doe je?** Een collega wil je een hand geven. Jij geeft liever geen hand.

- **A.** Je geeft toch een hand, ook al wil je het niet.
  → *Dat hoeft niet. Je mag zelf kiezen.*
- **B.** Je knikt, lacht en zegt kort waarom.
  → *Goed. Zo groet je beleefd en is het duidelijk.*
- **C.** Je doet alsof je de hand niet ziet.
  → *Dat kan onbeleefd lijken. Even uitleggen helpt.*

**Goed antwoord: B.**
**Waarom:** Een hand geven is hier normaal, maar niet verplicht. Je mag ook op een andere beleefde
manier groeten. Mensen houden hier vaak een armlengte afstand. Aanraken doe je weinig.

**Vraag 3 · Waar of niet waar?** "Je mag gerust nog een keer naar iemands naam vragen."

**Antwoord: waar.**
**Waarom:** Niemand verwacht dat je na een week alle namen kent. Vraag gerust nog een keer: "Hoe heet je ook alweer?" Dat is heel
normaal.

**Zo zeg je het:** "Hoi, ik ben Jayden. Ik ben nieuw. Hoe heet jij?"

**Onthoud:** Op het werk zeg je meestal "je", ook tegen de baas.

---

### Les 2.3 · Vragen stellen en terugzeggen

**Leerdoel:** je durft te zeggen dat je iets niet snapt, en je checkt het door terug te zeggen.

**Scène** · *Beeld: Piotr bij een machine in een fabriek. Collega Mark wijst en praat snel.*

> Piotr werkt in een fabriek. Zijn collega Mark legt een machine uit. Mark praat snel. Piotr
> begrijpt maar de helft. Mark vraagt: "Duidelijk?"

**Vraag 1 · Wat doe je?** Piotr snapt het niet goed. Wat doe je?

- **A.** Je knikt, en je kijkt straks hoe de anderen het doen.
  → *Begrijpelijk. Maar zo kun je een fout maken.*
- **B.** Je zegt "ja", en je vraagt het later aan iemand anders.
  → *Dan denkt Mark dat het goed gaat.*
- **C.** Je zegt: "Nog een keer graag, iets langzamer."
  → *Goed. Zo leer je het meteen goed.*

**Goed antwoord: C.**
**Waarom:** Vragen stellen is hier normaal. Het laat zien dat je het goed wilt doen. Knikken zonder
te snappen geeft fouten. Bij machines kan dat gevaarlijk zijn.

**Vraag 2 · Wat doe je?** Mark legt het opnieuw uit. Hoe check je dat je het snapt?

- **A.** Je zegt in je eigen woorden wat je gaat doen.
  → *Goed. Zo hoort Mark of je het goed begrijpt.*
- **B.** Je zegt "ja, ja" en begint snel.
  → *Dan weet niemand of je het echt snapt.*
- **C.** Je vraagt of hij het de eerste keer voor je doet.
  → *Kijken helpt. Maar zelf terugzeggen is beter.*

**Goed antwoord: A.**
**Waarom:** Terugzeggen is slim. "Dus eerst dit, en dan dat?" Zo merk je meteen of je iets mist.

**Vraag 3 · Waar of niet waar?** "Hier vinden de meeste leidinggevenden het goed als je veel vraagt."

**Antwoord: waar.**
**Waarom:** Vragen laat zien dat je het goed wilt doen. Beter twee keer vragen dan één fout. Schrijf het
antwoord op. Dan hoef je het niet steeds te vragen.

**Zo zeg je het:** "Dus eerst zet ik de machine aan, en dan ...?"

**Onthoud:** Snap je het niet? Vraag het. Zeg terug wat je hebt begrepen.

---

## Unit 3 · Contract en soorten werk

*In deze unit: wat er in je contract staat, proeftijd, tijdelijk en vast, oproep- en uitzendwerk,
stage, leerwerkbaan en zzp. Ook voor herintreders.*

### Les 3.1 · Je contract: wat staat erin?

**Leerdoel:** je weet welke afspraken op papier horen, wat een cao is, en dat papier telt.

**Scène** · *Beeld: Sanne aan tafel met een contract en een markeerstift. Drie woorden zijn geel.*

> Sanne krijgt haar eerste contract bij een supermarkt. Het zijn 4 bladzijden. Er staan moeilijke
> woorden in. Ze ziet "proeftijd", "cao" en "12 uur per week".

**Vraag 1 · Waar of niet waar?** "Je werkgever moet de belangrijkste afspraken op papier of per mail geven."

**Antwoord: waar.**
**Waarom:** Je werkgever moet laten weten wat je verdient. En hoeveel uur je werkt. Dat moet binnen
1 week ⚖️, op papier of digitaal. Andere afspraken volgen binnen 1 maand ⚖️. Bijvoorbeeld over vakantie en opzeggen.

**Vraag 2 · Wat doe je?** Sanne snapt het woord "cao" niet.

- **A.** Ze slaat het woord over. Het is vast een detail.
  → *Jammer. In de cao staan juist veel van je rechten.*
- **B.** Ze tekent eerst, en ze zoekt het later op.
  → *Beter andersom: eerst snappen, dan tekenen.*
- **C.** Ze vraagt wat het is, en welke cao het is.
  → *Goed. Dan kan ze de cao zelf opzoeken.*

**Goed antwoord: C.**
**Waarom:** Een cao is een afspraak over loon en regels voor jouw soort werk. Je cao staat vaak
online. Zoek op "cao" en de naam van je sector.

**Vraag 3 · Wat doe je?** In het contract staat 12 uur. De baas zegt: "Je werkt echt 30 uur."

- **A.** Je vindt het goed. 30 uur is toch meer geld.
  → *Nu wel. Maar bij ziekte of ontslag telt het contract.*
- **B.** Je zegt niets. Je wilt geen gedoe op je eerste dag.
  → *Begrijpelijk. Maar later is het lastiger.*
- **C.** Je vraagt of hij 30 uur in het contract zet.
  → *Goed. Wat op papier staat, telt.*

**Goed antwoord: C.**
**Waarom:** Bij ziekte, WW of ontslag kijkt men naar je contract. Werk je lange tijd meer uren? Dan
kun je vragen om die uren in je contract ⚖️.

**Zo zeg je het:** "Kunt u de afspraak over mijn uren in het contract zetten?"

**Onthoud:** Wat op papier staat, telt. Bewaar je contract goed.

**Wie kan je helpen:** het Juridisch Loket · een vakbond (FNV, CNV) · de cao van je sector.

---

### Les 3.2 · Proeftijd, tijdelijk en vast

**Leerdoel:** je weet wat een proeftijd is, en wat er gebeurt aan het eind van een tijdelijk contract.

**Scène** · *Beeld: Mohammed bij een kalender. Er staat een rood rondje om een datum.*

> Mohammed heeft een contract voor 1 jaar. Er staat 1 maand proeftijd in. Een proeftijd is een
> periode om te kijken of het werk past. Na 3 weken zegt zijn baas: "Het past niet. Je kunt morgen
> stoppen."

**Vraag 1 · Waar of niet waar?** "In de proeftijd mag de baas je meteen laten stoppen."

**Antwoord: waar.**
**Waarom:** In de proeftijd mogen jij en de baas meteen stoppen. Je mag vragen waarom. Dan moet de
baas de reden op papier geven ⚖️. De reden mag geen discriminatie zijn.

**Vraag 2 · Waar of niet waar?** "In een contract van 6 maanden mag een proeftijd staan."

**Antwoord: niet waar.**
**Waarom:** In een contract van 6 maanden of korter mag geen proeftijd ⚖️. Contract langer dan
6 maanden, maar korter dan 2 jaar? Dan hooguit 1 maand ⚖️. Contract van 2 jaar of langer, of vast?
Dan hooguit 2 maanden ⚖️.

**Vraag 3 · Wat doe je?** Fatima heeft een tijdelijk contract tot 1 juni. Het is half mei. Ze hoort niets.

- **A.** Ze wacht af. Geen bericht betekent: ze mag blijven.
  → *Dat klopt niet. Een tijdelijk contract stopt vanzelf.*
- **B.** Ze vraagt haar baas of ze na 1 juni mag blijven.
  → *Goed. Dan weet ze op tijd waar ze aan toe is.*
- **C.** Ze zoekt alvast ander werk en zegt niets.
  → *Slim om te zoeken. Maar vragen kan ook.*

**Goed antwoord: B.**
**Waarom:** Een tijdelijk contract stopt vanzelf op de einddatum. Je werkgever moet 1 maand ⚖️ van
tevoren laten weten of je mag blijven. Dat geldt bij een contract van 6 maanden of langer ⚖️. Had je
3 tijdelijke contracten, of werk je er 3 jaar? Dan krijg je meestal een vast contract ⚖️.

*Redactie: de ketenregeling verandert waarschijnlijk per 1 januari 2028 (Wet meer zekerheid
flexwerkers). Tot die tijd geldt de regel hierboven. ⚖️*

**Zo zeg je het:** "Wilt u mij de reden op papier geven?"

**Onthoud:** Tijdelijk contract? Vraag op tijd of je mag blijven.

**Wie kan je helpen:** het Juridisch Loket · een vakbond · UWV (als je werk stopt, zie les 10.1).

---

### Les 3.3 · Oproepwerk en uitzendwerk

**Leerdoel:** je kent de basisregels voor oproepwerk, en je weet wat een uitzendbureau wel en niet mag.

**Scène** · *Beeld: Esra in een hotelgang met een schoonmaakkar. Haar telefoon gaat.*

> Esra werkt als oproepkracht bij een hotel. Ze heeft een nulurencontract. Dat betekent: geen vaste
> uren. Het hotel belt als er werk is. Vrijdag belt het hotel: "Kun je zaterdag komen?"

**Vraag 1 · Waar of niet waar?** "Esra moet zaterdag komen, want het hotel belt haar."

**Antwoord: niet waar.**
**Waarom:** Je werkgever moet je meestal minstens 4 dagen ⚖️ van tevoren oproepen. Is het later?
Dan mag je nee zeggen. Een cao kan die 4 dagen korter maken. Maar niet korter dan 1 dag ⚖️.

**Vraag 2 · Wat doe je?** Esra werkt maar 1 uur. Dan stuurt de baas haar naar huis.

- **A.** Ze krijgt loon voor 1 uur. Zo werkt oproepwerk.
  → *Vaak niet. Er is een regel voor korte oproepen.*
- **B.** Ze checkt of ze loon krijgt voor 3 uur.
  → *Goed. Daar heeft ze meestal recht op.*
- **C.** Ze krijgt niets, want ze was er maar kort.
  → *Nee. Gewerkte tijd wordt altijd betaald.*

**Goed antwoord: B.**
**Waarom:** Bij oproepwerk krijg je meestal minstens 3 uur ⚖️ loon per oproep. Ook als je korter
werkt. Dat geldt bij een klein contract zonder vaste werktijden ⚖️.

**Vraag 3 · Waar of niet waar?** "Via een uitzendbureau krijg je altijd minder dan je vaste collega's."

**Antwoord: niet waar.**
**Waarom:** Sinds 2026 ⚖️ is er een nieuwe cao voor uitzendkrachten. Daarin staat: je krijgt minstens
evenveel als vaste collega's ⚖️. Het gaat om loon, vrije dagen en pensioen samen.
Twijfel je? Vraag het na bij het bureau.

*Redactie: vanaf 1 januari 2028 verdwijnt het nulurencontract voor de meeste mensen (Wet meer
zekerheid flexwerkers). Vanaf 2028 mogen bedrijven alleen werken met toegelaten uitzendbureaus
(Wtta). Deze les moet dan worden aangepast. ⚖️*

**Zo zeg je het:** "Zaterdag lukt niet, dat is te kort van tevoren. Volgende week kan ik wel."

**Onthoud:** Minder dan 4 dagen ⚖️ van tevoren opgeroepen? Je mag nee zeggen.

**Wie kan je helpen:** een vakbond · het Juridisch Loket · bij uitzendwerk: de SNCU (zij controleren
de uitzend-cao) · bij te weinig loon: de Nederlandse Arbeidsinspectie, ook zonder je naam.

---

### Les 3.4 · Stage, leerwerkbaan en zzp

**Leerdoel:** je weet het verschil tussen stage, leerwerkbaan, werknemer en zzp'er, en je kent de risico's.

**Scène** · *Beeld: Jayden met een grote bezorgtas op zijn rug. Naast hem een fiets.*

> Jayden is 18. Hij zoekt werk. Een bezorgbedrijf zegt: "Word zzp'er bij ons. Dan verdien je meer
> per uur." Een zzp'er is iemand met een eigen bedrijf, zonder personeel. Jayden weet niet of dat
> slim is.

**Vraag 1 · Waar of niet waar?** "Als zzp'er krijg je je loon door als je ziek bent."

**Antwoord: niet waar.**
**Waarom:** Als zzp'er krijg je geen loon als je ziek bent. Je krijgt geen WW als het werk stopt. Je
regelt zelf je belasting, je verzekering en je pensioen. Meer per uur is dus niet altijd meer geld.

**Vraag 2 · Wat doe je?** Het bedrijf bepaalt Jaydens tijden, zijn kleding en zijn route. Toch noemen ze hem zzp'er.

- **A.** Hij vraagt advies. Misschien is hij gewoon werknemer.
  → *Goed. Dan weet hij welke rechten hij heeft.*
- **B.** Hij vindt het prima. Zo gaat het bij bezorgers.
  → *Begrijpelijk. Maar dan mist hij misschien rechten.*
- **C.** Hij koopt alvast zelf een fiets en een tas.
  → *Wacht daar nog even mee. Eerst advies vragen.*

**Goed antwoord: A.**
**Waarom:** Bepaalt het bedrijf hoe, wanneer en waar je werkt? Dan ben je vaak gewoon werknemer ⚖️.
Dan heb je recht op loon bij ziekte en op WW. Iemand die zzp'er heet, maar werknemer is, heet
schijnzelfstandig.

**Vraag 3 · Waar of niet waar?** "Op een stage krijg je altijd het minimumloon."

**Antwoord: niet waar.**
**Waarom:** Op een stage ben je aan het leren. Een stagevergoeding is nu nog geen recht in de wet ⚖️.
Veel bedrijven geven wel een vergoeding. Een leerwerkbaan (bbl) is anders. Dan heb je een contract en
krijg je loon.

*Redactie: het kabinet wil een stagevergoeding verplicht maken (brief juli 2026). Nog geen wet. ⚖️*

**Zo zeg je het:** "Ben ik hier werknemer of zzp'er? Wat staat er in mijn contract?"

**Onthoud:** Zzp betekent: geen loon als je ziek bent, en geen WW.

**Wie kan je helpen:** je school of stagebegeleider · SBB (stages in het mbo) · een vakbond, zoals
FNV Zelfstandigen · het Juridisch Loket · KVK en Belastingdienst (informatie over zzp).

---

## Unit 4 · Loon en loonstrook

*In deze unit: bruto en netto, loonheffing, minimumloon en jeugdloon, je loonstrook checken,
vakantiegeld, toeslagen en overwerk.*

### Les 4.1 · Bruto en netto

**Leerdoel:** je weet het verschil tussen bruto en netto, en waar je het minimumloon vindt.

**Scène** · *Beeld: Fatima kijkt verbaasd naar de bank-app op haar telefoon.*

> Fatima werkt in de schoonmaak. In haar contract staat een bedrag per maand. Op haar bankrekening
> komt veel minder binnen. Is er iets fout gegaan?

**Vraag 1 · Waar of niet waar?** "Bruto is het geld dat op je bankrekening komt."

**Antwoord: niet waar.**
**Waarom:** Bruto is je loon vóór belasting. Netto is wat je echt op je rekening krijgt. Het
verschil is vooral loonheffing. Loonheffing is belasting en premie. Je werkgever betaalt die voor
jou aan de Belastingdienst.

**Vraag 2 · Wat doe je?** Fatima is 20. Een collega van 25 verdient meer. Ze doen hetzelfde werk.

- **A.** Ze zoekt het minimumloon voor haar leeftijd op.
  → *Goed. Dan weet ze of haar loon klopt.*
- **B.** Ze vraagt meteen hetzelfde loon als haar collega.
  → *Vragen mag. Maar er is een regel voor leeftijd.*
- **C.** Ze denkt: nieuwe mensen verdienen altijd minder.
  → *Niet altijd. Check eerst wat de regel is.*

**Goed antwoord: A.**
**Waarom:** Ben je jonger dan 21 ⚖️? Dan is je minimumloon lager. Dat heet jeugdloon. Vanaf 21 ⚖️
krijg je het volle minimumloon. Je loon mag nooit lager zijn. Het bedrag per uur staat op
rijksoverheid.nl. Je cao kan meer geven.

**Vraag 3 · Wat doe je?** Fatima krijgt er een baan bij, in een winkel. Bij allebei vragen ze: "Wil je loonheffingskorting?"

- **A.** Ze zegt bij allebei ja. Dan houdt ze meer over.
  → *Nu wel. Maar later moet ze dan geld terugbetalen.*
- **B.** Ze zegt ja bij één baan, en nee bij de andere.
  → *Goed. De korting krijg je maar één keer.*
- **C.** Ze zegt bij allebei nee. Dat lijkt haar het veiligst.
  → *Dan betaalt ze eerst te veel belasting.*

**Goed antwoord: B.**
**Waarom:** Loonheffingskorting is korting op je belasting. Je krijgt die maar bij één werkgever.
Kies meestal de baan waar je het meest verdient.

**Zo zeg je het:** "Kunt u mij uitleggen waarom mijn netto loon zo laag is?"

**Onthoud:** Bruto is vóór belasting. Netto krijg je op je rekening.

**Wie kan je helpen:** de loonadministratie of HR van je werk · de BelastingTelefoon ·
rijksoverheid.nl (minimumloon) · een vakbond.

---

### Les 4.2 · Je loonstrook checken

**Leerdoel:** je schrijft je uren op, je checkt je loonstrook, en je vraagt na wat niet klopt.

**Scène** · *Beeld: Piotr met een schriftje en een pen. Naast hem ligt een loonstrook.*

> Piotr schrijft elke dag zijn uren op: begintijd, eindtijd en pauze. Aan het eind van de maand
> krijgt hij zijn loonstrook. Hij telt 152 uur. Op de loonstrook staat 140 uur.

**Vraag 1 · Wat doe je?** Piotr ziet het verschil. Wat doe je?

- **A.** Hij zegt niets. Het verschil is niet zo groot.
  → *12 uur is veel loon. Het is jouw geld.*
- **B.** Hij werkt volgende maand gewoon 12 uur minder.
  → *Dat lost het niet op, en het kan problemen geven.*
- **C.** Hij laat zijn lijstje zien en vraagt het na.
  → *Goed. Met zijn lijstje kan hij het laten zien.*

**Goed antwoord: C.**
**Waarom:** Fouten op een loonstrook komen vaak voor. Navragen is jouw recht. Je eigen lijstje met
uren helpt heel goed. Vraag het snel, en het liefst per mail.

**Vraag 2 · Waar of niet waar?** "Je werkgever moet je een loonstrook geven."

**Antwoord: waar.**
**Waarom:** Je krijgt een loonstrook bij je eerste loon ⚖️. En elke keer als het bedrag verandert ⚖️.
De meeste werkgevers geven elke maand een loonstrook, vaak in een app. Bewaar ze goed.

**Vraag 3 · Wat doe je?** Op de loonstrook staat "inhouding huisvesting". Piotr heeft daar nooit iets over getekend.

- **A.** Hij vraagt waar hij daarvoor getekend heeft.
  → *Goed. Zonder zijn handtekening mag het meestal niet.*
- **B.** Hij denkt: dat hoort er vast bij, iedereen heeft het.
  → *Begrijpelijk. Maar het mag niet zomaar.*
- **C.** Hij vraagt een voorschot om het verschil te betalen.
  → *Dan leent hij geld dat misschien van hem is.*

**Goed antwoord: A.**
**Waarom:** Je werkgever mag niet zomaar geld van je loon afhalen. Daar moet je eerst schriftelijk
mee instemmen ⚖️. Ook dan zijn er grenzen ⚖️. Klopt het niet? Vraag hulp.

**Zo zeg je het:** "Op mijn loonstrook staan 140 uur. Ik heb 152 uur gewerkt. Kunt u dat nakijken?"

**Onthoud:** Schrijf je uren op. Check elke loonstrook.

**Wie kan je helpen:** de loonadministratie · een vakbond · het Juridisch Loket · de Nederlandse
Arbeidsinspectie (bij te weinig loon, ook zonder je naam) · bij uitzendwerk: de SNCU.

---

### Les 4.3 · Vakantiegeld, toeslag en overwerk

**Leerdoel:** je weet wat vakantiegeld is, wat een toeslag is, en hoe overwerk betaald wordt.

**Scène** · *Beeld: Dewi in een gang van een zorghuis, 's nachts. Buiten het raam de maan.*

> Dewi werkt in de zorg. Ze werkt ook 's avonds en in het weekend. In mei krijgt ze ineens veel meer
> geld. Op haar loonstrook staat "vakantiegeld" en "ORT".

**Vraag 1 · Waar of niet waar?** "Vakantiegeld is jouw recht, geen cadeautje van je baas."

**Antwoord: waar.**
**Waarom:** Je werkgever moet vakantiegeld betalen. Het is minstens 8 procent ⚖️ van je bruto loon. Je bouwt het
op met elk uur dat je werkt. Meestal krijg je het in mei of juni ⚖️. Stop je eerder? Dan krijg je
het bij je laatste loon.

**Vraag 2 · Wat doe je?** Wat betekent "ORT" op Dewi's loonstrook?

- **A.** Een bedrag dat ze eind van het jaar terugbetaalt.
  → *Nee. Dit geld is van haar.*
- **B.** Extra loon voor werk in de avond, nacht of weekend.
  → *Goed. Zo heet die toeslag in de zorg.*
- **C.** Een aftrek omdat ze een keer te laat was.
  → *Nee. Voor te laat komen krijg je geen aftrek op je strook.*

**Goed antwoord: B.**
**Waarom:** ORT betekent onregelmatigheidstoeslag. Dat is extra geld voor werk op onregelmatige
tijden. Het staat in de cao, niet in de wet ⚖️. Elke cao heeft eigen regels.

**Vraag 3 · Wat doe je?** Dewi werkt deze maand 10 uur over. Ze ziet die uren niet op haar loonstrook.

- **A.** Ze denkt: overwerk wordt in de zorg nooit betaald.
  → *Dat klopt niet. Gewerkte uren tellen.*
- **B.** Ze besluit voortaan nooit meer over te werken.
  → *Dat mag ze zelf weten. Maar de 10 uur zijn nog niet geregeld.*
- **C.** Ze vraagt waar de 10 uur zijn gebleven.
  → *Goed. Navragen is haar recht.*

**Goed antwoord: C.**
**Waarom:** Je werkgever betaalt elk uur dat je werkt ⚖️. Soms krijg je vrije tijd terug in plaats
van geld. Of je extra toeslag krijgt, staat in je cao of contract ⚖️. Schrijf je overuren altijd op.

**Zo zeg je het:** "Ik heb 10 uur overgewerkt. Krijg ik die uitbetaald, of krijg ik vrij?"

**Onthoud:** Vakantiegeld is jouw recht: minstens 8 procent ⚖️ van je loon.

**Wie kan je helpen:** je cao (zoek hem online) · een vakbond · de loonadministratie.

---

## Unit 5 · Werktijden, pauze, overwerk en vrij vragen

*In deze unit: hoe lang je mag werken, pauze, extra uren, en vrije dagen en verlof.*

### Les 5.1 · Je rooster en je werktijden

**Leerdoel:** je kent de grenzen voor werktijden, ook voor jongeren, en je weet dat het rooster op tijd moet komen.

**Scène** · *Beeld: Mohammed in een magazijn voor een rooster aan de muur. Eén vakje is rood.*

> Mohammed werkt in een magazijn. Het rooster hangt aan de muur en staat in een app. Op dinsdag
> staat hij ineens 13 uur ingeroosterd. Hij twijfelt of dat mag.

**Vraag 1 · Waar of niet waar?** "Een dienst van 13 uur mag meestal niet."

**Antwoord: waar.**
**Waarom:** De wet zegt: hooguit 12 uur ⚖️ per dienst. En hooguit 60 uur ⚖️ in één week. Over een
langere tijd moet het gemiddeld minder zijn ⚖️. Voor nachtdiensten en jongeren zijn de regels
strenger.

**Vraag 2 · Waar of niet waar?** "Jayden is 17. Hij mag in het restaurant werken tot middernacht."

**Antwoord: niet waar.**
**Waarom:** Ben je 16 of 17 ⚖️? Dan mag je niet werken tussen 23.00 en 6.00 uur ⚖️. Je werkt hooguit
9 uur per dienst ⚖️. En hooguit 45 uur per week ⚖️. Je schooltijd telt daarbij mee ⚖️.

**Vraag 3 · Wat doe je?** Het rooster verandert steeds een dag van tevoren. Mohammed kan zo niets plannen.

- **A.** Hij past zich aan. Zo gaat het nu eenmaal.
  → *Begrijpelijk. Maar er zijn regels voor het rooster.*
- **B.** Hij vraagt wanneer het rooster vast hoort te staan.
  → *Goed. Rustig vragen is de eerste stap.*
- **C.** Hij komt alleen nog op de dagen die hem uitkomen.
  → *Dan breekt hij zelf afspraken. Praten werkt beter.*

**Goed antwoord: B.**
**Waarom:** Je werkgever moet je werktijden op tijd laten weten. Meestal 4 weken ⚖️ van tevoren,
tenzij de cao iets anders zegt. Een wijziging moet een goede reden hebben.

**Zo zeg je het:** "13 uur is te lang voor mij. Mag dat volgens de regels?"

**Onthoud:** Hooguit 12 uur ⚖️ per dienst. Ben je jonger dan 18? Dan minder.

**Wie kan je helpen:** een vakbond · de ondernemingsraad, als je bedrijf die heeft · de Nederlandse
Arbeidsinspectie (melden kan zonder je naam).

---

### Les 5.2 · Pauze

**Leerdoel:** je weet wanneer je recht hebt op pauze, en hoe lang.

**Scène** · *Beeld: Sanne achter de kassa van een drukke supermarkt. Ze kijkt naar de klok.*

> Sanne werkt van 9 tot 17 uur in de supermarkt. Het is druk. Haar leidinggevende zegt: "Pauze doen
> we vandaag maar niet." Sanne heeft honger en is moe.

**Vraag 1 · Waar of niet waar?** "Werk je meer dan 5,5 uur? Dan heb je recht op pauze."

**Antwoord: waar.**
**Waarom:** Werk je meer dan 5,5 uur ⚖️? Dan krijg je minstens 30 minuten ⚖️ pauze. Dat mag ook
2 keer 15 minuten ⚖️. Werk je meer dan 10 uur ⚖️? Dan minstens 45 minuten ⚖️. Ben je 16 of 17?
Dan krijg je al pauze na 4,5 uur ⚖️.

**Vraag 2 · Wat doe je?** De leidinggevende wil vandaag geen pauze.

- **A.** Je vraagt rustig wanneer je vandaag wel pauze kunt nemen.
  → *Goed. Zo zoek je samen een moment.*
- **B.** Je slaat je pauze over. Het is nu eenmaal druk.
  → *Begrijpelijk. Maar pauze is je recht, ook als het druk is.*
- **C.** Je neemt meteen pauze, ook al staat er een rij.
  → *Je hebt recht op pauze. Maar overleg eerst even.*

**Goed antwoord: A.**
**Waarom:** Pauze is de wet, geen gunst. Rust helpt je ook om veilig te werken. Zoek samen een
moment, ook als het druk is.

**Vraag 3 · Waar of niet waar?** "Je pauze wordt altijd betaald."

**Antwoord: niet waar.**
**Waarom:** Pauze is vaak onbetaald. Dat hangt af van je contract of cao ⚖️. In je pauze hoef je
niet te werken. Je mag dan echt stoppen.

**Zo zeg je het:** "Ik heb nog geen pauze gehad. Wanneer kan ik even weg?"

**Onthoud:** Meer dan 5,5 uur ⚖️ werken? Dan heb je recht op pauze.

**Wie kan je helpen:** een vakbond · de Nederlandse Arbeidsinspectie.

---

### Les 5.3 · Overwerk en nee zeggen

**Leerdoel:** je kunt nee zeggen tegen extra uren, en je houdt je overuren bij.

**Scène** · *Beeld: Kevin bij een lopende band. Leidinggevende Henk tikt hem op de schouder. De klok zegt 17.00.*

> Kevin werkt in een fabriek. Het is 5 uur en zijn dienst is klaar. Zijn leidinggevende Henk vraagt:
> "Kun je 2 uur langer blijven?" Kevin moet vanavond op zijn broertje passen.

**Vraag 1 · Wat doe je?** Kevin kan vandaag niet langer blijven.

- **A.** Hij zegt ja, en hij gaat toch om 5 uur weg.
  → *Dan rekent Henk op iemand die er niet is.*
- **B.** Hij zegt: "Vandaag niet. Morgen kan ik wel."
  → *Goed. Duidelijk, en hij biedt iets anders aan.*
- **C.** Hij zegt "misschien", en hij belt zijn moeder.
  → *Dan weet Henk niet waar hij aan toe is.*

**Goed antwoord: B.**
**Waarom:** Een duidelijk nee wordt hier gewaardeerd. Ja zeggen en het niet doen, kost veel
vertrouwen. Bied een andere keer aan als dat kan.

**Vraag 2 · Waar of niet waar?** "Je moet altijd overwerken als je baas het vraagt."

**Antwoord: niet waar.**
**Waarom:** Het hangt af van je contract en je cao ⚖️. Bij een noodgeval moet je soms wel ⚖️. Maar
jouw situatie telt ook mee. Bijvoorbeeld zorg voor een kind.

**Vraag 3 · Wat doe je?** Kevin werkt deze week voor de derde keer over.

- **A.** Hij vertrouwt erop dat Henk het zelf bijhoudt.
  → *Henk vergeet misschien iets. Je eigen lijst is zekerder.*
- **B.** Hij vraagt Henk om de extra uren contant te betalen.
  → *Contant zonder loonstrook is zwart werk. Dan mis je rechten.*
- **C.** Hij schrijft de extra uren op, met datum en tijd.
  → *Goed. Daarna checkt hij zijn loonstrook.*

**Goed antwoord: C.**
**Waarom:** Je eigen lijst helpt als er iets misgaat. Check daarna je loonstrook. Loon zonder
loonstrook is zwart werk. Dan bouw je bijvoorbeeld geen WW en pensioen op ⚖️.

**Zo zeg je het:** "Vandaag lukt het niet. Morgen kan ik wel een uur langer."

**Onthoud:** Overwerk? Schrijf de uren op, met datum en tijd.

**Wie kan je helpen:** je cao · een vakbond · de loonadministratie.

---

### Les 5.4 · Vrij vragen en verlof

**Leerdoel:** je vraagt vrij op tijd en op papier, en je weet wat je doet bij een noodgeval.

**Scène** · *Beeld: Esra achter een computer. Op het scherm een kalender en een vliegtuigje.*

> Esra wil in de zomer 3 weken naar haar familie. Het is nu februari. Haar collega zegt: "Vraag het
> pas in juni. Dan weet je het zeker." Esra twijfelt.

**Vraag 1 · Wat doe je?** Wanneer vraagt Esra haar vakantie aan?

- **A.** Ze wacht tot juni, zoals haar collega zegt.
  → *Dan hebben anderen de weken misschien al.*
- **B.** Ze boekt de reis alvast, en ze meldt het later.
  → *Riskant. De baas moet het eerst goedvinden.*
- **C.** Ze vraagt het nu al, per mail of in de app.
  → *Goed. Vroeg en op papier geeft de beste kans.*

**Goed antwoord: C.**
**Waarom:** Vraag vrij op tijd en op papier. Je werkgever moet in principe ja zeggen. Alleen bij een
heel goede reden van het bedrijf mag hij nee zeggen ⚖️. Dat moet hij binnen 2 weken ⚖️ op papier
laten weten.

**Vraag 2 · Waar of niet waar?** "Werk je 5 dagen per week? Dan heb je minstens 20 vrije dagen per jaar."

**Antwoord: waar.**
**Waarom:** Je krijgt minstens 4 keer ⚖️ zoveel vrije dagen als je dagen per week werkt. Je cao geeft
vaak meer. Vrije dagen van de wet vervallen meestal na een half jaar ⚖️. Wil je vrij voor een
feestdag, zoals het Suikerfeest of Kerst? Vraag die dag op tijd aan.

**Vraag 3 · Wat doe je?** Piotr krijgt een telefoontje. Zijn zoon is gevallen op school en moet naar het ziekenhuis.

- **A.** Hij zegt het meteen tegen zijn leidinggevende, en gaat.
  → *Goed. Zo weet het werk wat er aan de hand is.*
- **B.** Hij werkt eerst zijn dienst af, en gaat dan.
  → *Dat hoeft niet. Bij een noodgeval mag je weg.*
- **C.** Hij gaat meteen weg, en hij belt morgen zijn baas.
  → *Gaan is goed. Maar laat het meteen weten.*

**Goed antwoord: A.**
**Waarom:** Bij een noodgeval mag je meteen weg. Dat heet calamiteitenverlof ⚖️. Je krijgt dan
meestal gewoon loon ⚖️. Moet je langer voor iemand zorgen? Vraag naar zorgverlof ⚖️.

**Zo zeg je het:** "Ik wil graag vrij van 1 tot en met 21 juli. Kan dat?"

**Onthoud:** Vraag vrij op tijd, en altijd op papier of in de app.

**Wie kan je helpen:** je leidinggevende · je cao · een vakbond · rijksoverheid.nl (verlof).

---

## Unit 6 · Ziek zijn

*In deze unit: hoe je je ziek meldt, je loon bij ziekte, de bedrijfsarts, en weer beter melden.*

### Les 6.1 · Je ziek melden

**Leerdoel:** je meldt je zelf ziek, op tijd, en je weet wat je wel en niet hoeft te zeggen.

**Scène** · *Beeld: Jayden in bed met een rode neus. De wekker zegt 7.15.*

> Jayden wordt wakker met koorts. Zijn dienst in de keuken begint om 10 uur. Hij voelt zich echt
> slecht. Hij pakt zijn telefoon.

**Vraag 1 · Wat doe je?** Hoe meldt Jayden zich ziek?

- **A.** Hij belt zelf de chef, ruim vóór 10 uur.
  → *Goed. Zo weet de chef het op tijd.*
- **B.** Hij appt een collega: "Zeg jij het even tegen de chef?"
  → *Begrijpelijk. Maar je meldt je meestal zelf ziek.*
- **C.** Hij stuurt om 10 uur een appje: "Ziek."
  → *Dat is laat, en vaak is een appje niet genoeg.*

**Goed antwoord: A.**
**Waarom:** Bel zelf, en bel vóór je dienst begint. Dat is in de meeste bedrijven de regel. Kijk in
je contract of het verzuimprotocol. Dat zijn de regels voor ziek melden bij jouw bedrijf.

**Vraag 2 · Waar of niet waar?** "Je hoeft je baas niet te vertellen welke ziekte je hebt."

**Antwoord: waar.**
**Waarom:** Je hoeft niet te zeggen wat je hebt. Je baas mag wel vragen hoe lang het ongeveer duurt.
En waar je te bereiken bent. Over je ziekte praat je met de bedrijfsarts.

**Vraag 3 · Wat doe je?** Kevin werkt via een uitzendbureau. Hij is ziek.

- **A.** Hij meldt het alleen aan de collega's op zijn werk.
  → *Dan weet het bureau het niet. Dat geeft problemen.*
- **B.** Hij meldt zich niet ziek. Hij heeft toch geen vast werk.
  → *Toch wel melden. Dan houd je je rechten.*
- **C.** Hij meldt het bij het bureau, en bij het bedrijf.
  → *Goed. Dan weten ze het allebei.*

**Goed antwoord: C.**
**Waarom:** Werk je via een uitzendbureau? Meld je ziek bij het bureau. En vaak ook bij het bedrijf
waar je werkt. Vraag aan het begin hoe het moet.

**Zo zeg je het:** "Goedemorgen, met Jayden. Ik ben ziek. Ik kan vandaag niet komen."

**Onthoud:** Ziek? Bel zelf, vóór je dienst begint.

**Wie kan je helpen:** je leidinggevende · het verzuimprotocol van je bedrijf · je uitzendbureau.

---

### Les 6.2 · Je rechten als je ziek bent

**Leerdoel:** je weet dat je loon meestal doorloopt, en wat je wel en niet hoeft te vertellen.

**Scène** · *Beeld: Esra op de bank met haar been in het gips. Haar telefoon gaat.*

> Esra is gevallen. Ze heeft haar been gebroken. Ze kan 6 weken niet werken. Ze is bang dat ze geen
> loon krijgt. Dan belt haar leidinggevende om te vragen hoe het gaat.

**Vraag 1 · Waar of niet waar?** "Als je ziek bent, krijg je geen loon."

**Antwoord: niet waar.**
**Waarom:** Je werkgever betaalt minstens 70 procent ⚖️ van je loon door. Dat kan tot 2 jaar ⚖️
duren. In het eerste jaar krijg je minstens het minimumloon ⚖️. Een cao geeft vaak meer. Soms zijn
er 2 wachtdagen ⚖️ zonder loon, als je contract of cao dat zegt.

**Vraag 2 · Wat doe je?** De leidinggevende vraagt: "Wat is er precies met je been?"

- **A.** Ze vertelt alles, ook wat de dokter precies zei.
  → *Dat mag, als ze wil. Maar het hoeft niet.*
- **B.** Ze zegt niets, en ze hangt snel weer op.
  → *Contact met je werk is wel normaal en goed.*
- **C.** Ze zegt hoe lang het ongeveer gaat duren.
  → *Goed. Dat wil de leidinggevende vooral weten.*

**Goed antwoord: C.**
**Waarom:** Je mag zelf iets vertellen, als je dat wilt. Maar het hoeft niet. Je baas mag vragen hoe
lang het duurt. En of je misschien ander werk kunt doen.

**Vraag 3 · Waar of niet waar?** "Word je ziek op vakantie? Dan kun je je ziek melden."

**Antwoord: waar.**
**Waarom:** Meld je meteen ziek bij je werkgever, ook vanuit het buitenland. Dan tellen die dagen
meestal niet als vakantie ⚖️. Vraag een briefje van een dokter daar.

**Zo zeg je het:** "Ik denk dat ik 6 weken niet kan werken. Ik houd u op de hoogte."

**Onthoud:** Ziek? Je krijgt meestal minstens 70 procent ⚖️ van je loon.

**Wie kan je helpen:** de bedrijfsarts · UWV (heb je geen werkgever meer, of werk je via een
uitzendbureau? Vraag naar de Ziektewet) · een vakbond · het Juridisch Loket.

---

### Les 6.3 · Langer ziek en weer beter

**Leerdoel:** je weet wat de bedrijfsarts doet, dat je meewerkt aan herstel, en dat je je beter meldt.

**Scène** · *Beeld: Mohammed tegenover een vriendelijke arts met een laptop.*

> Mohammed heeft last van zijn rug. Hij is al 5 weken thuis. Hij krijgt een brief: hij moet naar de
> bedrijfsarts. Hij denkt: "Werkt die arts niet gewoon voor mijn baas?"

**Vraag 1 · Waar of niet waar?** "De bedrijfsarts vertelt je baas niet welke ziekte je hebt."

**Antwoord: waar.**
**Waarom:** De bedrijfsarts heeft een beroepsgeheim. Hij vertelt je baas alleen wat je wel en niet
kunt. Niet wat je ziekte is. Je mag ook zelf naar de bedrijfsarts gaan ⚖️, zonder je baas.

**Vraag 2 · Wat doe je?** De bedrijfsarts zegt: "Begin met 2 uur per dag licht werk."

- **A.** Je doet mee, en je zegt wat wel en niet lukt.
  → *Goed. Zo bouw je het samen rustig op.*
- **B.** Je zegt nee. Je bent nog niet helemaal beter.
  → *Begrijpelijk. Maar meewerken aan herstel hoort erbij.*
- **C.** Je werkt meteen weer hele dagen, om te laten zien dat je wilt.
  → *Te snel. Dan kun je opnieuw uitvallen.*

**Goed antwoord: A.**
**Waarom:** Ben je lang ziek? Dan moet je meewerken aan je herstel ⚖️. Jij, je baas en de
bedrijfsarts maken samen een plan. Werk je niet mee? Dan kan je loon stoppen ⚖️. Ben je het oneens?
Vraag dan een deskundigenoordeel bij UWV ⚖️.

**Vraag 3 · Wat doe je?** Mohammed is weer beter.

- **A.** Hij komt morgen gewoon weer, zonder iets te zeggen.
  → *Dan klopt het rooster misschien niet.*
- **B.** Hij wacht tot zijn baas hem zelf belt.
  → *Dat kan lang duren. Zelf melden is sneller.*
- **C.** Hij belt zijn leidinggevende, en hij meldt zich beter.
  → *Goed. Dan weet iedereen dat hij weer kan.*

**Goed antwoord: C.**
**Waarom:** Beter melden is net zo belangrijk als ziek melden. Dan weet je baas dat je weer komt. En
dan klopt je loon weer.

**Zo zeg je het:** "Ik ben weer beter. Ik kan morgen weer komen werken."

**Onthoud:** De bedrijfsarts vertelt je baas niet wat je hebt.

**Wie kan je helpen:** de bedrijfsarts · je huisarts · UWV (deskundigenoordeel) · een vakbond.

---

## Unit 7 · Veilig en gezond werken

*In deze unit: beschermende spullen, uitleg, onveilig werk stoppen, ongelukken melden en werkdruk.*

### Les 7.1 · Beschermende spullen en uitleg

**Leerdoel:** je weet dat je werkgever gratis bescherming en uitleg geeft, en dat je erom mag vragen.

**Scène** · *Beeld: Piotr op een bouwplaats met helm. Zijn handschoenen hebben gaten. Een zaag ligt klaar.*

> Piotr werkt op een bouwplaats. Zijn handschoenen zijn kapot. Zijn veiligheidsbril is zoek. Hij moet
> zo gaan zagen.

**Vraag 1 · Wat doe je?** Piotr moet zo zagen, zonder goede spullen.

- **A.** Hij zaagt even zonder bril. Het duurt maar kort.
  → *Een splinter in je oog gaat heel snel.*
- **B.** Hij vraagt nieuwe spullen aan zijn uitvoerder.
  → *Goed. Daar is de uitvoerder voor.*
- **C.** Hij koopt na het werk zelf nieuwe spullen.
  → *Goed bedoeld. Maar je werkgever moet ze geven.*

**Goed antwoord: B.**
**Waarom:** Je werkgever moet beschermende spullen gratis geven ⚖️. Denk aan handschoenen, een bril
of veiligheidsschoenen. Erom vragen is normaal. Zonder bescherming werken is gevaarlijk.

**Vraag 2 · Waar of niet waar?** "Je werkgever moet je uitleggen hoe je veilig werkt."

**Antwoord: waar.**
**Waarom:** Je hebt recht op uitleg over de gevaren ⚖️. En over hoe je veilig werkt. Ook als je nieuw
bent of uitzendkracht. Snap je het niet? Vraag het nog een keer.

**Vraag 3 · Wat doe je?** Op de bouw is geregeld een korte veiligheidsvergadering: de toolboxmeeting. Piotr vindt het saai.

- **A.** Hij blijft weg. Hij weet het meeste toch al.
  → *Er kan nieuws zijn. En het hoort bij je werk.*
- **B.** Hij gaat, maar hij zit op zijn telefoon.
  → *Dan mist hij wat er gezegd wordt.*
- **C.** Hij gaat erheen, luistert en stelt een vraag.
  → *Goed. Zo hoort hij wat er nieuw is.*

**Goed antwoord: C.**
**Waarom:** In de toolboxmeeting hoor je over gevaren en nieuwe regels. Je kunt ook zelf iets melden.
Het is werktijd.

**Zo zeg je het:** "Mijn handschoenen zijn kapot. Waar krijg ik nieuwe?"

**Onthoud:** Beschermende spullen krijg je gratis van je werkgever ⚖️.

**Wie kan je helpen:** je uitvoerder of leidinggevende · de preventiemedewerker (de collega die op
veiligheid let) · de Nederlandse Arbeidsinspectie.

---

### Les 7.2 · Onveilig? Zeg het en stop

**Leerdoel:** je meldt gevaar en bijna-ongelukken, en je weet dat je mag stoppen bij groot gevaar.

**Scène** · *Beeld: Kevin in een distributiecentrum. Een stapel pallets staat scheef. Een heftruck rijdt langs.*

> Kevin werkt in een distributiecentrum. Een stapel pallets staat scheef. Er valt bijna een doos op
> een collega. Er gebeurt niets. Iedereen werkt gewoon door.

**Vraag 1 · Wat doe je?** Er is niemand gewond. Wat doe je?

- **A.** Niets. Er is toch niemand gewond geraakt.
  → *Gelukkig niet. Maar de volgende keer misschien wel.*
- **B.** Hij zet de doos zelf recht, en zegt het niemand.
  → *Goed dat hij helpt. Maar zo leert niemand ervan.*
- **C.** Hij waarschuwt de collega's en meldt het bij de leiding.
  → *Goed. Zo voorkom je een echt ongeluk.*

**Goed antwoord: C.**
**Waarom:** Een bijna-ongeluk is een waarschuwing. Melden helpt om een echt ongeluk te voorkomen. Ook
kleine dingen mag je melden.

**Vraag 2 · Waar of niet waar?** "Bij groot gevaar mag je stoppen met werken."

**Antwoord: waar.**
**Waarom:** Is er ernstig en direct gevaar? Dan mag je het werk stoppen ⚖️. Zeg het meteen tegen je
leidinggevende. Je werkgever mag je daar niet voor straffen ⚖️.

**Vraag 3 · Wat doe je?** Kevin heeft het gemeld. Weken later is het nog steeds onveilig.

- **A.** Hij meldt het bij de Arbeidsinspectie, als het moet zonder naam.
  → *Goed. Daar is de Arbeidsinspectie voor.*
- **B.** Hij zet een filmpje van het magazijn online.
  → *Begrijpelijk, maar dat kan jou problemen geven.*
- **C.** Hij stopt met melden. Het helpt toch niet.
  → *Jammer. Er is nog een plek waar je terechtkunt.*

**Goed antwoord: A.**
**Waarom:** Helpt melden binnen het bedrijf niet? Dan kun je naar de Nederlandse Arbeidsinspectie. Dat
mag ook zonder je naam. Een filmpje online kan juist problemen geven, ook voor jou.

**Zo zeg je het:** "Stop! Dit is niet veilig."

**Onthoud:** Onveilig? Zeg het meteen. Bij groot gevaar mag je stoppen.

**Wie kan je helpen:** je leidinggevende · de preventiemedewerker · de ondernemingsraad · de
Nederlandse Arbeidsinspectie (nlarbeidsinspectie.nl) · bij direct gevaar: 112.

---

### Les 7.3 · Een ongeluk, of te veel stress

**Leerdoel:** je meldt elk ongeluk, en je praat erover als het werk te zwaar wordt.

**Scène** · *Beeld: Dewi in haar auto voor een huis. Op haar telefoon een lange lijst met adressen.*

> Dewi werkt in de thuiszorg. Ze heeft elke dag te weinig tijd voor haar cliënten. Ze slaapt slecht.
> Ze is vaak gespannen. Ze denkt: "Dat hoort er nu eenmaal bij."

**Vraag 1 · Wat doe je?** Dewi merkt dat het te veel wordt.

- **A.** Ze zegt niets. In de zorg heeft iedereen het druk.
  → *Begrijpelijk. Maar zo kun je ziek worden.*
- **B.** Ze praat erover met haar leidinggevende of de bedrijfsarts.
  → *Goed. Dan kan er samen iets veranderen.*
- **C.** Ze werkt sneller, dan is ze eerder klaar.
  → *Haast geeft fouten en meer stress.*

**Goed antwoord: B.**
**Waarom:** Te veel werkdruk maakt mensen ziek. Je werkgever moet daar iets aan doen ⚖️. Praat erover
voordat je ziek wordt. Je mag ook zelf naar de bedrijfsarts ⚖️.

**Vraag 2 · Waar of niet waar?** "Een ernstig ongeluk op het werk moet je werkgever melden."

**Antwoord: waar.**
**Waarom:** Bij een ernstig ongeluk meldt je werkgever het meteen bij de Arbeidsinspectie ⚖️.
Bijvoorbeeld als iemand naar het ziekenhuis moet. Of als iemand blijvend letsel heeft ⚖️.

**Vraag 3 · Wat doe je?** Fatima glijdt uit op een natte vloer. Ze bezeert haar pols. Het lijkt niet erg.

- **A.** Ze meldt het toch, en schrijft op wat er gebeurde.
  → *Goed. Soms krijg je later pas klachten.*
- **B.** Ze zegt niets. Ze wil niet lastig zijn.
  → *Melden is niet lastig. Het hoort erbij.*
- **C.** Ze werkt door, en ze kijkt morgen hoe het gaat.
  → *Kan, maar meld het wel vandaag.*

**Goed antwoord: A.**
**Waarom:** Meld elk ongeluk, ook als het klein lijkt. Schrijf op wat er gebeurde, wanneer, en wie het
zag. Maak een foto van de plek. Dan heb je bewijs als je later klachten krijgt.

**Zo zeg je het:** "Ik ben gevallen. Ik wil dat graag melden."

**Onthoud:** Meld elk ongeluk, ook een klein ongeluk.

**Wie kan je helpen:** bij spoed: 112 · de BHV'er of EHBO'er op je werk · je leidinggevende · de
bedrijfsarts · een vakbond of het Juridisch Loket (bij schade).

---

## Unit 8 · Samenwerken: de ongeschreven regels

*In deze unit: direct zijn, feedback, het oneens zijn, afspraken, koffie, verjaardagen, je telefoon
en de groepsapp. Deze regels staan nergens op papier. Ze verschillen ook per team.*

### Les 8.1 · Direct zeggen en feedback

**Leerdoel:** je begrijpt directe feedback, en je meldt een fout meteen.

**Scène** · *Beeld: Jayden met een salade. Chef Sanne wijst naar het bord en loopt alweer door.*

> Jayden maakt een salade. Chef Sanne kijkt even. Ze zegt: "Nee, dat is fout. Te veel saus. Doe het
> zo." Ze laat het snel zien en loopt door. Jayden voelt zich dom.

**Vraag 1 · Wat doe je?** Sanne zei het heel direct.

- **A.** Je zegt: "Oké, zo dan?" En je doet het opnieuw.
  → *Goed. Je laat zien dat je wilt leren.*
- **B.** Je zegt niets meer tegen haar, de rest van de dag.
  → *Begrijpelijk. Maar ze bedoelde het niet persoonlijk.*
- **C.** Je zegt: "Zo deed ik het bij mijn vorige werk."
  → *Mag je zeggen. Maar hier wil ze het anders.*

**Goed antwoord: A.**
**Waarom:** Nederlanders zeggen het vaak heel direct. Ze bedoelen het meestal niet onaardig. Het gaat
over het werk, niet over jou. Jij mag ook direct zijn, als je vriendelijk blijft.

**Vraag 2 · Waar of niet waar?** "Een functioneringsgesprek betekent dat je bijna ontslagen wordt."

**Antwoord: niet waar.**
**Waarom:** Een functioneringsgesprek is een gewoon gesprek over je werk. Wat gaat goed? Wat kan
beter? Jij mag ook zeggen wat je nodig hebt. Bereid het voor met een paar vragen.

**Vraag 3 · Wat doe je?** Jayden laat een bak saus vallen. Niemand zag het.

- **A.** Hij ruimt het snel op, en hij zegt er niets over.
  → *Opruimen is goed. Maar de saus is nu op.*
- **B.** Hij zegt het meteen tegen Sanne.
  → *Goed. Dan kan zij op tijd nieuwe saus regelen.*
- **C.** Hij zegt dat de bak al scheef stond.
  → *Dan klopt het verhaal niet. Dat kost vertrouwen.*

**Goed antwoord: B.**
**Waarom:** Iedereen maakt fouten. Zeg het snel, dan kan het worden opgelost. Een fout verbergen
vinden mensen hier veel erger dan de fout zelf.

**Zo zeg je het:** "Oké, zo dan? Fijn dat je het laat zien."

**Onthoud:** Direct is niet onbeleefd. Het gaat over het werk, niet over jou.

---

### Les 8.2 · Het oneens zijn

**Leerdoel:** je kunt rustig zeggen dat je het oneens bent, ook met je baas.

**Scène** · *Beeld: een werkoverleg in een kantine. Fatima steekt haar hand op.*

> Fatima werkt in een schoonmaakteam. In het werkoverleg zegt de leidinggevende: "Vanaf nu begint
> iedereen een half uur eerder." Fatima brengt eerst haar kinderen naar school. Ze is het er niet
> mee eens.

**Vraag 1 · Wat doe je?** Fatima kan niet eerder beginnen.

- **A.** Ze zegt niets, en ze komt voortaan een half uur te laat.
  → *Dan breekt ze de nieuwe afspraak. Dat geeft problemen.*
- **B.** Ze klaagt na het overleg bij haar collega's.
  → *Dan weet de leidinggevende het niet.*
- **C.** Ze legt in het overleg rustig uit waarom het niet lukt.
  → *Goed. Dan kan er samen een oplossing komen.*

**Goed antwoord: C.**
**Waarom:** Hier is het normaal om het oneens te zijn met je baas. Ook in een overleg. Zeg het rustig,
met een reden. Een eigen idee helpt: "Kan ik dan een half uur later stoppen?"

**Vraag 2 · Waar of niet waar?** "Na het overleg besluit de baas. Daarna doe je mee, ook als je het oneens was."

**Antwoord: waar.**
**Waarom:** Hier praten mensen vaak lang samen. Dat heet overleggen. Maar na een besluit doet iedereen
mee. Werkt het echt niet? Zeg het later nog een keer. Gaat het om je rechten? Vraag dan advies.

**Vraag 3 · Wat doe je?** Een collega laat het zware werk steeds aan Fatima over.

- **A.** Ze zegt het rustig tegen die collega zelf.
  → *Goed. Zo krijgt hij de kans om het te veranderen.*
- **B.** Ze zegt niets, maar ze wordt steeds bozer.
  → *Begrijpelijk. Maar zo verandert er niets.*
- **C.** Ze vraagt de leidinggevende om het meteen op te lossen.
  → *Kan later. Eerst zelf praten werkt meestal beter.*

**Goed antwoord: A.**
**Waarom:** Praat eerst met de persoon zelf, op een rustig moment. Gebruik een ik-zin: "Ik vind het
niet fijn dat ...". Helpt dat niet? Ga dan naar je leidinggevende.

**Zo zeg je het:** "Ik zie het anders. Mag ik uitleggen waarom?"

**Onthoud:** Het oneens zijn mag. Zeg het rustig, met een reden.

---

### Les 8.3 · Afspraak is afspraak

**Leerdoel:** je weet dat een ja telt, en je zegt het op tijd als iets niet lukt.

**Scène** · *Beeld: Mohammed en Esra in een kantine. Esra kijkt op haar telefoon naar haar agenda.*

> Mohammed zegt tegen collega Esra: "Ik help je vrijdag met tellen." Ze zetten het in de agenda.
> Donderdag krijgt Mohammed voor vrijdag een andere klus.

**Vraag 1 · Wat doe je?** Mohammed kan vrijdag niet helpen.

- **A.** Hij zegt het donderdag al tegen Esra.
  → *Goed. Dan kan zij nog iets anders regelen.*
- **B.** Hij zegt het vrijdag, als hij haar ziet.
  → *Dan is het voor Esra te laat om iets te regelen.*
- **C.** Hij zegt niets. De baas gaf hem toch die klus.
  → *Esra rekent op hem. Ze verdient een bericht.*

**Goed antwoord: A.**
**Waarom:** Als je ja zegt, rekenen mensen erop. Afspraak is afspraak. Lukt het niet? Zeg het zo vroeg
mogelijk. Bied een andere tijd aan.

**Vraag 2 · Waar of niet waar?** "Hier plannen mensen ook kleine dingen vaak weken vooruit."

**Antwoord: waar.**
**Waarom:** Nederlanders plannen veel. Ook een gesprek of een kop koffie staat vaak in de agenda. Een
agenda in je telefoon helpt om niets te vergeten.

**Vraag 3 · Wat doe je?** Sanne vraagt: "Kun je dit vóór 3 uur af hebben?" Jij weet: dat haal je niet.

- **A.** Je zegt ja. Je doet je best en ziet wel.
  → *Begrijpelijk. Maar dan rekent Sanne op 3 uur.*
- **B.** Je zegt eerlijk: "3 uur lukt niet. 4 uur wel."
  → *Goed. Nu kan Sanne plannen.*
- **C.** Je zegt niets, en je werkt extra snel door.
  → *Dan weet Sanne niet wat ze kan verwachten.*

**Goed antwoord: B.**
**Waarom:** Een eerlijk "nee" of "later" wordt hier gewaardeerd. Ja zeggen en het niet halen, kost
meer vertrouwen. Zo kan Sanne op tijd iets anders regelen.

**Zo zeg je het:** "Het lukt vrijdag toch niet. Kan het maandag?"

**Onthoud:** Afspraak is afspraak. Lukt het niet? Zeg het op tijd.

---

### Les 8.4 · Koffie, verjaardagen en je telefoon

**Leerdoel:** je kent de gewoontes bij koffie en verjaardagen, en de regels voor je telefoon en de groepsapp.

**Scène** · *Beeld: een kantine om 10 uur. Op tafel staat taart. Iemand hangt een slinger op.*

> Om 10 uur drinkt het team samen koffie. Collega Linda deelt taart uit: ze is jarig. Iedereen zegt:
> "Gefeliciteerd!" Piotr zit er voor het eerst bij. Volgende maand is hij zelf jarig.

**Vraag 1 · Wat doe je?** Wat is hier gewoon op je eigen verjaardag?

- **A.** Je zegt niets. Het is werk, geen feestje.
  → *Mag. Maar hier is het een leuke gewoonte.*
- **B.** Je neemt zelf iets lekkers mee voor je collega's.
  → *Goed. Op je verjaardag trakteer je zelf.*
- **C.** Je wacht tot je collega's iets voor jou meenemen.
  → *Hier is het andersom: de jarige trakteert.*

**Goed antwoord: B.**
**Waarom:** Hier trakteer je zelf op je verjaardag. Bijvoorbeeld op taart of koek. Het hoeft niet duur
te zijn. Samen koffie drinken hoort ook bij het werk. Je bent welkom aan tafel, ook als je nieuw bent.

**Vraag 2 · Waar of niet waar?** "Je mag je telefoon altijd gebruiken, als je werk maar af is."

**Antwoord: niet waar.**
**Waarom:** Bij veel werk mag je telefoon niet tijdens het werk. Bijvoorbeeld bij machines, in de zorg
of met eten. Gebruik je telefoon in je pauze. Wacht je op een belangrijk telefoontje? Zeg het vooraf
tegen je leidinggevende.

**Vraag 3 · Wat doe je?** Het team heeft een groepsapp. Om 23 uur appt de leidinggevende: "Wie kan morgen eerder komen?"

- **A.** Je stuurt een screenshot naar vrienden: "Kijk nou!"
  → *Niet doen. Berichten van werk deel je niet.*
- **B.** Je appt meteen terug: "Dit is veel te laat!"
  → *Begrijpelijk. Maar dat kun je beter rustig zeggen.*
- **C.** Je antwoordt de volgende ochtend, kort en vriendelijk.
  → *Goed. Je antwoordt op tijd, en je rust uit.*

**Goed antwoord: C.**
**Waarom:** Een groepsapp is voor werk. Houd je berichten kort en vriendelijk. Je hoeft niet altijd
meteen te antwoorden. Stuurt je baas vaak 's avonds laat? Bespreek het rustig. Deel geen berichten of
foto's van collega's zonder toestemming.

**Zo zeg je het:** "Ik ben jarig. Ik heb taart meegenomen!"

**Onthoud:** Jarig? Dan trakteer je zelf.

---

## Unit 9 · Problemen en je rechten

*In deze unit: discriminatie, grensoverschrijdend gedrag, uitbuiting, oplichting en ontslag. En waar
je hulp vindt. Bij deze onderwerpen kan je werkgever zelf het probleem zijn. Daarom noemen we
altijd ook hulp van buiten het bedrijf.*

### Les 9.1 · Discriminatie

**Leerdoel:** je herkent discriminatie bij solliciteren en op het werk, en je weet hoe je het meldt.

**Scène** · *Beeld: Mohammed en Sanne, ieder met een telefoon. Op beide schermen dezelfde vacature.*

> Mohammed en Sanne solliciteren op dezelfde baan. Hun cv's zijn bijna hetzelfde. Sanne mag op
> gesprek komen. Mohammed hoort: "De baan is al weg." Een dag later staat de vacature er nog.

**Vraag 1 · Waar of niet waar?** "Een werkgever mag kiezen op afkomst of geloof."

**Antwoord: niet waar.**
**Waarom:** Discriminatie bij werk is verboden. Bijvoorbeeld om je afkomst, geloof, geslacht,
leeftijd of handicap. Dat geldt bij solliciteren en bij stages. En ook bij loon en promotie.

**Vraag 2 · Wat doe je?** Mohammed denkt dat het om zijn naam gaat.

- **A.** Hij laat het gaan. Bewijzen kan hij het toch niet.
  → *Begrijpelijk. Maar melden kan ook zonder hard bewijs.*
- **B.** Hij schrijft op wat er gebeurde, en hij meldt het.
  → *Goed. Zo kan iemand hem helpen.*
- **C.** Hij zet de naam van het bedrijf boos online.
  → *Dat kan hem zelf problemen geven.*

**Goed antwoord: B.**
**Waarom:** Schrijf op wat er gebeurde, met datum. Bewaar berichten en de vacature. Meld het via
discriminatie.nl. Melden helpt, ook voor anderen.

**Vraag 3 · Wat doe je?** Esra draagt een hoofddoek. Haar teamleider zegt: "Hier geen hoofddoek." Er is geen reden van veiligheid of hygiëne.

- **A.** Ze vraagt waarom, en ze vraagt advies.
  → *Goed. Dan weet ze waar ze staat.*
- **B.** Ze doet hem af, en ze zegt er niets van.
  → *Begrijpelijk. Maar het kan discriminatie zijn.*
- **C.** Ze neemt meteen ontslag.
  → *Dan verliest ze misschien rechten. Vraag eerst advies.*

**Goed antwoord: A.**
**Waarom:** Een regel over kleding moet een goede reden hebben. Bijvoorbeeld veiligheid of hygiëne ⚖️.
Zonder goede reden kan het discriminatie zijn. Het College voor de Rechten van de Mens kan daar gratis
een oordeel over geven.

**Zo zeg je het:** "Ik heb het gevoel dat ik anders behandeld word. Kunnen we praten?"

**Onthoud:** Discriminatie is verboden. Schrijf het op en meld het.

**Wie kan je helpen:** discriminatie.nl (een meldpunt in je regio) · het College voor de Rechten van
de Mens · de vertrouwenspersoon, als je bedrijf die heeft · een vakbond · het Juridisch Loket · de
politie, bij bedreiging.

---

### Les 9.2 · Grensoverschrijdend gedrag

**Leerdoel:** je herkent gedrag dat over je grens gaat, je zegt stop, en je weet bij wie je terechtkunt.

**Scène** · *Beeld: Dewi in een hotelgang. Een collega staat veel te dicht bij haar.*

> Dewi werkt in een hotel. Een collega maakt steeds grapjes over haar lichaam. Soms legt hij zijn hand
> op haar rug. De anderen lachen erom. Dewi vindt het niet fijn.

**Vraag 1 · Waar of niet waar?** "Als hij het als grapje bedoelt, is het niet erg."

**Antwoord: niet waar.**
**Waarom:** Grensoverschrijdend gedrag is gedrag dat over jouw grens gaat. Bijvoorbeeld aanraken,
seksuele grappen of staren. Het maakt niet uit hoe de ander het bedoelt. Het gaat om hoe het voor jou
voelt.

**Vraag 2 · Wat doe je?** Dewi wil dat het stopt.

- **A.** Ze lacht mee. Dan houdt het vanzelf wel op.
  → *Begrijpelijk. Maar vaak gaat het dan juist door.*
- **B.** Ze zegt duidelijk: "Stop. Ik wil dit niet."
  → *Goed. Dan weet hij het, en anderen horen het ook.*
- **C.** Ze gaat hem uit de weg, en ze zegt niets.
  → *Dat lost het niet op. Hulp vragen mag.*

**Goed antwoord: B.**
**Waarom:** Zeg duidelijk dat je het niet wilt, als je dat kunt. Schrijf op wat er gebeurde, wanneer,
en wie het zag. Vertel het aan je leidinggevende of de vertrouwenspersoon. Je werkgever moet je
beschermen ⚖️.

**Vraag 3 · Wat doe je?** Kevin ziet dat een collega steeds wordt uitgelachen en gepest.

- **A.** Hij lacht mee. Anders is hij straks zelf de volgende.
  → *Begrijpelijk. Maar zo gaat het pesten door.*
- **B.** Hij doet alsof hij niets heeft gezien.
  → *Dan voelt de collega zich alleen.*
- **C.** Hij vraagt de collega of het goed met hem gaat.
  → *Goed. Dat helpt meer dan je denkt.*

**Goed antwoord: C.**
**Waarom:** Pesten maakt mensen ziek. Vraag of het goed gaat. Bied aan om getuige te zijn. Samen sta
je sterker.

**Zo zeg je het:** "Stop. Ik wil dit niet."

**Onthoud:** Het gaat om hoe het voor jou voelt, niet om de grap.

**Wie kan je helpen:** de vertrouwenspersoon, als je bedrijf die heeft · je leidinggevende of HR · de
Nederlandse Arbeidsinspectie · bij aanranding of verkrachting: de politie of het Centrum Seksueel
Geweld (0800-0188 ⚖️).

---

### Les 9.3 · Uitbuiting en oplichting

**Leerdoel:** je herkent de signalen van uitbuiting en van een geldezel-trucje, en je weet waar je hulp krijgt.

**Scène** · *Beeld: Piotr in een volle kamer met stapelbedden. Een man houdt een paspoort vast.*

> Piotr werkt via een bureau in een kas. Het bureau regelt ook zijn kamer. De baas houdt zijn paspoort,
> "voor de veiligheid". Piotr werkt 70 uur per week. Zijn loon is veel lager dan beloofd.

**Vraag 1 · Waar of niet waar?** "Een werkgever mag je paspoort voor je bewaren."

**Antwoord: niet waar.**
**Waarom:** Je ID houd je altijd zelf. Een werkgever mag alleen een kopie maken. Je paspoort afpakken
is een duidelijk teken van uitbuiting.

**Vraag 2 · Wat doe je?** Piotr is bang zijn werk en zijn kamer te verliezen.

- **A.** Hij zoekt hulp, ook al is hij bang.
  → *Goed. Er zijn mensen die hem kunnen helpen.*
- **B.** Hij wacht af. Het wordt vast beter als hij hard werkt.
  → *Begrijpelijk. Maar dit gaat meestal niet vanzelf over.*
- **C.** Hij vraagt de baas beleefd om iets meer loon.
  → *Mag. Maar het paspoort en de uren blijven een probleem.*

**Goed antwoord: A.**
**Waarom:** Uitbuiting is niet normaal en niet toegestaan. Iedereen die in Nederland werkt, kan hulp
krijgen. Je kunt het melden bij de Arbeidsinspectie, ook zonder je naam. Ben je in gevaar? Bel 112.

**Vraag 3 · Wat doe je?** Jayden krijgt een appje: "Mogen we je bankpas een week lenen? Je krijgt 500 euro."

- **A.** Hij doet het één keer. Het is snel verdiend.
  → *Niet doen. Dit is een bekend trucje van criminelen.*
- **B.** Hij zegt nee, en hij blokkeert het nummer.
  → *Goed. Zo voorkomt hij grote problemen.*
- **C.** Hij geeft alleen zijn rekeningnummer, niet zijn pas.
  → *Ook dat kunnen criminelen misbruiken.*

**Goed antwoord: B.**
**Waarom:** Dit heet een geldezel zijn. Criminelen gebruiken jouw rekening voor hun geld. Dat is
strafbaar, ook voor jou. Je kunt er grote schulden aan overhouden. Geef je pas en codes nooit aan een
ander.

**Zo zeg je het:** "Ik wil mijn paspoort terug. Het is van mij."

**Onthoud:** Je paspoort en je bankpas geef je nooit af.

**Wie kan je helpen:** de Nederlandse Arbeidsinspectie (melden kan zonder je naam) · Meld Misdaad
Anoniem: 0800-7000 ⚖️ · de politie · bij gevaar: 112 · FairWork · een vakbond · het Juridisch Loket.

---

### Les 9.4 · Ontslag en het einde van je baan

**Leerdoel:** je tekent niets over ontslag zonder advies, en je kent je basisrechten bij ontslag.

**Scène** · *Beeld: Sanne aan een tafel tegenover haar baas. Voor haar ligt een papier met een pen.*

> Sanne werkt 2 jaar bij een webshop. Haar baas roept haar binnen. Hij zegt: "We moeten bezuinigen.
> Teken dit maar, dan regelen we het netjes." Het papier heet een vaststellingsovereenkomst.

**Vraag 1 · Wat doe je?** De baas legt een pen neer.

- **A.** Ze tekent meteen. Dan krijgt ze vast een goede referentie.
  → *Begrijpelijk. Maar ze weet nog niet wat ze opgeeft.*
- **B.** Ze vraagt tijd, en ze laat het papier eerst nakijken.
  → *Goed. Daar heeft ze recht op.*
- **C.** Ze tekent, en ze schrijft erbij dat ze twijfelt.
  → *Dan heeft ze toch getekend. Twijfel erbij schrijven helpt niet.*

**Goed antwoord: B.**
**Waarom:** Een vaststellingsovereenkomst is een afspraak om je baan samen te stoppen. Als je tekent,
kun je rechten verliezen. Bijvoorbeeld je WW. Vraag eerst advies. Om tijd vragen is normaal.

**Vraag 2 · Waar of niet waar?** "Heb je toch getekend? Dan kun je het nooit meer terugdraaien."

**Antwoord: niet waar.**
**Waarom:** Je kunt meestal binnen 14 dagen ⚖️ na het tekenen nog stoppen. Doe dat op papier of per
mail. Staat die termijn niet in het papier? Dan heb je 3 weken ⚖️.

**Vraag 3 · Waar of niet waar?** "Je baas mag je zomaar ontslaan, als hij dat wil."

**Antwoord: niet waar.**
**Waarom:** Je baas heeft meestal toestemming nodig van UWV of de rechter ⚖️. Of jouw instemming. Bij
ontslag krijg je vaak geld mee: de transitievergoeding ⚖️. In de proeftijd en bij een tijdelijk
contract gelden andere regels. Op staande voet ontslagen? Vraag meteen advies.

**Zo zeg je het:** "Ik teken nu niet. Ik wil het eerst laten nakijken."

**Onthoud:** Teken nooit iets over ontslag zonder advies.

**Wie kan je helpen:** het Juridisch Loket · een vakbond (word lid vóór je een probleem hebt: soms is
er een wachttijd ⚖️) · een rechtsbijstandverzekering, als je die hebt · UWV (WW, zie les 10.1).

---

## Unit 10 · Uitkering, werk en geld

*In deze unit: WW aanvragen, van uitkering naar werk, toeslagen, belasting terug, je post, en hulp
bij schulden.*

### Les 10.1 · Werk kwijt: WW

**Leerdoel:** je vraagt op tijd WW aan, en je weet wanneer je er recht op hebt.

**Scène** · *Beeld: Kevin loopt met een doos spullen naar de uitgang van een fabriek.*

> Kevin werkte 1 jaar bij een fabriek. Zijn tijdelijke contract stopt. Hij krijgt geen nieuw contract.
> Hij weet niet wat hij nu moet doen. WW is een uitkering van UWV als je je werk kwijtraakt.

**Vraag 1 · Wat doe je?** Kevins laatste werkdag is vrijdag.

- **A.** Hij vraagt meteen WW aan bij UWV.
  → *Goed. Dan krijgt hij op tijd geld.*
- **B.** Hij wacht een maand. Misschien vindt hij snel werk.
  → *Dan is hij te laat, en krijgt hij misschien minder.*
- **C.** Hij gaat eerst naar de gemeente voor bijstand.
  → *Bij werk kwijt is UWV meestal de eerste stap.*

**Goed antwoord: A.**
**Waarom:** Vraag WW aan zo snel als je kunt. Uiterlijk 1 week ⚖️ na je eerste dag zonder werk. Ben je
later? Dan krijg je misschien minder, of niets. Je doet het via Mijn UWV, met je DigiD.

**Vraag 2 · Waar of niet waar?** "Je krijgt altijd WW als je werk stopt."

**Antwoord: niet waar.**
**Waarom:** Je moet meestal minstens 26 van de laatste 36 weken ⚖️ gewerkt hebben. Neem je zelf
ontslag? Dan krijg je meestal geen WW. Vraag eerst advies voordat je zelf stopt.

**Vraag 3 · Wat doe je?** Kevin krijgt WW. Dan vindt hij een baantje van 10 uur per week.

- **A.** Hij zegt niets. Het is maar een klein baantje.
  → *Niet doen. Dan moet hij later veel terugbetalen.*
- **B.** Hij stopt zelf meteen met zijn hele WW.
  → *Dat hoeft niet. Hij kan vaak een deel houden.*
- **C.** Hij geeft zijn uren en zijn loon door aan UWV.
  → *Goed. Dan klopt zijn WW, en is hij veilig.*

**Goed antwoord: C.**
**Waarom:** Werk je naast je WW? Geef het altijd door aan UWV. UWV haalt dan een deel van je loon van
je WW af ⚖️. Niet doorgeven is fraude. Dan moet je terugbetalen, vaak met een boete.

**Zo zeg je het:** "Mijn contract stopt op 31 maart. Hoe vraag ik WW aan?"

**Onthoud:** Werk kwijt? Vraag binnen 1 week ⚖️ WW aan.

**Wie kan je helpen:** UWV (uwv.nl en werk.nl) · een vakbond · het Juridisch Loket.

*Redactie: de kabinetsplannen om de WW korter te maken gaan volgens berichten pas in 2029 in ⚖️. Daarom
noemt deze les geen duur.*

---

### Les 10.2 · Van uitkering naar werk

**Leerdoel:** je geeft nieuw werk meteen door, en je laat uitrekenen wat het betekent voor je geld.

**Scène** · *Beeld: Fatima aan tafel. Voor haar een brief van de gemeente en een nieuw contract.*

> Fatima heeft een bijstandsuitkering. Bijstand is geld van de gemeente als je te weinig inkomen hebt.
> Ze krijgt een baan van 20 uur per week. Ze is blij. Maar ze is ook bang: "Houd ik wel genoeg over?"

**Vraag 1 · Wat doe je?** Fatima begint over 2 weken.

- **A.** Ze vertelt het pas als ze een maand gewerkt heeft.
  → *Te laat. Dan krijgt ze te veel, en moet ze terugbetalen.*
- **B.** Ze zegt de baan af. Ze is bang om geld te verliezen.
  → *Begrijpelijk. Maar laat het eerst uitrekenen.*
- **C.** Ze geeft de nieuwe baan meteen door aan de gemeente.
  → *Goed. Dan klopt haar uitkering meteen.*

**Goed antwoord: C.**
**Waarom:** Geef werk en loon altijd meteen door aan de gemeente. Dat moet. De gemeente rekent uit
hoeveel bijstand je nog krijgt. Soms mag je een deel van je loon houden ⚖️. Niet doorgeven geeft later
schulden.

**Vraag 2 · Waar of niet waar?** "Ga je werken? Dan veranderen je toeslagen misschien ook."

**Antwoord: waar.**
**Waarom:** Toeslagen zijn geld van de overheid. Bijvoorbeeld voor je zorgverzekering, je huur of de
kinderopvang. Hoeveel je krijgt, hangt af van je inkomen. Verdien je meer? Geef het door via Mijn
toeslagen. Anders moet je later terugbetalen.

**Vraag 3 · Wat doe je?** Fatima wil weten wat ze straks overhoudt.

- **A.** Ze vraagt de gemeente om het samen uit te rekenen.
  → *Goed. Dan weet ze waar ze aan toe is.*
- **B.** Ze vraagt het aan een buurman die ook werkt.
  → *Aardig. Maar zijn situatie is anders dan die van haar.*
- **C.** Ze rekent het zelf uit met haar oude bijstand.
  → *Dan mist ze misschien toeslagen of kosten.*

**Goed antwoord: A.**
**Waarom:** Laat de gemeente of een geldcoach het samen met je uitrekenen. Denk ook aan reiskosten en
kinderopvang. Dan kies je met de juiste cijfers.

**Zo zeg je het:** "Ik heb werk gevonden. Wat betekent dat voor mijn uitkering?"

**Onthoud:** Nieuw werk? Geef het meteen door: aan de gemeente of UWV, en bij toeslagen.

**Wie kan je helpen:** de gemeente (sociale dienst of Werkplein) · UWV · Dienst Toeslagen
(Belastingdienst) · Geldfit: 0800-8115 ⚖️ · het Juridisch Loket.

*Redactie: de regels voor bijverdienen in de bijstand veranderen naar verwachting per 1 januari 2027
(Participatiewet in balans) ⚖️. Daarom noemt de les geen percentage.*

---

### Les 10.3 · Belasting terug en je post

**Leerdoel:** je opent brieven van de overheid, en je weet dat je vaak belasting terug kunt vragen.

**Scène** · *Beeld: Jayden met een blauwe envelop in zijn hand. Een la staat open.*

> Jayden werkte vorig jaar 4 maanden in de zomer. Daarna ging hij weer naar school. In maart krijgt hij
> een blauwe brief van de Belastingdienst. Hij legt hem ongeopend in een la.

**Vraag 1 · Wat doe je?** Wat doet Jayden met de brief?

- **A.** Hij laat hem liggen. Zo'n brief is meestal niks.
  → *Soms wel. Er kan een datum in staan.*
- **B.** Hij vraagt zijn vrienden of zij ook zo'n brief hebben.
  → *Kan. Maar de brief gaat over zijn eigen geld.*
- **C.** Hij opent de brief, en hij vraagt hulp bij het lezen.
  → *Goed. Misschien krijgt hij geld terug.*

**Goed antwoord: C.**
**Waarom:** Een brief van de Belastingdienst, UWV of de gemeente laat je niet liggen. Vaak staat er
een datum in. Vraag iemand die je vertrouwt om te helpen. Ook de bibliotheek helpt gratis.

**Vraag 2 · Waar of niet waar?** "Werk je maar een paar maanden? Dan krijg je vaak belasting terug."

**Antwoord: waar.**
**Waarom:** Werk je niet het hele jaar? Dan betaal je vaak te veel belasting. Dat kun je terugvragen
met je aangifte. Dat kan tot 5 jaar ⚖️ terug.

**Vraag 3 · Waar of niet waar?** "De aangifte over vorig jaar doe je meestal vóór 1 mei."

**Antwoord: waar.**
**Waarom:** Een aangifte is een formulier over je inkomen van vorig jaar. Krijg je een brief dat je
aangifte moet doen? Doe het dan vóór 1 mei ⚖️. Lukt dat niet? Vraag op tijd om uitstel. Je doet
aangifte online, met je DigiD.

**Zo zeg je het:** "Ik heb een brief van de Belastingdienst. Wil je mij helpen met lezen?"

**Onthoud:** Een brief van de Belastingdienst, UWV of de gemeente: altijd openmaken.

**Wie kan je helpen:** de BelastingTelefoon · het Informatiepunt Digitale Overheid in de bibliotheek ·
de sociaal raadslieden of de formulierenhulp van je gemeente.

---

### Les 10.4 · Schulden: vroeg hulp vragen

**Leerdoel:** je vraagt vroeg hulp bij schulden, en je weet dat er gratis hulp is.

**Scène** · *Beeld: Esra aan tafel met een stapel ongeopende enveloppen. Op één staat in rood: "Aanmaning".*

> Esra heeft een schuld bij haar telefoonbedrijf. Daarna komt er nog een rekening bij. En nog een. Ze
> opent de brieven niet meer. Ze schaamt zich.

**Vraag 1 · Wat doe je?** Esra weet niet meer hoe ze moet betalen.

- **A.** Ze wacht tot ze meer verdient. Dan betaalt ze alles.
  → *Begrijpelijk. Maar schulden worden snel groter door extra kosten.*
- **B.** Ze vraagt nu hulp, bij de gemeente of bij Geldfit.
  → *Goed. Hoe eerder, hoe makkelijker.*
- **C.** Ze sluit snel een lening af om alles te betalen.
  → *Dan heeft ze één schuld meer, vaak met hoge rente.*

**Goed antwoord: B.**
**Waarom:** Hoe eerder je hulp vraagt, hoe kleiner het probleem. Veel mensen hebben geldzorgen. Je
bent niet de enige. Hulp van de gemeente bij schulden is gratis.

**Vraag 2 · Waar of niet waar?** "Bij beslag op je loon houd je helemaal niets over."

**Antwoord: niet waar.**
**Waarom:** Bij beslag gaat een deel van je loon naar de schuld. Maar een deel blijft
altijd voor jou. Dat heet de beslagvrije voet ⚖️. Check of dat bedrag klopt.

**Vraag 3 · Wat doe je?** Esra heeft nieuw werk. Ze wil haar schulden aanpakken.

- **A.** Ze maakt een lijst: wat moet ze aan wie betalen?
  → *Goed. Met een overzicht kan iemand haar helpen.*
- **B.** Ze betaalt eerst wie het vaakst belt of mailt.
  → *Begrijpelijk. Maar dat is niet altijd de belangrijkste.*
- **C.** Ze betaalt elke schuld een klein beetje tegelijk.
  → *Goed bedoeld. Maar sommige rekeningen gaan voor.*

**Goed antwoord: A.**
**Waarom:** Begin met een overzicht: wat moet je aan wie? Betaal eerst je huur, energie en
zorgverzekering. Een nieuwe lening maakt het vaak erger.

**Zo zeg je het:** "Ik heb schulden. Ik wil graag hulp."

**Onthoud:** Geldzorgen? Vraag op tijd hulp. Hulp van de gemeente is gratis.

**Wie kan je helpen:** de gemeente (schuldhulp) · Geldfit: 0800-8115 ⚖️ (gratis en anoniem) ·
SchuldHulpMaatje · het Juridisch Loket.

---

## 4. De zakkaart: de 10 belangrijkste "onthoud"-regels

Deze tien komen vooraan op de zakkaart. De andere 26 regels komen eronder, per unit.

1. **Echt werk kost jou nooit geld.** (les 1.1)
2. **Eerst lezen, dan tekenen.** (les 1.4)
3. **Wat op papier staat, telt. Bewaar je contract goed.** (les 3.1)
4. **Schrijf je uren op. Check elke loonstrook.** (les 4.2)
5. **Te laat? Bel of app vóór je dienst begint.** (les 2.1)
6. **Ziek? Bel zelf, vóór je dienst begint.** (les 6.1)
7. **Onveilig? Zeg het meteen. Bij groot gevaar mag je stoppen.** (les 7.2)
8. **Afspraak is afspraak. Lukt het niet? Zeg het op tijd.** (les 8.3)
9. **Je paspoort en je bankpas geef je nooit af.** (les 9.3)
10. **Teken nooit iets over ontslag zonder advies.** (les 9.4)

*Reserve, als er ruimte is:* "Werk kwijt? Vraag binnen 1 week ⚖️ WW aan." (les 10.1) en "Geldzorgen?
Vraag op tijd hulp." (les 10.4).

---

## 5. Sectorverschillen per unit

Korte notities voor de redactie. Ze kunnen later een extra vraag of een zin in "waarom" worden, als de
leerling een sector kiest in de app (zie `src/content/sectors.ts`). Sectoren: **bouw**, **zorg**,
**horeca**, **schoonmaak**, **logistiek**, **productie**. Elke cao-regel hieronder is ⚖️.

**Unit 1 · Werk zoeken.**
Bouw en logistiek: veel werk via uitzendbureaus; vaak vragen ze een VCA-certificaat (veiligheid) of
een heftruckcertificaat. Zorg: je hebt vaak een VOG nodig (Verklaring Omtrent het Gedrag) ⚖️. Horeca:
"proefdraaien" is heel gewoon; vraag of je betaald krijgt. Schoonmaak: veel parttime werk vroeg of
laat op de dag. Logistiek en productie: de meeste nepvacatures beloven "veel geld in het magazijn".

**Unit 2 · Eerste dag.**
Bouw: begint vaak heel vroeg (6.30–7.00 uur) en de eerste dag is er vaak een veiligheidsinstructie.
Zorg en productie van eten: geen sieraden, korte nagels, haar vast; het eerste werk is vaak
"meelopen". Horeca: snel tempo, je krijgt de uitleg vaak tijdens het werk. Schoonmaak: je werkt vaak
bij een klant, met een sleutel of pas van die klant. Logistiek: je krijgt een scanner en vaak een
norm (hoeveel per uur); vraag hoe die werkt.

**Unit 3 · Contract en soorten werk.**
Bouw: veel zzp'ers; let op schijnzelfstandigheid. Zorg: veel kleine contracten en min-max-contracten.
Horeca: veel oproepwerk en nulurencontracten; die regels veranderen vanaf 2028 ⚖️. Schoonmaak: wisselt
de klant van schoonmaakbedrijf? Dan regelt de cao vaak dat je mee kunt naar het nieuwe bedrijf ⚖️.
Logistiek en productie: veel uitzendwerk; de nieuwe regels voor uitzendbureaus (Wtta) gelden daar het
meest ⚖️.

**Unit 4 · Loon.**
Zorg: ORT (toeslag voor avond, nacht en weekend). Productie en logistiek: ploegentoeslag. Horeca:
fooi; vraag hoe de fooi wordt verdeeld; fooi is geen loon. Bouw: de cao regelt vaak reistijd en
reiskosten ⚖️. Schoonmaak: toeslag voor vroege of late uren in de cao ⚖️. Overal: een
reiskostenvergoeding is geen recht uit de wet, maar staat vaak in de cao.

**Unit 5 · Werktijden.**
Zorg: nachtdiensten en bereikbaarheidsdiensten, met eigen regels ⚖️. Horeca: late diensten; bij
jongeren onder 18 is werken na 23.00 uur verboden ⚖️. Productie en logistiek: ploegendiensten en
nachtwerk. Bouw: bij vorst of storm kan het werk stilliggen; daar is een aparte WW-regeling voor
(onwerkbaar weer) ⚖️; soms is er een vaste zomervakantie (bouwvak) ⚖️. Schoonmaak: gebroken diensten
(vroeg in de ochtend en laat in de avond).

**Unit 6 · Ziek zijn.**
Zorg: vaak moet je je eerder ziek melden, omdat er vervanging nodig is; check het verzuimprotocol.
Horeca en productie van eten: braken of diarree? Meld het vóór je begint, ook als je je goed genoeg
voelt (hygiëne). Uitzendwerk (vooral logistiek en productie): soms betaalt UWV via de Ziektewet in
plaats van het bureau ⚖️. Bouw en logistiek: veel rug- en tilklachten; ga op tijd naar de bedrijfsarts.

**Unit 7 · Veiligheid.**
Bouw: VCA, LMRA (eerst even checken wat er mis kan gaan), helm, valbeveiliging, nooit onder een
hangende last. Zorg: tillen met een tillift, agressie van cliënten melden, prikaccidenten.
Horeca: brandwonden, messen, gladde vloer. Schoonmaak: middelen nooit mengen; lees het etiket;
werk je alleen, spreek dan af hoe je hulp vraagt. Logistiek: heftrucks, looppaden, tillen, hitte in
de zomer. Productie: noodstop, nooit in een draaiende machine grijpen, lock-out bij onderhoud,
gehoorbescherming.

**Unit 8 · Ongeschreven regels.**
Bouw: vaak heel directe taal en ruwe grappen; grappen over afkomst of geloof horen er niet bij. Zorg:
"u" tegen cliënten, een goede overdracht aan de volgende dienst. Horeca: kort en snel praten in de
drukte, daarna weer gewoon vriendelijk. Schoonmaak: weinig contact met het team, wel met de klant;
groet de mensen op de locatie. Logistiek en productie: teams met veel talen; spreek af in welke taal
je veiligheidsdingen zegt.

**Unit 9 · Problemen en rechten.**
Horeca en zorg: ongewenst gedrag door gasten of cliënten telt ook; je werkgever moet je ook daartegen
beschermen ⚖️. Logistiek, productie en land- en tuinbouw: meer kans op uitbuiting via bureaus en
huisvesting. Bouw: lange ketens van onderaannemers; soms is de hoofdaannemer aansprakelijk voor je
loon ⚖️. Schoonmaak: te veel werk in te weinig uren (onderbetaling); schrijf je uren op.

**Unit 10 · Uitkering en geld.**
Seizoenswerk (horeca, land- en tuinbouw): let op de wekeneis voor de WW ⚖️. Bouw: WW bij onwerkbaar
weer ⚖️. Zorg en schoonmaak: veel parttime werk, dus vaak toeslagen of een aanvulling van de gemeente;
geef elke verandering in uren door. Uitzendwerk: werk stopt soms opeens; vraag dan meteen WW aan.
