import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { WordsHub } from '../src/components/Screens';
import { getHelpLanguage, registerPack } from '../src/i18n';
import plPack from '../src/i18n/packs/pl';

describe('the Hulp tab of the language course: who can help at work', () => {
  it('lists 112, the Juridisch Loket, the Inspectorate, FairWork, 113 and Veilig Thuis in the help language', () => {
    registerPack(plPack);
    const m = renderToStaticMarkup(createElement(WordsHub, { lang: getHelpLanguage('pl'), onTips: () => {} }));
    expect(m).toContain('Problemy w pracy? Kto może pomóc');
    // FairWork is a number now (Inhoudsronde 3), and the crisis lines 113 and Veilig Thuis are there.
    for (const href of ['tel:08008020', 'tel:08005151', 'tel:0207600809', 'tel:113', 'tel:08002000']) expect(m).toContain(`href="${href}"`);
    expect(m).toContain('Bezpłatna porada w sprawie umowy');
    expect(m).toContain('Myślisz o odebraniu sobie życia');
    expect(m.match(/class="rh-card rh-link"/g)).toHaveLength(5);
  });

  it('shows 112 without a call button: one tap must not dial the emergency number by accident', () => {
    registerPack(plPack);
    const m = renderToStaticMarkup(createElement(WordsHub, { lang: getHelpLanguage('pl'), onTips: () => {} }));
    expect(m).not.toContain('href="tel:112"');
    // The name is the number: it is said once, not again on a line under it.
    expect(m).toMatch(/<span class="rh-name"[^>]*>112<\/span>/);
    expect(m).not.toMatch(/<span class="rh-show"[^>]*>112<\/span>/);
  });
});

describe('a help row says its number once', () => {
  it('hides the number line when the name is the number', async () => {
    const { helpShow } = await import('../src/content/regels/help');
    expect(helpShow({ name: '112', show: '112' })).toBeNull();
    expect(helpShow({ name: '1813 Zelfmoordlijn', show: '1813' })).toBeNull();
    expect(helpShow({ name: 'Juridisch Loket', show: '0800-8020' })).toBe('0800-8020');
  });

  it('says "gratis" in the line only, not again after the number', async () => {
    const { HELP_ROWS } = await import('../src/content/regels/help');
    for (const r of HELP_ROWS) if (/gratis/i.test(r.when)) expect(r.show, r.id).not.toMatch(/gratis/i);
  });
});
