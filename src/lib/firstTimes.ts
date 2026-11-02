/**
 * A hint shown only the first few times on this phone (the owner's choice, 2 November 2026: what
 * comes back on every screen is skipped, also when it matters once). Counted per hint, on the
 * device only (localStorage); without storage, for this visit.
 */
const KEY = 'vloertaal:first-times';
let memory: Record<string, number> = {};

function counts(): Record<string, number> {
  try {
    const v = JSON.parse(localStorage.getItem(KEY) ?? '{}') as unknown;
    return v && typeof v === 'object' && !Array.isArray(v) ? (v as Record<string, number>) : {};
  } catch {
    return memory;
  }
}

/** Is this one of the first `n` times the hint is shown? Counts it when it is. */
export function firstTimes(hint: string, n: number): boolean {
  const all = counts();
  const seen = typeof all[hint] === 'number' ? all[hint] : 0;
  if (seen >= n) return false;
  const next = { ...all, [hint]: seen + 1 };
  memory = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // Private mode: for this visit only.
  }
  return true;
}

/** How often the hint was shown (tests). */
export const timesShown = (hint: string): number => counts()[hint] ?? 0;

/** Hints and how many times each is shown. */
export const TAP_TO_HEAR_TIMES = 12; // about the word cards of the first two lessons
export const STAMP_LATER_TIMES = 3;
