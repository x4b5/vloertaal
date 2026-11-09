import { describe, expect, it } from 'vitest';
import { proLayout, proSections } from '../src/content/pro';
import { coachPage } from '../src/lib/coachPage';

/**
 * "Voor begeleiders en werkgevers" was twelve open sections, about twenty phone screens (the
 * owner's request, 9 November 2026: "heel veel tekst"). Now what Vloertaal is and how to reach us
 * stay open, and the rest sits in three drawers.
 */
describe('Voor begeleiders: open sections and three drawers (src/content/pro.ts proLayout)', () => {
  const layout = proLayout();
  const ids = (sections: { id: string }[]) => sections.map((s) => s.id);

  it('opens with what Vloertaal is and ends with the contact, both open', () => {
    expect(layout[0]).toEqual({ kind: 'open', section: expect.objectContaining({ id: 'p.what' }) });
    expect(layout.at(-1)).toEqual({ kind: 'open', section: expect.objectContaining({ id: 'p.contact' }) });
  });

  it('has three drawers in between, in this order', () => {
    const drawers = layout.filter((l) => l.kind === 'drawer');
    expect(drawers.map((d) => d.title)).toEqual(['Zo zet je het in', 'Achtergrond', 'Privacy en testen']);
    expect(ids(drawers[0].sections)).toEqual(['p.group', 'p.comm', 'p.weekplan', 'p.kunjenu', 'p.entree']);
    expect(ids(drawers[1].sections)).toEqual(['p.story', 'p.who', 'p.voices', 'p.facts']);
    expect(ids(drawers[2].sections)).toEqual(['p.beta', 'p.privacy']);
  });

  it('leaves no section out and shows none twice', () => {
    const shown = layout.flatMap((l) => (l.kind === 'open' ? [l.section.id] : ids(l.sections)));
    expect([...shown].sort()).toEqual(ids(proSections).sort());
  });

  it('folds the same three drawers on vloertaal.nl/voor-begeleiders', () => {
    const page = coachPage();
    const drawers = [...page.matchAll(/<details class="drawer"><summary>(.*?)<\/summary>/g)].map((m) => m[1]);
    expect(drawers).toEqual(['Zo zet je het in', 'Achtergrond', 'Privacy en testen']);
    // What Vloertaal is comes before the first drawer, the contact after the last.
    expect(page.indexOf('id="what"')).toBeLessThan(page.indexOf('<details class="drawer">'));
    expect(page.indexOf('id="contact"')).toBeGreaterThan(page.lastIndexOf('</details>'));
  });
});
