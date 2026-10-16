// App files: network first, cache as fallback, so the app is always fresh online and still
// opens offline. Recorded sound of a unit the learner saved for offline use (the "Save for
// offline" chip under a unit, src/lib/offline.ts) is answered from its own cache first.
// Bump CACHE when the caching rules change; OFFLINE keeps the learner's saved units across
// updates and is only changed when its contents would no longer fit the app.
const CACHE = 'vloertaal-v3';
const OFFLINE = 'vloertaal-offline-v1';

const scope = () => self.registration.scope;
const isAudio = (url) => /\/audio(-el)?\/.+\.mp3$/.test(url.pathname);

/** The page and the hashed files it names (Vite's assets/), so the app opens offline after the first visit. */
async function cacheShell() {
  const cache = await caches.open(CACHE);
  const res = await fetch(scope(), { cache: 'no-cache' });
  if (!res.ok) return;
  const html = await res.clone().text();
  await cache.put(scope(), res);
  const urls = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
    .map((m) => new URL(m[1], scope()))
    .filter((u) => u.origin === self.location.origin && !isAudio(u))
    .map((u) => u.href);
  await Promise.all(urls.map((u) => cache.add(u).catch(() => {})));
}

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(cacheShell().catch(() => {}));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('vloertaal-') && k !== CACHE && k !== OFFLINE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

/** A cached file answered to a Range request (Safari asks for audio in parts): 206 with that slice. */
async function ranged(res, req) {
  const range = req.headers.get('range');
  const m = range && /bytes=(\d*)-(\d*)/.exec(range);
  if (!m) return res;
  const blob = await res.blob();
  const start = m[1] ? Number(m[1]) : Math.max(0, blob.size - Number(m[2]));
  const end = m[1] && m[2] ? Math.min(Number(m[2]), blob.size - 1) : blob.size - 1;
  return new Response(blob.slice(start, end + 1), {
    status: 206,
    headers: {
      'Content-Type': res.headers.get('Content-Type') || 'audio/mpeg',
      'Content-Range': `bytes ${start}-${end}/${blob.size}`,
      'Content-Length': String(end - start + 1),
      'Accept-Ranges': 'bytes',
    },
  });
}

/** Only whole, plain responses are kept (no partial audio, no errors). */
function keep(req, res) {
  if (res.ok && res.status === 200 && res.type === 'basic') {
    const copy = res.clone();
    caches.open(CACHE).then((c) => c.put(req.url, copy)).catch(() => {});
  }
  return res;
}

async function fromCache(req) {
  const navigate = req.mode === 'navigate';
  const hit = await caches.match(req.url, { ignoreSearch: navigate });
  if (hit) return hit;
  if (navigate) {
    const page = (await caches.match(scope())) || (await caches.match(new URL('index.html', scope()).href));
    if (page) return page;
  }
  return Response.error();
}

async function audio(req) {
  // Saved for offline: from the phone, no network needed.
  const saved = await caches.open(OFFLINE).then((c) => c.match(req.url));
  if (saved) return ranged(saved, req);
  try {
    const res = await fetch(req);
    // The page is saving a unit (it puts the file in OFFLINE itself): no second copy here.
    return req.headers.get('x-vloertaal-save') ? res : keep(req, res);
  } catch {
    const hit = await caches.match(req.url);
    return hit ? ranged(hit, req) : Response.error();
  }
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;
  if (isAudio(url)) {
    e.respondWith(audio(req));
    return;
  }
  // A hashed app file the server no longer has (an old tab after an update): the cached copy, if any.
  e.respondWith(
    fetch(req)
      .then((res) => (!res.ok && url.pathname.includes('/assets/') ? caches.match(req.url).then((hit) => hit || res) : keep(req, res)))
      .catch(() => fromCache(req)),
  );
});
