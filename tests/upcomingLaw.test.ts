import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { UPCOMING_LAW } from '../src/content/updates';
import { dayKey } from '../src/lib/progress';

/**
 * "Komt eraan" (src/content/updates.ts UPCOMING_LAW): laws that take effect later, for the monthly
 * check and the owner. A date that has passed while its item is still there gives a WARNING
 * (console.warn), never a failure: the app is not wrong on that day by itself, but someone must look.
 */
/** The dates on or before `today` (YYYY-MM-DD) still in the list, as one line each. */
const passedOn = (today: string) =>
  UPCOMING_LAW.flatMap((l) => l.dates.filter((d) => d.date <= today).map((d) => `${l.law} (${l.country}): ${d.date}, ${d.what}`));

describe('UPCOMING_LAW', () => {
  it('each item: a law, a country, dates, what to change, and ids that are in its files', () => {
    expect(UPCOMING_LAW.length).toBeGreaterThan(0);
    for (const l of UPCOMING_LAW) {
      expect(l.law.trim()).toBeTruthy();
      expect(['nl', 'be']).toContain(l.country);
      expect(l.dates.length, l.law).toBeGreaterThan(0);
      for (const d of l.dates) {
        expect(d.date, l.law).toMatch(/^\d{4}-\d{2}-\d{2}$/);
        expect(d.what.trim(), l.law).toBeTruthy();
      }
      expect(l.change.trim()).toBeTruthy();
      expect(l.source.trim()).toBeTruthy();
      const text = l.files.map((f) => { expect(existsSync(f), f).toBe(true); return readFileSync(f, 'utf8'); }).join('\n');
      for (const id of l.ids) expect(text.includes(`'${id}'`), `${l.law}: ${id} in ${l.files.join(', ')}`).toBe(true);
    }
  });

  it('Wet meer zekerheid flexwerkers (while it is in the list): the ids next to its "flexwerkers" comments', () => {
    const flex = UPCOMING_LAW.find((l) => l.law === 'Wet meer zekerheid flexwerkers');
    if (!flex) return; // taken out once the app was changed: nothing to check
    expect(flex.ids).toEqual(expect.arrayContaining(['c.contract', 'c.agency', 'c.illness']));
    expect(flex.files).toEqual(expect.arrayContaining(['src/content/work.ts', 'src/content/regels/units/contract.ts']));
  });

  it('finds the dates that have passed', () => {
    const dates = UPCOMING_LAW.flatMap((l) => l.dates.map((d) => d.date)).sort();
    const before = (d: string) => { const t = new Date(`${d}T12:00:00Z`); t.setUTCDate(t.getUTCDate() - 1); return t.toISOString().slice(0, 10); };
    expect(passedOn(before(dates[0]))).toEqual([]);
    expect(passedOn(dates[0]).length).toBeGreaterThan(0);
    expect(passedOn(dates[dates.length - 1])).toHaveLength(dates.length);
  });

  it('warns when a date has passed and the item is still here', () => {
    for (const p of passedOn(dayKey(new Date()))) {
      console.warn(`⚠️ UPCOMING_LAW: de ingangsdatum is voorbij en het item staat er nog. Pas de app aan (zie "change") en haal de datum weg: ${p}`);
    }
    // Never fails on a date.
    expect(true).toBe(true);
  });
});
