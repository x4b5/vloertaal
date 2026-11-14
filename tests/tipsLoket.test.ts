import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { loadTips, taalTips, tipForLesson, tipsLoaded } from '../src/lib/tips';

/**
 * The "Zo werkt het hier" tips load apart from the start (src/lib/tips.ts, 14 November 2026): their
 * long texts were a tenth of the start file. This keeps them out: only the loket may name the
 * register and the tips' own files, and only with `import(...)` or `import type`.
 */

const SRC = join(__dirname, '..', 'src');

/** The register and the files with the tips' texts. */
const TIP_FILES = /from '(?:\.\.?\/)+(?:content\/)?(?:culture|workTips|cultureTipsBase)'/;

/** May name them: the tips' own files, the pages built for the website (vite.config.ts, never in the app), and the dev screenshots. */
const ALLOWED = [
  'content/culture.ts',
  'content/workTips.ts',
  'content/cultureTipsBase.ts',
  'lib/tipPages.ts',
  'dev/',
];

function files(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? files(join(dir, e.name)) : /\.tsx?$/.test(e.name) ? [join(dir, e.name)] : [],
  );
}

describe('the tips stay out of the start file', () => {
  it('no file of the app imports the register or the tip texts directly', () => {
    const wrong = files(SRC).flatMap((file) => {
      const name = file.slice(SRC.length + 1);
      if (ALLOWED.some((a) => name.startsWith(a))) return [];
      return readFileSync(file, 'utf8')
        .split('\n')
        .filter((line) => TIP_FILES.test(line) && !/^\s*(?:import|export) type\b/.test(line))
        .map((line) => `${name}: ${line.trim()}`);
    });
    expect(wrong).toEqual([]);
  });

  it('the loket itself loads the register with import(...), not at the top of the file', () => {
    const loket = readFileSync(join(SRC, 'lib', 'tips.ts'), 'utf8');
    expect(loket).toContain("import('../content/culture')");
    expect(loket).not.toMatch(/^import \{[^}]*\} from '\.\.\/content\/culture'/m);
  });
});

describe('the loket', () => {
  it('gives the tips once they are loaded', async () => {
    await loadTips();
    expect(tipsLoaded()).toBe(true);
    expect(tipForLesson('l.hello')?.id).toBe('c.je');
    expect(tipForLesson('l.delay')?.id).toBe('c.delay');
    expect(tipForLesson('l.does-not-exist')).toBeUndefined();
    expect(taalTips().length).toBeGreaterThan(100);
  });

  it('loading twice is one load', async () => {
    await Promise.all([loadTips(), loadTips()]);
    expect(tipsLoaded()).toBe(true);
  });
});
