#!/usr/bin/env node
/**
 * Makes the app icons from the logo in src/components/Logo.tsx (Bram's head, the V on his hat).
 *
 * Opens /?shot=logo on the dev server, takes each variant's SVG as React draws it, strips the
 * app-only bits (classes, inline styles, aria), and writes:
 *
 *   public/icon.svg               small drawing, rounded   (SVG favicon)
 *   public/icon-full.svg          full head, rounded       (source of the large icons)
 *   public/icon-maskable.svg      full head, safe zone     (source of the maskable icon)
 *   public/icon-192.png, icon-512.png       full head, rounded corners  (manifest "any")
 *   public/icon-maskable-512.png             full bleed, safe zone       (manifest "maskable")
 *   public/apple-touch-icon.png  (180)       full bleed square (iOS rounds it)
 *   public/favicon-32.png, favicon-16.png    small drawing
 *   public/favicon.ico                       small drawing at 16, 32 and 48
 *
 * and puts the full head into index.html's splash (the .boot-label svg), so the first paint shows
 * the same logo as the app. Usage: `npx vite` in one terminal, then `node scripts/icons/make-icons.cjs`.
 */
const fs = require('fs');
const path = require('path');
let playwright;
try { playwright = require('playwright'); } catch { playwright = require('/opt/node22/lib/node_modules/playwright'); }

const base = process.argv.find((a) => a.startsWith('--base='))?.slice(7) ?? 'http://localhost:5173';
const root = path.resolve(__dirname, '..', '..');
const pub = (f) => path.join(root, 'public', f);

/** The SVG as a standalone file: no React-only attributes, ids made stable. */
function clean(svg, prefix) {
  let s = svg
    .replace(/^<svg[^>]*>/, '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">')
    .replace(/ (class|style|aria-hidden|focusable)="[^"]*"/g, '');
  const ids = [...new Set([...s.matchAll(/ id="([^"]+)"/g)].map((m) => m[1]))].sort((a, b) => b.length - a.length);
  ids.forEach((id, i) => { s = s.split(id).join(`${prefix}${i}`); });
  return s;
}

/** A Windows .ico with PNG images inside (Vista and later read these). */
function ico(images) {
  const head = Buffer.alloc(6 + 16 * images.length);
  head.writeUInt16LE(0, 0);
  head.writeUInt16LE(1, 2);
  head.writeUInt16LE(images.length, 4);
  let offset = head.length;
  images.forEach(({ size, png }, i) => {
    const at = 6 + 16 * i;
    head.writeUInt8(size >= 256 ? 0 : size, at);
    head.writeUInt8(size >= 256 ? 0 : size, at + 1);
    head.writeUInt8(0, at + 2);
    head.writeUInt8(0, at + 3);
    head.writeUInt16LE(1, at + 4);
    head.writeUInt16LE(32, at + 6);
    head.writeUInt32LE(png.length, at + 8);
    head.writeUInt32LE(offset, at + 12);
    offset += png.length;
  });
  return Buffer.concat([head, ...images.map((x) => x.png)]);
}

(async () => {
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage({ viewport: { width: 800, height: 600 }, reducedMotion: 'reduce' });
  await page.goto(`${base}/?shot=logo&px=120`);
  await page.waitForSelector('#icon-full-round svg');
  await page.evaluate(() => document.fonts.ready);
  const grab = (id) => page.$eval(`#icon-${id} svg`, (el) => el.outerHTML);
  const svgs = {
    full: clean(await grab('full-round'), 'f'),
    square: clean(await grab('full-square'), 's'),
    mask: clean(await grab('full-mask'), 'm'),
    small: clean(await grab('small-round'), 'v'),
  };
  fs.writeFileSync(pub('icon.svg'), `${svgs.small}\n`);
  fs.writeFileSync(pub('icon-full.svg'), `${svgs.full}\n`);
  fs.writeFileSync(pub('icon-maskable.svg'), `${svgs.mask}\n`);

  const render = async (svg, size) => {
    const p = await browser.newPage({ viewport: { width: size, height: size }, deviceScaleFactor: 1 });
    const sized = svg.replace('<svg ', `<svg width="${size}" height="${size}" `);
    await p.setContent(`<!doctype html><html><body style="margin:0;background:transparent">${sized}</body></html>`);
    const png = await p.screenshot({ clip: { x: 0, y: 0, width: size, height: size }, omitBackground: true });
    await p.close();
    return png;
  };
  const out = [
    ['icon-192.png', svgs.full, 192],
    ['icon-512.png', svgs.full, 512],
    ['icon-maskable-512.png', svgs.mask, 512],
    ['apple-touch-icon.png', svgs.square, 180],
    ['favicon-32.png', svgs.small, 32],
    ['favicon-16.png', svgs.small, 16],
  ];
  for (const [file, svg, size] of out) {
    fs.writeFileSync(pub(file), await render(svg, size));
    console.log('wrote', `public/${file}`, `${size}px`);
  }
  const icoImages = [];
  for (const size of [16, 32, 48]) icoImages.push({ size, png: await render(svgs.small, size) });
  fs.writeFileSync(pub('favicon.ico'), ico(icoImages));
  console.log('wrote public/favicon.ico 16/32/48');

  // index.html: the splash shows the full head at 64 px.
  const indexPath = path.join(root, 'index.html');
  const html = fs.readFileSync(indexPath, 'utf8');
  const splash = svgs.full.replace('<svg xmlns="http://www.w3.org/2000/svg" ', '<svg width="64" height="64" aria-hidden="true" focusable="false" ');
  const next = html.replace(/(<div class="boot-label" role="img" aria-label="Vloertaal">)<svg[\s\S]*?<\/svg>/, `$1${splash}`);
  if (next === html && !html.includes(splash)) throw new Error('index.html: splash logo not found');
  fs.writeFileSync(indexPath, next);
  console.log('updated index.html splash');
  await browser.close();
})().catch((e) => { console.error(e); process.exit(1); });
