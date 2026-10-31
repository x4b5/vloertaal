import type { BeUnit } from '../types';

/**
 * Unit 14 (België) · Stage lopen: de Belgische versie van src/content/regels/units/stage.ts.
 * Zelfde lessen en stap-id's, met "r.be." vooraan. Geen POK, SBB of mbo: in Vlaanderen een
 * stageovereenkomst (schoolstage), bij duaal leren een overeenkomst alternerende opleiding, een
 * mentor in het bedrijf, een stagebegeleider van school en het CLB.
 *
 * `// ⚖️ check:` = een feit dat de deskundige nakijkt, met de bron. Opgezocht op 30 okt 2026.
 * Officiële sites waren in deze sessie niet te openen (netwerk geblokkeerd, 30 okt 2026): de
 * feiten komen uit zoekresultaten (vlaanderen.be, onderwijs.vlaanderen.be, securex.be, eurydice).
 * Geen eigen "Wat kun je nu?": de Nederlandse zinnen (feedback vragen, zeggen dat het niet goed gaat) gelden ook.
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.stage',
    title: 'Stage lopen',
    emoji: '🎓',
    color: '#577590',
    lessons: [
      {
        // Les 14.1 · Je stageovereenkomst en wie wie is
        id: 'r.be.l.stage.1',
        title: 'Je stageovereenkomst en wie wie is',
        goal: 'Je weet wat de stageovereenkomst is en wie je begeleidt. Je weet wat je regelt vóór je begint.',
        remember: 'Eerst de stageovereenkomst tekenen. Dan pas beginnen met je stage.',
        // Wie kan je helpen: je stagebegeleider van school · je mentor in het bedrijf · het CLB.
        help: ['school', 'praktijkopleider'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.stage.1.sc1',
            picture: 'Jayden bij het secretariaat van zijn school, met een formulier in zijn hand.',
            lines: [
              'Jayden zit in het secundair onderwijs, in een beroepsrichting.',
              'Hij gaat 2 dagen per week stage lopen in een supermarkt.',
              'Op school krijgt hij een formulier: de stageovereenkomst.',
              'Er zijn drie plaatsen om te tekenen.',
            ],
          },
          // ⚖️ check: bij een schoolstage tekenen de school, het stagebedrijf en de leerling (bij een
          //   minderjarige ook de ouders) een stageovereenkomst, vóór de stage begint (onderwijs.vlaanderen.be
          //   "leerlingenstages"; KB 21 september 2004 bescherming van stagiairs; nakijken wie precies tekent)
          // ⚖️ check: bij duaal leren sluit je een overeenkomst alternerende opleiding (OAO) of een
          //   stageovereenkomst alternerende opleiding (SAO), tussen leerling, bedrijf en school
          //   (vlaanderen.be duaal leren; assets.vlaanderen.be "een OAO opmaken" 2024)
          // ⚖️ check: zonder getekende overeenkomst telt de stage misschien niet mee (school; nakijken)
          {
            kind: 'rule',
            id: 'r.be.l.stage.1.ru1',
            emoji: '✍️',
            title: 'Eerst de stageovereenkomst tekenen. Dan pas beginnen met je stage.',
            body: [
              'De stageovereenkomst is een afspraak tussen jou, je school en het bedrijf.',
              'Alle drie tekenen vóór de stage begint.',
              'Doe je duaal leren? Dan teken je een overeenkomst alternerende opleiding.',
              'Zonder getekende overeenkomst telt je stage misschien niet mee.',
            ],
            rule: 'geschreven',
            key: true,
          },
          // ⚖️ check: de stageovereenkomst is een afspraak tussen 3 partijen (leerling, school en bedrijf), getekend
          //   vóór de stage (onderwijs.vlaanderen.be; KB 21 september 2004)
          {
            kind: 'truefalse',
            id: 'r.be.l.stage.1.tf1',
            statement: 'De stageovereenkomst teken je pas als je stage al bezig is.',
            answer: false,
            why: 'De stageovereenkomst is een afspraak tussen 3 partijen. Dat zijn jij, je school en het bedrijf. Alle drie tekenen vóór de stage begint. Er staat in wanneer je stage loopt, en wie je begeleidt.',
          },
          // ⚖️ check: in het bedrijf heb je een mentor; bij duaal leren volgt de mentor een
          //   mentoropleiding (securex.be "verplichtingen van de onderneming"); de stagebegeleider van
          //   school komt vaak eens langs (gewoonte, nakijken)
          {
            kind: 'whatdo',
            id: 'r.be.l.stage.1.wd1',
            situation: 'Op de eerste dag ontmoet Jayden Linda. Zij is zijn mentor. Wat doet een mentor?',
            options: [
              { id: 'a', text: 'Ze begeleidt je op het werk, en leert je het vak.', best: true, feedback: 'Goed. Met vragen ga je in het bedrijf eerst naar haar.' },
              { id: 'b', text: 'Ze is je leerkracht, en ze geeft je punten op school.', best: false, feedback: 'Nee. Ze werkt in het bedrijf, niet op school.' },
              { id: 'c', text: 'Ze regelt je loon en je arbeidscontract.', best: false, feedback: 'Nee. Op stage heb je meestal geen arbeidscontract.' },
            ],
            why: 'De mentor werkt in het bedrijf. Zij leert je het werk en geeft je feedback. Op school heb je ook iemand: je stagebegeleider. Die komt vaak eens langs.',
          },
          // ⚖️ check: bij duaal leren moet de werkplek erkend zijn, door het sectoraal partnerschap of,
          //   zonder partnerschap, door de VDAB (sinds 1 januari 2021, na de opheffing van Syntra
          //   Vlaanderen) (vlaio.be "opheffing Syntra Vlaanderen"; app.werkplekduaal.be)
          {
            kind: 'whatdo',
            id: 'r.be.l.stage.1.wd2',
            situation: 'Het bedrijf zegt: "Dat papier van school komt later wel. Begin maandag maar." Wat kan Jayden het beste doen?',
            options: [
              { id: 'a', text: 'Hij begint maandag. Het papier komt later wel.', best: false, feedback: 'Dat is logisch. Maar dan telt zijn stage misschien niet mee.' },
              { id: 'b', text: 'Hij vraagt eerst op school of de overeenkomst klaar is.', best: true, feedback: 'Goed. Dan weet hij zeker dat alles klopt.' },
              { id: 'c', text: 'Hij zoekt meteen een ander stagebedrijf.', best: false, feedback: 'Dat hoeft niet. Eerst even vragen.' },
            ],
            why: 'Zonder getekende overeenkomst begin je beter niet. Bij duaal leren moet het bedrijf ook erkend zijn. Je school helpt je daarbij.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.stage.1.wa1',
            question: 'Je weet niet of iedereen je stageovereenkomst al heeft getekend. Wie vraag je het?',
            options: [
              { id: 'a', who: 'interimkantoor', best: false, feedback: 'Een interimkantoor gaat niet over je stage.' },
              { id: 'b', who: 'praktijkopleider', best: false, feedback: 'Zij weet het misschien. Maar de school regelt de overeenkomst.' },
              { id: 'c', who: 'school', best: true, feedback: 'Goed. De school regelt de overeenkomst met jou en het bedrijf.' },
            ],
            why: 'Je stagebegeleider van school regelt de stageovereenkomst. Op het werk ga je met vragen naar je mentor.',
          },
          { kind: 'model', id: 'r.be.l.stage.1.mo1', context: 'Het bedrijf wil dat je begint. Je weet niet of de overeenkomst klaar is.', nl: 'Is mijn stageovereenkomst al getekend? Dan kan ik beginnen.' },
        ],
      },
      {
        // Les 14.2 · Feedback en beoordeling (geldt ook in Vlaanderen)
        id: 'r.be.l.stage.2',
        title: 'Feedback en beoordeling',
        goal: 'Je vraagt om feedback en je doet er iets mee. Je weet wat je doet met je beoordeling.',
        remember: 'Vraag zelf om feedback. Vraag om een voorbeeld.',
        // Wie kan je helpen: je mentor · je stagebegeleider van school.
        help: ['praktijkopleider', 'school'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.stage.2.sc1',
            picture: 'Fatima en Mark aan een tafel in de refter van een hotel. Op tafel een formulier.',
            lines: [
              'Fatima loopt stage in een hotel.',
              'Ze werkt bij de schoonmaak en het linnen.',
              'Na 6 weken heeft ze een gesprek met Mark, haar mentor.',
              'Hij zegt: "Je werkt netjes. Maar je vraagt te weinig."',
            ],
          },
          {
            kind: 'rule',
            id: 'r.be.l.stage.2.ru1',
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
            id: 'r.be.l.stage.2.wd1',
            situation: 'Fatima vindt dat niet leuk om te horen. Wat kan Fatima het beste doen?',
            options: [
              { id: 'a', text: 'Ze zegt: "Dat klopt niet. Ik weet alles al."', best: false, feedback: 'Dat snap ik. Maar zo leert ze er niets van.' },
              { id: 'b', text: 'Ze knikt, en ze zegt verder niets.', best: false, feedback: 'Dan weet ze nog niet wat ze anders kan doen.' },
              { id: 'c', text: 'Ze vraagt: "Wanneer had ik iets moeten vragen?"', best: true, feedback: 'Goed. Met een voorbeeld weet ze wat beter kan.' },
            ],
            why: 'Feedback gaat over je werk, niet over jou. Vraag om een voorbeeld. Dan weet je wat je anders kunt doen. Zo leer je het meest op je stage.',
          },
          // ⚖️ check: zelf om feedback vragen is gewoon (gewoonte; Vlaamse NT2-docent nakijken)
          {
            kind: 'truefalse',
            id: 'r.be.l.stage.2.tf1',
            statement: 'Je mag zelf om feedback vragen, ook zonder gesprek.',
            answer: true,
            why: 'Vragen om feedback laat zien dat je wilt leren. Vraag het na een klus: "Wat ging goed? Wat kan beter?" Schrijf het op, bijvoorbeeld in je stagemap of portfolio.',
          },
          // ⚖️ check: de school (de klassenraad) beslist over je resultaat; het bedrijf of de mentor
          //   geeft zijn oordeel (onderwijs.vlaanderen.be, evaluatie stage; nakijken)
          {
            kind: 'whatdo',
            id: 'r.be.l.stage.2.wd2',
            situation: 'Aan het eind krijgt Fatima een beoordeling. Ze is het er niet mee eens. Wat kan Fatima het beste doen?',
            options: [
              { id: 'a', text: 'Ze bespreekt het met Mark, en met haar begeleider van school.', best: true, feedback: 'Goed. Zo kan ze uitleggen waarom.' },
              { id: 'b', text: 'Ze tekent, en ze zegt er niets van. Mark is de baas.', best: false, feedback: 'Dat snap ik. Maar het oneens zijn mag. Dan moet ze het wel zeggen.' },
              { id: 'c', text: 'Ze praat er alleen met haar klasgenoten over.', best: false, feedback: 'Steun is fijn. Maar zo verandert er niets aan de beoordeling.' },
            ],
            why: 'Het oneens zijn mag. Zeg rustig waarom, met voorbeelden. Bespreek het ook met je school. De school beslist over je punten. Het bedrijf geeft zijn oordeel.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.stage.2.wa1',
            question: 'Je wilt weten wat beter kan in je werk op je stage. Wie vraag je het eerst?',
            options: [
              { id: 'a', who: 'praktijkopleider', best: true, feedback: 'Goed. Je mentor ziet je werk elke dag.' },
              { id: 'b', who: 'hr', best: false, feedback: 'De personeelsdienst gaat over contracten en loon, niet over je stagewerk.' },
              { id: 'c', who: 'school', best: false, feedback: 'Kan ook. Maar je mentor ziet je werk elke dag.' },
            ],
            why: 'Vraag het eerst aan je mentor, na een klus. Ben je het oneens met je beoordeling? Bespreek het ook met je begeleider van school.',
          },
          { kind: 'model', id: 'r.be.l.stage.2.mo1', context: 'Je hebt een klus af. Je vraagt om feedback.', nl: 'Wat ging goed? En wat kan ik beter doen?' },
        ],
      },
      {
        // Les 14.3 · Als het niet goed gaat
        id: 'r.be.l.stage.3',
        title: 'Als het niet goed gaat',
        goal: 'Je weet wat je doet als je ziek bent of weinig leert. Ook als ze je slecht behandelen.',
        remember: 'Gaat het niet goed op stage? Praat erover: eerst op je werk, dan met school.',
        // Wie kan je helpen: je stagebegeleider · het CLB (gratis, in vertrouwen) · de
        //   vertrouwenspersoon · Unia of het Vlaams Mensenrechteninstituut · bij te lange
        //   werktijden: Toezicht op de Sociale Wetten.
        help: ['school', 'vertrouwenspersoon', 'meldpunt', 'tsw'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.stage.3.sc1',
            picture: 'Kevin alleen in een hoek van een magazijn, bij een berg lege dozen. Hij kijkt op de klok.',
            lines: [
              'Kevin loopt stage in een magazijn.',
              'Hij zou het vak leren. Maar hij maakt elke dag alleen dozen plat.',
              'Niemand legt iets uit.',
              'Hij werkt ook vaak langer dan afgesproken.',
            ],
          },
          // ⚖️ check: een stage is om te leren; de stagiair is geen gewone werknemer (KB 21 september 2004
          //   bescherming van stagiairs; onderwijs.vlaanderen.be leerlingenstages)
          // ⚖️ check: voor stagiairs gelden de regels voor welzijn en veiligheid (Welzijnswet 4 augustus
          //   1996; KB stagiairs 2004) en de regels voor arbeidstijd (Arbeidswet 16 maart 1971 geldt ook
          //   voor wie onder gezag werkt zonder arbeidsovereenkomst; nakijken voor leerlingenstages)
          // ⚖️ check: discriminatie is verboden, ook op stage (Antidiscriminatiewet 10 mei 2007; Vlaams
          //   gelijkekansendecreet 10 juli 2008)
          {
            kind: 'rule',
            id: 'r.be.l.stage.3.ru1',
            emoji: '🗣️',
            title: 'Gaat het niet goed op stage? Praat erover: eerst op je werk, dan met school.',
            body: [
              'Een stage is om te leren. Je bent geen goedkope werknemer.',
              'Ook op stage gelden regels voor werktijden en veiligheid.',
              'Discriminatie op stage is verboden.',
              'Stop nooit zomaar. Praat erover.',
            ],
            rule: 'geschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.stage.3.wd1',
            situation: 'Wat doet Kevin?',
            options: [
              { id: 'a', text: 'Hij blijft gewoon gaan. Over 2 maanden is het gedaan.', best: false, feedback: 'Dat is logisch. Maar dan leert hij weinig.' },
              { id: 'b', text: 'Hij stopt met de stage, zonder iets te zeggen.', best: false, feedback: 'Niet doen. Dan heeft hij misschien een probleem met school.' },
              { id: 'c', text: 'Hij praat met zijn mentor, en ook met school.', best: true, feedback: 'Goed. Zo kan er iets veranderen.' },
            ],
            why: 'Een stage is om te leren. Je bent geen goedkope werknemer. Ook op stage gelden regels voor werktijden. Leer je weinig? Zeg het eerst tegen je mentor. Helpt dat niet? Ga naar je begeleider van school. Stop nooit zomaar.',
          },
          // ⚖️ check: ziek op stage: meld het aan het bedrijf en aan school; hoe, staat in de
          //   stageovereenkomst of het stagereglement (gewoonte, per school; nakijken)
          {
            kind: 'truefalse',
            id: 'r.be.l.stage.3.tf1',
            statement: 'Ben je ziek op stage? Dan meld je je alleen ziek op school.',
            answer: false,
            why: 'Meld je ziek bij het bedrijf, vóór je begint. Meld het ook op school. Hoe het moet, staat vaak in je stageovereenkomst. Weer beter? Meld dat ook aan allebei.',
          },
          // ⚖️ check: het CLB (centrum voor leerlingenbegeleiding) helpt leerlingen gratis,
          //   onafhankelijk en in vertrouwen, ook bij problemen op school (vlaanderen.be "centrum voor
          //   leerlingenbegeleiding"; eurydice); discriminatie melden: Unia of het Vlaams
          //   Mensenrechteninstituut (vlaanderen.be "meldpunten discriminatie op het werk")
          {
            kind: 'whatdo',
            id: 'r.be.l.stage.3.wd2',
            situation: 'Een collega maakt grappen over Kevins afkomst. Andere stagiairs krijgen beter werk. Wat kan Kevin het beste doen?',
            options: [
              { id: 'a', text: 'Hij zegt het op school, of bij het CLB.', best: true, feedback: 'Goed. Zij kunnen hem helpen.' },
              { id: 'b', text: 'Hij lacht mee. Hij wil geen gedoe op zijn stage.', best: false, feedback: 'Dat snap ik. Maar het mag niet, en hij hoeft het niet te aanvaarden.' },
              { id: 'c', text: 'Hij zoekt zelf een nieuwe stage, zonder iets te zeggen.', best: false, feedback: 'Dan gaat het bij de volgende stagiair misschien ook zo.' },
            ],
            why: 'Discriminatie op stage is verboden. Praat erover met je stagebegeleider of met het CLB. Het CLB helpt leerlingen gratis en in vertrouwen. Je kunt het ook melden bij Unia.',
          },
          // ⚖️ check: Toezicht op de Sociale Wetten controleert werktijden (werk.belgie.be, niet te openen op 30 okt 2026)
          {
            kind: 'whoask',
            id: 'r.be.l.stage.3.wa1',
            question: 'Je werkt op je stage elke week veel langer dan afgesproken. School helpt niet. Wie kan je helpen?',
            options: [
              { id: 'a', who: 'tsw', best: true, feedback: 'Goed. Zij controleren werktijden in bedrijven.' },
              { id: 'b', who: 'politie', best: false, feedback: 'Te lang werken is geen zaak voor de politie.' },
              { id: 'c', who: 'huisarts', best: false, feedback: 'De huisarts helpt bij je gezondheid, niet bij je werktijden.' },
            ],
            why: 'Praat eerst met je mentor en met school. Werk je toch veel te lang? Dan kun je het melden bij Toezicht op de Sociale Wetten.',
          },
          { kind: 'model', id: 'r.be.l.stage.3.mo1', context: 'Je leert weinig op je stage.', nl: 'Ik leer hier weinig. Kunnen we er samen met school over praten?' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.stage.1.mo1': [
      { text: 'Oké, ik begin vandaag al. Dat papier komt later wel.', feedback: 'Zonder getekende overeenkomst begin je beter nog niet.' },
      { text: 'Ik weet niet of het mag. Ik zeg maar niets.', feedback: 'Dan weet je niet of alles klaar is. Vraag het gewoon.' },
    ],
    'r.be.l.stage.2.mo1': [
      { text: 'Ik ben klaar. Ik ga maar door met de volgende klus.', feedback: 'Dan hoor je niet wat goed ging en wat beter kan.' },
      { text: 'Het ging toch goed? Ik heb geen tips nodig.', feedback: 'Zo vraag je geen feedback. Dan leer je minder.' },
    ],
    'r.be.l.stage.3.mo1': [
      { text: 'Het is hier saai. Ik kom morgen gewoon niet meer.', feedback: 'Dan los je niets op. Praat eerst met school en het bedrijf.' },
      { text: 'Ik leer weinig, maar ik zeg er maar niets over.', feedback: 'Dan verandert er niets. Je mag het zeggen.' },
    ],
  },
  advice: {
    'r.be.l.stage.1.ru1': 'advice',
    'r.be.l.stage.3.ru1': 'abuse',
  },
};
