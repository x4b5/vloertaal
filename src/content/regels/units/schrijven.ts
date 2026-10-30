import type { RuleUnit } from '../types';

/**
 * Unit 18 · Schrijven op je werk (les 18.1–18.2). Entree, Nederlands 1F schrijven (30 oktober 2026).
 * Converted from docs/werkregels-curriculum.md, deel 7; edit that document first, then this file.
 * Unwritten rules only (how a message to work usually looks), so no advice line under the rules.
 * The phone's voice reads "appje" badly (docs/taal-a2.md, regel 7): these lessons say "bericht".
 */
export const schrijvenUnit: RuleUnit = {
  id: 'r.schrijven',
  title: 'Schrijven op je werk',
  emoji: '✍️',
  color: '#3f7f9f',
  lessons: [
    {
      // Les 18.1 · Een bericht of mail aan je werk
      id: 'r.l.schrijven.1',
      title: 'Een bericht of mail aan je werk',
      goal: 'Je schrijft een kort bericht of een mail aan je werk. Je leest het na voor je het verstuurt.',
      remember: 'Groet, wat je wilt, wanneer, en je naam. Lees het na voor je verstuurt.',
      // Wie kan je helpen: je leidinggevende of praktijkopleider (hoe wil die het hebben: bellen,
      //   een bericht of een mail?) · een collega die je mail even naleest.
      help: ['praktijkopleider', 'leidinggevende', 'collega'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.schrijven.1.sc1',
          picture: 'Fatima aan de keukentafel met haar telefoon. Op tafel ligt een brief van de school van haar zoon.',
          lines: [
            'Fatima loopt stage in een hotel.',
            'Volgende week dinsdag moet ze naar de school van haar zoon.',
            'Ze wil die ochtend vrij vragen.',
            'Haar praktijkopleider Mark wil dat per mail.',
          ],
        },
        {
          kind: 'rule',
          id: 'r.l.schrijven.1.ru1',
          emoji: '✉️',
          title: 'Groet, wat je wilt, wanneer, en je naam. Lees het na voor je verstuurt.',
          body: [
            'Begin met een groet: "Beste Mark," of "Hoi Mark,".',
            'Schrijf kort wat je wilt, en wanneer.',
            'Sluit af met een groet en je naam.',
            'Een mail krijgt een onderwerp. Lees alles na voor je het verstuurt.',
          ],
          rule: 'ongeschreven',
          key: true,
        },
        {
          kind: 'whatdo',
          id: 'r.l.schrijven.1.wd1',
          situation: 'Welke mail kan Fatima het beste sturen?',
          options: [
            { id: 'a', text: 'Hoi Mark, ik ben dinsdagochtend niet op mijn werk. Ik moet naar school. Groetjes, Fatima', best: false, feedback: 'Ze vraagt niets. Ze zegt alleen dat ze er niet is.' },
            { id: 'b', text: 'Beste Mark, mag ik dinsdagochtend vrij? Ik heb een gesprek op school. Fatima', best: true, feedback: 'Goed. Kort, met wat, wanneer en waarom.' },
            { id: 'c', text: 'Beste Mark, mag ik een keer vrij? Ik heb iets op school. Groet, Fatima', best: false, feedback: 'Mark weet niet wanneer. Noem de dag en het dagdeel.' },
          ],
          why: 'Een goede mail is kort. Er staat in: een groet, wat je wilt, wanneer, en je naam. Vraag het, zeg het niet alleen. Zet ook een onderwerp boven je mail. Bijvoorbeeld: "Vrij op dinsdagochtend".',
        },
        {
          kind: 'truefalse',
          id: 'r.l.schrijven.1.tf1',
          statement: 'Aan je leidinggevende schrijf je "ff" en "idd", net als aan vrienden.',
          answer: false,
          why: 'Aan vrienden schrijf je zoals je wilt. Aan je werk schrijf je gewone woorden, zonder afkortingen. Dan begrijpt iedereen je goed. Een emoji is soms oké, maar niet te veel.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.schrijven.1.wd2',
          situation: 'Fatima heeft haar mail geschreven. Wat kan Fatima het beste doen voor ze hem verstuurt?',
          options: [
            { id: 'a', text: 'Ze leest de mail na. Klopt de dag? Staat haar naam erin?', best: true, feedback: 'Goed. Zo ziet ze een fout voor Mark hem leest.' },
            { id: 'b', text: 'Ze stuurt hem meteen. Mark snapt het toch wel.', best: false, feedback: 'Een fout in de dag kan problemen geven. Lees het eerst na.' },
            { id: 'c', text: 'Ze stuurt hem ook naar de groepsapp van haar team.', best: false, feedback: 'Haar vrije ochtend gaat Mark aan. Stuur het niet naar iedereen.' },
          ],
          why: 'Lees je bericht na voor je het verstuurt. Klopt de dag? Staat er wat je bedoelt? Stuur het alleen naar wie het nodig heeft. Vrij vragen doe je bij je leidinggevende, niet in de groepsapp.',
        },
        { kind: 'model', id: 'r.l.schrijven.1.mo1', context: 'Je vraagt per mail een ochtend vrij.', nl: 'Mag ik dinsdagochtend vrij? Ik heb een gesprek op school.' },
      ],
    },
    {
      // Les 18.2 · Een korte sollicitatiemail
      id: 'r.l.schrijven.2',
      title: 'Een korte sollicitatiemail',
      goal: 'Je schrijft een korte, nette mail bij je cv. Je zegt waarom je deze baan wilt.',
      remember: 'Een sollicitatiemail: onderwerp, nette groet, waarom jij, en je cv erbij.',
      // Wie kan je helpen: je begeleider van school · de bibliotheek (gratis hulp met de computer en
      //   een mailadres maken) · werk.nl van UWV (voorbeelden).
      help: ['school', 'bibliotheek', 'uwv'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.schrijven.2.sc1',
          picture: 'Ewa in de bibliotheek achter een computer. Op het scherm een vacature van een hotel.',
          lines: [
            'Ewa woont net in Nederland.',
            'Ze ziet een vacature voor schoonmaker in een hotel.',
            'Ze moet een mail sturen, met haar cv.',
            'Ze heeft nog nooit een sollicitatiemail geschreven.',
          ],
        },
        {
          kind: 'rule',
          id: 'r.l.schrijven.2.ru1',
          emoji: '📧',
          title: 'Een sollicitatiemail: onderwerp, nette groet, waarom jij, en je cv erbij.',
          body: [
            'Zet de vacature in het onderwerp. Bijvoorbeeld: "Sollicitatie schoonmaker".',
            'Begin met "Beste" en de naam. Weet je geen naam? Schrijf "Geachte heer of mevrouw".',
            'Schrijf in 2 of 3 zinnen waarom jij deze baan wilt.',
            'Doe je cv erbij. Gebruik een mailadres met je eigen naam.',
          ],
          rule: 'ongeschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.schrijven.2.wd1',
          situation: 'Ewa heeft twee mailadressen. Welk adres kan Ewa het beste gebruiken?',
          options: [
            { id: 'a', text: 'Een nieuw adres, met haar eigen naam erin.', best: true, feedback: 'Goed. Dan weet de werkgever meteen van wie de mail is.' },
            { id: 'b', text: 'Haar oude adres, prinsesje99@mail.nl.', best: false, feedback: 'Dat adres klinkt niet serieus. Een werkgever kiest dan snel iemand anders.' },
            { id: 'c', text: 'Het adres van haar vriendin. Dat ziet er netter uit.', best: false, feedback: 'Dan komt het antwoord bij haar vriendin. En de werkgever weet niet wie Ewa is.' },
          ],
          why: "Een werkgever ziet je mailadres als eerste. Gebruik een adres met je eigen naam. Zo'n adres maak je gratis. Kijk ook of je naam goed gespeld is.",
        },
        {
          kind: 'truefalse',
          id: 'r.l.schrijven.2.tf1',
          statement: 'Wat je kunt en gedaan hebt, staat vooral in je cv.',
          answer: true,
          why: 'Je mail is kort: een paar zinnen. Je schrijft welke baan je wilt, en waarom. Wat je kunt en gedaan hebt, staat in je cv. Doe je cv erbij als bijlage.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.schrijven.2.wd2',
          situation: 'Ewa schrijft waarom ze de baan wil. Welke zin kan Ewa het beste schrijven?',
          options: [
            { id: 'a', text: '"Ik wil graag geld verdienen, en dit was de eerste vacature."', best: false, feedback: 'Dat is eerlijk. Maar de werkgever wil weten waarom juist deze baan.' },
            { id: 'b', text: '"Ik kan alles, en ik ben de beste schoonmaker van Nederland."', best: false, feedback: 'Dat klinkt te groot. Zeg liever wat ze echt kan.' },
            { id: 'c', text: '"Ik werk netjes en snel. Ik wil graag in een hotel werken."', best: true, feedback: 'Goed. Ze zegt wat ze kan, en waarom deze baan.' },
          ],
          why: 'Schrijf in 2 of 3 zinnen waarom jij deze baan wilt. Wat kun je goed? Waarom past het werk bij jou? Wees eerlijk, en houd het kort. Lees alles na voor je verstuurt.',
        },
        { kind: 'model', id: 'r.l.schrijven.2.mo1', context: 'Je belt een bedrijf na je sollicitatiemail.', nl: 'Ik heb maandag een mail gestuurd. Heeft u mijn cv ontvangen?' },
      ],
    },
  ],
};
