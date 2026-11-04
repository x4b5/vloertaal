import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { dataCodewords, falseFinders, formatBits, MAX_VERSION, qrCode, qrSvg, type Ecc } from '../src/lib/qr';
import { LANG_PAGES } from '../src/lib/langPages';

/**
 * The QR codes of the printed note (src/lib/qr.ts, src/lib/briefjePage.ts). A reader of its own,
 * written from the standard (ISO/IEC 18004) and not from the maker's code: it checks the format
 * bits, takes the mask off, reads the codewords in the zigzag, checks every block's Reed–Solomon
 * code and decodes the bytes. (When this was written, the same codes were also read with two
 * independent decoders, jsQR 1.4.0 and ZXing 0.21.3, and matched qrcode-generator 2.0.4 and
 * ZXing's encoder module for module at the same mask; those are not dependencies of the project.)
 */

// GF(256) with x^8 + x^4 + x^3 + x^2 + 1, by tables.
const EXP: number[] = [];
const LOG: number[] = new Array(256).fill(0);
for (let i = 0, x = 1; i < 255; i++) {
  EXP[i] = x;
  LOG[x] = i;
  x <<= 1;
  if (x & 0x100) x ^= 0x11d;
}
const mul = (a: number, b: number) => (a === 0 || b === 0 ? 0 : EXP[(LOG[a] + LOG[b]) % 255]);

/** Table 9 of the standard, versions 1–6: [blocks, error-correction codewords per block]. */
const TABLE: Record<Ecc, [number, number][]> = {
  L: [[1, 7], [1, 10], [1, 15], [1, 20], [1, 26], [2, 18]],
  M: [[1, 10], [1, 16], [1, 26], [2, 18], [2, 24], [4, 16]],
  Q: [[1, 13], [1, 22], [2, 18], [2, 26], [4, 18], [4, 24]],
  H: [[1, 17], [1, 28], [2, 22], [4, 16], [4, 22], [4, 28]],
};
const LEVEL_OF_BITS: Ecc[] = ['M', 'L', 'H', 'Q'];
const MASK: ((row: number, col: number) => boolean)[] = [
  (i, j) => (i + j) % 2 === 0,
  (i) => i % 2 === 0,
  (_i, j) => j % 3 === 0,
  (i, j) => (i + j) % 3 === 0,
  (i, j) => (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0,
  (i, j) => ((i * j) % 2) + ((i * j) % 3) === 0,
  (i, j) => (((i * j) % 2) + ((i * j) % 3)) % 2 === 0,
  (i, j) => (((i * j) % 3) + ((i + j) % 2)) % 2 === 0,
];

/** Reads a code (modules[row][col], true = dark) back to its text, or throws on anything wrong. */
function read(m: boolean[][]): { text: string; ecc: Ecc; mask: number; version: number } {
  const n = m.length;
  const version = (n - 17) / 4;
  if (!Number.isInteger(version) || version < 1 || version > 6) throw new Error(`size ${n}`);
  // Finders (with separators), timing, the alignment pattern, the dark module.
  const finder = (r: number, c: number) => {
    for (let i = -1; i <= 7; i++) for (let j = -1; j <= 7; j++) {
      const rr = r + i, cc = c + j;
      if (rr < 0 || cc < 0 || rr >= n || cc >= n) continue;
      const ring = Math.max(Math.abs(i - 3), Math.abs(j - 3));
      if (m[rr][cc] !== (ring <= 1 || ring === 3)) throw new Error(`finder at ${r},${c}`);
    }
  };
  finder(0, 0);
  finder(0, n - 7);
  finder(n - 7, 0);
  for (let k = 8; k < n - 8; k++) if (m[6][k] !== (k % 2 === 0) || m[k][6] !== (k % 2 === 0)) throw new Error('timing');
  if (!m[n - 8][8]) throw new Error('dark module');
  if (version >= 2) {
    for (let i = -2; i <= 2; i++) for (let j = -2; j <= 2; j++) if (m[n - 7 + i][n - 7 + j] !== (Math.max(Math.abs(i), Math.abs(j)) !== 1)) throw new Error('alignment');
  }
  // Format: two copies, the same, and a valid BCH code.
  const copy1: [number, number][] = [[8, 0], [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 7], [8, 8], [7, 8], [5, 8], [4, 8], [3, 8], [2, 8], [1, 8], [0, 8]];
  const copy2: [number, number][] = [...Array.from({ length: 7 }, (_, k): [number, number] => [n - 1 - k, 8]), ...Array.from({ length: 8 }, (_, k): [number, number] => [8, n - 8 + k])];
  // Bit 14 (most significant) first: copy 1 runs from (row 8, col 0) to (row 0, col 8), copy 2 from (row n−1, col 8) up, then (row 8, col n−8) right.
  const bitsOf = (cells: [number, number][]) => cells.reduce((a, [r, c]) => (a << 1) | (m[r][c] ? 1 : 0), 0);
  const f1 = bitsOf(copy1);
  const f2 = bitsOf(copy2);
  if (f1 !== f2) throw new Error(`format copies differ: ${f1.toString(2)} ${f2.toString(2)}`);
  const f = f1 ^ 0x5412;
  let rem = f >> 10;
  for (let k = 0; k < 10; k++) rem = (rem << 1) ^ ((rem >> 9) & 1 ? 0x537 : 0);
  if ((rem & 0x3ff) !== (f & 0x3ff)) throw new Error('format BCH');
  const ecc = LEVEL_OF_BITS[f >> 13];
  const mask = (f >> 10) & 7;
  // Which modules hold data.
  const fn = Array.from({ length: n }, () => new Array<boolean>(n).fill(false));
  const box = (r0: number, c0: number, h: number, w: number) => { for (let r = r0; r < r0 + h; r++) for (let c = c0; c < c0 + w; c++) if (r >= 0 && c >= 0 && r < n && c < n) fn[r][c] = true; };
  box(0, 0, 9, 9);
  box(0, n - 8, 9, 8);
  box(n - 8, 0, 8, 9);
  box(6, 0, 1, n);
  box(0, 6, n, 1);
  if (version >= 2) box(n - 9, n - 9, 5, 5);
  // Read the zigzag: column pairs from the right, up then down, skipping the timing column.
  const bits: number[] = [];
  let upward = true;
  for (let col = n - 1; col > 0; col -= 2) {
    if (col === 6) col = 5;
    for (let k = 0; k < n; k++) {
      const r = upward ? n - 1 - k : k;
      for (const c of [col, col - 1]) if (!fn[r][c]) bits.push(m[r][c] !== MASK[mask](r, c) ? 1 : 0);
    }
    upward = !upward;
  }
  const total = Math.floor(bits.length / 8);
  const words = Array.from({ length: total }, (_, k) => bits.slice(k * 8, k * 8 + 8).reduce((a, b) => (a << 1) | b, 0));
  // Undo the interleaving.
  const [blocks, eccLen] = TABLE[ecc][version - 1];
  const dataTotal = total - blocks * eccLen;
  const shortLen = Math.floor(dataTotal / blocks);
  const longOnes = dataTotal % blocks;
  const lens = Array.from({ length: blocks }, (_, b) => shortLen + (b >= blocks - longOnes ? 1 : 0));
  const parts: number[][] = lens.map(() => []);
  let at = 0;
  for (let k = 0; k < shortLen + 1; k++) for (let b = 0; b < blocks; b++) if (k < lens[b]) parts[b].push(words[at++]);
  for (let k = 0; k < eccLen; k++) for (let b = 0; b < blocks; b++) parts[b].push(words[at++]);
  // Every block is a codeword of the Reed–Solomon code: zero at α^0 … α^(eccLen−1).
  for (const block of parts) {
    for (let j = 0; j < eccLen; j++) {
      let s = 0;
      for (const c of block) s = mul(s, EXP[j]) ^ c;
      if (s !== 0) throw new Error(`Reed–Solomon syndrome ${j}`);
    }
  }
  const data = parts.flatMap((block, b) => block.slice(0, lens[b]));
  const stream = data.flatMap((w) => Array.from({ length: 8 }, (_, k) => (w >> (7 - k)) & 1));
  let pos = 0;
  const take = (len: number) => { let v = 0; for (let k = 0; k < len; k++) v = (v << 1) | stream[pos++]; return v; };
  if (take(4) !== 0b0100) throw new Error('not byte mode');
  const len = take(8);
  const bytes = Uint8Array.from({ length: len }, () => take(8));
  // The terminator, then whole pad bytes 11101100 / 00010001.
  const rest = stream.slice(pos);
  const term = Math.min(4, rest.length);
  if (rest.slice(0, term).some(Boolean)) throw new Error('terminator');
  const padStart = Math.ceil((pos + term) / 8);
  data.slice(padStart).forEach((w, k) => { if (w !== (k % 2 === 0 ? 0xec : 0x11)) throw new Error('padding'); });
  return { text: new TextDecoder().decode(bytes), ecc, mask, version };
}

const NOTE_URLS = LANG_PAGES.map((p) => `https://vloertaal.nl${p.path}`);

describe('the QR codes of the note', () => {
  it('read back to the language page’s address, in every help language and English', () => {
    expect(NOTE_URLS).toContain('https://vloertaal.nl/prs/');
    for (const url of NOTE_URLS) {
      const code = qrCode(url, 'Q');
      const back = read(code.modules);
      expect(back.text, url).toBe(url);
      // Level Q (a quarter may be lost: a folded or stained note), version 3: 29 × 29 modules.
      expect(back).toMatchObject({ ecc: 'Q', version: 3, mask: code.mask });
    }
  });

  it('every mask and every level reads back, for short and long texts', () => {
    const texts = ['A', 'https://vloertaal.nl/pl/', 'Vloertaal: Nederlands voor op de werkvloer ✓', 'x'.repeat(dataCodewords(MAX_VERSION, 'L') - 2)];
    for (const text of texts) for (const ecc of ['L', 'M', 'Q', 'H'] as Ecc[]) {
      if (new TextEncoder().encode(text).length + 2 > dataCodewords(MAX_VERSION, ecc)) {
        expect(() => qrCode(text, ecc)).toThrow(/do not fit/);
        continue;
      }
      for (let mask = 0; mask < 8; mask++) expect(read(qrCode(text, ecc, mask).modules).text, `${ecc}${mask} ${text}`).toBe(text);
    }
  });

  it('the reader is not easily pleased: one wrong module anywhere is caught', () => {
    const { modules } = qrCode('https://vloertaal.nl/pl/', 'Q');
    const flip = (r: number, c: number) => modules.map((row, i) => row.map((d, j) => (i === r && j === c ? !d : d)));
    expect(() => read(flip(15, 15))).toThrow(/Reed–Solomon/); // a data module
    expect(() => read(flip(20, 21))).toThrow(/alignment/);
    expect(() => read(flip(8, 2))).toThrow(/format/); // a format bit
    expect(() => read(flip(3, 3))).toThrow(/finder/);
    expect(() => read(flip(6, 11))).toThrow(/timing/);
  });

  it('has the standard’s format bits and capacities', () => {
    // ISO/IEC 18004, table C.1 (mask 0) and table 7 (data codewords).
    expect(formatBits('L', 0).toString(2).padStart(15, '0')).toBe('111011111000100');
    expect(formatBits('M', 0).toString(2).padStart(15, '0')).toBe('101010000010010');
    expect(formatBits('Q', 0).toString(2).padStart(15, '0')).toBe('011010101011111');
    expect(formatBits('H', 0).toString(2).padStart(15, '0')).toBe('001011010001001');
    expect([dataCodewords(1, 'M'), dataCodewords(2, 'Q'), dataCodewords(3, 'Q'), dataCodewords(4, 'H'), dataCodewords(6, 'L')]).toEqual([16, 22, 34, 36, 136]);
  });

  it('picks a mask without spots a scanner could take for a finder, where one exists', () => {
    for (const url of NOTE_URLS) {
      const best = Math.min(...Array.from({ length: 8 }, (_, k) => falseFinders(qrCode(url, 'Q', k).modules)));
      expect(falseFinders(qrCode(url, 'Q').modules), url).toBe(best);
      expect(best, url).toBeLessThanOrEqual(1);
    }
  });

  it('needs no package of others, and names the MIT generator its steps follow', () => {
    const src = readFileSync('src/lib/qr.ts', 'utf8');
    expect(src).not.toMatch(/^import /m);
    expect(src).toContain('Copyright (c) Project Nayuki. (MIT License)');
    expect(src).toContain('The above copyright notice and this permission notice shall be included');
    expect(readFileSync('THIRD_PARTY_NOTICES.md', 'utf8')).toContain('`src/lib/qr.ts`, zonder pakket van anderen');
    const pkg = JSON.parse(readFileSync('package.json', 'utf8')) as { dependencies: object; devDependencies: object };
    expect(Object.keys({ ...pkg.dependencies, ...pkg.devDependencies }).filter((d) => /qr/i.test(d))).toEqual([]);
  });

  it('is drawn as an SVG: black on white, a quiet zone of four modules, the same modules', () => {
    const url = 'https://vloertaal.nl/ti/';
    const svg = qrSvg(url, 'QR-code: vloertaal.nl/ti');
    const { modules } = qrCode(url, 'Q');
    const size = modules.length + 8;
    expect(svg).toMatch(new RegExp(`^<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" role="img" aria-label="QR-code: vloertaal.nl/ti"`));
    expect(svg).toContain(`<rect width="${size}" height="${size}" fill="#fff"/>`);
    expect(svg).toContain('<path fill="#000" d="');
    const drawn = Array.from({ length: modules.length }, () => new Array<boolean>(modules.length).fill(false));
    for (const [, x, y, w] of svg.matchAll(/M(\d+) (\d+)h(\d+)v1h-\3z/g)) {
      for (let k = 0; k < Number(w); k++) drawn[Number(y) - 4][Number(x) - 4 + k] = true;
    }
    expect(drawn).toEqual(modules);
    expect(read(drawn).text).toBe(url);
  });
});
