import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

function files(dir: string): string[] {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? files(p) : /\.tsx?$/.test(f) ? [p] : [];
  });
}

describe('React effects', () => {
  // An arrow without braces returns its value, and React treats a returned
  // value as the cleanup function. window.scrollTo returns a Promise in new
  // Chrome versions, which crashed the lesson screen. Always use a block body.
  it('never return a value by accident', () => {
    const bad = files('src').flatMap((f) =>
      readFileSync(f, 'utf8')
        .split('\n')
        .map((line, i) => ({ f, i: i + 1, line }))
        .filter(({ line }) => /use(Layout)?Effect\(\(\) => (?!\{)/.test(line)),
    );
    expect(bad.map(({ f, i }) => `${f}:${i}`)).toEqual([]);
  });
});
