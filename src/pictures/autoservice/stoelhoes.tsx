import type { JSX } from 'react';
import { Ground, Move, PAL, Shine } from '../kit';

/** The seat seen from the side, facing left: cushion, backrest and headrest. */
const CUSHION = 'M26 70Q24 64 32 63H78Q86 63 86 71V78Q86 84 80 84H32Q26 84 26 78Z';
const BACK = 'M72 72L80 26Q81 20 87 21L92 22Q97 23 96 29L89 78Q88 84 82 84H76Q70 84 72 72Z';
const HEAD = 'M80 8Q81 4 86 5L95 6.5Q99 7.5 98 12L97 17Q96 21 91 20.5L83 19.5Q78 19 79 14Z';
/** The plastic cover pulled over the backrest and headrest and down over the cushion. */
const COVER =
  'M23 70Q21 61 31 60H70L76 25Q77 1 90 3L96 4Q102 5 101 12L93 79Q92 87 84 87H31Q23 87 23 79Z';

export default {
  // "de stoelhoes": the seat cover — a dark car seat seen from the side, with a white see-through plastic
  // cover pulled over it (grey edge and folds), and the edge of the steering wheel on the left.
  // On the intro card: the plastic cover slides down over the seat, once and slowly (it is put on: it happens once).
  'w.stoelhoes': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={40} ry={4} />
      {/* The steering wheel's edge on the left */}
      <path d="M12 26Q24 40 20 62" stroke={PAL.slateDark} strokeWidth="7" strokeLinecap="round" fill="none" />
      {/* The seat rail and its foot */}
      <rect x="34" y="84" width="46" height="8" rx="2" fill={PAL.slate} />
      <rect x="30" y="96" width="56" height="6" rx="2" fill={PAL.steel} />
      <rect x="42" y="90" width="6" height="8" fill={PAL.slate} />
      <rect x="68" y="90" width="6" height="8" fill={PAL.slate} />
      {/* The seat */}
      <path d="M86 18V24" stroke={PAL.steel} strokeWidth="3" strokeLinecap="round" />
      <path d={BACK} fill={PAL.slate} />
      <path d={HEAD} fill={PAL.slate} />
      <path d={CUSHION} fill={PAL.slateDark} />
      {/* The plastic cover: its grey edge, the white see-through sheet, a few folds (on the intro
          card it slides down over the seat) */}
      <Move kind="from" dy={-26} once>
        <path d={COVER} fill="none" stroke={PAL.mist} strokeWidth="3.4" />
        <path d={COVER} fill={PAL.white} opacity=".45" />
        <path d="M40 66L46 82M60 66L58 82M84 34L80 64M90 14L88 22" stroke={PAL.mist} strokeWidth="1.8" strokeLinecap="round" />
        <Shine d="M30 66H52" width={3} opacity={0.9} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
