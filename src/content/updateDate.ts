/**
 * Dates of the logbook (src/content/updates.ts), in a file of their own: the app shows them
 * without loading the logbook itself (src/content/updatesLive.ts). updates.ts passes them on.
 */

/** The locale for a date in a page's language: a help language's own code (Dari: Afghan Persian), Dutch, or English (no help language). */
export function dateLocale(code?: string): string {
  if (!code || code === 'en') return 'en-GB';
  return ({ prs: 'fa-AF', nl: 'nl-NL' } as Record<string, string>)[code] ?? code;
}

/** "15 oktober 2026" in a language (Dutch by default). */
export function updateDate(day: string, locale = 'nl-NL'): string {
  const [y, m, d] = day.split('-').map(Number);
  try {
    return new Date(y, m - 1, d).toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
  } catch {
    return new Date(y, m - 1, d).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });
  }
}
