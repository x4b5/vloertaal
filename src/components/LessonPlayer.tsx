import { useCallback, useMemo, useRef, useState } from 'react';
import type { Lesson } from '../content/types';
import { gloss, ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { sounds, speak, speechAvailable } from '../lib/audio';
import { buildLesson, isGraded, type Exercise } from '../lib/exercises';
import { Bi } from './Bi';
import { CloseIcon } from './Icons';
import {
  type Answer,
  BuildExercise,
  DutchExercise,
  IntroCard,
  ListenExercise,
  MatchExercise,
  MeaningExercise,
  TypeExercise,
} from './Exercises';

export interface LessonResult {
  accuracy: number;
  review: boolean;
}

function solution(ex: Exercise): { text: string; nl: boolean } {
  switch (ex.kind) {
    case 'meaning':
      return { text: ex.word.en, nl: false };
    case 'build':
      return { text: ex.sentence.nl, nl: true };
    case 'match':
      return { text: '', nl: false };
    default:
      return { text: ex.word.nl, nl: true };
  }
}

const needsAudio = (ex: Exercise) => ex.kind === 'listen' || ex.kind === 'type';

export function LessonPlayer({ lesson, review, lang, onQuit, onFinish, exercises, startAt = 0 }: {
  lesson: Lesson;
  review: boolean;
  /** Fixed exercise list (used by the screenshot harness); normally built from the lesson. */
  exercises?: Exercise[];
  startAt?: number;
  lang?: HelpLanguage;
  onQuit: () => void;
  onFinish: (r: LessonResult) => void;
}) {
  const initial = useMemo(() => exercises ?? buildLesson(lesson, { review }), [exercises, lesson, review]);
  const [queue, setQueue] = useState<Exercise[]>(initial);
  const [index, setIndex] = useState(startAt);
  const [answer, setAnswer] = useState<Answer | null>(null);
  const [checked, setChecked] = useState(false);
  const graded = useRef({ right: 0, total: 0 });
  const [audioOff, setAudioOff] = useState(!speechAvailable());

  const ex = queue[index];
  const onAnswer = useCallback((a: Answer | null) => setAnswer(a), []);

  const firstTryDone = Math.min(index, initial.length);
  const progress = firstTryDone / initial.length;

  function check() {
    if (!answer) return;
    if (!isGraded(ex)) return next();
    if (index < initial.length) {
      graded.current.total += 1;
      if (answer.correct) graded.current.right += 1;
    }
    // A finished match board already gave its feedback tile by tile.
    if (ex.kind === 'match') return next();
    setChecked(true);
    if (answer.correct) sounds.correct();
    else {
      sounds.wrong();
      // A mistake comes back once at the end of the lesson; no endless loops.
      if (index < initial.length) setQueue((q) => [...q, ex]);
    }
    const sol = solution(ex);
    if (sol.nl) speak(sol.text);
  }

  function finish() {
    const { right, total } = graded.current;
    sounds.done();
    onFinish({ accuracy: total ? right / total : 1, review });
  }

  function next() {
    setAnswer(null);
    setChecked(false);
    let i = index + 1;
    // Skip audio-only exercises when the learner can't listen right now.
    while (audioOff && i < queue.length && needsAudio(queue[i])) i++;
    if (i >= queue.length) {
      finish();
    } else setIndex(i);
  }

  function skipAudio() {
    setAudioOff(true);
    setAnswer(null);
    setChecked(false);
    let i = index + 1;
    while (i < queue.length && needsAudio(queue[i])) i++;
    if (i >= queue.length) finish();
    else setIndex(i);
  }

  const props = { lang, locked: checked, onAnswer };
  const key = `${index}`;
  let body: React.ReactNode;
  switch (ex.kind) {
    case 'intro': body = <IntroCard key={key} ex={ex} {...props} />; break;
    case 'meaning': body = <MeaningExercise key={key} ex={ex} {...props} />; break;
    case 'dutch': body = <DutchExercise key={key} ex={ex} {...props} />; break;
    case 'listen': body = <ListenExercise key={key} ex={ex} {...props} />; break;
    case 'match': body = <MatchExercise key={key} ex={ex} {...props} />; break;
    case 'build': body = <BuildExercise key={key} ex={ex} {...props} />; break;
    case 'type': body = <TypeExercise key={key} ex={ex} {...props} />; break;
  }

  const sol = solution(ex);
  const feedback = checked && isGraded(ex) && answer;
  const autoContinue = ex.kind === 'intro' || ex.kind === 'match';

  return (
    <div className="player">
      <header className="player-top">
        <button type="button" className="icon-btn" onClick={onQuit} aria-label="Quit lesson"><CloseIcon size={28} /></button>
        <div className="bar" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress * 100)}>
          <div className="bar-fill" style={{ width: `${Math.max(4, progress * 100)}%` }} />
        </div>
        <span className="lesson-name">
          <Bi text={gloss(lesson.id, lesson.title, lang)} />
        </span>
      </header>

      <main className="player-body">{body}</main>
      <footer className={`player-foot ${feedback ? (answer.correct ? 'foot-right' : 'foot-wrong') : ''}`}>
        <div className="foot-inner">
          {feedback && (
            <div className="feedback" role="status">
              <span className="feedback-icon" aria-hidden>
                {answer.correct ? (
                  <svg viewBox="0 0 24 24" width="40" height="40"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="36" height="36"><path d="M6.5 6.5l11 11M17.5 6.5l-11 11" fill="none" stroke="currentColor" strokeWidth="3.6" strokeLinecap="round" /></svg>
                )}
              </span>
              <div className="feedback-text">
                {!answer.correct && sol.text ? (
                  <>
                    <span className="sr-only">{ui('incorrect', lang).en}. </span>
                    <div className="feedback-title">
                      <Bi text={{ ...ui('correctAnswer', lang), en: `${ui('correctAnswer', lang).en}:` }} />
                    </div>
                    <div className="feedback-sol feedback-answer" lang={sol.nl ? 'nl' : undefined}>{sol.text}</div>
                  </>
                ) : (
                  <>
                    <div className="feedback-title">
                      <Bi text={ui(answer.correct ? (answer.almost ? 'almost' : 'correct') : 'incorrect', lang)} />
                    </div>
                    {answer.almost && sol.text && (
                      <div className="feedback-sol">
                        {ui('correctAnswer', lang).en}: <strong lang={sol.nl ? 'nl' : undefined}>{sol.text}</strong>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          )}
          <div className="foot-actions">
            {needsAudio(ex) && !checked && (
              <button type="button" className="btn btn-ghost" onClick={skipAudio}>
                <Bi text={ui('cantListen', lang)} />
              </button>
            )}
            {checked || autoContinue ? (
              <button
                type="button"
                className={`btn ${feedback && !answer.correct ? 'btn-red' : 'btn-green'}`}
                disabled={!answer}
                onClick={checked ? next : check}
                autoFocus
              >
                {ui('continue', lang).en}
              </button>
            ) : (
              <button type="button" className="btn btn-green" disabled={!answer} onClick={check}>
                {ui('check', lang).en}
              </button>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
