import { useState } from 'react';
import { ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { MAX_REASONS, REASONS, type ReasonId } from '../lib/reason';
import { NlPair } from './NlPair';
import '../melding.css';

/**
 * "Waarom leer jij Nederlands?" (src/lib/reason.ts): a calm card in the block's place on the home,
 * once, built like "Er is iets veranderd" (NoticeCard). Six pictures to tap (one or two), then
 * [Klaar]; [Later] closes it without a choice. Either way it does not come back.
 */
export function ReasonCard({ lang, onDone }: { lang?: HelpLanguage; onDone: (ids: ReasonId[]) => void }) {
  const rtl = lang?.dir === 'rtl';
  const [picked, setPicked] = useState<ReasonId[]>([]);

  const toggle = (id: ReasonId) =>
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : p.length < MAX_REASONS ? [...p, id] : [p[1], id]));

  return (
    <section className="notice-card reason-card" aria-labelledby="reason-title" dir={rtl ? 'rtl' : undefined}>
      <div className="notice-head">
        <span className="notice-icon" aria-hidden>💬</span>
        <h2 id="reason-title" className="notice-title">
          <NlPair nlFirst nl="Waarom leer jij Nederlands?" nlClass="notice-nl" className="notice-help" text={ui('reasonTitle', lang)} />
        </h2>
      </div>
      <p className="notice-line">
        <NlPair nlFirst nl="Kies er één of twee." nlClass="notice-text-nl" className="notice-text-help" text={ui('reasonHint', lang)} />
      </p>
      <div className="reason-grid">
        {REASONS.map((r) => (
          <button key={r.id} type="button" className="btn reason-pick" data-reason={r.id} aria-pressed={picked.includes(r.id)} onClick={() => toggle(r.id)}>
            <span className="reason-emoji" aria-hidden>{r.emoji}</span>
            <NlPair nlFirst nl={r.nl} nlClass="notice-btn-nl" text={ui(r.key, lang)} />
          </button>
        ))}
      </div>
      <div className="notice-actions">
        <button type="button" className="btn btn-primary notice-ok reason-done" disabled={!picked.length} onClick={() => onDone(picked)}>
          <NlPair nlFirst nl="Klaar" nlClass="notice-btn-nl" text={ui('reasonDone', lang)} />
        </button>
        <button type="button" className="btn notice-more reason-later" onClick={() => onDone([])}>
          <NlPair nlFirst nl="Later" nlClass="notice-btn-nl" text={ui('certLater', lang)} />
        </button>
      </div>
    </section>
  );
}
