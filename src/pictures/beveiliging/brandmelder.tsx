import type { JSX } from 'react';
import { Hand, Move, PAL, SKIN, Shade, Shine } from '../kit';

export default {
  // "de brandmelder": the fire alarm button (a red box you press when there is a fire) — a square red box
  // on the wall with a white glass window and a round black button in the middle; a finger presses the
  // button.
  // Once: the finger comes to the button and presses it.
  'w.brandmelder': () => (
    <g strokeLinejoin="round">
      {/* The red box, its depth edge */}
      <rect x="18" y="14" width="76" height="76" rx="8" fill={PAL.redShade} transform="translate(3 4)" />
      <Shade color={PAL.redShade} opacity={1} at={[96, 52, 8, 44]}>
        <rect x="18" y="14" width="76" height="76" rx="8" fill={PAL.red} />
      </Shade>
      <Shine d="M24 24V48" width={3.2} opacity={0.5} />
      {/* The glass window and the button */}
      <rect x="32" y="28" width="48" height="48" rx="4" fill={PAL.white} />
      <rect x="32" y="70" width="48" height="6" rx="3" fill={PAL.paperShade} />
      <circle cx="56" cy="52" r="12" fill={PAL.slateDark} />
      <circle cx="54" cy="50" r="4" fill={PAL.slate} />
      {/* The finger */}
      <Move kind="from" dx={24} dy={24} once>
        <Hand pose="point" x={82} y={89} rotate={-38} scale={0.86} skin={SKIN.bram} sleeve={[PAL.blue, PAL.blueShade]} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
