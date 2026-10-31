import { readFileSync } from 'node:fs';
import { parseAst, type Plugin } from 'vite';

/**
 * The Belgian texts per help language (vite.config.ts). Each file in src/i18n/be/units, and
 * src/i18n/be/base.ts, holds every help language at once (`export const ar…, pl…`): one file per
 * unit, so that a content agent changes only its own unit's file. Built as they are, every help
 * language's file (src/i18n/packs) would share one chunk with all 13 languages' Belgian texts
 * (1,1 MB): each learner would get them all. This plugin gives each language's own file
 * (src/i18n/be/<lang>.ts) a copy of those modules with only its own language: an import from
 * be/pl.ts of ./units/ai becomes units/ai.ts?be-lang=pl, which keeps `export const pl` and drops
 * the other languages. The source files stay as they are; tests/beLangSplit.test.ts checks it.
 */

export const BE_LANGS = ['ar', 'ti', 'fa', 'prs', 'uk', 'tr', 'pl', 'ro', 'bg', 'es', 'pt', 'fr', 'de'] as const;

const QUERY = '?be-lang=';
/** A language's own Belgian file: src/i18n/be/pl.ts (not base.ts or types.ts). */
const LANG_FILE = /[\\/]src[\\/]i18n[\\/]be[\\/]([a-z]+)\.ts$/;
/** The files with every language at once. */
const SHARED = /[\\/]src[\\/]i18n[\\/]be[\\/](?:units[\\/][^\\/]+|base)\.ts$/;

const isLang = (s: string): boolean => (BE_LANGS as readonly string[]).includes(s);

/** The help language a module is for: be/pl.ts, or a copy made for it (…?be-lang=pl). */
export function beLangOf(id: string): string | undefined {
  const q = id.indexOf(QUERY);
  if (q >= 0) return id.slice(q + QUERY.length);
  const m = id.match(LANG_FILE);
  return m && isLang(m[1]) ? m[1] : undefined;
}

/** The source of a file with every language, with only `lang`'s export (`export const pl…`) left. */
export function onlyLanguage(code: string, lang: string, file = 'be.ts'): string {
  const ast = parseAst(code, { lang: 'ts' }, file);
  const edits: [number, number, string][] = [];
  let kept = false;
  for (const node of ast.body) {
    // `import { ar as arBase, …, pl as plBase } from '../base'` (base.ts gets the same cut): only `pl as plBase`.
    if (node.type === 'ImportDeclaration' && node.importKind !== 'type' && node.specifiers.length) {
      const named = node.specifiers.map((s) => (s.type === 'ImportSpecifier' && s.imported.type === 'Identifier' ? s.imported.name : ''));
      if (!named.every(isLang) || named.length === 1) continue;
      const own = node.specifiers.filter((_s, i) => named[i] === lang);
      const what = own.map((s) => code.slice(s.start, s.end)).join(', ');
      edits.push([node.start, node.end, what ? `import { ${what} } from ${code.slice(node.source.start, node.source.end)};` : '']);
      continue;
    }
    if (node.type !== 'ExportNamedDeclaration' || node.declaration?.type !== 'VariableDeclaration') continue;
    const names = node.declaration.declarations.map((d) => (d.id.type === 'Identifier' ? d.id.name : ''));
    if (!names.every(isLang)) continue;
    if (names.includes(lang)) kept = true;
    else edits.push([node.start, node.end, '']);
  }
  if (!kept) throw new Error(`${file}: no export for ${lang}`);
  let out = code;
  for (const [s, e, text] of edits.reverse()) out = out.slice(0, s) + text + out.slice(e);
  return out;
}

export function beLangSplit(): Plugin {
  return {
    name: 'vloertaal-be-lang-split',
    apply: 'build',
    resolveId: {
      order: 'pre',
      async handler(source, importer, options) {
        const lang = importer && beLangOf(importer);
        if (!lang) return null;
        const r = await this.resolve(source, importer.split('?')[0], { ...options, skipSelf: true });
        if (!r || r.external || !SHARED.test(r.id)) return null;
        return `${r.id}${QUERY}${lang}`;
      },
    },
    load(id) {
      const q = id.indexOf(QUERY);
      if (q < 0) return null;
      const file = id.slice(0, q);
      return { code: onlyLanguage(readFileSync(file, 'utf8'), id.slice(q + QUERY.length), file), moduleType: 'ts' };
    },
  };
}
