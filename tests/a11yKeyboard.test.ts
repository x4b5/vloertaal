import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it, vi } from 'vitest';
import { focusIsLost, refocusIfLost } from '../src/components/useFocusLost';

/*
 * The whole app with a keyboard only (WCAG 2.1.1, 2.4.3, 2.4.7): the focus ring is the --focus
 * token with 3:1 or more against the floor and the cards, in light and in dark; the typing field
 * has that ring too (not only a faint glow); a page that changes in place puts the focus back on
 * its heading when the button that was used is gone; a busy button keeps the focus.
 */
const css = readFileSync('src/styles.css', 'utf8');

/** The value of a token in the first block that starts with `head`. */
function token(head: string, name: string): string {
  const at = css.indexOf(head);
  expect(at).toBeGreaterThanOrEqual(0);
  const block = css.slice(at, css.indexOf('\n}', at));
  const m = new RegExp(`--${name}:\\s*([^;]+);`).exec(block);
  return m ? m[1].trim() : '';
}
/** A colour: a hex, or var(--x) resolved in the same theme (falling back to the light :root). */
function color(head: string, name: string): string {
  const v = token(head, name) || token(':root {', name);
  const ref = /^var\(--([\w-]+)\)$/.exec(v);
  return ref ? color(head, ref[1]) : v;
}
const lum = (hex: string) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a: string, b: string) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };

describe('the focus ring', () => {
  it('is drawn with the --focus token on every focus-visible element', () => {
    expect(css).toMatch(/:focus-visible \{ outline: 3px solid var\(--focus\); outline-offset: 3px; \}/);
  });

  for (const [theme, head] of [['light', ':root {'], ['dark (device)', ":root:not([data-theme='light']) {"], ['dark (picked)', ":root[data-theme='dark'] {"]] as const) {
    it(`has 3:1 or more against the floor and a card in ${theme}`, () => {
      const focus = color(head, 'focus');
      expect(focus).toMatch(/^#[0-9a-f]{6}$/i);
      for (const bg of ['bg', 'card']) expect(ratio(focus, color(head, bg)), `${theme} ${bg}`).toBeGreaterThanOrEqual(3);
    });
  }

  it('is on the typing field of a lesson too, not only its faint yellow glow', () => {
    const rule = /\.type-input:focus \{([^}]*)\}/.exec(css)?.[1] ?? '';
    expect(rule).toContain('outline: 3px solid var(--focus)');
    expect(rule).not.toContain('outline: none');
  });

  it('a busy button (aria-disabled, keeps the focus) looks like a disabled one', () => {
    expect(css).toContain(".btn:disabled, .btn[aria-disabled='true'] {");
  });
});

describe('a busy button keeps the keyboard focus', () => {
  // A disabled button drops the focus to <body>: "Bewaar als plaatje" and "Bewaar of deel" use
  // aria-disabled while the picture is drawn, and ignore a second tap themselves.
  const files = (dir: string): string[] => readdirSync(dir).flatMap((f) => { const p = join(dir, f); return statSync(p).isDirectory() ? files(p) : /\.tsx$/.test(p) ? [p] : []; });
  it('no component disables a button only because it is busy', () => {
    const bad = files('src/components').filter((p) => /disabled=\{busy\}/.test(readFileSync(p, 'utf8')));
    expect(bad).toEqual([]);
  });
});

describe('the focus when the button that was used is gone', () => {
  const fakeDoc = (active: unknown) => { const body = { tag: 'body' }; return { body, activeElement: active === 'body' ? body : active } as unknown as Document; };
  const heading = () => {
    const el = { tabIndex: 0, attrs: new Set<string>(), focus: vi.fn(), matches: (s: string) => s.includes('h1') && false, hasAttribute: (n: string) => el.attrs.has(n) };
    return el;
  };

  it('counts <body>, a removed element and a disabled button as lost; a field or a live button not', () => {
    expect(focusIsLost(fakeDoc('body'))).toBe(true);
    expect(focusIsLost(fakeDoc(null))).toBe(true);
    expect(focusIsLost(fakeDoc({ isConnected: false }))).toBe(true);
    expect(focusIsLost(fakeDoc({ isConnected: true, disabled: true }))).toBe(true);
    expect(focusIsLost(fakeDoc({ isConnected: true, disabled: false }))).toBe(false);
    expect(focusIsLost(fakeDoc({ isConnected: true }))).toBe(false);
  });

  it('puts the focus on the heading (tabindex -1, not a Tab stop) when it was lost', () => {
    const h = heading();
    const box = { querySelector: vi.fn(() => h) } as unknown as HTMLElement;
    expect(refocusIfLost(box, 'h1', fakeDoc('body'))).toBe(h);
    expect(h.tabIndex).toBe(-1);
    expect(h.focus).toHaveBeenCalledWith({ preventScroll: true });
  });

  it('leaves a focus that is still somewhere alone', () => {
    const h = heading();
    const box = { querySelector: vi.fn(() => h) } as unknown as HTMLElement;
    expect(refocusIfLost(box, 'h1', fakeDoc({ isConnected: true }))).toBeNull();
    expect(h.focus).not.toHaveBeenCalled();
  });

  it('is used where a page changes in place: the reminder pages, the certificate and its name page', () => {
    const keep = readFileSync('src/components/Keep.tsx', 'utf8');
    const cert = readFileSync('src/components/Certificate.tsx', 'utf8');
    expect(keep).toMatch(/useFocusWhenLost\(root, step, 'h1'\)/);
    expect(cert).toMatch(/useFocusWhenLost\(view, asking, 'h1'\)/);
    expect(cert).toMatch(/useFocusWhenLost\(page, 'name', '\.cert-name-head'\)/);
  });
});
