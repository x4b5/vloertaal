import type { JSX } from 'react';
import { Ground, Hand, Move, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "blussen": to put out a fire — the red extinguisher stands on the left; a hand holds its black hose up
  // and aims the nozzle down, and a white cloud of powder shoots from it to the base of a small fire on the
  // floor on the right.
  // The powder shoots out from the nozzle to the fire (three rounds: the extinguisher at work).
  'w.blussen': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={105} rx={50} ry={4} />
      {/* The small fire on the floor */}
      <path d="M88 48C96 58 108 64 108 82C108 96 99 104 88 104C77 104 68 96 68 84C68 74 74 70 76 62C80 70 82 72 84 74C84 64 84 56 88 48Z" fill={PAL.orange} />
      <path d="M88 76C94 82 97 86 97 92C97 98 93 103 88 103C83 103 79 98 79 92C79 87 83 82 88 76Z" fill={PAL.yellow} />
      {/* The extinguisher */}
      <Shade color={PAL.redShade} opacity={1} at={[44, 76, 7, 34]}>
        <rect x="14" y="44" width="28" height="62" rx="12" fill={PAL.red} />
      </Shade>
      <rect x="19" y="60" width="18" height="18" rx="2" fill={PAL.paper} />
      <Shine d="M18 54V96" width={3.2} opacity={0.5} />
      <rect x="22" y="34" width="12" height="11" rx="2" fill={PAL.slate} />
      <path d="M24 34L12 28M26 31L14 22" stroke={PAL.slate} strokeWidth="4.5" />
      {/* The hose up to the nozzle, held in the hand and aimed down at the fire */}
      <path d="M34 40Q56 42 50 66Q46 76 48 80" fill="none" stroke={PAL.ink} strokeWidth="5" />
      <Hand pose="hold" x={52} y={94} rotate={4} scale={0.6} skin={SKIN.jada} sleeve={['#ffc929', PAL.yellowShade]} />
      <path d="M46 79L64 85" stroke={PAL.slateDark} strokeWidth="7" />
      {/* The powder, from the nozzle to the base of the fire */}
      <Move kind="grow" grow={0.2}>
        <path d="M66 82L84 90Q98 92 106 97Q104 104 92 104Q78 104 70 96L64 88Z" fill={PAL.white} />
        <path d="M68 88L82 96Q92 100 102 100" fill="none" stroke={PAL.paperShade} strokeWidth="3" />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
