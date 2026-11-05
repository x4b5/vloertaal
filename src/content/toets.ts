/**
 * "Wat ken je al?": a short test of about 10 minutes for the language track (spoor Taal), at two
 * moments: the start (instap, version A) and after 4 weeks or 3 finished topics (eind, version B).
 * The result shows the learner, and in the pilot their coach, what they learned (docs/pilot.md).
 * How it works and what it does and does not say, for coaches: docs/toets.md.
 *
 * The items are fixed, so a learner's two results can be compared. Why these:
 *
 *  - **Only what the course already has.** Every word, sentence and chat line is from a lesson,
 *    with its translations in all help languages and a recording in every voice (public/audio-el,
 *    tests/toets.test.ts checks it). No new content and no new translations.
 *  - **Three parts, 7 questions each (21):**
 *      - Luisteren: 5 times a sentence is heard (not shown), pick what it means; 2 times a sentence
 *        is heard and the learner builds it, word by word ("build", by ear).
 *      - Woorden: 5 times the meaning (and the picture) of a word, pick the Dutch word; 2 times a
 *        word is heard and the learner writes it ("dictate": letter tiles or the keyboard, or, for
 *        a learner who reads another script and did not choose to learn writing, hear and pick the
 *        written word, as in the lessons: lib/writing.ts).
 *      - Zinnen: 5 times a colleague says something (a chat of the course), pick the reply; 2 times
 *        the meaning is given and the learner builds the Dutch sentence ("build").
 *  - **Fewer lucky guesses.** A pick of three is right by luck one time in three. A built sentence
 *    or a written word is right by luck only a few times in a hundred (tests/toets.test.ts works it
 *    out). Every question has "Ik weet het niet", and the result takes the guessing out (lib/toets.ts
 *    knownOf).
 *  - **No level per topic.** How hard an item is follows from its language (how many words, how
 *    long, a question or not, how early in the path), not from the topic it comes from. Question k
 *    of version A and question k of version B are a pair: the same part, the same kind of question,
 *    about as many words. tests/toets.test.ts compares the two versions on that.
 *  - **A and B share nothing:** no item, and no wrong option either, is in both versions, so at the
 *    end of the 4 weeks the learner meets nothing they saw at the start (tests/toets.test.ts).
 *  - **Wrong options are fixed too**, plainly wrong (a "where" answer to a yes/no question, a time
 *    to "what is your name?"), never a line that could also be right.
 *  - **Speaking** ("Kunt u dat herhalen?", in neither version) is the same at both moments, so
 *    "Jij toen" and "Jij nu" can be heard side by side. It does not count in the score.
 *
 * No ERK level, no pass or fail: the result is three bars (and before and after, at the end).
 */

export type ToetsPart = 'listen' | 'words' | 'sentences';
export type ToetsVersion = 'A' | 'B';
/**
 * The kind of question:
 *  - choice: pick one of three (listen: the meaning; words: the Dutch word; sentences: the reply);
 *  - build: put the sentence together word by word (three words for each place);
 *  - dictate: hear a word and write it.
 */
export type ToetsKind = 'choice' | 'build' | 'dictate';

/** The form of the test: 1 = 18 questions, all picks (until November 2026); 2 = this one. */
export const TOETS_FORM = 2;

export interface ToetsItem {
  part: ToetsPart;
  kind: ToetsKind;
  /** listen/build: a sentence id; words/dictate: a word id; sentences/choice: a chat's prompt id. */
  answer: string;
  /** The two wrong options: sentence ids, word ids, or reply ids (c.….a) of other chats. A build has none. */
  others: readonly [string, string] | readonly [];
}

export const TOETS_PARTS: readonly ToetsPart[] = ['listen', 'words', 'sentences'];

/** The same sentence to say at both moments ("Jij toen" / "Jij nu"). Not scored. */
export const TOETS_SPEAK = 's.understand.1';

const L = (answer: string, a: string, b: string): ToetsItem => ({ part: 'listen', kind: 'choice', answer, others: [a, b] });
const LB = (answer: string): ToetsItem => ({ part: 'listen', kind: 'build', answer, others: [] });
const W = (answer: string, a: string, b: string): ToetsItem => ({ part: 'words', kind: 'choice', answer, others: [a, b] });
const WD = (answer: string, a: string, b: string): ToetsItem => ({ part: 'words', kind: 'dictate', answer, others: [a, b] });
const Z = (answer: string, a: string, b: string): ToetsItem => ({ part: 'sentences', kind: 'choice', answer, others: [a, b] });
const ZB = (answer: string): ToetsItem => ({ part: 'sentences', kind: 'build', answer, others: [] });

/** Version A: the start ("instap"). */
const A: ToetsItem[] = [
  L('s.hello.1', 's.understand.3', 's.people.2'), //            Hallo, ik ben nieuw.
  L('s.arrive.2', 's.hello.3', 's.gear.1'), //                  Ik kan de kleedkamer niet vinden.
  L('s.danger.1', 's.sick.3', 's.things.2'), //                 Pas op, de vloer is nat!
  L('s.sick.1', 's.directions.3', 's.gear.2'), //               Ik ben vandaag ziek.
  L('s.task.1', 's.smoking.2', 's.bike.1'), //                  Wat moet ik eerst doen?
  LB('s.understood.2'), //                                      Kunt u het laten zien?
  LB('s.keeplearning.3'), //                                    Wil je Nederlands met mij praten?
  W('w.kantine', 'w.ingang', 'w.naam'),
  W('w.baas', 'w.wc', 'w.werk'),
  W('w.handschoenen', 'w.kar', 'w.pauze'),
  W('w.dokter', 'w.scanner', 'w.brand'),
  W('w.bankrekening', 'w.vakantiedagen', 'w.probleem'),
  WD('w.helm', 'w.kl.zak', 'w.kl.muur'), //                     de helm
  WD('w.tillen', 'w.pakken', 'w.dragen'), //                    tillen
  Z('c.people.q', 'c.bike.a', 'c.hours.a'), //                  Hoe heet je?
  Z('c.understand.q', 'c.measures.a', 'c.tools.a'), //          Begrijp je het?
  Z('c.gear.q', 'c.smalltalk.a', 'c.kitchen.a'), //             Heb je je helm?
  Z('c.things.q', 'c.mistakes.a', 'c.easy.a'), //               Waar moet de doos heen?
  Z('c.payslip.q', 'c.quality.a', 'c.plain.a'), //              Heb je je loonstrook gekregen?
  // Building, pair 20: 6 words with "heb ... -d" in both ("Dit heb ik nog niet geleerd." / "Ik heb
  // nog geen uitleg gehad."); pair 21: 6 words in the present with a time in both.
  ZB('s.notyet.1'), //                                          Dit heb ik nog niet geleerd.
  ZB('s.shift.1'), //                                           Mijn dienst begint om zeven uur.
];

/** Version B: the end ("eind"), after 4 weeks or 3 topics. Question k is the pair of A's question k. */
const B: ToetsItem[] = [
  L('s.hello.2', 's.arrive.1', 's.directions.2'), //            Goedemorgen, ik ben Ali.
  L('s.arrive.3', 's.people.3', 's.people.1'), //               Wie is mijn buddy vandaag?
  L('s.shift.3', 's.danger.2', 's.things.3'), //                Sorry, ik ben te laat.
  L('s.sick.2', 's.directions.1', 's.gear.3'), //               Ik heb pijn in mijn rug.
  L('s.task.2', 's.smoking.1', 's.transit.3'), //               Ik ben klaar met deze taak.
  LB('s.translate.2'), //                                       Mag ik dit even vertalen?
  LB('s.understood.3'), //                                      Is er een instructie met plaatjes?
  W('w.kleedkamer', 'w.receptie', 'w.buddy'),
  W('w.collega', 'w.leidinggevende', 'w.helpen'),
  W('w.hesje', 'w.stelling', 'w.dienst'),
  W('w.nooduitgang', 'w.heftruck', 'w.pijn'),
  W('w.overuren', 'w.ziekte', 'w.loon'),
  WD('w.doos', 'w.kl.bak', 'w.kl.deur'), //                     de doos
  WD('w.bellen', 'w.oefenen', 'w.vinden'), //                   bellen
  // Pair 15: a short fixed phrase of the first day in both ("Hoe heet je?" / "Fijne avond!").
  // Pair 16: a yes/no question in both, answered with "Nee, ..." ("Begrijp je het?" / "Zal ik
  // Engels praten?"). "Goedemorgen, waar komt u voor?" (u, and an expression) was harder than
  // "Hoe heet je?", so it is in neither version.
  Z('c.hello.q', 'c.roundsounds.a', 'c.cv.a'), //               Fijne avond!
  Z('c.keeplearning.q', 'c.shift.a', 'c.doctor.a'), //          Zal ik Engels praten?
  Z('c.danger.q', 'c.findwork.a', 'c.letters.a'), //            Is er een ongeluk?
  Z('c.directions.q', 'c.pbgk.a', 'c.agency.a'), //             Links of rechts?
  Z('d.agree.q', 'c.insurance.a', 'c.respect.a'), //            Kun je zaterdag overwerken?
  ZB('s.notyet.2'), //                                          Ik heb nog geen uitleg gehad.
  ZB('s.keeplearning.1'), //                                    Ik oefen elke dag tien minuten.
];

export const TOETS_VERSIONS: Record<ToetsVersion, readonly ToetsItem[]> = { A, B };

/* ---- "Durf je dit?": what the learner dares, before the questions (the owner's request, 5 November 2026) ---- */

/**
 * Five short questions about the learner, at the start of the test at both moments: not what they
 * can, but what they dare (confidence, "willingness to communicate"). One per screen, each with a
 * picture and its Dutch line to hear; three answers as faces. No right or wrong, not in the score,
 * never counted (src/lib/count.ts): kept with the run on this phone only (src/lib/toetsState.ts
 * ToetsRun.durf), and at the end shown as then and now. docs/toets.md.
 *
 * The owner did not want a question about calling in sick: these five are the work floor's
 * everyday moments where speaking up is hard. `nl` is said by the speaker (scripts/list-clips.ts:
 * the phone's voice says it until it is recorded); `picture` a word picture of the course.
 */
export type DurfId = 'understand' | 'boss' | 'help' | 'unsafe' | 'break';

export interface DurfItem {
  id: DurfId;
  /** The Dutch line, shown and heard. */
  nl: string;
  /** Its translation (src/i18n: a UI key). */
  key: 'toetsDurfUnderstand' | 'toetsDurfBoss' | 'toetsDurfHelp' | 'toetsDurfUnsafe' | 'toetsDurfBreak';
  /** A word picture of the course (src/pictures). */
  picture: string;
}

export const TOETS_DURF: readonly DurfItem[] = [
  { id: 'understand', nl: 'Zeggen dat je iets niet begrijpt', key: 'toetsDurfUnderstand', picture: 'w.begrijpniet' },
  { id: 'boss', nl: 'Iets vragen aan je leidinggevende', key: 'toetsDurfBoss', picture: 'w.leidinggevende' },
  { id: 'help', nl: 'Om hulp vragen', key: 'toetsDurfHelp', picture: 'w.helpen' },
  { id: 'unsafe', nl: 'Zeggen dat iets niet veilig is', key: 'toetsDurfUnsafe', picture: 'w.gevaar' },
  { id: 'break', nl: 'Even praten met een collega in de pauze', key: 'toetsDurfBreak', picture: 'w.praten' },
];

/** An answer: 0 "Nog niet", 1 "Een beetje", 2 "Ja". */
export type DurfAnswer = 0 | 1 | 2;
export const DURF_ANSWERS: readonly DurfAnswer[] = [0, 1, 2];
