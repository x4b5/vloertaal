import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { onSpeech } from '../lib/audio';
import { stillMotion } from '../lib/calm';
import { endPose, mixPose, REST, type Klank, type MouthPose } from '../content/klankMond';

/**
 * A mouth seen from the front, to show how a Dutch sound is made (src/content/klankMond.ts; the
 * owner's request, 4 November 2026). The lower half of a calm face in the cast's flat style
 * (src/components/Characters.tsx): Bram's skin with its one crisp shade on the right, the bottom
 * of the nose at the top, the lips, and inside the mouth only what matters for the sound: the
 * upper and lower front teeth and the tongue. No outlines; inner lines in the shape's own shade.
 * Friendly and schematic, never a realistic mouth: no gums, no throat, no wet shine.
 *
 * Coordinates: a 120 x 118 box, the mouth's centre at rest (60, 56). The jaw drops the lower lip
 * and the chin together (`open`); the upper lip barely moves, as in a real face.
 */

const SKIN = '#f7c49b';
const SKIN_SHADE = '#e2a376';
/** The lips: the upper lip a step darker (it faces down, the light comes from the top left). */
const LIP_UP = '#c9775c';
const LIP_LOW = '#d98a6d';
const LIP_LINE = '#a35a42';
/** Inside the mouth, the same dark as the cast's talking mouth (Faces.tsx MOUTH_DARK). */
const INSIDE = '#4a2420';
const TOOTH = '#fffaf2';
const TOOTH_SHADE = '#e3d9c8';
const TONGUE = '#e0756c';
const TONGUE_SHADE = '#c85f58';

const CX = 60;
const CY = 56;
/** The mouth's own scale in the face: large, it is what the card is about. */
const S = 1.9;

const r = (n: number) => Math.round(n * 100) / 100;

/** The shapes of one position, in numbers (exported for the tests: opening sizes, lip widths). */
export function mouthGeometry(p: MouthPose) {
  /** Half the opening's width and its full height. */
  const w = (4.2 + p.wide * 11) * S;
  const h = p.open * 16 * S;
  // The corners drop a little with the jaw; the upper lip lifts a little, the lower lip drops most.
  const cm = CY + h * 0.12;
  const top = CY - h * 0.3;
  const bottom = CY + h * 0.7;
  /** Lip thickness: fuller when pushed forward, thinner when spread wide. */
  const spread = p.wide * (1 - p.round);
  /** Tight round lips (oe, uu) bunch up: a fuller ring. */
  const pout = p.tense * p.round * 0.7;
  const tUp = (4.4 + p.forward * 1.6 + pout - spread * 1.3) * S;
  const tLow = (5.4 + p.forward * 1.8 + pout - spread * 1.4) * S;
  /** The lips reach past the opening's corners: a little on a flat mouth, as far as they are
   *  thick on a round one (a ring of lip round the opening, not a snout). */
  const e = (2.6 * (1 - p.round)) * S + p.round * (tUp + tLow) * 0.5;
  /** 0.35: pointed corners (a slit), 0.85: an oval. */
  const k = 0.35 + 0.5 * p.round;
  /** The chin goes down with the jaw (a little less than the lower lip, which also drops on its own). */
  const chin = 100 + h * 0.45;
  return { w, h, cm, top, bottom, tUp, tLow, e, k, chin };
}

/** The opening: an upper and a lower curve from corner to corner. */
function openingPath(g: ReturnType<typeof mouthGeometry>): string {
  const { w, cm, top, bottom, k } = g;
  const up = cm - (cm - top) / 0.75;
  const low = cm + (bottom - cm) / 0.75;
  return `M${r(CX - w)} ${r(cm)}C${r(CX - w * k)} ${r(up)} ${r(CX + w * k)} ${r(up)} ${r(CX + w)} ${r(cm)}C${r(CX + w * k)} ${r(low)} ${r(CX - w * k)} ${r(low)} ${r(CX - w)} ${r(cm)}Z`;
}

function lipsPaths(g: ReturnType<typeof mouthGeometry>, p: MouthPose) {
  const { w, cm, top, bottom, tUp, tLow, e, k } = g;
  const L = CX - w - e;
  const R = CX + w + e;
  const ko = Math.min(1, k + 0.12);
  const peak = top - tUp;
  // The bow of the upper lip (two soft peaks with a dip between) flattens as the lips round.
  const dip = (1.7 - p.round * 1.1) * (1 - p.forward * 0.3) * S;
  const half = R - CX;
  /** How steeply the upper lip rises from its corner: a soft oval on a round mouth, low and long on a flat one. */
  const lift = 0.3 + 0.4 * p.round;
  const upIn = cm - (cm - top) / 0.75;
  const lowIn = cm + (bottom - cm) / 0.75;
  const upper =
    `M${r(L)} ${r(cm)}` +
    `C${r(L + (CX - L) * (1 - ko) * 0.5)} ${r(cm - (cm - peak) * lift)} ${r(CX - half * 0.62)} ${r(peak - 0.6)} ${r(CX - half * 0.3)} ${r(peak)}` +
    `Q${r(CX - half * 0.08)} ${r(peak + dip * 0.2)} ${r(CX)} ${r(peak + dip)}` +
    `Q${r(CX + half * 0.08)} ${r(peak + dip * 0.2)} ${r(CX + half * 0.3)} ${r(peak)}` +
    `C${r(CX + half * 0.62)} ${r(peak - 0.6)} ${r(R - (R - CX) * (1 - ko) * 0.5)} ${r(cm - (cm - peak) * lift)} ${r(R)} ${r(cm)}` +
    // Back along the opening's upper edge.
    `L${r(CX + w)} ${r(cm)}C${r(CX + w * k)} ${r(upIn)} ${r(CX - w * k)} ${r(upIn)} ${r(CX - w)} ${r(cm)}Z`;
  const lowOut = cm + (bottom + tLow - cm) / 0.75;
  const kl = 0.5 + 0.35 * p.round;
  const lower =
    `M${r(L)} ${r(cm)}C${r(CX - (CX - L) * kl)} ${r(lowOut)} ${r(CX + (R - CX) * kl)} ${r(lowOut)} ${r(R)} ${r(cm)}` +
    `L${r(CX + w)} ${r(cm)}C${r(CX + w * k)} ${r(lowIn)} ${r(CX - w * k)} ${r(lowIn)} ${r(CX - w)} ${r(cm)}Z`;
  return { upper, lower, L, R };
}

/** One position of the mouth, drawn. `size` is the width in px. */
export function Mouth({ pose, size = 180, className }: { pose: MouthPose; size?: number; className?: string }) {
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const g = mouthGeometry(pose);
  const { w, h, cm, top, bottom, tLow, chin } = g;
  const open = openingPath(g);
  const lips = lipsPaths(g, pose);
  const face = `M2 -4H118V36C118 70 96 ${r(chin - 6)} 72 ${r(chin - 1)}Q60 ${r(chin + 1.6)} 48 ${r(chin - 1)}C24 ${r(chin - 6)} 2 70 2 36Z`;
  const shown = h > 1.2;
  // Teeth: the front teeth only, hanging from under the upper lip and standing on the lower lip.
  const toothW = Math.min(w * 0.86, 12 * S);
  const upTeeth = pose.teeth * Math.min(h * 0.42, 5.6 * S);
  const lowTeeth = pose.lowTeeth * Math.min(h * 0.3, 3.6 * S);
  // The tongue's top edge: seen low and flat (aa), high behind the teeth (ee, uu), or not at all (oe).
  const tongueTop = bottom - pose.tongue * h * 0.62;
  const round = pose.round;
  const spreadCrease = pose.tense * (1 - round) * 0.9;
  return (
    <svg className={`mouth ${className ?? ''}`} viewBox="0 0 120 118" width={size} height={Math.round((size * 118) / 120)} aria-hidden focusable="false">
      <defs>
        <clipPath id={`mf-${id}`}><path d={face} /></clipPath>
        <clipPath id={`mo-${id}`}><path d={open} /></clipPath>
      </defs>
      {/* The lower face: cheeks, jaw and chin, with the cast's one shade on the right. */}
      <path d={face} fill={SKIN} />
      <g clipPath={`url(#mf-${id})`}>
        <path d="M94 -4H120V120H90Z" fill={SKIN_SHADE} opacity=".55" />
        {/* The chin's soft fold under the lower lip, which follows the jaw. */}
        <path d={`M${CX - 11} ${r(bottom + tLow + 9)}Q${CX} ${r(bottom + tLow + 5.5)} ${CX + 11} ${r(bottom + tLow + 9)}`} fill="none" stroke={SKIN_SHADE} strokeWidth="2" strokeLinecap="round" />
      </g>
      {/* The bottom of the nose (the cast's nose line, larger). */}
      <path d="M63.6 2L59.4 14.6Q61.6 17.4 66.6 15.8" fill="none" stroke={SKIN_SHADE} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      {/* A crease at each corner when the lips are pulled wide and tight (ee). */}
      {spreadCrease > 0.05 && (
        <path
          d={`M${r(lips.L - 3)} ${r(cm - 6)}Q${r(lips.L - 6)} ${r(cm)} ${r(lips.L - 3)} ${r(cm + 6)}M${r(lips.R + 3)} ${r(cm - 6)}Q${r(lips.R + 6)} ${r(cm)} ${r(lips.R + 3)} ${r(cm + 6)}`}
          fill="none" stroke={SKIN_SHADE} strokeWidth="1.6" strokeLinecap="round" opacity={r(Math.min(1, spreadCrease))}
        />
      )}
      {shown && (
        <>
          <path d={open} fill={INSIDE} />
          <g clipPath={`url(#mo-${id})`}>
            {pose.tongue > 0.02 && (
              <>
                <ellipse cx={CX} cy={r(tongueTop + w * 0.9)} rx={r(w * 1.05)} ry={r(w * 0.9)} fill={TONGUE} />
                <path d={`M${r(CX + w * 0.35)} ${r(tongueTop + 1.4)}Q${r(CX + w * 0.8)} ${r(tongueTop + 2)} ${r(CX + w * 1.1)} ${r(tongueTop + 4)}V${r(bottom + 2)}H${r(CX + w * 0.35)}Z`} fill={TONGUE_SHADE} opacity=".5" />
              </>
            )}
            {lowTeeth > 0.3 && (
              <path d={`M${r(CX - toothW * 0.8)} ${r(bottom + 2)}V${r(bottom - lowTeeth)}H${r(CX + toothW * 0.8)}V${r(bottom + 2)}Z`} fill={TOOTH_SHADE} />
            )}
            {upTeeth > 0.3 && (
              <>
                <path d={`M${r(CX - toothW)} ${r(top - 2)}V${r(top + upTeeth - 0.6)}Q${r(CX - toothW)} ${r(top + upTeeth)} ${r(CX - toothW + 0.8)} ${r(top + upTeeth)}H${r(CX + toothW - 0.8)}Q${r(CX + toothW)} ${r(top + upTeeth)} ${r(CX + toothW)} ${r(top + upTeeth - 0.6)}V${r(top - 2)}Z`} fill={TOOTH} />
                <path d={`M${CX} ${r(top)}V${r(top + upTeeth - 0.5)}`} stroke={TOOTH_SHADE} strokeWidth="1.2" strokeLinecap="round" />
              </>
            )}
          </g>
        </>
      )}
      <path d={lips.lower} fill={LIP_LOW} />
      <path d={lips.upper} fill={LIP_UP} />
      {/* One soft light on the lower lip, top left. */}
      <path d={`M${r(CX - Math.min(w, 14) * 0.7 - 2)} ${r(bottom + tLow * 0.62)}Q${r(CX - Math.min(w, 14) * 0.3 - 1)} ${r(bottom + tLow * 0.5)} ${r(CX - 1)} ${r(bottom + tLow * 0.55)}`} fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" opacity=".32" />
      {/* Closed: the line between the lips. */}
      {!shown && <path d={`M${r(CX - w - 0.6)} ${r(cm)}Q${CX} ${r(cm + 1.6)} ${r(CX + w + 0.6)} ${r(cm)}`} fill="none" stroke={LIP_LINE} strokeWidth="1.8" strokeLinecap="round" />}
    </svg>
  );
}

/* ---------------------------------------------------------------- motion */

/** Slow ("Langzaam"): every step takes this much longer. */
export const SLOW_FACTOR = 2;

/** The steps of one play, in ms at normal speed: the mouth closes to rest, opens to the sound, holds it (and glides), and goes back. */
export const STEPS = { toRest: 160, rest: 120, onset: 260, hold: 700, release: 260, pause: 260, back: 420 };

const ease = (t: number) => (t <= 0 ? 0 : t >= 1 ? 1 : t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
const clamp = (t: number) => Math.min(1, Math.max(0, t));

/** Where the glide is during the hold (0 the sound's start, 1 its end), from the time into the hold. */
function glideAt(k: Klank, inHold: number, hold: number): number {
  if (!k.end || !k.glide) return 0;
  // ui: the movement is the sound (it starts early and fills the hold); ee and eu only glide at the end.
  const [from, to] = k.glide === 'full' ? [0.25, 0.8] : [0.6, 1];
  return ease(clamp((inHold / hold - from) / (to - from)));
}

/** The pose `t` ms into a play. `holdEnd`: when the hold ends (the sound's end), in ms from the start. */
export function poseAtTime(k: Klank, t: number, slow: boolean, holdEnd?: number): { pose: MouthPose; done: boolean } {
  const f = slow ? SLOW_FACTOR : 1;
  const s = Object.fromEntries(Object.entries(STEPS).map(([n, v]) => [n, v * f])) as typeof STEPS;
  const start = k.start;
  const t1 = s.toRest;
  const t2 = t1 + s.rest;
  const t3 = t2 + s.onset;
  const t4 = holdEnd ?? t3 + s.hold;
  if (t < t1) return { pose: mixPose(start, REST, ease(t / t1)), done: false };
  if (t < t2) return { pose: REST, done: false };
  if (t < t3) return { pose: mixPose(REST, start, ease((t - t2) / s.onset)), done: false };
  const held = k.end ? mixPose(start, k.end, glideAt(k, Math.min(t, t4) - t3, s.hold)) : start;
  if (t < t4) return { pose: held, done: false };
  const t5 = t4 + s.release;
  const t6 = t5 + s.pause;
  const t7 = t6 + s.back;
  if (t < t5) return { pose: mixPose(held, REST, ease((t - t4) / s.release)), done: false };
  if (t < t6) return { pose: REST, done: false };
  if (t < t7) return { pose: mixPose(REST, start, ease((t - t6) / s.back)), done: false };
  return { pose: start, done: true };
}

/** The pose when nothing plays (and always with reduced motion): the sound's own position. */
export function stillPose(k: Klank): MouthPose {
  return k.start;
}

/** The longest the mouth waits on a sound that does not end (a stalled clip). */
const LONGEST_MS = 6000;

export interface MouthMotion {
  pose: MouthPose;
  playing: boolean;
  /** Plays the motion once (normal or slow); the card calls this as it starts the sound. */
  play: (slow: boolean) => void;
}

/**
 * The mouth's motion for a sound: still in its position, until one of `follow` is said (the
 * sound, the example word: src/lib/audio.ts onSpeech) or `play` is called. Then rest, the sound,
 * hold while it sounds (it waits for the end of the recording or the phone's voice), back.
 * With reduced motion or the calm screen (stillMotion) it never moves.
 */
export function useMouthMotion(k: Klank, follow: string[]): MouthMotion {
  const [pose, setPose] = useState<MouthPose>(() => stillPose(k));
  const [playing, setPlaying] = useState(false);
  const run = useRef<{ at: number; slow: boolean; sounding: boolean; holdEnd?: number; raf: number } | null>(null);
  const stop = useCallback(() => {
    if (run.current) cancelAnimationFrame(run.current.raf);
    run.current = null;
  }, []);
  const frame = useCallback(() => {
    const now = performance.now();
    const cur = run.current;
    if (!cur) return;
    const t = now - cur.at;
    const f = cur.slow ? SLOW_FACTOR : 1;
    const planned = (STEPS.toRest + STEPS.rest + STEPS.onset + STEPS.hold) * f;
    // Still sounding at the planned end of the hold: hold on until it ends (or LONGEST_MS).
    let holdEnd = cur.holdEnd;
    if (holdEnd === undefined && cur.sounding && t >= planned && t < LONGEST_MS) holdEnd = t + 16;
    const { pose: p, done } = poseAtTime(k, t, cur.slow, holdEnd ?? (t >= planned ? planned : undefined));
    setPose(p);
    if (done) {
      run.current = null;
      setPlaying(false);
      return;
    }
    cur.raf = requestAnimationFrame(frame);
  }, [k]);
  const play = useCallback((slow: boolean) => {
    if (stillMotion()) return;
    const now = performance.now();
    // The tap that starts the sound and the sound's own start event come together: one motion.
    if (run.current && now - run.current.at < 150) return;
    stop();
    run.current = { at: now, slow, sounding: false, raf: requestAnimationFrame(frame) };
    setPlaying(true);
  }, [frame, stop]);
  const key = follow.join('\n');
  useEffect(() => {
    const mine = new Set(key.split('\n').filter(Boolean));
    if (!mine.size) return;
    return onSpeech((text, on, slow) => {
      if (!mine.has(text)) return;
      if (on) {
        play(slow);
        if (run.current) run.current.sounding = true;
        return;
      }
      const cur = run.current;
      if (!cur || !cur.sounding) return;
      cur.sounding = false;
      // The hold ends now, but never before the mouth has reached the sound (and for ui: its end).
      const f = cur.slow ? SLOW_FACTOR : 1;
      const reached = (STEPS.toRest + STEPS.rest + STEPS.onset) * f + (k.glide === 'full' ? STEPS.hold * 0.85 : 200) * f;
      cur.holdEnd = Math.max(performance.now() - cur.at, reached);
    });
  }, [key, play, k]);
  useEffect(() => {
    return stop;
  }, [stop]);
  // A new sound on the same card: its own position.
  useEffect(() => {
    stop();
    setPlaying(false);
    setPose(stillPose(k));
  }, [k, stop]);
  return { pose, playing, play };
}

/** A fixed frame for screenshots and the overview: rest, the sound's position, its end, or a step of the glide (0–1). */
export type MouthFrame = 'rest' | 'start' | 'end' | number;

export function framePose(k: Klank, at: MouthFrame): MouthPose {
  if (at === 'rest') return REST;
  if (at === 'start') return k.start;
  if (at === 'end') return endPose(k);
  return mixPose(k.start, endPose(k), clamp(at));
}

/**
 * The mouth of one sound. It moves with `motion` (useMouthMotion, from the card that plays the
 * sound), or with its own when none is given; `at` shows one fixed frame instead (screenshots).
 */
export function MouthAnimation({ klank, motion, at, size = 180, className }: {
  klank: Klank;
  motion?: MouthMotion;
  at?: MouthFrame;
  size?: number;
  className?: string;
}) {
  const own = useMouthMotion(klank, motion || at !== undefined ? [] : [klank.sound, klank.word.nl]);
  const pose = at !== undefined ? framePose(klank, at) : (motion ?? own).pose;
  return <Mouth pose={pose} size={size} className={className} />;
}
