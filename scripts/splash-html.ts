// Writes the static start screen into index.html from src/components/Splash.tsx, so the page shows
// the same thing before any script has run as React draws when it takes over:  npm run splash
import { readFileSync, writeFileSync } from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Splash } from '../src/components/Splash';

const FILE = 'index.html';
const page = readFileSync(FILE, 'utf8');
const line = /^(\s*)<main id="root">.*<\/main>$/m;
if (!line.test(page)) throw new Error('index.html: no one-line <main id="root">…</main> found.');
// lang null: no help language yet (React's first frame), so no "try again" text either.
const splash = renderToStaticMarkup(createElement(Splash, { lang: null }));
writeFileSync(FILE, page.replace(line, (_m, indent: string) => `${indent}<main id="root">${splash}</main>`));
console.log(`index.html: start screen written (${splash.length} characters).`);
