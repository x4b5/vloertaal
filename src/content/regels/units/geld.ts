import type { RuleUnit } from '../types';

/**
 * Unit 10 · Uitkering, werk en geld (les 10.1–10.4).
 * Converted from docs/werkregels-curriculum.md; edit the curriculum first, then this file.
 * `// ⚖️ check:` marks a fact the expert must check (docs/werkregels-bronnen.md). The marker is
 * never shown or read aloud. `// Redactie:` notes are for the makers only.
 */
export const geldUnit: RuleUnit = {
  id: 'r.geld',
  title: 'Uitkering, werk en geld',
  emoji: '🏦',
  color: '#4a6fa5',
  lessons: [
    {
      // Les 10.1 · Werk kwijt: WW
      // Redactie: de kabinetsplannen om de WW korter te maken gaan volgens berichten pas in 2029 in
      //   ⚖️. Daarom noemt deze les geen duur.
      id: 'r.l.geld.1',
      title: 'Werk kwijt: WW',
      goal: 'Je vraagt op tijd WW aan. Je weet wanneer je er recht op hebt.',
      // ⚖️ check: Vraag binnen 1 week ⚖️ WW aan.
      remember: 'Werk kwijt? Vraag binnen 1 week WW aan.',
      // Wie kan je helpen: UWV (uwv.nl en werk.nl) · een vakbond · het Juridisch Loket.
      help: ['uwv', 'vakbond', 'juridischloket'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.geld.1.sc1',
          picture: 'Kevin loopt met een doos spullen naar de uitgang van een fabriek.',
          lines: [
            'Kevin werkte 1 jaar bij een fabriek.',
            'Zijn tijdelijke contract stopt.',
            'Hij krijgt geen nieuw contract.',
            'Hij weet niet wat hij nu moet doen.',
            'WW is een uitkering van UWV als je je werk kwijtraakt.',
          ],
        },
        // ⚖️ check: Vraag binnen 1 week ⚖️ WW aan.
        // ⚖️ check: Uiterlijk 1 week ⚖️ na je eerste dag zonder werk.
        {
          kind: 'rule',
          id: 'r.l.geld.1.ru1',
          emoji: '📋',
          title: 'Werk kwijt? Vraag binnen 1 week WW aan.',
          body: [
            'Vraag WW aan zo snel als je kunt.',
            'Uiterlijk 1 week na je eerste dag zonder werk.',
            'Je doet het via Mijn UWV, met je DigiD.',
            'Werk je naast je WW? Geef het altijd door.',
          ],
          rule: 'geschreven',
        },
        // ⚖️ check: Uiterlijk 1 week ⚖️ na je eerste dag zonder werk.
        {
          kind: 'whatdo',
          id: 'r.l.geld.1.wd1',
          situation: 'Kevins laatste werkdag is vrijdag. Wat kan Kevin het beste doen?',
          options: [
            { id: 'a', text: 'Hij vraagt meteen WW aan bij UWV.', best: true, feedback: 'Goed. Dan krijgt hij op tijd geld.' },
            { id: 'b', text: 'Hij wacht een maand. Misschien vindt hij snel werk.', best: false, feedback: 'Dan is hij te laat, en krijgt hij misschien minder.' },
            { id: 'c', text: 'Hij gaat eerst naar de gemeente voor bijstand.', best: false, feedback: 'Bij werk kwijt is UWV meestal de eerste stap.' },
          ],
          why: 'Vraag WW aan zo snel als je kunt. Uiterlijk 1 week na je eerste dag zonder werk. Ben je later? Dan krijg je misschien minder, of niets. Je doet het via Mijn UWV, met je DigiD.',
        },
        // ⚖️ check: Je moet meestal minstens 26 van de laatste 36 weken ⚖️ gewerkt hebben.
        {
          kind: 'truefalse',
          id: 'r.l.geld.1.tf1',
          statement: 'Je krijgt altijd WW als je werk stopt.',
          answer: false,
          why: 'Je moet meestal minstens 26 van de laatste 36 weken gewerkt hebben. Neem je zelf ontslag? Dan krijg je meestal geen WW. Vraag eerst advies voordat je zelf stopt.',
        },
        // ⚖️ check: UWV haalt dan een deel van je loon van je WW af ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.geld.1.wd2',
          situation: 'Kevin krijgt WW. Dan vindt hij een baantje van 10 uur per week. Wat kan Kevin het beste doen?',
          options: [
            { id: 'a', text: 'Hij zegt niets. Het is maar een klein baantje.', best: false, feedback: 'Niet doen. Dan moet hij later veel terugbetalen.' },
            { id: 'b', text: 'Hij stopt zelf meteen met zijn hele WW.', best: false, feedback: 'Dat hoeft niet. Hij kan vaak een deel houden.' },
            { id: 'c', text: 'Hij geeft zijn uren en zijn loon door aan UWV.', best: true, feedback: 'Goed. Dan klopt zijn WW, en is hij veilig.' },
          ],
          why: 'Werk je naast je WW? Geef het altijd door aan UWV. UWV haalt dan een deel van je loon van je WW af. Niet doorgeven is fraude. Dan moet je terugbetalen, vaak met een boete.',
        },
        {
          kind: 'whoask',
          id: 'r.l.geld.1.wa1',
          question: 'Je werk stopt vrijdag. Waar vraag je WW aan?',
          options: [
            { id: 'a', who: 'uwv', best: true, feedback: 'Goed. WW vraag je aan bij UWV, via Mijn UWV.' },
            { id: 'b', who: 'gemeente', best: false, feedback: 'De gemeente gaat over bijstand. WW komt van UWV.' },
            { id: 'c', who: 'uitzendbureau', best: false, feedback: 'Een bureau helpt je aan werk. WW vraag je zelf aan.' },
          ],
          why: 'WW vraag je aan bij UWV, online met je DigiD.',
        },
        { kind: 'model', id: 'r.l.geld.1.mo1', context: 'Je contract stopt, en je wilt WW.', nl: 'Mijn contract stopt op 31 maart. Hoe vraag ik WW aan?' },
      ],
    },
    {
      // Les 10.2 · Van uitkering naar werk
      // Redactie: de regels voor bijverdienen in de bijstand veranderen naar verwachting per 1
      //   januari 2027 (Participatiewet in balans) ⚖️. Daarom noemt de les geen percentage.
      id: 'r.l.geld.2',
      title: 'Van uitkering naar werk',
      goal: 'Je geeft nieuw werk meteen door. Je laat uitrekenen wat het betekent voor je geld.',
      remember: 'Nieuw werk? Geef het meteen door: aan de gemeente of UWV, en bij toeslagen.',
      // Wie kan je helpen: de gemeente (sociale dienst of Werkplein) · UWV · Dienst Toeslagen
      //   (Belastingdienst) · Geldfit: 0800-8115 ⚖️ · het Juridisch Loket.
      // ⚖️ check: Geldfit: 0800-8115 ⚖️
      help: ['gemeente', 'uwv', 'juridischloket'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.geld.2.sc1',
          picture: 'Fatima aan tafel. Voor haar een brief van de gemeente en een nieuw contract.',
          lines: [
            'Fatima heeft een bijstandsuitkering.',
            'Bijstand is geld van de gemeente als je te weinig inkomen hebt.',
            'Ze krijgt een baan van 20 uur per week.',
            'Ze is blij.',
            'Maar ze is ook bang: "Houd ik wel genoeg over?"',
          ],
        },
        {
          kind: 'rule',
          id: 'r.l.geld.2.ru1',
          emoji: '🔁',
          title: 'Nieuw werk? Geef het meteen door: aan de gemeente of UWV, en bij toeslagen.',
          body: [
            'Geef werk en loon altijd meteen door aan de gemeente of UWV.',
            'Verdien je meer? Geef het door via Mijn toeslagen.',
            'Anders moet je later terugbetalen.',
            'Laat samen uitrekenen wat je overhoudt.',
          ],
          rule: 'geschreven',
        },
        // ⚖️ check: Soms mag je een deel van je loon houden ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.geld.2.wd1',
          situation: 'Fatima begint over 2 weken. Wat kan Fatima het beste doen?',
          options: [
            { id: 'a', text: 'Ze vertelt het pas als ze een maand gewerkt heeft.', best: false, feedback: 'Te laat. Dan krijgt ze te veel, en moet ze terugbetalen.' },
            { id: 'b', text: 'Ze zegt de baan af. Ze is bang om geld te verliezen.', best: false, feedback: 'Begrijpelijk. Maar laat het eerst uitrekenen.' },
            { id: 'c', text: 'Ze geeft de nieuwe baan meteen door aan de gemeente.', best: true, feedback: 'Goed. Dan klopt haar uitkering meteen.' },
          ],
          why: 'Geef werk en loon altijd meteen door aan de gemeente. Dat moet. De gemeente rekent uit hoeveel bijstand je nog krijgt. Soms mag je een deel van je loon houden. Niet doorgeven geeft later schulden.',
        },
        {
          kind: 'truefalse',
          id: 'r.l.geld.2.tf1',
          statement: 'Ga je werken? Dan veranderen je toeslagen misschien ook.',
          answer: true,
          why: 'Toeslagen zijn geld van de overheid. Bijvoorbeeld voor je zorgverzekering, je huur of de kinderopvang. Hoeveel je krijgt, hangt af van je inkomen. Verdien je meer? Geef het door via Mijn toeslagen. Anders moet je later terugbetalen.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.geld.2.wd2',
          situation: 'Fatima wil weten wat ze straks overhoudt. Wat kan Fatima het beste doen?',
          options: [
            { id: 'a', text: 'Ze vraagt de gemeente om het samen uit te rekenen.', best: true, feedback: 'Goed. Dan weet ze hoeveel geld ze overhoudt.' },
            { id: 'b', text: 'Ze vraagt het aan een buurman die ook werkt.', best: false, feedback: 'Aardig. Maar zijn situatie is anders dan die van haar.' },
            { id: 'c', text: 'Ze rekent het zelf uit met haar oude bijstand.', best: false, feedback: 'Dan mist ze misschien toeslagen of kosten.' },
          ],
          why: 'Laat de gemeente of een geldcoach het samen met je uitrekenen. Denk ook aan reiskosten en kinderopvang. Dan kies je met de juiste cijfers.',
        },
        {
          kind: 'whoask',
          id: 'r.l.geld.2.wa1',
          question: 'Fatima heeft bijstand. Ze vindt werk. Aan wie geeft ze dat door?',
          options: [
            { id: 'a', who: 'uwv', best: false, feedback: 'UWV gaat over WW. Bijstand komt van de gemeente.' },
            { id: 'b', who: 'collega', best: false, feedback: 'Een collega hoeft dit niet te weten.' },
            { id: 'c', who: 'gemeente', best: true, feedback: 'Goed. De bijstand komt van de gemeente.' },
          ],
          why: 'Bijstand? Geef werk door aan de gemeente. WW? Geef het door aan UWV.',
        },
        { kind: 'model', id: 'r.l.geld.2.mo1', context: 'Je hebt werk gevonden, en je hebt een uitkering.', nl: 'Ik heb werk gevonden. Wat betekent dat voor mijn uitkering?' },
      ],
    },
    {
      // Les 10.3 · Belasting terug en je post
      id: 'r.l.geld.3',
      title: 'Belasting terug en je post',
      goal: 'Je opent brieven van de overheid. Je weet dat je vaak belasting terug kunt vragen.',
      remember: 'Een brief van de Belastingdienst, UWV of de gemeente: altijd openmaken.',
      // Wie kan je helpen: de BelastingTelefoon · het Informatiepunt Digitale Overheid in de
      //   bibliotheek · de sociaal raadslieden of de formulierenhulp van je gemeente.
      help: ['gemeente'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.geld.3.sc1',
          picture: 'Jayden met een blauwe envelop in zijn hand. Een la staat open.',
          lines: [
            'Jayden werkte vorig jaar 4 maanden in de zomer.',
            'Daarna ging hij weer naar school.',
            'In maart krijgt hij een blauwe brief van de Belastingdienst.',
            'Hij maakt hem niet open, en legt hem in een la.',
          ],
        },
        {
          kind: 'rule',
          id: 'r.l.geld.3.ru1',
          emoji: '✉️',
          title: 'Een brief van de Belastingdienst, UWV of de gemeente: altijd openmaken.',
          body: [
            'Een brief van de overheid laat je niet liggen.',
            'Vaak staat er een datum in.',
            'Werk je niet het hele jaar? Dan krijg je vaak belasting terug.',
            'Vraag hulp bij het lezen. De bibliotheek helpt gratis.',
          ],
          rule: 'geschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.geld.3.wd1',
          situation: 'Wat doet Jayden met de brief?',
          options: [
            { id: 'a', text: "Hij laat hem liggen. Zo'n brief is meestal niks.", best: false, feedback: 'Soms wel. Er kan een datum in staan.' },
            { id: 'b', text: "Hij vraagt zijn vrienden of zij ook zo'n brief hebben.", best: false, feedback: 'Kan. Maar de brief gaat over zijn eigen geld.' },
            { id: 'c', text: 'Hij opent de brief, en hij vraagt hulp bij het lezen.', best: true, feedback: 'Goed. Misschien krijgt hij geld terug.' },
          ],
          why: 'Een brief van de Belastingdienst, UWV of de gemeente laat je niet liggen. Vaak staat er een datum in. Vraag iemand die je vertrouwt om te helpen. Ook de bibliotheek helpt gratis.',
        },
        // ⚖️ check: Dat kun je terugvragen met je aangifte. Dat kan tot 5 jaar ⚖️ terug.
        {
          kind: 'truefalse',
          id: 'r.l.geld.3.tf1',
          statement: 'Werk je maar een paar maanden? Dan krijg je vaak belasting terug.',
          answer: true,
          why: 'Werk je niet het hele jaar? Dan betaal je vaak te veel belasting. Dat kun je terugvragen met je aangifte. Dat kan tot 5 jaar terug.',
        },
        // ⚖️ check: Doe het dan vóór 1 mei ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.geld.3.tf2',
          statement: 'De aangifte over vorig jaar doe je meestal vóór 1 mei.',
          answer: true,
          why: 'Een aangifte is een formulier over je inkomen van vorig jaar. Krijg je een brief dat je aangifte moet doen? Doe het dan vóór 1 mei. Lukt dat niet? Vraag dan op tijd om uitstel. Dan krijg je meer tijd. Je doet aangifte online, met je DigiD.',
        },
        { kind: 'model', id: 'r.l.geld.3.mo1', context: 'Je vraagt hulp bij een brief.', nl: 'Ik heb een brief van de Belastingdienst. Wil je mij helpen met lezen?' },
      ],
    },
    {
      // Les 10.4 · Schulden: vroeg hulp vragen
      id: 'r.l.geld.4',
      title: 'Schulden: vroeg hulp vragen',
      goal: 'Je vraagt vroeg hulp bij schulden. Je weet dat er gratis hulp is.',
      remember: 'Geldzorgen? Vraag op tijd hulp. Hulp van de gemeente is gratis.',
      // Wie kan je helpen: de gemeente (schuldhulp) · Geldfit: 0800-8115 ⚖️ (gratis en anoniem) ·
      //   SchuldHulpMaatje · het Juridisch Loket.
      // ⚖️ check: Geldfit: 0800-8115 ⚖️ (gratis en anoniem)
      help: ['gemeente', 'juridischloket'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.geld.4.sc1',
          picture: 'Esra aan tafel met een stapel ongeopende enveloppen. Op één staat in rood: "Aanmaning".',
          lines: [
            'Esra heeft een schuld bij haar telefoonbedrijf.',
            'Daarna komt er nog een rekening bij.',
            'En nog een.',
            'Ze opent de brieven niet meer.',
            'Ze schaamt zich.',
          ],
        },
        // ⚖️ check: Bij beslag blijft een deel van je loon altijd voor jou ⚖️.
        {
          kind: 'rule',
          id: 'r.l.geld.4.ru1',
          emoji: '🆘',
          title: 'Geldzorgen? Vraag op tijd hulp. Hulp van de gemeente is gratis.',
          body: [
            'Hoe eerder je hulp vraagt, hoe kleiner het probleem.',
            'Hulp van de gemeente bij schulden is gratis.',
            'Betaal eerst je huur, energie en zorgverzekering.',
            'Bij beslag blijft een deel van je loon altijd voor jou.',
          ],
          rule: 'geschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.geld.4.wd1',
          situation: 'Esra weet niet meer hoe ze moet betalen. Wat kan Esra het beste doen?',
          options: [
            { id: 'a', text: 'Ze wacht tot ze meer verdient. Dan betaalt ze alles.', best: false, feedback: 'Begrijpelijk. Maar schulden worden snel groter door extra kosten.' },
            { id: 'b', text: 'Ze vraagt nu hulp, bij de gemeente of bij Geldfit.', best: true, feedback: 'Goed. Hoe eerder, hoe makkelijker.' },
            { id: 'c', text: 'Ze sluit snel een lening af om alles te betalen.', best: false, feedback: 'Dan heeft ze één schuld meer, vaak met hoge rente.' },
          ],
          why: 'Hoe eerder je hulp vraagt, hoe kleiner het probleem. Veel mensen hebben geldzorgen. Je bent niet de enige. Hulp van de gemeente bij schulden is gratis.',
        },
        // ⚖️ check: Maar een deel blijft altijd voor jou. Dat heet de beslagvrije voet ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.geld.4.tf1',
          statement: 'Bij beslag op je loon houd je helemaal niets over.',
          answer: false,
          why: 'Bij beslag gaat een deel van je loon naar de schuld. Maar een deel blijft altijd voor jou. Dat heet de beslagvrije voet. Check of dat bedrag klopt.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.geld.4.wd2',
          situation: 'Esra heeft nieuw werk. Ze wil haar schulden aanpakken. Wat kan Esra het beste doen?',
          options: [
            { id: 'a', text: 'Ze maakt een lijst: wat moet ze aan wie betalen?', best: true, feedback: 'Goed. Met een overzicht kan iemand haar helpen.' },
            { id: 'b', text: 'Ze betaalt eerst wie het vaakst belt of mailt.', best: false, feedback: 'Begrijpelijk. Maar dat is niet altijd de belangrijkste.' },
            { id: 'c', text: 'Ze betaalt elke schuld een klein beetje tegelijk.', best: false, feedback: 'Goed bedoeld. Maar sommige rekeningen gaan voor.' },
          ],
          why: 'Begin met een overzicht: wat moet je aan wie? Betaal eerst je huur, energie en zorgverzekering. Een nieuwe lening maakt het vaak erger.',
        },
        {
          kind: 'whoask',
          id: 'r.l.geld.4.wa1',
          question: 'Je hebt schulden. Waar krijg je gratis schuldhulp?',
          options: [
            { id: 'a', who: 'hr', best: false, feedback: 'HR gaat over je werk. Schuldhulp krijg je ergens anders.' },
            { id: 'b', who: 'gemeente', best: true, feedback: 'Goed. Schuldhulp van de gemeente is gratis.' },
            { id: 'c', who: 'uwv', best: false, feedback: 'UWV gaat over uitkeringen, niet over schulden.' },
          ],
          why: 'De gemeente helpt gratis bij schulden. Geldfit helpt ook, gratis en anoniem.',
        },
        { kind: 'model', id: 'r.l.geld.4.mo1', context: 'Je vraagt hulp bij schulden.', nl: 'Ik heb schulden. Ik wil graag hulp.' },
      ],
    },
  ],
};
