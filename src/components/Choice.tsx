import type { ReactNode } from 'react';
import type { Bilingual } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { Bi } from './Bi';
import { dutchUi } from '../lib/track';
import { HelpSay } from './HelpSay';
import { CheckIcon, ChevronIcon } from './Icons';
import { LogoMark, Wordmark } from './Logo';
import { SpeakButton } from './SpeakButton';

/**
 * One question per page, with at most three answers: the building blocks shared by the first run
 * (language guess, sector in two steps) and the Settings pages (one setting per page).
 */

export interface ChoiceOption<T extends string> {
  id: T;
  /** The help language (large) with English small; hidden English follows "Show English too". */
  text: Bilingual;
  /** The Dutch name, small under it (part of learning the work floor). */
  nl?: string;
  /** A picture or icon in the card's tile. */
  picture?: ReactNode;
  /** A speaker beside the card (not a choice of its own). */
  extra?: ReactNode;
  /** The card leads on to another page (a chevron instead of a check). */
  next?: boolean;
  danger?: boolean;
}

/** Big stacked cards, one per answer (two or three). A picked card carries a check. */
export function ChoiceCards<T extends string>({ options, current, onPick, label, className = '', dir }: {
  options: ChoiceOption<T>[];
  current?: T | null;
  onPick: (id: T) => void;
  /** The question, for screen readers. */
  label: string;
  className?: string;
  /** The cards' language direction (right to left: the picture on the right, the chevron mirrored). */
  dir?: 'ltr' | 'rtl';
}) {
  // A card that leads on to another page is a button to that page, not one of several radio
  // options: then the cards are a plain group of buttons.
  const leads = options.some((o) => o.next);
  return (
    <div
      className={`max3-cards ${className}`}
      role={leads ? 'group' : 'radiogroup'}
      aria-label={label}
      dir={dir}
      // In a radio group the arrow keys go from card to card (a pick still needs Enter or a tap:
      // picking leads on at once). Left and right follow the cards' direction.
      onKeyDown={leads ? undefined : (e) => {
        const back = e.key === 'ArrowUp' || e.key === (dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft');
        const on = e.key === 'ArrowDown' || e.key === (dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight');
        if (!back && !on) return;
        const cards = [...e.currentTarget.querySelectorAll<HTMLButtonElement>('.max3-card')];
        const at = cards.indexOf(document.activeElement as HTMLButtonElement);
        if (at < 0) return;
        e.preventDefault();
        cards[(at + (on ? 1 : cards.length - 1)) % cards.length].focus();
      }}
    >
      {options.map((o) => {
        const picked = current === o.id;
        return (
          <div key={o.id} className={`max3-card-wrap ${o.extra ? 'has-extra' : ''}`}>
            <button
              type="button"
              role={leads ? undefined : 'radio'}
              aria-checked={leads ? undefined : picked}
              className={`max3-card ${picked ? 'picked' : ''} ${o.danger ? 'danger' : ''}`}
              onClick={() => onPick(o.id)}
            >
              {o.picture && <span className="max3-pic" aria-hidden>{o.picture}</span>}
              <span className="max3-names">
                <Bi className="max3-help" text={o.text} />
                {/* The work-rules track: its Dutch text is the card's text already. */}
                {o.nl && !dutchUi(o.text.lang) && <span className="max3-nl" lang="nl">{o.nl}</span>}
              </span>
              {o.next ? <ChevronIcon size={22} className="max3-chev" /> : picked && <CheckIcon size={22} className="max3-check" />}
            </button>
            {o.extra}
          </div>
        );
      })}
    </div>
  );
}

/**
 * Under a first-run question: one Dutch speaker for the Dutch question (its recording when there
 * is one, else the phone's Dutch voice), and the question read in the help language when the
 * phone has a voice for it. Neither is one of the page's choices.
 */
export function QuestionSay({ nl, help, lang }: { nl: string; help?: string; lang?: HelpLanguage }) {
  return (
    <div className="onb-say">
      <SpeakButton text={nl} help={lang} />
      <HelpSay text={help} lang={lang} />
    </div>
  );
}

/**
 * The calm head of a first-run page: the small logo, the question (help language large, Dutch
 * small) and a hint. `say`: the first-run pages also give the question a speaker (QuestionSay).
 */
export function QuestionHead({ nl, text, hint, logo = true, say = false, lang }: {
  nl?: string;
  text: Bilingual;
  hint?: Bilingual;
  logo?: boolean;
  say?: boolean;
  lang?: HelpLanguage;
}) {
  return (
    <>
      {logo && (
        <div className="hero">
          <h1 className="hero-logo sector-logo"><LogoMark size={40} /><Wordmark /></h1>
        </div>
      )}
      <h2 className="onboarding-title sector-title">
        {/* The work-rules track: its own Dutch question, once, at the size of the main line. */}
        {dutchUi(text.lang)
          ? <Bi className="sector-title-solo" text={text} />
          : <>{nl && <span className="sector-title-nl" lang="nl"><bdi dir="ltr">{nl}</bdi></span>}<Bi text={text} /></>}
      </h2>
      {say && nl && <QuestionSay nl={nl} help={text.help} lang={lang} />}
      {hint && <p className="sector-hint"><Bi text={hint} /></p>}
    </>
  );
}
