import type { RuleUnit } from '../types';

/**
 * Unit 1 · Werk zoeken en solliciteren (les 1.1–1.4).
 * Converted from docs/werkregels-curriculum.md; edit the curriculum first, then this file.
 * `// ⚖️ check:` marks a fact the expert must check (docs/werkregels-bronnen.md). The marker is
 * never shown or read aloud. `// Redactie:` notes are for the makers only.
 */
export const zoekenUnit: RuleUnit = {
  id: 'r.zoeken',
  title: 'Werk zoeken en solliciteren',
  emoji: '🔎',
  color: '#3b7ea1',
  lessons: [
    {
      // Les 1.1 · Waar vind je werk?
      id: 'r.l.zoeken.1',
      title: 'Waar vind je werk?',
      goal: 'Je weet waar je echte vacatures vindt, en je herkent nepwerk.',
      remember: 'Voor echt werk hoef jij zelf niet te betalen.',
      // Wie kan je helpen: werk.nl (van UWV) · de gemeente: vraag naar het Werkplein of het
      //   Jongerenloket · uitzendbureaus · twijfel je over een vacature? Kijk op fraudehelpdesk.nl.
      help: ['uwv', 'gemeente', 'uitzendbureau'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.zoeken.1.sc1',
          picture: "Kevin (19) op de bank met zijn telefoon. Op het scherm een appje vol geld-emoji's.",
          lines: [
            'Kevin zoekt zijn eerste baan.',
            'Hij kijkt op werk.nl en bij een uitzendbureau.',
            'Dan krijgt hij een bericht van een onbekend nummer.',
            '"Verdien 250 euro per dag. Je werkt vanuit huis."',
            'Kevin weet niet wat hij moet doen.',
          ],
        },
        {
          kind: 'rule',
          id: 'r.l.zoeken.1.ru1',
          emoji: '💸',
          title: 'Voor echt werk hoef jij zelf niet te betalen.',
          body: [
            'Voor werk betaal je nooit.',
            'Een uitzendbureau mag jou geen geld vragen voor werk.',
            'Het bedrijf waar je werkt, betaalt het bureau.',
            'Veel geld voor makkelijk werk is vaak nep.',
          ],
          rule: 'geschreven',
          key: true,
        },
        {
          kind: 'whatdo',
          id: 'r.l.zoeken.1.wd1',
          situation: 'Kevin weet niet of het bericht echt is. Wat kan Kevin het beste doen?',
          options: [
            { id: 'a', text: "Hij antwoordt meteen. Zo'n kans krijgt hij niet vaak.", best: false, feedback: 'Begrijpelijk, maar pas op. Dit lijkt op oplichting.' },
            { id: 'b', text: 'Hij zoekt het bedrijf zelf op en belt het.', best: true, feedback: 'Goed. Zo checkt hij of het bedrijf echt bestaat.' },
            { id: 'c', text: 'Hij stuurt zijn gegevens, dan kunnen ze hem betalen.', best: false, feedback: 'Niet doen. Met zijn gegevens kunnen ze hem oplichten.' },
          ],
          why: 'Veel geld voor makkelijk werk is vaak nep. Oplichters zoeken mensen via WhatsApp, TikTok of Telegram. Een echt bedrijf kun je opzoeken en bellen.',
        },
        {
          kind: 'truefalse',
          id: 'r.l.zoeken.1.tf1',
          statement: 'Een uitzendbureau mag jou geld vragen om werk te vinden.',
          answer: false,
          why: 'Een uitzendbureau mag jou geen geld vragen voor werk. Het bedrijf waar je werkt, betaalt het bureau. Moet je toch betalen? Dat is een slecht teken.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.zoeken.1.wd2',
          situation: 'Fatima wil weer werken. Ze zorgde 6 jaar voor haar kinderen. Hoe begint ze?',
          options: [
            { id: 'a', text: 'Ze wacht tot de gemeente haar een baan aanbiedt.', best: false, feedback: 'Dat kan lang duren. Zelf zoeken werkt sneller.' },
            { id: 'b', text: 'Ze zoekt alleen precies hetzelfde werk als vroeger.', best: false, feedback: 'Dat mag, maar dan mist ze veel banen.' },
            { id: 'c', text: 'Ze vertelt vrienden en buren dat ze werk zoekt.', best: true, feedback: 'Goed. Veel banen vind je via mensen die je kent.' },
          ],
          why: 'De mensen die je kent, heten je netwerk. Via hen hoor je vaak over werk. Kijk ook op werk.nl en vraag de gemeente om hulp bij zoeken.',
        },
        {
          kind: 'whoask',
          id: 'r.l.zoeken.1.wa1',
          question: 'Je hebt een uitkering van de gemeente. Je wilt hulp bij werk zoeken. Waar ga je heen?',
          options: [
            { id: 'a', who: 'vakbond', best: false, feedback: 'Een vakbond helpt vooral als je al werk hebt.' },
            { id: 'b', who: 'gemeente', best: true, feedback: 'Goed. Vraag naar het Werkplein of het Jongerenloket.' },
            { id: 'c', who: 'bedrijfsarts', best: false, feedback: 'De bedrijfsarts gaat over ziek zijn en werk.' },
          ],
          why: 'De gemeente helpt bij werk zoeken. Kijk ook op werk.nl van UWV.',
        },
        { kind: 'model', id: 'r.l.zoeken.1.mo1', context: 'Je belt een bedrijf over een vacature.', nl: 'Hallo, ik zag uw vacature. Is die nog open?' },
      ],
    },
    {
      // Les 1.2 · Je cv: kort en eerlijk
      id: 'r.l.zoeken.2',
      title: 'Je cv: kort en eerlijk',
      goal: 'Je maakt een kort en eerlijk cv. Je weet dat zorg en vrijwilligerswerk ook tellen.',
      remember: 'Een cv is kort en eerlijk. Ook zorg en vrijwilligerswerk tellen.',
      // Wie kan je helpen: de bibliotheek · werk.nl (voorbeelden van een cv) · je school of
      //   loopbaanbegeleider · de gemeente.
      help: ['uwv', 'gemeente'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.zoeken.2.sc1',
          picture: 'Esra (38) aan de keukentafel met een laptop en een kop thee.',
          lines: [
            'Esra zorgde 8 jaar voor haar zieke moeder.',
            'Nu wil ze weer werken.',
            'Ze schrijft haar cv.',
            'Een cv is een lijstje van je werk, je school en wat je kunt.',
            'Esra denkt: "Wat zet ik bij die 8 jaar?"',
          ],
        },
        {
          kind: 'rule',
          id: 'r.l.zoeken.2.ru1',
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
          id: 'r.l.zoeken.2.wd1',
          situation: 'Wat schrijft Esra bij die 8 jaar?',
          options: [
            { id: 'a', text: 'Niets. Ze laat die jaren gewoon weg.', best: false, feedback: 'Een gat in je cv valt op. Werkgevers vragen er dan toch naar.' },
            { id: 'b', text: 'Ze schrijft dat ze toen in een winkel werkte.', best: false, feedback: 'Niet doen. Een werkgever kan dat nagaan.' },
            { id: 'c', text: 'Ze schrijft: "Mantelzorg voor mijn moeder."', best: true, feedback: 'Goed. Zorg is ook ervaring.' },
          ],
          why: 'Zorgen voor iemand uit je familie heet mantelzorg. Je leert er veel van. Bijvoorbeeld plannen, regelen en rustig blijven. Schrijf dat er gewoon bij.',
        },
        {
          kind: 'truefalse',
          id: 'r.l.zoeken.2.tf1',
          statement: 'Een foto op je cv mag, maar hoeft niet.',
          answer: true,
          why: 'Een foto mag, maar hoeft niet. Je hoeft ook je geloof niet te noemen. Een cv is kort: 1 of 2 bladzijden.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.zoeken.2.wd2',
          situation: 'Jayden heeft geen diploma. Hij werkte wel 2 jaar in een supermarkt. Wat kan Jayden het beste doen?',
          options: [
            { id: 'a', text: 'Hij schrijft de supermarkt op, en wat hij daar deed.', best: true, feedback: 'Goed. Werkervaring telt, ook zonder diploma.' },
            { id: 'b', text: 'Hij schrijft op dat hij bijna een diploma heeft.', best: false, feedback: 'Dat klopt niet. Eerlijk zijn werkt beter.' },
            { id: 'c', text: 'Hij solliciteert niet, want hij heeft geen diploma.', best: false, feedback: 'Jammer. Voor veel banen is ervaring genoeg.' },
          ],
          why: 'Schrijf op wat je deed. Bijvoorbeeld vakken vullen, de kassa en klanten helpen. Dat laat zien wat je kunt.',
        },
        {
          kind: 'whoask',
          id: 'r.l.zoeken.2.wa1',
          question: 'Je wilt gratis hulp bij je cv. Waar ga je heen?',
          options: [
            { id: 'a', who: 'arbeidsinspectie', best: false, feedback: 'De Arbeidsinspectie controleert bedrijven. Ze helpt niet met je cv.' },
            { id: 'b', who: 'bedrijfsarts', best: false, feedback: 'De bedrijfsarts gaat over je gezondheid op het werk.' },
            { id: 'c', who: 'gemeente', best: true, feedback: 'Goed. De gemeente helpt bij werk zoeken, ook met je cv.' },
          ],
          why: 'De gemeente, de bibliotheek en werk.nl helpen gratis met je cv.',
        },
        { kind: 'model', id: 'r.l.zoeken.2.mo1', context: 'Je vraagt iemand om je cv na te lezen.', nl: 'Wil je mijn cv lezen? Klopt alles?' },
      ],
    },
    {
      // Les 1.3 · Het sollicitatiegesprek
      id: 'r.l.zoeken.3',
      title: 'Het sollicitatiegesprek',
      // The first rule card is 🤐 (questions you need not answer): right for the card, odd for the lesson.
      icon: '🤝',
      goal: 'Je weet wat je in een gesprek kunt vragen. Je weet ook welke vragen je niet hoeft te beantwoorden.',
      remember: 'Vragen over kinderen, geloof of gezondheid hoef je niet te beantwoorden.',
      // Wie kan je helpen: discriminatie.nl (een meldpunt in je eigen regio) · het College voor de
      //   Rechten van de Mens.
      steps: [
        {
          kind: 'scene',
          id: 'r.l.zoeken.3.sc1',
          picture: 'Mohammed in een klein kantoor van een bakkerij. Tegenover hem zit Linda met een map.',
          lines: [
            'Mohammed heeft een sollicitatiegesprek bij een bakkerij.',
            'Hij is er 10 minuten te vroeg.',
            'De eigenaar, Linda, stelt veel vragen.',
            'Dan vraagt ze: "Ben je getrouwd? Wil je kinderen?"',
          ],
        },
        {
          kind: 'rule',
          id: 'r.l.zoeken.3.ru1',
          emoji: '🤐',
          title: 'Vragen over kinderen, geloof of gezondheid hoef je niet te beantwoorden.',
          body: [
            'Een werkgever mag niet vragen of je zwanger bent of kinderen wilt. Vragen over je geloof of gezondheid mogen ook niet.',
            'Je hoeft daar geen antwoord op te geven.',
            'Blijf rustig en beleefd.',
            'Je kunt het later melden als discriminatie.',
          ],
          rule: 'geschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.zoeken.3.wd1',
          situation: 'Mohammed wil daar niets over zeggen. Wat kan Mohammed het beste doen?',
          options: [
            { id: 'a', text: 'Hij zegt rustig: "Daar praat ik liever niet over."', best: true, feedback: 'Goed. Hij blijft beleefd en hij hoeft niets te vertellen.' },
            { id: 'b', text: 'Hij geeft toch antwoord, anders krijgt hij de baan niet.', best: false, feedback: 'Begrijpelijk. Maar hij hoeft dit niet te vertellen.' },
            { id: 'c', text: 'Hij zegt dat ze dit niet mag vragen, en hij gaat weg.', best: false, feedback: 'Hij heeft gelijk, maar weggaan sluit de deur.' },
          ],
          why: 'Een werkgever mag niet vragen of je zwanger bent of kinderen wilt. Vragen over je geloof of gezondheid mogen ook niet. Je hoeft daar geen antwoord op te geven. Je kunt het later melden als discriminatie.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.zoeken.3.wd2',
          situation: 'Aan het eind vraagt Linda: "Heb jij nog vragen?" Wat zegt Mohammed het beste?',
          options: [
            { id: 'a', text: 'Nee, dank u. Ik wil u niet lastigvallen.', best: false, feedback: 'Beleefd bedoeld. Maar hier kan het lijken alsof hij niet wil.', say: true },
            { id: 'b', text: 'Ja. Wat zijn de werktijden, en wat verdien ik?', best: true, feedback: 'Goed. Vragen stellen laat zien dat je de baan wilt.', say: true },
            { id: 'c', text: 'Nee, dat hoor ik wel als ik begin.', best: false, feedback: 'Dan weet hij te weinig als hij moet tekenen.', say: true },
          ],
          why: 'Hier is het normaal om zelf vragen te stellen. Vraag naar de uren, het loon en het werk. Je mag ook vragen wanneer je iets hoort.',
        },
        {
          kind: 'truefalse',
          id: 'r.l.zoeken.3.tf1',
          statement: 'Kom je 5 minuten te laat? Dan hoef je niets te zeggen.',
          answer: false,
          why: 'Op tijd komen is hier heel belangrijk. Te laat? Bel of app vóór de afspraak. Zeg sorry als je binnenkomt.',
        },
        { kind: 'model', id: 'r.l.zoeken.3.mo1', context: 'Je krijgt een vraag die je niet wilt beantwoorden.', nl: 'Daar praat ik liever niet over. Wilt u meer weten over mijn werk?' },
      ],
    },
    {
      // Les 1.4 · Proefdag en het aanbod
      id: 'r.l.zoeken.4',
      title: 'Proefdag en het aanbod',
      goal: 'Je weet wat een proefdag is. Je stelt de goede vragen vóór je tekent.',
      remember: 'Eerst lezen, dan tekenen.',
      // Wie kan je helpen: het Juridisch Loket (gratis, 0800-8020 ⚖️) · een vakbond, zoals FNV of
      //   CNV · iemand die je vertrouwt.
      // ⚖️ check: het Juridisch Loket (gratis, 0800-8020 ⚖️)
      help: ['juridischloket', 'vakbond'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.zoeken.4.sc1',
          picture: 'Piotr in werkkleding in een magazijn. Een man met een klembord steekt zijn duim op.',
          lines: [
            'Piotr mag een proefdag doen in een magazijn.',
            'Hij werkt de hele dag mee.',
            'Hij pakt dozen in, net als de anderen.',
            'Aan het eind zegt de baas: "Je mag beginnen! Teken je vandaag?"',
          ],
        },
        {
          kind: 'rule',
          id: 'r.l.zoeken.4.ru1',
          emoji: '✍️',
          title: 'Eerst lezen, dan tekenen.',
          body: [
            'Je mag een contract eerst lezen.',
            'Je mag iemand vragen om mee te lezen.',
            'Een goede werkgever geeft je die tijd.',
            'Vraag ook welke cao bij het werk hoort.',
          ],
          rule: 'geschreven',
          key: true,
        },
        // Redactie: er is geen wettelijke regel voor proefdagen. Het hangt af van arbeid, gezag en
        //   loon. ⚖️
        // ⚖️ check: Werk je echt mee, net als de anderen? Dan heb je vaak wel recht op loon ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.zoeken.4.tf1',
          statement: 'Een proefdag is altijd onbetaald.',
          answer: false,
          why: 'Kijk je een paar uur mee? Dan krijg je vaak geen loon. Werk je echt mee, net als de anderen? Dan heb je vaak wel recht op loon. Vraag dit vóór de proefdag.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.zoeken.4.wd1',
          situation: 'De baas wil dat Piotr meteen tekent. Wat kan Piotr het beste doen?',
          options: [
            { id: 'a', text: 'Hij tekent meteen. Anders krijgt een ander de baan.', best: false, feedback: 'Begrijpelijk. Maar dan weet hij niet wat hij tekent.' },
            { id: 'b', text: 'Hij vraagt of hij het contract mee naar huis mag nemen.', best: true, feedback: 'Goed. Thuis kan hij rustig lezen en vragen stellen.' },
            { id: 'c', text: 'Hij leest alleen het loon en tekent dan.', best: false, feedback: 'Het loon is belangrijk. Maar er staat nog veel meer in.' },
          ],
          why: 'Je mag een contract eerst lezen. Je mag iemand vragen om mee te lezen. Een goede werkgever geeft je die tijd.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.zoeken.4.wd2',
          situation: 'Welke vraag stelt Piotr vóór hij tekent?',
          options: [
            { id: 'a', text: 'Hoe heet de directeur van het hele bedrijf?', best: false, feedback: 'Dat mag hij vragen. Maar het zegt niets over zijn rechten.', say: true },
            { id: 'b', text: 'Mag ik in de pauze mijn eigen muziek luisteren?', best: false, feedback: 'Kan later ook. Eerst de belangrijke dingen.', say: true },
            { id: 'c', text: 'Welke cao hoort bij dit werk?', best: true, feedback: 'Goed. In de cao staan veel regels over zijn loon.', say: true },
          ],
          why: 'Een cao is een afspraak over loon en regels voor jouw soort werk. Vakbonden en werkgevers maken die samen. Er staan bijvoorbeeld toeslagen en vrije dagen in.',
        },
        {
          kind: 'whoask',
          id: 'r.l.zoeken.4.wa1',
          question: 'Je wilt dat iemand gratis je contract nakijkt. Wie bel je?',
          options: [
            { id: 'a', who: 'uwv', best: false, feedback: 'UWV gaat over uitkeringen, niet over je contract.' },
            { id: 'b', who: 'arbeidsinspectie', best: false, feedback: 'De Arbeidsinspectie controleert bedrijven. Ze kijkt je contract niet na.' },
            { id: 'c', who: 'juridischloket', best: true, feedback: 'Goed. Het Juridisch Loket geeft gratis advies.' },
          ],
          why: 'Het Juridisch Loket helpt gratis. Ben je lid van een vakbond? Die kijkt ook mee.',
        },
        { kind: 'model', id: 'r.l.zoeken.4.mo1', context: 'De baas wil dat je meteen tekent.', nl: 'Mag ik het contract mee naar huis nemen? Dan lees ik het rustig.' },
      ],
    },
  ],
};
