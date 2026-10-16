import { allCourseUnits, courseUnits } from '../content/courses';
import { THEMES, themeUnitIds } from '../content/themes';
import { DAILY_ID } from './spaced';
import type { Track } from './track';

/**
 * A door lock, not security: the site is static, so anyone can read the bundle. The passwords
 * are not in the source, only their SHA-256 hashes; the typed password is normalised (see
 * normalizePassword), hashed in the browser and compared. What is stored is the access level.
 *
 *  - sample: a sneak preview, the first lesson of each theme (src/content/themes.ts): of the
 *    theme's first topic, and in "Jouw sector" of every sector's topic, so anyone can try their own
 *    work. In both tracks. The rest shows with a lock and "Volledige versie". Without a code: the
 *    password page's "No code?" gives it (since 16 October 2026; before, one trial lesson).
 *  - preview: only the first unit of each course can be played ("First day at work"; in the
 *    work-rules track its first unit, r.start).
 *  - full: everything.
 */
export type Access = 'sample' | 'preview' | 'full';

/**
 * SHA-256 (hex) of each normalised password and the access it gives. The first two were made
 * with the old normalising (trimmed, lower case) and still match.
 *
 * Retired (16 October 2026): the first full-version code, in its two forms. It stood in plain text
 * in the repository's history, so it no longer opens anything new; who entered it before keeps
 * full access (the level is stored on the phone, see loadAccess).
 *
 * The repository is public: a code itself never goes in it (not in a test, a script or a doc),
 * only its hash. Tests and the screenshot scripts use DEV_CODES, which a production build drops.
 */
export const PASSWORD_HASHES: Record<string, Access> = {
  '82a3dd97f7aff9c6ceb3c198b8923d35ffab1d9c83db73f81d406ade24a32e54': 'preview',
  '6cd4577227ec489e612717903ff4a38d338476af4fb611880538808166023c01': 'preview',
  // Pilot code (October 2026), announced to pilot coaches.
  '94f3f76d391ed7e22dfd2fa93a9c9c0fbfa125385ca45c1ea7702fb28457979e': 'full',
  // A second code (15 October 2026): full at first, the sneak preview since 16 October 2026. Who
  // entered it before keeps full access (the level is stored on the phone, see loadAccess).
  'f439b02cc5e1a2f2e2c089e3998b3b8a1131f0d6b2e0911d4fce946516aac54a': 'sample',
  // Candidates' code (16 October 2026): the full version, for candidates who learn with the app.
  '90a18ecf6549148fe4a16dae942bb664d6a5f5e3b0510401058d98b3f73e1764': 'full',
};

/** Codes for development and tests only (the dev server, vitest): never in a production build. */
const DEV_CODES: Readonly<Record<string, Access>> = import.meta.env.DEV
  ? { testcode: 'preview', testvol: 'full', testproef: 'sample' }
  : {};

/** Arabic-Indic (٠–٩) and Persian (۰–۹) digits: the low four bits of the code point are the digit. */
const EASTERN_DIGITS = /[\u0660-\u0669\u06F0-\u06F9]/g;
const westernDigits = (s: string) => s.replace(EASTERN_DIGITS, (d) => String(d.charCodeAt(0) & 0xf));

/**
 * How a typed code is compared: lower case, Arabic-Indic and Persian digits as 0–9, and without
 * spaces, hyphens (also the dashes a phone keyboard puts in) or dots, so "appeltaart12",
 * "Appel-taart 12" and "appel taart 12" are the same code.
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
    const access = DEV_CODES[typed] ?? PASSWORD_HASHES[await sha256Hex(typed)];
    if (access) return access;
  }
  return null;
}

const KEY = 'vloertaal.access';

export function loadAccess(): Access | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'sample' || v === 'preview' || v === 'full' ? v : null;
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

/**
 * The lessons open in the sneak preview, in one track: per theme the first lesson of its first
 * topic in course order; in "Jouw sector" the first lesson of every sector's topic.
 */
export function sampleLessons(track: Track = 'taal'): string[] {
  const order = courseUnits(track);
  const out: string[] = [];
  for (const theme of THEMES) {
    const ids = new Set(themeUnitIds(theme.id, track));
    const inTheme = order.filter((u) => ids.has(u.id));
    for (const unit of theme.id === 'theme.sector' ? inTheme : inTheme.slice(0, 1)) {
      const first = unit.lessons[0];
      if (first) out.push(first.id);
    }
  }
  return out;
}

const sampleSet = () => new Set([...sampleLessons('taal'), ...sampleLessons('regels')]);

/** A topic the learner may open: everything with full access, the first unit in the preview, a topic with an open lesson in the sneak preview. */
export function unitAllowed(unitId: string, access: Access): boolean {
  if (access === 'full') return true;
  if (access === 'preview') return previewSet().has(unitId);
  const open = sampleSet();
  return allCourseUnits().some((u) => u.id === unitId && u.lessons.some((l) => open.has(l.id)));
}

/** Can this lesson be played with this access level (whatever the progress says)? */
export function lessonAllowed(lessonId: string, access: Access): boolean {
  if (access === 'full') return true;
  // Today's review only repeats words the learner met, so it is open in the preview too.
  if (lessonId === DAILY_ID) return true;
  if (access === 'sample') return sampleSet().has(lessonId);
  const open = previewSet();
  return allCourseUnits().some((u) => open.has(u.id) && u.lessons.some((l) => l.id === lessonId));
}
