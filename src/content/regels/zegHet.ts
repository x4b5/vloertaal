import type { RuleStep } from './types';

type ModelStep = Extract<RuleStep, { kind: 'model' }>;
type WhatdoStep = Extract<RuleStep, { kind: 'whatdo' }>;

/**
 * "Wat zeg je?": in a review the model sentence of a lesson ("Zo zeg je het") comes back as a
 * question, with two worse sentences beside it. Each wrong one is something a person could
 * really say, worse for one plain reason (too vague, says nothing, too angry, gives away what
 * you need not give), and about as long as the model sentence. By the id of the model step.
 * The sentences themselves are in zegHetData.ts, registered with the rules course (registerZegHet).
 */
export const zegHetWrong: Record<string, ZegHetWrong> = {};

/** Puts the Dutch course's sentences in place (src/i18n/packs/nl.ts, with the course; tests too). */
export function registerZegHet(table: Record<string, ZegHetWrong>): void {
  Object.assign(zegHetWrong, table);
}

/** Two wrong sentences for a model step, as in zegHetWrong. */
export type ZegHetWrong = readonly [{ text: string; feedback: string }, { text: string; feedback: string }];

/**
 * The same for the Belgian units (ids "r.be.…"): each unit file brings its own (`zegHet` in
 * src/content/regels/be/units/<name>.ts); src/content/regels/be/index.ts puts them here when the
 * Belgian course loads.
 */
const zegHetWrongBe: Record<string, ZegHetWrong> = {};
export function addZegHetBe(table: Record<string, ZegHetWrong>): void {
  Object.assign(zegHetWrongBe, table);
}

/** The model step as a question (same id: it is the card in the box), or none without wrong sentences. */
export function modelQuestion(step: ModelStep): WhatdoStep | undefined {
  const wrong = zegHetWrong[step.id] ?? zegHetWrongBe[step.id];
  if (!wrong) return undefined;
  return {
    kind: 'whatdo',
    id: step.id,
    situation: `${step.context} Wat zeg je?`,
    options: [
      { id: 'a', text: step.nl, best: true, feedback: 'Goed. Zo zeg je het.', say: true },
      { id: 'b', text: wrong[0].text, best: false, feedback: wrong[0].feedback, say: true },
      { id: 'c', text: wrong[1].text, best: false, feedback: wrong[1].feedback, say: true },
    ],
    why: 'Dit is de zin uit de les. Zo weet de ander wat je bedoelt.',
  };
}
