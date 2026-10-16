import { ensureRegion, isRegionLoaded, regionsOn, regionWanted } from '../content/regio';
import { ensureRegionTexts, isRegionTextsLoaded } from '../i18n';
import type { UiCode } from '../i18n/types';

/**
 * The learner's region's files (src/content/regio ensureRegion) and its texts in the help language
 * (src/i18n/index.ts ensureRegionTexts), loaded only while the regions are on: for a learner who
 * chose a region, and the texts also while Settings is open (`asking`: its row "Waar woon je?").
 * With the regions off nothing here is ever fetched.
 */
export const regionTextsWanted = (choice: string | null | undefined, asking = false): boolean =>
  regionsOn() && (asking || regionWanted(choice));

/** Is everything here for this region choice and help language (also: nothing needed)? */
export function regionReady(choice: string | null | undefined, helpLang: UiCode | null | undefined, asking = false): boolean {
  return isRegionLoaded(choice) && (!regionTextsWanted(choice, asking) || isRegionTextsLoaded(helpLang));
}

/** Loads what regionReady waits for (each file once; again after a failure). */
export function ensureRegionFor(choice: string | null | undefined, helpLang: UiCode | null | undefined, asking = false): Promise<void> {
  return Promise.all([ensureRegion(choice), regionTextsWanted(choice, asking) ? ensureRegionTexts(helpLang) : null]).then(() => {});
}
