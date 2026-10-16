import { readFileSync, existsSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { allRegionUnits, ensureRegion, isRegionLoaded, regionOf, regionUnits, setRegionsOn } from '../src/content/regio';
import { ensureRegionTexts, getHelpLanguage, isRegionTextsLoaded, registerPack } from '../src/i18n';
import plPack from '../src/i18n/packs/pl';
import { ensureRegionFor, regionReady } from '../src/lib/region';
import { routeOrder } from '../src/lib/route';

/**
 * The regions' content is a file of its own (src/content/regio/<region>-pack.ts, and the region
 * texts src/i18n/regio/<lang>.ts behind src/i18n/packs/regio-<lang>.ts), loaded only while the
 * regions are on and the learner chose a region. Nothing of it is in the main bundle or in a
 * help language's file: no static import reaches it from the app's entry or from a pack.
 *
 * This file never imports the region's file itself, so it sees the app before it loads.
 */

const ROOT = resolve(__dirname, '..');
const SRC = join(ROOT, 'src');

/** The files a module imports statically (`import … from`, `import '…'`, `export … from`), not `import type` or `import()`. */
function staticImports(file: string): string[] {
  const code = readFileSync(file, 'utf8');
  const specs: string[] = [];
  const patterns = [
    /^\s*import\s+(?!type\s)[^'";]*?\sfrom\s*['"]([^'"]+)['"]/gm,
    /^\s*import\s*['"]([^'"]+)['"]/gm,
    /^\s*export\s+(?!type\s)[^'";]*?\sfrom\s*['"]([^'"]+)['"]/gm,
  ];
  for (const re of patterns) for (const m of code.matchAll(re)) specs.push(m[1]);
  return specs.filter((s) => s.startsWith('.')).flatMap((s) => {
    const base = resolve(dirname(file), s);
    const hit = ['', '.ts', '.tsx', '/index.ts', '/index.tsx'].map((ext) => base + ext).find((p) => existsSync(p) && /\.tsx?$/.test(p));
    return hit ? [hit] : [];
  });
}

/** Every source file reachable from these entries through static imports (what ends up in their chunk). */
function staticGraph(...entries: string[]): Set<string> {
  const seen = new Set<string>();
  const todo = entries.map((e) => join(ROOT, e));
  while (todo.length) {
    const file = todo.pop()!;
    if (seen.has(file)) continue;
    seen.add(file);
    todo.push(...staticImports(file));
  }
  return new Set([...seen].map((f) => relative(ROOT, f).split('\\').join('/')));
}

const REGION_CONTENT = /^src\/(content\/regio\/zuid-limburg|i18n\/regio\/|i18n\/packs\/regio-)/;
const regionFiles = (graph: Set<string>) => [...graph].filter((f) => REGION_CONTENT.test(f));

afterEach(() => setRegionsOn(null));

describe('regions: their own file, never in the main bundle', () => {
  it('the app\'s entry imports none of a region\'s content statically', () => {
    const main = staticGraph('src/main.tsx');
    // The graph is real: the registry and the app are in it.
    expect(main.has('src/App.tsx')).toBe(true);
    expect(main.has('src/content/regio/index.ts')).toBe(true);
    expect(main.has('src/content/regio/meta.ts')).toBe(true);
    expect(regionFiles(main)).toEqual([]);
  });

  it('no help language\'s file (nor the work-rules track\'s) imports the region texts or content', () => {
    for (const code of ['ar', 'bg', 'fa', 'pl', 'prs', 'ro', 'ti', 'tr', 'uk', 'nl']) {
      const pack = staticGraph(`src/i18n/packs/${code}.ts`);
      expect(regionFiles(pack), code).toEqual([]);
    }
  });

  it('the region\'s file and its texts are each loaded with import() (their own chunks)', () => {
    const registry = readFileSync(join(SRC, 'content/regio/index.ts'), 'utf8');
    expect(registry).toMatch(/import\('\.\/zuid-limburg-pack'\)/);
    const i18n = readFileSync(join(SRC, 'i18n/index.ts'), 'utf8');
    for (const code of ['ar', 'bg', 'fa', 'pl', 'prs', 'ro', 'ti', 'tr', 'uk']) expect(i18n).toContain(`import('./packs/regio-${code}')`);
    // The region's file has both units, the tips and the map.
    const pack = staticGraph('src/content/regio/zuid-limburg-pack.ts');
    expect(pack.has('src/content/regio/zuid-limburg.ts')).toBe(true);
    expect(pack.has('src/content/regio/zuid-limburg-regels.ts')).toBe(true);
    // It never imports the registry back (ensureRegion registers it): that cycle would make the
    // bundler move the registry and its neighbours into a chunk shared with the main bundle.
    expect(pack.has('src/content/regio/index.ts')).toBe(false);
  });
});

describe('regions: loading on demand', () => {
  it('while the regions are off, nothing is needed and nothing loads', async () => {
    setRegionsOn(false);
    expect(isRegionLoaded('zl')).toBe(true);
    expect(regionReady('zl', 'pl')).toBe(true);
    expect(regionReady('zl', 'pl', true)).toBe(true);
    await ensureRegionFor('zl', 'pl', true);
    expect(regionOf('zl')).toBeUndefined();
    expect(allRegionUnits()).toEqual([]);
    expect(isRegionTextsLoaded('pl')).toBe(false);
  });

  it('without its file the app works without the region: the path as it was', () => {
    setRegionsOn(true);
    expect(isRegionLoaded('zl')).toBe(false);
    expect(isRegionLoaded('none')).toBe(true);
    expect(regionUnits('zl', 'taal')).toEqual([]);
    expect(routeOrder('none', 'taal', 'zl').map((u) => u.id)).toEqual(routeOrder('none', 'taal').map((u) => u.id));
  });

  it('with the regions on and a region chosen: its file and the help language\'s region texts load', async () => {
    setRegionsOn(true);
    registerPack(plPack);
    expect(getHelpLanguage('pl')!.gloss['rg.zl.u']).toBeUndefined();
    expect(regionReady('zl', 'pl')).toBe(false);
    await ensureRegionFor('zl', 'pl');
    expect(regionReady('zl', 'pl')).toBe(true);
    expect(regionOf('zl')?.socialMap.length).toBeGreaterThan(0);
    expect(regionUnits('zl', 'taal').map((u) => u.id)).toEqual(['rg.zl.u']);
    expect(regionUnits('zl', 'regels').map((u) => u.id)).toEqual(['rg.zl.r']);
    expect(routeOrder('none', 'taal', 'zl').map((u) => u.id)).toContain('rg.zl.u');
    // Merged into the help language already loaded.
    expect(getHelpLanguage('pl')!.gloss['rg.zl.u']).toBeTruthy();
    expect(getHelpLanguage('pl')!.ui.regionTitle).toBeTruthy();
    // Loaded once: again is at once.
    await ensureRegion('zl');
    await ensureRegionTexts('pl');
    // The Dutch track and English only have no region texts to load.
    expect(isRegionTextsLoaded('nl')).toBe(true);
    expect(isRegionTextsLoaded(null)).toBe(true);
  });
});
