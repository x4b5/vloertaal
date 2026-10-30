import type { BeUnit } from '../types';

/**
 * Unit 10 (België) · Uitkering, werk en geld: de Belgische versie van src/content/regels/units/geld.ts
 * (docs/werkregels-belgie.md). Zelfde 7 lessen en stap-id's, met "r.be." vooraan. Het Belgische
 * stelsel is anders: geen WW en geen UWV, maar de VDAB (inschrijven), een uitbetalingsinstelling
 * (vakbond of HVW), de C4 en de RVA (beslist). Geen bijstand, maar het leefloon van het OCMW. Geen
 * toeslagen, wel het Groeipakket. Belasting via FOD Financiën, MyMinfin en de eBox. Hulp bij schulden:
 * het OCMW en het CAW (schuldbemiddeling). Geen Geldfit en geen Nibud.
 *
 * `// ⚖️ check:` = een feit dat de deskundige nakijkt, met de bron. De marker wordt nooit getoond
 * of voorgelezen. Opgezocht op 30 okt 2026. rva.be, hvw.fgov.be, mi-is.be en groeipakket.be zijn
 * niet geopend (WebFetch in deze sessie alleen via zoekresultaten; werk.belgie.be: host niet
 * bereikbaar, 30 okt 2026): de feiten komen uit zoekresultaten van onem.be (RVA), vdab.be,
 * vlaanderen.be, hetacv.be, aclvb.be, abvv.be, fin.belgium.be, wikifin.be en socialsecurity.be.
 * `// Redactie:` is voor de makers.
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.geld',
    title: 'Uitkering, werk en geld',
    emoji: '🏦',
    color: '#4a6fa5',
    lessons: [
      {
        // Les 10.1 · Werk kwijt: werkloosheid
        // Redactie: sinds 2026 is de uitkering beperkt in de tijd (meestal hooguit 2 jaar). Het
        //   Grondwettelijk Hof hield de beperking op 10 september 2026 overeind, maar vernietigde een
        //   deel van de overgangsregels ⚖️ (onem.be nieuws 11-09-2026; hetacv.be). Daarom zegt de les
        //   alleen "hooguit 2 jaar, met uitzonderingen" en verwijst ze naar de vakbond of de HVW.
        id: 'r.be.l.geld.1',
        title: 'Werk kwijt: werkloosheid',
        goal: 'Je vraagt op tijd een werkloosheidsuitkering aan. Je weet wie je daarbij helpt.',
        // ⚖️ check: werk kwijt: inschrijven als werkzoekende bij de VDAB, en de uitkering aanvragen via een uitbetalingsinstelling: een vakbond (ABVV, ACV, ACLVB) of de HVW (vdab.be "stappenplan na ontslag"; vlaanderen.be "werkloosheidsuitkering"; rva.be)
        remember: 'Werk kwijt? Schrijf je in bij de VDAB. Ga naar je vakbond of de HVW.',
        // Wie kan je helpen: de VDAB (inschrijven) · je vakbond of de HVW (je uitkering) · de RVA
        //   (beslist) · het justitiehuis (gratis eerste advies).
        help: ['vdab', 'vakbond', 'hvw', 'rva'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.geld.1.sc1',
            picture: 'Malik loopt met een doos spullen naar de uitgang van een fabriek.',
            lines: [
              'Malik werkte 1 jaar bij een fabriek.',
              'Zijn contract voor bepaalde tijd stopt.',
              'Hij krijgt geen nieuw contract.',
              'Hij weet niet wat hij nu moet doen.',
            ],
          },
          // ⚖️ check: werk kwijt: inschrijven als werkzoekende bij de VDAB (in Brussel: Actiris) (vdab.be "stappenplan na tijdelijk werk"; vdab.be "stappenplan na ontslag")
          // ⚖️ check: de uitkering vraag je aan via een uitbetalingsinstelling: een vakbond (ABVV, ACV, ACLVB) of de HVW (Hulpkas voor Werkloosheidsuitkeringen), voor wie geen lid is; niet rechtstreeks bij de RVA (vlaanderen.be "werkloosheidsuitkering"; hvw.fgov.be)
          // ⚖️ check: de werkgever geeft het werkloosheidsbewijs C4 af, uiterlijk op de laatste werkdag, ook als het contract gewoon afloopt (securex.be "het werkloosheidsbewijs C4"; KB 25 november 1991, art. 137)
          // ⚖️ check: de RVA (Rijksdienst voor Arbeidsvoorziening) beslist over je recht op een uitkering (rva.be; KB 25 november 1991)
          {
            kind: 'rule',
            id: 'r.be.l.geld.1.ru1',
            emoji: '📋',
            title: 'Werk kwijt? Schrijf je in bij de VDAB. Ga naar je vakbond of de HVW.',
            body: [
              'Werk kwijt? Schrijf je meteen in bij de VDAB als werkzoekende.',
              'Vraag je uitkering aan bij je vakbond of bij de HVW.',
              'De HVW is de Hulpkas. Die helpt als je geen lid bent van een vakbond.',
              'Neem je C4 mee. Dat papier krijg je van je baas.',
              'De RVA beslist of je een uitkering krijgt.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: inschrijven bij de VDAB binnen 8 dagen na je laatste werkdag (vdab.be "stappenplan na ontslag"; zoekresultaat, nakijken)
          // ⚖️ check: de werkgever geeft de C4 uiterlijk op de laatste werkdag (securex.be "het werkloosheidsbewijs C4")
          {
            kind: 'whatdo',
            id: 'r.be.l.geld.1.wd1',
            situation: 'Maliks laatste werkdag is vrijdag. Wat kan Malik het beste doen?',
            options: [
              { id: 'a', text: 'Hij schrijft zich meteen in en gaat naar de vakbond.', best: true, feedback: 'Goed. Dan krijgt hij op tijd geld.' },
              { id: 'b', text: 'Hij wacht een maand. Misschien vindt hij snel werk.', best: false, feedback: 'Dan is hij te laat, en krijgt hij misschien minder.' },
              { id: 'c', text: 'Hij gaat eerst naar het OCMW voor een leefloon.', best: false, feedback: 'Ben je je werk kwijt? Dan is de VDAB de eerste stap.' },
            ],
            why: 'Schrijf je zo snel mogelijk in bij de VDAB. Doe het binnen 8 dagen na je laatste werkdag. Ga dan naar je vakbond of de HVW. Je C4 krijg je van je baas, op je laatste werkdag.',
          },
          // ⚖️ check: sinds 1 januari 2026 is de werkloosheidsuitkering beperkt in de tijd: meestal hooguit 2 jaar; de duur hangt af van je loopbaan; er zijn uitzonderingen (onem.be "hervorming van de werkloosheidsverzekering"; VRT NWS 7 juni 2025 en 29 december 2025; Grondwettelijk Hof 10 september 2026; bijgewerkt oktober 2026)
          // ⚖️ check: je moet eerst genoeg gewerkt hebben (wachttijd); je vakbond of de HVW zegt hoe lang (vdab.be "stappenplan na ontslag"; hetacv.be "wanneer heb je recht op een werkloosheidsuitkering")
          // ⚖️ check: neem je zelf ontslag zonder goede reden, dan krijg je meestal een tijd geen uitkering (sanctie werkloosheid door eigen toedoen, KB 25 november 1991, art. 51-52; jubel.be "na het ontslag: vangnet of uitsluiting")
          {
            kind: 'truefalse',
            id: 'r.be.l.geld.1.tf1',
            statement: 'Een werkloosheidsuitkering krijg je in België voor altijd.',
            answer: false,
            why: 'Een uitkering duurt meestal hooguit 2 jaar. Hoe lang precies, hangt af van hoe lang je werkte. Neem je zelf ontslag? Dan krijg je vaak een tijd geen uitkering. Vraag eerst advies voordat je zelf stopt.',
          },
          // ⚖️ check: werk je naast je uitkering, dan meld je dat vóór je begint: op je controlekaart (C3A, op papier of in de app) en bij je uitbetalingsinstelling (aclvb.be "informatiedocument volledige werkloosheid, arbeid"; abvv.be "HC C3A")
          // ⚖️ check: niet melden is fraude: je moet de uitkering terugbetalen, vaak met een sanctie (KB 25 november 1991, art. 154-155; rva.be)
          {
            kind: 'whatdo',
            id: 'r.be.l.geld.1.wd2',
            situation: 'Malik krijgt een uitkering. Dan vindt hij een job van 10 uur per week. Wat kan Malik het beste doen?',
            options: [
              { id: 'a', text: 'Hij zegt niets. Het is maar een kleine job.', best: false, feedback: 'Niet doen. Dan moet hij later veel terugbetalen.' },
              { id: 'b', text: 'Hij stopt zelf meteen met zijn hele uitkering.', best: false, feedback: 'Dat hoeft niet altijd. Vraag eerst wat kan.' },
              { id: 'c', text: 'Hij meldt het werk vóór hij begint, bij de vakbond.', best: true, feedback: 'Goed. Dan klopt zijn uitkering, en is hij veilig.' },
            ],
            why: 'Werk je naast je uitkering? Meld het altijd vóór je begint. Dat kan op je controlekaart en bij je vakbond of de HVW. Je uitkering verandert dan. Niet melden is fraude. Dan moet je terugbetalen, vaak met een straf.',
          },
          // ⚖️ check: niet akkoord met een beslissing van de RVA: beroep bij de arbeidsrechtbank, binnen 3 maanden na de kennisgeving (Handvest van de sociaal verzekerde, wet 11 april 1995, art. 23; abvv.be flyer "wat na mijn werkloosheidsuitkering"; de termijn kwam niet in een zoekresultaat: nakijken)
          // ⚖️ check: de vakbond helpt zijn leden daarbij; gratis eerste juridisch advies in het justitiehuis (abvv.be; vlaanderen.be/justitiehuizen)
          {
            kind: 'whatdo',
            id: 'r.be.l.geld.1.wd3',
            situation: 'Malik krijgt een brief van de RVA. De RVA zegt nee tegen zijn uitkering. Malik denkt dat het niet klopt. Wat kan Malik het beste doen?',
            options: [
              { id: 'a', text: 'Hij legt de brief weg. Tegen de RVA kan hij toch niets doen.', best: false, feedback: 'Dat kan wel. Hij kan naar de arbeidsrechtbank.' },
              { id: 'b', text: 'Hij gaat op tijd in beroep, en vraagt hulp bij de brief.', best: true, feedback: 'Goed. Zo kijkt een rechter er nog een keer naar.' },
              { id: 'c', text: 'Hij vraagt de uitkering nog een keer aan, met hetzelfde papier.', best: false, feedback: 'Dan verandert er meestal niets. In beroep gaan is de goede weg.' },
            ],
            why: 'Klopt de beslissing van de RVA niet? Dan kun je naar de arbeidsrechtbank. Dat heet in beroep gaan. Dat doe je meestal binnen 3 maanden na de brief. Je vakbond of het justitiehuis kan je helpen.',
          },
          // ⚖️ check: wie geen lid is van een vakbond, vraagt de uitkering aan bij de HVW, een openbare uitbetalingsinstelling; de RVA zelf neemt geen aanvraag aan (vlaanderen.be "werkloosheidsuitkering"; hvw.fgov.be)
          {
            kind: 'whoask',
            id: 'r.be.l.geld.1.wa1',
            question: 'Je werk stopt. Je bent geen lid van een vakbond. Waar vraag je je uitkering aan?',
            options: [
              { id: 'a', who: 'hvw', best: true, feedback: 'Goed. De Hulpkas betaalt je uitkering, ook zonder vakbond.' },
              { id: 'b', who: 'rva', best: false, feedback: 'De RVA beslist. Maar je vraagt het aan bij de HVW of een vakbond.' },
              { id: 'c', who: 'interimkantoor', best: false, feedback: 'Een interimkantoor helpt je aan werk. Een uitkering vraag je zelf aan.' },
            ],
            why: 'Je uitkering vraag je aan bij een vakbond of bij de HVW. De HVW is de Hulpkas voor Werkloosheidsuitkeringen. Je kiest zelf. Daarna beslist de RVA.',
          },
          { kind: 'model', id: 'r.be.l.geld.1.mo1', context: 'Je contract stopt, en je wilt een uitkering.', nl: 'Mijn contract stopt op 31 maart. Hoe vraag ik een uitkering aan?' },
        ],
      },
      {
        // Les 10.2 · Van uitkering naar werk
        // Redactie: geen bedragen van het leefloon of de vrijstelling: die veranderen met de index.
        id: 'r.be.l.geld.2',
        title: 'Van uitkering naar werk',
        goal: 'Je geeft nieuw werk meteen door. Je laat uitrekenen wat het betekent voor je geld.',
        remember: 'Nieuw werk? Geef het meteen door: aan het OCMW, je vakbond of de HVW.',
        // Wie kan je helpen: het OCMW (leefloon) · je vakbond of de HVW (werkloosheid) · het CAW ·
        //   je uitbetaler van het Groeipakket.
        help: ['ocmw', 'vakbond', 'hvw'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.geld.2.sc1',
            picture: 'Fatima aan tafel. Voor haar een brief van het OCMW en een nieuw contract.',
            lines: [
              'Fatima krijgt een leefloon.',
              'Leefloon is geld van het OCMW als je te weinig inkomen hebt.',
              'Ze vindt een job van 20 uur per week.',
              'Ze is blij.',
              'Maar ze is ook bang: "Houd ik wel genoeg over?"',
            ],
          },
          // ⚖️ check: leefloon: wie het krijgt, moet elk nieuw inkomen meteen melden aan het OCMW (wet 26 mei 2002 betreffende het recht op maatschappelijke integratie; vlaanderen.be "leefloon")
          // ⚖️ check: werk naast een werkloosheidsuitkering meld je aan je uitbetalingsinstelling, vóór je begint (aclvb.be informatiedocument; rva.be)
          // ⚖️ check: wat je te veel kreeg, moet je terugbetalen (wet 26 mei 2002; KB 25 november 1991)
          {
            kind: 'rule',
            id: 'r.be.l.geld.2.ru1',
            emoji: '🔁',
            title: 'Nieuw werk? Geef het meteen door: aan het OCMW, je vakbond of de HVW.',
            body: [
              'Krijg je leefloon? Geef nieuw werk meteen door aan het OCMW.',
              'Krijg je een werkloosheidsuitkering? Meld het bij je vakbond of de HVW.',
              'Anders moet je later terugbetalen.',
              'Laat samen uitrekenen wat je overhoudt.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: het OCMW rekent uit hoeveel leefloon je nog krijgt; bij werk mag je soms een deel van je loon houden (de socioprofessionele vrijstelling) (wet 26 mei 2002, art. 22 §2; KB 11 juli 2002, art. 35)
          {
            kind: 'whatdo',
            id: 'r.be.l.geld.2.wd1',
            situation: 'Fatima begint over 2 weken. Wat kan Fatima het beste doen?',
            options: [
              { id: 'a', text: 'Ze vertelt het pas als ze een maand gewerkt heeft.', best: false, feedback: 'Te laat. Dan krijgt ze te veel, en moet ze terugbetalen.' },
              { id: 'b', text: 'Ze zegt de job af. Ze is bang om geld te verliezen.', best: false, feedback: 'Dat snap ik. Maar laat het eerst uitrekenen.' },
              { id: 'c', text: 'Ze geeft de nieuwe job meteen door aan het OCMW.', best: true, feedback: 'Goed. Dan klopt haar leefloon meteen.' },
            ],
            why: 'Geef werk en loon altijd meteen door aan het OCMW. Dat moet. Het OCMW rekent uit hoeveel leefloon je nog krijgt. Soms mag je een deel van je loon houden. Niet doorgeven geeft later schulden.',
          },
          // ⚖️ check: het Groeipakket is geld voor je kinderen van de Vlaamse overheid; het basisbedrag krijg je altijd; de sociale toeslag hangt af van het inkomen van het gezin (vlaanderen.be "het Vlaams Groeipakket"; parentia.be "toeslagen")
          {
            kind: 'truefalse',
            id: 'r.be.l.geld.2.tf1',
            statement: 'Ga je meer verdienen? Dan verandert je Groeipakket misschien ook.',
            answer: true,
            why: 'Het Groeipakket is geld voor je kinderen, van de Vlaamse overheid. Het basisbedrag krijg je altijd. Een extra toeslag hangt af van je inkomen. Verdien je meer? Dan krijg je die toeslag misschien niet meer.',
          },
          // ⚖️ check: het OCMW en het CAW helpen gratis met budget en geld (vlaanderen.be, CAW; ocmw: maatschappelijk werker)
          {
            kind: 'whatdo',
            id: 'r.be.l.geld.2.wd2',
            situation: 'Fatima wil weten wat ze straks overhoudt. Wat kan Fatima het beste doen?',
            options: [
              { id: 'a', text: 'Ze vraagt het OCMW om het samen uit te rekenen.', best: true, feedback: 'Goed. Dan weet ze hoeveel geld ze overhoudt.' },
              { id: 'b', text: 'Ze vraagt het aan een buurman die ook werkt.', best: false, feedback: 'Vriendelijk. Maar zijn situatie is anders dan die van haar.' },
              { id: 'c', text: 'Ze rekent het zelf uit met haar oude leefloon.', best: false, feedback: 'Dan mist ze misschien toeslagen of kosten.' },
            ],
            why: 'Laat het OCMW of het CAW het samen met je uitrekenen. Denk ook aan de kosten voor je reis en de kinderopvang. Dan kies je met de juiste cijfers.',
          },
          // ⚖️ check: in Vlaanderen is het inburgeringstraject voor veel nieuwkomers verplicht: Nederlands, maatschappelijke oriëntatie, participatie (decreet 7 juni 2013 betreffende het Vlaamse integratie- en inburgeringsbeleid, gewijzigd 2021; integratiebeleid.be; inburgering.be)
          // ⚖️ check: lessen Nederlands bestaan ook 's avonds of in het weekend (Huizen van het Nederlands; nakijken)
          {
            kind: 'whatdo',
            id: 'r.be.l.geld.2.wd3',
            situation: 'Fatima volgt nog inburgering. Ze heeft op dinsdag Nederlandse les. Haar nieuwe uurrooster heeft ook diensten op dinsdag. Wat kan Fatima het beste doen?',
            options: [
              { id: 'a', text: 'Ze vertelt het aan haar werkgever en aan haar begeleider.', best: true, feedback: 'Goed. Dan kunnen ze samen een oplossing zoeken.' },
              { id: 'b', text: 'Ze stopt met de lessen. Werk gaat nu voor.', best: false, feedback: 'Dat is logisch. Maar inburgering moet, dus haar begeleider moet het weten.' },
              { id: 'c', text: 'Ze werkt op dinsdag, en ze zegt niets tegen de school.', best: false, feedback: 'Dan mist ze lessen. Dat kan problemen geven.' },
            ],
            why: 'Inburgeren betekent: je leert Nederlands en hoe België werkt. Voor veel nieuwkomers in Vlaanderen is dat verplicht. Werk en lessen kunnen vaak samen, bijvoorbeeld \'s avonds. Vertel het op tijd aan je werkgever en je begeleider.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.geld.2.wa1',
            question: 'Fatima krijgt leefloon. Ze vindt werk. Aan wie geeft ze dat door?',
            options: [
              { id: 'a', who: 'rva', best: false, feedback: 'De RVA gaat over werkloosheid. Het leefloon komt van het OCMW.' },
              { id: 'b', who: 'collega', best: false, feedback: 'Een collega hoeft dit niet te weten.' },
              { id: 'c', who: 'ocmw', best: true, feedback: 'Goed. Het leefloon komt van het OCMW.' },
            ],
            why: 'Leefloon? Geef werk door aan het OCMW. Werkloosheidsuitkering? Geef het door aan je vakbond of de HVW.',
          },
          { kind: 'model', id: 'r.be.l.geld.2.mo1', context: 'Je hebt werk gevonden, en je hebt een leefloon.', nl: 'Ik heb werk gevonden. Wat betekent dat voor mijn leefloon?' },
        ],
      },
      {
        // Les 10.3 · Belasting, MyMinfin en je post
        // Redactie: geen uiterste datum voor de aangifte: die verandert elk jaar (in 2026: papier 30 juni,
        //   MyMinfin 19 juli) ⚖️ (fin.belgium.be "belastingaangifte 2026"; wikifin.be).
        id: 'r.be.l.geld.3',
        title: 'Belasting, MyMinfin en je post',
        goal: 'Je opent brieven van de overheid, ook in je eBox. Je weet dat je vaak belasting terugkrijgt.',
        remember: 'Een brief van de overheid of in je eBox: altijd openmaken.',
        // Wie kan je helpen: FOD Financiën (gratis hulp bij je aangifte) · de bibliotheek (digipunt:
        //   hulp met computer en itsme) · het OCMW of het CAW (hulp met papieren).
        help: ['bibliotheek', 'ocmw'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.geld.3.sc1',
            picture: 'Yonas met een envelop van FOD Financiën in zijn hand. Een lade staat open.',
            lines: [
              'Yonas werkte vorig jaar 4 maanden als interimkracht.',
              'Daarna ging hij weer naar school.',
              'In mei krijgt hij een brief van FOD Financiën.',
              'Hij maakt hem niet open, en legt hem in een lade.',
            ],
          },
          // ⚖️ check: de eBox is de digitale brievenbus van de overheid; je opent hem met itsme of je eID (myebox.be; belgium.be)
          // ⚖️ check: je aangifte personenbelasting doe je via MyMinfin, met itsme of je eID; veel mensen krijgen een voorstel van vereenvoudigde aangifte (fin.belgium.be "belastingaangifte 2026"; wikifin.be)
          // ⚖️ check: FOD Financiën helpt gratis bij het invullen van je aangifte (fin.belgium.be, hulp bij je aangifte)
          {
            kind: 'rule',
            id: 'r.be.l.geld.3.ru1',
            emoji: '✉️',
            title: 'Een brief van de overheid of in je eBox: altijd openmaken.',
            body: [
              'Een brief van de overheid laat je niet liggen.',
              'Veel post komt online, in je eBox. Dat is je brievenbus van de overheid.',
              'Je belasting regel je via MyMinfin, met itsme of je eID.',
              'Vaak krijg je een voorstel van aangifte. Kijk het goed na.',
              'Vraag hulp bij het lezen. Dat kan vaak gratis.',
            ],
            rule: 'geschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.geld.3.wd1',
            situation: 'Wat doet Yonas met de brief?',
            options: [
              { id: 'a', text: "Hij laat hem liggen. Zo'n brief is meestal niks.", best: false, feedback: 'Soms wel. Er kan een datum in staan.' },
              { id: 'b', text: "Hij vraagt zijn vrienden of zij ook zo'n brief hebben.", best: false, feedback: 'Kan. Maar de brief gaat over zijn eigen geld.' },
              { id: 'c', text: 'Hij opent de brief, en hij vraagt hulp bij het lezen.', best: true, feedback: 'Goed. Misschien krijgt hij geld terug.' },
            ],
            why: 'Een brief van FOD Financiën, de RVA of het OCMW? Laat hem niet liggen. Vaak staat er een datum in. Vraag iemand die je vertrouwt om te helpen. FOD Financiën helpt ook gratis.',
          },
          // ⚖️ check: van je loon gaat elke maand bedrijfsvoorheffing af, een voorschot op je belasting; werk je maar een deel van het jaar, dan is dat voorschot vaak te hoog, en krijg je na de aangifte geld terug (FOD Financiën; bnpparibasfortis.be "loonfiche"; wikifin.be)
          {
            kind: 'truefalse',
            id: 'r.be.l.geld.3.tf1',
            statement: 'Werk je maar een paar maanden? Dan krijg je vaak belasting terug.',
            answer: true,
            why: 'Van je loon gaat elke maand bedrijfsvoorheffing af. Dat is een voorschot op je belasting. Werk je niet het hele jaar? Dan betaal je vaak te veel. Dat geld krijg je terug na je aangifte.',
          },
          // ⚖️ check: voorstel van vereenvoudigde aangifte: FOD Financiën vult je aangifte in; klopt alles, dan hoef je niets te doen; klopt het niet, dan pas je het aan vóór de datum in de brief (fin.belgium.be "belastingaangifte 2026"; wikifin.be "tips voor het invullen van je belastingaangifte")
          {
            kind: 'truefalse',
            id: 'r.be.l.geld.3.tf2',
            statement: 'Krijg je een voorstel van aangifte? Dan kijk je het goed na.',
            answer: true,
            why: 'Soms stuurt FOD Financiën een voorstel van aangifte. Daarin staat alles al ingevuld. Kijk het goed na. Klopt alles? Dan hoef je niets te doen. Klopt het niet? Pas het aan vóór de datum in de brief.',
          },
          { kind: 'model', id: 'r.be.l.geld.3.mo1', context: 'Je vraagt hulp bij een brief.', nl: 'Ik heb een brief van FOD Financiën. Wil je mij helpen met lezen?' },
        ],
      },
      {
        // Les 10.4 · Schulden: vroeg hulp vragen
        // Redactie: geen bedrag voor het deel van je loon dat beschermd is bij beslag: dat verandert elk jaar.
        id: 'r.be.l.geld.4',
        title: 'Schulden: vroeg hulp vragen',
        goal: 'Je vraagt vroeg hulp bij schulden. Je weet dat er gratis hulp is.',
        // ⚖️ check: schuldbemiddeling bij een erkende instelling (OCMW of CAW) is gratis (vlaanderen.be, modelovereenkomst schuldbemiddeling; erkenning door het Departement Zorg)
        remember: 'Geldzorgen? Vraag op tijd hulp. Bij het OCMW en het CAW is dat gratis.',
        // Wie kan je helpen: het OCMW (schuldbemiddeling) · het CAW · het justitiehuis (gratis eerste
        //   advies) · de collectieve schuldenregeling via de arbeidsrechtbank.
        help: ['ocmw', 'justitiehuis'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.geld.4.sc1',
            picture: 'Esra aan tafel met een stapel gesloten enveloppen. Op één staat in rood: "Aanmaning".',
            lines: [
              'Esra heeft een schuld bij haar gsm-bedrijf.',
              'Daarna komt er nog een rekening bij.',
              'En nog een.',
              'Ze opent de brieven niet meer.',
              'Ze schaamt zich.',
            ],
          },
          // ⚖️ check: het OCMW en het CAW kunnen erkend zijn als instelling voor schuldbemiddeling; die schuldbemiddeling is gratis (vlaanderen.be; samvzw.be)
          // ⚖️ check: bij beslag op je loon blijft een deel altijd voor jou: een deel van je loon is niet vatbaar voor beslag (Gerechtelijk Wetboek, art. 1409; bedragen jaarlijks geïndexeerd, daarom geen bedrag)
          {
            kind: 'rule',
            id: 'r.be.l.geld.4.ru1',
            emoji: '🆘',
            title: 'Geldzorgen? Vraag op tijd hulp. Bij het OCMW en het CAW is dat gratis.',
            body: [
              'Hoe eerder je hulp vraagt, hoe kleiner het probleem.',
              'Het OCMW en het CAW helpen gratis bij schulden. Dat heet schuldbemiddeling.',
              'Betaal eerst je huur, energie en water.',
              'Bij beslag blijft een deel van je loon altijd voor jou.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: schuldbemiddeling door een erkende instelling (OCMW, CAW) is gratis (vlaanderen.be, modelovereenkomst)
          {
            kind: 'whatdo',
            id: 'r.be.l.geld.4.wd1',
            situation: 'Esra weet niet meer hoe ze moet betalen. Wat kan Esra het beste doen?',
            options: [
              { id: 'a', text: 'Ze wacht tot ze meer verdient. Dan betaalt ze alles.', best: false, feedback: 'Dat snap ik. Maar schulden worden snel groter door extra kosten.' },
              { id: 'b', text: 'Ze vraagt nu hulp, bij het OCMW of bij het CAW.', best: true, feedback: 'Goed. Hoe eerder, hoe makkelijker.' },
              { id: 'c', text: 'Ze sluit snel een lening af om alles te betalen.', best: false, feedback: 'Dan heeft ze één schuld meer, vaak met hoge rente.' },
            ],
            why: 'Hoe eerder je hulp vraagt, hoe kleiner het probleem. Veel mensen hebben geldzorgen. Je bent niet alleen. Het OCMW en het CAW helpen gratis bij schulden.',
          },
          // ⚖️ check: bij beslag op je loon gaat een deel naar de schuld; een deel blijft altijd voor jou; het bedrag staat in de wet en hangt ook af van kinderen ten laste (Gerechtelijk Wetboek, art. 1409 en 1409bis; FOD Economie, nakijken)
          {
            kind: 'truefalse',
            id: 'r.be.l.geld.4.tf1',
            statement: 'Bij beslag op je loon houd je helemaal niets over.',
            answer: false,
            why: 'Bij beslag gaat een deel van je loon naar de schuld. Maar een deel blijft altijd voor jou. Dat bedrag staat in de wet. Heb je kinderen? Dan blijft er soms meer over. Kijk na of het klopt.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.geld.4.wd2',
            situation: 'Esra heeft nieuw werk. Ze wil haar schulden aanpakken. Wat kan Esra het beste doen?',
            options: [
              { id: 'a', text: 'Ze maakt een lijst: wat moet ze aan wie betalen?', best: true, feedback: 'Goed. Met een overzicht kan iemand haar helpen.' },
              { id: 'b', text: 'Ze betaalt eerst wie het vaakst belt of mailt.', best: false, feedback: 'Dat is logisch. Maar dat is niet altijd de belangrijkste.' },
              { id: 'c', text: 'Ze betaalt elke schuld een klein beetje tegelijk.', best: false, feedback: 'Goed bedoeld. Maar sommige rekeningen gaan voor.' },
            ],
            why: 'Begin met een overzicht: wat moet je aan wie? Betaal eerst je huur, energie en water. Een nieuwe lening maakt het vaak erger.',
          },
          // ⚖️ check: bij heel grote schulden bestaat de collectieve schuldenregeling: een procedure via de rechter (arbeidsrechtbank), niet gratis; het OCMW geeft advies (Gerechtelijk Wetboek, art. 1675/2 e.v.; vlaanderen.be "collectieve schuldenregeling")
          {
            kind: 'whoask',
            id: 'r.be.l.geld.4.wa1',
            question: 'Je hebt schulden. Waar krijg je gratis hulp?',
            options: [
              { id: 'a', who: 'hr', best: false, feedback: 'De personeelsdienst gaat over je werk. Hulp bij schulden krijg je ergens anders.' },
              { id: 'b', who: 'ocmw', best: true, feedback: 'Goed. Het OCMW helpt gratis bij schulden.' },
              { id: 'c', who: 'rva', best: false, feedback: 'De RVA gaat over werkloosheid, niet over schulden.' },
            ],
            why: 'Het OCMW helpt gratis bij schulden. Het CAW ook. Zijn je schulden heel groot? Dan bestaat er een regeling via de rechter. Het OCMW legt het je uit.',
          },
          { kind: 'model', id: 'r.be.l.geld.4.mo1', context: 'Je vraagt hulp bij schulden.', nl: 'Ik heb schulden. Ik wil graag hulp.' },
        ],
      },
      {
        // Les 10.5 · Je werk stopt: regel dit
        // Redactie: bij arbeidsmigranten hangen werk en huis soms aan één werkgever of kantoor. Stopt het
        //   werk, dan stopt er vaak meer tegelijk. Daarom deze les.
        id: 'r.be.l.geld.5',
        title: 'Je werk stopt: regel dit',
        goal: 'Je vraagt je C4 en kijkt je laatste loon na. Je regelt je huis, je ziekenfonds en je adres.',
        remember: 'Je werk stopt? Vraag je C4 en kijk je laatste loon na.',
        // Wie kan je helpen: het interimkantoor of de personeelsdienst · de gemeente (adres) · je
        //   ziekenfonds · een vakbond · het justitiehuis of het CAW (bij problemen met je huis).
        help: ['interimkantoor', 'hr', 'gemeente', 'ziekenfonds', 'vakbond'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.geld.5.sc1',
            picture: 'Piotr met een koffer in een kleine kamer. Op tafel ligt een brief van het interimkantoor.',
            lines: [
              'Piotr werkt via een interimkantoor in een magazijn.',
              'Hij is arbeider. Hij huurt een kamer via zijn werk.',
              'Zijn contract stopt over 2 weken.',
              'Hij wil weten wat hij moet regelen.',
            ],
          },
          // ⚖️ check: de werkgever geeft de C4 uiterlijk op de laatste werkdag (securex.be "het werkloosheidsbewijs C4")
          // ⚖️ check: een bediende krijgt bij het einde van het contract vertrekvakantiegeld van de werkgever; een arbeider krijgt zijn vakantiegeld het jaar erna van de vakantiekas of de RJV (socialsecurity.be, vakantiegeld DmfA; securex.be "wanneer is het vertrekvakantiegeld verschuldigd")
          // ⚖️ check: een huurcontract staat los van je arbeidscontract; daarin staat hoe lang je nog mag blijven (Vlaams Woninghuurdecreet 9 november 2018; nakijken voor kamers die bij het werk horen)
          // ⚖️ check: aangifte van een adreswijziging bij de gemeente binnen 8 werkdagen na de verhuis (vlaanderen.be "aangifte van adreswijziging")
          {
            kind: 'rule',
            id: 'r.be.l.geld.5.ru1',
            emoji: '📦',
            title: 'Je werk stopt? Vraag je C4 en kijk je laatste loon na.',
            body: [
              'Je baas geeft je een C4, op je laatste werkdag.',
              'Kijk je laatste loon na. Ben je bediende? Dan hoort er vakantiegeld bij.',
              'Ben je arbeider? Dan betaalt de vakantiekas je vakantiegeld het jaar erna.',
              'Huur je via je werk? In je huurcontract staat hoe lang je mag blijven.',
              'Verhuis je? Geef je nieuwe adres binnen 8 werkdagen door aan de gemeente.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: een arbeider (ook een interimkracht-arbeider) krijgt zijn vakantiegeld van de vakantiekas of de RJV, het jaar erna, vanaf mei (securex.be "vakantiegeld van de arbeiders"; socialsecurity.be; zie loon.ts)
          // ⚖️ check: een bediende krijgt bij vertrek vertrekvakantiegeld van de werkgever (securex.be "wanneer is het vertrekvakantiegeld verschuldigd")
          {
            kind: 'whatdo',
            id: 'r.be.l.geld.5.wd1',
            situation: 'Piotr krijgt zijn laatste loonbrief. Er staat geen vakantiegeld op. Wat kan Piotr het beste doen?',
            options: [
              { id: 'a', text: 'Hij vraagt het kantoor wanneer de vakantiekas betaalt.', best: true, feedback: 'Goed. Als arbeider krijgt hij het later.' },
              { id: 'b', text: 'Hij denkt: dat geld is nu weg, want ik stop.', best: false, feedback: 'Nee. Zijn vakantiegeld blijft van hem.' },
              { id: 'c', text: 'Hij vraagt het kantoor om het nu cash te betalen.', best: false, feedback: 'Dat gaat niet. Het geld komt van de vakantiekas.' },
            ],
            why: 'Ben je arbeider? Dan krijg je je vakantiegeld van de vakantiekas. Dat komt het jaar erna, meestal vanaf mei. Ben je bediende? Dan betaalt je baas het bij je laatste loon. Dat heet vertrekvakantiegeld.',
          },
          // ⚖️ check: een huurcontract staat los van het arbeidscontract; daarin staat de opzegtermijn (Vlaams Woninghuurdecreet 9 november 2018; nakijken voor kamers die bij het werk horen)
          // ⚖️ check: hulp bij problemen met je huis: het CAW of gratis eerste advies in het justitiehuis (vlaanderen.be/justitiehuizen; caw.be)
          {
            kind: 'truefalse',
            id: 'r.be.l.geld.5.tf1',
            statement: 'Woon je via je werk? Dan moet je altijd weg op je laatste werkdag.',
            answer: false,
            why: 'Huur je een kamer via je werk? Dan heb je vaak een eigen huurcontract. Daarin staat hoe lang je nog mag blijven. Dat heet de opzegtermijn. Vraag het op tijd na. Klopt het niet? Vraag hulp bij het CAW of het justitiehuis.',
          },
          // ⚖️ check: in België ben je voor je zorg verzekerd via je ziekenfonds (verplichte ziekteverzekering, wet 14 juli 1994); met een werkloosheidsuitkering blijf je meestal verzekerd (riziv.fgov.be; inami.fgov.be "beperking van werkloosheid in de tijd: impact op het recht op terugbetaalde zorg")
          // ⚖️ check: ga je terug naar je eigen land, vraag dan je ziekenfonds hoe je verzekering daar loopt (Europese verordening 883/2004; riziv.fgov.be)
          {
            kind: 'whatdo',
            id: 'r.be.l.geld.5.wd2',
            situation: 'Piotr blijft na zijn laatste werkdag in België. Hij zoekt nieuw werk. Wat kan Piotr het beste doen?',
            options: [
              { id: 'a', text: 'Hij doet niets. Zijn ziekenfonds weet het vast al.', best: false, feedback: 'Misschien niet. Dan klopt er later iets niet.' },
              { id: 'b', text: 'Hij wacht tot hij naar de dokter moet. Dan regelt hij het.', best: false, feedback: 'Te laat. Een dokter of ziekenhuis kan dan veel kosten.' },
              { id: 'c', text: 'Hij vraagt zijn ziekenfonds wat er verandert.', best: true, feedback: 'Goed. Zo weet hij zeker dat hij verzekerd blijft.' },
            ],
            why: 'In België ben je verzekerd via je ziekenfonds. Werk je niet meer? Laat het je ziekenfonds weten. Met een werkloosheidsuitkering blijf je meestal verzekerd. Ga je terug naar je land? Vraag hoe je verzekering daar loopt.',
          },
          // ⚖️ check: aangifte van een adreswijziging bij de gemeente binnen 8 werkdagen; online kan via Mijn Burgerprofiel, met itsme of je eID (vlaanderen.be "aangifte van adreswijziging")
          // ⚖️ check: ga je voor lange tijd naar het buitenland, dan meld je dat aan de gemeente (vlaanderen.be, verhuizen naar het buitenland)
          {
            kind: 'whoask',
            id: 'r.be.l.geld.5.wa1',
            question: 'Piotr verhuist nu zijn werk stopt. Waar geeft hij zijn nieuwe adres door?',
            options: [
              { id: 'a', who: 'interimkantoor', best: false, feedback: 'Het kantoor moet het ook weten. Maar je adres geef je door aan de gemeente.' },
              { id: 'b', who: 'gemeente', best: true, feedback: 'Goed. Je nieuwe adres geef je door aan de gemeente.' },
              { id: 'c', who: 'rva', best: false, feedback: 'Krijg je een uitkering? Dan moet je vakbond het ook weten. Maar eerst de gemeente.' },
            ],
            why: 'Verhuis je? Geef je nieuwe adres binnen 8 werkdagen door aan de gemeente. Dat kan ook online, met itsme of je eID. Ga je voor lange tijd weg uit België? Meld het dan ook aan de gemeente.',
          },
          { kind: 'model', id: 'r.be.l.geld.5.mo1', context: 'Je contract stopt, en je wilt weten wat je nog krijgt.', nl: 'Mijn contract stopt. Krijg ik mijn C4, en wanneer krijg ik mijn vakantiegeld?' },
        ],
      },
      {
        // Les 10.6 · Je geld per maand: vaste kosten en sparen
        // Redactie: geen bedrag voor de zorgpremie (in 2026: 100 euro per jaar, 35 euro met verhoogde
        //   tegemoetkoming ⚖️, vlaanderen.be "jaarlijkse zorgpremie").
        id: 'r.be.l.geld.6',
        title: 'Je geld per maand: vaste kosten en sparen',
        goal: 'Je betaalt eerst je vaste kosten. Je spaart elke maand een klein beetje.',
        remember: 'Eerst je vaste kosten. Dan een beetje sparen. Dan pas de rest.',
        // Wie kan je helpen: wikifin.be (gratis tips van de FSMA) · je bank · het OCMW of het CAW (als
        //   het niet lukt).
        help: ['ocmw', 'bank'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.geld.6.sc1',
            picture: 'Yonas op zijn bed met zijn telefoon. Op het scherm zijn bankapp: het loon staat erop.',
            lines: [
              'Yonas is 26. Hij werkt in een supermarkt.',
              'Zijn loon staat op zijn rekening.',
              'Er komt ook een brief van zijn zorgkas.',
              'Zijn vrienden willen dit weekend uit eten.',
            ],
          },
          // ⚖️ check: wie in Vlaanderen woont, sluit aan bij de Vlaamse sociale bescherming in het jaar dat hij 26 wordt, en betaalt daarna elk jaar een zorgpremie aan zijn zorgkas (vlaanderen.be "jaarlijkse zorgpremie voor de Vlaamse sociale bescherming"; bijgewerkt oktober 2026)
          {
            kind: 'rule',
            id: 'r.be.l.geld.6.ru1',
            emoji: '🐷',
            title: 'Eerst je vaste kosten. Dan een beetje sparen. Dan pas de rest.',
            body: [
              'Vaste kosten zijn kosten die elke maand terugkomen.',
              'Denk aan huur, energie en je gsm. Die betaal je eerst.',
              'Zet daarna elke maand een klein bedrag apart. Dat is je buffer.',
              'Woon je in Vlaanderen? Vanaf 26 jaar betaal je elk jaar een zorgpremie.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: zorgpremie: iedereen die in Vlaanderen woont, vanaf het jaar dat hij 26 wordt; betalen aan de zorgkas, die bij je ziekenfonds hoort; met verhoogde tegemoetkoming betaal je minder (vlaanderen.be "jaarlijkse zorgpremie"; vlaanderen.be "uw aansluiting bij de Vlaamse sociale bescherming"; bijgewerkt oktober 2026)
          // ⚖️ check: de Vlaamse sociale bescherming betaalt onder meer het zorgbudget voor ouderen en mensen met een zorgnood (vlaanderen.be)
          {
            kind: 'truefalse',
            id: 'r.be.l.geld.6.tf1',
            statement: 'Woon je in Vlaanderen? Vanaf 26 jaar betaal je elk jaar een zorgpremie.',
            answer: true,
            why: 'Iedereen in Vlaanderen betaalt vanaf 26 jaar een zorgpremie. Dat is geld voor zorg, bijvoorbeeld als je oud bent. Je betaalt het aan je zorgkas, bij je ziekenfonds. Heb je een laag inkomen? Dan betaal je soms minder.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.geld.6.wd1',
            situation: 'Yonas heeft zijn loon. Wat kan Yonas het beste doen?',
            options: [
              { id: 'a', text: 'Hij gaat eerst uit eten. Wat over is, gaat naar de rekeningen.', best: false, feedback: 'Dan is er misschien te weinig over voor de rekeningen.' },
              { id: 'b', text: 'Hij betaalt de rekeningen pas als er een herinnering komt.', best: false, feedback: 'Dan kost het vaak extra geld. Betaal op tijd.' },
              { id: 'c', text: 'Hij betaalt eerst de rekeningen. Dan spaart hij een beetje.', best: true, feedback: 'Goed. Wat dan over is, mag hij uitgeven.' },
            ],
            why: 'Betaal eerst je vaste kosten: huur, energie, je gsm. Zet daarna een klein bedrag apart. Wat dan over is, kun je uitgeven. Laat de vaste kosten automatisch betalen. Dan vergeet je niets.',
          },
          // ⚖️ check: op wikifin.be (van de FSMA) staan gratis tips en een budgetplanner (wikifin.be)
          {
            kind: 'whatdo',
            id: 'r.be.l.geld.6.wd2',
            situation: 'Yonas weet niet waar zijn geld blijft. Wat kan Yonas het beste doen?',
            options: [
              { id: 'a', text: 'Hij vraagt een lening, voor het geval dat.', best: false, feedback: 'Een lening moet hij terugbetalen, met rente. Dat maakt het erger.' },
              { id: 'b', text: 'Hij schrijft een maand op wat hij uitgeeft.', best: true, feedback: 'Goed. Dan ziet hij waar zijn geld heen gaat.' },
              { id: 'c', text: 'Hij kijkt maar niet meer in zijn bankapp.', best: false, feedback: 'Dat snap ik. Maar dan ziet hij een probleem te laat.' },
            ],
            why: 'Schrijf een maand op wat je uitgeeft. Of kijk in je bankapp. Dan zie je waar je geld heen gaat. Op wikifin.be staan gratis tips.',
          },
          // ⚖️ check: geen wettelijk feit: algemene raad over een buffer (wikifin.be, sparen)
          {
            kind: 'truefalse',
            id: 'r.be.l.geld.6.tf2',
            statement: 'Sparen heeft pas zin als je veel verdient.',
            answer: false,
            why: 'Ook een klein bedrag per maand helpt. Zo maak je een buffer. Dat is geld voor als er iets kapotgaat. Of als je werk stopt. Dan hoef je niet te lenen.',
          },
          { kind: 'model', id: 'r.be.l.geld.6.mo1', context: 'Je wilt elke maand een beetje sparen.', nl: 'Kan ik elke maand automatisch geld naar mijn spaarrekening zetten?' },
        ],
      },
      {
        // Les 10.7 · Kopen, abonnementen en ruilen
        id: 'r.be.l.geld.7',
        title: 'Kopen, abonnementen en ruilen',
        goal: 'Je weet dat later betalen ook lenen is. Je kent je rechten bij online kopen.',
        // ⚖️ check: online gekocht: meestal 14 dagen herroepingsrecht, vanaf de dag na ontvangst (Wetboek van economisch recht, boek VI, art. VI.47; FOD Economie; Europese richtlijn 2011/83/EU)
        remember: 'Online gekocht? Dan heb je meestal 14 dagen bedenktijd. Bewaar je ticket.',
        // Wie kan je helpen: het justitiehuis (gratis eerste advies) · de Consumentenombudsdienst ·
        //   bij een nepwebwinkel: de politie · bij betaalproblemen: het OCMW of het CAW.
        help: ['justitiehuis', 'politie', 'ocmw'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.geld.7.sc1',
            picture: 'Fatima in de zetel met haar telefoon. Op het scherm een knop: "Nu kopen, later betalen".',
            lines: [
              'Fatima koopt online een jas voor haar dochter.',
              'Bij het betalen staat: "Nu kopen, over 30 dagen betalen."',
              'Dat is makkelijk, denkt ze.',
              'Een week later komt de jas. Hij is te klein.',
            ],
          },
          // ⚖️ check: online gekocht: meestal binnen 14 dagen terugsturen (herroepingsrecht; Wetboek van economisch recht, art. VI.47; uitzonderingen, zoals iets op maat, art. VI.53)
          // ⚖️ check: later betalen is een vorm van krediet; betaal je te laat, dan komen er kosten bij (Wetboek van economisch recht, boek VII; wet 4 mei 2023 over minnelijke invordering, art. XIX.2 e.v.)
          // ⚖️ check: in een winkel ruilen is geen wettelijk recht: het is service van de winkel, behalve als het product kapot is (test-aankoop.be; algemene voorwaarden van winkels, zoals IKEA)
          // ⚖️ check: op een nieuw product van een verkoper heb je 2 jaar wettelijke garantie (oud Burgerlijk Wetboek, art. 1649bis e.v., gewijzigd bij wet 20 maart 2022; VRT NWS 29 mei 2026; europa.eu)
          {
            kind: 'rule',
            id: 'r.be.l.geld.7.ru1',
            emoji: '🛍️',
            title: 'Online gekocht? Dan heb je meestal 14 dagen bedenktijd. Bewaar je ticket.',
            body: [
              'Online gekocht? Dan mag je het meestal binnen 14 dagen terugsturen.',
              'Later betalen is ook lenen. Betaal je te laat? Dan komen er kosten bij.',
              'Is iets nieuws kapot? Dan heb je 2 jaar garantie.',
              'In een winkel ruilen mag alleen als de winkel het wil. Vraag het bij het kopen.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: in een winkel ruilen is geen wettelijk recht (test-aankoop.be); online heb je meestal 14 dagen bedenktijd (Wetboek van economisch recht, art. VI.47)
          {
            kind: 'truefalse',
            id: 'r.be.l.geld.7.tf1',
            statement: 'Een jas uit een gewone winkel mag je altijd ruilen.',
            answer: false,
            why: 'In een winkel ruilen is geen recht. Veel winkels doen het wel, met het ticket. Vraag het bij het kopen. Online is het anders. Dan heb je meestal 14 dagen bedenktijd.',
          },
          // ⚖️ check: 14 dagen om te melden dat je afziet van de koop, daarna 14 dagen om het terug te sturen (Wetboek van economisch recht, art. VI.47 en VI.49; FOD Economie, modelformulier)
          {
            kind: 'whatdo',
            id: 'r.be.l.geld.7.wd1',
            situation: 'De jas is te klein. Fatima kreeg hem 1 week geleden. Wat kan Fatima het beste doen?',
            options: [
              { id: 'a', text: 'Ze houdt de jas. Terugsturen kan toch niet meer.', best: false, feedback: 'Dat kan wel. Ze heeft meestal 14 dagen bedenktijd.' },
              { id: 'b', text: 'Ze meldt het, en stuurt de jas terug.', best: true, feedback: 'Goed. Dan hoeft ze de jas niet te betalen.' },
              { id: 'c', text: 'Ze betaalt de jas gewoon niet. Dan is het ook goed.', best: false, feedback: 'Dan komen er kosten bij. Stuur hem eerst netjes terug.' },
            ],
            why: 'Koop je iets online? Dan heb je meestal 14 dagen bedenktijd. Je mag het dan terugsturen. Meld het eerst bij de webwinkel, bijvoorbeeld per mail. Betaal je later? Zeg dan ook dat je het terugstuurt. Zo krijg je geen rekening.',
          },
          // ⚖️ check: een abonnement zeg je op zoals in je contract staat; een gsm- of internetabonnement kun je na de eerste 6 maanden zonder kosten opzeggen (wet 13 juni 2005 betreffende de elektronische communicatie, art. 111/3; BIPT; nakijken). Daarom noemt de les geen termijn.
          {
            kind: 'whatdo',
            id: 'r.be.l.geld.7.wd2',
            situation: 'Fatima betaalt elke maand voor een fitness. Ze gaat er nooit heen. Wat kan Fatima het beste doen?',
            options: [
              { id: 'a', text: 'Ze zegt het abonnement op. Ze kijkt wanneer het stopt.', best: true, feedback: 'Goed. Dan betaalt ze straks niet meer voor niets.' },
              { id: 'b', text: 'Ze laat het lopen. Misschien gaat ze nog een keer.', best: false, feedback: 'Dat snap ik. Maar zo betaalt ze elke maand voor niets.' },
              { id: 'c', text: 'Ze stopt de betaling bij de bank. Dan is het klaar.', best: false, feedback: 'Dan loopt het abonnement nog door. Dan krijgt ze een schuld.' },
            ],
            why: 'Kijk elke maand welke abonnementen je hebt. Gebruik je iets niet? Zeg het op. In je contract staat hoe dat gaat. Stop niet alleen de betaling. Dan krijg je een schuld.',
          },
          // ⚖️ check: juridische eerstelijnsbijstand: gratis eerste advies in het justitiehuis (vlaanderen.be/justitiehuizen); de Consumentenombudsdienst helpt bij een klacht, nadat je het zelf schriftelijk probeerde (consumentenombudsdienst.be; europa.eu); bij oplichting: aangifte bij de politie
          {
            kind: 'whoask',
            id: 'r.be.l.geld.7.wa1',
            question: 'Je stuurde iets terug. De webwinkel geeft je geld niet terug. Waar vraag je advies?',
            options: [
              { id: 'a', who: 'ocmw', best: false, feedback: 'Het OCMW helpt bij schulden. Niet bij ruzie met een winkel.' },
              { id: 'b', who: 'politie', best: false, feedback: 'De politie helpt bij oplichting. Bij ruzie met een winkel vraag je eerst advies.' },
              { id: 'c', who: 'justitiehuis', best: true, feedback: 'Goed. Daar krijg je gratis eerste advies over je rechten.' },
            ],
            why: 'Het justitiehuis geeft gratis eerste advies over je rechten. Klagen kan ook bij de Consumentenombudsdienst. Is de webwinkel nep? Ga dan naar de politie.',
          },
          { kind: 'model', id: 'r.be.l.geld.7.mo1', context: 'Je wilt iets terugsturen naar een webwinkel.', nl: 'Ik wil deze jas terugsturen. Hoe krijg ik mijn geld terug?' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.geld.1.mo1': [
      { text: 'Mijn contract stopt. Ik wacht wel tot er geld komt.', feedback: 'Een uitkering komt niet vanzelf. Je moet het zelf aanvragen.' },
      { text: 'Ik vraag mijn baas wel om de uitkering te regelen.', feedback: 'Je baas geeft je de C4. De aanvraag doe je zelf.' },
    ],
    'r.be.l.geld.2.mo1': [
      { text: 'Ik heb werk gevonden. Dat hoeft niemand te weten, toch?', feedback: 'Nieuw werk moet je doorgeven. Vraag wat het betekent.' },
      { text: 'Ik heb werk. Ik stop gewoon zelf met mijn leefloon.', feedback: 'Dan weet je niet wat je moet regelen. Vraag het eerst.' },
    ],
    'r.be.l.geld.3.mo1': [
      { text: 'Ik heb een brief van FOD Financiën. Ik gooi hem maar weg.', feedback: 'Dan mis je misschien iets belangrijks. Vraag om hulp.' },
      { text: 'Ik heb een brief gekregen. Kun je ergens mee helpen?', feedback: 'Dan weet de ander niet waarmee. Zeg van wie de brief is.' },
    ],
    'r.be.l.geld.4.mo1': [
      { text: 'Ik heb wat problemen. Het gaat wel.', feedback: 'Dan weet niemand dat het om schulden gaat.' },
      { text: 'Ik leen wel weer geld bij een vriend.', feedback: 'Dan worden je schulden groter. Vraag liever vroeg hulp.' },
    ],
    'r.be.l.geld.5.mo1': [
      { text: 'Mijn contract stopt. Ik heb geen papieren nodig, denk ik.', feedback: 'Je hebt je C4 nodig. Vraag er op tijd naar.' },
      { text: 'Mijn contract stopt. Ik krijg vast nog wel wat geld, denk ik.', feedback: 'Dan weet je niet wat je krijgt. Vraag het precies.' },
    ],
    'r.be.l.geld.6.mo1': [
      { text: 'Ik spaar wel. Maar alleen als er geld over is.', feedback: 'Vaak is er dan niets meer over. Spaar meteen na je loon.' },
      { text: 'Kan ik alvast geld lenen? Dan heb ik altijd genoeg.', feedback: 'Lenen is geen sparen. Je moet het terugbetalen, met rente.' },
    ],
    'r.be.l.geld.7.mo1': [
      { text: 'Die jas is te klein. Ik betaal hem dus ook niet.', feedback: 'Dan komen er kosten bij. Meld eerst dat je hem terugstuurt.' },
      { text: 'Jullie jassen zijn waardeloos! Ik wil nu mijn geld!', feedback: 'Dat klinkt boos. Vraag het rustig, dan helpen ze je sneller.' },
    ],
  },
  advice: {
    'r.be.l.geld.1.ru1': 'advice',
    'r.be.l.geld.2.ru1': 'advice',
    'r.be.l.geld.3.ru1': 'advice',
    'r.be.l.geld.4.ru1': 'advice',
    'r.be.l.geld.5.ru1': 'advice',
    'r.be.l.geld.6.ru1': 'advice',
    'r.be.l.geld.7.ru1': 'advice',
  },
  kun: [
    ['Ik kan een brief van de overheid lezen, ook in mijn eBox.', '1F', 'lezen'],
    ['Ik kan vragen hoe ik een uitkering aanvraag.', '1F', 'gesprekken'],
    ['Ik kan op tijd hulp vragen bij geldzorgen.', '1F', 'gesprekken'],
  ],
};
