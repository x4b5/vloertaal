import { ui, said } from '../i18n';
import type { Gender, HelpLanguage } from '../i18n/types';
import { Bi } from './Bi';
import { useFreshCards } from './useFreshScreen';
import { NlPair } from './NlPair';
import { Character, type CharacterId } from './Characters';
import { CheckIcon } from './Icons';
import { ChromeHead } from './ChromeBack';
import { LogoMark, Wordmark } from './Logo';
import { QuestionSay } from './Choice';
import { Greeting } from './Greeting';

const OPTIONS: { id: Gender; nl: string; key: 'genderWoman' | 'genderMan' | 'genderNone'; who?: CharacterId }[] = [
  { id: 'f', nl: 'Vrouw', key: 'genderWoman', who: 'jada' },
  { id: 'm', nl: 'Man', key: 'genderMan', who: 'henk' },
  { id: 'x', nl: 'Zeg ik liever niet', key: 'genderNone' },
];

/** "Rather not say": a plain person outline, no woman or man (in the sector cards' icon tile). */
export const NeutralIcon = ({ size = 28 }: { size?: number }) => (
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
  const fresh = useFreshCards('gender');
  return (
    <div className={`lang-grid sector-grid gender-grid ${small ? 'lang-grid-compact' : ''} ${mini ? 'gender-grid-mini' : ''}`} role="radiogroup"
      aria-label={said(ui('genderTitle', lang))}
      // As in the other radio groups (ChoiceCards): the arrow keys go from card to card (a pick
      // still needs Enter or a tap). Left and right follow the language's direction.
      onKeyDown={(e) => {
        const rtl = lang?.dir === 'rtl';
        const back = e.key === 'ArrowUp' || e.key === (rtl ? 'ArrowRight' : 'ArrowLeft');
        const on = e.key === 'ArrowDown' || e.key === (rtl ? 'ArrowLeft' : 'ArrowRight');
        if (!back && !on) return;
        const cards = [...e.currentTarget.querySelectorAll<HTMLButtonElement>('.gender-btn')];
        const at = cards.indexOf(document.activeElement as HTMLButtonElement);
        if (at < 0) return;
        e.preventDefault();
        cards[(at + (on ? 1 : cards.length - 1)) % cards.length].focus();
      }}
    >
      {(mini ? OPTIONS.filter((o) => o.who) : OPTIONS).map((o) => {
        const picked = current === o.id;
        return (
          <button
            key={o.id}
            type="button"
            role="radio"
            aria-checked={picked}
            className={`lang-btn sector-btn gender-btn ${o.who ? '' : 'sector-none gender-none'} ${picked ? 'picked' : ''}`}
            onClick={() => { if (!fresh()) onPick(o.id); }}
          >
            {o.who ? (
              <span className="gender-face" aria-hidden>
                <Character who={o.who} crop="head" size={mini ? 38 : compact ? 56 : 84} />
              </span>
            ) : (
              <span className="sector-icon" aria-hidden><NeutralIcon size={mini ? 22 : compact ? 26 : 30} /></span>
            )}
            <span className="lang-names">
              <NlPair nlFirst nl={o.nl} nlClass="lang-native" className="sector-names" text={ui(o.key, lang)} />
            </span>
            {picked && <CheckIcon size={20} className="lang-check" />}
          </button>
        );
      })}
    </div>
  );
}

/**
 * "Woman or man?" on its own page, asked once for a help language with gender (Arabic, Polish, …):
 * in the first run right after the language (before the password, so the password page already
 * talks to you in the right form), and once on opening for a learner from before the question
 * (see shouldAskGender). Three cards and nothing else: "rather not say" is the way past. The
 * Dutch question has a speaker (not a choice).
 */
export function GenderScreen({ lang, onDone, current, onBack, greet = false }: {
  lang?: HelpLanguage;
  onDone: (g: Gender) => void;
  current?: Gender;
  /** First run only: back to the language. */
  onBack?: () => void;
  /** The first page after the language was picked: Bram waves and introduces himself, once. */
  greet?: boolean;
}) {
  const title = ui('genderTitle', lang);
  const Title = greet ? 'h1' : 'h2';
  return (
    <div className="screen onboarding sector-screen gender-screen" dir={lang?.dir}>
      {onBack && <ChromeHead lang={lang} onBack={onBack} />}
      {/* The first page after the language: Bram introduces himself in place of the logo (he is
          the logo), so the question stays where it was. */}
      {greet ? <Greeting lang={lang} place="hero" /> : (
        <div className="hero">
          <h1 className="hero-logo sector-logo"><LogoMark size={40} /><Wordmark /></h1>
        </div>
      )}
      {/* Bram's greeting takes the logo's place (the logo is the page's h1 otherwise): then the
          question is the page's one h1, so the page still has a main heading. */}
      <Title className="onboarding-title sector-title">
        <span className="sector-title-nl" lang="nl"><bdi dir="ltr">Vrouw of man?</bdi></span>
        <Bi text={title} />
      </Title>
      <QuestionSay nl="Vrouw of man?" help={title.help} lang={lang} />
      <p className="sector-hint"><Bi text={ui('genderHint', lang)} /></p>
      <GenderPicker current={current} lang={lang} onPick={onDone} />
    </div>
  );
}
