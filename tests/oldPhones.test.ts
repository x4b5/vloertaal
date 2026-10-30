import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { transform } from 'lightningcss';
import config from '../vite.config';
import { sentences } from '../src/lib/dutch';
import { hasDigitNumber, sayEuro, sayNumbers, sayTime } from '../src/lib/sayNumbers';
import { allMatches } from '../src/lib/matches';

/**
 * Old, cheap phones: Android 7–10 with an old Chrome or Samsung Internet, iPhones on iOS 13–15.
 * What would stop the app there, kept out of src/.
 */

const files = (dir: string): string[] =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? files(p) : /\.(ts|tsx|js|mjs)$/.test(f) ? [p] : [];
  });
const SRC = files('src').map((p) => ({ p, text: readFileSync(p, 'utf8') }));

describe('no syntax or API in src/ that an old phone lacks', () => {
  it('has no regex lookbehind (iOS before 16.4 cannot make one: the whole app file would fail)', () => {
    // In a literal or a string for new RegExp(): a lookbehind is never made when the file loads.
    const found = SRC.filter(({ text }) => /\(\?<[=!]/.test(text)).map(({ p }) => p);
    expect(found).toEqual([]);
  });

  it('uses none of the newer methods that throw there', () => {
    const NEWER: [RegExp, string][] = [
      [/\.matchAll\(/, 'matchAll (Chrome 73): src/lib/matches.ts allMatches'],
      [/\.replaceChildren\(/, 'replaceChildren (Chrome 86, iOS 14)'],
      [/\(globalThis\b|\bglobalThis\./, 'globalThis (Chrome 71)'],
      [/\.replaceAll\(/, 'replaceAll (Chrome 85, iOS 13.1)'],
      [/\bstructuredClone\(/, 'structuredClone (Chrome 98, iOS 15.4)'],
      [/\bObject\.hasOwn\(/, 'Object.hasOwn (Chrome 93, iOS 15.4)'],
      [/\.findLast(Index)?\(/, 'findLast (Chrome 97, iOS 15.4)'],
      [/\.(toSorted|toReversed|toSpliced)\(/, 'toSorted … (Chrome 110, iOS 16)'],
      [/\b(Object|Map)\.groupBy\(/, 'groupBy (Chrome 117, iOS 17.4)'],
      [/\bPromise\.(any|withResolvers)\(/, 'Promise.any (Chrome 85, iOS 14) / withResolvers'],
      [/\bcrypto\.randomUUID\(/, 'randomUUID (Chrome 92, iOS 15.4)'],
      [/\bnew Intl\.(Segmenter|ListFormat|DisplayNames)\(/, 'Intl.Segmenter/ListFormat/DisplayNames (iOS 14+)'],
    ];
    const found: string[] = [];
    // vite.config's pages (topicPages, coachPage …) are made by Node at build time: not on a phone.
    const BUILD_ONLY = /src[\\/]lib[\\/](topicPages|coachPage|langPages|sectorPages|sitemap|siteLinks|introPage|updatesPage|plainPage|pageTexts|linkRows)\.ts$/;
    for (const { p, text } of SRC) {
      if (BUILD_ONLY.test(p)) continue;
      for (const [re, what] of NEWER) if (re.test(text)) found.push(`${p}: ${what}`);
    }
    expect(found).toEqual([]);
  });

  it('builds the JavaScript for old phones, and keeps media queries in the old form', () => {
    const target = config.build?.target as string[];
    for (const t of ['es2019', 'chrome70', 'safari13']) expect(target).toContain(t);
    // The minifier with the config's options: (max-width: 380px), never (width<=380px).
    const css = '@media (max-width: 380px) { a { color: red } } @media (min-width: 301px) and (max-width: 400px) { b { color: red } }';
    const v = (s: string) => s.split('.').map(Number).reduce((a, n, i) => a + (n << (16 - 8 * i)), 0);
    const targets = Object.fromEntries((config.build?.cssTarget as string[]).map((t) => { const [, name, ver] = t.match(/^([a-z]+)([\d.]+)$/)!; return [name === 'ios' ? 'ios_saf' : name, v(ver)]; }));
    const out = transform({ ...config.css?.lightningcss, filename: 'a.css', code: Buffer.from(css), minify: true, targets }).code.toString();
    expect(out).toContain('max-width:380px');
    expect(out).toContain('min-width:301px');
    expect(out).not.toMatch(/width\s*[<>]=?/);
  });

  it('gives the color-mix() and inset rules a plain fallback for old phones', () => {
    const styles = readFileSync('src/styles.css', 'utf8');
    expect(styles).toContain('@supports not (color: color-mix(in srgb, red 50%, blue))');
    expect(styles).toContain('@supports not (inset: 0)');
  });
});

describe('allMatches gives what matchAll gives', () => {
  it('for a global regex, an empty match and a regex without g', () => {
    const t = 'a1 b22 c333';
    for (const re of [/\d+/g, /\d*/g, /[a-z](\d)/g, /\d+/]) {
      const g = new RegExp(re.source, re.flags.includes('g') ? re.flags : `${re.flags}g`);
      expect(allMatches(t, re).map((m) => [m.index, ...m])).toEqual([...t.matchAll(g)].map((m) => [m.index, ...m]));
    }
  });
});

/* --- The regexes as they were, with lookbehind (Node has it): the new code must do the same. --- */

const OLD_TIME = /(?<![\d.,:])([01]?\d|2[0-3])[.:]([0-5]\d)(?!\d)(?![.,:]\d)(\s+uur\b)?/g;
const OLD_NUM = String.raw`(\d{1,3}(?:\.\d{3})+|\d+)(?:,(\d{1,2}))?`;
const OLD_EURO_BEFORE = new RegExp(String.raw`€\s?${OLD_NUM}(?![\d,])`, 'g');
const OLD_EURO_AFTER = new RegExp(String.raw`(?<![\d.,])${OLD_NUM}\s?euro\b`, 'g');
const OLD_RULES: [RegExp, string][] = [
  [/\s*×\s*/g, ' keer '], [/\s*−\s*(?=\d)/g, ' min '], [/(?<=\d)\s*\+\s*(?=\d)/g, ' plus '], [/(?<=\d)\s*=\s*(?=\d)/g, ' is '],
  [/(?<=\d)\s?ml\b/g, ' milliliter'], [/(?<=\d)\s?kg\b/g, ' kilo'], [/(?<=\d)\s?cm\b/g, ' centimeter'],
];
const OLD_DIGITS = /(?<![\d.,-])112(?![\d,]|\.\d|\s?euro\b)/g;
function oldSayNumbers(text: string): string {
  let out = text
    .replace(OLD_TIME, (_m, h: string, m: string) => sayTime(Number(h), Number(m)))
    .replace(OLD_EURO_BEFORE, (_m, whole: string, cents?: string) => sayEuro(whole, cents))
    .replace(OLD_EURO_AFTER, (_m, whole: string, cents?: string) => sayEuro(whole, cents));
  for (const [re, word] of OLD_RULES) out = out.replace(re, word);
  return out.replace(OLD_DIGITS, 'één één twee').replace(/ {2,}/g, ' ');
}

const OLD_SENTENCE_SPLIT = new RegExp([
  '(?<=[؟።፧፨])\\s+',
  '(?<=[.!?…])(?<!(?:^|[^\\p{L}])(?:np|bv|vb|vs|ca|bijv|örn|напр|т\\.е|e\\.g|i\\.e|z\\.B|d\\.h)\\.)\\s+(?=\\P{Ll})',
  '(?<=[.؟።]\\))\\s+(?=\\P{Ll})',
  '(?<=[.!?…]["”’»“])\\s+(?=\\p{Lu})',
].join('|'), 'gu');
function oldQuoteDepths(text: string): number[] | null {
  const open: string[] = [];
  const depth: number[] = [];
  for (const ch of text) {
    const top = open[open.length - 1];
    if (ch === '„' || ch === '«') open.push(ch);
    else if (ch === '»') { if (top !== '«') return null; open.pop(); }
    else if (ch === '“') { if (top === '„') open.pop(); else open.push(ch); }
    else if (ch === '”') { if (top !== '„' && top !== '“') return null; open.pop(); }
    else if (ch === '"') { if (top === '"') open.pop(); else open.push(ch); }
    for (let k = 0; k < ch.length; k++) depth.push(open.length);
  }
  return open.length ? null : depth;
}
function oldSentences(text: string): string[] {
  const t = text.trim();
  const depth = oldQuoteDepths(t);
  const out: string[] = [];
  let from = 0;
  for (const m of t.matchAll(OLD_SENTENCE_SPLIT)) {
    const at = m.index ?? 0;
    if (depth && depth[at]) continue;
    out.push(t.slice(from, at));
    from = at + m[0].length;
  }
  out.push(t.slice(from));
  return out;
}

/** Every string in the course and the help languages' files: the texts these rules really get. */
const CORPUS = (() => {
  const out = new Set<string>();
  for (const { p, text } of SRC) {
    if (!/src[\\/](content|i18n)[\\/]/.test(p)) continue;
    for (const m of text.matchAll(/'((?:[^'\\\n]|\\.){12,})'|`((?:[^`\\$]|\\.){12,})`|"((?:[^"\\\n]|\\.){12,})"/g)) {
      out.add((m[1] ?? m[2] ?? m[3]).replace(/\\n/g, '\n').replace(/\\(['"`\\])/g, '$1'));
    }
  }
  return [...out];
})();

const EDGE_TEXTS = [
  'Bel 112! Of 0112-34, of € 112, 112 euro, 1.112, -112 en x112.', '7.30-8.00 uur', '1.23.45', '12:30:00', ',7.30', 'a7.30 uur',
  '1+2+3=6', '1 + 2 = 3', 'x+2', '5kg en 10 kg, 2ml, 3 cm, kcm', '6,60 euro, 1.000 euro, ,5 euro, .5 euro, 12.000euro', '€7,50 en €  7',
  'Hallo.  wat nu? Ja.   Nee', 'np. w pracy. Dobrze.', 'Zie bv. een. En (np. FNV) dan.', 'Dit is goed.) Daarna.', 'Hij zei: “Kom.” Dan ging hij.',
  'Ze zei «Gefeliciteerd!» tegen hem. Echt.', 'ሰላም። ሰላም፧ እሺ', 'هل أنت بخير؟ نعم', '„Kom.“ Ja.', 'e.g. this. i.e. that. Z.B. so.',
  'Klaar…  Nu', 'Einde.\n\nBegin', '1.\tTwee', 'A. b. C.', 'Wat?  écht', 'Stop. ålder', 'Ja.😀 Nee',
];

describe('the voice says numbers as before, without lookbehind (src/lib/sayNumbers.ts)', () => {
  it('on the edge cases', () => {
    for (const t of EDGE_TEXTS) expect(sayNumbers(t), t).toBe(oldSayNumbers(t));
  });
  it(`on every text of the course and the help languages (${CORPUS.length})`, () => {
    const differ = CORPUS.filter((t) => sayNumbers(t) !== oldSayNumbers(t));
    expect(differ).toEqual([]);
  });
  it('finds 112 as before (scripts/list-clips.ts)', () => {
    for (const t of [...EDGE_TEXTS, ...CORPUS, 'Bel 112', '1112', '112,50', '-112']) expect(hasDigitNumber(t), t).toBe(new RegExp(OLD_DIGITS.source).test(t));
  });
});

describe('a text is cut into the same sentences as before, without lookbehind (src/lib/dutch.ts)', () => {
  it('on the edge cases', () => {
    for (const t of EDGE_TEXTS) expect(sentences(t), t).toEqual(oldSentences(t));
  });
  it(`on every text of the course and the help languages (${CORPUS.length})`, () => {
    const differ = CORPUS.filter((t) => JSON.stringify(sentences(t)) !== JSON.stringify(oldSentences(t)));
    expect(differ).toEqual([]);
  });
});
