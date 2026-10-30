import type { RuleUnit } from '../types';

/**
 * Unit 19 · Jouw weg: kiezen en verder leren (les 19.1–19.3). Entree, loopbaan (30 oktober 2026).
 * Converted from docs/werkregels-curriculum.md, deel 7; edit that document first, then this file.
 * `// ⚖️ check:` marks a fact the expert must check. The marker is never shown or read aloud.
 * `// Redactie:` notes are for the makers only.
 *
 * Redactie: les 19.2 gaat over de kwalificatieplicht en het toelatingsrecht na Entree. Laat die
 *   extra nakijken ⚖️: de regels voor de aanmelddatum en de bbl kunnen per opleiding verschillen.
 */
export const loopbaanUnit: RuleUnit = {
  id: 'r.loopbaan',
  title: 'Jouw weg: kiezen en verder leren',
  emoji: '🧭',
  color: '#6b5b95',
  lessons: [
    {
      // Les 19.1 · Wat kan ik, wat wil ik?
      id: 'r.l.loopbaan.1',
      title: 'Wat kan ik, wat wil ik?',
      goal: 'Je noemt wat je goed kunt. Je zegt wat je wel en niet wilt in je werk.',
      remember: 'Weet wat je kunt en wat je wilt. Ga kijken voor je kiest.',
      // Wie kan je helpen: je loopbaanbegeleider of decaan op school · je praktijkopleider · open
      //   dagen en meeloopdagen.
      help: ['school', 'praktijkopleider'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.loopbaan.1.sc1',
          picture: 'Jayden bij zijn begeleider op school. Op tafel een formulier: "Wat kan ik goed?"',
          lines: [
            'Jayden zit op het mbo, in Entree.',
            'Zijn begeleider vraagt: "Wat kun je goed?"',
            'Jayden zegt: "Niks eigenlijk."',
            'Maar hij werkt al 2 jaar in een supermarkt.',
          ],
        },
        {
          kind: 'rule',
          id: 'r.l.loopbaan.1.ru1',
          emoji: '🧭',
          title: 'Weet wat je kunt en wat je wilt. Ga kijken voor je kiest.',
          body: [
            'Iedereen kan iets goed. Ook wat je in een bijbaan of thuis doet, telt.',
            'Bijvoorbeeld: op tijd komen, klanten helpen, voor je familie zorgen.',
            'Denk ook na over wat je wilt. Binnen of buiten? Met mensen of met spullen?',
            'Weet je het nog niet? Loop een dag mee, of ga naar een open dag.',
          ],
          rule: 'ongeschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.loopbaan.1.wd1',
          situation: 'Wat kan Jayden het beste zeggen?',
          options: [
            { id: 'a', text: '"Ik weet het echt niet. Kies jij maar iets voor mij."', best: false, feedback: 'Dan kiest een ander voor hem. Hij weet zelf meer dan hij denkt.' },
            { id: 'b', text: '"Ik ben niet goed in school. Dus ik kan niks."', best: false, feedback: 'School is niet alles. In zijn werk doet hij veel goed.' },
            { id: 'c', text: '"Ik ben altijd op tijd. En ik help graag klanten."', best: true, feedback: 'Goed. Dat kan hij echt goed.' },
          ],
          why: 'Iedereen kan iets goed. Ook wat je in een bijbaan of thuis doet, telt. Op tijd komen, netjes werken, klanten helpen. Dat zijn kwaliteiten: dingen die je goed kunt.',
        },
        {
          kind: 'truefalse',
          id: 'r.l.loopbaan.1.tf1',
          statement: 'Zorgen voor je broertje of je oma telt niet als ervaring.',
          answer: false,
          why: 'Dat telt wel. Wie zorgt, is vaak geduldig en kan goed plannen. Dat zoekt een werkgever ook. Je mag het noemen in een gesprek of op je cv.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.loopbaan.1.wd2',
          situation: 'Jayden weet niet of hij in de zorg of in de logistiek wil werken. Wat kan Jayden het beste doen?',
          options: [
            { id: 'a', text: 'Hij kiest wat zijn vrienden kiezen. Dat is gezellig.', best: false, feedback: 'Dat snap ik. Maar het werk moet bij hem passen.' },
            { id: 'b', text: 'Hij gaat in allebei een dag meelopen.', best: true, feedback: 'Goed. Dan ziet hij hoe het werk echt is.' },
            { id: 'c', text: 'Hij kiest het werk met het meeste geld.', best: false, feedback: 'Geld is belangrijk. Maar hij moet het werk ook leuk vinden.' },
          ],
          why: 'Weet je niet wat je wilt? Ga kijken. Loop een dag mee in een bedrijf, of ga naar een open dag. Vraag je begeleider op school om hulp. Kies wat bij jou past.',
        },
        { kind: 'model', id: 'r.l.loopbaan.1.mo1', context: 'Je begeleider vraagt wat je goed kunt.', nl: 'Ik ben altijd op tijd. En ik werk graag met mensen.' },
      ],
    },
    {
      // Les 19.2 · Na Entree: niveau 2 of werk?
      id: 'r.l.loopbaan.2',
      title: 'Na Entree: niveau 2 of werk?',
      goal: 'Je weet wat je na Entree kunt doen. Je weet wat een startkwalificatie is.',
      remember: 'Na Entree: ga door naar niveau 2, of werk en leer tegelijk.',
      // Wie kan je helpen: je begeleider of decaan op school · kiesmbo.nl ⚖️ · het Regionaal
      //   Meld- en Coördinatiepunt (RMC) van de gemeente, als je zonder diploma stopt ⚖️ · UWV.
      help: ['school', 'praktijkopleider', 'uwv'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.loopbaan.2.sc1',
          picture: 'Malik in de kantine van school. Op zijn telefoon een vacature: "Magazijnmedewerker, direct beginnen".',
          lines: [
            'Malik is 17. Hij haalt bijna zijn Entree-diploma.',
            'Hij wil daarna meteen geld verdienen.',
            'Een magazijn zoekt mensen. Hij kan direct beginnen.',
            'Zijn moeder zegt: "Je moet eerst een diploma halen."',
          ],
        },
        // ⚖️ check: Met een Entree-diploma mag je door naar een opleiding op niveau 2 ⚖️ (WEB art.
        //   8.1.7a: toelatingsrecht, als je je op tijd aanmeldt).
        // ⚖️ check: Een startkwalificatie is een diploma op niveau 2 of hoger ⚖️ (mbo 2 of hoger,
        //   havo of vwo; Leerplichtwet 1969 art. 1).
        // ⚖️ check: Ben je jonger dan 18 en heb je die nog niet? Dan moet je naar school ⚖️
        //   (kwalificatieplicht, Leerplichtwet 1969 art. 4a).
        // ⚖️ check: Werk en leer je tegelijk? Dat heet bbl. Dat telt ook ⚖️ (bbl voldoet aan de
        //   kwalificatieplicht; WEB art. 7.2.2).
        {
          kind: 'rule',
          id: 'r.l.loopbaan.2.ru1',
          emoji: '🎓',
          title: 'Na Entree: ga door naar niveau 2, of werk en leer tegelijk.',
          body: [
            'Met een Entree-diploma mag je door naar een opleiding op niveau 2.',
            'Een startkwalificatie is een diploma op niveau 2 of hoger.',
            'Ben je jonger dan 18 en heb je die nog niet? Dan moet je naar school.',
            'Werk en leer je tegelijk? Dat heet bbl. Dat telt ook.',
          ],
          rule: 'geschreven',
          key: true,
        },
        // ⚖️ check: Ben je jonger dan 18 zonder startkwalificatie? Dan moet je naar school ⚖️
        //   (kwalificatieplicht, Leerplichtwet 1969 art. 4a).
        {
          kind: 'truefalse',
          id: 'r.l.loopbaan.2.tf1',
          statement: 'Malik is 17. Hij mag na Entree stoppen met school, en alleen werken.',
          answer: false,
          why: 'Ben je jonger dan 18 zonder startkwalificatie? Dan moet je naar school. Dat heet de kwalificatieplicht. Een startkwalificatie is een diploma op niveau 2 of hoger. Werken en leren tegelijk mag wel. Dat heet bbl.',
        },
        // ⚖️ check: Bij bbl werk je bij een bedrijf. Je gaat meestal 1 dag per week naar school ⚖️.
        // ⚖️ check: Je krijgt loon, en je haalt een diploma ⚖️ (bbl: een arbeidsovereenkomst en een
        //   praktijkovereenkomst; het leerbedrijf is erkend door SBB, WEB art. 7.2.10).
        {
          kind: 'whatdo',
          id: 'r.l.loopbaan.2.wd1',
          situation: 'Malik wil geld verdienen. Hij wil ook een diploma. Wat kan Malik het beste doen?',
          options: [
            { id: 'a', text: 'Hij zoekt een bbl-plek: werken en leren tegelijk.', best: true, feedback: 'Goed. Dan verdient hij geld en haalt hij een diploma.' },
            { id: 'b', text: 'Hij gaat in het magazijn werken, en stopt met school.', best: false, feedback: 'Hij is 17. Zonder startkwalificatie moet hij nog naar school.' },
            { id: 'c', text: 'Hij wacht een jaar. Dan kiest hij een opleiding.', best: false, feedback: 'Zo verliest hij een jaar. En onder 18 moet hij naar school.' },
          ],
          why: 'Bij bbl werk je bij een bedrijf. Je gaat meestal 1 dag per week naar school. Je krijgt loon, en je haalt een diploma. Je hebt wel een leerbedrijf nodig. Je school helpt je zoeken.',
        },
        // ⚖️ check: Met een Entree-diploma mag je door naar niveau 2 ⚖️ (WEB art. 8.1.7a).
        // ⚖️ check: Vaak is dat vóór 1 april ⚖️ (WEB art. 8.1.7a: het toelatingsrecht geldt bij
        //   aanmelden vóór 1 april; daarna mag de school je ook toelaten, maar hoeft het niet).
        {
          kind: 'whatdo',
          id: 'r.l.loopbaan.2.wd2',
          situation: 'Jayden is 18. Hij haalt zijn Entree-diploma. Hij wil naar niveau 2 logistiek. Wat kan Jayden het beste doen?',
          options: [
            { id: 'a', text: 'Hij wacht tot de school hem een brief stuurt.', best: false, feedback: 'Een brief komt niet vanzelf. Hij moet zich zelf aanmelden.' },
            { id: 'b', text: 'Hij denkt dat hij niet mag, zonder vmbo-diploma.', best: false, feedback: 'Met zijn Entree-diploma mag hij door naar niveau 2.' },
            { id: 'c', text: 'Hij meldt zich op tijd aan bij de opleiding.', best: true, feedback: 'Goed. Hij vraagt op school wanneer dat moet.' },
          ],
          why: 'Met een Entree-diploma mag je door naar een opleiding op niveau 2. Je moet je wel zelf aanmelden, en op tijd. Vaak is dat vóór 1 april. Vraag je begeleider op school wat je moet doen.',
        },
        // ⚖️ check: Op kiesmbo.nl staan alle mbo-opleidingen ⚖️.
        {
          kind: 'whoask',
          id: 'r.l.loopbaan.2.wa1',
          question: 'Je weet niet welke opleiding na Entree bij je past. Wie vraag je het?',
          options: [
            { id: 'a', who: 'uwv', best: false, feedback: 'UWV helpt bij werk zoeken. Over je opleiding vraag je het op school.' },
            { id: 'b', who: 'school', best: true, feedback: 'Goed. Je begeleider van school kent de opleidingen.' },
            { id: 'c', who: 'praktijkopleider', best: false, feedback: 'Je praktijkopleider kent het werk. Over opleidingen weet je school meer.' },
          ],
          why: 'Je begeleider van school, of je decaan, kent de opleidingen. Ga ook naar open dagen. Op kiesmbo.nl staan alle mbo-opleidingen.',
        },
        { kind: 'model', id: 'r.l.loopbaan.2.mo1', context: 'Je wilt na Entree verder leren.', nl: 'Ik wil naar niveau 2. Hoe en wanneer meld ik me aan?' },
      ],
    },
    {
      // Les 19.3 · Terugkijken en je portfolio
      id: 'r.l.loopbaan.3',
      title: 'Terugkijken en je portfolio',
      goal: "Je bewaart je diploma's, certificaten en beoordelingen. Je vraagt iemand als referentie.",
      remember: "Bewaar je diploma's en certificaten goed. Maak er ook een foto van.",
      // Wie kan je helpen: je begeleider van school · je praktijkopleider (beoordeling, referentie)
      //   · DUO (een bewijs van je diploma ⚖️).
      help: ['school', 'praktijkopleider'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.loopbaan.3.sc1',
          picture: 'Fatima aan tafel met een map. Een certificaat ligt half onder een stapel post.',
          lines: [
            'Fatima is bijna klaar met haar stage in het hotel.',
            'Ze heeft een certificaat voor veilig werken gehaald.',
            'Haar papieren liggen overal in huis.',
            'Straks wil ze solliciteren bij een ander hotel.',
          ],
        },
        {
          kind: 'rule',
          id: 'r.l.loopbaan.3.ru1',
          emoji: '🗂️',
          title: "Bewaar je diploma's en certificaten goed. Maak er ook een foto van.",
          body: [
            "Bewaar je diploma's, certificaten en beoordelingen in één map.",
            'Maak er ook een foto of scan van.',
            "Zo'n map heet een portfolio. Je laat ermee zien wat je kunt.",
            'Vraag aan het eind van je stage of je iemand als referentie mag noemen.',
          ],
          rule: 'ongeschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.loopbaan.3.wd1',
          situation: 'Fatima is bijna klaar met haar stage. Wat kan Fatima het beste doen?',
          options: [
            { id: 'a', text: 'Ze vraagt Mark of ze hem als referentie mag noemen.', best: true, feedback: 'Goed. Dan weet Mark dat er iemand kan bellen.' },
            { id: 'b', text: 'Ze zegt gedag, en neemt verder niets mee.', best: false, feedback: 'Dan mist ze een kans. Een referentie helpt bij solliciteren.' },
            { id: 'c', text: 'Ze zet Mark op haar cv als referentie, zonder het te vragen.', best: false, feedback: 'Vraag het eerst. Anders weet Mark niet dat er iemand belt.' },
          ],
          why: 'Een referentie is iemand die een nieuwe werkgever over jou kan vertellen. Bijvoorbeeld je praktijkopleider. Vraag het altijd eerst. Vraag ook om je beoordeling op papier. Die stop je in je map.',
        },
        // ⚖️ check: DUO bewaart veel diploma's in een register ⚖️ (het diplomaregister; niet alle
        //   diploma's, vooral die van de laatste jaren).
        // ⚖️ check: Daar kun je een bewijs van je diploma krijgen. Dat heet een uittreksel ⚖️
        //   (gratis via Mijn DUO, met DigiD).
        {
          kind: 'truefalse',
          id: 'r.l.loopbaan.3.tf1',
          statement: 'Ben je je diploma kwijt? Dan kun je soms een bewijs krijgen bij DUO.',
          answer: true,
          why: "DUO bewaart veel diploma's in een register. Daar kun je een bewijs van je diploma krijgen. Dat heet een uittreksel. Een certificaat van een cursus heeft DUO meestal niet. Bewaar dat dus zelf goed.",
        },
        {
          kind: 'whatdo',
          id: 'r.l.loopbaan.3.wd2',
          situation: 'De begeleider vraagt: "Wat ging goed in je stage, en wat wil je nog leren?" Wat kan Fatima het beste doen?',
          options: [
            { id: 'a', text: 'Ze zegt: "Alles ging goed." Dan is ze snel klaar.', best: false, feedback: 'Dan leert ze er weinig van. Kijk ook naar wat beter kan.' },
            { id: 'b', text: 'Ze noemt 1 ding dat goed ging, en 1 om te leren.', best: true, feedback: 'Goed. Zo weet ze wat ze straks verder kan leren.' },
            { id: 'c', text: 'Ze noemt alleen wat er misging. Ze wil eerlijk zijn.', best: false, feedback: 'Eerlijk is goed. Maar ze mag ook noemen wat ze goed deed.' },
          ],
          why: 'Terugkijken helpt je kiezen. Wat ging goed? Wat wil je nog leren? Kijk in je beoordeling, of vraag je praktijkopleider. Schrijf het op, en bewaar het in je map.',
        },
        { kind: 'model', id: 'r.l.loopbaan.3.mo1', context: 'Je stage is bijna klaar.', nl: 'Mag ik u als referentie noemen als ik ga solliciteren?' },
      ],
    },
  ],
};
