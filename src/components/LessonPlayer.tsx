import { useCallback, useMemo, useRef, useState } from 'react';
import type { Lesson } from '../content/types';
import { gloss, ui, type Bilingual } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { sounds, speak, speechAvailable } from '../lib/audio';
import { buildLesson, isGraded, type Exercise } from '../lib/exercises';
import { voiceFor } from '../lib/voices';
import { Bi } from './Bi';
import { CheckIcon, ChevronIcon, CloseIcon } from './Icons';
import {
  type Answer,
  BuildExercise,
  ChatExercise,
  DutchExercise,
  IntroCard,
  ListenExercise,
  MatchExercise,
  MeaningExercise,
  TypeExercise,
  SituationExercise,
  TipCard,
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
    case 'chat':
      return { text: ex.dialogue.reply.nl, nl: true };
    case 'match':
    case 'tip':
      return { text: '', nl: false };
    case 'situation':
      return { text: ex.tip.options.find((o) => o.best)!.en, nl: false };
    default:
      return { text: ex.word.nl, nl: true };
  }
}

const needsAudio = (ex: Exercise) => ex.kind === 'listen' || ex.kind === 'type';

/** Short Dutch label on the kraft tag above each exercise. */
const KIND_TAG: Record<Exercise['kind'], string> = {
  intro: 'Nieuw woord',
  meaning: 'Woord',
  dutch: 'Woord',
  listen: 'Luisteren',
  type: 'Luisteren',
  match: 'Woorden',
  build: 'Zin',
  chat: 'Gesprek',
  tip: 'Tip',
  situation: 'Situatie',
};

/** The answer as a pair for the feedback label: Dutch = meaning (English + help language). */
function answerPair(ex: Exercise, lang?: HelpLanguage): { nl?: string; meaning: Bilingual } | null {
  switch (ex.kind) {
    case 'meaning':
    case 'dutch':
    case 'listen':
    case 'type':
    case 'intro':
      return { nl: ex.word.nl, meaning: gloss(ex.word.id, ex.word.en, lang) };
    case 'build':
      return { nl: ex.sentence.nl, meaning: gloss(ex.sentence.id, ex.sentence.en, lang) };
    case 'chat':
      return { nl: ex.dialogue.reply.nl, meaning: gloss(ex.dialogue.reply.id, ex.dialogue.reply.en, lang) };
    case 'situation': {
      const best = ex.tip.options.find((o) => o.best)!;
      return { meaning: gloss(best.id, best.en, lang) };
    }
    default:
      return null;
  }
}

/** The square block at the end of the main button: a check before answering, an arrow after. */
function ButtonBlock({ icon }: { icon: 'check' | 'next' }) {
  return (
    <span className="btn-block" aria-hidden>
      {icon === 'check' ? <CheckIcon size={26} /> : <ChevronIcon size={26} />}
    </span>
  );
}

/** "5 IN A ROW" label above the progress bar, from three correct answers in a row. */
function InARow({ count, progress, lang }: { count: number; progress: number; lang?: HelpLanguage }) {
  const text = ui('inARow', lang);
  const fill = (t: string) => t.replace('{n}', String(count));
  return (
    <span className="in-a-row" style={{ '--p': progress } as React.CSSProperties} role="status">
      <span className="in-a-row-en">{fill(text.en)}</span>
      {text.help && text.lang && (
        <span className="in-a-row-help" lang={text.lang.code} dir={text.lang.dir}>{fill(text.help)}</span>
      )}
    </span>
  );
}

export function LessonPlayer({ lesson, review, lang, onQuit, onFinish, exercises, startAt = 0, initialStreak = 0 }: {
  lesson: Lesson;
  review: boolean;
  /** Fixed exercise list (used by the screenshot harness); normally built from the lesson. */
  exercises?: Exercise[];
  startAt?: number;
  /** Correct answers in a row before this exercise (screenshot harness). */
  initialStreak?: number;
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
  const [streak, setStreak] = useState(initialStreak);
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
    setStreak((n) => (answer.correct ? n + 1 : 0));
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
    // In a chat the right reply is "your" line: Amina says it.
    if (sol.nl) speak(sol.text, false, 'nl', ex.kind === 'chat' ? voiceFor('amina') : undefined);
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

  const verdict: 'right' | 'wrong' | undefined = checked && answer && isGraded(ex) ? (answer.correct ? 'right' : 'wrong') : undefined;
  const props = { lang, locked: checked, onAnswer, verdict };
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
    case 'chat': body = <ChatExercise key={key} ex={ex} {...props} />; break;
    case 'tip': body = <TipCard key={key} ex={ex} {...props} />; break;
    case 'situation': body = <SituationExercise key={key} ex={ex} {...props} />; break;
  }

  const sol = solution(ex);
  const feedback = checked && isGraded(ex) && answer;
  // The answer as a pair: "het hesje = the safety vest", help language underneath.
  // (In a chat this is what the right reply means; in a situation, the usual choice.)
  const pair = answerPair(ex, lang);
  // On a right answer the praise in the help language closes the help line ("… · Harika!").
  const praise = feedback && answer.correct && !answer.almost ? ui(ex.kind === 'situation' ? 'goodChoice' : 'correct', lang) : null;
  const pairHelp = [pair?.meaning.help, praise?.help].filter(Boolean).join(' · ');
  const pairLine = pair && (
    <div className="feedback-pair">
      <span className="pair-main">
        {pair.nl && (
          <>
            <strong lang="nl">{pair.nl}</strong>
            <span className="pair-eq"> = </span>
          </>
        )}
        <span className="bi-en">{pair.meaning.en}</span>
      </span>
      {pairHelp && lang && (
        <span className="bi-help" lang={lang.code} dir={lang.dir}>{pairHelp}</span>
      )}
    </div>
  );
  // Situations explain why the usual answer works here.
  const why = ex.kind === 'situation' ? gloss(ex.tip.why.id, ex.tip.why.en, lang) : null;
  const whyLine = why && (
    <div className="feedback-meaning feedback-why">
      <span className="bi-en">{why.en}</span>
      {why.help && why.lang && <span className="bi-help" lang={why.lang.code} dir={why.lang.dir}>{why.help}</span>}
    </div>
  );
  const autoContinue = ex.kind === 'intro' || ex.kind === 'match' || ex.kind === 'tip';
  // Segments: one per exercise of the lesson (mistakes that come back at the end don't add any).
  const segState = (i: number) => (i < index || (i === index && checked) ? 'seg-done' : i === index ? 'seg-now' : '');
  const count = Math.min(index + 1, initial.length);

  return (
    <div className="player">
      <header className="player-top">
        <button type="button" className="icon-btn" onClick={onQuit} aria-label="Quit lesson"><CloseIcon size={28} /></button>
        <div className="bar-wrap">
          {streak >= 3 && <InARow count={streak} progress={progress} lang={lang} />}
          <div className="segs" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress * 100)}>
            {initial.map((_, i) => <span key={i} className={`seg ${segState(i)}`} />)}
          </div>
        </div>
        <span className="lesson-name">
          <Bi text={gloss(lesson.id, lesson.title, lang)} />
        </span>
      </header>

      <main className="player-body">
        <div className="ex-tag">
          <span className="tag" lang="nl">{KIND_TAG[ex.kind]}</span>
          <span className="ex-count">{count} / {initial.length}</span>
        </div>
        {body}
      </main>
      <footer className="player-foot">
        <div className="foot-inner">
          {feedback && (
            <div
              className={`feedback ${answer.correct ? 'feedback-right' : ex.kind === 'situation' ? 'feedback-other' : 'feedback-wrong'}`}
              role="status"
            >
              <span className="feedback-tape" aria-hidden />
              <div className="feedback-text">
                {!answer.correct && sol.text ? (
                  ex.kind === 'situation' ? (
                    <div className="feedback-title"><Bi text={ui('otherChoice', lang)} /></div>
                  ) : (
                    <>
                      <div className="feedback-title"><span lang="nl">Nog eens!</span></div>
                      <span className="sr-only">{ui('incorrect', lang).en}.</span>
                    </>
                  )
                ) : answer.correct && !answer.almost ? (
                  <>
                    <div className="feedback-title"><span lang="nl">Goed zo!</span></div>
                    <span className="sr-only">{praise?.en}</span>
                  </>
                ) : (
                  <div className="feedback-title">
                    <Bi text={ui(answer.correct ? 'almost' : 'incorrect', lang)} />
                  </div>
                )}
                {(pairLine || whyLine) && <hr className="feedback-rule" />}
                {!answer.correct && sol.text && ex.kind !== 'situation' && (
                  <div className="feedback-kicker">
                    <Bi text={{ ...ui('correctAnswer', lang), en: `${ui('correctAnswer', lang).en}:` }} />
                  </div>
                )}
                {pairLine}{whyLine}
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
                className={`btn btn-go ${checked ? 'btn-dark' : 'btn-primary'}`}
                disabled={!answer}
                onClick={checked ? next : check}
                autoFocus
              >
                {ui('continue', lang).en}
                <ButtonBlock icon="next" />
              </button>
            ) : (
              <button type="button" className="btn btn-go btn-primary" disabled={!answer} onClick={check}>
                {ui('check', lang).en}
                <ButtonBlock icon="check" />
              </button>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
