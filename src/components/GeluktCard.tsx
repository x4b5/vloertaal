import { fillCount, gloss, said, ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { certDate } from '../lib/certificate';
import type { GeluktEntry } from '../lib/progress';
import { dutchUi } from '../lib/track';
import { learnerVoice } from '../lib/voices';
import type { WorkTryLine } from '../lib/workTry';
import { Bi } from './Bi';
import { Character } from './Characters';
import { ChromeBack } from './ChromeBack';
import { BubblesIcon, CheckIcon, ChevronIcon } from './Icons';
import { NlPair } from './NlPair';
import { SpeakButton } from './SpeakButton';
import { useTapGuard } from './useFreshScreen';
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

/** Bram's line after "Ja, gelukt", in Dutch: the number in the text, "zin" or "zinnen" (the first: its own line). */
export function geluktDoneNl(n: number): string {
  return n === 1 ? 'Goed gedaan! Je eerste zin op het werk is gelukt.' : `Goed gedaan! Al ${n} zinnen gelukt op het werk.`;
}

/**
 * Right after "Ja, gelukt" (the owner's request, 5 November 2026): a short, warm moment on the
 * same page. Bram with a thumb up says how many sentences were said at work so far ("Goed gedaan!
 * Al 4 zinnen gelukt op het werk.", Dutch and the help language), the sentence just added, and
 * where the collection is (Settings › Taal en ik › Gelukt op het werk). No confetti, no stamp, no
 * sound: one calm nod. One thing to tap, [Verder] (the back arrow leads home as well).
 */
export function GeluktDonePage({ n, nl, lang, onDone }: { n: number; nl: string; lang?: HelpLanguage; onDone: () => void }) {
  const rtl = lang?.dir === 'rtl';
  // A second tap on "Ja, gelukt" must not go on at once (as after a lesson: useTapGuard).
  const ready = useTapGuard();
  return (
    <div className="screen gelukt-page gelukt-done-page" dir={rtl ? 'rtl' : undefined}>
      <div className="screen-head max3-head">
        <ChromeBack lang={lang} onBack={onDone} />
      </div>
      <section className="notice-card gelukt-done" aria-labelledby="gelukt-done-title">
        <div className="gelukt-done-hero">
          <span className="gelukt-done-bram" aria-hidden><Character who="bram" mood="cheer" size={104} /></span>
          <h1 id="gelukt-done-title" className="bram-say bram-say-start gelukt-done-say" dir={rtl ? 'rtl' : undefined}>
            <NlPair nlFirst nl={geluktDoneNl(n)} nlClass="gelukt-done-nl" className="gelukt-done-help" text={fillCount('geluktDoneN', n, lang)} />
          </h1>
        </div>
        <p className="gelukt-done-line" lang="nl" dir="ltr">
          <span className="gelukt-done-check" aria-hidden><CheckIcon size={18} /></span>
          <span className="gelukt-done-quote">{nl}</span>
        </p>
        <p className="gelukt-done-where">
          <NlPair nlFirst nl="Je vindt ze bij Instellingen." nlClass="gelukt-done-where-nl" text={ui('geluktWhere', lang)} />
        </p>
        <button type="button" className="btn btn-primary gelukt-done-go" onClick={() => { if (ready.current) onDone(); }}>
          <NlPair nlFirst nl="Verder" nlClass="notice-btn-nl" text={ui('continue', lang)} />
        </button>
      </section>
    </div>
  );
}

/**
 * Settings › Taal en ik › "Gelukt op het werk" (the owner's request, 5 November 2026): every
 * sentence the learner said at work ("Ja, gelukt", src/lib/workTry.ts addGelukt), the newest on
 * top: the Dutch, what it means (none in Werkregels: all Dutch), the day, and a speaker in the
 * learner's own voice. Nothing to tap but the speakers: a list to look back on, not a task.
 * The row to it is only there with at least one sentence (src/lib/settingsMenu.ts).
 */
export function GeluktList({ entries, lang }: { entries: readonly GeluktEntry[]; lang?: HelpLanguage }) {
  const dutch = dutchUi(lang);
  return (
    <>
      <p className="max3-hint gelukt-list-hint">
        <NlPair nlFirst nl="Deze zinnen heb je op je werk gezegd." nlClass="gelukt-list-hint-nl" text={ui('geluktListHint', lang)} />
      </p>
      <ul className="gelukt-list">
        {[...entries].reverse().map((e) => {
          const meaning = !dutch && e.en ? gloss(e.id, e.en, lang) : undefined;
          return (
            <li key={e.id} className="gelukt-row">
              <span className="gelukt-row-text">
                <span className="gelukt-row-nl" lang="nl" dir="ltr">{e.nl}</span>
                {meaning && <Bi className="gelukt-row-help" text={meaning} />}
                <span className="gelukt-row-date" lang="nl"><bdi dir="ltr">{certDate(e.day)}</bdi></span>
              </span>
              <SpeakButton text={e.nl} glyph help={lang} voice={learnerVoice(lang?.gender)} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
