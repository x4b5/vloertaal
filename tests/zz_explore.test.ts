import { it } from 'vitest';
import './regionLoaded';
import { helpLanguageSources } from '../src/i18n/all';
import { isPlural, PLURAL_CATEGORIES } from '../src/i18n/types';

const L = '[\\p{L}\\p{M}]';
const SLASH = new RegExp(`(?<!${L})(${L}+) ?/ ?(?=(${L}+)(?!${L}))`, 'gu');
function genderSlashes(s: string): string[] {
  const out: string[] = [];
  for (const m of s.matchAll(SLASH)) {
    const a = m[1].toLowerCase(), b = m[2].toLowerCase();
    if (a === b) continue;
    const [sh, lo] = a.length <= b.length ? [a, b] : [b, a];
    const ext = lo.startsWith(sh) && lo.length - sh.length <= 3;
    const pre = [...a].slice(0, 3).join('') === [...b].slice(0, 3).join('') && [...a].length >= 3 && [...b].length >= 3;
    if (ext || pre) out.push(`${m[1]}/${m[2]}`);
  }
  return out;
}
it('explore', () => {
  const langs = ['pl', 'uk', 'ro', 'bg', 'es', 'pt', 'fr', 'ar', 'ti'];
  for (const src of helpLanguageSources.filter((s) => langs.includes(s.code))) {
    const visit = (kind: string, k: string, t: any, inPlural = '') => {
      if (t === undefined) return;
      if (typeof t === 'string') { const g = genderSlashes(t); if (g.length) console.log(`PLAIN ${src.code} ${kind}.${k}${inPlural}: ${g.join(', ')}  | ${t.slice(0, 140)}`); return; }
      if (isPlural(t)) { for (const c of PLURAL_CATEGORIES) visit(kind, k, t[c], `[${c}]`); return; }
      if (t.x !== undefined) { const g = genderSlashes(t.x); if (g.length) console.log(`X ${src.code} ${kind}.${k}${inPlural}: ${g.join(', ')}  | ${t.x.slice(0, 140)}`); }
    };
    for (const [k, t] of Object.entries(src.ui)) visit('ui', k, t);
    for (const [k, t] of Object.entries(src.gloss)) visit('gloss', k, t);
  }
});
