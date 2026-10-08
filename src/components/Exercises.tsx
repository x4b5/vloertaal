import { useEffect, useId, useMemo, useState } from 'react';
import type { ChatLine } from '../content/types';
import { gloss, ui, type Bilingual } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { checkTiles, checkTyped } from '../lib/answers';
import { autoSpeak, sounds } from '../lib/audio';
import type { Exercise } from '../lib/exercises';
import { shuffle } from '../lib/random';
import { breakable, wordSize } from '../lib/dutch';
import { Bi } from './Bi';
import { castFor, Character, type CharacterId, type Mood, useTalking } from './Characters';
import { CheckIcon, ChevronDownIcon, CloseIcon } from './Icons';
import { cheerFor } from '../lib/lessonRun';
import { voiceFor } from '../lib/voices';
import { WordPicture } from '../pictures';
import { hasPicture } from '../lib/wordPicture';
import { SpeakButton } from './SpeakButton';

export interface Answer {
  correct: boolean;
  /** Accepted, but with a spelling note. */
  almost?: boolean;
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
 * How a character in an exercise feels about the verdict. A right answer is a pleased nod with
 * a thumb up for a run of 1–2 and a happy jump from 3 (lib/lessonRun.ts); `calm` characters
 * (the colleague in a chat or a situation) only ever nod. The pose holds until Continue, so a
 * still frame reads as "right" or "wrong".
 */
function moodFor(verdict: Verdict, rest: Mood = 'idle', calm = false, run = 1): Mood {
  if (verdict === 'right') return calm || cheerFor(run) === 'pleased' ? 'pleased' : 'happy';
  if (verdict === 'wrong') return 'sad';
  return rest;
}

/** Extra reaction classes: a second fist pump on a run of 5+, no head-scratch after the first miss. */
function reactClass(verdict: Verdict, run = 1, misses = 1): string {
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
      <Character who={who} mood={moodFor(verdict, 'idle', false, run)} talking={talking} size={size} className={reactClass(verdict, run, misses)} />
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

/** Rubber stamp on a checked answer: green GOED, or brick-red NOG EENS on a wrong pick.
 *  Decorative: the feedback label below says the same in words. */
function Stamp({ right }: { right: boolean }) {
  return right ? (
    <span className="stamp stamp-right" aria-hidden>
      <span className="stamp-word">Goed</span>
      <span className="stamp-sub">✓</span>
    </span>
  ) : (
    <span className="stamp stamp-wrong" aria-hidden>
      <span className="stamp-word">Nog<br />eens</span>
    </span>
  );
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
          <SpeakButton text={word.nl} />
          <SpeakButton text={word.nl} slow label={`Play slowly: ${word.nl}`} />
        </div>
        <Bi className="intro-meaning" text={gloss(word.id, word.en, lang)} />
      </div>
    </div>
  );
}

function ChoiceGrid<T extends { id: string }>({ options, render, correctId, locked, onAnswer, onPick, className, style }: {
  options: T[];
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
    <div className={`choices ${className ?? ''}`} style={style}>
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
        return (
          <button
            key={w.id}
            type="button"
            className={`choice ${state} ${locked && !state ? 'faded' : ''}`}
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
            {state === 'right' && <Stamp right />}
            {state === 'wrong' && <Stamp right={false} />}
          </button>
        );
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
        onAnswer={onAnswer}
        render={(w) => (
          <>
            {/* A small picture of each option (abstract words keep a text-only row). */}
            {hasPicture(w) && <WordPicture className="choice-pic" id={w.id} emoji={w.emoji} size={46} />}
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
          onAnswer={onAnswer}
          onPick={(w) => autoSpeak(w.nl)}
          render={(w) => <span lang="nl" className={`choice-nl ${wordSize(w.nl)}`}>{breakable(w.nl)}</span>}
        />
      ) : (
        <ChoiceGrid
          className={`choices-pics n${ex.options.length} ${ex.options.length % 2 ? 'odd' : 'even'}`}
          style={{ '--n': ex.options.length } as React.CSSProperties}
          options={ex.options}
          correctId={ex.word.id}
          locked={locked}
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
      <ChoiceGrid
        options={ex.options}
        correctId={ex.word.id}
        locked={locked}
        onAnswer={onAnswer}
        render={(w) => <span lang="nl" className="choice-nl">{breakable(w.nl)}</span>}
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
                autoSpeak(w.nl);
                setLeft(w.id);
              }}
            >
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
              {hasPicture(r) && <WordPicture className="choice-emoji" id={r.id} emoji={r.emoji} size={36} />}
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

  const update = (next: number[]) => {
    setChosen(next);
    onAnswer(next.length ? { correct: checkTiles(next.map((i) => ex.tiles[i]), ex.sentence.nl) } : null);
  };

  return (
    <div className="exercise">
      <Prompt text={ui('buildSentence', lang)} />
      <div className="speaker speaker-build">
        <Speaker who={who} lines={[ex.sentence.nl, ...ex.tiles]} verdict={verdict} run={run} misses={misses} />
        <div className="speaker-bubble">
          <Bi className="bubble-text" text={gloss(ex.sentence.id, ex.sentence.en, lang)} />
        </div>
      </div>
      <div className={`answer-line ${verdict ? `answer-${verdict}` : ''}`} aria-live="polite">
        {verdict && <Stamp right={verdict === 'right'} />}
        {verdict && (
          <span className={`answer-mark mark-${verdict}`}>
            {verdict === 'right' ? <CheckIcon size={24} /> : <CloseIcon size={24} />}
            <span className="sr-only">{verdict === 'right' ? ui('correctAnswer').en : `${ui('yourAnswer').en}: ${ui('incorrect').en}`}</span>
          </span>
        )}
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
      <div className="tile-bank">
        {ex.tiles.map((t, i) => (
          <button
            key={i}
            type="button"
            className={`tile ${chosen.includes(i) ? 'tile-used' : ''}`}
            lang="nl"
            disabled={locked || chosen.includes(i)}
            onClick={() => {
              autoSpeak(t, false, 'nl', voiceFor(who));
              update([...chosen, i]);
            }}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}

/** Hear a word → type it. Forgiving about capitals, articles and one typo. */
export function TypeExercise({ ex, lang, locked, onAnswer, verdict, run, misses }: Props<'type'>) {
  const [value, setValue] = useState('');
  useEffect(() => { autoSpeak(ex.word.nl); }, [ex.word]);
  return (
    <div className="exercise">
      <PromptWithBram text={ui('typeWhatYouHear', lang)} word={ex.word.nl} verdict={verdict} run={run} misses={misses} />
      <div className="listen-buttons">
        <SpeakButton text={ex.word.nl} size="lg" label="Play" />
        <SpeakButton text={ex.word.nl} slow label="Play slowly" />
      </div>
      <input
        lang="nl"
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
        onChange={(e) => {
          const v = e.target.value;
          setValue(v);
          if (!v.trim()) return onAnswer(null);
          const r = checkTyped(v, ex.word.nl);
          onAnswer({ correct: r !== 'wrong', almost: r === 'almost' });
        }}
      />
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
  const [hint, setHint] = useState(false);
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
            {hint && !locked && (
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
          <span className="chat-char"><Character who="amina" flip mood={moodFor(verdict, meRest, false, run)} talking={meTalking} className={reactClass(verdict, run, misses)} /></span>
        </div>
      </div>
      <ChoiceGrid
        className="choices-rows chat-choices"
        options={ex.options}
        correctId={reply.id}
        locked={locked}
        onAnswer={onAnswer}
        onPick={(o) => {
          setPicked(o);
          setHint(false);
          // Hear the reply before choosing: "you" (Amina) say it.
          autoSpeak(o.nl, false, 'nl', voiceFor('amina'));
        }}
        render={(o) => <span lang="nl" className="choice-nl">{breakable(o.nl)}</span>}
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
        <span className="tip-badge-text">
          <span className="tip-badge-nl" lang="nl">Zo werkt het hier</span>
          <Bi className="tip-badge-en" text={ui('cultureBadge', lang)} />
        </span>
      </div>
      <h2 className="prompt tip-title"><Bi text={gloss(tip.id, tip.title, lang)} /></h2>
      <TipBody text={gloss(`${tip.id}.b`, tip.body, lang)} lang={lang} />
      <div className="tip-say">
        <span className="tip-say-label"><Bi text={ui('sayThis', lang)} /></span>
        <div className="tip-say-row">
          <span className="tip-char"><Character who={castFor(tip.id)} talking={talking} size={96} /></span>
          <div className="speaker-bubble tip-bubble">
            <SpeakButton glyph text={tip.phrase.nl} label={`Play: ${tip.phrase.nl}`} voice={voiceFor(castFor(tip.id))} />
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
  return (
    <div className="exercise situation">
      <Prompt text={ui('whatDoYouDo', lang)} />
      <div className="speaker">
        <span className="speaker-char"><Character who={castFor(tip.id)} mood={moodFor(verdict, 'thinking', true)} /></span>
        <div className="speaker-bubble situation-text">
          <Bi text={gloss(tip.situation.id, tip.situation.en, lang)} />
        </div>
      </div>
      <ChoiceGrid
        className="choices-rows"
        options={ex.options}
        correctId={best.id}
        locked={locked}
        onAnswer={onAnswer}
        render={(o) => <Bi text={gloss(o.id, o.en, lang)} />}
      />
    </div>
  );
}
