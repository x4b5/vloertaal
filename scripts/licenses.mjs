// Writes public/licenses.txt: the licence texts of the code and fonts of others that end up in the
// site (THIRD_PARTY_NOTICES.md), copied word for word from node_modules, so they ship with every
// build (on the site: /licenses.txt). Run it after updating one of these packages:
//   node scripts/licenses.mjs           write the file
//   node scripts/licenses.mjs --check   exit 1 when the file is not up to date (tests/licenses.test.ts)
// The owner's request, 4 November 2026: the MIT and OFL texts must go with the code and the fonts.
import { readFileSync, writeFileSync } from 'node:fs';

const OUT = 'public/licenses.txt';
const version = (pkg) => JSON.parse(readFileSync(`node_modules/${pkg}/package.json`, 'utf8')).version;
const read = (path) => readFileSync(`node_modules/${path}`, 'utf8').replace(/\s+$/, '');

/** What is in the site, and the licence file it comes with. */
export const SECTIONS = [
  {
    title: () => `react ${version('react')}, react-dom ${version('react-dom')} and scheduler ${version('scheduler')} (MIT)`,
    note: 'The same file is in node_modules/react/LICENSE, node_modules/react-dom/LICENSE and node_modules/scheduler/LICENSE.',
    text: () => read('react/LICENSE'),
    same: ['react-dom/LICENSE', 'scheduler/LICENSE'],
  },
  {
    title: () => `vite ${version('vite')} (MIT): a small piece of loading code in the site`,
    note: 'The "Vite core license" from node_modules/vite/LICENSE.md. The rest of that file is about the tools Vite itself is built with; they are not in the site.',
    text: () => read('vite/LICENSE.md').split('\n# Licenses of bundled dependencies')[0].replace(/\s+$/, ''),
  },
  {
    title: () => `rolldown ${version('rolldown')} (MIT): the small helpers that join the site's code together`,
    note: 'From node_modules/rolldown/LICENSE.',
    text: () => read('rolldown/LICENSE'),
  },
  {
    title: () => `Lexend, from @fontsource-variable/lexend ${version('@fontsource-variable/lexend')} (SIL Open Font License 1.1)`,
    note: 'From node_modules/@fontsource-variable/lexend/LICENSE.',
    text: () => read('@fontsource-variable/lexend/LICENSE'),
  },
  {
    title: () => `Big Shoulders Stencil Display, from @fontsource/big-shoulders-stencil-display ${version('@fontsource/big-shoulders-stencil-display')} (SIL Open Font License 1.1)`,
    note: 'From node_modules/@fontsource/big-shoulders-stencil-display/LICENSE. The font itself is by The Big Shoulders Project Authors (https://github.com/xotypeco/big_shoulders).',
    text: () => read('@fontsource/big-shoulders-stencil-display/LICENSE'),
  },
];

export function licensesText() {
  const line = '='.repeat(78);
  const head = [
    'Vloertaal (https://vloertaal.nl): licences of the code and fonts of others in this site.',
    'Vloertaal: de licenties van de code en de lettertypes van anderen in deze site.',
    'Uitleg: THIRD_PARTY_NOTICES.md in de broncode. Made by scripts/licenses.mjs: do not edit by hand.',
  ].join('\n');
  const parts = SECTIONS.map((s) => {
    for (const other of s.same ?? []) if (read(other) !== s.text()) throw new Error(`${other} differs from the first file`);
    return `${line}\n${s.title()}\n${s.note}\n${line}\n\n${s.text()}\n`;
  });
  return `${head}\n\n${parts.join('\n')}`;
}

if (process.argv[1]?.endsWith('licenses.mjs')) {
  const text = licensesText();
  if (process.argv.includes('--check')) {
    let now = '';
    try { now = readFileSync(OUT, 'utf8'); } catch { /* missing: not up to date */ }
    if (now !== text) {
      console.error(`${OUT} is not up to date: run node scripts/licenses.mjs`);
      process.exit(1);
    }
  } else {
    writeFileSync(OUT, text);
    console.log(`Wrote ${OUT}.`);
  }
}
