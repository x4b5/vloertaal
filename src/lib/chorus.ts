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
 *    learner knows the step is there; one of Bram's lines (one line, no button) comes with it;
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

/**
 * Bram's lines (a nudge in the spirit of ACT: the nerves may come along, say it anyway). They are
 * for the learner who does not dare (they skip), not for the one who talks freely with many
 * mistakes, so each line is true for them and gives something to do. Not "Dutch people understand
 * you, even with mistakes": they often do not (the owner, 8 November 2026).
 */
export const BRAVE_LINES = ['speakBrave', 'speakBrave2', 'speakBrave3'] as const;
export type BraveLine = (typeof BRAVE_LINES)[number];

/**
 * Bram's line at this "Zeg het", or null: the first line at the first "Zeg het" ever; for a shy
 * learner (speakShy) at every "Zeg het", a different line lesson by lesson (`lessonsDone`, the
 * number of finished lessons), until they record again.
 */
export function braveLine(p: SpeakState, lessonsDone: number): BraveLine | null {
  if (!p.speakMet) return BRAVE_LINES[0];
  if (!speakShy(p)) return null;
  return BRAVE_LINES[((lessonsDone % BRAVE_LINES.length) + BRAVE_LINES.length) % BRAVE_LINES.length];
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
