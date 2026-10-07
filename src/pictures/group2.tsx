import type { JSX } from 'react';
import { Arrow, Bubble, Bust, Dots, Ground, Hand, PAL, QuestionMark, Shade, Shine, SKIN } from './kit';

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

  // "nog een keer": one more time — a speech bubble inside a circle of repeat arrows
  'w.nogeenkeer': () => (
    <g>
      <path d="M22 68A39 39 0 0 1 86 30" fill="none" stroke={PAL.sky} strokeWidth="9" strokeLinecap="round" />
      <polygon points="100 44 78 20 76 46" fill={PAL.sky} stroke={PAL.sky} strokeWidth="4" strokeLinejoin="round" />
      <path d="M98 52A39 39 0 0 1 34 90" fill="none" stroke={PAL.skyShade} strokeWidth="9" strokeLinecap="round" />
      <polygon points="20 76 42 100 44 74" fill={PAL.skyShade} stroke={PAL.skyShade} strokeWidth="4" strokeLinejoin="round" />
      <Bubble x={38} y={43} w={44} h={30} tail="none">
        <Dots cx={60} cy={58} gap={11} r={4} color={PAL.skyShade} />
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

  // "helpen": to help — one hand reaching down and taking another hand to pull it up
  'w.helpen': () => (
    <g>
      <Hand pose="open" x={50} y={112} skin={SKIN.jada} sleeve={[PAL.orange, PAL.orangeShade]} />
      <Hand pose="hold" x={52} y={28} rotate={180} scale={1.1} skin={SKIN.henk} sleeve={[PAL.navy, PAL.navyShade]} />
      <Arrow from={[94, 92]} to={[94, 34]} color={PAL.sky} width={8} head={13} />
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

  // "de kas": the greenhouse — a Dutch glass greenhouse with two roof ridges and plants inside
  'w.kas': () => (
    <g>
      <Ground cx={60} cy={104} rx={50} ry={4.5} />
      {/* Glass */}
      <path d="M12 52L34 30L56 52L78 30L100 52V102H12Z" fill="#e3f5ff" stroke="#e3f5ff" strokeWidth="2" strokeLinejoin="round" />
      <path d="M78 30L100 52V102H78Z" fill={PAL.ice} opacity=".55" />
      {/* Plants: tomato vines in a row */}
      {[24, 45, 66, 88].map((x) => (
        <g key={x}>
          <path d={`M${x} 100V62`} stroke={PAL.greenShade} strokeWidth="3" strokeLinecap="round" />
          <ellipse cx={x - 5} cy={72} rx="6" ry="4" fill={PAL.green} transform={`rotate(-30 ${x - 5} 72)`} />
          <ellipse cx={x + 5} cy={64} rx="6" ry="4" fill={PAL.green} transform={`rotate(30 ${x + 5} 64)`} />
          <ellipse cx={x + 5} cy={84} rx="6" ry="4" fill={PAL.leaf} transform={`rotate(30 ${x + 5} 84)`} />
          <circle cx={x - 4} cy={90} r="4" fill={PAL.red} />
        </g>
      ))}
      {/* Frame */}
      <path d="M12 102V52L34 30L56 52L78 30L100 52V102H12ZM56 52V102M34 30V102M78 30V102M12 52H100M12 78H100" fill="none" stroke={PAL.steel} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
      <Shine d="M18 48L32 34" width={3} opacity={0.9} />
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

  // "plukken": to pick — a hand pulling a ripe tomato off the vine
  'w.plukken': () => (
    <g>
      {/* Vine with the stalk stretched down to the tomato */}
      <path d="M10 16Q50 24 98 14" fill="none" stroke={PAL.greenShade} strokeWidth="4" strokeLinecap="round" />
      <path d="M54 20Q56 34 54 48" fill="none" stroke={PAL.greenShade} strokeWidth="3.5" strokeLinecap="round" />
      <ellipse cx="30" cy="24" rx="9" ry="5" fill={PAL.green} transform="rotate(20 30 24)" />
      <ellipse cx="80" cy="22" rx="9" ry="5" fill={PAL.leaf} transform="rotate(-20 80 22)" />
      {/* Hand cupping the tomato from below, thumb over the front */}
      <Hand pose="hold" x={54} y={112} scale={1.05} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} />
      <Tomato cx={54} cy={66} r={19} />
      <rect x="62" y="64" width="9" height="22" rx="4.5" fill={SKIN.amina[0]} transform="rotate(18 66 75)" />
      <path d="M64 70l2 1" stroke={SKIN.amina[1]} strokeWidth="1.4" strokeLinecap="round" transform="rotate(18 66 75)" />
      <Arrow from={[94, 44]} to={[94, 86]} color={PAL.sky} width={7} head={12} />
    </g>
  ),

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
