/**
 * "Zet Vloertaal op je beginscherm" and keeping progress safe on the phone.
 * The browser's install prompt (Android, Chrome) fires once, early; it is caught here as soon as
 * the app loads so the milestone screen can offer it later.
 */

interface InstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

let deferred: InstallPromptEvent | null = null;
const listeners = new Set<() => void>();

if (typeof window !== 'undefined') {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault(); // keep it for our own button
    deferred = e as InstallPromptEvent;
    listeners.forEach((f) => f());
  });
  window.addEventListener('appinstalled', () => {
    deferred = null;
    listeners.forEach((f) => f());
  });
}

export type InstallWay = 'prompt' | 'ios' | null;

/** Dev screenshots: ?install=ios or ?install=prompt shows that card on any browser. */
function forced(): InstallWay {
  if (!import.meta.env.DEV || typeof location === 'undefined') return null;
  const v = new URLSearchParams(location.search).get('install');
  return v === 'ios' || v === 'prompt' ? v : null;
}

export function isInstalled(): boolean {
  if (typeof window === 'undefined') return false;
  return Boolean(
    window.matchMedia?.('(display-mode: standalone)').matches ||
      (navigator as Navigator & { standalone?: boolean }).standalone,
  );
}

export function isIos(): boolean {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent ?? '';
  // iPadOS reports itself as a Mac, but with touch.
  return /iphone|ipad|ipod/i.test(ua) || (/Macintosh/.test(ua) && (navigator.maxTouchPoints ?? 0) > 1);
}

/**
 * A browser inside another app (Facebook, Instagram, TikTok, Snapchat, LINE, an Android WebView):
 * a link from such an app often opens there, with its own storage that may be gone next time.
 */
export function isInAppBrowser(): boolean {
  if (typeof navigator === 'undefined') return false;
  return /FBAN|FBAV|FB_IAB|Instagram|BytedanceWebview|musical_ly|Snapchat|\bLine\/|; wv\)/i.test(navigator.userAgent ?? '');
}

/** How this phone can put the app on the home screen, or null (installed already, or no way). */
export function installWay(): InstallWay {
  const f = forced();
  if (f) return f;
  if (typeof window === 'undefined' || isInstalled()) return null;
  if (deferred) return 'prompt';
  return isIos() ? 'ios' : null;
}

export function onInstallChange(f: () => void): () => void {
  listeners.add(f);
  return () => { listeners.delete(f); };
}

/** Shows the browser's own install dialog (Android). True when the learner said yes. */
export async function promptInstall(): Promise<boolean> {
  if (!deferred) return false;
  const e = deferred;
  deferred = null;
  await e.prompt();
  const { outcome } = await e.userChoice;
  listeners.forEach((f) => f());
  return outcome === 'accepted';
}

/**
 * What the browser answered when it was asked to keep this site's storage
 * (navigator.storage.persist): 'granted' or 'denied'; null: never asked on this phone, or the
 * browser cannot do it. Remembered, so the home can tell whether a backup reminder is needed
 * (src/lib/backupNudge.ts).
 */
export type PersistAnswer = 'granted' | 'denied';

export const PERSIST_ANSWER_KEY = 'vloertaal:persist';

export function persistAnswer(): PersistAnswer | null {
  try {
    const v = localStorage.getItem(PERSIST_ANSWER_KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

function rememberPersist(yes: boolean): PersistAnswer {
  const answer: PersistAnswer = yes ? 'granted' : 'denied';
  try { localStorage.setItem(PERSIST_ANSWER_KEY, answer); } catch { /* blocked storage: only not remembered */ }
  return answer;
}

/**
 * Asks the browser, quietly (no screen of its own), to keep this site's storage (the progress)
 * instead of clearing it when space runs low, and remembers the answer. Resolves to the answer,
 * or null when the browser cannot be asked.
 */
export function persistStorage(): Promise<PersistAnswer | null> {
  try {
    const ask = navigator.storage?.persist?.();
    if (!ask) return Promise.resolve(null);
    return ask.then(rememberPersist, () => null);
  } catch {
    // Not supported: nothing to do.
    return Promise.resolve(null);
  }
}

const PERSIST_KEY = 'vloertaal:persist-asked';

/**
 * After a finished lesson, and when the app is opened from the home screen: ask again to keep
 * this site's storage (the progress lives only there), while the browser has not granted it yet,
 * at most once a week (Firefox asks the learner). The answer is remembered (persistAnswer).
 */
export function keepStorageAgain(now = Date.now()): Promise<void> {
  try {
    const storage = navigator.storage;
    if (!storage?.persist || !storage.persisted) return Promise.resolve();
    return storage.persisted().then((yes) => {
      if (yes) { rememberPersist(true); return; }
      const last = Number(localStorage.getItem(PERSIST_KEY) ?? 0);
      if (now - last < 7 * 24 * 3600 * 1000) return;
      localStorage.setItem(PERSIST_KEY, String(now));
      return storage.persist().then((ok) => { rememberPersist(ok); }, () => {});
    }).catch(() => {});
  } catch {
    // Not supported, or storage blocked: nothing to do.
    return Promise.resolve();
  }
}
