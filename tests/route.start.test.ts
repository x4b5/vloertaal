import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, describe, expect, it } from 'vitest';
import { LanguagePicker, NL_KNOWN, Onboarding } from '../src/components/Screens';
import { settingsRows } from '../src/lib/settingsMenu';
import { setRulesTrack } from '../src/lib/track';

const html = (el: ReturnType<typeof createElement>) => renderToStaticMarkup(el);
afterEach(() => setRulesTrack(null));

/** The two learning routes (owner's choice, 31 October 2026). Since 2 November 2026 the first run
 *  has no page "Wat wil je leren?": "Ik spreek al Nederlands" is the last card of the language list. */
describe('the first page: the language, with "Ik spreek al Nederlands" in the list', () => {
  it('opens on the language page, also while the track is on', () => {
    setRulesTrack(true);
    const first = html(createElement(Onboarding, { onDone: () => {}, guess: null }));
    expect(first).toContain('onb-lang-list');
    expect(first).not.toContain('route-page');
    expect(first).not.toContain('Wat wil je leren?');
    setRulesTrack(false);
    expect(html(createElement(Onboarding, { onDone: () => {}, guess: null }))).not.toContain('Ik spreek al Nederlands');
  });

  it('under the list, in a band fixed at the bottom: "Ik spreek al Nederlands", while the track is on', () => {
    setRulesTrack(true);
    const m = html(createElement(Onboarding, { onDone: () => {}, guess: null }));
    expect(m.indexOf('>English<')).toBeLessThan(m.indexOf('onb-nl-dock'));
    expect(m.indexOf('onb-nl-dock')).toBeLessThan(m.indexOf(NL_KNOWN));
    expect(m).toMatch(/lang-btn-nl[\s\S]*Werkregels[\s\S]*Ik spreek al Nederlands/);
  });

  it('the guess page keeps two answers (yes, other language)', () => {
    setRulesTrack(true);
    const m = html(createElement(Onboarding, { onDone: () => {}, guess: 'pl' }));
    expect(m).toContain('lang-guess');
    expect(m.match(/class="max3-card /g)).toHaveLength(2);
  });

  it('Settings keeps the help languages only (no Werkregels card)', () => {
    setRulesTrack(true);
    expect(html(createElement(LanguagePicker, { onPick: () => {} }))).not.toContain('Werkregels');
  });

  it('Settings › Taal en ik: the route first; in Werkregels no help-language row', () => {
    const base = { helpLang: true, gender: false, preview: false, install: false, offline: false };
    expect(settingsRows('me', { ...base, routes: true }).slice(0, 2)).toEqual(['route', 'language']);
    expect(settingsRows('me', { ...base, routes: true, rules: true })[0]).toBe('route');
    expect(settingsRows('me', { ...base, routes: true, rules: true })).not.toContain('language');
    expect(settingsRows('me', base)[0]).toBe('language');
  });
});
