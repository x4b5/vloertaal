import { findLesson } from '../content/curriculum';
import { LessonPlayer } from '../components/LessonPlayer';
import { getHelpLanguage } from '../i18n';
import type { LangCode } from '../i18n/types';
import { buildTiles, type Exercise } from '../lib/exercises';
import { createRng } from '../lib/random';

/**
 * Development-only page that opens one exercise in a fixed state, so screens can be
 * screenshotted reproducibly: /?shot=dutch|meaning|build&lang=ar
 * Options are always in lesson order, so tests know which one is right.
 */
export function ShotHarness({ shot, lang }: { shot: string; lang: string | null }) {
  const { lesson } = findLesson('l.gear')!;
  const [helm, handschoenen, schoenen, hesje] = lesson.words;
  const exercises: Record<string, Exercise> = {
    dutch: { kind: 'dutch', word: helm, options: [hesje, handschoenen, helm] },
    meaning: { kind: 'meaning', word: hesje, options: [handschoenen, schoenen, hesje] },
    build: { kind: 'build', sentence: lesson.sentences[0], tiles: buildTiles(lesson.sentences[0], lesson, createRng(3)) },
  };
  const ex = exercises[shot] ?? exercises.dutch;
  // A few intro exercises in front would move the progress bar; pad so it sits at ~40%.
  const pad: Exercise[] = Array.from({ length: 3 }, () => ex);
  return (
    <LessonPlayer
      lesson={lesson}
      review
      lang={getHelpLanguage(lang as LangCode)}
      exercises={[...pad, ex, ...pad]}
      startAt={pad.length}
      onQuit={() => {}}
      onFinish={() => {}}
    />
  );
}
