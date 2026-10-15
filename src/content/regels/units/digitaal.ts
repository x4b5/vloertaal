import type { RuleUnit } from '../types';

/**
 * Unit 15 · Digitaal op je werk (les 15.1–15.2).
 * Converted from docs/entree-aanvulling.md; edit that document first, then this file.
 * `// ⚖️ check:` marks a fact the expert must check (docs/entree-aanvulling.md, deel 6 and 7). The
 * marker is never shown or read aloud. `// Redactie:` notes are for the makers only.
 */
export const digitaalUnit: RuleUnit = {
  id: 'r.digitaal',
  title: 'Digitaal op je werk',
  emoji: '💻',
  color: '#3d5a80',
  lessons: [
    {
      // Les 15.1 · DigiD en inloggen
      id: 'r.l.digitaal.1',
      title: 'DigiD en inloggen',
      goal: 'Je weet wat DigiD is, je houdt het voor jezelf, en je logt uit op een gedeelde computer.',
      remember: 'Je DigiD is alleen van jou. Geef hem aan niemand.',
      // Wie kan je helpen: de bibliotheek (Informatiepunt Digitale Overheid) · de helpdesk van
      //   DigiD ⚖️ · de gemeente.
      help: ['bibliotheek', 'gemeente'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.digitaal.1.sc1',
          picture: 'Piotr aan de keukentafel, met een brief en zijn telefoon.',
          lines: [
            'Piotr moet zijn belastingaangifte doen.',
            'Daarvoor heeft hij DigiD nodig.',
            'DigiD is je digitale sleutel voor de overheid.',
            'Zijn uitzendbureau zegt: "Geef ons je DigiD. Dan doen wij het."',
          ],
        },
        // ⚖️ check: Dat kan veilig met DigiD Machtigen ⚖️.
        {
          kind: 'rule',
          id: 'r.l.digitaal.1.ru1',
          emoji: '🔐',
          title: 'Je DigiD is alleen van jou. Geef hem aan niemand.',
          body: [
            'Je DigiD is je digitale sleutel voor de overheid.',
            'Je geeft hem nooit aan iemand anders. Ook niet aan je werkgever of uitzendbureau.',
            'Wil iemand je helpen? Dat kan veilig met DigiD Machtigen.',
          ],
          rule: 'geschreven',
          key: true,
        },
        // ⚖️ check: Dat kan veilig met DigiD Machtigen ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.digitaal.1.wd1',
          situation: 'Wat doet Piotr?',
          options: [
            { id: 'a', text: 'Hij geeft zijn DigiD. Het bureau bedoelt het goed.', best: false, feedback: 'Begrijpelijk. Maar dan kunnen zij alles met jouw gegevens.' },
            { id: 'b', text: 'Hij zegt nee, en hij vraagt hulp in de bibliotheek.', best: true, feedback: 'Goed. Daar helpen ze gratis, en veilig.' },
            { id: 'c', text: 'Hij geeft alleen zijn wachtwoord, niet zijn naam.', best: false, feedback: 'Met je wachtwoord kunnen ze ook alles.' },
          ],
          why: 'Je DigiD is alleen van jou. Je geeft hem nooit aan iemand anders. Ook niet aan je werkgever of uitzendbureau. Wil iemand je helpen? Dat kan veilig met DigiD Machtigen.',
        },
        // ⚖️ check: Je hebt een BSN nodig, en een adres in Nederland ⚖️.
        // ⚖️ check: Je krijgt een brief met een code ⚖️.
        // ⚖️ check: Doe dat snel: de code werkt maar kort ⚖️ (twijfel 16: hoe lang?).
        {
          kind: 'truefalse',
          id: 'r.l.digitaal.1.tf1',
          statement: 'Vraag je DigiD aan? Dan krijg je een code per post.',
          answer: true,
          why: 'Je vraagt DigiD aan op digid.nl. Je hebt een BSN nodig, en een adres in Nederland. Je krijgt een brief met een code. Daarmee zet je DigiD aan. Doe dat snel: de code werkt maar kort. Met de DigiD app log je daarna makkelijk in.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.digitaal.1.wd2',
          situation: 'Op het werk staat één computer voor iedereen. Sanne heeft haar uren ingevuld.',
          options: [
            { id: 'a', text: 'Ze laat het scherm aan. Haar collega begint zo.', best: false, feedback: 'Dan kan een ander in jouw account.' },
            { id: 'b', text: 'Ze zet de computer uit met de knop.', best: false, feedback: 'Dan ben je misschien niet goed uitgelogd.' },
            { id: 'c', text: 'Ze logt uit, en dan gaat ze weg.', best: true, feedback: 'Goed. Zo blijft jouw account van jou.' },
          ],
          why: 'Op een gedeelde computer log je altijd uit. Anders kan een ander in jouw account. Bijvoorbeeld in je rooster of je loonstrook. Zet ook je telefoon op slot.',
        },
        {
          kind: 'whoask',
          id: 'r.l.digitaal.1.wa1',
          question: 'Je wilt hulp bij je belastingaangifte. Je hebt geen computer. Waar ga je heen?',
          options: [
            { id: 'a', who: 'uitzendbureau', best: false, feedback: 'Je DigiD geef je niet aan je uitzendbureau.' },
            { id: 'b', who: 'bibliotheek', best: true, feedback: 'Goed. Daar helpen ze je gratis en veilig.' },
            { id: 'c', who: 'collega', best: false, feedback: 'Goed bedoeld. Maar je DigiD geef je aan niemand.' },
          ],
          why: 'In de bibliotheek is een Informatiepunt Digitale Overheid. Daar helpen ze je gratis. Ook de gemeente kan je helpen.',
        },
        { kind: 'model', id: 'r.l.digitaal.1.mo1', context: 'Iemand vraagt om je DigiD.', nl: 'Mijn DigiD geef ik niet. Kunt u mij op een andere manier helpen?' },
      ],
    },
    {
      // Les 15.2 · Veilig wachtwoord en phishing
      id: 'r.l.digitaal.2',
      title: 'Veilig wachtwoord en phishing',
      goal: 'Je maakt een sterk wachtwoord, je herkent een nepbericht, en je meldt het als je toch klikte.',
      remember: 'Haast en een knop? Niet klikken. Ga zelf naar de echte app.',
      // Wie kan je helpen: je leidinggevende of de ICT-afdeling · je bank · fraudehelpdesk.nl ·
      //   veiliginternetten.nl.
      help: ['leidinggevende', 'ict', 'bank'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.digitaal.2.sc1',
          picture: 'Esra kijkt geschrokken naar haar telefoon. Op het scherm een mail met een rode knop.',
          lines: [
            'Esra krijgt een mail.',
            'Die lijkt van haar werk te komen.',
            '"Je loonstrook staat klaar. Log binnen 1 uur in. Anders krijg je geen loon."',
            'Onder de mail staat een knop.',
          ],
        },
        {
          kind: 'rule',
          id: 'r.l.digitaal.2.ru1',
          emoji: '🎣',
          title: 'Haast en een knop? Niet klikken. Ga zelf naar de echte app.',
          body: [
            'Haast, dreigen en een knop: zo herken je phishing.',
            'Phishing is een nepbericht om je gegevens te stelen.',
            'Klik niet. Ga zelf naar de echte app of website.',
            'Klikte je toch? Verander je wachtwoord, en meld het meteen.',
          ],
          rule: 'ongeschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.digitaal.2.wd1',
          situation: 'Esra schrikt van de mail.',
          options: [
            { id: 'a', text: 'Ze klikt snel op de knop. Ze wil haar loon niet kwijt.', best: false, feedback: 'Begrijpelijk. Maar zo stelen oplichters je wachtwoord.' },
            { id: 'b', text: 'Ze stuurt de mail door naar haar collega\'s.', best: false, feedback: 'Dan klikken zij er misschien op.' },
            { id: 'c', text: 'Ze klikt niet. Ze opent zelf de app van haar werk.', best: true, feedback: 'Goed. Daar ziet ze of de loonstrook er echt is.' },
          ],
          why: 'Haast, dreigen en een knop: zo herken je phishing. Phishing is een nepbericht om je gegevens te stelen. Klik niet. Ga zelf naar de echte app of website. Meld de mail bij je werk.',
        },
        {
          kind: 'truefalse',
          id: 'r.l.digitaal.2.tf1',
          statement: 'Een kort wachtwoord met je naam en je geboortejaar is veilig genoeg.',
          answer: false,
          why: 'Je naam en geboortejaar zijn makkelijk te raden. Een lang wachtwoord is veel sterker. Bijvoorbeeld vier gewone woorden achter elkaar. Dat onthoud je ook makkelijk. Gebruik niet overal hetzelfde wachtwoord.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.digitaal.2.wd2',
          situation: 'Kevin heeft toch op een nep-link geklikt. Hij vulde zijn wachtwoord in.',
          options: [
            { id: 'a', text: 'Hij zegt niets. Misschien gebeurt er niets.', best: false, feedback: 'Begrijpelijk. Maar dan kan een oplichter verder.' },
            { id: 'b', text: 'Hij verandert meteen zijn wachtwoord, en meldt het op zijn werk.', best: true, feedback: 'Goed. Hoe sneller, hoe beter.' },
            { id: 'c', text: 'Hij gooit de mail weg. Dan is het probleem weg.', best: false, feedback: 'De mail is weg. Maar je wachtwoord is gestolen.' },
          ],
          why: 'Snel zijn helpt. Verander je wachtwoord meteen. Meld het bij je leidinggevende of de ICT-afdeling. Gaat het om je bank? Bel dan meteen je bank. Dit overkomt veel mensen. Schaam je niet.',
        },
        {
          kind: 'whoask',
          id: 'r.l.digitaal.2.wa1',
          question: 'Je klikte op je werk op een nep-link. Je account doet raar. Wie meld je het?',
          options: [
            { id: 'a', who: 'hr', best: false, feedback: 'HR gaat over je contract en loon. Je account is voor de ICT-afdeling.' },
            { id: 'b', who: 'collega', best: false, feedback: 'Een collega kan je account niet beveiligen.' },
            { id: 'c', who: 'ict', best: true, feedback: 'Goed. De ICT-afdeling kan je account snel beveiligen.' },
          ],
          why: 'Meld het meteen bij de ICT-afdeling of je leidinggevende. Gaat het om je bank? Bel dan meteen je bank.',
        },
        { kind: 'model', id: 'r.l.digitaal.2.mo1', context: 'Je hebt op een rare link geklikt.', nl: 'Ik heb op een rare link geklikt. Wat moet ik doen?' },
      ],
    },
  ],
};
