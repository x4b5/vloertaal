import type { BeUnit } from '../types';

/**
 * Unit 15 (België) · Digitaal op je werk: de Belgische versie van src/content/regels/units/digitaal.ts.
 * Vlaamse woorden: itsme, eID, kaartlezer, pincode, volmacht (in MyMinfin: mandaat), digipunt.
 *
 * `// ⚖️ check:` = een feit dat de deskundige nakijkt, met de bron. Opgezocht op 30 okt 2026, alleen
 * via zoekresultaten: vlaanderen.be, fin.belgium.be en safeonweb.be waren in deze sessie niet te
 * openen (netwerk geblokkeerd, 30 okt 2026). `// Redactie:` is voor de makers.
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.digitaal',
    title: 'Digitaal op je werk',
    emoji: '💻',
    color: '#3d5a80',
    lessons: [
      {
        // Les 15.1 · itsme, eID en inloggen
        id: 'r.be.l.digitaal.1',
        title: 'itsme, eID en inloggen',
        goal: 'Je weet wat itsme en de eID zijn. Je houdt je codes voor jezelf.',
        remember: 'Je itsme en je pincode zijn alleen van jou. Geef ze aan niemand.',
        // Wie kan je helpen: de bibliotheek (digipunt) · de gemeente · FOD Financiën (hulp bij de
        //   aangifte).
        help: ['bibliotheek', 'gemeente'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.digitaal.1.sc1',
            picture: 'Piotr aan de keukentafel, met een brief van FOD Financiën en zijn telefoon.',
            lines: [
              'Piotr moet zijn belastingaangifte doen in MyMinfin.',
              'Daarvoor logt hij in met itsme of met zijn eID.',
              'Zijn interimkantoor zegt: "Geef ons je itsme-code. Dan doen wij het."',
              'Piotr weet het niet zeker.',
            ],
          },
          // ⚖️ check: bij de Belgische overheid log je in met itsme of met je eID, een kaartlezer en je pincode (CSAM; fin.belgium.be "aanmelden MyMinfin"; zoekresultaat 30 okt 2026)
          // ⚖️ check: je codes deel je met niemand; wie jou helpt, gebruikt een volmacht en logt in met zijn eigen itsme of eID (fin.belgium.be "fiscale handelingen delegeren tussen burgers", mandaat "Belastingaangifte Burger"; zoekresultaat)
          {
            kind: 'rule',
            id: 'r.be.l.digitaal.1.ru1',
            emoji: '🔐',
            title: 'Je itsme en je pincode zijn alleen van jou. Geef ze aan niemand.',
            body: [
              'Met itsme of je eID log je in bij de overheid.',
              'Je itsme-code en de pincode van je eID geef je aan niemand.',
              'Ook niet aan je werkgever of je interimkantoor.',
              'Wil iemand je helpen? Dat kan veilig met een volmacht.',
            ],
            rule: 'geschreven',
            key: true,
          },
          // ⚖️ check: een volmacht (mandaat) in MyMinfin: de helper logt in met zijn eigen itsme of eID, en jij kunt het altijd stopzetten (fin.belgium.be "fiscale handelingen delegeren"; vrt.be 11 juni 2025 "mandaat belastingaangifte"; zoekresultaat)
          {
            kind: 'whatdo',
            id: 'r.be.l.digitaal.1.wd1',
            situation: 'Wat doet Piotr?',
            options: [
              { id: 'a', text: 'Hij geeft zijn itsme-code. Het kantoor bedoelt het goed.', best: false, feedback: 'Dat snap ik. Maar dan kunnen zij alles met zijn gegevens.' },
              { id: 'b', text: 'Hij zegt nee, en hij vraagt hulp in de bibliotheek.', best: true, feedback: 'Goed. Daar helpen ze gratis, en veilig.' },
              { id: 'c', text: 'Hij geeft alleen de pincode van zijn eID.', best: false, feedback: 'Met zijn pincode en zijn kaart kunnen ze ook alles.' },
            ],
            why: 'Je itsme en je pincode zijn alleen van jou. Wil iemand je helpen met MyMinfin? Dan geef je een volmacht. Die persoon logt in met zijn eigen itsme. Jij kunt de volmacht altijd stoppen.',
          },
          // ⚖️ check: met je eID, een kaartlezer en je pincode kan je inloggen op overheidssites (CSAM; vlaanderen.be "elektronische identiteitskaart"; zoekresultaat)
          // ⚖️ check: itsme is een app op je telefoon; je koppelt hem een keer aan je identiteitskaart (met kaartlezer of via je bank) (itsme.be; zoekresultaat, niet geopend 30 okt 2026)
          {
            kind: 'truefalse',
            id: 'r.be.l.digitaal.1.tf1',
            statement: 'Met je eID en een kaartlezer kan je inloggen bij de overheid.',
            answer: true,
            why: 'Je steekt je eID in een kaartlezer. Dan typ je je pincode. Makkelijker is itsme: een app op je telefoon. Die koppel je een keer aan je identiteitskaart. Daarna log je in met je telefoon.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.digitaal.1.wd2',
            situation: 'Op het werk staat één computer voor iedereen. Sanne heeft haar uren ingevuld. Wat kan Sanne het beste doen?',
            options: [
              { id: 'a', text: 'Ze laat het scherm aan. Haar collega begint zo.', best: false, feedback: 'Dan kan een ander in haar account.' },
              { id: 'b', text: 'Ze zet de computer uit met de knop.', best: false, feedback: 'Dan is ze misschien niet goed uitgelogd.' },
              { id: 'c', text: 'Ze logt uit, en dan gaat ze weg.', best: true, feedback: 'Goed. Zo blijft haar account van haar.' },
            ],
            why: 'Op een gedeelde computer log je altijd uit. Anders kan een ander in jouw account. Bijvoorbeeld in je uurrooster of je loonbrief. Laat ook je eID nooit in de kaartlezer zitten.',
          },
          // ⚖️ check: in veel Vlaamse bibliotheken is een digipunt: gratis hulp met computer, itsme en eID (vlaanderen.be, ASK_WHO_BE bibliotheek)
          // ⚖️ check: FOD Financiën helpt elk jaar gratis bij het invullen van de aangifte (invulhulp; fin.belgium.be; zoekresultaat)
          {
            kind: 'whoask',
            id: 'r.be.l.digitaal.1.wa1',
            question: 'Je wilt hulp bij je belastingaangifte. Je hebt geen computer. Waar ga je heen?',
            options: [
              { id: 'a', who: 'interimkantoor', best: false, feedback: 'Je itsme-code geef je niet aan je interimkantoor.' },
              { id: 'b', who: 'bibliotheek', best: true, feedback: 'Goed. Daar helpen ze je gratis en veilig.' },
              { id: 'c', who: 'collega', best: false, feedback: 'Goed bedoeld. Maar je codes geef je aan niemand.' },
            ],
            why: 'In veel bibliotheken is een digipunt. Daar helpen ze je gratis. Ook FOD Financiën helpt gratis bij je aangifte.',
          },
          { kind: 'model', id: 'r.be.l.digitaal.1.mo1', context: 'Iemand vraagt om je itsme-code.', nl: 'Mijn itsme-code geef ik niet. Kunt u mij op een andere manier helpen?' },
        ],
      },
      {
        // Les 15.2 · Veilig wachtwoord en phishing
        id: 'r.be.l.digitaal.2',
        title: 'Veilig wachtwoord en phishing',
        goal: 'Je maakt een sterk wachtwoord en je herkent een nepbericht. Klikte je toch? Dan meld je het.',
        remember: 'Haast en een knop? Niet klikken. Ga zelf naar de echte app.',
        // Wie kan je helpen: je leidinggevende of de ICT-afdeling · je bank (en Card Stop, om je
        //   kaart te blokkeren) · Safeonweb (verdachte berichten doorsturen).
        help: ['leidinggevende', 'ict', 'bank'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.digitaal.2.sc1',
            picture: 'Esra kijkt geschrokken naar haar telefoon. Op het scherm een sms met een link.',
            lines: [
              'Esra krijgt een sms.',
              'Die lijkt van FOD Financiën te komen.',
              '"U krijgt geld terug. Log binnen 24 uur in. Anders is het weg."',
              'Onder de sms staat een link.',
            ],
          },
          // ⚖️ check: nepberichten doen zich vaak voor als FOD Financiën, de RSZ, een sociaal secretariaat, itsme of een bank (safeonweb.be; forumforthefuture.be "verdachte berichten van sociale secretariaten" en "valse e-mails itsme"; zoekresultaat 30 okt 2026)
          // ⚖️ check: verdachte berichten stuur je door naar verdacht@safeonweb.be; een sms als screenshot (safeonweb.be; vrt.be 2023; news.belgium.be 2025; zoekresultaat)
          {
            kind: 'rule',
            id: 'r.be.l.digitaal.2.ru1',
            emoji: '🎣',
            title: 'Haast en een knop? Niet klikken. Ga zelf naar de echte app.',
            body: [
              'Haast, dreigen en een link: zo herken je phishing.',
              'Phishing is een nepbericht om je gegevens of geld te stelen.',
              'Klik niet. Ga zelf naar de echte app of website.',
              'Stuur het bericht door naar verdacht@safeonweb.be.',
            ],
            rule: 'ongeschreven',
          },
          // ⚖️ check: de overheid en je bank vragen nooit je codes via mail of sms (safeonweb.be; zoekresultaat)
          {
            kind: 'whatdo',
            id: 'r.be.l.digitaal.2.wd1',
            situation: 'Esra wil het geld niet kwijt. Wat kan Esra het beste doen?',
            options: [
              { id: 'a', text: 'Ze klikt snel op de link. Het is maar een sms.', best: false, feedback: 'Dat snap ik. Maar zo stelen oplichters haar gegevens.' },
              { id: 'b', text: 'Ze stuurt de sms door naar haar familie.', best: false, feedback: 'Dan klikken zij er misschien op.' },
              { id: 'c', text: 'Ze klikt niet. Ze kijkt zelf in MyMinfin.', best: true, feedback: 'Goed. Daar ziet ze of het echt is.' },
            ],
            why: 'Haast, dreigen en een link: zo herken je phishing. De overheid en je bank vragen nooit je codes via sms. Klik niet. Ga zelf naar de echte app of website. Stuur het bericht door naar Safeonweb.',
          },
          // ⚖️ check: een lang wachtwoord (een wachtzin van een paar woorden) is sterker dan een kort; niet overal hetzelfde wachtwoord (safeonweb.be, tips voor wachtwoorden; Centrum voor Cybersecurity België; zoekresultaat)
          {
            kind: 'truefalse',
            id: 'r.be.l.digitaal.2.tf1',
            statement: 'Een kort wachtwoord met je naam en je geboortejaar is veilig genoeg.',
            answer: false,
            why: 'Je naam en geboortejaar zijn makkelijk te raden. Een lang wachtwoord is veel sterker. Bijvoorbeeld vier gewone woorden achter elkaar. Dat onthoud je ook makkelijk. Gebruik niet overal hetzelfde wachtwoord.',
          },
          // ⚖️ check: bij fraude met je bankkaart bel je meteen je bank of Card Stop om je kaart te blokkeren (cardstop.be; zoekresultaat)
          {
            kind: 'whatdo',
            id: 'r.be.l.digitaal.2.wd2',
            situation: 'Kevin klikte op een nepmail van "de RSZ". Hij vulde zijn wachtwoord in. Wat kan Kevin het beste doen?',
            options: [
              { id: 'a', text: 'Hij zegt niets. Misschien gebeurt er niets.', best: false, feedback: 'Ik snap het. Maar dan kan een oplichter verder.' },
              { id: 'b', text: 'Hij verandert meteen zijn wachtwoord, en meldt het op zijn werk.', best: true, feedback: 'Goed. Hoe sneller, hoe beter.' },
              { id: 'c', text: 'Hij gooit de mail weg. Dan is het probleem weg.', best: false, feedback: 'De mail is weg. Maar oplichters hebben zijn wachtwoord nu.' },
            ],
            why: 'Snel zijn helpt. Verander je wachtwoord meteen. Meld het bij je leidinggevende of de ICT-afdeling. Gaf je bankgegevens? Bel dan meteen je bank of Card Stop. Dit gebeurt bij veel mensen. Schaam je niet.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.digitaal.2.wa1',
            question: 'Je klikte op je werk op een nep-link. Je account doet raar. Wie meld je het?',
            options: [
              { id: 'a', who: 'hr', best: false, feedback: 'De personeelsdienst gaat over je contract en loon. Je account is voor ICT.' },
              { id: 'b', who: 'collega', best: false, feedback: 'Een collega kan je account niet beveiligen.' },
              { id: 'c', who: 'ict', best: true, feedback: 'Goed. De ICT-afdeling kan je account snel beveiligen.' },
            ],
            why: 'Meld het meteen bij de ICT-afdeling of je leidinggevende. Gaat het om je bank? Bel dan meteen je bank.',
          },
          { kind: 'model', id: 'r.be.l.digitaal.2.mo1', context: 'Je hebt op een rare link geklikt.', nl: 'Ik heb op een rare link geklikt. Wat moet ik doen?' },
        ],
      },
      {
        // Les 15.3 · AI op je werk
        id: 'r.be.l.digitaal.3',
        title: 'AI op je werk',
        goal: 'Je gebruikt AI slim en veilig. Belangrijke dingen check je bij een mens.',
        remember: 'AI helpt, maar maakt fouten. Check belangrijke dingen bij een mens.',
        // Wie kan je helpen: je leidinggevende (de regels voor AI op je werk) · de ICT-afdeling ·
        //   de vakbond of de ondernemingsraad.
        help: ['leidinggevende', 'ict', 'vakbond'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.digitaal.3.sc1',
            picture: 'Malik kijkt naar zijn telefoon. Op het scherm een chatbot met een lang antwoord.',
            lines: [
              'Malik krijgt een brief van zijn werk.',
              'Hij begrijpt de brief niet goed.',
              'Hij vraagt het aan een chatbot. Dat is een app met AI.',
              'De chatbot zegt: "Je krijgt dit jaar geen vakantiegeld."',
            ],
          },
          {
            kind: 'rule',
            id: 'r.be.l.digitaal.3.ru1',
            emoji: '🤖',
            title: 'AI helpt, maar maakt fouten. Check belangrijke dingen bij een mens.',
            body: [
              'AI kan vertalen, een brief uitleggen of een bericht schrijven.',
              'Maar AI maakt fouten. En het klinkt toch heel zeker.',
              'Gaat het om je contract, loon, veiligheid of medicijnen? Vraag het een mens.',
              'Zet geen rijksregisternummer, wachtwoord of namen van klanten in een chatbot.',
            ],
            rule: 'ongeschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.digitaal.3.wd1',
            situation: 'Wat doet Malik?',
            options: [
              { id: 'a', text: 'Hij vraagt de personeelsdienst hoe het zit.', best: true, feedback: 'Goed. Een mens van zijn werk weet hoe het echt zit.' },
              { id: 'b', text: 'Hij gelooft de chatbot. Die weet het vast.', best: false, feedback: 'Dat is logisch. Maar AI kan het mis hebben, ook als het zeker klinkt.' },
              { id: 'c', text: 'Hij belt boos naar zijn werk. Hij wil zijn geld.', best: false, feedback: 'Eerst checken. Het antwoord van de chatbot kan fout zijn.' },
            ],
            why: 'AI kan een brief goed uitleggen. Maar AI maakt ook fouten, en klinkt toch zeker. Gaat het om je contract of je loon? Check het bij een mens. Bijvoorbeeld bij de personeelsdienst of de vakbond.',
          },
          // ⚖️ check: persoonsgegevens van klanten zonder reden in een externe chatbot zetten past niet bij de AVG (GDPR, art. 5 en 6; gegevensbeschermingsautoriteit.be; geldt in heel de EU)
          {
            kind: 'truefalse',
            id: 'r.be.l.digitaal.3.tf1',
            statement: 'Je mag namen en adressen van klanten in een chatbot zetten. Dan werk je sneller.',
            answer: false,
            why: 'Het bedrijf achter de chatbot kan bewaren wat je erin zet. Zet er dus geen persoonsgegevens in. Geen rijksregisternummer, wachtwoord of bankgegevens. En geen namen of foto\'s van klanten of collega\'s. Vraag eerst naar de regels voor AI op je werk.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.digitaal.3.wd2',
            situation: 'Ewa krijgt een spraakbericht van een nieuw nummer. Het klinkt als haar leidinggevende.',
            quote: 'Ik heb snel je inlogcode nodig. Stuur hem nu, het is dringend.',
            options: [
              { id: 'a', text: 'Ze stuurt de code. Het is haar baas.', best: false, feedback: 'Dat snap ik. Maar met AI kan iemand een stem nadoen.' },
              { id: 'b', text: 'Ze belt zelf terug, op het nummer dat ze kent.', best: true, feedback: 'Goed. Zo weet ze zeker wie het is.' },
              { id: 'c', text: 'Ze vraagt in een bericht: "Ben jij het echt?"', best: false, feedback: 'Een oplichter zegt gewoon ja.' },
            ],
            why: 'Met AI kunnen oplichters een stem of een filmpje nadoen. Haast, geld of een code, en een nieuw nummer? Dat is een alarm. Stuur niets. Bel zelf terug op het nummer dat je kent.',
          },
          // ⚖️ check: AVG art. 22 (geen besluit alleen door een computer; een mens laten kijken, je mening geven, bezwaar maken) en art. 13–15 (uitleg); Europese verordening, geldt ook in België (gegevensbeschermingsautoriteit.be)
          {
            kind: 'truefalse',
            id: 'r.be.l.digitaal.3.tf2',
            statement: 'Een computer beslist dat je minder uren krijgt. Je mag vragen dat een mens ernaar kijkt.',
            answer: true,
            why: 'Beslist een computer alleen over iets belangrijks voor jou? Bijvoorbeeld minder uren of ontslag? Dan mag je om uitleg vragen. En je mag vragen dat een mens ernaar kijkt. Dat staat in de Europese privacywet (AVG).',
          },
          // ⚖️ check: AI-verordening (EU) 2024/1689, art. 5 lid 1 sub f: emotieherkenning op het werk verboden, behalve om medische redenen of voor de veiligheid; geldt sinds 2 februari 2025 (art. 113), ook in België
          // ⚖️ check: bij nieuwe technologie en camera's moet de werkgever de werknemers informeren en overleggen (cao nr. 39 nieuwe technologieën; cao nr. 68 camerabewaking; NAR, cnt-nar.be; niet geopend)
          {
            kind: 'whatdo',
            id: 'r.be.l.digitaal.3.wd3',
            situation: 'Op je werk komt een nieuwe camera met AI. Die "leest" aan je gezicht of je moe of boos bent.',
            options: [
              { id: 'a', text: 'Ik zeg niets. Op het werk mag de baas alles filmen.', best: false, feedback: 'Nee. De baas mag niet alles. En een computer mag op het werk niet je gevoel lezen.' },
              { id: 'b', text: 'Prima. De baas heeft het vooraf in een mail gezegd.', best: false, feedback: 'Vooraf zeggen is niet genoeg. Dit mag op het werk niet.' },
              { id: 'c', text: 'Ik vraag het de vakbond of de ondernemingsraad.', best: true, feedback: 'Goed. Dit mag niet zomaar. Zij kunnen er iets aan doen.' },
            ],
            why: 'Een computer mag op het werk niet je gevoelens lezen. Dat staat in de Europese AI-wet. Alleen voor je gezondheid of je veiligheid mag het wel. Bij nieuwe camera\'s moet je baas de werknemers ook informeren.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.digitaal.3.wa1',
            question: 'Je wilt AI gebruiken voor je werk. Je weet niet of het mag. Wie vraag je het?',
            options: [
              { id: 'a', who: 'collega', best: false, feedback: 'Een collega kent de regels misschien ook niet.' },
              { id: 'b', who: 'leidinggevende', best: true, feedback: 'Goed. Die weet wat de regels op jouw werk zijn.' },
              { id: 'c', who: 'bank', best: false, feedback: 'Je bank gaat over je geld, niet over je werk.' },
            ],
            why: 'Veel bedrijven hebben regels voor AI. Vraag je leidinggevende wat mag. Soms weet de ICT-afdeling het ook.',
          },
          { kind: 'model', id: 'r.be.l.digitaal.3.mo1', context: 'Je wilt weten of je AI mag gebruiken.', nl: 'Mag ik hier AI voor gebruiken?' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.digitaal.1.mo1': [
      { text: 'Oké, hier is mijn itsme-code. Mijn pincode stuur ik ook.', feedback: 'Je codes zijn alleen van jou. Deel ze met niemand.' },
      { text: 'Wat een rare vraag. U bent vast een oplichter!', feedback: 'Dat klinkt boos. Zeg rustig nee en vraag om een andere manier.' },
    ],
    'r.be.l.digitaal.2.mo1': [
      { text: 'Ik heb op een rare link geklikt. Ik zeg het maar niet.', feedback: 'Zeg het meteen. Dan kan iemand snel helpen.' },
      { text: 'Ik heb op een link geklikt. Ik vul mijn wachtwoord wel in.', feedback: 'Vul niets in. Vraag eerst wat je moet doen.' },
    ],
    'r.be.l.digitaal.3.mo1': [
      { text: 'Ik gebruik gewoon AI. Dat doet toch iedereen?', feedback: 'Dat mag niet altijd. Vraag het eerst.' },
      { text: 'Ik zet alles van het werk in AI.', feedback: 'Informatie van je werk kan geheim zijn. Vraag eerst of het mag.' },
    ],
  },
  advice: {
    'r.be.l.digitaal.1.ru1': 'civic',
  },
  kun: [
    ['Ik kan een nepbericht herkennen.', '1F', 'lezen'],
    ['Ik kan itsme en mijn eID veilig gebruiken.', '1F', 'lezen'],
  ],
};
