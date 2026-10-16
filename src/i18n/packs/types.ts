import type { CultureTranslation } from '../culture/types';
import type { HelpLanguageSource } from '../types';

/** One help language's files: the main texts plus the culture, work, About and learning texts. The
 *  region texts are a file of their own (RegionTextPack), loaded only for a learner of a region. */
export interface LanguagePack {
  base: HelpLanguageSource;
  culture: CultureTranslation;
  work: CultureTranslation;
  about: CultureTranslation;
  learn: CultureTranslation;
  /** Where the pack's file was loaded from (saved with the app for offline use). */
  url: string;
}

/**
 * One help language's region texts (src/i18n/regio/<lang>.ts): the Settings row "Waar woon je?",
 * the Sociale kaart's categories and the regions' lessons and tips. Its own file, loaded only
 * while the regions are on and needed (src/i18n/index.ts ensureRegionTexts).
 */
export interface RegionTextPack {
  code: HelpLanguageSource['code'];
  texts: CultureTranslation;
  /** Where the file was loaded from (saved with the app for offline use). */
  url: string;
}
