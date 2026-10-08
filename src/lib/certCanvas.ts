import { CERT_NOTE, SEAL_RING, certMeta, type CertData } from './certificate';

/**
 * The certificate as a picture, drawn straight on a canvas (no libraries), in the same layout
 * as the sheet on screen (src/components/Certificate.tsx, sizes there in cqw = 1/100 of the
 * width, here in `u`). Shared with navigator.share({ files }) when the phone can, else saved
 * as a PNG.
 */

const W = 2000;
const H = Math.round((W * 210) / 297);
const u = W / 100;

const C = {
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
const LEXEND = "'Lexend Variable', Lexend, system-ui, sans-serif";
const STENCIL = "'Big Shoulders Stencil Display', 'Lexend Variable', sans-serif";
/** Help-language scripts fall back to the phone's own fonts. */
const HELP = `${LEXEND}, 'Noto Sans Arabic', 'Noto Sans Ethiopic', 'Abyssinica SIL', sans-serif`;

const font = (weight: number, size: number, family = LEXEND) => `${weight} ${size}px ${family}`;

async function fontsReady(): Promise<void> {
  if (typeof document === 'undefined' || !document.fonts) return;
  await Promise.all([
    document.fonts.load(font(800, 40, STENCIL)),
    document.fonts.load(font(300, 40)),
    document.fonts.load(font(500, 40)),
    document.fonts.load(font(700, 40)),
    document.fonts.load(font(800, 40)),
  ]).catch(() => {});
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

/** Text with letter spacing (canvas letterSpacing where supported, else drawn as is). */
function spaced(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, spacing: number) {
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
function wrap(ctx: CanvasRenderingContext2D, text: string, max: number): string[] {
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

/** Text around a circle, clockwise from the left (as the SVG textPath on the logo and seal). */
function ringText(ctx: CanvasRenderingContext2D, text: string, cx: number, cy: number, r: number, size: number, spacing: number, start = Math.PI) {
  ctx.save();
  ctx.font = font(800, size);
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

/** The black rubber-stamp logo on yellow (src/components/Logo.tsx), drawn at size s. */
function drawLogo(ctx: CanvasRenderingContext2D, x: number, y: number, s: number) {
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
  ringText(ctx, 'VLOERTAAL · NEDERLANDS VOOR HET WERK ·', 60, 60, 35, 6.6, 1.25, Math.PI * 1.02);
  ctx.fill(new Path2D('M43 41h11l6 20 6-20h11L66 79H54z'));
  ctx.restore();
}

function drawSeal(ctx: CanvasRenderingContext2D, cx: number, cy: number, s: number, unitNo: string) {
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
  ringText(ctx, SEAL_RING, 60, 60, 44.5, 7.4, 0.9);
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.stroke(new Path2D('M48 38.5l7.5 7.5 15-15'));
  ctx.textAlign = 'center';
  ctx.font = font(800, 21, STENCIL);
  spaced(ctx, 'BEHAALD', 60, 70, 0.6);
  ctx.font = font(700, 8.5);
  spaced(ctx, `UNIT ${unitNo}`, 60, 86, 1.5);
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

/** Draws the certificate on a new canvas. */
export async function drawCertificate(d: CertData): Promise<HTMLCanvasElement> {
  await fontsReady();
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d')!;
  ctx.textBaseline = 'alphabetic';

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
  const width = right - left;

  // Head: logo, "CERTIFICAAT · VLOERTAAL", the unit tag.
  const top = py + 3.4 * u;
  const logo = 8.5 * u;
  drawLogo(ctx, left, top, logo);
  ctx.fillStyle = C.ink;
  ctx.textAlign = 'left';
  ctx.font = font(800, 4.2 * u, STENCIL);
  spaced(ctx, 'CERTIFICAAT · VLOERTAAL', left + logo + 2 * u, top + logo / 2 + 0.6 * u, 0.06 * 4.2 * u);
  ctx.fillStyle = C.ink2;
  ctx.font = font(500, 1.5 * u);
  spaced(ctx, 'Nederlands voor het werk', left + logo + 2 * u, top + logo / 2 + 3 * u, 0.02 * 1.5 * u);
  // Unit tag: yellow, ink edge, slightly turned.
  ctx.font = font(800, 2.6 * u, STENCIL);
  const tag = `UNIT ${d.unitNo}`;
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

  // Measure the body first, so it is centred between head and foot (as the flex column on screen).
  const titleSize = 6.4 * u;
  ctx.font = font(800, titleSize);
  const titleLines = wrap(ctx, d.titleNl, width);
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
  const nameH = d.name ? 3 * u * 1.2 + 0.6 * u : 0;
  const titleH = titleLines.length * titleSize * 1.02;
  const subH = 0.9 * u + 2 * u * 1.3;
  const wordsH = 2.4 * u + 1.15 * u * 1.3 + 0.8 * u + chipRows.length * chipH + (chipRows.length - 1) * 0.8 * u;
  const metaH = 1.8 * u + 1.45 * u * 1.3;
  const bodyH = nameH + titleH + subH + wordsH + metaH;
  const bodyTop = top + logo + 1.6 * u;
  const footTop = py + ph - 2.4 * u - 1.1 * u * 1.3 - 1.4 * u - 9 * u;
  let y = bodyTop + Math.max(0, (footTop - bodyTop - bodyH) / 2);

  const label = (text: string, x: number, yy: number) => {
    ctx.fillStyle = C.kraftDark;
    ctx.font = font(700, 1.15 * u);
    spaced(ctx, text.toUpperCase(), x, yy, 0.14 * 1.15 * u);
  };

  if (d.name) {
    const base = y + 3 * u;
    label('Uitgereikt aan', left, base - 0.3 * u);
    ctx.font = font(700, 1.15 * u);
    const lw = ctx.measureText('UITGEREIKT AAN').width + 0.14 * 1.15 * u * 14;
    ctx.fillStyle = C.ink;
    ctx.font = font(700, 3 * u);
    ctx.fillText(d.name, left + lw + 1 * u, base);
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

  // Key words as chips.
  y += 2.4 * u;
  label('Kernwoorden', left, y + 1.15 * u);
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

  y += 1.8 * u;
  ctx.fillStyle = C.ink2;
  ctx.font = font(500, 1.45 * u);
  ctx.fillText(certMeta(d), left, y + 1.45 * u);

  // Foot: the date, the signature on its line, the stamp over the end of the line.
  const footBase = py + ph - 2.4 * u - 1.1 * u * 1.3 - 1.4 * u;
  label('Behaald op', left, footBase - 3.4 * u);
  ctx.fillStyle = C.ink;
  ctx.font = font(700, 2.1 * u);
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
  drawSeal(ctx, right - 6 * u, footBase - 4.6 * u, 16 * u, d.unitNo);

  // "Oefencertificaat — geen officieel diploma", small, centred at the bottom.
  ctx.fillStyle = C.ink3;
  ctx.font = font(500, 1.1 * u);
  ctx.textAlign = 'center';
  spaced(ctx, CERT_NOTE, px + pw / 2, py + ph - 2.4 * u, 0.04 * 1.1 * u);
  return canvas;
}

const toBlob = (canvas: HTMLCanvasElement) =>
  new Promise<Blob>((resolve, reject) => canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('no image'))), 'image/png'));

/**
 * Shares the certificate as a PNG (the phone's share sheet), or saves it when sharing files
 * is not supported. Returns what happened; 'cancelled' when the learner closed the share sheet.
 */
export async function shareCertificate(d: CertData, fileName: string): Promise<'shared' | 'saved' | 'cancelled'> {
  const blob = await toBlob(await drawCertificate(d));
  const file = new File([blob], fileName, { type: 'image/png' });
  const nav = navigator as Navigator & { canShare?: (data: ShareData) => boolean };
  if (nav.share && nav.canShare?.({ files: [file] })) {
    try {
      await nav.share({ files: [file], title: `Certificaat · ${d.titleNl}` });
      return 'shared';
    } catch (e) {
      if ((e as DOMException)?.name === 'AbortError') return 'cancelled';
      // Sharing failed for another reason: save the picture instead.
    }
  }
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 10_000);
  return 'saved';
}
