import { onSoundNeedsInternet, onSpeech } from './audio';

/**
 * "Zeg het hardop" on a new word's card (the owner's request, 5 November 2026): saying a word
 * yourself makes it stick better than only hearing it (the production effect; saying it softly or
 * in your head helps too, a little less), and it is a first, private step for a learner who does
 * not dare to speak yet. No button, no recording, no score: one calm line under the card
 * (src/components/Exercises.tsx IntroCard), and Continue goes on as before.
 *
 *  - 'aloud' ("Zeg het hardop."): the line appears once the word has sounded (the card plays it
 *    by itself). A tap on the speaker that says it again lights the "your turn" sign again.
 *  - 'quiet' ("Zeg het zachtjes, of in je hoofd."): "Zonder geluid" (the pause sheet; its twin
 *    "Ik kan nu niet luisteren" sets the same), or nothing on this phone can say the word: the
 *    line is there at once, without waiting for a sound that will not come.
 *
 * The "your turn" sign (three dots that light up one after the other, about 2 s, then stand still)
 * waits until the word's picture has stopped moving (docs/tekenstijl.md "Beweging": a moving
 * picture plays 0.4 s after it is drawn, up to 2.4 s): one movement at a time, first the picture,
 * then the learner. The text itself does not move; with less motion or "Rustig scherm" the dots
 * stand still (styles.css), the line stays.
 */
export type SayMode = 'aloud' | 'quiet';

/** Which line a word card shows: quiet without sound, or when nothing can say the word. */
export function sayMode(soundOff: boolean, silent: boolean): SayMode {
  return soundOff || silent ? 'quiet' : 'aloud';
}

/**
 * The word never reported its end (a phone voice that never says "done", a clip that never
 * starts): the line shows after this long anyway. A clip that hangs is given up on after 6 s
 * (src/lib/audio.ts CLIP_START_MS), and the phone says it then: this is the last resort.
 */
export const SAY_FALLBACK_MS = 8000;

/** An end counts when the word has not started again this soon after it. */
export const SAY_SETTLE_MS = 150;

export interface SayEvents {
  /** The line shows, with the text for `mode` (again with 'quiet' if the sound turns out to need internet). */
  shown: (mode: SayMode) => void;
  /** The "your turn" sign plays once more (the line is shown). */
  pulse: () => void;
}

export interface SayEnv {
  /** Milliseconds until the word's picture is still (0 when it does not move). */
  stillIn: () => number;
  onSpeech: typeof onSpeech;
  onSoundNeedsInternet: typeof onSoundNeedsInternet;
  setTimeout: (fn: () => void, ms: number) => unknown;
  clearTimeout: (id: unknown) => void;
}

const defaults: Omit<SayEnv, 'stillIn'> = {
  onSpeech,
  onSoundNeedsInternet,
  setTimeout: (fn, ms) => setTimeout(fn, ms),
  clearTimeout: (id) => clearTimeout(id as ReturnType<typeof setTimeout>),
};

/**
 * Follows the word `text` on its card: when the line shows (at once in 'quiet', else when the word
 * has sounded) and when the "your turn" sign plays (each time the word has sounded, after the
 * picture is still). Returns a stop (the card leaves, or the mode changes). `wasShown`: the line is
 * up already (the mode changed on the card): no sign of its own then, only after the next sound.
 */
export function followSayAloud(text: string, mode: SayMode, on: SayEvents, env: Partial<SayEnv> = {}, wasShown = false): () => void {
  const e: SayEnv = { stillIn: () => 0, ...defaults, ...env };
  const timers = new Set<unknown>();
  const later = (ms: number, fn: () => void) => {
    const id = e.setTimeout(() => { timers.delete(id); fn(); }, Math.max(0, ms));
    timers.add(id);
  };
  let shown = wasShown;
  /** The word started to sound since the last end (an end without a start is another line's stop). */
  let sounding = false;
  const show = (m: SayMode) => {
    if (!shown) { shown = true; on.shown(m); }
    later(e.stillIn(), on.pulse);
  };
  if (wasShown) on.shown(mode);
  else if (mode === 'quiet') show('quiet');
  else later(SAY_FALLBACK_MS, () => { if (!shown) show('aloud'); });
  const offSpeech = e.onSpeech((said, speaking) => {
    if (said !== text) return;
    if (speaking) { sounding = true; return; }
    if (!sounding) return;
    sounding = false;
    // A play cut off by the next one (a tap on the speaker, the card drawn again) ends and starts
    // again at once: only an end the word does not start again after counts.
    later(SAY_SETTLE_MS, () => { if (!sounding) show(mode); });
  });
  // The word could not be heard for want of internet (and nothing on the phone could say it).
  const offNet = e.onSoundNeedsInternet(() => {
    if (shown) return;
    shown = true;
    on.shown('quiet');
    later(e.stillIn(), on.pulse);
  });
  return () => {
    offSpeech();
    offNet();
    timers.forEach((id) => e.clearTimeout(id));
    timers.clear();
  };
}

/**
 * How long until the CSS animations inside `el` (a moving word picture) are over: 0 when nothing
 * moves (a still picture, less motion, "Rustig scherm"), or on an old phone without
 * Element.getAnimations (the dots then simply start at once).
 */
export function stillInMs(el: Element | null | undefined): number {
  if (!el || typeof el.getAnimations !== 'function') return 0;
  let left = 0;
  for (const a of el.getAnimations({ subtree: true })) {
    if (a.playState === 'finished') continue;
    const end = Number(a.effect?.getComputedTiming().endTime ?? 0);
    const now = Number(a.currentTime ?? 0);
    if (Number.isFinite(end) && Number.isFinite(now)) left = Math.max(left, end - now);
  }
  return left;
}
