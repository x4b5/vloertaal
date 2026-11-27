import { useId, type JSX } from 'react';
import { Move, PAL, Shine } from '../kit';

export default {
  // "het glazuur": the glaze (a shiny, glassy layer on a tile or a cup) — a tile riding on a belt under a
  // falling curtain of glaze from a steel hood: the half that has not been under it yet (left) is dull
  // terracotta, the half that has (right) is glossy ice-blue with white glints. On the intro card the
  // glaze keeps running down in the curtain (three rounds: it always runs).
  'w.glazuur': () => {
    const id = `gz-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
    return (
      <g strokeLinejoin="round" strokeLinecap="round">
        {/* The belt: its top, its front and its rollers and legs */}
        <path d="M18 104V92M102 104V92" stroke={PAL.slate} strokeWidth="5" />
        <path d="M6 80L12 74H114L108 80Z" fill={PAL.slate} />
        <rect x="6" y="80" width="102" height="10" rx="5" fill={PAL.slateDark} />
        <path d="M16 85H98" stroke={PAL.steel} strokeWidth="1.6" strokeDasharray="1 12" />
        {/* The tile: the dull half and the glazed half */}
        <path d="M14 78L26 58H64L56 78Z" fill={PAL.clay} />
        <rect x="14" y="78" width="42" height="5" fill={PAL.clayShade} />
        <path d="M56 78L64 58H106L98 78Z" fill={PAL.ice} />
        <path d="M98 78L106 58V63L98 83Z" fill={PAL.skyShade} />
        <rect x="56" y="78" width="42" height="5" fill={PAL.sky} />
        <path d="M70 74L78 62M84 74L92 62" stroke={PAL.white} strokeWidth="2.8" opacity=".9" />
        {/* The curtain of glaze, falling from the hood onto the tile */}
        <clipPath id={id}>
          <rect x="52" y="28" width="16" height="40" />
        </clipPath>
        <rect x="52" y="28" width="16" height="40" fill={PAL.ice} opacity=".85" />
        <g clipPath={`url(#${id})`}>
          <Move kind="from" dy={-22}>
            <path d="M56 6V68M63 0V68" stroke={PAL.white} strokeWidth="2" strokeDasharray="10 8" />
          </Move>
        </g>
        <ellipse cx="60" cy="68" rx="10" ry="2.6" fill={PAL.ice} />
        {/* The hood */}
        <path d="M40 20L46 14H86L80 20Z" fill={PAL.mist} />
        <path d="M80 20L86 14V24L80 30Z" fill={PAL.slate} />
        <rect x="40" y="20" width="40" height="10" rx="2" fill={PAL.steel} />
        <Shine d="M44 23H60" width={2.4} opacity={0.6} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
