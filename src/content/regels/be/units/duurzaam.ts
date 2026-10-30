import type { BeUnit } from '../types';

/**
 * Unit 17 (België) · Duurzaam werken: de Belgische versie van src/content/regels/units/duurzaam.ts.
 * Vlaamse woorden: sorteren, restafval, PMD, KGA (klein gevaarlijk afval), recyclagepark, fitness.
 *
 * `// ⚖️ check:` = een feit dat de deskundige nakijkt, met de bron. Opgezocht op 30 okt 2026, alleen
 * via zoekresultaten: ovam.be, fostplus.be en vlaanderen.be waren in deze sessie niet te openen
 * (netwerk geblokkeerd, 30 okt 2026).
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.duurzaam',
    title: 'Duurzaam werken',
    emoji: '♻️',
    color: '#4d908e',
    lessons: [
      {
        // Les 17.1 · Afval sorteren op je werk
        id: 'r.be.l.duurzaam.1',
        title: 'Afval sorteren op je werk',
        goal: 'Je sorteert afval zoals het op je werk hoort. Gevaarlijk afval gooi je nooit bij het restafval.',
        remember: 'Sorteer je afval. Gevaarlijk afval nooit bij het restafval.',
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.duurzaam.1.sc1',
            picture: 'Mohammed in de achterruimte van een bakkerij, bij vier afvalbakken met verschillende kleuren.',
            lines: [
              'Mohammed werkt in een bakkerij.',
              'Na het werk heeft hij veel afval.',
              'Karton, oud brood en lege flessen van schoonmaakmiddel.',
              'Er staan vier bakken. Hij heeft haast.',
            ],
          },
          // ⚖️ check: in Vlaanderen moeten ook bedrijven hun afval sorteren, in een reeks vaste soorten (sorteerplicht bedrijfsafval, VLAREMA art. 4.3.2; ovam.be "sorteerplicht voor bedrijven"; zoekresultaat 30 okt 2026)
          // ⚖️ check: batterijen, lampen en resten van chemische middelen zijn gevaarlijk afval (KGA) en gaan apart (VLAREMA; ovam.be)
          {
            kind: 'rule',
            id: 'r.be.l.duurzaam.1.ru1',
            emoji: '🗑️',
            title: 'Sorteer je afval. Gevaarlijk afval nooit bij het restafval.',
            body: [
              'Ook bedrijven moeten afval sorteren. Welke bakken er zijn, verschilt per bedrijf.',
              'Batterijen, lampen en resten van chemische middelen zijn gevaarlijk afval.',
              'Die moeten altijd apart.',
            ],
            rule: 'geschreven',
            key: true,
          },
          // ⚖️ check: papier en karton is een aparte soort in de sorteerplicht voor bedrijven (VLAREMA art. 4.3.2; ovam.be)
          {
            kind: 'whatdo',
            id: 'r.be.l.duurzaam.1.wd1',
            situation: 'Waar laat Mohammed het karton?',
            options: [
              { id: 'a', text: 'Plat gemaakt in de bak voor papier en karton.', best: true, feedback: 'Goed. Plat past er veel meer in.' },
              { id: 'b', text: 'In de bak voor restafval. Dat is het snelst.', best: false, feedback: 'Dat is snel, ja. Maar karton hoort apart.' },
              { id: 'c', text: 'Naast de bakken. Iemand anders ruimt het wel op.', best: false, feedback: 'Dan ligt het in de weg. En het is zijn afval.' },
            ],
            why: 'Ook bedrijven moeten afval sorteren. Papier en karton gaan altijd apart. Welke bakken er zijn, verschilt per bedrijf. Weet je het niet? Kijk op de sticker van de bak, of vraag het.',
          },
          // ⚖️ check: lege batterijen zijn gevaarlijk afval; ze gaan in een Bebat-doos of naar het recyclagepark, nooit bij het restafval (VLAREMA, aanvaardingsplicht; bebat.be; zoekresultaat)
          {
            kind: 'truefalse',
            id: 'r.be.l.duurzaam.1.tf1',
            statement: 'Een lege batterij mag je bij het restafval gooien.',
            answer: false,
            why: 'Batterijen, lampen en resten van chemische middelen zijn gevaarlijk afval. Die moeten altijd apart. Batterijen gaan in een speciale doos of naar het recyclagepark. Giet ook nooit resten van middelen door de gootsteen.',
          },
          // ⚖️ check: in de blauwe PMD-zak mogen sinds de uitbreiding (in heel Vlaanderen rond 2021) alle plastic verpakkingen, zoals potjes, schaaltjes en folies; plus metalen verpakkingen en drankkartons (Fost Plus "de nieuwe blauwe zak"; limburg.net; maaseik.be folder 2021; vrt.be 28 mei 2019 en 25 feb 2025; zoekresultaat 30 okt 2026)
          // ⚖️ check: niet in de PMD-zak: verpakkingen met een kindveilige dop, verpakkingen in elkaar gestoken of samen in een dichtgeknoopt zakje; bij twijfel betersorteren.be (Fost Plus; heuvelland.be folder; zoekresultaat)
          // Redactie: de PMD-zak van een bedrijf hangt af van de ophaler; de regels zijn meestal dezelfde. ⚖️
          {
            kind: 'truefalse',
            id: 'r.be.l.duurzaam.1.tf2',
            statement: 'In de PMD-zak mogen ook plastic potjes en folies.',
            answer: true,
            why: 'PMD is plastic, metaal en drankkartons. Alle plastic verpakkingen mogen erin, zoals potjes en folies. Steek ze niet in elkaar. Weet je het niet zeker? Kijk op betersorteren.be, of vraag het.',
          },
          // ⚖️ check: gesorteerd afval wordt apart opgehaald en gerecycleerd; van oud papier maken ze nieuw papier (ovam.be; Fost Plus)
          {
            kind: 'whatdo',
            id: 'r.be.l.duurzaam.1.wd2',
            situation: 'Een collega zegt: "Sorteren heeft geen zin. Het gaat toch allemaal op één hoop." Wat kan Mohammed het beste doen?',
            options: [
              { id: 'a', text: 'Hij gooit vanaf nu ook alles in één bak.', best: false, feedback: 'Ik snap het. Maar op je werk volg je de regels.' },
              { id: 'b', text: 'Hij praat er lang met de collega over.', best: false, feedback: 'Dat mag. Maar het lost de vraag niet op.' },
              { id: 'c', text: 'Hij blijft sorteren, en hij vraagt het aan Henk.', best: true, feedback: 'Goed. Henk weet hoe ze het afval ophalen.' },
            ],
            why: 'Gesorteerd afval halen ze apart op. Van oud papier maken ze weer nieuw papier. Weet je het niet zeker? Vraag het je leidinggevende. Volg de regels op je werk. Ook als een collega het anders doet.',
          },
          { kind: 'model', id: 'r.be.l.duurzaam.1.mo1', context: 'Je weet niet waar je afval heen moet.', nl: 'In welke bak moet dit?' },
        ],
      },
      {
        // Les 17.2 · Zuinig met materiaal en energie (gewoonte: geldt ook in Vlaanderen)
        id: 'r.be.l.duurzaam.2',
        title: 'Zuinig met materiaal en energie',
        goal: 'Je gebruikt niet meer materiaal en energie dan nodig. Je meldt verspilling of een lek.',
        remember: 'Uit als het mag, dicht als het kan. Meld een lek meteen.',
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.duurzaam.2.sc1',
            picture: 'Dewi in een lege kleedkamer van een fitness. Alle lampen zijn aan. Een kraan druppelt.',
            lines: [
              'Dewi kuist \'s avonds een fitness.',
              'Iedereen is weg.',
              'Alle lampen zijn nog aan.',
              'In de kleedkamer druppelt een kraan.',
            ],
          },
          {
            kind: 'rule',
            id: 'r.be.l.duurzaam.2.ru1',
            emoji: '💡',
            title: 'Uit als het mag, dicht als het kan. Meld een lek meteen.',
            body: [
              'Doe lampen en toestellen uit als dat mag.',
              'Vraag wat aan moet blijven, zoals de noodverlichting.',
              'Houd deuren van koelcel en diepvries dicht.',
              'Meld een lek meteen.',
            ],
            rule: 'ongeschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.duurzaam.2.wd1',
            situation: 'Wat doet Dewi?',
            options: [
              { id: 'a', text: 'Ze doet uit wat uit mag, en ze meldt de kraan.', best: true, feedback: 'Goed. Zo bespaart ze energie en water.' },
              { id: 'b', text: 'Ze laat alles zo. Het is niet haar gebouw.', best: false, feedback: 'Dat is logisch. Maar een lek kost veel water.' },
              { id: 'c', text: 'Ze probeert de kraan zelf te maken.', best: false, feedback: 'Goed bedoeld. Maar dat is niet haar werk.' },
            ],
            why: 'Doe lampen en toestellen uit als dat mag. Vraag wat aan moet blijven, zoals de noodverlichting. Meld een lek meteen. Zelf herstellen doe je alleen als dat jouw werk is.',
          },
          // ⚖️ check: een open koelcel of diepvries kost veel energie, en het eten wordt minder goed koud (algemene kennis; FAVV: koude keten)
          {
            kind: 'truefalse',
            id: 'r.be.l.duurzaam.2.tf1',
            statement: 'Een koelcel of diepvries houd je niet langer open dan nodig.',
            answer: true,
            why: 'Een open deur kost veel energie. Het eten wordt ook minder goed koud. Pak wat je nodig hebt, en doe de deur dicht. Sluit een deur niet goed? Meld het.',
          },
          // ⚖️ check: 60 centimeter is een voorbeeld, geen regel (Redactie)
          {
            kind: 'whatdo',
            id: 'r.be.l.duurzaam.2.wd2',
            situation: 'Piotr werkt in de bouw. Er liggen veel stukken hout over. Hij heeft een stuk van 60 centimeter nodig. Wat kan Piotr het beste doen?',
            options: [
              { id: 'a', text: 'Hij zaagt een stuk van een nieuwe plank. Dat gaat sneller.', best: false, feedback: 'Dat gaat sneller, ja. Maar dan blijven de restjes liggen.' },
              { id: 'b', text: 'Hij kijkt eerst of er een restje is dat past.', best: true, feedback: 'Goed. Dat scheelt geld en afval.' },
              { id: 'c', text: 'Hij neemt de restjes mee naar huis.', best: false, feedback: 'Dat moet hij eerst vragen. Het hout is van het bedrijf.' },
            ],
            why: 'Zuinig werken scheelt geld en afval. Meet eerst, dan zaag je. Gebruik restjes als het kan. Iets mee naar huis nemen? Vraag het altijd eerst. Het materiaal is van het bedrijf.',
          },
          { kind: 'model', id: 'r.be.l.duurzaam.2.mo1', context: 'Je ziet lampen aan en een lekkende kraan.', nl: 'Mogen deze lampen uit? En de kraan lekt. Wie kan dat maken?' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.duurzaam.1.mo1': [
      { text: 'Ik gooi het wel ergens.', feedback: 'Dan komt het misschien in de verkeerde bak.' },
      { text: 'Zoek jij maar uit waar dit moet.', feedback: 'Dat klinkt onbeleefd. Vraag het gewoon zelf.' },
    ],
    'r.be.l.duurzaam.2.mo1': [
      { text: 'De lampen en de kraan? Dat is niet mijn probleem.', feedback: 'Zuinig zijn helpt iedereen. Zeg het tegen iemand.' },
      { text: 'Ik doe alle lampen uit en ik maak de kraan zelf.', feedback: 'Vraag eerst of het mag. Misschien zijn de lampen nodig.' },
    ],
  },
  advice: {
    'r.be.l.duurzaam.1.ru1': 'advice',
  },
  kun: [
    ['Ik kan lezen hoe ik afval sorteer.', '1F', 'lezen'],
    ['Ik kan een lek of verspilling melden.', '1F', 'gesprekken'],
  ],
};
