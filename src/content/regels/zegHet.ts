import type { RuleStep } from './types';

type ModelStep = Extract<RuleStep, { kind: 'model' }>;
type WhatdoStep = Extract<RuleStep, { kind: 'whatdo' }>;

/**
 * "Wat zeg je?": in a review the model sentence of a lesson ("Zo zeg je het") comes back as a
 * question, with two worse sentences beside it. Each wrong one is something a person could
 * really say, worse for one plain reason (too vague, says nothing, too angry, gives away what
 * you need not give), and about as long as the model sentence. By the id of the model step.
 */
export const zegHetWrong: Record<string, readonly [{ text: string; feedback: string }, { text: string; feedback: string }]> = {
};

/** The model step as a question (same id: it is the card in the box), or none without wrong sentences. */
export function modelQuestion(step: ModelStep): WhatdoStep | undefined {
  const wrong = zegHetWrong[step.id];
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
