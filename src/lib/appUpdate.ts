/**
 * A new version while the app stays open. An app on the home screen is seldom started fresh: the
 * phone keeps it in memory and brings it back, so it would keep running the version it started
 * with for days. So each time the app comes back into view (at most every few minutes) it asks the
 * server for the page and compares the app file it names (assets/index-<hash>.js) with the one
 * running. A new one: the page reloads, but only at a calm moment (never in a lesson, on its
 * result or a certificate; see App's `calm`). Otherwise it waits for the next time the app comes
 * back into view. A reload keeps everything: the progress is on the phone, the screen comes back.
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

/** Starts watching (production only, once). */
export function watchForUpdates(): void {
  let last = Date.now();
  let waiting = false;
  const running = runningEntry();
  const page = () => fetch(new URL('./', document.baseURI), { cache: 'no-store', credentials: 'same-origin' }).then((r) => (r.ok ? r.text() : ''));
  const check = async () => {
    if (document.visibilityState !== 'visible') return;
    if (!waiting) {
      if (Date.now() - last < GAP) return;
      last = Date.now();
      // The service worker too, so the next start has its newest rules.
      navigator.serviceWorker?.getRegistration().then((r) => r?.update()).catch(() => {});
      waiting = await newerOnServer(running, page);
    }
    if (waiting && calm()) location.reload();
  };
  document.addEventListener('visibilitychange', () => { void check(); });
}
