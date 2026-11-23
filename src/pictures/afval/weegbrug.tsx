import type { JSX } from 'react';
import { Move, PAL, Shade, Shine } from '../kit';

export default {
  // "de weegbrug": the weighbridge (a scale for cars and lorries) — a long flat steel plate set in the ground,
  // with a small blue car standing on it; next to it on a post a grey reading box with a dial whose needle
  // shows the weight (no numbers).
  // On the intro card the car drives onto the plate, then the needle swings up to the weight: once.
  'w.weegbrug': () => (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* The ground and the plate in it */}
      <rect x="4" y="94" width="112" height="10" rx="2" fill={PAL.mist} />
      <rect x="12" y="92" width="76" height="6" rx="1.6" fill={PAL.steel} />
      <path d="M12 94H88" stroke={PAL.paperShade} strokeWidth="1.6" />
      <path d="M30 92V98M50 92V98M70 92V98" stroke={PAL.slate} strokeWidth="1.4" />
      {/* The reading box on its post */}
      <rect x="98" y="54" width="5" height="40" fill={PAL.slate} />
      <rect x="88" y="20" width="26" height="36" rx="4" fill={PAL.slateDark} transform="translate(1.6 2)" />
      <rect x="88" y="20" width="26" height="36" rx="4" fill={PAL.slate} />
      <circle cx="101" cy="40" r="10" fill={PAL.white} />
      <path d="M93 40A8 8 0 0 1 109 40" fill="none" stroke={PAL.mist} strokeWidth="2.4" />
      <Move kind="turn" turn={-80} at={[101, 40]}>
        <path d="M101 40L107 32" stroke={PAL.red} strokeWidth="2.6" />
      </Move>
      <circle cx="101" cy="40" r="2" fill={PAL.ink} />
      {/* The car on the plate */}
      <Move kind="from" dx={-30} once>
        <ellipse cx="50" cy="92" rx="36" ry="2.6" fill="#000" opacity=".18" />
        <Shade color={PAL.blueShade} opacity={1} at={[88, 80, 8, 20]}>
          <path d="M14 86V76Q14 70 22 68L32 54Q34 50 40 50H62Q68 50 72 56L78 66Q86 68 86 76V86Z" fill={PAL.blue} />
        </Shade>
        <path d="M36 56H48V66H30Z" fill={PAL.ice} />
        <path d="M52 56H64L70 66H52Z" fill={PAL.ice} />
        <rect x="12" y="74" width="6" height="5" rx="2" fill={PAL.yellow} />
        <Shine d="M20 72Q24 68 30 68" width={2.6} opacity={0.6} />
        <circle cx="28" cy="88" r="7" fill={PAL.ink} />
        <circle cx="28" cy="88" r="2.8" fill={PAL.steel} />
        <circle cx="72" cy="88" r="7" fill={PAL.ink} />
        <circle cx="72" cy="88" r="2.8" fill={PAL.steel} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
