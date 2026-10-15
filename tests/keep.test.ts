import { describe, expect, it } from 'vitest';
import { REMIND_DEFAULT, REMIND_OTHER_TIMES, REMIND_OWN, keepNext, ownTime } from '../src/lib/keep';
import { parseTime, reminderTapAdds } from '../src/lib/reminder';
import { uiEn } from '../src/i18n/types';

describe('the reminder and home-screen pages after the first day', () => {
  it('"Yes" adds after work, then the install page when the phone can add the app', () => {
    expect(REMIND_DEFAULT.time).toBe('18:00');
    expect(keepNext('ask', 'yes', true)).toBe('install');
    // No install page: a short "added" page, then done.
    expect(keepNext('ask', 'yes', false)).toBe('added');
    expect(keepNext('added', 'next', false)).toBe('done');
  });

  it('"Other time" opens a page with 2 times and "Kies zelf"; a time adds it', () => {
    expect(keepNext('ask', 'other', true)).toBe('times');
    // 2 times + "Kies zelf" (the phone's time field) = 3 choices on the page.
    expect(REMIND_OTHER_TIMES).toHaveLength(2);
    expect(uiEn[REMIND_OWN.key]).toBeTruthy();
    expect(ownTime('05:30')).toBe('05:30');
    expect(ownTime('22:15:00')).toBe('22:15');
    expect(ownTime('')).toBeNull();
    expect(ownTime('25:00')).toBeNull();
    for (const t of REMIND_OTHER_TIMES) {
      expect(parseTime(t.time)).not.toEqual([18, 0]);
      expect(uiEn[t.key]).toBeTruthy();
    }
    expect(keepNext('times', 'time', true)).toBe('install');
    expect(keepNext('times', 'time', false)).toBe('added');
  });

  it('"No thanks" goes on to the install page, or ends', () => {
    expect(keepNext('ask', 'no', true)).toBe('install');
    expect(keepNext('ask', 'no', false)).toBe('done');
    expect(keepNext('install', 'next', true)).toBe('done');
  });
});

describe('Settings → reminder: the way back', () => {
  it('a new time adds a reminder; the time already there only leads back', () => {
    expect(reminderTapAdds('07:00', null)).toBe(true);
    expect(reminderTapAdds('12:00', '07:00')).toBe(true);
    expect(reminderTapAdds('07:00', '07:00')).toBe(false);
  });

  it('the pause sheet has a neutral title (the other languages are checked in i18n.test)', () => {
    expect(uiEn.pauseTitle).toBe('Pause');
  });
});
