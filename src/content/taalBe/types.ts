import type { CultureTip } from '../culture';
import type { Unit } from '../types';

/**
 * A line of a Dutch lesson said otherwise in Belgium (a B change, docs/taal-belgie.md): a word, a
 * sentence or a chat line, by its Dutch id. In the Belgian course it plays with the id "be.<id>"
 * and these texts; its translations are the gloss of "be.<id>" (src/i18n/be/units/<slug>.ts).
 * Everything else of the lesson stays as it is (its id too: the lesson's progress counts in both
 * countries).
 */
export interface BeLine {
  nl: string;
  en: string;
  /** A word's emoji (default: the Dutch word's). */
  emoji?: string;
  /** A sentence's other right word orders (Sentence.alt). */
  alt?: string[];
  /**
   * A word's picture: 'same' keeps the Dutch word's drawing (the same thing, another name:
   * "de refter" for "de kantine"); false: an abstract word, no picture. Default: the emoji only.
   */
  picture?: 'same' | false;
}

/**
 * The Belgian version of one Dutch unit of the language track: one file per unit in ./units (a
 * content agent writes only its own files). Either of the two, or both:
 *  - `unit`: the whole unit anew (a C unit: "Meedoen in België"), every id "be." + the Dutch id,
 *    the same lessons in the same order (no mixed review: the course adds it);
 *  - `lines`: the B changes of the Dutch unit's lessons, by Dutch id.
 * And `tips`: the Belgian tips, each with the id "be." + the Dutch tip id (its parts too), for the
 * Dutch lesson (B) or the Belgian lesson (C) it belongs to.
 */
export interface BeTaal {
  /** The Dutch unit ("u.society"). */
  nl: string;
  unit?: Unit;
  lines?: Record<string, BeLine>;
  tips?: CultureTip[];
  /**
   * "Wat kun je nu?" (src/content/kunJeNu.ts) lines said otherwise in Belgium, by their id
   * ("kjn.u.pay.1"): the Flemish sentence. The id and its translation stay (they say the same).
   */
  kun?: Record<string, string>;
}
