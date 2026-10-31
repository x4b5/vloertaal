import { isInAppBrowser, isInstalled, isIos, persistAnswer, type PersistAnswer } from './install';

/**
 * "Bewaar je voortgang" on the home, once (src/components/BackupNudge.tsx): a calm card that leads
 * to Settings › "Bewaar je voortgang" (the backup file), only where the progress is really at risk:
 *  - an iPhone or iPad not running the app from its home screen (Safari clears a site's storage
 *    after 7 days without a visit; webkit.org/blog/10218);
 *  - a browser inside another app (Facebook, Instagram …), whose storage is short-lived;
 *  - a browser that said no to keeping the storage (src/lib/install.ts persistStorage).
 * It comes after NUDGE_FIRST finished lessons, once. Tapped away (or the backup made, or simply
 * left for the next lesson), it only comes back after NUDGE_AGAIN more lessons.
 * Pure, apart from the small record on this phone (tests/backupNudge.test.ts).
 */

export const NUDGE_FIRST = 3;
export const NUDGE_AGAIN = 30;

/** What the phone is (the browser's own answers; read by nudgeEnv). */
export interface NudgeEnv {
  ios: boolean;
  installed: boolean;
  inApp: boolean;
  persist: PersistAnswer | null;
}

export function nudgeEnv(): NudgeEnv {
  return { ios: isIos(), installed: isInstalled(), inApp: isInAppBrowser(), persist: persistAnswer() };
}

/** Can this phone lose the progress without a warning? */
export function progressAtRisk(env: NudgeEnv): boolean {
  if (env.inApp) return true;
  if (env.ios && !env.installed) return true;
  return env.persist === 'denied';
}

/**
 * The record on this phone: the number of lessons when the card was shown (or a backup was made),
 * and whether it was closed. Kept apart from the progress: it says something about this phone,
 * not about the learner, and does not travel in the backup file.
 */
export interface NudgeRecord {
  at: number;
  closed: boolean;
}

export const NUDGE_KEY = 'vloertaal:backup-nudge';

export function nudgeRecord(): NudgeRecord | null {
  try {
    const raw = localStorage.getItem(NUDGE_KEY);
    if (!raw) return null;
    const v = JSON.parse(raw) as Partial<NudgeRecord>;
    return typeof v.at === 'number' && v.at >= 0 ? { at: v.at, closed: Boolean(v.closed) } : null;
  } catch {
    return null;
  }
}

function writeRecord(r: NudgeRecord): void {
  try { localStorage.setItem(NUDGE_KEY, JSON.stringify(r)); } catch { /* blocked storage: the card may come again */ }
}

/**
 * Does the card show now, with `lessons` finished lessons?
 *  - not at risk: never;
 *  - never shown: from NUDGE_FIRST lessons;
 *  - shown and not closed, with the same number of lessons: still (the same visit to the home,
 *    or back on the home before the next lesson);
 *  - else only from NUDGE_AGAIN lessons after the last time.
 */
export function nudgeDue(lessons: number, record: NudgeRecord | null, risk: boolean): boolean {
  if (!risk) return false;
  if (!record) return lessons >= NUDGE_FIRST;
  if (!record.closed && lessons === record.at) return true;
  return lessons >= record.at + NUDGE_AGAIN;
}

/** The card is on the home: remembered once (not again for the same number of lessons). */
export function nudgeShown(lessons: number): void {
  const r = nudgeRecord();
  if (r && r.at === lessons) return;
  writeRecord({ at: lessons, closed: false });
}

/** The card was tapped (to the backup, or Later), or a backup file was made: not again for a long while. */
export function nudgeClosed(lessons: number): void {
  writeRecord({ at: lessons, closed: true });
}
