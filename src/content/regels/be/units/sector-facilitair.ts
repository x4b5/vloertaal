import type { BeUnit } from '../types';

/**
 * Sector facilitair (België) · Werken in de facilitaire dienst: de Belgische versie van de
 * sectorunit r.facilitair (src/content/regels/units/sector2.ts, `facilitairUnit`). Dezelfde regels;
 * anders zijn de bronnen (GDPR en de Belgische privacywet, de Codex welzijn op het werk, het AREI
 * voor elektriciteit) en een paar woorden: onthaal, bezoekersbadge, pakjes, eerste interventieploeg.
 *
 * `// ⚖️ check:` = een feit dat de deskundige nakijkt, met de bron. Opgezocht op 23 nov 2026 uit
 * kennis van de regels; werk.belgie.be, gegevensbeschermingsautoriteit.be en fluvius.be zijn niet
 * geopend.
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.facilitair',
    title: 'Werken in de facilitaire dienst',
    emoji: '🛎️',
    color: '#4a6fa5',
    lessons: [
      {
        // Les F.1 · Bezoek, post en privacy
        id: 'r.be.l.facilitair.1',
        title: 'Bezoek, post en privacy',
        goal: 'Je ontvangt bezoek vriendelijk. Je geeft geen gegevens van collega’s aan vreemden.',
        remember: "Elke bezoeker meldt zich. Gegevens van collega's geef je niet zomaar.",
        // Wie kan je helpen: je leidinggevende · een ervaren collega · de DPO (de functionaris voor
        //   gegevensbescherming) van het bedrijf.
        help: ['leidinggevende', 'collega'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.facilitair.1.sc1',
            picture: 'Nadia achter de balie van het onthaal van een groot kantoor, met de telefoon aan haar oor.',
            lines: [
              'Nadia werkt aan het onthaal van een groot kantoor.',
              'De telefoon gaat.',
              'Een man zegt: "Ik ben een oude vriend van Henk."',
              '"Mag ik zijn gsm-nummer?"',
            ],
          },
          // ⚖️ check: telefoonnummers, adressen en uurroosters van collega's zijn persoonsgegevens; doorgeven aan een onbekende mag niet zonder grond (GDPR, Verordening (EU) 2016/679, art. 5 en 6; wet van 30 juli 2018 bescherming natuurlijke personen; gegevensbeschermingsautoriteit.be)
          // ⚖️ check: bij een evacuatie moet bekend zijn wie er binnen is (Codex boek III, titel 3: brandpreventie en de eerste interventieploeg); aanmelden met een badge is een huisregel
          {
            kind: 'rule',
            id: 'r.be.l.facilitair.1.ru1',
            emoji: '🪪',
            title: "Elke bezoeker meldt zich. Gegevens van collega's geef je niet zomaar.",
            body: [
              'Elke bezoeker schrijft zijn naam op, en krijgt een bezoekersbadge.',
              'Zo weet je wie er binnen is. Dat is belangrijk bij brand.',
              "Telefoonnummers, adressen en uurroosters van collega's zijn privé.",
              'Post en pakjes voor een ander maak je nooit open.',
            ],
            rule: 'geschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.facilitair.1.wd1',
            situation: 'De man wil het gsm-nummer van Henk. Wat kan Nadia het beste doen?',
            options: [
              { id: 'a', text: 'Ze geeft het nummer. Het is een vriend van Henk.', best: false, feedback: 'Dat snap ik. Maar ze weet niet of dat waar is.' },
              { id: 'b', text: 'Ze schrijft zijn naam en nummer op voor Henk.', best: true, feedback: 'Goed. Dan beslist Henk zelf of hij terugbelt.' },
              { id: 'c', text: 'Ze zegt niets, en legt meteen in.', best: false, feedback: 'Dat is onvriendelijk. Ze kan hem ook netjes helpen.' },
            ],
            why: 'Het nummer van een collega is privé. Geef het niet aan iemand die je niet kent. Vraag de naam en het nummer van de beller. Dan kan je collega zelf terugbellen.',
          },
          // ⚖️ check: bij een evacuatie moet bekend zijn wie er binnen is (Codex boek III, titel 3, brandpreventie; het evacuatieplan van het gebouw); aanmelden is een huisregel
          {
            kind: 'truefalse',
            id: 'r.be.l.facilitair.1.tf1',
            statement: 'Elke bezoeker meldt zich, ook als hij je collega goed kent.',
            answer: true,
            why: 'Bij brand moet je weten wie er binnen is. Laat ook niemand achter je mee binnen die je niet kent. Vraag vriendelijk bij wie hij moet zijn.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.facilitair.1.wd2',
            situation: 'Een koerier brengt een pakje. Eén hoek is nat en kapot. Wat kan Nadia het beste doen?',
            options: [
              { id: 'a', text: 'Ze tekent snel. De koerier heeft haast.', best: false, feedback: 'Dat snap ik. Maar dan lijkt het of het pakje goed was.' },
              { id: 'b', text: 'Ze maakt het pakje open om te kijken.', best: false, feedback: 'Post voor een ander maak je niet open.' },
              { id: 'c', text: 'Ze schrijft op dat het kapot is, en tekent dan.', best: true, feedback: 'Goed. Zo weet iedereen dat het al kapot was.' },
            ],
            why: 'Kijk naar een pakje voor je tekent. Is het kapot? Schrijf het op. Ruikt een pakje raar, of lekt het? Maak het niet open, en zeg het tegen je leidinggevende.',
          },
          { kind: 'model', id: 'r.be.l.facilitair.1.mo1', context: 'Iemand belt en vraagt het nummer van een collega.', nl: 'Dat nummer mag ik niet geven. Zal ik vragen of ze u terugbelt?' },
        ],
      },
      {
        // Les F.2 · Storingen, trappen en gas
        id: 'r.be.l.facilitair.2',
        title: 'Storingen, trappen en gas',
        goal: 'Je meldt storingen en lekken meteen. Je werkt op hoogte met een trap.',
        remember: 'Iets kapot? Meld het. Herstel alleen wat je geleerd hebt.',
        // Wie kan je helpen: je leidinggevende · de technische dienst van het gebouw · een ervaren
        //   collega.
        help: ['leidinggevende', 'collega'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.facilitair.2.sc1',
            picture: 'Jayden in de gang van een school, onder een kapotte lamp. Naast hem staat een bureaustoel op wieltjes.',
            lines: [
              'Jayden werkt bij de facilitaire dienst van een school.',
              'In de gang is een lamp kapot.',
              'De trap staat op een andere verdieping.',
              'Naast de lamp staat een bureaustoel.',
            ],
          },
          // ⚖️ check: aan elektrische installaties werkt alleen wie daarvoor bevoegd is (AREI, Algemeen Reglement op de Elektrische Installaties: BA4 en BA5; Codex boek III, titel 2); gas: een erkende installateur
          // ⚖️ check: voor werk op hoogte een geschikte, stabiele ladder of trap, nooit een stoel (Codex boek IV, titel 5: tijdelijke werken op hoogte; KB 31 augustus 2005)
          {
            kind: 'rule',
            id: 'r.be.l.facilitair.2.ru1',
            emoji: '🛠️',
            title: 'Iets kapot? Meld het. Herstel alleen wat je geleerd hebt.',
            body: [
              'Zie je een lek, een kapotte lamp of een deur die niet sluit? Meld het.',
              'Werk niet zelf aan stroom, gas of verwarming. Dat doet een vakman.',
              'Voor een hoge plank of lamp gebruik je een trap, nooit een stoel.',
              'Ruik je gas? Gebruik geen schakelaar. Haal iedereen weg, en bel buiten om hulp.',
            ],
            rule: 'geschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.facilitair.2.wd1',
            situation: 'Jayden wil de lamp snel vervangen. Wat kan Jayden het beste doen?',
            options: [
              { id: 'a', text: 'Hij gaat op de bureaustoel staan. Het is maar even.', best: false, feedback: 'Dat snap ik. Maar een bureaustoel kan wegrollen.' },
              { id: 'b', text: 'Hij haalt eerst de trap van de andere verdieping.', best: true, feedback: 'Goed. Op een trap sta je stevig.' },
              { id: 'c', text: 'Hij vraagt een collega om de stoel vast te houden.', best: false, feedback: 'Goed bedoeld. Maar ook dan kan de stoel draaien.' },
            ],
            why: 'Een stoel kan wegrollen of omvallen. Gebruik voor werk op hoogte altijd een trap. Zet hem op een vlakke vloer, helemaal open. Doe eerst het licht uit.',
          },
          // ⚖️ check: melden is goed gedrag en de huisregel; de werkgever moet zorgen voor een veilige werkplek (Wet welzijn 4 augustus 1996, art. 5; Codex boek III)
          {
            kind: 'truefalse',
            id: 'r.be.l.facilitair.2.tf1',
            statement: 'Een klein lek meld je meteen, ook als het nog niet erg is.',
            answer: true,
            why: 'Een klein lek kan grote schade worden. Zeg waar het is, wat je ziet en sinds wanneer. Druppelt het? Zet er een emmer onder.',
          },
          // ⚖️ check: ruik je gas: geen schakelaar en geen gsm in de buurt, ramen open, mensen weg, buiten bellen (Fluvius, "Gasgeur"; bij direct gevaar 112; fluvius.be niet geopend)
          {
            kind: 'truefalse',
            id: 'r.be.l.facilitair.2.tf2',
            statement: 'Ruik je gas in het gebouw? Dan doe je eerst het licht aan om te kijken.',
            answer: false,
            why: 'Een vonk van een schakelaar kan gas laten ontploffen. Gebruik daar geen schakelaar en geen gsm. Zet ramen en deuren open. Haal iedereen naar buiten. Bel buiten om hulp.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.facilitair.2.wa1',
            question: 'Een stopcontact in de refter geeft vonken. Tegen wie zeg je het?',
            options: [
              { id: 'a', who: 'leidinggevende', best: true, feedback: 'Goed. Je leidinggevende laat het herstellen door iemand die dat mag.' },
              { id: 'b', who: 'collega', best: false, feedback: 'Waarschuw je collega’s gerust. Maar zeg het ook tegen je leidinggevende.' },
              { id: 'c', who: 'tsw', best: false, feedback: 'Die controleren loon en uren. Zeg het op je werk.' },
            ],
            why: 'Een kapot stopcontact is gevaarlijk. Je leidinggevende laat het herstellen door iemand die dat mag. Plak er een briefje op: niet gebruiken.',
          },
          { kind: 'model', id: 'r.be.l.facilitair.2.mo1', context: 'Je ziet water uit het plafond druppelen in de gang.', nl: 'In de gang druppelt water uit het plafond. Ik heb er een emmer onder gezet.' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.facilitair.1.mo1': [
      { text: 'Natuurlijk, ik zoek het nummer even voor u op.', feedback: 'Het nummer van een collega is privé. Geef het niet.' },
      { text: 'Dat gaat u helemaal niets aan. Ik leg nu in, hoor.', feedback: 'Dat klinkt boos. Bied liever aan dat ze terugbelt.' },
    ],
    'r.be.l.facilitair.2.mo1': [
      { text: 'Er is iets met het plafond. Iemand moet maar eens kijken.', feedback: 'Dat is vaag. Zeg waar het is en wat je ziet.' },
      { text: 'In de gang druppelt water. Ik ga het plafond zelf openmaken.', feedback: 'Herstel niet zelf. Meld het, en zet een emmer neer.' },
    ],
  },
  advice: {
    'r.be.l.facilitair.1.ru1': 'advice',
    'r.be.l.facilitair.2.ru1': 'advice',
  },
};
