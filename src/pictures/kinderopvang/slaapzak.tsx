import type { JSX } from 'react';
import { PAL, Shade, Shine, twinkle } from '../kit';

/** The bag: a sleeveless vest at the top, wide and rounded at the foot. */
const BAG = 'M40 14Q40 10 44 10H51Q53 22 60 22Q67 22 69 10H76Q80 10 80 14V20Q80 32 90 36Q96 38 96 48V92Q96 104 84 104H36Q24 104 24 92V48Q24 38 30 36Q40 32 40 20Z';

export default {
  // "de slaapzak": the baby sleeping bag — a blue sleeping bag lying flat: no sleeves, two arm holes,
  // a round neck and a zip down the front, a moon and stars on it.
  'w.slaapzak': () => (
    <g strokeLinejoin="round">
      {/* Depth edge, then the bag with its right side in shade */}
      <path d={BAG} fill={PAL.skyShade} transform="translate(0 4)" />
      <Shade color={PAL.blue} opacity={1} at={[98, 70, 12, 50]}>
        <path d={BAG} fill={PAL.blueLight} />
      </Shade>
      {/* The arm holes and the neck */}
      <path d="M30 36Q40 32 40 20" fill="none" stroke={PAL.blue} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M90 36Q80 32 80 20" fill="none" stroke={PAL.blue} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M51 10Q53 22 60 22Q67 22 69 10" fill="none" stroke={PAL.ice} strokeWidth="3" strokeLinecap="round" />
      {/* The zip and its pull */}
      <path d="M66 26V96" stroke={PAL.skyShade} strokeWidth="2.4" strokeLinecap="round" />
      <rect x="63" y="24" width="6" height="11" rx="2.4" fill={PAL.slate} />
      {/* The moon and the stars */}
      <path d="M42 50A11 11 0 1 0 51 68A8.6 8.6 0 1 1 42 50Z" fill={PAL.yellow} />
      <path d={twinkle(80, 58, 6)} fill={PAL.yellowShine} />
      <path d={twinkle(40, 86, 5)} fill={PAL.yellowShine} />
      <path d={twinkle(82, 88, 4.5)} fill={PAL.yellowShine} />
      <Shine d="M30 50Q30 42 36 40" width={3.5} opacity={0.6} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
