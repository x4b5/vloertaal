import type { RuleUnit } from '../types';

/**
 * Unit 2 · Je eerste dag (les 2.1–2.3).
 * Converted from docs/werkregels-curriculum.md; edit the curriculum first, then this file.
 * `// ⚖️ check:` marks a fact the expert must check (docs/werkregels-bronnen.md). The marker is
 * never shown or read aloud. `// Redactie:` notes are for the makers only.
 */
export const startUnit: RuleUnit = {
  id: 'r.start',
  title: 'Je eerste dag',
  emoji: '👋',
  color: '#ff7a00',
  lessons: [
    {
      // Les 2.1 · Op tijd en goed voorbereid
      id: 'r.l.start.1',
      title: 'Op tijd en goed voorbereid',
      goal: 'Je weet wat je meeneemt en wat "op tijd" hier betekent. Je weet wat je doet als je te laat bent.',
      remember: 'Te laat? Bel of app vóór je dienst begint.',
      steps: [
        {
          kind: 'scene',
          id: 'r.l.start.1.sc1',
          picture: 'Dewi bij de voordeur. In haar hand: een tas, haar ID-kaart en een broodtrommel.',
          lines: [
            'Dewi begint morgen in een verzorgingshuis.',
            'Haar dienst begint om 7 uur.',
            'Ze zet twee wekkers.',
            'Ze wil om kwart voor 7 binnen zijn.',
            'Wat neemt ze mee?',
          ],
        },
        {
          kind: 'rule',
          id: 'r.l.start.1.ru1',
          emoji: '📞',
          title: 'Te laat? Bel of app vóór je dienst begint.',
          body: [
            'Laat het weten vóór je dienst begint.',
            'Dan kan het team plannen.',
            'Te laat, zonder bericht? Dat vinden mensen hier erger dan de vertraging zelf.',
          ],
          rule: 'ongeschreven',
          key: true,
        },
        {
          kind: 'whatdo',
          id: 'r.l.start.1.wd1',
          situation: 'Wat neemt Dewi mee op haar eerste dag?',
          options: [
            { id: 'a', text: 'Haar ID-kaart en haar bankrekeningnummer.', best: true, feedback: 'Goed. Die heeft haar werkgever nodig.' },
            { id: 'b', text: 'Haar paspoort, om bij de baas achter te laten.', best: false, feedback: 'Niet doen. Haar paspoort houdt ze altijd zelf.' },
            { id: 'c', text: 'Alleen haar telefoon. De rest staat online.', best: false, feedback: 'Haar werkgever moet haar ID echt zien.' },
          ],
          why: 'Je werkgever moet je ID-kaart of paspoort zien en een kopie maken. Hij heeft ook je BSN nodig. Je BSN is je burgerservicenummer. Het staat op je ID-kaart. Je ID geef je nooit af.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.start.1.wd2',
          situation: 'De bus heeft vertraging. Dewi is 15 minuten te laat. Wat kan Dewi het beste doen?',
          options: [
            { id: 'a', text: 'Ze legt het uit als ze binnen is.', best: false, feedback: 'Dan weet het team te laat dat ze later komt.' },
            { id: 'b', text: 'Ze rent extra hard en zegt er niets over.', best: false, feedback: 'Haasten is niet nodig. Even laten weten wel.' },
            { id: 'c', text: 'Ze belt of appt haar leidinggevende meteen.', best: true, feedback: 'Goed. Dan kan het team plannen.' },
          ],
          why: 'Laat het weten vóór je dienst begint. Dan kan het team plannen. Te laat, zonder bericht? Dat vinden mensen hier erger dan de vertraging zelf.',
        },
        // ⚖️ check: Een regel moet wel een goede reden hebben ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.start.1.tf1',
          statement: 'Op je werk mag je altijd dragen wat je wilt.',
          answer: false,
          why: 'Veel werk heeft regels voor kleding. Vaak is dat voor veiligheid of hygiëne. Een regel moet wel een goede reden hebben. Vraag op je eerste dag naar de regels.',
        },
        { kind: 'model', id: 'r.l.start.1.mo1', context: 'Je komt binnen op je eerste dag.', nl: 'Goedemorgen, ik ben Dewi. Ik begin vandaag. Bij wie meld ik me?' },
      ],
    },
    {
      // Les 2.2 · Kennismaken
      id: 'r.l.start.2',
      title: 'Kennismaken',
      goal: 'Je weet hoe je je voorstelt en wanneer je "je" zegt. Je weet ook dat je zelf kiest over aanraken.',
      remember: 'Op het werk zeg je meestal "je", ook tegen de baas.',
      steps: [
        {
          kind: 'scene',
          id: 'r.l.start.2.sc1',
          picture: 'Jayden in de keuken van een restaurant. Chef Sanne steekt haar hand uit.',
          lines: [
            'Jayden begint in de keuken van een restaurant.',
            'De chef heet Sanne.',
            'Ze zegt: "Hoi, ik ben Sanne. Zeg maar je, hoor."',
            'Jayden weet niet goed wat hij moet doen.',
          ],
        },
        {
          kind: 'rule',
          id: 'r.l.start.2.ru1',
          emoji: '🙂',
          title: 'Op het werk zeg je meestal "je", ook tegen de baas.',
          body: [
            'Op het werk zeggen de meeste mensen "je".',
            'Ook tegen de baas.',
            'Weet je het niet zeker? Begin met "u", en luister wat anderen doen.',
            'Tegen klanten en cliënten zeg je vaak wel "u".',
          ],
          rule: 'ongeschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.start.2.wd1',
          situation: 'Wat bedoelt Sanne met "Zeg maar je"?',
          options: [
            { id: 'a', text: 'Ze vindt dat Jayden te zacht praat.', best: false, feedback: 'Nee. Het gaat niet over hard of zacht praten.' },
            { id: 'b', text: 'Ze wil dat hij haar "chef" noemt.', best: false, feedback: 'Nee. Ze noemt juist haar voornaam.' },
            { id: 'c', text: 'Ze wil dat hij "je" zegt, en niet "u".', best: true, feedback: 'Goed. Ze wil minder afstand.' },
          ],
          why: 'Op het werk zeggen de meeste mensen "je". Ook tegen de baas. Weet je het niet zeker? Begin met "u". Luister wat anderen doen. Tegen klanten en cliënten zeg je vaak wel "u".',
        },
        {
          kind: 'whatdo',
          id: 'r.l.start.2.wd2',
          situation: 'Een collega wil je een hand geven. Jij geeft liever geen hand.',
          options: [
            { id: 'a', text: 'Je geeft toch een hand, ook al wil je het niet.', best: false, feedback: 'Dat hoeft niet. Je mag zelf kiezen.' },
            { id: 'b', text: 'Je knikt, lacht en zegt kort waarom.', best: true, feedback: 'Goed. Zo groet je beleefd en is het duidelijk.' },
            { id: 'c', text: 'Je doet alsof je de hand niet ziet.', best: false, feedback: 'Dat kan onbeleefd lijken. Even uitleggen helpt.' },
          ],
          why: 'Een hand geven is hier normaal, maar niet verplicht. Je mag ook op een andere beleefde manier groeten. Mensen houden hier vaak een armlengte afstand. Aanraken doe je weinig.',
        },
        {
          kind: 'truefalse',
          id: 'r.l.start.2.tf1',
          statement: 'Je mag gerust nog een keer naar iemands naam vragen.',
          answer: true,
          why: 'Niemand verwacht dat je na een week alle namen kent. Vraag gerust nog een keer: "Hoe heet je ook alweer?" Dat is heel normaal.',
        },
        { kind: 'model', id: 'r.l.start.2.mo1', context: 'Je stelt je voor aan een nieuwe collega.', nl: 'Hoi, ik ben Jayden. Ik ben nieuw. Hoe heet jij?' },
      ],
    },
    {
      // Les 2.3 · Vragen stellen en terugzeggen
      id: 'r.l.start.3',
      title: 'Vragen stellen en terugzeggen',
      goal: 'Je durft te zeggen dat je iets niet snapt. Je checkt het door terug te zeggen.',
      remember: 'Snap je het niet? Vraag het. Zeg terug wat je hebt begrepen.',
      steps: [
        {
          kind: 'scene',
          id: 'r.l.start.3.sc1',
          picture: 'Piotr bij een machine in een fabriek. Collega Mark wijst en praat snel.',
          lines: [
            'Piotr werkt in een fabriek.',
            'Zijn collega Mark legt een machine uit.',
            'Mark praat snel.',
            'Piotr begrijpt maar de helft.',
            'Mark vraagt: "Duidelijk?"',
          ],
        },
        {
          kind: 'rule',
          id: 'r.l.start.3.ru1',
          emoji: '🙋',
          title: 'Snap je het niet? Vraag het. Zeg terug wat je hebt begrepen.',
          body: [
            'Vragen stellen is hier normaal.',
            'Het laat zien dat je het goed wilt doen.',
            'Zeg in je eigen woorden terug wat je gaat doen.',
            'Knikken zonder te snappen geeft fouten.',
          ],
          rule: 'ongeschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.start.3.wd1',
          situation: 'Piotr snapt het niet goed. Wat kan Piotr het beste doen?',
          options: [
            { id: 'a', text: 'Hij knikt, en hij kijkt straks hoe de anderen het doen.', best: false, feedback: 'Begrijpelijk. Maar zo kan hij een fout maken.' },
            { id: 'b', text: 'Hij zegt "ja", en hij vraagt het later aan iemand anders.', best: false, feedback: 'Dan denkt Mark dat het goed gaat.' },
            { id: 'c', text: 'Hij zegt: "Nog een keer graag, iets langzamer."', best: true, feedback: 'Goed. Zo leert hij het meteen goed.' },
          ],
          why: 'Vragen stellen is hier normaal. Het laat zien dat je het goed wilt doen. Knikken zonder te snappen geeft fouten. Bij machines kan dat gevaarlijk zijn.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.start.3.wd2',
          situation: 'Mark legt het opnieuw uit. Hoe checkt Piotr dat hij het snapt?',
          options: [
            { id: 'a', text: 'Hij zegt in zijn eigen woorden wat hij gaat doen.', best: true, feedback: 'Goed. Zo hoort Mark of hij het goed begrijpt.' },
            { id: 'b', text: 'Hij zegt "ja, ja" en begint snel.', best: false, feedback: 'Dan weet niemand of hij het echt snapt.' },
            { id: 'c', text: 'Hij vraagt of Mark het de eerste keer voor hem doet.', best: false, feedback: 'Kijken helpt. Maar zelf terugzeggen is beter.' },
          ],
          why: 'Terugzeggen is slim. "Dus eerst dit, en dan dat?" Zo merk je meteen of je iets mist.',
        },
        {
          kind: 'truefalse',
          id: 'r.l.start.3.tf1',
          statement: 'Hier vinden de meeste leidinggevenden het goed als je veel vraagt.',
          answer: true,
          why: 'Vragen laat zien dat je het goed wilt doen. Beter twee keer vragen dan één fout. Schrijf het antwoord op. Dan hoef je het niet steeds te vragen.',
        },
        { kind: 'model', id: 'r.l.start.3.mo1', context: 'Je zegt terug wat je hebt begrepen.', nl: 'Dus eerst zet ik de machine aan, en dan ...?' },
      ],
    },
  ],
};
