import type { RuleUnit } from '../types';

/**
 * Sectorlessen, derde ronde (23 november 2026): de zes sectoren die die dag in "Waar werk je?"
 * kwamen (src/content/sectors.ts): Groen, Facilitair, Beveiliging, Voedingsindustrie, Afval en
 * recycling en Kinderopvang. Elk 2 korte lessen, zelfde vorm en niveau als de sectorunits in
 * ./sector.ts. Converted from docs/werkregels-curriculum.md, deel 9; edit the curriculum first,
 * then this file. The Taal twins: u.mowing/u.planting, u.frontdesk/u.maintenance,
 * u.guarding/u.incidents, u.foodhygiene/u.foodline, u.collection/u.recycling, u.toddlers/u.daycare
 * (src/content/work.ts), with their tips in src/content/workTips.ts.
 *
 * Their "Wat zeg je?" sentences are in ../zegHetData.ts, the advice lines in ../disclaimer.ts and
 * "Wat kun je nu?" in src/content/kunJeNu.ts, like those of the other units.
 *
 * `// ⚖️ check:` marks a fact the expert must check (docs/werkregels-bronnen.md, §7). The marker is
 * never shown or read aloud. `// Redactie:` notes are for the makers only. Opgezocht op 23 november
 * 2026 uit kennis van de wet en zoekresultaten; overheidssites zelf zijn niet geopend.
 */

// Sector groen · Werken in het groen (les G.1, G.2). Hoveniers, groenvoorziening en de
// plantsoenendienst van de gemeente. Sector Groen (sectors.ts `green`), Taal u.mowing en u.planting.
export const groenUnit: RuleUnit = {
  id: 'r.groen',
  title: 'Werken in het groen',
  emoji: '🌳',
  color: '#3f7d3a',
  lessons: [
    {
      // Les G.1 · Machines en de weg
      id: 'r.l.groen.1',
      title: 'Machines en de weg',
      goal: 'Je werkt veilig met de bosmaaier. Langs de weg draag je altijd je hesje.',
      remember: 'Maaien of zagen? Draag je beschermende spullen, en houd mensen op afstand.',
      // Wie kan je helpen: je leidinggevende of voorman · een ervaren collega · de
      //   preventiemedewerker · de Nederlandse Arbeidsinspectie.
      help: ['leidinggevende', 'collega', 'arbeidsinspectie'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.groen.1.sc1',
          picture: 'Malik met een bosmaaier in een park. Op het fietspad komt een vrouw met een kinderwagen aan.',
          lines: [
            'Malik werkt bij de groendienst van een gemeente.',
            'Hij maait het gras langs een fietspad.',
            'Met de bosmaaier gaat het snel.',
            'Er komt een vrouw met een kinderwagen aan.',
          ],
        },
        // ⚖️ check: Je werkgever geeft deze spullen gratis ⚖️ (persoonlijke beschermingsmiddelen,
        //   Arbobesluit art. 8.2 en 8.3: kosteloos).
        // ⚖️ check: Met een kettingzaag werk je alleen als je een cursus hebt gehad ⚖️ (Arbobesluit
        //   art. 7.3 en 7.5: voorlichting en opleiding bij arbeidsmiddelen met bijzondere gevaren;
        //   Arbocatalogus Hoveniers en Groenvoorzieners; veel bedrijven vragen het certificaat
        //   "Motorkettingzaag" of ECC). Redactie: geen naam van een certificaat in de tekst.
        {
          kind: 'rule',
          id: 'r.l.groen.1.ru1',
          emoji: '⛑️',
          title: 'Maaien of zagen? Draag je beschermende spullen, en houd mensen op afstand.',
          body: [
            'Een bosmaaier kan stenen ver en hard wegschieten.',
            'Draag een gelaatsscherm of bril, gehoorbescherming en veiligheidsschoenen.',
            'Je werkgever geeft deze spullen gratis.',
            'Komt er iemand dichtbij? Stop dan de machine.',
            'Met een kettingzaag werk je alleen als je een cursus hebt gehad.',
          ],
          rule: 'geschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.groen.1.wd1',
          situation: 'De vrouw met de kinderwagen komt dichtbij. Wat kan Malik het beste doen?',
          options: [
            { id: 'a', text: 'Hij maait door, maar een beetje langzamer.', best: false, feedback: 'Dat snap ik. Maar een steen kan toch ver vliegen.' },
            { id: 'b', text: 'Hij stopt de machine tot de vrouw voorbij is.', best: true, feedback: 'Goed. Zo raakt er niemand gewond.' },
            { id: 'c', text: 'Hij draait zich om, en maait de andere kant op.', best: false, feedback: 'Goed bedoeld. Maar stenen vliegen alle kanten op.' },
          ],
          why: 'Een steen uit de bosmaaier kan iemand ernstig verwonden. Komt er iemand dichtbij? Stop de machine.',
          whyMore: 'Loop het gras eerst na. Haal stenen, glas en takken weg. Houd andere mensen ver weg.',
        },
        // ⚖️ check: Werk alleen met een kettingzaag als je een cursus hebt gehad ⚖️ (Arbobesluit
        //   art. 7.3 en 7.5; Arbocatalogus Hoveniers en Groenvoorzieners).
        // ⚖️ check: Zaagbroek, helm met gelaatsscherm, gehoorbescherming, handschoenen ⚖️
        //   (Arbocatalogus; Arbobesluit art. 8.1: passende PBM). Nooit alleen met de kettingzaag ⚖️
        //   (Arbocatalogus: alleenwerken; Arbobesluit art. 3.19? nakijken).
        {
          kind: 'truefalse',
          id: 'r.l.groen.1.tf1',
          statement: 'Zonder cursus mag je even met de kettingzaag werken, als een collega kijkt.',
          answer: false,
          why: 'Een kettingzaag is heel gevaarlijk. Werk er alleen mee als je een cursus hebt gehad.',
          whyMore: 'En als je leidinggevende zegt dat het mag. Draag een zaagbroek, een helm met scherm en handschoenen. Werk nooit alleen met een kettingzaag.',
        },
        // ⚖️ check: Werk langs de weg: een hesje en pionnen, ook voor kort werk ⚖️ (CROW-publicatie
        //   96a en 96b, maatregelen bij werk in uitvoering; Arbobesluit art. 8.1: een
        //   veiligheidsvest met reflectie als PBM; de wegbeheerder bepaalt de maatregelen).
        {
          kind: 'whatdo',
          id: 'r.l.groen.1.wd2',
          situation: 'Malik moet één struik snoeien langs de weg. Het is maar 5 minuten werk. Wat kan Malik het beste doen?',
          options: [
            { id: 'a', text: 'Hij doet het snel zonder pionnen. Het is maar 5 minuten.', best: false, feedback: 'Dat snap ik. Maar een ongeluk gebeurt in 1 seconde.' },
            { id: 'b', text: 'Hij vraagt een collega om naar de auto’s te kijken.', best: false, feedback: 'Goed bedoeld. Maar zonder pionnen zien auto’s jullie niet op tijd.' },
            { id: 'c', text: 'Hij zet eerst pionnen neer, en doet zijn hesje aan.', best: true, feedback: 'Goed. Zo zien de auto’s hem op tijd.' },
          ],
          why: 'Werk langs de weg is gevaarlijk. Draag je hesje en zet de pionnen neer, ook voor kort werk.',
          whyMore: 'Blijf achter de pionnen. Zet de bus tussen jou en het verkeer, als dat kan.',
        },
        {
          kind: 'whoask',
          id: 'r.l.groen.1.wa1',
          question: 'Je moet met de kettingzaag werken. Je hebt nog geen cursus gehad. Tegen wie zeg je het?',
          options: [
            { id: 'a', who: 'collega', best: false, feedback: 'Een collega kan het je niet goed leren. Zeg het tegen je leidinggevende.' },
            { id: 'b', who: 'arbeidsinspectie', best: false, feedback: 'De Arbeidsinspectie controleert bedrijven. Zeg het eerst op je werk.' },
            { id: 'c', who: 'leidinggevende', best: true, feedback: 'Goed. Je leidinggevende regelt een cursus, of ander werk.' },
          ],
          why: 'Je leidinggevende zegt wie met de kettingzaag mag werken. Daar hoort een cursus bij.',
          whyMore: 'Vraag ook wie de cursus betaalt.',
        },
        { kind: 'model', id: 'r.l.groen.1.mo1', context: 'Een collega zegt: "Pak de kettingzaag maar." Je hebt nog geen cursus.', nl: 'Ik heb nog geen cursus voor de kettingzaag. Kan ik iets anders doen?' },
      ],
    },
    {
      // Les G.2 · Kabels, nesten en naalden
      id: 'r.l.groen.2',
      title: 'Kabels, nesten en naalden',
      goal: 'Je stopt als je een kabel of een nest vindt. Een naald pak je nooit met je hand.',
      remember: 'Een lint in de grond, een nest of een naald? Stop, en meld het.',
      // Wie kan je helpen: je leidinggevende of voorman · bij een prik: de huisarts of de
      //   huisartsenpost, meteen.
      help: ['leidinggevende', 'huisarts'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.groen.2.sc1',
          picture: 'Fatima in een tuin met een schop. In het gat ligt een rood plastic lint. De klant staat ernaast.',
          lines: [
            'Fatima werkt bij een hoveniersbedrijf.',
            'Ze graaft een gat voor een nieuwe boom.',
            'Haar schop raakt een rood lint in de grond.',
            'De klant zegt: "Graaf maar door, dat is niks."',
          ],
        },
        // ⚖️ check: Graaf je met een machine? Dan moet er eerst een KLIC-melding zijn ⚖️ (Wet
        //   informatie-uitwisseling bovengrondse en ondergrondse netten en netwerken (Wion), art. 2:
        //   een graafmelding bij het Kadaster vóór mechanisch graven; met de hand graven valt er
        //   meestal buiten, maar de zorgplicht blijft).
        // ⚖️ check: Een nest waar vogels in zitten, mag je niet weghalen ⚖️ (Omgevingswet, sinds 1
        //   januari 2024; Besluit activiteiten leefomgeving, hoofdstuk 11: verbod om nesten van
        //   vogels opzettelijk te vernielen of weg te nemen; vroeger Wet natuurbescherming art. 3.1).
        {
          kind: 'rule',
          id: 'r.l.groen.2.ru1',
          emoji: '🚫',
          title: 'Een lint in de grond, een nest of een naald? Stop, en meld het.',
          body: [
            'In de grond liggen kabels en leidingen voor stroom, gas en water.',
            'Zie je een lint, of raak je iets hards? Stop met graven, en meld het.',
            'Graaf je met een machine? Dan moet er eerst een KLIC-melding zijn.',
            'Een nest waar vogels in zitten, mag je niet weghalen.',
            'Een naald pak je nooit met je hand.',
          ],
          rule: 'geschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.groen.2.wd1',
          situation: 'Fatima ziet het rode lint. Wat kan Fatima het beste doen?',
          options: [
            { id: 'a', text: 'Ze stopt, en belt haar leidinggevende.', best: true, feedback: 'Goed. Een gasleiding of stroomkabel raken is heel gevaarlijk.' },
            { id: 'b', text: 'Ze graaft voorzichtig verder, naast het lint.', best: false, feedback: 'Dat snap ik. Maar onder het lint ligt een kabel of leiding.' },
            { id: 'c', text: 'Ze doet wat de klant zegt. Het is zijn tuin.', best: false, feedback: 'De klant weet niet wat er onder de grond ligt.' },
          ],
          why: 'Een lint in de grond waarschuwt: hieronder ligt een kabel of leiding. Stop met graven, en meld het.',
          whyMore: 'Een gasleiding of stroomkabel raken is heel gevaarlijk. Graaf nooit met kracht door.',
        },
        // ⚖️ check: Een nest dat in gebruik is, is beschermd ⚖️ (Omgevingswet; Bal hoofdstuk 11;
        //   de zorgplicht voor dieren). Redactie: "in het voorjaar" zonder datum; het broedseizoen
        //   is geen vaste wettelijke periode.
        {
          kind: 'truefalse',
          id: 'r.l.groen.2.tf1',
          statement: 'In het voorjaar mag je een heg met een vogelnest erin gewoon knippen.',
          answer: false,
          why: 'Een nest waar vogels in broeden of jongen hebben, is beschermd. Knip daar niet.',
          whyMore: 'Kijk in het voorjaar en de zomer eerst in de heg. Zie je een nest? Zeg het tegen je leidinggevende.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.groen.2.wd2',
          situation: 'Fatima ziet een naald in het gras, bij een bankje. Wat kan Fatima het beste doen?',
          options: [
            { id: 'a', text: 'Ze pakt hem op met haar handschoenen aan, en gooit hem weg.', best: false, feedback: 'Een naald gaat door een handschoen heen.' },
            { id: 'b', text: 'Ze gebruikt de grijper en een harde bak.', best: true, feedback: 'Goed. Zo raakt niemand de naald.' },
            { id: 'c', text: 'Ze laat hem liggen. Iemand anders ruimt hem wel op.', best: false, feedback: 'Dan kan een kind of een hond zich prikken.' },
          ],
          why: 'Een naald kan een ziekte overbrengen. Pak hem nooit met je hand, ook niet met handschoenen.',
          whyMore: 'Doe hem in een harde bak met een deksel, nooit in een vuilniszak. Zeg het tegen je leidinggevende.',
        },
        // ⚖️ check: Na een prik moet je snel naar een dokter; soms zijn binnen een paar uur medicijnen
        //   nodig ⚖️ (LCI-richtlijn "Accidenteel bloedcontact" van het RIVM: zo snel mogelijk,
        //   bij voorkeur binnen 2 uur beoordelen; PEP tegen hiv het liefst binnen enkele uren).
        //   Redactie: geen getal in de tekst.
        {
          kind: 'whoask',
          id: 'r.l.groen.2.wa1',
          question: 'Je hebt je geprikt aan een naald in het park. Wie bel je meteen?',
          options: [
            { id: 'a', who: 'collega', best: false, feedback: 'Een collega kan je niet behandelen. Bel eerst een dokter.' },
            { id: 'b', who: 'huisarts', best: true, feedback: 'Goed. Een dokter kijkt of je snel medicijnen nodig hebt.' },
            { id: 'c', who: 'gemeente', best: false, feedback: 'De gemeente kan daar niets aan doen. Bel eerst een dokter.' },
          ],
          why: 'Na een prik moet je snel naar een dokter. Soms heb je binnen een paar uur medicijnen nodig.',
          whyMore: 'Spoel de wond eerst met veel water. Zeg het daarna ook tegen je leidinggevende. Avond of weekend? Bel de huisartsenpost.',
        },
        { kind: 'model', id: 'r.l.groen.2.mo1', context: 'Je schop raakt een lint in de grond. Je belt je leidinggevende.', nl: 'Ik heb een lint in de grond geraakt. Ik ben gestopt met graven.' },
      ],
    },
  ],
};

// Sector facilitair · Werken in de facilitaire dienst (les F.1, F.2). Receptie, post, vergaderzalen,
// storingen en klein onderhoud; schoonmaak hoort bij r.clean. Sector Facilitair (sectors.ts
// `facility`), Taal u.frontdesk en u.maintenance.
export const facilitairUnit: RuleUnit = {
  id: 'r.facilitair',
  title: 'Werken in de facilitaire dienst',
  emoji: '🛎️',
  color: '#4a6fa5',
  lessons: [
    {
      // Les F.1 · Bezoek, post en privacy
      id: 'r.l.facilitair.1',
      title: 'Bezoek, post en privacy',
      goal: 'Je ontvangt bezoek vriendelijk. Je geeft geen gegevens van collega’s aan vreemden.',
      remember: "Elke bezoeker meldt zich. Gegevens van collega's geef je niet zomaar.",
      // Wie kan je helpen: je leidinggevende · een ervaren collega · de privacymedewerker
      //   (functionaris gegevensbescherming) van het bedrijf.
      help: ['leidinggevende', 'collega'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.facilitair.1.sc1',
          picture: 'Nadia achter de balie van een groot kantoor, met de telefoon aan haar oor. Op de balie ligt een bezoekerslijst.',
          lines: [
            'Nadia werkt bij de receptie van een groot kantoor.',
            'De telefoon gaat.',
            'Een man zegt: "Ik ben een oude vriend van Henk."',
            '"Mag ik zijn mobiele nummer?"',
          ],
        },
        // ⚖️ check: Telefoonnummers, adressen en roosters van collega's zijn privé ⚖️ (AVG, art. 5
        //   en 6: persoonsgegevens alleen met een grondslag en voor een doel; doorgeven aan een
        //   onbekende is een datalek, art. 4 punt 12).
        // Redactie: aanmelden en de bezoekerspas zijn huisregels, geen wet. "Belangrijk bij brand":
        //   de bedrijfshulpverlening moet bij ontruiming weten wie er binnen is ⚖️ (Arbowet art. 15).
        {
          kind: 'rule',
          id: 'r.l.facilitair.1.ru1',
          emoji: '🪪',
          title: "Elke bezoeker meldt zich. Gegevens van collega's geef je niet zomaar.",
          body: [
            'Elke bezoeker schrijft zijn naam op, en krijgt een bezoekerspas.',
            'Zo weet je wie er binnen is. Dat is belangrijk bij brand.',
            "Telefoonnummers, adressen en roosters van collega's zijn privé.",
            'Post en pakjes voor een ander maak je nooit open.',
          ],
          rule: 'geschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.facilitair.1.wd1',
          situation: 'De man wil het mobiele nummer van Henk. Wat kan Nadia het beste doen?',
          options: [
            { id: 'a', text: 'Ze geeft het nummer. Het is een vriend van Henk.', best: false, feedback: 'Dat snap ik. Maar ze weet niet of dat waar is.' },
            { id: 'b', text: 'Ze schrijft zijn naam en nummer op voor Henk.', best: true, feedback: 'Goed. Dan beslist Henk zelf of hij terugbelt.' },
            { id: 'c', text: 'Ze zegt niets, en hangt meteen op.', best: false, feedback: 'Dat is onvriendelijk. Ze kan hem ook netjes helpen.' },
          ],
          why: 'Het nummer van een collega is privé. Geef het niet aan iemand die je niet kent.',
          whyMore: 'Vraag de naam en het nummer van de beller. Dan kan je collega zelf terugbellen.',
        },
        // ⚖️ check: Bij een ontruiming moet bekend zijn wie er binnen is ⚖️ (Arbowet art. 15,
        //   bedrijfshulpverlening; het ontruimingsplan van het gebouw). Aanmelden is een huisregel.
        {
          kind: 'truefalse',
          id: 'r.l.facilitair.1.tf1',
          statement: 'Elke bezoeker meldt zich, ook als hij je collega goed kent.',
          answer: true,
          why: 'Elke bezoeker meldt zich. Bij brand moet je weten wie er binnen is.',
          whyMore: 'Laat ook niemand achter je mee naar binnen lopen die je niet kent. Vraag vriendelijk bij wie hij moet zijn.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.facilitair.1.wd2',
          situation: 'Een koerier brengt een pakket. Eén hoek is nat en kapot. Wat kan Nadia het beste doen?',
          options: [
            { id: 'a', text: 'Ze tekent snel. De koerier heeft haast.', best: false, feedback: 'Dat snap ik. Maar dan lijkt het of het pakket goed was.' },
            { id: 'b', text: 'Ze maakt het pakket open om te kijken.', best: false, feedback: 'Post voor een ander maak je niet open.' },
            { id: 'c', text: 'Ze schrijft op dat het kapot is, en tekent dan.', best: true, feedback: 'Goed. Zo weet iedereen dat het al kapot was.' },
          ],
          why: 'Kijk naar een pakket voor je tekent. Is het kapot? Schrijf het op.',
          whyMore: 'Ruikt een pakket raar, of lekt het? Maak het niet open, en zeg het tegen je leidinggevende.',
        },
        { kind: 'model', id: 'r.l.facilitair.1.mo1', context: 'Iemand belt en vraagt het nummer van een collega.', nl: 'Dat nummer mag ik niet geven. Zal ik vragen of ze u terugbelt?' },
      ],
    },
    {
      // Les F.2 · Storingen, trappen en gas
      id: 'r.l.facilitair.2',
      title: 'Storingen, trappen en gas',
      goal: 'Je meldt storingen en lekken meteen. Je werkt op hoogte met een trap.',
      remember: 'Iets kapot? Meld het. Repareer alleen wat je geleerd hebt.',
      // Wie kan je helpen: je leidinggevende · de storingsdienst of de technische dienst van het
      //   gebouw · een ervaren collega.
      help: ['leidinggevende', 'collega'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.facilitair.2.sc1',
          picture: 'Jayden in de gang van een school, onder een kapotte lamp. Naast hem staat een bureaustoel op wieltjes.',
          lines: [
            'Jayden werkt bij de facilitaire dienst van een school.',
            'In de gang is een lamp kapot.',
            'De trap staat op een andere verdieping.',
            'Naast de lamp staat een bureaustoel.',
          ],
        },
        // ⚖️ check: Werk niet zelf aan stroom, gas of verwarming ⚖️ (Arbobesluit art. 3.5 en NEN
        //   3140: alleen voldoende onderricht of vakbekwaam; gas: een erkend installateur).
        // ⚖️ check: Voor werk op hoogte een trap, nooit een stoel ⚖️ (Arbobesluit art. 7.23 en
        //   7.23a: ladders en trappen alleen als ze geschikt en stabiel zijn; Arbocatalogus).
        {
          kind: 'rule',
          id: 'r.l.facilitair.2.ru1',
          emoji: '🛠️',
          title: 'Iets kapot? Meld het. Repareer alleen wat je geleerd hebt.',
          body: [
            'Zie je een lek, een kapotte lamp of een deur die niet sluit? Meld het.',
            'Werk niet zelf aan stroom, gas of verwarming. Dat doet een vakman.',
            'Voor een hoge plank of lamp gebruik je een trap, nooit een stoel.',
            'Ruik je gas? Gebruik geen schakelaar. Haal iedereen weg, en bel buiten om hulp.',
          ],
          rule: 'geschreven',
        },
        // ⚖️ check: Een trap moet stabiel staan; niet op de bovenste tree ⚖️ (Arbobesluit art. 7.23a;
        //   de gebruiksaanwijzing van de trap).
        {
          kind: 'whatdo',
          id: 'r.l.facilitair.2.wd1',
          situation: 'Jayden wil de lamp snel vervangen. Wat kan Jayden het beste doen?',
          options: [
            { id: 'a', text: 'Hij gaat op de bureaustoel staan. Het is maar even.', best: false, feedback: 'Dat snap ik. Maar een bureaustoel kan wegrollen.' },
            { id: 'b', text: 'Hij haalt eerst de trap van de andere verdieping.', best: true, feedback: 'Goed. Op een trap sta je stevig.' },
            { id: 'c', text: 'Hij vraagt een collega om de stoel vast te houden.', best: false, feedback: 'Goed bedoeld. Maar ook dan kan de stoel draaien.' },
          ],
          why: 'Een stoel kan wegrollen of omvallen. Gebruik voor werk op hoogte altijd een trap.',
          whyMore: 'Zet de trap op een vlakke vloer, helemaal open. Ga niet op de bovenste tree staan. Doe eerst het licht uit.',
        },
        // Redactie: geen wet; "meld het meteen" is goed werknemerschap en de huisregel.
        // ⚖️ check: Melden is geen wettelijke plicht voor een klein lek; de werkgever moet wel zorgen
        //   voor een veilige werkplek ⚖️ (Arbowet art. 3). Alleen voor de duidelijkheid genoteerd.
        {
          kind: 'truefalse',
          id: 'r.l.facilitair.2.tf1',
          statement: 'Een kleine lekkage meld je meteen, ook als het nog niet erg is.',
          answer: true,
          why: 'Een klein lek kan grote schade worden. Meld het meteen, ook als het klein is.',
          whyMore: 'Zeg waar het is, wat je ziet en sinds wanneer. Druppelt het? Zet er een emmer onder.',
        },
        // ⚖️ check: Ruik je gas? Geen schakelaar, geen telefoon in de buurt, ramen open, mensen weg,
        //   buiten bellen ⚖️ (Netbeheer Nederland, "Gaslucht": gaslucht melden bij 0800-9009; bij
        //   direct gevaar 112). Redactie: geen nummer in de tekst.
        {
          kind: 'truefalse',
          id: 'r.l.facilitair.2.tf2',
          statement: 'Ruik je gas in het gebouw? Dan doe je eerst het licht aan om te kijken.',
          answer: false,
          why: 'Een vonk van een schakelaar kan gas laten ontploffen. Gebruik daar geen schakelaar en geen telefoon.',
          whyMore: 'Zet ramen en deuren open. Haal iedereen naar buiten. Bel buiten om hulp.',
        },
        {
          kind: 'whoask',
          id: 'r.l.facilitair.2.wa1',
          question: 'Een stopcontact in de kantine geeft vonken. Tegen wie zeg je het?',
          options: [
            { id: 'a', who: 'leidinggevende', best: true, feedback: 'Goed. Je leidinggevende laat het maken door iemand die dat mag.' },
            { id: 'b', who: 'collega', best: false, feedback: 'Waarschuw je collega’s gerust. Maar zeg het ook tegen je leidinggevende.' },
            { id: 'c', who: 'gemeente', best: false, feedback: 'De gemeente gaat niet over het gebouw. Zeg het op je werk.' },
          ],
          why: 'Een kapot stopcontact is gevaarlijk. Je leidinggevende laat het maken door iemand die dat mag.',
          whyMore: 'Plak er een briefje op: niet gebruiken. Repareer het niet zelf.',
        },
        { kind: 'model', id: 'r.l.facilitair.2.mo1', context: 'Je ziet water uit het plafond druppelen in de gang.', nl: 'In de gang druppelt water uit het plafond. Ik heb er een emmer onder gezet.' },
      ],
    },
  ],
};

// Sector beveiliging · Werken in de beveiliging (les BV.1, BV.2; lesletters BV, want B is al van de
// bouw). Sector Beveiliging (sectors.ts `security`), Taal u.guarding en u.incidents.
export const beveiligingUnit: RuleUnit = {
  id: 'r.beveiliging',
  title: 'Werken in de beveiliging',
  emoji: '🛡️',
  color: '#34495e',
  lessons: [
    {
      // Les BV.1 · Je pas en je ronde
      id: 'r.l.beveiliging.1',
      title: 'Je pas en je ronde',
      goal: 'Je werkt alleen met een geldige beveiligerspas. Op je ronde kijk je, en je meldt.',
      remember: 'Zie je inbraak of gevaar op je ronde? Ga niet alleen naar binnen. Meld het.',
      // Wie kan je helpen: je leidinggevende of de meldkamer van je beveiligingsbedrijf · bij
      //   gevaar de politie (112).
      help: ['leidinggevende', 'politie'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.beveiliging.1.sc1',
          picture: 'Kevin in uniform met een zaklamp bij een loods op een bedrijventerrein, in het donker. Een deur staat open.',
          lines: [
            'Kevin werkt sinds een week als beveiliger.',
            "Hij loopt 's nachts een ronde over een bedrijventerrein.",
            'Bij een loods staat een deur open.',
            'Binnen hoort hij geluid.',
          ],
        },
        // ⚖️ check: Als beveiliger heb je een diploma en een beveiligerspas nodig ⚖️ (Wet
        //   particuliere beveiligingsorganisaties en recherchebureaus (Wpbr) art. 7: toestemming
        //   van de korpschef na screening; Regeling particuliere beveiligingsorganisaties en
        //   recherchebureaus: het diploma Beveiliger 2, een leerling mag tijdelijk werken met een
        //   leerlingenpas). Redactie: "een diploma" zonder naam.
        // ⚖️ check: Die pas heb je altijd bij je, en je laat hem zien als iemand erom vraagt ⚖️
        //   (Wpbr art. 7 lid 2; de Regeling: legitimatiebewijs dragen en tonen).
        {
          kind: 'rule',
          id: 'r.l.beveiliging.1.ru1',
          emoji: '🪪',
          title: 'Zie je inbraak of gevaar op je ronde? Ga niet alleen naar binnen. Meld het.',
          body: [
            'Als beveiliger heb je een diploma en een beveiligerspas nodig.',
            'Die pas heb je altijd bij je. Je laat hem zien als iemand erom vraagt.',
            'Op je ronde kijk je, je schrijft op en je meldt.',
            'Zie je inbraak of gevaar? Bel de meldkamer of de politie.',
          ],
          rule: 'geschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.beveiliging.1.wd1',
          situation: 'Kevin hoort geluid in de loods. Wat kan Kevin het beste doen?',
          options: [
            { id: 'a', text: 'Hij gaat naar binnen en roept: "Beveiliging!"', best: false, feedback: 'Dat snap ik. Maar binnen kan iemand gevaarlijk zijn.' },
            { id: 'b', text: 'Hij doet de deur dicht, en loopt zijn ronde verder.', best: false, feedback: 'Dan weet niemand wat er aan de hand is.' },
            { id: 'c', text: 'Hij belt de meldkamer, en wacht op een veilige plek.', best: true, feedback: 'Goed. Zo blijft hij veilig, en komt er hulp.' },
          ],
          why: 'Je eigen veiligheid gaat voor. Je taak is kijken en melden, niet zelf de held spelen.',
          whyMore: 'Bel de meldkamer of de politie. Wacht op een veilige plek tot er hulp is. Schrijf op wat je zag, en hoe laat.',
        },
        // ⚖️ check: Zonder geldige beveiligerspas mag je niet als beveiliger werken ⚖️ (Wpbr art. 7:
        //   toestemming van de korpschef; de pas is het bewijs). De screening doet de politie ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.beveiliging.1.tf1',
          statement: 'Je mag al als beveiliger werken, ook als je pas nog niet klaar is.',
          answer: false,
          why: 'Zonder geldige beveiligerspas mag je niet als beveiliger werken.',
          whyMore: 'De pas krijg je na een controle door de politie. Vraag je werkgever hoe ver je aanvraag is.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.beveiliging.1.wd2',
          situation: 'Een man zegt: "Ik ben de nieuwe directeur. Ik heb nog geen pas." Wat kan Kevin het beste doen?',
          options: [
            { id: 'a', text: 'Hij zegt vriendelijk dat hij het even nakijkt.', best: true, feedback: 'Goed. Een echte directeur begrijpt dat.' },
            { id: 'b', text: 'Hij laat hem binnen. Een directeur wil je niet boos maken.', best: false, feedback: 'Dat snap ik. Maar iedereen kan zeggen dat hij directeur is.' },
            { id: 'c', text: 'Hij stuurt hem weg. Zonder pas komt niemand binnen.', best: false, feedback: 'Dat is streng. Eerst nakijken is beter.' },
          ],
          why: 'Iedereen kan zeggen dat hij de baas is. Kijk het na, ook als iemand haast heeft.',
          whyMore: 'Volg de regels van het gebouw. Bel bijvoorbeeld de afdeling waar hij heen moet.',
        },
        { kind: 'model', id: 'r.l.beveiliging.1.mo1', context: 'Op je ronde zie je een deur open staan. Je belt de meldkamer.', nl: 'Ik ben op ronde. Bij loods 3 staat een deur open. Ik hoor binnen geluid.' },
      ],
    },
    {
      // Les BV.2 · Diefstal, geweld en je verslag
      id: 'r.l.beveiliging.2',
      title: 'Diefstal, geweld en je verslag',
      goal: 'Je weet wat je wel en niet mag bij diefstal. Na een incident schrijf je meteen een verslag.',
      remember: 'Zie je diefstal? Bel de politie. Fouilleer niemand, en gebruik geen grof geweld.',
      // Wie kan je helpen: je leidinggevende · de politie · na een incident: de bedrijfsarts of
      //   de opvang van je werkgever.
      help: ['leidinggevende', 'politie', 'bedrijfsarts'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.beveiliging.2.sc1',
          picture: 'Esra in uniform in een supermarkt, bij de uitgang. Een vrouw met een grote tas loopt langs de kassa’s.',
          lines: [
            'Esra werkt als beveiliger in een supermarkt.',
            'Ze ziet een vrouw een fles in haar tas doen.',
            'De vrouw loopt zonder te betalen naar de uitgang.',
            'Een klant roept: "Kijk in haar tas!"',
          ],
        },
        // ⚖️ check: Iedereen mag iemand die op heterdaad betrapt wordt aanhouden, ook een beveiliger,
        //   en moet hem meteen aan de politie overdragen ⚖️ (Wetboek van Strafvordering art. 53:
        //   "onverwijld overleveren"; vanaf 2029? het nieuwe Wetboek van Strafvordering, nakijken).
        // ⚖️ check: Fouilleren mag een beveiliger niet ⚖️ (alleen opsporingsambtenaren, Sv art. 56;
        //   bij een evenement soms een visitatie met toestemming van de bezoeker).
        // ⚖️ check: Niet meer kracht dan nodig; nooit een nekklem ⚖️ (proportionaliteit en
        //   subsidiariteit, Sv art. 53 en Sr art. 41 noodweer; de geweldsinstructie van de
        //   Regeling Wpbr; de nekklem is ook voor de politie verboden, nakijken voor beveiligers).
        {
          kind: 'rule',
          id: 'r.l.beveiliging.2.ru1',
          emoji: '👮',
          title: 'Zie je diefstal? Bel de politie. Fouilleer niemand, en gebruik geen grof geweld.',
          body: [
            'Zie je iemand stelen? Dan mag je hem vasthouden tot de politie er is.',
            'Bel meteen de politie. Je werkgever kan ook zeggen: alleen kijken en melden.',
            'Iemands zakken of tas doorzoeken heet fouilleren. Dat doet alleen de politie.',
            'Gebruik niet meer kracht dan nodig. Nooit slaan, en nooit iemand bij de nek pakken.',
          ],
          rule: 'geschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.beveiliging.2.wd1',
          situation: 'Esra houdt de vrouw bij de uitgang staande. Wat kan Esra het beste doen?',
          options: [
            { id: 'a', text: 'Ze pakt de tas, en kijkt of de fles erin zit.', best: false, feedback: 'Dat snap ik. Maar in een tas kijken mag alleen de politie.' },
            { id: 'b', text: 'Ze vraagt de vrouw mee te komen, en belt de politie.', best: true, feedback: 'Goed. De politie neemt het dan over.' },
            { id: 'c', text: 'Ze duwt de vrouw tegen de muur, zodat ze niet wegloopt.', best: false, feedback: 'Zo kan de vrouw gewond raken. Dat is te veel geweld.' },
          ],
          why: 'Doorzoeken mag alleen de politie. Bel de politie, en houd het rustig.',
          whyMore: 'Volg de regels van je werkgever. Sommige winkels willen dat je alleen kijkt en meldt. Gebruik nooit meer kracht dan nodig.',
        },
        // ⚖️ check: Fouilleren mag alleen de politie ⚖️ (Sv art. 56). Een tassencontrole bij de
        //   ingang van een evenement mag alleen met toestemming van de bezoeker ⚖️ (de bezoeker
        //   mag weigeren, en dan de toegang missen; Regeling Wpbr, nakijken).
        {
          kind: 'truefalse',
          id: 'r.l.beveiliging.2.tf1',
          statement: 'Een beveiliger mag de zakken van een dief doorzoeken.',
          answer: false,
          why: 'Zakken of een tas doorzoeken heet fouilleren. Dat mag alleen de politie.',
          whyMore: 'Bij een evenement kijken beveiligers soms in tassen. Dat mag alleen als de bezoeker het goed vindt.',
        },
        // Redactie: geen wet; een goed verslag is de vakregel (en vaak een eis van de opdrachtgever).
        // ⚖️ check: Een verslag kan later bewijs zijn voor de politie of de rechter ⚖️ (alleen in de
        //   whyMore als "helpt de politie"; geen bewering over bewijsrecht).
        {
          kind: 'truefalse',
          id: 'r.l.beveiliging.2.tf2',
          statement: 'Een verslag van een incident schrijf je het best meteen, niet de volgende dag.',
          answer: true,
          why: 'Meteen weet je nog precies wat je zag en hoorde. Morgen vergeet je dingen.',
          whyMore: 'Schrijf feiten op: wat, waar, hoe laat en wie. Niet wat je denkt. Een goed verslag helpt de politie, je bedrijf en jou.',
        },
        // ⚖️ check: Je werkgever moet zorgen voor opvang na agressie of geweld ⚖️ (Arbobesluit art.
        //   2.15: beleid tegen agressie en geweld, met maatregelen en nazorg; Arbowet art. 3 lid 2).
        {
          kind: 'whoask',
          id: 'r.l.beveiliging.2.wa1',
          question: 'Na een incident met een boze man slaap je slecht. Tegen wie zeg je het?',
          options: [
            { id: 'a', who: 'politie', best: false, feedback: 'De politie gaat over het incident zelf, niet over hoe jij je voelt.' },
            { id: 'b', who: 'leidinggevende', best: true, feedback: 'Goed. Je werkgever moet zorgen voor hulp na een incident.' },
            { id: 'c', who: 'gemeente', best: false, feedback: 'De gemeente gaat niet over je werk. Zeg het op je werk.' },
          ],
          why: 'Je werkgever moet zorgen voor opvang na agressie of geweld. Zeg het tegen je leidinggevende.',
          whyMore: 'Je kunt ook naar de bedrijfsarts. Slecht slapen na een incident gebeurt vaak. Praat erover.',
        },
        { kind: 'model', id: 'r.l.beveiliging.2.mo1', context: 'Je houdt een vrouw staande die iets heeft gestolen. Je belt de politie.', nl: 'Ik heb bij de uitgang iemand aangehouden voor diefstal. Kunnen jullie komen?' },
      ],
    },
  ],
};

// Sector voedingsindustrie · Werken in de voedingsindustrie (les V.1, V.2). Fabrieken die eten
// maken, verpakken of koelen. Sector Voedingsindustrie (sectors.ts `food`), Taal u.foodhygiene en
// u.foodline. Redactie: de horeca heeft r.horeca (HACCP in de keuken); dit is de fabriek.
export const voedingUnit: RuleUnit = {
  id: 'r.voeding',
  title: 'Werken in de voedingsindustrie',
  emoji: '🥫',
  color: '#b5651d',
  lessons: [
    {
      // Les V.1 · De hygiënesluis en ziek zijn
      id: 'r.l.voeding.1',
      title: 'De hygiënesluis en ziek zijn',
      goal: 'Je gaat elke keer door de hygiënesluis. Ziek of een wond? Je meldt het voor je begint.',
      remember: 'Door de sluis, elke keer. Ziek of een wond? Meld het voor je begint.',
      // Wie kan je helpen: je leidinggevende of ploegleider · de kwaliteitsdienst (QA) · de
      //   bedrijfsarts.
      help: ['leidinggevende', 'bedrijfsarts'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.voeding.1.sc1',
          picture: 'Ewa met haarnet en witte werkkleding in de gang naar de hygiënesluis van een saladefabriek.',
          lines: [
            'Ewa werkt in een fabriek die salades maakt.',
            'Ze komt terug van de wc.',
            'Het is druk aan de lijn.',
            'Een collega zegt: "Sla de sluis maar over. We hebben haast."',
          ],
        },
        // ⚖️ check: Persoonlijke hygiëne: schone kleding, haar bedekt, handen wassen ⚖️ (Verordening
        //   (EG) 852/2004, bijlage II, hoofdstuk VIII lid 1; de hygiënecode van de branche).
        // ⚖️ check: Diarree, overgeven of een besmette wond: meld het voor je begint ⚖️ (Verordening
        //   (EG) 852/2004, bijlage II, hoofdstuk VIII lid 2: wie zo'n ziekte of wond heeft, meldt
        //   het meteen en mag niet met voedsel werken als er gevaar is voor besmetting).
        {
          kind: 'rule',
          id: 'r.l.voeding.1.ru1',
          emoji: '🧼',
          title: 'Door de sluis, elke keer. Ziek of een wond? Meld het voor je begint.',
          body: [
            'Bacteriën op je handen, haar en kleding kunnen in het eten komen.',
            'Ga dus elke keer door de hygiënesluis, ook na je pauze of de wc.',
            'Haarnet op, schone werkkleding aan, geen sieraden. Was en desinfecteer je handen.',
            'Diarree, overgeven of een wond aan je hand? Meld het voor je begint.',
          ],
          rule: 'geschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.voeding.1.wd1',
          situation: 'Ewa wil terug naar de lijn. Wat kan Ewa het beste doen?',
          options: [
            { id: 'a', text: 'Ze gaat toch door de sluis, en wast haar handen.', best: true, feedback: 'Goed. Die paar minuten beschermen veel klanten.' },
            { id: 'b', text: 'Ze desinfecteert alleen haar handen bij de lijn.', best: false, feedback: 'Dat snap ik. Maar wassen en schone kleding horen er ook bij.' },
            { id: 'c', text: 'Ze doet wat haar collega zegt. Het is maar één keer.', best: false, feedback: 'Eén keer is genoeg om bacteriën in het eten te brengen.' },
          ],
          why: 'Bacteriën van de wc kunnen veel klanten ziek maken. Ga dus elke keer door de sluis.',
          whyMore: 'Ook na je pauze. Was je handen met zeep, droog ze en desinfecteer ze.',
        },
        // ⚖️ check: Met diarree of overgeven meld je het voor je begint ⚖️ (Verordening (EG)
        //   852/2004, bijlage II, hoofdstuk VIII lid 2; de werkgever beslist over ander werk).
        {
          kind: 'truefalse',
          id: 'r.l.voeding.1.tf1',
          statement: 'Heb je diarree, maar voel je je goed genoeg? Dan kun je gewoon aan de lijn werken.',
          answer: false,
          why: 'Met diarree of overgeven kun je bacteriën in het eten brengen. Meld het voor je begint.',
          whyMore: 'Je leidinggevende kijkt wat kan. Misschien doe je even ander werk. Melden is normaal.',
        },
        // ⚖️ check: Een wond aan je hand meld je; een blauwe pleister, vaak met metaal voor de
        //   detector ⚖️ (Verordening (EG) 852/2004, bijlage II, hoofdstuk VIII lid 2; de
        //   hygiënecode; de blauwe pleister is een huisregel, geen wet).
        {
          kind: 'whatdo',
          id: 'r.l.voeding.1.wd2',
          situation: 'Ewa heeft een sneetje in haar vinger. Wat kan Ewa het beste doen?',
          options: [
            { id: 'a', text: 'Ze doet er een gewone pleister op, en een handschoen erover.', best: false, feedback: 'Goed bedoeld. Maar een gewone pleister zie je niet in het eten.' },
            { id: 'b', text: 'Ze zegt niets. Het is maar een klein sneetje.', best: false, feedback: 'Ook een klein wondje kan bacteriën in het eten brengen.' },
            { id: 'c', text: 'Ze meldt het, en vraagt een blauwe pleister.', best: true, feedback: 'Goed. Een blauwe pleister zie je meteen.' },
          ],
          why: 'Een wond kan bacteriën in het eten brengen. Meld het, en gebruik een blauwe pleister.',
          whyMore: 'Een blauwe pleister valt op in het eten. Vaak zit er metaal in. Dan vindt de detector hem.',
        },
        { kind: 'model', id: 'r.l.voeding.1.mo1', context: 'Je hebt een klein sneetje in je vinger. Je dienst begint zo.', nl: 'Ik heb een sneetje in mijn vinger. Mag ik een blauwe pleister?' },
      ],
    },
    {
      // Les V.2 · Allergenen en de HACCP-lijst
      id: 'r.l.voeding.2',
      title: 'Allergenen en de HACCP-lijst',
      goal: 'Je houdt allergenen apart. Je schrijft op wat je echt meet.',
      remember: 'Wissel nooit een ingrediënt. Schrijf op wat je echt meet.',
      // Wie kan je helpen: je ploegleider of leidinggevende · de kwaliteitsdienst (QA) · een
      //   ervaren collega.
      help: ['leidinggevende', 'collega'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.voeding.2.sc1',
          picture: 'Mohammed in een koekjesfabriek, bij een lege bak met het etiket "amandel". Een collega houdt een zak hazelnoten vast.',
          lines: [
            'Mohammed werkt in een koekjesfabriek.',
            'De amandelen zijn op.',
            'Een collega zegt: "Neem hazelnoten. Niemand merkt het."',
            'Op het etiket van de koekjes staat: amandel.',
          ],
        },
        // ⚖️ check: Op het etiket moet staan welke allergenen erin zitten ⚖️ (Verordening (EU)
        //   1169/2011, art. 9 en 21 en bijlage II: 14 allergenen, duidelijk te zien in de lijst
        //   van ingrediënten).
        // ⚖️ check: Elk bedrijf met eten werkt met een HACCP-plan ⚖️ (Verordening (EG) 852/2004,
        //   art. 5: procedures op basis van HACCP, met registraties; de NVWA controleert).
        {
          kind: 'rule',
          id: 'r.l.voeding.2.ru1',
          emoji: '📋',
          title: 'Wissel nooit een ingrediënt. Schrijf op wat je echt meet.',
          body: [
            'Voor sommige mensen is een klein beetje noten, melk of ei al gevaarlijk.',
            'Op het etiket moet staan welke allergenen erin zitten.',
            'Wissel dus nooit een ingrediënt, ook niet als het erop lijkt.',
            'Elk bedrijf met eten heeft een HACCP-plan. Daarin staat wat je meet en opschrijft.',
            'Schrijf op wat je echt meet, ook als het fout is.',
          ],
          rule: 'geschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.voeding.2.wd1',
          situation: 'De amandelen zijn op. Wat kan Mohammed het beste doen?',
          options: [
            { id: 'a', text: 'Hij gebruikt de hazelnoten. Noten zijn noten.', best: false, feedback: 'Dat snap ik. Maar dan klopt het etiket niet meer.' },
            { id: 'b', text: 'Hij stopt, en vraagt de ploegleider wat hij moet doen.', best: true, feedback: 'Goed. De ploegleider beslist wat er gebeurt.' },
            { id: 'c', text: 'Hij doet half hazelnoten, half amandelen.', best: false, feedback: 'Ook dan klopt het etiket niet.' },
          ],
          why: 'Het etiket moet zeggen wat erin zit. Een andere noot kan iemand met een allergie ziek maken.',
          whyMore: 'Wissel nooit een ingrediënt, ook niet als het erop lijkt. Twijfel je? Vraag het.',
        },
        // ⚖️ check: Allergenen gescheiden houden en de lijn schoonmaken tussen producten ⚖️
        //   (Verordening (EG) 852/2004 art. 5, HACCP: kruisbesmetting voorkomen; Verordening (EU)
        //   1169/2011; de hygiënecode van de branche).
        {
          kind: 'truefalse',
          id: 'r.l.voeding.2.tf1',
          statement: 'Na een product met noten maak je de lijn schoon, voor het volgende product.',
          answer: true,
          why: 'Zo komen er geen noten in het volgende product. Ook een klein beetje kan gevaarlijk zijn.',
          whyMore: 'Allergenen hebben vaak eigen bakken, eigen gereedschap en eigen kleuren.',
        },
        // ⚖️ check: Te warm: bacteriën groeien; het echte getal opschrijven en meteen melden ⚖️
        //   (Verordening (EG) 852/2004 art. 4 en 5: koudeketen en registratie; Warenwetbesluit
        //   Hygiëne van levensmiddelen: gekoeld bewaren op 7 graden of kouder, nakijken).
        //   Redactie: geen getal in de tekst. Een verzonnen getal is valsheid in geschrift (Sr art.
        //   225), maar dat zeggen we niet.
        {
          kind: 'whatdo',
          id: 'r.l.voeding.2.wd2',
          situation: 'De thermometer van de koelcel is veel hoger dan normaal. Wat kan Mohammed het beste doen?',
          options: [
            { id: 'a', text: 'Hij schrijft het echte getal op, en meldt het meteen.', best: true, feedback: 'Goed. De leidinggevende beslist of het eten nog goed is.' },
            { id: 'b', text: 'Hij schrijft het normale getal op. Het is vast de thermometer.', best: false, feedback: 'Dat snap ik. Maar dan weet niemand dat er iets mis kan zijn.' },
            { id: 'c', text: 'Hij doet de deur goed dicht, en meet over een uur opnieuw.', best: false, feedback: 'Goed bedoeld. Maar in dat uur kan het eten slecht worden.' },
          ],
          why: 'Te warm betekent: bacteriën groeien. Schrijf het echte getal op, en meld het meteen.',
          whyMore: 'Je leidinggevende beslist of het eten nog veilig is. Een slecht getal is niet jouw schuld. Een verzonnen getal is gevaarlijk.',
        },
        { kind: 'model', id: 'r.l.voeding.2.mo1', context: 'De amandelen zijn op. Een collega wil hazelnoten gebruiken.', nl: 'Dan klopt het etiket niet meer. Ik vraag het even aan de ploegleider.' },
      ],
    },
  ],
};

// Sector afval en recycling · Werken in afval en recycling (les A.1, A.2; lesletter A). De
// inzameling (vuilniswagen) en de milieustraat of recyclingbedrijf. Sector Afval en recycling
// (sectors.ts `waste`), Taal u.collection en u.recycling.
export const afvalUnit: RuleUnit = {
  id: 'r.afval',
  title: 'Werken in afval en recycling',
  emoji: '♻️',
  color: '#2e7d5b',
  lessons: [
    {
      // Les A.1 · Op de wagen: zien en gezien worden
      id: 'r.l.afval.1',
      title: 'Op de wagen: zien en gezien worden',
      goal: 'Je draagt altijd je kleding met reflectie. Je loopt nooit achter een wagen die achteruitrijdt.',
      remember: 'Loop nooit achter een wagen die achteruitrijdt. Zorg dat de chauffeur je ziet.',
      // Wie kan je helpen: de chauffeur of ploegleider · je leidinggevende · de
      //   preventiemedewerker · de Nederlandse Arbeidsinspectie.
      help: ['leidinggevende', 'collega', 'arbeidsinspectie'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.afval.1.sc1',
          picture: 'Piotr in oranje kleding met reflectie, naast een vuilniswagen in een smalle straat. Achter de wagen ligt een vuilniszak.',
          lines: [
            'Piotr werkt op een vuilniswagen.',
            'Ze halen containers op in een smalle straat.',
            'De wagen moet een stukje achteruit.',
            'Achter de wagen ligt nog een vuilniszak.',
          ],
        },
        // ⚖️ check: Kleding met reflectie op elke ronde ⚖️ (Arbobesluit art. 8.1 en 8.2: passende
        //   PBM, kosteloos; Arbocatalogus Afvalbranche (WENb/NVRD): werken op de openbare weg).
        // ⚖️ check: Achteruitrijden: niemand achter de wagen; begeleiden vanaf de zijkant ⚖️
        //   (Arbobesluit art. 7.17a en 7.17b: mobiele arbeidsmiddelen, niemand in de gevarenzone;
        //   Arbocatalogus Afvalbranche: achteruitrijden met een begeleider en camera).
        {
          kind: 'rule',
          id: 'r.l.afval.1.ru1',
          emoji: '👷',
          title: 'Loop nooit achter een wagen die achteruitrijdt. Zorg dat de chauffeur je ziet.',
          body: [
            'Draag op elke ronde je kleding met reflectie.',
            'Stap in en uit aan de kant van de stoep.',
            'Vlak achter de wagen ziet de chauffeur je niet. Dat heet de dode hoek.',
            'Rijdt de wagen achteruit? Sta aan de zijkant, waar de chauffeur je in de spiegel ziet.',
          ],
          rule: 'geschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.afval.1.wd1',
          situation: 'De wagen rijdt achteruit. Piotr wil de zak pakken. Wat kan Piotr het beste doen?',
          options: [
            { id: 'a', text: 'Hij wacht aan de zijkant tot de wagen stilstaat.', best: true, feedback: 'Goed. Daar ziet de chauffeur hem in de spiegel.' },
            { id: 'b', text: 'Hij loopt snel achter de wagen langs. Het is maar even.', best: false, feedback: 'Dat snap ik. Maar de chauffeur ziet hem daar niet.' },
            { id: 'c', text: 'Hij roept naar de chauffeur dat hij erachter loopt.', best: false, feedback: 'Goed bedoeld. Maar de chauffeur hoort hem misschien niet.' },
          ],
          why: 'Achter de wagen ziet de chauffeur je niet. Eén seconde is genoeg voor een ongeluk.',
          whyMore: 'Begeleid de chauffeur vanaf de zijkant. Daar zien jullie elkaar in de spiegel. Zie je elkaar niet meer? Dan stopt de chauffeur.',
        },
        // ⚖️ check: Meerijden op de treeplank alleen als het bedrijf het toestaat, nooit bij
        //   achteruitrijden of hard rijden ⚖️ (NEN-EN 1501-1: treeplanken met snelheidsgrens en
        //   blokkering bij achteruitrijden; Arbocatalogus Afvalbranche; RVV 1990 art. 58?, nakijken).
        {
          kind: 'truefalse',
          id: 'r.l.afval.1.tf1',
          statement: 'Naar de volgende straat mag je altijd op de treeplank meerijden.',
          answer: false,
          why: 'Van een rijdende wagen vallen is een groot gevaar. Rijd mee in de cabine.',
          whyMore: 'Op de treeplank alleen als je bedrijf het echt toestaat. Nooit als de wagen achteruitrijdt of hard rijdt.',
        },
        // ⚖️ check: Een te zware of te volle container laat je staan ⚖️ (Arbobesluit art. 5.2 en
        //   5.3: tillen en duwen; de Arbocatalogus; de regels van de gemeente voor de container).
        {
          kind: 'whatdo',
          id: 'r.l.afval.1.wd2',
          situation: 'Een container is veel te zwaar. Er steekt een plank uit. Wat kan Piotr het beste doen?',
          options: [
            { id: 'a', text: 'Hij trekt de plank eruit, en gooit hem in de wagen.', best: false, feedback: 'Goed bedoeld. Maar onder de plank kan iets scherps zitten.' },
            { id: 'b', text: 'Hij tilt de container samen met de chauffeur op de lift.', best: false, feedback: 'Dat snap ik. Maar te zwaar is gevaarlijk bij het kiepen.' },
            { id: 'c', text: 'Hij laat de container staan, en meldt het.', best: true, feedback: 'Goed. Zo raakt niemand gewond.' },
          ],
          why: 'Een te zware of te volle container is gevaarlijk. Laat hem staan, en meld het.',
          whyMore: 'Duw een container, en til hem niet. Blijf uit de buurt van de lift als die beweegt.',
        },
        { kind: 'model', id: 'r.l.afval.1.mo1', context: 'De wagen moet achteruit. Je staat aan de zijkant.', nl: 'Ik sta links. Zie je me in de spiegel?' },
      ],
    },
    {
      // Les A.2 · De milieustraat en de pers
      id: 'r.l.afval.2',
      title: 'De milieustraat en de pers',
      goal: 'Je gaat veilig om met onbekend afval. Je grijpt nooit in een pers.',
      remember: 'Onbekend afval? Niet openmaken, niet ruiken. Grijp nooit in een pers.',
      // Wie kan je helpen: je leidinggevende of de beheerder van de milieustraat · een ervaren
      //   collega.
      help: ['leidinggevende', 'collega'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.afval.2.sc1',
          picture: 'Sanne op een milieustraat bij de bak voor chemisch afval. Een vrouw houdt een fles zonder etiket omhoog.',
          lines: [
            'Sanne werkt op de milieustraat van de gemeente.',
            'Een vrouw brengt een fles zonder etiket.',
            'De fles ruikt sterk.',
            '"Gooi hem maar bij de rest," zegt de vrouw.',
          ],
        },
        // ⚖️ check: Verf, olie, accu's en spuitbussen zijn gevaarlijk afval ⚖️ (Wet milieubeheer
        //   art. 1.1 en 10.37; Besluit Europese afvalstoffenlijst; Landelijk afvalbeheerplan:
        //   klein gevaarlijk afval apart inzamelen).
        // ⚖️ check: Met een pers werk je alleen als je het geleerd hebt ⚖️ (Arbobesluit art. 7.5:
        //   arbeidsmiddelen met bijzondere gevaren alleen door aangewezen, opgeleide werknemers).
        // ⚖️ check: Eerst de noodstop, de stroom eraf en een slot erop ⚖️ (Arbobesluit art. 7.10 en
        //   7.13: veilig onderhoud en storingen; lock-out, zoals in r.factory).
        {
          kind: 'rule',
          id: 'r.l.afval.2.ru1',
          emoji: '⚙️',
          title: 'Onbekend afval? Niet openmaken, niet ruiken. Grijp nooit in een pers.',
          body: [
            "Verf, olie, accu's en spuitbussen zijn gevaarlijk afval. Ze kunnen branden of vergiftigen.",
            'Een fles zonder etiket maak je nooit open. Ruik er niet aan.',
            'Een pers drukt met heel veel kracht. Werk ermee als je het geleerd hebt.',
            'Zit er iets vast? Eerst de noodstop, de stroom eraf en een slot erop.',
          ],
          rule: 'geschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.afval.2.wd1',
          situation: 'Wat kan Sanne het beste doen met de fles?',
          options: [
            { id: 'a', text: 'Ze maakt hem even open om te ruiken wat het is.', best: false, feedback: 'Dat snap ik. Maar de damp kan giftig zijn.' },
            { id: 'b', text: 'Ze zet hem rechtop apart, en vraagt het na.', best: true, feedback: 'Goed. Haar leidinggevende weet waar het veilig kan.' },
            { id: 'c', text: 'Ze zet hem bij de verf. Dat lijkt er het meest op.', best: false, feedback: 'Onbekende stoffen kunnen met andere stoffen reageren.' },
          ],
          why: 'Onbekend afval kan branden, ontploffen of giftig zijn. Maak het niet open, en meng het niet.',
          whyMore: 'Draag handschoenen en een veiligheidsbril. Let op de gevarensymbolen.',
        },
        // ⚖️ check: Een pers die stilstaat kan weer starten; eerst noodstop, stroom eraf en slot erop
        //   ⚖️ (Arbobesluit art. 7.10 en 7.13; NEN-EN 16252 voor balenpersen; de stappen van het bedrijf).
        {
          kind: 'truefalse',
          id: 'r.l.afval.2.tf1',
          statement: 'Een pers die stilstaat, is veilig om in te grijpen.',
          answer: false,
          why: 'Een pers die stilstaat, kan weer starten. Eerst de noodstop, de stroom eraf en een slot erop.',
          whyMore: 'Volg de stappen van je bedrijf. Klim nooit in een pers of een container.',
        },
        // ⚖️ check: Asbest is gevaarlijk als het breekt: de vezels in de lucht kunnen longkanker
        //   geven ⚖️ (Arbobesluit art. 4.37 e.v.; Asbestverwijderingsbesluit 2005). Asbest komt
        //   alleen goed ingepakt binnen ⚖️ (de regels van de gemeente voor de milieustraat; vaak
        //   dubbel verpakt in plastic, met een maximum aantal m²; nakijken per gemeente).
        {
          kind: 'whoask',
          id: 'r.l.afval.2.wa1',
          question: 'Een bezoeker brengt kapotte golfplaten. Je denkt dat er asbest in zit. Wie vraag je het?',
          options: [
            { id: 'a', who: 'collega', best: false, feedback: 'Een collega weet het misschien. Maar je leidinggevende beslist.' },
            { id: 'b', who: 'politie', best: false, feedback: 'Asbest is geen zaak voor de politie. Vraag het op je werk.' },
            { id: 'c', who: 'leidinggevende', best: true, feedback: 'Goed. Je leidinggevende weet of het mag, en hoe.' },
          ],
          why: 'Asbest is gevaarlijk als het breekt. Je leidinggevende weet of het mag, en hoe.',
          whyMore: 'Breek het niet, en haal het niet uit de verpakking. Asbest komt alleen goed ingepakt binnen.',
        },
        { kind: 'model', id: 'r.l.afval.2.mo1', context: 'Een bezoeker brengt een fles zonder etiket.', nl: 'Ik weet niet wat erin zit. Ik zet hem apart en vraag het even.' },
      ],
    },
  ],
};

// Sector kinderopvang · Werken in de kinderopvang (les K.1, K.2). Kinderdagverblijf, peuteropvang
// en bso. Sector Kinderopvang (sectors.ts `childcare`), Taal u.toddlers en u.daycare.
export const kinderopvangUnit: RuleUnit = {
  id: 'r.kinderopvang',
  title: 'Werken in de kinderopvang',
  emoji: '🧸',
  color: '#c0567a',
  lessons: [
    {
      // Les K.1 · Eerst het register, en vier ogen
      id: 'r.l.kinderopvang.1',
      title: 'Eerst het register, en vier ogen',
      goal: 'Je werkt pas met kinderen als je in het personenregister staat. Je werkt nooit helemaal alleen.',
      remember: 'Eerst een VOG en het register. Er kijkt of luistert altijd iemand mee.',
      // Wie kan je helpen: je leidinggevende of de houder van de opvang · je uitzendbureau · een
      //   ervaren collega.
      help: ['leidinggevende', 'uitzendbureau', 'collega'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.kinderopvang.1.sc1',
          picture: 'Nadia met haar telefoon bij de deur van een kinderdagverblijf. Door het raam zie je peuters spelen.',
          lines: [
            'Nadia gaat via een uitzendbureau in een kinderdagverblijf werken.',
            'Ze heeft haar VOG al aangevraagd.',
            'De leidinggevende zegt: "Kom morgen maar alvast meedraaien."',
            'Nadia staat nog niet in het personenregister.',
          ],
        },
        // ⚖️ check: In de kinderopvang heb je een VOG nodig ⚖️ (Wet kinderopvang art. 1.50 lid 2:
        //   een verklaring omtrent het gedrag; via de inschrijving in het personenregister wordt die
        //   continu gescreend).
        // ⚖️ check: Je moet in het personenregister kinderopvang staan, voor je begint, en de opvang
        //   koppelt je ⚖️ (Wet kinderopvang art. 1.48d en 1.50: inschrijven en koppelen vóór aanvang).
        // ⚖️ check: Ook stagiairs en uitzendkrachten ⚖️ (Wet kinderopvang art. 1.50 lid 2: ieder die
        //   structureel aanwezig is, ook stagiairs, uitzendkrachten en vrijwilligers).
        // ⚖️ check: Het vierogenprincipe ⚖️ (Besluit kwaliteit kinderopvang art. 7: in de dagopvang
        //   kan een andere volwassene altijd meekijken of meeluisteren; niet in de bso, nakijken).
        {
          kind: 'rule',
          id: 'r.l.kinderopvang.1.ru1',
          emoji: '🧒',
          title: 'Eerst een VOG en het register. Er kijkt of luistert altijd iemand mee.',
          body: [
            'In de kinderopvang heb je een VOG nodig: een bewijs van goed gedrag.',
            'Je moet ook in het personenregister kinderopvang staan, voor je begint.',
            'Dat geldt ook voor stagiairs en uitzendkrachten.',
            'Een andere volwassene kan je altijd zien of horen. Dat heet het vierogenprincipe.',
          ],
          rule: 'geschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.kinderopvang.1.wd1',
          situation: 'Nadia staat nog niet in het register. Wat kan Nadia het beste doen?',
          options: [
            { id: 'a', text: 'Ze gaat morgen gewoon. Het is maar meedraaien.', best: false, feedback: 'Dat snap ik. Maar ook meedraaien mag pas na de inschrijving.' },
            { id: 'b', text: 'Ze gaat, maar blijft uit de buurt van de kinderen.', best: false, feedback: 'Goed bedoeld. Maar in een kinderdagverblijf zijn overal kinderen.' },
            { id: 'c', text: 'Ze zegt dat ze eerst ingeschreven moet zijn.', best: true, feedback: 'Goed. Zonder inschrijving mag ze niet met de kinderen werken.' },
          ],
          why: 'Je mag pas met kinderen werken als je in het personenregister staat.',
          whyMore: 'De opvang moet je in dat register ook aan zich koppelen. Vraag of dat gebeurd is.',
        },
        // ⚖️ check: Een andere volwassene moet je altijd kunnen zien of horen ⚖️ (Besluit kwaliteit
        //   kinderopvang art. 7, het vierogenprincipe in de dagopvang). Redactie: "op de groep" =
        //   de dagopvang; de bso heeft die regel niet.
        {
          kind: 'truefalse',
          id: 'r.l.kinderopvang.1.tf1',
          statement: 'Op de babygroep moet een andere volwassene je altijd kunnen zien of horen.',
          answer: true,
          why: 'Een andere volwassene moet je altijd kunnen zien of horen. Dat beschermt de kinderen, en jou.',
          whyMore: 'Dat heet het vierogenprincipe. Bijvoorbeeld met ramen, een camera of een collega die binnenloopt.',
        },
        {
          kind: 'whoask',
          id: 'r.l.kinderopvang.1.wa1',
          question: 'Je werkt via een uitzendbureau. Je wilt weten of je al in het register staat. Wie vraag je het?',
          options: [
            { id: 'a', who: 'uitzendbureau', best: true, feedback: 'Goed. Het bureau en de opvang regelen samen je inschrijving.' },
            { id: 'b', who: 'politie', best: false, feedback: 'De politie gaat niet over het register. Vraag het bij je werk.' },
            { id: 'c', who: 'gemeente', best: false, feedback: 'De gemeente controleert de opvang. Vraag het eerst bij je werk.' },
          ],
          why: 'Je uitzendbureau en de opvang regelen je inschrijving. Vraag het voor je begint.',
          whyMore: 'Werk je niet via een bureau? Vraag het dan je leidinggevende.',
        },
        { kind: 'model', id: 'r.l.kinderopvang.1.mo1', context: 'Je leidinggevende vraagt of je morgen al kunt komen.', nl: 'Ik sta nog niet in het personenregister. Kan ik beginnen als dat klaar is?' },
      ],
    },
    {
      // Les K.2 · Medicijnen, een ziek kind en zorgen
      id: 'r.l.kinderopvang.2',
      title: 'Medicijnen, een ziek kind en zorgen',
      goal: 'Je geeft alleen een medicijn met toestemming op papier. Bij zorgen volg je de meldcode.',
      remember: 'Medicijnen alleen met toestemming op papier. Zorgen over een kind? Volg de meldcode.',
      // Wie kan je helpen: je leidinggevende of de aandachtsfunctionaris van de opvang · een
      //   collega · Veilig Thuis (advies bij zorgen).
      help: ['leidinggevende', 'collega'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.kinderopvang.2.sc1',
          picture: 'Esra bij de deur van de peutergroep. Een moeder geeft haar een flesje koortsdrank. Een jongetje houdt haar hand vast.',
          lines: [
            'Esra werkt op de peutergroep van een kinderdagverblijf.',
            'Een moeder brengt haar zoon Sem.',
            '"Hij had wat koorts. Geef hem om 2 uur een drankje," zegt ze.',
            'Er is geen formulier.',
          ],
        },
        // ⚖️ check: Een medicijn alleen met schriftelijke toestemming van de ouders ⚖️ (Wet
        //   kinderopvang art. 1.49 en het beleid veiligheid en gezondheid (Besluit kwaliteit
        //   kinderopvang art. 4); het model "Medicijnverklaring" van de branche; GGD-richtlijn.
        //   Geen letterlijke wettekst: de opvang legt het vast in haar beleid).
        // ⚖️ check: De opvang heeft een meldcode met vaste stappen ⚖️ (Wet verplichte meldcode
        //   huiselijk geweld en kindermishandeling; Wet kinderopvang art. 1.51a; het afwegingskader
        //   en de meldplicht bij geweld door een medewerker, art. 1.51b).
        {
          kind: 'rule',
          id: 'r.l.kinderopvang.2.ru1',
          emoji: '💊',
          title: 'Medicijnen alleen met toestemming op papier. Zorgen over een kind? Volg de meldcode.',
          body: [
            'Een medicijn geef je alleen met toestemming van de ouders, op papier.',
            'Schrijf op wat je gaf, en hoe laat.',
            'Zie je blauwe plekken of angst bij een kind? Schrijf op wat je ziet.',
            'De opvang heeft een meldcode met vaste stappen. Je leidinggevende kent ze.',
          ],
          rule: 'geschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.kinderopvang.2.wd1',
          situation: 'De moeder wil snel weg. Wat kan Esra het beste doen?',
          options: [
            { id: 'a', text: 'Ze vraagt de moeder om eerst het formulier te tekenen.', best: true, feedback: 'Goed. Zo is het duidelijk, voor Sem en voor Esra.' },
            { id: 'b', text: 'Ze schrijft het zelf op een briefje, en geeft het drankje om 2 uur.', best: false, feedback: 'Goed bedoeld. Maar zonder handtekening van de moeder mag het niet.' },
            { id: 'c', text: 'Ze zegt dat de opvang nooit medicijnen geeft.', best: false, feedback: 'Dat klopt meestal niet. Met toestemming op papier mag het vaak wel.' },
          ],
          why: 'Zonder toestemming op papier geef je geen medicijn. Dat beschermt het kind en jou.',
          whyMore: 'Schrijf op wat je gaf, en hoe laat. Vraag ook hoe het met de koorts is.',
        },
        // ⚖️ check: Bij zorgen volg je de stappen van de meldcode; niet het kind uitvragen ⚖️ (Wet
        //   verplichte meldcode; de meldcode van de branche kinderopvang, stap 1: signalen in kaart
        //   brengen; het kind geen suggestieve vragen stellen).
        {
          kind: 'truefalse',
          id: 'r.l.kinderopvang.2.tf1',
          statement: 'Zie je blauwe plekken? Dan vraag je het kind precies wat er gebeurd is.',
          answer: false,
          why: 'Veel vragen kunnen een kind bang maken. Schrijf op wat je ziet, en zeg het tegen je leidinggevende.',
          whyMore: 'De opvang heeft een meldcode met vaste stappen. Daarin staat wat er moet gebeuren.',
        },
        // Redactie: wanneer een ziek kind naar huis moet, staat in het beleid van de opvang (en de
        //   GGD-richtlijn "Gezondheidsrisico's in de kinderopvang"); geen wet en geen getal.
        {
          kind: 'whatdo',
          id: 'r.l.kinderopvang.2.wd2',
          situation: 'Na het eten is Sem heel warm en moe. Wat kan Esra het beste doen?',
          options: [
            { id: 'a', text: 'Ze geeft hem een paracetamol uit haar eigen tas.', best: false, feedback: 'Zonder toestemming van de ouders geef je geen medicijn.' },
            { id: 'b', text: 'Ze legt hem in bed. Slapen helpt vaak.', best: false, feedback: 'Goed bedoeld. Maar eerst moet ze weten of hij koorts heeft.' },
            { id: 'c', text: 'Ze meet zijn temperatuur, en belt de ouders.', best: true, feedback: 'Goed. De ouders weten dan hoe het met Sem gaat.' },
          ],
          why: 'Is een kind ziek? Meet de temperatuur, zeg het tegen een collega en bel de ouders.',
          whyMore: 'Wanneer een kind naar huis moet, staat in de regels van de opvang.',
        },
        {
          kind: 'whoask',
          id: 'r.l.kinderopvang.2.wa1',
          question: 'Je maakt je zorgen over een kind. Je weet niet wat je moet doen. Wie vraag je het?',
          options: [
            { id: 'a', who: 'collega', best: false, feedback: 'Praten met een collega mag. Maar je leidinggevende kent de stappen.' },
            { id: 'b', who: 'leidinggevende', best: true, feedback: 'Goed. Je leidinggevende kent de stappen van de meldcode.' },
            { id: 'c', who: 'politie', best: false, feedback: 'Is er direct gevaar? Bel 112. Anders vraag je het eerst op je werk.' },
          ],
          why: 'Bij zorgen over een kind volg je de meldcode. Je leidinggevende kent de stappen.',
          whyMore: 'Schrijf op wat je ziet en hoort, met de datum. Niet wat je denkt.',
        },
        { kind: 'model', id: 'r.l.kinderopvang.2.mo1', context: 'Een moeder vraagt of je haar kind een medicijn geeft.', nl: 'Dat kan, maar wilt u eerst dit formulier invullen en tekenen?' },
      ],
    },
  ],
};

/** The six units of this round, in the order of src/content/sectors.ts. */
export const sector2Units: RuleUnit[] = [groenUnit, facilitairUnit, beveiligingUnit, voedingUnit, afvalUnit, kinderopvangUnit];
