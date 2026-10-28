import { createHash } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { UPDATES } from './src/content/updates';
import { updatesPage } from './src/lib/updatesPage';
import { INTRO_QUESTIONS } from './src/content/intro';
import { introPage } from './src/lib/introPage';
import { hreflangLinks, LANG_PAGES, langPage } from './src/lib/langPages';
import { coachPage } from './src/lib/coachPage';
import { rulesPage, SECTOR_PAGES, sectorPage } from './src/lib/sectorPages';
import { notFoundPage, siteLinks } from './src/lib/siteLinks';
import { sitemap } from './src/lib/sitemap';
import { TOPIC_PAGES, topicPage, topicsIndexPage } from './src/lib/topicPages';

/**
 * The app's stylesheet does not block the first paint: index.html's inline splash (logo, ink on
 * kraft) shows while it loads on a slow connection. src/main.tsx waits for it before React renders.
 */
function nonBlockingCss(): Plugin {
  return {
    name: 'vloertaal-non-blocking-css',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler: (html) =>
        html.replace(/<link rel="stylesheet"((?:(?!>)[^])*?) href="(\.\/assets\/[^"]+\.css)"([^>]*)>/g,
          (_m, a: string, href: string, b: string) => `<link rel="stylesheet"${a} href="${href}"${b} data-app-css media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="${href}"></noscript>`),
    },
  };
}

/**
 * The screens loaded when needed (src/lazyScreens.tsx: import() of a src/components/ file) are
 * named in index.html, as `<link rel="vloertaal-screen" href="…">`: a list the browser does not
 * fetch (the start stays as small as it can be; the app loads them itself when the phone is idle),
 * while the service worker keeps them with the app (public/sw.js takes every href of the page) and
 * "Lessen bewaren" saves them (src/lib/offline.ts, shellUrls). So a screen not opened yet still
 * opens offline. Each with the files only it needs; not the help languages' files (src/i18n).
 */
export function screenChunkFiles(bundle: Record<string, { type: string; fileName: string; isEntry?: boolean; isDynamicEntry?: boolean; facadeModuleId?: string | null; imports?: string[] }>): string[] {
  const chunks = Object.values(bundle).filter((c) => c.type === 'chunk');
  const walk = (file: string, into: Set<string>) => {
    if (into.has(file)) return;
    into.add(file);
    for (const dep of bundle[file]?.imports ?? []) walk(dep, into);
  };
  const main = new Set<string>();
  for (const c of chunks) if (c.isEntry) walk(c.fileName, main);
  const screens = new Set<string>();
  for (const c of chunks)
    if (c.isDynamicEntry && c.facadeModuleId && /[\\/]src[\\/]components[\\/]/.test(c.facadeModuleId)) walk(c.fileName, screens);
  return [...screens].filter((f) => !main.has(f)).sort();
}

function lazyScreenLinks(): Plugin {
  return {
    name: 'vloertaal-lazy-screen-links',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler: (html, ctx) => {
        if (!ctx.bundle) return html;
        const links = screenChunkFiles(ctx.bundle).map((f) => `<link rel="vloertaal-screen" href="./${f}">`).join('');
        return html.replace('</head>', `${links}</head>`);
      },
    },
  };
}

/** vloertaal.nl/nieuw: "Wat is er nieuw?", a plain page made from src/content/updates.ts. */
function updatesPagePlugin(): Plugin {
  return {
    name: 'vloertaal-updates-page',
    apply: 'build',
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'nieuw/index.html', source: updatesPage(UPDATES) });
    },
  };
}

/** vloertaal.nl/intro: three questions and why Vloertaal exists, made from src/content/intro.ts. */
function introPagePlugin(): Plugin {
  return {
    name: 'vloertaal-intro-page',
    apply: 'build',
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'intro/index.html', source: introPage(INTRO_QUESTIONS) });
    },
  };
}

/**
 * vloertaal.nl/pl, /ar, /uk … /en: what Vloertaal is, in each help language (src/lib/langPages.ts);
 * /bouw, /logistiek … and /werkregels in Dutch (src/lib/sectorPages.ts); /onderwerpen and a page per
 * topic (src/lib/topicPages.ts); /voor-begeleiders; a 404 page; and the sitemap that lists
 * them all (src/lib/sitemap.ts).
 */
function langPagesPlugin(): Plugin {
  return {
    name: 'vloertaal-lang-pages',
    apply: 'build',
    generateBundle() {
      for (const p of LANG_PAGES) this.emitFile({ type: 'asset', fileName: `${p.code}/index.html`, source: langPage(p.code) });
      for (const p of SECTOR_PAGES) this.emitFile({ type: 'asset', fileName: `${p.path.slice(1)}index.html`, source: sectorPage(p.id) });
      this.emitFile({ type: 'asset', fileName: 'werkregels/index.html', source: rulesPage() });
      this.emitFile({ type: 'asset', fileName: 'voor-begeleiders/index.html', source: coachPage() });
      for (const t of TOPIC_PAGES) this.emitFile({ type: 'asset', fileName: `${t.path.slice(1)}index.html`, source: topicPage(t) });
      this.emitFile({ type: 'asset', fileName: 'onderwerpen/index.html', source: topicsIndexPage() });
      this.emitFile({ type: 'asset', fileName: '404.html', source: notFoundPage() });
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap() });
    },
    // The start page names its other languages (hreflang) and links to every page, from the same lists.
    transformIndexHtml: {
      order: 'post',
      handler: (html) => html.replace('</head>', `${hreflangLinks()}\n</head>`).replace('</body>', `${siteLinks()}\n</body>`),
    },
  };
}

/**
 * The service worker of this build (public/sw.js): its BUILD (a hash of every file the build
 * writes, so the same code gives the same worker) and FILES (the hashed files under assets/). So
 * sw.js changes with each deploy that changes the app: the browser installs the new worker, which
 * keeps this build's files and removes the old build's cache.
 */
export function swSource(sw: string, files: { fileName: string; source: string | Uint8Array }[]): string {
  const hash = createHash('sha256');
  for (const f of [...files].sort((a, b) => a.fileName.localeCompare(b.fileName))) hash.update(f.fileName).update(f.source);
  const assets = files.map((f) => f.fileName).filter((f) => f.startsWith('assets/')).sort();
  return sw
    .replace(/^const BUILD = '[^']*';$/m, `const BUILD = '${hash.digest('hex').slice(0, 12)}';`)
    .replace(/^const FILES = \[\];$/m, `const FILES = ${JSON.stringify(assets.map((f) => `./${f}`))};`);
}

function swBuild(): Plugin {
  let files: { fileName: string; source: string | Uint8Array }[] = [];
  let outDir = 'dist';
  return {
    name: 'vloertaal-sw-build',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    generateBundle(_options, bundle) {
      files = Object.values(bundle).map((f) => ({ fileName: f.fileName, source: f.type === 'chunk' ? f.code : f.source }));
    },
    // After the public folder is copied: its sw.js gets this build's id and files.
    closeBundle() {
      const file = resolve(outDir, 'sw.js');
      if (existsSync(file)) writeFileSync(file, swSource(readFileSync(file, 'utf8'), files));
    },
  };
}

// Relative base so the build works on GitHub Pages or any sub-path.
export default defineConfig({
  base: './',
  // Which deploy a tester's report came from (src/lib/report.ts): the commit on Vercel, "dev" here.
  define: { 'import.meta.env.VITE_BUILD': JSON.stringify((process.env.VERCEL_GIT_COMMIT_SHA ?? 'dev').slice(0, 7)) },
  plugins: [react(), nonBlockingCss(), lazyScreenLinks(), updatesPagePlugin(), introPagePlugin(), langPagesPlugin(), swBuild()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          // Everything the start needs in one file (index-*.js): without this, the code shared by the
          // start and a screen loaded later (src/lazyScreens.tsx) or a help language's file would be cut
          // into many small files the start must fetch too, one more request each on a slow connection.
          groups: [{ name: 'index', tags: ['$initial'] }],
        },
      },
    },
  },
});
