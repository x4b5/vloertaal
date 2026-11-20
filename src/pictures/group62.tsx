import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine, r1, type Pt } from './kit';

/**
 * Word pictures, group 62 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * Lesson "Drills and screws" (u.ruwbouw): the drills and the small things that go with them. One
 * recipe for the lesson: solid parts get a light top and a darker side; the drills and the nail
 * stand on a soft ground shadow, the tools that lie down get a shadow that turns with them and a
 * dark depth edge under the silhouette. No part that tells two pictures apart is drawn in a dark
 * slate, so every picture reads on the dark card too.
 *
 *  - the cordless drill (de accuboor): an orange drill from the side, a short bit, a grip ending in
 *    a wide orange foot with a grey battery block clicked under it.
 *  - the power drill (de boormachine): a long blue drill with a long bit and a narrow grip with no
 *    battery; a thick grey cable drops from the grip and lies in two loops on the floor.
 *  - the screwdriver bit (het bitje): one short, fat gold bit lying on the floor: its six-sided
 *    end turned to us, a six-sided shank with a groove, a thin neck and a cross tip.
 *  - the wall plug (de plug): one big red plug lying on the floor: barbs on its body, a split at
 *    the front, a round collar with a steel screw going into its hole.
 *  - the screwdriver (de schroevendraaier): a long screwdriver from the side, lying on the floor:
 *    a fat green handle with grip grooves, a steel ferrule, a long thin shaft and a cross tip.
 *  - the nail (de spijker): one big steel nail standing half hammered into a block of wood: a flat
 *    head and a smooth shank (no thread: that is "de schroef").
 *
 * The six stand side by side in a picture choice, so each has its own shape and colour: an orange
 * drill on a battery, a blue drill with a coiled cable, a stubby gold hex bit with no handle, a
 * red ribbed plug with a screw in it, a green handle on a long steel shaft, a nail upright in wood.
 */

/** Points for a polygon. */
const pts = (p: Pt[]) => p.map(([x, y]) => `${r1(x)},${r1(y)}`).join(' ');

/** A darker step of steel, for the shade side of metal parts (reads on the dark card). */
const STEEL_DARK = '#6b7680';

/** The spiral of a drill bit: slanting dark lines over a grey bar from x0 to x1 (centre y). */
const spiral = (x0: number, x1: number, y: number, h: number) => {
  const lines: string[] = [];
  for (let x = x0 + 4; x < x1 - 2; x += 6) lines.push(`M${x} ${y - h / 2 + 1}L${x + 3} ${y + h / 2 - 1}`);
  return lines.join('');
};

/** A drill's bit and steel chuck: the bit from x0 to the chuck at cx, centre line y. */
function BitAndChuck({ x0, cx, y }: { x0: number; cx: number; y: number }) {
  return (
    <g>
      <rect x={x0} y={y - 3.5} width={cx - x0 + 4} height="7" rx="3" fill={PAL.steel} />
      <path d={spiral(x0, cx, y, 7)} stroke={PAL.slate} strokeWidth="1.8" strokeLinecap="round" />
      <rect x={cx} y={y - 10.5} width="16" height="21" rx="4" fill={PAL.steel} />
      <rect x={cx} y={y - 10.5} width="16" height="6" rx="3" fill={PAL.mist} />
      <path d={`M${cx + 5} ${y - 3}V${y + 8}M${cx + 10} ${y - 3}V${y + 8}`} stroke={STEEL_DARK} strokeWidth="1.8" strokeLinecap="round" />
    </g>
  );
}

/**
 * A six-sided end seen at a slant, centre (cx, cy), corner radius r, squeezed sideways by `squash`.
 */
const hexEnd = (cx: number, cy: number, r: number, squash: number): Pt[] =>
  [90, 30, -30, -90, -150, 150].map((a): Pt => [cx + squash * r * Math.cos((a * Math.PI) / 180), cy - r * Math.sin((a * Math.PI) / 180)]);

/**
 * A tool lying on the floor, drawn along the x axis around (0, 0) and turned by `angle` about
 * (cx, cy): its ground shadow turns with it and sits just under it, and a dark depth edge (the
 * silhouette again in slate, 3.5 lower) carries the outline.
 * `children(fill)` draws the silhouette: in `fill` for the edge, in its own colours when undefined.
 */
function Lying({ cx, cy, angle, len, children }: {
  cx: number;
  cy: number;
  angle: number;
  len: number;
  children: (fill?: string) => JSX.Element;
}) {
  const turn = `translate(${cx} ${cy}) rotate(${angle})`;
  return (
    <g>
      <g transform={`rotate(${angle} ${cx} ${cy + 9})`}>
        <Ground cx={cx} cy={cy + 9} rx={len / 2} ry={6} />
      </g>
      <g transform={`translate(0 3.5) ${turn}`}>{children(PAL.slate)}</g>
      <g transform={turn}>{children()}</g>
    </g>
  );
}

export default {
  // "de accuboor": the cordless drill — one orange drill with a short bit; the grip ends in a wide
  // orange foot with a grey battery clicked under it.
  'w.accuboor': () => (
    <g strokeLinejoin="round">
      <Ground cx={70} cy={105} rx={36} ry={4} />
      <BitAndChuck x0={14} cx={30} y={40} />
      {/* The grip and the trigger */}
      <path d="M60 52H84L86 84H64Z" fill={PAL.orange} stroke={PAL.orange} strokeWidth="5" />
      <path d="M77 52H84L86 84H80Z" fill={PAL.orangeShade} stroke={PAL.orangeShade} strokeWidth="3" />
      <rect x="53" y="56" width="9" height="13" rx="4" fill={PAL.steel} />
      {/* The battery under the foot: grey front, darker side, charge marks */}
      <rect x="50" y="90" width="50" height="14" rx="2.5" fill={PAL.steel} />
      <rect x="88" y="90" width="12" height="14" rx="2.5" fill={STEEL_DARK} />
      <path d="M58 97.5H64M68 97.5H74M78 97.5H84" stroke={PAL.lime} strokeWidth="3.2" strokeLinecap="round" />
      {/* The foot of the grip */}
      <rect x="48" y="80" width="52" height="11" rx="4" fill={PAL.orange} />
      <rect x="48" y="86.5" width="52" height="4.5" rx="2" fill={PAL.orangeShade} />
      {/* The body */}
      <Shade color={PAL.orangeShade} opacity={1} at={[100, 54, 30, 9]}>
        <path d="M44 31Q44 22 53 22H90Q104 22 104 38Q104 56 90 56H53Q44 56 44 48Z" fill={PAL.orange} />
      </Shade>
      <path d="M84 30V46M91 30V46" stroke={PAL.orangeShade} strokeWidth="2.6" strokeLinecap="round" />
      <Shine d="M50 28H76" color={PAL.white} width={3.5} opacity={0.55} />
    </g>
  ),

  // "de boormachine": the power drill with a cable — a long blue drill with a long bit and a narrow
  // grip without a battery; a thick grey cable drops from the grip and lies coiled on the floor.
  'w.boormachine': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={46} ry={4} />
      {/* The cable: down from the grip, then two loose loops lying flat on the floor */}
      <ellipse cx="44" cy="96" rx="24" ry="6.5" fill="none" stroke={STEEL_DARK} strokeWidth="6" />
      <ellipse cx="40" cy="92" rx="20" ry="5.5" fill="none" stroke={PAL.line} strokeWidth="6" />
      <path d="M75 82V88Q75 98 62 97" fill="none" stroke={PAL.line} strokeWidth="6.5" strokeLinecap="round" />
      <BitAndChuck x0={12} cx={30} y={32} />
      {/* The narrow grip, ending in the cable's sleeve */}
      <path d="M64 46H86L83 76H69Z" fill={PAL.blue} stroke={PAL.blue} strokeWidth="5" />
      <path d="M79 46H86L83 76H77Z" fill={PAL.blueShade} stroke={PAL.blueShade} strokeWidth="3" />
      <rect x="69" y="75" width="12" height="10" rx="3.5" fill={STEEL_DARK} />
      <rect x="57" y="50" width="9" height="13" rx="4" fill={PAL.steel} />
      {/* The long body */}
      <Shade color={PAL.blueShade} opacity={1} at={[102, 48, 30, 9]}>
        <path d="M44 24Q44 15 53 15H94Q106 15 106 30Q106 49 94 49H53Q44 49 44 41Z" fill={PAL.blue} />
      </Shade>
      <path d="M86 23V39M93 23V39" stroke={PAL.blueShade} strokeWidth="2.6" strokeLinecap="round" />
      <Shine d="M52 21H78" color={PAL.blueLight} width={3.5} opacity={0.9} />
    </g>
  ),

  // "het bitje": the screwdriver bit — one short gold bit lying on the floor: the six-sided end
  // turned to us, the six-sided shank (three faces, a groove round it), a narrow neck, a cross tip.
  'w.bitje': () => (
    <g strokeLinejoin="round">
      <Lying cx={52} cy={60} angle={18} len={100}>
        {(fill) => (
          <g transform="scale(1.25)">
            {/* Shank (top, front and bottom face), shoulder, thin neck and the wider cross tip */}
            <path d="M-26 -15H8L15 -5H27L31 -8.5L46 -0.8V0.8L31 8.5L27 5H15L8 15H-26Z" fill={fill ?? PAL.yellow} />
            <polygon points={pts(hexEnd(-26, 0, 15, 0.7))} fill={fill ?? PAL.yellowLight} />
            {!fill && (
              <g>
                <path d="M-26 -15H8L13 -8H-26Z" fill={PAL.yellowShine} />
                <path d="M-26 7.5H13L8 15H-26ZM15 2H27V5H15ZM29 2L46 0.4V0.8L31 8.5L28.5 6.5Z" fill={PAL.yellowShade} />
                {/* The groove round the shank */}
                <rect x="-10" y="-15.5" width="5" height="31" rx="1.5" fill={PAL.cardDark} />
                {/* The cross tip: the dark flute between its wings */}
                <path d="M28 -1.4L45 -0.3V0.3L28 1.4Z" fill={PAL.cardDark} />
                <Shine d="M-19 -3.5H4" color={PAL.white} width={2.6} opacity={0.6} />
              </g>
            )}
          </g>
        )}
      </Lying>
    </g>
  ),

  // "de plug": the wall plug — one big red plug lying on the floor with a screw going into it: the
  // round collar with the screw in its hole, a body with barbs and a split at the front end.
  'w.plug': () => (
    <g strokeLinejoin="round">
      <Lying cx={60} cy={58} angle={-6} len={96}>
        {(fill) => (
          <g transform="scale(0.94)">
            {/* The body with barbs that lean back to the collar, and its round front end */}
            <path d="M-16 -13H-4L4 -20V-13H12L20 -20V-13H28L36 -20V-13H42Q50 -13 50 0Q50 13 42 13H36V20L28 13H20V20L12 13H4V20L-4 13H-16Z" fill={fill ?? PAL.red} />
            <ellipse cx="-16" cy="0" rx="7" ry="22" fill={fill ?? PAL.redShade} />
            <ellipse cx="-20" cy="0" rx="7" ry="22" fill={fill ?? PAL.red} />
            {/* The screw going in: a flat head and a threaded shank */}
            <rect x="-44" y="-4.5" width="25" height="9" rx="1.5" fill={fill ?? PAL.steel} />
            <path d="M-52 -13H-47L-41 -5V5L-47 13H-52Z" fill={fill ?? PAL.steel} />
            {!fill && (
              <g>
                <path d="M-16 4H50Q50 13 42 13H36V20L28 13H20V20L12 13H4V20L-4 13H-16Z" fill={PAL.redShade} />
                {/* The split that lets the plug spread */}
                <path d="M16 0L50 -2.2V2.2Z" fill={PAL.slateDark} />
                <ellipse cx="-21" cy="0" rx="3.6" ry="9" fill={PAL.slateDark} />
                <rect x="-44" y="-4.5" width="25" height="9" rx="1.5" fill={PAL.steel} />
                <path d="M-40 -4V4M-35 -4V4M-30 -4V4M-25 -4V4" stroke={STEEL_DARK} strokeWidth="1.8" strokeLinecap="round" transform="skewX(-25)" />
                <path d="M-52 -13H-47L-46 -11.5H-52Z" fill={PAL.mist} />
                <path d="M-52 4H-41V5L-47 13H-52Z" fill={STEEL_DARK} />
                <Shine d="M-12 -8H38" color={PAL.white} width={3} opacity={0.55} />
              </g>
            )}
          </g>
        )}
      </Lying>
    </g>
  ),

  // "de schroevendraaier": the screwdriver — a long screwdriver seen from the side, lying on the
  // floor: a fat green handle with grip grooves, a steel ferrule, a long thin shaft, a cross tip.
  'w.schroevendraaier': () => (
    <g strokeLinejoin="round">
      <Lying cx={60} cy={58} angle={-10} len={100}>
        {(fill) => (
          <g>
            {/* The long shaft and the pointed cross tip */}
            <path d="M-8 -4.4H36L40 -5.2L49 0L40 5.2L36 4.4H-8Z" fill={fill ?? PAL.steel} />
            <rect x="-15" y="-8" width="10" height="16" rx="2.5" fill={fill ?? PAL.steel} />
            <rect x="-50" y="-14" width="38" height="28" rx="11" fill={fill ?? PAL.green} />
            {!fill && (
              <g>
                <path d="M-8 -4.4H36L40 -5.2L42 -4H-8Z" fill={PAL.mist} />
                <path d="M-8 1.4H36L40 2.2L44 2.6L40 5.2L36 4.4H-8Z" fill={STEEL_DARK} />
                <path d="M40 -0.6L48 -0.2V0.2L40 0.6Z" fill={PAL.slate} />
                <rect x="-15" y="-8" width="10" height="5" rx="2.5" fill={PAL.mist} />
                <Shade color={PAL.greenShade} opacity={1} at={[-30, 16, 30, 9]}>
                  <rect x="-50" y="-14" width="38" height="28" rx="11" fill={PAL.green} />
                </Shade>
                <path d="M-42 -4H-20M-42 4H-20" stroke={PAL.greenShade} strokeWidth="2.4" strokeLinecap="round" />
                <Shine d="M-43 -9H-20" color={PAL.lime} width={3} opacity={0.75} />
              </g>
            )}
          </g>
        )}
      </Lying>
    </g>
  ),

  // "de spijker": the nail — one big steel nail standing half hammered into a block of wood: a
  // round flat head, a smooth shank (no thread: that is "de schroef") going into the wood.
  'w.spijker': () => (
    <g strokeLinejoin="round">
      {/* The block's shadow, its front, right side and lit top, with grain on the front */}
      <path d="M14 104H90L108 90H32Z" fill="#000" opacity=".14" />
      <path d="M16 78H86V100H16Z" fill={PAL.wood} />
      <path d="M86 78L104 64V86L86 100Z" fill={PAL.cardDark} />
      <path d="M16 78H86L104 64H34Z" fill={PAL.card} />
      <path d="M24 86H54M62 92H80M28 94H44" stroke={PAL.cardDark} strokeWidth="2" strokeLinecap="round" />
      {/* The hole where the nail goes in */}
      <ellipse cx="60" cy="71" rx="7" ry="2.6" fill={PAL.cardDark} />
      {/* The shank: lit left, dark right side */}
      <rect x="55" y="18" width="10" height="54" rx="1.5" fill={PAL.steel} />
      <rect x="61" y="18" width="4" height="54" rx="1.5" fill={STEEL_DARK} />
      <Shine d="M57.8 28V64" width={2.2} opacity={0.75} />
      {/* The flat head: its dark edge under the lit top */}
      <ellipse cx="60" cy="19.5" rx="12.5" ry="4.8" fill={STEEL_DARK} />
      <ellipse cx="60" cy="16" rx="12.5" ry="4.8" fill={PAL.mist} />
      <Shine d="M52 15Q56 12.6 61 12.6" width={2.4} opacity={0.9} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
