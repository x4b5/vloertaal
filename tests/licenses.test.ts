import { execSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

/** The licence texts ship with the site (public/licenses.txt, scripts/licenses.mjs), 4 November 2026. */
describe('the licences of others go with the site', () => {
  const text = readFileSync('public/licenses.txt', 'utf8');

  it('is up to date with node_modules (after an update: node scripts/licenses.mjs)', () => {
    expect(() => execSync('node scripts/licenses.mjs --check', { stdio: 'pipe' })).not.toThrow();
  });

  it('has every package of the site, word for word: the MIT texts and the fonts’ OFL', () => {
    const deps = Object.keys(JSON.parse(readFileSync('package.json', 'utf8')).dependencies as Record<string, string>);
    expect(deps.sort()).toEqual(['@fontsource-variable/lexend', '@fontsource/big-shoulders-stencil-display', 'react', 'react-dom']);
    for (const pkg of [...deps, 'scheduler', 'rolldown']) {
      const file = readFileSync(`node_modules/${pkg}/LICENSE`, 'utf8').trim();
      expect(text, pkg).toContain(file);
    }
    expect(text).toContain('Vite core license');
    expect(text).toContain('SIL Open Font License, Version 1.1');
    expect(text.match(/MIT License/g)!.length).toBeGreaterThanOrEqual(3);
  });

  it('the notices point to it, and no longer to the emoji font that is gone', () => {
    const notices = readFileSync('THIRD_PARTY_NOTICES.md', 'utf8');
    expect(notices).toContain('public/licenses.txt');
    expect(notices).not.toContain('public/fonts');
    expect(existsSync('public/fonts')).toBe(false);
    expect(notices).not.toContain('Nog na te gaan');
  });
});
