import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { beforeAll, describe, expect, it } from 'vitest';
import { RulesHelp } from '../src/components/RulesHelp';
import { NlCard, WordsHub } from '../src/components/Screens';
import { Settings } from '../src/components/Settings';
import { getHelpLanguage, registerPack } from '../src/i18n/all';
import nlPack from '../src/i18n/packs/nl';
import { emptyProgress } from '../src/lib/progress';
import { SETTINGS_PARENT, settingsDepth, type SettingsPage } from '../src/lib/settingsMenu';

/**
 * Fase 0 of the review of 9 November 2026: what changes before the switch to Werkregels, the
 * coach card one tap from Hulp, and the work-rules card without the Dutch flag.
 */
beforeAll(() => registerPack(nlPack));

const html = (el: ReturnType<typeof createElement>) => renderToStaticMarkup(el);
const pl = () => getHelpLanguage('pl')!;
const settings = (page: SettingsPage, helpLang: 'pl' | 'nl' = 'pl') => html(createElement(Settings, {
  progress: { ...emptyProgress, onboarded: true, helpLang, sector: 'construction' },
  lang: getHelpLanguage(helpLang)!, page, onPage: () => {}, onReturn: () => {}, onLang: () => {}, onGender: () => {}, onSector: () => {},
  onTheme: () => {}, onTextSize: () => {}, onVoice: () => {}, onQuiet: () => {}, onReset: () => {}, onRestore: () => {},
  onCertificate: () => {},
}));

describe('"Naar Werkregels?": what changes, before the switch', () => {
  it('is a page under "Wat wil je leren?"', () => {
    expect(SETTINGS_PARENT.switch).toBe('route');
    expect(settingsDepth('switch')).toBe(3);
  });

  it('from the language course, "Ik spreek al Nederlands" leads on (a chevron), it does not switch at once', () => {
    const m = settings('route');
    const cards = m.split('max3-card-wrap').slice(1);
    const rules = cards.find((c) => c.includes('Ik spreek al Nederlands'))!;
    expect(rules).toContain('max3-chev');
    // In Werkregels itself it is the current choice (no page in between).
    expect(settings('route', 'nl').split('max3-card-wrap').slice(1).find((c) => c.includes('Ik spreek al Nederlands'))).not.toContain('max3-chev');
  });

  it('says in the help language, with the Dutch under it, what goes and what stays; two buttons', () => {
    const m = settings('switch');
    const lang = pl();
    for (const key of ['switchTitle', 'switchDutch', 'switchReview', 'switchKept', 'switchGo', 'cancel'] as const) {
      expect(m, key).toContain(lang.ui[key] as string);
    }
    expect(m).toContain('Alles wordt Nederlands. Je hulptaal gaat uit.');
    expect(m).toContain('Ja, naar Werkregels');
    // The back arrow (chrome) and the two buttons: nothing else to tap.
    expect(m.match(/<button\b/g)).toHaveLength(3);
  });
});

describe('"Voor je begeleider" on the Hulp tab', () => {
  it('opens the coach card from both tabs, in the help language and in Dutch', () => {
    const taal = html(createElement(WordsHub, { lang: pl(), onTips: () => {}, onColleague: () => {}, onCoach: () => {} }));
    expect(taal).toContain('hub-coach');
    expect(taal).toContain('Voor je begeleider');
    expect(taal).toContain(pl().ui.forCoach as string);
    const regels = html(createElement(RulesHelp, { lang: getHelpLanguage('nl')!, onShelf: () => {}, onCoach: () => {} }));
    expect(regels).toContain('hub-coach');
    expect(regels).toContain('Voor je begeleider');
  });

  it('is only there when the app gives it somewhere to go', () => {
    expect(html(createElement(WordsHub, { lang: pl(), onTips: () => {} }))).not.toContain('hub-coach');
  });
});

describe('the work-rules card under the languages', () => {
  it('has the picture of a contract, not the Dutch flag: it is no language', () => {
    const m = html(createElement(NlCard, { onPick: () => {} }));
    expect(m).toContain('lang-mark-rules');
    expect(m).not.toContain('lang-flag');
    expect(m).toContain('Ik spreek al Nederlands');
  });
});
