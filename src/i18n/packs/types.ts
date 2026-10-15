import type { CultureTranslation } from '../culture/types';
import type { HelpLanguageSource } from '../types';

/** One help language's files: the main texts plus the culture, work, About, learning and region texts. */
export interface LanguagePack {
  base: HelpLanguageSource;
  culture: CultureTranslation;
  work: CultureTranslation;
  about: CultureTranslation;
  learn: CultureTranslation;
  /** The regions (src/content/regio): their lessons and tips, the Sociale kaart's categories and the Settings row. */
  regio: CultureTranslation;
  /** Where the pack's file was loaded from (saved with the app for offline use). */
  url: string;
}
