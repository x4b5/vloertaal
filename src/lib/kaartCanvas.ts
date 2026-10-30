import { sharePng } from './canvasShare';
import { C, drawLogo, fitName, font, fontsReady, HELP, RTL_LETTERS, spaced, STENCIL, toBlob, wrap } from './certCanvas';
import { KAART_NOTE, kaartRows, type KaartData } from './kaart';

/**
 * The coach card as a picture (src/lib/kaart.ts), drawn on a canvas like the certificate (same
 * paper, kraft border and stamp; src/lib/certCanvas.ts), in portrait so it fills a phone screen.
 * The height follows what is on it. Dutch, left to right, whatever the page's direction.
 */

const W = 1200;
const u = W / 100;
const MIN_H = 1500;

/** Lays the card out on `ctx`; draws only when `draw` (the first pass measures the height). */
function layout(ctx: CanvasRenderingContext2D, d: KaartData, H: number, draw: boolean): number {
  const pad = 3 * u;
  const px = pad, py = pad, pw = W - 2 * pad;
  const ph = H - 2 * pad;
  if (draw) {
    ctx.fillStyle = C.kraft;
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = C.paper;
    ctx.fillRect(px, py, pw, ph);
    ctx.strokeStyle = C.ink;
    ctx.lineWidth = 0.45 * u;
    ctx.strokeRect(px + 0.22 * u, py + 0.22 * u, pw - 0.45 * u, ph - 0.45 * u);
    ctx.strokeStyle = C.kraftLine;
    ctx.lineWidth = 0.2 * u;
    const ir = 1.4 * u;
    ctx.strokeRect(px + ir, py + ir, pw - 2 * ir, ph - 2 * ir);
  }
  const left = px + 6 * u;
  const right = px + pw - 6 * u;
  const width = right - left;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';

  // Head: the stamp, "VOORTGANG · VLOERTAAL" and today's date.
  let y = py + 5.5 * u;
  const logo = 13 * u;
  if (draw) drawLogo(ctx, left, y, logo, d.track === 'regels' ? 'VLOERTAAL · WERKEN IN NEDERLAND · ' : undefined);
  const tx = left + logo + 3 * u;
  if (draw) {
    ctx.fillStyle = C.ink;
    // As big as fits next to the stamp (the stencil font is narrow; a fallback font is not).
    const title = 'VOORTGANG · VLOERTAAL';
    ctx.font = font(800, 5.6 * u, STENCIL);
    const tw = ctx.measureText(title).width * 1.05;
    const size = Math.min(5.6 * u, (5.6 * u * (right - tx)) / tw);
    ctx.font = font(800, size, STENCIL);
    spaced(ctx, title, tx, y + 5.6 * u, 0.05 * size);
    ctx.fillStyle = C.ink2;
    ctx.font = font(600, 3 * u);
    ctx.fillText(d.date, tx, y + 10.4 * u);
  }
  y += logo + 4 * u;

  const label = (text: string, yy: number) => {
    if (!draw) return;
    ctx.fillStyle = C.kraftDark;
    ctx.font = font(700, 2.2 * u);
    spaced(ctx, text.toUpperCase(), left, yy, 0.12 * 2.2 * u);
  };
  const rule = (yy: number) => {
    if (!draw) return;
    ctx.strokeStyle = C.chipLine;
    ctx.lineWidth = 0.18 * u;
    ctx.beginPath();
    ctx.moveTo(left, yy);
    ctx.lineTo(right, yy);
    ctx.stroke();
  };

  // The name, when there is one: smaller to fit, or on two lines (as on the certificate).
  if (d.name) {
    const name = fitName(d.name, width, 6 * u, 3.6 * u, (text, size) => {
      ctx.font = font(700, size, HELP);
      return ctx.measureText(text).width;
    });
    label('Naam', y + 2.2 * u);
    y += 2.2 * u + 1.2 * u;
    ctx.font = font(700, name.size, HELP);
    const rtl = RTL_LETTERS.test(name.lines.join(''));
    for (const line of name.lines) {
      y += name.size * 1.05;
      if (draw) {
        ctx.fillStyle = C.ink;
        ctx.direction = rtl ? 'rtl' : 'ltr';
        ctx.textAlign = rtl ? 'right' : 'left';
        ctx.fillText(line, rtl ? left + ctx.measureText(line).width : left, y);
        ctx.direction = 'ltr';
        ctx.textAlign = 'left';
      }
      y += name.size * 0.15;
    }
    y += 2.6 * u;
  }

  // The rows: a small label, the value in bold, and the lines under it.
  for (const row of kaartRows(d)) {
    rule(y);
    y += 3.4 * u;
    label(row.label, y + 2.2 * u);
    y += 2.2 * u;
    if (row.value) {
      ctx.font = font(700, 3.8 * u);
      for (const line of wrap(ctx, row.value, width)) {
        y += 3.8 * u * 1.25;
        if (draw) {
          ctx.fillStyle = C.ink;
          ctx.font = font(700, 3.8 * u);
          ctx.fillText(line, left, y);
        }
      }
    }
    for (const sub of row.sub ?? []) {
      y += 1.4 * u;
      ctx.font = font(700, 2.9 * u);
      for (const line of wrap(ctx, sub.head, width)) {
        y += 2.9 * u * 1.3;
        if (draw) {
          ctx.fillStyle = C.ink;
          ctx.font = font(700, 2.9 * u);
          ctx.fillText(line, left, y);
        }
      }
      ctx.font = font(500, 2.9 * u);
      for (const line of wrap(ctx, sub.text, width)) {
        y += 2.9 * u * 1.3;
        if (draw) {
          ctx.fillStyle = C.ink2;
          ctx.font = font(500, 2.9 * u);
          ctx.fillText(line, left, y);
        }
      }
    }
    for (const more of row.more ?? []) {
      ctx.font = font(500, 2.9 * u);
      y += 0.8 * u;
      for (const line of wrap(ctx, more, width)) {
        y += 2.9 * u * 1.3;
        if (draw) {
          ctx.fillStyle = C.ink2;
          ctx.font = font(500, 2.9 * u);
          ctx.fillText(line, left, y);
        }
      }
    }
    y += 3.4 * u;
  }
  rule(y);

  // "Gemaakt op deze telefoon. Vloertaal bewaart niets.", small, at the bottom.
  const foot = Math.max(y + 9 * u, H - pad - 4.4 * u);
  if (draw) {
    ctx.fillStyle = C.ink3;
    ctx.font = font(500, 2.2 * u);
    ctx.textAlign = 'center';
    spaced(ctx, KAART_NOTE, px + pw / 2, foot, 0.03 * 2.2 * u);
    ctx.textAlign = 'left';
  }
  return foot + 4.4 * u + pad;
}

/** Draws the card on a new canvas. */
export async function drawKaart(d: KaartData): Promise<HTMLCanvasElement> {
  await fontsReady();
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = MIN_H;
  const ctx = canvas.getContext('2d')!;
  ctx.direction = 'ltr';
  const H = Math.max(MIN_H, Math.ceil(layout(ctx, d, MIN_H, false)));
  canvas.height = H;
  // (Setting the size resets the context.)
  ctx.direction = 'ltr';
  layout(ctx, d, H, true);
  return canvas;
}

/** The card as a PNG (drawn when the screen opens: it is what the screen shows, and a tap shares it at once). */
export async function kaartPng(d: KaartData): Promise<Blob> {
  const canvas = await drawKaart(d);
  if (typeof canvas.toBlob === 'function') return toBlob(canvas);
  // An old browser without canvas.toBlob: the same PNG from its data URL.
  const data = atob(canvas.toDataURL('image/png').split(',')[1]);
  const bytes = new Uint8Array(data.length);
  for (let i = 0; i < data.length; i++) bytes[i] = data.charCodeAt(i);
  return new Blob([bytes], { type: 'image/png' });
}

/** Shares the card as a PNG, or saves it where files cannot be shared (as the certificate). */
export async function shareKaart(png: Blob, fileName = 'vloertaal-voortgang.png'): Promise<'shared' | 'saved' | 'cancelled'> {
  return sharePng(png, fileName, 'Vloertaal · voortgang');
}

