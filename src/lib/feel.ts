import { KEYS } from './storageKeys';
import { countRaw, mayCount } from './count';
import { demoOn } from './demo';

/**
 * "Wat vind je van Vloertaal?" (the owner's request, 10 November 2026: "zo simpel mogelijk"):
 * three faces on the result of a lesson, twice in a learner's life: after the 3rd and after the
 * 15th finished lesson. A tap is counted on the GoatCounter dashboard like the other counts
 * ("/e/gevoel/na-3/blij"), so the owner sees what learners think, per moment. No text field, no
 * form: nothing about the learner goes along, only the face and the moment. Continue stays, so
 * not answering is always possible.
 *
 * Asked only where the answer can be counted (mayCount: the live site, counting on, no Do Not
 * Track; not in a coach's demonstration): a question whose answer goes nowhere is not asked.
 * Asked once per moment: shown counts as asked (as "Wil je sneller?"), also when Continue is
 * tapped. A learner past both moments (from before this question) is asked once.
 */

/** After how many finished lessons the question comes. */
export const FEEL_AT = [3, 15] as const;
export type FeelAt = (typeof FEEL_AT)[number];

export const FACES = ['niet-blij', 'gewoon', 'blij'] as const;
export type Face = (typeof FACES)[number];

/** The moments already asked on this device ("3,15"). */
const KEY = KEYS.feel;

function storage(): Storage | null {
  try {
    return typeof localStorage === 'undefined' ? null : localStorage;
  } catch {
    return null;
  }
}

function asked(s: Storage): Set<number> {
  return new Set((s.getItem(KEY) ?? '').split(',').filter(Boolean).map(Number));
}

/**
 * The moment to ask now, with `finished` lessons done (this one included), or undefined: the
 * latest moment reached and not asked yet. Nothing when the answer could not be counted, or when
 * the device cannot remember that it asked (it would ask again and again).
 */
export function feelDue(finished: number, canCount: boolean = mayCount() && !demoOn()): FeelAt | undefined {
  if (!canCount) return undefined;
  const s = storage();
  if (!s) return undefined;
  try {
    const done = asked(s);
    const reached = FEEL_AT.filter((m) => m <= finished);
    const last = reached[reached.length - 1];
    return last !== undefined && !done.has(last) ? last : undefined;
  } catch {
    return undefined;
  }
}

/** The question is shown at `at`: that moment and every one before it count as asked. */
export function markFeelAsked(at: FeelAt): void {
  const s = storage();
  if (!s) return;
  try {
    const done = asked(s);
    for (const m of FEEL_AT) if (m <= at) done.add(m);
    s.setItem(KEY, FEEL_AT.filter((m) => done.has(m)).join(','));
  } catch {
    // Blocked storage: feelDue asks nothing then.
  }
}

/** The path a face is counted under: "/e/gevoel/na-3/blij". */
export const feelPath = (at: FeelAt, face: Face): string => `/e/gevoel/na-${at}/${face}`;

/** A face tapped: counted once (a no-op unless mayCount()). */
export function countFeel(at: FeelAt, face: Face): boolean {
  return countRaw(feelPath(at, face), 'gevoel');
}
