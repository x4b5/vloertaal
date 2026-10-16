import { describe, expect, it } from 'vitest';
import { fillCount, getHelpLanguage, helpLanguageSources, helpLanguages, pluralCategory, uiCount } from '../src/i18n/all';
import { allForms, isPlural, PLURAL_CATEGORIES, uiEn, type LangCode, type UiKey } from '../src/i18n/types';

/** Plural forms (src/i18n/types.ts PluralText), picked with Intl.PluralRules (src/i18n/index.ts uiCount). */
const lang = (code: LangCode) => helpLanguages.find((l) => l.code === code)!;
const NS = [0, 1, 2, 3, 5, 11, 21, 22, 25, 101];

describe('plural forms', () => {
  it('Intl.PluralRules picks the right category for pl, uk, ro and ar', () => {
    const table: Record<string, string[]> = {
      //   0       1      2      3      5       11      21       22       25       101
      pl: ['many', 'one', 'few', 'few', 'many', 'many', 'many', 'few', 'many', 'many'],
      uk: ['many', 'one', 'few', 'few', 'many', 'many', 'one', 'few', 'many', 'one'],
      ro: ['few', 'one', 'few', 'few', 'few', 'few', 'other', 'other', 'other', 'few'],
      ar: ['zero', 'one', 'two', 'few', 'few', 'many', 'many', 'many', 'many', 'other'],
      bg: ['other', 'one', 'other', 'other', 'other', 'other', 'other', 'other', 'other', 'other'],
    };
    for (const [code, cats] of Object.entries(table)) {
      expect(NS.map((n) => pluralCategory(code as LangCode, n)), code).toEqual(cats);
    }
  });

  it('the help text takes the right form for n = 0, 1, 2, 3, 5, 11, 21, 22, 25, 101', () => {
    const table: [LangCode, UiKey, string[]][] = [
      ['pl', 'wordsUnit', ['słów', 'słowo', 'słowa', 'słowa', 'słów', 'słów', 'słów', 'słowa', 'słów', 'słów']],
      ['pl', 'daysUnit', ['dni', 'dzień', 'dni', 'dni', 'dni', 'dni', 'dni', 'dni', 'dni', 'dni']],
      ['uk', 'wordsUnit', ['слів', 'слово', 'слова', 'слова', 'слів', 'слів', 'слово', 'слова', 'слів', 'слово']],
      ['uk', 'daysUnit', ['днів', 'день', 'дні', 'дні', 'днів', 'днів', 'день', 'дні', 'днів', 'день']],
      ['ro', 'wordsUnit', ['cuvinte', 'cuvânt', 'cuvinte', 'cuvinte', 'cuvinte', 'cuvinte', 'de cuvinte', 'de cuvinte', 'de cuvinte', 'cuvinte']],
      ['ro', 'daysUnit', ['zile', 'zi', 'zile', 'zile', 'zile', 'zile', 'de zile', 'de zile', 'de zile', 'zile']],
      ['ar', 'daysUnit', ['يوم', 'يوم', 'يومان', 'أيام', 'أيام', 'يوماً', 'يوماً', 'يوماً', 'يوماً', 'يوم']],
      ['ar', 'wordsUnit', ['كلمة', 'كلمة', 'كلمتان', 'كلمات', 'كلمات', 'كلمة', 'كلمة', 'كلمة', 'كلمة', 'كلمة']],
      ['bg', 'daysUnit', ['дни', 'ден', 'дни', 'дни', 'дни', 'дни', 'дни', 'дни', 'дни', 'дни']],
    ];
    for (const [code, key, want] of table) {
      expect(NS.map((n) => uiCount(key, n, lang(code)).help), `${code} ${key}`).toEqual(want);
    }
    // Filled in, with the number.
    expect(fillCount('wordsLearnedN', 22, lang('pl')).help).toBe('22 nauczone słowa');
    expect(fillCount('wordsLearnedN', 25, lang('pl')).help).toBe('25 nauczonych słów');
    expect(fillCount('recordN', 21, lang('uk')).help).toBe('Твій рекорд: 21 день');
    expect(fillCount('tomorrowN', 20, lang('ro')).help).toBe('Mâine: 20 de cuvinte');
    expect(fillCount('recordN', 11, lang('ar')).help).toBe('أفضل نتيجة لك: 11 يوماً');
  });

  it('a gendered form inside a plural object follows the learner (Arabic)', () => {
    // The dual says "two" by itself: no "2" in front of it (see the next test).
    expect(fillCount('streakGrew', 2, getHelpLanguage('ar', 'f')).help).toBe('يومان على التوالي! واصلي هكذا.');
    expect(fillCount('streakGrew', 2, getHelpLanguage('ar', 'm')).help).toBe('يومان على التوالي! واصل هكذا.');
    expect(fillCount('recordN', 2, lang('ar')).help).toBe('أفضل نتيجة لك: يومان');
    expect(fillCount('streakStopped', 5, getHelpLanguage('ar', 'f')).help).toContain('ابدئي');
    // A plain ui() read of a plural text gets its `other` form.
    expect(lang('pl').ui.wordsUnit).toBe('słów');
  });

  it('every plural form keeps the English placeholders, and only uses categories the language has', () => {
    let plurals = 0;
    for (const src of helpLanguageSources) {
      const cats = new Intl.PluralRules(src.code).resolvedOptions().pluralCategories as string[];
      for (const [key, t] of Object.entries(src.ui)) {
        if (!isPlural(t)) continue;
        plurals++;
        const en = uiEn[key as UiKey];
        expect(en, key).toBeDefined();
        for (const c of PLURAL_CATEGORIES) {
          if (t[c] === undefined) continue;
          expect(cats, `${src.code} ${key} ${c}`).toContain(c);
          for (const form of allForms(t[c])) {
            expect(form.trim(), `${src.code} ${key}`).toBeTruthy();
            // Arabic `two` is the dual (يومان "two days", كلمتين "two words"): the noun itself says
            // the number, so "2 يومان" would say it twice. Standard Arabic, and CLDR's own Arabic
            // patterns, drop the numeral there. So that one form leaves {n} out (the only exception).
            const wantN = en.includes('{n}') && !(src.code === 'ar' && c === 'two');
            expect(form.includes('{n}'), `${src.code} ${key} ${c}: ${form}`).toBe(wantN);
          }
        }
        // Every whole number has its own form (no silent fallback to `other` for integers).
        for (let n = 0; n <= 200; n++) expect(t[pluralCategory(src.code, n)], `${src.code} ${key} ${n}`).toBeDefined();
      }
    }
    expect(plurals).toBeGreaterThan(50);
  });

  it('the agents\' count keys have plural forms in pl, uk, ro, ar and bg', () => {
    const keys: UiKey[] = ['wordsUnit', 'lessonsUnit', 'daysUnit', 'wordsStrongerN', 'wordsLearnedN', 'recordN', 'streakGrew', 'streakStopped', 'tomorrowN', 'dayStreak'];
    for (const code of ['pl', 'uk', 'ro', 'ar', 'bg'] as const) {
      const src = helpLanguageSources.find((l) => l.code === code)!;
      for (const k of keys) expect(isPlural(src.ui[k]), `${code} ${k}`).toBe(true);
    }
  });

  it('falls back to the old N / One pair without a plural object, and in English', () => {
    const tr = lang('tr');
    expect(isPlural(helpLanguageSources.find((l) => l.code === 'tr')!.ui.wordsLearnedN)).toBe(false);
    expect(fillCount('wordsLearnedN', 1, tr).help).toBe(tr.ui.wordsLearnedOne!.replace('{n}', '1'));
    expect(fillCount('wordsLearnedN', 5, tr).help).toBe(tr.ui.wordsLearnedN!.replace('{n}', '5'));
    expect(fillCount('daysUnit', 1).en).toBe('day');
    expect(fillCount('daysUnit', 21).en).toBe('days');
    expect(fillCount('recordN', 1, lang('pl')).en).toBe('Your best: 1 day');
    expect(uiCount('dayStreak', 5).help).toBeUndefined();
  });
});
