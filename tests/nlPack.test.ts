import { describe, expect, it } from 'vitest';
import { uiNl } from '../src/i18n/nl';
import nlPack from '../src/i18n/packs/nl';
import { getHelpLanguage, isLanguageLoaded, langMeta, languageMark, languageMeta, LANG_CODES, NL_META, registerPack, ui } from '../src/i18n';
import { allForms, uiEn, type UiKey } from '../src/i18n/types';
import { guessHelpLang } from '../src/lib/langGuess';

const keys = Object.keys(uiEn) as UiKey[];
const placeholders = (s: string) => (s.match(/\{\w+\}/g) ?? []).sort();
/** Sentences of a text: split after . ! ? (the " · " joins two short parts of one line). */
const sentences = (s: string) => s.split(/(?<=[.!?])\s+|\s+·\s+/).map((x) => x.trim()).filter(Boolean);
const words = (s: string) => s.split(/\s+/).filter((w) => /[\p{L}\d{]/u.test(w));

describe('the Dutch screens (src/i18n/nl.ts) of the work-rules track', () => {
  it('fills every UI key, in every form, and keeps the placeholders', () => {
    expect(Object.keys(uiNl).sort()).toEqual([...keys].sort());
    for (const k of keys) {
      const forms = allForms(uiNl[k]);
      expect(forms.length, k).toBeGreaterThan(0);
      for (const f of forms) {
        expect(f.trim(), k).toBeTruthy();
        expect(placeholders(f), k).toEqual(placeholders(uiEn[k]));
      }
    }
  });

  it('has no English in it', () => {
    for (const k of keys) for (const f of allForms(uiNl[k])) expect(f, k).not.toMatch(/\b(the|you|your)\b/i);
  });

  it('keeps every sentence short: at most 15 words (taalniveau 1F)', () => {
    for (const k of keys) for (const f of allForms(uiNl[k])) for (const s of sentences(f)) expect(words(s).length, `${k}: ${s}`).toBeLessThanOrEqual(15);
  });

  it('says what the track is about: work rules, not learning Dutch', () => {
    expect(uiNl.appTagline).toBe('Werken in Nederland: zo gaat het');
    expect(uiNl.wordsLearnedN).toBe('{n} regels geleerd');
    expect(uiNl.reviewTodayN).toMatch(/^Regels om te herhalen: \{n\}/);
  });

  it('loads as its own pack, outside the nine help languages', async () => {
    registerPack(nlPack);
    expect(isLanguageLoaded('nl')).toBe(true);
    const nl = getHelpLanguage('nl')!;
    expect(nl.code).toBe('nl');
    expect(nl.reviewed).toBe(true);
    expect(ui('navWords', nl)).toMatchObject({ help: 'Hulp' });
    // A count with its own Dutch singular.
    expect(nl.plural?.dayStreak).toEqual({ one: 'dag op rij', other: 'dagen op rij' });
    expect(LANG_CODES).not.toContain('nl');
    expect(languageMeta.map((m) => m.code)).not.toContain('nl');
    expect(langMeta('nl')).toBe(NL_META);
    // The guess page's strings are the pack's own.
    for (const k of Object.keys(NL_META.ui) as (keyof typeof NL_META.ui)[]) expect(NL_META.ui[k], k).toBe(uiNl[k]);
    // Many learners have a Dutch phone: Dutch is never guessed.
    expect(guessHelpLang(['nl-NL'])).toBeNull();
  });
});

describe('flags in the language list', () => {
  it('shows a flag only where a flag is not sensitive', () => {
    const flagged = [...languageMeta, NL_META].filter((m) => m.flag).map((m) => m.code).sort();
    expect(flagged).toEqual(['bg', 'nl', 'pl', 'ro', 'tr', 'uk']);
    expect(languageMark('uk')).toEqual({ flag: '🇺🇦' });
    expect(languageMark('tr')).toEqual({ flag: '🇹🇷' });
    expect(languageMark('pl')).toEqual({ flag: '🇵🇱' });
    expect(languageMark('ro')).toEqual({ flag: '🇷🇴' });
    expect(languageMark('bg')).toEqual({ flag: '🇧🇬' });
    expect(languageMark('nl')).toEqual({ flag: '🇳🇱' });
  });

  it('never a flag for Arabic, Tigrinya, Persian, Dari or English: a script tile instead', () => {
    for (const code of ['ar', 'ti', 'fa', 'prs', null] as const) {
      const mark = languageMark(code);
      expect('flag' in mark, String(code)).toBe(false);
      expect((mark as { sample: string }).sample.trim(), String(code)).toBeTruthy();
    }
    for (const code of ['ar', 'ti', 'fa', 'prs'] as const) expect(langMeta(code)?.flag, code).toBeUndefined();
  });
});
