import type { Track } from '../../lib/track';
import type { CultureTip } from '../culture';
import type { Lesson, Unit } from '../types';
import { zlMeta } from './meta';
import type { Area, Region, RegionChoice, RegionId, RegionMeta, RegionPack, SocialCategory } from './types';

export type { Area, Region, RegionChoice, RegionId, RegionMeta, RegionPack, SocialCategory, SocialMapEntry } from './types';

/**
 * The regions (docs/regio-zuid-limburg.md): asked only in Settings ("Waar woon je?", under "Taal
 * en ik"), never in the first run, and kept on the phone only (Progress.region). A region switches
 * its units on: with a region, its unit of the learner's track comes into the path right after
 * REGION_SLOT; without one (or 'none') the course is exactly as it was.
 *
 * A region's units are never part of a certificate: the certificates are the same for everyone,
 * wherever they live (src/lib/certificate.ts).
 *
 * This file is the small registry in the main bundle: the regions' names and ids. A region's
 * content (its units, tips, Sociale kaart; src/content/regio/<region>-pack.ts) is a file of its
 * own, loaded only while the regions are on and the learner chose that region (ensureRegion), like
 * a help language's file. Until it is here the app works without it: the path without the region
 * unit, the Hulp tab without the map. Its translations load the same way (src/i18n/index.ts
 * ensureRegionTexts).
 */
export const REGIONS: RegionMeta[] = [zlMeta];

export const isRegionId = (x: unknown): x is RegionId => REGIONS.some((r) => r.id === x);
export const isRegionChoice = (x: unknown): x is RegionChoice => x === 'none' || isRegionId(x);

/** The learner's region's name and ids (Settings), or undefined for none ('none', not asked, or an unknown id). */
export function regionMetaOf(choice: string | null | undefined): RegionMeta | undefined {
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

/* ---- A region's own file ---- */

const loaders: Record<RegionId, () => Promise<{ default: RegionPack }>> = {
  zl: () => import('./zuid-limburg-pack'),
};
const loaded = new Map<RegionId, RegionPack>();
const pending = new Map<RegionId, Promise<void>>();

/** Puts a region's content in place (its file does this when it loads; tests import that file). */
export function registerRegion(pack: RegionPack): void {
  loaded.set(pack.region.id, pack);
}

/** Does the app need a region's file for this choice: the regions on, and a region chosen. */
export const regionWanted = (choice: string | null | undefined): choice is RegionId => regionsOn() && isRegionId(choice);

/** Is everything for this choice here (also for no region, or while the regions are off)? */
export function isRegionLoaded(choice: string | null | undefined): boolean {
  return !regionWanted(choice) || loaded.has(choice);
}

/**
 * Loads the chosen region's file (once; again after a failure, e.g. offline). Resolves at once
 * for no region, a region already here, and while the regions are off: then nothing is fetched.
 */
export function ensureRegion(choice: string | null | undefined): Promise<void> {
  if (!regionWanted(choice) || loaded.has(choice)) return Promise.resolve();
  let p = pending.get(choice);
  if (!p) {
    p = loaders[choice]().then((m) => registerRegion(m.default)).finally(() => pending.delete(choice));
    pending.set(choice, p);
  }
  return p;
}

/** Has a region's file loaded on this visit (so its translations come along offline too)? */
export const anyRegionLoaded = (): boolean => loaded.size > 0;

/** The files of the regions loaded on this visit: saved with the app for offline use (src/lib/offline.ts). */
export function loadedRegionUrls(): string[] {
  return [...loaded.values()].map((p) => p.url).filter((u) => /^https?:/.test(u));
}

/** The learner's region with its content, or undefined for none, or while its file has not loaded. */
export function regionOf(choice: string | null | undefined): Region | undefined {
  return isRegionId(choice) ? loaded.get(choice)?.region : undefined;
}

const loadedRegions = (): Region[] => [...loaded.values()].map((p) => p.region);

/* ---- The region units in the course ---- */

/**
 * The unit after which a region's unit comes, per track: in the language course after "Getting
 * to work" (u.travel: bus, train and checking in come before), in the work-rules track after unit
 * 10 (r.geld), the last of its first ten. When the slot is not in the path, at the end of it.
 */
export const REGION_SLOT: Record<Track, string> = { taal: 'u.travel', regels: 'r.geld' };

/** The unit of a region of one track. */
const unitOf = (region: Region, track: Track): Unit | undefined => (track === 'taal' ? region.taalUnit : region.regelsUnit);

/** A region's unit(s) of one track (none for no region, or while its file has not loaded). */
export function regionUnits(choice: string | null | undefined, track: Track): Unit[] {
  const region = regionOf(choice);
  const unit = region && unitOf(region, track);
  return unit ? [unit] : [];
}

/** Every loaded region's units of one track, or of both: for looking a unit or lesson up by id. */
export function allRegionUnits(track?: Track): Unit[] {
  const tracks: Track[] = track ? [track] : ['taal', 'regels'];
  return tracks.flatMap((t) => loadedRegions().flatMap((r) => unitOf(r, t) ?? []));
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

/** The "Zo werkt het hier" tips of every loaded region (src/content/culture.ts tipForLesson finds them). */
export const allRegionTips = (): CultureTip[] => loadedRegions().flatMap((r) => r.taalTips);

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

/** Every id of the loaded regions that needs a help-language translation (tests/i18n.test.ts). */
export const regionIds = (): string[] => [
  ...allRegionUnits('taal').flatMap((u) => [
    u.id,
    ...u.lessons.flatMap((l) => [
      l.id,
      ...l.words.map((w) => w.id),
      ...l.sentences.map((s) => s.id),
      ...(l.dialogues ?? []).flatMap((d) => [d.prompt.id, d.reply.id]),
    ]),
  ]),
  ...allRegionTips().flatMap((t) => [t.id, `${t.id}.b`, t.phrase.id, t.situation.id, ...t.options.map((o) => o.id), t.why.id]),
  ...SOCIAL_CATEGORIES.map((c) => categoryGlossId(c.id)),
];
