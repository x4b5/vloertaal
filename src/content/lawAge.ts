import { LAW_CHECKED } from './updates';
import { updateMonth } from './updateDate';

/**
 * How old the information about rights is (fase 4, 4 November 2026). LAW_CHECKED is the day of
 * the last monthly law check (docs/logboek.md, "Elke maand"). Until now only a test warned the
 * maker when it got old; the learner kept reading "Bijgewerkt: oktober 2026", also if nobody
 * checked the law any more. Now the app says it itself: once the check is more than 90 days old,
 * the rules of Werkregels (src/content/regels/disclaimer.ts, RULES_STALE) and the tips about
 * rights in Taal (src/lib/tipText.ts, rightsTipNotes) get one line: "Deze uitleg is van
 * [maand jaar]. Kijk voor de laatste regels bij het Juridisch Loket of Work in NL." (in Belgium
 * the justitiehuis and werk.belgie.be). It goes away by itself once LAW_CHECKED is set again.
 *
 * Merge note: LAW_CHECKED may move to a small file of its own (to keep the start file small);
 * then only the import above changes.
 */

/** After this many days without a law check, the app says how old the explanation is. */
export const LAW_STALE_DAYS = 90;

/** Whole days from the law check to `today` (the phone's own day). */
export function lawCheckAge(today: Date = new Date(), checked: string = LAW_CHECKED): number {
  const [y, m, d] = checked.split('-').map(Number);
  return Math.round((Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) - Date.UTC(y, m - 1, d)) / 86_400_000);
}

/** The law check is more than 90 days old. */
export const lawCheckStale = (today: Date = new Date(), checked: string = LAW_CHECKED): boolean => lawCheckAge(today, checked) > LAW_STALE_DAYS;

/** The month of the law check in a language ("oktober 2026", "October 2026"). */
export const lawCheckMonth = (locale = 'nl-NL', checked: string = LAW_CHECKED): string => updateMonth(checked, locale);
