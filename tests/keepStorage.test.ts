import { afterEach, describe, expect, it, vi } from 'vitest';
import { keepStorageAgain } from '../src/lib/install';

const store = new Map<string, string>();
const flush = () => new Promise((r) => setTimeout(r, 0));

function stub(persisted: boolean) {
  const persist = vi.fn(() => Promise.resolve(true));
  vi.stubGlobal('navigator', { storage: { persisted: () => Promise.resolve(persisted), persist } });
  vi.stubGlobal('localStorage', {
    getItem: (k: string) => store.get(k) ?? null,
    setItem: (k: string, v: string) => void store.set(k, v),
  });
  return persist;
}

afterEach(() => { vi.unstubAllGlobals(); store.clear(); });

describe('keeping the progress on the phone', () => {
  it('asks again while not granted, at most once a week', async () => {
    const persist = stub(false);
    const day = 24 * 3600 * 1000;
    keepStorageAgain(10 * day); await flush();
    keepStorageAgain(12 * day); await flush();
    expect(persist).toHaveBeenCalledTimes(1);
    keepStorageAgain(17 * day); await flush();
    expect(persist).toHaveBeenCalledTimes(2);
  });

  it('does not ask once granted', async () => {
    const persist = stub(true);
    keepStorageAgain(); await flush();
    expect(persist).not.toHaveBeenCalled();
  });
});
