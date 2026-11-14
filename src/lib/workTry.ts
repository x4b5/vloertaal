import { KEYS } from './storageKeys';
import { tipForLesson } from './tips';
import { findLesson } from '../content/curriculum';
import { taalNlId } from '../content/taalBe/ids';
import type { ChatLine } from '../content/types';
import { countRaw } from './count';
import { joinGelukt, type Progress } from './progress';

/**
 * "Probeer het vandaag op je werk" (components/WorkTry.tsx): at the end of a lesson, one sentence
 * of that lesson to say at work today, as an if-then plan: "Als <the moment>, zeg dan: <the
 * sentence>" (implementation intentions, d = 0.65 for reaching goals: Gollwitzer & Sheeran 2006;
 * reports/Leerwetenschap en tweede taal.md, voorstel 2 en W1). Not after every lesson: only a
 * lesson's first time (not a review), only a lesson with a sentence made for the work floor, and
 * at most once a day (the first such lesson of the day). Plain text with a speaker on the result:
 * nothing more to tap.
 * - The language course: the "Zeg het zo" phrase of the lesson's own tip (with a name in it:
 *   another line of the lesson, see UNNAMED); the moment is the tip's situation (in the help
 *   language), without its closing question.
 * - Werkregels: the lesson's "Zo zeg je het" sentence (one without a name); the moment is its
 *   context (Dutch only).
 * Never a sentence with someone's name in it (hasName).
 */
export interface WorkTryLine {
  id: string;
  nl: string;
  /** What it means (empty in Werkregels: all Dutch). */
  en: string;
  /** The moment ("Als …"): a tip's situation, English with its help-language text by id. */
  when?: { id: string; en: string };
  /** The moment in Werkregels, in Dutch (the model step's context). */
  whenNl?: string;
}

/** A sentence short enough to keep in mind for the day (one or two short sentences). */
export const WORK_TRY_MAX_WORDS = 12;

const fits = (nl: string) => nl.trim().split(/\s+/).length <= WORK_TRY_MAX_WORDS;

/**
 * The people the course's Dutch names: the cast (src/components/Characters.tsx) and the colleagues,
 * bosses and learners of the lessons, chats and stories of both tracks (and "De Vries", "Ali
 * Haddad"). tests/workTry.test.ts also finds them in the content itself.
 */
const PEOPLE = [
  'Bram', 'Amina', 'Henk', 'Jada',
  'Ali', 'Bakker', 'Bogdan', 'Dewi', 'Esra', 'Ewa', 'Fatima', 'Haddad', 'Hatice', 'Jan', 'Jansen', 'Jayden', 'Joep', 'Karin',
  'Kevin', 'Linda', 'Lotte', 'Malik', 'Mark', 'Mehmet', 'Mohammed', 'Nadia', 'Peeters', 'Piotr', 'Sanne', 'Sara', 'Vries', 'Yonas',
];
// (No lookbehind: an old iPhone cannot make one, tests/oldPhones.test.ts.)
const PERSON = new RegExp(`(?:^|[^\\p{L}])(?:${PEOPLE.join('|')})(?:'?s)?(?!\\p{L})`, 'u');
/** Someone named the way a chat does it ("ik ben Jayden", "met Ali", "Hoi Mark", "Groet, Ali"), also a name not in PEOPLE. */
const INTRODUCED = /(?:^|[^\p{L}])(?:ik ben|ik heet|mijn naam is|met|Hoi|Hallo|Beste|Dag|Groet,|Groeten,) \p{Lu}\p{Ll}/u;
/** A name spelled out letter by letter ("Ik spel het even: A, L, I."). */
const SPELLED = /(?:^|[^\p{L}])\p{Lu}(?:, \p{Lu}(?!\p{L})){2,}/u;

/**
 * A sentence with someone's name in it ("Hoi, ik ben Ali.", "Henk, er zit een doos vast."): the
 * character's sentence, not one to say yourself. A learner who reads little says it as written,
 * name and all (the owner's request, 4 November 2026: before, only "ik ben"/"met" and only in Werkregels).
 */
export const hasName = (nl: string): boolean => PERSON.test(nl) || INTRODUCED.test(nl) || SPELLED.test(nl);

/**
 * A tip whose "Zeg het zo" has a name in it: another line of its own lesson instead, one for the
 * same moment, translated and recorded already (no new sentence to translate and record). A
 * named tip without one here has no card: c.email and c.texting (a written message with names),
 * c.details (Ali's name spelled out).
 */
const UNNAMED: Record<string, string> = {
  'c.names': 's.people.3', // "Ik ben een nieuwe collega." for "Hoi, ik ben Ali. Ik ben nieuw hier."
  'c.arrive': 'c.arrive.a', // "Ik ben nieuw. Ik begin vandaag." for "Goedemorgen, ik ben Ali. Ik begin vandaag. …"
  'c.callin': 's.callin.2', // "Ik denk dat ik overmorgen weer kom." for "Hallo, met Ali. Ik kan vandaag niet komen."
};

/** The tip's line to say: its phrase, or (with a name in it) the line of UNNAMED, as the lesson plays it. */
function tipLine(lessonId: string, phrase: ChatLine, tipId: string): ChatLine | undefined {
  if (!hasName(phrase.nl)) return phrase;
  const want = UNNAMED[taalNlId(tipId)];
  const lesson = want ? findLesson(lessonId, 'taal')?.lesson : undefined;
  const lines = lesson ? [...lesson.sentences, ...(lesson.dialogues ?? []).map((d) => d.reply)] : [];
  const line = lines.find((l) => taalNlId(l.id) === want);
  return line && !hasName(line.nl) ? line : undefined;
}

/** The lesson's sentence to try at work, with its moment: see WorkTryLine. */
export function workTryLine(lessonId: string): WorkTryLine | undefined {
  const tip = tipForLesson(lessonId);
  if (tip) {
    const { situation } = tip;
    const line = tipLine(lessonId, tip.phrase, tip.id);
    if (!line || !fits(line.nl)) return undefined;
    // "Which is right?" situations ask about the meaning of a line, not a moment to speak.
    return { id: line.id, nl: line.nl, en: line.en, ...(situation.ask === 'which' ? {} : { when: { id: situation.id, en: situation.en } }) };
  }
  const steps = findLesson(lessonId, 'regels')?.lesson.steps ?? [];
  const model = steps.find((s): s is Extract<typeof s, { kind: 'model' }> => s.kind === 'model' && fits(s.nl) && !hasName(s.nl));
  return model ? { id: model.id, nl: model.nl, en: '', whenNl: model.context } : undefined;
}

/** The day the card last showed, on this device only (a lost value only shows it once more). */
const KEY = KEYS.workTry;
let dayMemory: string | null = null;

function shownOn(): string | null {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return dayMemory;
  }
}

/**
 * The card for a finished lesson, or undefined. `first`: the lesson's first time (no review).
 * Showing it marks the day (`today`, YYYY-MM-DD), so the next lesson today has none.
 */
export function workTryFor(lessonId: string, first: boolean, today: string): WorkTryLine | undefined {
  if (!first || shownOn() === today) return undefined;
  const line = workTryLine(lessonId);
  if (!line) return undefined;
  dayMemory = today;
  try {
    localStorage.setItem(KEY, today);
    localStorage.setItem(ASK_KEY, JSON.stringify({ lesson: lessonId, day: today }));
  } catch {
    // Private mode: remembered for this visit only (and no "Gelukt?" on a later day).
  }
  return line;
}

/**
 * "Gelukt?" (components/GeluktCard.tsx): on a later day, the home asks whether the sentence of the
 * card was said at work. Two answers: "Ja, gelukt" closes it; "Nog niet" asks once more the next
 * day (see answerGelukt).
 * Only the lesson and the day of the card are kept for the question, on this device. The answer
 * is counted anonymously ("/e/gelukt/ja", "/e/gelukt/nog-niet", src/lib/count.ts), with nothing
 * else. Since 5 November 2026 (the owner's request) "Ja, gelukt" also keeps the sentence in the
 * progress, in "Gelukt op het werk" (addGelukt): a collection that only grows.
 */
const ASK_KEY = KEYS.workTryAsk;

export type GeluktAnswer = 'ja' | 'nog-niet';

/** The sentence to ask about today, or undefined: a card shown on an earlier day, not yet answered. */
export function geluktDue(today: string): WorkTryLine | undefined {
  let asked: { lesson?: unknown; day?: unknown } | null = null;
  try {
    asked = JSON.parse(localStorage.getItem(ASK_KEY) ?? 'null');
  } catch {
    return undefined;
  }
  if (!asked || typeof asked.lesson !== 'string' || typeof asked.day !== 'string' || asked.day >= today) return undefined;
  return workTryLine(asked.lesson);
}

/**
 * The answer, counted (when counting is on). "Ja, gelukt" closes the question for good. "Nog niet"
 * the first time keeps it for one more day (a second chance for the same plan); the second time
 * it closes too. `today`: YYYY-MM-DD.
 */
export function answerGelukt(answer: GeluktAnswer, today?: string): void {
  try {
    const asked = JSON.parse(localStorage.getItem(ASK_KEY) ?? 'null') as { lesson?: unknown; again?: unknown } | null;
    if (answer === 'nog-niet' && today && asked && typeof asked.lesson === 'string' && !asked.again) {
      localStorage.setItem(ASK_KEY, JSON.stringify({ lesson: asked.lesson, day: today, again: true }));
    } else {
      localStorage.removeItem(ASK_KEY);
    }
  } catch {
    // Nothing kept: nothing to close.
  }
  countRaw(`/e/gelukt/${answer}`, 'gelukt');
}

/**
 * "Ja, gelukt": the sentence goes into "Gelukt op het werk" (Progress.gelukt), with the day
 * (`today`, YYYY-MM-DD). A sentence that is there already stays as it was (its first day).
 */
export function addGelukt(p: Progress, line: WorkTryLine, today: string): Progress {
  if (p.gelukt?.some((e) => e.id === line.id)) return p;
  return { ...p, gelukt: joinGelukt(p.gelukt, [{ id: line.id, nl: line.nl, en: line.en, day: today }]) };
}

/** How many sentences are in "Gelukt op het werk". */
export const geluktCount = (p: Progress): number => p.gelukt?.length ?? 0;
