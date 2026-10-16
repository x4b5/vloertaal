import { toCourseUnit } from '../regels/course';
import type { RegionPack } from './types';
import { zuidLimburg } from './zuid-limburg';
import { zlRegelsUnit } from './zuid-limburg-regels';

/**
 * Zuid-Limburg's own file, loaded on demand (./index.ts ensureRegion, which registers it): only
 * while the regions are on and the learner chose Zuid-Limburg in Settings. Both units (Taal and
 * Werkregels, with the dialect card), the tips and the Sociale kaart; never in the main bundle or
 * a language's file. It does not import ./index.ts itself: that would tie the main bundle and this
 * file into one shared chunk (tests register it with registerRegion, tests/regionLoaded.ts).
 */
const pack: RegionPack = { region: { ...zuidLimburg, regelsUnit: toCourseUnit(zlRegelsUnit) }, url: import.meta.url };
export default pack;
