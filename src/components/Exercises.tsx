import { useEffect, useMemo, useState } from 'react';
import type { Word } from '../content/types';
import { gloss, ui, type Bilingual } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { checkTiles, checkTyped } from '../lib/answers';
import { sounds, speak } from '../lib/audio';
import type { Exercise } from '../lib/exercises';
import { shuffle } from '../lib/random';
import { Bi } from './Bi';
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
    speak(word.nl);
    onAnswer({ correct: true });
  }, [word, onAnswer]);
  return (
    <div className="exercise">
      <Prompt text={ui('newWord', lang)} />
      <div className="card intro-card">
        <div className="emoji-xl" aria-hidden>{word.emoji}</div>
        <div className="intro-nl">
          <span lang="nl">{word.nl}</span>
          <SpeakButton text={word.nl} />
          <SpeakButton text={word.nl} slow label={`Play slowly: ${word.nl}`} />
        </div>
        <Bi className="intro-meaning" text={gloss(word.id, word.en, lang)} />
      </div>
    </div>
  );
}

function ChoiceGrid({ options, render, correctId, locked, onAnswer, onPick }: {
  options: Word[];
  render: (w: Word) => React.ReactNode;
  correctId: string;
  locked: boolean;
  onAnswer: (a: Answer | null) => void;
  onPick?: (w: Word) => void;
}) {
  const [picked, setPicked] = useState<string | null>(null);
  return (
    <div className="choices">
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
            onClick={() => {
              setPicked(w.id);
              onPick?.(w);
              onAnswer({ correct: w.id === correctId });
            }}
          >
            <span className="choice-num" aria-hidden>{i + 1}</span>
            {render(w)}
          </button>
        );
      })}
    </div>
  );
}

/** Dutch word shown → pick the English meaning. */
export function MeaningExercise({ ex, lang, locked, onAnswer }: Props<'meaning'>) {
  useEffect(() => speak(ex.word.nl), [ex.word]);
  return (
    <div className="exercise">
      <Prompt text={ui('whatDoesThisMean', lang)} />
      <div className="target">
        <SpeakButton text={ex.word.nl} size="lg" />
        <span className="target-nl" lang="nl">{ex.word.nl}</span>
      </div>
      <ChoiceGrid
        options={ex.options}
        correctId={ex.word.id}
        locked={locked}
        onAnswer={onAnswer}
        render={(w) => (
          <>
            <span className="choice-emoji" aria-hidden>{w.emoji}</span>
            <Bi text={gloss(w.id, w.en, lang)} />
          </>
        )}
      />
    </div>
  );
}

/** English meaning + picture shown → pick the Dutch word. */
export function DutchExercise({ ex, lang, locked, onAnswer }: Props<'dutch'>) {
  return (
    <div className="exercise">
      <Prompt text={ui('chooseDutch', lang)} />
      <div className="target">
        <span className="emoji-lg" aria-hidden>{ex.word.emoji}</span>
        <Bi className="target-en" text={gloss(ex.word.id, ex.word.en, lang)} />
      </div>
      <ChoiceGrid
        options={ex.options}
        correctId={ex.word.id}
        locked={locked}
        onAnswer={onAnswer}
        onPick={(w) => speak(w.nl)}
        render={(w) => <span lang="nl" className="choice-nl">{w.nl}</span>}
      />
    </div>
  );
}

/** Only audio → pick the written Dutch word. */
export function ListenExercise({ ex, lang, locked, onAnswer }: Props<'listen'>) {
  useEffect(() => speak(ex.word.nl), [ex.word]);
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
        render={(w) => <span lang="nl" className="choice-nl">{w.nl}</span>}
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
      <div className="match-grid">
        <div className="match-col">
          {ex.words.map((w) => (
            <button
              key={w.id}
              type="button"
              className={cls(w.id, left)}
              disabled={done.has(w.id)}
              onClick={() => {
                speak(w.nl);
                setLeft(w.id);
              }}
            >
              <span lang="nl" className="choice-nl">{w.nl}</span>
            </button>
          ))}
        </div>
        <div className="match-col">
          {right.map((w) => (
            <button
              key={w.id}
              type="button"
              className={cls(w.id, rightPick)}
              disabled={done.has(w.id)}
              onClick={() => setRightPick(w.id)}
            >
              <span className="choice-emoji" aria-hidden>{w.emoji}</span>
              <Bi text={gloss(w.id, w.en, lang)} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/** English sentence → put Dutch word tiles in order. */
export function BuildExercise({ ex, lang, locked, onAnswer }: Props<'build'>) {
  const [chosen, setChosen] = useState<number[]>([]);

  const update = (next: number[]) => {
    setChosen(next);
    onAnswer(next.length ? { correct: checkTiles(next.map((i) => ex.tiles[i]), ex.sentence.nl) } : null);
  };

  return (
    <div className="exercise">
      <Prompt text={ui('buildSentence', lang)} />
      <div className="bubble">
        <span className="bubble-avatar" aria-hidden>👷</span>
        <Bi className="bubble-text" text={gloss(ex.sentence.id, ex.sentence.en, lang)} />
      </div>
      <div className="answer-line" aria-live="polite">
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
              speak(t);
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
  useEffect(() => speak(ex.word.nl), [ex.word]);
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
