/**
 * The About page's "NL" toggle: every section in plain Dutch instead of the help language (or
 * English). Remembered on this phone only; private mode or blocked storage just starts it off.
 */
const KEY = 'vloertaal:aboutNl';

export function aboutDutchRemembered(): boolean {
  try { return localStorage.getItem(KEY) === '1'; } catch { return false; }
}

export function rememberAboutDutch(on: boolean): void {
  try {
    if (on) localStorage.setItem(KEY, '1');
    else localStorage.removeItem(KEY);
  } catch { /* private mode: kept for this visit only */ }
}
