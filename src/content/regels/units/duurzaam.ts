import type { RuleUnit } from '../types';

/**
 * Unit 17 · Duurzaam werken (les 17.1–17.2).
 * Converted from docs/entree-aanvulling.md; edit that document first, then this file.
 * `// ⚖️ check:` marks a fact the expert must check (docs/entree-aanvulling.md, deel 6 and 7). The
 * marker is never shown or read aloud. `// Redactie:` notes are for the makers only.
 */
export const duurzaamUnit: RuleUnit = {
  id: 'r.duurzaam',
  title: 'Duurzaam werken',
  emoji: '♻️',
  color: '#4d908e',
  lessons: [
    {
      // Les 17.1 · Afval scheiden op je werk
      id: 'r.l.duurzaam.1',
      title: 'Afval scheiden op je werk',
      goal: 'Je scheidt afval zoals het op je werk hoort, en gevaarlijk afval gooi je nooit bij het gewone afval.',
      remember: 'Scheid je afval. Gevaarlijk afval nooit bij het gewone afval.',
      steps: [
        {
          kind: 'scene',
          id: 'r.l.duurzaam.1.sc1',
          picture: 'Mohammed in de achterruimte van een bakkerij, bij vier afvalbakken met verschillende kleuren.',
          lines: [
            'Mohammed werkt in een bakkerij.',
            'Na het werk heeft hij veel afval.',
            'Karton, oud brood en lege flessen van schoonmaakmiddel.',
            'Er staan vier bakken. Hij heeft haast.',
          ],
        },
        // ⚖️ check: Bedrijven moeten afval scheiden ⚖️ (twijfel 10: alle bedrijven?).
        // ⚖️ check: Batterijen, lampen en resten van chemische middelen zijn gevaarlijk afval ⚖️.
        {
          kind: 'rule',
          id: 'r.l.duurzaam.1.ru1',
          emoji: '🗑️',
          title: 'Scheid je afval. Gevaarlijk afval nooit bij het gewone afval.',
          body: [
            'Bedrijven moeten afval scheiden. Welke bakken er zijn, verschilt per bedrijf.',
            'Batterijen, lampen en resten van chemische middelen zijn gevaarlijk afval.',
            'Die moeten altijd apart.',
          ],
          rule: 'geschreven',
          key: true,
        },
        // ⚖️ check: Bedrijven moeten afval scheiden ⚖️.
        // ⚖️ check: Welke bakken er zijn, verschilt per bedrijf ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.duurzaam.1.wd1',
          situation: 'Waar laat Mohammed het karton?',
          options: [
            { id: 'a', text: 'Plat gemaakt in de bak voor papier en karton.', best: true, feedback: 'Goed. Plat past er veel meer in.' },
            { id: 'b', text: 'In de bak voor restafval. Dat is het snelst.', best: false, feedback: 'Begrijpelijk. Maar karton hoort apart.' },
            { id: 'c', text: 'Naast de bakken. Iemand anders ruimt het wel op.', best: false, feedback: 'Dan ligt het in de weg. En het is jouw afval.' },
          ],
          why: 'Bedrijven moeten afval scheiden. Welke bakken er zijn, verschilt per bedrijf. Weet je het niet? Kijk op de sticker van de bak, of vraag het.',
        },
        // ⚖️ check: Batterijen, lampen en resten van chemische middelen zijn gevaarlijk afval ⚖️.
        // ⚖️ check: Die moeten altijd apart ⚖️.
        {
          kind: 'truefalse',
          id: 'r.l.duurzaam.1.tf1',
          statement: 'Een lege batterij mag je bij het gewone afval gooien.',
          answer: false,
          why: 'Batterijen, lampen en resten van chemische middelen zijn gevaarlijk afval. Die moeten altijd apart. Giet ook nooit resten van middelen door de gootsteen. Vraag waar het gevaarlijke afval heen moet.',
        },
        // ⚖️ check: Gescheiden afval wordt meestal ook apart opgehaald ⚖️.
        {
          kind: 'whatdo',
          id: 'r.l.duurzaam.1.wd2',
          situation: 'Een collega zegt: "Scheiden heeft geen zin. Het gaat toch allemaal op één hoop."',
          options: [
            { id: 'a', text: 'Hij gooit voortaan ook alles in één bak.', best: false, feedback: 'Begrijpelijk. Maar op je werk volg je de regels.' },
            { id: 'b', text: 'Hij gaat er lang met de collega over in discussie.', best: false, feedback: 'Dat mag. Maar het lost de vraag niet op.' },
            { id: 'c', text: 'Hij blijft scheiden, en hij vraagt het aan Henk.', best: true, feedback: 'Goed. Henk weet hoe het afval wordt opgehaald.' },
          ],
          why: 'Gescheiden afval wordt meestal ook apart opgehaald. Van oud papier maken ze weer nieuw papier. Twijfel je? Vraag het je leidinggevende. De regels op je werk volg je, ook als een collega het anders doet.',
        },
        { kind: 'model', id: 'r.l.duurzaam.1.mo1', context: 'Je weet niet waar je afval heen moet.', nl: 'In welke bak moet dit?' },
      ],
    },
    {
      // Les 17.2 · Zuinig met materiaal en energie
      id: 'r.l.duurzaam.2',
      title: 'Zuinig met materiaal en energie',
      goal: 'Je gebruikt niet meer materiaal en energie dan nodig, en je meldt verspilling of een lek.',
      remember: 'Uit als het mag, dicht als het kan. Meld een lek meteen.',
      steps: [
        {
          kind: 'scene',
          id: 'r.l.duurzaam.2.sc1',
          picture: 'Dewi in een lege kleedkamer van een sportschool. Alle lampen zijn aan. Een kraan druppelt.',
          lines: [
            'Dewi maakt \'s avonds schoon in een sportschool.',
            'Iedereen is weg.',
            'Alle lampen zijn nog aan.',
            'In de kleedkamer druppelt een kraan.',
          ],
        },
        {
          kind: 'rule',
          id: 'r.l.duurzaam.2.ru1',
          emoji: '💡',
          title: 'Uit als het mag, dicht als het kan. Meld een lek meteen.',
          body: [
            'Doe lampen en apparaten uit als dat mag.',
            'Vraag wat aan moet blijven, zoals de noodverlichting.',
            'Houd deuren van koelcel en vriezer dicht.',
            'Meld een lek meteen.',
          ],
          rule: 'ongeschreven',
        },
        {
          kind: 'whatdo',
          id: 'r.l.duurzaam.2.wd1',
          situation: 'Wat doet Dewi?',
          options: [
            { id: 'a', text: 'Ze doet uit wat uit mag, en ze meldt de kraan.', best: true, feedback: 'Goed. Zo bespaar je energie en water.' },
            { id: 'b', text: 'Ze laat alles zo. Het is niet haar gebouw.', best: false, feedback: 'Begrijpelijk. Maar een lek kost veel water.' },
            { id: 'c', text: 'Ze probeert de kraan zelf te maken.', best: false, feedback: 'Goed bedoeld. Maar dat is niet jouw werk.' },
          ],
          why: 'Doe lampen en apparaten uit als dat mag. Vraag wat aan moet blijven, zoals de noodverlichting. Meld een lek meteen. Zelf repareren doe je alleen als dat jouw werk is.',
        },
        {
          kind: 'truefalse',
          id: 'r.l.duurzaam.2.tf1',
          statement: 'Een koelcel of vriezer houd je niet langer open dan nodig.',
          answer: true,
          why: 'Een open deur kost veel energie. Het eten wordt ook minder goed koud. Pak wat je nodig hebt, en doe de deur dicht. Sluit een deur niet goed? Meld het.',
        },
        {
          kind: 'whatdo',
          id: 'r.l.duurzaam.2.wd2',
          situation: 'Piotr werkt in de bouw. Er liggen veel stukken hout over. Hij heeft een stuk van 60 centimeter nodig.',
          options: [
            { id: 'a', text: 'Hij zaagt een stuk van een nieuwe plank. Dat gaat sneller.', best: false, feedback: 'Begrijpelijk. Maar dan blijven de restjes liggen.' },
            { id: 'b', text: 'Hij kijkt eerst of er een restje is dat past.', best: true, feedback: 'Goed. Dat scheelt geld en afval.' },
            { id: 'c', text: 'Hij neemt de restjes mee naar huis.', best: false, feedback: 'Vraag dat eerst. Het hout is van het bedrijf.' },
          ],
          why: 'Zuinig werken scheelt geld en afval. Meet eerst, dan zaag je. Gebruik restjes als het kan. Iets mee naar huis nemen? Vraag het altijd eerst. Het materiaal is van het bedrijf.',
        },
        { kind: 'model', id: 'r.l.duurzaam.2.mo1', context: 'Je ziet lampen aan en een lekkende kraan.', nl: 'Mogen deze lampen uit? En de kraan lekt. Wie kan dat maken?' },
      ],
    },
  ],
};
