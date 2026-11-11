import { KEYS } from './storageKeys';

/**
 * The lesson's Continue button says "Verder" only until it has been used once ("Vloertaal
 * rustiger": after that the arrow is clear). Remembered on this phone; a screen reader always
 * hears the word (aria-label). "Controleer" (typing) keeps its word: it does something else.
 */
const KEY = KEYS.goKnown;
let memory = false;

export function goKnown(): boolean {
  try {
    return memory || localStorage.getItem(KEY) === '1';
  } catch {
    return memory;
  }
}

export function markGoKnown(): void {
  memory = true;
  try {
    localStorage.setItem(KEY, '1');
  } catch {
    // Private mode: remembered for this visit only.
  }
}
