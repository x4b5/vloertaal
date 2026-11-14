import { useSyncExternalStore } from 'react';
import type { CultureTip } from '../content/tipTypes';

/**
 * The one place where the app asks for a "Zo werkt het hier" tip. The tips and their long texts
 * (src/content/culture.ts, the register, and the files it reads) are a tenth of the start file's
 * weight and no first screen shows one, so they come in a file of their own, loaded right after
 * the start (loadTips, from src/main.tsx), next to the word pictures (src/pictures/index.ts, the
 * same pattern). The app waits for them before any screen after the language page (App.tsx), so a
 * lesson never starts without its tip.
 *
 * No screen or lib file of the app imports the register directly (tests/tipsLoket.test.ts): that
 * would put the tips back in the start file.
 */
type Register = typeof import('../content/culture');

let register: Register | undefined;
let registerUrl: string | undefined;
let loading: Promise<void> | undefined;
const waiting = new Set<() => void>();

export function tipsLoaded(): boolean {
  return register !== undefined;
}

/** Loads the tips (once; again after a failure). */
export function loadTips(): Promise<void> {
  if (register !== undefined) return Promise.resolve();
  loading ??= import('../content/culture').then(
    (m) => {
      register = m;
      registerUrl = m.url;
      waiting.forEach((fn) => fn());
    },
    (e: unknown) => {
      loading = undefined;
      throw e;
    },
  );
  return loading;
}

/** The tips' file, when loaded on this visit (saved with the app for offline use). */
export function loadedTipsUrl(): string | undefined {
  return registerUrl && /^https?:/.test(registerUrl) ? registerUrl : undefined;
}

const subscribe = (fn: () => void) => {
  waiting.add(fn);
  return () => { waiting.delete(fn); };
};

/** Re-renders when the tips arrive. */
export function useTipsLoaded(): boolean {
  return useSyncExternalStore(subscribe, tipsLoaded, tipsLoaded);
}

/**
 * The tip of a lesson: its own, a Belgian one in Belgium, or a region's (see the register).
 * Undefined while the tips are not loaded yet: the app shows no lesson before then.
 */
export function tipForLesson(lessonId: string): CultureTip | undefined {
  return register?.tipForLesson(lessonId);
}

/** The tips of the learner's country, in course order (the "Alle regels" page). */
export function taalTips(): CultureTip[] {
  return register?.taalTips() ?? [];
}
