import type { ChatLine } from './types';

/**
 * The shape of a "Zo werkt het hier" tip, and what can be read from one tip alone. No tip texts
 * here: this file is part of the first screen, the tips themselves are not (src/content/culture.ts).
 */
/**
 * The heading over a situation, matching the question it ends with: "Wat doe je?" (the default),
 * "Wat zeg je?" (the answer is something you say) or "Wat klopt?" (the answer is a fact: a time,
 * what a word means). Keys of the ui texts: whatDoYouDo, whatDoYouSay, whatIsRight.
 */
export type SituationAsk = 'whatdo' | 'whatsay' | 'which';

export interface CultureTip {
  id: string;
  /** Lesson this tip belongs to. */
  lessonId: string;
  emoji: string;
  title: string;
  /** Two or three short, plain-English sentences (A2 level). */
  body: string;
  /** The one Dutch sentence to use in this situation. */
  phrase: ChatLine;
  /** "What do you do?" — a short workplace situation. `nl`: the Dutch quoted in it, which a
   *  speaker beside the text plays in the character's voice. */
  situation: { id: string; en: string; nl?: string; ask?: SituationAsk };
  /** Who the character in the situation is, when the text does not say it with she/he. */
  speaker?: 'f' | 'm';
  options: { id: string; en: string; best: boolean }[];
  /** Shown after answering: why the best option works here. */
  why: { id: string; en: string };
  /**
   * The sentences of the body shown in a lesson (indices of the English sentences, see
   * `sentences` in components/Exercises.tsx), when the first three would cut the one the
   * situation or the "Zeg het zo" phrase depends on. Default: the first three. The whole text
   * stays on the "Zo werkt het hier" page.
   */
  lead?: readonly number[];
  /** The Dutch key terms shown in bold on the tip's page (TIP_TERMS). */
  terms?: readonly string[];
}

/**
 * Whether the person in a tip's situation is a woman ('f'), a man ('m') or not said (null),
 * read from the English text ("What does she mean?", "He asks for ..."), so the character
 * shown and the voice that speaks always match the text.
 */
export function tipGender(t: CultureTip): 'f' | 'm' | null {
  if (t.speaker) return t.speaker;
  const text = [t.situation.en, ...t.options.map((o) => o.en), t.why.en].join(' ');
  const she = /\b(she|her|hers|herself|woman|female)\b/i.exec(text);
  const he = /\b(he|him|his|himself|man|male)\b/i.exec(text);
  if (she && (!he || she.index < he.index)) return 'f';
  if (he) return 'm';
  return null;
}
