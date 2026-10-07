import { Character } from './Characters';
import { breakable } from '../lib/dutch';
import { LessonCelebration } from './Celebrate';
import { aboutSections } from '../content/about';
import { cultureTips } from '../content/culture';
import { findItem, phrasebookIds, units } from '../content/curriculum';
import { gloss, helpLanguages, ui, type Bilingual } from '../i18n';
import type { HelpLanguage, LangCode } from '../i18n/types';
import { useEffect, useState } from 'react';
import { dutchVoices, onRecordedVoices, recordedVoices, setPreferredVoice, speak, speechAvailable } from '../lib/audio';
import { VOICE_SAMPLE } from '../lib/voices';
import { isUnlocked } from '../lib/exercises';
import { type Access, unitAllowed } from '../lib/access';
import { UpgradeCard } from './Gate';
import type { Progress, ThemeChoice } from '../lib/progress';
import { Bi, HelpText } from './Bi';
import { LogoMark, Wordmark } from './Logo';
import { WordPicture } from '../pictures';
import {
  AlertIcon,
  AutoThemeIcon,
  CalendarIcon,
  CrateIcon,
  BackIcon,
  CheckIcon,
  ChevronIcon,
  CrownIcon,
  GlobeIcon,
  LifebuoyIcon,
  LockIcon,
  RouteIcon,
  GearIcon,
  InfoIcon,
  MoonIcon,
  SpeakerIcon,
  SunIcon,
} from './Icons';
import { SpeakButton } from './SpeakButton';

export function LanguagePicker({ current, onPick, showBeta = false }: {
  /** undefined = nothing chosen yet (onboarding). */
  current?: LangCode | null;
  onPick: (code: LangCode | null) => void;
  /** Mark translations still in review (Settings only; onboarding stays calm). */
  showBeta?: boolean;
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
          {showBeta && !l.reviewed && <span className="lang-beta">beta</span>}
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

export function TopBar({ streak, words, lang, onLanguage }: {
  streak: number;
  /** Words learned so far (see learnedWords). */
  words: number;
  lang?: HelpLanguage;
  /** The language chip opens Settings ("Instellingen"), where the help language is chosen. */
  onLanguage: () => void;
}) {
  const wordsLabel = ui('wordsLearnedN').en.replace('{n}', String(words));
  return (
    <header className="topbar">
      <span className="brand">
        <LogoMark size={40} />
        <Wordmark className="topbar-wordmark" />
      </span>
      <span className="chip chip-streak" role="img" aria-label={`${streak} ${ui('dayStreak').en}`} title={ui('dayStreak').en}>
        <CalendarIcon size={22} />
        <span className="chip-num">{streak}</span>
        <span className="chip-unit" lang="nl">{streak === 1 ? 'dag' : 'dagen'}</span>
      </span>
      <span className="chip chip-words" role="img" aria-label={wordsLabel} title={wordsLabel}>
        <CrateIcon size={22} />
        <span className="chip-num">{words}</span>
        <span className="chip-unit" lang="nl">{words === 1 ? 'woord' : 'woorden'}</span>
      </span>
      <button
        type="button"
        className="chip chip-lang"
        onClick={onLanguage}
        aria-label={`${ui('helpLanguage').en}: ${lang ? lang.name : ui('englishOnly').en}`}
      >
        <GlobeIcon size={20} />
        <span className="chip-code">{lang ? lang.code.toUpperCase() : 'EN'}</span>
      </button>
    </header>
  );
}

export type Tab = 'route' | 'words' | 'me' | 'about';

const TABS: { tab: Tab; nl: string; key: 'navRoute' | 'navWords' | 'settings' | 'about'; Icon: typeof RouteIcon }[] = [
  { tab: 'route', nl: 'Route', key: 'navRoute', Icon: RouteIcon },
  { tab: 'words', nl: 'Hulp', key: 'navWords', Icon: LifebuoyIcon },
  { tab: 'me', nl: 'Instellingen', key: 'settings', Icon: GearIcon },
  { tab: 'about', nl: 'Over', key: 'about', Icon: InfoIcon },
];

/** Bottom bar on the three home-level screens: Route (lessons), Hulp, Instellingen, Over. The label is
 *  Dutch (short, part of learning the work floor); screen readers also hear the English. */
export function BottomNav({ current, onTab }: { current: Tab; onTab: (tab: Tab) => void }) {
  return (
    <nav className="bottom-nav" aria-label="Main">
      {TABS.map(({ tab, nl, key, Icon }) => (
        <button
          key={tab}
          type="button"
          className={`nav-tab ${current === tab ? 'nav-tab-on' : ''}`}
          aria-current={current === tab ? 'page' : undefined}
          onClick={() => onTab(tab)}
        >
          <span className="nav-icon" aria-hidden><Icon size={26} /></span>
          <span className="nav-label" lang="nl">{nl}</span>
          <span className="sr-only"> · {ui(key).en}</span>
        </button>
      ))}
    </nav>
  );
}

/** "Hulp" tab: the emergency phrases and the workplace tips, as two big entry cards. */
export function WordsHub({ lang, onPhrasebook, onTips }: {
  lang?: HelpLanguage;
  onPhrasebook: () => void;
  onTips: () => void;
}) {
  return (
    <div className="screen words-hub">
      <div className="screen-head">
        <h1><Bi text={ui('navWords', lang)} /></h1>
      </div>
      <button type="button" className="hub-card hub-alert" onClick={onPhrasebook}>
        <span className="hub-icon" aria-hidden><AlertIcon size={34} /></span>
        <span className="hub-text">
          <span className="hub-nl" lang="nl">Noodzinnen</span>
          <Bi text={ui('phrasebook', lang)} />
        </span>
        <ChevronIcon size={24} />
      </button>
      <button type="button" className="hub-card hub-tips" onClick={onTips}>
        <span className="hub-icon" aria-hidden><span className="entry-emoji">💡</span></span>
        <span className="hub-text">
          <span className="hub-nl" lang="nl">Zo werkt het hier</span>
          <Bi text={ui('cultureTips', lang)} />
        </span>
        <ChevronIcon size={24} />
      </button>
    </div>
  );
}

/** Two-digit stencil unit number: 01, 02 … */
const unitNumber = (u: number) => String(u + 1).padStart(2, '0');
/** Lesson code on the card tab: unit.lesson, so 1.1, 1.2 … for unit 1, 2.1 … for unit 2
 *  (not A1/B1, which read like language levels). */
const lessonCode = (u: number, i: number) => `${u + 1}.${i + 1}`;

export function Path({ progress, lang, onStart, onAbout, access = 'full', onUpgrade }: {
  progress: Progress;
  lang?: HelpLanguage;
  /** Preview: only the first unit can be played; the rest shows a "full version" lock. */
  access?: Access;
  /** Opens the unlock card (Settings) from a locked unit sign. */
  onUpgrade?: () => void;
  onStart: (lessonId: string, review: boolean) => void;
  onAbout: () => void;
}) {
  return (
    <div className="path">
      {units.map((unit, u) => {
        const allowed = unitAllowed(unit.id, access);
        const unitOpen = unit.lessons.some((l) => isUnlocked(l.id, progress.completed, access));
        return (
          <section key={unit.id} className={`unit ${unitOpen ? '' : 'unit-locked'} ${allowed ? '' : 'unit-full-only'}`}>
            {u > 0 && <div className="hazard" aria-hidden />}
            {/* In the preview, tapping a later unit's sign opens the unlock card (the note below
                is the same action as a real button, for keyboards and screen readers). */}
            <div className="unit-head" onClick={allowed ? undefined : onUpgrade}>
              <span className="unit-num" aria-hidden>{unitNumber(u)}</span>
              <div className="unit-titles">
                <h2>
                  <span className="sr-only">Unit {u + 1}: </span>
                  {gloss(unit.id, unit.title, lang).en}
                </h2>
                <span className="unit-nl" lang="nl">{unit.titleNl}</span>
                {lang?.gloss[unit.id] && (
                  <HelpText text={lang.gloss[unit.id]} lang={lang} />
                )}
              </div>
              {!unitOpen && <LockIcon size={26} className="unit-lock" />}
            </div>
            {!allowed && (
              <button type="button" className="full-only-note" onClick={onUpgrade}>
                <LockIcon size={16} />
                <span lang="nl">Volledige versie</span>
                <Bi className="full-only-en" text={ui('fullVersion', lang)} />
                <ChevronIcon size={16} />
              </button>
            )}
            <ol className="bays">
              {unit.lessons.map((lesson, i) => {
                const record = progress.completed[lesson.id];
                const open = isUnlocked(lesson.id, progress.completed, access);
                const state = !allowed ? 'locked' : record ? 'done' : open ? 'now' : 'locked';
                const code = lessonCode(u, i);
                const first = lesson.words[0];
                return (
                  <li key={lesson.id} className={`bay bay-${state}`}>
                    <span className="bay-marker" aria-hidden>
                      {state === 'done' ? <CheckIcon size={24} /> : i + 1}
                    </span>
                    <button
                      type="button"
                      className="bay-card"
                      disabled={!open}
                      onClick={() => onStart(lesson.id, Boolean(record))}
                      aria-label={`${lesson.title}${open ? (record ? ` · ${ui('practice').en}` : '') : ` (${ui('locked').en})`}`}
                    >
                      <span className="bay-tab" aria-hidden>
                        {code}{state === 'now' && <> · <span lang="nl">Nu</span></>}
                      </span>
                      {state === 'done' && first && (
                        <WordPicture className="bay-pic" id={first.id} emoji={first.emoji} size={56} />
                      )}
                      {state === 'locked' && <LockIcon size={30} className="bay-lock" />}
                      <span className="bay-text">
                        <Bi className="bay-title" text={gloss(lesson.id, lesson.title, lang)} />
                        {state === 'done' && (
                          <span className="bay-status">
                            <span lang="nl">klaar</span> · <span className="bay-again">{ui('practice').en}</span>
                          </span>
                        )}
                        {state === 'now' && (
                          <span className="bay-start">{ui('start').en}<ChevronIcon size={20} /></span>
                        )}
                      </span>
                      {state === 'done' && (
                        <span className="bay-check" aria-hidden>
                          {record.best === 1 ? <CrownIcon size={18} /> : <CheckIcon size={20} />}
                        </span>
                      )}
                      {state === 'now' && (
                        <span className="bay-char" aria-hidden><Character who="bram" mood="idle" size={118} /></span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ol>
          </section>
        );
      })}
      <button type="button" className="about-link" onClick={onAbout}>
        <LogoMark size={22} check={false} />
        <Bi text={ui('about', lang)} />
      </button>
    </div>
  );
}

/** "About Vloertaal": what the app is, who it is for, privacy and voice credits. */
/** "About Vloertaal": the "Over" tab of the bottom bar. */
export function About({ lang, onBack }: { lang?: HelpLanguage; onBack?: () => void }) {
  const { recorded } = useVoices();
  return (
    <div className="screen about">
      <div className="screen-head">
        {onBack && <button type="button" className="icon-btn" onClick={onBack} aria-label="Back"><BackIcon size={28} /></button>}
        <h1><Bi text={ui('about', lang)} /></h1>
      </div>
      <div className="about-hero">
        <LogoMark size={88} />
        <Wordmark />
        <p className="about-tag" lang="nl">Nederlands voor op de werkvloer</p>
      </div>
      {aboutSections.map((s) => (
        <section key={s.id} className="about-section">
          <h2><span className="about-emoji" aria-hidden>{s.emoji}</span><Bi text={gloss(s.id, s.title, lang)} /></h2>
          <p><Bi text={gloss(`${s.id}.b`, s.body, lang)} /></p>
        </section>
      ))}
      {recorded.length > 0 && (
        <ul className="about-credits muted small">
          {recorded.map((v) => (
            <li key={v.key}>
              Voice “{v.label}”: {v.engine ?? 'Piper'}{v.dataset ? ` · ${v.dataset}` : ''}{v.license ? ` · ${v.license}` : ''}
              {v.modelCard && <> · <a href={v.modelCard} target="_blank" rel="noreferrer">model card</a></>}
            </li>
          ))}
        </ul>
      )}
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
                <span className="phrase-nl" lang="nl">{breakable(item.nl)}</span>
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

export function Settings({ progress, lang, onLang, onTheme, onVoice, onReset, onAbout, onBack, access = 'full', onAccess, focusUpgrade }: {
  progress: Progress;
  lang?: HelpLanguage;
  onLang: (code: LangCode | null) => void;
  onTheme: (theme: ThemeChoice) => void;
  onVoice: (voice: string | null) => void;
  onReset: () => void;
  onAbout: () => void;
  /** Absent when Settings is the "Instellingen" tab (the bottom bar leads away). */
  onBack?: () => void;
  access?: Access;
  /** Preview: the unlock card's password was right. */
  onAccess?: (a: Access) => void;
  /** Opened from a locked unit: scroll the unlock card into view. */
  focusUpgrade?: boolean;
}) {
  useEffect(() => {
    if (!focusUpgrade) return;
    const raf = requestAnimationFrame(() => {
      const card = document.getElementById('unlock-full');
      card?.scrollIntoView({ block: 'start' });
      card?.querySelector('input')?.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(raf);
  }, [focusUpgrade]);
  return (
    <div className="screen">
      <div className="screen-head">
        {onBack && <button type="button" className="icon-btn" onClick={onBack} aria-label="Back"><BackIcon size={28} /></button>}
        <h1><Bi text={ui('settings', lang)} /></h1>
      </div>
      <h2><Bi text={ui('helpLanguage', lang)} /></h2>
      <LanguagePicker current={progress.helpLang} onPick={onLang} showBeta />
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
      {/* Preview: settings work as usual; unlocking the full version sits below them. */}
      {access === 'preview' && onAccess && <UpgradeCard lang={lang} onAccess={onAccess} />}
      <button type="button" className="phrase-banner about-banner" onClick={onAbout}>
        <LogoMark size={32} check={false} />
        <Bi text={ui('about', lang)} />
        <ChevronIcon />
      </button>
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
          Vloertaal voices:{' '}
          {(['ElevenLabs', 'Piper'] as const)
            .map((engine) => [engine, recorded.filter((v) => (v.engine ?? 'Piper') === engine)] as const)
            .filter(([, vs]) => vs.length)
            .map(([engine, vs]) => `${vs.map((v) => v.label).join(', ')} (${engine === 'Piper' ? 'Piper, open source' : engine})`)
            .join('; ')}
          {recorded.some((v) => v.license) && <> · {[...new Set(recorded.map((v) => v.license).filter(Boolean))].join(', ')}</>}.
        </p>
      )}
    </>
  );
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

function StatCard({ tone, tag, label, icon, value, final, done, foot }: {
  tone: 'gold' | 'green' | 'orange';
  /** Short stencil tag on the label (GOED, WOORDEN). */
  tag: string;
  label: Bilingual;
  icon: React.ReactNode;
  value: string;
  /** Screen readers hear the end value, not the count-up. */
  final: string;
  /** The count-up has landed: the value gives a little pop. */
  done: boolean;
  /** Small line under the value. */
  foot?: Bilingual;
}) {
  return (
    <div className={`stat-card stat-${tone} ${done ? 'stat-done' : ''}`} role="group" aria-label={`${label.en} ${final}`}>
      <div className="stat-card-head"><span className="tag" aria-hidden>{tag}</span><Bi text={label} /></div>
      <div className="stat-card-body" aria-hidden>
        {icon}
        <span className="stat-card-value">{value}</span>
      </div>
      {foot && <Bi className="stat-card-foot" text={foot} />}
    </div>
  );
}

export function Result({ right, total, newWords, words, lang, onDone }: {
  /** Graded exercises right the first time, out of all graded ones. */
  right: number;
  total: number;
  /** Words this lesson added to the learner's list, and the list's size now. */
  newWords: number;
  words: number;
  lang?: HelpLanguage;
  onDone: () => void;
}) {
  // Each number starts counting once its card has popped in.
  const shownRight = useCountUp(right, 700, 700);
  const shownNew = useCountUp(newWords, 850, 600);
  const fill = (t: Bilingual, n: number): Bilingual => ({ ...t, en: t.en.replace('{n}', String(n)), help: t.help?.replace('{n}', String(n)) });
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
        <div className="result-hero">
          <LessonCelebration />
          {/* Rubber stamp on the delivery note: the lesson is done. */}
          <span className="stamp stamp-right result-stamp" aria-hidden>
            <span className="stamp-word" lang="nl">Klaar</span>
            <span className="stamp-sub">✓</span>
          </span>
        </div>
        <h1 className="result-title"><Bi text={ui('lessonComplete', lang)} /></h1>
        <p className="result-nl" lang="nl">Les voltooid!</p>
        <div className="result-stats">
          <StatCard
            tone="green"
            tag="Goed"
            label={ui('rightFirstTime', lang)}
            icon={<CheckIcon size={30} />}
            value={`${shownRight} / ${total}`}
            final={`${right} / ${total}`}
            done={shownRight === right}
          />
          <StatCard
            tone="gold"
            tag="Woorden"
            label={ui('newWords', lang)}
            icon={<CrateIcon size={30} />}
            value={`+${shownNew}`}
            final={`+${newWords}`}
            done={shownNew === newWords}
            foot={fill(ui('wordsLearnedN', lang), words)}
          />
        </div>
      </main>
      <footer className="player-foot">
        <div className="foot-inner">
          <div className="foot-actions">
            <button type="button" className="btn btn-go btn-primary" onClick={onDone}>
              {ui('continue', lang).en}
              <span className="btn-block" aria-hidden><ChevronIcon size={26} /></span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

/** All "Zo werkt het hier" tips, to read again. Tips of lessons not reached yet stay hidden. */
export function Tips({ progress, lang, onBack, access = 'full' }: { progress: Progress; lang?: HelpLanguage; onBack: () => void; access?: Access }) {
  const [open, setOpen] = useState<string | null>(null);
  const visible = cultureTips.filter((t) => isUnlocked(t.lessonId, progress.completed, access));
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
                    <span className="phrase-nl" lang="nl">{breakable(t.phrase.nl)}</span>
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
