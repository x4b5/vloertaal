import { countRaw } from './count';

/**
 * Seeing where the app goes wrong, without seeing who (docs/privacy.md). When the app hits an
 * error (a crash of a screen, an error in a script, a promise that fails), it counts it once, on
 * the same counter and under the same switch as the lessons (src/lib/count.ts: "Anoniem
 * meetellen", Do Not Track, only on vloertaal.nl). What goes along:
 *  - the kind: "scherm" (a screen crashed), "script" or "belofte" (a failed promise);
 *  - a short code (8 characters) made from the error's message and the file it came from, so the
 *    same error is counted under the same code;
 *  - a title for the dashboard: the message, cleaned up. Only plain Latin letters, digits and a
 *    few signs stay; addresses, long numbers and anything between quotes go. So a word the
 *    learner typed, or a text in their language, never goes along.
 * Not: the help language, the lesson, the screen, the address, the browser's details.
 * At most 3 errors per visit, each once.
 */

export type ErrorKind = 'scherm' | 'script' | 'belofte';

const MAX_PER_VISIT = 3;
const seen = new Set<string>();

/** Noise that says nothing about Vloertaal: browser extensions, cross-origin scripts, resize loops. */
const NOISE = [/ResizeObserver loop/i, /^Script error\.?$/i, /(chrome|moz|safari(-web)?)-extension:/i, /^Load failed$/i, /NetworkError|Failed to fetch/i];

const textOf = (e: unknown): { message: string; stack: string } => {
  if (e instanceof Error) return { message: `${e.name}: ${e.message}`, stack: e.stack ?? '' };
  if (typeof e === 'string') return { message: e, stack: '' };
  return { message: 'Unknown error', stack: '' };
};

/** The message, safe to send: no quotes' contents, no addresses, no long numbers, only plain signs. */
export function cleanMessage(message: string): string {
  return message
    .split('\n')[0]
    .replace(/(["'`])(?:(?!\1).){0,200}\1/g, '…')
    .replace(/\b[a-z]+:\/\/\S+/gi, '…')
    .replace(/\d{3,}/g, '#')
    .replace(/[^A-Za-z0-9 .,:;()_\-…#]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 80) || 'Error';
}

/** The file an error came from, without the build's hash ("assets/Route-a1b2c3.js" → "Route"). */
export function fileOf(stack: string): string {
  const m = stack.match(/\/assets\/([A-Za-z]+)[-.][\w-]*\.js/) ?? stack.match(/\/([A-Za-z]+)\.(?:tsx?|js)/);
  return m ? m[1] : '';
}

/** A short, stable code for an error (FNV-1a, 8 hex characters). */
export function errorCode(text: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16).padStart(8, '0');
}

/** The path and title an error is counted under, or null for noise. */
export function errorPath(kind: ErrorKind, e: unknown): { path: string; title: string } | null {
  const { message, stack } = textOf(e);
  if (NOISE.some((n) => n.test(message) || n.test(stack))) return null;
  const clean = cleanMessage(message);
  const file = fileOf(stack);
  const code = errorCode(`${kind}|${clean}|${file}`);
  return { path: `/e/fout/${kind}/${code}`, title: `${file ? `${file}: ` : ''}${clean}`.slice(0, 100) };
}

/** Counts an error once per visit (at most 3). True when it was counted. */
export function reportError(kind: ErrorKind, e: unknown): boolean {
  const at = errorPath(kind, e);
  if (!at || seen.has(at.path) || seen.size >= MAX_PER_VISIT) return false;
  seen.add(at.path);
  return countRaw(at.path, at.title);
}

/** Tests only: forget what was counted this visit. */
export function resetErrors(): void {
  seen.clear();
}

/** Listens for errors in scripts and failed promises (once, from src/main.tsx). */
export function watchErrors(): void {
  if (typeof window === 'undefined') return;
  window.addEventListener('error', (ev) => reportError('script', ev.error ?? ev.message));
  window.addEventListener('unhandledrejection', (ev) => reportError('belofte', ev.reason));
}
