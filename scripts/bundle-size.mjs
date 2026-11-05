#!/usr/bin/env node
// The size of what a phone downloads, after `npm run build` (`npm run size`, also in
// .github/workflows/deploy.yml). Fails when a part grows over its limit below, so a change that
// makes the start heavier on a cheap phone and a slow line shows up on the pull request instead
// of on the work floor. Sizes are gzip (level 9), as the server sends them.
//
//  - start file: the app's own file (assets/index-*.js), which every first screen waits for;
//  - start: everything the first screen downloads before it can draw (the start file, the files it
//    imports, the stylesheet);
//  - dist: every file of the build except the recorded sound (*.mp3, which grows with each
//    recording and is fetched per clip), so also the help languages, pictures and site pages.
//
// Raising a limit is allowed, but on purpose: say why in the pull request. The owner's request,
// 4 November 2026 (fase 3, "snel op een goedkope telefoon").
//
//   node scripts/bundle-size.mjs [dist] [--json]
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { pathToFileURL } from 'node:url';
import { gzipSync } from 'node:zlib';

/**
 * Limits in kB (1 kB = 1024 bytes), gzip. Set on 4 November 2026 about 10% above what the build was
 * then: start file 252 kB, start 367 kB (with React and the picture kit in assets/vendor-*.js, 71 kB,
 * and the stylesheet), dist 2942 kB.
 * Raised on 5 November 2026 (start file 280 → 295, start 400 → 415): the lessons and tips of the
 * course are in the start file (the path needs them), and seven new lessons came (Vervoer en
 * bezorging, Voedselverwerking, Je goed voelen, Een nieuwe collega helpen, Weer aan het werk) at
 * 283.8 / 403.0 kB. Next step instead of raising again: load the long tip texts only when a tip
 * opens (docs/fasen or EIGENAAR-TODO: "ophogen of meer lui laden").
 * dist 3300 → 3400 (also 5 November 2026): "Goed communiceren" and "Feedback en overleg" (eight
 * lessons, in 13 help languages) at 3300.5 kB. The start file stays under its limit (291.6 kB).
 */
export const LIMITS = {
  'start file': 295,
  start: 415,
  dist: 3400,
};

const gz = (buf) => gzipSync(buf, { level: 9 }).length;
const kb = (n) => (n / 1024).toFixed(1);

/** The JS files a module imports statically ("./x.js" next to it), not import(). */
export function staticImports(code) {
  const out = new Set();
  for (const m of code.matchAll(/(?:^|[;}\s])import\s*(?:[\w$*{}\s,]+?\s*from\s*)?["'](\.\/[^"']+\.js)["']/g)) out.add(m[1]);
  return [...out];
}

/** The start file, the files the first screen needs, and their gzip sizes, from a built dist. */
export function measure(dist) {
  const html = readFileSync(join(dist, 'index.html'), 'utf8');
  const entry = /<script type="module"[^>]*src="\.\/(assets\/index-[\w-]+\.js)"/.exec(html)?.[1];
  if (!entry) throw new Error(`no assets/index-*.js in ${dist}/index.html`);
  const start = new Set();
  const walk = (file) => {
    if (start.has(file)) return;
    start.add(file);
    for (const dep of staticImports(readFileSync(join(dist, file), 'utf8'))) walk(join(file, '..', dep).replace(/\\/g, '/'));
  };
  walk(entry);
  for (const m of html.matchAll(/<link rel="(?:stylesheet|modulepreload)"[^>]*href="\.\/(assets\/[^"]+)"/g)) start.add(m[1]);
  const size = (file) => gz(readFileSync(join(dist, file)));
  let all = 0;
  let audio = 0;
  const files = [];
  const visit = (dir) => {
    for (const name of readdirSync(dir)) {
      const path = join(dir, name);
      if (statSync(path).isDirectory()) visit(path);
      else if (name.endsWith('.mp3')) audio += statSync(path).size;
      else {
        const n = /\.(png|ico|woff2?|mp3)$/.test(name) ? statSync(path).size : gz(readFileSync(path));
        all += n;
        files.push([relative(dist, path).replace(/\\/g, '/'), n]);
      }
    }
  };
  visit(dist);
  return {
    entry,
    startFiles: [...start].sort(),
    sizes: { 'start file': size(entry), start: [...start].reduce((a, f) => a + size(f), 0), dist: all },
    audio,
    largest: files.sort((a, b) => b[1] - a[1]).slice(0, 12),
  };
}

const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) {
  const args = process.argv.slice(2);
  const dist = args.find((a) => !a.startsWith('--')) ?? 'dist';
  const r = measure(dist);
  if (args.includes('--json')) {
    console.log(JSON.stringify(r, null, 1));
  } else {
    console.log(`Start file: ${r.entry}`);
    console.log(`Start (${r.startFiles.length} files): ${r.startFiles.join(', ')}`);
    for (const [k, n] of Object.entries(r.sizes)) console.log(`  ${k.padEnd(10)} ${kb(n).padStart(8)} kB gz   (limit ${LIMITS[k]} kB)`);
    console.log(`  recorded sound (*.mp3, no limit) ${(r.audio / 1024 / 1024).toFixed(1)} MB`);
    console.log('Largest files (kB gz):');
    for (const [f, n] of r.largest) console.log(`  ${kb(n).padStart(8)}  ${f}`);
  }
  const over = Object.entries(r.sizes).filter(([k, n]) => n / 1024 > LIMITS[k]);
  for (const [k, n] of over) console.error(`::error title=Bundelgrootte::${k} is ${kb(n)} kB gz, meer dan de grens van ${LIMITS[k]} kB (scripts/bundle-size.mjs).`);
  process.exit(over.length ? 1 : 0);
}
