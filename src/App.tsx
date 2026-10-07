import { useEffect, useState } from 'react';
import { findLesson } from './content/curriculum';
import { getHelpLanguage } from './i18n';
import type { LangCode } from './i18n/types';
import { setPreferredVoice } from './lib/audio';
import { applyTheme } from './lib/theme';
import { LessonPlayer, type LessonResult } from './components/LessonPlayer';
import { Onboarding, Path, Phrasebook, Result, Settings, TopBar } from './components/Screens';
import { completeLesson, currentStreak, emptyProgress, loadProgress, saveProgress, xpFor } from './lib/progress';

type View =
  | { name: 'home' }
  | { name: 'lesson'; lessonId: string; review: boolean }
  | { name: 'result'; accuracy: number; xp: number }
  | { name: 'phrasebook' }
  | { name: 'settings' };

export default function App() {
  const [progress, setProgress] = useState(loadProgress);
  const [view, setView] = useState<View>({ name: 'home' });
  const lang = getHelpLanguage(progress.helpLang);

  useEffect(() => { saveProgress(progress); }, [progress]);
  useEffect(() => { setPreferredVoice(progress.voice); }, [progress.voice]);
  useEffect(() => { applyTheme(progress.theme); }, [progress.theme]);
  useEffect(() => { window.scrollTo(0, 0); }, [view.name]);

  const setLang = (code: LangCode | null) => setProgress((p) => ({ ...p, helpLang: code, onboarded: true }));

  if (!progress.onboarded) return <Onboarding onDone={setLang} />;

  switch (view.name) {
    case 'lesson': {
      const found = findLesson(view.lessonId);
      if (!found) return null;
      const finish = ({ accuracy, review }: LessonResult) => {
        setProgress((p) => completeLesson(p, view.lessonId, accuracy, review, new Date()));
        setView({ name: 'result', accuracy, xp: xpFor(accuracy, review) });
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
      return <Result accuracy={view.accuracy} xp={view.xp} lang={lang} onDone={() => setView({ name: 'home' })} />;
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

