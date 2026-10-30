import { useCallback, useEffect, useRef, useState } from 'react';
import { gloss, langTag, said, saidLang, ui, type Bilingual } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { autoSpeak, speak, stopSpeech } from '../lib/audio';
import { breakable } from '../lib/dutch';
import type { Exercise } from '../lib/exercises';
import { sentencePicture } from '../lib/exercises';
import {
  canRecord, isWord, MAX_RECORD_MS, MIC_RETRIES, micBlocked, recordMime, setMicBlocked, SILENCE_MS, speakMode,
} from '../lib/speaking';
import { judge, localStatus, startListening, verdictOf, type Heard, type Listening, type Verdict } from '../lib/listen';
import { voiceFor } from '../lib/voices';
import { hasPicture } from '../lib/wordPicture';
import { pictureCast, WordPicture } from '../pictures';
import { Bi } from './Bi';
import { NlPair } from './NlPair';
import { castFor, Character, type CharacterId } from './Characters';
import { LockIcon, SpeakerIcon } from './Icons';
import { SpeakButton } from './SpeakButton';
import { focusIsLost } from './useFocusLost';

/* Icons of this feature only (same stroke as Icons.tsx). */
const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.6, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const Svg = ({ size = 24, children }: { size?: number; children: React.ReactNode }) => (
  <svg className="icon" viewBox="0 0 24 24" width={size} height={size} aria-hidden focusable="false">{children}</svg>
);
export const MicIcon = ({ size }: { size?: number }) => (
  <Svg size={size}>
    <rect x="8.5" y="2.8" width="7" height="12" rx="3.5" fill="currentColor" />
    <path d="M5.2 11.2a6.8 6.8 0 0 0 13.6 0M12 18v3.2M8.6 21.2h6.8" {...stroke} />
  </Svg>
);
const MicOffIcon = ({ size }: { size?: number }) => (
  <Svg size={size}>
    <rect x="8.5" y="2.8" width="7" height="12" rx="3.5" fill="currentColor" opacity=".45" />
    <path d="M5.2 11.2a6.8 6.8 0 0 0 13.6 0M12 18v3.2M8.6 21.2h6.8M4 3.5l16 17" {...stroke} />
  </Svg>
);
const StopGlyph = ({ size }: { size?: number }) => (
  <Svg size={size}><rect x="6" y="6" width="12" height="12" rx="2.4" fill="currentColor" /></Svg>
);
const PersonIcon = ({ size }: { size?: number }) => (
  <Svg size={size}>
    <circle cx="12" cy="8" r="4.2" fill="currentColor" />
    <path d="M3.8 21.2a8.2 8.2 0 0 1 16.4 0z" fill="currentColor" />
  </Svg>
);
const SameIcon = ({ size }: { size?: number }) => (
  <Svg size={size}>
    <circle cx="12" cy="12" r="9.4" {...stroke} />
    <path d="M7.6 12.4l3 3 5.8-6.4" {...stroke} />
  </Svg>
);
const AgainIcon = ({ size }: { size?: number }) => (
  <Svg size={size}>
    <path d="M4.6 12a7.4 7.4 0 1 0 2.2-5.3" {...stroke} />
    <path d="M6.4 2.8v4.4h4.4" {...stroke} />
  </Svg>
);

export type SpeakPhase = 'idle' | 'asking' | 'recording' | 'review' | 'off';
type Phase = SpeakPhase;

/** Screenshot harness only (src/dev/ShotHarness.tsx): show a fixed phase, without a microphone. */
let shotPhase: Phase | undefined;
export function setSpeakShotPhase(phase: Phase | undefined): void {
  shotPhase = phase;
}
/** Screenshot harness only: what the phone "heard" with "Laat de telefoon luisteren" (or 'wait'). */
let shotHeard: string | undefined;
export function setSpeakShotHeard(heard: string | undefined): void {
  shotHeard = heard;
}

const RING_R = 52;
const RING_C = 2 * Math.PI * RING_R;

/**
 * "Say it" (record and compare). Hear the Dutch with its picture and meaning, tap the big mic,
 * say it (at most 6 s; it stops by itself after a short silence, or with the stop button), hear
 * yourself, compare with the speaker side by side, and rate it yourself. Never graded.
 *
 * Privacy: the recording is a Blob behind an object URL held in a ref of this component. It is
 * never uploaded and never written to storage here (only "Wat ken je al?" keeps its own copy, via
 * onRecording, on this phone: src/lib/toetsVoice.ts), and it is revoked (with the microphone released)
 * when the learner records again or the exercise closes.
 *
 * `phaseForShot` fixes the phase for the screenshot harness (no microphone used).
 */
export function SpeakExercise({ ex, lang, onAnswer, onNext, onRating, onRecording, keepNote, phaseForShot = shotPhase, listen = false, heardForShot = shotHeard }: {
  ex: Extract<Exercise, { kind: 'speak' }>;
  lang?: HelpLanguage;
  onAnswer: (a: { correct: boolean } | null) => void;
  /** "Sounds the same": done, go on. */
  onNext?: () => void;
  /** True while the learner compares and rates: "Sounds the same" is then the way forward, so
   *  the player hides its own Continue (one clear path). */
  onRating?: (rating: boolean) => void;
  /** Each recording made ("Wat ken je al?" keeps it on the phone, src/lib/toetsVoice.ts). */
  onRecording?: (blob: Blob) => void;
  /** A line under the privacy line (where the recording is kept on the phone, it says so). */
  keepNote?: Bilingual;
  phaseForShot?: Phase;
  /** "Laat de telefoon luisteren (proef)" is on (the Dutch course's lessons only; src/lib/listen.ts).
   *  It only adds a line after recording ("Verstaan" / "Bijna: … nog eens" / "Nog niet verstaan")
   *  when the phone confirms Dutch on the device; otherwise this is plain record and compare. */
  listen?: boolean;
  /** Screenshot harness only: what the phone "heard" (judged as usual), or 'wait'. */
  heardForShot?: string;
}) {
  const { item } = ex;
  const picture = isWord(item) ? (hasPicture(item) ? item : undefined) : sentencePicture(item);
  // The speaker is the person in the picture when it shows one of the cast, so the face on the
  // card, the voice and the name on the compare button are the same character.
  const who: CharacterId = (picture && pictureCast(picture.id)) || (isWord(item) ? 'bram' : castFor(item.id));
  const voice = voiceFor(who);
  const name = who[0].toUpperCase() + who.slice(1);
  // No usable microphone (none, or it failed earlier in this lesson): "say it out loud" at once.
  const [phase, setPhase] = useState<Phase>(phaseForShot ?? (speakMode() === 'record' ? 'idle' : 'off'));
  /** Retries left after the microphone failed here (one; see MIC_RETRIES). */
  const [retries, setRetries] = useState(MIC_RETRIES);
  /** The microphone failed in this exercise (so a retry makes sense). */
  const [failed, setFailed] = useState(false);
  /** 0–1 of the 6 seconds used, for the ring around the stop button. */
  const [used, setUsed] = useState(phaseForShot === 'recording' ? 0.35 : 0);
  const [status, setStatus] = useState('');
  const [playing, setPlaying] = useState<'them' | 'me' | null>(null);
  /** The phone may listen here: the switch is on and Dutch is confirmed on this device. */
  const [canListen, setCanListen] = useState(heardForShot !== undefined);
  /** What the phone made of the last try: 'wait' while it decides; null = no listening (compare). */
  const [verdict, setVerdict] = useState<Verdict | 'wait' | null>(
    heardForShot === undefined ? null : heardForShot === 'wait' ? 'wait' : judge(item.nl, [heardForShot]),
  );
  const listenRef = useRef<Listening | null>(null);
  /** Bumped by each try, so a late answer of the phone is for the try on screen only. */
  const tryRef = useRef(0);
  useEffect(() => {
    if (!listen || phaseForShot) return;
    let on = true;
    localStatus().then((s) => { if (on) setCanListen(s === 'available'); }, () => {});
    return () => { on = false; };
  }, [listen, phaseForShot]);

  // Everything that holds the voice or the microphone, so it can all be let go at once.
  const alive = useRef(true);
  const urlRef = useRef<string | null>(null);
  const mineRef = useRef<HTMLAudioElement | null>(null);
  const recRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const ctxRef = useRef<AudioContext | null>(null);
  const tickRef = useRef<number | null>(null);

  const release = useCallback(() => {
    if (tickRef.current !== null) { window.clearInterval(tickRef.current); tickRef.current = null; }
    ctxRef.current?.close().catch(() => {});
    ctxRef.current = null;
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
  }, []);

  /** Throw the recording away: stop it playing and revoke its URL (the Blob goes with it). */
  const discard = useCallback(() => {
    if (mineRef.current) {
      mineRef.current.pause();
      mineRef.current.removeAttribute('src');
      mineRef.current = null;
    }
    if (urlRef.current) URL.revokeObjectURL(urlRef.current);
    urlRef.current = null;
  }, []);

  const stop = useCallback(() => {
    if (tickRef.current !== null) { window.clearInterval(tickRef.current); tickRef.current = null; }
    const rec = recRef.current;
    if (rec && rec.state !== 'inactive') rec.stop();
    else release();
  }, [release]);

  const playMine = useCallback(() => {
    const url = urlRef.current;
    if (!url) return;
    stopSpeech();
    mineRef.current?.pause();
    const audio = new Audio(url);
    mineRef.current = audio;
    setPlaying('me');
    audio.onended = audio.onerror = () => { if (alive.current) setPlaying((p) => (p === 'me' ? null : p)); };
    audio.play().catch(() => { if (alive.current) setPlaying(null); });
  }, []);

  // (One timer: a second tap starts it again, so the first one does not end the second play early.)
  const themTimer = useRef(0);
  const playThem = useCallback(() => {
    mineRef.current?.pause();
    setPlaying('them');
    speak(item.nl, false, 'nl', voice);
    window.clearTimeout(themTimer.current);
    themTimer.current = window.setTimeout(() => { if (alive.current) setPlaying((p) => (p === 'them' ? null : p)); }, 1600);
  }, [item.nl, voice]);

  // Say it once when the exercise opens (not in "Without sound"); let go of everything on leave.
  useEffect(() => {
    alive.current = true;
    if (!phaseForShot) autoSpeak(item.nl, false, 'nl', voice);
    return () => {
      alive.current = false;
      const rec = recRef.current;
      if (rec && rec.state !== 'inactive') { rec.ondataavailable = null; rec.onstop = null; rec.stop(); }
      recRef.current = null;
      listenRef.current?.abort();
      listenRef.current = null;
      release();
      discard();
    };
  }, [item.nl, voice, phaseForShot, release, discard]);

  // No microphone: Continue is open. After recording, the learner rates instead: "Sounds the
  // same" goes on (nothing is scored), "Say it again" records once more; Continue stays hidden.
  // A new try after the microphone failed: Continue goes until it is over (a tap on it would end the
  // recording halfway).
  // A try that ends without a recording (an empty one, the app hidden) after the microphone had
  // failed: Continue comes back, as before the try.
  const wasOff = useRef(false);
  useEffect(() => {
    if (phase === 'off') wasOff.current = true;
    if (phase === 'off' || (phase === 'idle' && wasOff.current)) onAnswer({ correct: true });
    if (phase === 'asking') onAnswer(null);
    onRating?.(phase === 'review');
  }, [phase, onAnswer, onRating]);
  // The button that had the focus is gone (the microphone after recording, "Say it again"): the
  // first button of the new phase gets it, so a keyboard or screen-reader user keeps their place.
  const box = useRef<HTMLDivElement>(null);
  // A moment later: "Say it out loud instead" opens Continue in the footer one render after this
  // one (onAnswer above), and the microphone is disabled (not gone) while the phone asks for it.
  useEffect(() => {
    const t = window.setTimeout(() => {
      if (!focusIsLost()) return;
      const to = box.current?.querySelector<HTMLButtonElement>('.say-compare button, button.say-mic:not([disabled]), .say-retry') ?? document.querySelector<HTMLButtonElement>('.player-foot .btn-go:not([disabled])');
      to?.focus({ preventScroll: true });
    }, 30);
    return () => window.clearTimeout(t);
  }, [phase]);

  // The app goes to the background mid-recording: stop, so the microphone is not left on.
  useEffect(() => {
    const onHide = () => { if (document.visibilityState === 'hidden') stop(); };
    document.addEventListener('visibilitychange', onHide);
    return () => document.removeEventListener('visibilitychange', onHide);
  }, [stop]);

  async function start() {
    if (phase === 'recording' || phase === 'asking') return;
    stopSpeech();
    discard();
    if (!canRecord()) { setPhase('off'); return; }
    setPhase('asking');
    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } });
    } catch {
      setMicBlocked(true);
      if (alive.current) { setFailed(true); setPhase('off'); }
      return;
    }
    if (!alive.current) { stream.getTracks().forEach((t) => t.stop()); return; }
    // The app went to the background while the microphone was asked for: no recording there.
    if (document.visibilityState === 'hidden') { stream.getTracks().forEach((t) => t.stop()); setPhase('idle'); return; }
    streamRef.current = stream;
    let rec: MediaRecorder;
    try {
      const mime = recordMime();
      rec = mime ? new MediaRecorder(stream, { mimeType: mime }) : new MediaRecorder(stream);
    } catch {
      release();
      setMicBlocked(true);
      setFailed(true);
      setPhase('off');
      return;
    }
    recRef.current = rec;
    const attempt = ++tryRef.current;
    setVerdict(null);
    const chunks: Blob[] = [];
    rec.ondataavailable = (e) => { if (e.data.size) chunks.push(e.data); };
    rec.onstop = () => {
      release();
      recRef.current = null;
      const blob = new Blob(chunks, { type: rec.mimeType || 'audio/webm' });
      chunks.length = 0;
      const heard = listenRef.current;
      listenRef.current = null;
      if (!alive.current) { heard?.abort(); return; }
      setUsed(0);
      if (!blob.size) { heard?.abort(); setPhase('idle'); return; }
      // The phone listened along: its answer comes a moment later (at most 3 s, else none).
      if (heard) {
        setVerdict('wait');
        heard.stop();
        const late = new Promise<Heard>((r) => window.setTimeout(() => r({ alternatives: [], error: 'timeout' }), 3000));
        Promise.race([heard.result, late]).then((h) => {
          if (h.error === 'timeout') heard.abort();
          if (alive.current && tryRef.current === attempt) setVerdict(verdictOf(item.nl, h));
        }, () => { if (alive.current && tryRef.current === attempt) setVerdict(null); });
      }
      urlRef.current = URL.createObjectURL(blob);
      onRecording?.(blob);
      setPhase('review');
      setStatus(said(ui('speakMe', lang)));
      // Hear yourself right away (not in the background: stopped because the app was hidden).
      if (document.visibilityState !== 'hidden') playMine();
    };
    rec.start();
    setPhase('recording');
    setStatus(said(ui('stopRecording', lang)));
    // On the device only: startListening confirms Dutch on this phone first, or starts nothing.
    if (listen && canListen) {
      startListening(stream.getAudioTracks?.()[0]).then((l) => {
        if (!l) return;
        if (!alive.current || tryRef.current !== attempt || recRef.current !== rec) { l.abort(); return; }
        listenRef.current = l;
      }, () => {});
    }

    // Stop after 6 s, or after a short silence once the learner has said something.
    const began = Date.now();
    let spoke = false;
    let lastLoud = began;
    let analyser: AnalyserNode | null = null;
    let buf: Float32Array<ArrayBuffer> | null = null;
    try {
      // iOS before 14.5 has only the prefixed webkitAudioContext.
      const Ctx = window.AudioContext ?? (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      const ctx = new Ctx();
      ctxRef.current = ctx;
      analyser = ctx.createAnalyser();
      analyser.fftSize = 1024;
      ctx.createMediaStreamSource(stream).connect(analyser);
      buf = new Float32Array(analyser.fftSize);
    } catch {
      analyser = null; // No Web Audio: the 6 s limit and the stop button still work.
    }
    tickRef.current = window.setInterval(() => {
      const now = Date.now();
      setUsed(Math.min(1, (now - began) / MAX_RECORD_MS));
      if (analyser && buf) {
        analyser.getFloatTimeDomainData(buf);
        let sum = 0;
        for (let i = 0; i < buf.length; i++) sum += buf[i] * buf[i];
        const rms = Math.sqrt(sum / buf.length);
        if (rms > 0.03) { spoke = true; lastLoud = now; }
      }
      if (now - began >= MAX_RECORD_MS || (spoke && now - began > 800 && now - lastLoud > SILENCE_MS)) stop();
    }, 100);
  }

  function again() {
    tryRef.current++;
    listenRef.current?.abort();
    listenRef.current = null;
    setVerdict(null);
    discard();
    setPhase('idle');
    setStatus('');
    playThem();
  }

  const recording = phase === 'recording';
  const listenFirst = phase === 'idle' || phase === 'asking' || phase === 'recording';
  const meaning = gloss(item.id, item.en, lang);

  return (
    <div className={`exercise say-ex say-is-${phase}`} ref={box}>
      <h2 className="prompt" tabIndex={-1}><Bi text={ui('speakPrompt', lang)} /></h2>
      <div className={`card say-card ${picture ? '' : 'say-card-text'}`}>
        {picture && <WordPicture className="say-pic" id={picture.id} emoji={picture.emoji} size={76} />}
        <div className="say-words">
          <NlPair content nlFirst nl={breakable(item.nl)} nlClass="say-nl" dir="ltr" className="say-meaning" text={meaning} />
        </div>
        {/* The model is one tap away. While comparing, the speaker's own button below plays it
            (one speaker per item). Hidden while recording (its sound would be recorded too), its place kept. */}
        {phase !== 'review' && <SpeakButton text={item.nl} voice={voice} help={lang} className={recording ? 'say-model-off' : undefined} />}
      </div>

      {listenFirst && (
        <div className="say-mic-area">
          <button
            type="button"
            className={`say-mic ${recording ? 'is-rec' : ''}`}
            onClick={recording ? stop : start}
            disabled={phase === 'asking'}
            aria-pressed={recording}
            aria-label={said(ui(recording ? 'stopRecording' : 'tapToSpeak', lang))}
            lang={saidLang(ui(recording ? 'stopRecording' : 'tapToSpeak', lang))}
          >
            {recording && (
              <svg className="say-ring" viewBox="0 0 120 120" aria-hidden focusable="false">
                <circle className="say-ring-track" cx="60" cy="60" r={RING_R} />
                <circle className="say-ring-used" cx="60" cy="60" r={RING_R} strokeDasharray={RING_C} strokeDashoffset={RING_C * (1 - used)} />
              </svg>
            )}
            <span className="say-mic-core">{recording ? <StopGlyph size={34} /> : <MicIcon size={40} />}</span>
          </button>
          {!recording && (
            <p className="say-privacy">
              <LockIcon size={18} />
              <Bi text={ui(listen && canListen ? 'listenPrivacy' : 'micPrivacy', lang)} />
            </p>
          )}
          {!recording && keepNote && <p className="say-privacy say-keep"><Bi text={keepNote} /></p>}
          {/* A way on without the microphone (shy, noisy floor, no permission wanted): the
              same self-paced "say it out loud" step as without a microphone. */}
          {phase === 'idle' && (
            <button type="button" className="say-aloud-instead" onClick={() => { stopSpeech(); setPhase('off'); }}>
              <Bi text={ui('sayAloudInstead', lang)} />
            </button>
          )}
        </div>
      )}

      {phase === 'review' && (
        <>
          <div className="say-compare">
            <button type="button" className={`say-play ${playing === 'them' ? 'is-playing' : ''}`} onClick={playThem} aria-label={`${name}: ${item.nl}`} lang="nl">
              <span className="say-face" aria-hidden><Character who={who} crop="head" size={48} /></span>
              <SpeakerIcon size={30} />
              <span className="say-who" lang="nl">{name}</span>
            </button>
            <button type="button" className={`say-play say-play-me ${playing === 'me' ? 'is-playing' : ''}`} onClick={playMine} aria-label={said(ui('speakMe', lang))} lang={saidLang(ui('speakMe', lang))}>
              <span className="say-face say-face-me" aria-hidden><PersonIcon size={34} /></span>
              <SpeakerIcon size={30} />
              <Bi className="say-who" text={ui('speakMe', lang)} />
            </button>
          </div>
          {verdict && <Heard verdict={verdict} lang={lang} />}
          <div className="say-rate">
            {/* With the phone listening: "Continue" when understood, else "Continue anyway"
                (always there: the phone can be wrong). Without: "Sounds the same". */}
            <button type="button" className="say-rate-btn say-same" onClick={() => onNext?.()}>
              <SameIcon size={30} />
              <Bi text={ui(!verdict ? 'soundsSame' : verdict !== 'wait' && verdict.kind === 'ok' ? 'continue' : 'goOnAnyway', lang)} />
            </button>
            <button type="button" className="say-rate-btn say-again" onClick={again}>
              <AgainIcon size={30} />
              <Bi text={ui('sayAgain', lang)} />
            </button>
          </div>
        </>
      )}

      {/* No usable microphone: still say it, out loud, at your own pace (nothing is recorded or
          graded); Continue goes on. After a failure here, one retry of the microphone. */}
      {phase === 'off' && (
        <div className="say-off say-aloud">
          <MicOffIcon size={32} />
          {/* "No microphone needed" only where the phone cannot record at all; after a failure
              (here or earlier in the lesson) it says the microphone did not work; chosen by the
              learner ("Say it out loud instead"): the microphone is off, that's fine. */}
          <Bi text={ui(!canRecord() ? 'sayAloud' : failed || micBlocked() ? 'micFailed' : 'micUnavailable', lang)} />
          {failed && retries > 0 && canRecord() && !phaseForShot && (
            <button
              type="button"
              className="btn say-retry"
              onClick={() => { setRetries((n) => n - 1); setFailed(false); setMicBlocked(false); start(); }}
            >
              <MicIcon size={24} />
              <Bi text={ui('micRetry', lang)} />
            </button>
          )}
        </div>
      )}
      <div className="sr-only" role="status" lang={saidLang(ui('speakMe', lang))}>{status}</div>
    </div>
  );
}

/** Three dots: the phone is still listening. */
const DotsIcon = ({ size }: { size?: number }) => (
  <Svg size={size}><circle cx="5.5" cy="12" r="2.2" fill="currentColor" /><circle cx="12" cy="12" r="2.2" fill="currentColor" /><circle cx="18.5" cy="12" r="2.2" fill="currentColor" /></Svg>
);

/**
 * What the phone made of it ("Laat de telefoon luisteren (proef)"): understood, almost (with the
 * Dutch word to say again, in Dutch) or not understood yet. Only about being understood: never
 * "wrong", never a number. Read out when it comes (aria-live).
 */
function Heard({ verdict, lang }: { verdict: Verdict | 'wait'; lang?: HelpLanguage }) {
  const kind = verdict === 'wait' ? 'wait' : verdict.kind;
  const icon = kind === 'ok' ? <SameIcon size={26} /> : kind === 'wait' ? <DotsIcon size={26} /> : <AgainIcon size={26} />;
  return (
    <p className={`say-heard say-heard-${kind}`} aria-live="polite">
      <span className="say-heard-icon" aria-hidden>{icon}</span>
      {verdict === 'wait' ? <Bi text={ui('heardWait', lang)} />
        : verdict.kind === 'ok' ? <Bi text={ui('heardOk', lang)} />
        : verdict.kind === 'almost' ? <WithWord text={ui('heardAlmost', lang)} word={verdict.word} />
        : <Bi text={ui('heardNotYet', lang)} />}
    </p>
  );
}

/** A text with {word} in it, the Dutch word marked as Dutch (and kept left-to-right), like Bi. */
function WithWord({ text, word }: { text: Bilingual; word: string }) {
  const fill = (s: string): React.ReactNode => {
    const [before, after = ''] = s.split('{word}');
    return <>{before}<bdi className="say-heard-word" lang="nl" dir="ltr">{word}</bdi>{after}</>;
  };
  if (text.lang?.code === 'nl') return <span className="bi"><span className="bi-en" lang="nl">{fill(text.help ?? text.en)}</span></span>;
  if (text.help && text.lang) {
    const rtl = text.lang.dir === 'rtl';
    return (
      <span className="bi bi-swap" dir={rtl ? 'rtl' : undefined}>
        <span className="bi-en" lang={langTag(text.lang.code)} dir={text.lang.dir}>{fill(text.help)}</span>
        <span className="bi-sep" aria-hidden>·</span>
        <span className="bi-help" lang="en" dir={rtl ? 'ltr' : undefined}>{fill(text.en)}</span>
      </span>
    );
  }
  return <span className="bi"><span className="bi-en" lang="en">{fill(text.en)}</span></span>;
}

