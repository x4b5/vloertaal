import { gloss, ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { learnerVoice } from '../lib/voices';
import type { WorkTryLine } from '../lib/workTry';
import { BubblesIcon } from './Icons';
import { NlPair } from './NlPair';
import { SpeakButton } from './SpeakButton';
import '../melding.css';

/**
 * "Gelukt?" (src/lib/workTry.ts geluktDue): on a later day, a calm card at the top of the home
 * about the sentence of "Probeer het vandaag op je werk". Built like "Er is iets veranderd"
 * (NoticeCard): the question, the sentence with what it means and a speaker, then two answers,
 * [Nog niet] and [Ja, gelukt]. Either answer closes it for good; nothing more follows.
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
