import { useEffect, useMemo, useRef, useState } from 'react';
import type { ChatLine } from '../content/types';
import { fillN, gloss, said as srText, saidLang, ui, type Bilingual } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { checkTyped, tokenize } from '../lib/answers';
import { autoSpeak, sounds, speak } from '../lib/audio';
import { buildSteps, choicePictures, MATCH_ASKED, sentencePicture, type Exercise } from '../lib/exercises';
import { shuffle } from '../lib/random';
import { breakable, wordSize } from '../lib/dutch';
import { Bi, HelpText } from './Bi';
import { NlPair } from './NlPair';
import { castFor, Character, colleaguesOf, MeAvatar, type CharacterId, type Mood, tipCast, useTalking } from './Characters';
import { CheckIcon, CloseIcon, SpeakerIcon } from './Icons';
import { cheerFor, matchStart, matchTap, stepGrade, type MatchState } from '../lib/lessonRun';
import { learnerVoice, voiceFor } from '../lib/voices';
import { WordPicture } from '../pictures';
import { hasPicture } from '../lib/wordPicture';
import { SpeakButton } from './SpeakButton';
import { letterSteps } from '../lib/letters';
import { createRng } from '../lib/random';
import { nonLatinHelp, pickInsteadOfTyping, writingInput } from '../lib/writing';
import { HelpSay } from './HelpSay';

export interface Answer {
  correct: boolean;
  /** Accepted, but with a spelling note. */
  almost?: boolean;
  /** Sentence building: the tiles in the order the learner put them. */
  given?: string[];
  /** The answer is complete: grade it now (a tap on an option, the last word of a sentence).
   *  Without it the learner still finishes with Check (typing). */
  done?: boolean;
  /** Tapped answers: what the wrong taps were on. A match: the ids of the words that got a
   *  wrong tap; a sentence: the Dutch words at the places that got one (LessonPlayer feeds them
   *  to the review cards when the answer counts as a mistake). */
  missed?: string[];
}

interface Props<K extends Exercise['kind']> {
  ex: Extract<Exercise, { kind: K }>;
  lang?: HelpLanguage;
  /** True after "Check": inputs freeze and the right answer is highlighted. */
  locked: boolean;
  onAnswer: (a: Answer | null) => void;
  /** After "Check" on a graded exercise: was the answer right? Characters react to it. */
  verdict?: 'right' | 'wrong';
  /** Right answers in a row, this one included (0 after a miss): sets how big the cheer is. */
  run?: number;
  /** Misses in a row, this one included: the "oops" gesture plays on the first only. */
  misses?: number;
}

type Verdict = Props<'meaning'>['verdict'];

/**
 * How a character in an exercise feels about the verdict. A right answer is a calm nod with a
 * smile (and a thumb up for some); a wrong one a brief head tilt. The run does not make it
 * bigger (the run label shows the run). `calm` characters (the colleague in a chat or a
 * situation) only ever nod. The pose holds until Continue, so a still frame reads as "right"
 * or "wrong".
 */
function moodFor(verdict: Verdict, rest: Mood = 'idle', calm = false): Mood {
  if (verdict === 'right') return calm ? 'pleased' : 'happy';
  if (verdict === 'wrong') return 'sad';
  return rest;
}

/** Reaction tiers by run (lib/lessonRun.ts) and by misses in a row, as classes. The calm style
 *  gives them (almost) the same look; they stay as hooks. */
function reactClass(verdict: Verdict, run = 1, misses = 1): string {
  if (verdict === 'right' && cheerFor(run) === 'pump') return 'ch-small';
  if (verdict === 'right' && cheerFor(run) === 'big') return 'ch-big';
  if (verdict === 'wrong' && misses > 1) return 'ch-calm';
  return '';
}

/**
 * A colleague beside the question (or saying the word in a speech bubble). `quietUntilChecked`:
 * the mouth only moves with the spoken answer after Check, never when the learner taps an
 * option (that would give the answer away).
 */
function Speaker({ who, lines, verdict, run, misses, size, quietUntilChecked = false }: {
  who: CharacterId;
  lines: string[];
  verdict?: Verdict;
  run?: number;
  misses?: number;
  size?: number;
  quietUntilChecked?: boolean;
}) {
  const talking = useTalking(quietUntilChecked && !verdict ? [] : lines, !quietUntilChecked);
  return (
    <span className={`speaker-char ${size ? 'speaker-char-sm' : ''}`}>
      <Character who={who} mood={moodFor(verdict)} talking={talking} size={size} className={reactClass(verdict, run, misses)} />
    </span>
  );
}

/** Bram beside a question that has no speech bubble (picture choice, listening, typing). */
function PromptWithBram({ text, verdict, run, misses, word, quietUntilChecked }: {
  text: Bilingual;
  verdict?: Verdict;
  run?: number;
  misses?: number;
  word: string;
  quietUntilChecked?: boolean;
}) {
  return (
    <div className="prompt-row">
      <Prompt text={text} />
      <Speaker who="bram" lines={[word]} verdict={verdict} run={run} misses={misses} size={68} quietUntilChecked={quietUntilChecked} />
    </div>
  );
}

/** The one rubber stamp in a lesson: brick-red NOG EENS on a wrong pick. A right answer gets no
 *  stamp (its check, the green label and the green button say it already). Decorative: the
 *  feedback label below says the same in words. */
function WrongStamp({ lang }: { lang?: HelpLanguage }) {
  const sub = ui('stampAgain', lang);
  return (
    <span className="stamp stamp-wrong" aria-hidden>
      <span className="stamp-word" lang="nl">Nog<br />eens</span>
      {/* The Dutch marker in the help language too, small under it (English without one). */}
      {sub.help && lang ? <HelpText className="stamp-sub" text={sub.help} lang={lang} /> : <span className="stamp-sub" lang="en">{sub.en}</span>}
    </span>
  );
}

/** A wrong tap's mark (a short shake, red, a small cross) stays a moment, then goes: calm
 *  feedback, and the exercise waits for the right one. */
function useMiss<T>(): [T | null, (v: T | null) => void] {
  const [miss, setMiss] = useState<{ v: T } | null>(null);
  useEffect(() => {
    if (!miss) return;
    const t = window.setTimeout(() => setMiss(null), 900);
    return () => window.clearTimeout(t);
  }, [miss]);
  return [miss ? miss.v : null, (v) => setMiss(v === null ? null : { v })];
}

/** The question. Focus moves here on a new exercise (tabIndex -1), see LessonPlayer. */
function Prompt({ text }: { text: Bilingual }) {
  return (
    <h2 className="prompt" tabIndex={-1}>
      <Bi text={text} />
    </h2>
  );
}

export function IntroCard({ ex, lang, onAnswer }: Props<'intro'>) {
  const { word } = ex;
  useEffect(() => {
    autoSpeak(word.nl);
    onAnswer({ correct: true });
  }, [word, onAnswer]);
  return (
    <div className="exercise">
      {/* The kraft tag above already says "Nieuw woord" (with its translation beside it), so the
          heading tells the learner what to do: listen to the word. */}
      <Prompt text={ui('tapToHear', lang)} />
      {/* Abstract words get no picture (it would mislead): a calm word card, word + sound + gloss. */}
      <div className={`card intro-card ${hasPicture(word) ? '' : 'intro-word-only'}`}>
        {hasPicture(word) && <WordPicture className="emoji-xl" id={word.id} emoji={word.emoji} size={140} />}
        <div className={`intro-nl ${wordSize(word.nl)}`}>
          <span lang="nl">{breakable(word.nl)}</span>
          {/* One speaker: normal speed, then slowly on the next tap (SpeakButton). */}
          <span className="intro-sounds">
            <SpeakButton text={word.nl} help={lang} />
          </span>
        </div>
        <Bi className="intro-meaning" text={gloss(word.id, word.en, lang)} />
      </div>
    </div>
  );
}

function ChoiceGrid<T extends { id: string }>({ options, render, correctId, locked, onAnswer, onPick, className, style, stamp = true, lang, side }: {
  options: T[];
  lang?: HelpLanguage;
  /** A control beside each card (its own button, e.g. a speaker that only plays the option). */
  side?: (w: T) => React.ReactNode;
  /** NOG EENS on a wrong pick (not in a situation, where another choice is not "wrong"). */
  stamp?: boolean;
  className?: string;
  style?: React.CSSProperties;
  render: (w: T) => React.ReactNode;
  correctId: string;
  locked: boolean;
  onAnswer: (a: Answer | null) => void;
  onPick?: (w: T) => void;
}) {
  const [picked, setPicked] = useState<string | null>(null);
  const pick = (w: T) => {
    if (locked) return;
    sounds.tap();
    setPicked(w.id);
    onPick?.(w);
    // A tap is the answer: it is graded at once and the options lock (LessonPlayer).
    onAnswer({ correct: w.id === correctId, done: true });
  };
  // Number keys 1–9 pick an option, like the hints on each card say.
  useEffect(() => {
    if (locked) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey || e.repeat) return;
      // Only with focus on the page itself, the question or an option: never while typing in a
      // field, and never behind a sheet (the emergency phrases, the pause sheet).
      const t = document.activeElement as HTMLElement | null;
      const free = !t || t === document.body || t.classList.contains('prompt') || Boolean(t.closest('.choices'));
      if (!free || t?.closest('input, textarea, select, [contenteditable="true"], [role="dialog"], [role="alertdialog"]')) return;
      const n = Number(e.key);
      if (Number.isInteger(n) && n >= 1 && n <= options.length) pick(options[n - 1]);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });
  return (
    <div className={`choices ${locked ? 'checked' : ''} ${className ?? ''}`} style={style}>
      {options.map((w, i) => {
        const state = locked
          ? w.id === correctId
            ? 'right'
            : w.id === picked
              ? 'wrong'
              : ''
          : w.id === picked
            ? 'picked'
            : '';
        // After Check the options stay focusable (aria-disabled, not disabled) and say what
        // they were; the number box shows a check or a cross, so colour is never the only cue.
        // After a wrong pick the right option is only outlined ("reveal"), never filled like a win.
        const card = (
          <button
            key={w.id}
            type="button"
            className={`choice ${state} ${state === 'right' && picked !== w.id ? 'reveal' : ''} ${locked && !state ? 'faded' : ''}`}
            aria-pressed={w.id === picked}
            aria-disabled={locked || undefined}
            onClick={() => pick(w)}
          >
            <span className="choice-num" aria-hidden>
              {state === 'right' ? <CheckIcon size={26} /> : state === 'wrong' ? <CloseIcon size={26} /> : i + 1}
            </span>
            {render(w)}
            {state === 'right' && <span className="sr-only" lang={saidLang(ui('correctAnswer', lang))}>, {srText(ui('correctAnswer', lang))}</span>}
            {state === 'wrong' && <span className="sr-only" lang={saidLang(ui('incorrect', lang))}>, {srText(ui('yourAnswer', lang))}: {srText(ui('incorrect', lang))}</span>}
            {state === 'wrong' && stamp && <WrongStamp lang={lang} />}
          </button>
        );
        return side ? <div key={w.id} className={`choice-wrap ${locked && !state ? 'faded' : ''}`}>{card}{side(w)}</div> : card;
      })}
    </div>
  );
}

/** Dutch word shown → pick the English meaning. */
export function MeaningExercise({ ex, lang, locked, onAnswer, verdict, run, misses }: Props<'meaning'>) {
  useEffect(() => { autoSpeak(ex.word.nl, false, 'nl', voiceFor('bram')); }, [ex.word]);
  const pics = choicePictures(ex.word, ex.options);
  return (
    <div className="exercise">
      <Prompt text={ui('whatDoesThisMean', lang)} />
      <div className={`speaker speaker-word ${wordSize(ex.word.nl)}`}>
        <Speaker who="bram" lines={[ex.word.nl]} verdict={verdict} run={run} misses={misses} />
        <div className="speaker-bubble">
          <SpeakButton text={ex.word.nl} help={lang} voice={voiceFor('bram')} />
          <span className="speaker-nl" lang="nl">{breakable(ex.word.nl)}</span>
        </div>
      </div>
      <ChoiceGrid
        className="choices-rows"
        options={ex.options}
        correctId={ex.word.id}
        locked={locked}
        lang={lang}
        onAnswer={onAnswer}
        render={(w) => (
          <>
            {/* A small picture of each option (abstract words keep a text-only row). When the
                answer has no picture, no option shows one: the one row without a picture
                would give it away. */}
            {pics[ex.options.indexOf(w)] && <WordPicture className="choice-pic" id={w.id} emoji={w.emoji} size={56} />}
            <Bi className="choice-label" text={gloss(w.id, w.en, lang)} />
          </>
        )}
      />
    </div>
  );
}

/**
 * Picture cards: the DUTCH word is said and written, and the learner picks its picture (so it
 * can't be solved from the help language alone); the pictures get their Dutch names after the
 * answer. Text cards (`textOnly`): the meaning is shown and the learner picks the Dutch word.
 */
export function DutchExercise(props: Props<'dutch'>) {
  return props.ex.textOnly ? <DutchFromMeaning {...props} /> : <PictureFromDutch {...props} />;
}

/** Hear and read the Dutch word → pick its picture. */
function PictureFromDutch({ ex, lang, locked, onAnswer, verdict, run, misses }: Props<'dutch'>) {
  useEffect(() => { autoSpeak(ex.word.nl, false, 'nl', voiceFor('bram')); }, [ex.word]);
  return (
    <div className="exercise pic-from-nl">
      <Prompt text={ui('whichPicture', lang)} />
      <div className={`speaker speaker-word ${wordSize(ex.word.nl)}`}>
        <Speaker who="bram" lines={[ex.word.nl]} verdict={verdict} run={run} misses={misses} />
        <div className="speaker-bubble">
          <SpeakButton text={ex.word.nl} help={lang} voice={voiceFor('bram')} />
          <span className="speaker-nl" lang="nl">{breakable(ex.word.nl)}</span>
        </div>
      </div>
      <ChoiceGrid
        className={`choices-pics n${ex.options.length} ${ex.options.length % 2 ? 'odd' : 'even'}`}
        style={{ '--n': ex.options.length } as React.CSSProperties}
        options={ex.options}
        correctId={ex.word.id}
        locked={locked}
        lang={lang}
        onAnswer={onAnswer}
        render={(w) => (
          <>
            <WordPicture className="pic-emoji" id={w.id} emoji={w.emoji} size={110} />
            {/* The name only after the answer (before, it would be a reading match). A screen
                reader hears what the picture shows, as a sighted learner sees it. */}
            {locked
              ? <span lang="nl" className={`choice-nl ${wordSize(w.nl)}`}>{breakable(w.nl)}</span>
              : <span className="sr-only">{gloss(w.id, w.en, lang).help ?? w.en}</span>}
          </>
        )}
      />
    </div>
  );
}

/** The meaning shown → pick the Dutch word (text cards). */
function DutchFromMeaning({ ex, lang, locked, onAnswer, verdict, run, misses }: Props<'dutch'>) {
  const meaning = gloss(ex.word.id, ex.word.en, lang);
  const fill = (template: string | undefined, word: string | undefined) =>
    template && word ? template.replace('{word}', word) : undefined;
  const question: Bilingual = {
    en: ui('whichOneIs').en.replace('{word}', ex.word.en),
    help: fill(lang?.ui.whichOneIs, meaning.help),
    lang,
  };
  return (
    <div className="exercise">
      <div className="pic-question">
        <PromptWithBram text={question} word={ex.word.nl} verdict={verdict} run={run} misses={misses} quietUntilChecked />
      </div>
      <ChoiceGrid
        className={`choices-rows choices-words ${nonLatinHelp(lang) ? 'hear-pick-choices' : ''}`}
        options={ex.options}
        correctId={ex.word.id}
        locked={locked}
        lang={lang}
        onAnswer={onAnswer}
        // A learner who reads only another script hears each card on its own speaker (as in
        // "hear and pick"): Latin-only cards alone would leave them guessing.
        side={nonLatinHelp(lang) ? (w) => (
          <button type="button" className="choice-say" aria-label={`${srText(ui('playAudio', lang))}: ${w.nl}`} lang={saidLang(ui('playAudio', lang))} onClick={() => speak(w.nl)}>
            <SpeakerIcon size={24} />
          </button>
        ) : undefined}
        render={(w) => <span lang="nl" className={`choice-nl ${wordSize(w.nl)}`}>{breakable(w.nl)}</span>}
      />
    </div>
  );
}

/** Only audio → pick the written Dutch word. */
export function ListenExercise({ ex, lang, locked, onAnswer, verdict, run, misses }: Props<'listen'>) {
  useEffect(() => { autoSpeak(ex.word.nl); }, [ex.word]);
  return (
    <div className="exercise">
      <PromptWithBram text={ui('whatDoYouHear', lang)} word={ex.word.nl} verdict={verdict} run={run} misses={misses} />
      <div className="listen-buttons">
        <SpeakButton text={ex.word.nl} size="lg" hideText help={lang} />
      </div>
      {/* As in the other "What do you hear?": each option has its own speaker that only plays it;
          a tap on the option itself picks it. */}
      <ChoiceGrid
        className="choices-rows choices-words hear-pick-choices"
        options={ex.options}
        correctId={ex.word.id}
        locked={locked}
        lang={lang}
        onAnswer={onAnswer}
        side={(w) => (
          <button type="button" className="choice-say" aria-label={`${srText(ui('playAudio', lang))}: ${w.nl}`} lang={saidLang(ui('playAudio', lang))} onClick={() => speak(w.nl)}>
            <SpeakerIcon size={24} />
          </button>
        )}
        render={(w) => (
          <span className="choice-text">
            <span lang="nl" className={`choice-nl ${wordSize(w.nl)}`}>{breakable(w.nl)}</span>
            {locked && <Bi className="choice-gloss" text={gloss(w.id, w.en, lang)} />}
          </span>
        )}
      />
    </div>
  );
}

/**
 * Guided matching: one Dutch word at a time is "on" (said, with its speaker), and the learner
 * taps its meaning among three meaning cards; then the next word. A meaning already matched
 * shows its Dutch word and is no longer a choice, so at most three cards can be tapped. A wrong
 * tap shakes that card with a small cross and the word stays. When the last pair is made,
 * Continue appears.
 */
export function MatchExercise({ ex, lang, onAnswer }: Props<'match'>) {
  // Every word has a meaning card, but only the first MATCH_ASKED are asked: one card is never
  // used, so the last word is never a forced tap on the only card left.
  const all = ex.words;
  const words = useMemo(() => all.slice(0, Math.max(1, Math.min(MATCH_ASKED, all.length - 1))), [all]);
  // The meaning cards keep one order through the exercise (seeded by the words, so a screenshot
  // or a resumed lesson looks the same).
  const cards = useMemo(() => shuffle(all, createRng(all.map((w) => w.id).join('|').length * 7919 + all.length)), [all]);
  /** The words that got a wrong tap while they were on (fed to the review cards). */
  const missed = useRef<Set<string>>(new Set());
  const [state, setState] = useState<MatchState>(matchStart);
  /** The word on screen: it stays a moment after its pair is made (the card flashes green). */
  const [step, setStep] = useState(0);
  const done = useMemo(() => new Set(state.done), [state.done]);
  /** The pair just made: it flashes green before the next word comes on. */
  const [hit, setHit] = useState<string | null>(null);
  /** A wrong meaning: a short shake and a cross. */
  const [miss, setMiss] = useMiss<string>();
  const current = words[step];
  const finished = state.done.length >= words.length;

  useEffect(() => {
    if (!finished) autoSpeak(current.nl, false, 'nl', voiceFor('bram'));
  }, [current, finished]);

  useEffect(() => {
    if (!hit) return;
    const t = window.setTimeout(() => {
      setHit(null);
      setStep((s) => Math.min(s + 1, words.length - 1));
    }, 420);
    return () => window.clearTimeout(t);
  }, [hit, words.length]);

  const pick = (w: (typeof words)[number]) => {
    if (hit) return;
    const r = matchTap(words, state, w.id);
    if (r.state === state) return;
    setState(r.state);
    if (r.hit) {
      sounds.correct();
      setMiss(null);
      setHit(w.id);
      // Graded like a sentence built word by word: one stray wrong tap is forgiven, more is a mistake.
      if (r.finished) onAnswer({ ...stepGrade(r.state.wrong), missed: [...missed.current] });
    } else {
      sounds.tap();
      setMiss(w.id);
      missed.current.add(current.id);
    }
  };

  return (
    <div className="exercise match-guided">
      <Prompt text={ui('whatDoesThisMean', lang)} />
      <div className={`speaker speaker-word ${wordSize(current.nl)}`}>
        <Speaker who="bram" lines={finished ? [] : [current.nl]} />
        <div className="speaker-bubble match-on" key={current.id}>
          <SpeakButton text={current.nl} help={lang} voice={voiceFor('bram')} />
          <span className="speaker-nl" lang="nl">{breakable(current.nl)}</span>
        </div>
      </div>
      {/* Where the learner is: one dot per pair, filled when made. */}
      <div className="match-dots" aria-hidden>
        {words.map((w, i) => <span key={w.id} className={`match-dot ${done.has(w.id) ? 'is-done' : i === step ? 'is-now' : ''}`} />)}
      </div>
      <div className="choices choices-rows match-cards">
        {cards.map((w) => {
          const made = done.has(w.id);
          return (
            <button
              key={w.id}
              type="button"
              className={`choice match match-en ${hit === w.id ? 'match-hit' : made ? 'matched' : ''} ${miss === w.id ? 'shake match-miss' : ''}`}
              disabled={(made && hit !== w.id) || (finished && !made)}
              onClick={() => pick(w)}
            >
              {hasPicture(w) && <WordPicture className="choice-pic" id={w.id} emoji={w.emoji} size={56} />}
              <span className="match-text">
                <Bi className="choice-label" text={gloss(w.id, w.en, lang)} />
                {made && <span className="match-made" lang="nl" dir="ltr">{w.nl}</span>}
              </span>
              {made && <span className="match-check" aria-hidden><CheckIcon size={20} /></span>}
              {miss === w.id && <span className="match-x" aria-hidden><CloseIcon size={16} /></span>}
              {miss === w.id && <span className="sr-only" lang={saidLang(ui('incorrect', lang))}>, {srText(ui('incorrect', lang))}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Build the sentence word by word: for each next place three words (the right one and two
 * others, lib/exercises.ts buildSteps). A right tap puts the word in the sentence; a wrong tap
 * shakes that word with a small cross and the sentence waits. No Check and no taking words
 * back: the last word grades it (one stray wrong tap is forgiven, two or more are a mistake).
 */
export function BuildExercise({ ex, lang, locked, onAnswer, verdict, run, misses }: Props<'build'>) {
  // One voice per exercise: the speaker says the words and, when it is done, the whole sentence.
  const who = castFor(ex.sentence.id);
  const pic = useMemo(() => sentencePicture(ex.sentence), [ex.sentence]);
  const words = useMemo(() => tokenize(ex.sentence.nl), [ex.sentence]);
  const steps = useMemo(() => buildSteps(ex.sentence.nl, ex.tiles, 3, ex.salt), [ex]);
  const [at, setAt] = useState(0);
  const wrongTaps = useRef(0);
  /** Every wrong tap: the word tapped and the place it was tapped for (shown after the end). */
  const [wrongs, setWrongs] = useState<{ at: number; word: string }[]>([]);
  const wrongsRef = useRef<{ at: number; word: string }[]>([]);
  /** The wrong word just tapped (a short shake and a cross). */
  const [miss, setMiss] = useMiss<string>();
  const complete = at >= words.length;
  // A long sentence keeps room for two rows from the start, so the words below never jump.
  const twoRows = ex.sentence.nl.length > 24;
  // Built by ear (later units): the sentence is played at the start and its speaker is there all
  // along; the meaning shows only at the end. The words keep their own speakers.
  const byEar = Boolean(ex.audio);
  useEffect(() => { if (byEar) autoSpeak(ex.sentence.nl, false, 'nl', voiceFor(who)); }, [byEar, ex.sentence, who]);

  const tap = (w: string) => {
    if (locked || complete) return;
    if (w === words[at]) {
      speak(w, false, 'nl', voiceFor(who));
      setMiss(null);
      const next = at + 1;
      setAt(next);
      if (next >= words.length) onAnswer({ ...stepGrade(wrongTaps.current), done: true, missed: [...new Set(wrongsRef.current.map((x) => words[x.at]))] });
    } else {
      wrongTaps.current += 1;
      wrongsRef.current = [...wrongsRef.current, { at, word: w }];
      setWrongs(wrongsRef.current);
      sounds.tap();
      setMiss(w);
    }
  };

  return (
    // data-nl: the sentence, for the tap counter (scripts/max3) now that its speaker waits.
    <div className="exercise build-steps" data-nl={ex.sentence.nl}>
      <Prompt text={ui(byEar ? 'buildListen' : 'buildSentence', lang)} />
      <div className={`speaker speaker-build ${byEar ? 'build-by-ear' : ''}`}>
        <Speaker who={who} lines={[ex.sentence.nl, ...words]} verdict={verdict} run={run} misses={misses} />
        {/* The meaning, large in the help language, with the sentence's picture word and a
            speaker: hearing the Dutch is the listen-and-build form of the task. */}
        <div className="speaker-bubble build-bubble">
          {/* The whole sentence is held back until a wrong tap or the end: before that, hearing
              it would give the order away (the words' own speakers stay). */}
          {(byEar || wrongs.length > 0 || complete || locked) && <SpeakButton glyph={!byEar} size={byEar ? 'lg' : undefined} hideText={byEar || undefined} text={ex.sentence.nl} help={lang} voice={voiceFor(who)} />}
          {pic && <WordPicture className="build-pic" id={pic.id} emoji={pic.emoji} size={56} />}
          {(!byEar || complete || locked) && <Bi className="bubble-text build-gloss" text={gloss(ex.sentence.id, ex.sentence.en, lang)} />}
        </div>
      </div>
      {/* The sentence so far (not tappable), with a dashed slot where the next word goes. */}
      <div className={`answer-line ${twoRows ? 'answer-two' : ''} ${verdict ? `answer-${verdict}` : ''}`} aria-live="polite" lang="nl" dir="ltr">
        {verdict === 'wrong' && <WrongStamp lang={lang} />}
        {verdict === 'right' && (
          <span className="answer-mark mark-right">
            <CheckIcon size={24} />
            <span className="sr-only" lang={saidLang(ui('correctAnswer', lang))}>{srText(ui('correctAnswer', lang))}</span>
          </span>
        )}
        {words.slice(0, at).map((w, i) => <span key={i} className="tile tile-placed">{w}</span>)}
        {!complete && <span className="tile-next" aria-hidden />}
      </div>
      {/* After the last word: how many wrong taps there were (in the help language), and the
          words tapped wrongly, crossed out. */}
      {complete && wrongs.length > 0 && (
        <div className="build-misses">
          <Bi className="build-misses-n" text={fillN(ui('wrongTapsN', lang), wrongs.length)} />
          <span className="build-misses-tiles" lang="nl" dir="ltr">
            {wrongs.map((x, i) => <s key={i} className="tile tile-wrong-tap">{x.word}</s>)}
          </span>
        </div>
      )}
      {/* Three words for the next place; each has its own small speaker that only plays it. */}
      {!complete && (
        <div className="tile-bank tile-steps" dir="ltr" key={at}>
          {steps[at].map((t) => (
            <span key={t} className="tile-slot">
              <button
                type="button"
                className={`tile tile-with-say ${miss === t ? 'shake tile-miss' : ''}`}
                lang="nl"
                disabled={locked}
                onClick={() => tap(t)}
              >
                {t}
                {miss === t && <span className="tile-x" aria-hidden><CloseIcon size={14} /></span>}
                {miss === t && <span className="sr-only" lang={saidLang(ui('incorrect', lang))}>, {srText(ui('incorrect', lang))}</span>}
              </button>
              <button
                type="button"
                className="tile-say"
                aria-label={`${srText(ui('playAudio', lang))}: ${t}`}
                lang={saidLang(ui('playAudio', lang))}
                onClick={(e) => {
                  e.stopPropagation();
                  speak(t, false, 'nl', voiceFor(who));
                }}
              >
                <SpeakerIcon size={22} />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Hear a word → type it. Forgiving about capitals, articles and one typo. A learner who can't
 * write Latin letters taps letter tiles instead (the word's letters, shuffled, plus a few
 * extra ones); the default for help languages in another script. The keyboard stays one tap
 * away, and the grading is the same either way.
 */
export function TypeExercise(props: Props<'type'>) {
  // Decided once per exercise, so a change in Settings never swaps it halfway.
  const [pick] = useState(() => pickInsteadOfTyping(props.lang) && (props.ex.options?.length ?? 0) > 1);
  return pick ? <HearPickWritten {...props} /> : <TypeWriting {...props} />;
}

/**
 * "Type what you hear" for a learner who reads only a non-Latin script: hear the word and pick
 * it from three written Dutch words, each with its own speaker (hearing never picks). After
 * Check the word's picture shows on its card, and every card says what it means.
 */
function HearPickWritten({ ex, lang, locked, onAnswer, verdict, run, misses }: Props<'type'>) {
  useEffect(() => { autoSpeak(ex.word.nl); }, [ex.word]);
  return (
    <div className="exercise hear-pick">
      <PromptWithBram text={ui('whatDoYouHear', lang)} word={ex.word.nl} verdict={verdict} run={run} misses={misses} />
      <div className="listen-buttons">
        <SpeakButton text={ex.word.nl} size="lg" hideText help={lang} />
      </div>
      <ChoiceGrid
        className="choices-rows choices-words hear-pick-choices"
        options={ex.options ?? [ex.word]}
        correctId={ex.word.id}
        locked={locked}
        lang={lang}
        onAnswer={onAnswer}
        side={(w) => (
          <button type="button" className="choice-say" aria-label={`${srText(ui('playAudio', lang))}: ${w.nl}`} lang={saidLang(ui('playAudio', lang))} onClick={() => speak(w.nl)}>
            <SpeakerIcon size={24} />
          </button>
        )}
        render={(w) => (
          <>
            {/* After Check the heard word shows its picture, on its own card (always in view). */}
            {locked && w.id === ex.word.id && hasPicture(w) && <WordPicture className="choice-pic hear-pick-pic" id={w.id} emoji={w.emoji} size={56} />}
            <span className="choice-text">
              <span lang="nl" className={`choice-nl ${wordSize(w.nl)}`}>{breakable(w.nl)}</span>
              {locked && <Bi className="choice-gloss" text={gloss(w.id, w.en, lang)} />}
            </span>
          </>
        )}
      />
    </div>
  );
}

/**
 * Real dictation. With the keyboard: a text field and Check (the learner says when the word is
 * finished). With letter tiles (Settings, the default for a help language in another script):
 * the word letter by letter, three tiles for each next letter (lib/letters.ts letterSteps); a
 * wrong tile shakes and the word waits; the last letter grades it (one stray wrong tile is
 * forgiven, two or more are a mistake, as in build and match).
 */
function TypeWriting({ ex, lang, locked, onAnswer, verdict, run, misses }: Props<'type'>) {
  const [value, setValue] = useState('');
  // Decided once per exercise, so a change in Settings never swaps it halfway.
  const [mode] = useState(() => writingInput(lang));
  const steps = useMemo(() => letterSteps(ex.word.nl, createRng(ex.word.id.length * 7919 + ex.word.nl.length)), [ex.word]);
  const [at, setAt] = useState(0);
  const wrongTaps = useRef(0);
  const [miss, setMiss] = useMiss<number>();
  useEffect(() => { autoSpeak(ex.word.nl); }, [ex.word]);
  const typed = (v: string) => {
    setValue(v);
    if (!v.trim()) return onAnswer(null);
    const r = checkTyped(v, ex.word.nl);
    onAnswer({ correct: r !== 'wrong', almost: r === 'almost' });
  };
  const tapTile = (i: number) => {
    if (locked || at >= steps.length) return;
    const step = steps[at];
    if (step.options[i] !== step.answer) {
      wrongTaps.current += 1;
      sounds.tap();
      setMiss(i);
      return;
    }
    sounds.tap();
    setMiss(null);
    const v = value + step.answer.text;
    setValue(v);
    setAt(at + 1);
    if (at + 1 >= steps.length) {
      onAnswer({ ...stepGrade(wrongTaps.current), done: true });
    }
  };
  return (
    <div className="exercise">
      <PromptWithBram text={ui('typeWhatYouHear', lang)} word={ex.word.nl} verdict={verdict} run={run} misses={misses} />
      <div className="listen-buttons">
        <SpeakButton text={ex.word.nl} size="lg" hideText help={lang} />
      </div>
      {mode === 'keys' ? (
        <input
          lang="nl"
          dir="ltr"
          autoFocus
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          readOnly={locked}
          aria-invalid={verdict === 'wrong' || undefined}
          className={`type-input ${verdict ? `type-${verdict}` : ''}`}
          value={value}
          placeholder="…"
          aria-label={srText(ui('yourAnswer', lang))}
          onChange={(e) => typed(e.target.value)}
        />
      ) : (
        <>
          {/* The word so far, as on a keyboard. */}
          <div className="type-answer-row" dir="ltr">
            <output
              lang="nl"
              className={`type-input type-display ${verdict ? `type-${verdict}` : ''} ${value ? '' : 'type-empty'}`}
              aria-label={srText(ui('yourAnswer', lang))}
              aria-live="polite"
            >
              {value.replace(/ /g, ' ')}
              {!locked && <span className="type-caret" aria-hidden />}
            </output>
          </div>
          {at < steps.length && (
            <div className="letter-bank letter-steps" dir="ltr" key={at}>
              {steps[at].options.map((t, i) => (
                <button
                  key={`${at}-${i}`}
                  type="button"
                  lang="nl"
                  className={`letter-tile letter-${t.kind === 'extra' ? 'letter' : t.kind} ${miss === i ? 'shake letter-miss' : ''}`}
                  disabled={locked}
                  aria-label={t.kind === 'space' ? srText(ui('spaceKey', lang)) : t.label}
                  onClick={() => tapTile(i)}
                >
                  {t.label}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

/**
 * Complete the conversation: a colleague says a Dutch line, the learner picks the reply.
 * Tapping the colleague's words shows what they mean (English + help language).
 * Reversed (`ex.reverse`, later units): "your" reply is given (heard, with what it means) and the
 * learner picks what the colleague asked.
 */
export function ChatExercise(props: Props<'chat'>) {
  return props.ex.reverse ? <ChatReversed {...props} /> : <ChatForward {...props} />;
}

function ChatForward({ ex, lang, locked, onAnswer, verdict, run, misses }: Props<'chat'>) {
  const { prompt, reply } = ex.dialogue;
  const [picked, setPicked] = useState<ChatLine | null>(null);
  const mine = picked && locked ? (picked.id === reply.id ? 'right' : 'wrong') : '';
  // The colleague asks; "you" are a neutral person icon (MeAvatar), speaking with a voice that
  // follows the gender question (lib/voices.ts learnerVoice). The colleague talks while the line plays.
  const myVoice = learnerVoice(lang?.gender);
  const them = castFor(prompt.id, colleaguesOf(lang?.gender));
  useEffect(() => { autoSpeak(prompt.nl, false, 'nl', voiceFor(them)); }, [prompt, them]);
  const themTalking = useTalking([prompt.nl]);
  // After a right answer it's your turn: "you" say the reply (and talk while it is read out),
  // while the colleague listens. Before that you listen, then think about your answer.
  const replyTurn = verdict === 'right' && picked ? [picked.nl] : [];
  const meTalking = useTalking(replyTurn, replyTurn.length > 0);
  return (
    <div className="exercise">
      <Prompt text={ui('completeChat', lang)} />
      <div className="chat">
        <div className="chat-row chat-them">
          <span className="chat-char"><Character who={them} mood={moodFor(verdict, 'idle', true)} talking={themTalking && !meTalking} /></span>
          <div className="chat-bubble">
            <SpeakButton glyph text={prompt.nl} help={lang} voice={voiceFor(them)} />
            <span className="chat-line" lang="nl">{breakable(prompt.nl)}</span>
            {/* What was asked, always under it (a learner who can't read the Dutch must know). */}
            <span className="chat-hint">
              <Bi text={gloss(prompt.id, prompt.en, lang)} />
            </span>
          </div>
        </div>
        <div className="chat-row chat-me">
          <div className={`chat-bubble chat-bubble-me ${mine}`} aria-live="polite">
            {picked ? <span className="chat-line" lang="nl">{breakable(picked.nl)}</span> : <span className="chat-blank" aria-hidden />}
          </div>
          <span className="chat-char"><MeAvatar className={reactClass(verdict, run, misses)} /></span>
        </div>
      </div>
      <ChatChoices ex={ex} lang={lang} locked={locked} onAnswer={onAnswer} correctId={reply.id} voice={myVoice} onPick={setPicked} />
    </div>
  );
}

/** The chat the other way round: your answer is there, which question did the colleague ask? */
function ChatReversed({ ex, lang, locked, onAnswer, verdict, run, misses }: Props<'chat'>) {
  const { prompt, reply } = ex.dialogue;
  const [picked, setPicked] = useState<ChatLine | null>(null);
  const theirs = picked && locked ? (picked.id === prompt.id ? 'right' : 'wrong') : '';
  const myVoice = learnerVoice(lang?.gender);
  const them = castFor(prompt.id, colleaguesOf(lang?.gender));
  // "You" say your answer first; after a right pick the colleague's question is said.
  useEffect(() => { autoSpeak(reply.nl, false, 'nl', myVoice); }, [reply, myVoice]);
  const meTalking = useTalking([reply.nl]);
  const askTurn = verdict === 'right' && picked ? [picked.nl] : [];
  const themTalking = useTalking(askTurn, askTurn.length > 0);
  return (
    <div className="exercise chat-reversed">
      <Prompt text={ui('chatWhichQuestion', lang)} />
      <div className="chat">
        <div className="chat-row chat-them">
          <span className="chat-char"><Character who={them} mood={moodFor(verdict, 'idle', true)} talking={themTalking && !meTalking} /></span>
          <div className={`chat-bubble chat-bubble-ask ${theirs}`} aria-live="polite">
            {picked ? <span className="chat-line" lang="nl">{breakable(picked.nl)}</span> : <span className="chat-blank chat-blank-q" aria-hidden>?</span>}
          </div>
        </div>
        <div className="chat-row chat-me">
          <div className="chat-bubble chat-bubble-me chat-bubble-given">
            <SpeakButton glyph text={reply.nl} help={lang} voice={myVoice} />
            <span className="chat-line" lang="nl">{breakable(reply.nl)}</span>
            {/* What you answered, always under it. */}
            <span className="chat-hint">
              <Bi text={gloss(reply.id, reply.en, lang)} />
            </span>
          </div>
          <span className="chat-char"><MeAvatar className={reactClass(verdict, run, misses)} /></span>
        </div>
      </div>
      <ChatChoices ex={ex} lang={lang} locked={locked} onAnswer={onAnswer} correctId={prompt.id} voice={voiceFor(them)} onPick={setPicked} />
    </div>
  );
}

/** The three lines to pick from in a chat, each with its own speaker (hearing never picks it). */
function ChatChoices({ ex, lang, locked, onAnswer, correctId, voice, onPick }: Pick<Props<'chat'>, 'ex' | 'lang' | 'locked' | 'onAnswer'> & {
  correctId: string;
  voice: Parameters<typeof speak>[3];
  onPick: (o: ChatLine) => void;
}) {
  return (
    <ChoiceGrid
      className="choices-rows chat-choices"
      options={ex.options}
      correctId={correctId}
      locked={locked}
      lang={lang}
      onAnswer={onAnswer}
      // The tap is the answer; the right line is then said (LessonPlayer).
      onPick={onPick}
      side={(o) => (
        <button
          type="button"
          className="choice-say"
          aria-label={`${srText(ui('playAudio', lang))}: ${o.nl}`}
          lang={saidLang(ui('playAudio', lang))}
          onClick={() => speak(o.nl, false, 'nl', voice)}
        >
          <SpeakerIcon size={24} />
        </button>
      )}
      // After Check every line says what it means (before, that would give the answer away).
      render={(o) => (
        <span className="choice-text">
          <span lang="nl" className="choice-nl">{breakable(o.nl)}</span>
          {locked && <Bi className="choice-gloss" text={gloss(o.id, o.en, lang)} />}
        </span>
      )}
    />
  );
}

/** "How it works here": one Dutch workplace custom, with the sentence to use. Not graded. */
export function TipCard({ ex, lang, onAnswer }: Props<'tip'>) {
  const { tip } = ex;
  const talking = useTalking([tip.phrase.nl]);
  useEffect(() => { onAnswer({ correct: true }); }, [tip, onAnswer]);
  return (
    <div className="exercise tip">
      <div className="tip-badge">
        <span className="tip-badge-emoji" aria-hidden>{tip.emoji}</span>
        {/* The help language large; the Dutch name is a small label under it. */}
        <span className="tip-badge-text tip-badge-swap">
          <NlPair nl="Zo werkt het hier" nlClass="tip-badge-nl" className="tip-badge-main" text={ui('cultureBadge', lang)} />
        </span>
      </div>
      <h2 className="prompt tip-title"><Bi text={gloss(tip.id, tip.title, lang)} /></h2>
      {/* In the lesson only the first sentences; the whole text is on "Zo werkt het hier". */}
      <TipBody text={shortTip(gloss(`${tip.id}.b`, tip.body, lang), TIP_SENTENCES, tip.lead, tip.phrase.nl)} lang={lang} />
      <div className="tip-say">
        <span className="tip-say-label"><Bi text={ui('sayThis', lang)} /></span>
        <div className="tip-say-row">
          <span className="tip-char"><Character who={tipCast(tip, lang?.gender)} talking={talking} size={96} /></span>
          <div className="speaker-bubble tip-bubble">
            <SpeakButton glyph text={tip.phrase.nl} help={lang} voice={voiceFor(tipCast(tip, lang?.gender))} />
            <span className="tip-phrase">
              <NlPair content nlFirst nl={breakable(tip.phrase.nl)} nlClass="tip-phrase-nl" text={gloss(tip.phrase.id, tip.phrase.en, lang)} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * A text's sentences. One ends with . ! ? (also the Arabic ؟ and the Ethiopic ። ፧ ፨) and a space,
 * and the next one does not start with a small letter, and the dot is not an abbreviation's
 * ("np. w pracy", "напр. так", "bv. een", "(np. FNV)" go on in the same sentence). A sentence
 * may also end in a bracket ("… apply.) Do not …") or, before a capital, a closing quote ("… eerst
 * …?" This …"): a quoted Dutch phrase inside a sentence ("Say «Gefeliciteerd!» to …") does not
 * end it.
 */
const SENTENCE_SPLIT = new RegExp([
  // The Ethiopic and Arabic stops always end a sentence ("… rijksoverheid.nl። cao …").
  '(?<=[؟።፧፨])\\s+',
  '(?<=[.!?…])(?<!(?:^|[^\\p{L}])(?:np|bv|vb|vs|ca|bijv|örn|напр|т\\.е|e\\.g|i\\.e|z\\.B|d\\.h)\\.)\\s+(?=\\P{Ll})',
  '(?<=[.؟።]\\))\\s+(?=\\P{Ll})',
  '(?<=[.!?…]["”’»“])\\s+(?=\\p{Lu})',
].join('|'), 'u');
export const sentences = (text: string) => text.trim().split(SENTENCE_SPLIT);

/** The help text as lines, one per sentence; a folded text's closing "…" stays on the last line. */
function helpLines(text: string): string[] {
  const lines = sentences(text);
  if (lines.length > 1 && lines[lines.length - 1] === '…') lines.splice(-2, 2, `${lines[lines.length - 2]} …`);
  return lines;
}

/** Sentences of a tip shown in a lesson. */
export const TIP_SENTENCES = 3;

/** At most this many sentences of a help text whose sentences do not line up with the English. */
export const TIP_FALLBACK_MAX = 4;

/** The sentences at `idx` (in order), with "…" when some are left out. */
function pickSentences(parts: readonly string[], idx: readonly number[]): string {
  const shown = [...new Set(idx)].filter((i) => i >= 0 && i < parts.length).sort((a, b) => a - b);
  const head = shown.map((i) => parts[i]).join(' ');
  return shown.length < parts.length ? `${head} …` : head;
}

/**
 * Which sentences of a help text to show when its sentences do not line up one to one with the
 * English (another count), so the lead's indices can't be used: the first one, then up to
 * TIP_FALLBACK_MAX in all, preferring those with a number ("112", "0800-7000") or a key term of
 * the lead or the phrase ("Juridisch Loket", "Pas op, glad!"); else the first TIP_SENTENCES.
 */
export function fallbackLead(help: readonly string[], keys: readonly string[]): number[] {
  const terms = [...new Set(keys.map((k) => k.toLowerCase()))];
  const score = (t: string) => {
    const low = t.toLowerCase();
    return terms.filter((k) => low.includes(k)).length + (/\p{Nd}/u.test(t) ? 1 : 0);
  };
  const ranked = help.map((t, i) => ({ i, sc: score(t) })).filter(({ i, sc }) => i > 0 && sc > 0).sort((a, b) => b.sc - a.sc || a.i - b.i);
  const picked = [0, ...ranked.slice(0, TIP_FALLBACK_MAX - 1).map(({ i }) => i)];
  for (let i = 1; picked.length < TIP_SENTENCES && i < help.length; i++) if (!picked.includes(i)) picked.push(i);
  return picked.sort((a, b) => a - b);
}

/** Words that say what a sentence is about: numbers, names and Dutch terms (written with a capital
 *  inside a sentence, or with a digit), and the words of the phrase. */
function keyTerms(enLead: readonly string[], phrase?: string): string[] {
  const words = (t: string) => t.split(/[\s,;:()"“”«»!?.]+/u).filter(Boolean);
  const fromEn = enLead.flatMap((t) => words(t).filter((w, k) => /\p{Nd}/u.test(w) || (k > 0 && /^\p{Lu}/u.test(w) && w.length >= 2)));
  const fromPhrase = phrase ? words(phrase).filter((w) => w.length >= 4) : [];
  return [...fromEn, ...fromPhrase];
}

/**
 * A tip's text for a lesson: its first TIP_SENTENCES sentences, or the tip's `lead` (the
 * sentences the situation and the phrase need), in English and in the help language each, with
 * "…" when there is more (the full text stays on the "Zo werkt het hier" page). The lead's
 * indices are of the English sentences; a help text with another number of sentences gets the
 * sentences picked by fallbackLead instead.
 */
export function shortTip(text: Bilingual, n = TIP_SENTENCES, lead?: readonly number[], phrase?: string): Bilingual {
  const en = sentences(text.en);
  const idx = lead ?? Array.from({ length: n }, (_, i) => i);
  const cut = (parts: readonly string[], at: readonly number[]) => (parts.length <= n && !lead ? parts.join(' ') : pickSentences(parts, at));
  const help = text.help === undefined ? undefined : (() => {
    const parts = sentences(text.help);
    if (!lead || parts.length === en.length) return cut(parts, idx);
    return pickSentences(parts, fallbackLead(parts, keyTerms(idx.map((i) => en[i] ?? ''), phrase)));
  })();
  return { ...text, en: cut(en, idx), help };
}

/** The tip's text (no "more" button: Continue is the only choice on a tip). */
function TipBody({ text, lang }: { text: Bilingual; lang?: HelpLanguage }) {
  return (
    <div className="tip-body">
      <div className="help-say-row">
        <p>
          {text.help && text.lang ? (
            // The help language one sentence per line (short lines read more easily than a
            // block), English small under it.
            <span className="bi bi-swap tip-lines" dir={text.lang.dir === 'rtl' ? 'rtl' : undefined}>
              <span className="bi-en">
                {helpLines(text.help).map((line, i) => <HelpText key={i} className="tip-line" text={line} lang={text.lang!} />)}
              </span>
              <span className="bi-help" lang="en" dir={text.lang.dir === 'rtl' ? 'ltr' : undefined}>{text.en}</span>
            </span>
          ) : (
            <Bi text={text} />
          )}
        </p>
        <HelpSay text={text.help} lang={lang} />
      </div>
    </div>
  );
}

/** "What do you do?": pick the most usual way to handle a workplace situation. */
export function SituationExercise({ ex, lang, locked, onAnswer, verdict }: Props<'situation'>) {
  const { tip } = ex;
  const best = tip.options.find((o) => o.best)!;
  const who = tipCast(tip, lang?.gender);
  const said = tip.situation.nl;
  // The Dutch in the situation ("Zeg maar je, hoor!") is said by the character, as in a chat.
  useEffect(() => { if (said) autoSpeak(said, false, 'nl', voiceFor(who)); }, [said, who]);
  const talking = useTalking(said ? [said] : [], Boolean(said));
  return (
    <div className="exercise situation">
      <Prompt text={ui('whatDoYouDo', lang)} />
      <div className="speaker">
        <span className="speaker-char"><Character who={who} mood={moodFor(verdict, 'thinking', true)} talking={talking && !verdict} /></span>
        <div className={`speaker-bubble situation-text ${said ? 'situation-says' : ''}`}>
          {said && (
            <span className="situation-quote" dir="ltr">
              <SpeakButton glyph text={said} help={lang} voice={voiceFor(who)} />
              <span lang="nl" className="situation-nl">{said}</span>
            </span>
          )}
          {/* Much help-language text: the device reads it aloud when it has a voice for it. */}
          <span className="help-say-row">
            <Bi text={gloss(tip.situation.id, tip.situation.en, lang)} />
            <HelpSay text={gloss(tip.situation.id, tip.situation.en, lang).help} lang={lang} />
          </span>
        </div>
      </div>
      <ChoiceGrid
        className="choices-rows"
        options={ex.options}
        correctId={best.id}
        locked={locked}
        lang={lang}
        onAnswer={onAnswer}
        stamp={false}
        render={(o) => <Bi text={gloss(o.id, o.en, lang)} />}
      />
    </div>
  );
}
