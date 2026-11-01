import { afterEach, describe, expect, it, vi } from 'vitest';

/** The lesson's Continue says its word until it was used once (src/lib/goKnown.ts). */
const store = new Map<string, string>();
async function load(broken = false) {
  vi.resetModules();
  vi.stubGlobal('localStorage', {
    getItem: (k: string) => { if (broken) throw new Error('blocked'); return store.get(k) ?? null; },
    setItem: (k: string, v: string) => { if (broken) throw new Error('blocked'); store.set(k, v); },
  });
  return import('../src/lib/goKnown');
}

describe('Continue: its word only the first time', () => {
  afterEach(() => { vi.unstubAllGlobals(); store.clear(); });

  it('is unknown at first, and known after its first use, also on the next visit', async () => {
    const m = await load();
    expect(m.goKnown()).toBe(false);
    m.markGoKnown();
    expect(m.goKnown()).toBe(true);
    const again = await load();
    expect(again.goKnown()).toBe(true);
  });

  it('without storage it is remembered for this visit only', async () => {
    const m = await load(true);
    expect(m.goKnown()).toBe(false);
    m.markGoKnown();
    expect(m.goKnown()).toBe(true);
  });
});
