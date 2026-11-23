import { nlId } from './regels/be/ids';
import type { UiKey } from '../i18n/types';
import type { Track } from '../lib/track';
import { courseUnits } from './courses';
import { taalCourseUnits } from './curriculum';
import type { Lesson, Unit } from './types';
import { withRegion } from './regio';

/**
 * Sectors: the kind of work the learner does. The choice only sets the focus of the lesson
 * path: the basis units plus the learner's own sector unit(s) come first, the other sectors'
 * units wait in a collapsed section at the bottom (still playable, never locked by sector).
 */
export type SectorId =
  | 'logistics' | 'construction' | 'production' | 'care' | 'hospitality' | 'cleaning' | 'horticulture'
  | 'technical' | 'garage' | 'retail' | 'green' | 'facility' | 'security' | 'food' | 'waste' | 'childcare';

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
  // "Vervoer en bezorging" (u.delivery, 5 November 2026): the second own unit of Logistiek (parcels,
  // the van, the road), right after the warehouse in the sector slot.
  { id: 'logistics', nl: 'Logistiek', key: 'sectorLogistics', units: ['u.warehouse', 'u.delivery'], focus: ['u.safety', 'u.time'],
    rules: { units: ['r.warehouse'], focus: ['r.veilig', 'r.tijd'] } },
  // "Tegels, stuc en verf" (u.afbouw, 20 November 2026): the second own unit of Bouw (the finishing
  // work: tiles, plaster, paint), right after "Op de bouw" in the sector slot; "Metselen, hout en
  // vastmaken" (u.ruwbouw, the same day) right after it.
  { id: 'construction', nl: 'Bouw', key: 'sectorConstruction', units: ['u.build', 'u.afbouw', 'u.ruwbouw'], focus: ['u.safety', 'u.tools'],
    rules: { units: ['r.build'], focus: ['r.veilig', 'r.contract'] } },
  // "Machines en gereedschap" (u.machines, 21 November 2026): the second own unit of Productie
  // (the machine, checking, packing, maintenance), right after "In de productie" in the sector slot;
  // "Assemblage en montage" (u.montage, the same day) right after it. "Operator in de
  // procesindustrie" (u.process, 23 November 2026): the fourth, right after that (the plants of
  // Maastricht Maakt look most for operators).
  { id: 'production', nl: 'Productie', key: 'sectorProduction', units: ['u.factory', 'u.machines', 'u.montage', 'u.process'], focus: ['u.safety', 'u.tools'],
    rules: { units: ['r.factory'], focus: ['r.veilig', 'r.tijd'] } },
  // The second own units of Zorg ("Verzorgen en thuiszorg", u.carework), Horeca ("De keuken en de
  // bediening", u.cooking), Schoonmaak ("Sanitair, hotel en machines", u.housekeeping) and Winkel
  // ("Kassa, voorraad en sluiten", u.shopfloor), 23 November 2026: right after the first in the sector slot.
  { id: 'care', nl: 'Zorg', key: 'sectorCare', units: ['u.care', 'u.carework'], focus: ['u.teamwork', 'u.health'],
    rules: { units: ['r.care'], focus: ['r.samen', 'r.ziek'] } },
  { id: 'hospitality', nl: 'Horeca', key: 'sectorHospitality', units: ['u.horeca', 'u.cooking'], focus: ['u.teamwork', 'u.time'],
    rules: { units: ['r.horeca'], focus: ['r.tijd', 'r.loon'] } },
  { id: 'cleaning', nl: 'Schoonmaak', key: 'sectorCleaning', units: ['u.clean', 'u.housekeeping'], focus: ['u.time', 'u.safety'],
    rules: { units: ['r.clean'], focus: ['r.veilig', 'r.tijd'] } },
  // Tuinbouw en kas (30 October 2026): heat, sprays and lifting (Safety), and piece rate (Pay).
  // "Kweken, sorteren en de kas" (u.kweek, 22 November 2026): the second own unit of Tuinbouw.
  { id: 'horticulture', nl: 'Tuinbouw', key: 'sectorHorticulture', units: ['u.kas', 'u.kweek'], focus: ['u.safety', 'u.pay'],
    rules: { units: ['r.kas'], focus: ['r.veilig', 'r.loon'] } },
  // Techniek (metaal, elektro, installatie) and the garage (mobiliteit), from the Entree rounds
  // (30 October 2026, docs/werkregels-curriculum.md deel 7): sparks, noise and power (Safety), and
  // the work order (Je werk afronden). Appended, so every existing sector keeps its path.
  // "Elektra, leidingen en metaal" (u.install, 21 November 2026): the second own unit of Techniek.
  { id: 'technical', nl: 'Techniek', key: 'sectorTechnical', units: ['u.tech', 'u.install'], focus: ['u.safety', 'u.finish'],
    rules: { units: ['r.techniek'], focus: ['r.veilig', 'r.afronden'] } },
  // "Banden, olie en remmen" (u.carservice, 22 November 2026): the second own unit of Garage.
  { id: 'garage', nl: 'Garage', key: 'sectorGarage', units: ['u.garage', 'u.carservice'], focus: ['u.safety', 'u.finish'],
    rules: { units: ['r.werkplaats'], focus: ['r.veilig', 'r.afronden'] } },
  // De winkel (31 October 2026): was a basis unit for everyone ("Je baan"); now a sector of its
  // own, so who works in a shop or supermarket gets it early. The roster (evenings and weekends)
  // and the till (Rekenen: change and prices). Appended, so every existing sector keeps its path.
  { id: 'retail', nl: 'Winkel', key: 'sectorRetail', units: ['u.shop', 'u.shopfloor'], focus: ['u.time', 'u.numbers'],
    rules: { units: ['r.winkel'], focus: ['r.tijd', 'r.rekenen'] } },
  // Groen (green-space work: hoveniers, groenvoorziening, the plantsoenendienst) and Facilitair
  // (reception, post, meeting rooms, faults, moving; cleaning stays Schoonmaak), the owner's
  // request of 23 November 2026, each with two own units. Machines, the road and lifting (Safety);
  // the work day outside and in the building (Time, Asking for help). Their work-rules units
  // r.groen and r.facilitair (curriculum, deel 9) came the same day. Appended, so every existing sector keeps its path.
  { id: 'green', nl: 'Groen', key: 'sectorGreen', units: ['u.mowing', 'u.planting'], focus: ['u.safety', 'u.time'],
    rules: { units: ['r.groen'], focus: ['r.veilig', 'r.tijd'] } },
  { id: 'facility', nl: 'Facilitair', key: 'sectorFacility', units: ['u.frontdesk', 'u.maintenance'], focus: ['u.help', 'u.safety'],
    rules: { units: ['r.facilitair'], focus: ['r.veilig', 'r.samen'] } },
  // Beveiliging, Voedingsindustrie, Afval en recycling and Kinderopvang (the owner's request of
  // 23 November 2026), each with two own units. Security, food and waste: danger, machines and
  // traffic (Safety) and shifts, nights and early rounds (Time). Childcare: working together in a
  // group and with parents (Samenwerken) and sick children (Health), as Zorg. Their work-rules units
  // r.beveiliging, r.voeding, r.afval and r.kinderopvang (curriculum, deel 9) came the same day.
  // Appended, so every existing sector keeps its path.
  { id: 'security', nl: 'Beveiliging', key: 'sectorSecurity', units: ['u.guarding', 'u.incidents'], focus: ['u.safety', 'u.time'],
    rules: { units: ['r.beveiliging'], focus: ['r.veilig', 'r.tijd'] } },
  { id: 'food', nl: 'Voedingsindustrie', key: 'sectorFood', units: ['u.foodhygiene', 'u.foodline'], focus: ['u.safety', 'u.time'],
    rules: { units: ['r.voeding'], focus: ['r.veilig', 'r.tijd'] } },
  { id: 'waste', nl: 'Afval en recycling', key: 'sectorWaste', units: ['u.collection', 'u.recycling'], focus: ['u.safety', 'u.time'],
    rules: { units: ['r.afval'], focus: ['r.veilig', 'r.tijd'] } },
  { id: 'childcare', nl: 'Kinderopvang', key: 'sectorChildcare', units: ['u.toddlers', 'u.daycare'], focus: ['u.teamwork', 'u.health'],
    rules: { units: ['r.kinderopvang'], focus: ['r.samen', 'r.ziek'] } },
];

/** A sector's own units and focus units in one track. */
const ofTrack = (s: Sector, track: Track) => (track === 'regels' ? s.rules : s);

/** "Weet ik nog niet": shown as the last card. */
export const NOT_SURE = { nl: 'Weet ik nog niet', key: 'notSureYet' as UiKey };

// Both tracks: unit ids never clash ("u.build", "r.build").
const sectorOfUnit = new Map(sectors.flatMap((s) => [...s.units, ...s.rules.units].map((u) => [u, s.id] as const)));

/** The sector a unit belongs to, or undefined for a basis unit (for everyone). */
export function unitSector(unitId: string): SectorId | undefined {
  // A Belgian rules unit ("r.be.build") belongs where its Dutch twin does.
  return sectorOfUnit.get(nlId(unitId));
}

export const isSectorId = (v: unknown): v is SectorId => sectors.some((s) => s.id === v);

/** Is this unit another sector's (so it goes to "Andere sectoren")? Never with no sector chosen. */
export function isOtherSector(unitId: string, sector: SectorChoice | undefined): boolean {
  if (!sector || sector === 'none') return false;
  const own = unitSector(unitId);
  return own !== undefined && own !== sector;
}

/** The slot for the learner's own sector unit(s): where the warehouse unit sits in the course (06, right after Safety and Als het misgaat). */
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
  // The language course of the learner's country (src/content/taalBe: the Belgian one in Belgium).
  const units = taalCourseUnits();
  if (!sector || sector === 'none') return { main: units, other: [] };
  const own = units.filter((u) => unitSector(u.id) === sector);
  const basis = units.filter((u) => unitSector(u.id) === undefined);
  const at = units.slice(0, units.findIndex((u) => u.id === SECTOR_SLOT)).filter((u) => unitSector(u.id) === undefined).length;
  return {
    main: [...basis.slice(0, at), ...own, ...basis.slice(at)],
    other: units.filter((u) => isOtherSector(u.id, sector)),
  };
}

/** "Werk zoeken" opens the rules course. Who said where they work starts with the first day
 *  instead, as in the language course, and meets "Werk zoeken" after this unit (review,
 *  9 November 2026: "Waar werk je? Bouw" was followed by "Waar vind je werk?"). */
const RULES_SEARCH = 'r.zoeken';
const RULES_SEARCH_AFTER = 'r.samen';

function rulesPlan(sector: SectorChoice | undefined): { main: Unit[]; other: Unit[] } {
  const all = courseUnits('regels');
  if (!sector || sector === 'none') return { main: all, other: [] };
  const own = all.filter((u) => unitSector(u.id) === sector);
  const search = all.filter((u) => nlId(u.id) === RULES_SEARCH);
  const rest = all.filter((u) => unitSector(u.id) === undefined && nlId(u.id) !== RULES_SEARCH);
  const after = rest.findIndex((u) => nlId(u.id) === RULES_SEARCH_AFTER);
  const basis = after >= 0 ? [...rest.slice(0, after + 1), ...search, ...rest.slice(after + 1)] : [...rest, ...search];
  const slot = basis.findIndex((u) => nlId(u.id) === RULES_SLOT_AFTER);
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

/** The units a sector weighs first when the learner chooses what's next: its (first) own unit,
 *  then its focus units. A further own unit (Logistiek's "Vervoer en bezorging", 5 November 2026)
 *  is not weighted: it comes in its place in the path, right after the first one, so the choices
 *  of week 1 stay as they were. Empty with no sector chosen (or "not sure yet"). */
export function sectorPriority(sector: SectorChoice | undefined, track: Track = 'taal'): string[] {
  const s = sectors.find((x) => x.id === sector);
  return s ? [...ofTrack(s, track).units.slice(0, 1), ...ofTrack(s, track).focus] : [];
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
 * A focus unit split in two keeps both halves together in the recommendation: "Als het misgaat"
 * (fire alarm, accidents) was part of Veiligheid until 8 November 2026 and still comes in week 1,
 * before the sector's own unit.
 */
export const FOCUS_FOLLOW_UP: Readonly<Record<string, string>> = { 'u.safety': 'u.emergency' };

/**
 * The sector choice in two small steps: first a list of one kind of row (the three kinds of work
 * and "Weet ik nog niet", the list exception of max 3), then the three sectors of the group picked.
 * "Weet ik nog niet" is a row of its own on the first step: it gives the choice 'none'.
 */
export type SectorGroupId = 'build' | 'make' | 'outdoor' | 'care' | 'service' | 'shop';

export interface SectorGroup {
  id: SectorGroupId;
  nl: string;
  key: UiKey;
  sectors: SectorId[];
}

export const sectorGroups: SectorGroup[] = [
  { id: 'build', nl: 'Bouw en techniek', key: 'sectorGroupBuild', sectors: ['construction', 'technical', 'garage'] },
  // The six groups of 23 November 2026 (the owner's choice, at most 3 sectors in a group): Voedingsindustrie
  // joins "Maken en verplaatsen"; Tuinbouw moves to "Buiten werken" with Groen and Afval en recycling
  // (a learner keeps their sector: only its place on the choice screen changes, since what is stored is
  // the sector, never the group); "Zorg en service" became "Zorg en kinderen" (care and childcare, the
  // same key); cleaning, facility services and security form the new group "Service en veiligheid".
  { id: 'make', nl: 'Maken en verplaatsen', key: 'sectorGroupMake', sectors: ['production', 'food', 'logistics'] },
  { id: 'outdoor', nl: 'Buiten werken', key: 'sectorGroupOutdoor', sectors: ['green', 'horticulture', 'waste'] },
  { id: 'care', nl: 'Zorg en kinderen', key: 'sectorGroupCare', sectors: ['care', 'childcare'] },
  { id: 'service', nl: 'Service en veiligheid', key: 'sectorGroupService', sectors: ['cleaning', 'facility', 'security'] },
  // At most 3 cards in a group (max-3): with Winkel (31 October 2026) Horeca went to a group of its own with it.
  { id: 'shop', nl: 'Winkel en horeca', key: 'sectorGroupShop', sectors: ['retail', 'hospitality'] },
];

export const isSectorGroupId = (v: unknown): v is SectorGroupId => sectorGroups.some((g) => g.id === v);

/** The group a sector is in (undefined for "not sure yet" or nothing chosen). */
export function sectorGroupOf(sector: SectorChoice | undefined): SectorGroupId | undefined {
  return sectorGroups.find((g) => g.sectors.includes(sector as SectorId))?.id;
}
