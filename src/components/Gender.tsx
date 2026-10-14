import { ui } from '../i18n';
import type { Gender, HelpLanguage } from '../i18n/types';
import { Bi } from './Bi';
import { Character, type CharacterId } from './Characters';
import { CheckIcon, CloseIcon } from './Icons';
import { LogoMark, Wordmark } from './Logo';

const OPTIONS: { id: Gender; nl: string; key: 'genderWoman' | 'genderMan' | 'genderNone'; who?: CharacterId }[] = [
  { id: 'f', nl: 'Vrouw', key: 'genderWoman', who: 'amina' },
  { id: 'm', nl: 'Man', key: 'genderMan', who: 'bram' },
  { id: 'x', nl: 'Zeg ik liever niet', key: 'genderNone' },
];

/** "Rather not say": a plain person outline, no woman or man (in the sector cards' icon tile). */
const NeutralIcon = ({ size = 28 }: { size?: number }) => (
  <svg className="icon" viewBox="0 0 24 24" width={size} height={size} aria-hidden focusable="false">
    <circle cx="12" cy="8.2" r="3.9" fill="none" stroke="currentColor" strokeWidth="2.4" />
    <path d="M4.6 20.4a7.4 7.4 0 0 1 14.8 0" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
  </svg>
);

/**
 * Woman, man or rather not say: two cast heads and a full-width "rather not say", in the look of
 * the sector cards. The choice only changes the help language ("I am sick" in Polish: chory or
 * chora); the Dutch is the same.
 */
export function GenderPicker({ current, lang, onPick, compact = false, mini = false }: {
  /** undefined = nothing chosen yet. */
  current?: Gender;
  lang?: HelpLanguage;
  onPick: (g: Gender) => void;
  /** Smaller cards (Settings). */
  compact?: boolean;
  /** Woman and man only, as two low tiles on one row (the home's one-time card, whose ✕ is the
   *  "rather not say": nothing chosen reads the same as 'x'). */
  mini?: boolean;
}) {
  const small = compact || mini;
  return (
    <div className={`lang-grid sector-grid gender-grid ${small ? 'lang-grid-compact' : ''} ${mini ? 'gender-grid-mini' : ''}`} role="radiogroup" aria-label={ui('genderTitle').en}>
      {(mini ? OPTIONS.filter((o) => o.who) : OPTIONS).map((o) => {
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
            {o.who ? (
              <span className="gender-face" aria-hidden>
                <Character who={o.who} crop="head" size={mini ? 38 : compact ? 56 : 84} />
              </span>
            ) : (
              <span className="sector-icon" aria-hidden><NeutralIcon size={mini ? 22 : compact ? 26 : 30} /></span>
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

/**
 * On the home, once, for learners who finished the first run before the gender question (see
 * shouldAskGender): the same question and the two pictures, small, with a ✕ that puts it away
 * for good (and leaves the help language's texts as they are, like "rather not say").
 */
export function GenderCard({ lang, onPick, onLater }: { lang?: HelpLanguage; onPick: (g: Gender) => void; onLater: () => void }) {
  const rtl = lang?.dir === 'rtl';
  return (
    <section className="gender-card" aria-labelledby="gender-card-title" dir={rtl ? 'rtl' : undefined}>
      <div className="gender-card-head">
        <h2 id="gender-card-title" className="gender-card-title">
          <Bi text={ui('genderTitle', lang)} />
          <span className="gender-card-nl" lang="nl" dir="ltr">Vrouw of man?</span>
        </h2>
        <button type="button" className="icon-btn gender-card-x" onClick={onLater} aria-label={`Close · ${ui('genderNone').en}`}>
          <CloseIcon size={20} />
        </button>
      </div>
      <GenderPicker lang={lang} onPick={onPick} mini />
    </section>
  );
}
