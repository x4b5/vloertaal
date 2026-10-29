import { describe, expect, it } from 'vitest';
import { teachingLessons } from '../src/content/curriculum';
import { helpLanguages } from '../src/i18n/all';
import {
  FREEZE_MAX, backupFile, backupForTrack, bestStreak, completeDaily, completeLesson, currentStreak, doneToday, emptyProgress,
  mergeBackup, parseBackup, replaceWithBackup, settleStreak, workWeek, type Progress,
} from '../src/lib/progress';
import { addLessonWords, applyReview, dailyCard, strongerCount } from '../src/lib/spaced';
import { googleCalendarUrl, isAndroid, parseTime, reminderIcs } from '../src/lib/reminder';

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

  it('earns the first free day on day 3, then one per 7 practised days, at most two', () => {
    expect(practise([1, 2]).freezes ?? 0).toBe(0);
    expect(practise([1, 2, 3]).freezes).toBe(1);
    expect(practise([1, 2, 3, 4, 5, 6]).freezes).toBe(1);
    expect(practise([1, 2, 3, 4, 5, 6, 7]).freezes).toBe(2);
    // The early one is only for the first streak that gets to 3 days.
    const again = practise([1, 2, 3], { ...emptyProgress, bestStreak: 5 });
    expect(again.freezes ?? 0).toBe(0);
    const long = practise(Array.from({ length: 28 }, (_, i) => i + 1));
    expect(long.freezes).toBe(FREEZE_MAX);
  });

  it('uses a free day for exactly one missed day: the streak goes on, the day is a rest day', () => {
    const p = practise([1, 2, 3, 4, 5, 6, 7]); // streak 7, two free days (day 3 and day 7)
    expect(currentStreak(p, day(9))).toBe(7); // the 8th was missed
    const settled = settleStreak(p, day(9));
    expect(settled.broken).toBeUndefined();
    expect(settled.progress.freezes).toBe(1);
    expect(settled.progress.rest).toEqual(['2026-10-08']);
    const after = completeLesson(p, 'l.x', 1, false, day(9));
    expect(after.streak).toBe(8);
    expect(after.rest).toEqual(['2026-10-08']);
  });

  it('two free days cover two missed days (a weekend off)', () => {
    const p = practise([1, 2, 3, 4, 5, 6, 7]); // free days earned on day 3 and day 7
    expect(p.freezes).toBe(2);
    const s = settleStreak(p, day(10)); // days 8 and 9 missed
    expect(s.broken).toBeUndefined();
    expect(s.progress).toMatchObject({ streak: 7, freezes: 0, lastDay: '2026-10-09' });
    expect(s.progress.rest).toEqual(['2026-10-08', '2026-10-09']);
    expect(completeLesson(s.progress, 'l.y', 1, false, day(10)).streak).toBe(8);
  });

  it('stops the streak after more missed days than free days, or one without a free day, and keeps the record', () => {
    const p = practise([1, 2, 3, 4, 5, 6, 7]);
    const s = settleStreak(p, day(11)); // three missed, two free days
    expect(s.broken).toBe(7);
    expect(s.progress.streak).toBe(0);
    expect(bestStreak(s.progress)).toBe(7);
    // Shown once: settling again reports nothing.
    expect(settleStreak(s.progress, day(11)).broken).toBeUndefined();
    const q = practise([1, 2, 3], { ...emptyProgress, bestStreak: 5 }); // no free day in hand
    expect(settleStreak(q, day(5)).broken).toBe(3);
    const again = completeLesson(s.progress, 'l.y', 1, false, day(11));
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

  it('protects week 1: the free day of day 3 covers a missed day 4', () => {
    const p = practise([5, 6, 7]); // Monday to Wednesday
    const settled = settleStreak(p, day(9)); // Thursday missed
    expect(settled.broken).toBeUndefined();
    const after = completeLesson(p, 'l.x', 1, false, day(9));
    expect(after.streak).toBe(4);
    expect(workWeek(after, day(9)).map((d) => d.state)).toEqual(['done', 'done', 'done', 'rest', 'done', 'open', 'open']);
  });

  it('keeps the earlier practised days on the week row after a missed day', () => {
    // No free day in hand: Monday to Wednesday practised, Thursday and Friday missed.
    const p = practise([5, 6, 7], { ...emptyProgress, bestStreak: 9 });
    expect(p.days).toEqual(['2026-10-05', '2026-10-06', '2026-10-07']);
    const s = settleStreak(p, day(10));
    expect(s.broken).toBe(3);
    const after = completeLesson(s.progress, 'l.y', 1, false, day(10));
    expect(after.streak).toBe(1);
    expect(workWeek(after, day(10)).map((d) => d.state)).toEqual(['done', 'done', 'done', 'open', 'open', 'done', 'open']);
    // Before practising on Saturday, the days stay too.
    expect(workWeek(s.progress, day(10)).map((d) => d.state)).toEqual(['done', 'done', 'done', 'open', 'open', 'open', 'open']);
  });

  it('keeps only the last 14 practised days', () => {
    const p = practise(Array.from({ length: 20 }, (_, i) => i + 1));
    expect(p.days).toHaveLength(14);
    expect(p.days?.[13]).toBe('2026-10-20');
  });

  it('marks the daily review as done today', () => {
    const p = completeDaily(emptyProgress, 1, day(3));
    expect(p.reviewDay).toBe('2026-10-03');
    expect(p.streak).toBe(1);
  });
});

describe('backup', () => {
  // Real lesson ids: a backup keeps only lessons the app knows (tests/backupReminder.test.ts).
  const p = { ...practise([1, 2]), completed: { 'l.hello': { best: 1, times: 1 }, 'l.people': { best: 1, times: 1 } } };
  it('round-trips a backup file and rejects other files', () => {
    const back = parseBackup(backupFile({ ...p, cards: { 'w.helm': { box: 3, due: '2026-10-09' } } }, day(2)));
    expect(back?.completed).toEqual(p.completed);
    expect(back?.streak).toBe(2);
    expect(back?.cards).toEqual({ 'w.helm': { box: 3, due: '2026-10-09' } });
    expect(parseBackup('not json')).toBeNull();
    expect(parseBackup('{"app":"other","progress":{"completed":{}}}')).toBeNull();
    expect(parseBackup('{"app":"vloertaal","progress":{}}')).toBeNull();
    // Junk inside is dropped, not trusted.
    const junk = parseBackup('{"app":"vloertaal","progress":{"completed":{"l.hello":{"best":5,"times":1},"l.people":{"best":1,"times":2}},"xp":-3,"lastDay":"yesterday"}}');
    expect(junk?.completed).toEqual({ 'l.people': { best: 1, times: 2 } });
    expect(junk?.xp).toBeUndefined();
    expect(junk?.lastDay).toBeUndefined();
  });

  it('keeps each route\'s review day apart (the file says its route)', () => {
    // Saved on the work-rules route ('nl'): its review was done on the 8th, the language route's on the 5th.
    const rules = { ...p, helpLang: 'nl' as const, reviewDay: '2026-10-08', parked: { reviewDay: '2026-10-05' } };
    const file = parseBackup(backupFile(rules, day(8)))!;
    expect(file.track).toBe('regels');
    expect(backupForTrack(file, 'regels').reviewDay).toBe('2026-10-08');
    // Read on a phone on the language route: the rules review does not count as its own.
    const here = { ...emptyProgress, helpLang: 'pl' as const };
    const merged = mergeBackup(here, file);
    expect(merged.reviewDay).toBe('2026-10-05');
    expect(merged.parked?.reviewDay).toBe('2026-10-08');
    const replaced = replaceWithBackup(here, file);
    expect(replaced.reviewDay).toBe('2026-10-05');
    expect(replaced.parked?.reviewDay).toBe('2026-10-08');
    // A version-1 file (no route) is taken as it is.
    const old = parseBackup(JSON.stringify({ app: 'vloertaal', version: 1, progress: { completed: {}, reviewDay: '2026-10-08', parked: { reviewDay: '2026-10-07' } } }))!;
    expect(old.track).toBeUndefined();
    expect(old.parked).toBeUndefined(); // its route is not known, so neither is the other one
    expect(mergeBackup(here, old).reviewDay).toBe('2026-10-08');
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
    expect(ics).toContain('SUMMARY:Bram: tijd voor je Nederlands (10 minuten)');
    expect(ics).toContain('URL:https://vloertaal.nl/');
    expect(ics.split('\r\n').every((l) => new TextEncoder().encode(l).length <= 75)).toBe(true);
    expect(reminderIcs('18:00', 'x', new Date(2026, 9, 8, 9, 30))).toContain('DTSTART:20261008T180000');
    expect(parseTime('25:00')).toEqual([18, 0]);
  });
});

describe('daily reminder on Android (Google Calendar)', () => {
  it('fills in Google Calendar\'s own page: every day, the next such time, in the phone\'s time zone', () => {
    const url = new URL(googleCalendarUrl('07:00', 'https://vloertaal.nl/', new Date(2026, 9, 8, 9, 30), 'taal', 'Czas na niderlandzki', 'Europe/Amsterdam'));
    expect(url.origin + url.pathname).toBe('https://calendar.google.com/calendar/render');
    const q = url.searchParams;
    expect(q.get('action')).toBe('TEMPLATE');
    expect(q.get('dates')).toBe('20261009T070000/20261009T071000');
    expect(q.get('recur')).toBe('RRULE:FREQ=DAILY');
    expect(q.get('text')).toBe('Bram: tijd voor je Nederlands (10 minuten) · Czas na niderlandzki');
    expect(q.get('details')).toContain('https://vloertaal.nl/');
    expect(q.get('ctz')).toBe('Europe/Amsterdam');
    expect(new URL(googleCalendarUrl('18:00', 'x', new Date(2026, 9, 8, 9, 30), 'regels')).searchParams.get('dates')).toBe('20261008T180000/20261008T180500');
  });

  it('knows Android from the browser', () => {
    expect(isAndroid('Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 Chrome/130 Mobile')).toBe(true);
    expect(isAndroid('Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Safari/604.1')).toBe(false);
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
