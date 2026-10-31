import { said, ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import type { Country } from '../lib/progress';
import { ChoiceCards, QuestionHead, type ChoiceOption } from './Choice';
import { ChromeHead } from './ChromeBack';

/** The flag of the Netherlands or Belgium, drawn (a flag emoji is two letters on some phones). */
export const CountryFlag = ({ country }: { country: Country }) => (
  <svg className="country-flag" viewBox="0 0 30 20" width={42} height={28} aria-hidden focusable="false">
    {country === 'nl'
      ? <><rect width="30" height="6.67" fill="#AE1C28" /><rect y="6.67" width="30" height="6.67" fill="#fff" /><rect y="13.33" width="30" height="6.67" fill="#21468B" /></>
      : <><rect width="10" height="20" fill="#000" /><rect x="10" width="10" height="20" fill="#FAE042" /><rect x="20" width="10" height="20" fill="#ED2939" /></>}
    <rect width="30" height="20" fill="none" stroke="currentColor" strokeOpacity="0.35" />
  </svg>
);

/** The two cards of "In welk land werk je?" (Settings and the first run): the same everywhere. */
export const countryOptions = (lang?: HelpLanguage): ChoiceOption<Country>[] => [
  { id: 'nl', nl: 'Nederland', text: ui('countryNl', lang), picture: <CountryFlag country="nl" /> },
  { id: 'be', nl: 'België (Vlaanderen)', text: ui('countryBe', lang), picture: <CountryFlag country="be" /> },
];

/**
 * "In welk land werk je?" on a page of its own: in the first run right after the sector (both
 * tracks: the work rules and some tips differ per country), and once on opening the home for a
 * learner who started before the question existed (src/lib/onboarding.ts askCountry). Two cards
 * and nothing else to tap (the back arrow only in the first run). The choice can change later in
 * Settings.
 */
export function CountryScreen({ lang, onDone, onBack }: {
  lang?: HelpLanguage;
  onDone: (c: Country) => void;
  /** First run only: back to the sector. */
  onBack?: () => void;
}) {
  return (
    <div className="screen onboarding sector-screen country-screen max3-page" dir={lang?.dir}>
      {onBack && <ChromeHead lang={lang} onBack={onBack} />}
      <QuestionHead nl="In welk land werk je?" text={ui('countryTitle', lang)} hint={ui('countryHint', lang)} say lang={lang} />
      <ChoiceCards label={said(ui('countryTitle', lang))} onPick={onDone} options={countryOptions(lang)} dir={lang?.dir} />
    </div>
  );
}
