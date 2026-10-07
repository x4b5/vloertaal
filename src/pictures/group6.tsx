import type { JSX, ReactNode } from 'react';
import { Box, Bubble, Bust, Clock, Cross, Dots, Ground, Hand, Motion, PAL, SKIN, Shade, Shine, Sparkle, Tick } from './kit';

/** Word pictures, group 6 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx. */

/** A tangled knot of line (a mess, a problem), centred on (x, y). */
function Knot({ x, y, s = 1, color = PAL.red }: { x: number; y: number; s?: number; color?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path
        d="M-24 10C-24 -8 -8 -12 -8 0C-8 12 -20 8 -16 -4C-12 -16 6 -14 4 0C2 12 -10 8 -6 -4C-2 -16 18 -14 16 0C14 12 4 8 8 -2C12 -12 24 -8 22 6"
        fill="none"
        stroke={color}
        strokeWidth="4.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}

/** A soft grey rain cloud with drops, centred on (x, y). */
function RainCloud({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M-14 16L-17 24M0 16L-3 24M14 16L11 24" stroke={PAL.sky} strokeWidth="3.6" strokeLinecap="round" />
      <Shade color={PAL.steel} opacity={0.7} at={[30, 6, 16, 22]}>
        <path d="M-20 12A10 10 0 0 1 -18 -6A12 12 0 0 1 2 -14A11 11 0 0 1 20 -4A9 9 0 0 1 20 12Z" fill={PAL.mist} />
      </Shade>
      <Shine d="M-16 0A8 8 0 0 1 -8 -8" width={3} opacity={0.7} />
    </g>
  );
}

/** A crescent moon (yellow), centred on (x, y), radius r. */
function Moon({ x, y, r = 20 }: { x: number; y: number; r?: number }) {
  const d =
    `M${x + r * 0.15} ${y - r}A${r} ${r} 0 1 0 ${x + r * 0.95} ${y + r * 0.35}` +
    `A${r * 0.82} ${r * 0.82} 0 0 1 ${x + r * 0.15} ${y - r}Z`;
  return (
    <g>
      <Shade color={PAL.yellowShade} opacity={0.9} at={[x + r * 0.5, y + r * 1.1, r * 0.9, r * 0.5]}>
        <path d={d} fill={PAL.yellow} />
      </Shade>
      <Shine d={`M${x - r * 0.72} ${y + r * 0.1}A${r * 0.74} ${r * 0.74} 0 0 1 ${x - r * 0.3} ${y - r * 0.6}`} color={PAL.yellowShine} width={3.6} opacity={0.9} />
    </g>
  );
}

/** A balance-scale pan hanging from (x, y): strings and a bowl. */
function Pan({ x, y, children }: { x: number; y: number; children?: ReactNode }) {
  return (
    <g>
      <path d={`M${x} ${y}L${x - 15} ${y + 30}M${x} ${y}L${x + 15} ${y + 30}`} stroke={PAL.steel} strokeWidth="2" strokeLinecap="round" />
      {children}
      <path d={`M${x - 20} ${y + 30}H${x + 20}A20 9 0 0 1 ${x - 20} ${y + 30}Z`} fill={PAL.yellowShade} transform="translate(0 2.5)" />
      <path d={`M${x - 20} ${y + 30}H${x + 20}A20 9 0 0 1 ${x - 20} ${y + 30}Z`} fill={PAL.yellow} />
      <circle cx={x} cy={y} r="3.4" fill={PAL.slate} />
    </g>
  );
}

export default {
  // "het probleem": Bram looks worried; in his speech bubble a red tangle (a mess, something wrong)
  'w.probleem': () => (
    <g>
      <Bust who="bram" x={42} y={116} scale={0.64} expr="disappointed" />
      <Bubble x={58} y={10} w={52} h={44} tail="left" fill="#ffe3e3" depth={PAL.redLight}>
        <Knot x={84} y={32} s={0.92} />
      </Bubble>
    </g>
  ),

  // "praten": two co-workers face each other and talk — dots in both speech bubbles
  'w.praten': () => (
    <g>
      <Bust who="amina" x={30} y={118} scale={0.5} expr="pleased" />
      <Bust who="henk" x={90} y={118} scale={0.5} expr="neutral" flip />
      <Bubble x={10} y={12} w={46} h={28} tail="left">
        <Dots cx={33} cy={26} gap={10} r={3.6} color={PAL.skyShade} />
      </Bubble>
      <Bubble x={64} y={24} w={46} h={28} tail="right" fill="#fff3d6" depth={PAL.yellowLight}>
        <Dots cx={87} cy={38} gap={10} r={3.6} color={PAL.yellowShade} />
      </Bubble>
    </g>
  ),

  // "niet fijn": Amina feels down — a little grey rain cloud over her head
  'w.nietfijn': () => (
    <g>
      <Bust who="amina" x={56} y={118} scale={0.68} expr="disappointed" />
      <RainCloud x={90} y={22} s={0.95} />
    </g>
  ),

  // "eerlijk": fair — a balance scale, both pans level with the same box on each
  'w.eerlijk': () => (
    <g>
      <Ground cy={105} rx={26} />
      {/* Stand */}
      <rect x="54" y="26" width="12" height="74" rx="5" fill={PAL.steel} />
      <rect x="61" y="26" width="5" height="74" rx="2.5" fill={PAL.slate} />
      <path d="M36 104Q36 94 46 94H74Q84 94 84 104Z" fill={PAL.steel} />
      <path d="M70 94H74Q84 94 84 104H72Z" fill={PAL.slate} />
      {/* Beam */}
      <rect x="16" y="30" width="88" height="8" rx="4" fill={PAL.slate} transform="translate(0 2)" />
      <rect x="16" y="30" width="88" height="8" rx="4" fill={PAL.steel} />
      <Shine d="M22 32.5H48" width={2.4} opacity={0.4} />
      <circle cx="60" cy="25" r="7" fill={PAL.yellow} />
      <circle cx="62" cy="26" r="4" fill={PAL.yellowShade} opacity=".6" />
      <Pan x={24} y={36}>
        <Box x={14} y={56} w={16} h={12} depth={5} tape={false} />
      </Pan>
      <Pan x={96} y={36}>
        <Box x={86} y={56} w={16} h={12} depth={5} tape={false} />
      </Pan>
    </g>
  ),

  // "boos": Henk is angry — frowning brows, red face, a red zigzag in his bubble
  'w.boos': () => (
    <g>
      <Bust who="henk" x={44} y={118} scale={0.66} expr="disappointed" />
      <ellipse cx="44" cy="70" rx="18" ry="9" fill={PAL.red} opacity=".22" />
      <Bubble x={64} y={10} w={46} h={40} tail="left" fill="#ffe3e3" depth={PAL.redLight}>
        <path d="M74 36L80 22L86 36L92 22L98 36L102 26" fill="none" stroke={PAL.redShade} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </Bubble>
      <Motion x={28} y={50} dir={-130} spread={70} n={3} len={7} gap={6} color={PAL.red} width={3.6} />
    </g>
  ),

  // "samen": together — two hands from both sides lift one box
  'w.samen': () => (
    <g>
      <Box x={34} y={46} w={44} h={38} depth={12} />
      <Hand pose="open" x={14} y={104} rotate={48} scale={0.8} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} />
      <Hand pose="open" x={108} y={102} rotate={-48} scale={0.8} skin={SKIN.bram} sleeve={[PAL.orange, PAL.orangeShade]} mirror />
      <Sparkle x={24} y={30} r={7} />
      <Sparkle x={100} y={20} r={6} color={PAL.sky} />
    </g>
  ),

  // "de afspraak": the agreement — a handshake, with a green tick above
  'w.afspraak': () => (
    <g>
      {/* Sleeves */}
      <path d="M4 112L30 78L46 90L24 118Z" fill={PAL.navy} />
      <path d="M28 80L32 75L49 88L44 93Z" fill={PAL.navyShade} />
      <path d="M116 112L90 78L74 90L96 118Z" fill={PAL.orange} />
      <path d="M92 80L88 75L71 88L76 93Z" fill={PAL.orangeShade} />
      {/* Henk's hand (from the left) */}
      <rect x="36" y="64" width="40" height="22" rx="10" fill={SKIN.henk[0]} transform="rotate(-14 56 75)" />
      {/* Bram's hand (from the right), wrapped over it */}
      <Shade color={SKIN.bram[1]} opacity={0.8} at={[90, 84, 16, 10]}>
        <rect x="48" y="60" width="40" height="24" rx="10" fill={SKIN.bram[0]} transform="rotate(12 68 72)" />
      </Shade>
      <path d="M55 63V78M61 64V80M67 66V81" stroke={SKIN.bram[1]} strokeWidth="1.8" strokeLinecap="round" />
      {/* Henk's thumb over Bram's hand */}
      <rect x="52" y="56" width="22" height="8" rx="4" fill={SKIN.henk[0]} transform="rotate(8 63 60)" />
      <path d="M66 59.5L71 60" stroke={SKIN.henk[1]} strokeWidth="1.4" strokeLinecap="round" />
      <Tick x={60} y={28} r={16} />
    </g>
  ),

  // "lukken": it works out — Jada happy, thumb up, sparkles
  'w.lukken': () => (
    <g>
      <Bust who="jada" x={42} y={118} scale={0.64} expr="joy" />
      <Hand pose="thumb" x={92} y={100} scale={1.0} skin={SKIN.jada} sleeve={[PAL.sky, PAL.skyShade]} />
      <Sparkle x={104} y={24} r={8} />
      <Sparkle x={74} y={20} r={5.5} color={PAL.sky} />
    </g>
  ),

  // "het oneens zijn": to disagree — one says yes (tick), the other says no (cross)
  'w.oneens': () => (
    <g>
      <Bust who="bram" x={30} y={118} scale={0.5} expr="neutral" />
      <Bust who="jada" x={90} y={118} scale={0.5} expr="disappointed" flip />
      <Bubble x={10} y={14} w={42} h={34} tail="left" fill="#e8f9d9" depth={PAL.lime}>
        <Tick x={31} y={30} r={11} />
      </Bubble>
      <Bubble x={68} y={14} w={42} h={34} tail="right" fill="#ffe3e3" depth={PAL.redLight}>
        <Cross x={89} y={30} r={11} />
      </Bubble>
    </g>
  ),

  // "zaterdag": Saturday — a week calendar, the weekend in colour, Saturday ringed
  'w.zaterdag': () => (
    <g>
      <rect x="12" y="26" width="96" height="76" rx="9" fill={PAL.paperShade} />
      <rect x="12" y="22" width="96" height="76" rx="9" fill={PAL.white} />
      <path d="M12 31A9 9 0 0 1 21 22H99A9 9 0 0 1 108 31V42H12Z" fill={PAL.red} />
      <path d="M80 22H99A9 9 0 0 1 108 31V42H80Z" fill={PAL.redShade} opacity=".6" />
      <rect x="34" y="15" width="6" height="14" rx="3" fill={PAL.slate} />
      <rect x="80" y="15" width="6" height="14" rx="3" fill={PAL.slate} />
      {/* Weekend columns */}
      <rect x="80" y="46" width="25" height="49" rx="4" fill="#fff3d6" />
      {Array.from({ length: 21 }, (_, i) => {
        const col = i % 7;
        const row = Math.floor(i / 7);
        const cx = 22 + col * 12.7;
        const cy = 54 + row * 15;
        if (col === 5 && row === 1) return null;
        return <rect key={i} x={cx - 4} y={cy - 4} width="8" height="8" rx="2" fill={col >= 5 ? PAL.yellowShade : PAL.mist} opacity={col >= 5 ? 0.6 : 1} />;
      })}
      <circle cx={22 + 5 * 12.7} cy={69} r="8.5" fill={PAL.orange} />
      <circle cx={22 + 5 * 12.7} cy={69} r="3.4" fill={PAL.white} />
    </g>
  ),

  // "overwerken": working overtime — Bram still at work, late at night (moon, clock)
  'w.overwerken': () => (
    <g>
      <Bust who="bram" x={44} y={118} scale={0.62} expr="disappointed" />
      <Moon x={92} y={30} r={17} />
      <Sparkle x={70} y={16} r={5} color={PAL.yellowLight} />
      <Clock cx={92} cy={84} r={17} hour={10} minute={0} rim={PAL.navy} rimShade={PAL.navyShade} />
    </g>
  ),

  // "misschien": maybe — Amina thinks; in her bubble both a tick and a cross
  'w.misschien': () => (
    <g>
      <Bust who="amina" x={42} y={118} scale={0.62} expr="thinking" />
      <Bubble x={56} y={10} w={54} h={40} tail="left">
        <Tick x={72} y={29} r={10} />
        <Cross x={94} y={29} r={10} />
      </Bubble>
    </g>
  ),
} as Record<string, () => JSX.Element>;
