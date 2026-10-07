import { useId, type ReactNode } from 'react';
import { CastHead, type CharacterId } from '../components/Characters';
import { twinkle } from '../components/Celebrate';
import type { Expr } from '../components/Faces';

/**
 * Building blocks for the word pictures (see docs/tekenstijl.md). Every block returns a <g>
 * for use inside a 120 x 120 <svg viewBox="0 0 120 120">, in the cast's style: flat fills,
 * no outlines, a darker tone on the right/bottom (light comes from the top left), a light
 * highlight stroke on the top left, and a soft ground shadow.
 */

export type Pt = [number, number];

/** The palette, taken from the characters (Characters.tsx, Faces.tsx, Celebrate.tsx). */
export const PAL = {
  ink: '#2f2a28',
  white: '#fff',
  // Greys and metal (mug, clipboard clip, scanner)
  paper: '#f4f7f9',
  paperShade: '#dfe6ec',
  mist: '#cfd8de',
  line: '#9aa5ab',
  steel: '#8a96a0',
  slate: '#3c4a56',
  slateDark: '#26313a',
  // Hard-hat yellow
  yellow: '#ffc800',
  yellowShade: '#e5a400',
  yellowLight: '#ffd94d',
  yellowShine: '#fff3b0',
  // Hi-vis orange
  orange: '#ff7a00',
  orangeShade: '#d96500',
  orangeLight: '#ff9600',
  // Work-shirt blue and sky blue
  blue: '#1a86d8',
  blueShade: '#126bb0',
  blueLight: '#5fb8f5',
  sky: '#1cb0f6',
  skyShade: '#1899d6',
  ice: '#8fdcff',
  // Supervisor navy
  navy: '#244a7d',
  navyShade: '#1a3860',
  // Fleece green and seedling green
  green: '#3fa34d',
  greenShade: '#2f7d3a',
  leaf: '#7ac70c',
  leafShade: '#58a700',
  lime: '#c6f06b',
  ok: '#58cc02',
  okShade: '#46a302',
  // Headscarf purple
  purple: '#8e44c9',
  purpleShade: '#6f2fa6',
  purpleLight: '#b07ae6',
  // Alarm red
  red: '#ff4b4b',
  redShade: '#ea2b2b',
  redLight: '#ffb3b3',
  // Terracotta pot
  clay: '#e0703f',
  clayShade: '#c0552a',
  clayLight: '#ef8a57',
  // Cardboard, pallet wood, coffee
  card: '#e0a86b',
  cardShade: '#c98a4b',
  cardDark: '#a86d3a',
  wood: '#b47a45',
  brown: '#6b3f22',
  // Faces
  mouth: '#7a2433',
  blush: '#ff7b7b',
} as const;

/** Skin tones of the cast: [skin, shade]. Vary them across pictures. */
export const SKIN: Record<CharacterId, [string, string]> = {
  bram: ['#f7c49b', '#e2a376'],
  amina: ['#b97a52', '#9c6141'],
  henk: ['#f0b791', '#d9946c'],
  jada: ['#8d5536', '#6e3f25'],
};

const pts = (p: Pt[]) => p.map(([x, y]) => `${r1(x)} ${r1(y)}`).join(' ');
const r1 = (n: number) => Math.round(n * 10) / 10;

/** Soft shadow on the ground under an object (always the first thing drawn). */
export function Ground({ cx = 60, cy = 106, rx = 34, ry = 5 }: { cx?: number; cy?: number; rx?: number; ry?: number }) {
  return (
    <g>
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="#000" opacity=".14" />
    </g>
  );
}

/**
 * The shading recipe: draws `children` (the silhouette, in its base colour) and lays a darker
 * tone over its right side, clipped to the silhouette. `at` is the shade ellipse
 * [cx, cy, rx, ry]; by default it covers the right third of the 120 box.
 */
export function Shade({ children, color = '#000', opacity = 0.14, at = [104, 60, 30, 70] }: {
  children: ReactNode;
  color?: string;
  opacity?: number;
  at?: [number, number, number, number];
}) {
  const id = `pm-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  return (
    <g>
      <mask id={id} style={{ maskType: 'alpha' }}>
        {children}
      </mask>
      {children}
      <ellipse cx={at[0]} cy={at[1]} rx={at[2]} ry={at[3]} fill={color} opacity={opacity} mask={`url(#${id})`} />
    </g>
  );
}

/** Highlight stroke on the top left of a shape (a curved line, round caps). */
export function Shine({ d, color = PAL.white, width = 3.5, opacity = 0.6 }: { d: string; color?: string; width?: number; opacity?: number }) {
  return (
    <g>
      <path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" opacity={opacity} />
    </g>
  );
}

/* ------------------------------------------------------------------------------------------
 * Hands
 * ---------------------------------------------------------------------------------------- */

export type HandPose = 'open' | 'point' | 'thumb' | 'fist' | 'hold';

/**
 * A big hand, wrist at (x, y), fingers pointing up; about 26 wide and 48 tall at scale 1.
 * The thumb is on the viewer's left (a right hand seen from the palm side, or a left hand
 * from the back); `mirror` puts it on the right. `sleeve` adds a cuff below the wrist.
 */
export function Hand({ pose = 'open', x = 60, y = 90, rotate = 0, scale = 1, skin = SKIN.bram, sleeve, mirror = false }: {
  pose?: HandPose;
  x?: number;
  y?: number;
  rotate?: number;
  scale?: number;
  skin?: [string, string];
  /** Sleeve colour [cloth, cuff]; omitted = bare wrist. */
  sleeve?: [string, string];
  mirror?: boolean;
}) {
  const [s, sh] = skin;
  const finger = (fx: number, top: number, bottom = -18, w = 7) => (
    <rect x={fx - w / 2} y={top} width={w} height={bottom - top} rx={w / 2} fill={s} />
  );
  const knuckles = (
    <path d="M-4 -19V-13M3 -19V-13" stroke={sh} strokeWidth="1.6" strokeLinecap="round" />
  );
  let body: ReactNode;
  switch (pose) {
    case 'open':
      body = (
        <>
          {finger(-9.5, -44)}
          {finger(-3, -48)}
          {finger(3.5, -46)}
          {finger(10, -39, -16, 6.4)}
          <rect x="-13" y="-27" width="26" height="28" rx="10" fill={s} />
          <rect x="-15.5" y="-24" width="8" height="21" rx="4" fill={s} transform="rotate(-38 -11.5 -8)" />
          <path d="M-6.2 -38V-28M0.2 -40V-28M6.8 -36V-27" stroke={sh} strokeWidth="1.3" strokeLinecap="round" opacity=".8" />
          <path d="M-5 -12Q0 -8 6 -12" fill="none" stroke={sh} strokeWidth="1.5" strokeLinecap="round" opacity=".7" />
        </>
      );
      break;
    case 'point':
      body = (
        <>
          {finger(-8, -48, -20)}
          <rect x="-13" y="-25" width="26" height="26" rx="10" fill={s} />
          <path d="M-2 -21H9M-2 -14H9M-1 -7H8" stroke={sh} strokeWidth="1.5" strokeLinecap="round" />
          <rect x="-16" y="-14" width="17" height="8" rx="4" fill={s} transform="rotate(-12 -7 -10)" />
          <path d="M-12 -10H-2" stroke={sh} strokeWidth="1.2" strokeLinecap="round" opacity=".6" transform="rotate(-12 -7 -10)" />
        </>
      );
      break;
    case 'thumb':
      body = (
        <>
          <rect x="-11.5" y="-44" width="9" height="26" rx="4.5" fill={s} />
          <rect x="-13" y="-24" width="27" height="25" rx="10" fill={s} />
          <path d="M3 -18H13M3 -11H13M3 -4H12" stroke={sh} strokeWidth="1.6" strokeLinecap="round" />
          <path d="M-9 -38Q-7 -40 -5 -38" fill="none" stroke={sh} strokeWidth="1.2" strokeLinecap="round" opacity=".7" />
        </>
      );
      break;
    case 'hold':
      // Fingers curled round something held in front (put the object over the gap at y = -20).
      body = (
        <>
          <rect x="-13" y="-34" width="26" height="35" rx="11" fill={s} />
          <path d="M-13 -24H6M-13 -16H7M-13 -8H6" stroke={sh} strokeWidth="1.6" strokeLinecap="round" />
          <rect x="4" y="-36" width="9" height="20" rx="4.5" fill={s} />
        </>
      );
      break;
    default:
      body = (
        <>
          <rect x="-13" y="-26" width="26" height="27" rx="11" fill={s} />
          {knuckles}
          <rect x="-15" y="-13" width="18" height="8.4" rx="4.2" fill={s} transform="rotate(-8 -6 -9)" />
          <path d="M-11 -9H-1" stroke={sh} strokeWidth="1.2" strokeLinecap="round" opacity=".6" />
        </>
      );
  }
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${mirror ? -scale : scale} ${scale})`}>
      {sleeve && (
        <>
          <rect x="-15" y="4" width="30" height="40" rx="6" fill={sleeve[0]} />
          <rect x="-15.5" y="1" width="31" height="9" rx="4.5" fill={sleeve[1]} />
        </>
      )}
      <Shade color={sh} opacity={0.75} at={[20, -18, 9, 40]}>
        <g>{body}</g>
      </Shade>
    </g>
  );
}

/* ------------------------------------------------------------------------------------------
 * Objects
 * ---------------------------------------------------------------------------------------- */

/**
 * A cardboard box seen a little from above and from the right. (x, y) is the top-left corner
 * of the front face; `depth` is the visible side/top. `open` folds the top flaps up.
 */
export function Box({ x = 30, y = 50, w = 52, h = 44, depth = 16, open = false, tape = true, label = false }: {
  x?: number; y?: number; w?: number; h?: number; depth?: number; open?: boolean; tape?: boolean;
  /** A small blank shipping label on the front. */
  label?: boolean;
}) {
  const dx = depth;
  const dy = -depth * 0.62;
  const top: Pt[] = [[x, y], [x + w, y], [x + w + dx, y + dy], [x + dx, y + dy]];
  const side: Pt[] = [[x + w, y], [x + w + dx, y + dy], [x + w + dx, y + h + dy], [x + w, y + h]];
  return (
    <g strokeLinejoin="round">
      <polygon points={pts(side)} fill={PAL.cardShade} stroke={PAL.cardShade} strokeWidth="2" />
      {open ? (
        <>
          <polygon points={pts(top)} fill={PAL.cardDark} stroke={PAL.cardDark} strokeWidth="2" />
          {/* Flaps: back flap up, front flap folded out towards the viewer */}
          <polygon points={pts([[x + dx, y + dy], [x + w + dx, y + dy], [x + w + dx - 4, y + dy - 16], [x + dx - 4, y + dy - 16]])} fill={PAL.cardShade} stroke={PAL.cardShade} strokeWidth="2" />
          <polygon points={pts([[x + w, y], [x + w + dx, y + dy], [x + w + dx + 10, y + dy - 8], [x + w + 10, y - 8]])} fill={PAL.card} stroke={PAL.card} strokeWidth="2" />
        </>
      ) : (
        <polygon points={pts(top)} fill="#f0c48a" stroke="#f0c48a" strokeWidth="2" />
      )}
      <rect x={x} y={y} width={w} height={h} rx="2" fill={PAL.card} />
      {open && (
        <polygon points={pts([[x, y], [x + w, y], [x + w - 5, y - 13], [x - 5, y - 13]])} fill="#f0c48a" stroke="#f0c48a" strokeWidth="2" />
      )}
      {tape && !open && (
        <>
          <polygon points={pts([[x + w / 2 - 4, y], [x + w / 2 + 4, y], [x + w / 2 + 4 + dx, y + dy], [x + w / 2 - 4 + dx, y + dy]])} fill="#f6dcae" />
          <rect x={x + w / 2 - 4} y={y} width="8" height={h * 0.34} fill="#f6dcae" />
        </>
      )}
      {label && (
        <g>
          <rect x={x + w - 22} y={y + h - 18} width="16" height="11" rx="1.6" fill={PAL.white} />
          <path d={`M${x + w - 19} ${y + h - 14}H${x + w - 9}M${x + w - 19} ${y + h - 10.5}H${x + w - 12}`} stroke={PAL.line} strokeWidth="1.4" strokeLinecap="round" />
        </g>
      )}
      {/* Light edge along the top of the front face */}
      <path d={`M${x + 3} ${y + 2.2}H${x + w - 3}`} stroke="#f6d3a2" strokeWidth="2" strokeLinecap="round" />
    </g>
  );
}

/**
 * Speech bubble: a rounded box with a tail and a darker "depth" edge underneath (like the
 * app's buttons). Put dots, a mark, a hand or an icon inside as `children`.
 */
export function Bubble({ x = 14, y = 14, w = 70, h = 46, tail = 'left', fill = PAL.white, depth = PAL.paperShade, children }: {
  x?: number; y?: number; w?: number; h?: number;
  tail?: 'left' | 'right' | 'none';
  fill?: string; depth?: string;
  children?: ReactNode;
}) {
  const r = Math.min(14, h / 2);
  const tx = tail === 'left' ? x + w * 0.24 : x + w * 0.76;
  const tip = tail === 'left' ? tx - 8 : tx + 8;
  const shape = (dy: number, c: string) => (
    <g transform={`translate(0 ${dy})`}>
      <rect x={x} y={y} width={w} height={h} rx={r} fill={c} />
      {tail !== 'none' && <path d={`M${tx - 8} ${y + h - 2}L${tip} ${y + h + 13}L${tx + 8} ${y + h - 2}Z`} fill={c} strokeLinejoin="round" stroke={c} strokeWidth="3" />}
    </g>
  );
  return (
    <g>
      {shape(3.5, depth)}
      {shape(0, fill)}
      {children}
    </g>
  );
}

/** Three "talking" dots for inside a bubble, centred on (cx, cy). */
export function Dots({ cx = 49, cy = 37, color = PAL.line, gap = 13, r = 4.5 }: { cx?: number; cy?: number; color?: string; gap?: number; r?: number }) {
  return (
    <g fill={color}>
      <circle cx={cx - gap} cy={cy} r={r} />
      <circle cx={cx} cy={cy} r={r} />
      <circle cx={cx + gap} cy={cy} r={r} />
    </g>
  );
}

/** A chunky straight arrow from `from` to `to` (the point of the head). */
export function Arrow({ from, to, color = PAL.sky, width = 9, head = 14 }: { from: Pt; to: Pt; color?: string; width?: number; head?: number }) {
  const ang = Math.atan2(to[1] - from[1], to[0] - from[0]);
  const ux = Math.cos(ang);
  const uy = Math.sin(ang);
  const base: Pt = [to[0] - ux * head, to[1] - uy * head];
  const half = head * 0.85;
  const l: Pt = [base[0] - uy * half, base[1] + ux * half];
  const r: Pt = [base[0] + uy * half, base[1] - ux * half];
  return (
    <g>
      <path d={`M${r1(from[0])} ${r1(from[1])}L${r1(base[0] + ux * 2)} ${r1(base[1] + uy * 2)}`} stroke={color} strokeWidth={width} strokeLinecap="round" />
      <polygon points={pts([to, l, r])} fill={color} stroke={color} strokeWidth="4" strokeLinejoin="round" />
    </g>
  );
}

/** A curved arrow: a quadratic curve bent `bend` units to the left of the travel direction. */
export function CurveArrow({ from, to, bend = 20, color = PAL.sky, width = 8, head = 13 }: {
  from: Pt; to: Pt; bend?: number; color?: string; width?: number; head?: number;
}) {
  const mx = (from[0] + to[0]) / 2;
  const my = (from[1] + to[1]) / 2;
  const len = Math.hypot(to[0] - from[0], to[1] - from[1]) || 1;
  const nx = (to[1] - from[1]) / len;
  const ny = -(to[0] - from[0]) / len;
  const c: Pt = [mx + nx * bend, my + ny * bend];
  const ang = Math.atan2(to[1] - c[1], to[0] - c[0]);
  const ux = Math.cos(ang);
  const uy = Math.sin(ang);
  const base: Pt = [to[0] - ux * head, to[1] - uy * head];
  const half = head * 0.85;
  return (
    <g>
      <path d={`M${r1(from[0])} ${r1(from[1])}Q${r1(c[0])} ${r1(c[1])} ${r1(base[0] + ux * 2)} ${r1(base[1] + uy * 2)}`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" />
      <polygon
        points={pts([to, [base[0] - uy * half, base[1] + ux * half], [base[0] + uy * half, base[1] - ux * half]])}
        fill={color}
        stroke={color}
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </g>
  );
}

/** Four-pointed sparkle (the cast's confetti star). */
export function Sparkle({ x, y, r = 8, color = PAL.yellow }: { x: number; y: number; r?: number; color?: string }) {
  return (
    <g>
      <path d={twinkle(x, y, r)} fill={color} />
    </g>
  );
}

/** Short motion/emphasis lines radiating from (x, y) towards `dir` degrees (0 = right, -90 = up). */
export function Motion({ x, y, dir = -90, spread = 60, n = 3, len = 9, gap = 6, color = PAL.ink, width = 3.2 }: {
  x: number; y: number; dir?: number; spread?: number; n?: number; len?: number; gap?: number; color?: string; width?: number;
}) {
  const lines = Array.from({ length: n }, (_, i) => {
    const a = ((dir + (n === 1 ? 0 : -spread / 2 + (spread * i) / (n - 1))) * Math.PI) / 180;
    const x0 = x + Math.cos(a) * gap;
    const y0 = y + Math.sin(a) * gap;
    return `M${r1(x0)} ${r1(y0)}L${r1(x0 + Math.cos(a) * len)} ${r1(y0 + Math.sin(a) * len)}`;
  });
  return (
    <g>
      <path d={lines.join('')} stroke={color} strokeWidth={width} strokeLinecap="round" opacity=".75" />
    </g>
  );
}

/**
 * A clock face. `hour` (0-12, fractions allowed) and `minute` set the hands; `bells` turns it
 * into an alarm clock with two bells and feet.
 */
export function Clock({ cx = 60, cy = 60, r = 36, hour = 10, minute = 10, rim = PAL.sky, rimShade = PAL.skyShade, bells = false }: {
  cx?: number; cy?: number; r?: number; hour?: number; minute?: number; rim?: string; rimShade?: string; bells?: boolean;
}) {
  const hand = (turns: number, len: number) => {
    const a = turns * 2 * Math.PI - Math.PI / 2;
    return `M${cx} ${cy}L${r1(cx + Math.cos(a) * len)} ${r1(cy + Math.sin(a) * len)}`;
  };
  const ticks = [0, 1, 2, 3].map((i) => {
    const a = (i * Math.PI) / 2;
    const x0 = cx + Math.cos(a) * r * 0.62;
    const y0 = cy + Math.sin(a) * r * 0.62;
    return `M${r1(x0)} ${r1(y0)}L${r1(cx + Math.cos(a) * r * 0.72)} ${r1(cy + Math.sin(a) * r * 0.72)}`;
  });
  return (
    <g>
      {bells && (
        <>
          <path d={`M${cx - r * 0.55} ${cy + r * 0.8}L${cx - r * 0.8} ${cy + r * 1.08}M${cx + r * 0.55} ${cy + r * 0.8}L${cx + r * 0.8} ${cy + r * 1.08}`} stroke={rimShade} strokeWidth={r * 0.14} strokeLinecap="round" />
          <path d={`M${cx - r * 1.05} ${cy - r * 0.55}A${r * 0.42} ${r * 0.42} 0 0 1 ${cx - r * 0.5} ${cy - r * 1.02}Z`} fill={rim} transform={`rotate(-8 ${cx} ${cy})`} />
          <path d={`M${cx + r * 0.5} ${cy - r * 1.02}A${r * 0.42} ${r * 0.42} 0 0 1 ${cx + r * 1.05} ${cy - r * 0.55}Z`} fill={rimShade} transform={`rotate(8 ${cx} ${cy})`} />
          <rect x={cx - 3} y={cy - r - 7} width="6" height="8" rx="2" fill={rimShade} />
        </>
      )}
      <circle cx={cx} cy={cy} r={r} fill={rim} />
      <path d={`M${cx + r * 0.2} ${cy - r * 0.98}A${r} ${r} 0 0 1 ${cx + r * 0.2} ${cy + r * 0.98}A${r * 0.9} ${r * 0.98} 0 0 0 ${cx + r * 0.2} ${cy - r * 0.98}Z`} fill={rimShade} />
      <circle cx={cx} cy={cy} r={r * 0.8} fill={PAL.white} />
      <path d={`M${cx + r * 0.3} ${cy - r * 0.74}A${r * 0.8} ${r * 0.8} 0 0 1 ${cx + r * 0.3} ${cy + r * 0.74}A${r * 0.66} ${r * 0.8} 0 0 0 ${cx + r * 0.3} ${cy - r * 0.74}Z`} fill={PAL.paperShade} />
      <path d={ticks.join('')} stroke={PAL.line} strokeWidth={Math.max(2, r * 0.07)} strokeLinecap="round" />
      <path d={hand(((hour % 12) + minute / 60) / 12, r * 0.42)} stroke={PAL.ink} strokeWidth={Math.max(3, r * 0.12)} strokeLinecap="round" />
      <path d={hand(minute / 60, r * 0.6)} stroke={PAL.ink} strokeWidth={Math.max(2.4, r * 0.08)} strokeLinecap="round" />
      <circle cx={cx} cy={cy} r={Math.max(2.4, r * 0.09)} fill={PAL.red} />
      <Shine d={`M${cx - r * 0.72} ${cy - r * 0.28}A${r * 0.78} ${r * 0.78} 0 0 1 ${cx - r * 0.3} ${cy - r * 0.72}`} width={Math.max(2.6, r * 0.09)} opacity={0.5} />
    </g>
  );
}

/** A wall-calendar page: red header with rings, a grid of days, one day ringed. */
export function Calendar({ x = 24, y = 22, w = 72, h = 76, mark = 9, header = PAL.red, headerShade = PAL.redShade }: {
  x?: number; y?: number; w?: number; h?: number;
  /** Which cell (0-11) is marked; -1 for none. */
  mark?: number;
  header?: string; headerShade?: string;
}) {
  const cw = (w - 16) / 4;
  const ch = (h - 30) / 3;
  return (
    <g>
      <rect x={x} y={y + 4} width={w} height={h} rx="9" fill={PAL.paperShade} />
      <rect x={x} y={y} width={w} height={h} rx="9" fill={PAL.white} />
      <path d={`M${x} ${y + 9}A9 9 0 0 1 ${x + 9} ${y}H${x + w - 9}A9 9 0 0 1 ${x + w} ${y + 9}V${y + 20}H${x}Z`} fill={header} />
      <path d={`M${x + w * 0.7} ${y}H${x + w - 9}A9 9 0 0 1 ${x + w} ${y + 9}V${y + 20}H${x + w * 0.7}Z`} fill={headerShade} opacity=".6" />
      <rect x={x + w * 0.26} y={y - 6} width="6" height="14" rx="3" fill={PAL.slate} />
      <rect x={x + w * 0.74 - 6} y={y - 6} width="6" height="14" rx="3" fill={PAL.slate} />
      {Array.from({ length: 12 }, (_, i) => {
        const cx = x + 8 + (i % 4) * cw + cw / 2;
        const cy = y + 26 + Math.floor(i / 4) * ch + ch / 2;
        return i === mark ? (
          <circle key={i} cx={cx} cy={cy} r={Math.min(cw, ch) * 0.46} fill={header} />
        ) : (
          <rect key={i} x={cx - cw * 0.28} y={cy - ch * 0.22} width={cw * 0.56} height={ch * 0.44} rx="2" fill={PAL.mist} />
        );
      })}
    </g>
  );
}

/** Round badge with a tick (yes / right / done). */
export function Tick({ x = 60, y = 60, r = 30, color = PAL.ok, shade = PAL.okShade }: { x?: number; y?: number; r?: number; color?: string; shade?: string }) {
  return (
    <g>
      <circle cx={x} cy={y + r * 0.1} r={r} fill={shade} />
      <circle cx={x} cy={y} r={r} fill={color} />
      <path d={`M${x - r * 0.42} ${y + r * 0.02}L${x - r * 0.1} ${y + r * 0.34}L${x + r * 0.46} ${y - r * 0.3}`} fill="none" stroke={PAL.white} strokeWidth={r * 0.24} strokeLinecap="round" strokeLinejoin="round" />
      <Shine d={`M${x - r * 0.66} ${y - r * 0.32}A${r * 0.74} ${r * 0.74} 0 0 1 ${x - r * 0.28} ${y - r * 0.68}`} width={r * 0.12} opacity={0.45} />
    </g>
  );
}

/** Round badge with a cross (no / wrong / not allowed). */
export function Cross({ x = 60, y = 60, r = 30, color = PAL.red, shade = PAL.redShade }: { x?: number; y?: number; r?: number; color?: string; shade?: string }) {
  const k = r * 0.34;
  return (
    <g>
      <circle cx={x} cy={y + r * 0.1} r={r} fill={shade} />
      <circle cx={x} cy={y} r={r} fill={color} />
      <path d={`M${x - k} ${y - k}L${x + k} ${y + k}M${x + k} ${y - k}L${x - k} ${y + k}`} stroke={PAL.white} strokeWidth={r * 0.24} strokeLinecap="round" />
      <Shine d={`M${x - r * 0.66} ${y - r * 0.32}A${r * 0.74} ${r * 0.74} 0 0 1 ${x - r * 0.28} ${y - r * 0.68}`} width={r * 0.12} opacity={0.45} />
    </g>
  );
}

/** A question mark drawn as a shape (not a font glyph), centred on (x, y), `size` tall. */
export function QuestionMark({ x = 60, y = 60, size = 40, color = PAL.sky }: { x?: number; y?: number; size?: number; color?: string }) {
  const s = size / 40;
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M-9 -9Q-9 -19 0 -19Q9 -19 9 -10Q9 -4 2 -1Q0 0.5 0 5" fill="none" stroke={color} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="0" cy="15" r="4.4" fill={color} />
    </g>
  );
}

/** An exclamation mark drawn as a shape, centred on (x, y), `size` tall. */
export function ExclaimMark({ x = 60, y = 60, size = 40, color = PAL.red }: { x?: number; y?: number; size?: number; color?: string }) {
  const s = size / 40;
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M0 -17V4" stroke={color} strokeWidth="8" strokeLinecap="round" />
      <circle cx="0" cy="15" r="4.6" fill={color} />
    </g>
  );
}

/* ------------------------------------------------------------------------------------------
 * People
 * ---------------------------------------------------------------------------------------- */

/** Bust clothes per cast member (head and shoulders, cut off flat at the bottom). */
const BUST_TORSO: Record<CharacterId, ReactNode> = {
  bram: (
    <>
      <path d="M20 134C20 105 36 93 60 93C84 93 100 105 100 134Z" fill={PAL.orange} />
      <path d="M48 92H72L60 114Z" fill={PAL.blue} />
      <path d="M49 93L60 102L55 106ZM71 93L60 102L65 106Z" fill={PAL.blueLight} />
      <path d="M41 98V134M79 98V134" stroke="#eef5f7" strokeWidth="6" />
      <path d="M86 100C95 106 100 117 100 134H84C86 120 87 110 86 100Z" fill={PAL.orangeShade} opacity=".5" />
    </>
  ),
  amina: (
    <>
      <path d="M24 134C24 107 40 96 60 96C80 96 96 107 96 134Z" fill={PAL.green} />
      <path d="M36 104C40 98 48 95 60 95C72 95 80 98 84 104C78 112 70 116 60 116C50 116 42 112 36 104Z" fill={PAL.purple} />
      <path d="M44 103Q60 110 76 103" fill="none" stroke={PAL.purpleShade} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M84 104C92 110 96 120 96 134H82C84 122 85 112 84 104Z" fill={PAL.greenShade} opacity=".6" />
    </>
  ),
  henk: (
    <>
      <path d="M18 134C18 104 35 92 60 92C85 92 102 104 102 134Z" fill={PAL.navy} />
      <path d="M49 91H71L60 109Z" fill={PAL.paper} />
      <path d="M48 93L57 105L52 108ZM72 93L63 105L68 108Z" fill={PAL.paperShade} />
      <path d="M88 100C97 107 102 118 102 134H86C88 120 89 110 88 100Z" fill={PAL.navyShade} opacity=".6" />
    </>
  ),
  jada: (
    <>
      <path d="M24 134C24 107 40 96 60 96C80 96 96 107 96 134Z" fill="#ffc929" />
      <path d="M38 118Q38 113 43 113H77Q82 113 82 118V134H38Z" fill={PAL.sky} />
      <path d="M38 98L44 115M82 98L76 115" stroke={PAL.sky} strokeWidth="6.5" strokeLinecap="round" />
      <circle cx="44" cy="115" r="2.8" fill={PAL.yellow} />
      <circle cx="76" cy="115" r="2.8" fill={PAL.yellow} />
      <path d="M53 98Q60 103 67 98" fill="none" stroke="#e0a800" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M84 104C92 110 96 120 96 134H82C84 122 85 112 84 104Z" fill="#000" opacity=".1" />
    </>
  ),
};

/**
 * A cast member as a head-and-shoulders bust, exactly the cast's own head. (x, y) is the middle
 * of the bottom edge; at scale 1 the bust is 84 wide and 130 tall, so use scale 0.4-0.75.
 */
export function Bust({ who, x = 60, y = 110, scale = 0.7, expr = 'neutral', squint = false, flip = false }: {
  who: CharacterId; x?: number; y?: number; scale?: number; expr?: Expr; squint?: boolean;
  /** Face the other way (mirror). */
  flip?: boolean;
}) {
  return (
    <g transform={`translate(${r1(x)} ${r1(y)}) scale(${flip ? -scale : scale} ${scale}) translate(-60 -134)`}>
      {BUST_TORSO[who]}
      <CastHead who={who} expr={expr} squint={squint} />
    </g>
  );
}

/** A plain round halo behind a picture, for use on coloured backgrounds (unit banners). */
export function Halo({ cx = 60, cy = 60, r = 52, color = PAL.white, opacity = 0.22 }: { cx?: number; cy?: number; r?: number; color?: string; opacity?: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={color} opacity={opacity} />
    </g>
  );
}
