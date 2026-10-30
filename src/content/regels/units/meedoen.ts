import type { RuleUnit } from '../types';

/**
 * Unit 16 · Meedoen in Nederland (les 16.1–16.3).
 * Converted from docs/entree-aanvulling.md; edit that document first, then this file.
 * `// ⚖️ check:` marks a fact the expert must check (docs/entree-aanvulling.md, deel 6 and 7). The
 * marker is never shown or read aloud. `// Redactie:` notes are for the makers only.
 *
 * Feitelijk en neutraal: no parties, no politicians, no opinions on policy. On the right to vote
 * always: it depends on the election and your nationality; ask the gemeente.
 * Redactie: noem geen partijen, politici of meningen over beleid. Bij elke vraag over stemrecht:
 *   het hangt af van de verkiezing en de nationaliteit. Laat deze unit extra nakijken. ⚖️
 */
export const meedoenUnit: RuleUnit = {
  id: 'r.meedoen',
  title: 'Meedoen in Nederland',
  emoji: '🏛️',
  color: '#8a5a44',
  lessons: [
    {
      // Les 16.1 · Hoe Nederland bestuurd wordt, en stemmen
      id: 'r.l.meedoen.1',
      title: 'Hoe Nederland bestuurd wordt, en stemmen',
      goal: 'Je weet wat de gemeenteraad en de Tweede Kamer doen. Je weet wie voor welke verkiezing mag stemmen.',
      remember: 'Of je mag stemmen, hangt af van de verkiezing en je nationaliteit. Vraag het de gemeente.',
      // Wie kan je helpen: de gemeente · rijksoverheid.nl (verkiezingen) · ProDemos, voor neutrale
      //   uitleg over politiek ⚖️.
      help: ['gemeente'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.meedoen.1.sc1',
          picture: 'Esra en Piotr lopen langs een school. Op de deur hangt een bord: "Stembureau".',
          lines: [
            'Esra en Piotr werken samen in een fabriek.',
            'Esra heeft de Nederlandse nationaliteit.',
            'Piotr komt uit Polen. Hij woont al 3 jaar in Nederland.',
            'Binnenkort zijn er verkiezingen voor de gemeenteraad.',
          ],
        },
        // ⚖️ check: Voor de gemeenteraad mogen meer mensen stemmen dan alleen Nederlanders ⚖️.
        // ⚖️ check: Voor de Tweede Kamer moet je de Nederlandse nationaliteit hebben ⚖️.
        {
          kind: 'rule',
          id: 'r.l.meedoen.1.ru1',
          emoji: '🗳️',
          title: 'Of je mag stemmen, hangt af van de verkiezing en je nationaliteit. Vraag het de gemeente.',
          body: [
            'Voor de gemeenteraad mogen meer mensen stemmen dan alleen Nederlanders.',
            'Voor de Tweede Kamer moet je de Nederlandse nationaliteit hebben.',
            'Stemmen is niet verplicht. Stemmen is geheim.',
          ],
          rule: 'geschreven',
        },
        // ⚖️ check: Voor de gemeenteraad mogen meer mensen stemmen dan alleen Nederlanders ⚖️.
        // ⚖️ check: Mensen uit een ander EU-land mogen stemmen als ze hier wonen ⚖️.
        // ⚖️ check: Mensen van buiten de EU mogen na 5 jaar wonen met een verblijfsvergunning ⚖️.
        // ⚖️ check: Je moet wel 18 jaar of ouder zijn ⚖️.
        // Redactie: voorwaarden voor niet-EU-burgers: 5 jaar onafgebroken legaal verblijf, op de
        //   peildatum van de verkiezing ⚖️ (Kieswet; rijksoverheid.nl, "Wie mag stemmen bij de
        //   gemeenteraadsverkiezingen"). Twijfel 4: welke verblijfsvergunningen tellen.
        {
          kind: 'truefalse',
          id: 'r.l.meedoen.1.tf1',
          statement: 'Piotr mag ook stemmen voor de gemeenteraad.',
          answer: true,
          why: 'Voor de gemeenteraad mogen meer mensen stemmen dan alleen Nederlanders. Mensen uit een ander EU-land mogen stemmen als ze hier wonen. Polen hoort bij de EU. Mensen van buiten de EU mogen na 5 jaar wonen met een verblijfsvergunning. Je moet wel 18 jaar of ouder zijn.',
        },
        // ⚖️ check: De Tweede Kamer heeft 150 leden ⚖️ (twijfel 15).
        {
          kind: 'whatdo',
          id: 'r.l.meedoen.1.wd1',
          situation: 'Piotr wil weten waarvoor hij stemt. Wat doet de gemeenteraad?',
          options: [
            { id: 'a', text: 'De gemeenteraad maakt de wetten voor heel Nederland.', best: false, feedback: 'Nee. Dat doen de Tweede Kamer en de regering samen.' },
            { id: 'b', text: 'De gemeenteraad beslist over je eigen stad of dorp.', best: true, feedback: 'Goed. Bijvoorbeeld over wegen, afval en sport.' },
            { id: 'c', text: 'De gemeenteraad kiest de koning.', best: false, feedback: 'Nee. Niemand kiest de koning.' },
          ],
          why: 'De gemeenteraad beslist over je stad of dorp. De burgemeester en de wethouders voeren het uit. De Tweede Kamer maakt wetten voor heel Nederland, samen met de regering. De Tweede Kamer heeft 150 leden.',
        },
        // ⚖️ check: Voor de Tweede Kamer moet je de Nederlandse nationaliteit hebben ⚖️.
        // ⚖️ check: En je moet 18 jaar of ouder zijn ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.meedoen.1.tf2',
          statement: 'Iedereen die in Nederland werkt, mag stemmen voor de Tweede Kamer.',
          answer: false,
          why: 'Voor de Tweede Kamer moet je de Nederlandse nationaliteit hebben. En je moet 18 jaar of ouder zijn. Stemmen is niet verplicht. Stemmen is geheim: niemand mag meekijken.',
        },
        // ⚖️ check: the gemeente sends the stempas (not in the doc's sources).
        {
          kind: 'whoask',
          id: 'r.l.meedoen.1.wa1',
          question: 'Je weet niet of je mag stemmen bij een verkiezing. Wie vraag je het?',
          options: [
            { id: 'a', who: 'gemeente', best: true, feedback: 'Goed. De gemeente weet wie mag stemmen, en stuurt de stempassen.' },
            { id: 'b', who: 'leidinggevende', best: false, feedback: 'Je werk gaat niet over stemmen.' },
            { id: 'c', who: 'uwv', best: false, feedback: 'UWV gaat over werk en uitkeringen, niet over stemmen.' },
          ],
          why: 'Of je mag stemmen, hangt af van de verkiezing en je nationaliteit. Vraag het de gemeente. Uitleg staat ook op rijksoverheid.nl.',
        },
        { kind: 'model', id: 'r.l.meedoen.1.mo1', context: 'Je belt de gemeente over de verkiezingen.', nl: 'Mag ik stemmen? En waar vind ik mijn stempas?' },
      ],
    },
    {
      // Les 16.2 · Grondrechten en gelijke behandeling
      id: 'r.l.meedoen.2',
      title: 'Grondrechten en gelijke behandeling',
      goal: 'Je kent een paar grondrechten. Je weet dat ze voor iedereen gelden, ook buiten je werk.',
      remember: 'Iedereen heeft dezelfde rechten. Discriminatie mag niet, ook niet buiten je werk.',
      // Wie kan je helpen: discriminatie.nl · het College voor de Rechten van de Mens · het
      //   Juridisch Loket · bij bedreiging: de politie.
      help: ['meldpunt', 'juridischloket', 'politie'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.meedoen.2.sc1',
          picture: 'Dewi in de pauze in een kantine. Op tafel een krant. Twee collega\'s praten.',
          lines: [
            'In de pauze praten de collega\'s van Dewi over het nieuws.',
            'Kevin zegt: "In Nederland mag je alles zeggen."',
            'Mohammed zegt: "Niet alles. Je mag niemand bedreigen."',
            'Dewi weet niet wie gelijk heeft.',
          ],
        },
        // ⚖️ check: Dat staat in artikel 1 van de Grondwet ⚖️.
        // ⚖️ check: Discriminatie om je geloof, afkomst, geslacht of iets anders mag niet ⚖️.
        {
          kind: 'rule',
          id: 'r.l.meedoen.2.ru1',
          emoji: '🤝',
          title: 'Iedereen heeft dezelfde rechten. Discriminatie mag niet, ook niet buiten je werk.',
          body: [
            'In de Grondwet staat dat iedereen gelijk behandeld moet worden.',
            'Discriminatie om je geloof, afkomst, geslacht of iets anders mag niet.',
            'Dat geldt op je werk, en ook bij wonen.',
          ],
          rule: 'geschreven',
          key: true,
        },
        // ⚖️ check: In Nederland heb je vrijheid van meningsuiting ⚖️.
        // ⚖️ check: Dat is strafbaar ⚖️ (twijfel 11: "discrimineren is strafbaar" te kort?).
        {
          kind: 'whatdo',
          id: 'r.l.meedoen.2.wd1',
          situation: 'Wie heeft gelijk?',
          options: [
            { id: 'a', text: 'Kevin. Je mag hier echt alles zeggen.', best: false, feedback: 'Bijna. Je mag veel zeggen, maar niet alles.' },
            { id: 'b', text: 'Mohammed. Je mag veel zeggen, maar er zijn grenzen.', best: true, feedback: 'Goed. Bedreigen en discrimineren mag niet.' },
            { id: 'c', text: 'Niemand. Over het nieuws praat je niet op je werk.', best: false, feedback: 'Dat mag wel. Doe het met respect.' },
          ],
          why: 'In Nederland heb je vrijheid van meningsuiting. Je mag zeggen wat je denkt, ook over de regering. Maar bedreigen en discrimineren mag niet. Dat is strafbaar. Op je werk kan je baas ook regels hebben. Bijvoorbeeld over hoe je met elkaar praat.',
        },
        // ⚖️ check: Dat staat in artikel 1 van de Grondwet ⚖️.
        // ⚖️ check: Discriminatie om je geloof, afkomst, geslacht of iets anders mag niet ⚖️.
        // ⚖️ check: Ook vrijheid van geloof is een grondrecht ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.meedoen.2.tf1',
          statement: 'In de Grondwet staat dat iedereen gelijk behandeld moet worden.',
          answer: true,
          why: 'Dat staat in artikel 1 van de Grondwet. De Grondwet is de belangrijkste wet van Nederland. Discriminatie om je geloof, afkomst, geslacht of iets anders mag niet. Ook vrijheid van geloof is een grondrecht.',
        },
        // ⚖️ check: Discriminatie is ook verboden bij wonen ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.meedoen.2.wd2',
          situation: 'Fatima belt over een kamer. De verhuurder hoort haar naam. "Hij is al weg." Een dag later staat de kamer weer online. Wat kan Fatima het beste doen?',
          options: [
            { id: 'a', text: 'Ze laat het gaan. Zo gaat het nou eenmaal.', best: false, feedback: 'Begrijpelijk. Maar het mag niet.' },
            { id: 'b', text: 'Ze stuurt de verhuurder een boos bericht.', best: false, feedback: 'Begrijpelijk. Maar zo verandert er niets.' },
            { id: 'c', text: 'Ze schrijft op wat er gebeurde, en meldt het.', best: true, feedback: 'Goed. Bij een meldpunt helpen ze haar gratis.' },
          ],
          why: 'Discriminatie is ook verboden bij wonen. Schrijf op wat er gebeurde, met de datum. Maak een screenshot van de advertentie. Meld het bij discriminatie.nl. Daar helpen ze je gratis.',
        },
        {
          kind: 'whoask',
          id: 'r.l.meedoen.2.wa1',
          question: 'Iemand bedreigt je op straat. Wie waarschuw je?',
          options: [
            { id: 'a', who: 'meldpunt', best: false, feedback: 'Een meldpunt helpt bij discriminatie. Bij bedreiging waarschuw je de politie.' },
            { id: 'b', who: 'politie', best: true, feedback: 'Goed. Bedreigen is strafbaar. Bij gevaar bel je 112.' },
            { id: 'c', who: 'juridischloket', best: false, feedback: 'Het Juridisch Loket geeft advies. Bij bedreiging waarschuw je de politie.' },
          ],
          why: 'Bij bedreiging waarschuw je de politie. Bij discriminatie helpt een meldpunt, zoals discriminatie.nl. Het Juridisch Loket geeft gratis advies.',
        },
        { kind: 'model', id: 'r.l.meedoen.2.mo1', context: 'Je belt een meldpunt discriminatie.', nl: 'Ik wil discriminatie melden. Wat moet ik doen?' },
      ],
    },
    {
      // Les 16.3 · Recht en plicht: politie, rechter, bezwaar
      id: 'r.l.meedoen.3',
      title: 'Recht en plicht: politie, rechter, bezwaar',
      goal: 'Je weet wat de politie en de rechter doen. Je kent een paar rechten en plichten die je hebt.',
      remember: 'De wet geldt voor iedereen. Oneens met een besluit? Maak op tijd bezwaar.',
      // Wie kan je helpen: het Juridisch Loket · de politie: 112 bij spoed, het nummer zonder spoed
      //   ⚖️ (the one in help.ts, still to check) · een advocaat (soms betaalt de overheid mee ⚖️).
      help: ['juridischloket', 'politie'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.meedoen.3.sc1',
          picture: 'Jayden op een perron. Twee agenten in uniform spreken hem aan.',
          lines: [
            'Jayden wacht op de trein.',
            'Twee agenten spreken hem aan. "Mogen we je ID zien?"',
            'Jayden heeft niets fout gedaan.',
            'Hij vindt het vervelend.',
          ],
        },
        // ⚖️ check: Dan mag je bezwaar maken ⚖️.
        // ⚖️ check: Let goed op de datum ⚖️.
        {
          kind: 'rule',
          id: 'r.l.meedoen.3.ru1',
          emoji: '📨',
          title: 'De wet geldt voor iedereen. Oneens met een besluit? Maak op tijd bezwaar.',
          body: [
            'Nederland is een rechtsstaat. De regels gelden voor iedereen, ook voor de regering.',
            'Vind je een boete of besluit niet eerlijk? Dan mag je bezwaar maken.',
            'Hoe dat moet, staat in de brief. Let goed op de datum.',
          ],
          rule: 'geschreven',
        },
        // ⚖️ check: Vanaf 14 jaar moet je het laten zien ⚖️.
        // ⚖️ check: Geen ID bij je? Dan kun je een boete krijgen ⚖️.
        // ⚖️ check: Je kunt later een klacht indienen bij de politie ⚖️ (twijfel 13).
        {
          kind: 'whatdo',
          id: 'r.l.meedoen.3.wd1',
          situation: 'Wat doet Jayden?',
          options: [
            { id: 'a', text: 'Hij laat rustig zijn ID zien.', best: true, feedback: 'Goed. Dat moet als de politie erom vraagt.' },
            { id: 'b', text: 'Hij zegt: "Ik heb niets gedaan," en loopt weg.', best: false, feedback: 'Begrijpelijk. Maar dan kan hij een boete krijgen.' },
            { id: 'c', text: 'Hij zegt dat zijn ID thuis ligt. Dat is niet waar.', best: false, feedback: 'Niet doen. Dan maakt hij het moeilijker voor zichzelf.' },
          ],
          why: 'Vraagt de politie om je ID? Vanaf 14 jaar moet je het laten zien. Dat heet de identificatieplicht. Geen ID bij je? Dan kun je een boete krijgen. Vond je het niet eerlijk? Je kunt later een klacht indienen bij de politie.',
        },
        {
          kind: 'truefalse',
          id: 'r.l.meedoen.3.tf1',
          statement: 'In Nederland moet ook de regering zich aan de wet houden.',
          answer: true,
          why: 'Nederland is een rechtsstaat. De regels gelden voor iedereen: voor jou, voor bedrijven en voor de regering. De politie zorgt voor veiligheid. Een rechter beslist bij een ruzie of een misdrijf. De rechter is onafhankelijk. De regering mag de rechter niet vertellen wat hij beslist.',
        },
        // ⚖️ check: Dan mag je bezwaar maken ⚖️.
        // ⚖️ check: Let goed op de datum ⚖️.
        // ⚖️ check: Niet betalen maakt de boete vaak hoger ⚖️ (twijfel 12: gemeente of CJIB).
        {
          kind: 'whatdo',
          id: 'r.l.meedoen.3.wd2',
          situation: 'Esra krijgt een brief van de gemeente met een boete. Ze vindt dat de boete niet klopt. Wat kan Esra het beste doen?',
          options: [
            { id: 'a', text: 'Ze betaalt. Een brief van de gemeente klopt altijd.', best: false, feedback: 'Ook de gemeente maakt fouten. Klopt het niet? Dan mag ze bezwaar maken.' },
            { id: 'b', text: 'Ze belt de gemeente, en ze wacht op antwoord.', best: false, feedback: 'Bellen mag. Maar een telefoontje is meestal geen bezwaar. En de datum loopt door.' },
            { id: 'c', text: 'Ze maakt bezwaar, vóór de datum in de brief.', best: true, feedback: 'Goed. Zo kijkt iemand er opnieuw naar.' },
          ],
          why: 'Vind je een boete of besluit niet eerlijk? Dan mag je bezwaar maken. Hoe dat moet, staat in de brief. Let goed op de datum. Niet betalen maakt de boete vaak hoger. Het Juridisch Loket geeft gratis advies.',
        },
        // ⚖️ check: een advocaat (soms betaalt de overheid mee ⚖️).
        {
          kind: 'whoask',
          id: 'r.l.meedoen.3.wa1',
          question: 'Je wilt bezwaar maken tegen een besluit. Waar krijg je gratis advies?',
          options: [
            { id: 'a', who: 'politie', best: false, feedback: 'De politie gaat niet over bezwaar tegen een besluit.' },
            { id: 'b', who: 'leidinggevende', best: false, feedback: 'Je werk gaat hier niet over.' },
            { id: 'c', who: 'juridischloket', best: true, feedback: 'Goed. Het Juridisch Loket geeft gratis advies.' },
          ],
          why: 'Het Juridisch Loket geeft gratis advies over bezwaar maken. Soms heb je een advocaat nodig. Dan betaalt de overheid soms mee.',
        },
        { kind: 'model', id: 'r.l.meedoen.3.mo1', context: 'Je belt over een boete die niet klopt.', nl: 'Ik ben het niet eens met deze boete. Hoe maak ik bezwaar?' },
      ],
    },
  ],
};
