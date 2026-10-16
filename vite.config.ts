import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { UPDATES } from './src/content/updates';
import { updatesPage } from './src/lib/updatesPage';

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

// Relative base so the build works on GitHub Pages or any sub-path.
export default defineConfig({
  base: './',
  // Which deploy a tester's report came from (src/lib/report.ts): the commit on Vercel, "dev" here.
  define: { 'import.meta.env.VITE_BUILD': JSON.stringify((process.env.VERCEL_GIT_COMMIT_SHA ?? 'dev').slice(0, 7)) },
  plugins: [react(), nonBlockingCss(), lazyScreenLinks(), updatesPagePlugin()],
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
