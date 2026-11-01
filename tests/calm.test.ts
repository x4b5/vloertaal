import { afterEach, describe, expect, it, vi } from 'vitest';
import { applyCalm, calmOn, stillMotion } from '../src/lib/calm';

/** "Rustig scherm" (src/lib/calm.ts): auto follows the phone's "less motion"; on and off win. */
const root = { dataset: {} as Record<string, string> };
function phoneStill(still: boolean) {
  vi.stubGlobal('window', { matchMedia: (q: string) => ({ matches: still && q.includes('reduce') }) });
  vi.stubGlobal('document', { documentElement: root });
}

describe('Rustig scherm', () => {
  afterEach(() => { vi.unstubAllGlobals(); delete root.dataset.calm; });

  it('auto (the default) follows the phone; on and off win over it', () => {
    phoneStill(true);
    expect(calmOn(undefined)).toBe(true);
    expect(calmOn('auto')).toBe(true);
    expect(calmOn('off')).toBe(false);
    phoneStill(false);
    expect(calmOn('auto')).toBe(false);
    expect(calmOn('on')).toBe(true);
  });

  it('marks <html>, so all motion stops at once, and scripted motion asks stillMotion()', () => {
    phoneStill(false);
    applyCalm('on');
    expect(root.dataset.calm).toBe('1');
    expect(stillMotion()).toBe(true);
    applyCalm('off');
    expect(root.dataset.calm).toBeUndefined();
    expect(stillMotion()).toBe(false);
  });
});
