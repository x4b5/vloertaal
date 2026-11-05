/**
 * "Communicatie": the lessons that train talking with others at work, across the topics (the
 * owner's request, 5 November 2026: communication more firmly in the course). In the app each of
 * these lessons says "Communicatie" under its title on the topic page (a calm line, nothing to tap;
 * src/components/Route.tsx), and the page for coaches lists them (src/content/pro.ts, p.comm).
 * The Dutch titles of the topics and lessons are here because the lessons only carry English ones
 * (tests/communication.test.ts checks the ids and the topic names against the course).
 */
export interface CommunicationTopic {
  unit: string;
  /** The topic's Dutch name, as on "Alle onderwerpen" (Unit.titleNl). */
  titleNl: string;
  /** [lesson id, Dutch title]. */
  lessons: readonly (readonly [string, string])[];
}

export const COMMUNICATION: readonly CommunicationTopic[] = [
  { unit: 'u.help', titleNl: 'Hulp vragen', lessons: [['l.understand', 'Ik begrijp het niet']] },
  { unit: 'u.tools', titleNl: 'Slimme hulpmiddelen', lessons: [['l.understood', 'Begrijpen en begrepen worden']] },
  {
    unit: 'u.teamwork', titleNl: 'Samenwerken', lessons: [
      ['l.speakup', 'Er zit me iets dwars'], ['l.agree', 'Afspraken en nee zeggen'], ['l.task', 'Een opdracht van je leidinggevende'],
      ['l.clear', 'Kort en duidelijk'], ['l.newcolleague', 'Een nieuwe collega helpen'],
    ],
  },
  {
    unit: 'u.communicate', titleNl: 'Goed communiceren', lessons: [
      ['l.explain', 'Zeggen wat er mis is'], ['l.listen', 'Goed luisteren'], ['l.calm', 'Rustig blijven'],
      ['l.talkintime', 'Praat er op tijd over'], ['l.reachable', 'Bereikbaar zijn'],
    ],
  },
  {
    unit: 'u.feedback', titleNl: 'Feedback en overleg', lessons: [
      ['l.getfeedback', 'Feedback krijgen'], ['l.givefeedback', 'Feedback geven'], ['l.meeting', 'Iets zeggen in het werkoverleg'],
    ],
  },
  { unit: 'u.social', titleNl: 'Omgang met collega’s', lessons: [['l.smalltalk', 'Een praatje en de pauze'], ['l.mistakes', 'Feedback en fouten']] },
  {
    unit: 'u.contact', titleNl: 'Bellen en appen met je werk', lessons: [
      ['l.callin', 'Bellen naar je werk'], ['l.texting', 'Appjes en de rooster-app'], ['l.email', 'Schrijven naar je werk'],
    ],
  },
  { unit: 'u.finish', titleNl: 'Je werk afronden', lessons: [['l.handover', 'Klaar, of nog niet?']] },
  { unit: 'u.stage', titleNl: 'Stage lopen', lessons: [['l.review', 'Feedback op je stage']] },
];

/** The ids of the lessons above. */
export const COMMUNICATION_LESSONS: ReadonlySet<string> = new Set(COMMUNICATION.flatMap((t) => t.lessons.map(([id]) => id)));
