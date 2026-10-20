import { readFileSync } from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { Splash } from '../src/components/Splash';

const count = (html: string, s: string) => html.split(s).length - 1;

describe('start screen: the four colleagues above the name', () => {
  it('draws Bram, Amina, Henk and Jada above the label, and the label holds only the name', () => {
    const html = renderToStaticMarkup(createElement(Splash, { lang: null }));
    expect(count(html, 'class="boot-cast-one"')).toBe(4);
    expect(html.indexOf('boot-cast')).toBeLessThan(html.indexOf('boot-label'));
    const label = html.slice(html.indexOf('boot-label'));
    expect(label).not.toContain('<svg');
  });

  it('has the same four in the static splash of index.html (shown before any script runs)', () => {
    const page = readFileSync('index.html', 'utf8');
    const root = page.slice(page.indexOf('<div id="root">'), page.indexOf('<script type="module"'));
    expect(count(root, 'class="boot-cast-one"')).toBe(4);
    expect(root.slice(root.indexOf('boot-label'))).not.toContain('<svg');
  });
});
