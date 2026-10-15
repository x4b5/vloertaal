import type { Lesson, Unit } from '../types';
import type { DrawnCard, RuleLesson, RuleStep, RuleUnit } from './types';

/**
 * The rules course in the app's own shape: a RuleUnit becomes a Unit and a RuleLesson a Lesson
 * with `words: []`, `sentences: []` and its `steps`, so the route, access, certificates, offline
 * and resume work for both tracks. The texts are Dutch already: the unit's `title` and `titleNl`
 * are the same, and nothing is glossed.
 */
export function toCourseLesson(lesson: RuleLesson): Lesson {
  return {
    id: lesson.id,
    title: lesson.title,
    words: [],
    sentences: [],
    steps: lesson.steps,
    rule: { goal: lesson.goal, remember: lesson.remember, ...(lesson.help?.length ? { help: lesson.help } : {}) },
  };
}

export function toCourseUnit(unit: RuleUnit): Unit {
  return {
    id: unit.id,
    title: unit.title,
    titleNl: unit.title,
    emoji: unit.emoji,
    color: unit.color,
    lessons: unit.lessons.map(toCourseLesson),
  };
}

/** Every rules unit as a Unit, in course order. A unit without lessons is left out (nothing to
 *  play), and a unit listed twice counts once. */
export function toCourseUnits(units: readonly RuleUnit[]): Unit[] {
  const seen = new Set<string>();
  return units.filter((u) => u.lessons.length > 0 && !seen.has(u.id) && (seen.add(u.id), true)).map(toCourseUnit);
}

/**
 * The Dutch texts a step reads aloud, one per speaker (each is one block for the phone's voice,
 * or one recorded clip when the whole block has one). For saving a unit offline.
 */
export function ruleStepTexts(step: RuleStep): string[] {
  switch (step.kind) {
    case 'scene': return [step.lines.join(' ')];
    case 'rule': return [step.title, step.body.join(' ')];
    case 'truefalse': return [step.statement, step.why];
    case 'whatdo': return [step.situation, ...(step.quote ? [step.quote] : []), ...step.options.filter((o) => o.say).map((o) => o.text), step.why];
    case 'whoask': return [step.question, step.why];
    case 'model': return [step.nl];
    case 'payslip': return [step.question, step.why];
    case 'card': return [cardSpeech(step.card), step.question, ...(step.sum?.length ? [step.sum.join(' ')] : []), step.why];
  }
}

/**
 * What the speaker beside a drawn card reads: its heading and its rows ("Kassabon. Totaal: 13,40
 * euro."). A row still to work out ("?") is left out: the voice never gives the answer away. The
 * voice says the times and amounts as words (src/lib/sayNumbers.ts).
 */
export function cardSpeech(card: DrawnCard): string {
  const end = (s: string) => (/[.!?]$/.test(s) ? s : `${s}.`);
  const head = end(card.sub ? `${card.title}, ${card.sub}` : card.title);
  return [head, ...card.rows.filter((r) => !r.answer).map((r) => end(r.value ? `${r.label}: ${r.value}` : r.label))].join(' ');
}
