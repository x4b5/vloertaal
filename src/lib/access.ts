import { units } from '../content/curriculum';
import { DAILY_ID } from './spaced';

/**
 * A door lock, not security: the site is static, so anyone can read the bundle. The passwords
 * are not in the source, only their SHA-256 hashes; the typed password is normalised (trimmed,
 * lower case), hashed in the browser and compared. What is stored is the access level.
 *
 *  - preview: only the first unit ("First day at work") can be played.
 *  - full: everything.
 */
export type Access = 'preview' | 'full';

/** SHA-256 (hex) of each normalised password and the access it gives. */
export const PASSWORD_HASHES: Record<string, Access> = {
  '82a3dd97f7aff9c6ceb3c198b8923d35ffab1d9c83db73f81d406ade24a32e54': 'preview',
  '6cd4577227ec489e612717903ff4a38d338476af4fb611880538808166023c01': 'preview',
  '8b77fc0eab009ca9b4a9d6ccc967c8e8f9afe6656f0ab0bebdd96800389f482a': 'full',
};

export const normalizePassword = (input: string) => input.trim().toLowerCase();

async function sha256Hex(text: string): Promise<string> {
  const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(bytes)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

/** The access a typed password gives, or null when it is not a password. */
export async function checkPassword(input: string): Promise<Access | null> {
  const typed = normalizePassword(input);
  if (!typed) return null;
  return PASSWORD_HASHES[await sha256Hex(typed)] ?? null;
}

const KEY = 'vloertaal.access';

export function loadAccess(): Access | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'preview' || v === 'full' ? v : null;
  } catch {
    return null;
  }
}

export function saveAccess(a: Access): void {
  try {
    localStorage.setItem(KEY, a);
  } catch {
    // Blocked storage: access lasts until the page is closed.
  }
}

/** Units open in the preview: only "First day at work". */
export const PREVIEW_UNITS = new Set([units[0].id]);

export function unitAllowed(unitId: string, access: Access): boolean {
  return access === 'full' || PREVIEW_UNITS.has(unitId);
}

/** Can this lesson be played with this access level (whatever the progress says)? */
export function lessonAllowed(lessonId: string, access: Access): boolean {
  if (access === 'full') return true;
  // Today's review only repeats words the learner met, so it is open in the preview too.
  if (lessonId === DAILY_ID) return true;
  return units.some((u) => PREVIEW_UNITS.has(u.id) && u.lessons.some((l) => l.id === lessonId));
}
