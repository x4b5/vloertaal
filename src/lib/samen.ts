import type { ChatLine, Dialogue, Lesson } from '../content/types';

/**
 * "Oefen samen": two people, one phone, the chats (gesprekjes) of a lesson of the language track.
 * One reads the colleague's lines (Bram, Henk, Amina or Jada), the other gives the answers. Turn
 * by turn, big on the screen, with who is talking; at the end the two can swap roles and do it
 * again. No network, no recording, no score: nothing here is stored or counted.
 */

/** Who reads a line: person 1 or person 2 (the two people at the phone). */
export type SamenPerson = 1 | 2;

/** One turn: a line of a chat, whose part it is (the colleague's or the answer) and who reads it. */
export interface SamenTurn {
  line: ChatLine;
  /** 'them': the colleague's line (a character of the cast); 'me': the answer. */
  role: 'them' | 'me';
  person: SamenPerson;
}

/** The chats of a lesson to practise together: those of a language lesson, none in Werkregels
 *  (its lessons have steps, not chats) and none in a lesson without chats. */
export function samenDialogues(lesson: Lesson | undefined): Dialogue[] {
  if (!lesson || lesson.steps?.length) return [];
  return (lesson.dialogues ?? []).filter((d) => d.prompt.nl.trim() && d.reply.nl.trim());
}

/** "Oefen samen" is offered for this lesson. */
export function hasSamen(lesson: Lesson | undefined): boolean {
  return samenDialogues(lesson).length > 0;
}

/**
 * The turns of a lesson's chats, in order: per chat the colleague's line, then the answer.
 * Person 1 reads the colleague, person 2 answers; `swapped` (after "Wissel de rollen") the other
 * way round. The lines stay the same, only who reads them changes.
 */
export function samenTurns(dialogues: readonly Dialogue[], swapped = false): SamenTurn[] {
  const them: SamenPerson = swapped ? 2 : 1;
  const me: SamenPerson = swapped ? 1 : 2;
  return dialogues.flatMap((d): SamenTurn[] => [
    { line: d.prompt, role: 'them', person: them },
    { line: d.reply, role: 'me', person: me },
  ]);
}

/** Where the practice is: the explanation, a turn (its index), or the end (swap or stop). */
export type SamenStep = 'intro' | number | 'end';

/** The step after `step` ("Begin", "Volgende"): the first turn, the next one, then the end. */
export function samenNext(step: SamenStep, turns: number): SamenStep {
  if (step === 'intro') return turns > 0 ? 0 : 'end';
  if (step === 'end') return 'end';
  return step + 1 < turns ? step + 1 : 'end';
}
