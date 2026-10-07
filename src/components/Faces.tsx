/**
 * Faces for the Vloertaal cast. Every character has its own eyes, brows, nose and mouths,
 * and its own resting expression, so they read as four different people rather than one
 * face under four hats:
 *
 *  - Bram (mascot): big round eager eyes, lopsided grin, one brow higher than the other.
 *  - Amina: round shiny eyes with lashes, gentle worried brows, a small shy wavy smile.
 *  - Henk: deadpan supervisor; small heavy-lidded eyes behind his glasses, flat bushy brows,
 *    a short flat mouth under the moustache.
 *  - Jada: the smirker; almond eyes with a lash wing, one eye half-lidded, one brow cocked,
 *    a one-sided smile.
 *
 * Expression sheet per character: neutral (resting), thinking, pleased, disappointed, and
 * joy (a right answer): Bram's eyes pop wide open, Amina squeezes hers shut with a small open
 * smile, Henk and Jada each wink (on opposite sides) with a cocked brow and an open smirk. While talking, the mouth cycles through
 * closed / small open / wide open / round (see TALK_SEQUENCE in Characters.tsx).
 *
 * Coordinates are in the 120×140 character box; the face sits roughly in x 33–87, y 26–90.
 */
import type { ReactNode } from 'react';

export type Expr = 'neutral' | 'thinking' | 'pleased' | 'disappointed' | 'joy';
/** 0 closed, 1 small open, 2 wide open, 3 round. */
export type TalkFrame = 0 | 1 | 2 | 3;

const INK = '#2f2a28';
const MOUTH = '#7a2433';
const TONGUE = '#ff7c8a';
const WHITE = '#fff';

export interface FaceKit {
  /** Eyes + lids (blink together) */
  eyes: (e: Expr, skin: string) => ReactNode;
  brows: (e: Expr, color: string) => ReactNode;
  nose: (shade: string) => ReactNode;
  mouth: (e: Expr) => ReactNode;
  talk: (f: TalkFrame) => ReactNode;
  /** Cheek blush per expression (opacity). */
  blush?: (e: Expr) => number;
}

/* ---------- eye building blocks ---------- */

interface EyeSpec {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  /** Pupil radius and gaze offset. */
  pr: number;
  gx?: number;
  gy?: number;
  /** Upper lid: how far down it comes at the inner/outer side (0 = open, 1 = shut). */
  lid?: number;
  lidOuter?: number;
  /** Lower lid pushed up (0 = none). Curved, for smiling or smug eyes. */
  lower?: number;
  /** Which side is "outer" (for tilted lids): -1 left eye, 1 right eye. */
  side: -1 | 1;
  iris?: string;
  /** Draw a thick lash line along the top (Jada), lashes (Amina). */
  liner?: 'wing' | 'lashes' | 'line';
}

const hw = (rx: number, ry: number, cy: number, y: number) => rx * Math.sqrt(Math.max(0, 1 - ((y - cy) / ry) ** 2));
const r1 = (n: number) => Math.round(n * 10) / 10;

function Eye(s: EyeSpec & { skin: string }) {
  const { cx, cy, rx, ry, pr, gx = 0, gy = 0, side, skin } = s;
  const lid = s.lid ?? 0;
  const lidOuter = s.lidOuter ?? lid;
  const top = cy - ry;
  // Lid edge from the inner to the outer corner; inner is towards the nose.
  const yIn = top + 2 * ry * lid;
  const yOut = top + 2 * ry * lidOuter;
  const xInSign = -side; // inner corner is on the opposite side of `side`
  const leftY = xInSign < 0 ? yIn : yOut;
  const rightY = xInSign < 0 ? yOut : yIn;
  const lx = cx - hw(rx, ry, cy, leftY);
  const rx2 = cx + hw(rx, ry, cy, rightY);
  const large = (leftY + rightY) / 2 > cy ? 1 : 0;
  const lidPath = `M${r1(lx)} ${r1(leftY)}A${rx} ${ry} 0 ${large} 1 ${r1(rx2)} ${r1(rightY)}Z`;
  const lower = s.lower ?? 0;
  const yLow = cy + ry - 2 * ry * lower;
  const lw = hw(rx, ry, cy, yLow);
  const lowPath = `M${r1(cx + lw)} ${r1(yLow)}Q${cx} ${r1(yLow - ry * 0.55 * lower - 1)} ${r1(cx - lw)} ${r1(yLow)}A${rx} ${ry} 0 ${yLow < cy ? 1 : 0} 0 ${r1(cx + lw)} ${r1(yLow)}Z`;
  const px = cx + gx;
  const py = cy + gy;
  return (
    <g>
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={WHITE} />
      {s.iris && <circle cx={px} cy={py} r={pr * 1.45} fill={s.iris} />}
      <circle cx={px} cy={py} r={pr} fill="#1b1614" />
      <circle cx={px + pr * 0.38} cy={py - pr * 0.45} r={pr * 0.42} fill={WHITE} />
      {s.liner === 'lashes' && <circle cx={px - pr * 0.45} cy={py + pr * 0.5} r={pr * 0.2} fill={WHITE} />}
      {lid > 0.02 || lidOuter > 0.02 ? (
        <>
          <path d={lidPath} fill={skin} />
          <path d={`M${r1(lx)} ${r1(leftY)}L${r1(rx2)} ${r1(rightY)}`} stroke={INK} strokeWidth={s.liner === 'wing' ? 2.6 : 2} strokeLinecap="round" />
        </>
      ) : (
        s.liner && (
          <path
            d={`M${cx - rx} ${cy - 1}A${rx} ${ry} 0 0 1 ${cx + rx} ${cy - 1}`}
            fill="none"
            stroke={INK}
            strokeWidth={s.liner === 'wing' ? 2.6 : 1.6}
            strokeLinecap="round"
          />
        )
      )}
      {lower > 0.02 && <path d={lowPath} fill={skin} />}
      {lower > 0.02 && (
        <path d={`M${r1(cx + lw)} ${r1(yLow)}Q${cx} ${r1(yLow - ry * 0.55 * lower - 1)} ${r1(cx - lw)} ${r1(yLow)}`} fill="none" stroke={INK} strokeWidth="1.4" strokeLinecap="round" opacity=".55" />
      )}
      {s.liner === 'wing' && (
        <path
          d={side > 0 ? `M${cx + rx - 1} ${r1(cy - ry * 0.25)}l4.2 -2.6` : `M${cx - rx + 1} ${r1(cy - ry * 0.25)}l-4.2 -2.6`}
          stroke={INK}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      )}
      {s.liner === 'lashes' && (
        <path
          d={side > 0 ? `M${cx + rx - 1.4} ${cy - ry + 2.6}l3 -2.4M${cx + rx + 0.2} ${cy - ry + 5.6}l3.2 -1` : `M${cx - rx + 1.4} ${cy - ry + 2.6}l-3 -2.4M${cx - rx - 0.2} ${cy - ry + 5.6}l-3.2 -1`}
          stroke={INK}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      )}
    </g>
  );
}

/** Eyes squeezed shut with joy (Amina's happy face). */
const joyArcs = (lx: number, rx: number, y: number, w: number, h: number, sw = 3.4) => (
  <path
    d={`M${lx - w} ${y}Q${lx} ${y - h} ${lx + w} ${y}M${rx - w} ${y}Q${rx} ${y - h} ${rx + w} ${y}`}
    fill="none"
    stroke={INK}
    strokeWidth={sw}
    strokeLinecap="round"
  />
);

const stroke = (d: string, color = INK, w = 2.8) => <path d={d} fill="none" stroke={color} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />;

/** Four talking mouth shapes around a centre. `s` scales them. */
function talkShape(f: TalkFrame, cx: number, cy: number, s = 1, lip = INK): ReactNode {
  switch (f) {
    case 0:
      return stroke(`M${cx - 5 * s} ${cy}Q${cx} ${cy + 1.6 * s} ${cx + 5 * s} ${cy - 0.6 * s}`, lip, 2.8);
    case 1:
      return (
        <g>
          <ellipse cx={cx} cy={cy + 0.6 * s} rx={4.6 * s} ry={2.6 * s} fill={MOUTH} />
          <path d={`M${cx - 3 * s} ${cy - 1.2 * s}H${cx + 3 * s}`} stroke={WHITE} strokeWidth={1.6 * s} strokeLinecap="round" />
        </g>
      );
    case 2:
      return (
        <g>
          <path d={`M${cx - 7 * s} ${cy - 2 * s}H${cx + 7 * s}Q${cx + 6.5 * s} ${cy + 8.5 * s} ${cx} ${cy + 8.5 * s}Q${cx - 6.5 * s} ${cy + 8.5 * s} ${cx - 7 * s} ${cy - 2 * s}Z`} fill={MOUTH} />
          <path d={`M${cx - 5.8 * s} ${cy - 2 * s}H${cx + 5.8 * s}V${cy + 0.6 * s}H${cx - 5.8 * s}Z`} fill={WHITE} />
          <path d={`M${cx - 4 * s} ${cy + 6.4 * s}Q${cx} ${cy + 3 * s} ${cx + 4 * s} ${cy + 6.4 * s}Q${cx} ${cy + 9 * s} ${cx - 4 * s} ${cy + 6.4 * s}Z`} fill={TONGUE} />
        </g>
      );
    default:
      return (
        <g>
          <ellipse cx={cx} cy={cy + 2 * s} rx={3.3 * s} ry={4.2 * s} fill={MOUTH} />
          <ellipse cx={cx} cy={cy + 4 * s} rx={2 * s} ry={1.4 * s} fill={TONGUE} />
        </g>
      );
  }
}

/* ---------- Bram: eager, friendly, lopsided ---------- */

const bram: FaceKit = {
  eyes: (e, skin) => {
    if (e === 'joy') {
      // Not squeezed shut like the others: Bram's eyes pop wide open, with an extra sparkle.
      const j = { cy: 63.4, rx: 7.6, ry: 9, pr: 5.2, gx: 1, gy: -1.2, skin };
      return (
        <>
          <Eye {...j} cx={50} side={-1} />
          <Eye {...j} cx={70} side={1} />
          <circle cx="48.4" cy="65.6" r="1.2" fill={WHITE} />
          <circle cx="68.4" cy="65.6" r="1.2" fill={WHITE} />
        </>
      );
    }
    const base = { cy: 64, rx: 7, ry: 8.2, pr: 4.6, skin };
    const g = {
      neutral: { gx: 1.4, gy: 0.4 },
      thinking: { gx: 2, gy: -3.2 },
      pleased: { gx: 0.8, gy: -2 },
      disappointed: { gx: 0.4, gy: 2.4 },
    }[e];
    const L: Partial<EyeSpec> =
      e === 'pleased' ? { lower: 0.34 } :
      e === 'thinking' ? { lower: 0.28, lid: 0.12 } :
      e === 'disappointed' ? { lid: 0.24, lidOuter: 0.36 } : {};
    const R: Partial<EyeSpec> =
      e === 'pleased' ? { lower: 0.34 } :
      e === 'disappointed' ? { lid: 0.24, lidOuter: 0.36 } : {};
    return (
      <>
        <Eye {...base} {...g} {...L} cx={50} side={-1} />
        <Eye {...base} {...g} {...R} cx={70} side={1} />
      </>
    );
  },
  brows: (e, c) => {
    const d = {
      neutral: 'M43 55Q49 51 55.5 53.8M65 54.6Q71 53.2 77 56',
      thinking: 'M43 57.2L55.5 56.4M65 52.4Q71.5 48.4 77.4 52',
      pleased: 'M43 54Q49 50 55.5 52.6M64.5 52.6Q71 50 77 54',
      disappointed: 'M43.5 56.2Q49 56 55 51.6M65 51.6Q71 56 76.5 56.2',
      joy: 'M42.4 50.6Q49 45 55.6 48.6M64.6 47.4Q71.4 43.6 77.8 48.4',
    }[e];
    return stroke(d, c, 4);
  },
  nose: (shade) => (
    <>
      <ellipse cx="60.6" cy="71" rx="4.4" ry="3.3" fill={shade} />
      <ellipse cx="59.4" cy="70" rx="1.5" ry="1" fill="#fff" opacity=".35" />
    </>
  ),
  mouth: (e) => {
    switch (e) {
      case 'thinking':
        return stroke('M54.5 79.6Q59 78 64.6 79.2Q66.6 79.6 67.4 78');
      case 'pleased':
        return (
          <g>
            <path d="M51 76.4Q60 80.2 70 74.6Q68.6 84.6 60.4 84.6Q52.6 84.6 51 76.4Z" fill={MOUTH} />
            <path d="M52.4 77Q60 80 68.8 75.6L68.4 77.8Q60 81.6 52.8 78.8Z" fill={WHITE} />
            <path d="M55.6 82.6Q60.4 79.4 65.2 82.2Q60.6 85.4 55.6 82.6Z" fill={TONGUE} />
          </g>
        );
      case 'disappointed':
        // Nervous grimace: clenched teeth, crooked
        return (
          <g>
            <path d="M51.6 77.6Q60 75.2 69 77.8Q69.4 83.2 60.4 82.8Q52 83.4 51.6 77.6Z" fill={MOUTH} />
            <path d="M53 78.2Q60 76.4 67.8 78.4V81Q60 79.6 53.2 81.4Z" fill={WHITE} />
            <path d="M57.6 77.4V80.6M62.6 77.4V80.4" stroke="#d9cfc9" strokeWidth="1.1" />
          </g>
        );
      case 'joy':
        // A big lopsided "YES!" grin, higher on his right
        return (
          <g>
            <path d="M49.6 75.6Q60 79 71.4 72.4Q71 87.6 60.4 87.6Q50.4 87.6 49.6 75.6Z" fill={MOUTH} />
            <path d="M51 76.2Q60 79.2 70.2 73.4L70 76.4Q60 81.6 51.4 79Z" fill={WHITE} />
            <path d="M54 84.6Q60.6 79.6 67 84Q60.6 89 54 84.6Z" fill={TONGUE} />
          </g>
        );
      default:
        // Lopsided grin with a dimple on the high side
        return (
          <g>
            {stroke('M52.4 77.6Q59 82.4 68.6 75.2')}
            {stroke('M68 73.4Q70.2 74.8 69.6 77.4', INK, 2)}
          </g>
        );
    }
  },
  talk: (f) => talkShape(f, 60.5, 78),
  blush: (e) => (e === 'pleased' || e === 'joy' ? 0.5 : e === 'disappointed' ? 0.15 : 0.32),
};

/* ---------- Amina: gentle, shy, a little nervous ---------- */

const amina: FaceKit = {
  eyes: (e, skin) => {
    if (e === 'joy') return joyArcs(51, 69, 64, 6, 7.5);
    if (e === 'pleased') {
      // Content, closed downward arcs with lashes
      return (
        <g fill="none" stroke={INK} strokeLinecap="round">
          <path d="M45 62Q51 67.4 57 62M63 62Q69 67.4 75 62" strokeWidth="3" />
          <path d="M45.4 62.2l-3 -1.6M74.6 62.2l3 -1.6" strokeWidth="1.8" />
        </g>
      );
    }
    const base = { cy: 62.4, rx: 6.2, ry: 7.4, pr: 4.4, liner: 'lashes' as const, iris: '#4a2b1c', skin };
    const g = { neutral: { gx: 1, gy: 0.6 }, thinking: { gx: 1.8, gy: -3 }, disappointed: { gx: -0.4, gy: 2.2 } }[e];
    const lids: Partial<EyeSpec> = e === 'disappointed' ? { lid: 0.3, lidOuter: 0.18 } : e === 'thinking' ? { lid: 0.08 } : {};
    return (
      <>
        <Eye {...base} {...g} {...lids} cx={51} side={-1} />
        <Eye {...base} {...g} {...lids} cx={69} side={1} />
      </>
    );
  },
  brows: (e, c) => {
    const d = {
      // Gently worried even at rest: inner ends a touch higher
      neutral: 'M45 53Q49.6 50.2 55 50.8M65 50.2Q70.6 50.4 75.4 53.4',
      thinking: 'M45 53.6Q50 52.6 55 52.8M65 49Q70.6 46.6 75.4 49.8',
      pleased: 'M45 54Q50 51 55 52M65 52Q70 51 75 54',
      disappointed: 'M45 54.4Q50.6 54 55 49.2M65 49.2Q69.4 54 75 54.4',
      joy: 'M45 53Q50 49.4 55 51M65 51Q70 49.4 75 53',
    }[e];
    return stroke(d, c, 2.8);
  },
  nose: (shade) => stroke('M60.4 66Q62 70.2 59.4 71', shade, 2.2),
  mouth: (e) => {
    switch (e) {
      case 'thinking':
        return stroke('M57.6 77.6Q61 76.4 64.6 77.8', INK, 2.4);
      case 'pleased':
        return (
          <g>
            <path d="M53 75.2Q60 81.6 67 75.2Q60 78.2 53 75.2Z" fill={MOUTH} />
            {stroke('M53 75.2Q60 81.6 67 75.2', INK, 2.4)}
          </g>
        );
      case 'disappointed':
        return stroke('M54.4 79.4Q57 77.2 59.6 78.8Q62.4 77 65.4 79.6', INK, 2.4);
      case 'joy':
        return (
          <g>
            <path d="M53 74.4Q60 77.4 67 74.4Q66 82.4 60 82.4Q54 82.4 53 74.4Z" fill={MOUTH} />
            <path d="M54 74.8Q60 77.2 66 74.8L65.8 76.6Q60 78.6 54.2 76.6Z" fill={WHITE} />
            <path d="M56.4 80.6Q60 78.4 63.6 80.6Q60 83 56.4 80.6Z" fill={TONGUE} />
          </g>
        );
      default:
        // Small shy smile that wobbles a little to one side
        return stroke('M54.2 76Q56.8 78.8 60 77.4Q63.2 78.6 65.6 75.4', INK, 2.4);
    }
  },
  talk: (f) => talkShape(f, 60, 77, 0.85),
  blush: (e) => (e === 'pleased' || e === 'joy' ? 0.6 : 0.4),
};

/* ---------- Henk: deadpan supervisor ---------- */

const henk: FaceKit = {
  eyes: (e, skin) => {
    if (e === 'joy') {
      // A wink: left eye shut with a crease, right eye open under a cocked brow.
      return (
        <>
          {stroke('M44.6 63.6Q50 59.6 55.4 63.6', INK, 3)}
          {stroke('M43 66.4l-2.4 1.4M43.4 61.2l-2.4 -1', INK, 1.4)}
          <Eye cy={62} rx={5.6} ry={6.2} pr={3.2} lid={0.22} lower={0.24} gx={0.6} gy={-0.4} cx={70} side={1} skin={skin} />
        </>
      );
    }
    const base = { cy: 62, rx: 5.4, ry: 5.8, pr: 3, skin };
    const map: Record<string, [Partial<EyeSpec>, Partial<EyeSpec>]> = {
      neutral: [{ lid: 0.46, gx: 0.6, gy: 1 }, { lid: 0.5, gx: 0.6, gy: 1 }],
      thinking: [{ lid: 0.58, lower: 0.18, gx: -1.6, gy: -0.6 }, { lid: 0.22, gx: -1.6, gy: -1.4 }],
      pleased: [{ lid: 0.36, lower: 0.26, gy: -0.4 }, { lid: 0.4, lower: 0.26, gy: -0.4 }],
      disappointed: [{ lid: 0.34, lidOuter: 0.5, gy: 1.2 }, { lid: 0.34, lidOuter: 0.5, gy: 1.2 }],
    };
    const [L, R] = map[e];
    return (
      <>
        <Eye {...base} {...L} cx={50} side={-1} />
        <Eye {...base} {...R} cx={70} side={1} />
      </>
    );
  },
  brows: (e, c) => {
    const d = {
      neutral: 'M41.5 50.4L56 49.6M64 49.2L78.6 50.8',
      thinking: 'M41.5 51.6L56 52.4M64 47.4Q71 44.2 78.6 47.6',
      pleased: 'M41.5 49.6Q49 47.8 56 49M64 48.6Q71 47.6 78.6 49.8',
      disappointed: 'M41.5 48.4L56 51.8M64 51.8L78.6 48.4',
      joy: 'M41.5 54L56 52.6M64 46.6Q71 42.4 78.6 47',
    }[e];
    return stroke(d, c, 5.2);
  },
  nose: (shade) => (
    <>
      <path d="M57 63Q55.6 71 57.8 72.4Q60.6 74 63.4 72.4Q65.2 70.6 63 63" fill={shade} />
      <ellipse cx="58.6" cy="69" rx="1.4" ry="1.1" fill="#fff" opacity=".3" />
    </>
  ),
  mouth: (e) => {
    switch (e) {
      case 'thinking':
        return stroke('M57.6 82.4Q61.8 80.8 66 82.2', INK, 2.6);
      case 'pleased':
        // A tight approving smirk, one corner up
        return stroke('M55 81.6Q61 84 67.2 79.4', INK, 2.6);
      case 'disappointed':
        return stroke('M54.6 84Q60.6 80.2 66.2 83.6', INK, 2.6);
      case 'joy':
        return (
          <g>
            <path d="M54.6 80.4Q61 83 68.2 77.6Q67.2 85.6 61 85.6Q56 85.6 54.6 80.4Z" fill={MOUTH} />
            <path d="M55.6 80.8Q61 82.8 67.4 78.4L67.2 80.4Q61 84 56 82.4Z" fill={WHITE} />
          </g>
        );
      default:
        // Deadpan: short, flat, a bit off-centre
        return stroke('M56.4 82H65.4', INK, 2.6);
    }
  },
  talk: (f) => talkShape(f, 61, 81.2, 0.8),
  blush: (e) => (e === 'pleased' || e === 'joy' ? 0.38 : 0.2),
};

/* ---------- Jada: the smirk ---------- */

const jada: FaceKit = {
  eyes: (e, skin) => {
    if (e === 'joy') {
      // Wink on the right with her eyeliner wing; the left eye smiles.
      return (
        <>
          <Eye cy={63.6} rx={7} ry={6.6} pr={4.2} liner="wing" iris="#3a2116" lid={0.16} lower={0.32} gx={1.4} gy={-0.6} cx={50} side={-1} skin={skin} />
          {stroke('M63.4 64Q70 67.6 76.6 63.2', INK, 3)}
          {stroke('M76.4 63.4l3.6 -2.8', INK, 2.4)}
        </>
      );
    }
    const base = { cy: 63.6, rx: 7, ry: 6.6, pr: 4.2, liner: 'wing' as const, iris: '#3a2116', skin };
    const map: Record<string, [Partial<EyeSpec>, Partial<EyeSpec>]> = {
      // Half-lidded left eye, wide-ish right eye under a cocked brow
      neutral: [{ lid: 0.4, lidOuter: 0.3, gx: 1.6, gy: 0.6 }, { lid: 0.14, gx: 1.6, gy: 0.4 }],
      thinking: [{ lid: 0.18, gx: -2.4, gy: -2.4 }, { lid: 0.1, gx: -2.4, gy: -2.4 }],
      pleased: [{ lid: 0.16, lower: 0.3, gx: 1, gy: -1.2 }, { lid: 0.12, lower: 0.3, gx: 1, gy: -1.2 }],
      // Side-eye: flat heavy lids, pupils parked at the side
      disappointed: [{ lid: 0.48, gx: -2.6, gy: 0.6 }, { lid: 0.48, gx: -2.6, gy: 0.6 }],
    };
    const [L, R] = map[e];
    return (
      <>
        <Eye {...base} {...L} cx={50} side={-1} />
        <Eye {...base} {...R} cx={70} side={1} />
      </>
    );
  },
  brows: (e, c) => {
    const d = {
      neutral: 'M43 56.4L55.4 55.6M64.6 53.4Q71 47.8 78 51.8',
      thinking: 'M42.6 52.4Q49 48 55.4 51.8M64.6 55.2L77.4 55.4',
      pleased: 'M43 54.6Q49 52 55.4 53.6M64.6 52.6Q71 49 77.6 52.6',
      disappointed: 'M43 55.4L55.4 56.4M64.6 56.4L77.4 55.2',
      joy: 'M42.6 52.6Q49 47.6 55.4 51M64.6 57.4Q71 55 77.4 58',
    }[e];
    return stroke(d, c, 3.4);
  },
  nose: (shade) => <path d="M57.4 70.8Q60.4 73 63.4 70.8Q62.6 68 60.4 67.6Q58.2 68 57.4 70.8Z" fill={shade} />,
  mouth: (e) => {
    switch (e) {
      case 'thinking':
        // Pursed lips pushed to one side
        return (
          <g>
            <ellipse cx="63.4" cy="78.4" rx="2.8" ry="2.4" fill="#5a2a22" />
            <ellipse cx="63.4" cy="78.4" rx="1.2" ry="1" fill={MOUTH} />
          </g>
        );
      case 'pleased':
        return (
          <g>
            <path d="M52.6 76.6Q61 80 69.6 73.4Q68 83.2 60 82.6Q54 82.2 52.6 76.6Z" fill={MOUTH} />
            <path d="M53.8 77.2Q61 80 68.6 74.6L68.2 77Q61 81.4 54.4 79Z" fill={WHITE} />
          </g>
        );
      case 'disappointed':
        return stroke('M54.8 79.2L65.8 78.4Q67.4 78.4 68 80.4', INK, 2.6);
      case 'joy':
        return (
          <g>
            <path d="M53 76.6Q61 79.4 69.8 72.8Q68.6 82.6 60.6 82.6Q54.6 82.4 53 76.6Z" fill={MOUTH} />
            <path d="M54.2 77.2Q61 79.4 68.8 74L68.4 76.4Q61 81 54.6 79.2Z" fill={WHITE} />
            {stroke('M69.6 70.8Q71.8 72.4 71 74.8', INK, 1.8)}
          </g>
        );
      default:
        // Smirk: flat on the left, curling up on the right, with a dimple
        return (
          <g>
            {stroke('M53.6 78.6Q60 79.6 67.6 74.8', INK, 2.8)}
            {stroke('M67.4 72.8Q69.6 74 69 76.4', INK, 1.8)}
          </g>
        );
    }
  },
  talk: (f) => talkShape(f, 60.6, 77.6, 0.9),
  blush: (e) => (e === 'pleased' || e === 'joy' ? 0.45 : 0.28),
};

export const FACES = { bram, amina, henk, jada };
