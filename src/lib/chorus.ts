import type { Progress } from './progress';

/**
 * "Zeg het samen" (choral speaking, shadowing): a safer step for learners who do not dare to
 * speak yet, and who therefore skip the recording and so never practise it (the owner's request,
 * 5 November 2026). In the speaking exercise ("Zeg het", src/components/Speaking.tsx) the voice
 * says the sentence slowly, after a short 3-2-1, and the learner says it at the same time. Nothing
 * is recorded, nothing is scored, no microphone is asked for. Then the microphone comes: "Nu
 * alleen". The ladder: listen (the card's speaker), say it together, say it alone.
 *
 * Not in every exercise (it makes the lesson longer); a lesson has one "Zeg het" (lib/speaking.ts),
 * so "the first of a lesson" would be every one. It comes
 *  - once, in the first "Zeg het" of a lesson the learner ever meets (Progress.speakMet), so every
 *    learner knows the step is there; Bram's "Fouten mogen" (one line, no button) comes with it;
 *  - always for a learner who skipped the recording the last SHY_AFTER times in a row ("Zeg het
 *    liever hardop" while the microphone could record; Progress.speakSkips), until they record
 *    once again. A microphone that failed or was refused is not the learner's choice: not counted.
 * Never in "Wat zeg je?" (the reply is said from memory, before it is shown or heard) nor in
 * "Wat ken je al?" or the unit check (tests). Both fields stay on this phone (not in the backup);
 * "Voortgang wissen" wipes them.
 */

/** Skipped this many times in a row: "Zeg het samen" at every "Zeg het". */
export const SHY_AFTER = 2;
/** Skips are counted up to here (the number itself means nothing more). */
export const SKIPS_KEEP = 9;

/** What a lesson's "Zeg het" tells the app: met (it opened), skipped, or recorded. */
export type SpeakEvent = 'met' | 'skipped' | 'recorded';

type SpeakState = Pick<Progress, 'speakMet' | 'speakSkips'>;

/** The last SHY_AFTER speaking exercises in a row were skipped. */
export function speakShy(p: SpeakState): boolean {
  return (p.speakSkips ?? 0) >= SHY_AFTER;
}

/** "Zeg het samen" before recording: the first "Zeg het" ever, or for a learner who skips it. */
export function chorusDue(p: SpeakState): boolean {
  return !p.speakMet || speakShy(p);
}

/** Bram's "Fouten mogen. Nederlanders begrijpen je ook met fouten.": once, at the first "Zeg het". */
export function braveDue(p: SpeakState): boolean {
  return !p.speakMet;
}

/** The progress after a lesson's "Zeg het" told something (the same object when nothing changes). */
export function afterSpeak<P extends SpeakState>(p: P, what: SpeakEvent): P {
  if (what === 'met') return p.speakMet ? p : { ...p, speakMet: true };
  if (what === 'skipped') return { ...p, speakSkips: Math.min(SKIPS_KEEP, (p.speakSkips ?? 0) + 1) };
  if (p.speakSkips === undefined) return p;
  const next = { ...p };
  delete next.speakSkips;
  return next;
}
