import { ui } from '../i18n';
import type { Gender, HelpLanguage } from '../i18n/types';
import { Bi } from './Bi';
import { Character, type CharacterId } from './Characters';
import { CheckIcon } from './Icons';
import { LogoMark, Wordmark } from './Logo';

const OPTIONS: { id: Gender; nl: string; key: 'genderWoman' | 'genderMan' | 'genderNone'; who?: CharacterId }[] = [
  { id: 'f', nl: 'Vrouw', key: 'genderWoman', who: 'amina' },
  { id: 'm', nl: 'Man', key: 'genderMan', who: 'bram' },
  { id: 'x', nl: 'Zeg ik liever niet', key: 'genderNone' },
];

/**
 * Woman, man or rather not say: two cast heads and a full-width "rather not say", in the look of
 * the sector cards. The choice only changes the help language ("I am sick" in Polish: chory or
 * chora); the Dutch is the same.
 */
export function GenderPicker({ current, lang, onPick, compact = false }: {
  /** undefined = nothing chosen yet. */
  current?: Gender;
  lang?: HelpLanguage;
  onPick: (g: Gender) => void;
  /** Smaller cards (Settings). */
  compact?: boolean;
}) {
  return (
    <div className={`lang-grid sector-grid gender-grid ${compact ? 'lang-grid-compact' : ''}`} role="radiogroup" aria-label={ui('genderTitle').en}>
      {OPTIONS.map((o) => {
        const picked = current === o.id;
        return (
          <button
            key={o.id}
            type="button"
            role="radio"
            aria-checked={picked}
            className={`lang-btn sector-btn gender-btn ${o.who ? '' : 'sector-none gender-none'} ${picked ? 'picked' : ''}`}
            onClick={() => onPick(o.id)}
          >
            {o.who && (
              <span className="gender-face" aria-hidden>
                <Character who={o.who} crop="head" size={compact ? 56 : 84} />
              </span>
            )}
            <span className="lang-names">
              <span className="lang-native" lang="nl">{o.nl}</span>
              <Bi className="sector-names" text={ui(o.key, lang)} />
            </span>
            {picked && <CheckIcon size={20} className="lang-check" />}
          </button>
        );
      })}
    </div>
  );
}

/** First run, right after a help language with gender (Arabic, Polish, …): asked once, calmly. */
export function GenderScreen({ lang, onDone, current }: { lang?: HelpLanguage; onDone: (g: Gender) => void; current?: Gender }) {
  return (
    <div className="screen onboarding sector-screen gender-screen">
      <div className="hero">
        <h1 className="hero-logo sector-logo"><LogoMark size={40} /><Wordmark /></h1>
      </div>
      <h2 className="onboarding-title sector-title">
        <span className="sector-title-nl" lang="nl">Vrouw of man?</span>
        <Bi text={ui('genderTitle', lang)} />
      </h2>
      <p className="sector-hint"><Bi text={ui('genderHint', lang)} /></p>
      <GenderPicker current={current} lang={lang} onPick={onDone} />
    </div>
  );
}
