/**
 * A new version while the app stays open. An app on the home screen is seldom started fresh: the
 * phone keeps it in memory and brings it back, so it would keep running the version it started
 * with for days. So each time the app comes back into view (at most every few minutes) it asks the
 * server for the page and compares the app file it names (assets/index-<hash>.js) with the one
 * running. A new one: the page reloads, but only at a calm moment (never in a lesson, on its
 * result or a certificate; see App's `calm`). Otherwise it waits for the next time the app comes
 * back into view, or for the next screen the learner opens (any screen outside a lesson). A
 * reload keeps everything: the progress is on the phone, the screen comes back.
 *
 * The new version's service worker removes the old version's files (public/sw.js). A file the
 * running version loads later (a help language, a screen of its own) is then gone: such a failed
 * file reloads the page into the new version at once (recoverFromLoadError), at most once in a
 * while, so a file that keeps failing shows "Try again" instead of reloading again and again.
 */

const ENTRY = /assets\/index-[\w-]+\.js/;
/** No more than one check per this many ms. */
const GAP = 5 * 60 * 1000;

/** The app file a page's HTML names, e.g. "assets/index-YfSHudfI.js". */
export function entryOf(html: string): string | null {
  return ENTRY.exec(html)?.[0] ?? null;
}

/** The app file this page runs. */
function runningEntry(): string | null {
  const s = document.querySelector<HTMLScriptElement>('script[type="module"][src*="assets/index-"]');
  return s ? entryOf(s.src) : null;
}

/** Is a different version on the server than the one running? (False when it can't tell, e.g. offline.) */
export async function newerOnServer(running: string | null, fetchPage: () => Promise<string>): Promise<boolean> {
  if (!running) return false;
  try {
    const there = entryOf(await fetchPage());
    return Boolean(there && there !== running);
  } catch {
    return false;
  }
}

let calm: () => boolean = () => false;
/** App tells when a reload would interrupt nothing (the home, a tab; not a lesson). */
export function setReloadWhen(fn: () => boolean): void {
  calm = fn;
}

/** The page as the server has it now. */
const serverPage = () => fetch(new URL('./', document.baseURI), { cache: 'no-store', credentials: 'same-origin' }).then((r) => (r.ok ? r.text() : ''));

/** Watching (production only), and whether a newer version is known to be on the server. */
let check: (() => Promise<void>) | null = null;
let waiting = false;

/** Starts watching (production only, once). */
export function watchForUpdates(): void {
  if (check) return;
  let last = Date.now();
  const running = runningEntry();
  check = async () => {
    if (document.visibilityState !== 'visible') return;
    if (!waiting) {
      if (Date.now() - last < GAP) return;
      last = Date.now();
      // The service worker too, so the next start has its newest rules.
      navigator.serviceWorker?.getRegistration().then((r) => r?.update()).catch(() => {});
      waiting = await newerOnServer(running, serverPage);
    }
    if (waiting && calm()) location.reload();
  };
  document.addEventListener('visibilitychange', () => { void check?.(); });
  // A new service worker took over this page (a new version was deployed; the first one, on the
  // very first visit, does not count): the old version's files are going.
  const sw = navigator.serviceWorker;
  if (sw?.controller) sw.addEventListener('controllerchange', () => { waiting = true; });
}

/** Another screen opened: a known new version loads now if the moment is calm (see setReloadWhen). */
export function screenChanged(): void {
  void check?.();
}

const RELOADED = 'vloertaal:update-reload';
/** At most one reload by itself per this many ms (a file that keeps failing must not loop). */
const RELOAD_GAP = 2 * 60 * 1000;

/** May the page reload by itself now? Not when it did so less than RELOAD_GAP ago (`last`: when, or null). */
export function mayReloadAgain(last: number | null, now: number): boolean {
  return last === null || now - last >= RELOAD_GAP || now < last;
}

/** The file named in a browser's "failed to load" message (Chrome and Firefox name it; Safari does not). */
export function failedFile(e: unknown): string | null {
  const text = e instanceof Error ? e.message : String(e);
  return /https?:\/\/\S+?\/assets\/[\w.-]+\.js/.exec(text)?.[0] ?? null;
}

/**
 * A file of the app did not load (a help language, a screen of its own). When a newer version is
 * waiting, or the server no longer has the file (a deploy since this page started), the page
 * reloads into the new version, once (sessionStorage, RELOAD_GAP). Resolves true when it reloads;
 * false when the caller shows "Try again" (offline, or it reloaded a moment ago).
 */
export async function recoverFromLoadError(e?: unknown): Promise<boolean> {
  if (!import.meta.env.PROD || navigator.onLine === false) return false;
  let last: number | null = null;
  try {
    const v = Number(sessionStorage.getItem(RELOADED));
    last = v > 0 ? v : null;
  } catch {
    // Blocked storage: no reload by itself (it could not tell a loop).
    return false;
  }
  if (!mayReloadAgain(last, Date.now())) return false;
  let newer = waiting || (await newerOnServer(runningEntry(), serverPage));
  const file = newer ? null : failedFile(e);
  if (file) newer = await fetch(file, { method: 'HEAD', cache: 'no-store' }).then((r) => r.status === 404, () => false);
  if (!newer) return false;
  try {
    sessionStorage.setItem(RELOADED, String(Date.now()));
  } catch {
    return false;
  }
  location.reload();
  return true;
}
