import { gloss, said, ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { dutchUi } from '../lib/track';
import { learnerVoice } from '../lib/voices';
import type { WorkTryLine } from '../lib/workTry';
import { ChromeBack } from './ChromeBack';
import { BubblesIcon, ChevronIcon } from './Icons';
import { NlPair } from './NlPair';
import { SpeakButton } from './SpeakButton';
import '../melding.css';

/**
 * "Gelukt?" (src/lib/workTry.ts geluktDue): on a later day, a calm card about the sentence of
 * "Probeer het vandaag op je werk". Built like "Er is iets veranderd" (NoticeCard): the question,
 * the sentence with what it means and a speaker, then two answers, [Nog niet] and [Ja, gelukt].
 * Either answer closes it for good; nothing more follows.
 *
 * Since 4 November 2026 (verbeterplan fase 2) the card is on a page of its own (GeluktPage),
 * opened from a small line under the next lesson on the home (GeluktLine): it no longer takes
 * the lesson's place.
 */
export function GeluktCard({ line, lang, onAnswer }: { line: WorkTryLine; lang?: HelpLanguage; onAnswer: (worked: boolean) => void }) {
  const rtl = lang?.dir === 'rtl';
  return (
    <section className="notice-card gelukt-card" aria-labelledby="gelukt-title" dir={rtl ? 'rtl' : undefined}>
      <div className="notice-head">
        <span className="notice-icon" aria-hidden><BubblesIcon size={28} /></span>
        <h2 id="gelukt-title" className="notice-title">
          <NlPair nlFirst nl="Heb je dit op je werk gezegd?" nlClass="notice-nl" className="notice-help" text={ui('geluktAsk', lang)} />
        </h2>
      </div>
      <div className="notice-text">
        <p className="notice-line">
          <NlPair nlFirst content dir="ltr" nl={line.nl} nlClass="notice-text-nl" className="notice-text-help" text={gloss(line.id, line.en, lang)} />
        </p>
        <span className="notice-say">
          <SpeakButton text={line.nl} glyph help={lang} voice={learnerVoice(lang?.gender)} />
        </span>
      </div>
      <div className="notice-actions">
        <button type="button" className="btn notice-more" onClick={() => onAnswer(false)}>
          <NlPair nlFirst nl="Nog niet" nlClass="notice-btn-nl" text={ui('geluktNotYet', lang)} />
        </button>
        <button type="button" className="btn btn-primary notice-ok" onClick={() => onAnswer(true)}>
          <NlPair nlFirst nl="Ja, gelukt" nlClass="notice-btn-nl" text={ui('geluktYes', lang)} />
        </button>
      </div>
    </section>
  );
}

/**
 * The home's line for "Gelukt?": the question and the Dutch sentence, one tap to GeluktPage. Shown
 * under the next lesson only while the home has room (src/components/Route.tsx `lines`); else it
 * waits for a home with room (geluktDue keeps it until it is answered).
 */
export function GeluktLine({ line, lang, onOpen }: { line: WorkTryLine; lang?: HelpLanguage; onOpen: () => void }) {
  const rtl = lang?.dir === 'rtl';
  const ask = ui('geluktAsk', lang);
  return (
    <button
      type="button"
      className="home-line gelukt-line"
      onClick={onOpen}
      dir={rtl ? 'rtl' : undefined}
      aria-label={`${dutchUi(lang) ? '' : 'Heb je dit op je werk gezegd? · '}${said(ask)} · ${line.nl}`}
    >
      <span className="home-line-icon" aria-hidden><BubblesIcon size={22} /></span>
      <span className="home-line-text" aria-hidden>
        <NlPair nlFirst nl="Heb je dit op je werk gezegd?" nlClass="home-line-nl" className="home-line-help" text={ask} />
        <span className="home-line-quote" lang="nl" dir="ltr">{line.nl}</span>
      </span>
      <ChevronIcon size={20} className="home-line-go" />
    </button>
  );
}

/** "Gelukt?" on its own page: the card under a back arrow (chrome); Back leaves the question open. */
export function GeluktPage({ line, lang, onBack, onAnswer }: { line: WorkTryLine; lang?: HelpLanguage; onBack: () => void; onAnswer: (worked: boolean) => void }) {
  return (
    <div className="screen gelukt-page" dir={lang?.dir === 'rtl' ? 'rtl' : undefined}>
      <div className="screen-head max3-head">
        <ChromeBack lang={lang} onBack={onBack} />
      </div>
      <GeluktCard line={line} lang={lang} onAnswer={onAnswer} />
    </div>
  );
}
