import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Lesson } from '../content/types';
import type { SectorChoice } from '../content/sectors';
import { fillCount, gloss, said, saidLang, ui, withoutN, type Bilingual } from '../i18n';
import type { Gender, HelpLanguage, UiKey } from '../i18n/types';
import { autoSpeak, sounds, speak, stopSpeech, surelySilent } from '../lib/audio';

/** Can the phone say this line, as far as is known (see surelySilent: no index yet counts as yes). */
const mayBeHeard = (text: string) => !surelySilent(text);
import { useVoices } from './useVoices';
import { tileDiff } from '../lib/answers';
import { breakable } from '../lib/dutch';
import { buildLesson, forRetry, isGraded, isRuleExercise, needsAudio, unheard, wordsInSentence, type Exercise, type RuleKind } from '../lib/exercises';
import { feedbackMeaningKey, feedbackTitle } from '../lib/feedbackTitle';
import { offerSkipSound } from '../lib/skipSound';
import { deviceLabel, firstReportHint, reportMail } from '../lib/report';
import { dutchUi } from '../lib/track';
import { chatWhy } from '../content/chatWhy';
import { sayingQuestion } from '../content/sayings';
import { barParts, nextMisses, nextRun, runStampFor } from '../lib/lessonRun';
import { clearSave, loadSave, makeSave, restoreSave, writeSave } from '../lib/resume';
import { learnerCharacter, voiceFor } from '../lib/voices';
import { nonLatinHelp, pickInsteadOfTyping, writingInput } from '../lib/writing';
import { castFor, colleaguesOf, tipCast, type CharacterId } from './Characters';
import { Bi, HelpText } from './Bi';
import { PlayName } from './SpeakButton';
import { NlPair } from './NlPair';
import { FlameIcon } from './StreakArt';
import {
  BlocksIcon, BubblesIcon, BulbIcon, CheckIcon, ChevronDownIcon, ChevronIcon, CloseIcon, EarIcon, FlagIcon, KeyboardIcon, ListIcon, PairIcon,
  PictureIcon, AskIcon, CalcIcon, QuestionIcon, SignpostIcon, SparkleIcon, SpeakerIcon, SpeakerOffIcon, StopIcon,
} from './Icons';
import { CardStep, cardTag, ModelLine, PayslipStep, RuleCard, RuleFeedbackBody, ruleAnnouncement, ruleVerdict, SceneCard, TrueFalse, WhatDo, WhoAsk } from './RuleSteps';
import { MicIcon, SpeakExercise } from './Speaking';
import { resetMicForLesson, speakingOn, speakSkipped } from '../lib/speaking';
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
  SayingCard,
  ComesBack,
} from './Exercises';

export interface LessonResult {
  accuracy: number;
  review: boolean;
  /** Graded exercises answered right the first time, out of all graded exercises. */
  right: number;
  total: number;
  /** Per word asked on its own (meaning, picture, listen, type): right every first time? */
  words: Record<string, boolean>;
  /** Listening exercises left out ("I can't listen now", or sound switched off midway): not in
   *  `total`, and the result says so ("2 skipped, not counted"). */
  skipped?: number;
}

function solution(ex: Exercise): { text: string; nl: boolean } {
  switch (ex.kind) {
    case 'meaning':
      return { text: ex.word.en, nl: false };
    case 'build':
      return { text: ex.sentence.nl, nl: true };
    case 'chat':
      return { text: ex.reverse ? ex.dialogue.prompt.nl : ex.dialogue.reply.nl, nl: true };
    case 'match':
    case 'tip':
    case 'saying':
    case 'speak':
      return { text: '', nl: false };
    case 'situation':
      return { text: ex.tip.options.find((o) => o.best)!.en, nl: false };
    // A rules step: the feedback label shows the best answer and the why (RuleFeedbackBody);
    // nothing is said by itself after the answer.
    case 'scene':
    case 'rule':
    case 'truefalse':
    case 'whatdo':
    case 'whoask':
    case 'model':
    case 'payslip':
    case 'card':
      return { text: '', nl: false };
    default:
      return { text: ex.word.nl, nl: true };
  }
}

/** Who says the answer: in a chat the right reply is "your" line (Amina, or Bram for a man);
 *  a built sentence belongs to its speaker; a tip or situation to its colleague; single words to Bram. */
function answerVoice(ex: Exercise, gender?: Gender): CharacterId {
  // A reversed chat's answer is the colleague's question (their voice).
  return ex.kind === 'chat' && ex.reverse ? castFor(ex.dialogue.prompt.id, colleaguesOf(gender))
    : ex.kind === 'chat' ? learnerCharacter(gender)
    : ex.kind === 'build' ? castFor(ex.sentence.id)
    : ex.kind === 'situation' || ex.kind === 'tip' ? tipCast(ex.tip, gender)
    : ex.kind === 'saying' ? tipCast(sayingQuestion(ex.saying), gender)
    : 'bram';
}

/** A filled play triangle for the replay button in the feedback label. */
function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden focusable="false">
      <path d="M8 5.2v13.6a1 1 0 0 0 1.5.86l11-6.8a1 1 0 0 0 0-1.72l-11-6.8A1 1 0 0 0 8 5.2z" fill="currentColor" />
    </svg>
  );
}

/**
 * The kraft tag above each exercise: a fixed pictogram per kind of exercise, a short Dutch
 * label, and the same word in the help language (English without one). The steps of the
 * work-rules track have a Dutch label only (the track reads in Dutch: no `key`).
 */
type TagIcon = (p: { size?: number }) => React.ReactElement;
const RULE_TAG: Record<RuleKind, { nl: string; Icon: TagIcon }> = {
  scene: { nl: 'Verhaal', Icon: PictureIcon },
  rule: { nl: 'Regel', Icon: BulbIcon },
  truefalse: { nl: 'Waar of niet waar?', Icon: QuestionIcon },
  // Not "Wat doe je?": many situations are about someone else ("Wat kan Kevin het beste doen?"),
  // and a "je" above them switches person (docs/taal-a2.md, regel 5).
  whatdo: { nl: 'Wat is het beste?', Icon: SignpostIcon },
  whoask: { nl: 'Wie vraag je het?', Icon: AskIcon },
  model: { nl: 'Zo zeg je het', Icon: BubblesIcon },
  payslip: { nl: 'Je loonstrook', Icon: ListIcon },
  // "Reken het uit", or "Lees het kaartje" for a card without a sum (KindTag's `label`).
  card: { nl: 'Reken het uit', Icon: CalcIcon },
};
const KIND_TAG: Record<Exclude<Exercise['kind'], RuleKind>, { nl: string; key: UiKey; Icon: TagIcon }> = {
  intro: { nl: 'Nieuw woord', key: 'newWord', Icon: SparkleIcon },
  meaning: { nl: 'Betekenis', key: 'tagMeaning', Icon: AskIcon },
  dutch: { nl: 'Kies', key: 'tagPick', Icon: PictureIcon },
  listen: { nl: 'Luisteren', key: 'tagListen', Icon: EarIcon },
  type: { nl: 'Typen', key: 'tagType', Icon: KeyboardIcon },
  match: { nl: 'Paren', key: 'tagMatch', Icon: PairIcon },
  build: { nl: 'Zin', key: 'tagBuild', Icon: BlocksIcon },
  chat: { nl: 'Gesprek', key: 'tagChat', Icon: BubblesIcon },
  tip: { nl: 'Tip', key: 'tagTip', Icon: BulbIcon },
  saying: { nl: 'Gezegde', key: 'tagSaying', Icon: BubblesIcon },
  situation: { nl: 'Situatie', key: 'tagSituation', Icon: SignpostIcon },
  speak: { nl: 'Spreken', key: 'tagSpeak', Icon: MicIcon },
};

function KindTag({ kind, lang, nlLabel }: { kind: Exercise['kind']; lang?: HelpLanguage; nlLabel?: string }) {
  if (kind in RULE_TAG || dutchUi(lang)) {
    // Dutch only: a rules step, or the work-rules track's own Dutch label for the kind.
    const rule = RULE_TAG[kind as RuleKind];
    const { nl, Icon } = rule ?? KIND_TAG[kind as Exclude<Exercise['kind'], RuleKind>];
    const label = rule ? nlLabel ?? nl : ui(KIND_TAG[kind as Exclude<Exercise['kind'], RuleKind>].key, lang).help ?? nl;
    return (
      <span className="tag tag-kind">
        <span className="tag-icon" aria-hidden><Icon size={20} /></span>
        <span className="tag-nl" lang="nl">{label}</span>
      </span>
    );
  }
  const { nl, key, Icon } = KIND_TAG[kind as Exclude<Exercise['kind'], RuleKind>];
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

/** The retry phase: "Herhalen · nog N" with the help language large (like the kind tag). */
function RepeatTag({ left, lang }: { left: number; lang?: HelpLanguage }) {
  const word = ui('tagRepeat', lang);
  // The work-rules track: one Dutch label, no second line.
  if (dutchUi(lang)) {
    return (
      <span className="tag tag-kind tag-repeat">
        <span className="tag-nl" lang="nl">Herhalen</span>
        <span className="tag-count" lang="nl">· {left}</span>
      </span>
    );
  }
  return (
    <span className="tag tag-kind tag-repeat">
      <span className="tag-nl" lang="nl">Herhalen</span>
      {word.help && lang ? <HelpText className="tag-help" text={word.help} lang={lang} /> : <span className="tag-help" lang="en">{word.en}</span>}
      <span className="tag-count" lang="nl">· {left}</span>
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
    case 'chat': {
      const line = ex.reverse ? ex.dialogue.prompt : ex.dialogue.reply;
      return { nl: line.nl, meaning: gloss(line.id, line.en, lang) };
    }
    case 'situation': {
      const best = ex.tip.options.find((o) => o.best)!;
      return { meaning: gloss(best.id, best.en, lang) };
    }
    default:
      return null;
  }
}

/** A piece of the status region's announcement, in its own language (a screen reader switches voice). */
export interface LivePart { text: string; lang: string; dir?: 'ltr' | 'rtl' }

/**
 * What the status region says after Check: the outcome, then the right answer. Right: "Goed zo!
 * Correct. <answer>". Wrong: "Het goede antwoord is: <answer>" (the title is the lead). Each piece
 * keeps its language, so the Dutch is read with a Dutch voice and the help language with its own
 * (one plain string in the page's lang="nl" read "kamizelka odblaskowa" with a Dutch voice).
 */
export function announcement(e: Exercise, correct: boolean, lang?: HelpLanguage, almost?: boolean, given?: string): LivePart[] {
  const rv = isRuleExercise(e) ? ruleVerdict(e, correct, given) : null;
  if (rv) return [{ text: ruleAnnouncement(rv), lang: 'nl' }];
  const inOwn = (b: Bilingual): LivePart => ({ text: said(b), lang: saidLang(b), dir: b.help && b.lang ? b.lang.dir : undefined });
  const parts: LivePart[] = [{ text: feedbackTitle(correct, e.kind), lang: 'nl' }];
  if (correct) {
    const outcome = inOwn(ui(feedbackMeaningKey(correct, almost, e.kind), lang));
    parts.push({ ...outcome, text: /[.!?。።؟]$/.test(outcome.text) ? outcome.text : `${outcome.text}.` });
  }
  // Help-language users hear their language, not the English that is hidden on screen.
  const p = answerPair(e, lang);
  if (p?.nl) parts.push({ text: `${p.nl} =`, lang: 'nl', dir: 'ltr' });
  if (p) parts.push(inOwn(p.meaning));
  return parts.filter((x) => x.text);
}

/** The status region's content: each piece in its own language, a space between. */
export function LiveParts({ parts }: { parts: readonly LivePart[] }) {
  return <>{parts.map((x, i) => <span key={i} lang={x.lang} dir={x.dir}>{i ? ' ' : ''}{x.text}</span>)}</>;
}

/** Reduced motion: no smooth scrolling, no movement (see "Reduced motion" in styles.css). */
function reducedMotion(): boolean {
  return typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

/**
 * A run of 3, 5 or 8: a small label over the progress bar for 1.5 s (fades and slides in 6 px,
 * stays, fades out): a still flame, the number and "in a row" in the help language (English
 * without one). It lives in the lesson header, so it is in view whatever the exercise below does
 * and never covers it.
 */
function RunLabel({ n, lang }: { n: number; lang?: HelpLanguage }) {
  const text = withoutN(ui('inARow', lang));
  return (
    <span className="run-label" aria-hidden>
      <span className="run-label-tape" />
      <FlameIcon lit size={20} />
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

type PlayerProps = Parameters<typeof LessonRun>[0];

/**
 * The lesson. "Start again" for a lesson stopped halfway is on the home (it clears the saved
 * place before the lesson opens); the pause sheet is always Keep going / sound / Stop.
 */
export function LessonPlayer(props: PlayerProps) {
  return <LessonRun {...props} />;
}

function LessonRun({ lesson, review, lang, onQuit, onFinish, exercises, repeats, startAt = 0, backSignal = 0, quiet = false, onQuiet, resumable = false, fresh = false, sector, sayings, report = false, reportHint: explain = false }: {
  lesson: Lesson;
  review: boolean;
  /** Fixed exercise list (used by the screenshot harness); normally built from the lesson. */
  exercises?: Exercise[];
  /** Mistakes already queued to come back (screenshot harness, to show the retry phase). */
  repeats?: Exercise[];
  startAt?: number;
  lang?: HelpLanguage;
  /** Stop (the pause sheet): where the lesson was, step `step` (0-based) of `steps`, for the count. */
  onQuit: (at: { step: number; steps: number }) => void;
  /** Goes up by one each time the system Back button is pressed during the lesson. */
  backSignal?: number;
  onFinish: (r: LessonResult) => void;
  /** "Without sound" (a saved setting): no listening, speaking or writing exercises, nothing
   *  plays by itself. */
  quiet?: boolean;
  /** Switches "Without sound" on or off for good (the pause sheet). */
  onQuiet?: (quiet: boolean) => void;
  /**
   * Keep this lesson's place on the device (src/lib/resume.ts): saved after every answer and when
   * the app is hidden, picked up again on the next start, cleared when the lesson is finished.
   */
  resumable?: boolean;
  /**
   * "Start again": the lesson starts from the top, but the saved place is kept until the first
   * answer (a mis-tap on "Start again" followed by Stop loses nothing).
   */
  fresh?: boolean;
  /** The learner's sector: later exercise kinds follow the place on their own path. */
  sector?: SectorChoice;
  /** The first lesson of "Uitdrukkingen en gezegden" is done: a lesson with a saying of its own shows it. */
  sayings?: boolean;
  /** Tester mode (src/lib/report.ts): a flag in the header mails this place in the lesson. */
  report?: boolean;
  /** The first time, a short note says what the flag is for (src/lib/report.ts explainReport). */
  reportHint?: boolean;
}) {
  const persist = resumable && !exercises;
  // An interrupted run of this lesson (same review mode), less than two days old.
  const [saved] = useState(() => {
    const s = persist && !fresh ? loadSave(lesson.id) : null;
    return s && s.review === review ? s : null;
  });
  // The lesson is built from a seed, so a saved run rebuilds the same exercises.
  const [seed] = useState(() => saved?.seed ?? (Date.now() >>> 0));
  // The lesson is planned once, with the setting it started with; switching sound off midway
  // skips the listening exercises that are left instead (see audioOff).
  const [quietAtStart] = useState(() => saved?.quiet ?? quiet);
  // Speaking practice (Settings switch, on by default). A save made with the other setting no
  // longer matches the built list (its kinds differ), so that lesson simply starts fresh.
  const [speakAtStart] = useState(speakingOn);
  // Every lesson tries the microphone again (a failure in an earlier lesson does not carry over).
  useState(resetMicForLesson);
  const [nonLatinAtStart] = useState(() => nonLatinHelp(lang));
  const [sayingsAtStart] = useState(() => Boolean(sayings));
  const initial = useMemo(
    // A learner who reads only another script gets picture cards (or cards with speakers) where
    // a review would show Latin-only text cards (lib/exercises.ts readableDutch).
    () => exercises ?? buildLesson(lesson, { review, seed, quiet: quietAtStart, speak: speakAtStart, nonLatin: nonLatinAtStart, sector, sayings: sayingsAtStart }),
    [exercises, lesson, review, seed, quietAtStart, speakAtStart, nonLatinAtStart, sector, sayingsAtStart],
  );
  // The saved place in that list, with the mistakes queued then (null: start from the top).
  // A mistake comes back in a new form made from its place in the queue (forRetry, as check() does).
  const [resumed] = useState(() => (saved ? restoreSave(saved, initial, (e, at) => forRetry(e, lesson, seed + at)) : null));
  const [queue, setQueue] = useState<Exercise[]>(() => resumed?.queue ?? [...initial, ...(repeats ?? [])]);
  const [index, setIndex] = useState(() => resumed?.index ?? startAt);
  /** For each exercise queued after the built list: the built exercise it came back from (-1: given
   *  from outside, `repeats`), so the place can be saved (lib/resume.ts makeSave). */
  const retryFrom = useRef<number[]>(resumed ? [...saved!.repeats] : (repeats ?? []).map(() => -1));
  const [answer, setAnswer] = useState<Answer | null>(null);
  const [checked, setChecked] = useState(false);
  /** A speaking exercise in its compare-and-rate step: its own buttons go on, Continue hides. */
  const [speakRating, setSpeakRating] = useState(false);
  const graded = useRef(saved && resumed ? { right: saved.right, total: saved.total } : { right: 0, total: 0 });
  /** Right answers in a row (graded exercises only); a miss resets it without a word. */
  const [run, setRun] = useState(resumed ? saved!.run : 0);
  /** Misses in a row: the character's "oops" plays on the first one only. */
  const [misses, setMisses] = useState(resumed ? saved!.misses : 0);
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
  const [live, setLive] = useState<LivePart[]>([]);
  /** The Check choreography's timers; cleared on Continue and when the lesson closes. */
  const timers = useRef<number[]>([]);
  const later = (ms: number, fn: () => void) => { timers.current.push(window.setTimeout(fn, ms)); };
  const clearTimers = () => { timers.current.forEach((t) => window.clearTimeout(t)); timers.current = []; };
  useEffect(() => {
    const list = timers;
    return () => {
      list.current.forEach((t) => window.clearTimeout(t));
      stopSpeech(); // leaving the lesson: stop talking too
    };
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
  const wordResults = useRef<Record<string, boolean>>(resumed ? { ...saved!.words } : {});
  /** "Without sound" without a saved setting to switch (screenshot harness). */
  const [cantListen, setCantListen] = useState(false);
  const soundOff = quiet || cantListen;
  // Not "no speech engine": the recorded clips play without one (a WebView inside WhatsApp has
  // none). An exercise nothing can say is left out on its own (unheard, mayBeHeard).
  const audioOff = soundOff;
  /** Listening exercises left out, counted out loud on the result. */
  const skipped = useRef(0);
  /** Short line after the sound changed: 'off' = without sound, 'on' = sound on. */
  const [soundNote, setSoundNote] = useState<'off' | 'on' | null>(null);
  useEffect(() => {
    if (!soundNote) return;
    const t = setTimeout(() => setSoundNote(null), 4500);
    return () => clearTimeout(t);
  }, [soundNote]);

  // A sentence built by ear becomes the usual one (meaning shown) when the learner can't listen;
  // so does "pick the Dutch word" on text cards for a learner who reads another script (the
  // cards' speakers were their way in): "what does it mean" instead.
  const queued = queue[index];
  // Re-checked when the phone's voices or the recorded voices arrive (see unheard).
  const voices = useVoices();
  const ex: Exercise = useMemo(() => {
    if (queued && queued.kind === 'build' && queued.audio && (audioOff || unheard(queued, mayBeHeard))) return { ...queued, audio: undefined };
    if (queued && queued.kind === 'dutch' && queued.textOnly && nonLatinAtStart && (audioOff || surelySilent(queued.word.nl))) {
      return { kind: 'meaning', word: queued.word, options: queued.options };
    }
    return queued;
  }, [queued, audioOff, nonLatinAtStart, voices.device, voices.recorded]); // eslint-disable-line react-hooks/exhaustive-deps

  /*
   * Resume: the place is saved after every answer (on the exercise that comes next) and when the
   * app goes to the background. The last exercise answered keeps the save from before it, so a
   * reload there asks it again instead of losing the lesson. Finishing clears the save.
   */
  const latest = useRef({ queue, index, checked, run, misses });
  latest.current = { queue, index, checked, run, misses };
  const finished = useRef(false);
  const writeNow = useCallback(() => {
    if (!persist || finished.current) return;
    const s = latest.current;
    const at = s.checked ? s.index + 1 : s.index;
    if (at >= s.queue.length) return;
    // Started again: the old save stays until the first answer.
    if (fresh && at === 0) return;
    const save = makeSave({
      lessonId: lesson.id, review, quiet: quietAtStart, seed, initial, queue: s.queue, index: at, from: retryFrom.current,
      right: graded.current.right, total: graded.current.total, words: wordResults.current,
      run: s.run, misses: s.misses, now: Date.now(),
    });
    if (save) writeSave(save);
  }, [persist, fresh, lesson.id, review, quietAtStart, seed, initial]);
  useEffect(() => { writeNow(); }, [writeNow, index, checked, queue.length]);
  useEffect(() => {
    if (!persist) return;
    // A save that no longer fits the lesson (changed in an update) is dropped.
    if (saved && !resumed) clearSave(lesson.id);
    const onHide = () => { if (document.visibilityState === 'hidden') writeNow(); };
    document.addEventListener('visibilitychange', onHide);
    window.addEventListener('pagehide', writeNow);
    return () => {
      document.removeEventListener('visibilitychange', onHide);
      window.removeEventListener('pagehide', writeNow);
    };
  }, [persist, writeNow]); // eslint-disable-line react-hooks/exhaustive-deps
  // The "Melden" hint, once per phone (src/lib/report.ts), for 8 seconds at most; only for who
  // reads Dutch and came to test (explainReport).
  const [reportHint, setReportHint] = useState(() => report && explain && firstReportHint());
  useEffect(() => {
    if (!reportHint) return;
    const t = window.setTimeout(() => setReportHint(false), 8000);
    return () => window.clearTimeout(t);
  }, [reportHint]);
  // The ✕ and the system Back button open the pause sheet (a resumable lesson keeps its place).
  const [askQuit, setAskQuit] = useState(false);
  /** The ✕: focus goes back to it when the pause sheet closes (its buttons are gone then). */
  const closeRef = useRef<HTMLButtonElement>(null);
  const hadSheet = useRef(false);
  useEffect(() => {
    if (hadSheet.current && !askQuit) closeRef.current?.focus({ preventScroll: true });
    hadSheet.current = askQuit;
  }, [askQuit]);
  const firstBack = useRef(backSignal);
  useEffect(() => {
    if (backSignal === firstBack.current) return;
    // Back opens the pause sheet; Back while it is open means "never mind": close it.
    setAskQuit((open) => !open);
  }, [backSignal]);
  const footRef = useRef<HTMLElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  /**
   * The footer is pinned to the bottom, unless it would take more than three quarters of the
   * screen (200% zoom): then it scrolls with the page. A long feedback label scrolls inside
   * itself instead (styles.css, .feedback-text), so Continue stays in view. --foot-h keeps focused
   * elements clear of a pinned footer (scroll-padding), and moreBelow shows a soft shadow on
   * its top edge while there is more of the exercise underneath it.
   */
  const [footStatic, setFootStatic] = useState(false);
  const measureRef = useRef<(() => void) | null>(null);
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
        const tall = foot.offsetHeight > window.innerHeight * 0.75;
        setFootStatic(tall);
        root.style.setProperty('--foot-h', `${tall ? 0 : foot.offsetHeight}px`);
        // "More below" only when the exercise itself (not just the page's bottom padding) runs
        // more than a few pixels under the footer, and the page can still scroll there.
        const slide = slideRef.current;
        const hidden = slide ? slide.getBoundingClientRect().bottom - foot.getBoundingClientRect().top : 0;
        const canScroll = root.scrollHeight - (window.scrollY + window.innerHeight) > 4;
        setMoreBelow(!tall && canScroll && hidden > 12);
      });
    };
    measureRef.current = measure;
    measure();
    // No ResizeObserver before iOS 13.4: the scroll, resize and animation events below still measure.
    const ro = typeof ResizeObserver === 'function' ? new ResizeObserver(measure) : null;
    ro?.observe(foot);
    ro?.observe(body);
    // The page shrinks when the content does, or when an entering exercise's slide-in ends.
    body.addEventListener('animationend', measure);
    body.addEventListener('transitionend', measure);
    window.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    return () => {
      cancelAnimationFrame(raf);
      ro?.disconnect();
      measureRef.current = null;
      body.removeEventListener('animationend', measure);
      body.removeEventListener('transitionend', measure);
      window.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
      root.style.removeProperty('--foot-h');
    };
  }, []);
  // A new screen (or Check): observe this exercise's slide, so the arrow follows its size.
  useEffect(() => {
    const slide = slideRef.current;
    measureRef.current?.();
    if (!slide || typeof ResizeObserver !== 'function') return;
    const ro = new ResizeObserver(() => measureRef.current?.());
    ro.observe(slide);
    return () => ro.disconnect();
  }, [index, checked]);
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
      // (A chat's reply bubble is not among them: the label repeats the reply, the options matter.)
      // (A drawn card's row that lit up counts too, the payslip's as well: it is what the answer is about.)
      const marked = document.querySelectorAll<HTMLElement>('.player-body .choice.wrong, .player-body .choice.right, .player-body .answer-line, .player-body .slip-hit');
      if (!foot || !marked.length) return;
      const bottom = Math.max(...[...marked].map((el) => el.getBoundingClientRect().bottom));
      const top = Math.min(...[...marked].map((el) => el.getBoundingClientRect().top));
      // The header (close, sound, progress bar) is sticky: nothing may slide under it.
      const head = document.querySelector('.player-top')?.getBoundingClientRect().bottom ?? 0;
      const limit = foot.getBoundingClientRect().top - 12;
      // The pick and the right answer matter more than the tag and the question above them
      // (both stay one scroll away): they may slide under the header, the marked options not.
      const room = top - head - 8;
      let by = Math.min(bottom - limit, Math.max(0, room));
      // Not both in view (a picture choice on a short phone, the pick in the row below): the
      // learner's own pick, with its word, comes first; the label names the right answer.
      const pick = document.querySelector<HTMLElement>('.player-body .choice.wrong')?.getBoundingClientRect();
      if (pick && pick.bottom - by > limit) by = Math.min(pick.bottom - limit, Math.max(0, pick.top - head - 8));
      if (bottom > limit && by > 0) window.scrollBy({ top: by, behavior: reducedMotion() ? 'auto' : 'smooth' });
    });
    return () => cancelAnimationFrame(raf);
  }, [checked]); // eslint-disable-line react-hooks/exhaustive-deps
  /** A complete answer (a tap on an option, the last word of a sentence) is graded at once;
   *  only typing waits for Check. */
  const checkRef = useRef<(a: Answer) => void>(() => {});
  const onAnswer = useCallback((a: Answer | null) => {
    setAnswer(a);
    if (a?.done) checkRef.current(a);
  }, []);
  /** The feedback label has more text below what fits (it scrolls inside itself). */
  const fbRef = useRef<HTMLDivElement>(null);
  const [fbMore, setFbMore] = useState(false);
  const measureFb = useCallback(() => {
    const el = fbRef.current;
    setFbMore(Boolean(el && el.scrollHeight - el.scrollTop - el.clientHeight > 6));
  }, []);
  useEffect(() => {
    if (!checked) { setFbMore(false); return; }
    const t = window.setTimeout(measureFb, 420);
    return () => window.clearTimeout(t);
  }, [checked, measureFb]);

  // A new exercise starts at the top (the last one may have been scrolled to show its feedback).
  useEffect(() => {
    if (window.scrollY > 0) window.scrollTo({ top: 0, behavior: 'auto' });
  }, [index]);
  // A new exercise: focus its question, so a screen reader starts there (typing keeps the input).
  useEffect(() => {
    if (queue[index]?.kind === 'type' && document.activeElement?.tagName === 'INPUT') return;
    // A card without a question (a saying) marks its heading with data-prompt.
    const h = slideRef.current?.querySelector<HTMLElement>('.prompt, [data-prompt]');
    if (!h) return;
    h.tabIndex = -1;
    h.focus({ preventScroll: true });
    // Only the index matters: the queue grows when a mistake is queued, on the same exercise.
  }, [index]); // eslint-disable-line react-hooks/exhaustive-deps

  /** The exercise on screen comes back once at the end, in a new form (lib/exercises.ts forRetry). */
  function queueRetry() {
    retryFrom.current = [...retryFrom.current, index];
    setQueue((q) => [...q, forRetry(ex, lesson, seed + q.length)]);
  }

  function check(given: Answer | null = answer) {
    const answer = given;
    if (!answer || checked) return;
    if (!isGraded(ex)) return next();
    if (index < initial.length) {
      graded.current.total += 1;
      if (answer.correct) graded.current.right += 1;
      if (ex.kind === 'meaning' || ex.kind === 'dutch' || ex.kind === 'listen' || ex.kind === 'type') {
        wordResults.current[ex.word.id] = (wordResults.current[ex.word.id] ?? true) && answer.correct;
      }
      // A rules question: per step (its id), for the daily review of the track (M4).
      if (isRuleExercise(ex)) wordResults.current[ex.step.id] = (wordResults.current[ex.step.id] ?? true) && answer.correct;
      // A match or a sentence that counts as a mistake: the words the wrong taps were on go back
      // to the first box of the review cards too (one stray tap is forgiven, as in the grading).
      if (!answer.correct && answer.missed?.length) {
        const ids = ex.kind === 'match' ? answer.missed
          : ex.kind === 'build' ? wordsInSentence(answer.missed, lesson.words).map((w) => w.id)
          : [];
        for (const id of ids) wordResults.current[id] = false;
      }
    }
    // A finished match board already gave its feedback tile by tile. Two or more wrong taps make
    // it a mistake, which comes back once at the end (as a built sentence does).
    if (ex.kind === 'match') {
      if (!answer.correct && index < initial.length) {
        queueRetry();
        return next(1);
      }
      return next();
    }
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
      sounds.correct();
      const stamp = runStampFor(newRun);
      if (stamp) later(300, () => { setRunLabel(stamp); setSweep((k) => k + 1); });
    } else {
      sounds.wrong();
      // A mistake comes back once at the end of the lesson; no endless loops.
      // It comes back in a new form: other order, other wrong options (lib/exercises.ts forRetry).
      if (index < initial.length) queueRetry();
    }
    const sol = solution(ex);
    const said = announcement(ex, answer.correct, lang, answer.almost, answer.given?.[0]);
    later(30, () => setLive(said));
    // The answer is said by the character on screen, so a woman never speaks with a man's voice:
    // in a chat the right reply is "your" line (Amina); a built sentence belongs to its speaker.
    const who = answerVoice(ex, lang?.gender);
    if (sol.nl) later(answer.correct ? 700 : 450, () => autoSpeak(sol.text, false, 'nl', voiceFor(who)));
  }
  checkRef.current = check;

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
    // Not replaceChildren (missing before Chrome 86 and iOS 14): the next exercise would not come.
    layer.textContent = '';
    layer.appendChild(copy);
    setEntering(true);
    const t = window.setTimeout(() => copy.remove(), 200);
    timers.current.push(t);
  }

  function finish() {
    const { right, total } = graded.current;
    finished.current = true;
    if (persist) clearSave(lesson.id);
    sounds.done();
    onFinish({ accuracy: total ? right / total : 1, review, right, total, words: wordResults.current, skipped: skipped.current });
  }

  function reset() {
    clearTimers();
    // What the last screen was still saying must not run on into the next one.
    stopSpeech();
    setAnswer(null);
    setChecked(false);
    setSwapped(false);
    setSpeakRating(false);
    setLive([]);
  }

  /** A speaking exercise is passed over only without sound (not graded, so not counted as
   *  skipped either). Without a usable microphone it stays, as "say it out loud" (Speaking.tsx). */
  const cantSpeak = (e: Exercise) => e.kind === 'speak' && speakSkipped(soundOff);

  /** On to the next exercise; `queued`: retries just added this moment (not in `queue` yet). */
  function next(queued?: number) {
    const coming = typeof queued === 'number' ? queued : 0;
    reset();
    let i = index + 1;
    // Skip audio-only exercises when the learner can't listen right now, or when nothing on this
    // phone can say the line (no recording yet, no Dutch phone voice: lib/exercises.ts unheard);
    // and speaking that can't happen.
    while (i < queue.length && (((audioOff || unheard(queue[i], mayBeHeard)) && needsAudio(queue[i])) || cantSpeak(queue[i]))) {
      if (i < initial.length && needsAudio(queue[i])) skipped.current += 1;
      i++;
    }
    if (i >= queue.length + coming) {
      finish();
    } else {
      leave();
      setIndex(i);
    }
  }

  /** Leave the listening, speaking or writing exercise on screen (unanswered) for the next one
   *  that needs no sound. */
  function skipAudio() {
    reset();
    // Only exercises that would have counted are "skipped" (a mistake coming back is not).
    if (index < initial.length && needsAudio(ex)) skipped.current += 1;
    let i = index + 1;
    while (i < queue.length && (needsAudio(queue[i]) || cantSpeak(queue[i]))) { if (i < initial.length && needsAudio(queue[i])) skipped.current += 1; i++; }
    if (i >= queue.length) finish();
    else {
      leave();
      setIndex(i);
    }
  }

  /** "Without sound" from the pause sheet (a saved setting), or sound back on. From now on the
   *  listening, speaking and writing exercises are left out (they replace the old "I can't
   *  listen / speak / write now" buttons). */
  function setSound(off: boolean) {
    if (onQuiet) onQuiet(off);
    else setCantListen(off);
    setSoundNote(off ? 'off' : 'on');
    // Switched off while such an exercise waits for an answer: go on without it.
    if (off && !checked && (needsAudio(ex) || ex.kind === 'speak')) skipAudio();
  }
  const verdict: 'right' | 'wrong' | undefined = checked && answer && isGraded(ex) ? (answer.correct ? 'right' : 'wrong') : undefined;
  const props = { lang, locked: checked, onAnswer, verdict, run, misses };
  const key = `${index}`;
  // The footer button changes under the finger (Check becomes Continue; Continue brings a card
  // that answers itself, as a new word does): the second tap of a double tap is not a new tap.
  const footChanged = useRef(0);
  useEffect(() => { footChanged.current = performance.now(); }, [index, checked]);
  const footTap = () => {
    if (performance.now() - footChanged.current < 300) return;
    if (checked) next();
    else check();
  };
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
    case 'saying': body = <SayingCard key={key} ex={ex} {...props} />; break;
    case 'situation': body = <SituationExercise key={key} ex={ex} {...props} />; break;
    case 'speak': body = <SpeakExercise key={key} ex={ex} lang={lang} onAnswer={onAnswer} onNext={next} onRating={setSpeakRating} />; break;
    case 'scene': body = <SceneCard key={key} ex={ex} {...props} />; break;
    case 'rule': body = <RuleCard key={key} ex={ex} {...props} />; break;
    case 'truefalse': body = <TrueFalse key={key} ex={ex} {...props} />; break;
    case 'whatdo': body = <WhatDo key={key} ex={ex} {...props} />; break;
    case 'whoask': body = <WhoAsk key={key} ex={ex} {...props} />; break;
    case 'model': body = <ModelLine key={key} ex={ex} {...props} />; break;
    case 'payslip': body = <PayslipStep key={key} ex={ex} {...props} />; break;
    case 'card': body = <CardStep key={key} ex={ex} {...props} />; break;
  }

  const feedback = checked && isGraded(ex) && answer;
  // The answer as a pair: "het hesje = the safety vest", help language underneath.
  // (In a chat this is what the right reply means; in a situation, the usual choice.)
  const pair = answerPair(ex, lang);
  // The heading is Dutch ("Goed zo!" / "Het goede antwoord is:"); its meaning sits under it in small type.
  // A situation is graded like the rest: the usual choice is green with a check; any other
  // choice is red with a cross and the best answer under it (never a neutral sheet).
  const outcome: 'right' | 'wrong' | null = feedback ? (answer.correct ? 'right' : 'wrong') : null;
  // A rules question: Dutch only (its title, the picked option's line, the best answer, why).
  const ruleFb = feedback && isRuleExercise(ex) ? ruleVerdict(ex, answer.correct, answer.given?.[0]) : null;
  const headingMeaning = ruleFb ? null : feedback ? ui(feedbackMeaningKey(answer.correct, answer.almost, ex.kind), lang) : null;
  const pairHelp = pair?.meaning.help ?? '';
  // A wrong sentence: the right one as tiles, the words that were out of place or missing
  // underlined in red (a position diff of the tiles laid against the solution).
  const diff = feedback && !answer.correct && ex.kind === 'build' && answer.given ? tileDiff(answer.given, ex.sentence.nl) : null;
  // A built sentence or a chat reply: a ▶ that says it again in the speaker's voice, the Dutch
  // (as tiles after a wrong sentence), its meaning large in the help language, English small.
  const sayable = feedback && pair?.nl && (ex.kind === 'build' || ex.kind === 'chat');
  const replay = sayable && pair?.nl ? (
    <button
      type="button"
      className="replay-btn"
      onClick={() => speak(pair.nl!, false, 'nl', voiceFor(answerVoice(ex, lang?.gender)))}
      title={said(ui('playAgain', lang))}
    >
      <PlayName text={pair.nl} help={lang} say="playAgain" />
      <PlayGlyph />
    </button>
  ) : null;
  const pairLine = pair && sayable ? (
    <div className="feedback-pair feedback-say">
      <div className="pair-say" dir="ltr">
        {replay}
        {diff ? (
          <span className="pair-tiles" lang="nl">
            {diff.map((t, i) => (
              <span key={i} className={`ftile ${t.ok ? '' : 'ftile-miss'}`}>
                {breakable(t.word)}
                {!t.ok && <span className="sr-only" lang={saidLang(ui('incorrect', lang))}> ({said(ui('incorrect', lang))})</span>}
              </span>
            ))}
          </span>
        ) : (
          <strong className="pair-nl" lang="nl">{breakable(pair.nl ?? '')}</strong>
        )}
      </div>
      {pairHelp && lang && <HelpText className="pair-gloss" text={pairHelp} lang={lang} />}
      <span className={`pair-en ${pairHelp && lang ? 'en-support' : ''}`} lang="en" dir={rtl ? 'ltr' : undefined}>{pair.meaning.en}</span>
    </div>
  ) : pair && (
    <div className="feedback-pair">
      {/* "de helm = the helmet" is one left-to-right unit, also inside right-to-left text. */}
      <span className="pair-main" dir="ltr">
        {pair.nl && <strong lang="nl" dir="ltr">{breakable(pair.nl)}</strong>}
        {/* "= thank you" stays on one line when it is short; it may move under the Dutch as a
            whole, but never breaks inside. */}
        <span className={`pair-rest ${pair.meaning.en.length <= 28 ? 'pair-short' : ''} ${pairHelp && lang ? 'en-support' : ''}`} dir="ltr">
          {pair.nl && <span className="pair-eq">= </span>}
          <span className="bi-en" lang="en" dir="ltr">{pair.meaning.en}</span>
        </span>
      </span>
      {pairHelp && lang && (
        <HelpText text={pairHelp} lang={lang} />
      )}
    </div>
  );
  // Situations explain why the usual answer works here.
  // A chat after a wrong pick: one short line on why the right reply fits.
  const chatReason = ex.kind === 'chat' && !ex.reverse && feedback && !answer.correct ? chatWhy(ex.dialogue.reply.id) : undefined;
  const why = ex.kind === 'situation' ? gloss(ex.tip.why.id, ex.tip.why.en, lang) : chatReason ? gloss(chatReason.id, chatReason.en, lang) : null;
  const whyLine = why && (
    <div className="feedback-meaning feedback-why">
      <span className={`bi-en ${why.help && why.lang ? 'en-support' : ''}`} lang="en" dir={rtl ? 'ltr' : undefined}>{why.en}</span>
      {why.help && why.lang && <HelpText text={why.help} lang={why.lang} />}
    </div>
  );
  const autoContinue = ex.kind === 'intro' || ex.kind === 'match' || ex.kind === 'tip' || ex.kind === 'saying' || ex.kind === 'speak' || (isRuleExercise(ex) && !isGraded(ex));
  // One bar: ink for done, yellow for where you are, a kraft tail for mistakes that come back.
  const bar = barParts(index, checked, initial.length, queue.length);
  const doneCount = Math.round(bar.done * bar.slots);
  /** In the retry phase: how many mistakes are left, this one included. */
  const repeatsLeft = index >= initial.length ? queue.length - index : 0;
  /** Type what you hear, shown as "hear and pick the written word" (lib/writing.ts), or as real
   *  dictation (`writing`), which offers "I can't write this yet" instead of "I can't listen". */
  const typePick = ex.kind === 'type' && pickInsteadOfTyping(lang) && (ex.options?.length ?? 0) > 1;
  /** Dictation with the keyboard: the one exercise that needs Check (to say the word is done). */
  const typing = ex.kind === 'type' && !typePick && writingInput(lang) === 'keys';

  /** The footer button: Continue after an answer, Check while typing (nothing before a tap). */
  const showGo = !speakRating && Boolean(checked || answer || typing);

  return (
    // A right-to-left help language mirrors the whole player (header, cards, feedback); the Dutch
    // and English in it keep their own direction (lang="nl" / lang="en" isolates, styles.css).
    <div className={`player ${rtl ? 'player-rtl' : ''}`} dir={rtl ? 'rtl' : 'ltr'}>
      <header className="player-top" inert={askQuit}>
        {/* The only control up here: ✕ opens the pause sheet (keep going, without sound, stop). */}
        <button ref={closeRef} type="button" className="icon-btn lesson-close" onClick={() => setAskQuit(true)} aria-label={said(ui('quitLesson', lang))} lang={saidLang(ui('quitLesson', lang))} aria-haspopup="dialog"><CloseIcon size={28} /></button>
        <div className="bar-wrap">
          <div
            className="lbar"
            role="progressbar"
            aria-label={said(ui('lessonProgress', lang))}
            lang={saidLang(ui('lessonProgress', lang))}
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
          {/* The run label sits over the progress bar, inside the header: it never covers the
              exercise's tag or question. */}
          {runLabel && <RunLabel key={sweep} n={runLabel} lang={lang} />}
        </div>
        {/* The screen's heading for screen readers (one h1 per screen, as elsewhere); the visible
            name shows on wider screens only. */}
        <h1 className="sr-only"><Bi text={gloss(lesson.id, lesson.title, lang)} /></h1>
        <span className="lesson-name" aria-hidden>
          <Bi text={gloss(lesson.id, lesson.title, lang)} />
        </span>
        {/* "Melden" (on by default in the beta, src/lib/report.ts): mail this place (lesson, step, word) to hoi@vloertaal.nl. In Dutch. */}
        {report && (
          <a
            className="icon-btn lesson-report"
            href={reportMail({
              lessonId: lesson.id,
              title: lesson.title,
              step: index,
              steps: queue.length,
              exercise: ex,
              lang: lang?.code,
              device: deviceLabel(navigator.userAgent),
              build: (import.meta.env.VITE_BUILD as string | undefined) ?? 'dev',
            })}
            aria-label="Iets melden"
            title="Iets melden"
            lang="nl"
          >
            <FlagIcon size={22} />
            <span className="lesson-report-label">Melden</span>
          </a>
        )}
        {/* Once per phone, in the first lesson with the flag: what it is for. Not a button (it
            goes by itself, after the first answer or a few seconds). */}
        {report && reportHint && !checked && (
          <div className="report-hint" role="note" lang="nl">
            Iets gezien, of een tip? Tik op <strong>Melden</strong>. Dan mail je ons, met de plek erbij.
          </div>
        )}
        {/* The sound note hangs just under the header, never over the close button, the sound
            toggle or the progress bar. */}
        {soundNote && (
          <div className="sound-note" role="status" key={soundNote}>
            {soundNote === 'on' ? <SpeakerIcon size={20} /> : <SpeakerOffIcon size={20} />}
            <Bi text={ui(soundNote === 'off' ? 'soundOffToast' : 'soundOn', lang)} />
          </div>
        )}
      </header>

      {/* A wrong answer in the first round comes back at the end; in the retry round it does not (the stamp says which). */}
      <ComesBack.Provider value={index < initial.length}>
      <div className="player-body" ref={bodyRef} inert={askQuit}>
        <div className="ex-ghost" ref={ghostRef} aria-hidden />
        <div className={`ex-slide ${entering ? 'ex-enter' : ''}`} key={key} ref={slideRef}>
        <div className="ex-tag">
          {repeatsLeft > 0 ? (
            <>
              {/* Retry phase: the mistakes come back, and the learner sees how many are left. */}
              {/* The chip says it in the help language too (large), the Dutch small beside it. */}
              <RepeatTag left={repeatsLeft} lang={lang} />
              <Bi className="ex-tag-note" text={fillCount('practiseMistakes', repeatsLeft, lang)} />
            </>
          ) : (
            <KindTag kind={typePick ? 'listen' : ex.kind} lang={lang} nlLabel={ex.kind === 'card' ? cardTag(ex.step) : undefined} />
          )}
        </div>
        {body}
        {/* The pause sheet's "Zonder geluid", right where it is needed (src/lib/skipSound.ts). */}
        {offerSkipSound(ex, { checked, soundOff }) && (
          <button type="button" className="skip-sound" onClick={() => setSound(true)}>
            <SpeakerOffIcon size={18} />
            <Bi text={ui('cantListen', lang)} />
          </button>
        )}
        </div>
      </div>
      </ComesBack.Provider>
      {/* With nothing in it yet (an answer is a tap on an option), the footer takes no room, so it
          never covers the last option; a still chevron (not a button) then says there is more. */}
      <footer className={`player-foot ${footStatic ? 'foot-static' : ''} ${moreBelow ? 'foot-more' : ''} ${!showGo && !feedback ? 'foot-empty' : ''}`} ref={footRef} inert={askQuit}>
        {moreBelow && !checked && !showGo && (
          <span className="foot-more-hint" aria-hidden><ChevronDownIcon size={22} /></span>
        )}
        {/* More of the exercise underneath: a visible "more" chevron (the shadow alone is easy to miss). */}
        {/* Only beside a footer button: with nothing in the footer, nothing is hidden under it. */}
        {moreBelow && !checked && showGo && (
          <button
            type="button"
            className="foot-more-btn"
            aria-label={said(ui('scrollDown', lang))}
            lang={saidLang(ui('scrollDown', lang))}
            onClick={() => window.scrollBy({ top: Math.round(window.innerHeight * 0.4), behavior: reducedMotion() ? 'auto' : 'smooth' })}
          >
            <ChevronDownIcon size={22} />
          </button>
        )}
        <div className="foot-inner">
          {/* Always present, so screen readers hear what is put in it one tick after Check. */}
          <div className="sr-only" role="status"><LiveParts parts={live} /></div>
          {feedback && outcome && (
            <div className={`feedback feedback-${outcome}`}>
              <span className="feedback-tape" aria-hidden />
              <span className="feedback-icon" aria-hidden>
                {outcome === 'right' ? <CheckIcon size={26} /> : <CloseIcon size={26} />}
              </span>
              {/* A right-to-left help language: the whole label reads from the right, with the
                  Dutch and English pieces kept in their own direction. */}
              <div className={`feedback-text ${fbMore ? 'has-more' : ''}`} dir={rtl ? 'rtl' : undefined} ref={fbRef} onScroll={measureFb} tabIndex={fbMore ? 0 : undefined}>
                {/* Heading: the help language first and large; the Dutch words and English under it. */}
                <div className={`feedback-head ${headingMeaning?.help ? 'has-help' : ''}`}>
                  {headingMeaning?.help && lang && <HelpText className="feedback-help" text={headingMeaning.help} lang={lang} />}
                  <div className="feedback-line">
                    <span className="feedback-title" lang="nl" dir={rtl ? 'ltr' : undefined}>
                      {ruleFb ? ruleFb.title : feedbackTitle(answer.correct, ex.kind)}
                    </span>
                    {headingMeaning?.help && <span className="feedback-sep en-support" aria-hidden>·</span>}
                    {headingMeaning && <span className={`feedback-en ${headingMeaning.help && lang ? 'en-support' : ''}`} lang="en" dir={rtl ? 'ltr' : undefined}>{headingMeaning.en}</span>}
                  </div>
                </div>
                {ruleFb && <RuleFeedbackBody v={ruleFb} lang={lang} />}
                {(pairLine || whyLine) && <hr className="feedback-rule" />}
                {/* After a wrong answer the heading is the lead; the answer itself is green with a check. */}
                {!answer.correct && pairLine ? (
                  <div className="feedback-answer">
                    <span className="feedback-answer-check" aria-hidden><CheckIcon size={20} /></span>
                    {pairLine}
                  </div>
                ) : pairLine}
                {whyLine}
              </div>
              {fbMore && <span className="feedback-more" aria-hidden><ChevronDownIcon size={20} /></span>}
            </div>
          )}
          <div className="foot-actions">
            {/* One button per exercise. A tap on an option is the answer, so before it there is no
                button at all; only typing has Check (disabled until something is typed). After
                the answer it keeps focus and becomes Continue in the outcome's colour. While a
                spoken try is compared, "Sounds the same" is the one way on, so it is not shown. */}
            {showGo && <button
              key={key}
              type="button"
              className={`btn btn-go ${checked && swapped && outcome ? `btn-${outcome} btn-swap` : 'btn-primary'}`}
              dir={rtl ? 'rtl' : undefined}
              disabled={!answer}
              onClick={footTap}
              ref={goRef}
            >
              {/* The help language large, the English small under it (just English without one). */}
              <Bi className="btn-label" text={ui((checked && swapped) || autoContinue ? 'continue' : 'check', lang)} />
              <ButtonBlock icon={(checked && swapped) || autoContinue ? 'next' : 'check'} />
            </button>}
          </div>
        </div>
      </footer>
      {askQuit && (
        <PauseSheet
          lang={lang}
          kept={persist}
          soundOff={soundOff}
          onKeep={() => setAskQuit(false)}
          onSound={() => { setAskQuit(false); setSound(!soundOff); }}
          onStop={() => onQuit({ step: index, steps: queue.length })}
        />
      )}
    </div>
  );
}

/**
 * The pause sheet behind the ✕: always three big buttons, each with its icon. Keep going is the
 * main one; then "Without sound" (leave out listening, speaking and writing from now on; "Sound
 * on" when it is already off); then Stop. Help (the phrasebook) is one tap further: Stop, then
 * Help in the bottom bar. "Start again" lives on the home, next to Continue (on the topic page
 * when "Herhaal vandaag" takes its place on the home): a fourth button here would break the 3.
 * kept: the lesson's place is saved (resume), so the hint says the progress stays.
 */
function PauseSheet({ lang, kept, soundOff, onKeep, onSound, onStop }: {
  lang?: HelpLanguage;
  kept: boolean;
  soundOff: boolean;
  onKeep: () => void;
  onSound: () => void;
  onStop: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onKeep(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onKeep]);
  return (
    <div className="sheet-backdrop" onClick={onKeep}>
      <div className="sheet pause-sheet" role="alertdialog" aria-modal="true" aria-labelledby="quit-title" aria-describedby="quit-hint" onClick={(e) => e.stopPropagation()}>
        <span className="sheet-hazard" aria-hidden />
        {/* A neutral title: the sheet offers going on, a quiet lesson (or starting again) and stopping. */}
        <h2 id="quit-title" className="sheet-title max3-title">
          <NlPair nl="Pauze" nlClass="max3-title-nl" text={ui('pauseTitle', lang)} />
        </h2>
        <p id="quit-hint" className="sheet-hint">
          {kept && <span className="sheet-hint-nl" lang="nl">Je voortgang blijft bewaard.</span>}
          <Bi text={ui(kept ? 'quitKept' : 'quitHint', lang)} />
        </p>
        <div className="sheet-actions">
          <button type="button" className="btn btn-go btn-primary" onClick={onKeep} autoFocus>
            <Bi text={ui('keepGoing', lang)} />
            <ButtonBlock icon="next" />
          </button>
          <button type="button" className="btn sheet-second sheet-sound" onClick={onSound} aria-pressed={soundOff}>
            <span className="sheet-second-icon" aria-hidden>{soundOff ? <SpeakerIcon size={24} /> : <SpeakerOffIcon size={24} />}</span>
            <Bi text={ui(soundOff ? 'soundOn' : 'withoutSound', lang)} />
          </button>
          <button type="button" className="btn sheet-stop" onClick={onStop}>
            <span className="sheet-second-icon sheet-stop-icon" aria-hidden><StopIcon size={24} /></span>
            <Bi text={ui('stopLesson', lang)} />
          </button>
        </div>
      </div>
    </div>
  );
}

