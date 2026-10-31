import { useEffect, useMemo, useRef, useState } from 'react';
import type { Unit } from '../content/types';
import type { SectorChoice } from '../content/sectors';
import { unitIcon } from '../content/unitIcons';
import { said, ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { unitIndex } from '../lib/certificate';
import { pocketPhrases } from '../lib/pocket';
import { savePocketCard } from '../lib/pocketCanvas';
import { englishHidden, wantsEnglish } from '../lib/english';
import { trackOfId } from '../lib/track';
import { WordPicture } from '../pictures';
import { Bi, HelpText } from './Bi';
import { NlPair } from './NlPair';
import { CheckIcon } from './Icons';
import { ChromeBack } from './ChromeBack';
import { PocketIcon } from './Offline';
import { SpeakButton } from './SpeakButton';

/**
 * The pocket card ("Spiekkaartje") of a unit: its five most useful phrases on one screen, each
 * with its picture, the Dutch large, the help language under it, the English small, and a play
 * button. Save as picture (for the phone's gallery) and print. Opened from the unit's row on the
 * home and "Alle onderwerpen", and after the certificate of a finished unit.
 */
export function PocketCardScreen({ unit, lang, onBack, sector, region }: { unit: Unit; lang?: HelpLanguage; onBack: () => void; /** The unit's number as on the learner's path. */ sector?: SectorChoice; region?: string }) {
  const phrases = useMemo(() => pocketPhrases(unit), [unit]);
  const rtl = lang?.dir === 'rtl';
  const card = useRef<HTMLElement>(null);
  const [busy, setBusy] = useState(false);
  const [saved, setSaved] = useState(false);
  const help = lang?.gloss[unit.id];
  // The work-rules track: rules and sentences to say, in Dutch only (no English line, no second
  // title: the unit's title is Dutch already). Each row has one speaker, hidden when nothing can
  // say it (no recording of that text and no Dutch phone voice).
  const rules = trackOfId(unit.id) === 'regels';

  // The tab title names the PDF when printed to a file.
  useEffect(() => {
    const before = document.title;
    document.title = `Vloertaal spiekkaartje - ${unit.titleNl}`;
    return () => { document.title = before; };
  }, [unit.titleNl]);

  const save = async () => {
    // aria-disabled, not disabled, while busy: a disabled button drops the keyboard focus.
    if (busy) return;
    setBusy(true);
    try {
      const pics = card.current?.querySelectorAll<HTMLElement>('.pocket-pic') ?? [];
      const how = await savePocketCard(
        {
          titleNl: unit.titleNl,
          titleEn: rules ? '' : unit.title,
          titleHelp: help,
          helpDir: lang?.dir ?? 'ltr',
          english: !rules && !englishHidden(lang?.code, wantsEnglish()),
          ...(rules ? { footer: 'Vloertaal · Werken in Nederland' } : {}),
          rows: phrases.map((p, i) => ({
            nl: p.nl,
            en: p.en,
            help: lang?.gloss[p.id],
            svg: pics[i]?.querySelector('svg'),
            emoji: pics[i]?.querySelector('svg') ? undefined : p.picture?.emoji,
          })),
        },
        `vloertaal-spiekkaartje-${unit.id.slice(2)}.png`,
      );
      setSaved(how === 'saved' || how === 'shared');
    } catch {
      setSaved(false);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="screen pocket-screen">
      <div className="screen-head" dir={rtl ? 'rtl' : undefined}>
        <ChromeBack lang={lang} onBack={onBack} />
        <h1>
          <NlPair nlFirst nl="Spiekkaartje" nlClass="pocket-screen-nl" dir="ltr" text={ui('pocketCard', lang)} />
        </h1>
      </div>

      <article className="pocket-card" ref={card} dir={rtl ? 'rtl' : undefined} aria-label={`${[...new Set(['Spiekkaartje', said(ui('pocketCard', lang))])].join(' · ')}: ${unit.titleNl}`}>
        <header className="pocket-head">
          <WordPicture className="pocket-unit-pic" id={unitIcon(unit.id)} emoji={unit.emoji} size={52} />
          <div className="pocket-titles">
            <span className="pocket-tab" lang="nl" aria-hidden>
              <span className="pocket-tab-no">{String(unitIndex(unit, sector, undefined, region) + 1).padStart(2, '0')}</span> Spiekkaartje
            </span>
            <h2 className="pocket-title" lang="nl" dir="ltr">{unit.titleNl}</h2>
            {rules ? null : help ? <HelpText className="pocket-sub" text={help} lang={lang!} /> : <span className="pocket-sub" lang="en">{unit.title}</span>}
          </div>
        </header>
        <ol className={`pocket-list ${rules ? 'pocket-list-rules' : ''}`}>
          {phrases.map((p, i) => {
            if (p.rule) {
              return (
                <li key={p.id} className={`pocket-row pocket-row-${p.rule}`}>
                  <span className="pocket-pic" aria-hidden>
                    {p.picture ? <WordPicture className="pocket-rule-pic" id={p.picture.id} emoji={p.picture.emoji} size={40} /> : <span className="pocket-no">{i + 1}</span>}
                  </span>
                  <span className="pocket-text">
                    <span className="pocket-nl" lang="nl" dir="ltr">{p.nl}</span>
                  </span>
                  <SpeakButton text={p.nl} long needsDevice help={lang} />
                </li>
              );
            }
            const helpLine = lang?.gloss[p.id];
            return (
              <li key={p.id} className="pocket-row">
                <span className="pocket-pic" aria-hidden>
                  {p.picture ? <WordPicture id={p.picture.id} emoji={p.picture.emoji} size={56} /> : <span className="pocket-no">{i + 1}</span>}
                </span>
                <span className="pocket-text">
                  <span className="pocket-nl" lang="nl" dir="ltr">{p.nl}</span>
                  {helpLine && <HelpText className="pocket-help" text={helpLine} lang={lang!} />}
                  <span className={`pocket-en ${helpLine ? 'en-support' : ''}`} lang="en" dir="ltr">{p.en}</span>
                </span>
                <SpeakButton text={p.nl} help={lang} />
              </li>
            );
          })}
        </ol>
      </article>

      <div className="cert-actions pocket-actions">
        <button type="button" className="btn btn-primary cert-btn" onClick={save} aria-disabled={busy || undefined}>
          <PocketIcon size={26} />
          <span className="cert-btn-text">
            <NlPair nlFirst nl="Bewaar als plaatje" className="cert-btn-gloss" text={ui('pocketSave', lang)} />
          </span>
        </button>
        <button type="button" className="btn btn-dark cert-btn" onClick={() => window.print()}>
          <PrintGlyph />
          <span className="cert-btn-text">
            <NlPair nlFirst nl="Print" className="cert-btn-gloss" text={ui('certPrint', lang)} />
          </span>
        </button>
      </div>
      {saved && (
        <p className="keep-ok cert-saved" role="status"><CheckIcon size={20} /><Bi text={ui('certSaved', lang)} /></p>
      )}
    </div>
  );
}

function PrintGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden focusable="false">
      <path d="M7 9V3.5h10V9" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <rect x="3" y="9" width="18" height="8.5" rx="2" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path d="M7 14.5h10v6H7z" fill="currentColor" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
    </svg>
  );
}
