import { findItem, phrasebookIds, units } from '../content/curriculum';
import { gloss, helpLanguages, ui } from '../i18n';
import type { HelpLanguage, LangCode } from '../i18n/types';
import { useEffect, useState } from 'react';
import { dutchVoices, setPreferredVoice, speak, speechAvailable } from '../lib/audio';
import { isUnlocked } from '../lib/exercises';
import type { Progress, ThemeChoice } from '../lib/progress';
import { Bi } from './Bi';
import {
  AlertIcon,
  AutoThemeIcon,
  BackIcon,
  CheckIcon,
  ChevronIcon,
  CrownIcon,
  FlameIcon,
  GlobeIcon,
  LockIcon,
  MascotIcon,
  MoonIcon,
  PlayStarIcon,
  StarIcon,
  SpeakerIcon,
  SunIcon,
  TargetIcon,
} from './Icons';
import { SpeakButton } from './SpeakButton';

export function LanguagePicker({ current, onPick }: {
  /** undefined = nothing chosen yet (onboarding). */
  current?: LangCode | null;
  onPick: (code: LangCode | null) => void;
}) {
  return (
    <div className="lang-grid">
      {helpLanguages.map((l) => (
        <button
          key={l.code}
          type="button"
          className={`lang-btn ${current === l.code ? 'picked' : ''}`}
          onClick={() => onPick(l.code)}
        >
          <span className="lang-native" lang={l.code} dir={l.dir}>{l.nativeName}</span>
          <span className="lang-en">{l.name}</span>
          {!l.reviewed && <span className="lang-beta">beta</span>}
        </button>
      ))}
      <button
        type="button"
        className={`lang-btn ${current === null ? 'picked' : ''}`}
        onClick={() => onPick(null)}
      >
        <span className="lang-native">English</span>
        <span className="lang-en">{ui('englishOnly').en}</span>
      </button>
    </div>
  );
}

export function Onboarding({ onDone }: { onDone: (code: LangCode | null) => void }) {
  return (
    <div className="screen onboarding">
      <div className="hero">
        <div className="mascot"><MascotIcon size={112} /></div>
        <h1>Vloertaal</h1>
        <p className="tagline">{ui('appTagline').en}</p>
        <p className="tagline-nl" lang="nl">Nederlands voor op de werkvloer</p>
      </div>
      <h2>{ui('chooseLanguage').en}</h2>
      <p className="muted">{ui('chooseLanguageHint').en}</p>
      <LanguagePicker onPick={onDone} />
    </div>
  );
}

export function TopBar({ streak, xp, lang, onSettings }: {
  streak: number;
  xp: number;
  lang?: HelpLanguage;
  onSettings: () => void;
}) {
  return (
    <header className="topbar">
      <span className="brand"><MascotIcon size={30} /> Vloertaal</span>
      <span className="stat" title={ui('dayStreak').en}><FlameIcon /> {streak}</span>
      <span className="stat" title="XP"><StarIcon /> {xp}</span>
      <button type="button" className="stat stat-btn" onClick={onSettings} aria-label={ui('settings').en}>
        <GlobeIcon size={20} /> {lang ? lang.nativeName : 'EN'}
      </button>
    </header>
  );
}

export function Path({ progress, lang, onStart, onPhrasebook }: {
  progress: Progress;
  lang?: HelpLanguage;
  onStart: (lessonId: string, review: boolean) => void;
  onPhrasebook: () => void;
}) {
  let n = 0;
  return (
    <div className="path">
      <button type="button" className="phrase-banner" onClick={onPhrasebook}>
        <AlertIcon size={30} />
        <Bi text={ui('phrasebook', lang)} />
        <ChevronIcon />
      </button>

      {units.map((unit, u) => (
        <section key={unit.id} className="unit" style={{ '--unit': unit.color } as React.CSSProperties}>
          <div className="unit-head">
            <div>
              <div className="unit-num">Unit {u + 1} · <span lang="nl">{unit.titleNl}</span></div>
              <h2><Bi text={gloss(unit.id, unit.title, lang)} /></h2>
            </div>
            <span className="unit-emoji" aria-hidden>{unit.emoji}</span>
          </div>
          <ol className="nodes">
            {unit.lessons.map((lesson) => {
              const record = progress.completed[lesson.id];
              const open = isUnlocked(lesson.id, progress.completed);
              const offset = [0, 1, 0, -1][n++ % 4];
              return (
                <li key={lesson.id} className="node-row" style={{ '--offset': offset } as React.CSSProperties}>
                  <button
                    type="button"
                    className={`node ${record ? 'node-done' : open ? 'node-open' : 'node-locked'}`}
                    disabled={!open}
                    onClick={() => onStart(lesson.id, Boolean(record))}
                    aria-label={`${lesson.title}${open ? '' : ` (${ui('locked').en})`}`}
                  >
                    {record ? (record.best === 1 ? <CrownIcon size={34} /> : <CheckIcon size={36} />) : open ? <PlayStarIcon size={36} /> : <LockIcon size={28} />}
                  </button>
                  <div className="node-label">
                    <Bi text={gloss(lesson.id, lesson.title, lang)} />
                    {open && (
                      <span className="node-cta">{record ? ui('practice').en : ui('start').en}</span>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </div>
  );
}

export function Phrasebook({ lang, onBack }: { lang?: HelpLanguage; onBack: () => void }) {
  return (
    <div className="screen">
      <div className="screen-head">
        <button type="button" className="icon-btn" onClick={onBack} aria-label="Back"><BackIcon size={28} /></button>
        <h1><Bi text={ui('phrasebook', lang)} /></h1>
      </div>
      <p className="muted"><Bi text={ui('phrasebookHint', lang)} /></p>
      {!speechAvailable() && <p className="warn">{ui('audioUnavailable').en}</p>}
      <ul className="phrases">
        {phrasebookIds.map((id) => {
          const item = findItem(id);
          if (!item) return null;
          return (
            <li key={id} className="phrase">
              <SpeakButton text={item.nl} />
              <div className="phrase-text">
                <span className="phrase-nl" lang="nl">{item.nl}</span>
                <Bi text={gloss(id, item.en, lang)} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const THEMES: { value: ThemeChoice; key: 'themeAuto' | 'themeLight' | 'themeDark'; Icon: typeof SunIcon }[] = [
  { value: 'auto', key: 'themeAuto', Icon: AutoThemeIcon },
  { value: 'light', key: 'themeLight', Icon: SunIcon },
  { value: 'dark', key: 'themeDark', Icon: MoonIcon },
];

const SAMPLE = 'Goedemorgen! Draag altijd je helm.';

/** Dutch voices load asynchronously in most browsers. */
function useDutchVoices() {
  const [voices, setVoices] = useState(dutchVoices);
  useEffect(() => {
    if (!speechAvailable()) return;
    const update = () => setVoices(dutchVoices());
    window.speechSynthesis.addEventListener('voiceschanged', update);
    return () => window.speechSynthesis.removeEventListener('voiceschanged', update);
  }, []);
  return voices;
}

export function Settings({ progress, lang, onLang, onTheme, onVoice, onReset, onBack }: {
  progress: Progress;
  lang?: HelpLanguage;
  onLang: (code: LangCode | null) => void;
  onTheme: (theme: ThemeChoice) => void;
  onVoice: (voice: string | null) => void;
  onReset: () => void;
  onBack: () => void;
}) {
  return (
    <div className="screen">
      <div className="screen-head">
        <button type="button" className="icon-btn" onClick={onBack} aria-label="Back"><BackIcon size={28} /></button>
        <h1><Bi text={ui('settings', lang)} /></h1>
      </div>
      <h2><Bi text={ui('helpLanguage', lang)} /></h2>
      <LanguagePicker current={progress.helpLang} onPick={onLang} />
      {lang && !lang.reviewed && <p className="muted small">beta: {ui('beta').en}</p>}

      <h2><Bi text={ui('theme', lang)} /></h2>
      <div className="segmented" role="radiogroup" aria-label={ui('theme').en}>
        {THEMES.map(({ value, key, Icon }) => (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={progress.theme === value}
            className={progress.theme === value ? 'picked' : ''}
            onClick={() => onTheme(value)}
          >
            <Icon size={26} />
            <Bi text={ui(key, lang)} />
          </button>
        ))}
      </div>

      <h2><Bi text={ui('voice', lang)} /></h2>
      <VoicePicker current={progress.voice} lang={lang} onPick={onVoice} />
      <button
        type="button"
        className="btn btn-ghost danger"
        onClick={() => window.confirm(ui('resetConfirm').en) && onReset()}
      >
        <Bi text={ui('resetProgress', lang)} />
      </button>
    </div>
  );
}

function VoicePicker({ current, lang, onPick }: {
  current: string | null;
  lang?: HelpLanguage;
  onPick: (voice: string | null) => void;
}) {
  const voices = useDutchVoices();
  if (!voices.length) return <p className="warn"><Bi text={ui('voiceNone', lang)} /></p>;
  const options = [{ uri: null, name: ui('voiceAuto', lang), detail: voices[0].name }, ...voices.map((v) => ({
    uri: v.voiceURI,
    name: { en: v.name.replace(/\s*\(.*\)\s*$/, '') },
    detail: v.lang.replace('_', '-').toLowerCase() === 'nl-be' ? 'Vlaams (België)' : 'Nederland',
  }))];
  return (
    <>
      <p className="muted small"><Bi text={ui('voiceHint', lang)} /></p>
      <ul className="voices" role="radiogroup" aria-label={ui('voice').en}>
        {options.map((o) => {
          const picked = current === o.uri;
          return (
            <li key={o.uri ?? 'auto'} className={`voice-row ${picked ? 'picked' : ''}`}>
              <button
                type="button"
                className="voice-pick"
                role="radio"
                aria-checked={Boolean(picked)}
                onClick={() => {
                  setPreferredVoice(o.uri);
                  onPick(o.uri);
                }}
              >
                <span className="voice-name"><Bi text={o.name} /></span>
                <span className="voice-lang">{o.detail}</span>
              </button>
              {picked && <CheckIcon size={24} />}
              <button
                type="button"
                className="speak speak-md"
                aria-label={`Listen: ${o.name.en}`}
                onClick={() => speak(SAMPLE, false, 'nl', o.uri ?? undefined)}
              >
                <SpeakerIcon size={28} />
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export function Result({ accuracy, xp, lang, onDone }: {
  accuracy: number;
  xp: number;
  lang?: HelpLanguage;
  onDone: () => void;
}) {
  return (
    <div className="screen result">
      <div className="confetti" aria-hidden>🎉</div>
      <h1><Bi text={ui('lessonComplete', lang)} /></h1>
      <div className="result-stats">
        <div className="result-box xp">
          <span className="result-label">{ui('xpEarned').en}</span>
          <span className="result-value"><StarIcon size={26} /> {xp}</span>
        </div>
        <div className="result-box acc">
          <span className="result-label">{ui('accuracy').en}</span>
          <span className="result-value"><TargetIcon size={26} /> {Math.round(accuracy * 100)}%</span>
        </div>
      </div>
      <button type="button" className="btn btn-green" onClick={onDone} autoFocus>
        {ui('continue', lang).en}
      </button>
    </div>
  );
}
