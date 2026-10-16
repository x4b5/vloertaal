import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, describe, expect, it } from 'vitest';
import { screenChunkFiles } from '../vite.config';
import { Coaches, warmScreens } from '../src/lazyScreens';
import { keepOffered } from '../src/lib/keepOffered';
import { keepOffered as milestoneKeepOffered } from '../src/components/Milestone';
import { shellUrls } from '../src/lib/offline';

/**
 * Screens a learner does not need on the first open are files of their own (src/lazyScreens.tsx),
 * so the app's main file is smaller on a slow connection; the build names them in index.html
 * (vite.config.ts) so the service worker and "Lessen bewaren" keep them for offline use.
 */

const ROOT = resolve(__dirname, '..');

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

/** Every source file reachable from the entry through static imports (what ends up in the main file). */
function staticGraph(entry: string): Set<string> {
  const seen = new Set<string>();
  const todo = [join(ROOT, entry)];
  while (todo.length) {
    const file = todo.pop()!;
    if (seen.has(file)) continue;
    seen.add(file);
    todo.push(...staticImports(file));
  }
  return new Set([...seen].map((f) => relative(ROOT, f).split('\\').join('/')));
}

const LAZY = ['Settings', 'PocketCard', 'Milestone', 'Keep', 'Coaches', 'Admin'];

describe('screens in files of their own', () => {
  it('are not in the main file: no static import reaches them from the entry', () => {
    const main = staticGraph('src/main.tsx');
    // The graph is real.
    expect(main.has('src/App.tsx')).toBe(true);
    expect(main.has('src/lazyScreens.tsx')).toBe(true);
    for (const name of LAZY) expect(main.has(`src/components/${name}.tsx`), name).toBe(false);
    // Nor what only they use.
    for (const lib of ['src/lib/pocketCanvas.ts', 'src/lib/pocket.ts', 'src/lib/keep.ts', 'src/lib/reminder.ts']) expect(main.has(lib), lib).toBe(false);
  });

  it('are loaded with import() of a src/components/ file (how the build finds them for offline use)', () => {
    const code = readFileSync(join(ROOT, 'src/lazyScreens.tsx'), 'utf8');
    const targets = [...code.matchAll(/import\('([^']+)'\)/g)].map((m) => m[1]);
    expect(targets.sort()).toEqual(['./components/Admin', './components/Coaches', './components/Milestone', './components/PocketCard', './components/Settings']);
  });

  it('render at once, without the waiting screen, once their file is here', async () => {
    await warmScreens();
    const html = renderToStaticMarkup(createElement(Coaches, { onBack: () => {} }));
    expect(html).not.toContain('screen-wait');
    expect(html).toContain('coach');
  });
});

describe('the reminder offer, asked without the Milestone file', () => {
  const g = globalThis as { localStorage?: unknown };
  const before = g.localStorage;
  afterEach(() => { g.localStorage = before; });

  it('gives the same answer as Milestone.tsx (the same key)', () => {
    const store = new Map<string, string>();
    g.localStorage = { getItem: (k: string) => store.get(k) ?? null, setItem: (k: string, v: string) => store.set(k, v) };
    expect(keepOffered()).toBe(false);
    expect(milestoneKeepOffered()).toBe(false);
    store.set('vloertaal.keepOffered', '1');
    expect(keepOffered()).toBe(true);
    expect(milestoneKeepOffered()).toBe(true);
    // Blocked storage: not offered yet, in both.
    g.localStorage = { getItem: () => { throw new Error('blocked'); } };
    expect(keepOffered()).toBe(milestoneKeepOffered());
  });
});

describe('the screens\' files in index.html (vite.config.ts)', () => {
  const chunk = (fileName: string, o: { isEntry?: boolean; isDynamicEntry?: boolean; facadeModuleId?: string | null; imports?: string[] } = {}) => ({ type: 'chunk', fileName, imports: [], ...o });

  it('lists each screen with the files only it needs, not the main file nor a help language\'s file', () => {
    const bundle = Object.fromEntries([
      chunk('assets/index-a.js', { isEntry: true, facadeModuleId: '/app/index.html', imports: ['assets/react-b.js'] }),
      chunk('assets/react-b.js'),
      chunk('assets/Settings-c.js', { isDynamicEntry: true, facadeModuleId: '/app/src/components/Settings.tsx', imports: ['assets/index-a.js', 'assets/Keep-d.js'] }),
      chunk('assets/Milestone-e.js', { isDynamicEntry: true, facadeModuleId: '/app/src/components/Milestone.tsx', imports: ['assets/Keep-d.js', 'assets/react-b.js'] }),
      chunk('assets/Keep-d.js', { imports: ['assets/index-a.js'] }),
      chunk('assets/pl-f.js', { isDynamicEntry: true, facadeModuleId: '/app/src/i18n/packs/pl.ts', imports: ['assets/index-a.js'] }),
      chunk('assets/words-g.js', { isDynamicEntry: true, facadeModuleId: '/app/src/pictures/words.tsx' }),
      { type: 'asset', fileName: 'assets/index-h.css' },
    ].map((c) => [c.fileName, c]));
    expect(screenChunkFiles(bundle)).toEqual(['assets/Keep-d.js', 'assets/Milestone-e.js', 'assets/Settings-c.js']);
  });
});

describe('"Lessen bewaren" keeps the screens\' files', () => {
  const g = globalThis as Record<string, unknown>;
  const saved = { document: g.document, location: g.location };
  afterEach(() => { g.document = saved.document; g.location = saved.location; });

  it('takes the screens\' links of index.html into the app files it saves', () => {
    const links = [
      { rel: 'stylesheet', href: 'https://vloertaal.nl/assets/index-h.css' },
      { rel: 'modulepreload', href: 'https://vloertaal.nl/assets/x-1.js' },
      { rel: 'vloertaal-screen', href: 'https://vloertaal.nl/assets/Settings-c.js' },
      { rel: 'vloertaal-screen', href: 'https://vloertaal.nl/assets/PocketCard-p.js' },
      { rel: 'prefetch', href: 'https://vloertaal.nl/assets/other-q.js' },
      { rel: 'preconnect', href: 'https://elsewhere.example/' },
    ];
    g.location = { origin: 'https://vloertaal.nl' };
    g.document = {
      baseURI: 'https://vloertaal.nl/',
      styleSheets: [],
      querySelectorAll: (sel: string) => (sel.startsWith('script') ? [{ src: 'https://vloertaal.nl/assets/index-a.js' }] : links.filter((l) => sel.includes(`[rel="${l.rel}"]`))),
    };
    const urls = shellUrls();
    expect(urls).toContain('https://vloertaal.nl/assets/index-a.js');
    expect(urls).toContain('https://vloertaal.nl/assets/Settings-c.js');
    expect(urls).toContain('https://vloertaal.nl/assets/PocketCard-p.js');
    expect(urls).not.toContain('https://elsewhere.example/');
    expect(urls).not.toContain('https://vloertaal.nl/assets/other-q.js');
  });
});

describe('the service worker keeps them with the app', () => {
  it('caches every href of the page on install (the screens\' links too)', () => {
    const sw = readFileSync(join(ROOT, 'public/sw.js'), 'utf8');
    expect(sw).toContain('(?:src|href)="([^"]+)"');
  });
});

describe('a screen file that does not load', () => {
  it('is told apart from a real bug (only a missing file shows "Try again")', async () => {
    const { isLoadError } = await import('../src/lazyScreens');
    // Chrome, Firefox and Safari wording for a missing or unreachable file.
    expect(isLoadError(new TypeError('Failed to fetch dynamically imported module: https://vloertaal.nl/assets/Settings-x.js'))).toBe(true);
    expect(isLoadError(new TypeError('error loading dynamically imported module'))).toBe(true);
    expect(isLoadError(new TypeError('Importing a module script failed.'))).toBe(true);
    // A bug in the screen itself goes on up, as before.
    expect(isLoadError(new TypeError("Cannot read properties of undefined (reading 'ui')"))).toBe(false);
    expect(isLoadError(new RangeError('Invalid time value'))).toBe(false);
  });
});
