import { said, ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { THEME_COLOURS, type ThemeChoice } from '../lib/progress';
import { Bi } from './Bi';
import { ChoiceCards, QuestionHead, type ChoiceOption } from './Choice';
import { ChromeHead } from './ChromeBack';
import { ChevronIcon } from './Icons';
import { useTapGuard } from './useFreshScreen';

export type ThemeColour = (typeof THEME_COLOURS)[number];

/** A colour as a round swatch of its floor and its strong colour: no words needed to choose. */
export const ThemeSwatch = ({ theme }: { theme: ThemeColour }) => <span className={`theme-swatch theme-swatch-${theme}`} aria-hidden />;

const THEME_NAMES: Record<ThemeColour, { nl: string; key: 'themeSand' | 'themeHarbour' | 'themeWorkwear' | 'themeDark' }> = {
  light: { nl: 'Zand', key: 'themeSand' },
  haven: { nl: 'Haven', key: 'themeHarbour' },
  werkjas: { nl: 'Werkjas', key: 'themeWorkwear' },
  dark: { nl: 'Donker', key: 'themeDark' },
};

/** The four cards of "Welke kleur wil je?" (Settings > Weergave and the first run): the same everywhere. */
export const colourOptions = (lang?: HelpLanguage): ChoiceOption<ThemeColour>[] =>
  THEME_COLOURS.map((t) => ({ id: t, nl: THEME_NAMES[t].nl, text: ui(THEME_NAMES[t].key, lang), picture: <ThemeSwatch theme={t} /> }));

/** The card with the check: 'auto' (an older save) is shown as the colour it gives on this device now. */
export const shownColour = (theme: ThemeChoice): ThemeColour =>
  theme !== 'auto' ? theme : typeof matchMedia === 'function' && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

/**
 * "Welke kleur wil je?" on a page of its own: the last page of the first run, right after the
 * country (src/lib/onboarding.ts). A tap shows the colour at once on this page and the learner
 * stays: first see the colour, then agree with Continue (the owner's request, 2 November 2026).
 * The colour in use (Zand at first) carries the check, so Continue alone keeps it. Settings >
 * Weergave can change it later.
 */
export function ColourScreen({ lang, current, onPick, onDone, onBack }: {
  lang?: HelpLanguage;
  current: ThemeColour;
  /** A tap: the app takes the colour at once (not yet the end of the first run). */
  onPick: (t: ThemeColour) => void;
  /** Continue: the colour shown is the one. */
  onDone: () => void;
  /** First run: back to the country. */
  onBack?: () => void;
}) {
  // A tap meant for the country page must not agree with a colour not yet seen.
  const ready = useTapGuard();
  const rtl = lang?.dir === 'rtl';
  return (
    <div className="screen onboarding sector-screen colour-screen max3-page" dir={lang?.dir}>
      {onBack && <ChromeHead lang={lang} onBack={onBack} />}
      <QuestionHead nl="Welke kleur wil je?" text={ui('colourTitle', lang)} hint={ui('colourHint', lang)} say lang={lang} />
      <ChoiceCards label={said(ui('colourTitle', lang))} current={current} onPick={onPick} options={colourOptions(lang)} dir={lang?.dir} />
      <footer className="player-foot colour-foot">
        <div className="foot-inner">
          <div className="foot-actions">
            <button type="button" className="btn btn-go btn-primary colour-go" onClick={() => { if (ready.current) onDone(); }} dir={rtl ? 'rtl' : undefined}>
              <Bi className="btn-label" text={ui('continue', lang)} />
              <span className="btn-block" aria-hidden><ChevronIcon size={26} /></span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
