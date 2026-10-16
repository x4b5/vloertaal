import type { RegionMeta } from './types';

/**
 * Zuid-Limburg as the app always knows it (the main bundle): its name and places for Settings
 * ("Waar woon je?") and the ids of its units. Its lessons, tips and Sociale kaart are in
 * ./zuid-limburg.ts and ./zuid-limburg-regels.ts, loaded only for a learner of the region
 * (./zuid-limburg-pack.ts).
 */
export const zlMeta: RegionMeta = {
  id: 'zl',
  nl: 'Zuid-Limburg',
  places: ['Maastricht', 'Heerlen', 'Sittard-Geleen', 'Kerkrade', 'Heuvelland'],
  taalUnitId: 'rg.zl.u',
  regelsUnitId: 'rg.zl.r',
};
