import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { MissingLanguage } from '../src/components/MissingLanguage';
import { LanguagePicker, Onboarding } from '../src/components/Screens';
import { MISSING_MAX, missingLangMail, missingName } from '../src/lib/missingLang';

const html = (el: ReturnType<typeof createElement>) => renderToStaticMarkup(el);

/** "Is your language missing?" on the first run's list (the owner's request, 2 November 2026). */
describe('a missing language', () => {
  it('is a last card of the first run’s list, not in Settings', () => {
    const first = html(createElement(Onboarding, { onDone: () => {}, guess: null }));
    expect(first).toContain('lang-btn-missing');
    expect(first.indexOf('>English<')).toBeLessThan(first.indexOf('Is your language missing?'));
    expect(html(createElement(LanguagePicker, { onPick: () => {}, compact: true }))).not.toContain('lang-btn-missing');
  });

  it('mails only the typed language to hoi@vloertaal.nl', () => {
    const url = missingLangMail('  Soomaali   (Somali) ');
    expect(url.startsWith('mailto:hoi@vloertaal.nl?subject=')).toBe(true);
    const q = new URLSearchParams(url.split('?')[1]);
    expect(q.get('subject')).toBe('Taal gemist: Soomaali (Somali)');
    expect(q.get('body')).toContain('Ik mis deze taal in Vloertaal: Soomaali (Somali)');
    expect(missingName('x'.repeat(200))).toHaveLength(MISSING_MAX);
    expect(missingName('   ')).toBe('');
  });

  it('its page: a labelled field, Send off until something is typed, the address as text', () => {
    const m = html(createElement(MissingLanguage, { onBack: () => {} }));
    expect(m).toContain('<label class="missing-label" for="missing-name">');
    expect(m).toMatch(/<button[^>]*disabled=""[^>]*>.*Send<\/button>/);
    expect(m).toContain('hoi@vloertaal.nl');
    expect(m).toContain('chrome-back');
  });
});
