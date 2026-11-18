import { onSpeech, onSpeechLength } from './audio';
import { spokenMs } from './clipTime';
import { SPEED_MIN } from './speakSpeed';
import { guessMs, wordAt, wordsOf, wordTimes, type WordTime } from './wordLight';

/**
 * Follows one Dutch line while it is said and reports which word is lit (the owner's request,
 * 17 November 2026): the word being said gets a coloured background, so a learner can say it along.
 *
 * It knows only the text, never the card it is on, so every place that shows a Dutch line can use it.
 * It listens to the sound itself (src/lib/audio.ts):
 *  - onSpeech: the line starts to sound (the light starts at the first word) or stops (the light goes out);
 *  - onSpeechLength: a recording reports how long it sounds, once it really starts: from then on the
 *    words follow that length (src/lib/wordLight.ts wordTimes). The phone's voice reports nothing:
 *    its light goes on at a guess (guessMs, slowed by the speed the sound was given: the speech event
 *    carries it, so a card without a slider is never slowed by a slider left elsewhere) until the sound ends.
 * The light also goes out by itself when the time is over, in case the end never comes.
 *
 * `on(index)` is told only when the lit word changes; -1 is "no word". Returns a stop (the card
 * leaves): it stops listening and waiting, and says nothing more.
 */
export interface WordLightEnv {
  onSpeech: typeof onSpeech;
  onSpeechLength: typeof onSpeechLength;
  now: () => number;
  /** Run `fn` at the next screen frame. */
  frame: (fn: () => void) => unknown;
  cancelFrame: (id: unknown) => void;
}

const defaults: WordLightEnv = {
  onSpeech,
  onSpeechLength,
  now: () => performance.now(),
  frame: (fn) => requestAnimationFrame(fn),
  cancelFrame: (id) => cancelAnimationFrame(id as number),
};

export function followWordLight(text: string, on: (index: number) => void, env: Partial<WordLightEnv> = {}): () => void {
  // One word ("het werk"): the light would only go on and off, with nothing to move over. Never listens.
  if (wordsOf(text).length < 2) return () => undefined;
  const e: WordLightEnv = { ...defaults, ...env };
  let times: readonly WordTime[] = [];
  let total = 0;
  let startedAt = 0;
  let running = false;
  /** The line has started to sound and not ended: a length that arrives later still counts, even after the guess ran out. */
  let sounding = false;
  let shown = -1;
  let waiting: unknown;

  const show = (index: number) => {
    if (index !== shown) { shown = index; on(index); }
  };
  const cancel = () => {
    if (waiting !== undefined) e.cancelFrame(waiting);
    waiting = undefined;
  };
  const tick = () => {
    waiting = undefined;
    if (!running) return;
    const ms = e.now() - startedAt;
    if (ms >= total) { running = false; show(-1); return; }
    show(wordAt(times, ms));
    waiting = e.frame(tick);
  };
  /** The words over `totalMs`, counted from now. */
  const begin = (totalMs: number) => {
    cancel();
    running = true;
    total = totalMs;
    times = wordTimes(text, totalMs);
    startedAt = e.now();
    show(wordAt(times, 0));
    waiting = e.frame(tick);
  };
  const stopLight = () => {
    running = false;
    sounding = false;
    cancel();
    show(-1);
  };

  const offSpeech = e.onSpeech((said, speaking, slow, speed = 1) => {
    if (said !== text) return;
    // The phone's voice reports no length: the guess is stretched by the speed this sound was given
    // (a recording's length already has it).
    if (speaking) {
      sounding = true;
      begin(guessMs(text, slow) / Math.max(SPEED_MIN, speed));
    } else stopLight();
  });
  const offLength = e.onSpeechLength((said, seconds, rate) => {
    // Not `running`: a clip that starts later than the guess lasts (one short word) has put the light out already.
    if (said !== text || !sounding) return;
    // The sound really starts now: count from here, over the length of the recording.
    begin(spokenMs(seconds, rate));
  });
  return () => {
    offSpeech();
    offLength();
    running = false;
    sounding = false;
    cancel();
  };
}
