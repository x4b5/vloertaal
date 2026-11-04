import { useState } from 'react';
import { getHelpLanguage } from '../i18n';
import type { Gender, LangCode } from '../i18n/types';
import { applyTheme } from '../lib/theme';
import type { ThemeChoice } from '../lib/progress';
import { findKlank, KLANKEN } from '../content/klankMond';
import { KlankCard, MarkedWord } from '../components/KlankCard';
import { MouthAnimation, type MouthFrame } from '../components/Mouth';
import { ChromeBack } from '../components/ChromeBack';
import { WordPicture } from '../pictures';
import '../klank.css';

/**
 * The pilot "Hoe zeg je het?" for the owner to look at (not in the path yet; 4 November 2026).
 * In the dev server (`npx vite --host`, also on a phone in the same network):
 *
 *   /?shot=klanken&lang=pl         the six sounds, one row each; a tap opens its card
 *   /?shot=klank&k=uu&lang=pl      one card (k = aa, ee, oe, uu, eu, ui); the back arrow: the overview
 *   /?shot=klankstrip&lang=pl      for review: per sound the mouth at rest and in its position
 *                                  (&ui=1: the steps of ui, rest → start → end → rest)
 *
 * &theme=dark|werkjas|haven a colour (else the phone's light or dark), &calm=on the calm screen
 * (no motion), &tts=1 the phone's own voice says the sound's letters ("eu", "oe"), to hear it.
 */
export function KlankShot({ shot, lang: code, gender }: { shot: string; lang: string | null; gender?: Gender }) {
  const q = new URLSearchParams(location.search);
  useState(() => {
    const theme = q.get('theme') as ThemeChoice | null;
    if (theme && ['light', 'haven', 'werkjas', 'dark'].includes(theme)) applyTheme(theme);
    return null;
  });
  const lang = getHelpLanguage(code as LangCode, gender);
  const keep = (extra: string) => {
    const p = new URLSearchParams(location.search);
    p.delete('k');
    const rest = [...p].filter(([k]) => k !== 'shot').map(([k, v]) => `&${k}=${encodeURIComponent(v)}`).join('');
    return `?${extra}${rest}`;
  };
  if (shot === 'klank') {
    const k = findKlank(q.get('k')) ?? KLANKEN[3];
    return (
      <div className="screen klank-screen" dir={lang?.dir === 'rtl' ? 'rtl' : undefined}>
        <div className="screen-head">
          <ChromeBack lang={lang} onBack={() => { location.search = keep('shot=klanken'); }} />
        </div>
        <KlankCard klank={k} lang={lang} deviceSound={q.get('tts') === '1'} />
      </div>
    );
  }
  if (shot === 'klankstrip') {
    const steps = q.get('ui') === '1';
    const ui = findKlank('ui')!;
    const frames: [MouthFrame, string][] = [['rest', 'rust'], ['start', 'begin'], [0.25, '25%'], [0.5, '50%'], [0.75, '75%'], ['end', 'eind'], ['rest', 'rust']];
    return (
      <div className="screen klank-screen" dir={lang?.dir === 'rtl' ? 'rtl' : undefined}>
        <div className="klank-strip">
          {steps ? (
            <div className="klank-strip-row">
              <span className="klank-letters" lang="nl">ui</span>
              {frames.map(([at, cap], i) => (
                <span key={i}>
                  <MouthAnimation klank={ui} at={at} size={96} />
                  <span className="klank-strip-cap">{cap}</span>
                </span>
              ))}
            </div>
          ) : (
            // Six columns: the letters, the mouth at rest, in the sound's position, and where ee, eu and ui end.
            <div className="klank-grid">
              {KLANKEN.map((k) => (
                <div className="klank-col" key={k.id}>
                  <span className="klank-letters" lang="nl">{k.letters}</span>
                  <span><MouthAnimation klank={k} at="rest" size={84} /><span className="klank-strip-cap">rust</span></span>
                  <span><MouthAnimation klank={k} at="start" size={84} /><span className="klank-strip-cap">{k.end ? 'begin' : 'stand'}</span></span>
                  {k.end ? <span><MouthAnimation klank={k} at="end" size={84} /><span className="klank-strip-cap">eind</span></span> : <span className="klank-strip-none" />}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
  // The overview: one row per sound (a list, one tap per row).
  return (
    <div className="screen klank-screen" dir={lang?.dir === 'rtl' ? 'rtl' : undefined}>
      <div className="screen-head">
        <h1 lang="nl">Hoe zeg je het?</h1>
      </div>
      <ul className="klank-list">
        {KLANKEN.map((k) => (
          <li key={k.id}>
            <a className="klank-row" href={keep(`shot=klank&k=${k.id}`)}>
              <span className="klank-letters" lang="nl">{k.letters}</span>
              <MouthAnimation klank={k} at="start" size={84} />
              <span className="klank-row-word">
                <WordPicture id={k.word.id} emoji={k.word.emoji} size={40} />
                <MarkedWord word={k.word.nl} letters={k.letters} />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
