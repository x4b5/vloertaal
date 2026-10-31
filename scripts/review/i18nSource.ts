/**
 * Reads and edits the translation files in src/i18n as text (docs/nakijken.md).
 *
 * The files are object literals: `key: 'text', // comment`. A text is a string, a gendered
 * object `{ m, f, x }`, or a plural object `{ one, few, many, other }` whose forms may be gendered.
 * This reader finds every text with its exact place in the file (start and end of the string), so
 * an import only replaces the string and the comment of that entry: no other code changes.
 *
 * Status, from the comment of an entry (or the header comment of its block):
 *  - "nagekeken: pl 2026-11-03": checked by a person (written by the import);
 *  - "nalezen" ("// nieuw, nalezen", "// nieuw (30 okt 2026), nalezen"): new, not read again;
 *  - "nagelezen" ("// nagelezen AI 31 okt", "// nagelezen (2e lezing)"): read again by an AI;
 *  - nothing: ongemarkeerd (made with AI earlier, see docs/vertaalcontrole.md).
 * A part "x: nieuw, nalezen" is only about the x form.
 */

export type Status = 'nieuw, nalezen' | 'nagelezen AI' | 'ongemarkeerd' | 'nagekeken';

export const LANGS = ['ar', 'ti', 'fa', 'prs', 'uk', 'tr', 'pl', 'ro', 'bg', 'es', 'pt', 'fr', 'de'] as const;
export type Lang = (typeof LANGS)[number];
export const isLang = (x: string): x is Lang => (LANGS as readonly string[]).includes(x);

const GENDER = ['m', 'f', 'x'];
const PLURAL = ['zero', 'one', 'two', 'few', 'many', 'other'];

interface Token {
  kind: 'str' | 'comment' | 'punct' | 'word' | 'other';
  text: string;
  start: number;
  end: number;
  line: number;
  /** The decoded value of a string. */
  value?: string;
  quote?: string;
}

/** One form of a text: "" (a plain string), "m", "f", "x", "few", "few.m" … */
export interface Form {
  form: string;
  value: string;
  start: number;
  end: number;
  quote: string;
  line: number;
  /** The text is the first argument of this function (`end("…", base, 'advice')`), which adds a closing line. */
  wrapped?: string;
}

export interface Entry {
  file: string;
  lang: Lang;
  section: 'ui' | 'gloss';
  key: string;
  /** "ui.beta" for a screen text, the gloss id otherwise ("c.je.o1"). */
  id: string;
  forms: Form[];
  /** The comments inside the entry and the one at the end of its last line. */
  comments: { start: number; end: number; text: string; line: number }[];
  /** A comment line above the block the entry is in, when it says a status ("// Entree …: nieuw, nalezen."). */
  header?: string;
  line: number;
  /** Where the entry ends: after its comma, or after the value. */
  end: number;
  endLine: number;
}

function tokenize(src: string): Token[] {
  const out: Token[] = [];
  let i = 0;
  let line = 1;
  const push = (kind: Token['kind'], start: number, extra: Partial<Token> = {}) => {
    const text = src.slice(start, i);
    out.push({ kind, text, start, end: i, line, ...extra });
    line += (text.match(/\n/g) ?? []).length;
  };
  while (i < src.length) {
    const ch = src[i];
    const start = i;
    if (ch === '\n') {
      line++;
      i++;
    } else if (/\s/.test(ch)) i++;
    else if (ch === '/' && src[i + 1] === '/') {
      while (i < src.length && src[i] !== '\n') i++;
      push('comment', start);
    } else if (ch === '/' && src[i + 1] === '*') {
      const close = src.indexOf('*/', i + 2);
      i = close < 0 ? src.length : close + 2;
      push('comment', start);
    } else if (ch === "'" || ch === '"' || ch === '`') {
      i++;
      let value = '';
      while (i < src.length && src[i] !== ch) {
        if (src[i] === '\\') {
          const n = src[i + 1];
          if (n === 'n') value += '\n';
          else if (n === 't') value += '\t';
          else if (n === 'u') {
            const m = /^u\{([0-9a-fA-F]+)\}|^u([0-9a-fA-F]{4})/.exec(src.slice(i + 1));
            if (m) {
              value += String.fromCodePoint(parseInt(m[1] ?? m[2], 16));
              i += m[0].length - 1;
            }
          } else if (n !== '\n') value += n;
          i += 2;
        } else value += src[i++];
      }
      i++;
      push('str', start, { value, quote: ch });
    } else if (/[\w$]/.test(ch)) {
      while (i < src.length && /[\w$]/.test(src[i])) i++;
      push('word', start);
    } else if ('{}[]():,;=.'.includes(ch)) {
      i++;
      push('punct', start);
    } else {
      i++;
      push('other', start);
    }
  }
  return out;
}

const hasStatus = (text: string) => /\bnalezen\b|\bnagelezen\b|nagekeken:/.test(text);

/** Every text in one translation file. `fileLang` is the language of a one-language file (its name), or null. */
export function scanSource(file: string, src: string, fileLang: Lang | null): Entry[] {
  const toks = tokenize(src);
  const code = toks.filter((t) => t.kind !== 'comment');
  const entries: Entry[] = [];
  // Which language each part of the file is in: `export const pl: Gloss = {` … its closing brace.
  let lang: Lang | null = fileLang;
  let langDepth = -1;
  let depth = 0;
  let ci = 0; // index in `code`

  /** The comments between two offsets (binary search in the comments, which are in order). */
  const comments = toks.filter((t) => t.kind === 'comment');
  const commentsBetween = (from: number, to: number) => {
    let lo = 0;
    let hi = comments.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (comments[mid].start < from) lo = mid + 1;
      else hi = mid;
    }
    const out: Token[] = [];
    for (let i = lo; i < comments.length && comments[i].end <= to; i++) out.push(comments[i]);
    return out;
  };
  const lineEndAfter = (offset: number) => {
    const nl = src.indexOf('\n', offset);
    return nl < 0 ? src.length : nl;
  };

  /** Parses a value of a text: a string, or an object of forms. Returns its forms, or null if it is not a text. */
  const parseValue = (prefix: string): Form[] | null => {
    const t = code[ci];
    if (t.kind === 'str' && t.quote !== '`') {
      ci++;
      return [{ form: prefix, value: t.value!, start: t.start, end: t.end, quote: t.quote!, line: t.line }];
    }
    // end("body", base, 'advice'): a text that the code finishes (the closing line of a tip). The
    // first argument is the text; the rest stays as it is.
    if (t.kind === 'word' && code[ci + 1]?.text === '(' && code[ci + 2]?.kind === 'str') {
      ci += 2;
      const inner = parseValue(prefix);
      if (!inner) return null;
      let d = 1;
      while (ci < code.length && d > 0) {
        if (code[ci].text === '(') d++;
        if (code[ci].text === ')') d--;
        ci++;
      }
      return inner.map((f) => ({ ...f, wrapped: t.text }));
    }
    if (t.text !== '{') return null;
    ci++;
    const forms: Form[] = [];
    while (code[ci] && code[ci].text !== '}') {
      const k = code[ci];
      if (code[ci + 1]?.text !== ':' || (k.kind !== 'word' && k.kind !== 'str')) return null;
      const name = k.kind === 'str' ? k.value! : k.text;
      if (!GENDER.includes(name) && !PLURAL.includes(name)) return null;
      ci += 2;
      const inner = parseValue(prefix ? `${prefix}.${name}` : name);
      if (!inner) return null;
      forms.push(...inner);
      if (code[ci]?.text === ',') ci++;
    }
    ci++; // }
    return forms;
  };

  /** Skips one value that is not a text, up to the comma or the closing brace at its own depth. */
  const skipValue = () => {
    let d = 0;
    while (ci < code.length) {
      const x = code[ci].text;
      if (d === 0 && (x === ',' || x === '}')) return;
      if (x === '{' || x === '[' || x === '(') d++;
      if (x === '}' || x === ']' || x === ')') d--;
      ci++;
    }
  };

  /** Parses the entries of a ui or gloss object; code[ci] is just after its `{`. */
  const parseObject = (section: 'ui' | 'gloss') => {
    let header: string | undefined;
    let lastEnd = code[ci - 1].end;
    while (ci < code.length && code[ci].text !== '}') {
      const k = code[ci];
      // Comment lines between the last entry and this one: a status header, or a blank line that ends one.
      const between = src.slice(lastEnd, k.start);
      if (/\n[ \t]*\n/.test(between)) header = undefined;
      for (const c of commentsBetween(lastEnd, k.start)) {
        const ownLine = /\n[ \t]*$/.test(src.slice(Math.max(0, c.start - 200), c.start)) || c.start === 0;
        if (ownLine && hasStatus(c.text)) header = c.text;
      }
      if (k.text === '.' || k.text === '...') {
        skipValue();
      } else if ((k.kind === 'word' || k.kind === 'str') && code[ci + 1]?.text === ':') {
        const key = k.kind === 'str' ? k.value! : k.text;
        ci += 2;
        const valueStart = ci;
        const forms = parseValue('');
        if (!forms) {
          ci = valueStart;
          skipValue();
        } else if (lang) {
          let last = code[ci - 1];
          if (code[ci]?.text === ',') last = code[ci];
          const end = last.end;
          const endLine = last.line + (last.text.match(/\n/g) ?? []).length;
          const comments = commentsBetween(k.start, lineEndAfter(end)).map((c) => ({ start: c.start, end: c.end, text: c.text, line: c.line }));
          entries.push({
            file, lang, section, key,
            id: section === 'ui' ? `ui.${key}` : key,
            forms, comments, header, line: k.line, end, endLine,
          });
        }
      } else {
        skipValue();
      }
      if (code[ci]?.text === ',') ci++;
      lastEnd = code[ci - 1].end;
    }
    ci++; // }
  };

  while (ci < code.length) {
    const t = code[ci];
    // export const pl: Gloss = {   /   export const pl: CultureTranslation = {
    if (t.text === 'export' && code[ci + 1]?.text === 'const' && isLang(code[ci + 2]?.text ?? '')) {
      let j = ci + 3;
      while (j < code.length && code[j].text !== '=' && code[j].text !== ';') j++;
      if (code[j]?.text === '=' && code[j + 1]?.text === '{') {
        lang = code[ci + 2].text as Lang;
        const type = code.slice(ci + 3, j).map((x) => x.text).join('');
        ci = j + 2;
        depth++;
        langDepth = depth;
        if (type === ':Gloss') {
          parseObject('gloss');
          depth--;
          lang = fileLang;
          langDepth = -1;
        }
        continue;
      }
    }
    if ((t.text === 'ui' || t.text === 'gloss') && code[ci + 1]?.text === ':' && code[ci + 2]?.text === '{') {
      ci += 3;
      parseObject(t.text);
      continue;
    }
    if (t.text === '{') depth++;
    if (t.text === '}') {
      if (depth === langDepth) {
        lang = fileLang;
        langDepth = -1;
      }
      depth--;
    }
    ci++;
  }
  return entries;
}

/** The status of each form of an entry. */
export function formStatus(e: Entry, form: string): Status {
  const own = e.comments.map((c) => c.text).join(' ');
  const text = hasStatus(own) ? own : (e.header ?? '');
  const gender = form.split('.').pop()!;
  let checked = false;
  let fresh = false;
  let ai = false;
  for (const p of text.split('//').map((x) => x.trim())) {
    // "x: nieuw, nalezen", "x: nagekeken: pl 2026-11-03": only about the x form.
    if (/^x:/.test(p) && gender !== 'x') continue;
    if (/nagekeken:/.test(p)) checked = true;
    else if (/\bnalezen\b/.test(p)) fresh = true;
    else if (/\bnagelezen\b/.test(p)) ai = true;
  }
  return checked ? 'nagekeken' : fresh ? 'nieuw, nalezen' : ai ? 'nagelezen AI' : 'ongemarkeerd';
}

/** A string literal with this value, in this quote. */
export function literal(value: string, quote: string): string {
  const q = quote === '"' ? '"' : "'";
  return q + value.replace(/\\/g, '\\\\').replace(new RegExp(q, 'g'), `\\${q}`) + q;
}

export interface Edit {
  start: number;
  end: number;
  text: string;
}

/** Applies edits (they may not overlap) to a text. */
export function applyEdits(src: string, edits: Edit[]): string {
  let out = src;
  for (const e of [...edits].sort((a, b) => b.start - a.start)) out = out.slice(0, e.start) + e.text + out.slice(e.end);
  return out;
}

/**
 * The edits that mark an entry as checked: the status parts of its comments go ("nieuw, nalezen",
 * "nagelezen AI …"), other notes stay, and the line ends with "// nagekeken: <taal> <datum>".
 */
export function markChecked(src: string, e: Entry, mark: string): Edit[] {
  const edits: Edit[] = [];
  const lastLine = e.comments.find((c) => c.line === e.endLine);
  for (const c of e.comments) {
    const keep = c.text
      .replace(/^\/\//, '')
      .split('//')
      .map((p) => p.trim())
      .filter((p) => p && !hasStatus(p));
    if (c === lastLine) continue;
    if (!hasStatus(c.text)) continue;
    if (keep.length) edits.push({ start: c.start, end: c.end, text: `// ${keep.join(' // ')}` });
    else {
      // The whole comment goes, with the spaces before it.
      let s = c.start;
      while (s > 0 && (src[s - 1] === ' ' || src[s - 1] === '\t')) s--;
      edits.push({ start: s, end: c.end, text: '' });
    }
  }
  if (lastLine) {
    const keep = lastLine.text
      .replace(/^\/\//, '')
      .split('//')
      .map((p) => p.trim())
      .filter((p) => p && !hasStatus(p));
    edits.push({ start: lastLine.start, end: lastLine.end, text: `// ${[...keep, mark].join(' // ')}` });
  } else {
    edits.push({ start: e.end, end: e.end, text: ` // ${mark}` });
  }
  return edits;
}

/** The placeholders of a text ("{n}", "{word}"), sorted. */
export const placeholders = (s: string): string[] => [...s.matchAll(/\{\w+\}/g)].map((m) => m[0]).sort();
