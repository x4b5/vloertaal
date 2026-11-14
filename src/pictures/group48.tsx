import type { JSX } from 'react';
import { Arrow, CurveArrow, Ground, Hand, Motion, PAL, SKIN, Shade, Shine, Tick, r1, twinkle, type Pt } from './kit';

/**
 * Word pictures, group 48 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * The sector lessons of 14 November 2026: Techniek (u.tech: l.drawing, l.weld).
 *
 *  - "De tekening en de maat" (l.drawing): the drawing is a light-blue SHEET (the outline of a
 *    part, thin grey dimension lines); the measure is a solid steel part with ONE bold blue
 *    dimension line over it (the line is the subject, no sheet); the caliper is a steel tool with
 *    two jaws round a small blue disc; to fit is a yellow block going down into the slot of a grey
 *    one, with a tick; the bolt is one steel thing lying slanted: a six-sided head, thread, a
 *    blunt end. "de millimeter" has no picture.
 *  - "Lassen en heet werk" (l.weld): to weld is a red torch on the seam of two plates
 *    and a blue-white star of light (the spark of "de vonk" is yellow and has no plates); the
 *    welding helmet is a navy shield with a small dark-green window (not the yellow hard hat); the
 *    smoke is grey clouds growing upwards from a glowing lump (the vapour of "de damp" is green
 *    lines over a bucket); the extraction is a yellow hose with a hood over a workbench, an arrow
 *    going in; to cool down is a bar that goes from glowing to grey, heat waves that fade and a
 *    blue arrow down; the burn is an open hand with a red patch on the palm.
 */

/** A dimension line: a straight line with an arrow head at both ends. */
function Dim({ from, to, color, width, head }: { from: Pt; to: Pt; color: string; width: number; head: number }) {
  const ang = Math.atan2(to[1] - from[1], to[0] - from[0]);
  const ux = Math.cos(ang);
  const uy = Math.sin(ang);
  const half = head * 0.62;
  const tip = (p: Pt, s: number) => {
    const bx = p[0] - s * ux * head;
    const by = p[1] - s * uy * head;
    return `${r1(p[0])},${r1(p[1])} ${r1(bx - uy * half)},${r1(by + ux * half)} ${r1(bx + uy * half)},${r1(by - ux * half)}`;
  };
  const k = head * 0.8;
  return (
    <g>
      <path d={`M${r1(from[0] + ux * k)} ${r1(from[1] + uy * k)}L${r1(to[0] - ux * k)} ${r1(to[1] - uy * k)}`} stroke={color} strokeWidth={width} strokeLinecap="round" />
      <polygon points={tip(to, 1)} fill={color} stroke={color} strokeWidth={width * 0.4} strokeLinejoin="round" />
      <polygon points={tip(from, -1)} fill={color} stroke={color} strokeWidth={width * 0.4} strokeLinejoin="round" />
    </g>
  );
}

/** A rising heat wave: a wavy line from (x, y) up over `h` units. */
function Wave({ x, y, h, color, opacity = 1 }: { x: number; y: number; h: number; color: string; opacity?: number }) {
  const q = h / 4;
  return (
    <path
      d={`M${x} ${y}Q${x - 6} ${y - q} ${x} ${y - 2 * q}Q${x + 6} ${y - 3 * q} ${x} ${y - h}`}
      fill="none"
      stroke={color}
      strokeWidth="4.5"
      strokeLinecap="round"
      opacity={opacity}
    />
  );
}

export default {
  // "de tekening": the technical drawing — a light-blue sheet with the outline of a part and thin
  // grey dimension lines with arrow ends above it and beside it (no digits).
  'w.tekening': () => (
    <g>
      <rect x="14" y="18" width="92" height="88" rx="5" fill={PAL.ice} />
      <rect x="14" y="14" width="92" height="88" rx="5" fill="#e3f5ff" />
      <path d="M28 46H64V64H49V88H28Z" fill={PAL.white} stroke={PAL.navy} strokeWidth="4" strokeLinejoin="round" />
      <circle cx="38.5" cy="56" r="4" fill={PAL.navy} />
      <path d="M28 40V26M64 40V26M70 46H88M55 88H88" stroke={PAL.steel} strokeWidth="1.8" strokeLinecap="round" />
      <Dim from={[28, 31]} to={[64, 31]} color={PAL.steel} width={2.2} head={7} />
      <Dim from={[83, 46]} to={[83, 88]} color={PAL.steel} width={2.2} head={7} />
      <path d="M76 24H98M84 31H98" stroke={PAL.line} strokeWidth="2.4" strokeLinecap="round" />
    </g>
  ),

  // "de maat": the measure, the size — a steel part with one bold blue dimension line over its
  // whole length, arrow heads at both ends, between two marks at the ends of the part.
  'w.maat': () => (
    <g>
      <Ground cx={60} cy={102} rx={46} ry={4} />
      <Shade color={PAL.slate} opacity={0.5} at={[108, 80, 26, 40]}>
        <rect x="14" y="64" width="92" height="36" rx="4" fill={PAL.steel} />
      </Shade>
      <circle cx="32" cy="82" r="6" fill={PAL.slate} />
      <circle cx="88" cy="82" r="6" fill={PAL.slate} />
      <Shine d="M20 70H52" width={3} opacity={0.5} />
      <path d="M16 56V20M104 56V20" stroke={PAL.sky} strokeWidth="4" strokeLinecap="round" />
      <Dim from={[20, 36]} to={[100, 36]} color={PAL.sky} width={7} head={15} />
    </g>
  ),

  // "de schuifmaat": the caliper — a steel beam with marks, a fixed jaw and a sliding dark-blue jaw;
  // a small blue disc sits between the jaws.
  'w.schuifmaat': () => (
    <g transform="translate(0 4)">
      {/* The part that is measured */}
      <Shade color={PAL.blueShade} opacity={1} at={[52, 72, 10, 22]}>
        <circle cx="37.5" cy="70" r="13.5" fill={PAL.blue} />
      </Shade>
      <Shine d="M29 66Q30 60 36 59.5" width={2.6} opacity={0.6} />
      {/* The fixed jaw and the beam */}
      <path d="M10 32H24V90L15 80V48H10Z" fill={PAL.steel} stroke={PAL.steel} strokeWidth="2" strokeLinejoin="round" />
      <path d="M14 32V20L23 32Z" fill={PAL.steel} stroke={PAL.steel} strokeWidth="2" strokeLinejoin="round" />
      <rect x="10" y="32" width="100" height="15" rx="2" fill={PAL.mist} />
      <rect x="10" y="42" width="100" height="5" rx="2" fill={PAL.steel} />
      <path d="M30 33V39M38 33V37M46 33V39M86 33V39M94 33V37M102 33V39" stroke={PAL.slate} strokeWidth="1.8" strokeLinecap="round" />
      {/* The sliding jaw */}
      <path d="M51 46H61V80L51 90Z" fill={PAL.navy} stroke={PAL.navy} strokeWidth="2" strokeLinejoin="round" />
      <path d="M52 30V20L60 30Z" fill={PAL.navy} stroke={PAL.navy} strokeWidth="2" strokeLinejoin="round" />
      <rect x="50" y="28" width="30" height="23" rx="3" fill={PAL.navy} />
      <rect x="57" y="34" width="17" height="7" rx="1.5" fill={PAL.mist} />
      <circle cx="73" cy="54" r="5" fill={PAL.navyShade} />
    </g>
  ),

  // "passen": to fit — a yellow block goes down into the slot of a grey block: the same width;
  // an arrow down and a tick.
  'w.passen': () => (
    <g>
      <Ground cx={60} cy={104} rx={46} ry={4} />
      <Shade color={PAL.slate} opacity={0.5} at={[106, 80, 22, 40]}>
        <path d="M16 62H42V88H78V62H104V102H16Z" fill={PAL.steel} stroke={PAL.steel} strokeWidth="3" strokeLinejoin="round" />
      </Shade>
      <Shade color={PAL.yellowShade} opacity={1} at={[82, 62, 12, 40]}>
        <rect x="44" y="40" width="32" height="40" rx="3" fill={PAL.yellow} />
      </Shade>
      <Shine d="M49 46V60" color={PAL.yellowShine} width={3} opacity={0.8} />
      <Arrow from={[60, 10]} to={[60, 34]} color={PAL.sky} width={7} head={11} />
      <Tick x={94} y={30} r={14} />
    </g>
  ),

  // "de bout": the bolt — a steel bolt lying slanted: a six-sided head, a smooth neck, thread and
  // a blunt end (not a point).
  'w.bout': () => (
    <g transform="rotate(-35 60 60)">
      {/* The shank and its thread */}
      <rect x="36" y="47" width="72" height="26" rx="3" fill={PAL.mist} />
      <rect x="36" y="64" width="72" height="9" rx="3" fill={PAL.steel} />
      <path d="M60 47L56 73M69 47L65 73M78 47L74 73M87 47L83 73M96 47L92 73M105 48L101 73" stroke={PAL.slate} strokeWidth="3" strokeLinecap="round" />
      <Shine d="M40 52H52" width={3} opacity={0.7} />
      {/* The six-sided head, seen from the side: three faces */}
      <rect x="12" y="36" width="24" height="48" rx="4" fill={PAL.steel} />
      <rect x="12" y="50" width="24" height="18" fill={PAL.mist} />
      <rect x="12" y="68" width="24" height="16" rx="4" fill={PAL.slate} />
      <rect x="12" y="68" width="24" height="6" fill={PAL.slate} />
      <rect x="34" y="41" width="6" height="38" rx="2" fill={PAL.slate} />
    </g>
  ),

  // "lassen": to weld — a welding torch (red handle, bent neck) on the seam between two steel plates; a
  // blue-white star of light and sparks where it touches.
  'w.lassen': () => (
    <g>
      <Ground cx={60} cy={104} rx={50} ry={4} />
      <path d="M17 78H58L54 102H10Z" fill={PAL.steel} stroke={PAL.steel} strokeWidth="2" strokeLinejoin="round" />
      <path d="M62 78H103L110 102H58Z" fill={PAL.mist} stroke={PAL.mist} strokeWidth="2" strokeLinejoin="round" />
      <path d="M57 94L56 101" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" />
      {/* The torch: a cable, a red handle, a bent steel neck and a nozzle at the seam */}
      <path d="M104 31Q112 34 108 46" fill="none" stroke={PAL.steel} strokeWidth="5" strokeLinecap="round" />
      <path d="M84 34Q68 36 66 62" fill="none" stroke={PAL.steel} strokeWidth="7.5" strokeLinecap="round" />
      <path d="M66.5 58L65 70" stroke={PAL.slate} strokeWidth="12" strokeLinecap="round" />
      <path d="M82 34L102 30" stroke={PAL.red} strokeWidth="16" strokeLinecap="round" />
      <path d="M85 27L86.5 40" stroke={PAL.redShade} strokeWidth="4" strokeLinecap="round" />
      <Shine d="M90 28L100 26" width={2.8} opacity={0.45} />
      {/* The light and the sparks */}
      <Motion x={60} y={80} dir={-160} spread={70} n={3} len={9} gap={22} color={PAL.orange} width={3.6} />
      <circle cx="26" cy="50" r="3" fill={PAL.yellow} />
      <circle cx="44" cy="38" r="2.6" fill={PAL.orange} />
      <path d={twinkle(60, 80, 21)} fill={PAL.ice} />
      <path d={twinkle(60, 80, 12)} fill={PAL.white} />
    </g>
  ),

  // "de laskap": the welding helmet — a dark-blue shield for the whole face, with a small dark
  // green window to look through and a knob at each side.
  'w.laskap': () => (
    <g>
      <Ground cx={60} cy={107} rx={28} ry={4} />
      <circle cx="25" cy="50" r="7" fill={PAL.yellowShade} />
      <circle cx="95" cy="50" r="7" fill={PAL.yellowShade} />
      <Shade color={PAL.navyShade} opacity={1} at={[98, 62, 24, 60]}>
        <path d="M60 12C82 12 94 26 94 46V76L80 106H40L26 76V46C26 26 38 12 60 12Z" fill={PAL.navy} />
      </Shade>
      <rect x="35" y="42" width="50" height="30" rx="5" fill={PAL.mist} />
      <rect x="40" y="47" width="40" height="20" rx="2.5" fill={PAL.okShade} />
      <path d="M46 62L56 52" stroke={PAL.leaf} strokeWidth="3" strokeLinecap="round" opacity=".7" />
      <path d="M48 84H72M52 93H68" stroke={PAL.navyShade} strokeWidth="3" strokeLinecap="round" />
      <Shine d="M35 34Q39 22 52 19" width={4} opacity={0.4} />
    </g>
  ),

  // "de rook": the smoke — grey clouds that rise from a glowing lump and grow bigger on the way up.
  'w.rook': () => (
    <g>
      <Ground cx={60} cy={106} rx={24} ry={3.5} />
      <ellipse cx="60" cy="101" rx="17" ry="6" fill={PAL.slateDark} />
      <ellipse cx="56" cy="99" rx="8" ry="3" fill={PAL.orange} />
      <circle cx="58" cy="87" r="7" fill={PAL.steel} />
      <circle cx="50" cy="73" r="10" fill={PAL.steel} />
      <circle cx="63" cy="70" r="9" fill={PAL.steel} />
      <Shade color={PAL.steel} opacity={1} at={[76, 62, 40, 16]}>
        <g fill={PAL.line}>
          <circle cx="42" cy="44" r="16" />
          <circle cx="64" cy="32" r="21" />
          <circle cx="86" cy="44" r="15" />
          <circle cx="64" cy="50" r="16" />
        </g>
      </Shade>
      <Shine d="M49 26Q54 18 63 17" color={PAL.paper} width={4} opacity={0.7} />
    </g>
  ),

  // "de afzuiging": the extraction — a yellow hose with a hood above a workbench; the smoke of
  // the work goes up into the hood, an arrow shows the way in.
  'w.afzuiging': () => (
    <g>
      {/* The hose (with ribs) and the hood */}
      <path d="M66 38C66 12 88 17 126 17" fill="none" stroke={PAL.yellow} strokeWidth="15" />
      <path d="M66 38C66 12 88 17 126 17" fill="none" stroke={PAL.yellowShade} strokeWidth="15" strokeDasharray="2.6 5.4" />
      <Shade color={PAL.slate} opacity={0.55} at={[98, 46, 16, 30]}>
        <path d="M54 34H78L96 54V60H36V54Z" fill={PAL.steel} stroke={PAL.steel} strokeWidth="2" strokeLinejoin="round" />
      </Shade>
      <rect x="33" y="55" width="66" height="7" rx="3" fill={PAL.slate} />
      {/* The workbench, the work and its smoke */}
      <rect x="10" y="96" width="100" height="10" rx="3" fill={PAL.wood} />
      <path d="M14 98.5H106" stroke={PAL.card} strokeWidth="2" strokeLinecap="round" />
      <rect x="56" y="89" width="30" height="7" rx="1.5" fill={PAL.steel} />
      <circle cx="72" cy="83" r="5" fill={PAL.line} />
      <circle cx="76" cy="73" r="6.5" fill={PAL.line} />
      <circle cx="68" cy="68" r="5.5" fill={PAL.line} />
      <CurveArrow from={[26, 90]} to={[50, 66]} bend={-9} color={PAL.sky} width={7} head={12} />
    </g>
  ),

  // "afkoelen": to cool down — a metal bar that glows at one end and is grey at the other; the
  // heat waves above it get smaller and fade, a blue arrow points down.
  'w.afkoelen': () => (
    <g>
      <Ground cx={48} cy={102} rx={42} ry={4} />
      <rect x="10" y="78" width="76" height="22" rx="5" fill={PAL.steel} />
      <rect x="10" y="78" width="52" height="22" rx="5" fill={PAL.clayShade} />
      <rect x="10" y="78" width="30" height="22" rx="5" fill={PAL.orange} />
      <rect x="10" y="92" width="76" height="8" rx="4" fill="#000" opacity=".14" />
      <Shine d="M16 84H32" color={PAL.yellowShine} width={3.4} opacity={0.85} />
      <Wave x={22} y={68} h={44} color={PAL.orange} />
      <Wave x={44} y={68} h={30} color={PAL.orangeLight} opacity={0.8} />
      <Wave x={64} y={68} h={18} color={PAL.line} opacity={0.8} />
      <Arrow from={[100, 26]} to={[100, 96]} color={PAL.sky} width={9} head={15} />
    </g>
  ),

  // "de brandwond": the burn, a wound from heat — an open hand with a red patch on the palm and
  // short red lines next to it (it hurts). No blood, no blister.
  'w.brandwond': () => (
    <g>
      <Hand pose="open" x={52} y={100} scale={1.6} skin={SKIN.henk} sleeve={[PAL.blue, PAL.blueShade]} />
      <ellipse cx="53" cy="76" rx="14" ry="12" fill={PAL.redLight} />
      <path d="M44 76C44 69 50 67 55 69C61 68 64 73 62 78C62 83 56 85 51 83C47 83 44 80 44 76Z" fill={PAL.red} />
      <Motion x={53} y={76} dir={-25} spread={56} n={3} len={10} gap={30} color={PAL.red} width={4} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
