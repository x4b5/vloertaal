import type { ReactNode } from 'react';
import type { Bilingual } from '../i18n';
import { Bi } from './Bi';
import { CheckIcon, ChevronIcon } from './Icons';
import { LogoMark, Wordmark } from './Logo';

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
export function ChoiceCards<T extends string>({ options, current, onPick, label, className = '' }: {
  options: ChoiceOption<T>[];
  current?: T | null;
  onPick: (id: T) => void;
  /** The question, for screen readers. */
  label: string;
  className?: string;
}) {
  return (
    <div className={`max3-cards ${className}`} role="radiogroup" aria-label={label}>
      {options.map((o) => {
        const picked = current === o.id;
        return (
          <div key={o.id} className={`max3-card-wrap ${o.extra ? 'has-extra' : ''}`}>
            <button
              type="button"
              role="radio"
              aria-checked={picked}
              className={`max3-card ${picked ? 'picked' : ''} ${o.danger ? 'danger' : ''}`}
              onClick={() => onPick(o.id)}
            >
              {o.picture && <span className="max3-pic" aria-hidden>{o.picture}</span>}
              <span className="max3-names">
                <Bi className="max3-help" text={o.text} />
                {o.nl && <span className="max3-nl" lang="nl">{o.nl}</span>}
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

/** The calm head of a first-run page: the small logo, the question (help language large, Dutch small) and a hint. */
export function QuestionHead({ nl, text, hint, logo = true }: { nl?: string; text: Bilingual; hint?: Bilingual; logo?: boolean }) {
  return (
    <>
      {logo && (
        <div className="hero">
          <h1 className="hero-logo sector-logo"><LogoMark size={40} /><Wordmark /></h1>
        </div>
      )}
      <h2 className="onboarding-title sector-title">
        {nl && <span className="sector-title-nl" lang="nl">{nl}</span>}
        <Bi text={text} />
      </h2>
      {hint && <p className="sector-hint"><Bi text={hint} /></p>}
    </>
  );
}
