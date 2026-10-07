import type { JSX } from 'react';
import { Arrow, Box, Bubble, Bust, CurveArrow, Ground, Hand, PAL, QuestionMark, Shade, Shine, SKIN } from './kit';

/** Word pictures, group 2 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx. */

/** A round tomato with a green calyx, centred on (cx, cy). */
function Tomato({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  const k = r / 30;
  return (
    <g>
      <Shade color={PAL.redShade} opacity={1} at={[cx + r * 0.95, cy + r * 0.3, r * 0.55, r * 1.2]}>
        <path
          d={`M${cx} ${cy - r * 0.86}C${cx + r * 0.7} ${cy - r * 1.02} ${cx + r * 1.08} ${cy - r * 0.5} ${cx + r * 1.04} ${cy + r * 0.06}C${cx + r} ${cy + r * 0.72} ${cx + r * 0.5} ${cy + r * 0.96} ${cx} ${cy + r * 0.96}C${cx - r * 0.5} ${cy + r * 0.96} ${cx - r} ${cy + r * 0.72} ${cx - r * 1.04} ${cy + r * 0.06}C${cx - r * 1.08} ${cy - r * 0.5} ${cx - r * 0.7} ${cy - r * 1.02} ${cx} ${cy - r * 0.86}Z`}
          fill={PAL.red}
        />
      </Shade>
      <Shine d={`M${cx - r * 0.72} ${cy - r * 0.1}Q${cx - r * 0.66} ${cy - r * 0.56} ${cx - r * 0.3} ${cy - r * 0.68}`} width={Math.max(2.4, 4 * k)} opacity={0.55} />
      <g transform={`translate(${cx} ${cy - r * 0.84}) scale(${k})`}>
        <path d="M0 0L-15 -3L-6 -5L-11 -12L0 -6L11 -12L6 -5L15 -3Z" fill={PAL.leaf} stroke={PAL.leaf} strokeWidth="3" strokeLinejoin="round" />
        <path d="M0 -4V-15" stroke={PAL.leafShade} strokeWidth="4.5" strokeLinecap="round" />
      </g>
    </g>
  );
}

export default {
  // "ik begrijp het niet": I don't understand — a puzzled Amina with a question in her bubble
  'w.begrijpniet': () => (
    <g>
      <Bust who="amina" x={44} y={114} scale={0.62} expr="thinking" />
      <Bubble x={60} y={10} w={50} h={42} tail="left">
        <QuestionMark x={85} y={31} size={32} color={PAL.sky} />
      </Bubble>
    </g>
  ),

  // "nog een keer": one more time — Jada cups her hand to her ear: "say it again?"
  'w.nogeenkeer': () => (
    <g>
      <Bust who="jada" x={46} y={118} scale={0.72} expr="thinking" />
      {/* Hand cupped behind the ear */}
      <Hand pose="open" x={74} y={92} rotate={-12} scale={0.62} skin={SKIN.jada} sleeve={[PAL.sky, PAL.skyShade]} mirror />
      {/* Sound arriving at the ear */}
      <path d="M92 54Q97 62 92 70M100 50Q108 62 100 76" fill="none" stroke={PAL.line} strokeWidth="3.6" strokeLinecap="round" />
      {/* Her question: "again?" — a bubble with a loop-back arrow */}
      <Bubble x={64} y={8} w={48} h={30} tail="left">
        <CurveArrow from={[103, 30]} to={[76, 28]} bend={-13} color={PAL.sky} width={5} head={10} />
      </Bubble>
    </g>
  ),

  // "langzaam": slowly — a snail creeping along the floor
  'w.langzaam': () => (
    <g>
      <Ground cx={58} cy={100} rx={44} ry={4.5} />
      {/* Body with two eye stalks */}
      <path d="M12 100Q12 90 24 90H84Q94 90 98 80L102 66Q104 60 109 62Q113 64 111 70L106 92Q104 100 94 100Z" fill={PAL.lime} />
      <path d="M100 66L94 48M106 64L108 46" stroke={PAL.lime} strokeWidth="4" strokeLinecap="round" />
      <circle cx="94" cy="47" r="5.4" fill={PAL.lime} />
      <circle cx="108" cy="45" r="5.4" fill={PAL.lime} />
      <circle cx="95" cy="47" r="3" fill={PAL.ink} />
      <circle cx="109" cy="45" r="3" fill={PAL.ink} />
      <path d="M18 99H100" stroke={PAL.leaf} strokeWidth="2.4" strokeLinecap="round" />
      {/* Shell */}
      <Shade color={PAL.cardDark} opacity={1} at={[90, 72, 18, 36]}>
        <circle cx="58" cy="62" r="30" fill={PAL.card} />
      </Shade>
      <path d="M58 62m0 -5a5 5 0 1 1 -5 5a11 11 0 0 1 11 -11a17 17 0 0 1 17 17a23 23 0 0 1 -23 23" fill="none" stroke={PAL.cardShade} strokeWidth="4.5" strokeLinecap="round" />
      <Shine d="M36 52Q40 40 52 35" width={4} />
    </g>
  ),

  // "helpen": to help — Amina sweats under a heavy box; a cheerful Bram lifts the other side
  'w.helpen': () => (
    <g>
      <Ground cx={60} cy={108} rx={46} ry={4} />
      <Bust who="amina" x={30} y={112} scale={0.52} expr="disappointed" />
      <Bust who="bram" x={92} y={112} scale={0.52} expr="pleased" />
      <Box x={36} y={70} w={42} h={32} depth={10} />
      <Hand pose="open" x={30} y={100} rotate={60} scale={0.5} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} />
      <Hand pose="open" x={94} y={102} rotate={-60} scale={0.5} skin={SKIN.bram} sleeve={[PAL.orange, PAL.orangeShade]} mirror />
      {/* Amina is straining: sweat drops */}
      <path d="M14 44Q10 50 14 52Q18 50 14 44ZM50 40Q46 46 50 48Q54 46 50 40Z" fill={PAL.sky} />
      <Arrow from={[61, 56]} to={[61, 24]} color={PAL.sky} width={7} head={11} />
    </g>
  ),

  // "waar": where — a location pin with a question mark inside
  'w.waar': () => (
    <g>
      <Ground cx={60} cy={104} rx={22} ry={5} />
      <Shade color={PAL.redShade} opacity={1} at={[96, 50, 22, 60]}>
        <path d="M60 104C52 92 22 68 22 46C22 24 39 10 60 10C81 10 98 24 98 46C98 68 68 92 60 104Z" fill={PAL.red} />
      </Shade>
      <circle cx="60" cy="46" r="24" fill={PAL.white} />
      <path d="M60 22a24 24 0 0 1 0 48" fill={PAL.paperShade} opacity=".7" />
      <QuestionMark x={60} y={47} size={34} color={PAL.red} />
      <Shine d="M30 36Q34 22 46 16" width={4} />
    </g>
  ),

  // "de wc": the toilet — a white toilet bowl with its cistern
  'w.wc': () => (
    <g>
      <Ground cx={58} cy={106} rx={34} ry={5} />
      {/* Cistern */}
      <rect x="30" y="12" width="56" height="34" rx="6" fill={PAL.paperShade} />
      <rect x="30" y="12" width="46" height="34" rx="6" fill={PAL.paper} />
      <rect x="62" y="8" width="14" height="7" rx="3" fill={PAL.steel} />
      {/* Pedestal */}
      <path d="M42 70H78L74 100Q74 104 70 104H50Q46 104 46 100Z" fill={PAL.paperShade} />
      <path d="M42 70H66L64 104H50Q46 104 46 100Z" fill={PAL.paper} />
      {/* Bowl and seat */}
      <path d="M20 58H98Q98 80 74 84H44Q20 80 20 58Z" fill={PAL.mist} />
      <path d="M20 58H86Q84 78 64 84H44Q20 80 20 58Z" fill={PAL.paper} />
      <rect x="16" y="48" width="86" height="12" rx="6" fill={PAL.sky} />
      <rect x="16" y="54" width="86" height="6" rx="3" fill={PAL.skyShade} />
      <Shine d="M26 66Q30 76 40 79" width={3.5} color={PAL.mist} opacity={1} />
      <Shine d="M36 18H54" width={3.5} color={PAL.white} opacity={1} />
    </g>
  ),

  // "de kas": the greenhouse — a flat-filled glass house with two roof ridges and tomato plants inside
  'w.kas': () => (
    <g>
      <Ground cx={60} cy={104} rx={50} ry={4.5} />
      {/* Glass body: two gables */}
      <path d="M14 54L37 30L60 54L83 30L106 54V100H14Z" fill={PAL.ice} stroke={PAL.ice} strokeWidth="4" strokeLinejoin="round" />
      {/* Shade side: the right gable */}
      <path d="M83 30L106 54V100H83Z" fill={PAL.sky} opacity=".45" stroke={PAL.sky} strokeOpacity=".45" strokeWidth="4" strokeLinejoin="round" />
      {/* Plants with tomatoes */}
      {[28, 60, 92].map((x) => (
        <g key={x}>
          <rect x={x - 3} y={60} width="6" height="36" rx="3" fill={PAL.greenShade} />
          <path d={`M${x - 13} 84C${x - 15} 70 ${x - 8} 60 ${x} 60C${x + 8} 60 ${x + 15} 70 ${x + 13} 84C${x + 10} 92 ${x - 10} 92 ${x - 13} 84Z`} fill={PAL.green} />
          <circle cx={x - 5} cy={86} r="5" fill={PAL.red} />
          <circle cx={x + 6} cy={83} r="4.5" fill={PAL.red} />
        </g>
      ))}
      {/* Chunky white frame: ridges and two posts */}
      <path d="M14 54L37 30L60 54L83 30L106 54M60 54V96M14 54H106" fill="none" stroke={PAL.white} strokeWidth="4.5" strokeLinejoin="round" strokeLinecap="round" />
      {/* Concrete plinth */}
      <rect x="10" y="94" width="100" height="10" rx="3" fill={PAL.steel} />
      <rect x="10" y="94" width="100" height="4" rx="2" fill={PAL.mist} />
      <Shine d="M22 50L34 38" width={3.5} opacity={0.9} />
    </g>
  ),

  // "de tomaat": the tomato
  'w.tomaat': () => (
    <g>
      <Ground cx={60} cy={102} rx={34} ry={5} />
      <Tomato cx={60} cy={64} r={40} />
    </g>
  ),

  // "de paprika": the bell pepper — a yellow pepper with a green stalk
  'w.paprika': () => (
    <g>
      <Ground cx={60} cy={104} rx={30} ry={5} />
      <Shade color={PAL.yellowShade} opacity={1} at={[96, 66, 18, 50]}>
        <path d="M60 28C76 22 92 28 94 46C96 64 92 82 86 92C82 100 74 102 68 96C64 102 56 102 52 96C46 102 38 100 34 92C28 82 24 64 26 46C28 28 44 22 60 28Z" fill={PAL.yellow} />
      </Shade>
      <path d="M52 40Q48 66 54 94M70 40Q74 66 68 94" fill="none" stroke={PAL.yellowShade} strokeWidth="2" strokeLinecap="round" opacity=".7" />
      <path d="M46 30Q60 22 74 30Q66 36 60 34Q54 36 46 30Z" fill={PAL.green} />
      <path d="M60 30Q60 18 70 12" fill="none" stroke={PAL.greenShade} strokeWidth="6" strokeLinecap="round" />
      <Shine d="M34 52Q34 40 42 34" color={PAL.yellowShine} width={4.5} opacity={0.9} />
    </g>
  ),

  // "de komkommer": the cucumber — a long dark-green cucumber with a slice beside it
  'w.komkommer': () => (
    <g>
      <Ground cx={58} cy={100} rx={44} ry={5} />
      <g transform="rotate(-32 56 66)">
        <Shade color={PAL.greenShade} opacity={1} at={[56, 84, 60, 10]}>
          <rect x="6" y="52" width="100" height="28" rx="14" fill={PAL.green} />
        </Shade>
        <rect x="100" y="61" width="9" height="10" rx="3" fill={PAL.leafShade} />
        {[24, 40, 56, 72, 88].map((x, i) => (
          <circle key={x} cx={x} cy={i % 2 ? 62 : 69} r="1.8" fill={PAL.lime} />
        ))}
        <Shine d="M18 58H70" width={3.5} color={PAL.lime} opacity={0.7} />
      </g>
      {/* Slice */}
      <circle cx="88" cy="88" r="14" fill={PAL.greenShade} />
      <circle cx="88" cy="88" r="11" fill={PAL.lime} />
      <ellipse cx="88" cy="88" rx="5" ry="4" fill="#e8f9b8" />
      <path d="M85 86.5h0.1M91 86.5h0.1M88 91h0.1" stroke={PAL.leafShade} strokeWidth="2.6" strokeLinecap="round" />
    </g>
  ),

  // "plukken": to pick — a hand cups a ripe tomato and pulls it down, away from its broken stalk
  'w.plukken': () => {
    const [sk, skSh] = SKIN.amina;
    return (
      <g>
        {/* The plant: stalk from the top with two leaves; the fruit is already off it */}
        <path d="M54 6Q55 14 58 22" fill="none" stroke={PAL.greenShade} strokeWidth="6" strokeLinecap="round" />
        <ellipse cx="42" cy="14" rx="11" ry="6" fill={PAL.green} transform="rotate(25 42 14)" />
        <ellipse cx="72" cy="12" rx="10" ry="5.5" fill={PAL.leaf} transform="rotate(-20 72 12)" />
        {/* The tomato */}
        <Tomato cx={58} cy={68} r={22} />
        {/* Hand from below: sleeve, palm under the fruit, thumb up the right side, fingers over the front */}
        <path d="M58 96L82 92L100 120H60Z" fill={PAL.green} />
        <path d="M58 96L82 92L85 97L60 102Z" fill={PAL.greenShade} />
        <Shade color={skSh} opacity={0.8} at={[84, 92, 10, 24]}>
          <g>
            <ellipse cx="60" cy="94" rx="21" ry="10" fill={sk} />
            <rect x="74" y="64" width="9" height="30" rx="4.5" fill={sk} transform="rotate(10 78 80)" />
          </g>
        </Shade>
        {[[40, 76], [48, 80], [57, 82], [66, 81]].map(([fx, fy]) => (
          <rect key={fx} x={fx - 4} y={fy} width="8.5" height={92 - fy + 6} rx="4.25" fill={sk} />
        ))}
        <path d="M44 82V94M52.5 84V96M61.5 85V97" stroke={skSh} strokeWidth="1.4" strokeLinecap="round" />
        {/* Pull: arrow down */}
        <Arrow from={[16, 44]} to={[16, 84]} color={PAL.sky} width={7} head={12} />
      </g>
    );
  },

  // "de krat": the crate — a plastic harvest crate full of tomatoes
  'w.krat': () => (
    <g>
      <Ground cx={60} cy={104} rx={46} ry={5} />
      {/* Back rim */}
      <path d="M14 52L26 40H106L94 52Z" fill={PAL.blueShade} stroke={PAL.blueShade} strokeWidth="2" strokeLinejoin="round" />
      {/* Tomatoes peeking out */}
      <Tomato cx={30} cy={46} r={11} />
      <Tomato cx={52} cy={44} r={12} />
      <Tomato cx={75} cy={45} r={11} />
      <Tomato cx={92} cy={46} r={10} />
      {/* Side and front */}
      <path d="M94 52L106 40V88L94 100Z" fill={PAL.blueShade} stroke={PAL.blueShade} strokeWidth="2" strokeLinejoin="round" />
      <rect x="14" y="50" width="80" height="52" rx="3" fill={PAL.blue} />
      <rect x="40" y="58" width="28" height="8" rx="4" fill={PAL.navy} />
      {[22, 36, 50, 64, 78].map((x) => (
        <rect key={x} x={x} y="74" width="7" height="20" rx="3" fill={PAL.blueShade} />
      ))}
      <path d="M18 53.5H90" stroke={PAL.blueLight} strokeWidth="2.4" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
