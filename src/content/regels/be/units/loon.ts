import type { BeUnit } from '../types';

/**
 * Unit 4 (België) · Loon en loonbrief: de Belgische versie van src/content/regels/units/loon.ts.
 * Het voorbeeld voor alle Belgische units (docs/werkregels-belgie.md): zelfde lessen en
 * stap-id's als de Nederlandse, met "r.be." vooraan. Vlaamse woorden: loonbrief, brutoloon,
 * nettoloon, afhouding, paritair comité, barema, maaltijdcheque, eindejaarspremie, vakantiekas.
 *
 * `// ⚖️ check:` = een feit dat de deskundige nakijkt, met de bron. De marker wordt nooit getoond
 * of voorgelezen. Opgezocht op 30 okt 2026. werk.belgie.be was in deze sessie niet te openen
 * (netwerk geblokkeerd): de feiten komen uit zoekresultaten van ACV, Securex, Partena, Lexgo en
 * socialsecurity.be; de deskundige legt ze naast werk.belgie.be. `// Redactie:` is voor de makers.
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.loon',
    title: 'Loon en loonbrief',
    emoji: '💶',
    color: '#2e8b57',
    lessons: [
      {
        // Les 4.1 · Brutoloon en nettoloon
        id: 'r.be.l.loon.1',
        title: 'Brutoloon en nettoloon',
        goal: 'Je weet het verschil tussen brutoloon en nettoloon. Je weet wat RSZ en bedrijfsvoorheffing zijn.',
        // ⚖️ check: nettoloon = brutoloon min RSZ-werknemersbijdrage min bedrijfsvoorheffing (securex.be, "hoe wordt het nettoloon berekend")
        remember: 'Bruto is vóór RSZ en belasting. Netto krijg je op je rekening.',
        help: ['hr', 'vakbond'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.loon.1.sc1',
            picture: 'Fatima kijkt verbaasd naar de bank-app op haar telefoon.',
            lines: [
              'Fatima werkt in de schoonmaak.',
              'In haar contract staat een brutoloon per maand.',
              'Op haar rekening komt veel minder binnen.',
              'Is er iets fout gegaan?',
            ],
          },
          // ⚖️ check: de persoonlijke RSZ-bijdrage van de werknemer is 13,07% van het brutoloon (voor arbeiders berekend op 108% van het brutoloon) (securex.be "loonkosten eerste aanwerving"; hetacv.be "je loonbrief"; bijgewerkt oktober 2026)
          // ⚖️ check: RSZ = Rijksdienst voor Sociale Zekerheid: geld voor de sociale zekerheid (pensioen, ziekte, werkloosheid, kinderbijslag) (socialsecurity.be)
          // ⚖️ check: daarna gaat de bedrijfsvoorheffing af: een voorschot op de belasting, berekend op het belastbaar loon (brutoloon min RSZ) (FOD Financiën; bnpparibasfortis.be "loonfiche")
          // ⚖️ check: wie weinig verdient, krijgt een werkbonus: minder RSZ en minder bedrijfsvoorheffing (securex.be; socialsecurity.be)
          {
            kind: 'rule',
            id: 'r.be.l.loon.1.ru1',
            emoji: '💶',
            title: 'Bruto is vóór RSZ en belasting. Netto krijg je op je rekening.',
            body: [
              'Je brutoloon is je loon vóór de afhoudingen.',
              'Een afhouding is geld dat van je loon af gaat.',
              'Eerst gaat de RSZ eraf: 13,07 procent van je brutoloon.',
              'RSZ is geld voor de sociale zekerheid, zoals je pensioen.',
              'Daarna gaat de belasting eraf: de bedrijfsvoorheffing.',
              'Wat overblijft, is je nettoloon.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: op je rekening komt het nettoloon: brutoloon min RSZ en bedrijfsvoorheffing (securex.be, "hoe wordt het nettoloon berekend")
          {
            kind: 'truefalse',
            id: 'r.be.l.loon.1.tf1',
            statement: 'Je brutoloon is het geld dat op je rekening komt.',
            answer: false,
            why: 'Je brutoloon is je loon vóór de afhoudingen. Eerst gaat de RSZ eraf. Daarna de bedrijfsvoorheffing: dat is belasting. Wat overblijft, is je nettoloon. Dat komt op je rekening.',
          },
          // ⚖️ check: elke werkgever valt onder een paritair comité, volgens zijn hoofdactiviteit; daar maken vakbonden en werkgevers cao's (werk.belgie.be, paritaire comités)
          // ⚖️ check: het paritair comité legt barema's vast: minimumlonen per functie of per sector; je loon mag niet lager zijn (werk.belgie.be, minimumlonen)
          // ⚖️ check: het nummer van het paritair comité staat meestal op de loonbrief (hetacv.be "je loonbrief")
          {
            kind: 'whatdo',
            id: 'r.be.l.loon.1.wd1',
            situation: 'Fatima wil weten of haar loon hoog genoeg is. Wat kan Fatima het beste doen?',
            options: [
              { id: 'a', text: 'Ze zoekt het barema van haar paritair comité op.', best: true, feedback: 'Goed. Dan weet ze wat het minimum is.' },
              { id: 'b', text: 'Ze vraagt een collega hoeveel die precies verdient.', best: false, feedback: 'Dat mag. Maar die collega doet misschien ander werk.' },
              { id: 'c', text: 'Ze denkt: mijn baas kiest zelf hoeveel ik krijg.', best: false, feedback: 'Niet helemaal. Er is een minimum voor elke sector.' },
            ],
            why: 'Elke sector heeft een paritair comité. Daar maken vakbonden en werkgevers afspraken. Ze maken ook barema\'s: lijsten met het minimumloon. Het nummer van je paritair comité staat meestal op je loonbrief. Je loon mag niet lager zijn dan het barema.',
          },
          // ⚖️ check: een maaltijdcheque krijg je per dag dat je echt werkt (KB maaltijdcheques; partena-professional.be)
          // ⚖️ check: de werknemer betaalt zelf minstens 1,09 euro per maaltijdcheque; dat gaat af van het nettoloon (partena-professional.be "de maaltijdcheque van 10 euro"; bijgewerkt oktober 2026)
          // ⚖️ check: sinds 1 januari 2026 is een maaltijdcheque hoogstens 10 euro (was 8 euro); niet automatisch: er is een cao of akkoord nodig (lexgo.be 14472; partena-professional.be "finale go voor maaltijdcheques van 10 EUR")
          {
            kind: 'whatdo',
            id: 'r.be.l.loon.1.wd2',
            situation: 'Fatima krijgt maaltijdcheques. Op haar loonbrief gaat er een klein bedrag af. Wat is dat?',
            options: [
              { id: 'a', text: 'Een boete, omdat ze de cheques te laat gebruikt.', best: false, feedback: 'Nee. Voor maaltijdcheques krijg je geen boete.' },
              { id: 'b', text: 'Haar eigen deel van de maaltijdcheques.', best: true, feedback: 'Goed. Haar baas betaalt het grootste deel.' },
              { id: 'c', text: 'Belasting op het eten dat ze ermee koopt.', best: false, feedback: 'Nee. Het is haar eigen deel van de cheques.' },
            ],
            why: 'Een maaltijdcheque is geld voor eten, op een kaart. Je krijgt er een per dag dat je echt werkt. Je baas betaalt het grootste deel. Jij betaalt zelf een klein deel: minstens 1,09 euro. Een maaltijdcheque is hoogstens 10 euro.',
          },
          // ⚖️ check: met je werk bouw je een wettelijk pensioen op; de RSZ-bijdragen betalen het mee (socialsecurity.be; sfpd.fgov.be)
          // ⚖️ check: veel werkgevers of sectoren geven ook een aanvullend pensioen (groepsverzekering of sectorpensioen) (mypension.be, aanvullend pensioen)
          // ⚖️ check: je pensioen bekijk je op mypension.be, met itsme of je eID (mypension.be)
          {
            kind: 'truefalse',
            id: 'r.be.l.loon.1.tf2',
            statement: 'Met je werk in België bouw je een pensioen op.',
            answer: true,
            why: 'Pensioen is geld voor later, als je stopt met werken. Een deel van de RSZ is voor je pensioen. Soms betaalt je baas ook een extra pensioen. Dat heet een aanvullend pensioen. Hoeveel je al hebt, zie je op mypension.be. Je logt in met itsme of je eID.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.loon.1.wa1',
            question: 'Je snapt niet waarom je nettoloon zo laag is. Wie vraag je het eerst?',
            options: [
              { id: 'a', who: 'rva', best: false, feedback: 'De RVA gaat over werkloosheid, niet over je loon.' },
              { id: 'b', who: 'vertrouwenspersoon', best: false, feedback: 'De vertrouwenspersoon helpt bij gedoe met mensen, niet bij je loon.' },
              { id: 'c', who: 'hr', best: true, feedback: 'Goed. De personeelsdienst kan je loonbrief uitleggen.' },
            ],
            why: 'De personeelsdienst of HR kan je loonbrief uitleggen. Is het nog niet duidelijk? Een vakbond helpt ook.',
          },
          { kind: 'model', id: 'r.be.l.loon.1.mo1', context: 'Je snapt je nettoloon niet.', nl: 'Kunt u mij uitleggen waarom mijn nettoloon zo laag is?' },
        ],
      },
      {
        // Les 4.2 · Je loonbrief nakijken
        id: 'r.be.l.loon.2',
        title: 'Je loonbrief nakijken',
        goal: 'Je schrijft je uren op en je kijkt je loonbrief na. Je vraagt na wat niet klopt.',
        remember: 'Schrijf je uren op. Kijk elke loonbrief na.',
        // Wie kan je helpen: de personeelsdienst · het sociaal secretariaat (via je werkgever) · een
        //   vakbond · Toezicht op de Sociale Wetten (bij te weinig loon).
        help: ['hr', 'socsec', 'vakbond', 'tsw'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.loon.2.sc1',
            picture: 'Nadia met een schriftje en een pen. Naast haar ligt een loonbrief.',
            lines: [
              'Nadia werkt in een winkel.',
              'Ze schrijft elke dag haar uren op: begin, einde en pauze.',
              'Aan het eind van de maand krijgt ze haar loonbrief.',
              'Ze telt 152 uur. Op de loonbrief staat 140 uur.',
            ],
          },
          // ⚖️ check: de werkgever geeft bij elke definitieve loonafrekening een loonbrief (afrekening) aan de werknemer (Loonbeschermingswet 12 april 1965, art. 15; hetacv.be "je loonbrief")
          {
            kind: 'rule',
            id: 'r.be.l.loon.2.ru1',
            emoji: '🧾',
            title: 'Schrijf je uren op. Kijk elke loonbrief na.',
            body: [
              'Je krijgt een loonbrief bij elke afrekening van je loon.',
              'Fouten op een loonbrief komen vaak voor.',
              'Je eigen lijstje met uren helpt heel goed.',
              'Klopt er iets niet? Vraag het snel, het liefst per mail.',
            ],
            rule: 'geschreven',
            key: true,
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.loon.2.wd1',
            situation: 'Nadia ziet het verschil. Wat kan Nadia het beste doen?',
            options: [
              { id: 'a', text: 'Ze zegt niets. Het verschil is niet zo groot.', best: false, feedback: '12 uur is veel loon. Het is haar geld.' },
              { id: 'b', text: 'Ze werkt volgende maand gewoon 12 uur minder.', best: false, feedback: 'Dat lost het niet op, en het kan problemen geven.' },
              { id: 'c', text: 'Ze laat haar lijstje zien en vraagt het na.', best: true, feedback: 'Goed. Met haar lijstje kan ze het laten zien.' },
            ],
            why: 'Fouten op een loonbrief komen vaak voor. Navragen is jouw recht. Je eigen lijstje met uren helpt heel goed. Vraag het snel, en het liefst per mail.',
          },
          // ⚖️ check: op de loonbrief staan o.a. het brutoloon, de afhoudingen (RSZ, bedrijfsvoorheffing) en het nettoloon (Loonbeschermingswet art. 15; KB 27 september 1966)
          {
            kind: 'truefalse',
            id: 'r.be.l.loon.2.tf1',
            statement: 'Je werkgever moet je een loonbrief geven.',
            answer: true,
            why: 'Bij elke afrekening van je loon krijg je een loonbrief. Daarop staan je brutoloon, de afhoudingen en je nettoloon. Vaak krijg je hem in een app of per mail. Bewaar je loonbrieven goed.',
          },
          // ⚖️ check: de werkgever mag alleen afhouden wat de wet toelaat (belasting, RSZ, boetes uit het arbeidsreglement, schadevergoeding, voorschotten, borg); andere afhoudingen mogen niet (Loonbeschermingswet art. 23)
          {
            kind: 'whatdo',
            id: 'r.be.l.loon.2.wd2',
            situation: 'Op de loonbrief staat "afhouding huisvesting". Nadia heeft daar nooit iets over getekend. Wat kan Nadia het beste doen?',
            options: [
              { id: 'a', text: 'Ze vraagt waarom dat bedrag van haar loon af gaat.', best: true, feedback: 'Goed. Een baas mag niet zomaar iets afhouden.' },
              { id: 'b', text: 'Ze denkt: dat hoort er vast bij, iedereen heeft het.', best: false, feedback: 'Dat is logisch. Maar het mag niet zomaar.' },
              { id: 'c', text: 'Ze vraagt een voorschot om het verschil te betalen.', best: false, feedback: 'Dan leent ze geld dat misschien van haar is.' },
            ],
            why: 'Je baas mag niet zomaar geld van je loon afhouden. De wet zegt wat wel mag, zoals RSZ en belasting. Klopt het niet? Vraag hulp bij een vakbond.',
          },
          // ⚖️ check: het loon wordt betaald op vaste dagen: arbeiders minstens twee keer per maand, bedienden minstens één keer per maand (Loonbeschermingswet art. 9)
          // ⚖️ check: bij te laat loon kan je naar de vakbond of naar Toezicht op de Sociale Wetten (werk.belgie.be)
          {
            kind: 'whatdo',
            id: 'r.be.l.loon.2.wd3',
            situation: 'Het is de 10e van de maand. Nadia heeft haar loon nog niet. Vorige maand was het ook te laat. Wat kan Nadia het beste doen?',
            options: [
              { id: 'a', text: 'Ze wacht nog een maand. Het komt vast vanzelf.', best: false, feedback: 'Dat snap ik. Maar het is haar geld, en ze heeft het nodig.' },
              { id: 'b', text: 'Ze stopt meteen met werken tot het geld er is.', best: false, feedback: 'Riskant. Vraag eerst advies voordat je stopt.' },
              { id: 'c', text: 'Ze vraagt het na, eerst zelf en dan per mail.', best: true, feedback: 'Goed. Helpt dat niet? Dan vraagt ze advies.' },
            ],
            why: 'Je loon moet op vaste dagen op je rekening staan. Bedienden krijgen het minstens één keer per maand. Arbeiders minstens twee keer per maand. Is het te laat? Vraag het eerst zelf. Dan per mail, met de datum. Helpt dat niet? Ga naar een vakbond.',
          },
          // Fictieve loonbrief van een bediende: ronde bedragen, geen echt barema. Echt is alleen
          //   het percentage van de RSZ.
          // ⚖️ check: RSZ 13,07% van 2.240 euro = 292,77 euro (bediende: op 100% van het brutoloon) (securex.be "loonkosten eerste aanwerving"; bijgewerkt oktober 2026)
          // ⚖️ check: eigen deel maaltijdcheques: 20 cheques x 1,09 euro = 21,80 euro (partena-professional.be; bijgewerkt oktober 2026)
          // Redactie: de bedrijfsvoorheffing (250 euro) is een rond voorbeeld, niet uit de tabellen
          //   van FOD Financiën. Netto: 2.240 - 292,77 - 250 - 21,80 = 1.675,43 euro.
          {
            kind: 'payslip',
            id: 'r.be.l.loon.2.ps1',
            slip: {
              periode: 'Maart',
              rows: [
                { field: 'uren', label: 'Gewerkte uren', value: '140' },
                { field: 'uurloon', label: 'Uurloon', value: '16 euro' },
                { field: 'bruto', label: 'Brutoloon', value: '2.240 euro' },
                { field: 'rsz', label: 'RSZ (13,07 procent)', value: '- 292,77 euro' },
                { field: 'voorheffing', label: 'Bedrijfsvoorheffing', value: '- 250 euro' },
                { field: 'maaltijdcheques', label: 'Maaltijdcheques, eigen deel', value: '- 21,80 euro' },
                { field: 'netto', label: 'Nettoloon', value: '1.675,43 euro' },
              ],
            },
            // The answer from the slip's own rows: (152 - 140) uur x 16 euro = 192 euro bruto.
            question: 'Nadia telde zelf 152 uur. Hoeveel brutoloon mist Nadia?',
            highlight: 'uren',
            options: [
              { id: 'a', text: '12 euro', best: false, feedback: 'Nee. Ze mist 12 uur. Elk uur is 16 euro.' },
              { id: 'b', text: '192 euro', best: true, feedback: 'Goed. 12 uur keer 16 euro is 192 euro.' },
              { id: 'c', text: '2.432 euro', best: false, feedback: 'Nee. Dat is het loon voor alle 152 uur. Ze mist alleen het verschil.' },
            ],
            why: 'Op de loonbrief staat 140 uur. Nadia werkte 152 uur. Ze mist dus 12 uur. 12 keer 16 euro is 192 euro bruto. Vergelijk je loonbrief altijd met je eigen lijstje.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.loon.2.wa1',
            question: 'Je loonbrief klopt niet. Wie vraag je het eerst?',
            options: [
              { id: 'a', who: 'hr', best: true, feedback: 'Goed. De personeelsdienst kan het snel nakijken.' },
              { id: 'b', who: 'tsw', best: false, feedback: 'Kan later, bij te weinig loon. Vraag het eerst zelf na.' },
              { id: 'c', who: 'politie', best: false, feedback: 'Een fout op je loonbrief is geen zaak voor de politie.' },
            ],
            why: 'Vraag het eerst na bij de personeelsdienst. Die vraagt het soms aan het sociaal secretariaat. Helpt dat niet? Ga naar een vakbond.',
          },
          { kind: 'model', id: 'r.be.l.loon.2.mo1', context: 'De uren op je loonbrief kloppen niet.', nl: 'Op mijn loonbrief staan 140 uur. Ik heb 152 uur gewerkt. Kunt u dat nakijken?' },
        ],
      },
      {
        // Les 4.3 · Vakantiegeld, eindejaarspremie en overuren
        id: 'r.be.l.loon.3',
        title: 'Vakantiegeld, eindejaarspremie en overuren',
        goal: 'Je weet wie je vakantiegeld betaalt. Je weet wat een eindejaarspremie en een overurentoeslag zijn.',
        remember: 'Vakantiegeld is jouw recht, geen cadeau van je baas.',
        help: ['vakbond', 'hr'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.loon.3.sc1',
            picture: 'Malik in werkkleren bij een machine in een fabriek. Hij kijkt naar zijn telefoon.',
            lines: [
              'Malik werkt als arbeider in een fabriek.',
              'In juni krijgt hij geld van een vakantiekas.',
              'In december krijgt hij nog extra geld.',
              'Op zijn loonbrief staat ook "overuren".',
            ],
          },
          // ⚖️ check: bedienden krijgen het vakantiegeld van de werkgever (enkel vakantiegeld = gewoon loon tijdens de vakantie; dubbel vakantiegeld = 92% van het maandloon) (securex.be "vakantiegeld van de bedienden"; hetacv.be "jaarlijks verlof")
          // ⚖️ check: arbeiders krijgen het vakantiegeld van de RJV (Rijksdienst voor Jaarlijkse Vakantie) of van een vakantiekas, vanaf 2 mei (15,38% van het brutoloon aan 108%) (securex.be "vakantiegeld van de arbeiders"; socialsecurity.be)
          // ⚖️ check: het vakantiegeld hangt af van het werk in het vorige jaar (het vakantiedienstjaar) (vlaanderen.be "vakantie en vakantiegeld")
          {
            kind: 'rule',
            id: 'r.be.l.loon.3.ru1',
            emoji: '🏖️',
            title: 'Vakantiegeld is jouw recht, geen cadeau van je baas.',
            body: [
              'Ben je bediende? Dan betaalt je baas je vakantiegeld.',
              'Ben je arbeider? Dan krijg je het van een vakantiekas.',
              'Meestal krijg je het in mei of juni.',
              'Het bedrag hangt af van je werk in het vorige jaar.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: arbeiders: vakantiegeld van de RJV of een vakantiekas; bedienden: van de werkgever (socialsecurity.be; hetacv.be "jaarlijks verlof")
          {
            kind: 'truefalse',
            id: 'r.be.l.loon.3.tf1',
            statement: 'Een arbeider krijgt zijn vakantiegeld van een vakantiekas.',
            answer: true,
            why: 'Arbeiders krijgen hun vakantiegeld van de RJV of van een vakantiekas. RJV is de Rijksdienst voor Jaarlijkse Vakantie. Bedienden krijgen het van hun baas, vaak in mei of juni. Je bouwt het op met je werk in het vorige jaar.',
          },
          // ⚖️ check: de eindejaarspremie (dertiende maand) staat niet in de wet, maar in een cao van het paritair comité, de onderneming of je contract (hetacv.be; securex.be)
          {
            kind: 'whatdo',
            id: 'r.be.l.loon.3.wd1',
            situation: 'In december staat er "eindejaarspremie" op de loonbrief van Malik. Wat is dat?',
            options: [
              { id: 'a', text: 'Geld dat hij in januari weer terugbetaalt.', best: false, feedback: 'Nee. Dit geld is van hem.' },
              { id: 'b', text: 'Extra loon aan het eind van het jaar.', best: true, feedback: 'Goed. Het heet ook de dertiende maand.' },
              { id: 'c', text: 'Een premie omdat hij dit jaar nooit ziek was.', best: false, feedback: 'Nee. De premie hangt niet af van ziek zijn.' },
            ],
            why: 'Veel werknemers krijgen een eindejaarspremie. Dat heet ook de dertiende maand. Dat staat niet in de wet, maar in afspraken per sector. Je paritair comité zegt of je er recht op hebt.',
          },
          // ⚖️ check: overuren geven recht op een toeslag van minstens 50%, en 100% op zondag en feestdagen (Arbeidswet 16 maart 1971, art. 29)
          // ⚖️ check: voor overuren krijg je meestal ook inhaalrust: de uren later vrij (Arbeidswet 16 maart 1971, art. 26bis)
          {
            kind: 'whatdo',
            id: 'r.be.l.loon.3.wd2',
            situation: 'Malik werkt deze maand 10 uur over. Hij ziet die uren niet op zijn loonbrief. Wat kan Malik het beste doen?',
            options: [
              { id: 'a', text: 'Hij denkt: in een fabriek betalen ze overuren nooit.', best: false, feedback: 'Dat klopt niet. Gewerkte uren tellen.' },
              { id: 'b', text: 'Hij besluit dat hij nooit meer overwerkt.', best: false, feedback: 'Dat mag hij zelf weten. Maar de 10 uur zijn nog niet geregeld.' },
              { id: 'c', text: 'Hij vraagt waar de 10 uur zijn gebleven.', best: true, feedback: 'Goed. Navragen is zijn recht.' },
            ],
            why: 'Overuren zijn uren boven je gewone werktijd. Daarvoor krijg je meestal een toeslag. Op een gewone dag is dat minstens de helft extra. Op zondag of een feestdag is het het dubbele. Vaak krijg je die uren later ook vrij. Schrijf je overuren altijd op.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.loon.3.wa1',
            question: 'Je wilt weten of je recht hebt op een eindejaarspremie. Wie kan het uitleggen?',
            options: [
              { id: 'a', who: 'arbeidsarts', best: false, feedback: 'De arbeidsarts gaat over je gezondheid, niet over je loon.' },
              { id: 'b', who: 'vakbond', best: true, feedback: 'Goed. Een vakbond kent de afspraken van je sector.' },
              { id: 'c', who: 'rva', best: false, feedback: 'De RVA gaat over werkloosheid, niet over je premie.' },
            ],
            why: 'Een vakbond maakt de afspraken in het paritair comité mee. Je personeelsdienst weet het ook.',
          },
          { kind: 'model', id: 'r.be.l.loon.3.mo1', context: 'Je overuren staan niet op je loonbrief.', nl: 'Ik heb 10 uur overgewerkt. Krijg ik daar een toeslag voor, of krijg ik vrij?' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.loon.1.mo1': [
      { text: 'Mijn loon is te laag. U betaalt mij gewoon te weinig!', feedback: 'Netto is minder dan bruto. Vraag eerst rustig om uitleg.' },
      { text: 'Ik snap mijn loonbrief niet. Maar het is vast wel goed.', feedback: 'Dan weet je niet of het klopt. Je mag om uitleg vragen.' },
    ],
    'r.be.l.loon.2.mo1': [
      { text: 'Mijn loonbrief klopt niet. Er is iets mis met de uren, denk ik.', feedback: 'Dan weet de baas niet welke uren fout zijn. Noem de getallen.' },
      { text: 'Op mijn loonbrief staan te weinig uren. U wilt mij oplichten!', feedback: 'Dat klinkt boos. Het kan ook een fout zijn.' },
    ],
    'r.be.l.loon.3.mo1': [
      { text: 'Ik heb wat langer gewerkt de laatste tijd. Dat is toch goed?', feedback: 'Dan weet de baas niet hoeveel uur. En je vraagt niets.' },
      { text: 'Ik heb 10 uur overgewerkt. Maar dat geeft niet, hoor. Laat maar.', feedback: 'Je mag vragen wat je voor je overuren krijgt.' },
    ],
  },
  advice: {
    'r.be.l.loon.1.ru1': 'advice',
    'r.be.l.loon.2.ru1': 'advice',
    'r.be.l.loon.3.ru1': 'advice',
  },
  kun: [
    ['Ik kan mijn loonbrief lezen en nakijken.', '1F', 'lezen'],
    ['Ik kan vragen waarom mijn nettoloon lager is dan mijn brutoloon.', '1F', 'gesprekken'],
    ['Ik kan navragen of ik mijn overuren betaald krijg.', '1F', 'gesprekken'],
  ],
};
