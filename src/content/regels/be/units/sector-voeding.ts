import type { BeUnit } from '../types';

/**
 * Sector voedingsindustrie (België) · Werken in de voedingsindustrie: de Belgische versie van de
 * sectorunit r.voeding (src/content/regels/units/sector2.ts, `voedingUnit`). De Europese regels
 * (hygiëne, allergenen, HACCP) zijn dezelfde; anders zijn de controle (het FAVV), het woord
 * autocontrole, en een paar woorden: werkkledij, ploegbaas, koelcel. Arbeiders in de
 * voedingsnijverheid vallen meestal onder paritair comité 118; dat staat niet in de les.
 *
 * `// ⚖️ check:` = een feit dat de deskundige nakijkt, met de bron. Opgezocht op 23 nov 2026 uit
 * kennis van de regels; favv-afsca.be is niet geopend. Redactie: in België moet wie met voeding
 * werkt een medisch attest hebben (KB 13 juli 2014 levensmiddelenhygiëne, nakijken). Dat staat
 * niet in de les: vraag de deskundige of het erbij moet.
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.voeding',
    title: 'Werken in de voedingsindustrie',
    emoji: '🥫',
    color: '#b5651d',
    lessons: [
      {
        // Les V.1 · De hygiënesluis en ziek zijn
        id: 'r.be.l.voeding.1',
        title: 'De hygiënesluis en ziek zijn',
        goal: 'Je gaat elke keer door de hygiënesluis. Ziek of een wond? Je meldt het voor je begint.',
        remember: 'Door de sluis, elke keer. Ziek of een wond? Meld het voor je begint.',
        // Wie kan je helpen: je leidinggevende of ploegbaas · de kwaliteitsdienst · de arbeidsarts.
        help: ['leidinggevende', 'arbeidsarts'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.voeding.1.sc1',
            picture: 'Ewa met haarnet en witte werkkledij in de gang naar de hygiënesluis van een saladefabriek.',
            lines: [
              'Ewa werkt in een fabriek die salades maakt.',
              'Ze komt terug van het toilet.',
              'Het is druk aan de lijn.',
              'Een collega zegt: "Sla de sluis maar over. We hebben haast."',
            ],
          },
          // ⚖️ check: persoonlijke hygiëne: propere kledij, haar bedekt, handen wassen (Verordening (EG) 852/2004, bijlage II, hoofdstuk VIII lid 1; KB 13 juli 2014 levensmiddelenhygiëne; de autocontrolegids van de sector)
          // ⚖️ check: diarree, overgeven of een besmette wond meld je voor je begint; dan geen werk met voeding als er gevaar is (Verordening (EG) 852/2004, bijlage II, hoofdstuk VIII lid 2)
          {
            kind: 'rule',
            id: 'r.be.l.voeding.1.ru1',
            emoji: '🧼',
            title: 'Door de sluis, elke keer. Ziek of een wond? Meld het voor je begint.',
            body: [
              'Bacteriën op je handen, haar en kledij kunnen in het eten komen.',
              'Ga dus elke keer door de hygiënesluis, ook na je pauze of het toilet.',
              'Haarnet op, propere werkkledij aan, geen juwelen. Was en ontsmet je handen.',
              'Diarree, overgeven of een wonde aan je hand? Meld het voor je begint.',
            ],
            rule: 'geschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.voeding.1.wd1',
            situation: 'Ewa wil terug naar de lijn. Wat kan Ewa het beste doen?',
            options: [
              { id: 'a', text: 'Ze gaat toch door de sluis.', best: true, feedback: 'Goed. Die paar minuten beschermen veel klanten.' },
              { id: 'b', text: 'Ze ontsmet alleen haar handen bij de lijn.', best: false, feedback: 'Dat snap ik. Maar wassen en propere kledij horen er ook bij.' },
              { id: 'c', text: 'Ze doet wat haar collega zegt. Het is maar één keer.', best: false, feedback: 'Eén keer is genoeg om bacteriën in het eten te brengen.' },
            ],
            why: 'Bacteriën van het toilet kunnen veel klanten ziek maken. Ga dus elke keer door de sluis. Was je handen met zeep, droog ze en ontsmet ze.',
          },
          // ⚖️ check: met diarree of overgeven meld je het voor je begint (Verordening (EG) 852/2004, bijlage II, hoofdstuk VIII lid 2; de werkgever beslist over ander werk)
          {
            kind: 'truefalse',
            id: 'r.be.l.voeding.1.tf1',
            statement: 'Heb je diarree, maar voel je je goed genoeg? Dan kun je gewoon aan de lijn werken.',
            answer: false,
            why: 'Met diarree of overgeven kun je bacteriën in het eten brengen. Meld het voor je begint. Misschien doe je even ander werk. Melden is normaal.',
          },
          // ⚖️ check: een wonde aan je hand meld je; een blauwe pleister, vaak met metaal voor de detector (Verordening (EG) 852/2004, bijlage II, hoofdstuk VIII lid 2; de blauwe pleister is een huisregel)
          {
            kind: 'whatdo',
            id: 'r.be.l.voeding.1.wd2',
            situation: 'Ewa heeft een sneetje in haar vinger. Wat kan Ewa het beste doen?',
            options: [
              { id: 'a', text: 'Ze doet er een gewone pleister op, en een handschoen erover.', best: false, feedback: 'Goed bedoeld. Maar een gewone pleister zie je niet in het eten.' },
              { id: 'b', text: 'Ze zegt niets. Het is maar een klein sneetje.', best: false, feedback: 'Ook een kleine wonde kan bacteriën in het eten brengen.' },
              { id: 'c', text: 'Ze meldt het, en vraagt een blauwe pleister.', best: true, feedback: 'Goed. Een blauwe pleister zie je meteen.' },
            ],
            why: 'Een wonde kan bacteriën in het eten brengen. Meld het, en gebruik een blauwe pleister. Die valt op in het eten, en vaak vindt de detector hem.',
          },
          { kind: 'model', id: 'r.be.l.voeding.1.mo1', context: 'Je hebt een klein sneetje in je vinger. Je shift begint zo.', nl: 'Ik heb een sneetje in mijn vinger. Mag ik een blauwe pleister?' },
        ],
      },
      {
        // Les V.2 · Allergenen en de lijsten van de autocontrole
        id: 'r.be.l.voeding.2',
        title: 'Allergenen en de autocontrole',
        goal: 'Je houdt allergenen apart. Je schrijft op wat je echt meet.',
        remember: 'Wissel nooit een ingrediënt. Schrijf op wat je echt meet.',
        // Wie kan je helpen: je ploegbaas of leidinggevende · de kwaliteitsdienst · een ervaren
        //   collega.
        help: ['leidinggevende', 'collega'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.voeding.2.sc1',
            picture: 'Mohammed in een koekjesfabriek, bij een lege bak met het etiket "amandel". Een collega houdt een zak hazelnoten vast.',
            lines: [
              'Mohammed werkt in een koekjesfabriek.',
              'De amandelen zijn op.',
              'Een collega zegt: "Neem hazelnoten. Niemand merkt het."',
              'Op het etiket van de koekjes staat: amandel.',
            ],
          },
          // ⚖️ check: op het etiket moet staan welke allergenen erin zitten (Verordening (EU) 1169/2011, art. 9 en 21 en bijlage II: 14 allergenen; het FAVV controleert)
          // ⚖️ check: elk bedrijf met voeding heeft een autocontrolesysteem op basis van HACCP, met registraties (Verordening (EG) 852/2004, art. 5; KB 14 november 2003 autocontrole; favv-afsca.be)
          {
            kind: 'rule',
            id: 'r.be.l.voeding.2.ru1',
            emoji: '📋',
            title: 'Wissel nooit een ingrediënt. Schrijf op wat je echt meet.',
            body: [
              'Voor sommige mensen is een klein beetje noten, melk of ei al gevaarlijk.',
              'Op het etiket moet staan welke allergenen erin zitten.',
              'Wissel dus nooit een ingrediënt, ook niet als het erop lijkt.',
              'Elk bedrijf met voeding doet aan autocontrole. Je meet, en je schrijft het op.',
              'Schrijf op wat je echt meet, ook als het fout is.',
            ],
            rule: 'geschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.voeding.2.wd1',
            situation: 'De amandelen zijn op. Wat kan Mohammed het beste doen?',
            options: [
              { id: 'a', text: 'Hij gebruikt de hazelnoten. Noten zijn noten.', best: false, feedback: 'Dat snap ik. Maar dan klopt het etiket niet meer.' },
              { id: 'b', text: 'Hij stopt, en vraagt de ploegbaas wat hij moet doen.', best: true, feedback: 'Goed. De ploegbaas beslist wat er gebeurt.' },
              { id: 'c', text: 'Hij doet half hazelnoten, half amandelen.', best: false, feedback: 'Ook dan klopt het etiket niet.' },
            ],
            why: 'Het etiket moet zeggen wat erin zit. Een andere noot kan iemand met een allergie ziek maken. Twijfel je? Vraag het.',
          },
          // ⚖️ check: allergenen gescheiden houden en de lijn reinigen tussen producten (Verordening (EG) 852/2004 art. 5, kruiscontaminatie voorkomen; Verordening (EU) 1169/2011; de autocontrolegids van de sector)
          {
            kind: 'truefalse',
            id: 'r.be.l.voeding.2.tf1',
            statement: 'Na een product met noten kuis je de lijn, voor het volgende product.',
            answer: true,
            why: 'Zo komen er geen noten in het volgende product. Ook een klein beetje kan gevaarlijk zijn. Allergenen hebben vaak eigen bakken, eigen gereedschap en eigen kleuren.',
          },
          // ⚖️ check: te warm: bacteriën groeien; het echte getal opschrijven en meteen melden (Verordening (EG) 852/2004 art. 4 en 5: koudeketen en registratie; de autocontrolegids). Redactie: geen getal in de tekst.
          {
            kind: 'whatdo',
            id: 'r.be.l.voeding.2.wd2',
            situation: 'De thermometer van de koelcel is veel hoger dan normaal. Wat kan Mohammed het beste doen?',
            options: [
              { id: 'a', text: 'Hij schrijft het echte getal op, en meldt het meteen.', best: true, feedback: 'Goed. De leidinggevende beslist of het eten nog goed is.' },
              { id: 'b', text: 'Hij schrijft het normale getal op. Het is vast de thermometer.', best: false, feedback: 'Dat snap ik. Maar dan weet niemand dat er iets mis kan zijn.' },
              { id: 'c', text: 'Hij doet de deur goed dicht, en meet over een uur opnieuw.', best: false, feedback: 'Goed bedoeld. Maar in dat uur kan het eten slecht worden.' },
            ],
            why: 'Te warm betekent: bacteriën groeien. Schrijf het echte getal op, en meld het meteen. Een slecht getal is niet jouw schuld. Een verzonnen getal is gevaarlijk.',
          },
          { kind: 'model', id: 'r.be.l.voeding.2.mo1', context: 'De amandelen zijn op. Een collega wil hazelnoten gebruiken.', nl: 'Dan klopt het etiket niet meer. Ik vraag het even aan de ploegbaas.' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.voeding.1.mo1': [
      { text: 'Ik heb een sneetje, maar het is niks. Ik begin gewoon.', feedback: 'Een wonde kan bacteriën in het eten brengen. Meld het.' },
      { text: 'Mijn vinger bloedt. Ik doe er wel een handschoen over.', feedback: 'Vraag een blauwe pleister. Die zie je in het eten.' },
    ],
    'r.be.l.voeding.2.mo1': [
      { text: 'Oké, hazelnoten dan. Het verschil proeft toch niemand.', feedback: 'Dan klopt het etiket niet. Dat is gevaarlijk bij een allergie.' },
      { text: 'Ik weet het niet. Doe maar wat jij wilt, hoor.', feedback: 'Dan beslist niemand. Vraag het aan de ploegbaas.' },
    ],
  },
  advice: {
    'r.be.l.voeding.1.ru1': 'advice',
    'r.be.l.voeding.2.ru1': 'advice',
  },
};
