import type { RuleUnit } from '../types';

/**
 * Unit 8 · Samenwerken: de ongeschreven regels (les 8.1–8.4).
 * Converted from docs/werkregels-curriculum.md; edit the curriculum first, then this file.
 * `// ⚖️ check:` marks a fact the expert must check (docs/werkregels-bronnen.md). The marker is
 * never shown or read aloud. `// Redactie:` notes are for the makers only.
 */
export const samenUnit: RuleUnit = {
  id: 'r.samen',
  title: 'Samenwerken: de ongeschreven regels',
  emoji: '🤝',
  color: '#c8955b',
  lessons: [
    {
      // Les 8.1 · Direct zeggen en feedback
      id: 'r.l.samen.1',
      title: 'Direct zeggen en feedback',
      goal: 'Je begrijpt directe feedback, en je meldt een fout meteen.',
      remember: 'Direct zeggen is hier normaal. Het gaat over het werk, niet over jou.',
      steps: [
        {
          kind: 'scene',
          id: 'r.l.samen.1.sc1',
          picture: 'Jayden met een salade. Chef Sanne wijst naar het bord en loopt alweer door.',
          lines: [
            'Jayden maakt een salade.',
            'Chef Sanne kijkt even.',
            'Ze zegt: "Nee, dat is fout. Te veel saus. Doe het zo."',
            'Ze laat het snel zien en loopt door.',
            'Jayden voelt zich dom.',
          ],
        },
        {
          kind: 'rule',
          id: 'r.l.samen.1.ru1',
          emoji: '🗣️',
          title: 'Direct zeggen is hier normaal. Het gaat over het werk, niet over jou.',
          body: [
            'Nederlanders zeggen het vaak heel direct.',
            'Ze bedoelen het meestal niet onaardig.',
            'Het gaat over het werk, niet over jou.',
            'Een fout zeg je meteen. Verbergen is erger.',
          ],
          rule: 'ongeschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.samen.1.wd1',
          situation: 'Sanne zei het heel direct. Wat kan Jayden het beste doen?',
          options: [
            { id: 'a', text: 'Hij zegt: "Oké, zo dan?" En hij doet het opnieuw.', best: true, feedback: 'Goed. Hij laat zien dat hij wil leren.' },
            { id: 'b', text: 'Hij zegt niets meer tegen haar, de rest van de dag.', best: false, feedback: 'Dat snap ik. Maar ze bedoelde het niet persoonlijk.' },
            { id: 'c', text: 'Hij zegt: "Zo deed ik het bij mijn vorige werk."', best: false, feedback: 'Dat mag hij zeggen. Maar hier wil ze het anders.' },
          ],
          why: 'Nederlanders zeggen het vaak heel direct. Ze bedoelen het meestal niet onaardig.', whyMore: 'Het gaat over het werk, niet over jou. Jij mag ook direct zijn, als je vriendelijk blijft.',
        },
        {
          kind: 'truefalse',
          id: 'r.l.samen.1.tf1',
          statement: 'Een functioneringsgesprek betekent dat je baas je snel wil ontslaan.',
          answer: false,
          why: 'Een functioneringsgesprek is een gewoon gesprek over je werk. Jij mag ook zeggen wat je nodig hebt.', whyMore: 'Wat gaat goed? Wat kan beter? Bereid het voor met een paar vragen.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.samen.1.wd2',
          situation: 'Jayden laat een bak saus vallen. Niemand zag het. Wat kan Jayden het beste doen?',
          options: [
            { id: 'a', text: 'Hij ruimt het snel op, en hij zegt er niets over.', best: false, feedback: 'Opruimen is goed. Maar de saus is nu op.' },
            { id: 'b', text: 'Hij zegt het meteen tegen Sanne.', best: true, feedback: 'Goed. Dan kan zij op tijd nieuwe saus regelen.' },
            { id: 'c', text: 'Hij zegt dat de bak al scheef stond.', best: false, feedback: 'Dan klopt het verhaal niet. Dat kost vertrouwen.' },
          ],
          why: 'Iedereen maakt fouten. Een fout verbergen vinden mensen hier erger dan de fout zelf.', whyMore: 'Zeg het snel, dan kan iemand het oplossen.',
        },
        // Redactie: feedback goed ontvangen (5 november 2026, bij "Feedback en overleg" in Taal):
        //   luisteren, niet meteen verdedigen, om een voorbeeld vragen, bedanken. Achteraan bij de
        //   keuzes (wd3), zodat de ids van de stappen op volgorde blijven.
        {
          kind: 'whatdo',
          id: 'r.l.samen.1.wd3',
          situation: 'Sanne zegt: "Je werkt te langzaam." Jayden weet niet wat hij anders moet doen. Wat kan Jayden het beste doen?',
          options: [
            { id: 'a', text: 'Hij zegt: "Ik doe echt mijn best!"', best: false, feedback: 'Dat is waar. Maar zo weet hij nog niet wat beter kan.' },
            { id: 'b', text: 'Hij knikt, en hij werkt verder zoals eerst.', best: false, feedback: 'Dan blijft het hetzelfde. En Sanne denkt dat hij het snapt.' },
            { id: 'c', text: 'Hij vraagt: "Kun je een voorbeeld geven?"', best: true, feedback: 'Goed. Met een voorbeeld weet hij wat hij anders kan doen.' },
          ],
          why: 'Feedback is wat iemand zegt over je werk. Luister eerst. Snap je het niet? Vraag om een voorbeeld.', whyMore: 'Verdedig je niet meteen. Zeg dan: "Bedankt, dat is goed om te weten." En probeer het.',
        },
        { kind: 'model', id: 'r.l.samen.1.mo1', context: 'Je krijgt directe feedback.', nl: 'Oké, zo dan? Fijn dat je het laat zien.' },
      ],
    },
    {
      // Les 8.2 · Het oneens zijn
      id: 'r.l.samen.2',
      title: 'Het oneens zijn',
      goal: 'Je kunt rustig zeggen dat je het oneens bent, ook met je baas.',
      remember: 'Het oneens zijn mag. Zeg het rustig, met een reden.',
      steps: [
        {
          kind: 'scene',
          id: 'r.l.samen.2.sc1',
          picture: 'een werkoverleg in een kantine. Fatima steekt haar hand op.',
          lines: [
            'Fatima werkt in een schoonmaakteam.',
            'Er is werkoverleg. De leidinggevende zegt: "Vanaf nu begint iedereen een half uur eerder."',
            'Fatima brengt eerst haar kinderen naar school.',
            'Ze is het er niet mee eens.',
          ],
        },
        {
          kind: 'rule',
          id: 'r.l.samen.2.ru1',
          emoji: '💬',
          title: 'Het oneens zijn mag. Zeg het rustig, met een reden.',
          body: [
            'Hier is het normaal om het oneens te zijn met je baas.',
            'Zeg het rustig, met een reden.',
            'Een eigen idee helpt.',
            'Na een besluit doet iedereen mee.',
          ],
          rule: 'ongeschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.samen.2.wd1',
          situation: 'Fatima kan niet eerder beginnen. Wat kan Fatima het beste doen?',
          options: [
            { id: 'a', text: 'Ze zegt niets, en ze komt vanaf nu een half uur te laat.', best: false, feedback: 'Dan breekt ze de nieuwe afspraak. Dat geeft problemen.' },
            { id: 'b', text: "Ze klaagt na het overleg bij haar collega's.", best: false, feedback: 'Dan weet de leidinggevende het niet.' },
            { id: 'c', text: 'Ze legt in het overleg rustig uit waarom het niet lukt.', best: true, feedback: 'Goed. Dan kan er samen een oplossing komen.' },
          ],
          why: 'Hier is het normaal om het oneens te zijn met je baas. Zeg het rustig, met een reden.', whyMore: 'Ook in een overleg. Een eigen idee helpt: "Kan ik dan een half uur later stoppen?"',
        },
        {
          kind: 'truefalse',
          id: 'r.l.samen.2.tf1',
          statement: 'Na het overleg besluit de baas. Daarna doe je mee, ook als je het oneens was.',
          answer: true,
          why: 'Hier overleggen mensen vaak lang. Maar na een besluit doet iedereen mee.', whyMore: 'Overleggen is: lang samen praten. Werkt het echt niet? Zeg het later nog een keer. Gaat het om je rechten? Vraag dan advies.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.samen.2.wd2',
          situation: 'Een collega laat het zware werk steeds aan Fatima over. Wat kan Fatima het beste doen?',
          options: [
            { id: 'a', text: 'Ze zegt het rustig tegen die collega zelf.', best: true, feedback: 'Goed. Zo krijgt hij de kans om het te veranderen.' },
            { id: 'b', text: 'Ze zegt niets, maar ze wordt steeds bozer.', best: false, feedback: 'Ik snap het. Maar zo verandert er niets.' },
            { id: 'c', text: 'Ze vraagt de leidinggevende om het meteen op te lossen.', best: false, feedback: 'Kan later. Eerst zelf praten werkt meestal beter.' },
          ],
          why: 'Praat eerst met de persoon zelf, op een rustig moment. Helpt dat niet? Ga naar je leidinggevende.', whyMore: 'Gebruik een ik-zin: "Ik vind het niet fijn dat ...".',
        },
        { kind: 'model', id: 'r.l.samen.2.mo1', context: 'Je bent het niet eens in een overleg.', nl: 'Ik zie het anders. Mag ik uitleggen waarom?' },
      ],
    },
    {
      // Les 8.3 · Afspraak is afspraak
      id: 'r.l.samen.3',
      title: 'Afspraak is afspraak',
      goal: 'Je weet dat een ja telt. Lukt iets niet? Dan zeg je het op tijd.',
      remember: 'Afspraak is afspraak. Lukt het niet? Zeg het op tijd.',
      steps: [
        {
          kind: 'scene',
          id: 'r.l.samen.3.sc1',
          picture: 'Mohammed en Esra in een kantine. Esra kijkt op haar telefoon naar haar agenda.',
          lines: [
            'Mohammed zegt tegen collega Esra: "Ik help je vrijdag met tellen."',
            'Ze zetten het in de agenda.',
            'Donderdag krijgt Mohammed voor vrijdag een andere klus.',
          ],
        },
        {
          kind: 'rule',
          id: 'r.l.samen.3.ru1',
          emoji: '📆',
          title: 'Afspraak is afspraak. Lukt het niet? Zeg het op tijd.',
          body: [
            'Als je ja zegt, rekenen mensen erop.',
            'Lukt het niet? Zeg het zo vroeg mogelijk.',
            'Bied een andere tijd aan.',
            'Ja zeggen en het niet halen, kost veel vertrouwen.',
          ],
          rule: 'ongeschreven',
          key: true,
        },
        {
          kind: 'whatdo',
          id: 'r.l.samen.3.wd1',
          situation: 'Mohammed kan vrijdag niet helpen. Wat kan Mohammed het beste doen?',
          options: [
            { id: 'a', text: 'Hij zegt het donderdag al tegen Esra.', best: true, feedback: 'Goed. Dan kan zij nog iets anders regelen.' },
            { id: 'b', text: 'Hij zegt het vrijdag, als hij haar ziet.', best: false, feedback: 'Dan is het voor Esra te laat om iets te regelen.' },
            { id: 'c', text: 'Hij zegt niets. De baas gaf hem toch die klus.', best: false, feedback: 'Esra rekent op hem. Hij moet het haar laten weten.' },
          ],
          why: 'Als je ja zegt, rekenen mensen erop. Lukt het niet? Zeg het zo vroeg mogelijk.', whyMore: 'Afspraak is afspraak. Bied een andere tijd aan.',
        },
        {
          kind: 'truefalse',
          id: 'r.l.samen.3.tf1',
          statement: 'Hier plannen mensen ook kleine dingen vaak weken vooruit.',
          answer: true,
          why: 'Nederlanders plannen veel. Ook een gesprek of een kop koffie staat vaak in de agenda.', whyMore: 'Een agenda in je telefoon helpt om niets te vergeten.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.samen.3.wd2',
          situation: 'Sanne vraagt: "Kun je dit vóór 3 uur af hebben?" Jij weet: dat haal je niet.',
          options: [
            { id: 'a', text: 'Je zegt ja. Je doet je best en ziet wel.', best: false, feedback: 'Dat is logisch. Maar dan rekent Sanne op 3 uur.' },
            { id: 'b', text: 'Je zegt eerlijk: "3 uur lukt niet. 4 uur wel."', best: true, feedback: 'Goed. Nu kan Sanne plannen.' },
            { id: 'c', text: 'Je zegt niets, en je werkt extra snel door.', best: false, feedback: 'Dan weet Sanne niet wat ze kan verwachten.' },
          ],
          why: 'Een eerlijk "nee" of "later" vinden mensen hier beter dan een vaag ja.', whyMore: 'Ja zeggen en het niet halen, kost meer vertrouwen. Zo kan Sanne op tijd iets anders regelen.',
        },
        { kind: 'model', id: 'r.l.samen.3.mo1', context: 'Je kunt een afspraak niet nakomen.', nl: 'Het lukt vrijdag toch niet. Kan het maandag?' },
      ],
    },
    {
      // Les 8.4 · Koffie, verjaardagen en je telefoon
      id: 'r.l.samen.4',
      title: 'Koffie, verjaardagen en je telefoon',
      goal: 'Je kent de gewoontes bij koffie en verjaardagen. Je kent de regels voor je telefoon en de groepsapp.',
      remember: 'Jarig? Dan trakteer je zelf.',
      steps: [
        {
          kind: 'scene',
          id: 'r.l.samen.4.sc1',
          picture: 'een kantine om 10 uur. Op tafel staat taart. Iemand hangt een slinger op.',
          lines: [
            'Om 10 uur drinkt het team samen koffie.',
            'Collega Linda deelt taart uit: ze is jarig.',
            'Iedereen zegt: "Gefeliciteerd!"',
            'Piotr zit er voor het eerst bij.',
            'Volgende maand is hij zelf jarig.',
          ],
        },
        {
          kind: 'rule',
          id: 'r.l.samen.4.ru1',
          emoji: '🎂',
          title: 'Jarig? Dan trakteer je zelf.',
          body: [
            'Op je verjaardag trakteer je zelf.',
            'Het hoeft niet duur te zijn.',
            'Gebruik je telefoon in je pauze.',
            "Deel geen berichten of foto's van collega's zonder toestemming.",
          ],
          rule: 'ongeschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.samen.4.wd1',
          situation: 'Wat is hier gewoon op je eigen verjaardag?',
          options: [
            { id: 'a', text: 'Je zegt niets. Het is werk, geen feestje.', best: false, feedback: 'Mag. Maar hier is het een leuke gewoonte.' },
            { id: 'b', text: "Je neemt zelf iets lekkers mee voor je collega's.", best: true, feedback: 'Goed. Op je verjaardag trakteer je zelf.' },
            { id: 'c', text: "Je wacht tot je collega's iets voor jou meenemen.", best: false, feedback: 'Hier is het andersom: de jarige trakteert.' },
          ],
          why: 'Hier trakteer je zelf op je verjaardag. Het hoeft niet duur te zijn.', whyMore: 'Bijvoorbeeld op taart of koek. Samen koffie drinken hoort ook bij het werk. Je bent welkom aan tafel, ook als je nieuw bent.',
        },
        {
          kind: 'truefalse',
          id: 'r.l.samen.4.tf1',
          statement: 'Je mag je telefoon altijd gebruiken, als je werk maar af is.',
          answer: false,
          why: 'Bij veel werk mag je telefoon niet tijdens het werk. Gebruik hem in je pauze.', whyMore: 'Bijvoorbeeld bij machines, in de zorg of met eten. Wacht je op een belangrijk telefoontje? Zeg het vooraf tegen je leidinggevende.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.samen.4.wd2',
          situation: 'Het team heeft een groepsapp. Om 23 uur appt de leidinggevende: "Wie kan volgende week zaterdag werken?"',
          options: [
            { id: 'a', text: 'Je antwoordt niet, ook niet de volgende dag.', best: false, feedback: 'Dan weet je baas niet of je kunt. Antwoord wel, op een normale tijd.' },
            { id: 'b', text: 'Je appt meteen terug: "Ja, ik kan!" Anders vindt de baas je lui.', best: false, feedback: "Goed bedoeld. Maar je hoeft 's nachts niet te antwoorden. Dat vindt niemand lui." },
            { id: 'c', text: 'Je antwoordt de volgende ochtend, kort en vriendelijk.', best: true, feedback: 'Goed. Je antwoordt op een normale tijd, en je rust uit.' },
          ],
          why: 'Een groepsapp is voor werk. Houd je berichten kort en vriendelijk.', whyMore: "Je hoeft niet altijd meteen te antwoorden. Stuurt je baas vaak 's avonds laat? Bespreek het rustig. Deel geen berichten of foto's van collega's zonder toestemming.",
        },
        { kind: 'model', id: 'r.l.samen.4.mo1', context: 'Je bent jarig, en je neemt iets mee.', nl: 'Ik ben jarig. Ik heb taart meegenomen!' },
      ],
    },
    {
      // Les 8.5 · Feedback geven en rustig blijven (5 november 2026, de wens van de eigenaar:
      // communicatie steviger). Feedback geven aan een collega: eerst iets goeds, dan concreet, op
      // een rustig moment, niet waar iedereen bij is, met een ik-zin. En rustig blijven als je zelf
      // boos bent of als feedback hard binnenkomt. Gewoontes, geen wet: geen slotregel.
      id: 'r.l.samen.5',
      title: 'Feedback geven en rustig blijven',
      goal: 'Je zegt vriendelijk wat beter kan. Je blijft rustig, ook als je boos bent.',
      remember: 'Eerst iets goeds. Dan rustig en concreet wat beter kan.',
      steps: [
        {
          kind: 'scene',
          id: 'r.l.samen.5.sc1',
          picture: 'een magazijn. Piotr zet dozen op een pallet. Ze staan scheef. Esra kijkt.',
          lines: [
            'Piotr is nieuw in het magazijn.',
            'Hij werkt hard, maar zijn dozen staan scheef.',
            'De pallet valt bijna om.',
            'Collega Esra ziet het. Ze is een beetje boos.',
          ],
        },
        {
          kind: 'rule',
          id: 'r.l.samen.5.ru1',
          emoji: '🌟',
          title: 'Eerst iets goeds. Dan rustig en concreet wat beter kan.',
          body: [
            'Zeg eerst wat goed gaat.',
            'Zeg dan concreet wat beter kan, met een voorbeeld.',
            'Kies een rustig moment. Niet waar iedereen bij is.',
            'Boos? Adem rustig, en praat later.',
          ],
          rule: 'ongeschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.samen.5.wd1',
          situation: 'Esra wil iets zeggen over de scheve dozen. Wat kan Esra het beste doen?',
          options: [
            { id: 'a', text: 'Ze roept door de hal: "Piotr, dat is helemaal fout!"', best: false, feedback: 'Dan hoort iedereen het. Piotr schaamt zich, en hij luistert minder.' },
            { id: 'b', text: 'Ze zegt: "Je werkt snel. Zet de dozen wel recht."', best: true, feedback: 'Goed. Eerst iets goeds, dan concreet wat beter kan.' },
            { id: 'c', text: 'Ze zegt niets, en ze zet de dozen later zelf recht.', best: false, feedback: 'Dat is aardig. Maar zo leert Piotr het niet.' },
          ],
          why: 'Zeg eerst wat goed gaat. Dan wat beter kan, met een voorbeeld.', whyMore: 'Zeg wat je ziet, niet wat je van de persoon vindt. Bijvoorbeeld: "Ik zie dat de dozen scheef staan."',
        },
        {
          kind: 'truefalse',
          id: 'r.l.samen.5.tf1',
          statement: 'Feedback geef je het beste meteen, waar het hele team bij is.',
          answer: false,
          why: 'Feedback geef je liever onder vier ogen, op een rustig moment.', whyMore: 'Voor het hele team voelt het als een straf. Gaat het om gevaar? Dan zeg je het wel meteen.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.samen.5.wd2',
          situation: 'In het werkoverleg zegt de leidinggevende: "Piotr, jouw pallets zijn slordig." Piotr wordt boos. Wat kan Piotr het beste doen?',
          options: [
            { id: 'a', text: 'Hij zegt: "Dat is niet waar! Esra is veel slordiger."', best: false, feedback: 'Dan wordt het ruzie. En over Esra ging het niet.' },
            { id: 'b', text: 'Hij loopt boos weg uit het overleg.', best: false, feedback: 'Dat snap ik. Maar dan kan niemand het met hem oplossen.' },
            { id: 'c', text: 'Hij blijft rustig, en vraagt later om uitleg.', best: true, feedback: 'Goed. Zo blijft hij rustig, en hoort hij wat beter kan.' },
          ],
          why: 'Ben je boos? Adem rustig, en praat later. Dan kun je beter luisteren.', whyMore: 'Vind je het niet eerlijk? Zeg het rustig, onder vier ogen. Gebruik een ik-zin: "Ik vond het moeilijk dat ..."',
        },
        { kind: 'model', id: 'r.l.samen.5.mo1', context: 'Je geeft een collega feedback.', nl: 'Je werkt snel. Ik zie wel dat de dozen scheef staan.' },
      ],
    },
  ],
};
