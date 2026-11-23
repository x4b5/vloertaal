import { useId, type JSX } from 'react';
import { Ground, Move, PAL, Shade, Shine, r1 } from '../kit';

/** The screwdriver is drawn lying along x (back end left, bit right) and tipped so the bit points down to the right. */
const TURN = 'translate(43 59) rotate(40) scale(1.1)';

/** The coiled hose from the tool's back end up out of the picture: loops along a line from A to B. */
const A: [number, number] = [20, 34];
const B: [number, number] = [30, -2];
const LOOPS = 6;
const loops = (front: boolean) =>
  Array.from({ length: LOOPS }, (_, i) => {
    const t = (i + 0.5) / LOOPS;
    const x = A[0] + (B[0] - A[0]) * t;
    const y = A[1] + (B[1] - A[1]) * t;
    return `M${r1(x - 6)} ${r1(y)}A6 2.6 0 0 ${front ? 0 : 1} ${r1(x + 6)} ${r1(y)}`;
  }).join('');

export default {
  // "de schroefmachine": the (pneumatic) assembly screwdriver — a big orange pistol-grip power screwdriver tipped on a
  // slant, its steel bit pressing down into a screw in a grey part at the bottom right; a thin green coiled hose runs
  // from its back end up out of the picture.
  'w.schroefmachine': () => {
    const id = `sm-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
    return (
    <g strokeLinejoin="round">
      <Ground cx={64} cy={105} rx={44} ry={4} />
      {/* The part: its shaded right side, the light top, the front */}
      <polygon points="100,103 100,96 108,86 108,93" fill={PAL.steel} />
      <polygon points="44,96 100,96 108,86 52,86" fill={PAL.mist} />
      <rect x="44" y="96" width="56" height="7" fill={PAL.line} />
      {/* The screw head the bit sits in (Move: the screw goes in; its shank, clipped at the part's
          top, shows only while it sticks out) */}
      <clipPath id={id}>
        <rect x="60" y="40" width="40" height="51.4" />
      </clipPath>
      <g clipPath={`url(#${id})`}>
      <Move kind="from" dy={-12}>
        <rect x="77" y="90" width="6" height="16" fill={PAL.steel} />
        <path d="M77 94L83 92.4M77 98L83 96.4M77 102L83 100.4" stroke={PAL.slate} strokeWidth="1.4" strokeLinecap="round" />
      </Move>
      </g>
      <Move kind="from" dy={-12}>
        <ellipse cx="80" cy="91.4" rx="7.4" ry="3.2" fill={PAL.slate} />
        <ellipse cx="80" cy="90.6" rx="5.8" ry="2.4" fill={PAL.steel} />
      </Move>
      {/* The back halves of the hose loops, and the straight bit into the tool */}
      <path d={loops(false)} fill="none" stroke={PAL.greenShade} strokeWidth="2.6" strokeLinecap="round" />
      {/* The tool comes in along its axis to the screw */}
      <Move kind="from" dx={-15} dy={-13}>
      <g transform={TURN}>
        {/* The pistol grip: shaded far side, then the grip, and its dark foot */}
        <path d="M-12 4L0 31" stroke={PAL.orangeShade} strokeWidth="14" strokeLinecap="round" />
        <path d="M-13.4 4L-1.4 30" stroke={PAL.orange} strokeWidth="11" strokeLinecap="round" />
        <rect x="-6" y="29" width="14" height="7" rx="3" fill={PAL.slateDark} transform="rotate(24 1 32)" />
        {/* The trigger in front of the grip */}
        <rect x="0" y="8" width="5" height="11" rx="2.5" fill={PAL.slateDark} transform="rotate(-24 2.5 13)" />
        {/* The body: orange, its underside in shade, a dark back cap and vent lines */}
        <Shade color={PAL.orangeShade} opacity={1} at={[-6, 12, 40, 7]}>
          <rect x="-34" y="-10" width="52" height="20" rx="8" fill={PAL.orange} />
        </Shade>
        <rect x="-38" y="-7" width="8" height="14" rx="3" fill={PAL.slate} />
        <path d="M-25 -4V2M-20 -4V2" stroke={PAL.orangeShade} strokeWidth="1.8" strokeLinecap="round" />
        <Shine d="M-24 -6.4H8" width={3} opacity={0.6} />
        {/* The chuck and the long steel bit */}
        <path d="M17 -7.5L28 -5V5L17 7.5Z" fill={PAL.slate} />
        <rect x="27" y="-2.2" width="21" height="4.4" rx="1.6" fill={PAL.steel} />
        <rect x="28" y="-2.2" width="18" height="1.6" rx=".8" fill={PAL.paper} />
      </g>
      </Move>
      {/* The front halves of the hose loops, and where it plugs into the back cap */}
      <path d={loops(true)} fill="none" stroke={PAL.green} strokeWidth="2.6" strokeLinecap="round" />
    </g>
    );
  },
} as Record<string, () => JSX.Element>;
