/**
 * Display helpers for Dutch words. Dutch glues words together (veiligheids|schoenen), and on a
 * 320–360 px phone such a compound in a big font is wider than its bubble. Browsers only
 * hyphenate Dutch where they ship a dictionary, so the course's long compounds get a soft
 * hyphen at their seam; anything else falls back to `overflow-wrap: anywhere` in CSS.
 * Only for showing text: speech and answer checking keep using the plain string.
 */
const SEAMS: [whole: string, at: number | number[]][] = [
  ['veiligheidsschoenen', 11],
  ['veiligheidsbril', 11],
  ['leidinggevende', 7],
  ['handschoenen', 4],
  ['goedemorgen', 5],
  ['nooduitgang', 4],
  ['werkkleding', 4],
  ['samenwerken', 5],
  ['overwerken', 4],
  ['vertrouwenspersoon', 11],
  ['arbeidsinspectie', 7],
  ['huisartsenpost', 10],
  ['discriminatie', 6],
  // Every other word of 14 letters or more in the course (tests/dutchBreak.test.ts finds new ones).
  ['houdbaarheidsdatum', 13],
  ['beschermingsmiddelen', 12],
  ['reiskostenvergoeding', [4, 10]],
  ['sollicitatiegesprek', 12],
  ['heftruckcertificaat', 8],
  ['calamiteitenverlof', 12],
  ['schoonmaakmiddelen', 10],
  ['schoonmaakmiddel', 10],
  ['identiteitsbewijs', 11],
  ['zorgverzekering', 4],
  ['belastingdienst', 9],
  ['verpleegkundige', 8],
  ['valbeveiliging', 3],
  ['ouderschapsverlof', 11],
  ['telefoonnummer', 7],
  ['werkvergunning', 4],
  ['eindafrekening', 4],
];

export const SHY = '\u00ad';

/** The long compounds that get a soft hyphen (lower case). */
export const SEAM_WORDS: readonly string[] = SEAMS.map(([whole]) => whole);

/**
 * The text with a soft hyphen in the seam(s) of every long compound it contains. Display only:
 * the letters stay the same (plain(breakable(x)) === x), and speech and answer checking keep
 * using the plain string.
 */
export function breakable(nl: string): string {
  return nl.replace(/\p{L}{10,}/gu, (token) => {
    const seam = SEAMS.find(([whole]) => whole === token.toLowerCase());
    if (!seam) return token;
    const cuts = typeof seam[1] === 'number' ? [seam[1]] : seam[1];
    let out = '';
    let from = 0;
    for (const at of cuts) { out += token.slice(from, at) + SHY; from = at; }
    return out + token.slice(from);
  });
}

/** The text without soft hyphens (what was shown, back to what is said and checked). */
export const plain = (text: string): string => text.replace(/\u00ad/g, '');

const OPEN_Q = '«„“"\'‘‹';
const CLOSE_Q = '»”“"\'’›';

/**
 * A situation's text split around the Dutch sentence quoted in it, so the Dutch is shown once
 * (with its speaker) in its own place: 'Przełożony mówi: „Morgen begin je om half negen.” O
 * której …?' gives before 'Przełożony mówi:' and after 'O której …?'. The quote marks go with
 * the Dutch (its own line marks it out). Null when the text does not quote the sentence as it is.
 */
export function splitQuote(text: string, nl: string): { before: string; after: string } | null {
  const bare = nl.replace(/[.!?…]+$/u, '');
  let at = text.indexOf(nl);
  let end = at + nl.length;
  if (at < 0) {
    at = text.indexOf(bare);
    if (at < 0 || !bare) return null;
    end = at + bare.length;
    // The translation may end the quote with other punctuation ("…negen”." or "…negen!»").
    while (end < text.length && /[.!?…]/u.test(text[end])) end++;
  }
  if (at > 0 && OPEN_Q.includes(text[at - 1])) at--;
  if (end < text.length && CLOSE_Q.includes(text[end])) end++;
  const before = text.slice(0, at).trim();
  const after = text.slice(end).replace(/^[\s.,;:،]+/u, '').trim();
  return { before, after };
}

/** Size class for a Dutch word shown big, by its longest word: len-m from 10 letters, len-l from 14. */
export function wordSize(nl: string): string {
  const longest = Math.max(...nl.split(/\s+/).map((t) => t.length));
  return longest > 13 ? 'len-l' : longest > 9 ? 'len-m' : '';
}

/**
 * A text's sentences. One ends with . ! ? (also the Arabic ؟ and the Ethiopic ። ፧ ፨) and a space,
 * and the next one does not start with a small letter, and the dot is not an abbreviation's
 * ("np. w pracy", "напр. так", "bv. een", "(np. FNV)" go on in the same sentence). A sentence
 * may also end in a bracket ("… apply.) Do not …") or, before a capital, a closing quote ("… eerst
 * …?" This …"): a quoted Dutch phrase inside a sentence ("Say «Gefeliciteerd!» to …") does not
 * end it.
 */
const SENTENCE_SPLIT = new RegExp([
  // The Ethiopic and Arabic stops always end a sentence ("… rijksoverheid.nl። cao …").
  '(?<=[؟።፧፨])\\s+',
  '(?<=[.!?…])(?<!(?:^|[^\\p{L}])(?:np|bv|vb|vs|ca|bijv|örn|напр|т\\.е|e\\.g|i\\.e|z\\.B|d\\.h)\\.)\\s+(?=\\P{Ll})',
  '(?<=[.؟።]\\))\\s+(?=\\P{Ll})',
  '(?<=[.!?…]["”’»“])\\s+(?=\\p{Lu})',
].join('|'), 'gu');

/**
 * How deep in quotation marks each place of a text is: “…”, "…", «…», „…“ and „…” (a “ after
 * „ closes it, as in Bulgarian). null when the marks do not pair up (then no place counts as
 * quoted).
 */
function quoteDepths(text: string): number[] | null {
  const open: string[] = [];
  const depth: number[] = [];
  for (const ch of text) {
    const top = open[open.length - 1];
    if (ch === '„' || ch === '«') open.push(ch);
    else if (ch === '»') { if (top !== '«') return null; open.pop(); }
    else if (ch === '“') { if (top === '„') open.pop(); else open.push(ch); }
    else if (ch === '”') { if (top !== '„' && top !== '“') return null; open.pop(); }
    else if (ch === '"') { if (top === '"') open.pop(); else open.push(ch); }
    // One entry per UTF-16 unit, so the indices match the regex's.
    for (let k = 0; k < ch.length; k++) depth.push(open.length);
  }
  return open.length ? null : depth;
}

/** A text's sentences, never split inside a quotation ("For example: «… te laat. Sorry! Groet, Ali»." is one). */
export function sentences(text: string): string[] {
  const t = text.trim();
  const depth = quoteDepths(t);
  const out: string[] = [];
  let from = 0;
  for (const m of t.matchAll(SENTENCE_SPLIT)) {
    const at = m.index ?? 0;
    if (depth && depth[at]) continue;
    out.push(t.slice(from, at));
    from = at + m[0].length;
  }
  out.push(t.slice(from));
  return out;
}
