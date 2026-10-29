/**
 * What the two pictures the learner can keep (the certificate, src/lib/certCanvas.ts, and the
 * pocket card, src/lib/pocketCanvas.ts) share: a rounded box on a canvas, and keeping the PNG.
 */

export function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

/**
 * Shares a PNG (the phone's share sheet, where the learner can save, send or print it), or saves
 * it when sharing files is not supported or fails (a computer; a share sheet the phone refused
 * because the picture took too long). 'cancelled' when the learner closed the share sheet.
 */
export async function sharePng(blob: Blob, fileName: string, title: string): Promise<'shared' | 'saved' | 'cancelled'> {
  const file = new File([blob], fileName, { type: 'image/png' });
  const nav = navigator as Navigator & { canShare?: (data: ShareData) => boolean };
  if (nav.share && nav.canShare?.({ files: [file] })) {
    try {
      await nav.share({ files: [file], title });
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
