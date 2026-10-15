import type { RuleUnit } from '../types';

/**
 * Unit 14 · Stage lopen (les 14.1–14.3). In het mbo heet stage ook bpv: beroepspraktijkvorming.
 * Converted from docs/entree-aanvulling.md; edit that document first, then this file.
 * `// ⚖️ check:` marks a fact the expert must check (docs/entree-aanvulling.md, deel 6 and 7). The
 * marker is never shown or read aloud. `// Redactie:` notes are for the makers only.
 */
export const stageUnit: RuleUnit = {
  id: 'r.stage',
  title: 'Stage lopen',
  emoji: '🎓',
  color: '#577590',
  lessons: [
    {
      // Les 14.1 · Je stageovereenkomst (POK) en wie wie is
      id: 'r.l.stage.1',
      title: 'Je stageovereenkomst (POK) en wie wie is',
      goal: 'Je weet wat de POK is, wie je begeleidt, en wat je regelt vóór je begint.',
      remember: 'Eerst de POK tekenen. Dan pas beginnen met je stage.',
      // Wie kan je helpen: je stagebegeleider of bpv-begeleider van school · je praktijkopleider ·
      //   stagemarkt.nl (van SBB).
      help: ['school', 'praktijkopleider'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.stage.1.sc1',
          picture: 'Jayden bij de balie van zijn school, met een formulier in zijn hand.',
          lines: [
            'Jayden zit op het mbo.',
            'Hij gaat 2 dagen per week stage lopen in een supermarkt.',
            'Op school krijgt hij een formulier: de praktijkovereenkomst.',
            'Iedereen noemt het de POK.',
          ],
        },
        // ⚖️ check: De POK is een afspraak tussen 3 partijen ⚖️.
        // ⚖️ check: Alle drie tekenen vóór de stage begint ⚖️.
        {
          kind: 'rule',
          id: 'r.l.stage.1.ru1',
          emoji: '✍️',
          title: 'Eerst de POK tekenen. Dan pas beginnen met je stage.',
          body: [
            'De POK is een afspraak tussen jou, je school en het bedrijf.',
            'Alle drie tekenen vóór de stage begint.',
            'Zonder POK telt je stage misschien niet mee voor je diploma.',
          ],
          rule: 'geschreven',
          key: true,
        },
        // ⚖️ check: De POK is een afspraak tussen 3 partijen ⚖️.
        // ⚖️ check: Alle drie tekenen vóór de stage begint ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.stage.1.tf1',
          statement: 'De POK teken je pas als je stage al bezig is.',
          answer: false,
          why: 'De POK is een afspraak tussen 3 partijen. Dat zijn jij, je school en het bedrijf. Alle drie tekenen vóór de stage begint. Er staat in wanneer je stage loopt, en wie je begeleidt.',
        },
        // ⚖️ check: Die komt vaak een keer langs ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.stage.1.wd1',
          situation: 'Op de eerste dag ontmoet Jayden Linda. Zij is zijn praktijkopleider. Wat doet een praktijkopleider?',
          options: [
            { id: 'a', text: 'Ze begeleidt je op het werk, en leert je het vak.', best: true, feedback: 'Goed. Zij is je eerste aanspreekpunt in het bedrijf.' },
            { id: 'b', text: 'Ze is je docent, en ze geeft je cijfers op school.', best: false, feedback: 'Nee. Ze werkt in het bedrijf, niet op school.' },
            { id: 'c', text: 'Ze regelt je loon en je arbeidscontract.', best: false, feedback: 'Nee. Op stage heb je meestal geen arbeidscontract.' },
          ],
          why: 'De praktijkopleider werkt in het bedrijf. Zij leert je het werk en geeft je feedback. Op school heb je ook iemand: de stagebegeleider of bpv-begeleider. Die komt vaak een keer langs.',
        },
        // ⚖️ check: Zonder POK telt je stage misschien niet mee voor je diploma ⚖️.
        // ⚖️ check: Het bedrijf moet ook erkend zijn als leerbedrijf ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.stage.1.wd2',
          situation: 'Het bedrijf zegt: "Dat papiertje van school komt later wel. Begin maandag maar."',
          options: [
            { id: 'a', text: 'Hij begint maandag. Het papier komt later wel.', best: false, feedback: 'Begrijpelijk. Maar dan telt je stage misschien niet mee.' },
            { id: 'b', text: 'Hij vraagt eerst aan school of de POK klaar is.', best: true, feedback: 'Goed. Dan weet hij zeker dat alles klopt.' },
            { id: 'c', text: 'Hij zoekt meteen een ander stagebedrijf.', best: false, feedback: 'Dat hoeft niet. Eerst even vragen.' },
          ],
          why: 'Zonder POK telt je stage misschien niet mee voor je diploma. Het bedrijf moet ook erkend zijn als leerbedrijf. Dat check je op stagemarkt.nl. Je school helpt je daarbij.',
        },
        {
          kind: 'whoask',
          id: 'r.l.stage.1.wa1',
          question: 'Je weet niet of je POK al getekend is. Wie vraag je het?',
          options: [
            { id: 'a', who: 'uitzendbureau', best: false, feedback: 'Een uitzendbureau gaat niet over je stage.' },
            { id: 'b', who: 'praktijkopleider', best: false, feedback: 'Zij weet het misschien. Maar school regelt de POK.' },
            { id: 'c', who: 'school', best: true, feedback: 'Goed. School regelt de POK met jou en het bedrijf.' },
          ],
          why: 'Je stagebegeleider of bpv-begeleider van school regelt de POK. Op het werk is je praktijkopleider je aanspreekpunt.',
        },
        { kind: 'model', id: 'r.l.stage.1.mo1', context: 'Het bedrijf wil dat je begint. Je weet niet of de POK klaar is.', nl: 'Is mijn POK al getekend? Dan kan ik beginnen.' },
      ],
    },
    {
      // Les 14.2 · Feedback en beoordeling
      id: 'r.l.stage.2',
      title: 'Feedback en beoordeling',
      goal: 'Je vraagt om feedback, je doet er iets mee, en je weet wat je doet met je beoordeling.',
      remember: 'Vraag zelf om feedback. Vraag om een voorbeeld.',
      // Wie kan je helpen: je praktijkopleider · je stagebegeleider of bpv-begeleider van school.
      help: ['praktijkopleider', 'school'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.stage.2.sc1',
          picture: 'Fatima en Mark aan een tafel in de kantine van een hotel. Op tafel een formulier.',
          lines: [
            'Fatima loopt stage in een hotel.',
            'Ze werkt bij de schoonmaak en het linnen.',
            'Na 6 weken heeft ze een gesprek met Mark, haar praktijkopleider.',
            'Hij zegt: "Je werkt netjes. Maar je vraagt te weinig."',
          ],
        },
        {
          kind: 'rule',
          id: 'r.l.stage.2.ru1',
          emoji: '💬',
          title: 'Vraag zelf om feedback. Vraag om een voorbeeld.',
          body: [
            'Feedback gaat over je werk, niet over jou.',
            'Vraag om een voorbeeld. Dan weet je wat je anders kunt doen.',
            'Vragen om feedback laat zien dat je wilt leren.',
          ],
          rule: 'ongeschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.stage.2.wd1',
          situation: 'Fatima vindt dat niet leuk om te horen.',
          options: [
            { id: 'a', text: 'Ze zegt: "Dat klopt niet. Ik weet alles al."', best: false, feedback: 'Begrijpelijk. Maar zo leer je er niets van.' },
            { id: 'b', text: 'Ze knikt, en ze zegt verder niets.', best: false, feedback: 'Dan weet ze nog niet wat ze anders kan doen.' },
            { id: 'c', text: 'Ze vraagt: "Wanneer had ik iets moeten vragen?"', best: true, feedback: 'Goed. Met een voorbeeld weet ze wat beter kan.' },
          ],
          why: 'Feedback gaat over je werk, niet over jou. Vraag om een voorbeeld. Dan weet je wat je anders kunt doen. Zo leer je het meest op je stage.',
        },
        {
          kind: 'truefalse',
          id: 'r.l.stage.2.tf1',
          statement: 'Je mag zelf om feedback vragen, ook zonder gesprek.',
          answer: true,
          why: 'Vragen om feedback laat zien dat je wilt leren. Vraag het na een klus: "Wat ging goed? Wat kan beter?" Schrijf het op, bijvoorbeeld in je logboek of portfolio.',
        },
        // ⚖️ check: Het bedrijf geeft zijn oordeel ⚖️ (twijfel 5: wie beslist er precies?).
        {
          kind: 'whatdo',
          id: 'r.l.stage.2.wd2',
          situation: 'Aan het eind krijgt Fatima een beoordeling. Ze is het er niet mee eens.',
          options: [
            { id: 'a', text: 'Ze bespreekt het met Mark, en met haar begeleider van school.', best: true, feedback: 'Goed. Zo kan ze uitleggen waarom.' },
            { id: 'b', text: 'Ze tekent het formulier niet, en ze stopt met haar stage.', best: false, feedback: 'Begrijpelijk. Maar dan mist ze misschien haar diploma.' },
            { id: 'c', text: 'Ze zet een bericht over het hotel op social media.', best: false, feedback: 'Dat maakt het vaak erger. Praat er eerst over.' },
          ],
          why: 'Het oneens zijn mag. Zeg rustig waarom, met voorbeelden. Bespreek het ook met je school. De school beslist over je examen. Het bedrijf geeft zijn oordeel.',
        },
        {
          kind: 'whoask',
          id: 'r.l.stage.2.wa1',
          question: 'Je wilt weten wat beter kan in je werk op je stage. Wie vraag je het eerst?',
          options: [
            { id: 'a', who: 'praktijkopleider', best: true, feedback: 'Goed. Je praktijkopleider ziet je werk elke dag.' },
            { id: 'b', who: 'hr', best: false, feedback: 'HR gaat over contracten en loon, niet over je stagewerk.' },
            { id: 'c', who: 'school', best: false, feedback: 'Kan ook. Maar je praktijkopleider ziet je werk elke dag.' },
          ],
          why: 'Vraag het eerst aan je praktijkopleider, na een klus. Ben je het oneens met je beoordeling? Bespreek het ook met je begeleider van school.',
        },
        { kind: 'model', id: 'r.l.stage.2.mo1', context: 'Je hebt een klus af. Je vraagt om feedback.', nl: 'Wat ging goed? En wat kan ik beter doen?' },
      ],
    },
    {
      // Les 14.3 · Als het niet goed gaat
      id: 'r.l.stage.3',
      title: 'Als het niet goed gaat',
      goal: 'Je weet wat je doet als je ziek bent, als je weinig leert, of als je slecht behandeld wordt.',
      remember: 'Gaat het niet goed op stage? Praat erover: eerst op je werk, dan met school.',
      // Wie kan je helpen: je stagebegeleider of bpv-begeleider · de vertrouwenspersoon van school ·
      //   het meldpunt van je school of van SBB ⚖️ · discriminatie.nl · JOB, de organisatie voor
      //   mbo-studenten ⚖️ · bij te lange werktijden: de Nederlandse Arbeidsinspectie.
      help: ['school', 'vertrouwenspersoon', 'meldpunt', 'arbeidsinspectie'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.stage.3.sc1',
          picture: 'Kevin alleen in een hoek van een magazijn, bij een berg lege dozen. Hij kijkt op de klok.',
          lines: [
            'Kevin loopt stage in een magazijn.',
            'Hij zou het vak leren. Maar hij maakt elke dag alleen dozen plat.',
            'Niemand legt iets uit.',
            'Hij werkt ook vaak langer dan afgesproken.',
          ],
        },
        // ⚖️ check: Je bent geen goedkope werknemer ⚖️.
        // ⚖️ check: Ook op stage gelden de regels voor werktijden en pauze ⚖️.
        // ⚖️ check: Discriminatie op stage is verboden ⚖️.
        {
          kind: 'rule',
          id: 'r.l.stage.3.ru1',
          emoji: '🗣️',
          title: 'Gaat het niet goed op stage? Praat erover: eerst op je werk, dan met school.',
          body: [
            'Een stage is om te leren. Je bent geen goedkope werknemer.',
            'Ook op stage gelden de regels voor werktijden en pauze.',
            'Discriminatie op stage is verboden.',
            'Stop nooit zomaar. Praat erover.',
          ],
          rule: 'geschreven',
        },
        // ⚖️ check: Je bent geen goedkope werknemer ⚖️.
        // ⚖️ check: Ook op stage gelden de regels voor werktijden en pauze ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.stage.3.wd1',
          situation: 'Wat doet Kevin?',
          options: [
            { id: 'a', text: 'Hij blijft gewoon gaan. Over 2 maanden is het klaar.', best: false, feedback: 'Begrijpelijk. Maar dan leert hij weinig.' },
            { id: 'b', text: 'Hij stopt met de stage, zonder iets te zeggen.', best: false, feedback: 'Niet doen. Dan heb je misschien een probleem met school.' },
            { id: 'c', text: 'Hij praat met zijn praktijkopleider, en ook met school.', best: true, feedback: 'Goed. Zo kan er iets veranderen.' },
          ],
          why: 'Een stage is om te leren. Je bent geen goedkope werknemer. Ook op stage gelden de regels voor werktijden en pauze. Leer je weinig? Zeg het eerst tegen je praktijkopleider. Helpt dat niet? Ga naar je begeleider van school. Stop nooit zomaar.',
        },
        // ⚖️ check: Meld het ook bij school ⚖️ (twijfel 6: altijd bij allebei?).
        {
          kind: 'truefalse',
          id: 'r.l.stage.3.tf1',
          statement: 'Ben je ziek op stage? Dan meld je je alleen ziek bij school.',
          answer: false,
          why: 'Meld je ziek bij het bedrijf, vóór je begint. Meld het ook bij school. Hoe het moet, staat vaak in je POK of de stagegids. Weer beter? Meld dat ook bij allebei.',
        },
        // ⚖️ check: Discriminatie op stage is verboden ⚖️.
        // ⚖️ check: Elke mbo-school moet een meldpunt hebben ⚖️.
        // ⚖️ check: SBB kan het bedrijf erop aanspreken ⚖️ (twijfel 7: meldpunten).
        {
          kind: 'whatdo',
          id: 'r.l.stage.3.wd2',
          situation: 'Een collega maakt grappen over Kevins afkomst. Andere stagiairs krijgen beter werk.',
          options: [
            { id: 'a', text: 'Hij meldt het bij school. Daar is een meldpunt.', best: true, feedback: 'Goed. School moet je dan helpen.' },
            { id: 'b', text: 'Hij lacht mee. Hij wil geen gedoe op zijn stage.', best: false, feedback: 'Begrijpelijk. Maar het mag niet, en je hoeft het niet te pikken.' },
            { id: 'c', text: 'Hij zoekt zelf een nieuwe stage, zonder iets te zeggen.', best: false, feedback: 'Dan gaat het bij de volgende stagiair misschien ook zo.' },
          ],
          why: 'Discriminatie op stage is verboden. Elke mbo-school moet een meldpunt hebben. Je kunt ook naar de vertrouwenspersoon van school. Of naar discriminatie.nl. SBB kan het bedrijf erop aanspreken.',
        },
        {
          kind: 'whoask',
          id: 'r.l.stage.3.wa1',
          question: 'Je werkt op je stage elke week veel langer dan afgesproken. School helpt niet. Wie kan je helpen?',
          options: [
            { id: 'a', who: 'arbeidsinspectie', best: true, feedback: 'Goed. Zij controleren werktijden, ook voor stagiairs.' },
            { id: 'b', who: 'politie', best: false, feedback: 'Te lang werken is geen zaak voor de politie.' },
            { id: 'c', who: 'huisarts', best: false, feedback: 'De huisarts helpt bij je gezondheid, niet bij je werktijden.' },
          ],
          why: 'Praat eerst met je praktijkopleider en met school. Werk je toch veel te lang? Dan kun je het melden bij de Nederlandse Arbeidsinspectie.',
        },
        { kind: 'model', id: 'r.l.stage.3.mo1', context: 'Je leert weinig op je stage.', nl: 'Ik leer hier weinig. Kunnen we er samen met school over praten?' },
      ],
    },
  ],
};
