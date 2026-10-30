import { createElement, type ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, describe, expect, it } from 'vitest';
import { GenderPicker, GenderScreen } from '../src/components/Gender';
import { Route } from '../src/components/Route';
import { BottomNav, LanguagePicker, TopBar } from '../src/components/Screens';
import { Settings, type SettingsPage } from '../src/components/Settings';
import { ChromeBack } from '../src/components/ChromeBack';
import { getHelpLanguage } from '../src/i18n/all';
import { ui } from '../src/i18n';
import { emptyProgress, type Progress } from '../src/lib/progress';
import { setRulesTrack } from '../src/lib/track';
import fs from 'fs';

/** Accessibility of the first run, the settings and the route (screen reader and keyboard). */
const html = (el: ReactElement) => renderToStaticMarkup(el).replace(/&#x27;/g, '’').replace(/&quot;/g, '"').replace(/&amp;/g, '&');
const pl = () => getHelpLanguage('pl')!;
const ar = () => getHelpLanguage('ar')!;
const progress = (extra: Partial<Progress> = {}): Progress => ({ ...emptyProgress, onboarded: true, helpLang: 'pl', sector: 'none', ...extra });
const settings = (page?: SettingsPage, lang = pl()) => html(createElement(Settings, {
  progress: progress({ helpLang: lang.code }),
  lang, page, onPage: () => {}, onReturn: () => {}, onLang: () => {}, onGender: () => {}, onSector: () => {},
  onTheme: () => {}, onTextSize: () => {}, onVoice: () => {}, onQuiet: () => {}, onReset: () => {}, onRestore: () => {},
  onCertificate: () => {},
}));

afterEach(() => setRulesTrack(null));

describe('choice screens: a named group, the choice read out', () => {
  it('the language list is one group named by its question', () => {
    const first = html(createElement(LanguagePicker, { onPick: () => {} }));
    expect(first).toMatch(/class="lang-grid[^"]*" role="group" aria-label="Choose your language"/);
    // First run: nothing is chosen, so the cards are plain buttons (no "not pressed" on each).
    expect(first).not.toContain('aria-pressed');
    const set = html(createElement(LanguagePicker, { onPick: () => {}, current: 'pl', compact: true, lang: pl() }));
    expect(set).toContain(`role="group" aria-label="${ui('chooseLanguage', pl()).help}"`);
    expect(set.match(/aria-pressed="true"/g)).toHaveLength(1);
  });

  it('"Nederlands" (Werkregels): the line above it is decoration, the card says Werkregels in Dutch', () => {
    setRulesTrack(true);
    const m = html(createElement(LanguagePicker, { onPick: () => {} }));
    expect(m).toContain('<span class="lang-sep" aria-hidden="true"></span>');
    const card = /<button[^>]*class="lang-btn lang-btn-nl[^"]*"[^>]*>/.exec(m)?.[0] ?? '';
    expect(card).toContain('lang="nl"');
    expect(m).toMatch(/lang-btn-nl[\s\S]*<span class="lang-nl-tag">Werkregels<\/span>/);
  });

  it('settings pages: on/off, text size and theme are radio groups named by the page question', () => {
    for (const page of ['english', 'speaking', 'counting'] as const) {
      const m = settings(page);
      expect(m, page).toContain('role="radiogroup"');
      expect(m, page).not.toContain('aria-label="On or off"');
    }
    expect(settings('english')).toContain(`role="radiogroup" aria-label="${ui('showEnglish', pl()).help}"`);
    for (const page of ['text', 'theme'] as const) {
      const m = settings(page);
      expect(m, page).toContain('role="radiogroup"');
      expect(m.match(/role="radio" aria-checked="true"/g), page).toHaveLength(1);
    }
    // Each page has one h1 that says the question.
    expect(settings('text').match(/<h1/g)).toHaveLength(1);
  });

  it('"Woman or man?" keeps one h1, also when Bram greets in the logo’s place', () => {
    for (const greet of [false, true]) {
      const m = html(createElement(GenderScreen, { lang: pl(), onDone: () => {}, greet }));
      expect(m.match(/<h1/g), `greet ${greet}`).toHaveLength(1);
    }
    expect(html(createElement(GenderScreen, { lang: pl(), onDone: () => {}, greet: true }))).toMatch(/<h1 class="onboarding-title sector-title">/);
  });

  it('the gender cards are a radio group with the choice checked', () => {
    const m = html(createElement(GenderPicker, { current: 'f', lang: pl(), onPick: () => {} }));
    expect(m).toContain(`role="radiogroup" aria-label="${ui('genderTitle', pl()).help}"`);
    expect(m.match(/role="radio" aria-checked="true"/g)).toHaveLength(1);
  });
});

describe('chrome: back arrow and bottom bar', () => {
  it('the back arrow is named in the help language, with its lang', () => {
    const m = html(createElement(ChromeBack, { lang: ar(), onBack: () => {} }));
    expect(m).toContain(`aria-label="${ui('back', ar()).help}"`);
    expect(m).toContain('lang="ar"');
  });

  it('the bottom bar is a named nav landmark with aria-current on the tab in use', () => {
    const m = html(createElement(BottomNav, { current: 'me', onTab: () => {}, lang: pl() }));
    expect(m).toMatch(/^<nav class="bottom-nav" aria-label="[^"]+"/);
    expect(m.match(/aria-current="page"/g)).toHaveLength(1);
    expect(m).toMatch(/aria-current="page" aria-label="Instellingen · /);
  });
});

describe('the route on the home', () => {
  const route = (p: Progress) => html(createElement(Route, { progress: p, lang: pl(), onStart: () => {}, onPick: () => {}, onAll: () => {} }));

  it('Start is a button named by the lesson; done and not-yet lessons say so', () => {
    const m = route(progress({ currentUnit: 'u.firstday', completed: { 'l.hello': { best: 1, times: 1 } } }));
    expect(m).toMatch(/<button type="button" class="bay-card" aria-label="1\.2 [^"]+ · Start"/);
    expect(m).toContain(`<span class="sr-only"> · ${ui('stampDone', pl()).help}</span>`);
    // A lesson after the next one: read as "finish the one before first", not as nothing.
    expect(m).toContain(`<span class="sr-only"> · ${ui('locked', pl()).help}</span>`);
  });

  it('the streak flame is a picture with its number and words', () => {
    const m = html(createElement(TopBar, { streak: 3, words: 12, lang: pl(), done: false }));
    expect(m).toMatch(/class="stat stat-streak[^"]*" role="img" aria-label="3 [^"]+ · [^"]+"/);
  });
});

describe('fields: a label and a visible focus', () => {
  it('the code and reminder time fields get the focus ring, not only a faint glow', () => {
    const css = fs.readFileSync('src/styles.css', 'utf8');
    expect(css).toMatch(/\.pw-input:focus \{ outline: 3px solid var\(--focus\)/);
    expect(css).toMatch(/\.remind-own input:focus \{ outline: 3px solid var\(--focus\)/);
    // The Dutch name on a coach link's yellow light: the ink (4.5:1 in light and dark), not the faint grey.
    expect(css).toContain('.rb-marked .rb-nl { color: var(--ink); }');
  });
});
