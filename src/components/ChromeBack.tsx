import { said, saidLang, ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { BackIcon } from './Icons';

/**
 * The one back arrow of the app: small, at the top-start corner of a page (mirrored right to
 * left). Like the bottom bar and the lesson ✕ it is fixed chrome, always the same thing in the
 * same spot, so it is not one of the "at most 3" choices of a page. Every page with a way back
 * uses this component (class `chrome-back`; the max-3 counters leave it out by that class).
 */
export function ChromeBack({ lang, onBack }: { lang?: HelpLanguage; onBack: () => void }) {
  const t = ui('back', lang);
  return (
    <button type="button" className="icon-btn chrome-back" onClick={onBack} aria-label={said(t)} title={said(t)} lang={saidLang(t)}>
      <BackIcon size={28} />
    </button>
  );
}

/** A page head with only the back arrow (first-run and reminder pages, whose title is centred below). */
export function ChromeHead({ lang, onBack }: { lang?: HelpLanguage; onBack: () => void }) {
  return (
    <div className="screen-head chrome-head" dir={lang?.dir === 'rtl' ? 'rtl' : undefined}>
      <ChromeBack lang={lang} onBack={onBack} />
    </div>
  );
}
