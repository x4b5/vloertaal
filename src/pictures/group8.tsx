import type { JSX } from 'react';
import { CastHead } from '../components/Characters';
import { Bust, Clock, Cross, Ground, Hand, Motion, PAL, SKIN, Shade, Shine, Sparkle, Tick } from './kit';

/** Word pictures, group 8 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx. */

/** A mop bucket (yellow, with a wringer on top), bottom-left of the body at (x, y). */
function MopBucket({ x, y, s = 1, color = PAL.yellow, shade = PAL.yellowShade }: { x: number; y: number; s?: number; color?: string; shade?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <circle cx="6" cy="2" r="4" fill={PAL.slate} />
      <circle cx="34" cy="2" r="4" fill={PAL.slate} />
      <Shade color={shade} opacity={1} at={[44, -16, 12, 30]}>
        <path d="M-2 -34H42L38 -2Q38 0 36 0H4Q2 0 2 -2Z" fill={color} />
      </Shade>
      <rect x="-4" y="-38" width="48" height="7" rx="3.5" fill={shade} />
      <path d="M6 -26H34" stroke={shade} strokeWidth="2" strokeLinecap="round" opacity=".7" />
      <Shine d="M3 -27V-8" color={PAL.yellowShine} opacity={0.8} />
    </g>
  );
}

/** A plain round bucket, bottom middle at (x, y), about 36 wide and 32 tall at s = 1. */
function Bucket({ x, y, s = 1, color = PAL.sky, shade = PAL.skyShade }: { x: number; y: number; s?: number; color?: string; shade?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M-17 -30Q-18 -48 0 -48Q18 -48 17 -30" fill="none" stroke={PAL.steel} strokeWidth="2.6" />
      <Shade color={shade} opacity={1} at={[20, -14, 9, 26]}>
        <path d="M-18 -30H18L14 -2Q14 0 12 0H-12Q-14 0 -14 -2Z" fill={color} />
      </Shade>
      <ellipse cx="0" cy="-30" rx="19" ry="5" fill={shade} />
      <ellipse cx="0" cy="-30" rx="15" ry="3" fill={PAL.slate} opacity=".55" />
      <Shine d="M-13 -23L-11 -7" opacity={0.55} />
    </g>
  );
}

/** A wall tap pointing down, spout at (x, y). */
function Tap({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="-30" y="-24" width="10" height="16" rx="3" fill={PAL.steel} />
      <path d="M-24 -16H-4Q4 -16 4 -8V-1" fill="none" stroke={PAL.mist} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M-24 -13H-4Q1 -13 1 -8V-1" fill="none" stroke={PAL.steel} strokeWidth="3" strokeLinecap="round" opacity=".6" />
      <rect x="-15" y="-28" width="7" height="9" rx="2" fill={PAL.steel} />
      <rect x="-21" y="-32" width="19" height="6" rx="3" fill={PAL.red} />
      <rect x="-2" y="-3" width="12" height="6" rx="2.5" fill={PAL.steel} />
    </g>
  );
}

/** Falling water from a tap, from y0 to y1 at x. */
function Stream({ x, y0, y1, w = 7 }: { x: number; y0: number; y1: number; w?: number }) {
  return (
    <g>
      <rect x={x - w / 2} y={y0} width={w} height={y1 - y0} rx={w / 2} fill={PAL.ice} />
      <path d={`M${x - w / 2 + 2} ${y0 + 3}V${y1 - 4}`} stroke={PAL.white} strokeWidth="1.6" strokeLinecap="round" opacity=".8" />
    </g>
  );
}

/** A yellow "wet floor" A-frame sign with a slipping-person pictogram, feet at bottom y. */
function WetSign({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {/* Back leg */}
      <path d="M8 -86L30 0H22L4 -80Z" fill={PAL.yellowShade} />
      {/* Front panel */}
      <path d="M-8 -86Q0 -92 8 -86L26 -4Q27 0 23 0H-23Q-27 0 -26 -4Z" fill={PAL.yellow} />
      <path d="M8 -86L26 -4Q27 0 23 0H14Z" fill={PAL.yellowShade} opacity=".55" />
      <rect x="-4" y="-92" width="8" height="8" rx="3" fill={PAL.yellowShade} />
      {/* Pictogram: a person slipping, on a wavy wet floor */}
      <g stroke={PAL.ink} strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M-4 -50L2 -32" strokeWidth="5.6" />
        <path d="M-2 -46L-12 -54M-2 -46L8 -52" strokeWidth="4.2" />
        <path d="M2 -32L13 -30L16 -22M2 -32L-8 -26L-14 -30" strokeWidth="4.6" />
        <path d="M-16 -14Q-11 -18 -6 -14T4 -14T14 -14" strokeWidth="3.2" />
      </g>
      <circle cx="-7" cy="-59" r="4.8" fill={PAL.ink} />
      <Shine d="M-8 -80L-20 -14" color={PAL.yellowShine} opacity={0.75} width={3} />
    </g>
  );
}

/** A small drawn figure (cast head on a simple body) for full-body scenes. Head centre (hx, hy). */
function Head({ who, x, y, s, expr = 'neutral', squint = false }: { who: 'bram' | 'amina' | 'henk' | 'jada'; x: number; y: number; s: number; expr?: 'neutral' | 'joy' | 'pleased' | 'disappointed' | 'thinking'; squint?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s}) translate(-60 -58)`}>
      <CastHead who={who} expr={expr} squint={squint} />
    </g>
  );
}

/** A wall time clock: a dark box with a clock face on top and a card slot; top-left at (x, y). */
function TimeClock({ x, y, s = 1, card = true }: { x: number; y: number; s?: number; card?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="0" y="4" width="50" height="76" rx="9" fill={PAL.slateDark} />
      <rect x="0" y="0" width="50" height="76" rx="9" fill={PAL.slate} />
      <rect x="40" y="0" width="10" height="76" rx="5" fill={PAL.slateDark} opacity=".45" />
      <Clock cx={25} cy={25} r={18} hour={8} minute={0} />
      {/* Card reader: a green light and a slot */}
      <rect x="9" y="50" width="32" height="18" rx="4" fill={PAL.slateDark} />
      <rect x="13" y="57" width="24" height="4" rx="2" fill="#141b21" />
      {card && (
        <g>
          <rect x="16" y="40" width="18" height="21" rx="2.5" fill={PAL.paperShade} />
          <rect x="16" y="38" width="18" height="21" rx="2.5" fill={PAL.white} />
          <path d="M20 44H30M20 49H27" stroke={PAL.line} strokeWidth="2" strokeLinecap="round" />
        </g>
      )}
    </g>
  );
}

/** A staff card held flat: white with a blue band, a little photo and a barcode; top-left at (x, y). */
function StaffCard({ x, y, w = 40, h = 26, who = 'jada' as const, rotate = 0 }: { x: number; y: number; w?: number; h?: number; who?: 'bram' | 'amina' | 'henk' | 'jada'; rotate?: number }) {
  return (
    <g transform={`rotate(${rotate} ${x + w / 2} ${y + h / 2})`}>
      <rect x={x} y={y + 2.5} width={w} height={h} rx="4" fill={PAL.paperShade} />
      <rect x={x} y={y} width={w} height={h} rx="4" fill={PAL.white} />
      <path d={`M${x} ${y + 4}A4 4 0 0 1 ${x + 4} ${y}H${x + w - 4}A4 4 0 0 1 ${x + w} ${y + 4}V${y + h * 0.22}H${x}Z`} fill={PAL.orange} />
      <rect x={x + w * 0.08} y={y + h * 0.32} width={w * 0.36} height={h * 0.58} rx="2.5" fill="#e3f5ff" />
      <g transform={`translate(${x + w * 0.08} ${y + h * 0.32}) scale(${(w * 0.36) / 106}) translate(-7 2)`}>
        <CastHead who={who} expr="pleased" />
      </g>
      <path d={`M${x + w * 0.54} ${y + h * 0.42}V${y + h * 0.82}M${x + w * 0.62} ${y + h * 0.42}V${y + h * 0.82}M${x + w * 0.72} ${y + h * 0.42}V${y + h * 0.82}M${x + w * 0.8} ${y + h * 0.42}V${y + h * 0.82}M${x + w * 0.88} ${y + h * 0.42}V${y + h * 0.82}`} stroke={PAL.slate} strokeWidth={w * 0.045} />
    </g>
  );
}

/** Round badge with a door and an arrow going in (green) or out (red). */
function DoorBadge({ x, y, r, out }: { x: number; y: number; r: number; out: boolean }) {
  const color = out ? PAL.red : PAL.ok;
  const shade = out ? PAL.redShade : PAL.okShade;
  const k = r / 20;
  return (
    <g>
      <circle cx={x} cy={y + r * 0.1} r={r} fill={shade} />
      <circle cx={x} cy={y} r={r} fill={color} />
      <g transform={`translate(${x} ${y}) scale(${k})`}>
        <path d="M2 -11H10Q12 -11 12 -9V9Q12 11 10 11H2" fill="none" stroke={PAL.white} strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
        {out ? (
          <>
            <path d="M4 0H-9" stroke={PAL.white} strokeWidth="3.8" strokeLinecap="round" />
            <path d="M-6 -6L-13 0L-6 6" fill="none" stroke={PAL.white} strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" />
          </>
        ) : (
          <>
            <path d="M-13 0H0" stroke={PAL.white} strokeWidth="3.8" strokeLinecap="round" />
            <path d="M-3 -6L4 0L-3 6" fill="none" stroke={PAL.white} strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}
      </g>
    </g>
  );
}

/** A scene for in/out clocking: the time clock with a hand holding a card to it. */
function ClockingScene({ out }: { out: boolean }) {
  return (
    <g>
      <TimeClock x={14} y={30} s={0.95} card={false} />
      <Motion x={38} y={88} dir={0} spread={60} n={3} len={6} gap={18} color={out ? PAL.red : PAL.ok} width={3.2} />
      <g transform="rotate(-8 64 84)">
        <StaffCard x={30} y={72} w={34} h={22} who="amina" />
      </g>
      <Hand pose="hold" x={68} y={106} rotate={-60} scale={0.72} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} />
      <DoorBadge x={88} y={30} r={20} out={out} />
    </g>
  );
}

const pictures: Record<string, () => JSX.Element> = {
  // "de dweil": the mop — a wet string mop on the floor, its stick up, and a yellow mop bucket
  'w.dweil': () => (
    <g>
      <Ground cx={60} cy={106} rx={46} ry={4.5} />
      <ellipse cx="34" cy="102" rx="24" ry="5" fill={PAL.ice} opacity=".8" />
      <MopBucket x={64} y={102} s={1} />
      {/* Stick */}
      <path d="M62 12L38 88" stroke={PAL.wood} strokeWidth="5.5" strokeLinecap="round" />
      <path d="M61 14L58 24" stroke={PAL.slate} strokeWidth="6" strokeLinecap="round" />
      {/* Mop head: floppy strands */}
      <rect x="30" y="84" width="16" height="8" rx="3" fill={PAL.steel} />
      <g stroke={PAL.mist} strokeWidth="5" strokeLinecap="round" fill="none">
        <path d="M32 90Q24 94 16 100" />
        <path d="M34 91Q28 97 24 103" />
        <path d="M38 92Q37 98 34 104" />
        <path d="M42 92Q45 98 46 104" />
        <path d="M44 91Q51 95 56 101" />
      </g>
      <g stroke={PAL.paper} strokeWidth="2.2" strokeLinecap="round" fill="none" opacity=".9">
        <path d="M32 90Q26 93 21 97" />
        <path d="M38 92Q37 96 36 99" />
      </g>
      <Motion x={28} y={98} dir={-160} spread={40} n={2} len={6} gap={14} color={PAL.sky} width={3} />
    </g>
  ),

  // "de stofzuiger": the vacuum cleaner — a red canister on wheels, hose and wand down to the floor nozzle
  'w.stofzuiger': () => (
    <g>
      <Ground cx={60} cy={104} rx={48} ry={4.5} />
      {/* Hose */}
      <path d="M46 66C46 34 62 22 78 26" fill="none" stroke={PAL.slate} strokeWidth="8" strokeLinecap="round" />
      <path d="M46 66C46 34 62 22 78 26" fill="none" stroke={PAL.slateDark} strokeWidth="8" strokeLinecap="butt" strokeDasharray="2 4" opacity=".6" />
      {/* Wand and nozzle */}
      <path d="M80 26L96 92" stroke={PAL.mist} strokeWidth="6" strokeLinecap="round" />
      <path d="M81.5 26L97 90" stroke={PAL.steel} strokeWidth="2" strokeLinecap="round" opacity=".7" />
      <rect x="74" y="20" width="12" height="14" rx="4" fill={PAL.slate} transform="rotate(-14 80 27)" />
      <rect x="80" y="90" width="30" height="12" rx="5" fill={PAL.slate} />
      <rect x="80" y="98" width="30" height="4" rx="2" fill={PAL.slateDark} />
      {/* Canister */}
      <circle cx="22" cy="98" r="6" fill={PAL.slateDark} />
      <circle cx="54" cy="98" r="6" fill={PAL.slateDark} />
      <Shade color={PAL.redShade} opacity={1} at={[66, 84, 14, 30]}>
        <path d="M12 82Q12 58 38 58Q64 58 64 82Q64 96 54 96H22Q12 96 12 82Z" fill={PAL.red} />
      </Shade>
      <rect x="10" y="88" width="56" height="8" rx="4" fill={PAL.slate} />
      <circle cx="46" cy="70" r="7" fill={PAL.slate} />
      <circle cx="46" cy="70" r="3.4" fill={PAL.slateDark} />
      <path d="M24 64H36" stroke={PAL.slate} strokeWidth="4" strokeLinecap="round" />
      <Shine d="M17 80Q18 68 26 63" opacity={0.6} />
    </g>
  ),

  // "glad": slippery — a worker slips on a wet floor, next to the yellow wet-floor sign
  'w.glad': () => (
    <g>
      <ellipse cx="46" cy="104" rx="38" ry="6" fill={PAL.ice} />
      <path d="M22 102Q30 100 40 101" stroke={PAL.white} strokeWidth="2.4" strokeLinecap="round" opacity=".9" />
      <WetSign x={96} y={104} s={0.5} />
      {/* The slipping figure: legs fly forward, arms up */}
      <g strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M40 74L60 82L72 74" stroke={PAL.navy} strokeWidth="9" />
        <path d="M40 74L30 90L44 98" stroke={PAL.navyShade} strokeWidth="9" />
        <path d="M34 56L18 44M38 54L56 40" stroke={PAL.orange} strokeWidth="7.5" />
      </g>
      <rect x="70" y="66" width="12" height="9" rx="4" fill={PAL.slateDark} transform="rotate(-30 76 70)" />
      <rect x="40" y="94" width="12" height="9" rx="4" fill={PAL.slateDark} transform="rotate(10 46 98)" />
      <circle cx="16" cy="42" r="4.6" fill={SKIN.bram[0]} />
      <circle cx="58" cy="38" r="4.6" fill={SKIN.bram[0]} />
      <path d="M32 50Q30 66 40 76L48 70Q42 60 44 50Z" fill={PAL.orange} />
      <rect x="28" y="48" width="18" height="28" rx="8" fill={PAL.orange} transform="rotate(-24 37 62)" />
      <path d="M33 54L41 74" stroke="#eef5f7" strokeWidth="3.4" strokeLinecap="round" />
      <Head who="bram" x={26} y={32} s={0.32} expr="disappointed" />
      <Motion x={60} y={98} dir={0} spread={30} n={2} len={8} gap={6} color={PAL.sky} width={3.2} />
    </g>
  ),

  // "stoffen": to dust — a hand sweeps a feather duster along a shelf, dust puffs fly off
  'w.stoffen': () => (
    <g>
      {/* Shelf with a plant pot and a jar on it */}
      <rect x="10" y="80" width="78" height="9" rx="3" fill={PAL.wood} />
      <rect x="10" y="85" width="78" height="4" rx="2" fill={PAL.cardDark} />
      <path d="M22 89V98H30" fill="none" stroke={PAL.steel} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M76 89V98H68" fill="none" stroke={PAL.steel} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 62H34L32 80H18Z" fill={PAL.clay} />
      <path d="M28 62H34L32 80H28Z" fill={PAL.clayShade} />
      <path d="M25 62Q20 50 14 48M25 62Q28 48 36 44" fill="none" stroke={PAL.leaf} strokeWidth="4" strokeLinecap="round" />
      {/* Dust puffs */}
      <g fill={PAL.mist}>
        <circle cx="50" cy="72" r="5.5" />
        <circle cx="44" cy="60" r="4" />
        <circle cx="54" cy="52" r="3.2" />
        <circle cx="40" cy="72" r="3" />
      </g>
      {/* Duster: a fan of feathers on the shelf, handle up to the hand */}
      <path d="M74 66L100 36" stroke={PAL.cardDark} strokeWidth="5" strokeLinecap="round" />
      {[-70, -40, -10, 20, 50].map((a, i) => (
        <ellipse key={a} cx="74" cy="56" rx="6" ry="17" fill={i % 2 ? PAL.purple : PAL.purpleLight} transform={`rotate(${a - 40} 74 68) translate(0 -2)`} />
      ))}
      <circle cx="74" cy="68" r="5" fill={PAL.purpleShade} />
      <Hand pose="hold" x={112} y={46} rotate={-140} scale={0.55} skin={SKIN.jada} sleeve={[PAL.sky, PAL.skyShade]} />
      
    </g>
  ),

  // "het bordje": the sign — a yellow wet-floor sign with the slipping-person pictogram
  'w.bordje': () => (
    <g>
      <Ground cx={64} cy={106} rx={36} ry={5} />
      <WetSign x={60} y={106} s={1.02} />
    </g>
  ),

  // "mengen": to mix — two cleaning bottles poured together into one bucket (and a red warning cross)
  'w.mengen': () => (
    <g>
      <Ground cx={60} cy={106} rx={26} ry={4} />
      {/* Streams meeting in the bucket */}
      <path d="M34 44Q50 50 56 72" fill="none" stroke={PAL.sky} strokeWidth="5" strokeLinecap="round" />
      <path d="M86 44Q70 50 64 72" fill="none" stroke={PAL.leaf} strokeWidth="5" strokeLinecap="round" />
      <Bucket x={60} y={104} s={0.95} color={PAL.mist} shade={PAL.steel} />
      <ellipse cx="60" cy="75.5" rx="13" ry="2.6" fill={PAL.green} opacity=".7" />
      {/* Left bottle, tipped to the right */}
      <g transform="rotate(62 26 44)">
        <rect x="14" y="28" width="24" height="36" rx="7" fill={PAL.blue} />
        <rect x="30" y="28" width="8" height="36" rx="4" fill={PAL.blueShade} />
        <rect x="20" y="20" width="12" height="10" rx="2" fill={PAL.paper} />
        <rect x="18" y="40" width="16" height="12" rx="2" fill={PAL.white} />
      </g>
      {/* Right bottle, tipped to the left */}
      <g transform="rotate(-62 94 44)">
        <rect x="82" y="28" width="24" height="36" rx="7" fill={PAL.yellow} />
        <rect x="98" y="28" width="8" height="36" rx="4" fill={PAL.yellowShade} />
        <rect x="88" y="20" width="12" height="10" rx="2" fill={PAL.paper} />
        <rect x="86" y="40" width="16" height="12" rx="2" fill={PAL.white} />
      </g>
      <Cross x={60} y={20} r={12} />
    </g>
  ),

  // "de damp": the fumes — green-grey vapour curls up from a bucket; Amina holds her nose shut
  'w.damp': () => (
    <g>
      <Ground cx={38} cy={106} rx={24} ry={4} />
      <Bucket x={38} y={104} s={1} />
      <g fill="none" stroke={PAL.lime} strokeWidth="6" strokeLinecap="round" opacity=".95">
        <path d="M28 52Q20 44 28 36T28 18" />
        <path d="M40 52Q48 42 40 32T42 12" />
        <path d="M50 54Q58 48 54 40" />
      </g>
      <g fill="none" stroke={PAL.leafShade} strokeWidth="2" strokeLinecap="round" opacity=".6">
        <path d="M30 50Q24 44 30 37" />
        <path d="M42 50Q48 42 42 34" />
      </g>
      <Bust who="amina" x={88} y={124} scale={0.5} expr="disappointed" squint />
      <Hand pose="fist" x={84} y={104} rotate={20} scale={0.52} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} />
    </g>
  ),

  // "luchten": to air out — a window swung open, fresh air streams in
  'w.luchten': () => (
    <g>
      {/* Wall opening with the outside sky */}
      <rect x="12" y="14" width="64" height="86" rx="6" fill={PAL.paperShade} />
      <rect x="18" y="20" width="52" height="74" rx="3" fill="#e3f5ff" />
      <circle cx="54" cy="36" r="8" fill={PAL.yellow} opacity=".9" />
      {/* Fixed left pane */}
      <rect x="18" y="20" width="26" height="74" rx="3" fill={PAL.white} />
      <rect x="22" y="24" width="18" height="66" rx="2" fill={PAL.ice} />
      <Shine d="M26 30L26 46" opacity={0.7} />
      {/* Right pane swung open towards the viewer */}
      <path d="M70 20L92 12V104L70 94Z" fill={PAL.white} />
      <path d="M74 26L88 21V95L74 89Z" fill={PAL.ice} />
      <path d="M90 13V103" stroke={PAL.paperShade} strokeWidth="3" />
      <rect x="64" y="54" width="4" height="10" rx="2" fill={PAL.steel} />
      {/* Fresh air flowing in */}
      <g fill="none" stroke={PAL.sky} strokeWidth="4.5" strokeLinecap="round">
        <path d="M28 44Q44 36 58 46T96 46" />
        <path d="M30 66Q46 58 60 68T100 68" />
      </g>
      <path d="M92 39L101 46L92 53" fill="none" stroke={PAL.sky} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M96 61L105 68L96 75" fill="none" stroke={PAL.sky} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 86Q40 80 54 86" fill="none" stroke={PAL.skyShade} strokeWidth="3.4" strokeLinecap="round" opacity=".6" />
    </g>
  ),

  // "spoelen": to rinse — a cloth held under the running tap, water dripping into the sink
  'w.spoelen': () => (
    <g>
      <Tap x={50} y={30} s={1.1} />
      <Stream x={55} y0={32} y1={62} w={8} />
      {/* Sink basin */}
      <path d="M14 88H104Q102 106 84 106H34Q16 106 14 88Z" fill={PAL.mist} />
      <path d="M80 88H104Q102 106 84 106H76Z" fill={PAL.steel} opacity=".45" />
      <rect x="10" y="84" width="98" height="8" rx="4" fill={PAL.paperShade} />
      {/* The wet cloth, held by one corner, hanging in the stream */}
      <path d="M78 52Q66 50 48 58Q44 70 48 82Q54 78 58 84Q63 79 68 84Q72 76 76 80Q80 66 78 52Z" fill={PAL.sky} />
      <path d="M78 52Q70 54 66 60Q68 72 68 84Q72 76 76 80Q80 66 78 52Z" fill={PAL.skyShade} />
      <path d="M52 64Q58 62 64 64M52 72Q56 71 62 72" fill="none" stroke={PAL.skyShade} strokeWidth="1.8" strokeLinecap="round" />
      <Hand pose="hold" x={98} y={70} rotate={-70} scale={0.62} skin={SKIN.henk} sleeve={[PAL.navy, PAL.navyShade]} />
      {/* Drips */}
      <g fill={PAL.ice}>
        <path d="M52 88Q55 92 55 94A3 3 0 0 1 49 94Q49 92 52 88Z" />
        <path d="M62 90Q65 94 65 96A3 3 0 0 1 59 96Q59 94 62 90Z" />
      </g>
      <Motion x={56} y={84} dir={-90} spread={140} n={3} len={5} gap={22} color={PAL.sky} width={3} />
    </g>
  ),

  // "het haarnetje": the hairnet — Henk wears a light net cap over his head
  'w.haarnetje': () => (
    <g>
      <Bust who="henk" x={60} y={124} scale={0.86} expr="neutral" />
      <g transform="translate(60 124) scale(0.86) translate(-60 -134) translate(60 22) scale(.72) translate(-60 -14)">
        {/* Net cap over the head */}
        <path d="M28 54C26 26 42 14 60 14C78 14 94 26 92 54Q60 44 28 54Z" fill="#e3f5ff" opacity=".9" />
        <g stroke={PAL.sky} strokeWidth="1.6" opacity=".7" fill="none">
          <path d="M36 26L82 50M30 38L70 58M46 18L90 40M58 14L92 30" />
          <path d="M84 26L38 50M90 38L50 58M74 18L30 40M62 14L28 30" />
        </g>
        <path d="M27 54Q34 49 41 52T55 49T69 49T83 52T93 54" fill="none" stroke={PAL.sky} strokeWidth="4" strokeLinecap="round" />
        <Shine d="M40 26Q48 18 58 17" opacity={0.9} width={3} />
      </g>
    </g>
  ),

  // "het kluisje": the locker — a row of staff lockers, the middle one locked with a padlock
  'w.kluisje': () => {
    const locker = (x: number, lock: boolean) => (
      <g key={x}>
        <rect x={x} y="16" width="30" height="88" rx="4" fill={PAL.sky} />
        <rect x={x + 24} y="16" width="6" height="88" rx="3" fill={PAL.skyShade} />
        <path d={`M${x + 7} 26H${x + 21}M${x + 7} 31H${x + 21}M${x + 7} 36H${x + 21}`} stroke={PAL.skyShade} strokeWidth="2.2" strokeLinecap="round" />
        <rect x={x + 18} y="54" width="5" height="16" rx="2.5" fill={PAL.slate} />
        {lock && (
          <g>
            <path d={`M${x + 15} 72V66A5.5 5.5 0 0 1 ${x + 26} 66V72`} fill="none" stroke={PAL.steel} strokeWidth="3.4" />
            <rect x={x + 11} y="70" width="19" height="16" rx="4" fill={PAL.yellow} />
            <rect x={x + 24} y="70" width="6" height="16" rx="3" fill={PAL.yellowShade} />
            <circle cx={x + 19} cy="77" r="2.2" fill={PAL.slate} />
            <rect x={x + 18} y="77" width="2.4" height="5" rx="1" fill={PAL.slate} />
          </g>
        )}
      </g>
    );
    return (
      <g>
        <Ground cx={60} cy={106} rx={50} ry={4} />
        <rect x="12" y="12" width="96" height="94" rx="6" fill={PAL.skyShade} />
        {locker(14, false)}
        {locker(45, true)}
        {locker(76, false)}
        <Shine d="M18 22V44" opacity={0.5} />
      </g>
    );
  },

  // "de rookplek": the smoking area — an outdoor bench next to a standing ashtray with a smoking cigarette
  'w.rookplek': () => (
    <g>
      <Ground cx={56} cy={105} rx={48} ry={4.5} />
      {/* Bench */}
      <rect x="12" y="58" width="56" height="8" rx="3" fill={PAL.wood} />
      <rect x="12" y="70" width="56" height="8" rx="3" fill={PAL.wood} />
      <rect x="10" y="80" width="60" height="8" rx="3" fill={PAL.card} />
      <path d="M18 88V104M62 88V104M18 66V82M62 66V82" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" />
      {/* Standing ashtray */}
      <rect x="80" y="54" width="22" height="50" rx="5" fill={PAL.steel} />
      <rect x="94" y="54" width="8" height="50" rx="4" fill={PAL.slate} opacity=".5" />
      <ellipse cx="91" cy="52" rx="15" ry="5" fill={PAL.slate} />
      <ellipse cx="91" cy="51" rx="11" ry="3" fill={PAL.slateDark} />
      <Shine d="M84 62V92" opacity={0.5} />
      {/* Cigarette and smoke */}
      <rect x="76" y="44" width="20" height="5" rx="2.5" fill={PAL.white} transform="rotate(-14 86 46)" />
      <rect x="76" y="46" width="6" height="5" rx="2" fill={PAL.clay} transform="rotate(-14 86 46)" />
      <circle cx="96" cy="43" r="2.4" fill={PAL.red} />
      <path d="M98 38Q92 30 100 24T98 10" fill="none" stroke={PAL.mist} strokeWidth="4.5" strokeLinecap="round" />
    </g>
  ),

  // "buiten": outside — a door stands open onto green grass, a tree and the sun
  'w.buiten': () => (
    <g>
      {/* Wall and doorway with the outdoors in it */}
      <rect x="10" y="10" width="100" height="96" rx="6" fill={PAL.paperShade} />
      <rect x="24" y="20" width="50" height="86" fill="#cdeffd" />
      <circle cx="64" cy="32" r="7" fill={PAL.yellow} />
      <path d="M24 82Q48 74 74 80V106H24Z" fill={PAL.leaf} />
      <path d="M24 92Q48 86 74 90V106H24Z" fill={PAL.leafShade} />
      <rect x="40" y="56" width="5" height="24" rx="2" fill={PAL.wood} />
      <circle cx="42" cy="50" r="12" fill={PAL.green} />
      <circle cx="36" cy="56" r="7" fill={PAL.green} />
      <circle cx="48" cy="56" r="7" fill={PAL.greenShade} />
      {/* Door frame */}
      <path d="M22 106V18H76V106" fill="none" stroke={PAL.white} strokeWidth="4" />
      {/* Door leaf swung open inwards */}
      <path d="M76 18L100 24V102L76 106Z" fill={PAL.wood} />
      <path d="M92 22L100 24V102L92 103Z" fill={PAL.cardDark} opacity=".6" />
      <circle cx="94" cy="64" r="2.8" fill={PAL.slate} />
    </g>
  ),

  // "de e-sigaret": the vape — a pod device with a purple liquid window, breathing out a little cloud
  'w.esigaret': () => (
    <g>
      <Ground cx={52} cy={106} rx={20} ry={3.5} />
      <g transform="rotate(18 52 70)">
        <rect x="40" y="30" width="24" height="10" rx="4" fill={PAL.slateDark} />
        <Shade color={PAL.slateDark} opacity={1} at={[72, 70, 10, 40]}>
          <rect x="36" y="38" width="32" height="66" rx="10" fill={PAL.slate} />
        </Shade>
        <rect x="43" y="46" width="12" height="22" rx="4" fill={PAL.purple} />
        <rect x="43" y="46" width="12" height="9" rx="4" fill={PAL.purpleLight} />
        <circle cx="49" cy="86" r="3" fill={PAL.ice} />
        <Shine d="M40 54V84" opacity={0.35} />
      </g>
      {/* Vapour cloud */}
      <g fill={PAL.mist}>
        <circle cx="66" cy="28" r="6" />
        <circle cx="76" cy="20" r="9" />
        <circle cx="90" cy="18" r="10" />
        <circle cx="86" cy="30" r="7" />
      </g>
      <circle cx="86" cy="13" r="4" fill={PAL.white} opacity=".7" />
    </g>
  ),

  // "brandbaar": flammable — a red fuel can with the white diamond flame pictogram
  'w.brandbaar': () => (
    <g>
      <Ground cx={60} cy={106} rx={38} ry={4.5} />
      {/* Spout and handle */}
      <path d="M30 32L20 16" stroke={PAL.redShade} strokeWidth="7" strokeLinecap="round" />
      <path d="M58 22H84" stroke={PAL.redShade} strokeWidth="7" strokeLinecap="round" />
      <path d="M58 22V32M84 22V32" stroke={PAL.redShade} strokeWidth="6" strokeLinecap="round" />
      <Shade color={PAL.redShade} opacity={1} at={[104, 70, 12, 50]}>
        <path d="M24 40L36 28H90Q96 28 96 34V98Q96 104 90 104H30Q24 104 24 98Z" fill={PAL.red} />
      </Shade>
      {/* Diamond pictogram */}
      <rect x="40" y="48" width="38" height="38" rx="4" fill={PAL.white} transform="rotate(45 59 67)" />
      <rect x="44" y="52" width="30" height="30" rx="3" fill="none" stroke={PAL.red} strokeWidth="3.4" transform="rotate(45 59 67)" />
      <path d="M59 50Q66 58 66 66Q70 64 70 60Q75 66 74 72Q73 80 64 81H54Q46 80 45 72Q44 66 50 60Q50 66 54 66Q52 58 59 50Z" fill={PAL.ink} />
      <rect x="47" y="82" width="24" height="3.6" rx="1.8" fill={PAL.ink} />
      <Shine d="M30 46V90" opacity={0.45} />
    </g>
  ),

  // "het pasje": the staff card — a landscape card with photo and barcode, on a clip and lanyard
  'w.pasje': () => (
    <g>
      <path d="M36 10Q44 30 56 36M84 10Q76 30 64 36" fill="none" stroke={PAL.green} strokeWidth="6" strokeLinecap="round" />
      <rect x="54" y="32" width="12" height="14" rx="3" fill={PAL.steel} />
      <rect x="56" y="42" width="8" height="10" rx="2" fill={PAL.slate} />
      <StaffCard x={14} y={50} w={92} h={56} who="bram" />
    </g>
  ),

  // "de prikklok": the time clock — a clock box on the wall, a staff card in its slot
  'w.prikklok': () => (
    <g>
      <rect x="20" y="6" width="80" height="108" rx="8" fill={PAL.paperShade} opacity=".7" />
      <TimeClock x={30} y={14} s={1.2} />
    </g>
  ),

  // "inklokken": to clock in — a hand holds the card to the time clock; green badge, arrow into a door
  'w.inklokken': () => <ClockingScene out={false} />,

  // "uitklokken": to clock out — the same, but a red badge with the arrow going out of the door
  'w.uitklokken': () => <ClockingScene out />,

  // "op tijd": on time — Bram arrives as the clock shows exactly the start time; green tick
  'w.optijd': () => (
    <g>
      <Bust who="bram" x={38} y={120} scale={0.56} expr="pleased" />
      <Clock cx={82} cy={44} r={26} hour={8} minute={0} rim={PAL.ok} rimShade={PAL.okShade} />
      <Tick x={98} y={80} r={13} />
    </g>
  ),

  // "het rooster": the work schedule — a sheet with a week grid and coloured shifts per person
  'w.rooster': () => {
    const rows: [string, [number, number, string][]][] = [
      [SKIN.bram[0], [[0, 2, PAL.orange], [4, 2, PAL.orange]]],
      [SKIN.amina[0], [[1, 3, PAL.green]]],
      [SKIN.jada[0], [[0, 1, PAL.sky], [3, 3, PAL.sky]]],
      [SKIN.henk[0], [[2, 3, PAL.navy]]],
    ];
    return (
      <g>
        <rect x="10" y="20" width="100" height="84" rx="8" fill={PAL.paperShade} />
        <rect x="10" y="16" width="100" height="84" rx="8" fill={PAL.white} />
        <path d="M10 24A8 8 0 0 1 18 16H102A8 8 0 0 1 110 24V30H10Z" fill={PAL.slate} />
        {[0, 1, 2, 3, 4, 5].map((d) => (
          <rect key={d} x={33 + d * 12.6} y="21" width="7" height="4" rx="2" fill={PAL.white} opacity=".7" />
        ))}
        {rows.map(([skin, shifts], i) => (
          <g key={i}>
            <circle cx="21" cy={42 + i * 16} r="6" fill={skin} />
            <rect x="30" y={36 + i * 16} width="74" height="12" rx="2" fill={i % 2 ? PAL.paper : '#eef3f6'} />
            {shifts.map(([d, n, c]) => (
              <rect key={d} x={31 + d * 12.6} y={37.5 + i * 16} width={n * 12.6 - 2} height="9" rx="3" fill={c} />
            ))}
          </g>
        ))}
        <path d="M42 34V98M55 34V98M67 34V98M80 34V98M92 34V98" stroke={PAL.paperShade} strokeWidth="1.4" />
      </g>
    );
  },

  // "handen wassen": to wash hands — two soapy hands rub together under the running tap
  'w.handenwassen': () => (
    <g>
      <Tap x={56} y={22} s={1} />
      <Stream x={60} y0={24} y1={44} w={7} />
      <Hand pose="open" x={46} y={112} rotate={28} scale={0.9} skin={SKIN.jada} sleeve={[PAL.sky, PAL.skyShade]} />
      <Hand pose="open" x={74} y={112} rotate={-28} scale={0.9} skin={SKIN.jada} sleeve={[PAL.sky, PAL.skyShade]} mirror />
      {/* Soap foam */}
      <g fill={PAL.white}>
        <circle cx="60" cy="58" r="8" />
        <circle cx="50" cy="66" r="6" />
        <circle cx="70" cy="68" r="6.5" />
        <circle cx="60" cy="76" r="5" />
      </g>
      <g fill="none" stroke={PAL.ice} strokeWidth="2">
        <circle cx="60" cy="58" r="8" />
        <circle cx="50" cy="66" r="6" />
        <circle cx="70" cy="68" r="6.5" />
        <circle cx="60" cy="76" r="5" />
      </g>
      <g fill="#e3f5ff" stroke={PAL.sky} strokeWidth="1.6">
        <circle cx="28" cy="40" r="5" />
        <circle cx="92" cy="44" r="4" />
        <circle cx="86" cy="30" r="3" />
      </g>
    </g>
  ),

  // "de werkkleding": work clothes — a blue overall with reflective stripes on a hanger
  'w.werkkleding': () => (
    <g>
      {/* Hanger */}
      <path d="M60 18V12Q60 7 64 7Q68 7 68 11" fill="none" stroke={PAL.steel} strokeWidth="3.4" strokeLinecap="round" />
      <path d="M60 18L28 32H92Z" fill="none" stroke={PAL.steel} strokeWidth="4" strokeLinejoin="round" />
      {/* Overall */}
      <Shade color={PAL.blueShade} opacity={1} at={[100, 70, 16, 60]}>
        <path d="M28 30H48L60 40L72 30H92L100 56L90 60L86 50V112H64L60 76L56 112H34V50L30 60L20 56Z" fill={PAL.blue} />
      </Shade>
      <path d="M48 30L60 40L72 30" fill="none" stroke={PAL.blueShade} strokeWidth="3" strokeLinejoin="round" />
      <path d="M60 40V74" stroke={PAL.blueShade} strokeWidth="2" />
      <rect x="40" y="50" width="12" height="10" rx="2" fill={PAL.blueShade} />
      <rect x="34" y="66" width="52" height="5" fill={PAL.navy} />
      {/* Reflective stripes */}
      <rect x="34" y="92" width="22" height="5" fill={PAL.yellow} />
      <rect x="64" y="92" width="22" height="5" fill={PAL.yellow} />
      <rect x="34" y="100" width="22" height="3" fill={PAL.mist} />
      <rect x="64" y="100" width="22" height="3" fill={PAL.mist} />
      <Shine d="M30 36L24 52" opacity={0.5} />
    </g>
  ),

  // "schoon": clean — a gleaming white plate with sparkles
  'w.schoon': () => (
    <g>
      <Ground cx={58} cy={100} rx={44} ry={6} />
      <ellipse cx="58" cy="76" rx="48" ry="22" fill={PAL.paperShade} />
      <ellipse cx="58" cy="72" rx="48" ry="22" fill={PAL.white} />
      <ellipse cx="58" cy="73" rx="30" ry="12" fill="#e3f5ff" />
      <path d="M36 66Q46 61 58 61" fill="none" stroke={PAL.white} strokeWidth="4" strokeLinecap="round" />
      <path d="M44 80L58 64M54 82L64 70" stroke={PAL.white} strokeWidth="3.4" strokeLinecap="round" />
      <Sparkle x={30} y={40} r={13} />
      <Sparkle x={86} y={28} r={16} color={PAL.sky} />
      <Sparkle x={98} y={58} r={8} />
      <Sparkle x={56} y={24} r={7} color={PAL.ice} />
    </g>
  ),
};

export default pictures;
