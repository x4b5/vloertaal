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

function isIos(): boolean {
  const ua = navigator.userAgent;
  // iPadOS reports itself as a Mac, but with touch.
  return /iphone|ipad|ipod/i.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
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

/** Asks the browser to keep this site's storage (progress) instead of clearing it when space runs low. */
export function persistStorage(): void {
  try {
    navigator.storage?.persist?.().catch(() => {});
  } catch {
    // Not supported: nothing to do.
  }
}
