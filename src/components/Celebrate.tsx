import type { CSSProperties, ReactNode } from 'react';
import { Boot, Capsule, MascotHead, Mitt, r1, type HeadId, type MitKind, type V } from './Mascot';
import { FlameArt } from "./StreakArt";

/**
 * Celebration scenes for the end of a lesson and the day streak. The cast's own heads sit on
 * full-body rigs here, so the colleagues look exactly like the ones the learner just practised
 * with. The tone is calm and professional (a work tool, not a game):
 *
 *  - LessonCelebration (lesson complete): Bram and Jada stand on the shop floor; Bram gives a
 *    thumb up.
 *  - StreakHero (day-streak milestone): Bram stands on the podium beside the streak flame, thumb up.
 *
 * Choreography (styles.css, "Celebrations"): the scene fades up once, the thumb comes up once,
 * then only a blink. No confetti, bursts, leaps or loops. The settled pose is the base style, so
 * with prefers-reduced-motion the still scene is complete.
 */

/** Four-pointed twinkle. */
export const twinkle = (x: number, y: number, r: number) => {
  const k = r * 0.18;
  return (
    `M${x} ${y - r}C${x + k} ${y - k} ${x + k} ${y - k} ${x + r} ${y}` +
    `C${x + k} ${y + k} ${x + k} ${y + k} ${x} ${y + r}` +
    `C${x - k} ${y + k} ${x - k} ${y + k} ${x - r} ${y}` +
    `C${x - k} ${y - k} ${x - k} ${y - k} ${x} ${y - r}z`
  );
};


/* ------------------------------------------------------------------------------------------
 * Full-body action rig, built from the flat primitives in Mascot.tsx: capsule limbs that start
 * inside a bean torso (so shoulders and hips attach cleanly), mitten hands, block boots, and the
 * mascot head. The torso is drawn upright around the pelvis and tilted along the line of action.
 * All angles are screen angles: 0 right, 90 down.
 * ---------------------------------------------------------------------------------------- */

const RAD = Math.PI / 180;
const go = ([x, y]: V, len: number, deg: number): V => [x + len * Math.cos(deg * RAD), y + len * Math.sin(deg * RAD)];
/** A point in torso space (pelvis at 0,0, torso upright) placed in the scene. */
const place = ([x, y]: V, tilt: number, [px, py]: V): V => {
  const c = Math.cos(tilt * RAD);
  const s = Math.sin(tilt * RAD);
  return [px + x * c - y * s, py + x * s + y * c];
};
const origin = ([x, y]: V): CSSProperties => ({ transformOrigin: `${r1(x)}px ${r1(y)}px` });

interface Outfit {
  skin: string;
  shade: string;
  sleeve: string;
  /** Short sleeves: the forearm is bare. */
  bare?: boolean;
  leg: string;
  shoe: string;
  /** Upper arm, forearm, thickness. */
  arm: [number, number, number];
  /** Thigh, shin, thickness. */
  legs: [number, number, number];
  shoulder: V;
  hip: V;
  neck: number;
  headScale: number;
  torsoPath: string;
  torso: ReactNode;
}

/* One bean per body: narrow shoulders, a full belly, flat at the hips. */
const BRAM_BEAN = 'M-19 10C-25 -4 -25 -30 -16 -40Q-9 -47 0 -47Q9 -47 16 -40C25 -30 25 -4 19 10Q0 16 -19 10Z';
const JADA_BEAN = 'M-15 9C-20 -4 -20 -26 -13 -35Q-7 -41 0 -41Q7 -41 13 -35C20 -26 20 -4 15 9Q0 14 -15 9Z';

const OUTFITS: Record<HeadId, Outfit> = {
  bram: {
    skin: '#f7c49b',
    shade: '#e2a376',
    sleeve: '#1a86d8',
    leg: '#2d4f78',
    shoe: '#8a5a2b',
    arm: [23, 21, 12],
    legs: [17, 15, 14],
    shoulder: [15, -34],
    hip: [9, 4],
    neck: -44,
    headScale: 0.92,
    torsoPath: BRAM_BEAN,
    torso: (
      <>
        {/* Hi-vis vest over a blue shirt: flat colour blocks only. */}
        <path d={BRAM_BEAN} fill="#ff7a00" />
        <path d="M-9 -48L0 -33L9 -48Z" fill="#1a86d8" />
        <rect x="-26" y="-21" width="52" height="6" fill="#ffe066" />
        <rect x="-26" y="-2" width="52" height="20" fill="#2d4f78" />
      </>
    ),
  },
  jada: {
    skin: '#8d5536',
    shade: '#6e3f25',
    sleeve: '#ffc929',
    bare: true,
    leg: '#1592db',
    shoe: '#c2412d',
    arm: [20, 19, 10.5],
    legs: [14, 13, 12.5],
    shoulder: [12, -30],
    hip: [7, 4],
    neck: -38,
    headScale: 0.8,
    torsoPath: JADA_BEAN,
    torso: (
      <>
        {/* Yellow tee under blue dungarees: one bib-and-trousers block and two straps. */}
        <path d={JADA_BEAN} fill="#ffc929" />
        <rect x="-11" y="-20" width="22" height="34" rx="3" fill="#1592db" />
        <rect x="-22" y="-2" width="44" height="18" fill="#1592db" />
        <rect x="-13" y="-42" width="5" height="24" rx="2.5" fill="#1592db" transform="rotate(-6 -10 -20)" />
        <rect x="8" y="-42" width="5" height="24" rx="2.5" fill="#1592db" transform="rotate(6 10 -20)" />
      </>
    ),
  },
};

type ArmSpec = { a: number; e: number; hand: MitKind; flip?: boolean };
type LegSpec = { t: number; s: number };
interface ActionPose {
  pelvis: V;
  /** Torso tilt along the line of action, and the head's extra tilt on top of it. */
  tilt: number;
  head: number;
  /** Where the small eyes look. */
  gaze?: [number, number];
  shout?: boolean;
  /** Viewer's left / right limbs. */
  armL: ArmSpec;
  armR: ArmSpec;
  legL: LegSpec;
  legR: LegSpec;
  /** Which way the toes point (-1 left, 1 right), per leg. */
  facing: [1 | -1, 1 | -1];
  /** Limbs drawn behind the torso (the far side). */
  behind: Array<'armL' | 'armR' | 'legL' | 'legR'>;
}

function Arm({ o, pose, side, cls }: { o: Outfit; pose: ActionPose; side: 'L' | 'R'; cls: string }) {
  const spec = side === 'L' ? pose.armL : pose.armR;
  const S = place([side === 'L' ? -o.shoulder[0] : o.shoulder[0], o.shoulder[1]], pose.tilt, pose.pelvis);
  const [U, F, w] = o.arm;
  const E = go(S, U, spec.a);
  const W = go(E, F, spec.e);
  return (
    <g className={`fig-arm ${cls}`} style={origin(S)}>
      {o.bare ? (
        <>
          <Capsule a={S} b={E} w={w} fill={o.skin} />
          <Capsule a={E} b={W} w={w} fill={o.skin} />
          <Capsule a={S} b={go(S, U * 0.45, spec.a)} w={w * 1.35} fill={o.sleeve} />
        </>
      ) : (
        <>
          <Capsule a={S} b={E} w={w} fill={o.sleeve} />
          <Capsule a={E} b={W} w={w} fill={o.sleeve} />
        </>
      )}
      <g className="fig-hand" style={origin(W)}>
        <g transform={`translate(${r1(W[0])} ${r1(W[1])}) rotate(${spec.e}) scale(1 ${spec.flip ? -1 : 1})`}>
          <Mitt kind={spec.hand} w={w} skin={o.skin} shade={o.shade} />
        </g>
      </g>
    </g>
  );
}

function Leg({ o, pose, side, cls }: { o: Outfit; pose: ActionPose; side: 'L' | 'R'; cls: string }) {
  const spec = side === 'L' ? pose.legL : pose.legR;
  const H = place([side === 'L' ? -o.hip[0] : o.hip[0], o.hip[1]], pose.tilt, pose.pelvis);
  const [T, Sh, w] = o.legs;
  const K = go(H, T, spec.t);
  const A = go(K, Sh, spec.s);
  const f = pose.facing[side === 'L' ? 0 : 1];
  return (
    <g className={`fig-leg ${cls}`} style={origin(H)}>
      <Capsule a={H} b={K} w={w} fill={o.leg} />
      <Capsule a={K} b={A} w={w} fill={o.leg} />
      <g transform={`translate(${r1(A[0])} ${r1(A[1])}) rotate(${r1(spec.s - 90)}) scale(${f} 1)`}>
        <Boot w={w} fill={o.shoe} />
      </g>
    </g>
  );
}

/** One cast member in an action pose. Classes let CSS move the parts. */
function Figure({ who, pose, blink }: { who: HeadId; pose: ActionPose; blink?: number }) {
  const o = OUTFITS[who];
  const N = place([0, o.neck], pose.tilt, pose.pelvis);
  const parts = {
    armL: <Arm key="armL" o={o} pose={pose} side="L" cls="fig-armL" />,
    armR: <Arm key="armR" o={o} pose={pose} side="R" cls="fig-armR" />,
    legL: <Leg key="legL" o={o} pose={pose} side="L" cls="fig-legL" />,
    legR: <Leg key="legR" o={o} pose={pose} side="R" cls="fig-legR" />,
  };
  const names = ['legL', 'legR', 'armL', 'armR'] as const;
  return (
    <g className={`fig fig-${who}`} style={origin(pose.pelvis)}>
      {names.filter((n) => pose.behind.includes(n)).map((n) => parts[n])}
      {names.filter((n) => n.startsWith('leg') && !pose.behind.includes(n)).map((n) => parts[n])}
      <g className="fig-body" style={origin(pose.pelvis)}>
        <g transform={`translate(${r1(pose.pelvis[0])} ${r1(pose.pelvis[1])}) rotate(${pose.tilt})`}>{o.torso}</g>
      </g>
      <g className="fig-head" style={origin(N)}>
        <g transform={`translate(${r1(N[0])} ${r1(N[1])}) rotate(${pose.tilt + pose.head}) scale(${o.headScale})`}>
          <MascotHead who={who} gaze={pose.gaze} blink={blink} shout={pose.shout} />
        </g>
      </g>
      {names.filter((n) => n.startsWith('arm') && !pose.behind.includes(n)).map((n) => parts[n])}
    </g>
  );
}

/** Bram stands relaxed, one hand down, the other a thumb up at chest height. */
const BRAM_STAND: ActionPose = {
  pelvis: [100, 203],
  tilt: 0,
  head: 3,
  gaze: [0.4, 0],
  armL: { a: 100, e: 92, hand: 'fist', flip: true },
  armR: { a: 72, e: -28, hand: 'thumb' },
  legL: { t: 96, s: 92 },
  legR: { t: 85, s: 88 },
  facing: [-1, 1],
  behind: [],
};

/** Jada stands beside him, a hand on her hip. */
const JADA_STAND: ActionPose = {
  pelvis: [178, 209],
  tilt: 0,
  head: -4,
  gaze: [-0.6, 0],
  armL: { a: 96, e: 88, hand: 'fist' },
  armR: { a: 42, e: 136, hand: 'fist' },
  legL: { t: 95, s: 91 },
  legR: { t: 84, s: 88 },
  facing: [-1, 1],
  behind: [],
};

/** Lesson complete: Bram and Jada stand on the floor; Bram gives a thumb up. */
export function LessonCelebration({ className }: { className?: string }) {
  return (
    <div className={`cel-scene ${className ?? ''}`} aria-hidden>
      <svg className="cel-svg" viewBox="0 0 320 260" focusable="false">
        <rect className="cel-floor" x="34" y="246" width="252" height="7" rx="3.5" fill="var(--line)" />
        <ellipse className="lv-shadow" cx="100" cy="247" rx="28" ry="4" fill="#000" opacity=".16" />
        <ellipse className="lv-shadow" cx="178" cy="247" rx="22" ry="3.4" fill="#000" opacity=".16" />
        <g className="lv-jada">
          <Figure who="jada" pose={JADA_STAND} blink={3.7} />
        </g>
        <g className="lv-bram">
          <Figure who="bram" pose={BRAM_STAND} blink={3.2} />
        </g>
      </svg>
    </div>
  );
}

/** On the podium: the same calm stance, thumb up, turned a little towards the flame. */
const BRAM_PODIUM: ActionPose = { ...BRAM_STAND, pelvis: [158, 142], head: -3, gaze: [-0.4, 0] };

/** Day-streak milestone: Bram stands on the podium next to the streak flame, thumb up. */
export function StreakHero({ lit = false, className }: { lit?: boolean; className?: string }) {
  return (
    <div className={`streak-hero ${lit ? 'streak-hero-lit' : ''} ${className ?? ''}`} aria-hidden>
      <svg className="streak-svg" viewBox="0 0 240 220" focusable="false">
        <g className="streak-podium">
          <path d="M44 184v14c0 10 34 17 76 17s76-7 76-17v-14z" fill="#a8743e" />
          <path d="M150 198.6v14.6M90 198.6v14.6" stroke="#7e5428" strokeWidth="3" strokeLinecap="round" opacity=".5" />
          <ellipse cx="120" cy="184" rx="76" ry="17" fill="#c8955b" />
          <path d="M60 182c12-7 34-10 52-10" fill="none" stroke="#ebd6b5" strokeWidth="4.5" strokeLinecap="round" />
          <ellipse cx="120" cy="185" rx="44" ry="7.5" fill="#7e5428" opacity=".35" />
        </g>
        <g className="sk-flame">
          <g transform="translate(30 92) scale(1.28)">
            <FlameArt />
          </g>
        </g>
        <g className="sk-bram">
          <Figure who="bram" pose={BRAM_PODIUM} blink={3.4} />
        </g>
      </svg>
    </div>
  );
}
