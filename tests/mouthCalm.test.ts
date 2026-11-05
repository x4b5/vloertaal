import { afterEach, describe, expect, it, vi } from 'vitest';
import { applyCalm, learnerWantsStill, stillMotion } from '../src/lib/calm';

/**
 * The mouth of "Hoe zeg je het?" moves after a tap also when the phone or laptop asks for less
 * motion (Windows' animation effects off: the owner, 5 November 2026); it stays still only when the
 * learner chose "Rustig scherm: aan" in the app.
 */
const reduced = (on: boolean) => {
  // No DOM in these tests: a bare <html> with its dataset, and the browser's matchMedia.
  vi.stubGlobal('document', { documentElement: { dataset: {} as Record<string, string> } });
  vi.stubGlobal('window', { matchMedia: (q: string) => ({ matches: on && q.includes('reduce') }) });
};

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('the mouth and "less motion"', () => {
  it('the phone asks for less motion: other motion stops, the mouth may move', () => {
    reduced(true);
    applyCalm('auto');
    expect(stillMotion()).toBe(true);
    expect(learnerWantsStill()).toBe(false);
  });
  it('the learner chose Rustig scherm: aan: the mouth stays still too', () => {
    reduced(false);
    applyCalm('on');
    expect(learnerWantsStill()).toBe(true);
  });
  it('Rustig scherm uit: everything moves', () => {
    reduced(false);
    applyCalm('off');
    expect(stillMotion()).toBe(false);
    expect(learnerWantsStill()).toBe(false);
  });
});
