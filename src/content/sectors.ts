import type { UiKey } from '../i18n/types';
import { units } from './curriculum';
import type { Lesson, Unit } from './types';

/**
 * Sectors: the kind of work the learner does. The choice only sets the focus of the lesson
 * path: the basis units plus the learner's own sector unit(s) come first, the other sectors'
 * units wait in a collapsed section at the bottom (still playable, never locked by sector).
 */
export type SectorId = 'logistics' | 'construction' | 'production' | 'care' | 'hospitality' | 'cleaning';

/** What is stored: a sector, or 'none' for "not sure yet" (= the whole course as one path). */
export type SectorChoice = SectorId | 'none';

export interface Sector {
  id: SectorId;
  /** Dutch name, shown big on the card (part of learning the work floor). */
  nl: string;
  /** English name (and the help-language translation) via this UI key. */
  key: UiKey;
  /** The units that belong to this sector. */
  units: string[];
}

export const sectors: Sector[] = [
  { id: 'logistics', nl: 'Logistiek', key: 'sectorLogistics', units: ['u.warehouse'] },
  { id: 'construction', nl: 'Bouw', key: 'sectorConstruction', units: ['u.build'] },
  { id: 'production', nl: 'Productie', key: 'sectorProduction', units: ['u.factory'] },
  { id: 'care', nl: 'Zorg', key: 'sectorCare', units: ['u.care'] },
  { id: 'hospitality', nl: 'Horeca', key: 'sectorHospitality', units: ['u.horeca'] },
  { id: 'cleaning', nl: 'Schoonmaak', key: 'sectorCleaning', units: ['u.clean'] },
];

/** "Weet ik nog niet": shown as the last card. */
export const NOT_SURE = { nl: 'Weet ik nog niet', key: 'notSureYet' as UiKey };

const sectorOfUnit = new Map(sectors.flatMap((s) => s.units.map((u) => [u, s.id] as const)));

/** The sector a unit belongs to, or undefined for a basis unit (for everyone). */
export function unitSector(unitId: string): SectorId | undefined {
  return sectorOfUnit.get(unitId);
}

export const isSectorId = (v: unknown): v is SectorId => sectors.some((s) => s.id === v);

/** Is this unit another sector's (so it goes to "Andere sectoren")? Never with no sector chosen. */
export function isOtherSector(unitId: string, sector: SectorChoice | undefined): boolean {
  if (!sector || sector === 'none') return false;
  const own = unitSector(unitId);
  return own !== undefined && own !== sector;
}

/** The slot for the learner's own sector unit(s): where the warehouse unit sits in the course (05, right after Safety). */
const SECTOR_SLOT = 'u.warehouse';

/**
 * The path for a sector: `main` (basis units, with the learner's own sector unit(s) early, in the
 * warehouse's slot right after Safety) and `other` (the other sectors' units, in course order).
 * With no sector chosen, or 'none': the whole course in its own order.
 */
export function coursePlan(sector: SectorChoice | undefined): { main: Unit[]; other: Unit[] } {
  if (!sector || sector === 'none') return { main: units, other: [] };
  const own = units.filter((u) => unitSector(u.id) === sector);
  const basis = units.filter((u) => unitSector(u.id) === undefined);
  const at = units.slice(0, units.findIndex((u) => u.id === SECTOR_SLOT)).filter((u) => unitSector(u.id) === undefined).length;
  return {
    main: [...basis.slice(0, at), ...own, ...basis.slice(at)],
    other: units.filter((u) => isOtherSector(u.id, sector)),
  };
}

/** Lessons in the order they unlock one after another (basis + own sector). */
export function mainLessons(sector: SectorChoice | undefined): Lesson[] {
  return coursePlan(sector).main.flatMap((u) => u.lessons);
}
