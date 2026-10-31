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
    expect(m).toMatch(/<span class="rh-show"[^>]*>112<\/span>/);
  });
});
