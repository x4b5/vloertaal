import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

/**
 * Large text, zoom and reflow (WCAG 2.2 AA: 1.4.4 resize text, 1.4.10 reflow, 1.3.4 orientation).
 * Checked in Chromium at 360x640 with the app's own "Tekstgrootte: extra groot", at 320 px wide,
 * with 200% root text, with the 1.4.12 text spacing and in landscape (640x360): nothing is cut
 * off and nothing scrolls sideways. What keeps it so is pinned here.
 */

const css = readFileSync('src/styles.css', 'utf8');
/** The declarations of the first rule whose selector is exactly `sel`. */
const rule = (sel: string): string => {
  const at = css.indexOf(`\n${sel} {`);
  expect(at, `rule ${sel}`).toBeGreaterThanOrEqual(0);
  return css.slice(css.indexOf('{', at) + 1, css.indexOf('}', at));
};

describe('pinch zoom and turning the phone stay possible', () => {
  const viewports = [
    readFileSync('index.html', 'utf8'),
    ...readdirSync('src/lib').filter((f) => f.endsWith('.ts')).map((f) => readFileSync(join('src/lib', f), 'utf8')),
  ].flatMap((t) => [...t.matchAll(/<meta name="viewport" content="([^"]*)"/g)].map((m) => m[1]));

  it('no viewport meta blocks zooming', () => {
    expect(viewports.length).toBeGreaterThan(0);
    for (const v of viewports) {
      expect(v).toContain('width=device-width');
      expect(v).not.toMatch(/maximum-scale|minimum-scale|user-scalable/);
    }
  });

  it('the installed app is not locked to portrait', () => {
    const manifest = JSON.parse(readFileSync('public/manifest.webmanifest', 'utf8'));
    expect(manifest.orientation ?? 'any').toBe('any');
  });

  it('the browser may not shrink or blow up text on its own, the text size stays the learner’s', () => {
    expect(css).toMatch(/-webkit-text-size-adjust: 100%/);
  });
});

describe('Tekstgrootte: all text grows with it', () => {
  it('large and extra large scale the root (rem) and the body (em) text', () => {
    expect(css).toContain(":root[data-text='large'] { font-size: 112.5%;");
    expect(css).toContain(":root[data-text='xl'] { font-size: 125%;");
    expect(css).toContain(":root[data-text='xl'] body { font-size: 22.5px; }");
  });

  it('the exercise kind in the help language ("Znaczenie") grows with the help-language minimum', () => {
    // It was 15px fixed: at extra large it stayed the smallest text on the screen.
    expect(rule('.tag-help')).toMatch(/font-size: var\(--help-min\)/);
    expect(css).toMatch(/\.tag-help:is\(\[lang='ti'\], \[lang='ar'\], \[lang='fa'\], \[lang='prs'\]\) \{ font-size: calc\(var\(--help-min\) \* 1\.1\); \}/);
    expect(css).toMatch(/\.tag-help \{[^}]*overflow-wrap: anywhere/);
  });
});

describe('reflow at 320 px and text spacing: nothing runs off the side or is cut off', () => {
  it('a word that fits no line breaks, at every text size (headings, text, list items, buttons)', () => {
    expect(css).toMatch(/\n:is\(h1, h2, h3, p, li, button, label\) \{ overflow-wrap: break-word; \}/);
  });

  it('the settings rows stay as wide as the screen; below 360 px the value goes under the name, not "Automatyczn…"', () => {
    expect(rule('.set-rows')).toContain('grid-template-columns: minmax(0, 1fr)');
    const narrow = css.slice(css.indexOf('@media (max-width: 359px) {\n  .set-row {'));
    expect(narrow.length).toBeLessThan(css.length);
    const block = narrow.slice(0, narrow.indexOf('\n}\n'));
    expect(block).toMatch(/\.set-row-value \{[^}]*grid-row: 2;[^}]*white-space: normal; overflow: visible; text-overflow: clip;/);
    expect(block).toMatch(/\.set-row \{ display: grid;/);
  });

  it('the language list tile grows with its letters instead of cutting them (no fixed box)', () => {
    for (const sel of ['.lang-sample', '.lang-mark']) {
      const r = rule(sel);
      expect(r).toMatch(/min-width: 34px/);
      expect(r).not.toMatch(/(^|[\s;])(width|height): \d/);
      expect(r).not.toContain('overflow: hidden');
    }
  });
});
