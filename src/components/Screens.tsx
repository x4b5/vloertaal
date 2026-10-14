import { breakable } from '../lib/dutch';
import { LessonCelebration } from './Celebrate';
import { aboutSections } from '../content/about';
import { cultureTips } from '../content/culture';
import { findLesson } from '../content/curriculum';
import type { DailyCard } from '../lib/spaced';
import { fillCount, fillN, getHelpLanguage, gloss, helpLanguages, ui, uiCount, withoutN, type Bilingual, said } from '../i18n';
import type { HelpLanguage, LangCode } from '../i18n/types';
import { useEffect, useRef, useState } from 'react';
import { applyEnglish } from '../lib/english';
import { isNextInCourse } from '../lib/exercises';
import type { Access } from '../lib/access';
import type { Progress } from '../lib/progress';
import { Bi, HelpText } from './Bi';
import { LogoMark, Wordmark } from './Logo';
import { WordPicture } from '../pictures';
import { hasPicture } from '../lib/wordPicture';
import {
  AlertIcon,
  ArrowIcon,
  CalendarIcon,
  CrateIcon,
  CheckIcon,
  ChevronIcon,
  LifebuoyIcon,
  EarIcon,
  RouteIcon,
  GearIcon,
  GlobeIcon,
  InfoIcon,
  SpeakerOffIcon,
} from './Icons';
import { SpeakButton } from './SpeakButton';
import { useVoices } from './useVoices';
import { ChoiceCards } from './Choice';
import { phoneHelpLang } from '../lib/langGuess';
import { FlameIcon } from './StreakArt';
import { Flag } from './Flags';
import { PhraseList } from './Phrases';
import { ChromeBack, ChromeHead } from './ChromeBack';

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
  const betaHelp = lang?.ui.inReview ?? lang?.ui.beta;
  const option = (code: LangCode | null, native: string, english: string, dir?: 'ltr' | 'rtl', beta = false, englishHelp?: string) => (
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
        {/* With a help language chosen (Settings), the English name is support only: hidden
            with English off, like every other English line. */}
        {englishHelp
          ? <HelpText className="lang-en" text={englishHelp} lang={lang!} />
          : <span className={`lang-en ${lang ? 'en-support' : ''}`} lang="en">{english}</span>}
        {beta && (
          <span className="lang-beta-tag">
            {betaHelp ? <HelpText className="lang-beta-help" text={betaHelp} lang={lang!} /> : <span className="lang-beta-help" lang="en">{ui('inReview').en}</span>}
            <span className={`lang-beta ${betaHelp ? 'en-support' : ''}`} lang="en">beta</span>
          </span>
        )}
      </span>
      {current === code && <CheckIcon size={20} className="lang-check" />}
    </button>
  );
  return (
    <div className={`lang-grid ${compact ? 'lang-grid-compact' : ''}`}>
      {helpLanguages.map((l) => option(l.code, l.nativeName, l.name, l.dir, showBeta && !l.reviewed))}
      {option(null, 'English', ui('englishOnly').en, 'ltr', false, lang?.ui.englishOnly)}
    </div>
  );
}

/**
 * First run, before anything else: the language you get help in. The phone's own languages give
 * a guess ("Polski?" [Yes] [Other language]); "Other language", or no guess, shows the list of
 * all ten, each name in its own script (the list is the one place with more than three choices).
 * The password, the gender question and the sector follow on their own pages (App.tsx).
 */
export function Onboarding({ onDone, guess = phoneHelpLang(), startWithList = false }: {
  onDone: (code: LangCode | null) => void;
  /** The guessed help language (from navigator.languages); null = no guess, the list right away. */
  guess?: LangCode | null;
  /** Back from the password page: open on the list (the guess was already seen). */
  startWithList?: boolean;
}) {
  const [list, setList] = useState(startWithList || !guess);
  // Nothing is chosen yet: the English stays next to every line.
  useEffect(() => { applyEnglish(null); }, []);
  const g = guess ? getHelpLanguage(guess) : undefined;
  if (list || !g) {
    return (
      <div className="screen onboarding max3-page">
        {g && (
          <ChromeHead onBack={() => setList(false)} />
        )}
        <div className="hero">
          <h1 className="hero-logo"><LogoMark size={52} /><Wordmark /></h1>
          <p className="tagline">{ui('appTagline').en}</p>
        </div>
        <h2 className="onboarding-title">{ui('chooseLanguage').en}</h2>
        <LanguagePicker onPick={onDone} />
      </div>
    );
  }
  const q = g.dir === 'rtl' ? '\u061f' : '?';
  return (
    <div className="screen onboarding max3-page lang-guess">
      <div className="hero">
        <h1 className="hero-logo"><LogoMark size={52} /><Wordmark /></h1>
        <p className="tagline">{ui('appTagline').en}</p>
      </div>
      <h2 className="lang-guess-q">
        <Flag code={g.code} width={64} />
        <span lang={g.code} dir={g.dir}>{g.nativeName}{q}</span>
      </h2>
      <ChoiceCards
        label={said(ui('chooseLanguage', g))}
        onPick={(id) => (id === 'yes' ? onDone(g.code) : setList(true))}
        options={[
          { id: 'yes', text: ui('langGuessYes', g), picture: <CheckIcon size={30} /> },
          { id: 'other', text: ui('langGuessOther', g), picture: <GlobeIcon size={30} />, next: true },
        ]}
      />
    </div>
  );
}

export function TopBar({ streak, words, lang, done = false, quiet = false }: {
  streak: number;
  /** "Without sound" is on: a small muted speaker beside the logo says so (not a button). */
  quiet?: boolean;
  /** Today has a finished lesson or review: the flame is lit. Until then a grey outline. */
  done?: boolean;
  /** Words learned so far (see learnedWords). */
  words: number;
  lang?: HelpLanguage;
  /** Not used any more (the flag left the home header); kept so older callers still compile. */
  onLanguage?: () => void;
}) {
  // The stats are a picture and a number; the unit is in the help language (when there is
  // room), and the spoken label says it in the help language (English only without one).
  const wordsText = fillCount('wordsLearnedN', words, lang);
  const wordsLabel = said(wordsText);
  const streakText = ui('dayStreak', lang);
  const streakLabel = `${streak} ${said(streakText)}${!done && streak > 0 ? ` · ${said(ui('stillToDo', lang))}` : ''}`;
  const daysUnit = uiCount('daysUnit', streak, lang);
  const wordsUnit = uiCount('wordsUnit', words, lang);
  // Right to left (Arabic, Persian, Dari): the logo moves to the right, the stats and the flag to the left.
  return (
    <header className="topbar" dir={lang?.dir === 'rtl' ? 'rtl' : undefined}>
      <span className="brand">
        <LogoMark size={36} />
        <Wordmark className="topbar-wordmark" />
      </span>
      {quiet && (
        <span className="sound-off-mark" role="img" aria-label={`${said(ui('withoutSound', lang))}${lang?.ui.withoutSound ? ` · ${ui('withoutSound', lang).help}` : ''}`} title={ui('withoutSound', lang).help ?? said(ui('withoutSound', lang))}>
          <SpeakerOffIcon size={18} />
        </span>
      )}
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
      {/* No language flag here: the help language is in Settings (it was a duplicate tap). */}
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
    <nav className="bottom-nav" aria-label={said(ui('mainMenu', lang))} dir={lang?.dir === 'rtl' ? 'rtl' : undefined}>
      {TABS.map(({ tab, nl, key, Icon }) => {
        const word = ui(key, lang);
        return (
          <button
            key={tab}
            type="button"
            className={`nav-tab ${current === tab ? 'nav-tab-on' : ''}`}
            aria-current={current === tab ? 'page' : undefined}
            aria-label={`${nl} · ${said(word)}`}
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

/**
 * "Herhaal vandaag" on the path: one compact card (about 72 px), so the next lesson's Start stays
 * in view. Words due: the calendar, the number big, "Review today" in the help language (English
 * small) and a chevron; the whole card starts the review. Done today: a calm green check badge,
 * "Done for today", and a real "Extra round" button when words are left over. After the first
 * lesson: "Tomorrow your first words come back". The Dutch name is in the spoken label only; no
 * "label: n" strings, so nothing wraps or reorders in right-to-left text.
 */
export function DailyReview({ card, lang, onDaily }: { card: DailyCard; lang?: HelpLanguage; onDaily?: () => void }) {
  const rtl = lang?.dir === 'rtl';
  if (card.state === 'due') {
    return (
      <button
        type="button"
        className="daily-card daily-due"
        dir={rtl ? 'rtl' : undefined}
        onClick={onDaily}
        aria-label={`Herhaal vandaag · ${said(ui('reviewToday', lang))}: ${said(fillN(ui('reviewTodayN', lang), card.due))}`}
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
      aria-label={`Herhaal vandaag · ${said(ui('reviewToday', lang))}${done && card.tomorrow > 0 ? ` · ${said(fillCount('tomorrowN', card.tomorrow, lang))}` : ''}`}
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

/** "About Vloertaal" (the "Over" tab): what the app is, who it is for, privacy and voice credits,
 *  and one link to the page for coaches. */
export function About({ lang, onCoaches }: { lang?: HelpLanguage; /** Opens "Voor begeleiders" (the topic links to send). */ onCoaches?: () => void }) {
  const { recorded } = useVoices();
  return (
    <div className="screen about">
      <div className="screen-head">
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
      {onCoaches && (
        <button type="button" className="phrase-banner about-banner coach-link" onClick={onCoaches}>
          <span className="coach-link-icon" aria-hidden>🔗</span>
          <span className="bi" lang="nl">Voor begeleiders: stuur een link naar een onderwerp</span>
          <ChevronIcon />
        </button>
      )}
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
        <ChromeBack lang={lang} onBack={onBack} />
        <h1><Bi text={ui('phrasebook', lang)} /></h1>
      </div>
      <p className="muted"><Bi text={ui('phrasebookHint', lang)} /></p>
      <PhraseList lang={lang} />
    </div>
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
    <div className={`stat-card stat-${tone} ${done ? 'stat-done' : ''}`} role="group" aria-label={`${said(label)} ${final}`}>
      <div className="stat-card-head"><Bi text={label} /></div>
      <div className="stat-card-body" aria-hidden>
        {icon}
        <span className="stat-card-value" dir="ltr">{value}</span>
      </div>
      {/* The stamp sits beside the line under the value, in the flow (never over its words);
          on a narrow card it wraps under it. */}
      {badge ? (
        <div className="stat-card-foot-row">
          {foot && <Bi className="stat-card-foot" text={foot} />}
          {badge}
        </div>
      ) : (
        foot && <Bi className="stat-card-foot" text={foot} />
      )}
    </div>
  );
}

export function Result({ right, total, newWords, words, lang, onDone, repeated, stronger, next, skipped = 0 }: {
  /** Listening exercises left out in the lesson: said on their own line, not in the score. */
  skipped?: number;
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
            {/* The Dutch stamp in the help language too (English without one). */}
            {lang?.ui.stampDone ? <HelpText className="stamp-sub" text={lang.ui.stampDone} lang={lang} /> : <span className="stamp-sub" lang="en">{ui('stampDone').en}</span>}
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
            final={`${repeated !== undefined ? repeated : `+${newWords}`} · ${said(fillCount('wordsLearnedN', words, lang))}`}
            done={repeated !== undefined || shownNew === newWords}
          />
        </div>
        {/* After the review: how many words got stronger, the number big, the help language
            large and English small (no Dutch sentence). */}
        {stronger !== undefined && stronger > 0 && (
          <p className="result-line result-stronger" aria-label={said(fillCount('wordsStrongerN', stronger, lang))}>
            <span className="stronger-n" aria-hidden><span className="stronger-arrow">▲</span>{stronger}</span>
            <Bi text={withoutN(uiCount('wordsStrongerN', stronger, lang))} />
          </p>
        )}
        {/* Listening exercises left out ("I can't listen now"): counted out, visibly. */}
        {skipped > 0 && (
          <p className="result-line result-skipped" dir={rtl ? 'rtl' : undefined}>
            <span className="result-skipped-icon" aria-hidden><EarIcon size={22} /></span>
            <Bi text={fillN(ui('skippedN', lang), skipped)} />
          </p>
        )}
        {/* What comes next: an arrow, the lesson's picture and its title (no Dutch "Volgende:"). */}
        {next && (
          <p className="result-line result-next" dir={rtl ? 'rtl' : undefined} aria-label={`${said(ui('nextUp', lang))}: ${said(next)}`}>
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
        <ChromeBack lang={lang} onBack={onBack} />
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
                  <SpeakButton text={t.phrase.nl} help={lang} />
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
