import type { UiKey } from '../i18n/types';
import type { Exercise } from './exercises';

/**
 * The heading of the feedback label after an answer, in Dutch. A wrong answer is already red with
 * a cross, so its heading is the right answer itself ("Het goede antwoord is:"), not a verdict
 * like "Niet helemaal" (feedback from an NT2 teacher, 29 okt 2026). A situation has a usual
 * choice rather than one right answer: "Het beste antwoord is:".
 */
export function feedbackTitle(correct: boolean, kind: Exercise['kind']): string {
  if (correct) return 'Goed zo!';
  return kind === 'situation' ? 'Het beste antwoord is:' : 'Het goede antwoord is:';
}

/** The heading's meaning in the help language (English small under it). */
export function feedbackMeaningKey(correct: boolean, almost: boolean | undefined, kind: Exercise['kind']): UiKey {
  if (correct) return almost ? 'almost' : kind === 'situation' ? 'goodChoice' : 'correct';
  return kind === 'situation' ? 'bestAnswer' : 'correctAnswer';
}
