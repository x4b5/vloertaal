/**
 * Which moment goes first where two could show at once: one place for the app (src/App.tsx) and
 * for the overview (docs/overzicht.md, src/overzicht/moments.ts). Before 11 November 2026 the
 * order stood in App.tsx as chains of `!a && !b && c`.
 *
 * Only the order lives here. When a moment is due is still each moment's own file.
 */

/**
 * The cards in the place of the next lesson on the home: one at a time, the first that is due.
 *  - notice: "Er is iets veranderd" (src/lib/notice.ts);
 *  - bridge: "Wil je ook de werkregels leren?" (src/lib/bridge.ts);
 *  - nudge: "Bewaar je voortgang" (src/lib/backupNudge.ts);
 *  - reason: "Waarom leer jij Nederlands?" (src/lib/reason.ts).
 */
export const HOME_CARDS = ['notice', 'bridge', 'nudge', 'reason'] as const;
export type HomeCard = (typeof HOME_CARDS)[number];

/**
 * The questions on a lesson's result: one question a screen, the first that is due.
 *  - phrases: the row to the emergency phrases, on the first lesson's result;
 *  - faster: "Wil je sneller?" (src/lib/pace.ts);
 *  - feel: "Wat vind je van Vloertaal?" (src/lib/feel.ts).
 */
export const RESULT_QUESTIONS = ['phrases', 'faster', 'feel'] as const;
export type ResultQuestion = (typeof RESULT_QUESTIONS)[number];

/**
 * The rows on a lesson's result that are not a question, and the questions each makes room for:
 *  - samen: "Oefen samen" (src/lib/samen.ts);
 *  - workTry: "Probeer het vandaag op je werk" (src/lib/workTry.ts).
 */
export const RESULT_ROW_HIDDEN_BY = {
  samen: ['phrases', 'feel'],
  workTry: ['faster', 'feel'],
} as const satisfies Record<string, readonly ResultQuestion[]>;
export type ResultRow = keyof typeof RESULT_ROW_HIDDEN_BY;

/**
 * The first of `order` that is due, or null. The ones after it are not asked at all (some read
 * the phone's storage, or note that they were shown).
 */
export function firstDue<K extends string>(order: readonly K[], due: Record<K, () => unknown>): K | null {
  for (const id of order) if (due[id]()) return id;
  return null;
}

/** Is there room for this row on the result, with this question on it (or none)? */
export function rowFits(row: ResultRow, question: ResultQuestion | null): boolean {
  return question === null || !(RESULT_ROW_HIDDEN_BY[row] as readonly ResultQuestion[]).includes(question);
}
