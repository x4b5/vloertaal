const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..');
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.woff2': 'font/woff2', '.json': 'application/json' };
const server = http.createServer((req, res) => { const f = path.join(ROOT, decodeURIComponent(req.url.split('?')[0])); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res); });
(async () => {
  await new Promise((r) => server.listen(0, '127.0.0.1', r));
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  await p.goto(`http://127.0.0.1:${server.address().port}/v3/shot1/index.html?sub=1&t=0`);
  p.on('console', (m) => { if (/closest|knots|end/.test(m.text())) console.log(m.text()); }); await p.evaluate(() => window.ready);
  const r = await p.evaluate(() => { const o = []; const dt = 1 / 120;
    for (let t = 5.1; t <= 9.0001; t += 0.05) { const a = window.camAt(t - dt), c = window.camAt(t + dt);
      o.push([t.toFixed(2), (a.p.distanceTo(c.p) / (2 * dt)).toFixed(2), (a.q.angleTo(c.q) * 180 / Math.PI / (2 * dt)).toFixed(1), c.fov.toFixed(1)].join(' ')); } return o; });
  console.log(r.join('\n')); await b.close(); server.close();
})();
