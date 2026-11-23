import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

export default {
  // "de kruiwagen": the wheelbarrow — a green tub seen a little from above (its dark inside showing),
  // one black wheel at the front left, two long dark handles going back up to the right, and a leg.
  'w.kruiwagen': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={62} cy={104} rx={46} ry={4} />
      {/* The frame: from the wheel back under the tub to the handles, and the leg */}
      <path d="M26 90L110 62" stroke={PAL.slate} strokeWidth="5" />
      <path d="M78 76L84 102M74 76L68 102" stroke={PAL.slate} strokeWidth="4.5" />
      <path d="M100 65L112 61" stroke={PAL.slateDark} strokeWidth="8" />
      {/* The tub: inside, then the outside */}
      <path d="M14 46L28 32H96L104 46Z" fill={PAL.greenShade} />
      <Shade color={PAL.greenShade} opacity={1} at={[100, 66, 14, 24]}>
        <path d="M12 46H106L92 78Q90 84 82 84H40Q32 84 30 78Z" fill={PAL.green} />
      </Shade>
      <path d="M12 46H106" stroke={PAL.leaf} strokeWidth="4" />
      <Shine d="M24 54L32 72" width={3.4} opacity={0.5} />
      {/* The wheel */}
      <circle cx="26" cy="90" r="13" fill={PAL.slateDark} />
      <circle cx="26" cy="90" r="5" fill={PAL.steel} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
