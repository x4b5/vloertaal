import type { BeUnit } from '../types';

/**
 * Unit 1 (België) · Werk zoeken en solliciteren: de Belgische versie van
 * src/content/regels/units/zoeken.ts. Zelfde lessen en stap-id's, met "r.be." vooraan.
 * Vlaamse woorden: VDAB, interimkantoor, job, paritair comité, Unia.
 *
 * `// ⚖️ check:` = een feit dat de deskundige nakijkt, met de bron. Opgezocht op 30 okt 2026.
 * werk.belgie.be, securex.be en de andere sites waren in deze sessie niet te openen (netwerk
 * geblokkeerd, 30 okt 2026): de feiten komen uit zoekresultaten. `// Redactie:` is voor de makers.
 * Geen eigen "Wat kun je nu?": de Nederlandse zinnen (echte vacature, vragen stellen) gelden ook.
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.zoeken',
    title: 'Werk zoeken en solliciteren',
    emoji: '🔎',
    color: '#3b7ea1',
    lessons: [
      {
        // Les 1.1 · Waar vind je werk?
        id: 'r.be.l.zoeken.1',
        title: 'Waar vind je werk?',
        goal: 'Je weet waar je echte vacatures vindt, en je herkent nepwerk.',
        remember: 'Voor echt werk hoef jij zelf niet te betalen.',
        // Wie kan je helpen: de VDAB (vdab.be: vacatures, inschrijven als werkzoekende) · een
        //   interimkantoor · het OCMW (als je een leefloon krijgt).
        help: ['vdab', 'interimkantoor', 'ocmw'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.zoeken.1.sc1',
            picture: "Kevin (19) op de bank met zijn gsm. Op het scherm een bericht vol geld-emoji's.",
            lines: [
              'Kevin zoekt zijn eerste job op de site van de VDAB.',
              'Een interimkantoor zoekt ook werk voor hem.',
              'Dan krijgt hij een bericht van een onbekend nummer.',
              '"Verdien 250 euro per dag. Je werkt van thuis uit."',
              'Kevin weet niet wat hij moet doen.',
            ],
          },
          // ⚖️ check: een bureau voor private arbeidsbemiddeling (ook een interimkantoor) mag van de
          //   werknemer of werkzoekende in geen geval een vergoeding vragen of krijgen (Decreet van 10
          //   december 2010 betreffende de private arbeidsbemiddeling, art. 5, 9°; codex.vlaanderen.be;
          //   vlaanderen.be "wetgeving private arbeidsbemiddeling"; zoekresultaat, tekst niet geopend)
          // ⚖️ check: het interimkantoor krijgt zijn geld van het bedrijf (de gebruiker) waar je werkt (federgon.be; Uitzendarbeidswet 24 juli 1987)
          {
            kind: 'rule',
            id: 'r.be.l.zoeken.1.ru1',
            emoji: '💸',
            title: 'Voor echt werk hoef jij zelf niet te betalen.',
            body: [
              'Voor werk betaal je nooit.',
              'Een interimkantoor mag jou geen geld vragen voor werk.',
              'Het bedrijf waar je werkt, betaalt het interimkantoor.',
              'Veel geld voor makkelijk werk is vaak nep.',
            ],
            rule: 'geschreven',
            key: true,
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.zoeken.1.wd1',
            situation: 'Kevin weet niet of het bericht echt is. Wat kan Kevin het beste doen?',
            options: [
              { id: 'a', text: "Hij antwoordt meteen. Zo'n kans krijgt hij niet vaak.", best: false, feedback: 'Dat snap ik, maar pas op. Misschien wil iemand je geld stelen.' },
              { id: 'b', text: 'Hij zoekt het bedrijf zelf op en belt het.', best: true, feedback: 'Goed. Zo checkt hij of het bedrijf echt bestaat.' },
              { id: 'c', text: 'Hij stuurt zijn adres en rekeningnummer, dan betalen ze hem.', best: false, feedback: 'Niet doen. Dan kunnen ze zijn geld stelen.' },
            ],
            why: 'Veel geld voor makkelijk werk is vaak nep. Oplichters zoeken mensen via WhatsApp, TikTok of Telegram. Ze willen je geld stelen. Een echt bedrijf kun je opzoeken en bellen.',
          },
          // ⚖️ check: een interimkantoor mag de werkzoekende geen geld vragen; inschrijven is gratis (Decreet private arbeidsbemiddeling 10 december 2010, art. 5, 9°; federgon.be)
          {
            kind: 'truefalse',
            id: 'r.be.l.zoeken.1.tf1',
            statement: 'Een interimkantoor mag jou geld vragen om werk te vinden.',
            answer: false,
            why: 'Een interimkantoor mag jou geen geld vragen voor werk. Inschrijven is gratis. Het bedrijf waar je werkt, betaalt het kantoor. Moet je toch betalen? Dat is een slecht teken.',
          },
          // ⚖️ check: op vdab.be staan vacatures, en je kan je er gratis inschrijven als werkzoekende (vdab.be)
          {
            kind: 'whatdo',
            id: 'r.be.l.zoeken.1.wd2',
            situation: 'Fatima wil weer werken. Ze zorgde 6 jaar voor haar kinderen. Hoe begint ze?',
            options: [
              { id: 'a', text: 'Ze wacht tot iemand haar een job aanbiedt.', best: false, feedback: 'Dat kan lang duren. Zelf zoeken werkt sneller.' },
              { id: 'b', text: 'Ze zoekt alleen precies hetzelfde werk als vroeger.', best: false, feedback: 'Dat mag, maar dan mist ze veel jobs.' },
              { id: 'c', text: 'Ze vertelt vrienden en buren dat ze werk zoekt.', best: true, feedback: 'Goed. Veel jobs vind je via mensen die je kent.' },
            ],
            why: 'De mensen die je kent, heten je netwerk. Via hen hoor je vaak over werk. Kijk ook op vdab.be. Daar kan je je gratis inschrijven als werkzoekende.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.zoeken.1.wa1',
            question: 'Je hebt geen werk. Je wilt hulp bij werk zoeken. Waar ga je heen?',
            options: [
              { id: 'a', who: 'vakbond', best: false, feedback: 'Een vakbond helpt vooral met je rechten, niet met vacatures.' },
              { id: 'b', who: 'vdab', best: true, feedback: 'Goed. De VDAB helpt je gratis bij werk zoeken.' },
              { id: 'c', who: 'arbeidsarts', best: false, feedback: 'De arbeidsarts gaat over je gezondheid op het werk.' },
            ],
            why: 'De VDAB is de Vlaamse dienst voor werk. Daar vind je vacatures en hulp bij zoeken. Een vacature is een job die nog vrij is. Krijg je een leefloon? Dan helpt het OCMW ook.',
          },
          { kind: 'model', id: 'r.be.l.zoeken.1.mo1', context: 'Je belt een bedrijf over een vacature.', nl: 'Goeiedag, ik zag uw vacature. Is die nog open?' },
        ],
      },
      {
        // Les 1.2 · Je cv: kort en eerlijk
        id: 'r.be.l.zoeken.2',
        title: 'Je cv: kort en eerlijk',
        goal: 'Je maakt een kort en eerlijk cv. Je weet dat zorg en vrijwilligerswerk ook tellen.',
        remember: 'Een cv is kort en eerlijk. Ook zorg en vrijwilligerswerk tellen.',
        // Wie kan je helpen: de VDAB (cv-hulp, voorbeelden) · de bibliotheek.
        help: ['vdab', 'bibliotheek'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.zoeken.2.sc1',
            picture: 'Esra (38) aan de keukentafel met een laptop en een tas thee.',
            lines: [
              'Esra zorgde 8 jaar voor haar zieke moeder.',
              'Nu wil ze weer werken.',
              'Ze schrijft haar cv.',
              'In een cv staan je werk, je school en wat je kunt.',
              'Esra denkt: "Wat zet ik bij die 8 jaar?"',
            ],
          },
          {
            kind: 'rule',
            id: 'r.be.l.zoeken.2.ru1',
            emoji: '📝',
            title: 'Een cv is kort en eerlijk. Ook zorg en vrijwilligerswerk tellen.',
            body: [
              'Een cv is kort: 1 of 2 bladzijden.',
              'Schrijf eerlijk op wat je deed.',
              'Zorgen voor familie heet mantelzorg. Dat is ook ervaring.',
              'Ook vrijwilligerswerk telt.',
            ],
            rule: 'ongeschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.zoeken.2.wd1',
            situation: 'Wat schrijft Esra bij die 8 jaar?',
            options: [
              { id: 'a', text: 'Niets. Ze laat die jaren gewoon weg.', best: false, feedback: 'Werkgevers zien een gat in je cv meteen. Ze vragen er dan toch naar.' },
              { id: 'b', text: 'Ze schrijft dat ze toen in een winkel werkte.', best: false, feedback: 'Niet doen. Een werkgever kan dat checken.' },
              { id: 'c', text: 'Ze schrijft: "Mantelzorg voor mijn moeder."', best: true, feedback: 'Goed. Zorg is ook ervaring.' },
            ],
            why: 'Zorgen voor iemand uit je familie heet mantelzorg. Je leert er veel van. Bijvoorbeeld plannen, regelen en rustig blijven. Schrijf dat er gewoon bij.',
          },
          // ⚖️ check: een foto en je geloof hoeven niet op je cv; de werkgever mag niet selecteren op
          //   geloof of afkomst (Antidiscriminatiewet 10 mei 2007; cao nr. 38; gewoonte: in Vlaanderen
          //   staat vaak wel een foto op een cv, Vlaamse NT2-docent nakijken)
          // ⚖️ check: een cv is kort: 1 of 2 bladzijden (gewoonte; vdab.be cv-tips)
          {
            kind: 'truefalse',
            id: 'r.be.l.zoeken.2.tf1',
            statement: 'Een foto op je cv mag, maar hoeft niet.',
            answer: true,
            why: 'Een foto mag, maar hoeft niet. Je hoeft ook je geloof niet te noemen. Een cv is kort: 1 of 2 bladzijden.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.zoeken.2.wd2',
            situation: 'Jayden heeft geen diploma. Hij werkte wel 2 jaar in een supermarkt. Wat kan Jayden het beste doen?',
            options: [
              { id: 'a', text: 'Hij schrijft de supermarkt op, en wat hij daar deed.', best: true, feedback: 'Goed. Werkervaring telt, ook zonder diploma.' },
              { id: 'b', text: 'Hij schrijft op dat hij bijna een diploma heeft.', best: false, feedback: 'Dat klopt niet. Eerlijk zijn werkt beter.' },
              { id: 'c', text: 'Hij vraagt nergens om werk, want hij heeft geen diploma.', best: false, feedback: 'Jammer. Voor veel jobs is ervaring genoeg.' },
            ],
            why: 'Schrijf op wat je deed. Bijvoorbeeld rekken vullen, de kassa en klanten helpen. Dat laat zien wat je kunt.',
          },
          // ⚖️ check: de VDAB helpt gratis met je cv, ook online en in een VDAB-kantoor (vdab.be)
          {
            kind: 'whoask',
            id: 'r.be.l.zoeken.2.wa1',
            question: 'Je wilt gratis hulp bij je cv. Waar ga je heen?',
            options: [
              { id: 'a', who: 'tsw', best: false, feedback: 'De inspectie controleert bedrijven. Ze helpt niet met je cv.' },
              { id: 'b', who: 'arbeidsarts', best: false, feedback: 'De arbeidsarts gaat over je gezondheid op het werk.' },
              { id: 'c', who: 'vdab', best: true, feedback: 'Goed. De VDAB helpt bij werk zoeken, ook met je cv.' },
            ],
            why: 'De VDAB en de bibliotheek helpen gratis met je cv.',
          },
          { kind: 'model', id: 'r.be.l.zoeken.2.mo1', context: 'Je vraagt iemand om je cv na te lezen.', nl: 'Wil je mijn cv lezen? Klopt alles?' },
        ],
      },
      {
        // Les 1.3 · Het sollicitatiegesprek
        id: 'r.be.l.zoeken.3',
        title: 'Het sollicitatiegesprek',
        icon: '🤝',
        goal: 'Je weet wat je in een gesprek kunt vragen. Je weet ook welke vragen je niet hoeft te beantwoorden.',
        remember: 'Vragen over kinderen, geloof of gezondheid hoef je niet te beantwoorden.',
        // Wie kan je helpen: Unia (unia.be, gratis) · het Vlaams Mensenrechteninstituut · een vakbond.
        help: ['meldpunt', 'vakbond'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.zoeken.3.sc1',
            picture: 'Mohammed in een klein kantoor van een bakkerij. Tegenover hem zit Linda met een map.',
            lines: [
              'Mohammed heeft een sollicitatiegesprek bij een bakkerij: een gesprek over een job.',
              'Hij is er 10 minuten te vroeg.',
              'De eigenaar, Linda, stelt veel vragen.',
              'Dan vraagt ze: "Bent u getrouwd? Wilt u kinderen?"',
            ],
          },
          // ⚖️ check: de werkgever mag in principe geen vragen stellen over het privéleven, tenzij dat
          //   nodig is voor de functie (cao nr. 38 van de Nationale Arbeidsraad, werving en selectie;
          //   securex.be "mag de werkgever om het even welke vraag stellen"; zoekresultaat)
          // ⚖️ check: discriminatie op grond van onder meer geslacht (ook zwangerschap), geloof,
          //   gezondheid, handicap, afkomst en leeftijd is verboden, ook bij aanwerving
          //   (Antidiscriminatiewet 10 mei 2007; Genderwet 10 mei 2007; Antiracismewet 30 juli 1981)
          // ⚖️ check: discriminatie melden kan gratis bij Unia (unia.be, 0800 12 800) of, voor Vlaamse
          //   bevoegdheden, bij het Vlaams Mensenrechteninstituut (vlaanderen.be "discriminatie melden")
          {
            kind: 'rule',
            id: 'r.be.l.zoeken.3.ru1',
            emoji: '🤐',
            title: 'Vragen over kinderen, geloof of gezondheid hoef je niet te beantwoorden.',
            body: [
              'Een werkgever mag niet vragen of je zwanger bent of kinderen wilt.',
              'Vragen over je geloof of gezondheid mogen meestal ook niet.',
              'Je hoeft daar geen antwoord op te geven.',
              'Blijf rustig en beleefd.',
              'Is het discriminatie? Dan kun je het gratis melden bij Unia.',
            ],
            rule: 'geschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.zoeken.3.wd1',
            situation: 'Mohammed wil daar niets over zeggen. Wat kan Mohammed het beste doen?',
            options: [
              { id: 'a', text: 'Hij zegt: "Daar praat ik liever niet over."', best: true, feedback: 'Goed. Hij blijft beleefd en hij hoeft niets te vertellen.' },
              { id: 'b', text: 'Hij geeft toch antwoord, anders krijgt hij de job niet.', best: false, feedback: 'Dat snap ik. Maar hij hoeft dit niet te vertellen.' },
              { id: 'c', text: 'Hij zegt snel "nee", ook als dat niet waar is.', best: false, feedback: 'Ik snap het. Maar dat hoeft niet. Hij mag gewoon niets zeggen.' },
            ],
            why: 'Een werkgever mag niet vragen of je zwanger bent of kinderen wilt. Vragen over je geloof of gezondheid mogen meestal ook niet. Je hoeft daar geen antwoord op te geven. Discriminatie meld je bij Unia. Unia helpt gratis.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.zoeken.3.wd2',
            situation: 'Aan het eind vraagt Linda: "Hebt u nog vragen?" Wat zegt Mohammed het beste?',
            options: [
              { id: 'a', text: 'Nee, dank u. Ik wil u niet storen.', best: false, feedback: 'Beleefd bedoeld. Maar zo lijkt het alsof hij niet wil.', say: true },
              { id: 'b', text: 'Ja. Wat zijn de uren, en wat verdien ik?', best: true, feedback: 'Goed. Zo laat hij zien dat hij de job wil.', say: true },
              { id: 'c', text: 'Nee, dat hoor ik wel als ik begin.', best: false, feedback: 'Dan weet hij te weinig als hij moet tekenen.', say: true },
            ],
            why: 'Het is normaal om zelf vragen te stellen. Vraag naar de uren, het loon en het werk. Je mag ook vragen wanneer je iets hoort.',
          },
          // ⚖️ check: op tijd komen is belangrijk; te laat: verwittig vóór de afspraak (gewoonte; vdab.be sollicitatietips)
          {
            kind: 'truefalse',
            id: 'r.be.l.zoeken.3.tf1',
            statement: 'Kom je 5 minuten te laat? Dan hoef je niets te zeggen.',
            answer: false,
            why: 'Op tijd komen is heel belangrijk. Te laat? Bel vóór de afspraak. Zeg sorry als je binnenkomt.',
          },
          { kind: 'model', id: 'r.be.l.zoeken.3.mo1', context: 'Je krijgt een vraag die je niet wilt beantwoorden.', nl: 'Daar praat ik liever niet over. Wilt u meer weten over mijn werk?' },
        ],
      },
      {
        // Les 1.4 · Proefdag en het aanbod
        id: 'r.be.l.zoeken.4',
        title: 'Proefdag en het aanbod',
        goal: 'Je weet wat een proefdag is. Je stelt de goede vragen vóór je tekent.',
        remember: 'Eerst lezen, dan tekenen.',
        // Wie kan je helpen: een vakbond (ABVV, ACV, ACLVB) · gratis eerste juridisch advies
        //   (juridische eerstelijnsbijstand, onder meer in het justitiehuis) · iemand die je vertrouwt.
        help: ['vakbond', 'justitiehuis'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.zoeken.4.sc1',
            picture: 'Piotr in werkkleren in een magazijn. Een man met een klembord steekt zijn duim op.',
            lines: [
              'Piotr mag een proefdag doen in een magazijn.',
              'Hij werkt de hele dag mee.',
              'Hij pakt dozen in, net als de anderen.',
              'Aan het eind zegt de baas: "U mag beginnen! Tekent u vandaag?"',
            ],
          },
          // ⚖️ check: je mag een contract eerst lezen en laten nalezen; niemand kan je verplichten
          //   meteen te tekenen (algemeen contractenrecht; hetacv.be / abvv.be "je contract")
          // ⚖️ check: elke werkgever valt onder een paritair comité; daar maken vakbonden en werkgevers
          //   afspraken over loon en regels voor de sector (werk.belgie.be, paritaire comités; niet te
          //   openen op 30 okt 2026)
          {
            kind: 'rule',
            id: 'r.be.l.zoeken.4.ru1',
            emoji: '✍️',
            title: 'Eerst lezen, dan tekenen.',
            body: [
              'Je mag een contract eerst lezen.',
              'Je mag iemand vragen om mee te lezen.',
              'Een goede werkgever geeft je die tijd.',
              'Vraag ook welk paritair comité bij het werk hoort.',
            ],
            rule: 'geschreven',
            key: true,
          },
          // Redactie: geen Belgische wetsregel gevonden voor een proefdag. Een rechter kijkt naar
          //   arbeid, gezag en loon. Werk je echt mee, dan is het een arbeidsovereenkomst, met loon en
          //   een Dimona-aangifte vóór je begint. Extra nakijken. ⚖️
          // ⚖️ check: meekijken of een korte test zonder productief werk mag onbetaald; productief
          //   meewerken is arbeid, met recht op loon (zoekresultaten, geen officiële bron gevonden;
          //   socialsecurity.be Dimona: aangifte vóór de start van het werk)
          {
            kind: 'truefalse',
            id: 'r.be.l.zoeken.4.tf1',
            statement: 'Een proefdag is altijd onbetaald.',
            answer: false,
            why: 'Kijk je een paar uur mee? Dan krijg je vaak geen loon. Werk je echt mee, net als de anderen? Dan is het vaak gewoon werk, met loon. Vraag dit vóór de proefdag.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.zoeken.4.wd1',
            situation: 'De baas wil dat Piotr meteen tekent. Wat kan Piotr het beste doen?',
            options: [
              { id: 'a', text: 'Hij tekent meteen. Anders krijgt een ander de job.', best: false, feedback: 'Dat snap ik. Maar dan weet hij niet wat hij tekent.' },
              { id: 'b', text: 'Hij vraagt of hij het contract mee naar huis mag nemen.', best: true, feedback: 'Goed. Thuis kan hij rustig lezen en vragen stellen.' },
              { id: 'c', text: 'Hij leest alleen het loon en tekent dan.', best: false, feedback: 'Het loon is belangrijk. Maar er staat nog veel meer in.' },
            ],
            why: 'Je mag een contract eerst lezen. Je mag iemand vragen om mee te lezen. Een goede werkgever geeft je die tijd.',
          },
          // ⚖️ check: in het paritair comité maken vakbonden en werkgevers afspraken over loon,
          //   premies en vrije dagen (werk.belgie.be; hetacv.be "paritair comité")
          {
            kind: 'whatdo',
            id: 'r.be.l.zoeken.4.wd2',
            situation: 'Welke vraag stelt Piotr vóór hij tekent?',
            options: [
              { id: 'a', text: 'Kan ik het contract later nog veranderen?', best: false, feedback: 'Alleen als de baas het ook wil. Vraag het belangrijke dus vóór je tekent.', say: true },
              { id: 'b', text: 'Hoeveel verdienen de anderen hier?', best: false, feedback: 'Dat zegt de baas meestal niet. En het gaat om zijn eigen loon.', say: true },
              { id: 'c', text: 'Welk paritair comité hoort bij dit werk?', best: true, feedback: 'Goed. Daar staan veel regels over zijn loon.', say: true },
            ],
            why: 'Elke sector heeft een paritair comité. Daar maken vakbonden en werkgevers afspraken over loon en regels. Er staan bijvoorbeeld premies en vrije dagen in.',
          },
          // ⚖️ check: juridische eerstelijnsbijstand: gratis eerste juridisch advies, onder meer in het
          //   justitiehuis (vlaanderen.be "juridische eerstelijnsbijstand"; Commissies voor Juridische Bijstand)
          {
            kind: 'whoask',
            id: 'r.be.l.zoeken.4.wa1',
            question: 'Je wilt dat iemand gratis je contract nakijkt. Waar ga je heen?',
            options: [
              { id: 'a', who: 'rva', best: false, feedback: 'De RVA gaat over werkloosheid, niet over je contract.' },
              { id: 'b', who: 'tsw', best: false, feedback: 'De inspectie controleert bedrijven. Ze kijkt je contract niet na.' },
              { id: 'c', who: 'justitiehuis', best: true, feedback: 'Goed. Daar krijg je gratis een eerste advies.' },
            ],
            why: 'In het justitiehuis krijg je gratis een eerste advies over je rechten. Ben je lid van een vakbond? Die kijkt ook mee.',
          },
          { kind: 'model', id: 'r.be.l.zoeken.4.mo1', context: 'De baas wil dat je meteen tekent.', nl: 'Mag ik het contract mee naar huis nemen? Dan lees ik het rustig.' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.zoeken.1.mo1': [
      { text: 'Goeiedag, ik zoek werk. Hebt u misschien iets voor mij?', feedback: 'Dan weet het bedrijf niet over welke vacature je belt.' },
      { text: 'Goeiedag, ik wil die job. Wanneer kan ik beginnen?', feedback: 'Je weet nog niet of de vacature open is. Vraag dat eerst.' },
    ],
    'r.be.l.zoeken.2.mo1': [
      { text: 'Mijn cv is af. Ik stuur het meteen weg.', feedback: 'Dan kijkt niemand of er fouten in staan.' },
      { text: 'Ik zet er wat extra jobs bij, oké?', feedback: 'Je cv moet eerlijk zijn. Een werkgever kan het nakijken.' },
    ],
    'r.be.l.zoeken.3.mo1': [
      { text: 'Dat gaat u helemaal niets aan. Stel maar een andere vraag.', feedback: 'Dat klinkt boos. Je kunt ook rustig iets anders voorstellen.' },
      { text: 'Oké, ik vertel het wel. Ik wil deze job heel graag.', feedback: 'Je hoeft niet alles te vertellen. Je mag beleefd nee zeggen.' },
    ],
    'r.be.l.zoeken.4.mo1': [
      { text: 'Goed, ik teken het nu. U zegt vast wel wat erin staat.', feedback: 'Dan teken je iets wat je niet hebt gelezen.' },
      { text: 'Ik teken niets. Ik vertrouw dit bedrijf helemaal niet.', feedback: 'Dat klinkt boos. Je mag gewoon rustig om tijd vragen.' },
    ],
  },
  advice: {
    'r.be.l.zoeken.1.ru1': 'advice',
    // Discriminatie: de hulp komt van buiten (RULES_ABUSE_BE).
    'r.be.l.zoeken.3.ru1': 'abuse',
    'r.be.l.zoeken.4.ru1': 'advice',
  },
};
