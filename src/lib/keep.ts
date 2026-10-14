/**
 * After the first day's milestone, once: the reminder and the home-screen offer, as small pages
 * with at most 3 choices each (src/components/Keep.tsx: KeepFlow).
 *  1. "Remind you every day?" [Yes, after work 18:00] [Other time] [No thanks].
 *     Yes puts the daily reminder in the phone's calendar at once; Other time opens a page with
 *     3 times (each one adds it at that time).
 *  2. Only when the phone can add the app: [Add to home screen] [Later].
 * When there is no install page, a "Yes" ends on a short "added" page with Continue, so the
 * learner sees it worked after the calendar opened.
 */

export type KeepStep = 'ask' | 'times' | 'install' | 'added' | 'done';
export type KeepAction = 'yes' | 'other' | 'no' | 'time' | 'next';

/** "Yes": after work. */
export const REMIND_DEFAULT = { time: '18:00', nl: 'Na het werk', key: 'remindAfter' } as const;

/** "Other time": three other moments of the day (after work is the "Yes" already). */
export const REMIND_OTHER_TIMES = [
  { time: '07:00', nl: 'Voor het werk', key: 'remindBefore' },
  { time: '12:00', nl: 'In de pauze', key: 'remindBreak' },
  { time: '20:00', nl: 'In de avond', key: 'remindEvening' },
] as const;

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
