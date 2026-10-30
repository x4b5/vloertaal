import type { BeUnit } from '../types';

/**
 * Sector productie (België) · Werken in de productie: de Belgische versie van factoryUnit in
 * src/content/regels/units/sector.ts (les P.1, P.2). Zelfde lessen, met "r.be." vooraan
 * (docs/werkregels-belgie.md). Vlaamse woorden: ploegenpremie, nachtpremie, paritair comité,
 * loonbrief, preventieadviseur.
 *
 * `// ⚖️ check:` = een feit dat de deskundige nakijkt, met de bron. Opgezocht op 30 okt 2026, via
 * zoekresultaten: werk.belgie.be was in deze sessie niet te openen (netwerk geblokkeerd, 30 okt
 * 2026).
 * Redactie: de les noemt geen bedrag voor de ploegen- of nachtpremie. Dat verschilt per paritair
 *   comité en per bedrijf, en een bron per sector was er niet.
 * Redactie: de Nederlandse regel "14 uur rust na een nachtdienst die na 2 uur stopt" staat niet in
 *   de Belgische les. In de Belgische bronnen vond ik alleen de 11 uur van art. 38ter.
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.factory',
    title: 'Werken in de productie',
    emoji: '🏭',
    color: '#6b6f80',
    lessons: [
      {
        // Les P.1 · Machines en lock-out
        id: 'r.be.l.factory.1',
        title: 'Machines en lock-out',
        goal: 'Je grijpt nooit in een draaiende machine. Je weet wat lock-out is.',
        remember: 'Grijp nooit in een draaiende machine. Eerst moet hij stil.',
        // Wie kan je helpen: je ploegbaas of leidinggevende · de technische dienst · de
        //   preventieadviseur · een vakbond · Toezicht op het Welzijn op het Werk.
        help: ['leidinggevende', 'vakbond'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.factory.1.sc1',
            picture: 'Sanne bij een verpakkingsmachine. Een doos zit vast. Ploegbaas Jan komt aanlopen.',
            lines: [
              'Sanne werkt in een fabriek bij een verpakkingsmachine.',
              'Er zit een doos vast.',
              'De machine draait nog.',
              'Ze wil de doos er snel uit trekken.',
              'Dan roept ploegbaas Jan: "Wacht!"',
            ],
          },
          // ⚖️ check: de werkgever zorgt voor veilige arbeidsmiddelen met beschermkappen en een noodstop; beveiligingen mag je niet weghalen of uitzetten (codex boek IV titel 2, arbeidsmiddelen; Welzijnswet art. 6)
          // ⚖️ check: bij onderhoud of een storing gaat de machine uit en krijgt de schakelaar een slot (lock-out, tag-out); goede praktijk, onderdeel van de risicoanalyse (codex boek IV; prevent.be; nakijken)
          {
            kind: 'rule',
            id: 'r.be.l.factory.1.ru1',
            emoji: '⚙️',
            title: 'Grijp nooit in een draaiende machine. Eerst moet hij stil.',
            body: [
              'Grijp nooit in een machine die draait.',
              'Weet waar de noodstop zit, vóór je begint.',
              'Bij onderhoud gaat er een slot op de schakelaar: lock-out.',
              'Haal nooit een kap of beveiliging weg.',
            ],
            rule: 'geschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.factory.1.wd1',
            situation: 'De doos zit vast, en de band draait nog. Wat kan Sanne het beste doen?',
            options: [
              { id: 'a', text: 'Ze trekt de doos er snel uit. Het duurt maar een seconde.', best: false, feedback: 'Een seconde is genoeg voor een zwaar ongeval.' },
              { id: 'b', text: 'Ze drukt op de noodstop, en ze roept Jan.', best: true, feedback: 'Goed. Eerst moet de machine echt stilstaan.' },
              { id: 'c', text: 'Ze duwt de doos los met een stuk karton.', best: false, feedback: 'Ook dan komt ze dicht bij de machine. Niet doen.' },
            ],
            why: 'Grijp nooit in een machine die draait. Ook niet even. Druk op de noodstop als dat nodig is. Weet waar de noodstop zit, vóór je begint.',
          },
          // ⚖️ check: lock-out: de machine gaat op slot met een kaartje van wie eraan werkt; je haalt nooit het slot van een ander weg (codex boek IV; prevent.be; goede praktijk, nakijken)
          {
            kind: 'truefalse',
            id: 'r.be.l.factory.1.tf1',
            statement: 'Lock-out betekent: de machine gaat op slot, zodat niemand hem aanzet.',
            answer: true,
            why: 'Bij onderhoud of een storing gaat de machine uit. Dan gaat er een slot op de schakelaar. Met een kaartje: wie eraan werkt. Zo kan niemand hem per ongeluk aanzetten. Haal nooit het slot van een ander eraf.',
          },
          // ⚖️ check: beschermkappen nooit weghalen of uitzetten; de werkgever zorgt dat machines veilig zijn (Welzijnswet art. 6; codex boek IV titel 2)
          {
            kind: 'whatdo',
            id: 'r.be.l.factory.1.wd2',
            situation: 'Een kap van de machine is kapot. Zonder kap gaat het werk sneller. Wat kan Sanne het beste doen?',
            options: [
              { id: 'a', text: 'Ze werkt door zonder kap. Ze let extra goed op.', best: false, feedback: 'Dat is logisch. Maar de kap is er voor haar handen.' },
              { id: 'b', text: 'Ze plakt de kap met tape vast, en werkt door.', best: false, feedback: 'Goed bedoeld. Maar zo is het niet veilig genoeg.' },
              { id: 'c', text: 'Ze stopt, en ze meldt de kapotte kap bij Jan.', best: true, feedback: 'Goed. Een machine zonder goede beveiliging is gevaarlijk.' },
            ],
            why: 'Een kap of hek op een machine beschermt je. Haal die nooit weg, en zet die niet uit. Is er iets kapot? Meld het meteen. Je werkgever moet zorgen dat machines veilig zijn.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.factory.1.wa1',
            question: 'Je weet niet waar de noodstop van je machine zit. Wie vraag je het?',
            options: [
              { id: 'a', who: 'hr', best: false, feedback: 'De personeelsdienst weet vaak niet hoe de machines werken.' },
              { id: 'b', who: 'vakbond', best: false, feedback: 'Een vakbond helpt bij je rechten. Dit vraag je op de vloer.' },
              { id: 'c', who: 'leidinggevende', best: true, feedback: 'Goed. Je ploegbaas of leidinggevende laat het je zien.' },
            ],
            why: 'Vraag uitleg over de machine vóór je begint. Vraag het aan je ploegbaas of leidinggevende.',
          },
          { kind: 'model', id: 'r.be.l.factory.1.mo1', context: 'Er zit iets vast in de machine.', nl: 'Jan, er zit een doos vast. Ik heb de noodstop ingedrukt.' },
        ],
      },
      {
        // Les P.2 · Ploegendienst en nachtwerk
        id: 'r.be.l.factory.2',
        title: 'Ploegendienst en nachtwerk',
        goal: 'Je kent de rustregels tussen twee diensten. Je weet waar de ploegenpremie staat.',
        remember: 'Na je dienst heb je recht op genoeg rust.',
        // Wie kan je helpen: je ploegbaas of leidinggevende · de personeelsdienst · een vakbond ·
        //   Toezicht op de Sociale Wetten (bij te weinig rust of te lange uren).
        help: ['leidinggevende', 'hr', 'vakbond', 'tsw'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.factory.2.sc1',
            picture: 'Mohammed bij de prikklok van een fabriek. De klok zegt 6.00. Buiten is het donker.',
            lines: [
              'Mohammed werkt in ploegen in een fabriek.',
              'Deze week heeft hij nachtdienst.',
              "Zijn dienst stopt om 6 uur 's ochtends.",
              'Dan vraagt ploegbaas Jan: "Kun je vanmiddag om 2 uur terugkomen?"',
            ],
          },
          // ⚖️ check: tussen 2 dagelijkse arbeidsprestaties minstens 11 opeenvolgende uren rust (Arbeidswet 16 maart 1971, art. 38ter §1; werk.belgie.be "rusttijden"; zoekresultaat)
          // ⚖️ check: nachtarbeid = arbeid tussen 20 uur en 6 uur, dus van 8 uur 's avonds tot 6 uur 's ochtends (Arbeidswet art. 35; securex.be "wat zijn de uurgrenzen van nachtarbeid"; zoekresultaat)
          // ⚖️ check: een ploegenpremie of nachtpremie staat niet in de wet, maar in een cao van het paritair comité of van het bedrijf (sectorbrochures ACV/ABVV; nakijken; geen bedrag in de les)
          {
            kind: 'rule',
            id: 'r.be.l.factory.2.ru1',
            emoji: '🌙',
            title: 'Na je dienst heb je recht op genoeg rust.',
            body: [
              'Tussen 2 diensten heb je meestal minstens 11 uur rust.',
              'Nachtwerk is werk tussen 20 uur en 6 uur.',
              'Een nachtpremie of ploegenpremie staat in de afspraken van je sector.',
              'Moe werken bij machines is gevaarlijk.',
            ],
            rule: 'geschreven',
          },
          // ⚖️ check: minstens 11 uur rust tussen 2 diensten; korter alleen in een paar gevallen, bv. bij overmacht of een defecte machine (Arbeidswet art. 38ter §1 en §2; zoekresultaat)
          // ⚖️ check: een cao die algemeen verbindend is verklaard, kan in sommige sectoren afwijken (Arbeidswet art. 38ter; nakijken)
          {
            kind: 'truefalse',
            id: 'r.be.l.factory.2.tf1',
            statement: 'Na een nachtdienst mag je na 3 uur weer werken.',
            answer: false,
            why: 'Tussen 2 diensten heb je meestal minstens 11 uur rust. Dat staat in de Arbeidswet. Soms mag het korter, bijvoorbeeld bij een defecte machine. Kijk ook in de afspraken van je sector.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.factory.2.wd1',
            situation: 'Jan vraagt Mohammed om vanmiddag terug te komen. Wat kan Mohammed het beste doen?',
            options: [
              { id: 'a', text: 'Hij zegt ja. Hij slaapt straks wel een paar uur.', best: false, feedback: 'Dat snap ik. Maar moe werken bij machines is gevaarlijk.' },
              { id: 'b', text: 'Hij zegt: "Te kort na mijn nacht. Morgen wel."', best: true, feedback: 'Goed. Zijn rust is ook voor zijn veiligheid.' },
              { id: 'c', text: 'Hij komt, en hij drinkt de hele dag energiedrank.', best: false, feedback: 'Dat helpt even. Maar hij blijft moe en traag.' },
            ],
            why: 'Rust heb je echt nodig. Moe werken geeft fouten en ongevallen. Zeg rustig nee, en bied een ander moment aan. Slaap overdag in een donkere, stille kamer.',
          },
          // ⚖️ check: hoeveel ploegenpremie of nachtpremie je krijgt, staat in de cao van het paritair comité of van het bedrijf; het nummer van het paritair comité staat meestal op de loonbrief (hetacv.be "je loonbrief"; zie ook be/units/loon.ts)
          {
            kind: 'whatdo',
            id: 'r.be.l.factory.2.wd2',
            situation: 'Op Mohammeds loonbrief staat "ploegenpremie". Hij weet niet hoeveel het moet zijn. Wat kan Mohammed het beste doen?',
            options: [
              { id: 'a', text: 'Hij zoekt het op bij zijn paritair comité.', best: true, feedback: 'Goed. Daar staat hoeveel premie hij krijgt.' },
              { id: 'b', text: 'Hij vraagt het aan een vriend uit een andere fabriek.', best: false, feedback: 'Kan. Maar die valt misschien onder een ander paritair comité.' },
              { id: 'c', text: 'Hij denkt: de wet zegt vast hoeveel het is.', best: false, feedback: 'Nee. De premie staat niet in de wet.' },
            ],
            why: 'Een ploegenpremie is extra loon voor werk in ploegen. Een nachtpremie is extra loon voor werk in de nacht. Hoeveel je krijgt, staat in de afspraken van je paritair comité. Of in de afspraken van je bedrijf. Het nummer van je paritair comité staat op je loonbrief.',
          },
          {
            kind: 'whoask',
            id: 'r.be.l.factory.2.wa1',
            question: 'Je wilt weten wat je sector zegt over ploegenpremie. Wie kan het uitleggen?',
            options: [
              { id: 'a', who: 'arbeidsarts', best: false, feedback: 'De arbeidsarts gaat over je gezondheid, niet over je loon.' },
              { id: 'b', who: 'rva', best: false, feedback: 'De RVA gaat over werkloosheid, niet over je premie.' },
              { id: 'c', who: 'vakbond', best: true, feedback: 'Goed. Een vakbond kent de afspraken van je sector.' },
            ],
            why: 'Een vakbond maakt de afspraken in het paritair comité mee. Je loonbrief kijk je na bij de personeelsdienst.',
          },
          { kind: 'model', id: 'r.be.l.factory.2.mo1', context: 'Je moet te snel na je nachtdienst terugkomen.', nl: 'Ik heb net nachtdienst gehad. Ik heb eerst rust nodig.' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.factory.1.mo1': [
      { text: 'Jan, de machine doet raar. Ik trek de doos er even uit.', feedback: 'Niet doen. Eerst moet de machine stil.' },
      { text: 'Jan, er is iets mis. Ik weet niet wat.', feedback: 'Zeg wat er vastzit, en dat je de noodstop indrukte.' },
    ],
    'r.be.l.factory.2.mo1': [
      { text: 'Oké, ik kom wel. Ik slaap straks een uurtje.', feedback: 'Te weinig rust is gevaarlijk. Je mag nee zeggen.' },
      { text: 'Nee! U mag mij dat echt niet vragen, hoor!', feedback: 'Dat klinkt boos. Zeg rustig dat je rust nodig hebt.' },
    ],
  },
  advice: {
    'r.be.l.factory.1.ru1': 'advice',
    'r.be.l.factory.2.ru1': 'advice',
  },
  kun: [
    ['Ik kan uitleggen waarom een machine eerst stil moet.', '1F', 'spreken'],
    ['Ik kan zeggen dat ik eerst rust nodig heb na mijn dienst.', '1F', 'gesprekken'],
  ],
};
