import type { CultureTip } from '../culture';
import type { Unit } from '../types';

/**
 * Regional modules (docs/regio-zuid-limburg.md): lessons and a "Sociale kaart" for one region,
 * only for learners who chose that region in Settings ("Waar woon je?"). Like a sector, but a
 * region switches units on or off instead of reordering them: a learner without a region (or
 * "Andere plek / zeg ik liever niet") sees exactly the course as it was.
 *
 * Every id of a region starts with "rg.<region>." ("rg.zl.u", "rg.zl.r.l.1", "rg.zl.k.ggd").
 */

/** The regions there are (later: 'tw' Twente, 'rdam' Rotterdam, …). */
export type RegionId = 'zl';
/** What is stored in Progress.region: a region, or 'none' for "Andere plek / zeg ik liever niet". */
export type RegionChoice = RegionId | 'none';

/** Kinds of help on the Sociale kaart, in the order the list shows them. */
export type SocialCategory =
  | 'gemeente' | 'juridisch' | 'werk' | 'bijstand' | 'uitzend' | 'buurt' | 'schulden'
  | 'taal' | 'zorg' | 'grens' | 'vakbond' | 'nieuwkomers' | 'veilig' | 'wonen';

/** A part of a region; 'all' = the whole region. Each region names its own parts. */
export type Area = 'all' | 'mh' | 'parkstad' | 'wm';

export interface SocialMapEntry {
  /** 'rg.zl.k.kredietbank' */
  id: string;
  category: SocialCategory;
  /** As people say it. */
  name: string;
  /** One line in plain Dutch: when you go there. */
  when: string;
  /** Preferably the main site, not a deep link (https:). */
  url?: string;
  /** Only a national number (0800, 088, 112) or 14 + the area code of the gemeente. */
  tel?: string;
  area: Area[];
  /** The date of the last check (YYYY-MM-DD). The build fails when it is older than 7 months. */
  checked: string;
  /** 'official' = checked on the organisation's own site; 'other' = not yet (may not go live). */
  source: 'official' | 'other';
  emoji: string;
}

/**
 * What the app always knows of a region (the main bundle, src/content/regio/index.ts REGIONS): its
 * name for Settings and the ids of its units. Everything else comes with the region's own file
 * (RegionPack), loaded only for a learner who chose that region while the regions are on.
 */
export interface RegionMeta {
  id: RegionId;
  /** The name on the button and in the path (a name: never translated). */
  nl: string;
  /** Places in the explanation, so people recognise their own. */
  places: string[];
  /** The id of its unit of the language track. */
  taalUnitId?: string;
  /** The id of its unit of the work-rules track. */
  regelsUnitId?: string;
}

/** A region with its content: in the region's own file (src/content/regio/<region>-pack.ts). */
export interface Region extends RegionMeta {
  /** The region's unit of the language track (src/content/types.ts Unit). */
  taalUnit?: Unit;
  /** Its "Zo werkt het hier" tips, one per lesson of taalUnit. */
  taalTips: CultureTip[];
  /** Its unit of the work-rules track (Dutch-only content), as the course plays it. */
  regelsUnit?: Unit;
  /** The names of its areas, for the Sociale kaart. */
  areas: Partial<Record<Area, string>>;
  /** The Sociale kaart (docs/regio-zuid-limburg.md, section 5). */
  socialMap: SocialMapEntry[];
}

/** A region's own file, loaded on demand (src/content/regio/index.ts ensureRegion). */
export interface RegionPack {
  region: Region;
  /** Where the file was loaded from (saved with the app for offline use). */
  url: string;
}
