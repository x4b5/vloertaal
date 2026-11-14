import type { JSX } from 'react';
import { Arrow, Ground, PAL, Shade, Shine } from './kit';

/**
 * Word pictures, group 45 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * The sector lessons of 14 November 2026: Schoonmaak (u.clean: l.rounds, l.colours).
 *  - "Your round" (l.rounds): the office (a wooden desk with a screen and a blue office chair;
 *    "de computer" is the screen alone, "de receptie" has a person behind a counter), the storey
 *    (a grey building of three storeys, the middle one yellow, an arrow at it), the corridor (the
 *    only picture that fills the square: a hallway in perspective, blue doors left and right),
 *    the toilet paper (a white roll with a sheet hanging down), the soap (a purple bar with
 *    bubbles) and to refill (a blue can pouring into a see-through dispenser, a green arrow up).
 *    Six silhouettes, six main colours: wood, grey/yellow, a full square, white, purple, blue.
 *  - "Colours and cloths" (l.colours): the cloth (a folded grey cloth: low, three soft
 *    layers with round folds, a stitched hem), the sponge (a thick tan block with holes and a dark scouring pad)
 *    and the four colours of the colour code. The colours are one and the same paint splash
 *    (`Splash`), so only the colour differs; it is round, with lobes and loose drops, so it is neither the folded
 *    cloth nor the block of the sponge, and neither of those two has one of the four colours.
 */

/** A splat of paint with loose drops round it: the same shape for every colour word. */
function Splash({ color, shade, shine = PAL.white }: { color: string; shade: string; shine?: string }) {
  const blobs = (
    <g>
      <circle cx="60" cy="60" r="34" />
      <circle cx="32" cy="41" r="12" />
      <circle cx="54" cy="27" r="13" />
      <circle cx="83" cy="35" r="14" />
      <circle cx="95" cy="61" r="11" />
      <circle cx="81" cy="85" r="14" />
      <circle cx="54" cy="94" r="12" />
      <circle cx="31" cy="79" r="13" />
      <circle cx="22" cy="59" r="8" />
      <circle cx="101" cy="22" r="5" />
      <circle cx="18" cy="24" r="4" />
      <circle cx="102" cy="98" r="5.5" />
      <circle cx="20" cy="102" r="4" />
    </g>
  );
  return (
    <g>
      {/* The darker rim on the lower right: the same splat, a little lower */}
      <g fill={shade} transform="translate(1.5 3)">{blobs}</g>
      <g fill={color} transform="translate(-1.5 -2)">{blobs}</g>
      <Shine d="M36 54Q38 40 52 35" color={shine} width={5} opacity={0.6} />
    </g>
  );
}

/** A door in a side wall of the corridor, as a quad (the wall runs to the vanishing point). */
const DOORS_LEFT = ['18 41.4 32 45.9 32 89.9 18 101.4', '36 47.2 42 49.1 42 81.6 36 86.6'];
const DOORS_RIGHT = ['102 41.4 88 45.9 88 89.9 102 101.4', '84 47.2 78 49.1 78 81.6 84 86.6'];

export default {
  // "het kantoor": the office — a wooden desk with a screen on it and a blue office chair on wheels.
  'w.kantoor': () => (
    <g>
      <Ground cx={60} cy={106} rx={50} ry={4} />
      {/* Screen on its stand */}
      <rect x="68" y="50" width="8" height="14" rx="2" fill={PAL.steel} />
      <Shade color={PAL.slateDark} opacity={1} at={[102, 34, 8, 30]}>
        <rect x="44" y="14" width="56" height="40" rx="5" fill={PAL.slate} />
      </Shade>
      <rect x="49" y="19" width="46" height="30" rx="2" fill={PAL.sky} />
      <path d="M55 27H76M55 34H86M55 41H70" stroke={PAL.ice} strokeWidth="2.6" strokeLinecap="round" />
      {/* Desk: top, a drawer unit on the right, a leg on the left */}
      <rect x="42" y="68" width="7" height="37" rx="2" fill={PAL.cardDark} />
      <rect x="80" y="68" width="28" height="37" rx="2" fill={PAL.card} />
      <rect x="100" y="68" width="8" height="37" rx="2" fill={PAL.cardShade} />
      <path d="M86 80H96M86 92H96" stroke={PAL.cardDark} strokeWidth="2.6" strokeLinecap="round" />
      <rect x="36" y="62" width="74" height="8" rx="3" fill={PAL.wood} />
      <path d="M40 64.4H104" stroke={PAL.card} strokeWidth="1.8" strokeLinecap="round" />
      {/* Office chair, seen from the side */}
      <path d="M12 98H44" stroke={PAL.slate} strokeWidth="4" strokeLinecap="round" />
      <rect x="25.5" y="82" width="5" height="16" fill={PAL.slate} />
      <circle cx="14" cy="102" r="3.6" fill={PAL.slateDark} />
      <circle cx="42" cy="102" r="3.6" fill={PAL.slateDark} />
      <rect x="10" y="38" width="9" height="40" rx="4" fill={PAL.blue} />
      <rect x="10" y="74" width="36" height="9" rx="4" fill={PAL.blueShade} />
      <Shine d="M13 44V58" width={2.4} opacity={0.5} />
    </g>
  ),

  // "de verdieping": the floor, the storey — a building of three storeys, the middle one yellow, an arrow at it.
  'w.verdieping': () => (
    <g>
      <Ground cx={68} cy={106} rx={40} ry={4} />
      <rect x="36" y="20" width="66" height="85" rx="3" fill={PAL.line} />
      <rect x="36" y="20" width="56" height="85" rx="3" fill={PAL.mist} />
      <rect x="32" y="14" width="74" height="8" rx="3" fill={PAL.slate} />
      {/* Top and bottom storey: grey windows, a door */}
      <g fill={PAL.steel}>
        <rect x="44" y="28" width="12" height="14" rx="2" />
        <rect x="62" y="28" width="12" height="14" rx="2" />
        <rect x="80" y="28" width="12" height="14" rx="2" />
        <rect x="44" y="84" width="12" height="13" rx="2" />
        <rect x="80" y="84" width="12" height="13" rx="2" />
      </g>
      <rect x="62" y="84" width="12" height="21" rx="2" fill={PAL.slate} />
      {/* The middle storey, lit up */}
      <rect x="32" y="49" width="74" height="28" rx="3" fill={PAL.yellowShade} />
      <rect x="32" y="49" width="64" height="28" rx="3" fill={PAL.yellow} />
      <g fill={PAL.white}>
        <rect x="44" y="56" width="12" height="14" rx="2" />
        <rect x="62" y="56" width="12" height="14" rx="2" />
        <rect x="80" y="56" width="12" height="14" rx="2" />
      </g>
      <Arrow from={[9, 63]} to={[28, 63]} color={PAL.sky} width={7} head={11} />
    </g>
  ),

  // "de gang": the hallway, the corridor — a corridor in perspective, blue doors on both sides, a window at the end.
  'w.gang': () => (
    <g strokeLinejoin="round">
      <rect x="10" y="12" width="100" height="96" rx="4" fill={PAL.paperShade} />
      <polygon points="10 12 44 38 44 80 10 108" fill={PAL.mist} stroke={PAL.mist} strokeWidth="2" />
      <polygon points="110 12 76 38 76 80 110 108" fill="#b4c0c8" stroke="#b4c0c8" strokeWidth="2" />
      <polygon points="10 108 44 80 76 80 110 108" fill={PAL.card} stroke={PAL.card} strokeWidth="2" />
      <path d="M60 82V106" stroke="#f0c48a" strokeWidth="3" strokeLinecap="round" />
      {/* The end wall with a window */}
      <rect x="44" y="38" width="32" height="42" fill={PAL.steel} />
      <rect x="52" y="45" width="16" height="20" rx="2" fill={PAL.ice} />
      {DOORS_LEFT.map((p) => <polygon key={p} points={p} fill={PAL.blue} />)}
      {DOORS_RIGHT.map((p) => <polygon key={p} points={p} fill={PAL.blueShade} />)}
      <circle cx="29" cy="68" r="2.4" fill={PAL.yellow} />
      <circle cx="91" cy="68" r="2.4" fill={PAL.yellow} />
    </g>
  ),

  // "het toiletpapier": the toilet paper — one white roll with its cardboard core, a sheet hanging down.
  'w.toiletpapier': () => (
    <g>
      {/* The hanging sheet, with a tear line */}
      <rect x="52" y="50" width="42" height="56" rx="2" fill={PAL.mist} />
      <rect x="52" y="50" width="34" height="56" rx="2" fill={PAL.paperShade} />
      <path d="M56 88H90" stroke={PAL.steel} strokeWidth="2" strokeDasharray="3 3.6" strokeLinecap="round" />
      {/* The roll */}
      <Shade color={PAL.mist} opacity={1} at={[64, 80, 50, 18]}>
        <path d="M36 16H88A14 27 0 0 1 88 70H36Z" fill={PAL.paperShade} />
      </Shade>
      <ellipse cx="36" cy="43" rx="15" ry="27" fill={PAL.line} />
      <ellipse cx="36" cy="43" rx="12" ry="23" fill={PAL.paper} />
      <ellipse cx="36" cy="43" rx="5.5" ry="10" fill={PAL.cardShade} />
      <ellipse cx="37" cy="43" rx="3" ry="7" fill={PAL.cardDark} />
      <Shine d="M52 22H80" width={3.5} opacity={0.9} />
    </g>
  ),

  // "de zeep": the soap — a purple bar of soap on a dish, soap bubbles above it.
  'w.zeep': () => (
    <g>
      <Ground cx={60} cy={104} rx={46} ry={4} />
      <ellipse cx="60" cy="94" rx="48" ry="9" fill={PAL.steel} />
      <ellipse cx="60" cy="91" rx="48" ry="9" fill={PAL.mist} />
      <rect x="20" y="58" width="80" height="34" rx="15" fill={PAL.purpleShade} />
      <Shade color={PAL.purple} opacity={1} at={[104, 68, 22, 30]}>
        <rect x="20" y="52" width="80" height="34" rx="15" fill={PAL.purpleLight} />
      </Shade>
      <rect x="38" y="62" width="44" height="14" rx="7" fill="none" stroke={PAL.purple} strokeWidth="2.4" />
      <Shine d="M30 66Q31 59 40 58" width={3.5} opacity={0.7} />
      <g fill="#e3f5ff" stroke={PAL.sky} strokeWidth="2.2">
        <circle cx="42" cy="36" r="9" />
        <circle cx="62" cy="22" r="7" />
        <circle cx="78" cy="38" r="10" />
        <circle cx="94" cy="20" r="5" />
        <circle cx="24" cy="22" r="4.5" />
      </g>
    </g>
  ),

  // "bijvullen": to refill, to top up — a blue can pours into a see-through dispenser; a green arrow shows the level going up.
  'w.bijvullen': () => (
    <g>
      <Ground cx={66} cy={106} rx={30} ry={4} />
      {/* The stream */}
      <path d="M66 44V84" stroke={PAL.sky} strokeWidth="6" strokeLinecap="round" />
      {/* The refill can, tipped over */}
      <g transform="translate(57 40) rotate(115)">
        <rect x="-6" y="-10" width="12" height="12" rx="2" fill={PAL.slate} />
        <rect x="-14" y="0" width="28" height="40" rx="5" fill={PAL.blue} />
        <rect x="-14" y="0" width="9" height="40" rx="4" fill={PAL.blueShade} />
        <rect x="-3" y="10" width="13" height="20" rx="2" fill={PAL.white} />
      </g>
      {/* The dispenser: open neck, see-through, half full */}
      <rect x="56" y="50" width="20" height="10" rx="2" fill={PAL.steel} />
      <rect x="44" y="58" width="44" height="47" rx="7" fill={PAL.ice} />
      <path d="M44 80H88V98A7 7 0 0 1 81 105H51A7 7 0 0 1 44 98Z" fill={PAL.sky} />
      <path d="M78 80H88V98A7 7 0 0 1 81 105H78Z" fill={PAL.skyShade} />
      <path d="M66 62V80" stroke={PAL.sky} strokeWidth="6" />
      <Shine d="M50 64V76" width={3} opacity={0.8} />
      <Arrow from={[101, 100]} to={[101, 64]} color={PAL.green} width={7} head={11} />
    </g>
  ),

  // "de doek": the cloth — a grey microfibre cloth, folded: three soft layers with round folds, a stitched hem on top.
  'w.doek': () => (
    <g>
      <Ground cx={60} cy={104} rx={46} ry={4} />
      {/* The side and the top of the folded pile */}
      <polygon points="90 54 108 34 108 79 90 99" fill={PAL.steel} stroke={PAL.steel} strokeWidth="4" strokeLinejoin="round" />
      <polygon points="14 54 90 54 108 34 32 34" fill={PAL.paper} stroke={PAL.paper} strokeWidth="4" strokeLinejoin="round" />
      <path d="M24 49H86L96 38" fill="none" stroke={PAL.line} strokeWidth="1.8" strokeDasharray="4 3.6" strokeLinecap="round" strokeLinejoin="round" />
      {/* The front: three folded layers, each with a round fold */}
      <rect x="12" y="52" width="80" height="49" rx="7" fill={PAL.line} />
      <rect x="12" y="52" width="80" height="15" rx="7" fill={PAL.paperShade} />
      <rect x="12" y="69" width="80" height="15" rx="7" fill={PAL.paperShade} />
      <rect x="12" y="86" width="80" height="15" rx="7" fill={PAL.paperShade} />
      <Shine d="M20 58H44" width={3} opacity={0.9} />
    </g>
  ),

  // "de spons": the sponge — a thick tan block full of holes, a dark scouring pad on top.
  'w.spons': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={48} ry={4} />
      {/* Side and top */}
      <polygon points="90 46 106 32 106 84 90 100" fill={PAL.cardShade} stroke={PAL.cardShade} strokeWidth="4" />
      <polygon points="16 46 90 46 106 32 32 32" fill={PAL.slate} stroke={PAL.slate} strokeWidth="4" />
      <polygon points="90 46 106 32 106 42 90 56" fill={PAL.slateDark} stroke={PAL.slateDark} strokeWidth="4" />
      {/* Front: the scouring pad over the sponge */}
      <rect x="14" y="44" width="78" height="58" rx="6" fill={PAL.card} />
      <path d="M14 58V50Q14 44 20 44H86Q92 44 92 50V58Z" fill={PAL.slate} />
      <g fill={PAL.cardDark}>
        <ellipse cx="30" cy="72" rx="6" ry="5" />
        <ellipse cx="52" cy="68" rx="4" ry="3.4" />
        <ellipse cx="72" cy="74" rx="7" ry="5.5" />
        <ellipse cx="42" cy="88" rx="6.5" ry="5" />
        <ellipse cx="62" cy="90" rx="4" ry="3.4" />
        <ellipse cx="82" cy="91" rx="4.5" ry="3.6" />
        <ellipse cx="24" cy="90" rx="3.6" ry="3" />
      </g>
      <path d="M22 50H60" stroke={PAL.steel} strokeWidth="2.4" strokeLinecap="round" />
    </g>
  ),

  // "rood": red — a splash of red paint (the same splash as blue, yellow and green).
  'w.rood': () => <Splash color={PAL.red} shade={PAL.redShade} />,

  // "blauw": blue — the same splash of paint, in blue.
  'w.blauw': () => <Splash color={PAL.blue} shade={PAL.blueShade} />,

  // "geel": yellow — the same splash of paint, in yellow.
  'w.geel': () => <Splash color={PAL.yellow} shade={PAL.yellowShade} shine={PAL.yellowShine} />,

  // "groen": green — the same splash of paint, in green.
  'w.groen': () => <Splash color={PAL.green} shade={PAL.greenShade} />,
} as Record<string, () => JSX.Element>;
