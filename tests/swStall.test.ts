import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { swSource } from '../vite.config';

/*
 * The service worker's answers, run in a sandbox with a fake network and cache: a link that
 * connects but stalls must not leave the app (or a speaker) waiting when a cached copy is there.
 */
const SCOPE = 'https://vloertaal.nl/';
const files = [
  { fileName: 'index.html', source: '<script src="./assets/index-AAAAAAAA.js"></script>' },
  { fileName: 'assets/index-AAAAAAAA.js', source: 'app' },
];

function worker(stored: Record<string, string>, network: (url: string) => Promise<Response>) {
  const handlers: Record<string, (e: unknown) => void> = {};
  const match = async (u: string) => (u in stored ? new Response(stored[u]) : undefined);
  const cache = { match: async () => undefined, put: async () => {}, keys: async () => [], add: async () => {}, delete: async () => true };
  const self = { registration: { scope: SCOPE }, location: { origin: 'https://vloertaal.nl' }, addEventListener: (t: string, fn: (e: unknown) => void) => (handlers[t] = fn), skipWaiting() {}, clients: { claim: async () => {} } };
  runInNewContext(swSource(readFileSync('public/sw.js', 'utf8'), files), {
    self, caches: { match, open: async () => cache, keys: async () => [], delete: async () => true },
    fetch: (r: string | { url: string }) => network(typeof r === 'string' ? r : r.url),
    Response, URL, Set, Promise, setTimeout, clearTimeout,
  });
  return (url: string, mode = 'no-cors', fetched?: string[], cache = 'default') => new Promise<Response>((resolve) => {
    const request = { url, method: 'GET', mode, cache, headers: new Headers() };
    handlers.fetch({ request, respondWith: (p: Promise<Response>) => p.then(resolve) });
    fetched?.push(url);
  });
}
const stall = () => new Promise<Response>(() => {});

beforeEach(() => vi.useFakeTimers());
afterEach(() => vi.useRealTimers());

describe('the service worker on a stalling link', () => {
  it('opens the cached page after a few seconds instead of waiting', async () => {
    const ask = worker({ [SCOPE]: 'cached page' }, stall);
    const page = ask(`${SCOPE}?taal=pl`, 'navigate');
    await vi.advanceTimersByTimeAsync(4100);
    expect(await (await page).text()).toBe('cached page');
  });

  it('waits for another page of the site: the app page cannot stand in at its address', async () => {
    let answer: (r: Response) => void = () => {};
    const ask = worker({ [SCOPE]: 'cached page' }, () => new Promise((r) => (answer = r)));
    const page = ask(`${SCOPE}bouw/`, 'navigate');
    await vi.advanceTimersByTimeAsync(10_000);
    answer(new Response('bouw page'));
    expect(await (await page).text()).toBe('bouw page');
  });

  it("waits for the server when the page asks for the server's answer (the update check)", async () => {
    let answer: (r: Response) => void = () => {};
    const ask = worker({ [SCOPE]: 'cached page' }, () => new Promise((r) => (answer = r)));
    const page = ask(SCOPE, 'cors', undefined, 'no-store');
    await vi.advanceTimersByTimeAsync(10_000);
    answer(new Response('new page'));
    expect(await (await page).text()).toBe('new page');
  });

  it('plays a clip played before from the phone', async () => {
    const clip = `${SCOPE}audio-el/noa/abc.mp3`;
    const ask = worker({ [clip]: 'mp3' }, stall);
    const res = ask(clip);
    await vi.advanceTimersByTimeAsync(4100);
    expect(await (await res).text()).toBe('mp3');
  });

  it('still takes the network when it answers in time, and waits for it when nothing is cached', async () => {
    const ask = worker({ [SCOPE]: 'cached page' }, async () => new Response('fresh page'));
    expect(await (await ask(SCOPE, 'navigate')).text()).toBe('fresh page');
    let answer: (r: Response) => void = () => {};
    const slow = worker({}, () => new Promise((r) => (answer = r)));
    const res = slow(`${SCOPE}manifest.webmanifest`);
    await vi.advanceTimersByTimeAsync(10_000);
    answer(new Response('late'));
    expect(await (await res).text()).toBe('late');
  });

  it("answers this build's hashed files from the cache, without the network", async () => {
    const asked: string[] = [];
    const ask = worker({ [`${SCOPE}assets/index-AAAAAAAA.js`]: 'app' }, async (u) => (asked.push(u), new Response('net')));
    expect(await (await ask(`${SCOPE}assets/index-AAAAAAAA.js`)).text()).toBe('app');
    expect(asked).toEqual([]);
  });
});
