import type { BeUnit } from '../types';

/**
 * Unit 11 (België) · Werken in de winkel: de Belgische versie van src/content/regels/units/winkel.ts
 * (docs/werkregels-belgie.md). Zelfde lessen en stap-id's, met "r.be." vooraan. Les 1 en 2 gelden
 * ook in België (de datums op eten zijn Europese regels); les 3 is anders: bier en wijn vanaf 16
 * jaar, sterke drank en tabak vanaf 18 jaar, en de leeftijd controleer je met de identiteitskaart
 * (eID). Les 3 krijgt daarom een waar-of-niet-waar-vraag over de 16 jaar erbij.
 *
 * `// ⚖️ check:` = een feit dat de deskundige nakijkt, met de bron. De marker wordt nooit getoond
 * of voorgelezen. Opgezocht op 30 okt 2026. health.belgium.be en favv.be zijn niet geopend (WebFetch
 * in deze sessie alleen via zoekresultaten, 30 okt 2026): de feiten komen uit zoekresultaten van
 * stad.gent, VRT NWS, BELSPO (ALCOLAW), news.belgium.be en RetailDetail. `// Redactie:` is voor de makers.
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.winkel',
    title: 'Werken in de winkel',
    emoji: '🛒',
    color: '#2a9d8f',
    lessons: [
      {
        // Les 11.1 · Rekken vullen en voorraad
        id: 'r.be.l.winkel.1',
        title: 'Rekken vullen en voorraad',
        goal: 'Je vult de rekken goed en je let op de datum. Je houdt de gangen vrij.',
        remember: 'Oud naar voren, nieuw naar achteren. Houd de gangen vrij.',
        // Wie kan je helpen: je leidinggevende of teamleider · een collega met ervaring.
        help: ['leidinggevende', 'collega'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.winkel.1.sc1',
            picture: 'Yonas in een supermarkt bij het rek met melk. Naast hem een rolcontainer.',
            lines: [
              'Yonas werkt sinds kort in een supermarkt.',
              'Hij vult het rek met melk.',
              'Vooraan staat nog oude melk.',
              'De nieuwe melk heeft een latere datum.',
              'Yonas wil snel klaar zijn.',
            ],
          },
          {
            kind: 'rule',
            id: 'r.be.l.winkel.1.ru1',
            emoji: '🥛',
            title: 'Oud naar voren, nieuw naar achteren. Houd de gangen vrij.',
            body: [
              'Zo verkoop je eerst wat het eerst over de datum gaat.',
              'Kijk bij het vullen altijd even naar de datum.',
              'Houd de gangen vrij. Dat is veiliger voor klanten en collega\'s.',
            ],
            rule: 'ongeschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.winkel.1.wd1',
            situation: 'Waar zet Yonas de nieuwe melk?',
            options: [
              { id: 'a', text: 'Vooraan. Dan ziet het rek er vers uit.', best: false, feedback: 'Dat is logisch. Maar dan blijft de oude melk staan.' },
              { id: 'b', text: 'Achteraan. De oude melk blijft vooraan staan.', best: true, feedback: 'Goed. Zo gaat de oude melk het eerst weg.' },
              { id: 'c', text: 'Ergens waar plaats is. Klanten kiezen zelf wel.', best: false, feedback: 'Dan raakt de oude melk over de datum.' },
            ],
            why: 'Oud naar voren, nieuw naar achteren. Zo verkoop je eerst wat het eerst over de datum gaat. Dan moet er minder weg. Kijk bij het vullen altijd even naar de datum.',
          },
          // ⚖️ check: THT = "ten minste houdbaar tot": daarna is een product vaak nog goed; TGT = "te gebruiken tot": daarna mag het niet meer verkocht worden (Europese verordening 1169/2011, art. 24; FAVV, datumaanduiding)
          // Redactie: het FAVV laat de verkoop of schenking van producten na de THT-datum onder voorwaarden toe ⚖️
          //   (FAVV-omzendbrief over de houdbaarheidsdatum; nakijken). Daarom: "vraag hoe het bij jou gaat".
          {
            kind: 'truefalse',
            id: 'r.be.l.winkel.1.tf1',
            statement: 'Na de THT-datum mag een winkel een product nooit meer verkopen.',
            answer: false,
            why: 'THT betekent "ten minste houdbaar tot". Daarna is een product vaak nog goed. TGT betekent "te gebruiken tot". Na die datum mag een winkel het niet meer verkopen. Elke winkel heeft eigen regels voor THT. Vraag hoe het bij jou gaat.',
          },
          // ⚖️ check: nooduitgangen en vluchtwegen moeten altijd vrij zijn (Codex over het welzijn op het werk, boek III, titel 3: brandpreventie; KB 28 maart 2014)
          {
            kind: 'whatdo',
            id: 'r.be.l.winkel.1.wd2',
            situation: 'Yonas zet drie rolcontainers in de gang. Een klant met een rollator wil erlangs. Wat kan Yonas het beste doen?',
            options: [
              { id: 'a', text: 'Hij zegt sorry en schuift de containers aan de kant.', best: true, feedback: 'Goed. De gang moet vrij zijn voor klanten.' },
              { id: 'b', text: 'Hij vraagt de klant om even om te lopen.', best: false, feedback: 'Dat is logisch. Maar de gang is er voor de klant.' },
              { id: 'c', text: 'Hij werkt snel door. Over 5 minuten is hij klaar.', best: false, feedback: 'Dan moet de klant wachten. En iemand kan vallen.' },
            ],
            why: 'Houd de gangen vrij. Dat is veiliger voor klanten en collega\'s. Nooduitgangen moeten altijd vrij zijn. Zet lege dozen en folie meteen weg.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.winkel.1.wa1',
            question: 'Je weet niet wat jouw winkel doet met producten over de THT-datum. Wie vraag je het?',
            options: [
              { id: 'a', who: 'vakbond', best: false, feedback: 'Een vakbond helpt bij je rechten, niet bij het rek.' },
              { id: 'b', who: 'leidinggevende', best: true, feedback: 'Goed. Je leidinggevende weet hoe het in jouw winkel gaat.' },
              { id: 'c', who: 'gemeente', best: false, feedback: 'De gemeente gaat niet over de regels in jouw winkel.' },
            ],
            why: 'Elke winkel heeft eigen regels voor THT. Vraag je leidinggevende of een ervaren collega hoe het bij jou gaat.',
          },
          { kind: 'model', id: 'r.be.l.winkel.1.mo1', context: 'Je staat met een rolcontainer in de gang. Een klant wil erlangs.', nl: 'Sorry, ik zet het even aan de kant.' },
        ],
      },
      {
        // Les 11.2 · De klant helpen en doorverwijzen (geldt ook in België)
        id: 'r.be.l.winkel.2',
        title: 'De klant helpen en doorverwijzen',
        goal: 'Je helpt een klant vriendelijk. Je zegt het eerlijk als je iets niet weet.',
        remember: 'Weet je het niet? Zeg het eerlijk, en haal iemand die het weet.',
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.winkel.2.sc1',
            picture: 'Fatima in een doe-het-zelfzaak, met een doos lampen. Een klant wijst naar het rek.',
            lines: [
              'Fatima werkt in een doe-het-zelfzaak.',
              'Ze vult een rek met lampen.',
              'Een klant komt naar haar toe.',
              '"Welke lamp past in mijn keuken?"',
              'Fatima weet het niet.',
            ],
          },
          {
            kind: 'rule',
            id: 'r.be.l.winkel.2.ru1',
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
            id: 'r.be.l.winkel.2.wd1',
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
            id: 'r.be.l.winkel.2.wd2',
            situation: 'Fatima is druk bezig. Een klant zegt: "Mag ik u iets vragen?" Wat kan Fatima het beste doen?',
            options: [
              { id: 'a', text: 'Ze stopt even, kijkt de klant aan en luistert.', best: true, feedback: 'Goed. In een winkel gaat de klant voor.' },
              { id: 'b', text: 'Ze zegt "moment" en maakt eerst haar doos leeg.', best: false, feedback: 'Dat is logisch. Maar dan moet de klant lang wachten.' },
              { id: 'c', text: 'Ze wijst naar het onthaal, zonder iets te zeggen.', best: false, feedback: 'Dat kan onvriendelijk lijken.' },
            ],
            why: 'In een winkel gaat de klant voor. Stop even met je werk. Kijk de klant aan en groet. Tegen klanten zeg je meestal "u".',
          },
          // ⚖️ check: allergenen staan op het etiket extra duidelijk, bijvoorbeeld vet gedrukt (Europese verordening 1169/2011, art. 21; FAVV, allergenen)
          {
            kind: 'truefalse',
            id: 'r.be.l.winkel.2.tf1',
            statement: 'Vraagt een klant of er noten in een product zitten? Dan zeg je wat je denkt.',
            answer: false,
            why: 'Bij een allergie kan een fout gevaarlijk zijn. Raad dus nooit. Lees samen met de klant het etiket. Allergenen staan daar extra duidelijk, bijvoorbeeld vet gedrukt. Weet je het nog niet zeker? Vraag het na.',
          },
          { kind: 'model', id: 'r.be.l.winkel.2.mo1', context: 'Een klant vraagt iets. Je weet het antwoord niet zeker.', nl: 'Dat weet ik niet zeker. Ik vraag het even aan mijn collega.' },
        ],
      },
      {
        // Les 11.3 · Kassa, wisselgeld en een klacht
        id: 'r.be.l.winkel.3',
        title: 'Kassa, wisselgeld en een klacht',
        goal: 'Je kent de leeftijd voor alcohol en tabak. Je telt wisselgeld goed en blijft rustig bij een klacht.',
        // ⚖️ check: bier en wijn vanaf 16 jaar; sterke drank (en dranken met sterke drank of het aroma ervan) en tabak vanaf 18 jaar (wet 24 januari 1977, art. 6 en 6bis, gewijzigd bij wet 10 december 2009; wet 2019 over tabak; stad.gent "schenken en verkopen van alcohol aan jongeren")
        remember: 'Bier en wijn vanaf 16 jaar. Sterke drank en tabak vanaf 18 jaar.',
        // Wie kan je helpen: je leidinggevende · bij agressie of diefstal: je leidinggevende of de
        //   bewaking, en bij gevaar 112. Loop nooit zelf achter een dief aan.
        help: ['leidinggevende', 'politie'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.winkel.3.sc1',
            picture: 'Jayden achter de kassa. Een jongen legt een fles wodka en sigaretten op de band.',
            lines: [
              'Jayden zit voor het eerst alleen aan de kassa.',
              'Een jongen legt een fles wodka en sigaretten op de band.',
              'Hij ziet er jong uit.',
              'Achter hem staat een lange rij. De jongen zegt: "Ik ben 18, hoor."',
            ],
          },
          // ⚖️ check: bier en wijn vanaf 16 jaar; sterke drank en tabak vanaf 18 jaar (wet 24 januari 1977, art. 6, gewijzigd bij wet 10 december 2009; tabak: 18 jaar sinds 2019; stad.gent; VRT NWS 2022 "factcheckers alcohol minderjarigen")
          // ⚖️ check: ook bier of wijn met sterke drank of met het aroma van sterke drank (zoals Desperados, Cubanisto) en mixdrankjes vallen onder 18 jaar (stad.gent; news.belgium.be, FOD Volksgezondheid)
          // ⚖️ check: de verkoper mag een bewijs van leeftijd vragen, zoals de identiteitskaart (eID); bij tabak moet hij een ID vragen aan wie jonger dan 25 lijkt (wet 24 januari 1977; tabakswet 2024, retaildetail.be "parlement heeft gestemd: tabak verdwijnt uit de supermarkt"; VRT NWS)
          // Redactie: de wet verplicht bij alcohol niet om altijd een ID te vragen (BELSPO, ALCOLAW, raadt dat aan) ⚖️.
          //   "Geen bewijs? Dan verkoop je niet" is wat winkels aanraden: de verkoper blijft verantwoordelijk.
          {
            kind: 'rule',
            id: 'r.be.l.winkel.3.ru1',
            emoji: '🪪',
            title: 'Bier en wijn vanaf 16 jaar. Sterke drank en tabak vanaf 18 jaar.',
            body: [
              'Bier en wijn verkoop je vanaf 16 jaar.',
              'Sterke drank en tabak verkoop je pas vanaf 18 jaar.',
              'Zit er sterke drank in een drankje? Dan is het ook 18 jaar.',
              'Weet je de leeftijd niet zeker? Vraag de identiteitskaart.',
              'Geen bewijs? Dan verkoop je niet.',
            ],
            rule: 'geschreven',
            key: true,
          },
          // ⚖️ check: sterke drank en tabak vanaf 18 jaar (wet 24 januari 1977, art. 6; tabak sinds 2019)
          // ⚖️ check: bij tabak moet je een ID vragen aan wie jonger dan 25 lijkt (tabakswet 2024; retaildetail.be; VRT NWS 2024 "Vandenbroucke tabak alcohol")
          // ⚖️ check: de verkoper mag een bewijs van leeftijd vragen, zoals de identiteitskaart (eID) (VRT NWS 2022; BELSPO ALCOLAW)
          {
            kind: 'whatdo',
            id: 'r.be.l.winkel.3.wd1',
            situation: 'Jayden weet niet zeker hoe oud de jongen is. Wat kan Jayden het beste doen?',
            options: [
              { id: 'a', text: 'Hij vraagt rustig: "Mag ik je identiteitskaart zien?"', best: true, feedback: 'Goed. Zonder bewijs van 18 jaar geen wodka of sigaretten.' },
              { id: 'b', text: 'Hij gelooft de jongen. De rij is al lang.', best: false, feedback: 'Dat snap ik. Maar hij moet de leeftijd echt zien.' },
              { id: 'c', text: 'Hij zegt dat hij niets verkoopt aan jongeren.', best: false, feedback: 'Misschien is hij wel 18. Jayden kan beter eerst zijn ID vragen.' },
            ],
            why: 'Sterke drank en tabak verkoop je pas vanaf 18 jaar. Lijkt iemand jonger dan 25? Vraag dan bij tabak altijd een ID. Ook bij alcohol mag je het vragen. Geen bewijs? Dan verkoop je niet.',
          },
          // ⚖️ check: bier en wijn mag je verkopen vanaf 16 jaar; sterke drank vanaf 18; bier met het aroma van sterke drank (zoals tequila) ook pas vanaf 18 (wet 24 januari 1977, art. 6; stad.gent; news.belgium.be)
          {
            kind: 'truefalse',
            id: 'r.be.l.winkel.3.tf1',
            statement: 'Een meisje van 16 mag in de winkel bier kopen.',
            answer: true,
            why: 'Bier en wijn mag je verkopen vanaf 16 jaar. Sterke drank pas vanaf 18 jaar. Let op: bier met de smaak van tequila telt als sterke drank. Dat is dus ook pas vanaf 18 jaar.',
          },
          // ⚖️ check: de werkgever mag een kassatekort niet zomaar van je loon afhouden; je bent alleen aansprakelijk bij bedrog, zware fout of herhaalde lichte fout (Arbeidsovereenkomstenwet 3 juli 1978, art. 18; Loonbeschermingswet art. 23)
          // Redactie: som: van 13,40 naar 14 is 60 cent; van 14 naar 20 is 6 euro; samen 6,60 euro.
          {
            kind: 'card',
            id: 'r.be.l.winkel.3.ca1',
            card: {
              type: 'kassabon',
              title: 'Kassaticket',
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
            why: 'De kassa rekent het vaak voor je uit. Tel het toch na als je het geld geeft. Tel hardop terug, dan ziet de klant het ook. Kom je aan het eind geld tekort? Zeg het meteen tegen je leidinggevende. Je baas mag het niet zomaar van je loon afhouden.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.winkel.3.wd2',
            situation: 'Een klant is boos. "Dit brood is gisteren gekocht. Nu zit er al schimmel op!" Hij praat luid.',
            options: [
              { id: 'a', text: 'Je zegt dat jij het brood niet gebakken hebt.', best: false, feedback: 'Dat klopt. Maar de klant wordt er niet rustiger van.' },
              { id: 'b', text: 'Je luistert, zegt sorry en vraagt naar het ticket.', best: true, feedback: 'Goed. Zo help je de klant verder.' },
              { id: 'c', text: 'Je geeft hem meteen geld terug uit de kassa.', best: false, feedback: 'Goed bedoeld. Maar vraag eerst wat je mag doen.' },
            ],
            why: 'Een klacht gaat niet over jou. Blijf rustig en luister. Zeg sorry voor het probleem. Weet je niet wat je mag doen? Roep je leidinggevende. Wordt een klant agressief? Haal meteen hulp.',
          },
          // ⚖️ check: het noodnummer bij gevaar is 112 (ook 101 voor de politie) (112.be)
          {
            kind: 'whoask',
            id: 'r.be.l.winkel.3.wa1',
            question: 'Na je dienst kom je geld tekort in de kassa. Wie zeg je het?',
            options: [
              { id: 'a', who: 'collega', best: false, feedback: 'Een collega kan het niet oplossen. Zeg het tegen je leidinggevende.' },
              { id: 'b', who: 'politie', best: false, feedback: 'Een tekort in de kassa is geen zaak voor de politie.' },
              { id: 'c', who: 'leidinggevende', best: true, feedback: 'Goed. Zeg het meteen. Dan kan je leidinggevende het nakijken.' },
            ],
            why: 'Kom je geld tekort? Zeg het meteen tegen je leidinggevende. Bij agressie of diefstal haal je je leidinggevende of de bewaking. Bij gevaar bel je 112. Loop nooit zelf achter een dief aan.',
          },
          { kind: 'model', id: 'r.be.l.winkel.3.mo1', context: 'Een klant is boos over een product.', nl: 'Vervelend voor u. Heeft u het ticket nog? Ik haal even mijn leidinggevende.' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.winkel.1.mo1': [
      { text: 'U kunt er wel langs. Het past heus wel.', feedback: 'De klant kan er niet goed langs. Zet de container opzij.' },
      { text: 'Ik ben aan het werk. Loop maar om.', feedback: 'Dat klinkt onbeleefd. De klant gaat voor.' },
    ],
    'r.be.l.winkel.2.mo1': [
      { text: 'Ik denk dat het zo is. Dat klopt vast wel, hoor.', feedback: 'Dan gok je. De klant krijgt dan misschien een fout antwoord.' },
      { text: 'Dat weet ik niet. Dat is niet mijn afdeling, sorry.', feedback: 'Dan heeft de klant nog geen antwoord. Vraag het na.' },
    ],
    'r.be.l.winkel.3.mo1': [
      { text: 'Daar kan ik niets aan doen. Dat moet u maar thuis oplossen.', feedback: 'Dan help je de klant niet. Vraag naar het ticket of haal hulp.' },
      { text: 'U hoeft niet zo te roepen. Doe eens even rustig, mevrouw.', feedback: 'Dat maakt de klant bozer. Zeg eerst dat het vervelend is.' },
    ],
  },
  advice: {
    'r.be.l.winkel.3.ru1': 'advice',
  },
  kun: [
    ['Ik kan eerlijk zeggen dat ik iets niet weet.', '1F', 'gesprekken'],
    ['Ik kan om een identiteitskaart vragen bij alcohol of tabak.', '1F', 'gesprekken'],
  ],
};
