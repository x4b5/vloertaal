import type { Track } from '../lib/track';
import type { Unit } from './types';

/**
 * Themes ("hoofdstukken"): the topics grouped for overview, in both tracks. Only an overview:
 * the guided path (src/lib/route.ts routeOrder) and Bram's next lesson stay exactly as they are.
 * All topics, the certificates list and the coaches page show the topics under these headers;
 * the home names the current topic's theme in a small label.
 *
 * A theme's id is also its gloss id: its name in a help language is `lang.gloss[theme.id]`
 * (src/i18n/<lang>.ts), like a unit's title. The work-rules track shows `titleNl` only.
 *
 * A new unit belongs in exactly one theme below (tests/themes.test.ts fails until it is there).
 */
export type ThemeId =
  | 'theme.start'
  | 'theme.safe'
  | 'theme.find'
  | 'theme.job'
  | 'theme.together'
  | 'theme.rights'
  | 'theme.life'
  | 'theme.sector';

export interface Theme {
  id: ThemeId;
  emoji: string;
  /** The English name (English only, and the fallback). */
  title: string;
  /** The Dutch name, shown next to the help language (and alone in the work-rules track). */
  titleNl: string;
}

/** The themes, in the order they are shown. */
export const THEMES: Theme[] = [
  { id: 'theme.start', emoji: '🟡', title: 'Getting started', titleNl: 'Starten' },
  { id: 'theme.safe', emoji: '🦺', title: 'Working safely', titleNl: 'Veilig werken' },
  { id: 'theme.find', emoji: '💼', title: 'Finding work', titleNl: 'Werk vinden' },
  { id: 'theme.job', emoji: '🗓️', title: 'Your job', titleNl: 'Je baan' },
  { id: 'theme.together', emoji: '🤝', title: 'Working together', titleNl: 'Samenwerken' },
  { id: 'theme.rights', emoji: '⚖️', title: 'Your rights', titleNl: 'Je rechten' },
  { id: 'theme.life', emoji: '🏠', title: 'Life in the Netherlands', titleNl: 'Leven in Nederland' },
  { id: 'theme.sector', emoji: '🏭', title: 'Your sector', titleNl: 'Jouw sector' },
];

/**
 * The units of each theme, per track. Within a theme the screens keep the course order, so the
 * order here does not matter.
 */
export const THEME_UNITS: Record<ThemeId, Record<Track, string[]>> = {
  'theme.start': {
    taal: ['u.firstday', 'u.help', 'u.tools'],
    regels: ['r.start'],
  },
  'theme.safe': {
    taal: ['u.safety'],
    regels: ['r.veilig'],
  },
  'theme.find': {
    taal: ['u.apply', 'u.contract', 'u.grow', 'u.lost'],
    regels: ['r.zoeken', 'r.contract'],
  },
  'theme.job': {
    taal: ['u.time', 'u.pay', 'u.leave', 'u.contact', 'u.house', 'u.numbers'],
    regels: ['r.loon', 'r.tijd', 'r.ziek'],
  },
  'theme.together': {
    taal: ['u.teamwork', 'u.social'],
    regels: ['r.samen'],
  },
  'theme.rights': {
    taal: ['u.rights', 'u.exploit'],
    regels: ['r.rechten'],
  },
  'theme.life': {
    taal: ['u.papers', 'u.health', 'u.money', 'u.travel'],
    regels: ['r.geld'],
  },
  'theme.sector': {
    taal: ['u.warehouse', 'u.build', 'u.factory', 'u.care', 'u.horeca', 'u.clean', 'u.shop'],
    regels: ['r.warehouse', 'r.build', 'r.factory', 'r.care', 'r.horeca', 'r.clean'],
  },
};

/**
 * Themes left empty in a track on purpose (none now). A theme of a track that is not listed
 * here must have at least one unit (tests/themes.test.ts).
 */
export const EMPTY_ON_PURPOSE: Partial<Record<ThemeId, Track[]>> = {};

const themeById = new Map(THEMES.map((t) => [t.id, t] as const));
const themeOfUnit = new Map<string, ThemeId>();
for (const t of THEMES) for (const track of ['taal', 'regels'] as const) for (const id of THEME_UNITS[t.id][track]) if (!themeOfUnit.has(id)) themeOfUnit.set(id, t.id);

/** The theme a unit belongs to (either track; ids never clash), or undefined for one not mapped yet. */
export function themeOf(unitId: string): Theme | undefined {
  const id = themeOfUnit.get(unitId);
  return id ? themeById.get(id) : undefined;
}

/** A theme by id. */
export function findTheme(id: string): Theme | undefined {
  return themeById.get(id as ThemeId);
}

/** The unit ids of a theme in one track. */
export function themeUnitIds(theme: ThemeId, track: Track): string[] {
  return THEME_UNITS[theme][track];
}

/** One group of a list: a theme (or the other sectors, `theme` undefined) and its units. */
export interface ThemeGroup {
  /** 'other' for "Andere sectoren", else the theme's id. */
  key: ThemeId | 'other';
  theme?: Theme;
  units: Unit[];
}

/**
 * Units grouped by theme: the themes in THEMES order, the units of each in the order given (the
 * course or route order), empty themes left out. A unit with no theme yet (a new one, before
 * tests/themes.test.ts is satisfied) goes to the end, after the last theme, so it is never lost.
 */
export function groupByTheme(list: Unit[]): ThemeGroup[] {
  const groups: ThemeGroup[] = THEMES.map((theme) => ({ key: theme.id, theme, units: list.filter((u) => themeOfUnit.get(u.id) === theme.id) }));
  const loose = list.filter((u) => !themeOfUnit.has(u.id));
  if (loose.length) groups[groups.length - 1].units.push(...loose);
  return groups.filter((g) => g.units.length > 0);
}

/**
 * The groups of All topics: the learner's own course (`main`, in route order) by theme, then the
 * other sectors' units as one group of their own ("Andere sectoren"), as before. So "Jouw sector"
 * holds the learner's own sector unit(s), and the others stay apart at the foot.
 */
export function planGroups(plan: { main: Unit[]; other: Unit[] }): ThemeGroup[] {
  const groups = groupByTheme(plan.main);
  if (plan.other.length) groups.push({ key: 'other', units: plan.other });
  return groups;
}

/** The group of a unit in the plan's groups (the home's small theme label), if any. */
export function groupOf(groups: ThemeGroup[], unitId: string): ThemeGroup | undefined {
  return groups.find((g) => g.units.some((u) => u.id === unitId));
}
