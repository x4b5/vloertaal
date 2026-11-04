/**
 * A small QR code maker for the printed note (src/lib/briefjePage.ts), run at build time, so no
 * package of others (the owner's preference, 4 November 2026). Only what a web address needs: byte
 * mode, versions 1 to 6 (21×21 to 41×41 modules, 100+ characters at level M), the four
 * error-correction levels and the eight masks (ISO/IEC 18004). The mask is the one a camera finds
 * and reads most easily: the fewest finder-like spots (falseFinders), then the standard's penalty.
 *
 * Checked when this was written (4 November 2026): every code of the note, at every level and
 * mask, was read by two independent decoders (jsQR 1.4.0 and ZXing 0.21.3, also from the printed
 * A4 page) and was module for module the same as qrcode-generator 2.0.4 and ZXing's own encoder at
 * the same mask. None of those is a dependency. tests/qr.test.ts reads every code back with a
 * reader of its own, written from the standard.
 *
 * The steps (Reed–Solomon, the interleaving, the zigzag, the format bits, the penalty) follow the
 * QR Code generator library of Project Nayuki, which is under the MIT License:
 *
 *   Copyright (c) Project Nayuki. (MIT License)
 *   https://www.nayuki.io/page/qr-code-generator-library
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 *   and associated documentation files (the "Software"), to deal in the Software without
 *   restriction, including without limitation the rights to use, copy, modify, merge, publish,
 *   distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the
 *   Software is furnished to do so, subject to the following conditions:
 *   - The above copyright notice and this permission notice shall be included in all copies or
 *     substantial portions of the Software.
 *   - The Software is provided "as is", without warranty of any kind, express or implied,
 *     including but not limited to the warranties of merchantability, fitness for a particular
 *     purpose and noninfringement. In no event shall the authors or copyright holders be liable
 *     for any claim, damages or other liability, whether in an action of contract, tort or
 *     otherwise, arising from, out of or in connection with the Software or the use or other
 *     dealings in the Software.
 *
 * "QR Code" is a registered trademark of DENSO WAVE INCORPORATED.
 */

export type Ecc = 'L' | 'M' | 'Q' | 'H';

/** The two format bits of each level (L 01, M 00, Q 11, H 10). */
const FORMAT_BITS: Record<Ecc, number> = { L: 1, M: 0, Q: 3, H: 2 };
/** Per level, per version (index 1–6): error-correction codewords per block, and the number of blocks. */
const ECC_PER_BLOCK: Record<Ecc, readonly number[]> = {
  L: [0, 7, 10, 15, 20, 26, 18],
  M: [0, 10, 16, 26, 18, 24, 16],
  Q: [0, 13, 22, 18, 26, 18, 24],
  H: [0, 17, 28, 22, 16, 22, 28],
};
const BLOCKS: Record<Ecc, readonly number[]> = {
  L: [0, 1, 1, 1, 1, 1, 2],
  M: [0, 1, 1, 1, 2, 2, 4],
  Q: [0, 1, 1, 2, 2, 4, 4],
  H: [0, 1, 1, 2, 4, 4, 4],
};
export const MAX_VERSION = 6;

/** The modules a version has for data and error correction (everything but the function patterns). */
function rawDataModules(ver: number): number {
  let n = (16 * ver + 128) * ver + 64;
  if (ver >= 2) {
    const align = Math.floor(ver / 7) + 2;
    n -= (25 * align - 10) * align - 55;
  }
  return n;
}

/** Data codewords of a version at a level. */
export function dataCodewords(ver: number, ecc: Ecc): number {
  return Math.floor(rawDataModules(ver) / 8) - ECC_PER_BLOCK[ecc][ver] * BLOCKS[ecc][ver];
}

/** Multiplication in GF(2^8) with the QR polynomial x^8 + x^4 + x^3 + x^2 + 1. */
function gfMul(x: number, y: number): number {
  let z = 0;
  for (let i = 7; i >= 0; i--) {
    z = (z << 1) ^ ((z >>> 7) * 0x11d);
    z ^= ((y >>> i) & 1) * x;
  }
  return z;
}

/** The Reed–Solomon generator of `degree` (roots α^0 … α^(degree−1)), highest term left out. */
function rsDivisor(degree: number): number[] {
  const out = new Array<number>(degree).fill(0);
  out[degree - 1] = 1;
  let root = 1;
  for (let i = 0; i < degree; i++) {
    for (let j = 0; j < degree; j++) {
      out[j] = gfMul(out[j], root);
      if (j + 1 < degree) out[j] ^= out[j + 1];
    }
    root = gfMul(root, 2);
  }
  return out;
}

function rsRemainder(data: readonly number[], divisor: readonly number[]): number[] {
  const out = new Array<number>(divisor.length).fill(0);
  for (const b of data) {
    const factor = b ^ (out.shift() as number);
    out.push(0);
    divisor.forEach((c, i) => { out[i] ^= gfMul(c, factor); });
  }
  return out;
}

/** The data codewords: mode 0100 (bytes), an 8-bit length, the bytes, then the terminator and padding. */
function encodeData(bytes: Uint8Array, capacity: number): number[] {
  const bits: number[] = [];
  const put = (value: number, len: number) => { for (let i = len - 1; i >= 0; i--) bits.push((value >>> i) & 1); };
  put(0b0100, 4);
  put(bytes.length, 8);
  for (const b of bytes) put(b, 8);
  put(0, Math.min(4, capacity * 8 - bits.length));
  put(0, (8 - (bits.length % 8)) % 8);
  const out: number[] = [];
  for (let i = 0; i < bits.length; i += 8) out.push(bits.slice(i, i + 8).reduce((a, b) => (a << 1) | b, 0));
  for (let pad = 0xec; out.length < capacity; pad ^= 0xec ^ 0x11) out.push(pad);
  return out;
}

/** The blocks with their error correction, interleaved as the standard places them. */
function withErrorCorrection(data: readonly number[], ver: number, ecc: Ecc): number[] {
  const blocks = BLOCKS[ecc][ver];
  const eccLen = ECC_PER_BLOCK[ecc][ver];
  const raw = Math.floor(rawDataModules(ver) / 8);
  const short = blocks - (raw % blocks);
  const shortLen = Math.floor(raw / blocks);
  const divisor = rsDivisor(eccLen);
  const all: number[][] = [];
  for (let i = 0, k = 0; i < blocks; i++) {
    const dat = data.slice(k, k + shortLen - eccLen + (i < short ? 0 : 1));
    k += dat.length;
    const block = [...dat, ...(i < short ? [0] : []), ...rsRemainder(dat, divisor)];
    all.push(block);
  }
  const out: number[] = [];
  for (let i = 0; i < all[0].length; i++) {
    all.forEach((block, j) => { if (i !== shortLen - eccLen || j >= short) out.push(block[i]); });
  }
  return out;
}

const MASKS: readonly ((x: number, y: number) => boolean)[] = [
  (x, y) => (x + y) % 2 === 0,
  (_x, y) => y % 2 === 0,
  (x) => x % 3 === 0,
  (x, y) => (x + y) % 3 === 0,
  (x, y) => (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0,
  (x, y) => ((x * y) % 2) + ((x * y) % 3) === 0,
  (x, y) => (((x * y) % 2) + ((x * y) % 3)) % 2 === 0,
  (x, y) => (((x + y) % 2) + ((x * y) % 3)) % 2 === 0,
];

/** The 15 format bits (level and mask, with their BCH code and the standard's XOR mask). */
export function formatBits(ecc: Ecc, mask: number): number {
  const data = (FORMAT_BITS[ecc] << 3) | mask;
  let rem = data;
  for (let i = 0; i < 10; i++) rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
  return ((data << 10) | rem) ^ 0x5412;
}

class Grid {
  readonly dark: boolean[][];
  readonly fixed: boolean[][];
  constructor(readonly size: number) {
    this.dark = Array.from({ length: size }, () => new Array<boolean>(size).fill(false));
    this.fixed = Array.from({ length: size }, () => new Array<boolean>(size).fill(false));
  }
  /** A function module (x: column, y: row). */
  set(x: number, y: number, dark: boolean): void {
    this.dark[y][x] = dark;
    this.fixed[y][x] = true;
  }
}

function drawFunctionPatterns(g: Grid, ver: number): void {
  const n = g.size;
  for (let i = 0; i < n; i++) {
    g.set(6, i, i % 2 === 0);
    g.set(i, 6, i % 2 === 0);
  }
  // The three finders, each with its light separator.
  for (const [cx, cy] of [[3, 3], [n - 4, 3], [3, n - 4]]) {
    for (let dy = -4; dy <= 4; dy++) {
      for (let dx = -4; dx <= 4; dx++) {
        const x = cx + dx;
        const y = cy + dy;
        const d = Math.max(Math.abs(dx), Math.abs(dy));
        if (x >= 0 && x < n && y >= 0 && y < n) g.set(x, y, d !== 2 && d !== 4);
      }
    }
  }
  // Alignment patterns (version 2 and up: one, at the corner away from the finders).
  if (ver >= 2) {
    const at = n - 7;
    for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) g.set(at + dx, at + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
  }
  // Reserve the format areas (drawn per mask) and the one dark module.
  drawFormat(g, 0);
}

function drawFormat(g: Grid, bits: number): void {
  const n = g.size;
  const bit = (i: number) => ((bits >>> i) & 1) === 1;
  for (let i = 0; i <= 5; i++) g.set(8, i, bit(i));
  g.set(8, 7, bit(6));
  g.set(8, 8, bit(7));
  g.set(7, 8, bit(8));
  for (let i = 9; i < 15; i++) g.set(14 - i, 8, bit(i));
  for (let i = 0; i < 8; i++) g.set(n - 1 - i, 8, bit(i));
  for (let i = 8; i < 15; i++) g.set(8, n - 15 + i, bit(i));
  g.set(8, n - 8, true);
}

/** The codewords in the standard's zigzag: two columns at a time, from the bottom right, up and down. */
function drawCodewords(g: Grid, words: readonly number[]): void {
  const n = g.size;
  let i = 0;
  for (let right = n - 1; right >= 1; right -= 2) {
    if (right === 6) right = 5;
    for (let vert = 0; vert < n; vert++) {
      for (let j = 0; j < 2; j++) {
        const x = right - j;
        const upward = ((right + 1) & 2) === 0;
        const y = upward ? n - 1 - vert : vert;
        if (!g.fixed[y][x] && i < words.length * 8) {
          g.dark[y][x] = ((words[i >>> 3] >>> (7 - (i & 7))) & 1) === 1;
          i++;
        }
      }
    }
  }
}

function applyMask(g: Grid, mask: number): void {
  for (let y = 0; y < g.size; y++) for (let x = 0; x < g.size; x++) if (!g.fixed[y][x] && MASKS[mask](x, y)) g.dark[y][x] = !g.dark[y][x];
}

/**
 * The standard's penalty (N1–N4), as Nayuki's generator counts it: runs of five or more, 2×2 blocks,
 * finder-like runs (1:1:3:1:1 with light on a side, the quiet zone counting as light), and the
 * balance of dark and light. A lower score is easier for a scanner: a mask with stray finder-like
 * runs can make a camera look in the wrong place.
 */
export function penalty(m: readonly (readonly boolean[])[]): number {
  const n = m.length;
  let score = 0;
  const lines: boolean[][] = [...m.map((r) => [...r]), ...m.map((_, x) => m.map((r) => r[x]))];
  for (const line of lines) {
    // The runs, with the quiet zone as a long light run at each end.
    const runs: { dark: boolean; len: number }[] = [{ dark: false, len: n }];
    for (const d of line) {
      const last = runs[runs.length - 1];
      if (last.dark === d) last.len++;
      else runs.push({ dark: d, len: 1 });
    }
    if (runs[runs.length - 1].dark) runs.push({ dark: false, len: n });
    else runs[runs.length - 1].len += n;
    runs.forEach((r, i) => {
      // N1, not for the quiet zone itself.
      const len = r.len - (i === 0 || i === runs.length - 1 ? n : 0);
      if (len >= 5) score += 3 + (len - 5);
      // N3: dark 1, light 1, dark 3, light 1, dark 1, with 4 light before or after.
      if (!r.dark || i + 5 >= runs.length) return;
      const a = r.len;
      const core = runs[i + 1].len === a && runs[i + 2].len === 3 * a && runs[i + 3].len === a && runs[i + 4].len === a;
      if (!core) return;
      const before = runs[i - 1].len;
      const after = runs[i + 5].len;
      if (before >= 4 * a && after >= a) score += 40;
      if (after >= 4 * a && before >= a) score += 40;
    });
  }
  for (let y = 0; y + 1 < n; y++) for (let x = 0; x + 1 < n; x++) {
    const c = m[y][x];
    if (m[y][x + 1] === c && m[y + 1][x] === c && m[y + 1][x + 1] === c) score += 3;
  }
  const dark = m.reduce((a, r) => a + r.filter(Boolean).length, 0);
  const total = n * n;
  score += (Math.ceil(Math.abs(dark * 20 - total * 10) / total) - 1) * 10;
  return score;
}

/**
 * Spots that a scanner could take for a finder: a dark centre run with runs around it in about
 * 1:1:3:1:1, across and down, each within half a module (the tolerance of ZXing's detector, the
 * reader behind many Android scanners), outside the three real finders. The standard's penalty
 * only counts the exact 1:1:3:1:1, so a mask it likes can still have a 1:1:2:1:1 spot in the data
 * that such a scanner picks instead of a corner (found with ZXing when this was written: the
 * code for /es/ was then missed in about half the camera-like frames). Counted per module.
 */
export function falseFinders(m: readonly (readonly boolean[])[]): number {
  const n = m.length;
  /** The five runs centred on the run that holds index i of a line, or null near its ends. */
  const around = (line: readonly boolean[], i: number): number[] | null => {
    let a = i;
    while (a > 0 && line[a - 1] === line[i]) a--;
    let b = i;
    while (b + 1 < n && line[b + 1] === line[i]) b++;
    const runs = [b - a + 1];
    for (let k = 0, at = a - 1; k < 2; k++) {
      if (at < 0) return null;
      let len = 0;
      for (const c = line[at]; at >= 0 && line[at] === c; at--) len++;
      runs.unshift(len);
    }
    for (let k = 0, at = b + 1; k < 2; k++) {
      if (at >= n) return null;
      let len = 0;
      for (const c = line[at]; at < n && line[at] === c; at++) len++;
      runs.push(len);
    }
    return runs;
  };
  const fits = (r: number[] | null) => {
    if (!r) return false;
    const unit = r.reduce((x, y) => x + y, 0) / 7;
    const v = unit / 2;
    return Math.abs(unit - r[0]) < v && Math.abs(unit - r[1]) < v && Math.abs(3 * unit - r[2]) < 3 * v && Math.abs(unit - r[3]) < v && Math.abs(unit - r[4]) < v;
  };
  const inFinder = (x: number, y: number) => (x < 7 || x >= n - 7) && (y < 7 || y >= n - 7) && !(x >= n - 7 && y >= n - 7);
  let count = 0;
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (!m[y][x] || inFinder(x, y)) continue;
      if (fits(around(m[y], x)) && fits(around(m.map((r) => r[x]), y))) count++;
    }
  }
  return count;
}

export interface QrCode {
  version: number;
  ecc: Ecc;
  mask: number;
  /** modules[y][x]: true is dark. */
  modules: boolean[][];
}

/** The QR code of `text` (UTF-8 bytes): the smallest version that fits, and the mask that is easiest to find and read (or `mask`). */
export function qrCode(text: string, ecc: Ecc = 'M', mask?: number): QrCode {
  const bytes = new TextEncoder().encode(text);
  let ver = 1;
  while (ver <= MAX_VERSION && dataCodewords(ver, ecc) * 8 < 12 + bytes.length * 8) ver++;
  if (ver > MAX_VERSION) throw new Error(`qr: ${bytes.length} bytes do not fit in version ${MAX_VERSION}-${ecc}`);
  const words = withErrorCorrection(encodeData(bytes, dataCodewords(ver, ecc)), ver, ecc);
  const make = (k: number) => {
    const g = new Grid(17 + 4 * ver);
    drawFunctionPatterns(g, ver);
    drawCodewords(g, words);
    applyMask(g, k);
    drawFormat(g, formatBits(ecc, k));
    return g.dark;
  };
  if (mask !== undefined) return { version: ver, ecc, mask, modules: make(mask) };
  // The fewest spots a scanner could mistake for a finder first (falseFinders), then the standard's penalty.
  let best = { mask: 0, modules: make(0), score: Infinity };
  for (let k = 0; k < 8; k++) {
    const modules = make(k);
    const score = falseFinders(modules) * 10000 + penalty(modules);
    if (score < best.score) best = { mask: k, modules, score };
  }
  return { version: ver, ecc, mask: best.mask, modules: best.modules };
}

/**
 * The code as an SVG: black on white whatever the page's colours (a scanner needs that), with the
 * standard's quiet zone of four modules, one path of horizontal runs. `label` names it for a
 * screen reader.
 */
export function qrSvg(text: string, label: string, ecc: Ecc = 'Q'): string {
  const { modules } = qrCode(text, ecc);
  const quiet = 4;
  const size = modules.length + quiet * 2;
  let d = '';
  modules.forEach((row, y) => {
    for (let x = 0; x < row.length;) {
      if (!row[x]) { x++; continue; }
      let end = x;
      while (end < row.length && row[end]) end++;
      d += `M${x + quiet} ${y + quiet}h${end - x}v1h-${end - x}z`;
      x = end;
    }
  });
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" role="img" aria-label="${esc(label)}" shape-rendering="crispEdges"><rect width="${size}" height="${size}" fill="#fff"/><path fill="#000" d="${d}"/></svg>`;
}
