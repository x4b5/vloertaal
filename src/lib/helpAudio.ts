/**
 * Recorded lines in the help languages (public/audio-help/<lang>/<id>.mp3): the short questions and
 * hints of the first pages ("Wat wil je leren?", "Polski?", "Vrouw of man?" ...), said in the
 * learner's own language. Many phones have no voice for Tigrinya, and some none for Persian or Dari:
 * without a recording, a learner who reads little would never hear their own language.
 *
 * public/audio-help/manifest.json says what has been recorded: per language, clip id -> the exact
 * text it says. A clip is found by its text (like the Dutch clips, src/lib/audio.ts), so a text that
 * changed after its recording simply has no clip any more: the phone's voice says it, or no button.
 * The list of lines to record: scripts/list-help-clips.ts; recording: docs/opnames.md.
 */

export interface HelpIndex {
  /** Per help language (its code): clip id -> the text the clip says. */
  langs: Record<string, Record<string, string>>;
}

/** Where a "read aloud" in the help language comes from: a recording, the phone's voice, or nothing. */
export type HelpSource = 'clip' | 'voice' | null;

/** The fallback order: the recording first, then the phone's own voice, else no button at all. */
export function helpSource(hasClip: boolean, hasVoice: boolean): HelpSource {
  if (hasClip) return 'clip';
  if (hasVoice) return 'voice';
  return null;
}

export const HELP_AUDIO_BASE = './audio-help';

/** text (trimmed) -> clip id, per language. */
let byText = new Map<string, Map<string, string>>();
const listeners = new Set<() => void>();

/** A short, stable code for a text (FNV-1a, base 36): a new text gets a fresh file, never a cached old one. */
function textCode(text: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) h = Math.imul(h ^ text.charCodeAt(i), 0x01000193);
  return (h >>> 0).toString(36);
}

/** Puts the recorded help lines in place (also used by tests). null: none. */
export function setHelpIndex(index: HelpIndex | null): void {
  const next = new Map<string, Map<string, string>>();
  for (const [code, said] of Object.entries(index?.langs ?? {})) {
    const m = new Map<string, string>();
    for (const [id, text] of Object.entries(said)) if (typeof text === 'string' && text.trim()) m.set(text.trim(), id);
    if (m.size) next.set(code, m);
  }
  byText = next;
  listeners.forEach((fn) => fn());
}

/** Called when the recorded help lines arrive (a button may appear). */
export function onHelpIndex(fn: () => void): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

/** The address of the recording of `text` in help language `code`, or undefined when there is none. */
export function helpClipUrl(code: string | undefined, text: string | undefined): string | undefined {
  if (!code || !text) return undefined;
  const t = text.trim();
  const id = byText.get(code)?.get(t);
  return id ? `${HELP_AUDIO_BASE}/${code}/${id}.mp3?v=${textCode(t)}` : undefined;
}

let loading: Promise<void> | undefined;

/** Loads public/audio-help/manifest.json once (on the first "read aloud" in a help language). */
export function loadHelpIndex(): Promise<void> {
  if (loading) return loading;
  if (typeof window === 'undefined' || typeof fetch !== 'function') return (loading = Promise.resolve());
  loading = fetch(`${HELP_AUDIO_BASE}/manifest.json`)
    .then((r) => (r.ok ? (r.json() as Promise<HelpIndex>) : null))
    .then((index) => { if (index && Object.keys(index.langs ?? {}).length) setHelpIndex(index); })
    .catch(() => {});
  return loading;
}
