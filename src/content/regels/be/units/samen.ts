import type { BeUnit } from '../types';

/**
 * Unit 8 (België) · Samenwerken: de ongeschreven regels. De Belgische versie van
 * src/content/regels/units/samen.ts. Zelfde lessen, met "r.be." vooraan (docs/werkregels-belgie.md).
 *
 * Redactie: deze unit gaat over gewoontes, niet over wetten. Gewoontes verschillen per persoon,
 *   per bedrijf en per streek. De les zegt daarom "vaak" en "veel", nooit "altijd".
 * Redactie: alle gewoontes hieronder moet een Vlaamse NT2-docent of iemand van de werkvloer nog
 *   nakijken (stand 30 okt 2026). Vooral: zijn Vlaamse collega's echt minder direct dan
 *   Nederlandse? Het plan (docs/belgie-vlaanderen-plan.md, r.l.samen.1) zegt het; een bron is er
 *   niet, het is een algemene indruk.
 * `// ⚖️ check:` staat ook bij een gewoonte (de test vraagt het bij elke juist/fout-vraag): dan is
 * de "bron" de gewoonte zelf, met "laten nakijken".
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.samen',
    title: 'Samenwerken: de ongeschreven regels',
    emoji: '🤝',
    color: '#c8955b',
    lessons: [
      {
        // Les 8.1 · Direct zeggen en feedback
        id: 'r.be.l.samen.1',
        title: 'Direct zeggen en feedback',
        goal: 'Je begrijpt feedback, ook als die voorzichtig klinkt. Je meldt een fout meteen.',
        remember: 'Feedback gaat over het werk, niet over jou.',
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.samen.1.sc1',
            picture: 'Jayden met een slaatje. Chef Sanne kijkt naar het bord en glimlacht.',
            lines: [
              'Jayden maakt een slaatje.',
              'Chef Sanne kijkt even.',
              'Ze zegt vriendelijk: "Misschien kun je wat minder saus doen?"',
              'Dan loopt ze door.',
              'Jayden weet niet of het belangrijk is.',
            ],
          },
          // Redactie: gewoonte, geen regel. Vlaamse collega's zeggen kritiek vaak voorzichtiger dan
          //   Nederlandse, met "misschien" of "probeer eens" (docs/belgie-vlaanderen-plan.md,
          //   r.l.samen.1; laten nakijken door een Vlaamse NT2-docent).
          {
            kind: 'rule',
            id: 'r.be.l.samen.1.ru1',
            emoji: '🗣️',
            title: 'Feedback gaat over het werk, niet over jou.',
            body: [
              "Veel Vlaamse collega's zeggen kritiek vaak voorzichtig.",
              'Ze zeggen bijvoorbeeld: "Misschien kun je het zo proberen?"',
              'Dat is vaak toch een duidelijke vraag. Doe er iets mee.',
              'Een fout zeg je meteen. Verbergen is erger.',
            ],
            rule: 'ongeschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.samen.1.wd1',
            situation: 'Sanne zei het vriendelijk en voorzichtig. Wat kan Jayden het beste doen?',
            options: [
              { id: 'a', text: 'Hij zegt: "Oké, zo dan?" En hij doet het opnieuw.', best: true, feedback: 'Goed. Hij laat zien dat hij wil leren.' },
              { id: 'b', text: 'Hij denkt: het is maar een idee. Hij doet het zoals eerst.', best: false, feedback: 'Dat is logisch. Maar Sanne bedoelde: doe het anders.' },
              { id: 'c', text: 'Hij zegt: "Zo deed ik het bij mijn vorige werk."', best: false, feedback: 'Dat mag hij zeggen. Maar hier wil ze het anders.' },
            ],
            why: 'Veel Vlamingen zeggen kritiek liever voorzichtig. "Misschien" of "probeer eens" is dan toch een vraag. Weet je het niet zeker? Vraag het gewoon: "Wil je dat ik het anders doe?" Het gaat over het werk, niet over jou.',
          },
          // ⚖️ check: een evaluatiegesprek of functioneringsgesprek is een gewoon gesprek over je werk; in de privésector is het geen wettelijke plicht (gewoonte, laten nakijken)
          {
            kind: 'truefalse',
            id: 'r.be.l.samen.1.tf1',
            statement: 'Een evaluatiegesprek betekent dat je baas je snel wil ontslaan.',
            answer: false,
            why: 'Een evaluatiegesprek is een gewoon gesprek over je werk. Wat gaat goed? Wat kan beter? Jij mag ook zeggen wat je nodig hebt. Bereid het voor met een paar vragen.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.samen.1.wd2',
            situation: 'Jayden laat een bak saus vallen. Niemand zag het. Wat kan Jayden het beste doen?',
            options: [
              { id: 'a', text: 'Hij ruimt het op en zwijgt.', best: false, feedback: 'Opruimen is goed. Maar de saus is nu op.' },
              { id: 'b', text: 'Hij zegt het meteen tegen Sanne.', best: true, feedback: 'Goed. Dan kan zij op tijd nieuwe saus regelen.' },
              { id: 'c', text: 'Hij zegt dat de bak al scheef stond.', best: false, feedback: 'Dan klopt het verhaal niet. Dat kost vertrouwen.' },
            ],
            why: 'Iedereen maakt fouten. Zeg het snel, dan kan iemand het oplossen. Een fout verbergen vinden mensen veel erger dan de fout zelf.',
          },
          { kind: 'model', id: 'r.be.l.samen.1.mo1', context: 'Je krijgt voorzichtige feedback.', nl: 'Oké, zo dan? Bedankt om het te tonen.' },
        ],
      },
      {
        // Les 8.2 · Het oneens zijn
        id: 'r.be.l.samen.2',
        title: 'Het oneens zijn',
        goal: 'Je zegt rustig en beleefd dat je het oneens bent. Ook tegen je baas.',
        remember: 'Het oneens zijn mag. Zeg het rustig, met een reden.',
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.samen.2.sc1',
            picture: 'een teamvergadering in een refter. Fatima steekt haar hand op.',
            lines: [
              'Fatima werkt in een poetsploeg.',
              'Er is een vergadering. De leidinggevende zegt: "Vanaf nu begint iedereen een half uur vroeger."',
              'Fatima brengt eerst haar kinderen naar school.',
              'Ze is het er niet mee eens.',
            ],
          },
          // Redactie: gewoonte, geen regel (docs/belgie-vlaanderen-plan.md, r.l.samen.2: geldt ook;
          //   laten nakijken). In Vlaanderen zeg je het vaak beleefd en met "u" tegen de baas.
          {
            kind: 'rule',
            id: 'r.be.l.samen.2.ru1',
            emoji: '💬',
            title: 'Het oneens zijn mag. Zeg het rustig, met een reden.',
            body: [
              'Je mag het oneens zijn met je baas.',
              'Zeg het rustig en beleefd, met een reden.',
              'Een eigen idee helpt.',
              'Na een besluit doet iedereen mee.',
            ],
            rule: 'ongeschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.samen.2.wd1',
            situation: 'Fatima kan niet vroeger beginnen. Wat kan Fatima het beste doen?',
            options: [
              { id: 'a', text: 'Ze zegt niets. Ze komt elke dag een half uur te laat.', best: false, feedback: 'Dan breekt ze de nieuwe afspraak. Dat geeft problemen.' },
              { id: 'b', text: "Ze klaagt na de vergadering bij haar collega's.", best: false, feedback: 'Dan weet de leidinggevende het niet.' },
              { id: 'c', text: 'Ze legt in de vergadering rustig uit waarom het niet lukt.', best: true, feedback: 'Goed. Dan kan er samen een oplossing komen.' },
            ],
            why: 'Je mag het oneens zijn met je baas. Ook in een vergadering. Zeg het rustig en beleefd, met een reden. Een eigen idee helpt: "Kan ik dan een half uur later stoppen?"',
          },
          // ⚖️ check: na overleg beslist de leidinggevende; daarna doet iedereen mee (gewoonte, laten nakijken). Gaat het om je uurrooster, dan kunnen er ook regels gelden (arbeidsreglement; zie de unit tijd)
          {
            kind: 'truefalse',
            id: 'r.be.l.samen.2.tf1',
            statement: 'Na de vergadering beslist de baas. Daarna doe je mee, ook als je het oneens was.',
            answer: true,
            why: 'Mensen praten eerst samen. Maar na een besluit doet iedereen mee. Werkt het echt niet? Zeg het later nog een keer. Gaat het om je rechten? Vraag dan advies.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.samen.2.wd2',
            situation: 'Een collega laat het zware werk steeds aan Fatima over. Wat kan Fatima het beste doen?',
            options: [
              { id: 'a', text: 'Ze zegt het rustig tegen die collega zelf.', best: true, feedback: 'Goed. Zo krijgt hij de kans om het te veranderen.' },
              { id: 'b', text: 'Ze zegt niets, maar ze wordt steeds bozer.', best: false, feedback: 'Ik snap het. Maar zo verandert er niets.' },
              { id: 'c', text: 'Ze vraagt de leidinggevende om het meteen op te lossen.', best: false, feedback: 'Kan later. Eerst zelf praten werkt meestal beter.' },
            ],
            why: 'Praat eerst met de persoon zelf, op een rustig moment. Gebruik een ik-zin: "Ik vind het niet fijn dat ...". Helpt dat niet? Ga dan naar je leidinggevende.',
          },
          { kind: 'model', id: 'r.be.l.samen.2.mo1', context: 'Je bent het niet eens in een vergadering.', nl: 'Ik zie het anders. Mag ik uitleggen waarom?' },
        ],
      },
      {
        // Les 8.3 · Afspraak is afspraak
        id: 'r.be.l.samen.3',
        title: 'Afspraak is afspraak',
        goal: 'Je weet dat een ja telt. Lukt iets niet? Dan zeg je het op tijd.',
        remember: 'Afspraak is afspraak. Lukt het niet? Zeg het op tijd.',
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.samen.3.sc1',
            picture: 'Mohammed en Esra in een refter. Esra kijkt op haar gsm naar haar agenda.',
            lines: [
              'Mohammed zegt tegen collega Esra: "Ik help je vrijdag met tellen."',
              'Ze zetten het in de agenda.',
              'Donderdag krijgt Mohammed voor vrijdag een andere klus.',
            ],
          },
          // Redactie: gewoonte, geen regel (docs/belgie-vlaanderen-plan.md, r.l.samen.3: geldt ook).
          {
            kind: 'rule',
            id: 'r.be.l.samen.3.ru1',
            emoji: '📆',
            title: 'Afspraak is afspraak. Lukt het niet? Zeg het op tijd.',
            body: [
              'Als je ja zegt, rekenen mensen erop.',
              'Lukt het niet? Zeg het zo vroeg mogelijk.',
              'Bied een andere tijd aan.',
              'Ja zeggen en het niet doen, kost veel vertrouwen.',
            ],
            rule: 'ongeschreven',
            key: true,
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.samen.3.wd1',
            situation: 'Mohammed kan vrijdag niet helpen. Wat kan Mohammed het beste doen?',
            options: [
              { id: 'a', text: 'Hij zegt het donderdag al tegen Esra.', best: true, feedback: 'Goed. Dan kan zij nog iets anders regelen.' },
              { id: 'b', text: 'Hij zegt het vrijdag, als hij haar ziet.', best: false, feedback: 'Dan is het voor Esra te laat om iets te regelen.' },
              { id: 'c', text: 'Hij zegt niets. De baas gaf hem toch die klus.', best: false, feedback: 'Esra rekent op hem. Hij moet het haar laten weten.' },
            ],
            why: 'Als je ja zegt, rekenen mensen erop. Afspraak is afspraak. Lukt het niet? Zeg het zo vroeg mogelijk. Bied een andere tijd aan.',
          },
          // ⚖️ check: op tijd komen vinden de meeste werkgevers en collega's belangrijk; wie te laat komt, laat het vooraf weten (gewoonte, laten nakijken; soms staat het ook in het arbeidsreglement)
          {
            kind: 'truefalse',
            id: 'r.be.l.samen.3.tf1',
            statement: 'Kom je te laat? Dan laat je het vooraf weten.',
            answer: true,
            why: 'Op tijd komen vinden de meeste mensen hier belangrijk. Lukt het niet? Bel of stuur een bericht, vóór de afspraak. Een agenda in je gsm helpt om niets te vergeten.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.samen.3.wd2',
            situation: 'Sanne vraagt: "Kun je dit vóór 3 uur af hebben?" Jij weet: dat haal je niet.',
            options: [
              { id: 'a', text: 'Je zegt ja. Je doet je best en ziet wel.', best: false, feedback: 'Dat is logisch. Maar dan rekent Sanne op 3 uur.' },
              { id: 'b', text: 'Je zegt eerlijk: "3 uur lukt niet. 4 uur wel."', best: true, feedback: 'Goed. Nu kan Sanne plannen.' },
              { id: 'c', text: 'Je zegt niets, en je werkt extra snel door.', best: false, feedback: 'Dan weet Sanne niet wat ze kan verwachten.' },
            ],
            why: 'Een eerlijk "nee" of "later" is beter dan een vaag ja. Ja zeggen en het niet halen, kost meer vertrouwen. Zo kan Sanne op tijd iets anders regelen.',
          },
          { kind: 'model', id: 'r.be.l.samen.3.mo1', context: 'Je kunt een afspraak niet nakomen.', nl: 'Het lukt vrijdag toch niet. Kan het maandag?' },
        ],
      },
      {
        // Les 8.4 · Koffie, verjaardagen en je gsm
        id: 'r.be.l.samen.4',
        title: 'Koffie, verjaardagen en je telefoon',
        goal: 'Je kent de gewoontes bij koffie en verjaardagen. Je kent de regels voor je gsm en de groepschat.',
        remember: 'Jarig? Dan breng je vaak zelf iets lekkers mee.',
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.samen.4.sc1',
            picture: 'een refter om 10 uur. Op tafel staan koffie en taart.',
            lines: [
              'Om 10 uur drinkt het team samen koffie.',
              'Collega Linda deelt taart uit: ze is jarig.',
              'Iedereen zegt: "Gelukkige verjaardag!"',
              'Piotr zit er voor het eerst bij.',
              'Volgende maand is hij zelf jarig.',
            ],
          },
          // Redactie: gewoonte, geen regel. Trakteren op je verjaardag gebeurt ook in Vlaanderen,
          //   vaak met koffiekoeken of taart (docs/belgie-vlaanderen-plan.md, r.l.samen.4; laten
          //   nakijken). Het verschilt per bedrijf.
          {
            kind: 'rule',
            id: 'r.be.l.samen.4.ru1',
            emoji: '🎂',
            title: 'Jarig? Dan breng je vaak zelf iets lekkers mee.',
            body: [
              'Op je verjaardag breng je vaak zelf iets mee.',
              'Het hoeft niet duur te zijn.',
              'Gebruik je gsm in je pauze.',
              "Deel geen berichten of foto's van collega's zonder toestemming.",
            ],
            rule: 'ongeschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.samen.4.wd1',
            situation: 'Wat is in veel bedrijven gewoon op je eigen verjaardag?',
            options: [
              { id: 'a', text: 'Je zegt niets. Het is werk, geen feestje.', best: false, feedback: 'Mag. Maar in veel bedrijven is het een leuke gewoonte.' },
              { id: 'b', text: "Je neemt zelf iets lekkers mee voor je collega's.", best: true, feedback: 'Goed. Op je verjaardag trakteer je vaak zelf.' },
              { id: 'c', text: "Je wacht tot je collega's iets voor jou meenemen.", best: false, feedback: 'Meestal is het andersom: de jarige trakteert.' },
            ],
            why: 'In veel bedrijven trakteer je zelf op je verjaardag. Bijvoorbeeld op taart of koffiekoeken: zoete broodjes. Het hoeft niet duur te zijn. Samen koffie drinken hoort ook bij het werk. Je bent welkom aan tafel, ook als je nieuw bent.',
          },
          // ⚖️ check: veel bedrijven verbieden de gsm tijdens het werk, vooral bij machines, in de zorg en bij voeding (arbeidsreglement; gewoonte, laten nakijken)
          {
            kind: 'truefalse',
            id: 'r.be.l.samen.4.tf1',
            statement: 'Je mag je gsm altijd gebruiken, als je werk maar af is.',
            answer: false,
            why: 'Bij veel werk mag je gsm niet tijdens het werk. Bijvoorbeeld bij machines, in de zorg of met eten. Gebruik je gsm in je pauze. Wacht je op een belangrijk telefoontje? Zeg het vooraf tegen je leidinggevende.',
          },
          // ⚖️ check: bedrijven met 20 of meer werknemers maken afspraken over het recht op deconnectie: niet bereikbaar zijn na de werkuren (Wet 3 oktober 2022 houdende diverse arbeidsbepalingen, "werkbaar wendbaar werk"; nakijken)
          {
            kind: 'whatdo',
            id: 'r.be.l.samen.4.wd2',
            situation: 'Het team heeft een groepschat. Om 23 uur stuurt de leidinggevende: "Wie kan volgende week zaterdag werken?"',
            options: [
              { id: 'a', text: 'Je antwoordt niet, ook niet de volgende dag.', best: false, feedback: 'Dan weet je baas niet of je kunt. Antwoord wel, op een normale tijd.' },
              { id: 'b', text: 'Je stuurt meteen terug: "Ja, ik kan!" Anders vindt de baas je lui.', best: false, feedback: "Goed bedoeld. Maar je hoeft 's nachts niet te antwoorden. Dat vindt niemand lui." },
              { id: 'c', text: 'Je antwoordt de volgende ochtend, kort en vriendelijk.', best: true, feedback: 'Goed. Je antwoordt op een normale tijd, en je rust uit.' },
            ],
            why: "Een groepschat is voor werk. Houd je berichten kort en vriendelijk. Je hoeft niet altijd meteen te antwoorden. Veel bedrijven hebben afspraken over bereikbaar zijn na je werk. Deel geen berichten of foto's van collega's zonder toestemming.",
          },
          { kind: 'model', id: 'r.be.l.samen.4.mo1', context: 'Je bent jarig, en je neemt iets mee.', nl: 'Ik ben jarig. Ik heb taart meegebracht!' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.samen.1.mo1': [
      { text: 'Ja ja, ik weet het wel. Ik doe het later.', feedback: 'Zo klinkt het of je niet luistert. Vraag hoe het moet.' },
      { text: 'Waarom zeg je dat? Het was toch goed?', feedback: 'Dat klinkt boos. Ze wil je helpen.' },
    ],
    'r.be.l.samen.2.mo1': [
      { text: 'Dat is een slecht idee. Ik doe het niet.', feedback: 'Dat klinkt hard. Leg rustig uit waarom.' },
      { text: 'Tja, als u het zegt. Het is goed.', feedback: 'Zo weet je baas niet dat het niet lukt.' },
    ],
    'r.be.l.samen.3.mo1': [
      { text: 'Vrijdag gaat niet. Zoek maar iemand anders.', feedback: 'Zo laat je je collega alleen. Bied een andere dag aan.' },
      { text: 'Ik weet het nog niet. Misschien vrijdag.', feedback: 'Dat is vaag. Je collega weet het nu niet.' },
    ],
    'r.be.l.samen.4.mo1': [
      { text: 'Ik ben jarig. Wat hebben jullie voor mij?', feedback: 'Meestal is het andersom: de jarige trakteert.' },
      { text: 'Hier is taart. Maar zeg niets over mijn verjaardag.', feedback: 'Dat mag. Maar het is een leuk moment om te delen.' },
    ],
  },
  advice: {},
};
