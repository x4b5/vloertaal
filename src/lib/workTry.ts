import { tipForLesson } from '../content/culture';
import { findLesson } from '../content/curriculum';
import { countRaw } from './count';

/**
 * "Probeer het vandaag op je werk" (components/WorkTry.tsx): at the end of a lesson, one sentence
 * of that lesson to say at work today, as an if-then plan: "Als <the moment>, zeg dan: <the
 * sentence>" (implementation intentions, d = 0.65 for reaching goals: Gollwitzer & Sheeran 2006;
 * reports/Leerwetenschap en tweede taal.md, voorstel 2 en W1). Not after every lesson: only a
 * lesson's first time (not a review), only a lesson with a sentence made for the work floor, and
 * at most once a day (the first such lesson of the day). Plain text with a speaker on the result:
 * nothing more to tap.
 * - The language course: the "Zeg het zo" phrase of the lesson's own tip; the moment is the tip's
 *   situation (in the help language), without its closing question.
 * - Werkregels: the lesson's "Zo zeg je het" sentence; the moment is its context (Dutch only).
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

/** A model sentence with a character's name in it ("Hoi, ik ben Jayden."): not one to say yourself. */
const NAMED = /\b(?:ik ben|met) [A-Z]/;

/** The lesson's sentence to try at work, with its moment: see WorkTryLine. */
export function workTryLine(lessonId: string): WorkTryLine | undefined {
  const tip = tipForLesson(lessonId);
  if (tip) {
    const { phrase, situation } = tip;
    if (!fits(phrase.nl)) return undefined;
    // "Which is right?" situations ask about the meaning of a line, not a moment to speak.
    return { id: phrase.id, nl: phrase.nl, en: phrase.en, ...(situation.ask === 'which' ? {} : { when: { id: situation.id, en: situation.en } }) };
  }
  const steps = findLesson(lessonId, 'regels')?.lesson.steps ?? [];
  const model = steps.find((s): s is Extract<typeof s, { kind: 'model' }> => s.kind === 'model' && fits(s.nl) && !NAMED.test(s.nl));
  return model ? { id: model.id, nl: model.nl, en: '', whenNl: model.context } : undefined;
}

/** The day the card last showed, on this device only (a lost value only shows it once more). */
const KEY = 'vloertaal:work-try';
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
 * Only the lesson and the day of the card are kept, on this device. The answer is counted
 * anonymously ("/e/gelukt/ja", "/e/gelukt/nog-niet", src/lib/count.ts), with nothing else.
 */
const ASK_KEY = 'vloertaal:work-try-ask';

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
