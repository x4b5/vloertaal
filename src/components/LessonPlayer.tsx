import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Lesson } from '../content/types';
import { gloss, ui, type Bilingual } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { sounds, speak, speechAvailable } from '../lib/audio';
import { buildLesson, isGraded, type Exercise } from '../lib/exercises';
import { voiceFor } from '../lib/voices';
import { castFor } from './Characters';
import { Bi, HelpText } from './Bi';
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
  /** Graded exercises answered right the first time, out of all graded exercises. */
  right: number;
  total: number;
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
  dutch: 'Nieuw woord',
  listen: 'Luisteren',
  type: 'Luisteren',
  match: 'Woorden',
  build: 'Zin',
  chat: 'Gesprek',
  tip: 'Tip',
  situation: 'Situatie',
};

/** Fills {n} in both languages of a UI string. */
function fillN(text: Bilingual, n: number): Bilingual {
  return { ...text, en: text.en.replace('{n}', String(n)), help: text.help?.replace('{n}', String(n)) };
}

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

export function LessonPlayer({ lesson, review, lang, onQuit, onFinish, exercises, repeats, startAt = 0, backSignal = 0 }: {
  lesson: Lesson;
  review: boolean;
  /** Fixed exercise list (used by the screenshot harness); normally built from the lesson. */
  exercises?: Exercise[];
  /** Mistakes already queued to come back (screenshot harness, to show the retry phase). */
  repeats?: Exercise[];
  startAt?: number;
  lang?: HelpLanguage;
  onQuit: () => void;
  /** Goes up by one each time the system Back button is pressed during the lesson. */
  backSignal?: number;
  onFinish: (r: LessonResult) => void;
}) {
  const initial = useMemo(() => exercises ?? buildLesson(lesson, { review }), [exercises, lesson, review]);
  const [queue, setQueue] = useState<Exercise[]>(() => [...initial, ...(repeats ?? [])]);
  const [index, setIndex] = useState(startAt);
  const [answer, setAnswer] = useState<Answer | null>(null);
  const [checked, setChecked] = useState(false);
  const graded = useRef({ right: 0, total: 0 });
  const [audioOff, setAudioOff] = useState(!speechAvailable());

  const ex = queue[index];
  // Quitting loses the lesson's answers, so the X and the system Back button ask first.
  const [askQuit, setAskQuit] = useState(false);
  const firstBack = useRef(backSignal);
  useEffect(() => {
    // Back while the sheet is open means "never mind": close it.
    if (backSignal !== firstBack.current) setAskQuit((open) => !open);
  }, [backSignal]);
  const footRef = useRef<HTMLElement>(null);
  // After "Check" the feedback label grows the sticky footer. Keep the learner's pick, the right
  // option and the stamp in view above it: scroll just enough, never past the question's top.
  useEffect(() => {
    if (!checked) return;
    const raf = requestAnimationFrame(() => {
      const foot = footRef.current;
      const marked = document.querySelectorAll<HTMLElement>('.player-body .choice.wrong, .player-body .choice.right, .player-body .answer-line, .player-body .chat-bubble-me');
      if (!foot || !marked.length) return;
      const bottom = Math.max(...[...marked].map((el) => el.getBoundingClientRect().bottom));
      const top = Math.min(...[...marked].map((el) => el.getBoundingClientRect().top));
      const limit = foot.getBoundingClientRect().top - 12;
      if (bottom > limit) window.scrollBy({ top: Math.min(bottom - limit, Math.max(0, top - 8)), behavior: 'smooth' });
    });
    return () => cancelAnimationFrame(raf);
  }, [checked]);
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
    // The answer is said by the character on screen, so a woman never speaks with a man's voice:
    // in a chat the right reply is "your" line (Amina); a built sentence belongs to its speaker.
    const who =
      ex.kind === 'chat' ? 'amina'
      : ex.kind === 'build' ? castFor(ex.sentence.id)
      : ex.kind === 'situation' || ex.kind === 'tip' ? castFor(ex.tip.id)
      : 'bram';
    if (sol.nl) speak(sol.text, false, 'nl', voiceFor(who));
  }

  function finish() {
    const { right, total } = graded.current;
    sounds.done();
    onFinish({ accuracy: total ? right / total : 1, review, right, total });
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
  // The heading is Dutch ("Goed zo!" / "Nog eens!"); its meaning sits under it in small type.
  const headingMeaning = feedback
    ? ui(answer.correct ? (answer.almost ? 'almost' : ex.kind === 'situation' ? 'goodChoice' : 'correct') : ex.kind === 'situation' ? 'otherChoice' : 'incorrect', lang)
    : null;
  const pairHelp = pair?.meaning.help ?? '';
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
        <HelpText text={pairHelp} lang={lang} />
      )}
    </div>
  );
  // Situations explain why the usual answer works here.
  const why = ex.kind === 'situation' ? gloss(ex.tip.why.id, ex.tip.why.en, lang) : null;
  const whyLine = why && (
    <div className="feedback-meaning feedback-why">
      <span className="bi-en">{why.en}</span>
      {why.help && why.lang && <HelpText text={why.help} lang={why.lang} />}
    </div>
  );
  const autoContinue = ex.kind === 'intro' || ex.kind === 'match' || ex.kind === 'tip';
  // Segments: one per planned exercise, then one kraft segment per mistake that comes back.
  const segState = (i: number) => (i < index || (i === index && checked) ? 'seg-done' : i === index ? 'seg-now' : '');
  const count = Math.min(index + 1, initial.length);
  /** In the retry phase: how many mistakes are left, this one included. */
  const repeatsLeft = index >= initial.length ? queue.length - index : 0;

  return (
    <div className="player">
      <header className="player-top">
        <button type="button" className="icon-btn" onClick={() => setAskQuit(true)} aria-label="Quit lesson"><CloseIcon size={28} /></button>
        <div className="bar-wrap">
          <div className="segs" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress * 100)}>
            {queue.map((_, i) => <span key={i} className={`seg ${i >= initial.length ? 'seg-repeat' : ''} ${segState(i)}`} />)}
          </div>
        </div>
        <span className="lesson-name">
          <Bi text={gloss(lesson.id, lesson.title, lang)} />
        </span>
      </header>

      <main className="player-body">
        <div className="ex-tag">
          {repeatsLeft > 0 ? (
            <>
              {/* Retry phase: the mistakes come back, and the learner sees how many are left. */}
              <span className="tag tag-repeat" lang="nl">Herhalen</span>
              <span className="ex-count" lang="nl">nog {repeatsLeft}</span>
              <Bi className="ex-tag-note" text={fillN(ui('practiseMistakes', lang), repeatsLeft)} />
            </>
          ) : (
            <>
              <span className="tag" lang="nl">{KIND_TAG[ex.kind]}</span>
              <span className="ex-count">{count} / {initial.length}</span>
              {/* New-word exercises: translate the Dutch tag into English and the help language. */}
              {(ex.kind === 'dutch' || ex.kind === 'intro') && <Bi className="ex-tag-note" text={ui('newWord', lang)} />}
            </>
          )}
        </div>
        {body}
      </main>
      <footer className="player-foot" ref={footRef}>
        <div className="foot-inner">
          {feedback && (
            <div
              className={`feedback ${answer.correct ? 'feedback-right' : ex.kind === 'situation' ? 'feedback-other' : 'feedback-wrong'}`}
              role="status"
            >
              <span className="feedback-tape" aria-hidden />
              <div className="feedback-text">
                <div className="feedback-head">
                  <div className="feedback-title" lang="nl">
                    {answer.correct ? 'Goed zo!' : ex.kind === 'situation' ? 'Hier gaat het anders' : 'Nog eens!'}
                  </div>
                  {headingMeaning && <Bi className="feedback-sub" text={headingMeaning} />}
                </div>
                {(pairLine || whyLine) && <hr className="feedback-rule" />}
                {!answer.correct && sol.text && ex.kind !== 'situation' && (
                  <div className="feedback-kicker">
                    <Bi text={ui('correctAnswer', lang)} />
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
      {askQuit && <QuitSheet lang={lang} onKeep={() => setAskQuit(false)} onStop={onQuit} />}
    </div>
  );
}

/** "Stop this lesson?": a bottom sheet with two big buttons; keep going is the main one. */
function QuitSheet({ lang, onKeep, onStop }: { lang?: HelpLanguage; onKeep: () => void; onStop: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onKeep(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onKeep]);
  return (
    <div className="sheet-backdrop" onClick={onKeep}>
      <div className="sheet" role="alertdialog" aria-modal="true" aria-labelledby="quit-title" aria-describedby="quit-hint" onClick={(e) => e.stopPropagation()}>
        <span className="sheet-hazard" aria-hidden />
        <h2 id="quit-title" className="sheet-title"><Bi text={ui('quitTitle', lang)} /></h2>
        <p id="quit-hint" className="sheet-hint"><Bi text={ui('quitHint', lang)} /></p>
        <div className="sheet-actions">
          <button type="button" className="btn btn-go btn-primary" onClick={onKeep} autoFocus>
            <Bi text={ui('keepGoing', lang)} />
            <ButtonBlock icon="next" />
          </button>
          <button type="button" className="btn sheet-stop" onClick={onStop}>
            <Bi text={ui('stopLesson', lang)} />
          </button>
        </div>
      </div>
    </div>
  );
}
