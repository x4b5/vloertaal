import type { Track } from '../lib/track';
import { allCountriesTaalUnits, learnedWords, taalCourseUnits } from './curriculum';
import { taalNlId } from './taalBe/ids';
import { nlId } from './regels/be/ids';
import { allCountriesRulesUnits, rulesCourseUnits, setRulesUnits } from './rulesCourse';
import type { RuleStep } from './regels/types';
import type { Lesson, Unit } from './types';
import { allRegionUnits } from './regio';

/**
 * The two courses of the app, one per track (src/lib/track.ts):
 *  - 'taal': the Dutch course (src/content/curriculum.ts), always here;
 *  - 'regels': the work-rules course (src/content/regels), registered when its file loads
 *    (src/i18n/packs/nl.ts), so it is empty until then.
 * Unit and lesson ids never clash between the two ("u."/"l." and "r."/"r.l."), so a lookup by
 * id can search both.
 */

/**
 * Puts the rules course in place (src/i18n/packs/nl.ts; tests and screenshots with a stub). `be`:
 * the Belgian course (docs/werkregels-belgie.md), played when progress.country is 'be'
 * (src/content/rulesCourse.ts). Without it, a learner in Belgium plays the Dutch course.
 */
export function registerRulesCourse(rules: Unit[], be: Unit[] | null = null): void {
  setRulesUnits(rules, be);
}

/** The units of one track, in course order. */
export function courseUnits(track: Track = 'taal'): Unit[] {
  // The language course follows the country too (src/content/taalBe, docs/taal-belgie.md).
  return track === 'regels' ? rulesCourseUnits() : taalCourseUnits();
}

/** Every unit of both courses (the language course first). */
export function allCourseUnits(): Unit[] {
  return [...taalCourseUnits(), ...rulesCourseUnits()];
}

/** A lesson and its unit in one track's course (a region's unit of that track included). */
export function findLessonIn(track: Track, id: string): { unit: Unit; lesson: Lesson } | undefined {
  for (const unit of [...courseUnits(track), ...allRegionUnits(track)]) {
    const lesson = unit.lessons.find((l) => l.id === id);
    if (lesson) return { unit, lesson };
  }
  return undefined;
}

/**
 * A unit by id, in either course, or a region's unit (src/content/regio). Region units are not in
 * allCourseUnits: they never get a certificate (the certificates are the same wherever you live).
 */
export function findCourseUnit(id: string | undefined): Unit | undefined {
  return id ? [...allCourseUnits(), ...allCountriesTaalUnits(), ...allRegionUnits()].find((u) => u.id === id) : undefined;
}

/**
 * A rules unit's id as the course of the learner's country has it: "r.loon" is "r.be.loon" in the
 * Belgian course once that unit is written there, and "r.be.loon" is "r.loon" in the Dutch one.
 * Any other id (or a unit in neither) stays as it is.
 */
export function rulesTwinHere(id: string): string {
  // A language unit ("u.society" ↔ "be.u.society", src/content/taalBe) the same way.
  if (!id.startsWith('r.')) {
    if (!/^(be\.)?u\./.test(id)) return id;
    const nl = taalNlId(id);
    return taalCourseUnits().find((u) => taalNlId(u.id) === nl)?.id ?? id;
  }
  const base = nlId(id);
  return rulesCourseUnits().find((u) => nlId(u.id) === base)?.id ?? id;
}

/** A rules lesson of either country's course (a backup keeps both, src/lib/progress.ts). */
export function isRulesLessonAnyCountry(lessonId: string): boolean {
  return allCountriesRulesUnits().some((u) => u.lessons.some((l) => l.id === lessonId));
}

/** The unit a lesson belongs to, in either course (or a region's unit). */
export function unitOfLesson(lessonId: string): Unit | undefined {
  // The language course of the other country too (a Belgian lesson is kept in a backup).
  return [...allCourseUnits(), ...allCountriesTaalUnits(), ...allRegionUnits()].find((u) => u.lessons.some((l) => l.id === lessonId));
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
  for (const unit of [...courseUnits('regels'), ...allRegionUnits('regels')]) {
    for (const lesson of unit.lessons) if (completed[lesson.id]) for (const r of ruleCards(lesson)) ids.add(r.id);
  }
  return ids.size;
}
