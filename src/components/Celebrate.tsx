import type { CSSProperties, ReactNode } from 'react';
import { Boot, Capsule, MascotHead, Mitt, r1, type HeadId, type MitKind, type V } from './Mascot';
import { FlameArt } from "./StreakArt";

/**
 * Celebration scenes for the end of a lesson. The cast's own heads (CastHead from
 * Characters.tsx) sit on full-body action rigs here, so the colleagues look exactly like the
 * ones the learner just practised with, but get their whole body into the moment. Each scene
 * is built around one bold, asymmetric line of action that reads as a solid silhouette:
 *
 *  - LessonCelebration (lesson complete): Bram leaps along a strong diagonal, back leg kicked
 *    out, and punches up into a high five with Jada, who springs off a pallet to meet him.
 *  - StreakHero (day-streak milestone): Bram lands on the podium beside the streak flame and
 *    cheers, one hand flung out to present it, the other fist punched high.
 *
 * Choreography (styles.css, "Celebrations"): anticipation (crouch), the big pose (stretch),
 * overshoot and settle, once on entry; then a gentle idle loop (bob, blink, wiggle, drifting
 * confetti). The settled pose is the base style, so with prefers-reduced-motion the still
 * scene is complete.
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

/** Firework burst: eight rays around a centre, alternating long and short. */
export function Burst({ x, y, r, color, className, style }: {
  x: number; y: number; r: number; color: string; className?: string; style?: CSSProperties;
}) {
  const rays = Array.from({ length: 8 }, (_, i) => {
    const a = (i * Math.PI) / 4;
    const long = i % 2 === 0;
    const r0 = r * 0.42;
    const r1 = long ? r : r * 0.7;
    return (
      <path
        key={i}
        d={`M${(x + Math.cos(a) * r0).toFixed(1)} ${(y + Math.sin(a) * r0).toFixed(1)}L${(x + Math.cos(a) * r1).toFixed(1)} ${(y + Math.sin(a) * r1).toFixed(1)}`}
        stroke={color}
        strokeWidth={long ? 4 : 3.4}
        strokeLinecap="round"
      />
    );
  });
  return <g className={`cel-burst ${className ?? ''}`} style={style}>{rays}</g>;
}

type Piece = [x: number, y: number, kind: 'rect' | 'dot' | 'ring' | 'star' | 'wave', color: string, rot: number, size: number];

const GOLD = '#ffc800';
const ORANGE = '#ff9600';
const BLUE = '#1cb0f6';
const GREEN = '#93d333';
const PINK = '#ff86d0';
const PURPLE = '#ce82ff';

/** One confetti piece. It flies out from (ox, oy) to its spot, then drifts there. */
function Confetti({ pieces, ox, oy, delay = 0 }: { pieces: Piece[]; ox: number; oy: number; delay?: number }) {
  return (
    <g className="cf-group">
      {pieces.map(([x, y, kind, color, rot, s], i) => {
        const style = {
          '--fx': `${ox - x}px`,
          '--fy': `${oy - y}px`,
          '--d': `${delay + (i % 6) * 0.04}s`,
          '--drift': `${i % 2 ? 3 : -3}px`,
          '--spin': `${i % 3 === 0 ? 14 : -10}deg`,
          rotate: `${rot}deg`,
        } as CSSProperties;
        let art;
        switch (kind) {
          case 'rect':
            art = <rect x={x - s / 2} y={y - s * 0.3} width={s} height={s * 0.6} rx={s * 0.15} fill={color} />;
            break;
          case 'dot':
            art = <circle cx={x} cy={y} r={s / 2} fill={color} />;
            break;
          case 'ring':
            art = <circle cx={x} cy={y} r={s / 2} fill="none" stroke={color} strokeWidth={2.4} />;
            break;
          case 'star':
            art = <path d={twinkle(x, y, s)} fill={color} />;
            break;
          default:
            art = (
              <path
                d={`M${x - s} ${y}q${s / 2} ${-s * 0.6} ${s} 0t${s} 0`}
                fill="none"
                stroke={color}
                strokeWidth={2.6}
                strokeLinecap="round"
              />
            );
        }
        return (
          <g key={i} className={`cf cf-${kind}`} style={style}>
            {art}
          </g>
        );
      })}
    </g>
  );
}


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
    leg: '#1cb0f6',
    shoe: '#ff4b4b',
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
        <rect x="-11" y="-20" width="22" height="34" rx="3" fill="#1cb0f6" />
        <rect x="-22" y="-2" width="44" height="18" fill="#1cb0f6" />
        <rect x="-13" y="-42" width="5" height="24" rx="2.5" fill="#1cb0f6" transform="rotate(-6 -10 -20)" />
        <rect x="8" y="-42" width="5" height="24" rx="2.5" fill="#1cb0f6" transform="rotate(6 10 -20)" />
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

const LESSON_CONFETTI: Piece[] = [
  [60, 40, 'star', GOLD, 0, 9],
  [262, 30, 'ring', GOLD, 0, 9],
  [296, 74, 'star', ORANGE, 0, 7],
  [30, 104, 'dot', PINK, 0, 6],
  [300, 128, 'rect', BLUE, 30, 10],
  [26, 54, 'rect', PURPLE, -24, 10],
  [196, 14, 'dot', GREEN, 0, 5],
  [232, 54, 'wave', PINK, -12, 6],
  [100, 20, 'rect', GOLD, 52, 8],
  [304, 190, 'dot', GOLD, 0, 5],
  [22, 160, 'star', GOLD, 0, 7],
  [276, 160, 'wave', GREEN, 20, 5],
  [40, 196, 'ring', ORANGE, 0, 7],
  [168, 6, 'dot', BLUE, 0, 4.5],
];

/** Bram's leap: one long diagonal from his kicked-back boot (bottom left), through his body and up
 *  his straight arm into the high five above the two of them. */
const BRAM_LEAP: ActionPose = {
  pelvis: [112, 160],
  tilt: 6,
  head: -14,
  gaze: [1, -1],
  shout: true,
  armL: { a: 168, e: 140, hand: 'fist', flip: true },
  armR: { a: -48, e: -56, hand: 'open', flip: true },
  legL: { t: 132, s: 196 },
  legR: { t: 72, s: 104 },
  facing: [-1, 1],
  behind: ['armL', 'legL'],
};

/** Jada springs up off the crate to meet him, her free fist pumped, one foot flicked up behind. */
const JADA_SPRING: ActionPose = {
  pelvis: [208, 162],
  tilt: -12,
  head: 12,
  gaze: [-1, -1],
  shout: true,
  armL: { a: -128, e: -122, hand: 'open' },
  armR: { a: -10, e: -96, hand: 'fist' },
  legL: { t: 96, s: 90 },
  legR: { t: 58, s: -20 },
  facing: [-1, -1],
  behind: ['armR', 'legR'],
};

/** Lesson complete: Bram leaps into a high five with Jada; fireworks and confetti around them. */
export function LessonCelebration({ className }: { className?: string }) {
  return (
    <div className={`cel-scene ${className ?? ''}`} aria-hidden>
      <svg className="cel-svg" viewBox="0 0 320 260" focusable="false">
        <Burst x={40} y={80} r={28} color={GREEN} className="cel-b1" />
        <Burst x={284} y={56} r={24} color={BLUE} className="cel-b2" />
        <Burst x={296} y={214} r={14} color={GOLD} className="cel-b3" />
        <Confetti pieces={LESSON_CONFETTI} ox={160} oy={60} delay={0.5} />
        {/* The shop floor, shadows, and the crate Jada springs off */}
        <rect className="cel-floor" x="34" y="246" width="252" height="7" rx="3.5" fill="var(--line)" />
        <ellipse className="lv-shadow" cx="110" cy="247" rx="28" ry="4" fill="#000" opacity=".2" />
        <ellipse className="lv-shadow lv-shadow-jada" cx="210" cy="211" rx="18" ry="2.6" fill="#000" opacity=".22" />
        <g className="lv-pallet">
          <rect x="176" y="210" width="62" height="36" rx="6" fill="#c98a4b" />
          <rect x="176" y="210" width="62" height="9" rx="4.5" fill="#e0a86b" />
          <path d="M224 219H238V240Q238 246 232 246H224Z" fill="#a86d3a" opacity=".5" />
        </g>
        {/* The clap where their hands meet, behind the hands */}
        <g className="lv-clap">
          <Burst x={160} y={74} r={32} color={GOLD} />
        </g>
        <g className="lv-jada">
          <g className="lv-idle lv-idle-jada">
            <Figure who="jada" pose={JADA_SPRING} blink={3.7} />
          </g>
        </g>
        <g className="lv-bram">
          <g className="lv-idle">
            <Figure who="bram" pose={BRAM_LEAP} blink={3.2} />
          </g>
        </g>
      </svg>
    </div>
  );
}

const STREAK_CONFETTI: Piece[] = [
  [212, 40, 'star', GOLD, 0, 10],
  [26, 50, 'star', ORANGE, 0, 7],
  [222, 120, 'star', GOLD, 0, 6],
  [20, 128, 'ring', GOLD, 0, 7],
  [64, 18, 'dot', ORANGE, 0, 5],
  [180, 10, 'rect', GOLD, 34, 9],
  [14, 92, 'rect', ORANGE, -30, 8],
  [230, 82, 'dot', ORANGE, 0, 4.5],
];

/** Bram stands on the podium beside the flame and cheers: weight on his back foot, leaning
 *  towards the flame, one open hand flung out to present it ("ta-da!"), the other fist punched high. */
const BRAM_CHEER: ActionPose = {
  pelvis: [158, 146],
  tilt: 12,
  head: -12,
  gaze: [0.3, -1],
  shout: true,
  armL: { a: 112, e: -70, hand: 'fist', flip: true },
  armR: { a: -50, e: -74, hand: 'fist' },
  legL: { t: 102, s: 86 },
  legR: { t: 8, s: 98 },
  facing: [-1, 1],
  behind: [],
};

/** Day-streak milestone: Bram lands on the podium and cheers next to the streak flame. */
export function StreakHero({ lit = false, className }: { lit?: boolean; className?: string }) {
  return (
    <div className={`streak-hero ${lit ? 'streak-hero-lit' : ''} ${className ?? ''}`} aria-hidden>
      <svg className="streak-svg" viewBox="0 0 240 220" focusable="false">
        <Confetti pieces={STREAK_CONFETTI} ox={110} oy={100} delay={0.6} />
        <g className="streak-podium">
          <path d="M44 184v14c0 10 34 17 76 17s76-7 76-17v-14z" fill="#d96500" />
          <path d="M150 198.6v14.6M90 198.6v14.6" stroke="#c25700" strokeWidth="3" strokeLinecap="round" opacity=".5" />
          <ellipse cx="120" cy="184" rx="76" ry="17" fill="#ff9600" />
          <path d="M60 182c12-7 34-10 52-10" fill="none" stroke="#ffc266" strokeWidth="4.5" strokeLinecap="round" />
          <ellipse cx="120" cy="185" rx="44" ry="7.5" fill="#c25700" opacity=".45" />
        </g>
        <g className="sk-flame">
          <g className="sk-flame-idle">
            <g transform="translate(30 92) scale(1.28)">
              <FlameArt face />
            </g>
          </g>
        </g>
        <g className="sk-bram">
          <g className="sk-jump">
            <g className="sk-idle">
              <Figure who="bram" pose={BRAM_CHEER} blink={3.4} />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
