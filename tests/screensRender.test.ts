import { createElement, type ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { About, Phrasebook, Result, Tips, WordsHub } from '../src/components/Screens';
import { Settings } from '../src/components/Settings';
import { allLessons } from '../src/content/curriculum';
import { getHelpLanguage, LANG_CODES } from '../src/i18n/all';
import { GENDERED_LANGS, type HelpLanguage } from '../src/i18n/types';
import { emptyProgress, type Progress } from '../src/lib/progress';
import { SETTINGS_PARENT, type SettingsPage } from '../src/lib/settingsMenu';

/*
 * The screens around the lessons draw in every help language and in English only: the Settings
 * menu and every Settings page, About, Hulp, the emergency phrases, every workplace tip (all
 * lessons done, so all show) and a result. A text that makes a screen throw fails here.
 */
const done: Progress = {
  ...emptyProgress, onboarded: true, sector: 'construction',
  completed: Object.fromEntries(allLessons.map((l) => [l.id, { best: 1, times: 1 }])),
};
const noop = () => {};
const draw = (what: string, el: ReactElement) => {
  let html = '';
  try {
    html = renderToStaticMarkup(el);
  } catch (e) {
    throw new Error(`${what}: ${(e as Error).message}`);
  }
  expect(html.length, what).toBeGreaterThan(100);
};
const settings = (lang: HelpLanguage | undefined, page?: SettingsPage) => createElement(Settings, {
  progress: { ...done, helpLang: lang?.code ?? null }, lang, page, onPage: noop, onReturn: noop, onLang: noop, onGender: noop, onSector: noop,
  onTheme: noop, onTextSize: noop, onVoice: noop, onQuiet: noop, onReset: noop, onRestore: noop, onCertificate: noop,
});

describe('the screens around the lessons draw', () => {
  // A help language with gender also in its women's forms (they are texts of their own).
  const cases = [...LANG_CODES.map((c) => [c, undefined] as const), ...GENDERED_LANGS.map((c) => [c, 'f'] as const), [null, undefined] as const];
  for (const [code, gender] of cases) {
    it(`in ${code ?? 'English only'}${gender ? ` (${gender})` : ''}`, () => {
      const lang = code ? getHelpLanguage(code, gender) : undefined;
      draw('Settings', settings(lang));
      for (const page of Object.keys(SETTINGS_PARENT) as SettingsPage[]) draw(`Settings ${page}`, settings(lang, page));
      draw('About', createElement(About, { lang, dutch: false }));
      draw('About NL', createElement(About, { lang, dutch: true }));
      draw('Hulp', createElement(WordsHub, { lang, onTips: noop }));
      draw('Phrasebook', createElement(Phrasebook, { lang, onBack: noop }));
      draw('Tips', createElement(Tips, { progress: done, lang, onBack: noop }));
      draw('Result', createElement(Result, { right: 9, total: 10, newWords: 6, words: 40, lang, onDone: noop, repeated: 2, stronger: 3, waiting: 4, skipped: 1 }));
    }, 30_000); // dozens of screens: more than a single test's default 5 s on a slow runner
  }
});
