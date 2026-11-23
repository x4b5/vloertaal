import { useId, type JSX } from 'react';
import { Ground, Move, PAL, Shine } from '../kit';

export default {
  // "de brievenbus": the letterbox — a green letterbox on a post by the house, with a dark slot
  // under its flap and a white letter going into the slot. On the intro card the letter slides
  // down into the slot, once (a letter arrives).
  'w.brievenbus': () => {
    const id = `brievenbus-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
    return (
      <g strokeLinejoin="round">
        <Ground cx={62} cy={105} rx={26} ry={4} />
        {/* The post */}
        <rect x="52" y="80" width="12" height="25" rx="2" fill={PAL.slate} />
        <rect x="59" y="80" width="5" height="25" rx="1.5" fill={PAL.slateDark} />
        {/* The box: the right side in shade, the round top, the front */}
        <path d="M84 50L98 42V80L84 88Z" fill={PAL.greenShade} />
        <path d="M22 50Q22 32 53 32Q84 32 84 50L98 42Q98 24 67 24Q36 24 36 42Z" fill={PAL.leaf} />
        <path d="M22 88V50Q22 36 53 36Q84 36 84 50V88Z" fill={PAL.green} />
        <Shine d="M28 52Q30 42 44 39" width={3.6} opacity={0.6} />
        {/* The slot with its flap */}
        <rect x="31" y="56" width="44" height="9" rx="3.5" fill={PAL.slateDark} />
        <rect x="29" y="50" width="48" height="7" rx="3" fill={PAL.greenShade} />
        {/* A little plate for the name: lines only */}
        <rect x="40" y="72" width="26" height="9" rx="2" fill={PAL.paper} />
        <path d="M44 76.5H62" stroke={PAL.line} strokeWidth="1.8" strokeLinecap="round" />
        {/* The letter, going into the slot (only the part above the slot shows) */}
        <clipPath id={id}>
          <rect x="0" y="0" width="120" height="60" />
        </clipPath>
        <g clipPath={`url(#${id})`}>
          <Move kind="from" dy={-30} once>
            <g transform="rotate(-6 54 40)">
              <rect x="36" y="14" width="36" height="50" rx="3" fill={PAL.paperShade} />
              <rect x="34" y="12" width="36" height="50" rx="3" fill={PAL.white} />
              <path d="M38 16L52 28L66 16" fill="none" stroke={PAL.mist} strokeWidth="2.4" strokeLinecap="round" />
            </g>
          </Move>
        </g>
        <path d="M31 60.5H75" stroke="#1b232a" strokeWidth="3" strokeLinecap="round" />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
