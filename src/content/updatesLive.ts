import { useEffect, useState } from 'react';
import type { Update } from './updates';

/**
 * The logbook (src/content/updates.ts, about 20 kB) is not in the app's start file: the first
 * screen does not need it. It loads with import() and puts itself in place here (registerUpdates,
 * at the end of updates.ts):
 *  - for a returning learner while the app starts (src/main.tsx, next to the help language's
 *    file), so the home's notice ("Er is iets veranderd", src/lib/notice.ts) is there at once;
 *  - else when a screen needs it (Over, "Wat is er nieuw?": useUpdates).
 * A test or script that imports updates.ts has it at once.
 */
export interface UpdatesData {
  updates: Update[];
  upcoming: string[];
}

let data: UpdatesData | null = null;
let pending: Promise<void> | null = null;
const listeners = new Set<() => void>();

/** Called by updates.ts when it loads. */
export function registerUpdates(d: UpdatesData): void {
  data = d;
  listeners.forEach((fn) => fn());
}

/** The logbook's entries, newest first; none while it is not here. */
export const loadedUpdates = (): Update[] => data?.updates ?? [];

/** Loads the logbook (once; again after a failure, e.g. offline). */
export function ensureUpdates(): Promise<void> {
  if (data) return Promise.resolve();
  pending ??= import('./updates').then(() => undefined).finally(() => { pending = null; });
  return pending;
}

/** The logbook for a screen: null at first when it is not here yet, then the screen draws again with it. */
export function useUpdates(): UpdatesData | null {
  const [d, setD] = useState(data);
  useEffect(() => {
    const on = () => setD(data);
    listeners.add(on);
    on();
    ensureUpdates().catch(() => {});
    return () => void listeners.delete(on);
  }, []);
  return d;
}
