import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { proSections } from '../src/content/pro';
import { testerSwitch } from '../src/lib/report';
import { INSTAP_FROM_LESSONS } from '../src/lib/toets';

/** The documents for coaches and the owner say what the app does (fase 1, 4 November 2026). */
const doc = (path: string) => readFileSync(path, 'utf8');

describe('the documents match the app', () => {
  it('Melden is off by default (src/lib/report.ts): no document says it is on, or that there is none', () => {
    const g = globalThis as { localStorage?: unknown };
    const before = g.localStorage;
    g.localStorage = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
    try {
      expect(testerSwitch()).toBe(false);
    } finally {
      g.localStorage = before;
    }
    for (const path of ['README.md', 'docs/linkedin/mails.md', 'docs/pilot.md', 'docs/weekplan.md']) {
      const text = doc(path);
      expect(text, path).not.toMatch(/standaard aan|geen meldknop/);
      if (/Melden|vlaggetje/.test(text)) expect(text, path).toMatch(/standaard uit/);
    }
  });

  it('the test "Wat ken je al?" comes after the first lesson, in the week plan too', () => {
    expect(INSTAP_FROM_LESSONS).toBe(1);
    const week1 = proSections.find((s) => s.id === 'p.weekplan')!.lines!.find((l) => l.lead === 'Week 1.')!.text;
    expect(week1.indexOf('eerste les')).toBeLessThan(week1.indexOf('Wat ken je al?'));
    const row = doc('docs/weekplan.md').split('\n').find((l) => l.startsWith('| **1** |'))!;
    expect(row.indexOf('eerste les')).toBeLessThan(row.indexOf('Wat ken je al?'));
    const pilot = doc('docs/pilot.md');
    expect(pilot).not.toContain('vóór les 1');
    expect(pilot).not.toContain('wat wil je leren');
    expect(pilot).toContain('welke kleur');
  });
});
