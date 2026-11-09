import { gloss, ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { countShare } from '../lib/count';
import { breakable } from '../lib/dutch';
import { Bi } from './Bi';
import { ChromeBack } from './ChromeBack';
import { HelpSay } from './HelpSay';
import { NlPair } from './NlPair';
import { SpeakButton } from './SpeakButton';

/**
 * "Voor je collega" (the Hulp tab): a short card in Dutch for a colleague who speaks Dutch and
 * wants to help the learner practise. The colleague decides whether there is practice at all:
 * routine work leaves little talk, and the work community's support makes the difference
 * (Strömmer); Dutch colleagues switch to English fast; self-study without people around empties
 * out (Nielson 2011). reports/Leerwetenschap en tweede taal.md, voorstel 6 and W5.
 *
 * Above the card, for the learner (help language): what it is, and two sentences they know from
 * the lessons ("Wil je Nederlands met mij praten?", "Nee, liever Nederlands. Ik wil oefenen.").
 * The card itself is Dutch only: it is for the colleague. "Stuur naar je collega" shares it as
 * text where the phone can (navigator.share); without that, the learner shows the screen.
 */
export const COLLEAGUE_CARD = {
  title: 'Ik leer Nederlands. Help je mee?',
  lines: [
    'Praat rustig, in korte zinnen.',
    'Eén ding tegelijk. Doe het voor of wijs het aan.',
    'Vraag niet „Begrijp je het?”, maar „Laat eens zien hoe je het doet.”',
    'Blijf Nederlands praten, ook als het langzaam gaat.',
    'Verbeter me gerust: zeg het goede woord.',
  ],
  thanks: 'Dank je wel!',
} as const;

/** The learner's own sentences on the page (from the lessons, with their translations by id). */
export const COLLEAGUE_PHRASES = [
  { id: 's.keeplearning.3', nl: 'Wil je Nederlands met mij praten?', en: 'Will you speak Dutch with me?' },
  { id: 'c.keeplearning.a', nl: 'Nee, liever Nederlands. Ik wil oefenen.', en: 'No, Dutch please. I want to practise.' },
] as const;

/** The link in the shared card: "via=collega" counts an arrival (src/lib/count.ts countArrival). */
export const COLLEAGUE_LINK = 'https://vloertaal.nl/?via=collega';

/** The card as one text, to share. */
export function colleagueCardText(): string {
  return [COLLEAGUE_CARD.title, '', ...COLLEAGUE_CARD.lines.map((l) => `• ${l}`), '', `${COLLEAGUE_CARD.thanks} ${COLLEAGUE_LINK}`].join('\n');
}

export function ColleagueCard({ lang, onBack }: { lang?: HelpLanguage; onBack: () => void }) {
  const canShare = typeof navigator !== 'undefined' && typeof navigator.share === 'function';
  const share = () => {
    countShare('collegakaart');
    navigator.share({ title: 'Vloertaal', text: colleagueCardText() }).catch(() => {
      // Cancelled, or not allowed: the card is on the screen to show.
    });
  };
  return (
    <div className="screen colleague-page">
      <div className="screen-head">
        <ChromeBack lang={lang} onBack={onBack} />
        <h1><NlPair nlFirst nl="Voor je collega" nlClass="hub-nl" text={ui('colleagueCard', lang)} /></h1>
      </div>
      <p className="muted"><Bi text={ui('colleagueCardHint', lang)} /><HelpSay text={ui('colleagueCardHint', lang).help} lang={lang} /></p>
      <ul className="phrases colleague-phrases">
        {COLLEAGUE_PHRASES.map((p) => (
          <li key={p.id} className="phrase">
            <div className="phrase-text">
              <NlPair content nlFirst nl={breakable(p.nl)} nlClass="phrase-nl" text={gloss(p.id, p.en, lang)} />
            </div>
            <SpeakButton text={p.nl} help={lang} />
          </li>
        ))}
      </ul>
      <section className="colleague-card" lang="nl" dir="ltr" aria-labelledby="colleague-card-title">
        <h2 id="colleague-card-title" className="colleague-card-title">{COLLEAGUE_CARD.title}</h2>
        <ul className="colleague-card-lines">
          {COLLEAGUE_CARD.lines.map((l) => <li key={l}>{l}</li>)}
        </ul>
        <p className="colleague-card-thanks">{COLLEAGUE_CARD.thanks} <span className="colleague-card-site">vloertaal.nl</span></p>
      </section>
      {canShare && (
        <button type="button" className="btn btn-dark colleague-share" onClick={share}>
          <NlPair nlFirst nl="Stuur naar je collega" nlClass="btn-label-nl" text={ui('colleagueShare', lang)} />
        </button>
      )}
    </div>
  );
}
