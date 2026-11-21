import { useId, type JSX } from 'react';
import { Ground, PAL, Shine, r1 } from './kit';

/**
 * Word pictures, group 53 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * Lesson "The tiler's tools" (u.afbouw), ported faithfully from the drawings approved by the owner
 * on 20 November 2026:
 *  - the notched trowel: a grey steel blade with square teeth and a wooden grip, standing on a
 *    white glue plate that its teeth have combed into ridges;
 *  - the trowel: a flat pointed steel blade with a straight back and a dark depth edge, a bent neck
 *    up to a wooden handle with a steel ferrule;
 *  - the tile cutter: a long blue base with a white tile on it, a steel rail on posts over it and a
 *    red slide with a big orange lever;
 *  - the pincers: a round head of two steel half rings whose cutting edges nearly meet at the top,
 *    a dark pivot, two red handles slightly open downwards;
 *  - the paddle mixer: a blue bucket of grey mortar; the steel shaft with a dark chuck comes down
 *    into it, its flat spiral paddle half out of the mortar, an orange arrow stirring round it
 *    (redrawn 20 November 2026 at the owner's yes: the old one read as a coil spring);
 *  - the folding ruler: three yellow lengths with brown marks, folded into a zigzag, steel hinges
 *    at the corners.
 * Six silhouettes and colours: grey blade on white ridges, grey point with a wood handle, blue
 * long base, grey ring on red handles, blue bucket with a spiral, yellow zigzag.
 */

/** Darker steel (the back of a pair of jaws, the far side of a spiral): one step under PAL.steel. */
const STEEL_DARK = '#5d6a75';
/** The dark side of the blue base: one step under PAL.blueShade. */
const BLUE_DEEP = '#0e5690';
/** The dark side of the red slide: one step under PAL.redShade. */
const RED_DEEP = '#8f2a19';
/** The mortar in the mixer's tub: between PAL.line and PAL.mist. */
const MORTAR = '#b3bdc4';

/** A line with round ends: a handle, a rail, a strand. */
const line = (d: string, stroke: string, w: number, extra: { opacity?: number; clip?: string; cap?: 'round' | 'butt' } = {}) => (
  <path
    d={d}
    fill="none"
    stroke={stroke}
    strokeWidth={w}
    strokeLinecap={extra.cap ?? 'round'}
    strokeLinejoin="round"
    opacity={extra.opacity}
    clipPath={extra.clip}
  />
);

/** A flat face of a box, as a path. */
const face = (d: string, fill: string) => <path d={d} fill={fill} />;

const range = (n: number) => Array.from({ length: n }, (_, i) => i);

/** One flat ribbon of the mixer's paddle: half a turn round the shaft (x 60), from y0 down. */
const ribbon = (y0: number, front: boolean, r = 17, drop = 9) =>
  Array.from({ length: 31 }, (_, k) => {
    const t = (Math.PI * k) / 30;
    const x = front ? 60 - r * Math.cos(t) : 60 + r * Math.cos(t);
    const y = y0 + (drop * k) / 30 + (front ? 5 : -5) * Math.sin(t);
    return `${k ? 'L' : 'M'}${r1(x)} ${r1(y)}`;
  }).join('');

/** The marks on one length of the folding ruler, its top edge at y: a long mark every fifth. */
const rulerMarks = (y: number) =>
  range(13)
    .map((i) => `M${24 + i * 6} ${r1(y + 0.8)}V${r1(y + (i % 5 === 0 ? 5.5 : 3.2))}`)
    .join('');

/** The notched trowel's blade and its eight teeth. */
const BLADE = 'M31 67.7L95.7 67.7L108.3 29.2L43.7 29.2Z';
const BLADE_TEETH = range(8).map((i) => {
  const x = 29 + i * 8.7;
  return `M${r1(x)} 73.7L${r1(x + 3.8)} 73.7L${r1(x + 5.9)} 67.3L${r1(x + 2.15)} 67.3Z`;
});
/** The seven ridges of glue the teeth leave on the plate: x is the front left corner. */
const RIDGES = range(7).map((i) => r1(20.6 + i * 8.7));

/** The trowel's blade seen from above: a point on the left, a straight back on the right. */
const TROWEL = 'M12 82Q38 60 68 60Q73 60 74.5 65L79 82Q80 87 75 88Q42 94 12 82Z';

/** One length of the folding ruler, its top edge at y, with marks and a steel end. */
const rulerLength = (y: number, tipX: number) => (
  <g>
    <rect x="14" y={y} width="92" height="13" rx="2" fill={PAL.yellowShade} />
    <rect x="14" y={y} width="92" height="9.8" rx="2" fill={PAL.yellow} />
    {line(rulerMarks(y), PAL.brown, 1.4)}
    <rect x={tipX} y={y} width="4.5" height="13" rx="1.5" fill={PAL.steel} />
  </g>
);

/** A steel hinge of the folding ruler. */
const hinge = (cx: number, cy: number) => (
  <g>
    <circle cx={cx} cy={cy} r="5.6" fill={PAL.steel} />
    <circle cx={cx} cy={cy} r="2.2" fill={PAL.slate} />
  </g>
);

export default {
  // "de lijmkam": the notched trowel — a steel blade with square teeth and a wooden grip, standing
  // on a white glue plate combed into ridges.
  'w.lijmkam': () => {
    const id = `lk-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
    return (
      <g>
        {/* The glue plate: a back strip and a front slab with its edges */}
        {face('M24.9 71.1L97.8 71.1L108.3 57.4L35.3 57.4Z', PAL.mist)}
        {face('M97.8 71.1L108.3 57.4L108.3 62.5L97.8 76.2Z', PAL.line)}
        {face('M11.7 91L84.6 91L97.8 73.7L24.9 73.7Z', PAL.mist)}
        {face('M11.7 91L84.6 91L84.6 93.5L11.7 93.5Z', PAL.line)}
        {face('M84.6 91L97.8 73.7L97.8 76.2L84.6 93.5Z', PAL.steel)}
        {/* The combed ridges of glue */}
        {RIDGES.map((x) => (
          <g key={x}>
            {face(`M${x} 87L${r1(x + 5)} 87L${r1(x + 17.1)} 71.1L${r1(x + 12.2)} 71.1Z`, PAL.paper)}
            {face(`M${r1(x + 5)} 87L${r1(x + 17.1)} 71.1L${r1(x + 17.1)} 73.7L${r1(x + 5)} 89.7Z`, PAL.mist)}
            {face(`M${x} 87L${r1(x + 5)} 87L${r1(x + 5)} 89.7L${x} 89.7Z`, PAL.paperShade)}
          </g>
        ))}
        {/* The blade with its teeth, shaded on the right */}
        {face(BLADE, PAL.steel)}
        {BLADE_TEETH.map((d) => <path key={d} d={d} fill={PAL.steel} />)}
        <clipPath id={id}>
          <path d={[BLADE, ...BLADE_TEETH].join(' ')} />
        </clipPath>
        <ellipse cx="104.3" cy="51.5" rx="16.6" ry="33.2" fill={PAL.slate} opacity="0.3" clipPath={`url(#${id})`} />
        <Shine d="M46.4 33.5L63.8 33.5" width={2.2} opacity={0.6} />
        {face('M43.7 29.2L108.3 29.2L108 28.5L43.3 28.5Z', PAL.mist)}
        {line('M49.6 54L94.4 54', PAL.slate, 6.6, { opacity: 0.38, clip: `url(#${id})` })}
        {/* The grip */}
        {line('M53.2 48L50 41.6M86.4 48L83.1 41.6', PAL.slate, 5)}
        {line('M44.2 41.6L88.9 41.6', PAL.cardDark, 9.1)}
        {line('M43.8 40.9L88.6 40.9', PAL.wood, 5.8)}
        {line('M47.6 40.2L71.6 40.2', PAL.card, 2)}
      </g>
    );
  },

  // "de troffel": the trowel — a flat pointed steel blade with a dark depth edge, a bent neck up to
  // a wooden handle with a steel ferrule.
  'w.troffel': () => {
    const id = `tf-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
    return (
      <g>
        <Ground cx={50} cy={94} rx={42} ry={4.5} />
        <path d={TROWEL} fill={PAL.slate} transform="translate(0 3)" />
        <clipPath id={id}>
          <path d={TROWEL} />
        </clipPath>
        <path d={TROWEL} fill={PAL.steel} />
        <ellipse cx="84" cy="78" rx="20" ry="26" fill={PAL.slate} opacity="0.3" clipPath={`url(#${id})`} />
        <Shine d="M24 78Q40 67 58 65" width={3} opacity={0.6} />
        {/* The neck and the handle */}
        {line('M72 75L77 56Q78 51 83 48L88 45', PAL.slate, 6)}
        {line('M88 45L102 31', PAL.cardDark, 14)}
        {line('M86.8 43.8L100.8 29.8', PAL.wood, 9)}
        {line('M88 40L96 32', PAL.card, 2.4)}
        {line('M84.5 48.5L89 44', PAL.steel, 14.5, { cap: 'butt' })}
      </g>
    );
  },

  // "de tegelsnijder": the tile cutter — a long blue base with a white tile on it, a steel rail on
  // posts over it, and a red slide with a big orange lever.
  'w.tegelsnijder': () => (
    <g>
      <path d="M15.1 88.8L90.1 88.8L104.9 69.4L29.9 69.4Z" fill="#000" opacity="0.14" />
      {/* The base */}
      {face('M17.7 86.3L88 86.3L88 81.2L17.7 81.2Z', PAL.blueShade)}
      {face('M88 86.3L101.1 69.1L101.1 64L88 81.2Z', BLUE_DEEP)}
      {face('M17.7 81.2L88 81.2L101.1 64L30.8 64Z', PAL.blue)}
      {/* The tile */}
      {face('M36.2 79.5L72.1 79.5L72.1 77.6L36.2 77.6Z', PAL.mist)}
      {face('M72.1 79.5L82.6 65.8L82.6 63.8L72.1 77.6Z', PAL.line)}
      {face('M36.2 77.6L72.1 77.6L82.6 63.8L46.7 63.8Z', PAL.paper)}
      {line('M41.4 70.6L63.3 70.6', PAL.line, 1.2)}
      {/* The posts and the rail */}
      {face('M23 75.2L28.5 75.2L28.5 60.4L23 60.4Z', PAL.steel)}
      {face('M28.5 75.2L32.4 70.1L32.4 55.2L28.5 60.4Z', PAL.slate)}
      {face('M23 60.4L28.5 60.4L32.4 55.2L27 55.2Z', PAL.mist)}
      {face('M86.3 75.2L91.8 75.2L91.8 60.4L86.3 60.4Z', PAL.steel)}
      {face('M91.8 75.2L95.7 70.1L95.7 55.2L91.8 60.4Z', PAL.slate)}
      {face('M86.3 60.4L91.8 60.4L95.7 55.2L90.3 55.2Z', PAL.mist)}
      {line('M27.7 56.6L91 56.6', PAL.steel, 4.3)}
      {line('M28.9 55.6L89.8 55.6', PAL.mist, 1.4)}
      {/* The slide and its lever */}
      {face('M60.2 63.9L70.4 63.9L70.4 56.1L60.2 56.1Z', PAL.redShade)}
      {face('M70.4 63.9L75 57.9L75 50.1L70.4 56.1Z', RED_DEEP)}
      {face('M60.2 56.1L70.4 56.1L75 50.1L64.8 50.1Z', PAL.red)}
      {line('M68 53.1L91.4 31.2', PAL.slate, 3.9)}
      {line('M81.3 40.7L91.4 31.2', PAL.orange, 7.4)}
      {line('M82.8 37.9L89.8 31.4', PAL.orangeLight, 1.9)}
    </g>
  ),

  // "de nijptang": the pincers — a closed round head of two steel half rings meeting at the
  // cutting edge, a dark pivot, two red handles opening downwards.
  'w.nijptang': () => (
    <g transform="translate(60 60) scale(0.92) rotate(-14) translate(-60 -61)">
      {line('M62 42Q52 70 49 106', STEEL_DARK, 8)}
      {line('M58 42Q68 70 71 106', PAL.steel, 8)}
      {/* The handles, slightly open */}
      {line('M55.9 62.5Q50.95 82.6 49 106', PAL.red, 11.5)}
      {line('M54.3 66Q50.2 84 48.6 102', PAL.redLight, 2, { opacity: 0.75 })}
      {line('M64.1 62.5Q69.05 82.6 71 106', PAL.redShade, 11.5)}
      {line('M63.2 64Q67.8 83 69.6 105', PAL.red, 6.5)}
      {/* The round head: two half rings whose cutting edges meet at the top, and the pivot */}
      {line('M62.5 41C78 38 77 17 60.9 17', STEEL_DARK, 9.5, { cap: 'butt' })}
      {line('M57.5 41C42 38 43 17 59.1 17', PAL.steel, 9.5, { cap: 'butt' })}
      <Shine d="M45.5 33C44.5 27 47 22 52 19.5" width={2.2} opacity={0.55} />
      <circle cx="60" cy="42.5" r="5.2" fill={PAL.slate} />
      <circle cx="60" cy="42.5" r="1.9" fill={PAL.mist} />
    </g>
  ),

  // "de mixer": the paddle mixer — a grey bucket of mortar; the steel shaft comes down into it, its
  // flat spiral paddle half out of the mortar, and a curved arrow round it on the surface: it stirs.
  'w.mixer': () => (
    <g>
      <Ground cx={60} cy={106} rx={36} ry={4} />
      {/* The bucket: body, the far rim, the mortar in it */}
      <path d="M26 58L33 101Q60 107 87 101L94 58Z" fill={PAL.sky} />
      <path d="M77 58L94 58L87 101Q82 102.5 76 103.5Z" fill={PAL.skyShade} />
      <ellipse cx="60" cy="58" rx="34" ry="9" fill={PAL.skyShade} />
      <ellipse cx="60" cy="59" rx="30" ry="7" fill={MORTAR} />
      {/* The back half of the paddle, in the mortar */}
      <path d={ribbon(42, false)} fill="none" stroke={STEEL_DARK} strokeWidth="6" strokeLinecap="round" />
      {/* The shaft, from the chuck at the top into the mortar */}
      <path d="M60 10V60" stroke={PAL.steel} strokeWidth="5" strokeLinecap="round" />
      <path d="M60 8V22" stroke={PAL.slate} strokeWidth="8" />
      {/* The front half of the paddle, light steel, going under the mortar at the bottom */}
      <path d={ribbon(37, true)} fill="none" stroke={PAL.mist} strokeWidth="6.5" strokeLinecap="round" />
      <path d={ribbon(51, true, 17, 7)} fill="none" stroke={PAL.mist} strokeWidth="6.5" strokeLinecap="round" />
      {/* The mortar closes over the lowest turn */}
      <path d="M31 60Q60 70 89 60Q89 66 60 66Q31 66 31 60Z" fill={MORTAR} />
      {/* The stirring arrow on the mortar */}
      <path d="M38 63Q60 71 80 64" fill="none" stroke={PAL.orange} strokeWidth="4" strokeLinecap="round" />
      <path d="M74 60L82 63.5L76 69" fill="none" stroke={PAL.orange} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      {/* A light streak on the bucket */}
      <Shine d="M32 70Q34 84 37 95" width={3.2} opacity={0.5} />
    </g>
  ),

  // "de duimstok": the folding ruler — two yellow lengths with brown marks joined by a folded
  // diagonal length, steel hinges at the corners.
  'w.duimstok': () => (
    <g>
      <Ground cx={60} cy={100} rx={48} ry={4} />
      {/* The folded middle length: same yellow, shade edge and marks as the others */}
      <g transform="translate(60 60.25) rotate(-33.24)">
        <rect x="-44.25" y="-6" width="88.5" height="12" fill={PAL.yellowShade} />
        <rect x="-44.25" y="-6" width="88.5" height="9" fill={PAL.yellow} />
        {line(range(13).map((i) => `M${-36 + i * 6} -5.2V${i % 5 === 0 ? -0.5 : -2.8}`).join(''), PAL.brown, 1.4)}
      </g>
      {rulerLength(23.5, 14)}
      {rulerLength(82, 101.5)}
      {hinge(100, 30)}
      {hinge(20, 88.5)}
    </g>
  ),
} as Record<string, () => JSX.Element>;
