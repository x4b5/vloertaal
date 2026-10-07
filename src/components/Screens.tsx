import { Character } from './Characters';
import { LessonCelebration } from './Celebrate';
import { cultureTips } from '../content/culture';
import { findItem, phrasebookIds, units } from '../content/curriculum';
import { gloss, helpLanguages, ui, type Bilingual } from '../i18n';
import type { HelpLanguage, LangCode } from '../i18n/types';
import { useEffect, useState } from 'react';
import { dutchVoices, onRecordedVoices, recordedVoices, setPreferredVoice, speak, speechAvailable } from '../lib/audio';
import { VOICE_SAMPLE } from '../lib/voices';
import { isUnlocked } from '../lib/exercises';
import type { Progress, ThemeChoice } from '../lib/progress';
import { Bi } from './Bi';
import { LogoMark, Wordmark } from './Logo';
import {
  AlertIcon,
  AutoThemeIcon,
  BackIcon,
  BoltIcon,
  BullseyeIcon,
  CheckIcon,
  ChevronIcon,
  CrownIcon,
  FlameIcon,
  GlobeIcon,
  LockIcon,
  MoonIcon,
  PlayStarIcon,
  StarIcon,
  SpeakerIcon,
  SunIcon,
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
        <div className="mascot cast-row" aria-hidden>
          <Character who="amina" size={104} />
          <Character who="bram" mood="wave" size={132} />
          <Character who="henk" size={104} />
          <Character who="jada" size={104} />
        </div>
        <h1 className="hero-logo"><LogoMark size={56} /><Wordmark /></h1>
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
      <span className="brand"><LogoMark size={32} /><Wordmark /></span>
      <span className="stat" title={ui('dayStreak').en}><FlameIcon /> {streak}</span>
      <span className="stat" title="XP"><StarIcon /> {xp}</span>
      <button type="button" className="stat stat-btn" onClick={onSettings} aria-label={ui('settings').en}>
        <GlobeIcon size={20} /> {lang ? lang.nativeName : 'EN'}
      </button>
    </header>
  );
}

export function Path({ progress, lang, onStart, onPhrasebook, onTips }: {
  progress: Progress;
  lang?: HelpLanguage;
  onStart: (lessonId: string, review: boolean) => void;
  onPhrasebook: () => void;
  onTips: () => void;
}) {
  let n = 0;
  return (
    <div className="path">
      <button type="button" className="phrase-banner" onClick={onPhrasebook}>
        <AlertIcon size={30} />
        <Bi text={ui('phrasebook', lang)} />
        <ChevronIcon />
      </button>
      <button type="button" className="phrase-banner tips-banner" onClick={onTips}>
        <span className="tips-banner-emoji" aria-hidden>💡</span>
        <Bi text={ui('cultureTips', lang)} />
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

/** Dutch voices load asynchronously in most browsers; recorded voices arrive with voices.json. */
function useVoices() {
  const [device, setDevice] = useState(dutchVoices);
  const [recorded, setRecorded] = useState(recordedVoices);
  useEffect(() => {
    const offRecorded = onRecordedVoices(() => setRecorded(recordedVoices()));
    setRecorded(recordedVoices()); // they may have arrived before this screen opened
    if (!speechAvailable()) return offRecorded;
    const update = () => setDevice(dutchVoices());
    window.speechSynthesis.addEventListener('voiceschanged', update);
    return () => {
      offRecorded();
      window.speechSynthesis.removeEventListener('voiceschanged', update);
    };
  }, []);
  return { device, recorded };
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
  const { device, recorded } = useVoices();
  if (!recorded.length && !device.length) return <p className="warn"><Bi text={ui('voiceNone', lang)} /></p>;
  const options: { ref: string | null; name: Bilingual; detail: string }[] = [
    { ref: null, name: ui('voiceAuto', lang), detail: recorded[0]?.label ?? device[0]?.name ?? '' },
    ...recorded.map((v) => ({ ref: `piper:${v.key}`, name: { en: v.label }, detail: 'Vloertaal · Nederland' })),
    ...device.map((v) => ({
      ref: v.voiceURI,
      name: { en: v.name.replace(/\s*\(.*\)\s*$/, '') },
      detail: v.lang.replace('_', '-').toLowerCase() === 'nl-be' ? 'Vlaams (België)' : 'Nederland',
    })),
  ];
  return (
    <>
      <p className="muted small"><Bi text={ui('voiceHint', lang)} /></p>
      <ul className="voices" role="radiogroup" aria-label={ui('voice').en}>
        {options.map((o) => {
          const picked = current === o.ref;
          return (
            <li key={o.ref ?? 'auto'} className={`voice-row ${picked ? 'picked' : ''}`}>
              <button
                type="button"
                className="voice-pick"
                role="radio"
                aria-checked={picked}
                onClick={() => {
                  setPreferredVoice(o.ref);
                  onPick(o.ref);
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
                onClick={() => speak(VOICE_SAMPLE, false, 'nl', o.ref)}
              >
                <SpeakerIcon size={28} />
              </button>
            </li>
          );
        })}
      </ul>
      {recorded.length > 0 && (
        <p className="muted small credits">
          Vloertaal voices: {recorded.map((v) => v.label).join(', ')}, made with Piper (open source)
          {recorded.some((v) => v.license) && <> · {[...new Set(recorded.map((v) => v.license).filter(Boolean))].join(', ')}</>}.
          {' '}Women in the app speak with your phone's voice.
        </p>
      )}
    </>
  );
}

/** Accuracy praise for the card header, like a teacher would say it. */
function praiseFor(pct: number): { key: 'accPerfect' | 'accGreat' | 'accGood' | 'accOk'; tone: 'green' | 'orange' } {
  if (pct >= 100) return { key: 'accPerfect', tone: 'green' };
  if (pct >= 90) return { key: 'accGreat', tone: 'green' };
  if (pct >= 70) return { key: 'accGood', tone: 'green' };
  return { key: 'accOk', tone: 'orange' };
}

/** Counts a number up from 0 (skipped when the learner prefers less motion). */
function useCountUp(target: number, delay = 350, ms = 900) {
  const still = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const [value, setValue] = useState(still ? target : 0);
  useEffect(() => {
    if (still) return setValue(target);
    let raf = 0;
    const t0 = performance.now() + delay;
    const tick = (now: number) => {
      const k = Math.min(1, Math.max(0, (now - t0) / ms));
      setValue(Math.round(target * (1 - (1 - k) ** 3)));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, delay, ms, still]);
  return value;
}

function StatCard({ tone, label, icon, value, final, done }: {
  tone: 'gold' | 'green' | 'orange';
  label: Bilingual;
  icon: React.ReactNode;
  value: string;
  /** Screen readers hear the end value, not the count-up. */
  final: string;
  /** The count-up has landed: the value gives a little pop. */
  done: boolean;
}) {
  return (
    <div className={`stat-card stat-${tone} ${done ? 'stat-done' : ''}`} role="group" aria-label={`${label.en} ${final}`}>
      <div className="stat-card-head"><Bi text={label} /></div>
      <div className="stat-card-body" aria-hidden>
        {icon}
        <span className="stat-card-value">{value}</span>
      </div>
    </div>
  );
}

export function Result({ accuracy, xp, lang, onDone }: {
  accuracy: number;
  xp: number;
  lang?: HelpLanguage;
  onDone: () => void;
}) {
  const pct = Math.round(accuracy * 100);
  const praise = praiseFor(pct);
  // Each number starts counting once its card has popped in.
  const shownXp = useCountUp(xp, 700, 700);
  const shownPct = useCountUp(pct, 850, 800);
  // Enter continues, as after every exercise (the screen has no other input).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !(e.target instanceof HTMLButtonElement)) onDone();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onDone]);
  return (
    <div className="player result-screen">
      <main className="player-body result">
        <LessonCelebration />
        <h1 className="result-title"><Bi text={ui('lessonComplete', lang)} /></h1>
        <p className="result-nl" lang="nl">Les voltooid!</p>
        <div className="result-stats">
          <StatCard tone="gold" label={ui('xpTotal', lang)} icon={<BoltIcon size={30} />} value={String(shownXp)} final={`${xp} XP`} done={shownXp === xp} />
          <StatCard
            tone={praise.tone}
            label={ui(praise.key, lang)}
            icon={<BullseyeIcon size={30} />}
            value={`${shownPct}%`}
            final={`${ui('accuracy').en} ${pct}%`}
            done={shownPct === pct}
          />
        </div>
      </main>
      <footer className="player-foot">
        <div className="foot-inner">
          <div className="foot-actions">
            <button type="button" className="btn btn-green" onClick={onDone}>
              {ui('continue', lang).en}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

/** All "Zo werkt het hier" tips, to read again. Tips of lessons not reached yet stay hidden. */
export function Tips({ progress, lang, onBack }: { progress: Progress; lang?: HelpLanguage; onBack: () => void }) {
  const [open, setOpen] = useState<string | null>(null);
  const visible = cultureTips.filter((t) => isUnlocked(t.lessonId, progress.completed));
  return (
    <div className="screen">
      <div className="screen-head">
        <button type="button" className="icon-btn" onClick={onBack} aria-label="Back"><BackIcon size={28} /></button>
        <h1><Bi text={ui('cultureTips', lang)} /></h1>
      </div>
      <p className="muted"><Bi text={ui('cultureTipsHint', lang)} /></p>
      <ul className="tips-list">
        {visible.map((t) => (
          <li key={t.id} className={`tips-item ${open === t.id ? 'open' : ''}`}>
            <button type="button" className="tips-head" aria-expanded={open === t.id} onClick={() => setOpen(open === t.id ? null : t.id)}>
              <span className="tips-emoji" aria-hidden>{t.emoji}</span>
              <Bi text={gloss(t.id, t.title, lang)} />
              <ChevronIcon />
            </button>
            {open === t.id && (
              <div className="tips-body">
                <p><Bi text={gloss(`${t.id}.b`, t.body, lang)} /></p>
                <div className="phrase">
                  <SpeakButton text={t.phrase.nl} />
                  <div className="phrase-text">
                    <span className="phrase-nl" lang="nl">{t.phrase.nl}</span>
                    <Bi text={gloss(t.phrase.id, t.phrase.en, lang)} />
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
