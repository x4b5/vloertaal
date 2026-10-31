import { readdirSync, readFileSync } from 'node:fs';
import { basename, join, relative } from 'node:path';
import { isLang, scanSource, type Entry, type Lang } from './i18nSource';

/** Files in src/i18n without translations: types, the loader, the Dutch screens, the packs that only import. */
const SKIP = /(^|\/)(types|index|all|meta|nl)\.ts$|\/packs\/|^be\/(ar|ti|fa|prs|uk|tr|pl|ro|bg|es|pt|fr|de)\.ts$/;

/** The translation files under src/i18n, relative to the project ("src/i18n/work/pl.ts"). */
export function i18nFiles(root: string): string[] {
  const dir = join(root, 'src/i18n');
  const walk = (d: string): string[] =>
    readdirSync(d, { withFileTypes: true }).flatMap((f) => (f.isDirectory() ? walk(join(d, f.name)) : f.name.endsWith('.ts') ? [join(d, f.name)] : []));
  return walk(dir)
    .map((f) => relative(root, f).split('\\').join('/'))
    .filter((f) => !SKIP.test(f.slice('src/i18n/'.length)))
    .sort();
}

/** The language of a one-language file ("src/i18n/work/pl.ts" → pl), or null (src/i18n/be/units/*.ts has all). */
export const fileLang = (file: string): Lang | null => {
  const name = basename(file, '.ts');
  return isLang(name) ? name : null;
};

/** Every text of every translation file: from disk, or from `texts` (path → file content) when given. */
export function allEntries(root: string, texts?: Map<string, string>): Entry[] {
  const files = texts ? [...texts.keys()] : i18nFiles(root);
  return files.flatMap((f) => scanSource(f, texts?.get(f) ?? readFileSync(join(root, f), 'utf8'), fileLang(f)));
}
