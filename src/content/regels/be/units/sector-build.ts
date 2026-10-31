import type { BeUnit } from '../types';

/**
 * Sector bouw (België) · Werken in de bouw: de Belgische versie van de sectorunit r.build
 * (src/content/regels/units/sector.ts, `buildUnit`). Vlaamse woorden: werf, werfleider,
 * interimkantoor, preventieadviseur, collectieve bescherming, stelling.
 *
 * `// ⚖️ check:` = een feit dat de deskundige nakijkt, met de bron. Opgezocht op 30 okt 2026, alleen
 * via zoekresultaten: werk.belgie.be was in deze sessie niet te openen (netwerk geblokkeerd,
 * 30 okt 2026).
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.build',
    title: 'Werken in de bouw',
    emoji: '🏗️',
    color: '#d98e04',
    lessons: [
      {
        // Les B.1 · VCA en je beschermende spullen
        id: 'r.be.l.build.1',
        title: 'VCA en je beschermende spullen',
        goal: 'Je weet wat VCA is. Je weet dat je beschermende spullen gratis krijgt en altijd draagt.',
        remember: 'Helm en schoenen verplicht? Draag ze altijd, ook als niemand kijkt.',
        // Wie kan je helpen: je werfleider · je interimkantoor · de preventieadviseur · Toezicht op
        //   het Welzijn op het Werk.
        help: ['leidinggevende', 'interimkantoor'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.build.1.sc1',
            picture: 'Mohammed bij het hek van een werf. Op het hek een bord met een helm en schoenen.',
            lines: [
              'Mohammed gaat via een interimkantoor op een werf werken.',
              'Het kantoor vraagt: "Heb je VCA?"',
              'Mohammed weet niet wat dat is.',
              'Op het hek hangt een bord: "Helm en veiligheidsschoenen verplicht."',
            ],
          },
          // ⚖️ check: persoonlijke beschermingsmiddelen (PBM) krijg je gratis van je werkgever (Codex welzijn op het werk, boek IX, titel 2, art. IX.2-5 en IX.2-7; werk.belgie.be; niet geopend 30 okt 2026)
          // ⚖️ check: de werknemer moet de PBM gebruiken zoals voorgeschreven (Welzijnswet 4 augustus 1996, art. 6)
          // ⚖️ check: bij interimwerk zorgt het bedrijf waar je werkt (de gebruiker) mee voor je veiligheid; wie de PBM geeft, staat in de werkpostfiche (KB 19 februari 1997 uitzendkrachten; federgon.be; niet geopend)
          {
            kind: 'rule',
            id: 'r.be.l.build.1.ru1',
            emoji: '⛑️',
            title: 'Helm en schoenen verplicht? Draag ze altijd, ook als niemand kijkt.',
            body: [
              'VCA is een cursus met een examen over veilig werken.',
              'Beschermende spullen heten ook PBM.',
              'Je werkgever geeft ze gratis.',
              'Moet je ze dragen? Dan doe je dat ook.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: VCA (in België: BeSaCC-VCA) is geen wet, maar veel bouwbedrijven en interimkantoren vragen het (besacc-vca.be; zoekresultaat; vlaanderen.be opleidingsdatabank "BA4-BA5-VCA")
          {
            kind: 'truefalse',
            id: 'r.be.l.build.1.tf1',
            statement: 'VCA is een diploma over veilig werken.',
            answer: true,
            why: 'VCA is een cursus met een examen. Je leert de gevaren op de werf kennen. VCA is geen wet. Maar veel bedrijven laten je zonder VCA niet op de werf. Vraag wie de cursus betaalt.',
          },
          // ⚖️ check: PBM gratis van de werkgever (Codex boek IX, titel 2); bij interim: zie de werkpostfiche (KB 19 februari 1997)
          {
            kind: 'whatdo',
            id: 'r.be.l.build.1.wd1',
            situation: 'Mohammed krijgt geen veiligheidsschoenen. Hij heeft alleen gewone sneakers. Wat kan Mohammed het beste doen?',
            options: [
              { id: 'a', text: 'Hij werkt op zijn sneakers. Het is maar voor één dag.', best: false, feedback: 'Dat is logisch. Maar een nagel gaat zo door een sneaker.' },
              { id: 'b', text: 'Hij koopt zelf schoenen, en betaalt ze van zijn loon.', best: false, feedback: 'Goed bedoeld. Maar zijn werkgever moet ze gratis geven.' },
              { id: 'c', text: 'Hij vraagt de werfleider om veiligheidsschoenen.', best: true, feedback: 'Goed. De werfleider is de baas op de werf. Die regelt dit.' },
            ],
            why: 'Beschermende spullen heten ook PBM: persoonlijke beschermingsmiddelen. Denk aan een helm, schoenen, een bril en een fluohesje. Je werkgever geeft ze gratis. Werk je via een interimkantoor? Vraag dan wie ze geeft.',
          },
          // ⚖️ check: de werknemer moet de voorgeschreven PBM correct gebruiken (Welzijnswet art. 6; Codex boek IX, titel 2)
          {
            kind: 'truefalse',
            id: 'r.be.l.build.1.tf2',
            statement: 'Een helm hoef je alleen op als de baas kijkt.',
            answer: false,
            why: 'Moet je een helm of andere bescherming dragen? Dan moet je dat ook doen. Ook als het warm is. Ook als niemand kijkt. Zo bescherm je jezelf.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.build.1.wa1',
            question: 'Je werkt via een interimkantoor. Je wilt een VCA-cursus doen. Wie vraag je het?',
            options: [
              { id: 'a', who: 'interimkantoor', best: true, feedback: 'Goed. Vraag ook wie de cursus betaalt.' },
              { id: 'b', who: 'rva', best: false, feedback: 'De RVA gaat over werkloosheid. Vraag het eerst bij je werk.' },
              { id: 'c', who: 'tsw', best: false, feedback: 'Een inspectie controleert bedrijven. Ze geeft geen cursussen.' },
            ],
            why: 'Je interimkantoor of je werkgever weet welke cursus je nodig hebt. Ook de VDAB geeft soms VCA-cursussen.',
          },
          { kind: 'model', id: 'r.be.l.build.1.mo1', context: 'Je hebt nog geen veiligheidsschoenen.', nl: 'Ik heb nog geen veiligheidsschoenen. Waar krijg ik die?' },
        ],
      },
      {
        // Les B.2 · Toolbox en eerst even kijken
        id: 'r.be.l.build.2',
        title: 'Toolbox en eerst even kijken',
        goal: 'Je gaat naar de toolbox en je kijkt eerst rond. Je loopt nooit onder een last.',
        remember: 'Eerst kijken, dan beginnen. Loop nooit onder een hangende last.',
        // Wie kan je helpen: je werfleider · de preventieadviseur · Toezicht op het Welzijn op het
        //   Werk.
        help: ['leidinggevende'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.build.2.sc1',
            picture: 'Kevin op een werf. Boven het pad hangt een betonblok aan een kraan.',
            lines: [
              'Elke maandag is er een toolbox over veiligheid.',
              'Daarna moet Kevin snel een plaat halen.',
              'De kortste weg is onder de kraan door.',
              'Aan de kraan hangt een zwaar blok.',
            ],
          },
          // ⚖️ check: bij valgevaar moet de werkgever zorgen voor bescherming, eerst collectief (leuning, net), anders persoonlijk (harnas) (Codex welzijn op het werk, boek IV, titel 5, tijdelijke werkzaamheden op hoogte; boek III, titel 1; werk.belgie.be; zoekresultaat)
          // ⚖️ check: vanaf 2 meter is valbeveiliging in de praktijk altijd nodig (in Nederland 2,5 meter); de Codex noemt volgens de zoekresultaten geen vaste hoogte: het hangt af van de risicoanalyse, dus ook lager kan het nodig zijn (werk.belgie.be "tijdelijke werkzaamheden op hoogten"; superstruct.com "veilig werken op hoogte"; zoekresultaat 30 okt 2026) — TWIJFEL: graag nakijken
          {
            kind: 'rule',
            id: 'r.be.l.build.2.ru1',
            emoji: '🏗️',
            title: 'Eerst kijken, dan beginnen. Loop nooit onder een hangende last.',
            body: [
              'Kijk vlak voor je begint: wat kan er misgaan?',
              'Loop nooit onder een hangende last.',
              'Vanaf 2 meter hoogte moet er bescherming tegen vallen zijn.',
              'Zie je gevaar? Begin niet, en meld het.',
            ],
            rule: 'geschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.build.2.wd1',
            situation: 'Kevin wil de plaat halen. Wat kan Kevin het beste doen?',
            options: [
              { id: 'a', text: 'Hij loopt snel onder het blok door. Het hangt toch vast.', best: false, feedback: 'Dat is logisch. Maar een last kan altijd vallen.' },
              { id: 'b', text: 'Hij loopt om, ook al duurt dat langer.', best: true, feedback: 'Goed. Onder een hangende last loop je nooit.' },
              { id: 'c', text: 'Hij roept naar de kraanman dat hij eraan komt.', best: false, feedback: 'Goed bedoeld. Maar onder de last blijft het gevaarlijk.' },
            ],
            why: 'Loop nooit onder een hangende last. Die kan vallen of zwaaien. Een paar minuten omlopen is altijd beter.',
          },
          // ⚖️ check: vanaf 2 meter moet er valbeveiliging zijn: eerst een leuning of net, anders een harnas (Codex boek IV, titel 5; zie de noot bij de regel; TWIJFEL over de vaste hoogte)
          {
            kind: 'truefalse',
            id: 'r.be.l.build.2.tf1',
            statement: 'Werk je hoger dan 2 meter? Dan moet er bescherming tegen vallen zijn.',
            answer: true,
            why: 'Vanaf 2 meter is er zeker valgevaar. Soms is bescherming ook lager nodig. Je werkgever zorgt eerst voor een leuning of een net. Lukt dat niet? Dan een harnas. Is er niets? Ga dan niet verder, en zeg het meteen.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.build.2.wd2',
            situation: 'In de toolbox zegt de werfleider: "Doe altijd eerst een LMRA." Wat betekent dat?',
            options: [
              { id: 'a', text: 'Je kijkt vlak voor je begint wat er mis kan gaan.', best: true, feedback: 'Goed. Zo zie je gevaar op tijd.' },
              { id: 'b', text: 'Je vult aan het eind van de dag je uren in.', best: false, feedback: 'Nee. Het gaat over veiligheid, niet over uren.' },
              { id: 'c', text: 'Je wacht tot de werfleider het werk eerst voordoet.', best: false, feedback: 'Nee. Je kijkt zelf, vlak voor je begint.' },
            ],
            why: 'LMRA betekent: laatste minuut risicoanalyse. Vlak voor je begint, kijk je even rond. Wat kan er misgaan? Wat heb je nodig? Zie je gevaar? Begin dan niet, en meld het.',
          },
          { kind: 'model', id: 'r.be.l.build.2.mo1', context: 'Je ziet gevaar vlak voor je begint.', nl: 'Ik begin nog niet. Er hangt een last boven het pad.' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.build.1.mo1': [
      { text: 'Ik werk vandaag wel even op mijn gewone schoenen.', feedback: 'Dan kun je je voeten pijn doen. Vraag om veiligheidsschoenen.' },
      { text: 'Ik heb geen veiligheidsschoenen. Mag ik die van een collega?', feedback: 'Schoenen moeten passen. Vraag je baas om eigen veiligheidsschoenen.' },
    ],
    'r.be.l.build.2.mo1': [
      { text: 'Er hangt iets boven het pad. Ik loop er wel snel onder door.', feedback: 'Dat is gevaarlijk. Begin pas als het veilig is.' },
      { text: 'Ik vind het hier niet fijn. Ik begin later wel.', feedback: 'Dan weet niemand wat het gevaar is. Zeg wat je ziet.' },
    ],
  },
  advice: {
    'r.be.l.build.1.ru1': 'advice',
    'r.be.l.build.2.ru1': 'advice',
  },
};
