/**
 * The page vloertaal.nl/intro: the door from a LinkedIn post to the app. For readers who may never
 * have met someone who reads little or speaks little Dutch: first three questions (two facts, one
 * about yourself), then why Vloertaal exists, then the app. Every number with its source, and only
 * what that source says: PIAAC counts reading on its own here, not "reading and/or arithmetic".
 */
export type IntroOption = { label: string; right?: boolean };

export type IntroQuestion = {
  ask: string;
  options: IntroOption[];
  /** Shown after any choice. */
  answer: string;
  source?: { label: string; url: string };
};

export const INTRO_QUESTIONS: IntroQuestion[] = [
  {
    ask: 'Hoeveel volwassenen in Nederland hebben moeite met lezen?',
    options: [{ label: '1 op de 50' }, { label: '1 op de 15' }, { label: '1 op de 6', right: true }],
    answer: '1 op de 6. Grote kans dus dat je iemand kent. Je ziet het alleen vaak niet aan iemand.',
    source: { label: 'PIAAC 2023, 16 tot 65 jaar', url: 'https://piaaconderzoek.nl/resultaten-piaac-2023/' },
  },
  {
    ask: 'Van de migranten die zeer goed Nederlands spreken, heeft 69% betaald werk. En van wie het redelijk spreekt?',
    options: [{ label: '65%' }, { label: '50%', right: true }, { label: '30%' }],
    answer:
      'Ongeveer de helft. Taal is niet de enige reden: ook opleiding en de leeftijd waarop iemand naar Nederland kwam tellen mee. Maar taal doet ertoe.',
    source: {
      label: 'CBS 2023, cijfers over 2021',
      url: 'https://www.cbs.nl/nl-nl/nieuws/2023/44/arbeidsparticipatie-hoger-bij-goede-beheersing-nederlands',
    },
  },
  {
    ask: 'Heb jij weleens geknikt terwijl je iemand niet verstond?',
    options: [{ label: 'Ja' }, { label: 'Nee' }, { label: 'Misschien' }],
    answer:
      'Dat doen we bijna allemaal. Het voelt vriendelijk. Maar zo ziet niemand hoe groot het taalprobleem is, ook de ander zelf niet.',
  },
];

/** "Waarom Vloertaal?": modest, a snack ("tussendoortje") next to courses and coaches, not instead of them. Not "in de pauze": a break is for rest. */
export const WHY: string[] = [
  'Taal leer je het best waar je hem nodig hebt. Vloertaal is een gratis app om Nederlands te oefenen voor je werk: een paar minuten per dag, op je eigen telefoon, met uitleg in je eigen taal.',
  'Zie het als een tussendoortje: geen vervanging van een taalcursus of taalcoach, maar iets voor ertussendoor, in de trein, in de wachtkamer of thuis op de bank.',
  'De app is nog in de testfase. Ik bouw hem in mijn vrije tijd, en ik hoor graag wat beter kan.',
];
