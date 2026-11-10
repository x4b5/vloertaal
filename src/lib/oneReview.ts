import type { Lesson } from '../content/types';
import { type Cards, type DailyCard, dailyCard, dailyIds, dailyLesson, dailyRuleIds, dailyRuleLesson, dueIds } from './spaced';
import { trackOfId } from './track';

/**
 * "Eén app" (src/lib/oneApp.ts): one "Herhaal vandaag" for a learner of the language course who
 * also did lessons of "Zo werkt het hier". Today's words first, as always, then at most
 * RULES_IN_REVIEW of the rule questions that are due (in plain Dutch, as in their lessons). Rule
 * questions keep their own cards (by step id, src/lib/spaced.ts), so nothing changes for the words.
 * Without the switch the language course's review is exactly as before.
 */
export const RULES_IN_REVIEW = 3;

/** The rule questions due today, at most RULES_IN_REVIEW (none while the rules course is not here). */
export function dueRuleIds(cards: Cards, today: string): string[] {
  return dailyRuleIds(cards, today).slice(0, RULES_IN_REVIEW);
}

/** Today's review ids: the words of the language course, then the rule questions. */
export function oneDailyIds(cards: Cards, today: string): string[] {
  return [...dailyIds(cards, today), ...dueRuleIds(cards, today)];
}

/** The review card on the home: the words' card, with the rule questions counted in. */
export function oneDailyCard(cards: Cards, today: string, reviewDay?: string): DailyCard | null {
  const words = dailyCard(cards, today, reviewDay, 'taal');
  const rules = Math.min(dueIds(cards, today, 'regels').length, RULES_IN_REVIEW);
  if (reviewDay === today || !rules) return words;
  if (words?.state === 'due') return { ...words, due: words.due + rules };
  return { state: 'due', due: rules, tomorrow: words?.tomorrow ?? 0, extra: 0 };
}

/**
 * Today's review as one lesson: the words' lesson with the rule questions as its steps (built after
 * the words, src/lib/exercises.ts buildLesson), or only the rule questions when no word is due.
 */
export function oneDailyLesson(ids: readonly string[], cards: Cards, today: string, opts: { extra?: boolean } = {}): Lesson {
  const ruleIds = ids.filter((id) => trackOfId(id) === 'regels');
  const wordIds = ids.filter((id) => trackOfId(id) !== 'regels');
  const rules = ruleIds.length ? dailyRuleLesson(ruleIds) : undefined;
  if (!wordIds.length && rules) return rules;
  const words = dailyLesson(wordIds, cards, today, opts);
  return rules?.steps?.length ? { ...words, steps: rules.steps } : words;
}
