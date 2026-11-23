import type { JSX } from 'react';
import { Ground, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "overgeven": to throw up — a toddler with a sick face leans over a blue bucket; a pale green stream
  // goes from its mouth into the bucket. Kept mild: no mess, only the stream and the bucket.
  'w.overgeven': () => {
    const [s, sh] = SKIN.henk;
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        <Ground cx={70} cy={105} rx={36} ry={4} />
        {/* The toddler's body, leaning over */}
        <g transform="rotate(34 44 84)">
          <Shade color={PAL.redShade} opacity={1} at={[64, 84, 6, 22]}>
            <rect x="30" y="60" width="30" height="46" rx="13" fill={PAL.red} />
          </Shade>
        </g>
        {/* The head, bent down, sick */}
        <g transform="translate(62 44) rotate(24)">
          <circle cx="0" cy="-3" r="19.6" fill={PAL.yellowShade} />
          <circle cx="-18" cy="2" r="4.4" fill={s} />
          <Shade color={sh} opacity={1} at={[20, 6, 8, 22]}>
            <ellipse cx="0" cy="2" rx="17.4" ry="16.8" fill={s} />
          </Shade>
          <path d="M-18.4 -2Q-18 -20 0 -20.6Q18 -20 18.4 -2Q11 -10 2 -10.6Q-6 -7 -18.4 -2Z" fill={PAL.yellowShade} />
          <path d="M-10 1Q-6.6 3.4 -3.6 1M3.6 1Q6.6 3.4 10 1" fill="none" stroke={PAL.ink} strokeWidth="2" />
          <ellipse cx="0" cy="11" rx="4.4" ry="3.6" fill={PAL.mouth} />
          <circle cx="-9" cy="8" r="2.8" fill={PAL.lime} opacity=".7" />
          <circle cx="10" cy="8" r="2.8" fill={PAL.lime} opacity=".7" />
        </g>
        {/* The stream into the bucket */}
        <path d="M60 60Q76 62 80 80" fill="none" stroke={PAL.lime} strokeWidth="7" />
        <path d="M66 64Q74 68 77 76" fill="none" stroke={PAL.leaf} strokeWidth="2" opacity=".7" />
        {/* The bucket */}
        <Shade color={PAL.skyShade} opacity={1} at={[100, 92, 6, 20]}>
          <path d="M60 78H100L96 104H64Z" fill={PAL.sky} />
        </Shade>
        <ellipse cx="80" cy="78" rx="20" ry="5" fill={PAL.skyShade} />
        <ellipse cx="80" cy="79" rx="16" ry="3" fill={PAL.lime} opacity=".7" />
        <Shine d="M66 84L68 98" width={2.6} opacity={0.6} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
