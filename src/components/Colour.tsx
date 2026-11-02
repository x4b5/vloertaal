import { said, ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { THEME_COLOURS } from '../lib/progress';
import { ChoiceCards, QuestionHead, type ChoiceOption } from './Choice';
import { ChromeHead } from './ChromeBack';

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

/**
 * "Welke kleur wil je?" on a page of its own: the last page of the first run, right after the
 * country (src/lib/onboarding.ts). Four swatches and nothing else to tap; the colour shows at once
 * on the home. Settings > Weergave can change it later.
 */
export function ColourScreen({ lang, onDone, onBack }: {
  lang?: HelpLanguage;
  onDone: (t: ThemeColour) => void;
  /** First run: back to the country. */
  onBack?: () => void;
}) {
  return (
    <div className="screen onboarding sector-screen colour-screen max3-page" dir={lang?.dir}>
      {onBack && <ChromeHead lang={lang} onBack={onBack} />}
      <QuestionHead nl="Welke kleur wil je?" text={ui('colourTitle', lang)} hint={ui('colourHint', lang)} say lang={lang} />
      <ChoiceCards label={said(ui('colourTitle', lang))} onPick={onDone} options={colourOptions(lang)} dir={lang?.dir} />
    </div>
  );
}
