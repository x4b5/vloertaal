import type { BeUnit } from '../types';

/**
 * Sector techniek (België) · Werken in de techniek: de Belgische versie van de sectorunit
 * r.techniek (src/content/regels/units/sector.ts, `techniekUnit`). In plaats van NEN 3140: het AREI
 * (Algemeen Reglement op de Elektrische Installaties) met de codes BA4 (gewaarschuwd persoon) en
 * BA5 (vakbekwaam persoon). Vlaamse woorden: zekeringkast, stopcontact, mentor, preventieadviseur.
 *
 * `// ⚖️ check:` = een feit dat de deskundige nakijkt, met de bron. Opgezocht op 30 okt 2026, alleen
 * via zoekresultaten: economie.fgov.be en werk.belgie.be waren in deze sessie niet te openen
 * (netwerk geblokkeerd, 30 okt 2026).
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.techniek',
    title: 'Werken in de techniek',
    emoji: '🔧',
    color: '#5c6f82',
    lessons: [
      {
        // Les TE.1 · Gereedschap, vonken en lawaai
        id: 'r.be.l.techniek.1',
        title: 'Gereedschap, vonken en lawaai',
        goal: 'Je beschermt je ogen en oren bij slijpen en boren. Je houdt je werkplek netjes.',
        remember: 'Slijpen, boren of zagen? Eerst je bril en gehoorbescherming op.',
        // Wie kan je helpen: je leidinggevende of chef in de werkplaats · je mentor · de
        //   preventieadviseur · Toezicht op het Welzijn op het Werk.
        help: ['leidinggevende', 'praktijkopleider'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.techniek.1.sc1',
            picture: 'Sanne in een metaalwerkplaats, bij een slijpmachine. Op de werkbank liggen kleine metalen spanen.',
            lines: [
              'Sanne loopt stage in een metaalwerkplaats.',
              'Ze moet een stuk ijzer kort slijpen.',
              'Het is maar 1 minuut werk.',
              'Haar veiligheidsbril ligt in haar kastje.',
            ],
          },
          // ⚖️ check: persoonlijke beschermingsmiddelen krijg je gratis van je werkgever (Codex welzijn op het werk, boek IX, titel 2; werk.belgie.be; niet geopend 30 okt 2026)
          // ⚖️ check: bij hard lawaai: gehoorbescherming ter beschikking vanaf 80 dB(A), dragen vanaf 85 dB(A) (Codex boek V, titel 3 lawaai; Europese richtlijn 2003/10/EG; werk.belgie.be; niet geopend)
          {
            kind: 'rule',
            id: 'r.be.l.techniek.1.ru1',
            emoji: '🥽',
            title: 'Slijpen, boren of zagen? Eerst je bril en gehoorbescherming op.',
            body: [
              'Bij slijpen, boren en zagen vliegen er vonken en spanen.',
              'Draag dan een veiligheidsbril. Bij hard lawaai ook gehoorbescherming.',
              'Je werkgever geeft deze spullen gratis.',
              'Spanen zijn scherp. Ruim ze op met een borstel, niet met je hand.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: de veiligheidsbril krijg je gratis (Codex boek IX, titel 2); 1 seconde en 1 minuut zijn voorbeelden (Redactie)
          {
            kind: 'whatdo',
            id: 'r.be.l.techniek.1.wd1',
            situation: 'Sanne wil snel beginnen. Wat kan Sanne het beste doen?',
            options: [
              { id: 'a', text: 'Ze slijpt even zonder bril. Het is maar 1 minuut.', best: false, feedback: 'Dat snap ik. Maar een vonk in je oog gaat heel snel.' },
              { id: 'b', text: 'Ze houdt haar hoofd ver weg van de slijpschijf.', best: false, feedback: 'Goed bedoeld. Maar vonken en spanen vliegen ver.' },
              { id: 'c', text: 'Ze haalt eerst haar bril uit haar kastje.', best: true, feedback: 'Goed. Die minuut is het waard.' },
            ],
            why: 'Bij slijpen, boren en zagen vliegen er vonken en spanen. Die kunnen je oog beschadigen, in 1 seconde. Draag altijd je veiligheidsbril. Je werkgever geeft hem gratis.',
          },
          // ⚖️ check: boven 85 dB(A) moet je gehoorbescherming dragen; je werkgever geeft die gratis (Codex boek V, titel 3; boek IX, titel 2)
          {
            kind: 'truefalse',
            id: 'r.be.l.techniek.1.tf1',
            statement: 'Bij hard lawaai mag je zelf kiezen of je gehoorbescherming draagt.',
            answer: false,
            why: 'Is het lawaai hard? Dan moet je gehoorbescherming dragen. Je werkgever geeft die gratis. Gehoorschade gaat niet meer over. Je merkt het vaak pas na jaren.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.techniek.1.wd2',
            situation: 'Op de werkbank liggen veel spanen. Sanne wil ze weghalen. Wat kan Sanne het beste doen?',
            options: [
              { id: 'a', text: 'Ze veegt ze weg met een borstel of een kwast.', best: true, feedback: 'Goed. Zo snijdt ze haar handen niet.' },
              { id: 'b', text: 'Ze blaast ze weg met de persluchtslang.', best: false, feedback: 'Dat is logisch. Maar dan vliegen de spanen alle kanten op.' },
              { id: 'c', text: 'Ze veegt ze met haar hand in de bak.', best: false, feedback: 'Spanen zijn scherp. Zo snijdt ze in haar hand.' },
            ],
            why: 'Metalen spanen zijn scherp en soms heet. Pak ze niet met je blote hand. Gebruik een borstel of een kwast. Blaas ze niet weg met perslucht. Dan vliegen ze in iemands oog.',
          },
          // ⚖️ check: vonken van slijpen en lassen kunnen brand geven; voor heet werk vraagt het bedrijf vaak een vergunning voor brandgevaarlijke werken en een brandwacht (Codex boek III, titel 3 brandpreventie; verzekeraars, Assuralia; niet geopend)
          {
            kind: 'truefalse',
            id: 'r.be.l.techniek.1.tf2',
            statement: 'Vonken van slijpen of lassen kunnen een brand geven.',
            answer: true,
            why: 'Vonken vliegen ver. Ze kunnen karton, hout of verf laten branden. Dat heet heet werk. Haal eerst weg wat kan branden. Vraag of er een blusser klaarstaat. Soms blijft iemand na het werk nog kijken.',
          },
          { kind: 'model', id: 'r.be.l.techniek.1.mo1', context: 'Je kunt je veiligheidsbril niet vinden.', nl: 'Ik heb geen veiligheidsbril. Waar kan ik er een halen?' },
        ],
      },
      {
        // Les TE.2 · Stroom: nooit zomaar (AREI, BA4 en BA5)
        id: 'r.be.l.techniek.2',
        title: 'Stroom: nooit zomaar',
        goal: 'Je werkt niet aan iets dat onder stroom staat. Je weet wat BA4 en BA5 zijn.',
        remember: 'Werk nooit aan iets onder stroom. Eerst moet de stroom eraf, door iemand die dat mag.',
        // Wie kan je helpen: je leidinggevende (die zegt wie BA4 of BA5 is) · een collega met BA5 ·
        //   de preventieadviseur.
        help: ['leidinggevende', 'collega'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.techniek.2.sc1',
            picture: 'Mohammed in een gang bij een open zekeringkast. Uit een stopcontact hangen losse draden.',
            lines: [
              'Mohammed werkt bij een onderhoudsbedrijf.',
              'Hij moet een stopcontact vervangen bij een klant.',
              'De klant zegt: "De stroom is er al af, hoor."',
              'Henk is vandaag bij een andere klus.',
            ],
          },
          // ⚖️ check: in België gelden voor elektrische installaties het AREI (Algemeen Reglement op de Elektrische Installaties, boek 1-3, KB 8 september 2019) en Codex boek III, titel 2 (economie.fgov.be; werk.belgie.be; niet geopend)
          // ⚖️ check: aan een installatie werken mag alleen wie de werkgever een code geeft: BA4 (gewaarschuwd persoon) of BA5 (vakbekwaam persoon); de werkgever kent de code toe, schriftelijk (AREI boek 3, deel 4, hoofdstuk 4.4 (vroeger art. 47); mensura.be "BA4 of BA5"; vlaanderen.be opleidingsdatabank; zoekresultaat 30 okt 2026)
          // ⚖️ check: een BA4 werkt onder toezicht van een BA5; de BA5 kan zelf de risico's inschatten (mensura.be; prevent.be; zoekresultaat)
          // ⚖️ check: eerst spanningsloos maken, beveiligen tegen herinschakelen (slot of bordje), meten dat er geen spanning is (AREI boek 3, werken in spanningsloze toestand; zoekresultaat) — de vijf stappen nakijken
          {
            kind: 'rule',
            id: 'r.be.l.techniek.2.ru1',
            emoji: '⚡',
            title: 'Werk nooit aan iets onder stroom. Eerst moet de stroom eraf, door iemand die dat mag.',
            body: [
              'Je baas geeft je een code: BA4 of BA5.', 'Werk alleen aan stroom als je die code hebt.',
              'Eerst gaat de stroom eraf. Iemand meet of het echt uit is.',
              'Er komt een slot of bordje bij de zekeringkast. Zo zet niemand de stroom weer aan.',
              'Een kapotte kabel of stekker? Niet gebruiken, en melden.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: alleen met BA4 of BA5, toegekend door de werkgever (AREI boek 3; mensura.be; zoekresultaat)
          {
            kind: 'whatdo',
            id: 'r.be.l.techniek.2.wd1',
            situation: 'De klant zegt dat de stroom eraf is. Wat kan Mohammed het beste doen?',
            options: [
              { id: 'a', text: 'Hij begint meteen. De klant weet het vast wel.', best: false, feedback: 'Dat snap ik. Maar misschien zette de klant de verkeerde zekering uit.' },
              { id: 'b', text: 'Hij belt Henk, en vraagt wie meet of het uit is.', best: true, feedback: 'Goed. Eerst zeker weten, dan pas werken.' },
              { id: 'c', text: 'Hij pakt de draden alleen vast met handschoenen aan.', best: false, feedback: 'Gewone werkhandschoenen beschermen niet tegen stroom.' },
            ],
            why: 'Een klant zet soms de verkeerde zekering uit. Werk alleen aan stroom als je een code hebt: BA4 of BA5. Eerst gaat de stroom eraf. Dan meet iemand of het echt uit is.',
          },
          // ⚖️ check: BA4 = gewaarschuwd persoon (kent de risico's, werkt onder toezicht); BA5 = vakbekwaam persoon (mag zelf beslissen en BA4 begeleiden) (mensura.be; securex.be opleiding BA4; zoekresultaat)
          {
            kind: 'truefalse',
            id: 'r.be.l.techniek.2.tf1',
            statement: 'Met BA4 mag je alles aan stroom alleen doen.',
            answer: false,
            why: 'BA4 betekent: je kent de gevaren van stroom. Je werkt dan onder toezicht van iemand met BA5. BA5 betekent: je bent vakbekwaam. Die mag zelf beslissen hoe het veilig kan. Je baas geeft je de code, op papier.',
          },
          // ⚖️ check: een kapotte kabel of stekker niet gebruiken, apart leggen en melden (Codex boek IV, arbeidsmiddelen; AREI)
          {
            kind: 'truefalse',
            id: 'r.be.l.techniek.2.tf2',
            statement: 'Een kabel met een klein scheurtje mag je nog even gebruiken.',
            answer: false,
            why: 'Een kapotte kabel of stekker is gevaarlijk. Je kunt een schok krijgen, of er komt brand. Gebruik hem niet. Leg hem apart, en meld het. Dan kan iemand hem herstellen of weggooien.',
          },
          // ⚖️ check: de werkgever zegt wie BA4 of BA5 is (AREI boek 3; mensura.be; zoekresultaat)
          {
            kind: 'whoask',
            id: 'r.be.l.techniek.2.wa1',
            question: 'Je moet aan een machine werken. Je weet niet of je aan de stroom mag komen. Wie vraag je het?',
            options: [
              { id: 'a', who: 'collega', best: false, feedback: 'Een collega weet het misschien niet zeker. Vraag het je leidinggevende.' },
              { id: 'b', who: 'tsw', best: false, feedback: 'Die controleren loon en uren. Vraag het eerst op je werk.' },
              { id: 'c', who: 'leidinggevende', best: true, feedback: 'Goed. Je leidinggevende weet of je BA4 of BA5 bent.' },
            ],
            why: 'Je leidinggevende zegt wie aan stroom mag werken. Daar hoort een opleiding bij, en een code: BA4 of BA5. Weet je het niet zeker? Vraag het altijd eerst.',
          },
          { kind: 'model', id: 'r.be.l.techniek.2.mo1', context: 'Je moet een stopcontact vervangen bij een klant.', nl: 'Is de stroom er echt af? Wie kan dat even meten?' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.techniek.1.mo1': [
      { text: 'Ik heb geen bril, maar het gaat wel. Ik ben zo klaar.', feedback: 'Dan werk je zonder bescherming. Vraag eerst een bril.' },
      { text: 'Wie heeft mijn bril gepakt? Dit is echt niet normaal!', feedback: 'Dat klinkt boos. Vraag liever rustig waar je er een krijgt.' },
    ],
    'r.be.l.techniek.2.mo1': [
      { text: 'De klant zegt dat het uit is. Dan begin ik maar.', feedback: 'Dan weet je het niet zeker. Laat het eerst meten.' },
      { text: 'Ik doe het gewoon met stroom erop. Ik ben voorzichtig.', feedback: 'Voorzichtig is niet genoeg. Eerst moet de stroom eraf.' },
    ],
  },
  advice: {
    'r.be.l.techniek.1.ru1': 'advice',
    'r.be.l.techniek.2.ru1': 'advice',
  },
  kun: [
    ['Ik kan vragen of de stroom eraf is.', '1F', 'gesprekken'],
    ['Ik kan uitleggen wat BA4 en BA5 zijn.', '1F', 'spreken'],
  ],
};
