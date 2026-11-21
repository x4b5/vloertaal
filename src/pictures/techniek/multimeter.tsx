import type { JSX } from 'react';
import { Ground, PAL, Shade, Shine } from '../kit';

/** The shaded side of the black probe and the dial's bar: one step under PAL.slateDark. */
const INK_DARK = '#1b232a';

export default {
  // "de multimeter": the multimeter — a yellow-cased meter standing up, a dark screen with three green
  // bars, a big round rotary dial, and a red and a black test lead running to two upright probes.
  'w.multimeter': () => (
    <g>
      <Ground cx={60} cy={105} rx={48} ry={4.5} />
      {/* The leads: from the two jacks, along the floor, up into the probes */}
      <path d="M38 92C38 112 100 112 101 90" stroke={PAL.slateDark} strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M52 92C52 108 84 108 85 90" stroke={PAL.red} strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* The case: its depth side, then the yellow front */}
      <rect x="23" y="13" width="50" height="86" rx="10" fill={PAL.yellowShade} />
      <Shade color={PAL.yellowShade} opacity={1} at={[72, 60, 6, 50]}>
        <rect x="17" y="18" width="50" height="86" rx="10" fill={PAL.yellow} />
      </Shade>
      <Shine d="M21 30V54" color={PAL.yellowShine} width={3.4} opacity={0.85} />
      {/* The dark front panel */}
      <rect x="25" y="24" width="36" height="74" rx="5" fill={PAL.slate} />
      {/* The screen in its light bezel, three green bars */}
      <rect x="28" y="28" width="30" height="21" rx="3.5" fill={PAL.mist} />
      <rect x="31" y="31" width="24" height="15" rx="2" fill={INK_DARK} />
      <rect x="34" y="34" width="4.5" height="9" rx="1" fill={PAL.lime} />
      <rect x="40.8" y="34" width="4.5" height="9" rx="1" fill={PAL.lime} />
      <rect x="47.6" y="34" width="4.5" height="9" rx="1" fill={PAL.lime} />
      {/* The big rotary dial with its bar */}
      <Shade color={PAL.steel} opacity={1} at={[56, 72, 7, 16]}>
        <circle cx="43" cy="68" r="13" fill={PAL.mist} />
      </Shade>
      <path d="M36 61L50 75" stroke={INK_DARK} strokeWidth="6" strokeLinecap="round" />
      <circle cx="37" cy="62" r="1.8" fill={PAL.white} />
      {/* The two jacks: black and red */}
      <circle cx="38" cy="89" r="4.6" fill={PAL.mist} />
      <circle cx="38" cy="89" r="2.6" fill={INK_DARK} />
      <circle cx="52" cy="89" r="4.6" fill={PAL.mist} />
      <circle cx="52" cy="89" r="2.6" fill={PAL.red} />
      {/* The red probe: handle with a guard ring, a steel tip */}
      <path d="M87 47L88.5 33" stroke={PAL.steel} strokeWidth="3" strokeLinecap="round" />
      <path d="M85 88L87 50" stroke={PAL.red} strokeWidth="8" strokeLinecap="round" />
      <path d="M86.4 62L89 62.2" stroke={PAL.redShade} strokeWidth="9" strokeLinecap="round" />
      {/* The black probe */}
      <path d="M103 50L104.5 36" stroke={PAL.steel} strokeWidth="3" strokeLinecap="round" />
      <path d="M101 88L103 53" stroke={PAL.slateDark} strokeWidth="8" strokeLinecap="round" />
      <path d="M102.4 65L105 65.2" stroke={INK_DARK} strokeWidth="9" strokeLinecap="round" />
    </g>
  ),
} as Record<string, () => JSX.Element>;
