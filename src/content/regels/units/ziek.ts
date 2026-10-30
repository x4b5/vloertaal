import type { RuleUnit } from '../types';

/**
 * Unit 6 · Ziek zijn (les 6.1–6.3).
 * Converted from docs/werkregels-curriculum.md; edit the curriculum first, then this file.
 * `// ⚖️ check:` marks a fact the expert must check (docs/werkregels-bronnen.md). The marker is
 * never shown or read aloud. `// Redactie:` notes are for the makers only.
 */
export const ziekUnit: RuleUnit = {
  id: 'r.ziek',
  title: 'Ziek zijn',
  emoji: '🤒',
  color: '#8a5cb8',
  lessons: [
    {
      // Les 6.1 · Je ziekmelden
      id: 'r.l.ziek.1',
      title: 'Je ziekmelden',
      goal: 'Je meldt je zelf ziek, op tijd. Je weet wat je wel en niet hoeft te zeggen.',
      remember: 'Ziek? Bel zelf, vóór je dienst begint.',
      // Wie kan je helpen: je leidinggevende · het verzuimprotocol van je bedrijf · je
      //   uitzendbureau.
      help: ['leidinggevende', 'uitzendbureau'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.ziek.1.sc1',
          picture: 'Jayden in bed met een rode neus. De wekker zegt 7.15.',
          lines: [
            'Jayden wordt wakker met koorts.',
            'Zijn dienst in de keuken begint om 10 uur.',
            'Hij voelt zich echt slecht.',
            'Hij pakt zijn telefoon.',
          ],
        },
        {
          kind: 'rule',
          id: 'r.l.ziek.1.ru1',
          emoji: '🤒',
          title: 'Ziek? Bel zelf, vóór je dienst begint.',
          body: [
            'Bel zelf, en bel vóór je dienst begint.',
            'Dat is in de meeste bedrijven de regel.',
            'Kijk in je contract of het verzuimprotocol.',
            'Je hoeft niet te zeggen welke ziekte je hebt.',
          ],
          rule: 'geschreven',
          key: true,
        },
        {
          kind: 'whatdo',
          id: 'r.l.ziek.1.wd1',
          situation: 'Hoe meldt Jayden zich ziek?',
          options: [
            { id: 'a', text: 'Hij belt zelf de chef, ruim vóór 10 uur.', best: true, feedback: 'Goed. Zo weet de chef het op tijd.' },
            { id: 'b', text: 'Hij appt een collega: "Zeg jij het even tegen de chef?"', best: false, feedback: 'Begrijpelijk. Maar je meldt je meestal zelf ziek.' },
            { id: 'c', text: 'Hij stuurt om 10 uur een bericht: "Ziek."', best: false, feedback: 'Dat is laat, en vaak is een bericht niet genoeg.' },
          ],
          why: 'Bel zelf, en bel vóór je dienst begint. Dat is in de meeste bedrijven de regel. Kijk in je contract of het verzuimprotocol. Dat zijn de regels voor ziekmelden bij jouw bedrijf. Afspraak is afspraak: kun je niet komen? Zeg het op tijd.',
        },
        {
          kind: 'truefalse',
          id: 'r.l.ziek.1.tf1',
          statement: 'Je hoeft je baas niet te vertellen welke ziekte je hebt.',
          answer: true,
          why: 'Je hoeft niet te zeggen wat je hebt. Je baas mag wel vragen hoe lang het ongeveer duurt. En waar je te bereiken bent. Over je ziekte praat je met de bedrijfsarts.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.ziek.1.wd2',
          situation: 'Kevin werkt via een uitzendbureau. Hij is ziek. Wat kan Kevin het beste doen?',
          options: [
            { id: 'a', text: "Hij meldt het alleen aan de collega's op zijn werk.", best: false, feedback: 'Dan weet het bureau het niet. Dat geeft problemen.' },
            { id: 'b', text: 'Hij meldt zich niet ziek. Hij heeft toch geen vast werk.', best: false, feedback: 'Toch wel melden. Dan houdt hij zijn rechten.' },
            { id: 'c', text: 'Hij meldt het bij het bureau, en bij het bedrijf.', best: true, feedback: 'Goed. Dan weten ze het allebei.' },
          ],
          why: 'Werk je via een uitzendbureau? Meld je ziek bij het bureau. En vaak ook bij het bedrijf waar je werkt. Vraag aan het begin hoe het moet.',
        },
        {
          kind: 'whoask',
          id: 'r.l.ziek.1.wa1',
          question: 'Je werkt via een uitzendbureau. Je bent ziek. Bij wie meld je je zeker?',
          options: [
            { id: 'a', who: 'collega', best: false, feedback: 'Een collega kan het doorgeven. Maar je meldt je zelf.' },
            { id: 'b', who: 'uitzendbureau', best: true, feedback: 'Goed. Meld je bij het bureau. Vaak ook bij het bedrijf.' },
            { id: 'c', who: 'huisarts', best: false, feedback: 'De huisarts helpt je beter worden. Je ziekmelden doe je op je werk.' },
          ],
          why: 'Werk je via een uitzendbureau? Meld je ziek bij het bureau, en vaak ook bij het bedrijf.',
        },
        { kind: 'model', id: 'r.l.ziek.1.mo1', context: 'Je belt je werk, want je bent ziek.', nl: 'Goedemorgen, met Jayden. Ik ben ziek. Ik kan vandaag niet komen.' },
      ],
    },
    {
      // Les 6.2 · Je rechten als je ziek bent
      id: 'r.l.ziek.2',
      title: 'Je rechten als je ziek bent',
      goal: 'Je weet dat je loon meestal doorloopt. Je weet wat je wel en niet hoeft te vertellen.',
      // ⚖️ check: Je krijgt meestal minstens 70 procent ⚖️ van je loon.
      remember: 'Ziek? Je krijgt meestal minstens 70 procent van je loon.',
      // Wie kan je helpen: de bedrijfsarts · UWV (heb je geen werkgever meer, of werk je via een
      //   uitzendbureau? Vraag naar de Ziektewet) · een vakbond · het Juridisch Loket.
      help: ['bedrijfsarts', 'uwv', 'vakbond', 'juridischloket'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.ziek.2.sc1',
          picture: 'Esra op de bank met haar been in het gips. Haar telefoon gaat.',
          lines: [
            'Esra is gevallen.',
            'Ze heeft haar been gebroken.',
            'Ze kan 6 weken niet werken.',
            'Ze is bang dat ze geen loon krijgt.',
            'Dan belt haar leidinggevende om te vragen hoe het gaat.',
          ],
        },
        // ⚖️ check: Je krijgt meestal minstens 70 procent ⚖️ van je loon.
        // ⚖️ check: Je werkgever betaalt minstens 70 procent ⚖️ van je loon door.
        // ⚖️ check: Dat kan tot 2 jaar ⚖️ duren.
        // ⚖️ check: In het eerste jaar krijg je minstens het minimumloon ⚖️.
        // ⚖️ check: Heb je een tijdelijk contract? Dan stopt je loon op de einddatum ⚖️. Vraag dan
        //   UWV naar de Ziektewet (art. 7:629 BW, Ziektewet art. 29).
        {
          kind: 'rule',
          id: 'r.l.ziek.2.ru1',
          emoji: '🩹',
          title: 'Ziek? Je krijgt meestal minstens 70 procent van je loon.',
          body: [
            'Je werkgever betaalt minstens 70 procent van je loon door.',
            'Dat kan tot 2 jaar duren.',
            'In het eerste jaar krijg je minstens het minimumloon. Een cao geeft vaak meer.',
            'Heb je een tijdelijk contract? Dan stopt je loon op de einddatum.',
            'Vraag dan UWV naar de Ziektewet.',
          ],
          rule: 'geschreven',
        },
        // ⚖️ check: Je werkgever betaalt minstens 70 procent ⚖️ van je loon door.
        // ⚖️ check: Dat kan tot 2 jaar ⚖️ duren.
        // ⚖️ check: In het eerste jaar krijg je minstens het minimumloon ⚖️.
        // ⚖️ check: Soms zijn er 2 wachtdagen ⚖️ zonder loon, als je contract of cao dat zegt.
        {
          kind: 'truefalse',
          id: 'r.l.ziek.2.tf1',
          statement: 'Als je ziek bent, krijg je geen loon.',
          answer: false,
          why: 'Je werkgever betaalt minstens 70 procent van je loon door. Dat kan tot 2 jaar duren. In het eerste jaar krijg je minstens het minimumloon. Een cao geeft vaak meer. Soms zijn er 2 wachtdagen zonder loon, als je contract of cao dat zegt.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.ziek.2.wd1',
          situation: 'De leidinggevende vraagt: "Wat is er precies met je been?" Wat kan Esra het beste doen?',
          options: [
            { id: 'a', text: 'Ze vertelt alles, ook wat de dokter precies zei.', best: false, feedback: 'Dat mag, als ze wil. Maar het hoeft niet.' },
            { id: 'b', text: 'Ze zegt niets, en ze hangt snel weer op.', best: false, feedback: 'Contact met haar werk is wel normaal en goed.' },
            { id: 'c', text: 'Ze zegt hoe lang het ongeveer gaat duren.', best: true, feedback: 'Goed. Dat wil de leidinggevende vooral weten.' },
          ],
          why: 'Je mag zelf iets vertellen, als je dat wilt. Maar het hoeft niet. Je baas mag vragen hoe lang het duurt. En of je misschien ander werk kunt doen.',
        },
        // ⚖️ check: Meld je meteen ziek bij je werkgever, ook vanuit het buitenland. Dan tellen die
        //   dagen meestal niet als vakantie ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.ziek.2.tf2',
          statement: 'Word je ziek op vakantie? Dan kun je je ziekmelden.',
          answer: true,
          why: 'Meld je meteen ziek bij je werkgever, ook vanuit het buitenland. Dan tellen die dagen meestal niet als vakantie. Vraag een briefje van een dokter daar.',
        },
        // Zzp en ziek (rapport hiaten, hoofdstuk 4): de brug tussen r.l.contract.4 en deze les.
        // ⚖️ check: Een zzp'er heeft geen werkgever die loon doorbetaalt bij ziekte ⚖️ (art. 7:629
        //   BW geldt alleen voor werknemers).
        // Redactie: er komt mogelijk een verplichte verzekering tegen arbeidsongeschiktheid voor
        //   zzp'ers ⚖️. Pas deze vraag dan aan.
        {
          kind: 'truefalse',
          id: 'r.l.ziek.2.tf3',
          statement: "Kevin is zzp'er. Is hij ziek? Dan moet hij zelf zorgen voor geld.",
          answer: true,
          why: "Een zzp'er werkt voor zichzelf, zonder werkgever. Niemand betaalt dan je loon door als je ziek bent. Regel daarom zelf iets, zoals sparen of een verzekering. Werk je als zzp'er, maar voelt het als een gewone baan? Vraag advies.",
        },
        {
          kind: 'whoask',
          id: 'r.l.ziek.2.wa1',
          question: 'Je bent ziek, en je hebt geen werkgever meer. Waar vraag je geld aan?',
          options: [
            { id: 'a', who: 'gemeente', best: false, feedback: 'Bij ziekte zonder werkgever is UWV meestal de eerste stap.' },
            { id: 'b', who: 'bedrijfsarts', best: false, feedback: 'De bedrijfsarts helpt bij herstel. Geld vraag je ergens anders aan.' },
            { id: 'c', who: 'uwv', best: true, feedback: 'Goed. Vraag bij UWV naar de Ziektewet.' },
          ],
          why: 'Heb je geen werkgever meer, of werk je via een uitzendbureau? Vraag UWV naar de Ziektewet.',
        },
        { kind: 'model', id: 'r.l.ziek.2.mo1', context: 'Je leidinggevende belt om te vragen hoe het gaat.', nl: 'Ik denk dat ik 6 weken niet kan werken. Ik houd u op de hoogte.' },
      ],
    },
    {
      // Les 6.3 · Langer ziek en weer beter
      id: 'r.l.ziek.3',
      title: 'Langer ziek en weer beter',
      goal: 'Je weet wat de bedrijfsarts doet. Je werkt mee aan je herstel. Je meldt je ook beter.',
      remember: 'De bedrijfsarts vertelt je baas niet wat je hebt.',
      // Wie kan je helpen: de bedrijfsarts · je huisarts · UWV (deskundigenoordeel) · een vakbond.
      help: ['bedrijfsarts', 'huisarts', 'uwv', 'vakbond'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.ziek.3.sc1',
          picture: 'Mohammed tegenover een vriendelijke arts met een laptop.',
          lines: [
            'Mohammed heeft last van zijn rug.',
            'Hij is al 5 weken thuis.',
            'Hij krijgt een brief: hij moet naar de bedrijfsarts.',
            'Hij denkt: "Werkt die arts niet gewoon voor mijn baas?"',
          ],
        },
        // ⚖️ check: Je mag ook zelf naar de bedrijfsarts ⚖️.
        {
          kind: 'rule',
          id: 'r.l.ziek.3.ru1',
          emoji: '🩺',
          title: 'De bedrijfsarts vertelt je baas niet wat je hebt.',
          body: [
            'De bedrijfsarts heeft een beroepsgeheim.',
            'Hij vertelt je baas alleen wat je wel en niet kunt.',
            'Je mag ook zelf naar de bedrijfsarts.',
            'Ben je weer beter? Meld je dan beter.',
          ],
          rule: 'geschreven',
        },
        // ⚖️ check: Je mag ook zelf naar de bedrijfsarts gaan ⚖️, zonder je baas.
        {
          kind: 'truefalse',
          id: 'r.l.ziek.3.tf1',
          statement: 'De bedrijfsarts vertelt je baas niet welke ziekte je hebt.',
          answer: true,
          why: 'De bedrijfsarts heeft een beroepsgeheim. Hij vertelt je baas alleen wat je wel en niet kunt. Niet wat je ziekte is. Je mag ook zelf naar de bedrijfsarts gaan, zonder je baas.',
        },
        // ⚖️ check: Ben je lang ziek? Dan moet je meewerken aan je herstel ⚖️.
        // ⚖️ check: Werk je niet mee? Dan kan je loon stoppen ⚖️.
        // ⚖️ check: Vraag dan een deskundigenoordeel bij UWV ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.ziek.3.wd1',
          situation: 'De bedrijfsarts zegt: "Begin met 2 uur per dag licht werk." Wat kan Mohammed het beste doen?',
          options: [
            { id: 'a', text: 'Hij doet mee, en hij zegt wat wel en niet lukt.', best: true, feedback: 'Goed. Zo bouwt hij het samen rustig op.' },
            { id: 'b', text: 'Hij zegt nee. Hij is nog niet helemaal beter.', best: false, feedback: 'Begrijpelijk. Maar meewerken aan herstel hoort erbij.' },
            { id: 'c', text: 'Hij werkt meteen weer hele dagen, om te laten zien dat hij wil.', best: false, feedback: 'Te snel. Dan kan hij weer ziek worden.' },
          ],
          why: 'Ben je lang ziek? Dan moet je meewerken aan je herstel. Jij, je baas en de bedrijfsarts maken samen een plan. Werk je niet mee? Dan kan je loon stoppen. Ben je het oneens? Vraag dan een deskundigenoordeel bij UWV.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.ziek.3.wd2',
          situation: 'Mohammed is weer beter. Wat kan Mohammed het beste doen?',
          options: [
            { id: 'a', text: 'Hij komt morgen gewoon weer, zonder iets te zeggen.', best: false, feedback: 'Dan klopt het rooster misschien niet.' },
            { id: 'b', text: 'Hij wacht tot zijn baas hem zelf belt.', best: false, feedback: 'Dat kan lang duren. Zelf melden is sneller.' },
            { id: 'c', text: 'Hij belt zijn leidinggevende, en hij meldt zich beter.', best: true, feedback: 'Goed. Dan weet iedereen dat hij weer kan.' },
          ],
          why: 'Betermelden is net zo belangrijk als ziekmelden. Dan weet je baas dat je weer komt. En dan klopt je loon weer.',
        },
        {
          kind: 'whoask',
          id: 'r.l.ziek.3.wa1',
          question: 'Je bent het oneens met je baas over je herstel. Wie geeft een deskundigenoordeel?',
          options: [
            { id: 'a', who: 'huisarts', best: false, feedback: 'De huisarts helpt je. Maar dit oordeel geeft een andere plek.' },
            { id: 'b', who: 'uwv', best: true, feedback: 'Goed. UWV geeft een deskundigenoordeel.' },
            { id: 'c', who: 'leidinggevende', best: false, feedback: 'Je leidinggevende is hier de andere kant.' },
          ],
          why: 'Ben je het oneens over je ziekte en werk? Vraag een deskundigenoordeel bij UWV.',
        },
        { kind: 'model', id: 'r.l.ziek.3.mo1', context: 'Je meldt je beter bij je leidinggevende.', nl: 'Ik ben weer beter. Ik kan morgen weer komen werken.' },
      ],
    },
  ],
};
