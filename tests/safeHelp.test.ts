import { describe, expect, it } from 'vitest';
import { workContacts } from '../src/components/Screens';
import { monthYear, RULES_ABUSE_BE, RULES_CHECKED, RULES_DISCLAIMER_BE, RULES_NOTICE } from '../src/content/regels/disclaimer';
import { HELP_ROWS, HELP_ROWS_BE } from '../src/content/regels/help';
import { LAW_CHECKED, UPCOMING_LAW } from '../src/content/updates';
import { helpLanguages } from '../src/i18n/all';
import { dayKey } from '../src/lib/progress';

/**
 * Inhoudsronde 3 (31 okt 2026, audit-inhoud 3, 6, 7 and 8): safe help and laws to come.
 */
describe('safe help: the crisis lines and exploitation in Belgium', () => {
  it('the Belgian line under the rules on uitbuiting names the centres for victims, not only Unia', () => {
    expect(RULES_ABUSE_BE).toContain('Payoke');
    expect(RULES_ABUSE_BE).toContain('078 055 800');
    // Unia stays, for discriminatie.
    expect(RULES_ABUSE_BE).toMatch(/Discriminatie\? Unia/);
    expect(RULES_ABUSE_BE.indexOf('Uitbuiting')).toBeLessThan(RULES_ABUSE_BE.indexOf('Unia'));
  });

  it('the Belgian Hulp rows call the meldpunt mensenhandel and 1813', () => {
    const be = Object.fromEntries(HELP_ROWS_BE.map((r) => [r.id, r]));
    expect(be['h.be.payoke'].href).toBe('tel:078055800');
    expect(be['h.be.payoke'].show).toContain('078 055 800');
    expect(be['h.be.1813'].href).toBe('tel:1813');
    expect(be['h.be.1712'].href).toBe('tel:1712');
  });

  it('the Dutch rows have 113, Veilig Thuis, the Centrum Seksueel Geweld and the number of FairWork', () => {
    const nl = Object.fromEntries(HELP_ROWS.map((r) => [r.id, r]));
    expect(nl['h.113'].href).toBe('tel:113');
    expect(nl['h.veiligthuis'].href).toBe('tel:08002000');
    expect(nl['h.csg'].href).toBe('tel:08000188');
    expect(nl['h.fairwork'].href).toBe('tel:0207600809');
    // 112 stays on top.
    expect(HELP_ROWS[0].id).toBe('h.112');
    expect(HELP_ROWS_BE[0].id).toBe('h.112');
  });

  it('the Hulp tab of Taal shows 113 and Veilig Thuis (NL) and 1813 (BE), each with a line in every help language', () => {
    const nl = workContacts('nl').map((c) => c.id);
    expect(nl).toEqual(expect.arrayContaining(['h.112', 'h.113', 'h.veiligthuis']));
    expect(nl[0]).toBe('h.112');
    expect(workContacts('be').map((c) => c.id)).toContain('h.be.1813');
    for (const country of ['nl', 'be'] as const)
      for (const c of workContacts(country))
        for (const lang of helpLanguages) expect(lang.ui[c.when]?.toString().trim(), `${lang.code} ${c.when}`).toBeTruthy();
  });
});

describe('"Bijgewerkt": the month of the last law check', () => {
  it('RULES_CHECKED follows LAW_CHECKED, and the learner sees it', () => {
    expect(LAW_CHECKED).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(RULES_CHECKED).toBe(monthYear(LAW_CHECKED));
    expect(monthYear('2027-03-02')).toBe('maart 2027');
    expect(RULES_NOTICE.join(' ')).toContain(`Bijgewerkt: ${RULES_CHECKED}.`);
    expect(RULES_DISCLAIMER_BE.join(' ')).toContain(`Bijgewerkt: ${RULES_CHECKED}.`);
  });

  it('LAW_CHECKED is not in the future, and warns when it is older than 45 days', () => {
    const today = dayKey(new Date());
    expect(LAW_CHECKED <= today).toBe(true);
    const days = (Date.parse(`${today}T12:00:00Z`) - Date.parse(`${LAW_CHECKED}T12:00:00Z`)) / 86_400_000;
    if (days > 45) console.warn(`⚠️ LAW_CHECKED (${LAW_CHECKED}) is ${days} dagen oud. Doe de maandcheck (docs/logboek.md) en zet de datum bij.`);
  });
});

describe('UPCOMING_LAW: the laws found on 31 October 2026', () => {
  it('has the Wtta, the end of the housing deduction and Belgian items, each with a source', () => {
    const names = UPCOMING_LAW.map((l) => l.law);
    expect(names.some((n) => n.startsWith('Wtta'))).toBe(true);
    expect(names.some((n) => n.includes('huisvesting'))).toBe(true);
    expect(UPCOMING_LAW.filter((l) => l.country === 'be').length).toBeGreaterThanOrEqual(1);
    for (const l of UPCOMING_LAW) expect(l.source, l.law).toMatch(/\d{4}/);
  });
});
