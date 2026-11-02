import { describe, expect, it } from 'vitest';
import { withoutCount } from '../src/components/Milestone';
import { fillCount } from '../src/i18n';
import { GENDERED_LANGS } from '../src/i18n/types';
import { getHelpLanguage, helpLanguageSources } from '../src/i18n/all';

const DIGITS = /[0-9٠-٩۰-۹]/;

/** The streak screen: the number big, the line only the cheer (the owner's feedback, 2 November
 *  2026: say it once). The line is cut after its "!", so every language must keep that shape. */
describe('the streak line without its count', () => {
  it('English: "7 days in a row! Keep it going." becomes "Keep it going."', () => {
    expect(withoutCount(fillCount('streakGrew', 7)).en).toBe('Keep it going.');
  });

  for (const src of helpLanguageSources) {
    it(`${src.code}: no number left, and a cheer is left`, () => {
      const genders = GENDERED_LANGS.includes(src.code as never) ? (['m', 'f', 'x'] as const) : ([undefined] as const);
      for (const g of genders) {
        const lang = getHelpLanguage(src.code, g);
        for (const n of [2, 3, 5, 7, 11, 14, 22, 30, 101]) {
          const line = withoutCount(fillCount('streakGrew', n, lang));
          expect(line.help, `${src.code} ${g ?? ''} ${n}`).toBeTruthy();
          expect(line.help!, `${src.code} ${g ?? ''} ${n}: ${line.help}`).not.toMatch(DIGITS);
          expect(line.help!.trim().length, `${src.code} ${n}`).toBeGreaterThan(2);
          expect(line.en).not.toMatch(DIGITS);
        }
      }
    });
  }
});
