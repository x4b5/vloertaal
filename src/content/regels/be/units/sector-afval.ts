import type { BeUnit } from '../types';

/**
 * Sector afval en recycling (België) · Werken in afval en recycling: de Belgische versie van de
 * sectorunit r.afval (src/content/regels/units/sector2.ts, `afvalUnit`). Dezelfde regels; anders
 * zijn de bronnen (Codex welzijn op het werk, VLAREMA en OVAM) en de woorden: huisvuilophaling,
 * ophaler, fluokledij, recyclagepark, klein gevaarlijk afval (KGA), balenpers.
 *
 * `// ⚖️ check:` = een feit dat de deskundige nakijkt, met de bron. Opgezocht op 23 nov 2026 uit
 * kennis van de regels; ovam.be en werk.belgie.be zijn niet geopend.
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.afval',
    title: 'Werken in afval en recycling',
    emoji: '♻️',
    color: '#2e7d5b',
    lessons: [
      {
        // Les A.1 · Op de wagen: zien en gezien worden
        id: 'r.be.l.afval.1',
        title: 'Op de wagen: zien en gezien worden',
        goal: 'Je draagt altijd je fluokledij. Je loopt nooit achter een wagen die achteruitrijdt.',
        remember: 'Loop nooit achter een wagen die achteruitrijdt. Zorg dat de chauffeur je ziet.',
        // Wie kan je helpen: de chauffeur of ploegbaas · je leidinggevende · de preventieadviseur.
        help: ['leidinggevende', 'collega'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.afval.1.sc1',
            picture: 'Piotr in oranje fluokledij, naast een huisvuilwagen in een smalle straat. Achter de wagen ligt een vuilniszak.',
            lines: [
              'Piotr werkt als ophaler op een huisvuilwagen.',
              'Ze halen containers op in een smalle straat.',
              'De wagen moet een stukje achteruit.',
              'Achter de wagen ligt nog een vuilniszak.',
            ],
          },
          // ⚖️ check: kledij met hoge zichtbaarheid bij werk op de openbare weg, gratis van de werkgever (Codex welzijn op het werk, boek IX, titel 2, PBM; de risicoanalyse)
          // ⚖️ check: achteruitrijden: niemand in de gevarenzone achter de wagen; begeleiden vanaf de zijkant (Codex boek IV, titel 2: mobiele arbeidsmiddelen; de risicoanalyse van de werkgever; niet geopend)
          {
            kind: 'rule',
            id: 'r.be.l.afval.1.ru1',
            emoji: '👷',
            title: 'Loop nooit achter een wagen die achteruitrijdt. Zorg dat de chauffeur je ziet.',
            body: [
              'Draag op elke ronde je fluokledij.',
              'Stap in en uit aan de kant van het voetpad.',
              'Vlak achter de wagen ziet de chauffeur je niet. Dat heet de dode hoek.',
              'Rijdt de wagen achteruit? Sta aan de zijkant, waar de chauffeur je in de spiegel ziet.',
            ],
            rule: 'geschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.afval.1.wd1',
            situation: 'De wagen rijdt achteruit. Piotr wil de zak pakken. Wat kan Piotr het beste doen?',
            options: [
              { id: 'a', text: 'Hij wacht aan de zijkant tot de wagen stilstaat.', best: true, feedback: 'Goed. Daar ziet de chauffeur hem in de spiegel.' },
              { id: 'b', text: 'Hij loopt snel achter de wagen langs. Het is maar even.', best: false, feedback: 'Dat snap ik. Maar de chauffeur ziet hem daar niet.' },
              { id: 'c', text: 'Hij roept naar de chauffeur dat hij erachter loopt.', best: false, feedback: 'Goed bedoeld. Maar de chauffeur hoort hem misschien niet.' },
            ],
            why: 'Achter de wagen ziet de chauffeur je niet. Een ongeval gebeurt in een seconde. Begeleid de chauffeur vanaf de zijkant. Zie je elkaar niet meer? Dan stopt de chauffeur.',
          },
          // ⚖️ check: meerijden op de treeplank alleen als de werkgever het toestaat, nooit bij achteruitrijden of snel rijden (norm EN 1501-1: treeplanken met snelheidsbegrenzing en blokkering bij achteruitrijden; de Wegcode) — TWIJFEL: de Belgische regel voor laders op de treeplank nakijken
          {
            kind: 'truefalse',
            id: 'r.be.l.afval.1.tf1',
            statement: 'Naar de volgende straat mag je altijd op de treeplank meerijden.',
            answer: false,
            why: 'Van een rijdende wagen vallen is een groot gevaar. Rijd mee in de cabine. Op de treeplank alleen als je werkgever het echt toestaat. Nooit als de wagen achteruitrijdt of snel rijdt.',
          },
          // ⚖️ check: een te zware of te volle container laat je staan (Codex boek VIII, titel 3: manueel hanteren van lasten; de regels van de gemeente of de intercommunale)
          {
            kind: 'whatdo',
            id: 'r.be.l.afval.1.wd2',
            situation: 'Een container is veel te zwaar. Er steekt een plank uit. Wat kan Piotr het beste doen?',
            options: [
              { id: 'a', text: 'Hij trekt de plank eruit, en gooit hem in de wagen.', best: false, feedback: 'Goed bedoeld. Maar onder de plank kan iets scherps zitten.' },
              { id: 'b', text: 'Hij tilt de container samen met de chauffeur op de lift.', best: false, feedback: 'Dat snap ik. Maar te zwaar is gevaarlijk bij het kiepen.' },
              { id: 'c', text: 'Hij laat de container staan, en meldt het.', best: true, feedback: 'Goed. Zo raakt niemand gewond.' },
            ],
            why: 'Een te zware of te volle container is gevaarlijk. Laat hem staan, en meld het. Duw een container, en til hem niet.',
          },
          { kind: 'model', id: 'r.be.l.afval.1.mo1', context: 'De wagen moet achteruit. Je staat aan de zijkant.', nl: 'Ik sta links. Zie je me in de spiegel?' },
        ],
      },
      {
        // Les A.2 · Het recyclagepark en de pers
        id: 'r.be.l.afval.2',
        title: 'Het recyclagepark en de pers',
        goal: 'Je gaat veilig om met onbekend afval. Je grijpt nooit in een pers.',
        remember: 'Onbekend afval? Niet openmaken, niet ruiken. Grijp nooit in een pers.',
        // Wie kan je helpen: je leidinggevende of de parkwachter · een ervaren collega.
        help: ['leidinggevende', 'collega'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.afval.2.sc1',
            picture: 'Sanne op een recyclagepark bij de container voor klein gevaarlijk afval. Een vrouw houdt een fles zonder etiket omhoog.',
            lines: [
              'Sanne werkt op het recyclagepark van de gemeente.',
              'Een vrouw brengt een fles zonder etiket.',
              'De fles ruikt sterk.',
              '"Gooi hem maar bij de rest," zegt de vrouw.',
            ],
          },
          // ⚖️ check: verf, olie, batterijen en spuitbussen zijn klein gevaarlijk afval (KGA) en gaan apart (VLAREMA, Vlaams reglement voor het duurzaam beheer van materiaalkringlopen en afvalstoffen; ovam.be; niet geopend)
          // ⚖️ check: met een pers werk je alleen na een opleiding (Codex boek IV, titel 2: arbeidsmiddelen met specifieke risico's)
          // ⚖️ check: eerst de noodstop, de stroom eraf en een slot erop (Codex boek IV, titel 2: onderhoud aan stilgelegde arbeidsmiddelen, vergrendelen; lock-out)
          {
            kind: 'rule',
            id: 'r.be.l.afval.2.ru1',
            emoji: '⚙️',
            title: 'Onbekend afval? Niet openmaken, niet ruiken. Grijp nooit in een pers.',
            body: [
              'Verf, olie, batterijen en spuitbussen zijn gevaarlijk afval. Ze kunnen branden of vergiftigen.',
              'Een fles zonder etiket maak je nooit open. Ruik er niet aan.',
              'Een pers drukt met heel veel kracht. Werk ermee als je het geleerd hebt.',
              'Zit er iets vast? Eerst de noodstop, de stroom eraf en een slot erop.',
            ],
            rule: 'geschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.afval.2.wd1',
            situation: 'Wat kan Sanne het beste doen met de fles?',
            options: [
              { id: 'a', text: 'Ze maakt hem even open om te ruiken wat het is.', best: false, feedback: 'Dat snap ik. Maar de damp kan giftig zijn.' },
              { id: 'b', text: 'Ze zet hem rechtop apart, en vraagt het na.', best: true, feedback: 'Goed. Haar leidinggevende weet waar het veilig kan.' },
              { id: 'c', text: 'Ze zet hem bij de verf. Dat lijkt er het meest op.', best: false, feedback: 'Onbekende stoffen kunnen met andere stoffen reageren.' },
            ],
            why: 'Onbekend afval kan branden, ontploffen of giftig zijn. Maak het niet open, en meng het niet. Draag handschoenen en een veiligheidsbril.',
          },
          // ⚖️ check: een pers die stilstaat kan weer starten; eerst noodstop, stroom eraf en slot erop (Codex boek IV, titel 2; de werkinstructie van het bedrijf)
          {
            kind: 'truefalse',
            id: 'r.be.l.afval.2.tf1',
            statement: 'Een pers die stilstaat, is veilig om in te grijpen.',
            answer: false,
            why: 'Een pers die stilstaat, kan weer starten. Eerst de noodstop, de stroom eraf en een slot erop. Klim nooit in een pers of een container.',
          },
          // ⚖️ check: asbest is gevaarlijk als het breekt; een recyclagepark neemt hechtgebonden asbest alleen goed verpakt aan (Codex boek VI, titel 3, asbest; OVAM, asbestafbouwbeleid; de regels van de gemeente of de intercommunale; niet geopend)
          {
            kind: 'whoask',
            id: 'r.be.l.afval.2.wa1',
            question: 'Een bezoeker brengt kapotte golfplaten. Je denkt dat er asbest in zit. Wie vraag je het?',
            options: [
              { id: 'a', who: 'collega', best: false, feedback: 'Een collega weet het misschien. Maar je leidinggevende beslist.' },
              { id: 'b', who: 'politie', best: false, feedback: 'Asbest is geen zaak voor de politie. Vraag het op je werk.' },
              { id: 'c', who: 'leidinggevende', best: true, feedback: 'Goed. Je leidinggevende weet of het mag, en hoe.' },
            ],
            why: 'Asbest is gevaarlijk als het breekt. Je leidinggevende weet of het mag, en hoe. Breek het niet. Asbest komt alleen goed verpakt binnen.',
          },
          { kind: 'model', id: 'r.be.l.afval.2.mo1', context: 'Een bezoeker brengt een fles zonder etiket.', nl: 'Ik weet niet wat erin zit. Ik zet hem apart en vraag het even.' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.afval.1.mo1': [
      { text: 'Rij maar, ik loop wel even achterlangs.', feedback: 'Achter de wagen ziet de chauffeur je niet.' },
      { text: 'Ik sta ergens. Rij maar gewoon achteruit.', feedback: 'Dat is vaag. Zeg waar je staat, en vraag of hij je ziet.' },
    ],
    'r.be.l.afval.2.mo1': [
      { text: 'Ik weet niet wat het is. Ik ruik er even aan.', feedback: 'De damp kan giftig zijn. Zet hem apart.' },
      { text: 'Geen idee wat dit is. Ik gooi het gewoon bij de verf.', feedback: 'Onbekend afval kan reageren met ander afval. Vraag het na.' },
    ],
  },
  advice: {
    'r.be.l.afval.1.ru1': 'advice',
    'r.be.l.afval.2.ru1': 'advice',
  },
};
