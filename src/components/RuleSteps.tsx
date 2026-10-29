import { useEffect, useRef } from 'react';
import type { HelpLanguage } from '../i18n/types';
import type { CardRow, CardType, DrawnCard, RuleCharacter } from '../content/regels/types';
import { cardSpeech, payslipCard } from '../content/regels/course';
import { ASK_WHO } from '../content/regels/askWho';
import { ruleAdviceLine } from '../content/regels/disclaimer';
import { autoSpeakLong } from '../lib/audio';
import { sentences } from '../lib/dutch';
import type { Exercise, RuleExercise, RuleKind } from '../lib/exercises';
import { learnerVoice, voiceFor, type VoiceRef } from '../lib/voices';
import { Character, MeAvatar, useTalking } from './Characters';
import { type Answer, ChoiceGrid, moodFor, reactClass } from './Exercises';
import { CheckIcon } from './Icons';
import { SpeakButton } from './SpeakButton';
import { DialectLine } from './Dialect';

/**
 * The work-rules track (Werkregels): one component per kind of step (src/content/regels/types.ts).
 * Everything here is plain Dutch, shown as it is (no translation, no English) and marked
 * lang="nl". The look is the lesson's own: the kraft tag, paper labels with an ink edge, the
 * answer cards of ChoiceGrid (a tap is the answer), the cast as calm narrators.
 *
 * At most three things to tap on a screen (speakers, one per text, and the lesson ✕ not
 * counted): a story, a rule card and a model sentence have only Continue; true/false has two
 * cards, the other questions at most three, and the button only comes after the tap (as in the
 * situation exercise). The rows of a drawn card (the payslip too) are not buttons.
 *
 * Every Dutch text block has one speaker (SpeakButton `long`: the phone reads it sentence by
 * sentence, or one recording of the whole text). Without a recording and without a Dutch phone
 * voice it is hidden (`needsDevice`): Dutch is never read by an English voice.
 */

interface RuleProps<K extends RuleKind> {
  ex: Extract<Exercise, { kind: K }>;
  lang?: HelpLanguage;
  /** True after the answer: the cards lock and the best one is marked. */
  locked: boolean;
  onAnswer: (a: Answer | null) => void;
  verdict?: 'right' | 'wrong';
  run?: number;
  misses?: number;
}

const NAMES: Record<RuleCharacter, string> = { bram: 'Bram', amina: 'Amina', henk: 'Henk', jada: 'Jada' };

/** One Dutch speaker for a text block (hidden when nothing can say it). */
function Say({ text, lang, voice, glyph = true }: { text: string; lang?: HelpLanguage; voice?: VoiceRef; glyph?: boolean }) {
  return <SpeakButton text={text} long needsDevice glyph={glyph} help={lang} voice={voice} />;
}

/** A question with its speaker: the text a learner answers (focus lands here on a new step). */
function Question({ text, lang, who, verdict, run, misses }: {
  text: string;
  lang?: HelpLanguage;
  /** A small colleague beside a short question, nodding or tilting their head after the answer. */
  who?: RuleCharacter;
  verdict?: 'right' | 'wrong';
  run?: number;
  misses?: number;
}) {
  return (
    <div className="rule-q">
      <div className="rule-q-text">
        <Say text={text} lang={lang} />
        <h2 className="prompt rule-prompt" lang="nl">{text}</h2>
      </div>
      {who && (
        <span className="speaker-char speaker-char-sm rule-q-char">
          <Character who={who} mood={moodFor(verdict, 'thinking', true)} size={68} className={reactClass(verdict, run, misses)} />
        </span>
      )}
    </div>
  );
}

/** "Verhaal": a short story, told by one of the cast, read aloud as one block. Not graded. */
export function SceneCard({ ex, lang, onAnswer }: RuleProps<'scene'>) {
  const { step } = ex;
  const who = step.who ?? 'bram';
  const story = step.lines.join(' ');
  const voice = voiceFor(who);
  // Read once per story: the voice can change while it is read (the recorded voices arrive),
  // and the story must not start over in another voice.
  const said = useRef('');
  useEffect(() => {
    onAnswer({ correct: true });
    // (Only once it was really said: a phone without a Dutch voice says nothing, and the story
    // then waits for the recorded voices.)
    if (said.current === story) return;
    if (autoSpeakLong(story, { voice })) said.current = story;
  }, [story, voice, onAnswer]);
  // The phone reads it sentence by sentence; the narrator talks along with each.
  const talking = useTalking([story, ...sentences(story)]);
  return (
    <div className="exercise rule-scene">
      <div className="rule-stage">
        <span className="rule-stage-floor" aria-hidden />
        <span className="rule-stage-char"><Character who={who} talking={talking} size={112} /></span>
        <span className="rule-stage-say">
          <span className="rule-narrator" lang="nl">{NAMES[who]} vertelt</span>
          <Say text={story} lang={lang} voice={voice} />
        </span>
      </div>
      {/* The picture idea (step.picture) is for the illustrator; screen readers get the story. */}
      <p className="prompt rule-story" lang="nl">
        {step.lines.map((line, i) => <span key={i} className="rule-line">{line}</span>)}
      </p>
    </div>
  );
}

/** The two kinds of rule, as a small tag on the card. */
export const RULE_KIND_TAG = { geschreven: 'Wet of afspraak', ongeschreven: 'Zo gaat het meestal' } as const;

/** "Regel": the rule itself. A written rule (law, contract, cao) carries the quiet advice line. */
export function RuleCard({ ex, lang, onAnswer }: RuleProps<'rule'>) {
  const { step } = ex;
  useEffect(() => { onAnswer({ correct: true }); }, [step, onAnswer]);
  const body = step.body.join(' ');
  const advice = step.rule === 'geschreven' ? ruleAdviceLine(step.id) : undefined;
  return (
    <div className="exercise rule-card">
      <div className="rule-badges">
        <span className="rule-emoji" aria-hidden>{step.emoji}</span>
        <span className={`rule-kind rule-kind-${step.rule}`} lang="nl">{RULE_KIND_TAG[step.rule]}</span>
        {step.key && (
          <span className="rule-key" lang="nl">
            <PocketGlyph />
            Op je spiekkaartje
          </span>
        )}
      </div>
      <div className="rule-label">
        <span className="rule-label-tape" aria-hidden />
        <h2 className="prompt rule-title" lang="nl">{step.title}</h2>
        <div className="rule-body">
          {/* A dialect word card (regio): no speaker, the words marked as Limburgish. */}
          {!step.dialect && <Say text={body} lang={lang} />}
          <p lang="nl">{step.body.map((line, i) => <span key={i} className="rule-line">{step.dialect ? <DialectLine line={line} /> : line}</span>)}</p>
        </div>
      </div>
      {advice && <p className="rule-advice" lang="nl"><InfoGlyph />{advice}</p>}
    </div>
  );
}

/** A small folded card (the pocket card), in the tag's ink. */
function PocketGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden focusable="false">
      <rect x="3.5" y="5" width="17" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M7 10h10M7 14h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** A quiet "i" before the advice line. */
export function InfoGlyph() {
  return (
    <svg className="rule-advice-icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden focusable="false">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M12 11v6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="12" cy="7.6" r="1.3" fill="currentColor" />
    </svg>
  );
}

/** The two answers of a true/false step (always in this order). */
export const TF_OPTIONS = [{ id: 'waar', text: 'Waar' }, { id: 'nietwaar', text: 'Niet waar' }] as const;

/** "Waar of niet waar?": a statement and two cards. */
export function TrueFalse({ ex, lang, locked, onAnswer, verdict, run, misses }: RuleProps<'truefalse'>) {
  const { step } = ex;
  return (
    <div className="exercise rule-tf">
      <Question text={step.statement} lang={lang} who="bram" verdict={verdict} run={run} misses={misses} />
      <ChoiceGrid
        className="choices-tf"
        options={[...TF_OPTIONS]}
        correctId={step.answer ? 'waar' : 'nietwaar'}
        locked={locked}
        lang={lang}
        onAnswer={onAnswer}
        stamp={false}
        render={(o) => <span className="choice-label tf-label" lang="nl">{o.text}</span>}
      />
    </div>
  );
}

/** "Wat doe je?": a situation (with a colleague's words, if any) and three ways to handle it. */
export function WhatDo({ ex, lang, locked, onAnswer, verdict }: RuleProps<'whatdo'>) {
  const { step } = ex;
  const best = step.options.find((o) => o.best)!;
  const who = step.who ?? 'henk';
  const quoteVoice = voiceFor(who);
  const talking = useTalking(step.quote ? [step.quote] : [], Boolean(step.quote));
  // An option said out loud is "your" line (the voice of the learner's character).
  const you = learnerVoice(lang?.gender);
  return (
    <div className="exercise rule-whatdo">
      <Question text={step.situation} lang={lang} />
      {step.quote && (
        <div className="speaker rule-quote">
          <span className="speaker-char"><Character who={who} mood={moodFor(verdict, 'thinking', true)} talking={talking && !verdict} size={96} /></span>
          <div className="speaker-bubble situation-text situation-says">
            <span className="situation-quote" dir="ltr">
              <Say text={step.quote} lang={lang} voice={quoteVoice} />
              <span lang="nl" className="situation-nl">“{step.quote}”</span>
            </span>
          </div>
        </div>
      )}
      <ChoiceGrid
        className="choices-rows rule-options"
        options={step.options}
        correctId={best.id}
        locked={locked}
        lang={lang}
        onAnswer={onAnswer}
        stamp={false}
        side={step.options.some((o) => o.say) ? (o) => (o.say ? <span className="rule-option-say"><Say text={o.text} lang={lang} voice={you} /></span> : <span className="rule-option-say" aria-hidden />) : undefined}
        render={(o) => <span className="choice-label" lang="nl">{o.text}</span>}
      />
    </div>
  );
}

/** "Wie vraag je het?": up to three places to go, each with its name and a picture. */
export function WhoAsk({ ex, lang, locked, onAnswer, verdict, run, misses }: RuleProps<'whoask'>) {
  const { step } = ex;
  const best = step.options.find((o) => o.best)!;
  return (
    <div className="exercise rule-whoask">
      <Question text={step.question} lang={lang} who="bram" verdict={verdict} run={run} misses={misses} />
      <ChoiceGrid
        className="choices-rows rule-options rule-who"
        options={step.options}
        correctId={best.id}
        locked={locked}
        lang={lang}
        onAnswer={onAnswer}
        stamp={false}
        render={(o) => (
          <>
            <span className="rule-who-pic" aria-hidden>{ASK_WHO[o.who].emoji}</span>
            <span className="choice-label" lang="nl">{ASK_WHO[o.who].label}</span>
          </>
        )}
      />
    </div>
  );
}

/** "Zo zeg je het": the situation, and the Dutch sentence "you" say, in a speech bubble. */
export function ModelLine({ ex, lang, onAnswer }: RuleProps<'model'>) {
  const { step } = ex;
  // "You" say it: a neutral person icon, with the voice of the learner's character. A recording
  // of the exact sentence is used when there is one (most "Zo zeg je het" lines of the course
  // tips have one); otherwise the phone's voice.
  const voice = learnerVoice(lang?.gender);
  // Once per line (the voice may change while it is said: see SceneCard).
  const said = useRef('');
  useEffect(() => {
    onAnswer({ correct: true });
    if (said.current === step.nl) return;
    if (autoSpeakLong(step.nl, { voice })) said.current = step.nl;
  }, [step, voice, onAnswer]);
  return (
    <div className="exercise rule-model">
      <p className="prompt rule-context" lang="nl">{step.context}</p>
      <div className="tip-say rule-say-card">
        <div className="tip-say-row">
          <span className="tip-char rule-me"><MeAvatar /><span className="rule-me-name" lang="nl">Jij</span></span>
          <div className="speaker-bubble tip-bubble">
            <Say text={step.nl} lang={lang} voice={voice} />
            <span className="tip-phrase-nl rule-model-nl" lang="nl">{step.nl}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** A small picture beside the card's heading (decoration). The payslip keeps its plain head. */
const CARD_PIC: Partial<Record<CardType, string>> = { rooster: '🗓️', kassabon: '🧾', pakbon: '📦', etiket: '🏷️', werkbon: '📋' };

/**
 * A drawn card: a roster, a receipt, a packing slip, a label, a work order or a payslip. Not
 * buttons: tapping it does nothing (the answer is one of the cards below it). After the answer
 * (`locked`) the rows the question is about light up, and a row still to work out ("?") shows
 * the answer. `say`: one speaker that reads the card (never the row still to work out).
 */
export function DrawnCardView({ card, locked, lang, say, rowClass }: {
  card: DrawnCard;
  locked: boolean;
  lang?: HelpLanguage;
  say?: boolean;
  /** An extra class per row (the payslip's own fields). */
  rowClass?: (r: CardRow, i: number) => string;
}) {
  const pic = CARD_PIC[card.type];
  const label = card.sub ? `${card.title}, ${card.sub}` : card.title;
  return (
    <figure className={`slip card card-${card.type}${say ? ' card-says' : ''}`} aria-label={label} lang="nl">
      <div className="slip-head">
        {pic && <span className="card-pic" aria-hidden>{pic}</span>}
        <span className="slip-title">{card.title}</span>
        {card.sub && <span className="slip-period">{card.sub}</span>}
        {say && <span className="card-say"><Say text={cardSpeech(card)} lang={lang} /></span>}
      </div>
      <dl className="slip-rows">
        {card.rows.map((r, i) => {
          const hit = locked && (r.hit || r.answer !== undefined);
          return (
            <div key={i} className={['slip-row', rowClass?.(r, i), r.answer !== undefined && 'card-todo', hit && 'slip-hit'].filter(Boolean).join(' ')}>
              {/* After the answer: the row the question was about, also for a screen reader. */}
              <dt>{r.label}{hit && r.answer === undefined && <span className="sr-only"> (hier gaat het om)</span>}</dt>
              {r.answer !== undefined
                ? <dd>{locked ? r.answer : <><span className="card-q" aria-hidden>?</span><span className="sr-only">nog uitrekenen</span></>}</dd>
                : r.value && <dd>{r.value}</dd>}
            </div>
          );
        })}
      </dl>
    </figure>
  );
}

/** A drawn payslip with a question; the row it is about lights up after the answer. Drawn as
 *  the `loonstrook` card (DrawnCardView), with its own fields as row classes. */
export function PayslipStep({ ex, lang, locked, onAnswer }: RuleProps<'payslip'>) {
  const { step } = ex;
  const best = step.options.find((o) => o.best)!;
  const card = payslipCard(step);
  return (
    <div className="exercise rule-payslip">
      <Question text={step.question} lang={lang} />
      <DrawnCardView card={card} locked={locked} lang={lang} say rowClass={(_r, i) => `slip-${step.slip.rows[i].field}`} />
      <ChoiceGrid
        className="choices-rows rule-options"
        options={step.options}
        correctId={best.id}
        locked={locked}
        lang={lang}
        onAnswer={onAnswer}
        stamp={false}
        render={(o) => <span className="choice-label" lang="nl">{o.text}</span>}
      />
    </div>
  );
}

/**
 * "Reken het uit" / "Lees het kaartje": a drawn card (rooster, kassabon, pakbon, etiket,
 * werkbon), a question about it and three answer cards. After the answer the card lights up
 * what it was about, and the feedback shows the steps of the sum (RuleFeedbackBody).
 */
export function CardStep({ ex, lang, locked, onAnswer }: RuleProps<'card'>) {
  const { step } = ex;
  const best = step.options.find((o) => o.best)!;
  return (
    <div className={`exercise rule-cardstep${step.sum ? ' rule-sum' : ''}`}>
      <Question text={step.question} lang={lang} />
      <DrawnCardView card={step.card} locked={locked} lang={lang} say />
      <ChoiceGrid
        className="choices-rows rule-options"
        options={step.options}
        correctId={best.id}
        locked={locked}
        lang={lang}
        onAnswer={onAnswer}
        stamp={false}
        render={(o) => <span className="choice-label" lang="nl">{o.text}</span>}
      />
    </div>
  );
}

/** The tag above a card step: a sum, or reading the card. */
export const cardTag = (step: { sum?: string[] }) => (step.sum?.length ? 'Reken het uit' : 'Lees het kaartje');

/** What the feedback label says after a rules question. */
export interface RuleVerdict {
  title: string;
  /** The picked option's own feedback. */
  own?: string;
  /** After another choice: the best answer. Its lead ("Het beste antwoord") is the title then. */
  best?: { lead: string; text: string };
  /** A card's sum: its steps, in words and numbers ("20 × 15 = 300 euro."). */
  sum?: string[];
  why: string;
}

/** The feedback for a graded rules step: right or not, the picked option's own line, the best
 *  answer after another pick, and the why. `given`: the id of the picked option. */
export function ruleVerdict(ex: RuleExercise, correct: boolean, given?: string): RuleVerdict | null {
  switch (ex.kind) {
    case 'truefalse':
      return {
        title: correct ? 'Goed zo!' : 'Het goede antwoord is:',
        best: correct ? undefined : { lead: 'Het goede antwoord', text: ex.step.answer ? 'Waar' : 'Niet waar' },
        why: ex.step.why,
      };
    case 'whatdo':
    case 'payslip':
    case 'card': {
      const opts: readonly { id: string; text: string; best: boolean; feedback: string }[] = ex.step.options;
      const picked = opts.find((o) => o.id === given);
      const best = opts.find((o) => o.best)!;
      const lead = ex.kind === 'card' && ex.step.sum?.length ? 'Het goede antwoord' : 'Het beste antwoord';
      return {
        title: correct ? 'Goed zo!' : `${lead} is:`,
        own: picked?.feedback,
        best: correct ? undefined : { lead, text: best.text },
        ...(ex.kind === 'card' && ex.step.sum?.length ? { sum: ex.step.sum } : {}),
        why: ex.step.why,
      };
    }
    case 'whoask': {
      const picked = ex.step.options.find((o) => o.id === given);
      const best = ex.step.options.find((o) => o.best)!;
      return {
        title: correct ? 'Goed zo!' : 'Het beste antwoord is:',
        own: picked?.feedback,
        best: correct ? undefined : { lead: 'Het beste antwoord', text: ASK_WHO[best.who].label },
        why: ex.step.why,
      };
    }
    default:
      return null;
  }
}

/** The text of the feedback label (Dutch), for the screen reader's status line. */
export function ruleAnnouncement(v: RuleVerdict): string {
  const end = (s: string) => (/[.!?]$/.test(s) ? s : `${s}.`);
  // A wrong pick: "Het beste antwoord is: <best>", then the picked option's own line.
  const head = v.best ? `${v.title} ${end(v.best.text)}` : v.title;
  return [head, v.own, ...(v.sum ?? []), v.why].filter(Boolean).map((s) => end(s!)).join(' ');
}

/** The feedback label's body for a rules question: the own line, the best answer, the why with
 *  its speaker. (The title is the label's heading, LessonPlayer.) */
export function RuleFeedbackBody({ v, lang }: { v: RuleVerdict; lang?: HelpLanguage }) {
  return (
    <>
      {/* The heading is the lead ("Het beste antwoord is:"); the answer itself green with a check. */}
      {v.best && (
        <p className="rule-fb-best feedback-answer" lang="nl">
          <span className="feedback-answer-check" aria-hidden><CheckIcon size={20} /></span>
          <strong>{v.best.text}</strong>
        </p>
      )}
      {v.own && <p className="rule-fb-own" lang="nl">{v.own}</p>}
      {v.sum && (
        <div className="rule-fb-sum">
          <Say text={v.sum.join(' ')} lang={lang} />
          <div className="rule-fb-sum-body">
            <span className="feedback-kicker" lang="nl">Zo reken je het</span>
            <p lang="nl">{v.sum.map((line, i) => <span key={i} className="rule-line">{line}</span>)}</p>
          </div>
        </div>
      )}
      <hr className="feedback-rule" />
      <div className="feedback-why rule-fb-why">
        <Say text={v.why} lang={lang} />
        <p lang="nl">{v.why}</p>
      </div>
    </>
  );
}
