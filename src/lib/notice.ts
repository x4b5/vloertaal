import type { Notice, Update } from '../content/updates';
import { loadedUpdates } from '../content/updatesLive';
import { dayKey, type Progress } from './progress';
import { trackOf } from './track';

/**
 * "Er is iets veranderd" (src/content/updates.ts, Notice): which notice the home shows, if any.
 * (The logbook as loaded: src/content/updatesLive.ts; a returning learner's start waits for it.)
 *  - Only to a learner in that country (Progress.country; not chosen = 'nl') and that track.
 *  - Only an update newer than the learner's first day (Progress.firstDay), and not after today:
 *    a new learner never sees old notices (their lessons already say what is new).
 *  - Once: the ids seen are kept in Progress.noticesSeen (on this phone only).
 *  - At most one at a time, the newest. Closing it (Oké or Lees meer) also marks the older ones
 *    that would have come next as seen: "Wat is er nieuw?" has them all, the home stays calm.
 */

/** A notice with the day of its update. */
export interface DatedNotice extends Notice {
  date: string;
}

/** The translation's key (src/i18n/notices/<lang>.ts gloss). */
export const noticeGlossId = (id: string): string => `notice.${id}`;

/** Every notice in the list, newest first (as UPDATES). */
export function allNotices(updates: Update[] = loadedUpdates()): DatedNotice[] {
  return updates.flatMap((u) => (u.notice ? [{ ...u.notice, date: u.date }] : []));
}

/** Is this notice for a learner in this country and track? */
export function noticeFits(n: Notice, p: Pick<Progress, 'country' | 'helpLang'>): boolean {
  const country = p.country ?? 'nl';
  const track = trackOf(p as Progress);
  return (n.country === 'both' || n.country === country) && (n.track === 'both' || n.track === track);
}

/** The notices this learner may still see (fits, newer than the first day, not later than today, not seen), newest first. */
function waiting(p: Progress, today: Date, updates: Update[]): DatedNotice[] {
  // Without a first day the app cannot tell old from new: nothing (App sets it on the first open).
  if (!p.firstDay) return [];
  const now = dayKey(today);
  const seen = new Set(p.noticesSeen ?? []);
  return allNotices(updates)
    .filter((n) => n.date > p.firstDay! && n.date <= now && !seen.has(n.id) && noticeFits(n, p))
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

/** The one notice for the home now (the newest waiting), or null. */
export function noticeFor(p: Progress, today: Date, updates: Update[] = loadedUpdates()): DatedNotice | null {
  return waiting(p, today, updates)[0] ?? null;
}

/** The notice was closed (Oké or Lees meer): it, and the older ones still waiting, never come back. */
export function seeNotice(p: Progress, id: string, today: Date, updates: Update[] = loadedUpdates()): Progress {
  const shown = waiting(p, today, updates);
  const at = shown.findIndex((n) => n.id === id);
  const ids = [id, ...(at >= 0 ? shown.slice(at + 1).map((n) => n.id) : [])];
  const seen = [...new Set([...(p.noticesSeen ?? []), ...ids])];
  return { ...p, noticesSeen: seen };
}
