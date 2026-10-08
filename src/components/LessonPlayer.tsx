import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Lesson } from '../content/types';
import { fillN, gloss, ui, withoutN, type Bilingual } from '../i18n';
import type { HelpLanguage, UiKey } from '../i18n/types';
import { autoSpeak, sounds, speechAvailable } from '../lib/audio';
import { tileDiff } from '../lib/answers';
import { buildLesson, isGraded, needsAudio, type Exercise } from '../lib/exercises';
import { barParts, chimeStep, nextMisses, nextRun, runStampFor } from '../lib/lessonRun';
import { voiceFor } from '../lib/voices';
import { castFor } from './Characters';
import { Bi, HelpText } from './Bi';
import { FlameIcon } from './StreakArt';
import {
  AlertIcon, BlocksIcon, BubblesIcon, BulbIcon, CheckIcon, ChevronIcon, CloseIcon, EarIcon, KeyboardIcon, PairIcon,
  PictureIcon, AskIcon, SignpostIcon, SparkleIcon, SpeakerIcon, SpeakerOffIcon,
} from './Icons';
import { PhraseSheet } from './Phrases';
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
  /** Per word asked on its own (meaning, picture, listen, type): right every first time? */
  words: Record<string, boolean>;
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

/**
 * The kraft tag above each exercise: a fixed pictogram per kind of exercise, a short Dutch
 * label, and the same word in the help language (English without one).
 */
const KIND_TAG: Record<Exercise['kind'], { nl: string; key: UiKey; Icon: (p: { size?: number }) => React.ReactElement }> = {
  intro: { nl: 'Nieuw woord', key: 'newWord', Icon: SparkleIcon },
  meaning: { nl: 'Betekenis', key: 'tagMeaning', Icon: AskIcon },
  dutch: { nl: 'Kies', key: 'tagPick', Icon: PictureIcon },
  listen: { nl: 'Luisteren', key: 'tagListen', Icon: EarIcon },
  type: { nl: 'Typen', key: 'tagType', Icon: KeyboardIcon },
  match: { nl: 'Paren', key: 'tagMatch', Icon: PairIcon },
  build: { nl: 'Zin', key: 'tagBuild', Icon: BlocksIcon },
  chat: { nl: 'Gesprek', key: 'tagChat', Icon: BubblesIcon },
  tip: { nl: 'Tip', key: 'tagTip', Icon: BulbIcon },
  situation: { nl: 'Situatie', key: 'tagSituation', Icon: SignpostIcon },
};

function KindTag({ kind, lang }: { kind: Exercise['kind']; lang?: HelpLanguage }) {
  const { nl, key, Icon } = KIND_TAG[kind];
  const word = ui(key, lang);
  const same = !word.help && word.en.toLowerCase() === nl.toLowerCase();
  return (
    <span className="tag tag-kind">
      <span className="tag-icon" aria-hidden><Icon size={20} /></span>
      <span className="tag-nl" lang="nl">{nl}</span>
      {!same && (word.help && lang
        ? <HelpText className="tag-help" text={word.help} lang={lang} />
        : <span className="tag-help" lang="en">{word.en}</span>)}
    </span>
  );
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

/** Reduced motion: no smooth scrolling, no movement (see "Reduced motion" in styles.css). */
function reducedMotion(): boolean {
  return typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

/**
 * A run of 3, 5 or 8: a taped label that drops onto the progress bar for 1.5 s, a lit flame, the
 * big number and "in a row" in the help language (English without one). It lives in the lesson
 * header, so it is in view whatever the exercise below does.
 */
function RunLabel({ n, lang }: { n: number; lang?: HelpLanguage }) {
  const text = withoutN(ui('inARow', lang));
  return (
    <span className="run-label" aria-hidden>
      <span className="run-label-tape" />
      <FlameIcon lit size={26} />
      <b className="run-label-n">{n}</b>
      {text.help && lang ? <HelpText className="run-label-text" text={text.help} lang={lang} /> : <span className="run-label-text" lang="en">{text.en}</span>}
    </span>
  );
}

/** The square block at the end of the main button: a check before answering, an arrow after. */
function ButtonBlock({ icon }: { icon: 'check' | 'next' }) {
  return (
    <span className="btn-block" aria-hidden>
      {icon === 'check' ? <CheckIcon size={26} /> : <ChevronIcon size={26} />}
    </span>
  );
}

export function LessonPlayer({ lesson, review, lang, onQuit, onFinish, exercises, repeats, startAt = 0, backSignal = 0, quiet = false, onQuiet }: {
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
  /** "Without sound" (a saved setting): no listening exercises, nothing plays by itself. */
  quiet?: boolean;
  /** Switches "Without sound" on or off for good (the header toggle, "I can't listen now"). */
  onQuiet?: (quiet: boolean) => void;
}) {
  // The lesson is planned once, with the setting it started with; switching sound off midway
  // skips the listening exercises that are left instead (see audioOff).
  const [quietAtStart] = useState(quiet);
  const initial = useMemo(
    () => exercises ?? buildLesson(lesson, { review, quiet: quietAtStart }),
    [exercises, lesson, review, quietAtStart],
  );
  const [queue, setQueue] = useState<Exercise[]>(() => [...initial, ...(repeats ?? [])]);
  const [index, setIndex] = useState(startAt);
  const [answer, setAnswer] = useState<Answer | null>(null);
  const [checked, setChecked] = useState(false);
  const graded = useRef({ right: 0, total: 0 });
  /** Right answers in a row (graded exercises only); a miss resets it without a word. */
  const [run, setRun] = useState(0);
  /** Misses in a row: the character's "oops" plays on the first one only. */
  const [misses, setMisses] = useState(0);
  /** The main button turns into the outcome-coloured Continue 120 ms after Check. */
  const [swapped, setSwapped] = useState(false);
  /** The run label (runs of 3, 5, 8), shown 300 ms after Check for 1.5 s, also past Continue;
   *  `sweep` replays the bar highlight and keys the label. */
  const [runLabel, setRunLabel] = useState<number | null>(null);
  const [sweep, setSweep] = useState(0);
  useEffect(() => {
    if (!runLabel) return;
    const t = window.setTimeout(() => setRunLabel(null), 1500);
    return () => window.clearTimeout(t);
  }, [runLabel, sweep]);
  /** Screen-reader announcement, filled one tick after Check (the region itself is always there). */
  const [live, setLive] = useState('');
  /** The Check choreography's timers; cleared on Continue and when the lesson closes. */
  const timers = useRef<number[]>([]);
  const later = (ms: number, fn: () => void) => { timers.current.push(window.setTimeout(fn, ms)); };
  const clearTimers = () => { timers.current.forEach((t) => window.clearTimeout(t)); timers.current = []; };
  useEffect(() => {
    const list = timers;
    return () => list.current.forEach((t) => window.clearTimeout(t));
  }, []);
  /** The exercise on screen and a layer for the one leaving (a copy that slides out, 160 ms). */
  const slideRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);
  /** The new exercise's entrance (staggered); the class comes off afterwards, so later state
   *  changes (a shake, a flash) never replay it. */
  const [entering, setEntering] = useState(true);
  useEffect(() => {
    if (!entering) return;
    const t = window.setTimeout(() => setEntering(false), 700);
    return () => window.clearTimeout(t);
  }, [entering, index]);
  const rtl = lang?.dir === 'rtl';
  const goRef = useRef<HTMLButtonElement>(null);
  const wordResults = useRef<Record<string, boolean>>({});
  /** "I can't listen now" without a saved setting to switch (screenshot harness). */
  const [cantListen, setCantListen] = useState(false);
  const soundOff = quiet || cantListen;
  const audioOff = !speechAvailable() || soundOff;
  /** Short line after the sound setting changed: 'off' = without sound, 'on' = sound on. */
  const [soundNote, setSoundNote] = useState<'off' | 'on' | null>(null);
  useEffect(() => {
    if (!soundNote) return;
    const t = setTimeout(() => setSoundNote(null), 4500);
    return () => clearTimeout(t);
  }, [soundNote]);

  const ex = queue[index];
  // Quitting loses the lesson's answers, so the X and the system Back button ask first.
  const [askQuit, setAskQuit] = useState(false);
  /** The emergency phrases (⚠ in the header), as a sheet over the lesson. */
  const [phrases, setPhrases] = useState(false);
  const phrasesOpen = useRef(false);
  phrasesOpen.current = phrases;
  const firstBack = useRef(backSignal);
  useEffect(() => {
    if (backSignal === firstBack.current) return;
    // Back with the phrases open closes them; otherwise Back asks "Stop this lesson?", and
    // Back while that sheet is open means "never mind": close it.
    if (phrasesOpen.current) setPhrases(false);
    else setAskQuit((open) => !open);
  }, [backSignal]);
  const footRef = useRef<HTMLElement>(null);
  const bodyRef = useRef<HTMLElement>(null);
  /**
   * The footer is pinned to the bottom, unless it would take more than half the screen (200%
   * zoom, a long feedback label): then it scrolls with the page. --foot-h keeps focused
   * elements clear of a pinned footer (scroll-padding), and moreBelow shows a soft shadow on
   * its top edge while there is more of the exercise underneath it.
   */
  const [footStatic, setFootStatic] = useState(false);
  const [moreBelow, setMoreBelow] = useState(false);
  useEffect(() => {
    const foot = footRef.current;
    const body = bodyRef.current;
    if (!foot || !body) return;
    const root = document.documentElement;
    let raf = 0;
    const measure = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const tall = foot.offsetHeight > window.innerHeight * 0.5;
        setFootStatic(tall);
        root.style.setProperty('--foot-h', `${tall ? 0 : foot.offsetHeight}px`);
        setMoreBelow(!tall && root.scrollHeight - (window.scrollY + window.innerHeight) > 4);
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(foot);
    ro.observe(body);
    window.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
      root.style.removeProperty('--foot-h');
    };
  }, []);
  // After "Check" the feedback label grows the sticky footer. Keep the learner's pick, the right
  // option and the stamp in view above it: scroll just enough, never past the question's top.
  useEffect(() => {
    if (!checked) return;
    const raf = requestAnimationFrame(() => {
      const foot = footRef.current;
      // A footer that scrolls with the page (200% zoom): bring the feedback label into view.
      if (foot && footStatic) {
        foot.querySelector('.feedback')?.scrollIntoView({ block: 'nearest', behavior: reducedMotion() ? 'auto' : 'smooth' });
        return;
      }
      const marked = document.querySelectorAll<HTMLElement>('.player-body .choice.wrong, .player-body .choice.right, .player-body .answer-line, .player-body .chat-bubble-me');
      if (!foot || !marked.length) return;
      const bottom = Math.max(...[...marked].map((el) => el.getBoundingClientRect().bottom));
      const top = Math.min(...[...marked].map((el) => el.getBoundingClientRect().top));
      // The header (close, sound, progress bar) is sticky: nothing may slide under it.
      const head = document.querySelector('.player-top')?.getBoundingClientRect().bottom ?? 0;
      const limit = foot.getBoundingClientRect().top - 12;
      if (bottom > limit) window.scrollBy({ top: Math.min(bottom - limit, Math.max(0, top - head - 8)), behavior: reducedMotion() ? 'auto' : 'smooth' });
    });
    return () => cancelAnimationFrame(raf);
  }, [checked]); // eslint-disable-line react-hooks/exhaustive-deps
  const onAnswer = useCallback((a: Answer | null) => setAnswer(a), []);

  // A new exercise: focus its question, so a screen reader starts there (typing keeps the input).
  useEffect(() => {
    if (queue[index]?.kind === 'type') return;
    const h = slideRef.current?.querySelector<HTMLElement>('.prompt');
    if (!h) return;
    h.tabIndex = -1;
    h.focus({ preventScroll: true });
    // Only the index matters: the queue grows when a mistake is queued, on the same exercise.
  }, [index]); // eslint-disable-line react-hooks/exhaustive-deps

  function check() {
    if (!answer) return;
    if (!isGraded(ex)) return next();
    if (index < initial.length) {
      graded.current.total += 1;
      if (answer.correct) graded.current.right += 1;
      if (ex.kind === 'meaning' || ex.kind === 'dutch' || ex.kind === 'listen' || ex.kind === 'type') {
        wordResults.current[ex.word.id] = (wordResults.current[ex.word.id] ?? true) && answer.correct;
      }
    }
    // A finished match board already gave its feedback tile by tile.
    if (ex.kind === 'match') return next();
    // The choreography (styles.css, "Answer moment"): t=0 the options colour, the chime plays
    // and the character reacts; the stamp lands at 60 ms and the label rises at 120 ms, when the
    // button becomes the green or red Continue; the run stamp follows at 300 ms and the answer
    // is spoken at 700 ms (right) or 450 ms (wrong).
    clearTimers();
    const newRun = nextRun(run, answer.correct);
    setRun(newRun);
    setMisses(nextMisses(misses, answer.correct));
    setChecked(true);
    setSwapped(false);
    later(120, () => {
      setSwapped(true);
      // Enter goes on from here, also after picking with the number keys.
      goRef.current?.focus({ preventScroll: true });
    });
    if (answer.correct) {
      sounds.correct(chimeStep(newRun));
      const stamp = runStampFor(newRun);
      if (stamp) later(300, () => { setRunLabel(stamp); setSweep((k) => k + 1); });
    } else {
      sounds.wrong();
      // A mistake comes back once at the end of the lesson; no endless loops.
      if (index < initial.length) setQueue((q) => [...q, ex]);
    }
    const sol = solution(ex);
    const said = announce(ex, answer.correct, answer.almost);
    later(30, () => setLive(said));
    // The answer is said by the character on screen, so a woman never speaks with a man's voice:
    // in a chat the right reply is "your" line (Amina); a built sentence belongs to its speaker.
    const who =
      ex.kind === 'chat' ? 'amina'
      : ex.kind === 'build' ? castFor(ex.sentence.id)
      : ex.kind === 'situation' || ex.kind === 'tip' ? castFor(ex.tip.id)
      : 'bram';
    if (sol.nl) later(answer.correct ? 700 : 450, () => autoSpeak(sol.text, false, 'nl', voiceFor(who)));
  }

  /** What the status region says after Check: the outcome, then the right answer. */
  function announce(e: Exercise, correct: boolean, almost?: boolean): string {
    const title = correct ? 'Goed zo!' : e.kind === 'situation' ? 'Hier gaat het anders.' : 'Nog eens!';
    const meaning = ui(correct ? (almost ? 'almost' : e.kind === 'situation' ? 'goodChoice' : 'correct') : e.kind === 'situation' ? 'otherChoice' : 'incorrect', lang);
    const p = answerPair(e, lang);
    const answerText = p ? `${p.nl ? `${p.nl} = ` : ''}${p.meaning.en}${p.meaning.help ? ` (${p.meaning.help})` : ''}` : '';
    const lead = !correct && e.kind !== 'situation' ? `${ui('correctAnswer').en}: ` : '';
    return [title, `${meaning.en}${meaning.help ? ` (${meaning.help})` : ''}.`, answerText && `${lead}${answerText}`].filter(Boolean).join(' ');
  }

  /** Copy the exercise on screen into the ghost layer, where it slides out while the next comes in. */
  function leave() {
    const from = slideRef.current;
    const layer = ghostRef.current;
    if (!from || !layer) return;
    const copy = from.cloneNode(true) as HTMLElement;
    copy.classList.remove('ex-enter');
    copy.classList.add('ex-leave');
    copy.setAttribute('aria-hidden', 'true');
    copy.setAttribute('inert', '');
    layer.replaceChildren(copy);
    setEntering(true);
    const t = window.setTimeout(() => copy.remove(), 200);
    timers.current.push(t);
  }

  function finish() {
    const { right, total } = graded.current;
    sounds.done();
    onFinish({ accuracy: total ? right / total : 1, review, right, total, words: wordResults.current });
  }

  function reset() {
    clearTimers();
    setAnswer(null);
    setChecked(false);
    setSwapped(false);
    setLive('');
  }

  function next() {
    reset();
    let i = index + 1;
    // Skip audio-only exercises when the learner can't listen right now.
    while (audioOff && i < queue.length && needsAudio(queue[i])) i++;
    if (i >= queue.length) {
      finish();
    } else {
      leave();
      setIndex(i);
    }
  }

  /** Leave the listening exercise on screen (unanswered) for the next one that needs no sound. */
  function skipAudio() {
    reset();
    let i = index + 1;
    while (i < queue.length && needsAudio(queue[i])) i++;
    if (i >= queue.length) finish();
    else {
      leave();
      setIndex(i);
    }
  }

  /** Sound off for good (header toggle or "I can't listen now"), or back on. */
  function setSound(off: boolean) {
    if (onQuiet) onQuiet(off);
    else setCantListen(off);
    setSoundNote(off ? 'off' : 'on');
    // Switched off while a listening exercise waits for an answer: go on without it.
    if (off && needsAudio(ex) && !checked) skipAudio();
  }

  const closePhrases = useCallback(() => setPhrases(false), []);
  const verdict: 'right' | 'wrong' | undefined = checked && answer && isGraded(ex) ? (answer.correct ? 'right' : 'wrong') : undefined;
  const props = { lang, locked: checked, onAnswer, verdict, run, misses };
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
  const outcome: 'right' | 'wrong' | 'other' | null = feedback ? (answer.correct ? 'right' : ex.kind === 'situation' ? 'other' : 'wrong') : null;
  const headingMeaning = feedback
    ? ui(answer.correct ? (answer.almost ? 'almost' : ex.kind === 'situation' ? 'goodChoice' : 'correct') : ex.kind === 'situation' ? 'otherChoice' : 'incorrect', lang)
    : null;
  const pairHelp = pair?.meaning.help ?? '';
  // A wrong sentence: the right one as tiles, the words that were out of place or missing
  // underlined in red (a position diff of the tiles laid against the solution).
  const diff = feedback && !answer.correct && ex.kind === 'build' && answer.given ? tileDiff(answer.given, ex.sentence.nl) : null;
  const pairLine = pair && diff ? (
    <div className="feedback-pair">
      <span className="pair-tiles" lang="nl" dir="ltr">
        {diff.map((t, i) => (
          <span key={i} className={`ftile ${t.ok ? '' : 'ftile-miss'}`}>
            {t.word}
            {!t.ok && <span className="sr-only"> ({ui('incorrect').en})</span>}
          </span>
        ))}
      </span>
      <span className="pair-main">
        <span className="bi-en" lang="en" dir={rtl ? 'ltr' : undefined}>{pair.meaning.en}</span>
      </span>
      {pairHelp && lang && <HelpText text={pairHelp} lang={lang} />}
    </div>
  ) : pair && (
    <div className="feedback-pair">
      {/* "de helm = the helmet" is one left-to-right unit, also inside right-to-left text. */}
      <span className="pair-main" dir={rtl ? 'ltr' : undefined}>
        {pair.nl && (
          <>
            <strong lang="nl" dir={rtl ? 'ltr' : undefined}>{pair.nl}</strong>
            <span className="pair-eq"> = </span>
          </>
        )}
        <span className="bi-en" lang="en" dir={rtl ? 'ltr' : undefined}>{pair.meaning.en}</span>
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
      <span className="bi-en" lang="en" dir={rtl ? 'ltr' : undefined}>{why.en}</span>
      {why.help && why.lang && <HelpText text={why.help} lang={why.lang} />}
    </div>
  );
  const autoContinue = ex.kind === 'intro' || ex.kind === 'match' || ex.kind === 'tip';
  // One bar: ink for done, yellow for where you are, a kraft tail for mistakes that come back.
  const bar = barParts(index, checked, initial.length, queue.length);
  const doneCount = Math.round(bar.done * bar.slots);
  /** In the retry phase: how many mistakes are left, this one included. */
  const repeatsLeft = index >= initial.length ? queue.length - index : 0;

  return (
    <div className={`player ${rtl ? 'player-rtl' : ''}`}>
      <header className="player-top">
        <button type="button" className="icon-btn" onClick={() => setAskQuit(true)} aria-label="Quit lesson"><CloseIcon size={28} /></button>
        {/* Sound on/off for a learner on the bus; pressed = "Without sound" (saved, see Settings). */}
        <button
          type="button"
          className={`icon-btn sound-toggle ${soundOff ? 'is-off' : ''}`}
          onClick={() => setSound(!soundOff)}
          aria-pressed={soundOff}
          aria-label={ui('withoutSound').en}
          title={(soundOff ? ui('withoutSound') : ui('soundOn')).en}
        >
          {soundOff ? <SpeakerOffIcon size={26} /> : <SpeakerIcon size={26} />}
        </button>
        <div className="bar-wrap">
          <div
            className="lbar"
            role="progressbar"
            aria-label="Lesson progress"
            aria-valuemin={0}
            aria-valuemax={bar.slots}
            aria-valuenow={doneCount}
            aria-valuetext={`${doneCount} / ${bar.slots}`}
          >
            {bar.tail > 0 && <span className="lbar-tail" style={{ width: `${bar.tail * 100}%` }} />}
            {bar.now !== null && (
              <span className="lbar-now" style={{ width: `${100 / bar.slots}%`, transform: `translateX(${(rtl ? -1 : 1) * bar.now * 100}%)` }} />
            )}
            <span className="lbar-fill" style={{ transform: `scaleX(${bar.done})` }} />
            {/* A thin notch between exercises, so the steps can be counted (up to ~20 read fine). */}
            <span className="lbar-ticks" style={{ '--n': bar.slots } as React.CSSProperties} />
            {sweep > 0 && <span key={sweep} className="lbar-sweep" />}
          </div>
          {runLabel && <RunLabel key={sweep} n={runLabel} lang={lang} />}
        </div>
        <span className="lesson-name">
          <Bi text={gloss(lesson.id, lesson.title, lang)} />
        </span>
        {/* Emergency phrases, one tap away during a lesson (a sheet; the lesson waits). */}
        <button
          type="button"
          className="icon-btn sos-btn"
          onClick={() => setPhrases(true)}
          aria-haspopup="dialog"
          aria-label={`Noodzinnen · ${ui('phrasebook').en}${lang?.ui.phrasebook ? ` · ${lang.ui.phrasebook}` : ''}`}
          title={ui('phrasebook').en}
        >
          <AlertIcon size={24} />
        </button>
      </header>

      {soundNote && (
        <div className="sound-note" role="status" key={soundNote}>
          {soundNote === 'off' ? <SpeakerOffIcon size={20} /> : <SpeakerIcon size={20} />}
          <Bi text={ui(soundNote === 'off' ? 'soundOffToast' : 'soundOn', lang)} />
        </div>
      )}
      <main className="player-body" ref={bodyRef}>
        <div className="ex-ghost" ref={ghostRef} aria-hidden />
        <div className={`ex-slide ${entering ? 'ex-enter' : ''}`} key={key} ref={slideRef}>
        <div className="ex-tag">
          {repeatsLeft > 0 ? (
            <>
              {/* Retry phase: the mistakes come back, and the learner sees how many are left. */}
              <span className="tag tag-repeat" lang="nl">Herhalen</span>
              <span className="ex-count" lang="nl">nog {repeatsLeft}</span>
              <Bi className="ex-tag-note" text={fillN(ui('practiseMistakes', lang), repeatsLeft)} />
            </>
          ) : (
            <KindTag kind={ex.kind} lang={lang} />
          )}
        </div>
        {body}
        </div>
      </main>
      <footer className={`player-foot ${footStatic ? 'foot-static' : ''} ${moreBelow ? 'foot-more' : ''}`} ref={footRef}>
        <div className="foot-inner">
          {/* Always present, so screen readers hear what is put in it one tick after Check. */}
          <div className="sr-only" role="status">{live}</div>
          {feedback && outcome && (
            <div className={`feedback feedback-${outcome}`}>
              <span className="feedback-tape" aria-hidden />
              <span className="feedback-icon" aria-hidden>
                {outcome === 'right' ? <CheckIcon size={26} /> : outcome === 'wrong' ? <CloseIcon size={26} /> : <ChevronIcon size={26} />}
              </span>
              {/* A right-to-left help language: the whole label reads from the right, with the
                  Dutch and English pieces kept in their own direction. */}
              <div className="feedback-text" dir={rtl ? 'rtl' : undefined}>
                {/* Heading: the help language first and large; the Dutch words and English under it. */}
                <div className={`feedback-head ${headingMeaning?.help ? 'has-help' : ''}`}>
                  {headingMeaning?.help && lang && <HelpText className="feedback-help" text={headingMeaning.help} lang={lang} />}
                  <div className="feedback-line">
                    <span className="feedback-title" lang="nl" dir={rtl ? 'ltr' : undefined}>
                      {answer.correct ? 'Goed zo!' : ex.kind === 'situation' ? 'Hier gaat het anders' : 'Nog eens!'}
                    </span>
                    {headingMeaning?.help && <span className="feedback-sep" aria-hidden>·</span>}
                    {headingMeaning && <span className="feedback-en" lang="en" dir={rtl ? 'ltr' : undefined}>{headingMeaning.en}</span>}
                  </div>
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
              <button type="button" className="btn btn-ghost" onClick={() => setSound(true)}>
                <Bi text={ui('cantListen', lang)} />
              </button>
            )}
            {/* One button per exercise (it fades in with the exercise). After Check it keeps focus and
                becomes Continue in the outcome's colour, without blending through olive. */}
            <button
              key={key}
              type="button"
              className={`btn btn-go ${checked && swapped && outcome ? `btn-${outcome} btn-swap` : 'btn-primary'}`}
              dir={rtl ? 'rtl' : undefined}
              disabled={!answer}
              onClick={checked ? next : check}
              ref={goRef}
            >
              {/* The help language large, the English small under it (just English without one). */}
              <Bi className="btn-label" text={ui((checked && swapped) || autoContinue ? 'continue' : 'check', lang)} />
              <ButtonBlock icon={(checked && swapped) || autoContinue ? 'next' : 'check'} />
            </button>
          </div>
        </div>
      </footer>
      {askQuit && <QuitSheet lang={lang} onKeep={() => setAskQuit(false)} onStop={onQuit} />}
      {phrases && <PhraseSheet lang={lang} onClose={closePhrases} />}
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
