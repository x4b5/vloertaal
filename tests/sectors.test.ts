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

  it('puts the own sector unit in slot 04 (after Safety); everything in course order with none', () => {
    const { main, other } = coursePlan('construction');
    expect(main[2].id).toBe('u.safety');
    expect(main[3].id).toBe('u.build');
    expect(main.filter((u) => u.id === 'u.build')).toHaveLength(1);
    expect(main.some((u) => u.id === 'u.warehouse')).toBe(false);
    expect(other.map((u) => u.id).sort()).toEqual(['u.care', 'u.clean', 'u.factory', 'u.horeca', 'u.warehouse']);
    expect(main.length + other.length).toBe(units.length);
    // The basis units keep their course order around it.
    const basis = main.filter((u) => !unitSector(u.id));
    expect(basis).toEqual(units.filter((u) => !unitSector(u.id)));
    expect(coursePlan('care').main[3].id).toBe('u.care');
    expect(coursePlan('logistics').main[3].id).toBe('u.warehouse');
    for (const s of ['none', undefined] as const) {
      expect(coursePlan(s).main).toEqual(units);
      expect(coursePlan(s).other).toEqual([]);
    }
  });

  it('unlocks along the own path; another sector never blocks it and opens on its own', () => {
    const safety = unit('u.safety');
    const build = unit('u.build');
    const warehouse = unit('u.warehouse');
    const after = units[units.indexOf(warehouse) + 1];
    const safetyDone = Object.fromEntries(safety.lessons.map((l) => [l.id, {}]));
    // Construction: Safety done → "Op de bouw" (slot 04) opens; the unit after the warehouse waits for it.
    expect(isUnlocked(build.lessons[0].id, safetyDone, 'full', 'construction')).toBe(true);
    expect(isUnlocked(after.lessons[0].id, safetyDone, 'full', 'construction')).toBe(false);
    const buildDone = { ...safetyDone, ...Object.fromEntries(build.lessons.map((l) => [l.id, {}])) };
    expect(isUnlocked(after.lessons[0].id, buildDone, 'full', 'construction')).toBe(true);
    // Without a sector: course order, the warehouse comes after Safety as before.
    expect(isUnlocked(warehouse.lessons[0].id, safetyDone, 'full')).toBe(true);
    expect(isUnlocked(build.lessons[0].id, safetyDone, 'full')).toBe(false);
    // The warehouse (other sector) is open from the start, in order within the unit.
    expect(isUnlocked(warehouse.lessons[0].id, {}, 'full', 'construction')).toBe(true);
    expect(isUnlocked(warehouse.lessons[1].id, {}, 'full', 'construction')).toBe(false);
    expect(isUnlocked(warehouse.lessons[1].id, { [warehouse.lessons[0].id]: {} }, 'full', 'construction')).toBe(true);
    // A preview still only opens the first unit.
    expect(isUnlocked(warehouse.lessons[0].id, {}, 'preview', 'construction')).toBe(false);
    expect(isUnlocked(build.lessons[0].id, safetyDone, 'preview', 'construction')).toBe(false);
    expect(unitSector('u.build')).toBe('construction');
    expect(unitSector('u.firstday')).toBeUndefined();
  });
});
