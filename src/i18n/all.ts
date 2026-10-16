import ar from './packs/ar';
import bg from './packs/bg';
import fa from './packs/fa';
import pl from './packs/pl';
import prs from './packs/prs';
import ro from './packs/ro';
import ti from './packs/ti';
import tr from './packs/tr';
import uk from './packs/uk';
import arRegio from './packs/regio/ar';
import bgRegio from './packs/regio/bg';
import faRegio from './packs/regio/fa';
import plRegio from './packs/regio/pl';
import prsRegio from './packs/regio/prs';
import roRegio from './packs/regio/ro';
import tiRegio from './packs/regio/ti';
import trRegio from './packs/regio/tr';
import ukRegio from './packs/regio/uk';
import { getHelpLanguage, loadedSources, registerPack, registerRegionTexts } from './index';
import type { HelpLanguage, HelpLanguageSource } from './types';

/**
 * Every help language loaded at once, with its region texts, for tests and checks (never imported
 * by the app, which loads one pack on demand: src/i18n/index.ts ensureLanguage).
 */
for (const pack of [ar, ti, fa, prs, uk, tr, pl, ro, bg]) registerPack(pack);
// With the region texts (in the app their own files, loaded only for a learner of a region).
for (const pack of [arRegio, tiRegio, faRegio, prsRegio, ukRegio, trRegio, plRegio, roRegio, bgRegio]) registerRegionTexts(pack);

export * from './index';

/** Every help language as written, texts by gender where they differ. */
export const helpLanguageSources: HelpLanguageSource[] = loadedSources();

/** The help languages with the default form (no gender chosen). */
export const helpLanguages: HelpLanguage[] = helpLanguageSources.map((src) => getHelpLanguage(src.code)!);
