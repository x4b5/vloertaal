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
/**
 * Clear feelings for the word pictures (boos, bang, pijn, ziek...), on top of the calm `Expr`
 * set. Still adult and flat: the feeling is carried by the brow angle, the eye shape and a
 * mouth line, never by big eyes, open laughs or blush.
 *
 *  - angry: inner brows pulled down hard, narrowed eyes, a tight down-turned mouth.
 *  - afraid: inner brows pulled up, slightly wider eyes, the mouth a little open.
 *  - pain: brows pulled together, eyes squeezed shut, a tense open grimace.
 *  - sick: tired brows, heavy half-closed lids, a small down-turned mouth.
 *  - worried: inner brows up, a wavering mouth.
 *  - sad: inner brows up, heavy lids looking down, a clearly down-turned mouth.
 *  - confused: one brow up, the other down, a slanted mouth.
 *  - rest: eyes calmly closed, relaxed brows, a soft smile.
 *  - proud: smiling eyes (closed upward arcs), raised brows, a wide closed smile.
 */
export type Emotion = 'angry' | 'afraid' | 'pain' | 'sick' | 'worried' | 'sad' | 'confused' | 'rest' | 'proud';
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
  /** A clear feeling (word pictures): eyes, brows and mouth together. */
  emote: (e: Emotion, brow: string) => { eyes: ReactNode; brows: ReactNode; mouth: ReactNode; open: boolean };
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
    emote: (e, brow) => emote(s, e, brow),
  };
}

const MOUTH_DARK = '#4a2420';

/** The feeling faces, from the same spec (eye places, brow weight, mouth place) as the calm ones. */
function emote(s: Spec, e: Emotion, color: string) {
  const { lx: L, rx: R, y: Y, mouthY: m, mw: w } = s;
  const [ex, ey] = s.er;
  const bw = r(Math.max(s.browW, 2.1) + 0.5);
  /** Both brows from the inner end (y offset from the eyes) to the outer end; arch < 0 bends up. */
  const brows = (inner: number, outer: number, arch = 0, inner2 = inner, outer2 = outer) =>
    line(
      `M${r(L - 4.4)} ${r(Y + outer)}Q${r(L)} ${r(Y + (inner + outer) / 2 + arch)} ${r(L + 3.8)} ${r(Y + inner)}` +
        `M${r(R - 3.8)} ${r(Y + inner2)}Q${r(R)} ${r(Y + (inner2 + outer2) / 2 + arch)} ${r(R + 4.4)} ${r(Y + outer2)}`,
      color,
      bw,
    );
  const dots = (sx = 1, sy = 1, dx = 0, dy = 0) => (
    <>
      <ellipse cx={r(L + dx)} cy={r(Y + dy)} rx={r(ex * sx)} ry={r(ey * sy)} fill={INK} />
      <ellipse cx={r(R + dx)} cy={r(Y + dy)} rx={r(ex * sx)} ry={r(ey * sy)} fill={INK} />
    </>
  );
  /** Heavy lids: the lower half of each eye under a straight lid line. */
  const lids = (dy = 0) => (
    <>
      {[L, R].map((cx) => (
        <g key={cx}>
          <path d={`M${r(cx - ex - 0.2)} ${r(Y + dy - 0.3)}A${r(ex + 0.2)} ${r(ey)} 0 0 0 ${r(cx + ex + 0.2)} ${r(Y + dy - 0.3)}Z`} fill={INK} />
          {line(`M${r(cx - ex - 1)} ${r(Y + dy - 0.5)}L${r(cx + ex + 1)} ${r(Y + dy - 0.5)}`, INK, 1.4)}
        </g>
      ))}
    </>
  );
  const arcs = (bend: number, dy = 0, wdt = 1.8) =>
    line([L, R].map((cx) => `M${r(cx - 2.9)} ${r(Y + dy)}Q${r(cx)} ${r(Y + dy + bend)} ${r(cx + 2.9)} ${r(Y + dy)}`).join(''), INK, wdt);
  const mouthLine = (d: string, wdt = 2) => line(d, s.lip, wdt);
  switch (e) {
    case 'angry':
      return {
        open: true,
        brows: (
          <>
            {brows(-4, -8.6, 0.3)}
            {line(`M59 ${r(Y - 6.6)}L59.4 ${r(Y - 3.6)}M61 ${r(Y - 6.6)}L60.6 ${r(Y - 3.6)}`, color, 1)}
          </>
        ),
        eyes: (
          <>
            {[L, R].map((cx) => {
              const inner = cx < 60 ? 1 : -1;
              // A narrowed eye whose upper lid slopes down towards the nose.
              return (
                <path
                  key={cx}
                  d={`M${r(cx - inner * (ex + 0.6))} ${r(Y - 1.2)}L${r(cx + inner * (ex + 0.6))} ${r(Y + 0.2)}Q${r(cx + inner * (ex + 0.4))} ${r(Y + 1.9)} ${r(cx)} ${r(Y + 1.9)}Q${r(cx - inner * (ex + 0.6))} ${r(Y + 1.6)} ${r(cx - inner * (ex + 0.6))} ${r(Y - 1.2)}Z`}
                  fill={INK}
                />
              );
            })}
          </>
        ),
        mouth: mouthLine(`M${r(60 - w * 0.95)} ${r(m + 1.5)}Q60 ${r(m - 1.3)} ${r(60 + w * 0.95)} ${r(m + 1.5)}`, 2.2),
      };
    case 'afraid':
      return {
        open: true,
        brows: brows(-10.4, -7.2, -0.6),
        eyes: dots(1.1, 1.22, 0, -0.3),
        mouth: (
          <path
            d={`M${r(60 - w * 0.85)} ${r(m + 0.4)}Q60 ${r(m - 2)} ${r(60 + w * 0.85)} ${r(m + 0.4)}Q60 ${r(m + 2.8)} ${r(60 - w * 0.85)} ${r(m + 0.4)}Z`}
            fill={MOUTH_DARK}
          />
        ),
      };
    case 'pain':
      return {
        open: false,
        brows: brows(-4.6, -7.4, 0.6),
        // Eyes squeezed shut: a short pinched line each, pulled in towards the nose.
        eyes: line(
          [L, R]
            .map((cx) => {
              const i = cx < 60 ? 1 : -1;
              return `M${r(cx - i * 3)} ${r(Y - 1.6)}L${r(cx + i * 2.6)} ${r(Y + 0.1)}L${r(cx - i * 3)} ${r(Y + 1.6)}`;
            })
            .join(''),
          INK,
          1.8,
        ),
        mouth: (
          <g>
            <rect x={r(60 - w * 1.1)} y={r(m - 1.8)} width={r(w * 2.2)} height="3.8" rx="1.5" fill={MOUTH_DARK} />
            <rect x={r(60 - w * 0.9)} y={r(m - 1.4)} width={r(w * 1.8)} height="1.3" rx=".5" fill="#fff" opacity=".9" />
          </g>
        ),
      };
    case 'sick':
      return {
        open: true,
        brows: brows(-8, -6.2, 0),
        eyes: lids(0.4),
        mouth: mouthLine(`M${r(60 - w * 0.7)} ${r(m + 1)}Q60 ${r(m - 0.6)} ${r(60 + w * 0.7)} ${r(m + 1)}`, 1.8),
      };
    case 'worried':
      return {
        open: true,
        brows: brows(-10.4, -6, -0.2),
        eyes: dots(1, 1.08),
        mouth: mouthLine(
          `M${r(60 - w)} ${r(m + 0.8)}Q${r(60 - w * 0.5)} ${r(m - 1)} 60 ${r(m + 0.3)}Q${r(60 + w * 0.5)} ${r(m + 1.6)} ${r(60 + w)} ${r(m - 0.1)}`,
          1.9,
        ),
      };
    case 'sad':
      return {
        open: true,
        brows: brows(-9.4, -6, 0),
        eyes: lids(0.9),
        mouth: mouthLine(`M${r(60 - w * 0.95)} ${r(m + 1.9)}Q60 ${r(m - 1.7)} ${r(60 + w * 0.95)} ${r(m + 1.9)}`, 2.1),
      };
    case 'confused':
      return {
        open: true,
        // One brow lifted and arched, the other pulled down: "huh?"
        brows: brows(-8.6, -8, -2.4, -5, -6.6),
        eyes: dots(1, 1.04, 0.5, -0.3),
        mouth: mouthLine(`M${r(60 - w * 0.8)} ${r(m + 1.1)}L${r(60 + w * 0.85)} ${r(m - 0.7)}`, 2),
      };
    case 'rest':
      return {
        open: false,
        brows: brows(-6.8, -6.6, -0.8),
        eyes: arcs(1.9, 0.2),
        mouth: mouthLine(`M${r(60 - w * 0.9)} ${r(m)}Q60 ${r(m + 2.2)} ${r(60 + w * 0.9)} ${r(m - 0.2)}`, 1.9),
      };
    case 'proud':
    default:
      return {
        open: false,
        brows: brows(-8, -7.6, -1),
        eyes: arcs(-2.2, 0.9, 1.9),
        mouth: (
          <path
            d={`M${r(60 - w * 1.2)} ${r(m - 1)}Q60 ${r(m + 4.8)} ${r(60 + w * 1.2)} ${r(m - 1)}Q60 ${r(m + 2)} ${r(60 - w * 1.2)} ${r(m - 1)}Z`}
            fill={s.lip}
            stroke={s.lip}
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        ),
      };
  }
}

const r = (n: number) => Math.round(n * 100) / 100;

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
