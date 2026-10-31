import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { Word } from '../src/content/types';
import { cultureTips } from '../src/content/culture';
import { units } from '../src/content/curriculum';
import { TYPE_MAX_LETTERS, typable } from '../src/lib/typable';

/**
 * "Probeer het vandaag op je werk" (src/lib/workTry.ts): first time only, a lesson with a tip of
 * its own and a short sentence, at most once a day, and still once a day without storage. And
 * the typable rule (src/lib/typable.ts) it was split out with.
 */

const store = new Map<string, string>();
function storage(broken = false) {
  vi.stubGlobal('localStorage', {
    getItem: (k: string) => { if (broken) throw new Error('blocked'); return store.get(k) ?? null; },
    setItem: (k: string, v: string) => { if (broken) throw new Error('blocked'); store.set(k, v); },
    removeItem: (k: string) => void store.delete(k),
  });
}

/** A fresh module each test: the day kept in memory (no storage) starts empty. */
async function load() {
  vi.resetModules();
  return import('../src/lib/workTry');
}

beforeEach(() => storage());
afterEach(() => { vi.unstubAllGlobals(); store.clear(); });

const word = (nl: string): Word => ({ id: 'w.test', nl, en: 'test', emoji: '' }) as Word;

describe('typable', () => {
  it('takes a plain lower-case word, with or without its article', () => {
    expect(typable(word('de bus'))).toBe(true);
    expect(typable(word('het werk'))).toBe(true);
    expect(typable(word('pauze'))).toBe(true);
  });

  it('refuses capitals, hyphens and digits', () => {
    expect(typable(word('BSN'))).toBe(false);
    expect(typable(word('DigiD'))).toBe(false);
    expect(typable(word('de e-sigaret'))).toBe(false);
    expect(typable(word('24 uur'))).toBe(false);
  });

  it('counts letters without the article, up to TYPE_MAX_LETTERS', () => {
    const max = 'a'.repeat(TYPE_MAX_LETTERS);
    expect(typable(word(`de ${max}`))).toBe(true);
    expect(typable(word(`het ${max}`))).toBe(true);
    expect(typable(word(`${max}a`))).toBe(false);
  });
});

describe('workTryLine', () => {
  const lessonIds = units.flatMap((u) => u.lessons.map((l) => l.id));

  it('gives the lesson\'s own "Zeg het zo" sentence, when short enough', async () => {
    const { workTryLine, WORK_TRY_MAX_WORDS } = await load();
    const short = cultureTips.filter((t) => t.phrase.nl.trim().split(/\s+/).length <= WORK_TRY_MAX_WORDS);
    expect(short.length).toBeGreaterThan(0);
    for (const tip of short) expect(workTryLine(tip.lessonId)).toEqual({ id: tip.phrase.id, nl: tip.phrase.nl, en: tip.phrase.en });
  });

  it('gives nothing for a lesson without a tip, or with a long sentence', async () => {
    const { workTryLine, WORK_TRY_MAX_WORDS } = await load();
    const withTip = new Set(cultureTips.map((t) => t.lessonId));
    for (const id of lessonIds.filter((i) => !withTip.has(i))) expect(workTryLine(id)).toBeUndefined();
    for (const tip of cultureTips.filter((t) => t.phrase.nl.trim().split(/\s+/).length > WORK_TRY_MAX_WORDS)) {
      expect(workTryLine(tip.lessonId)).toBeUndefined();
    }
    expect(workTryLine('l.does-not-exist')).toBeUndefined();
  });
});

describe('workTryFor', () => {
  const lesson = 'l.hello';
  const other = 'l.people';

  it('shows on a lesson\'s first time only, not on a review', async () => {
    const { workTryFor } = await load();
    expect(workTryFor(lesson, false, '2026-10-31')).toBeUndefined();
    expect(workTryFor(lesson, true, '2026-10-31')?.nl).toBeTruthy();
  });

  it('shows at most once a day, and again the next day', async () => {
    const { workTryFor } = await load();
    expect(workTryFor(lesson, true, '2026-10-31')).toBeDefined();
    expect(store.get('vloertaal:work-try')).toBe('2026-10-31');
    expect(workTryFor(other, true, '2026-10-31')).toBeUndefined();
    expect(workTryFor(other, true, '2026-11-01')).toBeDefined();
  });

  it('does not use up the day on a lesson without a card', async () => {
    const { workTryFor } = await load();
    expect(workTryFor('l.does-not-exist', true, '2026-10-31')).toBeUndefined();
    expect(workTryFor(lesson, false, '2026-10-31')).toBeUndefined();
    expect(store.has('vloertaal:work-try')).toBe(false);
    expect(workTryFor(lesson, true, '2026-10-31')).toBeDefined();
  });

  it('without storage (private mode) still shows once a day, for this visit', async () => {
    storage(true);
    const { workTryFor } = await load();
    expect(workTryFor(lesson, true, '2026-10-31')).toBeDefined();
    expect(workTryFor(other, true, '2026-10-31')).toBeUndefined();
    expect(workTryFor(other, true, '2026-11-01')).toBeDefined();
  });
});
