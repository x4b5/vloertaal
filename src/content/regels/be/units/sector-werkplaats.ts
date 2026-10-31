import type { BeUnit } from '../types';

/**
 * Sector garage (België) · Werken in de garage: de Belgische versie van de sectorunit r.werkplaats
 * (src/content/regels/units/sector.ts, `werkplaatsUnit`). Grotendeels dezelfde regels; anders zijn
 * de labels, het afval (VLAREMA) en het loon: paritair comité 112. Vlaamse woorden: brug, bokken,
 * werkorder, rijbewijs, mentor.
 *
 * `// ⚖️ check:` = een feit dat de deskundige nakijkt, met de bron. Opgezocht op 30 okt 2026, alleen
 * via zoekresultaten: werk.belgie.be en ovam.be waren in deze sessie niet te openen (netwerk
 * geblokkeerd, 30 okt 2026).
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.werkplaats',
    title: 'Werken in de garage',
    emoji: '🚗',
    color: '#9c4a2f',
    lessons: [
      {
        // Les M.1 · Veilig in de werkplaats
        id: 'r.be.l.werkplaats.1',
        title: 'Veilig in de werkplaats',
        goal: 'Je gaat alleen onder een auto die goed vaststaat. Je ruimt olie meteen op.',
        remember: 'Onder een auto? Alleen als hij goed vaststaat, op de brug of op bokken.',
        // Wie kan je helpen: je chef in de werkplaats · je mentor · de preventieadviseur.
        help: ['leidinggevende', 'praktijkopleider'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.werkplaats.1.sc1',
            picture: 'Malik in een garage. Een auto staat omhoog op een krik. Naast de auto ligt een plas olie.',
            lines: [
              'Malik is 17. Hij loopt stage in een garage.',
              'Een auto staat omhoog op een krik.',
              'Malik moet eronder kijken of er iets lekt.',
              'Naast de auto ligt een plas olie.',
            ],
          },
          // ⚖️ check: een krik is alleen om te heffen; onder een auto ga je pas als hij op de brug of op bokken staat (Codex welzijn op het werk, boek IV arbeidsmiddelen; handleiding van de krik; EN 1494; niet geopend 30 okt 2026)
          // ⚖️ check: afgewerkte olie, accu's en vuile poetsdoeken zijn gevaarlijk afval; apart houden en afgeven aan een erkende inzamelaar (VLAREMA; ovam.be "afvalolie"; zoekresultaat)
          {
            kind: 'rule',
            id: 'r.be.l.werkplaats.1.ru1',
            emoji: '🛠️',
            title: 'Onder een auto? Alleen als hij goed vaststaat, op de brug of op bokken.',
            body: [
              'Een krik is alleen om de auto op te heffen.',
              'Staat de auto op de brug of op bokken? Pas dan ga je eronder.',
              'Gemorste olie ruim je meteen op. Dan glijdt niemand uit.',
              "Oude olie, batterijen en vuile doeken zijn gevaarlijk afval. Die gaan apart.",
            ],
            rule: 'geschreven',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.werkplaats.1.wd1',
            situation: 'Malik wil snel onder de auto kijken. Wat kan Malik het beste doen?',
            options: [
              { id: 'a', text: 'Hij kruipt er snel onder. Het duurt maar even.', best: false, feedback: 'Dat is logisch. Maar een krik kan wegzakken.' },
              { id: 'b', text: 'Hij zet een tweede krik naast de eerste.', best: false, feedback: 'Goed bedoeld. Maar ook twee krikken staan niet vast.' },
              { id: 'c', text: 'Hij vraagt of de auto eerst op bokken kan.', best: true, feedback: 'Goed. Op bokken staat de auto vast.' },
            ],
            why: 'Een krik is alleen om de auto op te heffen. Een krik kan wegzakken of wegglijden. Staat de auto op de brug of op bokken? Pas dan ga je eronder. Weet je niet hoe dat moet? Vraag het eerst.',
          },
          // ⚖️ check: gemorste olie meteen opruimen, met absorptiekorrels; vuile doeken bij het gevaarlijk afval (Codex boek III, arbeidsplaatsen: vloeren zonder glijgevaar; VLAREMA)
          {
            kind: 'truefalse',
            id: 'r.be.l.werkplaats.1.tf1',
            statement: 'Gemorste olie op de vloer ruim je meteen op.',
            answer: true,
            why: 'Olie op de vloer is erg glad. Iemand kan uitglijden en vallen. Ruim het meteen op, met korrels of een doek. De vuile doeken gaan in de bak voor gevaarlijk afval.',
          },
          // ⚖️ check: afgewerkte olie, remvloeistof en batterijen zijn gevaarlijk afval; lozen in de riolering of de put mag niet (VLAREMA; Vlarem II; ovam.be; zoekresultaat)
          {
            kind: 'whatdo',
            id: 'r.be.l.werkplaats.1.wd2',
            situation: 'Malik heeft oude olie uit een auto gehaald. Wat kan Malik het beste doen?',
            options: [
              { id: 'a', text: 'Hij giet de olie in de put buiten.', best: false, feedback: 'Dan komt de olie in het water. Dat mag niet.' },
              { id: 'b', text: 'Hij doet de olie in een fles, bij het restafval.', best: false, feedback: 'Olie is gevaarlijk afval. Dat hoort niet bij het restafval.' },
              { id: 'c', text: 'Hij giet de olie in het vat voor oude olie.', best: true, feedback: 'Goed. Een erkend bedrijf haalt de olie dan veilig op.' },
            ],
            why: 'Oude olie, remvloeistof en batterijen zijn gevaarlijk afval. Ze gaan niet in de put, en niet bij het restafval. In de garage staan aparte vaten en bakken. Vraag waar ze staan.',
          },
          { kind: 'model', id: 'r.be.l.werkplaats.1.mo1', context: 'De auto staat alleen op een krik.', nl: 'De auto staat nog op de krik. Kunnen we hem eerst op bokken zetten?' },
        ],
      },
      {
        // Les M.2 · De werkorder, de klant en je loon
        id: 'r.be.l.werkplaats.2',
        title: 'De werkorder en de klant',
        goal: 'Je leest wat er op de werkorder staat. Extra werk doe je alleen als de klant ja zegt.',
        remember: 'Extra werk? Eerst moet de klant ja zeggen.',
        // Wie kan je helpen: je chef of de receptie van de garage (die belt de klant) · je mentor ·
        //   de vakbond (loon in paritair comité 112).
        help: ['leidinggevende', 'praktijkopleider', 'vakbond'],
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.werkplaats.2.sc1',
            picture: 'Kevin in een garage bij een auto op de brug. In zijn hand een werkorder.',
            lines: [
              'Kevin werkt in een garage.',
              'Een klant brengt haar auto voor nieuwe banden.',
              'Kevin ziet ook dat de remmen bijna versleten zijn.',
              'De klant is al naar haar werk.',
            ],
          },
          // ⚖️ check: meer werk dan afgesproken alleen na akkoord van de klant (gedragscode en algemene voorwaarden van de sector, Traxio; Burgerlijk Wetboek, aanneming; niet geopend 30 okt 2026) — TWIJFEL: Belgische bron nakijken
          // ⚖️ check: op de openbare weg rijden mag alleen met een geldig rijbewijs (Wegverkeerswet 16 maart 1968, art. 30; KB 23 maart 1998 rijbewijs)
          {
            kind: 'rule',
            id: 'r.be.l.werkplaats.2.ru1',
            emoji: '📋',
            title: 'Extra werk? Eerst moet de klant ja zeggen.',
            body: [
              'Op de werkorder staat wat de klant wil.',
              'Zie je nog iets wat kapot is? Schrijf het op, en zeg het.',
              'Doe extra werk pas als de klant ja zegt. De garage belt de klant eerst.',
              'Een proefrit maak je alleen als het mag, en met een rijbewijs.',
            ],
            rule: 'geschreven',
          },
          // Redactie: een werkorder als voorbeeld, geen echte klant.
          {
            kind: 'card',
            id: 'r.be.l.werkplaats.2.ca1',
            card: {
              type: 'werkbon',
              title: 'Werkorder',
              rows: [
                { label: 'Klant', value: 'mevrouw Peeters, haalt de auto op om 17 uur' },
                { label: 'Opdracht', value: '4 nieuwe winterbanden', hit: true },
                { label: 'Opmerking', value: 'Extra werk? Eerst de klant bellen.' },
              ],
            },
            question: 'Wat doet Kevin vandaag aan de auto?',
            options: [
              { id: 'a', text: '4 nieuwe banden, en ook de remmen.', best: false, feedback: 'De remmen staan niet op de werkorder. Eerst moet de klant ja zeggen.' },
              { id: 'b', text: '4 winterbanden. De remmen meldt hij.', best: true, feedback: 'Goed. Dat staat op de werkorder.' },
              { id: 'c', text: 'Alleen de remmen. Dat is belangrijker.', best: false, feedback: 'De klant vroeg om banden. Over de remmen beslist de klant.' },
            ],
            why: 'Op de werkorder staat wat de klant wil. Zie je nog iets wat kapot is? Schrijf het op, en zeg het. De garage belt de klant. Pas als de klant ja zegt, doe je het extra werk.',
          },
          // ⚖️ check: zonder akkoord hoeft de klant extra werk meestal niet te betalen (Traxio-voorwaarden; Burgerlijk Wetboek; niet geopend) — TWIJFEL
          {
            kind: 'truefalse',
            id: 'r.be.l.werkplaats.2.tf1',
            statement: 'Een klant betaalt ook voor extra werk als ze geen ja zei.',
            answer: false,
            why: 'Extra werk doe je pas als de klant ja zegt. Anders hoeft de klant er meestal niet voor te betalen. Daarom belt de garage de klant eerst. Schrijf op wat de klant zei, en wanneer.',
          },
          // ⚖️ check: arbeiders in een garage vallen onder paritair comité 112 (garagebedrijf); dat maakt de afspraken over loon en barema's (KB 1 juli 1974, gewijzigd 7 mei 2007; securex.be "PC 112.000 toepassingsgebied"; aclvb.be cao-gids PC 112; zoekresultaat 30 okt 2026)
          // ⚖️ check: bedienden in een garage vallen meestal onder een ander paritair comité (PC 200) (securex.be; zoekresultaat) — nakijken
          {
            kind: 'truefalse',
            id: 'r.be.l.werkplaats.2.tf2',
            statement: 'Voor garages maakt paritair comité 112 de afspraken over loon.',
            answer: true,
            why: 'Elke sector heeft een paritair comité. Voor arbeiders in garages is dat paritair comité 112. Daar staan de barema\'s: het minimumloon per functie. Het nummer staat meestal op je loonbrief.',
          },
          // ⚖️ check: op de openbare weg rijden mag alleen met een geldig rijbewijs (Wegverkeerswet art. 30)
          {
            kind: 'whatdo',
            id: 'r.be.l.werkplaats.2.wd1',
            situation: 'De chef zegt: "Maak even een proefrit." Kevin heeft nog geen rijbewijs. Wat kan Kevin het beste doen?',
            options: [
              { id: 'a', text: 'Hij rijdt alleen een klein rondje om het blok.', best: false, feedback: 'Ook dat rondje is op de openbare weg. Zonder rijbewijs mag dat niet.' },
              { id: 'b', text: 'Hij rijdt, en vraagt een collega om naast hem te zitten.', best: false, feedback: 'Ook met een collega naast hem mag hij niet rijden.' },
              { id: 'c', text: 'Hij zegt eerlijk dat hij geen rijbewijs heeft.', best: true, feedback: 'Goed. Dan maakt een collega de proefrit.' },
            ],
            why: 'Op de openbare weg mag je alleen rijden met een rijbewijs. Ook voor een kort rondje. Zeg het eerlijk als je geen rijbewijs hebt. Een proefrit maak je ook alleen als je chef het vraagt.',
          },
          { kind: 'model', id: 'r.be.l.werkplaats.2.mo1', context: 'Je ziet extra werk aan een auto.', nl: 'De remmen zijn bijna versleten. Wil je de klant even bellen?' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.werkplaats.1.mo1': [
      { text: 'Het is maar even. Ik kruip er gewoon snel onder.', feedback: 'Een krik kan wegzakken. Vraag eerst om bokken.' },
      { text: 'Ik ga niet onder die auto. Doe het zelf maar!', feedback: 'Dat klinkt boos. Zeg liever wat er nodig is.' },
    ],
    'r.be.l.werkplaats.2.mo1': [
      { text: 'De remmen zijn bijna versleten. Ik doe ze er meteen bij.', feedback: 'Eerst moet de klant ja zeggen. Meld het eerst.' },
      { text: 'Ik zag iets aan de remmen. Maar goed, niet mijn werk.', feedback: 'Dan hoort de klant het niet. Vraag of iemand haar belt.' },
    ],
  },
  advice: {
    'r.be.l.werkplaats.1.ru1': 'advice',
    'r.be.l.werkplaats.2.ru1': 'advice',
  },
};
