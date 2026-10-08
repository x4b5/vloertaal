import type { JSX } from 'react';
import { Arrow, Box, Bubble, Bust, CurveArrow, Ground, Hand, PAL, QuestionMark, Shade, Shine, SKIN } from './kit';

/** Word pictures, group 2 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx. */

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
} as Record<string, () => JSX.Element>;
