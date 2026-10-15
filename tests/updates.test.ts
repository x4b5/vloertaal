import { describe, expect, it } from 'vitest';
import { LAST_UPDATE, UPDATES, updateDate } from '../src/content/updates';
import { updatesPage } from '../src/lib/updatesPage';

describe('updates ("Wat is er nieuw?")', () => {
  it('is newest first, with real dates and short lines', () => {
    expect(UPDATES.length).toBeGreaterThan(0);
    for (const u of UPDATES) {
      expect(u.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(Number.isNaN(new Date(u.date).getTime())).toBe(false);
      expect(u.items.length).toBeGreaterThan(0);
    }
    const dates = UPDATES.map((u) => u.date);
    expect([...dates].sort().reverse()).toEqual(dates);
    expect(new Set(dates).size).toBe(dates.length);
    expect(LAST_UPDATE).toBe(dates[0]);
  });

  it('writes the date in Dutch', () => {
    expect(updateDate('2026-10-15')).toBe('15 oktober 2026');
  });

  it('makes the page vloertaal.nl/nieuw with every line, escaped', () => {
    const html = updatesPage([{ date: '2026-10-15', items: ['Eerste <regel> & "meer"'] }, ...UPDATES]);
    expect(html).toContain('<html lang="nl">');
    expect(html).toContain('Eerste &lt;regel&gt; &amp; &quot;meer&quot;');
    for (const u of UPDATES) for (const i of u.items) expect(html).toContain(i.replace(/&/g, '&amp;').replace(/"/g, '&quot;'));
    expect(html).toContain('mailto:hoi@vloertaal.nl');
    expect(html).not.toMatch(/<script/i);
  });
});
