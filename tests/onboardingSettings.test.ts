import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { SectorCards, SectorGroupCards } from '../src/components/Sector';
import { guessHelpLang } from '../src/lib/langGuess';
import { sectorChoiceGroup, sectorGroupOf, sectorGroups, sectors } from '../src/content/sectors';
import { SETTINGS_PARENT, settingsDepth, settingsRows, voiceChoiceOf, voiceRefs, type SettingsContext } from '../src/lib/settingsMenu';
import { helpLanguages, languageMeta } from '../src/i18n/all';
import { GENDERED_LANGS } from '../src/i18n/types';
import { uiEn } from '../src/i18n/types';

describe('the first-run language guess', () => {
  it('takes the first phone language that is a help language', () => {
    expect(guessHelpLang(['pl-PL', 'en-US'])).toBe('pl');
    expect(guessHelpLang(['nl-NL', 'en', 'uk-UA'])).toBe('uk');
    expect(guessHelpLang(['ar-SY'])).toBe('ar');
    expect(guessHelpLang(['ti-ER'])).toBe('ti');
    expect(guessHelpLang(['tr'])).toBe('tr');
    expect(guessHelpLang(['ro_RO'])).toBe('ro');
    expect(guessHelpLang(['bg'])).toBe('bg');
  });
  it('reads Persian set for Afghanistan as Dari, other Persian as Persian', () => {
    expect(guessHelpLang(['fa-AF'])).toBe('prs');
    expect(guessHelpLang(['prs'])).toBe('prs');
    expect(guessHelpLang(['fa-IR'])).toBe('fa');
    expect(guessHelpLang(['fa'])).toBe('fa');
  });
  it('guesses Spanish, Portuguese, French and German from any country (es-MX, pt-BR, fr-BE, de-CH)', () => {
    expect(guessHelpLang(['es-MX'])).toBe('es');
    expect(guessHelpLang(['pt-BR'])).toBe('pt');
    expect(guessHelpLang(['fr-BE'])).toBe('fr');
    expect(guessHelpLang(['de-CH'])).toBe('de');
  });
  it('gives no guess for Dutch, English or anything else (the list shows at once)', () => {
    expect(guessHelpLang(['nl-NL'])).toBeNull();
    expect(guessHelpLang(['en-GB', 'it'])).toBeNull();
    expect(guessHelpLang([])).toBeNull();
    expect(guessHelpLang(undefined)).toBeNull();
  });
  it('every guess can be asked in its own language', () => {
    for (const l of helpLanguages) {
      expect(l.ui.langGuessYes, l.code).toBeTruthy();
      expect(l.ui.langGuessOther, l.code).toBeTruthy();
    }
  });
  it('the language list (loaded before any pack) matches the packs', () => {
    expect(languageMeta.map((m) => m.code)).toEqual(helpLanguages.map((l) => l.code));
    for (const l of helpLanguages) {
      const m = languageMeta.find((x) => x.code === l.code)!;
      expect({ name: m.name, nativeName: m.nativeName, dir: m.dir, reviewed: m.reviewed, gendered: m.gendered }, l.code)
        .toEqual({ name: l.name, nativeName: l.nativeName, dir: l.dir, reviewed: l.reviewed, gendered: GENDERED_LANGS.includes(l.code) });
      expect(m.ui, l.code).toEqual({ chooseLanguage: l.ui.chooseLanguage, langGuessYes: l.ui.langGuessYes, langGuessOther: l.ui.langGuessOther, appTagline: l.ui.appTagline, loadFailed: l.ui.loadFailed, retry: l.ui.retry });
    }
  });
});

describe('the sector in two steps', () => {
  // Three groups since the seventh sector (Tuinbouw, 30 October 2026): three cards on step 1
  // ("Iets anders" holds Tuinbouw and "Weet ik nog niet"), at most three cards on step 2.
  it('puts every sector in exactly one of three groups, at most three per group', () => {
    const all = sectorGroups.flatMap((g) => g.sectors);
    expect(sectorGroups).toHaveLength(3);
    for (const g of sectorGroups) expect(g.sectors.length).toBeLessThanOrEqual(3);
    expect([...all].sort()).toEqual(sectors.map((s) => s.id).sort());
    expect(sectorGroups.find((g) => g.id === 'make')!.sectors).toEqual(['logistics', 'construction', 'production']);
    expect(sectorGroups.find((g) => g.id === 'care')!.sectors).toEqual(['care', 'hospitality', 'cleaning']);
    expect(sectorGroups.find((g) => g.id === 'other')!.sectors).toEqual(['horticulture']);
    for (const g of sectorGroups) expect(uiEn[g.key]).toBeTruthy();
    for (const g of sectorGroups) expect(g.sectors.length + (g.notSure ? 1 : 0), g.id).toBeLessThanOrEqual(3);
  });
  const cards = (html: string) => html.match(/class="max3-card /g)?.length ?? 0;
  it('shows exactly three cards on step 1, and nothing else to tap', () => {
    const html = renderToStaticMarkup(createElement(SectorGroupCards, { onPick: () => {} }));
    expect(cards(html)).toBe(3);
    expect(html.match(/<button/g)).toHaveLength(3);
    expect(html).not.toContain('sector-notsure');
  });
  it('offers Tuinbouw and "Weet ik nog niet" in "Iets anders", and shows "none" picked there', () => {
    const html = renderToStaticMarkup(createElement(SectorCards, { group: 'other', current: 'none', onPick: () => {} }));
    expect(cards(html)).toBe(2);
    expect(html).toContain('Weet ik nog niet');
    expect(html).toContain('Tuinbouw');
    expect(html.match(/aria-checked="true"/g)).toHaveLength(1);
    expect(sectorChoiceGroup('none')).toBe('other');
    expect(sectorChoiceGroup('horticulture')).toBe('other');
    expect(sectorChoiceGroup('cleaning')).toBe('care');
    expect(sectorChoiceGroup(undefined)).toBeUndefined();
    const step1 = renderToStaticMarkup(createElement(SectorGroupCards, { current: 'none', onPick: () => {} }));
    expect(step1.match(/max3-card picked/g)).toHaveLength(1);
    expect(step1.indexOf('max3-card picked')).toBeGreaterThan(step1.lastIndexOf('Zorg en service'));
  });
  it('finds the group of a sector, none for "not sure yet"', () => {
    expect(sectorGroupOf('construction')).toBe('make');
    expect(sectorGroupOf('cleaning')).toBe('care');
    expect(sectorGroupOf('horticulture')).toBe('other');
    expect(sectorGroupOf('none')).toBeUndefined();
    expect(sectorGroupOf(undefined)).toBeUndefined();
  });
});

describe('Settings as a menu of three', () => {
  const ctx: SettingsContext = { helpLang: true, gender: true, preview: false, install: false, offline: true };
  it('has three lists, each setting one level below its list, the second sector step below the first', () => {
    expect(settingsDepth(undefined)).toBe(0);
    expect(settingsDepth('me')).toBe(1);
    expect(settingsDepth('voice')).toBe(2);
    expect(settingsDepth('sector-make')).toBe(3);
    const roots = Object.entries(SETTINGS_PARENT).filter(([, p]) => p === null).map(([k]) => k);
    expect(roots.sort()).toEqual(['lessons', 'me', 'phone']);
  });
  it('lists the owner\'s settings per row', () => {
    expect(settingsRows('me', ctx)).toEqual(['language', 'gender', 'sector', 'english', 'certificates']);
    expect(settingsRows('lessons', ctx)).toEqual(['sound', 'voice', 'speaking', 'writing', 'text', 'theme']);
    expect(settingsRows('phone', ctx)).toEqual(['offline', 'reminder', 'backup', 'counting', 'reset']);
  });
  it('leaves out what does not apply, and offers unlocking in the preview', () => {
    const none = { helpLang: false, gender: false, preview: true, install: true, offline: false };
    expect(settingsRows('me', none)).toEqual(['language', 'sector', 'certificates']);
    expect(settingsRows('phone', none)).toEqual(['unlock', 'reminder', 'install', 'backup', 'counting', 'reset']);
  });
  it('offers the voice as Automatic, a woman or a man', () => {
    const rec = [{ key: 'thijmen', gender: 'male' }, { key: 'daniel', gender: 'male' }, { key: 'ariel', gender: 'female' }];
    expect(voiceRefs(rec)).toEqual({ f: 'piper:ariel', m: 'piper:thijmen' });
    expect(voiceChoiceOf(null, rec)).toBe('auto');
    expect(voiceChoiceOf('piper:daniel', rec)).toBe('m');
    expect(voiceChoiceOf('piper:ariel', rec)).toBe('f');
    expect(voiceChoiceOf('Google Nederlands', rec)).toBeNull();
    expect(voiceRefs([])).toEqual({});
  });
});
