import { describe, expect, it } from 'vitest';
import type { Exercise } from '../src/lib/exercises';
import { offerSkipSound } from '../src/lib/skipSound';

const ex = (kind: string) => ({ kind }) as unknown as Exercise;

describe('offerSkipSound ("Ik kan nu niet luisteren" under an exercise)', () => {
  it('shows on an exercise that can only be done by hearing', () => {
    expect(offerSkipSound(ex('listen'), { checked: false, soundOff: false })).toBe(true);
    expect(offerSkipSound(ex('type'), { checked: false, soundOff: false })).toBe(true);
  });

  it('not on an exercise with the word on screen', () => {
    expect(offerSkipSound(ex('meaning'), { checked: false, soundOff: false })).toBe(false);
    expect(offerSkipSound(ex('truefalse'), { checked: false, soundOff: false })).toBe(false);
  });

  it('not after Check, and not when the sound is already off', () => {
    expect(offerSkipSound(ex('listen'), { checked: true, soundOff: false })).toBe(false);
    expect(offerSkipSound(ex('listen'), { checked: false, soundOff: true })).toBe(false);
  });
});
