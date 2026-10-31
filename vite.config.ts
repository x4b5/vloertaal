/// <reference types="vitest/config" />
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { beLangSplit } from './scripts/beLangSplit';
import { UPCOMING, UPDATES } from './src/content/updates';
import { updatesPage } from './src/lib/updatesPage';
import { INTRO_QUESTIONS } from './src/content/intro';
import { introPage } from './src/lib/introPage';
import { hreflangLinks, LANG_PAGES, langPage } from './src/lib/langPages';
import { askPage, coachPage } from './src/lib/coachPage';
import { rulesPage, SECTOR_PAGES, sectorPage } from './src/lib/sectorPages';
import { notFoundPage, siteLinks } from './src/lib/siteLinks';
import { belgiumPage, faqScript, llmsTxt } from './src/lib/geoPages';
import { privacyPage } from './src/lib/privacyPage';
import { RULES_TOPIC_PAGES, rulesTopicPage } from './src/lib/rulesPages';
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
          (_m, a: string, href: string, b: string) => `<link rel="stylesheet"${a} href="${href}"${b} data-app-css media="print" onload="this.media='all'" onerror="this.dataset.failed='1'"><noscript><link rel="stylesheet" href="${href}"></noscript>`),
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
        // And what a returning learner's first screen needs, asked for right away (bootPreloadScript).
        return html.replace('</head>', `${links}${bootPreloadScript(ctx.bundle)}</head>`);
      },
    },
  };
}

/**
 * A returning learner's first screen waits for their help language's file and the word pictures
 * (src/main.tsx), which the app only asks for once its main file has loaded and run. A few lines
 * in index.html ask for those two right away instead, next to the main file (modulepreload), when
 * this phone's progress says which language: one wait instead of two in a row on a slow
 * connection. A new visitor gets nothing extra. The names come from this build.
 */
export function bootPreloadScript(bundle: Record<string, { type: string; fileName: string; facadeModuleId?: string | null }>): string {
  const packs: Record<string, string> = {};
  let pictures = '';
  for (const c of Object.values(bundle)) {
    if (c.type !== 'chunk' || !c.facadeModuleId) continue;
    const pack = c.facadeModuleId.match(/[\\/]src[\\/]i18n[\\/]packs[\\/]([a-z]+)\.ts$/);
    if (pack) packs[pack[1]] = `./${c.fileName}`;
    if (/[\\/]src[\\/]pictures[\\/]words\.tsx?$/.test(c.facadeModuleId)) pictures = `./${c.fileName}`;
  }
  // Also the learner's look and text size, before the first paint (src/lib/theme.ts and
  // textSize.ts again, small): a dark theme on a light phone must not flash light while the app
  // file loads. A save without a theme is from before the choice: light (src/lib/progress.ts).
  const look = `var d=document.documentElement,t=p.theme===undefined?'light':p.theme;if(t==='light'||t==='dark'){d.dataset.theme=t;document.querySelectorAll('meta[name="theme-color"]').forEach(function(m){m.setAttribute('content',t==='dark'?'#16191c':'#e7e3dc')})}if(p.textSize==='large'||p.textSize==='xl')d.dataset.text=p.textSize`;
  return `<script>try{var p=JSON.parse(localStorage.getItem('vloertaal:v1')||'null'),f=${JSON.stringify(packs)},a=function(h){if(!h)return;var l=document.createElement('link');l.rel='modulepreload';l.href=h;document.head.appendChild(l)};if(p){${look}}if(p&&p.onboarded){a(f[p.helpLang]);a(${JSON.stringify(pictures)})}}catch(e){}</script>`;
}

/** vloertaal.nl/nieuw: "Wat is er nieuw?" ("Binnenkort" first), a plain page made from src/content/updates.ts. */
function updatesPagePlugin(): Plugin {
  return {
    name: 'vloertaal-updates-page',
    apply: 'build',
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'nieuw/index.html', source: updatesPage(UPDATES, UPCOMING) });
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
 * topic (src/lib/topicPages.ts); /voor-begeleiders; /belgie and /llms.txt (src/lib/geoPages.ts);
 * a 404 page; and the sitemap that lists them all (src/lib/sitemap.ts).
 */
function langPagesPlugin(): Plugin {
  return {
    name: 'vloertaal-lang-pages',
    apply: 'build',
    generateBundle() {
      for (const p of LANG_PAGES) this.emitFile({ type: 'asset', fileName: `${p.code}/index.html`, source: langPage(p.code) });
      for (const p of SECTOR_PAGES) this.emitFile({ type: 'asset', fileName: `${p.path.slice(1)}index.html`, source: sectorPage(p.id) });
      this.emitFile({ type: 'asset', fileName: 'werkregels/index.html', source: rulesPage() });
      this.emitFile({ type: 'asset', fileName: 'belgie/index.html', source: belgiumPage() });
      this.emitFile({ type: 'asset', fileName: 'llms.txt', source: llmsTxt() });
      this.emitFile({ type: 'asset', fileName: 'privacy/index.html', source: privacyPage() });
      for (const p of RULES_TOPIC_PAGES) this.emitFile({ type: 'asset', fileName: `${p.path.slice(1)}index.html`, source: rulesTopicPage(p) });
      this.emitFile({ type: 'asset', fileName: 'voor-begeleiders/index.html', source: coachPage() });
      this.emitFile({ type: 'asset', fileName: 'meekijken/index.html', source: askPage() });
      for (const t of TOPIC_PAGES) this.emitFile({ type: 'asset', fileName: `${t.path.slice(1)}index.html`, source: topicPage(t) });
      this.emitFile({ type: 'asset', fileName: 'onderwerpen/index.html', source: topicsIndexPage() });
      this.emitFile({ type: 'asset', fileName: '404.html', source: notFoundPage() });
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap() });
    },
    // The start page names its other languages (hreflang) and links to every page, from the same lists.
    transformIndexHtml: {
      order: 'post',
      handler: (html) => html.replace('</head>', `${hreflangLinks()}\n${faqScript()}\n</head>`).replace('</body>', `${siteLinks()}\n</body>`),
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
  css: {
    lightningcss: {
      // The CSS minifier writes media queries the old way, (max-width: 380px), never (width<=380px)
      // as it would for build.cssTarget: iOS before 16.4 and Chrome before 104 skip such a query
      // whole, so every small-screen rule would be lost on a 320 px iPhone SE. 448 is Lightning
      // CSS's Features.MediaQueries (range, interval and custom media); tests/oldPhones.test.ts.
      include: 448,
    },
  },
  // `npm test`: only this checkout's tests (not the copies in .claude/worktrees), and time for the
  // tests that walk all the content on a busy machine (5 s was too tight: tests/exercises.test.ts).
  test: { exclude: ['.claude/**', 'node_modules/**', 'dist/**'], testTimeout: 15000 },
  plugins: [react(), beLangSplit(), nonBlockingCss(), lazyScreenLinks(), updatesPagePlugin(), introPagePlugin(), langPagesPlugin(), swBuild()],
  build: {
    // Old, cheap phones (Android 7–10 with an old Chrome or Samsung Internet, iPhones on iOS 13–15):
    // Vite's own default is 'baseline-widely-available' (Chrome 111, iOS 16.4), whose ?. ?? ??= and
    // class fields such a phone cannot parse: the whole app file would fail, the splash stays up.
    // Guarded by tests/oldPhones.test.ts.
    target: ['es2019', 'chrome70', 'safari13', 'ios13', 'firefox78', 'edge79'],
    // The CSS keeps Vite's own default list: for these old targets Lightning CSS would turn every
    // margin-inline, inset-inline-end … into left/right picked by :lang() (twice the file), and an
    // element with dir="rtl" but no RTL lang (src/components/Route.tsx) would then be laid out
    // left-to-right on every phone, new ones too. Old phones get fallbacks in styles.css instead.
    cssTarget: ['chrome111', 'edge111', 'firefox114', 'safari16.4', 'ios16.4'],
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
