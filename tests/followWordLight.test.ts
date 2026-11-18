import { describe, expect, it } from 'vitest';
import { followWordLight, type WordLightEnv } from '../src/lib/followWordLight';
import { CLIP_TAIL_S } from '../src/lib/clipTime';
import { wordTimes } from '../src/lib/wordLight';
import { setSpeakSpeed } from '../src/lib/speakSpeed';

/*
 * The word light follows one line while it is said (the owner's request, 17 November 2026;
 * src/lib/followWordLight.ts): it reports which word is lit, from the sound's own reports
 * (src/lib/audio.ts onSpeech, onSpeechLength). No screen needed: sound and clock are made up here.
 */

const TEXT = 'Staat de proeftijd in mijn contract?';

type SpeechFn = (text: string, speaking: boolean, slow: boolean, speed?: number) => void;
type LengthFn = (text: string, seconds: number, rate: number) => void;

/** `speed`: the speed the sound was really given (the speech event carries it). */
function world(speed = 1) {
  const speech = new Set<SpeechFn>();
  const length = new Set<LengthFn>();
  let now = 1000;
  let frames: Array<() => void> = [];
  const env: WordLightEnv = {
    onSpeech: (fn) => { speech.add(fn); return () => speech.delete(fn); },
    onSpeechLength: (fn) => { length.add(fn); return () => length.delete(fn); },
    now: () => now,
    frame: (fn) => { frames.push(fn); return frames.length; },
    cancelFrame: () => { frames = []; },
  };
  const lit: number[] = [];
  return {
    env,
    lit,
    on: (i: number) => { lit.push(i); },
    start: (text = TEXT, slow = false) => speech.forEach((fn) => fn(text, true, slow, speed)),
    end: (text = TEXT) => speech.forEach((fn) => fn(text, false, false)),
    /** The clip reports it plays, `ms` long once its silent end is taken off (rate 1). */
    length: (ms: number, text = TEXT) => length.forEach((fn) => fn(text, ms / 1000 + CLIP_TAIL_S, 1)),
    /** Time passes: the clock moves on and every waiting frame runs once. */
    advance: (ms: number) => { now += ms; const run = frames; frames = []; run.forEach((f) => f()); },
    waiting: () => frames.length,
  };
}

describe('followWordLight', () => {
  it('lights nothing before the line is said', () => {
    const w = world();
    followWordLight(TEXT, w.on, w.env);
    w.advance(500);
    expect(w.lit).toEqual([]);
  });

  it('lights the first word as soon as the line starts to sound', () => {
    const w = world();
    followWordLight(TEXT, w.on, w.env);
    w.start();
    expect(w.lit).toEqual([0]);
  });

  it('ignores another line that is said', () => {
    const w = world();
    followWordLight(TEXT, w.on, w.env);
    w.start('Hallo');
    w.advance(100);
    expect(w.lit).toEqual([]);
  });

  it('moves on word by word at the length the recording reports', () => {
    const w = world();
    followWordLight(TEXT, w.on, w.env);
    w.start();
    w.length(3000);
    const times = wordTimes(TEXT, 3000);
    w.advance(times[1].start + 1);
    w.advance(times[2].start - times[1].start);
    w.advance(times[3].start - times[2].start);
    expect(w.lit).toEqual([0, 1, 2, 3]);
  });

  it('starts counting from the moment the length arrives (the sound really starts then)', () => {
    const w = world();
    followWordLight(TEXT, w.on, w.env);
    w.start();
    w.advance(400); // the clip takes a moment to start
    w.length(3000);
    const times = wordTimes(TEXT, 3000);
    // Counted from the old start this would already be the next word.
    w.advance(times[3].start + 1);
    expect(w.lit[w.lit.length - 1]).toBe(3);
  });

  it('reports a word once, not at every frame', () => {
    const w = world();
    followWordLight(TEXT, w.on, w.env);
    w.start();
    w.length(3000);
    for (let i = 0; i < 5; i++) w.advance(10);
    expect(w.lit).toEqual([0]);
  });

  it('without a length (the phone voice) it goes on at a guess, and turns out the light at the end', () => {
    const w = world();
    followWordLight(TEXT, w.on, w.env);
    w.start();
    w.advance(1500);
    expect(w.lit[w.lit.length - 1]).toBeGreaterThan(0);
    w.end();
    expect(w.lit[w.lit.length - 1]).toBe(-1);
    expect(w.waiting()).toBe(0);
  });

  it('says a second play starts at the first word again', () => {
    const w = world();
    followWordLight(TEXT, w.on, w.env);
    w.start();
    w.length(3000);
    w.advance(2900);
    w.end();
    w.start();
    expect(w.lit[w.lit.length - 1]).toBe(0);
  });

  it('turns the light out when the time is over, even if the end never comes', () => {
    const w = world();
    followWordLight(TEXT, w.on, w.env);
    w.start();
    w.length(1000);
    w.advance(1200);
    expect(w.lit[w.lit.length - 1]).toBe(-1);
  });

  it('still follows a recording whose length arrives after the guess has run out (a clip that starts late)', () => {
    const w = world();
    followWordLight(TEXT, w.on, w.env);
    w.start();
    w.advance(20000); // the guess is long over: the light is out, but the clip has not started yet
    expect(w.lit[w.lit.length - 1]).toBe(-1);
    w.length(3000); // now the clip really starts
    expect(w.lit[w.lit.length - 1]).toBe(0);
    const times = wordTimes(TEXT, 3000);
    w.advance(times[2].start + 1);
    expect(w.lit[w.lit.length - 1]).toBe(2);
  });

  it('ignores a length that arrives after the line has ended', () => {
    const w = world();
    followWordLight(TEXT, w.on, w.env);
    w.start();
    w.end();
    w.length(3000);
    w.advance(100);
    expect(w.lit[w.lit.length - 1]).toBe(-1);
  });

  it('does not light a line of one word: a light that moves from word to word has nothing to move over', () => {
    const w = world();
    const stop = followWordLight('Werk', w.on, w.env);
    w.start('Werk');
    w.length(800, 'Werk');
    w.advance(100);
    expect(w.lit).toEqual([]);
    expect(w.waiting()).toBe(0);
    stop();
  });

  it('ignores a length when nothing is being said', () => {
    const w = world();
    followWordLight(TEXT, w.on, w.env);
    w.length(3000);
    w.advance(100);
    expect(w.lit).toEqual([]);
  });

  it('stops listening and waiting when the card leaves', () => {
    const w = world();
    const stop = followWordLight(TEXT, w.on, w.env);
    w.start();
    stop();
    expect(w.waiting()).toBe(0);
    w.start();
    w.advance(100);
    expect(w.lit).toEqual([0]);
  });

  it('without a length, a slower chosen speed slows the guess too (the phone voice, which reports nothing)', () => {
    const lastLit = (speed: number) => {
      const w = world(speed);
      followWordLight(TEXT, w.on, w.env);
      w.start();
      w.advance(1500);
      return w.lit[w.lit.length - 1];
    };
    expect(lastLit(1)).toBeGreaterThan(lastLit(0.5));
    // At half the speed the line takes twice as long: 1500 ms is where 750 ms was.
    const half = world(0.5);
    followWordLight(TEXT, half.on, half.env);
    half.start();
    half.advance(750);
    const full = world(1);
    followWordLight(TEXT, full.on, full.env);
    full.start();
    full.advance(375);
    expect(half.lit[half.lit.length - 1]).toBe(full.lit[full.lit.length - 1]);
  });

  it('follows the speed the sound was given, not the slider: a card without a slider plays at normal speed even when the slider was left at a quarter', () => {
    const lastLit = () => {
      const w = world(1);
      followWordLight(TEXT, w.on, w.env);
      w.start();
      w.advance(375);
      return w.lit[w.lit.length - 1];
    };
    const withSliderAtOne = lastLit();
    // The card says its line at 1; the slider (from another card) still stands at 0.25.
    setSpeakSpeed(0.25);
    try {
      expect(lastLit()).toBe(withSliderAtOne);
    } finally {
      setSpeakSpeed(1);
    }
  });

  it('a length that is reported already counts the speed (the recording plays at that rate): it is not slowed twice', () => {
    const w = world(0.5);
    followWordLight(TEXT, w.on, w.env);
    w.start();
    w.length(3000);
    const times = wordTimes(TEXT, 3000);
    w.advance(times[2].start + 1);
    expect(w.lit[w.lit.length - 1]).toBe(2);
  });
});
