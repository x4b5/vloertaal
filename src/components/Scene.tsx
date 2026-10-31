import { useEffect, useRef, useState } from 'react';
import { geluidsscenes, type Geluidsscene, type Spreker } from '../content/geluidsscenes';
import { gloss, said, saidLang, ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { sounds, stopSpeech } from '../lib/audio';
import { breakable } from '../lib/dutch';
import { Bi } from './Bi';
import { Character, type CharacterId } from './Characters';
import { ChromeBack } from './ChromeBack';
import { ChoiceGrid, type Answer } from './Exercises';
import { CheckIcon, ChevronIcon, CloseIcon, SpeakerIcon } from './Icons';
import { NlPair } from './NlPair';
import { dutchUi } from '../lib/track';
import { SpeakButton } from './SpeakButton';
import '../scene.css';

/** A scene by its id (src/content/geluidsscenes.ts). */
export function findScene(id: string): Geluidsscene | undefined {
  return geluidsscenes.find((s) => s.id === id);
}

/** The colleagues who talk in a scene (the learner, "ik", is not shown as a face). */
export function sceneCast(scene: Geluidsscene): CharacterId[] {
  return [...new Set(scene.beurten.map((b) => b.wie).filter((w): w is Exclude<Spreker, 'ik'> => w !== 'ik'))];
}

/** The id of a question's option (for ChoiceGrid): question number and place. */
const optionId = (q: number, k: number) => `${q}.${k}`;

export type SceneStep = 'listen' | number;

/**
 * "Luister op de werkvloer": one sound scene (docs/geluidsscenes.md). First the mix plays: a
 * colleague at normal speed, with the noise of the work floor behind it (never the phone's voice:
 * the noise is the point; the topic page only offers a scene whose mp3 is there, src/lib/scenes.ts).
 * Then its 1 or 2 questions, each with 3 answers, and one sentence why. Nothing is scored or kept.
 *
 * At most three things to tap (the back arrow is chrome, the speakers do not count): the first
 * page has Luisteren (a speaker) and Verder; a question its 3 answers (and Luisteren); after the
 * answer only Verder.
 */
export function SceneScreen({ id, url, lang, onBack, onDone, start = 'listen', pickForShot }: {
  id: string;
  /** The scene's mp3 (sceneUrl in src/lib/scenes.ts). */
  url: string;
  lang?: HelpLanguage;
  onBack: () => void;
  /** After the last question. */
  onDone: () => void;
  /** Screenshots: the page to start on, and an answer already given there. */
  start?: SceneStep;
  pickForShot?: number;
}) {
  const scene = findScene(id);
  const [step, setStep] = useState<SceneStep>(start);
  const [heard, setHeard] = useState(start !== 'listen');
  const [playing, setPlaying] = useState(false);
  const [answer, setAnswer] = useState<Answer | null>(
    typeof start === 'number' && pickForShot !== undefined && scene
      ? { correct: Boolean(scene.vragen[start]?.opties[pickForShot]?.goed), given: [optionId(start, pickForShot)] }
      : null,
  );
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const rtl = lang?.dir === 'rtl';
  const mainRef = useRef<HTMLElement>(null);
  const first = useRef(true);

  // Let go of the sound when the screen closes.
  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);
  // A new page: the focus goes to its main text, as on "Oefen samen".
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    mainRef.current?.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }, [step]);

  if (!scene) return null;

  const play = () => {
    stopSpeech();
    audioRef.current?.pause();
    const audio = new Audio(url);
    audioRef.current = audio;
    setHeard(true);
    setPlaying(true);
    audio.onended = audio.onerror = () => { if (audioRef.current === audio) setPlaying(false); };
    audio.play().catch(() => { if (audioRef.current === audio) setPlaying(false); });
  };
  const stopPlaying = () => {
    audioRef.current?.pause();
    setPlaying(false);
  };
  const next = () => {
    stopPlaying();
    setAnswer(null);
    if (step === 'listen') setStep(0);
    else if (step + 1 < scene.vragen.length) setStep(step + 1);
    else onDone();
  };
  const onAnswer = (a: Answer | null) => {
    if (!a) return;
    if (a.correct) sounds.correct();
    else sounds.wrong();
    setAnswer(a);
  };

  // The scene's mp3 played again: a speaker (the same on every page).
  const listen = (
    <button
      type="button"
      className={`btn scene-play max3-say ${playing ? 'is-playing' : ''}`}
      onClick={playing ? stopPlaying : play}
      aria-pressed={playing}
      aria-label={`${said(ui('playAudio', lang))}: ${scene.titel}`}
      lang={saidLang(ui('playAudio', lang))}
    >
      <SpeakerIcon size={28} />
      <Bi className="btn-label" text={ui('tagListen', lang)} />
    </button>
  );

  let body: React.ReactNode;
  if (step === 'listen') {
    body = (
      <>
        <article className="scene-card" ref={mainRef as React.RefObject<HTMLElement>} tabIndex={-1}>
          <span className="scene-cast" aria-hidden>
            {sceneCast(scene).map((who) => <Character key={who} who={who} size={88} />)}
          </span>
          <h2 className="scene-name" lang="nl" dir="ltr">{breakable(scene.titel)}</h2>
        </article>
        <p className="scene-intro"><Bi text={ui('sceneIntro', lang)} /></p>
        {listen}
      </>
    );
  } else {
    const q = scene.vragen[step];
    const right = q.opties.findIndex((o) => o.goed);
    const options = q.opties.map((o, k) => ({ id: optionId(step, k), nl: o.nl }));
    const why = gloss(`${scene.id}.${step + 1}.why`, q.uitleg.en, lang);
    body = (
      <>
        {listen}
        <div className="scene-question" ref={mainRef as React.RefObject<HTMLDivElement>} tabIndex={-1}>
          <SpeakButton glyph text={q.vraag} help={lang} />
          <h2 className="scene-ask" lang="nl" dir="ltr">{breakable(q.vraag)}</h2>
        </div>
        <ChoiceGrid
          className="choices-rows scene-choices"
          options={options}
          correctId={optionId(step, right)}
          locked={Boolean(answer)}
          lang={lang}
          onAnswer={onAnswer}
          render={(o) => <span className="choice-text"><span lang="nl" className="choice-nl">{breakable(o.nl)}</span></span>}
        />
        {answer && (
          <p className={`scene-why ${answer.correct ? 'is-right' : 'is-wrong'}`} role="status">
            <span className="scene-why-icon" aria-hidden>{answer.correct ? <CheckIcon size={22} /> : <CloseIcon size={22} />}</span>
            <span className="scene-why-text">
              <span className="scene-why-nl" lang="nl" dir="ltr">{q.uitleg.nl}</span>
              {/* What it means (English until the help languages have it): not in Dutch only. */}
              {!dutchUi(lang) && <Bi className="scene-why-help" text={why} />}
            </span>
          </p>
        )}
      </>
    );
  }

  // Verder: on the first page once the scene was played; after a question once it is answered.
  const canGo = step === 'listen' ? heard : Boolean(answer);
  return (
    <div className="player scene" dir={rtl ? 'rtl' : undefined}>
      <div className="screen-head scene-head" dir={rtl ? 'rtl' : undefined}>
        <ChromeBack lang={lang} onBack={() => { stopPlaying(); onBack(); }} />
        <h1 className="scene-title">
          <NlPair nlFirst nl="Luister op de werkvloer" nlClass="scene-title-nl" text={ui('sceneTitle', lang)} />
        </h1>
      </div>
      <div className="player-body scene-body">{body}</div>
      <footer className="player-foot">
        <div className="foot-inner">
          <div className="foot-actions">
            {canGo && (
              <button type="button" className="btn btn-go btn-primary scene-next" onClick={next} dir={rtl ? 'rtl' : undefined}>
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
