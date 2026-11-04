import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { RulesHelp } from '../src/components/RulesHelp';
import { WordsHub } from '../src/components/Screens';
import { HELP_ROWS, HELP_ROWS_BE, withSite } from '../src/content/regels/help';
import { getHelpLanguage, registerPack } from '../src/i18n';
import nlPack from '../src/i18n/packs/nl';
import plPack from '../src/i18n/packs/pl';

/**
 * Fase 4 (4 November 2026): the information about rights stays honest when nobody updates it.
 */
describe('a 0800 number has a second way: the official site', () => {
  it('every 0800 row, in the Netherlands and in Belgium, shows a site after its number', () => {
    const free = [...HELP_ROWS, ...HELP_ROWS_BE].filter((r) => r.href?.startsWith('tel:0800'));
    expect(free.map((r) => r.id).sort()).toEqual(['h.arbeidsinspectie', 'h.be.unia', 'h.csg', 'h.geldfit', 'h.juridischloket', 'h.meldmisdaad', 'h.veiligthuis']);
    for (const r of free) expect(r.show, r.id).toMatch(/^0800[\d -]+ · [a-z]+\.(nl|be)$/);
    const byId = Object.fromEntries([...HELP_ROWS, ...HELP_ROWS_BE].map((r) => [r.id, r]));
    expect(byId['h.juridischloket'].show).toBe('0800-8020 · juridischloket.nl');
    expect(byId['h.arbeidsinspectie'].show).toBe('0800-5151 · nlarbeidsinspectie.nl');
    expect(byId['h.veiligthuis'].show).toBe('0800-2000 · veiligthuis.nl');
    expect(byId['h.csg'].show).toBe('0800-0188 · centrumseksueelgeweld.nl');
    expect(byId['h.meldmisdaad'].show).toBe('0800-7000 · meldmisdaadanoniem.nl');
    expect(byId['h.geldfit'].show).toBe('0800-8115 · geldfit.nl');
    expect(byId['h.be.unia'].show).toBe('0800 12 800 · unia.be');
    // The tap still calls the number (one tap per row).
    expect(byId['h.juridischloket'].href).toBe('tel:08008020');
    expect(withSite('0800-1', 'x.nl')).toBe('0800-1 · x.nl');
  });

  it('the site is in the row on both Hulp tabs, as text: still one link per row', () => {
    registerPack(nlPack);
    const rules = renderToStaticMarkup(createElement(RulesHelp, { lang: getHelpLanguage('nl'), onShelf: () => {} }));
    expect(rules).toContain('0800-7000 · meldmisdaadanoniem.nl');
    expect(rules).not.toContain('href="https://www.meldmisdaadanoniem.nl"');
    registerPack(plPack);
    const taal = renderToStaticMarkup(createElement(WordsHub, { lang: getHelpLanguage('pl'), onTips: () => {} }));
    expect(taal).toContain('0800-8020 · juridischloket.nl');
    expect(taal).toContain('0800-2000 · veiligthuis.nl');
    expect(taal.match(/class="rh-card rh-link"/g)).toHaveLength(5);
  });
});
