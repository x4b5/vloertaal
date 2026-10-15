/**
 * The first run keeps one history entry per page, so the phone's Back button goes back one
 * question instead of leaving the app (App.tsx). `stack` counts the entries above the first
 * page, so finishing the first run can step back to that first entry and put the home there.
 */

/** A page within a first-run page (the language list, the sector's second step): its own entry. */
export function pushSubStep(extra: Record<string, unknown>): void {
  const s = (history.state ?? {}) as Record<string, unknown>;
  const stack = typeof s.stack === 'number' ? s.stack : 0;
  history.pushState({ ...s, ...extra, stack: stack + 1 }, '');
}
