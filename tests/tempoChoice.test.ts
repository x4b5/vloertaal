import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { Settings } from '../src/components/Settings';
import { getHelpLanguage } from '../src/i18n';
import { emptyProgress, type Progress } from '../src/lib/progress';
import { settingsRows } from '../src/lib/settingsMenu';

const page = (p: Partial<Progress>) => renderToStaticMarkup(createElement(Settings, {
  progress: { ...emptyProgress, onboarded: true, helpLang: 'pl', sector: 'construction', ...p },
  lang: getHelpLanguage('pl'), page: 'tempo', onPage: () => {}, onReturn: () => {}, onLang: () => {}, onGender: () => {}, onSector: () => {},
  onTheme: () => {}, onTextSize: () => {}, onVoice: () => {}, onQuiet: () => {}, onReset: () => {}, onRestore: () => {},
  onCertificate: () => {},
}));

/** Tempo: Rustig, Normaal and Sneller leren on one page (the owner's choice, 2 November 2026). */
describe('Tempo with three choices', () => {
  it('has three cards, and no row "Sneller leren" of its own any more', () => {
    const m = page({});
    expect(m.match(/class="max3-card /g)).toHaveLength(3);
    expect(m).toContain('Sneller leren');
    expect(settingsRows('lessons', { rules: false } as never)).not.toContain('faster');
  });

  it('marks Sneller leren when it is on, else the tempo', () => {
    const picked = (m: string) => m.match(/class="max3-card picked[^"]*"[\s\S]*?<\/button>/)?.[0] ?? '';
    expect(picked(page({ pace: { faster: true }, tempo: 'normal' }))).toContain('Sneller leren');
    expect(picked(page({ tempo: 'calm' }))).toContain('Rustig');
    expect(picked(page({ tempo: 'normal' }))).toContain('Normaal');
  });
});
