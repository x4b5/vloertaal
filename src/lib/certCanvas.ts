import { CERT_NOTE, certListLabel, certMeta, certSub, sealRing, type CertData } from './certificate';
import { roundRect, sharePng } from './canvasShare';
import { siteLink } from './shareLink';

/**
 * The certificate as a picture, drawn straight on a canvas (no libraries), in the same layout
 * as the sheet on screen (src/components/Certificate.tsx, sizes there in cqw = 1/100 of the
 * width, here in `u`). Shared with navigator.share({ files }) when the phone can, else saved
 * as a PNG.
 */

const W = 2000;
const H = Math.round((W * 210) / 297);
const u = W / 100;

export const C = {
  kraft: '#ebd6b5',
  kraftLine: '#c8955b',
  kraftDark: '#7e5428',
  paper: '#fffdf8',
  ink: '#1e2226',
  ink2: '#4a5058',
  ink3: '#6e737a',
  yellow: '#ffc414',
  chip: '#f6efe3',
  chipLine: '#cfc8bc',
  pen: '#1f4f9c',
  seal: '#137a55',
};
export const LEXEND = "'Lexend Variable', Lexend, system-ui, sans-serif";
export const STENCIL = "'Big Shoulders Stencil Display', 'Lexend Variable', sans-serif";
/** Help-language scripts fall back to the phone's own fonts. */
export const HELP = `${LEXEND}, 'Noto Sans Arabic', 'Noto Sans Ethiopic', 'Abyssinica SIL', sans-serif`;

export const font = (weight: number, size: number, family = LEXEND) => `${weight} ${size}px ${family}`;

export async function fontsReady(): Promise<void> {
  if (typeof document === 'undefined' || !document.fonts) return;
  await Promise.all([
    document.fonts.load(font(800, 40, STENCIL)),
    document.fonts.load(font(300, 40)),
    document.fonts.load(font(500, 40)),
    document.fonts.load(font(700, 40)),
    document.fonts.load(font(800, 40)),
  ]).catch(() => {});
}

/** Text with letter spacing (canvas letterSpacing where supported, else drawn as is). */
export function spaced(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, spacing: number) {
  const c = ctx as CanvasRenderingContext2D & { letterSpacing?: string };
  if ('letterSpacing' in c) {
    c.letterSpacing = `${spacing}px`;
    ctx.fillText(text, x, y);
    c.letterSpacing = '0px';
  } else {
    ctx.fillText(text, x, y);
  }
}

/** Splits text into lines that fit `max` (by words). */
export function wrap(ctx: CanvasRenderingContext2D, text: string, max: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let line = '';
  for (const w of words) {
    const next = line ? `${line} ${w}` : w;
    if (line && ctx.measureText(next).width > max) {
      lines.push(line);
      line = w;
    } else line = next;
  }
  if (line) lines.push(line);
  return lines;
}

/** Letters of a right-to-left script (Arabic, Persian, Dari; Hebrew). */
export const RTL_LETTERS = /[\u0590-\u08ff\ufb1d-\ufdff\ufe70-\ufeff]/;

/**
 * The learner's name on one line at `size`, or smaller down to `min`; still too long at `min`: on
 * two lines (by words; a single long word is cut where it no longer fits). `measure` gives a
 * text's width at a size.
 */
export function fitName(name: string, max: number, size: number, min: number, measure: (text: string, size: number) => number): { size: number; lines: string[] } {
  const text = name.trim().replace(/\s+/g, ' ');
  const one = measure(text, size);
  if (one <= max) return { size, lines: [text] };
  const fit = Math.max(min, Math.floor(size * (max / one) * 100) / 100);
  if (measure(text, fit) <= max) return { size: fit, lines: [text] };
  // Two lines: the break that keeps the longer line shortest.
  const words = text.split(' ');
  let best: string[] | null = null;
  for (let i = 1; i < words.length; i++) {
    const pair = [words.slice(0, i).join(' '), words.slice(i).join(' ')];
    if (!best || Math.max(...pair.map((l) => measure(l, min))) < Math.max(...best.map((l) => measure(l, min)))) best = pair;
  }
  const lines = (best ?? [text]).map((line) => {
    if (measure(line, min) <= max) return line;
    // One word longer than the line: as many letters as fit, with an ellipsis.
    const chars = [...line];
    while (chars.length > 1 && measure(`${chars.join('')}…`, min) > max) chars.pop();
    return `${chars.join('')}…`;
  });
  // The two lines may be bigger than `min` when both fit.
  const two = Math.max(min, Math.min(size, ...lines.map((l) => Math.floor(size * (max / measure(l, size)) * 100) / 100)));
  return { size: two, lines };
}

/** Text around a circle, clockwise from the left (as the SVG textPath on the logo and seal). */
function ringText(ctx: CanvasRenderingContext2D, text: string, cx: number, cy: number, r: number, size: number, spacing: number, start = Math.PI, fill = false) {
  ctx.save();
  ctx.font = font(800, size);
  // fill: spread the letters so the text goes exactly once around (as SVG textLength).
  if (fill) {
    const chars = [...text];
    const plain = chars.reduce((w, ch) => w + ctx.measureText(ch).width, 0);
    spacing = (2 * Math.PI * r - 2 - plain) / chars.length;
  }
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  let a = start;
  for (const ch of text) {
    const w = ctx.measureText(ch).width + spacing;
    a += w / 2 / r;
    ctx.save();
    ctx.translate(cx + r * Math.cos(a), cy + r * Math.sin(a));
    ctx.rotate(a + Math.PI / 2);
    ctx.fillText(ch, 0, 0);
    ctx.restore();
    a += w / 2 / r;
    if (a > start + Math.PI * 2) break;
  }
  ctx.restore();
}

/** The text around the logo's ring (src/components/Logo.tsx). */
const LOGO_RING = 'VLOERTAAL · NEDERLANDS VOOR HET WERK ·';
/** The black rubber-stamp logo on yellow (src/components/Logo.tsx), drawn at size s. */
export function drawLogo(ctx: CanvasRenderingContext2D, x: number, y: number, s: number, ring = LOGO_RING) {
  const k = s / 120;
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(k, k);
  ctx.fillStyle = C.yellow;
  roundRect(ctx, 0, 0, 120, 120, 28);
  ctx.fill();
  ctx.translate(60, 60);
  ctx.rotate((-10 * Math.PI) / 180);
  ctx.translate(-60, -60);
  ctx.strokeStyle = C.ink;
  ctx.fillStyle = C.ink;
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.arc(60, 60, 44, 0, Math.PI * 2);
  ctx.stroke();
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(60, 60, 31, 0, Math.PI * 2);
  ctx.stroke();
  // Another (shorter) ring text is spread to go once around, as the logo's own.
  ringText(ctx, ring, 60, 60, 35, 6.6, 1.25, Math.PI * 1.02, ring !== LOGO_RING);
  ctx.fill(new Path2D('M43 41h11l6 20 6-20h11L66 79H54z'));
  ctx.restore();
}

function drawSeal(ctx: CanvasRenderingContext2D, cx: number, cy: number, s: number, unitNo: string, ring: string) {
  const k = s / 120;
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate((-14 * Math.PI) / 180);
  ctx.scale(k, k);
  ctx.translate(-60, -60);
  ctx.globalAlpha = 0.9;
  ctx.strokeStyle = C.seal;
  ctx.fillStyle = C.seal;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(60, 60, 55, 0, Math.PI * 2);
  ctx.stroke();
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(60, 60, 40, 0, Math.PI * 2);
  ctx.stroke();
  ringText(ctx, ring, 60, 60, 47, 7.4, 0.9, Math.PI, true);
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.stroke(new Path2D('M48 38.5l7.5 7.5 15-15'));
  ctx.textAlign = 'center';
  ctx.font = font(800, 21, STENCIL);
  spaced(ctx, 'BEHAALD', 60, 70, 0.6);
  // The certificate is Dutch ("BEHAALD"): "ONDERWERP", a little smaller to fit the seal.
  ctx.font = font(700, 7);
  spaced(ctx, `ONDERWERP ${unitNo}`, 60, 86, 0.6);
  ctx.restore();
}

function drawSignature(ctx: CanvasRenderingContext2D, x: number, y: number, w: number) {
  const k = w / 260;
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(k, k);
  ctx.fillStyle = C.pen;
  ctx.strokeStyle = C.pen;
  ctx.save();
  ctx.transform(1, 0, Math.tan((-16 * Math.PI) / 180), 1, 0, 0);
  ctx.font = font(300, 46);
  spaced(ctx, 'Vloertaal', 14, 50, -1.5);
  ctx.restore();
  ctx.lineWidth = 2.2;
  ctx.lineCap = 'round';
  ctx.stroke(new Path2D('M14 62c40-9 110-12 160-6 24 3 46 1 72-10'));
  ctx.restore();
}

/** The page's fixed frame (the same in measureBody and drawCertificate). */
function frame() {
  const pad = 2.4 * u;
  const px = pad, py = pad, pw = W - 2 * pad, ph = H - 2 * pad;
  const left = px + 4.4 * u;
  const right = px + pw - 4.4 * u;
  const top = py + 3.4 * u;
  const logo = 8.5 * u;
  return { px, py, pw, ph, left, right, width: right - left, top, logo };
}

/** "Wat kun je nu?" on the sheet: the label, then one line per sentence (sizes in u, as the sheet's cqw). */
const KUN = { gap: 1.9 * u, label: 1.15 * u, size: 1.55 * u, line: 1.55 * u * 1.4, indent: 2.3 * u };
const kunHeight = (n: number) => (n ? KUN.gap + KUN.label * 1.3 + 0.5 * u + n * KUN.line : 0);

/**
 * Measures the body (name, title, titles, key words, "Wat kun je nu?", meta), so it is centred
 * between head and foot (as the flex column on screen).
 */
function measureBody(ctx: CanvasRenderingContext2D, d: CertData) {
  const { py, ph, width, top, logo } = frame();
  const titleSize = 6.4 * u;
  ctx.font = font(800, titleSize);
  // Balanced, like text-wrap: balance on screen: the narrowest width that keeps the line count.
  let titleLines = wrap(ctx, d.titleNl, width);
  for (let w = width; titleLines.length > 1 && w > width * 0.4; w -= u) {
    const tryLines = wrap(ctx, d.titleNl, w);
    if (tryLines.length > titleLines.length) break;
    titleLines = tryLines;
  }
  ctx.font = font(600, 1.65 * u);
  const chipH = 1.65 * u * 1.25 + 0.9 * u;
  const chipRows: { text: string; w: number }[][] = [[]];
  let rowW = 0;
  for (const p of d.phrases) {
    const w = ctx.measureText(p).width + 2.2 * u;
    if (rowW && rowW + w > width) { chipRows.push([]); rowW = 0; }
    chipRows[chipRows.length - 1].push({ text: p, w });
    rowW += w + 0.8 * u;
  }
  // The name after "UITGEREIKT AAN": smaller to fit, or on two lines (fitName).
  ctx.font = font(700, 1.15 * u);
  const toLeft = ctx.measureText('UITGEREIKT AAN').width + 0.14 * 1.15 * u * 14 + 1 * u;
  const name = d.name ? fitName(d.name, width - toLeft, 3 * u, 2 * u, (text, size) => {
    ctx.font = font(700, size, HELP);
    return ctx.measureText(text).width;
  }) : null;
  const nameH = name ? name.lines.length * name.size * 1.2 + 0.6 * u : 0;
  const titleH = titleLines.length * titleSize * 1.02;
  // No second title in the work-rules track (the unit's title is Dutch already).
  const subH = d.rules ? 0 : 0.9 * u + 2 * u * 1.3;
  const wordsH = 2.4 * u + 1.15 * u * 1.3 + 0.8 * u + chipRows.length * chipH + (chipRows.length - 1) * 0.8 * u;
  const metaH = 1.8 * u + 1.45 * u * 1.3;
  const kunLines = d.kun ?? [];
  const bodyH = nameH + titleH + subH + wordsH + kunHeight(kunLines.length) + metaH;
  const bodyTop = top + logo + 1.6 * u;
  const footTop = py + ph - 2.4 * u - 1.1 * u * 1.3 - 1.4 * u - 9 * u;
  return { titleSize, titleLines, chipH, chipRows, toLeft, name, nameH, kunLines, bodyH, bodyTop, footTop };
}

/**
 * Does "Wat kun je nu?" fit on the certificate (at most 3 lines, each on one line, and the body
 * still between head and foot)? Measured as the picture draws it; the sheet on screen has the same
 * sizes (cqw), so both show the lines, or neither. No canvas (an old browser, a test): no.
 */
export function certKunFits(d: CertData, kun: string[]): boolean {
  if (!kun.length || kun.length > 3 || typeof document === 'undefined') return false;
  let ctx: CanvasRenderingContext2D | null = null;
  try {
    ctx = document.createElement('canvas').getContext('2d');
  } catch {
    return false;
  }
  if (!ctx || typeof ctx.measureText !== 'function') return false;
  const { width } = frame();
  ctx.font = font(600, KUN.size);
  if (kun.some((line) => ctx!.measureText(line).width > width - KUN.indent)) return false;
  const { bodyH, bodyTop, footTop } = measureBody(ctx, { ...d, kun });
  // A little room to spare: the sheet on screen wraps text as the browser does, not as here.
  return bodyH <= footTop - bodyTop - 1.2 * u;
}

/** Draws the certificate on a new canvas. */
export async function drawCertificate(d: CertData): Promise<HTMLCanvasElement> {
  await fontsReady();
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d')!;
  ctx.textBaseline = 'alphabetic';
  // The sheet is Dutch, left to right, whatever the page's direction: a detached canvas could
  // otherwise take an Arabic page's right-to-left and turn "16 oktober 2026" round.
  ctx.direction = 'ltr';

  // Kraft border, paper sheet with an ink edge and a thin kraft rule inside.
  ctx.fillStyle = C.kraft;
  ctx.fillRect(0, 0, W, H);
  const pad = 2.4 * u;
  const px = pad, py = pad, pw = W - 2 * pad, ph = H - 2 * pad;
  ctx.fillStyle = C.paper;
  ctx.fillRect(px, py, pw, ph);
  ctx.strokeStyle = C.ink;
  ctx.lineWidth = 0.32 * u;
  ctx.strokeRect(px + 0.16 * u, py + 0.16 * u, pw - 0.32 * u, ph - 0.32 * u);
  ctx.strokeStyle = C.kraftLine;
  ctx.lineWidth = 0.15 * u;
  const ir = 0.32 * u + 0.7 * u;
  ctx.strokeRect(px + ir, py + ir, pw - 2 * ir, ph - 2 * ir);

  const left = px + 4.4 * u;
  const right = px + pw - 4.4 * u;

  // Head: logo, "CERTIFICAAT · VLOERTAAL", the unit tag.
  const top = py + 3.4 * u;
  const logo = 8.5 * u;
  // The stamp's ring says what the app is about (the work-rules track: work in the Netherlands).
  drawLogo(ctx, left, top, logo, d.rules ? (d.be ? 'VLOERTAAL · WERKEN IN BELGIË · ' : 'VLOERTAAL · WERKEN IN NEDERLAND · ') : undefined);
  ctx.fillStyle = C.ink;
  ctx.textAlign = 'left';
  ctx.font = font(800, 4.2 * u, STENCIL);
  spaced(ctx, 'CERTIFICAAT · VLOERTAAL', left + logo + 2 * u, top + logo / 2 + 0.6 * u, 0.06 * 4.2 * u);
  ctx.fillStyle = C.ink2;
  ctx.font = font(500, 1.5 * u);
  spaced(ctx, certSub(d), left + logo + 2 * u, top + logo / 2 + 3 * u, 0.02 * 1.5 * u);
  // Unit tag: yellow, ink edge, slightly turned.
  ctx.font = font(800, 2.6 * u, STENCIL);
  const tag = `ONDERWERP ${d.unitNo}`;
  const tw = ctx.measureText(tag).width + 0.08 * 2.6 * u * tag.length + 2.8 * u;
  const th = 2.6 * u + 1.4 * u;
  ctx.save();
  ctx.translate(right - tw / 2, top + logo / 2);
  ctx.rotate((2 * Math.PI) / 180);
  ctx.fillStyle = C.yellow;
  ctx.fillRect(-tw / 2, -th / 2, tw, th);
  ctx.strokeStyle = C.ink;
  ctx.lineWidth = 0.25 * u;
  ctx.strokeRect(-tw / 2, -th / 2, tw, th);
  ctx.fillStyle = C.ink;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  spaced(ctx, tag, 0, 0.15 * u, 0.08 * 2.6 * u);
  ctx.restore();
  ctx.textBaseline = 'alphabetic';
  ctx.textAlign = 'left';

  const { titleSize, titleLines, chipH, chipRows, toLeft, name, nameH, kunLines, bodyH, bodyTop, footTop } = measureBody(ctx, d);
  let y = bodyTop + Math.max(0, (footTop - bodyTop - bodyH) / 2);

  const label = (text: string, x: number, yy: number) => {
    ctx.fillStyle = C.kraftDark;
    ctx.font = font(700, 1.15 * u);
    spaced(ctx, text.toUpperCase(), x, yy, 0.14 * 1.15 * u);
  };

  if (name) {
    const base = y + name.size * 1.2 - 0.6 * u;
    label('Uitgereikt aan', left, base - 0.3 * u);
    ctx.fillStyle = C.ink;
    ctx.font = font(700, name.size, HELP);
    // A name in Arabic or Persian letters is drawn right to left, from the end of its own width
    // (its start is on the right), so a long one is never cut at its start.
    const rtl = RTL_LETTERS.test(name.lines.join(''));
    ctx.direction = rtl ? 'rtl' : 'ltr';
    ctx.textAlign = rtl ? 'right' : 'left';
    name.lines.forEach((line, i) => {
      const x = rtl ? left + toLeft + ctx.measureText(line).width : left + toLeft;
      ctx.fillText(line, x, base + i * name.size * 1.2);
    });
    ctx.direction = 'ltr';
    ctx.textAlign = 'left';
    y += nameH;
  }

  // Title with the yellow marker under its lower half.
  ctx.font = font(800, titleSize);
  for (const line of titleLines) {
    const lw = ctx.measureText(line).width;
    const lineTop = y;
    ctx.fillStyle = C.yellow;
    ctx.fillRect(left - 0.1 * titleSize, lineTop + titleSize * 1.02 * 0.62, lw + 0.2 * titleSize, titleSize * 1.02 * 0.3);
    ctx.fillStyle = C.ink;
    spaced(ctx, line, left, lineTop + titleSize * 0.82, -0.02 * titleSize);
    y += titleSize * 1.02;
  }

  // English title · help-language title.
  if (!d.rules) {
    y += 0.9 * u;
    const subBase = y + 2 * u;
    ctx.font = font(500, 2 * u);
    ctx.fillStyle = C.ink2;
    ctx.fillText(d.titleEn, left, subBase);
    if (d.titleHelp) {
      let x = left + ctx.measureText(d.titleEn).width + 0.8 * u;
      ctx.fillText('·', x, subBase);
      x += ctx.measureText('·').width + 0.8 * u;
      ctx.font = font(500, 2 * u, HELP);
      if (d.helpDir === 'rtl') {
        ctx.direction = 'rtl';
        ctx.textAlign = 'right';
        ctx.fillText(d.titleHelp, x + ctx.measureText(d.titleHelp).width, subBase);
        ctx.direction = 'ltr';
        ctx.textAlign = 'left';
      } else {
        ctx.fillText(d.titleHelp, x, subBase);
      }
    }
    y += 2 * u * 1.3;
  }

  // Key words (or key rules) as chips.
  y += 2.4 * u;
  label(certListLabel(d), left, y + 1.15 * u);
  y += 1.15 * u * 1.3 + 0.8 * u;
  ctx.font = font(600, 1.65 * u);
  for (const row of chipRows) {
    let x = left;
    for (const chip of row) {
      ctx.fillStyle = C.chip;
      roundRect(ctx, x, y, chip.w, chipH, 0.5 * u);
      ctx.fill();
      ctx.strokeStyle = C.chipLine;
      ctx.lineWidth = 0.16 * u;
      ctx.stroke();
      ctx.fillStyle = C.ink;
      ctx.fillText(chip.text, x + 1.1 * u, y + chipH / 2 + 0.6 * u);
      x += chip.w + 0.8 * u;
    }
    y += chipH + 0.8 * u;
  }
  y -= 0.8 * u;

  // "Wat kun je nu?": a small label, then each sentence after a green tick (only when it fits: certKunFits).
  if (kunLines.length) {
    y += KUN.gap;
    label('Wat kun je nu?', left, y + KUN.label);
    y += KUN.label * 1.3 + 0.5 * u;
    for (const line of kunLines) {
      const base = y + KUN.line * 0.72;
      ctx.save();
      ctx.strokeStyle = C.seal;
      ctx.lineWidth = 0.28 * u;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.beginPath();
      ctx.moveTo(left + 0.1 * u, base - 0.55 * u);
      ctx.lineTo(left + 0.55 * u, base - 0.1 * u);
      ctx.lineTo(left + 1.35 * u, base - 1.05 * u);
      ctx.stroke();
      ctx.restore();
      ctx.fillStyle = C.ink;
      ctx.font = font(600, KUN.size);
      ctx.fillText(line, left + KUN.indent, base);
      y += KUN.line;
    }
  }

  y += 1.8 * u;
  ctx.fillStyle = C.ink2;
  ctx.font = font(500, 1.45 * u);
  ctx.fillText(certMeta(d), left, y + 1.45 * u);

  // Foot: the date, the signature on its line, the stamp over the end of the line.
  const footBase = py + ph - 2.4 * u - 1.1 * u * 1.3 - 1.4 * u;
  label('Behaald op', left, footBase - 3.4 * u);
  ctx.fillStyle = C.ink;
  ctx.font = font(700, 2.1 * u);
  ctx.direction = 'ltr';
  ctx.textAlign = 'left';
  ctx.fillText(d.date, left, footBase - 0.4 * u);
  const signW = 30 * u;
  const signX = right - 9 * u - signW;
  drawSignature(ctx, signX, footBase - signW * (74 / 260) + 0.4 * u, signW);
  ctx.strokeStyle = C.ink;
  ctx.lineWidth = 0.18 * u;
  ctx.beginPath();
  ctx.moveTo(signX, footBase);
  ctx.lineTo(signX + signW, footBase);
  ctx.stroke();
  drawSeal(ctx, right - 6 * u, footBase - 4.6 * u, 16 * u, d.unitNo, sealRing(d));

  // "Oefencertificaat — geen officieel diploma", small, centred at the bottom.
  ctx.fillStyle = C.ink3;
  ctx.font = font(500, 1.1 * u);
  ctx.textAlign = 'center';
  spaced(ctx, CERT_NOTE, px + pw / 2, py + ph - 2.4 * u, 0.04 * 1.1 * u);
  // The site's address on the same line, at the start (under the date; the stamp is at the end),
  // so a certificate sent on leads somewhere.
  ctx.textAlign = 'left';
  ctx.font = font(600, 1.1 * u);
  ctx.fillText(siteLink(d.helpCode), left, py + ph - 2.4 * u);
  return canvas;
}

export const toBlob = (canvas: HTMLCanvasElement) =>
  new Promise<Blob>((resolve, reject) => canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('no image'))), 'image/png'));

/** The certificate as a PNG (drawn ahead on the certificate screen, so a tap shares at once). */
export async function certificatePng(d: CertData): Promise<Blob> {
  return toBlob(await drawCertificate(d));
}

/**
 * Shares the certificate as a PNG (the phone's share sheet, where the learner can save, send or
 * print it), or saves the PNG when sharing files is not supported or fails (a computer; a share
 * sheet the phone refused because the picture took too long). Returns what happened;
 * 'cancelled' when the learner closed the share sheet. `png`: the picture drawn ahead.
 */
export async function shareCertificate(d: CertData, fileName: string, png: Promise<Blob> = certificatePng(d), text?: string): Promise<'shared' | 'saved' | 'cancelled'> {
  return sharePng(await png, fileName, `Certificaat · ${d.titleNl}`, text);
}
