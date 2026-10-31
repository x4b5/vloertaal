import type { BeUnit } from '../types';

/**
 * Unit 13 (België) · Je werk goed afronden: de Belgische versie van
 * src/content/regels/units/afronden.ts. De lessen gaan over gewoontes op het werk, geen wet: ze
 * gelden ook in Vlaanderen (docs/belgie-vlaanderen-plan.md, ✅). Alleen woorden en namen zijn
 * Vlaams: "bus 3" (een appartement), "verantwoordelijke", mevrouw Peeters.
 *
 * `// ⚖️ check:` = een feit (hier: een gewoonte) dat de deskundige nakijkt. Opgezocht op 30 okt 2026.
 * Geen eigen "Wat kun je nu?": de Nederlandse zinnen (werkbon lezen, afmelden) gelden ook.
 */
export const be: BeUnit = {
  unit: {
    id: 'r.be.afronden',
    title: 'Je werk goed afronden',
    emoji: '✅',
    color: '#3f8f6b',
    lessons: [
      {
        // Les 13.1 · Een werkbon lezen en voorbereiden
        id: 'r.be.l.afronden.1',
        title: 'Een werkbon lezen en voorbereiden',
        goal: 'Je leest een werkbon en je vraagt wat je niet snapt. Je legt je spullen klaar.',
        remember: 'Eerst lezen, vragen en klaarleggen. Dan pas beginnen.',
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.afronden.1.sc1',
            picture: 'Mohammed bij een bestelwagen van een onderhoudsbedrijf, met een werkbon in zijn hand.',
            lines: [
              'Mohammed werkt bij een onderhoudsbedrijf.',
              'Hij krijgt een werkbon van Henk.',
              'Een werkbon is een briefje met je opdracht.',
              'Mohammed moet eerst nog spullen pakken.',
            ],
          },
          {
            kind: 'rule',
            id: 'r.be.l.afronden.1.ru1',
            emoji: '📋',
            title: 'Eerst lezen, vragen en klaarleggen. Dan pas beginnen.',
            body: [
              'Op een werkbon staat wat je doet, waar, en met welk materiaal.',
              'Lees hem helemaal, vóór je vertrekt.',
              'Snap je iets niet? Vraag het vóór je begint.',
              'Leg je spullen klaar. Dan pas begin je.',
            ],
            rule: 'ongeschreven',
          },
          // Redactie: een voorbeeld, geen echte werkbon.
          {
            kind: 'card',
            id: 'r.be.l.afronden.1.ca1',
            card: {
              type: 'werkbon',
              title: 'Werkbon',
              rows: [
                { label: 'Adres', value: 'Lindelaan 12, bus 3' },
                { label: 'Opdracht', value: '3 kranen vervangen, type B' },
                { label: 'Materiaal', value: '3 kranen type B, 3 rubbers, kit', hit: true },
                { label: 'Klant', value: 'mevrouw Peeters, thuis tot 12.00 uur' },
              ],
            },
            question: 'Wat neemt Mohammed mee?',
            options: [
              { id: 'a', text: '3 kranen type B, 3 rubbers en kit.', best: true, feedback: 'Goed. Dat staat bij materiaal.' },
              { id: 'b', text: '1 kraan. De rest ligt er vast al.', best: false, feedback: 'Op de werkbon staan 3 kranen. Neem alles mee.' },
              { id: 'c', text: 'Alleen zijn gereedschap. Kranen koopt hij onderweg.', best: false, feedback: 'Dan kost het extra tijd. En misschien klopt het type niet.' },
            ],
            why: 'Op een werkbon staat wat je doet, waar, en met welk materiaal. Lees hem helemaal, vóór je vertrekt. Kijk ook naar de tijd. De klant is tot 12.00 uur thuis.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.afronden.1.wd1',
            situation: 'Mohammed weet niet wat "type B" is. Wat kan Mohammed het beste doen?',
            options: [
              { id: 'a', text: 'Hij neemt de kraan die er het meest op lijkt.', best: false, feedback: 'Dan klopt het misschien niet. Dan moet hij terug.' },
              { id: 'b', text: 'Hij vraagt het aan Henk, vóór hij vertrekt.', best: true, feedback: 'Goed. Dan weet hij het zeker.' },
              { id: 'c', text: 'Hij gaat eerst naar de klant, en kijkt daar.', best: false, feedback: 'Dan rijdt hij misschien twee keer heen en weer.' },
            ],
            why: 'Vraag het vóór je begint. Een vraag aan het begin is normaal. Een fout aan het eind kost veel meer tijd. Voor jou, en voor de klant.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.afronden.1.wd2',
            situation: 'Henk legt uit wat type B is. Wat zegt Mohammed terug?',
            quote: 'Type B is de kraan met de blauwe stip. Neem er 3 mee.',
            who: 'henk',
            options: [
              { id: 'a', text: 'Dus 3 kranen met een blauwe stip. Klopt dat?', best: true, feedback: 'Goed. Zo hoort Henk of Mohammed het goed begrepen heeft.', say: true },
              { id: 'b', text: 'Oké, dat snap ik. Ik ga meteen de kranen halen.', best: false, feedback: 'Vriendelijk. Maar Henk weet nu niet wat Mohammed begrepen heeft.', say: true },
              { id: 'c', text: 'Ja, ja. Ik ga al. Ik weet het wel.', best: false, feedback: 'Dan weet niemand of hij het echt snapt.', say: true },
            ],
            why: 'Zeg in je eigen woorden terug wat je gaat doen. Zo hoor je allebei of het klopt. Dat kost een paar seconden. En het voorkomt fouten.',
          },
          // ⚖️ check: goed voorbereiden is gewoonte in elk vak; je beschermende spullen controleren
          //   hoort erbij (Welzijnswet 4 augustus 1996: de werknemer gebruikt de beschermingsmiddelen juist)
          {
            kind: 'truefalse',
            id: 'r.be.l.afronden.1.tf1',
            statement: 'Goed voorbereiden is: je werk in stappen verdelen, en dan beginnen.',
            answer: true,
            why: 'Bedenk eerst: wat doe ik eerst, en wat daarna? Leg je spullen klaar. Check ook je beschermende spullen. Weet je hoeveel tijd je hebt? Dan kun je beginnen.',
          },
          { kind: 'model', id: 'r.be.l.afronden.1.mo1', context: 'Je snapt iets op de werkbon niet.', nl: 'Ik heb de werkbon gelezen. Wat bedoel je met type B?' },
        ],
      },
      {
        // Les 13.2 · Opruimen, laten controleren en afmelden
        id: 'r.be.l.afronden.2',
        title: 'Opruimen, laten controleren en afmelden',
        goal: 'Je ruimt je werkplek op en je laat je werk nakijken. Je zegt wat klaar is en wat niet.',
        remember: 'Klaar? Ruim op en laat het nakijken. Zeg wat klaar is en wat niet.',
        steps: [
          {
            kind: 'scene',
            id: 'r.be.l.afronden.2.sc1',
            picture: 'Sanne in een gang van een kantoor, met een poetskar. Op een klembord een lijst met vinkjes.',
            lines: [
              'Sanne werkt in een schoonmaakploeg op een kantoor.',
              'Haar dienst is bijna gedaan.',
              'Ze heeft alle lokalen gedaan, behalve lokaal 4. Dat zat op slot.',
              'Linda is haar verantwoordelijke.',
            ],
          },
          {
            kind: 'rule',
            id: 'r.be.l.afronden.2.ru1',
            emoji: '🧹',
            title: 'Klaar? Ruim op en laat het nakijken. Zeg wat klaar is en wat niet.',
            body: [
              'Ruim je werkplek op vóór je vertrekt.',
              'Controleren hoort bij goed werk.',
              'Afmelden is: zeggen wat klaar is, en wat niet. Ook als het niet jouw schuld is.',
            ],
            rule: 'ongeschreven',
            key: true,
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.afronden.2.wd1',
            situation: 'Wat doet Sanne met lokaal 4?',
            options: [
              { id: 'a', text: 'Ze zet een vinkje. Morgen doet ze het wel.', best: false, feedback: 'Dan klopt de lijst niet. Niemand weet het dan.' },
              { id: 'b', text: 'Ze zegt niets. Het was niet haar schuld.', best: false, feedback: 'Klopt. Maar Linda moet het wel weten.' },
              { id: 'c', text: 'Ze zegt tegen Linda: "Lokaal 4 zat op slot."', best: true, feedback: 'Goed. Dan kan Linda het regelen.' },
            ],
            why: 'Afmelden is: zeggen wat klaar is, en wat niet. Ook als het niet jouw schuld is. Zeg ook wat je zag. Een vinkje bij iets wat niet klaar is, geeft later problemen.',
          },
          {
            kind: 'whatdo',
            id: 'r.be.l.afronden.2.wd2',
            situation: 'Sanne is klaar. Haar kar staat nog in de gang. Wat kan Sanne het beste doen?',
            options: [
              { id: 'a', text: 'Ze laat de kar staan. Morgen komt ze toch weer.', best: false, feedback: 'Dan staat hij in de weg. Iemand kan erover vallen.' },
              { id: 'b', text: 'Ze ruimt de kar op en zet de poetsspullen weg.', best: true, feedback: 'Goed. Zo kan de volgende meteen beginnen.' },
              { id: 'c', text: 'Ze vraagt een collega om de kar op te ruimen.', best: false, feedback: 'Dat is haar werk. Haar collega heeft eigen werk.' },
            ],
            why: 'Ruim je werkplek op vóór je vertrekt. Zet je spullen en gereedschap terug op hun plaats. Dan kan de volgende meteen beginnen. En niemand valt erover.',
          },
          // ⚖️ check: werk laten nakijken is gewoon, ook voor ervaren collega's (gewoonte; Vlaamse NT2-docent nakijken)
          {
            kind: 'truefalse',
            id: 'r.be.l.afronden.2.tf1',
            statement: 'Kijkt je verantwoordelijke je werk na? Dan vertrouwt ze je niet.',
            answer: false,
            why: 'Controleren hoort bij goed werk. Ook collega\'s die het werk al lang doen, laten hun werk nakijken. Zo vind je fouten vóór de klant ze ziet. Je mag het ook zelf vragen: "Wil je even kijken?"',
          },
          { kind: 'model', id: 'r.be.l.afronden.2.mo1', context: 'Je dienst is gedaan. Je meldt je af bij je verantwoordelijke.', nl: 'Ik ben klaar. Lokaal 4 zat op slot. Wil je even kijken?' },
        ],
      },
    ],
  },
  zegHet: {
    'r.be.l.afronden.1.mo1': [
      { text: 'Ik snap de werkbon niet. Kun je alles nog eens zeggen?', feedback: 'Dan weet de ander niet welk stuk je niet snapt.' },
      { text: 'Ik weet niet wat type B is. Ik pak wel gewoon iets.', feedback: 'Dan gok je. Zo kan het werk fout gaan.' },
    ],
    'r.be.l.afronden.2.mo1': [
      { text: 'Ik ben klaar. Ik ga nu naar huis. Tot morgen!', feedback: 'Dan weet je verantwoordelijke niet dat lokaal 4 op slot zat.' },
      { text: 'Ik ben bijna overal klaar. Er was een probleem, maar oké.', feedback: 'Dan weet ze niet welk probleem. Zeg wat er was.' },
    ],
  },
  advice: {},
};
