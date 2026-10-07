import { useId, type CSSProperties, type ReactNode } from 'react';
import { CastHead, Hand, type CharacterId, type HandKind } from './Characters';
import type { Expr } from './Faces';
import { FlameArt } from "./StreakArt";

/**
 * Celebration scenes for the end of a lesson. The cast's own heads (CastHead from
 * Characters.tsx) sit on full-body action rigs here, so the colleagues look exactly like the
 * ones the learner just practised with, but get their whole body into the moment. Each scene
 * is built around one bold, asymmetric line of action that reads as a solid silhouette:
 *
 *  - LessonCelebration (lesson complete): Bram leaps along a strong diagonal, back leg kicked
 *    out, and punches up into a high five with Jada, who springs off a pallet to meet him.
 *  - StreakHero (day-streak milestone): Bram lands on the podium, throws an arm round the
 *    streak flame and leans into the hug, one foot popped up behind him, thumb up.
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
 * Full-body action rig. Limbs are bold round-capped strokes (so the figure reads as one solid
 * shape), the torso is drawn upright around the pelvis and tilted along the line of action,
 * and the head is the cast member's own. All angles are screen angles: 0 right, 90 down.
 * ---------------------------------------------------------------------------------------- */

type V = [number, number];
const RAD = Math.PI / 180;
const r1 = (n: number) => Math.round(n * 10) / 10;
const go = ([x, y]: V, len: number, deg: number): V => [x + len * Math.cos(deg * RAD), y + len * Math.sin(deg * RAD)];
/** A point in torso space (pelvis at 0,0, torso upright) placed in the scene. */
const place = ([x, y]: V, tilt: number, [px, py]: V): V => {
  const c = Math.cos(tilt * RAD);
  const s = Math.sin(tilt * RAD);
  return [px + x * c - y * s, py + x * s + y * c];
};
const polyline = (pts: V[]) => 'M' + pts.map(([x, y]) => `${r1(x)} ${r1(y)}`).join('L');
const origin = ([x, y]: V): CSSProperties => ({ transformOrigin: `${r1(x)}px ${r1(y)}px` });

interface Outfit {
  skin: string;
  shade: string;
  sleeve: string;
  cuff: string;
  /** Short sleeves: the forearm is bare. */
  bare?: boolean;
  leg: string;
  shoe: string;
  sole: string;
  /** Upper arm, forearm, thickness. */
  arm: [number, number, number];
  /** Thigh, shin, thickness. */
  legs: [number, number, number];
  shoulder: V;
  hip: V;
  neck: number;
  headScale: number;
  hand: number;
  torsoPath: string;
  torso: ReactNode;
  pelvis: ReactNode;
}

const OUTFITS: Partial<Record<CharacterId, Outfit>> = {
  bram: {
    skin: '#f7c49b',
    shade: '#e2a376',
    sleeve: '#1a86d8',
    cuff: '#126bb0',
    leg: '#2d4f78',
    shoe: '#8a5a2b',
    sole: '#4a2f17',
    arm: [23, 21, 12],
    legs: [25, 24, 15],
    shoulder: [17, -43],
    hip: [8, -1],
    neck: -49,
    headScale: 0.84,
    hand: 1.45,
    torsoPath: 'M-15 4C-17 -14 -22 -31 -20 -41Q-18 -51 0 -51Q18 -51 20 -41C22 -31 17 -14 15 4Q0 9 -15 4Z',
    torso: (
      <>
        <path d="M-15 4C-17 -14 -22 -31 -20 -41Q-18 -51 0 -51Q18 -51 20 -41C22 -31 17 -14 15 4Q0 9 -15 4Z" fill="#ff7a00" />
        {/* Blue work shirt in the V of the hi-vis vest */}
        <path d="M-9 -52L0 -34L9 -52Z" fill="#1a86d8" />
        <path d="M-8 -51L0 -42L-3 -38ZM8 -51L0 -42L3 -38Z" fill="#5fb8f5" />
        {/* Reflective stripes */}
        <rect x="-30" y="-17" width="60" height="6" fill="#eef5f7" />
        <rect x="-30" y="-11" width="60" height="1.6" fill="#b9c7cc" />
        <path d="M-11 -47V-17M11 -47V-17" stroke="#eef5f7" strokeWidth="4.6" />
        <path d="M0 -34V10" stroke="#d96500" strokeWidth="2" />
        <rect x="4" y="-31" width="10" height="8" rx="2" fill="#e86e00" />
        <rect x="5" y="-33" width="8" height="2.4" rx="1.2" fill="#2b2b2b" />
        <ellipse cx="26" cy="-20" rx="16" ry="40" fill="#000" opacity=".1" />
      </>
    ),
    pelvis: <rect x="-16" y="-4" width="32" height="13" rx="6.5" fill="#2d4f78" />,
  },
  jada: {
    skin: '#8d5536',
    shade: '#6e3f25',
    sleeve: '#ffc929',
    cuff: '#e0a800',
    bare: true,
    leg: '#1cb0f6',
    shoe: '#ff4b4b',
    sole: '#f4f7f9',
    arm: [18, 17, 9.5],
    legs: [20, 20, 12],
    shoulder: [13, -37],
    hip: [6.5, -1],
    neck: -42,
    headScale: 0.7,
    hand: 1.2,
    torsoPath: 'M-12 4C-14 -12 -17 -28 -16 -36Q-14 -44 0 -44Q14 -44 16 -36C17 -28 14 -12 12 4Q0 8 -12 4Z',
    torso: (
      <>
        <path d="M-12 4C-14 -12 -17 -28 -16 -36Q-14 -44 0 -44Q14 -44 16 -36C17 -28 14 -12 12 4Q0 8 -12 4Z" fill="#ffc929" />
        {/* Blue dungarees: bib, straps, gold buttons, a pocket */}
        <path d="M-11 -22H11V12H-11Z" fill="#1cb0f6" />
        <path d="M-12 -42L-9 -23M12 -42L9 -23" stroke="#1cb0f6" strokeWidth="4.4" strokeLinecap="round" />
        <circle cx="-9" cy="-22" r="2.2" fill="#ffc800" />
        <circle cx="9" cy="-22" r="2.2" fill="#ffc800" />
        <rect x="-5" y="-17" width="10" height="7" rx="1.6" fill="#1899d6" />
        <path d="M-6 -43Q0 -38 6 -43" fill="none" stroke="#e0a800" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="22" cy="-18" rx="13" ry="34" fill="#000" opacity=".1" />
      </>
    ),
    pelvis: <rect x="-13" y="-4" width="26" height="11" rx="5.5" fill="#1cb0f6" />,
  },
};

type ArmSpec = { a: number; e: number; hand: HandKind; flip?: boolean };
type LegSpec = { t: number; s: number };
interface ActionPose {
  pelvis: V;
  /** Torso tilt along the line of action, and the head's extra tilt on top of it. */
  tilt: number;
  head: number;
  /** Viewer's left / right limbs. */
  armL: ArmSpec;
  armR: ArmSpec;
  legL: LegSpec;
  legR: LegSpec;
  /** Which way the toes point (-1 left, 1 right). */
  facing: 1 | -1;
  /** Limbs drawn behind the torso (the far side). */
  behind: Array<'armL' | 'armR' | 'legL' | 'legR'>;
}

function Arm({ o, pose, side, cls }: { o: Outfit; pose: ActionPose; side: 'L' | 'R'; cls: string }) {
  const spec = side === 'L' ? pose.armL : pose.armR;
  const S = place([side === 'L' ? -o.shoulder[0] : o.shoulder[0], o.shoulder[1]], pose.tilt, pose.pelvis);
  const [U, F, w] = o.arm;
  const E = go(S, U, spec.a);
  const W = go(E, F, spec.e);
  const k = spec.flip ? -o.hand : o.hand;
  return (
    <g className={`fig-arm ${cls}`} style={origin(S)}>
      {o.bare ? (
        <>
          <path d={polyline([S, E, W])} fill="none" stroke={o.skin} strokeWidth={w * 0.82} strokeLinecap="round" strokeLinejoin="round" />
          <path d={polyline([S, go(S, U * 0.55, spec.a)])} fill="none" stroke={o.sleeve} strokeWidth={w * 1.25} strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d={polyline([S, E, W])} fill="none" stroke={o.sleeve} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
          <path d={polyline([go(W, -5, spec.e), go(W, -1, spec.e)])} stroke={o.cuff} strokeWidth={w + 1} strokeLinecap="round" />
        </>
      )}
      <g className="fig-hand" style={origin(W)}>
        <g transform={`translate(${r1(W[0])} ${r1(W[1])}) rotate(${spec.e}) scale(${o.hand} ${k})`}>
          <Hand kind={spec.hand} skin={o.skin} shade={o.shade} />
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
  const f = w / 15;
  return (
    <g className={`fig-leg ${cls}`} style={origin(H)}>
      <path d={polyline([H, K, A])} fill="none" stroke={o.leg} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
      {/* Shoe: sole along the shin's direction, toes towards `facing`. */}
      <g transform={`translate(${r1(A[0])} ${r1(A[1])}) rotate(${r1(spec.s - 90)}) scale(${pose.facing * f} ${f})`}>
        <path d="M-8 -5Q-8 -10 -2 -10H3Q7 -10 8 -5L9 -3Q18 -3 19 3V6H-8Z" fill={o.shoe} />
        <rect x="-9" y="4" width="29" height="5.4" rx="2.7" fill={o.sole} />
      </g>
    </g>
  );
}

/** One cast member in an action pose. Classes let CSS move the parts (fig-armL, fig-head...). */
function Figure({ who, pose, expr, squint, blink }: {
  who: CharacterId;
  pose: ActionPose;
  expr: Expr;
  squint?: boolean;
  blink?: number;
}) {
  const o = OUTFITS[who]!;
  const clip = `fig-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
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
      <defs>
        <clipPath id={clip}>
          <path d={o.torsoPath} />
        </clipPath>
      </defs>
      {names.filter((n) => pose.behind.includes(n)).map((n) => parts[n])}
      <g transform={`translate(${r1(pose.pelvis[0])} ${r1(pose.pelvis[1])}) rotate(${pose.tilt})`}>
        {o.pelvis}
        <g clipPath={`url(#${clip})`}>{o.torso}</g>
      </g>
      {names.filter((n) => n.startsWith('leg') && !pose.behind.includes(n)).map((n) => parts[n])}
      <g className="fig-head" style={origin(N)}>
        <g transform={`translate(${r1(N[0])} ${r1(N[1])}) rotate(${pose.tilt + pose.head}) scale(${o.headScale}) translate(-60 -90)`}>
          <CastHead who={who} expr={expr} squint={squint} blink={blink} />
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

/** Bram's leap: one diagonal from the kicked-back boot through his body to the high-five. */
const BRAM_LEAP: ActionPose = {
  pelvis: [206, 168],
  tilt: -30,
  head: 16,
  armL: { a: -122, e: -112, hand: 'open', flip: true },
  armR: { a: 18, e: -58, hand: 'fist' },
  legL: { t: 128, s: 78 },
  legR: { t: 44, s: -20 },
  facing: -1,
  behind: ['armR', 'legR'],
};

/** Jada springs up off a pallet to meet him, one foot flicked up behind her. */
const JADA_SPRING: ActionPose = {
  pelvis: [84, 164],
  tilt: 18,
  head: -8,
  armL: { a: 150, e: 118, hand: 'fist', flip: true },
  armR: { a: -66, e: -58, hand: 'open' },
  legL: { t: 128, s: 172 },
  legR: { t: 96, s: 88 },
  facing: 1,
  behind: ['armL', 'legL'],
};

/** Lesson complete: Bram leaps into a high five with Jada; fireworks and confetti around them. */
export function LessonCelebration({ className }: { className?: string }) {
  return (
    <div className={`cel-scene ${className ?? ''}`} aria-hidden>
      <svg className="cel-svg" viewBox="0 0 320 260" focusable="false">
        <Burst x={40} y={80} r={28} color={GREEN} className="cel-b1" />
        <Burst x={284} y={56} r={24} color={BLUE} className="cel-b2" />
        <Burst x={296} y={214} r={14} color={GOLD} className="cel-b3" />
        <Confetti pieces={LESSON_CONFETTI} ox={146} oy={84} delay={0.5} />
        {/* The shop floor, shadows, and the pallet Jada springs off */}
        <rect className="cel-floor" x="34" y="246" width="252" height="7" rx="3.5" fill="var(--line)" />
        <ellipse className="lv-shadow" cx="214" cy="247" rx="34" ry="4" fill="#000" opacity=".2" />
        <ellipse className="lv-shadow lv-shadow-jada" cx="86" cy="211" rx="18" ry="2.6" fill="#000" opacity=".22" />
        <g className="lv-pallet">
          {/* A wooden crate Jada springs off */}
          <rect x="58" y="210" width="58" height="36" rx="4" fill="#c98a4b" />
          <rect x="58" y="210" width="58" height="4" rx="2" fill="#e0a86b" />
          <path d="M63 218H111M63 228H111M63 238H111" stroke="#a86d3a" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M64 216L110 242" stroke="#9c6436" strokeWidth="5" strokeLinecap="round" />
        </g>
        {/* The clap where their hands meet, behind the hands */}
        <g className="lv-clap">
          <Burst x={136} y={58} r={24} color={GOLD} />
        </g>
        <g className="lv-jada">
          <g className="lv-idle lv-idle-jada">
            <Figure who="jada" pose={JADA_SPRING} expr="joy" />
          </g>
        </g>
        <g className="lv-bram">
          <g className="lv-idle">
            <Figure who="bram" pose={BRAM_LEAP} expr="joy" squint />
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

/** Bram hugs the flame: leans into it, arm round it, back foot popped up, thumb up. */
const BRAM_HUG: ActionPose = {
  pelvis: [142, 140],
  tilt: -18,
  head: -14,
  armL: { a: 176, e: 122, hand: 'open', flip: true },
  armR: { a: -34, e: -8, hand: 'thumb' },
  legL: { t: 100, s: 92 },
  legR: { t: 52, s: -12 },
  facing: -1,
  behind: ['legR'],
};

/** Day-streak milestone: Bram lands on the podium and hugs the streak flame. */
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
          <g transform="translate(38 86) scale(1.36)">
            <FlameArt face />
          </g>
        </g>
        <g className="sk-bram">
          <g className="sk-jump">
            <g className="sk-idle">
              <Figure who="bram" pose={BRAM_HUG} expr="joy" blink={3.4} />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
