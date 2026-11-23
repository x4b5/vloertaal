import type { BeUnit } from '../types';

/**
 * Sector kinderopvang (België) · Werken in de kinderopvang: de Belgische versie van de sectorunit
 * r.kinderopvang (src/content/regels/units/sector2.ts, `kinderopvangUnit`). Hier verschilt veel:
 * Vlaanderen heeft geen personenregister en geen VOG, maar een uittreksel uit het strafregister
 * voor werk met kinderen. Het vierogenprincipe is in Vlaanderen geen wettelijke regel (wel goede
 * praktijk); medicijnen geeft de opvang alleen met een voorschrift en een briefje van de ouders
 * (Opgroeien). Vlaamse woorden: kinderbegeleider, verantwoordelijke, kinderdagverblijf, interimkantoor.
 *
 * `// ⚖️ check:` = een feit dat de deskundige nakijkt, met de bron. Opgezocht op 23 nov 2026 uit
 * kennis van de regels; opgroeien.be, justitie.belgium.be en vlaanderen.be zijn niet geopend.
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.kinderopvang',
    title: 'Werken in de kinderopvang',
    emoji: '🧸',
    color: '#c0567a',
    lessons: [
      {
        // Les K.1 · Eerst je uittreksel, en open werken
        id: 'r.be.l.kinderopvang.1',
        title: 'Eerst je uittreksel, en open werken',
        goal: 'Je werkt pas met kinderen als je uittreksel uit het strafregister in orde is. Je werkt open.',
        remember: 'Eerst je uittreksel uit het strafregister. Werk zo dat een collega kan meekijken.',
        // Wie kan je helpen: de verantwoordelijke van de opvang · je interimkantoor · een ervaren
        //   collega.
        help: ['leidinggevende', 'interimkantoor', 'collega'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.kinderopvang.1.sc1',
            picture: 'Nadia met haar gsm bij de deur van een kinderdagverblijf. Door het raam zie je peuters spelen.',
            lines: [
              'Nadia gaat via een interimkantoor in een kinderdagverblijf werken.',
              'Ze moet haar uittreksel uit het strafregister nog aanvragen.',
              'De verantwoordelijke zegt: "Kom morgen maar al meedraaien."',
            ],
          },
          // ⚖️ check: wie in de kinderopvang werkt, heeft een uittreksel uit het strafregister voor werk met minderjarigen nodig, vóór de start (besluit van de Vlaamse Regering van 22 november 2013 kinderopvang van baby's en peuters; Wetboek van strafvordering art. 596, tweede lid; opgroeien.be; niet geopend)
          // ⚖️ check: je vraagt het aan bij je gemeente of online (justitie.belgium.be, Just-on-web)
          // ⚖️ check: ook stagiairs en interimkrachten (de voorwaarden van Opgroeien gelden voor iedereen die bij de kinderen werkt) — TWIJFEL: nakijken voor stagiairs
          // ⚖️ check: open werken (een collega kan meekijken) is in Vlaanderen geen wettelijke regel, wel goede praktijk en vaak een afspraak van de opvang (Opgroeien, beleid rond grensoverschrijdend gedrag) — TWIJFEL
          {
            kind: 'rule',
            id: 'r.be.l.kinderopvang.1.ru1',
            emoji: '🧒',
            title: 'Eerst je uittreksel uit het strafregister. Werk zo dat een collega kan meekijken.',
            body: [
              'In de kinderopvang heb je een uittreksel uit het strafregister nodig.',
              'Het is een speciaal uittreksel, voor werk met kinderen. Je vraagt het bij je gemeente.',
              'Je geeft het af voor je begint. Ook stagiairs en interimkrachten.',
              'Werk zo dat een collega je kan zien of horen. Dat beschermt de kinderen en jou.',
            ],
            rule: 'geschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.kinderopvang.1.wd1',
            situation: 'Nadia heeft haar uittreksel nog niet. Wat kan Nadia het beste doen?',
            options: [
              { id: 'a', text: 'Ze gaat morgen gewoon. Het is maar meedraaien.', best: false, feedback: 'Dat snap ik. Maar ook meedraaien mag pas met het uittreksel.' },
              { id: 'b', text: 'Ze gaat, maar blijft uit de buurt van de kinderen.', best: false, feedback: 'Goed bedoeld. Maar in een kinderdagverblijf zijn overal kinderen.' },
              { id: 'c', text: 'Ze vraagt het uittreksel meteen aan, en komt daarna.', best: true, feedback: 'Goed. Zo is alles in orde voor ze begint.' },
            ],
            why: 'Je mag pas met kinderen werken als je uittreksel in orde is. Vraag het meteen aan bij je gemeente.',
          },
          // ⚖️ check: open werken is in Vlaanderen geen wet, wel goede praktijk (Opgroeien; VBJK) — TWIJFEL: of een besluit het vraagt
          {
            kind: 'truefalse',
            id: 'r.be.l.kinderopvang.1.tf1',
            statement: 'Het is goed als een collega je altijd kan zien of horen bij de kinderen.',
            answer: true,
            why: 'Zo werk je open. Dat beschermt de kinderen, en jou. Denk aan ramen, een open deur of een collega die binnenloopt.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.kinderopvang.1.wa1',
            question: 'Je werkt via een interimkantoor. Je weet niet of je papieren in orde zijn. Wie vraag je het?',
            options: [
              { id: 'a', who: 'interimkantoor', best: true, feedback: 'Goed. Het kantoor en de opvang kijken je papieren samen na.' },
              { id: 'b', who: 'politie', best: false, feedback: 'De politie gaat niet over je papieren voor dit werk.' },
              { id: 'c', who: 'vdab', best: false, feedback: 'De VDAB helpt je werk zoeken. Over je papieren weet het kantoor meer.' },
            ],
            why: 'Je interimkantoor en de opvang kijken je papieren na. Vraag het voor je begint. Werk je niet via een kantoor? Vraag het dan aan de verantwoordelijke.',
          },
          { kind: 'model', id: 'r.be.l.kinderopvang.1.mo1', context: 'De verantwoordelijke vraagt of je morgen al kunt komen.', nl: 'Mijn uittreksel uit het strafregister is er nog niet. Kan ik daarna beginnen?' },
        ],
      },
      {
        // Les K.2 · Medicijnen, een ziek kind en zorgen
        id: 'r.be.l.kinderopvang.2',
        title: 'Medicijnen, een ziek kind en zorgen',
        goal: 'Je geeft alleen een medicijn met een voorschrift en een briefje. Zorgen meld je.',
        remember: 'Medicijnen alleen met een voorschrift en een briefje. Zorgen over een kind? Zeg het.',
        // Wie kan je helpen: de verantwoordelijke van de opvang · een collega · het
        //   Vertrouwenscentrum Kindermishandeling of 1712 (advies bij zorgen).
        help: ['leidinggevende', 'collega'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.kinderopvang.2.sc1',
            picture: 'Esra bij de deur van de peutergroep. Een moeder geeft haar een flesje koortssiroop. Een jongetje houdt haar hand vast.',
            lines: [
              'Esra werkt als kinderbegeleider in een kinderdagverblijf.',
              'Een moeder brengt haar zoon Sem.',
              '"Hij had wat koorts. Geef hem om 2 uur wat siroop," zegt ze.',
              'Er is geen voorschrift en geen briefje.',
            ],
          },
          // ⚖️ check: de opvang geeft een medicijn alleen als een arts of apotheker het voorschreef, met een schriftelijke vraag van de ouders (Opgroeien, "Gezondheid in de kinderopvang": medicatie; besluit van de Vlaamse Regering van 22 november 2013; niet geopend) — TWIJFEL: koortswerende middelen zonder voorschrift
          // ⚖️ check: de opvang heeft een procedure bij vermoedens van kindermishandeling of grensoverschrijdend gedrag (besluit van de Vlaamse Regering van 22 november 2013; Opgroeien; het Vertrouwenscentrum Kindermishandeling)
          {
            kind: 'rule',
            id: 'r.be.l.kinderopvang.2.ru1',
            emoji: '💊',
            title: 'Medicijnen alleen met een voorschrift en een briefje. Zorgen over een kind? Zeg het.',
            body: [
              'Een medicijn geef je alleen als een dokter of apotheker het voorschreef.',
              'De ouders schrijven op wat je moet geven, en hoe laat.',
              'Zie je blauwe plekken of angst bij een kind? Schrijf op wat je ziet.',
              'De opvang heeft vaste stappen bij zorgen. Je verantwoordelijke kent ze.',
            ],
            rule: 'geschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.kinderopvang.2.wd1',
            situation: 'De moeder wil snel weg. Wat kan Esra het beste doen?',
            options: [
              { id: 'a', text: 'Ze vraagt de moeder om eerst het voorschrift en een briefje.', best: true, feedback: 'Goed. Zo is het duidelijk, voor Sem en voor Esra.' },
              { id: 'b', text: 'Ze schrijft het zelf op een briefje, en geeft de siroop om 2 uur.', best: false, feedback: 'Goed bedoeld. Maar zonder voorschrift en briefje van de ouders mag het niet.' },
              { id: 'c', text: 'Ze zegt dat de opvang nooit medicijnen geeft.', best: false, feedback: 'Dat klopt meestal niet. Met een voorschrift en een briefje mag het vaak wel.' },
            ],
            why: 'Zonder voorschrift en briefje geef je geen medicijn. Dat beschermt het kind en jou. Schrijf op wat je gaf, en hoe laat.',
          },
          // ⚖️ check: bij zorgen volg je de stappen van de opvang; geen suggestieve vragen aan het kind (Opgroeien, procedure bij vermoedens; het Vertrouwenscentrum Kindermishandeling)
          {
            kind: 'truefalse',
            id: 'r.be.l.kinderopvang.2.tf1',
            statement: 'Zie je blauwe plekken? Dan vraag je het kind precies wat er gebeurd is.',
            answer: false,
            why: 'Veel vragen kunnen een kind bang maken. Schrijf op wat je ziet, en zeg het tegen je verantwoordelijke. De opvang heeft vaste stappen bij zorgen.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.kinderopvang.2.wd2',
            situation: 'Na het eten is Sem heel warm en moe. Wat kan Esra het beste doen?',
            options: [
              { id: 'a', text: 'Ze geeft hem een paracetamol uit haar eigen tas.', best: false, feedback: 'Zonder voorschrift en briefje geef je geen medicijn.' },
              { id: 'b', text: 'Ze legt hem in bed. Slapen helpt vaak.', best: false, feedback: 'Goed bedoeld. Maar eerst moet ze weten of hij koorts heeft.' },
              { id: 'c', text: 'Ze meet zijn temperatuur, en belt de ouders.', best: true, feedback: 'Goed. De ouders weten dan hoe het met Sem gaat.' },
            ],
            why: 'Is een kind ziek? Meet de temperatuur, zeg het tegen een collega en bel de ouders. Wanneer een kind naar huis moet, staat in de regels van de opvang.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.kinderopvang.2.wa1',
            question: 'Je maakt je zorgen over een kind. Je weet niet wat je moet doen. Wie vraag je het?',
            options: [
              { id: 'a', who: 'collega', best: false, feedback: 'Praten met een collega mag. Maar je verantwoordelijke kent de stappen.' },
              { id: 'b', who: 'leidinggevende', best: true, feedback: 'Goed. Je verantwoordelijke kent de stappen van de opvang.' },
              { id: 'c', who: 'politie', best: false, feedback: 'Is er direct gevaar? Bel 112. Anders vraag je het eerst op je werk.' },
            ],
            why: 'Bij zorgen over een kind volg je de stappen van de opvang. Je verantwoordelijke kent ze. Schrijf op wat je ziet en hoort, met de datum.',
          },
          { kind: 'model', id: 'r.be.l.kinderopvang.2.mo1', context: 'Een moeder vraagt of je haar kind een medicijn geeft.', nl: 'Dat kan, maar mag ik eerst het voorschrift en een briefje van u?' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.kinderopvang.1.mo1': [
      { text: 'Prima, ik kom morgen al. Dat uittreksel komt later wel.', feedback: 'Zonder uittreksel mag je niet met de kinderen werken.' },
      { text: 'Ik weet niet of het mag. Zoek het zelf maar uit.', feedback: 'Dat klinkt onvriendelijk. Zeg wat er nog nodig is.' },
    ],
    'r.be.l.kinderopvang.2.mo1': [
      { text: 'Geen probleem, ik geef het hem straks wel. Daag!', feedback: 'Zonder voorschrift en briefje geef je geen medicijn.' },
      { text: 'Nee, medicijnen geven doen wij hier nooit. Sorry.', feedback: 'Met een voorschrift mag het meestal wel. Vraag dat eerst.' },
    ],
  },
  advice: {
    'r.be.l.kinderopvang.1.ru1': 'advice',
    'r.be.l.kinderopvang.2.ru1': 'advice',
  },
};
