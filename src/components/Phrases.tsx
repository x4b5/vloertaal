import { useEffect, useRef } from 'react';
import { findItem, phrasebookIds } from '../content/curriculum';
import { gloss, ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { speechAvailable } from '../lib/audio';
import { breakable } from '../lib/dutch';
import { Bi } from './Bi';
import { AlertIcon, ChevronIcon, CloseIcon } from './Icons';
import { SpeakButton } from './SpeakButton';

/** The emergency phrases: Dutch with a speaker button, the meaning in the help language. */
export function PhraseList({ lang }: { lang?: HelpLanguage }) {
  return (
    <>
      {!speechAvailable() && <p className="warn">{ui('audioUnavailable').en}</p>}
      <ul className="phrases">
        {phrasebookIds.map((id) => {
          const item = findItem(id);
          if (!item) return null;
          return (
            <li key={id} className="phrase">
              <SpeakButton text={item.nl} />
              <div className="phrase-text">
                <span className="phrase-nl" lang="nl">{breakable(item.nl)}</span>
                <Bi text={gloss(id, item.en, lang)} />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

/**
 * The emergency phrases as a bottom sheet over the lesson (the ⚠ in the lesson header). The
 * lesson stays as it was underneath; closing (the button, Escape, the backdrop or the phone's
 * Back) returns to it and puts focus back on the ⚠ button.
 */
export function PhraseSheet({ lang, onClose }: { lang?: HelpLanguage; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const back = document.activeElement as HTMLElement | null;
    closeRef.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      back?.focus({ preventScroll: true });
    };
  }, [onClose]);
  return (
    <div className="sheet-backdrop" onClick={onClose}>
      <div className="sheet phrase-sheet" role="dialog" aria-modal="true" aria-labelledby="phrase-sheet-title" onClick={(e) => e.stopPropagation()}>
        <span className="sheet-hazard" aria-hidden />
        <div className="phrase-sheet-head">
          <span className="phrase-sheet-icon" aria-hidden><AlertIcon size={26} /></span>
          <h2 id="phrase-sheet-title" className="sheet-title">
            <span className="phrase-sheet-nl" lang="nl">Noodzinnen</span>
            <Bi text={ui('phrasebook', lang)} />
          </h2>
          <button type="button" className="icon-btn phrase-sheet-x" onClick={onClose} aria-label={ui('backToLesson').en} ref={closeRef}>
            <CloseIcon size={26} />
          </button>
        </div>
        <div className="phrase-sheet-list">
          <PhraseList lang={lang} />
        </div>
        <button type="button" className="btn btn-go btn-primary phrase-sheet-back" onClick={onClose}>
          <Bi className="btn-label" text={ui('backToLesson', lang)} />
          <span className="btn-block" aria-hidden><ChevronIcon size={26} /></span>
        </button>
      </div>
    </div>
  );
}
