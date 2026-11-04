import type { UiKey } from '../i18n/types';
import type { Exercise } from './exercises';

/**
 * The heading of the feedback label after an answer, in Dutch. A wrong answer is already red with
 * a cross, so its heading is the right answer itself ("Het goede antwoord is:"), not a verdict
 * like "Niet helemaal" (feedback from an NT2 teacher, 29 okt 2026). A situation has a usual
 * choice rather than one right answer: "Het beste antwoord is:".
 */
export function feedbackTitle(correct: boolean, kind: Exercise['kind'], almost = false): string {
  // Almost (one typo, a wrong or missing article): right, but not "Goed zo!" (that read as fully right).
  if (correct) return almost ? 'Bijna goed!' : 'Goed zo!';
  return kind === 'situation' ? 'Het beste antwoord is:' : 'Het goede antwoord is:';
}

/**
 * The heading's meaning in the help language (English small under it). After a wrong answer it
 * announces the answer ("The right answer is:"), like the Dutch: "Correct answer" ("Poprawna
 * odpowiedź", "Doğru cevap") next to the red cross read as "right!" (4 November 2026).
 * `correctAnswer` stays the screen-reader label on the right option itself.
 */
export function feedbackMeaningKey(correct: boolean, almost: boolean | undefined, kind: Exercise['kind']): UiKey {
  if (correct) return almost ? 'almost' : kind === 'situation' ? 'goodChoice' : 'correct';
  return kind === 'situation' ? 'bestAnswerIs' : 'rightAnswerIs';
}
