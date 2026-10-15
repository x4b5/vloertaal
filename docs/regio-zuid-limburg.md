# Leven en werken in de regio: Zuid-Limburg

*Concept, 15 oktober 2026. Inhoud voor een regiomodule in Vloertaal, voor pilotgebruikers die in
Zuid-Limburg wonen of werken. Nog niet gebouwd in `src/`. Elke plaatselijke naam, elk
telefoonnummer, elk adres, elke website en elk feit dat kan veranderen heeft een ⚖️: dat moet
iemand nakijken voor livegang. De bronnen staan in [hoofdstuk 6](#6-bronnen), de open punten in
[hoofdstuk 7](#7-te-controleren).*

*Over het nakijken: op 15 oktober 2026 kon ik de officiële sites (gemeentemaastricht.nl,
heerlen.nl, thuisinlimburg.nl, grenzinfo.eu en andere) niet zelf openen. Het netwerk liet dat niet
toe. Alles hieronder komt uit zoekresultaten, die wel stukken tekst van die sites lieten zien. "Gecheckt
15-10-2026" betekent hier dus: gevonden in een zoekresultaat van de officiële site of van een
andere bron. Het betekent niet: de pagina zelf gelezen. Kijk daarom elke ⚖️ na op de site zelf.*

---

## 1. Ontwerpnotitie

### Wat het is

Een **regiomodule**: lessen over het dagelijks leven en werk in één streek. Deze eerste module gaat
over **Zuid-Limburg**: Maastricht en het Heuvelland, Heerlen en Parkstad, Sittard-Geleen en de
Westelijke Mijnstreek, Kerkrade, en de grens met België en Duitsland.

De module leert wat de landelijke lessen niet kunnen leren, omdat het per plek anders is:

- waar je je inschrijft bij de gemeente, en hoe je een afspraak maakt;
- hoe je in de regio een sociale huurwoning zoekt (Thuis in Limburg ⚖️);
- reizen met bus en trein, ook over de grens;
- werken of wonen over de grens: waar je advies krijgt (GrensInfoPunt ⚖️);
- de huisartsenpost, het ziekenhuis, de bibliotheek, hulp bij geld;
- carnaval (vastelaovend), dialect, en collega's die Duits of Frans praten;
- een **Sociale kaart**: een lijst met waar je heen gaat voor wat (hoofdstuk 5).

### Voor wie, en wie het ziet

Alleen voor leerlingen die bij **Instellingen → "Waar woon je?"** kiezen voor **Zuid-Limburg**.
Wie niets kiest, of "Andere plek / zeg ik liever niet" kiest, ziet de module niet. Voor die
leerlingen verandert er niets.

De vraag staat **alleen in Instellingen**, niet in de eerste stappen van de app (onboarding). Zo
hoeft niemand te zeggen waar hij woont. De pilot kan de leerlingen er wel op wijzen: "Woon of
werk je in Zuid-Limburg? Kies dat bij Instellingen."

### De rij in Instellingen

| | |
|---|---|
| **Lijst** | "Taal en ik" (`me`), na "Sector". In beide tracks. |
| **Rij** | "Waar woon je?" Daaronder klein de huidige keuze: "Zuid-Limburg" of "Niet gekozen". |
| **Pagina** | Nieuwe `SettingsPage` `'region'`, met `SETTINGS_PARENT.region = 'me'`. Twee knoppen (de regel is: hooguit 3): **Zuid-Limburg** · **Andere plek / zeg ik liever niet**. |
| **Uitleg op de pagina** | "Woon of werk je in Zuid-Limburg? Dan krijg je extra lessen over je regio. Dit blijft op je telefoon. We sturen het nergens heen." |
| **Opslag** | In de bestaande voortgang op de telefoon (`localStorage`, sleutel `vloertaal:v1`, `src/lib/progress.ts`), als `region?: RegionChoice`. Geen server, geen telling, geen analytics. Een back-up (`backup`) mag het meenemen, want die blijft ook bij de leerling. |
| **Taal van de knoppen** | In de Taal-track vertaald (2 nieuwe UI-sleutels × 9 talen); "Zuid-Limburg" blijft een naam en wordt niet vertaald. In de Werkregels-track alleen Nederlands. |

Kies je later "Andere plek", dan verdwijnt de module uit je lespad. Je voortgang blijft bewaard.
Kies je opnieuw Zuid-Limburg, dan staat alles er weer.

### Datamodel: zo kunnen er later regio's bij

Het model lijkt op de sectoren (`src/content/sectors.ts`). Er is één verschil: een sector zet
alleen de volgorde, een regio zet units **aan of uit**.

```ts
// src/content/regio/index.ts
export type RegionId = 'zl';                      // later: 'tw' (Twente), 'rdam', ...
export type RegionChoice = RegionId | 'none';     // 'none' = "Andere plek / zeg ik liever niet"

export interface Region {
  id: RegionId;
  /** Naam op de knop en in het lespad. */
  nl: string;                                     // 'Zuid-Limburg'
  /** Plaatsen in de uitleg, zodat mensen zichzelf herkennen. */
  places: string[];                               // ['Maastricht', 'Heerlen', 'Sittard-Geleen', 'Kerkrade', 'Heuvelland']
  /** De Taal-unit van de regio (Unit uit src/content/types.ts). */
  taalUnit?: Unit;
  /** De Werkregels-unit van de regio (RuleUnit uit src/content/regels/types.ts). */
  regelsUnit?: RuleUnit;
  /** De Sociale kaart (hoofdstuk 5). */
  socialMap: SocialMapEntry[];
}

export const REGIONS: Region[] = [zuidLimburg];  // uit src/content/regio/zuid-limburg.ts
export const isRegionId = (x: unknown): x is RegionId => REGIONS.some((r) => r.id === x);
```

**Ids.** Alles van een regio begint met `rg.<regio>.`. Voor Zuid-Limburg is dat `rg.zl.`:

| Wat | Id |
|---|---|
| Taal-unit | `rg.zl.u` |
| Taal-lessen | `rg.zl.l.1`, `rg.zl.l.2` |
| Woorden, zinnen, gesprekje | `rg.zl.w.<woord>`, `rg.zl.s.1.1`, `rg.zl.c.1.q` / `rg.zl.c.1.a` |
| Tip "Zo werkt het hier" | `rg.zl.c.1` (met `.p`, `.s`, `.o1`–`.o3`, `.w`, `.b`) |
| Werkregels-unit | `rg.zl.r` |
| Werkregels-lessen | `rg.zl.r.l.1` … `rg.zl.r.l.5` |
| Stappen | `rg.zl.r.l.1.q1`, `rg.zl.r.l.1.scene`, enzovoort |
| Sociale kaart | `rg.zl.k.<naam>` |

**Let op, `trackOfId`.** `src/lib/track.ts` zegt nu: een id hoort bij Werkregels als het begint met
`r.`. `rg.zl.r.l.1` begint met `rg.` en zou dus als Taal tellen. Er is één kleine aanpassing nodig:

```ts
export const trackOfId = (id: string): Track =>
  id.startsWith('r.') || /^rg\.[a-z]+\.r\./.test(id) ? 'regels' : 'taal';
```

**Woorden die al bestaan.** In `work.ts` staan al `w.gemeente`, `w.inschrijven`, `w.bus`,
`w.trein`, `w.huisartsenpost` en `w.taalhuis`. En `w.grens` betekent daar "de grens van wat je
wilt" (*the limit*), niet de landsgrens. Daarom krijgt de regio-unit eigen woorden met eigen ids
(`rg.zl.w.*`). De woorden "de gemeente" en "inschrijven" komen wel terug in de zinnen, niet als
nieuwe woordkaart. Zie hoofdstuk 4.

### Hoe het in de twee tracks past

| | Taal (9 hulptalen) | Werkregels (Nederlands 1F) |
|---|---|---|
| **Wat** | 1 unit "Your region: South Limburg" / "Jouw regio: Zuid-Limburg", 2 lessen | 1 unit "Leven in Zuid-Limburg", 5 lessen |
| **Waar in het lespad** | Na "Getting to work" (`u.travel`), want daar staan bus, trein en inchecken al | Na unit 10, in een eigen blok "Jouw regio" |
| **Vorm** | Woorden, zinnen, gesprekje en tip, zoals in `work.ts` | Scène, vragen, zo zeg je het, onthoud, wie kan je helpen, zoals in `werkregels-curriculum.md` |
| **Dialect** | **Niet.** De stem leest geen dialect voor. Alleen de zin "Ik versta geen dialect." | Wel: een woordkaart met 8 groeten en woorden, alleen om te herkennen |
| **Sociale kaart** | Ja, als lijst bij Hulp. De namen blijven Nederlands, de regel "wanneer" wordt vertaald. | Ja, als lijst bij Hulp, onder "Wie bel je?" |
| **Certificaat** | Telt niet mee | Telt niet mee |

Waarom telt de regio niet mee voor het certificaat? Dan is het certificaat voor iedereen gelijk,
waar je ook woont.

**Hulp-tab.** De Werkregels-track heeft al "Wie bel je?" (`src/content/regels/help.ts`, type
`HelpRow`). Met regio Zuid-Limburg komt daaronder een knop **"Sociale kaart Zuid-Limburg"**. Die
opent een lijst in dezelfde vorm: één rij per plek, één tik naar de site of het nummer. Zie
hoofdstuk 5.

**Nieuwe plekken voor "Wie vraag je het?".** De vragen "Waar ga je heen?" in les 3 en 5 hebben
plekken nodig die nog niet in `AskWho` staan. Voorstel: `'grensinfopunt'` (label "Het
GrensInfoPunt", emoji 🌍) en `'bibliotheek'` (label "De bibliotheek of het Taalhuis", emoji 📚).
Regionale plekken krijgen geen eigen `AskWho`. Die staan in de Sociale kaart.

### Schrijfregels

Dezelfde als in [`werkregels-curriculum.md`](werkregels-curriculum.md): 1F, korte zinnen, "je",
namen wisselen, één goed antwoord per vraag, ⚖️ niet tonen en niet voorlezen, geen bedragen die
veranderen. Daarbij komen voor de regio twee regels:

- **Geen adres en geen regionaal telefoonnummer in een les.** In een les zeggen we: "Kijk op de
  site van je gemeente." Nummers en sites staan alleen in de Sociale kaart. Daar zijn ze makkelijk
  bij te werken.
- **Namen van organisaties veranderen vaak** (een nieuwe aanbesteding, een fusie). Een les noemt
  daarom liever het soort plek ("het buurtteam", "de bibliotheek") dan de naam. De naam staat in
  de Sociale kaart.

Namen in deze module: Oksana, Joep, Hatice, Bogdan, Nadia, Yonas, Lotte, Mehmet, Dewi, Kevin.
Leidinggevenden: Linda, Ruud, Henk.

---

## 2. De module in één oogopslag

| Track | Unit | Lessen |
|---|---|---|
| Werkregels | **Leven in Zuid-Limburg** (`rg.zl.r`) | ZL.1 Je adres en de gemeente · ZL.2 Wonen en reizen in de regio · ZL.3 Werken over de grens · ZL.4 Carnaval, dialect en collega's · ZL.5 Hulp in de buurt: zorg, taal, geld |
| Taal | **Jouw regio: Zuid-Limburg** (`rg.zl.u`) | 1 The town hall and your home · 2 The border, carnival and dialect |
| Beide | **Sociale kaart Zuid-Limburg** | 14 soorten hulp, per gebied |

Telling van de goede antwoorden in de Werkregels-lessen: "wat doe je?" en "waar ga je heen?":
**A 4, B 3, C 3**. "Waar of niet waar": **3 waar, 2 niet waar**.

---

## 3. Werkregels: unit "Leven in Zuid-Limburg"

*In deze unit: je adres doorgeven, een huis zoeken, reizen, werken over de grens, carnaval en
dialect, en waar je hulp vindt. Voor iedereen die in Zuid-Limburg woont of werkt.*

### Les ZL.1 · Je adres en de gemeente

**Leerdoel:** je weet dat je je adres op tijd doorgeeft aan de gemeente, en hoe je een afspraak maakt.

**Scène** · *Beeld: Oksana (34) met een doos in haar handen voor een nieuw rijtjeshuis. Op de achtergrond een bus.*

> Oksana woonde in Den Haag. Nu heeft ze werk in een ziekenhuis in Heerlen. Ze huurt een kamer in
> Heerlen. Haar post komt nog op haar oude adres. Haar collega Lotte zegt: "Heb je je al
> ingeschreven bij de gemeente?"

**Vraag 1 · Wat doe je?** Oksana verhuist binnen Nederland. Hoe geeft ze haar nieuwe adres door?

- **A.** Ze belt haar oude gemeente in Den Haag.
  → *Dat hoeft niet. Je oude gemeente krijgt het vanzelf door.*
- **B.** Ze geeft het door aan haar nieuwe gemeente, Heerlen.
  → *Goed. Je geeft je verhuizing door aan de gemeente waar je nu woont.*
- **C.** Ze wacht tot ze een brief van de gemeente krijgt.
  → *Die brief komt niet vanzelf. Jij moet het zelf doorgeven.*

**Goed antwoord: B.**
**Waarom:** Je geeft je nieuwe adres door aan je **nieuwe** gemeente ⚖️. Binnen Nederland kan dat
vaak online, met DigiD ⚖️. Je oude gemeente krijgt het dan vanzelf ⚖️. Kom je uit het buitenland?
Dan ga je zelf naar de gemeente, met een afspraak ⚖️.

**Vraag 2 · Waar of niet waar?** "Je geeft een verhuizing door binnen 5 dagen nadat je verhuisd bent."

**Antwoord: waar.**
**Waarom:** Je geeft een verhuizing door vanaf 4 weken vóór je verhuist, tot 5 dagen erna ⚖️.
Doe het op tijd. Je adres is belangrijk voor je post, je loon, je zorgverzekering en toeslagen.

**Vraag 3 · Wat doe je?** Joep komt uit België en gaat in Maastricht wonen. Hij moet zich voor het
eerst inschrijven. Wat doet hij?

- **A.** Hij loopt op maandagochtend naar het gemeentehuis.
  → *Dan moet hij misschien terugkomen. Bij de gemeente werk je vaak op afspraak.*
- **B.** Hij laat zijn werkgever het regelen.
  → *Je werkgever mag helpen, maar jij moet zelf naar de gemeente.*
- **C.** Hij kijkt op de site van de gemeente en maakt een afspraak.
  → *Goed. Op de site staat ook wat je mee moet nemen.*

**Goed antwoord: C.**
**Waarom:** De gemeenten in Zuid-Limburg werken voor bijna alles **op afspraak** ⚖️. Je maakt een
afspraak online of via het nummer 14 met het netnummer van je gemeente ⚖️. Neem je
paspoort of id-kaart mee, en je huurcontract ⚖️. Woon je bij iemand in? Dan heb je een brief van
de hoofdbewoner nodig ⚖️.

*Redactie: Maastricht noemt de balie "GemeenteLoket" (in Mosae Forum) ⚖️. Heerlen werkt vanuit
het Stadskantoor ⚖️, Sittard-Geleen vanuit het Stadskantoor in Sittard en de Stadswinkel in Geleen
⚖️, Kerkrade vanuit het Burgerplein ⚖️. Deze namen staan niet in de les: ze veranderen vaker dan
de regel. Ze staan in de Sociale kaart. Een vraag "Stadswinkel" is alleen goed voor Geleen.*

**Zo zeg je het:** "Goedemorgen. Ik wil me inschrijven op mijn nieuwe adres. Kan ik een afspraak maken?"

**Onthoud:** Verhuisd? Geef je adres binnen 5 dagen door aan je nieuwe gemeente.

**Wie kan je helpen:** je gemeente: kijk op de site of bel 14 met het netnummer ⚖️ ·
rijksoverheid.nl ⚖️ · in de app: de Sociale kaart, bij "Gemeente".

---

### Les ZL.2 · Wonen en reizen in de regio

**Leerdoel:** je weet hoe je in Zuid-Limburg een sociale huurwoning zoekt, en hoe je met bus en trein naar je werk reist.

**Scène** · *Beeld: Mehmet (27) en Nadia (25) aan een keukentafel. Op de telefoon een site met huizen. Een busje van Arriva rijdt voorbij.*

> Mehmet en Nadia wonen bij Nadia's ouders in Sittard. Ze willen samen een huis huren. Een huis
> van een woningcorporatie is vaak goedkoper. Mehmet werkt vanaf maandag in Geleen, met vroege
> diensten. Hij heeft nog geen auto.

**Vraag 1 · Wat doe je?** Mehmet en Nadia willen een huurhuis van een woningcorporatie. Hoe beginnen ze?

- **A.** Ze schrijven zich in op de site van Thuis in Limburg.
  → *Goed. Daar staan de huizen van veel corporaties in Limburg.*
- **B.** Ze betalen iemand op Facebook die zegt dat hij een huis heeft.
  → *Pas op. Betaal nooit geld voor een huis dat je niet hebt gezien.*
- **C.** Ze wachten tot de gemeente hen een huis geeft.
  → *Dat gebeurt meestal niet. Je moet je zelf inschrijven.*

**Goed antwoord: A.**
**Waarom:** De meeste woningcorporaties in Zuid-Limburg bieden hun huizen aan op
**thuisinlimburg.nl** ⚖️. Inschrijven is gratis ⚖️. Je moet 18 jaar of ouder zijn en in
Nederland mogen wonen ⚖️. Verleng je inschrijving elk jaar ⚖️. Wachten duurt vaak lang. Begin dus
op tijd.

*Redactie: welke corporaties meedoen, verschilt per bron (14 of 17 ⚖️). Noem in de les geen
corporatie. De lijst staat in de Sociale kaart.*

**Vraag 2 · Waar of niet waar?** "In de bus en de trein van Arriva in Limburg kun je inchecken met je bankpas."

**Antwoord: waar.**
**Waarom:** Je kunt in- en uitchecken met je bankpas, je creditcard of je telefoon ⚖️. Dat heet
OVpay ⚖️. Check in en uit met **dezelfde** pas of telefoon ⚖️. Een OV-chipkaart kan ook ⚖️. Reis
je in Duitsland of België verder? Kijk dan eerst welk kaartje je nodig hebt ⚖️.

**Vraag 3 · Wat doe je?** Mehmet begint om 6 uur in Geleen. Zo vroeg rijdt er bijna geen bus. Wat doet hij?

- **A.** Hij komt elke dag een uur te laat. De bus is niet zijn schuld.
  → *Begrijpelijk, maar dat geeft snel problemen. Op tijd komen is belangrijk.*
- **B.** Hij zegt de baan af. Zonder auto lukt het niet.
  → *Jammer. Vaak is er een andere oplossing.*
- **C.** Hij vraagt zijn werkgever of collega's of ze samen rijden, of hij gaat fietsen.
  → *Goed. Bij grote bedrijven rijden collega's vaak samen.*

**Goed antwoord: C.**
**Waarom:** In Zuid-Limburg wonen en werken veel mensen in verschillende plaatsen. Bij vroege of
late diensten rijdt de bus soms niet. Vraag op je werk naar samen rijden of een busje van de baas.
Vraag ook of je reiskosten terugkrijgt. Dat staat in je contract of cao. Kijk op 9292.nl ⚖️ hoe
je reist. Let op: Zuid-Limburg is heuvelachtig. Een elektrische fiets helpt.

**Zo zeg je het:** "Ik begin om 6 uur, maar dan rijdt er geen bus. Rijdt er iemand van hier mee?"

**Onthoud:** Huis zoeken? Schrijf je op tijd in, en betaal nooit voor een huis dat je niet zag.

**Wie kan je helpen:** thuisinlimburg.nl ⚖️ · je woningcorporatie · voor bus en trein: arriva.nl
en ns.nl ⚖️, of 9292.nl ⚖️ · je werkgever of HR, voor reiskosten · in de app: de Sociale kaart,
bij "Wonen".

---

### Les ZL.3 · Werken over de grens

**Leerdoel:** je weet dat werken in België of Duitsland andere regels kan geven, en dat je vóór je tekent gratis advies vraagt.

**Scène** · *Beeld: Bogdan (41) bij een bushalte in Kerkrade. Aan de overkant een straatnaambord in het Duits. De grens is een gewone straat.*

> Bogdan woont in Kerkrade. Een bedrijf in Duitsland biedt hem werk aan, 15 minuten van zijn huis.
> Het loon is goed. Zijn buurman zegt: "Pas op met belasting en je zorgverzekering." Bogdan weet
> niet wat hij moet doen.

**Vraag 1 · Wat doe je?** Bogdan wil het werk wel. Wat doet hij eerst?

- **A.** Hij tekent snel. Hij regelt de rest later wel.
  → *Begrijpelijk, maar dan kun je voor verrassingen komen te staan.*
- **B.** Hij vraagt eerst gratis advies bij het GrensInfoPunt.
  → *Goed. Die kennen de regels van alle drie de landen.*
- **C.** Hij vraagt het aan zijn buurman. Die werkte vroeger ook in Duitsland.
  → *Je buurman bedoelt het goed. Maar elke situatie is anders.*

**Goed antwoord: B.**
**Waarom:** Werk je in het ene land en woon je in het andere? Dan heet je **grensarbeider**. Er
gelden dan andere regels voor belasting, je uitkering, je pensioen en je zorgverzekering ⚖️. Het
**GrensInfoPunt** geeft gratis advies ⚖️. Dat kan per telefoon, online of op afspraak ⚖️. Er is
een GrensInfoPunt in Maastricht ⚖️, en een in Aken en Herzogenrath, vlak bij Kerkrade ⚖️.

**Vraag 2 · Waar of niet waar?** "Woon je in Nederland en werk je in Duitsland? Dan betaal je altijd belasting in Nederland."

**Antwoord: niet waar.**
**Waarom:** Waar je belasting betaalt, staat in afspraken tussen de landen ⚖️. Vaak betaal je
belasting in het land waar je werkt ⚖️. Maar er zijn uitzonderingen, bijvoorbeeld als je ook
thuiswerkt ⚖️. Voor je zorgverzekering en je uitkering kijk je meestal ook naar het land waar je
werkt ⚖️. Werk je in twee landen? Dan kan het anders zijn ⚖️. Vraag het dus altijd na.

*Redactie: geen aantallen dagen thuiswerken noemen (die veranderen, en zijn anders voor België en
Duitsland ⚖️). De regel voor sociale zekerheid komt uit de EU-verordening 883/2004 ⚖️.*

**Vraag 3 · Waar ga je heen?** Nadia woont in Maastricht. Ze wil werk zoeken in België. Ze wil
ook weten hoe je een cv voor België schrijft. Waar gaat ze heen?

- **A.** Naar Grensarbeid of het GrensInfoPunt.
  → *Goed. Zij helpen met werk zoeken over de grens, en met je cv.*
- **B.** Naar de huisarts.
  → *De huisarts helpt met je gezondheid, niet met werk zoeken.*
- **C.** Naar de woningcorporatie.
  → *Die helpt met een huis, niet met werk.*

**Goed antwoord: A.**
**Waarom:** **Grensarbeid** helpt mensen die werk zoeken in België, Duitsland of Nederland ⚖️. Het
werkt samen met het GrensInfoPunt, UWV en de gemeenten ⚖️. Er zijn ook spreekuren in Maastricht
en Heerlen, met een afspraak ⚖️. Kijk in de Sociale kaart bij "Grens".

*Redactie: in de app is dit een stap `whoask` met de nieuwe plek `'grensinfopunt'`. Na het
antwoord komt een knop "Open de Sociale kaart".*

**Zo zeg je het:** "Ik woon in Nederland en ik krijg werk in Duitsland. Wat moet ik regelen?"

**Onthoud:** Werk over de grens? Vraag eerst gratis advies. Dan pas tekenen.

**Wie kan je helpen:** het GrensInfoPunt Maastricht ⚖️ · het GrenzInfoPunkt Aachen-Eurode ⚖️ ·
Grensarbeid ⚖️ · UWV · in de app: de Sociale kaart, bij "Grens".

---

### Les ZL.4 · Carnaval, dialect en collega's

**Leerdoel:** je vraagt op tijd vrij voor carnaval, en je durft collega's te vragen om Nederlands te praten.

**Scène** · *Beeld: Dewi (30) in een magazijn bij Sittard. Aan de muur een poster met kleurige mutsen en de tekst "Vastelaovend".*

> Dewi werkt sinds januari in een magazijn. Haar collega's praten veel over carnaval. In Limburg
> heet dat ook vastelaovend. Iedereen wil die week vrij. Haar collega Joep praat Limburgs. Dewi
> verstaat hem bijna niet.

**Vraag 1 · Wat doe je?** Dewi wil met carnaval graag vrij. Wat doet ze?

- **A.** Ze meldt zich die maandag ziek. Dat doen anderen ook.
  → *Niet doen. Ziek melden als je niet ziek bent, kan je baan kosten.*
- **B.** Ze vraagt het een week van tevoren. Dan is het nog vroeg genoeg.
  → *Dat is vaak te laat. Dan zijn de vrije dagen al weg.*
- **C.** Ze vraagt het nu al aan haar leidinggevende, en ze krijgt het antwoord op papier.
  → *Goed. Vroeg vragen is slim met carnaval.*

**Goed antwoord: C.**
**Waarom:** Carnaval valt elk jaar op een andere datum, in februari of maart ⚖️. Het is van zondag
tot en met dinsdag, en in Limburg begint het vaak al op zaterdag ⚖️. Sommige bedrijven gaan dicht ⚖️.
Andere zijn juist heel druk: horeca, winkels, vervoer en zorg. Veel collega's willen dan vrij.
Vraag het daarom vroeg. Kijk op de kalender wanneer het is.

*Redactie: zet geen datum in de les. Carnavalszondag is de zevende zondag voor Pasen ⚖️ (in 2027:
7 tot en met 9 februari ⚖️). De app kan de datum uitrekenen, maar dat is niet nodig.*

**Vraag 2 · Waar of niet waar?** "Met carnaval heb je altijd recht op vrije dagen."

**Antwoord: niet waar.**
**Waarom:** Carnaval is geen officiële feestdag ⚖️. Je hebt dus niet vanzelf recht op vrij ⚖️. Je
neemt vakantiedagen op, of je bedrijf is dicht. Gaat je bedrijf dicht? Dan kan je werkgever
vragen dat je daar vakantiedagen voor gebruikt. Dat moet wel kloppen met je contract of cao ⚖️.
Vier je geen carnaval? Dan hoef je niet mee te doen. Je kunt ook gewoon werken.

**Vraag 3 · Wat doe je?** Joep legt iets uit in het Limburgs. Dewi verstaat het niet. Wat doet ze?

- **A.** Ze vraagt vriendelijk: "Wil je het in het Nederlands zeggen?"
  → *Goed. De meeste collega's doen dat graag.*
- **B.** Ze knikt, en doet maar wat.
  → *Begrijpelijk, maar dan kun je fouten maken.*
- **C.** Ze zegt boos dat dialect onbeleefd is.
  → *Dat kan pijn doen. Voor veel mensen is dialect hun eigen taal.*

**Goed antwoord: A.**
**Waarom:** In Zuid-Limburg praten veel mensen dialect, ook op het werk. Het is normaal dat je het
niet verstaat, ook als je goed Nederlands spreekt. Vraag het vriendelijk. Dialect is voor veel
collega's hun moedertaal. Het is geen onbeleefdheid. Bij de grens werken ook veel mensen uit
Duitsland en België. Soms praten collega's Duits of Frans. Ook dan mag je vragen om Nederlands. En
bij veiligheid moet je de uitleg altijd goed begrijpen.

**Woordkaart · Dit kun je horen** *(alleen om te herkennen, je hoeft het niet te zeggen)*

| Je hoort | Dat betekent | Waar |
|---|---|---|
| **Goojemorge** | Goedemorgen | Maastricht ⚖️ |
| **Goojendaag** | Goedendag (groet) | Maastricht ⚖️ |
| **Wie is 't?** of **Wie is 't mèt diech?** | Hoe gaat het (met jou)? | Maastricht ⚖️ |
| **Enne?** · antwoord: **Auch enne?** | Hoe gaat het? · Goed, en met jou? | veel plaatsen in Limburg ⚖️ |
| **Bedaank** | Bedankt | Maastricht ⚖️ |
| **Vastelaovend** | Carnaval | heel Limburg ⚖️ |

*Redactie (besluit eigenaar, 15-10-2026): alle woorden op deze kaart worden nagekeken in het woordenboek van **Mestreechter Taol** (mestreechtertaol.nl, Dictionair vaan de Mestreechter Taol). Twijfelgevallen ("Hoe geit 't?", "Doeg", "Alaaf" in Maastricht) zijn van de kaart gehaald tot ze daar bevestigd zijn. Elke stad heeft een eigen dialect. Het Kerkraads en het Heerlens zijn anders dan het
Mestreechs ⚖️. Spelling verschilt per bron. De woordkaart is een stap `rule` met `rule:
'ongeschreven'`. Ze krijgt geen geluid: de telefoonstem leest dialect niet goed voor. Laat de kaart
nakijken door Veldeke (Maastricht) en iemand uit Heerlen of Kerkrade.*

**Zo zeg je het:** "Sorry, ik versta geen dialect. Wil je het in het Nederlands zeggen?"

**Onthoud:** Carnaval? Vraag vroeg vrij. Dialect? Vraag vriendelijk om Nederlands.

**Wie kan je helpen:** je leidinggevende of HR (vrij vragen) · je cao (vakantiedagen) · een collega die je vertrouwt.

---

### Les ZL.5 · Hulp in de buurt: zorg, taal, geld

**Leerdoel:** je weet waar je heen gaat als je huisarts dicht is, als je Nederlands wilt oefenen, en als je geldzorgen hebt.

**Scène** · *Beeld: Hatice (38) op zaterdagavond op de bank in Heerlen. Haar zoontje heeft hoge koorts. Op tafel ligt een stapel brieven.*

> Het is zaterdagavond. De zoon van Hatice heeft al de hele dag hoge koorts. Zijn huisarts is
> dicht tot maandag. Hatice maakt zich zorgen. Op tafel liggen ook drie rekeningen die ze nog niet
> heeft betaald.

**Vraag 1 · Wat doe je?** De huisarts is dicht. Wat doet Hatice?

- **A.** Ze rijdt meteen naar de spoedeisende hulp van het ziekenhuis.
  → *Daar heb je meestal eerst een verwijzing nodig. Bel eerst.*
- **B.** Ze belt de huisartsenpost.
  → *Goed. Die helpt 's avonds, 's nachts en in het weekend.*
- **C.** Ze wacht tot maandag en kijkt op internet.
  → *Bij hoge koorts bij een kind kun je beter nu bellen.*

**Goed antwoord: B.**
**Waarom:** Is je huisarts dicht en kan het niet wachten? Bel dan de **huisartsenpost** ⚖️. Bel
eerst, ga er niet zomaar heen ⚖️. In Zuid-Limburg zijn er drie: bij het MUMC+ in Maastricht, bij
Zuyderland in Heerlen, en bij Zuyderland in Geleen ⚖️. Je belt de post van je eigen streek ⚖️.
Het nummer staat op de site van je huisarts. Bij levensgevaar bel je 112.

**Vraag 2 · Waar ga je heen?** Hatice kan haar rekeningen niet meer betalen. Waar gaat ze heen?

- **A.** Naar de gemeente, voor hulp bij schulden.
  → *Goed. Die hulp is gratis.*
- **B.** Naar een bedrijf dat snel geld leent via internet.
  → *Pas op. Dan krijg je vaak nog meer schulden.*
- **C.** Nergens. Ze wacht tot de schulden vanzelf weggaan.
  → *Begrijpelijk, maar schulden worden meestal groter als je wacht.*

**Goed antwoord: A.**
**Waarom:** Elke gemeente moet je helpen bij schulden ⚖️. Dat is gratis ⚖️. In veel gemeenten in
Zuid-Limburg doet de **Kredietbank Limburg** dat voor de gemeente ⚖️. Er zijn ook vrijwilligers die
helpen met je post en je geld ⚖️. Vraag vroeg hulp. Hoe eerder, hoe makkelijker. Kijk in de
Sociale kaart bij "Schulden".

*Redactie: in de app is dit een stap `whoask` met `'gemeente'` als beste antwoord. Na het antwoord
komt een knop "Open de Sociale kaart".*

**Vraag 3 · Waar of niet waar?** "In de bibliotheek kun je vaak gratis hulp krijgen bij Nederlands, lezen en de computer."

**Antwoord: waar.**
**Waarom:** Veel bibliotheken hebben een **Taalhuis** ⚖️. Daar helpen vrijwilligers je met
Nederlands, lezen, schrijven en de computer ⚖️. Vaak is er een taalcafé om te praten ⚖️. In
Maastricht is de grote bibliotheek in Centre Céramique ⚖️. In Heerlen is dat SCHUNCK ⚖️, in
Sittard en Geleen De Domijnen ⚖️.

**Zo zeg je het:** "Ik heb rekeningen die ik niet kan betalen. Kunt u mij helpen?"

**Onthoud:** Huisarts dicht? Bel de huisartsenpost. Geldzorgen? Vraag vroeg hulp bij de gemeente.

**Wie kan je helpen:** je huisarts of de huisartsenpost ⚖️ · 112 bij levensgevaar · de gemeente en
de Kredietbank Limburg ⚖️ · Geldfit: 0800-8115 ⚖️ · de bibliotheek of het Taalhuis ⚖️ · het
buurtteam of sociaal wijkteam ⚖️ · in de app: de Sociale kaart.

---

## 4. Taal: unit "Jouw regio: Zuid-Limburg"

*In de vorm van `src/content/work.ts`: 2 lessen, elk 6 woorden, 3 zinnen, 1 gesprekje en 1 tip
"Zo werkt het hier". Korte zinnen. Geen dialect: de stem leest alleen standaardnederlands voor.*

```ts
// src/content/regio/zuid-limburg.ts (Taal-deel)
export const zlTaalUnit: Unit = {
  id: 'rg.zl.u',
  title: 'Your region: South Limburg',
  titleNl: 'Jouw regio: Zuid-Limburg',
  emoji: '🏞️',
  color: '#b5651d',
  lessons: [
    {
      id: 'rg.zl.l.1',
      title: 'The town hall and your home',
      words: [
        { id: 'rg.zl.w.gemeentehuis', nl: 'het gemeentehuis', en: 'the town hall (the building)', emoji: '🏛️' },
        { id: 'rg.zl.w.loket', nl: 'het loket', en: 'the service desk, the counter', emoji: '🪟' },
        { id: 'rg.zl.w.verhuizing', nl: 'de verhuizing', en: 'the move (to a new home)', emoji: '📦' },
        { id: 'rg.zl.w.woningcorporatie', nl: 'de woningcorporatie', en: 'the housing association (social rent)', emoji: '🏘️' },
        { id: 'rg.zl.w.wachtlijst', nl: 'de wachtlijst', en: 'the waiting list', emoji: '📋', picture: false },
        { id: 'rg.zl.w.buurt', nl: 'de buurt', en: 'the neighbourhood', emoji: '🏡' },
      ],
      sentences: [
        { id: 'rg.zl.s.1.1', nl: 'Ik wil me inschrijven bij de gemeente.', en: 'I want to register at the town hall.' },
        { id: 'rg.zl.s.1.2', nl: 'Ik heb om tien uur een afspraak.', en: 'I have an appointment at ten o’clock.' },
        { id: 'rg.zl.s.1.3', nl: 'Ik sta op de wachtlijst voor een huis.', en: 'I am on the waiting list for a house.' },
      ],
      dialogues: [
        chat(
          line('rg.zl.c.1.q', 'Waar woon je?', 'Where do you live?'),
          line('rg.zl.c.1.a', 'In Heerlen. Ik ben net verhuisd.', 'In Heerlen. I have just moved.'),
        ),
      ],
    },
    {
      id: 'rg.zl.l.2',
      title: 'The border, carnival and dialect',
      words: [
        // Not w.grens: that id is "the limit" (social unit). Same Dutch word, other meaning.
        { id: 'rg.zl.w.grens', nl: 'de grens', en: 'the border (between two countries)', emoji: '🛂' },
        { id: 'rg.zl.w.buitenland', nl: 'het buitenland', en: 'abroad, another country', emoji: '🌍', picture: false },
        { id: 'rg.zl.w.carnaval', nl: 'het carnaval', en: 'carnival (a big street party in February or March)', emoji: '🎭' },
        { id: 'rg.zl.w.dialect', nl: 'het dialect', en: 'the dialect (the local way of speaking)', emoji: '🗣️', picture: false },
        { id: 'rg.zl.w.verstaan', nl: 'verstaan', en: 'to understand (what someone says)', emoji: '👂', picture: false },
        { id: 'rg.zl.w.langzaam', nl: 'langzaam', en: 'slowly', emoji: '🐢', picture: false },
      ],
      sentences: [
        { id: 'rg.zl.s.2.1', nl: 'Ik woon in Nederland en werk in Duitsland.', en: 'I live in the Netherlands and work in Germany.' },
        { id: 'rg.zl.s.2.2', nl: 'Kunt u Nederlands praten? Ik versta geen dialect.', en: 'Can you speak Dutch? I do not understand the dialect.' },
        { id: 'rg.zl.s.2.3', nl: 'Mag ik met carnaval vrij?', en: 'May I have time off for carnival?' },
      ],
      dialogues: [
        chat(
          line('rg.zl.c.2.q', 'Sorry, ik praat te snel.', 'Sorry, I am talking too fast.'),
          line('rg.zl.c.2.a', 'Ja, wat langzamer, alstublieft.', 'Yes, a bit slower, please.'),
        ),
      ],
    },
  ],
};

/** One "Zo werkt het hier" tip per lesson (same shape as coreTips in work.ts). */
export const zlTaalTips: CultureTip[] = [
  tip({
    id: 'rg.zl.c.1',
    lessonId: 'rg.zl.l.1',
    emoji: '🏛️',
    title: 'Register your address, and look for a home',
    body: 'Moved? Tell your new town hall (gemeente) within 5 days. Coming from abroad? Make an appointment and go there in person, with your passport or ID and your rental contract. Look on the website of your gemeente: most of them work by appointment. Looking for social rent? Register for free on thuisinlimburg.nl, and renew it every year. Never pay money for a house you have not seen.',
    phrase: { id: 'rg.zl.c.1.p', nl: 'Kan ik een afspraak maken?', en: 'Can I make an appointment?' },
    situation: { id: 'rg.zl.c.1.s', en: 'You moved to Maastricht last week. Your post still goes to your old address. What do you do?' },
    options: [
      { id: 'rg.zl.c.1.o1', en: 'Register your new address with the gemeente of Maastricht now.', best: true },
      { id: 'rg.zl.c.1.o2', en: 'Wait. The gemeente will find out by itself.', best: false },
      { id: 'rg.zl.c.1.o3', en: 'Only tell your employer your new address.', best: false },
    ],
    why: { id: 'rg.zl.c.1.w', en: 'You must tell your new gemeente yourself, within 5 days. Your address is needed for your post, your pay, your health insurance and benefits.' },
  }),
  tip({
    id: 'rg.zl.c.2',
    lessonId: 'rg.zl.l.2',
    emoji: '🎭',
    title: 'Carnival, dialect and the border',
    body: 'Carnival (in Limburg also "vastelaovend") moves every year, to February or March. It is not an official holiday: ask for days off early. Many people speak Limburgish dialect at work. It is normal not to understand it. Ask kindly: "Kunt u Nederlands praten?" Some colleagues speak German or French. Do you live in one country and work in another? Before you sign, ask the GrensInfoPunt for free advice about tax, insurance and benefits.',
    phrase: { id: 'rg.zl.c.2.p', nl: 'Wil je het in het Nederlands zeggen?', en: 'Will you say it in Dutch?' },
    situation: { id: 'rg.zl.c.2.s', en: 'A colleague explains a task in dialect. You do not understand it. What do you do?' },
    options: [
      { id: 'rg.zl.c.2.o1', en: 'Ask kindly if they can say it in Dutch.', best: true },
      { id: 'rg.zl.c.2.o2', en: 'Nod and just guess what to do.', best: false },
      { id: 'rg.zl.c.2.o3', en: 'Tell them that dialect is rude.', best: false },
    ],
    why: { id: 'rg.zl.c.2.w', en: 'For many people dialect is their own language, not rudeness. Most colleagues are happy to switch to Dutch. Guessing can lead to mistakes, and with safety you must always understand.' },
  }),
];
```

**Slotregel van de tips.** Tip 1 met `ADVICE_LINE`. Tip 2 met `NONE` (`''`): carnaval en dialect zijn
ongeschreven regels. Het stuk over de grens staat er wel in. Het verwijst al naar het GrensInfoPunt.

**Vragen voor de redactie:**

- "Het carnaval" of "de carnaval"? Allebei goed (Van Dale ⚖️). We kiezen **het**, omdat dat in de
  standaardtaal het meest voorkomt.
- "De grens" staat nu twee keer in de cursus, met twee betekenissen (`w.grens`: *the limit*;
  `rg.zl.w.grens`: *the border*). Dat is goed. Zorg wel dat ze nooit in één oefening samen staan.
  De regio-unit en `u.social` zitten in andere units, dus dat gebeurt niet vanzelf.
- In zin `rg.zl.s.2.2` staat "u", in het gesprekje "je". Dat is bewust. Tegen een onbekende of een
  leidinggevende zeg je "u". Tegen een collega op de vloer vaak "je".
- "Heerlen" in het gesprekje is een plaatsnaam. De stem moet hem goed uitspreken (HEER-len).
  Luister de opname dus extra na.

### Vertalen en inspreken

| | Aantal | Opmerking |
|---|---|---|
| Sleutels om te vertalen | **41**: 1 unit, 2 lestitels, 12 woorden, 6 zinnen, 4 gesprekregels, 2 × 8 tipsleutels (`id` = titel, `.b`, `.p`, `.s`, `.o1`–`.o3`, `.w`) | × 9 talen (ar, ti, fa, prs, uk, tr, pl, ro, bg) = **369 vertalingen** in `src/i18n/work/<taal>.ts`. Plus 2 UI-sleutels voor de Instellingen-rij (× 9 = 18), en de regels "wanneer" van de Sociale kaart (± 45 × 9). Daarna `vertaalcontrole.md` volgen. |
| Opnames (Nederlands) | **24 clips**: 12 woorden, 6 zinnen, 4 gesprekregels, 2 tipzinnen (`.p`) | Per stem. Geen dialect inspreken. |
| Plaatjes | 7 woorden met plaatje (`picture` niet `false`) | Gemeentehuis, loket, verhuizing, woningcorporatie, buurt, grens, carnaval. Teken het carnaval zonder religieuze tekens en zonder alcohol. |
| Gendervormen | Nakijken voor ar, uk, pl, ro, bg | "verhuisd", "ik sta" en "ik woon" kunnen per geslacht verschillen. |

---

## 5. Sociale kaart Zuid-Limburg

*Een lijst in de app: één rij per plek, één tik naar de site of het nummer. Zelfde vorm als "Wie
bel je?" (`HelpRow` in `src/content/regels/help.ts`). De app toont hem bij Hulp, alleen met regio
Zuid-Limburg. Per categorie staat eerst wat voor heel Zuid-Limburg geldt, daarna per gebied.*

**Gebieden:** **M-H** = Maastricht en Heuvelland (Maastricht, Eijsden-Margraten, Meerssen,
Valkenburg aan de Geul, Gulpen-Wittem, Vaals) · **P** = Parkstad (Heerlen, Kerkrade, Landgraaf,
Brunssum, Simpelveld, Voerendaal, Beekdaelen) · **WM** = Westelijke Mijnstreek (Sittard-Geleen,
Beek, Stein) · **ZL** = heel Zuid-Limburg.

**Regel voor nummers.** Een telefoonnummer staat er alleen als het een **landelijk** nummer is
(0800 of 088), of het nummer **14 + netnummer** van de gemeente. Regionale nummers die ik vond maar
niet op de officiële site zelf kon lezen, staan in hoofdstuk 7. Daar kan iemand ze nakijken en
toevoegen.

**Gecheckt.** Bij elke rij staat ⚖️ en een datum. Daarbij **O** = gevonden in een zoekresultaat van
de officiële site of overheid.nl · **S** = alleen gevonden in een andere bron (krant, vacature,
gids). Een S-rij moet eerst nagekeken worden.

### 5.1 De lijst

| Categorie | Naam | Wanneer ga je erheen | Website | Tel. | Gebied | ⚖️ gecheckt |
|---|---|---|---|---|---|---|
| **Gemeente** | Gemeente Maastricht: GemeenteLoket (Mosae Forum) | Inschrijven, verhuizen, paspoort of id-kaart. Altijd op afspraak. | gemeentemaastricht.nl | 14 043 | M-H | ⚖️ 15-10-2026 · O |
| | Gemeente Heerlen: Stadskantoor | Inschrijven, verhuizen, paspoort. Op afspraak. | heerlen.nl | 14 045 | P | ⚖️ 15-10-2026 · O |
| | Gemeente Kerkrade: Burgerplein | Inschrijven, verhuizen, paspoort. Op afspraak. | kerkrade.nl | 14 045 | P | ⚖️ 15-10-2026 · O (nummer); S (naam balie) |
| | Gemeente Sittard-Geleen: Stadskantoor Sittard, Stadswinkel Geleen | Inschrijven, verhuizen, paspoort. Op afspraak. | sittard-geleen.nl | 14 046 | WM | ⚖️ 15-10-2026 · O |
| | Andere gemeenten (Valkenburg, Gulpen-Wittem, Vaals, Eijsden-Margraten, Meerssen, Landgraaf, Brunssum, Beek, Stein, …) | Hetzelfde: kijk op de site van je eigen gemeente. | de site van je gemeente | — | M-H, P, WM | ⚖️ 15-10-2026 · niet per gemeente gecheckt |
| **Juridisch Loket** | Het Juridisch Loket | Gratis advies over je contract, je loon, ontslag, huur of schulden. | juridischloket.nl | 0800-8020 | ZL | ⚖️ 15-10-2026 · O (nummer uit `werkregels-bronnen.md`) |
| | Juridisch Loket Heerlen, in het Huis van het Recht | Je hebt meer problemen tegelijk, zoals schulden en huur, en woont in Heerlen. | juridischloket.nl | — | P | ⚖️ 15-10-2026 · O (rechtspraak.nl, 2020–2022; nu nog open?) |
| **Werk** | UWV en werk.nl | Werk kwijt, WW, inschrijven als werkzoekende, vacatures. | werk.nl · uwv.nl | — | ZL | ⚖️ 15-10-2026 · O |
| | Werkgeversservicepunt (WSP) Zuid-Limburg | Samenwerking van UWV, gemeenten en sociale werkbedrijven. Helpt werkzoekenden en werkgevers. | zuid-limburg.werkgeversanno.nu ⚖️ | — | ZL | ⚖️ 15-10-2026 · S |
| | Werkcentrum (Maastricht) | Je zoekt werk in Maastricht: hulp bij werk zoeken, solliciteren en een opleiding. | via gemeentemaastricht.nl | — | M | ✅ naam bevestigd door de eigenaar (15-10-2026); site en adres nog nakijken ⚖️ |
| | Sociale Zaken Maastricht Heuvelland | Je zoekt werk en hebt een uitkering van de gemeente, in Maastricht of het Heuvelland. | socialezaken-mh.nl | — | M-H | ⚖️ 15-10-2026 · O (sdg.government.nl) |
| | WSP Parkstad, en WerkvoorHeerlen | Je zoekt werk vanuit de bijstand in Parkstad. WSP Parkstad zoekt mee naar een baan. | wspparkstad.nl | — | P | ⚖️ 15-10-2026 · O (heerlen.nl, gemeenteraad 2024) |
| | Vidar en WSP Westelijke Mijnstreek | Werk en inkomen in Sittard-Geleen, Beek en Stein. | vidar.nl · wsp-wm.nl | — | WM | ⚖️ 15-10-2026 · O (overheid.nl) |
| **Bijstand** | Sociale Zaken Maastricht Heuvelland | Je hebt te weinig geld om van te leven. Je vraagt bijstand aan via werk.nl, met DigiD. | socialezaken-mh.nl | — | M-H (Maastricht, Meerssen, Vaals, Valkenburg, Gulpen-Wittem) | ⚖️ 15-10-2026 · O; Eijsden-Margraten staat er niet bij |
| | Gemeente Heerlen: werk en inkomen | Bijstand aanvragen. Lukt het online niet? Er is hulp op het Maanplein ⚖️. | heerlen.nl | 14 045 | P (Heerlen) | ⚖️ 15-10-2026 · O |
| | Vidar | Bijstand in Sittard-Geleen, Beek en Stein. | vidar.nl | — | WM | ⚖️ 15-10-2026 · O |
| | Andere gemeenten | Kerkrade, Landgraaf, Brunssum enzovoort: vraag het bij je eigen gemeente. | de site van je gemeente | — | P | ⚖️ niet gecheckt |
| **Uitzendbureaus** | Een uitzendbureau met een keurmerk | Je zoekt werk via een bureau. Kies een bureau met een keurmerk (SNA, of lid van ABU of NBBU). Check het in het register. Voor werk betaal je nooit. | normeringarbeid.nl (SNA-register) · abu.nl · nbbu.nl | — | ZL | ⚖️ 15-10-2026 · S (adres register niet gezien) |
| **Buurt en welzijn** | Trajekt | Welzijnswerk in Maastricht en het Heuvelland. Hulp in je wijk, als je niet weet waar je heen moet. | trajekt.nl | — | M-H | ⚖️ 15-10-2026 · S (vacatures) |
| | Buurtteams Heerlen | Hulp in je buurt in Heerlen: bij zorg, geld, opvoeding of eenzaamheid. Sinds mei 2024 ⚖️. | heerlen.nl | 14 045 (vraag naar je buurtteam) | P (Heerlen) | ⚖️ 15-10-2026 · O (gemeenteraad Heerlen 2024) |
| | Alcander | Welzijnswerk en buurtcentra in Heerlen, Nuth en Voerendaal. Activiteiten, vrijwilligers, een maatje. | alcander.nl | — | P | ⚖️ 15-10-2026 · S |
| | Impuls | Welzijnswerk in Kerkrade en Simpelveld. | impulskerkrade.nl ⚖️ | — | P | ⚖️ 15-10-2026 · S (adres site niet gezien) |
| | Westelijke Mijnstreek | Vraag bij de gemeente naar het sociaal team of het welzijnswerk in je wijk. | sittard-geleen.nl | 14 046 | WM | ⚖️ 15-10-2026 · organisatie niet gevonden |
| **Schulden** | Je gemeente | Je kunt rekeningen niet meer betalen. De gemeente moet je helpen. Gratis. | de site van je gemeente | 14 + netnummer | ZL | ⚖️ 15-10-2026 · O |
| | Kredietbank Limburg | Schuldhulp en budgetbeheer voor onder andere Maastricht, Heerlen, Kerkrade, Landgraaf, Brunssum en Sittard-Geleen. Er zijn inloopspreekuren. | kredietbanklimburg.nl | — | ZL | ⚖️ 15-10-2026 · O (overheid.nl) |
| | Geldfit | Je twijfelt of je geldzorgen hebt. Gratis en anoniem. | geldfit.nl | 0800-8115 | ZL | ⚖️ 15-10-2026 · uit `werkregels-bronnen.md` |
| | Humanitas: thuisadministratie | Een vrijwilliger helpt je met je post en je geld. | humanitas.nl | — | M-H, P, WM | ⚖️ 15-10-2026 · S |
| **Taal leren** | Centre Céramique: bibliotheek Maastricht | Boeken, gratis workshops, cursussen, hulp met de computer. Vraag naar het Taalhuis. | centreceramique.nl | — | M-H | ⚖️ 15-10-2026 · O (Taalhuis niet bevestigd) |
| | SCHUNCK: bibliotheek en Taalhuis Heerlen | Gratis hulp bij Nederlands, lezen en de computer. | schunck.nl | — | P | ⚖️ 15-10-2026 · O (jaarverslag 2025) |
| | De Domijnen: bibliotheek Sittard en Geleen | Bibliotheek met vestigingen in Sittard, Geleen, Born, Beek en Stein. Vraag naar hulp bij Nederlands. | dedomijnen.nl ⚖️ | — | WM | ⚖️ 15-10-2026 · S (Taalhuis niet bevestigd) |
| **Zorg** | 112 | Levensgevaar, brand, of een misdrijf dat nu gebeurt. | — | 112 | ZL | ⚖️ 15-10-2026 · O |
| | Huisartsenspoedpost Maastricht & Heuvelland (bij het MUMC+) | Je huisarts is dicht en het kan niet wachten. Bel eerst. | hapmaastricht.nl ⚖️ | zie hoofdstuk 7 | M-H | ⚖️ 15-10-2026 · S (nummers spreken elkaar tegen) |
| | Huisartsenspoedpost Oostelijk Zuid-Limburg (bij Zuyderland Heerlen) | Je huisarts is dicht en het kan niet wachten. Bel eerst. | zuyderland.nl | zie hoofdstuk 7 | P | ⚖️ 15-10-2026 · O (zuyderland.nl) |
| | Huisartsenspoedpost Westelijke Mijnstreek (bij Zuyderland Geleen) | Je huisarts is dicht en het kan niet wachten. Bel eerst de post van je eigen streek. | zuyderland.nl | zie hoofdstuk 7 | WM | ⚖️ 15-10-2026 · O + S (L1 Nieuws) |
| | MUMC+ (Maastricht UMC+) | Het academisch ziekenhuis in Maastricht. Meestal ga je erheen met een verwijzing. | mumc.nl | — | M-H | ⚖️ 15-10-2026 · niet apart gecheckt |
| | Zuyderland Medisch Centrum (Heerlen en Sittard-Geleen) | Ziekenhuis op twee plekken. Meestal ga je erheen met een verwijzing. | zuyderland.nl | 088-459 7777 | P, WM | ⚖️ 15-10-2026 · O (locatielijst feb. 2026) |
| | Adelante (Hoensbroek en andere plekken) | Revalidatie na een ongeluk, een ziekte of een beperking. Ook hulp bij weer aan het werk gaan. Alleen met een verwijzing van je arts. | adelante-zorggroep.nl ⚖️ | — | ZL | ⚖️ 15-10-2026 · S (zorgkaartnederland.nl) |
| **Grens** | GrensInfoPunt Maastricht | Je woont of werkt over de grens, of je wilt dat. Gratis advies over belasting, uitkering, pensioen en zorgverzekering. | grenzinfo.eu/emrm ⚖️ (ook grensinfopunt.nl? zie hoofdstuk 7) | zie hoofdstuk 7 | ZL | ⚖️ 15-10-2026 · O |
| | GrenzInfoPunkt Aachen-Eurode (Aken en Herzogenrath/Kerkrade) | Hetzelfde, vooral voor werk of wonen in Duitsland. Op afspraak. | grenzinfo.eu/emra ⚖️ | zie hoofdstuk 7 | ZL | ⚖️ 15-10-2026 · O |
| | Grensarbeid (Kerkrade en Maastricht) | Je zoekt werk in België, Duitsland of Nederland. Hulp met vacatures en je cv. | grenzinfo.eu/emrm ⚖️ | — | ZL | ⚖️ 15-10-2026 · O |
| **Vakbond** | FNV Limburg | Je bent lid, of je wilt lid worden. Hulp bij je contract, je loon of een conflict. | fnv.nl (in jouw regio: Limburg) | 088-368 0368 | ZL | ⚖️ 15-10-2026 · O (landelijk nummer) |
| | CNV | Ook een vakbond. Kijk op de site voor hulp in Limburg. | cnv.nl | — | ZL | ⚖️ niet regionaal gecheckt |
| **Nieuwkomers met een verblijfsvergunning** | Refugee Team | Begeleiding voor statushouders in Maastricht, Eijsden-Margraten, Meerssen, Valkenburg, Gulpen-Wittem en Vaals. Sinds januari 2026 ⚖️. Kantoor aan de Capucijnenstraat in Maastricht ⚖️. | refugeeteam.nl | — | M-H | ⚖️ 15-10-2026 · O (refugeeteam.nl) + S (RTV Maastricht) |
| | Parkstad en Westelijke Mijnstreek | Check bij je gemeente wie je begeleidt. | de site van je gemeente | 14 + netnummer | P, WM | ⚖️ 15-10-2026 · niet gevonden |
| **Huiselijk geweld** | Veilig Thuis | Je voelt je niet veilig thuis, of je maakt je zorgen om iemand. Gratis, dag en nacht, ook anoniem. Je zegt je woonplaats en komt bij Veilig Thuis Zuid-Limburg. | veiligthuis.nl | 0800-2000 | ZL | ⚖️ 15-10-2026 · O (landelijk) |
| | 112 | Er is nu gevaar. | — | 112 | ZL | ⚖️ 15-10-2026 · O |
| **Wonen** | Thuis in Limburg | Een huurhuis zoeken bij een woningcorporatie. Gratis inschrijven, elk jaar verlengen. Geen internet? De corporaties helpen je. | thuisinlimburg.nl | — | ZL | ✅ altijd noemen (eigenaar, 15-10-2026); details ⚖️ 15-10-2026 · O |

*Werk in Maastricht: het heet **Werkcentrum** (bevestigd door de eigenaar, 15-10-2026). Niet "Werkplein". Daarnaast: **Sociale Zaken Maastricht Heuvelland** (werk en bijstand). De rol van **Podium 24** is nog niet beschreven ⚖️.*

### 5.2 Datamodel

```ts
// src/content/regio/types.ts
export type SocialCategory =
  | 'gemeente' | 'juridisch' | 'werk' | 'bijstand' | 'uitzend' | 'buurt' | 'schulden'
  | 'taal' | 'zorg' | 'grens' | 'vakbond' | 'nieuwkomers' | 'veilig' | 'wonen';

/** Deel van een regio. 'all' = de hele regio. Elke regio heeft eigen gebieden. */
export type Area = 'all' | 'mh' | 'parkstad' | 'wm';

export interface SocialMapEntry {
  /** 'rg.zl.k.kredietbank' */
  id: string;
  category: SocialCategory;
  /** Zoals mensen het zeggen. */
  name: string;
  /** Eén regel in gewoon Nederlands: wanneer ga je erheen. In de Taal-track vertaald (id + '.w'). */
  when: string;
  /** Liefst de hoofdsite, geen diepe link. */
  url?: string;
  /** Alleen landelijk (0800/088/112) of 14 + netnummer. */
  tel?: string;
  area: Area[];
  /** Datum van de laatste check (JJJJ-MM-DD). */
  checked: string;
  /** 'official' = op de site van de organisatie zelf gecheckt; 'other' = nog niet. */
  source: 'official' | 'other';
  emoji: string;
}
```

```ts
// src/content/regio/zuid-limburg.ts (deel)
export const zlSocialMap: SocialMapEntry[] = [
  {
    id: 'rg.zl.k.thuisinlimburg', category: 'wonen', emoji: '🏠',
    name: 'Thuis in Limburg',
    when: 'Een huurhuis zoeken bij een woningcorporatie. Gratis inschrijven, elk jaar verlengen.',
    url: 'https://www.thuisinlimburg.nl', area: ['all'], checked: '2026-10-15', source: 'other', // ⚖️
  },
  {
    id: 'rg.zl.k.kredietbank', category: 'schulden', emoji: '💶',
    name: 'Kredietbank Limburg',
    when: 'Hulp bij schulden en budgetbeheer, voor de gemeente.',
    url: 'https://www.kredietbanklimburg.nl', area: ['all'], checked: '2026-10-15', source: 'other', // ⚖️
  },
  {
    id: 'rg.zl.k.refugeeteam', category: 'nieuwkomers', emoji: '🧭',
    name: 'Refugee Team',
    when: 'Begeleiding voor statushouders in Maastricht en het Heuvelland.',
    url: 'https://refugeeteam.nl', area: ['mh'], checked: '2026-10-15', source: 'other', // ⚖️
  },
];
```

**In de app.**

- Een lijstscherm "Sociale kaart Zuid-Limburg", gegroepeerd per categorie. Bovenaan een keuze voor
  het gebied: **Alles** · **Maastricht en Heuvelland** · **Parkstad** · **Westelijke Mijnstreek**.
  De gekozen keuze blijft op de telefoon. We vragen het gebied niet apart in Instellingen: kiezen
  in de lijst is genoeg.
- Elke rij: emoji, naam, de regel "wanneer", en één tik naar `tel:` of `https:`. Zonder nummer en
  zonder site: een luidspreker die de rij voorleest (zoals de huisartsenpost in `HELP_ROWS`).
- Onderaan: "Klopt iets niet? Laat het ons weten." Dat gaat via het bestaande contact.
- Niet in de lijst: commerciële merken, uitzendbureaus met naam, losse adressen.
- `source: 'other'` mag niet live. Een test kan dat afdwingen: elke rij `source === 'official'` vóór
  `RULES_TRACK`/regio live gaat.

**Onderhoud.**

- **Wie:** de eigenaar van Vloertaal (Maastricht), met één vaste vrijwilliger of partner uit de
  regio. Bijvoorbeeld iemand van een Taalhuis of het sociaal wijkteam.
- **Hoe vaak:** **twee keer per jaar**, in **januari** (na de jaarwisseling veranderen veel
  contracten en aanbestedingen, zoals het Refugee Team in januari 2026) en in **juli**. En ook
  meteen als een gebruiker meldt dat iets niet klopt.
- **Hoe:** elke site openen en elk nummer één keer bellen. Bij elke rij `checked` bijwerken. Een
  test laat de build falen als een `checked` ouder is dan **7 maanden**. Dan vergeet niemand het.
- **Ook in de lessen kijken:** staat een naam ook in een les (GrensInfoPunt, Thuis in Limburg,
  Kredietbank Limburg, de huisartsenposten)? Kijk die les dan ook na.

---

## 6. Bronnen

*Gezocht op 15 oktober 2026. De officiële sites kon ik niet zelf openen. Wat ik zeg, komt uit de
zoekresultaten van deze pagina's.*

**Gemeente en inschrijven**

- Gemeente Maastricht, verhuizen uit het buitenland: https://www.gemeentemaastricht.nl/en/moving-and-housing/moving-maastricht-abroad
- Gemeente Maastricht, contact en openingstijden: https://www.gemeentemaastricht.nl/en/contact-and-opening-hours
- WMM, verhuizen naar Maastricht (GemeenteLoket, afspraak, 5 dagen): https://www.wmm.nl/nl/verhuizen-naar-maastricht
- Ondernemersplein, gemeente Maastricht (14 043, Mosae Forum): https://ondernemersplein.overheid.nl/gemeente-informatie/maastricht
- Gemeente Heerlen, contact (op afspraak): https://en.heerlen.nl/contact
- Organisaties.overheid.nl, gemeente Sittard-Geleen (14 046, afspraak online): https://organisaties.overheid.nl/29280/Gemeente_Sittard-Geleen
- Legesverordening Sittard-Geleen 2026 (Stadswinkel Geleen, Stadskantoor Sittard): https://sittardgeleen.debatrijk.nl/documents/44/5951/documents/75453/18_1_Tarieventabel_legesverordening_2026.pdf
- Organisaties.overheid.nl, gemeente Kerkrade (14 045, afspraak online): https://organisaties.overheid.nl/40395/Gemeente_Kerkrade/
- Stadsjournaal Kerkrade 2022 (Burgerplein, op afspraak): https://cuatro.sim-cdn.nl/kerkrade/uploads/stadsjournaal_17-08-2022.pdf

**Wonen en vervoer**

- Thuis in Limburg, inschrijven: https://www.thuisinlimburg.nl/inschrijven/inschrijven-als-woningzoekende
- Maasvallei, inschrijven bij Thuis in Limburg: https://maasvallei.nl/veelgestelde-vragen/hoe-kan-ik-mij-inschrijven-bij-thuis-in-limburg
- ZIG, ZOwonen sluit aan bij Thuis in Limburg (2020): https://zig.nl/en/2020/07/13/zowonen-sluit-zich-succesvol-aan-bij-thuis-in-limburg/
- Arriva, OVpay in- en uitchecken (spiekkaartje): https://www.arriva.nl/media/1ozcsugk/ov-pay-spiekkaartje.pdf
- Arriva, veelgestelde vragen: https://www.arriva.nl/vragen-contact/veelgestelde-vragen/
- Treinreiziger, trein Maastricht–Aken (RE18): https://www.treinreiziger.nl/trein-maastricht-aken/amp/

**Grens**

- GrensInfoPunt Maastricht: https://grenzinfo.eu/emrm/en
- GrenzInfoPunkt Aachen-Eurode: https://grenzinfo.eu/emra/en
- Grensarbeid (servicepunt): https://grenzinfo.eu/emrm/?p=15530
- Spreekdagen grensarbeid Maastricht en Heerlen: https://2026.grenzinfo.eu/emrm/?p=36164 · https://2026.grenzinfo.eu/emrm/?p=36232
- Maastricht University, nieuw servicepunt grensoverschrijdende arbeidsbemiddeling: https://www.maastrichtuniversity.nl/nl/nieuws/nieuw-servicepunt-ten-behoeve-van-grensoverschrijdende-arbeidsbemiddeling
- Maastricht University, thuiswerken en grensarbeiders: https://www.maastrichtuniversity.nl/nl/node/36690

**Werk en inkomen**

- UWV, Regio in Beeld Zuid-Limburg 2025: https://www.uwv.nl/nl/arbeidsmarktinformatie/regio/zuid-limburg/regio-in-beeld-2025
- WerkgeversServicepunt Zuid-Limburg: https://zuid-limburg.werkgeversanno.nu/over-werkgeversservicepunt/
- WSP Parkstad: https://www.wspparkstad.nl/over-ons
- WSP Westelijke Mijnstreek: https://wsp-wm.nl/
- Vidar (overheid.nl): https://organisaties.overheid.nl/28418145/Gemeenschappelijke_Regeling_Vidar_Wsw
- SDG, bijstand Maastricht (Sociale Zaken Maastricht Heuvelland): https://sdg.government.nl/government-services-in-the-netherlands/applying-social-assistance/municipality-maastricht
- Gemeente Heerlen, bijstand aanvragen: https://en.heerlen.nl/bijstandsuitkering-aanvragen
- Chemelot (CNV, FNV): https://www.cnv.nl/nieuws/goede-zaak-dat-rechter-veiligheid-medewerkers-chemelot-zwaar-weegt/ · https://www.fnv.nl/nieuwsbericht/sectornieuws/metaal/2026/07/werknemers-chemelot-bezorgd-over-werkgelegenheid

**Geld, buurt en nieuwkomers**

- Kredietbank Limburg (overheid.nl): https://organisaties.overheid.nl/samenwerkingen/29484672/Gemeenschappelijke_Regeling_voor_Sociale_Kredietverlening_en_Schuldhulpverlening_in_Limburg/
- Sociale Zaken Maastricht Heuvelland, Kredietbank Limburg: https://www.socialezaken-mh.nl/hulp-bij-geldzorgen/kredietbank-limburg
- Vidar, hulp bij schulden: https://www.vidar.nl/hulp-bij-schulden/wie-kan-mij-helpen
- Gemeenteraad Heerlen 2024 (Buurtteams Heerlen, Incluzio, Alcander): https://heerlen.bestuurlijkeinformatie.nl/Document/View/c3b8c337-9900-47d6-b50f-984eb5c75a52
- Welzijnsgroep Parkstad (Alcander en Impuls): https://www.banenrijklimburg.nl/bedrijven/welzijnsgroep-parkstad-limburg-783
- Refugee Team, start in zes gemeenten: https://refugeeteam.nl/nieuws/begin-2026-starten-wij-in-zes-nieuwe-gemeenten
- RTV Maastricht, Refugee Team vanaf januari 2026: https://english.rtvmaastricht.nl/news/article/refugee-team-to-support-newcomers-in-maastricht-and-heuvelland-from-january-2026
- De Nieuwe Ster (Maastricht), kort geding Vluchtelingenwerk: https://www.denieuwestermaastricht.nl/vluchtelingenwerk-verliest-kort-geding-tegen-gemeente/
- Veilig Thuis, landelijk nummer (via gemeente Den Haag): https://www.denhaag.nl/nl/zorg-en-ondersteuning/advies-en-melden-van-huiselijk-geweld-en-kindermishandeling/
- FNV Limburg: https://www.fnv.nl/in-jouw-regio/Limburg/

**Zorg**

- Zuyderland, spoedeisende hulp en huisartsenspoedposten: https://zuyderland.nl/specialismen/spoedeisende-hulp-seh/
- Zuyderland, locaties (februari 2026): https://zuyderland.nl/wp-content/uploads/2026/02/zuyderlandlocaties-10-02-2026.pdf
- L1 Nieuws, huisartsenpost Geleen: https://www.l1nieuws.nl/nieuws/2963278/acute-zorg-dicht-huisartsenpost-geleen-verwijst-spoedpatienten-vanaf-nu-naar-heerlen
- Maastricht University, HAP bij het MUMC+: https://www.maastrichtuniversity.nl/nl/su%C3%AFcidale-gedachten
- Adelante (ZorgkaartNederland): https://www.zorgkaartnederland.nl/zorginstelling/revalidatiecentrum-adelante-hoensbroek-10002000

**Taal leren**

- Centre Céramique, stadsbibliotheek Maastricht: https://www.centreceramique.nl/en/residents/maastricht-city-library
- SCHUNCK, wie we zijn: https://schunck.nl/en/about-schunck/who-we-are

**Carnaval en dialect**

- Visit Maastricht, carnaval 2027: https://www.visitmaastricht.com/en/agenda/4126461966/carnival-1
- YoungCapital, carnaval en vrij vragen: https://www.youngcapital.nl/highlights/carnaval
- MT/Sprout, de carnavalskater (verlof, verplichte vrije dagen): https://mtsprout.nl/leiderschap/management/de-carnavalskater
- Veldeke Mestreech, Talk like a local: https://www.veldekemestreech.nl/veldeke/talk-like-a-local/
- Mestreechter Taol, dictionair "goojendaag": https://www.mestreechtertaol.nl/dictionair/mst/goojendaag/
- Webwoordenboek, "Hoe gaat het? Enne?": https://webwoordenboek.nl/kenniscentrum/hoe-gaat-het-enne
- Gemeente Heerlen, Heerlens plat: https://en.heerlen.nl/heerlens-plat
- Gemeente Kerkrade, het Kerkraads dialect: https://en.kerkrade.nl/het-kerkraads-dialect
- Welingelichte Kringen, "Alaaf", "salaai" of "agge mar leut et": https://www.welingelichtekringen.nl/cultuur/alaaf-salaai-of-agge-mar-leut-et-de-dos-en-donts-in-de-grote-carnavalssteden

---

## 7. Te controleren

**Antwoorden van de eigenaar (15-10-2026)**
1. Werk in Maastricht heet **Werkcentrum**. Verwerkt.
2. Dialect: nakijken bij **Mestreechter Taol**. Twijfelwoorden zijn van de kaart gehaald. Een controle via deze omgeving lukte niet, omdat de site hier niet bereikbaar is.
3. Loketnamen en de 5-dagenregel: nog onbekend, blijft ⚖️.
4. Huisartsenpost: nog onbekend, blijft ⚖️. Er staan geen regionale nummers in.
5. **Thuis in Limburg** altijd noemen. Corporaties worden niet los genoemd; de kaart verwijst naar thuisinlimburg.nl.


### Belangrijkst (vóór de pilot)

1. **Alles uit zoekresultaten.** Ik kon geen enkele officiële site zelf openen (het netwerk liet
   het niet toe). Elke rij met "O" komt uit een stukje tekst in een zoekresultaat. Elke rij met "S"
   komt uit een andere bron. **Open elke site één keer zelf.**
2. **Dialect (les ZL.4, woordkaart).**
   - **Goojemorge, goojendaag, "Wie is 't mèt diech?", bedaank**: gevonden bij Veldeke Mestreech en
     Mestreechter Taol. Vrij zeker voor **Maastricht**. Spelling laten nakijken door Veldeke.
   - **"Hoe geit 't?"**: alleen gevonden op één zwakke site. Een Maastrichts woordenboek geeft "wie
     geit 't mèt diech". "Hoe geit 't" is misschien een mengvorm (Limburgs Nederlands). **Niet
     zeker.** Laat iemand uit Heerlen en Sittard kijken. Twijfel? Haal de rij weg.
   - **"Enne?" / "Auch enne?"**: alleen van webwoordenboek.nl. Veel gehoord, maar niet in een
     officieel woordenboek gevonden.
   - **"Doeg"**: algemeen in het zuiden, maar niet als typisch Limburgs bevestigd. Limburgers zeggen
     bij weggaan ook vaak "hoi" of "haje".
   - **"Alaaf"**: wordt in veel Limburgse plaatsen geroepen. Voor **Maastricht** vond ik
     tegenstrijdige bronnen. Een gids zegt dat er "geen alaaf" is in Mestreech. Laat dit nakijken.
     Zet het eventueel bij Heerlen, Sittard en Kerkrade, niet bij Maastricht.
   - De woordkaart heeft nog niets uit het **Kerkraads** en het **Heerlens**. Die zijn heel anders
     (Ripuarisch). Vraag de gemeente Kerkrade of Veldeke Heerlen om 1 of 2 groeten.
3. **Huisartsenposten: nummers.** Ik vond tegenstrijdige nummers voor Maastricht (043-387 7777 in
   twee bronnen van Maastricht University, en 043-750 0123 in een andere). Voor Heerlen
   (Oostelijk Zuid-Limburg) vond ik 045-577 8844 op een gidssite. Voor Geleen geen nummer. **Geen
   enkel nummer staat nu in de kaart.** Kijk ze na op de sites zelf (hapmaastricht.nl ⚖️ en
   zuyderland.nl). Kijk ook of de post in **Geleen** nog open is (L1 Nieuws: de SEH in Geleen is
   dicht, de huisartsenpost bleef). De SEH van Zuyderland zit sinds oktober 2024 alleen in
   **Heerlen** ⚖️, en die gaat rond 2030 naar Sittard-Geleen ⚖️. Daarom staat er geen SEH in een
   les. Het is ook de reden dat les ZL.5 zegt: "bel eerst".
4. **Statushouders.** Het **Refugee Team** begint volgens zijn eigen site en RTV Maastricht in
   januari 2026 in Maastricht en het Heuvelland. Vluchtelingenwerk verloor daarover een kort geding.
   Nog na te kijken: (a) is het kantoor aan de Capucijnenstraat echt open; (b) gaat het om precies
   deze 6 gemeenten: Maastricht, Eijsden-Margraten, Meerssen, Valkenburg, Gulpen-Wittem en Vaals; (c) wie het doet in **Parkstad**
   en de **Westelijke Mijnstreek**. Daarover vond ik niets van 2025 of 2026. VluchtelingenWerk
   Zuid-Nederland is sinds 2022 opgegaan in VluchtelingenWerk Nederland ⚖️. De kaart zegt daarom:
   "Check bij je gemeente wie je begeleidt."
5. **Welzijn in Heerlen: Alcander of Adelante?** Ik bedoelde **Alcander**. Wat ik vond:
   - **Buurtteams Heerlen** doen sinds **1 mei 2024** het buurtteamwerk in Heerlen, uitgevoerd door
     **Stichting Incluzio** ⚖️. Zij namen het werk over van Heerlen STAND-BY!. Buurtbemiddeling ging
     toen van Alcander naar Buurtteams Heerlen ⚖️ (stuk van de gemeenteraad, 2024).
   - **Alcander** bestaat nog als welzijnsorganisatie en buurtcentrum in Heerlen, Nuth en
     Voerendaal ⚖️. In 2026 liep er een aanbesteding van de gemeente Heerlen waarbij Alcander
     meedeed. Het is niet duidelijk of die over welzijn ging of over sport ⚖️. **Kijk na of Alcander
     na 2026 nog het welzijnswerk doet.**
   - **Adelante** is geen buurtteam. Het is een **revalidatiecentrum** (Hoensbroek en andere
     plekken), met ook een afdeling voor werk (Adelante Arbeid) ⚖️. Het staat nu in de kaart bij
     **Zorg**, met "alleen met een verwijzing van je arts". Het past daar, omdat Adelante helpt bij
     weer aan het werk gaan na ziekte of een ongeluk. De site heb ik niet gezien
     (adelante-zorggroep.nl is een gok ⚖️).
6. **Werk in Maastricht.** "Werkplein Maastricht" en "Werkgevers Servicepunt Maastricht-Heuvelland"
   heb ik **niet** gevonden. Wel: **Sociale Zaken Maastricht Heuvelland** (socialezaken-mh.nl) en
   **Podium 24**. Een bron noemt "Podium24 (Sociale Zaken Maastricht-Heuvelland)", een andere noemt
   Podium24 als partner bij Grensarbeid. Een stuk uit november 2025 gaat over een nieuw "sociaal
   ontwikkelbedrijf Maastricht-Heuvelland" ⚖️. **Vraag de gemeente wat nu de juiste naam en de
   juiste ingang is.**
7. **WSP Parkstad.** Op overheid.nl staat de gemeenschappelijke regeling van WSP Parkstad als
   **opgeheven sinds 15-06-2024**, maar de organisatie zelf als actief. Kijk na wie het nu doet.
8. **Bijstand Maastricht-Heuvelland.** De SDG-pagina noemt Maastricht, Meerssen, Vaals, Valkenburg
   en Gulpen-Wittem, maar niet **Eijsden-Margraten**. Kijk na waar Eijsden-Margraten heen moet.

### Namen en plaatsen

9. **Gemeentebalies.** Maastricht: "GemeenteLoket" in Mosae Forum (WMM-site, niet de gemeente zelf).
   Heerlen: "Stadskantoor", Geleenstraat. Kerkrade: "Burgerplein" (Stadsjournaal 2022) en adres
   Markt 1 of Markt 33 (bronnen verschillen). Sittard-Geleen: "Stadskantoor Sittard" en
   "Stadswinkel Geleen" (legesverordening 2026). Afspraken: Maastricht via 14 043 of
   afspraak.maastricht.nl ⚖️; Sittard-Geleen via sittard-geleen.mijnafspraakmaken.nl ⚖️; Kerkrade
   via kerkrade.mijnafspraakmaken.nl ⚖️. Een nieuwkomer uit het buitenland in Maastricht moet volgens
   de gemeente eerst **bellen** voor een afspraak ⚖️.
10. **Termijnen inschrijven.** "Binnen 5 dagen" na de verhuizing, en "vanaf 4 weken vooraf" ⚖️. Dat
    is de landelijke regel (Wet BRP), maar ik heb rijksoverheid.nl niet kunnen openen. Ook "uit het
    buitenland: binnen 5 dagen, persoonlijk" ⚖️.
11. **Thuis in Limburg.** Aantal corporaties: 14 of 17 (bronnen verschillen). Bevestigd: Maasvallei,
    Wonen Limburg, ZOwonen, Krijtland Wonen, Wonen Meerssen (Vincio Wonen ligt in Noord-Limburg).
    **Niet** bevestigd: Servatius (Maastricht), Woonpunt (Maastricht en Parkstad), HEEMwonen
    (Kerkrade), Weller (Heerlen) ⚖️. Kijk de lijst na op thuisinlimburg.nl. Ook nakijken: gratis
    inschrijven, 18 jaar, elk jaar verlengen.
12. **OVpay bij Arriva Limburg** in bus en trein: bevestigd door Arriva-pagina's, maar de datum van
    de bus is onduidelijk. Werkt OVpay ook op de grenslijn naar Aken en Luik? Een bron zegt ja,
    "waar de OV-chipkaart geldig is". Reizen binnen Duitsland kan niet met de OV-chipkaart ⚖️. Het
    stuk in les ZL.2 zegt daarom alleen: "kijk eerst welk kaartje je nodig hebt".
13. **GrensInfoPunt.** Site: **grenzinfo.eu/emrm** (Maastricht) en **grenzinfo.eu/emra**
    (Aachen-Eurode). Is grensinfopunt.nl ook van hen? Dat heb ik niet gevonden. Nummers uit de
    zoekresultaten: GIP Maastricht **+31 (0)43 350 5020**, Grensarbeid **+31 (0)43 350 5070**,
    GrenzInfoPunkt Aachen-Eurode **+49 (0)241 56861-0**. Ze komen van de eigen site, maar ik kon ze
    niet zelf lezen. Na een check mogen ze in de kaart (ze zijn vrij stabiel).
14. **Juridisch Loket in de regio.** Heerlen: vestiging aan het Maanplein, Huis van het Recht (2020,
    2022). Bestaat dat nog? Maastricht en Sittard: geen vestiging of spreekuur gevonden.
15. **FNV.** 088-368 0368 is het landelijke Contactcentrum. Een "Vakbondshuis Parkstad" in Heerlen
    (Doctor Poelsstraat) kwam alleen in een stuk uit 2022 voor. Bestaat het nog? En is er een
    kantoor in Maastricht of Sittard?
16. **Uitzendbureaus.** Adres van het SNA-register: normeringarbeid.nl ⚖️. Niet gezien. Let op de
    **Wtta**: vanaf 2027 moeten uitzendbureaus een **toelating** hebben, en vanaf 2028 is werken
    zonder toelating verboden ⚖️ (zie `werkregels-bronnen.md`). Dan wordt het **openbare register
    van toegelaten uitleners** de betere link. Pas de kaart dan aan.
17. **Welzijn Westelijke Mijnstreek.** "Partners in Welzijn" staat op overheid.nl (Beek, Geleen),
    maar de gegevens zijn van 2019. Ik weet niet of het nog bestaat. De kaart verwijst nu naar de
    gemeente. **Impuls** (Kerkrade, Simpelveld): het adres van de site (impulskerkrade.nl) is een
    gok.
18. **Trajekt.** Alleen gevonden via vacatures ("welzijn in Maastricht en Heuvelland"). Kijk na of
    Trajekt nog de buurtteams of het sociaal wijkteam in Maastricht doet, of alleen welzijnswerk.
    Hoe heet in Maastricht nu de ingang voor hulp in de wijk?
19. **SchuldHulpMaatje** in Zuid-Limburg: niet gevonden. Wel **Humanitas thuisadministratie** (in
    Maastricht, Heerlen en Sittard) en **Werkplaats Financiën** (Sittard-Geleen) ⚖️. Kredietbank
    Limburg: de lijst gemeenten en het nummer 088-101 99 99 staan in een stuk van overheid.nl, maar
    zijn niet in de kaart gezet (regionaal nummer, nog niet op de eigen site gecheckt).
20. **Taalhuizen.** Heerlen (SCHUNCK): bevestigd, gecertificeerd in 2025. Maastricht (Centre
    Céramique) en Sittard-Geleen (De Domijnen): bibliotheek bevestigd, **Taalhuis niet**. Kerkrade:
    niet gezocht. Website De Domijnen (dedomijnen.nl) is een gok.
21. **Veilig Thuis.** 0800-2000 is landelijk en stuurt je door naar je regio. "Veilig Thuis
    Zuid-Limburg" als naam van de regio heb ik niet apart gezien.

### Werk en sectoren (voor de redactie, niet in de lessen)

22. Belangrijke sectoren volgens UWV: **zorg** (MUMC+, Zuyderland), **onderwijs**, **techniek en
    ICT**, **transport en logistiek**; **chemie** op **Chemelot** in Sittard-Geleen (ongeveer 60
    chemische bedrijven, meer dan 200 bedrijven op het terrein ⚖️). Verder **toerisme en horeca** in
    Maastricht en Valkenburg en **detailhandel** ⚖️ (niet in een UWV-bron gezien). Let op: **VDL
    Nedcar** in Born is dicht. UWV verwachtte daardoor in 2024–2025 banenverlies in de regio ⚖️.
    Op Chemelot maken werknemers zich zorgen om hun baan (FNV, juli 2026). Noem in de lessen daarom
    geen bedrijven.
23. Wegen naar werkgebieden (A2, A76, A79) heb ik niet nagezocht. Ze staan daarom niet in de les.

### Regels (juridisch)

24. **Grenswerk.** "Sociale zekerheid meestal in het werkland" (EU-verordening 883/2004) en "belasting
    vaak in het werkland, met uitzonderingen" ⚖️. Kijk de zinnen in les ZL.3 na met het GIP. Bij
    thuiswerken en werken in twee landen kan het anders zijn. Ook voor België en Duitsland kan het
    verschillen. Daarom staan er geen getallen in.
25. **Carnaval.** "Geen officiële feestdag" en "geen recht op vrij" ⚖️. "Werkgever mag vragen om
    vakantiedagen te gebruiken als het bedrijf dicht is, als het klopt met contract of cao" ⚖️. Dat
    zijn de bronnen MT/Sprout en YoungCapital, geen officiële bron. Laat een jurist dit nakijken met
    de regels over vakantie en collectieve sluiting (BW 7:638).
26. **Schuldhulp.** "Elke gemeente moet je helpen, gratis" ⚖️ (Wet gemeentelijke schuldhulpverlening).
    Er is één voorwaarde gevonden: in Maastricht, Gulpen-Wittem, Meerssen en Vaals is hulp van de
    Kredietbank gratis, "als je nog niet eerder schuldhulp had" ⚖️ (oude bron). Kijk dat na. Is het
    zo, dan klopt "gratis" in les ZL.5 niet altijd.
