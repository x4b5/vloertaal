/// <reference types="vitest/config" />
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig, type Plugin, type Rolldown } from 'vite';
import react from '@vitejs/plugin-react';
import { beLangSplit } from './scripts/beLangSplit';
import { UPCOMING, UPDATES } from './src/content/updates';
import { updatesPage } from './src/lib/updatesPage';
import { INTRO_QUESTIONS } from './src/content/intro';
import { introPage } from './src/lib/introPage';
import { THEME_BAR } from './src/lib/theme';
import { hreflangLinks, LANG_PAGES, langPage } from './src/lib/langPages';
import { askPage, coachPage } from './src/lib/coachPage';
import { rulesPage, SECTOR_PAGES, sectorPage } from './src/lib/sectorPages';
import { notFoundPage, siteLinks } from './src/lib/siteLinks';
import { belgiumPage, faqScript, llmsTxt } from './src/lib/geoPages';
import { privacyPage } from './src/lib/privacyPage';
import { groepPage } from './src/lib/groepPage';
import { briefjeFiles } from './src/lib/briefjePage';
import { RULES_TOPIC_PAGES, rulesTopicPage } from './src/lib/rulesPages';
import { sitemap } from './src/lib/sitemap';
import { TIP_PAGES, tipPage, tipsIndexPage } from './src/lib/tipPages';
import { TOPIC_PAGES, topicPage, topicsIndexPage } from './src/lib/topicPages';
import { packVoices } from './src/lib/voicesIndex';

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
  // textSize.ts again, small): a dark theme must not flash light while the app file loads, and a
  // new visitor on a dark phone gets light at once (light is the default, src/lib/progress.ts).
  // The saved colour (Zand = light unless the save says otherwise); before themeVersion 3 only
  // dark survives, and "follow the phone" only when chosen since light became the default.
  const look = `var d=document.documentElement,q=p||{},B=${JSON.stringify(THEME_BAR)},v=q.themeVersion===3,t=v&&q.theme==='auto'?'auto':v&&B.hasOwnProperty(q.theme)?q.theme:q.theme==='dark'?'dark':'light';if(t==='auto'){delete d.dataset.theme}else{d.dataset.theme=t;document.querySelectorAll('meta[name="theme-color"]').forEach(function(m){m.setAttribute('content',B[t])})}if(q.textSize==='large'||q.textSize==='xl')d.dataset.text=q.textSize`;
  return `<script>try{var p=JSON.parse(localStorage.getItem('vloertaal:v1')||'null'),f=${JSON.stringify(packs)},a=function(h){if(!h)return;var l=document.createElement('link');l.rel='modulepreload';l.href=h;document.head.appendChild(l)};${look};if(p&&p.onboarded){a(f[p.helpLang]);a(${JSON.stringify(pictures)})}}catch(e){}</script>`;
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
 * topic (src/lib/topicPages.ts); the workplace tips per language, /pl/tip/… (src/lib/tipPages.ts); /voor-begeleiders and its /groep (src/lib/groepPage.ts); /belgie and /llms.txt (src/lib/geoPages.ts);
 * a 404 page; and the sitemap that lists them all (src/lib/sitemap.ts).
 */
function langPagesPlugin(): Plugin {
  return {
    name: 'vloertaal-lang-pages',
    apply: 'build',
    generateBundle() {
      for (const p of LANG_PAGES) this.emitFile({ type: 'asset', fileName: `${p.code}/index.html`, source: langPage(p.code) });
      for (const p of LANG_PAGES) this.emitFile({ type: 'asset', fileName: `${p.code}/tip/index.html`, source: tipsIndexPage(p.code) });
      for (const t of TIP_PAGES) this.emitFile({ type: 'asset', fileName: `${t.path.slice(1)}index.html`, source: tipPage(t.code, t.tip) });
      for (const p of SECTOR_PAGES) this.emitFile({ type: 'asset', fileName: `${p.path.slice(1)}index.html`, source: sectorPage(p.id) });
      this.emitFile({ type: 'asset', fileName: 'werkregels/index.html', source: rulesPage() });
      this.emitFile({ type: 'asset', fileName: 'belgie/index.html', source: belgiumPage() });
      this.emitFile({ type: 'asset', fileName: 'llms.txt', source: llmsTxt() });
      this.emitFile({ type: 'asset', fileName: 'privacy/index.html', source: privacyPage() });
      for (const p of RULES_TOPIC_PAGES) this.emitFile({ type: 'asset', fileName: `${p.path.slice(1)}index.html`, source: rulesTopicPage(p) });
      this.emitFile({ type: 'asset', fileName: 'voor-begeleiders/index.html', source: coachPage() });
      this.emitFile({ type: 'asset', fileName: 'meekijken/index.html', source: askPage() });
      this.emitFile({ type: 'asset', fileName: 'groep/index.html', source: groepPage() });
      for (const f of briefjeFiles()) this.emitFile({ type: 'asset', ...f });
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
 * The recorded-voice index in its short form (src/lib/voicesIndex.ts), as assets/voices-<hash>.json:
 * a new name only when a recording changes, so a phone keeps it like the app's other files (it was
 * public/audio-el/voices.json, 107 kB gz, under the same name for every version). index.html names
 * it (`<link rel="vloertaal-voices" …>`, which the browser does not fetch by itself): the app reads
 * it from there (src/lib/audio.ts voicesIndexUrl) and the service worker keeps it with the app (every
 * href of the page). public/audio-el/voices.json stays as it is: the long form, for the scripts that
 * record the voices, the tests, and an app of before.
 */
function voicesIndexFile(): Plugin {
  let publicDir = 'public';
  return {
    name: 'vloertaal-voices-index',
    apply: 'build',
    configResolved(config) {
      publicDir = config.publicDir;
    },
    buildStart() {
      const file = resolve(publicDir, 'audio-el/voices.json');
      if (existsSync(file)) this.emitFile({ type: 'asset', name: 'voices.json', source: JSON.stringify(packVoices(JSON.parse(readFileSync(file, 'utf8')))) });
    },
    transformIndexHtml: {
      order: 'post',
      handler: (html, ctx) => {
        const file = Object.keys(ctx.bundle ?? {}).find((f) => /^assets\/voices-[\w-]+\.json$/.test(f));
        return file ? html.replace('</head>', `<link rel="vloertaal-voices" href="./${file}"></head>`) : html;
      },
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

const isCommit = (s: string | undefined): s is string => Boolean(s && /^[0-9a-f]{7,40}$/i.test(s));
/** The commit the host names in the build's environment, where it does (none is known for statichost yet; Vercel's while it still builds). */
const COMMIT_VARS = ['COMMIT_SHA', 'GIT_COMMIT', 'VERCEL_GIT_COMMIT_SHA'] as const;

/**
 * Which build this is: "Versie …" in About and in a tester's report (src/lib/report.ts). The short
 * commit hash from git (statichost builds a checkout of main, as `npm run build` here does), else a
 * commit the host gives in the environment (COMMIT_VARS), else "dev". Until 4 November 2026 only
 * Vercel's variable was read, so every build on statichost said "Versie dev".
 */
export function buildVersion(
  git: () => string = () => execFileSync('git', ['rev-parse', '--short', 'HEAD'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }),
  env: Record<string, string | undefined> = process.env,
): string {
  try {
    const hash = git().trim();
    if (isCommit(hash)) return hash.toLowerCase();
  } catch {
    // No git here (a copy without .git, or no git installed): the environment, else "dev".
  }
  const sha = COMMIT_VARS.map((k) => env[k]?.trim()).find(isCommit);
  return sha ? sha.slice(0, 7).toLowerCase() : 'dev';
}

/**
 * What goes in assets/vendor-*.js, a file of the start that stays the same from one deploy to the
 * next: React (react, react-dom, scheduler) and the picture kit (src/pictures/kit.tsx, which imports
 * no app code for this). With them in the app's own file, a phone downloaded them again after each
 * deploy (often several a day). A test (tests/stableChunk.test.ts) and two builds in a row show the
 * file keeps its name. The owner's request, 4 November 2026.
 */
export const STABLE_CHUNK = /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]|[\\/]src[\\/]pictures[\\/]kit\.tsx$/;

/**
 * A build warning about a dynamic import fails the build. Such an import that does not split (the
 * file is also imported statically somewhere: INEFFECTIVE_DYNAMIC_IMPORT) put the whole logbook back
 * in the start file for days (31 October 2026) with only a line in the build output; an import()
 * the build cannot follow (vite:dynamic-import-vars) is a file that will not load. Other logs go on
 * as before. (Vite only prints a log of level "error", so this throws.) Guarded in CI next to the
 * size limits (scripts/bundle-size.mjs). The owner's request, 4 November 2026.
 */
export const failOnDynamicImportWarnings: NonNullable<Rolldown.InputOptions['onLog']> = (level, log, handler) => {
  if (level === 'warn' && (/DYNAMIC_IMPORT/.test(log.code ?? '') || /dynamic-import/.test(log.plugin ?? '')))
    throw new Error(`${log.code ?? log.plugin}: ${log.message}\n(vite.config.ts failOnDynamicImportWarnings: a dynamic import that does not work as one fails the build.)`);
  handler(level, log);
};

// Relative base so the build works on GitHub Pages or any sub-path.
export default defineConfig({
  base: './',
  // Which build a learner and a tester's report see (buildVersion).
  // And the day it was built ("Versie 9 november 2026 · abc1234"): a coach can tell at a glance
  // whether a phone runs the newest version (feedback from a job coach, November 2026).
  define: {
    'import.meta.env.VITE_BUILD': JSON.stringify(buildVersion()),
    'import.meta.env.VITE_BUILD_DATE': JSON.stringify(new Date().toISOString().slice(0, 10)),
  },
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
  test: { exclude: ['.claude/**', 'node_modules/**', 'dist/**'], testTimeout: 15000, setupFiles: ['tests/setup.tips.ts'] },
  plugins: [react(), beLangSplit(), nonBlockingCss(), lazyScreenLinks(), voicesIndexFile(), updatesPagePlugin(), introPagePlugin(), langPagesPlugin(), swBuild()],
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
      onLog: failOnDynamicImportWarnings,
      output: {
        codeSplitting: {
          // Everything the start needs in one file (index-*.js): without this, the code shared by the
          // start and a screen loaded later (src/lazyScreens.tsx) or a help language's file would be cut
          // into many small files the start must fetch too, one more request each on a slow connection.
          // (First React and the picture kit, in their own file that does not change: STABLE_CHUNK.)
          groups: [{ name: 'vendor', test: STABLE_CHUNK, priority: 1 }, { name: 'index', tags: ['$initial'] }],
        },
      },
    },
  },
});
