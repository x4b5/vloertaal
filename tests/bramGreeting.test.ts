import { describe, expect, it } from 'vitest';
import { greetedToday, greetingFor, greetingInput, rememberGreeted, resultLineFor, type GreetingInput } from '../src/lib/greeting';
import { greetingText } from '../src/components/BramSays';
import { dayKey, emptyProgress, type Progress } from '../src/lib/progress';
import { reminderIcs, REMINDER_TITLE } from '../src/lib/reminder';
import { uiEn } from '../src/i18n/types';
import '../src/i18n/all';
import { getHelpLanguage } from '../src/i18n';

const base: GreetingInput = { done: false, missed: false, first: true, due: 0, streak: 0 };
const today = new Date(2026, 9, 15, 9, 0);
const ago = (n: number) => dayKey(new Date(2026, 9, 15 - n));

describe('Bram greets on the home screen', () => {
  it('first visit of the day: good to see you', () => {
    expect(greetingFor(base)).toEqual({ kind: 'hello' });
    // A single day is not a streak worth naming yet.
    expect(greetingFor({ ...base, streak: 1 })).toEqual({ kind: 'hello' });
  });

  it('after missed days: welcome back (on the first visit of the day)', () => {
    expect(greetingFor({ ...base, missed: true, due: 5 })).toEqual({ kind: 'back' });
    expect(greetingFor({ ...base, missed: true, first: false, due: 5 })).toEqual({ kind: 'due', n: 5 });
  });

  it('a streak of two days or more: day N (first visit, or later with nothing to repeat)', () => {
    expect(greetingFor({ ...base, streak: 7 })).toEqual({ kind: 'streak', n: 7 });
    expect(greetingFor({ ...base, first: false, streak: 7 })).toEqual({ kind: 'streak', n: 7 });
  });

  it('later visits with words due: N words to repeat today', () => {
    expect(greetingFor({ ...base, first: false, due: 6, streak: 7 })).toEqual({ kind: 'due', n: 6 });
    expect(greetingFor({ ...base, first: false })).toEqual({ kind: 'hello' });
  });

  it('done today wins over everything: see you tomorrow', () => {
    expect(greetingFor({ done: true, missed: true, first: true, due: 6, streak: 9 })).toEqual({ kind: 'done' });
  });

  it('reads the saved progress: done today, missed days, and the streak as the top bar shows it', () => {
    const p = (patch: Partial<Progress>): Progress => ({ ...emptyProgress, ...patch });
    expect(greetingInput(p({}), today, 0, true)).toEqual({ done: false, missed: false, first: true, due: 0, streak: 0 });
    expect(greetingInput(p({ lastDay: ago(0), streak: 3 }), today, 2, false)).toMatchObject({ done: true, missed: false, streak: 3, due: 2 });
    expect(greetingInput(p({ lastDay: ago(1), streak: 4 }), today, 0, true)).toMatchObject({ done: false, missed: false, streak: 4 });
    // Three days away (the streak stopped): missed, streak 0, so "welcome back".
    const back = greetingInput(p({ lastDay: ago(3), streak: 0 }), today, 4, true);
    expect(back).toMatchObject({ missed: true, streak: 0 });
    expect(greetingFor(back).kind).toBe('back');
  });

  it('remembers the first visit of the day on this phone', () => {
    const g = globalThis as { localStorage?: unknown };
    const before = g.localStorage;
    const store = new Map<string, string>();
    g.localStorage = { getItem: (k: string) => store.get(k) ?? null, setItem: (k: string, v: string) => void store.set(k, v) };
    try {
      expect(greetedToday(today)).toBe(false);
      rememberGreeted(today);
      expect(greetedToday(today)).toBe(true);
      expect(greetedToday(new Date(2026, 9, 16, 8, 0))).toBe(false);
    } finally {
      g.localStorage = before;
    }
    // No storage at all (private mode): every visit is the first, nothing throws.
    expect(greetedToday(today)).toBe(false);
    expect(() => rememberGreeted(today)).not.toThrow();
  });

  it('says the line in the help language, with the number and the singular', () => {
    const pl = getHelpLanguage('pl', 'f');
    expect(greetingText({ kind: 'due', n: 6 }).en).toBe('6 words to repeat today.');
    expect(greetingText({ kind: 'due', n: 1 }).en).toBe('1 word to repeat today.');
    expect(greetingText({ kind: 'streak', n: 7 }, pl).help).toBe('Dzień 7 z rzędu.');
    expect(greetingText({ kind: 'done' }, pl).help).toBe('Na dziś zrobiłaś wszystko. Do jutra.');
    expect(greetingText({ kind: 'hello' }).en).toBe(uiEn.bramHello);
  });
});

describe('Bram on the result screen and in the calendar', () => {
  it('one calm line, never a score judgement', () => {
    expect(resultLineFor('lesson', 11, 11)).toBe('bramPerfect');
    expect(resultLineFor('lesson', 9, 11)).toBe('bramGood');
    expect(resultLineFor('lesson', 3, 11)).toBe('bramHard');
    expect(resultLineFor('lesson', 0, 0)).toBe('bramGood');
    expect(resultLineFor('daily', 2, 8)).toBe('bramReview');
    expect(resultLineFor('review', 8, 8)).toBe('bramReview');
  });

  it('the calendar reminder is in Bram’s voice', () => {
    expect(REMINDER_TITLE).toBe('Bram: tijd voor je Nederlands (10 minuten)');
    expect(reminderIcs('18:00', 'x', today)).toContain('DESCRIPTION:Bram van Vloertaal');
  });
});

