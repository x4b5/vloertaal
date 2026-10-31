import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, describe, expect, it } from 'vitest';
import { LanguagePicker, Onboarding, RoutePage } from '../src/components/Screens';
import { langMeta, metaLanguage } from '../src/i18n';
import { settingsRows } from '../src/lib/settingsMenu';
import { setRulesTrack } from '../src/lib/track';

const html = (el: ReturnType<typeof createElement>) => renderToStaticMarkup(el);
afterEach(() => setRulesTrack(null));

/** The two learning routes (owner's choice, 31 October 2026): first "Wat wil je leren?", then the help language. */
describe('the first page: two routes', () => {
  it('asks "Wat wil je leren?" with two cards, in Dutch and the phone\'s language', () => {
    const pl = metaLanguage(langMeta('pl')!);
    const m = html(createElement(RoutePage, { lang: pl, onLearn: () => {}, onRules: () => {} }));
    expect(m).toContain('Wat wil je leren?');
    expect(m).toContain('Czego chcesz się uczyć?');
    expect(m).toContain('Nederlands leren');
    expect(m).toContain('Ik spreek al Nederlands');
    expect(m).toContain('Mówię już po niderlandzku');
    expect(m.match(/<button/g)).toHaveLength(2);
  });

  it('opens on the route page while the track is on, and on the language page when it is off', () => {
    setRulesTrack(true);
    expect(html(createElement(Onboarding, { onDone: () => {}, guess: null }))).toContain('route-page');
    setRulesTrack(false);
    expect(html(createElement(Onboarding, { onDone: () => {}, guess: null }))).not.toContain('route-page');
  });

  it('back from the next page: the language list after "Nederlands leren", the route page after Werkregels', () => {
    setRulesTrack(true);
    expect(html(createElement(Onboarding, { onDone: () => {}, guess: null, startWithList: true, previous: 'pl' }))).toContain('onb-lang-list');
    expect(html(createElement(Onboarding, { onDone: () => {}, guess: null, startWithList: true, previous: 'nl' }))).toContain('route-page');
  });

  it('no longer lists "Nederlands · Werkregels" among the help languages', () => {
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
