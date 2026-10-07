import type { JSX } from 'react';
import { Box, Bust, Calendar, Clock, CurveArrow, ExclaimMark, Ground, Hand, Motion, PAL, SKIN, Shade, Shine, Sparkle, Tick } from './kit';

/** Word pictures, group 5 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx. */

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

/** Centre of calendar cell `i` (same grid as kit's Calendar). */
function cell(i: number, x: number, y: number, w: number, h: number): [number, number] {
  const cw = (w - 16) / 4;
  const ch = (h - 30) / 3;
  return [x + 8 + (i % 4) * cw + cw / 2, y + 26 + Math.floor(i / 4) * ch + ch / 2];
}

/** A wooden pallet seen from the front, top-left corner of the deck at (x, y). */
function Pallet({ x, y, w }: { x: number; y: number; w: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height="6" rx="2" fill={PAL.card} />
      <rect x={x + 2} y={y + 6} width="12" height="8" rx="1.5" fill={PAL.cardDark} />
      <rect x={x + w / 2 - 6} y={y + 6} width="12" height="8" rx="1.5" fill={PAL.cardDark} />
      <rect x={x + w - 14} y={y + 6} width="12" height="8" rx="1.5" fill={PAL.cardDark} />
      <rect x={x} y={y + 13} width={w} height="5" rx="2" fill={PAL.cardShade} />
    </g>
  );
}

/** A thermometer stick, bulb at (x, y), pointing towards `angle` degrees. */
function Thermometer({ x, y, angle = 0, len = 34 }: { x: number; y: number; angle?: number; len?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle})`}>
      <rect x="-4" y={-4.5} width={len} height="9" rx="4.5" fill={PAL.white} />
      <rect x="-4" y={0.5} width={len} height="4" rx="2" fill={PAL.paperShade} />
      <rect x="0" y={-1.6} width={len * 0.72} height="3.2" rx="1.6" fill={PAL.red} />
      <circle cx="0" cy="0" r="6.5" fill={PAL.red} />
      <circle cx="-1.6" cy="-1.8" r="1.8" fill={PAL.white} opacity=".6" />
    </g>
  );
}

export default {
  // "de dienst": the shift — a clock with the working hours marked in orange, and a hard hat.
  'w.dienst': () => (
    <g>
      <Clock cx={52} cy={50} r={40} hour={7} minute={0} rim={PAL.navy} rimShade={PAL.navyShade} />
      {/* Working hours: 7 to 3 o'clock as a thick orange band inside the rim */}
      <path d="M38 74.2A28 28 0 1 1 80 50" fill="none" stroke={PAL.orange} strokeWidth="7" strokeLinecap="round" opacity=".9" />
      <HardHat x={92} y={96} s={0.32} />
    </g>
  ),

  // "de pauze": the break — a hot mug of coffee, the hard hat put down beside it.
  'w.pauze': () => (
    <g>
      <Ground cx={58} cy={104} rx={44} ry={5} />
      <HardHat x={30} y={94} s={0.3} />
      {/* Steam */}
      <path d="M58 40Q52 32 58 24Q64 16 58 8M74 40Q68 32 74 24Q80 16 74 10" fill="none" stroke={PAL.mist} strokeWidth="4.5" strokeLinecap="round" />
      {/* Handle */}
      <path d="M90 58Q106 58 106 72Q106 86 88 88" fill="none" stroke={PAL.paperShade} strokeWidth="8" strokeLinecap="round" />
      <Shade color={PAL.paperShade} opacity={1} at={[96, 76, 12, 40]}>
        <path d="M42 46H94V92Q94 104 82 104H54Q42 104 42 92Z" fill={PAL.white} />
      </Shade>
      <ellipse cx="68" cy="46" rx="26" ry="6" fill={PAL.paperShade} />
      <ellipse cx="68" cy="47" rx="22" ry="4.2" fill={PAL.brown} />
      <rect x="42" y="64" width="52" height="9" fill={PAL.sky} />
      <rect x="82" y="64" width="12" height="9" fill={PAL.skyShade} />
      <Shine d="M48 56V88" opacity={0.9} color={PAL.paperShade} width={3} />
    </g>
  ),

  // "beginnen": to start — a finger presses the big green start button on a machine.
  'w.beginnen': () => (
    <g>
      <rect x="12" y="14" width="70" height="66" rx="10" fill={PAL.slateDark} transform="translate(0 4)" />
      <rect x="12" y="14" width="70" height="66" rx="10" fill={PAL.slate} />
      <circle cx="44" cy="50" r="23" fill={PAL.okShade} />
      <circle cx="44" cy="47" r="23" fill={PAL.ok} />
      <path d="M37 35L57 47L37 59Z" fill={PAL.white} stroke={PAL.white} strokeWidth="4" strokeLinejoin="round" />
      <Shine d="M27 41A18 18 0 0 1 36 30" opacity={0.5} />
      <Motion x={44} y={47} dir={-90} spread={100} n={3} len={7} gap={30} color={PAL.ok} width={3.6} />
      <Hand pose="point" x={94} y={92} rotate={-42} scale={0.95} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} />
    </g>
  ),

  // "klaar": finished — the pallet is fully stacked, with a big green tick.
  'w.klaar': () => (
    <g>
      <Ground cx={52} cy={106} rx={42} ry={4.5} />
      <Pallet x={12} y={86} w={80} />
      <Box x={14} y={56} w={34} h={30} depth={8} />
      <Box x={50} y={56} w={34} h={30} depth={8} />
      <Box x={30} y={28} w={34} h={28} depth={8} />
      <Tick x={88} y={30} r={20} />
    </g>
  ),

  // "te laat": too late — the red alarm clock rings past the time, Jada looks worried.
  'w.telaat': () => (
    <g>
      <Bust who="jada" x={36} y={118} scale={0.56} expr="disappointed" />
      <Clock cx={80} cy={44} r={26} hour={9} minute={25} rim={PAL.red} rimShade={PAL.redShade} bells />
      <Motion x={80} y={44} dir={-90} spread={150} n={4} len={6} gap={36} color={PAL.red} width={3.4} />
      <ExclaimMark x={104} y={88} size={26} />
    </g>
  ),

  // "morgen": tomorrow — on the calendar an arrow jumps from today to the next day.
  'w.morgen': () => {
    const [x, y, w, h] = [10, 20, 100, 88];
    const today = cell(5, x, y, w, h);
    const next = cell(6, x, y, w, h);
    return (
      <g>
        <Calendar x={x} y={y} w={w} h={h} mark={6} header={PAL.green} headerShade={PAL.greenShade} />
        <circle cx={today[0]} cy={today[1]} r="8" fill={PAL.mist} />
        <circle cx={today[0]} cy={today[1]} r="4" fill={PAL.line} />
        <CurveArrow from={[today[0], today[1] - 9]} to={[next[0] + 2, next[1] - 12]} bend={12} color={PAL.sky} width={5} head={9} />
      </g>
    );
  },

  // "ziek": sick — Amina with a thermometer in her mouth and a hot, red forehead.
  'w.ziek': () => (
    <g>
      <Bust who="amina" x={52} y={118} scale={0.78} expr="disappointed" />
      <Thermometer x={60} y={80} angle={18} len={40} />
      {/* Sweat drop */}
      <path d="M94 34Q100 44 100 48A6 6 0 0 1 88 48Q88 44 94 34Z" fill={PAL.ice} />
      <Motion x={52} y={22} dir={-90} spread={80} n={3} len={6} gap={10} color={PAL.red} width={3.4} />
    </g>
  ),

  // "bellen": to call — a phone in the hand, ringing, with the green call button on screen.
  'w.bellen': () => (
    <g>
      <rect x="40" y="14" width="40" height="76" rx="8" fill={PAL.slateDark} transform="translate(2 3)" />
      <rect x="40" y="14" width="40" height="76" rx="8" fill={PAL.slate} />
      <rect x="44.5" y="22" width="31" height="58" rx="4" fill="#e3f5ff" />
      <circle cx="60" cy="50" r="11" fill={PAL.ok} />
      {/* Handset */}
      <g transform="translate(60 50) rotate(-45)">
        <path d="M-6 -3Q0 3 6 -3" fill="none" stroke={PAL.white} strokeWidth="3" strokeLinecap="round" />
        <rect x="-9" y="-6" width="5.4" height="6" rx="2" fill={PAL.white} transform="rotate(30 -6 -3)" />
        <rect x="3.6" y="-6" width="5.4" height="6" rx="2" fill={PAL.white} transform="rotate(-30 6 -3)" />
      </g>
      <Hand pose="hold" x={60} y={116} scale={1.15} skin={SKIN.henk} sleeve={[PAL.navy, PAL.navyShade]} />
      <Motion x={40} y={34} dir={-160} spread={60} n={3} len={8} gap={6} color={PAL.sky} width={3.8} />
      <Motion x={80} y={34} dir={-20} spread={60} n={3} len={8} gap={6} color={PAL.sky} width={3.8} />
    </g>
  ),

  // "de dokter": the doctor — a stethoscope and a medical cross.
  'w.dokter': () => (
    <g>
      {/* Ear tubes */}
      <path d="M30 18Q24 48 44 58M58 18Q64 48 44 58" fill="none" stroke={PAL.steel} strokeWidth="4.5" strokeLinecap="round" />
      <circle cx="30" cy="16" r="4.5" fill={PAL.slate} />
      <circle cx="58" cy="16" r="4.5" fill={PAL.slate} />
      {/* Tube down and round to the chest piece */}
      <path d="M44 58Q40 98 64 98Q86 98 86 80" fill="none" stroke={PAL.blue} strokeWidth="7" strokeLinecap="round" />
      <Shade color={PAL.steel} opacity={1} at={[100, 72, 8, 20]}>
        <circle cx="86" cy="72" r="14" fill={PAL.mist} />
      </Shade>
      <circle cx="86" cy="72" r="8" fill={PAL.steel} />
      <Shine d="M76 68A10 10 0 0 1 82 61" opacity={0.8} width={3} />
      {/* Medical cross badge */}
      <circle cx="88" cy="32" r="18" fill={PAL.paperShade} />
      <circle cx="88" cy="29" r="18" fill={PAL.white} />
      <path d="M88 19V39M78 29H98" stroke={PAL.red} strokeWidth="7" strokeLinecap="round" />
    </g>
  ),

  // "de pijn": the pain — Henk holds his aching shoulder, red pain flashes.
  'w.pijn': () => (
    <g>
      <Bust who="henk" x={52} y={120} scale={0.74} expr="disappointed" />
      <path d="M88 54L96 62L90 64L100 74" fill="none" stroke={PAL.red} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M104 86L110 82" stroke={PAL.red} strokeWidth="4.5" strokeLinecap="round" />
      <Hand pose="open" x={68} y={120} rotate={-58} scale={0.62} skin={SKIN.henk} sleeve={[PAL.navy, PAL.navyShade]} />
      <Sparkle x={94} y={92} r={10} color={PAL.red} />
    </g>
  ),

  // "vandaag": today — the sun over the calendar, a finger points at this day.
  'w.vandaag': () => {
    const [x, y, w, h] = [12, 24, 82, 80];
    const [cx, cy] = cell(5, x, y, w, h);
    return (
      <g>
        <Calendar x={x} y={y} w={w} h={h} mark={5} header={PAL.orange} headerShade={PAL.orangeShade} />
        <circle cx={cx} cy={cy} r="5" fill={PAL.yellow} />
        <circle cx="96" cy="22" r="11" fill={PAL.yellow} />
        <Motion x={96} y={22} dir={-135} spread={170} n={4} len={5} gap={14} color={PAL.yellowShade} width={3.2} />
        <Hand pose="point" x={76} y={109} rotate={-32} scale={0.8} skin={SKIN.jada} sleeve={[PAL.sky, PAL.skyShade]} />
      </g>
    );
  },

  // "beter": better — Bram feels well again: big smile, a green arrow going up.
  'w.beter': () => (
    <g>
      <Bust who="bram" x={46} y={118} scale={0.72} expr="joy" />
      <CurveArrow from={[84, 92]} to={[100, 22]} bend={10} color={PAL.ok} width={8} head={13} />
      <Sparkle x={20} y={24} r={8} />
      <Sparkle x={78} y={18} r={5} color={PAL.yellowShade} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
