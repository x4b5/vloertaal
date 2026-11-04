// The app opens from the phone: once this build's page and every file it names are in its cache,
// the start page comes from there at once, without waiting for the network (on a slow line that
// was 3 to 10 s at the first start after each deploy, and there are several a day). Meanwhile the
// browser checks this file for a new version, as it does at every start: a new build's worker
// installs alongside, takes over, and the page reloads into it at a calm moment
// (src/lib/appUpdate.ts). A reload asks the network first, as before (the update's own reload too,
// so a new version still comes when its worker cannot install). Hashed files (Vite's assets/, a
// new name for every new version) come from the phone when any cache has them. Other files:
// network first, cache as fallback (also when the network stalls). Recorded sound comes from the
// phone first: a unit the learner saved for offline use (the "Save for offline" chip under a unit,
// src/lib/offline.ts), or a clip played before (AUDIO). The owner's request, 4 November 2026.
//
// Each build gets its own app cache: the build writes its id and its hashed files into BUILD and
// FILES below (vite.config.ts, swBuild), so this file changes with every deploy and the browser
// installs the new worker. When it takes over, the caches of the KEEP_BUILDS builds before stay
// with only their own hashed files, so a tab still running one of them never misses a file the
// server no longer has; older ones go (no old files pile up). OFFLINE keeps the learner's saved
// units across updates (the page manages it) and is only changed when its contents would no
// longer fit the app. AUDIO holds the clips played lately, at most AUDIO_MAX (the oldest go first).
const BUILD = 'dev';
const FILES = [];
const CACHE = `vloertaal-app-${BUILD}`;
const OFFLINE = 'vloertaal-offline-v1';
const AUDIO = 'vloertaal-audio-v1';
const AUDIO_MAX = 300;
/** The builds before this one whose own files stay (a tab open since then may still need one). */
const KEEP_BUILDS = 2;

const scope = () => self.registration.scope;
const isAudio = (url) => /\/audio(-el|-help)?\/.+\.mp3$/.test(url.pathname);
const built = new Set(FILES.map((f) => new URL(f, scope()).href));
/** A hashed app file (Vite's assets/) of another build than this one. */
const otherBuild = (url) => url.pathname.includes('/assets/') && built.size > 0 && !built.has(url.href);
/** "assets/ar-DBz3KeQA.js" → "assets/ar.js": the same file in another build has another hash. */
const stem = (path) => path.replace(/-[\w-]{8}(\.\w+)$/, '$1');
/** A hashed file: its name changes with its contents, so any copy under that name is the right one. */
const hashed = (url) => url.pathname.includes('/assets/');

/**
 * The app's own files a page names (same origin, no recorded sound). Not the pages the start page
 * links to (its other languages, hreflang, and the links under the splash, src/lib/siteLinks.ts):
 * those are pages of their own, not the app's files.
 */
function pageFiles(html) {
  const own = html.replace(/<link rel="alternate"[^>]*>/g, '').replace(/<section id="site-links"[\s\S]*?<\/section>/, '');
  return [...own.matchAll(/(?:src|href)="([^"]+)"/g)]
    .map((m) => new URL(m[1], scope()))
    .filter((u) => u.origin === self.location.origin && !isAudio(u))
    .map((u) => u.href);
}

/**
 * Into this build's cache. A hashed file another cache already has is the same file (React and the
 * picture kit, vite.config.ts STABLE_CHUNK; a help language that did not change): copied, not
 * downloaded again. Everything else from the network.
 */
async function add(cache, url) {
  if (hashed(new URL(url))) {
    const hit = await caches.match(url).catch(() => undefined);
    if (hit && hit.status === 200) return cache.put(url, hit);
  }
  return cache.add(url);
}

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
  const urls = pageFiles(await res.clone().text());
  // The build's own files must come, the recorded-voice index too (assets/voices-*.json, named in
  // the page: vite.config.ts voicesIndexFile; without it offline, every speaker would fall silent);
  // an icon, the manifest or the help-language recordings' list (src/lib/helpAudio.ts) may fail
  // without stopping the update.
  const optional = [...urls, new URL('audio-help/manifest.json', scope()).href];
  await Promise.all(optional.map((u) => add(cache, u).catch((e) => { if (built.has(u)) throw e; })));
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
  await Promise.all(carry.map((u) => add(cache, u).catch(() => {})));
  // The page last: a cache with the page has every file of the build it names (appPage).
  await cache.put(scope(), res);
}

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(cacheShell());
});

/**
 * Old builds' caches go, but for the KEEP_BUILDS made last before this one (caches.keys() lists
 * them in the order they were made): those keep only their hashed files, and only the ones no
 * newer cache has (caches.match finds those there). Never their page: a page found there would be
 * an old version. In this build's cache, a hashed file this build does not list goes too.
 */
async function prune() {
  const keys = (await caches.keys()).filter((k) => k.startsWith('vloertaal-') && k !== CACHE && k !== OFFLINE && k !== AUDIO);
  const kept = keys.filter((k) => k.startsWith('vloertaal-app-')).slice(-KEEP_BUILDS);
  await Promise.all(keys.filter((k) => !kept.includes(k)).map((k) => caches.delete(k)));
  const cache = await caches.open(CACHE);
  for (const req of await cache.keys()) if (otherBuild(new URL(req.url))) await cache.delete(req);
  const newer = new Set((await cache.keys()).map((req) => req.url));
  for (const key of kept.reverse()) {
    const old = await caches.open(key);
    for (const req of await old.keys()) {
      if (!hashed(new URL(req.url)) || newer.has(req.url)) await old.delete(req);
      else newer.add(req.url);
    }
  }
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

/** Whether this build's page and every file of this build it names are in its cache (once true, for the worker's whole life). */
let whole = null;

/**
 * This build's page from its cache, when the build is complete there (cacheShell puts the page
 * last; the check makes sure); else undefined (the first visit, an install cut off): the network.
 */
async function appPage() {
  const cache = await caches.open(CACHE);
  const page = await cache.match(scope());
  if (!page) return undefined;
  // (No ??= and the like in this file: it is not built, and old phones run it as it is.)
  if (!whole) whole = page.clone().text().then((html) => Promise.all(pageFiles(html).filter((u) => built.has(u)).map((u) => cache.match(u))).then((hits) => hits.every(Boolean)));
  if (await whole.catch(() => false)) return page;
  whole = null;
  return undefined;
}

/** The app's start page (any ?…), as opposed to the site's other pages (/bouw/, /pl/ …). */
const isStart = (url) => url.pathname === new URL(scope()).pathname || url.pathname === new URL('index.html', scope()).pathname;
/** Asked for anew: the reload button, or the page reloading into a new version (src/lib/appUpdate.ts). */
const anew = (req) => req.cache === 'reload' || req.cache === 'no-cache' || req.cache === 'no-store';

/** A link that connects but stalls (a bus, a greenhouse): after this long a cached copy answers. */
const STALL_MS = 4000;

/**
 * The network's answer (`net`), or, when it takes longer than STALL_MS, the copy `copy()` finds
 * (none: keep waiting for the network). A failed fetch rejects as before (the caller's fallback).
 */
function orCopy(net, copy) {
  return new Promise((resolve, reject) => {
    let settled = false;
    const settle = (fn, value) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      fn(value);
    };
    const timer = setTimeout(() => copy().then((hit) => hit && settle(resolve, hit), () => {}), STALL_MS);
    net.then((res) => settle(resolve, res), (e) => settle(reject, e));
  });
}

/**
 * What answers a stalled request: its own cached copy; for the start page, the app's page. Another
 * page of the site is waited for (the app's page can't stand in at its address).
 */
async function stallCopy(req, url) {
  const navigate = req.mode === 'navigate';
  const hit = await caches.match(req.url, { ignoreSearch: navigate });
  if (hit || !navigate || url.pathname !== new URL(scope()).pathname) return hit;
  return fromCache(req);
}

/**
 * A clip never changes under its address: a new recording has a new one (?v=<take>.<text>,
 * src/lib/audio.ts clipSrc). So one played before plays straight from the phone, without asking
 * the network first (on a slow line that was a wait of seconds at every tap).
 */
async function audio(req) {
  // Saved for offline: from the phone, no network needed (saved without a version: any version).
  const saved = await caches.open(OFFLINE).then((c) => c.match(req.url, { ignoreSearch: true }));
  if (saved) return ranged(saved, req);
  // The page is saving a unit (it puts the file in OFFLINE itself): no second copy here.
  if (req.headers.get('x-vloertaal-save')) return fetch(req).catch(() => Response.error());
  const played = await caches.open(AUDIO).then((c) => c.match(req.url)).catch(() => undefined);
  if (played) return ranged(played, req);
  // Not played before: the network. When it stalls or fails, any version of the clip kept on the phone.
  const older = () => caches.match(req.url, { ignoreSearch: true }).then((hit) => hit && ranged(hit, req));
  try {
    // A player asks for a part (Range: bytes=0-) and gets 206, which can't be kept: ask for the
    // whole clip (they are small), keep it, and answer the part asked for from it.
    const net = fetch(req.url).then((res) => {
      keep(req, res, AUDIO);
      return res.ok ? ranged(res, req) : res;
    });
    return await orCopy(net, older);
  } catch {
    return (await older()) || Response.error();
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
  // A hashed app file never changes (a new version has a new name): the cached copy, no network.
  // Also another build's (an old tab after an update: the server no longer has it; KEEP_BUILDS).
  // None: the network; none there either: the page sees the failed file and loads the new version
  // (src/lib/appUpdate.ts). Asked for the server's answer (src/lib/appUpdate.ts: is it still
  // there?): the network.
  if (hashed(url) && req.cache !== 'no-store') {
    e.respondWith(caches.match(req.url).then((hit) => hit || fetch(req).then((res) => keep(req, res))).catch(() => Response.error()));
    return;
  }
  const network = () => {
    const net = fetch(req).then((res) => keep(req, res));
    // A request that asks for the server's answer (the update check, src/lib/appUpdate.ts) waits for it.
    return (req.cache === 'no-store' ? net : orCopy(net, () => stallCopy(req, url))).catch(() => fromCache(req));
  };
  // Opening the app: this build's page from the phone, when it is all there (see the top).
  if (req.mode === 'navigate' && isStart(url) && !anew(req)) {
    e.respondWith(appPage().catch(() => undefined).then((page) => page || network()));
    return;
  }
  e.respondWith(network());
});
