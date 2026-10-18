import type { RuleUnit } from '../types';

/**
 * Unit 12 · Rekenen op je werk (les 12.1–12.3).
 * Converted from docs/entree-aanvulling.md; edit that document first, then this file.
 * `// ⚖️ check:` marks a fact the expert must check (docs/entree-aanvulling.md, deel 6 and 7). The
 * marker is never shown or read aloud. `// Redactie:` notes are for the makers only.
 *
 * Most questions are sums on a drawn card (`card`): at most 2 steps, round numbers, each wrong
 * option a mistake people really make. The amounts are made up ("in dit voorbeeld"). The voice
 * reads times and amounts as words (src/lib/sayNumbers.ts); tests/rulesContent.test.ts checks that
 * every card's numbers add up to its best answer.
 */
export const rekenenUnit: RuleUnit = {
  id: 'r.rekenen',
  title: 'Rekenen op je werk',
  emoji: '🔢',
  color: '#6d597a',
  lessons: [
    {
      // Les 12.1 · Uren en je rooster narekenen
      id: 'r.l.rekenen.1',
      title: 'Uren en je rooster narekenen',
      goal: 'Je rekent uit hoeveel uur je werkt, met de pauze eraf. Je checkt je rooster.',
      remember: 'Je werktijd is: eindtijd min begintijd, min je pauze.',
      // Wie kan je helpen: je leidinggevende of de planner · de loonadministratie.
      help: ['leidinggevende', 'hr'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.rekenen.1.sc1',
          picture: 'Dewi kijkt naar haar rooster in een app op haar telefoon.',
          lines: [
            'Dewi werkt in een verzorgingshuis.',
            'Ze heeft een contract voor 24 uur per week.',
            'In de app staat haar nieuwe rooster.',
            'Ze wil weten of het klopt.',
          ],
        },
        // ⚖️ check: Soms wel, bijvoorbeeld als je moet blijven voor cliënten ⚖️ (twijfel 9).
        {
          kind: 'rule',
          id: 'r.l.rekenen.1.ru1',
          emoji: '🕒',
          title: 'Je werktijd is: eindtijd min begintijd, min je pauze.',
          body: [
            'Werktijd is: eindtijd min begintijd, min de pauze.',
            'Een pauze is vaak niet betaald. Soms wel. Kijk in je contract of cao.',
            'Tel de uren van alle dagen op. Klopt het niet met je contract? Vraag het na.',
          ],
          rule: 'geschreven',
          key: true,
        },
        // ⚖️ check: Soms wel, bijvoorbeeld als je moet blijven voor cliënten ⚖️.
        {
          kind: 'card',
          id: 'r.l.rekenen.1.ca1',
          card: {
            type: 'rooster',
            title: 'Rooster',
            sub: 'Maandag',
            rows: [
              { label: 'Begin', value: '7.30 uur' },
              { label: 'Einde', value: '16.00 uur' },
              { label: 'Pauze', value: '30 minuten, niet betaald', hit: true },
              { label: 'Werktijd', value: '?', answer: '8 uur' },
            ],
          },
          question: 'Hoeveel uur werkt Dewi op maandag?',
          options: [
            { id: 'a', text: '8,5 uur', best: false, feedback: 'Je bent de pauze vergeten. Die gaat eraf.' },
            { id: 'b', text: '8 uur', best: true, feedback: 'Goed. Dat klopt.' },
            { id: 'c', text: '9 uur', best: false, feedback: 'Tel nog een keer, van 7.30 tot 16.00 uur.' },
          ],
          sum: [
            'Van 7.30 tot 16.00 uur is 8,5 uur.',
            'Min een half uur pauze. Dat is 8 uur.',
          ],
          why: 'Werktijd is: eindtijd min begintijd, min de pauze. Een pauze is vaak niet betaald. Soms wel, bijvoorbeeld als je moet blijven voor cliënten. Kijk in je contract of cao.',
        },
        {
          kind: 'card',
          id: 'r.l.rekenen.1.ca2',
          card: {
            type: 'rooster',
            title: 'Weekrooster',
            sub: 'Contract: 24 uur',
            rows: [
              { label: 'Maandag', value: '8 uur', hit: true },
              { label: 'Woensdag', value: '6 uur', hit: true },
              { label: 'Vrijdag', value: '6 uur', hit: true },
              { label: 'Zaterdag', value: '6 uur', hit: true },
            ],
          },
          question: 'Klopt het rooster van Dewi?',
          options: [
            { id: 'a', text: 'Ja, dat is precies 24 uur.', best: false, feedback: 'Tel nog een keer: 8 + 6 + 6 + 6.' },
            { id: 'b', text: 'Nee, het is 2 uur te weinig.', best: false, feedback: 'Andersom. Het is meer dan 24 uur.' },
            { id: 'c', text: 'Nee, het is 2 uur te veel.', best: true, feedback: 'Goed. Dat klopt.' },
          ],
          sum: ['8 + 6 + 6 + 6 = 26 uur.', 'Dat is 2 uur meer dan 24.'],
          why: 'Tel de uren van alle dagen op. Klopt het niet met je contract? Vraag het na. Werk je toch meer? Schrijf die uren op, met de datum.',
        },
        {
          kind: 'truefalse',
          id: 'r.l.rekenen.1.tf1',
          statement: '7,5 uur is hetzelfde als 7 uur en 30 minuten.',
          answer: true,
          why: 'Een half uur is 30 minuten. Dus 0,5 uur is 30 minuten. Een kwartier is 15 minuten: dat is 0,25 uur. Op een loonstrook staan uren vaak zo, met een komma.',
        },
        {
          kind: 'whoask',
          id: 'r.l.rekenen.1.wa1',
          question: 'Je rooster klopt niet met je contract. Wie vraag je het eerst?',
          options: [
            { id: 'a', who: 'leidinggevende', best: true, feedback: 'Goed. Je leidinggevende of de planner maakt het rooster.' },
            { id: 'b', who: 'hr', best: false, feedback: 'De loonadministratie gaat over je loon. Het rooster maakt de planner.' },
            { id: 'c', who: 'uwv', best: false, feedback: 'UWV gaat niet over je rooster.' },
          ],
          why: 'Vraag het eerst aan je leidinggevende of de planner. Gaat het om je loon? Dan helpt de loonadministratie.',
        },
        { kind: 'model', id: 'r.l.rekenen.1.mo1', context: 'Je rooster heeft meer uren dan je contract.', nl: 'Op mijn rooster staan 26 uur. Mijn contract is 24 uur. Klopt dat?' },
      ],
    },
    {
      // Les 12.2 · Geld en loon per uur
      id: 'r.l.rekenen.2',
      title: 'Geld en loon per uur',
      goal: 'Je rekent je loon per week globaal uit. Je rekent met procenten en je telt wisselgeld.',
      remember: 'Uren keer uurloon is je bruto loon. Reken het na.',
      // Wie kan je helpen: de loonadministratie · rijksoverheid.nl (minimumloon).
      help: ['hr'],
      steps: [
        // Redactie: 15 euro is een rekenvoorbeeld, niet het minimumloon. Noem het minimumloon niet. ⚖️
        {
          kind: 'scene',
          id: 'r.l.rekenen.2.sc1',
          picture: 'Mohammed met de rekenmachine op zijn telefoon. Naast hem een schriftje met uren.',
          lines: [
            'Mohammed werkt in een magazijn.',
            'Deze week werkte hij 20 uur.',
            'In dit voorbeeld krijgt hij 15 euro bruto per uur.',
            'Hij wil weten wat hij deze week verdient.',
          ],
        },
        // ⚖️ check: Vakantiegeld is minstens 8 procent van je bruto loon ⚖️.
        {
          kind: 'rule',
          id: 'r.l.rekenen.2.ru1',
          emoji: '🧮',
          title: 'Uren keer uurloon is je bruto loon. Reken het na.',
          body: [
            'Uren keer uurloon is je bruto loon.',
            'Netto krijg je minder. Dat komt vooral door de loonheffing.',
            'Vakantiegeld is minstens 8 procent van je bruto loon.',
            'Zo kun je checken of het klopt.',
          ],
          rule: 'geschreven',
        },
        // The doc's "(zie les 4.1)" is left out: the app does not show lesson numbers.
        {
          kind: 'card',
          id: 'r.l.rekenen.2.ca1',
          card: {
            type: 'loonstrook',
            title: 'Loonstrook',
            sub: 'Deze week',
            rows: [
              { label: 'Gewerkte uren', value: '20 uur', hit: true },
              { label: 'Bruto per uur', value: '15 euro', hit: true },
              { label: 'Bruto loon', value: '?', answer: '300 euro' },
            ],
          },
          question: 'Hoeveel verdient Mohammed deze week bruto?',
          options: [
            { id: 'a', text: '300 euro', best: true, feedback: 'Goed. Dat klopt.' },
            { id: 'b', text: '35 euro', best: false, feedback: 'Je telde op. Hier moet je keer doen.' },
            { id: 'c', text: '200 euro', best: false, feedback: 'Kijk nog een keer: 20 keer 15.' },
          ],
          sum: ['20 × 15 = 300 euro.', '(10 × 15 = 150, en dat 2 keer.)'],
          why: 'Uren keer uurloon is je bruto loon. Netto krijg je minder. Dat komt vooral door de loonheffing. Hoeveel het minimumloon is, staat op rijksoverheid.nl.',
        },
        // ⚖️ check: Vakantiegeld is minstens 8 procent van je bruto loon ⚖️.
        {
          kind: 'card',
          id: 'r.l.rekenen.2.ca2',
          card: {
            type: 'loonstrook',
            title: 'Loonstrook',
            sub: 'In dit voorbeeld',
            rows: [
              { label: 'Bruto loon', value: '1.000 euro', hit: true },
              { label: 'Vakantiegeld', value: '8 procent', hit: true },
              { label: 'Vakantiegeld in euro', value: '?', answer: '80 euro' },
            ],
          },
          question: 'In dit voorbeeld verdient Esra 1.000 euro bruto. Ze krijgt 8 procent vakantiegeld. Hoeveel is dat?',
          options: [
            { id: 'a', text: '8 euro', best: false, feedback: 'Te weinig. 8 procent is 8 van elke 100 euro.' },
            { id: 'b', text: '800 euro', best: false, feedback: 'Te veel. Dat zou bijna al haar loon zijn.' },
            { id: 'c', text: '80 euro', best: true, feedback: 'Goed. Dat klopt.' },
          ],
          sum: [
            '1.000 euro is 10 keer 100 euro.',
            'Van elke 100 euro is 8 euro vakantiegeld.',
            '10 × 8 = 80 euro.',
          ],
          why: 'Procent betekent: van elke 100. Vakantiegeld is minstens 8 procent van je bruto loon. Zo kun je checken of het klopt.',
        },
        // The why says "euro" after each amount, so the voice reads it as money (sayNumbers).
        {
          kind: 'truefalse',
          id: 'r.l.rekenen.2.tf1',
          statement: 'Een klant betaalt 5 euro voor 3,20 euro. Dan geef je 1,80 euro terug.',
          answer: true,
          why: 'Van 3,20 euro naar 4 euro is 80 cent. Van 4 euro naar 5 euro is 1 euro. Samen is dat 1,80 euro. Zo tel je terug vanaf het bedrag. Dat is makkelijker dan aftrekken.',
        },
        {
          kind: 'whoask',
          id: 'r.l.rekenen.2.wa1',
          question: 'Je bruto loon klopt niet met je uren keer je uurloon. Wie vraag je het?',
          options: [
            { id: 'a', who: 'gemeente', best: false, feedback: 'De gemeente gaat niet over je loon.' },
            { id: 'b', who: 'hr', best: true, feedback: 'Goed. De loonadministratie kan het nakijken.' },
            { id: 'c', who: 'bedrijfsarts', best: false, feedback: 'De bedrijfsarts gaat over je gezondheid, niet over je loon.' },
          ],
          why: 'De loonadministratie maakt je loonstrook. Reken het na, en vraag het daar. Het minimumloon staat op rijksoverheid.nl.',
        },
        { kind: 'model', id: 'r.l.rekenen.2.mo1', context: 'Je rekent je loon van deze week na.', nl: 'Ik heb 20 uur gewerkt. Dan krijg ik 300 euro bruto, toch?' },
      ],
    },
    {
      // Les 12.3 · Maten, gewichten en tellen
      id: 'r.l.rekenen.3',
      title: 'Maten, gewichten en tellen',
      goal: 'Je rekent met kilo, gram, liter en milliliter, en je telt voorraad slim.',
      remember: 'Tel slim: één laag, keer het aantal lagen. Meet af, en gok niet.',
      steps: [
        {
          kind: 'scene',
          id: 'r.l.rekenen.3.sc1',
          picture: 'Piotr bij een pallet met dozen in lagen. Op een klembord: de pakbon.',
          lines: [
            'Piotr werkt in een magazijn.',
            'Er komt een pallet binnen. Op de pakbon staat: 40 dozen.',
            'Piotr moet checken of het klopt.',
            'Hij ziet 5 lagen. In elke laag staan 8 dozen.',
          ],
        },
        {
          kind: 'rule',
          id: 'r.l.rekenen.3.ru1',
          emoji: '📦',
          title: 'Tel slim: één laag, keer het aantal lagen. Meet af, en gok niet.',
          body: [
            'Tel niet elke doos los. Tel één laag, en doe dat keer het aantal lagen.',
            'Klopt het niet met de pakbon? Meld het meteen, vóór je tekent.',
            'Meet middelen af met een maatbeker. Gok niet.',
          ],
          rule: 'ongeschreven',
        },
        {
          kind: 'card',
          id: 'r.l.rekenen.3.ca1',
          card: {
            type: 'pakbon',
            title: 'Pakbon',
            rows: [
              { label: 'Aantal dozen', value: '40' },
              { label: 'Op de pallet', value: '5 lagen van 8 dozen', hit: true },
              { label: 'Geteld', value: '?', answer: '40 dozen' },
            ],
          },
          question: 'Hoeveel dozen staan er op de pallet?',
          options: [
            { id: 'a', text: '13 dozen', best: false, feedback: 'Je telde op. Hier moet je keer doen.' },
            { id: 'b', text: '40 dozen', best: true, feedback: 'Goed. Het klopt met de pakbon.' },
            { id: 'c', text: '45 dozen', best: false, feedback: 'Tel nog een keer: 5 keer 8.' },
          ],
          sum: ['5 × 8 = 40 dozen.'],
          why: 'Tel niet elke doos los. Tel één laag, en doe dat keer het aantal lagen. Klopt het niet met de pakbon? Meld het meteen, vóór je tekent voor ontvangst.',
        },
        {
          kind: 'card',
          id: 'r.l.rekenen.3.ca2',
          card: {
            type: 'etiket',
            title: 'Allesreiniger',
            rows: [{ label: 'Gebruik', value: '20 ml per liter water', hit: true }],
          },
          question: 'Esra vult een emmer met 5 liter water. Hoeveel middel doet ze erin?',
          options: [
            { id: 'a', text: '100 ml', best: true, feedback: 'Goed. Dat klopt.' },
            { id: 'b', text: '25 ml', best: false, feedback: 'Je telde op. Hier moet je keer doen.' },
            { id: 'c', text: '20 ml', best: false, feedback: 'Dat is voor 1 liter. De emmer is 5 liter.' },
          ],
          sum: ['20 ml voor elke liter.', '5 × 20 = 100 ml.'],
          why: 'Meet het af met een maatbeker. Gok niet. Meer middel maakt niet schoner. Het is wel slecht voor je huid en voor het milieu.',
        },
        {
          kind: 'truefalse',
          id: 'r.l.rekenen.3.tf1',
          statement: 'Een doos van 12 kilo is lichter dan een doos van 12.000 gram.',
          answer: false,
          why: 'Ze zijn even zwaar. 1 kilo is 1000 gram, dus 12 kilo is 12.000 gram. Goed om te weten: 1 liter is 1000 milliliter (ml). En 1 meter is 100 centimeter.',
        },
        { kind: 'model', id: 'r.l.rekenen.3.mo1', context: 'Je telt minder dozen dan op de pakbon staat.', nl: 'Op de pakbon staan 40 dozen. Ik tel er 38. Wil je meekijken?' },
      ],
    },
  ],
};
