import type { Track } from '../lib/track';
import { learnedWords, units } from './curriculum';
import { rulesCourseUnits, setRulesUnits } from './rulesCourse';
import type { RuleStep } from './regels/types';
import type { Lesson, Unit } from './types';

/**
 * The two courses of the app, one per track (src/lib/track.ts):
 *  - 'taal': the Dutch course (src/content/curriculum.ts), always here;
 *  - 'regels': the work-rules course (src/content/regels), registered when its file loads
 *    (src/i18n/packs/nl.ts), so it is empty until then.
 * Unit and lesson ids never clash between the two ("u."/"l." and "r."/"r.l."), so a lookup by
 * id can search both.
 */

/** Puts the rules course in place (src/i18n/packs/nl.ts; tests and screenshots with a stub). */
export function registerRulesCourse(rules: Unit[]): void {
  setRulesUnits(rules);
}

/** The units of one track, in course order. */
export function courseUnits(track: Track = 'taal'): Unit[] {
  return track === 'regels' ? rulesCourseUnits() : units;
}

/** Every unit of both courses (the language course first). */
export function allCourseUnits(): Unit[] {
  return [...units, ...rulesCourseUnits()];
}

/** A lesson and its unit in one track's course. */
export function findLessonIn(track: Track, id: string): { unit: Unit; lesson: Lesson } | undefined {
  for (const unit of courseUnits(track)) {
    const lesson = unit.lessons.find((l) => l.id === id);
    if (lesson) return { unit, lesson };
  }
  return undefined;
}

/** A unit by id, in either course. */
export function findCourseUnit(id: string | undefined): Unit | undefined {
  return id ? allCourseUnits().find((u) => u.id === id) : undefined;
}

/** The unit a lesson belongs to, in either course. */
export function unitOfLesson(lessonId: string): Unit | undefined {
  return allCourseUnits().find((u) => u.lessons.some((l) => l.id === lessonId));
}

/** A lesson the player can play: words to learn (the Dutch course) or steps (the rules course). */
export function isPlayable(lesson: Lesson): boolean {
  return lesson.words.length > 0 || (lesson.steps?.length ?? 0) > 0;
}

/** The rule cards of a lesson (the work-rules track; a language lesson has none). */
export function ruleCards(lesson: Lesson): Extract<RuleStep, { kind: 'rule' }>[] {
  return (lesson.steps ?? []).filter((s): s is Extract<RuleStep, { kind: 'rule' }> => s.kind === 'rule');
}

/**
 * What the learner has learned so far, as the top bar and the result count it: in the language
 * course the distinct words of finished lessons (learnedWords), in the work-rules course the rule
 * cards of finished lessons ("{n} regels geleerd"). Counted from progress, nothing is stored.
 */
export function learnedItems(track: Track, completed: Record<string, unknown>): number {
  if (track === 'taal') return learnedWords(completed).size;
  const ids = new Set<string>();
  for (const unit of courseUnits('regels')) {
    for (const lesson of unit.lessons) if (completed[lesson.id]) for (const r of ruleCards(lesson)) ids.add(r.id);
  }
  return ids.size;
}
