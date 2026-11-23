import type { BeUnit } from '../types';

/**
 * Sector groen (België) · Werken in het groen: de Belgische versie van de sectorunit r.groen
 * (src/content/regels/units/sector2.ts, `groenUnit`). Dezelfde regels; anders zijn KLIP in plaats
 * van KLIC, de signalisatie van werken op de weg, de bescherming van nesten (Soortenbesluit) en de
 * hulp. Vlaamse woorden: groendienst, tuinaannemer, fluohesje, kegels, KLIP, huisartsenwachtpost.
 * Een tuinaannemer valt meestal onder paritair comité 145 (tuinbouw); een gemeentelijke groendienst
 * is openbare sector (geen paritair comité). Dat staat niet in de les.
 *
 * `// ⚖️ check:` = een feit dat de deskundige nakijkt, met de bron. Opgezocht op 23 nov 2026 uit
 * kennis van de regels; werk.belgie.be, klip.vlaanderen.be en natuurenbos.be zijn niet geopend.
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.groen',
    title: 'Werken in het groen',
    emoji: '🌳',
    color: '#3f7d3a',
    lessons: [
      {
        // Les G.1 · Machines en de weg
        id: 'r.be.l.groen.1',
        title: 'Machines en de weg',
        goal: 'Je werkt veilig met de bosmaaier. Langs de weg draag je altijd je fluohesje.',
        remember: 'Maaien of zagen? Draag je beschermende spullen, en houd mensen op afstand.',
        // Wie kan je helpen: je leidinggevende of ploegbaas · een ervaren collega · de
        //   preventieadviseur · Toezicht op het Welzijn op het Werk.
        help: ['leidinggevende', 'collega'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.groen.1.sc1',
            picture: 'Malik met een bosmaaier in een park. Op het fietspad komt een vrouw met een kinderwagen aan.',
            lines: [
              'Malik werkt bij de groendienst van een gemeente.',
              'Hij maait het gras langs een fietspad.',
              'Met de bosmaaier gaat het snel.',
              'Er komt een vrouw met een kinderwagen aan.',
            ],
          },
          // ⚖️ check: je werkgever geeft persoonlijke beschermingsmiddelen gratis (Codex welzijn op het werk, boek IX, titel 2: PBM kosteloos ter beschikking; Wet welzijn 4 augustus 1996)
          // ⚖️ check: met een kettingzaag werk je alleen na een opleiding (Codex boek IV, titel 2: arbeidsmiddelen met specifieke risico's alleen door werknemers met een passende opleiding; niet geopend 23 nov 2026)
          {
            kind: 'rule',
            id: 'r.be.l.groen.1.ru1',
            emoji: '⛑️',
            title: 'Maaien of zagen? Draag je beschermende spullen, en houd mensen op afstand.',
            body: [
              'Een bosmaaier kan stenen ver en hard wegschieten.',
              'Draag een gelaatsscherm of bril, gehoorbescherming en veiligheidsschoenen.',
              'Je werkgever geeft deze spullen gratis.',
              'Komt er iemand dichtbij? Stop dan de machine.',
              'Met een kettingzaag werk je alleen als je een opleiding hebt gehad.',
            ],
            rule: 'geschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.groen.1.wd1',
            situation: 'De vrouw met de kinderwagen komt dichtbij. Wat kan Malik het beste doen?',
            options: [
              { id: 'a', text: 'Hij maait door, maar een beetje trager.', best: false, feedback: 'Dat snap ik. Maar een steen kan toch ver vliegen.' },
              { id: 'b', text: 'Hij stopt de machine tot de vrouw voorbij is.', best: true, feedback: 'Goed. Zo raakt er niemand gewond.' },
              { id: 'c', text: 'Hij draait zich om, en maait de andere kant op.', best: false, feedback: 'Goed bedoeld. Maar stenen vliegen alle kanten op.' },
            ],
            why: 'Een steen uit de bosmaaier kan iemand zwaar verwonden. Komt er iemand dichtbij? Stop de machine. Loop het gras eerst na, en haal stenen, glas en takken weg.',
          },
          // ⚖️ check: werken met een kettingzaag alleen na een opleiding; zaagbroek, helm met gelaatsscherm en handschoenen; niet alleen werken (Codex boek IV en boek IX; de risicoanalyse van de werkgever; niet geopend 23 nov 2026)
          {
            kind: 'truefalse',
            id: 'r.be.l.groen.1.tf1',
            statement: 'Zonder opleiding mag je even met de kettingzaag werken, als een collega kijkt.',
            answer: false,
            why: 'Een kettingzaag is heel gevaarlijk. Werk er alleen mee als je een opleiding hebt gehad, en als het mag. Draag een zaagbroek, een helm met scherm en handschoenen. Werk nooit alleen met een kettingzaag.',
          },
          // ⚖️ check: werken op of langs de openbare weg: signalisatie volgens de regels van de wegbeheerder en een fluohesje (MB 7 mei 1999 signalisatie van werken en verkeersbelemmeringen op de openbare weg; Codex boek IX: kledij met hoge zichtbaarheid; niet geopend)
          {
            kind: 'whatdo',
            id: 'r.be.l.groen.1.wd2',
            situation: 'Malik moet één struik snoeien langs de weg. Het is maar 5 minuten werk. Wat kan Malik het beste doen?',
            options: [
              { id: 'a', text: 'Hij doet het snel zonder kegels. Het is maar 5 minuten.', best: false, feedback: 'Dat snap ik. Maar een ongeval gebeurt in een seconde.' },
              { id: 'b', text: 'Hij vraagt een collega om naar de auto’s te kijken.', best: false, feedback: 'Goed bedoeld. Maar zonder kegels zien auto’s jullie niet op tijd.' },
              { id: 'c', text: 'Hij zet eerst kegels, en doet zijn fluohesje aan.', best: true, feedback: 'Goed. Zo zien de auto’s hem op tijd.' },
            ],
            why: 'Werk langs de weg is gevaarlijk. Draag je fluohesje en zet de kegels, ook voor kort werk. Blijf achter de kegels. Zet de bestelwagen tussen jou en het verkeer, als dat kan.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.groen.1.wa1',
            question: 'Je moet met de kettingzaag werken. Je hebt nog geen opleiding gehad. Tegen wie zeg je het?',
            options: [
              { id: 'a', who: 'collega', best: false, feedback: 'Een collega kan het je niet goed leren. Zeg het tegen je leidinggevende.' },
              { id: 'b', who: 'tsw', best: false, feedback: 'Die controleren loon en uren. Zeg het eerst op je werk.' },
              { id: 'c', who: 'leidinggevende', best: true, feedback: 'Goed. Je leidinggevende regelt een opleiding, of ander werk.' },
            ],
            why: 'Je leidinggevende zegt wie met de kettingzaag mag werken. Daar hoort een opleiding bij. Vraag ook wie de opleiding betaalt.',
          },
          { kind: 'model', id: 'r.be.l.groen.1.mo1', context: 'Een collega zegt: "Pak de kettingzaag maar." Je hebt nog geen opleiding.', nl: 'Ik heb nog geen opleiding voor de kettingzaag. Kan ik iets anders doen?' },
        ],
      },
      {
        // Les G.2 · Kabels, nesten en naalden
        id: 'r.be.l.groen.2',
        title: 'Kabels, nesten en naalden',
        goal: 'Je stopt als je een kabel of een nest vindt. Een naald pak je nooit met je hand.',
        remember: 'Een lint in de grond, een nest of een naald? Stop, en meld het.',
        // Wie kan je helpen: je leidinggevende of ploegbaas · bij een prik: de huisarts of de
        //   huisartsenwachtpost, meteen.
        help: ['leidinggevende', 'huisarts'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.groen.2.sc1',
            picture: 'Fatima in een tuin met een spade. In het gat ligt een rood plastic lint. De klant staat ernaast.',
            lines: [
              'Fatima werkt bij een tuinaannemer.',
              'Ze graaft een gat voor een nieuwe boom.',
              'Haar spade raakt een rood lint in de grond.',
              'De klant zegt: "Graaf maar door, dat is niks."',
            ],
          },
          // ⚖️ check: vóór grondwerken met een machine moet er een KLIP-planaanvraag zijn (decreet van 14 maart 2008 betreffende ontsluiting en uitwisseling van informatie over ondergrondse kabels en leidingen, het KLIP-decreet; klip.vlaanderen.be; welke handwerken vrijgesteld zijn: nakijken) — TWIJFEL: de vrijstelling voor kleine werken met de hand
          // ⚖️ check: nesten van wilde vogels die in gebruik zijn, mag je niet beschadigen of weghalen (Soortenbesluit van 15 mei 2009, art. 10; natuurenbos.be; niet geopend)
          {
            kind: 'rule',
            id: 'r.be.l.groen.2.ru1',
            emoji: '🚫',
            title: 'Een lint in de grond, een nest of een naald? Stop, en meld het.',
            body: [
              'In de grond liggen kabels en leidingen voor stroom, gas en water.',
              'Zie je een lint, of raak je iets hards? Stop met graven, en meld het.',
              'Graaf je met een machine? Dan moet er eerst een KLIP-aanvraag zijn.',
              'Een nest waar vogels in zitten, mag je niet weghalen.',
              'Een naald pak je nooit met je hand.',
            ],
            rule: 'geschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.groen.2.wd1',
            situation: 'Fatima ziet het rode lint. Wat kan Fatima het beste doen?',
            options: [
              { id: 'a', text: 'Ze stopt, en belt haar leidinggevende.', best: true, feedback: 'Goed. Een gasleiding of stroomkabel raken is heel gevaarlijk.' },
              { id: 'b', text: 'Ze graaft voorzichtig verder, naast het lint.', best: false, feedback: 'Dat snap ik. Maar onder het lint ligt een kabel of leiding.' },
              { id: 'c', text: 'Ze doet wat de klant zegt. Het is zijn tuin.', best: false, feedback: 'De klant weet niet wat er onder de grond ligt.' },
            ],
            why: 'Een lint in de grond waarschuwt: hieronder ligt een kabel of leiding. Stop met graven, en meld het. Graaf nooit met kracht door.',
          },
          // ⚖️ check: een nest dat in gebruik is, is beschermd (Soortenbesluit 15 mei 2009, art. 10; het broedseizoen is geen vaste wettelijke periode)
          {
            kind: 'truefalse',
            id: 'r.be.l.groen.2.tf1',
            statement: 'In de lente mag je een haag met een vogelnest erin gewoon snoeien.',
            answer: false,
            why: 'Een nest waar vogels in broeden of jongen hebben, is beschermd. Snoei daar niet. Kijk in de lente en de zomer eerst in de haag. Zie je een nest? Zeg het tegen je leidinggevende.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.groen.2.wd2',
            situation: 'Fatima ziet een naald in het gras, bij een bank. Wat kan Fatima het beste doen?',
            options: [
              { id: 'a', text: 'Ze pakt hem op met haar handschoenen aan, en gooit hem weg.', best: false, feedback: 'Een naald gaat door een handschoen heen.' },
              { id: 'b', text: 'Ze gebruikt de grijper en een harde bak.', best: true, feedback: 'Goed. Zo raakt niemand de naald.' },
              { id: 'c', text: 'Ze laat hem liggen. Iemand anders ruimt hem wel op.', best: false, feedback: 'Dan kan een kind of een hond zich prikken.' },
            ],
            why: 'Een naald kan een ziekte overbrengen. Pak hem nooit met je hand, ook niet met handschoenen. Doe hem in een harde bak met een deksel. Zeg het tegen je leidinggevende.',
          },
          // ⚖️ check: na een prikongeval zo snel mogelijk naar een dokter; soms zijn binnen een paar uur medicijnen nodig (Hoge Gezondheidsraad, advies over post-expositieprofylaxe; sciensano.be; niet geopend)
          // ⚖️ check: een prik op het werk is een arbeidsongeval: meld het aan je werkgever (Arbeidsongevallenwet van 10 april 1971; fedris.be)
          {
            kind: 'whoask',
            id: 'r.be.l.groen.2.wa1',
            question: 'Je hebt je geprikt aan een naald in het park. Wie bel je meteen?',
            options: [
              { id: 'a', who: 'collega', best: false, feedback: 'Een collega kan je niet behandelen. Bel eerst een dokter.' },
              { id: 'b', who: 'huisarts', best: true, feedback: 'Goed. Een dokter kijkt of je snel medicijnen nodig hebt.' },
              { id: 'c', who: 'ziekenfonds', best: false, feedback: 'Het ziekenfonds betaalt later mee. Nu heb je eerst een dokter nodig.' },
            ],
            why: 'Na een prik moet je snel naar een dokter. Soms heb je binnen een paar uur medicijnen nodig. Spoel de wond eerst met veel water. Zeg het ook tegen je leidinggevende: het is een arbeidsongeval.',
          },
          { kind: 'model', id: 'r.be.l.groen.2.mo1', context: 'Je spade raakt een lint in de grond. Je belt je leidinggevende.', nl: 'Ik heb een lint in de grond geraakt. Ik ben gestopt met graven.' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.groen.1.mo1': [
      { text: 'Oké, ik probeer het wel. Hoe moeilijk kan het zijn?', feedback: 'Zonder opleiding is een kettingzaag te gevaarlijk.' },
      { text: 'Ik weet niet hoe dat ding werkt. Doe jij het maar.', feedback: 'Dat klinkt onvriendelijk. Vraag liever ander werk.' },
    ],
    'r.be.l.groen.2.mo1': [
      { text: 'Ik raakte iets in de grond. Ik graaf nog even verder.', feedback: 'Onder een lint ligt een kabel of leiding. Stop eerst.' },
      { text: 'Er zat iets raars in de grond, maar het is niks.', feedback: 'Dan weet je leidinggevende niet dat het gevaarlijk kan zijn.' },
    ],
  },
  advice: {
    'r.be.l.groen.1.ru1': 'advice',
    'r.be.l.groen.2.ru1': 'advice',
  },
};
