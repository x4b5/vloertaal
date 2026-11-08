import { sha256Hex } from './access';

/**
 * The admin page's (#beheer) door lock, like the access codes: the site is static, so this keeps
 * visitors out, it is not security. Only the SHA-256 of the password is in the source (the
 * repository is public), never the password. Case sensitive; only spaces around it are dropped.
 * Once opened, this phone remembers it (a flag, not the password) until "Vergrendelen".
 */
const ADMIN_HASH = 'f64bffcc79949608c0987a155756d99a1f1f84c1198251bff5d860f6edc4c191';

/** For the dev server and tests only: a production build drops it. */
const DEV_PASSWORD = import.meta.env.DEV ? 'testbeheer' : null;

const KEY = 'vloertaal:admin';

export function adminUnlocked(): boolean {
  try { return localStorage.getItem(KEY) === '1'; } catch { return false; }
}

export function lockAdmin(): void {
  try { localStorage.removeItem(KEY); } catch { /* private mode: nothing was kept */ }
}

/** Is this the admin password? When it is, this phone remembers that the page is open. */
export async function checkAdminPassword(input: string): Promise<boolean> {
  const typed = input.trim();
  if (!typed) return false;
  const ok = typed === DEV_PASSWORD || (await sha256Hex(typed)) === ADMIN_HASH;
  if (ok) {
    try { localStorage.setItem(KEY, '1'); } catch { /* private mode: open for this visit only */ }
  }
  return ok;
}
