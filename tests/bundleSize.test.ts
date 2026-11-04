import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import config, { failOnDynamicImportWarnings } from '../vite.config';
// @ts-expect-error: a plain .mjs script without types
import { LIMITS, measure, staticImports } from '../scripts/bundle-size.mjs';

/*
 * What guards the size of the app (fase 3, 4 November 2026): a dynamic import that does not split
 * fails the build, and CI checks the size of what a phone downloads (scripts/bundle-size.mjs).
 */
describe('a dynamic import that does not split', () => {
  const logs: [string, unknown][] = [];
  const handler = (level: string, log: unknown) => void logs.push([level, log]);

  it('fails the build', () => {
    const log = { code: 'INEFFECTIVE_DYNAMIC_IMPORT', message: 'src/content/updates.ts is dynamically imported by src/content/updatesLive.ts but also statically imported by src/content/regels/disclaimer.ts' };
    expect(() => failOnDynamicImportWarnings('warn', log, handler)).toThrow(/INEFFECTIVE_DYNAMIC_IMPORT/);
    expect(() => failOnDynamicImportWarnings('warn', { plugin: 'vite:dynamic-import-vars', message: 'cannot be analyzed' }, handler)).toThrow();
    expect(logs).toEqual([]);
  });

  it('lets other logs through as they were, and is the build\'s own', () => {
    failOnDynamicImportWarnings('warn', { code: 'CIRCULAR_DEPENDENCY', message: 'a -> b -> a' }, handler);
    failOnDynamicImportWarnings('info', { code: 'INEFFECTIVE_DYNAMIC_IMPORT', message: 'only info' }, handler);
    expect(logs.map(([level]) => level)).toEqual(['warn', 'info']);
    expect((config as { build: { rolldownOptions: { onLog: unknown } } }).build.rolldownOptions.onLog).toBe(failOnDynamicImportWarnings);
  });
});

describe('the size check after the build', () => {
  it('reads the files a module imports, not the ones it loads later', () => {
    expect(staticImports('import{a as t,b as n}from"./vendor-AAAA1111.js";import"./x-BBBB2222.js";const r=()=>import("./Settings-CCCC3333.js");')).toEqual(['./vendor-AAAA1111.js', './x-BBBB2222.js']);
  });

  it('counts the start (the start file, what it imports, the stylesheet) and the dist without sound', () => {
    const dist = mkdtempSync(join(tmpdir(), 'vloertaal-size-'));
    try {
      mkdirSync(join(dist, 'assets'));
      mkdirSync(join(dist, 'audio-el'));
      writeFileSync(join(dist, 'index.html'), '<script type="module" crossorigin src="./assets/index-AAAA1111.js"></script><link rel="modulepreload" href="./assets/vendor-VVVV1111.js"><link rel="stylesheet" href="./assets/index-CCCC1111.css">');
      writeFileSync(join(dist, 'assets/index-AAAA1111.js'), 'import{a}from"./vendor-VVVV1111.js";const s=()=>import("./Settings-SSSS1111.js");');
      writeFileSync(join(dist, 'assets/vendor-VVVV1111.js'), 'export const a=1;');
      writeFileSync(join(dist, 'assets/index-CCCC1111.css'), 'body{}');
      writeFileSync(join(dist, 'assets/Settings-SSSS1111.js'), 'x'.repeat(5000));
      writeFileSync(join(dist, 'audio-el/a.mp3'), Buffer.alloc(100_000));
      const r = measure(dist);
      expect(r.entry).toBe('assets/index-AAAA1111.js');
      expect(r.startFiles).toEqual(['assets/index-AAAA1111.js', 'assets/index-CCCC1111.css', 'assets/vendor-VVVV1111.js']);
      expect(r.sizes.start).toBeGreaterThan(r.sizes['start file']);
      expect(r.sizes.dist).toBeGreaterThan(r.sizes.start);
      expect(r.sizes.dist).toBeLessThan(100_000);
      expect(r.audio).toBe(100_000);
    } finally {
      rmSync(dist, { recursive: true, force: true });
    }
  });

  it('has a limit for each part, and CI runs it after the build', () => {
    expect(Object.keys(LIMITS).sort()).toEqual(['dist', 'start', 'start file']);
    const ci = readFileSync('.github/workflows/deploy.yml', 'utf8');
    expect(ci.indexOf('npm run size')).toBeGreaterThan(ci.indexOf('npm run build'));
    expect(JSON.parse(readFileSync('package.json', 'utf8')).scripts.size).toBe('node scripts/bundle-size.mjs');
  });
});
