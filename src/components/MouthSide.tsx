import { useId } from 'react';
import type { MouthPose } from '../content/klankMond';

/**
 * The mouth from the side, cut through the middle (the owner's request, 4 November 2026: "een
 * doorsnede van de zijkant, zodat je beter kunt zien wat de tong doet"), next to the front view
 * (src/components/Mouth.tsx) on the card of "Hoe zeg je het?". The face looks to the left.
 * What it shows is what the front cannot: where the tongue is (high or low, front or back), its
 * tip up behind the upper teeth (t, d, n, l, s), its back up against the soft palate (k, ng), and
 * the lips from the side (closed for m, pushed forward for oe, the lower lip at the upper teeth
 * for f). The same flat style and skin as the front view: no outlines, the inside dark, the
 * tongue pink, the palate a thin pink line.
 *
 * Coordinates: the same 120 x 118 box. The upper jaw stands still; the lower jaw (lower lip,
 * lower teeth, chin, tongue) turns down round the jaw joint (PIVOT) as the mouth opens (`open`).
 */

const SKIN = '#f7c49b';
const SKIN_SHADE = '#e2a376';
const LIP_UP = '#c9775c';
const LIP_LOW = '#d98a6d';
const INSIDE = '#4a2420';
const TOOTH = '#fffaf2';
const TONGUE = '#e0756c';
const TONGUE_SHADE = '#c85f58';
/** The roof of the mouth: a pink line along the palate. */
const PALATE = '#e9a19a';

/** The jaw joint, and how far the jaw turns down at `open` 1 (aa), in degrees. */
const PIVOT = { x: 96, y: 36 };
const JAW_DEG = 15;

type P = { x: number; y: number };
const r = (n: number) => Math.round(n * 100) / 100;
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const pt = (p: P) => `${r(p.x)} ${r(p.y)}`;

/** The palate, front to back: the ridge behind the upper teeth, the hard palate, the soft palate. */
export const RIDGE: P = { x: 34, y: 45 };
export const VELUM: P = { x: 74, y: 40.5 };

/** Every shape of one position, in numbers (exported for the tests). */
export function sideGeometry(p: MouthPose) {
  const a = (-JAW_DEG * Math.PI * p.open) / 180;
  const cos = Math.cos(a);
  const sin = Math.sin(a);
  /** A point of the lower jaw, turned with it. */
  const jaw = (q: P): P => ({ x: PIVOT.x + (q.x - PIVOT.x) * cos - (q.y - PIVOT.y) * sin, y: PIVOT.y + (q.x - PIVOT.x) * sin + (q.y - PIVOT.y) * cos });
  const fwd = Math.min(1, p.forward + p.round * 0.25);
  // The lips: their front edge comes forward when pushed out (oe), they meet when the mouth is closed (m).
  const upFront = 13 - fwd * 6;
  const upLow: P = { x: 17 - fwd * 4, y: 53 + fwd * 0.6 };
  /** The lower lip's top edge before the jaw turns: against the upper lip (closed), a little lower (open), or up and back at the upper teeth (f). */
  const gap = Math.min(1, p.open * 7) * 2.2;
  const tuck = p.tuck;
  const lowTop: P = { x: lerp(17 - fwd * 4, 27.5, tuck), y: lerp(53.6 + gap, 55, tuck) };
  // The tongue, in the lower jaw (it moves with it): the tip, the highest point, the back and the root.
  const tipRest: P = { x: 33, y: 60 };
  const tipUp: P = { x: RIDGE.x + 1, y: RIDGE.y + 2.4 };
  const humpFree: P = { x: 72 - p.front * 30, y: 64 - p.height * 20 };
  const humpBack: P = { x: VELUM.x, y: VELUM.y + 1.6 };
  return { jaw, fwd, upFront, upLow, lowTop, tuck, tipRest, tipUp, humpFree, humpBack };
}

/** Where the tongue's tip and its highest point are drawn (after the jaw has turned): for the tests. */
export function tonguePoints(p: MouthPose): { tip: P; hump: P } {
  const g = sideGeometry(p);
  // The tip goes up to the ridge in the upper jaw: it reaches it whatever the jaw does (a little open for t).
  const tipDown = g.jaw(g.tipRest);
  const tip = { x: lerp(tipDown.x, g.tipUp.x, p.tip), y: lerp(tipDown.y, g.tipUp.y, p.tip) };
  const free = g.jaw(g.humpFree);
  const hump = { x: lerp(free.x, g.humpBack.x, p.dorsum), y: lerp(free.y, g.humpBack.y, p.dorsum) };
  return { tip, hump };
}

export function MouthSide({ pose, size = 180, className }: { pose: MouthPose; size?: number; className?: string }) {
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const g = sideGeometry(pose);
  const { jaw } = g;
  const { tip, hump } = tonguePoints(pose);
  // The head (upper part, it stands still): the nose, under the nose, and everything behind; the
  // inside is drawn over it.
  const head = 'M120 -4H37L31 5Q18 20 8 29Q4.5 33 9.5 35.5Q15 37 19 36.4L28 40V52L38 62L46 100L56 122H120Z';
  // The inside of the mouth and the throat, under the palate (the lower jaw and the tongue cover its bottom).
  // Its bottom runs inside the tongue (so the tongue hides it), then down the throat behind the tongue's root.
  const inside = `M26 53L30 46Q${pt(RIDGE)} ${RIDGE.x + 3} 42.5C44 38.2 52 37.4 60 37.6C68 37.8 ${VELUM.x} 38.6 80 42C86 45.5 89 52 89 62V122H${r(jaw({ x: 78, y: 122 }).x)}L${pt(jaw({ x: 78, y: 104 }))}L${pt(jaw({ x: 62, y: 80 }))}L${pt(jaw({ x: 38, y: 64 }))}L${pt(jaw({ x: 28.5, y: 57 }))}Z`;
  const palate = `M30.5 45.6Q${pt(RIDGE)} ${RIDGE.x + 3} 42.5C44 38.2 52 37.4 60 37.6C68 37.8 ${VELUM.x} 38.6 80 42C84 44.4 86.5 47.5 88 51.5`;
  // The upper lip (still), from under the nose to its lower edge and back behind the teeth.
  const upper = `M18.6 36.3Q${r(g.upFront - 1.5)} 40.5 ${r(g.upFront)} 47Q${r(g.upFront + 0.6)} 52.6 ${pt(g.upLow)}L28.5 52.2L28.5 40.5Z`;
  // The upper front tooth: from the gum, slanting a little forward, to its edge.
  const upTooth = 'M28.6 41.8L35.4 43.2L32.6 54.4Q30.2 56.2 27.2 54.6Z';
  // The lower jaw, turned: the lower lip, the chin, under the chin, the floor of the mouth.
  const lt = g.lowTop;
  const lowFront = lerp(14 - g.fwd * 5.5, 22.5, g.tuck);
  const jawPath = [
    `M${pt(jaw({ x: 28.5, y: lt.y + 2 }))}`,
    `L${pt(jaw(lt))}`,
    `Q${pt(jaw({ x: lowFront - 0.5, y: lt.y + 1 }))} ${pt(jaw({ x: lowFront, y: lt.y + 5 }))}`,
    `Q${pt(jaw({ x: lowFront + 1, y: lt.y + 10 }))} ${pt(jaw({ x: 20.5, y: 70 }))}`,
    `Q${pt(jaw({ x: 13.5, y: 74 }))} ${pt(jaw({ x: 13.5, y: 83 }))}`,
    `Q${pt(jaw({ x: 14, y: 93 }))} ${pt(jaw({ x: 26, y: 94 }))}`,
    `Q${pt(jaw({ x: 40, y: 95 }))} ${pt(jaw({ x: 52, y: 100 }))}`,
    `L${pt(jaw({ x: 62, y: 124 }))}`,
    `L${pt(jaw({ x: 76, y: 124 }))}`,
    // Up along the tongue's underside to under its tip.
    `L${pt(jaw({ x: 79, y: 104 }))}`,
    `L${pt(jaw({ x: 44, y: 76 }))}`,
    `L${pt(jaw({ x: 33.5, y: 66.5 }))}`,
    'Z',
  ].join('');
  // The lower lip itself (its red part), on the jaw.
  const lowLip = [
    `M${pt(jaw({ x: 28.5, y: lt.y + 1.4 }))}`,
    `L${pt(jaw(lt))}`,
    `Q${pt(jaw({ x: lowFront - 0.5, y: lt.y + 1 }))} ${pt(jaw({ x: lowFront, y: lt.y + 5 }))}`,
    `Q${pt(jaw({ x: lowFront + 1, y: lt.y + 9 }))} ${pt(jaw({ x: 20.5, y: lt.y + 10.5 }))}`,
    `L${pt(jaw({ x: 27, y: lt.y + 7 }))}`,
    'Z',
  ].join('');
  const lowTooth = `M${pt(jaw({ x: 27.8, y: 66.5 }))}L${pt(jaw({ x: 34, y: 66.5 }))}L${pt(jaw({ x: 32.6, y: 56.6 }))}Q${pt(jaw({ x: 30.8, y: 55 }))} ${pt(jaw({ x: 29, y: 56.4 }))}Z`;
  // The tongue: from under its tip along the top (the blade, the highest point, the back) down into the throat.
  const back = jaw({ x: 82 - pose.front * 3, y: 62 + (1 - pose.height) * 4 });
  const root = jaw({ x: 79, y: 104 });
  const floor = jaw({ x: 44, y: 76 });
  const underTip = jaw({ x: 34.5, y: 66 });
  const c1 = { x: tip.x + 5, y: tip.y - 1.5 - pose.tip * 1.5 };
  const c2 = { x: Math.max(tip.x + 4, hump.x - 12), y: hump.y };
  const c3 = { x: hump.x + 9, y: hump.y };
  const tongue = `M${pt(underTip)}Q${r(tip.x - 2)} ${r(tip.y + 3)} ${pt(tip)}C${pt(c1)} ${pt(c2)} ${pt(hump)}C${pt(c3)} ${r(back.x)} ${r(back.y - 9)} ${pt(back)}L${pt(root)}L${pt(floor)}Z`;
  const tongueLine = `M${r(lerp(tip.x, hump.x, 0.45))} ${r(lerp(tip.y, hump.y, 0.45) + 5)}Q${r(hump.x)} ${r(hump.y + 6)} ${r(back.x - 3)} ${r(back.y + 8)}`;
  return (
    <svg className={`mouth mouth-side ${className ?? ''}`} viewBox="0 0 120 118" width={size} height={Math.round((size * 118) / 120)} aria-hidden focusable="false">
      <defs>
        <clipPath id={`ms-${id}`}><rect x="0" y="0" width="120" height="118" /></clipPath>
      </defs>
      <g clipPath={`url(#ms-${id})`}>
        <path d={head} fill={SKIN} />
        <path d="M96 -4H120V122H100Z" fill={SKIN_SHADE} opacity=".45" />
        <path d={inside} fill={INSIDE} />
        <path d={palate} fill="none" stroke={PALATE} strokeWidth="2.4" strokeLinecap="round" />
        <path d={tongue} fill={TONGUE} />
        <path d={tongueLine} fill="none" stroke={TONGUE_SHADE} strokeWidth="1.6" strokeLinecap="round" opacity=".6" />
        <path d={jawPath} fill={SKIN} />
        {/* Between the lips: the opening (nothing when they are closed). */}
        <path d={`M${pt(g.upLow)}L28.5 52.2L${pt(jaw({ x: 28.5, y: lt.y + 1.4 }))}L${pt(jaw(lt))}Z`} fill={INSIDE} />
        <path d={lowTooth} fill={TOOTH} />
        <path d={lowLip} fill={LIP_LOW} />
        <path d={upTooth} fill={TOOTH} />
        <path d={upper} fill={LIP_UP} />
        {/* The nose's lower edge, as on the front view. */}
        <path d="M9.5 35.5Q15 37 19 36.4" fill="none" stroke={SKIN_SHADE} strokeWidth="1.6" strokeLinecap="round" />
      </g>
    </svg>
  );
}
