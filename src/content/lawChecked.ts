/**
 * The day the monthly law check (docs/logboek.md, "Elke maand") was last really done (YYYY-MM-DD).
 * Whoever does that check (now the owner) sets it, and only after a real check. The learner sees
 * its month as "Bijgewerkt: …" (RULES_CHECKED in src/content/regels/disclaimer.ts).
 * tests/upcomingLaw.test.ts warns when it is older than 45 days.
 *
 * A file of its own (4 November 2026): the work-rules lines need it on the first screen, and
 * importing it from the logbook (src/content/updates.ts) put the whole logbook in the app's start
 * file, although the app loads that only when needed (src/content/updatesLive.ts). The build now
 * fails on such an import (vite.config.ts, failOnDynamicImportWarnings).
 */
export const LAW_CHECKED = '2026-10-31';
