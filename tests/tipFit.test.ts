import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { FIT_STEPS } from '../src/components/useFitText';

describe('a tip on its own page takes the room above Continue (4 November 2026)', () => {
  it('tries the largest size first, never below the CSS size', () => {
    expect([...FIT_STEPS]).toEqual([...FIT_STEPS].sort((a, b) => b - a));
    expect(Math.min(...FIT_STEPS)).toBeGreaterThan(1.0625);
  });
  it('the CSS uses the fitted size, with the old size as fallback', () => {
    const css = readFileSync('src/styles.css', 'utf8');
    expect(css).toContain('.tip-page-read[data-fit] .tip-body { font-size: var(--tip-fit)');
  });
});
