import type { JSX } from 'react';
import { Bust } from './bust';
import { Box, Bubble, CurveArrow, Dots, Ground, Hand, Motion, PAL, SKIN, Shade, Shine, Sparkle } from './kit';

/**
 * Word pictures, group 40 (keyed by word id). See docs/tekenstijl.md and ./kit.tsx.
 *
 * "Feedback en overleg" (u.feedback, the owner's request, 5 November 2026):
 *  - "Feedback krijgen" (l.getfeedback): to think about it (Bram, thinking, under a thought cloud;
 *    not "praten": a cloud of small rounds, no speech tail). Its other five words are abstract.
 *  - "Feedback geven" (l.givefeedback): to tape shut (a box, the tape going over its top to the
 *    roll), and a pair: neat (three boxes straight on top of each other, a sparkle) and crooked
 *    (the same three boxes, leaning). The pair differs in one thing only, the stack, so a picture
 *    choice between them is decided at a glance.
 *  - "Iets zeggen in het werkoverleg" (l.meeting): the team meeting (Henk and Amina at a table, a
 *    paper on it, a bubble between them), the idea (a lamp that is lit) and raising your hand
 *    (Jada, one hand straight up). "de beurt", "de mening" and "onderbreken" have no picture.
 */

/** A table seen from the front: the top and two legs (the people sit behind it). */
function Table({ x = 10, y = 84, w = 100 }: { x?: number; y?: number; w?: number }) {
  return (
    <g>
      <rect x={x + 8} y={y + 8} width="7" height="18" rx="2" fill={PAL.cardDark} />
      <rect x={x + w - 15} y={y + 8} width="7" height="18" rx="2" fill={PAL.cardDark} />
      <rect x={x} y={y} width={w} height="11" rx="3" fill={PAL.wood} />
      <path d={`M${x + 4} ${y + 2.6}H${x + w - 4}`} stroke={PAL.card} strokeWidth="2" strokeLinecap="round" />
    </g>
  );
}

/** A stack of three boxes; `lean` turns the upper two (crooked), else they stand straight. */
function Stack({ lean = false }: { lean?: boolean }) {
  return (
    <g>
      <Ground cx={58} cy={106} rx={44} ry={4} />
      <Box x={20} y={76} w={62} h={28} depth={12} />
      <g transform={lean ? 'rotate(-8 51 76) translate(8 0)' : undefined}>
        <Box x={20} y={47} w={62} h={28} depth={12} />
        <g transform={lean ? 'rotate(-8 51 47) translate(10 1)' : undefined}>
          <Box x={20} y={18} w={62} h={28} depth={12} />
        </g>
      </g>
    </g>
  );
}

export default {
  // "nadenken": to think about something — Bram with his thinking face; a cloud of small rounds
  // goes up from his head to a thought cloud with three dots.
  'w.nadenken': () => (
    <g>
      <Bust who="bram" x={46} y={120} scale={0.66} expr="thinking" />
      <circle cx="78" cy="50" r="3.6" fill={PAL.ice} />
      <circle cx="85" cy="40" r="5" fill={PAL.ice} />
      <g>
        <circle cx="84" cy="22" r="13" fill={PAL.ice} />
        <circle cx="98" cy="20" r="12" fill={PAL.ice} />
        <circle cx="92" cy="30" r="11" fill={PAL.ice} />
        <circle cx="84" cy="21" r="11" fill="#e3f5ff" />
        <circle cx="98" cy="19" r="10" fill="#e3f5ff" />
        <circle cx="91" cy="27" r="9.5" fill="#e3f5ff" />
        <Dots cx={91} cy={23} gap={7.5} r={2.6} />
      </g>
    </g>
  ),

  // "dichtplakken": to tape shut — a closed box; the tape runs over its top and down its front to
  // the roll at the back, and a green arrow over it goes the same way.
  'w.dichtplakken': () => (
    <g>
      <Ground cx={56} cy={106} rx={46} ry={4} />
      <Box x={12} y={60} w={68} h={44} depth={20} />
      {/* The roll of tape at the back end of the strip */}
      <circle cx="68" cy="42" r="12" fill="#f6dcae" />
      <circle cx="68" cy="42" r="11" fill="none" stroke={PAL.cardShade} strokeWidth="2.4" />
      <circle cx="68" cy="42" r="5" fill={PAL.cardDark} />
      <CurveArrow from={[22, 40]} to={[52, 20]} bend={-8} color={PAL.green} width={6} head={11} />
    </g>
  ),

  // "netjes": neat — three boxes straight on top of each other, and a sparkle.
  'w.netjes': () => (
    <g>
      <Stack />
      <Sparkle x={98} y={22} r={8} />
      <Sparkle x={12} y={44} r={5} />
    </g>
  ),

  // "scheef": crooked — the same three boxes, but the upper two lean to one side.
  'w.scheef': () => (
    <g>
      <Stack lean />
    </g>
  ),

  // "het werkoverleg": the team meeting — Henk and Amina behind a table with a paper on it; a
  // speech bubble with dots between them.
  'w.werkoverleg': () => (
    <g>
      <Bust who="henk" x={32} y={96} scale={0.5} expr="pleased" />
      <Bust who="amina" x={88} y={96} scale={0.5} expr="neutral" flip />
      <Table x={8} y={86} w={104} />
      <path d="M48 89L72 89L74 85L50 85Z" fill={PAL.paper} />
      <path d="M53 87H66" stroke={PAL.line} strokeWidth="1.3" strokeLinecap="round" />
      <Bubble x={42} y={12} w={36} h={22} tail="left">
        <Dots cx={60} cy={23} gap={8} r={2.8} />
      </Bubble>
    </g>
  ),

  // "het idee": the idea — a lamp that is lit: a yellow glass, a grey foot, short rays round it.
  'w.idee': () => (
    <g>
      <Motion x={60} y={20} dir={-90} spread={120} n={5} len={8} gap={6} color={PAL.yellowShade} width={4} />
      <rect x="48" y="80" width="24" height="18" rx="4" fill={PAL.mist} />
      <path d="M48 86H72M48 92H72" stroke={PAL.steel} strokeWidth="2" />
      <rect x="53" y="96" width="14" height="8" rx="4" fill={PAL.slate} />
      <Shade color={PAL.yellowShade} opacity={1} at={[86, 52, 16, 40]}>
        <path d="M60 22C76 22 88 34 88 50C88 61 81 67 77 73C75 76 74 78 74 82H46C46 78 45 76 43 73C39 67 32 61 32 50C32 34 44 22 60 22Z" fill={PAL.yellow} />
      </Shade>
      <path d="M54 80V66L60 60L66 66V80" fill="none" stroke={PAL.yellowShade} strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" />
      <Shine d="M42 46Q43 34 54 30" color={PAL.yellowShine} width={4.5} opacity={0.8} />
    </g>
  ),

  // "je hand opsteken": to raise your hand — Jada raises one hand straight up, her other arm down.
  'w.handopsteken': () => (
    <g>
      <Bust who="jada" x={52} y={122} scale={0.66} expr="pleased" />
      <Hand pose="open" x={90} y={46} rotate={4} scale={0.6} skin={SKIN.jada} sleeve={['#ffc929', PAL.yellowShade]} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
