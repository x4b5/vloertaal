import { createElement, type ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, beforeAll, describe, expect, it } from 'vitest';
import { Gate } from '../src/components/Gate';
import { BottomNav, LanguagePicker } from '../src/components/Screens';
import { Settings } from '../src/components/Settings';
import { registerRulesCourse } from '../src/content/courses';
import { toCourseUnits } from '../src/content/regels/course';
import { RULES_STUB } from '../src/dev/rulesStub';
import { getHelpLanguage, registerPack } from '../src/i18n';
import nlPack from '../src/i18n/packs/nl';
import { uiEn } from '../src/i18n/types';
import { englishHidden } from '../src/lib/english';
import { emptyProgress } from '../src/lib/progress';
import { settingsRows } from '../src/lib/settingsMenu';
import { setRulesTrack } from '../src/lib/track';
import type { SettingsPage } from '../src/lib/settingsMenu';

beforeAll(() => {
  registerPack(nlPack);
  registerRulesCourse(toCourseUnits(RULES_STUB));
});
afterEach(() => setRulesTrack(null));

const nl = () => getHelpLanguage('nl')!;
const html = (el: ReactElement) => renderToStaticMarkup(el).replace(/&#x27;/g, '’').replace(/&quot;/g, '"').replace(/&amp;/g, '&');
/** Every English UI string of some length: none may be on a Dutch screen. */
const english = Object.values(uiEn).filter((s) => s.replace(/\{\w+\}/g, '').trim().length >= 4 && !/^(Start|Code|Stop|Pauze)$/.test(s));
const noEnglish = (markup: string) => {
  expect(markup).not.toContain('lang="en"');
  expect(markup).not.toMatch(/class="[^"]*bi-help/);
  for (const s of english) expect(markup, s).not.toContain(`>${s}<`);
};
const settings = (page?: SettingsPage) => html(createElement(Settings, {
  progress: { ...emptyProgress, onboarded: true, helpLang: 'nl', sector: 'construction' },
  lang: nl(), page, onPage: () => {}, onReturn: () => {}, onLang: () => {}, onGender: () => {}, onSector: () => {},
  onTheme: () => {}, onTextSize: () => {}, onVoice: () => {}, onQuiet: () => {}, onReset: () => {}, onRestore: () => {},
  onCertificate: () => {},
}));

describe('the work-rules track renders in Dutch only', () => {
  it('BottomNav: the Dutch labels, no help line, no English', () => {
    const m = html(createElement(BottomNav, { current: 'route', onTab: () => {}, lang: nl() }));
    noEnglish(m);
    for (const label of ['Route', 'Hulp', 'Over']) expect(m).toContain(`>${label}<`);
    expect(m).not.toContain('nav-help');
    expect(m).toContain('aria-label="Hulp"');
  });

  it('Gate: the track’s own tagline and question, once', () => {
    const m = html(createElement(Gate, { lang: nl(), onAccess: () => {}, onBack: () => {}, onTry: () => {} }));
    noEnglish(m);
    expect(m).toContain('Werken in Nederland: zo gaat het');
    expect(m).not.toContain('Nederlands voor op de werkvloer');
    // Once on screen (a speaker's name for screen readers, hidden, says it too).
    expect(m.replace(/<span class="sr-only"[^>]*>[^<]*<\/span>/g, '').match(/Wat is de code\?</g)).toHaveLength(1);
    expect(m).toContain('Je krijgt de code van je werkgever');
    // No second (help-language) speaker: Dutch has its own.
    expect(m).not.toContain('help-say');
  });

  it('Settings: the menu and its lists, each label once, no "Show English too" and no gender', () => {
    for (const page of [undefined, 'me', 'lessons', 'phone'] as const) {
      const m = settings(page);
      noEnglish(m);
      expect(m, String(page)).not.toContain('set-row-nl');
      expect(m, String(page)).not.toContain('max3-title-nl');
    }
    expect(settings('me')).not.toContain('Ook Engels tonen');
    expect(settings('me')).not.toContain('Vrouw of man?');
    expect(settings('me')).toContain('>Nederlands<');
    const rules = { helpLang: true, gender: false, preview: false, install: false, offline: true, rules: true };
    expect(settingsRows('me', rules)).toEqual(['language', 'sector', 'country', 'certificates', 'kaart']);
    expect(settingsRows('lessons', rules)).toEqual(['sound', 'voice', 'text', 'theme']);
    // The Dutch course keeps its rows.
    expect(settingsRows('me', { ...rules, rules: false, gender: true })).toEqual(['language', 'gender', 'sector', 'country', 'english', 'certificates', 'kaart']);
    expect(settingsRows('lessons', { ...rules, rules: false })).toEqual(['sound', 'voice', 'tempo', 'faster', 'speaking', 'writing', 'text', 'theme', 'toets']);
  });

  it('a yes/no page has one Dutch line per card', () => {
    const m = settings('counting');
    noEnglish(m);
    expect(m).not.toContain('max3-nl');
    expect(m).toContain('>Aan<');
  });

  it('hides English always: there is no English to show', () => {
    expect(englishHidden('nl', true)).toBe(true);
    expect(englishHidden('pl', true)).toBe(false);
    expect(englishHidden(null, false)).toBe(false);
  });
});

describe('the language list', () => {
  const count = (m: string) => (m.match(/class="lang-btn/g) ?? []).length;

  it('offers "Nederlands – ik spreek al Nederlands" only while RULES_TRACK is on', () => {
    setRulesTrack(false);
    const off = html(createElement(LanguagePicker, { onPick: () => {} }));
    expect(count(off)).toBe(14);
    expect(off).not.toContain('ik spreek al Nederlands');
    setRulesTrack(true);
    const on = html(createElement(LanguagePicker, { onPick: () => {} }));
    expect(count(on)).toBe(15);
    expect(on).toMatch(/lang="nl"[^>]*>.*Nederlands.*ik spreek al Nederlands/);
    // The very last, after English and under a line, with the word "Werkregels": another part of
    // the app, not one more help language.
    expect(on.indexOf('>English<')).toBeLessThan(on.indexOf('lang-sep'));
    expect(on.indexOf('lang-sep')).toBeLessThan(on.indexOf('ik spreek al Nederlands'));
    expect(on).toMatch(/lang-btn-nl[\s\S]*Werkregels[\s\S]*Nederlands/);
    expect(off).not.toContain('lang-sep');
  });

  it('shows flags as decoration (hidden from screen readers), never as an extra button', () => {
    setRulesTrack(true);
    const m = html(createElement(LanguagePicker, { onPick: () => {} }));
    expect(m.match(/<button/g)).toHaveLength(15);
    // Drawn flags, no flag emoji: the emoji font for flags alone was 709 KB on the first screen.
    expect(m).not.toMatch(/[\u{1F1E6}-\u{1F1FF}]/u);
    expect(m.match(/<svg class="lang-flag"[^>]*aria-hidden="true"/g)).toHaveLength(6);
    expect(m.match(/class="lang-mark" aria-hidden="true"/g)).toHaveLength(15);
    expect(m.match(/class="lang-flag"/g)).toHaveLength(6);
    // A tile of letters for ar, ti, fa, prs, and for es, pt, fr and de (spoken in many countries).
    expect(m.match(/class="lang-sample"/g)).toHaveLength(9);
  });

  it('in Settings of the Dutch track: no English names under the languages', () => {
    setRulesTrack(true);
    const m = html(createElement(LanguagePicker, { onPick: () => {}, current: 'nl', compact: true, showBeta: true, lang: nl() }));
    expect(m).not.toContain('>Arabic<');
    expect(m).not.toContain('lang-beta');
    expect(m).toContain('Ik leer Nederlands via het Engels');
    expect(m).toMatch(/lang-btn lang-btn-nl picked/);
  });
});
