import { useCallback, useEffect, useRef, useState } from 'react';
import { gloss, said, saidLang, ui } from '../i18n';
import type { HelpLanguage } from '../i18n/types';
import { autoSpeak, speak, stopSpeech } from '../lib/audio';
import { breakable } from '../lib/dutch';
import type { Exercise } from '../lib/exercises';
import { sentencePicture } from '../lib/exercises';
import {
  canRecord, isWord, MAX_RECORD_MS, MIC_RETRIES, micBlocked, recordMime, setMicBlocked, SILENCE_MS, speakMode,
} from '../lib/speaking';
import { voiceFor } from '../lib/voices';
import { hasPicture } from '../lib/wordPicture';
import { pictureCast, WordPicture } from '../pictures';
import { Bi } from './Bi';
import { castFor, Character, type CharacterId } from './Characters';
import { LockIcon, SpeakerIcon } from './Icons';
import { SpeakButton } from './SpeakButton';

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

const RING_R = 52;
const RING_C = 2 * Math.PI * RING_R;

/**
 * "Say it" (record and compare). Hear the Dutch with its picture and meaning, tap the big mic,
 * say it (at most 6 s; it stops by itself after a short silence, or with the stop button), hear
 * yourself, compare with the speaker side by side, and rate it yourself. Never graded.
 *
 * Privacy: the recording is a Blob behind an object URL held in a ref of this component. It is
 * never uploaded, never written to storage, and it is revoked (with the microphone released)
 * when the learner records again or the exercise closes.
 *
 * `phaseForShot` fixes the phase for the screenshot harness (no microphone used).
 */
export function SpeakExercise({ ex, lang, onAnswer, onNext, onRating, phaseForShot = shotPhase }: {
  ex: Extract<Exercise, { kind: 'speak' }>;
  lang?: HelpLanguage;
  onAnswer: (a: { correct: boolean } | null) => void;
  /** "Sounds the same": done, go on. */
  onNext?: () => void;
  /** True while the learner compares and rates: "Sounds the same" is then the way forward, so
   *  the player hides its own Continue (one clear path). */
  onRating?: (rating: boolean) => void;
  phaseForShot?: Phase;
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

  const playThem = useCallback(() => {
    mineRef.current?.pause();
    setPlaying('them');
    speak(item.nl, false, 'nl', voice);
    window.setTimeout(() => { if (alive.current) setPlaying((p) => (p === 'them' ? null : p)); }, 1600);
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
      release();
      discard();
    };
  }, [item.nl, voice, phaseForShot, release, discard]);

  // No microphone: Continue is open. After recording, the learner rates instead: "Sounds the
  // same" goes on (nothing is scored), "Say it again" records once more; Continue stays hidden.
  useEffect(() => {
    if (phase === 'off') onAnswer({ correct: true });
    onRating?.(phase === 'review');
  }, [phase, onAnswer, onRating]);

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
    const chunks: Blob[] = [];
    rec.ondataavailable = (e) => { if (e.data.size) chunks.push(e.data); };
    rec.onstop = () => {
      release();
      recRef.current = null;
      const blob = new Blob(chunks, { type: rec.mimeType || 'audio/webm' });
      chunks.length = 0;
      if (!alive.current) return;
      setUsed(0);
      if (!blob.size) { setPhase('idle'); return; }
      urlRef.current = URL.createObjectURL(blob);
      setPhase('review');
      setStatus(said(ui('speakMe', lang)));
      // Hear yourself right away.
      playMine();
    };
    rec.start();
    setPhase('recording');
    setStatus(said(ui('stopRecording', lang)));

    // Stop after 6 s, or after a short silence once the learner has said something.
    const began = Date.now();
    let spoke = false;
    let lastLoud = began;
    let analyser: AnalyserNode | null = null;
    let buf: Float32Array<ArrayBuffer> | null = null;
    try {
      const ctx = new AudioContext();
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
    discard();
    setPhase('idle');
    setStatus('');
    playThem();
  }

  const recording = phase === 'recording';
  const listenFirst = phase === 'idle' || phase === 'asking' || phase === 'recording';
  const meaning = gloss(item.id, item.en, lang);

  return (
    <div className={`exercise say-ex say-is-${phase}`}>
      <h2 className="prompt" tabIndex={-1}><Bi text={ui('speakPrompt', lang)} /></h2>
      <div className={`card say-card ${picture ? '' : 'say-card-text'}`}>
        {picture && <WordPicture className="say-pic" id={picture.id} emoji={picture.emoji} size={76} />}
        <div className="say-words">
          <span className="say-nl" lang="nl" dir="ltr">{breakable(item.nl)}</span>
          <Bi className="say-meaning" text={meaning} />
        </div>
        {/* The model is one tap away. While comparing, the speaker's own button below plays it
            (one speaker per item). */}
        {phase !== 'review' && <SpeakButton text={item.nl} voice={voice} help={lang} />}
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
              <Bi text={ui('micPrivacy', lang)} />
            </p>
          )}
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
          <div className="say-rate">
            <button type="button" className="say-rate-btn say-same" onClick={() => onNext?.()}>
              <SameIcon size={30} />
              <Bi text={ui('soundsSame', lang)} />
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
