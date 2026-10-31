import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { helpLanguages } from '../src/i18n/all';
import { uiEn } from '../src/i18n/types';
import nl from '../src/i18n/nl';

/**
 * Saving the progress fails (src/lib/progress.ts saveProgress: a full phone, blocked storage): no
 * longer silent. The learner gets one calm note per visit (src/components/SaveFailedNote.tsx) with
 * what to do, in their language.
 */

let full = false;
const stored = new Map<string, string>();
beforeEach(() => {
  vi.resetModules();
  full = false;
  stored.clear();
  vi.stubGlobal('localStorage', {
    getItem: (k: string) => stored.get(k) ?? null,
    setItem: (k: string, v: string) => {
      if (full) throw new DOMException('quota', 'QuotaExceededError');
      stored.set(k, v);
    },
    removeItem: (k: string) => stored.delete(k),
  });
});
afterEach(() => vi.unstubAllGlobals());

describe('saving the progress fails', () => {
  it('says so once per visit, with the progress that was not kept', async () => {
    const { emptyProgress, onSaveFailed, saveProgress } = await import('../src/lib/progress');
    const told: unknown[] = [];
    onSaveFailed((p) => told.push(p.helpLang));
    expect(saveProgress({ ...emptyProgress, helpLang: 'pl' })).toBe(true);
    expect(told).toEqual([]);
    full = true;
    expect(saveProgress({ ...emptyProgress, helpLang: 'pl' })).toBe(false);
    expect(saveProgress({ ...emptyProgress, helpLang: 'pl', xp: 5 })).toBe(false);
    expect(told).toEqual(['pl']);
  });

  it('also when it failed before the note was there (the first save)', async () => {
    const { emptyProgress, onSaveFailed, saveProgress } = await import('../src/lib/progress');
    full = true;
    expect(saveProgress({ ...emptyProgress, helpLang: 'ar' })).toBe(false);
    const told: unknown[] = [];
    onSaveFailed((p) => told.push(p.helpLang));
    expect(told).toEqual(['ar']);
    saveProgress(emptyProgress);
    expect(told).toEqual(['ar']);
  });

  it('nothing when saving works', async () => {
    const { emptyProgress, onSaveFailed, saveProgress } = await import('../src/lib/progress');
    const told: unknown[] = [];
    onSaveFailed((p) => told.push(p));
    for (let i = 0; i < 3; i++) saveProgress({ ...emptyProgress, xp: i });
    expect(told).toEqual([]);
  });

  it('has its text in plain Dutch, English and every help language', () => {
    expect(uiEn.saveFailed).toMatch(/not saved/);
    expect(nl.ui.saveFailed).toMatch(/^Je voortgang is niet bewaard\./);
    for (const l of helpLanguages) expect(l.ui.saveFailed, l.code).toBeTruthy();
  });
});
