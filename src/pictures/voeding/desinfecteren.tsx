import type { JSX } from 'react';
import { Ground, Hand, Move, PAL, SKIN, Shade, Shine, Sparkle } from '../kit';

export default {
  // "desinfecteren": to disinfect (to kill germs) — a white pump bottle of disinfectant with a blue label
  // and a red cross; a drop falls from its nozzle into an open hand held under it; sparkles: clean.
  // On the intro card the drop falls into the hand: three rounds (you do it every time you go in).
  'w.desinfecteren': () => (
    <g strokeLinejoin="round">
      <Ground cx={38} cy={104} rx={26} ry={4} />
      {/* The pump and nozzle */}
      <rect x="32" y="22" width="10" height="20" rx="2" fill={PAL.steel} />
      <path d="M26 20H52Q60 20 64 26" fill="none" stroke={PAL.slate} strokeWidth="7" strokeLinecap="round" />
      {/* The bottle */}
      <Shade color={PAL.paperShade} opacity={1} at={[60, 74, 10, 40]}>
        <rect x="18" y="40" width="38" height="64" rx="10" fill={PAL.white} />
      </Shade>
      <rect x="22" y="56" width="30" height="30" rx="4" fill={PAL.blue} />
      <rect x="44" y="56" width="8" height="30" rx="3" fill={PAL.blueShade} />
      <path d="M37 62V80M28 71H46" stroke={PAL.white} strokeWidth="5" strokeLinecap="round" />
      <Shine d="M23 48V52" width={3} opacity={0.9} color={PAL.mist} />
      {/* The open hand under the nozzle */}
      <Hand pose="open" x={110} y={86} rotate={-96} scale={0.76} skin={SKIN.amina} sleeve={[PAL.paper, PAL.paperShade]} />
      {/* The drop */}
      <Move kind="drop" dy={-24}>
        <path d="M66 52Q66 58 70 64A6 6 0 1 1 62 64Q66 58 66 52Z" fill={PAL.ice} />
        <path d="M66 58Q70 62 70 66" fill="none" stroke={PAL.sky} strokeWidth="2" strokeLinecap="round" />
      </Move>
      <Sparkle x={94} y={46} r={7} color={PAL.sky} />
      <Sparkle x={104} y={60} r={4.5} color={PAL.ice} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
