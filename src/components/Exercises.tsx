import { useEffect, useId, useMemo, useState } from 'react';
import type { ChatLine } from '../content/types';
import { gloss, ui, type Bilingual } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { checkTiles, checkTyped } from '../lib/answers';
import { autoSpeak, sounds, speak } from '../lib/audio';
import { sentencePicture, type Exercise } from '../lib/exercises';
import { shuffle } from '../lib/random';
import { breakable, wordSize } from '../lib/dutch';
import { Bi, HelpText } from './Bi';
import { castFor, Character, type CharacterId, type Mood, tipCast, useTalking } from './Characters';
import { BackspaceIcon, CheckIcon, ChevronDownIcon, CloseIcon, KeyboardIcon, LettersIcon, SpeakerIcon } from './Icons';
import { cheerFor } from '../lib/lessonRun';
import { voiceFor } from '../lib/voices';
import { WordPicture } from '../pictures';
import { hasPicture } from '../lib/wordPicture';
import { SpeakButton } from './SpeakButton';
import { letterTiles, NON_LATIN_HELP } from '../lib/letters';
import { createRng } from '../lib/random';

export interface Answer {
  correct: boolean;
  /** Accepted, but with a spelling note. */
  almost?: boolean;
  /** Sentence building: the tiles in the order the learner put them. */
  given?: string[];
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

/**
 * A small speaker on a Dutch-only card or tile: tapping it plays the Dutch (also in "Without
 * sound", like every 🔊). Decorative: the card itself is the button.
 */
function SoundMark() {
  return <span className="opt-sound" aria-hidden><SpeakerIcon size={18} /></span>;
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
          {/* The two speakers stay together: a long word wraps, never the slow button alone. */}
          <span className="intro-sounds">
            <SpeakButton text={word.nl} />
            <SpeakButton text={word.nl} slow label={`Play slowly: ${word.nl}`} />
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
    onAnswer({ correct: w.id === correctId });
  };
  // Number keys 1–9 pick an option, like the hints on each card say.
  useEffect(() => {
    if (locked) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey || e.repeat) return;
      // Only with focus on the page itself, the question or an option: never while typing in a
      // field, and never behind a sheet (the emergency phrases, "Stop this lesson?").
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
            {state === 'right' && <span className="sr-only">, {ui('correctAnswer').en}</span>}
            {state === 'wrong' && <span className="sr-only">, {ui('yourAnswer').en}: {ui('incorrect').en}</span>}
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
  return (
    <div className="exercise">
      <Prompt text={ui('whatDoesThisMean', lang)} />
      <div className={`speaker speaker-word ${wordSize(ex.word.nl)}`}>
        <Speaker who="bram" lines={[ex.word.nl]} verdict={verdict} run={run} misses={misses} />
        <div className="speaker-bubble">
          <SpeakButton text={ex.word.nl} voice={voiceFor('bram')} />
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
            {/* A small picture of each option (abstract words keep a text-only row). */}
            {hasPicture(w) && <WordPicture className="choice-pic" id={w.id} emoji={w.emoji} size={56} />}
            <Bi className="choice-label" text={gloss(w.id, w.en, lang)} />
          </>
        )}
      />
    </div>
  );
}

/** English meaning shown → pick the Dutch word from picture cards (text cards when `textOnly`). */
export function DutchExercise({ ex, lang, locked, onAnswer, verdict, run, misses }: Props<'dutch'>) {
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
      {ex.textOnly ? (
        <ChoiceGrid
          className="choices-rows choices-words"
          options={ex.options}
          correctId={ex.word.id}
          locked={locked}
          lang={lang}
          onAnswer={onAnswer}
          onPick={(w) => speak(w.nl)}
          render={(w) => <><span lang="nl" className={`choice-nl ${wordSize(w.nl)}`}>{breakable(w.nl)}</span><SoundMark /></>}
        />
      ) : (
        <ChoiceGrid
          className={`choices-pics n${ex.options.length} ${ex.options.length % 2 ? 'odd' : 'even'}`}
          style={{ '--n': ex.options.length } as React.CSSProperties}
          options={ex.options}
          correctId={ex.word.id}
          locked={locked}
          lang={lang}
          onAnswer={onAnswer}
          onPick={(w) => autoSpeak(w.nl)}
          render={(w) => (
            <>
              <WordPicture className="pic-emoji" id={w.id} emoji={w.emoji} size={110} />
              <span lang="nl" className={`choice-nl ${wordSize(w.nl)}`}>{breakable(w.nl)}</span>
            </>
          )}
        />
      )}
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
        <SpeakButton text={ex.word.nl} size="lg" label="Play" />
        <SpeakButton text={ex.word.nl} slow label="Play slowly" />
      </div>
      {/* Hearing a candidate is the task itself: a tap plays it. */}
      <ChoiceGrid
        options={ex.options}
        correctId={ex.word.id}
        locked={locked}
        lang={lang}
        onAnswer={onAnswer}
        onPick={(w) => speak(w.nl)}
        render={(w) => <><span lang="nl" className="choice-nl">{breakable(w.nl)}</span><SoundMark /></>}
      />
    </div>
  );
}

/** Tap Dutch words and their English meanings in pairs. */
export function MatchExercise({ ex, lang, onAnswer }: Props<'match'>) {
  const right = useMemo(() => shuffle(ex.words, Math.random), [ex.words]);
  const [left, setLeft] = useState<string | null>(null);
  const [rightPick, setRightPick] = useState<string | null>(null);
  const [done, setDone] = useState<Set<string>>(new Set());
  /** The pair just matched: it flashes green (320 ms) before it fades to "matched". */
  const [hit, setHit] = useState<string | null>(null);
  /** A wrong pair keeps its cross until the next tap. */
  const [miss, setMiss] = useState<{ nl: string; en: string } | null>(null);

  useEffect(() => {
    if (!left || !rightPick) return;
    if (left === rightPick) {
      sounds.correct();
      const next = new Set(done).add(left);
      setDone(next);
      setHit(left);
      if (next.size === ex.words.length) onAnswer({ correct: true });
    } else {
      sounds.wrong();
      setMiss({ nl: left, en: rightPick });
    }
    setLeft(null);
    setRightPick(null);
  }, [left, rightPick, done, ex.words.length, onAnswer]);

  useEffect(() => {
    if (!hit) return;
    const t = window.setTimeout(() => setHit(null), 320);
    return () => window.clearTimeout(t);
  }, [hit]);

  const tap = () => {
    sounds.tap();
    setMiss(null);
  };
  const missed = (side: 'nl' | 'en', id: string) => miss?.[side] === id;
  const cls = (side: 'nl' | 'en', id: string, picked: string | null) =>
    `choice match ${done.has(id) ? (hit === id ? 'match-hit' : 'matched') : ''} ${picked === id ? 'picked' : ''} ${missed(side, id) ? 'shake match-miss' : ''}`;
  const missMark = (side: 'nl' | 'en', id: string) =>
    missed(side, id) && (
      <span className="match-x" aria-hidden><CloseIcon size={16} /></span>
    );

  return (
    <div className="exercise">
      <Prompt text={ui('matchPairs', lang)} />
      {/* One grid, row by row (Dutch word, meaning), so both cards of a row share its height. */}
      <div className="match-grid">
        {ex.words.map((w, i) => {
          const r = right[i];
          return [
            <button
              key={`nl-${w.id}`}
              type="button"
              className={`${cls('nl', w.id, left)} match-nl`}
              disabled={done.has(w.id) && hit !== w.id}
              aria-pressed={left === w.id}
              onClick={() => {
                if (done.has(w.id)) return;
                tap();
                speak(w.nl);
                setLeft(w.id);
              }}
            >
              <SoundMark />
              <span lang="nl" className={`choice-nl ${wordSize(w.nl)}`}>{breakable(w.nl)}</span>
              {missMark('nl', w.id)}
            </button>,
            <button
              key={`en-${r.id}`}
              type="button"
              className={`${cls('en', r.id, rightPick)} match-en`}
              disabled={done.has(r.id) && hit !== r.id}
              aria-pressed={rightPick === r.id}
              onClick={() => {
                if (done.has(r.id)) return;
                tap();
                setRightPick(r.id);
              }}
            >
              {hasPicture(r) && <WordPicture className="choice-emoji" id={r.id} emoji={r.emoji} size={40} />}
              <Bi text={gloss(r.id, r.en, lang)} />
              {missMark('en', r.id)}
            </button>,
          ];
        })}
      </div>
    </div>
  );
}

/** English sentence → put Dutch word tiles in order. */
export function BuildExercise({ ex, lang, locked, onAnswer, verdict, run, misses }: Props<'build'>) {
  const [chosen, setChosen] = useState<number[]>([]);
  // One voice per exercise: the speaker says the tiles and, after Check, the whole sentence.
  const who = castFor(ex.sentence.id);
  const pic = useMemo(() => sentencePicture(ex.sentence), [ex.sentence]);

  const update = (next: number[]) => {
    setChosen(next);
    const given = next.map((i) => ex.tiles[i]);
    onAnswer(next.length ? { correct: checkTiles(given, ex.sentence.nl), given } : null);
  };

  return (
    <div className="exercise">
      <Prompt text={ui('buildSentence', lang)} />
      <div className="speaker speaker-build">
        <Speaker who={who} lines={[ex.sentence.nl, ...ex.tiles]} verdict={verdict} run={run} misses={misses} />
        {/* The meaning, large in the help language, with the sentence's picture word and a
            speaker: hearing the Dutch is the listen-and-build form of the task. */}
        <div className="speaker-bubble build-bubble">
          <SpeakButton glyph text={ex.sentence.nl} label={`Play: ${ex.sentence.nl}`} voice={voiceFor(who)} />
          {pic && <WordPicture className="build-pic" id={pic.id} emoji={pic.emoji} size={56} />}
          <Bi className="bubble-text build-gloss" text={gloss(ex.sentence.id, ex.sentence.en, lang)} />
        </div>
      </div>
      {/* After Check: a check at the start of a right sentence; a wrong one gets only the
          NOG EENS stamp (the right sentence is shown as tiles in the label below). */}
      <div className={`answer-line ${verdict ? `answer-${verdict}` : ''}`} aria-live="polite">
        {verdict === 'wrong' && <WrongStamp lang={lang} />}
        {verdict === 'right' && (
          <span className="answer-mark mark-right">
            <CheckIcon size={24} />
            <span className="sr-only">{ui('correctAnswer').en}</span>
          </span>
        )}
        {verdict === 'wrong' && <span className="sr-only">{ui('yourAnswer').en}: {ui('incorrect').en}</span>}
        {chosen.map((i) => (
          <button
            key={i}
            type="button"
            className="tile"
            lang="nl"
            disabled={locked}
            onClick={() => update(chosen.filter((c) => c !== i))}
          >
            {ex.tiles[i]}
          </button>
        ))}
      </div>
      {/* Each tile: the word (a tap puts it in the sentence) and, on its own, a small speaker that
          only plays it, so hearing a tile never places it. */}
      <div className="tile-bank">
        {ex.tiles.map((t, i) => {
          const used = chosen.includes(i);
          return (
            <span key={i} className={`tile-slot ${used ? 'tile-slot-used' : ''}`}>
              <button
                type="button"
                className={`tile tile-with-say ${used ? 'tile-used' : ''}`}
                lang="nl"
                disabled={locked || used}
                onClick={() => {
                  speak(t, false, 'nl', voiceFor(who));
                  update([...chosen, i]);
                }}
              >
                {t}
              </button>
              {!used && (
                <button
                  type="button"
                  className="tile-say"
                  aria-label={`Play: ${t}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    speak(t, false, 'nl', voiceFor(who));
                  }}
                >
                  <SpeakerIcon size={16} />
                </button>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Hear a word → type it. Forgiving about capitals, articles and one typo. A learner who can't
 * write Latin letters taps letter tiles instead (the word's letters, shuffled, plus a few
 * extra ones); the default for help languages in another script. The keyboard stays one tap
 * away, and the grading is the same either way.
 */
export function TypeExercise({ ex, lang, locked, onAnswer, verdict, run, misses }: Props<'type'>) {
  const [value, setValue] = useState('');
  const [mode, setMode] = useState<'tiles' | 'keys'>(() => (lang && NON_LATIN_HELP.has(lang.code) ? 'tiles' : 'keys'));
  const tiles = useMemo(() => letterTiles(ex.word.nl, createRng(ex.word.id.length * 7919 + ex.word.nl.length)), [ex.word]);
  /** The tiles tapped, in order (each one once). */
  const [used, setUsed] = useState<number[]>([]);
  useEffect(() => { autoSpeak(ex.word.nl); }, [ex.word]);
  const answerWith = (v: string) => {
    setValue(v);
    if (!v.trim()) return onAnswer(null);
    const r = checkTyped(v, ex.word.nl);
    onAnswer({ correct: r !== 'wrong', almost: r === 'almost' });
  };
  const tap = (next: number[]) => {
    sounds.tap();
    setUsed(next);
    answerWith(next.map((i) => tiles[i].text).join(''));
  };
  const switchTo = (m: 'tiles' | 'keys') => {
    setMode(m);
    setUsed([]);
    answerWith('');
  };
  const other = mode === 'tiles' ? ui('useKeyboard', lang) : ui('letterTiles', lang);
  return (
    <div className="exercise">
      <PromptWithBram text={ui('typeWhatYouHear', lang)} word={ex.word.nl} verdict={verdict} run={run} misses={misses} />
      <div className="listen-buttons">
        <SpeakButton text={ex.word.nl} size="lg" label="Play" />
        <SpeakButton text={ex.word.nl} slow label="Play slowly" />
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
          aria-label="Your answer"
          onChange={(e) => answerWith(e.target.value)}
        />
      ) : (
        <>
          {/* The answer so far, as on a keyboard; the last tile can be taken back. */}
          <div className="type-answer-row" dir="ltr">
            <output
              lang="nl"
              className={`type-input type-display ${verdict ? `type-${verdict}` : ''} ${value ? '' : 'type-empty'}`}
              aria-label="Your answer"
              aria-live="polite"
            >
              {value.replace(/ /g, '\u00a0')}
              {!locked && <span className="type-caret" aria-hidden />}
            </output>
            <button
              type="button"
              className="letter-back"
              disabled={locked || !used.length}
              aria-label={`${ui('deleteLetter').en}${lang?.ui.deleteLetter ? ` · ${lang.ui.deleteLetter}` : ''}`}
              title={lang?.ui.deleteLetter ?? ui('deleteLetter').en}
              onClick={() => tap(used.slice(0, -1))}
            >
              <BackspaceIcon size={28} />
            </button>
          </div>
          <div className="letter-bank" dir="ltr">
            {tiles.map((t, i) => (
              <button
                key={i}
                type="button"
                lang="nl"
                className={`letter-tile letter-${t.kind} ${used.includes(i) ? 'letter-used' : ''}`}
                disabled={locked || used.includes(i)}
                aria-label={t.kind === 'space' ? 'space' : t.label}
                onClick={() => tap([...used, i])}
              >
                {t.label}
              </button>
            ))}
          </div>
        </>
      )}
      {!locked && (
        <button type="button" className="type-mode" onClick={() => switchTo(mode === 'tiles' ? 'keys' : 'tiles')}>
          {mode === 'tiles' ? <KeyboardIcon size={20} /> : <LettersIcon size={20} />}
          <Bi className="type-mode-label" text={other} />
        </button>
      )}
    </div>
  );
}

/**
 * Complete the conversation: a colleague says a Dutch line, the learner picks the reply.
 * Tapping the colleague's words shows what they mean (English + help language).
 */
export function ChatExercise({ ex, lang, locked, onAnswer, verdict, run, misses }: Props<'chat'>) {
  const { prompt, reply } = ex.dialogue;
  const [picked, setPicked] = useState<ChatLine | null>(null);
  // The colleague's line in the help language shows from the start (a learner who can't read
  // the Dutch must know what was asked); tapping the Dutch hides or shows it.
  const [hint, setHint] = useState(Boolean(lang));
  const mine = picked && locked ? (picked.id === reply.id ? 'right' : 'wrong') : '';
  // The colleague asks; "you" are Amina. The colleague talks while the line plays.
  const them = castFor(prompt.id, ['bram', 'henk', 'jada']);
  useEffect(() => { autoSpeak(prompt.nl, false, 'nl', voiceFor(them)); }, [prompt, them]);
  const themTalking = useTalking([prompt.nl]);
  // After a right answer it's your turn: "you" say the reply (and talk while it is read out),
  // while the colleague listens. Before that you listen, then think about your answer.
  const replyTurn = verdict === 'right' && picked ? [picked.nl] : [];
  const meTalking = useTalking(replyTurn, replyTurn.length > 0);
  const meRest: Mood = picked || themTalking ? 'idle' : 'thinking';
  return (
    <div className="exercise">
      <Prompt text={ui('completeChat', lang)} />
      <div className="chat">
        <div className="chat-row chat-them">
          <span className="chat-char"><Character who={them} mood={moodFor(verdict, 'idle', true)} talking={themTalking && !meTalking} /></span>
          <div className="chat-bubble">
            <SpeakButton glyph text={prompt.nl} label={`Play: ${prompt.nl}`} voice={voiceFor(them)} />
            <button
              type="button"
              className="chat-line"
              lang="nl"
              aria-expanded={hint}
              onClick={() => setHint((h) => !h)}
            >
              {breakable(prompt.nl)}
            </button>
            {hint && (
              <span className="chat-hint">
                <Bi text={gloss(prompt.id, prompt.en, lang)} />
              </span>
            )}
          </div>
        </div>
        <div className="chat-row chat-me">
          <div className={`chat-bubble chat-bubble-me ${mine}`} aria-live="polite">
            {picked ? <span className="chat-line" lang="nl">{breakable(picked.nl)}</span> : <span className="chat-blank" aria-hidden />}
          </div>
          <span className="chat-char"><Character who="amina" flip mood={moodFor(verdict, meRest)} talking={meTalking} className={reactClass(verdict, run, misses)} /></span>
        </div>
      </div>
      <ChoiceGrid
        className="choices-rows chat-choices"
        options={ex.options}
        correctId={reply.id}
        locked={locked}
        lang={lang}
        onAnswer={onAnswer}
        onPick={(o) => {
          setPicked(o);
          // Hear the reply before choosing: "you" (Amina) say it.
          speak(o.nl, false, 'nl', voiceFor('amina'));
        }}
        // Each option's speaker is its own button: hearing a reply never picks it.
        side={(o) => (
          <button
            type="button"
            className="choice-say"
            aria-label={`Play: ${o.nl}`}
            onClick={() => speak(o.nl, false, 'nl', voiceFor('amina'))}
          >
            <SpeakerIcon size={24} />
          </button>
        )}
        // After Check every reply says what it means (before, that would give the answer away).
        render={(o) => (
          <span className="choice-text">
            <span lang="nl" className="choice-nl">{breakable(o.nl)}</span>
            {locked && <Bi className="choice-gloss" text={gloss(o.id, o.en, lang)} />}
          </span>
        )}
      />
    </div>
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
          <Bi className="tip-badge-main" text={ui('cultureBadge', lang)} />
          <span className="tip-badge-nl" lang="nl">Zo werkt het hier</span>
        </span>
      </div>
      <h2 className="prompt tip-title"><Bi text={gloss(tip.id, tip.title, lang)} /></h2>
      <TipBody text={gloss(`${tip.id}.b`, tip.body, lang)} lang={lang} />
      <div className="tip-say">
        <span className="tip-say-label"><Bi text={ui('sayThis', lang)} /></span>
        <div className="tip-say-row">
          <span className="tip-char"><Character who={tipCast(tip)} talking={talking} size={96} /></span>
          <div className="speaker-bubble tip-bubble">
            <SpeakButton glyph text={tip.phrase.nl} label={`Play: ${tip.phrase.nl}`} voice={voiceFor(tipCast(tip))} />
            <span className="tip-phrase">
              <span lang="nl" className="tip-phrase-nl">{breakable(tip.phrase.nl)}</span>
              <Bi text={gloss(tip.phrase.id, tip.phrase.en, lang)} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** The first `n` sentences of a text, and whether there is more after them. */
export function firstSentences(text: string, n: number): { head: string; more: boolean } {
  // A sentence ends with . ! ? (also the Arabic ؟ and the Ethiopic ። ፧ ፨) and a space.
  const parts = text.trim().split(/(?<=[.!?؟።፧፨…])\s+/u);
  if (parts.length <= n) return { head: text.trim(), more: false };
  return { head: parts.slice(0, n).join(' '), more: true };
}

/**
 * The tip's text, folded after about two sentences: "meer" opens the rest. Both languages
 * fold at the same point, so the help language and the English say the same thing.
 */
function TipBody({ text, lang }: { text: Bilingual; lang?: HelpLanguage }) {
  const [open, setOpen] = useState(false);
  const help = text.help ? firstSentences(text.help, 2) : null;
  const en = firstSentences(text.en, 2);
  const long = en.more || Boolean(help?.more);
  const shown: Bilingual = open || !long ? text : { ...text, en: en.more ? `${en.head} …` : en.head, help: help ? (help.more ? `${help.head} …` : help.head) : undefined };
  const label = ui(open ? 'less' : 'more', lang);
  const id = useId();
  return (
    <div className="tip-body">
      <p id={id}><Bi text={shown} /></p>
      {long && (
        <button type="button" className="tip-more" aria-expanded={open} aria-controls={id} onClick={() => setOpen((o) => !o)}>
          <span className="tip-more-nl" lang="nl">{open ? 'minder' : 'meer'}</span>
          <Bi className="tip-more-gloss" text={label} />
          <ChevronDownIcon size={18} className={`tip-more-chev ${open ? 'open' : ''}`} />
        </button>
      )}
    </div>
  );
}

/** "What do you do?": pick the most usual way to handle a workplace situation. */
export function SituationExercise({ ex, lang, locked, onAnswer, verdict }: Props<'situation'>) {
  const { tip } = ex;
  const best = tip.options.find((o) => o.best)!;
  const who = tipCast(tip);
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
              <SpeakButton glyph text={said} label={`Play: ${said}`} voice={voiceFor(who)} />
              <span lang="nl" className="situation-nl">{said}</span>
            </span>
          )}
          <Bi text={gloss(tip.situation.id, tip.situation.en, lang)} />
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
