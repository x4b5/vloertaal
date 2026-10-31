import { readdirSync, readFileSync } from 'node:fs';
import { build, type Rolldown } from 'vite';
import { describe, expect, it } from 'vitest';
import { beLangOf, beLangSplit, BE_LANGS, onlyLanguage } from '../scripts/beLangSplit';

/**
 * The Belgian texts per help language (scripts/beLangSplit.ts, in vite.config.ts): each language's
 * file gets only its own Belgian texts, never a chunk with all 13 languages (it was 1,1 MB, for
 * every learner). The source files keep every language at once.
 */

const BE = 'src/i18n/be';
const shared = [...readdirSync(`${BE}/units`).map((f) => `${BE}/units/${f}`), `${BE}/base.ts`];

/** A bundle of src/i18n/be/<lang>.ts, built with the plugin, as CommonJS: its default export (the texts) and its code. */
async function built(langs: string[]) {
  const out = (await build({
    configFile: false,
    logLevel: 'silent',
    plugins: [beLangSplit()],
    build: {
      write: false,
      minify: false,
      copyPublicDir: false,
      rolldownOptions: { preserveEntrySignatures: 'strict', input: Object.fromEntries(langs.map((l) => [l, `${BE}/${l}.ts`])), output: { format: 'cjs', entryFileNames: '[name].js', chunkFileNames: '[name].js' } },
    },
  })) as Rolldown.RolldownOutput;
  return out.output.filter((o): o is Rolldown.OutputChunk => o.type === 'chunk');
}
const run = (code: string): unknown => {
  const mod = { exports: {} as Record<string, unknown> };
  new Function('module', 'exports', 'require', code)(mod, mod.exports, () => ({}));
  // A file with only a default export becomes `module.exports = texts`.
  const e = mod.exports as { default?: unknown };
  return e.default ?? e;
};

describe('the Belgian texts per help language (scripts/beLangSplit.ts)', () => {
  it('keeps one language of a file with every language', () => {
    for (const file of shared) {
      const src = readFileSync(file, 'utf8');
      for (const lang of BE_LANGS) {
        const out = onlyLanguage(src, lang, file);
        expect(out, `${file} ${lang}`).toMatch(new RegExp(`^export const ${lang}\\b`, 'm'));
        for (const other of BE_LANGS) if (other !== lang) expect(out, `${file} ${lang}`).not.toMatch(new RegExp(`^export const ${other}\\b`, 'm'));
      }
    }
  });

  it('knows which language a module is for', () => {
    expect(beLangOf('/app/src/i18n/be/pl.ts')).toBe('pl');
    expect(beLangOf('/app/src/i18n/be/units/ai.ts?be-lang=ar')).toBe('ar');
    expect(beLangOf('/app/src/i18n/be/base.ts')).toBeUndefined();
    expect(beLangOf('/app/src/i18n/be/types.ts')).toBeUndefined();
    expect(beLangOf('/app/src/i18n/pl.ts')).toBeUndefined();
  });

  it('builds each language on its own, with the same texts as the source', async () => {
    const chunks = await built(['pl', 'ar']);
    // No chunk shared by the two: each file has its own Belgian texts.
    expect(chunks.map((c) => c.fileName).sort()).toEqual(['ar.js', 'pl.js']);
    for (const lang of ['pl', 'ar']) {
      const chunk = chunks.find((c) => c.fileName === `${lang}.js`)!;
      const want = (await import(`../src/i18n/be/${lang}.ts`)).default;
      expect(run(chunk.code)).toEqual(want);
    }
    const pl = chunks.find((c) => c.fileName === 'pl.js')!.code;
    // Not a word of Arabic (or Ukrainian) in the Polish file.
    expect(pl).not.toMatch(/[؀-ۿ]/);
    expect(pl).not.toMatch(/[Ѐ-ӿ]/);
  });
});
