import { clipSrc, clipUrl, markOnPhone, recordedIndexReady } from './audio';
import { dataSaverOn } from './dataSaver';
import type { VoiceRef } from './voices';

/**
 * A lesson's sound, ready before it is tapped (phase 3, 4 November 2026). Before, a clip was
 * fetched only when it played: on a poor line every new word waited up to 6 s (CLIP_START_MS in
 * src/lib/audio.ts), and then the phone's voice said it, or nothing on a phone without a Dutch
 * voice. Now, when a lesson opens:
 *  1. the caches are looked into for its clips (markOnPhone): offline, a listening step whose clip
 *     is not on the phone is left out (surelySilent in src/lib/audio.ts);
 *  2. online, the clips not on the phone yet are fetched in the background, two at a time, in the
 *     order of the lesson (a lesson of the course: about 35 clips, 290 kB, at most about 450 kB),
 *     through the service worker, which keeps every clip it fetches (public/sw.js: AUDIO, the
 *     clips played lately), at the address the clip plays from (clipSrc, with its version), so a
 *     tap plays it straight from the phone.
 * Not with the phone's Data Saver on, not offline, and not without a service worker in control
 * (it is what keeps them: without it the fetch would be spent for nothing).
 */

/** A line to say and its voice (src/components/lessonLines.ts). */
export interface LessonLine {
  text: string;
  voice?: VoiceRef;
}

/** Two at a time: the clip the learner taps now must not wait behind the ones fetched ahead. */
const AT_ONCE = 2;
/** The first exercise says its word as it opens: that clip goes first, the rest a moment later. */
export const WARM_DELAY_MS = 800;

const abs = (path: string) => new URL(path, document.baseURI).href;

/** The clip files these lines play (paths as clipUrl gives them), once each, in order. */
export function linePaths(lines: readonly LessonLine[], resolve: (text: string, voice?: VoiceRef) => string | undefined = clipUrl): string[] {
  const out = new Set<string>();
  for (const { text, voice } of lines) {
    const path = resolve(text, voice);
    if (path) out.add(path);
  }
  return [...out];
}

/** Whether fetching ahead makes sense now (online, no Data Saver, a service worker to keep it). */
export function mayWarm(nav: Pick<Navigator, 'onLine'> & { serviceWorker?: { controller: unknown } } = navigator): boolean {
  return nav.onLine !== false && !dataSaverOn() && Boolean(nav.serviceWorker?.controller);
}

/**
 * Looks in the caches for each clip (any version: offline the service worker plays any copy it
 * has, public/sw.js audio), and notes what it finds (markOnPhone).
 */
export async function checkOnPhone(paths: readonly string[]): Promise<void> {
  if (typeof caches === 'undefined') return;
  await Promise.all(paths.map(async (p) => {
    const hit = await caches.match(abs(p), { ignoreSearch: true }).catch(() => undefined);
    markOnPhone(p, Boolean(hit));
  }));
}

/**
 * This version of the clip is on the phone already: played or fetched before (kept at the address
 * it plays from, with its version), or saved with its topic (src/lib/offline.ts keeps it at its
 * plain address, and the service worker plays that one first).
 */
async function haveNow(path: string): Promise<boolean> {
  const exact = await caches.match(abs(clipSrc(path))).catch(() => undefined);
  return Boolean(exact || (await caches.match(abs(path)).catch(() => undefined)));
}

/**
 * Fetches the clips not on the phone yet, AT_ONCE at a time, in order; each one fetched is on the
 * phone from then on. Stops when `signal` aborts (the lesson closed), also a fetch under way.
 */
export async function warmClips(paths: readonly string[], signal?: AbortSignal): Promise<number> {
  let next = 0;
  let fetched = 0;
  const worker = async () => {
    while (!signal?.aborted && next < paths.length) {
      const path = paths[next++];
      try {
        if (await haveNow(path)) {
          markOnPhone(path, true);
          continue;
        }
        // Low priority: whatever the lesson asks for itself goes first.
        const res = await fetch(abs(clipSrc(path)), { priority: 'low', signal } as RequestInit);
        if (!res.ok) continue;
        await res.blob();
        markOnPhone(path, true);
        fetched++;
      } catch {
        // A poor line: the rest waits for the next lesson (or plays when tapped, as before).
        return;
      }
    }
  };
  await Promise.all(Array.from({ length: AT_ONCE }, worker));
  return fetched;
}

/**
 * At the start of a lesson: check its clips, then fetch the missing ones ahead (see the top of
 * this file). `onChecked` runs whenever what is on the phone may have changed (after the check,
 * after fetching, and when the phone goes offline), so the lesson can leave out what can't be
 * heard. Returns a stop for when the lesson closes.
 */
export function prepareLessonSound(lines: readonly LessonLine[], onChecked: () => void, delay = WARM_DELAY_MS): () => void {
  if (typeof window === 'undefined') return () => {};
  let stopped = false;
  const abort = typeof AbortController === 'function' ? new AbortController() : undefined;
  let paths: string[] = [];
  const recheck = () => { void checkOnPhone(paths).then(() => { if (!stopped) onChecked(); }); };
  window.addEventListener('offline', recheck);
  void (async () => {
    await recordedIndexReady();
    if (stopped) return;
    paths = linePaths(lines);
    await checkOnPhone(paths);
    if (stopped) return;
    onChecked();
    if (!mayWarm() || !paths.length) return;
    await new Promise((done) => window.setTimeout(done, delay));
    if (stopped || !mayWarm()) return;
    if (await warmClips(paths, abort?.signal) && !stopped) onChecked();
  })();
  return () => {
    stopped = true;
    abort?.abort();
    window.removeEventListener('offline', recheck);
  };
}
