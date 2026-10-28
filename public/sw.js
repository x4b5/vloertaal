// App files: network first, cache as fallback, so the app is always fresh online and still
// opens offline. Recorded sound of a unit the learner saved for offline use (the "Save for
// offline" chip under a unit, src/lib/offline.ts) is answered from its own cache first.
//
// Each build gets its own app cache: the build writes its id and its hashed files into BUILD and
// FILES below (vite.config.ts, swBuild), so this file changes with every deploy, the browser
// installs the new worker, and the old build's cache goes when it takes over (no old files pile
// up). OFFLINE keeps the learner's saved units across updates (the page manages it) and is only
// changed when its contents would no longer fit the app. AUDIO holds the clips played lately,
// at most AUDIO_MAX (the oldest go first).
const BUILD = 'dev';
const FILES = [];
const CACHE = `vloertaal-app-${BUILD}`;
const OFFLINE = 'vloertaal-offline-v1';
const AUDIO = 'vloertaal-audio-v1';
const AUDIO_MAX = 300;

const scope = () => self.registration.scope;
const isAudio = (url) => /\/audio(-el)?\/.+\.mp3$/.test(url.pathname);
const built = new Set(FILES.map((f) => new URL(f, scope()).href));
/** A hashed app file (Vite's assets/) of another build than this one. */
const otherBuild = (url) => url.pathname.includes('/assets/') && built.size > 0 && !built.has(url.href);
/** "assets/ar-DBz3KeQA.js" → "assets/ar.js": the same file in another build has another hash. */
const stem = (path) => path.replace(/-[\w-]{8}(\.\w+)$/, '$1');

/**
 * The page and the hashed files it names (Vite's assets/), so the app opens offline after the
 * first visit; and the newer copy of every app file the learner had from the build before (their
 * help language's file, the pictures, a region), so an update never leaves a file the app needs
 * offline behind. The emoji font's parts (fonts/, the same in every build) are copied over as
 * they are. Fails when the page or a file it names does not come: the worker before stays.
 */
async function cacheShell() {
  const cache = await caches.open(CACHE);
  const res = await fetch(scope(), { cache: 'no-cache' });
  if (!res.ok) throw new Error(`page ${res.status}`);
  const html = await res.clone().text();
  // Not the pages the start page links to (its other languages, hreflang, and the links under the
  // splash, src/lib/siteLinks.ts): those are pages of their own, not the app's files.
  const own = html.replace(/<link rel="alternate"[^>]*>/g, '').replace(/<section id="site-links"[\s\S]*?<\/section>/, '');
  const urls = [...own.matchAll(/(?:src|href)="([^"]+)"/g)]
    .map((m) => new URL(m[1], scope()))
    .filter((u) => u.origin === self.location.origin && !isAudio(u))
    .map((u) => u.href);
  // The build's own files must come; an icon, the manifest or the recorded-voice index may fail
  // without stopping the update (the index: without it offline, every speaker would fall silent).
  const optional = [...urls, new URL('audio-el/voices.json', scope()).href];
  await Promise.all(optional.map((u) => cache.add(u).catch((e) => { if (built.has(u)) throw e; })));
  const had = new Set();
  const fonts = new URL('fonts/', scope()).pathname;
  for (const key of await caches.keys()) {
    if (key === CACHE || !key.startsWith('vloertaal-') || key === OFFLINE || key === AUDIO) continue;
    const old = await caches.open(key);
    const audio = await caches.open(AUDIO);
    for (const req of await old.keys()) {
      const u = new URL(req.url);
      if (u.pathname.includes('/assets/')) had.add(stem(u.pathname));
      else if (u.pathname.startsWith(fonts)) await old.match(req).then((res) => res && cache.put(req, res)).catch(() => {});
      // Clips played before (the caches of earlier builds kept them with the app files): to AUDIO.
      else if (isAudio(u)) await old.match(req).then((res) => res && res.status === 200 && audio.put(req, res)).catch(() => {});
    }
    await trimAudio(audio).catch(() => {});
  }
  const carry = [...built].filter((u) => had.has(stem(new URL(u).pathname)) && !urls.includes(u));
  await Promise.all(carry.map((u) => cache.add(u).catch(() => {})));
  await cache.put(scope(), res);
}

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(cacheShell());
});

/** Old builds' caches go; in this build's cache, a hashed file this build does not list goes too. */
async function prune() {
  const keys = await caches.keys();
  await Promise.all(keys.filter((k) => k.startsWith('vloertaal-') && k !== CACHE && k !== OFFLINE && k !== AUDIO).map((k) => caches.delete(k)));
  const cache = await caches.open(CACHE);
  for (const req of await cache.keys()) if (otherBuild(new URL(req.url))) await cache.delete(req);
}

self.addEventListener('activate', (e) => {
  e.waitUntil(prune().catch(() => {}).then(() => self.clients.claim()));
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

/** At most AUDIO_MAX clips: the ones kept first go first. */
async function trimAudio(cache) {
  const keys = await cache.keys();
  await Promise.all(keys.slice(0, Math.max(0, keys.length - AUDIO_MAX)).map((k) => cache.delete(k)));
}

/**
 * Only whole, plain responses are kept (no partial audio, no errors). Also a newer build's file
 * while this worker still runs: the newer worker then takes it along (cacheShell). Never the page:
 * only cacheShell puts it, so the cached page always names files of its own build (a page of a
 * build whose worker never finished installing would open offline to files no cache has).
 */
function keep(req, res, name = CACHE) {
  const page = req.mode === 'navigate' || req.cache === 'no-store' || (res.headers.get('Content-Type') || '').includes('text/html');
  if (!page && res.ok && res.status === 200 && res.type === 'basic') {
    const copy = res.clone();
    caches.open(name).then((c) => c.put(req.url, copy).then(() => (name === AUDIO ? trimAudio(c) : undefined))).catch(() => {});
  }
  return res;
}

async function fromCache(req) {
  const navigate = req.mode === 'navigate';
  const hit = await caches.match(req.url, { ignoreSearch: navigate });
  if (hit) return hit;
  if (navigate) {
    // Another page of the site (/bouw/, /pl/ …) that is not kept: to the app. Its page can't stand
    // in at that address (its files are named relative to the start).
    if (new URL(req.url).pathname !== new URL(scope()).pathname) return Response.redirect(scope(), 302);
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
    // The page is saving a unit (it puts the file in OFFLINE itself): no second copy here.
    if (req.headers.get('x-vloertaal-save')) return await fetch(req);
    // A player asks for a part (Range: bytes=0-) and gets 206, which can't be kept: ask for the
    // whole clip (they are small), keep it, and answer the part asked for from it.
    const res = await fetch(req.url);
    keep(req, res, AUDIO);
    return res.ok ? ranged(res, req) : res;
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
  // A hashed app file the server no longer has (an old tab after an update): the cached copy, if
  // any. None: the page sees the failed file and loads the new version (src/lib/appUpdate.ts).
  e.respondWith(
    fetch(req)
      .then((res) => (!res.ok && url.pathname.includes('/assets/') ? caches.match(req.url).then((hit) => hit || res) : keep(req, res)))
      .catch(() => fromCache(req)),
  );
});
