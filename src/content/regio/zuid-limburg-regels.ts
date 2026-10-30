import type { RuleUnit } from '../regels/types';

/**
 * Werkregels · "Leven in Zuid-Limburg" (docs/regio-zuid-limburg.md, section 3): the work-rules
 * unit of the region Zuid-Limburg, 5 lessons. Only for learners who chose Zuid-Limburg in
 * Settings; it comes into their path after unit 10 (src/content/regio/index.ts REGION_SLOT) and is
 * never on a certificate. Loaded with the region's own file (./zuid-limburg-pack.ts), only for a
 * learner of the region.
 *
 * Plain Dutch (1F), short sentences, the region's two rules for lessons: no address and no
 * regional phone number in a lesson (they are in the Sociale kaart), and the kind of place rather
 * than its name where names change. `// ⚖️ check:` marks a fact the expert must check (doc,
 * section 7). The marker is never shown or read aloud. `// Redactie:` notes are for the makers only.
 *
 * Right answers of "Wat doe je?" and "Waar ga je heen?" (the doc's tally): A 4, B 3, C 3.
 * "Waar of niet waar": 3 true, 2 false.
 */
export const zlRegelsUnit: RuleUnit = {
  id: 'rg.zl.r',
  title: 'Leven in Zuid-Limburg',
  emoji: '🏞️',
  color: '#b5651d',
  lessons: [
    {
      // Les ZL.1 · Je adres en de gemeente
      // Redactie: Maastricht calls its desk "GemeenteLoket" (Mosae Forum) ⚖️, Heerlen works from the
      //   Stadskantoor ⚖️, Sittard-Geleen from the Stadskantoor Sittard and the Stadswinkel Geleen ⚖️,
      //   Kerkrade from the Burgerplein ⚖️. Not in the lesson: they change more often than the rule.
      //   They are in the Sociale kaart. 16-10-2026 (docs/regio-controle.md): for Sittard-Geleen only the
      //   Stadswinkel Geleen was found as the desk (temporary building since 29-06-2026), not the Stadskantoor.
      id: 'rg.zl.r.l.1',
      title: 'Je adres en de gemeente',
      goal: 'Je geeft je adres op tijd door aan de gemeente. Je weet hoe je een afspraak maakt.',
      remember: 'Verhuisd? Geef je adres binnen 5 dagen door aan je nieuwe gemeente.',
      // Wie kan je helpen: je gemeente (de site, of 14 met het netnummer ⚖️) · rijksoverheid.nl ⚖️ ·
      //   in de app: de Sociale kaart, bij "Gemeente".
      help: ['gemeente'],
      steps: [
        {
          kind: 'scene',
          id: 'rg.zl.r.l.1.sc1',
          picture: 'Oksana (34) met een doos in haar handen voor een nieuw rijtjeshuis. Op de achtergrond een bus.',
          lines: [
            'Oksana woonde in Den Haag.',
            'Nu heeft ze werk in een ziekenhuis in Heerlen. Ze huurt een kamer in Heerlen.',
            'Haar post komt nog op haar oude adres.',
            'Haar collega Lotte zegt: "Heb je je al ingeschreven bij de gemeente?"',
          ],
        },
        // ⚖️ check: aan je nieuwe gemeente ⚖️; vanaf 4 weken vóór tot 5 dagen na de verhuizing ⚖️ (Wet BRP, doc 7.10).
        // ⚖️ check: binnen Nederland vaak online, met DigiD ⚖️; uit het buitenland zelf, op afspraak ⚖️.
        {
          kind: 'rule',
          id: 'rg.zl.r.l.1.ru1',
          emoji: '🏠',
          title: 'Verhuisd? Geef je adres binnen 5 dagen door aan je nieuwe gemeente.',
          body: [
            'Geef je nieuwe adres door aan de gemeente waar je nu woont.',
            'Dat kan vanaf 4 weken voor je verhuist, tot 5 dagen erna.',
            'Binnen Nederland kan dat vaak online, met DigiD.',
            'Kom je uit het buitenland? Dan ga je zelf naar de gemeente, met een afspraak.',
          ],
          rule: 'geschreven',
        },
        // ⚖️ check: je oude gemeente krijgt het dan vanzelf ⚖️.
        {
          kind: 'whatdo',
          id: 'rg.zl.r.l.1.wd1',
          situation: 'Oksana verhuist binnen Nederland. Hoe geeft ze haar nieuwe adres door?',
          options: [
            { id: 'a', text: 'Ze belt haar oude gemeente in Den Haag.', best: false, feedback: 'Dat hoeft niet. Je oude gemeente krijgt het vanzelf door.' },
            { id: 'b', text: 'Ze geeft het door aan haar nieuwe gemeente, Heerlen.', best: true, feedback: 'Goed. Je geeft je verhuizing door aan de gemeente waar je nu woont.' },
            { id: 'c', text: 'Ze wacht tot ze een brief van de gemeente krijgt.', best: false, feedback: 'Die brief komt niet vanzelf. Ze moet het zelf doorgeven.' },
          ],
          why: 'Je geeft je nieuwe adres door aan je nieuwe gemeente. Binnen Nederland kan dat vaak online, met DigiD. Je oude gemeente krijgt het dan vanzelf. Kom je uit het buitenland? Dan ga je zelf naar de gemeente, met een afspraak.',
        },
        // ⚖️ check: vanaf 4 weken vóór je verhuist, tot 5 dagen erna ⚖️.
        {
          kind: 'truefalse',
          id: 'rg.zl.r.l.1.tf1',
          statement: 'Je geeft een verhuizing door binnen 5 dagen nadat je verhuisd bent.',
          answer: true,
          why: 'Je geeft een verhuizing door vanaf 4 weken voor je verhuist, tot 5 dagen erna. Doe het op tijd. Je adres is belangrijk voor je post, je loon, je zorgverzekering en toeslagen.',
        },
        // ⚖️ check: bijna alles op afspraak ⚖️; online of via 14 + netnummer ⚖️; paspoort of id-kaart en
        //   huurcontract ⚖️; bij inwonen een brief van de hoofdbewoner ⚖️ (doc 7.9).
        // Redactie: an answer "Stadswinkel" would only be right for Geleen: no desk names here.
        {
          kind: 'whatdo',
          id: 'rg.zl.r.l.1.wd2',
          situation: 'Joep komt uit België en gaat in Maastricht wonen. Hij moet zich voor het eerst inschrijven. Wat doet hij?',
          options: [
            { id: 'a', text: 'Hij loopt op maandagochtend naar het gemeentehuis.', best: false, feedback: 'Dan moet hij misschien terugkomen. Bij de gemeente werk je vaak op afspraak.' },
            { id: 'b', text: 'Hij laat zijn werkgever het regelen.', best: false, feedback: 'Je werkgever mag helpen, maar jij moet zelf naar de gemeente.' },
            { id: 'c', text: 'Hij kijkt op de site van de gemeente en maakt een afspraak.', best: true, feedback: 'Goed. Op de site staat ook wat je mee moet nemen.' },
          ],
          why: 'De gemeenten in Zuid-Limburg werken voor bijna alles op afspraak. Je maakt een afspraak online of via het nummer 14 met het netnummer van je gemeente. Neem je paspoort of id-kaart mee, en je huurcontract. Woon je bij iemand in? Dan heb je een brief van de hoofdbewoner nodig.',
        },
        {
          kind: 'model',
          id: 'rg.zl.r.l.1.mo1',
          context: 'Je belt de gemeente. Je wilt je inschrijven.',
          nl: 'Goedemorgen. Ik wil me inschrijven op mijn nieuwe adres. Kan ik een afspraak maken?',
        },
      ],
    },
    {
      // Les ZL.2 · Wonen en reizen in de regio
      // Redactie: which corporations take part differs per source (14 or 17 ⚖️). No corporation by
      //   name in the lesson: Thuis in Limburg is always named, the list is on thuisinlimburg.nl.
      id: 'rg.zl.r.l.2',
      title: 'Wonen en reizen in de regio',
      goal: 'Je weet hoe je in Zuid-Limburg een sociale huurwoning zoekt. Je weet hoe je met bus en trein naar je werk reist.',
      remember: 'Huis zoeken? Schrijf je op tijd in. Betaal nooit voor een huis dat je niet zag.',
      // Wie kan je helpen: thuisinlimburg.nl ⚖️ · je woningcorporatie · arriva.nl, ns.nl of 9292.nl ⚖️ ·
      //   je werkgever of HR, voor reiskosten · in de app: de Sociale kaart, bij "Wonen".
      help: ['woningcorporatie', 'hr', 'leidinggevende'],
      steps: [
        {
          kind: 'scene',
          id: 'rg.zl.r.l.2.sc1',
          picture: 'Mehmet (27) en Nadia (25) aan een keukentafel. Op de telefoon een site met huizen. Een bus rijdt voorbij.',
          lines: [
            'Mehmet en Nadia wonen bij de ouders van Nadia in Sittard.',
            'Ze willen samen een huis huren. Een huis van een woningcorporatie is vaak goedkoper.',
            'Mehmet werkt vanaf maandag in Geleen, met vroege diensten.',
            'Hij heeft nog geen auto.',
          ],
        },
        // ⚖️ check: thuisinlimburg.nl ⚖️; gratis ⚖️; elk jaar verlengen ⚖️ (doc 7.11).
        {
          kind: 'rule',
          id: 'rg.zl.r.l.2.ru1',
          emoji: '🏘️',
          title: 'Huis zoeken? Schrijf je op tijd in. Betaal nooit voor een huis dat je niet zag.',
          body: [
            'De meeste woningcorporaties in Zuid-Limburg staan op thuisinlimburg.nl.',
            'Inschrijven is gratis. Verleng je inschrijving elk jaar.',
            'Wachten duurt vaak lang. Begin dus op tijd.',
            'Betaal nooit geld voor een huis dat je niet hebt gezien.',
          ],
          rule: 'ongeschreven',
        },
        // ⚖️ check: thuisinlimburg.nl ⚖️; gratis ⚖️; 18 jaar of ouder en in Nederland mogen wonen ⚖️; elk jaar verlengen ⚖️.
        {
          kind: 'whatdo',
          id: 'rg.zl.r.l.2.wd1',
          situation: 'Mehmet en Nadia willen een huurhuis van een woningcorporatie. Hoe beginnen ze?',
          options: [
            { id: 'a', text: 'Ze schrijven zich in op de site van Thuis in Limburg.', best: true, feedback: 'Goed. Daar staan de huizen van veel corporaties in Limburg.' },
            { id: 'b', text: 'Ze betalen iemand op Facebook die zegt dat hij een huis heeft.', best: false, feedback: 'Pas op. Betaal nooit geld voor een huis dat je niet hebt gezien.' },
            { id: 'c', text: 'Ze wachten tot de gemeente hun een huis geeft.', best: false, feedback: 'Dat gebeurt meestal niet. Ze moeten zich zelf inschrijven.' },
          ],
          why: 'De meeste woningcorporaties in Zuid-Limburg bieden hun huizen aan op thuisinlimburg.nl. Inschrijven is gratis. Je moet 18 jaar of ouder zijn en in Nederland mogen wonen. Verleng je inschrijving elk jaar. Wachten duurt vaak lang. Begin dus op tijd.',
        },
        // ⚖️ check: OVpay in bus en trein van Arriva Limburg ⚖️; dezelfde pas ⚖️; OV-chipkaart kan ook ⚖️;
        //   over de grens eerst kijken welk kaartje ⚖️ (doc 7.12).
        {
          kind: 'truefalse',
          id: 'rg.zl.r.l.2.tf1',
          statement: 'In de bus en de trein van Arriva in Limburg kun je inchecken met je bankpas.',
          answer: true,
          why: 'Je kunt in- en uitchecken met je bankpas, je creditcard of je telefoon. Dat heet OVpay. Check in en uit met dezelfde pas of telefoon. Een OV-chipkaart kan ook. Reis je in Duitsland of België verder? Kijk dan eerst welk kaartje je nodig hebt.',
        },
        // ⚖️ check: 9292.nl ⚖️.
        {
          kind: 'whatdo',
          id: 'rg.zl.r.l.2.wd2',
          situation: 'Mehmet begint om 6 uur in Geleen. Zo vroeg rijdt er bijna geen bus. Wat doet hij?',
          options: [
            { id: 'a', text: 'Hij komt elke dag een uur te laat. De bus is niet zijn schuld.', best: false, feedback: 'Begrijpelijk, maar dat geeft snel problemen. Op tijd komen is belangrijk.' },
            { id: 'b', text: 'Hij zegt de baan af. Zonder auto lukt het niet.', best: false, feedback: 'Jammer. Vaak is er een andere oplossing.' },
            { id: 'c', text: 'Hij vraagt op zijn werk of hij met iemand kan meerijden, of hij gaat fietsen.', best: true, feedback: 'Goed. Bij grote bedrijven rijden collega’s vaak samen.' },
          ],
          why: 'In Zuid-Limburg wonen en werken veel mensen in verschillende plaatsen. Bij vroege of late diensten rijdt de bus soms niet. Vraag op je werk naar samen rijden of een busje van de baas. Vraag ook of je reiskosten terugkrijgt. Dat staat in je contract of cao. Kijk op 9292.nl hoe je reist. Let op: in Zuid-Limburg zijn veel heuvels. Een elektrische fiets helpt.',
        },
        {
          kind: 'model',
          id: 'rg.zl.r.l.2.mo1',
          context: 'Je praat met je leidinggevende over je vroege diensten.',
          nl: 'Ik begin om 6 uur, maar dan rijdt er nog geen bus. Kan ik met iemand meerijden?',
        },
      ],
    },
    {
      // Les ZL.3 · Werken over de grens
      // Redactie: no number of days of working from home (they change, and differ for Belgium and
      //   Germany ⚖️). The rule for social security comes from EU regulation 883/2004 ⚖️.
      id: 'rg.zl.r.l.3',
      title: 'Werken over de grens',
      goal: 'Je weet dat werken in België of Duitsland andere regels kan geven. Je vraagt gratis advies vóór je tekent.',
      remember: 'Werk over de grens? Vraag eerst gratis advies. Dan pas tekenen.',
      // Wie kan je helpen: het GrensInfoPunt Maastricht ⚖️ · het GrenzInfoPunkt Aachen-Eurode ⚖️ ·
      //   Grensarbeid ⚖️ · UWV · in de app: de Sociale kaart, bij "Grens".
      help: ['grensinfopunt', 'uwv'],
      steps: [
        {
          kind: 'scene',
          id: 'rg.zl.r.l.3.sc1',
          picture: 'Bogdan (41) bij een bushalte in Kerkrade. Aan de overkant een straatnaambord in het Duits. De grens is een gewone straat.',
          lines: [
            'Bogdan woont in Kerkrade.',
            'Een bedrijf in Duitsland biedt hem werk aan, 15 minuten van zijn huis. Het loon is goed.',
            'Zijn buurman zegt: "Pas op met belasting en je zorgverzekering."',
            'Bogdan weet niet wat hij moet doen.',
          ],
        },
        // ⚖️ check: andere regels voor belasting, uitkering, pensioen en zorgverzekering ⚖️; gratis advies,
        //   per telefoon, online of op afspraak ⚖️ (doc 7.13, 7.24).
        {
          kind: 'rule',
          id: 'rg.zl.r.l.3.ru1',
          emoji: '🌍',
          title: 'Werk over de grens? Vraag eerst gratis advies. Dan pas tekenen.',
          body: [
            'Woon je in het ene land en werk je in het andere? Dan ben je grensarbeider.',
            'Dan gelden er andere regels voor belasting, uitkering, pensioen en zorgverzekering.',
            'Het GrensInfoPunt geeft gratis advies, per telefoon, online of op afspraak.',
          ],
          rule: 'geschreven',
        },
        // ⚖️ check: een GrensInfoPunt in Maastricht ⚖️, en een in Aken en Herzogenrath ⚖️.
        {
          kind: 'whatdo',
          id: 'rg.zl.r.l.3.wd1',
          situation: 'Bogdan wil het werk wel. Wat doet hij eerst?',
          options: [
            { id: 'a', text: 'Hij tekent snel. Hij regelt de rest later wel.', best: false, feedback: 'Begrijpelijk. Maar dan krijgt hij later misschien problemen.' },
            { id: 'b', text: 'Hij vraagt eerst gratis advies bij het GrensInfoPunt.', best: true, feedback: 'Goed. Die kennen de regels van alle drie de landen.' },
            { id: 'c', text: 'Hij vraagt het aan zijn buurman. Die werkte vroeger ook in Duitsland.', best: false, feedback: 'Zijn buurman bedoelt het goed. Maar elke situatie is anders.' },
          ],
          why: 'Werk je in het ene land en woon je in het andere? Dan heet je grensarbeider. Er gelden dan andere regels voor belasting, je uitkering, je pensioen en je zorgverzekering. Het GrensInfoPunt geeft gratis advies. Dat kan per telefoon, online of op afspraak. Er is een GrensInfoPunt in Maastricht, en een in Aken en Herzogenrath, vlak bij Kerkrade.',
        },
        // ⚖️ check: afspraken tussen de landen ⚖️; vaak in het werkland ⚖️; uitzonderingen bij thuiswerken ⚖️;
        //   zorgverzekering en uitkering meestal in het werkland ⚖️; werken in twee landen ⚖️ (doc 7.24).
        {
          kind: 'truefalse',
          id: 'rg.zl.r.l.3.tf1',
          statement: 'Woon je in Nederland en werk je in Duitsland? Dan betaal je altijd belasting in Nederland.',
          answer: false,
          why: 'Waar je belasting betaalt, staat in afspraken tussen de landen. Vaak betaal je belasting in het land waar je werkt. Maar er zijn uitzonderingen, bijvoorbeeld als je ook thuiswerkt. Voor je zorgverzekering en je uitkering kijk je meestal ook naar het land waar je werkt. Werk je in twee landen? Dan kan het anders zijn. Vraag het dus altijd na.',
        },
        // ⚖️ check: Grensarbeid ⚖️; samen met het GrensInfoPunt, UWV en de gemeenten ⚖️; spreekuren in
        //   Maastricht en Heerlen, op afspraak ⚖️.
        // Redactie: Yonas instead of the doc's Nadia, who lives in Sittard in les ZL.2.
        {
          kind: 'whoask',
          id: 'rg.zl.r.l.3.wa1',
          question: 'Yonas woont in Maastricht. Hij wil werk zoeken in België. Hij wil ook weten hoe hij een cv voor België schrijft. Waar gaat hij heen?',
          options: [
            { id: 'a', who: 'grensinfopunt', best: true, feedback: 'Goed. Zij helpen met werk zoeken over de grens, en met je cv.' },
            { id: 'b', who: 'huisarts', best: false, feedback: 'De huisarts helpt met je gezondheid, niet met werk zoeken.' },
            { id: 'c', who: 'woningcorporatie', best: false, feedback: 'Die helpt met een huis, niet met werk.' },
          ],
          why: 'Grensarbeid helpt mensen die werk zoeken in België, Duitsland of Nederland. Het werkt samen met het GrensInfoPunt, UWV en de gemeenten. Er zijn ook spreekuren in Maastricht en Heerlen, met een afspraak. Kijk in de Sociale kaart bij "Grens".',
        },
        {
          kind: 'model',
          id: 'rg.zl.r.l.3.mo1',
          context: 'Je belt het GrensInfoPunt.',
          nl: 'Ik woon in Nederland en ik krijg werk in Duitsland. Wat moet ik regelen?',
        },
      ],
    },
    {
      // Les ZL.4 · Carnaval, dialect en collega's
      // Redactie: no date in the lesson. Carnival Sunday is the seventh Sunday before Easter ⚖️.
      id: 'rg.zl.r.l.4',
      title: 'Carnaval, dialect en collega’s',
      goal: 'Je vraagt op tijd vrij voor carnaval. Je durft collega’s te vragen om Nederlands te praten.',
      remember: 'Carnaval? Vraag vroeg vrij. Dialect? Vraag vriendelijk om Nederlands.',
      // Wie kan je helpen: je leidinggevende of HR (vrij vragen) · je cao (vakantiedagen) · een collega die je vertrouwt.
      help: ['leidinggevende', 'hr', 'collega'],
      steps: [
        {
          kind: 'scene',
          id: 'rg.zl.r.l.4.sc1',
          picture: 'Dewi (30) in een magazijn bij Sittard. Aan de muur een poster met kleurige mutsen en de tekst "Vastelaovend".',
          lines: [
            'Dewi werkt sinds januari in een magazijn.',
            'Haar collega’s praten veel over carnaval. In Limburg heet dat ook vastelaovend.',
            'Iedereen wil die week vrij.',
            'Haar collega Joep praat Limburgs. Dewi verstaat hem bijna niet.',
          ],
        },
        // ⚖️ check: geen officiële feestdag ⚖️; geen recht op vrij ⚖️ (doc 7.25, BW 7:638).
        {
          kind: 'rule',
          id: 'rg.zl.r.l.4.ru1',
          emoji: '🎭',
          title: 'Carnaval? Vraag vroeg vrij. Dialect? Vraag vriendelijk om Nederlands.',
          body: [
            'Carnaval is geen officiële feestdag. Je hebt niet vanzelf recht op vrij.',
            'Vraag je vrije dagen dus vroeg aan je leidinggevende.',
            'Versta je een collega niet? Vraag vriendelijk om Nederlands.',
          ],
          rule: 'geschreven',
        },
        // ⚖️ check: februari of maart ⚖️; zondag tot en met dinsdag, in Limburg vaak al vanaf zaterdag ⚖️;
        //   sommige bedrijven gaan dicht ⚖️.
        {
          kind: 'whatdo',
          id: 'rg.zl.r.l.4.wd1',
          situation: 'Dewi wil met carnaval graag vrij. Wat doet ze?',
          options: [
            { id: 'a', text: 'Ze meldt zich die maandag ziek. Dat doen anderen ook.', best: false, feedback: 'Niet doen. Meldt ze zich ziek terwijl ze niet ziek is? Dan kan ze haar baan kwijtraken.' },
            { id: 'b', text: 'Ze vraagt het een week van tevoren. Dan is het nog vroeg genoeg.', best: false, feedback: 'Dat is vaak te laat. Dan zijn de vrije dagen al weg.' },
            { id: 'c', text: 'Ze vraagt het nu al aan haar leidinggevende, en ze krijgt het antwoord op papier.', best: true, feedback: 'Goed. Vroeg vragen is slim met carnaval.' },
          ],
          why: 'Carnaval valt elk jaar op een andere datum, in februari of maart. Het is van zondag tot en met dinsdag. In Limburg begint het vaak al op zaterdag. Sommige bedrijven gaan dicht. Andere zijn juist heel druk: horeca, winkels, vervoer en zorg. Veel collega’s willen dan vrij. Vraag het daarom vroeg. Kijk op de kalender wanneer het is.',
        },
        // ⚖️ check: geen officiële feestdag ⚖️; vakantiedagen bij een collectieve sluiting, als het klopt met
        //   contract of cao ⚖️ (doc 7.25).
        {
          kind: 'truefalse',
          id: 'rg.zl.r.l.4.tf1',
          statement: 'Met carnaval heb je altijd recht op vrije dagen.',
          answer: false,
          why: 'Carnaval is geen officiële feestdag. Je hebt dus niet vanzelf recht op vrij. Je neemt vakantiedagen op, of je bedrijf is dicht. Gaat je bedrijf dicht? Dan kan je werkgever vragen dat je daar vakantiedagen voor gebruikt. Dat moet wel kloppen met je contract of cao. Vier je geen carnaval? Dan hoef je niet mee te doen. Je kunt ook gewoon werken.',
        },
        {
          kind: 'whatdo',
          id: 'rg.zl.r.l.4.wd2',
          situation: 'Joep legt iets uit in het Limburgs. Dewi verstaat het niet. Wat doet ze?',
          options: [
            { id: 'a', text: 'Ze vraagt vriendelijk: "Wil je het in het Nederlands zeggen?"', best: true, feedback: 'Goed. De meeste collega’s doen dat graag.' },
            { id: 'b', text: 'Ze knikt, en doet maar wat.', best: false, feedback: 'Begrijpelijk, maar dan kan ze fouten maken.' },
            { id: 'c', text: 'Ze zegt boos dat dialect onbeleefd is.', best: false, feedback: 'Dat kan pijn doen. Voor veel mensen is dialect hun eigen taal.' },
          ],
          why: 'In Zuid-Limburg praten veel mensen dialect, ook op het werk. Het is normaal dat je het niet verstaat, ook als je goed Nederlands spreekt. Vraag het vriendelijk. Dialect is voor veel collega’s hun moedertaal. Het is niet onbeleefd. Bij de grens werken ook veel mensen uit Duitsland en België. Soms praten collega’s Duits of Frans. Ook dan mag je vragen om Nederlands. En bij veiligheid moet je de uitleg altijd goed begrijpen.',
        },
        // The word card "Dit kun je horen": only to recognise, never to say. No sound (the phone's
        // voice reads dialect badly), and each word is marked as Limburgish (lang "li"), so a screen
        // reader does not read it as Dutch (`dialect`, src/components/RuleSteps.tsx).
        // Owner's decision (15-10-2026): only the words that are fairly sure, all to be checked in the
        // dictionary of Mestreechter Taol (mestreechtertaol.nl); "Hoe geit 't?", "Doeg", "Alaaf" and
        // "Enne? / Auch enne?" stay off until confirmed there.
        // ⚖️ check: Goojemorge, Goojendaag, "Wie is 't mèt diech?" and Bedaank (Veldeke Mestreech, Mestreechter Taol) ⚖️;
        //   Vastelaovend ⚖️; the spelling differs per source ⚖️. Let Veldeke (Maastricht) and someone
        //   from Heerlen or Kerkrade look at the card.
        {
          kind: 'rule',
          id: 'rg.zl.r.l.4.ru2',
          emoji: '👂',
          title: 'Dit kun je horen',
          body: [
            'Je hoeft het niet te zeggen. Het is alleen om te herkennen.',
            'Goojemorge = goedemorgen (Maastricht)',
            'Goojendaag = goedendag (Maastricht)',
            'Wie is ’t mèt diech? = Hoe gaat het met jou? (Maastricht)',
            'Bedaank = bedankt (Maastricht)',
            'Vastelaovend = carnaval (heel Limburg)',
            'Elke stad heeft een eigen dialect. In Heerlen en Kerkrade klinkt het weer anders.',
          ],
          rule: 'ongeschreven',
          dialect: true,
        },
        {
          kind: 'model',
          id: 'rg.zl.r.l.4.mo1',
          context: 'Een collega praat dialect. Je verstaat het niet.',
          nl: 'Sorry, ik versta geen dialect. Wil je het in het Nederlands zeggen?',
        },
      ],
    },
    {
      // Les ZL.5 · Hulp in de buurt: zorg, taal, geld
      // Redactie: no SEH (spoedeisende hulp) in the lesson: since October 2024 only in Heerlen ⚖️, and
      //   around 2030 it moves to Sittard-Geleen ⚖️. That is also why the lesson says "bel eerst".
      id: 'rg.zl.r.l.5',
      title: 'Hulp in de buurt: zorg, taal, geld',
      goal: 'Je weet waar je heen gaat als je huisarts dicht is. Je weet ook waar je Nederlands oefent en hulp krijgt bij geldzorgen.',
      remember: 'Huisarts dicht? Bel de huisartsenpost. Geldzorgen? Vraag vroeg hulp bij de gemeente.',
      // Wie kan je helpen: je huisarts of de huisartsenpost ⚖️ · 112 bij levensgevaar · de gemeente en de
      //   Kredietbank Limburg ⚖️ · Geldfit: 0800-8115 ⚖️ · de bibliotheek of het Taalhuis ⚖️ · het buurtteam
      //   of sociaal wijkteam ⚖️ · in de app: de Sociale kaart.
      help: ['huisarts', 'gemeente', 'bibliotheek'],
      steps: [
        {
          kind: 'scene',
          id: 'rg.zl.r.l.5.sc1',
          picture: 'Hatice (38) op zaterdagavond op de bank in Heerlen. Haar zoontje heeft hoge koorts. Op tafel ligt een stapel brieven.',
          lines: [
            'Het is zaterdagavond.',
            'De zoon van Hatice heeft al de hele dag hoge koorts.',
            'Zijn huisarts is dicht tot maandag. Hatice maakt zich zorgen.',
            'Op tafel liggen ook drie rekeningen die ze nog niet heeft betaald.',
          ],
        },
        // ⚖️ check: huisartsenpost ⚖️; eerst bellen ⚖️; de gemeente moet helpen bij schulden, gratis ⚖️
        //   (Wet gemeentelijke schuldhulpverlening; doc 7.26: "gratis" maybe not always); Taalhuis ⚖️.
        {
          kind: 'rule',
          id: 'rg.zl.r.l.5.ru1',
          emoji: '🏥',
          title: 'Huisarts dicht? Bel de huisartsenpost. Geldzorgen? Vraag vroeg hulp bij de gemeente.',
          body: [
            'Is je huisarts dicht en kan het niet wachten? Bel dan de huisartsenpost.',
            'Bel eerst, ga er niet zomaar heen. Bij levensgevaar bel je 112.',
            'Kun je je rekeningen niet betalen? De gemeente moet je helpen. Dat is gratis.',
            'In de bibliotheek krijg je vaak gratis hulp bij Nederlands.',
          ],
          rule: 'geschreven',
        },
        // ⚖️ check: three posts, at the MUMC+ in Maastricht and at Zuyderland in Heerlen and Geleen ⚖️
        //   (is Geleen still open? doc 7.3); you call the post of your own area ⚖️. 16-10-2026: zuyderland.nl/spoedzorg
        //   (search result) names two Zuyderland posts (Heerlen; Westelijke Mijnstreek in Sittard-Geleen) and
        //   hapmaastricht.nl the third: Geleen is still open (docs/regio-controle.md).
        {
          kind: 'whatdo',
          id: 'rg.zl.r.l.5.wd1',
          situation: 'De huisarts is dicht. Wat doet Hatice?',
          options: [
            { id: 'a', text: 'Ze rijdt meteen naar de spoedeisende hulp van het ziekenhuis.', best: false, feedback: 'Daar heeft ze meestal eerst een verwijzing nodig. Ze kan beter eerst bellen.' },
            { id: 'b', text: 'Ze belt de huisartsenpost.', best: true, feedback: 'Goed. Die helpt ’s avonds, ’s nachts en in het weekend.' },
            { id: 'c', text: 'Ze wacht tot maandag en kijkt op internet.', best: false, feedback: 'Bij hoge koorts bij een kind kan ze beter nu bellen.' },
          ],
          why: 'Is je huisarts dicht en kan het niet wachten? Bel dan de huisartsenpost. Bel eerst, ga er niet zomaar heen. In Zuid-Limburg zijn er drie posten. Ze zitten bij het MUMC+ in Maastricht, en bij Zuyderland in Heerlen en Geleen. Je belt de post van je eigen streek. Het nummer staat op de site van je huisarts. Bij levensgevaar bel je 112.',
        },
        // ⚖️ check: elke gemeente moet helpen ⚖️; gratis ⚖️; de Kredietbank Limburg voor veel gemeenten ⚖️;
        //   vrijwilligers voor post en geld ⚖️ (doc 7.19, 7.26).
        {
          kind: 'whoask',
          id: 'rg.zl.r.l.5.wa1',
          question: 'Hatice kan haar rekeningen niet meer betalen. Waar gaat ze heen?',
          options: [
            { id: 'a', who: 'gemeente', best: true, feedback: 'Goed. Die hulp is gratis.' },
            { id: 'b', who: 'bank', best: false, feedback: 'Pas op met een nieuwe lening. Dan krijgt ze vaak nog meer schulden.' },
            { id: 'c', who: 'politie', best: false, feedback: 'De politie helpt niet bij schulden. Daarvoor ga je naar de gemeente.' },
          ],
          why: 'Elke gemeente moet je helpen bij schulden. Dat is gratis. In veel gemeenten in Zuid-Limburg doet de Kredietbank Limburg dat voor de gemeente. Er zijn ook vrijwilligers die helpen met je post en je geld. Vraag vroeg hulp. Hoe eerder, hoe makkelijker. Kijk in de Sociale kaart bij "Schulden".',
        },
        // ⚖️ check: Taalhuis ⚖️; vrijwilligers ⚖️; taalcafé ⚖️; Centre Céramique ⚖️, SCHUNCK ⚖️, De Domijnen ⚖️ (doc 7.20).
        {
          kind: 'truefalse',
          id: 'rg.zl.r.l.5.tf1',
          statement: 'In de bibliotheek kun je vaak gratis hulp krijgen bij Nederlands, lezen en de computer.',
          answer: true,
          why: 'Veel bibliotheken hebben een Taalhuis. Daar helpen vrijwilligers je met Nederlands, lezen, schrijven en de computer. Vaak is er een taalcafé om te praten. In Maastricht is de grote bibliotheek in Centre Céramique. In Heerlen is dat SCHUNCK, in Sittard en Geleen De Domijnen.',
        },
        {
          kind: 'model',
          id: 'rg.zl.r.l.5.mo1',
          context: 'Je bent bij de gemeente. Je vraagt hulp bij schulden.',
          nl: 'Ik heb rekeningen die ik niet kan betalen. Kunt u mij helpen?',
        },
      ],
    },
  ],
};
