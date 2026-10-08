import { describe, expect, it } from 'vitest';
import { teachingLessons } from '../src/content/curriculum';
import { helpLanguages } from '../src/i18n';
import {
  FREEZE_MAX, backupFile, bestStreak, completeDaily, completeLesson, currentStreak, doneToday, emptyProgress,
  mergeBackup, parseBackup, replaceWithBackup, settleStreak, workWeek, type Progress,
} from '../src/lib/progress';
import { addLessonWords, applyReview, dailyCard, strongerCount } from '../src/lib/spaced';
import { parseTime, reminderIcs } from '../src/lib/reminder';

// October 2026: the 5th is a Monday.
const day = (d: number) => new Date(2026, 9, d, 12);
/** Practise one lesson a day on each of these days. */
const practise = (days: number[], p: Progress = emptyProgress) =>
  days.reduce((acc, d) => completeLesson(acc, `l.${d}`, 1, false, day(d)), p);

describe('streak: today, free days and the record', () => {
  it('knows whether today is done', () => {
    const p = practise([1]);
    expect(doneToday(p, day(1))).toBe(true);
    expect(doneToday(p, day(2))).toBe(false);
  });

  it('earns a free day per 7 practised days, at most two', () => {
    expect(practise([1, 2, 3, 4, 5, 6]).freezes ?? 0).toBe(0);
    expect(practise([1, 2, 3, 4, 5, 6, 7]).freezes).toBe(1);
    const long = practise(Array.from({ length: 28 }, (_, i) => i + 1));
    expect(long.freezes).toBe(FREEZE_MAX);
  });

  it('uses a free day for exactly one missed day: the streak goes on, the day is a rest day', () => {
    const p = practise([1, 2, 3, 4, 5, 6, 7]); // streak 7, one free day
    expect(currentStreak(p, day(9))).toBe(7); // the 8th was missed
    const settled = settleStreak(p, day(9));
    expect(settled.broken).toBeUndefined();
    expect(settled.progress.freezes).toBe(0);
    expect(settled.progress.rest).toEqual(['2026-10-08']);
    const after = completeLesson(p, 'l.x', 1, false, day(9));
    expect(after.streak).toBe(8);
    expect(after.rest).toEqual(['2026-10-08']);
  });

  it('stops the streak after two missed days, or one without a free day, and keeps the record', () => {
    const p = practise([1, 2, 3, 4, 5, 6, 7]);
    const s = settleStreak(p, day(10));
    expect(s.broken).toBe(7);
    expect(s.progress.streak).toBe(0);
    expect(bestStreak(s.progress)).toBe(7);
    // Shown once: settling again reports nothing.
    expect(settleStreak(s.progress, day(10)).broken).toBeUndefined();
    const q = practise([1, 2, 3]);
    expect(settleStreak(q, day(5)).broken).toBe(3);
    const again = completeLesson(s.progress, 'l.y', 1, false, day(10));
    expect(again.streak).toBe(1);
    expect(again.bestStreak).toBe(7);
  });

  it('loads old saves without the new fields', () => {
    const old = { ...emptyProgress, streak: 4, lastDay: '2026-10-04' };
    expect(bestStreak(old)).toBe(4);
    expect(settleStreak(old, day(5)).progress).toBe(old);
  });

  it('lays out the work week: done days, rest days, today', () => {
    const q = settleStreak(practise([1, 2, 3, 4, 5, 6, 7]), day(9)).progress;
    const week = workWeek(completeLesson(q, 'l.z', 1, false, day(9)), day(9));
    expect(week.map((d) => d.key)).toEqual(['2026-10-05', '2026-10-06', '2026-10-07', '2026-10-08', '2026-10-09', '2026-10-10', '2026-10-11']);
    expect(week.map((d) => d.state)).toEqual(['done', 'done', 'done', 'rest', 'done', 'open', 'open']);
    expect(week.find((d) => d.today)?.key).toBe('2026-10-09');
  });

  it('marks the daily review as done today', () => {
    const p = completeDaily(emptyProgress, 1, day(3));
    expect(p.reviewDay).toBe('2026-10-03');
    expect(p.streak).toBe(1);
  });
});

describe('backup', () => {
  const p = practise([1, 2]);
  it('round-trips a backup file and rejects other files', () => {
    const back = parseBackup(backupFile({ ...p, cards: { 'w.helm': { box: 3, due: '2026-10-09' } } }, day(2)));
    expect(back?.completed).toEqual(p.completed);
    expect(back?.streak).toBe(2);
    expect(back?.cards).toEqual({ 'w.helm': { box: 3, due: '2026-10-09' } });
    expect(parseBackup('not json')).toBeNull();
    expect(parseBackup('{"app":"other","progress":{"completed":{}}}')).toBeNull();
    expect(parseBackup('{"app":"vloertaal","progress":{}}')).toBeNull();
    // Junk inside is dropped, not trusted.
    const junk = parseBackup('{"app":"vloertaal","progress":{"completed":{"a":{"best":5,"times":1},"b":{"best":1,"times":2}},"xp":-3,"lastDay":"yesterday"}}');
    expect(junk?.completed).toEqual({ b: { best: 1, times: 2 } });
    expect(junk?.xp).toBeUndefined();
    expect(junk?.lastDay).toBeUndefined();
  });

  it('merges (best of both) or replaces, keeping this phone\'s settings', () => {
    const here = { ...practise([5]), theme: 'dark' as const, xp: 5, completed: { a: { best: 0.5, times: 3 } } };
    const file = { completed: { a: { best: 1, times: 1 }, b: { best: 1, times: 1 } }, xp: 40, streak: 9, lastDay: '2026-10-04', bestStreak: 12 };
    const merged = mergeBackup(here, file);
    expect(merged.completed).toEqual({ a: { best: 1, times: 3 }, b: { best: 1, times: 1 } });
    expect(merged.xp).toBe(40);
    expect(merged.lastDay).toBe('2026-10-05'); // this phone practised later
    expect(merged.bestStreak).toBe(12);
    expect(merged.theme).toBe('dark');
    const replaced = replaceWithBackup(here, file);
    expect(replaced.completed).toEqual(file.completed);
    expect(replaced.streak).toBe(9);
    expect(replaced.theme).toBe('dark');
  });
});

describe('"Herhaal vandaag" card', () => {
  const words = teachingLessons[0].words;
  const today = '2026-10-08';
  it('has no card before any words, then "first words tomorrow", then due', () => {
    expect(dailyCard({}, today)).toBeNull();
    const cards = addLessonWords({}, words, {}, today);
    expect(dailyCard(cards, today)?.state).toBe('first');
    expect(dailyCard(cards, '2026-10-09')).toMatchObject({ state: 'due', due: words.length });
  });

  it('is done after today\'s review, with tomorrow\'s count and leftovers for an extra round', () => {
    const cards = addLessonWords({}, words, {}, '2026-10-07');
    const results = Object.fromEntries(words.map((w, i) => [w.id, i > 0]));
    const after = applyReview(cards, results, today);
    const card = dailyCard(after, today, today);
    expect(card?.state).toBe('done');
    expect(card?.extra).toBe(0);
    expect(card?.tomorrow).toBe(1); // the one answered wrong
    expect(strongerCount(cards, after)).toBe(words.length - 1);
    // Leftover due words (not in today's round) stay for an "extra ronde".
    const left = { ...after, [words[1].id]: { box: 2, due: today } };
    expect(dailyCard(left, today, today)?.extra).toBe(1);
  });
});

describe('daily reminder (.ics)', () => {
  it('makes a daily recurring event with the app link, starting at the next such time', () => {
    const ics = reminderIcs('07:00', 'https://vloertaal.nl/', new Date(2026, 9, 8, 9, 30));
    expect(ics).toContain('BEGIN:VCALENDAR');
    expect(ics).toContain('RRULE:FREQ=DAILY');
    expect(ics).toContain('DTSTART:20261009T070000'); // 07:00 has passed today
    expect(ics).toContain('SUMMARY:Vloertaal · 5 minuten');
    expect(ics).toContain('URL:https://vloertaal.nl/');
    expect(ics.split('\r\n').every((l) => new TextEncoder().encode(l).length <= 75)).toBe(true);
    expect(reminderIcs('18:00', 'x', new Date(2026, 9, 8, 9, 30))).toContain('DTSTART:20261008T180000');
    expect(parseTime('25:00')).toEqual([18, 0]);
  });
});

describe('round 3 translations', () => {
  it('keep the {n} placeholders', () => {
    for (const lang of helpLanguages) {
      for (const k of ['streakStopped', 'recordN', 'freeDaysN', 'tomorrowN', 'wordsStrongerN'] as const) {
        expect(lang.ui[k], `${lang.code} ${k}`).toContain('{n}');
      }
    }
  });
});
