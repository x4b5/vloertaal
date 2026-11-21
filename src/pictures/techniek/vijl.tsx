import { useId, type JSX } from 'react';
import { PAL, Shine } from '../kit';

/** The file's blade, lying along x (handle end at the left), its face y −7..7. */
const BLADE = 'M-20 -7H40Q52 -6 54 -3V3Q52 6 40 7H-20Z';

export default {
  // "de vijl": the file — a long flat steel file rising to the top right, its face covered in a coarse
  // cross-hatch of diagonal teeth, a wooden handle with a steel ring at the bottom left.
  'w.vijl': () => {
    const id = `vl-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
    const hatch: string[] = [];
    for (let x = -34; x <= 60; x += 6) {
      hatch.push(`M${x} -9L${x + 14} 9`, `M${x + 14} -9L${x} 9`);
    }
    return (
      <g transform="translate(58 62) rotate(-36) scale(1.12)" strokeLinejoin="round">
        <clipPath id={id}>
          <path d={BLADE} />
        </clipPath>
        {/* The blade on its dark depth edge, the cross-hatch of teeth on its face */}
        <path d={BLADE} fill={PAL.slate} transform="translate(0 4)" />
        <path d={BLADE} fill={PAL.mist} />
        <path d={hatch.join('')} stroke={PAL.steel} strokeWidth="1.6" clipPath={`url(#${id})`} />
        {/* The tang into the handle, the steel ring and the wooden handle */}
        <rect x="-30" y="-3" width="12" height="6" fill={PAL.slate} />
        <rect x="-56" y="-9" width="26" height="22" rx="9" fill={PAL.cardDark} />
        <rect x="-56" y="-11" width="26" height="20" rx="9" fill={PAL.wood} />
        <rect x="-33" y="-10" width="6" height="21" rx="2" fill={PAL.steel} />
        <rect x="-33" y="-11" width="6" height="19" rx="2" fill={PAL.mist} />
        <Shine d="M-51 -6H-38" color={PAL.card} width={3.2} opacity={0.9} />
      </g>
    );
  },
} as Record<string, () => JSX.Element>;
