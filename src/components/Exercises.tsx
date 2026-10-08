import { useEffect, useMemo, useState } from 'react';
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
}

/** How a character in an exercise feels about the verdict; `calm` is the reaction without a hop. */
function moodFor(verdict: Props<'meaning'>['verdict'], rest: Mood = 'idle', calm = false): Mood {
  if (verdict === 'right') return calm ? 'pleased' : 'happy';
  if (verdict === 'wrong') return 'sad';
  return rest;
}

/** A colleague saying something in a speech bubble (meaning and sentence-building exercises). */
function Speaker({ who, lines, verdict }: { who: CharacterId; lines: string[]; verdict?: 'right' | 'wrong' }) {
  const talking = useTalking(lines);
  return (
    <span className="speaker-char">
      <Character who={who} mood={moodFor(verdict)} talking={talking} />
    </span>
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

function Prompt({ text }: { text: Bilingual }) {
  return (
    <h2 className="prompt">
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
    setPicked(w.id);
    onPick?.(w);
    onAnswer({ correct: w.id === correctId });
  };
  // Number keys 1–9 pick an option, like the hints on each card say.
  useEffect(() => {
    if (locked) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey || e.repeat) return;
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
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
        return (
          <button
            key={w.id}
            type="button"
            className={`choice ${state}`}
            disabled={locked}
            onClick={() => pick(w)}
          >
            <span className="choice-num" aria-hidden>{i + 1}</span>
            {render(w)}
            {locked && w.id === picked && <Stamp right={w.id === correctId} />}
          </button>
        );
      })}
    </div>
  );
}

/** Dutch word shown → pick the English meaning. */
export function MeaningExercise({ ex, lang, locked, onAnswer, verdict }: Props<'meaning'>) {
  useEffect(() => { autoSpeak(ex.word.nl, false, 'nl', voiceFor('bram')); }, [ex.word]);
  return (
    <div className="exercise">
      <Prompt text={ui('whatDoesThisMean', lang)} />
      <div className={`speaker speaker-word ${wordSize(ex.word.nl)}`}>
        <Speaker who="bram" lines={[ex.word.nl]} verdict={verdict} />
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
        render={(w) => <Bi className="choice-label" text={gloss(w.id, w.en, lang)} />}
      />
    </div>
  );
}

/** English meaning shown → pick the Dutch word from picture cards (text cards when `textOnly`). */
export function DutchExercise({ ex, lang, locked, onAnswer }: Props<'dutch'>) {
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
        <h2 className="prompt">
          <Bi text={question} />
        </h2>
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
export function ListenExercise({ ex, lang, locked, onAnswer }: Props<'listen'>) {
  useEffect(() => { autoSpeak(ex.word.nl); }, [ex.word]);
  return (
    <div className="exercise">
      <Prompt text={ui('whatDoYouHear', lang)} />
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
  const [miss, setMiss] = useState<string[]>([]);

  useEffect(() => {
    if (!left || !rightPick) return;
    if (left === rightPick) {
      sounds.correct();
      const next = new Set(done).add(left);
      setDone(next);
      if (next.size === ex.words.length) onAnswer({ correct: true });
    } else {
      sounds.wrong();
      setMiss([left, rightPick]);
      setTimeout(() => setMiss([]), 450);
    }
    setLeft(null);
    setRightPick(null);
  }, [left, rightPick, done, ex.words.length, onAnswer]);

  const cls = (id: string, picked: string | null) =>
    `choice match ${done.has(id) ? 'matched' : ''} ${picked === id ? 'picked' : ''} ${miss.includes(id) ? 'shake' : ''}`;

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
              className={`${cls(w.id, left)} match-nl`}
              disabled={done.has(w.id)}
              onClick={() => {
                autoSpeak(w.nl);
                setLeft(w.id);
              }}
            >
              <span lang="nl" className={`choice-nl ${wordSize(w.nl)}`}>{breakable(w.nl)}</span>
            </button>,
            <button
              key={`en-${r.id}`}
              type="button"
              className={`${cls(r.id, rightPick)} match-en`}
              disabled={done.has(r.id)}
              onClick={() => setRightPick(r.id)}
            >
              {hasPicture(r) && <WordPicture className="choice-emoji" id={r.id} emoji={r.emoji} size={36} />}
              <Bi text={gloss(r.id, r.en, lang)} />
            </button>,
          ];
        })}
      </div>
    </div>
  );
}

/** English sentence → put Dutch word tiles in order. */
export function BuildExercise({ ex, lang, locked, onAnswer, verdict }: Props<'build'>) {
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
        <Speaker who={who} lines={[ex.sentence.nl, ...ex.tiles]} verdict={verdict} />
        <div className="speaker-bubble">
          <Bi className="bubble-text" text={gloss(ex.sentence.id, ex.sentence.en, lang)} />
        </div>
      </div>
      <div className={`answer-line ${verdict ? `answer-${verdict}` : ''}`} aria-live="polite">
        {verdict && <Stamp right={verdict === 'right'} />}
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
export function TypeExercise({ ex, lang, locked, onAnswer }: Props<'type'>) {
  const [value, setValue] = useState('');
  useEffect(() => { autoSpeak(ex.word.nl); }, [ex.word]);
  return (
    <div className="exercise">
      <Prompt text={ui('typeWhatYouHear', lang)} />
      <div className="listen-buttons">
        <SpeakButton text={ex.word.nl} size="lg" label="Play" />
        <SpeakButton text={ex.word.nl} slow label="Play slowly" />
      </div>
      <input
        className="type-input"
        lang="nl"
        autoFocus
        autoComplete="off"
        autoCapitalize="off"
        spellCheck={false}
        disabled={locked}
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
export function ChatExercise({ ex, lang, locked, onAnswer, verdict }: Props<'chat'>) {
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
          <span className="chat-char"><Character who="amina" flip mood={moodFor(verdict, meRest)} talking={meTalking} /></span>
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
      <p className="tip-body"><Bi text={gloss(`${tip.id}.b`, tip.body, lang)} /></p>
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
