import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, describe, expect, it } from 'vitest';
import { LanguagePicker, Onboarding, RoutePage } from '../src/components/Screens';
import { langMeta, metaLanguage } from '../src/i18n';
import { settingsRows } from '../src/lib/settingsMenu';
import { setRulesTrack } from '../src/lib/track';

const html = (el: ReturnType<typeof createElement>) => renderToStaticMarkup(el);
afterEach(() => setRulesTrack(null));

/** The two learning routes (owner's choice, 31 October 2026): since 1 November 2026 the help language first, then "Wat wil je leren?". */
describe('the first page: two routes', () => {
  it('asks "Wat wil je leren?" with two cards, in Dutch and the phone\'s language', () => {
    const pl = metaLanguage(langMeta('pl')!);
    const m = html(createElement(RoutePage, { lang: pl, onLearn: () => {}, onRules: () => {} }));
    expect(m).toContain('Wat wil je leren?');
    expect(m).toContain('Czego chcesz się uczyć?');
    expect(m).toContain('Nederlands leren');
    expect(m).toContain('Ik spreek al Nederlands');
    expect(m).toContain('Mówię już po niderlandzku');
    // Two cards to choose from; the speaker for the question is not a choice (max-3 leaves it out).
    expect(m.match(/class="max3-card /g)).toHaveLength(2);
    expect(m).toContain('class="onb-say"');
  });

  it('opens on the language page first (the owner’s choice, 1 November 2026), also while the track is on', () => {
    setRulesTrack(true);
    const first = html(createElement(Onboarding, { onDone: () => {}, guess: null }));
    expect(first).toContain('onb-lang-list');
    expect(first).not.toContain('route-page');
    setRulesTrack(false);
    expect(html(createElement(Onboarding, { onDone: () => {}, guess: null }))).not.toContain('route-page');
    // The route page comes after the language, in that language, with a way back.
    setRulesTrack(true);
    const route = html(createElement(Onboarding, { onDone: () => {}, guess: 'pl', startAtRoute: true }));
    expect(route).toContain('route-page');
    expect(route).toContain('chrome-back');
  });

  it('back from the next page: the route page (the page before it), after either choice', () => {
    setRulesTrack(true);
    expect(html(createElement(Onboarding, { onDone: () => {}, guess: null, startWithList: true, previous: 'pl' }))).toContain('route-page');
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
