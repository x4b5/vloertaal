import type { JSX } from 'react';
import { Move, PAL, Shine } from './kit';

/**
 * Word pictures, group 60 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * Lesson "Working with wood" (u.ruwbouw): the carpenter's hand tools. One recipe for all six, like
 * the pincers of group53: each tool lies flat on the card, seen from the side, with a depth edge
 * (the same shape in its shade colour, a little lower and to the right) and no ground shadow. Steel
 * is mid grey with a dark depth edge, so it carries the shape on the white and the dark card.
 *
 *  - the handsaw (de handzaag): a long grey blade tapering from the heel to a narrow tip, big dark
 *    teeth along the bottom, an orange closed handle, rising a little to the right.
 *  - the tenon saw (de kapzaag): a short, deep, straight grey blade with a yellow brass strip along
 *    its back and fine dark teeth, a wooden closed handle, lying level.
 *  - the wood chisel (de houtbeitel): a long wooden handle, a steel ring and a long, narrow steel
 *    blade (narrower than the handle) ending in a light bevel and a white cutting edge, rising to
 *    the right.
 *  - the hand plane (de handschaaf): a long, low red body on a dark sole, a wooden handle leaning
 *    back at the rear, the steel iron leaning back in the middle, a round wooden knob at the front.
 *  - the carpenter's hammer (de timmermanshamer): a long, slim steel head with a square striking
 *    face at one end and a wedge-shaped pen at the other, the light wooden handle through its middle.
 *  - the mallet (de houten hamer): a big square-cornered block of light wood on a thick darker
 *    wooden handle, the handle's end showing on its top.
 *
 * The six stand side by side in a picture choice, so each has its own main shape and colour: a
 * tapering blade with an orange handle, a deep square blade under a yellow strip, a thin stick with
 * a narrow blade, a low red block with two wooden handles, a slim grey head on a light stick, a
 * big wooden block on a dark stick.
 */

/** Light end grain of the wood. */
const WOOD_LIGHT = '#f0c48a';

/** A darker step of the alarm red, for the plane's depth edge. */
const RED_DARK = '#8f2a19';

/** The darker step of the steel the approved tools use: depth edges and saw teeth. */
const STEEL_DARK = '#5d6a75';

/** The depth edge: every part is drawn again this much lower and to the right, in its shade. */
const DEPTH = 'translate(2 3)';

/** A part with its depth edge: the shape in its shade colour behind, then in its own colour. */
const Part = ({ d, fill, edge }: { d: string; fill: string; edge: string }) => (
  <g>
    <path d={d} fill={edge} transform={DEPTH} />
    <path d={d} fill={fill} />
  </g>
);

/** Saw teeth hanging under the line y, from x0 to x1: `step` apart and `deep` long. */
const teeth = (x0: number, x1: number, y: number, step: number, deep: number) => {
  let d = `M${x0} ${y - 1}`;
  for (let x = x0; x + step <= x1 + 0.01; x += step) d += `L${x + step * 0.35} ${y + deep}L${x + step} ${y}`;
  return `${d}V${y - 1}Z`;
};

/** The colours of a saw handle: face, depth edge, light edge, rivets. */
type Grip = [string, string, string, string];
const WOOD_GRIP: Grip = [PAL.card, PAL.cardDark, WOOD_LIGHT, PAL.yellowShade];
const ORANGE_GRIP: Grip = [PAL.orange, PAL.orangeShade, PAL.orangeLight, PAL.mist];

/**
 * A closed saw handle: a grip with a slot for the fingers, a darker depth edge and two rivets at
 * the blade. (x, y) is its top-left corner.
 */
function SawHandle({ x, y, w, h, grip }: { x: number; y: number; w: number; h: number; grip: Grip }) {
  const [face, edge, light, rivet] = grip;
  const outer = `M${x + 10} ${y}H${x + w - 4}Q${x + w} ${y} ${x + w} ${y + 4}V${y + h - 4}Q${x + w} ${y + h} ${x + w - 4} ${y + h}H${x + 10}Q${x} ${y + h} ${x} ${y + h - 10}V${y + 10}Q${x} ${y} ${x + 10} ${y}Z`;
  const sx = x + 7;
  const sw = w * 0.36;
  const slot = `M${sx + 4} ${y + 9}H${sx + sw - 4}Q${sx + sw} ${y + 9} ${sx + sw} ${y + 13}V${y + h - 13}Q${sx + sw} ${y + h - 9} ${sx + sw - 4} ${y + h - 9}H${sx + 4}Q${sx} ${y + h - 9} ${sx} ${y + h - 13}V${y + 13}Q${sx} ${y + 9} ${sx + 4} ${y + 9}Z`;
  return (
    <g>
      <path d={`${outer}${slot}`} fill={edge} fillRule="evenodd" transform={DEPTH} />
      <path d={`${outer}${slot}`} fill={face} fillRule="evenodd" />
      <circle cx={x + w - 6} cy={y + h * 0.3} r="2.6" fill={rivet} />
      <circle cx={x + w - 6} cy={y + h * 0.7} r="2.6" fill={rivet} />
      <Shine d={`M${x + 3.5} ${y + h - 12}V${y + 11}Q${x + 3.5} ${y + 4.5} ${x + 10} ${y + 4.5}`} color={light} width={2.6} opacity={0.9} />
    </g>
  );
}

/** The handsaw's blade: tall at the heel, running down to a narrow rounded tip. */
const HANDSAW_BLADE = 'M34 36L106 60Q111 62 111 66V74H34Z';

/** The chisel's handle: round and thick at the butt, narrowing to the steel ring. */
const CHISEL_HANDLE = 'M21 50Q10 50 10 60Q10 70 21 70L46 66V54Z';

/** The chisel's long narrow blade, square at the end. */
const CHISEL_BLADE = 'M58 55.5H107Q109 55.5 109 57.5V62.5Q109 64.5 107 64.5H58Z';

/** The plane's body: long and low, the toe and heel rounded off at the top. */
const PLANE_BODY = 'M20 62H100Q106 62 106 68V86H12V70Q12 62 20 62Z';

/** The plane's rear handle: a wooden grip leaning back, with a rounded horn on top. */
const PLANE_TOTE = 'M26 63Q24 50 19 40Q16 31 24 29.5Q32 28 34 36Q37 50 46 63Z';

/** The carpenter's hammer's head: a slim bar, a wedge-shaped pen at the top, the face at the bottom. */
const HAMMER_HEAD = 'M27 72V40L31 27H37L41 40V72Z';
const HAMMER_FACE = 'M25.5 70H42.5Q44.5 70 44.5 72V80Q44.5 82 42.5 82H25.5Q23.5 82 23.5 80V72Q23.5 70 25.5 70Z';

/** The hammer's handle, through the head's middle, a little wider at its end. */
const HAMMER_HANDLE = 'M34 50.5H104Q108 50.5 108 55V57Q108 61.5 104 61.5H34Z';

/** The mallet's big wooden head: a block with slightly rounded corners. */
const MALLET_HEAD = 'M30 22H90Q95 22 95 27V51Q95 56 90 56H30Q25 56 25 51V27Q25 22 30 22Z';

/** The mallet's thick handle, rounded at its end. */
const MALLET_HANDLE = 'M53 50H67V100Q67 106 60 106Q53 106 53 100Z';

export default {
  // "de handzaag": the handsaw — a long grey blade tapering from the heel to a narrow tip, big dark
  // teeth along the bottom, an orange closed handle, rising a little to the right. On the intro
  // card it saws once along its blade: a pull back, then a push forward (as "zagen").
  'w.handzaag': () => (
    <g transform="translate(60 60) rotate(-8) translate(-61 -58)">
      <Move kind="from" dx={-22}>
      <Move kind="then" dx={22}>
      {/* The big teeth, then the blade on its dark depth edge */}
      <path d={teeth(36, 111, 74, 7.5, 8)} fill={STEEL_DARK} />
      <Part d={HANDSAW_BLADE} fill={PAL.steel} edge={STEEL_DARK} />
      <Shine d="M44 43L96 60" width={3} opacity={0.6} />
      <SawHandle x={10} y={36} w={27} h={42} grip={ORANGE_GRIP} />
      </Move>
      </Move>
    </g>
  ),

  // "de kapzaag": the tenon saw — a short, deep, straight grey blade with a yellow brass strip along
  // its back, fine dark teeth along the whole bottom and a wooden closed handle, lying level. On
  // the intro card it saws once: a pull back, then a push forward.
  'w.kapzaag': () => (
    <g transform="translate(0 -2)">
      <Move kind="from" dx={-20}>
      <Move kind="then" dx={20}>
      {/* The deep square blade on its dark depth edge, then its fine teeth */}
      <Part d="M40 46H102Q104 46 104 48V80H40Z" fill={PAL.steel} edge={STEEL_DARK} />
      <path d={teeth(40, 104, 80, 6.4, 8)} fill={STEEL_DARK} />
      <Shine d="M50 56H92" width={3} opacity={0.55} />
      {/* The brass strip along the whole back */}
      <Part d="M38 39H104Q107 39 107 42V48H38Z" fill={PAL.yellow} edge={PAL.yellowShade} />
      <Shine d="M46 42.5H90" color={PAL.yellowShine} width={2.2} opacity={0.9} />
      <SawHandle x={12} y={38} w={30} h={46} grip={WOOD_GRIP} />
      </Move>
      </Move>
    </g>
  ),

  // "de houtbeitel": the wood chisel — a long wooden handle, a steel ring, a short neck and a long,
  // narrow steel blade (narrower than the handle) ending in a light bevel and a white cutting edge,
  // rising to the right. On the intro card it is pushed forward along its blade, as it cuts.
  'w.houtbeitel': () => (
    <g transform="rotate(-20 60 60)">
      <Move kind="from" dx={-22}>
      {/* The handle, thick at the butt and narrowing to the ring */}
      <Part d={CHISEL_HANDLE} fill={PAL.wood} edge={PAL.cardDark} />
      <Shine d="M17 55.5Q21 54 31 53.6" color={WOOD_LIGHT} width={2.6} opacity={0.9} />
      {/* The steel ring and the short neck */}
      <Part d="M45 53.5H52Q54 53.5 54 55.5V64.5Q54 66.5 52 66.5H45Z" fill={PAL.steel} edge={STEEL_DARK} />
      <rect x="53" y="57.5" width="6" height="5" fill={STEEL_DARK} />
      {/* The long narrow blade, its light bevel and the white cutting edge */}
      <Part d={CHISEL_BLADE} fill={PAL.steel} edge={STEEL_DARK} />
      <path d="M97 55.5H107Q109 55.5 109 57.5V62.5Q109 64.5 107 64.5H97Z" fill={PAL.mist} />
      <path d="M108.2 57.5V62.5" stroke={PAL.white} strokeWidth="1.6" strokeLinecap="round" />
      <Shine d="M62 58H92" width={2} opacity={0.6} />
      </Move>
    </g>
  ),

  // "de handschaaf": the hand plane — a long, low red body on a dark sole, a wooden handle leaning
  // back at the rear, the steel iron leaning back in the middle, a round wooden knob at the front.
  // On the intro card it is pushed forward once, as it planes.
  'w.handschaaf': () => (
    <g transform="translate(0 4)">
      <Move kind="from" dx={-24}>
      {/* The rear handle */}
      <Part d={PLANE_TOTE} fill={PAL.wood} edge={PAL.cardDark} />
      <Shine d="M25 54Q23 46 20.5 40Q19 34.5 24.5 33.5" color={WOOD_LIGHT} width={2.4} opacity={0.9} />
      {/* The iron leaning back, sticking up out of the body */}
      <Part d="M55 66H67L58 30H46Z" fill={PAL.steel} edge={STEEL_DARK} />
      <Shine d="M50 36L56 60" width={2.2} opacity={0.6} />
      {/* The round knob at the front on its short neck */}
      <rect x="83" y="54" width="7" height="10" fill={PAL.cardDark} />
      <Part d="M86.5 41A8.5 8.5 0 1 1 86.5 58A8.5 8.5 0 1 1 86.5 41Z" fill={PAL.wood} edge={PAL.cardDark} />
      <Shine d="M81 49Q81.5 45 85 44" color={WOOD_LIGHT} width={2.2} opacity={0.9} />
      {/* The red body on its depth edge, with the dark sole */}
      <Part d={PLANE_BODY} fill={PAL.red} edge={RED_DARK} />
      <Part d="M12 80H106V86H12Z" fill={PAL.slate} edge={PAL.slateDark} />
      <Shine d="M22 67H94" color={PAL.redLight} width={2.4} opacity={0.8} />
      </Move>
    </g>
  ),

  // "de timmermanshamer": the carpenter's hammer — a long, slim steel head with a square striking
  // face at one end and a wedge-shaped pen at the other, the light wooden handle through its middle.
  // On the intro card it swings down once from higher up, round the end of its handle.
  'w.timmermanshamer': () => (
    <Move kind="turn" turn={35} at={[97, 50]}>
    <g transform="translate(60 60) rotate(-18) translate(-66 -55) scale(1.04)">
      {/* The handle, reaching into the head */}
      <Part d={HAMMER_HANDLE} fill={PAL.card} edge={PAL.cardDark} />
      <Shine d="M50 53.5H96" color={WOOD_LIGHT} width={2.2} opacity={0.9} />
      {/* The head: the slim bar with its pen, and the striking face */}
      <Part d={HAMMER_HEAD} fill={PAL.steel} edge={STEEL_DARK} />
      <Part d={HAMMER_FACE} fill={PAL.steel} edge={STEEL_DARK} />
      <Shine d="M31.5 41V66" width={2.4} opacity={0.6} />
    </g>
    </Move>
  ),

  // "de houten hamer": the mallet — a big square-cornered block of light wood on a thick darker
  // wooden handle, the handle's end showing on its top. On the intro card it swings down once
  // from further back, round the end of its handle.
  'w.houtenhamer': () => (
    <Move kind="turn" turn={-35} at={[58, 104]}>
    <g transform="rotate(14 60 62)">
      {/* The thick handle */}
      <Part d={MALLET_HANDLE} fill={PAL.wood} edge={PAL.cardDark} />
      <Shine d="M57 60V96" color={WOOD_LIGHT} width={2.4} opacity={0.8} />
      {/* The big wooden head, and the handle's end on its top */}
      <Part d={MALLET_HEAD} fill={PAL.card} edge={PAL.cardDark} />
      <rect x="54" y="18" width="12" height="6" rx="1.5" fill={PAL.wood} />
      <Shine d="M32 28H70" color={WOOD_LIGHT} width={3.2} opacity={0.95} />
    </g>
    </Move>
  ),
} as Record<string, () => JSX.Element>;
