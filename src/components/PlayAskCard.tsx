import { ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { NlPair } from './NlPair';
import { PlayIcon } from './Icons';
import '../melding.css';

/**
 * "Hoe wil je oefenen?" (src/lib/play.ts): once on the home after the first lesson, in the block's
 * place, built like "Waarom leer jij Nederlands?" (ReasonCard). Two buttons: Rustig (as it is now)
 * and Met spel (the game mode on). Either way it does not come back; Settings › Lessen changes it.
 */
export function PlayAskCard({ lang, onPick }: { lang?: HelpLanguage; onPick: (on: boolean) => void }) {
  const rtl = lang?.dir === 'rtl';
  return (
    <section className="notice-card play-ask" aria-labelledby="play-ask-title" dir={rtl ? 'rtl' : undefined}>
      <div className="notice-head">
        <span className="notice-icon" aria-hidden><PlayIcon size={26} /></span>
        <h2 id="play-ask-title" className="notice-title">
          <NlPair nlFirst nl="Hoe wil je oefenen?" nlClass="notice-nl" className="notice-help" text={ui('playAskTitle', lang)} />
        </h2>
      </div>
      <p className="notice-line">
        <NlPair nlFirst nl="Met spel: punten, geluid en beweging. Je kunt het veranderen bij Instellingen." nlClass="notice-text-nl" className="notice-text-help" text={ui('playAskHint', lang)} />
      </p>
      <div className="notice-actions">
        <button type="button" className="btn btn-primary notice-ok play-ask-fun" onClick={() => onPick(true)}>
          <NlPair nlFirst nl="Met spel" nlClass="notice-btn-nl" text={ui('playAskFun', lang)} />
        </button>
        <button type="button" className="btn notice-more play-ask-calm" onClick={() => onPick(false)}>
          <NlPair nlFirst nl="Rustig" nlClass="notice-btn-nl" text={ui('playAskCalm', lang)} />
        </button>
      </div>
    </section>
  );
}
