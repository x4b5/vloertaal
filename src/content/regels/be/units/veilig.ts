import type { BeUnit } from '../types';

/**
 * Unit 7 (België) · Veilig en gezond werken: de Belgische versie van src/content/regels/units/veilig.ts.
 * Zelfde lessen als de Nederlandse, met "r.be." vooraan (docs/werkregels-belgie.md). Vlaamse
 * woorden en plekken: werf, werfleider, Welzijnswet, preventieadviseur, Toezicht op het Welzijn op
 * het Werk, arbeidsongevallenverzekeraar, vertrouwenspersoon, preventieadviseur psychosociale
 * aspecten, arbeidsarts, EHBO, gsm.
 *
 * `// ⚖️ check:` = een feit dat de deskundige nakijkt, met de bron. Opgezocht op 30 okt 2026, via
 * zoekresultaten: werk.belgie.be was in deze sessie niet te openen (netwerk geblokkeerd, 30 okt
 * 2026). De deskundige legt de feiten naast de Welzijnswet van 4 augustus 1996 en de codex over
 * het welzijn op het werk. `// Redactie:` is voor de makers.
 * Voor "Wie vraag je het?" is er geen eigen plek voor de preventieadviseur of Toezicht op het
 * Welzijn op het Werk (askWho.ts): die staan alleen in de tekst.
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.veilig',
    title: 'Veilig en gezond werken',
    emoji: '⛑️',
    color: '#e0a800',
    lessons: [
      {
        // Les 7.1 · Beschermende spullen en uitleg
        id: 'r.be.l.veilig.1',
        title: 'Beschermende spullen en uitleg',
        goal: 'Je weet dat je werkgever gratis bescherming en uitleg geeft. Je weet dat je erom mag vragen.',
        remember: 'Beschermende spullen krijg je gratis van je werkgever.',
        // Wie kan je helpen: je werfleider of leidinggevende · de preventieadviseur (de persoon die
        //   je baas helpt met veiligheid) · een vakbond · Toezicht op het Welzijn op het Werk.
        help: ['leidinggevende', 'vakbond'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.veilig.1.sc1',
            picture: 'Piotr op een werf met helm. Zijn handschoenen hebben gaten. Een zaag ligt klaar.',
            lines: [
              'Piotr werkt op een werf.',
              'Zijn handschoenen zijn kapot.',
              'Zijn veiligheidsbril is zoek.',
              'Hij moet zo gaan zagen.',
            ],
          },
          // ⚖️ check: de werkgever geeft persoonlijke beschermingsmiddelen gratis en houdt ze in orde (Welzijnswet 4 augustus 1996; codex boek IX titel 2, persoonlijke beschermingsmiddelen)
          // ⚖️ check: de werkgever geeft elke werknemer informatie en opleiding over de risico's en de veilige werkwijze (Welzijnswet; codex boek I titel 2, algemene beginselen)
          {
            kind: 'rule',
            id: 'r.be.l.veilig.1.ru1',
            emoji: '🧤',
            title: 'Beschermende spullen krijg je gratis van je werkgever.',
            body: [
              'Je werkgever geeft beschermende spullen gratis.',
              'Denk aan handschoenen, een bril of veiligheidsschoenen.',
              'Je hebt ook recht op uitleg over veilig werken.',
              'Erom vragen is normaal.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: de werkgever geeft beschermingsmiddelen gratis (codex boek IX titel 2)
          {
            kind: 'whatdo',
            id: 'r.be.l.veilig.1.wd1',
            situation: 'Piotr moet zo zagen, zonder goede spullen. Wat kan Piotr het beste doen?',
            options: [
              { id: 'a', text: 'Hij zaagt even zonder bril. Het duurt maar kort.', best: false, feedback: 'Een splinter in zijn oog gaat heel snel.' },
              { id: 'b', text: 'Hij vraagt nieuwe spullen aan zijn werfleider.', best: true, feedback: 'Goed. De werfleider is de baas op de werf. Die regelt dit.' },
              { id: 'c', text: 'Hij koopt na het werk zelf nieuwe spullen.', best: false, feedback: 'Goed bedoeld. Maar zijn werkgever moet ze geven.' },
            ],
            why: 'Je werkgever moet beschermende spullen gratis geven. Denk aan handschoenen, een bril of veiligheidsschoenen. Erom vragen is normaal. Zonder bescherming werken is gevaarlijk.',
          },
          // ⚖️ check: recht op informatie en opleiding over de risico's, ook voor nieuwe werknemers en interimkrachten (Welzijnswet; codex boek I titel 2; codex boek X titel 2, uitzendarbeid)
          {
            kind: 'truefalse',
            id: 'r.be.l.veilig.1.tf1',
            statement: 'Je werkgever moet je uitleggen hoe je veilig werkt.',
            answer: true,
            why: 'Je hebt recht op uitleg over de gevaren. En over hoe je veilig werkt. Ook als je nieuw bent of interimkracht. Snap je het niet? Vraag het nog een keer.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.veilig.1.wd2',
            situation: 'Op de werf is vaak een korte vergadering over veiligheid: de toolboxmeeting. Piotr vindt het saai. Wat kan Piotr het beste doen?',
            options: [
              { id: 'a', text: 'Hij blijft weg. Hij weet het meeste toch al.', best: false, feedback: 'Er kan nieuws zijn. En het hoort bij zijn werk.' },
              { id: 'b', text: 'Hij gaat, maar hij zit op zijn gsm.', best: false, feedback: 'Dan hoort hij niet wat er nieuw is.' },
              { id: 'c', text: 'Hij gaat erheen, luistert en stelt een vraag.', best: true, feedback: 'Goed. Zo hoort hij wat er nieuw is.' },
            ],
            why: 'In de toolboxmeeting hoor je over gevaren en nieuwe regels. Je kunt ook zelf iets melden. Het is werktijd.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.veilig.1.wa1',
            question: 'Je handschoenen zijn kapot. Bij wie vraag je nieuwe?',
            options: [
              { id: 'a', who: 'leidinggevende', best: true, feedback: 'Goed. Je werfleider of leidinggevende regelt nieuwe spullen.' },
              { id: 'b', who: 'collega', best: false, feedback: 'Een collega kan je helpen zoeken. Maar je werk moet ze geven.' },
              { id: 'c', who: 'tsw', best: false, feedback: 'Die inspectie gaat over loon en uren. Vraag het eerst zelf.' },
            ],
            why: 'Vraag nieuwe spullen aan je werfleider of leidinggevende. Je krijgt ze gratis.',
          },
          { kind: 'model', id: 'r.be.l.veilig.1.mo1', context: 'Je beschermende spullen zijn kapot.', nl: 'Mijn handschoenen zijn kapot. Waar krijg ik nieuwe?' },
        ],
      },
      {
        // Les 7.2 · Onveilig? Zeg het en stop
        id: 'r.be.l.veilig.2',
        title: 'Onveilig? Zeg het en stop',
        goal: 'Je meldt gevaar en bijna-ongevallen. Je weet dat je mag stoppen bij groot gevaar.',
        remember: 'Onveilig? Zeg het meteen. Bij groot gevaar mag je stoppen.',
        // Wie kan je helpen: je leidinggevende · de preventieadviseur · de vakbondsafvaardiging of
        //   het Comité voor Preventie en Bescherming op het Werk · Toezicht op het Welzijn op het
        //   Werk (FOD WASO) · bij direct gevaar: 112.
        help: ['leidinggevende', 'vakbond'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.veilig.2.sc1',
            picture: 'Kevin in een distributiecentrum. Een stapel paletten staat scheef. Een heftruck rijdt langs.',
            lines: [
              'Kevin werkt in een distributiecentrum.',
              'Een stapel paletten staat scheef.',
              'Er valt bijna een doos op een collega.',
              'Er gebeurt niets.',
              'Iedereen werkt gewoon door.',
            ],
          },
          // ⚖️ check: een werknemer die bij ernstig en onmiddellijk gevaar zijn werkpost verlaat, mag daarvoor geen nadeel krijgen (codex boek I titel 2, hoofdstuk V, art. I.2-23 tot I.2-26; kaderrichtlijn 89/391/EEG art. 8; zoekresultaat, artikelnummer nakijken)
          // ⚖️ check: de werknemer meldt gevaar meteen aan de werkgever en de preventiedienst (Welzijnswet art. 6)
          // ⚖️ check: Toezicht op het Welzijn op het Werk (FOD WASO) controleert de regels over veilig werken (werk.belgie.be)
          {
            kind: 'rule',
            id: 'r.be.l.veilig.2.ru1',
            emoji: '🛑',
            title: 'Onveilig? Zeg het meteen. Bij groot gevaar mag je stoppen.',
            body: [
              'Meld gevaar en bijna-ongevallen meteen.',
              'Is er ernstig en direct gevaar? Dan mag je het werk stoppen.',
              'Je werkgever mag je daar niet voor straffen.',
              'Helpt melden niet? Ga naar Toezicht op het Welzijn op het Werk.',
            ],
            rule: 'geschreven',
            key: true,
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.veilig.2.wd1',
            situation: 'Er is niemand gewond. Wat kan Kevin het beste doen?',
            options: [
              { id: 'a', text: 'Niets. Er is toch niemand gewond geraakt.', best: false, feedback: 'Gelukkig niet. Maar de volgende keer misschien wel.' },
              { id: 'b', text: 'Hij zet de doos zelf recht, en zegt het niemand.', best: false, feedback: 'Goed dat hij helpt. Maar zo leert niemand ervan.' },
              { id: 'c', text: "Hij waarschuwt de collega's en meldt het bij de leiding.", best: true, feedback: 'Goed. Zo voorkomt hij een echt ongeval.' },
            ],
            why: 'Een bijna-ongeval is een waarschuwing. Melden helpt om een echt ongeval te voorkomen. Ook kleine dingen mag je melden.',
          },
          // ⚖️ check: bij ernstig en onmiddellijk gevaar mag je stoppen, zonder nadeel (codex art. I.2-23 tot I.2-26; nakijken)
          {
            kind: 'truefalse',
            id: 'r.be.l.veilig.2.tf1',
            statement: 'Bij groot gevaar mag je stoppen met werken.',
            answer: true,
            why: 'Is er ernstig en direct gevaar? Dan mag je het werk stoppen. Zeg het meteen tegen je leidinggevende. Je werkgever mag je daar niet voor straffen.',
          },
          // ⚖️ check: de preventieadviseur (interne dienst voor preventie en bescherming) helpt de werkgever met veiligheid (Welzijnswet art. 33)
          // ⚖️ check: Toezicht op het Welzijn op het Werk neemt klachten aan over onveilig werk (werk.belgie.be, "klacht indienen"; nakijken)
          {
            kind: 'whatdo',
            id: 'r.be.l.veilig.2.wd2',
            situation: 'Kevin heeft het gemeld. Weken later is het nog steeds onveilig. Wat kan Kevin het beste doen?',
            options: [
              { id: 'a', text: 'Hij meldt het bij de preventieadviseur of de vakbond.', best: true, feedback: 'Goed. Zij kunnen helpen. Er is ook een inspectie.' },
              { id: 'b', text: 'Hij zet een filmpje van het magazijn online.', best: false, feedback: 'Dat snap ik, maar dat kan hem problemen geven.' },
              { id: 'c', text: 'Hij stopt met melden. Het helpt toch niet.', best: false, feedback: 'Jammer. Er zijn nog plekken waar hij heen kan.' },
            ],
            why: 'De preventieadviseur helpt je baas met veiligheid. Een vakbond kan ook helpen. Helpt dat niet? Dan kun je naar Toezicht op het Welzijn op het Werk. Dat is de inspectie voor veilig werken. Een filmpje online kan juist problemen geven, ook voor jou.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.veilig.2.wa1',
            question: 'Een stapel paletten staat scheef. Aan wie zeg je het meteen?',
            options: [
              { id: 'a', who: 'hr', best: false, feedback: 'De personeelsdienst is vaak niet op de werkvloer. Dit moet snel.' },
              { id: 'b', who: 'vakbond', best: false, feedback: 'Een vakbond helpt bij je rechten. Dit gevaar moet nu weg.' },
              { id: 'c', who: 'leidinggevende', best: true, feedback: 'Goed. Je leidinggevende kan het meteen laten oplossen.' },
            ],
            why: 'Zeg gevaar meteen tegen je leidinggevende. Bij direct gevaar voor mensen: bel 112.',
          },
          { kind: 'model', id: 'r.be.l.veilig.2.mo1', context: 'Je ziet direct gevaar.', nl: 'Stop! Dit is niet veilig.' },
        ],
      },
      {
        // Les 7.3 · Een ongeval, of te veel stress
        id: 'r.be.l.veilig.3',
        title: 'Een ongeval, of te veel stress',
        goal: 'Je meldt elk ongeval. Je praat erover als het werk te zwaar wordt.',
        remember: 'Meld elk ongeval, ook een klein ongeval.',
        // Wie kan je helpen: bij spoed: 112 · de EHBO'er op je werk · je leidinggevende · de
        //   vertrouwenspersoon of de preventieadviseur psychosociale aspecten · de arbeidsarts · een
        //   vakbond.
        help: ['leidinggevende', 'vertrouwenspersoon', 'arbeidsarts', 'vakbond'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.veilig.3.sc1',
            picture: 'Dewi in haar auto voor een huis. Op haar telefoon een lange lijst met adressen.',
            lines: [
              'Dewi werkt in de thuiszorg.',
              'Ze heeft elke dag te weinig tijd voor haar cliënten.',
              'Ze slaapt slecht.',
              'Ze is vaak gespannen.',
              'Ze denkt: "Dat hoort er nu eenmaal bij."',
            ],
          },
          // ⚖️ check: de werknemer meldt een arbeidsongeval aan de werkgever; de werkgever doet aangifte bij zijn arbeidsongevallenverzekeraar binnen 8 kalenderdagen (Arbeidsongevallenwet 10 april 1971, art. 62; prevent.be; securex.be "binnen welke termijn moet u het ongeval aangeven"; zoekresultaten)
          // ⚖️ check: elke werkgever in de privésector moet een arbeidsongevallenverzekering hebben (Arbeidsongevallenwet art. 49; fedris.be)
          // ⚖️ check: de werkgever moet psychosociale risico's (stress, burn-out, pesten) voorkomen (Welzijnswet hoofdstuk Vbis; codex boek I titel 3)
          {
            kind: 'rule',
            id: 'r.be.l.veilig.3.ru1',
            emoji: '🚑',
            title: 'Meld elk ongeval, ook een klein ongeval.',
            body: [
              'Meld elk ongeval meteen, ook als het klein lijkt.',
              'Schrijf op wat er gebeurde, wanneer, en wie het zag.',
              'Je baas meldt het ongeval aan zijn verzekeraar.',
              'Te veel stress? Praat erover voordat je ziek wordt.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: de werkgever moet stress en andere psychosociale risico's aanpakken (Welzijnswet hoofdstuk Vbis)
          // ⚖️ check: de werknemer kan naar de vertrouwenspersoon of de preventieadviseur psychosociale aspecten; beiden hebben beroepsgeheim (codex boek I titel 3; werk.belgie.be "de vertrouwenspersoon"; securex.be "beroepsgeheim vertrouwenspersoon"; zoekresultaten)
          {
            kind: 'whatdo',
            id: 'r.be.l.veilig.3.wd1',
            situation: 'Dewi merkt dat het te veel wordt. Wat kan Dewi het beste doen?',
            options: [
              { id: 'a', text: 'Ze zegt niets. In de zorg heeft iedereen het druk.', best: false, feedback: 'Dat snap ik. Maar zo kan ze ziek worden.' },
              { id: 'b', text: 'Ze praat met haar leidinggevende of de vertrouwenspersoon.', best: true, feedback: 'Goed. Dan kan er samen iets veranderen.' },
              { id: 'c', text: 'Ze werkt sneller, dan is ze eerder klaar.', best: false, feedback: 'Haast geeft fouten en meer stress.' },
            ],
            why: 'Te veel werkdruk maakt mensen ziek. Je werkgever moet daar iets aan doen. Praat erover voordat je ziek wordt. Je kunt naar de vertrouwenspersoon. Of naar de preventieadviseur psychosociale aspecten. Dat is een deskundige voor stress en pesten op het werk. Wat je zegt, blijft geheim.',
          },
          // ⚖️ check: een ernstig arbeidsongeval meldt de werkgever onmiddellijk aan Toezicht op het Welzijn op het Werk, met een omstandig verslag binnen 10 dagen (codex boek I titel 6, maatregelen bij arbeidsongeval; werk.belgie.be "ernstige ongevallen"; partena-professional.be; zoekresultaten)
          // ⚖️ check: de arbeidsongevallenverzekeraar betaalt de medische kosten en een vergoeding voor loonverlies (Arbeidsongevallenwet; fedris.be)
          {
            kind: 'truefalse',
            id: 'r.be.l.veilig.3.tf1',
            statement: 'Een ernstig ongeval op het werk moet je werkgever melden.',
            answer: true,
            why: 'Bij een ernstig ongeval belt je werkgever meteen de inspectie. Dat is Toezicht op het Welzijn op het Werk. Elk ongeval meldt je baas ook aan zijn verzekeraar. Die verzekeraar betaalt dan bijvoorbeeld je dokter.',
          },
          // ⚖️ check: een ongeval op de weg naar of van het werk is meestal ook een arbeidsongeval (arbeidswegongeval, Arbeidsongevallenwet art. 8)
          {
            kind: 'whatdo',
            id: 'r.be.l.veilig.3.wd2',
            situation: 'Fatima glijdt uit op een natte vloer. Ze bezeert haar pols. Het lijkt niet erg. Wat kan Fatima het beste doen?',
            options: [
              { id: 'a', text: 'Ze meldt het toch, en schrijft op wat er gebeurde.', best: true, feedback: 'Goed. Soms krijg je later pas klachten.' },
              { id: 'b', text: 'Ze zegt niets. Ze wil niet lastig zijn.', best: false, feedback: 'Melden is niet lastig. Het hoort erbij.' },
              { id: 'c', text: 'Ze werkt door, en ze kijkt morgen hoe het gaat.', best: false, feedback: 'Kan, maar ze moet het wel vandaag melden.' },
            ],
            why: 'Meld elk ongeval, ook als het klein lijkt. Schrijf op wat er gebeurde, wanneer, en wie het zag. Maak een foto van de plek. Dan heb je bewijs als je later klachten krijgt. Een ongeval op weg naar je werk telt meestal ook.',
          },
          // ⚖️ check: elke werkgever zorgt voor eerste hulp en wijst hulpverleners aan (EHBO) (codex boek I titel 5, eerste hulp)
          {
            kind: 'whatdo',
            id: 'r.be.l.veilig.3.wd3',
            situation: 'Piotr ziet een collega van een trap vallen. De collega ligt op de grond. Wat kan Piotr het beste doen?',
            options: [
              { id: 'a', text: "Hij roept de EHBO'er. Is het ernstig? Dan belt hij 112.", best: true, feedback: 'Goed. Zo komt er snel hulp.' },
              { id: 'b', text: 'Hij helpt de collega meteen overeind.', best: false, feedback: 'Liever niet meteen. Bewegen kan letsel erger maken.' },
              { id: 'c', text: 'Hij zoekt eerst zijn leidinggevende, op een andere afdeling.', best: false, feedback: 'Dat kost tijd. Eerst hulp, daarna melden.' },
            ],
            why: "Een EHBO'er is een collega die eerste hulp geeft. Elk bedrijf moet zorgen voor eerste hulp. Vraag op je eerste dag wie dat is. Is het ernstig? Bel dan meteen 112.",
          },
          {
            kind: 'whoask',
            id: 'r.be.l.veilig.3.wa1',
            question: 'Je werk maakt je moe en gespannen. Met wie op je werk praat je in vertrouwen?',
            options: [
              { id: 'a', who: 'rva', best: false, feedback: 'De RVA gaat over werkloosheid. Praat eerst op je werk.' },
              { id: 'b', who: 'vertrouwenspersoon', best: true, feedback: 'Goed. De vertrouwenspersoon luistert, en helpt je verder.' },
              { id: 'c', who: 'justitiehuis', best: false, feedback: 'Het justitiehuis geeft advies over je rechten. Niet over stress.' },
            ],
            why: 'De vertrouwenspersoon luistert en helpt je verder. Je kunt ook naar de preventieadviseur psychosociale aspecten.',
          },
          { kind: 'model', id: 'r.be.l.veilig.3.mo1', context: 'Je hebt een ongeval gehad op je werk.', nl: 'Ik ben gevallen. Ik wil dat graag melden.' },
        ],
      },
      {
        // Les 7.4 · Fit voor je werk: slapen, eten, bewegen
        id: 'r.be.l.veilig.4',
        title: 'Fit voor je werk: slapen, eten, bewegen',
        goal: 'Je weet waarom slaap, eten en pauzes belangrijk zijn. Je zegt het als je te moe bent.',
        remember: 'Te moe om veilig te werken? Zeg het, vóór je begint.',
        // Wie kan je helpen: je leidinggevende · de arbeidsarts (je mag zelf om een gesprek vragen) ·
        //   je huisarts (bij slecht slapen of somberheid).
        help: ['leidinggevende', 'arbeidsarts', 'huisarts'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.veilig.4.sc1',
            picture: 'Kevin om 7 uur in de ochtend bij de ingang van een distributiecentrum. In zijn hand een blikje energiedrank.',
            lines: [
              'Kevin begint om 7 uur in een distributiecentrum.',
              "Hij zat gisteren tot 2 uur 's nachts op zijn gsm.",
              'Ontbijt slaat hij over. Hij drinkt een blikje energiedrank.',
              'Om 10 uur kan hij bijna niet meer opletten.',
            ],
          },
          // ⚖️ check: tussen 2 dagelijkse arbeidsprestaties heeft de werknemer minstens 11 opeenvolgende uren rust (Arbeidswet 16 maart 1971, art. 38ter §1; werk.belgie.be "rusttijden"; zoekresultaat)
          // ⚖️ check: de werknemer brengt zichzelf en anderen niet in gevaar (Welzijnswet art. 6)
          {
            kind: 'rule',
            id: 'r.be.l.veilig.4.ru1',
            emoji: '😴',
            title: 'Te moe om veilig te werken? Zeg het, vóór je begint.',
            body: [
              'Slaap genoeg. Tussen 2 diensten zit meestal minstens 11 uur.',
              'Eet iets voor je begint, en drink genoeg water.',
              'Neem je pauzes. Beweeg even als je lang stilstaat of zit.',
              'Te moe om veilig te werken? Zeg het tegen je leidinggevende.',
            ],
            rule: 'geschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.veilig.4.wd1',
            situation: 'Kevin kan bijna niet meer opletten. Hij moet zo een zware kar rijden. Wat kan Kevin het beste doen?',
            options: [
              { id: 'a', text: 'Hij drinkt nog een blikje energiedrank. Dan gaat het wel.', best: false, feedback: 'Dat helpt maar kort. Daarna is hij vaak nog moeier.' },
              { id: 'b', text: 'Hij zegt tegen zijn leidinggevende dat hij te moe is.', best: true, feedback: 'Goed. Dan kan zijn leidinggevende hem ander werk geven.' },
              { id: 'c', text: 'Hij zegt niets, en hij werkt gewoon wat langzamer.', best: false, feedback: 'Dat snap ik. Maar moe zijn geeft snel fouten en ongevallen.' },
            ],
            why: 'Moe zijn is gevaarlijk op je werk. Je let minder goed op. Dan gebeurt er sneller een ongeval. Zeg het als je te moe bent om veilig te werken. Energiedrank helpt maar kort.',
          },
          // ⚖️ check: minstens 11 uur rust tussen 2 diensten; kortere rust mag alleen in een paar gevallen, bv. bij overmacht of gesplitste diensten (Arbeidswet art. 38ter §1 en §2; werk.belgie.be "rusttijden"; zoekresultaat)
          {
            kind: 'truefalse',
            id: 'r.be.l.veilig.4.tf1',
            statement: 'Tussen 2 diensten zit meestal minstens 11 uur.',
            answer: true,
            why: 'Dat staat in de Arbeidswet. In een paar gevallen mag het korter. Kijk ook naar de afspraken van je sector. Gebruik die tijd ook echt om te slapen.',
          },
          // ⚖️ check: de werknemer mag zelf een gesprek met de arbeidsarts vragen bij klachten door het werk (spontane raadpleging, codex boek I titel 4, art. I.4-37; nakijken)
          {
            kind: 'whatdo',
            id: 'r.be.l.veilig.4.wd2',
            situation: 'Mohammed staat de hele dag aan een lopende band. Aan het eind van de dag heeft hij pijn in zijn rug. Wat kan Mohammed het beste doen?',
            options: [
              { id: 'a', text: 'Hij beweegt in zijn pauze, en hij meldt de pijn.', best: true, feedback: 'Goed. Bewegen helpt. En melden kan erger voorkomen.' },
              { id: 'b', text: 'Hij neemt elke dag een pijnstiller, en werkt door.', best: false, feedback: 'Dat snap ik. Maar dan blijft het probleem.' },
              { id: 'c', text: 'Hij blijft in de pauze zitten. Dan rust zijn rug.', best: false, feedback: 'Rust helpt even. Maar bewegen is vaak beter voor je rug.' },
            ],
            why: 'Lang stilstaan of zitten is zwaar voor je lichaam. Beweeg even in je pauze. Loop een rondje, of rek je uit. Blijft de pijn? Meld het bij je leidinggevende. Je mag ook zelf naar de arbeidsarts.',
          },
          { kind: 'model', id: 'r.be.l.veilig.4.mo1', context: 'Je bent te moe om veilig te werken.', nl: 'Ik ben vandaag erg moe. Kan ik ander werk doen?' },
        ],
      },
      {
        // Les 7.5 · Alcohol, drugs en je werk
        id: 'r.be.l.veilig.5',
        title: 'Alcohol, drugs en je werk',
        goal: 'Je werkt nooit onder invloed. Je weet waar je hulp krijgt.',
        remember: 'Gedronken of drugs gebruikt? Dan werk je niet.',
        // Wie kan je helpen: je huisarts (verwijst door naar hulp bij verslaving) · de arbeidsarts ·
        //   je leidinggevende (als een collega onder invloed is) · de apotheker (over medicijnen) ·
        //   de Druglijn (druglijn.be).
        help: ['huisarts', 'arbeidsarts', 'leidinggevende'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.veilig.5.sc1',
            picture: 'Piotr in een fabriekshal bij een heftruck. Naast hem een collega met een rood hoofd.',
            lines: [
              'Piotr werkt in een fabriek.',
              'Zijn collega komt binnen voor de vroege dienst.',
              'Hij ruikt naar alcohol. Hij zegt: "Gisteren was het feest."',
              'Over 10 minuten moet hij op de heftruck.',
            ],
          },
          // ⚖️ check: elke werkgever in de privésector heeft een preventief alcohol- en drugbeleid, met regels in het arbeidsreglement (cao nr. 100 van 1 april 2009, NAR)
          // ⚖️ check: in de bijsluiter staat of een medicijn de rijvaardigheid of het bedienen van machines beïnvloedt (FAGG; de Nederlandse gele sticker bestaat in België niet, nakijken)
          // ⚖️ check: de huisarts heeft beroepsgeheim (Strafwetboek art. 458)
          {
            kind: 'rule',
            id: 'r.be.l.veilig.5.ru1',
            emoji: '🚫',
            title: 'Gedronken of drugs gebruikt? Dan werk je niet.',
            body: [
              'Werk nooit onder invloed van alcohol of drugs.',
              'Elk bedrijf heeft regels over alcohol en drugs.',
              'Ook sommige medicijnen maken je suf. Lees de bijsluiter.',
              'Lukt stoppen niet? Praat met je huisarts. Dat blijft geheim.',
            ],
            rule: 'geschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.veilig.5.wd1',
            situation: 'Piotr ruikt de alcohol. Wat kan Piotr het beste doen?',
            options: [
              { id: 'a', text: 'Hij zegt het tegen hun leidinggevende, vóór de dienst begint.', best: true, feedback: 'Goed. Zo voorkomt hij een ongeval.' },
              { id: 'b', text: 'Hij zegt niets. Het is niet zijn probleem.', best: false, feedback: 'Dat snap ik. Maar op de heftruck kan zijn collega iemand raken.' },
              { id: 'c', text: 'Hij geeft zijn collega sterke koffie. Dan gaat het wel weer.', best: false, feedback: 'Koffie helpt niet. Alleen tijd haalt alcohol uit je bloed.' },
            ],
            why: 'Alcohol maakt je trager en minder voorzichtig. Op een heftruck of bij een machine is dat heel gevaarlijk. Zeg het tegen je leidinggevende. Zo voorkom je een ongeval. Koffie of een douche helpt niet.',
          },
          // ⚖️ check: het lichaam breekt ongeveer 1 standaardglas af in 1 tot 1,5 uur; sneller kan niet (test-aankoop.be "wat gebeurt er in je lichaam als je drinkt"; druglijn.be via zoekresultaat)
          {
            kind: 'truefalse',
            id: 'r.be.l.veilig.5.tf1',
            statement: 'Na een nacht slapen is alle alcohol weer uit je bloed.',
            answer: false,
            why: 'Je lichaam haalt alcohol maar langzaam uit je bloed. Ongeveer 1 glas in 1 tot 1,5 uur. Heb je veel gedronken? Dan heb je de volgende ochtend vaak nog alcohol in je bloed.',
          },
          // ⚖️ check: of een medicijn slaperig maakt, staat in de bijsluiter; de apotheker geeft advies (FAGG, bijsluiter)
          {
            kind: 'truefalse',
            id: 'r.be.l.veilig.5.tf2',
            statement: 'Ook een medicijn kan je suf maken op je werk.',
            answer: true,
            why: 'Sommige medicijnen maken je slaperig. Dat staat in de bijsluiter: het papier in de doos. Vraag de apotheker of je ermee kunt werken. Moet je rijden of met machines werken? Zeg dan dat je dat werk even niet kunt.',
          },
          // ⚖️ check: wat je de huisarts zegt, blijft geheim (Strafwetboek art. 458)
          // ⚖️ check: ook de arbeidsarts vertelt de werkgever niets over je gezondheid, alleen welk werk je kunt doen (codex boek I titel 4)
          {
            kind: 'whoask',
            id: 'r.be.l.veilig.5.wa1',
            question: 'Je drinkt veel, of je gebruikt vaak drugs. Je wilt stoppen, maar het lukt niet. Wie vraag je om hulp?',
            options: [
              { id: 'a', who: 'leidinggevende', best: false, feedback: 'Dat mag, maar het hoeft niet. Je huisarts helpt je verder.' },
              { id: 'b', who: 'huisarts', best: true, feedback: 'Goed. De huisarts helpt je, en vertelt het aan niemand.' },
              { id: 'c', who: 'arbeidsarts', best: false, feedback: 'De arbeidsarts kan meedenken. Maar voor hulp bij stoppen is je huisarts de eerste.' },
            ],
            why: 'Je huisarts helpt je, of stuurt je door naar hulp bij verslaving. Wat je zegt, blijft geheim. Ook de arbeidsarts vertelt je baas niets over je gezondheid.',
          },
          { kind: 'model', id: 'r.be.l.veilig.5.mo1', context: 'Een collega ruikt naar alcohol en moet zo op de heftruck.', nl: 'Ik maak me zorgen. Mijn collega ruikt naar alcohol.' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.veilig.1.mo1': [
      { text: 'Mijn handschoenen zijn kapot. Ik werk wel zonder.', feedback: 'Zonder bescherming werken is gevaarlijk. Vraag nieuwe.' },
      { text: 'Die handschoenen zijn slecht. Ik koop zelf wel nieuwe.', feedback: 'Je werkgever moet ze gratis geven. Vraag erom.' },
    ],
    'r.be.l.veilig.2.mo1': [
      { text: 'Ach, het gaat vast wel goed.', feedback: 'Bij gevaar wacht je niet af. Zeg duidelijk stop.' },
      { text: 'Is dit wel helemaal oké?', feedback: 'Dat klinkt niet zeker. Bij gevaar zeg je stop.' },
    ],
    'r.be.l.veilig.3.mo1': [
      { text: 'Ik ben gevallen. Maar het is niet erg, hoor.', feedback: 'Ook een klein ongeval meld je. Zeg dat je het wilt melden.' },
      { text: 'Ik viel net. Niemand hoeft het te weten.', feedback: 'Melden is belangrijk. Soms krijg je later pas klachten.' },
    ],
    'r.be.l.veilig.4.mo1': [
      { text: 'Ik ben moe. Maar ik werk gewoon door, hoor.', feedback: 'Moe werken is gevaarlijk. Vraag om ander werk.' },
      { text: 'Ik ben moe. Mag ik vandaag naar huis?', feedback: 'Dat kan te veel zijn. Vraag eerst om ander werk.' },
    ],
    'r.be.l.veilig.5.mo1': [
      { text: 'Mijn collega is dronken. Hij is een slechte werker.', feedback: 'Dat klinkt hard. Zeg dat je je zorgen maakt.' },
      { text: 'Er is niets aan de hand. Hij is gewoon moe.', feedback: 'Je ruikt alcohol. Dat zeg je beter tegen je baas.' },
    ],
  },
  advice: {
    'r.be.l.veilig.1.ru1': 'advice',
    'r.be.l.veilig.2.ru1': 'advice',
    'r.be.l.veilig.3.ru1': 'advice',
    'r.be.l.veilig.4.ru1': 'advice',
    'r.be.l.veilig.5.ru1': 'advice',
  },
};
