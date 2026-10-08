import { Character } from './Characters';
import { breakable } from '../lib/dutch';
import { LessonCelebration } from './Celebrate';
import { aboutSections } from '../content/about';
import { cultureTips } from '../content/culture';
import { findLesson, units } from '../content/curriculum';
import { unitIcons } from '../content/unitIcons';
import { unitLink } from '../lib/unitLink';
import type { DailyCard } from '../lib/spaced';
import { coursePlan, unitSector, type SectorChoice } from '../content/sectors';
import type { Unit } from '../content/types';
import { SectorIcon, SectorPicker } from './Sector';
import { fillN, gloss, helpLanguages, ui, withoutN, type Bilingual } from '../i18n';
import type { HelpLanguage, LangCode } from '../i18n/types';
import { useEffect, useRef, useState } from 'react';
import { dutchVoices, onRecordedVoices, recordedVoices, setPreferredVoice, speak, speechAvailable } from '../lib/audio';
import { VOICE_SAMPLE } from '../lib/voices';
import { isNextInCourse, isUnlocked } from '../lib/exercises';
import { type Access, unitAllowed } from '../lib/access';
import { UpgradeCard } from './Gate';
import type { Progress, ThemeChoice } from '../lib/progress';
import { Bi, HelpText } from './Bi';
import { RestartLink, ResumeChip, resumeLabel } from './Resume';
import { clearSave, loadSaves } from '../lib/resume';
import { LogoMark, Wordmark } from './Logo';
import { WordPicture } from '../pictures';
import { hasPicture } from '../lib/wordPicture';
import {
  AlertIcon,
  ArrowIcon,
  AutoThemeIcon,
  CalendarIcon,
  CrateIcon,
  BackIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronIcon,
  CrownIcon,
  LifebuoyIcon,
  LockIcon,
  RouteIcon,
  GearIcon,
  InfoIcon,
  MoonIcon,
  SpeakerIcon,
  SpeakerOffIcon,
  SunIcon,
} from './Icons';
import { SpeakButton } from './SpeakButton';
import { FlameIcon } from './StreakArt';
import { BackupCard, InstallCard, ReminderCard } from './Keep';
import { Flag } from './Flags';
import { PhraseList } from './Phrases';
import { CertBadge, CertificatesCard } from './Certificate';
import { CountingCard } from './Counting';
import { unitDone } from '../lib/certificate';

export function LanguagePicker({ current, onPick, showBeta = false, compact = false, lang }: {
  /** The help language in use (Settings): the "in review" tag is written in it. */
  lang?: HelpLanguage;
  /** undefined = nothing chosen yet (first run). */
  current?: LangCode | null;
  onPick: (code: LangCode | null) => void;
  /** Mark translations still in review (Settings only; the first-run screen stays calm). */
  showBeta?: boolean;
  /** Smaller cards (Settings); the first-run screen has the big ones. */
  compact?: boolean;
}) {
  const option = (code: LangCode | null, native: string, english: string, dir?: 'ltr' | 'rtl', beta = false) => (
    <button
      key={code ?? 'en'}
      type="button"
      className={`lang-btn ${current === code ? 'picked' : ''}`}
      onClick={() => onPick(code)}
      aria-pressed={current === undefined ? undefined : current === code}
    >
      <Flag code={code ?? 'en'} width={compact ? 32 : 40} />
      <span className="lang-names">
        <span className="lang-native" lang={code ?? 'en'} dir={dir}>{native}</span>
        <span className="lang-en">{english}</span>
        {beta && (
          <span className="lang-beta-tag">
            {lang?.ui.inReview ? <HelpText className="lang-beta-help" text={lang.ui.inReview} lang={lang} /> : <span className="lang-beta-help" lang="en">{ui('inReview').en}</span>}
            <span className="lang-beta" lang="en">beta</span>
          </span>
        )}
      </span>
      {current === code && <CheckIcon size={20} className="lang-check" />}
    </button>
  );
  return (
    <div className={`lang-grid ${compact ? 'lang-grid-compact' : ''}`}>
      {helpLanguages.map((l) => option(l.code, l.nativeName, l.name, l.dir, showBeta && !l.reviewed))}
      {option(null, 'English', ui('englishOnly').en)}
    </div>
  );
}

/** First run, before anything else: pick the language you get help in. */
export function Onboarding({ onDone }: { onDone: (code: LangCode | null) => void }) {
  return (
    <div className="screen onboarding">
      <div className="hero">
        <h1 className="hero-logo"><LogoMark size={52} /><Wordmark /></h1>
        <p className="tagline">{ui('appTagline').en}</p>
      </div>
      <h2 className="onboarding-title">{ui('chooseLanguage').en}</h2>
      <LanguagePicker onPick={onDone} />
    </div>
  );
}

export function TopBar({ streak, words, lang, onLanguage, done = false }: {
  streak: number;
  /** Today has a finished lesson or review: the flame is lit. Until then a grey outline. */
  done?: boolean;
  /** Words learned so far (see learnedWords). */
  words: number;
  lang?: HelpLanguage;
  /** The language chip opens Settings ("Instellingen"), where the help language is chosen. */
  onLanguage: () => void;
}) {
  // The stats are a picture and a number; the unit is in the help language (when there is
  // room), and the spoken label says it in English and the help language.
  const wordsText = fillN(ui('wordsLearnedN', lang), words);
  const wordsLabel = wordsText.help ? `${wordsText.en} · ${wordsText.help}` : wordsText.en;
  const streakText = ui('dayStreak', lang);
  const streakLabel = `${streak} ${streakText.en}${streakText.help ? ` · ${streak} ${streakText.help}` : ''}${!done && streak > 0 ? ` · ${ui('stillToDo').en}` : ''}`;
  const daysUnit = ui('daysUnit', lang);
  const wordsUnit = ui('wordsUnit', lang);
  return (
    <header className="topbar">
      <span className="brand">
        <LogoMark size={36} />
        <Wordmark className="topbar-wordmark" />
      </span>
      <span
        className={`stat stat-streak ${done ? 'stat-lit' : ''}`}
        role="img"
        aria-label={streakLabel}
        title={streakLabel}
      >
        <FlameIcon lit={done} size={22} />
        <span className="stat-num">{streak}</span>
        {daysUnit.help && lang ? <HelpText className="stat-unit" text={daysUnit.help} lang={lang} /> : <span className="stat-unit" lang="en">{daysUnit.en}</span>}
      </span>
      <span className="stat" role="img" aria-label={wordsLabel} title={wordsLabel}>
        <CrateIcon size={20} />
        <span className="stat-num">{words}</span>
        {wordsUnit.help && lang ? <HelpText className="stat-unit" text={wordsUnit.help} lang={lang} /> : <span className="stat-unit" lang="en">{wordsUnit.en}</span>}
      </span>
      <button
        type="button"
        className="lang-chip"
        onClick={onLanguage}
        aria-label={`${ui('helpLanguage').en}: ${lang ? lang.name : ui('englishOnly').en}`}
      >
        <Flag code={lang?.code ?? 'en'} width={32} />
      </button>
      {/* The streak is on, but today still needs a lesson or the review: a small unlit flame
          and the word "today" in the help language (not a sentence). */}
      {streak > 0 && !done && (
        <span className="todo-tag" aria-hidden>
          <span className="todo-chip todo-flame">
            <FlameIcon lit={false} size={18} />
            {lang?.ui.today ? <HelpText className="todo-word" text={lang.ui.today} lang={lang} /> : <span className="todo-word" lang="en">{ui('today').en}</span>}
          </span>
        </span>
      )}
    </header>
  );
}

export type Tab = 'route' | 'words' | 'me' | 'about';

const TABS: { tab: Tab; nl: string; key: 'navRoute' | 'navWords' | 'settings' | 'navAbout'; Icon: typeof RouteIcon }[] = [
  { tab: 'route', nl: 'Route', key: 'navRoute', Icon: RouteIcon },
  { tab: 'words', nl: 'Hulp', key: 'navWords', Icon: LifebuoyIcon },
  { tab: 'me', nl: 'Instellingen', key: 'settings', Icon: GearIcon },
  { tab: 'about', nl: 'Over', key: 'navAbout', Icon: InfoIcon },
];

/** Bottom bar on the home-level screens: Route (lessons), Hulp, Instellingen, Over. The label is
 *  Dutch (short, part of learning the work floor) with the help language in a small line under
 *  it; screen readers hear all of it. */
export function BottomNav({ current, onTab, lang }: { current: Tab; onTab: (tab: Tab) => void; lang?: HelpLanguage }) {
  return (
    <nav className="bottom-nav" aria-label="Main">
      {TABS.map(({ tab, nl, key, Icon }) => {
        const word = ui(key, lang);
        return (
          <button
            key={tab}
            type="button"
            className={`nav-tab ${current === tab ? 'nav-tab-on' : ''}`}
            aria-current={current === tab ? 'page' : undefined}
            aria-label={`${nl} · ${word.en}${word.help ? ` · ${word.help}` : ''}`}
            onClick={() => onTab(tab)}
          >
            <span className="nav-icon" aria-hidden><Icon size={26} /></span>
            <span className="nav-label" lang="nl" aria-hidden>{nl === 'Instellingen' ? 'Instel\u00adlingen' : nl}</span>
            {word.help && lang
              ? <HelpText className="nav-help" text={word.help} lang={lang} />
              : <span className="nav-help" lang="en" aria-hidden>{word.en}</span>}
          </button>
        );
      })}
    </nav>
  );
}

/** "Hulp" tab: opens straight onto the emergency phrases; the workplace tips are below them. */
export function WordsHub({ lang, onTips }: {
  lang?: HelpLanguage;
  onTips: () => void;
}) {
  return (
    <div className="screen words-hub">
      <div className="hub-alert-head">
        <span className="hub-icon" aria-hidden><AlertIcon size={30} /></span>
        <h1 className="hub-title">
          <span className="hub-nl" lang="nl">Noodzinnen</span>
          <Bi text={ui('phrasebook', lang)} />
        </h1>
      </div>
      <p className="muted hub-hint"><Bi text={ui('phrasebookHint', lang)} /></p>
      <PhraseList lang={lang} />
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

/**
 * "Herhaal vandaag" on the path: one compact card (about 72 px), so the next lesson's Start stays
 * in view. Words due: the calendar, the number big, "Review today" in the help language (English
 * small) and a chevron; the whole card starts the review. Done today: a calm green check badge,
 * "Done for today", and a real "Extra round" button when words are left over. After the first
 * lesson: "Tomorrow your first words come back". The Dutch name is in the spoken label only; no
 * "label: n" strings, so nothing wraps or reorders in right-to-left text.
 */
function DailyReview({ card, lang, onDaily }: { card: DailyCard; lang?: HelpLanguage; onDaily?: () => void }) {
  const rtl = lang?.dir === 'rtl';
  if (card.state === 'due') {
    return (
      <button
        type="button"
        className="daily-card daily-due"
        dir={rtl ? 'rtl' : undefined}
        onClick={onDaily}
        aria-label={`Herhaal vandaag · ${ui('reviewToday').en}: ${fillN(ui('reviewTodayN'), card.due).en}`}
      >
        <span className="daily-icon" aria-hidden><CalendarIcon size={28} /></span>
        <span className="daily-n" aria-hidden>{card.due}</span>
        <Bi className="daily-title" text={ui('reviewToday', lang)} />
        <ChevronIcon size={26} className="daily-go" />
      </button>
    );
  }
  const done = card.state === 'done';
  const extra = done && card.extra > 0 && onDaily;
  return (
    <div
      className={`daily-card daily-${card.state}`}
      dir={rtl ? 'rtl' : undefined}
      role="group"
      aria-label={`Herhaal vandaag · ${ui('reviewToday').en}${done && card.tomorrow > 0 ? ` · ${fillN(ui('tomorrowN'), card.tomorrow).en}` : ''}`}
    >
      {done ? (
        // A calm badge, not a stamp: the review is done for today.
        <span className="daily-icon daily-badge" aria-hidden><CheckIcon size={26} /></span>
      ) : (
        <span className="daily-icon" aria-hidden><CalendarIcon size={28} /></span>
      )}
      <Bi className="daily-title" text={ui(done ? 'reviewDone' : 'firstWordsTomorrow', lang)} />
      {extra && (
        <button type="button" className="btn daily-extra" onClick={onDaily}>
          <Bi className="daily-extra-label" text={ui('extraRound', lang)} />
          <ChevronIcon size={18} />
        </button>
      )}
    </div>
  );
}

export function Path({ progress, lang, onStart, onAbout, access = 'full', onUpgrade, openOther = false, focusUnit, onFocused, daily, onDaily, arrived, onArrived, onCertificate }: {
  progress: Progress;
  /** Opens a finished unit's certificate (the chip on its sign). */
  onCertificate?: (unitId: string) => void;
  /** "Herhaal vandaag" (see dailyCard): due, done today, or the first words come tomorrow. */
  daily?: DailyCard | null;
  /** Starts today's review (also the "extra ronde" after it). */
  onDaily?: () => void;
  /** Back from a finished lesson: scroll to the next lesson, stamp the done one, pop the new one. */
  arrived?: string | null;
  onArrived?: () => void;
  /** A unit to scroll to and mark (from a coach link); onFocused is called once it is shown. */
  focusUnit?: string | null;
  onFocused?: () => void;
  /** Start with "Andere sectoren" open (dev screenshots). */
  openOther?: boolean;
  lang?: HelpLanguage;
  /** Preview: only the first unit can be played; the rest shows a "full version" lock. */
  access?: Access;
  /** Opens the unlock card (Settings) from a locked unit sign. */
  onUpgrade?: () => void;
  onStart: (lessonId: string, review: boolean) => void;
  onAbout: () => void;
}) {
  const { sector, completed } = progress;
  // Basis units plus the learner's own sector in course order; other sectors' units wait below.
  const { main, other } = coursePlan(sector);
  const [showOther, setShowOther] = useState(openOther || other.some((u) => u.id === focusUnit));
  // A coach link: scroll to that unit (after the app's own scroll-to-top) and mark it for a moment.
  const [marked, setMarked] = useState<string | null>(focusUnit ?? null);
  // The lesson just finished: kept for this visit of the path, for its one-time animations.
  const [justDone] = useState<string | null>(arrived ?? null);
  const pathRef = useRef<HTMLDivElement>(null);
  // Lessons stopped halfway (less than two days ago): their bay says "Ga verder · n/N".
  const [saves, setSaves] = useState(() => loadSaves());
  useEffect(() => {
    if (!focusUnit && !arrived) return;
    const still = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const t = window.setTimeout(() => {
      // The sticky top bar covers the top of the screen, the bottom bar its foot: every target
      // is measured against the space between them, so a unit's header never hides under the bar.
      const top = document.querySelector('.topbar')?.getBoundingClientRect().bottom ?? 0;
      const foot = document.querySelector('.bottom-nav')?.getBoundingClientRect().top ?? window.innerHeight;
      const behavior: ScrollBehavior = still ? 'auto' : 'smooth';
      if (focusUnit) {
        const head = document.getElementById(`unit-${focusUnit.slice(2)}`);
        if (head) window.scrollBy({ top: head.getBoundingClientRect().top - top - 8, behavior });
        onFocused?.();
      } else {
        // After a lesson: the next lesson in view (not the top of the path), centred in the free
        // space; when its unit's header fits above it too, that header is shown in full.
        const bay = pathRef.current?.querySelector<HTMLElement>('.bay-now');
        const head = bay?.closest('.unit')?.querySelector<HTMLElement>('.unit-head');
        if (bay) {
          const b = bay.getBoundingClientRect();
          let by = b.top + b.height / 2 - (top + foot) / 2;
          const h = head?.getBoundingClientRect();
          if (h && h.top - by < top + 8 && b.bottom - (h.top - top - 8) <= foot - 8) by = h.top - top - 8;
          window.scrollBy({ top: by, behavior });
        }
        onArrived?.();
      }
    }, 80);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusUnit, arrived]);
  useEffect(() => {
    if (!marked) return;
    const off = window.setTimeout(() => setMarked(null), 4000);
    return () => window.clearTimeout(off);
  }, [marked]);
  const unlocked = (lessonId: string) => isUnlocked(lessonId, completed, access);
  const rtl = lang?.dir === 'rtl';
  const next = (lessonId: string) => isNextInCourse(lessonId, completed, access, sector);

  const renderUnit = (unit: Unit, u: number) => {
    const allowed = unitAllowed(unit.id, access);
    const unitOpen = unit.lessons.some((l) => unlocked(l.id));
    return (
      <section
        key={unit.id}
        id={`unit-${unit.id.slice(2)}`}
        // Right to left: the stencil numbers, the rail and the markers move to the right.
        dir={rtl ? 'rtl' : undefined}
        className={`unit ${unitOpen ? '' : 'unit-locked'} ${allowed ? '' : 'unit-full-only'} ${marked === unit.id ? 'unit-marked' : ''}`}
      >
        {/* In the preview, tapping a later unit's sign opens the unlock card (the note below
            is the same action as a real button, for keyboards and screen readers). */}
        <div className="unit-head" onClick={allowed ? undefined : onUpgrade}>
          <span className="unit-num" aria-hidden>{unitNumber(u)}</span>
          <WordPicture className="unit-icon" id={unitIcons[unit.id] ?? ''} emoji={unit.emoji} size={60} />
          <div className="unit-titles" dir={rtl && lang?.gloss[unit.id] ? 'rtl' : undefined}>
            {/* Two lines: the help language large with the English small under it, or the
                English large with the Dutch name under it when there is no help language. */}
            <h2>
              <span className="sr-only">Unit {u + 1}: </span>
              {lang?.gloss[unit.id] ? <HelpText text={lang.gloss[unit.id]} lang={lang} className="unit-main" /> : unit.title}
            </h2>
            {lang?.gloss[unit.id] ? (
              <span className="unit-nl" lang="en" dir={rtl ? 'ltr' : undefined}>{unit.title}</span>
            ) : (
              <span className="unit-nl" lang="nl">{unit.titleNl}</span>
            )}
            {onCertificate && allowed && unitDone(unit, completed) && <CertBadge lang={lang} onOpen={() => onCertificate(unit.id)} />}
          </div>
          {!unitOpen && allowed && <LockIcon size={22} className="unit-lock" />}
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
            const record = completed[lesson.id];
            const open = unlocked(lesson.id);
            // 'now' is the next lesson of the learner's own course; 'open' is any other lesson they may enter.
            const state = !allowed ? 'locked' : record ? 'done' : !open ? 'locked' : next(lesson.id) ? 'now' : 'open';
            // The bay shows the lesson's first word that has a picture (none if all are abstract).
            const first = lesson.words.find(hasPicture);
            const title = gloss(lesson.id, lesson.title, lang);
            const saved = open && state !== 'locked' && saves[lesson.id]?.review === Boolean(record) ? saves[lesson.id] : undefined;
            return (
              <li
                key={lesson.id}
                className={`bay bay-${state} ${saved ? 'bay-saved' : ''} ${justDone && state === 'done' && lesson.id === justDone ? 'bay-arrived' : ''} ${justDone && state === 'now' ? 'bay-pop' : ''}`}
              >
                <span className="bay-marker" aria-hidden>
                  {state === 'done' ? <CheckIcon size={20} /> : i + 1}
                </span>
                <button
                  type="button"
                  className="bay-card"
                  disabled={!open}
                  onClick={() => onStart(lesson.id, Boolean(record))}
                  aria-label={`${lessonCode(u, i)} ${lesson.title}${title.help ? ` (${title.help})` : ''}${saved ? ` · ${resumeLabel(saved)}` : open ? (record ? ` · ${ui('practice').en}` : state === 'now' ? ` · ${ui('start').en}` : '') : ` (${ui('locked').en})`}`}
                >
                  {/* Every card shows the lesson's first picture: full colour when done or next,
                      dimmed for one you may open, more dimmed when locked. */}
                  {first && <WordPicture className="bay-pic" id={first.id} emoji={first.emoji} size={48} />}
                  <span className="bay-text" dir={rtl ? 'rtl' : undefined}>
                    <Bi className="bay-title" text={title} />
                    {/* Stopped halfway: "Ga verder · 12/18" in place of Start or Practise again. */}
                    {saved && <ResumeChip save={saved} lang={lang} />}
                    {state === 'done' && !saved && (
                      <span className="bay-again">
                        {record.best === 1 ? <CrownIcon size={16} /> : <CheckIcon size={16} />}
                        <Bi className="bay-again-label" text={ui('practice', lang)} />
                      </span>
                    )}
                    {/* One Start on the whole path: the next lesson. */}
                    {state === 'now' && !saved && (
                      <span className="bay-start">
                        <Bi className="bay-start-label" text={ui('start', lang)} />
                        <ChevronIcon size={22} />
                      </span>
                    )}
                  </span>
                  {state === 'open' && !saved && <ChevronIcon size={24} className="bay-chev" />}
                  {state === 'locked' && <LockIcon size={20} className="bay-lock" />}
                  {state === 'now' && (
                    <span className="bay-char" aria-hidden><Character who="bram" mood="idle" size={118} /></span>
                  )}
                </button>
                {saved && (
                  <RestartLink lang={lang} onRestart={() => {
                    clearSave(lesson.id);
                    setSaves(loadSaves());
                    onStart(lesson.id, Boolean(record));
                  }} />
                )}
              </li>
            );
          })}
        </ol>
      </section>
    );
  };

  return (
    <div className="path" ref={pathRef}>
      {daily && <DailyReview card={daily} lang={lang} onDaily={onDaily} />}
      {main.map((unit, u) => renderUnit(unit, u))}
      {other.length > 0 && (
        <section className="other-sectors">
          <button
            type="button"
            className="other-toggle"
            aria-expanded={showOther}
            aria-controls="other-sectors"
            onClick={() => setShowOther((v) => !v)}
          >
            <span className="other-icons" aria-hidden>
              {other.map((unit) => {
                const id = unitSector(unit.id);
                return id ? <SectorIcon key={unit.id} id={id} size={20} /> : null;
              })}
            </span>
            <span className="other-text">
              <span className="other-nl" lang="nl">Andere sectoren</span>
              <Bi text={ui('otherSectors', lang)} />
            </span>
            <ChevronDownIcon size={24} className={`other-chev ${showOther ? 'open' : ''}`} />
          </button>
          {showOther && (
            <div id="other-sectors" className="other-units">
              <p className="muted small other-hint"><Bi text={ui('otherSectorsHint', lang)} /></p>
              {other.map((unit, i) => renderUnit(unit, main.length + i))}
            </div>
          )}
        </section>
      )}
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
      <CoachLinks />
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

/**
 * For coaches (Dutch only): a link per unit that opens the path at that topic, to send a learner
 * by WhatsApp or e-mail. Shares with the phone's share sheet, or copies the link.
 */
function CoachLinks() {
  const [copied, setCopied] = useState<string | null>(null);
  const share = async (unit: Unit) => {
    const url = unitLink(unit.id);
    try {
      if (navigator.share) {
        await navigator.share({ title: `Vloertaal: ${unit.titleNl}`, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(unit.id);
    } catch {
      // Share sheet closed, or no clipboard access: show the link to copy by hand.
      window.prompt('Kopieer deze link:', url);
    }
  };
  return (
    <details className="coach-links">
      <summary lang="nl">Voor begeleiders: stuur een link naar een onderwerp</summary>
      <p className="muted small" lang="nl">
        Met de link opent Vloertaal meteen bij dat onderwerp. Elk onderwerp kan bij de eerste les beginnen.
        Een nieuwe gebruiker kiest eerst nog een taal en vult het wachtwoord in.
      </p>
      <ul>
        {units.map((unit) => (
          <li key={unit.id}>
            <WordPicture className="coach-icon" id={unitIcons[unit.id] ?? ''} emoji={unit.emoji} size={32} />
            <span className="coach-title" lang="nl">{unit.titleNl}</span>
            <button type="button" className="coach-share" onClick={() => share(unit)}>
              {copied === unit.id ? <><CheckIcon size={16} /> Gekopieerd</> : 'Deel link'}
            </button>
          </li>
        ))}
      </ul>
    </details>
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
      <PhraseList lang={lang} />
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

export function Settings({ progress, lang, onLang, onSector, onTheme, onVoice, onQuiet, onReset, onAbout, onBack, access = 'full', onAccess, focusUpgrade, onRestore, onCertificate }: {
  progress: Progress;
  /** Opens a certificate from "Mijn certificaten". */
  onCertificate?: (unitId: string) => void;
  /** "Bewaar je voortgang": a backup was put back (merged or replaced). */
  onRestore?: (next: Progress) => void;
  lang?: HelpLanguage;
  onLang: (code: LangCode | null) => void;
  onSector: (sector: SectorChoice) => void;
  onTheme: (theme: ThemeChoice) => void;
  onVoice: (voice: string | null) => void;
  /** "Without sound" on (true) or off. */
  onQuiet: (quiet: boolean) => void;
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
      <LanguagePicker current={progress.helpLang} onPick={onLang} showBeta compact lang={lang} />
      {lang && !lang.reviewed && (
        <p className="beta-note">
          <span className="beta-chip" lang="en">beta</span>
          <Bi text={ui('beta', lang)} />
        </p>
      )}

      <h2 className="settings-sector-title">
        <span lang="nl">Waar werk je?</span>
        <Bi text={ui('chooseSector', lang)} />
      </h2>
      <SectorPicker current={progress.sector} lang={lang} onPick={onSector} compact />

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

      {/* A website can't see the phone's mute switch, so the learner says it here (or in a lesson). */}
      <h2 className="settings-sector-title">
        <span lang="nl">Geluid</span>
        <Bi text={ui('sound', lang)} />
      </h2>
      <div className="segmented segmented-2" role="radiogroup" aria-label={ui('sound').en}>
        {([false, true] as const).map((quiet) => {
          const picked = Boolean(progress.quiet) === quiet;
          return (
            <button
              key={String(quiet)}
              type="button"
              role="radio"
              aria-checked={picked}
              className={picked ? 'picked' : ''}
              onClick={() => onQuiet(quiet)}
            >
              {quiet ? <SpeakerOffIcon size={26} /> : <SpeakerIcon size={26} />}
              <Bi text={ui(quiet ? 'withoutSound' : 'soundOn', lang)} />
            </button>
          );
        })}
      </div>
      <p className="muted small sound-hint"><Bi text={ui('quietHint', lang)} /></p>

      <h2><Bi text={ui('voice', lang)} /></h2>
      <VoicePicker current={progress.voice} lang={lang} onPick={onVoice} />
      {/* Preview: settings work as usual; unlocking the full version sits below them. */}
      {access === 'preview' && onAccess && <UpgradeCard lang={lang} onAccess={onAccess} />}
      <ReminderCard lang={lang} />
      {/* Also offered once after the first day's milestone; always here. */}
      <InstallCard lang={lang} />
      {onRestore && <BackupCard progress={progress} lang={lang} onRestore={onRestore} />}
      {onCertificate && <CertificatesCard progress={progress} lang={lang} onOpen={onCertificate} />}
      <CountingCard lang={lang} />
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

function StatCard({ tone, label, icon, value, final, done, foot, badge }: {
  /** A stamp on the card's corner (FOUTLOOS). */
  badge?: React.ReactNode;
  tone: 'gold' | 'green' | 'orange';
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
      <div className="stat-card-head"><Bi text={label} /></div>
      <div className="stat-card-body" aria-hidden>
        {icon}
        <span className="stat-card-value" dir="ltr">{value}</span>
      </div>
      {foot && <Bi className="stat-card-foot" text={foot} />}
      {badge}
    </div>
  );
}

export function Result({ right, total, newWords, words, lang, onDone, repeated, stronger, next }: {
  /** After today's review: how many words came back (shown instead of new words). */
  repeated?: number;
  /** After today's review: how many words went up a box ("N woorden sterker"). */
  stronger?: number;
  /** The next lesson on the course (its title, and its id for the picture), shown as an arrow,
   *  the lesson's picture and its title. */
  next?: Bilingual & { id?: string };
  /** Graded exercises right the first time, out of all graded ones. */
  right: number;
  total: number;
  /** Words this lesson added to the learner's list, and the list's size now. */
  newWords: number;
  words: number;
  lang?: HelpLanguage;
  onDone: () => void;
}) {
  // The cards pop in together with their final numbers: a still frame never shows "0 / 11"
  // or "+0" (the numbers are what the learner came for, not a counter).
  const shownRight = right;
  const shownNew = newWords;
  const fill = (t: Bilingual, n: number): Bilingual => ({ ...t, en: t.en.replace('{n}', String(n)), help: t.help?.replace('{n}', String(n)) });
  // A tap or Enter meant for the last exercise must not skip this screen: both are ignored for
  // a moment (shorter with reduced motion), and the button fades in after about a second.
  const still = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const ready = useRef(false);
  useEffect(() => {
    const t = window.setTimeout(() => { ready.current = true; }, still ? 400 : 700);
    return () => window.clearTimeout(t);
  }, [still]);
  const done = () => { if (ready.current) onDone(); };
  // Enter continues, as after every exercise (the screen has no other input).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !(e.target instanceof HTMLButtonElement) && ready.current) onDone();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onDone]);
  const perfect = total > 0 && right === total;
  const rtl = lang?.dir === 'rtl';
  // The next lesson's first word with a picture, as on its card on the path.
  const nextPic = next?.id ? findLesson(next.id)?.lesson.words.find(hasPicture) : undefined;
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
        <div className="result-stats" dir={rtl ? 'rtl' : undefined}>
          <StatCard
            tone="green"
            label={ui('rightFirstTime', lang)}
            icon={<CheckIcon size={30} />}
            value={`${shownRight} / ${total}`}
            final={`${right} / ${total}`}
            done={shownRight === right}
            // Every answer right the first time: a blue-ink rubber stamp inside the card, and
            // "No mistakes" in the help language in the card's free space.
            foot={perfect ? ui('noMistakes', lang) : undefined}
            badge={perfect ? (
              <span className="stamp flawless-stamp" aria-hidden>
                <span className="stamp-word" lang="nl">Foutloos</span>
              </span>
            ) : undefined}
          />
          <StatCard
            tone="gold"
            label={repeated !== undefined ? ui('reviewToday', lang) : ui('newWords', lang)}
            icon={repeated !== undefined ? <CalendarIcon size={30} /> : <CrateIcon size={30} />}
            value={repeated !== undefined ? `${repeated}` : `+${shownNew}`}
            // The total is said, not printed: the top bar's crate shows it on the path.
            final={`${repeated !== undefined ? repeated : `+${newWords}`} · ${fill(ui('wordsLearnedN'), words).en}`}
            done={repeated !== undefined || shownNew === newWords}
          />
        </div>
        {/* After the review: how many words got stronger, the number big, the help language
            large and English small (no Dutch sentence). */}
        {stronger !== undefined && stronger > 0 && (
          <p className="result-line result-stronger" aria-label={fill(ui('wordsStrongerN'), stronger).en}>
            <span className="stronger-n" aria-hidden><span className="stronger-arrow">▲</span>{stronger}</span>
            <Bi text={withoutN(ui('wordsStrongerN', lang))} />
          </p>
        )}
        {/* What comes next: an arrow, the lesson's picture and its title (no Dutch "Volgende:"). */}
        {next && (
          <p className="result-line result-next" dir={rtl ? 'rtl' : undefined} aria-label={`${ui('nextUp').en}: ${next.en}`}>
            <span className="result-next-arrow" aria-hidden><ArrowIcon size={22} /></span>
            {nextPic && <WordPicture className="result-next-pic" id={nextPic.id} emoji={nextPic.emoji} size={44} />}
            <Bi className="result-next-title" text={next} />
          </p>
        )}
      </main>
      <footer className="player-foot">
        <div className="foot-inner">
          <div className="foot-actions">
            <button type="button" className="btn btn-go btn-primary result-go" onClick={done} dir={rtl ? 'rtl' : undefined}>
              <Bi className="btn-label" text={ui('continue', lang)} />
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
  // A tip shows once its lesson is done, or when its lesson is the next one on the own course.
  const visible = cultureTips.filter((t) =>
    Boolean(progress.completed[t.lessonId]) || isNextInCourse(t.lessonId, progress.completed, access, progress.sector));
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
