import type { JSX } from 'react';
import { PAL, SKIN, Shade } from '../kit';

const [SK, SKS] = SKIN.henk;

export default {
  // "de drukplek": the pressure sore — a client's foot lying on the mattress, seen from the side, toes up:
  // the heel that presses on the mattress has a round red spot with a light ring round it.
  'w.drukplek': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The mattress */}
      <rect x="6" y="88" width="108" height="16" rx="6" fill={PAL.mist} />
      <rect x="6" y="88" width="108" height="6" rx="3" fill={PAL.paper} />
      {/* Pyjama leg */}
      <rect x="4" y="60" width="60" height="28" rx="6" fill={PAL.purple} />
      <rect x="4" y="78" width="60" height="10" rx="4" fill={PAL.purpleShade} />
      <rect x="54" y="58" width="12" height="32" rx="4" fill={PAL.purpleShade} />
      {/* The bare foot, toes up, the heel on the mattress */}
      <Shade color={SKS} opacity={1} at={[100, 60, 10, 44]}>
        <path d="M62 60H76Q80 46 82 32L83 24Q84 16 92 16L100 18Q106 20 104 28L100 72Q98 92 80 92H62Z" fill={SK} />
      </Shade>
      {/* The toes along the top */}
      <circle cx="87" cy="17" r="5" fill={SK} />
      {[[95, 17, 4], [101, 20, 3.4], [104, 25, 3]].map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill={SKS} />
      ))}
      <path d="M80 50Q84 40 84 30" fill="none" stroke={SKS} strokeWidth="1.6" opacity=".7" />
      {/* The red pressure spot on the heel */}
      <circle cx="82" cy="82" r="9.5" fill={PAL.redLight} />
      <circle cx="82" cy="82" r="6" fill={PAL.red} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
