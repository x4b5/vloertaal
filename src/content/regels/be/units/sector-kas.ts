import type { BeUnit } from '../types';

/**
 * Sector tuinbouw (België) · Werken in de tuinbouw: de Belgische versie van de sectorunit r.kas
 * (src/content/regels/units/sector.ts, `kasUnit`). Vlaamse woorden: serre, plukker, paritair comité
 * 145, seizoensarbeid, gelegenheidsarbeid, Dimona, fytolicentie, interimkantoor.
 *
 * `// ⚖️ check:` = een feit dat de deskundige nakijkt, met de bron. Opgezocht op 30 okt 2026, alleen
 * via zoekresultaten: werk.belgie.be en socialsecurity.be waren in deze sessie niet te openen
 * (netwerk geblokkeerd, 30 okt 2026).
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.kas',
    title: 'Werken in de tuinbouw',
    emoji: '🌱',
    color: '#5a8f29',
    lessons: [
      {
        // Les T.1 · Veilig in serre en veld
        id: 'r.be.l.kas.1',
        title: 'Veilig in serre en veld',
        goal: 'Je beschermt je tegen hitte en spuitmiddelen. Je tilt en bukt zo dat je lichaam gezond blijft.',
        remember: 'Drink op tijd. Een bespoten serre ga je pas in als het mag.',
        // Wie kan je helpen: je leidinggevende of ploegbaas · de arbeidsarts · de preventieadviseur
        //   · Toezicht op het Welzijn op het Werk.
        help: ['leidinggevende', 'arbeidsarts'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.kas.1.sc1',
            picture: 'Piotr in een warme serre tussen hoge tomatenplanten. Hij veegt het zweet van zijn gezicht.',
            lines: [
              'Piotr werkt in een serre bij Sint-Katelijne-Waver.',
              'Hij plukt tomaten.',
              'Buiten is het 30 graden. In de serre is het nog warmer.',
              'Hij wil zijn rij snel afmaken.',
              'Zijn fles water is al leeg.',
            ],
          },
          // ⚖️ check: de werkgever moet je beschermen tegen hitte; boven de actiewaarden krijg je gratis verfrissende drank, en meer pauze (Codex welzijn op het werk, boek V, titel 1 thermische omgevingsfactoren; werk.belgie.be "hitte"; niet geopend 30 okt 2026)
          // ⚖️ check: na het spuiten geldt een wachttijd voor je weer binnen mag; die staat op het etiket van het middel (KB 28 februari 1994 bestrijdingsmiddelen; fytoweb.be; niet geopend)
          // ⚖️ check: professioneel spuiten mag alleen met een fytolicentie (KB 19 maart 2013 duurzaam gebruik van gewasbeschermingsmiddelen; fytolicentie.be; niet geopend)
          {
            kind: 'rule',
            id: 'r.be.l.kas.1.ru1',
            emoji: '🌡️',
            title: 'Drink op tijd. Een bespoten serre ga je pas in als het mag.',
            body: [
              'Je werkgever moet je beschermen tegen hitte.',
              'Drink vaak water, ook als je nog geen dorst hebt.',
              'Spuitmiddelen zijn middelen tegen beestjes en ziektes op de planten.',
              'Is de serre net bespoten? Ga er pas in als het mag.',
              'Spuiten mag je alleen met een opleiding en een fytolicentie.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: de werkgever moet zorgen voor drank, pauzes en een koele plek als het te warm is (Codex boek V, titel 1; werk.belgie.be; kijk ook bij paritair comité 145)
          {
            kind: 'whatdo',
            id: 'r.be.l.kas.1.wd1',
            situation: 'Piotr wordt duizelig. Zijn rij is nog niet af. Wat kan Piotr het beste doen?',
            options: [
              { id: 'a', text: 'Hij maakt eerst zijn rij helemaal af. Daarna gaat hij drinken.', best: false, feedback: 'Dat is logisch. Maar duizelig zijn is een waarschuwing.' },
              { id: 'b', text: 'Hij stopt, drinkt water en zegt het tegen zijn ploegbaas.', best: true, feedback: 'Goed. Zo wordt het niet erger.' },
              { id: 'c', text: 'Hij gaat even op de grond zitten, tussen de planten.', best: false, feedback: 'Even zitten helpt. Maar in de serre blijft het heet.' },
            ],
            why: 'Hitte kan je snel ziek maken. Duizelig, misselijk of hoofdpijn? Stop, drink water en ga naar een koele plek. Zeg het meteen tegen iemand. Je werkgever moet zorgen voor drank, pauzes en een koele plek.',
          },
          // ⚖️ check: na het spuiten geldt een wachttijd; pas daarna mag je weer naar binnen (etiket van het middel; KB 28 februari 1994; fytoweb.be)
          {
            kind: 'truefalse',
            id: 'r.be.l.kas.1.tf1',
            statement: 'Ruik je niets? Dan kan je een bespoten serre veilig in.',
            answer: false,
            why: 'Veel spuitmiddelen ruik je niet. Na het spuiten geldt een wachttijd. Pas daarna mag je weer naar binnen. Vaak hangt er een bordje op de deur. Je leidinggevende weet wanneer het weer mag.',
          },
          // ⚖️ check: de werkgever moet het tillen en bukken beperken (Codex boek VIII, titel 3 manueel hanteren van lasten; werk.belgie.be; niet geopend)
          {
            kind: 'whatdo',
            id: 'r.be.l.kas.1.wd2',
            situation: 'Piotr tilt de hele dag bakken. Ze staan op de grond. Wat kan Piotr het beste doen?',
            options: [
              { id: 'a', text: 'Hij tilt ze snel met een ruk. Dan is hij eerder klaar.', best: false, feedback: 'Een ruk is zwaar voor zijn rug. Zo kan hij zich bezeren.' },
              { id: 'b', text: 'Hij stapelt de bakken zo hoog als hij kan.', best: false, feedback: 'Een hoge stapel is zwaar en kan omvallen.' },
              { id: 'c', text: 'Hij buigt zijn knieën en houdt de bak dicht bij zich.', best: true, feedback: 'Goed. Zo spaart hij zijn rug.' },
            ],
            why: 'Til met gebogen knieën en een rechte rug. Houd de bak dicht bij je lichaam. Draai niet met je rug terwijl je tilt. Veel bukken of tillen? Vraag om een kar, of wissel af met ander werk. Je werkgever moet zorgen dat het werk niet te zwaar is.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.kas.1.wa1',
            question: 'Je moet werken in een serre die vanochtend bespoten is. Er hangt een bordje op de deur. Wie vraag je het eerst?',
            options: [
              { id: 'a', who: 'collega', best: false, feedback: 'Een collega weet het misschien. Maar je leidinggevende weet het zeker.' },
              { id: 'b', who: 'leidinggevende', best: true, feedback: 'Goed. Je leidinggevende weet wanneer je weer naar binnen mag.' },
              { id: 'c', who: 'huisarts', best: false, feedback: 'De huisarts helpt als je klachten hebt. Voorkom het liever.' },
            ],
            why: 'Je leidinggevende weet wanneer de wachttijd voorbij is. Krijg je geen duidelijk antwoord? Vraag het de preventieadviseur of de vakbond.',
          },
          { kind: 'model', id: 'r.be.l.kas.1.mo1', context: 'Je ziet een bordje op de deur van de serre.', nl: 'Er hangt een bordje op de deur. Mag ik al naar binnen?' },
        ],
      },
      {
        // Les T.2 · Seizoenswerk en je loon
        id: 'r.be.l.kas.2',
        title: 'Seizoenswerk en je loon',
        goal: 'Je weet wat gelegenheidsarbeid is. Je weet dat je minstens het barema krijgt, ook bij stukloon.',
        remember: 'Ook bij seizoenswerk krijg je minstens het barema per uur.',
        // Wie kan je helpen: je werkgever of je interimkantoor · de vakbond · Toezicht op de Sociale
        //   Wetten (loon, uren, contract).
        help: ['interimkantoor', 'vakbond', 'tsw'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.kas.2.sc1',
            picture: 'Esra bij een sorteerband met paprika’s. Naast haar staan volle bakken.',
            lines: [
              'Esra werkt in de zomer bij een tuinbouwbedrijf.',
              'Ze is gelegenheidsarbeider. Ze werkt per dag.',
              'Ze krijgt geld per bak. Dat heet stukloon.',
              'Op haar loonbrief staat weinig loon.',
            ],
          },
          // ⚖️ check: de tuinbouw valt onder paritair comité 145; dat legt de barema's vast (werk.belgie.be, PC 145; securex.be "gelegenheidsarbeider in de tuinbouwsector"; zoekresultaat 30 okt 2026)
          // ⚖️ check: een gelegenheidsarbeider in de tuinbouw werkt per dag, met een beperkt aantal dagen per jaar (100 dagen per kalenderjaar sinds 1 juli 2023; vroeger 65), met minder RSZ; de werkgever doet per dag een Dimona-aangifte (securex.be, bijgewerkt januari 2026; socialsecurity.be DmfA 2024-2 noemt nog 65 dagen; zoekresultaat) — TWIJFEL: 100 of 65 dagen nakijken; het getal staat daarom niet in de les
          // ⚖️ check: ook bij stukloon moet je per uur minstens het barema van je paritair comité krijgen (cao's PC 145, minimumlonen; Loonbeschermingswet 12 april 1965; zoekresultaat) — nakijken hoe PC 145 stukloon regelt
          // ⚖️ check: de werkgever mag niet zomaar iets van je loon afhouden (Loonbeschermingswet art. 23)
          {
            kind: 'rule',
            id: 'r.be.l.kas.2.ru1',
            emoji: '⏱️',
            title: 'Ook bij seizoenswerk krijg je minstens het barema per uur.',
            body: [
              'Gelegenheidsarbeid is werk per dag, een beperkt aantal dagen per jaar.',
              'In de tuinbouw maakt paritair comité 145 de afspraken over loon.',
              'Ook bij stukloon krijg je minstens het barema voor elk uur.',
              'Schrijf elke dag je uren en je bakken op.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: ook bij stukloon minstens het barema per uur (PC 145); geen bedrag: de barema's staan op werk.belgie.be (minimumlonen per paritair comité)
          {
            kind: 'whatdo',
            id: 'r.be.l.kas.2.wd1',
            situation: 'Esra werkt 8 uur per dag. Haar loon is veel lager dan het barema voor 8 uur. Wat kan Esra het beste doen?',
            options: [
              { id: 'a', text: 'Ze laat haar eigen lijst met uren zien, en vraagt om uitleg.', best: true, feedback: 'Goed. Met haar lijst laat ze zien wat ze heeft gedaan.' },
              { id: 'b', text: 'Ze zegt niets. Bij stukloon is weinig loon in het begin normaal.', best: false, feedback: 'Dat snap ik. Maar ook bij stukloon geldt het barema per uur.' },
              { id: 'c', text: 'Ze gaat sneller werken en slaat haar pauzes over.', best: false, feedback: 'Ik snap het. Maar pauzes heeft ze nodig, en haar loon moet nu al kloppen.' },
            ],
            why: 'Ook bij stukloon moet je per uur minstens het barema krijgen. Het barema staat op de website van de FOD Werk. Klopt je loon niet? Vraag om uitleg. Krijg je geen goed antwoord? Vraag hulp bij de vakbond.',
          },
          // ⚖️ check: de werkgever doet voor elke dag een Dimona-aangifte; zonder Dimona ben je niet aangegeven (socialsecurity.be "Dimona"; securex.be "waarom deze verplichting"; zoekresultaat)
          {
            kind: 'truefalse',
            id: 'r.be.l.kas.2.tf1',
            statement: 'Als gelegenheidsarbeider moet je werkgever je elke dag aangeven.',
            answer: true,
            why: 'Je werkgever meldt elke werkdag bij de RSZ. Dat heet een Dimona-aangifte. Zo ben je verzekerd en tellen je dagen. Schrijf zelf ook je dagen en uren op. Dan kan je je loonbrief nakijken.',
          },
          // ⚖️ check: op je loonbrief staat wat er van je loon af gaat, en waarom; afhoudingen mogen alleen zoals de wet zegt (Loonbeschermingswet art. 15 en 23)
          // ⚖️ check: huisvesting via de werkgever staat vaak als "voordeel in natura" of als afhouding op de loonbrief (socialsecurity.be, voordelen in natura; zoekresultaat) — nakijken
          {
            kind: 'whatdo',
            id: 'r.be.l.kas.2.wd2',
            situation: 'Esra woont in een huis van haar werkgever. Elke week gaat er veel geld van haar loon af. Ze weet niet waarvoor. Wat kan Esra het beste doen?',
            options: [
              { id: 'a', text: 'Ze zegt niets. Anders raakt ze misschien haar kamer kwijt.', best: false, feedback: 'Dat snap ik. Maar ze mag altijd vragen waar het geld voor is.' },
              { id: 'b', text: 'Ze vraagt haar werkgever wat er van haar loon af gaat.', best: true, feedback: 'Goed. Zo weet ze waar ze voor betaalt.' },
              { id: 'c', text: 'Ze stopt meteen met werken en zoekt een ander huis.', best: false, feedback: 'Dat is een grote stap. Eerst vragen is beter.' },
            ],
            why: 'Op je loonbrief staat wat er van je loon af gaat. En waarom. Je baas mag niet zomaar iets afhouden. Begrijp je het niet? Vraag het na. Een vakbond kan je loonbrief ook nakijken.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.kas.2.wa1',
            question: 'Je loon is lager dan het barema. Je werkgever doet er niets aan. Wie kan dit controleren?',
            options: [
              { id: 'a', who: 'huisarts', best: false, feedback: 'De huisarts helpt bij je gezondheid, niet bij je loon.' },
              { id: 'b', who: 'gemeente', best: false, feedback: 'De gemeente helpt bij veel dingen. Maar je loon controleert iemand anders.' },
              { id: 'c', who: 'tsw', best: true, feedback: 'Goed. Zij controleren of je genoeg loon krijgt.' },
            ],
            why: 'Toezicht op de Sociale Wetten controleert loon, uren en contracten. Je kan daar een klacht indienen. Ook de vakbond helpt je.',
          },
          { kind: 'model', id: 'r.be.l.kas.2.mo1', context: 'Je wilt je uren vergelijken met je loonbrief.', nl: 'Ik heb mijn uren en bakken opgeschreven. Klopt mijn loon?' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.kas.1.mo1': [
      { text: 'Er hangt een bordje op de deur. Dat lees ik straks wel.', feedback: 'Het bordje kan zeggen dat de serre net bespoten is. Vraag het eerst.' },
      { text: 'Ik ga gewoon naar binnen. Het is maar een bordje.', feedback: 'Dan kun je ziek worden van de spuitmiddelen. Vraag of het al mag.' },
    ],
    'r.be.l.kas.2.mo1': [
      { text: 'Mijn loon is vast wel goed. Ik kijk er niet naar.', feedback: 'Dan zie je een fout niet. Vergelijk je uren met je loonbrief.' },
      { text: 'Mijn loon is te laag! Jullie betalen altijd te weinig.', feedback: 'Dat klinkt boos. Laat je lijst zien en vraag of het klopt.' },
    ],
  },
  advice: {
    'r.be.l.kas.1.ru1': 'advice',
    'r.be.l.kas.2.ru1': 'advice',
  },
  kun: [
    ['Ik kan vragen of ik een bespoten serre in mag.', '1F', 'gesprekken'],
    ['Ik kan mijn uren vergelijken met mijn loonbrief.', '1F', 'lezen'],
  ],
};
