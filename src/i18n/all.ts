import ar from './packs/ar';
import bg from './packs/bg';
import fa from './packs/fa';
import pl from './packs/pl';
import prs from './packs/prs';
import ro from './packs/ro';
import ti from './packs/ti';
import tr from './packs/tr';
import uk from './packs/uk';
import { getHelpLanguage, loadedSources, registerPack } from './index';
import type { HelpLanguage, HelpLanguageSource } from './types';

/**
 * Every help language loaded at once, for tests and checks (never imported by the app, which
 * loads one pack on demand: src/i18n/index.ts ensureLanguage).
 */
for (const pack of [ar, ti, fa, prs, uk, tr, pl, ro, bg]) registerPack(pack);

export * from './index';

/** Every help language as written, texts by gender where they differ. */
export const helpLanguageSources: HelpLanguageSource[] = loadedSources();

/** The help languages with the default form (no gender chosen). */
export const helpLanguages: HelpLanguage[] = helpLanguageSources.map((src) => getHelpLanguage(src.code)!);
