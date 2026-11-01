/**
 * "Zet de microfoon aan" (components/Speaking.tsx): when the browser refused the microphone (the
 * learner said no once, or the site is blocked), asking again fails at once, without a question.
 * A web page cannot open the phone's settings, so the app shows the few taps for this kind of
 * phone, and goes on by itself as soon as the microphone is allowed (watchMicPermission).
 */

/** The browser refused the microphone (not: no microphone, or one that is busy). */
export function micRefusedError(e: unknown): boolean {
  const name = (e as { name?: unknown } | null)?.name;
  return name === 'NotAllowedError' || name === 'SecurityError' || name === 'PermissionDeniedError';
}

/** Which steps fit this device: an iPhone or iPad in Safari, or in another browser (Chrome, Edge,
 *  Firefox: no "aA" or "•••" page menu there), Android in the browser, the installed app on
 *  Android, or a computer. */
export type MicPlatform = 'ios' | 'ios-other' | 'android' | 'android-app' | 'desktop';

/** The other browser on an iPhone or iPad, by the name it has in the phone's Settings › Apps. */
export function iosBrowser(ua = typeof navigator !== 'undefined' ? navigator.userAgent : ''): string | null {
  if (/CriOS/.test(ua)) return 'Chrome';
  if (/EdgiOS/.test(ua)) return 'Edge';
  if (/FxiOS/.test(ua)) return 'Firefox';
  return null;
}

export function micPlatform(ua = typeof navigator !== 'undefined' ? navigator.userAgent : '', touch = typeof navigator !== 'undefined' ? navigator.maxTouchPoints : 0, standalone = installedApp()): MicPlatform {
  // iPadOS says "Macintosh", but a Mac has no touch screen.
  if (/iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && touch > 1)) return iosBrowser(ua) ? 'ios-other' : 'ios';
  if (/Android/.test(ua)) return standalone ? 'android-app' : 'android';
  return 'desktop';
}

function installedApp(): boolean {
  try {
    return typeof matchMedia === 'function' && matchMedia('(display-mode: standalone)').matches;
  } catch {
    return false;
  }
}

/** The ui key with this device's steps. */
export const MIC_STEPS: Record<MicPlatform, 'micStepsIos' | 'micStepsIosOther' | 'micStepsAndroid' | 'micStepsAndroidApp' | 'micStepsDesktop'> = {
  ios: 'micStepsIos',
  'ios-other': 'micStepsIosOther',
  android: 'micStepsAndroid',
  'android-app': 'micStepsAndroidApp',
  desktop: 'micStepsDesktop',
};

/** This device's steps, with the browser's name where they need it ("{app}"). */
export function micSteps<T extends { en: string; help?: string }>(text: T, ua?: string): T {
  const app = iosBrowser(ua) ?? 'Safari';
  return { ...text, en: text.en.replace('{app}', app), help: text.help?.replace('{app}', app) };
}

/**
 * Calls `onAllowed` once the microphone is no longer refused ('granted', or 'prompt': the browser
 * will ask again), where the browser can tell (the Permissions API; not every browser can).
 * Returns a function that stops watching.
 */
export function watchMicPermission(onAllowed: () => void): () => void {
  let stopped = false;
  let status: PermissionStatus | null = null;
  const check = () => { if (!stopped && status && status.state !== 'denied') onAllowed(); };
  try {
    navigator.permissions
      ?.query({ name: 'microphone' as PermissionName })
      .then((s) => {
        if (stopped) return;
        status = s;
        s.addEventListener('change', check);
      })
      .catch(() => { /* this browser cannot tell: the retry button stays */ });
  } catch {
    // No Permissions API.
  }
  return () => {
    stopped = true;
    status?.removeEventListener('change', check);
  };
}
