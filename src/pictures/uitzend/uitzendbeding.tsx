import type { JSX } from 'react';
import { Cross, PAL, Shade } from '../kit';

export default {
  // "het uitzendbeding": the agency clause (your work can stop when the hirer no longer needs you) — a
  // contract with one rule marked in yellow: in it the hirer's factory with a red cross: when the
  // hirer stops, your work stops.
  'w.uitzendbeding': () => (
    <g strokeLinejoin="round">
      {/* The contract */}
      <rect x="20" y="14" width="68" height="92" rx="5" fill={PAL.mist} />
      <Shade color={PAL.paperShade} opacity={1} at={[92, 60, 12, 92]}>
        <rect x="20" y="10" width="68" height="92" rx="5" fill={PAL.paper} />
      </Shade>
      <path d="M30 22H60" stroke={PAL.navy} strokeWidth="4.6" strokeLinecap="round" />
      <path d="M30 32H78M30 40H72" stroke={PAL.line} strokeWidth="3" strokeLinecap="round" />
      <path d="M30 92H72" stroke={PAL.line} strokeWidth="3" strokeLinecap="round" />
      {/* The marked clause */}
      <rect x="24" y="48" width="78" height="36" rx="5" fill={PAL.yellowShade} transform="translate(0 3)" />
      <rect x="24" y="48" width="78" height="36" rx="5" fill={PAL.yellowLight} />
      {/* The hirer's factory */}
      <path d="M32 78V62L41 56V62L50 56V62L59 56V78Z" fill={PAL.blue} stroke={PAL.blue} strokeWidth="1.6" />
      <rect x="54" y="50" width="4.4" height="9" rx="1" fill={PAL.slate} />
      <rect x="41" y="68" width="10" height="10" rx="1" fill={PAL.slateDark} />
      <path d="M64 66H72" stroke={PAL.yellowShade} strokeWidth="3" strokeLinecap="round" />
      <Cross x={86} y={66} r={11} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
