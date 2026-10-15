/**
 * English as a bridge, or not. With a help language chosen, the screens show only that language
 * (calmer to read); the small English line next to it is hidden. The Settings switch "Show
 * English too" (off by default; for coaches and learners who know some English) brings it back.
 * Where a string has no help translation, the English stays: it is then the only text.
 *
 * One mechanism for every screen: the class `en-off` on <html>. styles.css hides the English
 * line of a bilingual pair (.bi-swap > .bi-help, .bi-sep) and every element marked en-support
 * (an English line placed next to a help line by hand). Stored on this device only.
 */
const KEY = 'vloertaal:show-english';
export const EN_OFF_CLASS = 'en-off';

/** The choice for this visit when the device can't store it (private mode). */
let memory: boolean | null = null;

export function wantsEnglish(): boolean {
  try {
    return localStorage.getItem(KEY) === '1';
  } catch {
    return memory ?? false;
  }
}

export function setWantsEnglish(on: boolean): void {
  memory = on;
  try {
    if (on) localStorage.setItem(KEY, '1');
    else localStorage.removeItem(KEY);
  } catch {
    // Private mode: the choice holds for this visit only.
  }
}

/** The English next to a help line is hidden: a help language is chosen and "Show English too" is off. */
export function englishHidden(langCode: string | null | undefined, showEnglish: boolean): boolean {
  // The work-rules track ('nl') has no English at all: "Show English too" is not offered there.
  if (langCode === 'nl') return true;
  return Boolean(langCode) && !showEnglish;
}

/** Sets or clears `en-off` on <html> for this help language and the stored switch. */
export function applyEnglish(langCode: string | null | undefined, showEnglish = wantsEnglish()): void {
  if (typeof document === 'undefined') return;
  document.documentElement.classList.toggle(EN_OFF_CLASS, englishHidden(langCode, showEnglish));
}

/**
 * The help language whose English setting applies now. On the language page (not onboarded yet,
 * also after Back to it) nothing is chosen, so the English stays; once a language is picked, even
 * the same one again, its setting applies. App.tsx re-applies whenever this or `onboarded` changes.
 */
export function englishLangFor(helpLang: string | null | undefined, onboarded: boolean): string | null {
  return onboarded ? helpLang ?? null : null;
}
