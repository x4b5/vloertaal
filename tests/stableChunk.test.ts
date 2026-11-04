import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { STABLE_CHUNK } from '../vite.config';

/*
 * React and the picture kit sit in a file of their own that keeps its name from one deploy to the
 * next (assets/vendor-*.js, vite.config.ts STABLE_CHUNK), so a phone does not download them again
 * after each deploy. The build takes along everything such a file imports: the kit must import no
 * app code, or the app would land in that file and it would change with every deploy again.
 */
describe('the file that stays the same between deploys', () => {
  it('holds React and the picture kit, and no app code', () => {
    for (const id of [
      '/app/node_modules/react/cjs/react.production.js',
      '/app/node_modules/react/jsx-runtime.js',
      '/app/node_modules/react-dom/cjs/react-dom-client.production.js',
      '/app/node_modules/scheduler/cjs/scheduler.production.js',
      'C:\\app\\node_modules\\react-dom\\client.js',
      '/app/src/pictures/kit.tsx',
    ]) expect(STABLE_CHUNK.test(id), id).toBe(true);
    for (const id of ['/app/src/pictures/bust.tsx', '/app/src/pictures/index.ts', '/app/src/components/Characters.tsx', '/app/src/App.tsx', '/app/node_modules/react-something/index.js'])
      expect(STABLE_CHUNK.test(id), id).toBe(false);
  });

  it('the picture kit imports React only (types aside): the cast\'s head is in bust.tsx', () => {
    const kit = readFileSync('src/pictures/kit.tsx', 'utf8');
    const values = [...kit.matchAll(/^import (?!type )[^;]*?from '([^']+)';/gm)].map((m) => m[1]);
    expect(values).toEqual(['react']);
    expect(kit).not.toMatch(/\bCastHead\b/);
    expect(readFileSync('src/pictures/bust.tsx', 'utf8')).toContain('export function Bust(');
  });
});
