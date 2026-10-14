import { describe, expect, it } from 'vitest';
import { REMIND_DEFAULT, REMIND_OTHER_TIMES, keepNext } from '../src/lib/keep';
import { parseTime } from '../src/lib/reminder';
import { uiEn } from '../src/i18n/types';

describe('the reminder and home-screen pages after the first day', () => {
  it('"Yes" adds after work, then the install page when the phone can add the app', () => {
    expect(REMIND_DEFAULT.time).toBe('18:00');
    expect(keepNext('ask', 'yes', true)).toBe('install');
    // No install page: a short "added" page, then done.
    expect(keepNext('ask', 'yes', false)).toBe('added');
    expect(keepNext('added', 'next', false)).toBe('done');
  });

  it('"Other time" opens a page with 3 times; a time adds it', () => {
    expect(keepNext('ask', 'other', true)).toBe('times');
    expect(REMIND_OTHER_TIMES).toHaveLength(3);
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
