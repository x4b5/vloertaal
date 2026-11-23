import type { BeUnit } from '../types';

/**
 * Sector beveiliging (België) · Werken in de beveiliging: de Belgische versie van de sectorunit
 * r.beveiliging (src/content/regels/units/sector2.ts, `beveiligingUnit`). In België heet het werk
 * bewaking en de werknemer een bewakingsagent. Anders zijn de wet (wet van 2 oktober 2017 tot
 * regeling van de private en bijzondere veiligheid), de identificatiekaart in plaats van de
 * beveiligerspas, het vasthouden bij betrapping op heterdaad (wet voorlopige hechtenis, art. 1, 3°)
 * en de nazorg na geweld (Wet welzijn). Bewakingsagenten vallen onder paritair comité 317; dat
 * staat niet in de les.
 *
 * `// ⚖️ check:` = een feit dat de deskundige nakijkt, met de bron. Opgezocht op 23 nov 2026 uit
 * kennis van de regels; vigilis.be (FOD Binnenlandse Zaken) en werk.belgie.be zijn niet geopend.
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.beveiliging',
    title: 'Werken in de beveiliging',
    emoji: '🛡️',
    color: '#34495e',
    lessons: [
      {
        // Les BV.1 · Je kaart en je ronde
        id: 'r.be.l.beveiliging.1',
        title: 'Je kaart en je ronde',
        goal: 'Je werkt alleen met een geldige identificatiekaart. Op je ronde kijk je, en je meldt.',
        remember: 'Zie je inbraak of gevaar op je ronde? Ga niet alleen naar binnen. Meld het.',
        // Wie kan je helpen: je leidinggevende of de meldkamer van je bewakingsfirma · bij gevaar de
        //   politie (112).
        help: ['leidinggevende', 'politie'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.beveiliging.1.sc1',
            picture: 'Kevin in uniform met een zaklamp bij een loods op een industrieterrein, in het donker. Een deur staat open.',
            lines: [
              'Kevin werkt sinds een week als bewakingsagent.',
              "Hij loopt 's nachts een ronde over een industrieterrein.",
              'Bij een loods staat een deur open.',
              'Binnen hoort hij geluid.',
            ],
          },
          // ⚖️ check: een bewakingsagent heeft een opleiding en een identificatiekaart nodig; de kaart komt na een veiligheidsonderzoek (wet private veiligheid 2 oktober 2017: voorwaarden, opleiding en identificatiekaart, uitgereikt door de FOD Binnenlandse Zaken; vigilis.be; niet geopend)
          // ⚖️ check: de identificatiekaart draag je zichtbaar en je toont ze op vraag (wet private veiligheid 2 oktober 2017; KB over de identificatiekaart; nakijken artikel)
          {
            kind: 'rule',
            id: 'r.be.l.beveiliging.1.ru1',
            emoji: '🪪',
            title: 'Zie je inbraak of gevaar op je ronde? Ga niet alleen naar binnen. Meld het.',
            body: [
              'Als bewakingsagent heb je een opleiding en een identificatiekaart nodig.',
              'Die kaart draag je zichtbaar. Je toont ze als iemand erom vraagt.',
              'Op je ronde kijk je, je schrijft op en je meldt.',
              'Zie je inbraak of gevaar? Bel de meldkamer of de politie.',
            ],
            rule: 'geschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.beveiliging.1.wd1',
            situation: 'Kevin hoort geluid in de loods. Wat kan Kevin het beste doen?',
            options: [
              { id: 'a', text: 'Hij gaat naar binnen en roept: "Bewaking!"', best: false, feedback: 'Dat snap ik. Maar binnen kan iemand gevaarlijk zijn.' },
              { id: 'b', text: 'Hij doet de deur dicht, en loopt zijn ronde verder.', best: false, feedback: 'Dan weet niemand wat er aan de hand is.' },
              { id: 'c', text: 'Hij belt de meldkamer, en wacht op een veilige plek.', best: true, feedback: 'Goed. Zo blijft hij veilig, en komt er hulp.' },
            ],
            why: 'Je eigen veiligheid gaat voor. Je taak is kijken en melden, niet zelf de held spelen. Wacht op een veilige plek tot er hulp is. Schrijf op wat je zag, en hoe laat.',
          },
          // ⚖️ check: zonder identificatiekaart mag je niet als bewakingsagent werken; de kaart komt na een veiligheidsonderzoek (wet private veiligheid 2 oktober 2017; vigilis.be; niet geopend)
          {
            kind: 'truefalse',
            id: 'r.be.l.beveiliging.1.tf1',
            statement: 'Je mag al als bewakingsagent werken, ook als je kaart nog niet klaar is.',
            answer: false,
            why: 'Zonder identificatiekaart mag je niet als bewakingsagent werken. Die kaart krijg je na een veiligheidsonderzoek. Vraag je werkgever hoe ver je aanvraag is.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.beveiliging.1.wd2',
            situation: 'Een man zegt: "Ik ben de nieuwe directeur. Ik heb nog geen badge." Wat kan Kevin het beste doen?',
            options: [
              { id: 'a', text: 'Hij zegt vriendelijk dat hij het even nakijkt.', best: true, feedback: 'Goed. Een echte directeur begrijpt dat.' },
              { id: 'b', text: 'Hij laat hem binnen. Een directeur wil je niet boos maken.', best: false, feedback: 'Dat snap ik. Maar iedereen kan zeggen dat hij directeur is.' },
              { id: 'c', text: 'Hij stuurt hem weg. Zonder badge komt niemand binnen.', best: false, feedback: 'Dat is streng. Eerst nakijken is beter.' },
            ],
            why: 'Iedereen kan zeggen dat hij de baas is. Kijk het na, ook als iemand haast heeft. Volg de regels van het gebouw.',
          },
          { kind: 'model', id: 'r.be.l.beveiliging.1.mo1', context: 'Op je ronde zie je een deur open staan. Je belt de meldkamer.', nl: 'Ik ben op ronde. Bij loods 3 staat een deur open. Ik hoor binnen geluid.' },
        ],
      },
      {
        // Les BV.2 · Diefstal, geweld en je verslag
        id: 'r.be.l.beveiliging.2',
        title: 'Diefstal, geweld en je verslag',
        goal: 'Je weet wat je wel en niet mag bij diefstal. Na een incident schrijf je meteen een verslag.',
        remember: 'Zie je diefstal? Bel de politie. Fouilleer niemand, en gebruik geen grof geweld.',
        // Wie kan je helpen: je leidinggevende · de politie · na een incident: de arbeidsarts, de
        //   preventieadviseur psychosociale aspecten of de opvang van je werkgever.
        help: ['leidinggevende', 'politie', 'arbeidsarts'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.beveiliging.2.sc1',
            picture: 'Esra in uniform in een supermarkt, bij de uitgang. Een vrouw met een grote tas loopt langs de kassa’s.',
            lines: [
              'Esra werkt als bewakingsagent in een supermarkt.',
              'Ze ziet een vrouw een fles in haar tas steken.',
              'De vrouw loopt zonder te betalen naar de uitgang.',
              'Een klant roept: "Kijk in haar tas!"',
            ],
          },
          // ⚖️ check: wie iemand op heterdaad betrapt, mag hem vasthouden tot de politie er is, en moet de politie meteen verwittigen (wet van 20 juli 1990 betreffende de voorlopige hechtenis, art. 1, 3°; voor bewakingsagenten in winkels ook de wet private veiligheid 2017; nakijken artikel)
          // ⚖️ check: een bewakingsagent mag niemand fouilleren; een oppervlakkige controle van kledij of tas mag alleen in bepaalde gevallen, met toestemming (wet private veiligheid 2017: toegangscontrole, door iemand van hetzelfde geslacht) — TWIJFEL: de precieze gevallen nakijken
          // ⚖️ check: niet meer kracht dan nodig (proportionaliteit; Strafwetboek art. 416 wettige verdediging; wet private veiligheid 2017)
          {
            kind: 'rule',
            id: 'r.be.l.beveiliging.2.ru1',
            emoji: '👮',
            title: 'Zie je diefstal? Bel de politie. Fouilleer niemand, en gebruik geen grof geweld.',
            body: [
              'Zie je iemand stelen? Dan mag je hem vasthouden tot de politie er is.',
              'Bel meteen de politie. Je werkgever kan ook zeggen: alleen kijken en melden.',
              'Iemands zakken doorzoeken heet fouilleren. Dat doet alleen de politie.',
              'Gebruik niet meer kracht dan nodig. Nooit slaan, en nooit iemand bij de nek pakken.',
            ],
            rule: 'geschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.beveiliging.2.wd1',
            situation: 'Esra houdt de vrouw bij de uitgang vast. Wat kan Esra het beste doen?',
            options: [
              { id: 'a', text: 'Ze pakt de tas, en kijkt of de fles erin zit.', best: false, feedback: 'Dat snap ik. Maar zelf in een tas zoeken mag ze niet.' },
              { id: 'b', text: 'Ze vraagt de vrouw mee te komen, en belt de politie.', best: true, feedback: 'Goed. De politie neemt het dan over.' },
              { id: 'c', text: 'Ze duwt de vrouw tegen de muur, zodat ze niet wegloopt.', best: false, feedback: 'Zo kan de vrouw gewond raken. Dat is te veel geweld.' },
            ],
            why: 'Zelf in een tas zoeken mag je niet. Bel de politie, en houd het rustig. Volg de regels van je werkgever. Gebruik nooit meer kracht dan nodig.',
          },
          // ⚖️ check: fouilleren doet alleen de politie; een bewakingsagent mag kledij of een tas alleen oppervlakkig controleren in bepaalde gevallen, met toestemming (wet private veiligheid 2 oktober 2017) — TWIJFEL: welke gevallen precies
          {
            kind: 'truefalse',
            id: 'r.be.l.beveiliging.2.tf1',
            statement: 'Een bewakingsagent mag de zakken van een dief doorzoeken.',
            answer: false,
            why: 'Zakken doorzoeken heet fouilleren. Dat doet alleen de politie. Bij een evenement kijken bewakingsagenten soms in tassen. Dat mag alleen als de bezoeker het goed vindt.',
          },
          // ⚖️ check: een verslag meteen na het incident is de vakregel en vaak een eis van de opdrachtgever; geen wettelijke termijn (geen bewering over bewijsrecht)
          {
            kind: 'truefalse',
            id: 'r.be.l.beveiliging.2.tf2',
            statement: 'Een verslag van een incident schrijf je het best meteen, niet de volgende dag.',
            answer: true,
            why: 'Meteen weet je nog precies wat je zag en hoorde. Morgen vergeet je dingen. Schrijf feiten op: wat, waar, hoe laat en wie. Niet wat je denkt.',
          },
          // ⚖️ check: de werkgever zorgt voor psychologische ondersteuning na geweld door derden (Wet welzijn 4 augustus 1996, art. 32quater en 32quinquies; Codex boek I, titel 3, psychosociale risico's)
          {
            kind: 'whoask',
            id: 'r.be.l.beveiliging.2.wa1',
            question: 'Na een incident met een boze man slaap je slecht. Tegen wie zeg je het?',
            options: [
              { id: 'a', who: 'politie', best: false, feedback: 'De politie gaat over het incident zelf, niet over hoe jij je voelt.' },
              { id: 'b', who: 'leidinggevende', best: true, feedback: 'Goed. Je werkgever moet zorgen voor hulp na een incident.' },
              { id: 'c', who: 'ziekenfonds', best: false, feedback: 'Het ziekenfonds betaalt als je ziek bent. Zeg het eerst op je werk.' },
            ],
            why: 'Je werkgever moet zorgen voor hulp na geweld op het werk. Zeg het tegen je leidinggevende. Je kunt ook naar de arbeidsarts. Praat erover.',
          },
          { kind: 'model', id: 'r.be.l.beveiliging.2.mo1', context: 'Je houdt een vrouw vast die iets heeft gestolen. Je belt de politie.', nl: 'Ik heb bij de uitgang iemand betrapt op diefstal. Kunnen jullie komen?' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.beveiliging.1.mo1': [
      { text: 'Er is iets bij een loods. Ik ga zelf even naar binnen.', feedback: 'Ga niet alleen naar binnen. Meld het, en wacht.' },
      { text: 'Ik hoor iets, maar het is vast niks. Ik loop verder.', feedback: 'Dan komt er geen hulp. Zeg waar je bent en wat je hoort.' },
    ],
    'r.be.l.beveiliging.2.mo1': [
      { text: 'Ik heb hier een dief. Ik heb haar tas al helemaal doorzocht.', feedback: 'Zelf in een tas zoeken mag je niet.' },
      { text: 'Er is iets gebeurd in de winkel. Komen jullie misschien een keer?', feedback: 'Dat is vaag. Zeg wat er is, en waar.' },
    ],
  },
  advice: {
    'r.be.l.beveiliging.1.ru1': 'advice',
    'r.be.l.beveiliging.2.ru1': 'advice',
  },
};
