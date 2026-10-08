import { useEffect, useRef, useState } from 'react';
import { findLesson, learnedWords } from './content/curriculum';
import { getHelpLanguage } from './i18n';
import type { LangCode } from './i18n/types';
import { setPreferredVoice, setQuietAudio } from './lib/audio';
import { applyTheme } from './lib/theme';
import { Admin } from './components/Admin';
import { LessonPlayer, type LessonResult } from './components/LessonPlayer';
import { About, BottomNav, Onboarding, Path, Phrasebook, Result, Settings, Tips, TopBar, WordsHub, type Tab } from './components/Screens';
import { Milestone } from './components/Milestone';
import { Gate } from './components/Gate';
import { SectorScreen } from './components/Sector';
import type { SectorChoice } from './content/sectors';
import { type Access, lessonAllowed, loadAccess, saveAccess } from './lib/access';
import { takeLinkedUnit } from './lib/unitLink';
import { completeDaily, completeLesson, currentStreak, dayKey, emptyProgress, loadProgress, saveProgress, streakWentUp } from './lib/progress';
import { DAILY_ID, addLessonWords, applyReview, dailyLesson, dailyWordIds, dueIds, seedCards } from './lib/spaced';

type View =
  | { name: 'home' }
  /** ids: the words of today's review (lessonId DAILY_ID), fixed when it starts. */
  | { name: 'lesson'; lessonId: string; review: boolean; ids?: string[] }
  /** streakUp: the day streak reached this number with this lesson, so the milestone follows. */
  | { name: 'result'; right: number; total: number; newWords: number; words: number; streakUp?: number; repeated?: number }
  | { name: 'streak'; streak: number }
  | { name: 'words' }
  | { name: 'phrasebook' }
  | { name: 'tips' }
  /** upgrade: opened from a locked unit, so the unlock card is scrolled into view. */
  | { name: 'settings'; upgrade?: boolean }
  | { name: 'about' }
  | { name: 'admin' };

const HOME: View = { name: 'home' };

/** What App keeps in history.state: the screen, and how many screens deep it is (0 = home). */
interface Entry { view: View; depth: number }
const current = (): Entry | null => {
  const st = history.state as Partial<Entry> | null;
  return st && st.view ? (st as Entry) : null;
};
/** After a reload: back on the screen you were on, but a lesson or its result starts over at home. */
const restored = (): View => {
  const v = current()?.view;
  return !v || v.name === 'lesson' || v.name === 'result' || v.name === 'streak' || v.name === 'admin' ? HOME : v;
};
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
/** A coach link (?unit=pay) asks to open the path at that unit; read once at start. */
const linkedUnit = takeLinkedUnit();

export default function App() {
  const [progress, setProgress] = useState(loadProgress);
  const [access, setAccess] = useState<Access | null>(loadAccess);
  const grant = (a: Access) => { saveAccess(a); setAccess(a); };
  const [view, setView] = useState<View>(() => adminRequested() ? { name: 'admin' } : linkedUnit ? HOME : restored());
  /** The unit to show first on the path (from a coach link), until the path has shown it. */
  const [focusUnit, setFocusUnit] = useState<string | null>(linkedUnit);
  /** Bumped when the system Back button is pressed in a lesson (the lesson asks before quitting). */
  const [lessonBack, setLessonBack] = useState(0);
  const viewRef = useRef(view);
  viewRef.current = view;
  /** Set while the app itself goes back out of a lesson, so that Back is not intercepted. */
  const leaving = useRef(false);

  /*
   * History: home is depth 0. Opening a screen pushes an entry, so the phone's Back button
   * returns to the previous screen instead of leaving the app. Screens that follow each other
   * without a way back (lesson → result → streak) replace their entry, so Back from the result
   * goes home and no junk entries pile up.
   */
  const go = (next: View) => {
    history.pushState({ view: next, depth: (current()?.depth ?? 0) + 1 } satisfies Entry, '');
    setView(next);
  };
  const replace = (next: View) => {
    leaving.current = false;
    history.replaceState({ view: next, depth: current()?.depth ?? 0 } satisfies Entry, '');
    setView(next);
  };
  /** Bottom bar: Route is home; Hulp, Instellingen and Over sit one level above it, so Back from either
   *  returns to Route and switching between them doesn't stack entries. */
  const tab = (t: Tab) => {
    const next: View =
      t === 'words' ? { name: 'words' } : t === 'me' ? { name: 'settings' } : t === 'about' ? { name: 'about' } : HOME;
    if (next.name === viewRef.current.name) return;
    if (t === 'route') back();
    else if (viewRef.current.name === 'home') go(next);
    else replace(next);
  };
  /** Back to the previous screen (as the Back button would), or home when there is none. */
  const back = () => {
    if ((current()?.depth ?? 0) > 0) history.back();
    else replace(HOME);
  };

  useEffect(() => {
    if (!current() && !adminRequested()) history.replaceState({ view: HOME, depth: 0 } satisfies Entry, '');
    const onPop = () => {
      if (adminRequested()) return; // #beheer: the hashchange handler opens the admin page
      if (viewRef.current.name === 'lesson' && !leaving.current) {
        // Stay in the lesson (put its entry back) and let it ask "Stop this lesson?".
        const lesson = viewRef.current;
        history.pushState({ view: lesson, depth: (current()?.depth ?? 0) + 1 } satisfies Entry, '');
        setLessonBack((n) => n + 1);
        return;
      }
      leaving.current = false;
      const v = current()?.view ?? HOME;
      // A finished lesson's entry was replaced by its result; never step back into a lesson.
      setView(v.name === 'lesson' || v.name === 'result' || v.name === 'streak' ? HOME : v);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // The owner's hidden page opens with #beheer in the address.
  useEffect(() => {
    const onHash = () => { if (adminRequested()) setView({ name: 'admin' }); };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const lang = getHelpLanguage(progress.helpLang);

  useEffect(() => { saveProgress(progress); }, [progress]);
  // Learners from before "Herhaal vandaag" get cards for the words they already learned.
  useEffect(() => {
    if (!progress.cards) setProgress((p) => (p.cards ? p : { ...p, cards: seedCards(p.completed, dayKey(new Date())) }));
  }, [progress.cards]);
  useEffect(() => { setPreferredVoice(progress.voice); }, [progress.voice]);
  // Set during render, not in an effect: a child's effect (an exercise that would say its word)
  // runs before the parent's, and must already know that sound is off.
  setQuietAudio(Boolean(progress.quiet));
  const setQuiet = (quiet: boolean) => setProgress((p) => ({ ...p, quiet }));
  useEffect(() => { applyTheme(progress.theme); }, [progress.theme]);
  useEffect(() => { window.scrollTo(0, 0); }, [view.name]);
  // A preview never plays a later unit (e.g. via Back/Forward into an old entry): go home.
  useEffect(() => {
    if (view.name === 'lesson' && access && !lessonAllowed(view.lessonId, access)) replace(HOME);
  });

  const setLang = (code: LangCode | null) => setProgress((p) => ({ ...p, helpLang: code, onboarded: true }));
  const setSector = (sector: SectorChoice) => setProgress((p) => ({ ...p, sector }));

  if (view.name === 'admin') {
    return <Admin onBack={() => { history.replaceState({ view: HOME, depth: 0 } satisfies Entry, '', location.pathname); setView(HOME); }} />;
  }

  // First run: the language comes first (an app to learn Dutch can't start in Dutch), then the
  // door in English plus that language, then the sector. The admin page above stays reachable
  // with #beheer.
  if (!progress.onboarded) return <Onboarding onDone={setLang} />;
  if (!access) {
    return <Gate lang={lang} onAccess={grant} onLanguage={() => setProgress((p) => ({ ...p, onboarded: false }))} />;
  }
  // Asked once (also for learners from before the sector choice); Settings can change it.
  if (progress.sector === undefined) return <SectorScreen lang={lang} onDone={setSector} />;

  switch (view.name) {
    case 'lesson': {
      const daily = view.lessonId === DAILY_ID;
      const found = daily ? { lesson: dailyLesson(view.ids ?? []) } : findLesson(view.lessonId);
      // A preview never plays a later unit, whatever the progress or history says.
      if (!found || !found.lesson.words.length || !lessonAllowed(view.lessonId, access)) return null;
      const finish = ({ accuracy, review, right, total, words: results }: LessonResult) => {
        const now = new Date();
        const today = dayKey(now);
        const cards = progress.cards ?? {};
        const next = daily
          ? { ...completeDaily(progress, accuracy, now), cards: applyReview(cards, results, today) }
          : { ...completeLesson(progress, view.lessonId, accuracy, review, now), cards: addLessonWords(cards, found.lesson.words, results, today) };
        setProgress(next);
        const streakUp = streakWentUp(progress, next) ? next.streak : undefined;
        const before = learnedWords(progress.completed).size;
        const words = learnedWords(next.completed).size;
        replace({ name: 'result', right, total, newWords: words - before, words, streakUp, repeated: daily ? found.lesson.words.length : undefined });
      };
      return (
        <LessonPlayer
          key={view.lessonId}
          lesson={found.lesson}
          review={view.review}
          lang={lang}
          backSignal={lessonBack}
          quiet={Boolean(progress.quiet)}
          onQuiet={setQuiet}
          onQuit={() => { leaving.current = true; back(); }}
          onFinish={finish}
        />
      );
    }
    case 'result':
      return (
        <Result
          right={view.right}
          total={view.total}
          newWords={view.newWords}
          words={view.words}
          repeated={view.repeated}
          lang={lang}
          onDone={() => (view.streakUp ? replace({ name: 'streak', streak: view.streakUp }) : back())}
        />
      );
    case 'streak':
      return <Milestone streak={view.streak} lang={lang} onDone={back} />;
    case 'tips':
      return <Tips progress={progress} lang={lang} onBack={back} access={access} />;
    case 'about':
      return (
        <>
          <About lang={lang} />
          <BottomNav current="about" onTab={tab} />
        </>
      );
    case 'phrasebook':
      return <Phrasebook lang={lang} onBack={back} />;
    case 'settings':
      return (
        <>
          <Settings
            progress={progress}
            lang={lang}
            onLang={setLang}
            onSector={setSector}
            onTheme={(theme) => setProgress((p) => ({ ...p, theme }))}
            onVoice={(voice) => setProgress((p) => ({ ...p, voice }))}
            onQuiet={setQuiet}
            onReset={() => {
              // Keep look, voice, sound and sector; only learning progress is wiped.
              setProgress((p) => ({ ...emptyProgress, theme: p.theme, voice: p.voice, quiet: p.quiet, sector: p.sector }));
              back();
            }}
            onAbout={() => tab('about')}
            access={access}
            onAccess={grant}
            focusUpgrade={view.upgrade}
          />
          <BottomNav current="me" onTab={tab} />
        </>
      );
    case 'words':
      return (
        <>
          <WordsHub
            lang={lang}
            onPhrasebook={() => go({ name: 'phrasebook' })}
            onTips={() => go({ name: 'tips' })}
          />
          <BottomNav current="words" onTab={tab} />
        </>
      );
    default:
      return (
        <>
          <TopBar
            streak={currentStreak(progress, new Date())}
            words={learnedWords(progress.completed).size}
            lang={lang}
            onLanguage={() => tab('me')}
          />
          <Path
            progress={progress}
            lang={lang}
            onStart={(lessonId, review) => go({ name: 'lesson', lessonId, review })}
            dueToday={dueIds(progress.cards ?? {}, dayKey(new Date())).length}
            onDaily={() => go({ name: 'lesson', lessonId: DAILY_ID, review: true, ids: dailyWordIds(progress.cards ?? {}, dayKey(new Date())) })}
            onAbout={() => tab('about')}
            access={access}
            onUpgrade={() => go({ name: 'settings', upgrade: true })}
            focusUnit={focusUnit}
            onFocused={() => setFocusUnit(null)}
          />
          <BottomNav current="route" onTab={tab} />
        </>
      );
  }
}

function adminRequested(): boolean {
  return location.hash === '#beheer';
}
