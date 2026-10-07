import type { JSX, ReactNode } from 'react';
import { Arrow, Box, Bubble, Bust, Clock, Cross, CurveArrow, Dots, ExclaimMark, Ground, Hand, Motion, PAL, QuestionMark, SKIN, Shade, Shine, Sparkle, Tick } from './kit';

/** Word pictures, group 6 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx. */

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
  // "het probleem": Bram is stuck — big worried face, a bead of sweat, and a red "?!" badge
  'w.probleem': () => (
    <g>
      <Bust who="bram" x={52} y={124} scale={0.88} expr="disappointed" />
      <path d="M17 44Q23 54 23 58A6 6 0 0 1 11 58Q11 54 17 44Z" fill={PAL.ice} />
      <path d="M14.5 56.5A3 3 0 0 0 16 59" fill="none" stroke={PAL.white} strokeWidth="1.8" strokeLinecap="round" opacity=".8" />
      <circle cx="93" cy="30" r="18" fill={PAL.redShade} />
      <circle cx="93" cy="27" r="18" fill={PAL.red} />
      <QuestionMark x={87} y={27} size={23} color={PAL.white} />
      <ExclaimMark x={100.5} y={27} size={23} color={PAL.white} />
      <Motion x={93} y={27} dir={-90} spread={110} n={3} len={5} gap={23} color={PAL.red} width={3.4} />
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

  // "de afspraak": the agreement — two hands shake on it, with a green tick above
  'w.afspraak': () => (
    <g>
      <Tick x={60} y={24} r={15} />
      <g transform="translate(60 76) scale(1.16) translate(-60 -76)">
        {/* Sleeves: Henk (navy) from the left, Jada (orange) from the right */}
        <g transform="rotate(-8 60 76)">
          <rect x="-6" y="62" width="34" height="30" rx="6" fill={PAL.navy} />
          <rect x="22" y="60" width="9" height="34" rx="4.5" fill={PAL.navyShade} />
          <rect x="92" y="62" width="34" height="30" rx="6" fill={PAL.orange} />
          <rect x="89" y="60" width="9" height="34" rx="4.5" fill={PAL.orangeShade} />
        </g>
        {/* Jada's hand (behind): palm, and her fingertips curling under Henk's hand */}
        <g fill={SKIN.jada[1]}>
          <rect x="34" y="80" width="8" height="10" rx="4" />
          <rect x="42.5" y="81" width="8" height="10" rx="4" />
          <rect x="51" y="81" width="8" height="9" rx="4" />
        </g>
        <Shade color={SKIN.jada[1]} opacity={0.9} at={[84, 94, 24, 12]}>
          <rect x="56" y="58" width="38" height="30" rx="13" fill={SKIN.jada[0]} transform="rotate(-6 75 73)" />
        </Shade>
        {/* Henk's hand (in front): palm, and four fingers wrapped over Jada's hand */}
        <rect x="26" y="60" width="34" height="26" rx="12" fill={SKIN.henk[0]} transform="rotate(-8 43 73)" />
        <g transform="translate(52 61) rotate(30)">
          {[[0, 25], [8.6, 26], [17.2, 23], [25.8, 18]].map(([o, len], k) => (
            <g key={k}>
              <rect x={-4} y={o - 4} width={len} height="8" rx="4" fill={SKIN.henk[0]} />
              {k > 0 && <path d={`M${len * 0.3} ${o - 4.3}H${len - 6}`} stroke={SKIN.henk[1]} strokeWidth="1.6" strokeLinecap="round" />}
            </g>
          ))}
        </g>
        {/* Jada's thumb over the back of Henk's hand */}
        <rect x="38" y="56" width="28" height="9" rx="4.5" fill={SKIN.jada[0]} transform="rotate(6 52 60)" />
        <path d="M42 60H46" stroke={SKIN.jada[1]} strokeWidth="1.6" strokeLinecap="round" />
        <Shine d="M31 70Q32 66 36 64" width={2.6} opacity={0.5} />
      </g>
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

  // "zaterdag": Saturday — a week planner with seven day columns: five work days (hard
  // hats), then the sixth day breaks out as a big orange day off; an arrow points at it
  'w.zaterdag': () => {
    const cx = (i: number) => 19.5 + i * 13.5;
    const sat = cx(5);
    return (
      <g>
        {/* Week planner */}
        <rect x="10" y="40" width="100" height="64" rx="8" fill={PAL.paperShade} />
        <rect x="10" y="36" width="100" height="64" rx="8" fill={PAL.white} />
        <path d="M10 44A8 8 0 0 1 18 36H102A8 8 0 0 1 110 44V50H10Z" fill={PAL.red} />
        <rect x="24" y="31" width="5.5" height="12" rx="2.75" fill={PAL.slate} />
        <rect x="58" y="31" width="5.5" height="12" rx="2.75" fill={PAL.slate} />
        {Array.from({ length: 7 }, (_, i) => {
          if (i === 5) return null;
          const x = cx(i);
          return i === 6 ? (
            <rect key={i} x={x - 5.5} y={54} width="11" height="42" rx="3" fill={PAL.redLight} />
          ) : (
            <g key={i}>
              <rect x={x - 5.5} y={54} width="11" height="42" rx="3" fill={PAL.mist} />
              <path d={`M${x - 4.6} 90A4.6 4.6 0 0 1 ${x + 4.6} 90Z`} fill={PAL.yellow} stroke={PAL.yellow} strokeWidth="1.6" strokeLinejoin="round" />
              <path d={`M${x - 5.2} 90.6H${x + 5.2}`} stroke={PAL.yellowShade} strokeWidth="2" strokeLinecap="round" />
            </g>
          );
        })}
        {/* Saturday: the day off */}
        <rect x={sat - 10} y={32} width="20" height="76" rx="5" fill={PAL.orangeShade} />
        <rect x={sat - 10} y={28} width="20" height="76" rx="5" fill={PAL.orange} />
        <path d={`M${sat + 3} 28H${sat + 5}A5 5 0 0 1 ${sat + 10} 33V99A5 5 0 0 1 ${sat + 5} 104H${sat + 3}Z`} fill={PAL.orangeShade} opacity=".6" />
        <circle cx={sat} cy={84} r="6.5" fill={PAL.yellow} />
        <Shine d={`M${sat - 5} 35V48`} width={3} opacity={0.5} />
        <Arrow from={[sat, 8]} to={[sat, 25]} color={PAL.sky} width={6} head={10} />
      </g>
    );
  },


  // "overwerken": working overtime — Bram still at work, late at night (moon, clock)
  'w.overwerken': () => (
    <g>
      <Bust who="bram" x={44} y={118} scale={0.62} expr="disappointed" />
      <Moon x={92} y={30} r={17} />
      <Sparkle x={70} y={16} r={5} color={PAL.yellowLight} />
      <Clock cx={92} cy={84} r={17} hour={10} minute={0} rim={PAL.navy} rimShade={PAL.navyShade} />
    </g>
  ),

  // "misschien": maybe — Amina thinks it over; a flat hand rocks up and down: "so-so, maybe"
  'w.misschien': () => (
    <g>
      <Bust who="amina" x={32} y={122} scale={0.6} expr="thinking" />
      <Hand pose="open" x={114} y={66} rotate={-80} scale={0.94} skin={SKIN.jada} sleeve={[PAL.sky, PAL.skyShade]} mirror />
      <CurveArrow from={[94, 38]} to={[66, 26]} bend={7} color={PAL.orange} width={5} head={10} />
      <CurveArrow from={[94, 88]} to={[66, 100]} bend={-7} color={PAL.orange} width={5} head={10} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
