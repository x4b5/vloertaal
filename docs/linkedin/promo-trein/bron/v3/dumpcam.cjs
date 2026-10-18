const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..');
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.woff2': 'font/woff2' };
const server = http.createServer((req, res) => { const f = path.join(ROOT, decodeURIComponent(req.url.split('?')[0])); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res); });
(async () => {
  await new Promise((r) => server.listen(0, '127.0.0.1', r));
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  p.on('console', (m) => console.log('page:', m.text()));
  await p.goto(`http://127.0.0.1:${server.address().port}/v2dump/index.html?sub=1`);
  await p.evaluate(() => window.ready);
  const d = await p.evaluate(() => window.camDump());
  fs.writeFileSync(path.join(__dirname, 'shot1', 'v2cam.json'), JSON.stringify(d));
  console.log('crossT', d.crossT, d.samples.length);
  await b.close(); server.close();
})();
