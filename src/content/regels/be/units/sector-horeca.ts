import type { BeUnit } from '../types';

/**
 * Sector horeca (België) · Werken in de horeca: de Belgische versie van de sectorunit r.horeca
 * (src/content/regels/units/sector.ts, `horecaUnit`). Vlaamse woorden: FAVV, autocontrolegids,
 * paritair comité 302, barema, geregistreerd kassasysteem (de witte kassa), kasticket.
 *
 * `// ⚖️ check:` = een feit dat de deskundige nakijkt, met de bron. Opgezocht op 30 okt 2026, alleen
 * via zoekresultaten: favv-afsca.be, fin.belgium.be en werk.belgie.be waren in deze sessie niet te
 * openen (netwerk geblokkeerd, 30 okt 2026).
 * Redactie: de Nederlandse les zegt "fooi telt niet mee voor je minimumloon". In België kan het loon
 *   in de horeca deels uit bedieningsgeld bestaan (securex.be "werknemers betaald met fooien en
 *   bedieningsgeld"). Daarom zegt deze les dat niet, maar: je loon mag niet onder het barema. ⚖️
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.horeca',
    title: 'Werken in de horeca',
    emoji: '🍳',
    color: '#d0582a',
    lessons: [
      {
        // Les H.1 · Hygiëne in de keuken
        id: 'r.be.l.horeca.1',
        title: 'Hygiëne in de keuken',
        goal: 'Je weet wat HACCP en het FAVV zijn. Je koelt eten goed, en je houdt rauw en klaar eten apart.',
        remember: 'Werk proper, koel goed, en zet de datum erop.',
        // Wie kan je helpen: de chef of je leidinggevende · de autocontrolegids voor de horeca (FAVV).
        help: ['leidinggevende'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.horeca.1.sc1',
            picture: 'Jayden in een restaurantkeuken. Hij zet een bak kip in een koelkast. Op de bak een sticker.',
            lines: [
              'Jayden werkt in de keuken van een restaurant.',
              'Chef Sanne wijst naar de koelkast.',
              '"Op elke bak een sticker met de datum. Dat is HACCP."',
              'Jayden knikt, maar hij snapt het niet helemaal.',
            ],
          },
          // ⚖️ check: HACCP is een Europees systeem voor veilig eten; elk bedrijf met eten moet aan autocontrole doen (Verordening (EG) 852/2004 art. 5; KB 14 november 2003 autocontrole; favv-afsca.be; zoekresultaat)
          // ⚖️ check: gekoelde bereidingen bewaar je op hoogstens 7 graden; voor gehakt en vers gevogelte hoogstens 4 graden; anders wat op de verpakking staat (FAVV-folders "gelegenheidsverkoop" en "braderies", kortrijk.be en mechelen.be; autocontrolegids G-023 horeca, bijlage temperaturen; zoekresultaat 30 okt 2026)
          {
            kind: 'rule',
            id: 'r.be.l.horeca.1.ru1',
            emoji: '🧊',
            title: 'Werk proper, koel goed, en zet de datum erop.',
            body: [
              'HACCP is een systeem voor veilig eten.',
              'Zet op elke bak een sticker met de datum.',
              'Gekoeld eten bewaar je op 7 graden of kouder. Gehakt nog kouder.',
              'Houd rauw vlees en klaar eten apart.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: voor de horeca staat het in de autocontrolegids G-023 (favv-afsca.be "autocontrolegidsen"; horecavlaanderen.be; zoekresultaat)
          // ⚖️ check: het FAVV (Federaal Agentschap voor de Veiligheid van de Voedselketen) controleert restaurants (favv-afsca.be)
          {
            kind: 'truefalse',
            id: 'r.be.l.horeca.1.tf1',
            statement: 'HACCP is een manier van werken om eten veilig te houden.',
            answer: true,
            why: 'HACCP is een systeem voor veilig eten. Elk bedrijf met eten moet zo werken. Voor de horeca staat het in een gids: de autocontrolegids. Bijvoorbeeld: stickers met de datum, goed koelen en proper werken. Een controleur van het FAVV komt soms kijken.',
          },
          // ⚖️ check: gekoelde bereidingen op hoogstens 7 graden (FAVV-folders; G-023; zie de regel)
          {
            kind: 'whatdo',
            id: 'r.be.l.horeca.1.wd1',
            situation: 'Een bak saus staat al 2 uur op het aanrecht. Het is warm in de keuken. Wat kan Jayden het beste doen?',
            options: [
              { id: 'a', text: 'Hij zet de bak snel terug in de koelkast.', best: false, feedback: 'Dat is logisch. Maar misschien is de saus al niet meer goed.' },
              { id: 'b', text: 'Hij vraagt de chef wat ermee moet.', best: true, feedback: 'Goed. De chef weet wat de regels zijn.' },
              { id: 'c', text: 'Hij ruikt eraan. Ruikt het goed? Dan is het oké.', best: false, feedback: 'Bacteriën ruik je niet altijd.' },
            ],
            why: 'Gekoeld eten bewaar je in de koelkast, op 7 graden of kouder. Stond het te lang warm? Dan kunnen er bacteriën in groeien. Weet je het niet zeker? Vraag het, of gooi het weg.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.horeca.1.wd2',
            situation: 'Jayden heeft net rauwe kip gesneden. Nu moet hij sla snijden. Wat kan Jayden het beste doen?',
            options: [
              { id: 'a', text: 'Hij wast zijn handen, en pakt een propere plank.', best: true, feedback: 'Goed. Zo komen er geen bacteriën van de kip op de sla.' },
              { id: 'b', text: 'Hij spoelt het mes even af onder de kraan.', best: false, feedback: 'Dat is niet genoeg. De plank en zijn handen zijn ook vuil.' },
              { id: 'c', text: 'Hij gebruikt dezelfde plank. Hij snijdt de sla toch heel snel.', best: false, feedback: 'Snel helpt niet. Bacteriën gaan meteen mee.' },
            ],
            why: 'Rauw vlees heeft vaak bacteriën. Houd rauw en klaar eten altijd apart. Gebruik propere planken en messen. Was je handen na rauw vlees.',
          },
          { kind: 'model', id: 'r.be.l.horeca.1.mo1', context: 'Je weet niet zeker of eten nog goed is.', nl: 'Chef, deze saus stond lang buiten. Wat doe ik ermee?' },
        ],
      },
      {
        // Les H.2 · Allergenen, de kassa en je loon
        id: 'r.be.l.horeca.2',
        title: 'Allergenen, de kassa en je loon',
        goal: 'Je raadt nooit bij een vraag over allergie. Je weet wat de witte kassa is, en wat je minstens verdient.',
        remember: 'Allergie? Raad nooit. Vraag het na in de keuken.',
        // Wie kan je helpen: de chef of je leidinggevende · de vakbond · bij te weinig loon:
        //   Toezicht op de Sociale Wetten.
        help: ['leidinggevende', 'vakbond', 'tsw'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.horeca.2.sc1',
            picture: 'Esra in de bediening met een notitieboekje. Een gast wijst naar de taart op de kaart.',
            lines: [
              'Esra werkt in de bediening van een café.',
              'Een gast vraagt: "Zitten er noten in de taart? Ik ben allergisch."',
              'Esra weet het niet zeker.',
              'Het is druk.',
            ],
          },
          // ⚖️ check: een restaurant moet weten welke van de 14 allergenen in het eten zitten, en het aan de gast kunnen zeggen (Verordening (EU) 1169/2011, bijlage II; KB 17 juli 2014 allergenen niet-voorverpakt; favv-afsca.be; zoekresultaat)
          // ⚖️ check: in een horecazaak met een geregistreerd kassasysteem gaat elke verkoop via de kassa en krijgt de klant een kasticket (KB 30 december 2009; fin.belgium.be "geregistreerd kassasysteem"; GKS 2.0 verplicht vanaf 1 juli 2026 voor nieuwe zaken; securex.be en legalnews.be; zoekresultaat 30 okt 2026)
          // ⚖️ check: niet elke horecazaak heeft een witte kassa: de plicht hangt af van de omzet uit maaltijden (fiscal-requirements.com; Lightspeed-gids; zoekresultaat) — TWIJFEL: grens nakijken
          // ⚖️ check: in de horeca valt je loon onder paritair comité 302; je loon mag niet lager zijn dan het barema (werk.belgie.be, minimumlonen PC 302; partena-professional.be "sectoraal akkoord PC 302"; zoekresultaat)
          {
            kind: 'rule',
            id: 'r.be.l.horeca.2.ru1',
            emoji: '🥜',
            title: 'Allergie? Raad nooit. Vraag het na in de keuken.',
            body: [
              'Een restaurant moet weten welke allergenen in het eten zitten.',
              'Raad nooit. Vraag het na in de keuken.',
              'Heeft je zaak een witte kassa? Dan gaat elke verkoop via de kassa.',
              'Je loon is minstens het barema van paritair comité 302.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: het gaat om 14 allergenen (Verordening (EU) 1169/2011, bijlage II)
          {
            kind: 'whatdo',
            id: 'r.be.l.horeca.2.wd1',
            situation: 'De gast is allergisch voor noten. Wat kan Esra het beste doen?',
            options: [
              { id: 'a', text: 'Ze zegt: "Nee hoor, dat denk ik niet."', best: false, feedback: 'Dat snap ik. Maar raden kan iemand heel ziek maken.' },
              { id: 'b', text: 'Ze zegt: "Ik vraag het even na in de keuken."', best: true, feedback: 'Goed. Zo krijgt de gast het juiste antwoord.' },
              { id: 'c', text: 'Ze raadt de gast aan om iets anders te kiezen.', best: false, feedback: 'Vriendelijk bedoeld. Maar de gast wil een eerlijk antwoord.' },
            ],
            why: 'Sommige mensen worden heel ziek van noten, melk of gluten. Dat heet een allergie. Een restaurant moet weten welke allergenen in het eten zitten. Het gaat om 14 allergenen. Raad nooit. Vraag het na.',
          },
          // ⚖️ check: met een geregistreerd kassasysteem (de witte kassa) moet elke verkoop via de kassa, met een kasticket voor de klant (KB 30 december 2009; fin.belgium.be; zoekresultaat)
          // ⚖️ check: met de witte kassa registreren werknemers ook hun aanwezigheid: begin en einde van hun dienst (elektronische aanwezigheidsregistratie horeca; securex.be "horeca en de kassakorting"; zoekresultaat)
          {
            kind: 'truefalse',
            id: 'r.be.l.horeca.2.tf1',
            statement: 'Heeft je zaak een witte kassa? Dan gaat elke verkoop via de kassa.',
            answer: true,
            why: 'Een witte kassa is een geregistreerde kassa. Elke verkoop gaat erdoor, en de klant krijgt een kasticket. Vaak meld je op de kassa ook wanneer je begint en stopt. Zo staan je uren juist.',
          },
          // ⚖️ check: hoe de fooi verdeeld wordt, verschilt per zaak; vragen is normaal (gewoonte; jubel.be "naar wie gaan de fooien?"; zoekresultaat)
          {
            kind: 'whatdo',
            id: 'r.be.l.horeca.2.wd2',
            situation: 'Esra werkt er al 2 maanden. Ze hoort niets over de fooi. Wat kan Esra het beste doen?',
            options: [
              { id: 'a', text: 'Ze vraagt haar leidinggevende hoe het team de fooi verdeelt.', best: true, feedback: 'Goed. Elk team doet het anders. Vragen is normaal.' },
              { id: 'b', text: 'Ze pakt elke avond zelf wat geld uit de pot.', best: false, feedback: 'Niet doen. Dan lijkt het op stelen.' },
              { id: 'c', text: 'Ze zegt niets. Fooi is toch niet zo belangrijk.', best: false, feedback: 'Mag. Maar fooi kan best veel geld zijn.' },
            ],
            why: 'Elke zaak verdeelt fooi op een eigen manier. Soms krijgt iedereen evenveel. Soms gaat het naar uren. Vraag het gewoon. Het is geen rare vraag.',
          },
          // ⚖️ check: Toezicht op de Sociale Wetten controleert of je minstens het barema krijgt (werk.belgie.be; askWho.ts tsw)
          {
            kind: 'whoask',
            id: 'r.be.l.horeca.2.wa1',
            question: 'Je krijgt minder loon dan het barema van je sector. Je baas doet er niets aan. Waar meld je dat?',
            options: [
              { id: 'a', who: 'politie', best: false, feedback: 'De politie is voor misdaad en gevaar.' },
              { id: 'b', who: 'tsw', best: true, feedback: 'Goed. Zij controleren of je genoeg loon krijgt.' },
              { id: 'c', who: 'interimkantoor', best: false, feedback: 'Werk je niet via een interimkantoor? Dan kan dat kantoor niets doen.' },
            ],
            why: 'Te weinig loon kan je melden bij Toezicht op de Sociale Wetten. Ook een vakbond helpt je.',
          },
          { kind: 'model', id: 'r.be.l.horeca.2.mo1', context: 'Een gast vraagt naar allergenen.', nl: 'Ik weet het niet zeker. Ik vraag het even in de keuken.' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.horeca.1.mo1': [
      { text: 'Deze saus stond lang buiten. Ik gebruik hem toch maar.', feedback: 'Dan kan iemand ziek worden. Vraag het eerst aan de chef.' },
      { text: 'Ik denk dat er iets mis is met iets. Is dat erg?', feedback: 'Dan weet de chef niet wat je bedoelt. Zeg welke saus.' },
    ],
    'r.be.l.horeca.2.mo1': [
      { text: 'Ik denk dat het wel goed is. Er zit vast niets in.', feedback: 'Bij allergenen gok je niet. Een gast kan er ziek van worden.' },
      { text: 'Dat weet ik niet. Kijkt u maar zelf op de kaart.', feedback: 'Dan help je de gast niet. Vraag het in de keuken.' },
    ],
  },
  advice: {
    'r.be.l.horeca.1.ru1': 'advice',
    'r.be.l.horeca.2.ru1': 'advice',
  },
  kun: [
    ['Ik kan de regels voor proper werken lezen.', '1F', 'lezen'],
    ['Ik kan een vraag over allergie navragen in de keuken.', '1F', 'gesprekken'],
  ],
};
