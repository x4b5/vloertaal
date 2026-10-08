import type { HelpLanguage } from '../i18n/types';
import { NON_LATIN_HELP } from './letters';

/**
 * Writing Dutch, for a learner whose help language has another script (Ge'ez, Arabic, Cyrillic).
 * By default "type what you hear" becomes "hear and pick the written word": three written Dutch
 * words, each with its own speaker, and the word's picture after Check. The setting "Ik wil ook
 * leren schrijven" (Settings) brings back real dictation with letter tiles. Stored on this
 * device only, under its own key.
 */
const KEY = 'vloertaal:learn-writing';

export function wantsWriting(): boolean {
  try {
    return localStorage.getItem(KEY) === '1';
  } catch {
    return false;
  }
}

export function setWantsWriting(on: boolean): void {
  try {
    if (on) localStorage.setItem(KEY, '1');
    else localStorage.removeItem(KEY);
  } catch {
    // Private mode: the choice holds for this visit only (the default stays).
  }
}

/** The help language is written in another script than Dutch. */
export function nonLatinHelp(lang?: HelpLanguage): boolean {
  return Boolean(lang && NON_LATIN_HELP.has(lang.code));
}

/** "Type what you hear" is shown as "hear and pick the written word". */
export function pickInsteadOfTyping(lang?: HelpLanguage, writing = wantsWriting()): boolean {
  return nonLatinHelp(lang) && !writing;
}
