import type { RuleUnit } from '../types';

/**
 * Unit 4 · Loon en loonstrook (les 4.1–4.3).
 * Converted from docs/werkregels-curriculum.md; edit the curriculum first, then this file.
 * `// ⚖️ check:` marks a fact the expert must check (docs/werkregels-bronnen.md). The marker is
 * never shown or read aloud. `// Redactie:` notes are for the makers only.
 */
export const loonUnit: RuleUnit = {
  id: 'r.loon',
  title: 'Loon en loonstrook',
  emoji: '💶',
  color: '#2e8b57',
  lessons: [
    {
      // Les 4.1 · Bruto en netto
      id: 'r.l.loon.1',
      title: 'Bruto en netto',
      goal: 'Je weet het verschil tussen bruto en netto. Je weet waar je het minimumloon vindt.',
      remember: 'Bruto is vóór belasting. Netto krijg je op je rekening.',
      // Wie kan je helpen: de loonadministratie of HR van je werk · de BelastingTelefoon ·
      //   rijksoverheid.nl (minimumloon) · een vakbond.
      help: ['hr', 'vakbond'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.loon.1.sc1',
          picture: 'Fatima kijkt verbaasd naar de bank-app op haar telefoon.',
          lines: [
            'Fatima werkt in de schoonmaak.',
            'In haar contract staat een bedrag per maand.',
            'Op haar bankrekening komt veel minder binnen.',
            'Is er iets fout gegaan?',
          ],
        },
        {
          kind: 'rule',
          id: 'r.l.loon.1.ru1',
          emoji: '💶',
          title: 'Bruto is vóór belasting. Netto krijg je op je rekening.',
          body: [
            'Bruto is je loon vóór belasting.',
            'Netto is wat je echt op je rekening krijgt.',
            'Het verschil is vooral loonheffing: belasting en premie voor verzekeringen.',
            'Je werkgever betaalt die voor jou aan de Belastingdienst.',
            'Vaak gaat er ook geld af voor je pensioen.',
          ],
          rule: 'geschreven',
        },
        {
          kind: 'truefalse',
          id: 'r.l.loon.1.tf1',
          statement: 'Bruto is het geld dat op je bankrekening komt.',
          answer: false,
          why: 'Bruto is je loon vóór belasting. Netto is wat je echt op je rekening krijgt. Het verschil is vooral loonheffing. Loonheffing is belasting en premie voor verzekeringen. Je werkgever betaalt die voor jou aan de Belastingdienst. Vaak gaat er ook geld af voor je pensioen.',
        },
        // ⚖️ check: Ben je jonger dan 21 ⚖️?
        // ⚖️ check: Vanaf 21 ⚖️ krijg je het volle minimumloon.
        {
          kind: 'whatdo',
          id: 'r.l.loon.1.wd1',
          situation: 'Ewa is 20. Een collega van 25 verdient meer. Ze doen hetzelfde werk. Wat kan Ewa het beste doen?',
          options: [
            { id: 'a', text: 'Ze zoekt het minimumloon voor haar leeftijd op.', best: true, feedback: 'Goed. Dan weet ze of haar loon klopt.' },
            { id: 'b', text: 'Ze vraagt meteen hetzelfde loon als haar collega.', best: false, feedback: 'Vragen mag. Maar er is een regel voor leeftijd.' },
            { id: 'c', text: 'Ze denkt: nieuwe mensen verdienen altijd minder.', best: false, feedback: 'Niet altijd. Check eerst wat de regel is.' },
          ],
          why: 'Ben je jonger dan 21? Dan is je minimumloon lager. Dat heet jeugdloon. Vanaf 21 krijg je het volle minimumloon. Je loon mag nooit lager zijn. Het bedrag per uur staat op rijksoverheid.nl. Je cao kan meer geven.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.loon.1.wd2',
          situation: 'Fatima krijgt er een baan bij, in een winkel. Bij allebei vragen ze: "Wil je loonheffingskorting?" Wat kan Fatima het beste doen?',
          options: [
            { id: 'a', text: 'Ze zegt bij allebei ja. Dan houdt ze meer over.', best: false, feedback: 'Nu wel. Maar later moet ze dan geld terugbetalen.' },
            { id: 'b', text: 'Ze zegt ja bij één baan, en nee bij de andere.', best: true, feedback: 'Goed. De korting krijgt ze maar één keer.' },
            { id: 'c', text: 'Ze zegt bij allebei nee. Dat lijkt haar het veiligst.', best: false, feedback: 'Dan betaalt ze eerst te veel belasting.' },
          ],
          why: 'Loonheffingskorting is korting op je belasting. Je krijgt die maar bij één werkgever. Kies meestal de baan waar je het meest verdient.',
        },
        // Pensioen (rapport hiaten, hoofdstuk 3).
        // ⚖️ check: Bij veel banen gaat er elke maand iets van je loon af voor je pensioen ⚖️ (geen
        //   wettelijke plicht; vaak via de cao of een pensioenfonds).
        // ⚖️ check: Je werkgever betaalt meestal ook mee ⚖️.
        // ⚖️ check: Hoeveel je al hebt, zie je op mijnpensioenoverzicht.nl, met je DigiD ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.loon.1.tf2',
          statement: 'Bij veel banen is een deel van je loon voor later, voor je pensioen.',
          answer: true,
          why: 'Pensioen is geld voor later, als je oud bent en stopt met werken. Bij veel banen gaat er elke maand iets van je loon af voor je pensioen. Je werkgever betaalt meestal ook mee. Hoeveel je al hebt, zie je op mijnpensioenoverzicht.nl. Je logt in met je DigiD.',
        },
        {
          kind: 'whoask',
          id: 'r.l.loon.1.wa1',
          question: 'Je snapt niet waarom je netto loon zo laag is. Wie vraag je het eerst?',
          options: [
            { id: 'a', who: 'uwv', best: false, feedback: 'UWV gaat over uitkeringen, niet over je loon.' },
            { id: 'b', who: 'vertrouwenspersoon', best: false, feedback: 'De vertrouwenspersoon helpt bij gedoe met mensen, niet bij je loon.' },
            { id: 'c', who: 'hr', best: true, feedback: 'Goed. HR of de loonadministratie maakt je loonstrook.' },
          ],
          why: 'De loonadministratie of HR kan je loonstrook uitleggen.',
        },
        { kind: 'model', id: 'r.l.loon.1.mo1', context: 'Je snapt je netto loon niet.', nl: 'Kunt u mij uitleggen waarom mijn netto loon zo laag is?' },
      ],
    },
    {
      // Les 4.2 · Je loonstrook checken
      id: 'r.l.loon.2',
      title: 'Je loonstrook checken',
      goal: 'Je schrijft je uren op en je checkt je loonstrook. Je vraagt na wat niet klopt.',
      remember: 'Schrijf je uren op. Check elke loonstrook.',
      // Wie kan je helpen: de loonadministratie · een vakbond · het Juridisch Loket · de
      //   Nederlandse Arbeidsinspectie (bij te weinig loon, ook zonder je naam) · bij uitzendwerk:
      //   de SNCU.
      help: ['hr', 'vakbond', 'juridischloket', 'arbeidsinspectie'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.loon.2.sc1',
          picture: 'Piotr met een schriftje en een pen. Naast hem ligt een loonstrook.',
          lines: [
            'Piotr schrijft elke dag zijn uren op: begintijd, eindtijd en pauze.',
            'Aan het eind van de maand krijgt hij zijn loonstrook.',
            'Hij telt 152 uur.',
            'Op de loonstrook staat 140 uur.',
          ],
        },
        // ⚖️ check: Je krijgt een loonstrook bij je eerste loon ⚖️, en als het bedrag verandert ⚖️.
        {
          kind: 'rule',
          id: 'r.l.loon.2.ru1',
          emoji: '🧾',
          title: 'Schrijf je uren op. Check elke loonstrook.',
          body: [
            'Fouten op een loonstrook komen vaak voor.',
            'Je krijgt een loonstrook bij je eerste loon, en als het bedrag verandert.',
            'Je eigen lijstje met uren helpt heel goed.',
            'Klopt er iets niet? Vraag het snel, het liefst per mail.',
          ],
          rule: 'geschreven',
          key: true,
        },
        {
          kind: 'whatdo',
          id: 'r.l.loon.2.wd1',
          situation: 'Piotr ziet het verschil. Wat kan Piotr het beste doen?',
          options: [
            { id: 'a', text: 'Hij zegt niets. Het verschil is niet zo groot.', best: false, feedback: '12 uur is veel loon. Het is zijn geld.' },
            { id: 'b', text: 'Hij werkt volgende maand gewoon 12 uur minder.', best: false, feedback: 'Dat lost het niet op, en het kan problemen geven.' },
            { id: 'c', text: 'Hij laat zijn lijstje zien en vraagt het na.', best: true, feedback: 'Goed. Met zijn lijstje kan hij het laten zien.' },
          ],
          why: 'Fouten op een loonstrook komen vaak voor. Navragen is jouw recht. Je eigen lijstje met uren helpt heel goed. Vraag het snel, en het liefst per mail.',
        },
        // ⚖️ check: Je krijgt een loonstrook bij je eerste loon ⚖️.
        // ⚖️ check: En elke keer als het bedrag verandert ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.loon.2.tf1',
          statement: 'Je werkgever moet je een loonstrook geven.',
          answer: true,
          why: 'Je krijgt een loonstrook bij je eerste loon. En elke keer als het bedrag verandert. De meeste werkgevers geven elke maand een loonstrook, vaak in een app. Bewaar ze goed.',
        },
        // ⚖️ check: Daar moet je eerst schriftelijk mee instemmen ⚖️.
        // ⚖️ check: Ook dan zijn er grenzen ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.loon.2.wd2',
          situation: 'Op de loonstrook staat "inhouding huisvesting". Piotr heeft daar nooit iets over getekend. Wat kan Piotr het beste doen?',
          options: [
            { id: 'a', text: 'Hij vraagt waar hij daarvoor getekend heeft.', best: true, feedback: 'Goed. Zonder zijn handtekening mag het meestal niet.' },
            { id: 'b', text: 'Hij denkt: dat hoort er vast bij, iedereen heeft het.', best: false, feedback: 'Begrijpelijk. Maar het mag niet zomaar.' },
            { id: 'c', text: 'Hij vraagt een voorschot om het verschil te betalen.', best: false, feedback: 'Dan leent hij geld dat misschien van hem is.' },
          ],
          why: 'Een inhouding is geld dat je baas van je loon afhaalt. Je werkgever mag niet zomaar geld van je loon afhalen. Daar moet je eerst schriftelijk mee instemmen. Ook dan zijn er grenzen. Klopt het niet? Vraag hulp.',
        },
        // Loon niet (op tijd) betaald (rapport hiaten, hoofdstuk 3).
        // ⚖️ check: Je loon moet op tijd op je rekening staan, op de dag uit je contract of cao ⚖️
        //   (art. 7:623 BW).
        // ⚖️ check: Betaalt je werkgever te laat? Dan moet hij soms extra betalen ⚖️ (wettelijke
        //   verhoging, art. 7:625 BW).
        {
          kind: 'whatdo',
          id: 'r.l.loon.2.wd3',
          situation: 'Het is de 5e van de maand. Piotr heeft zijn loon nog niet. Vorige maand was het ook te laat. Wat kan Piotr het beste doen?',
          options: [
            { id: 'a', text: 'Hij wacht nog een maand. Het komt vast vanzelf.', best: false, feedback: 'Begrijpelijk. Maar het is zijn geld, en hij heeft het nodig.' },
            { id: 'b', text: 'Hij stopt meteen met werken tot het geld er is.', best: false, feedback: 'Riskant. Vraag eerst advies voordat je stopt.' },
            { id: 'c', text: 'Hij vraagt het na, eerst zelf en dan per mail.', best: true, feedback: 'Goed. Helpt dat niet? Dan vraagt hij advies.' },
          ],
          why: 'Je loon moet op tijd op je rekening staan. Op welke dag, staat in je contract of cao. Is het te laat? Vraag het eerst zelf. Dan per mail, met de datum. Helpt dat niet? Ga naar een vakbond of het Juridisch Loket. Betaalt je werkgever te laat? Dan moet hij soms extra betalen.',
        },
        // Fictieve loonstrook: ronde bedragen, geen echt minimumloon.
        {
          kind: 'payslip',
          id: 'r.l.loon.2.ps1',
          slip: {
            periode: 'Maart',
            rows: [
              { field: 'uren', label: 'Gewerkte uren', value: '140' },
              { field: 'uurloon', label: 'Uurloon', value: '20 euro' },
              { field: 'bruto', label: 'Bruto loon', value: '2.800 euro' },
              { field: 'loonheffing', label: 'Loonheffing', value: '- 400 euro' },
              { field: 'inhouding', label: 'Inhouding huisvesting', value: '- 300 euro' },
              { field: 'netto', label: 'Netto loon', value: '2.100 euro' },
              { field: 'vakantiegeld', label: 'Vakantiegeld (opgebouwd)', value: '224 euro' },
            ],
          },
          // The answer from the slip's own rows: (152 - 140) uur x 20 euro = 240 euro bruto.
          question: 'Piotr telde zelf 152 uur. Hoeveel bruto loon mist Piotr?',
          highlight: 'uren',
          options: [
            { id: 'a', text: '12 euro', best: false, feedback: 'Nee. Hij mist 12 uur. Elk uur is 20 euro.' },
            { id: 'b', text: '240 euro', best: true, feedback: 'Goed. 12 uur keer 20 euro is 240 euro.' },
            { id: 'c', text: '3.040 euro', best: false, feedback: 'Nee. Dat is het loon voor alle 152 uur. Hij mist alleen het verschil.' },
          ],
          why: 'Op de loonstrook staat 140 uur. Piotr werkte 152 uur. Hij mist dus 12 uur. 12 keer 20 euro is 240 euro bruto. Vergelijk je loonstrook altijd met je eigen lijstje.',
        },
        {
          kind: 'whoask',
          id: 'r.l.loon.2.wa1',
          question: 'Je loonstrook klopt niet. Wie vraag je het eerst?',
          options: [
            { id: 'a', who: 'hr', best: true, feedback: 'Goed. De loonadministratie kan het snel nakijken.' },
            { id: 'b', who: 'arbeidsinspectie', best: false, feedback: 'Kan later, bij te weinig loon. Vraag het eerst zelf na.' },
            { id: 'c', who: 'politie', best: false, feedback: 'Een fout op je loonstrook is geen zaak voor de politie.' },
          ],
          why: 'Vraag het eerst na bij de loonadministratie. Helpt dat niet? Ga naar een vakbond of het Juridisch Loket.',
        },
        { kind: 'model', id: 'r.l.loon.2.mo1', context: 'De uren op je loonstrook kloppen niet.', nl: 'Op mijn loonstrook staan 140 uur. Ik heb 152 uur gewerkt. Kunt u dat nakijken?' },
      ],
    },
    {
      // Les 4.3 · Vakantiegeld, toeslag en overwerk
      id: 'r.l.loon.3',
      title: 'Vakantiegeld, toeslag en overwerk',
      goal: 'Je weet wat vakantiegeld en een toeslag zijn. Je weet hoe je baas overwerk betaalt.',
      // ⚖️ check: Vakantiegeld is jouw recht: minstens 8 procent ⚖️ van je loon.
      remember: 'Vakantiegeld is jouw recht: minstens 8 procent van je loon.',
      // Wie kan je helpen: je cao (zoek hem online) · een vakbond · de loonadministratie.
      help: ['vakbond', 'hr'],
      steps: [
        {
          kind: 'scene',
          id: 'r.l.loon.3.sc1',
          picture: "Dewi in een gang van een zorghuis, 's nachts. Buiten het raam de maan.",
          lines: [
            'Dewi werkt in de zorg.',
            "Ze werkt ook 's avonds en in het weekend.",
            'In mei krijgt ze ineens veel meer geld.',
            'Op haar loonstrook staat "vakantiegeld" en "ORT".',
          ],
        },
        // ⚖️ check: Vakantiegeld is jouw recht: minstens 8 procent ⚖️ van je loon.
        // ⚖️ check: Het is minstens 8 procent ⚖️ van je bruto loon.
        // ⚖️ check: Meestal krijg je het in mei of juni ⚖️.
        {
          kind: 'rule',
          id: 'r.l.loon.3.ru1',
          emoji: '🏖️',
          title: 'Vakantiegeld is jouw recht: minstens 8 procent van je loon.',
          body: [
            'Je werkgever moet vakantiegeld betalen.',
            'Het is minstens 8 procent van je bruto loon.',
            'Meestal krijg je het in mei of juni.',
            'Stop je eerder? Dan krijg je het bij je laatste loon.',
          ],
          rule: 'geschreven',
        },
        // ⚖️ check: Het is minstens 8 procent ⚖️ van je bruto loon.
        // ⚖️ check: Meestal krijg je het in mei of juni ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.loon.3.tf1',
          statement: 'Vakantiegeld is jouw recht, geen cadeautje van je baas.',
          answer: true,
          why: 'Je werkgever moet vakantiegeld betalen. Het is minstens 8 procent van je bruto loon. Je bouwt het op met elk uur dat je werkt. Meestal krijg je het in mei of juni. Stop je eerder? Dan krijg je het bij je laatste loon.',
        },
        // ⚖️ check: Het staat in de cao, niet in de wet ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.loon.3.wd1',
          situation: 'Wat betekent "ORT" op Dewi\'s loonstrook?',
          options: [
            { id: 'a', text: 'Een bedrag dat ze eind van het jaar terugbetaalt.', best: false, feedback: 'Nee. Dit geld is van haar.' },
            { id: 'b', text: 'Extra loon voor werk in de avond, nacht of weekend.', best: true, feedback: 'Goed. Zo heet die toeslag in de zorg.' },
            { id: 'c', text: 'Een aftrek omdat ze een keer te laat was.', best: false, feedback: 'Nee. Voor te laat komen krijg je geen aftrek op je strook.' },
          ],
          why: 'ORT betekent onregelmatigheidstoeslag. Dat is extra geld voor werk op onregelmatige tijden. Het staat in de cao, niet in de wet. Elke cao heeft eigen regels.',
        },
        // ⚖️ check: Je werkgever betaalt elk uur dat je werkt ⚖️.
        // ⚖️ check: Of je extra toeslag krijgt, staat in je cao of contract ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.loon.3.wd2',
          situation: 'Dewi werkt deze maand 10 uur over. Ze ziet die uren niet op haar loonstrook. Wat kan Dewi het beste doen?',
          options: [
            { id: 'a', text: 'Ze denkt: in de zorg betalen ze overwerk nooit.', best: false, feedback: 'Dat klopt niet. Gewerkte uren tellen.' },
            { id: 'b', text: 'Ze besluit dat ze nooit meer overwerkt.', best: false, feedback: 'Dat mag ze zelf weten. Maar de 10 uur zijn nog niet geregeld.' },
            { id: 'c', text: 'Ze vraagt waar de 10 uur zijn gebleven.', best: true, feedback: 'Goed. Navragen is haar recht.' },
          ],
          why: 'Je werkgever betaalt elk uur dat je werkt. Soms krijg je vrije tijd terug in plaats van geld. Of je extra toeslag krijgt, staat in je cao of contract. Schrijf je overuren altijd op.',
        },
        {
          kind: 'whoask',
          id: 'r.l.loon.3.wa1',
          question: 'Je wilt weten welke toeslagen in je cao staan. Wie kan het uitleggen?',
          options: [
            { id: 'a', who: 'bedrijfsarts', best: false, feedback: 'De bedrijfsarts gaat over je gezondheid, niet over je loon.' },
            { id: 'b', who: 'vakbond', best: true, feedback: "Goed. Een vakbond kent de cao's goed." },
            { id: 'c', who: 'uwv', best: false, feedback: 'UWV gaat over uitkeringen, niet over je cao.' },
          ],
          why: 'Een vakbond maakt de cao mee. Je cao vind je ook online.',
        },
        { kind: 'model', id: 'r.l.loon.3.mo1', context: 'Je overuren staan niet op je loonstrook.', nl: 'Ik heb 10 uur overgewerkt. Krijg ik die uitbetaald, of krijg ik vrij?' },
      ],
    },
  ],
};
