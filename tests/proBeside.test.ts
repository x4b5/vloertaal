import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { Coaches } from '../src/components/Coaches';
import { proSections, WHAT_BESIDE } from '../src/content/pro';
import { askPage, coachPage } from '../src/lib/coachPage';

/**
 * "Wat is Vloertaal?" for professionals: where it fits beside what they already use (the owner's
 * request, 4 November 2026). One paragraph in 'p.what' (src/content/pro.ts), in the app and on
 * vloertaal.nl/voor-begeleiders.
 */
const textOf = (html: string) => html.replace(/<[^>]+>/g, '').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&amp;/g, '&');

describe('Vloertaal beside other offers', () => {
  it('is the third paragraph of “Wat is Vloertaal?”, in the app and on the site', () => {
    const what = proSections.find((s) => s.id === 'p.what')!;
    expect(what.body[2]).toBe(WHAT_BESIDE);
    expect(textOf(renderToStaticMarkup(createElement(Coaches, { onBack: () => {} })))).toContain(WHAT_BESIDE);
    expect(textOf(coachPage())).toContain(WHAT_BESIDE);
    expect(textOf(askPage())).toContain(WHAT_BESIDE);
  });

  it('names the other offers, says it is a practice buddy and no replacement for lessons, and points to Work in NL', () => {
    for (const name of ['Oefenen.nl', 'NedBox (in Vlaanderen)', 'taalbuddy', 'Taal Doet Meer', 'Het Begint met Taal', 'Taalhuis', 'NT2-les']) {
      expect(WHAT_BESIDE, name).toContain(name);
    }
    expect(WHAT_BESIDE).toContain('oefenmaatje voor de werkvloer');
    expect(WHAT_BESIDE).toContain('geen vervanging van les');
    expect(WHAT_BESIDE).toMatch(/Work in NL, van het ministerie van Sociale Zaken en Werkgelegenheid/);
  });

  it('says nothing about the others’ quality, and links none of them (their addresses were not checked)', () => {
    expect(WHAT_BESIDE).not.toMatch(/beter|slechter|in plaats van|de beste|alleen maar|ouderwets|saai/i);
    for (const page of [coachPage(), askPage()]) {
      expect(page).not.toMatch(/href="[^"]*(oefenen|nedbox|workinnl|taaldoetmeer|hetbegintmettaal|taalhuis)/i);
    }
    expect(proSections.find((s) => s.id === 'p.what')!.site).toBeUndefined();
  });
});
