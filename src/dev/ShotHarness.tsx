import { findLesson } from '../content/curriculum';
import { LessonPlayer } from '../components/LessonPlayer';
import { Result } from '../components/Screens';
import { Milestone } from '../components/Milestone';
import { CAST, Character, type Mood } from '../components/Characters';
import { getHelpLanguage } from '../i18n';
import type { LangCode } from '../i18n/types';
import { allReplies } from '../content/curriculum';
import { buildTiles, type Exercise } from '../lib/exercises';
import { createRng } from '../lib/random';

/**
 * Development-only page that opens one exercise in a fixed state, so screens can be
 * screenshotted reproducibly: /?shot=dutch|meaning|build|chat|result|streak&lang=ar
 * Options are always in lesson order, so tests know which one is right.
 */
export function ShotHarness({ shot, lang }: { shot: string; lang: string | null }) {
  // Lesson complete: 14 XP at 88% accuracy, as in the reference.
  if (shot === 'result') return <Result xp={14} accuracy={0.88} lang={getHelpLanguage(lang as LangCode)} onDone={() => {}} />;
  // Day-streak milestone after the very first lesson: streak 1.
  if (shot === 'streak') return <Milestone streak={1} lang={getHelpLanguage(lang as LangCode)} onDone={() => {}} />;
  // The whole cast in every mood, big, for judging the drawings.
  if (shot === 'cast') {
    const moods: Mood[] = ['idle', 'happy', 'sad', 'pleased', 'thinking', 'cheer'];
    return (
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${moods.length}, 1fr)`, gap: 8, padding: 16 }}>
        {CAST.flatMap((who) => moods.map((m) => <Character key={who + m} who={who} mood={m} size={150} />))}
      </div>
    );
  }
  const { lesson } = findLesson('l.gear')!;
  const [helm, handschoenen, schoenen, hesje] = lesson.words;
  const exercises: Record<string, Exercise> = {
    dutch: { kind: 'dutch', word: helm, options: [hesje, handschoenen, helm] },
    meaning: { kind: 'meaning', word: hesje, options: [handschoenen, schoenen, hesje] },
    build: { kind: 'build', sentence: lesson.sentences[0], tiles: buildTiles(lesson.sentences[0], lesson, createRng(3)) },
  };
  // Break-room chat: "Wil je koffie of thee?" → "Thee, graag." (right), "Tot morgen!" (wrong).
  const coffee = findLesson('l.shift')!.lesson.dialogues![0];
  const byeReply = allReplies.find((r) => r.id === 'c.hello.a')!;
  exercises.chat = { kind: 'chat', dialogue: coffee, options: [coffee.reply, byeReply] };
  const ex = exercises[shot] ?? exercises.dutch;
  // A few intro exercises in front would move the progress bar; pad so it sits at ~40%.
  const pad: Exercise[] = Array.from({ length: 3 }, () => ex);
  // The chat page sits a little further into the lesson (~55%), as in the reference.
  const before: Exercise[] = shot === 'chat' ? [...pad, ...pad, ex] : pad;
  return (
    <LessonPlayer
      lesson={shot === 'chat' ? findLesson('l.shift')!.lesson : lesson}
      review
      lang={getHelpLanguage(lang as LangCode)}
      exercises={[...before, ex, ...pad]}
      startAt={before.length}
      // The chat page shows the in-a-row counter: 4 before, 5 after a right answer.
      initialStreak={shot === 'chat' ? 4 : 0}
      onQuit={() => {}}
      onFinish={() => {}}
    />
  );
}
