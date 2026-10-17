import { describe, expect, it } from 'vitest';
import { weekdayLetters } from '../src/components/Milestone';
import { getHelpLanguage } from '../src/i18n/all';

describe('the week row: every day can be told apart', () => {
  it('gives seven different, short day labels in every help language', () => {
    for (const code of ['ar', 'ti', 'fa', 'prs', 'uk', 'tr', 'pl', 'ro', 'bg'] as const) {
      const days = weekdayLetters(getHelpLanguage(code, 'm'));
      expect(days, code).toHaveLength(7);
      // Turkish narrow letters are P S Ç P C C P: two days would look the same.
      expect(new Set(days).size, `${code} ${days?.join(' ')}`).toBe(7);
      for (const d of days ?? []) expect(Array.from(d).length, `${code} ${d}`).toBeLessThanOrEqual(3);
    }
  });
});
