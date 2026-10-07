import { useEffect, useRef, useState } from 'react';
import { findLesson } from './content/curriculum';
import { getHelpLanguage } from './i18n';
import type { LangCode } from './i18n/types';
import { setPreferredVoice } from './lib/audio';
import { applyTheme } from './lib/theme';
import { Admin } from './components/Admin';
import { LessonPlayer, type LessonResult } from './components/LessonPlayer';
import { About, Onboarding, Path, Phrasebook, Result, Settings, Tips, TopBar } from './components/Screens';
import { Milestone } from './components/Milestone';
import { completeLesson, currentStreak, emptyProgress, loadProgress, saveProgress, streakWentUp, xpFor } from './lib/progress';

type View =
  | { name: 'home' }
  | { name: 'lesson'; lessonId: string; review: boolean }
  /** streakUp: the day streak reached this number with this lesson, so the milestone follows. */
  | { name: 'result'; accuracy: number; xp: number; streakUp?: number }
  | { name: 'streak'; streak: number }
  | { name: 'phrasebook' }
  | { name: 'tips' }
  | { name: 'settings' }
  | { name: 'about'; from: 'home' | 'settings' }
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

export default function App() {
  const [progress, setProgress] = useState(loadProgress);
  const [view, setView] = useState<View>(() => adminRequested() ? { name: 'admin' } : restored());
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
  useEffect(() => { setPreferredVoice(progress.voice); }, [progress.voice]);
  useEffect(() => { applyTheme(progress.theme); }, [progress.theme]);
  useEffect(() => { window.scrollTo(0, 0); }, [view.name]);

  const setLang = (code: LangCode | null) => setProgress((p) => ({ ...p, helpLang: code, onboarded: true }));

  if (view.name === 'admin') {
    return <Admin onBack={() => { history.replaceState({ view: HOME, depth: 0 } satisfies Entry, '', location.pathname); setView(HOME); }} />;
  }

  if (!progress.onboarded) return <Onboarding onDone={setLang} />;

  switch (view.name) {
    case 'lesson': {
      const found = findLesson(view.lessonId);
      if (!found) return null;
      const finish = ({ accuracy, review }: LessonResult) => {
        const next = completeLesson(progress, view.lessonId, accuracy, review, new Date());
        setProgress(next);
        const streakUp = streakWentUp(progress, next) ? next.streak : undefined;
        replace({ name: 'result', accuracy, xp: xpFor(accuracy, review), streakUp });
      };
      return (
        <LessonPlayer
          key={view.lessonId}
          lesson={found.lesson}
          review={view.review}
          lang={lang}
          backSignal={lessonBack}
          onQuit={() => { leaving.current = true; back(); }}
          onFinish={finish}
        />
      );
    }
    case 'result':
      return (
        <Result
          accuracy={view.accuracy}
          xp={view.xp}
          lang={lang}
          onDone={() => (view.streakUp ? replace({ name: 'streak', streak: view.streakUp }) : back())}
        />
      );
    case 'streak':
      return <Milestone streak={view.streak} lang={lang} onDone={back} />;
    case 'tips':
      return <Tips progress={progress} lang={lang} onBack={back} />;
    case 'about':
      return <About lang={lang} onBack={back} />;
    case 'phrasebook':
      return <Phrasebook lang={lang} onBack={back} />;
    case 'settings':
      return (
        <Settings
          progress={progress}
          lang={lang}
          onLang={setLang}
          onTheme={(theme) => setProgress((p) => ({ ...p, theme }))}
          onVoice={(voice) => setProgress((p) => ({ ...p, voice }))}
          onReset={() => {
            // Keep look and voice; only learning progress is wiped.
            setProgress((p) => ({ ...emptyProgress, theme: p.theme, voice: p.voice }));
            back();
          }}
          onAbout={() => go({ name: 'about', from: 'settings' })}
          onBack={back}
        />
      );
    default:
      return (
        <>
          <TopBar
            streak={currentStreak(progress, new Date())}
            xp={progress.xp}
            lang={lang}
            onSettings={() => go({ name: 'settings' })}
          />
          <Path
            progress={progress}
            lang={lang}
            onStart={(lessonId, review) => go({ name: 'lesson', lessonId, review })}
            onPhrasebook={() => go({ name: 'phrasebook' })}
            onTips={() => go({ name: 'tips' })}
            onAbout={() => go({ name: 'about', from: 'home' })}
          />
        </>
      );
  }
}

function adminRequested(): boolean {
  return location.hash === '#beheer';
}
