import type { JSX } from 'react';
import { CastHead } from '../components/Characters';
import { Box, Bubble, Bust, Calendar, Cross, Ground, Hand, Motion, PAL, SKIN, Shade, Shine, Sparkle, Tick } from './kit';

/** Word pictures, group 1 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx. */

/** Bram's yellow hard hat (same shape as the unit banner's), centred on (x, y). */
function HardHat({ x = 60, y = 74, s = 1 }: { x?: number; y?: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s}) translate(-60 -74)`}>
      <Shade color={PAL.yellowShade} opacity={0.75} at={[96, 50, 18, 40]}>
        <path d="M22 70C22 38 38 20 60 20C82 20 98 38 98 70Z" fill={PAL.yellow} />
      </Shade>
      <rect x="53" y="20" width="14" height="48" rx="7" fill={PAL.yellowLight} />
      <Shine d="M32 58Q34 40 48 30" color={PAL.yellowShine} width={5} opacity={1} />
      <rect x="12" y="64" width="96" height="13" rx="6.5" fill={PAL.yellowShade} />
      <rect x="12" y="64" width="96" height="4.5" rx="2.25" fill={PAL.yellowLight} opacity=".7" />
    </g>
  );
}

/** A plain heart, centred on (x, y), about 2 * r wide. */
function Heart({ x, y, r = 10, color = PAL.red, shade = PAL.redShade }: { x: number; y: number; r?: number; color?: string; shade?: string }) {
  const d = `M${x} ${y + r * 0.95}C${x - r * 0.4} ${y + r * 0.55} ${x - r * 1.05} ${y + r * 0.1} ${x - r * 1.05} ${y - r * 0.4}` +
    `C${x - r * 1.05} ${y - r * 1.15} ${x - r * 0.15} ${y - r * 1.2} ${x} ${y - r * 0.5}` +
    `C${x + r * 0.15} ${y - r * 1.2} ${x + r * 1.05} ${y - r * 1.15} ${x + r * 1.05} ${y - r * 0.4}` +
    `C${x + r * 1.05} ${y + r * 0.1} ${x + r * 0.4} ${y + r * 0.55} ${x} ${y + r * 0.95}Z`;
  return (
    <g>
      <Shade color={shade} opacity={1} at={[x + r * 1.1, y + r * 0.3, r * 0.6, r * 1.4]}>
        <path d={d} fill={color} />
      </Shade>
      <Shine d={`M${x - r * 0.75} ${y - r * 0.35}Q${x - r * 0.7} ${y - r * 0.8} ${x - r * 0.3} ${y - r * 0.85}`} width={Math.max(2, r * 0.22)} opacity={0.55} />
    </g>
  );
}

/** A rising sun: a half disc on a low line, with short rays. */
function RisingSun({ cx = 60, cy = 70, r = 30 }: { cx?: number; cy?: number; r?: number }) {
  const rays = [-160, -128, -90, -52, -20].map((deg) => {
    const a = (deg * Math.PI) / 180;
    return `M${cx + Math.cos(a) * (r + 7)} ${cy + Math.sin(a) * (r + 7)}L${cx + Math.cos(a) * (r + 17)} ${cy + Math.sin(a) * (r + 17)}`;
  });
  return (
    <g>
      <path d={rays.join('')} stroke={PAL.orangeLight} strokeWidth="6" strokeLinecap="round" />
      <Shade color={PAL.orange} opacity={0.55} at={[cx + r * 1.1, cy, r * 0.55, r * 1.3]}>
        <path d={`M${cx - r} ${cy}A${r} ${r} 0 0 1 ${cx + r} ${cy}Z`} fill={PAL.yellow} />
      </Shade>
      <Shine d={`M${cx - r * 0.7} ${cy - r * 0.35}A${r * 0.78} ${r * 0.78} 0 0 1 ${cx - r * 0.3} ${cy - r * 0.68}`} color={PAL.yellowShine} width={4.5} opacity={0.9} />
    </g>
  );
}

export default {
  // "hallo": Bram smiles and waves.
  'w.hallo': () => (
    <g>
      <Bust who="bram" x={48} y={112} scale={0.72} expr="joy" />
      <Hand pose="open" x={95} y={74} rotate={14} scale={0.78} skin={SKIN.bram} sleeve={[PAL.blue, PAL.blueShade]} />
      <Motion x={100} y={26} dir={-40} spread={70} len={8} gap={8} color={PAL.sky} width={3.8} />
    </g>
  ),

  // "goedemorgen": the sun comes up, a hand waves good morning.
  'w.goedemorgen': () => (
    <g>
      <RisingSun cx={46} cy={70} r={32} />
      <rect x="10" y="68" width="72" height="7" rx="3.5" fill={PAL.mist} />
      <Hand pose="open" x={94} y={112} rotate={10} scale={0.72} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} />
      <Motion x={100} y={64} dir={-40} spread={70} len={7} gap={7} color={PAL.sky} width={3.4} />
    </g>
  ),

  // "dank je wel": Jada says something warm — a heart in her speech bubble.
  'w.dankjewel': () => (
    <g>
      <Bust who="jada" x={40} y={114} scale={0.68} expr="pleased" />
      <Bubble x={58} y={12} w={50} h={40} tail="left" fill="#ffe3e3" depth={PAL.redLight}>
        <Heart x={83} y={32} r={12} />
      </Bubble>
    </g>
  ),

  // "ja": thumbs up and a green tick.
  'w.ja': () => (
    <g>
      <Hand pose="thumb" x={46} y={106} scale={1.45} skin={SKIN.henk} sleeve={[PAL.blue, PAL.blueShade]} />
      <Tick x={84} y={36} r={22} />
    </g>
  ),

  // "nee": a flat hand says stop, with a red cross.
  'w.nee': () => (
    <g>
      <Hand pose="open" x={46} y={108} scale={1.3} skin={SKIN.jada} sleeve={[PAL.purple, PAL.purpleShade]} />
      <Cross x={86} y={36} r={22} />
    </g>
  ),

  // "tot morgen": a wave goodbye, and the next day on the calendar.
  'w.totmorgen': () => (
    <g>
      <Calendar x={14} y={22} w={66} h={66} mark={6} />
      <Hand pose="open" x={92} y={110} rotate={14} scale={0.76} skin={SKIN.bram} sleeve={[PAL.orange, PAL.orangeShade]} />
      <Motion x={98} y={60} dir={-40} spread={70} len={7} gap={7} color={PAL.sky} width={3.4} />
    </g>
  ),

  // "de collega": two co-workers side by side, both in work clothes.
  'w.collega': () => (
    <g>
      <Bust who="jada" x={82} y={114} scale={0.6} expr="pleased" flip />
      <Bust who="bram" x={38} y={114} scale={0.6} expr="pleased" />
    </g>
  ),

  // "de baas": Henk in his navy jacket, with a tie, big and in the middle.
  'w.baas': () => (
    <g>
      <Bust who="henk" x={60} y={114} scale={0.8} expr="neutral" />
      <path d="M57 91.5H63L64.5 96L62 112H58L55.5 96Z" fill={PAL.red} />
      <path d="M60.5 96L62 112H60L61.2 96Z" fill={PAL.redShade} opacity=".7" />
      <rect x="56.5" y="89.5" width="7" height="6" rx="2" fill={PAL.redShade} />
    </g>
  ),

  // "de leidinggevende": Henk with a clipboard of checked tasks.
  'w.leidinggevende': () => (
    <g>
      <Bust who="henk" x={42} y={114} scale={0.64} expr="neutral" />
      <g transform="rotate(6 86 72)">
        <rect x="66" y="44" width="40" height="56" rx="5" fill={PAL.cardDark} transform="translate(0 3)" />
        <rect x="66" y="44" width="40" height="56" rx="5" fill={PAL.card} />
        <rect x="71" y="52" width="30" height="43" rx="2.5" fill={PAL.white} />
        <rect x="78" y="40" width="16" height="9" rx="3" fill={PAL.slate} />
        <path d="M75 62L78 65L83 59M75 74L78 77L83 71M75 86L78 89L83 83" fill="none" stroke={PAL.ok} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M87 62H97M87 74H97M87 86H95" stroke={PAL.line} strokeWidth="2.4" strokeLinecap="round" />
      </g>
    </g>
  ),

  // "het werk": the hard hat, with a hammer and a wrench crossed behind it.
  'w.werk': () => (
    <g>
      <Ground cy={104} rx={40} ry={5} />
      {/* Hammer: handle from bottom left to top right */}
      <path d="M26 92L84 26" stroke={PAL.wood} strokeWidth="8" strokeLinecap="round" />
      <path d="M72 18L96 40" stroke={PAL.slate} strokeWidth="13" strokeLinecap="round" />
      <path d="M74 17L80 22" stroke={PAL.steel} strokeWidth="4" strokeLinecap="round" />
      {/* Wrench: handle from bottom right to top left */}
      <path d="M94 92L38 30" stroke={PAL.steel} strokeWidth="8" strokeLinecap="round" />
      <path d="M36 14A14 14 0 1 0 50 30" fill="none" stroke={PAL.steel} strokeWidth="9" strokeLinecap="round" transform="rotate(-20 38 28)" />
      <HardHat x={60} y={84} s={0.62} />
    </g>
  ),

  // "de naam": a name badge on a lanyard, with a photo and a name line.
  'w.naam': () => (
    <g>
      <path d="M40 12L54 34M80 12L66 34" stroke={PAL.sky} strokeWidth="5" strokeLinecap="round" />
      <rect x="54" y="28" width="12" height="12" rx="3" fill={PAL.steel} />
      <rect x="20" y="40" width="80" height="62" rx="9" fill={PAL.paperShade} transform="translate(0 4)" />
      <rect x="20" y="40" width="80" height="62" rx="9" fill={PAL.white} />
      <path d="M20 49A9 9 0 0 1 29 40H91A9 9 0 0 1 100 49V52H20Z" fill={PAL.sky} />
      <rect x="51" y="44" width="18" height="4" rx="2" fill={PAL.white} opacity=".9" />
      <rect x="28" y="58" width="32" height="36" rx="5" fill="#e3f5ff" />
      <g transform="translate(28 58) scale(0.3) translate(7 2)">
        <CastHead who="amina" expr="pleased" />
      </g>
      <path d="M66 66H92M66 78H86M66 88H90" stroke={PAL.line} strokeWidth="3.2" strokeLinecap="round" />
    </g>
  ),

  // "nieuw": a brand-new box, shining with sparkles.
  'w.nieuw': () => (
    <g>
      <Ground cy={104} rx={36} ry={5} />
      <Box x={28} y={54} w={50} h={46} depth={14} label />
      <Sparkle x={94} y={26} r={13} />
      <Sparkle x={24} y={32} r={8} />
      <Sparkle x={60} y={18} r={6} color={PAL.yellowShade} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
