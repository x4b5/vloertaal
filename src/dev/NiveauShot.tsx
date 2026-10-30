import { useState } from 'react';
import { LessonPlayer } from '../components/LessonPlayer';
import { Result } from '../components/Screens';
import { findLesson, teachingLessons } from '../content/curriculum';
import { getHelpLanguage } from '../i18n';
import type { Gender, LangCode } from '../i18n/types';
import { setQuietAudio } from '../lib/audio';
import { buildLesson } from '../lib/exercises';
import { dailyLesson, speakCardId } from '../lib/spaced';

/**
 * Lessons at the learner's level (src/lib/pace.ts, lib/spaced.ts sentence cards), for screenshots:
 *  - /?shot=niveau&state=faster: the result after the third lesson in a row without a mistake,
 *    with "Wil je sneller?" (Ja / Nee in place of Continue);
 *    (&samen=1: the "Oefen samen" row is hidden while the question waits);
 *  - &state=easier: the result after many mistakes, with "De volgende les is wat korter.";
 *  - &state=daily&at=N: today's review with two sentence cards to build and a spoken sentence
 *    (&at= the step; the first build is at the number of words + 2).
 * Settings › Lessen › Sneller leren: /?shot=settings&page=faster.
 */
export function NiveauShot({ lang, gender, q }: { lang: string | null; gender?: Gender; q: URLSearchParams }) {
  const l = getHelpLanguage(lang as LangCode, gender);
  const state = q.get('state') ?? 'faster';
  const next = findLesson('l.understand')?.lesson;
  if (state === 'faster' || state === 'easier') {
    const faster = state === 'faster';
    return (
      <Result
        right={faster ? 12 : 6} total={12} newWords={6} words={faster ? 24 : 18} lang={l} onDone={() => {}}
        next={next ? { en: next.title, help: l?.gloss[next.id], lang: l, id: next.id } : undefined}
        onFaster={faster ? () => {} : undefined}
        onSamen={q.get('samen') ? () => {} : undefined}
        easier={!faster}
      />
    );
  }
  return <DailyShot lang={l} at={Number(q.get('at') ?? 0)} />;
}

function DailyShot({ lang, at }: { lang: ReturnType<typeof getHelpLanguage>; at: number }) {
  const [quiet] = useState(false);
  setQuietAudio(quiet);
  const [a, b, c] = teachingLessons;
  const ids = [...a.words.slice(0, 3), ...b.words.slice(0, 3)].map((w) => w.id);
  const lesson = dailyLesson([...ids, b.sentences[0].id, c.sentences[1].id, speakCardId(a.sentences[0].id)], {}, '2026-10-30');
  const exercises = buildLesson(lesson, { review: true, seed: 2, speak: true });
  return <LessonPlayer lesson={lesson} review lang={lang} exercises={exercises} startAt={at} quiet={quiet} onQuit={() => {}} onFinish={() => {}} />;
}
