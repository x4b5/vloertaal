import type { JSX } from 'react';
import { CastHead } from '../components/Characters';
import { Box, Bust, ExclaimMark, Ground, Hand, Motion, PAL, SKIN, Shade, Shine, Sparkle } from './kit';

/** Word pictures, group 7 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx. */

type V = [number, number];

/** A thick round-capped line from a to b (a limb, a tube). */
function Capsule({ a, b, w, fill }: { a: V; b: V; w: number; fill: string }) {
  return <path d={`M${a[0]} ${a[1]}L${b[0]} ${b[1]}`} stroke={fill} strokeWidth={w} strokeLinecap="round" />;
}

/** A gear wheel centred on (cx, cy): `n` square teeth, a hub hole. */
function Gear({ cx, cy, r, n = 8, color = PAL.yellow, shade = PAL.yellowShade, hole = PAL.slate }: {
  cx: number; cy: number; r: number; n?: number; color?: string; shade?: string; hole?: string;
}) {
  const tw = r * 0.5;
  return (
    <g>
      <Shade color={shade} opacity={1} at={[cx + r * 1.2, cy + r * 0.3, r * 0.7, r * 1.6]}>
        <g>
          {Array.from({ length: n }, (_, i) => (
            <rect key={i} x={cx - tw / 2} y={cy - r * 1.28} width={tw} height={r * 0.6} rx={tw * 0.25} fill={color} transform={`rotate(${(360 / n) * i} ${cx} ${cy})`} />
          ))}
          <circle cx={cx} cy={cy} r={r} fill={color} />
        </g>
      </Shade>
      <circle cx={cx} cy={cy} r={r * 0.36} fill={hole} />
    </g>
  );
}

/** A yellow hard hat seen from the front, about 96 wide at s = 1, brim centred on (x, y). */
function HardHat({ x = 60, y = 70, s = 1 }: { x?: number; y?: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s}) translate(-60 -70)`}>
      <Shade color={PAL.yellowShade} opacity={0.75} at={[96, 46, 18, 40]}>
        <path d="M22 66C22 34 38 16 60 16C82 16 98 34 98 66Z" fill={PAL.yellow} />
      </Shade>
      <rect x="53" y="16" width="14" height="48" rx="7" fill={PAL.yellowLight} />
      <Shine d="M32 54Q34 36 48 26" color={PAL.yellowShine} width={5} opacity={1} />
      <rect x="12" y="60" width="96" height="13" rx="6.5" fill={PAL.yellowShade} />
      <rect x="12" y="60" width="96" height="4.5" rx="2.25" fill={PAL.yellowLight} opacity=".7" />
    </g>
  );
}

/** A work glove, wrist at (x, y), fingers up: orange knit with dark rubber-dipped fingertips. */
function Glove({ x, y, rotate = 0, scale = 1, mirror = false }: { x: number; y: number; rotate?: number; scale?: number; mirror?: boolean }) {
  const fingers: [number, number][] = [[-10.5, -50], [-3.5, -55], [3.5, -53], [10.5, -45]];
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${mirror ? -scale : scale} ${scale})`}>
      <Shade color={PAL.orangeShade} opacity={1} at={[22, -24, 10, 40]}>
        <g>
          {fingers.map(([fx, top]) => (
            <g key={fx}>
              <rect x={fx - 4.4} y={top} width="8.8" height={-20 - top} rx="4.4" fill={PAL.slate} />
              <rect x={fx - 4.4} y={top + 10} width="8.8" height={-20 - top - 10} rx="1.5" fill={PAL.orange} />
            </g>
          ))}
          <rect x="-15" y="-30" width="30" height="32" rx="10" fill={PAL.orange} />
          <g transform="rotate(-38 -13 -8)">
            <rect x="-17.5" y="-28" width="9.5" height="24" rx="4.75" fill={PAL.slate} />
            <rect x="-17.5" y="-19" width="9.5" height="15" rx="1.5" fill={PAL.orange} />
          </g>
        </g>
      </Shade>
      <rect x="-16" y="-2" width="32" height="17" rx="5" fill={PAL.navy} />
      <path d="M-9 1V12M-3 1V12M3 1V12M9 1V12" stroke={PAL.navyShade} strokeWidth="2" strokeLinecap="round" />
    </g>
  );
}

/** A crane hook under a yellow hook block; the block's top centre is at (x, y), scale s. */
function Hook({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <Shade color={PAL.yellowShade} opacity={1} at={[14, 8, 6, 14]}>
        <rect x="-11" y="0" width="22" height="18" rx="5" fill={PAL.yellow} />
      </Shade>
      <circle cx="0" cy="8" r="4" fill={PAL.yellowShade} />
      <path d="M0 18V30A10 10 0 1 1 -20 30V26" fill="none" stroke={PAL.slate} strokeWidth="6" strokeLinecap="round" />
      <path d="M-20 26L-23 23" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" />
    </g>
  );
}

/** A yellow forklift (side view, forks on the left) in the 120 box; place it with a transform. */
function ForkliftShape() {
  return (
    <g>
      <path d="M53 64L57 24M94 56V24" stroke={PAL.slate} strokeWidth="6" strokeLinecap="round" />
      <rect x="50" y="18" width="50" height="8" rx="3.5" fill={PAL.slate} />
      <path d="M74 64V48Q74 44 78 44H84Q88 44 88 48V58" fill={PAL.blue} />
      <Shade color={PAL.yellowShade} opacity={1} at={[112, 80, 16, 40]}>
        <path d="M42 70Q42 64 48 64H84V56Q84 52 90 52H100Q106 52 106 58V90Q106 96 100 96H48Q42 96 42 90Z" fill={PAL.yellow} />
      </Shade>
      <rect x="31" y="14" width="11" height="86" rx="3" fill={PAL.slate} />
      <rect x="10" y="92" width="30" height="8" rx="3" fill={PAL.slate} />
      <circle cx="58" cy="94" r="12" fill={PAL.slateDark} />
      <circle cx="58" cy="94" r="5.5" fill={PAL.mist} />
      <circle cx="94" cy="96" r="10" fill={PAL.slateDark} />
      <circle cx="94" cy="96" r="4.5" fill={PAL.mist} />
    </g>
  );
}

/** An industrial machine: blue cabinet, a window with a gear, a control panel and a beacon. */
function Machine({ fault = false }: { fault?: boolean }) {
  return (
    <g>
      <Ground cx={60} cy={105} rx={48} ry={4.5} />
      {/* Feet */}
      <rect x="22" y="94" width="12" height="10" rx="2" fill={PAL.slateDark} />
      <rect x="84" y="94" width="12" height="10" rx="2" fill={PAL.slateDark} />
      {/* Beacon on top */}
      <rect x="76" y="26" width="16" height="8" rx="2" fill={PAL.slate} />
      <path d="M78 27V20A6 6 0 0 1 90 20V27Z" fill={fault ? PAL.red : PAL.leaf} />
      <path d="M81 19A3 3 0 0 1 84 16" fill="none" stroke={PAL.white} strokeWidth="2" strokeLinecap="round" opacity=".7" />
      {fault && <Motion x={84} y={20} dir={-90} spread={150} n={5} len={6} gap={10} color={PAL.red} width={3.4} />}
      {/* Cabinet */}
      <Shade color={PAL.blueShade} opacity={1} at={[110, 64, 14, 50]}>
        <rect x="14" y="32" width="92" height="66" rx="7" fill={PAL.blue} />
      </Shade>
      <path d="M20 37H76" stroke={PAL.blueLight} strokeWidth="2.6" strokeLinecap="round" opacity=".8" />
      {/* Window with the gear inside */}
      <rect x="22" y="44" width="44" height="44" rx="5" fill={PAL.slateDark} />
      <Gear cx={44} cy={66} r={12} n={8} color={fault ? PAL.steel : PAL.yellow} shade={fault ? PAL.slate : PAL.yellowShade} hole={PAL.slateDark} />
      {/* Control panel */}
      <rect x="72" y="44" width="26" height="44" rx="4" fill={PAL.paper} />
      <rect x="72" y="84" width="26" height="4" rx="2" fill={PAL.paperShade} />
      <circle cx="85" cy="56" r="6" fill={PAL.leaf} />
      <circle cx="85" cy="74" r="6" fill={PAL.red} />
    </g>
  );
}

/** The cast's head in its 120 x 140 box, neck base placed at (x, y), turned by `rot`. */
function Head({ who, x, y, s, rot = 0, expr = 'disappointed' as const }: {
  who: 'bram' | 'jada' | 'amina' | 'henk'; x: number; y: number; s: number; rot?: number; expr?: 'disappointed' | 'neutral' | 'thinking';
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s}) translate(-60 -92)`}>
      <CastHead who={who} expr={expr} />
    </g>
  );
}

export default {
  // "de steiger": the scaffold — blue frames, wooden plank decks on two levels, a ladder
  'w.steiger': () => (
    <g>
      <Ground cx={60} cy={105} rx={52} ry={4} />
      {/* Cross braces (behind) */}
      <path d="M24 96L58 66M62 62L96 32" stroke={PAL.steel} strokeWidth="3.2" strokeLinecap="round" />
      {/* Guard rails on top */}
      <path d="M20 22H100M20 40H100" stroke={PAL.blueShade} strokeWidth="4" strokeLinecap="round" />
      {/* Uprights */}
      {[22, 60, 98].map((x) => (
        <g key={x}>
          <rect x={x - 3.5} y="14" width="7" height="88" rx="3.5" fill={PAL.blue} />
          <rect x={x} y="14" width="3.5" height="88" rx="1.75" fill={PAL.blueShade} />
          <rect x={x - 7} y="100" width="14" height="5" rx="2" fill={PAL.slate} />
        </g>
      ))}
      {/* Ladder in the left bay */}
      <path d="M32 96L38 60M48 96L54 60" stroke={PAL.yellowShade} strokeWidth="3.4" strokeLinecap="round" />
      <path d="M35 86H48M37 76H50M38 66H52" stroke={PAL.yellowShade} strokeWidth="3" strokeLinecap="round" />
      {/* Plank decks */}
      {[56, 90].map((y) => (
        <g key={y}>
          <rect x="12" y={y} width="96" height="9" rx="2" fill={PAL.card} />
          <rect x="12" y={y + 6} width="96" height="3" rx="1.5" fill={PAL.cardDark} />
          <path d={`M40 ${y + 1}V${y + 6}M80 ${y + 1}V${y + 6}`} stroke={PAL.cardShade} strokeWidth="1.8" strokeLinecap="round" />
          <path d={`M15 ${y + 2}H105`} stroke="#f6d3a2" strokeWidth="1.6" strokeLinecap="round" />
        </g>
      ))}
    </g>
  ),

  // "de boor": the drill — a yellow cordless drill with a black grip and battery, drill bit to the left
  'w.boor': () => (
    <g>
      <Ground cx={74} cy={105} rx={30} ry={4} />
      {/* Drill bit with spiral */}
      <rect x="8" y="39" width="26" height="7" rx="3" fill={PAL.steel} />
      <path d="M13 39.5L16 45.5M20 39.5L23 45.5M27 39.5L30 45.5" stroke={PAL.slate} strokeWidth="1.8" strokeLinecap="round" />
      {/* Chuck */}
      <rect x="28" y="33" width="14" height="19" rx="4" fill={PAL.slate} />
      <path d="M32 36V49M37 36V49" stroke={PAL.slateDark} strokeWidth="1.8" strokeLinecap="round" />
      <rect x="39" y="30" width="8" height="25" rx="3" fill={PAL.slateDark} />
      {/* Grip and battery */}
      <path d="M64 52H88L84 92H62Z" fill={PAL.slate} stroke={PAL.slate} strokeWidth="6" strokeLinejoin="round" />
      <path d="M80 54H88L84 92H77Z" fill={PAL.slateDark} stroke={PAL.slateDark} strokeWidth="4" strokeLinejoin="round" opacity=".7" />
      <rect x="50" y="88" width="50" height="16" rx="5" fill={PAL.slateDark} />
      <rect x="50" y="88" width="50" height="5" rx="2.5" fill={PAL.yellow} />
      {/* Trigger */}
      <rect x="55" y="56" width="9" height="14" rx="4" fill={PAL.red} />
      {/* Body */}
      <Shade color={PAL.yellowShade} opacity={1} at={[104, 50, 16, 30]}>
        <path d="M44 32Q44 24 52 24H92Q104 24 104 40Q104 58 92 58H52Q44 58 44 50Z" fill={PAL.yellow} />
      </Shade>
      <path d="M80 34V48M86 34V48M92 34V48" stroke={PAL.yellowShade} strokeWidth="2.6" strokeLinecap="round" />
      <Shine d="M50 30H74" color={PAL.yellowShine} width={4} opacity={1} />
      {/* Spinning */}
      <path d="M12 30Q20 27 26 30M12 55Q20 58 26 55" fill="none" stroke={PAL.line} strokeWidth="2.6" strokeLinecap="round" />
    </g>
  ),

  // "het beton": concrete — a concrete mixer truck (striped drum) pouring grey concrete onto a heap
  'w.beton': () => (
    <g>
      <Ground cx={56} cy={104} rx={50} ry={4} />
      {/* Grey concrete stream and heap */}
      <path d="M98 66Q104 70 104 80V96" stroke={PAL.line} strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M88 104Q90 92 102 90Q114 92 116 104Z" fill={PAL.line} />
      <path d="M104 92Q112 94 114 102H106Z" fill={PAL.steel} />
      {/* Chute */}
      <path d="M86 60L100 68" stroke={PAL.slate} strokeWidth="6" strokeLinecap="round" />
      {/* Chassis */}
      <rect x="10" y="78" width="80" height="10" rx="3" fill={PAL.slate} />
      {/* Drum */}
      <g transform="rotate(-12 60 56)">
        <Shade color={PAL.orangeShade} opacity={1} at={[64, 82, 40, 14]}>
          <ellipse cx="60" cy="56" rx="30" ry="20" fill={PAL.orange} />
        </Shade>
        <path d="M50 37Q60 56 48 74M68 36Q78 56 66 75" fill="none" stroke={PAL.paper} strokeWidth="5" strokeLinecap="round" />
        <ellipse cx="31" cy="56" rx="4" ry="11" fill={PAL.orangeShade} />
        <Shine d="M42 44Q48 38 56 37" color={PAL.white} width={3.5} opacity={0.6} />
      </g>
      <path d="M46 78L50 70M76 78L72 70" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" />
      {/* Cab */}
      <path d="M8 84V58Q8 48 18 48H28Q34 48 34 54V84Z" fill={PAL.blue} />
      <path d="M28 48Q34 48 34 54V84H28Z" fill={PAL.blueShade} />
      <rect x="12" y="53" width="14" height="12" rx="3" fill={PAL.ice} />
      {/* Wheels */}
      {[22, 62, 80].map((x) => (
        <g key={x}>
          <circle cx={x} cy="92" r="9" fill={PAL.slateDark} />
          <circle cx={x} cy="92" r="3.6" fill={PAL.mist} />
        </g>
      ))}
    </g>
  ),

  // "de kraan": the crane — a yellow tower crane: lattice mast, long jib, counterweight, hook
  'w.kraan': () => (
    <g>
      <Ground cx={74} cy={105} rx={22} ry={3.5} />
      {/* Tie lines from the top */}
      <path d="M74 10L14 28M74 10L106 28" stroke={PAL.steel} strokeWidth="2" strokeLinecap="round" />
      <path d="M68 28L74 8L80 28Z" fill={PAL.yellowShade} />
      {/* Hook cable */}
      <path d="M30 32V58" stroke={PAL.slate} strokeWidth="2.4" />
      <Hook x={30} y={58} s={0.7} />
      {/* Jib and counter-jib */}
      <rect x="10" y="26" width="98" height="8" rx="2" fill={PAL.yellow} />
      <path d="M14 33L20 27L26 33L32 27L38 33L44 27L50 33L56 27L62 33" fill="none" stroke={PAL.yellowShade} strokeWidth="1.8" strokeLinejoin="round" />
      <rect x="27" y="32" width="8" height="4" rx="1.5" fill={PAL.slate} />
      <rect x="94" y="34" width="14" height="14" rx="2" fill={PAL.slate} />
      <rect x="101" y="34" width="7" height="14" rx="2" fill={PAL.slateDark} />
      {/* Mast */}
      <rect x="67" y="30" width="14" height="74" rx="2" fill={PAL.yellow} />
      <rect x="76" y="30" width="5" height="74" rx="2" fill={PAL.yellowShade} />
      <path d="M69 46L79 56L69 66L79 76L69 86L79 96" fill="none" stroke={PAL.yellowShade} strokeWidth="2" strokeLinejoin="round" />
      {/* Cab */}
      <rect x="54" y="34" width="14" height="12" rx="3" fill={PAL.slate} />
      <rect x="56" y="36" width="8" height="6" rx="1.5" fill={PAL.ice} />
      <rect x="62" y="100" width="24" height="6" rx="2" fill={PAL.slate} />
    </g>
  ),

  // "de valbeveiliging": fall protection — Bram in a dark harness, his red lanyard clipped to a
  // steel lifeline above him
  'w.valbeveiliging': () => (
    <g>
      {/* Lifeline with anchors */}
      <rect x="10" y="10" width="7" height="14" rx="2" fill={PAL.slate} />
      <rect x="103" y="10" width="7" height="14" rx="2" fill={PAL.slate} />
      <path d="M14 15H106" stroke={PAL.steel} strokeWidth="3.4" strokeLinecap="round" />
      {/* Lanyard from the back of the harness up to the line */}
      <path d="M78 96Q90 70 88 18" fill="none" stroke={PAL.red} strokeWidth="4.5" strokeLinecap="round" />
      <rect x="84" y="50" width="10" height="16" rx="3" fill={PAL.redShade} transform="rotate(4 89 58)" />
      <ellipse cx="88" cy="19" rx="4.5" ry="7" fill="none" stroke={PAL.slate} strokeWidth="3" />
      <Bust who="bram" x={54} y={122} scale={0.7} expr="neutral" />
      {/* Harness straps over the vest (in the bust's own coordinates) */}
      <g transform="translate(54 122) scale(0.7) translate(-60 -134)">
        <path d="M44 96L48 134M76 96L72 134" stroke={PAL.slateDark} strokeWidth="7" strokeLinecap="round" />
        <path d="M45 114H75" stroke={PAL.slateDark} strokeWidth="6" strokeLinecap="round" />
        <rect x="55" y="109" width="10" height="10" rx="2" fill={PAL.yellow} />
        <path d="M76 96Q86 94 90 100" fill="none" stroke={PAL.slateDark} strokeWidth="6" strokeLinecap="round" />
        <circle cx="90" cy="100" r="5" fill="none" stroke={PAL.steel} strokeWidth="3" />
      </g>
    </g>
  ),

  // "de last": the load — a heavy wooden crate hanging on two orange slings from a crane hook
  'w.last': () => (
    <g>
      <path d="M60 4V16" stroke={PAL.slate} strokeWidth="3" />
      {/* Slings */}
      <path d="M50 52L22 72M50 52L98 72" stroke={PAL.orange} strokeWidth="5" strokeLinecap="round" />
      <Hook x={60} y={14} s={1} />
      {/* Crate */}
      <Shade color={PAL.cardDark} opacity={0.8} at={[106, 90, 12, 30]}>
        <rect x="16" y="70" width="88" height="36" rx="3" fill={PAL.card} />
      </Shade>
      <path d="M22 76L98 100" stroke={PAL.cardShade} strokeWidth="5" strokeLinecap="round" />
      <path d="M16 82H104M16 94H104" stroke={PAL.cardShade} strokeWidth="1.8" />
      <rect x="16" y="70" width="8" height="36" rx="2" fill={PAL.cardDark} />
      <rect x="96" y="70" width="8" height="36" rx="2" fill={PAL.cardDark} />
      <rect x="16" y="70" width="88" height="6" rx="2" fill={PAL.cardDark} />
    </g>
  ),

  // "vallen": to fall — Bram tumbles backwards through the air, arms and legs flung up; motion
  // lines above him, his shadow on the floor below
  'w.vallen': () => {
    const vest = PAL.orange;
    const leg = '#2d4f78';
    const sk = SKIN.bram;
    return (
      <g>
        <Ground cx={58} cy={106} rx={30} ry={4} />
        <path d="M44 12V22M58 8V20M72 10V22" stroke={PAL.line} strokeWidth="3.4" strokeLinecap="round" opacity=".75" />
        {/* Legs (kicked up to the right) */}
        <Capsule a={[70, 66]} b={[90, 50]} w={11} fill={leg} />
        <Capsule a={[90, 50]} b={[100, 32]} w={11} fill={leg} />
        <Capsule a={[66, 70]} b={[90, 66]} w={11} fill={leg} />
        <Capsule a={[90, 66]} b={[104, 52]} w={11} fill={leg} />
        <ellipse cx="103" cy="28" rx="5" ry="8" fill={PAL.brown} transform="rotate(30 103 28)" />
        <ellipse cx="107" cy="48" rx="5" ry="8" fill={PAL.brown} transform="rotate(45 107 48)" />
        {/* Far arm */}
        <Capsule a={[50, 54]} b={[56, 34]} w={10} fill={PAL.blue} />
        <Capsule a={[56, 34]} b={[66, 20]} w={10} fill={PAL.blue} />
        <circle cx="68" cy="17" r="5.5" fill={sk[0]} />
        {/* Torso: tilted back */}
        <g transform="rotate(-58 64 68)">
          <path d="M48 70C46 58 48 46 64 46C80 46 82 58 80 70Q64 76 48 70Z" fill={vest} transform="translate(0 0)" />
          <rect x="46" y="56" width="36" height="5" fill="#ffe066" />
        </g>
        {/* Head */}
        <Head who="bram" x={47} y={58} s={0.5} rot={-50} expr="disappointed" />
        {/* Near arm, flung out */}
        <Capsule a={[52, 72]} b={[34, 80]} w={10} fill={PAL.blue} />
        <Capsule a={[34, 80]} b={[20, 70]} w={10} fill={PAL.blue} />
        <circle cx="17" cy="67" r="5.5" fill={sk[0]} />
      </g>
    );
  },

  // "de lopende band": the conveyor belt — a long dark belt on rollers and legs, boxes riding
  // on it, motion lines behind them
  'w.lopendeband': () => (
    <g>
      <Ground cx={60} cy={105} rx={52} ry={4} />
      {/* Legs */}
      <path d="M22 80V102M98 80V102M60 80V102" stroke={PAL.steel} strokeWidth="5" strokeLinecap="round" />
      <path d="M22 96H98" stroke={PAL.steel} strokeWidth="3.4" strokeLinecap="round" />
      {/* Belt */}
      <rect x="8" y="66" width="104" height="16" rx="8" fill={PAL.slateDark} />
      <rect x="12" y="66" width="96" height="5" rx="2.5" fill={PAL.slate} />
      {[16, 104].map((x) => (
        <g key={x}>
          <circle cx={x} cy="74" r="6" fill={PAL.mist} />
          <circle cx={x} cy="74" r="2.2" fill={PAL.steel} />
        </g>
      ))}
      <path d="M30 77H42M54 77H66M78 77H90" stroke={PAL.steel} strokeWidth="2.2" strokeLinecap="round" />
      {/* Boxes */}
      <Box x={22} y={44} w={24} h={22} depth={8} />
      <Box x={66} y={44} w={24} h={22} depth={8} />
      <Motion x={20} y={54} dir={180} spread={40} n={3} len={8} gap={0} color={PAL.line} width={3} />
      <Motion x={64} y={54} dir={180} spread={40} n={3} len={8} gap={0} color={PAL.line} width={3} />
    </g>
  ),

  // "beschadigd": damaged — a cardboard box with a crushed, torn corner and a big rip in front
  'w.beschadigd': () => (
    <g strokeLinejoin="round">
      <Ground cx={62} cy={104} rx={44} ry={5} />
      {/* Side and top faces, the top caved in on the right */}
      <path d="M82 46L100 34L100 90L82 102Z" fill={PAL.cardShade} stroke={PAL.cardShade} strokeWidth="2" />
      <path d="M18 46L36 34H70L78 42L92 38L100 34L82 46Z" fill="#f0c48a" stroke="#f0c48a" strokeWidth="2" />
      <path d="M70 34L76 44L90 38" fill="none" stroke={PAL.cardDark} strokeWidth="2.4" strokeLinecap="round" />
      {/* Front face with a dented top-right corner */}
      <path d="M18 48Q18 46 20 46H66L74 54L82 50V100Q82 102 80 102H20Q18 102 18 100Z" fill={PAL.card} />
      <path d="M66 46L74 54L82 50" fill="none" stroke={PAL.cardShade} strokeWidth="3" strokeLinecap="round" />
      {/* Rip with a torn flap */}
      <path d="M30 66L38 60L44 68L52 62L58 72L54 84L46 80L38 88L32 80Z" fill={PAL.brown} />
      <path d="M52 62L64 58L58 72Z" fill="#f0c48a" />
      {/* Crease lines */}
      <path d="M24 92L34 86M62 88L74 94M70 64L78 70" stroke={PAL.cardDark} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M21 50H60" stroke="#f6d3a2" strokeWidth="2" strokeLinecap="round" />
    </g>
  ),

  // "de machine": the machine — a blue factory machine with a gear behind glass, a control
  // panel with green and red buttons, and a green light on top
  'w.machine': () => <Machine />,

  // "de storing": the breakdown — the same machine stopped: a red flashing light, a grey gear,
  // smoke, and a yellow warning sign
  'w.storing': () => (
    <g>
      <Machine fault />
      {/* Smoke */}
      <g fill={PAL.mist}>
        <circle cx="30" cy="24" r="9" />
        <circle cx="42" cy="18" r="10" />
        <circle cx="52" cy="26" r="8" />
      </g>
      <circle cx="26" cy="22" r="3" fill={PAL.white} opacity=".6" />
      {/* Warning sign */}
      <path d="M44 58L62 90H26Z" fill={PAL.yellow} stroke={PAL.yellow} strokeWidth="8" strokeLinejoin="round" />
      <ExclaimMark x={44} y={78} size={20} color={PAL.ink} />
    </g>
  ),

  // "de noodstop": the emergency stop — a big red mushroom button on a yellow box
  'w.noodstop': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={105} rx={44} ry={4.5} />
      {/* Box: top face and front */}
      <path d="M22 66L32 54H88L98 66Z" fill={PAL.yellowLight} stroke={PAL.yellowLight} strokeWidth="3" />
      <Shade color={PAL.yellowShade} opacity={1} at={[104, 86, 14, 30]}>
        <rect x="20" y="64" width="80" height="38" rx="5" fill={PAL.yellow} />
      </Shade>
      <path d="M26 69H80" stroke={PAL.yellowShine} strokeWidth="2.4" strokeLinecap="round" opacity=".9" />
      {/* Collar and stem */}
      <ellipse cx="60" cy="60" rx="22" ry="6" fill={PAL.slate} />
      <rect x="49" y="44" width="22" height="16" fill={PAL.redShade} />
      {/* Mushroom cap */}
      <Shade color={PAL.redShade} opacity={1} at={[96, 36, 16, 24]}>
        <path d="M24 44Q24 16 60 16Q96 16 96 44Q96 50 60 50Q24 50 24 44Z" fill={PAL.red} />
      </Shade>
      <Shine d="M34 34Q38 24 52 21" width={4.5} opacity={0.55} />
    </g>
  ),

  // "inpakken": to pack — two hands lower a blue product into an open cardboard box
  'w.inpakken': () => {
    const x = 24;
    const y = 66;
    const w = 58;
    return (
      <g strokeLinejoin="round">
        <Ground cx={62} cy={108} rx={44} ry={4.5} />
        <Box x={x} y={y} w={w} h={38} depth={16} open />
        {/* The product going in */}
        <Shade color={PAL.blueShade} opacity={1} at={[76, 46, 6, 30]}>
          <rect x="38" y="30" width="34" height="38" rx="3" fill={PAL.blue} />
        </Shade>
        <rect x="44" y="40" width="18" height="12" rx="2" fill={PAL.paper} />
        {/* Front flap over it */}
        <polygon points={`${x} ${y} ${x + w} ${y} ${x + w - 5} ${y - 13} ${x - 5} ${y - 13}`} fill="#f0c48a" stroke="#f0c48a" strokeWidth="2" />
        <path d={`M${x + 3} ${y + 2.2}H${x + w - 3}`} stroke="#f6d3a2" strokeWidth="2" strokeLinecap="round" />
        {/* Hands holding its sides */}
        <Hand pose="open" x={8} y={40} rotate={90} scale={0.62} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} />
        <Hand pose="open" x={102} y={40} rotate={-90} scale={0.62} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} mirror />
      </g>
    );
  },

  // "de productie": production — a machine on a line turns out a row of identical yellow products
  'w.productie': () => (
    <g>
      <Ground cx={60} cy={105} rx={52} ry={4} />
      {/* Belt */}
      <path d="M30 86V102M96 86V102" stroke={PAL.steel} strokeWidth="5" strokeLinecap="round" />
      <rect x="8" y="76" width="104" height="12" rx="6" fill={PAL.slateDark} />
      <rect x="12" y="76" width="96" height="4" rx="2" fill={PAL.slate} />
      {/* Products coming out */}
      {[56, 76, 96].map((cx) => (
        <g key={cx}>
          <rect x={cx - 7} y="56" width="14" height="20" rx="3" fill={PAL.yellow} />
          <rect x={cx} y="56" width="7" height="20" rx="3" fill={PAL.yellowShade} />
          <rect x={cx - 7} y="53" width="14" height="5" rx="2" fill={PAL.red} />
          <rect x={cx - 7} y="63" width="14" height="6" fill={PAL.paper} />
        </g>
      ))}
      {/* The machine over the start of the line */}
      <Shade color={PAL.blueShade} opacity={1} at={[50, 50, 6, 40]}>
        <path d="M10 82V30Q10 24 16 24H40Q46 24 46 30V82H38V60H18V82Z" fill={PAL.blue} />
      </Shade>
      <Gear cx={28} cy={40} r={7} n={8} hole={PAL.blue} />
      <rect x="18" y="60" width="20" height="16" fill={PAL.slateDark} />
      <path d="M58 44H100" stroke={PAL.sky} strokeWidth="4" strokeLinecap="round" />
      <path d="M94 38L102 44L94 50" fill="none" stroke={PAL.sky} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),

  // "het product": the product — a finished, packed item: a blue retail box with a label and barcode
  'w.product': () => (
    <g strokeLinejoin="round">
      <Ground cx={62} cy={105} rx={36} ry={4.5} />
      <path d="M86 26L98 18V94L86 102Z" fill={PAL.blueShade} stroke={PAL.blueShade} strokeWidth="2" />
      <path d="M34 26L46 18H98L86 26Z" fill={PAL.blueLight} stroke={PAL.blueLight} strokeWidth="2" />
      <rect x="34" y="26" width="52" height="76" rx="3" fill={PAL.blue} />
      <circle cx="60" cy="48" r="13" fill={PAL.yellow} />
      <circle cx="60" cy="48" r="6" fill={PAL.orange} />
      {/* Label with barcode */}
      <rect x="40" y="70" width="40" height="24" rx="3" fill={PAL.white} />
      <path d="M46 75V89M49.5 75V89M54 75V89M58 75V89M61 75V89M65.5 75V89M70 75V89M74 75V89" stroke={PAL.ink} strokeWidth="2" />
      <path d="M48 75V89M63 75V89M72 75V89" stroke={PAL.ink} strokeWidth="1" />
      <Shine d="M38 34V58" width={3.5} opacity={0.45} />
      <Sparkle x={22} y={30} r={8} />
    </g>
  ),

  // "weigeren": to refuse — Jada holds up a flat hand: no, I won't do that dangerous job
  'w.weigeren': () => (
    <g>
      <Bust who="jada" x={44} y={124} scale={0.7} expr="disappointed" />
      <Hand pose="open" x={88} y={112} rotate={6} scale={0.86} skin={SKIN.jada} sleeve={['#ffc929', PAL.yellowShade]} mirror />
      {/* The danger she refuses */}
      <path d="M96 12L110 36H82Z" fill={PAL.yellow} stroke={PAL.yellow} strokeWidth="6" strokeLinejoin="round" />
      <ExclaimMark x={96} y={28} size={15} color={PAL.ink} />
    </g>
  ),

  // "de beschermingsmiddelen": the protective gear — a set: hard hat, ear muffs, safety goggles and a glove
  'w.beschermingsmiddelen': () => (
    <g>
      {/* Hard hat */}
      <HardHat x={36} y={44} s={0.48} />
      {/* Ear muffs */}
      <g transform="translate(86 34)">
        <path d="M-17 6A17 18 0 0 1 17 6" fill="none" stroke={PAL.slate} strokeWidth="5" strokeLinecap="round" />
        <rect x="-24" y="2" width="13" height="22" rx="6.5" fill={PAL.red} />
        <rect x="11" y="2" width="13" height="22" rx="6.5" fill={PAL.redShade} />
        <rect x="-20" y="6" width="4" height="12" rx="2" fill={PAL.white} opacity=".45" />
      </g>
      {/* Goggles */}
      <g transform="translate(36 86)">
        <path d="M-24 0H24" stroke={PAL.slate} strokeWidth="4" strokeLinecap="round" />
        <rect x="-20" y="-10" width="40" height="20" rx="9" fill={PAL.yellow} />
        <rect x="-16" y="-6" width="14" height="12" rx="5" fill={PAL.ice} />
        <rect x="2" y="-6" width="14" height="12" rx="5" fill={PAL.ice} />
        <path d="M-13 3L-8 -3M5 3L10 -3" stroke={PAL.white} strokeWidth="2" strokeLinecap="round" />
      </g>
      {/* Glove */}
      <Glove x={86} y={102} rotate={12} scale={0.62} />
    </g>
  ),

  // "het heftruckcertificaat": the forklift certificate — a certificate with a forklift on it and a red seal
  'w.heftruckcertificaat': () => (
    <g>
      <rect x="18" y="14" width="84" height="96" rx="6" fill={PAL.paperShade} />
      <rect x="18" y="10" width="84" height="96" rx="6" fill={PAL.white} />
      <rect x="18" y="10" width="84" height="96" rx="6" fill="none" stroke={PAL.mist} strokeWidth="2" />
      <g transform="translate(30 16) scale(0.5)">
        <ForkliftShape />
      </g>
      <path d="M28 74H92M28 84H70M28 94H60" stroke={PAL.line} strokeWidth="3" strokeLinecap="round" />
      {/* Seal with ribbons */}
      <path d="M80 96L76 112L83 108L88 113L89 98Z" fill={PAL.redShade} />
      <circle cx="84" cy="92" r="11" fill={PAL.red} />
      <circle cx="84" cy="92" r="6" fill="none" stroke={PAL.redLight} strokeWidth="2" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
