import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

/** Every file under src/ that could name a font. */
function files(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return files(path);
    return /\.(css|tsx?)$/.test(name) ? [path] : [];
  });
}

describe('emoji font order', () => {
  // The self-hosted Noto Color Emoji is COLRv1, which Safari (iPhone, iPad, Mac) loads but does
  // not draw: with Noto first, every emoji there was an empty square (the Werkregels topics on an
  // iPhone, 20 okt 2026). Apple's own emoji font goes first; only Apple devices have it.
  it('puts Apple Color Emoji before Noto Color Emoji in every font stack', () => {
    const stacks = files('src').flatMap((f) =>
      readFileSync(f, 'utf8').split('\n').filter((l) => l.includes("'Noto Color Emoji'")).map((l) => ({ f, l })),
    );
    expect(stacks.length).toBeGreaterThan(0);
    for (const { f, l } of stacks) {
      expect(l.indexOf("'Apple Color Emoji'"), `${f}: ${l.trim()}`).toBeGreaterThanOrEqual(0);
      expect(l.indexOf("'Apple Color Emoji'"), `${f}: ${l.trim()}`).toBeLessThan(l.indexOf("'Noto Color Emoji'"));
    }
  });
});
