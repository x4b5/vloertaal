import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { stillMotion } from '../lib/calm';
import { gloss, said, saidLang, ui, type Bilingual } from '../i18n';
import type { HelpLanguage, UiKey } from '../i18n/types';
import { autoSpeak, speak, stopSpeech } from '../lib/audio';
import { breakable, wordSize } from '../lib/dutch';
import type { Exercise } from '../lib/exercises';
import type { Progress } from '../lib/progress';
import {
  answerMode, durfThenNow, growthOf, knownOf, resultOf, scoreOf, settingsMoment, speakSentence, toetsQuestions, TOETS_PARTS, versionOf,
  type ToetsAnswer, type ToetsDurf, type ToetsGrowth, type ToetsMoment, type ToetsPart, type ToetsQuestion, type ToetsTally,
} from '../lib/toets';
import { DURF_ANSWERS, TOETS_DURF, type DurfAnswer, type DurfItem } from '../content/toets';
import type { ToetsRun as Run } from '../lib/toetsState';
import { loadVoice } from '../lib/toetsVoice';
import { dutchUi } from '../lib/track';
import { voiceFor } from '../lib/voices';
import { WordPicture } from '../pictures';
import { Bi } from './Bi';
import { castFor } from './Characters';
import { ChromeBack } from './ChromeBack';
import { type Answer, BuildExercise, ChatExercise, ChoiceGrid, TypeExercise } from './Exercises';
import { HelpSay } from './HelpSay';
import { ArrowIcon, BubblesIcon, ChevronIcon, CloseIcon, EarIcon, HourglassIcon, PictureIcon, SpeakerIcon } from './Icons';
import { NlPair } from './NlPair';
import { SpeakExercise } from './Speaking';
import { PlayName, SpeakButton } from './SpeakButton';
import '../toets.css';

/**
 * "Wat ken je al?" (src/content/toets.ts, src/lib/toets.ts): the card on the home, the test, its
 * result, and its page under Settings. The test is calm on purpose:
 *  - no "right" or "wrong" while it runs: a tap is the answer (the pick shows for a moment, never
 *    its colour), then the next question; no hearts, nothing comes back, no stamps;
 *  - at most three things to tap on every screen (the ✕ is chrome, the speakers do not count);
 *  - the speaking task at the end uses the lessons' "record and compare" and is not scored;
 *  - before the questions, "Durf je dit?" (the owner's request, 5 November 2026): five questions
 *    about what the learner dares, three faces each, no right or wrong, not in the score.
 */

const PART: Record<ToetsPart, { nl: string; key: UiKey; Icon: (p: { size?: number }) => React.ReactElement }> = {
  listen: { nl: 'Luisteren', key: 'toetsPartListen', Icon: EarIcon },
  words: { nl: 'Woorden', key: 'toetsPartWords', Icon: PictureIcon },
  sentences: { nl: 'Zinnen', key: 'toetsPartSentences', Icon: BubblesIcon },
};

const still = () => stillMotion();

/* ------------------------------------------------------------------ the card on the home */

/**
 * "Wat ken je al?" on the home since 4 November 2026 (verbeterplan fase 2): one small line under
 * the next lesson, not a card in its place (src/components/Route.tsx `lines`). After the first
 * lesson the yellow card is lesson 1.2; the line leads to ToetsOfferPage with the explanation,
 * [Doe de toets] and [Later]. Only while the home has room for it (at most 3 things to tap).
 */
export function ToetsHomeLine({ moment, lang, onOpen }: { moment: ToetsMoment; lang?: HelpLanguage; onOpen: () => void }) {
  const rtl = lang?.dir === 'rtl';
  const title = ui('toetsTitle', lang);
  return (
    <button
      type="button"
      className={`home-line toets-line-home toets-line-${moment}`}
      onClick={onOpen}
      dir={rtl ? 'rtl' : undefined}
      aria-label={`${dutchUi(lang) ? '' : 'Wat ken je al? · '}${said(title)} · 10 min`}
    >
      <span className="home-line-icon" aria-hidden><BarsGlyph size={22} /></span>
      <span className="home-line-text" aria-hidden>
        {/* "10 min" beside the small Dutch, so the help language keeps the whole width. */}
        <NlPair nlFirst nl={<>Wat ken je al? <span className="toets-time home-line-time"><HourglassIcon size={14} /><bdi dir="ltr">10 min</bdi></span></>} nlClass="home-line-nl home-line-nl-row" className="home-line-help" text={title} />
      </span>
      <ChevronIcon size={20} className="home-line-go" />
    </button>
  );
}

/**
 * The page the home's line opens: ToetsOffer ([Doe de toets], [Later]) under a back arrow (chrome,
 * not one of the three). Later passes the test over as the card on the home did (src/lib/toets.ts
 * toetsLater); Back leaves it on offer.
 */
export function ToetsOfferPage({ moment, lang, onBack, onDo, onLater }: { moment: ToetsMoment; lang?: HelpLanguage; onBack: () => void; onDo: () => void; onLater: () => void }) {
  return (
    <div className="screen toets-offer-page" dir={lang?.dir === 'rtl' ? 'rtl' : undefined}>
      <div className="screen-head max3-head">
        <ChromeBack lang={lang} onBack={onBack} />
      </div>
      <ToetsOffer moment={moment} lang={lang} onDo={onDo} onLater={onLater} />
    </div>
  );
}

/**
 * The offer: "Wat ken je al? · 10 minuten" with [Doe de toets] (its words as in Settings) and
 * [Later]. Until 4 November 2026 on the home in the place of the block; now on its own page
 * (ToetsOfferPage), from a line under the next lesson.
 */
export function ToetsOffer({ moment, lang, onDo, onLater }: { moment: ToetsMoment; lang?: HelpLanguage; onDo: () => void; onLater: () => void }) {
  const rtl = lang?.dir === 'rtl';
  const text = ui(moment === 'instap' ? 'toetsOffer' : 'toetsEndOffer', lang);
  const nlText = moment === 'instap' ? 'Ongeveer 10 minuten. Je krijgt geen cijfer.' : 'Je hebt veel geleerd. Kijk wat je nu kent.';
  return (
    <section className={`toets-offer toets-offer-${moment}`} aria-labelledby="toets-offer-title" dir={rtl ? 'rtl' : undefined}>
      <div className="toets-offer-head">
        <span className="toets-offer-icon" aria-hidden><BarsGlyph size={30} /></span>
        <h2 id="toets-offer-title" className="toets-offer-title">
          <NlPair nlFirst nl="Wat ken je al?" nlClass="toets-offer-nl" className="toets-offer-help" text={ui('toetsTitle', lang)} />
        </h2>
        {/* The start test's line says "About 10 minutes" already: the chip only on the end test's card. */}
        {moment !== 'instap' && <span className="toets-time" lang="nl"><HourglassIcon size={18} /><bdi dir="ltr">10 min</bdi></span>}
      </div>
      <p className="toets-offer-text">
        <NlPair nlFirst nl={nlText} nlClass="toets-offer-text-nl" text={text} />
        <HelpSay text={text.help} lang={lang} />
      </p>
      <div className="toets-offer-actions">
        <button type="button" className="btn btn-go btn-primary toets-do" onClick={onDo}>
          <span className="toets-btn-label">
            <NlPair nlFirst nl="Doe de toets" nlClass="toets-btn-nl" text={ui('toetsStart', lang)} />
          </span>
          <span className="btn-block" aria-hidden><ChevronIcon size={26} /></span>
        </button>
        <button type="button" className="btn toets-later" onClick={onLater}>
          <NlPair nlFirst nl="Later" nlClass="toets-btn-nl" text={ui('certLater', lang)} />
        </button>
      </div>
    </section>
  );
}

/** Three bars of different height: the test (also its row in Settings). */
export function BarsGlyph({ size = 24 }: { size?: number }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" width={size} height={size} aria-hidden focusable="false">
      <path d="M5 20v-6M12 20V5M19 20v-9" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------ the questions */

/** Hear a sentence (it is not shown), pick what it means. */
function ListenQuestion({ q, lang, onAnswer }: { q: Extract<ToetsQuestion, { part: 'listen' }>; lang?: HelpLanguage; onAnswer: (a: Answer | null) => void }) {
  const voice = voiceFor(castFor(q.sentence.id));
  useEffect(() => { autoSpeak(q.sentence.nl, false, 'nl', voice); }, [q.sentence.nl, voice]);
  return (
    <div className="exercise toets-listen">
      <h2 className="prompt" tabIndex={-1}><Bi text={ui('toetsListenAsk', lang)} /></h2>
      <div className="listen-buttons">
        <SpeakButton text={q.sentence.nl} size="lg" hideText help={lang} voice={voice} />
      </div>
      <ChoiceGrid
        className="choices-rows"
        options={q.options}
        correctId={q.sentence.id}
        locked={false}
        stamp={false}
        lang={lang}
        onAnswer={onAnswer}
        render={(s) => <Bi className="choice-label" text={gloss(s.id, s.en, lang)} />}
      />
    </div>
  );
}

/** The meaning and the picture of a word: pick the Dutch word (each with its own speaker). */
function WordQuestion({ q, lang, onAnswer }: { q: Extract<ToetsQuestion, { part: 'words' }>; lang?: HelpLanguage; onAnswer: (a: Answer | null) => void }) {
  const meaning = gloss(q.word.id, q.word.en, lang);
  const question: Bilingual = {
    en: ui('whichOneIs').en.replace('{word}', q.word.en),
    help: lang?.ui.whichOneIs && meaning.help ? lang.ui.whichOneIs.replace('{word}', meaning.help) : undefined,
    lang,
  };
  return (
    <div className="exercise toets-word">
      <h2 className="prompt" tabIndex={-1}><Bi text={question} /></h2>
      <WordPicture className="toets-pic" id={q.word.id} emoji={q.word.emoji} size={104} />
      <ChoiceGrid
        className="choices-rows choices-words hear-pick-choices"
        options={q.options}
        correctId={q.word.id}
        locked={false}
        stamp={false}
        lang={lang}
        onAnswer={onAnswer}
        side={(w) => (
          <button type="button" className="choice-say" onClick={() => speak(w.nl)}>
            <PlayName text={w.nl} help={lang} />
            <SpeakerIcon size={24} />
          </button>
        )}
        render={(w) => <span lang="nl" className={`choice-nl ${wordSize(w.nl)}`}>{breakable(w.nl)}</span>}
      />
    </div>
  );
}

/**
 * A question. The building and the writing are the lessons' own, never locked (no colours, no
 * "right" voice): a wrong word or letter shakes and waits, as in the lesson, and the last one ends
 * the question. A dictation falls back as in the lesson (lib/writing.ts): hear and pick the written
 * word for a learner who reads another script (unless they chose to learn writing), letter tiles
 * or the keyboard as set in Settings. Never the "first units" fallback: the start and the end must
 * ask the same of the same learner.
 */
function Question({ q, lang, onAnswer }: { q: ToetsQuestion; lang?: HelpLanguage; onAnswer: (a: Answer | null) => void }) {
  if (q.kind === 'build') {
    const ex: Extract<Exercise, { kind: 'build' }> = { kind: 'build', sentence: q.sentence, tiles: q.tiles, ...(q.audio ? { audio: true as const } : {}) };
    return <BuildExercise ex={ex} lang={lang} locked={false} onAnswer={onAnswer} />;
  }
  if (q.kind === 'dictate') {
    const ex: Extract<Exercise, { kind: 'type' }> = { kind: 'type', word: q.word, options: q.options };
    return <TypeExercise ex={ex} lang={lang} locked={false} onAnswer={onAnswer} />;
  }
  if (q.part === 'listen') return <ListenQuestion q={q} lang={lang} onAnswer={onAnswer} />;
  if (q.part === 'words') return <WordQuestion q={q} lang={lang} onAnswer={onAnswer} />;
  // The chat of the lessons, never locked: no colours, no "right" voice after the tap.
  const ex: Extract<Exercise, { kind: 'chat' }> = { kind: 'chat', dialogue: q.dialogue, options: q.options };
  return <ChatExercise ex={ex} lang={lang} locked={false} onAnswer={onAnswer} />;
}


/* ------------------------------------------------------------------ "Durf je dit?" */

/** The Dutch of the three answers (their translations: DURF_KEY). */
const DURF_NL: Record<DurfAnswer, string> = { 0: 'Nog niet', 1: 'Een beetje', 2: 'Ja' };
const DURF_KEY: Record<DurfAnswer, UiKey> = { 0: 'toetsDurfNotYet', 1: 'toetsDurfABit', 2: 'toetsDurfYes' };

/**
 * An answer to "Durf je dit?" as a face: worried (Nog niet), a small smile (Een beetje), a wide
 * smile (Ja). Drawn (the owner's rule: only SVG, never an emoji), in the line style of the icons,
 * one colour for all three: no red or green, there is no right or wrong.
 */
export function DurfFace({ level, size = 48 }: { level: DurfAnswer; size?: number }) {
  const line = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.6, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
  return (
    <svg className={`icon durf-face durf-face-${level}`} viewBox="0 0 48 48" width={size} height={size} aria-hidden focusable="false">
      <circle className="durf-face-bg" cx="24" cy="24" r="20.5" {...line} />
      <circle cx="17.5" cy="21" r="2.4" fill="currentColor" />
      <circle cx="30.5" cy="21" r="2.4" fill="currentColor" />
      {level === 0 && <><path d="M12.5 15.5l6-2.6M35.5 15.5l-6-2.6" {...line} strokeWidth={2.2} /><path d="M16.5 34.5q7.5-5.5 15 0" {...line} /></>}
      {level === 1 && <path d="M17 30.5q7 5 14 0" {...line} />}
      {level === 2 && <path d="M14.5 28.5h19q-1 9.5-9.5 9.5t-9.5-9.5z" fill="currentColor" stroke="currentColor" strokeWidth={2.2} strokeLinejoin="round" />}
    </svg>
  );
}

/**
 * One question of "Durf je dit?": "Durf je dit?", a picture, the situation (Dutch with a speaker,
 * and what it means), and three faces. A tap is the answer: the face shows as picked for a moment,
 * then the next screen (three things to tap, nothing else; the speakers do not count). The first
 * screen says what this is: "Eerst 5 vragen over jou. Er is geen goed of fout."
 */
function DurfQuestion({ item, first, lang, onAnswer }: { item: DurfItem; first: boolean; lang?: HelpLanguage; onAnswer: (a: DurfAnswer) => void }) {
  const [picked, setPicked] = useState<DurfAnswer | null>(null);
  const text = ui(item.key, lang);
  const intro = ui('toetsDurfIntro', lang);
  const ask = ui('toetsDurfAsk', lang);
  const tap = (a: DurfAnswer) => {
    if (picked !== null) return;
    setPicked(a);
    onAnswer(a);
  };
  return (
    <div className="exercise toets-durf">
      {first && (
        <p className="toets-calm toets-durf-intro">
          <NlPair nlFirst nl="Eerst 5 vragen over jou. Er is geen goed of fout." nlClass="toets-durf-intro-nl" className="toets-durf-intro-help" text={intro} />
        </p>
      )}
      <h2 className="prompt toets-durf-ask" tabIndex={-1}>
        <NlPair nlFirst nl="Durf je dit?" nlClass="toets-durf-ask-nl" className="toets-durf-ask-help" text={ask} />
      </h2>
      <WordPicture className="toets-pic toets-durf-pic" id={item.picture} emoji="" size={104} />
      <div className="toets-durf-line">
        <span className="toets-durf-say"><SpeakButton text={item.nl} glyph help={lang} /></span>
        <p className="toets-durf-text">
          <NlPair nlFirst content dir="ltr" nl={item.nl} nlClass="toets-durf-nl" className="toets-durf-help" text={text} />
        </p>
        <HelpSay text={text.help} lang={lang} />
      </div>
      <div className="toets-durf-faces" role="group" aria-label={said(ask)} lang={saidLang(ask)}>
        {DURF_ANSWERS.map((a) => (
          <button key={a} type="button" className={`toets-durf-face ${picked === a ? 'is-picked' : ''}`} aria-pressed={picked === a} onClick={() => tap(a)}>
            <DurfFace level={a} size={52} />
            <span className="toets-durf-face-label">
              <NlPair nlFirst nl={DURF_NL[a]} nlClass="toets-durf-face-nl" className="toets-durf-face-help" text={ui(DURF_KEY[a], lang)} />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ the test */

export interface ToetsOutcome { tally: ToetsTally; voice: Blob | null; durf: ToetsDurf }

/**
 * The test: first "Durf je dit?" (5 questions about the learner, not scored), then 21 questions
 * (7 per part), then the speaking task. ✕ stops it (nothing is kept, the card comes back). Under
 * every question the small way out "Ik weet het niet" (a text link, like "Ik kan nu niet
 * luisteren" in the lesson: it does not count as one of the three things to tap,
 * scripts/max3/count.cjs): an honest answer, never a wrong one. For the screenshot harness:
 * `startAt` opens at a question (past "Durf je dit?"), `durfAt` at a screen of "Durf je dit?".
 */
export function ToetsPlayer({ moment, lang, onQuit, onDone, startAt, durfAt, seed: fixedSeed }: {
  moment: ToetsMoment;
  lang?: HelpLanguage;
  onQuit: () => void;
  onDone: (r: ToetsOutcome) => void;
  startAt?: number;
  durfAt?: number;
  seed?: number;
}) {
  const [seed] = useState(() => fixedSeed ?? (Date.now() >>> 0));
  const questions = useMemo(() => toetsQuestions(versionOf(moment), seed), [moment, seed]);
  const speakEx = useMemo<Extract<Exercise, { kind: 'speak' }>>(() => ({ kind: 'speak', item: speakSentence() }), []);
  /** The step: first the screens of "Durf je dit?", then the questions, then the speaking task. */
  const firstQ = TOETS_DURF.length;
  const [step, setStep] = useState(() => durfAt ?? (startAt === undefined ? 0 : firstQ + startAt));
  const index = step - firstQ;
  const durf = useRef<ToetsDurf>({});
  const answers = useRef<(ToetsAnswer | undefined)[]>([]);
  const busy = useRef(false);
  /** With the keyboard: the word typed so far, graded (Verder takes it). */
  const [typed, setTyped] = useState<Answer | null>(null);
  const voice = useRef<Blob | null>(null);
  /** The speaking task: Continue once it can go on (said aloud, no microphone); hidden while comparing. */
  const [spoken, setSpoken] = useState(false);
  const [rating, setRating] = useState(false);
  const total = firstQ + questions.length + 1;
  const daring = step < firstQ;
  const speaking = index >= questions.length;
  const q = daring ? undefined : questions[index];
  // Decided once per question, as the lesson's own exercise decides it (a change in Settings never swaps it halfway).
  const mode = useMemo(() => (q ? answerMode(q, lang) : { pick: false, keys: false }), [q, lang]);
  const rtl = lang?.dir === 'rtl';
  const slide = useRef<HTMLDivElement>(null);
  const timer = useRef(0);
  useEffect(() => {
    return () => { window.clearTimeout(timer.current); stopSpeech(); };
  }, []);

  // A new question: its heading gets the focus (a screen reader starts there), at the top.
  useEffect(() => {
    if (window.scrollY > 0) window.scrollTo({ top: 0, behavior: 'auto' });
    const h = slide.current?.querySelector<HTMLElement>('.prompt');
    if (h) { h.tabIndex = -1; h.focus({ preventScroll: true }); }
  }, [step]);

  const finish = useCallback(() => {
    stopSpeech();
    onDone({ tally: scoreOf(questions, answers.current), voice: voice.current, durf: { ...durf.current } });
  }, [onDone, questions]);

  // "Durf je dit?": the face shows as picked for a moment, then the next screen (no sound, no colour).
  const onDurf = useCallback((a: DurfAnswer) => {
    if (busy.current) return;
    busy.current = true;
    durf.current[TOETS_DURF[step].id] = a;
    timer.current = window.setTimeout(() => {
      busy.current = false;
      stopSpeech();
      setStep((i) => i + 1);
    }, still() ? 200 : 450);
  }, [step]);

  // A tap is the answer: it shows as picked for a moment (no colour, no sound of right or wrong),
  // then the next question. A second tap meanwhile does nothing. A built sentence waits a little
  // longer, so its last word is heard.
  const record = useCallback((result: ToetsAnswer['result'], wait: number) => {
    if (busy.current) return;
    busy.current = true;
    answers.current[index] = { result, pick: mode.pick };
    timer.current = window.setTimeout(() => {
      busy.current = false;
      stopSpeech();
      setTyped(null);
      setStep((i) => i + 1);
    }, still() ? Math.min(wait, 250) : wait);
  }, [index, mode.pick]);
  const onAnswer = useCallback((a: Answer | null) => {
    if (mode.keys && !a?.done) { setTyped(a); return; }
    if (!a?.done) return;
    record(resultOf(questions[index], a, mode.pick), questions[index].kind === 'build' ? 900 : 450);
  }, [index, questions, mode, record]);
  const notKnown = useCallback(() => record('idk', 150), [record]);

  const onSpeakAnswer = useCallback((a: { correct: boolean } | null) => setSpoken(Boolean(a)), []);
  const onRecording = useCallback((blob: Blob) => { voice.current = blob; }, []);
  const done = Math.min(step, total);

  return (
    <div className={`player toets-player ${rtl ? 'player-rtl' : ''}`} dir={rtl ? 'rtl' : 'ltr'}>
      <header className="player-top">
        <button type="button" className="icon-btn lesson-close" onClick={() => { stopSpeech(); onQuit(); }} aria-label={said(ui('quitLesson', lang))} lang={saidLang(ui('quitLesson', lang))}>
          <CloseIcon size={28} />
        </button>
        <div className="bar-wrap">
          <div
            className="lbar"
            role="progressbar"
            aria-label={said(ui('toetsTitle', lang))}
            lang={saidLang(ui('toetsTitle', lang))}
            aria-valuemin={0}
            aria-valuemax={total}
            aria-valuenow={done}
            aria-valuetext={`${done + 1} / ${total}`}
          >
            <span className="lbar-now" style={{ width: `${100 / total}%`, transform: `translateX(${(rtl ? -1 : 1) * done * 100}%)` }} />
            <span className="lbar-fill" style={{ transform: `scaleX(${done / total})` }} />
            <span className="lbar-ticks" style={{ '--n': total } as React.CSSProperties} />
          </div>
        </div>
        <h1 className="sr-only"><NlPair nlFirst nl="Wat ken je al?" text={ui('toetsTitle', lang)} /></h1>
      </header>
      <div className="player-body">
        <div className="ex-slide" key={step} ref={slide}>
          {/* No label for the part ("Luisteren"): the question says it. The count stays. */}
          <div className="ex-tag">
            <span className="toets-count" aria-hidden><bdi dir="ltr">{done + 1} / {total}</bdi></span>
          </div>
          {index === 0 && <p className="toets-calm"><Bi text={ui('toetsNotSure', lang)} /></p>}
          {daring ? (
            <DurfQuestion key={step} item={TOETS_DURF[step]} first={step === 0} lang={lang} onAnswer={onDurf} />
          ) : speaking ? (
            <SpeakExercise
              ex={speakEx}
              lang={lang}
              onAnswer={onSpeakAnswer}
              onRating={setRating}
              onRecording={onRecording}
              keepNote={moment === 'instap' ? ui('toetsMicKeep', lang) : undefined}
            />
          ) : (
            <>
              <Question key={index} q={q!} lang={lang} onAnswer={onAnswer} />
              <button type="button" className="toets-idk" onClick={notKnown}>
                <NlPair nlFirst nl="Ik weet het niet" nlClass="toets-idk-nl" className="toets-idk-help" text={ui('toetsIdk', lang)} />
              </button>
            </>
          )}
        </div>
      </div>
      <footer className={`player-foot ${(speaking && spoken && !rating) || (!speaking && !daring && typed) ? '' : 'foot-empty'}`}>
        <div className="foot-inner">
          <div className="foot-actions">
            {!speaking && !daring && typed && (
              <button type="button" className="btn btn-go btn-primary toets-typed-go" onClick={() => record(typed.correct ? 'right' : 'wrong', 150)} dir={rtl ? 'rtl' : undefined}>
                <Bi className="btn-label" text={ui('continue', lang)} />
                <span className="btn-block" aria-hidden><ChevronIcon size={26} /></span>
              </button>
            )}
            {speaking && spoken && !rating && (
              <button type="button" className="btn btn-go btn-primary" onClick={finish} dir={rtl ? 'rtl' : undefined}>
                <Bi className="btn-label" text={ui('continue', lang)} />
                <span className="btn-block" aria-hidden><ChevronIcon size={26} /></span>
              </button>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ------------------------------------------------------------------ the result */

const PART_NL: Record<ToetsPart, string> = { listen: 'Luisteren', words: 'Woorden', sentences: 'Zinnen' };

/**
 * Then against now, in words: "Meer dan toen" only when the difference is bigger than guessing can
 * give (lib/toetsState.ts growthOf), else "Ongeveer gelijk". Lower by more than guessing can give:
 * no words (the bars show it; the test never says "less").
 */
function GrowthNote({ growth, all, lang }: { growth: ToetsGrowth; all?: boolean; lang?: HelpLanguage }) {
  if (growth === 'down') return null;
  const up = growth === 'up';
  const nl = all ? (up ? 'Alles samen: je kent nu meer dan toen.' : 'Alles samen: ongeveer gelijk aan toen.') : up ? 'Meer dan toen' : 'Ongeveer gelijk';
  const key: UiKey = all ? (up ? 'toetsMoreAll' : 'toetsSameAll') : up ? 'toetsMore' : 'toetsSame';
  return (
    <p className={`toets-growth toets-growth-${growth} ${all ? 'toets-growth-all' : ''}`}>
      <NlPair nlFirst nl={nl} nlClass="toets-growth-nl" className="toets-growth-help" text={ui(key, lang)} />
    </p>
  );
}

/**
 * One part: its name, and one bar (or "Jij toen" and "Jij nu"). The numbers are written, the bar
 * only draws them: what the learner knows with the guessing taken out (knownOf), of the questions.
 */
function PartBars({ part, now, before, lang }: { part: ToetsPart; now: Run; before?: Run; lang?: HelpLanguage }) {
  const { Icon } = PART[part];
  const row = (run: Run, who?: 'then' | 'now') => {
    const n = knownOf(run, part);
    const of = run.of[part];
    const label = who ? ui(who === 'then' ? 'toetsYouThen' : 'toetsYouNow', lang) : null;
    return (
      <div className={`toets-bar-row ${who ? `toets-bar-${who}` : ''}`}>
        {label && <span className="toets-bar-who"><NlPair nlFirst nl={who === 'then' ? 'Jij toen' : 'Jij nu'} nlClass="toets-who-nl" className="toets-who-help" text={label} /></span>}
        <span className="toets-bar" aria-hidden><span className="toets-bar-fill" style={{ width: `${of ? (100 * n) / of : 0}%` }} /></span>
        <span className="toets-bar-n"><bdi dir="ltr">{n} / {of}</bdi></span>
      </div>
    );
  };
  return (
    <li className="toets-part">
      <span className="toets-part-name">
        <span className="toets-part-icon" aria-hidden><Icon size={22} /></span>
        <NlPair nlFirst nl={PART_NL[part]} nlClass="toets-part-nl" className="toets-part-help" text={ui(PART[part].key, lang)} />
      </span>
      {before ? <>{row(before, 'then')}{row(now, 'now')}<GrowthNote growth={growthOf(before, now, part)} lang={lang} /></> : row(now)}
    </li>
  );
}

/** "Jij toen" and "Jij nu": the two recordings of the speaking task, kept on this phone. */
function VoicesThenNow({ lang }: { lang?: HelpLanguage }) {
  const [urls, setUrls] = useState<{ then?: string; now?: string }>({});
  const [playing, setPlaying] = useState<'then' | 'now' | null>(null);
  const audio = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    let alive = true;
    const made: string[] = [];
    void Promise.all([loadVoice('instap'), loadVoice('eind')]).then(([a, b]) => {
      if (!alive) return;
      const url = (x: Blob | null) => { if (!x) return undefined; const u = URL.createObjectURL(x); made.push(u); return u; };
      setUrls({ then: url(a), now: url(b) });
    });
    return () => {
      alive = false;
      audio.current?.pause();
      made.forEach((u) => URL.revokeObjectURL(u));
    };
  }, []);
  if (!urls.then || !urls.now) return null;
  const play = (which: 'then' | 'now') => {
    stopSpeech();
    audio.current?.pause();
    const a = new Audio(urls[which]);
    audio.current = a;
    setPlaying(which);
    a.onended = a.onerror = () => setPlaying((p) => (p === which ? null : p));
    a.play().catch(() => setPlaying(null));
  };
  const button = (which: 'then' | 'now') => {
    const t = ui(which === 'then' ? 'toetsYouThen' : 'toetsYouNow', lang);
    return (
      <button type="button" className={`say-play say-play-me ${playing === which ? 'is-playing' : ''}`} onClick={() => play(which)} aria-label={said(t)} lang={saidLang(t)}>
        <SpeakerIcon size={30} />
        <NlPair nlFirst nl={which === 'then' ? 'Jij toen' : 'Jij nu'} nlClass="say-who" className="toets-who-help" text={t} />
      </button>
    );
  };
  const sentence = speakSentence();
  return (
    <div className="toets-voices">
      <p className="toets-voices-line" lang="nl"><bdi dir="ltr">{sentence.nl}</bdi></p>
      <div className="say-compare">{button('then')}{button('now')}</div>
    </div>
  );
}

/**
 * "Durf je dit?" on the result of the end: per question its picture and its Dutch line, and the
 * answer then and now as faces (😟 → 🙂), in the order of the questions. No words of more or less,
 * no total: the faces say it, as the learner gave them. Only when the start has answers too
 * (durfThenNow): an end on its own shows nothing of it (docs/toets.md: a row of "Nog niet" after
 * four weeks, without the step from then, would read as a verdict).
 */
function DurfThenNow({ before, now, lang }: { before?: Run; now: Run; lang?: HelpLanguage }) {
  const rows = durfThenNow(before, now);
  if (!rows.length) return null;
  const then = ui('toetsYouThen', lang);
  const nowT = ui('toetsYouNow', lang);
  return (
    <section className="toets-durf-result" aria-labelledby="toets-durf-result-title">
      <h2 id="toets-durf-result-title" className="toets-durf-result-title">
        <span className="toets-part-icon" aria-hidden><DurfFace level={1} size={22} /></span>
        <span className="toets-durf-result-name">
          <NlPair nlFirst nl="Durf je dit?" nlClass="toets-part-nl" className="toets-part-help" text={ui('toetsDurfAsk', lang)} />
        </span>
      </h2>
      <ul className="toets-durf-rows">
        {rows.map((r) => {
          const item = TOETS_DURF.find((d) => d.id === r.id)!;
          const answer = (a: DurfAnswer) => said(ui(DURF_KEY[a], lang));
          return (
            <li key={r.id} className="toets-durf-row">
              <WordPicture className="toets-durf-row-pic" id={item.picture} emoji="" size={40} />
              <span className="toets-durf-row-text">
                <NlPair nlFirst content dir="ltr" nl={item.nl} nlClass="toets-durf-row-nl" className="toets-durf-row-help" text={ui(item.key, lang)} />
              </span>
              <span className="toets-durf-row-faces">
                <span className="toets-durf-then"><DurfFace level={r.then} size={30} /></span>
                <ArrowIcon size={16} className="toets-durf-arrow" />
                <span className="toets-durf-now"><DurfFace level={r.now} size={30} /></span>
                <span className="sr-only">{`${said(then)}: ${answer(r.then)}. ${said(nowT)}: ${answer(r.now)}.`}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/**
 * After the start: "Durf je dit?" is only kept (nothing to compare yet). One calm line, like
 * "Oefen elke dag een beetje" above it, says it comes back: "Durf je dit? Na een paar weken
 * vragen we het nog een keer."
 */
function DurfLater({ lang }: { lang?: HelpLanguage }) {
  const ask = ui('toetsDurfAsk', lang);
  const again = ui('toetsDurfAgain', lang);
  const text: Bilingual = { en: `${ask.en} ${again.en}`, help: ask.help && again.help ? `${ask.help} ${again.help}` : undefined, lang };
  return (
    <p className="result-line toets-keep toets-durf-later">
      <NlPair nlFirst nl="Durf je dit? Na een paar weken vragen we het nog een keer." nlClass="toets-keep-nl" text={text} />
    </p>
  );
}

/** The result: three bars (after the end, then and now side by side), calm words, Continue (pinned). */
export function ToetsResult({ moment, now, before, lang, onDone }: { moment: ToetsMoment; now: Run; before?: Run; lang?: HelpLanguage; onDone: () => void }) {
  const title = useRef<HTMLHeadingElement>(null);
  useEffect(() => { title.current?.focus({ preventScroll: true }); }, []);
  const rtl = lang?.dir === 'rtl';
  const end = moment === 'eind';
  const moreBelow = useMoreBelow();
  return (
    <div className="player result-screen toets-result" dir={rtl ? 'rtl' : undefined}>
      <div className="player-body result">
        <h1 className="result-title toets-result-title" tabIndex={-1} ref={title}>
          <NlPair nlFirst nl={end ? 'Goed gedaan! Kijk wat je nu kent.' : 'Goed begin! Dit ken je al.'} nlClass="toets-result-nl" text={ui(end ? 'toetsEndDone' : 'toetsStartDone', lang)} />
        </h1>
        <ToetsBars now={now} before={end ? before : undefined} lang={lang} />
        {end && <VoicesThenNow lang={lang} />}
        {end && <DurfThenNow before={before} now={now} lang={lang} />}
        {!end && (
          <p className="result-line toets-keep">
            <NlPair nlFirst nl="Oefen elke dag een beetje. Dan leer je steeds meer." nlClass="toets-keep-nl" text={ui('toetsKeepGoing', lang)} />
          </p>
        )}
        {!end && now.durf && <DurfLater lang={lang} />}
      </div>
      {/* Pinned to the bottom (sticky, in the flow): Continue is always in view, and at the end of
          the page the footer sits under "Jij toen / Jij nu", never over them. A soft shadow on its
          top edge while there is more above it to scroll to (no extra button: max 3 to tap). */}
      <footer className={`player-foot toets-result-foot ${moreBelow ? 'foot-more' : ''}`}>
        <div className="foot-inner foot-actions">
          <button type="button" className="btn btn-go btn-primary toets-result-go" onClick={onDone} dir={rtl ? 'rtl' : undefined}>
            <Bi className="btn-label" text={ui('continue', lang)} />
            <span className="btn-block" aria-hidden><ChevronIcon size={26} /></span>
          </button>
        </div>
      </footer>
    </div>
  );
}

/** True while the page can still scroll down (the pinned footer then shows a soft shadow). */
function useMoreBelow(): boolean {
  const [more, setMore] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;
    const measure = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setMore(root.scrollHeight - (window.scrollY + window.innerHeight) > 4));
    };
    measure();
    const ro = typeof ResizeObserver === 'function' ? new ResizeObserver(measure) : null;
    ro?.observe(document.body);
    window.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    return () => {
      cancelAnimationFrame(raf);
      ro?.disconnect();
      window.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
    };
  }, []);
  return more;
}

/** The three parts as bars; then and now: and under them the whole test in one line. */
export function ToetsBars({ now, before, lang }: { now: Run; before?: Run; lang?: HelpLanguage }) {
  return (
    <>
      <ul className="toets-parts">
        {TOETS_PARTS.map((p) => <PartBars key={p} part={p} now={now} before={before} lang={lang} />)}
      </ul>
      {before && <GrowthNote growth={growthOf(before, now)} all lang={lang} />}
    </>
  );
}

/* ------------------------------------------------------------------ Settings */

/**
 * Settings › Lessen › "Wat ken je al?": [Doe de toets] (the start, or the end once the start was
 * done), then the last result (the end next to the start) and "Jij toen / Jij nu".
 */
export function ToetsPage({ progress, lang, onBack, onStart }: { progress: Progress; lang?: HelpLanguage; onBack: () => void; onStart: (m: ToetsMoment) => void }) {
  const t = progress.toets;
  const now = t?.eind ?? t?.instap;
  const before = t?.eind ? t.instap : undefined;
  const rtl = lang?.dir === 'rtl';
  return (
    <div className="screen toets-page" dir={rtl ? 'rtl' : undefined}>
      <div className="screen-head max3-head">
        <ChromeBack lang={lang} onBack={onBack} />
        <h1 className="max3-title"><NlPair text={ui('toetsTitle', lang)} nl="Wat ken je al?" nlClass="max3-title-nl" /></h1>
      </div>
      {!now && (
        <p className="toets-offer-text">
          <NlPair nlFirst nl="Ongeveer 10 minuten. Je krijgt geen cijfer." nlClass="toets-offer-text-nl" text={ui('toetsOffer', lang)} />
        </p>
      )}
      {/* First the action, then the last result: [Doe de toets] is in view on every phone. */}
      <button type="button" className="btn btn-go btn-primary toets-do" onClick={() => onStart(settingsMoment(progress, new Date()))}>
        <span className="toets-btn-label">
          <NlPair nlFirst nl="Doe de toets" nlClass="toets-btn-nl" text={ui('toetsStart', lang)} />
        </span>
        <span className="btn-block" aria-hidden><ChevronIcon size={26} /></span>
      </button>
      {now && (
        <>
          <p className="toets-date" lang="nl"><bdi dir="ltr">{now.day.split('-').reverse().join('-')}</bdi></p>
          <ToetsBars now={now} before={before} lang={lang} />
          {t?.eind && <VoicesThenNow lang={lang} />}
          {t?.eind && <DurfThenNow before={before} now={now} lang={lang} />}
        </>
      )}
    </div>
  );
}

/** One line on "Mijn certificaten": the test's last result (not a button). */
export function ToetsLine({ progress, lang }: { progress: Progress; lang?: HelpLanguage }) {
  const t = progress.toets;
  const now = t?.eind ?? t?.instap;
  if (!now) return null;
  const parts = TOETS_PARTS.map((p) => `${PART_NL[p]} ${knownOf(now, p)}/${now.of[p]}`).join(' · ');
  return (
    <p className="toets-line">
      <span className="toets-line-icon" aria-hidden><BarsGlyph size={22} /></span>
      <span className="toets-line-text">
        <NlPair nlFirst nl="Wat ken je al?" nlClass="toets-line-nl" className="toets-line-help" text={ui('toetsTitle', lang)} />
        <span className="toets-line-n" lang="nl"><bdi dir="ltr">{parts} · {now.day.split('-').reverse().join('-')}</bdi></span>
      </span>
    </p>
  );
}
