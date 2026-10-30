import type { BeUnit } from '../types';

/**
 * Unit 16 (België) · Meedoen in België: de Belgische versie van src/content/regels/units/meedoen.ts.
 * Vlaamse woorden: federale staat, gemeenschap, gewest, Vlaams Parlement, Kamer, opkomstplicht,
 * GAS-boete, identiteitskaart, Unia, justitiehuis.
 *
 * Feitelijk en neutraal: geen partijen, geen politici, geen meningen over beleid. Bij elke vraag
 * over stemrecht: het hangt af van de verkiezing en je nationaliteit; vraag het de gemeente.
 * Redactie: laat deze unit extra nakijken. ⚖️
 *
 * `// ⚖️ check:` = een feit dat de deskundige nakijkt, met de bron. Opgezocht op 30 okt 2026, alleen
 * via zoekresultaten: vlaanderen.be, belgium.be en ibz.rrn.fgov.be waren in deze sessie niet te
 * openen (netwerk geblokkeerd, 30 okt 2026).
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.meedoen',
    title: 'Meedoen in België',
    emoji: '🏛️',
    color: '#8a5a44',
    lessons: [
      {
        // Les 16.1 · Hoe België bestuurd wordt, en stemmen
        id: 'r.be.l.meedoen.1',
        title: 'Wie bestuurt België? En wie mag stemmen?',
        goal: 'Je weet wat de gemeente, Vlaanderen en de federale staat doen. Je weet wie mag stemmen.',
        remember: 'Of je mag stemmen, hangt af van de verkiezing en je nationaliteit. Vraag het de gemeente.',
        // Wie kan je helpen: de gemeente (dienst burgerzaken) · vlaanderen.be (Vlaanderen kiest) ·
        //   belgium.be (verkiezingen).
        help: ['gemeente'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.meedoen.1.sc1',
            picture: 'Esra en Piotr lopen langs een school. Op de deur hangt een bord: "Stembureau".',
            lines: [
              'Esra en Piotr werken samen in een fabriek in Gent.',
              'Esra is Belgische.',
              'Piotr komt uit Polen. Hij woont al 3 jaar in België.',
              'Binnenkort zijn er verkiezingen voor de gemeenteraad.',
            ],
          },
          // ⚖️ check: België is een federale staat: de federale overheid, de gemeenschappen en de gewesten (Grondwet art. 1-3; belgium.be "overheid"; zoekresultaat)
          // ⚖️ check: in Vlaanderen doen één Vlaamse regering en het Vlaams Parlement de zaken van de Vlaamse Gemeenschap en het Vlaamse Gewest (vlaanderen.be; belgium.be)
          // ⚖️ check: voor de gemeenteraad mogen ook niet-Belgen stemmen, als ze zich eerst laten registreren bij de gemeente (vlaanderen.be "registratie stemrecht niet-Belgen"; stad.gent; zoekresultaat 30 okt 2026)
          // ⚖️ check: voor de Kamer (federale verkiezingen) moet je Belg zijn, en daar geldt opkomstplicht (Grondwet art. 61-62; Kieswetboek; vrt.be 2024; zoekresultaat)
          {
            kind: 'rule',
            id: 'r.be.l.meedoen.1.ru1',
            emoji: '🗳️',
            title: 'Of je mag stemmen, hangt af van de verkiezing en je nationaliteit. Vraag het de gemeente.',
            body: [
              'België is een federale staat. Er is een federale regering voor heel België.',
              'Vlaanderen heeft een eigen regering en het Vlaams Parlement.',
              'Voor de gemeenteraad mogen ook niet-Belgen stemmen. Je moet je eerst registreren.',
              'Voor de Kamer moet je Belg zijn. Daar moet je ook gaan stemmen.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: EU-burgers mogen stemmen voor de gemeenteraad als ze hier wonen en zich registreren (vlaanderen.be "registratie stemrecht niet-Belgen"; stad.gent; zoekresultaat)
          // ⚖️ check: niet-EU-burgers mogen voor de gemeenteraad stemmen na 5 jaar ononderbroken wettig verblijf, ook na registratie (vlaanderen.be onderrichtingen gemeenten 2024; zoekresultaat)
          // ⚖️ check: je moet 18 jaar of ouder zijn op de dag van de verkiezing (Kieswetboek; vlaanderen.be "stemrecht")
          {
            kind: 'truefalse',
            id: 'r.be.l.meedoen.1.tf1',
            statement: 'Piotr mag ook stemmen voor de gemeenteraad.',
            answer: true,
            why: 'Mensen uit een ander EU-land mogen stemmen voor de gemeenteraad. Polen hoort bij de EU. Mensen van buiten de EU mogen het na 5 jaar wettig verblijf. Je moet je wel eerst registreren bij de gemeente. En je moet 18 jaar of ouder zijn.',
          },
          // ⚖️ check: de Kamer van volksvertegenwoordigers heeft 150 leden en maakt de federale wetten (Grondwet art. 63; dekamer.be)
          // ⚖️ check: de gemeenteraad beslist over de gemeente, zoals wegen, afval en sport (vlaanderen.be "lokaal bestuur")
          {
            kind: 'whatdo',
            id: 'r.be.l.meedoen.1.wd1',
            situation: 'Piotr wil weten waarvoor hij stemt. Wat doet de gemeenteraad?',
            options: [
              { id: 'a', text: 'De gemeenteraad maakt de wetten voor heel België.', best: false, feedback: 'Nee. Dat doet de Kamer, samen met de federale regering.' },
              { id: 'b', text: 'De gemeenteraad beslist over je eigen stad of dorp.', best: true, feedback: 'Goed. Bijvoorbeeld over wegen, afval en sport.' },
              { id: 'c', text: 'De gemeenteraad kiest de koning van België.', best: false, feedback: 'Nee. Niemand kiest de koning.' },
            ],
            why: 'De gemeenteraad beslist over je stad of dorp. De burgemeester en de schepenen voeren het uit. De Kamer maakt wetten voor heel België. De Kamer heeft 150 leden.',
          },
          // ⚖️ check: de gemeenschappen gaan over taal, onderwijs en cultuur; de gewesten over o.a. wonen, werk (VDAB) en wegen (Grondwet art. 127-130 en 134; Bijzondere wet 8 augustus 1980; belgium.be "bevoegdheden")
          {
            kind: 'truefalse',
            id: 'r.be.l.meedoen.1.tf2',
            statement: 'Vlaanderen maakt zelf regels over het onderwijs.',
            answer: true,
            why: 'België heeft gemeenschappen en gewesten. De gemeenschap gaat over taal, onderwijs en cultuur. Het gewest gaat over wonen, werk en wegen. Daarom is de VDAB Vlaams. In Vlaanderen doet één Vlaamse regering het allebei.',
          },
          // ⚖️ check: bij federale verkiezingen geldt opkomstplicht voor Belgen van 18 jaar en ouder (Grondwet art. 62; Kieswetboek; vrt.be 21 aug 2024; zoekresultaat)
          // ⚖️ check: in Vlaanderen is de opkomstplicht voor gemeente en provincie afgeschaft, sinds de verkiezingen van 13 oktober 2024 (Lokaal en Provinciaal Kiesdecreet; vlaanderen.be "lokale verkiezingen 2024: wat is er nieuw"; vrt.be 5 sep 2024; zoekresultaat)
          // ⚖️ check: stemmen is geheim (Grondwet art. 62)
          {
            kind: 'truefalse',
            id: 'r.be.l.meedoen.1.tf3',
            statement: 'Ben je Belg en 18 jaar? Dan moet je gaan stemmen voor de Kamer.',
            answer: true,
            why: 'Voor de Kamer moeten Belgen van 18 jaar en ouder gaan stemmen. Dat heet opkomstplicht. Voor de gemeente is dat in Vlaanderen niet meer verplicht. Stemmen is geheim: niemand mag meekijken.',
          },
          // ⚖️ check: de gemeente zegt wie mag stemmen en stuurt de oproepingsbrief (Kieswetboek; vlaanderen.be "stemrecht")
          {
            kind: 'whoask',
            id: 'r.be.l.meedoen.1.wa1',
            question: 'Je weet niet of je mag stemmen bij een verkiezing. Wie vraag je het?',
            options: [
              { id: 'a', who: 'gemeente', best: true, feedback: 'Goed. De gemeente weet wie mag stemmen, en stuurt de oproepingsbrief.' },
              { id: 'b', who: 'leidinggevende', best: false, feedback: 'Je werk gaat niet over stemmen.' },
              { id: 'c', who: 'vdab', best: false, feedback: 'De VDAB gaat over werk zoeken, niet over stemmen.' },
            ],
            why: 'Of je mag stemmen, hangt af van de verkiezing en je nationaliteit. Vraag het de gemeente. Uitleg staat ook op vlaanderen.be.',
          },
          { kind: 'model', id: 'r.be.l.meedoen.1.mo1', context: 'Je belt de gemeente over de verkiezingen.', nl: 'Mag ik stemmen? En moet ik mij eerst registreren?' },
        ],
      },
      {
        // Les 16.2 · Grondrechten en gelijke behandeling
        id: 'r.be.l.meedoen.2',
        title: 'Grondrechten en gelijke behandeling',
        goal: 'Je kent een paar grondrechten. Je weet dat ze voor iedereen gelden, ook buiten je werk.',
        remember: 'Iedereen heeft dezelfde rechten. Discriminatie mag niet, ook niet buiten je werk.',
        // Wie kan je helpen: Unia · het justitiehuis (gratis eerste advies) · bij bedreiging: de
        //   politie (101, bij gevaar 112).
        help: ['meldpunt', 'justitiehuis', 'politie'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.meedoen.2.sc1',
            picture: 'Dewi in de pauze in een refter. Op tafel een krant. Twee collega\'s praten.',
            lines: [
              'In de pauze praten de collega\'s van Dewi over het nieuws.',
              'Kevin zegt: "In België mag je alles zeggen."',
              'Mohammed zegt: "Niet alles. Je mag niemand bedreigen."',
              'Dewi weet niet wie gelijk heeft.',
            ],
          },
          // ⚖️ check: gelijkheid voor de wet en geen discriminatie: Belgische Grondwet art. 10 en 11 (dekamer.be, Grondwet)
          // ⚖️ check: discriminatie om geloof, afkomst, geslacht en andere kenmerken is verboden, ook bij werk en wonen (Antidiscriminatiewet 10 mei 2007; Antiracismewet 30 juli 1981; Genderwet 10 mei 2007; unia.be)
          {
            kind: 'rule',
            id: 'r.be.l.meedoen.2.ru1',
            emoji: '🤝',
            title: 'Iedereen heeft dezelfde rechten. Discriminatie mag niet, ook niet buiten je werk.',
            body: [
              'In de Grondwet staat dat iedereen gelijk is voor de wet.',
              'Discriminatie om je geloof, afkomst, geslacht of iets anders mag niet.',
              'Dat geldt op je werk, en ook bij wonen.',
            ],
            rule: 'geschreven',
            key: true,
          },
          // ⚖️ check: vrijheid van meningsuiting: Grondwet art. 19; maar bedreigen en aanzetten tot haat of discriminatie zijn strafbaar (Strafwetboek; Antiracismewet art. 20; unia.be)
          {
            kind: 'whatdo',
            id: 'r.be.l.meedoen.2.wd1',
            situation: 'Wie heeft gelijk?',
            options: [
              { id: 'a', text: 'Kevin. Je mag hier echt alles zeggen.', best: false, feedback: 'Bijna. Je mag veel zeggen, maar niet alles.' },
              { id: 'b', text: 'Mohammed. Je mag veel zeggen, maar er zijn grenzen.', best: true, feedback: 'Goed. Bedreigen en aanzetten tot haat mag niet.' },
              { id: 'c', text: 'Niemand. Over het nieuws praat je niet op je werk.', best: false, feedback: 'Dat mag wel. Doe het met respect.' },
            ],
            why: 'In België heb je vrijheid van meningsuiting. Je mag zeggen wat je denkt, ook over de regering. Maar bedreigen mag niet. Aanzetten tot haat of discriminatie mag ook niet. Dat is strafbaar. Op je werk kan je baas ook regels hebben.',
          },
          // ⚖️ check: Grondwet art. 10 (gelijk voor de wet) en art. 11 (rechten zonder discriminatie); art. 19 (vrijheid van eredienst en meningsuiting) (dekamer.be, Grondwet)
          {
            kind: 'truefalse',
            id: 'r.be.l.meedoen.2.tf1',
            statement: 'In de Grondwet staat dat iedereen gelijk is voor de wet.',
            answer: true,
            why: 'Dat staat in artikel 10 en 11 van de Grondwet. De Grondwet is de belangrijkste wet van België. Discriminatie om je geloof, afkomst, geslacht of iets anders mag niet. Ook vrijheid van geloof is een grondrecht.',
          },
          // ⚖️ check: discriminatie bij huren is verboden; melden bij Unia kan gratis (Antidiscriminatiewet; Vlaams Woninghuurdecreet; unia.be; vlaanderen.be "discriminatie melden"; zoekresultaat)
          {
            kind: 'whatdo',
            id: 'r.be.l.meedoen.2.wd2',
            situation: 'Fatima belt over een studio. De verhuurder hoort haar naam. "Hij is al weg." Een dag later staat de studio weer online. Wat kan Fatima het beste doen?',
            options: [
              { id: 'a', text: 'Ze laat het gaan. Zo gaat het nu eenmaal.', best: false, feedback: 'Ik snap het, maar het mag niet.' },
              { id: 'b', text: 'Ze stuurt de verhuurder een boos bericht.', best: false, feedback: 'Dat snap ik. Maar zo verandert er niets.' },
              { id: 'c', text: 'Ze schrijft op wat er gebeurde, en meldt het.', best: true, feedback: 'Goed. Bij Unia helpen ze haar gratis.' },
            ],
            why: 'Discriminatie is ook verboden bij huren. Schrijf op wat er gebeurde, met de datum. Maak een screenshot van de advertentie. Meld het bij Unia. Daar helpen ze je gratis.',
          },
          // ⚖️ check: politie: 101; bij gevaar 112 (belgium.be "noodnummers"; help.ts HELP_ROWS_BE)
          {
            kind: 'whoask',
            id: 'r.be.l.meedoen.2.wa1',
            question: 'Iemand bedreigt je op straat. Wie waarschuw je?',
            options: [
              { id: 'a', who: 'meldpunt', best: false, feedback: 'Unia helpt bij discriminatie. Bij bedreiging waarschuw je de politie.' },
              { id: 'b', who: 'politie', best: true, feedback: 'Goed. Bedreigen is strafbaar. Bij gevaar bel je 112.' },
              { id: 'c', who: 'justitiehuis', best: false, feedback: 'Het justitiehuis geeft advies. Bij bedreiging waarschuw je de politie.' },
            ],
            why: 'Bij bedreiging waarschuw je de politie: 101, of 112 bij gevaar. Bij discriminatie helpt Unia. Het justitiehuis geeft gratis eerste advies.',
          },
          { kind: 'model', id: 'r.be.l.meedoen.2.mo1', context: 'Je belt Unia over discriminatie.', nl: 'Ik wil discriminatie melden. Wat moet ik doen?' },
        ],
      },
      {
        // Les 16.3 · Recht en plicht: politie, rechter, een boete betwisten
        id: 'r.be.l.meedoen.3',
        title: 'Recht en plicht: politie, rechter, een boete',
        goal: 'Je weet wat de politie en de rechter doen. Je weet wat je doet met een boete die niet klopt.',
        remember: 'De wet geldt voor iedereen. Klopt een boete niet? Reageer op tijd.',
        // Wie kan je helpen: het justitiehuis (gratis eerste juridisch advies) · de politie (101,
        //   bij gevaar 112) · een advocaat (wie weinig verdient, krijgt soms een gratis advocaat).
        help: ['justitiehuis', 'politie'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.meedoen.3.sc1',
            picture: 'Jayden op een perron. Twee agenten in uniform spreken hem aan.',
            lines: [
              'Jayden wacht op de trein.',
              'Twee agenten spreken hem aan. "Mogen we uw identiteitskaart zien?"',
              'Jayden heeft niets fout gedaan.',
              'Hij vindt het vervelend.',
            ],
          },
          // ⚖️ check: tegen een GAS-boete kan je eerst je verweer sturen, en daarna in beroep gaan bij de politierechtbank (GAS-wet 24 juni 2013; stad.gent "GAS"; rechtbanken-tribunaux.be; zoekresultaat 30 okt 2026)
          // ⚖️ check: de termijn staat in de brief; let goed op de datum (GAS-wet 24 juni 2013)
          {
            kind: 'rule',
            id: 'r.be.l.meedoen.3.ru1',
            emoji: '📨',
            title: 'De wet geldt voor iedereen. Klopt een boete niet? Reageer op tijd.',
            body: [
              'België is een rechtsstaat. De regels gelden voor iedereen, ook voor de regering.',
              'Vind je een boete niet eerlijk? Dan mag je je verweer sturen.',
              'Hoe dat moet, staat in de brief. Let goed op de datum.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: vanaf 15 jaar moet je je identiteitskaart altijd bij je hebben en tonen als de politie erom vraagt (KB 25 maart 2003 betreffende de identiteitskaarten, art. 1; wet 19 juli 1991; vlaanderen.be "elektronische identiteitskaart"; ibz.rrn.fgov.be omzendbrief 5 juni 2008; zoekresultaat)
          // ⚖️ check: wie zijn kaart niet bij zich heeft, kan een boete krijgen (wet 19 juli 1991, art. 7; ibz.rrn.fgov.be; zoekresultaat)
          // ⚖️ check: klagen over de politie kan bij de politie zelf of bij het Comité P (comitep.be; niet geopend)
          {
            kind: 'whatdo',
            id: 'r.be.l.meedoen.3.wd1',
            situation: 'Wat doet Jayden?',
            options: [
              { id: 'a', text: 'Hij laat rustig zijn identiteitskaart zien.', best: true, feedback: 'Goed. Dat moet als de politie erom vraagt.' },
              { id: 'b', text: 'Hij zegt: "Ik heb niets gedaan," en loopt weg.', best: false, feedback: 'Dat is logisch. Maar dan kan hij een boete krijgen.' },
              { id: 'c', text: 'Hij zegt dat zijn kaart thuis ligt. Dat is niet waar.', best: false, feedback: 'Niet doen. Dan maakt hij het moeilijker voor zichzelf.' },
            ],
            why: 'Vanaf 15 jaar moet je je identiteitskaart altijd bij je hebben. Vraagt de politie erom? Dan laat je hem zien. Heb je hem niet bij? Dan kan je een boete krijgen. Vond je het niet eerlijk? Je kan later een klacht indienen.',
          },
          // ⚖️ check: rechtsstaat: ook de overheid is aan de wet gebonden; de rechter is onafhankelijk (Grondwet art. 151; belgium.be "justitie")
          {
            kind: 'truefalse',
            id: 'r.be.l.meedoen.3.tf1',
            statement: 'In België moet ook de regering zich aan de wet houden.',
            answer: true,
            why: 'België is een rechtsstaat. De regels gelden voor iedereen. Ook voor bedrijven en de regering. De politie zorgt voor veiligheid. Een rechter beslist bij een ruzie of een misdrijf. De rechter is onafhankelijk.',
          },
          // ⚖️ check: een GAS-boete is een boete van de gemeente, bijvoorbeeld voor afval op straat of overlast (GAS-wet 24 juni 2013; stad.gent "GAS 1-2-3 overlast"; zoekresultaat)
          // ⚖️ check: je verweer sturen kan meestal binnen 15 dagen na de brief; bij verkeer vaak 30 dagen (stad.gent; politie.be "sanctieprocedure administratieve geldboete"; zoekresultaat 30 okt 2026)
          // ⚖️ check: daarna kan je binnen één maand in beroep gaan bij de politierechtbank (GAS-wet art. 31; rechtbanken-tribunaux.be, oktober 2025; zoekresultaat)
          {
            kind: 'whatdo',
            id: 'r.be.l.meedoen.3.wd2',
            situation: 'Esra krijgt een GAS-boete van de gemeente. Er stond een zak naast de container. Die is niet van haar. Wat kan Esra het beste doen?',
            options: [
              { id: 'a', text: 'Ze betaalt. Een brief van de gemeente klopt altijd.', best: false, feedback: 'Ook de gemeente maakt fouten. Ze mag haar verweer sturen.' },
              { id: 'b', text: 'Ze belt de gemeente, en ze wacht op antwoord.', best: false, feedback: 'Bellen mag. Maar een telefoontje is meestal geen verweer. De datum loopt door.' },
              { id: 'c', text: 'Ze stuurt haar verweer, vóór de datum in de brief.', best: true, feedback: 'Goed. Zo kijkt iemand er opnieuw naar.' },
            ],
            why: 'Een GAS-boete is een boete van de gemeente. Klopt ze niet? Dan mag je je verweer sturen. Vaak heb je daar maar 15 dagen voor. Hoe het moet, staat in de brief. Daarna kan je nog naar de politierechtbank.',
          },
          // ⚖️ check: juridische eerstelijnsbijstand is gratis eerste advies, o.a. in het justitiehuis; wie weinig verdient, krijgt soms een gratis advocaat (juridische tweedelijnsbijstand, pro deo) (vlaanderen.be "juridische eerstelijnsbijstand"; balie.be; zoekresultaat)
          {
            kind: 'whoask',
            id: 'r.be.l.meedoen.3.wa1',
            question: 'Je wilt een boete betwisten. Waar krijg je gratis advies?',
            options: [
              { id: 'a', who: 'politie', best: false, feedback: 'De politie beslist niet over je verweer tegen een boete.' },
              { id: 'b', who: 'leidinggevende', best: false, feedback: 'Je werk gaat hier niet over.' },
              { id: 'c', who: 'justitiehuis', best: true, feedback: 'Goed. Daar krijg je gratis eerste advies.' },
            ],
            why: 'In het justitiehuis krijg je gratis eerste advies over je rechten. Soms heb je een advocaat nodig. Verdien je weinig? Dan krijg je soms een gratis advocaat.',
          },
          { kind: 'model', id: 'r.be.l.meedoen.3.mo1', context: 'Je belt over een boete die niet klopt.', nl: 'Ik ben het niet eens met deze boete. Hoe stuur ik mijn verweer?' },
        ],
      },
      {
        // Les 16.4 · Nieuws, nepnieuws en een mening. Neutraal: geen partijen, geen meningen over beleid.
        id: 'r.be.l.meedoen.4',
        title: 'Nieuws, nepnieuws en een mening',
        goal: 'Je checkt een bericht voor je het doorstuurt. Je geeft je mening met respect.',
        remember: 'Eerst checken, dan pas doorsturen. Wie zegt het, en waar staat het nog meer?',
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.meedoen.4.sc1',
            picture: 'Piotr in de refter met zijn gsm. In de groepsapp een bericht met veel uitroeptekens.',
            lines: [
              'Piotr zit in de groepsapp van zijn werk.',
              'Een collega stuurt een bericht door.',
              '"Vanaf maandag hebben alle Polen een vergunning nodig om te werken!!"',
              'Er staat geen naam of website bij.',
            ],
          },
          {
            kind: 'rule',
            id: 'r.be.l.meedoen.4.ru1',
            emoji: '📰',
            title: 'Eerst checken, dan pas doorsturen. Wie zegt het, en waar staat het nog meer?',
            body: [
              'Check een bericht voor je het doorstuurt.',
              'Wie zegt het? Staat het ook op een bekende nieuwssite?',
              'Een nepbericht wil vaak dat je schrikt of boos wordt.',
              'Je mag je mening geven. Doe het met respect, ook online.',
            ],
            rule: 'ongeschreven',
          },
          // ⚖️ check: mensen uit de EU hebben geen arbeidskaart of vergunning nodig om in België te werken (vrij verkeer van werknemers, art. 45 VWEU; werk.belgie.be "economische migratie"; niet geopend)
          {
            kind: 'whatdo',
            id: 'r.be.l.meedoen.4.wd1',
            situation: 'Piotr schrikt van het bericht. Wat kan Piotr het beste doen?',
            options: [
              { id: 'a', text: 'Hij stuurt het snel door. Dan weten zijn vrienden het ook.', best: false, feedback: 'Dat snap ik. Maar als het nep is, maakt hij iedereen bang.' },
              { id: 'b', text: 'Hij gelooft het. Het staat in de groepsapp van zijn werk.', best: false, feedback: 'Ook in een groepsapp staat soms nep. Check eerst waar het vandaan komt.' },
              { id: 'c', text: 'Hij zoekt op een site van de overheid of het klopt.', best: true, feedback: 'Goed. Daar staat wat echt geldt.' },
            ],
            why: 'Check een bericht voor je het doorstuurt. Wie zegt het? Staat het op een site van de overheid, zoals belgium.be? Of op een bekende nieuwssite? Mensen uit de EU hebben geen vergunning nodig om hier te werken.',
          },
          // ⚖️ check: nepnieuws speelt vaak in op angst of boosheid (Vlaamse Regulator voor de Media / Mediawijs, mediawijs.be; niet geopend)
          {
            kind: 'truefalse',
            id: 'r.be.l.meedoen.4.tf1',
            statement: 'Een nepbericht wil vaak dat je bang of boos wordt.',
            answer: true,
            why: 'Wie bang of boos is, deelt sneller. Daarom maakt nepnieuws je vaak bang of boos. Let op veel uitroeptekens, haast en geen naam. Kijk wie het zegt. En zoek of een bekende nieuwssite het ook heeft.',
          },
          // ⚖️ check: bedreigen en beledigen zijn strafbaar (Strafwetboek art. 327 e.v. en 448; zie r.be.l.meedoen.2)
          {
            kind: 'whatdo',
            id: 'r.be.l.meedoen.4.wd2',
            situation: "In de pauze praten de collega's van Esra over de verkiezingen. Esra denkt er anders over. Wat kan Esra het beste doen?",
            options: [
              { id: 'a', text: 'Ze zegt niets. Een mening geven is op je werk niet netjes.', best: false, feedback: 'Dat mag wel. Ze mag haar mening zeggen, met respect.' },
              { id: 'b', text: 'Ze zegt rustig wat zij denkt, en ze luistert ook.', best: true, feedback: 'Goed. Zo kan iedereen zijn mening geven.' },
              { id: 'c', text: 'Ze zegt dat hun mening dom is. Zij weet het beter.', best: false, feedback: 'Dat is niet respectvol. Dan komt er snel ruzie.' },
            ],
            why: 'Je mag je mening geven, ook op je werk. Iemand anders mag iets anders vinden. Luister naar elkaar, en blijf rustig. Schelden en bedreigen mag niet. Soms heeft je werk ook regels over hoe je praat.',
          },
          { kind: 'model', id: 'r.be.l.meedoen.4.mo1', context: 'Een collega stuurt een bericht dat je niet vertrouwt.', nl: 'Waar heb je dit gelezen? Ik wil eerst checken of het klopt.' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.meedoen.1.mo1': [
      { text: 'Ik weet niet of ik mag stemmen. Ik ga maar niet.', feedback: 'Vraag het aan de gemeente. Dan weet je het zeker.' },
      { text: 'Hallo, ik heb een vraag over de verkiezingen.', feedback: 'Dan weet de gemeente nog niet wat je wilt weten.' },
    ],
    'r.be.l.meedoen.2.mo1': [
      { text: 'Er is iets naars gebeurd. Ik weet niet zo goed wat.', feedback: 'Dan weet Unia niet waarom je belt. Zeg het duidelijk.' },
      { text: 'Ik wil discriminatie melden. Maar het helpt toch niet.', feedback: 'Een melding kan wel helpen. Vraag wat je moet doen.' },
    ],
    'r.be.l.meedoen.3.mo1': [
      { text: 'Deze boete klopt niet. Ik betaal hem dan maar.', feedback: 'Je mag je verweer sturen als de boete niet klopt.' },
      { text: 'Deze boete is onzin! Ik betaal helemaal niets, hoor!', feedback: 'Dat klinkt boos. Vraag rustig hoe je reageert.' },
    ],
    'r.be.l.meedoen.4.mo1': [
      { text: 'Wauw, wat erg! Ik stuur het meteen naar iedereen.', feedback: 'Dan deel je misschien nepnieuws. Check het eerst.' },
      { text: 'Dit is nep. Jij gelooft ook echt alles, hè?', feedback: 'Dat klinkt onaardig. Vraag liever rustig waar het vandaan komt.' },
    ],
  },
  advice: {
    'r.be.l.meedoen.1.ru1': 'civic',
    'r.be.l.meedoen.2.ru1': 'abuse',
    'r.be.l.meedoen.3.ru1': 'civic',
  },
  kun: [
    ['Ik kan nieuws checken voor ik het doorstuur.', '1F', 'lezen'],
    ['Ik kan mijn mening geven met respect.', '1F', 'gesprekken'],
    ['Ik kan de gemeente vragen of ik mag stemmen.', '1F', 'gesprekken'],
  ],
};
