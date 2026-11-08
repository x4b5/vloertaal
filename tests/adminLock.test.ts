import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { adminUnlocked, checkAdminPassword, lockAdmin } from '../src/lib/adminLock';

describe('admin lock', () => {
  const g = globalThis as { localStorage?: unknown };
  const before = g.localStorage;
  beforeEach(() => {
    const store = new Map<string, string>();
    g.localStorage = {
      getItem: (k: string) => store.get(k) ?? null,
      setItem: (k: string, v: string) => void store.set(k, v),
      removeItem: (k: string) => void store.delete(k),
    };
  });
  afterEach(() => { g.localStorage = before; });

  it('starts locked', () => {
    expect(adminUnlocked()).toBe(false);
  });

  it('rejects a wrong or empty password and stays locked', async () => {
    expect(await checkAdminPassword('verkeerd')).toBe(false);
    expect(await checkAdminPassword('   ')).toBe(false);
    expect(adminUnlocked()).toBe(false);
  });

  it('opens with the dev password and remembers it on this phone', async () => {
    expect(await checkAdminPassword(' testbeheer ')).toBe(true);
    expect(adminUnlocked()).toBe(true);
  });

  it('is case sensitive', async () => {
    expect(await checkAdminPassword('TestBeheer')).toBe(false);
  });

  it('never throws without storage', async () => {
    g.localStorage = before;
    expect(adminUnlocked()).toBe(false);
    expect(await checkAdminPassword('testbeheer')).toBe(true);
    expect(() => lockAdmin()).not.toThrow();
  });

  it('locks again', async () => {
    await checkAdminPassword('testbeheer');
    lockAdmin();
    expect(adminUnlocked()).toBe(false);
  });
});
