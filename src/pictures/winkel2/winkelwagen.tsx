import type { JSX } from 'react';
import { Move, PAL, Shine } from '../kit';

export default {
  // "de winkelwagen": the shopping trolley — side view at a slant: a wire basket (grid of steel bars on
  // a light-grey fill) narrowing to the front, the handle at the back with a red grip, the frame going
  // down to the low base and four dark wheels. Ronde 5 (a vehicle): on the intro card it rolls in once
  // from the left and stops where it is drawn; the shadow stays.
  'w.winkelwagen': () => (
    <g strokeLinejoin="round">
      <ellipse cx="62" cy="105" rx="46" ry="4" fill="#000" opacity=".14" />
      <Move kind="slow" dx={-40} once>
        {/* The frame: from the handle down to the base */}
        <path d="M24 30L36 94H98" fill="none" stroke={PAL.steel} strokeWidth="4.4" strokeLinecap="round" />
        <path d="M36 94L40 84H96" fill="none" stroke={PAL.steel} strokeWidth="3" strokeLinecap="round" />
        {/* The basket: fill, then the wires */}
        <path d="M22 36H108L98 76H34Z" fill={PAL.mist} opacity=".55" />
        <path d="M22 36H108L98 76H34Z" fill="none" stroke={PAL.steel} strokeWidth="3.4" />
        <path d="M24 46H105.6M27 56H103.2M29.6 66H100.8" stroke={PAL.steel} strokeWidth="2" />
        <path d="M36 36L42 76M50 36L54 76M64 36L66 76M78 36L78 76M92 36L90 76" stroke={PAL.steel} strokeWidth="2" />
        <path d="M22 36H108" stroke={PAL.slate} strokeWidth="4" strokeLinecap="round" />
        {/* The handle with its red grip */}
        <path d="M24 30L22 36" stroke={PAL.steel} strokeWidth="4" strokeLinecap="round" />
        <rect x="12" y="24" width="20" height="8" rx="4" fill={PAL.red} transform="rotate(-8 22 28)" />
        <Shine d="M15 26H25" width={2} opacity={0.6} />
        {/* The wheels */}
        {[42, 92].map((x) => (
          <g key={x}>
            <rect x={x - 1.5} y="94" width="3" height="4" fill={PAL.steel} />
            <circle cx={x} cy="100" r="5.4" fill={PAL.slateDark} />
            <circle cx={x} cy="100" r="2" fill={PAL.steel} />
          </g>
        ))}
        <circle cx="50" cy="99" r="4" fill={PAL.slate} />
        <circle cx="100" cy="99" r="4" fill={PAL.slate} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
