import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { gloss, said, saidLang, ui, type Bilingual } from '../i18n';
import type { HelpLanguage, UiKey } from '../i18n/types';
import { autoSpeak, speak, stopSpeech } from '../lib/audio';
import { breakable, wordSize } from '../lib/dutch';
import type { Exercise } from '../lib/exercises';
import type { Progress } from '../lib/progress';
import { rightId, scoreOf, settingsMoment, speakSentence, toetsQuestions, TOETS_PARTS, versionOf, type ToetsMoment, type ToetsPart, type ToetsQuestion } from '../lib/toets';
import type { ToetsRun as Run, ToetsScore } from '../lib/toetsState';
import { loadVoice } from '../lib/toetsVoice';
import { voiceFor } from '../lib/voices';
import { WordPicture } from '../pictures';
import { Bi } from './Bi';
import { castFor } from './Characters';
import { ChromeBack } from './ChromeBack';
import { type Answer, ChatExercise, ChoiceGrid } from './Exercises';
import { HelpSay } from './HelpSay';
import { BubblesIcon, ChevronIcon, CloseIcon, EarIcon, HourglassIcon, PictureIcon, SpeakerIcon } from './Icons';
import { NlPair } from './NlPair';
import { MicIcon, SpeakExercise } from './Speaking';
import { PlayName, SpeakButton } from './SpeakButton';
import '../toets.css';

/**
 * "Wat ken je al?" (src/content/toets.ts, src/lib/toets.ts): the card on the home, the test, its
 * result, and its page under Settings. The test is calm on purpose:
 *  - no "right" or "wrong" while it runs: a tap is the answer (the pick shows for a moment, never
 *    its colour), then the next question; no hearts, nothing comes back, no stamps;
 *  - at most three things to tap on every screen (the ✕ is chrome, the speakers do not count);
 *  - the speaking task at the end uses the lessons' "record and compare" and is not scored.
 */

const PART: Record<ToetsPart, { nl: string; key: UiKey; Icon: (p: { size?: number }) => React.ReactElement }> = {
  listen: { nl: 'Luisteren', key: 'toetsPartListen', Icon: EarIcon },
  words: { nl: 'Woorden', key: 'toetsPartWords', Icon: PictureIcon },
  sentences: { nl: 'Zinnen', key: 'toetsPartSentences', Icon: BubblesIcon },
};

const still = () => typeof window !== 'undefined' && Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches);

/** A small tag: the part's icon, the Dutch name and the help language's. */
function PartTag({ part, lang }: { part: ToetsPart | 'speak'; lang?: HelpLanguage }) {
  const p = part === 'speak' ? { nl: 'Spreken', key: 'tagSpeak' as UiKey, Icon: MicIcon } : PART[part];
  return (
    <span className="tag tag-kind">
      <span className="tag-icon" aria-hidden><p.Icon size={20} /></span>
      <NlPair nlFirst nl={p.nl} nlClass="tag-nl" className="tag-help" text={ui(p.key, lang)} />
    </span>
  );
}

/* ------------------------------------------------------------------ the card on the home */

/**
 * The offer on the home, in the place of the block: "Wat ken je al? · 10 minuten" with [Doen] and
 * [Later] (and "Ander onderwerp" under it: three things to tap).
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
        <span className="toets-time" lang="nl"><HourglassIcon size={18} /><bdi dir="ltr">10 min</bdi></span>
      </div>
      <p className="toets-offer-text">
        <NlPair nlFirst nl={nlText} nlClass="toets-offer-text-nl" text={text} />
        <HelpSay text={text.help} lang={lang} />
      </p>
      <div className="toets-offer-actions">
        <button type="button" className="btn btn-go btn-primary toets-do" onClick={onDo}>
          <span className="toets-btn-label">
            <NlPair nlFirst nl="Doen" nlClass="toets-btn-nl" text={ui('start', lang)} />
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

function Question({ q, lang, onAnswer }: { q: ToetsQuestion; lang?: HelpLanguage; onAnswer: (a: Answer | null) => void }) {
  if (q.part === 'listen') return <ListenQuestion q={q} lang={lang} onAnswer={onAnswer} />;
  if (q.part === 'words') return <WordQuestion q={q} lang={lang} onAnswer={onAnswer} />;
  // The chat of the lessons, never locked: no colours, no "right" voice after the tap.
  const ex: Extract<Exercise, { kind: 'chat' }> = { kind: 'chat', dialogue: q.dialogue, options: q.options };
  return <ChatExercise ex={ex} lang={lang} locked={false} onAnswer={onAnswer} />;
}

/* ------------------------------------------------------------------ the test */

export interface ToetsOutcome { right: ToetsScore; of: ToetsScore; voice: Blob | null }

/**
 * The test: 18 questions (6 per part), then the speaking task. ✕ stops it (nothing is kept, the
 * card comes back). `startAt` and `speakPhase` are for the screenshot harness.
 */
export function ToetsPlayer({ moment, lang, onQuit, onDone, startAt = 0, seed: fixedSeed }: {
  moment: ToetsMoment;
  lang?: HelpLanguage;
  onQuit: () => void;
  onDone: (r: ToetsOutcome) => void;
  startAt?: number;
  seed?: number;
}) {
  const [seed] = useState(() => fixedSeed ?? (Date.now() >>> 0));
  const questions = useMemo(() => toetsQuestions(versionOf(moment), seed), [moment, seed]);
  const speakEx = useMemo<Extract<Exercise, { kind: 'speak' }>>(() => ({ kind: 'speak', item: speakSentence() }), []);
  const [index, setIndex] = useState(startAt);
  const answers = useRef<boolean[]>([]);
  const busy = useRef(false);
  const voice = useRef<Blob | null>(null);
  /** The speaking task: Continue once it can go on (said aloud, no microphone); hidden while comparing. */
  const [spoken, setSpoken] = useState(false);
  const [rating, setRating] = useState(false);
  const total = questions.length + 1;
  const speaking = index >= questions.length;
  const q = questions[index];
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
  }, [index]);

  const finish = useCallback(() => {
    stopSpeech();
    onDone({ ...scoreOf(questions, answers.current), voice: voice.current });
  }, [onDone, questions]);

  // A tap is the answer: it shows as picked for a moment (no colour, no sound of right or wrong),
  // then the next question. A second tap meanwhile does nothing.
  const onAnswer = useCallback((a: Answer | null) => {
    if (!a?.done || busy.current) return;
    busy.current = true;
    answers.current[index] = a.given?.[0] === rightId(questions[index]);
    timer.current = window.setTimeout(() => {
      busy.current = false;
      stopSpeech();
      setIndex((i) => i + 1);
    }, still() ? 250 : 450);
  }, [index, questions]);

  const onSpeakAnswer = useCallback((a: { correct: boolean } | null) => setSpoken(Boolean(a)), []);
  const onRecording = useCallback((blob: Blob) => { voice.current = blob; }, []);
  const part: ToetsPart | 'speak' = speaking ? 'speak' : q.part;
  const done = Math.min(index, total);

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
        <div className="ex-slide" key={index} ref={slide}>
          <div className="ex-tag">
            <PartTag part={part} lang={lang} />
            <span className="toets-count" aria-hidden><bdi dir="ltr">{done + 1} / {total}</bdi></span>
          </div>
          {index === 0 && <p className="toets-calm"><Bi text={ui('toetsNotSure', lang)} /></p>}
          {speaking ? (
            <SpeakExercise
              ex={speakEx}
              lang={lang}
              onAnswer={onSpeakAnswer}
              onNext={finish}
              onRating={setRating}
              onRecording={onRecording}
              keepNote={moment === 'instap' ? ui('toetsMicKeep', lang) : undefined}
            />
          ) : (
            <Question key={index} q={q} lang={lang} onAnswer={onAnswer} />
          )}
        </div>
      </div>
      <footer className={`player-foot ${speaking && spoken && !rating ? '' : 'foot-empty'}`}>
        <div className="foot-inner">
          <div className="foot-actions">
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

/** One part: its name, and one bar (or "Jij toen" and "Jij nu"). The numbers are written, the bar only draws them. */
function PartBars({ part, now, before, lang }: { part: ToetsPart; now: Run; before?: Run; lang?: HelpLanguage }) {
  const { Icon } = PART[part];
  const row = (run: Run, who?: 'then' | 'now') => {
    const n = run.right[part];
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
      {before ? <>{row(before, 'then')}{row(now, 'now')}</> : row(now)}
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
        {!end && (
          <p className="result-line toets-keep">
            <NlPair nlFirst nl="Oefen elke dag een beetje. Dan leer je steeds meer." nlClass="toets-keep-nl" text={ui('toetsKeepGoing', lang)} />
          </p>
        )}
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

/** The three parts as bars. */
export function ToetsBars({ now, before, lang }: { now: Run; before?: Run; lang?: HelpLanguage }) {
  return (
    <ul className="toets-parts">
      {TOETS_PARTS.map((p) => <PartBars key={p} part={p} now={now} before={before} lang={lang} />)}
    </ul>
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
  const parts = TOETS_PARTS.map((p) => `${PART_NL[p]} ${now.right[p]}/${now.of[p]}`).join(' · ');
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
