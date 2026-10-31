import type { BeUnit } from '../types';

/**
 * Unit 12 (België) · Rekenen op je werk: de Belgische versie van src/content/regels/units/rekenen.ts
 * (docs/werkregels-belgie.md). Zelfde lessen en stap-id's, met "r.be." vooraan. Vlaamse woorden:
 * uurrooster, loonbrief, brutoloon, RSZ, overloon, personeelsdienst.
 *
 * De meeste vragen zijn sommen op een kaartje (`card`): ronde getallen, elke foute optie een fout die
 * mensen echt maken. De bedragen zijn verzonnen ("in dit voorbeeld"). Echt zijn alleen de regels: de
 * pauze na 6 uur, het overloon van 50 procent en de RSZ van 13,07 procent. De Nederlandse som met
 * "8 procent vakantiegeld" is weg: dat geldt niet in België (zie loon.ts, les 3). De ziekte-som met
 * 70 procent is vervangen door de RSZ als bedrag. tests/rulesBeCards.test.ts rekent elke som na.
 *
 * `// ⚖️ check:` = een feit dat de deskundige nakijkt, met de bron. De marker wordt nooit getoond
 * of voorgelezen. Opgezocht op 30 okt 2026. werk.belgie.be was in deze sessie niet te openen
 * (WebFetch: host niet bereikbaar, 30 okt 2026). `// Redactie:` is voor de makers.
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.rekenen',
    title: 'Rekenen op je werk',
    emoji: '🔢',
    color: '#6d597a',
    lessons: [
      {
        // Les 12.1 · Uren en je uurrooster narekenen
        id: 'r.be.l.rekenen.1',
        title: 'Uren en je uurrooster narekenen',
        goal: 'Je rekent uit hoeveel uur je werkt, met de pauze eraf. Je kijkt je uurrooster na.',
        remember: 'Je werktijd is: eindtijd min begintijd, min je pauze.',
        // Wie kan je helpen: je leidinggevende of de planner · de personeelsdienst.
        help: ['leidinggevende', 'hr'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.rekenen.1.sc1',
            picture: 'Nadia kijkt naar haar uurrooster in een app op haar telefoon.',
            lines: [
              'Nadia werkt in een woonzorgcentrum.',
              'Ze heeft een contract voor 24 uur per week.',
              'In de app staat haar nieuwe uurrooster.',
              'Ze wil weten of het klopt.',
            ],
          },
          // ⚖️ check: de pauze is meestal geen arbeidstijd en dus niet betaald; soms wel, volgens je contract, het arbeidsreglement of je sector (Arbeidswet 16 maart 1971, art. 19; securex.be "moeten er pauzes toegekend worden")
          {
            kind: 'rule',
            id: 'r.be.l.rekenen.1.ru1',
            emoji: '🕒',
            title: 'Je werktijd is: eindtijd min begintijd, min je pauze.',
            body: [
              'Werktijd is: eindtijd min begintijd, min de pauze.',
              'Een pauze is vaak niet betaald. Soms wel. Kijk in je contract.',
              'Tel de uren van alle dagen op. Klopt het niet met je contract? Vraag het na.',
            ],
            rule: 'geschreven',
            key: true,
          },
          // ⚖️ check: de pauze is meestal niet betaald; soms wel, bijvoorbeeld als je moet blijven voor bewoners (securex.be "moeten er pauzes toegekend worden")
          {
            kind: 'card',
            id: 'r.be.l.rekenen.1.ca1',
            card: {
              type: 'rooster',
              title: 'Uurrooster',
              sub: 'Maandag',
              rows: [
                { label: 'Begin', value: '7.30 uur' },
                { label: 'Einde', value: '16.00 uur' },
                { label: 'Pauze', value: '30 minuten, niet betaald', hit: true },
                { label: 'Werktijd', value: '?', answer: '8 uur' },
              ],
            },
            question: 'Hoeveel uur werkt Nadia op maandag?',
            options: [
              { id: 'a', text: '8,5 uur', best: false, feedback: 'Je bent de pauze vergeten. Die gaat eraf.' },
              { id: 'b', text: '8 uur', best: true, feedback: 'Goed. Dat klopt.' },
              { id: 'c', text: '9 uur', best: false, feedback: 'Tel nog een keer, van 7.30 tot 16.00 uur.' },
            ],
            sum: [
              'Van 7.30 tot 16.00 uur is 8,5 uur.',
              'Min een half uur pauze. Dat is 8 uur.',
            ],
            why: 'Werktijd is: eindtijd min begintijd, min de pauze. Een pauze is vaak niet betaald. Soms wel, bijvoorbeeld als je moet blijven voor de bewoners. Kijk in je contract.',
          },
          {
            kind: 'card',
            id: 'r.be.l.rekenen.1.ca2',
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
            question: 'Klopt het uurrooster van Nadia?',
            options: [
              { id: 'a', text: 'Ja, dat is precies 24 uur.', best: false, feedback: 'Tel nog een keer: 8 + 6 + 6 + 6.' },
              { id: 'b', text: 'Nee, het is 2 uur te weinig.', best: false, feedback: 'Andersom. Het is meer dan 24 uur.' },
              { id: 'c', text: 'Nee, het is 2 uur te veel.', best: true, feedback: 'Goed. Dat klopt.' },
            ],
            sum: ['8 + 6 + 6 + 6 = 26 uur.', 'Dat is 2 uur meer dan 24.'],
            why: 'Tel de uren van alle dagen op. Klopt het niet met je contract? Vraag het na. Werk je toch meer? Schrijf die uren op, met de datum.',
          },
          // Pauze na 6 uur: de tweede vraag naast r.be.l.tijd.2.tf1.
          // ⚖️ check: werk je meer dan 6 uur, dan krijg je pauze; zegt je sector niets anders, dan minstens 15 minuten (Arbeidswet 16 maart 1971, art. 38quater; securex.be "moeten er pauzes toegekend worden")
          {
            kind: 'card',
            id: 'r.be.l.rekenen.1.ca3',
            card: {
              type: 'rooster',
              title: 'Uurrooster',
              sub: 'Zaterdag',
              rows: [
                { label: 'Begin', value: '8.00 uur' },
                { label: 'Einde', value: '14.30 uur' },
                { label: 'Pauze', value: '0 minuten', hit: true },
              ],
            },
            question: 'Nadia werkt zaterdag 6,5 uur. Er staat geen pauze op haar uurrooster. Klopt dat?',
            options: [
              { id: 'a', text: 'Ja. 6,5 uur is kort genoeg zonder pauze.', best: false, feedback: 'Toch niet. De grens is 6 uur.' },
              { id: 'b', text: 'Nee. Bij meer dan 6 uur werk hoort pauze.', best: true, feedback: 'Goed. Dat klopt.' },
              { id: 'c', text: 'Ja. Pauze hoort pas bij 8 uur werk.', best: false, feedback: 'Nee. De grens is lager: 6 uur.' },
            ],
            sum: [
              'Van 8.00 tot 14.30 uur is 6,5 uur.',
              '6,5 uur is meer dan 6 uur. Dan hoort er pauze bij.',
            ],
            why: 'Werk je meer dan 6 uur? Dan krijg je pauze. Zegt je sector niets anders? Dan is het minstens 15 minuten. Staat er geen pauze op je uurrooster? Vraag het na bij je leidinggevende.',
          },
          // ⚖️ check: rekenregel: een half uur is 30 minuten (0,5 uur); een kwartier is 15 minuten (0,25 uur); uren op een loonbrief staan vaak met een komma (geen wettelijk feit; hetacv.be "je loonbrief")
          {
            kind: 'truefalse',
            id: 'r.be.l.rekenen.1.tf1',
            statement: '7,5 uur is hetzelfde als 7 uur en 30 minuten.',
            answer: true,
            why: 'Een half uur is 30 minuten. Dus 0,5 uur is 30 minuten. Een kwartier is 15 minuten: dat is 0,25 uur. Op een loonbrief staan uren vaak zo, met een komma.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.rekenen.1.wa1',
            question: 'Je uurrooster klopt niet met je contract. Wie vraag je het eerst?',
            options: [
              { id: 'a', who: 'leidinggevende', best: true, feedback: 'Goed. Je leidinggevende of de planner maakt het uurrooster.' },
              { id: 'b', who: 'hr', best: false, feedback: 'De personeelsdienst gaat over je loon. Het uurrooster maakt de planner.' },
              { id: 'c', who: 'rva', best: false, feedback: 'De RVA gaat niet over je uurrooster.' },
            ],
            why: 'Vraag het eerst aan je leidinggevende of de planner. Gaat het om je loon? Dan helpt de personeelsdienst.',
          },
          { kind: 'model', id: 'r.be.l.rekenen.1.mo1', context: 'Je uurrooster heeft meer uren dan je contract.', nl: 'Op mijn uurrooster staan 26 uur. Mijn contract is 24 uur. Klopt dat?' },
        ],
      },
      {
        // Les 12.2 · Geld en loon per uur
        // Redactie: 15 en 16 euro per uur zijn rekenvoorbeelden, geen barema. Noem het minimumloon niet.
        id: 'r.be.l.rekenen.2',
        title: 'Geld en loon per uur',
        goal: 'Je rekent uit wat je per week verdient. Je rekent met procenten: overloon en RSZ.',
        remember: 'Uren keer uurloon is je brutoloon. Reken het na.',
        // Wie kan je helpen: de personeelsdienst · het sociaal secretariaat (via je werkgever) · een vakbond.
        help: ['hr', 'vakbond'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.rekenen.2.sc1',
            picture: 'Mohammed met de rekenmachine op zijn telefoon. Naast hem een schriftje met uren.',
            lines: [
              'Mohammed werkt in een magazijn.',
              'Deze week werkte hij 20 uur.',
              'In dit voorbeeld krijgt hij 15 euro bruto per uur.',
              'Hij wil weten wat hij deze week verdient.',
            ],
          },
          // ⚖️ check: nettoloon = brutoloon min RSZ min bedrijfsvoorheffing (securex.be, "hoe wordt het nettoloon berekend")
          // ⚖️ check: overloon: minstens de helft extra (50%) per overuur, op zon- en feestdagen 100% (Arbeidswet 16 maart 1971, art. 29); niet voor de "netto" vrijwillige overuren (securex.be "vrijwillige overuren regeling vanaf april 2026")
          {
            kind: 'rule',
            id: 'r.be.l.rekenen.2.ru1',
            emoji: '🧮',
            title: 'Uren keer uurloon is je brutoloon. Reken het na.',
            body: [
              'Uren keer uurloon is je brutoloon.',
              'Netto krijg je minder. Eerst gaat de RSZ eraf, dan de belasting.',
              'Voor een overuur krijg je meestal minstens de helft extra.',
              'Zo kun je nakijken of het klopt.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: van het brutoloon gaan RSZ en bedrijfsvoorheffing af (securex.be); het minimumloon per functie staat in het barema van je paritair comité (werk.belgie.be, minimumlonen)
          {
            kind: 'card',
            id: 'r.be.l.rekenen.2.ca1',
            card: {
              type: 'loonstrook',
              title: 'Loonbrief',
              sub: 'Deze week',
              rows: [
                { label: 'Gewerkte uren', value: '20 uur', hit: true },
                { label: 'Bruto per uur', value: '15 euro', hit: true },
                { label: 'Brutoloon', value: '?', answer: '300 euro' },
              ],
            },
            question: 'Hoeveel verdient Mohammed deze week bruto?',
            options: [
              { id: 'a', text: '300 euro', best: true, feedback: 'Goed. Dat klopt.' },
              { id: 'b', text: '35 euro', best: false, feedback: 'Je telde op. Hier moet je keer doen.' },
              { id: 'c', text: '200 euro', best: false, feedback: 'Kijk nog een keer: 20 keer 15.' },
            ],
            sum: ['20 × 15 = 300 euro.', '(10 × 15 = 150, en dat 2 keer.)'],
            why: 'Uren keer uurloon is je brutoloon. Netto krijg je minder, door de RSZ en de bedrijfsvoorheffing. Je minimumloon staat in het barema van je paritair comité.',
          },
          // In de plaats van "8 procent vakantiegeld" (Nederland): het overloon.
          // ⚖️ check: overloon: minstens 50 procent extra per overuur, op zondag of een feestdag 100 procent (Arbeidswet 16 maart 1971, art. 29)
          // Redactie: 16 euro per uur en 2 overuren zijn verzonnen. Som: 2 x 16 = 32 euro; 50 procent
          //   van 32 = 16 euro; 32 + 16 = 48 euro.
          {
            kind: 'card',
            id: 'r.be.l.rekenen.2.ca2',
            card: {
              type: 'loonstrook',
              title: 'Loonbrief',
              sub: 'In dit voorbeeld',
              rows: [
                { label: 'Uurloon', value: '16 euro', hit: true },
                { label: 'Overuren', value: '2 uur', hit: true },
                { label: 'Toeslag', value: '50 procent', hit: true },
                { label: 'Loon voor de overuren', value: '?', answer: '48 euro' },
              ],
            },
            question: 'In dit voorbeeld werkt Malik 2 uur over. Hij krijgt 50 procent toeslag. Hoeveel krijgt hij voor die 2 uur?',
            options: [
              { id: 'a', text: '32 euro', best: false, feedback: 'Je bent de toeslag vergeten. Die komt erbij.' },
              { id: 'b', text: '16 euro', best: false, feedback: 'Dat is alleen de toeslag. Het gewone loon komt erbij.' },
              { id: 'c', text: '48 euro', best: true, feedback: 'Goed. Dat klopt.' },
            ],
            sum: [
              '2 × 16 = 32 euro.',
              '50 procent is de helft. De helft van 32 is 16. 32 + 16 = 48 euro.',
            ],
            why: 'Procent betekent: van elke 100. 50 procent is dus de helft. Voor een overuur krijg je meestal minstens 50 procent extra. Op zondag of een feestdag is het 100 procent.',
          },
          // In de plaats van "70 procent bij ziekte" (Nederland): de RSZ als bedrag.
          // ⚖️ check: de persoonlijke RSZ-bijdrage van een bediende is 13,07% van het brutoloon; voor een arbeider berekend op 108% van het brutoloon (securex.be "loonkosten eerste aanwerving"; hetacv.be "je loonbrief"; bijgewerkt oktober 2026)
          // Redactie: 1.000 euro bruto is verzonnen (geen maandloon). Som: 10 x 13,07 = 130,70 euro.
          //   Zonder werkbonus (lage lonen krijgen minder RSZ, zie loon.ts).
          {
            kind: 'card',
            id: 'r.be.l.rekenen.2.ca3',
            card: {
              type: 'loonstrook',
              title: 'Loonbrief',
              sub: 'Bediende, in dit voorbeeld',
              rows: [
                { label: 'Brutoloon', value: '1.000 euro', hit: true },
                { label: 'RSZ', value: '13,07 procent', hit: true },
                { label: 'RSZ in euro', value: '?', answer: '130,70 euro' },
              ],
            },
            question: 'In dit voorbeeld verdient Esra 1.000 euro bruto. Ze is bediende. Hoeveel RSZ gaat eraf?',
            options: [
              { id: 'a', text: '13,07 euro', best: false, feedback: 'Te weinig. 13,07 procent is 13,07 euro van elke 100 euro.' },
              { id: 'b', text: '130,70 euro', best: true, feedback: 'Goed. Dat klopt.' },
              { id: 'c', text: '1.307 euro', best: false, feedback: 'Te veel. Dat is meer dan haar hele loon.' },
            ],
            sum: [
              'Van elke 100 euro gaat 13,07 euro naar de RSZ.',
              '1.000 euro is 10 keer 100 euro. 10 × 13,07 = 130,70 euro.',
            ],
            why: 'De RSZ is 13,07 procent van je brutoloon. Daarna gaat ook de bedrijfsvoorheffing eraf. Ben je arbeider? Dan rekent men de RSZ op een iets hoger bedrag.',
          },
          // ⚖️ check: rekenregel wisselgeld (geen wettelijk feit): van 3,20 naar 4 is 80 cent, van 4 naar 5 is 1 euro, samen 1,80 euro
          {
            kind: 'truefalse',
            id: 'r.be.l.rekenen.2.tf1',
            statement: 'Een klant betaalt 5 euro voor 3,20 euro. Dan geef je 1,80 euro terug.',
            answer: true,
            why: 'Van 3,20 euro naar 4 euro is 80 cent. Van 4 euro naar 5 euro is 1 euro. Samen is dat 1,80 euro. Zo tel je terug vanaf het bedrag. Dat is makkelijker dan aftrekken.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.rekenen.2.wa1',
            question: 'Je brutoloon klopt niet met je uren keer je uurloon. Wie vraag je het?',
            options: [
              { id: 'a', who: 'gemeente', best: false, feedback: 'De gemeente gaat niet over je loon.' },
              { id: 'b', who: 'hr', best: true, feedback: 'Goed. De personeelsdienst kan het nakijken.' },
              { id: 'c', who: 'arbeidsarts', best: false, feedback: 'De arbeidsarts gaat over je gezondheid, niet over je loon.' },
            ],
            why: 'Het sociaal secretariaat maakt vaak je loonbrief. Reken het na, en vraag het bij de personeelsdienst. Klopt het nog niet? Een vakbond helpt je.',
          },
          { kind: 'model', id: 'r.be.l.rekenen.2.mo1', context: 'Je rekent je loon van deze week na.', nl: 'Ik heb 20 uur gewerkt. Dan krijg ik 300 euro bruto, toch?' },
        ],
      },
      {
        // Les 12.3 · Maten, gewichten en tellen (geldt ook in België)
        id: 'r.be.l.rekenen.3',
        title: 'Maten, gewichten en tellen',
        goal: 'Je rekent met kilo, gram, liter en milliliter. Je telt voorraad slim.',
        remember: 'Tel slim: één laag, keer het aantal lagen. Meet af, en gok niet.',
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.rekenen.3.sc1',
            picture: 'Piotr bij een pallet met dozen in lagen. Op een klembord: de pakbon.',
            lines: [
              'Piotr werkt in een magazijn.',
              'Er komt een pallet binnen. Op de pakbon staat: 40 dozen.',
              'Piotr moet nakijken of het klopt.',
              'Hij ziet 5 lagen. In elke laag staan 8 dozen.',
            ],
          },
          {
            kind: 'rule',
            id: 'r.be.l.rekenen.3.ru1',
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
            id: 'r.be.l.rekenen.3.ca1',
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
            id: 'r.be.l.rekenen.3.ca2',
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
          // ⚖️ check: rekenregel (geen wettelijk feit): 1 kilo is 1000 gram, dus 12 kilo is 12.000 gram; 1 liter is 1000 milliliter; 1 meter is 100 centimeter
          {
            kind: 'truefalse',
            id: 'r.be.l.rekenen.3.tf1',
            statement: 'Een doos van 12 kilo is lichter dan een van 12.000 gram.',
            answer: false,
            why: 'Ze zijn even zwaar. 1 kilo is 1000 gram, dus 12 kilo is 12.000 gram. Goed om te weten: 1 liter is 1000 milliliter (ml). En 1 meter is 100 centimeter.',
          },
          { kind: 'model', id: 'r.be.l.rekenen.3.mo1', context: 'Je telt minder dozen dan op de pakbon staat.', nl: 'Op de pakbon staan 40 dozen. Ik tel er 38. Wil je meekijken?' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.rekenen.1.mo1': [
      { text: 'Mijn uurrooster is raar. Er staan volgens mij te veel uren op.', feedback: 'Noem de uren. Dan kan de baas het snel nakijken.' },
      { text: '26 uur is te veel. Ik werk maar 24 uur, en verder niet!', feedback: 'Dat klinkt boos. Vraag eerst of het klopt.' },
    ],
    'r.be.l.rekenen.2.mo1': [
      { text: 'Ik heb deze week gewerkt. Ik weet niet wat ik krijg.', feedback: 'Zeg je uren en het bedrag. Dan kun je het samen nakijken.' },
      { text: 'Ik reken het niet na. De baas doet dat wel goed.', feedback: 'Ook een baas maakt soms fouten. Reken het zelf ook na.' },
    ],
    'r.be.l.rekenen.3.mo1': [
      { text: 'Er staan 40 dozen op de pakbon. Ik teken gewoon voor 40.', feedback: 'Dan teken je voor dozen die er niet zijn.' },
      { text: 'Ik geloof dat er een paar dozen missen, of zo.', feedback: 'Dan weet niemand hoeveel. Noem wat je telt.' },
    ],
  },
  advice: {
    'r.be.l.rekenen.1.ru1': 'advice',
    'r.be.l.rekenen.2.ru1': 'advice',
  },
  kun: [
    ['Ik kan op een uurrooster uitrekenen hoeveel uur ik werk.', '1F', 'lezen'],
    ['Ik kan mijn loon per uur en mijn overloon narekenen.', '1F', 'lezen'],
  ],
};
