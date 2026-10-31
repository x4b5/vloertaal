import { describe, expect, it } from 'vitest';
import { beUnitOf } from '../src/content/regels/be';
import type { RuleStep } from '../src/content/regels/types';

/**
 * The drawn cards of the Belgian units Rekenen and Winkel (src/content/regels/be/units/rekenen.ts
 * and winkel.ts) add up, as the Dutch ones do in tests/rulesContent.test.ts: every sum's best
 * answer is the value the card gives, the steps of the sum reach that number, and the wrong
 * options are other numbers.
 */
type Card = Extract<RuleStep, { kind: 'card' }>;
const cardsOf = (nlUnit: string): Card[] =>
  (beUnitOf(nlUnit)?.unit.lessons ?? []).flatMap((l) => l.steps).filter((s): s is Card => s.kind === 'card');
const cards = [...cardsOf('r.rekenen'), ...cardsOf('r.winkel')];
const bestOf = (s: Card) => s.options.find((o) => o.best)!.text;
/** The numbers in a text ("13,40 euro" → 13.4, "1.000 euro" → 1000, "5 lagen van 8 dozen" → [5, 8]). */
const nums = (t: string) => [...t.matchAll(/\d+(?:\.\d{3})*(?:,\d+)?/g)].map((m) => Number(m[0].replace(/\./g, '').replace(',', '.')));
const value = (s: Card, label: string) => {
  const r = s.card.rows.find((x) => x.label === label);
  expect(r, `${s.id}: row ${label}`).toBeDefined();
  return r!.value;
};
const row = (s: Card, label: string) => nums(value(s, label));
const time = (t: string) => { const [h, m] = t.match(/(\d{1,2})[.:](\d{2})/)!.slice(1).map(Number); return h + m / 60; };

describe('Belgian units: the drawn cards add up', () => {
  it('has the cards of Rekenen and Winkel', () => {
    expect(cards.map((s) => s.id)).toEqual([
      'r.be.l.rekenen.1.ca1', 'r.be.l.rekenen.1.ca2', 'r.be.l.rekenen.1.ca3', 'r.be.l.rekenen.2.ca1',
      'r.be.l.rekenen.2.ca2', 'r.be.l.rekenen.2.ca3', 'r.be.l.rekenen.3.ca1', 'r.be.l.rekenen.3.ca2', 'r.be.l.winkel.3.ca1',
    ]);
  });

  it('shows a worked-out row\'s answer only after Check, and gives every sum its steps', () => {
    for (const s of cards) {
      expect(s.card.rows.some((r) => r.hit || r.answer), s.id).toBe(true);
      for (const r of s.card.rows) if (r.answer !== undefined) {
        expect(r.value, `${s.id}: ${r.label}`).toBe('?');
        expect(r.answer, s.id).toBe(bestOf(s));
      }
      expect(s.sum?.length, s.id).toBeGreaterThan(0);
      expect(s.sum!.length, s.id).toBeLessThanOrEqual(3);
    }
  });

  it('adds up: every sum\'s best answer is the value the card gives', () => {
    const check: Record<string, (s: Card) => void> = {
      // Uurrooster: eindtijd − begintijd − pauze.
      'r.be.l.rekenen.1.ca1': (s) => expect(nums(bestOf(s))[0]).toBeCloseTo(time(value(s, 'Einde')) - time(value(s, 'Begin')) - row(s, 'Pauze')[0] / 60, 5),
      // Weekrooster: the days added up, against the contract (in the card's sub line).
      'r.be.l.rekenen.1.ca2': (s) => {
        const total = s.card.rows.reduce((n, r) => n + nums(r.value)[0], 0);
        const contract = nums(s.card.sub!)[0];
        expect(bestOf(s)).toBe(total === contract ? `Ja, dat is precies ${contract} uur.` : `Nee, het is ${Math.abs(total - contract)} uur te ${total > contract ? 'veel' : 'weinig'}.`);
        expect(s.sum!.join(' ')).toContain(`= ${total} uur`);
      },
      // Uurrooster zonder pauze: meer dan 6 uur werk (België: pauze na 6 uur), dus "Nee".
      'r.be.l.rekenen.1.ca3': (s) => {
        const hours = time(value(s, 'Einde')) - time(value(s, 'Begin'));
        expect(hours).toBeGreaterThan(6);
        expect(nums(s.question)[0]).toBe(hours);
        expect(row(s, 'Pauze')[0]).toBe(0);
        expect(bestOf(s)).toMatch(/^Nee\b/);
        expect(nums(bestOf(s))[0]).toBe(6);
      },
      // Uren keer uurloon.
      'r.be.l.rekenen.2.ca1': (s) => expect(nums(bestOf(s))[0]).toBe(row(s, 'Gewerkte uren')[0] * row(s, 'Bruto per uur')[0]),
      // Overloon: uren keer uurloon, plus het percentage daarvan.
      'r.be.l.rekenen.2.ca2': (s) => {
        const base = row(s, 'Overuren')[0] * row(s, 'Uurloon')[0];
        expect(nums(bestOf(s))[0]).toBe(base + (base * row(s, 'Toeslag')[0]) / 100);
      },
      // RSZ: 13,07 procent van het brutoloon (bediende), op de cent.
      'r.be.l.rekenen.2.ca3': (s) => {
        expect(row(s, 'RSZ')[0]).toBe(13.07);
        expect(nums(bestOf(s))[0]).toBeCloseTo(Math.round(row(s, 'Brutoloon')[0] * row(s, 'RSZ')[0]) / 100, 2);
      },
      // Pakbon: lagen keer dozen per laag, and the same as the pakbon says.
      'r.be.l.rekenen.3.ca1': (s) => {
        const [lagen, perLaag] = row(s, 'Op de pallet');
        expect(nums(bestOf(s))[0]).toBe(lagen * perLaag);
        expect(nums(bestOf(s))[0]).toBe(row(s, 'Aantal dozen')[0]);
      },
      // Etiket: ml per liter keer de liters in the question.
      'r.be.l.rekenen.3.ca2': (s) => expect(nums(bestOf(s))[0]).toBe(row(s, 'Gebruik')[0] * nums(s.question)[0]),
      // Kassabon: betaald − totaal.
      'r.be.l.winkel.3.ca1': (s) => expect(nums(bestOf(s))[0]).toBeCloseTo(row(s, 'Betaald')[0] - row(s, 'Totaal')[0], 2),
    };
    for (const s of cards) {
      expect(check[s.id], `${s.id} has a check`).toBeDefined();
      check[s.id](s);
      // The steps of the sum come to the best answer's number.
      expect(s.sum!.some((line) => nums(line).includes(nums(bestOf(s))[0])), s.id).toBe(true);
      // Wrong options are other answers (typical mistakes), never the same as the best one.
      expect(new Set(s.options.map((o) => o.text)).size, s.id).toBe(3);
    }
  });
});
