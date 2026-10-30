import type { UiKey } from '../i18n/types';
import type { Track } from '../lib/track';
import { courseUnits } from './courses';
import { units } from './curriculum';
import type { Lesson, Unit } from './types';
import { withRegion } from './regio';

/**
 * Sectors: the kind of work the learner does. The choice only sets the focus of the lesson
 * path: the basis units plus the learner's own sector unit(s) come first, the other sectors'
 * units wait in a collapsed section at the bottom (still playable, never locked by sector).
 */
export type SectorId = 'logistics' | 'construction' | 'production' | 'care' | 'hospitality' | 'cleaning' | 'horticulture';

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
  /** Basis units (for everyone) that matter most in this work: recommended earlier in "choose
   *  next" (src/lib/route.ts nextChoices). The first one is the first recommendation once it is
   *  open (Safety in week 1 for warehouse, building and factory work); the rest come after the
   *  sector's own unit. */
  focus: string[];
  /**
   * The same for the work-rules track (src/content/regels): the sector's own rules unit(s) and
   * the basis rules units that matter most in this work. A unit that is not written yet is left
   * out of the path (nothing breaks).
   */
  rules: { units: string[]; focus: string[] };
}

export const sectors: Sector[] = [
  { id: 'logistics', nl: 'Logistiek', key: 'sectorLogistics', units: ['u.warehouse'], focus: ['u.safety', 'u.time'],
    rules: { units: ['r.warehouse'], focus: ['r.veilig', 'r.tijd'] } },
  { id: 'construction', nl: 'Bouw', key: 'sectorConstruction', units: ['u.build'], focus: ['u.safety', 'u.tools'],
    rules: { units: ['r.build'], focus: ['r.veilig', 'r.contract'] } },
  { id: 'production', nl: 'Productie', key: 'sectorProduction', units: ['u.factory'], focus: ['u.safety', 'u.tools'],
    rules: { units: ['r.factory'], focus: ['r.veilig', 'r.tijd'] } },
  { id: 'care', nl: 'Zorg', key: 'sectorCare', units: ['u.care'], focus: ['u.teamwork', 'u.health'],
    rules: { units: ['r.care'], focus: ['r.samen', 'r.ziek'] } },
  { id: 'hospitality', nl: 'Horeca', key: 'sectorHospitality', units: ['u.horeca'], focus: ['u.teamwork', 'u.time'],
    rules: { units: ['r.horeca'], focus: ['r.tijd', 'r.loon'] } },
  { id: 'cleaning', nl: 'Schoonmaak', key: 'sectorCleaning', units: ['u.clean'], focus: ['u.time', 'u.safety'],
    rules: { units: ['r.clean'], focus: ['r.veilig', 'r.tijd'] } },
  // Tuinbouw en kas (30 October 2026): heat, sprays and lifting (Safety), and piece rate (Pay).
  { id: 'horticulture', nl: 'Tuinbouw', key: 'sectorHorticulture', units: ['u.kas'], focus: ['u.safety', 'u.pay'],
    rules: { units: ['r.kas'], focus: ['r.veilig', 'r.loon'] } },
];

/** A sector's own units and focus units in one track. */
const ofTrack = (s: Sector, track: Track) => (track === 'regels' ? s.rules : s);

/** "Weet ik nog niet": shown as the last card. */
export const NOT_SURE = { nl: 'Weet ik nog niet', key: 'notSureYet' as UiKey };

// Both tracks: unit ids never clash ("u.build", "r.build").
const sectorOfUnit = new Map(sectors.flatMap((s) => [...s.units, ...s.rules.units].map((u) => [u, s.id] as const)));

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
/** In the work-rules track the own sector unit(s) come right after this basis unit ("Veilig werken"). */
const RULES_SLOT_AFTER = 'r.veilig';

/**
 * The path for a sector: `main` (basis units, with the learner's own sector unit(s) early, in the
 * warehouse's slot right after Safety) and `other` (the other sectors' units, in course order).
 * With no sector chosen, or 'none': the whole course in its own order.
 * In the work-rules track the same, with the own sector's rules unit(s) right after r.veilig (at
 * the end of the basis units if r.veilig is not there).
 */
export function coursePlan(sector: SectorChoice | undefined, track: Track = 'taal', region?: string): { main: Unit[]; other: Unit[] } {
  // A region (src/content/regio) adds its unit to the learner's own course, in its slot; without
  // one the plan is exactly as it was.
  if (region && region !== 'none') {
    const plan = coursePlan(sector, track);
    return { main: withRegion(plan.main, region, track), other: plan.other };
  }
  if (track === 'regels') return rulesPlan(sector);
  if (!sector || sector === 'none') return { main: units, other: [] };
  const own = units.filter((u) => unitSector(u.id) === sector);
  const basis = units.filter((u) => unitSector(u.id) === undefined);
  const at = units.slice(0, units.findIndex((u) => u.id === SECTOR_SLOT)).filter((u) => unitSector(u.id) === undefined).length;
  return {
    main: [...basis.slice(0, at), ...own, ...basis.slice(at)],
    other: units.filter((u) => isOtherSector(u.id, sector)),
  };
}

function rulesPlan(sector: SectorChoice | undefined): { main: Unit[]; other: Unit[] } {
  const all = courseUnits('regels');
  if (!sector || sector === 'none') return { main: all, other: [] };
  const own = all.filter((u) => unitSector(u.id) === sector);
  const basis = all.filter((u) => unitSector(u.id) === undefined);
  const slot = basis.findIndex((u) => u.id === RULES_SLOT_AFTER);
  const at = slot >= 0 ? slot + 1 : basis.length;
  return {
    main: [...basis.slice(0, at), ...own, ...basis.slice(at)],
    other: all.filter((u) => isOtherSector(u.id, sector)),
  };
}

/** Lessons in the order they unlock one after another (basis + own sector). */
export function mainLessons(sector: SectorChoice | undefined, track: Track = 'taal', region?: string): Lesson[] {
  return coursePlan(sector, track, region).main.flatMap((u) => u.lessons);
}

/** The units a sector weighs first when the learner chooses what's next: its own unit(s), then
 *  its focus units. Empty with no sector chosen (or "not sure yet"). */
export function sectorPriority(sector: SectorChoice | undefined, track: Track = 'taal'): string[] {
  const s = sectors.find((x) => x.id === sector);
  return s ? [...ofTrack(s, track).units, ...ofTrack(s, track).focus] : [];
}

/** A sector's own unit in a track (its words: the warehouse, the building site, care …). */
export function sectorOwnUnit(sector: SectorChoice | undefined, track: Track = 'taal'): string | undefined {
  const s = sectors.find((x) => x.id === sector);
  return s ? ofTrack(s, track).units[0] : undefined;
}

/** The basis unit a sector recommends first (Safety in week 1 for warehouse, building and factory work). */
export function sectorFirstFocus(sector: SectorChoice | undefined, track: Track = 'taal'): string | undefined {
  const s = sectors.find((x) => x.id === sector);
  return s ? ofTrack(s, track).focus[0] : undefined;
}

/**
 * The sector choice in two small steps (never more than three cards on a page): first the kind
 * of work (three group cards), then the sectors in it. The third group, "Iets anders", holds
 * Tuinbouw and "Weet ik nog niet" (`notSure`): a stored 'none' belongs to that group.
 */
export type SectorGroupId = 'make' | 'care' | 'other';

export interface SectorGroup {
  id: SectorGroupId;
  nl: string;
  key: UiKey;
  sectors: SectorId[];
  /** Its second step ends with "Weet ik nog niet" (the choice 'none'). */
  notSure?: true;
}

export const sectorGroups: SectorGroup[] = [
  { id: 'make', nl: 'Maken en verplaatsen', key: 'sectorGroupMake', sectors: ['logistics', 'construction', 'production'] },
  { id: 'care', nl: 'Zorg en service', key: 'sectorGroupCare', sectors: ['care', 'hospitality', 'cleaning'] },
  { id: 'other', nl: 'Iets anders', key: 'sectorGroupOther', sectors: ['horticulture'], notSure: true },
];

/** The group a sector is in (undefined for "not sure yet" or nothing chosen). */
export function sectorGroupOf(sector: SectorChoice | undefined): SectorGroupId | undefined {
  return sectorGroups.find((g) => g.sectors.includes(sector as SectorId))?.id;
}

/** The group whose card shows a choice as picked: 'none' is in the group with "Weet ik nog niet". */
export function sectorChoiceGroup(choice: SectorChoice | undefined): SectorGroupId | undefined {
  return choice === 'none' ? sectorGroups.find((g) => g.notSure)?.id : sectorGroupOf(choice);
}
