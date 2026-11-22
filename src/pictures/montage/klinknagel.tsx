import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

/** The loose blind rivet lies along a line falling to the bottom right; its local origin is the flange. */
const TURN = 'translate(54 44) rotate(34) scale(1.2)';

export default {
  // "de klinknagel": the blind (pop) rivet — a big loose blind rivet with its round flange, hollow aluminium sleeve and
  // long thin steel mandrel sticking out to the top left; below it two blue plates overlap, joined by a set rivet.
  'w.klinknagel': () => (
    <g strokeLinejoin="round">
      <Ground cx={60} cy={104} rx={48} ry={4} />
      {/* The lower plate (navy): thickness, top */}
      <polygon points="12,100 66,100 66,103 12,103" fill={PAL.navyShade} />
      <polygon points="12,100 66,100 78,84 24,84" fill={PAL.navy} />
      {/* The upper plate (blue), lying on it to the right */}
      <polygon points="42,96 96,96 96,99.5 42,99.5" fill={PAL.blueShade} />
      <polygon points="96,96 108,80 108,83.5 96,99.5" fill={PAL.blueShade} />
      <polygon points="42,96 96,96 108,80 54,80" fill={PAL.blue} />
      <Shine d="M58 82.4H100" width={2.2} opacity={0.5} />
      {/* The set rivet in the overlap: a domed head with the broken mandrel in its middle */}
      <ellipse cx="61" cy="90" rx="9" ry="4.6" fill={PAL.steel} />
      <ellipse cx="60.4" cy="88.6" rx="8" ry="3.8" fill={PAL.mist} />
      <circle cx="61" cy="88.8" r="1.9" fill={PAL.slate} />
      {/* The loose blind rivet */}
      <g transform={TURN}>
        {/* The long mandrel, sticking out of the flange */}
        <rect x="-40" y="-2.2" width="42" height="4.4" rx="2.2" fill={PAL.slate} />
        <rect x="-38" y="-2.2" width="36" height="1.8" rx=".9" fill={PAL.steel} />
        {/* The hollow sleeve, and the mandrel's ball end at its tip */}
        <Shade color={PAL.steel} opacity={1} at={[18, 8, 20, 5]}>
          <rect x="2" y="-6.5" width="28" height="13" rx="2.5" fill={PAL.mist} />
        </Shade>
        <circle cx="31.5" cy="0" r="4.2" fill={PAL.slate} />
        <Shine d="M8 -3.6H24" width={2.4} opacity={0.85} />
        {/* The round flange (seen from the side) */}
        <Shade color={PAL.steel} opacity={1} at={[6, 10, 5, 10]}>
          <rect x="-3" y="-15" width="7.5" height="30" rx="3.6" fill={PAL.paper} />
        </Shade>
      </g>
    </g>
  ),
} as Record<string, () => JSX.Element>;
