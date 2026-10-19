// v5: Jada is a woman: the Polish gloss of "Ben je klaar?" on her chat screens is "Skończyłaś?" (the app's f form),
// not "Skończyłeś?". Redraws that word on assets/shots/chat_pl(_ok).png in the app's font (Lexend), same box.
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..');
const server = http.createServer((req, res) => { const f = path.join(ROOT, decodeURIComponent(req.url.split('?')[0])); if (!fs.existsSync(f)) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': f.endsWith('.html') ? 'text/html' : f.endsWith('.css') ? 'text/css' : f.endsWith('.woff2') ? 'font/woff2' : 'image/png' }); fs.createReadStream(f).pipe(res); });
(async () => {
  await new Promise((r) => server.listen(0, '127.0.0.1', r));
  const port = server.address().port;
  fs.writeFileSync(path.join(ROOT, 'v5/tmp/fixpl.html'), `<!doctype html><link rel="stylesheet" href="../../lib/stage.css"><body></body>`);
  const b = await chromium.launch(); const p = await b.newPage();
  await p.goto(`http://127.0.0.1:${port}/v5/tmp/fixpl.html`);
  for (const [name, top] of [['chat_pl', 779], ['chat_pl_ok', 680]]) {
    const out = await p.evaluate(async ({ name, top }) => {
      await document.fonts.load('700 48px "Lexend V"', 'Skończyłaś?'); await document.fonts.load('600 48px "Lexend V"', 'Skończyłaś?'); await document.fonts.load('500 48px "Lexend V"', 'Skończyłaś?');
      const im = new Image(); im.src = `../../assets/shots/orig/${name}.png`; await im.decode();
      const c = document.createElement('canvas'); c.width = 1170; c.height = 2532; const g = c.getContext('2d'); g.drawImage(im, 0, 0);
      // calibrate: the weight and size whose "Skończyłeś?" is 306 px wide (the old word's ink box)
      let best = null;
      for (const w of [500, 600, 700]) for (let s = 40; s <= 56; s += 0.25) {
        g.font = `${w} ${s}px "Lexend V"`; const m = g.measureText('Skończyłeś?');
        const iw = m.actualBoundingBoxLeft + m.actualBoundingBoxRight, ih = m.actualBoundingBoxAscent + m.actualBoundingBoxDescent;
        const e = Math.abs(iw - 306) + Math.abs(ih - 51);
        if (!best || e < best.e) best = { e, w, s, asc: m.actualBoundingBoxAscent, left: m.actualBoundingBoxLeft };
      }
      g.font = `${best.w} ${best.s}px "Lexend V"`;
      // ink colour: the darkest pixel in the old word
      const d = g.getImageData(462, top, 306, 51).data; let ink = [255, 255, 255];
      for (let i = 0; i < d.length; i += 4) if (d[i] + d[i + 1] + d[i + 2] < ink[0] + ink[1] + ink[2]) ink = [d[i], d[i + 1], d[i + 2]];
      g.fillStyle = 'rgb(255,253,248)'; g.fillRect(456, top - 6, 320, 64);
      g.fillStyle = `rgb(${ink.join(',')})`; g.textBaseline = 'alphabetic';
      g.fillText('Skończyłaś?', 462 + best.left, top + best.asc);
      return { best, ink, url: c.toDataURL('image/png') };
    }, { name, top });
    fs.writeFileSync(path.join(ROOT, `assets/shots/${name}.png`), Buffer.from(out.url.split(',')[1], 'base64'));
    console.log(name, JSON.stringify(out.best), out.ink);
  }
  await b.close(); server.close();
})();
