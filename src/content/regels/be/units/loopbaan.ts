import type { BeUnit } from '../types';

/**
 * Unit 19 (België) · Jouw weg: kiezen en verder leren: de Belgische versie van
 * src/content/regels/units/loopbaan.ts, opnieuw geschreven voor het Vlaamse onderwijs. Geen
 * Entree, mbo-niveau 2, bbl, kwalificatieplicht of DUO: wel het secundair onderwijs, de
 * leerplicht tot 18, duaal leren, VDAB-opleidingen, het volwassenenonderwijs (CVO), de LED in
 * Mijn Burgerprofiel en de erkenning van een buitenlands diploma bij NARIC-Vlaanderen.
 * Zelfde drie lessen en stap-id's, met "r.be." vooraan; les 19.3 krijgt één vraag erbij (NARIC).
 *
 * `// ⚖️ check:` = een feit dat de deskundige nakijkt, met de bron. Opgezocht op 30 okt 2026.
 * Officiële sites waren in deze sessie niet te openen (netwerk geblokkeerd, 30 okt 2026): de
 * feiten komen uit zoekresultaten (vlaanderen.be, onderwijs.vlaanderen.be, vdab.be, eurydice).
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.loopbaan',
    title: 'Jouw weg: kiezen en verder leren',
    emoji: '🧭',
    color: '#6b5b95',
    lessons: [
      {
        // Les 19.1 · Wat kan ik, wat wil ik?
        id: 'r.be.l.loopbaan.1',
        title: 'Wat kan ik, wat wil ik?',
        goal: 'Je noemt wat je goed kunt. Je zegt wat je wel en niet wilt in je werk.',
        remember: 'Weet wat je kunt en wat je wilt. Ga kijken voor je kiest.',
        // Wie kan je helpen: je begeleider op school · het CLB (studiekeuze) · je mentor · de VDAB
        //   (oriëntatie, loopbaanbegeleiding) · opendeurdagen en snuffelstages.
        help: ['school', 'praktijkopleider', 'vdab'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.loopbaan.1.sc1',
            picture: 'Jayden bij zijn begeleider op school. Op tafel een formulier: "Wat kan ik goed?"',
            lines: [
              'Jayden zit in het secundair onderwijs.',
              'Zijn begeleider vraagt: "Wat kun je goed?"',
              'Jayden zegt: "Niks eigenlijk."',
              'Maar hij werkt al 2 jaar als student in een supermarkt.',
            ],
          },
          {
            kind: 'rule',
            id: 'r.be.l.loopbaan.1.ru1',
            emoji: '🧭',
            title: 'Weet wat je kunt en wat je wilt. Ga kijken voor je kiest.',
            body: [
              'Iedereen kan iets goed. Ook wat je in een studentenjob of thuis doet, telt.',
              'Bijvoorbeeld: op tijd komen, klanten helpen, voor je familie zorgen.',
              'Denk ook na over wat je wilt. Binnen of buiten? Met mensen of met spullen?',
              'Weet je het nog niet? Doe een snuffelstage, of ga naar een opendeurdag.',
            ],
            rule: 'ongeschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.loopbaan.1.wd1',
            situation: 'Wat kan Jayden het beste zeggen?',
            options: [
              { id: 'a', text: '"Ik weet het echt niet. Kies jij maar iets voor mij."', best: false, feedback: 'Dan kiest een ander voor hem. Hij weet zelf meer dan hij denkt.' },
              { id: 'b', text: '"Ik ben niet goed in school. Dus ik kan niks."', best: false, feedback: 'School is niet alles. In zijn werk doet hij veel goed.' },
              { id: 'c', text: '"Ik ben altijd op tijd. En ik help graag klanten."', best: true, feedback: 'Goed. Dat kan hij echt goed.' },
            ],
            why: 'Iedereen kan iets goed. Ook wat je in een studentenjob of thuis doet, telt. Op tijd komen, netjes werken, klanten helpen. Dat zijn kwaliteiten: dingen die je goed kunt.',
          },
          // ⚖️ check: zorg voor familie (mantelzorg) is ervaring die je mag noemen (gewoonte; vdab.be cv-tips)
          {
            kind: 'truefalse',
            id: 'r.be.l.loopbaan.1.tf1',
            statement: 'Zorgen voor je broertje of je oma telt niet als ervaring.',
            answer: false,
            why: 'Dat telt wel. Wie zorgt, is vaak geduldig en kan goed plannen. Dat zoekt een werkgever ook. Je mag het noemen in een gesprek of op je cv.',
          },
          // ⚖️ check: het CLB helpt gratis bij de studiekeuze (vlaanderen.be "centrum voor leerlingenbegeleiding")
          {
            kind: 'whatdo',
            id: 'r.be.l.loopbaan.1.wd2',
            situation: 'Jayden weet niet wat hij wil: de zorg of de logistiek. Wat kan Jayden het beste doen?',
            options: [
              { id: 'a', text: 'Hij kiest wat zijn vrienden kiezen. Dat is gezellig.', best: false, feedback: 'Dat snap ik. Maar het werk moet bij hem passen.' },
              { id: 'b', text: 'Hij gaat in allebei een dag meelopen.', best: true, feedback: 'Goed. Dan ziet hij hoe het werk echt is.' },
              { id: 'c', text: 'Hij kiest het werk met het meeste geld.', best: false, feedback: 'Geld is belangrijk. Maar hij moet het werk ook graag doen.' },
            ],
            why: 'Weet je niet wat je wilt? Ga kijken. Loop een dag mee in een bedrijf. Of ga naar een opendeurdag. Vraag je begeleider op school of het CLB om hulp. Kies wat bij jou past.',
          },
          { kind: 'model', id: 'r.be.l.loopbaan.1.mo1', context: 'Je begeleider vraagt wat je goed kunt.', nl: 'Ik ben altijd op tijd. En ik werk graag met mensen.' },
        ],
      },
      {
        // Les 19.2 · Leren tot 18, en daarna (opnieuw geschreven voor Vlaanderen)
        id: 'r.be.l.loopbaan.2',
        title: 'Leren tot 18, en daarna',
        goal: 'Je weet wat de leerplicht is. Je weet hoe je werkt en leert tegelijk. En waar je later nog leert.',
        remember: 'Onder 18 moet je leren. Werken en leren tegelijk kan.',
        // Wie kan je helpen: je begeleider op school · het CLB · de VDAB (opleidingen, advies over
        //   duaal leren na 18) · een centrum voor volwassenenonderwijs (CVO).
        help: ['school', 'vdab'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.loopbaan.2.sc1',
            picture: 'Malik in de refter van school. Op zijn gsm een vacature: "Magazijnmedewerker, direct beginnen".',
            lines: [
              'Malik is 17. Hij zit in het secundair onderwijs.',
              'Hij wil meteen geld verdienen.',
              'Een magazijn zoekt mensen. Hij kan direct beginnen.',
              'Zijn moeder zegt: "Je moet eerst je school afmaken."',
            ],
          },
          // ⚖️ check: in België geldt de leerplicht van 5 tot 18 jaar; ze eindigt op je 18de
          //   verjaardag of op 30 juni van dat jaar (vlaanderen.be "leerplicht van 5 tot 18 jaar")
          // ⚖️ check: wie al een diploma secundair onderwijs heeft, is niet meer leerplichtig (onderwijs.vlaanderen.be, ABC leerplicht)
          // ⚖️ check: vanaf 15 of 16 jaar kan een jongere deeltijds leren en deeltijds werken: duaal
          //   leren (vlaanderen.be leerplicht; eurydice "organisatie van het onderwijssysteem";
          //   vanaf 15 jaar na de eerste graad, anders vanaf 16 jaar — nakijken)
          {
            kind: 'rule',
            id: 'r.be.l.loopbaan.2.ru1',
            emoji: '🎓',
            title: 'Onder 18 moet je leren. Werken en leren tegelijk kan.',
            body: [
              'In België ben je leerplichtig tot je 18 bent.',
              'Leerplicht betekent: je moet naar school of een opleiding volgen.',
              'Vanaf 15 of 16 jaar kan je ook duaal leren.',
              'Dan leer je deels op school en deels in een bedrijf.',
              'Heb je al een diploma secundair onderwijs? Dan ben je niet meer leerplichtig.',
            ],
            rule: 'geschreven',
            key: true,
          },
          // ⚖️ check: leerplicht tot 18 jaar; deeltijds leren (duaal leren) mag vanaf 15 of 16 jaar (vlaanderen.be leerplicht; eurydice)
          {
            kind: 'truefalse',
            id: 'r.be.l.loopbaan.2.tf1',
            statement: 'Malik is 17. Hij mag stoppen met school, en alleen werken.',
            answer: false,
            why: 'In België ben je leerplichtig tot je 18 bent. Je moet dus nog leren. Werken en leren tegelijk mag wel. Dat heet duaal leren.',
          },
          // ⚖️ check: bij duaal leren leer je een groot deel op de werkplek; met een overeenkomst
          //   alternerende opleiding krijg je een maandelijkse leervergoeding (securex.be
          //   "verplichtingen van de onderneming"; vlaanderen.be duaal leren)
          // ⚖️ check: ouder dan 18 en al lang uit school: vraag advies aan de VDAB over duaal leren (vdab.be "advies duaal leren")
          {
            kind: 'whatdo',
            id: 'r.be.l.loopbaan.2.wd1',
            situation: 'Malik wil geld verdienen. Hij wil ook een diploma. Wat kan Malik het beste doen?',
            options: [
              { id: 'a', text: 'Hij zoekt een plek in het duaal leren: werken en leren tegelijk.', best: true, feedback: 'Goed. Dan verdient hij wat en haalt hij een diploma.' },
              { id: 'b', text: 'Hij gaat in het magazijn werken, en stopt met school.', best: false, feedback: 'Hij is 17. Hij is nog leerplichtig.' },
              { id: 'c', text: 'Hij wacht een jaar. Dan kiest hij een opleiding.', best: false, feedback: 'Zo verliest hij een jaar. En onder 18 moet hij leren.' },
            ],
            why: 'Bij duaal leren leer je een groot deel in een bedrijf. Je krijgt vaak een vergoeding, en je haalt een diploma. Je school of het CLB helpt je zoeken. Ben je al ouder dan 18? Vraag dan advies aan de VDAB.',
          },
          // ⚖️ check: in het volwassenenonderwijs (vroeger tweedekansonderwijs, in een centrum voor
          //   volwassenenonderwijs, CVO) kan je als volwassene je diploma secundair onderwijs halen
          //   (vdab.be "behaal je diploma"; eurydice)
          // ⚖️ check: wie werkzoekend is bij de VDAB, kan veel opleidingen gratis volgen, of met minder
          //   inschrijvingsgeld in een CVO, onder voorwaarden (vdab.be "gratis leren voor wie geen werk
          //   heeft"; vdab.be "geen of minder inschrijvingsgeld volwassenenonderwijs")
          {
            kind: 'whatdo',
            id: 'r.be.l.loopbaan.2.wd2',
            situation: 'Jayden is 20. Hij heeft geen diploma secundair onderwijs. Hij wil toch nog een diploma halen. Wat kan Jayden het beste doen?',
            options: [
              { id: 'a', text: 'Hij denkt dat het te laat is. Na 18 kan het niet meer.', best: false, feedback: 'Dat klopt niet. Ook volwassenen kunnen nog een diploma halen.' },
              { id: 'b', text: 'Hij vraagt naar het volwassenenonderwijs of een VDAB-opleiding.', best: true, feedback: 'Goed. Daar kan hij als volwassene verder leren.' },
              { id: 'c', text: 'Hij wacht tot een school hem een brief stuurt.', best: false, feedback: 'Een brief komt niet vanzelf. Hij moet zich zelf inschrijven.' },
            ],
            why: 'Ook als volwassene kan je nog leren. In een centrum voor volwassenenonderwijs haal je ook je diploma secundair onderwijs. Dat heet een CVO. Heb je geen werk? Dan zijn veel opleidingen van de VDAB gratis.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.loopbaan.2.wa1',
            question: 'Je hebt geen werk. Je wilt een opleiding volgen. Wie vraag je het?',
            options: [
              { id: 'a', who: 'rva', best: false, feedback: 'De RVA gaat over je uitkering. Over opleidingen vraag je het bij de VDAB.' },
              { id: 'b', who: 'vdab', best: true, feedback: 'Goed. De VDAB kent de opleidingen, en veel zijn gratis.' },
              { id: 'c', who: 'praktijkopleider', best: false, feedback: 'Je mentor kent het werk. Over opleidingen weet de VDAB meer.' },
            ],
            why: 'De VDAB helpt je een opleiding kiezen. Zit je nog op school? Vraag het dan aan je begeleider of het CLB.',
          },
          { kind: 'model', id: 'r.be.l.loopbaan.2.mo1', context: 'Je wilt verder leren.', nl: 'Ik wil een opleiding volgen. Hoe en wanneer schrijf ik me in?' },
        ],
      },
      {
        // Les 19.3 · Terugkijken en je portfolio
        id: 'r.be.l.loopbaan.3',
        title: 'Terugkijken en je portfolio',
        goal: "Je bewaart je diploma's, attesten en beoordelingen. Je vraagt iemand als referentie.",
        remember: "Bewaar je diploma's en attesten goed. Maak er ook een foto van.",
        // Wie kan je helpen: je begeleider van school · je mentor (beoordeling, referentie) · Mijn
        //   Burgerprofiel (de LED, je Vlaamse diploma's) · NARIC-Vlaanderen (een buitenlands diploma)
        //   · de VDAB.
        help: ['school', 'praktijkopleider', 'vdab'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.loopbaan.3.sc1',
            picture: 'Fatima aan tafel met een map. Een attest ligt half onder een stapel post.',
            lines: [
              'Fatima is bijna klaar met haar stage in het hotel.',
              'Ze heeft een attest voor veilig werken gehaald.',
              'Haar papieren liggen overal in huis.',
              'Straks wil ze solliciteren bij een ander hotel.',
            ],
          },
          {
            kind: 'rule',
            id: 'r.be.l.loopbaan.3.ru1',
            emoji: '🗂️',
            title: "Bewaar je diploma's en attesten goed. Maak er ook een foto van.",
            body: [
              "Bewaar je diploma's, attesten en beoordelingen in één map.",
              'Maak er ook een foto of scan van.',
              "Zo'n map heet een portfolio. Je laat ermee zien wat je kunt.",
              'Is je stage bijna gedaan? Vraag of je iemand als referentie mag noemen.',
            ],
            rule: 'ongeschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.loopbaan.3.wd1',
            situation: 'Fatima is bijna klaar met haar stage. Wat kan Fatima het beste doen?',
            options: [
              { id: 'a', text: 'Ze vraagt Mark of ze hem als referentie mag noemen.', best: true, feedback: 'Goed. Dan weet Mark dat er iemand kan bellen.' },
              { id: 'b', text: 'Ze zegt dag, en neemt verder niets mee.', best: false, feedback: 'Dan mist ze een kans. Een referentie helpt bij solliciteren.' },
              { id: 'c', text: 'Ze zet Mark op haar cv als referentie, zonder het te vragen.', best: false, feedback: 'Vraag het eerst. Anders weet Mark niet dat er iemand belt.' },
            ],
            why: 'Een referentie is iemand die een nieuwe werkgever over jou kan vertellen. Bijvoorbeeld je mentor. Vraag het altijd eerst. Vraag ook om je beoordeling op papier. Die stop je in je map.',
          },
          // ⚖️ check: de LED (Leer- en Ervaringsbewijzendatabank) bewaart veel Vlaamse diploma's en
          //   attesten; je bekijkt ze in Mijn Burgerprofiel, met itsme of je eID (vlaanderen.be "een
          //   diploma raadplegen via de LED"); niet alle diploma's: de databank begint op een andere
          //   datum per school of instelling; een vervangend diploma kan je er niet aanvragen
          //   (vlaanderen.be "verloren diploma secundair onderwijs")
          {
            kind: 'truefalse',
            id: 'r.be.l.loopbaan.3.tf1',
            statement: 'Je Vlaamse diploma kun je vaak online bekijken, in Mijn Burgerprofiel.',
            answer: true,
            why: "Veel Vlaamse diploma's staan in een databank: de LED. Je ziet ze in Mijn Burgerprofiel, met itsme of je eID. Niet alle diploma's staan erin. Een attest van een cursus vaak ook niet. Bewaar je papieren dus zelf goed.",
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.loopbaan.3.wd2',
            situation: 'De begeleider vraagt: "Wat ging goed, en wat wil je nog leren?" Wat kan Fatima het beste doen?',
            options: [
              { id: 'a', text: 'Ze zegt: "Alles ging goed." Dan is ze snel klaar.', best: false, feedback: 'Dan leert ze er weinig van. Kijk ook naar wat beter kan.' },
              { id: 'b', text: 'Ze noemt 1 ding dat goed ging, en 1 om te leren.', best: true, feedback: 'Goed. Zo weet ze wat ze straks verder kan leren.' },
              { id: 'c', text: 'Ze noemt alleen wat er misging. Ze wil eerlijk zijn.', best: false, feedback: 'Eerlijk is goed. Maar ze mag ook noemen wat ze goed deed.' },
            ],
            why: 'Terugkijken helpt je kiezen. Wat ging goed? Wat wil je nog leren? Kijk in je beoordeling, of vraag je mentor. Schrijf het op, en bewaar het in je map.',
          },
          // Nieuw in België: een diploma uit het buitenland.
          // ⚖️ check: wie met een buitenlands diploma in Vlaanderen werkt, heeft vaak een
          //   gelijkwaardigheidserkenning nodig van NARIC-Vlaanderen; NARIC vergelijkt het diploma met
          //   een Vlaams diploma; aanvraag via het e-loket (vlaanderen.be "gelijkwaardigheidserkenning
          //   van diploma aanvragen bij NARIC-Vlaanderen")
          // ⚖️ check: erkende vluchtelingen en subsidiair beschermden zijn vrijgesteld van betaling
          //   (vlaanderen.be "kostprijs van een erkenningsaanvraag bij NARIC-Vlaanderen"; ook
          //   asielzoekers? zoekresultaat zegt ja, nakijken); voor de andere tarieven: geen bedrag in de les
          // ⚖️ check: voor een gereglementeerd beroep (bijvoorbeeld verpleegkundige) is soms nog een
          //   aparte erkenning nodig (vlaanderen.be "toegang tot gereglementeerd beroep")
          {
            kind: 'whatdo',
            id: 'r.be.l.loopbaan.3.wd3',
            situation: 'Nadia heeft een diploma uit Marokko. Een werkgever vraagt: "Geldt dat diploma hier?" Wat kan Nadia het beste doen?',
            options: [
              { id: 'a', text: 'Ze zegt dat het diploma hier vanzelf geldt.', best: false, feedback: 'Niet altijd. Vaak moet je het eerst laten erkennen.' },
              { id: 'b', text: 'Ze laat het diploma weg. Het telt hier toch niet.', best: false, feedback: 'Jammer. Haar diploma kan wel tellen.' },
              { id: 'c', text: 'Ze vraagt een erkenning aan bij NARIC-Vlaanderen.', best: true, feedback: 'Goed. Dan weet de werkgever wat het diploma waard is.' },
            ],
            why: 'Een diploma uit het buitenland moet je vaak laten erkennen. Dat doe je bij NARIC-Vlaanderen. Zij vergelijken je diploma met een Vlaams diploma. Ben je erkend vluchteling? Dan betaal je daar niets.',
          },
          { kind: 'model', id: 'r.be.l.loopbaan.3.mo1', context: 'Je stage is bijna gedaan.', nl: 'Mag ik u als referentie noemen als ik ga solliciteren?' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.loopbaan.1.mo1': [
      { text: 'Niks eigenlijk. Ik ben gewoon niet zo slim.', feedback: 'Je kunt meer dan je denkt. Noem iets wat je goed doet.' },
      { text: 'Ik kan alles. Ik ben overal de beste in.', feedback: 'Dat klinkt te groot. Noem één ding dat je echt kunt.' },
    ],
    'r.be.l.loopbaan.2.mo1': [
      { text: 'Ik wil verder leren, maar dat zie ik later wel.', feedback: 'Wacht niet te lang. Vraag op tijd hoe je je inschrijft.' },
      { text: 'Ik ben klaar met school. Ik ga gewoon werken.', feedback: 'Ben je nog geen 18? Dan moet je nog leren.' },
    ],
    'r.be.l.loopbaan.3.mo1': [
      { text: 'Ik zet u gewoon op mijn cv. Dat vindt u vast goed.', feedback: 'Vraag het eerst. Dan weet de ander dat er iemand belt.' },
      { text: 'Dag! Bedankt voor alles. Misschien zien we elkaar nog.', feedback: 'Vriendelijk. Maar zo vraag je niet om een referentie.' },
    ],
  },
  advice: {
    'r.be.l.loopbaan.2.ru1': 'advice',
  },
  kun: [
    ['Ik kan zeggen wat ik goed kan.', '1F', 'gesprekken'],
    ['Ik kan vragen hoe ik me inschrijf voor een opleiding.', '1F', 'gesprekken'],
    ['Ik kan vragen hoe ik mijn diploma laat erkennen.', '1F', 'gesprekken'],
  ],
};
