import type { RuleUnit } from '../types';

/**
 * Unit 7 · Veilig en gezond werken (les 7.1–7.5; 7.4 en 7.5 uit deel 7 van het curriculum).
 * Converted from docs/werkregels-curriculum.md; edit the curriculum first, then this file.
 * `// ⚖️ check:` marks a fact the expert must check (docs/werkregels-bronnen.md). The marker is
 * never shown or read aloud. `// Redactie:` notes are for the makers only.
 */
export const veiligUnit: RuleUnit = {
  id: 'r.veilig',
  title: 'Veilig en gezond werken',
  emoji: '⛑️',
  color: '#e0a800',
  lessons: [
    {
      // Les 7.1 · Beschermende spullen en uitleg
      id: 'r.l.veilig.1',
      title: 'Beschermende spullen en uitleg',
      goal: 'Je weet dat je werkgever gratis bescherming en uitleg geeft. Je weet dat je erom mag vragen.',
      // ⚖️ check: Beschermende spullen krijg je gratis van je werkgever ⚖️.
      remember: 'Beschermende spullen krijg je gratis van je werkgever.',
      // Wie kan je helpen: je uitvoerder of leidinggevende · de preventiemedewerker (de collega die
      //   op veiligheid let) · de Nederlandse Arbeidsinspectie.
      help: ['leidinggevende', 'arbeidsinspectie'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.veilig.1.sc1',
          picture: 'Piotr op een bouwplaats met helm. Zijn handschoenen hebben gaten. Een zaag ligt klaar.',
          lines: [
            'Piotr werkt op een bouwplaats.',
            'Zijn handschoenen zijn kapot.',
            'Zijn veiligheidsbril is zoek.',
            'Hij moet zo gaan zagen.',
          ],
        },
        // ⚖️ check: Beschermende spullen krijg je gratis van je werkgever ⚖️.
        // ⚖️ check: Je werkgever geeft beschermende spullen gratis ⚖️.
        // ⚖️ check: Je hebt ook recht op uitleg over veilig werken ⚖️.
        {
          kind: 'rule',
          id: 'r.l.veilig.1.ru1',
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
        // ⚖️ check: Je werkgever moet beschermende spullen gratis geven ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.veilig.1.wd1',
          situation: 'Piotr moet zo zagen, zonder goede spullen. Wat kan Piotr het beste doen?',
          options: [
            { id: 'a', text: 'Hij zaagt even zonder bril. Het duurt maar kort.', best: false, feedback: 'Een splinter in zijn oog gaat heel snel.' },
            { id: 'b', text: 'Hij vraagt nieuwe spullen aan zijn uitvoerder.', best: true, feedback: 'Goed. De uitvoerder is de baas op de bouwplaats. Die regelt dit.' },
            { id: 'c', text: 'Hij koopt na het werk zelf nieuwe spullen.', best: false, feedback: 'Goed bedoeld. Maar zijn werkgever moet ze geven.' },
          ],
          why: 'Je werkgever moet beschermende spullen gratis geven. Denk aan handschoenen, een bril of veiligheidsschoenen. Erom vragen is normaal. Zonder bescherming werken is gevaarlijk.',
        },
        // ⚖️ check: Je hebt recht op uitleg over de gevaren ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.veilig.1.tf1',
          statement: 'Je werkgever moet je uitleggen hoe je veilig werkt.',
          answer: true,
          why: 'Je hebt recht op uitleg over de gevaren. En over hoe je veilig werkt. Ook als je nieuw bent of uitzendkracht. Snap je het niet? Vraag het nog een keer.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.veilig.1.wd2',
          situation: 'Op de bouw is vaak een korte vergadering over veiligheid: de toolboxmeeting. Piotr vindt het saai. Wat kan Piotr het beste doen?',
          options: [
            { id: 'a', text: 'Hij blijft weg. Hij weet het meeste toch al.', best: false, feedback: 'Er kan nieuws zijn. En het hoort bij zijn werk.' },
            { id: 'b', text: 'Hij gaat, maar hij zit op zijn telefoon.', best: false, feedback: 'Dan hoort hij niet wat er nieuw is.' },
            { id: 'c', text: 'Hij gaat erheen, luistert en stelt een vraag.', best: true, feedback: 'Goed. Zo hoort hij wat er nieuw is.' },
          ],
          why: 'In de toolboxmeeting hoor je over gevaren en nieuwe regels. Je kunt ook zelf iets melden. Het is werktijd.',
        },
        {
          kind: 'whoask',
          id: 'r.l.veilig.1.wa1',
          question: 'Je handschoenen zijn kapot. Bij wie vraag je nieuwe?',
          options: [
            { id: 'a', who: 'leidinggevende', best: true, feedback: 'Goed. Je uitvoerder of leidinggevende regelt nieuwe spullen.' },
            { id: 'b', who: 'collega', best: false, feedback: 'Een collega kan je helpen zoeken. Maar je werk moet ze geven.' },
            { id: 'c', who: 'arbeidsinspectie', best: false, feedback: 'Pas als je werkgever niets doet. Vraag het eerst zelf.' },
          ],
          why: 'Vraag nieuwe spullen aan je uitvoerder of leidinggevende. Je krijgt ze gratis.',
        },
        { kind: 'model', id: 'r.l.veilig.1.mo1', context: 'Je beschermende spullen zijn kapot.', nl: 'Mijn handschoenen zijn kapot. Waar krijg ik nieuwe?' },
      ],
    },
    {
      // Les 7.2 · Onveilig? Zeg het en stop
      id: 'r.l.veilig.2',
      title: 'Onveilig? Zeg het en stop',
      goal: 'Je meldt gevaar en bijna-ongelukken. Je weet dat je mag stoppen bij groot gevaar.',
      remember: 'Onveilig? Zeg het meteen. Bij groot gevaar mag je stoppen.',
      // Wie kan je helpen: je leidinggevende · de preventiemedewerker · de ondernemingsraad · de
      //   Nederlandse Arbeidsinspectie (nlarbeidsinspectie.nl) · bij direct gevaar: 112.
      help: ['leidinggevende', 'arbeidsinspectie'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.veilig.2.sc1',
          picture: 'Kevin in een distributiecentrum. Een stapel pallets staat scheef. Een heftruck rijdt langs.',
          lines: [
            'Kevin werkt in een distributiecentrum.',
            'Een stapel pallets staat scheef.',
            'Er valt bijna een doos op een collega.',
            'Er gebeurt niets.',
            'Iedereen werkt gewoon door.',
          ],
        },
        // ⚖️ check: Is er ernstig en direct gevaar? Dan mag je het werk stoppen ⚖️.
        // ⚖️ check: Je werkgever mag je daar niet voor straffen ⚖️.
        {
          kind: 'rule',
          id: 'r.l.veilig.2.ru1',
          emoji: '🛑',
          title: 'Onveilig? Zeg het meteen. Bij groot gevaar mag je stoppen.',
          body: [
            'Meld gevaar en bijna-ongelukken meteen.',
            'Is er ernstig en direct gevaar? Dan mag je het werk stoppen.',
            'Je werkgever mag je daar niet voor straffen.',
            'Helpt melden niet? Ga naar de Nederlandse Arbeidsinspectie.',
          ],
          rule: 'geschreven',
          key: true,
        },
        {
          kind: 'whatdo',
          id: 'r.l.veilig.2.wd1',
          situation: 'Er is niemand gewond. Wat kan Kevin het beste doen?',
          options: [
            { id: 'a', text: 'Niets. Er is toch niemand gewond geraakt.', best: false, feedback: 'Gelukkig niet. Maar de volgende keer misschien wel.' },
            { id: 'b', text: 'Hij zet de doos zelf recht, en zegt het niemand.', best: false, feedback: 'Goed dat hij helpt. Maar zo leert niemand ervan.' },
            { id: 'c', text: "Hij waarschuwt de collega's en meldt het bij de leiding.", best: true, feedback: 'Goed. Zo voorkomt hij een echt ongeluk.' },
          ],
          why: 'Een bijna-ongeluk is een waarschuwing. Melden helpt om een echt ongeluk te voorkomen. Ook kleine dingen mag je melden.',
        },
        // ⚖️ check: Is er ernstig en direct gevaar? Dan mag je het werk stoppen ⚖️.
        // ⚖️ check: Je werkgever mag je daar niet voor straffen ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.veilig.2.tf1',
          statement: 'Bij groot gevaar mag je stoppen met werken.',
          answer: true,
          why: 'Is er ernstig en direct gevaar? Dan mag je het werk stoppen. Zeg het meteen tegen je leidinggevende. Je werkgever mag je daar niet voor straffen.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.veilig.2.wd2',
          situation: 'Kevin heeft het gemeld. Weken later is het nog steeds onveilig. Wat kan Kevin het beste doen?',
          options: [
            { id: 'a', text: 'Hij meldt het bij de Arbeidsinspectie.', best: true, feedback: 'Goed. Daar is de Arbeidsinspectie voor.' },
            { id: 'b', text: 'Hij zet een filmpje van het magazijn online.', best: false, feedback: 'Dat snap ik, maar dat kan hem problemen geven.' },
            { id: 'c', text: 'Hij stopt met melden. Het helpt toch niet.', best: false, feedback: 'Jammer. Er is nog een plek waar hij heen kan.' },
          ],
          why: 'Helpt melden binnen het bedrijf niet? Dan kun je naar de Nederlandse Arbeidsinspectie. Dat mag ook zonder je naam. Een filmpje online kan juist problemen geven, ook voor jou.',
        },
        {
          kind: 'whoask',
          id: 'r.l.veilig.2.wa1',
          question: 'Een stapel pallets staat scheef. Aan wie zeg je het meteen?',
          options: [
            { id: 'a', who: 'hr', best: false, feedback: 'HR is vaak niet op de werkvloer. Dit moet snel.' },
            { id: 'b', who: 'vakbond', best: false, feedback: 'Een vakbond helpt bij je rechten. Dit gevaar moet nu weg.' },
            { id: 'c', who: 'leidinggevende', best: true, feedback: 'Goed. Je leidinggevende kan het meteen laten oplossen.' },
          ],
          why: 'Zeg gevaar meteen tegen je leidinggevende. Bij direct gevaar voor mensen: bel 112.',
        },
        { kind: 'model', id: 'r.l.veilig.2.mo1', context: 'Je ziet direct gevaar.', nl: 'Stop! Dit is niet veilig.' },
      ],
    },
    {
      // Les 7.3 · Een ongeluk, of te veel stress
      id: 'r.l.veilig.3',
      title: 'Een ongeluk, of te veel stress',
      goal: 'Je meldt elk ongeluk. Je praat erover als het werk te zwaar wordt.',
      remember: 'Meld elk ongeluk, ook een klein ongeluk.',
      // Wie kan je helpen: bij spoed: 112 · de BHV'er of EHBO'er op je werk · je leidinggevende ·
      //   de bedrijfsarts · een vakbond of het Juridisch Loket (bij schade).
      help: ['leidinggevende', 'bedrijfsarts', 'vakbond', 'juridischloket'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.veilig.3.sc1',
          picture: 'Dewi in haar auto voor een huis. Op haar telefoon een lange lijst met adressen.',
          lines: [
            'Dewi werkt in de thuiszorg.',
            'Ze heeft elke dag te weinig tijd voor haar cliënten.',
            'Ze slaapt slecht.',
            'Ze is vaak gespannen.',
            'Ze denkt: "Dat hoort er nu eenmaal bij."',
          ],
        },
        // ⚖️ check: Bij een ernstig ongeluk meldt je werkgever het bij de Arbeidsinspectie ⚖️.
        {
          kind: 'rule',
          id: 'r.l.veilig.3.ru1',
          emoji: '🚑',
          title: 'Meld elk ongeluk, ook een klein ongeluk.',
          body: [
            'Meld elk ongeluk, ook als het klein lijkt.',
            'Schrijf op wat er gebeurde, wanneer, en wie het zag.',
            'Bij een ernstig ongeluk meldt je werkgever het bij de Arbeidsinspectie.',
            'Te veel werkdruk? Praat erover voordat je ziek wordt.',
          ],
          rule: 'geschreven',
        },
        // ⚖️ check: Je werkgever moet daar iets aan doen ⚖️.
        // ⚖️ check: Je mag ook zelf naar de bedrijfsarts ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.veilig.3.wd1',
          situation: 'Dewi merkt dat het te veel wordt. Wat kan Dewi het beste doen?',
          options: [
            { id: 'a', text: 'Ze zegt niets. In de zorg heeft iedereen het druk.', best: false, feedback: 'Dat snap ik. Maar zo kan ze ziek worden.' },
            { id: 'b', text: 'Ze praat erover met haar leidinggevende of de bedrijfsarts.', best: true, feedback: 'Goed. Dan kan er samen iets veranderen.' },
            { id: 'c', text: 'Ze werkt sneller, dan is ze eerder klaar.', best: false, feedback: 'Haast geeft fouten en meer stress.' },
          ],
          why: 'Te veel werkdruk maakt mensen ziek. Je werkgever moet daar iets aan doen. Praat erover voordat je ziek wordt. Je mag ook zelf naar de bedrijfsarts.',
        },
        // ⚖️ check: Bij een ernstig ongeluk meldt je werkgever het meteen bij de Arbeidsinspectie
        //   ⚖️.
        // ⚖️ check: Bijvoorbeeld als iemand in het ziekenhuis moet blijven, blijvend letsel heeft of
        //   overlijdt ⚖️ (art. 9 Arbowet: ernstig letsel = blijvend letsel of opname in het
        //   ziekenhuis; was eerder: "naar het ziekenhuis moet").
        {
          kind: 'truefalse',
          id: 'r.l.veilig.3.tf1',
          statement: 'Een ernstig ongeluk op het werk moet je werkgever melden.',
          answer: true,
          why: 'Bij een ernstig ongeluk meldt je werkgever het meteen bij de Arbeidsinspectie. Bijvoorbeeld als iemand in het ziekenhuis moet blijven, blijvend letsel heeft of overlijdt.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.veilig.3.wd2',
          situation: 'Fatima glijdt uit op een natte vloer. Ze bezeert haar pols. Het lijkt niet erg. Wat kan Fatima het beste doen?',
          options: [
            { id: 'a', text: 'Ze meldt het toch, en schrijft op wat er gebeurde.', best: true, feedback: 'Goed. Soms krijg je later pas klachten.' },
            { id: 'b', text: 'Ze zegt niets. Ze wil niet lastig zijn.', best: false, feedback: 'Melden is niet lastig. Het hoort erbij.' },
            { id: 'c', text: 'Ze werkt door, en ze kijkt morgen hoe het gaat.', best: false, feedback: 'Kan, maar ze moet het wel vandaag melden.' },
          ],
          why: 'Meld elk ongeluk, ook als het klein lijkt. Schrijf op wat er gebeurde, wanneer, en wie het zag. Maak een foto van de plek. Dan heb je bewijs als je later klachten krijgt.',
        },
        // De BHV in Werkregels (rapport hiaten, hoofdstuk 4): in Taal staat de BHV'er al (l.accident).
        // ⚖️ check: Elk bedrijf moet daarvoor zorgen ⚖️ (bedrijfshulpverlening, art. 3 lid 1 onder e
        //   en art. 15 Arbowet).
        {
          kind: 'whatdo',
          id: 'r.l.veilig.3.wd3',
          situation: 'Piotr ziet een collega van een trap vallen. De collega ligt op de grond. Wat kan Piotr het beste doen?',
          options: [
            { id: 'a', text: "Hij roept de BHV'er. Is het ernstig? Dan belt hij 112.", best: true, feedback: 'Goed. Zo komt er snel hulp.' },
            { id: 'b', text: 'Hij helpt de collega meteen overeind.', best: false, feedback: 'Liever niet meteen. Bewegen kan letsel erger maken.' },
            { id: 'c', text: 'Hij zoekt eerst zijn leidinggevende, op een andere afdeling.', best: false, feedback: 'Dat kost tijd. Eerst hulp, daarna melden.' },
          ],
          why: "Een BHV'er is een collega die eerste hulp geeft bij een ongeluk of brand. Elk bedrijf moet daarvoor zorgen. Vraag op je eerste dag wie de BHV'er is. Is het ernstig? Bel dan meteen 112.",
        },
        {
          kind: 'whoask',
          id: 'r.l.veilig.3.wa1',
          question: 'Je werk maakt je moe en gespannen. Met wie praat je over je gezondheid op het werk?',
          options: [
            { id: 'a', who: 'uwv', best: false, feedback: 'UWV gaat over uitkeringen. Praat eerst op je werk.' },
            { id: 'b', who: 'bedrijfsarts', best: true, feedback: 'Goed. De bedrijfsarts helpt, en je mag er zelf heen.' },
            { id: 'c', who: 'juridischloket', best: false, feedback: 'Het Juridisch Loket helpt bij schade. Niet bij je gezondheid.' },
          ],
          why: 'Je mag zelf naar de bedrijfsarts. Je kunt ook met je leidinggevende praten.',
        },
        { kind: 'model', id: 'r.l.veilig.3.mo1', context: 'Je hebt een ongeluk gehad op je werk.', nl: 'Ik ben gevallen. Ik wil dat graag melden.' },
      ],
    },
    {
      // Les 7.4 · Fit voor je werk: slapen, eten, bewegen (Entree, vitaal burgerschap; 30 oktober
      //   2026, docs/werkregels-curriculum.md deel 7)
      id: 'r.l.veilig.4',
      title: 'Fit voor je werk: slapen, eten, bewegen',
      goal: 'Je weet waarom slaap, eten en pauzes belangrijk zijn. Je zegt het als je te moe bent.',
      remember: 'Te moe om veilig te werken? Zeg het, vóór je begint.',
      // Wie kan je helpen: je leidinggevende · de bedrijfsarts (open spreekuur) · je huisarts (bij
      //   slecht slapen of somberheid).
      help: ['leidinggevende', 'bedrijfsarts', 'huisarts'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.veilig.4.sc1',
          picture: 'Kevin om 7 uur in de ochtend bij de ingang van een distributiecentrum. In zijn hand een blikje energiedrank.',
          lines: [
            'Kevin begint om 7 uur in een distributiecentrum.',
            "Hij zat gisteren tot 2 uur 's nachts op zijn telefoon.",
            'Ontbijt slaat hij over. Hij drinkt een blikje energiedrank.',
            'Om 10 uur kan hij bijna niet meer opletten.',
          ],
        },
        // ⚖️ check: Tussen 2 diensten zit meestal minstens 11 uur ⚖️ (Arbeidstijdenwet art. 5:3: 11
        //   uur, 1 keer per 7 dagen in te korten tot 8 uur; zie ook r.l.factory.2).
        // ⚖️ check: Te moe om veilig te werken? Zeg het ⚖️ (Arbowet art. 11: de werknemer brengt
        //   zichzelf en anderen niet in gevaar).
        {
          kind: 'rule',
          id: 'r.l.veilig.4.ru1',
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
          id: 'r.l.veilig.4.wd1',
          situation: 'Kevin kan bijna niet meer opletten. Hij moet zo een zware kar rijden. Wat kan Kevin het beste doen?',
          options: [
            { id: 'a', text: 'Hij drinkt nog een blikje energiedrank. Dan gaat het wel.', best: false, feedback: 'Dat helpt maar kort. Daarna is hij vaak nog moeier.' },
            { id: 'b', text: 'Hij zegt tegen zijn leidinggevende dat hij te moe is.', best: true, feedback: 'Goed. Dan kan zijn leidinggevende hem ander werk geven.' },
            { id: 'c', text: 'Hij zegt niets, en hij werkt gewoon wat langzamer.', best: false, feedback: 'Dat snap ik. Maar moe zijn geeft snel fouten en ongelukken.' },
          ],
          why: 'Moe zijn is gevaarlijk op je werk. Je let minder goed op. Dan gebeurt er sneller een ongeluk. Zeg het als je te moe bent om veilig te werken. Energiedrank helpt maar kort.',
        },
        // ⚖️ check: Tussen 2 diensten zit meestal minstens 11 uur ⚖️ (Arbeidstijdenwet art. 5:3).
        // ⚖️ check: Volwassenen hebben meestal 7 tot 9 uur slaap nodig ⚖️ (Gezondheidsraad /
        //   Hersenstichting; geen wet).
        {
          kind: 'truefalse',
          id: 'r.l.veilig.4.tf1',
          statement: 'Tussen 2 diensten zit meestal minstens 11 uur.',
          answer: true,
          why: 'Dat staat in de wet. Soms mag het korter, maar niet vaak. Kijk ook in je cao. Gebruik die tijd ook echt om te slapen. Volwassenen hebben meestal 7 tot 9 uur slaap nodig.',
        },
        // ⚖️ check: Je mag ook zelf naar de bedrijfsarts ⚖️ (Arbowet art. 14 lid 1 onder c: het open
        //   spreekuur).
        {
          kind: 'whatdo',
          id: 'r.l.veilig.4.wd2',
          situation: 'Mohammed staat de hele dag aan een lopende band. Aan het eind van de dag heeft hij pijn in zijn rug. Wat kan Mohammed het beste doen?',
          options: [
            { id: 'a', text: 'Hij beweegt in zijn pauze, en hij meldt de pijn.', best: true, feedback: 'Goed. Bewegen helpt. En melden kan erger voorkomen.' },
            { id: 'b', text: 'Hij neemt elke dag een pijnstiller, en werkt door.', best: false, feedback: 'Dat snap ik. Maar dan blijft het probleem.' },
            { id: 'c', text: 'Hij blijft in de pauze zitten. Dan rust zijn rug.', best: false, feedback: 'Rust helpt even. Maar bewegen is vaak beter voor je rug.' },
          ],
          why: 'Lang stilstaan of zitten is zwaar voor je lichaam. Beweeg even in je pauze. Loop een rondje, of rek je uit. Blijft de pijn? Meld het bij je leidinggevende. Je mag ook zelf naar de bedrijfsarts.',
        },
        { kind: 'model', id: 'r.l.veilig.4.mo1', context: 'Je bent te moe om veilig te werken.', nl: 'Ik ben vandaag erg moe. Kan ik ander werk doen?' },
      ],
    },
    {
      // Les 7.5 · Alcohol, drugs en je werk (Entree, vitaal burgerschap; 30 oktober 2026)
      id: 'r.l.veilig.5',
      title: 'Alcohol, drugs en je werk',
      goal: 'Je werkt nooit onder invloed. Je weet waar je hulp krijgt.',
      remember: 'Gedronken of drugs gebruikt? Dan werk je niet.',
      // Wie kan je helpen: je huisarts (verwijst door naar hulp bij verslaving) · de bedrijfsarts ·
      //   je leidinggevende (als een collega onder invloed is) · de apotheek (over medicijnen).
      help: ['huisarts', 'bedrijfsarts', 'leidinggevende'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.veilig.5.sc1',
          picture: 'Piotr in een fabriekshal bij een heftruck. Naast hem een collega met een rood hoofd.',
          lines: [
            'Piotr werkt in een fabriek.',
            'Zijn collega komt binnen voor de vroege dienst.',
            'Hij ruikt naar alcohol. Hij zegt: "Gisteren was het feest."',
            'Over 10 minuten moet hij op de heftruck.',
          ],
        },
        // ⚖️ check: Op het werk heeft je baas vaak strenge regels over alcohol en drugs ⚖️ (een
        //   alcohol- en drugsbeleid in het bedrijfsreglement of de cao; Arbowet art. 3 en 11).
        // ⚖️ check: Kijk of er een gele sticker op de doos zit ⚖️ (de apotheek plakt een gele sticker
        //   "Kan de rijvaardigheid beïnvloeden" op zulke medicijnen; KNMP).
        // ⚖️ check: Praat met je huisarts. Dat blijft geheim ⚖️ (beroepsgeheim, art. 7:457 BW).
        {
          kind: 'rule',
          id: 'r.l.veilig.5.ru1',
          emoji: '🚫',
          title: 'Gedronken of drugs gebruikt? Dan werk je niet.',
          body: [
            'Werk nooit onder invloed van alcohol of drugs.',
            'Op het werk heeft je baas vaak strenge regels over alcohol en drugs.',
            'Ook sommige medicijnen maken je suf. Kijk of er een gele sticker op de doos zit.',
            'Lukt stoppen niet? Praat met je huisarts. Dat blijft geheim.',
          ],
          rule: 'geschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.veilig.5.wd1',
          situation: 'Piotr ruikt de alcohol. Wat kan Piotr het beste doen?',
          options: [
            { id: 'a', text: 'Hij zegt het tegen hun leidinggevende, vóór de dienst begint.', best: true, feedback: 'Goed. Zo voorkomt hij een ongeluk.' },
            { id: 'b', text: 'Hij zegt niets. Het is niet zijn probleem.', best: false, feedback: 'Dat snap ik. Maar op de heftruck kan zijn collega iemand raken.' },
            { id: 'c', text: 'Hij geeft zijn collega sterke koffie. Dan gaat het wel weer.', best: false, feedback: 'Koffie helpt niet. Alleen tijd haalt alcohol uit je bloed.' },
          ],
          why: 'Alcohol maakt je trager en minder voorzichtig. Op een heftruck of bij een machine is dat heel gevaarlijk. Zeg het tegen je leidinggevende. Zo voorkom je een ongeluk. Koffie of een douche helpt niet.',
        },
        // ⚖️ check: Ongeveer 1 glas in 1 tot 1,5 uur ⚖️ (Trimbos-instituut, afbraak van alcohol).
        {
          kind: 'truefalse',
          id: 'r.l.veilig.5.tf1',
          statement: 'Na een nacht slapen is alle alcohol weer uit je bloed.',
          answer: false,
          why: 'Je lichaam haalt alcohol maar langzaam uit je bloed. Ongeveer 1 glas in 1 tot 1,5 uur. Heb je veel gedronken? Dan heb je de volgende ochtend vaak nog alcohol in je bloed.',
        },
        // ⚖️ check: Op de doos zit dan vaak een gele sticker ⚖️ (KNMP).
        {
          kind: 'truefalse',
          id: 'r.l.veilig.5.tf2',
          statement: 'Ook een medicijn kan je suf maken op je werk.',
          answer: true,
          why: 'Sommige medicijnen maken je slaperig. Op de doos zit dan vaak een gele sticker. Vraag de apotheek of je ermee kunt werken. Moet je rijden of met machines werken? Zeg dan dat je dat werk even niet kunt.',
        },
        // ⚖️ check: Wat je zegt, blijft geheim ⚖️ (beroepsgeheim huisarts, art. 7:457 BW).
        // ⚖️ check: Ook de bedrijfsarts vertelt je baas niets over je gezondheid ⚖️ (beroepsgeheim;
        //   AVG art. 9: de werkgever hoort alleen wat je wel en niet kunt).
        {
          kind: 'whoask',
          id: 'r.l.veilig.5.wa1',
          question: 'Je drinkt veel, of je gebruikt vaak drugs. Je wilt stoppen, maar het lukt niet. Wie vraag je om hulp?',
          options: [
            { id: 'a', who: 'leidinggevende', best: false, feedback: 'Dat mag, maar het hoeft niet. Je huisarts helpt je verder.' },
            { id: 'b', who: 'huisarts', best: true, feedback: 'Goed. De huisarts helpt je, en vertelt het aan niemand.' },
            { id: 'c', who: 'bedrijfsarts', best: false, feedback: 'De bedrijfsarts kan meedenken. Maar voor hulp bij stoppen is je huisarts de eerste.' },
          ],
          why: 'Je huisarts helpt je, of stuurt je door naar hulp bij verslaving. Wat je zegt, blijft geheim. Ook de bedrijfsarts vertelt je baas niets over je gezondheid.',
        },
        { kind: 'model', id: 'r.l.veilig.5.mo1', context: 'Een collega ruikt naar alcohol en moet zo op de heftruck.', nl: 'Ik maak me zorgen. Mijn collega ruikt naar alcohol.' },
      ],
    },
  ],
};
