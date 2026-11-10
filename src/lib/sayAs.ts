/**
 * How a Dutch line is pronounced where its spelling would mislead a voice: "app" is said like
 * the English word ("epp": a short e), not as the Dutch letters a-p-p. The app always shows the written
 * text; only what a voice is given changes. Used for the recorded clips (scripts/list-clips.ts:
 * the clip's `say`) and for the phone's own voice (src/lib/audio.ts).
 */
import { sayNumbers } from './sayNumbers';

// A tile (one word on its own) that a voice says wrong as it is written (the owner, 8 November
// 2026): "tot." was read as the abbreviation "total"; "wc" and "digid" are spelled out.
const ALONE: Record<string, string> = { tot: 'tot!', wc: 'wee cee', digid: 'die-gie-dee' };
// A tile fixed again later gets a higher take: "wee-cee" still came out English (take 7).
const TILE_TAKE: Record<string, number> = { wc: 8 };
// Tiles whose recording came out wrong by chance ("ben", or English "trap"): recorded again as
// they are written (the owner listened, 8 November 2026).
const REDO = new Set(['ben', 'heb', 'per', 'trap', 'band']);

const APP = /\b(groeps|vertaal)?app(en|e|je|jes|t|te|s)?\b/gi;

/** "app" → "epp", "appen" → "eppen", "groepsapp" → "groepsepp": always the double p, so the
 *  e stays short and "ep." is never read as the short form of "episode" (the owner heard the word and
 *  the sentences said wrong, 10 November 2026). Times,
 *  amounts and the signs of a sum are said as words too (src/lib/sayNumbers.ts). */
export function sayAs(text: string): string {
  const alone = ALONE[text.trim().toLowerCase()];
  if (alone) return alone;
  // "ID" (identity card) is said letter by letter: "ie-dee"; so is "cao" ("cee-aa-oo", the owner,
  // 5 November 2026: the voices said it as one word).
  return sayNumbers(text).replace(/\bID\b/g, 'ie-dee').replace(/\bcao('s)?\b/gi, (_m, s: string | undefined) => `cee-aa-oo${s ? "'s" : ''}`).replace(APP, (_m, pre: string | undefined, end: string | undefined) => {
    return `${pre ?? ''}epp${end ?? ''}`;
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
/** Take 7: the tiles in ALONE and REDO, said wrong before 8 November 2026 ("tot." → "total"), now
 *  recorded with the language set to Dutch and without the context line (scripts/voices/elevenlabs.mjs). */
export const ALONE_TAKE = 7;
/** Take 9: every line with "app". Take 4 said "ep." (read as "episode"), and was made before the
 *  voices were told to speak Dutch (take 7, 8 November 2026): the owner heard it said wrong in the
 *  word and in the sentences (10 November 2026). Older clips stop playing; the phone says "epp". */
export const APP_TAKE = 9;
const HAS_APP = /\b(groeps|vertaal)?app(en|e|je|jes|t|te|s)?\b/i;
export function minTake(text: string): number {
  const tile = text.trim().toLowerCase();
  if (ALONE[tile] || REDO.has(tile)) return TILE_TAKE[tile] ?? ALONE_TAKE;
  if (HAS_APP.test(text)) return APP_TAKE;
  return /\bcao('s)?\b/i.test(text) ? CAO_TAKE : 0;
}
