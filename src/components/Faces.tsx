/**
 * Faces for the Vloertaal cast, in the flat, sleek house style: calm and real. One system for
 * all four (the same eye size, line weights and mouth), with small personal differences:
 *
 *  - Bram: straight, fairly thick brows; an easy, slightly lopsided closed smile.
 *  - Amina: thin arched brows and a fine lash line; a small, soft smile.
 *  - Henk: heavy grey brows (his glasses and moustache are in Characters.tsx); a short mouth.
 *  - Jada: a fine lash line, one brow a touch higher; a small one-sided smile.
 *
 * Eyes are small solid ovals (no white discs, no catch-lights), noses a short shade line, and
 * every mouth stays closed. Expressions are subtle: thinking lifts one brow and looks aside;
 * pleased narrows the eyes a little with a wider closed smile; disappointed lifts the inner
 * brows and flattens the mouth; joy is pleased with the brows up. While talking the mouth only
 * opens a little (TALK_SEQUENCE in Characters.tsx).
 *
 * Coordinates are in the 120×140 character box; the face sits roughly in x 40–80, y 30–86,
 * with the eyes on y 60 at x 52.5 and 67.5 and the mouth around y 76.
 */
import type { ReactNode } from 'react';

export type Expr = 'neutral' | 'thinking' | 'pleased' | 'disappointed' | 'joy';
/** 0 closed, 1 small open, 2 a little more open, 3 rounded. */
export type TalkFrame = 0 | 1 | 2 | 3;

const INK = '#2a2321';

export interface FaceKit {
  /** Eyes + lids (blink together) */
  eyes: (e: Expr, skin: string) => ReactNode;
  brows: (e: Expr, color: string) => ReactNode;
  nose: (shade: string) => ReactNode;
  mouth: (e: Expr) => ReactNode;
  talk: (f: TalkFrame) => ReactNode;
  /** Cheek blush per expression (opacity). The flat style has none. */
  blush?: (e: Expr) => number;
}

const line = (d: string, color: string, w: number) => (
  <path d={d} fill="none" stroke={color} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
);

interface Spec {
  /** Eye centres (x) and height (y). */
  lx: number;
  rx: number;
  y: number;
  /** Eye radii. */
  er: [number, number];
  /** A fine lash line over the outer half of each eye. */
  lash?: boolean;
  brow: Record<Expr, string>;
  browW: number;
  mouthY: number;
  /** Mouth half-width and the colour of the lip line. */
  mw: number;
  lip: string;
  /** Neutral smile: how much the right corner sits higher (lopsided smile). */
  tilt: number;
}

/** Eye gaze per expression. */
const GAZE: Record<Expr, [number, number]> = {
  neutral: [0.3, 0],
  thinking: [1, -0.9],
  pleased: [0, 0],
  disappointed: [0, 0.6],
  joy: [0, 0],
};

function kit(s: Spec): FaceKit {
  const eye = (cx: number, e: Expr) => {
    const [gx, gy] = GAZE[e];
    const [rx, ry] = s.er;
    const narrow = e === 'pleased' || e === 'joy';
    const x = cx + gx;
    const y = s.y + gy;
    const side = cx < 60 ? -1 : 1;
    return (
      <g key={cx}>
        <ellipse cx={x} cy={narrow ? y - 0.2 : y} rx={rx} ry={narrow ? ry * 0.72 : ry} fill={INK} />
        {s.lash && line(`M${cx - side * 0.6} ${s.y - ry - 0.7}Q${cx + side * 2} ${s.y - ry - 1.2} ${cx + side * (rx + 1.8)} ${s.y - ry + 0.2}`, INK, 1.1)}
      </g>
    );
  };
  const m = s.mouthY;
  const w = s.mw;
  return {
    eyes: (e) => (
      <>
        {eye(s.lx, e)}
        {eye(s.rx, e)}
      </>
    ),
    brows: (e, c) => line(s.brow[e], c, s.browW),
    nose: (shade) => line('M60.8 62.4L58.8 69.2Q60 70.2 61.8 69.6', shade, 1.7),
    mouth: (e) => {
      switch (e) {
        case 'thinking':
          return line(`M${60 - w * 0.55} ${m + 0.6}L${60 + w * 0.75} ${m - 0.2}`, s.lip, 1.7);
        case 'disappointed':
          return line(`M${60 - w * 0.8} ${m + 1}Q60 ${m - 0.6} ${60 + w * 0.8} ${m + 1}`, s.lip, 1.7);
        case 'pleased':
        case 'joy':
          // A wider, closed smile: a thin crescent, no teeth.
          return (
            <path
              d={`M${60 - w * 1.1} ${m - 0.8}Q60 ${m + 4.2} ${60 + w * 1.1} ${m - 0.8 - s.tilt * 0.5}Q60 ${m + 2} ${60 - w * 1.1} ${m - 0.8}Z`}
              fill={s.lip}
              stroke={s.lip}
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          );
        default:
          return line(`M${60 - w} ${m}Q60 ${m + 2.4} ${60 + w} ${m - s.tilt}`, s.lip, 1.7);
      }
    },
    talk: (f) => {
      // Subtle: the closed mouth, or a small dark opening (no teeth, no tongue).
      if (f === 0) return line(`M${60 - w} ${m}Q60 ${m + 2} ${60 + w} ${m - s.tilt}`, s.lip, 1.7);
      const [rx, ry] = f === 1 ? [w * 0.8, 1.2] : f === 2 ? [w * 0.85, 2] : [w * 0.55, 1.7];
      return <ellipse cx="60" cy={m + 0.6} rx={rx} ry={ry} fill="#4a2420" />;
    },
    blush: () => 0,
  };
}

/* ---------- Bram: easy-going, straight brows, lopsided smile ---------- */

const bram = kit({
  lx: 52.4, rx: 67.6, y: 60.4, er: [2.1, 2.6],
  browW: 2.6,
  brow: {
    neutral: 'M48.6 54.4L56 53.6M64 53.6L71.4 54.2',
    thinking: 'M48.6 55L56 54.8M64 52.2Q68 50.6 71.6 52',
    pleased: 'M48.6 54Q52.4 52.8 56 53.4M64 53.4Q67.6 52.8 71.4 54',
    disappointed: 'M48.8 54.6L56 52.8M64 52.8L71.2 54.6',
    joy: 'M48.6 53.2Q52.4 51.8 56 52.6M64 52.6Q67.6 51.8 71.4 53.2',
  },
  mouthY: 76, mw: 4.6, lip: '#7a3b2c', tilt: 0.9,
});

/* ---------- Amina: soft, thin arched brows ---------- */

const amina = kit({
  lx: 52.8, rx: 67.2, y: 60.6, er: [2, 2.5], lash: true,
  browW: 1.7,
  brow: {
    neutral: 'M49 54.4Q52.4 52.6 56 53.6M64 53.6Q67.6 52.6 71 54.4',
    thinking: 'M49 55Q52.4 54 56 54.6M64 52.6Q67.6 50.6 71 52.6',
    pleased: 'M49 54Q52.4 52.4 56 53.2M64 53.2Q67.6 52.4 71 54',
    disappointed: 'M49.2 54.6Q52.6 53.8 56 52.6M64 52.6Q67.4 53.8 70.8 54.6',
    joy: 'M49 53.2Q52.4 51.4 56 52.4M64 52.4Q67.6 51.4 71 53.2',
  },
  mouthY: 75.6, mw: 3.8, lip: '#5e2a22', tilt: 0.4,
});

/* ---------- Henk: heavy grey brows, short mouth under the moustache ---------- */

const henk = kit({
  lx: 52.2, rx: 67.8, y: 60.2, er: [1.9, 2.3],
  browW: 3,
  brow: {
    neutral: 'M47.6 54.2L56 54M64 54L72.4 54.2',
    thinking: 'M47.6 55L56 55M64 52.2Q68.2 50.8 72.4 52.4',
    pleased: 'M47.6 53.8Q52 53 56 53.6M64 53.6Q68 53 72.4 53.8',
    disappointed: 'M47.8 54.4L56 52.8M64 52.8L72.2 54.4',
    joy: 'M47.6 53Q52 52 56 52.8M64 52.8Q68 52 72.4 53',
  },
  mouthY: 78.2, mw: 3.6, lip: '#7a3b2c', tilt: 0,
});

/* ---------- Jada: lash line, one brow a little higher, one-sided smile ---------- */

const jada = kit({
  lx: 52.6, rx: 67.4, y: 60.6, er: [2.1, 2.5], lash: true,
  browW: 2.1,
  brow: {
    neutral: 'M48.8 54.4Q52.4 53.2 56 53.8M64 53.2Q67.6 51.6 71.2 53',
    thinking: 'M48.8 55Q52.4 54.4 56 54.6M64 52Q67.6 50 71.2 51.8',
    pleased: 'M48.8 54Q52.4 52.6 56 53.4M64 53Q67.6 51.8 71.2 53.2',
    disappointed: 'M49 54.6Q52.6 53.8 56 52.6M64 52.6Q67.4 53.8 71 54.6',
    joy: 'M48.8 53.2Q52.4 51.6 56 52.6M64 52.2Q67.6 50.8 71.2 52.2',
  },
  mouthY: 75.8, mw: 4.2, lip: '#3d1d14', tilt: 1.2,
});

export const FACES = { bram, amina, henk, jada };
