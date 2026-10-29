import type { RuleUnit } from '../types';

/**
 * Unit 15 · Digitaal op je werk (les 15.1–15.3).
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
      goal: 'Je weet wat DigiD is, en je houdt het voor jezelf. Je logt uit op een gedeelde computer.',
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
            { id: 'a', text: 'Hij geeft zijn DigiD. Het bureau bedoelt het goed.', best: false, feedback: 'Begrijpelijk. Maar dan kunnen zij alles met zijn gegevens.' },
            { id: 'b', text: 'Hij zegt nee, en hij vraagt hulp in de bibliotheek.', best: true, feedback: 'Goed. Daar helpen ze gratis, en veilig.' },
            { id: 'c', text: 'Hij geeft alleen zijn wachtwoord, niet zijn naam.', best: false, feedback: 'Met zijn wachtwoord kunnen ze ook alles.' },
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
          situation: 'Op het werk staat één computer voor iedereen. Sanne heeft haar uren ingevuld. Wat kan Sanne het beste doen?',
          options: [
            { id: 'a', text: 'Ze laat het scherm aan. Haar collega begint zo.', best: false, feedback: 'Dan kan een ander in haar account.' },
            { id: 'b', text: 'Ze zet de computer uit met de knop.', best: false, feedback: 'Dan is ze misschien niet goed uitgelogd.' },
            { id: 'c', text: 'Ze logt uit, en dan gaat ze weg.', best: true, feedback: 'Goed. Zo blijft haar account van haar.' },
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
      goal: 'Je maakt een sterk wachtwoord en je herkent een nepbericht. Klikte je toch? Dan meld je het.',
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
          situation: 'Esra schrikt van de mail. Wat kan Esra het beste doen?',
          options: [
            { id: 'a', text: 'Ze klikt snel op de knop. Ze wil haar loon niet kwijt.', best: false, feedback: 'Begrijpelijk. Maar zo stelen oplichters haar wachtwoord.' },
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
          situation: 'Kevin heeft toch op een nep-link geklikt. Hij vulde zijn wachtwoord in. Wat kan Kevin het beste doen?',
          options: [
            { id: 'a', text: 'Hij zegt niets. Misschien gebeurt er niets.', best: false, feedback: 'Begrijpelijk. Maar dan kan een oplichter verder.' },
            { id: 'b', text: 'Hij verandert meteen zijn wachtwoord, en meldt het op zijn werk.', best: true, feedback: 'Goed. Hoe sneller, hoe beter.' },
            { id: 'c', text: 'Hij gooit de mail weg. Dan is het probleem weg.', best: false, feedback: 'De mail is weg. Maar oplichters hebben zijn wachtwoord nu.' },
          ],
          why: 'Snel zijn helpt. Verander je wachtwoord meteen. Meld het bij je leidinggevende of de ICT-afdeling. Gaat het om je bank? Bel dan meteen je bank. Dit gebeurt bij veel mensen. Schaam je niet.',
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
    {
      // Les 15.3 · AI op je werk
      id: 'r.l.digitaal.3',
      title: 'AI op je werk',
      goal: 'Je gebruikt AI slim en veilig. Belangrijke dingen check je bij een mens.',
      remember: 'AI helpt, maar maakt fouten. Check belangrijke dingen bij een mens.',
      // Wie kan je helpen: je leidinggevende (de regels voor AI op je werk) · de ICT-afdeling ·
      //   de ondernemingsraad of de vakbond · het Juridisch Loket.
      help: ['leidinggevende', 'ict', 'juridischloket'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.digitaal.3.sc1',
          picture: 'Malik kijkt naar zijn telefoon. Op het scherm een chatbot met een lang antwoord.',
          lines: [
            'Malik krijgt een brief van zijn werk.',
            'Hij begrijpt de brief niet goed.',
            'Hij vraagt het aan een chatbot. Dat is een app met AI.',
            'De chatbot zegt: "Je krijgt dit jaar geen vakantiegeld."',
          ],
        },
        {
          kind: 'rule',
          id: 'r.l.digitaal.3.ru1',
          emoji: '🤖',
          title: 'AI helpt, maar maakt fouten. Check belangrijke dingen bij een mens.',
          body: [
            'AI kan vertalen, een brief uitleggen of een bericht schrijven.',
            'Maar AI maakt fouten. En het klinkt toch heel zeker.',
            'Gaat het om je contract, loon, veiligheid of medicijnen? Vraag het een mens.',
            'Zet geen BSN, wachtwoord of namen van klanten in een chatbot.',
          ],
          rule: 'ongeschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.digitaal.3.wd1',
          situation: 'Wat doet Malik?',
          options: [
            { id: 'a', text: 'Hij gaat met de brief naar HR, en vraagt hoe het zit.', best: true, feedback: 'Goed. Een mens van zijn werk weet hoe het echt zit.' },
            { id: 'b', text: 'Hij gelooft de chatbot. Die weet het vast.', best: false, feedback: 'Begrijpelijk. Maar AI kan het mis hebben, ook als het zeker klinkt.' },
            { id: 'c', text: 'Hij belt boos naar zijn werk. Hij wil zijn geld.', best: false, feedback: 'Eerst checken. Het antwoord van de chatbot kan fout zijn.' },
          ],
          why: 'AI kan een brief goed uitleggen. Maar AI maakt ook fouten, en klinkt toch zeker. Gaat het om je contract of je loon? Check het bij een mens. Bijvoorbeeld bij HR of je leidinggevende.',
        },
        {
          kind: 'truefalse',
          id: 'r.l.digitaal.3.tf1',
          statement: 'Je mag namen en adressen van klanten in een chatbot zetten. Dan werk je sneller.',
          answer: false,
          why: 'Het bedrijf achter de chatbot kan bewaren wat je erin zet. Zet er dus geen persoonsgegevens in. Geen BSN, wachtwoord of bankgegevens. En geen namen of foto\'s van klanten, patiënten of collega\'s. Ook geen papieren van je werk. Vraag eerst naar de regels voor AI op je werk.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.digitaal.3.wd2',
          situation: 'Ewa krijgt een spraakbericht van een nieuw nummer. Het klinkt als haar leidinggevende.',
          quote: 'Ik heb snel je inlogcode nodig. Stuur hem nu, het is dringend.',
          options: [
            { id: 'a', text: 'Ze stuurt de code. Het is haar baas.', best: false, feedback: 'Begrijpelijk. Maar met AI kan iemand een stem nadoen.' },
            { id: 'b', text: 'Ze stuurt niets. Ze belt haar leidinggevende zelf, op het nummer dat ze kent.', best: true, feedback: 'Goed. Zo weet ze zeker wie het is.' },
            { id: 'c', text: 'Ze vraagt in een bericht: "Ben jij het echt?"', best: false, feedback: 'Een oplichter zegt gewoon ja.' },
          ],
          why: 'Met AI kunnen oplichters een stem of een filmpje nadoen. Haast, geld of een code, en een nieuw nummer? Dat is een alarm. Stuur niets. Bel zelf terug op het nummer dat je kent.',
        },
        // ⚖️ check: AVG art. 22 (geen besluit alleen door een computer; een mens laten kijken,
        //   je mening geven, bezwaar maken) en art. 13–15 (uitleg over de logica van het besluit).
        {
          kind: 'truefalse',
          id: 'r.l.digitaal.3.tf2',
          statement: 'Een computer beslist dat je minder uren krijgt. Je mag vragen dat een mens ernaar kijkt.',
          answer: true,
          why: 'Beslist een computer alleen over iets belangrijks voor jou? Bijvoorbeeld minder uren of ontslag? Dan mag je om uitleg vragen. En je mag vragen dat een mens ernaar kijkt. Dat staat in de privacywet (AVG).',
        },
        // ⚖️ check: AI-verordening (EU) 2024/1689, art. 5 lid 1 sub f (emotieherkenning op het werk
        //   verboden, behalve om medische redenen of voor de veiligheid), geldt sinds 2 februari 2025
        //   (art. 113). WOR art. 27 lid 1 sub l (instemming OR bij systemen die personeel volgen).
        {
          kind: 'whatdo',
          id: 'r.l.digitaal.3.wd3',
          situation: 'Op je werk komt een nieuwe camera met AI. Die "leest" aan je gezicht of je moe of boos bent.',
          options: [
            { id: 'a', text: 'Prima. Dan weet de baas hoe ik me voel.', best: false, feedback: 'Dit mag juist niet op het werk.' },
            { id: 'b', text: 'Ik kijk de hele dag vrolijk. Dan is er niets aan de hand.', best: false, feedback: 'Het probleem blijft. En dat is vermoeiend.' },
            { id: 'c', text: 'Ik vraag het de ondernemingsraad of de vakbond. Dit mag niet zomaar.', best: true, feedback: 'Goed. Zij kunnen er iets aan doen.' },
          ],
          why: 'Een computer mag op het werk niet je gevoelens lezen. Dat staat in de Europese AI-wet. Alleen voor je gezondheid of je veiligheid mag het wel. Heeft je bedrijf een ondernemingsraad? Dan moet die instemmen met systemen die personeel volgen.',
        },
        {
          kind: 'whoask',
          id: 'r.l.digitaal.3.wa1',
          question: 'Je wilt AI gebruiken voor je werk. Je weet niet of het mag. Wie vraag je het?',
          options: [
            { id: 'a', who: 'collega', best: false, feedback: 'Een collega kent de regels misschien ook niet.' },
            { id: 'b', who: 'leidinggevende', best: true, feedback: 'Goed. Die weet wat de regels op jouw werk zijn.' },
            { id: 'c', who: 'bank', best: false, feedback: 'Je bank gaat over je geld, niet over je werk.' },
          ],
          why: 'Veel bedrijven hebben regels voor AI. Vraag je leidinggevende wat mag. Soms weet de ICT-afdeling het ook.',
        },
        { kind: 'model', id: 'r.l.digitaal.3.mo1', context: 'Je wilt weten of je AI mag gebruiken.', nl: 'Mag ik hier AI voor gebruiken?' },
      ],
    },
  ],
};
