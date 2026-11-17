import { dutchUi } from './track';
import type { HelpLanguage } from '../i18n/types';
import type { Exercise } from './exercises';

/**
 * Continue comes a little later on a card that asks to say something out loud (the owner,
 * 17 November 2026): the learner first sees "Zeg het hardop" (src/lib/sayAloud.ts), is then more
 * inclined to say it, and only after that is Continue there. A soft nudge, never a lock:
 *  - Continue is there GO_DELAY_MS after the say-it line has shown, and at the latest GO_HOLD_MAX_MS
 *    after the card came (the line shows by itself after a sound that never ends: SAY_FALLBACK_MS);
 *  - only the first time a card comes by: a repeat, or going back to it, has Continue at once;
 *  - only on a card that really shows the line (goHoldId): the Dutch course has none on its word cards.
 * Continue keeps its place while it waits (the button is only invisible), so nothing moves.
 */
export const GO_DELAY_MS = 1500;
export const GO_HOLD_MAX_MS = 5000;

/** The cards whose Continue came once: they are not held again (a repeat, or going back). */
const opened = new Set<string>();

/** Is this card new, so its Continue is held back? */
export function shouldHoldGo(id: string): boolean {
  return !opened.has(id);
}

/** Forget which cards were held (tests; a new lesson session starts the app again anyway). */
export function forgetGoHolds(): void {
  opened.clear();
}

export interface GoHold {
  /** The say-it line has shown: Continue comes GO_DELAY_MS later (at the first call only). */
  shown: () => void;
  /** The card is left: nothing opens, and it counts as not seen yet. */
  stop: () => void;
}

/**
 * Starts holding the Continue of the card `id`. `onOpen` is told once, when Continue may show.
 */
export function startGoHold(id: string, onOpen: () => void): GoHold {
  let done = false;
  let afterLine: ReturnType<typeof setTimeout> | undefined;
  const clear = () => {
    clearTimeout(longest);
    clearTimeout(afterLine);
  };
  const open = () => {
    if (done) return;
    done = true;
    clear();
    opened.add(id);
    onOpen();
  };
  const longest = setTimeout(open, GO_HOLD_MAX_MS);
  return {
    shown: () => {
      if (done || afterLine !== undefined) return;
      afterLine = setTimeout(open, GO_DELAY_MS);
    },
    stop: () => {
      done = true;
      clear();
    },
  };
}

/**
 * The id of a card whose Continue is held, or undefined when it is not: exactly the cards that show
 * "Zeg het hardop" (a new word, the "Zeg het zo" page of a tip, "Zo zeg je het"). Mirrors their own
 * conditions; tests/goHold.test.ts renders the cards to keep the two together.
 */
export function goHoldId(ex: Exercise, lang?: HelpLanguage): string | undefined {
  switch (ex.kind) {
    case 'intro': return dutchUi(lang) ? undefined : `intro:${ex.word.id}`;
    case 'tip': return ex.part === 'say' && !dutchUi(lang) ? `tip:${ex.tip.id}` : undefined;
    case 'model': return `model:${ex.step.id}`;
    default: return undefined;
  }
}

/** Marks "the Continue of card `key` (a place in the lesson) holding `id` has opened". */
export function goOpenedKey(key: string, id: string): string {
  return `${key}|${id}`;
}

/** Is the Continue of this card held back right now? `opened`: the goOpenedKey of the last card that opened. */
export function goHeld(id: string | undefined, key: string, opened: string): boolean {
  return id !== undefined && opened !== goOpenedKey(key, id) && shouldHoldGo(id);
}

/** The class of the footer button: invisible while held, coming in softly once it opened, else none (styles.css). */
export function goClass(id: string | undefined, key: string, opened: string): '' | 'btn-held' | 'btn-came' {
  if (id === undefined) return '';
  if (goHeld(id, key, opened)) return 'btn-held';
  return opened === goOpenedKey(key, id) ? 'btn-came' : '';
}
