// node v3/turnshot.cjs <who> <out.png> [yaws…] — screenshots of the turnaround page, composited in a row with labels
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const http = require('http'), fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const ROOT = path.resolve(__dirname, '..');
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.woff2': 'font/woff2' };
const server = http.createServer((req, res) => { const f = path.join(ROOT, decodeURIComponent(req.url.split('?')[0])); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res); });
(async () => {
  await new Promise((r) => server.listen(0, '127.0.0.1', r));
  const [who, out, ...rest] = process.argv.slice(2);
  const opts = JSON.parse(process.env.OPTS || '{}');
  const yaws = rest.length ? rest.map(Number) : [0, 35, 90, 180];
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const W = opts.w || 640, H = opts.h || 900;
  const p = await b.newPage({ viewport: { width: W, height: H } });
  p.on('console', (m) => console.log('page:', m.text())); p.on('pageerror', (e) => console.log('ERR', e.message));
  await p.goto(`http://127.0.0.1:${server.address().port}/v3/turn/index.html?w=${W}&h=${H}`);
  await p.evaluate(() => window.ready);
  const files = [];
  for (const y of yaws) { await p.evaluate(([w, y, o]) => window.view(w, y, o), [who, y, opts]); const f = `/tmp/claude-0/-home-user/b64dbcc1-111b-5295-af1e-fb49ae726224/scratchpad/turn_${y}.png`; await p.screenshot({ path: f }); files.push(f); }
  await b.close(); server.close();
  execFileSync('python3', ['-c', `
import sys
from PIL import Image, ImageDraw, ImageFont
fs=sys.argv[2:]; ims=[Image.open(f).convert('RGB') for f in fs]
w,h=ims[0].size; s=Image.new('RGB',(w*len(ims),h+60),'#eef1f3'); d=ImageDraw.Draw(s)
try: font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',30)
except: font=ImageFont.load_default()
labels=${JSON.stringify(opts.labels || [])}
for i,im in enumerate(ims):
  s.paste(im,(i*w,60)); d.text((i*w+24,14), labels[i] if i < len(labels) else '', fill='#1e2226', font=font)
s.save(sys.argv[1])`, out, ...files]);
  console.log('wrote', out);
})();
