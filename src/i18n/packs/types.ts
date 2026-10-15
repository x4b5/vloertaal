import type { CultureTranslation } from '../culture/types';
import type { HelpLanguageSource } from '../types';

/** One help language's files: the main texts plus the culture, work, About and learning texts. */
export interface LanguagePack {
  base: HelpLanguageSource;
  culture: CultureTranslation;
  work: CultureTranslation;
  about: CultureTranslation;
  learn: CultureTranslation;
  /** Where the pack's file was loaded from (saved with the app for offline use). */
  url: string;
}
