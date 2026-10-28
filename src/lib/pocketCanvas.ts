import { roundRect, sharePng } from './canvasShare';
/**
 * The pocket card as a picture for the phone's gallery: drawn on a canvas (no libraries), portrait
 * 1080 wide. The word pictures are the same SVGs as on screen, serialised and drawn in; a phrase
 * without a drawing gets its emoji. Shared with navigator.share({ files }) where the phone can,
 * else downloaded as a PNG. Always the light paper look (it is a card, also on a dark phone).
 */

export interface PocketImageRow {
  nl: string;
  en: string;
  help?: string;
  /** The picture on screen (an <svg>), or an emoji to draw instead. */
  svg?: SVGSVGElement | null;
  emoji?: string;
}

export interface PocketImage {
  titleNl: string;
  titleHelp?: string;
  titleEn: string;
  helpDir: 'ltr' | 'rtl';
  rows: PocketImageRow[];
  /** Draw the English too. False when a help language is chosen and "Show English too" is off,
   *  as on screen; a line without a help translation keeps its English (the only text then). */
  english?: boolean;
  /** The line at the foot: what the app is about (default the Dutch course's). */
  footer?: string;
}

const W = 1080;
const PAD = 56;
const C = {
  kraft: '#ebd6b5',
  kraftLine: '#c8955b',
  paper: '#fffdf8',
  ink: '#1e2226',
  ink2: '#4a5058',
  ink3: '#6e737a',
  line: '#e4ddd0',
  yellow: '#ffc414',
};
const LEXEND = "'Lexend Variable', Lexend, system-ui, sans-serif";
const STENCIL = "'Big Shoulders Stencil Display', 'Lexend Variable', sans-serif";
const HELP = `${LEXEND}, 'Noto Sans Arabic', 'Noto Sans Ethiopic', 'Abyssinica SIL', sans-serif`;
const EMOJI = "'Apple Color Emoji', 'Noto Color Emoji', 'Segoe UI Emoji', sans-serif";
const font = (weight: number, size: number, family = LEXEND) => `${weight} ${size}px ${family}`;

/** Splits text into lines that fit `max` px (words kept whole; a single long word on its own line). */
function wrap(ctx: CanvasRenderingContext2D, text: string, max: number): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let cur = '';
  for (const w of words) {
    const next = cur ? `${cur} ${w}` : w;
    if (cur && ctx.measureText(next).width > max) {
      lines.push(cur);
      cur = w;
    } else cur = next;
  }
  if (cur) lines.push(cur);
  return lines;
}

/** An on-screen SVG as an image (sized to `px`), or null when it cannot be drawn. */
async function svgImage(svg: SVGSVGElement, px: number): Promise<HTMLImageElement | null> {
  try {
    const clone = svg.cloneNode(true) as SVGSVGElement;
    clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    clone.setAttribute('width', String(px));
    clone.setAttribute('height', String(px));
    const xml = new XMLSerializer().serializeToString(clone);
    const img = new Image();
    img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(xml)}`;
    await img.decode();
    return img;
  } catch {
    return null;
  }
}

interface Laid { row: PocketImageRow; nl: string[]; help: string[]; en: string[]; h: number }

const PIC = 168;
const NL = 52;
const HELP_PX = 38;
const EN = 30;

export async function drawPocketCard(d: PocketImage): Promise<HTMLCanvasElement> {
  if (typeof document !== 'undefined' && document.fonts) {
    await Promise.all([document.fonts.load(font(700, 40)), document.fonts.load(font(400, 40)), document.fonts.load(font(800, 40, STENCIL))]).catch(() => {});
  }
  const rtl = d.helpDir === 'rtl';
  const measure = document.createElement('canvas').getContext('2d')!;
  const textW = W - 2 * PAD - 2 * 36 - PIC - 36;
  const laid: Laid[] = d.rows.map((row) => {
    measure.font = font(700, NL);
    const nl = wrap(measure, row.nl, textW);
    measure.font = font(500, HELP_PX, HELP);
    const help = row.help ? wrap(measure, row.help, textW) : [];
    measure.font = font(400, EN);
    const en = d.english !== false || !help.length ? wrap(measure, row.en, textW) : [];
    const h = Math.max(PIC, nl.length * NL * 1.15 + help.length * HELP_PX * 1.3 + en.length * EN * 1.3 + 18) + 2 * 30;
    return { row, nl, help, en, h };
  });
  // The head: the title and the line under it wrap (a long title, a help-language title with the
  // English beside it), and the head grows with them.
  const headW = W - 2 * PAD - 2 * 36;
  measure.font = font(700, 58);
  const titleLines = wrap(measure, d.titleNl, headW);
  const sub = [d.titleHelp, d.english !== false || !d.titleHelp ? d.titleEn : ''].filter(Boolean).join('  ·  ');
  measure.font = font(400, 34, HELP);
  const subLines = sub ? wrap(measure, sub, headW) : [];
  const headH = 250 + (titleLines.length - 1) * 62 + Math.max(0, subLines.length - 1) * 44;
  const footH = 110;
  const H = Math.round(PAD + headH + laid.reduce((s, l) => s + l.h, 0) + footH + PAD);
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d')!;

  // Kraft board, paper card on it.
  ctx.fillStyle = C.kraft;
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = C.paper;
  roundRect(ctx, PAD / 2, PAD / 2, W - PAD, H - PAD, 28);
  ctx.fill();
  ctx.strokeStyle = C.kraftLine;
  ctx.lineWidth = 4;
  ctx.stroke();

  // Head: a yellow tab with "SPIEKKAARTJE", the unit title in Dutch, the help language, the English.
  const x0 = PAD + 36;
  const x1 = W - PAD - 36;
  let y = PAD + 40;
  ctx.font = font(800, 40, STENCIL);
  const tab = 'SPIEKKAARTJE';
  const tw = ctx.measureText(tab).width + 44;
  ctx.fillStyle = C.yellow;
  roundRect(ctx, x0, y, tw, 62, 10);
  ctx.fill();
  ctx.fillStyle = C.ink;
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'left';
  ctx.fillText(tab, x0 + 22, y + 33);
  y += 62 + 54;
  ctx.textBaseline = 'alphabetic';
  ctx.font = font(700, 58);
  for (const [i, line] of titleLines.entries()) {
    if (i) y += 62;
    ctx.fillText(line, x0, y);
  }
  y += 54;
  ctx.font = font(400, 34, HELP);
  ctx.fillStyle = C.ink2;
  for (const [i, line] of subLines.entries()) {
    if (i) y += 44;
    if (rtl && d.titleHelp) {
      ctx.direction = 'rtl';
      ctx.textAlign = 'right';
      ctx.fillText(line, x1, y);
      ctx.direction = 'ltr';
      ctx.textAlign = 'left';
    } else ctx.fillText(line, x0, y);
  }
  y = PAD + headH;

  for (const [i, l] of laid.entries()) {
    // A thin rule between the phrases.
    ctx.strokeStyle = C.line;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x0, y);
    ctx.lineTo(x1, y);
    ctx.stroke();
    const top = y + 30;
    const picX = rtl ? x1 - PIC : x0;
    ctx.fillStyle = '#f6efe3';
    roundRect(ctx, picX, top, PIC, PIC, 18);
    ctx.fill();
    const img = l.row.svg ? await svgImage(l.row.svg, PIC * 2) : null;
    if (img) ctx.drawImage(img, picX + 10, top + 10, PIC - 20, PIC - 20);
    else if (l.row.emoji) {
      ctx.font = font(400, 104, EMOJI);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(l.row.emoji, picX + PIC / 2, top + PIC / 2 + 6);
      ctx.textBaseline = 'alphabetic';
    } else {
      ctx.font = font(800, 92, STENCIL);
      ctx.fillStyle = C.ink3;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(String(i + 1), picX + PIC / 2, top + PIC / 2 + 4);
      ctx.textBaseline = 'alphabetic';
    }
    // The text column: Dutch large, the help language, the English small, all on the start side.
    const tx = rtl ? picX - 36 : x0 + PIC + 36;
    ctx.textAlign = rtl ? 'right' : 'left';
    let ty = top + NL * 0.85;
    ctx.fillStyle = C.ink;
    ctx.font = font(700, NL);
    for (const s of l.nl) { ctx.fillText(s, tx, ty); ty += NL * 1.15; }
    ty += 6;
    if (l.help.length) {
      ctx.font = font(500, HELP_PX, HELP);
      ctx.fillStyle = C.ink;
      ctx.direction = rtl ? 'rtl' : 'ltr';
      for (const s of l.help) { ctx.fillText(s, tx, ty); ty += HELP_PX * 1.3; }
      ctx.direction = 'ltr';
    }
    ctx.font = font(400, EN);
    ctx.fillStyle = C.ink3;
    for (const s of l.en) { ctx.fillText(s, tx, ty); ty += EN * 1.3; }
    y += l.h;
  }

  // Foot: the app's name, small.
  ctx.strokeStyle = C.line;
  ctx.beginPath();
  ctx.moveTo(x0, y);
  ctx.lineTo(x1, y);
  ctx.stroke();
  ctx.textAlign = 'center';
  ctx.fillStyle = C.ink3;
  ctx.font = font(600, 30);
  ctx.fillText(d.footer ?? 'Vloertaal · Nederlands voor het werk', W / 2, y + 66);
  return canvas;
}

const toBlob = (canvas: HTMLCanvasElement) =>
  new Promise<Blob>((resolve, reject) => canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('no image'))), 'image/png'));

/** Shares the card as a PNG (the phone's share sheet, to keep it in the gallery), or downloads it. */
export async function savePocketCard(d: PocketImage, fileName: string): Promise<'shared' | 'saved' | 'cancelled'> {
  return sharePng(await toBlob(await drawPocketCard(d)), fileName, `Spiekkaartje · ${d.titleNl}`);
}
