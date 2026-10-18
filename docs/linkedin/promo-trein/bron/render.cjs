// node render.cjs <shot> [--sub N] [--out dir] [--times 0,1.5,3] [--from F --to F] [--mp4 file]
//   Serves promo3d over http (ES modules), renders frames with headless Chromium (SwiftShader WebGL):
//   window.setTime(t) → screenshot. No --times: every frame at 30 fps (jpg q96), then optional ffmpeg encode.
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const http = require('http'), fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const ROOT = __dirname;
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf('--' + k); return i >= 0 ? args[i + 1] : d; };
const shot = args[0];
const sub = Number(opt('sub', 1)), out = path.resolve(opt('out', path.join(ROOT, 'frames', shot)));
const times = opt('times') ? opt('times').split(',').map(Number) : null;
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.woff2': 'font/woff2', '.json': 'application/json' };
const server = http.createServer((req, res) => {
  const f = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]));
  if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res);
});
(async () => {
  await new Promise((r) => server.listen(0, '127.0.0.1', r));
  const port = server.address().port;
  fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const VH = Number(opt('h', 1350));
  const p = await b.newPage({ viewport: { width: 1080, height: VH }, deviceScaleFactor: 1 });
  p.on('console', (m) => console.log('page:', m.text()));
  p.on('pageerror', (e) => console.log('ERR', e.message));
  await p.goto(`http://127.0.0.1:${port}/${shot}/index.html?sub=${sub}&h=${VH}`);
  await p.evaluate(() => window.ready);
  const dur = await p.evaluate(() => window.DURATION);
  const n = Math.round(dur * 30) + 1; // include the last frame at t = DURATION
  const from = Number(opt('from', 0)), to = Number(opt('to', n - 1));
  const list = times ? times.map((t) => [t, `t${t.toFixed(2).replace('.', '_')}.png`]) : Array.from({ length: to - from + 1 }, (_, i) => [(from + i) / 30, `f${String(from + i).padStart(4, '0')}.png`]);
  const t0 = Date.now();
  for (const [t, name] of list) {
    await p.evaluate((t) => { window.setTime(t); const c = document.getElementById('gl'); const g = c.getContext('webgl2'); g.readPixels(0, 0, 1, 1, g.RGBA, g.UNSIGNED_BYTE, new Uint8Array(4)); }, t);
    await p.screenshot({ path: path.join(out, name), type: 'png', timeout: 0 });
    if (times) console.log('ok', name);
  }
  console.log(`${list.length} frames in ${((Date.now() - t0) / 1000).toFixed(1)} s`);
  await b.close(); server.close();
  const mp4 = opt('mp4');
  if (mp4 && !times) {
    execFileSync('/usr/bin/ffmpeg', ['-y', '-loglevel', 'error', '-framerate', '30', '-i', path.join(out, 'f%04d.png'),
      '-c:v', 'libx264', '-preset', 'slow', '-crf', '14', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-r', '30', mp4], { stdio: 'inherit' });
    console.log('wrote', mp4);
  }
})();
