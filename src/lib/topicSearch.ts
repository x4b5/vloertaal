import type { Unit } from '../content/types';
import type { HelpLanguage } from '../i18n/types';

/**
 * The search bar on "Alle onderwerpen": find a topic by a word. A learner may type in Dutch, in
 * the help language or in English, with or without accents and capitals ("zIEk", "ziek",
 * "ziekmelden" all find "Ziek melden"). It searches what is already on the screen and in the
 * topics: the topic's names, its lessons' names, and the Dutch words it teaches (with their
 * help-language gloss). In the work-rules track, also what a lesson is for (its goal).
 *
 * Topics whose name matches come first, then topics with a matching lesson, then topics that
 * only teach a matching word; within each group the order of the list stays.
 */

/** Lower case, no accents or marks (also the Arabic short vowels), one space between words. */
export function searchKey(text: string): string {
  return text
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/[’'`´]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim();
}

/** The shortest search that is searched: one letter finds almost everything. */
export const SEARCH_MIN = 2;

const has = (texts: (string | undefined)[], q: string) => texts.some((t) => t && searchKey(t).includes(q));

/** How well a topic matches: 0 is no match, 3 its name, 2 a lesson, 1 a word or a goal. */
export function topicScore(unit: Unit, q: string, lang?: HelpLanguage): number {
  const help = (id: string) => lang?.gloss[id];
  if (has([unit.titleNl, unit.title, help(unit.id)], q)) return 3;
  if (unit.lessons.some((l) => has([l.title, help(l.titleId ?? l.id)], q))) return 2;
  if (unit.lessons.some((l) => l.words.some((w) => has([w.nl, w.en, help(w.id)], q)) || has([l.rule?.goal], q))) return 1;
  return 0;
}

/** The topics that match the search, best first (see above). An empty or too short search: none. */
export function searchTopics(units: Unit[], query: string, lang?: HelpLanguage): Unit[] {
  const q = searchKey(query);
  if (q.length < SEARCH_MIN) return [];
  const seen = new Set<string>();
  return units
    .filter((u) => (seen.has(u.id) ? false : (seen.add(u.id), true)))
    .map((unit, i) => ({ unit, i, score: topicScore(unit, q, lang) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score || a.i - b.i)
    .map((r) => r.unit);
}
