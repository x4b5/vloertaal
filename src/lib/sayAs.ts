/**
 * How a Dutch line is pronounced where its spelling would mislead a voice: "app" is said like
 * the English word ("ep"), not as the Dutch letters a-p-p. The app always shows the written
 * text; only what a voice is given changes. Used for the recorded clips (scripts/list-clips.ts:
 * the clip's `say`) and for the phone's own voice (src/lib/audio.ts).
 */
import { sayNumbers } from './sayNumbers';

// A tile (one word on its own) that a voice says wrong as it is written (the owner, 8 November
// 2026): "tot." was read as the abbreviation "total"; "wc" and "digid" are spelled out.
const ALONE: Record<string, string> = { tot: 'tot!', wc: 'wee-cee', digid: 'die-gie-dee' };
// Tiles whose recording came out wrong by chance ("ben", or English "trap"): recorded again as
// they are written (the owner listened, 8 November 2026).
const REDO = new Set(['ben', 'heb', 'per', 'trap', 'band']);

const APP = /\b(groeps|vertaal)?app(en|e|je|jes|t|te|s)?\b/gi;

/** "appen" → "eppen" (short e before a vowel), "app" → "ep", "groepsapp" → "groepsep". Times,
 *  amounts and the signs of a sum are said as words too (src/lib/sayNumbers.ts). */
export function sayAs(text: string): string {
  const alone = ALONE[text.trim().toLowerCase()];
  if (alone) return alone;
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
/** Take 6: the tiles in ALONE and REDO, said wrong before 8 November 2026 ("tot." → "total"). */
export const ALONE_TAKE = 6;
export function minTake(text: string): number {
  const tile = text.trim().toLowerCase();
  if (ALONE[tile] || REDO.has(tile)) return ALONE_TAKE;
  return /\bcao('s)?\b/i.test(text) ? CAO_TAKE : 0;
}
