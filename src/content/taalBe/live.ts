import { devFlag } from '../regels/be/live';

/**
 * The Belgian version of the language track (docs/taal-belgie.md). On since 31 October 2026, by
 * the owner's choice, as a beta: no expert has checked its `// ⚖️ check:` facts yet, and a learner
 * in Belgium sees "De Belgische lessen zijn nieuw en nog niet nagekeken door een expert." at the tips
 * and on the About page (ui `beTaalBeta`). Off: a learner in Belgium plays the Dutch course, and
 * only the line "Dit gaat over Nederland. In België is het anders." (ui `beNlOnly`) marks what is
 * different there. Its own switch, apart from BE_RULES_LIVE (the work rules), so the two can be
 * checked at different times; `?be=1` in development turns both on. Tests: setBeTaal(true).
 */
export const BE_TAAL_LIVE: boolean = true;

let forced: boolean | null = null;

/** Turns the Belgian language course on or off for tests and screenshots (null: back to BE_TAAL_LIVE). */
export function setBeTaal(on: boolean | null): void {
  forced = on;
}

/** Does a learner in Belgium get the Belgian language course? */
export function beTaalOn(): boolean {
  return forced ?? (BE_TAAL_LIVE || devFlag());
}
