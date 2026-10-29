import { afterEach, describe, expect, it, vi } from 'vitest';
import { fill } from '../src/lib/offline';

/** A cache that keeps what is put in it, by URL. */
const fakeCache = () => {
  const stored = new Map<string, Response>();
  return { stored, cache: { match: async (u: string) => stored.get(u), put: async (u: string, r: Response) => void stored.set(u, r) } as unknown as Cache };
};
const later = (ms: number) => new Promise((r) => setTimeout(r, ms));

afterEach(() => vi.unstubAllGlobals());

describe('saving files for offline (fill)', () => {
  it('stores every file and counts each once', async () => {
    vi.stubGlobal('fetch', async () => new Response('abc'));
    const { stored, cache } = fakeCache();
    const seen: number[] = [];
    const urls = Array.from({ length: 10 }, (_, i) => `https://x/${i}.mp3`);
    expect(await fill(cache, urls, (n) => seen.push(n), new Set())).toBe(30);
    expect(stored.size).toBe(10);
    expect(seen).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('one missing file: the others stop, and nothing lands or counts after the error', async () => {
    let fetched = 0;
    vi.stubGlobal('fetch', async (u: string) => {
      fetched++;
      if (u.endsWith('/0.mp3')) return new Response('', { status: 404 });
      await later(5);
      return new Response('abc');
    });
    const { stored, cache } = fakeCache();
    let last = 0;
    const urls = Array.from({ length: 60 }, (_, i) => `https://x/${i}.mp3`);
    await expect(fill(cache, urls, (n) => (last = n), new Set())).rejects.toThrow('404');
    // The five already under way finish; no new ones start.
    expect(fetched).toBeLessThanOrEqual(6);
    const atError = stored.size;
    await later(30);
    expect(stored.size).toBe(atError);
    expect(last).toBe(0);
  });
});
