import { allCourseUnits, courseUnits } from '../content/courses';
import { DAILY_ID } from './spaced';
import type { Track } from './track';

/**
 * A door lock, not security: the site is static, so anyone can read the bundle. The passwords
 * are not in the source, only their SHA-256 hashes; the typed password is normalised (see
 * normalizePassword), hashed in the browser and compared. What is stored is the access level.
 *
 *  - preview: only the first unit of each course can be played ("First day at work"; in the
 *    work-rules track its first unit, r.start).
 *  - full: everything.
 */
export type Access = 'preview' | 'full';

/**
 * SHA-256 (hex) of each normalised password and the access it gives. The first three were made
 * with the old normalising (trimmed, lower case) and still match; the fourth is the full-version
 * password without its hyphen, as normalizePassword makes it now.
 */
export const PASSWORD_HASHES: Record<string, Access> = {
  '82a3dd97f7aff9c6ceb3c198b8923d35ffab1d9c83db73f81d406ade24a32e54': 'preview',
  '6cd4577227ec489e612717903ff4a38d338476af4fb611880538808166023c01': 'preview',
  '8b77fc0eab009ca9b4a9d6ccc967c8e8f9afe6656f0ab0bebdd96800389f482a': 'full',
  '385537df17b00100660dd3b85e9a3a6a50db31b7093fe26f2fedaabd2a17c9d5': 'full',
  // Pilot code (October 2026), announced to pilot coaches.
  '94f3f76d391ed7e22dfd2fa93a9c9c0fbfa125385ca45c1ea7702fb28457979e': 'full',
  // A second full-version code (15 October 2026).
  'f439b02cc5e1a2f2e2c089e3998b3b8a1131f0d6b2e0911d4fce946516aac54a': 'full',
};

/** Arabic-Indic (٠–٩) and Persian (۰–۹) digits: the low four bits of the code point are the digit. */
const EASTERN_DIGITS = /[\u0660-\u0669\u06F0-\u06F9]/g;
const westernDigits = (s: string) => s.replace(EASTERN_DIGITS, (d) => String(d.charCodeAt(0) & 0xf));

/**
 * How a typed code is compared: lower case, Arabic-Indic and Persian digits as 0–9, and without
 * spaces, hyphens (also the dashes a phone keyboard puts in) or dots, so "vlaaitoer",
 * "Vlaai-toer" and "vlaai toer" are the same code.
 */
export const normalizePassword = (input: string) =>
  westernDigits(input).toLowerCase().replace(/[\s.\-\u2010-\u2015\u00b7\u2022\u2219]/g, '');

/** The old normalising (trimmed, lower case), for hashes made before the separators were dropped. */
const legacyNormalize = (input: string) => westernDigits(input).trim().toLowerCase();

async function sha256Hex(text: string): Promise<string> {
  const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(bytes)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

/** The access a typed password gives, or null when it is not a password. */
export async function checkPassword(input: string): Promise<Access | null> {
  for (const typed of new Set([normalizePassword(input), legacyNormalize(input)])) {
    if (!typed) continue;
    const access = PASSWORD_HASHES[await sha256Hex(typed)];
    if (access) return access;
  }
  return null;
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

/** Forget the access (no longer used by the first run: its back arrows keep an accepted code). */
export function clearAccess(): void {
  try {
    localStorage.removeItem(KEY);
  } catch {
    // Blocked storage: nothing was kept.
  }
}

/** The unit open in the preview in one track: its course's first unit (none while the course is not here). */
export function previewUnits(track: Track = 'taal'): string[] {
  const first = courseUnits(track)[0];
  return first ? [first.id] : [];
}

/** Units open in the preview: the first unit of each course. */
const previewSet = () => new Set([...previewUnits('taal'), ...previewUnits('regels')]);

export function unitAllowed(unitId: string, access: Access): boolean {
  return access === 'full' || previewSet().has(unitId);
}

/** Can this lesson be played with this access level (whatever the progress says)? */
export function lessonAllowed(lessonId: string, access: Access): boolean {
  if (access === 'full') return true;
  // Today's review only repeats words the learner met, so it is open in the preview too.
  if (lessonId === DAILY_ID) return true;
  const open = previewSet();
  return allCourseUnits().some((u) => open.has(u.id) && u.lessons.some((l) => l.id === lessonId));
}
