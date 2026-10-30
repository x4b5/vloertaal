import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { SectorCards, SectorGroupHead, SectorGroupList } from '../src/components/Sector';
import { guessHelpLang } from '../src/lib/langGuess';
import { sectorGroupOf, sectorGroups, sectors, type SectorChoice } from '../src/content/sectors';
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
  // Since 30 October 2026 (owner's decision): step 1 is a list of one kind of row, the three
  // kinds of work and "Weet ik nog niet" (the list exception of max 3); step 2 the three sectors
  // of a group. "Iets anders" is gone.
  it('puts every sector in exactly one of three groups, three per group', () => {
    const all = sectorGroups.flatMap((g) => g.sectors);
    expect(sectorGroups.map((g) => g.id)).toEqual(['build', 'make', 'care']);
    expect(all).toHaveLength(new Set(all).size);
    expect([...all].sort()).toEqual(sectors.map((s) => s.id).sort());
    for (const g of sectorGroups) expect(g.sectors, g.id).toHaveLength(3);
    expect(sectorGroups.find((g) => g.id === 'build')!.sectors).toEqual(['construction', 'technical', 'garage']);
    expect(sectorGroups.find((g) => g.id === 'make')!.sectors).toEqual(['production', 'logistics', 'horticulture']);
    expect(sectorGroups.find((g) => g.id === 'care')!.sectors).toEqual(['care', 'hospitality', 'cleaning']);
    expect(sectorGroups.map((g) => g.nl)).toEqual(['Bouw en techniek', 'Maken en verplaatsen', 'Zorg en service']);
    for (const g of sectorGroups) expect(uiEn[g.key]).toBeTruthy();
    expect(Object.keys(uiEn)).not.toContain('sectorGroupOther');
  });
  const rows = (html: string) => html.match(/class="set-row sector-group-row/g)?.length ?? 0;
  it('shows step 1 as one list of four rows of one kind, "Weet ik nog niet" last', () => {
    const html = renderToStaticMarkup(createElement(SectorGroupList, { onGroup: () => {}, onNotSure: () => {} }));
    expect(html.match(/<ul /g)).toHaveLength(1);
    expect(rows(html)).toBe(4);
    expect(html.match(/<button/g)).toHaveLength(4);
    expect(html).not.toContain('max3-card');
    for (const nl of ['Bouw en techniek', 'Maken en verplaatsen', 'Zorg en service']) expect(html).toContain(nl);
    expect([...html.matchAll(/data-group="(\w+)"/g)].map((m) => m[1])).toEqual(['build', 'make', 'care', 'none']);
    // The three groups lead on (a chevron), "Weet ik nog niet" does not.
    expect(html.match(/set-row-chev/g)).toHaveLength(3);
    // The Dutch labels carry their language.
    expect(html).toContain('<span class="set-row-nl" lang="nl">Weet ik nog niet</span>');
  });
  it('marks the current choice on step 1: its group, or "Weet ik nog niet" for none', () => {
    const marked = (current?: SectorChoice) => {
      const html = renderToStaticMarkup(createElement(SectorGroupList, { current, onGroup: () => {}, onNotSure: () => {} }));
      return [...html.matchAll(/data-group="(\w+)" aria-current="true"/g)].map((m) => m[1]);
    };
    expect(marked('none')).toEqual(['none']);
    expect(marked('construction')).toEqual(['build']);
    expect(marked('technical')).toEqual(['build']);
    expect(marked('garage')).toEqual(['build']);
    expect(marked('production')).toEqual(['make']);
    expect(marked('logistics')).toEqual(['make']);
    expect(marked('horticulture')).toEqual(['make']);
    expect(marked('cleaning')).toEqual(['care']);
    expect(marked(undefined)).toEqual([]);
  });
  it('offers the three sectors of a group on step 2, with the current one picked', () => {
    const html = renderToStaticMarkup(createElement(SectorCards, { group: 'build', current: 'garage', onPick: () => {} }));
    expect(html.match(/class="max3-card /g)).toHaveLength(3);
    for (const nl of ['Bouw', 'Techniek', 'Garage']) expect(html).toContain(`lang="nl">${nl}<`);
    expect(html.match(/aria-checked="true"/g)).toHaveLength(1);
    expect(html).not.toContain('Weet ik nog niet');
  });
  it('gives step 2 a heading that can take the focus', () => {
    const html = renderToStaticMarkup(createElement(SectorGroupHead, { group: 'make' }));
    expect(html).toMatch(/^<h3 tabindex="-1" class="max3-crumb sector-group-head">/);
    expect(html).toContain('Making &amp; moving');
    expect(renderToStaticMarkup(createElement(SectorGroupHead, { group: 'build', level: 2 }))).toMatch(/^<h2 /);
  });
  it('finds the group of a sector, none for "not sure yet"', () => {
    expect(sectorGroupOf('construction')).toBe('build');
    expect(sectorGroupOf('technical')).toBe('build');
    expect(sectorGroupOf('garage')).toBe('build');
    expect(sectorGroupOf('production')).toBe('make');
    expect(sectorGroupOf('horticulture')).toBe('make');
    expect(sectorGroupOf('cleaning')).toBe('care');
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
    expect(settingsDepth('sector-build')).toBe(3);
    const roots = Object.entries(SETTINGS_PARENT).filter(([, p]) => p === null).map(([k]) => k);
    expect(roots.sort()).toEqual(['lessons', 'me', 'phone']);
  });
  it('lists the owner\'s settings per row', () => {
    expect(settingsRows('me', ctx)).toEqual(['language', 'gender', 'sector', 'country', 'english', 'certificates', 'kaart']);
    expect(settingsRows('lessons', ctx)).toEqual(['sound', 'voice', 'tempo', 'faster', 'speaking', 'writing', 'text', 'theme', 'toets']);
    expect(settingsRows('phone', ctx)).toEqual(['offline', 'reminder', 'backup', 'counting', 'reset']);
  });
  it('leaves out what does not apply, and offers unlocking in the preview', () => {
    const none = { helpLang: false, gender: false, preview: true, install: true, offline: false };
    expect(settingsRows('me', none)).toEqual(['language', 'sector', 'country', 'certificates', 'kaart']);
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
