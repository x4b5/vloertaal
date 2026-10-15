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
  return sayNumbers(text).replace(APP, (_m, pre: string | undefined, end: string | undefined) => {
    const tail = end ?? '';
    const stem = /^[e]/i.test(tail) ? 'epp' : 'ep';
    return `${pre ?? ''}${stem}${tail}`;
  });
}
