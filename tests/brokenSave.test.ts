import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import {
  backupFile,
  completeLesson,
  currentStreak,
  emptyProgress,
  forgetProgress,
  loadProgress,
  parseBackup,
  progressFrom,
  rawBackupFile,
  savedProgressText,
  settleStreak,
  withFirstDay,
  type Progress,
} from '../src/lib/progress';
import { isLanguageLoaded } from '../src/i18n';

/**
 * A save the app cannot fully read no longer stops it at its start (evaluation, 4 November 2026):
 * `completed: null` crashed the first screen (and its "Try again" crashed again), a number as
 * `lastDay` or an unknown help language kept the splash up for good. loadProgress and parseBackup
 * now share one check per field (src/lib/progress.ts FIELDS): a field that can't be read is
 * restored or left out, everything else stays.
 */

const today = new Date(2026, 10, 4, 12);
/** A returning learner's save, as the app writes it. */
const good: Progress = {
  ...emptyProgress,
  onboarded: true,
  helpLang: 'pl',
  gender: 'f',
  genderAsked: true,
  colourAsked: true,
  sector: 'none',
  country: 'nl',
  xp: 30,
  streak: 2,
  bestStreak: 5,
  lastDay: '2026-11-03',
  days: ['2026-11-02', '2026-11-03'],
  completed: { 'l.hello': { best: 1, times: 2 }, 'l.people': { best: 0.5, times: 1 } },
  cards: { 'w.helm': { box: 3, due: '2026-11-06' } },
};
const saved = (changes: Record<string, unknown>) => ({ ...good, ...changes });

describe('a save with a broken field', () => {
  it('completed: null starts with no lessons, and keeps the rest (it crashed the first screen)', () => {
    const p = progressFrom(saved({ completed: null }));
    expect(p.completed).toEqual({});
    expect(p).toMatchObject({ onboarded: true, helpLang: 'pl', xp: 30, streak: 2, cards: good.cards });
    // What crashed before: the first day worked out from the lessons, and a lesson done after it.
    expect(() => withFirstDay(p, today)).not.toThrow();
    expect(completeLesson(p, 'l.hello', 1, false, today).completed['l.hello']).toEqual({ best: 1, times: 1 });
  });

  it('a number as lastDay is no day, and the rest stays (the splash stayed up for good)', () => {
    const p = progressFrom(saved({ lastDay: 20261103 }));
    expect(p.lastDay).toBeNull();
    expect(p).toMatchObject({ streak: 2, xp: 30, completed: good.completed, days: good.days });
    expect(() => settleStreak(p, today)).not.toThrow();
    expect(currentStreak(p, today)).toBe(0);
  });

  it('a help language this app does not know is "not chosen yet": the language page comes again', () => {
    const p = progressFrom(saved({ helpLang: 'xx' }));
    expect(p.helpLang).toBeNull();
    expect(p.onboarded).toBe(false);
    // What the first run asked stays answered, and the progress stays.
    expect(p).toMatchObject({ sector: 'none', country: 'nl', genderAsked: true, colourAsked: true, xp: 30, completed: good.completed });
    // No language to wait for (it looped: a file that never comes for an unknown code).
    expect(isLanguageLoaded(p.helpLang)).toBe(true);
    // English only (null), chosen on purpose, stays.
    expect(progressFrom(saved({ helpLang: null }))).toMatchObject({ helpLang: null, onboarded: true });
  });

  it('xp, the cards and the lessons: what can be read stays, the rest goes', () => {
    expect(progressFrom(saved({ xp: 'veel' })).xp).toBe(0);
    expect(progressFrom(saved({ cards: [1, 2] })).cards).toBeUndefined();
    const p = progressFrom(saved({
      cards: { 'w.helm': { box: 3, due: '2026-11-06' }, 'w.a': null, 'w.b': { box: 'twee', due: '2026-11-06' }, 'w.c': { box: 9, due: '2026-11-06' }, 'w.d': { box: 2, due: 'morgen' } },
      completed: { 'l.hello': { best: 1, times: 2 }, 'l.a': null, 'l.b': { best: 'goed', times: 1 }, 'l.c': { best: 1.5, times: 1 }, 'l.d': { best: 1, times: -1 } },
      days: ['2026-11-03', 5, 'gisteren', '2026-11-02'],
      certs: { 'u.firstday': '2026-11-01', 'u.x': 7 },
      freezes: 9,
    }));
    expect(p.cards).toEqual({ 'w.helm': { box: 3, due: '2026-11-06' } });
    expect(p.completed).toEqual({ 'l.hello': { best: 1, times: 2 } });
    expect(p.days).toEqual(['2026-11-02', '2026-11-03']);
    expect(p.certs).toEqual({ 'u.firstday': '2026-11-01' });
    expect(p.freezes).toBe(2);
  });

  it('settings that can\'t be read get their default; a field of a newer version stays as it is', () => {
    const p = progressFrom(saved({ onboarded: 'ja', textSize: 'huge', calm: 3, quiet: 'yes', voice: 7, gender: 'w', newerField: { a: 1 } }));
    expect(p.onboarded).toBe(false);
    expect(p.textSize).toBeUndefined();
    expect(p.calm).toBeUndefined();
    expect(p.quiet).toBeUndefined();
    expect(p.voice).toBeNull();
    expect(p.gender).toBeUndefined();
    expect((p as unknown as Record<string, unknown>).newerField).toEqual({ a: 1 });
  });

  it('something that is not a saved progress at all is a fresh start', () => {
    for (const s of [null, 7, 'tekst', [1, 2]]) expect(progressFrom(s)).toEqual(emptyProgress);
  });

  it('a save the app wrote itself comes back the same, field for field', () => {
    const full: Progress = withFirstDay({
      ...good,
      theme: 'haven', voice: 'piper:nl_NL-mls-medium', quiet: true, textSize: 'large', calm: 'on', tempo: 'normal',
      rulesNotice: true, reviewDay: '2026-11-03', lessonDay: '2026-11-03', lastLesson: 'l.people', freezes: 1, rest: ['2026-10-30'],
      certs: { 'u.firstday': '2026-11-01' }, currentUnit: 'u.firstday', pickedUnit: 'u.firstday', phrasesShown: true,
      parked: { reviewDay: '2026-11-01', currentUnit: 'r.zoeken' }, noticesSeen: ['n1'], bridgeSeen: true,
      completed: { ...good.completed, 'l.shift': { best: 0, times: 0, check: '2026-11-02' } },
    }, today);
    expect(progressFrom(JSON.parse(JSON.stringify(full)))).toEqual(full);
  });
});

describe('the phone\'s save and a backup file are read with the same checks', () => {
  it('a field that is broken in both is read the same in both', () => {
    const messy = saved({ completed: { 'l.hello': { best: 1, times: 2 }, 'l.people': { best: 7, times: 1 } }, lastDay: 20261103, xp: -4, cards: { 'w.helm': { box: 3, due: '2026-11-06' }, 'w.x': { box: 0, due: '2026-11-06' } }, rest: 'gisteren' });
    const here = progressFrom(messy);
    const file = parseBackup(JSON.stringify({ app: 'vloertaal', version: 2, track: 'taal', progress: messy }))!;
    for (const k of ['completed', 'xp', 'streak', 'lastDay', 'cards', 'rest', 'days'] as const) {
      expect(file[k] ?? emptyProgress[k], k).toEqual(here[k]);
    }
  });
});

describe('the backup when the app cannot start ("Bewaar je voortgang")', () => {
  it('holds what was saved, exactly, and "Zet terug" reads what can be read of it', () => {
    const raw = JSON.stringify(saved({ completed: null, lastDay: 20261103 }));
    const file = JSON.parse(rawBackupFile(raw, today));
    expect(file).toMatchObject({ app: 'vloertaal', version: 2, track: 'taal', raw });
    const back = parseBackup(rawBackupFile(raw, today))!;
    expect(back).not.toBeNull();
    expect(back.completed).toEqual({});
    expect(back).toMatchObject({ xp: 30, streak: 2, cards: good.cards });
    // A good save gives the same file as Settings' backup (and the text beside it).
    expect(parseBackup(rawBackupFile(JSON.stringify(good), today))).toEqual(parseBackup(backupFile(good, today)));
  });

  it('keeps a save that is not even JSON as text', () => {
    const file = JSON.parse(rawBackupFile('{kapot', today));
    expect(file.raw).toBe('{kapot');
    expect(file.progress).toBeUndefined();
    expect(parseBackup(rawBackupFile('{kapot', today))).toBeNull();
  });
});

describe('loading from the phone', () => {
  const store = new Map<string, string>();
  const g = globalThis as { localStorage?: unknown };
  let before: unknown;
  beforeEach(() => {
    before = g.localStorage;
    store.clear();
    g.localStorage = { getItem: (k: string) => store.get(k) ?? null, setItem: (k: string, v: string) => void store.set(k, v), removeItem: (k: string) => void store.delete(k) };
  });
  afterEach(() => { g.localStorage = before; });

  it('reads the reported cases without throwing, and "Opnieuw beginnen" forgets only the progress', () => {
    for (const broken of [{ completed: null }, { lastDay: 20261103 }, { helpLang: 'xx' }]) {
      store.set('vloertaal:v1', JSON.stringify(saved(broken)));
      expect(() => withFirstDay(settleStreak(loadProgress(), today).progress, today)).not.toThrow();
      expect(loadProgress().xp).toBe(30);
    }
    store.set('vloertaal:v1', '{kapot');
    expect(loadProgress()).toEqual(emptyProgress);
    expect(savedProgressText()).toBe('{kapot');
    store.set('vloertaal:count-off', '1');
    forgetProgress();
    expect(savedProgressText()).toBeNull();
    // "Anoniem meetellen" switched off stays off.
    expect(store.get('vloertaal:count-off')).toBe('1');
  });
});
