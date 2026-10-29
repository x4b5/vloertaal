import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { WordsHub } from '../src/components/Screens';
import { getHelpLanguage, registerPack } from '../src/i18n';
import plPack from '../src/i18n/packs/pl';

describe('the Hulp tab of the language course: who can help at work', () => {
  it('lists 112, the Juridisch Loket, the Inspectorate and FairWork in the help language', () => {
    registerPack(plPack);
    const m = renderToStaticMarkup(createElement(WordsHub, { lang: getHelpLanguage('pl'), onTips: () => {} }));
    expect(m).toContain('Problemy w pracy? Kto może pomóc');
    for (const href of ['tel:08008020', 'tel:08005151', 'https://www.fairwork.nu']) expect(m).toContain(`href="${href}"`);
    expect(m).toContain('Bezpłatna porada w sprawie umowy');
    expect(m.match(/class="rh-card rh-link"/g)).toHaveLength(3);
  });

  it('shows 112 without a call button: one tap must not dial the emergency number by accident', () => {
    registerPack(plPack);
    const m = renderToStaticMarkup(createElement(WordsHub, { lang: getHelpLanguage('pl'), onTips: () => {} }));
    expect(m).not.toContain('href="tel:112"');
    expect(m).toMatch(/<span class="rh-show"[^>]*>112<\/span>/);
  });
});
