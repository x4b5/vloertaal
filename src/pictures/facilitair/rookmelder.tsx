import type { JSX } from 'react';
import { Move, PAL, Shine } from '../kit';

export default {
  // "de rookmelder": the smoke alarm — a round white smoke alarm under a grey ceiling, its vent slots
  // round the side and a small red light, with grey smoke curling up to it from below.
  // Three rounds: the smoke keeps rising to the alarm.
  'w.rookmelder': () => (
    <g strokeLinejoin="round">
      {/* The ceiling */}
      <rect x="4" y="6" width="112" height="12" rx="2" fill={PAL.mist} />
      {/* The alarm: base, body with vents, and the round face underneath */}
      <rect x="28" y="18" width="64" height="8" rx="2" fill={PAL.paperShade} />
      <path d="M22 26H98V38Q98 50 86 50H34Q22 50 22 38Z" fill={PAL.paper} />
      <path d="M90 26H98V38Q98 50 86 50H82Q90 46 90 38Z" fill={PAL.paperShade} />
      {[34, 44, 54, 64, 74].map((x) => (
        <rect key={x} x={x} y="31" width="5" height="10" rx="2.5" fill={PAL.mist} />
      ))}
      <ellipse cx="60" cy="50" rx="26" ry="5" fill={PAL.paperShade} />
      <circle cx="86" cy="34" r="3" fill={PAL.red} />
      <Shine d="M28 30V40" width={2.6} opacity={0.9} />
      {/* The smoke rising */}
      <Move kind="from" dy={22}>
        <g fill={PAL.line}>
          <circle cx="46" cy="94" r="11" />
          <circle cx="62" cy="96" r="10" />
          <circle cx="74" cy="88" r="9" />
          <circle cx="56" cy="82" r="11" />
          <circle cx="66" cy="70" r="8" />
          <circle cx="58" cy="60" r="5.5" />
        </g>
        <path d="M44 90Q50 82 56 84M60 74Q64 68 68 70" fill="none" stroke={PAL.mist} strokeWidth="3" strokeLinecap="round" />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
