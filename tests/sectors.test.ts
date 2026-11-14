import { describe, expect, it } from 'vitest';
import { units } from '../src/content/curriculum';
import { coursePlan, sectors, unitSector } from '../src/content/sectors';
import { isNextInCourse, isUnlocked } from '../src/lib/exercises';

const unit = (id: string) => units.find((u) => u.id === id)!;

describe('sectors', () => {
  it('maps every sector to existing units, and no unit to two sectors', () => {
    const ids = sectors.flatMap((s) => s.units);
    for (const id of ids) expect(units.some((u) => u.id === id), id).toBe(true);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('puts the own sector unit in slot 07 (after Safety and Als het misgaat); everything in course order with none', () => {
    // Instructions is unit 03 for everyone, right after "Asking for help" (14 November 2026; the
    // sector slot was 06 before); Smart tools is unit 04.
    expect(units.slice(0, 5).map((u) => u.id)).toEqual(['u.firstday', 'u.help', 'u.do', 'u.tools', 'u.safety']);
    const { main, other } = coursePlan('construction');
    expect(main[4].id).toBe('u.safety');
    expect(main[5].id).toBe('u.emergency');
    expect(main[6].id).toBe('u.build');
    expect(main.filter((u) => u.id === 'u.build')).toHaveLength(1);
    expect(main.some((u) => u.id === 'u.warehouse')).toBe(false);
    expect(other.map((u) => u.id).sort()).toEqual(['u.care', 'u.clean', 'u.delivery', 'u.factory', 'u.garage', 'u.horeca', 'u.kas', 'u.shop', 'u.tech', 'u.warehouse']);
    expect(main.length + other.length).toBe(units.length);
    // The basis units keep their course order around it.
    const basis = main.filter((u) => !unitSector(u.id));
    expect(basis).toEqual(units.filter((u) => !unitSector(u.id)));
    expect(coursePlan('care').main[6].id).toBe('u.care');
    expect(coursePlan('logistics').main[6].id).toBe('u.warehouse');
    // Logistiek has two own units since 5 November 2026: "Vervoer en bezorging" right after the warehouse.
    expect(coursePlan('logistics').main[7].id).toBe('u.delivery');
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
    // Both safety topics (one until 8 November 2026): Veiligheid and Als het misgaat.
    const safetyDone = Object.fromEntries([...safety.lessons, ...unit('u.emergency').lessons].map((l) => [l.id, {}]));
    // Construction: both done → "Op de bouw" (slot 06) is next; the unit after the warehouse waits for it.
    expect(isNextInCourse(build.lessons[0].id, safetyDone, 'full', 'construction')).toBe(true);
    expect(isNextInCourse(after.lessons[0].id, safetyDone, 'full', 'construction')).toBe(false);
    const buildDone = { ...safetyDone, ...Object.fromEntries(build.lessons.map((l) => [l.id, {}])) };
    expect(isNextInCourse(after.lessons[0].id, buildDone, 'full', 'construction')).toBe(true);
    // Without a sector: course order, the warehouse comes after Safety as before.
    expect(isNextInCourse(warehouse.lessons[0].id, safetyDone, 'full')).toBe(true);
    expect(isNextInCourse(build.lessons[0].id, safetyDone, 'full')).toBe(false);
    // Any unit can still be entered at its first lesson.
    expect(isUnlocked(after.lessons[0].id, {}, 'full')).toBe(true);
    // The warehouse (other sector) is open from the start, in order within the unit.
    expect(isUnlocked(warehouse.lessons[0].id, {}, 'full')).toBe(true);
    expect(isUnlocked(warehouse.lessons[1].id, {}, 'full')).toBe(false);
    expect(isUnlocked(warehouse.lessons[1].id, { [warehouse.lessons[0].id]: {} }, 'full')).toBe(true);
    // A preview (old code) opens the first unit and the sneak preview: the first lesson of every
    // sector's topic, not the rest of it.
    expect(isUnlocked(warehouse.lessons[0].id, {}, 'preview')).toBe(true);
    expect(isUnlocked(warehouse.lessons[1].id, { [warehouse.lessons[0].id]: {} }, 'preview')).toBe(false);
    expect(isUnlocked(build.lessons[0].id, safetyDone, 'preview')).toBe(true);
    expect(unitSector('u.build')).toBe('construction');
    expect(unitSector('u.firstday')).toBeUndefined();
  });
});
