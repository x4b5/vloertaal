import type { JSX } from 'react';
import { Ground, Hand, Move, PAL, SKIN, Shade, Shine } from './kit';

/**
 * Word pictures, group 56 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * The lesson "Painting" (u.afbouw): six things of the painter. Things with depth are drawn in
 * three dimensions (a slanted view with a light top, a darker side and a ground shadow) like the
 * approved tiling tools; the two brushes are flat, like the approved pencil and pincers.
 *
 *  - the paint (de verf): an open grey paint tin full to the brim with blue paint, the paint running
 *    over the front rim in drips, a wire bail handle with a wooden grip.
 *  - the paintbrush (de kwast): a wide flat brush lying level: a block of
 *    light bristles narrowing to a straight blue-dipped edge, a steel band, a long wooden handle.
 *  - the small brush (het penseel): a green handle tapering to its end, slanting down to the right, a
 *    steel band and a flat flaring tuft with a blue tip, a stroke of blue paint running from it.
 *  - the stirring stick (de roerstok): one bare flat wooden slat, no pot, its lower end dipped in
 *    blue paint with a drop hanging from it, a curved arrow round the dipped end for the stirring.
 *  - the masking tape (de tape): a yellow roll lying flat, seen from above, with a cardboard core and
 *    a real hole through it; the loose end peels off the side and runs out to the right, torn.
 *  - the paint kettle (het strijkvaatje): a small squat red pot with straight sides, blue paint in it
 *    and running over the front rim, a brush standing in it, a steel ear with a ring on each side,
 *    gripped by a hand (improved by hand on 20 November 2026: the empty pot read as a cooking pan).
 *
 * The six stand side by side in a picture choice, so each has its own main shape and colour:
 * a grey tin full of blue paint, a wide brush lying level, a slanting green brush with a paint
 * stroke, a bare wooden slat, a yellow ring with a tail, a red pot with paint and a brush, in a hand.
 */

/** Blue paint (de verf, de roerstok, the brush tips, the kettle): base, shade, highlight. */
const PAINT = [PAL.sky, PAL.skyShade, PAL.ice] as const;

/** Light wood of bristles and a cut slat end (the light step of cardboard / wood). */
const LIGHT_WOOD = '#f0c48a';

/** A drip of paint hanging from y `top`: `w` wide there, narrowing, ending in a round drop. */
const drip = (x: number, top: number, len: number, w: number) => {
  const n = w * 0.3;
  const r = w * 0.48;
  return `M${x - w / 2} ${top}H${x + w / 2}Q${x + n} ${top + len * 0.45} ${x + n} ${top + len}` +
    `A${r} ${r} 0 1 1 ${x - n} ${top + len}Q${x - n} ${top + len * 0.45} ${x - w / 2} ${top}Z`;
};

/** An ellipse as a closed path (for shapes with a hole, filled with evenodd). */
const oval = (cx: number, cy: number, rx: number, ry: number) =>
  `M${cx - rx} ${cy}A${rx} ${ry} 0 1 1 ${cx + rx} ${cy}A${rx} ${ry} 0 1 1 ${cx - rx} ${cy}Z`;

export default {
  // "de verf": the paint — an open grey paint tin full to the brim with blue paint, a curl of light
  // on the paint, the paint running over the front rim in drips; a bail handle with a wooden grip.
  'w.verf': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={103} rx={40} ry={4.5} />
      {/* The bail handle, behind the tin, with a wooden grip */}
      <path d="M23 54Q17 14 60 14Q103 14 97 54" fill="none" stroke={PAL.steel} strokeWidth="4.4" strokeLinecap="round" />
      <rect x="46" y="9.5" width="28" height="9" rx="4.5" fill={PAL.wood} />
      {/* The tin */}
      <Shade color={PAL.steel} opacity={0.9} at={[102, 74, 18, 44]}>
        <path d="M22 50V92A38 10 0 0 0 98 92V50Z" fill={PAL.mist} />
      </Shade>
      <circle cx="23" cy="56" r="4" fill={PAL.slate} />
      <circle cx="97" cy="56" r="4" fill={PAL.slate} />
      {/* The open top: the rim, the paint filling it, running over the front */}
      <ellipse cx="60" cy="50" rx="38" ry="11.5" fill={PAL.steel} />
      <ellipse cx="60" cy="49.5" rx="34" ry="9" fill={PAINT[0]} />
      <path d={drip(36, 55, 24, 10)} fill={PAINT[0]} />
      <path d={drip(57, 57, 13, 9)} fill={PAINT[0]} />
      <path d={drip(81, 54, 32, 10)} fill={PAINT[1]} />
      <Shine d="M38 48Q46 43.5 60 43.5" color={PAINT[2]} width={3.4} opacity={1} />
      <Shine d="M30 72V88" width={4} opacity={0.75} />
    </g>
  ),

  // "de kwast": the paintbrush — a wide flat brush lying level: a tall block of light bristles on
  // the left with a blue dipped tip, a steel band narrowing to a long wooden handle with a hole.
  'w.kwast': () => (
    <g strokeLinejoin="round">
      {/* The handle, long, with its hanging hole */}
      <Shade color={PAL.cardDark} opacity={1} at={[88, 70, 26, 5.5]}>
        <path d="M58 52.5L101 53.5Q108 54 108 60Q108 66 101 66.5L58 67.5Z" fill={PAL.wood} />
      </Shade>
      <circle cx="100.5" cy="60" r="2.6" fill={PAL.cardDark} />
      {/* The steel band, pinched in where it holds the handle, its underside in shade */}
      <Shade color={PAL.steel} opacity={1} at={[50, 88, 12, 10]}>
        <path d="M42 34.5H50Q53 34.5 53 38V46Q58 50 60 52V68Q58 70 53 74V82Q53 85.5 50 85.5H42Z" fill={PAL.mist} />
      </Shade>
      <path d="M47.5 37.5V82.5" stroke={PAL.steel} strokeWidth="1.8" strokeLinecap="round" />
      {/* The bristles: flaring out to the tip, the tip dipped in blue */}
      <Shade color={PAL.cardShade} opacity={1} at={[28, 92, 30, 13]}>
        <path d="M42 36L16 39Q12 39 12 43V77Q12 81 16 81L42 84Z" fill={LIGHT_WOOD} />
      </Shade>
      <path d="M23 38.2Q19.5 47 23.5 54Q19.5 61 23.5 68Q19.5 75 23 81.8L16 81Q12 81 12 77V43Q12 39 16 39Z" fill={PAINT[0]} />
      <path d="M29 48H39M28 60H39M29 72H39" stroke={PAL.cardShade} strokeWidth="1.6" strokeLinecap="round" />
      <Shine d="M70 56H94" width={2.6} opacity={0.5} />
    </g>
  ),

  // "het penseel": the small brush for corners — a green handle, thick at the band and tapering to
  // its end, a steel band and a flat tuft that flares out, its tip in blue; a stroke of blue paint
  // runs from the tip, so it is a brush and not a pen.
  // On the intro card: the brush moves along and paints the stroke behind it.
  'w.penseel': () => (
    <g strokeLinejoin="round">
      {/* The stroke of paint the brush has just put down */}
      <Move kind="grow" grow={0.1}>
        <path d="M84 91Q70 99 54 96Q40 93.5 27 101" fill="none" stroke={PAINT[0]} strokeWidth="7" strokeLinecap="round" />
      </Move>
      <Move kind="from" dx={-44} dy={6}>
      <g transform="translate(-6 -7) rotate(-42 60 60)">
        {/* The handle: thin at its end, thick before the band */}
        <Shade color={PAL.greenShade} opacity={1} at={[67, 34, 4.5, 40]}>
          <path d="M56.5 8Q60 3 63.5 8L66.5 58H53.5Z" fill={PAL.green} />
        </Shade>
        {/* The steel band, with two crimps */}
        <Shade color={PAL.steel} opacity={1} at={[68, 66, 4, 12]}>
          <path d="M52.5 57H67.5L67 74H53Z" fill={PAL.mist} />
        </Shade>
        <path d="M54 62H66M54 67H66" stroke={PAL.steel} strokeWidth="1.6" strokeLinecap="round" />
        {/* The flat tuft, flaring out, its tip in blue */}
        <Shade color={PAL.cardShade} opacity={1} at={[74, 88, 6, 16]}>
          <path d="M53 73H67Q72 84 73 92Q73 98.5 67 99H53Q47 98.5 47 92Q48 84 53 73Z" fill={LIGHT_WOOD} />
        </Shade>
        <path d="M47.3 88Q60 92 72.7 88Q73 98.5 67 99H53Q47 98.5 47.3 88Z" fill={PAINT[0]} />
        <path d="M56 77.5L54 85M64 77.5L66 85" stroke={PAL.cardShade} strokeWidth="1.5" strokeLinecap="round" />
        <Shine d="M58.4 12L57.2 50" color={PAL.lime} width={2.4} opacity={0.8} />
      </g>
      </Move>
    </g>
  ),

  // "de roerstok": the stirring stick — one bare flat wooden slat, no pot, its lower end dipped in
  // blue paint with a drop hanging from it, and a curved arrow round the dipped end for stirring.
  'w.roerstok': () => (
    <g strokeLinejoin="round">
      {/* The back half of the stirring arrow, behind the slat */}
      <path d="M33 74A25 7.5 0 0 1 83 74" fill="none" stroke={PAL.orange} strokeWidth="4.6" strokeLinecap="round" />
      {/* The slat with its paint: on the intro card its dipped end swings through the paint, as the arrow goes */}
      <Move kind="turn" turn={-25} at={[66, 12]}>
        {/* The slat: its top end, its thickness on the right, then its face */}
        <polygon points="62.7,12.3 77.3,15.7 81.3,12.7 66.7,9.3" fill={LIGHT_WOOD} />
        <polygon points="77.3,15.7 81.3,12.7 63.3,90.7 59.3,93.7" fill={PAL.cardDark} />
        <polygon points="62.7,12.3 77.3,15.7 59.3,93.7 44.7,90.3" fill={PAL.card} />
        <path d="M65.8 22L60 47M71 26L65.5 50" stroke={PAL.cardShade} strokeWidth="1.8" strokeLinecap="round" />
        {/* The paint on its lower end, with a drop hanging from it */}
        <polygon points="66.2,64 70.2,61 63.3,90.7 59.3,93.7" fill={PAINT[1]} />
        <path d="M51.5 60.7C53.5 65 56 65 58.5 62.8C61 60.6 63.5 65.5 66.2 64L59.3 93.7L44.7 90.3Z" fill={PAINT[0]} />
        <path d={drip(52, 91.4, 7, 6.5)} fill={PAINT[0]} />
        <Shine d="M64 17.6L59.7 36.3" width={3} opacity={0.6} />
      </Move>
      {/* The front half of the stirring arrow, with its head */}
      <path d="M83 74A25 7.5 0 0 1 41 79.6" fill="none" stroke={PAL.orange} strokeWidth="4.6" strokeLinecap="round" />
      <polygon points="43.5,73 30.5,79 43.5,86" fill={PAL.orange} stroke={PAL.orange} strokeWidth="2.6" />
    </g>
  ),

  // "de tape": the masking tape — a yellow roll lying flat, seen from above, with a cardboard core
  // and a hole right through it; the loose end peels off the side and runs out to the right, torn.
  'w.tape': () => (
    <g strokeLinejoin="round">
      <Ground cx={56} cy={67} rx={36} ry={24} />
      {/* The side of the roll, with the hole open through it */}
      <path
        d="M12 50A36 24 0 0 1 84 50V62A36 24 0 0 1 12 62Z M35.3 56A15.5 10.5 0 0 0 60.7 56A15.5 10.5 0 0 0 35.3 56Z"
        fill={PAL.yellowShade}
        fillRule="evenodd"
      />
      {/* The inside wall of the core, seen through the hole */}
      <path d={`${oval(48, 50, 15.5, 10.5)} M35.3 56A15.5 10.5 0 0 0 60.7 56A15.5 10.5 0 0 0 35.3 56Z`} fill={PAL.cardDark} fillRule="evenodd" />
      {/* The top of the roll, then the cardboard core round the hole */}
      <path d={`${oval(48, 50, 36, 24)} ${oval(48, 50, 19.5, 13)}`} fill={PAL.yellow} fillRule="evenodd" />
      <path d={`${oval(48, 50, 19.5, 13)} ${oval(48, 50, 15.5, 10.5)}`} fill={PAL.card} fillRule="evenodd" />
      {/* The loose end, peeling off the side and running out to the right, its end torn */}
      <path d="M81.8 58.2C92 59 100 66 106 73L103.5 75L107.5 76.8L104 78.5L107 80.5C99 80 90 75 81.8 70.2Z" fill={PAL.yellow} />
      <Shine d="M18 42Q24 31 38 28" color={PAL.yellowShine} width={3.6} opacity={0.9} />
    </g>
  ),

  // "het strijkvaatje": the paint kettle — a small, squat red pot with straight sides and an empty dark
  // inside, a steel ear with a ring on each side of the rim, gripped at its side by a hand,
  // the thumb over its front, the way a painter holds it.
  'w.strijkvaatje': () => (
    <g strokeLinejoin="round">
      {/* The two rings of the ears, behind the pot */}
      <path d={`${oval(21, 40, 8, 8)} ${oval(21, 40, 4.2, 4.2)}`} fill={PAL.steel} fillRule="evenodd" />
      <path d={`${oval(95, 40, 8, 8)} ${oval(95, 40, 4.2, 4.2)}`} fill={PAL.steel} fillRule="evenodd" />
      {/* The pot: squat, straight sides, hardly narrower at the bottom */}
      <Shade color={PAL.redShade} opacity={1} at={[92, 56, 13, 30]}>
        <path d="M30 34L33 70A25 6 0 0 0 83 70L86 34Z" fill={PAL.red} />
      </Shade>
      {/* The rolled rim and the blue paint inside */}
      <ellipse cx="58" cy="34" rx="28" ry="8" fill={PAL.redLight} />
      <ellipse cx="58" cy="34.4" rx="24" ry="6" fill={PAINT[0]} />
      <path d="M44 33Q52 31 60 32" fill="none" stroke={PAINT[2]} strokeWidth="2.4" strokeLinecap="round" />
      {/* A brush stands in the paint: only its wooden handle and steel band stick out */}
      <path d="M50 34L30 8" stroke={PAL.wood} strokeWidth="7" strokeLinecap="round" />
      <path d="M53 37.5L47 29.5" stroke={PAL.steel} strokeWidth="9" />
      <path d="M36 14L44 25" stroke={LIGHT_WOOD} strokeWidth="2" strokeLinecap="round" />
      {/* Paint running down over the front rim */}
      <path d={drip(46, 40, 14, 6)} fill={PAINT[0]} />
      {/* The ears: steel tabs riveted under the rim */}
      <rect x="25.5" y="35" width="8" height="10" rx="2.5" fill={PAL.mist} />
      <rect x="82.5" y="35" width="8" height="10" rx="2.5" fill={PAL.steel} />
      <Shine d="M36 43L37.6 62" width={3.4} opacity={0.6} />
      {/* The hand gripping it at its side, the thumb over the front */}
      <Hand pose="hold" x={88} y={84} rotate={-6} scale={0.95} skin={SKIN.amina} sleeve={[PAL.navy, PAL.navyShade]} mirror />
      <rect x="64" y="50" width="20" height="8" rx="3.8" fill={SKIN.amina[0]} transform="rotate(-14 74 54)" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
