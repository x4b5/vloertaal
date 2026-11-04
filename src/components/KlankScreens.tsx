import { ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { WordPicture } from '../pictures';
import { findKlank, KLANKEN, type Klank } from '../content/klankMond';
import { Bi } from './Bi';
import { ChevronIcon } from './Icons';
import { ChromeBack } from './ChromeBack';
import { HelpSay } from './HelpSay';
import { KlankCard, KlankLetters, MarkedWord } from './KlankCard';
import { Mouth, MouthAnimation } from './Mouth';
import { NlPair } from './NlPair';
import '../klank.css';

/**
 * "Hoe zeg je het?" under Hulp (the owner's request, 4 November 2026): every sound card
 * (src/content/klankMond.ts) on one page, one row per sound (a list, one tap per row), and one
 * card per page. Under Hulp because that tab is always one tap away in the bottom bar, whatever
 * the learner's place in the path, and already holds the help to come back to (the emergency
 * phrases, "Zo werkt het hier"); a Klanken lesson shows the cards of its own sounds at its start
 * (lib/exercises.ts klankStepsFor). Not in Werkregels (that track is for who speaks Dutch already:
 * its Hulp tab is RulesHelp).
 */
export function KlankOverview({ lang, onBack, onOpen }: { lang?: HelpLanguage; onBack: () => void; onOpen: (id: Klank['id']) => void }) {
  const rtl = lang?.dir === 'rtl';
  const hint = ui('klankHint', lang);
  return (
    <div className="screen klank-screen" dir={rtl ? 'rtl' : undefined}>
      <div className="screen-head">
        <ChromeBack lang={lang} onBack={onBack} />
        <h1><NlPair nlFirst nl="Hoe zeg je het?" nlClass="hub-nl" text={ui('klankTitle', lang)} /></h1>
      </div>
      <p className="muted klank-hint"><Bi text={hint} /><HelpSay text={hint.help} lang={lang} /></p>
      <ul className="klank-list">
        {KLANKEN.map((k) => (
          <li key={k.id}>
            <button type="button" className="klank-row" onClick={() => onOpen(k.id)}>
              {/* Heard as "ij, ei: pijn"; what is seen is hidden from the screen reader. */}
              <span className="sr-only" lang="nl">{k.also ? `${k.letters}, ${k.also}: ${k.word.nl}` : `${k.letters}: ${k.word.nl}`}</span>
              <KlankLetters klank={k} />
              <MouthAnimation klank={k} at="start" size={76} />
              <span className="klank-row-word" dir="ltr" aria-hidden>
                <WordPicture id={k.word.id} emoji={k.word.emoji} size={40} />
                <MarkedWord word={k.word.nl} klank={k} />
              </span>
              <ChevronIcon size={22} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** One sound's card on a page of its own; the back arrow goes to the overview. */
export function KlankPage({ id, lang, onBack }: { id: string; lang?: HelpLanguage; onBack: () => void }) {
  const klank = findKlank(id) ?? KLANKEN[0];
  return (
    <div className="screen klank-screen" dir={lang?.dir === 'rtl' ? 'rtl' : undefined}>
      <div className="screen-head">
        <ChromeBack lang={lang} onBack={onBack} />
        {/* The card's letters are its title; a screen reader hears where it is first. */}
        <h1 className="sr-only"><Bi text={ui('klankTitle', lang)} /> <span lang="nl">{klank.letters}</span></h1>
      </div>
      <KlankCard klank={klank} lang={lang} />
    </div>
  );
}

/** The icon of the row under Hulp: the mouth itself, open on aa. */
export function KlankHubIcon() {
  return <Mouth pose={KLANKEN.find((k) => k.id === 'aa')!.start} size={44} className="klank-hub-mouth" />;
}
