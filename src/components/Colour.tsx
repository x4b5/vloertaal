import { ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { THEME_COLOURS } from '../lib/progress';
import type { ChoiceOption } from './Choice';

export type ThemeColour = (typeof THEME_COLOURS)[number];

/** A colour as a round swatch of its floor and its strong colour: no words needed to choose. */
export const ThemeSwatch = ({ theme }: { theme: ThemeColour }) => <span className={`theme-swatch theme-swatch-${theme}`} aria-hidden />;

const THEME_NAMES: Record<ThemeColour, { nl: string; key: 'themeSand' | 'themeHarbour' | 'themeWorkwear' | 'themeDark' }> = {
  light: { nl: 'Zand', key: 'themeSand' },
  haven: { nl: 'Haven', key: 'themeHarbour' },
  werkjas: { nl: 'Werkjas', key: 'themeWorkwear' },
  dark: { nl: 'Donker', key: 'themeDark' },
};

/** The four cards of "Welke kleur wil je?" (Settings > Weergave). */
export const colourOptions = (lang?: HelpLanguage): ChoiceOption<ThemeColour>[] =>
  THEME_COLOURS.map((t) => ({ id: t, nl: THEME_NAMES[t].nl, text: ui(THEME_NAMES[t].key, lang), picture: <ThemeSwatch theme={t} /> }));
