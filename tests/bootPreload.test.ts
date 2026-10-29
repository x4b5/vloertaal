import { describe, expect, it } from 'vitest';
import { bootPreloadScript } from '../vite.config';

const chunk = (fileName: string, facadeModuleId: string) => ({ type: 'chunk', fileName, facadeModuleId });

describe('index.html asks for a returning learner’s files at once (vite.config.ts)', () => {
  const bundle = {
    'assets/index-a.js': chunk('assets/index-a.js', '/app/index.html'),
    'assets/pl-b.js': chunk('assets/pl-b.js', '/app/src/i18n/packs/pl.ts'),
    'assets/ar-c.js': chunk('assets/ar-c.js', '/app/src/i18n/packs/ar.ts'),
    'assets/regio-pl-d.js': chunk('assets/regio-pl-d.js', '/app/src/i18n/packs/regio-pl.ts'),
    'assets/words-e.js': chunk('assets/words-e.js', '/app/src/pictures/words.ts'),
  };
  const script = bootPreloadScript(bundle);
  const run = (saved: unknown) => {
    const links: string[] = [];
    const doc = { createElement: () => ({}) as { rel?: string; href?: string }, head: { appendChild: (l: { href: string }) => links.push(l.href) } };
    const store = { getItem: () => (saved === undefined ? null : JSON.stringify(saved)) };
    new Function('localStorage', 'document', script.replace(/^<script>|<\/script>$/g, ''))(store, doc);
    return links;
  };

  it('names this build’s language files and the pictures', () => {
    expect(script).toContain('"pl":"./assets/pl-b.js"');
    expect(script).toContain('"./assets/words-e.js"');
    expect(script).not.toContain('regio');
  });

  it('asks for the learner’s language and the pictures, and nothing for a new visitor', () => {
    expect(run({ onboarded: true, helpLang: 'pl' })).toEqual(['./assets/pl-b.js', './assets/words-e.js']);
    expect(run({ onboarded: true, helpLang: null })).toEqual(['./assets/words-e.js']);
    expect(run(undefined)).toEqual([]);
    expect(run({ onboarded: false, helpLang: 'ar' })).toEqual([]);
  });
});
