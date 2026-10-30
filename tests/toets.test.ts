import { readFileSync } from 'fs';
import { describe, expect, it } from 'vitest';
import { TOETS_PARTS, TOETS_SPEAK, TOETS_VERSIONS } from '../src/content/toets';
import { helpLanguageSources } from '../src/i18n/all';
import { GENDERED_LANGS, isPlural, uiEn } from '../src/i18n/types';
import { countPath } from '../src/lib/count';
import { emptyProgress, mergeBackup, parseBackup, type Progress, backupFile, replaceWithBackup } from '../src/lib/progress';
import {
  END_DAYS, INSTAP_UNTIL_LESSONS, recordToets, rightId, scoreOf, settingsMoment, speakSentence, toetsLater, toetsLine, toetsOffer, toetsQuestions,
} from '../src/lib/toets';
import { readToets } from '../src/lib/toetsState';

const day = (y: number, m: number, d: number) => new Date(y, m - 1, d, 12);
const ids = (v: 'A' | 'B') => TOETS_VERSIONS[v].flatMap((i) => [i.answer, ...i.others]);
/** The Dutch of every line a version shows or plays (a chat: the colleague's line and the three replies). */
const texts = (v: 'A' | 'B') => toetsQuestions(v).flatMap((q) => (q.part === 'sentences' ? [q.dialogue.prompt.nl, ...q.options.map((o) => o.nl)] : q.options.map((o) => o.nl)));

describe('"Wat ken je al?": the items', () => {
  it('A and B share no item, no wrong option and no line', () => {
    const a = new Set(ids('A'));
    expect(ids('B').filter((id) => a.has(id))).toEqual([]);
    const at = new Set(texts('A'));
    expect(texts('B').filter((t) => at.has(t))).toEqual([]);
  });

  it('A and B have as many questions per part, 16 to 20 in all, and pair up by part and level', () => {
    for (const part of TOETS_PARTS) {
      expect(TOETS_VERSIONS.A.filter((i) => i.part === part).length).toBe(TOETS_VERSIONS.B.filter((i) => i.part === part).length);
    }
    expect(TOETS_VERSIONS.A.length).toBeGreaterThanOrEqual(16);
    expect(TOETS_VERSIONS.A.length).toBeLessThanOrEqual(20);
    TOETS_VERSIONS.A.forEach((a, k) => {
      const b = TOETS_VERSIONS.B[k];
      expect([b.part, b.level]).toEqual([a.part, a.level]);
    });
  });

  it('within a version no line is used twice, and the speaking sentence is in neither', () => {
    for (const v of ['A', 'B'] as const) expect(new Set(ids(v)).size).toBe(ids(v).length);
    expect([...ids('A'), ...ids('B')]).not.toContain(TOETS_SPEAK);
  });

  it('every item is a line of the course, with three different options and one right answer', () => {
    for (const v of ['A', 'B'] as const) {
      for (const q of toetsQuestions(v, 7)) {
        expect(q.options).toHaveLength(3);
        expect(new Set(q.options.map((o) => o.id)).size).toBe(3);
        expect(new Set(q.options.map((o) => o.en.toLowerCase())).size).toBe(3);
        expect(q.options.filter((o) => o.id === rightId(q))).toHaveLength(1);
      }
    }
    expect(speakSentence().nl).toBe('Kunt u dat herhalen?');
  });

  it('every line has a recording in every voice (no line still to be recorded)', () => {
    const voices = JSON.parse(readFileSync('public/audio-el/voices.json', 'utf8')).voices as { said: Record<string, string> }[];
    const plain = (t: string) => t.trim().toLowerCase().replace(/[.!?…,]+$/, '');
    const lines = [...new Set([...texts('A'), ...texts('B'), speakSentence().nl])];
    for (const v of voices) {
      const said = new Set(Object.values(v.said).flatMap((t) => [t.trim(), plain(t)]));
      expect(lines.filter((t) => !said.has(t.trim()) && !said.has(plain(t)))).toEqual([]);
    }
  });

  it('every line has its translation in every help language', () => {
    const all = [...ids('A'), ...ids('B')].map((id) => toetsLine(id)?.id ?? id);
    for (const src of helpLanguageSources) {
      expect(all.filter((id) => !src.gloss[id]), src.code).toEqual([]);
    }
  });

  it('counts right answers per part', () => {
    const qs = toetsQuestions('A');
    const { right, of } = scoreOf(qs, qs.map((_, i) => i % 2 === 0));
    expect(of).toEqual({ listen: 6, words: 6, sentences: 6 });
    expect(right).toEqual({ listen: 3, words: 3, sentences: 3 });
  });
});

describe('"Wat ken je al?": when it is offered', () => {
  const taal: Progress = { ...emptyProgress, onboarded: true, helpLang: 'pl' };
  const lessons = (n: number) => Object.fromEntries(['l.hello', 'l.people', 'l.arrive', 'l.understand'].slice(0, n).map((id) => [id, { best: 1, times: 1 }]));

  it('offers the start to a new learner of the language track, not after a few lessons, not in the work-rules track', () => {
    expect(toetsOffer(taal, day(2026, 10, 30), 0)).toBe('instap');
    expect(toetsOffer({ ...taal, completed: lessons(INSTAP_UNTIL_LESSONS - 1) }, day(2026, 10, 30), 0)).toBe('instap');
    expect(toetsOffer({ ...taal, completed: lessons(INSTAP_UNTIL_LESSONS) }, day(2026, 10, 30), 0)).toBeNull();
    expect(toetsOffer({ ...taal, helpLang: 'nl' }, day(2026, 10, 30), 0)).toBeNull();
  });

  it('"Later" passes the start over; the end then still comes', () => {
    const later = toetsLater(taal, 'instap', day(2026, 10, 1), 0);
    expect(later.toets?.skipped).toBe('2026-10-01');
    expect(toetsOffer(later, day(2026, 10, 2), 0)).toBeNull();
    expect(toetsOffer(later, day(2026, 10, 29), 0)).toBe('eind');
  });

  it('offers the end after 28 days or 3 more topics, whichever comes first', () => {
    const score = { listen: 2, words: 3, sentences: 1 };
    const of = { listen: 6, words: 6, sentences: 6 };
    const done = recordToets(taal, 'instap', score, of, day(2026, 10, 1), 1);
    expect(done.toets?.instap?.version).toBe('A');
    expect(toetsOffer(done, day(2026, 10, 1 + END_DAYS - 1), 1)).toBeNull();
    expect(toetsOffer(done, day(2026, 10, 1 + END_DAYS), 1)).toBe('eind');
    expect(toetsOffer(done, day(2026, 10, 10), 3)).toBeNull();
    expect(toetsOffer(done, day(2026, 10, 10), 4)).toBe('eind');
    // "Later" on the end: a week.
    const wait = toetsLater(done, 'eind', day(2026, 10, 10), 4);
    expect(toetsOffer(wait, day(2026, 10, 16), 4)).toBeNull();
    expect(toetsOffer(wait, day(2026, 10, 17), 4)).toBe('eind');
    // Done: never again by itself; Settings offers the end (version B).
    const end = recordToets(done, 'eind', score, of, day(2026, 10, 29), 4);
    expect(end.toets?.eind?.version).toBe('B');
    expect(end.toets?.instap).toEqual(done.toets?.instap);
    expect(toetsOffer(end, day(2026, 12, 1), 9)).toBeNull();
    expect(settingsMoment(end, day(2026, 12, 1), 9)).toBe('eind');
    expect(settingsMoment(taal, day(2026, 12, 1), 0)).toBe('instap');
  });
});

describe('"Wat ken je al?": what is kept', () => {
  const run = { day: '2026-10-01', version: 'A', right: { listen: 2, words: 3, sentences: 1 }, of: { listen: 6, words: 6, sentences: 6 } };

  it('reads its own version only, and drops what it cannot read', () => {
    expect(readToets({ v: 1, instap: run, start: '2026-10-01', unitsAt: 2 })).toEqual({ v: 1, instap: run, start: '2026-10-01', unitsAt: 2 });
    expect(readToets({ v: 2, instap: run })).toBeUndefined();
    expect(readToets('x')).toBeUndefined();
    // A broken run (more right than asked, a bad day) is left out, the rest stays.
    expect(readToets({ v: 1, instap: { ...run, right: { ...run.right, listen: 9 } }, skipped: '2026-10-01' })).toEqual({ v: 1, skipped: '2026-10-01' });
    expect(readToets({ v: 1, eind: { ...run, day: 'gisteren' } })).toEqual({ v: 1 });
  });

  it('loads an old save without the test as before, and a save with it', async () => {
    const store = new Map<string, string>();
    (globalThis as { localStorage?: unknown }).localStorage = { getItem: (k: string) => store.get(k) ?? null, setItem: (k: string, v: string) => void store.set(k, v) };
    const { loadProgress } = await import('../src/lib/progress');
    store.set('vloertaal:v1', JSON.stringify({ onboarded: true, helpLang: 'pl', themeVersion: 2, completed: { 'l.hello': { best: 1, times: 1 } } }));
    const old = loadProgress();
    expect(old.toets).toBeUndefined();
    expect(old.completed['l.hello']).toEqual({ best: 1, times: 1 });
    store.set('vloertaal:v1', JSON.stringify({ onboarded: true, themeVersion: 2, completed: {}, toets: { v: 1, instap: run } }));
    expect(loadProgress().toets).toEqual({ v: 1, instap: run });
    store.set('vloertaal:v1', JSON.stringify({ onboarded: true, themeVersion: 2, completed: {}, toets: { v: 99 } }));
    expect('toets' in loadProgress()).toBe(false);
  });

  it('goes along in the backup, and adding a backup keeps both moments', () => {
    const p: Progress = { ...emptyProgress, toets: { v: 1, instap: run as never } };
    const back = parseBackup(backupFile(p, new Date()));
    expect(back?.toets).toEqual(p.toets);
    expect(replaceWithBackup(emptyProgress, back!).toets).toEqual(p.toets);
    const end = { ...run, day: '2026-10-29', version: 'B' };
    const merged = mergeBackup({ ...emptyProgress, toets: { v: 1, eind: end as never } }, back!);
    expect(merged.toets?.instap).toEqual(run);
    expect(merged.toets?.eind).toEqual(end);
  });
});

describe('"Wat ken je al?": counting and texts', () => {
  it('counts only that it started and ended, with the version, never a score', () => {
    expect(countPath('toets-start', { lesson: 'a' })).toBe('/e/toets-start/a');
    expect(countPath('toets-done', { lesson: 'b' })).toBe('/e/toets-done/b');
  });

  it('every new text has its x form in the languages with gender', () => {
    const keys = Object.keys(uiEn).filter((k) => k.startsWith('toets'));
    expect(keys.length).toBeGreaterThan(10);
    for (const src of helpLanguageSources.filter((s) => GENDERED_LANGS.includes(s.code as never))) {
      for (const k of keys) {
        const t = src.ui[k as keyof typeof uiEn];
        expect(t, `${src.code} ${k}`).toBeTruthy();
        if (typeof t === 'object' && !isPlural(t)) expect(t.x, `${src.code} ${k}`).toBeTruthy();
      }
    }
  });
});
