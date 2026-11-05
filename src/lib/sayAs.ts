/**
 * How a Dutch line is pronounced where its spelling would mislead a voice: "app" is said like
 * the English word ("ep"), not as the Dutch letters a-p-p. The app always shows the written
 * text; only what a voice is given changes. Used for the recorded clips (scripts/list-clips.ts:
 * the clip's `say`) and for the phone's own voice (src/lib/audio.ts).
 */
import { sayNumbers } from './sayNumbers';

const APP = /\b(groeps|vertaal)?app(en|e|je|jes|t|te|s)?\b/gi;

/** "appen" → "eppen" (short e before a vowel), "app" → "ep", "groepsapp" → "groepsep". Times,
 *  amounts and the signs of a sum are said as words too (src/lib/sayNumbers.ts). */
export function sayAs(text: string): string {
  // "ID" (identity card) is said letter by letter: "ie-dee"; so is "cao" ("cee-aa-oo", the owner,
  // 5 November 2026: the voices said it as one word).
  return sayNumbers(text).replace(/\bID\b/g, 'ie-dee').replace(/\bcao('s)?\b/gi, (_m, s: string | undefined) => `cee-aa-oo${s ? "'s" : ''}`).replace(APP, (_m, pre: string | undefined, end: string | undefined) => {
    const tail = end ?? '';
    const stem = /^[e]/i.test(tail) ? 'epp' : 'ep';
    return `${pre ?? ''}${stem}${tail}`;
  });
}

/**
 * The take a recording of this text needs at least, where an older take is known to be said
 * wrong: "cao" was said as one word before 5 November 2026 (take 5 says "cee-aa-oo"). An older
 * clip of such a text is not played (src/lib/audio.ts): the phone says it right until the new
 * recording is there. scripts/list-clips.ts gives these clips the same take, so the next recording
 * round makes them again. 0: any take will do.
 */
export const CAO_TAKE = 5;
export function minTake(text: string): number {
  return /\bcao('s)?\b/i.test(text) ? CAO_TAKE : 0;
}
