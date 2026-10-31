/**
 * The ⚖️ facts (docs/nakijken.md): every `// ⚖️ check:` note in src, for an expert per country.
 *
 * A note is a comment line with "⚖️ check:" (also "⚖️ check (31 October 2026):"), plus the comment
 * lines right under it that are not a new note. It is about the code right after it: the next
 * id there tells which lesson, step, tip or help row it is (its "anker").
 */

export type Land = 'NL' | 'BE';

export interface Fact {
  land: Land;
  spoor: string;
  /** The id the note is about, if there is one close by. */
  anker: string;
  bewering: string;
  bron: string;
  /** The sentence of the app the fact is in, when one matches the note well enough. */
  tekst: string;
  file: string;
  line: number;
  /** The texts of the code it is about (to find "tekst in de app" for another wording of the fact). */
  kandidaten: string[];
}

const NOTE = /(^|[^`])\/\/\s*⚖️\s*check\b[^:]*:\s*(.*)$/;

/** The track of a file, in plain words. */
export function spoorOf(file: string): string {
  if (/content\/regels\/(help|askWho)\.ts$/.test(file)) return 'help';
  if (/content\/regels\/disclaimer\.ts$|lib\/tipText\.ts$/.test(file)) return 'disclaimer';
  if (/content\/regels\/|regio\/[\w-]+-regels\.ts$/.test(file)) return 'Werkregels';
  if (/content\/(work|culture|sayings|curriculum)\.ts$|content\/taalBe\/|content\/regio\//.test(file)) return 'Taal';
  return 'overig';
}

const BELGIAN = /België|Belgi[aeë]|Vlaams|Vlaanderen|\bRVA\b|VDAB|\bHVW\b|OCMW|ziekenfonds|interimkantoor|justitiehuis|arbeidsarts|Unia|\bFOD\b|\b\w+\.be\b|_BE\b|'h\.be\.|\bitsme\b|preventieadviseur|mentor|loonbrief|sociaal secretariaat/;

/** NL or BE: by the path, or in a file for both (help, disclaimer, askWho) by the block or the words. */
function landOf(file: string, lines: string[], at: number, note: string, next: string): Land {
  if (/\/be\/|\/taalBe\/|tipText\.ts$/.test(file)) return 'BE';
  if (!/content\/regels\/(help|askWho|disclaimer)\.ts$/.test(file)) return 'NL';
  for (let i = at; i >= 0; i--) {
    const m = /^export const (\w+)/.exec(lines[i]);
    if (m) {
      if (/_BE\b/.test(m[1])) return 'BE';
      break;
    }
  }
  return BELGIAN.test(note) || BELGIAN.test(next) ? 'BE' : 'NL';
}

/** Brackets that name a source (a site, a law, an article, a document), not an explanation like "(rooster, taken)". */
const looksLikeSource = (g: string): boolean =>
  /\b[\w-]+\.(be|nl|eu|com|org|nu|md)\b|\bart\.|\bartikel|\b[Ww]et\b|[Ww]et[a-z]*\b|\bBW\b|\bKB\b|\bcao\b|\bStb\b|decreet|codex|Grondwet|\bSr\b|\bdoc\b|\bnr\.|richtlijn|besluit|\b(19|20)\d\d\b|opgezocht|zoekresultaat|search result/.test(g);

/** The sources of a note: what is in brackets after a ⚖️, else the last brackets. */
export function bronOf(note: string): string {
  const groups: string[] = [];
  const re = /\(/g;
  const closing = (from: number) => {
    let d = 0;
    for (let i = from; i < note.length; i++) {
      if (note[i] === '(') d++;
      if (note[i] === ')' && --d === 0) return i;
    }
    return -1;
  };
  const marked: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(note))) {
    const end = closing(m.index);
    if (end < 0) break;
    const inner = note.slice(m.index + 1, end).trim();
    groups.push(inner);
    if (/⚖️\s*$/.test(note.slice(0, m.index))) marked.push(inner);
    re.lastIndex = end + 1;
  }
  if (marked.length) return marked.join('; ');
  const sources = groups.filter(looksLikeSource);
  return sources.length ? sources[sources.length - 1] : '';
}

const words = (s: string) =>
  new Set(
    s
      .toLowerCase()
      .replace(/[^\p{L}\p{N},.%]+/gu, ' ')
      .split(' ')
      .map((w) => w.replace(/^[.,]+|[.,]+$/g, ''))
      .filter((w) => w.length >= 4 || /\d/.test(w)),
  );

/** How much two texts share: the words they have in common, a number counts double. */
export function overlap(a: string, b: string): number {
  const want = words(a);
  let score = 0;
  for (const w of words(b)) if (want.has(w)) score += /\d/.test(w) ? 2 : 1;
  return score;
}

/** The sentence among these texts that shares the most words with the note (at least 3 points: a number and a word, or three words). */
export function bestSentence(note: string, texts: string[]): string {
  let best = '';
  let bestScore = 0;
  for (const t of texts) {
    for (const s of t.split(/(?<=[.!?])\s+/)) {
      const score = overlap(note, s);
      if (score > bestScore) {
        best = s;
        bestScore = score;
      }
    }
  }
  return bestScore >= 3 ? best.trim() : '';
}

/** The string literals of a piece of code (only the longer ones: no ids, emoji or kinds). */
function strings(code: string): string[] {
  const out: string[] = [];
  for (const m of code.matchAll(/'((?:[^'\\\n]|\\.)*)'|"((?:[^"\\\n]|\\.)*)"/g)) {
    const s = (m[1] ?? m[2]).replace(/\\(.)/g, '$1');
    if (s.length >= 20 && /\s/.test(s)) out.push(s);
  }
  return out;
}

/** Every ⚖️ note of one source file. */
export function scanFacts(file: string, src: string): Fact[] {
  const lines = src.split('\n');
  const facts: Fact[] = [];
  for (let i = 0; i < lines.length; i++) {
    const m = NOTE.exec(lines[i]);
    if (!m || /^\s*\*/.test(lines[i])) continue;
    const standalone = /^\s*\/\//.test(lines[i]);
    let note = m[2].trim();
    let j = i + 1;
    if (standalone) {
      while (j < lines.length && /^\s*\/\//.test(lines[j]) && !/⚖️\s*check/.test(lines[j]) && !/^\s*\/\/\s*(Redactie|TWIJFEL|NB)\b/i.test(lines[j])) {
        note += ' ' + lines[j].replace(/^\s*\/\/\s?/, '').trim();
        j++;
      }
    }
    // The code the note is about: from here to the next note that stands after code, at most 40 lines.
    let k = standalone ? j : i;
    while (k < lines.length && /^\s*\/\//.test(lines[k])) k++;
    let stop = Math.min(lines.length, k + 40);
    for (let x = k + 1; x < stop; x++) if (NOTE.test(lines[x])) stop = x;
    const code = lines.slice(standalone ? k : i, stop).join('\n');
    // The id of the code: `id: '…'`, a Belgian tip's `slug: '…'` (be.c.<slug>), or tipFor('power', …) (c.power, src/content/work.ts).
    const slug = /\bslug: '([^']+)'/.exec(code)?.[1];
    const tipFor = /^\s*tipFor\(\s*'([^']+)'/.exec(code)?.[1];
    const id = tipFor ? `c.${tipFor}` : (/\bid: '([^']+)'/.exec(code)?.[1] ?? (slug ? `be.c.${slug}` : undefined));
    const key = /^\s*'?([\w.]+)'?: [{'"]/.exec(lines[k] ?? '')?.[1];
    // A note at the end of a line is about that line: the id is the one above it.
    let before: string | undefined;
    if (!standalone) for (let x = i; x >= Math.max(0, i - 8) && !before; x--) before = /\bid: '([^']+)'/.exec(lines[x])?.[1];
    const anker = (standalone ? (id ?? key) : (before ?? id ?? key)) ?? '';
    const nextLine = lines[k] ?? '';
    facts.push({
      land: landOf(file, lines, i, note, nextLine),
      spoor: spoorOf(file),
      anker,
      bewering: note,
      bron: bronOf(note),
      tekst: bestSentence(note, strings(code)),
      file,
      line: i + 1,
      kandidaten: strings(code),
    });
  }
  return facts;
}
