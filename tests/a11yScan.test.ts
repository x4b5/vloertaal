import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { Wordmark } from '../src/components/Logo';

/**
 * The colour tokens on :root in src/styles.css, light and dark: every text colour on the
 * backgrounds it is really used on reaches 4.5:1, icons and control edges 3:1 (WCAG 1.4.3, 1.4.11).
 * The pairs come from the a11y scan (axe color-contrast and the icon check).
 */
const css = readFileSync(resolve(__dirname, '../src/styles.css'), 'utf8');

function block(start: string): string {
  const i = css.indexOf(start);
  if (i < 0) throw new Error(`no block ${start}`);
  let depth = 0;
  for (let j = css.indexOf('{', i); j < css.length; j++) {
    if (css[j] === '{') depth++;
    else if (css[j] === '}' && --depth === 0) return css.slice(css.indexOf('{', i) + 1, j);
  }
  throw new Error('unclosed');
}
function tokens(body: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const m of body.matchAll(/--([\w-]+):\s*([^;]+);/g)) out[m[1]] = m[2].replace(/\/\*.*?\*\//g, '').trim();
  return out;
}
const light = tokens(block(':root {'));
const darkMedia = tokens(block(":root:not([data-theme='light']) {"));
const darkAttr = tokens(block(":root[data-theme='dark'] {"));
const dark = { ...light, ...darkAttr };

function value(t: Record<string, string>, name: string, seen = 0): string {
  const v = t[name];
  if (!v || seen > 10) throw new Error(`token --${name}`);
  const m = /^var\(--([\w-]+)\)$/.exec(v);
  return m ? value(t, m[1], seen + 1) : v;
}
function lum(hex: string): number {
  const h = hex.replace('#', '');
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  const f = (c: number) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}
function ratio(t: Record<string, string>, fg: string, bg: string): number {
  const [a, b] = [lum(value(t, fg)), lum(value(t, bg))].sort((x, y) => y - x);
  return (a + 0.05) / (b + 0.05);
}

// [text or icon token, background token, minimum]
const PAIRS: [string, string, number][] = [
  ['ink', 'bg', 4.5], ['ink', 'card', 4.5],
  ['muted', 'bg', 4.5], ['muted', 'card', 4.5], ['muted', 'track', 4.5], ['muted', 'tag-bg', 4.5],
  ['faint', 'bg', 4.5], ['faint', 'card', 4.5],
  ['ink-3', 'track', 3], ['ink-3', 'tag-bg', 3],
  ['tag-ink', 'tag-bg', 4.5], ['warn-ink', 'warn-bg', 4.5], ['tag-ink', 'bg', 4.5], ['tag-ink', 'card', 4.5],
  ['on-solid', 'solid', 4.5], ['on-solid-mark', 'solid', 3], ['on-yellow', 'yellow', 4.5],
  ['right-ink', 'bg', 4.5], ['right-ink', 'card', 4.5], ['right-ink', 'green-bg', 4.5],
  ['wrong-ink', 'bg', 4.5], ['wrong-ink', 'card', 4.5], ['wrong-ink', 'red-bg', 4.5],
  ['blue', 'card', 3], ['on-blue', 'blue', 3],
  ['choice-edge', 'bg', 3], ['edge', 'bg', 3], ['edge', 'card', 3], ['focus', 'bg', 3],
];

describe('colour tokens', () => {
  it('the two dark blocks are the same', () => {
    expect(darkMedia).toEqual(darkAttr);
  });
  for (const [name, t] of [['light', light], ['dark', dark]] as const) {
    for (const [fg, bg, min] of PAIRS) {
      it(`${name}: --${fg} on --${bg} ≥ ${min}:1`, () => {
        expect(ratio(t, fg, bg)).toBeGreaterThanOrEqual(min);
      });
    }
  }
});

describe('the wordmark', () => {
  it('has a role, so its aria-label is a name (axe aria-prohibited-attr)', () => {
    const html = renderToStaticMarkup(createElement(Wordmark, { beta: true }));
    expect(html).toMatch(/<span class="wordmark [^"]*" role="img" aria-label="Vloertaal bèta"/);
  });
});
