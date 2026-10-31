import { readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { i18nFiles } from './files';

/** The translation files, path → content. */
export const i18nSources = (root: string): Map<string, string> => new Map(i18nFiles(root).map((f) => [f, readFileSync(join(root, f), 'utf8')]));

/** The source files with ⚖️ notes (everything in src but the translations), path → content. */
export function contentSources(root: string): Map<string, string> {
  const walk = (d: string): string[] =>
    readdirSync(d, { withFileTypes: true }).flatMap((f) => (f.isDirectory() ? walk(join(d, f.name)) : /\.tsx?$/.test(f.name) ? [join(d, f.name)] : []));
  return new Map(
    walk(join(root, 'src'))
      .map((f) => relative(root, f).split('\\').join('/'))
      .filter((f) => !f.startsWith('src/i18n/'))
      .sort()
      .map((f) => [f, readFileSync(join(root, f), 'utf8')]),
  );
}
