import type { RuleUnit } from '../types';

/**
 * Unit 3 · Contract en soorten werk (les 3.1–3.4).
 * Converted from docs/werkregels-curriculum.md; edit the curriculum first, then this file.
 * `// ⚖️ check:` marks a fact the expert must check (docs/werkregels-bronnen.md). The marker is
 * never shown or read aloud. `// Redactie:` notes are for the makers only.
 */
export const contractUnit: RuleUnit = {
  id: 'r.contract',
  title: 'Contract en soorten werk',
  emoji: '📄',
  color: '#7e5428',
  lessons: [
    {
      // Les 3.1 · Je contract: wat staat erin?
      id: 'r.l.contract.1',
      title: 'Je contract: wat staat erin?',
      goal: 'Je weet welke afspraken op papier horen. Je weet wat een cao is. En je weet dat papier telt.',
      remember: 'Wat op papier staat, telt. Bewaar je contract goed.',
      // Wie kan je helpen: het Juridisch Loket · een vakbond (FNV, CNV) · de cao van je sector.
      help: ['juridischloket', 'vakbond'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.contract.1.sc1',
          picture: 'Sanne aan tafel met een contract en een markeerstift. Drie woorden zijn geel.',
          lines: [
            'Sanne krijgt haar eerste contract bij een supermarkt.',
            'Het zijn 4 bladzijden.',
            'Er staan moeilijke woorden in.',
            'Ze ziet "proeftijd", "cao" en "12 uur per week".',
          ],
        },
        // ⚖️ check: Je werkgever laat weten wat je verdient en hoeveel uur je werkt. Dat moet
        //   binnen 1 week na je eerste werkdag ⚖️, op papier of digitaal (art. 7:655 BW).
        {
          kind: 'rule',
          id: 'r.l.contract.1.ru1',
          emoji: '📄',
          title: 'Wat op papier staat, telt. Bewaar je contract goed.',
          body: [
            'Je werkgever laat weten wat je verdient en hoeveel uur je werkt.',
            'Dat moet binnen 1 week na je eerste werkdag, op papier of digitaal.',
            'Bij ziekte, WW of ontslag kijken ze naar je contract.',
            'Een cao is een afspraak over loon en regels voor jouw soort werk.',
          ],
          rule: 'geschreven',
          key: true,
        },
        // ⚖️ check: En hoeveel uur je werkt. Dat moet binnen 1 week na je eerste werkdag ⚖️, op
        //   papier of digitaal.
        // ⚖️ check: Andere afspraken volgen binnen 1 maand ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.contract.1.tf1',
          statement: 'Je werkgever moet de belangrijkste afspraken op papier of per mail geven.',
          answer: true,
          why: 'Je werkgever moet laten weten wat je verdient. En hoeveel uur je werkt. Dat moet binnen 1 week na je eerste werkdag, op papier of digitaal. Andere afspraken volgen binnen 1 maand. Bijvoorbeeld over vakantie en opzeggen.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.contract.1.wd1',
          situation: 'Sanne snapt het woord "cao" niet. Wat kan Sanne het beste doen?',
          options: [
            { id: 'a', text: 'Ze slaat het woord over. Het is vast een detail.', best: false, feedback: 'Jammer. In de cao staan juist veel van haar rechten.' },
            { id: 'b', text: 'Ze tekent eerst, en ze zoekt het later op.', best: false, feedback: 'Beter andersom: eerst snappen, dan tekenen.' },
            { id: 'c', text: 'Ze vraagt wat het is, en welke cao het is.', best: true, feedback: 'Goed. Dan kan ze de cao zelf opzoeken.' },
          ],
          why: 'Een cao is een afspraak over loon en regels voor jouw soort werk. Je cao staat vaak online. Zoek op "cao" en de naam van je sector.',
        },
        // ⚖️ check: Werk je lange tijd meer uren? Dan kun je vragen om die uren in je contract ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.contract.1.wd2',
          situation: 'In het contract staat 12 uur. De baas zegt: "Je werkt echt 30 uur."',
          options: [
            { id: 'a', text: 'Je vindt het goed. 30 uur is toch meer geld.', best: false, feedback: 'Nu wel. Maar bij ziekte of ontslag telt het contract.' },
            { id: 'b', text: 'Je zegt niets. Je wilt geen gedoe op je eerste dag.', best: false, feedback: 'Begrijpelijk. Maar later is het lastiger.' },
            { id: 'c', text: 'Je vraagt of hij 30 uur in het contract zet.', best: true, feedback: 'Goed. Wat op papier staat, telt.' },
          ],
          why: 'Bij ziekte, WW of ontslag kijken ze naar je contract. Werk je lange tijd meer uren? Dan kun je vragen om die uren in je contract.',
        },
        // Mag ik hier werken? (rapport hiaten, hoofdstuk 3). Bewust geen regels per groep (EU,
        //   asiel, Oekraïne, statushouder): alleen "vraag het na vóór je begint".
        // ⚖️ check: Mag je in Nederland werken? Dat hangt af van je papieren ⚖️ (Wet arbeid
        //   vreemdelingen).
        // ⚖️ check: Je werkgever moet je ID zien en een kopie bewaren ⚖️ (art. 15 Wav, art. 28 Wet
        //   op de loonbelasting).
        {
          kind: 'whatdo',
          id: 'r.l.contract.1.wd3',
          situation: 'Esra woont net in Nederland. Ze krijgt een baan aangeboden. Ze weet niet of ze hier al mag werken. Wat kan Esra het beste doen?',
          options: [
            { id: 'a', text: 'Ze begint gewoon. De baas regelt het vast wel.', best: false, feedback: 'Riskant. Zonder de goede papieren kan ze problemen krijgen.' },
            { id: 'b', text: 'Ze vraagt het na vóór ze begint, bijvoorbeeld bij UWV.', best: true, feedback: 'Goed. Dan weet ze het zeker.' },
            { id: 'c', text: 'Ze vraagt het aan een vriendin die hier ook werkt.', best: false, feedback: 'Aardig. Maar het hangt af van haar eigen papieren.' },
          ],
          why: 'Mag je in Nederland werken? Dat hangt af van je papieren. Weet je het niet zeker? Vraag het na vóór je begint. Dat kan bij UWV, de IND of VluchtelingenWerk. Je werkgever moet je ID zien en een kopie bewaren.',
        },
        {
          kind: 'whoask',
          id: 'r.l.contract.1.wa1',
          question: 'Je snapt een paar woorden in je contract niet. Wie legt het gratis uit?',
          options: [
            { id: 'a', who: 'collega', best: false, feedback: 'Een collega bedoelt het goed. Maar die weet het vaak niet zeker.' },
            { id: 'b', who: 'juridischloket', best: true, feedback: 'Goed. Het Juridisch Loket geeft gratis advies.' },
            { id: 'c', who: 'uwv', best: false, feedback: 'UWV gaat over uitkeringen, niet over je contract.' },
          ],
          why: 'Het Juridisch Loket en een vakbond kunnen je contract uitleggen.',
        },
        { kind: 'model', id: 'r.l.contract.1.mo1', context: 'Je wilt je echte uren op papier.', nl: 'Kunt u de afspraak over mijn uren in het contract zetten?' },
      ],
    },
    {
      // Les 3.2 · Proeftijd, tijdelijk en vast
      id: 'r.l.contract.2',
      title: 'Proeftijd, tijdelijk en vast',
      goal: 'Je weet wat een proeftijd is. Je weet wat er gebeurt aan het eind van een tijdelijk contract.',
      remember: 'Tijdelijk contract? Vraag op tijd of je mag blijven.',
      // Wie kan je helpen: het Juridisch Loket · een vakbond · UWV (als je werk stopt, zie les
      //   10.1).
      help: ['juridischloket', 'vakbond', 'uwv'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.contract.2.sc1',
          picture: 'Mohammed bij een kalender. Er staat een rood rondje om een datum.',
          lines: [
            'Mohammed heeft een contract voor 1 jaar.',
            'Er staat 1 maand proeftijd in.',
            'Een proeftijd is een periode om te kijken of het werk past.',
            'Na 3 weken zegt zijn baas: "Het past niet. Je kunt morgen stoppen."',
          ],
        },
        // ⚖️ check: Je werkgever moet minstens 1 maand ⚖️ voor het einde laten weten of je contract
        //   doorgaat (aanzegplicht, art. 7:668 BW; alleen bij een contract van 6 maanden of langer).
        // ⚖️ check: Dat geldt bij een contract van 6 maanden of langer ⚖️.
        // ⚖️ check: Doet hij dat niet, of te laat? Dan krijg je extra geld, tot 1 maandloon ⚖️
        //   (aanzegvergoeding, art. 7:668 lid 3 en 4 BW).
        {
          kind: 'rule',
          id: 'r.l.contract.2.ru1',
          emoji: '📅',
          title: 'Tijdelijk contract? Vraag op tijd of je mag blijven.',
          body: [
            'Een tijdelijk contract stopt vanzelf op de einddatum.',
            'Duurt je contract 6 maanden of langer? Dan moet je werkgever 1 maand voor het einde laten weten of het doorgaat.',
            'Dat geldt bij een contract van 6 maanden of langer.',
            'Doet hij dat niet, of te laat? Dan krijg je extra geld, tot 1 maandloon.',
            'In de proeftijd mogen jij en de baas meteen stoppen.',
          ],
          rule: 'geschreven',
        },
        // ⚖️ check: Je mag vragen waarom. Dan moet de baas de reden op papier geven ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.contract.2.tf1',
          statement: 'In de proeftijd mag de baas je meteen laten stoppen.',
          answer: true,
          why: 'In de proeftijd mogen jij en de baas meteen stoppen. Je mag vragen waarom. Dan moet de baas de reden op papier geven. De reden mag geen discriminatie zijn.',
        },
        // ⚖️ check: In een contract van 6 maanden of korter mag geen proeftijd ⚖️.
        // ⚖️ check: Contract langer dan 6 maanden, maar korter dan 2 jaar? Dan hooguit 1 maand ⚖️.
        // ⚖️ check: Contract van 2 jaar of langer, of vast? Dan hooguit 2 maanden ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.contract.2.tf2',
          statement: 'In een contract van 6 maanden mag een proeftijd staan.',
          answer: false,
          why: 'In een contract van 6 maanden of korter mag geen proeftijd. Contract langer dan 6 maanden, maar korter dan 2 jaar? Dan hooguit 1 maand. Contract van 2 jaar of langer, of vast? Dan hooguit 2 maanden.',
        },
        // Redactie: de ketenregeling verandert waarschijnlijk per 1 januari 2028 (Wet meer
        //   zekerheid flexwerkers). Tot die tijd geldt de regel hierboven. ⚖️
        // ⚖️ check: Je werkgever moet minstens 1 maand ⚖️ voor het einde laten weten of je contract
        //   doorgaat (art. 7:668 BW).
        // ⚖️ check: Krijg je een 4e tijdelijk contract, of werk je er langer dan 3 jaar? Dan is je
        //   contract meestal vanzelf vast. Na het 3e contract mag je baas ook stoppen ⚖️ (ketenregeling,
        //   art. 7:668a BW; was eerder fout: "na 3 contracten vast", critic 16 okt 2026).
        // ⚖️ check: Zit er meer dan 6 maanden ⚖️ tussen twee contracten? Dan begint de telling
        //   opnieuw (art. 7:668a lid 1 BW; een cao kan dat soms korter maken).
        // ⚖️ check: Werk je via een uitzendbureau? Dan gelden vaak andere regels ⚖️ (art. 7:691 BW,
        //   de uitzend-cao).
        {
          kind: 'whatdo',
          id: 'r.l.contract.2.wd1',
          situation: 'Fatima heeft een tijdelijk contract tot 1 juni. Het is half mei. Ze hoort niets. Wat kan Fatima het beste doen?',
          options: [
            { id: 'a', text: 'Ze wacht af. Geen bericht betekent: ze mag blijven.', best: false, feedback: 'Dat klopt niet. Een tijdelijk contract stopt vanzelf.' },
            { id: 'b', text: 'Ze vraagt haar baas of ze na 1 juni mag blijven.', best: true, feedback: 'Goed. Dan weet ze op tijd of ze mag blijven.' },
            { id: 'c', text: 'Ze zoekt alvast ander werk en zegt niets.', best: false, feedback: 'Slim om te zoeken. Maar vragen kan ook.' },
          ],
          why: 'Een tijdelijk contract stopt vanzelf op de einddatum. Duurt je contract 6 maanden of langer? Dan moet je werkgever 1 maand voor het einde laten weten of het doorgaat. Krijg je een 4e tijdelijk contract, of werk je er langer dan 3 jaar? Dan is je contract meestal vanzelf vast. Maar na het 3e contract mag je baas ook stoppen. Zit er meer dan 6 maanden tussen twee contracten? Dan begint de telling opnieuw. Werk je via een uitzendbureau? Dan gelden vaak andere regels. Kijk in de uitzend-cao.',
        },
        {
          kind: 'whoask',
          id: 'r.l.contract.2.wa1',
          question: 'Je tijdelijke contract stopt. Je hebt nog geen nieuw werk. Waar vraag je een uitkering aan?',
          options: [
            { id: 'a', who: 'juridischloket', best: false, feedback: 'Het Juridisch Loket geeft advies, maar geen uitkering.' },
            { id: 'b', who: 'gemeente', best: false, feedback: 'Bij werk kwijt is UWV meestal de eerste stap.' },
            { id: 'c', who: 'uwv', best: true, feedback: 'Goed. Bij UWV vraag je WW aan.' },
          ],
          why: 'Stopt je werk? Dan vraag je WW aan bij UWV. Zie de les "Werk kwijt: WW".',
        },
        { kind: 'model', id: 'r.l.contract.2.mo1', context: 'Je baas stopt je contract in de proeftijd.', nl: 'Wilt u mij de reden op papier geven?' },
      ],
    },
    {
      // Les 3.3 · Oproepwerk en uitzendwerk
      id: 'r.l.contract.3',
      title: 'Oproepwerk en uitzendwerk',
      goal: 'Je kent de basisregels voor oproepwerk. Je weet wat een uitzendbureau wel en niet mag.',
      // ⚖️ check: Minder dan 4 dagen ⚖️ van tevoren opgeroepen?
      remember: 'Minder dan 4 dagen van tevoren opgeroepen? Je mag nee zeggen.',
      // Wie kan je helpen: een vakbond · het Juridisch Loket · bij uitzendwerk: de SNCU (zij
      //   controleren de uitzend-cao) · bij te weinig loon: de Nederlandse Arbeidsinspectie, ook
      //   zonder je naam.
      help: ['vakbond', 'juridischloket', 'arbeidsinspectie'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.contract.3.sc1',
          picture: 'Esra in een hotelgang met een schoonmaakkar. Haar telefoon gaat.',
          lines: [
            'Esra werkt als oproepkracht bij een hotel.',
            'Ze heeft een nulurencontract.',
            'Dat betekent: geen vaste uren.',
            'Het hotel belt als er werk is.',
            'Vrijdag belt het hotel: "Kun je zaterdag komen?"',
          ],
        },
        // ⚖️ check: Minder dan 4 dagen ⚖️ van tevoren opgeroepen?
        // ⚖️ check: Je werkgever moet je meestal minstens 4 dagen ⚖️ van tevoren oproepen.
        // ⚖️ check: Een cao kan die 4 dagen korter maken, maar niet korter dan 1 dag ⚖️.
        // ⚖️ check: Bij een oproep krijg je meestal minstens 3 uur ⚖️ loon.
        // ⚖️ check: Zegt je werkgever een oproep minder dan 4 dagen ⚖️ van tevoren af? Dan krijg je
        //   toch loon (art. 7:628a BW).
        // ⚖️ check: Werk je 12 maanden ⚖️ als oproepkracht? Dan moet je werkgever je vaste uren
        //   aanbieden (art. 7:628a BW).
        {
          kind: 'rule',
          id: 'r.l.contract.3.ru1',
          emoji: '📲',
          title: 'Minder dan 4 dagen van tevoren opgeroepen? Je mag nee zeggen.',
          body: [
            'Je werkgever moet je meestal minstens 4 dagen van tevoren oproepen. Is het later? Dan mag je nee zeggen.',
            'Een cao kan die 4 dagen korter maken, maar niet korter dan 1 dag.',
            'Zegt je werkgever een oproep minder dan 4 dagen van tevoren af? Dan krijg je toch loon.',
            'Bij een oproep krijg je meestal minstens 3 uur loon.',
            'Werk je 12 maanden als oproepkracht? Dan moet je werkgever je vaste uren aanbieden.',
          ],
          rule: 'geschreven',
        },
        // ⚖️ check: Je werkgever moet je meestal minstens 4 dagen ⚖️ van tevoren oproepen.
        // ⚖️ check: Een cao kan die 4 dagen korter maken. Maar niet korter dan 1 dag ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.contract.3.tf1',
          statement: 'Esra moet zaterdag komen, want het hotel belt haar.',
          answer: false,
          why: 'Je werkgever moet je meestal minstens 4 dagen van tevoren oproepen. Is het later? Dan mag je nee zeggen. Een cao kan die 4 dagen korter maken. Maar niet korter dan 1 dag.',
        },
        // ⚖️ check: Bij oproepwerk krijg je meestal minstens 3 uur ⚖️ loon per oproep.
        // ⚖️ check: Ook als je korter werkt. Dat geldt bij een klein contract zonder vaste
        //   werktijden ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.contract.3.wd1',
          situation: 'Esra werkt maar 1 uur. Dan stuurt de baas haar naar huis.',
          options: [
            { id: 'a', text: 'Ze krijgt loon voor 1 uur. Zo werkt oproepwerk.', best: false, feedback: 'Vaak niet. Er is een regel voor korte oproepen.' },
            { id: 'b', text: 'Ze checkt of ze loon krijgt voor 3 uur.', best: true, feedback: 'Goed. Daar heeft ze meestal recht op.' },
            { id: 'c', text: 'Ze krijgt niets, want ze was er maar kort.', best: false, feedback: 'Nee. De baas betaalt gewerkte tijd altijd.' },
          ],
          why: 'Bij oproepwerk krijg je meestal minstens 3 uur loon per oproep. Ook als je korter werkt. Dat geldt bij een klein contract zonder vaste werktijden.',
        },
        // Redactie: vanaf 1 januari 2028 verdwijnt het nulurencontract voor de meeste mensen (Wet
        //   meer zekerheid flexwerkers). Vanaf 2028 mogen bedrijven alleen werken met toegelaten
        //   uitzendbureaus (Wtta). Deze les moet dan worden aangepast. ⚖️
        // ⚖️ check: Een uitzendkracht heeft recht op hetzelfde loon als de vaste mensen die
        //   hetzelfde werk doen ⚖️ (art. 8 Waadi; een cao mag soms afwijken). Eerder stond hier een
        //   nieuwe uitzend-cao "sinds 2026": die datum is niet gecheckt, dus weggehaald.
        {
          kind: 'truefalse',
          id: 'r.l.contract.3.tf2',
          statement: 'Een uitzendkracht heeft recht op hetzelfde loon als de vaste mensen die hetzelfde werk doen.',
          answer: true,
          why: "Dat klopt. Doe je hetzelfde werk als vaste collega's? Dan krijg je hetzelfde loon. Zo staat het in de wet. Weet je het niet zeker? Vraag het na bij het bureau.",
        },
        // Voor werk betaal je nooit (rapport hiaten, voorstel 3): de tweede vraag naast r.l.zoeken.1.
        // ⚖️ check: Inschrijven bij een uitzendbureau is gratis. Een bureau mag je geen geld vragen
        //   om werk voor je te zoeken ⚖️ (art. 9 Waadi).
        {
          kind: 'truefalse',
          id: 'r.l.contract.3.tf3',
          statement: 'Een uitzendbureau mag je laten betalen om je in te schrijven.',
          answer: false,
          why: 'Inschrijven bij een uitzendbureau is gratis. Het bureau krijgt geld van het bedrijf waar je werkt. Voor echt werk hoef jij zelf niet te betalen. Vraagt een bureau toch geld? Dan klopt er iets niet.',
        },
        {
          kind: 'whoask',
          id: 'r.l.contract.3.wa1',
          question: 'Je krijgt als oproepkracht veel te weinig loon. Waar meld je dat, ook zonder je naam?',
          options: [
            { id: 'a', who: 'arbeidsinspectie', best: true, feedback: 'Goed. De Arbeidsinspectie controleert of bedrijven genoeg betalen.' },
            { id: 'b', who: 'politie', best: false, feedback: 'De politie is voor misdaad en gevaar. Te weinig loon meld je ergens anders.' },
            { id: 'c', who: 'uitzendbureau', best: false, feedback: 'Werk je via een bureau? Vraag het daar. Maar melden zonder naam kan daar niet.' },
          ],
          why: 'Bij te weinig loon kun je naar de Nederlandse Arbeidsinspectie. Dat kan zonder je naam.',
        },
        { kind: 'model', id: 'r.l.contract.3.mo1', context: 'Je baas roept je te kort van tevoren op.', nl: 'Zaterdag lukt niet, dat is te kort van tevoren. Volgende week kan ik wel.' },
      ],
    },
    {
      // Les 3.4 · Stage, leerwerkbaan en zzp
      id: 'r.l.contract.4',
      title: 'Stage, leerwerkbaan en zzp',
      goal: "Je weet het verschil tussen stage, leerwerkbaan, werknemer en zzp'er. Je kent de risico's.",
      remember: 'Zzp betekent: geen loon als je ziek bent, en geen WW.',
      // Wie kan je helpen: je school of stagebegeleider · SBB (stages in het mbo) · een vakbond,
      //   zoals FNV Zelfstandigen · het Juridisch Loket · KVK en Belastingdienst (informatie over
      //   zzp).
      help: ['vakbond', 'juridischloket'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.contract.4.sc1',
          picture: 'Jayden met een grote bezorgtas op zijn rug. Naast hem een fiets.',
          lines: [
            'Jayden is 18.',
            'Hij zoekt werk.',
            'Een bezorgbedrijf zegt: "Word zzp\'er bij ons. Dan verdien je meer per uur."',
            "Een zzp'er is iemand met een eigen bedrijf, zonder personeel.",
            'Jayden weet niet of dat slim is.',
          ],
        },
        // ⚖️ check: Bepaalt het bedrijf hoe, wanneer en waar je werkt? Dan ben je vaak gewoon
        //   werknemer ⚖️.
        {
          kind: 'rule',
          id: 'r.l.contract.4.ru1',
          emoji: '🚲',
          title: 'Zzp betekent: geen loon als je ziek bent, en geen WW.',
          body: [
            "Een zzp'er heeft een eigen bedrijf, zonder personeel.",
            "Als zzp'er krijg je geen loon als je ziek bent.",
            'Je krijgt geen WW als het werk stopt.',
            'Bepaalt het bedrijf hoe, wanneer en waar je werkt? Dan ben je vaak gewoon werknemer.',
          ],
          rule: 'geschreven',
        },
        {
          kind: 'truefalse',
          id: 'r.l.contract.4.tf1',
          statement: "Als zzp'er krijg je je loon door als je ziek bent.",
          answer: false,
          why: "Als zzp'er krijg je geen loon als je ziek bent. Je krijgt geen WW als het werk stopt. Je regelt zelf je belasting, je verzekering en je pensioen. Meer per uur is dus niet altijd meer geld.",
        },
        // ⚖️ check: Bepaalt het bedrijf hoe, wanneer en waar je werkt? Dan ben je vaak gewoon
        //   werknemer ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.contract.4.wd1',
          situation: "Het bedrijf bepaalt Jaydens tijden, zijn kleding en zijn route. Toch noemen ze hem zzp'er. Wat kan Jayden het beste doen?",
          options: [
            { id: 'a', text: 'Hij vraagt advies. Misschien is hij gewoon werknemer.', best: true, feedback: 'Goed. Dan weet hij welke rechten hij heeft.' },
            { id: 'b', text: 'Hij vindt het prima. Zo gaat het bij bezorgers.', best: false, feedback: 'Begrijpelijk. Maar dan mist hij misschien rechten.' },
            { id: 'c', text: 'Hij koopt alvast zelf een fiets en een tas.', best: false, feedback: 'Wacht daar nog even mee. Eerst advies vragen.' },
          ],
          why: "Bepaalt het bedrijf hoe, wanneer en waar je werkt? Dan ben je vaak gewoon werknemer. Dan heb je recht op loon bij ziekte en op WW. Iemand die zzp'er heet, maar werknemer is, heet schijnzelfstandig.",
        },
        // Redactie: het kabinet wil een stagevergoeding verplicht maken (brief juli 2026). Nog geen
        //   wet. ⚖️
        // ⚖️ check: Een stagevergoeding is nu nog geen recht in de wet ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.contract.4.tf2',
          statement: 'Op een stage krijg je altijd het minimumloon.',
          answer: false,
          why: 'Op een stage ben je aan het leren. Een stagevergoeding is nu nog geen recht in de wet. Veel bedrijven geven wel een vergoeding. Een leerwerkbaan (bbl) is anders. Dan heb je een contract en krijg je loon.',
        },
        {
          kind: 'whoask',
          id: 'r.l.contract.4.wa1',
          question: "Jayden weet het niet zeker: is hij zzp'er of gewoon werknemer? Wie geeft gratis advies?",
          options: [
            { id: 'a', who: 'collega', best: false, feedback: "Collega's weten het vaak ook niet zeker." },
            { id: 'b', who: 'juridischloket', best: true, feedback: 'Goed. Het Juridisch Loket geeft gratis advies over je werk.' },
            { id: 'c', who: 'uwv', best: false, feedback: 'UWV gaat over uitkeringen. Dit advies krijg je ergens anders.' },
          ],
          why: 'Het Juridisch Loket helpt gratis. Een vakbond, zoals FNV Zelfstandigen, helpt ook.',
        },
        { kind: 'model', id: 'r.l.contract.4.mo1', context: 'Je weet niet wat voor contract je hebt.', nl: "Ben ik hier werknemer of zzp'er? Wat staat er in mijn contract?" },
      ],
    },
  ],
};
