import type { JSX } from 'react';
import { Box, Bust, Clock, CurveArrow, ExclaimMark, Ground, Hand, Motion, PAL, SKIN, Shade, Shine, Sparkle, Tick } from './kit';

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

/** A sun: yellow disc with orange rays, centred on (cx, cy). */
function Sun({ cx, cy, r = 16 }: { cx: number; cy: number; r?: number }) {
  const rays = Array.from({ length: 8 }, (_, k) => {
    const a = (k * Math.PI) / 4;
    const o = r + r * 0.32;
    const e = r + r * 0.72;
    return `M${(cx + Math.cos(a) * o).toFixed(1)} ${(cy + Math.sin(a) * o).toFixed(1)}L${(cx + Math.cos(a) * e).toFixed(1)} ${(cy + Math.sin(a) * e).toFixed(1)}`;
  });
  return (
    <g>
      <path d={rays.join('')} stroke={PAL.orangeLight} strokeWidth={Math.max(4, r * 0.3)} strokeLinecap="round" />
      <Shade color={PAL.orange} opacity={0.5} at={[cx + r * 1.1, cy, r * 0.55, r * 1.3]}>
        <circle cx={cx} cy={cy} r={r} fill={PAL.yellow} />
      </Shade>
      <Shine d={`M${cx - r * 0.62} ${cy - r * 0.1}A${r * 0.66} ${r * 0.66} 0 0 1 ${cx - r * 0.1} ${cy - r * 0.62}`} color={PAL.yellowShine} width={Math.max(3, r * 0.2)} opacity={0.9} />
    </g>
  );
}

/** A yellow crescent moon around (x, y). */
function Moon({ x, y, r = 20 }: { x: number; y: number; r?: number }) {
  const d =
    `M${x + r * 0.15} ${y - r}A${r} ${r} 0 1 0 ${x + r * 0.95} ${y + r * 0.35}` +
    `A${r * 0.82} ${r * 0.82} 0 0 1 ${x + r * 0.15} ${y - r}Z`;
  return (
    <g>
      <Shade color={PAL.yellowShade} opacity={0.9} at={[x + r * 0.5, y + r * 1.1, r * 0.9, r * 0.5]}>
        <path d={d} fill={PAL.yellow} />
      </Shade>
      <Shine d={`M${x - r * 0.72} ${y + r * 0.1}A${r * 0.74} ${r * 0.74} 0 0 1 ${x - r * 0.3} ${y - r * 0.6}`} color={PAL.yellowShine} width={Math.max(3, r * 0.2)} opacity={0.9} />
    </g>
  );
}

export default {
  // "de dienst": the shift — a big work clock with the hours of the shift coloured in green,
  // Jada (in her work clothes) underneath: "these are my working hours".
  'w.dienst': () => {
    const cx = 70;
    const cy = 50;
    const r = 38;
    const at = (h: number, len: number) => {
      const a = (h / 12) * 2 * Math.PI - Math.PI / 2;
      return `${(cx + Math.cos(a) * len).toFixed(1)} ${(cy + Math.sin(a) * len).toFixed(1)}`;
    };
    const f = r * 0.8;
    return (
      <g>
        <Shade color={PAL.skyShade} opacity={1} at={[cx + r * 1.25, cy, r * 0.6, r * 1.4]}>
          <circle cx={cx} cy={cy} r={r} fill={PAL.sky} />
        </Shade>
        <circle cx={cx} cy={cy} r={f} fill={PAL.white} />
        {/* The shift: 7 to 3 o'clock, filled in green */}
        <path d={`M${cx} ${cy}L${at(7, f)}A${f} ${f} 0 1 1 ${at(3, f)}Z`} fill={PAL.lime} />
        <path d={`M${at(7, f + 1)}A${f + 1} ${f + 1} 0 1 1 ${at(3, f + 1)}`} fill="none" stroke={PAL.ok} strokeWidth="5" strokeLinecap="round" />
        <circle cx={cx} cy={cy} r={f} fill="none" stroke={PAL.paperShade} strokeWidth="0" />
        <path d={`M${cx} ${cy}L${at(7, f * 0.62)}`} stroke={PAL.ink} strokeWidth="5" strokeLinecap="round" />
        <path d={`M${cx} ${cy}L${at(0, f * 0.82)}`} stroke={PAL.ink} strokeWidth="3.6" strokeLinecap="round" />
        <circle cx={cx} cy={cy} r="3.6" fill={PAL.red} />
        <Shine d={`M${cx - r * 0.86} ${cy - r * 0.3}A${r * 0.9} ${r * 0.9} 0 0 1 ${cx - r * 0.32} ${cy - r * 0.86}`} width={3.4} opacity={0.6} />
        <Bust who="jada" x={26} y={122} scale={0.44} expr="pleased" />
      </g>
    );
  },

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

  // "morgen": tomorrow — after the night (moon) comes the next day (sun): a big arrow from one to the other.
  'w.morgen': () => (
    <g>
      <Moon x={28} y={80} r={18} />
      <Sparkle x={14} y={56} r={5} color={PAL.yellowLight} />
      <Sun cx={86} cy={78} r={16} />
      <CurveArrow from={[26, 52]} to={[84, 44]} bend={26} color={PAL.sky} width={8} head={13} />
    </g>
  ),

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

  // "de pijn": the pain — Bram squeezes his eyes shut and grabs his sore shoulder; a red
  // throbbing spot under his hand.
  'w.pijn': () => (
    <g>
      <Bust who="bram" x={48} y={124} scale={0.76} expr="disappointed" squint />
      <circle cx="78" cy="98" r="20" fill={PAL.red} opacity=".28" />
      <circle cx="78" cy="98" r="12" fill={PAL.red} opacity=".55" />
      <Motion x={78} y={98} dir={-45} spread={110} n={4} len={9} gap={22} color={PAL.red} width={4.4} />
      <Hand pose="open" x={70} y={124} rotate={-28} scale={0.7} skin={SKIN.bram} sleeve={[PAL.orange, PAL.orangeShade]} />
    </g>
  ),

  // "vandaag": today — one big day page with the sun on it, a finger points: this day.
  'w.vandaag': () => (
    <g>
      {/* Tear-off pad: page edges below */}
      <rect x="12" y="28" width="72" height="74" rx="9" fill={PAL.mist} />
      <rect x="12" y="23" width="72" height="74" rx="9" fill={PAL.paperShade} />
      <rect x="12" y="18" width="72" height="74" rx="9" fill={PAL.white} />
      <path d="M12 27A9 9 0 0 1 21 18H75A9 9 0 0 1 84 27V36H12Z" fill={PAL.orange} />
      <path d="M64 18H75A9 9 0 0 1 84 27V36H64Z" fill={PAL.orangeShade} opacity=".6" />
      <rect x="28" y="11" width="6" height="14" rx="3" fill={PAL.slate} />
      <rect x="62" y="11" width="6" height="14" rx="3" fill={PAL.slate} />
      <Sun cx={48} cy={63} r={16} />
      <Hand pose="point" x={104} y={114} rotate={-38} scale={0.82} skin={SKIN.jada} sleeve={[PAL.sky, PAL.skyShade]} />
    </g>
  ),

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
