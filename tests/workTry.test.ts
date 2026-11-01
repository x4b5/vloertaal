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
    for (const tip of short) {
      const when = tip.situation.ask === 'which' ? {} : { when: { id: tip.situation.id, en: tip.situation.en } };
      expect(workTryLine(tip.lessonId)).toEqual({ id: tip.phrase.id, nl: tip.phrase.nl, en: tip.phrase.en, ...when });
    }
  });

  it('gives the moment as "Als", so it is an if-then plan (not for a "which is right?" situation)', async () => {
    const { workTryLine } = await load();
    const tip = cultureTips.find((t) => t.lessonId === 'l.speakup')!;
    expect(workTryLine('l.speakup')?.when).toEqual({ id: tip.situation.id, en: tip.situation.en });
    const which = cultureTips.find((t) => t.situation.ask === 'which' && t.phrase.nl.trim().split(/\s+/).length <= 12);
    if (which) expect(workTryLine(which.lessonId)?.when).toBeUndefined();
  });

  it('gives a Werkregels lesson its "Zo zeg je het" sentence, with its context as the moment (W1)', async () => {
    await import('../src/i18n/packs/nl');
    const { workTryLine } = await import('../src/lib/workTry');
    expect(workTryLine('r.l.ziek.3')).toEqual({ id: 'r.l.ziek.3.mo1', nl: 'Ik ben weer beter. Ik kan morgen weer komen werken.', en: '', whenNl: 'Je meldt je beter bij je leidinggevende.' });
    // A sentence with a character's name in it is not one to say yourself.
    expect(workTryLine('r.l.ziek.1')).toBeUndefined();
    // Too long (13 words).
    expect(workTryLine('r.l.ziek.2')).toBeUndefined();
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

describe('Gelukt? (a day after "Probeer het vandaag op je werk")', () => {
  const lessonWithLine = () => cultureTips.find((t) => t.phrase && t.phrase.nl.trim().split(/\s+/).length <= 12)!.lessonId;

  it('asks on a later day, not the same day, and only once', async () => {
    const m = await load();
    const lesson = lessonWithLine();
    const line = m.workTryFor(lesson, true, '2026-11-01');
    expect(line).toBeDefined();
    expect(m.geluktDue('2026-11-01')).toBeUndefined();
    expect(m.geluktDue('2026-11-02')?.nl).toBe(line!.nl);
    m.answerGelukt('ja');
    expect(m.geluktDue('2026-11-03')).toBeUndefined();
  });

  it('"Nog niet" asks once more the next day, then closes', async () => {
    const m = await load();
    const line = m.workTryFor(lessonWithLine(), true, '2026-11-01');
    expect(m.geluktDue('2026-11-02')?.nl).toBe(line!.nl);
    m.answerGelukt('nog-niet', '2026-11-02');
    expect(m.geluktDue('2026-11-02')).toBeUndefined();
    expect(m.geluktDue('2026-11-03')?.nl).toBe(line!.nl);
    m.answerGelukt('nog-niet', '2026-11-03');
    expect(m.geluktDue('2026-11-04')).toBeUndefined();
  });

  it('"Ja, gelukt" after a second chance closes it too', async () => {
    const m = await load();
    m.workTryFor(lessonWithLine(), true, '2026-11-01');
    m.answerGelukt('nog-niet', '2026-11-02');
    m.answerGelukt('ja', '2026-11-03');
    expect(m.geluktDue('2026-11-04')).toBeUndefined();
  });

  it('asks nothing without a card, or without storage', async () => {
    const m = await load();
    expect(m.geluktDue('2026-11-02')).toBeUndefined();
    storage(true);
    const n = await load();
    n.workTryFor(lessonWithLine(), true, '2026-11-01');
    expect(n.geluktDue('2026-11-02')).toBeUndefined();
  });

  it('ignores a damaged value', async () => {
    store.set('vloertaal:work-try-ask', '{not json');
    const m = await load();
    expect(m.geluktDue('2026-11-02')).toBeUndefined();
  });
});
