/**
 * After the first day's milestone, once: the reminder and the home-screen offer, as small pages
 * with at most 3 choices each (src/components/Keep.tsx: KeepFlow).
 *  1. "Remind you every day?" [Yes, after work 18:00] [Other time] [No thanks].
 *     Yes puts the daily reminder in the phone's calendar at once; Other time opens a page with
 *     2 times and "Kies zelf" (the phone's own time field, for shift work); each adds it at that time.
 *  2. Only when the phone can add the app: [Add to home screen] [Later].
 * When there is no install page, a "Yes" ends on a short "added" page with Continue, so the
 * learner sees it worked after the calendar opened.
 */

export type KeepStep = 'ask' | 'times' | 'install' | 'added' | 'done';
export type KeepAction = 'yes' | 'other' | 'no' | 'time' | 'next';

/** "Yes": after work. */
export const REMIND_DEFAULT = { time: '18:00', nl: 'Na het werk', key: 'remindAfter' } as const;

/** "Other time": two other moments of the day (after work is the "Yes" already); the third
 *  choice is REMIND_OWN. */
export const REMIND_OTHER_TIMES = [
  { time: '07:00', nl: 'Voor het werk', key: 'remindBefore' },
  { time: '12:00', nl: 'In de pauze', key: 'remindBreak' },
] as const;

/** "Kies zelf": any time, in the phone's own time field (night and shift work). */
export const REMIND_OWN = { nl: 'Kies zelf', key: 'remindChooseOwn' } as const;

/** A time from the time field ("HH:MM"), or null while it is empty or half typed. */
export function ownTime(value: string): string | null {
  const m = /^(\d{2}):(\d{2})/.exec(value);
  if (!m) return null;
  const h = Number(m[1]);
  const min = Number(m[2]);
  return h < 24 && min < 60 ? `${m[1]}:${m[2]}` : null;
}

/** The next page of the flow; `canInstall`: the phone can add the app to its home screen. */
export function keepNext(step: KeepStep, action: KeepAction, canInstall: boolean): KeepStep {
  switch (step) {
    case 'ask':
      if (action === 'other') return 'times';
      if (action === 'yes') return canInstall ? 'install' : 'added';
      return canInstall ? 'install' : 'done';
    case 'times':
      if (action === 'time') return canInstall ? 'install' : 'added';
      return canInstall ? 'install' : 'done';
    default:
      return 'done';
  }
}
