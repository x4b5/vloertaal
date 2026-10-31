/**
 * "Wat ken je al?": a short test of about 10 minutes for the language track (spoor Taal), at two
 * moments: the start (instap, version A) and after 4 weeks or 3 finished topics (eind, version B).
 * The result shows the learner, and in the pilot their coach, what they learned (docs/pilot.md).
 * Later the same test can set where the path starts.
 *
 * The items are fixed, so a learner's two results can be compared. Why these:
 *
 *  - **Only what the course already has.** Every word, sentence and chat line is from a lesson,
 *    with its translations in all help languages and a recording in every voice (public/audio-el,
 *    tests/toets.test.ts checks it). No line of PENDING_RECORDING in tests/g4b3Clips.test.ts.
 *    No new content and no new translations.
 *  - **Three parts, 6 questions each (18):**
 *      - Luisteren: a sentence is heard (not shown); pick what it means, in the help language.
 *      - Woorden: the meaning (and the picture) of a word; pick the Dutch word (each with a speaker).
 *      - Zinnen: a colleague says something (a chat of the course); pick the right answer.
 *  - **Levels A0 to A2, two questions of each per part:** A0 = Eerste werkdag, Hulp vragen and
 *    Slimme hulpmiddelen (only its chat "Zal ik Engels praten?");
 *    A1 = Veiligheid, In het magazijn and Tijd en rooster; A2 = Samenwerken, Loon, Verlof en ziekte,
 *    Huisregels, Omgang met collega's and Naar je werk. Question k of version A and question k of
 *    version B are a pair: the same part, the same level, mostly the same topic and the same kind
 *    of question (a yes/no question in both, a "where" question in both), so the versions are as
 *    hard as each other.
 *  - **A and B share nothing:** no item, and no wrong option either, is in both versions, so at the
 *    end of the 4 weeks the learner meets nothing they saw at the start (tests/toets.test.ts).
 *  - **Wrong options are fixed too**, from the same levels, plainly wrong (a "where" answer to a
 *    yes/no question, a time to "what is your name?"), never a line that could also be right.
 *  - **Speaking** ("Kunt u dat herhalen?", in neither version) is the same at both moments, so
 *    "Jij toen" and "Jij nu" can be heard side by side. It does not count in the score.
 *
 * No ERK level, no pass or fail: the result is three bars (and before and after, at the end).
 */

export type ToetsPart = 'listen' | 'words' | 'sentences';
export type ToetsVersion = 'A' | 'B';
export type ToetsLevel = 'A0' | 'A1' | 'A2';

export interface ToetsItem {
  part: ToetsPart;
  level: ToetsLevel;
  /** listen: a sentence id; words: a word id; sentences: a chat's prompt id (the colleague's line). */
  answer: string;
  /** The two wrong options: sentence ids, word ids, or reply ids (c.….a) of other chats. */
  others: readonly [string, string];
}

export const TOETS_PARTS: readonly ToetsPart[] = ['listen', 'words', 'sentences'];

/** The same sentence to say at both moments ("Jij toen" / "Jij nu"). Not scored. */
export const TOETS_SPEAK = 's.understand.1';

const L = (level: ToetsLevel, answer: string, a: string, b: string): ToetsItem => ({ part: 'listen', level, answer, others: [a, b] });
const W = (level: ToetsLevel, answer: string, a: string, b: string): ToetsItem => ({ part: 'words', level, answer, others: [a, b] });
const Z = (level: ToetsLevel, answer: string, a: string, b: string): ToetsItem => ({ part: 'sentences', level, answer, others: [a, b] });

/** Version A: the start ("instap"). */
const A: ToetsItem[] = [
  L('A0', 's.hello.1', 's.understand.3', 's.people.2'), //       Hallo, ik ben nieuw.
  L('A0', 's.arrive.2', 's.hello.3', 's.gear.1'), //            Ik kan de kleedkamer niet vinden.
  L('A1', 's.danger.1', 's.sick.3', 's.things.2'), //           Pas op, de vloer is nat!
  L('A1', 's.sick.1', 's.directions.3', 's.gear.2'), //         Ik ben vandaag ziek.
  L('A2', 's.task.1', 's.smoking.2', 's.bike.1'), //            Wat moet ik eerst doen?
  L('A2', 's.extra.2', 's.clock.2', 's.smalltalk.1'), //        Worden de overuren betaald?
  W('A0', 'w.kantine', 'w.ingang', 'w.naam'),
  W('A0', 'w.baas', 'w.wc', 'w.werk'),
  W('A1', 'w.handschoenen', 'w.kar', 'w.pauze'),
  W('A1', 'w.dokter', 'w.scanner', 'w.brand'),
  W('A2', 'w.bankrekening', 'w.vakantiedagen', 'w.probleem'),
  W('A2', 'w.bedrijfsarts', 'w.afspraak', 'w.taak'),
  Z('A0', 'c.people.q', 'c.bike.a', 'c.hours.a'), //            Hoe heet je?
  Z('A0', 'c.understand.q', 'c.measures.a', 'c.tools.a'), //    Begrijp je het?
  Z('A1', 'c.gear.q', 'c.smalltalk.a', 'c.kitchen.a'), //       Heb je je helm?
  Z('A1', 'c.things.q', 'c.mistakes.a', 'c.easy.a'), //         Waar moet de doos heen?
  Z('A2', 'c.payslip.q', 'c.quality.a', 'c.plain.a'), //        Heb je je loonstrook gekregen?
  Z('A2', 'c.leave.q', 'd.task.a', 'c.health.a'), //            Wanneer wil je op vakantie?
];

/** Version B: the end ("eind"), after 4 weeks or 3 topics. Question k is the pair of A's question k. */
const B: ToetsItem[] = [
  L('A0', 's.hello.2', 's.arrive.1', 's.directions.2'), //      Goedemorgen, ik ben Ali.
  L('A0', 's.arrive.3', 's.people.3', 's.people.1'), //         Wie is mijn buddy vandaag?
  L('A1', 's.shift.3', 's.danger.2', 's.things.3'), //          Sorry, ik ben te laat.
  L('A1', 's.sick.2', 's.directions.1', 's.gear.3'), //         Ik heb pijn in mijn rug.
  L('A2', 's.task.2', 's.smoking.1', 's.transit.3'), //         Ik ben klaar met deze taak.
  L('A2', 's.payslip.1', 's.clock.1', 's.smalltalk.2'), //      Wat is mijn uurloon?
  W('A0', 'w.kleedkamer', 'w.receptie', 'w.buddy'),
  W('A0', 'w.collega', 'w.leidinggevende', 'w.helpen'),
  W('A1', 'w.hesje', 'w.stelling', 'w.dienst'),
  W('A1', 'w.nooduitgang', 'w.heftruck', 'w.pijn'),
  W('A2', 'w.overuren', 'w.ziekte', 'w.loon'),
  W('A2', 'w.vakantiegeld', 'w.ziekmelden', 'w.samen'),
  // Pair 13: a short fixed phrase of the first day in both ("Hoe heet je?" / "Fijne avond!").
  // Pair 14: a yes/no question in both, answered with "Nee, ..." ("Begrijp je het?" / "Zal ik
  // Engels praten?"). "Goedemorgen, waar komt u voor?" (u, and an expression) was harder than
  // "Hoe heet je?", so it is in neither version now.
  Z('A0', 'c.hello.q', 'c.roundsounds.a', 'c.cv.a'), //         Fijne avond!
  Z('A0', 'c.keeplearning.q', 'c.shift.a', 'c.doctor.a'), //    Zal ik Engels praten?
  Z('A1', 'c.danger.q', 'c.findwork.a', 'c.letters.a'), //      Is er een ongeluk?
  Z('A1', 'c.directions.q', 'c.pbgk.a', 'c.agency.a'), //       Links of rechts?
  Z('A2', 'd.agree.q', 'c.insurance.a', 'c.respect.a'), //      Kun je zaterdag overwerken?
  Z('A2', 'c.callin.q', 'c.housing.a', 'c.aihelp.a'), //        Wanneer ben je er weer?
];

export const TOETS_VERSIONS: Record<ToetsVersion, readonly ToetsItem[]> = { A, B };
