import type { BeUnit } from '../types';

/**
 * Sector logistiek (België) · Werken in de logistiek: de Belgische versie van warehouseUnit in
 * src/content/regels/units/sector.ts (les L.1, L.2). Zelfde lessen, met "r.be." vooraan
 * (docs/werkregels-belgie.md). Vlaamse woorden en plekken: interimkantoor, VDAB, arbeidsarts,
 * vakbondsafvaardiging, paletten.
 *
 * `// ⚖️ check:` = een feit dat de deskundige nakijkt, met de bron. Opgezocht op 30 okt 2026, via
 * zoekresultaten: werk.belgie.be was in deze sessie niet te openen (netwerk geblokkeerd, 30 okt
 * 2026).
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.warehouse',
    title: 'Werken in de logistiek',
    emoji: '📦',
    color: '#8b5a2b',
    lessons: [
      {
        // Les L.1 · Heftruck: alleen met opleiding
        id: 'r.be.l.warehouse.1',
        title: 'Heftruck: alleen met opleiding',
        goal: 'Je rijdt alleen op een heftruck met opleiding, en je loopt veilig.',
        remember: 'Geen opleiding? Dan rijd je niet op de heftruck.',
        // Wie kan je helpen: je leidinggevende · je interimkantoor (vraag naar een opleiding) · de
        //   VDAB (opleiding heftruckchauffeur) · een vakbond · Toezicht op het Welzijn op het Werk.
        help: ['leidinggevende', 'interimkantoor', 'vdab', 'vakbond'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.warehouse.1.sc1',
            picture: 'Jayden in een magazijn naast een heftruck. De sleutel zit erin.',
            lines: [
              'Jayden werkt sinds een week in een magazijn.',
              'Een palet moet snel naar de vrachtwagen.',
              'Een collega zegt: "Pak jij de heftruck even? De sleutel zit erin."',
              'Jayden heeft nog nooit op een heftruck gereden.',
            ],
          },
          // ⚖️ check: een heftruckbestuurder moet een gepaste opleiding krijgen vóór hij rijdt; de wet legt geen rijbewijs van de overheid op (codex boek IV titels 2 en 3, arbeidsmiddelen en mobiele arbeidsmiddelen; prevent.be "preventmemo heftrucks"; zoekresultaat)
          // ⚖️ check: de werkgever zorgt voor die opleiding (Welzijnswet; codex boek IV)
          // ⚖️ check: voetgangers en heftrucks gescheiden waar dat kan; looppaden (codex boek III titel 1, arbeidsplaatsen; prevent.be)
          {
            kind: 'rule',
            id: 'r.be.l.warehouse.1.ru1',
            emoji: '🚜',
            title: 'Geen opleiding? Dan rijd je niet op de heftruck.',
            body: [
              'Je rijdt alleen op een heftruck als je opgeleid bent.',
              'Er is geen rijbewijs van de overheid voor de heftruck.',
              'Je werkgever moet zorgen voor een goede opleiding.',
              'Loop altijd over de looppaden.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: alleen rijden met opleiding en met toestemming van de werkgever (codex boek IV; prevent.be)
          {
            kind: 'whatdo',
            id: 'r.be.l.warehouse.1.wd1',
            situation: 'Jayden heeft geen opleiding voor de heftruck. Wat kan Jayden het beste doen?',
            options: [
              { id: 'a', text: 'Hij rijdt heel langzaam. Dan kan er niets gebeuren.', best: false, feedback: 'Dat is logisch. Maar ook langzaam kan het misgaan.' },
              { id: 'b', text: 'Hij rijdt, want de collega zegt dat het mag.', best: false, feedback: 'Zijn collega kan dat niet beslissen.' },
              { id: 'c', text: 'Hij zegt: "Ik mag niet rijden. Kan iemand anders?"', best: true, feedback: 'Goed. Zonder opleiding rijd je niet.' },
            ],
            why: 'Je rijdt alleen op een heftruck als je opgeleid bent. En als je werkgever zegt dat het mag. Een heftruck is zwaar en kan omvallen. Ongevallen met heftrucks komen vaak voor.',
          },
          // ⚖️ check: geen rijbewijs van de overheid, wel een verplichte gepaste opleiding (prevent.be "preventmemo heftrucks"; zoekresultaat)
          // ⚖️ check: heftruck rijden is een veiligheidsfunctie: de bestuurder krijgt gezondheidstoezicht bij de arbeidsarts (codex boek I titel 4; prevent.be; zoekresultaat)
          {
            kind: 'truefalse',
            id: 'r.be.l.warehouse.1.tf1',
            statement: 'Voor een heftruck heb je een rijbewijs van de overheid nodig.',
            answer: false,
            why: 'Er is geen rijbewijs van de overheid voor de heftruck. Maar je werkgever moet zorgen dat je goed bent opgeleid. Na de opleiding krijg je vaak een attest. De arbeidsarts kijkt ook of je gezond genoeg bent om te rijden.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.warehouse.1.wd2',
            situation: 'Jayden moet naar de andere kant van het magazijn. Over de rijbaan van de heftrucks is het korter. Wat kan Jayden het beste doen?',
            options: [
              { id: 'a', text: 'Hij loopt over de looppaden, ook al is het verder.', best: true, feedback: 'Goed. Daar zijn voetgangers veilig.' },
              { id: 'b', text: 'Hij loopt over de rijbaan, en hij kijkt goed uit.', best: false, feedback: 'Dat is logisch. Maar een bestuurder ziet hem misschien niet.' },
              { id: 'c', text: 'Hij loopt over de rijbaan, met zijn fluohesje aan.', best: false, feedback: 'Het hesje helpt. Maar de rijbaan is niet om te lopen.' },
            ],
            why: 'Loop altijd over de looppaden. Een bestuurder van een heftruck ziet niet alles. Moet je toch oversteken? Zoek oogcontact met de bestuurder. Loop nooit vlak achter een heftruck.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.warehouse.1.wa1',
            question: 'Je werkt via een interimkantoor. Je wilt een heftruckopleiding doen. Wie vraag je het?',
            options: [
              { id: 'a', who: 'collega', best: false, feedback: 'Een collega kan tips geven. Maar geen opleiding regelen.' },
              { id: 'b', who: 'interimkantoor', best: true, feedback: 'Goed. Het kantoor weet welke opleiding je nodig hebt.' },
              { id: 'c', who: 'arbeidsarts', best: false, feedback: 'De arbeidsarts gaat over je gezondheid, niet over opleidingen.' },
            ],
            why: 'Vraag je interimkantoor of je leidinggevende naar een opleiding. Ook de VDAB heeft een opleiding voor heftruckchauffeur.',
          },
          { kind: 'model', id: 'r.be.l.warehouse.1.mo1', context: 'Iemand vraagt je om op de heftruck te rijden.', nl: 'Ik heb geen opleiding voor de heftruck. Ik mag niet rijden.' },
        ],
      },
      {
        // Les L.2 · Tillen, scanners en tempo
        id: 'r.be.l.warehouse.2',
        title: 'Tillen, scanners en tempo',
        goal: 'Je tilt veilig. Je weet wat je doet als de norm te hoog is.',
        remember: 'Te hoog tempo? Vraag hoe de norm werkt. Sla je pauze niet over.',
        // Wie kan je helpen: je leidinggevende · de arbeidsarts · de vakbondsafvaardiging of het
        //   Comité voor Preventie en Bescherming op het Werk · een vakbond · Toezicht op het
        //   Welzijn op het Werk.
        help: ['leidinggevende', 'arbeidsarts', 'vakbond'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.warehouse.2.sc1',
            picture: 'Esra met een scanner om haar arm, bij een rek vol dozen. Op het scherm een rood cijfer.',
            lines: [
              'Esra is orderpicker in een distributiecentrum.',
              'Ze heeft een scanner om haar arm.',
              'Die telt hoeveel orders ze per uur doet.',
              'Haar teamleider zegt: "Je haalt de norm niet."',
              'Esra werkt al zo snel als ze kan.',
            ],
          },
          // ⚖️ check: de werkgever moet psychosociale risico's (zoals te hoge werkdruk) en risico's bij het tillen van lasten voorkomen (Welzijnswet hoofdstuk Vbis; codex boek I titel 3; codex boek VIII titel 3, manueel hanteren van lasten)
          // ⚖️ check: de pauze: na 6 uur werk minstens 15 minuten (Arbeidswet art. 38quater; zie de unit tijd)
          {
            kind: 'rule',
            id: 'r.be.l.warehouse.2.ru1',
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
            id: 'r.be.l.warehouse.2.wd1',
            situation: 'Esra haalt de norm niet. Wat kan Esra het beste doen?',
            options: [
              { id: 'a', text: 'Ze vraagt hoe de norm werkt, en wat beter kan.', best: true, feedback: 'Goed. Zo weet ze wat haar baas van haar wil.' },
              { id: 'b', text: 'Ze slaat haar pauze over om meer orders te halen.', best: false, feedback: 'Dat snap ik. Maar pauze is haar recht.' },
              { id: 'c', text: 'Ze tilt twee dozen tegelijk, om sneller te gaan.', best: false, feedback: 'Dat is zwaar voor haar rug. Zo kan ze zich bezeren.' },
            ],
            why: 'De norm is hoeveel je per uur moet doen. Vraag hoe de norm werkt. Wat telt de scanner mee? Is de norm voor iedereen even hoog? Vraag ook wat beter kan. Je pauze sla je niet over.',
          },
          // ⚖️ check: de werkgever moet een ongezond tempo voorkomen (Welzijnswet hoofdstuk Vbis; codex boek I titel 3)
          // ⚖️ check: de werknemer mag zelf de arbeidsarts raadplegen bij klachten door het werk (spontane raadpleging, codex boek I titel 4; nakijken)
          {
            kind: 'truefalse',
            id: 'r.be.l.warehouse.2.tf1',
            statement: 'Je werkgever moet zorgen dat het tempo niet ongezond is.',
            answer: true,
            why: 'Te hoge werkdruk en te veel tillen maken mensen ziek. Je werkgever moet dat voorkomen. Krijg je klachten van het tempo? Meld het bij je leidinggevende. Of ga zelf naar de arbeidsarts.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.warehouse.2.wd2',
            situation: 'Esra moet een zware doos van de onderste plank pakken. Wat kan Esra het beste doen?',
            options: [
              { id: 'a', text: 'Ze buigt voorover, en tilt de doos met haar rug.', best: false, feedback: 'Dan komt alle kracht op haar rug. Dat geeft klachten.' },
              { id: 'b', text: 'Ze zakt door haar knieën, met de doos dicht bij zich.', best: true, feedback: 'Goed. Zo tilt ze met haar benen, niet met haar rug.' },
              { id: 'c', text: 'Ze trekt de doos snel met één hand van de plank.', best: false, feedback: 'Zo kan ze haar pols of haar rug verrekken.' },
            ],
            why: 'Zak door je knieën. Houd je rug recht en de doos dicht bij je. Draai niet tijdens het tillen. Te zwaar? Gebruik een hulpmiddel, of vraag een collega.',
          },
          // ⚖️ check: de vakbondsafvaardiging en het Comité voor Preventie en Bescherming op het Werk (vanaf 50 werknemers) praten mee over veiligheid en werkdruk (Welzijnswet art. 49 e.v.; nakijken)
          {
            kind: 'whoask',
            id: 'r.be.l.warehouse.2.wa1',
            question: 'Het hele team haalt de norm niet. Wie kan jullie samen helpen?',
            options: [
              { id: 'a', who: 'vakbond', best: true, feedback: 'Goed. Een vakbond helpt teams met hun rechten.' },
              { id: 'b', who: 'huisarts', best: false, feedback: 'De huisarts helpt jou alleen, niet het hele team.' },
              { id: 'c', who: 'rva', best: false, feedback: 'De RVA gaat over werkloosheid, niet over je werk.' },
            ],
            why: 'Samen sta je sterker. Een vakbond kan helpen. In grotere bedrijven is er ook een vakbondsafvaardiging: collega\'s van de vakbond.',
          },
          { kind: 'model', id: 'r.be.l.warehouse.2.mo1', context: 'Je haalt de norm nog niet.', nl: 'Ik haal de norm nog niet. Hoe kan ik het beter doen?' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.warehouse.1.mo1': [
      { text: 'Oké, ik probeer het wel. Zo moeilijk is het vast niet.', feedback: 'Zonder opleiding rijd je niet. Zeg dat je niet mag.' },
      { text: 'Nee, rijd jij maar. Ik heb daar geen zin in.', feedback: 'Zo lijkt het of je niet wilt. Zeg dat je geen opleiding hebt.' },
    ],
    'r.be.l.warehouse.2.mo1': [
      { text: 'De norm is onzin. Niemand kan zo snel werken.', feedback: 'Dat klinkt boos. Vraag liever wat beter kan.' },
      { text: 'Sorry. Ik sla mijn pauze wel over.', feedback: 'Je pauze is je recht. Vraag hoe de norm werkt.' },
    ],
  },
  advice: {
    'r.be.l.warehouse.1.ru1': 'advice',
    'r.be.l.warehouse.2.ru1': 'advice',
  },
};
