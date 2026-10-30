import ar from '../i18n/packs/ar';
import bg from '../i18n/packs/bg';
import de from '../i18n/packs/de';
import es from '../i18n/packs/es';
import fa from '../i18n/packs/fa';
import fr from '../i18n/packs/fr';
import pl from '../i18n/packs/pl';
import prs from '../i18n/packs/prs';
import pt from '../i18n/packs/pt';
import ro from '../i18n/packs/ro';
import ti from '../i18n/packs/ti';
import tr from '../i18n/packs/tr';
import uk from '../i18n/packs/uk';
import type { LanguagePack } from '../i18n/packs/types';
import { forGender, isPlural, type LangCode, type UiText } from '../i18n/types';

/**
 * The app's own texts in a help language, for the plain pages made at build time (src/lib/
 * langPages.ts, sectorPages.ts): the same strings the app shows, so the pages add no translation
 * of their own. The default form (no gender chosen), as the app shows it before the learner picks.
 */
const PACKS: Record<LangCode, LanguagePack> = { ar, ti, fa, prs, uk, tr, pl, ro, bg, es, pt, fr, de };

export interface PackText {
  /** A UI string; throws if the language has none (a page must not show English by surprise). */
  ui: (key: string) => string;
  /** A gloss (word, theme, About section …) by id, or undefined. */
  gloss: (id: string) => string | undefined;
}

export function packText(code: LangCode): PackText {
  const p = PACKS[code];
  const ui: Record<string, UiText> = { ...p.base.ui, ...p.work.ui, ...p.about.ui, ...p.learn.ui };
  const gloss: Record<string, UiText> = { ...p.base.gloss, ...p.culture.gloss, ...p.work.gloss, ...p.about.gloss, ...p.learn.gloss };
  const plain = (t: UiText | undefined) => (t === undefined || isPlural(t) ? undefined : forGender(t));
  return {
    ui: (key) => {
      const t = plain(ui[key]);
      if (t === undefined) throw new Error(`pageTexts: ${code} has no plain text for ${key}`);
      return t;
    },
    gloss: (id) => plain(gloss[id]),
  };
}
