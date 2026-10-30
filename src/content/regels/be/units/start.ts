import type { BeUnit } from '../types';

/**
 * Unit 2 (België) · Je eerste dag: de Belgische versie van src/content/regels/units/start.ts.
 * Zelfde lessen en stap-id's, met "r.be." vooraan. Vlaamse woorden: rijksregisternummer,
 * identiteitskaart (eID), woonzorgcentrum, gsm, "u".
 *
 * Gewoonte-noot: in Vlaanderen zeggen mensen vaker "u" dan in Nederland, zeker tegen een klant,
 * een oudere persoon of de baas, en zeker in het begin. In de spreektaal hoor je ook "ge" en "gij".
 * Daarom zegt de leerling in deze unit vaker "u". Laat een Vlaamse NT2-docent dat nakijken ⚖️.
 *
 * `// ⚖️ check:` = een feit dat de deskundige nakijkt, met de bron. Opgezocht op 30 okt 2026;
 * officiële sites waren in deze sessie niet te openen (netwerk geblokkeerd): zoekresultaten.
 * Geen eigen "Wat kun je nu?": de Nederlandse zinnen (te laat melden, terugzeggen) gelden ook.
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.start',
    title: 'Je eerste dag',
    emoji: '👋',
    color: '#ff7a00',
    lessons: [
      {
        // Les 2.1 · Op tijd, en alles bij je
        id: 'r.be.l.start.1',
        title: 'Op tijd, en alles bij je',
        goal: 'Je weet wat je meeneemt en wat "op tijd" hier betekent. Je weet wat je doet als je te laat bent.',
        remember: 'Te laat? Bel of stuur een bericht vóór je dienst begint.',
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.start.1.sc1',
            picture: 'Dewi bij de voordeur. In haar hand: een tas, haar identiteitskaart en een brooddoos.',
            lines: [
              'Dewi begint morgen in een woonzorgcentrum.',
              'Haar dienst begint om 7 uur.',
              'Ze zet twee wekkers.',
              'Ze wil om kwart voor 7 binnen zijn.',
              'Wat neemt ze mee?',
            ],
          },
          {
            kind: 'rule',
            id: 'r.be.l.start.1.ru1',
            emoji: '📞',
            title: 'Te laat? Bel of stuur een bericht vóór je dienst begint.',
            body: [
              'Laat het weten vóór je dienst begint.',
              'Dan kan het team plannen.',
              'Te laat, zonder bericht? Dat vinden mensen erger dan te laat komen.',
            ],
            rule: 'ongeschreven',
            key: true,
          },
          // ⚖️ check: de werkgever heeft het rijksregisternummer nodig (het INSZ-nummer, voor de
          //   sociale zekerheid); het staat op de identiteitskaart (eID) (socialsecurity.be; ksz-bcss.fgov.be)
          // ⚖️ check: wie niet in het rijksregister staat, krijgt een bisnummer; de werkgever kan dat
          //   aanvragen (ksz-bcss.fgov.be "bisnummer"; vlaanderen.be "BIS-nummer aanmaken")
          // ⚖️ check: de werkgever meldt je vóór je begint bij de RSZ: de Dimona-aangifte (socialsecurity.be, Dimona)
          // ⚖️ check: je identiteitskaart of paspoort geef je nooit af aan je werkgever (vlaanderen.be;
          //   ibz.rrn.fgov.be; mensenhandel-signaal, Myria) — of een werkgever een kopie mag maken: nakijken
          //   (privacywet, GDPR; voor een buitenlandse werknemer moet hij wel een kopie van de
          //   verblijfstitel bewaren, wet 30 april 1999)
          {
            kind: 'whatdo',
            id: 'r.be.l.start.1.wd1',
            situation: 'Wat neemt Dewi mee op haar eerste dag?',
            options: [
              { id: 'a', text: 'Haar identiteitskaart en haar rekeningnummer.', best: true, feedback: 'Goed. Die heeft haar werkgever nodig.' },
              { id: 'b', text: 'Haar paspoort, om bij de baas achter te laten.', best: false, feedback: 'Niet doen. Haar paspoort houdt ze altijd zelf.' },
              { id: 'c', text: 'Alleen haar gsm. De rest staat online.', best: false, feedback: 'Haar werkgever heeft haar nummer en haar kaart nodig.' },
            ],
            why: 'Je werkgever heeft je rijksregisternummer nodig. Dat is je persoonlijke nummer bij de overheid. Het staat op je identiteitskaart. Heb je geen Belgisch nummer? Dan krijg je een bisnummer. Je identiteitskaart geef je nooit af.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.start.1.wd2',
            situation: 'De bus is te laat. Dewi is 15 minuten te laat. Wat kan Dewi het beste doen?',
            options: [
              { id: 'a', text: 'Ze legt het uit als ze binnen is.', best: false, feedback: 'Dan weet het team te laat dat ze later komt.' },
              { id: 'b', text: 'Ze loopt extra hard en zegt er niets over.', best: false, feedback: 'Lopen is niet nodig. Even laten weten wel.' },
              { id: 'c', text: 'Ze belt haar verantwoordelijke meteen.', best: true, feedback: 'Goed. Dan kan het team plannen.' },
            ],
            why: 'Laat het weten vóór je dienst begint. Dan kan het team plannen. Te laat, zonder bericht? Dat vinden mensen erger dan te laat komen. Afspraak is afspraak: lukt het niet? Zeg het op tijd.',
          },
          // ⚖️ check: regels over kleding staan vaak in het arbeidsreglement; vaak voor veiligheid of
          //   hygiëne; een regel moet een goede reden hebben (Wet 8 april 1965 arbeidsreglementen;
          //   Welzijnswet 4 augustus 1996; Antidiscriminatiewet 10 mei 2007)
          {
            kind: 'truefalse',
            id: 'r.be.l.start.1.tf1',
            statement: 'Op je werk mag je altijd dragen wat je wilt.',
            answer: false,
            why: 'Veel werk heeft regels voor kleding. Vaak is dat voor veiligheid of hygiëne. Een regel moet wel een goede reden hebben. De regels van je bedrijf staan in het arbeidsreglement. Vraag op je eerste dag naar de regels.',
          },
          { kind: 'model', id: 'r.be.l.start.1.mo1', context: 'Je komt binnen op je eerste dag.', nl: 'Goeiemorgen, ik ben Dewi. Ik begin vandaag. Bij wie moet ik mij melden?' },
        ],
      },
      {
        // Les 2.2 · Kennismaken
        id: 'r.be.l.start.2',
        title: 'Kennismaken',
        goal: 'Je weet hoe je je voorstelt en wanneer je "u" zegt. Je weet ook dat je zelf kiest over aanraken.',
        remember: 'Zeg in het begin "u". Luister wat de anderen doen.',
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.start.2.sc1',
            picture: 'Jayden in de keuken van een restaurant. Chef Sanne steekt haar hand uit.',
            lines: [
              'Jayden begint in de keuken van een restaurant.',
              'Hij zegt: "Goeiedag, mevrouw. Ik ben Jayden."',
              'De chef zegt: "Dag Jayden, ik ben Sanne. Zeg maar je, hoor."',
              'Jayden weet niet goed wat hij moet doen.',
            ],
          },
          // Gewoonte, geen regel: in Vlaanderen zeggen mensen op het werk vaker "u" dan in Nederland.
          {
            kind: 'rule',
            id: 'r.be.l.start.2.ru1',
            emoji: '🙂',
            title: 'Zeg in het begin "u". Luister wat de anderen doen.',
            body: [
              'In Vlaanderen zeggen mensen op het werk vaak "u".',
              'Zeg "u" tegen klanten, oudere mensen en meestal ook tegen de baas.',
              'Zegt iemand: "Zeg maar je"? Dan zeg je "je".',
              'Collega\'s zeggen tegen elkaar vaak "je", of "ge" en "gij".',
              '"Ge" en "gij" betekenen hetzelfde als "je" en "jij".',
            ],
            rule: 'ongeschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.start.2.wd1',
            situation: 'Wat bedoelt Sanne met "Zeg maar je"?',
            options: [
              { id: 'a', text: 'Ze vraagt of hij iets wil zeggen.', best: false, feedback: 'Nee. "Zeg maar je" betekent: noem mij "je".' },
              { id: 'b', text: 'Ze vindt "u" onbeleefd van hem.', best: false, feedback: 'Nee. "U" is beleefd. Ze wil alleen minder afstand.' },
              { id: 'c', text: 'Ze wil dat hij "je" zegt, en niet "u".', best: true, feedback: 'Goed. Ze wil minder afstand.' },
            ],
            why: 'In het begin zeg je beter "u". Dat is beleefd. Zegt iemand "Zeg maar je"? Dan mag je "je" zeggen. Tegen klanten zeg je meestal "u". Luister wat anderen doen.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.start.2.wd2',
            situation: 'Een collega wil je een hand geven. Jij geeft liever geen hand.',
            options: [
              { id: 'a', text: 'Je geeft toch een hand, ook al wil je het niet.', best: false, feedback: 'Dat hoeft niet. Je mag zelf kiezen.' },
              { id: 'b', text: 'Je knikt, lacht en zegt kort waarom.', best: true, feedback: 'Goed. Zo groet je beleefd en is het duidelijk.' },
              { id: 'c', text: 'Je doet alsof je de hand niet ziet.', best: false, feedback: 'Dat kan onbeleefd lijken. Even uitleggen helpt.' },
            ],
            why: 'Een hand geven is normaal, maar niet verplicht. Je mag ook op een andere beleefde manier groeten. Op het werk raak je elkaar weinig aan. Een zoen geef je meestal alleen aan vrienden.',
          },
          // ⚖️ check: nog eens naar een naam vragen is gewoon (gewoonte; Vlaamse NT2-docent nakijken)
          {
            kind: 'truefalse',
            id: 'r.be.l.start.2.tf1',
            statement: 'Je mag best nog eens naar iemands naam vragen.',
            answer: true,
            why: 'Niemand verwacht dat je na een week alle namen kent. Vraag gewoon nog eens: "Hoe heet u ook alweer?" Dat is heel normaal.',
          },
          { kind: 'model', id: 'r.be.l.start.2.mo1', context: 'Je stelt je voor aan een nieuwe collega.', nl: 'Dag, ik ben Jayden. Ik ben nieuw. Hoe heet jij?' },
        ],
      },
      {
        // Les 2.3 · Vragen stellen en terugzeggen (geldt ook in Vlaanderen)
        id: 'r.be.l.start.3',
        title: 'Vragen stellen en terugzeggen',
        goal: 'Je durft te zeggen dat je iets niet snapt. Je checkt het door terug te zeggen.',
        remember: 'Snap je het niet? Vraag het. Zeg terug wat je hebt begrepen.',
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.start.3.sc1',
            picture: 'Piotr bij een machine in een fabriek. Collega Mark wijst en praat snel.',
            lines: [
              'Piotr werkt in een fabriek.',
              'Zijn collega Mark legt een machine uit.',
              'Mark praat snel.',
              'Piotr begrijpt maar de helft.',
              'Mark vraagt: "Duidelijk?"',
            ],
          },
          {
            kind: 'rule',
            id: 'r.be.l.start.3.ru1',
            emoji: '🙋',
            title: 'Snap je het niet? Vraag het. Zeg terug wat je hebt begrepen.',
            body: [
              'Vragen stellen is normaal.',
              'Het laat zien dat je het goed wilt doen.',
              'Zeg in je eigen woorden terug wat je gaat doen.',
              'Knikken zonder te snappen geeft fouten.',
            ],
            rule: 'ongeschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.start.3.wd1',
            situation: 'Piotr snapt het niet goed. Wat kan Piotr het beste doen?',
            options: [
              { id: 'a', text: 'Hij knikt, en hij kijkt straks hoe de anderen het doen.', best: false, feedback: 'Dat is logisch. Maar zo kan hij een fout maken.' },
              { id: 'b', text: 'Hij zegt "ja", en hij vraagt het later aan iemand anders.', best: false, feedback: 'Dan denkt Mark dat het goed gaat.' },
              { id: 'c', text: 'Hij zegt: "Nog eens graag, wat trager."', best: true, feedback: 'Goed. Zo leert hij het meteen goed.' },
            ],
            why: 'Vragen stellen is normaal. Het laat zien dat je het goed wilt doen. Knikken zonder te snappen geeft fouten. Bij machines kan dat gevaarlijk zijn.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.start.3.wd2',
            situation: 'Mark legt het opnieuw uit. Hoe checkt Piotr dat hij het snapt?',
            options: [
              { id: 'a', text: 'Hij zegt in zijn eigen woorden wat hij gaat doen.', best: true, feedback: 'Goed. Zo hoort Mark of hij het goed begrijpt.' },
              { id: 'b', text: 'Hij zegt "ja, ja" en begint snel.', best: false, feedback: 'Dan weet niemand of hij het echt snapt.' },
              { id: 'c', text: 'Hij vraagt of Mark het de eerste keer voor hem doet.', best: false, feedback: 'Kijken helpt. Maar zelf terugzeggen is beter.' },
            ],
            why: 'Terugzeggen is slim. "Dus eerst dit, en dan dat?" Zo merk je meteen of je iets mist.',
          },
          // ⚖️ check: de meeste verantwoordelijken vinden vragen goed (gewoonte; Vlaamse NT2-docent nakijken)
          {
            kind: 'truefalse',
            id: 'r.be.l.start.3.tf1',
            statement: 'De meeste verantwoordelijken vinden het goed als je veel vraagt.',
            answer: true,
            why: 'Vragen laat zien dat je het goed wilt doen. Beter twee keer vragen dan één fout. Schrijf het antwoord op. Dan hoef je het niet steeds te vragen.',
          },
          { kind: 'model', id: 'r.be.l.start.3.mo1', context: 'Je zegt terug wat je hebt begrepen.', nl: 'Dus eerst zet ik de machine aan, en dan ...?' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.start.1.mo1': [
      { text: 'Goeiemorgen. Ik ben nieuw hier. Ik wacht wel even bij de deur.', feedback: 'Dan weet niemand wie je bent. Zeg je naam en vraag het.' },
      { text: 'Goeiemorgen. Ik begin vandaag. Waar kan ik mijn spullen laten?', feedback: 'Je zegt niet wie je bent. En je weet niet bij wie.' },
    ],
    'r.be.l.start.2.mo1': [
      { text: 'Dag. Ik ben nieuw hier. Ik ga maar aan het werk.', feedback: 'Dan weet je collega je naam niet. Je vraagt ook niets.' },
      { text: 'Dag. Ik ben Jayden. Hoe oud ben jij eigenlijk?', feedback: 'Naar iemands leeftijd vraag je niet meteen. Vraag eerst de naam.' },
    ],
    'r.be.l.start.3.mo1': [
      { text: 'Ja ja, ik snap het. Ik begin wel gewoon.', feedback: 'Dan weet niemand of je het echt goed begrijpt.' },
      { text: 'Kunt u alles nog eens helemaal uitleggen?', feedback: 'Dan weet de ander niet wat je al begrepen hebt.' },
    ],
  },
  advice: {},
};
