import { beforeEach, describe, expect, it } from 'vitest';
import { getSpeakSpeed, onSpeakSpeed, setSpeakSpeed, SPEED_MIN, SPEED_STEP, speedLabel } from '../src/lib/speakSpeed';

/*
 * The speed a learner chose for the Dutch they hear (src/lib/speakSpeed.ts): from as it is (1) to a
 * quarter (SPEED_MIN). One value for the whole app, kept while the app is open, so "Hoe zeg je het?"
 * and the cards with a Dutch line (the word by word light) share it. It was a variable inside
 * KlankCard (4 November 2026); the numbers and the label did not change.
 */

beforeEach(() => setSpeakSpeed(1));

describe('the range and its label', () => {
  it('runs from a quarter to as it is, in steps of 0.05', () => {
    expect(SPEED_MIN).toBe(0.25);
    expect(SPEED_STEP).toBe(0.05);
  });

  it('is written as 1×, ¾×, ½×, ¼× (and .6× between)', () => {
    expect(speedLabel(1)).toBe('1×');
    expect(speedLabel(0.75)).toBe('¾×');
    expect(speedLabel(0.5)).toBe('½×');
    expect(speedLabel(0.25)).toBe('¼×');
    expect(speedLabel(0.6)).toBe('.6×');
  });
});

describe('the chosen speed', () => {
  it('starts as it is (1)', () => {
    expect(getSpeakSpeed()).toBe(1);
  });

  it('is kept, and told to everyone who listens', () => {
    const heard: number[] = [];
    const off = onSpeakSpeed(() => heard.push(getSpeakSpeed()));
    setSpeakSpeed(0.5);
    expect(getSpeakSpeed()).toBe(0.5);
    expect(heard).toEqual([0.5]);
    off();
    setSpeakSpeed(0.75);
    expect(heard).toEqual([0.5]);
  });

  it('never goes below a quarter or above as it is', () => {
    setSpeakSpeed(0.01);
    expect(getSpeakSpeed()).toBe(SPEED_MIN);
    setSpeakSpeed(3);
    expect(getSpeakSpeed()).toBe(1);
  });

  it('tells nobody when the speed did not change', () => {
    let told = 0;
    const off = onSpeakSpeed(() => { told += 1; });
    setSpeakSpeed(1);
    expect(told).toBe(0);
    off();
  });

  it('ignores a value that is not a number', () => {
    setSpeakSpeed(0.5);
    setSpeakSpeed(Number.NaN);
    expect(getSpeakSpeed()).toBe(0.5);
  });
});
