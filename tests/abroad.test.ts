import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { AbroadLine } from '../src/components/AbroadLine';
import { ABROAD, abroadIds, abroadLine } from '../src/content/abroad';
import { cultureTips } from '../src/content/culture';
import { getHelpLanguage, helpLanguageSources } from '../src/i18n/all';

/**
 * "Uit een ander land?" (src/content/abroad.ts, 10 November 2026): sick and home, WW abroad (U2) and
 * posted work (A1), the work-rules topics for labour migrants, now under the language course's tips.
 */
describe('"Uit een ander land?" under a tip', () => {
  it('belongs to existing tips: illness, WW and the agency', () => {
    expect(Object.keys(ABROAD).sort()).toEqual(['c.agency', 'c.illness', 'c.ww']);
    for (const id of Object.keys(ABROAD)) expect(cultureTips.some((t) => t.id === id), id).toBe(true);
    expect(abroadIds).toEqual(Object.keys(ABROAD).map((id) => `${id}.x`));
  });

  it('says what to do, with the form or the person to ask', () => {
    expect(ABROAD['c.ww']).toMatch(/U2/);
    expect(ABROAD['c.agency']).toMatch(/A1/);
    expect(ABROAD['c.illness']).toMatch(/employer or the agency/);
  });

  it('is in every help language, under the tip, read aloud in it', () => {
    const tip = cultureTips.find((t) => t.id === 'c.ww')!;
    for (const lang of helpLanguageSources) expect(lang.gloss['c.ww.x'], lang.code).toBeTruthy();
    const pl = getHelpLanguage('pl')!;
    const m = renderToStaticMarkup(createElement(AbroadLine, { tip, lang: pl }));
    expect(m).toContain('tip-abroad');
    expect(m).toContain(pl.gloss['c.ww.x'] as string);
  });

  it('is not under other tips, nor under a Belgian one (the facts are the Netherlands\')', () => {
    const other = cultureTips.find((t) => !ABROAD[t.id])!;
    expect(renderToStaticMarkup(createElement(AbroadLine, { tip: other }))).toBe('');
    expect(abroadLine({ id: 'be.c.ww' })).toBeUndefined();
  });
});
