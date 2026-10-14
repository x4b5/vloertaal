import { tipForLesson } from '../content/culture';
import { teachingLessons, units } from '../content/curriculum';
import { mixLessonFor } from '../content/review';
import type { Lesson, Unit } from '../content/types';
import { tokenize } from './answers';
import { clipUrl, recordedIndexReady } from './audio';
import { castVoices, type VoiceRef } from './voices';
import { persistStorage } from './install';

/**
 * "Save for offline", per unit: on a bus, in a greenhouse or on a site without signal the unit
 * still opens and still speaks. The page puts the app itself (index.html, the hashed JS, CSS and
 * fonts) and every recorded clip the unit can play, in the voices chosen now, in a cache of its
 * own (OFFLINE_CACHE). The service worker (public/sw.js) answers sound from that cache first and
 * everything else from the network first, falling back to any cache.
 *
 * What is saved is listed on this device only (localStorage), so a unit can be removed again
 * without touching what another saved unit still needs. Nothing leaves the phone.
 */
export const OFFLINE_CACHE = 'vloertaal-offline-v1';
const KEY = 'vloertaal:offline';
/** An ElevenLabs clip is about 11 kB (52 MB for 4 × 1174 clips): used for the size shown before saving. */
const CLIP_BYTES = 11_500;
const SHELL_BYTES = 700_000;

/* ---- Which Dutch lines a unit can say (pure, tested) ---- */

/** Every Dutch line spoken in one lesson: words, sentences, chats, its culture tip and the single word tiles. */
function lessonTexts(lesson: Lesson, add: (text: string) => void): void {
  for (const w of lesson.words) add(w.nl);
  for (const s of lesson.sentences) add(s.nl);
  for (const d of lesson.dialogues ?? []) {
    add(d.prompt.nl);
    add(d.reply.nl);
  }
  const tip = tipForLesson(lesson.id);
  if (tip) {
    add(tip.phrase.nl);
    if (tip.situation.nl) add(tip.situation.nl);
  }
  // A tap on a tile of "build the sentence" says that one word.
  for (const text of [...lesson.sentences.map((s) => s.nl), ...lesson.words.map((w) => w.nl)])
    for (const token of tokenize(text)) add(token.toLowerCase());
}

/**
 * The Dutch lines a unit can speak, in course order without repeats. The mixed review at the end
 * of a unit may bring items of two related units (once those are done), so with all lessons done
 * as the widest case those are included too.
 */
export function unitTexts(unit: Unit, all: Unit[] = units): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  const add = (text: string) => {
    const t = text.trim();
    if (t && !seen.has(t)) {
      seen.add(t);
      out.push(t);
    }
  };
  for (const lesson of unit.lessons) lessonTexts(lesson, add);
  const everything = Object.fromEntries(teachingLessons.map((l) => [l.id, true]));
  lessonTexts(mixLessonFor(unit, all, everything), add);
  return out;
}

/**
 * The recorded clips (paths relative to the app) for these lines in these voices; a line
 * without a recording is said by the phone and needs no file. `resolve` is clipUrl in the app.
 */
export function clipPaths(texts: string[], voices: VoiceRef[], resolve: (text: string, voice: VoiceRef) => string | undefined): string[] {
  const out = new Set<string>();
  for (const voice of voices)
    for (const text of texts) {
      const path = resolve(text, voice);
      if (path) out.add(path);
    }
  return [...out];
}

/** The voices a lesson speaks with now: the learner's choice and the four characters. */
export function currentVoices(preferred: VoiceRef): VoiceRef[] {
  return [...new Set<VoiceRef>([preferred, ...castVoices()])];
}

/** A short key for a set of voices, to notice when a unit was saved with other voices. */
export function voicesKey(voices: VoiceRef[]): string {
  return voices.map((v) => v ?? 'auto').sort().join('|');
}

/** "3.4 MB" (or "800 kB"), one decimal under 10 MB. */
export function formatBytes(bytes: number): string {
  if (bytes < 1_000_000) return `${Math.max(1, Math.round(bytes / 1000))} kB`;
  const mb = bytes / 1_000_000;
  return `${mb < 10 ? mb.toFixed(1) : Math.round(mb)} MB`;
}

/* ---- What is saved on this device ---- */

export interface SavedUnit {
  urls: string[];
  bytes: number;
  voices: string;
}
interface Saved {
  units: Record<string, SavedUnit>;
  /** The app files saved with them (refreshed after an update). */
  shell: string[];
}

function loadSaved(): Saved {
  try {
    const raw = localStorage.getItem(KEY);
    const s = raw ? (JSON.parse(raw) as Partial<Saved>) : null;
    if (s && typeof s.units === 'object' && s.units) return { units: s.units, shell: Array.isArray(s.shell) ? s.shell : [] };
  } catch {
    // Blocked storage: nothing is listed as saved.
  }
  return { units: {}, shell: [] };
}

function writeSaved(s: Saved): void {
  try {
    if (Object.keys(s.units).length) localStorage.setItem(KEY, JSON.stringify(s));
    else localStorage.removeItem(KEY);
  } catch {
    // Ignore: the cache stays, the list is lost (a new save lists it again).
  }
}

export type OfflineState =
  | { status: 'none' }
  | { status: 'saving'; done: number; total: number }
  | { status: 'saved'; bytes: number; stale: boolean }
  | { status: 'error'; reason: 'space' | 'failed' };

const jobs = new Map<string, OfflineState>();
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((fn) => fn());

export function onOfflineChange(fn: () => void): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function offlineSupported(): boolean {
  return typeof window !== 'undefined' && 'caches' in window && typeof fetch === 'function';
}

/** Where a unit stands on this device; `voices`: the key of the voices chosen now. */
export function offlineState(unitId: string, voices: string): OfflineState {
  const job = jobs.get(unitId);
  if (job) return job;
  const saved = loadSaved().units[unitId];
  return saved ? { status: 'saved', bytes: saved.bytes, stale: saved.voices !== voices } : { status: 'none' };
}

export function savedUnitIds(): string[] {
  return Object.keys(loadSaved().units);
}

const abs = (path: string) => new URL(path, document.baseURI).href;

/**
 * The app itself: the page, its scripts, styles, fonts and icons, as loaded now (Vite's hashed
 * files under assets/ included). Same origin only; recorded sound is listed per unit.
 */
export function shellUrls(): string[] {
  const out = new Set<string>([abs('./'), abs('./manifest.webmanifest'), abs('./audio-el/voices.json')]);
  const sameOrigin = (href: string) => {
    try {
      const u = new URL(href, document.baseURI);
      if (u.origin === location.origin && !u.pathname.endsWith('.mp3') && !u.pathname.endsWith('/sw.js')) out.add(u.href);
    } catch {
      // Not a URL: skip.
    }
  };
  document.querySelectorAll<HTMLScriptElement>('script[src]').forEach((s) => sameOrigin(s.src));
  document.querySelectorAll<HTMLLinkElement>('link[href]:is([rel="stylesheet"], [rel="modulepreload"], [rel="manifest"], [rel~="icon"], [rel="apple-touch-icon"])').forEach((l) => sameOrigin(l.href));
  for (const e of performance.getEntriesByType?.('resource') ?? []) {
    const u = new URL(e.name);
    // Fonts, CSS and JS; not data the app fetched for a moment (the count, backups).
    if (/\.(js|css|woff2?|svg|png|ico|webmanifest)$/.test(u.pathname)) sameOrigin(e.name);
  }
  return [...out];
}

function shellBytes(): number {
  let sum = 0;
  for (const e of (performance.getEntriesByType?.('resource') ?? []) as PerformanceResourceTiming[]) {
    if (/\/assets\//.test(e.name)) sum += e.encodedBodySize || 0;
  }
  return sum || SHELL_BYTES;
}

/** The files a unit needs, as absolute URLs: the app and the unit's clips in these voices. */
export async function unitFiles(unit: Unit, voices: VoiceRef[]): Promise<{ shell: string[]; clips: string[] }> {
  await recordedIndexReady();
  return { shell: shellUrls(), clips: clipPaths(unitTexts(unit), voices, clipUrl).map(abs) };
}

/** About how much saving takes (counted from the clips; the app files from what was loaded). */
export async function estimateBytes(unit: Unit, voices: VoiceRef[]): Promise<number> {
  const { clips } = await unitFiles(unit, voices);
  const shellSaved = loadSaved().shell.length > 0;
  return clips.length * CLIP_BYTES + (shellSaved ? 0 : shellBytes());
}

const isQuota = (e: unknown) => {
  const name = (e as { name?: string })?.name ?? '';
  return name === 'QuotaExceededError' || name === 'NS_ERROR_DOM_QUOTA_REACHED' || /quota/i.test(String((e as Error)?.message ?? ''));
};

/** Fetches each URL and puts it in the cache, a few at a time; returns the bytes stored. */
async function fill(cache: Cache, urls: string[], progress: (n: number) => void, have: Set<string>): Promise<number> {
  let bytes = 0;
  let done = 0;
  let next = 0;
  const worker = async () => {
    while (next < urls.length) {
      const url = urls[next++];
      if (have.has(url)) {
        const hit = await cache.match(url);
        if (hit) {
          bytes += (await hit.blob()).size;
          progress(++done);
          continue;
        }
      }
      const res = await fetch(url, { cache: 'no-cache', headers: { 'x-vloertaal-save': '1' } });
      if (!res.ok || res.status !== 200) throw new Error(`${res.status} ${url}`);
      const blob = await res.clone().blob();
      await cache.put(url, res);
      bytes += blob.size;
      progress(++done);
    }
  };
  await Promise.all(Array.from({ length: 6 }, worker));
  return bytes;
}

/** Removes cached URLs no saved unit (or the app shell, while any unit is saved) still needs. */
async function prune(cache: Cache, saved: Saved, candidates: string[]): Promise<void> {
  const keep = new Set<string>([...Object.values(saved.units).flatMap((u) => u.urls), ...(Object.keys(saved.units).length ? saved.shell : [])]);
  await Promise.all(candidates.filter((u) => !keep.has(u)).map((u) => cache.delete(u)));
}

/** Saves a unit for offline use. The state (progress, saved, error) arrives via onOfflineChange. */
export async function saveUnitOffline(unit: Unit, voices: VoiceRef[]): Promise<void> {
  if (!offlineSupported() || jobs.get(unit.id)?.status === 'saving') return;
  jobs.set(unit.id, { status: 'saving', done: 0, total: 1 });
  emit();
  let cache: Cache | undefined;
  const before = loadSaved();
  const had = new Set<string>([...before.shell, ...Object.values(before.units).flatMap((u) => u.urls)]);
  let shell: string[] = [];
  let clips: string[] = [];
  try {
    ({ shell, clips } = await unitFiles(unit, voices));
    const total = shell.length + clips.length;
    jobs.set(unit.id, { status: 'saving', done: 0, total });
    emit();
    // Not enough room left at all: say so before downloading anything.
    const est = await navigator.storage?.estimate?.().catch(() => undefined);
    if (est?.quota && est.usage !== undefined && est.quota - est.usage < clips.length * CLIP_BYTES * 1.2) throw Object.assign(new Error('quota'), { name: 'QuotaExceededError' });
    persistStorage();
    cache = await caches.open(OFFLINE_CACHE);
    let n = 0;
    const tick = () => {
      n++;
      // Repaint at most every few files.
      if (n === total || n % 4 === 0) {
        jobs.set(unit.id, { status: 'saving', done: n, total });
        emit();
      }
    };
    await fill(cache, shell, tick, new Set());
    const bytes = await fill(cache, clips, tick, had);
    const after = loadSaved();
    after.units[unit.id] = { urls: clips, bytes, voices: voicesKey(voices) };
    after.shell = shell;
    writeSaved(after);
    jobs.delete(unit.id);
    // App files of an older version, still listed with the units saved before.
    if (cache) await prune(cache, after, before.shell);
  } catch (e) {
    // Undo what this attempt added (files other saved units use stay).
    if (cache) await prune(cache, loadSaved(), [...shell, ...clips].filter((u) => !had.has(u))).catch(() => {});
    jobs.set(unit.id, { status: 'error', reason: isQuota(e) ? 'space' : 'failed' });
  }
  emit();
}

/** Removes a unit from this device (files another saved unit uses stay). */
export async function removeUnitOffline(unitId: string): Promise<void> {
  const saved = loadSaved();
  const gone = saved.units[unitId];
  jobs.delete(unitId);
  if (gone) {
    delete saved.units[unitId];
    writeSaved(saved);
    if (offlineSupported()) {
      if (!Object.keys(saved.units).length) await caches.delete(OFFLINE_CACHE).catch(() => false);
      else await prune(await caches.open(OFFLINE_CACHE), saved, gone.urls).catch(() => {});
    }
  }
  emit();
}

/** Clears an error, back to "Save for offline". */
export function dismissOfflineError(unitId: string): void {
  if (jobs.get(unitId)?.status === 'error') {
    jobs.delete(unitId);
    emit();
  }
}

/**
 * On opening the app online (production): when units are saved, the app files in the offline
 * cache follow the version now running, so a saved unit opens with the newest app. When the
 * browser cleared the cache, the list is cleared too.
 */
export async function refreshOfflineShell(): Promise<void> {
  const saved = loadSaved();
  if (!Object.keys(saved.units).length || !offlineSupported()) return;
  if (!(await caches.has(OFFLINE_CACHE))) {
    writeSaved({ units: {}, shell: [] });
    emit();
    return;
  }
  if (!navigator.onLine) return;
  const shell = shellUrls();
  try {
    const cache = await caches.open(OFFLINE_CACHE);
    await fill(cache, shell, () => {}, new Set());
    const next = { ...loadSaved(), shell };
    writeSaved(next);
    await prune(cache, next, saved.shell);
  } catch {
    // Offline after all, or no room: the files saved before stay.
  }
}

/** Development screenshots only (src/dev/ShotHarness.tsx): show a unit in a fixed state. */
export function showOfflineStateForShot(unitId: string, state: OfflineState): void {
  jobs.set(unitId, state);
  emit();
}
