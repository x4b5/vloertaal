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
            { id: 'b', text: 'Hij zegt niets meer tegen haar, de rest van de dag.', best: false, feedback: 'Begrijpelijk. Maar ze bedoelde het niet persoonlijk.' },
            { id: 'c', text: 'Hij zegt: "Zo deed ik het bij mijn vorige werk."', best: false, feedback: 'Dat mag hij zeggen. Maar hier wil ze het anders.' },
          ],
          why: 'Nederlanders zeggen het vaak heel direct. Ze bedoelen het meestal niet onaardig. Het gaat over het werk, niet over jou. Jij mag ook direct zijn, als je vriendelijk blijft.',
        },
        {
          kind: 'truefalse',
          id: 'r.l.samen.1.tf1',
          statement: 'Een functioneringsgesprek betekent dat je baas je snel wil ontslaan.',
          answer: false,
          why: 'Een functioneringsgesprek is een gewoon gesprek over je werk. Wat gaat goed? Wat kan beter? Jij mag ook zeggen wat je nodig hebt. Bereid het voor met een paar vragen.',
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
          why: 'Iedereen maakt fouten. Zeg het snel, dan kan iemand het oplossen. Een fout verbergen vinden mensen hier veel erger dan de fout zelf.',
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
          why: 'Hier is het normaal om het oneens te zijn met je baas. Ook in een overleg. Zeg het rustig, met een reden. Een eigen idee helpt: "Kan ik dan een half uur later stoppen?"',
        },
        {
          kind: 'truefalse',
          id: 'r.l.samen.2.tf1',
          statement: 'Na het overleg besluit de baas. Daarna doe je mee, ook als je het oneens was.',
          answer: true,
          why: 'Hier praten mensen vaak lang samen. Dat heet overleggen. Maar na een besluit doet iedereen mee. Werkt het echt niet? Zeg het later nog een keer. Gaat het om je rechten? Vraag dan advies.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.samen.2.wd2',
          situation: 'Een collega laat het zware werk steeds aan Fatima over. Wat kan Fatima het beste doen?',
          options: [
            { id: 'a', text: 'Ze zegt het rustig tegen die collega zelf.', best: true, feedback: 'Goed. Zo krijgt hij de kans om het te veranderen.' },
            { id: 'b', text: 'Ze zegt niets, maar ze wordt steeds bozer.', best: false, feedback: 'Begrijpelijk. Maar zo verandert er niets.' },
            { id: 'c', text: 'Ze vraagt de leidinggevende om het meteen op te lossen.', best: false, feedback: 'Kan later. Eerst zelf praten werkt meestal beter.' },
          ],
          why: 'Praat eerst met de persoon zelf, op een rustig moment. Gebruik een ik-zin: "Ik vind het niet fijn dat ...". Helpt dat niet? Ga dan naar je leidinggevende.',
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
          why: 'Als je ja zegt, rekenen mensen erop. Afspraak is afspraak. Lukt het niet? Zeg het zo vroeg mogelijk. Bied een andere tijd aan.',
        },
        {
          kind: 'truefalse',
          id: 'r.l.samen.3.tf1',
          statement: 'Hier plannen mensen ook kleine dingen vaak weken vooruit.',
          answer: true,
          why: 'Nederlanders plannen veel. Ook een gesprek of een kop koffie staat vaak in de agenda. Een agenda in je telefoon helpt om niets te vergeten.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.samen.3.wd2',
          situation: 'Sanne vraagt: "Kun je dit vóór 3 uur af hebben?" Jij weet: dat haal je niet.',
          options: [
            { id: 'a', text: 'Je zegt ja. Je doet je best en ziet wel.', best: false, feedback: 'Begrijpelijk. Maar dan rekent Sanne op 3 uur.' },
            { id: 'b', text: 'Je zegt eerlijk: "3 uur lukt niet. 4 uur wel."', best: true, feedback: 'Goed. Nu kan Sanne plannen.' },
            { id: 'c', text: 'Je zegt niets, en je werkt extra snel door.', best: false, feedback: 'Dan weet Sanne niet wat ze kan verwachten.' },
          ],
          why: 'Mensen hier vinden een eerlijk "nee" of "later" beter dan een vaag ja. Ja zeggen en het niet halen, kost meer vertrouwen. Zo kan Sanne op tijd iets anders regelen.',
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
          why: 'Hier trakteer je zelf op je verjaardag. Bijvoorbeeld op taart of koek. Het hoeft niet duur te zijn. Samen koffie drinken hoort ook bij het werk. Je bent welkom aan tafel, ook als je nieuw bent.',
        },
        {
          kind: 'truefalse',
          id: 'r.l.samen.4.tf1',
          statement: 'Je mag je telefoon altijd gebruiken, als je werk maar af is.',
          answer: false,
          why: 'Bij veel werk mag je telefoon niet tijdens het werk. Bijvoorbeeld bij machines, in de zorg of met eten. Gebruik je telefoon in je pauze. Wacht je op een belangrijk telefoontje? Zeg het vooraf tegen je leidinggevende.',
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
          why: "Een groepsapp is voor werk. Houd je berichten kort en vriendelijk. Je hoeft niet altijd meteen te antwoorden. Stuurt je baas vaak 's avonds laat? Bespreek het rustig. Deel geen berichten of foto's van collega's zonder toestemming.",
        },
        { kind: 'model', id: 'r.l.samen.4.mo1', context: 'Je bent jarig, en je neemt iets mee.', nl: 'Ik ben jarig. Ik heb taart meegenomen!' },
      ],
    },
  ],
};
