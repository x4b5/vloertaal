import type { JSX } from 'react';
import { Ground, PAL, Shade } from '../kit';

export default {
  // "de stam": the trunk — the thick round trunk of a felled tree, cut flat at the top so its light
  // wood and year rings show, brown bark with grooves, roots spreading at the foot.
  'w.stam': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={102} rx={46} ry={5} />
      {/* The trunk with its root flare */}
      <Shade color={PAL.brown} opacity={0.7} at={[96, 70, 16, 40]}>
        <path d="M32 30V86Q30 96 18 102H102Q90 96 88 86V30Z" fill={PAL.wood} />
      </Shade>
      {/* The bark grooves */}
      <path d="M42 44V64M52 52V90M64 40V58M72 62V92M40 74V94M80 42V72" stroke={PAL.cardDark} strokeWidth="2.6" />
      {/* The cut top: light wood with the year rings */}
      <ellipse cx="60" cy="30" rx="28" ry="11" fill={PAL.cardDark} />
      <ellipse cx="60" cy="29" rx="25" ry="9" fill={PAL.card} />
      <ellipse cx="60" cy="29" rx="17" ry="6" fill="none" stroke={PAL.cardShade} strokeWidth="2" />
      <ellipse cx="60" cy="29" rx="9" ry="3.2" fill="none" stroke={PAL.cardShade} strokeWidth="2" />
      <ellipse cx="60" cy="29" rx="2.4" ry="1.2" fill={PAL.cardDark} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
