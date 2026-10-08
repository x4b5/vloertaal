import { describe, expect, it } from 'vitest';
import { units } from '../src/content/curriculum';
import { coursePlan, sectors, unitSector } from '../src/content/sectors';
import { isUnlocked } from '../src/lib/exercises';

const unit = (id: string) => units.find((u) => u.id === id)!;

describe('sectors', () => {
  it('maps every sector to existing units, and no unit to two sectors', () => {
    const ids = sectors.flatMap((s) => s.units);
    for (const id of ids) expect(units.some((u) => u.id === id), id).toBe(true);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('shows basis + own sector first, other sectors apart; everything with none', () => {
    const { main, other } = coursePlan('construction');
    expect(main.some((u) => u.id === 'u.build')).toBe(true);
    expect(main.some((u) => u.id === 'u.warehouse')).toBe(false);
    expect(other.map((u) => u.id).sort()).toEqual(['u.care', 'u.clean', 'u.factory', 'u.horeca', 'u.warehouse']);
    expect(main.length + other.length).toBe(units.length);
    for (const s of ['none', undefined] as const) {
      expect(coursePlan(s).main).toEqual(units);
      expect(coursePlan(s).other).toEqual([]);
    }
    // Course order is kept.
    expect(main.map((u) => units.indexOf(u))).toEqual([...main.map((u) => units.indexOf(u))].sort((a, b) => a - b));
  });

  it('another sector never blocks the path; its units open on their own', () => {
    const warehouse = unit('u.warehouse');
    const before = units[units.indexOf(warehouse) - 1];
    const after = units[units.indexOf(warehouse) + 1];
    const done = Object.fromEntries(before.lessons.map((l) => [l.id, {}]));
    // Construction: the unit after the warehouse opens once the unit before it is done.
    expect(isUnlocked(after.lessons[0].id, done, 'full', 'construction')).toBe(true);
    // Without a sector the warehouse is in the way, as before.
    expect(isUnlocked(after.lessons[0].id, done, 'full')).toBe(false);
    // The warehouse (other sector) is open from the start, in order within the unit.
    expect(isUnlocked(warehouse.lessons[0].id, {}, 'full', 'construction')).toBe(true);
    expect(isUnlocked(warehouse.lessons[1].id, {}, 'full', 'construction')).toBe(false);
    expect(isUnlocked(warehouse.lessons[1].id, { [warehouse.lessons[0].id]: {} }, 'full', 'construction')).toBe(true);
    // A preview still only opens the first unit.
    expect(isUnlocked(warehouse.lessons[0].id, {}, 'preview', 'construction')).toBe(false);
    expect(unitSector('u.build')).toBe('construction');
    expect(unitSector('u.firstday')).toBeUndefined();
  });
});
