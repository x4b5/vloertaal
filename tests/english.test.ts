import { describe, expect, it } from 'vitest';
import { englishHidden, setWantsEnglish, wantsEnglish } from '../src/lib/english';
import { helpLanguages, ui } from '../src/i18n/all';

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

describe('English after Back to the language page (G4 r5)', () => {
  it('picking the same language again hides the English again', async () => {
    const { applyEnglish, englishLangFor, EN_OFF_CLASS } = await import('../src/lib/english');
    const classes = new Set<string>();
    const g = globalThis as { document?: unknown };
    const had = 'document' in g;
    const before = g.document;
    g.document = { documentElement: { classList: { toggle: (c: string, on: boolean) => (on ? classes.add(c) : classes.delete(c)) } } };
    try {
      // App.tsx re-applies on [helpLang, onboarded]: each step below is a change of one of them.
      const steps: Array<[string | null, boolean]> = [['ti', true], ['ti', false], ['ti', true]];
      const seen = steps.map(([code, onb]) => { applyEnglish(englishLangFor(code, onb), false); return classes.has(EN_OFF_CLASS); });
      expect(seen).toEqual([true, false, true]);
      expect(englishLangFor('ar', false)).toBeNull();
      expect(englishLangFor(null, true)).toBeNull();
    } finally {
      if (had) g.document = before; else delete g.document;
    }
  });
});
