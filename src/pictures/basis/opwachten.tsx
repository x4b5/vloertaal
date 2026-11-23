import type { JSX } from 'react';
import { Ground, Hand, Move, PAL, SKIN, Shade, Shine } from '../kit';
import { Bust } from '../bust';

export default {
  // "opwachten": to wait for someone and meet them at the door — Bram stands in his open front door and
  // waves; an ambulance comes up the street to him. On the intro card the ambulance drives in once
  // from the right and stops in front of him.
  'w.opwachten': () => (
    <g strokeLinejoin="round">
      {/* The open door: frame, dark hall, the door swung open */}
      <rect x="12" y="16" width="52" height="92" rx="3" fill={PAL.paper} />
      <rect x="18" y="22" width="40" height="86" rx="2" fill={PAL.slate} />
      <path d="M12 16L4 22V108L12 108Z" fill={PAL.wood} />
      {/* Bram in the door, waving */}
      <Bust who="bram" x={38} y={122} scale={0.6} expr="pleased" bold />
      <Hand pose="open" x={62} y={62} rotate={18} scale={0.48} skin={SKIN.bram} sleeve={[PAL.blue, PAL.blueShade]} />
      {/* The ambulance coming in */}
      <Ground cx={90} cy={105} rx={24} ry={3.5} />
      <Move kind="from" dx={40} once>
        <rect x="83" y="62" width="10" height="6" rx="2" fill={PAL.sky} />
        <Shade color={PAL.paperShade} opacity={1} at={[112, 84, 8, 30]}>
          <path d="M70 100V72Q70 68 74 68H106Q110 68 110 72V100Z" fill={PAL.white} />
        </Shade>
        <path d="M70 76H64Q60 76 60 80V100H70Z" fill={PAL.paperShade} />
        <path d="M70 79H63V86H70Z" fill={PAL.ice} />
        <rect x="70" y="86" width="40" height="6" fill={PAL.red} />
        <path d="M90 72V82M85 77H95" stroke={PAL.red} strokeWidth="3.6" strokeLinecap="round" />
        <circle cx="70" cy="101" r="5.5" fill={PAL.slateDark} />
        <circle cx="100" cy="101" r="5.5" fill={PAL.slateDark} />
      </Move>
    </g>
  ),
} as Record<string, () => JSX.Element>;
