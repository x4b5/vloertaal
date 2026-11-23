import type { JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine } from '../kit';

/** The teeth along both edges of the cutting bar, from x 56 to 108. */
const TEETH = Array.from({ length: 8 }, (_, i) => {
  const x = 56 + i * 7;
  return `M${x} 56L${x + 3.5} 49L${x + 7} 56ZM${x} 64L${x + 3.5} 71L${x + 7} 64Z`;
}).join('');

export default {
  // "de heggenschaar": the hedge trimmer — a yellow motor body with a dark loop handle at the back and a
  // dark bow handle at the front, and a long steel cutting bar with sharp teeth along both edges.
  // On the intro card the trimmer sweeps along, as along the top of a hedge (three rounds: the tool at work).
  'w.heggenschaar': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      <Ground cx={60} cy={102} rx={44} ry={4} />
      <Move kind="from" dx={-24}>
        <g transform="rotate(-8 60 60)">
          {/* The cutting bar and its teeth */}
          <path d={TEETH} fill={PAL.steel} stroke={PAL.steel} strokeWidth="1.5" />
          <rect x="50" y="55" width="62" height="10" rx="4" fill={PAL.mist} />
          <path d="M54 60H108" stroke={PAL.steel} strokeWidth="2" />
          {/* The rear loop handle */}
          <path d="M18 56V36Q18 28 26 28H40" fill="none" stroke={PAL.slateDark} strokeWidth="7" />
          {/* The yellow motor body */}
          <Shade color={PAL.yellowShade} opacity={1} at={[58, 70, 10, 22]}>
            <path d="M12 60Q12 46 26 44H46Q54 46 54 54V68Q54 76 46 76H22Q12 76 12 66Z" fill={PAL.yellow} />
          </Shade>
          <rect x="22" y="60" width="18" height="6" rx="3" fill={PAL.slate} />
          <Shine d="M20 50H40" color={PAL.yellowShine} width={3} opacity={0.8} />
          {/* The guard and the front bow handle */}
          <rect x="50" y="46" width="6" height="28" rx="2.5" fill={PAL.slate} />
          <path d="M44 46Q48 26 64 28Q70 30 64 46" fill="none" stroke={PAL.slateDark} strokeWidth="6" />
        </g>
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
