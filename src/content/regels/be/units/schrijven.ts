import type { BeUnit } from '../types';

/**
 * Unit 18 (België) · Schrijven op je werk: de Belgische versie van src/content/regels/units/schrijven.ts.
 * Alleen ongeschreven regels (hoe een mail aan je werk er meestal uitziet), dus geen adviesregel.
 * Op zijn Vlaams: "Beste" of "Dag" als aanspreking, "Met vriendelijke groeten" als groet, vaak "u"
 * tegen je baas, "voormiddag" voor ochtend. Uit de praktijk, niet uit een wet.
 *
 * `// ⚖️ check:` = nakijken door een Vlaamse NT2-docent (belgie-vlaanderen-plan.md, punt 29-30).
 * Opgezocht op 30 okt 2026: vdab.be was in deze sessie niet te openen (netwerk geblokkeerd).
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.schrijven',
    title: 'Schrijven op je werk',
    emoji: '✍️',
    color: '#3f7f9f',
    lessons: [
      {
        // Les 18.1 · Een bericht of mail aan je werk
        id: 'r.be.l.schrijven.1',
        title: 'Een bericht of mail aan je werk',
        goal: 'Je schrijft een kort bericht of een mail aan je werk. Je leest het na voor je het verstuurt.',
        remember: 'Aanspreking, wat je wilt, wanneer, en een groet. Lees het na voor je verstuurt.',
        // Wie kan je helpen: je mentor of je leidinggevende (hoe wil die het hebben: bellen, een
        //   bericht of een mail?) · een collega die je mail even naleest.
        help: ['praktijkopleider', 'leidinggevende', 'collega'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.schrijven.1.sc1',
            picture: 'Fatima aan de keukentafel met haar gsm. Op tafel ligt een brief van de school van haar zoon.',
            lines: [
              'Fatima loopt stage in een hotel.',
              'Volgende week dinsdag moet ze naar de school van haar zoon.',
              'Ze wil die voormiddag vrij vragen.',
              'Haar mentor Mark wil dat per mail.',
            ],
          },
          // ⚖️ check: in Vlaanderen begin je een mail aan je werk meestal met "Beste Mark," of "Dag Mark,"; je sluit af met "Met vriendelijke groeten," of "Vriendelijke groeten," en je naam (gewoonte; nakijken door een Vlaamse NT2-docent)
          {
            kind: 'rule',
            id: 'r.be.l.schrijven.1.ru1',
            emoji: '✉️',
            title: 'Aanspreking, wat je wilt, wanneer, en een groet. Lees het na voor je verstuurt.',
            body: [
              'Begin met een aanspreking: "Beste Mark," of "Dag Mark,".',
              'Schrijf kort wat je wilt, en wanneer.',
              'Sluit af met "Met vriendelijke groeten," en je naam.',
              'Een mail krijgt een onderwerp. Lees alles na voor je het verstuurt.',
            ],
            rule: 'ongeschreven',
            key: true,
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.schrijven.1.wd1',
            situation: 'Welke mail kan Fatima het beste sturen?',
            options: [
              { id: 'a', text: 'Dag Mark, ik ben dinsdagvoormiddag niet op mijn werk. Ik moet naar school. Met vriendelijke groeten, Fatima', best: false, feedback: 'Ze vraagt niets. Ze zegt alleen dat ze er niet is.' },
              { id: 'b', text: 'Beste Mark, mag ik dinsdagvoormiddag vrij? Ik heb een gesprek op school. Met vriendelijke groeten, Fatima', best: true, feedback: 'Goed. Kort, met wat, wanneer en waarom.' },
              { id: 'c', text: 'Beste Mark, mag ik een keer vrij? Ik heb iets op school. Met vriendelijke groeten, Fatima', best: false, feedback: 'Mark weet niet wanneer. Noem de dag en het dagdeel.' },
            ],
            why: 'Een goede mail is kort. Er staat in: een aanspreking, wat je wilt, wanneer, en een groet. Vraag het, zeg het niet alleen. Zet ook een onderwerp boven je mail. Bijvoorbeeld: "Vrij op dinsdagvoormiddag".',
          },
          // ⚖️ check: aan je werk schrijf je gewone woorden zonder afkortingen; tegen je baas schrijf je in Vlaanderen vaak "u" (gewoonte; belgie-vlaanderen-plan.md punt 30; nakijken door een Vlaamse NT2-docent)
          {
            kind: 'truefalse',
            id: 'r.be.l.schrijven.1.tf1',
            statement: 'Aan je leidinggevende schrijf je "ff" en "idd", net als aan vrienden.',
            answer: false,
            why: 'Aan vrienden schrijf je zoals je wilt. Aan je werk schrijf je gewone woorden, zonder afkortingen. Dan begrijpt iedereen je goed. Tegen je baas schrijf je vaak "u". Een emoji is soms oké, maar niet te veel.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.schrijven.1.wd2',
            situation: 'Fatima heeft haar mail geschreven. Wat kan Fatima het beste doen voor ze hem verstuurt?',
            options: [
              { id: 'a', text: 'Ze leest de mail na. Klopt de dag? Staat haar naam erin?', best: true, feedback: 'Goed. Zo ziet ze een fout voor Mark hem leest.' },
              { id: 'b', text: 'Ze stuurt hem meteen. Mark snapt het toch wel.', best: false, feedback: 'Een fout in de dag kan problemen geven. Lees het eerst na.' },
              { id: 'c', text: 'Ze stuurt hem ook naar de groepsapp van haar team.', best: false, feedback: 'Haar vrije voormiddag gaat Mark aan. Stuur het niet naar iedereen.' },
            ],
            why: 'Lees je bericht na voor je het verstuurt. Klopt de dag? Staat er wat je bedoelt? Stuur het alleen naar wie het nodig heeft. Vrij vragen doe je bij je mentor, niet in de groepsapp.',
          },
          { kind: 'model', id: 'r.be.l.schrijven.1.mo1', context: 'Je vraagt per mail een voormiddag vrij.', nl: 'Mag ik dinsdagvoormiddag vrij? Ik heb een gesprek op school.' },
        ],
      },
      {
        // Les 18.2 · Een korte sollicitatiemail
        id: 'r.be.l.schrijven.2',
        title: 'Een korte sollicitatiemail',
        goal: 'Je schrijft een korte, nette mail bij je cv. Je zegt waarom je deze job wilt.',
        remember: 'Een sollicitatiemail: onderwerp, nette aanspreking, waarom jij, en je cv erbij.',
        // Wie kan je helpen: je begeleider van school · de bibliotheek (gratis hulp met de computer en
        //   een mailadres maken) · de VDAB (voorbeelden en hulp bij solliciteren).
        help: ['school', 'bibliotheek', 'vdab'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.schrijven.2.sc1',
            picture: 'Ewa in de bibliotheek achter een computer. Op het scherm een vacature van een hotel.',
            lines: [
              'Ewa woont net in België.',
              'Ze ziet een vacature voor schoonmaker in een hotel.',
              'Ze moet een mail sturen, met haar cv.',
              'Ze heeft nog nooit een sollicitatiemail geschreven.',
            ],
          },
          // ⚖️ check: "Geachte heer, mevrouw" als je geen naam weet; 2 of 3 zinnen is een richtlijn, geen regel (vdab.be, sollicitatietips; niet geopend 30 okt 2026; nakijken door een Vlaamse NT2-docent)
          {
            kind: 'rule',
            id: 'r.be.l.schrijven.2.ru1',
            emoji: '📧',
            title: 'Een sollicitatiemail: onderwerp, nette aanspreking, waarom jij, en je cv erbij.',
            body: [
              'Zet de vacature in het onderwerp. Bijvoorbeeld: "Sollicitatie schoonmaker".',
              'Begin met "Beste" en de naam. Weet je geen naam? Schrijf "Geachte heer, mevrouw".',
              'Schrijf in 2 of 3 zinnen waarom jij deze job wilt.',
              'Doe je cv erbij. Gebruik een mailadres met je eigen naam.',
            ],
            rule: 'ongeschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.schrijven.2.wd1',
            situation: 'Ewa heeft twee mailadressen. Welk adres kan Ewa het beste gebruiken?',
            options: [
              { id: 'a', text: 'Een nieuw adres, met haar eigen naam erin.', best: true, feedback: 'Goed. Dan weet de werkgever meteen van wie de mail is.' },
              { id: 'b', text: 'Haar oude adres, prinsesje99@mail.be.', best: false, feedback: 'Dat adres klinkt niet serieus. Een werkgever kiest dan snel iemand anders.' },
              { id: 'c', text: 'Het adres van haar vriendin. Dat ziet er netter uit.', best: false, feedback: 'Dan komt het antwoord bij haar vriendin. En de werkgever weet niet wie Ewa is.' },
            ],
            why: "Een werkgever ziet je mailadres als eerste. Gebruik een adres met je eigen naam. Zo'n adres maak je gratis. Kijk ook of je naam goed gespeld is.",
          },
          // ⚖️ check: wat je kunt en gedaan hebt, staat in je cv; je mail is kort (vdab.be, sollicitatietips; niet geopend)
          {
            kind: 'truefalse',
            id: 'r.be.l.schrijven.2.tf1',
            statement: 'Wat je kunt en gedaan hebt, staat vooral in je cv.',
            answer: true,
            why: 'Je mail is kort: een paar zinnen. Je schrijft welke job je wilt, en waarom. Wat je kunt en gedaan hebt, staat in je cv. Doe je cv erbij als bijlage.',
          },
          // ⚖️ check: 2 of 3 zinnen is een richtlijn (zie de regel hierboven)
          {
            kind: 'whatdo',
            id: 'r.be.l.schrijven.2.wd2',
            situation: 'Ewa schrijft waarom ze de job wil. Welke zin kan Ewa het beste schrijven?',
            options: [
              { id: 'a', text: '"Ik wil graag geld verdienen, en dit was de eerste vacature."', best: false, feedback: 'Dat is eerlijk. Maar de werkgever wil weten waarom juist deze job.' },
              { id: 'b', text: '"Ik kan alles, en ik ben de beste schoonmaker van België."', best: false, feedback: 'Dat klinkt te groot. Zeg liever wat ze echt kan.' },
              { id: 'c', text: '"Ik werk netjes en snel. Ik wil graag in een hotel werken."', best: true, feedback: 'Goed. Ze zegt wat ze kan, en waarom deze job.' },
            ],
            why: 'Schrijf in 2 of 3 zinnen waarom jij deze job wilt. Wat kun je goed? Waarom past het werk bij jou? Wees eerlijk, en houd het kort. Lees alles na voor je verstuurt.',
          },
          { kind: 'model', id: 'r.be.l.schrijven.2.mo1', context: 'Je belt een bedrijf na je sollicitatiemail.', nl: 'Ik heb maandag een mail gestuurd. Hebt u mijn cv ontvangen?' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.schrijven.1.mo1': [
      { text: 'Ik ben dinsdag niet op mijn werk. Ik moet naar school.', feedback: 'Je zegt het, maar je vraagt het niet.' },
      { text: 'Mag ik een keer vrij? Ik moet ergens naartoe.', feedback: 'Dan weet je mentor niet wanneer, en niet waarom.' },
    ],
    'r.be.l.schrijven.2.mo1': [
      { text: 'Ik heb gemaild, maar jullie zeggen niks. Waarom niet?', feedback: 'Dat klinkt ongeduldig. Vraag rustig of je mail er is.' },
      { text: 'Hallo, ik zoek werk. Hebt u nog iets voor mij?', feedback: 'Dan weet het bedrijf niet dat je al gemaild hebt.' },
    ],
  },
  advice: {},
};
