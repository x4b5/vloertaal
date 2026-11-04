import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { beforeEach, describe, expect, it } from 'vitest';
import { swSource } from '../vite.config';

/*
 * The service worker across deploys, in a sandbox with a fake network and a fake Cache Storage
 * (caches in the order they were made, as browsers keep them). The app opens from the phone once
 * its build is all there; a new build installs alongside without downloading what did not change;
 * a tab still running the build before finds its files although the server no longer has them.
 * The owner's request, 4 November 2026 (fase 3, "snel op een goedkope telefoon").
 */
const SCOPE = 'https://vloertaal.nl/';
type Entry = { body: string; type: string };

/** A build: its page names its app file, the stable file (React, vite.config.ts STABLE_CHUNK) and the stylesheet. */
function build(id: string) {
  const page = `<!doctype html><title>${id}</title><script type="module" src="./assets/index-${id}.js"></script><link rel="modulepreload" href="./assets/vendor-VVVVVVVV.js"><link rel="stylesheet" href="./assets/index-CCCCCCCC.css"><link rel="vloertaal-screen" href="./assets/Settings-${id}.js"><section id="site-links"><a href="./bouw/">Bouw</a></section>`;
  const files: Record<string, string> = {
    'index.html': page,
    [`assets/index-${id}.js`]: `app ${id}`,
    'assets/vendor-VVVVVVVV.js': 'react',
    'assets/index-CCCCCCCC.css': 'css',
    [`assets/Settings-${id}.js`]: `settings ${id}`,
  };
  return files;
}

let storage: Map<string, Map<string, Entry>>;
let server: Record<string, string>;
let asked: string[];

const response = (e: Entry) => new Response(e.body, { headers: { 'Content-Type': e.type } });
const typeOf = (url: string) => (url.endsWith('/') || url.endsWith('.html') ? 'text/html' : url.endsWith('.css') ? 'text/css' : 'text/javascript');

function network(url: string): Promise<Response> {
  asked.push(url);
  const path = new URL(url).pathname.slice(1) || 'index.html';
  const body = server[path];
  return Promise.resolve(body === undefined ? new Response('nf', { status: 404 }) : new Response(body, { headers: { 'Content-Type': typeOf(url) } }));
}

function fakeCache(name: string) {
  const m = storage.get(name)!;
  const urlOf = (r: string | { url: string }) => (typeof r === 'string' ? r : r.url);
  return {
    match: async (r: string | { url: string }, o?: { ignoreSearch?: boolean }) => {
      const u = urlOf(r);
      const key = o?.ignoreSearch ? [...m.keys()].find((k) => k.split('?')[0] === u.split('?')[0]) : m.has(u) ? u : undefined;
      return key === undefined ? undefined : response(m.get(key)!);
    },
    put: async (r: string | { url: string }, res: Response) => void m.set(urlOf(r), { body: await res.text(), type: res.headers.get('Content-Type') ?? '' }),
    add: async (r: string) => {
      const res = await network(r);
      if (!res.ok) throw new TypeError(`${res.status} ${r}`);
      m.set(r, { body: await res.text(), type: res.headers.get('Content-Type') ?? '' });
    },
    keys: async () => [...m.keys()].map((url) => ({ url })),
    delete: async (r: string | { url: string }) => m.delete(urlOf(r)),
  };
}

const caches = {
  open: async (name: string) => {
    if (!storage.has(name)) storage.set(name, new Map());
    return fakeCache(name);
  },
  keys: async () => [...storage.keys()],
  has: async (name: string) => storage.has(name),
  delete: async (name: string) => storage.delete(name),
  match: async (u: string, o?: { ignoreSearch?: boolean }) => {
    for (const name of storage.keys()) {
      const hit = await fakeCache(name).match(u, o);
      if (hit) return hit;
    }
    return undefined;
  },
};

/** A worker of this build, installed and active (the way the browser does it after a deploy). */
async function deploy(id: string) {
  server = build(id);
  const files = Object.entries(server).map(([fileName, source]) => ({ fileName, source }));
  const handlers: Record<string, (e: unknown) => void> = {};
  const self = { registration: { scope: SCOPE }, location: { origin: 'https://vloertaal.nl' }, addEventListener: (t: string, fn: (e: unknown) => void) => (handlers[t] = fn), skipWaiting() {}, clients: { claim: async () => {} } };
  runInNewContext(swSource(readFileSync('public/sw.js', 'utf8'), files), {
    self, caches, fetch: (r: string | { url: string }) => network(typeof r === 'string' ? r : r.url), Response, URL, Set, Promise, setTimeout, clearTimeout,
  });
  const during = (name: string) => new Promise<void>((done, fail) => handlers[name]({ waitUntil: (p: Promise<void>) => p.then(done, fail) }));
  const before = asked.length;
  await during('install');
  const installAsked = asked.slice(before);
  await during('activate');
  const ask = (url: string, mode = 'no-cors', cache = 'default') => new Promise<Response>((resolve) => {
    handlers.fetch({ request: { url, method: 'GET', mode, cache, headers: new Headers() }, respondWith: (p: Promise<Response>) => p.then(resolve) });
  });
  return { ask, installAsked };
}

const appCaches = () => [...storage.keys()].filter((k) => k.startsWith('vloertaal-app-'));

beforeEach(() => {
  storage = new Map();
  asked = [];
});

describe('opening the app', () => {
  it('comes from the phone once the build is all there, also with ?…, without asking the network', async () => {
    const { ask } = await deploy('AAAAAAAA');
    asked = [];
    const page = await ask(`${SCOPE}?taal=pl`, 'navigate');
    expect(await page.text()).toContain('<title>AAAAAAAA</title>');
    expect(await (await ask(`${SCOPE}assets/index-AAAAAAAA.js`)).text()).toBe('app AAAAAAAA');
    expect(asked).toEqual([]);
  });

  it('asks the network when a file of the build is missing from the phone', async () => {
    const { ask } = await deploy('AAAAAAAA');
    storage.get(appCaches()[0])!.delete(`${SCOPE}assets/vendor-VVVVVVVV.js`);
    asked = [];
    await ask(SCOPE, 'navigate');
    expect(asked).toContain(SCOPE);
  });

  it('asks the network first on a reload (also the reload into a new version)', async () => {
    const { ask } = await deploy('AAAAAAAA');
    server['index.html'] = 'newer page';
    asked = [];
    expect(await (await ask(SCOPE, 'navigate', 'no-cache')).text()).toBe('newer page');
    expect(asked).toEqual([SCOPE]);
  });

  it("asks the network for the site's other pages", async () => {
    const { ask } = await deploy('AAAAAAAA');
    server['bouw/index.html'] = 'bouw';
    asked = [];
    await ask(`${SCOPE}bouw/`, 'navigate');
    expect(asked).toEqual([`${SCOPE}bouw/`]);
  });
});

describe('a new deploy', () => {
  it('installs without downloading the file that did not change, and then opens the new version', async () => {
    await deploy('AAAAAAAA');
    const { ask, installAsked } = await deploy('BBBBBBBB');
    expect(installAsked).toContain(`${SCOPE}assets/index-BBBBBBBB.js`);
    expect(installAsked).not.toContain(`${SCOPE}assets/vendor-VVVVVVVV.js`);
    asked = [];
    expect(await (await ask(SCOPE, 'navigate')).text()).toContain('<title>BBBBBBBB</title>');
    expect(asked).toEqual([]);
  });

  it("keeps the old build's own files for a tab still running it, but never its page", async () => {
    await deploy('AAAAAAAA');
    const { ask } = await deploy('BBBBBBBB');
    asked = [];
    // The server has only the new build now: the old tab's screen still opens.
    expect(await (await ask(`${SCOPE}assets/Settings-AAAAAAAA.js`)).text()).toBe('settings AAAAAAAA');
    expect(await (await ask(`${SCOPE}assets/index-AAAAAAAA.js`)).text()).toBe('app AAAAAAAA');
    expect(asked).toEqual([]);
    // The old cache holds only what the new one does not: no page, no second copy of React.
    const old = storage.get(appCaches()[0])!;
    expect([...old.keys()].sort()).toEqual([`${SCOPE}assets/Settings-AAAAAAAA.js`, `${SCOPE}assets/index-AAAAAAAA.js`]);
    expect(await (await caches.match(SCOPE))!.text()).toContain('<title>BBBBBBBB</title>');
  });

  it('keeps two builds before, not more; the saved lessons and the clips stay', async () => {
    storage.set('vloertaal-offline-v1', new Map([[`${SCOPE}audio-el/noa/a.mp3`, { body: 'mp3', type: 'audio/mpeg' }]]));
    storage.set('vloertaal-audio-v1', new Map());
    for (const id of ['AAAAAAAA', 'BBBBBBBB', 'CCCCCCCC', 'DDDDDDDD']) await deploy(id);
    expect(appCaches()).toHaveLength(3);
    const { ask } = await deploy('EEEEEEEE');
    expect(appCaches()).toHaveLength(3);
    asked = [];
    expect(await (await ask(`${SCOPE}assets/index-DDDDDDDD.js`)).text()).toBe('app DDDDDDDD');
    expect(await (await ask(`${SCOPE}assets/index-CCCCCCCC.js`)).text()).toBe('app CCCCCCCC');
    expect(asked).toEqual([]);
    // Three builds back: gone from the phone and the server (the page reloads into the new version).
    expect((await ask(`${SCOPE}assets/index-BBBBBBBB.js`)).status).toBe(404);
    expect(storage.get('vloertaal-offline-v1')!.size).toBe(1);
    expect(storage.has('vloertaal-audio-v1')).toBe(true);
  });
});
