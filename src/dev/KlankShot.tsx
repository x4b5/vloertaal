import { useState } from 'react';
import { getHelpLanguage } from '../i18n';
import type { Gender, LangCode } from '../i18n/types';
import { applyTheme } from '../lib/theme';
import type { ThemeChoice } from '../lib/progress';
import { findKlank, KLANKEN, partLetters, wordSegments } from '../content/klankMond';
import { KlankCard, KlankLetters } from '../components/KlankCard';
import { KlankOverview } from '../components/KlankScreens';
import { Mouth, MouthAnimation, type MouthFrame } from '../components/Mouth';
import { MouthSide } from '../components/MouthSide';
import { ChromeBack } from '../components/ChromeBack';
import '../klank.css';

/**
 * "Hoe zeg je het?" for review (4 November 2026). In the app: Hulp › Hoe zeg je het?
 * (src/components/KlankScreens.tsx) and the first steps of a Klanken lesson. In the dev server
 * (`npx vite --host`, also on a phone in the same network):
 *
 *   /?shot=klanken&lang=pl         the overview (as under Hulp); a tap opens its card
 *   /?shot=klank&k=uu&lang=pl      one card (k = any id of src/content/klankMond.ts); the back arrow: the overview
 *   /?shot=klankwoord              for review: per sound its example word, the mouth in each of its sounds (m – uu – r)
 *                                  (&side=1 also the side view, &side=only the side view alone; &size=150 larger)
 *   /?shot=klankstrip&lang=pl      for review: per sound the mouth at rest and in its position
 *                                  (&rest=1 with the mouth at rest; &ui=1 or &k=ij: the steps of one moving sound, rest → start → end → rest)
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
    const k = findKlank(q.get('k')) ?? findKlank('uu')!;
    return (
      <div className="screen klank-screen" dir={lang?.dir === 'rtl' ? 'rtl' : undefined}>
        <div className="screen-head">
          <ChromeBack lang={lang} onBack={() => { location.search = keep('shot=klanken'); }} />
        </div>
        <KlankCard klank={k} lang={lang} deviceSound={q.get('tts') === '1'} />
      </div>
    );
  }
  if (shot === 'klankwoord') {
    // Per sound its word: the mouth in the middle of each of its sounds, the letters under it.
    return (
      <div className="screen klank-screen klank-strip-screen">
        <div className="klank-strip">
          {KLANKEN.map((k) => (
            <div className="klank-strip-row" key={k.id}>
              <KlankLetters klank={k} />
              {wordSegments(k).map((seg, i) => (
                <span key={i}>
                  {q.get('side') !== 'only' && <Mouth pose={seg.start} size={Number(q.get('size') ?? 72)} />}
                  {q.get('side') && <MouthSide pose={seg.start} size={Number(q.get('size') ?? 72)} />}
                  <span className="klank-strip-cap" lang="nl">{partLetters(seg.part)}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (shot === 'klankstrip') {
    const one = q.get('ui') === '1' ? findKlank('ui') : findKlank(q.get('k'));
    const frames: [MouthFrame, string][] = [['rest', 'rust'], ['start', 'begin'], [0.25, '25%'], [0.5, '50%'], [0.75, '75%'], ['end', 'eind'], ['rest', 'rust']];
    return (
      <div className="screen klank-screen klank-strip-screen" dir={lang?.dir === 'rtl' ? 'rtl' : undefined}>
        <div className="klank-strip">
          {one ? (
            <div className="klank-strip-row">
              <KlankLetters klank={one} />
              {frames.map(([at, cap], i) => (
                <span key={i}>
                  <MouthAnimation klank={one} at={at} size={96} />
                  <span className="klank-strip-cap">{cap}</span>
                </span>
              ))}
            </div>
          ) : (
            // A column per sound: the letters, (&rest=1: the mouth at rest,) in the sound's position, and where a moving sound ends.
            <div className="klank-grid" style={{ ['--cols' as string]: Number(q.get('cols') ?? 5) }}>
              {KLANKEN.map((k) => (
                <div className="klank-col" key={k.id}>
                  <KlankLetters klank={k} />
                  {q.get('rest') === '1' && <span><MouthAnimation klank={k} at="rest" size={84} /><span className="klank-strip-cap">rust</span></span>}
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
  // The overview, as under Hulp (a list, one tap per row).
  return <KlankOverview lang={lang} onBack={() => {}} onOpen={(id) => { location.search = keep(`shot=klank&k=${id}`); }} />;
}
