import type { RuleUnit } from '../types';

/**
 * Unit 11 · Werken in de winkel (les 11.1–11.3).
 * Converted from docs/entree-aanvulling.md; edit that document first, then this file.
 * `// ⚖️ check:` marks a fact the expert must check (docs/entree-aanvulling.md, deel 6 and 7). The
 * marker is never shown or read aloud. `// Redactie:` notes are for the makers only.
 * Redactie: unit 11 is really a sector unit (profiel verkoop/retail). It can move to the sector
 * lessons later, with a sector `retail` in src/content/sectors.ts (lessons W.1–W.3).
 */
export const winkelUnit: RuleUnit = {
  id: 'r.winkel',
  title: 'Werken in de winkel',
  emoji: '🛒',
  color: '#2a9d8f',
  lessons: [
    {
      // Les 11.1 · Vakken vullen en voorraad
      id: 'r.l.winkel.1',
      title: 'Vakken vullen en voorraad',
      goal: 'Je vult vakken op de goede manier en je let op de datum. Je houdt de paden vrij.',
      remember: 'Oud naar voren, nieuw naar achteren. Houd de paden vrij.',
      // Wie kan je helpen: je leidinggevende of teamleider · een ervaren collega.
      help: ['leidinggevende', 'collega'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.winkel.1.sc1',
          picture: 'Kevin in een supermarkt bij het schap met melk. Naast hem een rolcontainer.',
          lines: [
            'Kevin werkt sinds kort in een supermarkt.',
            'Hij vult het schap met melk.',
            'Vooraan staat nog oude melk.',
            'De nieuwe melk heeft een latere datum.',
            'Kevin wil snel klaar zijn.',
          ],
        },
        {
          kind: 'rule',
          id: 'r.l.winkel.1.ru1',
          emoji: '🥛',
          title: 'Oud naar voren, nieuw naar achteren. Houd de paden vrij.',
          body: [
            'Zo verkoop je eerst wat het eerst over de datum gaat.',
            'Kijk bij het vullen altijd even naar de datum.',
            'Houd de paden vrij. Dat is veiliger voor klanten en collega\'s.',
          ],
          rule: 'ongeschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.winkel.1.wd1',
          situation: 'Waar zet Kevin de nieuwe melk?',
          options: [
            { id: 'a', text: 'Vooraan. Dan ziet het schap er vers uit.', best: false, feedback: 'Dat is logisch. Maar dan blijft de oude melk staan.' },
            { id: 'b', text: 'Achteraan. De oude melk blijft vooraan staan.', best: true, feedback: 'Goed. Zo gaat de oude melk het eerst weg.' },
            { id: 'c', text: 'Ergens waar plek is. Klanten kiezen zelf wel.', best: false, feedback: 'Dan raakt de oude melk over de datum.' },
          ],
          why: 'Oud naar voren, nieuw naar achteren. Zo verkoop je eerst wat het eerst over de datum gaat. Dan hoeft er minder weg. Kijk bij het vullen altijd even naar de datum.',
        },
        // ⚖️ check: Daarna is een product vaak nog goed ⚖️.
        // ⚖️ check: Na die datum mag een winkel het niet meer verkopen ⚖️.
        // Redactie: THT-producten mogen na de datum verkocht worden, op verantwoordelijkheid van de
        //   verkoper. Voor sommige gekoelde producten gelden andere regels ⚖️ (NVWA). Daarom:
        //   "vraag hoe het bij jou gaat".
        {
          kind: 'truefalse',
          id: 'r.l.winkel.1.tf1',
          statement: 'Na de THT-datum mag een winkel een product nooit meer verkopen.',
          answer: false,
          why: 'THT betekent "ten minste houdbaar tot". Daarna is een product vaak nog goed. TGT betekent "te gebruiken tot". Na die datum mag een winkel het niet meer verkopen. Elke winkel heeft eigen regels voor THT. Vraag hoe het bij jou gaat.',
        },
        // ⚖️ check: Nooduitgangen moeten altijd vrij zijn ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.winkel.1.wd2',
          situation: 'Kevin zet drie rolcontainers in het pad. Een klant met een rollator wil erlangs. Wat kan Kevin het beste doen?',
          options: [
            { id: 'a', text: 'Hij zegt sorry en schuift de containers aan de kant.', best: true, feedback: 'Goed. Het pad moet vrij zijn voor klanten.' },
            { id: 'b', text: 'Hij vraagt de klant om even om te lopen.', best: false, feedback: 'Dat is logisch. Maar het pad is er voor de klant.' },
            { id: 'c', text: 'Hij werkt snel door. Over 5 minuten is hij klaar.', best: false, feedback: 'Dan moet de klant wachten. En iemand kan vallen.' },
          ],
          why: 'Houd de paden vrij. Dat is veiliger voor klanten en collega\'s. Nooduitgangen moeten altijd vrij zijn. Zet lege dozen en folie meteen weg.',
        },
        {
          kind: 'whoask',
          id: 'r.l.winkel.1.wa1',
          question: 'Je weet niet wat jouw winkel doet met producten over de THT-datum. Wie vraag je het?',
          options: [
            { id: 'a', who: 'vakbond', best: false, feedback: 'Een vakbond helpt bij je rechten, niet bij de regels voor het schap.' },
            { id: 'b', who: 'leidinggevende', best: true, feedback: 'Goed. Je leidinggevende weet hoe het in jouw winkel gaat.' },
            { id: 'c', who: 'gemeente', best: false, feedback: 'De gemeente gaat niet over de regels in jouw winkel.' },
          ],
          why: 'Elke winkel heeft eigen regels voor THT. Vraag je leidinggevende of een ervaren collega hoe het bij jou gaat.',
        },
        { kind: 'model', id: 'r.l.winkel.1.mo1', context: 'Je staat met een rolcontainer in het pad. Een klant wil erlangs.', nl: 'Sorry, ik zet het even aan de kant.' },
      ],
    },
    {
      // Les 11.2 · De klant helpen en doorverwijzen
      id: 'r.l.winkel.2',
      title: 'De klant helpen en doorverwijzen',
      goal: 'Je helpt een klant vriendelijk. Je zegt het eerlijk als je iets niet weet.',
      remember: 'Weet je het niet? Zeg het eerlijk, en haal iemand die het weet.',
      steps: [
        {
          kind: 'scene',
          id: 'r.l.winkel.2.sc1',
          picture: 'Fatima in een bouwmarkt, met een doos lampen. Een klant wijst naar het schap.',
          lines: [
            'Fatima werkt in een bouwmarkt.',
            'Ze vult een schap met lampen.',
            'Een klant komt naar haar toe.',
            '"Welke lamp past in mijn keuken?"',
            'Fatima weet het niet.',
          ],
        },
        {
          kind: 'rule',
          id: 'r.l.winkel.2.ru1',
          emoji: '🙋',
          title: 'Weet je het niet? Zeg het eerlijk, en haal iemand die het weet.',
          body: [
            'Niet alles weten is normaal.',
            'Raden is niet slim: de klant komt dan terug.',
            'Breng de klant naar iemand die het wel weet. Dat heet doorverwijzen.',
            'In een winkel gaat de klant voor.',
          ],
          rule: 'ongeschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.winkel.2.wd1',
          situation: 'Fatima weet het antwoord niet. Wat kan Fatima het beste doen?',
          options: [
            { id: 'a', text: 'Ze kiest een lamp die er goed uitziet.', best: false, feedback: 'Dan krijgt de klant misschien de verkeerde lamp.' },
            { id: 'b', text: 'Ze zegt: "Dat weet ik niet," en werkt door.', best: false, feedback: 'Eerlijk. Maar de klant heeft nog geen hulp.' },
            { id: 'c', text: 'Ze zegt: "Dat weet ik niet. Ik haal een collega."', best: true, feedback: 'Goed. Eerlijk, en de klant krijgt toch hulp.' },
          ],
          why: 'Niet alles weten is normaal. Raden is niet slim: de klant komt dan terug. Zeg het eerlijk. Breng de klant naar iemand die het wel weet. Dat heet doorverwijzen.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.winkel.2.wd2',
          situation: 'Fatima is druk bezig. Een klant zegt: "Mag ik u iets vragen?" Wat kan Fatima het beste doen?',
          options: [
            { id: 'a', text: 'Ze stopt even, kijkt de klant aan en luistert.', best: true, feedback: 'Goed. In een winkel gaat de klant voor.' },
            { id: 'b', text: 'Ze zegt "moment" en maakt eerst haar doos leeg.', best: false, feedback: 'Dat is logisch. Maar dan moet de klant lang wachten.' },
            { id: 'c', text: 'Ze wijst naar de servicebalie, zonder iets te zeggen.', best: false, feedback: 'Dat kan onvriendelijk lijken.' },
          ],
          why: 'In een winkel gaat de klant voor. Stop even met je werk. Kijk de klant aan en groet. Tegen klanten zeg je meestal "u".',
        },
        // ⚖️ check: Allergenen staan daar extra duidelijk, bijvoorbeeld vet gedrukt ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.winkel.2.tf1',
          statement: 'Vraagt een klant of er noten in een product zitten? Dan zeg je wat je denkt.',
          answer: false,
          why: 'Bij een allergie kan een fout gevaarlijk zijn. Raad dus nooit. Lees samen met de klant het etiket. Allergenen staan daar extra duidelijk, bijvoorbeeld vet gedrukt. Weet je het nog niet zeker? Vraag het na.',
        },
        { kind: 'model', id: 'r.l.winkel.2.mo1', context: 'Een klant vraagt iets. Je weet het antwoord niet zeker.', nl: 'Dat weet ik niet zeker. Ik vraag het even aan mijn collega.' },
      ],
    },
    {
      // Les 11.3 · Kassa, wisselgeld en een klacht
      id: 'r.l.winkel.3',
      title: 'Kassa, wisselgeld en een klacht',
      goal: 'Je vraagt een ID bij alcohol en tabak. Je telt wisselgeld goed en je blijft rustig bij een klacht.',
      remember: 'Twijfel je over de leeftijd bij alcohol of tabak? Vraag altijd een ID.',
      // Wie kan je helpen: je leidinggevende · bij agressie of diefstal: je leidinggevende of de
      //   beveiliging, en bij gevaar 112. Ren nooit zelf achter een dief aan.
      help: ['leidinggevende', 'politie'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.winkel.3.sc1',
          picture: 'Jayden achter de kassa. Een jongen legt een krat bier op de band.',
          lines: [
            'Jayden zit voor het eerst alleen achter de kassa.',
            'Een jongen legt een krat bier op de band.',
            'Hij ziet er jong uit.',
            'Achter hem staat een lange rij. De jongen zegt: "Ik ben 18, hoor."',
          ],
        },
        // ⚖️ check: Alcohol en tabak verkoop je alleen aan mensen vanaf 18 jaar ⚖️.
        // ⚖️ check: Twijfel je? Dan moet je een ID zien ⚖️.
        {
          kind: 'rule',
          id: 'r.l.winkel.3.ru1',
          emoji: '🪪',
          title: 'Twijfel je over de leeftijd bij alcohol of tabak? Vraag altijd een ID.',
          body: [
            'Alcohol en tabak verkoop je alleen aan mensen vanaf 18 jaar.',
            'Twijfel je? Dan moet je een ID zien.',
            'Geen ID? Dan geen alcohol.',
          ],
          rule: 'geschreven',
          key: true,
        },
        // ⚖️ check: Alcohol en tabak verkoop je alleen aan mensen vanaf 18 jaar ⚖️.
        // ⚖️ check: Twijfel je? Dan moet je een ID zien ⚖️.
        // ⚖️ check: Lijkt iemand jonger dan 25? Dan vragen veel winkels een ID ⚖️.
        // Redactie: de grens van 18 staat in de wet (Alcoholwet, Tabaks- en rookwarenwet). "Jonger
        //   dan 25" is een afspraak van winkels, geen wet ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.winkel.3.wd1',
          situation: 'Jayden weet niet zeker hoe oud de jongen is. Wat kan Jayden het beste doen?',
          options: [
            { id: 'a', text: 'Hij vraagt rustig: "Mag ik je ID zien?"', best: true, feedback: 'Goed. Zonder bewijs van 18 jaar geen alcohol.' },
            { id: 'b', text: 'Hij gelooft de jongen. De rij is al lang.', best: false, feedback: 'Dat snap ik. Maar hij moet de leeftijd echt zien.' },
            { id: 'c', text: 'Hij zegt dat hij geen bier verkoopt aan jongeren.', best: false, feedback: 'Misschien is hij wel 18. Jayden kan beter eerst zijn ID vragen.' },
          ],
          why: 'Alcohol en tabak verkoop je alleen aan mensen vanaf 18 jaar. Twijfel je? Dan moet je een ID zien. Lijkt iemand jonger dan 25? Dan vragen veel winkels een ID. Geen ID? Dan geen alcohol.',
        },
        // ⚖️ check: Je baas mag het niet zomaar van je loon afhalen ⚖️ (twijfel 8: kassatekort).
        // The sum says "euro" after each amount, so the voice reads it as money (sayNumbers).
        {
          kind: 'card',
          id: 'r.l.winkel.3.ca1',
          card: {
            type: 'kassabon',
            title: 'Kassabon',
            rows: [
              { label: 'Totaal', value: '13,40 euro', hit: true },
              { label: 'Betaald', value: '20 euro', hit: true },
              { label: 'Wisselgeld', value: '?', answer: '6,60 euro' },
            ],
          },
          question: 'Hoeveel wisselgeld geeft Jayden?',
          options: [
            { id: 'a', text: '7,60 euro', best: false, feedback: 'Bijna. Je telde 1 euro te veel.' },
            { id: 'b', text: '6,40 euro', best: false, feedback: 'Kijk nog een keer naar de centen.' },
            { id: 'c', text: '6,60 euro', best: true, feedback: 'Goed. Dat klopt.' },
          ],
          sum: [
            'Van 13,40 euro naar 14 euro is 60 cent.',
            'Van 14 euro naar 20 euro is 6 euro.',
            'Samen is dat 6,60 euro.',
          ],
          why: 'De kassa rekent het vaak voor je uit. Tel het toch na als je het geld geeft. Tel hardop terug, dan ziet de klant het ook. Kom je aan het eind geld tekort? Zeg het meteen tegen je leidinggevende. Je baas mag het niet zomaar van je loon afhalen.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.winkel.3.wd2',
          situation: 'Een klant is boos. "Dit brood is gisteren gekocht. Nu zit er al schimmel op!" Hij praat hard.',
          options: [
            { id: 'a', text: 'Je zegt dat jij het brood niet gebakken hebt.', best: false, feedback: 'Dat klopt. Maar de klant wordt er niet rustiger van.' },
            { id: 'b', text: 'Je luistert, zegt sorry en vraagt naar de bon.', best: true, feedback: 'Goed. Zo help je de klant verder.' },
            { id: 'c', text: 'Je geeft hem meteen geld terug uit de kassa.', best: false, feedback: 'Goed bedoeld. Maar vraag eerst wat je mag doen.' },
          ],
          why: 'Een klacht gaat niet over jou. Blijf rustig en luister. Zeg sorry voor het probleem. Weet je niet wat je mag doen? Roep je leidinggevende. Wordt een klant agressief? Haal meteen hulp.',
        },
        {
          kind: 'whoask',
          id: 'r.l.winkel.3.wa1',
          question: 'Aan het eind van je dienst kom je geld tekort in de kassa. Wie zeg je het?',
          options: [
            { id: 'a', who: 'collega', best: false, feedback: 'Een collega kan het niet oplossen. Zeg het tegen je leidinggevende.' },
            { id: 'b', who: 'politie', best: false, feedback: 'Een tekort in de kassa is geen zaak voor de politie.' },
            { id: 'c', who: 'leidinggevende', best: true, feedback: 'Goed. Zeg het meteen. Dan kan je leidinggevende het nakijken.' },
          ],
          why: 'Kom je geld tekort? Zeg het meteen tegen je leidinggevende. Bij agressie of diefstal haal je je leidinggevende of de beveiliging. Bij gevaar bel je 112. Ren nooit zelf achter een dief aan.',
        },
        { kind: 'model', id: 'r.l.winkel.3.mo1', context: 'Een klant is boos over een product.', nl: 'Vervelend voor u. Heeft u de bon nog? Ik haal even mijn leidinggevende.' },
      ],
    },
  ],
};
