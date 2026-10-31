/**
 * The Belgian work rules (docs/werkregels-belgie.md) are behind this flag until an expert has
 * checked every `// ⚖️ check:` fact in src/content/regels/be. Off: a learner in Belgium plays the
 * Dutch course, as before (with the Belgian help rows and the line that the rules are Dutch).
 * Tests turn it on with setBeRules(true); in development `?be=1` once in the address keeps it on
 * in this tab.
 */
// On since 31 October 2026 (owner's choice): live with the beta disclaimer while the expert check runs.
export const BE_RULES_LIVE: boolean = true;

let forced: boolean | null = null;

/** Turns the Belgian course on or off for tests and screenshots (null: back to BE_RULES_LIVE). */
export function setBeRules(on: boolean | null): void {
  forced = on;
}

function devFlag(): boolean {
  if (!import.meta.env?.DEV || typeof location === 'undefined') return false;
  try {
    if (new URLSearchParams(location.search).get('be') === '1') sessionStorage.setItem('vloertaal:be', '1');
    return sessionStorage.getItem('vloertaal:be') === '1';
  } catch {
    return new URLSearchParams(location.search).get('be') === '1';
  }
}

/** Does a learner in Belgium get the Belgian course? */
export function beRulesOn(): boolean {
  return forced ?? (BE_RULES_LIVE || devFlag());
}
