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

/** The choices while storage is blocked (private mode): they hold for this visit. */
let wantsMemory: boolean | null = null;
let inputMemory: WritingInput | null = null;

export function wantsWriting(): boolean {
  try {
    return localStorage.getItem(KEY) === '1';
  } catch {
    return wantsMemory ?? false;
  }
}

export function setWantsWriting(on: boolean): void {
  wantsMemory = on;
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

/**
 * This "type what you hear" shows as "hear and pick the written word": for a learner who reads
 * another script (pickInsteadOfTyping), and in the first units for everyone (`pick`,
 * lib/exercises.ts PROGRESSION.type), unless the learner chose "Ik wil ook leren schrijven".
 * Only with written words to pick from.
 */
export function typeAsPick(ex: { options?: readonly unknown[]; pick?: true }, lang?: HelpLanguage, writing = wantsWriting()): boolean {
  if ((ex.options?.length ?? 0) < 2) return false;
  return ex.pick ? !writing : pickInsteadOfTyping(lang, writing);
}

/**
 * How dictation is written: with letter tiles (three at a time, components/Exercises.tsx) or
 * with the phone's keyboard (a text field and Check). The default follows the script of the help
 * language: letter tiles for another script, the keyboard for the Latin one. The choice lives in
 * Settings (the writing setting), stored on this device under its own key; it replaces the
 * "letters / keyboard" switch that used to sit inside the exercise.
 */
const INPUT_KEY = 'vloertaal:writing-input';
export type WritingInput = 'tiles' | 'keys';

export function writingInput(lang?: HelpLanguage): WritingInput {
  try {
    const v = localStorage.getItem(INPUT_KEY);
    if (v === 'tiles' || v === 'keys') return v;
  } catch {
    // No storage: this visit's choice, else the default below.
    if (inputMemory) return inputMemory;
  }
  return nonLatinHelp(lang) ? 'tiles' : 'keys';
}

/** Sets the dictation input (null: back to the default for the help language). */
export function setWritingInput(mode: WritingInput | null): void {
  inputMemory = mode;
  try {
    if (mode) localStorage.setItem(INPUT_KEY, mode);
    else localStorage.removeItem(INPUT_KEY);
  } catch {
    // Private mode: the default stays.
  }
}
