import type { JSX } from 'react';
import { Box, Bubble, Bust, Clock, Cross, CurveArrow, Dots, ExclaimMark, Ground, Motion, PAL, QuestionMark, SKIN, Shade, Shine, Sparkle, Tick } from './kit';

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

export default {
  // "het probleem": Bram is stuck — worried brows and a wavering mouth, a bead of sweat, and a
  // red "?!" badge
  'w.probleem': () => (
    <g>
      <Bust who="bram" x={52} y={124} scale={0.88} emotion="worried" tilt={-5} bold />
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

  // "niet fijn": Amina feels down — sad brows, heavy eyes looking down, the head bowed; a little
  // grey rain cloud over her head
  'w.nietfijn': () => (
    <g>
      <Bust who="amina" x={54} y={120} scale={0.74} emotion="sad" tilt={7} bold />
      <RainCloud x={92} y={22} s={0.95} />
    </g>
  ),

  // "eerlijk": fair — two co-workers get exactly the same: two equal stacks of boxes, a big
  // equals sign between them and a green tick: an equal share
  'w.eerlijk': () => (
    <g>
      <Ground cx={30} cy={104} rx={20} ry={4} />
      <Ground cx={90} cy={104} rx={20} ry={4} />
      <Box x={14} y={74} w={26} h={28} depth={8} />
      <Box x={14} y={46} w={26} h={28} depth={8} />
      <Box x={74} y={74} w={26} h={28} depth={8} />
      <Box x={74} y={46} w={26} h={28} depth={8} />
      <path d="M53 64H67M53 78H67" stroke={PAL.skyShade} strokeWidth="7" strokeLinecap="round" transform="translate(0 2)" />
      <path d="M53 64H67M53 78H67" stroke={PAL.sky} strokeWidth="7" strokeLinecap="round" />
      <Tick x={60} y={24} r={14} />
    </g>
  ),

  // "boos": Henk is angry — brows pulled down hard, narrowed eyes, a tight mouth, arms crossed;
  // a red zigzag in his bubble
  'w.boos': () => (
    <g>
      <Bust who="henk" x={42} y={122} scale={0.72} emotion="angry" arms="crossed" bold />
      <Bubble x={66} y={10} w={44} h={38} tail="left" fill="#ffe3e3" depth={PAL.redLight}>
        <path d="M75 35L81 21L87 35L93 21L99 35L103 26" fill="none" stroke={PAL.redShade} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </Bubble>
      <Motion x={24} y={42} dir={-130} spread={70} n={3} len={7} gap={6} color={PAL.red} width={3.6} />
    </g>
  ),

  // "samen": together — the team puts their hands in, one on top of the other: four sleeves
  // in the cast's colours, from both sides
  'w.samen': () => {
    const hand = (y: number, fromLeft: boolean, skin: [string, string], sleeve: [string, string]) => (
      <g transform={fromLeft ? undefined : 'translate(120 0) scale(-1 1)'}>
        <rect x="-4" y={y - 9} width="36" height="18" rx="6" fill={sleeve[0]} />
        <rect x="26" y={y - 9.5} width="9" height="19" rx="4.5" fill={sleeve[1]} />
        <Shade color={skin[1]} opacity={1} at={[60, y + 9, 40, 4]}>
          <rect x="33" y={y - 7} width="44" height="14" rx="7" fill={skin[0]} />
        </Shade>
        <rect x="36" y={y - 12} width="15" height="7" rx="3.5" fill={skin[0]} transform={`rotate(-14 36 ${y - 8})`} />
        <path d={`M56 ${y - 2.5}H72`} stroke={skin[1]} strokeWidth="1.4" strokeLinecap="round" opacity=".7" />
      </g>
    );
    return (
      <g>
        {hand(84, true, SKIN.jada, [PAL.sky, PAL.skyShade])}
        {hand(68, false, SKIN.henk, [PAL.navy, PAL.navyShade])}
        {hand(52, true, SKIN.amina, [PAL.green, PAL.greenShade])}
        {hand(36, false, SKIN.bram, [PAL.orange, PAL.orangeShade])}
        <Sparkle x={22} y={20} r={7} />
        <Sparkle x={100} y={102} r={6} color={PAL.sky} />
      </g>
    );
  },

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

  // "lukken": it works out — the last piece goes into the puzzle; Jada's hand holds it,
  // an arrow shows it fits, sparkles where it clicks in
  'w.lukken': () => (
    <g>
      <g transform="translate(8 18) scale(0.88)">
        {/* Board: depth edge, three pieces in place, one empty spot */}
        <rect x="10" y="22" width="68" height="68" rx="7" fill={PAL.paperShade} transform="translate(0 4)" />
        <rect x="10" y="22" width="68" height="68" rx="7" fill={PAL.mist} />
        <rect x="44" y="56" width="32" height="32" rx="3" fill={PAL.steel} opacity=".55" />
        <rect x="12" y="24" width="32" height="32" rx="4" fill={PAL.yellow} />
        <circle cx="44" cy="40" r="6" fill={PAL.yellow} />
        <rect x="44" y="24" width="32" height="32" rx="4" fill={PAL.sky} />
        <circle cx="60" cy="56" r="6" fill={PAL.sky} />
        <rect x="12" y="56" width="32" height="32" rx="4" fill={PAL.green} />
        <circle cx="28" cy="56" r="6" fill={PAL.green} />
        <circle cx="44" cy="72" r="6" fill={PAL.green} />
        <Shine d="M17 36V29H24" width={3} color={PAL.yellowShine} opacity={0.9} />
        {/* The last piece, on its way into the empty spot */}
        <g transform="rotate(14 96 10)">
          <mask id="g6-lukken-piece">
            <rect x="80" y="-6" width="32" height="36" rx="4" fill="#fff" />
            <circle cx="96" cy="-6" r="6.6" fill="#000" />
            <circle cx="80" cy="10" r="6.6" fill="#000" />
          </mask>
          <g mask="url(#g6-lukken-piece)">
            <rect x="80" y="-2" width="32" height="32" rx="4" fill={PAL.orangeShade} />
            <rect x="80" y="-6" width="32" height="32" rx="4" fill={PAL.orange} />
            <path d="M105 0V20" stroke={PAL.orangeShade} strokeWidth="5" strokeLinecap="round" opacity=".5" />
          </g>
        </g>
        <CurveArrow from={[100, 38]} to={[72, 62]} bend={-12} color={PAL.sky} width={6} head={11} />
      </g>
      <Sparkle x={104} y={70} r={8} />
      <Sparkle x={18} y={22} r={5.5} color={PAL.ok} />
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
  // "zaterdag": Saturday — a week calendar: seven columns, five work days in grey, the
  // weekend tinted; the sixth day is circled in red
  'w.zaterdag': () => {
    const cx = (i: number) => 19 + i * 13.6;
    return (
      <g>
        <rect x="8" y="28" width="104" height="76" rx="9" fill={PAL.paperShade} />
        <rect x="8" y="24" width="104" height="76" rx="9" fill={PAL.white} />
        <path d="M8 33A9 9 0 0 1 17 24H103A9 9 0 0 1 112 33V40H8Z" fill={PAL.red} />
        <path d="M88 24H103A9 9 0 0 1 112 33V40H88Z" fill={PAL.redShade} opacity=".6" />
        <rect x="30" y="17" width="6" height="14" rx="3" fill={PAL.slate} />
        <rect x="84" y="17" width="6" height="14" rx="3" fill={PAL.slate} />
        {/* Weekend band behind the last two columns */}
        <rect x={cx(5) - 7.5} y="44" width="28.6" height="52" rx="5" fill="#fff3d6" />
        {[0, 1, 2, 3, 4, 5, 6].flatMap((i) =>
          [52, 78].map((y) => (
            <rect key={`${i}-${y}`} x={cx(i) - 5} y={y - 8} width="10" height="16" rx="3" fill={i < 5 ? PAL.mist : PAL.yellowLight} />
          )),
        )}
        {/* Saturday: a big red ring round the sixth day */}
        <rect x={cx(5) - 5} y="44" width="10" height="16" rx="3" fill={PAL.orange} />
        <circle cx={cx(5)} cy="52" r="12.5" fill="none" stroke={PAL.red} strokeWidth="4" />
        <Shine d="M14 30Q16 27 20 27" width={2.6} opacity={0.5} />
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

  // "misschien": maybe — Henk weighs it up: yes or no? Both a tick and a cross in his
  // thought bubble, nothing decided yet
  'w.misschien': () => (
    <g>
      <Bust who="henk" x={36} y={122} scale={0.62} expr="thinking" />
      <circle cx="58" cy="60" r="3.4" fill={PAL.ice} />
      <circle cx="64" cy="52" r="4.6" fill={PAL.ice} />
      <Bubble x={56} y={10} w={56} h={36} tail="none">
        <Tick x={72} y={28} r={11} />
        <Cross x={96} y={28} r={11} />
      </Bubble>
    </g>
  ),
} as Record<string, () => JSX.Element>;
