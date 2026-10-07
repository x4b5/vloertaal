import type { JSX } from 'react';
import { Box, Bubble, Bust, Clock, Ground, Halo, Hand, Motion, PAL, QuestionMark, SKIN, Shade, Shine, Sparkle } from './kit';

/**
 * Pictures for the coloured unit banners on the learning path. Each sits on its unit colour,
 * so it starts with a light halo and keeps its own main colour away from the banner's.
 */

/** Bram's yellow hard hat, big, three-quarter view. */
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

const unitPictures: Record<string, () => JSX.Element> = {
  // First day: Bram waves hello.
  'u.firstday': () => (
    <g>
      <Halo />
      <Bust who="bram" x={52} y={112} scale={0.66} expr="pleased" />
      <Hand pose="open" x={90} y={72} rotate={14} scale={0.78} skin={SKIN.bram} sleeve={[PAL.blue, PAL.blueShade]} />
      <Motion x={92} y={26} dir={-40} spread={70} len={8} gap={7} color={PAL.white} width={3.6} />
    </g>
  ),
  // Asking for help: a raised hand and a question bubble.
  'u.help': () => (
    <g>
      <Halo />
      <Bubble x={58} y={12} w={48} h={40} tail="left">
        <QuestionMark x={82} y={32} size={28} color={PAL.sky} />
      </Bubble>
      <Hand pose="open" x={42} y={84} rotate={-8} scale={1.05} skin={SKIN.amina} sleeve={[PAL.green, PAL.greenShade]} />
    </g>
  ),
  // Safety first: the yellow hard hat.
  'u.safety': () => (
    <g>
      <Halo />
      <Ground cy={94} rx={44} ry={5} />
      <HardHat x={60} y={70} s={0.95} />
      <Sparkle x={98} y={24} r={9} color={PAL.white} />
      <Sparkle x={20} y={36} r={6} color={PAL.white} />
    </g>
  ),
  // Warehouse: boxes stacked on a pallet.
  'u.warehouse': () => (
    <g>
      <Halo />
      <Ground cy={104} rx={46} ry={5} />
      <rect x="14" y="88" width="80" height="8" rx="2" fill={PAL.wood} />
      <rect x="18" y="96" width="9" height="7" fill={PAL.cardDark} />
      <rect x="50" y="96" width="9" height="7" fill={PAL.cardDark} />
      <rect x="81" y="96" width="9" height="7" fill={PAL.cardDark} />
      <path d="M94 88L104 82V90L94 96Z" fill={PAL.cardDark} />
      <Box x={16} y={56} w={38} h={32} depth={10} />
      <Box x={54} y={56} w={38} h={32} depth={10} label />
      <Box x={34} y={22} w={40} h={34} depth={11} />
    </g>
  ),
  // Time and schedule: an alarm clock.
  'u.time': () => (
    <g>
      <Halo />
      <Ground cy={104} rx={34} ry={4.5} />
      <Clock cx={60} cy={62} r={34} hour={7} minute={0} bells rim={PAL.yellow} rimShade={PAL.yellowShade} />
      <Motion x={60} y={62} dir={-145} spread={30} n={2} len={8} gap={52} color={PAL.white} width={3.6} />
      <Motion x={60} y={62} dir={-35} spread={30} n={2} len={8} gap={52} color={PAL.white} width={3.6} />
    </g>
  ),
  // Greenhouse: a glass house with a plant in a pot in front.
  'u.greenhouse': () => (
    <g>
      <Halo />
      <Ground cy={104} rx={46} ry={5} />
      {/* Glass house */}
      <path d="M14 100V58L44 30L74 58V100Z" fill={PAL.ice} />
      <path d="M74 58L44 30L60 30L104 58V100H74Z" fill="#6fc9f0" />
      <path d="M74 58L104 58L60 30H44Z" fill="#b5ebff" />
      <g stroke={PAL.white} strokeWidth="3.2" strokeLinejoin="round" strokeLinecap="round" fill="none">
        <path d="M14 100V58L44 30L74 58V100Z" />
        <path d="M74 58H104V100H74M44 30H60L104 58" />
        <path d="M44 30V100M14 76H74M89 58V100M74 78H104" />
      </g>
      <Shine d="M22 66L40 48" color={PAL.white} width={4} opacity={0.7} />
      {/* Pot with a seedling */}
      <g transform="translate(80 84)">
        <path d="M0 -6C-4 -16 -12 -18 -16 -16C-15 -9 -7 -6 0 -6ZM0 -9C3 -20 12 -22 16 -20C16 -11 8 -8 0 -8Z" fill={PAL.leaf} />
        <path d="M0 -6V4" stroke={PAL.leafShade} strokeWidth="3" />
        <path d="M-14 2H14L11 20Q10.4 22.4 8 22.4H-8Q-10.4 22.4 -11 20Z" fill={PAL.clay} />
        <path d="M6 2H14L11 20Q10.4 22.4 8 22.4H5.6Q7.6 12 6 2Z" fill={PAL.clayShade} />
        <rect x="-16" y="-1" width="32" height="7" rx="2.4" fill={PAL.clayLight} />
      </g>
    </g>
  ),
  // Working together: two colleagues side by side, happy.
  'u.teamwork': () => (
    <g>
      <Halo />
      <Bust who="jada" x={80} y={112} scale={0.56} expr="pleased" flip />
      <Bust who="amina" x={40} y={112} scale={0.56} expr="pleased" />
      <Sparkle x={60} y={18} r={9} color={PAL.white} />
      <Sparkle x={16} y={30} r={5} color={PAL.white} />
      <Sparkle x={104} y={30} r={5} color={PAL.white} />
    </g>
  ),
};

export default unitPictures;
