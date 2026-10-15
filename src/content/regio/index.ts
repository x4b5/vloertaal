import type { Track } from '../../lib/track';
import type { CultureTip } from '../culture';
import type { Lesson, Unit } from '../types';
import type { Area, Region, RegionChoice, RegionId, SocialCategory } from './types';
import { zuidLimburg } from './zuid-limburg';

export type { Area, Region, RegionChoice, RegionId, SocialCategory, SocialMapEntry } from './types';

/**
 * The regions (docs/regio-zuid-limburg.md): asked only in Settings ("Waar woon je?", under "Taal
 * en ik"), never in the first run, and kept on the phone only (Progress.region). A region switches
 * its units on: with a region, its unit of the learner's track comes into the path right after
 * REGION_SLOT; without one (or 'none') the course is exactly as it was.
 *
 * A region's units are never part of a certificate: the certificates are the same for everyone,
 * wherever they live (src/lib/certificate.ts).
 */
export const REGIONS: Region[] = [zuidLimburg];

export const isRegionId = (x: unknown): x is RegionId => REGIONS.some((r) => r.id === x);
export const isRegionChoice = (x: unknown): x is RegionChoice => x === 'none' || isRegionId(x);

/** The learner's region, or undefined for none ('none', not asked, or an unknown id). */
export function regionOf(choice: string | null | undefined): Region | undefined {
  return REGIONS.find((r) => r.id === choice);
}

/** A region's unit or lesson: every id of a region starts with "rg." (never on a certificate). */
export const isRegionUnitId = (id: string): boolean => id.startsWith('rg.');

/**
 * The regions offered in Settings. Off in production until every row of the Sociale kaart is
 * checked on its own site (`source: 'official'`, tests/regio.test.ts) and the ⚖️ facts of the
 * lessons are checked (docs/livegang.md). On in development (the browser) and wherever
 * setRegionsOn(true) turns it on (tests, screenshots). While it is off, a saved region is dropped
 * on load (src/lib/progress.ts), so switching it off again also removes the region unit and map.
 */
export const REGIONS_LIVE: boolean = false;
let forced: boolean | null = null;
export function setRegionsOn(on: boolean | null): void {
  forced = on;
}
export function regionsOn(): boolean {
  if (forced !== null) return forced;
  return REGIONS_LIVE || Boolean(import.meta.env?.DEV && typeof location !== 'undefined');
}

/* ---- The region units in the course ---- */

/**
 * The unit after which a region's unit comes, per track: in the language course after "Getting
 * to work" (u.travel: bus, train and checking in come before), in the work-rules track after unit
 * 10 (r.geld), the last of its first ten. When the slot is not in the path, at the end of it.
 */
export const REGION_SLOT: Record<Track, string> = { taal: 'u.travel', regels: 'r.geld' };

/**
 * The work-rules units of the regions, registered with the track's own file (src/i18n/packs/nl.ts),
 * so a learner of the language course downloads none of it (like the rules course itself).
 */
const rulesUnits = new Map<RegionId, Unit>();
export function registerRegionRules(region: RegionId, unit: Unit): void {
  rulesUnits.set(region, unit);
}

/** A region's unit(s) of one track (none for no region, or while the rules unit has not loaded). */
export function regionUnits(choice: string | null | undefined, track: Track): Unit[] {
  const region = regionOf(choice);
  if (!region) return [];
  if (track === 'taal') return region.taalUnit ? [region.taalUnit] : [];
  const unit = rulesUnits.get(region.id);
  return unit ? [unit] : [];
}

/** Every region's units of one track, or of both: for looking a unit or lesson up by id. */
export function allRegionUnits(track?: Track): Unit[] {
  const taal = REGIONS.flatMap((r) => (r.taalUnit ? [r.taalUnit] : []));
  const regels = [...rulesUnits.values()];
  return track === 'taal' ? taal : track === 'regels' ? regels : [...taal, ...regels];
}

/** Every region's lessons of the language track (their words count as learned words). */
export const regionTaalLessons = (): Lesson[] => allRegionUnits('taal').flatMap((u) => u.lessons);

/** The path with the region's unit(s) in their slot (REGION_SLOT; at the end when it is not there). */
export function withRegion(main: Unit[], choice: string | null | undefined, track: Track): Unit[] {
  const extra = regionUnits(choice, track).filter((u) => !main.some((m) => m.id === u.id));
  if (!extra.length) return main;
  const at = main.findIndex((u) => u.id === REGION_SLOT[track]);
  const cut = at >= 0 ? at + 1 : main.length;
  return [...main.slice(0, cut), ...extra, ...main.slice(cut)];
}

/** The "Zo werkt het hier" tips of every region (src/content/culture.ts tipForLesson finds them). */
export const allRegionTips: CultureTip[] = REGIONS.flatMap((r) => r.taalTips);

/** The tips of the learner's region (the "Zo werkt het hier" page). */
export const regionTips = (choice: string | null | undefined): CultureTip[] => regionOf(choice)?.taalTips ?? [];

/* ---- The Sociale kaart ---- */

/** The categories of the Sociale kaart, in the order the list shows them, with their Dutch name.
 *  The name in a help language is its gloss (`rg.cat.<category>`, src/i18n/regio/<lang>.ts). */
export const SOCIAL_CATEGORIES: { id: SocialCategory; nl: string; en: string }[] = [
  { id: 'gemeente', nl: 'Gemeente', en: 'Town hall (gemeente)' },
  { id: 'juridisch', nl: 'Juridisch advies', en: 'Legal advice' },
  { id: 'werk', nl: 'Werk', en: 'Work' },
  { id: 'bijstand', nl: 'Bijstand', en: 'Social assistance (bijstand)' },
  { id: 'uitzend', nl: 'Uitzendbureaus', en: 'Temp agencies' },
  { id: 'buurt', nl: 'Buurt en welzijn', en: 'Neighbourhood and welfare' },
  { id: 'schulden', nl: 'Schulden', en: 'Debts' },
  { id: 'taal', nl: 'Taal leren', en: 'Learning the language' },
  { id: 'zorg', nl: 'Zorg', en: 'Health care' },
  { id: 'grens', nl: 'Grens', en: 'The border' },
  { id: 'vakbond', nl: 'Vakbond', en: 'Trade union' },
  { id: 'nieuwkomers', nl: 'Nieuwkomers met een verblijfsvergunning', en: 'Newcomers with a residence permit' },
  { id: 'veilig', nl: 'Huiselijk geweld', en: 'Domestic violence' },
  { id: 'wonen', nl: 'Wonen', en: 'Housing' },
];
export const categoryGlossId = (c: SocialCategory): string => `rg.cat.${c}`;

/** The oldest check of a region's map: the date its "Gecontroleerd" line says. */
export function mapChecked(region: Region): string {
  return region.socialMap.map((e) => e.checked).sort()[0] ?? '';
}

/** The Dutch name of an area, as the map's rows show it. */
export const areaName = (region: Region, area: Area): string => region.areas[area] ?? area;

/** The one tap of a map row: its number (`tel:`) when it has one, else its site; none without either. */
export function mapHref(entry: { tel?: string; url?: string }): string | undefined {
  if (entry.tel && /\d/.test(entry.tel)) return `tel:${entry.tel.replace(/[^\d+]/g, '')}`;
  return entry.url;
}

/** A site as a short text ("https://www.heerlen.nl" → "heerlen.nl"). */
export const shortUrl = (url: string): string => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

/* ---- Translations ---- */

/** Every id of the regions that needs a help-language translation (tests/i18n.test.ts). */
export const regionIds: string[] = [
  ...allRegionUnits('taal').flatMap((u) => [
    u.id,
    ...u.lessons.flatMap((l) => [
      l.id,
      ...l.words.map((w) => w.id),
      ...l.sentences.map((s) => s.id),
      ...(l.dialogues ?? []).flatMap((d) => [d.prompt.id, d.reply.id]),
    ]),
  ]),
  ...allRegionTips.flatMap((t) => [t.id, `${t.id}.b`, t.phrase.id, t.situation.id, ...t.options.map((o) => o.id), t.why.id]),
  ...SOCIAL_CATEGORIES.map((c) => categoryGlossId(c.id)),
];
