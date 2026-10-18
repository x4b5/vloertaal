// node v3/rstill.cjs <shot dir> <outdir> t1,t2,... [sub]  — stills of a shot page
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..');
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.woff2': 'font/woff2', '.json': 'application/json' };
const server = http.createServer((req, res) => { const f = path.join(ROOT, decodeURIComponent(req.url.split('?')[0])); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res); });
(async () => {
  await new Promise((r) => server.listen(0, '127.0.0.1', r));
  const [shot, out, ts, sub] = process.argv.slice(2);
  fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  p.on('console', (m) => { if (!/GPU stall/.test(m.text())) console.log('page:', m.text()); }); p.on('pageerror', (e) => console.log('ERR', e.message));
  await p.goto(`http://127.0.0.1:${server.address().port}/${shot}/index.html?sub=${sub || 1}&t=0`);
  await p.evaluate(() => window.ready);
  for (const t of ts.split(',').map(Number)) {
    const t0 = Date.now();
    await p.evaluate((t) => { window.setTime(t); const g = document.getElementById('gl').getContext('webgl2'); g.readPixels(0, 0, 1, 1, g.RGBA, g.UNSIGNED_BYTE, new Uint8Array(4)); }, t);
    await p.screenshot({ path: path.join(out, `t${t.toFixed(2).replace('.', '_')}.png`) });
    console.log('t', t, (Date.now() - t0) + ' ms');
  }
  await b.close(); server.close();
})();
