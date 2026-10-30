import type { RuleUnit } from '../types';

/**
 * Sectorlessen: 2 korte lessen per sector (curriculum, deel 6). Same form and level as the 10 units.
 * Converted from docs/werkregels-curriculum.md; edit the curriculum first, then this file.
 * `// ⚖️ check:` marks a fact the expert must check (docs/werkregels-bronnen.md). The marker is
 * never shown or read aloud. `// Redactie:` notes are for the makers only.
 */

// Sector bouw · Werken in de bouw (les B.1, B.2)
export const buildUnit: RuleUnit = {
  id: 'r.build',
  title: 'Werken in de bouw',
  emoji: '🏗️',
  color: '#d98e04',
  lessons: [
    {
      // Les B.1 · VCA en je beschermende spullen
      id: 'r.l.build.1',
      title: 'VCA en je beschermende spullen',
      goal: 'Je weet wat VCA is. Je weet dat je beschermende spullen gratis krijgt en altijd draagt.',
      remember: 'Helm en schoenen verplicht? Draag ze altijd, ook als niemand kijkt.',
      // Wie kan je helpen: je uitvoerder · je uitzendbureau · de preventiemedewerker · de
      //   Nederlandse Arbeidsinspectie.
      help: ['leidinggevende', 'uitzendbureau', 'arbeidsinspectie'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.build.1.sc1',
          picture: 'Mohammed bij het hek van een bouwplaats. Op het hek een bord met een helm en schoenen.',
          lines: [
            'Mohammed gaat via een uitzendbureau op de bouw werken.',
            'Het bureau vraagt: "Heb je VCA?"',
            'Mohammed weet niet wat dat is.',
            'Op het hek hangt een bord: "Helm en veiligheidsschoenen verplicht."',
          ],
        },
        // ⚖️ check: Je werkgever geeft ze gratis ⚖️.
        // ⚖️ check: Moet je ze dragen? Dan doe je dat ook ⚖️.
        {
          kind: 'rule',
          id: 'r.l.build.1.ru1',
          emoji: '⛑️',
          title: 'Helm en schoenen verplicht? Draag ze altijd, ook als niemand kijkt.',
          body: [
            'VCA is een cursus met een examen over veilig werken.',
            'Beschermende spullen heten ook PBM.',
            'Je werkgever geeft ze gratis.',
            'Moet je ze dragen? Dan doe je dat ook.',
          ],
          rule: 'geschreven',
        },
        // ⚖️ check: VCA is geen wet ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.build.1.tf1',
          statement: 'VCA is een diploma over veilig werken.',
          answer: true,
          why: 'VCA is een cursus met een examen. Je leert de gevaren op de bouw kennen. VCA is geen wet. Maar veel bedrijven laten je zonder VCA niet op de bouwplaats. Vraag wie de cursus betaalt.',
        },
        // ⚖️ check: Je werkgever geeft ze gratis ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.build.1.wd1',
          situation: 'Mohammed krijgt geen veiligheidsschoenen. Hij heeft alleen gewone sneakers. Wat kan Mohammed het beste doen?',
          options: [
            { id: 'a', text: 'Hij werkt op zijn sneakers. Het is maar voor één dag.', best: false, feedback: 'Begrijpelijk. Maar een spijker gaat zo door een sneaker.' },
            { id: 'b', text: 'Hij koopt zelf schoenen, en betaalt ze van zijn loon.', best: false, feedback: 'Goed bedoeld. Maar zijn werkgever moet ze gratis geven.' },
            { id: 'c', text: 'Hij vraagt de uitvoerder om veiligheidsschoenen.', best: true, feedback: 'Goed. De uitvoerder is de baas op de bouwplaats. Die regelt dit.' },
          ],
          why: 'Beschermende spullen heten ook PBM: persoonlijke beschermingsmiddelen. Denk aan een helm, schoenen, een bril en een hesje. Je werkgever geeft ze gratis. Werk je via een uitzendbureau? Vraag dan wie ze geeft.',
        },
        // ⚖️ check: Moet je een helm of andere bescherming dragen? Dan moet je dat ook doen ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.build.1.tf2',
          statement: 'Een helm hoef je alleen op als de baas kijkt.',
          answer: false,
          why: 'Moet je een helm of andere bescherming dragen? Dan moet je dat ook doen. Ook als het warm is. Ook als niemand kijkt. Zo bescherm je jezelf.',
        },
        {
          kind: 'whoask',
          id: 'r.l.build.1.wa1',
          question: 'Je werkt via een uitzendbureau. Je wilt een VCA-cursus doen. Wie vraag je het?',
          options: [
            { id: 'a', who: 'uitzendbureau', best: true, feedback: 'Goed. Vraag ook wie de cursus betaalt.' },
            { id: 'b', who: 'uwv', best: false, feedback: 'UWV gaat over uitkeringen. Vraag het eerst bij je werk.' },
            { id: 'c', who: 'arbeidsinspectie', best: false, feedback: 'De Arbeidsinspectie controleert bedrijven. Ze geeft geen cursussen.' },
          ],
          why: 'Je uitzendbureau of je werkgever weet welke cursus je nodig hebt.',
        },
        { kind: 'model', id: 'r.l.build.1.mo1', context: 'Je hebt nog geen veiligheidsschoenen.', nl: 'Ik heb nog geen veiligheidsschoenen. Waar krijg ik die?' },
      ],
    },
    {
      // Les B.2 · Toolbox en eerst even kijken
      id: 'r.l.build.2',
      title: 'Toolbox en eerst even kijken',
      goal: 'Je gaat naar de toolbox en je kijkt eerst rond. Je loopt nooit onder een last.',
      remember: 'Eerst kijken, dan beginnen. Loop nooit onder een hangende last.',
      // Wie kan je helpen: je uitvoerder · de preventiemedewerker · de Nederlandse
      //   Arbeidsinspectie.
      help: ['leidinggevende', 'arbeidsinspectie'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.build.2.sc1',
          picture: 'Kevin op een bouwplaats. Boven het pad hangt een betonblok aan een kraan.',
          lines: [
            'Elke maandag is er een toolboxmeeting over veiligheid.',
            'Daarna moet Kevin snel een plaat halen.',
            'De kortste weg is onder de kraan door.',
            'Aan de kraan hangt een zwaar blok.',
          ],
        },
        // ⚖️ check: Boven 2,5 meter ⚖️ moet er bescherming tegen vallen zijn ⚖️.
        {
          kind: 'rule',
          id: 'r.l.build.2.ru1',
          emoji: '🏗️',
          title: 'Eerst kijken, dan beginnen. Loop nooit onder een hangende last.',
          body: [
            'Kijk vlak voor je begint: wat kan er misgaan?',
            'Loop nooit onder een hangende last.',
            'Boven 2,5 meter moet er bescherming tegen vallen zijn.',
            'Zie je gevaar? Begin niet, en meld het.',
          ],
          rule: 'geschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.build.2.wd1',
          situation: 'Kevin wil de plaat halen. Wat kan Kevin het beste doen?',
          options: [
            { id: 'a', text: 'Hij loopt snel onder het blok door. Het hangt toch vast.', best: false, feedback: 'Begrijpelijk. Maar een last kan altijd vallen.' },
            { id: 'b', text: 'Hij loopt om, ook al duurt dat langer.', best: true, feedback: 'Goed. Onder een hangende last loop je nooit.' },
            { id: 'c', text: 'Hij roept naar de kraanmachinist dat hij eraan komt.', best: false, feedback: 'Goed bedoeld. Maar onder de last blijft het gevaarlijk.' },
          ],
          why: 'Loop nooit onder een hangende last. Die kan vallen of zwaaien. Een paar minuten omlopen is altijd beter.',
        },
        // ⚖️ check: Boven 2,5 meter ⚖️ is er valgevaar.
        // ⚖️ check: Dan moet je werkgever zorgen voor bescherming ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.build.2.tf1',
          statement: 'Werk je hoger dan 2,5 meter? Dan moet er bescherming tegen vallen zijn.',
          answer: true,
          why: 'Boven 2,5 meter is er valgevaar. Dan moet je werkgever zorgen voor bescherming. Bijvoorbeeld een leuning of een harnas. Is die er niet? Ga dan niet verder, en zeg het meteen.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.build.2.wd2',
          situation: 'In de toolboxmeeting zegt de uitvoerder: "Doe altijd eerst een LMRA." Wat betekent dat?',
          options: [
            { id: 'a', text: 'Je kijkt vlak voor je begint wat er mis kan gaan.', best: true, feedback: 'Goed. Zo zie je gevaar op tijd.' },
            { id: 'b', text: 'Je vult aan het eind van de dag een lijst met uren in.', best: false, feedback: 'Nee. Het gaat over veiligheid, niet over uren.' },
            { id: 'c', text: 'Je wacht tot de uitvoerder het werk eerst voordoet.', best: false, feedback: 'Nee. Je kijkt zelf, vlak voor je begint.' },
          ],
          why: 'LMRA betekent: laatste minuut risicoanalyse. Vlak voor je begint, kijk je even rond. Wat kan er misgaan? Wat heb je nodig? Zie je gevaar? Begin dan niet, en meld het.',
        },
        { kind: 'model', id: 'r.l.build.2.mo1', context: 'Je ziet gevaar vlak voor je begint.', nl: 'Ik begin nog niet. Er hangt een last boven het pad.' },
      ],
    },
  ],
};

// Sector zorg · Werken in de zorg (les Z.1, Z.2)
export const careUnit: RuleUnit = {
  id: 'r.care',
  title: 'Werken in de zorg',
  emoji: '🩺',
  color: '#3a9d8f',
  lessons: [
    {
      // Les Z.1 · Hygiëne: schone handen, geen sieraden
      id: 'r.l.care.1',
      title: 'Hygiëne: schone handen, geen sieraden',
      goal: 'Je kent de hygiëneregels in de zorg. Je weet waarom ze er zijn.',
      remember: 'Schone handen voor en na elke cliënt. Geen sieraden aan handen en polsen.',
      // Wie kan je helpen: je leidinggevende · de hygiëne-deskundige van je werk · de bedrijfsarts.
      help: ['leidinggevende', 'bedrijfsarts'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.care.1.sc1',
          picture: 'Dewi bij een wastafel in een verpleeghuis. Op de rand liggen haar ring en haar horloge.',
          lines: [
            'Dewi begint in een verpleeghuis.',
            'Ze draagt graag een ring en een horloge.',
            'Haar collega Esra zegt: "Die moeten af. En je nagels zijn te lang."',
            'Dewi schrikt een beetje.',
          ],
        },
        // ⚖️ check: Geen sieraden aan je handen en polsen ⚖️.
        // ⚖️ check: Je nagels zijn kort en zonder nagellak ⚖️.
        {
          kind: 'rule',
          id: 'r.l.care.1.ru1',
          emoji: '🧼',
          title: 'Schone handen voor en na elke cliënt. Geen sieraden aan handen en polsen.',
          body: [
            'Maak je handen schoon voor en na elke cliënt.',
            'Geen sieraden aan je handen en polsen.',
            'Je nagels zijn kort en zonder nagellak.',
            'Kun je besmettelijk zijn? Bel vóór je dienst.',
          ],
          rule: 'geschreven',
        },
        // ⚖️ check: Daarom draag je geen sieraden aan je handen en polsen ⚖️.
        // ⚖️ check: Je nagels zijn kort en zonder nagellak ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.care.1.tf1',
          statement: 'In de zorg draag je geen ring en geen horloge.',
          answer: true,
          why: 'Onder een ring of horloge blijven bacteriën zitten. Zo kunnen cliënten ziek worden. Daarom draag je geen sieraden aan je handen en polsen. Je nagels zijn kort en zonder nagellak. Lang haar draag je vast.',
        },
        // ⚖️ check: Doe dat ook als je handschoenen uittrekt ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.care.1.wd1',
          situation: 'Dewi heeft net een cliënt geholpen. Ze moet meteen naar de volgende. Wat kan Dewi het beste doen?',
          options: [
            { id: 'a', text: 'Ze loopt meteen door. Haar handen zien er schoon uit.', best: false, feedback: 'Begrijpelijk. Maar bacteriën zie je niet.' },
            { id: 'b', text: 'Ze trekt alleen een paar nieuwe handschoenen aan.', best: false, feedback: 'Handschoenen helpen. Maar ook haar handen moeten schoon zijn.' },
            { id: 'c', text: 'Ze maakt eerst haar handen schoon.', best: true, feedback: 'Goed. Zo neemt ze geen bacteriën mee.' },
          ],
          why: 'Maak je handen schoon voor en na elke cliënt. Met water en zeep, of met handalcohol. Doe dat ook als je handschoenen uittrekt. Zo bescherm je je cliënten en jezelf.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.care.1.wd2',
          situation: 'Dewi heeft vannacht overgegeven. Nu voelt ze zich weer goed. Wat kan Dewi het beste doen?',
          options: [
            { id: 'a', text: 'Ze gaat werken. Ze voelt zich nu toch goed.', best: false, feedback: 'Begrijpelijk. Maar ze kan cliënten nog besmetten.' },
            { id: 'b', text: 'Ze belt vóór haar dienst, en zegt dat het besmettelijk kan zijn.', best: true, feedback: 'Goed. Ze hoeft niet te zeggen wat ze heeft. Dit wel.' },
            { id: 'c', text: 'Ze gaat werken, en draagt de hele dag een mondkapje.', best: false, feedback: 'Goed bedoeld. Maar dat helpt niet genoeg.' },
          ],
          why: 'Overgeven of diarree kan besmettelijk zijn. Cliënten worden sneller en erger ziek dan gezonde mensen. Bel dus vóór je dienst. Volg het protocol van je werk. Daar staat in wat je moet doen.',
        },
        {
          kind: 'whoask',
          id: 'r.l.care.1.wa1',
          question: 'Je hebt een vraag over de hygiëneregels op je afdeling. Wie vraag je het eerst?',
          options: [
            { id: 'a', who: 'uwv', best: false, feedback: 'UWV gaat over uitkeringen, niet over hygiëne.' },
            { id: 'b', who: 'juridischloket', best: false, feedback: 'Het Juridisch Loket helpt bij rechten, niet bij hygiëne.' },
            { id: 'c', who: 'leidinggevende', best: true, feedback: 'Goed. Je leidinggevende kent de regels van je afdeling.' },
          ],
          why: 'Je leidinggevende kent het protocol. Vaak is er ook een collega die op hygiëne let.',
        },
        { kind: 'model', id: 'r.l.care.1.mo1', context: 'Je doet je sieraden af voor je dienst.', nl: 'Mijn ring en horloge gaan af. Waar kan ik ze veilig leggen?' },
      ],
    },
    {
      // Les Z.2 · Privacy en medicijnen
      id: 'r.l.care.2',
      title: 'Privacy en medicijnen',
      goal: 'Je deelt niets over cliënten. Je geeft alleen medicijnen als je het geleerd hebt. Je meldt fouten.',
      remember: 'Wat je over cliënten weet, blijft op je werk.',
      // Wie kan je helpen: je leidinggevende · een ervaren collega · de vertrouwenspersoon, als je
      //   werk die heeft.
      help: ['leidinggevende', 'collega', 'vertrouwenspersoon'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.care.2.sc1',
          picture: 'Fatima in de huiskamer van een zorghuis. Op tafel een medicijnrol en een telefoon.',
          lines: [
            'Fatima werkt in een zorghuis.',
            'Ze heeft een gezellige middag met meneer De Vries.',
            'Ze wil een foto maken voor de groepsapp.',
            'Daarna moet ze zijn medicijnen geven.',
            'Dat heeft ze nog nooit gedaan.',
          ],
        },
        // ⚖️ check: Wat je over cliënten weet, is privé ⚖️.
        // ⚖️ check: Geef alleen medicijnen als je het geleerd hebt ⚖️.
        // ⚖️ check: Een fout met medicijnen meld je altijd ⚖️.
        {
          kind: 'rule',
          id: 'r.l.care.2.ru1',
          emoji: '💊',
          title: 'Wat je over cliënten weet, blijft op je werk.',
          body: [
            'Wat je over cliënten weet, is privé.',
            "Je deelt geen foto's of verhalen over cliënten.",
            'Geef alleen medicijnen als je het geleerd hebt.',
            'Een fout met medicijnen meld je altijd.',
          ],
          rule: 'geschreven',
        },
        // ⚖️ check: Wat je over cliënten weet, is privé. Dat geldt ook voor foto's ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.care.2.tf1',
          statement: 'Een leuke foto van een cliënt mag gewoon in de groepsapp.',
          answer: false,
          why: "Wat je over cliënten weet, is privé. Dat geldt ook voor foto's. Je deelt niets zonder toestemming. Ook niet thuis of online. Volg de regels van je werk.",
        },
        // ⚖️ check: Geef alleen medicijnen als je het geleerd hebt ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.care.2.wd1',
          situation: 'Fatima moet medicijnen geven. Ze heeft dat nog nooit geleerd. Wat kan Fatima het beste doen?',
          options: [
            { id: 'a', text: 'Ze vraagt eerst uitleg aan een ervaren collega.', best: true, feedback: 'Goed. Je geeft alleen medicijnen als je het geleerd hebt.' },
            { id: 'b', text: 'Ze geeft ze toch. Het staat allemaal op de lijst.', best: false, feedback: 'Begrijpelijk. Maar zonder uitleg kan ze een fout maken.' },
            { id: 'c', text: 'Ze legt de pillen op tafel. Meneer neemt ze zelf wel.', best: false, feedback: 'Dan weet niemand of hij ze echt neemt.' },
          ],
          why: 'Geef alleen medicijnen als je het geleerd hebt. En als het mag van je werk. Check altijd de lijst: de juiste persoon, het juiste medicijn, de juiste tijd. Weet je het niet zeker? Vraag het eerst.',
        },
        // ⚖️ check: Een fout met medicijnen meld je altijd ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.care.2.wd2',
          situation: 'Fatima geeft een pil een uur te laat. Niemand heeft het gezien. Wat kan Fatima het beste doen?',
          options: [
            { id: 'a', text: 'Ze zegt niets. Het was maar een uurtje.', best: false, feedback: 'Begrijpelijk. Maar soms is een uur belangrijk.' },
            { id: 'b', text: 'Ze geeft morgen een extra pil, om het goed te maken.', best: false, feedback: 'Niet doen. Dat kan gevaarlijk zijn.' },
            { id: 'c', text: 'Ze meldt het, zoals het protocol zegt.', best: true, feedback: 'Goed. Dan kan iemand checken of het goed gaat.' },
          ],
          why: 'Een fout met medicijnen meld je altijd. Dat heet een incident melden. Het gaat niet om straf. Het gaat erom dat de cliënt veilig is. En dat het team ervan leert.',
        },
        {
          kind: 'whoask',
          id: 'r.l.care.2.wa1',
          question: 'Je weet niet hoe je een medicijn moet geven. Wie vraag je het?',
          options: [
            { id: 'a', who: 'huisarts', best: false, feedback: 'De huisarts werkt niet op je afdeling. Vraag het op je werk.' },
            { id: 'b', who: 'leidinggevende', best: true, feedback: 'Goed. Je leidinggevende regelt uitleg of hulp.' },
            { id: 'c', who: 'uwv', best: false, feedback: 'UWV gaat over uitkeringen, niet over medicijnen.' },
          ],
          why: 'Vraag het op je werk: aan je leidinggevende of een ervaren collega.',
        },
        { kind: 'model', id: 'r.l.care.2.mo1', context: 'Je moet iets doen wat je nog niet geleerd hebt.', nl: 'Ik heb dit nog niet geleerd. Wil je het mij uitleggen?' },
      ],
    },
  ],
};

// Sector horeca · Werken in de horeca (les H.1, H.2)
export const horecaUnit: RuleUnit = {
  id: 'r.horeca',
  title: 'Werken in de horeca',
  emoji: '🍳',
  color: '#d0582a',
  lessons: [
    {
      // Les H.1 · Hygiëne in de keuken
      id: 'r.l.horeca.1',
      title: 'Hygiëne in de keuken',
      goal: 'Je weet wat HACCP is. Je koelt eten goed, en je houdt rauw en klaar eten apart.',
      remember: 'Werk schoon, koel goed, en zet de datum erop.',
      // Wie kan je helpen: de chef of je leidinggevende · de hygiënecode voor de horeca.
      help: ['leidinggevende'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.horeca.1.sc1',
          picture: 'Jayden in een restaurantkeuken. Hij zet een bak kip in een koelkast. Op de bak een sticker.',
          lines: [
            'Jayden werkt in de keuken van een restaurant.',
            'Chef Kevin wijst naar de koelkast.',
            '"Op elke bak een sticker met de datum. Dat is HACCP."',
            'Jayden knikt, maar hij snapt het niet helemaal.',
          ],
        },
        // ⚖️ check: HACCP is een systeem voor veilig eten ⚖️.
        // ⚖️ check: Koud eten bewaar je op 7 graden of kouder ⚖️.
        {
          kind: 'rule',
          id: 'r.l.horeca.1.ru1',
          emoji: '🧊',
          title: 'Werk schoon, koel goed, en zet de datum erop.',
          body: [
            'HACCP is een systeem voor veilig eten.',
            'Zet op elke bak een sticker met de datum.',
            'Koud eten bewaar je op 7 graden of kouder.',
            'Houd rauw vlees en klaar eten apart.',
          ],
          rule: 'geschreven',
        },
        // ⚖️ check: Elk bedrijf met eten moet zo werken ⚖️.
        // ⚖️ check: In de horeca staat het in de hygiënecode ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.horeca.1.tf1',
          statement: 'HACCP is een manier van werken om eten veilig te houden.',
          answer: true,
          why: 'HACCP is een systeem voor veilig eten. Elk bedrijf met eten moet zo werken. In de horeca staat het in de hygiënecode. Bijvoorbeeld: stickers met de datum, goed koelen en schoon werken. Een inspecteur van de NVWA komt soms kijken.',
        },
        // ⚖️ check: Koud eten bewaar je in de koelkast, op 7 graden of kouder ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.horeca.1.wd1',
          situation: 'Een bak saus staat al 2 uur op het aanrecht. Het is warm in de keuken. Wat kan Jayden het beste doen?',
          options: [
            { id: 'a', text: 'Hij zet de bak snel terug in de koelkast.', best: false, feedback: 'Begrijpelijk. Maar misschien is de saus al niet meer goed.' },
            { id: 'b', text: 'Hij vraagt de chef wat ermee moet.', best: true, feedback: 'Goed. De chef weet wat de regels zijn.' },
            { id: 'c', text: 'Hij ruikt eraan. Ruikt het goed, dan gebruikt hij het.', best: false, feedback: 'Bacteriën ruik je niet altijd.' },
          ],
          why: 'Koud eten bewaar je in de koelkast, op 7 graden of kouder. Stond het te lang warm? Dan kunnen er bacteriën in groeien. Weet je het niet zeker? Vraag het, of gooi het weg.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.horeca.1.wd2',
          situation: 'Jayden heeft net rauwe kip gesneden. Nu moet hij sla snijden. Wat kan Jayden het beste doen?',
          options: [
            { id: 'a', text: 'Hij wast zijn handen, en pakt een schone plank.', best: true, feedback: 'Goed. Zo komen er geen bacteriën van de kip op de sla.' },
            { id: 'b', text: 'Hij spoelt het mes even af onder de kraan.', best: false, feedback: 'Dat is niet genoeg. De plank en zijn handen zijn ook vies.' },
            { id: 'c', text: 'Hij gebruikt dezelfde plank. Hij snijdt de sla toch heel snel.', best: false, feedback: 'Snel helpt niet. Bacteriën gaan meteen mee.' },
          ],
          why: 'Rauw vlees heeft vaak bacteriën. Houd rauw en klaar eten altijd apart. Gebruik schone planken en messen. Was je handen na rauw vlees.',
        },
        { kind: 'model', id: 'r.l.horeca.1.mo1', context: 'Je weet niet zeker of eten nog goed is.', nl: 'Chef, deze saus stond lang buiten. Wat doe ik ermee?' },
      ],
    },
    {
      // Les H.2 · Allergenen en fooi
      id: 'r.l.horeca.2',
      title: 'Allergenen en fooi',
      goal: 'Je raadt nooit bij een vraag over allergie. Je weet hoe het zit met fooi.',
      remember: 'Allergie? Raad nooit. Vraag het na in de keuken.',
      // Wie kan je helpen: de chef of je leidinggevende · bij te weinig loon: de Nederlandse
      //   Arbeidsinspectie.
      help: ['leidinggevende', 'arbeidsinspectie'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.horeca.2.sc1',
          picture: 'Esra in de bediening met een notitieblok. Een gast wijst naar de taart op de kaart.',
          lines: [
            'Esra werkt in de bediening van een café.',
            'Een gast vraagt: "Zitten er noten in de taart? Ik ben allergisch."',
            'Esra weet het niet zeker.',
            'Het is druk.',
          ],
        },
        // ⚖️ check: Een restaurant moet weten welke allergenen in het eten zitten ⚖️.
        // ⚖️ check: Fooi telt niet mee voor je minimumloon ⚖️.
        {
          kind: 'rule',
          id: 'r.l.horeca.2.ru1',
          emoji: '🥜',
          title: 'Allergie? Raad nooit. Vraag het na in de keuken.',
          body: [
            'Een restaurant moet weten welke allergenen in het eten zitten.',
            'Raad nooit. Vraag het na in de keuken.',
            'Fooi telt niet mee voor je minimumloon.',
            'Vraag hoe de fooi wordt verdeeld.',
          ],
          rule: 'geschreven',
        },
        // ⚖️ check: Een restaurant moet weten welke allergenen in het eten zitten ⚖️.
        // ⚖️ check: Het gaat om 14 allergenen ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.horeca.2.wd1',
          situation: 'De gast is allergisch voor noten. Wat kan Esra het beste doen?',
          options: [
            { id: 'a', text: 'Ze zegt: "Nee hoor, dat denk ik niet."', best: false, feedback: 'Begrijpelijk. Maar raden kan iemand heel ziek maken.' },
            { id: 'b', text: 'Ze zegt: "Ik vraag het even na in de keuken."', best: true, feedback: 'Goed. Zo krijgt de gast het juiste antwoord.' },
            { id: 'c', text: 'Ze raadt de gast aan om iets anders te kiezen.', best: false, feedback: 'Aardig bedoeld. Maar de gast wil een eerlijk antwoord.' },
          ],
          why: 'Sommige mensen worden heel ziek van noten, melk of gluten. Dat heet een allergie. Een restaurant moet weten welke allergenen in het eten zitten. Het gaat om 14 allergenen. Raad nooit. Vraag het na.',
        },
        // ⚖️ check: Je werkgever betaalt je gewoon minstens het minimumloon ⚖️.
        // ⚖️ check: Fooi mag hij daar niet bij optellen ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.horeca.2.tf1',
          statement: 'Fooi telt mee voor je minimumloon.',
          answer: false,
          why: 'Fooi is extra, van de gasten. Je werkgever betaalt je gewoon minstens het minimumloon. Fooi mag hij daar niet bij optellen. Vraag hoe de fooi in jullie team wordt verdeeld.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.horeca.2.wd2',
          situation: 'Esra werkt er al 2 maanden. Ze hoort niets over de fooi. Wat kan Esra het beste doen?',
          options: [
            { id: 'a', text: 'Ze vraagt haar leidinggevende hoe het team de fooi verdeelt.', best: true, feedback: 'Goed. Elk team doet het anders. Vragen is normaal.' },
            { id: 'b', text: 'Ze pakt elke avond zelf wat geld uit de pot.', best: false, feedback: 'Niet doen. Dan lijkt het op stelen.' },
            { id: 'c', text: 'Ze zegt niets. Fooi is toch niet zo belangrijk.', best: false, feedback: 'Mag. Maar fooi kan best veel geld zijn.' },
          ],
          why: 'Elk bedrijf verdeelt fooi op een eigen manier. Soms krijgt iedereen evenveel. Soms gaat het naar uren. Vraag het gewoon. Het is geen rare vraag.',
        },
        {
          kind: 'whoask',
          id: 'r.l.horeca.2.wa1',
          question: 'Je baas telt de fooi mee als loon. Je krijgt zo te weinig. Waar meld je dat?',
          options: [
            { id: 'a', who: 'politie', best: false, feedback: 'De politie is voor misdaad en gevaar.' },
            { id: 'b', who: 'arbeidsinspectie', best: true, feedback: 'Goed. De Arbeidsinspectie controleert het minimumloon.' },
            { id: 'c', who: 'uitzendbureau', best: false, feedback: 'Werk je niet via een bureau? Dan kan het bureau niets doen.' },
          ],
          why: 'Te weinig loon kun je melden bij de Nederlandse Arbeidsinspectie, ook zonder je naam.',
        },
        { kind: 'model', id: 'r.l.horeca.2.mo1', context: 'Een gast vraagt naar allergenen.', nl: 'Ik weet het niet zeker. Ik vraag het even in de keuken.' },
      ],
    },
  ],
};

// Sector schoonmaak · Werken in de schoonmaak (les S.1, S.2)
export const cleanUnit: RuleUnit = {
  id: 'r.clean',
  title: 'Werken in de schoonmaak',
  emoji: '🧽',
  color: '#3f93b8',
  lessons: [
    {
      // Les S.1 · Schoonmaakmiddelen: nooit mengen
      id: 'r.l.clean.1',
      title: 'Schoonmaakmiddelen: nooit mengen',
      goal: 'Je mengt nooit middelen en je leest het etiket. Je weet wat je doet als je alleen werkt.',
      remember: 'Meng nooit schoonmaakmiddelen. Lees eerst het etiket.',
      // Wie kan je helpen: je leidinggevende of voorman · de preventiemedewerker · de Nederlandse
      //   Arbeidsinspectie · bij een ongeluk: 112.
      help: ['leidinggevende', 'arbeidsinspectie'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.clean.1.sc1',
          picture: 'Fatima in een kantoortoilet met twee flessen in haar handen.',
          lines: [
            "Fatima maakt 's avonds een kantoor schoon.",
            'Ze werkt alleen.',
            'Een wc is heel vies.',
            'Ze denkt: "Met twee middelen samen gaat het sneller."',
            'Ze pakt de chloor en een ontkalker.',
          ],
        },
        // ⚖️ check: Je werkgever geeft uitleg en beschermende spullen ⚖️.
        // ⚖️ check: Spreek af hoe je hulp vraagt ⚖️.
        {
          kind: 'rule',
          id: 'r.l.clean.1.ru1',
          emoji: '🧪',
          title: 'Meng nooit schoonmaakmiddelen. Lees eerst het etiket.',
          body: [
            'Meng nooit schoonmaakmiddelen. Dan kan er giftig gas ontstaan.',
            'Lees eerst het etiket.',
            'Je werkgever geeft uitleg en beschermende spullen.',
            'Werk je alleen? Spreek af hoe je hulp vraagt.',
          ],
          rule: 'geschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.clean.1.wd1',
          situation: 'Fatima wil de wc snel schoon krijgen. Wat kan Fatima het beste doen?',
          options: [
            { id: 'a', text: 'Ze giet de twee middelen samen. Dan werkt het sterker.', best: false, feedback: 'Niet doen. Dan kan er giftig gas ontstaan.' },
            { id: 'b', text: 'Ze gebruikt één middel, en spoelt goed na.', best: true, feedback: 'Goed. Eén middel tegelijk is veilig.' },
            { id: 'c', text: 'Ze mengt ze, maar ze zet eerst het raam open.', best: false, feedback: 'Een open raam is niet genoeg. Het gas is gevaarlijk.' },
          ],
          why: 'Meng nooit schoonmaakmiddelen. Chloor met een ander middel kan giftig gas geven. Dat is slecht voor je longen. Gebruik één middel tegelijk. Spoel goed na voor je een ander middel pakt.',
        },
        // ⚖️ check: Je werkgever moet uitleg geven ⚖️.
        // ⚖️ check: En beschermende spullen, gratis ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.clean.1.tf1',
          statement: 'Op het etiket staat hoe je een middel veilig gebruikt.',
          answer: true,
          why: 'Op het etiket staan plaatjes met een rode rand. Die laten gevaar zien. Er staat ook of je handschoenen of een bril nodig hebt. Je werkgever moet uitleg geven. En beschermende spullen, gratis.',
        },
        // ⚖️ check: Werk je alleen? Dan moet je werkgever zorgen dat je hulp kunt krijgen ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.clean.1.wd2',
          situation: "Fatima werkt alleen in het gebouw. Het is 10 uur 's avonds. Wat kan Fatima het beste doen?",
          options: [
            { id: 'a', text: 'Ze spreekt met haar leidinggevende af hoe ze hulp vraagt.', best: true, feedback: 'Goed. Dan weet iemand waar ze is.' },
            { id: 'b', text: 'Ze werkt gewoon door. Er gebeurt toch bijna nooit iets.', best: false, feedback: 'Begrijpelijk. Maar alleen loopt ze meer gevaar.' },
            { id: 'c', text: 'Ze neemt haar zoon mee, voor de veiligheid.', best: false, feedback: 'Begrijpelijk. Maar haar werkgever moet dit regelen.' },
          ],
          why: 'Werk je alleen? Dan moet je werkgever zorgen dat je hulp kunt krijgen. Spreek af wie je belt als er iets is. Zorg dat je telefoon opgeladen is.',
        },
        {
          kind: 'whoask',
          id: 'r.l.clean.1.wa1',
          question: 'Je krijgt geen handschoenen voor een sterk middel. Wie vraag je het eerst?',
          options: [
            { id: 'a', who: 'collega', best: false, feedback: 'Een collega heeft misschien een paar. Maar je werk moet ze geven.' },
            { id: 'b', who: 'leidinggevende', best: true, feedback: 'Goed. Je leidinggevende moet zorgen voor gratis handschoenen.' },
            { id: 'c', who: 'huisarts', best: false, feedback: 'De huisarts helpt als je klachten hebt. Voorkom het liever.' },
          ],
          why: 'Vraag beschermende spullen aan je leidinggevende of voorman. Je krijgt ze gratis.',
        },
        { kind: 'model', id: 'r.l.clean.1.mo1', context: 'Je werkt vanavond alleen.', nl: 'Ik werk vanavond alleen. Wie kan ik bellen als er iets is?' },
      ],
    },
    {
      // Les S.2 · Je lichaam sparen
      id: 'r.l.clean.2',
      title: 'Je lichaam sparen',
      goal: 'Je werkt zo dat je rug en armen gezond blijven. Je meldt klachten op tijd.',
      remember: 'Pijn door je werk? Wacht niet. Zeg het op tijd.',
      // Wie kan je helpen: je leidinggevende · de bedrijfsarts · de preventiemedewerker.
      help: ['leidinggevende', 'bedrijfsarts'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.clean.2.sc1',
          picture: 'Piotr met een mop in een lange schoolgang. Hij houdt een hand op zijn rug.',
          lines: [
            'Piotr maakt elke dag een school schoon.',
            'Hij dweilt veel gangen.',
            'Zijn steel is kort, dus hij werkt gebukt.',
            "'s Avonds doet zijn rug pijn.",
          ],
        },
        // ⚖️ check: Je werkgever zorgt dat je werk niet te zwaar is voor je lichaam ⚖️.
        // ⚖️ check: Praat erover, of ga naar de bedrijfsarts ⚖️.
        {
          kind: 'rule',
          id: 'r.l.clean.2.ru1',
          emoji: '🧹',
          title: 'Pijn door je werk? Wacht niet. Zeg het op tijd.',
          body: [
            'Je werkgever zorgt dat je werk niet te zwaar is voor je lichaam.',
            'Goede spullen helpen, zoals een lange steel of een kar.',
            'Til dicht bij je lichaam, met gebogen knieën.',
            'Pijn? Praat erover, of ga naar de bedrijfsarts.',
          ],
          rule: 'geschreven',
        },
        // ⚖️ check: Je werkgever moet zorgen dat je werk niet te zwaar is voor je lichaam ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.clean.2.wd1',
          situation: 'Piotr heeft steeds last van zijn rug. Wat kan Piotr het beste doen?',
          options: [
            { id: 'a', text: 'Hij neemt elke dag een pijnstiller, en werkt door.', best: false, feedback: 'Begrijpelijk. Maar zo lost hij het probleem niet op.' },
            { id: 'b', text: 'Hij werkt sneller, dan staat hij korter gebukt.', best: false, feedback: 'Haast maakt het vaak erger.' },
            { id: 'c', text: 'Hij vraagt een steel die op zijn lengte past.', best: true, feedback: 'Goed. Met de goede spullen werkt hij rechtop.' },
          ],
          why: 'Je werkgever moet zorgen dat je werk niet te zwaar is voor je lichaam. Goede spullen helpen daarbij. Bijvoorbeeld een steel die je langer kunt maken. Of een kar, zodat je minder tilt.',
        },
        // ⚖️ check: Je mag ook zelf naar de bedrijfsarts ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.clean.2.tf1',
          statement: 'Pijn hoort er gewoon bij in de schoonmaak.',
          answer: false,
          why: 'Pijn is een waarschuwing. Wacht niet tot het erger wordt. Praat erover met je leidinggevende. Je mag ook zelf naar de bedrijfsarts.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.clean.2.wd2',
          situation: 'Piotr moet een zware vuilniszak in een hoge container gooien. Wat kan Piotr het beste doen?',
          options: [
            { id: 'a', text: 'Hij tilt de zak in één keer met een ruk omhoog.', best: false, feedback: 'Dat is zwaar voor zijn rug. Zo kan hij zich bezeren.' },
            { id: 'b', text: 'Hij maakt de zak minder vol, of vraagt een collega.', best: true, feedback: 'Goed. Twee keer lopen is beter dan een pijnlijke rug.' },
            { id: 'c', text: 'Hij laat de zak gewoon naast de container staan.', best: false, feedback: 'Dan blijft het werk liggen voor iemand anders.' },
          ],
          why: 'Til dicht bij je lichaam, met je knieën gebogen. Draai niet met je rug terwijl je tilt. Te zwaar? Maak het lichter, of vraag hulp. Gebruik een kar als dat kan.',
        },
        {
          kind: 'whoask',
          id: 'r.l.clean.2.wa1',
          question: 'Je rug doet al weken pijn door je werk. Met wie praat je over je gezondheid op het werk?',
          options: [
            { id: 'a', who: 'bedrijfsarts', best: true, feedback: 'Goed. De bedrijfsarts weet veel van werk en klachten.' },
            { id: 'b', who: 'uwv', best: false, feedback: 'UWV gaat over uitkeringen. Praat eerst op je werk.' },
            { id: 'c', who: 'vakbond', best: false, feedback: 'Een vakbond helpt bij je rechten. Voor je rug is er iemand anders.' },
          ],
          why: 'Je mag zelf naar de bedrijfsarts. Je huisarts kan ook helpen.',
        },
        { kind: 'model', id: 'r.l.clean.2.mo1', context: 'Je spullen geven je pijn.', nl: 'Mijn steel is te kort. Ik krijg pijn in mijn rug. Is er een langere?' },
      ],
    },
  ],
};

// Sector productie · Werken in de productie (les P.1, P.2)
export const factoryUnit: RuleUnit = {
  id: 'r.factory',
  title: 'Werken in de productie',
  emoji: '🏭',
  color: '#6b6f80',
  lessons: [
    {
      // Les P.1 · Machines en lock-out
      id: 'r.l.factory.1',
      title: 'Machines en lock-out',
      goal: 'Je grijpt nooit in een draaiende machine. Je weet wat lock-out is.',
      remember: 'Grijp nooit in een draaiende machine. Eerst moet hij stil.',
      // Wie kan je helpen: je leidinggevende · de technische dienst · de preventiemedewerker · de
      //   Nederlandse Arbeidsinspectie.
      help: ['leidinggevende', 'arbeidsinspectie'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.factory.1.sc1',
          who: 'henk',
          picture: 'Sanne bij een verpakkingsmachine. Een doos zit vast. Leidinggevende Henk komt aanlopen.',
          lines: [
            'Sanne werkt in een fabriek bij een verpakkingsmachine.',
            'Er zit een doos vast.',
            'De machine draait nog.',
            'Ze wil de doos er snel uit trekken.',
            'Dan roept Henk: "Wacht!"',
          ],
        },
        // ⚖️ check: Bij onderhoud gaat er een slot op de schakelaar: lock-out ⚖️.
        // ⚖️ check: Haal nooit een kap of beveiliging weg ⚖️.
        {
          kind: 'rule',
          id: 'r.l.factory.1.ru1',
          emoji: '⚙️',
          title: 'Grijp nooit in een draaiende machine. Eerst moet hij stil.',
          body: [
            'Grijp nooit in een machine die draait.',
            'Weet waar de noodstop zit, vóór je begint.',
            'Bij onderhoud gaat er een slot op de schakelaar: lock-out.',
            'Haal nooit een kap of beveiliging weg.',
          ],
          rule: 'geschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.factory.1.wd1',
          situation: 'De doos zit vast, en de band draait nog. Wat kan Sanne het beste doen?',
          options: [
            { id: 'a', text: 'Ze trekt de doos er snel uit. Het duurt maar een seconde.', best: false, feedback: 'Een seconde is genoeg voor een zwaar ongeluk.' },
            { id: 'b', text: 'Ze drukt op de noodstop, en ze roept Henk.', best: true, feedback: 'Goed. Eerst moet de machine echt stilstaan.' },
            { id: 'c', text: 'Ze duwt de doos los met een stuk karton.', best: false, feedback: 'Ook dan komt ze dicht bij de machine. Niet doen.' },
          ],
          why: 'Grijp nooit in een machine die draait. Ook niet even. Druk op de noodstop als dat nodig is. Weet waar de noodstop zit, vóór je begint.',
        },
        // ⚖️ check: Bij onderhoud of een storing gaat de machine uit. Dan gaat er een slot op de
        //   schakelaar ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.factory.1.tf1',
          statement: 'Lock-out betekent: de machine gaat op slot, zodat niemand hem aanzet.',
          answer: true,
          why: 'Bij onderhoud of een storing gaat de machine uit. Dan gaat er een slot op de schakelaar. Met een kaartje: wie eraan werkt. Zo kan niemand hem per ongeluk aanzetten. Haal nooit het slot van een ander eraf.',
        },
        // ⚖️ check: Haal die nooit weg, en zet die niet uit ⚖️.
        // ⚖️ check: Je werkgever moet zorgen dat machines veilig zijn ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.factory.1.wd2',
          situation: 'Een kap van de machine is kapot. Zonder kap gaat het werk sneller. Wat kan Sanne het beste doen?',
          options: [
            { id: 'a', text: 'Ze werkt door zonder kap. Ze let extra goed op.', best: false, feedback: 'Begrijpelijk. Maar de kap is er voor haar handen.' },
            { id: 'b', text: 'Ze plakt de kap met tape vast, en werkt door.', best: false, feedback: 'Goed bedoeld. Maar zo is het niet veilig genoeg.' },
            { id: 'c', text: 'Ze stopt, en ze meldt de kapotte kap bij Henk.', best: true, feedback: 'Goed. Een machine zonder goede beveiliging is gevaarlijk.' },
          ],
          why: 'Een kap of hek op een machine beschermt je. Haal die nooit weg, en zet die niet uit. Is er iets kapot? Meld het meteen. Je werkgever moet zorgen dat machines veilig zijn.',
        },
        {
          kind: 'whoask',
          id: 'r.l.factory.1.wa1',
          question: 'Je weet niet waar de noodstop van je machine zit. Wie vraag je het?',
          options: [
            { id: 'a', who: 'hr', best: false, feedback: 'HR weet vaak niet hoe de machines werken.' },
            { id: 'b', who: 'vakbond', best: false, feedback: 'Een vakbond helpt bij je rechten. Dit vraag je op de vloer.' },
            { id: 'c', who: 'leidinggevende', best: true, feedback: 'Goed. Je leidinggevende laat het je zien.' },
          ],
          why: 'Vraag uitleg over de machine aan je leidinggevende, vóór je begint.',
        },
        { kind: 'model', id: 'r.l.factory.1.mo1', context: 'Er zit iets vast in de machine.', nl: 'Henk, er zit een doos vast. Ik heb de noodstop ingedrukt.' },
      ],
    },
    {
      // Les P.2 · Ploegendienst en nachtwerk
      id: 'r.l.factory.2',
      title: 'Ploegendienst en nachtwerk',
      goal: 'Je kent de rustregels na een nachtdienst. Je weet waar de ploegentoeslag staat.',
      // ⚖️ check: Na een nachtdienst heb je recht op lange rust ⚖️.
      remember: 'Na een nachtdienst heb je recht op lange rust.',
      // Wie kan je helpen: je leidinggevende · de loonadministratie · een vakbond · de Nederlandse
      //   Arbeidsinspectie.
      help: ['leidinggevende', 'hr', 'vakbond', 'arbeidsinspectie'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.factory.2.sc1',
          who: 'henk',
          picture: 'Mohammed bij de prikklok van een fabriek. De klok zegt 6.00. Buiten is het donker.',
          lines: [
            'Mohammed werkt in ploegen in een fabriek.',
            'Deze week heeft hij nachtdienst.',
            "Zijn dienst stopt om 6 uur 's ochtends.",
            'Dan vraagt Henk: "Kun je vanmiddag om 2 uur weer komen?"',
          ],
        },
        // ⚖️ check: Na een nachtdienst heb je recht op lange rust ⚖️.
        // ⚖️ check: Stopt je nachtdienst na 2 uur 's nachts? Dan heb je minstens 14 uur rust ⚖️.
        // ⚖️ check: Tussen 2 diensten zit meestal minstens 11 uur ⚖️.
        // ⚖️ check: Ploegentoeslag staat in je cao, niet in de wet ⚖️.
        {
          kind: 'rule',
          id: 'r.l.factory.2.ru1',
          emoji: '🌙',
          title: 'Na een nachtdienst heb je recht op lange rust.',
          body: [
            "Stopt je nachtdienst na 2 uur 's nachts? Dan heb je minstens 14 uur rust.",
            'Tussen 2 diensten zit meestal minstens 11 uur.',
            'Ploegentoeslag staat in je cao, niet in de wet.',
            'Moe werken bij machines is gevaarlijk.',
          ],
          rule: 'geschreven',
        },
        // ⚖️ check: Stopt je nachtdienst na 2 uur 's nachts? Dan heb je minstens 14 uur rust ⚖️.
        // ⚖️ check: Tussen 2 gewone diensten zit meestal minstens 11 uur ⚖️.
        // ⚖️ check: Kijk ook in je cao ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.factory.2.tf1',
          statement: 'Na een nachtdienst mag je meteen weer een dienst draaien.',
          answer: false,
          why: "Na een nachtdienst heb je lang rust nodig. Stopt je nachtdienst na 2 uur 's nachts? Dan heb je minstens 14 uur rust. Tussen 2 gewone diensten zit meestal minstens 11 uur. Kijk ook in je cao.",
        },
        {
          kind: 'whatdo',
          id: 'r.l.factory.2.wd1',
          situation: 'Henk vraagt Mohammed om vanmiddag terug te komen. Wat kan Mohammed het beste doen?',
          options: [
            { id: 'a', text: 'Hij zegt ja. Hij slaapt straks wel een paar uur.', best: false, feedback: 'Begrijpelijk. Maar moe werken bij machines is gevaarlijk.' },
            { id: 'b', text: 'Hij zegt: "Te kort na mijn nacht. Morgen wel."', best: true, feedback: 'Goed. Zijn rust is ook voor zijn veiligheid.' },
            { id: 'c', text: 'Hij komt, en hij drinkt de hele dag energiedrank.', best: false, feedback: 'Dat helpt even. Maar hij blijft moe en traag.' },
          ],
          why: 'Rust heb je echt nodig. Moe werken geeft fouten en ongelukken. Zeg rustig nee, en bied een ander moment aan. Slaap overdag in een donkere, stille kamer.',
        },
        // ⚖️ check: Hoeveel je krijgt, staat in je cao of contract ⚖️.
        // ⚖️ check: Niet in de wet ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.factory.2.wd2',
          situation: 'Op Mohammeds loonstrook staat "ploegentoeslag". Hij weet niet hoeveel het moet zijn. Wat kan Mohammed het beste doen?',
          options: [
            { id: 'a', text: 'Hij zoekt het op in zijn cao.', best: true, feedback: 'Goed. Daar staat hoeveel toeslag hij krijgt.' },
            { id: 'b', text: 'Hij vraagt het aan een vriend uit een andere fabriek.', best: false, feedback: 'Kan. Maar die heeft misschien een andere cao.' },
            { id: 'c', text: 'Hij denkt: de wet zegt vast hoeveel het is.', best: false, feedback: 'Nee. De toeslag staat niet in de wet.' },
          ],
          why: 'Ploegentoeslag is extra loon voor werk in ploegen. Hoeveel je krijgt, staat in je cao of contract. Niet in de wet. Zoek je cao online, of vraag het bij de loonadministratie.',
        },
        {
          kind: 'whoask',
          id: 'r.l.factory.2.wa1',
          question: 'Je wilt weten wat je cao zegt over ploegentoeslag. Wie kan het uitleggen?',
          options: [
            { id: 'a', who: 'bedrijfsarts', best: false, feedback: 'De bedrijfsarts gaat over je gezondheid, niet over je loon.' },
            { id: 'b', who: 'uwv', best: false, feedback: 'UWV gaat over uitkeringen, niet over je cao.' },
            { id: 'c', who: 'vakbond', best: true, feedback: "Goed. Een vakbond kent de cao's goed." },
          ],
          why: 'Een vakbond kent de cao. Je loonstrook check je bij de loonadministratie.',
        },
        { kind: 'model', id: 'r.l.factory.2.mo1', context: 'Je moet te snel na je nachtdienst terugkomen.', nl: 'Ik heb net nachtdienst gehad. Ik heb eerst rust nodig.' },
      ],
    },
  ],
};

// Sector logistiek · Werken in de logistiek (les L.1, L.2)
export const warehouseUnit: RuleUnit = {
  id: 'r.warehouse',
  title: 'Werken in de logistiek',
  emoji: '📦',
  color: '#8b5a2b',
  lessons: [
    {
      // Les L.1 · Heftruck: alleen met opleiding
      id: 'r.l.warehouse.1',
      title: 'Heftruck: alleen met opleiding',
      goal: 'Je rijdt alleen op een heftruck met opleiding, en je loopt veilig.',
      remember: 'Geen opleiding? Dan rijd je niet op de heftruck.',
      // Wie kan je helpen: je leidinggevende · je uitzendbureau (vraag naar een cursus) · de
      //   Nederlandse Arbeidsinspectie.
      help: ['leidinggevende', 'uitzendbureau', 'arbeidsinspectie'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.warehouse.1.sc1',
          picture: 'Jayden in een magazijn naast een heftruck. De sleutel zit erin.',
          lines: [
            'Jayden werkt sinds een week in een magazijn.',
            'Een pallet moet snel naar de vrachtwagen.',
            'Een collega zegt: "Pak jij de heftruck even? De sleutel zit erin."',
            'Jayden heeft nog nooit op een heftruck gereden.',
          ],
        },
        // ⚖️ check: Je rijdt alleen op een heftruck als je opgeleid bent ⚖️.
        // ⚖️ check: Er is geen rijbewijs van de overheid voor de heftruck ⚖️.
        {
          kind: 'rule',
          id: 'r.l.warehouse.1.ru1',
          emoji: '🚜',
          title: 'Geen opleiding? Dan rijd je niet op de heftruck.',
          body: [
            'Je rijdt alleen op een heftruck als je opgeleid bent.',
            'Er is geen rijbewijs van de overheid voor de heftruck.',
            'Veel bedrijven vragen een heftruckcertificaat.',
            'Loop altijd over de looppaden.',
          ],
          rule: 'geschreven',
        },
        // ⚖️ check: Je rijdt alleen op een heftruck als je opgeleid bent ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.warehouse.1.wd1',
          situation: 'Jayden heeft geen opleiding voor de heftruck. Wat kan Jayden het beste doen?',
          options: [
            { id: 'a', text: 'Hij rijdt heel langzaam. Dan kan er niets gebeuren.', best: false, feedback: 'Begrijpelijk. Maar ook langzaam kan het misgaan.' },
            { id: 'b', text: 'Hij rijdt, want de collega zegt dat het mag.', best: false, feedback: 'Zijn collega kan dat niet beslissen.' },
            { id: 'c', text: 'Hij zegt: "Ik mag niet rijden. Kan iemand anders?"', best: true, feedback: 'Goed. Zonder opleiding rijd je niet.' },
          ],
          why: 'Je rijdt alleen op een heftruck als je opgeleid bent. En als je werkgever zegt dat het mag. Een heftruck is zwaar en kan omvallen. Ongelukken met heftrucks komen vaak voor.',
        },
        // ⚖️ check: Er is geen rijbewijs van de overheid voor de heftruck ⚖️.
        // ⚖️ check: Maar je werkgever moet zorgen dat je goed bent opgeleid ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.warehouse.1.tf1',
          statement: 'Voor een heftruck heb je een rijbewijs van de overheid nodig.',
          answer: false,
          why: 'Er is geen rijbewijs van de overheid voor de heftruck. Maar je werkgever moet zorgen dat je goed bent opgeleid. Daarom vragen veel bedrijven een heftruckcertificaat. Dat haal je met een cursus.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.warehouse.1.wd2',
          situation: 'Jayden moet naar de andere kant van het magazijn. Over de rijbaan van de heftrucks is het korter. Wat kan Jayden het beste doen?',
          options: [
            { id: 'a', text: 'Hij loopt over de looppaden, ook al is het verder.', best: true, feedback: 'Goed. Daar zijn voetgangers veilig.' },
            { id: 'b', text: 'Hij loopt over de rijbaan, en hij kijkt goed uit.', best: false, feedback: 'Begrijpelijk. Maar een bestuurder ziet hem misschien niet.' },
            { id: 'c', text: 'Hij loopt over de rijbaan, met zijn hesje aan.', best: false, feedback: 'Het hesje helpt. Maar de rijbaan is niet om te lopen.' },
          ],
          why: 'Loop altijd over de looppaden. Een bestuurder van een heftruck ziet niet alles. Moet je toch oversteken? Zoek oogcontact met de bestuurder. Loop nooit vlak achter een heftruck.',
        },
        {
          kind: 'whoask',
          id: 'r.l.warehouse.1.wa1',
          question: 'Je werkt via een uitzendbureau. Je wilt een heftruckcursus doen. Wie vraag je het?',
          options: [
            { id: 'a', who: 'collega', best: false, feedback: 'Een collega kan tips geven. Maar geen cursus regelen.' },
            { id: 'b', who: 'uitzendbureau', best: true, feedback: 'Goed. Het bureau weet welke cursus je nodig hebt.' },
            { id: 'c', who: 'bedrijfsarts', best: false, feedback: 'De bedrijfsarts gaat over je gezondheid, niet over cursussen.' },
          ],
          why: 'Vraag je uitzendbureau of je leidinggevende naar een cursus.',
        },
        { kind: 'model', id: 'r.l.warehouse.1.mo1', context: 'Iemand vraagt je om op de heftruck te rijden.', nl: 'Ik heb geen heftruckcertificaat. Ik mag niet rijden.' },
      ],
    },
    {
      // Les L.2 · Tillen, scanners en tempo
      id: 'r.l.warehouse.2',
      title: 'Tillen, scanners en tempo',
      goal: 'Je tilt veilig. Je weet wat je doet als de norm te hoog is.',
      remember: 'Te hoog tempo? Vraag hoe de norm werkt. Sla je pauze niet over.',
      // Wie kan je helpen: je leidinggevende · de bedrijfsarts · de ondernemingsraad · een vakbond
      //   · de Nederlandse Arbeidsinspectie.
      help: ['leidinggevende', 'bedrijfsarts', 'vakbond', 'arbeidsinspectie'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.warehouse.2.sc1',
          picture: 'Esra met een scanner om haar arm, bij een rek vol dozen. Op het scherm een rood cijfer.',
          lines: [
            'Esra is orderpicker in een distributiecentrum.',
            'Ze heeft een scanner om haar arm.',
            'Die telt hoeveel orders ze per uur doet.',
            'Haar teamleider zegt: "Je haalt de norm niet."',
            'Esra werkt al zo snel als ze kan.',
          ],
        },
        // ⚖️ check: Je werkgever moet te hoge werkdruk voorkomen ⚖️.
        {
          kind: 'rule',
          id: 'r.l.warehouse.2.ru1',
          emoji: '🏋️',
          title: 'Te hoog tempo? Vraag hoe de norm werkt. Sla je pauze niet over.',
          body: [
            'Je werkgever moet te hoge werkdruk voorkomen.',
            'Vraag hoe de norm werkt.',
            'Je pauze sla je niet over.',
            'Zak door je knieën als je tilt. Houd de doos dicht bij je.',
          ],
          rule: 'geschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.warehouse.2.wd1',
          situation: 'Esra haalt de norm niet. Wat kan Esra het beste doen?',
          options: [
            { id: 'a', text: 'Ze vraagt hoe de norm werkt, en wat beter kan.', best: true, feedback: 'Goed. Zo weet ze wat haar baas van haar wil.' },
            { id: 'b', text: 'Ze slaat haar pauze over om meer orders te halen.', best: false, feedback: 'Begrijpelijk. Maar pauze is haar recht.' },
            { id: 'c', text: 'Ze tilt twee dozen tegelijk, om sneller te gaan.', best: false, feedback: 'Dat is zwaar voor haar rug. Zo kan ze zich bezeren.' },
          ],
          why: 'De norm is hoeveel je per uur moet doen. Vraag hoe de norm werkt. Wat telt de scanner mee? Is de norm voor iedereen even hoog? Vraag ook wat beter kan. Je pauze sla je niet over.',
        },
        // ⚖️ check: Je werkgever moet dat voorkomen ⚖️.
        // ⚖️ check: Of ga zelf naar de bedrijfsarts ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.warehouse.2.tf1',
          statement: 'Je werkgever moet zorgen dat het tempo niet ongezond is.',
          answer: true,
          why: 'Te hoge werkdruk en te veel tillen maken mensen ziek. Je werkgever moet dat voorkomen. Krijg je klachten van het tempo? Meld het bij je leidinggevende. Of ga zelf naar de bedrijfsarts.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.warehouse.2.wd2',
          situation: 'Esra moet een zware doos van de onderste plank pakken. Wat kan Esra het beste doen?',
          options: [
            { id: 'a', text: 'Ze buigt voorover, en tilt de doos met haar rug.', best: false, feedback: 'Dan komt alle kracht op haar rug. Dat geeft klachten.' },
            { id: 'b', text: 'Ze zakt door haar knieën, met de doos dicht bij zich.', best: true, feedback: 'Goed. Zo tilt ze met haar benen, niet met haar rug.' },
            { id: 'c', text: 'Ze trekt de doos snel met één hand van de plank.', best: false, feedback: 'Zo kan ze haar pols of haar rug verrekken.' },
          ],
          why: 'Zak door je knieën. Houd je rug recht en de doos dicht bij je. Draai niet tijdens het tillen. Te zwaar? Gebruik een hulpmiddel, of vraag een collega.',
        },
        {
          kind: 'whoask',
          id: 'r.l.warehouse.2.wa1',
          question: 'Het hele team haalt de norm niet. Wie kan jullie samen helpen?',
          options: [
            { id: 'a', who: 'vakbond', best: true, feedback: 'Goed. Een vakbond helpt teams met hun rechten.' },
            { id: 'b', who: 'huisarts', best: false, feedback: 'De huisarts helpt jou alleen, niet het hele team.' },
            { id: 'c', who: 'uwv', best: false, feedback: 'UWV gaat over uitkeringen, niet over je werk.' },
          ],
          why: 'Samen sta je sterker. Een vakbond of de ondernemingsraad kan helpen.',
        },
        { kind: 'model', id: 'r.l.warehouse.2.mo1', context: 'Je haalt de norm nog niet.', nl: 'Ik haal de norm nog niet. Hoe kan ik het beter doen?' },
      ],
    },
  ],
};

// Sector tuinbouw · Werken in de tuinbouw (les T.1, T.2; docs/entree-aanvulling.md, deel 4,
// uitgewerkt uit de schets "groen" G.1, 30 oktober 2026)
export const kasUnit: RuleUnit = {
  id: 'r.kas',
  title: 'Werken in de tuinbouw',
  emoji: '🌱',
  color: '#5a8f29',
  lessons: [
    {
      // Les T.1 · Veilig in kas en veld
      id: 'r.l.kas.1',
      title: 'Veilig in kas en veld',
      goal: 'Je beschermt je tegen hitte en spuitmiddelen. Je tilt en bukt zo dat je lichaam gezond blijft.',
      remember: 'Drink op tijd. Een bespoten kas ga je pas in als het mag.',
      // Wie kan je helpen: je leidinggevende of voorman · de bedrijfsarts · de Nederlandse
      //   Arbeidsinspectie.
      help: ['leidinggevende', 'bedrijfsarts', 'arbeidsinspectie'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.kas.1.sc1',
          picture: 'Piotr in een warme kas tussen hoge tomatenplanten. Hij veegt het zweet van zijn gezicht.',
          lines: [
            'Piotr werkt in een kas in het Westland.',
            'Hij plukt tomaten.',
            'Buiten is het 30 graden. In de kas is het nog warmer.',
            'Hij wil zijn rij snel afmaken.',
            'Zijn fles water is al leeg.',
          ],
        },
        // ⚖️ check: Je werkgever moet je beschermen tegen hitte ⚖️ (Arbobesluit, art. 6.1).
        // ⚖️ check: Een kas die net bespoten is, ga je pas in als het mag ⚖️ (wachttijd na het spuiten:
        //   het etiket van het middel, Wet gewasbeschermingsmiddelen en biociden; Arbobesluit, hoofdstuk 4).
        // ⚖️ check: Spuiten mag je alleen met een opleiding en een bewijs daarvan ⚖️ (bewijs van
        //   vakbekwaamheid, de spuitlicentie; Besluit gewasbeschermingsmiddelen en biociden).
        {
          kind: 'rule',
          id: 'r.l.kas.1.ru1',
          emoji: '🌡️',
          title: 'Drink op tijd. Een bespoten kas ga je pas in als het mag.',
          body: [
            'Je werkgever moet je beschermen tegen hitte.',
            'Drink vaak water, ook als je nog geen dorst hebt.',
            'Spuitmiddelen zijn middelen tegen beestjes en ziektes op de planten.',
            'Een kas die net bespoten is, ga je pas in als het mag.',
            'Spuiten mag je alleen met een opleiding en een bewijs daarvan.',
          ],
          rule: 'geschreven',
        },
        // ⚖️ check: Je werkgever moet zorgen voor water, pauzes en een koele plek ⚖️ (Arbobesluit,
        //   art. 6.1 en 6.2; kijk ook in de cao).
        {
          kind: 'whatdo',
          id: 'r.l.kas.1.wd1',
          situation: 'Piotr wordt duizelig. Zijn rij is nog niet af. Wat kan Piotr het beste doen?',
          options: [
            { id: 'a', text: 'Hij maakt eerst zijn rij helemaal af. Daarna gaat hij drinken.', best: false, feedback: 'Begrijpelijk. Maar duizelig zijn is een waarschuwing.' },
            { id: 'b', text: 'Hij stopt, drinkt water en zegt het tegen zijn leidinggevende.', best: true, feedback: 'Goed. Zo wordt het niet erger.' },
            { id: 'c', text: 'Hij gaat even op de grond zitten, tussen de planten.', best: false, feedback: 'Even zitten helpt. Maar in de kas blijft het heet.' },
          ],
          why: 'Hitte kan je snel ziek maken. Duizelig, misselijk of hoofdpijn? Stop, drink water en ga naar een koele plek. Zeg het meteen tegen iemand. Je werkgever moet zorgen voor water, pauzes en een koele plek.',
        },
        // ⚖️ check: Na het spuiten geldt een wachttijd. Pas daarna mag je weer naar binnen ⚖️ (het
        //   etiket van het middel; Arbobesluit, hoofdstuk 4).
        {
          kind: 'truefalse',
          id: 'r.l.kas.1.tf1',
          statement: 'Ruik je niets? Dan kun je een bespoten kas veilig in.',
          answer: false,
          why: 'Veel spuitmiddelen ruik je niet. Na het spuiten geldt een wachttijd. Pas daarna mag je weer naar binnen. Vaak hangt er een bordje op de deur. Je leidinggevende weet wanneer het weer mag.',
        },
        // ⚖️ check: Je werkgever moet zorgen dat het werk niet te zwaar is ⚖️ (Arbobesluit, art. 5.2
        //   en 5.3: tillen en lichamelijke belasting).
        {
          kind: 'whatdo',
          id: 'r.l.kas.1.wd2',
          situation: 'Piotr tilt de hele dag kratten. Ze staan op de grond. Wat kan Piotr het beste doen?',
          options: [
            { id: 'a', text: 'Hij tilt ze snel met een ruk. Dan is hij eerder klaar.', best: false, feedback: 'Een ruk is zwaar voor zijn rug. Zo kan hij zich bezeren.' },
            { id: 'b', text: 'Hij stapelt de kratten zo hoog als hij kan.', best: false, feedback: 'Een hoge stapel is zwaar en kan omvallen.' },
            { id: 'c', text: 'Hij buigt zijn knieën en houdt de krat dicht bij zich.', best: true, feedback: 'Goed. Zo spaart hij zijn rug.' },
          ],
          why: 'Til met gebogen knieën en een rechte rug. Houd de krat dicht bij je lichaam. Draai niet met je rug terwijl je tilt. Veel bukken of tillen? Vraag om een kar, of wissel af met ander werk. Je werkgever moet zorgen dat het werk niet te zwaar is.',
        },
        {
          kind: 'whoask',
          id: 'r.l.kas.1.wa1',
          question: 'Je moet werken in een kas die vanochtend bespoten is. Er hangt een bordje op de deur. Wie vraag je het eerst?',
          options: [
            { id: 'a', who: 'collega', best: false, feedback: 'Een collega weet het misschien. Maar je leidinggevende weet het zeker.' },
            { id: 'b', who: 'leidinggevende', best: true, feedback: 'Goed. Je leidinggevende weet wanneer je weer naar binnen mag.' },
            { id: 'c', who: 'huisarts', best: false, feedback: 'De huisarts helpt als je klachten hebt. Voorkom het liever.' },
          ],
          why: 'Je leidinggevende weet wanneer de wachttijd voorbij is. Krijg je geen duidelijk antwoord? Dan kun je de Nederlandse Arbeidsinspectie bellen.',
        },
        { kind: 'model', id: 'r.l.kas.1.mo1', context: 'Je ziet een bordje op de deur van de kas.', nl: 'Er hangt een bordje op de deur. Mag ik al naar binnen?' },
      ],
    },
    {
      // Les T.2 · Tempo en stukloon
      id: 'r.l.kas.2',
      title: 'Tempo en stukloon',
      goal: 'Je weet dat het minimumloon per uur ook geldt bij stukloon. Je schrijft je uren op.',
      remember: 'Ook bij stukloon krijg je minstens het minimumloon per uur.',
      // Wie kan je helpen: je uitzendbureau of werkgever · de vakbond · het Juridisch Loket · de
      //   Nederlandse Arbeidsinspectie (minimumloon, huisvesting via de werkgever).
      help: ['uitzendbureau', 'vakbond', 'juridischloket', 'arbeidsinspectie'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.kas.2.sc1',
          picture: 'Esra bij een sorteerband met paprika’s. Naast haar staan volle kratten.',
          lines: [
            'Esra werkt via een uitzendbureau in een kas.',
            'Ze krijgt geld per krat. Dat heet stukloon.',
            'De eerste weken werkt ze nog niet zo snel.',
            'Op haar loonstrook staat weinig loon.',
            'Ze woont in een huis van het uitzendbureau.',
          ],
        },
        // ⚖️ check: Ook bij stukloon krijg je minstens het minimumloon voor elk uur dat je werkt ⚖️
        //   (Wet minimumloon en minimumvakantiebijslag, art. 12 en de regels over stukloon).
        // ⚖️ check: Je werkgever mag niet zomaar geld van je loon afhalen ⚖️ (BW 7:626 loonstrook;
        //   Wet minimumloon, art. 13 inhoudingen, onder meer voor huisvesting).
        {
          kind: 'rule',
          id: 'r.l.kas.2.ru1',
          emoji: '⏱️',
          title: 'Ook bij stukloon krijg je minstens het minimumloon per uur.',
          body: [
            'Stukloon betekent: je krijgt geld per krat, per rij of per kilo.',
            'Ook dan krijg je minstens het minimumloon voor elk uur dat je werkt.',
            'Schrijf elke dag je uren en je kratten op.',
            'Je werkgever mag niet zomaar geld van je loon afhalen.',
          ],
          rule: 'geschreven',
        },
        // ⚖️ check: Ook bij stukloon moet je minstens het minimumloon per uur krijgen ⚖️ (Wet
        //   minimumloon en minimumvakantiebijslag). Geen bedrag: dat staat op rijksoverheid.nl.
        {
          kind: 'whatdo',
          id: 'r.l.kas.2.wd1',
          situation: 'Esra werkt 38 uur per week. Haar loon is veel lager dan het minimumloon voor 38 uur. Wat kan Esra het beste doen?',
          options: [
            { id: 'a', text: 'Ze laat haar eigen lijst met uren zien, en vraagt om uitleg.', best: true, feedback: 'Goed. Met haar lijst laat ze zien wat ze heeft gedaan.' },
            { id: 'b', text: 'Ze zegt niets. Bij stukloon is weinig loon in het begin normaal.', best: false, feedback: 'Begrijpelijk. Maar ook bij stukloon geldt het minimumloon per uur.' },
            { id: 'c', text: 'Ze gaat sneller werken en slaat haar pauzes over.', best: false, feedback: 'Begrijpelijk. Maar pauzes heeft ze nodig, en haar loon moet nu al kloppen.' },
          ],
          why: 'Ook bij stukloon moet je minstens het minimumloon per uur krijgen. Hoeveel dat is, staat op rijksoverheid.nl. Klopt je loon niet? Vraag om uitleg. Krijg je geen goed antwoord? Vraag hulp bij de vakbond of het Juridisch Loket.',
        },
        {
          kind: 'truefalse',
          id: 'r.l.kas.2.tf1',
          statement: 'Bij stukloon is het niet nodig om je uren op te schrijven.',
          answer: false,
          why: 'Schrijf altijd je uren op. Wanneer begin je, hoe lang is je pauze, wanneer stop je? Schrijf ook je kratten of rijen op. Dan kun je je loonstrook controleren.',
        },
        // ⚖️ check: Op je loonstrook staat wat er van je loon af gaat, en waarvoor ⚖️ (BW 7:626).
        // ⚖️ check: Voor een huis via je werk mag maar een deel van je loon eraf ⚖️ (Wet minimumloon,
        //   art. 13: inhouding voor huisvesting op het minimumloon is begrensd en vraagt een
        //   schriftelijke volmacht; kijk ook in de cao, bijvoorbeeld de ABU- of NBBU-cao).
        {
          kind: 'whatdo',
          id: 'r.l.kas.2.wd2',
          situation: 'Esra woont in een huis van het uitzendbureau. Elke week gaat er veel geld van haar loon af. Ze weet niet waarvoor. Wat kan Esra het beste doen?',
          options: [
            { id: 'a', text: 'Ze zegt niets. Anders raakt ze misschien haar kamer kwijt.', best: false, feedback: 'Begrijpelijk. Maar ze mag altijd vragen waar het geld voor is.' },
            { id: 'b', text: 'Ze vraagt het uitzendbureau wat er van haar loon af gaat.', best: true, feedback: 'Goed. Zo weet ze waar ze voor betaalt.' },
            { id: 'c', text: 'Ze stopt meteen met werken en zoekt een ander huis.', best: false, feedback: 'Dat is een grote stap. Eerst vragen is beter.' },
          ],
          why: 'Op je loonstrook staat wat er van je loon af gaat, en waarvoor. Voor een huis via je werk mag maar een deel van je loon eraf. Begrijp je het niet? Vraag het na. Kijk ook in je cao.',
        },
        {
          kind: 'whoask',
          id: 'r.l.kas.2.wa1',
          question: 'Je loon is lager dan het minimumloon. Je uitzendbureau doet er niets aan. Wie kan dit controleren?',
          options: [
            { id: 'a', who: 'huisarts', best: false, feedback: 'De huisarts helpt bij je gezondheid, niet bij je loon.' },
            { id: 'b', who: 'gemeente', best: false, feedback: 'De gemeente helpt bij veel dingen. Maar je loon controleert iemand anders.' },
            { id: 'c', who: 'arbeidsinspectie', best: true, feedback: 'Goed. De Arbeidsinspectie controleert of je het minimumloon krijgt.' },
          ],
          why: 'De Nederlandse Arbeidsinspectie controleert het minimumloon. Je kunt daar een melding doen. Ook de vakbond en het Juridisch Loket helpen je.',
        },
        { kind: 'model', id: 'r.l.kas.2.mo1', context: 'Je wilt je uren vergelijken met je loonstrook.', nl: 'Ik heb mijn uren en kratten opgeschreven. Klopt mijn loon?' },
      ],
    },
  ],
};
