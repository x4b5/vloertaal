import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, describe, expect, it } from 'vitest';
import { LanguagePicker, NL_KNOWN, Onboarding } from '../src/components/Screens';
import { setRulesTrack } from '../src/lib/track';

const html = (el: ReturnType<typeof createElement>) => renderToStaticMarkup(el);
afterEach(() => setRulesTrack(null));

/** The language list as a menu in a box that scrolls inside, with its own scroll bar (the
 *  owner's request, 2 November 2026). The bar itself is measured in the browser (ScrollBox). */
describe('the first-run language list in its own scroll box', () => {
  it('all languages, English and "Is your language missing?" are inside the box', () => {
    const m = html(createElement(Onboarding, { onDone: () => {}, guess: null }));
    const box = m.indexOf('class="scroll-box ');
    const list = m.indexOf('class="scroll-box-list"');
    expect(box).toBeGreaterThan(0);
    expect(m.slice(box, box + 80)).toContain('lang-box');
    expect(list).toBeGreaterThan(box);
    expect(m.indexOf('role="group"')).toBeGreaterThan(list);
    expect(m.indexOf('>English<')).toBeGreaterThan(list);
    expect(m.indexOf('lang-btn-missing')).toBeGreaterThan(m.indexOf('>English<'));
  });

  it('"Ik spreek al Nederlands" stays outside the box, under it', () => {
    setRulesTrack(true);
    const m = html(createElement(Onboarding, { onDone: () => {}, guess: null }));
    const dock = m.indexOf('onb-nl-dock');
    expect(dock).toBeGreaterThan(m.indexOf('lang-btn-missing'));
    // The box is closed before the band starts: the band is not a row of the list.
    expect(m.slice(m.indexOf('lang-btn-missing'), dock)).toMatch(/<\/button><\/div><\/div><\/div><div class="$/);
    expect(m.indexOf(NL_KNOWN)).toBeGreaterThan(dock);
  });

  it('Settings keeps its own compact cards, without the box', () => {
    const s = html(createElement(LanguagePicker, { onPick: () => {}, compact: true, current: 'pl' }));
    expect(s).not.toContain('scroll-box');
  });
});

describe('Settings › Hulptaal: the same box as the first run', () => {
  it('shows the languages in the scroll box, one page that does not scroll, the chosen one marked', async () => {
    const { Settings } = await import('../src/components/Settings');
    const { getHelpLanguage } = await import('../src/i18n');
    const { emptyProgress } = await import('../src/lib/progress');
    const m = html(createElement(Settings, {
      progress: { ...emptyProgress, onboarded: true, helpLang: 'pl', sector: 'construction' },
      lang: getHelpLanguage('pl'), page: 'language', onPage: () => {}, onReturn: () => {}, onLang: () => {}, onGender: () => {}, onSector: () => {},
      onTheme: () => {}, onTextSize: () => {}, onVoice: () => {}, onQuiet: () => {}, onReset: () => {}, onRestore: () => {},
      onCertificate: () => {},
    }));
    expect(m).toContain('max3-lang');
    expect(m).toMatch(/class="scroll-box [^"]*lang-box/);
    expect(m).not.toContain('lang-grid-compact');
    expect(m).toMatch(/lang-btn picked/);
  });
});
