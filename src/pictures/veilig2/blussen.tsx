import type { JSX } from 'react';
import { Ground, Hand, Move, PAL, SKIN, Shade } from '../kit';

export default {
  // "blussen": to put out a fire — a hand holds the red extinguisher up by its handle, the other hand aims
  // the black hose; a white cloud of powder shoots from the nozzle to the base of a small fire on the floor
  // on the right.
  // The powder shoots out from the nozzle to the fire (three rounds: the extinguisher at work).
  'w.blussen': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={86} cy={104} rx={22} ry={3.5} />
      {/* The small fire on the floor */}
      <path d="M86 50C94 60 106 66 106 82C106 96 97 104 86 104C75 104 66 96 66 84C66 74 72 70 74 62C78 70 80 72 82 74C82 64 82 58 86 50Z" fill={PAL.orange} />
      <path d="M86 76C92 82 95 86 95 92C95 98 91 103 86 103C81 103 77 98 77 92C77 87 81 82 86 76Z" fill={PAL.yellow} />
      {/* The extinguisher, tilted, with its handle */}
      <g transform="rotate(-12 30 70)">
        <Shade color={PAL.redShade} opacity={1} at={[44, 76, 7, 30]}>
          <rect x="18" y="44" width="26" height="60" rx="11" fill={PAL.red} />
        </Shade>
        <rect x="22" y="58" width="16" height="16" rx="2" fill={PAL.paper} />
        <rect x="25" y="34" width="12" height="11" rx="2" fill={PAL.slate} />
        <path d="M30 34L46 28" stroke={PAL.slate} strokeWidth="5" />
      </g>
      {/* The hose to the nozzle */}
      <path d="M30 40Q40 66 50 76" fill="none" stroke={PAL.ink} strokeWidth="5" />
      <path d="M50 76L60 84" stroke={PAL.slateDark} strokeWidth="7" />
      <Hand pose="fist" x={50} y={98} rotate={-30} scale={0.5} skin={SKIN.jada} sleeve={['#ffc929', PAL.yellowShade]} />
      {/* The powder, from the nozzle to the base of the fire */}
      <Move kind="grow" grow={0.2}>
        <path d="M62 84L78 88Q88 92 98 92Q100 98 94 102Q84 104 74 98L62 88Z" fill={PAL.white} />
        <path d="M62 86L94 96" stroke={PAL.paperShade} strokeWidth="3" />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
