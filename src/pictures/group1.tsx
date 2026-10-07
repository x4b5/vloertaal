import type { JSX } from 'react';
import { CastHead } from '../components/Characters';
import { Box, Bust, Cross, CurveArrow, Ground, Hand, Motion, PAL, SKIN, Shade, Shine, Sparkle, Tick } from './kit';

/** Word pictures, group 1 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx. */

/** A round sun with short rays, centred on (cx, cy). */
function Sun({ cx = 60, cy = 60, r = 16 }: { cx?: number; cy?: number; r?: number }) {
  const rays = Array.from({ length: 8 }, (_, k) => {
    const a = (k * Math.PI) / 4;
    return `M${cx + Math.cos(a) * (r + 5)} ${cy + Math.sin(a) * (r + 5)}L${cx + Math.cos(a) * (r + 12)} ${cy + Math.sin(a) * (r + 12)}`;
  });
  return (
    <g>
      <path d={rays.join('')} stroke={PAL.orangeLight} strokeWidth="5" strokeLinecap="round" />
      <Shade color={PAL.orange} opacity={0.5} at={[cx + r * 1.1, cy, r * 0.55, r * 1.3]}>
        <circle cx={cx} cy={cy} r={r} fill={PAL.yellow} />
      </Shade>
      <Shine d={`M${cx - r * 0.62} ${cy - r * 0.1}A${r * 0.66} ${r * 0.66} 0 0 1 ${cx - r * 0.1} ${cy - r * 0.62}`} color={PAL.yellowShine} width={3.5} opacity={0.9} />
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

/** A glossy yellow hard hat seen from the front, about 96 wide at s = 1, brim centred on (x, y). */
function NewHat({ x = 60, y = 70, s = 1 }: { x?: number; y?: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s}) translate(-60 -70)`}>
      <Shade color={PAL.yellowShade} opacity={0.75} at={[96, 46, 18, 40]}>
        <path d="M22 66C22 34 38 16 60 16C82 16 98 34 98 66Z" fill={PAL.yellow} />
      </Shade>
      <rect x="53" y="16" width="14" height="48" rx="7" fill={PAL.yellowLight} />
      <Shine d="M32 54Q34 36 48 26" color={PAL.white} width={6} opacity={0.9} />
      <rect x="12" y="60" width="96" height="13" rx="6.5" fill={PAL.yellowShade} />
      <rect x="12" y="60" width="96" height="4.5" rx="2.25" fill={PAL.yellowLight} opacity=".7" />
    </g>
  );
}

/** A big thumbs-up seen from the side: curled fingers stacked on the left, thumb straight up. */
function ThumbsUp() {
  const [s, sh] = SKIN.henk;
  return (
    <g>
      <rect x="44" y="96" width="40" height="30" rx="6" fill={PAL.blue} />
      <rect x="43" y="93" width="42" height="9" rx="4.5" fill={PAL.blueShade} />
      <Shade color={sh} opacity={0.8} at={[92, 70, 12, 40]}>
        <g fill={s}>
          <rect x="52" y="14" width="17" height="50" rx="8.5" transform="rotate(-6 60 60)" />
          <rect x="40" y="50" width="46" height="46" rx="13" />
          <rect x="28" y="50" width="34" height="13" rx="6.5" />
          <rect x="26" y="61" width="34" height="12" rx="6" />
          <rect x="27" y="72" width="32" height="12" rx="6" />
          <rect x="30" y="83" width="28" height="11" rx="5.5" />
        </g>
      </Shade>
      <path d="M34 62.5H56M33 73.5H55M35 84H54" stroke={sh} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M57 26Q58 22 62 22" fill="none" stroke={sh} strokeWidth="1.6" strokeLinecap="round" opacity=".8" />
      <Shine d="M55 46Q54 32 57 22" width={3} opacity={0.45} />
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

  // "goedemorgen": Amina waves hello while the morning sun comes up behind her.
  'w.goedemorgen': () => (
    <g>
      <Sun cx={30} cy={36} r={15} />
      <Bust who="amina" x={50} y={116} scale={0.7} expr="joy" />
      <Hand pose="open" x={96} y={82} rotate={14} scale={0.74} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} />
      <Motion x={101} y={36} dir={-40} spread={70} len={7} gap={7} color={PAL.sky} width={3.6} />
    </g>
  ),

  // "dank je wel": Bram hands Jada a hot coffee; she takes it with a big smile and a hand on her heart.
  'w.dankjewel': () => (
    <g>
      <Bust who="jada" x={40} y={118} scale={0.66} expr="joy" squint />
      {/* Jada's hand on her heart */}
      <Hand pose="open" x={34} y={124} rotate={28} scale={0.46} skin={SKIN.jada} sleeve={['#ffc929', PAL.yellowShade]} />
      {/* The coffee, held out by Bram's hand */}
      <path d="M80 44Q76 38 80 32Q84 26 80 20M92 44Q88 38 92 32Q96 26 92 22" fill="none" stroke={PAL.mist} strokeWidth="3.6" strokeLinecap="round" />
      <path d="M74 62Q66 62 66 70Q66 78 74 78" fill="none" stroke={PAL.skyShade} strokeWidth="5" strokeLinecap="round" />
      <Shade color={PAL.skyShade} opacity={1} at={[102, 70, 9, 30]}>
        <path d="M72 50H100L97 88Q96 92 92 92H80Q76 92 75 88Z" fill={PAL.sky} />
      </Shade>
      <ellipse cx="86" cy="51" rx="13" ry="3" fill={PAL.brown} />
      <Shine d="M77 58V76" width={3.5} opacity={0.6} />
      <Hand pose="hold" x={88} y={106} rotate={-10} scale={0.62} skin={SKIN.bram} sleeve={[PAL.orange, PAL.orangeShade]} mirror />
      <Sparkle x={62} y={18} r={7} />
    </g>
  ),

  // "ja": a big thumbs-up (fist seen from the side, thumb straight up), with a small tick.
  'w.ja': () => <g><ThumbsUp /><Tick x={92} y={30} r={15} /></g>,

  // "nee": a flat hand says stop, with a red cross.
  'w.nee': () => (
    <g>
      <Hand pose="open" x={46} y={108} scale={1.3} skin={SKIN.jada} sleeve={[PAL.purple, PAL.purpleShade]} />
      <Cross x={86} y={36} r={22} />
    </g>
  ),

  // "tot morgen": a hand waves goodbye; the moon goes over to the next day's sun.
  'w.totmorgen': () => (
    <g>
      <Moon x={76} y={26} r={13} />
      <CurveArrow from={[94, 22]} to={[102, 64]} bend={12} color={PAL.sky} width={6.5} head={11} />
      <Sun cx={86} cy={88} r={11} />
      <Hand pose="open" x={38} y={116} rotate={-12} scale={1.08} skin={SKIN.bram} sleeve={[PAL.orange, PAL.orangeShade]} />
      <Motion x={22} y={36} dir={-130} spread={70} len={8} gap={10} color={PAL.sky} width={3.8} />
      <Motion x={60} y={30} dir={-40} spread={60} n={2} len={8} gap={10} color={PAL.sky} width={3.8} />
    </g>
  ),

  // "de collega": two co-workers side by side, both in work clothes.
  'w.collega': () => (
    <g>
      <Bust who="jada" x={82} y={114} scale={0.6} expr="pleased" flip />
      <Bust who="bram" x={38} y={114} scale={0.6} expr="pleased" />
    </g>
  ),

  // "de baas": Henk stands above his team and points the way; two workers look up at him.
  'w.baas': () => (
    <g>
      <Bust who="henk" x={58} y={84} scale={0.56} expr="neutral" />
      <path d="M56.3 70.6H59.7L60.6 73.3L59.1 82H56.9L55.4 73.3Z" fill={PAL.red} />
      <rect x="55.8" y="69.4" width="4.4" height="3.6" rx="1.2" fill={PAL.redShade} />
      <Hand pose="point" x={94} y={64} rotate={40} scale={0.6} skin={SKIN.henk} sleeve={[PAL.navy, PAL.navyShade]} />
      <Bust who="bram" x={33} y={124} scale={0.42} expr="neutral" />
      <Bust who="jada" x={88} y={124} scale={0.42} expr="neutral" flip />
    </g>
  ),

  // "de leidinggevende": the team leader on the floor — Henk in a white leader's helmet and a
  // hi-vis vest, talking into his radio (unlike "de baas", Henk in his suit and tie).
  'w.leidinggevende': () => (
    <g>
      <Bust who="henk" x={50} y={120} scale={0.7} expr="neutral" />
      {/* Hi-vis vest over the jacket */}
      <g transform="translate(50 120) scale(0.7) translate(-60 -134)">
        <path d="M22 134C22 112 30 100 44 96L54 134Z M98 134C98 112 90 100 76 96L66 134Z" fill={PAL.orange} />
        <path d="M24 118H51M69 118H96" stroke={PAL.paper} strokeWidth="7" />
        <path d="M86 102C94 108 98 120 98 134H86Z" fill={PAL.orangeShade} opacity=".7" />
        {/* White helmet with a sky-blue band */}
        <Shade color={PAL.mist} opacity={1} at={[92, 26, 18, 34]}>
          <path d="M30 40C30 18 42 6 60 6C78 6 90 18 90 40Z" fill={PAL.paperShade} />
        </Shade>
        <rect x="55" y="6" width="10" height="34" rx="5" fill={PAL.sky} />
        <rect x="24" y="36" width="72" height="10" rx="5" fill={PAL.steel} />
      </g>
      {/* Radio */}
      <path d="M96 50V36" stroke={PAL.slateDark} strokeWidth="4" strokeLinecap="round" />
      <rect x="86" y="48" width="18" height="34" rx="5" fill={PAL.slate} />
      <rect x="90" y="54" width="10" height="9" rx="2" fill={PAL.ice} />
      <path d="M91 69H99M91 74H99" stroke={PAL.slateDark} strokeWidth="2" strokeLinecap="round" />
      <Hand pose="hold" x={95} y={104} rotate={-6} scale={0.6} skin={SKIN.henk} sleeve={[PAL.navy, PAL.navyShade]} />
      <Motion x={98} y={36} dir={-50} spread={60} n={2} len={6} gap={7} color={PAL.sky} width={3.2} />
    </g>
  ),

  // "het werk": Bram at work, swinging a hammer.
  'w.werk': () => (
    <g>
      <Bust who="bram" x={44} y={116} scale={0.68} expr="neutral" />
      <g transform="rotate(-24 88 78)">
        <path d="M88 86V30" stroke={PAL.wood} strokeWidth="8" strokeLinecap="round" />
        <rect x="70" y="18" width="36" height="15" rx="4" fill={PAL.slate} />
        <rect x="70" y="18" width="12" height="15" rx="4" fill={PAL.steel} />
        <Hand pose="hold" x={88} y={84} scale={0.62} skin={SKIN.bram} sleeve={[PAL.orange, PAL.orangeShade]} />
      </g>
      <Motion x={70} y={14} dir={-150} spread={60} len={8} gap={8} color={PAL.sky} width={3.6} />
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

  // "nieuw": new — a shiny new hard hat just lifted out of its open box, with big sparkles.
  'w.nieuw': () => (
    <g>
      <Ground cx={62} cy={106} rx={38} ry={4.5} />
      <Box x={26} y={70} w={56} h={34} depth={14} open tape={false} />
      <NewHat x={56} y={56} s={0.62} />
      <Sparkle x={22} y={30} r={13} />
      <Sparkle x={98} y={22} r={10} />
      <Sparkle x={104} y={56} r={7} color={PAL.yellowShade} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
