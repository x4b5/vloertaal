/**
 * What both the app (src/lib/count.ts) and the pages made at build time (src/lib/coachPage.ts)
 * need to count: kept apart, as the build has no import.meta.env.
 */

/** The owner's GoatCounter site (count.ts may point elsewhere with VITE_COUNTER_URL). */
export const COUNTER_SITE = 'https://vloertaal.goatcounter.com';

/** The `via` of the links we share (src/content/pro.ts COACH_SHARE, ColleagueCard's text). */
export const VIA = ['begeleider', 'collega'] as const;
