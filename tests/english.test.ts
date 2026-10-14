import { describe, expect, it } from 'vitest';
import { englishHidden, setWantsEnglish, wantsEnglish } from '../src/lib/english';
import { helpLanguages, ui } from '../src/i18n';

describe('English next to the help language', () => {
  it('is hidden only with a help language and "Show English too" off', () => {
    expect(englishHidden('ti', false)).toBe(true);
    expect(englishHidden('ar', true)).toBe(false);
    // English only: nothing changes, the English is the text.
    expect(englishHidden(null, false)).toBe(false);
    expect(englishHidden(undefined, true)).toBe(false);
  });

  it('"Show English too" is off by default and holds for the visit without storage', () => {
    expect(wantsEnglish()).toBe(false);
    setWantsEnglish(true);
    expect(wantsEnglish()).toBe(true);
    setWantsEnglish(false);
    expect(wantsEnglish()).toBe(false);
  });

  it('the switch is translated in every help language', () => {
    for (const lang of helpLanguages) expect(ui('showEnglish', lang).help, lang.code).toBeTruthy();
  });
});
