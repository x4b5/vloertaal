import { useId, type ReactNode } from 'react';
import { CastHead, type CharacterId } from '../components/Characters';
import { twinkle } from '../components/Celebrate';
import type { Emotion, Expr } from '../components/Faces';

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
  yellow: '#ffc414',
  yellowShade: '#e0a800',
  yellowLight: '#ffd94d',
  yellowShine: '#fff3b0',
  // Hi-vis orange
  orange: '#ff7a00',
  orangeShade: '#d96500',
  orangeLight: '#ff9a3c',
  // Work-shirt blue and sky blue
  blue: '#1a86d8',
  blueShade: '#126bb0',
  blueLight: '#5fb8f5',
  sky: '#1592db',
  skyShade: '#0f73ae',
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
  ok: '#137a55',
  okShade: '#0d5a3f',
  // Headscarf purple
  purple: '#8e44c9',
  purpleShade: '#6f2fa6',
  purpleLight: '#b07ae6',
  // Alarm red
  red: '#e0452f',
  redShade: '#b5341f',
  redLight: '#f0b8ab',
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
  // Slim fingers with squarish tips (no sausage fingers or balloon palms).
  const finger = (fx: number, top: number, bottom = -18, w = 6.2) => (
    <rect x={fx - w / 2} y={top} width={w} height={bottom - top} rx={2.2} fill={s} />
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
          <path d="M-12.6 -27H12.6V-6L8 1H-8L-12.6 -6Z" fill={s} strokeLinejoin="round" stroke={s} strokeWidth="1.6" />
          <rect x="-15" y="-24" width="7" height="21" rx="2.6" fill={s} transform="rotate(-38 -11.5 -8)" />
          <path d="M-6.2 -38V-28M0.2 -40V-28M6.8 -36V-27" stroke={sh} strokeWidth="1.3" strokeLinecap="round" opacity=".8" />
          <path d="M-5 -12Q0 -8 6 -12" fill="none" stroke={sh} strokeWidth="1.5" strokeLinecap="round" opacity=".7" />
        </>
      );
      break;
    case 'point':
      body = (
        <>
          {finger(-8, -48, -20)}
          <path d="M-12.6 -25H12.6V-5L8 1H-8L-12.6 -5Z" fill={s} strokeLinejoin="round" stroke={s} strokeWidth="1.6" />
          <path d="M-2 -21H9M-2 -14H9M-1 -7H8" stroke={sh} strokeWidth="1.5" strokeLinecap="round" />
          <rect x="-16" y="-14" width="17" height="7" rx="2.6" fill={s} transform="rotate(-12 -7 -10)" />
          <path d="M-12 -10H-2" stroke={sh} strokeWidth="1.2" strokeLinecap="round" opacity=".6" transform="rotate(-12 -7 -10)" />
        </>
      );
      break;
    case 'thumb':
      body = (
        <>
          <rect x="-11" y="-44" width="8" height="26" rx="3" fill={s} />
          <path d="M-12.6 -24H13.6V-5L9 1H-8L-12.6 -5Z" fill={s} strokeLinejoin="round" stroke={s} strokeWidth="1.6" />
          <path d="M3 -18H13M3 -11H13M3 -4H12" stroke={sh} strokeWidth="1.6" strokeLinecap="round" />
          <path d="M-9 -38Q-7 -40 -5 -38" fill="none" stroke={sh} strokeWidth="1.2" strokeLinecap="round" opacity=".7" />
        </>
      );
      break;
    case 'hold':
      // Fingers curled round something held in front (put the object over the gap at y = -20).
      body = (
        <>
          <path d="M-12.6 -34H12.6V-5L8 1H-8L-12.6 -5Z" fill={s} strokeLinejoin="round" stroke={s} strokeWidth="1.6" />
          <path d="M-13 -24H6M-13 -16H7M-13 -8H6" stroke={sh} strokeWidth="1.6" strokeLinecap="round" />
          <rect x="4.5" y="-36" width="8" height="20" rx="3" fill={s} />
        </>
      );
      break;
    default:
      body = (
        <>
          <path d="M-12.6 -26H12.6V-5L8 1H-8L-12.6 -5Z" fill={s} strokeLinejoin="round" stroke={s} strokeWidth="1.6" />
          {knuckles}
          <rect x="-15" y="-13" width="18" height="7.4" rx="2.6" fill={s} transform="rotate(-8 -6 -9)" />
          <path d="M-11 -9H-1" stroke={sh} strokeWidth="1.2" strokeLinecap="round" opacity=".6" />
        </>
      );
  }
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${mirror ? -scale : scale} ${scale})`}>
      {sleeve && (
        <>
          <rect x="-14" y="4" width="28" height="40" rx="2" fill={sleeve[0]} />
          <rect x="-14.5" y="1" width="29" height="8" rx="1.6" fill={sleeve[1]} />
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
export function Bubble({ x = 14, y = 14, w = 70, h = 46, tail = 'left', fill = '#e3f5ff', depth = PAL.ice, children }: {
  x?: number; y?: number; w?: number; h?: number;
  tail?: 'left' | 'right' | 'none';
  /** Light tint by default, so the bubble also shows on a white card. */
  fill?: string; depth?: string;
  children?: ReactNode;
}) {
  const r = Math.min(14, h / 2);
  const tx = tail === 'left' ? x + w * 0.26 : x + w * 0.74;
  const tip = tail === 'left' ? tx - 9 : tx + 9;
  const bottom = tail === 'none' ? '' : `H${r1(tx + 8)}L${r1(tip)} ${y + h + 13}L${r1(tx - 8)} ${y + h}`;
  const d = `M${x + r} ${y}H${x + w - r}A${r} ${r} 0 0 1 ${x + w} ${y + r}V${y + h - r}A${r} ${r} 0 0 1 ${x + w - r} ${y + h}` +
    `${bottom}H${x + r}A${r} ${r} 0 0 1 ${x} ${y + h - r}V${y + r}A${r} ${r} 0 0 1 ${x + r} ${y}Z`;
  return (
    <g strokeLinejoin="round">
      <path d={d} fill={depth} stroke={depth} strokeWidth="2" transform="translate(0 3.5)" />
      <path d={d} fill={fill} stroke={fill} strokeWidth="2" />
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
export function Motion({ x, y, dir = -90, spread = 60, n = 3, len = 9, gap = 6, color = PAL.line, width = 3.2 }: {
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
      <Shade color={rimShade} opacity={1} at={[cx + r * 1.25, cy, r * 0.6, r * 1.4]}>
        <circle cx={cx} cy={cy} r={r} fill={rim} />
      </Shade>
      <Shade color={PAL.paperShade} opacity={1} at={[cx + r * 1.1, cy, r * 0.55, r * 1.2]}>
        <circle cx={cx} cy={cy} r={r * 0.8} fill={PAL.white} />
      </Shade>
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
const BUST = 'M25 134L26.5 109Q28.5 96.5 42 93.5H78Q91.5 96.5 93.5 109L95 134Z';
const BUST_SHADE = <path d="M81 92L100 92L100 134L84 134Z" fill="#000" opacity=".13" />;
const bustClip = (id: string, art: ReactNode) => (
  <>
    <defs>
      <clipPath id={id}><path d={BUST} /></clipPath>
    </defs>
    <g clipPath={`url(#${id})`}>{art}</g>
  </>
);

/** Bust clothes per cast member (head and shoulders, cut off flat at the bottom): slim, straight
 *  shoulders, the same outfits as the cast. */
const BUST_TORSO: Record<CharacterId, (id: string) => ReactNode> = {
  bram: (id) => bustClip(id, (
    <>
      <path d={BUST} fill={PAL.orange} />
      <path d="M50 91H70L60 107Z" fill={PAL.blue} />
      <path d="M51 92L60 99L56 103ZM69 92L60 99L64 103Z" fill={PAL.blueLight} />
      <path d="M42.5 96V134M77.5 96V134" stroke="#eef5f7" strokeWidth="5" />
      {BUST_SHADE}
    </>
  )),
  amina: (id) => bustClip(id, (
    <>
      <path d={BUST} fill={PAL.green} />
      <path d="M36 92L43 96H77L84 92L86 105H34Z" fill={PAL.purple} />
      <path d="M78 96L84 92L86 105H80Z" fill={PAL.purpleShade} />
      <path d="M60 105V134" stroke={PAL.greenShade} strokeWidth="2" />
      {BUST_SHADE}
    </>
  )),
  henk: (id) => bustClip(id, (
    <>
      <path d={BUST} fill={PAL.navy} />
      <path d="M50 91H70L60 106Z" fill={PAL.paper} />
      <path d="M50 92L58 101L54 104ZM70 92L62 101L66 104Z" fill={PAL.paperShade} />
      <path d="M60 106V134" stroke={PAL.navyShade} strokeWidth="1.8" />
      {BUST_SHADE}
    </>
  )),
  jada: (id) => bustClip(id, (
    <>
      <path d={BUST} fill="#ffc929" />
      <path d="M40 115H80V134H40Z" fill={PAL.sky} />
      <path d="M40.5 94L44 115M79.5 94L76 115" stroke={PAL.sky} strokeWidth="5.5" />
      <rect x="42" y="112" width="4" height="4" rx=".8" fill={PAL.yellow} />
      <rect x="74" y="112" width="4" height="4" rx=".8" fill={PAL.yellow} />
      <path d="M54 94.6L60 99L66 94.6" fill="none" stroke="#e0a800" strokeWidth="2" strokeLinejoin="round" />
      {BUST_SHADE}
    </>
  )),
};

/** Sleeve colour and its darker cuff per cast member (Bram's blue shirt under the vest). */
const BUST_SLEEVE: Record<CharacterId, [string, string]> = {
  bram: [PAL.blue, PAL.blueShade],
  amina: ['#2f8f3e', '#23722f'],
  henk: ['#2d5a92', PAL.navyShade],
  jada: ['#ffc929', PAL.yellowShade],
};

/**
 * Body language for a bust, in the bust's own 120 x 140 box (shoulders at y 93-110, cut off at
 * y 134). Slim forearms in the sleeve colour, squarish hands, flat fills.
 *
 *  - crossed: arms folded high on the chest, fists tucked (angry, closed off).
 *  - shrug: both forearms out to the sides, palms up ("I don't know / I don't understand").
 *  - forehead: one hand laid on the forehead (sick, feverish).
 *  - clutch: one hand grips the other upper arm (pain there).
 *  - raised: both hands up in front of the chest, palms out (afraid, "stop").
 */
export type BustArms = 'crossed' | 'shrug' | 'forehead' | 'clutch' | 'raised';

function BustArmsArt({ who, arms }: { who: CharacterId; arms: BustArms }) {
  const [s, sh] = SKIN[who];
  const [cloth, cuff] = BUST_SLEEVE[who];
  const bare = who === 'jada';
  /** A forearm from a to b, thickness t: sleeve (or bare skin) with a darker cuff at b. */
  const fore = (a: Pt, b: Pt, t = 12) => {
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const ang = (Math.atan2(b[1] - a[1], b[0] - a[0]) * 180) / Math.PI;
    return (
      <g transform={`translate(${r1(a[0])} ${r1(a[1])}) rotate(${r1(ang)})`}>
        <rect x={-t / 2} y={-t / 2} width={r1(len + t / 2)} height={t} rx={t / 2} fill={bare ? s : cloth} />
        {!bare && <rect x={r1(len - 4)} y={-t / 2} width="4" height={t} fill={cuff} />}
        <rect x={-t / 2} y={r1(t * 0.1)} width={r1(len + t / 2)} height={r1(t * 0.4)} fill="#000" opacity=".1" />
      </g>
    );
  };
  /** A fist seen from the front: four finger blocks over a palm. */
  const fist = (x: number, y: number, rot = 0, k = 1) => (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${k})`}>
      <rect x="-7" y="-7.5" width="14" height="15" rx="3" fill={s} />
      <path d="M-7 -2.4H6.6M-7 2.4H6.6" stroke={sh} strokeWidth="1.3" />
      <rect x="1.8" y="-7.5" width="5.2" height="15" rx="2.6" fill={sh} opacity=".55" />
    </g>
  );
  /** An open hand, palm up, fingers along +x from the wrist at (0, 0). */
  const palmUp = (x: number, y: number, rot: number, flip = false, k = 1) => (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${k} ${flip ? -k : k})`}>
      <rect x="-2" y="-4.6" width="17" height="8.6" rx="2.4" fill={s} />
      <rect x="1" y="-9.6" width="4.6" height="8" rx="2.2" fill={s} transform="rotate(-24 3 -4)" />
      <path d="M6 -0.6H14" stroke={sh} strokeWidth="1.2" strokeLinecap="round" />
    </g>
  );
  switch (arms) {
    case 'crossed':
      return (
        <g>
          {/* The lower arm (from the left), its fist tucked under the right upper arm */}
          {fore([28, 126], [86, 119], 13)}
          {fist(90, 116, -10)}
          {/* The upper arm (from the right) over it, with a crisp shadow underneath */}
          <path d="M36 121L94 127L94 131L36 125Z" fill="#000" opacity=".18" />
          {fore([94, 121], [34, 113], 13)}
          {fist(29, 110, 8)}
        </g>
      );
    case 'shrug':
      return (
        <g>
          {fore([31, 130], [10, 104], 12)}
          {palmUp(8, 102, 200, true, 1.45)}
          {fore([89, 130], [110, 104], 12)}
          {palmUp(112, 102, -20, false, 1.45)}
        </g>
      );
    case 'forehead':
      return (
        <g>
          {fore([32, 112], [16, 82], 12)}
          {fore([16, 82], [40, 49], 11)}
          {/* The back of the hand flat on the forehead, fingers across it */}
          <g transform="translate(40 49) rotate(-10)">
            <rect x="-2" y="-5.6" width="22" height="11" rx="3" fill={s} />
            <path d="M8 -2H19M8 1.8H19" stroke={sh} strokeWidth="1.2" strokeLinecap="round" />
            <rect x="-2" y="1.4" width="22" height="4.2" rx="2" fill={sh} opacity=".5" />
          </g>
        </g>
      );
    case 'clutch':
      return (
        <g>
          {fore([32, 130], [82, 112], 12)}
          {/* Fingers wrapped round the other upper arm */}
          <g transform="translate(88 108) rotate(-8)">
            <rect x="-6" y="-9" width="13" height="18" rx="3" fill={s} />
            <path d="M-6 -4.4H6M-6 0H6M-6 4.4H6" stroke={sh} strokeWidth="1.3" />
            <rect x="-8.6" y="-4" width="6" height="11" rx="2.6" fill={s} />
          </g>
        </g>
      );
    case 'raised':
    default:
      return (
        <g>
          {fore([22, 136], [27, 104], 12)}
          {fore([98, 136], [93, 104], 12)}
          <Hand pose="open" x={27} y={106} rotate={-6} scale={0.62} skin={SKIN[who]} />
          <Hand pose="open" x={93} y={106} rotate={6} scale={0.62} skin={SKIN[who]} mirror />
        </g>
      );
  }
}

/**
 * A cast member as a head-and-shoulders bust, exactly the cast's own head. (x, y) is the middle
 * of the bottom edge; at scale 1 the bust is 84 wide and 130 tall, so use scale 0.4-0.75.
 * For pictures about feelings: `emotion` gives a clear (still calm, adult) face, `tilt` tilts
 * the head (degrees, + is clockwise) and `arms` adds body language (see BustArms).
 */
export function Bust({ who, x = 60, y = 110, scale = 0.7, expr = 'neutral', emotion, squint = false, flip = false, talk = false, tilt = 0, arms, bold = false }: {
  who: CharacterId; x?: number; y?: number; scale?: number; expr?: Expr; squint?: boolean;
  /** A clear feeling instead of the calm `expr`. */
  emotion?: Emotion;
  /** Mouth a little open, mid-word. */
  talk?: boolean;
  /** Face the other way (mirror). */
  flip?: boolean;
  /** Head tilt around the neck, in degrees. */
  tilt?: number;
  /** Body language: arms and hands in front of the bust. */
  arms?: BustArms;
  /** Features a little larger and bolder, for small pictures. */
  bold?: boolean;
}) {
  const id = `bt-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  return (
    <g transform={`translate(${r1(x)} ${r1(y)}) scale(${flip ? -scale : scale} ${scale}) translate(-60 -134)`}>
      {BUST_TORSO[who](id)}
      <g transform={tilt ? `rotate(${tilt} 60 96)` : undefined}>
        <CastHead who={who} expr={expr} emotion={emotion} squint={squint} talk={talk} bold={bold} gaze={[0, 0]} />
      </g>
      {arms && <BustArmsArt who={who} arms={arms} />}
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
