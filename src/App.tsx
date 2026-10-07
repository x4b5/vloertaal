import { useEffect, useState } from 'react';
import { findLesson } from './content/curriculum';
import { getHelpLanguage } from './i18n';
import type { LangCode } from './i18n/types';
import { setPreferredVoice } from './lib/audio';
import { applyTheme } from './lib/theme';
import { Admin } from './components/Admin';
import { LessonPlayer, type LessonResult } from './components/LessonPlayer';
import { Onboarding, Path, Phrasebook, Result, Settings, TopBar } from './components/Screens';
import { Milestone } from './components/Milestone';
import { completeLesson, currentStreak, emptyProgress, loadProgress, saveProgress, streakWentUp, xpFor } from './lib/progress';

type View =
  | { name: 'home' }
  | { name: 'lesson'; lessonId: string; review: boolean }
  /** streakUp: the day streak reached this number with this lesson, so the milestone follows. */
  | { name: 'result'; accuracy: number; xp: number; streakUp?: number }
  | { name: 'streak'; streak: number }
  | { name: 'phrasebook' }
  | { name: 'settings' }
  | { name: 'admin' };

export default function App() {
  const [progress, setProgress] = useState(loadProgress);
  const [view, setView] = useState<View>(adminRequested() ? { name: 'admin' } : { name: 'home' });

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
    return <Admin onBack={() => { history.replaceState(null, '', location.pathname); setView({ name: 'home' }); }} />;
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
        setView({ name: 'result', accuracy, xp: xpFor(accuracy, review), streakUp });
      };
      return (
        <LessonPlayer
          key={view.lessonId}
          lesson={found.lesson}
          review={view.review}
          lang={lang}
          onQuit={() => setView({ name: 'home' })}
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
          onDone={() => setView(view.streakUp ? { name: 'streak', streak: view.streakUp } : { name: 'home' })}
        />
      );
    case 'streak':
      return <Milestone streak={view.streak} lang={lang} onDone={() => setView({ name: 'home' })} />;
    case 'phrasebook':
      return <Phrasebook lang={lang} onBack={() => setView({ name: 'home' })} />;
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
            setView({ name: 'home' });
          }}
          onBack={() => setView({ name: 'home' })}
        />
      );
    default:
      return (
        <>
          <TopBar
            streak={currentStreak(progress, new Date())}
            xp={progress.xp}
            lang={lang}
            onSettings={() => setView({ name: 'settings' })}
          />
          <Path
            progress={progress}
            lang={lang}
            onStart={(lessonId, review) => setView({ name: 'lesson', lessonId, review })}
            onPhrasebook={() => setView({ name: 'phrasebook' })}
          />
        </>
      );
  }
}

function adminRequested(): boolean {
  return location.hash === '#beheer';
}
